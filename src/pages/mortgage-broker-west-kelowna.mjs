import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-west-kelowna/#service", name: "Resvick Mortgages, serving West Kelowna", url: SITE.origin + "/mortgage-broker-west-kelowna/", areaServed: [{ "@type": "City", name: "West Kelowna", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Peachland", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves West Kelowna and Peachland by phone and video from his Surrey office. Three things set this side of the lake apart: homes on Westbank First Nation leased land, steep hillside lots and winery-country acreage. Each one changes the lender list.",
  who: "West Kelowna and Peachland buyers, renewers and refinancers, especially with a leasehold home, a hillside lot, a suite or an acreage.",
  next: "Book a 15-minute call and say which neighbourhood and which kind of title you are looking at."
})}
<p>West Kelowna faces Kelowna across Okanagan Lake. It has newer subdivisions in places like Shannon Lake and Smith Creek, older homes around Westbank and Lakeview Heights, and hillside and vineyard properties above the highway. Peachland sits farther south along the lake.</p>
<p>Joshua Resvick is a Xeva Mortgage broker who was a lender's underwriter for five years before he started brokering, ten years ago. He has funded over 1,000 mortgages. He works with West Kelowna and Peachland clients from his Surrey office, and there is no branch on the Westside. Start with a <a href="/contact/">15-minute call</a>.</p>

${ratesStrip()}

<h2>Homes on Westbank First Nation land</h2>
<p>Some West Kelowna homes stand on land that belongs to Westbank First Nation. A buyer there owns a lease, not the land. The First Nation describes its leases as long-term, often 50 to 125 years, registered, and in many cases prepaid. (Westbank First Nation, Benefits to purchasing on leasehold land, August 21, 2019, read October 2026.)</p>
<p>Leases on Westbank land go in a federal register, not the BC land title system. (Westbank First Nation Land Registry Regulations, SOR/2007-232, Justice Laws Website, last amended January 2, 2019, read October 2026.) CMHC accepts a leasehold on reserve land as security. The lease must be registered and meet its leasehold lending rules. Your lawyer confirms that first. (CMHC, Alternative types of security, published March 19, 2021, read October 2026.) That page sets no minimum lease length. It does not say a 125-year or non-cancellable lease is needed.</p>
<p>You may hear that new developments use 125-year leases the landlord cannot cancel, in place of 99 years. One local law firm wrote about that trend. It said CMHC had approved the form for homes leased directly from the landlord. (Pushor Mitchell LLP, 125 Year Non-Cancellable Leases of Westbank First Nation Lands, October 31, 2017, read October 2026.) It named no CMHC document, so ask your lender about it. A home in a larger development with a head lease and sublease is a different structure.</p>
<p>What does a lender look at? Practice varies, and some lenders do not lend on leasehold at all. Those that do usually ask how many years remain on the lease compared with your amortization. They ask whether the lease is prepaid or carries annual rent, whether it is registered, and whether the landlord can cancel it. Some want a larger down payment. Resale can also be narrower, and the appraisal can be harder.</p>
<p>Closing costs and taxes can differ on leased land. Westbank First Nation says most properties on its land carry no PST, GST, property transfer tax or speculation tax. (Westbank First Nation, Benefits to purchasing on leasehold land, August 21, 2019, read October 2026.) BC lists a property transfer tax exemption for some Westbank Lands registrations. It names people with the Indian Act tax exemption and First Nations. It does not mention leases sold to other buyers. (Province of British Columbia, Property transfer tax exemptions for First Nations, last updated May 21, 2026, read October 2026.) So do not assume the usual figures. Ask your lawyer to confirm the tax on your deal in writing. Ask for the lease documents early, and get a <a href="/mortgage-pre-approval-bc/">pre-approval</a> that names the property type. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> also explains leasehold financing for a home on leased land.</p>

<h2>Incomes in West Kelowna</h2>
<p>West Kelowna's median household income was $99,000 for 2020, and 19.4 percent of workers were self-employed. Health care, retail and construction were the three largest industries. (Statistics Canada, 2021 Census Profile, read October 2026). The self-employed share is the highest of the Okanagan cities we cover. Many owners run a trade, a vineyard service or a small company. If you work for yourself, expect the lender to ask for your business tax returns along with your personal ones.</p>

<h2>Hillside lots, wildfire areas and renovation plans</h2>
<p>Much of West Kelowna climbs a hill. The City's secondary suite bulletin says a development permit may be needed in Hillside, Sensitive Terrestrial Ecosystem, Aquatic or Wildfire areas, on top of the building permit. (City of West Kelowna, Secondary Suite Information Bulletin, revised April 2025, read October 2026.)</p>
<p>For a buyer, that means two checks. First, ask whether the lot sits in one of those areas before you plan a suite or an addition. Permits add time and cost. Second, get a home insurance quote early. A lender needs proof of insurance before it funds, and the quote is better to have in hand than to chase at the end.</p>
<p>If you plan to renovate right after you buy, the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> shows how the work can be rolled into the mortgage. A lender will want quotes and an appraisal of the finished value.</p>

<h2>Suites and carriage houses on the Westside</h2>
<p>West Kelowna changed its rules in 2024. Council adopted zoning amendments for small-scale multi-unit housing on May 21, 2024. They allow up to three units on lots under 280 square metres and up to four on larger lots. Examples include a house with a suite and a carriage house. Not every layout fits every lot, and servicing can limit the number of units. (City of West Kelowna, Small Scale Multi Unit Housing page, read October 2026.)</p>
<p>The bulletin sets a size cap. A suite can be up to 100 square metres or 40 percent of the habitable floor area, whichever is less. It lists parking stalls by bedroom count and requires a building permit and registration. The bulletin is not consistent about parking, so confirm the number with the City. (City of West Kelowna, Secondary Suite Information Bulletin, revised April 2025.)</p>
<p>A lender asks a simple question about any suite. Is it legal, and can the rent be proven? A permitted, documented suite lets many lenders count a share of the rent. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> compares the two methods. Already own the home? The <a href="/secondary-suite-refinance/">secondary suite refinance page</a> covers building one with the federal program.</p>

<h2>Wine-country acreage and the drive to Kelowna</h2>
<p>West Kelowna is known for its wineries and orchards. A few properties have a house, a vineyard block and farm buildings together, and some sit in the Agricultural Land Reserve. Lenders split those files into the home and the land. Many residential lenders cap the land value, give farm buildings little credit and decline where the property is mainly a business. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> explains the options.</p>
<p>Plenty of Westside households work across the lake in Kelowna. Lenders do not price a commute, so the drive does not hurt your approval. What matters is how you are paid. Salary, commission, seasonal work and self-employment are each read differently. If you run a business, the <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains how lenders treat it.</p>

<h2>Peachland</h2>
<p>Peachland is its own municipality, the District of Peachland. It requires suites to be registered. The District's page lists a registration form, a building permit, an annual suite licence and added water or sewer charges. It also says a grace period for unregistered suites ended in December 2019. (District of Peachland, Suites page, read October 2026.) A suite that is not registered may not count with a lender, and it can also cause trouble at resale.</p>

<h2>What Joshua does for Westside clients</h2>
<ol>
<li><strong>Checks the title before the price.</strong> A freehold house, a leasehold home and a strata townhouse each have different lenders. He confirms which one you have before you commit.</li>
<li><strong>Shows the options on paper.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lists the rate, term, penalty method and portability side by side, so you can see what you give up by choosing one lender over another.</li>
<li><strong>Works with your local team.</strong> You send documents through a secure link. An appraiser, lawyer or notary on the Westside does the local steps, and Joshua keeps your realtor informed.</li>
<li><strong>Follows up each year.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> adds a yearly review and a call roughly six months before your term ends.</li>
</ol>

${callout("Who pays for the broker", "<p>On most West Kelowna files, the lender pays Joshua and the service costs you nothing. Leasehold, acreage and unusual-income files sometimes call for a B or private lender. If one does, any fee to you must be shown in writing on BCFSA's Form 1A before you commit.</p>")}

<h2>Buying, renewing and refinancing in West Kelowna</h2>
<p><strong>First-time buyers</strong> can use BC and federal programs. These include the First Home Savings Account, the Home Buyers' Plan and the property transfer tax exemption. Leased land can change the tax side, so check with your lawyer. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> explains how the programs fit together.</p>
<p><strong>Renewing owners</strong> have more room than they think. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the timeline. Test your options in the <a href="/mortgage-calculators/">mortgage calculators</a>, where the <a href="/mortgage-calculators/#renewal">renewal tool</a> compares staying, switching and refinancing. For how rates are set, read the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Around West Kelowna</h2>
<p>Many buyers cross the lake to compare. The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the city on the other side, including carriage houses and recreational property. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> covers trades, rail and shift income farther north. Joshua serves the whole Okanagan, including Lake Country, in the same way.</p>

${cta({ title: "Talk to a broker who serves West Kelowna", text: "Book a 15-minute call. Say which neighbourhood you like and what the title is. You'll leave knowing which lenders fit and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-west-kelowna/",
  h1: "Mortgage broker serving West Kelowna and Peachland, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves West Kelowna and Peachland from his Surrey office by phone and video. Leasehold homes, hillside lots, suites and winery acreage, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving West Kelowna", "/mortgage-broker-west-kelowna/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on a home on Westbank First Nation land?", a: "Often, but not with every lender. You own a lease, not the land, so lenders look at the years left on the lease against your amortization, whether it is prepaid, whether it is registered and whether the landlord can cancel it. Some want more down. Joshua checks the lease terms against lender policy early." },
    { q: "Does a 125-year lease make financing easier?", a: "It can, but no official page says it must. A long lease leaves more years than most amortizations need, which lenders like. CMHC accepts a registered leasehold on reserve land as security if it meets CMHC's leasehold requirements, but its page sets no minimum term and does not name 125-year leases (CMHC, Alternative types of security, published March 19, 2021, read October 2026). Your own lease and lender still decide, so Joshua reviews it first." },
    { q: "Can I count the rent from a West Kelowna suite?", a: "If the suite is permitted and registered under City rules, many lenders count a share of documented rent, either against your housing costs or as added income. The share and method vary by lender. An unpermitted suite usually cannot be counted. Joshua runs both methods on your numbers." },
    { q: "Will a hillside or wildfire area affect my purchase?", a: "It can affect plans more than approval. The City says a development permit may be needed in Hillside, Wildfire, Aquatic and Sensitive Terrestrial Ecosystem areas, which adds time and cost to a suite or addition. A lender also needs proof of home insurance before funding, so get a quote early." },
    { q: "Do you also serve Peachland, and do I need to visit Surrey?", a: "Yes to Peachland, and no to Surrey. Joshua serves Peachland like West Kelowna, by phone, video and secure document upload, and your appraiser and lawyer or notary are local. BC lenders and rules are provincial, so the broker's location does not change your options." }
  ]
};
