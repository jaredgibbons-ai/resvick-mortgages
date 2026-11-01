import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-port-coquitlam/#service", name: "Resvick Mortgages, serving Port Coquitlam", url: SITE.origin + "/mortgage-broker-port-coquitlam/", areaServed: [{ "@type": "City", name: "Port Coquitlam", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick helps Port Coquitlam buyers, owners and renewers by phone and video from his Surrey office. PoCo is a rail city with detached homes and townhomes, and its suite rules are narrower than many buyers assume. The file starts with the zone, the suite status and how you are paid.",
  who: "Port Coquitlam buyers moving up from a condo, owners with a suite or a coach house in mind, and renewers with trades, rail or shift-work income.",
  next: "Book a 15-minute call and tell Joshua the street or address you are considering."
})}
<p>Port Coquitlam sits on the north bank of the Fraser River, where the Pitt River joins it. Coquitlam wraps around it to the north and west. Across the Pitt River is Pitt Meadows. The Canadian Pacific Railway chose this spot for a freight terminus in 1911, and the city incorporated in 1913. A large CPKC rail yard still sits in the middle of town (Wikipedia, Port Coquitlam, read October 2026).</p>
<p>That history is why railway, trades and shift work are familiar here. Joshua is a mortgage broker licensed through Xeva Mortgage. He worked as an underwriter for five years before brokering for ten, and he has funded more than 1,000 mortgages. You deal with him directly, from his Surrey office, and there is no branch in town.</p>

${ratesStrip()}

<h2>Rail, trades and shift pay: how lenders read a PoCo income</h2>
<p>Pay in rail, trades and shift jobs is often not one flat salary. Overtime, shift premiums, standby pay, tool allowances and seasonal hours can all show up. Lenders sort that pay into base income and extra income, and they do not all treat the extra the same way.</p>
<p>Many lenders count base pay in full. For overtime and premiums, a lot of them want a track record, often two years, and may average it. Some will use a lower figure than your best year. A few are more generous with unionized or long-tenure employees. This is lender policy, and it changes, so the lender choice matters more than the rate.</p>
<p>Joshua reads your T4s, your recent pay stubs and your employer letter before anything is submitted. He then picks lenders whose rules fit the way you are paid. If part of your income comes from a side business, the <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how it is read. The <a href="/mortgage-for-contractors/">contractors and trades page</a> covers invoices and write-offs.</p>
<p>Before you shop for homes, get a <a href="/mortgage-pre-approval-bc/">real pre-approval</a>. It confirms how much a lender will lend on your actual documents, not on a guess.</p>

<h2>Incomes in Port Coquitlam</h2>
<p>Port Coquitlam's median household income was $102,000 for 2020, and 13.5 percent of workers were self-employed. Health care was the largest industry, followed by retail and construction. (Statistics Canada, 2021 Census Profile, read October 2026). That is a lower self-employed share than in most Metro Vancouver cities. Most files here are wage files, with a smaller group in the trades who run their own shop. A steady hourly job is usually quick for a lender to read. A trades business takes a little longer.</p>
${censusTable("port-coquitlam")}

<h2>Suites and coach houses in Port Coquitlam: check the zone first</h2>
<p>Rent from a legal suite can help you qualify. Rent from an illegal one usually cannot be counted. So the first question on any PoCo house with a basement unit is whether the suite is allowed at all.</p>
<p>The City of Port Coquitlam says secondary suites are only permitted in the RS-1, RS-2, RS-3 and RS-4 zones. Building or altering a suite needs a building permit, and the work is inspected in stages, ending with a final inspection. A contractor needs a valid City business licence before a permit is issued. Properties in a floodplain may need a covenant registered on title. (City of Port Coquitlam, Secondary Suites page, read October 2026.)</p>
<p>Coach houses are a separate thing. The Tri-City News reports that they became a permitted use in 2017. Council later moved the approval step to city staff, and neighbour notice is still required. The rules apply only to eligible single-family lots, so confirm a specific lot with the City.</p>
<p>For a lender, the question is simple: is the unit permitted, and can the rent be shown? Many lenders count a share of rent from a permitted suite, and fewer do so for a detached unit. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the two common methods. If you want to add a suite, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> and the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> show how to finance it.</p>

<h2>Townhome or detached: two different files</h2>
<p>A first-time buyer in Port Coquitlam often chooses between a townhome and a detached house. They are priced differently, and they are financed differently too.</p>
<p>A townhome in a strata comes with a set of documents. The lender, and you, should read the minutes, the budget and any notice of a special levy. A freehold detached house has none of that, but the lender will care about the lot, any suite, and whether the property is in a floodplain. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> lists what lenders look at in a strata.</p>
<p>The down payment rules are the same either way. For a price under $1,500,000, the minimum is 5 percent of the first $500,000 plus 10 percent of the rest. The <a href="/down-payment-guide-bc/">down payment guide</a> works it out for any price, and the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> shows the tax on the purchase.</p>

<h2>Commuting from Port Coquitlam</h2>
<p>Port Coquitlam has its own West Coast Express station. TransLink lists weekday rush-hour service, with trains going west to Waterfront in the morning and east in the afternoon. Coquitlam Central and Moody Centre are the next stops toward Vancouver (TransLink, West Coast Express, read October 2026). Check the current timetable before you plan a daily commute around it.</p>
<p>A lender does not price your commute. It looks at income, debts, credit and the source of your down payment. Your own budget is another matter, since fuel, passes and parking all come out of the same pay.</p>

<h2>How Joshua helps Port Coquitlam clients</h2>
<ol>
<li><strong>Looks at the address and the income together.</strong> He checks the zone, the suite status and your pay documents before an offer, so there is no surprise in the financing condition.</li>
<li><strong>Writes the comparison down.</strong> A <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up rate, term, penalty method and prepayment room for each lender he would consider.</li>
<li><strong>Keeps everyone informed.</strong> Documents go by secure link. Your realtor, lawyer or notary and appraiser get what they need from him directly.</li>
<li><strong>Returns before your term ends.</strong> With <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and contacts you around six months before maturity.</li>
</ol>

${callout("What it costs you", "<p>For most Port Coquitlam files, the A lender pays Joshua and you pay nothing for his help. Some self-employed or credit-challenged files need a B or private lender instead. If one does, BCFSA's Form 1A puts any fee to you in writing before you commit to anything.</p>")}

<h2>Buying, renewing and refinancing in PoCo</h2>
<p><strong>First-time buyers</strong> here may qualify for several programs: the BC transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the new-home GST rebate. Each has its own test. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> sets out the order.</p>
<p><strong>Owners coming up to renewal</strong> should treat the lender's letter as one offer among several. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timing, and the renewal scenario tool in the <a href="/mortgage-calculators/">mortgage calculators</a> compares staying, switching and refinancing with your own figures.</p>
<p><strong>Refinancing</strong> to renovate, consolidate debt or add a suite begins with break-even math. The <a href="/refinance-mortgage-bc/">refinance guide</a> walks through it, and the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> explains how a rate is set.</p>

<h2>Next door</h2>
<p>Many PoCo buyers also look across the border in Coquitlam, where the housing mix and the suite rules differ. The <a href="/mortgage-broker-coquitlam/">Coquitlam page</a> covers that side. Across the Pitt River, the <a href="/mortgage-broker-maple-ridge/">Maple Ridge page</a> covers acreage and newer subdivisions. The <a href="/contact/">contact page</a> has the number and email for a first call.</p>

<p class="more-links"><strong>Related reading.</strong> Joshua has pages for <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/mortgages-for-truckers-and-owner-operators/">truckers and owner-operators</a>. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> work for any Port Coquitlam file. To know who pays him, see <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>, or read <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${nearbyCallout("port-coquitlam", callout)}

${cta({ title: "Talk to a broker who serves Port Coquitlam", text: "Book a 15-minute call. Tell Joshua how you are paid and which home you are weighing. You will leave knowing what a lender will ask for first." })}
`;

export default {
  slug: "/mortgage-broker-port-coquitlam/",
  h1: "Mortgage broker serving Port Coquitlam, BC",
  lede: "Joshua Resvick, Xeva Mortgage, helps Port Coquitlam buyers and owners from his Surrey office by phone and video. Rail, trades and shift income, suites and townhomes, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Port Coquitlam", "/mortgage-broker-port-coquitlam/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I add a basement suite to any Port Coquitlam house?", a: "Not any house. The City says secondary suites are only permitted in the RS-1, RS-2, RS-3 and RS-4 zones, and a building permit and inspections are required. Check the zone for the address before you count on rent. Joshua can run your numbers with and without the suite income." },
    { q: "Will overtime and shift pay count toward my mortgage?", a: "Often partly. Lenders usually count base pay in full and want a history of extra pay, commonly two years, before counting it, sometimes averaged. Policies differ a lot. Joshua reads your T4s and pay stubs first, then picks lenders whose rules fit how you are paid." },
    { q: "Does a lender count rent from a coach house?", a: "Sometimes. Port Coquitlam allows coach houses on eligible single-family lots, but fewer lenders count rent from a detached unit than from a suite inside the house. The share also varies. Ask before you buy, and have the permit and a lease ready as proof." },
    { q: "Is a townhome easier to finance than a detached house?", a: "Neither is automatically easier. The down payment rules are the same. A strata townhome adds document review, such as minutes, the budget and any special levy. A detached house adds questions about the lot, a suite or a floodplain. Joshua checks both before the subject-removal date." },
    { q: "Do I need to travel to Surrey to work with Joshua?", a: "No. Most files run on phone, video and secure document links, and your appraiser and lawyer are local to you. If you would like to meet face to face, ask on the first call. His office is in Surrey, and there is no Port Coquitlam branch." }
  ]
};
