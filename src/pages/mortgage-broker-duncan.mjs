import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";
import { costToBuy } from "../lib/cost-to-buy.mjs";

// Added Nov 25, 2026. Sources are cited inline and in the facts box (batch7.mjs).
const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-duncan/#service", url: SITE.origin + "/mortgage-broker-duncan/", areaServed: [{ "@type": "City", name: "Duncan", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "North Cowichan" }, { "@type": "AdministrativeArea", name: "Cowichan Valley Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Duncan and the Cowichan Valley by phone and video from his Surrey office. Buyers here are often first-time buyers priced out of Victoria, hospital and public sector staff, and retirees. You can get pre-approved before you ever tour a home.",
  who: "Buyers and owners in Duncan, North Cowichan, Maple Bay, Chemainus and the rest of the Cowichan Valley.",
  next: "Book a 15-minute call and tell Joshua where you work and what kind of home you want."
})}
<p>Duncan is a small city in the middle of the Cowichan Valley, about an hour north of Victoria. Most of the valley's homes sit outside the City itself, in the Municipality of North Cowichan and the regional district around it. When people search for a mortgage broker in Duncan, they usually mean the whole valley. This page covers both.</p>
<p>I'm Joshua Resvick, a mortgage broker with Xeva Mortgage. Before brokering, I underwrote mortgages for a lender for five years, so I've sat on the other side of the desk. My office is in Surrey, and Cowichan Valley clients reach me by phone, video and secure upload. I don't have a Duncan office. A <a href="/contact/">15-minute call</a> is the easiest way to start.</p>

${ratesStrip()}

<h2>Why buyers look at Duncan</h2>
<p>Price is the main reason. BC Assessment's typical single-family value for 2026 was $592,000 in the City of Duncan and $733,000 in North Cowichan. In Langford it was $951,000, and in Victoria $1,128,000. (BC Assessment, Vancouver Island 2026 Property Assessments, January 2, 2026, read November 2026). These are assessed values, not sale prices. They still show why a lot of capital region buyers drive north.</p>
<p>The trade-off is the commute and a smaller market. If you will still work in Victoria, test the drive at rush hour before you buy. Then run the payment on the <a href="/how-much-mortgage-can-i-afford/">affordability calculator</a> with the costs of the drive in mind.</p>
<p>First-time buyers can use the same programs here as anywhere in BC. The FHSA, the Home Buyers' Plan and the transfer tax exemption all apply. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> puts them in order, and the <a href="/down-payment-guide-bc/">down payment guide</a> shows the minimums.</p>

${costToBuy("Duncan", [["Duncan house", 592000], ["North Cowichan house", 733000]], "Vancouver Island")}

<h2>A small city with a lot of renters</h2>
<p>The City of Duncan is compact. The 2021 Census counted 5,047 people, up 2.1% from 2016. North Cowichan counted 31,900, up 7.7%. (North Shore News, 2021 Census results, February 2022, read November 2026).</p>
<p>The City's 2021 housing report found that 46% of Duncan households rent, the highest share in the valley. Apartments made up about 44% of homes, and about 30% were built before 1961. The median household income in 2016 was $40,177, the lowest in the region. (Cowichan Valley Regional District, Duncan Housing Needs Data Report, January 2021, read November 2026).</p>
<p>For a buyer, that means two things. Older homes are common, so a good inspection matters. And a lot of renters want to buy, which keeps entry-level homes in demand. A modest income can still qualify if your debts are low and your down payment is in place. Lenders look at the whole file, not just the salary.</p>

<h2>The new hospital and public sector jobs</h2>
<p>Island Health is building a new hospital to replace Cowichan District Hospital. The Quw'utsun Valley Hospital will have 204 beds and is set to open in mid-2027. It is being built on Cowichan Tribes land. (Government of BC news release, May 29, 2026, and Island Health project page, read November 2026).</p>
<p>A big project like that brings nurses, care aides, trades and support staff into the valley. Many will want to buy. Lenders read these jobs in different ways:</p>
<ul>
<li><strong>Permanent full-time staff.</strong> A job letter and recent pay stubs usually do the job, even if you are new to the role.</li>
<li><strong>Casual or part-time staff.</strong> Many lenders want a two-year history of hours. Some will use a shorter one with the same employer. The <a href="/mortgages-for-nurses-and-healthcare-workers/">health care workers page</a> explains the usual rules.</li>
<li><strong>Trades on the build.</strong> Contract and union work is read differently from a salary. The <a href="/mortgage-for-contractors/">contractors page</a> covers it.</li>
</ul>
<p>If you are moving here for a job, you can start before you arrive. Pre-approval works the same from out of town. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a> lists the papers to gather.</p>

<h2>Suites and the 2024 zoning change</h2>
<p>In 2024 the City of Duncan let low-density lots hold up to four units. That follows the Province's small-scale housing rules. The City's notes also say part of that zone, east of the Trans-Canada Highway, is floodplain. New homes there must be built well above the ground. (City of Duncan, Small-Scale Multi-Unit Housing, read November 2026).</p>
<p>A legal suite can help you qualify, because many lenders count part of the rent. An unpermitted suite usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> shows the two common methods. If you plan to add units, check the flood construction level for the lot before you price the build.</p>

<h2>Homes on Cowichan Tribes land</h2>
<p>Cowichan Tribes reserve land sits right beside the City. Homes on reserve land are not held the same way as a fee simple lot, and fewer lenders finance them. If you are a member, or you are looking at a home on reserve land or leased land, tell me at the start. I place these files with a lender that has a program for them. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> for how it works.</p>

<h2>Rural lots around the valley</h2>
<p>Outside the City, many homes are on larger lots with a well or septic system. Lenders commonly ask for water and septic tests, and some limit how much land they will count. Farmland in the valley may be in the Agricultural Land Reserve, which limits what you can build. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> explains where a regular mortgage stops.</p>
<p>Budget for the inspections on top of the usual costs. The <a href="/closing-costs-bc/">closing costs guide</a> lists them, and the <a href="/bc-property-transfer-tax-calculator/">transfer tax calculator</a> shows the tax at your price.</p>

<h2>What working together looks like</h2>
<p>Most Cowichan Valley files start with one question: how are you paid? A hospital salary, casual shifts, a pension and a small business each lead to a different shortlist of lenders. Next, I look at the home itself. Floodplain, reserve land, a suite or a well can each rule lenders in or out, so I'd rather know before you write an offer.</p>
<p>You get the options in writing. My <a href="/lender-comparison-report/">Lender Comparison Report</a> sets out the term, how each lender works out a penalty, and whether you can take the mortgage with you if you move. After you close, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means a yearly review and a call well ahead of renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains that timeline.</p>

${callout("Who pays for the advice", "<p>On a normal purchase or renewal with a mainstream (A) lender, the lender pays Joshua. You don't. If your file needs a B or private lender, for example after credit trouble, there may be a fee. It is shown to you in writing on BCFSA's Form 1A before you sign.</p>")}

<p class="more-links"><strong>Where to go next.</strong> Compare the other Island towns on the <a href="/mortgage-broker-vancouver-island/">Vancouver Island overview</a>. Self-employed buyers can start with the <a href="/self-employed-mortgage-bc/">self-employed hub</a>, and owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>. Check today's benchmarks on the <a href="/mortgage-rates-bc/">BC rates hub</a>, and test your numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>.</p>

${cityFacts("duncan")}
${nearbyCallout("duncan", callout)}

${cta({ title: "Talk to a broker who serves the Cowichan Valley", text: "Book a 15-minute call. Tell Joshua whether you work in the valley or commute south, and what you hope to buy. He will tell you which lenders suit your file and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-duncan/",
  h1: "Mortgage broker in Duncan, BC: buying a home in the Cowichan Valley",
  lede: "Buying in Duncan, North Cowichan or anywhere in the Cowichan Valley? Joshua Resvick, Xeva Mortgage, serves the valley by phone and video from his Surrey office. Prices, suites, floodplain and reserve land, explained the way a lender reads them.",
  crumbs: [["Home", "/"], ["Vancouver Island", "/mortgage-broker-vancouver-island/"], ["Serving Duncan", "/mortgage-broker-duncan/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Do you have an office in Duncan?", a: "No. Joshua works from his Surrey office and serves Duncan and the Cowichan Valley by phone, video and secure upload. Most clients never need to meet in person. The lender, appraiser and your lawyer or notary do their parts locally." },
    { q: "How much do I need to buy a home in Duncan?", a: "At BC Assessment's typical 2026 value of $592,000, the minimum down payment is $34,200. A qualifying first-time buyer pays about $1,840 in transfer tax. In North Cowichan, at $733,000, it's $48,300 down and about $4,660 in tax. Legal fees and an inspection come on top." },
    { q: "Is Duncan cheaper than Victoria for a first home?", a: "Assessed values are lower. BC Assessment's typical 2026 single-family value was $592,000 in Duncan and $733,000 in North Cowichan, against $1,128,000 in Victoria. Those are assessments, not sale prices, so check recent sales with a realtor." },
    { q: "Does the Speculation and Vacancy Tax apply in Duncan?", a: "Yes. Duncan and North Cowichan are both in the Province's taxable area. Owners file a yearly declaration, and owners who live in the home are generally exempt. It matters most if you buy a second home or leave one empty." },
    { q: "Can I buy a home on Cowichan Tribes reserve land with a mortgage?", a: "Sometimes, but it is a different kind of file. Reserve land is not held the same way as a town lot, so fewer lenders work on it. Joshua arranges these through a lender that does. Tell him at the start." },
    { q: "Will a lender count rent from a suite in Duncan?", a: "Often, if the suite is legal and the rent is documented. Many lenders count part of the rent toward your income. An unpermitted suite usually counts for nothing. Check the City's zoning and any flood construction level first." }
  ]
};
