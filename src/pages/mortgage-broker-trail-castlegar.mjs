import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-trail-castlegar/#service", name: "Resvick Mortgages, serving Trail and Castlegar", url: SITE.origin + "/mortgage-broker-trail-castlegar/", areaServed: [{ "@type": "City", name: "Trail", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Castlegar", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Rossland" }, { "@type": "AdministrativeArea", name: "Regional District of Kootenay Boundary" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Trail, Castlegar and the nearby West Kootenay towns by phone and video from his Surrey office. Many buyers here earn smelter, mill, hospital or college pay, and many buy older homes. You can start the mortgage before you ever drive in.",
  who: "Buyers and owners in Trail, Castlegar, Rossland, Warfield, Fruitvale and Montrose, including smelter and mill workers, health care staff and Selkirk College employees.",
  next: "Book a 15-minute call and tell Joshua how you are paid and what kind of home you want."
})}
<p>Trail and Castlegar sit on the Columbia River in the West Kootenay. They share a labour market. In the 2021 census data, about 15 percent of the Castlegar residents who commute to work go to Trail, and some workers live in Trail because homes cost less (City of Castlegar, 2023 Castlegar Housing Needs Report, 2023, read October 2026). The price gap is real. BC Assessment puts the 2026 typical single-family value at $376,000 in Trail and $519,000 in Castlegar (BC Assessment, Southern Interior 2026 Property Assessments Announced, January 2, 2026, read October 2026).</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Trail and Castlegar by phone and video. There is no branch in either town. You can <a href="/contact/">book a 15-minute call</a> from home or from the job site.</p>

${ratesStrip()}

<h2>Smelter, mill, hospital and college: how lenders read the pay</h2>
<p>Teck Trail Operations employs "over 1,400 people" (Natural Resources Canada, Canada announces first agreement under new Canada Critical Minerals Accelerator, July 7, 2026, read October 2026). In July 2026 the federal government and Teck announced a potential investment of up to $850 million at Trail. The release says it is subject to definitive documentation and approvals, and it gives no construction schedule (same release). A lender does not lend against a proposal. It looks at the job you hold today.</p>
<p>Other large employers shape incomes too:</p>
<ul>
<li><strong>Mercer Celgar, Castlegar.</strong> Mercer announced fibre-related downtime at the pulp mill in January 2023 (Mercer International, announcement, January 17, 2023, read October 2026). Mill pay can vary with curtailments, and a lender may ask about it.</li>
<li><strong>Selkirk College.</strong> The college reported 456 employees in 2023 and 2024 (Selkirk College, Fast Facts 2024, read October 2026).</li>
<li><strong>Health care.</strong> Kootenay Boundary Regional Hospital is in Trail. Health care was the largest employment sector for Castlegar residents in the 2023 housing report (City of Castlegar, 2023 Castlegar Housing Needs Report, read October 2026).</li>
</ul>
<p>Common cases for a lender:</p>
<ul>
<li><strong>Union and salaried jobs.</strong> A steady job with set hours is read like most jobs. Recent pay stubs and an employer letter do most of the work.</li>
<li><strong>Shift work and overtime.</strong> Many lenders average two years of income. See our page for <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>.</li>
<li><strong>Trades and contractors.</strong> A lender asks how steady the work is and how long you have done it. See the <a href="/mortgage-for-contractors/">contractor page</a>.</li>
<li><strong>Self-employed owners.</strong> Usually two years of tax returns. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes.</li>
</ul>
<p>The Castlegar housing report found that employers struggle to hire because housing is hard to find. In interviews from December 2022, some said senior jobs stayed unfilled because candidates could not find a home (City of Castlegar, 2023 Castlegar Housing Needs Report, read October 2026). That interview data is older, but it shows why relocating buyers are common here.</p>

<h2>Incomes in Trail and Castlegar</h2>
<p>The census counts the two cities separately, and the numbers differ. In Trail, the median household income was $68,000 for 2020, and 11.3 percent of workers were self-employed (395 of 3,500). Health care was the largest industry with about 560 workers, then retail with about 530 and manufacturing with about 415. In Castlegar, the median was $81,000, and 12.0 percent were self-employed (480 of 4,000). Health care led with about 610 workers, then retail with about 510 and manufacturing with about 485. (Statistics Canada, 2021 Census Profile, read October 2026). The gap of $13,000 in the medians is worth knowing if you are comparing prices between the two. Both cities lean on wages from hospitals, stores and plants, so most files are salaried. For those, lenders usually want a recent pay stub, a job letter and your tax slips. Manufacturing pay can include shift premiums or overtime, which a lender may average over two years.</p>

<h2>Moving to the West Kootenay</h2>
<p>Plenty of Trail and Castlegar buyers are still living elsewhere when they start looking. Some are starting at the smelter, the mill or the college. Others are leaving the Lower Mainland or Calgary for a slower pace. Here is a way to line things up:</p>
<ol>
<li><strong>Pre-approval first.</strong> It sets your price range before you book a trip. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what lenders ask for.</li>
<li><strong>Paper the new job.</strong> A new job needs an offer letter. Lenders may ask about probation, so see our <a href="/guides/mortgage-with-a-new-job-or-probation/">new job guide</a>.</li>
<li><strong>Match the closing to the move.</strong> A long closing lets you finish a job or sell elsewhere. A <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
<li><strong>Price the neighbours.</strong> Typical 2026 single-family values were $625,000 in Rossland, $470,000 in Fruitvale, $417,000 in Warfield and $699,000 in Nelson (BC Assessment, Southern Interior 2026 Property Assessments Announced, January 2, 2026, read October 2026).</li>
</ol>
<p>These are assessed values, not sale prices, and they change each year. The release gives no condo value for Trail or Castlegar. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> for how rates work. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> show what to set aside.</p>

<h2>Students, renters and who buys</h2>
<p>Selkirk College counted 1,771 full-time-equivalent students in its early count for fall 2025. International students were 425, down from 615 a year earlier (Selkirk College, Enrolment Trends for Fall 2025, October 24, 2025, read October 2026). Fewer students can ease pressure on local rentals. It also matters if you plan to buy a house and rent rooms to students. Lenders count rental income only when it is documented, so the plan needs a legal suite.</p>
<p>The Castlegar report shows how much price depends on the type of home. In 2022 the average sale was $462,323 for a single-detached home and $334,535 for row housing. A manufactured home on its own land averaged $233,067, and one in a park $91,822 (City of Castlegar, 2023 Castlegar Housing Needs Report, 2023, read October 2026). Those are old figures, and today's prices differ. They show why the land under a home matters so much to a lender.</p>

<h2>Smelter soil testing and older homes</h2>
<p>Trail has a long industrial history, and the area runs a free soil program. The Trail Area Health and Environment Program tests soil for lead, cadmium, arsenic and zinc. Its testing area covers Trail, Warfield, Montrose, south Castlegar and parts of the nearby rural areas (Trail Area Health and Environment Program, Residential Yards and Gardens, read October 2026). It may also do soil work such as a cover or replacement. Ask the seller or the program what is on record for the lot you like. A lender or insurer may not ask, but you may want to know before you buy.</p>
<p>Many homes here are older. A full inspection helps you and the lender see the risks early. If you plan repairs, the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> explains how a lender can fold them into the mortgage.</p>

<h2>Suites, carriage houses and short-term rentals</h2>
<p>The two cities have different rules.</p>
<h3>Castlegar</h3>
<p>Zoning Bylaw No. 1428, adopted in July 2024, lets most residential lots have up to four dwellings if the lot is over 280 square metres. Smaller lots can have up to three (City of Castlegar, Accessory Dwellings, March 24, 2026, read October 2026). The City says owner occupancy is not required, and it cites rental income as a way to help carry a mortgage (City of Castlegar, City launches new accessory dwelling program, April 2, 2025, read October 2026). Services may need an upgrade, because the regulations allow one water and one sewer connection per property.</p>
<p>Short-term rentals fall under the City's business licence bylaw. It allows them in a principal residence, a non-principal residence, plus one suite or accessory unit, and strata buildings need a consent letter (City of Castlegar, Consolidated Bylaw 1337 Business Licencing, March 2024, read October 2026).</p>
<h3>Trail</h3>
<p>Trail's Zoning Bylaw No. 2503 allows a secondary suite of no more than half the main building's floor area. It lets a carriage house or other detached suite be up to the size of the main unit. Suites cannot be strata titled. Its table caps accessory units at 3 on lots up to 280 square metres and allows more on larger lots (City of Trail, Zoning Bylaw, uploaded June 2026, read October 2026). We could not confirm which amendment added the table, so ask the City for the current rules. Short-term rentals are allowed only after a Council rezoning (same bylaw).</p>
<p>For a lender, a suite counts only if it is legal and the rent is documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods. See also the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a>.</p>
<h3>Rossland and the rural areas</h3>
<p>Rossland adopted a new zoning bylaw in July 2026, and its page says standard lots can hold three or four units (City of Rossland, Zoning Bylaw Update, read October 2026). It allows short-term rentals only in a principal residence (Rossland News, Public hearing notice for Zoning Amendment Bylaw No. 2828, March 2024, read October 2026). Rural areas outside the cities follow the regional districts. Draft rules we found would limit detached suites to lots of one hectare or more, but we could not confirm adoption. Call the regional district before you plan a build.</p>

<h2>Manufactured homes</h2>
<p>About 5 percent of Castlegar's homes are movable dwellings (City of Castlegar, 2023 Castlegar Housing Needs Report, read October 2026). In Trail, the zoning bylaw excludes single-wide mobile homes from residential areas outside parks, and homes must sit on permanent foundations (City of Trail, Zoning Bylaw, uploaded June 2026, read October 2026). The land decides the file. A home on land you own is easier than one on a rented pad, and pad homes often have fewer lenders and age limits. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> covers both cases.</p>

<h2>Taxes, floods and land</h2>
<p>Castlegar, Trail, Nelson and Rossland are not on the speculation and vacancy tax list (Province of BC, Taxable areas, December 8, 2025, read October 2026). Castlegar is also mapping flood risk on six upland creeks, with a draft plan planned for 2026 (City of Castlegar, Understanding mapping flood risks, read October 2026). We found no flood construction level or floodplain bylaw there, so ask the City about a specific lot. Insurers may ask extra questions about creek-side, hillside and rural homes. Get a quote before you remove conditions, because a lender will want proof of coverage.</p>
<p>We did not find reserve or leased land with homes for sale here. If a purchase involves either, tell Joshua at the start. He arranges those files through a lender that works on them, and the lender that fits depends on the land and your timing. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>

<h2>What working with Joshua looks like</h2>
<ol>
<li><strong>The pay question comes first.</strong> Union wages, shift premiums, a business or a pension each lead to a different short list of lenders.</li>
<li><strong>The house gets a close look.</strong> He asks how old it is, whether it has a suite, what the land is and whether the soil was tested. Those answers narrow the lenders before you get attached to a place.</li>
<li><strong>You get the choices on paper.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> sets term, penalty method and portability side by side, so rate is not the only thing you compare.</li>
<li><strong>He keeps checking in.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some West Kootenay files, such as pad homes, new self-employed income or homes needing major repairs, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p>Buyers here also look east and west. The <a href="/mortgage-broker-kelowna/">Kelowna page</a> covers the closest large Okanagan city, and the <a href="/mortgage-broker-penticton/">Penticton page</a> covers the South Okanagan.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a> and <a href="/mortgages-for-teachers-and-school-staff/">teachers and school staff</a>. To plan a purchase, start with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cta({ title: "Talk to a broker who serves Trail and Castlegar", text: "Book a 15-minute call. Share how you are paid, the kind of home you want and where you are moving from. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-trail-castlegar/",
  h1: "Mortgage broker in Trail and Castlegar, BC: buying in the West Kootenay",
  lede: "Buying a home in Trail, Castlegar or Rossland, or moving to the West Kootenay for work? Joshua Resvick, Xeva Mortgage, serves the region from his Surrey office by phone and video. Smelter and mill pay, older homes, suites and manufactured homes, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Trail and Castlegar", "/mortgage-broker-trail-castlegar/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Trail or Castlegar before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move." },
    { q: "How does a lender count smelter, mill or shift pay?", a: "It depends on the lender and on how steady the hours are. A permanent union job with a set schedule is read like most jobs. Overtime and shift premiums are often averaged over two years. Joshua checks lender rules for your pay type before you apply." },
    { q: "Is Trail cheaper than Castlegar?", a: "On BC Assessment's 2026 typical single-family values, yes. Trail was $376,000 and Castlegar $519,000. These are assessed values, not sale prices, and condo values are not published for either city. Compare real listings, and check the age and condition of each home." },
    { q: "Can a suite or carriage house help me qualify?", a: "It can, if the unit is legal and the rent is documented. Castlegar allows up to four dwellings on larger lots and does not require owner occupancy. Trail has its own limits and does not allow strata titling of suites. Confirm current rules with the city before you plan a build." },
    { q: "Can I use a Trail or Castlegar home as a short-term rental?", a: "The rules differ. Castlegar licenses short-term rentals and allows non-principal residences. Trail requires a Council rezoning first. Rossland allows them only in a principal residence. Check the current bylaw, and note that lenders ask what rent they can count." },
    { q: "Does the smelter soil program affect my mortgage?", a: "Not directly. The Trail Area Health and Environment Program offers free soil testing in a set area, including Trail, Warfield, Montrose and south Castlegar. Ask what is on record for the lot, since you may want that before you buy." }
  ]
};
