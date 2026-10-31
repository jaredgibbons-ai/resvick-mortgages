import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-revelstoke/#service", name: "Resvick Mortgages, serving Revelstoke", url: SITE.origin + "/mortgage-broker-revelstoke/", areaServed: [{ "@type": "City", name: "Revelstoke", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Columbia-Shuswap Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Revelstoke by phone and video from his Surrey office. Buyers here include rail and hydro workers, ski resort staff, remote workers and second-home owners. You can start the mortgage before you ever drive in.",
  who: "Buyers and owners in Revelstoke and nearby rural areas. That includes rail, hydro, forestry and resort workers, and people moving to the mountains.",
  next: "Book a 15-minute call and tell Joshua how you are paid and what kind of home you want."
})}
<p>Revelstoke sits on the Trans-Canada Highway between the Okanagan and the Rockies. Tourism Revelstoke lists Kelowna about 187 km away. Kamloops is about 211 km and Calgary about 410 km (Tourism Revelstoke, Getting Here, June 29, 2026, read October 2026). It is a small city with big-city prices. Rail, hydro, forestry, skiing and remote jobs all shape the mortgage files here.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Revelstoke by phone and video. There is no Revelstoke branch. You can <a href="/contact/">book a 15-minute call</a> from home, a locomotive cab or the lift line.</p>

${ratesStrip()}

<h2>Rail, hydro and resort pay: how lenders read each</h2>
<p>Pay in Revelstoke comes from several places. Each looks different on a file.</p>
<ul>
<li><strong>Rail.</strong> In May 2026 CPKC said it was moving about 125 conductor and engineer jobs to Kamloops. It cited the cost of living, especially housing (CFJC Today, CPKC moving 125 jobs to Kamloops, May 11, 2026, read October 2026). If you work for the railway, your base location matters to a lender. Tell Joshua if a transfer is possible.</li>
<li><strong>BC Hydro.</strong> The Province says BC Hydro will add a sixth, 500 MW unit to the Revelstoke station. Service is expected by December 2032 (BC Government News, Optimizing BC Hydro assets, June 17, 2026, read October 2026). There will be no work camp, so workers will live in existing Revelstoke housing (BC Hydro, Revelstoke Unit 6 Open House, April 13, 2026, read October 2026). A construction job is a contract. A lender may ask how long it runs.</li>
<li><strong>Skiing and tourism.</strong> The 2025-26 season at Revelstoke Mountain Resort ran from early December to April 12, 2026 (Revelstoke Mountaineer, Revelstoke Mountain Resort wraps 2026 winter season, read October 2026). Pay that stops in the off season is harder to count. Many lenders average two years. Some count only the months you are paid. Policies vary, so Joshua checks before you apply.</li>
<li><strong>Forestry and trades.</strong> Wood products firms remain part of the local economy (Revelstoke Mountaineer, For Revelstoke's wood industries, diversity is key, March 2021, read October 2026). See the <a href="/mortgage-for-contractors/">contractor page</a> if you work in the trades.</li>
<li><strong>Remote workers.</strong> The share of residents working from home rose from 6 percent to 12 percent between 2016 and 2021 (City of Revelstoke, 2024 Housing Needs Report, November 27, 2024, read October 2026). A permanent job with an employer elsewhere is usually read like a local one. Self-employed remote workers need two years of tax returns.</li>
</ul>
<p>Shift workers can also read our page for <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes for owners.</p>

<h2>What homes cost</h2>
<p>BC Assessment's typical single-family value for 2026 was $881,000 in Revelstoke, up 2 percent. The release gives no condo or townhouse value for the city (BC Assessment, Southern Interior 2026 Property Assessments Announced, January 2, 2026, read October 2026). That is an assessed value, not a sale price. The City's housing report said ownership costs rose about 182 percent from 2017 to 2023. Median household income rose about 28 percent from 2016 to 2021 (City of Revelstoke, 2024 Housing Needs Report, November 27, 2024, read October 2026). The 2025 living wage is $27.80 an hour. The City ties it mainly to housing costs (City of Revelstoke, Living Wage release, November 18, 2025, read October 2026).</p>
<p>A higher price means a bigger down payment. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> show what to set aside. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> for how rates work. If you sell elsewhere to buy here, a <a href="/bridge-financing/">bridge loan</a> may cover a gap.</p>
<p>In 2021, 385 homes (10 percent) had no usual residents, up from 5 percent in 2006. Those include holiday homes and short-term rentals. About two-thirds of homes were built before 1981 (City of Revelstoke, 2024 Housing Needs Report, November 27, 2024, read October 2026). Older homes call for a full inspection. The <a href="/purchase-plus-improvements/">purchase plus improvements page</a> explains how a lender can fold repairs into the mortgage.</p>

<h2>Homes with local-worker rules</h2>
<p>Revelstoke is working on homes that only local workers can buy. The City and Community Futures Revelstoke are developing a program called Revy Own. Homes must be used as primary residences by local workers and families, with resale prices capped. As of September 2025, the cap, price and number of homes were not set (City of Revelstoke, Revy Own release, September 26, 2025, read October 2026). Earlier coverage said a mortgage product was being developed with a local credit union.</p>
<p>A resale cap changes how a lender sees the home. It may be worth less to a lender than a similar open-market home. The rules can also limit who you can sell to. If a listing mentions a covenant, a housing agreement or a price cap, send the papers to Joshua before you offer. Some older housing agreements are being removed. Council repealed several of these bylaws in late 2025 (City of Revelstoke, Council Highlights, November 25, 2025, read October 2026). Ask your lawyer to search title.</p>

<h2>Short-term rentals</h2>
<p>Revelstoke is a resort municipality. The provincial principal residence rule does not apply unless council opts in (Revelstoke Mountaineer, Revelstoke can opt in to B.C.'s STR rule, read October 2026). The City has its own framework. In early 2024, whole-home rentals were allowed only in certain zones. About 17.5 percent of the housing stock was eligible (Revelstoke Mountaineer, STR Revelstoke town hall, read October 2026). The City ran public engagement on new options through February 13, 2026 (City of Revelstoke, STR engagement release, December 9, 2025, read October 2026). We could not confirm the final decision, so check the current rules with the City.</p>
<p>Outside the city, the regional district's Area B opted in to the provincial rule effective November 1, 2025. Short-term rentals there are limited to the host's home plus one suite or accessory unit (Columbia Shuswap Regional District, Area B Principal Residence Requirement, read October 2026). In short, a plan to buy a place only for vacation rental income may not be allowed. Lenders also ask what rent they can count. See the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a>.</p>
<h3>Resort homes and strata</h3>
<p>Revelstoke Mountain Resort sells new homes. A December 2025 release listed 43 new condo residences starting at $549,000, plus townhomes and lots. It does not state the tenure (Revelstoke Mountain Resort, New Real Estate Opportunities at Revelstoke Mountain Resort, December 18, 2025, read October 2026). That is a developer's marketing figure. Lenders read strata papers, rental rules and fees closely. Send them to Joshua early. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse page</a> explains what a lender reviews, and the <a href="/presale-mortgages-bc/">presale page</a> covers new builds.</p>

<h2>Suites, carriage houses and zoning</h2>
<p>Revelstoke adopted a new zoning bylaw in 2025. Council approved changes that cut the minimum low-density lot size to 370 square metres. Carriage and garden suites may now exceed the height of the main home (City of Revelstoke, Council Highlights, March 25, 2025, read October 2026). Under the older bylaw, a suite could be up to 40 percent of the main home, or 90 square metres. We could not confirm the current limits. We also could not confirm how the City applies the province's small-scale multi-unit rules. Call the City before you plan a build.</p>
<p>For a lender, a suite counts only if it is legal and the rent is documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods.</p>

<h2>Flood, avalanche and wildfire</h2>
<p>A City flood study found the dikes would not overtop in a 200-year flood. A breach could still flood the Southside and Downie mill areas (Revelstoke Mountaineer, Report studies Illecillewaet River flooding, read October 2026). Highway 1 over Rogers Pass was closed for avalanche control on March 19, 2026 (CFJC Today, Highway 1 closed from Revelstoke to Golden, March 19, 2026, read October 2026). Wildfire alerts have reached rural areas near Trout Lake. A July 2024 alert covered Trout Lake, Ferguson, Five Mile and CM Galena (Emergency Info BC, Revelstoke evacuation information, July 2024, read October 2026). Insurers may ask extra questions about rural and treed homes. Get a quote before you remove conditions. A lender will want proof of coverage.</p>

<h2>Rural, manufactured and land questions</h2>
<p>Revelstoke and Electoral Area B follow different rules. About 43 percent of Area B homes were vacant or temporarily occupied in 2016 (Columbia Shuswap Regional District, Area B Housing Needs Assessment, March 2022, read October 2026). That report is dated, but it shows how many rural homes are second homes. Wells and septic systems are common outside town. We found no manufactured home parks or First Nation land with homes for sale near Revelstoke. If your purchase involves a manufactured home, the land decides the file. See the <a href="/mobile-home-mortgages-bc/">manufactured home page</a>. If it involves reserve or leased land, tell Joshua at the start. He arranges those files through a lender that works on them, and the lender that fits depends on the land and your timing. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>
<p>Revelstoke is not on the speculation and vacancy tax list (Province of BC, Taxable areas, December 8, 2025, read October 2026).</p>

<h2>How Joshua works with Revelstoke clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> Rail pay, hydro contracts, resort pay, remote work or a business each point to different lenders.</li>
<li><strong>Checks the property early.</strong> He asks about strata or freehold, covenants, any suite, the age of the home and hazard zones. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Revelstoke files may need a B or private lender. Examples are a resale-capped home, new self-employed income or a unit with rental income. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p>Buyers here also compare other towns. The <a href="/mortgage-broker-kamloops/">Kamloops page</a> and the <a href="/mortgage-broker-kelowna/">Kelowna page</a> cover the two nearest large cities. The <a href="/mortgage-broker-whistler/">Whistler page</a> covers another resort market.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-tech-workers/">tech workers</a> and <a href="/mortgages-for-first-responders/">first responders</a>. To plan a Revelstoke purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cta({ title: "Talk to a broker who serves Revelstoke", text: "Book a 15-minute call. Share how you are paid, the kind of home you want and where you are moving from. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-revelstoke/",
  h1: "Mortgage broker in Revelstoke, BC: buying a home in the mountains",
  lede: "Buying a home in Revelstoke or moving to the mountains for rail, hydro, resort or remote work? Joshua Resvick, Xeva Mortgage, serves the city from his Surrey office by phone and video. Shift and seasonal pay, resale-capped homes, strata and short-term rental rules, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Revelstoke", "/mortgage-broker-revelstoke/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Revelstoke before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move." },
    { q: "How does a lender count rail, hydro or resort pay?", a: "It depends on the lender and on how steady the hours are. A permanent job with a set schedule is read like most jobs. Seasonal and contract pay is often averaged over two years. Joshua checks lender rules for your pay type before you apply." },
    { q: "What is Revy Own, and can I get a mortgage on one of those homes?", a: "Revy Own is a planned program for local workers, with primary-residence use and capped resale prices. As of September 2025 the price, cap and number of homes were not set. A resale cap changes how a lender sees the home, so send the documents to Joshua when they are available." },
    { q: "Can I use a Revelstoke home as an Airbnb?", a: "Only in limited cases. The City allows whole-home short-term rentals only in certain zones, and nearby Area B limits them to a principal residence. Rules were under review in 2026, so check the current bylaw. Lenders also ask what rent they can count." },
    { q: "Can a suite or carriage house help me qualify?", a: "It can, if the unit is legal and the rent is documented. Revelstoke rewrote its zoning in 2025 and allows carriage and garden suites in many residential zones. Call the City before you plan a build, because limits vary by lot and zone." },
    { q: "Do you help with resort condos and strata units?", a: "Yes. Lenders read strata documents, fees, rental rules and the building's history. Send the documents to Joshua early. New resort condos may follow presale or new-build rules, so tell him whether the unit is new or a resale." }
  ]
};
