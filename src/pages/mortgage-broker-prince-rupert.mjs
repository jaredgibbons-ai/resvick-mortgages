import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";
import { cityFacts } from "../lib/city-facts.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-prince-rupert/#service", name: "Resvick Mortgages, serving Prince Rupert", url: SITE.origin + "/mortgage-broker-prince-rupert/", areaServed: [{ "@type": "City", name: "Prince Rupert", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Port Edward" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Prince Rupert and Port Edward by phone and video from his Surrey office. Many buyers here earn port, rail, health care or shift pay, and many homes are older. You can start the mortgage before you travel north.",
  who: "Buyers and owners in Prince Rupert and Port Edward, including port and rail workers, health care staff and people moving north for work.",
  next: "Book a 15-minute call and tell Joshua how you are paid and what kind of home you want."
})}
<p>Prince Rupert sits on Kaien Island on BC's north coast. The Port Authority lists six terminals, from containers and grain to cruise ships and wood pellets. It says the port directly supports 3,300 full-time jobs, plus about 4,200 indirect and induced jobs (Prince Rupert Port Authority, Economic Impact, read October 2026). That puts a lot of household income in one place. It also means a mortgage here often turns on how a lender reads port, rail and shift pay.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Prince Rupert by phone and video. There is no Prince Rupert branch. You can <a href="/contact/">book a 15-minute call</a> from home or from a job site.</p>

${ratesStrip()}

<h2>Port and project jobs: how lenders read the pay</h2>
<p>The port has grown. In 2025 it handled 26.3 million tonnes of cargo, up 14 percent on 2024, and the Port Authority says its major projects represent more than $3 billion in capital investment (Prince Rupert Port Authority, Port of Prince Rupert Cargo Volumes Grew to 26.3 Million Tonnes in 2025, January 14, 2026, read October 2026). In July 2026 the Province gave the City $240,000 for a worker attraction campaign. The release links it to a $1.35 billion bulk terminal project on Ridley Island that could create up to 1,900 jobs (BC Government News, Helping Prince Rupert attract workers for growth, July 13, 2026, read October 2026).</p>
<p>Big projects bring work, but a lender does not lend against a forecast. It looks at the job you hold today. These are common cases:</p>
<ul>
<li><strong>Permanent terminal, rail or hospital jobs.</strong> A salaried or hourly job with a steady schedule is read like most jobs. Recent pay stubs and an employer letter do most of the work.</li>
<li><strong>Union hall and call-out work.</strong> Pay can vary with the season and the ship schedule. Many lenders average two years of income. Policies differ, so Joshua checks before you apply.</li>
<li><strong>Construction and contract work.</strong> A project can end. Lenders often ask how long the contract runs and what your history looks like.</li>
<li><strong>Self-employed owners.</strong> Boat, trucking and service owners usually need two years of tax returns. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes.</li>
</ul>
<p>If your pay includes overtime, shift premiums or camp rotations, see our page for <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>. Truck drivers can read the <a href="/mortgages-for-truckers-and-owner-operators/">trucker page</a>.</p>

<h2>Incomes in Prince Rupert</h2>
<p>Prince Rupert's median household income was $95,000 for 2020. About 11.5 percent of workers were self-employed, or 780 of 6,780 in the labour force. The biggest industry by far was transportation and warehousing, with about 1,550 workers. Retail had about 795 and health care about 655. (Statistics Canada, 2021 Census Profile, read October 2026). Transportation and warehousing covers the port, the railway and the trucking and marine firms that serve them. Those jobs often pay overtime, shift premiums or seasonal extras. Lenders usually average that extra pay over about two years, so keep your pay stubs and tax slips together. The census is from 2021, so it does not show later job changes at the port.</p>
${censusTable("prince-rupert")}

<h2>Moving to Prince Rupert for work</h2>
<p>Many people who search for buying a home in Prince Rupert do not live here yet. They are starting a job at the port, the hospital or a school. The City's 2022 housing report says Northern Health lost 18 staff in two years and ties part of that to housing (City of Prince Rupert, Prince Rupert Housing Needs Report, December 2022, read October 2026). The Province describes a 40-home rental project called Estrella as housing for people who work in health care, education, port operations and logistics (BC Government News, Minister's statement on March 2026 housing highlights, April 10, 2026, read October 2026).</p>
<p>An order that tends to work:</p>
<ol>
<li><strong>Get pre-approved before you visit.</strong> It sets your price range and holds a rate for a set time. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what lenders ask for.</li>
<li><strong>Gather your job papers.</strong> A new job needs an offer letter. Lenders may ask about probation, so see our <a href="/guides/mortgage-with-a-new-job-or-probation/">new job guide</a>.</li>
<li><strong>Plan your closing date.</strong> A long closing lets you finish a job or sell a home elsewhere. A <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
<li><strong>Budget for travel.</strong> Flights land on Digby Island and a ferry crosses to the city (City of Prince Rupert, Getting Here, read October 2026). Plan your inspection and signing dates around that trip, or sign from where you live.</li>
</ol>

<h2>What a home costs</h2>
<p>BC Assessment's typical single-family value for 2026 was $429,000 in Prince Rupert, up 3 percent. Port Edward was $333,000, up 16 percent (BC Assessment, North Central BC 2026 Property Assessments Announced, January 2, 2026, read October 2026). These are assessed values, not sale prices, and they change each year. They do show why some buyers look at both towns. A lower price can mean a smaller down payment, but the same rules for pre-approval, credit and closing costs still apply. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> show what to set aside. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> for how rates work.</p>

<h2>Older homes, muskeg and the inspection</h2>
<p>The City's 2022 report says about three-quarters of the housing stock was built before 1980, and 14 percent of homes needed major repair, against 5.8 percent for BC (City of Prince Rupert, Prince Rupert Housing Needs Report, December 2022, read October 2026). That is dated, but the pattern is clear: many homes are older, and the wet coast is hard on them. Lenders and insurers may ask about the roof, the wiring, the heating and drainage. Plan for a full inspection, and ask early whether a repair could affect financing. Some files need a larger repair budget built in. The <a href="/purchase-plus-improvements/">purchase plus improvements page</a> explains how a lender can fold repairs into the mortgage.</p>
<p>Building a new home has its own risk. The City says it is "very difficult to determine the costs of excavating muskeg" (City of Prince Rupert, Interim Housing Strategy, February 15, 2021, read October 2026). Muskeg is soft peat, and it can be deep. If you plan to build, get the site checked before you buy the lot, and talk to Joshua about a construction file. The City also lists lots it holds for sale. Buyers grant the City an option to purchase, with deadlines for a building permit and a finished home (City of Prince Rupert, City Held Properties for Sale, read October 2026). Prices and terms on that page may be out of date, so confirm them with the City.</p>

<h2>Suites, garden suites and rentals</h2>
<p>In May 2024 the City adopted Zoning Bylaw Amendment Bylaw No. 3536. It renamed the R2 duplex zone as R1 Small-Scale Residential. It allows up to four units on a lot, including accessory dwellings, and adds garden suites of up to 90 square metres. Accessory units cannot be strata titled, and the owner must register a covenant against it (City of Prince Rupert, Zoning Bylaw Amendment Bylaw No. 3536, 2024, May 2024, read October 2026). The copy we read mixes current and proposed wording, so confirm the final rules with the City before you plan a build.</p>
<p>For a lender, a suite counts only if it is legal and the rent is documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods. The no-strata rule matters for resale, because you cannot sell the suite as its own unit.</p>
<h3>Short-term rentals</h3>
<p>Prince Rupert is on the Province's list of communities with the principal residence requirement (Province of BC, Principal residence requirement, September 21, 2026, read October 2026). Locally, Bylaw 3535 allows short-term rentals only where the operator lives in the dwelling (City of Prince Rupert, Zoning Bylaw Amendment Bylaw No. 3535, 2024, May 2024, read October 2026). Our copies of the bylaws disagree on how many days count as short term, so ask the City for the adopted text. In practice, a plan to buy a second home just for Airbnb income does not fit most of the city. See the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a>.</p>

<h2>Port Edward and the surrounding area</h2>
<p>Many searches say Prince Rupert but mean the wider area. Port Edward, a small district to the south, had 470 people in the 2021 Census and 207 homes, and 88 percent of households owned (District of Port Edward, Interim Housing Needs Report, November 6, 2024, read October 2026). We found no Port Edward bylaw for small-scale multi-unit housing, so ask the District what is allowed before you plan a suite.</p>
<p>Two First Nations are also part of the picture. Metlakatla has a village a few kilometres from the city, and Lax Kw'alaams is at Port Simpson to the northwest (Province of BC, Metlakatla First Nation and Lax Kw'alaams Band, read October 2026). Homes on reserve land are held differently from a town lot. We found no homes on First Nation land marketed to outside buyers here. If a purchase involves reserve land or leased land, tell Joshua at the start. He arranges those files through a lender that works on them, and the lender that fits depends on the land and your timing. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>
<p>The nearest larger centre by road is Terrace. Our <a href="/mortgage-broker-terrace/">Terrace page</a> covers that market, and the <a href="/mortgage-broker-kitimat/">Kitimat page</a> covers the next town along the corridor.</p>

<h2>Booms, busts and your plan</h2>
<p>Prince Rupert has seen big project talk before. A 2016 letter from the local MLA said LNG speculation tightened the rental market, while no LNG project had yet been built (Jennifer Rice MLA, MLA Rice Advocates for Provincial Investment in Prince Rupert Housing Infrastructure, September 19, 2016, read October 2026). Some projects now move ahead and some wait. For example, the Ksi Lisims LNG partners said in late October 2026 that they aim to make a final investment decision this year, and no decision had been announced (BNN Bloomberg, Ksi Lisims finalizes supply deal with German utility SEFE, October 26, 2026, read October 2026). A sound plan does not depend on any one project. Choose a payment you could carry on today's income, with room if hours change.</p>

<h2>How Joshua works with Prince Rupert clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> Salary, union hours, contract work, shift pay or a business each point to different lenders.</li>
<li><strong>Checks the home early.</strong> He asks about the age of the house, any suite, the lot and the heating. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Prince Rupert files, such as a home that needs major repairs, new self-employed income or a home on leased land, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a> and <a href="/mortgage-for-contractors/">contractors and trades</a>. To plan a Prince Rupert purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cityFacts("prince-rupert")}
${nearbyCallout("prince-rupert", callout)}

${cta({ title: "Talk to a broker who serves Prince Rupert", text: "Book a 15-minute call. Share how you are paid, the kind of home you want and where you are moving from. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-prince-rupert/",
  h1: "Mortgage broker in Prince Rupert, BC: buying a home or moving north",
  lede: "Buying a home in Prince Rupert or Port Edward, or moving north for port, rail or health care work? Joshua Resvick, Xeva Mortgage, serves the North Coast from his Surrey office by phone and video. Shift pay, older homes, suites and muskeg lots, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Prince Rupert", "/mortgage-broker-prince-rupert/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Prince Rupert before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move, and plan one trip for the inspection." },
    { q: "How does a lender count port, rail or shift pay?", a: "It depends on the lender and on how steady the hours are. Permanent jobs with a set schedule are read like most jobs. Call-out work, overtime and premiums are often averaged over two years. Joshua checks lender rules for your pay type before you apply." },
    { q: "Are older homes a problem for a mortgage in Prince Rupert?", a: "Not by themselves. About three-quarters of the city's homes were built before 1980, according to the City's 2022 report. A lender may ask about the roof, wiring, heating and drainage, and an insurer may too. A full inspection helps you and the lender see the risks early." },
    { q: "Can a suite or garden suite help me qualify?", a: "It can, if the suite is legal and the rent is documented. The City allows up to four units on many lots under a 2024 bylaw, but accessory units cannot be strata titled. Confirm the final rules with the City before you plan a build." },
    { q: "Can I use a Prince Rupert home as an Airbnb?", a: "Usually not as an investment. Prince Rupert is on the Province's principal residence list, and the local bylaw requires the operator to live in the home. Lenders also ask about the rent they can count. Check the City's current rules before you plan on short-term rental income." },
    { q: "Do you help with homes on First Nation land near Prince Rupert?", a: "Yes. Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. Which lender fits depends on the land and your timing. Tell him at the start what paper you hold, such as a lease or a certificate of possession." }
  ]
};
