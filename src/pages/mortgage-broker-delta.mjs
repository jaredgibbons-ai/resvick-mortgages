import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-delta/#service", name: "Resvick Mortgages, serving Delta", url: SITE.origin + "/mortgage-broker-delta/", areaServed: [{ "@type": "City", name: "Delta", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Metro Vancouver" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Delta by phone, video and in person at his Surrey office, close to North Delta. Delta is three communities with three kinds of property, including farmland and leased land. The work is naming the property type before the offer is written.",
  who: "Buyers, renewers and refinancers in North Delta, Ladner and Tsawwassen, including suite, acreage and leasehold properties.",
  next: "Book a 15-minute call and tell Joshua which part of Delta you're looking at."
})}
<p>Delta is really three places. North Delta is the largest community and the most suburban. Ladner, a former fishing village, and Tsawwassen make up South Delta. Delta is also the largest municipality in Metro Vancouver by area, and most of its land is farmland protected by the Agricultural Land Reserve.</p>
<p>That mix matters for a mortgage. A detached house with a suite in North Delta, a farm lot in Ladner and a home on leased land in Tsawwassen are three different files. Lenders don't treat them the same way.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. His office is in Surrey, next door to North Delta, and he works with Ladner, Tsawwassen and North Delta clients by phone, video and secure uploads. There is no Delta branch. You get a former underwriter who has funded over 1,000 mortgages, and you can <a href="/contact/">book a 15-minute call</a> to start.</p>

${ratesStrip()}

<h2>North Delta: houses with suites</h2>
<p>North Delta sits next to Surrey, and detached houses with a basement suite are common across Metro Vancouver. The rules are worth knowing, because they decide whether a lender will count the rent.</p>
<p>Delta permits suites in most single detached houses. One suite is allowed per house, and it can't be strata-titled or sold separately. Delta stopped issuing Secondary Suite Rental Permits on April 8, 2024, but you still need a building permit to add a suite. Each suite needs a parking space. There are exceptions for small suites and for homes near frequent transit on Scott Road. Properties with a suite also need a water meter (Delta, Secondary Suites page, read October 2026).</p>
<p>For a lender, a permitted suite means a share of the rent can count toward qualifying. An unpermitted suite usually can't. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the offset and add-back methods. If you are buying a house with a suite, ask for proof of the permit before your subject-removal date.</p>

<h2>Incomes in Delta</h2>
<p>The 2021 Census puts Delta's median household income at $108,000 for 2020, with 15.8 percent of workers self-employed. Retail, health care, and transportation and warehousing were the top three industries, and construction came a close fourth. (Statistics Canada, 2021 Census Profile, read October 2026). Transport and warehousing matters in a city beside a port and an airport. Overtime and shift pay are common in that work. Lenders usually average that pay over two years instead of counting the best month.</p>
${censusTable("delta")}

<h2>Ladner and the farmland</h2>
<p>South of the Fraser, Ladner is surrounded by flat, fertile land. The Agricultural Land Reserve keeps most of it in farming. That shapes what you can build, what you can use the land for, and how a lender sees it.</p>
<p>Many residential lenders limit how much land value they'll count. They give farm buildings little or no lending value, and they decline where the property is mainly a business. A hobby property with a house, a barn and a few animals is a different file from a working farm. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> explains the difference.</p>
<p>The practical step is simple. Before you write an offer on anything with land, tell Joshua what you plan to do with it. Then the financing condition is realistic, and you aren't left searching for a lender after the deposit is down.</p>

<h2>Tsawwassen First Nation lands: leased, not owned outright</h2>
<p>Part of Tsawwassen is Tsawwassen First Nation land. Homes there are commonly on long-term leases, not on land you own outright. The First Nation describes them as 99-year leases (Greater Vancouver Realtors member news, Tsawwassen First Nation development, read October 2026).</p>
<p>A leasehold home can be a good fit for some buyers, but it's a different mortgage. Some lenders won't lend on leasehold at all. Others will, and they want to read the lease and check what is left of the term. Resale rules and costs can also differ from a normal freehold home. So the lender and the lawyer need the lease early. Our page on <a href="/leasehold-mortgages-bc/">leasehold mortgages</a> lists the questions lenders ask, and the page on <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> covers the First Nation side.</p>
<p>If you are looking at a Tsawwassen property, find out first whether it's freehold or leasehold. The listing and the realtor can tell you. Then bring the details to Joshua before you commit.</p>

<h2>Water on three sides, and the roads out</h2>
<p>Delta is bordered by the Fraser River, the Strait of Georgia and Boundary Bay. The Tsawwassen ferry terminal sits at the southwest edge. Highway 99 runs through the George Massey Tunnel to Richmond.</p>
<p>Lenders don't care where you commute. They care how you're paid. Salary, shift work, commission and self-employment income are each read differently. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers business income, and the <a href="/mortgage-pre-approval-bc/">pre-approval page</a> explains how a real pre-approval works before you start touring homes.</p>

<h2>What Joshua does for Delta clients</h2>
<ol>
<li><strong>Names the property type first.</strong> Suite, farm, acreage or leasehold, each is identified before the offer is written, so the financing condition is realistic.</li>
<li><strong>Lays lenders out side by side.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> compares rate, term, penalty method, prepayment room and portability, so a leasehold or farm-edge property is not judged on rate alone.</li>
<li><strong>Keeps the file moving.</strong> Documents go through secure links, and he talks to your realtor, lawyer and appraiser himself.</li>
<li><strong>Checks back after funding.</strong> With <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> he reviews your mortgage once a year and contacts you about six months before maturity, so the renewal gets compared.</li>
</ol>

${callout("What you pay", "<p>Most Delta purchases and renewals go to A lenders, where the lender pays Joshua and your cost is nothing. Leasehold, farm-edge and unusual-income files sometimes need a B or private lender. Any fee to you on those must appear in writing on BCFSA's Form 1A before you commit.</p>")}

<h2>Buying, renewing and refinancing in Delta</h2>
<p><strong>First-time buyers</strong> in Delta can use the same federal and provincial programs as everyone in BC: the transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the new-home GST rebate. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows how they stack.</p>
<p><strong>Renewing owners</strong> in Delta get the same advice as anywhere: the letter is a first offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the timeline and the late-2024 switching rules. Then run your figures through the <a href="/mortgage-calculators/">mortgage calculators</a>, including the <a href="/mortgage-calculators/#renewal">renewal scenario tool</a>.</p>
<p><strong>Refinancing</strong> for debt, a renovation or a suite begins with the break-even math, ahead of any talk about rates. For how a rate is set, see the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Nearby</h2>
<p>North Delta borders Surrey, where Joshua's office is. The <a href="/mortgage-broker-surrey/">Surrey page</a> has the address and what to bring for an in-person meeting. Across the tunnel, the <a href="/mortgage-broker-richmond/">Richmond page</a> covers the other side of Highway 99.</p>

<p>If you own a business in Delta and want to buy its premises, Joshua also arranges <a href="/commercial-mortgages-bc/">commercial mortgages</a> as well.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-truckers-and-owner-operators/">truckers and owner-operators</a>, <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>. To plan a Delta purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${nearbyCallout("delta", callout)}

${cta({ title: "Talk to a broker who serves Delta", text: "Book a 15-minute call. Tell Joshua which part of Delta and what kind of property. You'll leave knowing how a lender will read it and what to gather first." })}

`;

export default {
  slug: "/mortgage-broker-delta/",
  h1: "Mortgage broker serving Delta, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves North Delta, Ladner and Tsawwassen from his Surrey office. Suites, farmland and leased land read the way a lender reads them, for purchases, renewals and refinances.",
  crumbs: [["Home", "/"], ["Serving Delta", "/mortgage-broker-delta/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on a home on Tsawwassen First Nation land?", a: "Sometimes. Homes there are commonly on long-term leases, not land you own outright. Some lenders will not lend on leasehold at all, and others will after reading the lease and checking the remaining term. Find out whether a property is freehold or leasehold before you make an offer, then bring the details to Joshua." },
    { q: "Does Delta allow a basement suite, and will a lender count the rent?", a: "Delta permits one suite in most single detached houses, with a building permit, and suites cannot be strata-titled. A lender generally counts rent only from a suite that is permitted and documented, and the share counted varies. Ask for proof of the permit before you remove your subject conditions." },
    { q: "Can I finance a farm or acreage in Ladner?", a: "Often, but not with every lender. Land in the Agricultural Land Reserve is limited to farm use, and many residential lenders cap the land value they count and decline working farms. Identify the property type with Joshua before the offer is written so the financing condition is realistic." },
    { q: "Does it matter which part of Delta I buy in?", a: "To a lender, the property type matters more than the community. A detached house, a farm lot and a leasehold home are three different files, and any of them can appear in Delta. Joshua checks the type, the lot and your income together, then picks the lender whose rules fit." },
    { q: "Do I have to travel to Surrey to work with Joshua?", a: "No. Everything can be done by phone, video and secure document upload, and your lawyer or notary handles the signing. If you would like to meet in person, his office is in Surrey, close to North Delta, and you can book a time there." }
  ]
};
