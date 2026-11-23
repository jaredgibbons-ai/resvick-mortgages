// Lead function: delivery channels, backup, spam checks. Run: node --test tests/lead.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { onRequestPost } from "../functions/api/lead.js";

const good = { name: "Test Buyer", email: "buyer@example.com", phone: "604 555 0100", intent: "buyer", message: "Hello", form: "contact", consent_enquiry: true, source_page: "/contact/" };
const kv = () => { const m = new Map(); return { m, get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); } }; };
const req = (body, headers = {}) => new Request("https://www.resvickmortgages.com/api/lead", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) });
// fetch mock: routes by URL, records calls
function mockFetch(routes) {
  const calls = [];
  globalThis.fetch = async (url, init) => { calls.push({ url: String(url), init }); const h = Object.entries(routes).find(([k]) => String(url).startsWith(k)); const r = h ? h[1] : 200; if (r instanceof Error) throw r; return new Response(JSON.stringify({ success: true }), { status: r }); };
  return calls;
}

test("no channel configured: 502 and backup is marked FAILED", async () => {
  const LEADS = kv(); mockFetch({});
  const r = await onRequestPost({ request: req(good), env: { LEADS } });
  assert.equal(r.status, 502);
  const saved = JSON.parse([...LEADS.m.entries()].find(([k]) => k.startsWith("lead:"))[1]);
  assert.equal(saved.status, "FAILED"); assert.equal(saved.lead.name, "Test Buyer");
});

test("webhook only: 200", async () => {
  const calls = mockFetch({ "https://crm.test": 200 });
  const r = await onRequestPost({ request: req(good), env: { CRM_WEBHOOK_URL: "https://crm.test/h" } });
  assert.equal(r.status, 200); assert.equal(calls.length, 1);
  const sent = JSON.parse(calls[0].init.body); assert.match(sent.subject, /New website lead: Contact form from Test Buyer/); assert.match(sent.summary, /Phone: 604 555 0100/);
});

test("email only: sends to Josh with reply-to the visitor", async () => {
  const calls = mockFetch({ "https://api.resend.com": 200 });
  const r = await onRequestPost({ request: req(good), env: { RESEND_API_KEY: "k", LEAD_EMAIL_TO: "joshua@resvickmortgages.com" } });
  assert.equal(r.status, 200);
  const b = JSON.parse(calls[0].init.body); assert.deepEqual(b.to, ["joshua@resvickmortgages.com"]); assert.equal(b.reply_to, "buyer@example.com"); assert.match(b.text, /Name: Test Buyer/);
  assert.equal(calls[0].init.headers.Authorization, "Bearer k");
});

test("webhook fails, email works: delivered (200) and an alert goes out", async () => {
  const calls = mockFetch({ "https://crm.test": 500, "https://api.resend.com": 200, "https://alert.test": 200 });
  const LEADS = kv();
  const r = await onRequestPost({ request: req(good), env: { CRM_WEBHOOK_URL: "https://crm.test/h", RESEND_API_KEY: "k", LEAD_EMAIL_TO: "j@x.ca", ALERT_WEBHOOK_URL: "https://alert.test/a", LEADS } });
  assert.equal(r.status, 200);
  assert.ok(calls.some((c) => c.url.startsWith("https://alert.test")));
  assert.equal(JSON.parse([...LEADS.m.entries()].find(([k]) => k.startsWith("lead:"))[1]).status, "delivered");
});

test("everything fails: 502 and the lead is still backed up and alerted", async () => {
  const calls = mockFetch({ "https://crm.test": 500, "https://alert.test": 200 });
  const LEADS = kv();
  const r = await onRequestPost({ request: req(good), env: { CRM_WEBHOOK_URL: "https://crm.test/h", ALERT_WEBHOOK_URL: "https://alert.test/a", LEADS } });
  assert.equal(r.status, 502);
  assert.ok(calls.some((c) => c.url.startsWith("https://alert.test")));
  assert.equal(JSON.parse([...LEADS.m.entries()].find(([k]) => k.startsWith("lead:"))[1]).status, "FAILED");
});

test("honeypot filled: quiet ok, nothing delivered", async () => {
  const calls = mockFetch({});
  const r = await onRequestPost({ request: req({ ...good, website: "http://spam" }), env: { CRM_WEBHOOK_URL: "https://crm.test/h" } });
  assert.equal(r.status, 200); assert.equal(calls.length, 0);
});

test("cross-origin POST refused", async () => {
  mockFetch({});
  const r = await onRequestPost({ request: req(good, { Origin: "https://evil.example" }), env: { CRM_WEBHOOK_URL: "https://crm.test/h" } });
  assert.equal(r.status, 403);
});

test("same-origin POST allowed", async () => {
  mockFetch({ "https://crm.test": 200 });
  const r = await onRequestPost({ request: req(good, { Origin: "https://www.resvickmortgages.com" }), env: { CRM_WEBHOOK_URL: "https://crm.test/h" } });
  assert.equal(r.status, 200);
});

test("validation: bad email 422, callback needs a phone, referral needs consent", async () => {
  mockFetch({ "https://crm.test": 200 }); const env = { CRM_WEBHOOK_URL: "https://crm.test/h" };
  assert.equal((await onRequestPost({ request: req({ ...good, email: "nope" }), env })).status, 422);
  assert.equal((await onRequestPost({ request: req({ name: "A", form: "callback", phone: "123" }), env })).status, 422);
  assert.equal((await onRequestPost({ request: req({ name: "A", form: "callback", phone: "604 555 0100" }), env })).status, 200);
  assert.equal((await onRequestPost({ request: req({ ...good, form: "refer" }), env })).status, 422);
});

test("Turnstile: required only when the secret is set", async () => {
  const env = { CRM_WEBHOOK_URL: "https://crm.test/h", TURNSTILE_SECRET: "s" };
  mockFetch({ "https://crm.test": 200, "https://challenges.cloudflare.com": 200 });
  assert.equal((await onRequestPost({ request: req(good), env })).status, 422); // no token
  assert.equal((await onRequestPost({ request: req({ ...good, turnstile: "tok" }), env })).status, 200);
  globalThis.fetch = async (u) => String(u).includes("challenges") ? new Response(JSON.stringify({ success: false }), { status: 200 }) : new Response("ok");
  assert.equal((await onRequestPost({ request: req({ ...good, turnstile: "bad" }), env })).status, 422);
});

test("rate limit: ninth request in ten minutes from one address is refused", async () => {
  mockFetch({ "https://crm.test": 200 }); const LEADS = kv(); const env = { CRM_WEBHOOK_URL: "https://crm.test/h", LEADS };
  let last;
  for (let i = 0; i < 9; i++) last = await onRequestPost({ request: req(good, { "CF-Connecting-IP": "203.0.113.9" }), env });
  assert.equal(last.status, 429);
});

test("blocked keys never travel in extra", async () => {
  const calls = mockFetch({ "https://crm.test": 200 });
  await onRequestPost({ request: req({ ...good, extra: { sin_number: "123", dob: "1990", budget: "ok" } }), env: { CRM_WEBHOOK_URL: "https://crm.test/h" } });
  const sent = JSON.parse(calls[0].init.body); assert.deepEqual(sent.extra, { budget: "ok" });
});
