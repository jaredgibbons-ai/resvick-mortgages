import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";
import { costToBuy } from "../lib/cost-to-buy.mjs";

// Added Nov 25, 2026. Sources are cited inline and in the facts box (batch7.mjs).
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-cranbrook/#service", url: SITE.origin + "/mortgage-broker-cranbrook/", areaServed: [{ "@type": "City", name: "Cranbrook", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Kimberley" }, { "@type": "AdministrativeArea", name: "Regional District of East Kootenay" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Cranbrook and the East Kootenay by phone and video from his Surrey office. Buyers here are often hospital and college staff, rail, mine and trades workers, and first-time buyers who want a house for less than the coast. Homes are among the lowest-priced in the region.",
  who: "Buyers and owners in Cranbrook, Kimberley, Wycliffe, Moyie and the rest of the East Kootenay.",
  next: "Book a 15-minute call and tell Joshua how you are paid and what you want to buy."
})}
<p>Cranbrook is the main service centre of the East Kootenay, between the Rockies and the Purcells. It has the region's hospital, college and airport. People come here for work, for the outdoors, and for house prices that look very different from the coast.</p>
<p>I'm Joshua Resvick, a mortgage broker with Xeva Mortgage. I was a lender's underwriter for five years first, so I know what makes a file easy or hard. I'm in Surrey and serve the East Kootenay by phone and video, with documents sent through secure upload. There isn't a Cranbrook office. <a href="/contact/">Book a 15-minute call</a> to get going.</p>

${ratesStrip()}

<h2>What homes cost here</h2>
<p>BC Assessment's typical single-family value in Cranbrook was $517,000 for 2026, up 3%. A typical strata home was $278,000, also up 3%. Kimberley was $564,000 for a house. (BC Assessment, Southern Interior 2026 Property Assessments, January 2, 2026, read November 2026). Assessed values are not sale prices, but they show the gap with the coast.</p>
<p>At those prices, the down payment can be within reach sooner. A $517,000 home needs at least $26,700 down, which is 5% of the first $500,000 plus 10% of the rest. A $278,000 strata home needs $13,900. The <a href="/down-payment-guide-bc/">down payment guide</a> shows the rules, and the <a href="/cmhc-insurance-bc/">CMHC insurance page</a> shows the premium.</p>

${costToBuy("Cranbrook", [["Cranbrook house", 517000], ["Cranbrook strata home", 278000], ["Kimberley house", 564000]], "Southern Interior")}

<h2>A regional hub with steady jobs</h2>
<p>The City's economic development site lists East Kootenay Regional Hospital and College of the Rockies, with about 2,100 full-time students. It says the airport handles over 134,000 passengers a year. It gives a population of 21,308 in 2019. (Choose Cranbrook, By the numbers, read November 2026).</p>
<p>That mix makes for a wide range of mortgage files:</p>
<ul>
<li><strong>Hospital and health staff.</strong> Permanent staff are usually simple. Casual and part-time staff need a history of hours. The <a href="/mortgages-for-nurses-and-healthcare-workers/">health care workers page</a> explains the usual rules.</li>
<li><strong>College, school and public sector staff.</strong> Salaried roles are read easily. Contract teachers and term staff need more paperwork. The <a href="/mortgages-for-teachers-and-school-staff/">teachers page</a> covers it.</li>
<li><strong>Rail, mine and shift workers.</strong> If you work at a mine, on the railway or on another shift job, base pay is easy to count. Overtime and premiums are often averaged over two years. The <a href="/mortgages-for-camp-mine-and-shift-workers/">shift workers page</a> covers the details.</li>
<li><strong>Trades and contractors.</strong> Self-employed trades are usually asked for two years of tax returns. The <a href="/mortgage-for-contractors/">contractors page</a> walks through it.</li>
</ul>

<h2>Moving to Cranbrook</h2>
<p>Many buyers arrive for a new job at the hospital, college, a mine or the airport. Others are moving from Alberta, which is close by. You can start the mortgage before you arrive.</p>
<ol>
<li><strong>Start with a pre-approval.</strong> It tells you what you can spend in Cranbrook and locks in a rate for a while. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> covers the paperwork.</li>
<li><strong>Have your job offer in writing.</strong> Most lenders want a signed offer or employer letter. Some accept a probation period, and some don't.</li>
<li><strong>Know the BC costs.</strong> BC charges a property transfer tax, which Alberta doesn't. The <a href="/bc-property-transfer-tax-calculator/">transfer tax calculator</a> shows the tax at your price, with the first-time buyer exemption.</li>
<li><strong>Plan the timing.</strong> If you own a home elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> can cover a short gap in some cases.</li>
</ol>

<h2>Suites and small multi-unit housing</h2>
<p>Cranbrook's Council adopted Zoning Bylaw Amendment No. 4161 on June 10, 2024. Smaller parcels can have 3 units, and larger ones up to 4, in the main residential zones. Each parcel can also hold one secondary suite and one accessory dwelling unit. (City of Cranbrook, Small-Scale Multi-Unit Housing, June 2024, read November 2026).</p>
<p>The City said in 2023 that Cranbrook needs about 1,400 new homes by 2031. (City of Cranbrook news, October 26, 2023, read November 2026). That demand helps a legal suite rent steadily. Many lenders count part of that rent toward your income. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two methods.</p>

<h2>Short-term rentals</h2>
<p>The City said in October 2023 that it had no bylaw or policy on short-term rentals. It also said its vacancy rate was too low to opt out of the Province's principal-residence rule. (City of Cranbrook news, October 31, 2023, read November 2026). So the Province's rule is the one to know: you can generally rent short-term only in your own home, plus one suite or extra unit. Many lenders won't count short-term rent at all.</p>

<h2>Kimberley and rural lots</h2>
<p>Many buyers also look at Kimberley, just to the north, and at rural lots around the region. Kimberley has a ski resort, so some buyers there want a second home. The <a href="/second-home-and-vacation-property-mortgages-bc/">second home page</a> explains how lenders treat those.</p>
<p>Rural lots often have a well or septic system, and lenders commonly ask for tests. Land in the Agricultural Land Reserve comes with building limits, and lenders often value only the house and a small piece of land. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> goes through it. Budget for inspections, and see the <a href="/closing-costs-bc/">closing costs guide</a>.</p>

<h2>Manufactured homes</h2>
<p>Manufactured homes are common in the region, both on owned land and in parks. Owning the land under it makes the biggest difference. On a rented pad, fewer lenders will help, terms are shorter and older homes may not qualify. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> explains both setups.</p>

<h2>How I handle East Kootenay files</h2>
<p>First, your income. A nurse's salary, rail shifts with overtime, a mine rotation, a pension or a contracting business all point to different lenders. Second, the property. A pad home, a suite, farmland or a rural well can narrow the list quickly, so I check before you make an offer.</p>
<p>Then I write it up. The <a href="/lender-comparison-report/">Lender Comparison Report</a> compares terms, penalty methods and portability. After closing, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> covers a yearly review and a call about six months ahead of renewal, as the <a href="/mortgage-renewal-bc/">renewal guide</a> explains.</p>

${callout("Is there a fee?", "<p>Not when an A lender takes the mortgage. The lender pays the broker. Pad homes, new self-employment or credit trouble can push a file to a B or private lender, and those may carry a fee. You see any fee in writing on BCFSA's Form 1A before you commit.</p>")}

<p class="more-links"><strong>Where to go next.</strong> Nearby, the <a href="/mortgage-broker-fernie/">Fernie page</a> covers the Elk Valley and the <a href="/mortgage-broker-invermere/">Invermere page</a> covers the Columbia Valley. First-time buyers can start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, and self-employed buyers with the <a href="/self-employed-mortgage-bc/">self-employed hub</a>. Check today's benchmarks on the <a href="/mortgage-rates-bc/">BC rates hub</a>, and test your numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>.</p>

${cityFacts("cranbrook")}
${nearbyCallout("cranbrook", callout)}

${cta({ title: "Talk to a broker who serves Cranbrook", text: "Book a 15-minute call. Tell Joshua about your job, your down payment and the home you want, in Cranbrook or nearby. He will tell you which lenders fit and what comes next." })}
`;

export default {
  slug: "/mortgage-broker-cranbrook/",
  h1: "Mortgage broker in Cranbrook, BC: buying a home in the East Kootenay",
  lede: "Buying in Cranbrook or Kimberley, or moving to the East Kootenay for work? Joshua Resvick, Xeva Mortgage, serves the region by phone and video from his Surrey office. Shift pay, suites, pad homes and rural lots, explained the way a lender reads them.",
  crumbs: [["Home", "/"], ["Cities served", "/bc-mortgage-broker-service-areas/"], ["Serving Cranbrook", "/mortgage-broker-cranbrook/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office in Cranbrook?", a: "No. Joshua works from his Surrey office and serves Cranbrook, Kimberley and the East Kootenay by phone, video and secure upload. The lender, appraiser and your lawyer or notary do their parts locally." },
    { q: "How much down payment do I need for a house in Cranbrook?", a: "At least 5% of the first $500,000 and 10% of the rest. On a $517,000 home that's $26,700. With under 20% down, the mortgage is insured and the premium is added to the loan. You also need cash for closing costs." },
    { q: "How do lenders count mine or rail overtime?", a: "Base pay is usually simple. Overtime and shift premiums are often averaged over two years, and lenders vary in what they accept. Bring two years of T4s and recent pay stubs. Joshua checks the rules before you apply." },
    { q: "I'm moving from Alberta. What's different about buying in BC?", a: "The big one is BC's property transfer tax, which Alberta doesn't have. First-time buyers may be exempt on part or all of it. The mortgage rules are federal, so qualifying works the same way. Your lawyer or notary must be licensed in BC." },
    { q: "Can a suite help me qualify in Cranbrook?", a: "Often. The City's 2024 zoning allows a secondary suite plus an accessory unit on many lots. If the suite is legal and the rent is documented, many lenders count part of it toward your income." }
  ]
};
