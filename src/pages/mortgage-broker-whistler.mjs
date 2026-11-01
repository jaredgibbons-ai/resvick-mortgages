import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-whistler/#service", name: "Resvick Mortgages, serving Whistler", url: SITE.origin + "/mortgage-broker-whistler/", areaServed: [{ "@type": "City", name: "Whistler", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves Whistler buyers by phone and video from his Surrey office. A Whistler home may be a nightly-rental condo, a rental-pool unit or an employee-restricted home. Each one is financed in its own way.",
  who: "Whistler buyers, resort workers, second-home owners and anyone looking at a Whistler Housing Authority home.",
  next: "Book a 15-minute call and tell Joshua the building, the zoning and how you are paid."
})}
<p>Whistler is one municipality, but it is not one housing market. Two condos a short walk apart can follow different rules. One lets the owner rent by the night. Another keeps the owner out for most of the year. A third can only be bought by someone who works in town. A lender wants to know which one you are buying before it looks at much else.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He serves Whistler clients online and by phone from his office in Surrey. There is no Whistler branch. You can <a href="/contact/">book a 15-minute call</a> to start.</p>

${ratesStrip()}

<h2>Three markets inside one resort town</h2>
<ul>
<li><strong>Phase 1 homes.</strong> The owner can live there all year or rent it out nightly. Many are townhouses and condos.</li>
<li><strong>Phase 2 homes.</strong> Owner stays are capped, and the unit is offered for nightly rental the rest of the year. Fewer lenders will finance these.</li>
<li><strong>Employee-restricted homes.</strong> The Whistler Housing Authority (WHA) oversees them. A covenant limits who may live there and what the home can sell for.</li>
</ul>
<p>Houses in residential neighbourhoods are a fourth group. They follow the usual rules, and they cannot be rented to tourists. Everything below depends on which group your target home belongs to.</p>

<h2>Incomes in Whistler</h2>
<p>The 2021 Census put Whistler's median household income, before tax, at $99,000 for 2020. About 21.5 percent of workers were self-employed. Accommodation and food service was the largest industry by far, with 2,650 workers or 27.5 percent of the labour force. Construction came second with 985 workers, then retail with 880. (Statistics Canada, 2021 Census Profile, read October 2026). A town built on visitors means seasonal pay, tips and second jobs are common. Lenders vary on how they count tips and seasonal work, and many ask for two years of history. Bring your tax slips and pay records for each job.</p>
${censusTable("whistler")}

<h2>How lenders read resort income</h2>
<p>Whistler runs on seasons. Winter and summer bring different jobs, different hours and different pay. Whistler Blackcomb is based here and owned by Vail Resorts. It reported about 1,700 employees on July 31, 2025 (Whistler Blackcomb, FY25 annual report, read October 2026). Hotels, restaurants and tour companies add many more jobs. Statistics Canada puts the median after-tax household income in Whistler at $86,000 for 2020 (Statistics Canada, 2021 Census, Focus on Geography Series for Whistler, read October 2026).</p>
<p>Lenders don't mark you down for working a season. They look for a pattern. Practice varies, but these points come up often:</p>
<ul>
<li><strong>Seasonal pay.</strong> Many lenders want about two years in the same kind of role, so they can see that the work returns each year. One strong winter on its own is a harder sell.</li>
<li><strong>Tips and commission.</strong> These are often averaged over two years. Some lenders count only what shows on your tax documents.</li>
<li><strong>Two or three jobs.</strong> Having more than one job does not rule you out. Each job a lender counts usually needs its own history.</li>
<li><strong>Business owners.</strong> Guides, rental managers and trades are common here. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how lenders read that income.</li>
</ul>
<p>Joshua spent five years as an underwriter, so he knows what a lender wants to see from a seasonal file. He lines up the paperwork before you apply. A new job can matter too, and the <a href="/guides/mortgage-with-a-new-job-or-probation/">guide on new jobs and probation</a> covers it. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> shows why to start early.</p>

<h2>Phase 1, Phase 2 and the lender list</h2>
<p>Phase 1 and Phase 2 are labels for rental covenants registered on title. As commonly described, Phase 1 allows unlimited owner use. Phase 2 caps owner use at 56 days a year, split into 28 in winter and 28 in summer. The unit must be open for nightly rental the rest of the time (Whistler Real Estate For Sale, Phase I or Phase II Units, read October 2026). Terms can differ by building, so the covenant on title is the final word.</p>
<p>The Resort Municipality of Whistler (RMOW) says most tourist accommodation properties carry title restrictions. Those keep the units open to visitors (RMOW, Official Community Plan, Visitor Accommodation, updated March 7, 2026, read October 2026).</p>
<p>Here is what that means for a mortgage. Lenders vary, and these are general patterns, not rules:</p>
<ul>
<li>A Phase 2 unit usually has fewer lenders. Rental-pool income is not treated like ordinary rent, and a bigger down payment is common.</li>
<li>A Phase 1 unit used for nightly rental may be read as a rental or business file. Strata fees and insurance get a close look.</li>
<li>Insurance for a small down payment is generally for homes you live in. For a second home, plan on at least 20 percent down.</li>
</ul>
<p>The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> lists what lenders ask for from the strata. The <a href="/investment-property-mortgages-bc/">investment property page</a> covers how rent is counted.</p>

<h2>Nightly rental: what the Resort Municipality allows</h2>
<p>Tourist accommodation needs both the right zoning and a business licence. The licence has been required since 2017. The fee is $250 per guest unit. Properties zoned residential are not allowed to provide tourist accommodation for any length of time (RMOW, Tourist Accommodation Business Licence, updated October 29, 2025, read October 2026).</p>
<p>That rule is stricter than many buyers expect. A stay of a few weeks in a residential-zoned house is still tourist accommodation under the municipality's wording. Do not count on rent from it.</p>
<p>Fines are easy to misquote because three amounts are in use. The licence page says up to $500 per infraction under the licence bylaw. The municipality's rental rules page says its current fine is $1,000, and that provincial law lets it raise the fine to $3,000 a day. It says it is amending its bylaws to do that (RMOW, How B.C.'s New Short-term Rental Rules Affect Whistler, updated April 15, 2026, read October 2026).</p>
<p>The province's principal-residence rule for short-term rentals does not apply in Whistler. Zoning, covenants and enforcement govern instead (same page). Lenders usually read nightly income with caution, if they count it. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a> explains the options.</p>

<h2>Whistler Housing Authority homes</h2>
<p>The WHA says every employee ownership home has a covenant on title. The covenant requires Whistler employees to live there as their primary residence. It also caps the resale price using a formula tied to the Core Consumer Price Index. To qualify, buyers need permanent status in Canada and a full-time job with a qualified Whistler business. There are strict limits on other real estate you may own. Homes go to waitlist applicants on a first-come, first-served basis, and the rules may change over time (Whistler Housing Authority, Ownership overview, read October 2026).</p>
<p>The WHA lists more than 2,500 employee housing units. Its ownership inventory has 1,001 homes, from studios to single-family houses (Whistler Housing Authority, Inventory, read October 2026).</p>
<p>For a lender, these covenants raise a few questions. Lenders vary on how they treat them:</p>
<ul>
<li>A resale cap can limit growth in value, so the appraisal must reflect the restricted home.</li>
<li>The lender pool is often narrower than for an unrestricted condo.</li>
<li>Your job is part of the file, because eligibility rests on working in Whistler.</li>
</ul>
<p>The WHA decides who is eligible. Joshua helps with the financing side. He checks the covenant and your documents with a lender before you remove conditions. If you are early in the process, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> shows the programs that can help with a down payment.</p>

<h2>Suites and employee housing under the bylaw</h2>
<p>Whistler adopted new zoning on June 11, 2024, to match the province's small-scale multi-unit housing law. The bylaw is the Zoning Amendment Bylaw (Small-Scale Multi-Unit Housing) No. 2440, 2024. It allows an auxiliary unit on all parcels. That can be a secondary suite, carriage house, lane or garage house, or garden suite (RMOW, Provincial Housing Legislation Changes, updated October 31, 2025, read October 2026).</p>
<p>Setback details for these buildings sit in Part 5 of Zoning and Parking Bylaw No. 303, 2015. The changes took effect June 29, 2024. A share of new units must serve local housing. One unit is required on a three-unit lot, and two on a four-unit lot. The WHA administers an annual statutory declaration. The page says there are no rent or price limits on those units (RMOW, Housing Legislation FAQs, updated October 31, 2025, read October 2026).</p>
<p>For a lender, a legal suite with documented rent can help you qualify. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the methods. Confirm what your own lot allows with the municipality before you rely on any suite.</p>

<h2>Rules that do not apply in Whistler</h2>
<p>Buyers from outside Canada sometimes ask what is different here. Three rules often come up. Each one has a regional exception, so check the address.</p>
<ul>
<li><strong>The federal ban.</strong> The Prohibition on the Purchase of Residential Property by Non-Canadians covers property inside a census metropolitan area or census agglomeration. Property outside both is not covered (Prohibition on the Purchase of Residential Property by Non-Canadians Regulations, section 3(1), Justice Laws, read October 2026). Whistler sits outside both (BC Real Estate Association, foreign buyer ban article, January 19, 2026, read October 2026). CMHC offers an address lookup. The ban is currently set to end on January 1, 2027 (CMHC, Prohibition Act page, read October 2026).</li>
<li><strong>The additional property transfer tax.</strong> The province lists five areas where it applies. Whistler is not among them (Province of British Columbia, B.C. areas for the additional property transfer tax, updated June 20, 2025, read October 2026).</li>
<li><strong>The speculation and vacancy tax.</strong> Whistler is not on the province's list of taxable areas (Province of British Columbia, taxable areas, updated December 8, 2025, read October 2026).</li>
</ul>
<p>Regular property transfer tax still applies, and lenders set their own rules for buyers who live outside Canada. Expect a larger down payment and more paperwork. The <a href="/foreign-buyers-bc/">foreign buyers page</a> explains the lender side. Laws change, so confirm your own file with a lawyer before you commit.</p>

<h2>Commuting and moving up</h2>
<p>The RMOW notes that many Whistler homes are second homes. That leaves a shortage of housing for local employees (RMOW, Housing Legislation FAQs, read October 2026). That pull shapes who buys and who moves.</p>
<p>A common path starts with a rental or a WHA home. Income grows, and some owners later look for an unrestricted home. A resale cap limits the equity from a WHA sale, so the next down payment may need other savings. That is a pattern, not a rule, and each file is different.</p>
<p>Some Whistler workers live in Squamish and drive up Highway 99. Squamish has its own suite and rental rules, and the <a href="/mortgage-broker-squamish/">Squamish page</a> covers them. A lender won't price your drive. Your own budget should.</p>

<h2>Neighbourhood names buyers search</h2>
<p>Listings use many local names. The most common are Whistler Village, Upper Village, Creekside, Blackcomb Benchlands, Alpine Meadows, Emerald Estates, Whistler Cay Heights, Bayshores, Nesters, Nordic and Rainbow. You will also see Cheakamus Crossing, Function Junction, Spring Creek, Spruce Grove, Taluswood, Stonebridge, Nicklaus North and Kadenwood.</p>
<p>Names overlap. Benchlands and Blackcomb Benchlands mean the same area. Creekside is also written Whistler Creek. Zoning and covenants can change from one street to the next, so Joshua starts with the street address.</p>

<h2>What Joshua does for Whistler clients</h2>
<ol>
<li><strong>Sorts the property first.</strong> Phase 1, Phase 2, WHA or ordinary home. That choice shapes the lender list.</li>
<li><strong>Matches your pay to a lender.</strong> Seasonal, tip, commission and multi-job income each suit certain lenders.</li>
<li><strong>Writes out the options.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> puts rate, term, penalty method and flexibility side by side.</li>
<li><strong>Stays in touch.</strong> Through <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage every year and calls before it matures.</li>
</ol>

${callout("Who pays for what", "<p>When a Whistler file suits an A lender, that lender pays Joshua and his help costs you nothing. Some Phase 2 or contract-income files need a B or private lender. In that case BC rules require any fee to you to appear in writing on BCFSA Form 1A before you agree to it.</p>")}

<h2>Buying, renewing and refinancing</h2>
<p>Renewals deserve early planning, especially if you own a second property. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out a timeline. You can test your numbers with the <a href="/mortgage-calculators/">mortgage calculators</a>. To see how a rate is set, read the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Nearby</h2>
<p>If you also look at the North Shore, the <a href="/mortgage-broker-north-vancouver/">North Vancouver page</a> covers that market. The <a href="/mortgage-broker-squamish/">Squamish page</a> covers the town on the way up the highway.</p>

<h2>Who writes this</h2>
<p>This page is a Resvick Mortgages guide for Whistler. Joshua Resvick, a licensed BC broker with Xeva Mortgage, stands behind it. He spent five years as an underwriter before he became a broker, and he has funded over 1,000 mortgages. Each Whistler fact above names its source and was read in October 2026. Lender practice varies, so he confirms it on your file. This page is general information, not legal advice.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgage-for-contractors/">contractors and trades</a>, <a href="/self-employed-mortgage-bc/">self-employed mortgages</a> and <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>. To plan a Whistler purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

<p>For another resort market in the Interior, see <a href="/mortgage-broker-revelstoke/">Revelstoke</a>, where some homes carry resale price caps.</p>

${nearbyCallout("whistler", callout)}

${cta({ title: "Talk to a broker who serves Whistler", text: "Book a 15-minute call. Tell Joshua the building, the zoning and how you earn. You will leave knowing how a lender may read the file and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-whistler/",
  h1: "Mortgage broker serving Whistler, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Whistler from his Surrey office by phone and video. Seasonal pay, Phase 1 and Phase 2 condos and Whistler Housing Authority homes, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Whistler", "/mortgage-broker-whistler/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "What is the difference between a Phase 1 and a Phase 2 home in Whistler?", a: "Both are rental covenants on title. Phase 1 usually allows unlimited owner use and nightly rental. Phase 2 caps owner stays and keeps the unit available for nightly rental otherwise. Fewer lenders finance Phase 2, and many want more down. Joshua reads the covenant first and then looks for a lender that accepts it." },
    { q: "Can I rent out my home by the night if it is in Alpine Meadows or Whistler Cay?", a: "Probably not. The Resort Municipality says residential-zoned properties cannot offer tourist accommodation for any length of time. Nightly rental needs the right zoning and a business licence. Check the zoning and any covenant with the municipality before you count on that income. Lenders are careful with it anyway." },
    { q: "How will a lender read my seasonal or hospitality income?", a: "Lenders vary. Many look for about two years in the same kind of seasonal role. Tips and commission are often averaged over two years and may need to show on your tax documents. More than one job can count if each has history. Joshua matches the file to a lender before you apply." },
    { q: "What is a WHA home, and what is the catch when I sell?", a: "A Whistler Housing Authority home has a covenant on title. You must live there as your primary residence and work for a qualified Whistler business. The covenant also caps the resale price using a Core Consumer Price Index formula. The cap is the trade-off for a lower price and a narrower lender list." },
    { q: "Can I buy in Whistler if I am not Canadian?", a: "Often yes, with limits. Whistler sits outside the federal ban's census areas, and it is not on the lists for BC's additional property transfer tax or the speculation and vacancy tax. Lenders still set their own rules for non-residents, so expect a larger down payment. Confirm your address and your file with a lawyer." }
  ]
};
