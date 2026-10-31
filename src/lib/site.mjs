// Shared site constants + components. Every fact here comes from the build prompt's §2 (verified; invent nothing).
import fs from "node:fs";

export const SITE = {
  origin: "https://www.resvickmortgages.com",
  name: "Resvick Mortgages",
  person: "Joshua Resvick",
  brokerage: "Xeva Mortgage",
  phone: "778.882.5674",
  phoneHref: "tel:+17788825674",
  smsHref: "sms:+17788825674",
  email: "joshua@resvickmortgages.com",
  book: "https://cal.com/resvickmortgages/mortgage-advice",
  fullApp: "https://velocity-client.newton.ca/en/client/journey/home?shortCode=n7tlotk51ren",
  bookRoot: "https://cal.com/resvickmortgages",
  address: { street: "#106, 2626 Croydon Drive", city: "Surrey", region: "BC", postal: "V3Z 0S8" },
  licence: "BCFSA Brokerage Licence #X300203",
  brokerLicence: "MB503619",
  ga4: process.env.GA4_ID || "" // set GA4_ID in the Pages build environment once Josh creates the property (Open Item 15)
};

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const NAV = [
  { label: "Buy", href: "/first-time-home-buyer-bc/", kids: [
    ["First-time buyer guide", "/first-time-home-buyer-bc/"], ["Programs & grants", "/first-time-buyer-programs-bc/"], ["Pre-approval", "/mortgage-pre-approval-bc/"],
    ["How much can I afford?", "/how-much-mortgage-can-i-afford/"], ["Down payment", "/down-payment-guide-bc/"], ["Closing costs", "/closing-costs-bc/"], ["Presales", "/presale-mortgages-bc/"], ["Foreign buyers", "/foreign-buyers-bc/"], ["Accepted an offer?", "/accepted-offer/"]] },
  { label: "Renew", href: "/mortgage-renewal-bc/", kids: [
    ["Renewal guide", "/mortgage-renewal-bc/"], ["Switch lenders", "/switch-mortgage-lenders-at-renewal/"], ["Stress-test exemption", "/stress-test-exemption-switching-lenders/"],
    ["Early renewal", "/early-mortgage-renewal/"], ["Your renewal letter", "/mortgage-renewal-letter-explained/"], ["Free renewal reminder", "/mortgage-renewal-reminder/"]] },
  { label: "Refinance", href: "/refinance-mortgage-bc/", kids: [
    ["Refinance guide", "/refinance-mortgage-bc/"], ["Is it worth it?", "/is-it-worth-refinancing/"], ["Pay off debt", "/refinance-to-pay-off-debt/"],
    ["Cash-out refinance", "/cash-out-refinance-bc/"], ["Home equity line (HELOC)", "/heloc-bc/"], ["Secondary suite refinance", "/secondary-suite-refinance/"]] },
  { label: "Situations", href: "/resources/#your-situation", kids: [
    ["Self-employed", "/self-employed-mortgage-bc/"], ["New to Canada", "/new-to-canada-mortgage/"], ["Separation and divorce", "/mortgages-during-separation-and-divorce/"],
    ["Behind on payments", "/behind-on-mortgage-payments/"], ["Bad credit", "/bad-credit-mortgage-bc/"], ["Investors", "/investment-property-mortgages-bc/"], ["Cities served", "/mortgage-broker-surrey/"]] },
  { label: "Tools", href: "/mortgage-calculators/", kids: [
    ["All calculators", "/mortgage-calculators/"], ["Two-minute mortgage check", "/mortgage-check/"], ["Mortgage check-up", "/mortgage-check-up/"],
    ["BC property transfer tax", "/bc-property-transfer-tax-calculator/"], ["Penalty calculator", "/mortgage-penalty-calculator/"], ["Lender match", "/lender-match/"]] },
  { label: "Learn", href: "/resources/", kids: [
    ["All guides by topic", "/resources/"], ["Mortgage rates explained", "/mortgage-rates-bc/"], ["Fixed vs variable", "/fixed-vs-variable-mortgage/"],
    ["Penalties (IRD)", "/interest-rate-differential/"], ["Broker vs bank", "/mortgage-broker-vs-bank/"], ["News and rule changes", "/guides/"]] },
  { label: "About", href: "/about-joshua-resvick/", kids: [
    ["About Joshua", "/about-joshua-resvick/"], ["Aftercare program", "/mortgage-aftercare-program/"], ["Lender Comparison Report", "/lender-comparison-report/"],
    ["How brokers get paid", "/how-mortgage-brokers-get-paid/"], ["Realtor, notary and lawyer partners", "/partners/"], ["Refer a friend", "/refer/"], ["Contact", "/contact/"]] }
];

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
<div class="hdr-cta"><a class="hdr-phone" href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a><a class="btn btn-ghost btn-sm" href="/apply/" data-evt="apply_click">Apply</a><a class="btn btn-ghost btn-sm" href="/mortgage-check-up/" data-evt="checkup_click">Check-Up</a><a class="btn btn-sm" href="${SITE.book}" data-evt="book_call_click">Book a Call</a></div>
<details class="mnav"><summary aria-label="Menu"><span></span></summary><div class="mnav-panel"><ul>${NAV.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join("")}</ul>
<div class="mnav-actions"><a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a><a class="btn btn-ghost" href="/apply/" data-evt="apply_click">Start your application</a><a class="btn btn-ghost" href="/mortgage-check-up/" data-evt="checkup_click">Mortgage check-up</a></div><a class="mnav-phone" href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a></div></details>
</div></header>`;
}

export function footer() {
  return `<footer class="site-footer" data-nocount>
<div class="ftr-in">
<div><p class="ftr-brand">Resvick Mortgages</p>
<p>Resvick Mortgages, Joshua Resvick, Mortgage Broker, Xeva Mortgage, #106–2626 Croydon Drive, Surrey, BC · ${SITE.licence} · Broker Licence #${SITE.brokerLicence}</p>
<p><a href="${SITE.phoneHref}">${SITE.phone}</a> · <a href="mailto:${SITE.email}">${SITE.email}</a></p>
<p class="small">Joshua serves clients across British Columbia, online and by phone, from his Surrey office. Verify any BC mortgage broker's licence with <a href="https://www.bcfsa.ca/public-resources/mortgage-brokers/find-mortgage-broker" rel="noopener">BCFSA's Find a Mortgage Broker</a>.</p></div>
<div><p class="ftr-h">Buyers</p><ul><li><a href="/first-time-home-buyer-bc/">First-time buyers</a></li><li><a href="/down-payment-guide-bc/">Down payment guide</a></li><li><a href="/mortgage-pre-approval-bc/">Pre-approval</a></li><li><a href="/closing-costs-bc/">Closing costs</a></li><li><a href="/partners/">Realtor, notary and lawyer partners</a></li></ul></div>
<div><p class="ftr-h">Homeowners</p><ul><li><a href="/mortgage-renewal-bc/">Mortgage renewal</a></li><li><a href="/refinance-mortgage-bc/">Refinancing</a></li><li><a href="/self-employed-mortgage-bc/">Self-employed</a></li><li><a href="/mortgage-aftercare-program/">Aftercare program</a></li></ul></div>
<div><p class="ftr-h">Tools</p><ul><li><a href="/mortgage-calculators/">Calculators</a></li><li><a href="/bc-property-transfer-tax-calculator/">Property transfer tax</a></li><li><a href="/mortgage-check-up/">Mortgage check-up</a></li><li><a href="/apply/">Start your application</a></li><li><a href="/mortgage-rates-bc/">Rates</a></li><li><a href="/resources/">All guides</a></li><li><a href="/guides/">News and rule changes</a></li><li><a href="/contact/">Contact</a></li></ul></div>
<div><p class="ftr-h">Who we help</p><ul><li><a href="/mortgages-for-first-responders/">First responders</a></li><li><a href="/mortgages-for-nurses-and-healthcare-workers/">Nurses and healthcare</a></li><li><a href="/mortgages-for-military-and-veterans/">Military and veterans</a></li><li><a href="/mortgage-for-contractors/">Contractors and trades</a></li><li><a href="/mortgages-for-doctors-and-dentists/">Doctors and dentists</a></li><li><a href="/mortgages-for-real-estate-agents/">Real estate agents</a></li><li><a href="/mortgages-for-lawyers-accountants-and-engineers/">Lawyers, accountants, engineers</a></li><li><a href="/mortgages-for-government-and-city-employees/">Government and city staff</a></li><li><a href="/mortgages-for-teachers-and-school-staff/">Teachers and school staff</a></li><li><a href="/mortgages-for-tech-workers/">Tech workers</a></li><li><a href="/mortgages-for-truckers-and-owner-operators/">Truckers and owner-operators</a></li><li><a href="/mortgages-for-camp-mine-and-shift-workers/">Camp, mine and shift workers</a></li><li><a href="/new-to-canada-mortgage/">New to Canada</a></li><li><a href="/mortgages-for-single-parents/">Single parents</a></li><li><a href="/mortgages-during-separation-and-divorce/">Separation and divorce</a></li><li><a href="/co-buying-a-home/">Co-buying</a></li><li><a href="/downsizing-and-your-mortgage/">Downsizing</a></li><li><a href="/investment-property-mortgages-bc/">Investors</a></li><li><a href="/commercial-mortgages-bc/">Commercial</a></li><li><a href="/condo-and-townhouse-mortgages/">Condos and townhouses</a></li><li><a href="/mobile-home-mortgages-bc/">Mobile and manufactured homes</a></li><li><a href="/farm-and-alr-mortgages-bc/">Farm and ALR</a></li></ul></div>
<div><p class="ftr-h">Cities served</p><ul class="ftr-cities"><li><a href="/mortgage-broker-surrey/">Surrey</a></li><li><a href="/mortgage-broker-white-rock/">White Rock</a></li><li><a href="/mortgage-broker-delta/">Delta</a></li><li><a href="/mortgage-broker-langley/">Langley</a></li><li><a href="/mortgage-broker-richmond/">Richmond</a></li><li><a href="/mortgage-broker-vancouver/">Vancouver</a></li><li><a href="/mortgage-broker-north-vancouver/">North Vancouver</a></li><li><a href="/mortgage-broker-burnaby/">Burnaby</a></li><li><a href="/mortgage-broker-new-westminster/">New Westminster</a></li><li><a href="/mortgage-broker-coquitlam/">Coquitlam</a></li><li><a href="/mortgage-broker-port-coquitlam/">Port Coquitlam</a></li><li><a href="/mortgage-broker-port-moody/">Port Moody</a></li><li><a href="/mortgage-broker-maple-ridge/">Maple Ridge</a></li><li><a href="/mortgage-broker-pitt-meadows/">Pitt Meadows</a></li><li><a href="/mortgage-broker-mission/">Mission</a></li><li><a href="/mortgage-broker-abbotsford/">Abbotsford</a></li><li><a href="/mortgage-broker-chilliwack/">Chilliwack</a></li><li><a href="/mortgage-broker-squamish/">Squamish</a></li><li><a href="/mortgage-broker-whistler/">Whistler</a></li><li><a href="/mortgage-broker-victoria/">Victoria</a></li><li><a href="/mortgage-broker-langford/">Langford</a></li><li><a href="/mortgage-broker-saanich/">Saanich</a></li><li><a href="/mortgage-broker-nanaimo/">Nanaimo</a></li><li><a href="/mortgage-broker-courtenay/">Courtenay</a></li><li><a href="/mortgage-broker-kelowna/">Kelowna</a></li><li><a href="/mortgage-broker-west-kelowna/">West Kelowna</a></li><li><a href="/mortgage-broker-penticton/">Penticton</a></li><li><a href="/mortgage-broker-keremeos/">Keremeos</a></li><li><a href="/mortgage-broker-princeton/">Princeton</a></li><li><a href="/mortgage-broker-vernon/">Vernon</a></li><li><a href="/mortgage-broker-invermere/">Invermere</a></li><li><a href="/mortgage-broker-kamloops/">Kamloops</a></li><li><a href="/mortgage-broker-quesnel/">Quesnel</a></li><li><a href="/mortgage-broker-prince-george/">Prince George</a></li><li><a href="/mortgage-broker-terrace/">Terrace</a></li><li><a href="/mortgage-broker-kitimat/">Kitimat</a></li></ul></div>
</div>
<div class="ftr-legal"><p>© ${new Date().getFullYear()} Resvick Mortgages. Mortgage information on this site is general education, not advice on your file; every approval is subject to lender and insurer underwriting. <a href="/privacy/">Privacy policy</a></p></div>
</footer>`;
}

export const proofStrip = () => `<ul class="proof" data-nocount aria-label="At a glance"><li><strong>1,000+</strong> mortgages funded</li><li><strong>Xeva Mortgage</strong> brokerage</li><li><strong>BC-wide</strong>, online</li><li>An <strong>underwriter's</strong> eye</li></ul>`;

export const cta = (o = {}) => `<aside class="cta-block${o.dark ? " cta-dark" : ""}" data-cta>
<div><h2>${esc(o.title || "Talk it through with Joshua")}</h2><p>${o.text || "A 15-minute call is enough to map your goals, your numbers and your next step. No obligation, and you deal directly with the broker who will do the work."}</p></div>
<a class="btn${o.dark ? " btn-light" : ""}" href="${o.href || SITE.book}" data-evt="book_call_click">${esc(o.label || "Book a 15-minute call")}</a></aside>`;

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

const STARS5 = `<div class="rev-stars" role="img" aria-label="5 out of 5 stars"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg></div>`;
export function reviews(opts = {}) {
  const { file = "src/data/reviews.json", tag = "", limit = 0, heading = "What clients say" } = typeof opts === "string" ? { file: opts } : opts;
  let d = { items: [], link: "" };
  try { d = JSON.parse(fs.readFileSync(file, "utf8")); } catch {}
  let items = d.items || [];
  if (tag) items = items.filter((r) => (r.tags || []).includes(tag));
  if (limit) items = items.slice(0, limit);
  if (!items.length) return "";
  const stat = d.count && d.rating ? `<p class="small rev-stat">${esc(d.rating)} out of 5 on Google, from ${esc(d.count)} reviews${d.asOf ? ", as of " + esc(d.asOf) : ""}. Figures are Josh's own profile, updated by hand.</p>` : "";
  const more = d.link ? `<p class="small"><a href="${esc(d.link)}" rel="noopener">Read all reviews on Google</a> · ${d.writeLink ? `<a href="${esc(d.writeLink)}" rel="noopener" target="_blank">Leave a review</a>` : ""}</p>` : "";
  return `<section class="reviews" data-nocount aria-labelledby="rev-h"><h2 id="rev-h">${esc(heading)}</h2>${stat}<div class="rev-grid rev-${items.length}">${items.map((r) => `<blockquote><p>${esc(r.text)}</p>${STARS5}<footer>${esc(r.name)}${r.when ? ", " + esc(r.when) : ""}</footer></blockquote>`).join("")}</div><p class="small rev-src">Quoted from Google reviews of Resvick Mortgages. Reviewers are shown by initials.</p>${more}</section>`;
}

// Where reviews appear automatically (all are purchase stories, so they only go on buyer, trust and contact pages).
const REV_TAG = { "/about-joshua-resvick/": "", "/contact/": "", "/apply/": "", "/refer/": "realtor", "/partners/": "first", "/first-time-home-buyer-bc/": "first", "/mortgage-pre-approval-bc/": "buy", "/first-time-buyer-programs-bc/": "first", "/how-much-mortgage-can-i-afford/": "buy", "/down-payment-guide-bc/": "buy", "/accepted-offer/": "buy", "/mortgage-broker-vs-bank/": "buy", "/how-mortgage-brokers-get-paid/": "buy" };
const REV_LIM = { "/contact/": 2, "/apply/": 2 };
const revFor = (page) => {
  if (page.reviews === false || page.slug === "/") return "";
  const city = /^\/mortgage-broker-[a-z-]+\/$/.test(page.slug);
  if (!city && !(page.slug in REV_TAG)) return "";
  const tag = city ? "buy" : REV_TAG[page.slug];
  return reviews({ tag, limit: REV_LIM[page.slug] || (tag ? 2 : 4), heading: "What clients say" });
};

export const callout = (title, html) => `<aside class="callout"><p class="callout-t">${esc(title)}</p>${html}</aside>`;

export function breadcrumbs(trail) {
  const li = trail.map(([t, h], i) => `<li>${i < trail.length - 1 ? `<a href="${h}">${esc(t)}</a>` : `<span aria-current="page">${esc(t)}</span>`}</li>`).join("");
  return `<nav class="crumbs" data-nocount aria-label="Breadcrumb"><ol>${li}</ol></nav>`;
}

function ld(obj) { return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`; }

export function businessSchema() {
  return {
    "@context": "https://schema.org", "@type": ["MortgageBroker", "FinancialService"], "@id": SITE.origin + "/#business",
    name: SITE.name, url: SITE.origin + "/", image: SITE.origin + "/assets/img/og-default.jpg", logo: SITE.origin + "/assets/apple-touch-icon.png", telephone: "+1-778-882-5674", email: SITE.email,
    identifier: [{ "@type": "PropertyValue", propertyID: "BCFSA mortgage broker licence", value: SITE.brokerLicence }, { "@type": "PropertyValue", propertyID: "BCFSA brokerage licence", value: "X300203" }],
    address: { "@type": "PostalAddress", streetAddress: "#106, 2626 Croydon Drive", addressLocality: "Surrey", addressRegion: "BC", postalCode: "V3Z 0S8", addressCountry: "CA" },
    areaServed: { "@type": "AdministrativeArea", name: "British Columbia" },
    founder: { "@type": "Person", name: SITE.person, jobTitle: "Mortgage Broker" },
    parentOrganization: { "@type": "Organization", name: "Xeva Mortgage" }
  };
}


const IC = {
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z"/><path d="M14 3.5V8h4M9 12h6M9 16h6"/></svg>',
  quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1M9 10l1.2 1.2L12.5 9M9 16l1.2 1.2 2.3-2.2M14.5 11h2M14.5 16h2"/></svg>',
  arrow: '<svg class="act-ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>'
};
/** Three big buttons for the top of the home page. */
export const actionCards = () => `<div class="act-cards" data-nocount>
<a class="act act-main" href="${SITE.book}" data-evt="book_call_click"><span class="act-ic">${IC.cal}</span><span><b>Book a call</b><small>Pick a time that works for you.</small></span>${IC.arrow}</a>
<a class="act" href="/apply/" data-evt="apply_click"><span class="act-ic">${IC.doc}</span><span><b>Apply online</b><small>A secure form. You can stop and come back.</small></span>${IC.arrow}</a>
<a class="act" href="/mortgage-check/" data-evt="checkup_click"><span class="act-ic">${IC.quiz}</span><span><b>Take a quiz</b><small>Buying, renewing, equity and more.</small></span>${IC.arrow}</a>
</div>`;
const NO_QUICK = new Set(["/apply/", "/accepted-offer/", "/refer/", "/privacy/", "/mortgage-check/", "/purchase-readiness-check/", "/renewal-check/", "/equity-check/", "/investor-check/", "/self-employed-check/", "/lender-match/", "/thank-you/", "/404.html"]);
const quickRow = (slug) => NO_QUICK.has(slug) ? "" : `<div class="wrap" data-nocount><nav class="quick" aria-label="Quick actions"><a href="${SITE.book}" data-evt="book_call_click">${IC.cal}Book a call</a><a href="/apply/" data-evt="apply_click">${IC.doc}Apply online</a><a href="/mortgage-check/" data-evt="checkup_click">${IC.quiz}Take a quiz</a></nav></div>`;

/** Add ids to h2s and build a "jump to" list for long pages. Returns the new body. */
/** One slim prompt about a third of the way down long pages: apply or book. Skipped on tool, quiz, form and short pages. */
const nudge = () => `<aside class="nudge" data-nocount><p><b>Want to know what you could qualify for?</b> Start an application, or book a short call and Joshua will walk you through it.</p><div class="nudge-btns"><a class="btn" href="/apply/" data-evt="apply_click">Apply online</a><a class="btn btn-ghost" href="${SITE.book}" data-evt="book_call_click">Book a call</a></div></aside>`;
function withNudge(page, html) {
  if (page.home || NO_QUICK.has(page.slug) || page.calc || page.quiz || page.forms) return html;
  const heads = [...html.matchAll(/<h2[\s>]/g)].map((m) => m.index);
  if (heads.length < 6) return html;
  const at = heads[Math.max(2, Math.round(heads.length / 3))];
  return html.slice(0, at) + nudge() + "\n" + html.slice(at);
}
function withTop(page) {
  const html = withNudge(page, withToc(page));
  if (page.slug !== "/resources/") return html;
  const blk = latestGuides(4, "Latest guides");
  const i = html.indexOf("</aside>");
  return i >= 0 ? html.slice(0, i + 8) + "\n" + blk + html.slice(i + 8) : blk + html;
}
function withToc(page) {
  const body = page.body || "";
  if (page.home || NO_QUICK.has(page.slug)) return body;
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
  if (items.length < 5) return out;
  if (page.faqs && page.faqs.length) items.push(["faq-h", "Frequently asked questions"]);
  const toc = `<nav class="toc" aria-label="Jump to a section" data-nocount><details><summary>Jump to a section</summary><ol>${items.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join("")}</ol></details></nav>`;
  const k = out.indexOf("</aside>");
  return k > -1 && k < 3000 ? out.slice(0, k + 8) + toc + out.slice(k + 8) : toc + out;
}


/** Short "call me back" form at the foot of every content page. Name and phone only; posts to /api/lead as form "callback". */
const callbackBlock = (page) => (page.home || NO_QUICK.has(page.slug) || page.forms) ? "" : `<div class="wrap" data-nocount><aside class="callback" aria-labelledby="cb-h"><div class="cb-copy"><h2 id="cb-h">Prefer a call back?</h2><p>Leave your name and number. Joshua will phone you at the time you pick.</p></div>
<form data-lead="callback" novalidate data-success="Thank you. Joshua will call you back."><div class="cb-row"><div class="fld"><label for="cb-name">Your name</label><input id="cb-name" name="name" type="text" autocomplete="name" required></div><div class="fld"><label for="cb-phone">Phone</label><input id="cb-phone" name="phone" type="tel" autocomplete="tel" required></div><div class="fld"><label for="cb-when">Best time</label><select id="cb-when" name="x_best_time"><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Any time</option></select></div></div>
<div class="hp" aria-hidden="true"><label for="cb-web">Leave this field empty</label><input id="cb-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<p class="small">By sending this you agree that Joshua Resvick may phone you about your request. See the <a href="/privacy/">privacy policy</a>.</p>
<div class="cb-go"><button class="btn" type="submit" data-evt="callback_submit">Request a call back</button><p class="form-msg" role="status"></p></div></form></aside></div>`;

/** Sticky bottom bar on phones. */
const stickyBar = (slug) => NO_QUICK.has(slug) ? "" : `<div class="sticky-cta" data-nocount><a class="sc-main" href="${SITE.book}" data-evt="book_call_click">${IC.cal}Book a call</a><a href="/apply/" data-evt="apply_click">${IC.doc}Get pre-approved</a></div>`;


// ---- Internal linking: related guides, page clusters, latest guides (data comes from build.mjs via setLinkData) ----
let LINK_DATA = { guides: [], labels: {} };
export function setLinkData(d) { LINK_DATA = { guides: d.guides || [], labels: d.labels || {} }; }

const CLUSTERS = [
  ["cities", "Other cities Joshua serves", ["/mortgage-broker-surrey/", "/mortgage-broker-white-rock/", "/mortgage-broker-delta/", "/mortgage-broker-langley/", "/mortgage-broker-richmond/", "/mortgage-broker-vancouver/", "/mortgage-broker-north-vancouver/", "/mortgage-broker-burnaby/", "/mortgage-broker-new-westminster/", "/mortgage-broker-coquitlam/", "/mortgage-broker-port-coquitlam/", "/mortgage-broker-port-moody/", "/mortgage-broker-maple-ridge/", "/mortgage-broker-mission/", "/mortgage-broker-abbotsford/", "/mortgage-broker-chilliwack/", "/mortgage-broker-squamish/", "/mortgage-broker-victoria/", "/mortgage-broker-langford/", "/mortgage-broker-saanich/", "/mortgage-broker-nanaimo/", "/mortgage-broker-courtenay/", "/mortgage-broker-kelowna/", "/mortgage-broker-west-kelowna/", "/mortgage-broker-penticton/", "/mortgage-broker-vernon/", "/mortgage-broker-kamloops/", "/mortgage-broker-prince-george/", "/mortgage-broker-pitt-meadows/", "/mortgage-broker-whistler/", "/mortgage-broker-keremeos/", "/mortgage-broker-princeton/", "/mortgage-broker-invermere/", "/mortgage-broker-quesnel/", "/mortgage-broker-terrace/", "/mortgage-broker-kitimat/"]],
  ["income", "Mortgages for other jobs and incomes", ["/mortgages-for-first-responders/", "/mortgages-for-military-and-veterans/", "/mortgages-for-nurses-and-healthcare-workers/", "/mortgages-for-single-parents/", "/mortgage-for-contractors/", "/mortgages-for-doctors-and-dentists/", "/mortgages-for-real-estate-agents/", "/mortgages-for-lawyers-accountants-and-engineers/", "/mortgages-for-government-and-city-employees/", "/mortgages-for-teachers-and-school-staff/", "/mortgages-for-tech-workers/", "/mortgages-for-truckers-and-owner-operators/", "/mortgages-for-camp-mine-and-shift-workers/", "/new-to-canada-mortgage/", "/newly-self-employed-mortgage/", "/self-employed-mortgage-bc/", "/stated-income-mortgage/"]],
  ["hardship", "If your situation is different", ["/mortgages-during-separation-and-divorce/", "/spousal-buyout-mortgage/", "/mortgage-after-consumer-proposal/", "/mortgage-after-bankruptcy/", "/bad-credit-mortgage-bc/", "/build-credit-for-a-mortgage/", "/missed-a-mortgage-payment/", "/behind-on-mortgage-payments/", "/mortgage-payment-deferral/", "/mortgage-default-and-foreclosure-bc/", "/renewing-mortgage-without-a-job/", "/mortgage-renewal-denied/"]],
  ["property", "Other property types", ["/mobile-home-mortgages-bc/", "/farm-and-alr-mortgages-bc/", "/commercial-mortgages-bc/", "/condo-and-townhouse-mortgages/", "/airbnb-and-short-term-rental-mortgages/", "/rent-to-own-homes-bc/", "/presale-mortgages-bc/", "/foreign-buyers-bc/", "/brrrr-strategy-canada/", "/converting-your-home-to-a-rental/", "/downsizing-and-your-mortgage/", "/car-loan-affecting-mortgage/", "/deposit-loan-and-borrowed-down-payment/"]],
  ["checks", "More free checks", ["/mortgage-check/", "/purchase-readiness-check/", "/renewal-check/", "/equity-check/", "/investor-check/", "/self-employed-check/", "/lender-match/", "/mortgage-check-up/"]],
  ["rates", "More on rates", ["/mortgage-rates-bc/", "/mortgage-rates-surrey/", "/mortgage-rates-vancouver/", "/mortgage-renewal-rates-bc/", "/3-year-fixed-mortgage-rate/", "/5-year-fixed-mortgage-rate/", "/variable-rate-mortgage/"]]
];
const NO_GUIDE_TARGET = new Set(["/contact/", "/partners/", "/mortgage-calculators/", "/", "/privacy/", "/apply/", "/refer/", "/resources/"]);
const mon = (iso) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-CA", { year: "numeric", month: "long", timeZone: "UTC" });
const guideLi = (g) => `<li><a href="${g.slug}">${esc(g.h1)}</a> <span class="small">${mon(g.date)}</span></li>`;
const hrefOf = (u) => u.split("#")[0];

function relatedHtml(page) {
  const { guides, labels } = LINK_DATA;
  if (!guides.length || page.slug === "/thank-you/" || page.slug === "/privacy/") return "";
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
  return parts.join("\n");
}

function latestGuides(n, heading) {
  const { guides } = LINK_DATA;
  if (!guides.length) return "";
  return `<aside class="callout related" data-nocount><p class="callout-t">${esc(heading)}</p><ul>${guides.slice(0, n).map(guideLi).join("")}</ul><p class="small"><a href="/guides/">See all guides</a></p></aside>`;
}

/** page: {slug,title,meta,h1,lede,body,faqs,crumbs,schema:[...],home,closing,assets:{calc:bool}} */
export function render(page) {
  const url = SITE.origin + page.slug;
  const trail = page.crumbs || [["Home", "/"], [page.crumb || page.h1, page.slug]];
  const crumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: trail.map(([t, h], i) => ({ "@type": "ListItem", position: i + 1, name: t, item: SITE.origin + h })) };
  const schemas = [crumbSchema, ...(page.schema || [])];
  if (page.slug === "/") schemas.push(businessSchema());
  if (page.faqs && page.faqs.length) schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } })) });
  const hero = page.hero || `<div class="hero-copy"><h1>${page.h1}</h1>${page.lede ? `<p class="lede">${page.lede}</p>` : ""}</div>`;
  const scripts = (page.calc ? `<script src="/assets/js/engine.js" defer></script><script src="/assets/js/calc-ui.js" defer></script>` : page.quiz ? `<script src="/assets/js/engine.js" defer></script>` : "") + (page.quiz ? `<script src="/assets/js/quiz.js" defer></script>` : "") + ((page.forms || callbackBlock(page)) ? `<script src="/assets/js/forms.js" defer></script>` : "");
  return `<!doctype html>
<html lang="${page.lang || "en-CA"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.meta)}">
<link rel="canonical" href="${url}">
${page.noindex ? '<meta name="robots" content="noindex,follow">' : ""}
${page.alternate ? `<link rel="alternate" hreflang="en-CA" href="${SITE.origin}${page.alternate}"><link rel="alternate" hreflang="${page.lang || "en-CA"}" href="${url}">` : ""}
<meta property="og:locale" content="en_CA"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(page.title)}"><meta name="twitter:description" content="${esc(page.meta)}"><meta property="og:type" content="website"><meta property="og:site_name" content="Resvick Mortgages"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.meta)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${SITE.origin}/assets/img/og-default.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#253551">
${SITE.ga4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${SITE.ga4}",{anonymize_ip:true})</script>` : ""}
${process.env.STAGING ? '<meta name="robots" content="noindex,nofollow">' : ""}
<link rel="preload" href="/assets/fonts/plus-jakarta-sans-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/plus-jakarta-sans-latin-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/assets/favicon-48.png" sizes="48x48" type="image/png"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="stylesheet" href="/assets/css/site.css">
${schemas.map(ld).join("\n")}
</head><body${page.home ? ' class="is-home"' : ""}>
${header(page.nav || "")}
<main id="main">
<section class="hero${page.home ? " hero-home" : ""}"><div class="wrap hero-in">${hero}</div>${page.home ? "" : quickRow(page.slug)}</section>
<div class="wrap">${proofStrip()}${page.slug === "/" ? "" : breadcrumbs(trail)}</div>
<article class="wrap prose">
${withTop(page)}
${relatedHtml(page)}
${page.slug === "/" ? latestGuides(3, "From the guides") : ""}
${page.faqs && page.faqs.length ? faq(page.faqs) : ""}
</article>
${revFor(page) ? `<div class="wrap">${revFor(page)}</div>` : ""}
${page.closing === false ? "" : `<div class="wrap">${cta(page.closing || { dark: true })}</div>`}
${callbackBlock(page)}
</main>
${footer()}
${stickyBar(page.slug)}
${scripts}
<script src="/assets/js/track.js" defer></script>
${(page.scripts || []).map((s) => `<script src="${s}" defer></script>`).join("")}
</body></html>`;
}
