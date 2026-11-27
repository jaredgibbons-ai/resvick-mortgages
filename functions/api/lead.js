// Cloudflare Pages Function: POST /api/lead
// Delivers one lead record. Primary channels (any one succeeding counts as delivered, all that are configured are tried):
//   1. CRM webhook   env.CRM_WEBHOOK_URL
//   2. Email to Josh env.RESEND_API_KEY + env.LEAD_EMAIL_TO (+ optional env.LEAD_EMAIL_FROM), sent through Resend's HTTPS API
// Safety nets (all optional, all no-ops until configured):
//   - env.LEADS (KV binding): a backup copy of every lead (60 days), marked delivered or failed, so nothing is lost if both channels are down
//   - env.TURNSTILE_SECRET: Cloudflare Turnstile check (the pages load the widget only when TURNSTILE_SITE_KEY is set at build time)
//   - env.ALERT_WEBHOOK_URL (and LEAD_EMAIL_TO when Resend is set): alert when a channel fails
// If no primary channel succeeds it returns 502 so the page shows the phone/email fallback. A silent lost lead is launch-blocking.
const INTENTS = ["buyer", "renewal", "refinance", "investor", "self-employed", "distress", "other"];
// Which page/flow produced the record. Unknown values are kept but marked "other".
const FORMS = ["contact", "renewal-reminder", "equity-estimator", "apply", "accepted-offer", "refer", "quiz", "check-up", "callback", "checklist", "download", "calc-results"];
// Free printables. A "download" lead names one of these keys; the visitor gets the matching link by email. Only these fixed
// titles and links are ever sent to a visitor's address, so the form cannot be used to mail arbitrary text to a stranger.
export const PRINTABLES = {
  "first-time-buyer-game-plan": ["First-time buyer game plan", "/assets/downloads/resvick-first-time-buyer-game-plan.pdf"],
  "closing-costs-worksheet": ["Closing costs worksheet", "/assets/downloads/resvick-closing-costs-worksheet.pdf"],
  "mortgage-renewal-checklist": ["Mortgage renewal checklist", "/assets/downloads/resvick-mortgage-renewal-checklist.pdf"],
  "down-payment-sources": ["Down payment sources sheet", "/assets/downloads/resvick-down-payment-sources.pdf"],
  "document-checklist": ["Mortgage document checklist", "/assets/downloads/resvick-mortgage-document-checklist.pdf"]
};
const clean = (v, n = 2000) => String(v ?? "").slice(0, n).trim();
// tool_inputs: only flat primitives, max 20 keys, sent only when the visitor ticks "include my estimate".
const tools = (v) => { if (!v || typeof v !== "object" || Array.isArray(v)) return null; const o = {}; for (const [k, x] of Object.entries(v).slice(0, 20)) if (["number", "boolean"].includes(typeof x) || typeof x === "string") o[String(k).slice(0, 40)] = typeof x === "string" ? x.slice(0, 120) : x; return Object.keys(o).length ? o : null; };
// extra: flow answers (application steps, referral details, quiz answers). Flat primitives only, strings ≤120 chars, max 30 keys.
// Never contains a SIN, date of birth, account or card number: the forms do not ask for them, and the key filter below drops anything that looks like one.
const BLOCKED_KEYS = /sin|social|dob|birth|account|card|passport|licen[cs]e_no/i;
const extra = (v) => { if (!v || typeof v !== "object" || Array.isArray(v)) return null; const o = {}; for (const [k, x] of Object.entries(v).slice(0, 30)) { const key = String(k).slice(0, 40); if (BLOCKED_KEYS.test(key)) continue; if (["number", "boolean"].includes(typeof x)) o[key] = x; else if (typeof x === "string") o[key] = x.slice(0, 120); } return Object.keys(o).length ? o : null; };

const EMAIL_OK = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const BACKUP_DAYS = 60;

async function verifyTurnstile(env, token, ip) {
  if (!env.TURNSTILE_SECRET) return true; // not configured: skip
  if (!token) return false;
  try {
    const f = new FormData(); f.append("secret", env.TURNSTILE_SECRET); f.append("response", String(token).slice(0, 2048)); if (ip) f.append("remoteip", ip);
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: f });
    const j = await r.json();
    return j.success === true;
  } catch { return true; } // Turnstile itself unreachable: do not lose a real lead over it
}

// Light per-IP limit (KV is not atomic, so this is a speed bump, not a guarantee). Skipped without the LEADS binding.
async function limited(env, ip) {
  if (!env.LEADS || !ip) return false;
  const key = "rl:" + ip + ":" + Math.floor(Date.now() / 600000);
  try {
    const n = Number(await env.LEADS.get(key)) || 0;
    if (n >= 8) return true;
    await env.LEADS.put(key, String(n + 1), { expirationTtl: 660 });
  } catch {}
  return false;
}

async function sendWebhook(url, lead) {
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
  if (!r.ok) throw new Error("CRM webhook responded " + r.status);
}

async function sendEmail(env, { to, subject, text, replyTo }) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + env.RESEND_API_KEY },
    body: JSON.stringify({ from: env.LEAD_EMAIL_FROM || "Resvick Mortgages <leads@resvickmortgages.com>", to: String(to).split(",").map((x) => x.trim()).filter(Boolean), subject, text, ...(replyTo ? { reply_to: replyTo } : {}) })
  });
  if (!r.ok) throw new Error("Email responded " + r.status);
}

export async function onRequestPost({ request, env }) {
  // Same-origin only (browsers always send Origin on a cross-site POST).
  const origin = request.headers.get("Origin");
  if (origin) { try { if (new URL(origin).host !== new URL(request.url).host) return new Response("Forbidden", { status: 403 }); } catch { return new Response("Forbidden", { status: 403 }); } }
  let b;
  try { b = await request.json(); } catch { return new Response("Bad request", { status: 400 }); }
  // Honeypot: the real forms never send this. A bot that fills it gets a quiet "ok" and nothing is delivered.
  if (b && b.website) return new Response("ok", { status: 200 });
  const ip = request.headers.get("CF-Connecting-IP") || "";
  if (await limited(env, ip)) return new Response("Too many requests", { status: 429 });
  if (!(await verifyTurnstile(env, b.turnstile, ip))) return new Response("Verification failed", { status: 422 });
  const email = clean(b.email, 254);
  const form = clean(b.form, 60);
  // A call-back request needs a name and a phone number. Every other form needs a name and an email.
  const phoneOk = clean(b.phone, 40).replace(/\D/g, "").length >= 7;
  const contactOk = form === "callback" ? phoneOk : EMAIL_OK.test(email);
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
    tool_inputs: tools(b.tool_inputs), extra: extra(b.extra),
    // What a calculator showed the visitor, as plain text. Only ever sent to Josh, never to the visitor's address.
    result_text: form === "calc-results" ? clean(b.result_text, 3000) : "",
    printable: form === "download" && Object.prototype.hasOwnProperty.call(PRINTABLES, clean(b.printable, 60)) ? clean(b.printable, 60) : ""
  };
  // Readable copy for email/Sheet automations: the same record as plain text, so nobody has to read raw JSON.
  const FORM_LABEL = { contact: "Contact form", "renewal-reminder": "Renewal reminder", "equity-estimator": "Home equity estimator", apply: "Application", "accepted-offer": "Accepted offer", refer: "Referral", quiz: "Quiz", "check-up": "Mortgage check-up", checklist: "Document checklist", callback: "Call-back request", download: "Free printable", "calc-results": "Calculator results", other: "Website form" };
  const label = (k) => String(k).replace(/[_-]+/g, " ").replace(/^./, (c) => c.toUpperCase());
  const rows = (o) => o ? Object.entries(o).map(([k, x]) => "  " + label(k) + ": " + x) : [];
  lead.subject = "New website lead: " + (FORM_LABEL[lead.form] || FORM_LABEL.other) + " from " + lead.name;
  lead.summary = [
    "Form: " + (FORM_LABEL[lead.form] || FORM_LABEL.other) + " (" + lead.source_page + ")",
    "Name: " + lead.name, lead.email && "Email: " + lead.email, lead.phone && "Phone: " + lead.phone,
    "Looking for: " + lead.intent, lead.timeline && "Timeline: " + lead.timeline, lead.current_lender && "Current lender: " + lead.current_lender,
    lead.message && "Message: " + lead.message,
    lead.extra && "Answers:\n" + rows(lead.extra).join("\n"),
    lead.printable && "Printable: " + PRINTABLES[lead.printable][0],
    lead.tool_inputs && "Estimate inputs (shared by the visitor):\n" + rows(lead.tool_inputs).join("\n"),
    lead.result_text && "What the calculator showed them:\n" + lead.result_text,
    "Consent: enquiry " + (lead.consent_enquiry ? "yes" : "no") + ", reminders " + (lead.consent_reminders ? "yes" : "no") + ", marketing " + (lead.consent_marketing ? "yes" : "no") + (lead.consent_referee ? ", referee agreed yes" : ""),
    "Received: " + lead.consent_recorded_at
  ].filter(Boolean).join("\n");
  const channels = [];
  if (env.CRM_WEBHOOK_URL) channels.push(["CRM webhook", () => sendWebhook(env.CRM_WEBHOOK_URL, lead)]);
  if (env.RESEND_API_KEY && env.LEAD_EMAIL_TO) channels.push(["Email", () => sendEmail(env, { to: env.LEAD_EMAIL_TO, subject: lead.subject, text: lead.summary, replyTo: EMAIL_OK.test(lead.email) ? lead.email : undefined })]);
  const failures = [];
  let delivered = false;
  if (!channels.length) failures.push("No delivery channel configured (set CRM_WEBHOOK_URL or RESEND_API_KEY and LEAD_EMAIL_TO)");
  const settled = await Promise.allSettled(channels.map(([, fn]) => fn()));
  settled.forEach((r, i) => { if (r.status === "fulfilled") delivered = true; else failures.push(channels[i][0] + ": " + String(r.reason && r.reason.message || r.reason)); });
  // Backup copy, written whatever happened, so a failed delivery can be recovered by hand.
  if (env.LEADS) { try { await env.LEADS.put("lead:" + lead.consent_recorded_at + ":" + crypto.randomUUID().slice(0, 8), JSON.stringify({ status: delivered ? "delivered" : "FAILED", failures, lead }), { expirationTtl: BACKUP_DAYS * 86400 }); } catch {} }
  // Any failed channel (even when another worked) is reported to Josh.
  if (failures.length) {
    const note = "Lead delivery problem (" + (delivered ? "delivered through another channel" : "NOT delivered") + "):\n" + failures.join("\n") + "\n\n" + lead.summary;
    if (env.ALERT_WEBHOOK_URL) { try { await fetch(env.ALERT_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ alert: "Lead delivery failed", error: failures.join("; "), delivered, lead, summary: note }) }); } catch {} }
    else if (env.RESEND_API_KEY && env.LEAD_EMAIL_TO && failures.some((f) => !f.startsWith("Email"))) { try { await sendEmail(env, { to: env.LEAD_EMAIL_TO, subject: "Website lead delivery problem", text: note }); } catch {} }
  }
  // Printable requested: email the visitor the link. Best effort only. The page already shows the download button,
  // so a failed send never fails the lead.
  if (delivered && lead.printable && env.RESEND_API_KEY && EMAIL_OK.test(lead.email)) {
    const [title, path] = PRINTABLES[lead.printable];
    const first = lead.name.split(/\s+/)[0].replace(/[^\p{L}'-]/gu, "").slice(0, 40) || "there";
    try {
      await sendEmail(env, { to: lead.email, replyTo: env.LEAD_EMAIL_TO || "joshua@resvickmortgages.com", subject: "Your " + title + " from Resvick Mortgages",
        text: "Hi " + first + ",\n\nHere's your " + title + ":\nhttps://www.resvickmortgages.com" + path + "\n\nIt prints on letter paper. If you'd like me to look over your numbers, reply to this email or book a free 15-minute call:\nhttps://cal.com/resvickmortgages/mortgage-advice\n\nJoshua Resvick\nMortgage Broker, Xeva Mortgage\n778.882.5674\n\nYou're getting this because you asked for this download on resvickmortgages.com." });
    } catch {}
  }
  return delivered ? new Response("ok", { status: 200 }) : new Response("Delivery failed", { status: 502 });
}

// Anything but POST gets a clear 405 instead of a 404.
export async function onRequest() {
  return new Response("Method not allowed", { status: 405, headers: { allow: "POST" } });
}
