import { short } from "../lib/short.mjs";
import { SPECS } from "../lib/specs.mjs";
import { esc, cta } from "../lib/site.mjs";

// Resource library: every guide on the site, grouped by situation. Summaries come from each page's own meta description,
// so they stay in sync automatically. A slug listed here that has no spec yet is skipped, not broken.
const GROUPS = [
  ["Buying your first home", "Start here if you haven't owned before. Programs, down payment, closing costs and the order to do things in.", [
    "/first-time-home-buyer-bc/", "/first-time-buyer-programs-bc/", "/mortgage-pre-approval-bc/", "/how-much-mortgage-can-i-afford/", "/down-payment-guide-bc/",
    "/buying-with-5-percent-down/", "/gifted-down-payment/", "/deposit-loan-and-borrowed-down-payment/", "/closing-costs-bc/", "/partners/", "/mortgage-application-checklist/",
    "/co-buying-a-home/", "/mortgage-with-a-cosigner/", "/car-loan-affecting-mortgage/", "/presale-mortgages-bc/", "/purchase-plus-improvements/", "/rent-to-own-homes-bc/"]],
  ["Renewing your mortgage", "Your renewal letter is an offer, not a verdict. How to compare, when to start and how switching works.", [
    "/mortgage-renewal-bc/", "/mortgage-renewal-rates-bc/", "/switch-mortgage-lenders-at-renewal/", "/stress-test-exemption-switching-lenders/", "/early-mortgage-renewal/",
    "/mortgage-renewal-letter-explained/", "/mortgage-renewal-denied/", "/renewing-mortgage-without-a-job/", "/rental-property-mortgage-renewal/", "/mortgage-renewal-reminder/"]],
  ["Rates and how your mortgage works", "What sets your rate, how terms compare, and the fine print that decides what leaving early costs.", [
    "/mortgage-rates-bc/", "/fixed-vs-variable-mortgage/", "/5-year-fixed-mortgage-rate/", "/3-year-fixed-mortgage-rate/", "/variable-rate-mortgage/", "/open-vs-closed-mortgage/",
    "/interest-rate-differential/", "/prepayment-privileges-and-penalties/", "/blend-and-extend-mortgage/", "/collateral-charge-mortgage/", "/mortgage-rate-hold/", "/porting-your-mortgage/"]],
  ["Refinancing and using your equity", "Cash-out, debt consolidation, lines of credit and suites. Run the break-even math before anything else.", [
    "/refinance-mortgage-bc/", "/is-it-worth-refinancing/", "/refinance-to-pay-off-debt/", "/cash-out-refinance-bc/", "/heloc-bc/", "/second-mortgage-bc/", "/readvanceable-mortgage/",
    "/secondary-suite-refinance/", "/how-much-suite-income-will-a-lender-count/", "/bridge-financing/", "/spousal-buyout-mortgage/", "/reverse-mortgage-bc/", "/downsizing-and-your-mortgage/"]],
  ["Self-employed and non-traditional income", "How lenders read business income, contracts and short histories, and which route fits your tax returns.", [
    "/self-employed-mortgage-bc/", "/stated-income-mortgage/", "/newly-self-employed-mortgage/", "/mortgage-for-contractors/", "/b-lender-mortgage-bc/", "/private-mortgage-lending-bc/"]],
  ["Credit and tough spots", "Calm, practical help when something has gone wrong. No judgement, just the options and the order to try them.", [
    "/behind-on-mortgage-payments/", "/missed-a-mortgage-payment/", "/mortgage-payment-deferral/", "/mortgage-default-and-foreclosure-bc/", "/bad-credit-mortgage-bc/",
    "/build-credit-for-a-mortgage/", "/mortgage-after-bankruptcy/", "/mortgage-after-consumer-proposal/"]],
  ["Your situation", "Your job, your household or your stage of life can change how a lender reads your file.", [
    "/mortgages-for-first-responders/", "/mortgages-for-nurses-and-healthcare-workers/", "/mortgages-for-military-and-veterans/", "/new-to-canada-mortgage/", "/foreign-buyers-bc/",
    "/mortgages-during-separation-and-divorce/", "/mortgages-for-single-parents/"]],
  ["Property types", "Strata, manufactured homes and farmland each have their own lender rules.", [
    "/condo-and-townhouse-mortgages/", "/mobile-home-mortgages-bc/", "/farm-and-alr-mortgages-bc/"]],
  ["Investing", "Rental mortgages, how rent counts, and the strategies worth knowing before you use them.", [
    "/investment-property-mortgages-bc/", "/refinance-rental-property/", "/converting-your-home-to-a-rental/", "/airbnb-and-short-term-rental-mortgages/", "/dscr-loans-canada/",
    "/brrrr-strategy-canada/", "/smith-manoeuvre/"]],
  ["Calculators and checks", "Run the numbers yourself. Every result shows up right away, and nothing you type is sent anywhere.", [
    "/mortgage-calculators/", "/bc-property-transfer-tax-calculator/", "/mortgage-penalty-calculator/", "/refinance-break-even/", "/home-equity-estimator/",
    "/mortgage-check/", "/purchase-readiness-check/", "/renewal-check/", "/equity-check/", "/investor-check/", "/self-employed-check/", "/lender-match/", "/mortgage-check-up/"]],
  ["Working with Joshua", "Who he is, how he's paid, and what happens after your mortgage funds.", [
    "/about-joshua-resvick/", "/mortgage-faq/", "/how-mortgage-brokers-get-paid/", "/mortgage-broker-vs-bank/", "/lender-comparison-report/", "/mortgage-aftercare-program/", "/apply/", "/contact/"]],
  ["Cities served", "Joshua works from his Surrey office and serves all of BC online and by phone. These pages cover the local details.", [
    "/mortgage-broker-surrey/", "/mortgage-broker-vancouver/", "/mortgage-broker-langley/", "/mortgage-broker-burnaby/", "/mortgage-broker-coquitlam/", "/mortgage-broker-richmond/",
    "/mortgage-broker-white-rock/", "/mortgage-broker-delta/", "/mortgage-broker-north-vancouver/", "/mortgage-broker-maple-ridge/", "/mortgage-broker-mission/", "/mortgage-broker-chilliwack/",
    "/mortgage-broker-port-coquitlam/", "/mortgage-broker-port-moody/", "/mortgage-broker-new-westminster/", "/mortgage-broker-squamish/", "/mortgage-broker-langford/", "/mortgage-broker-saanich/", "/mortgage-broker-courtenay/", "/mortgage-broker-vernon/", "/mortgage-broker-penticton/", "/mortgage-broker-west-kelowna/",
    "/mortgage-broker-abbotsford/", "/mortgage-broker-victoria/", "/mortgage-broker-nanaimo/", "/mortgage-broker-kelowna/", "/mortgage-broker-kamloops/", "/mortgage-broker-prince-george/",
    "/mortgage-rates-vancouver/", "/mortgage-rates-surrey/"]]
];

const label = (slug) => esc((SPECS[slug].h1 || SPECS[slug].title).split(" | ")[0]);
const groupId = (name) => name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
const groups = GROUPS.map(([name, blurb, slugs]) => [name, blurb, slugs.filter((s) => SPECS[s])]).filter(([, , s]) => s.length);

const jump = `<nav class="res-jump" aria-label="Jump to a topic" data-nocount><ul>${groups.map(([n]) => `<li><a href="#${groupId(n)}">${esc(n)}</a><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">. </span></li>`).join("\n")}</ul></nav>`;
const sections = groups.map(([name, blurb, slugs]) => `<h2 id="${groupId(name)}">${esc(name)}</h2>
<p>${esc(blurb)}</p>
<ul class="res-list">${slugs.map((s) => `<li><a href="${s}">${label(s)}</a><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">. </span><span>${esc(SPECS[s].meta)}</span></li>`).join("\n")}</ul>`).join("\n");

const body = `
${short({ answer: "Every guide, calculator and check on this site is listed here, grouped by what's going on in your life. Find the heading that sounds like you and open what fits.", who: "Anyone who isn't sure what to search for, or wants to see everything in one place.", next: "Not sure where to start? Try the <a href=\"/mortgage-check/\">two-minute mortgage check</a>." })}

<p>Not sure what to search for? That's normal. Mortgages have their own words. The question you need answered often has a name you haven't heard yet.</p>
<p>This page lists every guide on the site in one place. It's sorted by what's going on in your life, not by jargon. Find the heading that sounds like you. Skim the one-line summaries and open whatever fits.</p>
<p>Joshua Resvick writes every guide to explain, not to sell. Each one starts with a short version box. You get the answer in ten seconds, and read the detail only if you want it.</p>
${jump}
${sections}
<h2>Dated news and rule changes</h2>
<p>The guides above are kept current and carry no dates on purpose. When something changes, it gets its own dated post in <a href="/guides/">Guides</a>. That might be a Bank of Canada decision or a new federal rule. Then the guide that carries the rule gets updated.</p>
${cta({ title: "Can't find your question?", text: "Ask it. A 15-minute call is free, and you'll talk to the person who would do the work." })}
`;

export default {
  slug: "/resources/",
  h1: "Mortgage resources: every guide, sorted by your situation",
  lede: "Over a hundred plain-language guides, calculators and checks, grouped by what's going on in your life. Find your heading, skim, and open what fits.",
  crumb: "Resources", nav: "/resources/", body,
  faqs: [
    { q: "Where should I start if I'm buying my first home?", a: "Start with the first-time home buyer guide. It walks through the whole journey in order and links to every rule that matters, from down payment minimums to the property transfer tax exemption. Then run the affordability calculator so the numbers in the guides are your own numbers." },
    { q: "My renewal letter just arrived. Which guide do I read?", a: "Read the mortgage renewal guide first. It explains what the letter is, what you're free to compare and how much time you have. If you're thinking about moving lenders, the stress-test exemption guide is the next stop, because it decides whether you'll need to requalify." },
    { q: "Are these guides kept up to date?", a: "Yes. The guides on this page carry no dates because they're updated when the rules change. Anything time-sensitive, like a Bank of Canada decision, goes in a dated post on the Guides page, and the matching guide is updated to point to it." },
    { q: "Do I have to give my email to use any of this?", a: "No. Every guide, calculator and check works without signing up, and calculator results show right away. A form only appears if you choose to ask for a written version or a call, and every consent box starts unticked." },
    { q: "What if my situation isn't listed?", a: "Plenty of files don't fit a heading neatly, and that's what a conversation is for. Book a 15-minute call or use the contact page. Joshua works on every mortgage type, and the list above only shows where most questions start." }
  ]
};
