// Cloudflare Pages Function: POST /api/lead
// Forwards one lead record to the CRM webhook (env.CRM_WEBHOOK_URL). Open Item 10 decides the CRM; this is the contract adapter.
// On any failure it alerts Josh via env.ALERT_WEBHOOK_URL and returns 502 so the page shows the phone/email fallback. A silent lost lead is launch-blocking.
const INTENTS = ["buyer", "renewal", "refinance", "investor", "self-employed", "distress", "other"];
// Which page/flow produced the record. Unknown values are kept but marked "other".
const FORMS = ["contact", "renewal-reminder", "equity-estimator", "apply", "accepted-offer", "refer", "quiz", "check-up", "callback"];
const clean = (v, n = 2000) => String(v ?? "").slice(0, n).trim();
// tool_inputs: only flat primitives, max 20 keys, sent only when the visitor ticks "include my estimate".
const tools = (v) => { if (!v || typeof v !== "object" || Array.isArray(v)) return null; const o = {}; for (const [k, x] of Object.entries(v).slice(0, 20)) if (["number", "boolean"].includes(typeof x) || typeof x === "string") o[String(k).slice(0, 40)] = typeof x === "string" ? x.slice(0, 120) : x; return Object.keys(o).length ? o : null; };
// extra: flow answers (application steps, referral details, quiz answers). Flat primitives only, strings ≤120 chars, max 30 keys.
// Never contains a SIN, date of birth, account or card number: the forms do not ask for them, and the key filter below drops anything that looks like one.
const BLOCKED_KEYS = /sin|social|dob|birth|account|card|passport|licen[cs]e_no/i;
const extra = (v) => { if (!v || typeof v !== "object" || Array.isArray(v)) return null; const o = {}; for (const [k, x] of Object.entries(v).slice(0, 30)) { const key = String(k).slice(0, 40); if (BLOCKED_KEYS.test(key)) continue; if (["number", "boolean"].includes(typeof x)) o[key] = x; else if (typeof x === "string") o[key] = x.slice(0, 120); } return Object.keys(o).length ? o : null; };

export async function onRequestPost({ request, env }) {
  let b;
  try { b = await request.json(); } catch { return new Response("Bad request", { status: 400 }); }
  const email = clean(b.email, 254);
  const form = clean(b.form, 60);
  // A call-back request needs a name and a phone number. Every other form needs a name and an email.
  const phoneOk = clean(b.phone, 40).replace(/\D/g, "").length >= 7;
  const contactOk = form === "callback" ? phoneOk : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!clean(b.name, 120) || !contactOk) return new Response("Invalid", { status: 422 });
  // Referrals: the referred person must have agreed to be contacted (CASL). Refuse the record otherwise.
  if (form === "refer" && b.consent_referee !== true) return new Response("Referee consent required", { status: 422 });
  const lead = {
    name: clean(b.name, 120), email, phone: clean(b.phone, 40),
    intent: INTENTS.includes(b.intent) ? b.intent : "other",
    timeline: clean(b.timeline, 120), message: clean(b.message),
    source_page: clean(b.source_page, 200), utm: b.utm && typeof b.utm === "object" ? b.utm : {},
    current_lender: clean(b.current_lender, 120), consent_enquiry: b.consent_enquiry === true, consent_reminders: b.consent_reminders === true, consent_marketing: b.consent_marketing === true,
    consent_referee: b.consent_referee === true,
    consent_recorded_at: new Date().toISOString(), form: FORMS.includes(form) ? form : "other", form_raw: form,
    tool_inputs: tools(b.tool_inputs), extra: extra(b.extra)
  };
  // Readable copy for email/Sheet automations: the same record as plain text, so nobody has to read raw JSON.
  const FORM_LABEL = { contact: "Contact form", "renewal-reminder": "Renewal reminder", "equity-estimator": "Home equity estimator", apply: "Application", "accepted-offer": "Accepted offer", refer: "Referral", quiz: "Quiz", "check-up": "Mortgage check-up", callback: "Call-back request", other: "Website form" };
  const label = (k) => String(k).replace(/[_-]+/g, " ").replace(/^./, (c) => c.toUpperCase());
  const rows = (o) => o ? Object.entries(o).map(([k, x]) => "  " + label(k) + ": " + x) : [];
  lead.subject = "New website lead: " + (FORM_LABEL[lead.form] || FORM_LABEL.other) + " from " + lead.name;
  lead.summary = [
    "Form: " + (FORM_LABEL[lead.form] || FORM_LABEL.other) + " (" + lead.source_page + ")",
    "Name: " + lead.name, lead.email && "Email: " + lead.email, lead.phone && "Phone: " + lead.phone,
    "Looking for: " + lead.intent, lead.timeline && "Timeline: " + lead.timeline, lead.current_lender && "Current lender: " + lead.current_lender,
    lead.message && "Message: " + lead.message,
    lead.extra && "Answers:\n" + rows(lead.extra).join("\n"),
    lead.tool_inputs && "Estimate inputs (shared by the visitor):\n" + rows(lead.tool_inputs).join("\n"),
    "Consent: enquiry " + (lead.consent_enquiry ? "yes" : "no") + ", reminders " + (lead.consent_reminders ? "yes" : "no") + ", marketing " + (lead.consent_marketing ? "yes" : "no") + (lead.consent_referee ? ", referee agreed yes" : ""),
    "Received: " + lead.consent_recorded_at
  ].filter(Boolean).join("\n");
  try {
    if (!env.CRM_WEBHOOK_URL) throw new Error("CRM_WEBHOOK_URL not configured");
    const r = await fetch(env.CRM_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    if (!r.ok) throw new Error("CRM responded " + r.status);
    return new Response("ok", { status: 200 });
  } catch (err) {
    if (env.ALERT_WEBHOOK_URL) { try { await fetch(env.ALERT_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ alert: "Lead delivery failed", error: String(err), lead }) }); } catch {} }
    return new Response("Delivery failed", { status: 502 });
  }
}
