import { SPECS_P1 } from "./specs-p1.mjs";
// Spec registry: exact titles/metas and the minimum internal-link set per page, transcribed from the build prompt (§7).
// `provisional: true` marks pages whose title/meta are NOT in the prompt and need Jared/Josh approval.
export const SPECS = {
  "/": {
    title: "Resvick Mortgages | BC Mortgage Broker — Renewals & First-Time Buyers",
    meta: "Joshua Resvick is a BC mortgage broker with Xeva Mortgage. 1,000+ mortgages funded, an underwriter's eye, and a plan for your mortgage long after it funds.",
    links: ["/mortgage-rates-bc/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/refinance-mortgage-bc/", "/self-employed-mortgage-bc/", "/mortgage-aftercare-program/", "/lender-comparison-report/", "/mortgage-calculators/", "/about-joshua-resvick/"]
  },
  "/about-joshua-resvick/": {
    title: "About Joshua Resvick | Mortgage Broker in Surrey, BC",
    meta: "Meet Joshua Resvick of Resvick Mortgages (Xeva Mortgage). An underwriting background, 1,000+ mortgages funded, and clear advice for buyers across BC.",
    links: ["/mortgage-aftercare-program/", "/lender-comparison-report/", "/how-mortgage-brokers-get-paid/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/mortgage-broker-surrey/", "/contact/"]
  },
  "/contact/": {
    title: "Contact Resvick Mortgages | Book a 15-Minute Call",
    meta: "Book a 15-minute call with Joshua Resvick, BC mortgage broker at Xeva Mortgage in Surrey. Call 778.882.5674 or email joshua@resvickmortgages.com.",
    links: ["/mortgage-application-checklist/", "/mortgage-calculators/#affordability", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/mortgage-aftercare-program/", "/about-joshua-resvick/"]
  },
  "/mortgage-calculators/": {
    title: "Mortgage Calculators | Payment, Affordability, PTT, Penalties & More",
    meta: "Every calculator a BC buyer or renewer needs: payments, affordability, down payment, BC transfer tax, CMHC premiums, renewal scenarios and penalties.",
    links: ["/bc-property-transfer-tax-calculator/", "/mortgage-penalty-calculator/", "/refinance-break-even/", "/home-equity-estimator/", "/first-time-home-buyer-bc/", "/mortgage-renewal-bc/", "/refinance-mortgage-bc/", "/investment-property-mortgages-bc/", "/mortgage-aftercare-program/", "/contact/"]
  },
  "/bc-property-transfer-tax-calculator/": {
    provisional: true,
    title: "BC Property Transfer Tax Calculator | With First-Time Buyer Exemption",
    meta: "Calculate BC property transfer tax in seconds, including the first-time buyers' and newly built home exemptions. Worked examples and the rules behind the number.",
    links: ["/first-time-home-buyer-bc/", "/closing-costs-bc/", "/first-time-buyer-programs-bc/", "/presale-mortgages-bc/", "/mortgage-calculators/", "/mortgage-calculators/#closing-costs", "/down-payment-guide-bc/", "/contact/"]
  },
  "/privacy/": {
    provisional: true, exempt: true, noindex: true,
    title: "Privacy Policy | Resvick Mortgages",
    meta: "How Resvick Mortgages handles the personal information you share through this website, and the choices you have.",
    links: []
  }
};

Object.assign(SPECS, SPECS_P1);
// Later-phase fragments: src/lib/specs-p2-*.mjs, each `export default { "/slug/": { title, meta, links, provisional? } }`
import fs from "node:fs";
const here = new URL(".", import.meta.url);
for (const f of fs.readdirSync(here).filter((f) => /^specs-p[2-9]-.*\.mjs$/.test(f)).sort()) Object.assign(SPECS, (await import(new URL(f, here).href)).default);

// SEO overrides (Jared, Oct 30): applied last; only title/meta change, links untouched.
import SEO from "./specs-seo.mjs";
for (const [slug, o] of Object.entries(SEO)) { if (!SPECS[slug]) throw new Error("SEO override for unknown slug " + slug); SPECS[slug].specTitle = SPECS[slug].title; SPECS[slug].specMeta = SPECS[slug].meta; Object.assign(SPECS[slug], o); }

// Guides posts register their own title/meta/links (§7.15); dates live in the posts, not in evergreen pages.
import { loadPosts } from "./posts.mjs";
for (const p of await loadPosts()) SPECS[p.slug] = { title: p.title, meta: p.meta, links: p.links || [], noindex: p.noindex, post: true };
