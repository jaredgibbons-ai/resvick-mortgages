import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";

const slug = "/mortgage-broker-richmond/";

const body = `
<h2>Richmond's housing, from the Canada Line to the dikes</h2>
<p>Richmond is an island city on the Fraser delta, with a tower-and-townhouse core around the Canada Line stations at Brighouse, Lansdowne and Aberdeen, established detached neighbourhoods in Steveston, Broadmoor, Terra Nova and the east, and farmland inside the Agricultural Land Reserve across much of the south and east. Its buyers are a distinctive mix: newcomers to Canada buying a first home near family and transit, established families moving up to a detached house, and owners of older houses on large lots deciding whether to renovate, add a suite or sell.</p>
<p>${servesLine("Richmond")}</p>

${ratesStrip()}

<h2>Newcomer and recently arrived buyers</h2>
<p>Richmond is one of the first places many newcomers to Canada settle, and a large share of its first purchases are newcomer files. Lenders and the mortgage insurers run specific programs: they set rules on your status and how long you have been in Canada, on how foreign credit history is treated, on how income from a new Canadian job or from abroad is documented, and on the down payment, which some programs allow to be smaller than you might expect and others require to be larger. The right lender for a newcomer file is often not the one with the lowest advertised rate. The <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a> lays out the programs and the documents, and Joshua will tell you plainly which lenders fit your situation.</p>

<h2>The move-up purchase</h2>
<p>Richmond families moving from a condo or townhouse into a detached home in Broadmoor, Terra Nova or Steveston are usually solving a timing problem. The sale and the purchase rarely complete on the same day. Porting the existing mortgage carries your rate and term to the new home, often with a blended increase for the larger amount; bridge financing covers the down payment between the two completion dates and requires a firm, subject-free sale. The <a href="/porting-your-mortgage/">porting guide</a> and the <a href="/bridge-financing/">bridge financing page</a> explain both, and the penalty to break the existing mortgage, if porting does not work, is worth knowing before you list.</p>

<h2>Older houses, suites and renovation</h2>
<p>Richmond has adopted zoning amendments that allow a single secondary suite within a single-family detached home, and an existing suite must be inspected and upgraded to meet the BC Building Code and the city's bylaws (City of Richmond, page updated May 2024). For a buyer, a permitted suite with a lease and bank deposits is far easier for a lender to count than an unpermitted one. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods.</p>
<p>Many Richmond houses were built decades ago on large lots, and buyers often plan a renovation or a rebuild. A renovation financed at purchase can use a purchase plus improvements program, which lends against the as-improved value; a suite added later can use the federal secondary suite refinance program, which allows refinancing to 90 percent of as-improved value for a legal suite. The <a href="/purchase-plus-improvements/">purchase plus improvements page</a> and the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explain the conditions.</p>

<h2>Leasehold, floodplain and other Richmond specifics</h2>
<ul>
<li><strong>Leasehold strata.</strong> Some Richmond developments are leasehold rather than freehold. Fewer lenders finance leasehold, the remaining term of the lease matters, and the appraisal treats it differently. Confirm the tenure before you write an offer.</li>
<li><strong>Floodplain and dikes.</strong> Richmond's land is low-lying and protected by a dike system. That does not stop lending, but insurers and appraisers note it, and flood insurance availability and cost are worth checking on a house with a basement or at grade.</li>
<li><strong>Agricultural Land Reserve.</strong> Properties in the ALR, including homes on farm land in the east and south, are a different file: many conventional lenders value the house and a limited amount of land, farm status changes the products available, and the province's rules on additional residences apply.</li>
<li><strong>Speculation and vacancy tax.</strong> Richmond is inside the taxable area for the provincial speculation and vacancy tax, which requires an annual declaration from every owner (Province of BC, list updated December 2025). A home you live in is not the target, but it matters if you are keeping a condo after buying a house.</li>
</ul>

<h2>Renewals and switching</h2>
<p>A renewal letter is one lender's opening offer. Since late 2024, a straight switch to another lender at maturity, with the balance and amortization unchanged, usually does not require a new stress test, and switch costs are often covered. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains the window and the comparison, and the free renewal reminder contacts you six months and 120 days before maturity.</p>

<h2>Self-employed and business income</h2>
<p>Richmond's economy runs on the airport, the port and logistics, a large base of small businesses and importers, and professionals around the hospital and the city centre. Business income is workable, but lenders read it differently, and the choice of lender can change what the same two years of returns support. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers add-backs, dividends, stated-income programs and when a fee can apply. On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing for the service.</p>

<h2>Working with Joshua from Richmond</h2>
<p>A 15-minute call sets the goals and dates. Joshua reads your file the way an underwriter does, which is what he did for five years before becoming a broker. You receive a written Lender Comparison Report of real options, and after funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps the mortgage under review with a renewal plan six months out. The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set, and the <a href="/mortgage-calculators/">calculators</a> let you test a payment with the CMHC premium, affordability with a suite, closing costs including property transfer tax, and renewal scenarios. Results appear immediately with no email required.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-vancouver/">Vancouver</a> and <a href="/mortgage-broker-surrey/">Surrey</a>, where his office is, as well as Delta and the rest of Metro Vancouver. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area; a review from a Richmond client helps the next buyer find him.</p>`)}

${cta({ title: "A first home near the Canada Line, or a move up in Steveston?", text: "Book a 15-minute call. You will leave knowing what is realistic and what to do first." })}
<p>First purchase? The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> is the place to start. Anything else, the <a href="/contact/">contact page</a>.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Richmond, BC",
  lede: "Newcomer first purchases near the Canada Line, move-ups in Steveston and Broadmoor, and older houses with suites or a renovation in the plan. Joshua Resvick serves Richmond from his Surrey office.",
  crumbs: [["Home", "/"], ["Richmond", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Richmond", ["Delta"])],
  faqs: [
    { q: "I arrived in Canada recently. Can I buy in Richmond?", a: "Often, yes. Lenders and mortgage insurers run newcomer programs with rules on status, time in Canada, foreign credit and how income is documented, and some allow a smaller down payment than you might expect. The right lender depends on your situation, and the new to Canada page explains the programs and what to gather first." },
    { q: "Is a leasehold condo in Richmond harder to finance?", a: "Usually, yes. Fewer lenders finance leasehold strata, the remaining lease term affects both the approval and the amortization a lender will allow, and the appraisal is handled differently. It can be done, but confirm the tenure and the lease term before you write an offer and plan the lender choice around it." },
    { q: "Can I use rent from a suite in an older Richmond house to qualify?", a: "Usually some of it, if the suite is permitted and the rent is documented. Richmond allows one secondary suite in a single-family detached home, subject to inspection and code upgrades. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies by lender." },
    { q: "Can I finance a renovation when I buy an older Richmond house?", a: "Often, through a purchase plus improvements program, which lends against the value of the home after the work and advances the renovation funds once it is done. The conditions, including quotes, timelines and the insurer's limits, are on the purchase plus improvements page. Adding a suite later can use the federal secondary suite refinance program." },
    { q: "Do I need to come to an office?", a: "No. Joshua's office is in Surrey, and Richmond clients work with him by phone, video and secure document upload, with the signing handled by your lawyer or notary in Richmond. There is no Richmond branch, and the service is the same as for a client who lives next to the office." }
  ]
};
