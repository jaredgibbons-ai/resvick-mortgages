import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-fort-st-john/#service", name: "Resvick Mortgages, serving Fort St. John", url: SITE.origin + "/mortgage-broker-fort-st-john/", areaServed: [{ "@type": "City", name: "Fort St. John", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Taylor" }, { "@type": "AdministrativeArea", name: "Peace River Regional District" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Fort St. John and the Peace region by phone and video from his Surrey office. Many buyers here earn gas, pipeline, trades or camp pay, and many own manufactured homes or acreage. You can start the mortgage before you travel north.",
  who: "Buyers and owners in Fort St. John, Taylor, Charlie Lake and the rural Peace, including energy workers, trades, health care staff and farm families.",
  next: "Book a 15-minute call and tell Joshua how you are paid and what kind of home or land you want."
})}
<p>Fort St. John is the largest city in BC's Peace River region. The City lists Shell Canada, PETRONAS Canada and NorthRiver Midstream among its largest employers, and says oil and gas, forestry, agriculture and mining drive the local economy (City of Fort St. John, Move Here, read October 2026). The median age is 34.1, against 43.1 for BC (City of Fort St. John, Move Here, read October 2026). It is a young, working city, and many files here involve shift, rotation or contract pay.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Fort St. John by phone and video. There is no Fort St. John branch. You can <a href="/contact/">book a 15-minute call</a> from home, a camp or a truck cab.</p>

${ratesStrip()}

<h2>Energy, trades and camp pay: how lenders read it</h2>
<p>Energy work pays well, and it can change quickly. The local picture has shifted in recent years:</p>
<ul>
<li><strong>Site C.</strong> BC Hydro says all six generating units are in service (BC Hydro, Site C full operation, August 9, 2025, read October 2026). Site C employment peaked at 6,069 in June 2023. It had fallen to 1,130 by September 2025, and BC Hydro expects it to keep falling through 2026 (Energeticcity.ca, Site C employment continues to decline as project nears completion, read October 2026).</li>
<li><strong>Forestry.</strong> Canfor announced in September 2024 that it would close its Fort St. John sawmill, and it sold the site in May 2026. The local news report says 220 jobs were affected (Energeticcity.ca, Fort St. John sawmill owned by Canfor officially sold, June 1, 2026, read October 2026). Canfor also said in 2023 that it saw no path to restart the Taylor pulp mill (Energeticcity.ca, Canfor doesn't see path forward for Taylor mill, February 28, 2023, read October 2026).</li>
<li><strong>Land limits on gas.</strong> The 2023 Blueberry River First Nations agreement caps new land disturbance in its territory at 750 hectares a year (Cassels, British Columbia and Blueberry River First Nation reach Implementation Agreement, January 2023, read October 2026). It limits new land use, not production.</li>
</ul>
<p>A lender looks at the job you hold today, not at what a project might do. These are common cases:</p>
<ul>
<li><strong>Salaried or hourly staff.</strong> A steady job with set hours is read like most jobs. Recent pay stubs and an employer letter do most of the work.</li>
<li><strong>Rotation and camp work.</strong> Pay may arrive in blocks, and overtime can make up a large share. Many lenders average two years. See our page for <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>.</li>
<li><strong>Contract and project work.</strong> A contract can end. Lenders often ask how long it runs and what your history looks like. The <a href="/mortgage-for-contractors/">contractor page</a> explains the routes.</li>
<li><strong>Truckers and owner-operators.</strong> Lenders usually want two years of returns and look at net income. See the <a href="/mortgages-for-truckers-and-owner-operators/">trucker page</a> and the <a href="/self-employed-mortgage-bc/">self-employed hub</a>.</li>
<li><strong>If a job just ended.</strong> A recent layoff changes the file. Tell Joshua early, because lenders judge new work, severance and gaps in different ways.</li>
</ul>

<h2>Incomes in Fort St. John</h2>
<p>Fort St. John's median household income was $102,000 for 2020. About 9.5 percent of workers were self-employed, or 1,195 of 12,600 in the labour force. Construction was the biggest industry with about 1,580 workers, close to retail at about 1,505. Mining, quarrying, and oil and gas extraction came third at about 1,350. (Statistics Canada, 2021 Census Profile, read October 2026). Oil and gas is a big employer here, and the census is from 2021, so it does not show the job losses described below. Most files are wage files, and many include shift work, rotations or contract pay. A lender will want to see how long that pay has lasted and how steady it is. A mine or camp worker on a rotation should read the page on <a href="/mortgages-for-camp-mine-and-shift-workers/">mortgages for camp, mine and shift workers</a>.</p>
${censusTable("fort-st-john")}

<h2>What homes cost: assessments and market prices</h2>
<p>BC Assessment's typical single-family value for 2026 was $352,000 in Fort St. John, up 2 percent. Taylor was $257,000, up 17 percent. The typical strata unit in Fort St. John was $185,000 (BC Assessment, North Central BC 2026 Property Assessments Announced, January 2, 2026, read October 2026). The City quotes a different measure, a market median single-family price of $402,500 from the northern real estate board for the third quarter of 2025 (City of Fort St. John, Move Here, read October 2026). Assessed values and sale prices are not the same thing, so do not mix them in one budget.</p>
<p>Lower prices can mean a smaller down payment, but pre-approval, credit and closing costs still apply. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> show what to set aside. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> for how rates work.</p>
<p>One tax change matters here. The extra northern and rural amount of the home owner grant has ended, and the regular grant is $570 from January 1, 2027 (Province of BC, Home owner grant, September 22, 2026, read October 2026). Ask your lawyer what applies on the day you close.</p>

<h2>Manufactured homes and the age rule</h2>
<p>Manufactured homes are a real part of this market. In the first quarter of 2026, the northern real estate board counted 132 Fort St. John sales, including 2 manufactured homes in parks and 9 on land (Business Examiner, Sales in the BC Northern region in the first quarter of 2026 ticked downward, April 17, 2026, read October 2026). The City's staff have also said the 2024 housing report suggests manufactured homes may be more attainable for median-income households (Energeticcity.ca, City council updates manufactured homes bylaw, July 2025, read October 2026).</p>
<p>Two local rules matter. In the R-4 and R-4A zones, a manufactured or modular home must be no more than 10 years old when the building permit is issued (City of Fort St. John, Zoning Bylaw No. 2470, 2019 consolidated, read October 2026). And a home in a park sits on a rented pad, which has fewer lenders. In August 2026 council adopted bylaws to rezone a site at 8007 81 Avenue for a 66-home park (Energeticcity.ca, FSJ council approves zoning amendment for 66-home park, August 2026, read October 2026). The land decides the file. A home on land you own is easier than one on a rented pad. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> covers both cases.</p>

<h2>Suites, detached suites and short-term rentals</h2>
<p>The City's Zoning Bylaw No. 2470 allows up to four dwelling units on a serviced parcel in the R-1, R-1A, R-2, R-4 and R-4A zones. It allows one secondary suite, capped at the lesser of 90 square metres or 40 percent of the home, and up to two detached suites. A detached suite needs one extra parking space per bedroom. Suites cannot be strata titled (City of Fort St. John, Zoning Bylaw No. 2470, 2019 consolidated, read October 2026). We could not read the City's suite page, so check owner-occupancy and size limits for detached suites with the City.</p>
<p>For a lender, a suite counts only if it is legal and the rent is documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods.</p>
<p>Short-term rentals work differently here. Fort St. John, Dawson Creek and Taylor are exempt from the provincial principal residence requirement (Province of BC, Principal residence requirement, September 21, 2026, read October 2026). The mayor has said short-term rentals support the industrial workforce (Energeticcity.ca, Fort St. John seeks opt-out from BC's Short Term Rental Accommodations Act, February 28, 2024, read October 2026). Local bylaws still apply, and lenders ask what rent they can count. See the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a>.</p>

<h2>Acreage, farms and Charlie Lake</h2>
<p>Outside the city, the Peace River Regional District sets the zoning. Its bylaw allows a secondary suite inside a single-family dwelling, up to the lesser of 75 square metres or 40 percent of the home, with sewage approval from the Ministry of Health (Peace River Regional District, Zoning Bylaw No. 1343, 2001, read October 2026). The regional board voted in August 2026 to drop a plan for one regional zoning bylaw and keep the five existing ones (CJDC TV, Peace River Regional District abandons plan for unified regional zoning bylaw, August 14, 2026, read October 2026). Rules may change, so confirm them before you plan a build.</p>
<p>On Agricultural Land Reserve land inside the city, the zoning bylaw allows only one principal dwelling per parcel unless the Agricultural Land Commission permits more (City of Fort St. John, Zoning Bylaw No. 2470, 2019 consolidated, read October 2026). A home on a few acres can finance like a house, but lenders often count only part of the land. Our <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> covers the cases. Wells and septic systems are common outside serviced areas, and lenders may ask for test results.</p>

<h2>Wildfire and insurance</h2>
<p>In May 2023 the Stoddart Creek and Red Creek fires led to an evacuation alert affecting more than 20,000 people around Fort St. John. The alert was lifted that week, though more than 1,300 rural and First Nations properties stayed evacuated (Global News, Evacuation alert rescinded for Fort St. John wildfire, May 17, 2023, read October 2026). Insurers may ask extra questions about rural and treed properties. Get a quote before you remove conditions, because a lender will want proof of coverage.</p>

<h2>Land held by First Nations</h2>
<p>The City says reserve land lies outside City bylaws and property tax, and that an urban reserve can include housing. Its page names no specific Fort St. John urban reserve or leasehold subdivision (City of Fort St. John, Urban Reserves and Treaty Land Entitlement, read October 2026). We found no homes on reserve land marketed to outside buyers here. If a purchase involves reserve land or leased land, tell Joshua at the start. He arranges those files through a lender that works on them, and the lender that fits depends on the land and your timing. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>

<h2>How far everything is</h2>
<p>The City lists Dawson Creek 75 km south, Grande Prairie 215 km east and Prince George 475 km away (City of Fort St. John, Move Here, read October 2026). Many Fort St. John buyers compare the <a href="/mortgage-broker-prince-george/">Prince George market</a>. Alberta buyers and workers are also common in this region. Plan an inspection trip around those distances, or sign from where you live.</p>

<h2>How Joshua works with Fort St. John clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> Salary, rotation, contract work, a business or a pension each point to different lenders.</li>
<li><strong>Checks the property early.</strong> He asks about the land type, any suite, the age of a manufactured home, well and septic. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Fort St. John files, such as pad homes, new self-employed income or recent job changes, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a> and <a href="/mortgages-for-government-and-city-employees/">government and city employees</a>. To plan a Fort St. John purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cityFacts("fort-st-john")}
${nearbyCallout("fort-st-john", callout)}

${cta({ title: "Talk to a broker who serves Fort St. John", text: "Book a 15-minute call. Share how you are paid, the kind of home you want and where you are moving from. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-fort-st-john/",
  h1: "Mortgage broker in Fort St. John, BC: buying a home in the Peace",
  lede: "Buying a home in Fort St. John, Taylor or Charlie Lake, or moving to the Peace for work? Joshua Resvick, Xeva Mortgage, serves the region from his Surrey office by phone and video. Energy and camp pay, manufactured homes, suites and acreage, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Fort St. John", "/mortgage-broker-fort-st-john/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Fort St. John before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move, and plan one trip for the inspection." },
    { q: "How does a lender count rotation, camp or overtime pay?", a: "It depends on the lender and on how steady the hours are. Many average your income over two years, and some count overtime only if it is regular. A steady schedule helps. Joshua checks lender rules for your pay type before you apply." },
    { q: "I was laid off or my project ended. Can I still get a mortgage?", a: "Sometimes. Lenders look at your new job or contract, your history and your savings. A gap in pay makes the file harder, and some lenders wait for a probation period to end. Tell Joshua early so he can match the file to a lender." },
    { q: "Can I get a mortgage on a manufactured home?", a: "In many cases. A home on land you own is far easier than one on a rented pad. Fort St. John limits the age of homes in some zones to 10 years at permit. Pad homes often have fewer lenders and age limits. Joshua checks the land and the home first." },
    { q: "Can a suite help me qualify for a Fort St. John mortgage?", a: "It can, if the suite is legal and the rent is documented. The City allows one secondary suite and up to two detached suites on many lots, but suites cannot be strata titled. Confirm the limits with the City before you plan a build." },
    { q: "Can I buy acreage near Fort St. John with a regular mortgage?", a: "Sometimes. A home on a few acres can finance like a house, but lenders often count only part of the land. Farm land in the Agricultural Land Reserve limits what you can build. Share the listing with Joshua before you offer." }
  ]
};
