import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const place = (name) => ({ "@type": "City", name, containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } });
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-courtenay/#service", name: "Resvick Mortgages, serving the Comox Valley", url: SITE.origin + "/mortgage-broker-courtenay/", areaServed: [place("Courtenay"), place("Comox"), place("Cumberland")] };

const body = `
${short({
  answer: "Joshua Resvick serves Courtenay, Comox and Cumberland by phone and video from his Surrey office. Most Comox Valley buyers are moving, retiring, posted here or buying a second home. Each story needs a different mortgage plan.",
  who: "Comox Valley buyers, renewers and refinancers, especially people relocating from the mainland, downsizing, serving at the base or buying a getaway.",
  next: "Book a 15-minute call and say which of those stories is yours."
})}
<p>The Comox Valley is one region with three municipal governments. Courtenay is the City, Comox is the Town and Cumberland is the Village. Around them sit rural electoral areas, including Baynes Sound-Denman/Hornby Islands, Lazo North and Puntledge-Black Creek. (CivicInfo BC, Comox Valley Regional District page, read October 2026.) That mix means one street address can fall under very different rules and services.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He spent five years as an underwriter before becoming a broker ten years ago. His office is in Surrey, so Comox Valley clients work with him by phone, video and secure uploads. There is no Comox Valley branch. More than 1,000 mortgages have been funded through him.</p>

${ratesStrip()}

<h2>Four reasons people buy here, and what each one needs</h2>
<h3>You are moving from the mainland</h3>
<p>Many buyers arrive with equity from a Lower Mainland sale. That money can make the purchase easy, but the timing is rarely easy. You may need to buy before your old home sells, or sell and rent for a while.</p>
<p>If the dates don't line up, a bridge loan can cover the gap. The <a href="/bridge-financing/">bridge financing page</a> explains the cost and the risks. Ask your lender to confirm the sale terms in writing before you waive any subject. A <a href="/mortgage-pre-approval-bc/">real pre-approval</a> done early lets you act quickly when a listing appears.</p>
<h3>You are downsizing or retiring</h3>
<p>Retirement income looks different to a lender than a paycheque does. Pension payments, registered retirement income fund withdrawals, rental income and investment income can each be counted, but lenders vary in how they average them.</p>
<p>Some retirees buy with no mortgage at all. Others keep a small one so cash stays free. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> walks through both routes. If you are a homeowner over 55 weighing other options, the <a href="/reverse-mortgage-bc/">reverse mortgage page</a> lays out the costs plainly.</p>
<h3>You are connected to the base</h3>
<p>CFB Comox is home to 19 Wing, whose roles include maritime patrol and search and rescue. (Government of Canada, 19 Wing page, read October 2026.) Postings bring families in and move them out again, so flexibility matters more than usual.</p>
<p>Ask about portability and the penalty method before you pick a lender. Both decide how costly an unexpected move will be. The <a href="/mortgages-for-military-and-veterans/">military and veterans page</a> covers service income, housing allowances and what lenders ask for.</p>
<h3>You are buying a second home or a rental</h3>
<p>Lakes, beaches and ski hills draw getaway buyers. A property you won't live in is not eligible for high-ratio insurance. Plan on at least 20 percent down, and know that some lenders ask for more. The <a href="/investment-property-mortgages-bc/">investment property page</a> explains how rent is counted.</p>
<p>If you hope to rent it short term, read the local bylaw first. Courtenay Council adopted Zoning Amendment Bylaw No. 3134 on May 7, 2025. It allows short-term rental only where the owner's principal residence is on the same parcel (City of Courtenay, Short-term rentals, read October 2026). The City's newer zoning bylaw repeats that rule (City of Courtenay, Zoning Bylaw No. 3203, 2026, read October 2026). Check the current version with the City, then see the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a>.</p>

<h2>Incomes in Courtenay and Comox</h2>
<p>The Census counts the City of Courtenay and the Town of Comox separately. In Courtenay, the median household income was $72,000 for 2020 and 16.5 percent of workers were self-employed. Retail, health care, and accommodation and food service were the largest industries. In Comox, the median was $83,000 and 17.5 percent were self-employed, with health care, retail and public administration at the top. (Statistics Canada, 2021 Census Profile, read October 2026). Visitor work in Courtenay can mean tips and seasonal hours. Lenders vary on how they count those, and they usually look at two years of earnings.</p>

<h2>Suites and secondary homes in Courtenay</h2>
<p>A legal suite can help a file. An unpermitted one can sink it, so confirm the status before you rely on the rent.</p>
<p>The City's zoning rules changed in 2026. Zoning Bylaw No. 3203 repeals and replaces Zoning Bylaw No. 2500, 2007 (City of Courtenay, Notice of proposed Zoning Bylaw No. 3203, 2026, read October 2026). A later City notice says it was adopted on March 27, 2026 (City of Courtenay, Notice of proposed Zoning Amendment Bylaw No. 3221, 2026, read October 2026). The City's zoning page lists the bylaw as consolidated July 21, 2026 (City of Courtenay, Zoning Bylaw, last updated Aug 10, 2026, read October 2026).</p>
<p>The City says the main aim was to meet provincial small-scale multi-unit housing rules. It does this by allowing secondary suites and accessory dwelling units in every zone that permits single detached and duplex homes (City of Courtenay, Notice of proposed Zoning Bylaw No. 3203, 2026, notice dated March 11, 2026, read October 2026). The bylaw text also sets minimum floor areas for suites. It caps accessory dwelling unit height at 6.5 metres unless a zone says otherwise (City of Courtenay, Zoning Bylaw No. 3203, 2026, section 6.18.1, read October 2026). Zone, lot size and servicing still matter, so ask the City about a specific lot before you buy.</p>
<p>Comox has its own rules. The Town adopted a new Zoning Bylaw 2056 on February 18, 2026, and it repealed the old Bylaw 1850 (Town of Comox, Zoning Bylaw No. 2056, adopted February 18, 2026, read October 2026). Where a zone allows a secondary suite, the suite must be inside the main home and have its own entrance. It cannot sit in a coach house, and it cannot be strata-titled apart from the home. Older Comox guides mention a 90 square metre limit and an owner-occupancy rule, but the suite section of the new bylaw has neither. It asks for one parking space for each unit, so a suite adds a space. (Town of Comox, Zoning Bylaw No. 2056, section 6.6 and Table 8.4.1, read October 2026).</p>
<p>Lenders ask two plain questions. Is the suite permitted, and is the rent documented? The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows how the two counting methods work.</p>

<h2>Acreage, wells and septic fields</h2>
<p>Outside the serviced areas, many Comox Valley homes rely on a well and a septic system. A lender will usually want proof that both work. Plan for a water test and a septic inspection as conditions in the offer, and book them early.</p>
<p>Larger rural parcels bring more questions. How much of the value is land? Are there outbuildings with no lending value? Is the property mainly a home, or mainly a business? Many residential lenders limit what they count, and the <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> sets out the property types. If the house needs work, the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> shows how renovation money can be folded in.</p>

<h2>How Joshua works with Comox Valley clients</h2>
<p><strong>Before you make an offer.</strong> He checks the property type, the zoning question and your income against lender rules, so a surprise doesn't show up after subjects are removed.</p>
<p><strong>While the file is open.</strong> You get a <a href="/lender-comparison-report/">Lender Comparison Report</a> that shows rate, term, penalty method and prepayment room side by side. Documents travel by secure link, and he deals with your realtor and lawyer directly.</p>
<p><strong>After you move in.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> brings a yearly check-in and a note roughly six months before maturity. That way a renewal is shopped, not simply signed.</p>

${callout("What you pay", "<p>For most Comox Valley purchases and renewals, the lender pays Joshua and you pay nothing for his work. Some files, such as certain rural or retirement-income cases, need a B or private lender. If yours does, BCFSA's Form 1A puts any fee to you in writing before you commit.</p>")}

<h2>First homes, renewals and refinancing</h2>
<p>A first-time buyer in the Comox Valley can combine the same programs as anyone in BC. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> sets out the order, and the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> explains how a rate gets set.</p>
<p>If your term is ending, begin about four months ahead. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the timeline. The <a href="/mortgage-calculators/">mortgage calculators</a> let you test staying, switching and refinancing with your own figures. Business owners can start at the <a href="/self-employed-mortgage-bc/">self-employed hub</a>.</p>

<h2>Nearby</h2>
<p>South of the Valley, the <a href="/mortgage-broker-nanaimo/">Nanaimo page</a> covers the central Island and the ferry commute. Farther down, the <a href="/mortgage-broker-victoria/">Victoria page</a> covers government income and the capital region. To begin, use the <a href="/contact/">contact page</a>.</p>

${cta({ title: "Talk to a broker who serves the Comox Valley", text: "Book a 15-minute call. Tell Joshua whether you are moving, retiring, posted or buying a getaway. You will leave with a clear next step." })}
`;

export default {
  slug: "/mortgage-broker-courtenay/",
  h1: "Mortgage broker serving Courtenay, Comox and Cumberland, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves the Comox Valley from his Surrey office by phone and video. Relocations, retirement, base postings and second homes, each planned the way an underwriter would plan them.",
  crumbs: [["Home", "/"], ["Serving the Comox Valley", "/mortgage-broker-courtenay/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy in the Comox Valley before my mainland home sells?", a: "Yes, if the numbers hold. Some buyers use a bridge loan or a lender that approves them on the new purchase with the old home still owned. Each route has costs and conditions. Joshua checks both options on your figures before you remove any subjects on the new home." },
    { q: "How does a lender treat retirement income in Courtenay?", a: "Many lenders count pension payments, registered retirement income fund withdrawals and some investment or rental income. How they average it and how much they count differs by lender. You usually need statements or tax slips to prove it. Joshua matches your income mix to a lender whose rules fit." },
    { q: "Do military postings at CFB Comox affect my mortgage?", a: "They can, mainly through timing and flexibility. Ask about portability, the penalty method and how the lender handles a move mid-term. Service income is usually treated as stable. The military and veterans page covers what lenders ask for and what housing allowances may count." },
    { q: "Can I rent out a second home in the Comox Valley?", a: "Often, but the bylaw comes first. Courtenay adopted a short-term rental bylaw on May 7, 2025. It requires the owner's principal residence on the same parcel, and the City's current zoning bylaw repeats that rule. Long-term rentals work differently. Lenders also want at least 20 percent down on a home you won't occupy. Check local rules before you buy." },
    { q: "Do I need to travel to Surrey to work with Joshua?", a: "No. The whole process runs by phone, video and secure document exchange, and your appraiser, lawyer or notary are local to you. Meeting in person is possible by appointment at the Surrey office, but there is no Comox Valley branch and none is needed." }
  ]
};
