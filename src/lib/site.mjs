// Shared site constants + components. Every fact here comes from the build prompt's §2 (verified; invent nothing).
import fs from "node:fs";
import crypto from "node:crypto";
// Cache-busting: every CSS and JS link carries a short hash of the file, so a change reaches visitors on their next page
// view instead of after the browser's cached copy expires. Unchanged files keep their hash and stay cached.
const VERS = new Map();
export function asset(url) {
  if (!VERS.has(url)) { let v = ""; try { v = crypto.createHash("sha256").update(fs.readFileSync("src" + url)).digest("hex").slice(0, 10); } catch {} VERS.set(url, v); }
  const v = VERS.get(url); return v ? url + "?v=" + v : url;
}
import { CITY_NAME } from "./nearby.mjs";
import { mergeLocal } from "./city-facts.mjs";

export const SITE = {
  origin: "https://www.resvickmortgages.com",
  name: "Resvick Mortgages",
  person: "Joshua Resvick",
  brokerage: "Xeva Mortgage",
  phone: "778.882.5674",
  phoneHref: "tel:+17788825674",
  smsHref: "sms:+17788825674",
  whatsappHref: "https://wa.me/17788825674",
  email: "joshua@resvickmortgages.com",
  book: "https://cal.com/resvickmortgages/mortgage-advice",
  social: { instagram: "https://www.instagram.com/resvickmortgages/", linkedin: "https://www.linkedin.com/in/josh-resvick-250aa1a2/", bcfsa: "https://www.bcfsa.ca/mortgage-broker/MB503619" }, // Josh's own profiles only (Jared, Nov 23 2026). Add Facebook / Google profile here when they exist; they feed the schema sameAs.
  fullApp: "https://velocity-client.newton.ca/en/client/journey/home?shortCode=n7tlotk51ren",
  bookRoot: "https://cal.com/resvickmortgages",
  address: { street: "#106, 2626 Croydon Drive", city: "Surrey", region: "BC", postal: "V3Z 0S8" },
  licence: "BCFSA Brokerage Licence #X300203",
  brokerLicence: "MB503619",
  turnstileKey: process.env.TURNSTILE_SITE_KEY || "", // Cloudflare Turnstile site key (public). Unset = no spam-check script on the pages.
  ga4: process.env.GA4_ID || "" // set GA4_ID in the Pages build environment once Josh creates the property (Open Item 15)
};

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const NAV = [
  { label: "Buy", href: "/first-time-home-buyer-bc/", kids: [
    ["First-time buyer guide", "/first-time-home-buyer-bc/"], ["Programs & grants", "/first-time-buyer-programs-bc/"], ["Pre-approval", "/mortgage-pre-approval-bc/"],
    ["How much can I afford?", "/how-much-mortgage-can-i-afford/"], ["Down payment", "/down-payment-guide-bc/"], ["Closing costs", "/closing-costs-bc/"], ["Presales", "/presale-mortgages-bc/"], ["Foreign buyers", "/foreign-buyers-bc/"], ["Accepted an offer?", "/accepted-offer/"], ["Free document checklist", "/mortgage-document-checklist/"]] },
  { label: "Renew", href: "/mortgage-renewal-bc/", kids: [
    ["Renewal guide", "/mortgage-renewal-bc/"], ["Switch lenders", "/switch-mortgage-lenders-at-renewal/"], ["Stress-test exemption", "/stress-test-exemption-switching-lenders/"],
    ["Early renewal", "/early-mortgage-renewal/"], ["Your renewal letter", "/mortgage-renewal-letter-explained/"], ["Free renewal reminder", "/mortgage-renewal-reminder/"]] },
  { label: "Refinance", href: "/refinance-mortgage-bc/", kids: [
    ["Refinance guide", "/refinance-mortgage-bc/"], ["Is it worth it?", "/is-it-worth-refinancing/"], ["Pay off debt", "/refinance-to-pay-off-debt/"],
    ["Cash-out refinance", "/cash-out-refinance-bc/"], ["Home equity line (HELOC)", "/heloc-bc/"], ["Secondary suite refinance", "/secondary-suite-refinance/"]] },
  { label: "Situations", href: "/resources/#your-situation", kids: [
    ["Self-employed", "/self-employed-mortgage-bc/"], ["New to Canada", "/new-to-canada-mortgage/"], ["Separation and divorce", "/mortgages-during-separation-and-divorce/"],
    ["Behind on payments", "/behind-on-mortgage-payments/"], ["Bad credit", "/bad-credit-mortgage-bc/"], ["Investors", "/investment-property-mortgages-bc/"], ["Cities served", "/bc-mortgage-broker-service-areas/"]] },
  { label: "Tools", href: "/mortgage-calculators/", kids: [
    ["Mortgage calculators", "/mortgage-calculators/"], ["Two-minute mortgage check", "/mortgage-check/"], ["Mortgage check-up", "/mortgage-check-up/"],
    ["BC property transfer tax", "/bc-property-transfer-tax-calculator/"], ["Penalty calculator", "/mortgage-penalty-calculator/"], ["Lender match", "/lender-match/"]] },
  { label: "Learn", href: "/resources/", kids: [
    ["All guides by topic", "/resources/"], ["Mortgage rates explained", "/mortgage-rates-bc/"], ["Fixed vs variable", "/fixed-vs-variable-mortgage/"],
    ["Penalties (IRD)", "/interest-rate-differential/"], ["Broker vs bank", "/mortgage-broker-vs-bank/"], ["News and rule changes", "/guides/"]] },
  { label: "About", href: "/about-joshua-resvick/", kids: [
    ["About Joshua", "/about-joshua-resvick/"], ["Aftercare program", "/mortgage-aftercare-program/"], ["Lender Comparison Report", "/lender-comparison-report/"],
    ["How brokers get paid", "/how-mortgage-brokers-get-paid/"], ["Realtors, notaries and lawyers", "/partners/"], ["Refer a friend", "/refer/"], ["Contact", "/contact/"]] }
];

/** Which top-level nav item to mark current: a page that is listed in a menu marks that menu; city pages sit under Situations ("Cities served"); the Apply page is a button, not a menu item. Otherwise the page's own `nav` hint. */
export function navCurrent(page) {
  if (page.slug === "/apply/") return "";
  const hit = NAV.find((n) => n.href === page.slug || n.kids.some(([, h]) => h === page.slug));
  if (hit) return hit.href;
  if (/^\/mortgage-broker-[a-z-]+\/$/.test(page.slug)) return NAV.find((n) => n.label === "Situations").href;
  return page.nav || "";
}

export function header(current) {
  const items = NAV.map((n) => {
    const kids = n.kids.map(([t, h]) => `<li><a href="${h}">${esc(t)}</a></li>`).join("");
    return `<li class="nav-item"><a class="nav-top" href="${n.href}"${current === n.href || n.kids.some(([, h]) => h === current) ? ' aria-current="page"' : ""}>${esc(n.label)}</a><ul class="nav-drop">${kids}</ul></li>`;
  }).join("");
  return `<header class="site-header" data-nocount>
<a class="skip" href="#main">Skip to content</a>
<div class="hdr-in">
<a class="brand" href="/"><span class="brand-name">Resvick Mortgages</span><span class="brand-sub">Xeva Mortgage</span></a>
<nav class="nav" aria-label="Primary"><ul>${items}</ul></nav>
<div class="hdr-cta"><a class="hdr-phone" href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a><a class="btn btn-ghost btn-sm" href="/apply/" data-evt="apply_click">Start my application</a><a class="btn btn-ghost btn-sm" href="/mortgage-check-up/" data-evt="checkup_click">Check-up</a><a class="btn btn-sm" href="${SITE.book}" data-evt="book_call_click">Book a call</a></div>
<details class="mnav"><summary aria-label="Menu"><span></span></summary><div class="mnav-panel"><ul>${NAV.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("")}</ul>
<div class="mnav-actions"><a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a><a class="btn btn-ghost" href="/apply/" data-evt="apply_click">Start my application</a><a class="btn btn-ghost" href="/mortgage-check-up/" data-evt="checkup_click">Mortgage check-up</a></div><a class="mnav-phone" href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a></div></details>
</div></header>`;
}

/** Cookie notice. Only rendered when a GA4 ID is configured; Accept and Decline carry equal weight. consent.js shows and hides it. */
const cookieNotice = () => SITE.ga4 ? `<div id="cookie-notice" class="cookie" role="region" aria-label="Cookie notice" hidden data-nocount><p>We would like to use Google Analytics to count visits and clicks. It sets cookies, and it never receives your name, email or financial details. You choose. See the <a href="/privacy/">privacy policy</a>.</p><div class="cookie-b"><button type="button" class="btn btn-ghost" data-consent="decline">Decline</button><button type="button" class="btn btn-ghost" data-consent="accept">Accept</button></div></div>` : "";

export function footer() {
  return `<footer class="site-footer" data-nocount>
<div class="ftr-in">
<div><p class="ftr-brand">Resvick Mortgages</p>
<address class="ftr-addr"><span>Resvick Mortgages, Joshua Resvick, Mortgage Broker, Xeva Mortgage, #106, 2626 Croydon Drive, Surrey, BC</span><span>${SITE.licence}</span><span>Broker Licence #${SITE.brokerLicence}</span></address>
<ul class="ftr-contact"><li><a href="${SITE.phoneHref}">${SITE.phone}</a></li><li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li><a href="${SITE.whatsappHref}" data-evt="whatsapp_click" rel="noopener">WhatsApp</a></li></ul>
<p class="small">I work with clients across BC, online and by phone, from my Surrey office. You can check any BC mortgage broker's licence with <a href="https://www.bcfsa.ca/public-resources/mortgage-brokers/find-mortgage-broker" rel="noopener">BCFSA's Find a Mortgage Broker</a>.</p></div>
<div><p class="ftr-h">Buyers</p><ul><li><a href="/first-time-home-buyer-bc/">First-time buyers</a></li><li><a href="/down-payment-guide-bc/">Down payment guide</a></li><li><a href="/mortgage-pre-approval-bc/">Pre-approval</a></li><li><a href="/closing-costs-bc/">Closing costs</a></li><li><a href="/partners/">Realtors, notaries and lawyers</a></li></ul></div>
<div><p class="ftr-h">Homeowners</p><ul><li><a href="/mortgage-renewal-bc/">Mortgage renewal</a></li><li><a href="/refinance-mortgage-bc/">Refinancing</a></li><li><a href="/self-employed-mortgage-bc/">Self-employed</a></li><li><a href="/mortgage-aftercare-program/">Aftercare program</a></li></ul></div>
<div><p class="ftr-h">Tools</p><ul><li><a href="/mortgage-calculators/">Calculators</a></li><li><a href="/bc-property-transfer-tax-calculator/">Property transfer tax</a></li><li><a href="/mortgage-check-up/">Mortgage check-up</a></li><li><a href="/apply/">Start my application</a></li><li><a href="/mortgage-rates-bc/">Rates</a></li><li><a href="/resources/">All guides</a></li><li><a href="/guides/">News and rule changes</a></li><li><a href="/contact/">Contact</a></li></ul></div>
<div><p class="ftr-h">Who I help</p><ul><li><a href="/mortgages-for-first-responders/">First responders</a></li><li><a href="/mortgages-for-nurses-and-healthcare-workers/">Nurses and healthcare</a></li><li><a href="/mortgages-for-military-and-veterans/">Military and veterans</a></li><li><a href="/mortgage-for-contractors/">Contractors and trades</a></li><li><a href="/mortgages-for-doctors-and-dentists/">Doctors and dentists</a></li><li><a href="/mortgages-for-real-estate-agents/">Real estate agents</a></li><li><a href="/mortgages-for-lawyers-accountants-and-engineers/">Lawyers, accountants, engineers</a></li><li><a href="/mortgages-for-government-and-city-employees/">Government and city staff</a></li><li><a href="/mortgages-for-teachers-and-school-staff/">Teachers and school staff</a></li><li><a href="/mortgages-for-tech-workers/">Tech workers</a></li><li><a href="/mortgages-for-truckers-and-owner-operators/">Truckers and owner-operators</a></li><li><a href="/mortgages-for-camp-mine-and-shift-workers/">Camp, mine and shift workers</a></li><li><a href="/new-to-canada-mortgage/">New to Canada</a></li><li><a href="/mortgages-for-single-parents/">Single parents</a></li><li><a href="/mortgages-during-separation-and-divorce/">Separation and divorce</a></li><li><a href="/co-buying-a-home/">Co-buying</a></li><li><a href="/downsizing-and-your-mortgage/">Downsizing</a></li><li><a href="/investment-property-mortgages-bc/">Investors</a></li><li><a href="/commercial-mortgages-bc/">Commercial</a></li><li><a href="/condo-and-townhouse-mortgages/">Condos and townhouses</a></li><li><a href="/mobile-home-mortgages-bc/">Mobile and manufactured homes</a></li><li><a href="/leasehold-mortgages-bc/">Leased land</a></li><li><a href="/first-nations-land-mortgages-bc/">First Nations land</a></li><li><a href="/farm-and-alr-mortgages-bc/">Farm and ALR</a></li></ul></div>
<div><p class="ftr-h"><a href="/bc-mortgage-broker-service-areas/">Cities served</a></p><ul class="ftr-cities"><li><a href="/mortgage-broker-surrey/">Surrey</a></li><li><a href="/mortgage-broker-white-rock/">White Rock</a></li><li><a href="/mortgage-broker-delta/">Delta</a></li><li><a href="/mortgage-broker-langley/">Langley</a></li><li><a href="/mortgage-broker-richmond/">Richmond</a></li><li><a href="/mortgage-broker-vancouver/">Vancouver</a></li><li><a href="/mortgage-broker-north-vancouver/">North Vancouver</a></li><li><a href="/mortgage-broker-burnaby/">Burnaby</a></li><li><a href="/mortgage-broker-new-westminster/">New Westminster</a></li><li><a href="/mortgage-broker-coquitlam/">Coquitlam</a></li><li><a href="/mortgage-broker-port-coquitlam/">Port Coquitlam</a></li><li><a href="/mortgage-broker-port-moody/">Port Moody</a></li><li><a href="/mortgage-broker-maple-ridge/">Maple Ridge</a></li><li><a href="/mortgage-broker-pitt-meadows/">Pitt Meadows</a></li><li><a href="/mortgage-broker-mission/">Mission</a></li><li><a href="/mortgage-broker-abbotsford/">Abbotsford</a></li><li><a href="/mortgage-broker-chilliwack/">Chilliwack</a></li><li><a href="/mortgage-broker-squamish/">Squamish</a></li><li><a href="/mortgage-broker-whistler/">Whistler</a></li><li><a href="/mortgage-broker-vancouver-island/">Vancouver Island</a></li><li><a href="/mortgage-broker-victoria/">Victoria</a></li><li><a href="/mortgage-broker-langford/">Langford</a></li><li><a href="/mortgage-broker-saanich/">Saanich</a></li><li><a href="/mortgage-broker-duncan/">Duncan</a></li><li><a href="/mortgage-broker-nanaimo/">Nanaimo</a></li><li><a href="/mortgage-broker-port-alberni/">Port Alberni</a></li><li><a href="/mortgage-broker-courtenay/">Courtenay</a></li><li><a href="/mortgage-broker-campbell-river/">Campbell River</a></li><li><a href="/mortgage-broker-powell-river/">Powell River</a></li><li><a href="/mortgage-broker-kelowna/">Kelowna</a></li><li><a href="/mortgage-broker-west-kelowna/">West Kelowna</a></li><li><a href="/mortgage-broker-penticton/">Penticton</a></li><li><a href="/mortgage-broker-keremeos/">Keremeos</a></li><li><a href="/mortgage-broker-princeton/">Princeton</a></li><li><a href="/mortgage-broker-vernon/">Vernon</a></li><li><a href="/mortgage-broker-invermere/">Invermere</a></li><li><a href="/mortgage-broker-cranbrook/">Cranbrook</a></li><li><a href="/mortgage-broker-kamloops/">Kamloops</a></li><li><a href="/mortgage-broker-quesnel/">Quesnel</a></li><li><a href="/mortgage-broker-prince-george/">Prince George</a></li><li><a href="/mortgage-broker-terrace/">Terrace</a></li><li><a href="/mortgage-broker-kitimat/">Kitimat</a></li><li><a href="/mortgage-broker-prince-rupert/">Prince Rupert</a></li><li><a href="/mortgage-broker-fort-st-john/">Fort St. John</a></li><li><a href="/mortgage-broker-trail-castlegar/">Trail and Castlegar</a></li><li><a href="/mortgage-broker-nelson/">Nelson</a></li><li><a href="/mortgage-broker-fernie/">Fernie</a></li><li><a href="/mortgage-broker-osoyoos-oliver/">Osoyoos and Oliver</a></li><li><a href="/mortgage-broker-revelstoke/">Revelstoke</a></li></ul></div>
</div>
<div class="ftr-legal"><p>© ${new Date().getFullYear()} Resvick Mortgages. Mortgage information on this site is general education, not advice on your file; every approval is subject to lender and insurer underwriting. </p><p class="ftr-links"><a href="/privacy/">Privacy policy</a> <a href="/terms-of-use/">Terms of use</a>${SITE.ga4 ? ' <button type="button" class="linklike" data-cookie-settings>Cookie settings</button>' : ""}</p></div>
</footer>`;
}

export const proofStrip = () => `<ul class="proof" data-nocount aria-label="At a glance"><li><strong>1,000+</strong><span>mortgages funded</span></li><li><strong>Xeva Mortgage</strong><span>brokerage</span></li><li><strong>BC-wide</strong><span>online and by phone</span></li><li><strong>Former underwriter</strong><span>five years at a lender</span></li></ul>`;

export const cta = (o = {}) => `<aside class="cta-block${o.dark ? " cta-dark" : ""}" data-cta>
<div><h2>${esc(o.title || "Want this run on your numbers?")}</h2><p>${o.text || "Book a 15-minute call and I'll work through your own figures with you. No obligation."}</p></div>
<a class="btn" href="${o.href || SITE.book}" data-evt="book_call_click">${esc(o.label || "Book a 15-minute call")}</a></aside>`;
/** Closing-block wording by page type (Nov 2026 voice pass: one block repeated on 193 pages). First person, plain. */
const CLOSE_COPY = {
  buy: ["Buying? Start with your numbers.", "On a 15-minute call I'll go through your income, savings and timeline and tell you what's realistic. No obligation."],
  renew: ["Renewal coming up? Look before you sign.", "Tell me when your term ends and I'll show you how your lender's offer compares. Starting about 120 days out gives you the most room."],
  refi: ["Thinking of refinancing? Check the math first.", "I'll run your numbers, including what it costs to leave your current mortgage, and tell you if it's worth it."],
  situation: ["Let's look at your situation.", "Tell me what's going on. I'll read your file the way a lender will, then tell you what's realistic and what to fix first."],
  tool: ["Got your number? Let's check it against real lenders.", "A calculator gives you a rough answer. A 15-minute call gets you real options."],
  home: ["Let's talk it through.", "One 15-minute call is enough to see where you stand and what to do next. No obligation, and you'll be talking to me, the person who does the work."],
  rates: ["Want a real rate for your file?", "Rates depend on your income, down payment and property. A 15-minute call is enough to see what lenders would actually offer you."],
  learn: ["Still have a question?", "Ask me directly. A 15-minute call is free, and you'll get a straight answer for your own situation."],
  trust: ["Talk to the person who'll do the work.", "Book a 15-minute call. You'll deal with me from the first question to the day your mortgage funds, and after."],
  legal: ["Questions about this page?", "Call or email me and I'll answer them directly. You can also book a 15-minute call."],
  other: ["Want this run on your numbers?", "Book a 15-minute call and I'll work through your own figures with you. No obligation."]
};
const T_RATES = /mortgage-rates|fixed-mortgage-rate|variable-rate|fixed-vs-variable|fixed-or-variable|stress-test-canada|open-vs-closed|bank-of-canada|thirty-year/;
const T_LEARN = /^\/(mortgage-faq|mortgage-glossary|resources|guides|mortgage-document-checklist|mortgage-application-checklist|what-happens-after-you-apply)\/$/;
const T_TRUST = /^\/(about-joshua-resvick|partners|refer|lender-comparison-report|mortgage-aftercare-program|how-mortgage-brokers-get-paid|mortgage-broker-vs-bank|bc-mortgage-broker-service-areas|apply|contact)\/$|what-a-mortgage-broker-costs/;
const T_LEGAL = /^\/(privacy|terms-of-use)\/$/;
const T_CITY = /^\/mortgage-broker-(?!vs-bank)[a-z-]+\/$/;
const T_TOOL = /calculator|break-even|equity-estimator|lender-match|mortgage-check|readiness|check-up|-check\/$/;
const T_RENEW = /renew|switch-mortgage|rate-hold|blend-and-extend|stress-test-exemption|interest-rate-differential|prepayment|penalty|porting|collateral/;
const T_REFI = /refinanc|cash-out|heloc|second-mortgage|is-it-worth|debt|smith-manoeuvre|readvanceable|reverse-mortgage|equity|consolidat/;
const T_BUY = /first-time|down-payment|pre-approval|closing-costs|how-much-mortgage|buying-with|accepted-offer|gifted|deposit-loan|presale|foreign-buyers|bridge-financing|downsizing|condo|co-buying|purchase|construction|how-much-suite|pay-off-car|where-can-my-down/;
const T_SIT = /mortgages-for-|mortgage-for-|self-employed|bad-credit|mortgage-after|behind-on|missed|default|separation|spousal|stated-income|no-income|b-lender|private-mortgage|new-to-canada|cosigner|co-sign|student-loans|car-loan|build-credit|camp|first-nations|leasehold|farm|mobile-home|rent-to-own|commercial|investment|airbnb|brrrr|dscr|converting|investor|rental|probation|new-job|without-a-job|appraisal/;
export function closeType(slug) {
  if (T_CITY.test(slug)) return "city";
  if (T_LEGAL.test(slug)) return "legal";
  if (T_TRUST.test(slug)) return "trust";
  if (T_LEARN.test(slug)) return "learn";
  if (T_TOOL.test(slug)) return "tool";
  if (T_RENEW.test(slug)) return "renew";
  if (T_REFI.test(slug)) return "refi";
  if (T_BUY.test(slug)) return "buy";
  if (T_SIT.test(slug)) return "situation";
  if (T_RATES.test(slug)) return "rates";
  if (/fhsa|home-buyers-plan/.test(slug)) return "buy";
  return "other";
}
const cityKey = (slug) => slug.replace("/mortgage-broker-", "").replace(/\/$/, "");
const cityOf = (slug) => CITY_NAME[cityKey(slug)] || "your town";
export const CITIES_HUB = "/bc-mortgage-broker-service-areas/";
function closeCopy(page) {
  const t = closeType(page.slug);
  if (t === "city") { const c = cityOf(page.slug); return [`Buying or renewing in ${c}? I can do it from here.`, "I work from my Surrey office by phone and video, so you never have to drive in. One 15-minute call is enough to start."]; }
  return page.slug === "/" ? CLOSE_COPY.home : CLOSE_COPY[t];
}
const ctaClose = (o = {}, page = { slug: "" }) => { const [dt, dx] = closeCopy(page); return `<aside class="cta-block" data-cta>
<p class="close-who" data-nocount><img src="/assets/img/josh-face-360.webp" width="76" height="76" alt="Joshua Resvick, mortgage broker" loading="lazy"><span><b>Joshua Resvick</b>Mortgage broker, Surrey, BC</span></p>
<h2>${esc(o.title || dt)}</h2><p>${o.text || dx}</p>
<a class="btn" href="${o.href || SITE.book}" data-evt="book_call_click">${esc(o.label || "Book a 15-minute call")}</a><a class="btn btn-ghost" href="/apply/" data-evt="apply_click">Start my application</a></aside>`; };

export const faq = (items) => `<section class="faq" aria-labelledby="faq-h"><h2 id="faq-h">Frequently asked questions</h2>${items.map((f) => `<details><summary>${esc(f.q)}</summary><div><p>${f.a}</p></div></details>`).join("")}</section>`;

export function ratesStrip(file = "src/data/rates.json") {
  let d = { rows: [], updated: "" };
  try { d = JSON.parse(fs.readFileSync(file, "utf8")); } catch {}
  // Staleness rule: rates older than maxAgeDays (default 14) are hidden at build time and replaced with "Ask for today's rate".
  const maxAge = Number(d.maxAgeDays || 14), ts = Date.parse(d.updated || "");
  const stale = !d.updated || Number.isNaN(ts) || (Date.now() - ts) / 86400000 > maxAge;
  if (stale) d = { ...d, rows: (d.rows || []).map((r) => ({ ...r, rate: null })), updated: "" };
  if (!(d.rows || []).some((r) => r.rate != null)) return ""; // no confirmed rates: the panel is omitted entirely, pages read as plain articles
  const rows = (d.rows || []).map((r) => `<tr><th scope="row">${esc(r.term)}</th><td>${r.rate == null ? "Ask for today's rate" : esc(r.rate) + "%"}</td></tr>`).join("");
  return `<section class="rates" data-nocount aria-label="Current rates"><div class="rates-head"><h2>Current rates</h2><p class="small">${d.updated ? "Last updated " + esc(d.updated) + ". " : ""}Rates change — confirm yours. The rate you qualify for depends on your down payment, credit, property and lender.</p></div>
<table><tbody>${rows}</tbody></table>
<p class="small">${(d.rows || []).some((r) => r.rate != null) ? "" : "Joshua posts confirmed rates here. Until then, a 15-minute call gets you today's numbers across a wide range of lenders. "}<a href="/mortgage-rates-bc/">How your rate is set</a></p></section>`;
}

export function reviews(opts = {}) {
  const { file = "src/data/reviews.json", tag = "", limit = 0, heading = "What clients say", offset = 0, only = null } = typeof opts === "string" ? { file: opts } : opts;
  let d = { items: [], link: "" };
  try { d = JSON.parse(fs.readFileSync(file, "utf8")); } catch {}
  let items = d.items || [];
  if (tag) items = items.filter((r) => (r.tags || []).includes(tag));
  if (only) items = only.map((k) => items.find((r) => r.name.startsWith(k))).filter(Boolean); // hand-picked, in this order
  if (offset && items.length) { const o = offset % items.length; items = items.slice(o).concat(items.slice(0, o)); } // rotate so city pages do not all show the same pair
  if (limit) items = items.slice(0, limit);
  if (!items.length) return "";
  const stat = d.count && d.rating ? `<p class="small rev-stat">${esc(d.rating)} out of 5 on Google, from ${esc(d.count)} reviews${d.asOf ? ", as of " + esc(d.asOf) : ""}. Figures are Josh's own profile, updated by hand.</p>` : "";
  const more = d.link ? `<p class="small"><a href="${esc(d.link)}" rel="noopener">Read all reviews on Google</a> · ${d.writeLink ? `<a href="${esc(d.writeLink)}" rel="noopener" target="_blank">Leave a review</a>` : ""}</p>` : "";
  return `<section class="reviews" data-nocount aria-labelledby="rev-h"><h2 id="rev-h">${esc(heading)}</h2>${stat}<div class="rev-grid rev-${items.length}">${items.map((r) => `<blockquote><p>${esc(r.text)}</p><footer>${esc(r.name)}${r.when ? ", " + esc(r.when) : ""}</footer></blockquote>`).join("")}</div><p class="small rev-src">Quoted from Google reviews of Resvick Mortgages. Reviewers are shown by initials.</p>${more}</section>`;
}

// Where reviews appear automatically (all are purchase stories, so they only go on buyer, trust and contact pages).
const REV_TAG = { "/closing-costs-bc/": "buy", "/cmhc-insurance-bc/": "first", "/gifted-down-payment/": "first", "/deposit-loan-and-borrowed-down-payment/": "first", "/fhsa-bc/": "first", "/buying-with-5-percent-down/": "first", "/mortgage-application-checklist/": "buy", "/presale-mortgages-bc/": "buy", "/about-joshua-resvick/": "", "/contact/": "", "/apply/": "", "/refer/": "realtor", "/partners/": "first", "/first-time-home-buyer-bc/": "first", "/mortgage-pre-approval-bc/": "buy", "/first-time-buyer-programs-bc/": "first", "/how-much-mortgage-can-i-afford/": "buy", "/down-payment-guide-bc/": "buy", "/accepted-offer/": "buy", "/mortgage-broker-vs-bank/": "buy", "/how-mortgage-brokers-get-paid/": "buy" };
const REV_LIM = { "/contact/": 2, "/apply/": 2 };
const revFor = (page) => {
  if (page.reviews === false || page.slug === "/") return "";
  const city = /^\/mortgage-broker-[a-z-]+\/$/.test(page.slug);
  if (!city && !(page.slug in REV_TAG)) return "";
  const tag = city ? "buy" : REV_TAG[page.slug];
  const offset = city ? [...page.slug].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7) : 0;
  return reviews({ tag, limit: REV_LIM[page.slug] || (tag ? 2 : 4), heading: "What clients say", offset });
};

export const callout = (title, html) => `<aside class="callout"><p class="callout-t">${esc(title)}</p>${html}</aside>`;

export function breadcrumbs(trail) {
  const li = trail.map(([t, h], i) => `<li>${i < trail.length - 1 ? `<a href="${h}">${esc(t)}</a>` : `<span aria-current="page">${esc(t)}</span>`}</li>`).join("");
  return `<nav class="crumbs" data-nocount aria-label="Breadcrumb"><ol>${li}</ol></nav>`;
}

function ld(obj) { return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`; }

/** Josh as one Person entity. Every page points at the same @id (the full record lives on the About page). */
export const PERSON_ID = SITE.origin + "/about-joshua-resvick/#person";
export const BUSINESS_ID = SITE.origin + "/#business";
export function personRef() {
  return { "@type": "Person", "@id": PERSON_ID, name: SITE.person, alternateName: "Josh Resvick", jobTitle: "Mortgage Broker", url: SITE.origin + "/about-joshua-resvick/", worksFor: { "@id": BUSINESS_ID }, sameAs: [SITE.social.linkedin, SITE.social.bcfsa] };
}

export function businessSchema() {
  return {
    "@context": "https://schema.org", "@type": "FinancialService", "@id": SITE.origin + "/#business", // FinancialService is the schema.org LocalBusiness type for a broker; "MortgageBroker" is not a schema.org type
    name: SITE.name, url: SITE.origin + "/", image: SITE.origin + "/assets/img/og-default.jpg", logo: SITE.origin + "/assets/apple-touch-icon.png", telephone: "+1-778-882-5674", email: SITE.email,
    identifier: [{ "@type": "PropertyValue", propertyID: "BCFSA mortgage broker licence", value: SITE.brokerLicence }, { "@type": "PropertyValue", propertyID: "BCFSA brokerage licence", value: "X300203" }],
    address: { "@type": "PostalAddress", streetAddress: "#106, 2626 Croydon Drive", addressLocality: "Surrey", addressRegion: "BC", postalCode: "V3Z 0S8", addressCountry: "CA" },
    areaServed: { "@type": "AdministrativeArea", name: "British Columbia" },
    // Google Maps listing (Josh's own profile, the same place ID as the review links), so search engines tie the site to the map pin.
    hasMap: "https://www.google.com/maps?cid=11859343677974390550",
    sameAs: [SITE.social.instagram, "https://www.google.com/maps?cid=11859343677974390550"], // Josh's personal LinkedIn sits on the Person entity
    knowsLanguage: "en",
    founder: personRef(), employee: { "@id": PERSON_ID },
    parentOrganization: { "@type": "Organization", name: "Xeva Mortgage" }
  };
}


/** Home hero: one main button and one outline button. The quiz is a text link in the line under them (home.mjs). */
export const actionCards = () => `<div class="acts" data-nocount>
<a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a>
<a class="btn btn-ghost" href="/apply/" data-evt="apply_click">Start my application</a>
</div>`;
const NO_QUICK = new Set(["/apply/", "/accepted-offer/", "/refer/", "/privacy/", "/terms-of-use/", "/mortgage-check/", "/purchase-readiness-check/", "/renewal-check/", "/equity-check/", "/investor-check/", "/self-employed-check/", "/lender-match/", "/thank-you/", "/404.html"]);
const heroSide = (slug) => NO_QUICK.has(slug) ? "" : `<aside class="hero-side" data-nocount aria-label="Next steps"><a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a><a class="btn btn-ghost" href="/apply/" data-evt="apply_click">Start my application</a><p class="side-alt">Not sure yet? <a href="/mortgage-check/" data-evt="checkup_click">Take the two-minute quiz</a>, or call <a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>.</p></aside>`;

/** Add ids to h2s and build a "jump to" list for long pages. Returns the new body. */
// Mid-page "Want to know what you could qualify for?" nudge removed Nov 2026: it repeated word for word on 161 pages.
function withNudge(page, html) { return html; }
/** Source notes like "(Statistics Canada, 2021 Census Profile, read October 2026)" read as a smaller, quieter aside so the sentence skims. */
const wrapCites = (h) => h.replace(/\(([^()<>]{3,200}?, read [A-Z][a-z]+ \d{4})\)/g, '<span class="cite">($1)</span>');
function withTop(page) {
  const t = withToc(page);
  let html = withNudge(page, wrapCites(t.body));
  if (BENCH_PAGES.has(page.slug)) { const box = benchmarksBox(); const i = html.indexOf("</aside>"); if (box) html = i >= 0 ? html.slice(0, i + 8) + "\n" + box + html.slice(i + 8) : box + html; }
  if (page.slug !== "/resources/") return { html, toc: t.toc };
  const blk = latestGuides(4, "Latest guides");
  const i = html.indexOf("</aside>");
  return { html: i >= 0 ? html.slice(0, i + 8) + "\n" + blk + html.slice(i + 8) : blk + html, toc: t.toc };
}
function withToc(page) {
  const ck = T_CITY.test(page.slug) ? cityKey(page.slug) : null;
  const body = ck ? mergeLocal(page.body || "", ck) : (page.body || "");
  if (page.home || NO_QUICK.has(page.slug)) return { body, toc: "" };
  const used = new Set((body.match(/\sid="([^"]+)"/g) || []).map((x) => x.slice(5, -1)));
  const items = [];
  const out = body.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g, (m, attrs = "", inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const have = /\sid="([^"]+)"/.exec(attrs);
    let id = have ? have[1] : text.toLowerCase().replace(/&amp;/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "section";
    if (!have) { let base = id, n = 2; while (used.has(id)) id = base + "-" + n++; used.add(id); }
    if (text) items.push([id, text]);
    return have ? m : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  if (items.length < 5) return { body: out, toc: "" };
  if (page.faqs && page.faqs.length) items.push(["faq-h", "Frequently asked questions"]);
  const toc = `<nav class="toc" aria-label="On this page" data-nocount><details><summary>On this page</summary><p class="toc-t">On this page</p><ol>${items.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join("")}</ol></details></nav><script>(function(){var d=document.querySelector(".toc details");if(d&&matchMedia("(min-width:1100px)").matches){d.open=true;d.classList.add("pinned")}})()</script>`;
  return { body: out, toc };
}


/** Short "call me back" form at the foot of every content page. Name and phone only; posts to /api/lead as form "callback". */
const hasCallback = (page) => !(NO_QUICK.has(page.slug) || page.forms);
const callbackInner = () => `<aside class="callback" data-nocount aria-labelledby="cb-h"><div class="cb-copy"><h2 id="cb-h">Rather get a call?</h2><p>Leave your name and number, and tell me when's best. I'll phone you then.</p></div>
<form data-lead="callback" novalidate data-success="Thank you. I'll call you back."><div class="cb-row"><div class="fld"><label for="cb-name">Your name</label><input id="cb-name" name="name" type="text" autocomplete="name" required></div><div class="fld"><label for="cb-phone">Phone</label><input id="cb-phone" name="phone" type="tel" autocomplete="tel" required></div><div class="fld"><label for="cb-when">Best time</label><select id="cb-when" name="x_best_time"><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Any time</option></select></div></div>
<div class="hp" aria-hidden="true"><label for="cb-web">Leave this field empty</label><input id="cb-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<p class="small">By sending this you agree that Joshua Resvick may phone you about your request. See the <a href="/privacy/">privacy policy</a>.</p>
<div class="cb-go"><button class="btn" type="submit" data-evt="callback_submit">Request a call back</button><p class="form-msg" role="status"></p></div></form><p class="cb-alt">Or <a href="${SITE.whatsappHref}" data-evt="whatsapp_click" rel="noopener">message me on WhatsApp</a>.</p></aside>`;


/** One closing band: the booking prompt and the call-back form together. Pages with their own form skip the call-back half. */
function closeBlock(page) {
  const cta = page.closing === false ? "" : ctaClose(page.closing || {}, page);
  const cb = hasCallback(page) ? callbackInner() : "";
  if (!cta && !cb) return "";
  return `<section class="close" data-nocount><div class="wrap close-in${cta && cb ? " two" : ""}">${cta}${cb}</div></section>`;
}

/** Free printables. Files are built by tools/make-printables.py (the document checklist by tools/make-checklist-pdf.py).
 *  Keys must match PRINTABLES in functions/api/lead.js, which emails the visitor the same link. */
export const PRINTABLES = {
  "first-time-buyer-game-plan": { title: "First-time buyer game plan", file: "/assets/downloads/resvick-first-time-buyer-game-plan.pdf", pages: "2 pages",
    blurb: "Every step from opening an FHSA to getting your keys, the four first-time buyer programs side by side, and space to work out the cash you need." },
  "closing-costs-worksheet": { title: "Closing costs worksheet", file: "/assets/downloads/resvick-closing-costs-worksheet.pdf", pages: "1 page",
    blurb: "A fill-in sheet for every cost on completion day, with the BC transfer tax rules and a quick table of what it comes to at common prices." },
  "mortgage-renewal-checklist": { title: "Mortgage renewal checklist", file: "/assets/downloads/resvick-mortgage-renewal-checklist.pdf", pages: "1 page",
    blurb: "Your key dates, the seven questions to ask before you sign, and what to weigh if you might sell in the next year or two." },
  "down-payment-sources": { title: "Down payment sources sheet", file: "/assets/downloads/resvick-down-payment-sources.pdf", pages: "1 page",
    blurb: "Every source lenders accept, the proof each one needs, and a tracker for where your down payment sits today." },
  "document-checklist": { title: "Mortgage document checklist", file: "/assets/downloads/resvick-mortgage-document-checklist.pdf", pages: "2 pages",
    blurb: "The documents a BC lender usually asks for, by situation, with a box to tick for each one." }
};
export function printableCard(key) {
  const d = PRINTABLES[key]; if (!d) return "";
  return `<aside class="dl-card" data-nocount aria-label="${esc(d.title)}, free printable">
<div class="dl-top"><div><p class="dl-title">Free printable: ${esc(d.title)}</p><p>${d.blurb} ${d.pages}, prints on letter paper.</p></div>
<a class="btn" href="${d.file}" download data-evt="printable_download">Download the PDF</a></div>
<form class="dl-mail" data-lead="download" data-stay novalidate>
<input type="hidden" name="printable" value="${key}"><input type="hidden" name="intent" value="${/renewal/.test(key) ? "renewal" : "buyer"}">
<p class="dl-ask">Want it in your inbox too? I'll email you the link.</p>
<div class="dl-row"><div class="fld"><label for="dl-${key}-name">Your name</label><input id="dl-${key}-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="dl-${key}-email">Email</label><input id="dl-${key}-email" name="email" type="email" autocomplete="email" required></div>
<div class="dl-go"><button class="btn btn-ghost" type="submit">Email me the PDF</button></div></div>
<div class="hp" aria-hidden="true"><label for="dl-${key}-web">Leave this field empty</label><input id="dl-${key}-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Also email me Bank of Canada rate updates and mortgage tips. Optional, unsubscribe any time.</span></label>
<p class="small">By sending this you agree that Joshua Resvick may contact you about your request. See the <a href="/privacy/">privacy policy</a>.</p>
<p class="form-msg" role="status" aria-live="polite"></p>
<div class="done" data-done hidden><p><strong>Sent. Check your inbox for the link.</strong></p><p class="small">Nothing there in a few minutes? Check your spam folder, or use the download button above.</p></div>
</form></aside>`;
}
/** "Print this page" button for guides and checklists (handled in print.js). */
const printRow = (page) => page.print ? `<p class="print-page" data-nocount><button type="button" class="btn btn-ghost btn-sm" data-print-page>Print this ${page.slug.startsWith("/guides/") ? "guide" : "page"}</button> <span class="small">Prints the article without the menus and forms.</span></p>` : "";

/** "Rates right now": public benchmark rates on the rate pages (Nov 24, 2026). Data: src/data/benchmarks.json, updated on
 *  Bank of Canada decision days. Hidden at build time once the next decision date is more than 3 days past, so it can't go stale. */
const BENCH_PAGES = new Set(["/mortgage-rates-bc/", "/variable-rate-mortgage/", "/mortgage-renewal-rates-bc/", "/5-year-fixed-mortgage-rate/", "/3-year-fixed-mortgage-rate/", "/mortgage-rates-vancouver/", "/mortgage-rates-surrey/", "/mortgage-stress-test-canada/"]);
const longDate = (iso) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
export function benchmarksBox(file = "src/data/benchmarks.json") {
  let d; try { d = JSON.parse(fs.readFileSync(file, "utf8")); } catch { return ""; }
  if (!d.nextDecision || Date.now() > Date.parse(d.nextDecision + "T23:59:00Z") + 3 * 86400000) return "";
  return `<aside class="bench" data-nocount aria-labelledby="bench-h"><p class="bench-t" id="bench-h">Rates right now</p>
<dl class="bench-grid">
<div><dt>Bank of Canada policy rate</dt><dd>${esc(d.policyRate)}%</dd><p>Set ${longDate(d.policyDate)}</p></div>
<div><dt>Prime rate at the big banks</dt><dd>${esc(d.prime)}%</dd><p>Since ${longDate(d.primeDate)}. Variable mortgages are priced from prime.</p></div>
<div><dt>Stress-test floor</dt><dd>${esc(d.qualifyingFloor)}%</dd><p>You qualify at the higher of this or your rate plus 2%.</p></div>
</dl>
<p class="small">These are public benchmark rates, not a mortgage quote. Lenders price each mortgage on your down payment, property and term, and fixed rates move with bond yields every day. Next Bank of Canada decision: ${longDate(d.nextDecision)}. ${d.guide ? `What the last decision means: <a href="${d.guide}">read the guide</a>.` : ""}</p></aside>`;
}

/** Sticky bottom bar on phones. */
const stickyBar = (slug) => NO_QUICK.has(slug) ? "" : `<div class="sticky-cta" data-nocount><a class="sc-main" href="${SITE.book}" data-evt="book_call_click">Book a call</a><a href="/apply/" data-evt="apply_click">${closeType(slug) === "buy" || slug === "/" ? "Get pre-approved" : "Start my application"}</a></div>`;


// ---- Internal linking: related guides, page clusters, latest guides (data comes from build.mjs via setLinkData) ----
let LINK_DATA = { guides: [], labels: {} };
export function setLinkData(d) { LINK_DATA = { guides: d.guides || [], labels: d.labels || {} }; }

const CLUSTERS = [
  ["cities", "Other cities Joshua serves", ["/mortgage-broker-surrey/", "/mortgage-broker-white-rock/", "/mortgage-broker-delta/", "/mortgage-broker-langley/", "/mortgage-broker-richmond/", "/mortgage-broker-vancouver/", "/mortgage-broker-north-vancouver/", "/mortgage-broker-burnaby/", "/mortgage-broker-new-westminster/", "/mortgage-broker-coquitlam/", "/mortgage-broker-port-coquitlam/", "/mortgage-broker-port-moody/", "/mortgage-broker-maple-ridge/", "/mortgage-broker-mission/", "/mortgage-broker-abbotsford/", "/mortgage-broker-chilliwack/", "/mortgage-broker-squamish/", "/mortgage-broker-victoria/", "/mortgage-broker-langford/", "/mortgage-broker-saanich/", "/mortgage-broker-nanaimo/", "/mortgage-broker-courtenay/", "/mortgage-broker-kelowna/", "/mortgage-broker-west-kelowna/", "/mortgage-broker-penticton/", "/mortgage-broker-vernon/", "/mortgage-broker-kamloops/", "/mortgage-broker-prince-george/", "/mortgage-broker-pitt-meadows/", "/mortgage-broker-whistler/", "/mortgage-broker-keremeos/", "/mortgage-broker-princeton/", "/mortgage-broker-invermere/", "/mortgage-broker-quesnel/", "/mortgage-broker-terrace/", "/mortgage-broker-kitimat/", "/mortgage-broker-prince-rupert/", "/mortgage-broker-fort-st-john/", "/mortgage-broker-trail-castlegar/", "/mortgage-broker-fernie/", "/mortgage-broker-osoyoos-oliver/", "/mortgage-broker-revelstoke/", "/mortgage-broker-vancouver-island/", "/mortgage-broker-duncan/", "/mortgage-broker-port-alberni/", "/mortgage-broker-campbell-river/", "/mortgage-broker-powell-river/", "/mortgage-broker-cranbrook/", "/mortgage-broker-nelson/"]],
  ["income", "Mortgages for other jobs and incomes", ["/mortgages-for-first-responders/", "/mortgages-for-military-and-veterans/", "/mortgages-for-nurses-and-healthcare-workers/", "/mortgages-for-single-parents/", "/mortgage-for-contractors/", "/mortgages-for-doctors-and-dentists/", "/mortgages-for-real-estate-agents/", "/mortgages-for-lawyers-accountants-and-engineers/", "/mortgages-for-government-and-city-employees/", "/mortgages-for-teachers-and-school-staff/", "/mortgages-for-retirees-and-seniors/", "/mortgages-for-tech-workers/", "/mortgages-for-truckers-and-owner-operators/", "/mortgages-for-camp-mine-and-shift-workers/", "/new-to-canada-mortgage/", "/newly-self-employed-mortgage/", "/self-employed-mortgage-bc/", "/stated-income-mortgage/"]],
  ["hardship", "If your situation is different", ["/mortgages-during-separation-and-divorce/", "/spousal-buyout-mortgage/", "/mortgage-after-consumer-proposal/", "/mortgage-after-bankruptcy/", "/bad-credit-mortgage-bc/", "/build-credit-for-a-mortgage/", "/missed-a-mortgage-payment/", "/behind-on-mortgage-payments/", "/mortgage-payment-deferral/", "/mortgage-default-and-foreclosure-bc/", "/renewing-mortgage-without-a-job/", "/mortgage-renewal-denied/"]],
  ["property", "Other property types", ["/mobile-home-mortgages-bc/", "/leasehold-mortgages-bc/", "/first-nations-land-mortgages-bc/", "/farm-and-alr-mortgages-bc/", "/commercial-mortgages-bc/", "/condo-and-townhouse-mortgages/", "/airbnb-and-short-term-rental-mortgages/", "/rent-to-own-homes-bc/", "/presale-mortgages-bc/", "/foreign-buyers-bc/", "/brrrr-strategy-canada/", "/converting-your-home-to-a-rental/", "/downsizing-and-your-mortgage/", "/construction-and-self-build-mortgages-bc/", "/second-home-and-vacation-property-mortgages-bc/", "/car-loan-affecting-mortgage/", "/deposit-loan-and-borrowed-down-payment/"]],
  ["checks", "More free checks", ["/mortgage-check/", "/purchase-readiness-check/", "/renewal-check/", "/equity-check/", "/investor-check/", "/self-employed-check/", "/lender-match/", "/mortgage-check-up/"]],
  ["rates", "More on rates", ["/mortgage-rates-bc/", "/mortgage-stress-test-canada/", "/mortgage-glossary/", "/mortgage-rates-surrey/", "/mortgage-rates-vancouver/", "/mortgage-renewal-rates-bc/", "/3-year-fixed-mortgage-rate/", "/5-year-fixed-mortgage-rate/", "/variable-rate-mortgage/"]]
];
// "Keep reading" picks for content pages that no guide or cluster links to (Nov 23, 2026), so no page ends in a dead end.
const READ_NEXT = {
  "/prepayment-privileges-and-penalties/": ["/mortgage-penalty-calculator/", "/interest-rate-differential/", "/early-mortgage-renewal/"],
  "/open-vs-closed-mortgage/": ["/prepayment-privileges-and-penalties/", "/fixed-vs-variable-mortgage/", "/mortgage-penalty-calculator/"],
  "/rental-property-mortgage-renewal/": ["/refinance-rental-property/", "/switch-mortgage-lenders-at-renewal/", "/investment-property-mortgages-bc/"],
  "/dscr-loans-canada/": ["/investment-property-mortgages-bc/", "/brrrr-strategy-canada/", "/refinance-rental-property/"],
  "/second-mortgage-bc/": ["/heloc-bc/", "/cash-out-refinance-bc/", "/private-mortgage-lending-bc/"],
  "/purchase-plus-improvements/": ["/construction-and-self-build-mortgages-bc/", "/secondary-suite-refinance/", "/closing-costs-bc/"],
  "/reverse-mortgage-bc/": ["/mortgages-for-retirees-and-seniors/", "/downsizing-and-your-mortgage/", "/heloc-bc/"],
  "/student-loans-and-your-mortgage/": ["/how-much-mortgage-can-i-afford/", "/build-credit-for-a-mortgage/", "/first-time-home-buyer-bc/"],
  "/refinance-break-even/": ["/is-it-worth-refinancing/", "/mortgage-penalty-calculator/", "/cash-out-refinance-bc/"],
  "/is-it-worth-refinancing/": ["/refinance-break-even/", "/refinance-to-pay-off-debt/", "/blend-and-extend-mortgage/"],
  "/readvanceable-mortgage/": ["/smith-manoeuvre/", "/heloc-bc/", "/collateral-charge-mortgage/"],
  "/smith-manoeuvre/": ["/readvanceable-mortgage/", "/heloc-bc/", "/investment-property-mortgages-bc/"],
  "/refinance-rental-property/": ["/investment-property-mortgages-bc/", "/rental-property-mortgage-renewal/", "/heloc-bc/"],
  "/bridge-financing/": ["/downsizing-and-your-mortgage/", "/accepted-offer/", "/closing-costs-bc/"],
  "/mortgage-faq/": ["/how-mortgage-brokers-get-paid/", "/what-happens-after-you-apply/", "/mortgage-glossary/"],
  "/what-happens-after-you-apply/": ["/mortgage-application-checklist/", "/closing-costs-bc/", "/mortgage-aftercare-program/"],
  "/mortgage-aftercare-program/": ["/mortgage-renewal-reminder/", "/lender-comparison-report/", "/mortgage-check-up/"],
  "/about-joshua-resvick/": ["/lender-comparison-report/", "/mortgage-aftercare-program/", "/how-mortgage-brokers-get-paid/"],
  "/mortgage-calculators/": ["/mortgage-check/", "/lender-match/", "/mortgage-check-up/"]
};
export const READ_NEXT_PAGES = READ_NEXT;
const NO_GUIDE_TARGET = new Set(["/contact/", "/partners/", "/mortgage-calculators/", "/", "/privacy/", "/terms-of-use/", "/apply/", "/refer/", "/resources/"]);
const mon = (iso) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-CA", { year: "numeric", month: "long", timeZone: "UTC" });
const guideLi = (g) => `<li><a href="${g.slug}">${esc(g.h1)}</a> <span class="small">${mon(g.date)}</span></li>`;
const hrefOf = (u) => u.split("#")[0];

function relatedHtml(page) {
  const { guides, labels } = LINK_DATA;
  if (!guides.length || page.slug === "/thank-you/" || page.slug === "/privacy/" || page.slug === "/terms-of-use/") return "";
  const parts = [];
  if (page.slug.startsWith("/guides/")) {
    if (page.slug === "/guides/") return "";
    const i = guides.findIndex((g) => g.slug === page.slug);
    const more = [1, 2, 3].map((k) => guides[(i + k) % guides.length]).filter((g) => g && g.slug !== page.slug);
    parts.push(`<aside class="callout related" data-nocount><p class="callout-t">More guides</p><ul>${more.map(guideLi).join("")}</ul></aside>`);
    return parts.join("\n");
  }
  if (page.slug !== "/" && page.slug !== "/resources/") {
    const hits = [];
    for (const g of guides) {
      const idx = (g.links || []).map(hrefOf).indexOf(page.slug);
      if (idx >= 0 && !NO_GUIDE_TARGET.has(page.slug)) hits.push({ g, idx });
    }
    hits.sort((a, b) => a.idx - b.idx || (a.g.date < b.g.date ? 1 : -1));
    if (hits.length) parts.push(`<aside class="callout related" data-nocount><p class="callout-t">Related guides</p><ul>${hits.slice(0, 3).map((h) => guideLi(h.g)).join("")}</ul></aside>`);
    for (const [, title, slugs] of CLUSTERS) {
      const i = slugs.indexOf(page.slug);
      if (i < 0) continue;
      const others = [];
      for (let k = 1; k < slugs.length && others.length < 5; k++) { const s = slugs[(i + k) % slugs.length]; if (labels[s]) others.push(s); }
      if (others.length) parts.push(`<aside class="callout related" data-nocount><p class="callout-t">${esc(title)}</p><ul>${others.map((s) => `<li><a href="${s}">${esc(labels[s])}</a></li>`).join("")}</ul></aside>`);
    }
  }
  if (!parts.length && READ_NEXT[page.slug]) {
    const picks = READ_NEXT[page.slug].filter((s) => labels[s] && s !== page.slug);
    if (picks.length) parts.push(`<aside class="callout related" data-nocount><p class="callout-t">Keep reading</p><ul>${picks.map((s) => `<li><a href="${s}">${esc(labels[s])}</a></li>`).join("")}</ul></aside>`);
  }
  return parts.join("\n");
}

function latestGuides(n, heading) {
  const { guides } = LINK_DATA;
  if (!guides.length) return "";
  return `<aside class="callout related" data-nocount><p class="callout-t">${esc(heading)}</p><ul>${guides.slice(0, n).map(guideLi).join("")}</ul><p class="small"><a href="/guides/">See all guides</a></p></aside>`;
}

// Share images: city pages and the cities hub get their own card (made by tools/make-og.py); every other page uses the default.
const OG_DIR = new URL("../assets/img/og/", import.meta.url);
function ogImage(slug) {
  const key = slug === CITIES_HUB ? "cities" : T_CITY.test(slug) ? cityKey(slug) : "";
  return key && fs.existsSync(new URL(key + ".jpg", OG_DIR)) ? `/assets/img/og/${key}.jpg` : "/assets/img/og-default.jpg";
}
/** page: {slug,title,meta,h1,lede,body,faqs,crumbs,schema:[...],home,closing,assets:{calc:bool}} */
export function render(page) {
  // City pages get the first-time buyer game plan download (email capture) unless they set their own (Nov 25, 2026).
  if (!page.printable && /^\/mortgage-broker-[a-z-]+\/$/.test(page.slug || "")) page = { ...page, printable: "first-time-buyer-game-plan" };
  const url = SITE.origin + page.slug;
  // City pages all sit under the cities hub, labelled with the plain town name.
  const trail = T_CITY.test(page.slug) && CITY_NAME[cityKey(page.slug)]
    ? [["Home", "/"], ["Cities", CITIES_HUB], [CITY_NAME[cityKey(page.slug)], page.slug]]
    : page.crumbs || [["Home", "/"], [page.crumb || page.h1, page.slug]];
  const crumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: trail.map(([t, h], i) => ({ "@type": "ListItem", position: i + 1, name: t, item: SITE.origin + h })) };
  const schemas = [...(page.slug === "/" ? [] : [crumbSchema]), ...(page.schema || [])];
  if (page.slug === "/") {
    schemas.push(businessSchema());
    schemas.push({ "@context": "https://schema.org", "@type": "WebSite", "@id": SITE.origin + "/#website", name: SITE.name, url: SITE.origin + "/", inLanguage: "en-CA", publisher: { "@id": SITE.origin + "/#business" } });
  }
  if (page.slug === "/contact/" || page.slug === "/about-joshua-resvick/") {
    const biz = businessSchema();
    schemas.push(page.slug === "/contact/" ? { ...biz, "@type": [...biz["@type"]], contactPoint: { "@type": "ContactPoint", contactType: "customer service", telephone: "+1-778-882-5674", email: SITE.email, areaServed: "CA-BC", availableLanguage: "English" } } : biz);
  }
  if (page.faqs && page.faqs.length) schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } })) });
  const hero = page.hero || `<div class="hero-copy"><h1>${page.h1}</h1>${page.lede ? `<p class="lede">${page.lede}</p>` : ""}</div>`;
  const top = withTop(page);
  const scripts = (page.calc ? `<script src="${asset("/assets/js/engine.js")}" defer></script><script src="${asset("/assets/js/calc-ui.js")}" defer></script>` : page.quiz ? `<script src="${asset("/assets/js/engine.js")}" defer></script>` : "") + (page.quiz ? `<script src="${asset("/assets/js/quiz.js")}" defer></script>` : "") + ((page.forms || page.calc || page.printable || hasCallback(page)) ? `<script src="${asset("/assets/js/forms.js")}" defer></script>` : "") + (page.print ? `<script src="${asset("/assets/js/print.js")}" defer></script>` : "") + (SITE.turnstileKey && (page.forms || page.quiz || page.calc || page.printable || hasCallback(page)) ? `<script src="${asset("/assets/js/guard.js")}" defer data-key="${SITE.turnstileKey}"></script>` : "") + (SITE.ga4 ? `<script src="${asset("/assets/js/consent.js")}" defer data-ga="${SITE.ga4}"></script>` : "");
  return `<!doctype html>
<html lang="${page.lang || "en-CA"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.meta)}">
<link rel="canonical" href="${url}">
${page.noindex ? '<meta name="robots" content="noindex,follow">' : ""}
${page.alternate ? `<link rel="alternate" hreflang="en-CA" href="${SITE.origin}${page.alternate}"><link rel="alternate" hreflang="${page.lang || "en-CA"}" href="${url}">` : ""}
<meta property="og:locale" content="en_CA"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(page.title)}"><meta name="twitter:description" content="${esc(page.meta)}"><meta property="og:type" content="website"><meta property="og:site_name" content="Resvick Mortgages"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.meta)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${SITE.origin}${ogImage(page.slug)}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#253551">

${process.env.STAGING ? '<meta name="robots" content="noindex,nofollow">' : ""}
<link rel="preload" href="/assets/fonts/plus-jakarta-sans-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/plus-jakarta-sans-latin-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/assets/favicon-48.png" sizes="48x48" type="image/png"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="${asset("/assets/css/site.css")}">
${schemas.map(ld).join("\n")}
</head><body${page.home ? ' class="is-home"' : ""}>
${header(navCurrent(page))}
<main id="main">
<section class="hero${page.home ? " hero-home" : ""}">${page.home ? `<div class="hero-in">${hero}</div>` : `<div class="wrap"><div class="hero-in${hero.includes("hero-portrait") || NO_QUICK.has(page.slug) ? " solo" : ""}">${hero}${hero.includes("hero-portrait") ? "" : heroSide(page.slug)}</div></div>`}</section>
<div class="wrap">${proofStrip()}${page.slug === "/" ? "" : breadcrumbs(trail)}</div>
<div class="wrap page${top.toc ? " has-rail" : ""}">
${top.toc ? `<aside class="rail">${top.toc}</aside>` : ""}
<article class="prose">
${top.html}
${page.printable ? printableCard(page.printable) : ""}
${printRow(page)}
${relatedHtml(page)}
${page.slug === "/" ? latestGuides(3, "From the guides") : ""}
${page.faqs && page.faqs.length ? faq(page.faqs) : ""}
</article>
</div>
${revFor(page) ? `<div class="wrap">${revFor(page)}</div>` : ""}
${closeBlock(page)}
</main>
${footer()}
${stickyBar(page.slug)}
${cookieNotice()}
${scripts}
<script src="${asset("/assets/js/track.js")}" defer></script>
${(page.scripts || []).map((s) => `<script src="${asset(s)}" defer></script>`).join("")}
</body></html>`;
}
