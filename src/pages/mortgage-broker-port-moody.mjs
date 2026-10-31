import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-port-moody/#service", name: "Resvick Mortgages, serving Port Moody", url: SITE.origin + "/mortgage-broker-port-moody/", areaServed: [{ "@type": "City", name: "Port Moody", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick helps Port Moody buyers and owners by phone and video from his Surrey office. Most Port Moody homes are strata condos and townhomes near the water and SkyTrain, with detached houses up the hill. Strata documents and price level decide how the file is built.",
  who: "Port Moody condo and townhome buyers, move-up buyers heading for a detached house, owners with a suite, and renewers.",
  next: "Book a 15-minute call and tell Joshua whether you are looking at a strata home or a house."
})}
<p>Port Moody is at the east end of Burrard Inlet. Burnaby is to the west, Coquitlam to the east and south, and the small villages of Belcarra and Anmore lie to the northwest and north. Mountains rise to the north, and the highest point in the city is 712 metres (Wikipedia, Port Moody, read October 2026).</p>
<p>Joshua Resvick is a mortgage broker licensed through Xeva Mortgage, and a former underwriter. He spent five years assessing files for a lender, then ten years as a broker, with more than 1,000 mortgages funded. He serves Port Moody from his Surrey office. There is no office in the city, and you work with him directly.</p>

${ratesStrip()}

<h2>Two kinds of Port Moody home</h2>
<p>Most of the housing falls into two groups, and a lender reads them differently.</p>
<h3>Strata homes near the water and the station</h3>
<p>Areas such as Newport Village, Suter Brook and Moody Centre have condominium and townhouse buildings. The SkyTrain Millennium Line serves Moody Centre station. The West Coast Express stops there too (TransLink, West Coast Express, read October 2026).</p>
<p>For these homes, the building matters as much as you do. The lender reviews your income and credit, and it also reviews the strata corporation. That can slow a file down, so start the paperwork early.</p>
<h3>Detached homes on the hill</h3>
<p>Neighbourhoods such as Heritage Mountain and College Park have more single-family houses. These are often move-up purchases, where buyers sell a condo and carry the equity into a larger home. Those files raise questions about the order of events. Do you sell first, buy first, or need a bridge? The <a href="/bridge-financing/">bridge financing page</a> explains the choices.</p>

<h2>Buying a strata home: what the lender wants to read</h2>
<p>When you buy a condo or townhouse in BC, the seller's strata provides a package of documents. Lenders commonly ask to see parts of it before they fund.</p>
<ul>
<li><strong>Minutes</strong> from recent council and general meetings, which show disputes, repairs or planned work.</li>
<li><strong>The budget and contingency reserve fund</strong>, which show whether the building is saving for big repairs.</li>
<li><strong>Any special levy</strong>, past or proposed. A large levy can change what you can afford.</li>
<li><strong>The Form B Information Certificate</strong>, which summarizes the strata's finances, rules and insurance.</li>
</ul>
<p>Each lender sets its own comfort level. A building with a major repair coming can be harder to finance with some lenders than others. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> goes through the details. Joshua can look at the package alongside your offer so that the financing condition is realistic.</p>

<h2>Moody Centre and the presale question</h2>
<p>New construction is planned near the station. The Province's page on the Moody Centre transit-oriented development describes a proposal to redevelop a two-acre parcel near the station into hundreds of rental units. It says the master-planned area around the station would bring more than 3,000 new homes. It gives no construction timeline (BC Government, Moody Centre TOD, last updated July 17, 2026, read October 2026). So treat it as a plan, not a promise.</p>
<p>If you buy a presale in Port Moody, the mortgage comes after you sign, often a year or more later. Rates and rules can change in between. The <a href="/presale-mortgages-bc/">presale mortgage page</a> covers rate holds and what happens at completion. The appraisal at completion can also come in low, which the <a href="/guides/what-happens-if-the-appraisal-comes-in-low/">guide on low appraisals</a> explains.</p>

<h2>Larger purchase prices and the insured limit</h2>
<p>Some Port Moody homes sell near the top of what an insured mortgage allows. The rule to know is the line at $1,500,000. Under it, the minimum down payment is 5 percent of the first $500,000 plus 10 percent of the rest. On $1,200,000 that comes to $95,000. At $1,500,000 or more, the minimum is 20 percent.</p>
<p>The same line affects the amortization you can use. The <a href="/guides/thirty-year-amortization-and-the-1-5-million-cap/">guide on 30-year amortization and the $1.5 million cap</a> explains who qualifies for the longer schedule. The <a href="/down-payment-guide-bc/">down payment guide</a> works out the number for any price.</p>

<h2>Suites in Port Moody</h2>
<p>The City of Port Moody allows one secondary suite in a single detached home. Its guide limits a suite to 90 square metres and 40 percent of the building's floor space. A suite cannot be stratified. A building permit is required. The suite needs one extra off-street parking space and fire separation from the main home. The City adds a utility fee for the extra water and sewer use. Renting the suite needs a home-based business licence (City of Port Moody, A Guide to Secondary Suites, read October 2026). The City's suite page also says suites are allowed in the duplex zone.</p>
<p>A permitted suite lets many lenders count part of the rent. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows how the offset and add-back methods work.</p>

<h2>What Joshua does for Port Moody clients</h2>
<ol>
<li><strong>Reads the building first.</strong> If you are buying a strata home, he looks at the strata package with your pre-approval in mind.</li>
<li><strong>Compares lenders on paper.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> shows rate, term, penalty method and prepayment terms for each lender he would use.</li>
<li><strong>Coordinates the closing.</strong> Your realtor, lawyer and appraiser get what they need from him, and you upload documents through a secure link.</li>
<li><strong>Looks ahead to renewal.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means a yearly check-in and a call about six months before your term ends.</li>
</ol>

${callout("The cost to you", "<p>On most Port Moody purchases and renewals, the lender pays Joshua and you pay nothing for the service. A few files, such as those with unusual income or a building that mainstream lenders avoid, may need a B or private lender. Any fee to you must then appear in writing on BCFSA's Form 1A before you commit.</p>")}

<h2>Buying, renewing and refinancing in Port Moody</h2>
<p><strong>First-time buyers</strong> in Port Moody should look at each program on its own test. The transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new homes do not share one definition. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> sorts them out.</p>
<p><strong>Homeowners with a term ending soon</strong> have time to compare. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline, and the <a href="/mortgage-calculators/">mortgage calculators</a> include a renewal scenario for your own balance and term.</p>
<p><strong>Self-employed buyers</strong> need a lender that reads business income well. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how lenders read business income. For how a rate is set, see the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Neighbouring cities</h2>
<p>Many Port Moody buyers also look in <a href="/mortgage-broker-coquitlam/">Coquitlam</a>, where the housing mix differs. Others look at <a href="/mortgage-broker-burnaby/">Burnaby</a>, just to the west. Joshua serves all three the same way. The <a href="/contact/">contact page</a> has the phone number and email for a first call.</p>

${cta({ title: "Talk to a broker who serves Port Moody", text: "Book a 15-minute call. Tell Joshua which building or street you are looking at. You will leave knowing what a lender will check and what to gather." })}
`;

export default {
  slug: "/mortgage-broker-port-moody/",
  h1: "Mortgage broker serving Port Moody, BC",
  lede: "Joshua Resvick, Xeva Mortgage, helps Port Moody buyers and owners from his Surrey office by phone and video. Strata homes, presales, larger purchase prices and suites, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Port Moody", "/mortgage-broker-port-moody/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "What does a lender check when I buy a Port Moody condo?", a: "Besides your income and credit, many lenders review parts of the strata package: minutes, the budget, the contingency reserve fund, any special levy and the Form B. A building facing a large repair can be harder to finance with some lenders. Joshua reviews the package with your offer so the financing condition is realistic." },
    { q: "Can I use a 30-year amortization on a Port Moody home?", a: "Possibly. A 30-year amortization on an insured mortgage is open to first-time buyers and buyers of new builds, and insured mortgages apply only to prices under $1,500,000. Uninsured mortgages have different rules, and lenders vary. Joshua will check which schedule your purchase and lender allow." },
    { q: "How does a presale mortgage work if I buy near Moody Centre?", a: "You sign the contract now, but the mortgage is funded at completion, often a year or more later. Some lenders hold a rate for a limited time, and others approve closer to completion at the rate of that day. Your income and the appraisal are checked again at the end." },
    { q: "Can I rent out a suite in a Port Moody house?", a: "Port Moody allows one suite in a single detached home. It needs a building permit, an extra parking space and a home-based business licence to rent out. A permitted suite lets many lenders count part of the rent. An unpermitted one usually cannot be counted." },
    { q: "Do I have to go to Surrey to work with Joshua?", a: "No. Everything can run by phone, video and secure document upload, with a local appraiser and your own lawyer or notary. If you would rather meet in person, ask on the first call. His office is in Surrey, and there is no Port Moody branch." }
  ]
};
