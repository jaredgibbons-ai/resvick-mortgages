import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema } from "../lib/city.mjs";
import { short } from "../lib/short.mjs";

const slug = "/mortgage-broker-langley/";

const body = `
${short({
  answer: "Joshua Resvick serves Langley online and by phone from his Surrey office. A Willoughby presale, a Brookswood house with a suite and a South Langley acreage are three different mortgages, and each needs the right lender.",
  who: "Langley City and Township buyers, renewers and self-employed owners.",
  next: "Buying an acreage? Book a 15-minute call before you write the offer."
})}
<h2>Two Langleys, and why the difference matters to a mortgage</h2>
<p>Langley is two municipalities.</p>
<p>The City of Langley is the compact downtown around Fraser Highway and the Langley Bypass. It's mostly condos, townhouses and older houses on small lots. It's also the future end of the line for the Surrey Langley SkyTrain, which the province expects to open in late 2029 (Province of BC, May 2026).</p>
<p>The Township of Langley surrounds it. Willoughby and Yorkson have most of the new townhouse and condo building. Walnut Grove, Brookswood and Murrayville have established family streets. Fort Langley sits on the river.</p>
<p>Then there's the rural south and east. Much of that land is in the Agricultural Land Reserve, and the lots are acreages, hobby farms and horse properties.</p>
<p>The split matters because the property types are so different. A Willoughby townhouse is a conventional insured or insurable mortgage. A Brookswood house with a suite raises the rental income question.</p>
<p>A five-acre property in South Langley raises harder questions. How much of the land will a lender value? Is the property farm-classed? Will a conventional lender touch it at all?</p>
<p>Joshua Resvick serves Langley from his office in Surrey, by phone, video and secure document upload. There's no Langley branch, and you never need to visit an office. Every step is done online, and your lawyer or notary handles the signing near you.</p>

${ratesStrip()}

<h2>Incomes in the two Langleys</h2>
<p>The City and the Township of Langley are counted separately in the 2021 Census, and the numbers differ. In the City, the median household income was $77,000 for 2020 and 12.7 percent of workers were self-employed. In the Township, the median was $108,000 and 17.8 percent were self-employed. In both, construction was the largest industry, followed by retail and health care. (Statistics Canada, 2021 Census Profile, read October 2026). The gap reflects the housing: the Township has more detached homes, acreages and larger households. Joshua asks which side of the boundary you are buying on, because the rules and the typical file differ.</p>

<h2>Willoughby, Yorkson and the new-construction file</h2>
<p>A large part of Langley's buying happens in newer townhouse and condo projects. Most are in Willoughby and along 200 Street. Three mortgage points come up again and again.</p>
<ul>
<li><strong>Presales close later than you think.</strong> A presale is financed at completion. If that's two or three years out, the approval that matters is the one you can get then, at that time's rates and rules. Joshua plans for the completion date and checks in as it gets closer. The <a href="/presale-mortgages-bc/">presale guide</a> covers deposits, assignments and the completion approval.</li>
<li><strong>New builds and the property transfer tax exemption.</strong> A newly built home can qualify for a property transfer tax exemption up to a price threshold. It's separate from the first-time buyer exemption. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> applies both.</li>
<li><strong>Strata fees count against you.</strong> Lenders add a share of the monthly strata fee to your housing costs. So two townhouses at the same price can get different approvals.</li>
</ul>

<h2>Suites, coach houses and the rental income question</h2>
<p>Older Langley neighbourhoods have many houses with basement suites. Think Brookswood, Walnut Grove and parts of Murrayville. The Township also allows secondary dwellings on larger lots in some zones.</p>
<p>Whether a lender counts the rent, and how much, depends on the lender. It also depends on whether the suite is permitted and documented.</p>
<p>Lenders use two methods. Some add a share of the rent to your income. Others subtract it from your housing cost. The share varies. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows both methods with figures.</p>
<p>Want to add a new suite to a house? The <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explains the federal program. It allows refinancing up to 90 percent of the as-improved value for a legal suite.</p>

<h2>Manufactured homes on leased pads</h2>
<p>Langley has a real leasehold market, and it is not in condos or towers. It is in manufactured home parks. In these parks you buy the home and lease the pad it sits on. MLS® listings for homes in Cedar Creek Estates in Brookswood, which has about 100 homes, show the tenure as "leasehold not prepaid, non-strata." Other parks in the Township include Langley Grove Estates, Fernridge Park, Pioneer Park and Pineridge. Most of what we found is in the Township, not the City. (Realtor.ca MLS® listings, read October 2026).</p>
<p>A lease you pay monthly, with no prepaid term, works differently from a home you own outright. Lenders vary a great deal on this kind of property. Some will not lend on it at all. Others want a larger down payment or a shorter amortization. The appraisal can also be harder, because there are fewer sales to compare. Joshua checks the park, the lease terms and the age of the home before you make an offer, so the financing condition is realistic. Our page on <a href="/mobile-home-mortgages-bc/">mobile and manufactured home mortgages</a> covers the basics.</p>

<h2>Acreage, ALR and rural Langley</h2>
<p>South and east Langley include a lot of land inside the Agricultural Land Reserve. Acreage financing is its own skill. Here are a few things to know before you fall in love with a property.</p>
<ul>
<li><strong>Lenders value the house and a limited amount of land.</strong> Many conventional lenders lend against the house plus a set number of acres, often a small number. They give little or no value to the rest of the land, or to outbuildings, barns and arenas. On a larger parcel, the mortgage may be a smaller share of the price than you expect. Your down payment has to cover the gap.</li>
<li><strong>Farm status changes the file.</strong> A property assessed as farm land, or with an active farm business, may fall outside standard home lending. It may need farm or specialty products instead.</li>
<li><strong>Wells, septic and access.</strong> Lenders and insurers ask about water, septic and road access on rural properties. An appraiser will comment on them too. Have the inspection and the well and septic reports before subject removal.</li>
<li><strong>Short-term rental and second homes on the land.</strong> The ALR and the Township have their own rules on extra homes on farm land. Don't assume a second home on the property can be rented out or counted as income.</li>
</ul>
<p>None of this makes an acreage impossible to finance. It means the lender has to be chosen for the property. Your down payment and timeline have to be planned around what that lender will value.</p>

<h2>Renewals in Langley</h2>
<p>Many Langley homeowners bought or renewed on five-year fixed terms, and renewal letters arrive all year. A letter is one lender's opening offer.</p>
<p>Since late 2024, a straight switch to a new lender at maturity usually doesn't need a new stress test. That's as long as the balance and amortization don't go up.</p>
<p>The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the window, the switch and what to compare. Is your renewal a year or more away? The free renewal reminder will contact you six months and 120 days out.</p>

<h2>Self-employed and trades income</h2>
<p>Langley has one of the region's larger groups of industrial and trades workers. Many work in the Gloucester and Port Kells industrial areas and along the 200 Street corridor. There are a lot of owner-operators, contractors and incorporated tradespeople.</p>
<p>Lenders read business income in different ways. The choice of lender can change what two years of tax returns support. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, dividends, stated-income programs and when a fee can apply.</p>

<h2>Working with Joshua from Langley</h2>
<p>The process is the same as for any client. A 15-minute call sets the goals and the timeline.</p>
<p>Joshua reads your file the way an underwriter does. That's what he did for five years before becoming a broker. You get a written Lender Comparison Report of real options. After funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps the mortgage under review, with a renewal plan six months out.</p>
<p>On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing. Fees apply only on some B-lender and private files, with written disclosure first.</p>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set and what to compare beyond it. The <a href="/mortgage-calculators/">calculators</a> let you test a payment, affordability with a suite and your cash to close.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-surrey/">Surrey</a>, where his office is. He serves <a href="/mortgage-broker-abbotsford/">Abbotsford</a> and the rest of the Fraser Valley too. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area. A review from a Langley client helps the next one find him.</p>`)}

<p>Manufactured homes on leased pads are only one kind of leasehold. See our pages on <a href="/leasehold-mortgages-bc/">leasehold mortgages</a> and <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> if the land under a home is leased.</p><p>If you own a business in Langley and want to buy its premises, Joshua also arranges <a href="/commercial-mortgages-bc/">commercial mortgages</a> as well.</p>

<p class="more-links"><strong>Related reading.</strong> Joshua has pages for <a href="/mortgage-for-contractors/">contractors and trades</a>, <a href="/mortgages-for-truckers-and-owner-operators/">truckers and owner-operators</a> and <a href="/mortgages-for-teachers-and-school-staff/">teachers and school staff</a>. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> work for any Langley file. To know who pays him, see <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>, or read <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${cta({ title: "Buying in Willoughby, renewing in Walnut Grove, or financing an acreage?", text: "Book a 15-minute call. You'll leave knowing what's realistic for the property you want and what to do first." })}
<p>Buying your first home? Start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>. For anything else, use the <a href="/contact/">contact page</a>.</p>
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
