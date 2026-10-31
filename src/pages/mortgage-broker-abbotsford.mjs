import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";

const slug = "/mortgage-broker-abbotsford/";

const body = `
<h2>A city where most of the land is farmland</h2>
<p>Abbotsford is the largest city in the Fraser Valley, and the thing that shapes its mortgages more than anything else is land. Roughly 72 percent of the city's land base is inside the Agricultural Land Reserve (City of Abbotsford, 2021), and farming is a large part of the local economy. The urban part of the city, from the historic downtown and Clearbrook through to the newer subdivisions on the east side and up the slopes of Sumas Mountain and Eagle Mountain, is where most of the detached homes, townhouses and condos are. Around it, and in Bradner, Mount Lehman and Matsqui Prairie, are the acreages, hobby farms and working farms that give Abbotsford files a character few other cities have.</p>
<p>${servesLine("Abbotsford")}</p>

${ratesStrip()}

<h2>Farm and acreage financing</h2>
<p>An acreage is not a big house on a big lot as far as a lender is concerned. It is a different kind of file, and the rules are worth knowing before you fall for a property:</p>
<ul>
<li><strong>Lenders value the house and a limited amount of land.</strong> Many conventional lenders lend against the residence and a small number of acres, and give little or no value to the remaining land, barns, shops, arenas or greenhouses. On a larger parcel, the mortgage can therefore be a smaller share of the price than you expect, and the down payment has to cover the difference.</li>
<li><strong>Farm status moves the file.</strong> A property assessed as farm land, or with an active agricultural business, often falls outside standard residential lending into agricultural or specialty products with their own rules on income and valuation. Farm income itself is read through the farm's returns, and that is self-employed income with extra layers.</li>
<li><strong>Wells, septic, access and outbuildings.</strong> Appraisers and insurers comment on water, septic, road access and the condition of outbuildings. Have the inspections and the well and septic reports before subject removal.</li>
<li><strong>Additional residences.</strong> The ALR and the city have rules on second homes and farm worker housing on agricultural land. Do not assume a second residence can be rented or counted as income.</li>
</ul>
<p>None of this makes a Bradner acreage unfinanceable. It means the lender is chosen for the property, and the down payment and timeline are planned around what that lender will value. Joshua has placed acreage files with lenders that understand them, and he will tell you early if a particular property is going to need a bigger down payment than the listing price suggests.</p>

<h2>Suite homes in the urban areas</h2>
<p>East Abbotsford, Clearbrook and the newer subdivisions have many houses built with a basement suite, and the suite is part of most buyers' plans. The mortgage question is how much of the rent a lender will count. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies; a permitted suite with a lease and bank deposits is far easier to count. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods with figures, and the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explains the federal program for financing a new legal suite at up to 90 percent of as-improved value.</p>

<h2>First-time buyers in the Valley</h2>
<p>Abbotsford draws first-time buyers from across Metro Vancouver for the simple reason that a townhouse or a first house is within reach here when it is not closer to the city. The first-time buyer property transfer tax exemption and the newly built home exemption both matter at Abbotsford prices, and the FHSA and Home Buyers' Plan stack with them. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> sets the order of operations, and the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> shows what each exemption is worth on the price you are considering.</p>

<h2>Self-employed, trades and farm income</h2>
<p>Abbotsford's economy runs on agriculture, trucking and logistics, construction and trades, the regional hospital, the university and the airport. A large share of households have income that is not a simple T4: farm returns, owner-operator income, contractor invoices or a corporation's dividends. Lenders read these differently, and two years of returns can support very different approvals depending on which lender reads them. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, averaging, stated-income programs and when a fee can apply. On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing for the service; fees arise only on some B-lender and private files, with written disclosure first.</p>

<h2>Renewals in Abbotsford</h2>
<p>A renewal letter is one lender's opening offer. Since late 2024, a straight switch to a different lender at maturity, with no increase to the balance or amortization, usually does not require a new stress test, and switch costs are often covered. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the window and the comparison. If your mortgage was arranged elsewhere, the free renewal reminder contacts you six months and 120 days before maturity so there is time to compare. Note that credit unions, which hold many Valley mortgages, are provincially regulated and may apply their own rules on switches.</p>

<h2>How it works from Abbotsford</h2>
<ol>
<li><strong>A 15-minute call</strong> on your goals, your numbers and your dates.</li>
<li><strong>An underwriter's read</strong> of your file before a lender sees it. Joshua underwrote mortgages for five years before his ten as a broker, and acreage and farm files are where that reading matters most.</li>
<li><strong>A written Lender Comparison Report</strong>: rate, term, penalty method, prepayment room and portability, side by side.</li>
<li><strong><a href="/mortgage-aftercare-program/">Resvick Aftercare</a></strong> after funding, with annual reviews and renewal outreach six months out.</li>
</ol>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set, and why an acreage or a suite home is priced differently from a townhouse at the same lender. The <a href="/mortgage-calculators/">calculators</a> cover payment, affordability with a suite, closing costs and renewal scenarios, with every result shown immediately and no email required.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-langley/">Langley</a> and <a href="/mortgage-broker-surrey/">Surrey</a>, where his office is, as well as Mission, Chilliwack and the rest of the Fraser Valley. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area; a review from an Abbotsford client helps the next family find him.</p>`)}

${cta({ title: "Buying a suite home, an acreage or a first townhouse in Abbotsford?", text: "Book a 15-minute call. You will leave knowing what is realistic for the property you want, including what a lender will actually value." })}
<p>Anything else, the <a href="/contact/">contact page</a> has the details.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Abbotsford, BC",
  lede: "Acreages and farm files, suite homes in the urban areas, and first-time buyers moving out to the Valley. Joshua Resvick serves Abbotsford from his Surrey office, online and by phone.",
  crumbs: [["Home", "/"], ["Abbotsford", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Abbotsford", ["Mission", "Chilliwack"])],
  faqs: [
    { q: "Why would an acreage need a bigger down payment than the price suggests?", a: "Because many conventional lenders value only the house and a limited number of acres, and give little or no value to the rest of the land or to barns, shops and arenas. The mortgage is based on what the lender values, not the price, so the down payment has to cover the difference. Choosing a lender that understands acreages narrows that gap." },
    { q: "Can farm income be used to qualify for a mortgage?", a: "Yes, but it is read through the farm's tax returns, usually averaged over two years, and some lenders treat a working farm as agricultural rather than residential lending. Add-backs and the treatment of farm losses differ by lender. The self-employed hub covers the general rules, and Joshua will say early which lenders fit a farm file." },
    { q: "Does the Agricultural Land Reserve stop me from getting a regular mortgage?", a: "Not by itself. A house on ALR land can be financed by conventional lenders, but they value the land in a limited way, farm status changes the products available, and the rules on additional residences on farm land apply. The file is planned around what the lender will value rather than the listing price." },
    { q: "Will a lender count the suite rent on an East Abbotsford house?", a: "Usually some of it, if the suite is permitted and the rent is documented. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies by lender, so the lender choice can be the difference between an approval and a decline on a suite home." },
    { q: "Do I need to come to Surrey to work with Joshua?", a: "No. He serves Abbotsford by phone, video and secure document upload, with your lawyer or notary handling the signing locally. There is no Abbotsford branch, and nothing in the process requires a visit. If you would rather meet in person, the Surrey office is available by appointment." }
  ]
};
