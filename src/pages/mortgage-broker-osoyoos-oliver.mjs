import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-osoyoos-oliver/#service", name: "Resvick Mortgages, serving Osoyoos and Oliver", url: SITE.origin + "/mortgage-broker-osoyoos-oliver/", areaServed: [{ "@type": "City", name: "Osoyoos", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Oliver", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Okanagan-Similkameen" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Osoyoos and Oliver by phone and video from his Surrey office. Buyers here include retirees, vineyard and orchard workers, and people who want a home on leased land. You can start the mortgage before you ever drive south.",
  who: "Buyers of homes, orchard land and leasehold homes in Osoyoos, Oliver and the South Okanagan.",
  next: "Book a 15-minute call and tell Joshua how you are paid and whether the home is on freehold or leased land."
})}
<p>Osoyoos and Oliver sit in the South Okanagan desert, about 30 km apart on Highway 97. Osoyoos is on the Canada-US border. Oliver bills itself as wine country. Destination Osoyoos says more than 40 wineries lie within a 20-minute drive (Destination Osoyoos, Road Tripping to Osoyoos, read October 2026). Both are small towns with their own rules for suites, rentals and farm land. A mortgage here often comes with a question about the land, the season or the lease.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Osoyoos and Oliver by phone and video. There is no branch in either town. You can <a href="/contact/">book a 15-minute call</a> from your porch or your truck.</p>

${ratesStrip()}

<h2>Retirees, seasonal work and the income lenders count</h2>
<p>Osoyoos has an older population. Its Official Community Plan puts the median age at 62.9. It says 43 percent of residents are 65 or older (Town of Osoyoos, Official Community Plan Bylaw No. 1375, adopted April 12, 2022, read October 2026). The town's housing report shows a median household income of $66,000 for 2020. Its census tables do not always agree (Town of Osoyoos, Housing Needs Assessment 2024, February 2025, read October 2026). Oliver's housing report gives $71,000. It counts 290 casual or seasonal workers and 260 self-employed workers among 2,310 in the labour force (Town of Oliver, Housing Needs Report, November 2024, read October 2026).</p>
<p>Lenders read these incomes in different ways:</p>
<ul>
<li><strong>Retirees.</strong> Pensions, annuities and registered income are usually counted from award letters and statements. Some lenders also consider investment income. A bigger down payment can offset a smaller income. See the <a href="/downsizing-and-your-mortgage/">downsizing page</a>.</li>
<li><strong>Year-round wage jobs.</strong> The hospital, the school district and larger employers pay steady wages. An employer letter and recent pay stubs do most of the work.</li>
<li><strong>Seasonal and tourism work.</strong> Destination Osoyoos calls local employment "significantly seasonal" (Destination Osoyoos, 5 Year Strategy 2024-2029, read October 2026). Many lenders average income over two years. Policies vary, so Joshua checks before you apply.</li>
<li><strong>Growers and owners.</strong> A vineyard, orchard or small business owner usually needs two years of tax returns, and lenders often look at net income after expenses. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes.</li>
</ul>

<h2>Incomes in Osoyoos and Oliver</h2>
<p>The census counts the two towns separately. In Osoyoos, the median household income was $66,000 for 2020. About 17.3 percent of workers were self-employed (370 of 2,135). Retail was the largest industry at about 285 workers. Accommodation and food services had about 270 and health care about 240. In Oliver, the median was $68,500, and 11.8 percent were self-employed (260 of 2,200). Health care led at about 295 workers. Retail had about 265 and accommodation and food services about 260. (Statistics Canada, 2021 Census Profile, read October 2026). Osoyoos has the higher self-employed share. Many owners run a vineyard service, a trade or a tourism business, and those files need two years of tax returns. The lower medians fit towns with many retirees. Pension and savings income can qualify, but lenders vary in how they count it. Seasonal pay is also common, and lenders usually look at a full year of earnings.</p>

<h2>What the two towns look like</h2>
<p>Osoyoos is mostly houses. In 2021 about 60 percent of its homes were single-detached, 19 percent were low-rise apartments and 5 percent were manufactured or mobile homes. Eighty-one percent of households owned their home (Town of Osoyoos, Housing Needs Assessment 2024, February 2025, read October 2026). The report says the town needs 303 new homes over five years.</p>
<p>Oliver is similar but a little more varied. About two-thirds of its homes were single-detached, and 3.9 percent were manufactured homes (Town of Oliver, Housing Needs Report, November 2024, read October 2026). Oliver's report says the town needs 302 homes over five years. Local anchors include the South Okanagan General Hospital, a packinghouse and the Okanagan Correctional Centre, which the Town's plan says created 240 full-time jobs (Town of Oliver, Official Community Plan Bylaw No. 1436, read October 2026).</p>
<p>On Osoyoos Indian Band land in Osoyoos, 43 affordable rental homes opened at Cedar Lane in October 2025. The Province says they are open to band members and Osoyoos residents (Province of BC, Forty-three homes open for people in Osoyoos, October 2, 2025, read October 2026). They are rentals, so they do not change what a buyer can borrow. They do show how much housing in the area sits on band land.</p>

<h2>Moving to the South Okanagan</h2>
<p>Many people who search for buying a home in Osoyoos or Oliver do not live here yet. Some are retirees who sold elsewhere. Some are starting work at a winery, a packinghouse or the hospital. In Osoyoos, the 2021 Census counted 632 of 3,279 homes as vacant or held by temporary residents (Town of Osoyoos, Housing Needs Assessment 2024, February 2025, read October 2026). That means part-year owners are common, and lenders see second homes often.</p>
<p>An order that tends to work:</p>
<ol>
<li><strong>Get pre-approved before you visit.</strong> It sets your price range and holds a rate for a set time. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what lenders ask for.</li>
<li><strong>Gather your income papers early.</strong> Employees need an offer or employer letter. Retirees need pension and account statements. Growers need two years of returns.</li>
<li><strong>Plan your closing date.</strong> A long closing lets you finish a season or sell a home elsewhere. A <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
<li><strong>Ask what kind of land it is.</strong> Freehold, farm land and leased land follow different lender rules. More on that below.</li>
</ol>

<h2>What homes cost</h2>
<p>BC Assessment's typical single-family value for 2026 was $639,000 in Osoyoos, down 4 percent. Oliver was $611,000, down 1 percent (BC Assessment, Southern Interior 2026 Property Assessments Announced, January 2, 2026, read October 2026). These are assessed values, not sale prices, and they change each year. The release gives no condo figure for either town. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> for how rates work. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> show what to set aside.</p>
<p>Two tax notes apply to out-of-town buyers. Osoyoos and Oliver are not on the speculation and vacancy tax list (Province of BC, Taxable areas for the speculation and vacancy tax, December 8, 2025, read October 2026). The Okanagan-Similkameen district is also not in the extra foreign-entity transfer tax area (Province of BC, Additional property transfer tax for foreign entities and taxable trustees, June 20, 2025, read October 2026). Rules change, so your lawyer should confirm what applies on the day you buy. For federal rules, see the <a href="/foreign-buyers-bc/">foreign buyers page</a>.</p>

<h2>Homes on Osoyoos Indian Band land</h2>
<p>The main Osoyoos Indian Band reserve stretches from Oliver to Osoyoos (Town of Oliver, Official Community Plan Bylaw No. 1436, read October 2026). Some homes in the area are on band land under a long lease. These files work differently from a town lot.</p>
<p>Indigenous Services Canada says that on designated reserve land, no mortgage is valid until the lessee and the lender enter into a mortgage acknowledgement agreement. The lessee, the lender, the department and the Band Council sign it. Leases and mortgages are registered in the Indian Lands Registry (Indigenous Services Canada, Leasing on designated reserve land, modified October 22, 2025, read October 2026). Insurance must also name the Band as an additional named insured and loss payee. That means more steps and more people than a normal closing, so timing matters.</p>
<p>Taxes differ too. A non-member leaseholder pays property tax to the First Nation if it levies one. A homeowner who pays that tax to a First Nation cannot use the provincial home owner grant (Province of BC, Property taxes on reserve land, May 20, 2026, read October 2026). We have not verified how BC property transfer tax applies to a non-member's leasehold, so ask your lawyer.</p>
<p>Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. Which lender fits depends on the lease, the land and your timing. Share the lease early. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>

<h2>Vineyards, orchards and farm land</h2>
<p>Osoyoos has 326.7 hectares of Agricultural Land Reserve (ALR). Most of it is in farm use (Town of Osoyoos, Official Community Plan Bylaw No. 1375, read October 2026). Oliver's plan names three agricultural areas. Rural irrigation comes from a pipe system and an open canal (Town of Oliver, Official Community Plan Bylaw No. 1436, read October 2026). Whether land is in the ALR changes what you can build and what a lender will value.</p>
<p>A home on a few acres can finance like a house, but lenders often count only part of the land. A working vineyard or orchard is usually agricultural lending. Our <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> covers both cases. Farm worker housing is also a local issue. In 2023 the regional district approved temporary use permits for worker housing at two Oliver-area farms (Castanet, Two Oliver-area farms given approval for temporary agricultural worker housing, October 16, 2023, read October 2026). A lender may not count worker cabins as part of the home's value, so tell Joshua if the listing has them.</p>
<p>Wells, septic systems and irrigation rights are common outside town limits. Lenders may ask for test results. Budget for inspections. Rural Oliver is covered by the regional district rather than the Town, so the rules can differ from those inside town limits.</p>

<h2>Suites, laneway homes and short-term rentals</h2>
<p>Both towns changed their zoning after the province's small-scale multi-unit housing rules. Osoyoos adopted Zoning Bylaw No. 1395 in 2024. The Town says its RS1 zone allows three to four units depending on parcel size and servicing (Town of Osoyoos, Zoning Bylaw Update, read October 2026). We did not read the current suite limits, so call the Town before you plan a build. Oliver says Zoning Bylaw 1423 allows townhomes, triplexes and laneway homes, with RS1 as the main zone (Town of Oliver, Small-Scale Multi-Unit Housing, read October 2026).</p>
<p>For a lender, a suite counts only if it is legal and the rent is documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods.</p>
<h3>Short-term rentals differ by town</h3>
<p>Osoyoos opted into the provincial principal residence requirement. Short-term rentals are limited to the host's home plus one suite or accessory dwelling. A Town business licence is required (Town of Osoyoos, Short-Term Rental Accommodation and Bed and Breakfast Operation, read October 2026). Oliver is on the Province's exempt list. Its own bylaw still requires the owner to live on the property (Town of Oliver, Bed and Breakfast Operation and Vacation Rental Waiver form, read October 2026). In both towns, a plan to buy a second home only for vacation rental income may not be allowed. See the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a>, and ask the Town for the current text.</p>

<h2>Wildfire, flood and water</h2>
<p>The South Okanagan has a dry climate and a recent record. In July 2023 the Eagle Bluff wildfire led to evacuation orders for 732 properties. Another 2,094 were on alert (Castanet, Osoyoos declares State of Emergency, July 30, 2023, read October 2026). In 2018 Osoyoos Lake flooded low-lying lakeshore areas (International Joint Commission, Osoyoos Lake Level Rising During Spring Snowmelt, May 11, 2018, read October 2026). Insurers may ask extra questions about hillside, lakeshore and rural homes. Get a quote before you remove conditions, because a lender will want proof of coverage.</p>
<p>As of late October 2026, Osoyoos also had a water quality advisory for manganese on the Town system (Town of Osoyoos, Water Quality Advisory, October 27, 2026, read October 2026). It does not change a mortgage, but ask about water when you view a home.</p>

<h2>How Joshua works with South Okanagan clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> Wages, pensions, seasonal work, a farm or sale proceeds point to different lenders.</li>
<li><strong>Checks the property early.</strong> He asks about the land type, ALR status, well and septic, any suite and whether the lease is registered. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some South Okanagan files, such as leasehold homes, working vineyards or new self-employed income, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p>Buyers here also compare nearby towns. The <a href="/mortgage-broker-penticton/">Penticton page</a> covers the next large town north, and the <a href="/mortgage-broker-keremeos/">Keremeos page</a> covers the Similkameen to the west.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>. To plan a South Okanagan purchase, start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cta({ title: "Talk to a broker who serves Osoyoos and Oliver", text: "Book a 15-minute call. Share where you are moving from, how you are paid and the kind of home you want. You will leave knowing which lenders fit and what to line up before you move." })}
`;

export default {
  slug: "/mortgage-broker-osoyoos-oliver/",
  h1: "Mortgage broker in Osoyoos and Oliver, BC: buying in the South Okanagan",
  lede: "Buying a home in Osoyoos or Oliver, or moving to the South Okanagan? Joshua Resvick, Xeva Mortgage, serves wine country from his Surrey office by phone and video. Retirees, vineyard pay, leasehold homes on band land and farm lots, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Osoyoos and Oliver", "/mortgage-broker-osoyoos-oliver/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Osoyoos or Oliver before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move." },
    { q: "Can I get a mortgage on a leasehold home on Osoyoos Indian Band land?", a: "Yes, and Joshua arranges these files. Indigenous Services Canada says no mortgage on designated reserve land is valid until the lessee, lender, the department and the Band Council sign a mortgage acknowledgement agreement. The lender that fits depends on the lease and your timing, so share the lease early." },
    { q: "How does a lender count seasonal vineyard or tourism pay?", a: "It depends on the lender. Many average your income over two years, and some count only the months you are paid. A steady wage from one employer helps. Owners and growers usually need two years of tax returns. Joshua checks lender rules before you apply." },
    { q: "Can I use a South Okanagan home as a vacation rental?", a: "Maybe, but the rules differ by town. Osoyoos limits short-term rentals to the host's principal residence plus one suite. Oliver requires the owner to live on the property. Check the current bylaw before you plan on rental income, and note that lenders ask what rent they can count." },
    { q: "Can a suite or laneway home help me qualify?", a: "It can, if the unit is legal and the rent is documented. Both towns updated their zoning for small-scale multi-unit housing. Call the Town before you plan a build, because suite limits vary by lot and by zone." },
    { q: "Is a vineyard or orchard property financed like a house?", a: "Sometimes. A home on a few acres can finance like a house, but lenders often count only part of the land. A working vineyard or orchard is usually agricultural lending. The Agricultural Land Reserve limits what you can build. Share the listing with Joshua before you offer." }
  ]
};
