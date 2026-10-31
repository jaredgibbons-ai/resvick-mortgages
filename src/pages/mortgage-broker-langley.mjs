import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";

const slug = "/mortgage-broker-langley/";

const body = `
<h2>Two Langleys, and why the difference matters to a mortgage</h2>
<p>Langley is two municipalities. The City of Langley is the compact downtown around Fraser Highway and the Langley Bypass, mostly condos, townhouses and older houses on small lots, and the future terminus of the Surrey Langley SkyTrain, which the province expects to open in late 2029 (Province of BC, May 2026). The Township of Langley surrounds it: Willoughby and Yorkson, where most of the new townhouse and condo construction is; Walnut Grove, Brookswood and Murrayville, with established family streets; Fort Langley on the river; and the rural south and east, where much of the land is in the Agricultural Land Reserve and the lots are acreages, hobby farms and equestrian properties.</p>
<p>The split matters because the property types are so different. A Willoughby townhouse is a conventional insured or insurable mortgage. A Brookswood house with a suite raises the rental-income question. A five-acre property in South Langley raises questions about how much of the land a lender will value, whether the property is farm-classed, and whether a conventional lender will touch it at all. ${servesLine("Langley")}</p>

${ratesStrip()}

<h2>Willoughby, Yorkson and the new-construction file</h2>
<p>A large part of Langley's buying activity is in newer townhouse and condo projects in Willoughby and along 200 Street. Three mortgage points come up repeatedly:</p>
<ul>
<li><strong>Presales close later than you think.</strong> A presale is financed at completion. If the completion is two or three years out, the approval that matters is the one you can get then, at the rates and rules in force then. Joshua plans for the completion date and checks in as it approaches. The <a href="/presale-mortgages-bc/">presale guide</a> covers deposits, assignments and the completion approval.</li>
<li><strong>New builds and the property transfer tax exemption.</strong> A newly built home can qualify for a property transfer tax exemption up to a price threshold, separate from the first-time buyer exemption. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> applies both.</li>
<li><strong>Strata fees count against you.</strong> Lenders add a share of the monthly strata fee to your housing costs. Two townhouses at the same price can produce different approvals because of it.</li>
</ul>

<h2>Suites, coach houses and the rental-income question</h2>
<p>Older Langley neighbourhoods such as Brookswood, Walnut Grove and parts of Murrayville have many houses with basement suites, and the Township also permits secondary dwellings on larger lots in some zones. Whether a lender counts the rent, and how much, depends on the lender and on whether the suite is permitted and documented. Lenders use two methods, adding a share of rent to your income or subtracting it from your housing cost, and the share varies. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows both methods with figures. For a house that would carry a new suite, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explains the federal program that allows refinancing up to 90 percent of as-improved value for a legal suite.</p>

<h2>Acreage, ALR and rural Langley</h2>
<p>South and east Langley include a great deal of land inside the Agricultural Land Reserve, and acreage financing is its own discipline. A few things to know before you fall in love with a property:</p>
<ul>
<li><strong>Lenders value the house and a limited amount of land.</strong> Many conventional lenders lend against the residence plus a set number of acres, commonly a small number, and give little or no value to the rest of the land or to outbuildings, barns and arenas. On a larger parcel, that means the mortgage may be a smaller share of the price than you expect, so the down payment has to cover the gap.</li>
<li><strong>Farm status changes the file.</strong> A property assessed as farm land, or with an active agricultural business, may fall outside standard residential lending and into agricultural or specialty products.</li>
<li><strong>Wells, septic and access.</strong> Lenders and insurers ask about water, septic and road access on rural properties, and an appraiser will comment on them. Have the inspection and the well and septic reports before subject removal.</li>
<li><strong>Short-term rental and secondary residences.</strong> The ALR and the Township have their own rules on additional residences on farm land. Do not assume a second home on the property can be rented out or counted as income.</li>
</ul>
<p>None of this makes an acreage unfinanceable. It means the lender has to be chosen for the property, and the down payment and timeline have to be planned around what that lender will value.</p>

<h2>Renewals in Langley</h2>
<p>Many Langley homeowners bought or renewed on five-year fixed terms, and renewal letters arrive all year. A letter is one lender's opening offer. Since late 2024, a straight switch to a new lender at maturity, with no increase to the balance or amortization, usually does not require a new stress test. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the window, the switch and what to compare. If your renewal is a year or more away, the free renewal reminder will contact you six months and 120 days out.</p>

<h2>Self-employed and trades income</h2>
<p>Langley has one of the region's larger concentrations of industrial and trades employment, in the Gloucester and Port Kells industrial areas and along the 200 Street corridor, and a lot of owner-operators, contractors and incorporated tradespeople. Lenders read business income in different ways, and the choice of lender can change what two years of returns support. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, dividends, stated-income programs and when a fee can apply.</p>

<h2>Working with Joshua from Langley</h2>
<p>The process is the same as for any client. A 15-minute call sets the goals and the timeline; Joshua reads your file the way an underwriter does, which is what he did for five years before becoming a broker; you receive a written Lender Comparison Report of real options; and after funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps the mortgage under review with a renewal plan six months out. On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing. Fees apply only on some B-lender and private files, with written disclosure first. The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set and what to compare beyond it, and the <a href="/mortgage-calculators/">calculators</a> let you test a payment, affordability with a suite and your cash to close.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-surrey/">Surrey</a>, where his office is, and <a href="/mortgage-broker-abbotsford/">Abbotsford</a> and the rest of the Fraser Valley. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area; a review from a Langley client helps the next one find him.</p>`)}

${cta({ title: "Buying in Willoughby, renewing in Walnut Grove, or financing an acreage?", text: "Book a 15-minute call. You will leave knowing what is realistic for the property you want and what to do first." })}
<p>For the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>, start there; for anything else, use the <a href="/contact/">contact page</a>.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Langley, BC: City and Township",
  lede: "Willoughby presales, Brookswood suite houses and South Langley acreages are three different mortgages. Joshua Resvick serves Langley from his Surrey office, online and by phone.",
  crumbs: [["Home", "/"], ["Langley", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Langley", ["Township of Langley", "City of Langley"])],
  faqs: [
    { q: "Can I get a regular mortgage on a Langley acreage?", a: "Often, but the lender has to be chosen for the property. Many conventional lenders value the house and a limited number of acres and give little value to extra land, barns or arenas, so the mortgage can be a smaller share of the price than on a city lot. Farm status, wells and septic also matter. Plan the down payment around what the lender will value." },
    { q: "Is there a difference between financing in Langley City and Langley Township?", a: "Not in the lending rules, which are the same lender rules everywhere in BC. The difference is in the housing stock. The City is mostly condos, townhouses and small lots; the Township ranges from Willoughby presales to rural acreages inside the Agricultural Land Reserve, and each property type is read differently by lenders." },
    { q: "How does a presale in Willoughby get financed?", a: "At completion, which can be years after you sign. Your deposits are paid from your own funds along the way, and the mortgage approval that matters is the one you obtain near the completion date under the rules and rates in force then. Joshua plans for that date from the start and reviews the file as it approaches." },
    { q: "Does Joshua have a Langley office?", a: "No. His office is in Surrey, and he serves Langley by phone, video and secure document upload, which is how most clients prefer to work anyway. Your lawyer or notary handles the signing in Langley. If you want to meet in person, the Surrey office is a short drive down the Fraser Highway." },
    { q: "Will a lender count the rent from a suite in Brookswood or Walnut Grove?", a: "Usually some of it, if the suite is permitted and the rent is documented. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies by lender. Choosing the lender whose method suits your file can be the difference between an approval and a decline." }
  ]
};
