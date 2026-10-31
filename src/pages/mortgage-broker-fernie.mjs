import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-fernie/#service", name: "Resvick Mortgages, serving Fernie", url: SITE.origin + "/mortgage-broker-fernie/", areaServed: [{ "@type": "City", name: "Fernie", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "Sparwood" }, { "@type": "City", name: "Elkford" }, { "@type": "AdministrativeArea", name: "Regional District of East Kootenay" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Fernie and the Elk Valley by phone and video from his Surrey office. Buyers here include coal mine workers, ski resort staff, remote workers and second-home owners. You can start the mortgage before you ever drive in.",
  who: "Buyers and owners in Fernie, Sparwood, Elkford and the Elk Valley, including mine workers, resort and trades workers, and out-of-province second-home buyers.",
  next: "Book a 15-minute call and tell Joshua how you are paid and whether the home will be a full-time home or a second home."
})}
<p>Fernie sits in the Elk Valley in the southeast corner of BC. The City says Sparwood is 31 km away, Cranbrook about an hour and Calgary about three hours (City of Fernie, Getting to Fernie, read October 2026). Fernie has two big income engines, coal mining and skiing, and a lot of second homes. That mix shapes the mortgage files here.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Fernie by phone and video. There is no Fernie branch. You can <a href="/contact/">book a 15-minute call</a> from home, a camp or a chairlift line.</p>

${ratesStrip()}

<h2>Mine pay and resort pay: how lenders read each</h2>
<p>The Elk Valley steelmaking coal mines are run by Elk Valley Resources. Glencore bought 77 percent of the company from Teck. The sale closed on July 11, 2024 (BNN Bloomberg, Teck closes sale of coal business to Glencore, July 11, 2024, read October 2026). A study commissioned by the company says it employs about 5,500 people in BC. It says roughly one in four workers in Fernie works for it. In Elkford and Sparwood it is one in two (Canadian Mining Journal, Coal mine giant EVR contributes $6.1B to Canadian economy, April 2, 2026, read October 2026). That is an employer's own study, so treat the shares as an estimate.</p>
<p>Mine work pays well, and it can change. The company cut 140 positions in June 2025. It said most affected employees moved to other vacant jobs (CBC News, B.C. mining company cuts 140 positions, June 17, 2025, read October 2026). It has also proposed a Fording River extension that it says would add 35 years of mine life. Public comment closed in February 2026. The sources we read gave no decision date (Cranbrook Townsman, Fording River Mine extension plans, January 30, 2026, read October 2026). A lender looks at the job you hold today, not at a proposal.</p>
<p>Common cases:</p>
<ul>
<li><strong>Mine employees.</strong> A steady job with set shifts is read like most jobs. Recent pay stubs and an employer letter do most of the work. If overtime is a large share of pay, many lenders average two years. See our page for <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>.</li>
<li><strong>Resort and seasonal staff.</strong> The City says the resort had about 800 winter employees in the 2016 data. It also reports seasonal population swings of up to 30 percent (City of Fernie, Core housing needs, May 8, 2022, read October 2026). Pay that stops in the off season is harder. Lenders vary, so Joshua checks before you apply.</li>
<li><strong>Trades and contractors.</strong> A lender asks how steady the work is and how long you have done it. See the <a href="/mortgage-for-contractors/">contractor page</a>.</li>
<li><strong>Remote workers.</strong> A job with an employer elsewhere is usually read the same as a local one, if the contract is permanent. Self-employed remote workers need two years of tax returns. See the <a href="/self-employed-mortgage-bc/">self-employed hub</a>.</li>
</ul>

<h2>What homes cost, and how Fernie compares</h2>
<p>BC Assessment's typical single-family value for 2026 was $911,000 in Fernie, up 6 percent. Sparwood was $457,000, Elkford $406,000 and Cranbrook $517,000 (BC Assessment, Southern Interior 2026 Property Assessments Announced, January 2, 2026, read October 2026). Fernie costs about double the other two Elk Valley towns, which is why mine workers often compare all three. The release gives no condo value for Fernie. These are assessed values, not sale prices, and they change each year.</p>
<p>A higher price means a bigger down payment. The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> show what to set aside. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> for how rates work. If you will sell elsewhere to buy here, a <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</p>

<h2>Second homes and out-of-province buyers</h2>
<p>Fernie has a long record as a second-home town. The only numbers we found are old. A 2017 Tourism Fernie article cited 2016 tax roll data. It showed 34 percent of City properties owned by non-residents, and 50 percent in the area just outside it (Tourism Fernie, 2nd Homeowners, July 23, 2017, read October 2026). Current figures may differ. Fernie is not on the speculation and vacancy tax list (Province of BC, Taxable areas, December 8, 2025, read October 2026).</p>
<p>A second-home mortgage is read differently from a home you live in. Lenders may ask for a larger down payment, and rental income may count only in part. If you live in Alberta or another province, you can usually still use a BC lender. Your income and credit are assessed where you live and work. Tell Joshua early where you live and where you are paid. For federal rules on non-residents, see the <a href="/foreign-buyers-bc/">foreign buyers page</a>.</p>

<h2>Short-term rentals</h2>
<p>Fernie limits short-term rentals. Residents may rent their primary residence with a City business licence. Secondary suites, garage suites, garden suites, carriage houses and secondary homes are not eligible. Properties in some condo and hotel zones may operate them (City of Fernie, Short-Term Rentals, read October 2026). The licence fee rose in 2025. It is $500 a year for a primary residence and $700 for a condo or hotel (City of Fernie, Short-Term Rental Licence Fees, August 28, 2025, read October 2026). The Province lists Fernie as exempt from its own principal residence rule, but the City's bylaw still applies. Confirm the current text with the City.</p>
<p>So a plan to buy a house in town only for vacation rental income may not be allowed. Lenders also ask what rent they can count. See the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a>.</p>
<h3>Resort condos and strata</h3>
<p>Some homes on the mountain are strata units with a rental history. The resort's own blog says on-slope condos and townhomes were first placed in a rental pool with limited owner stays. Strata owners later dropped the annual restriction (Fernie Alpine Resort, Real Estate blog, read October 2026). Lenders read rental pools, strata rules and fees closely. Send the strata documents to Joshua early. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse page</a> explains what a lender reviews.</p>

<h2>Suites, fourplexes and zoning</h2>
<p>In June 2024 the City adopted zoning changes for small-scale multi-unit housing. The City's proposal merged several residential zones into one called RSS. It allows up to four units on lots over 280 square metres. Lots from 250 to 280 square metres may have three (City of Fernie, Proposed Zoning Bylaw Update, May 16, 2024, read October 2026). Secondary suites and detached accessory dwellings are among the housing types listed (City of Fernie, Zoning Bylaw Amendments Adopted, July 2, 2024, read October 2026). Council kept amending the zoning map for single lots in 2026, so check the current zoning for any property (City of Fernie, Notice of Zoning Bylaw Amendment, April 14, 2026, read October 2026).</p>
<p>For a lender, a suite counts only if it is legal and the rent is documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods.</p>

<h2>Floods, slopes and avalanche zones</h2>
<p>The City has development permit areas for slope hazard, avalanche hazard, flood hazard and watercourses. It says hazard permits take at least three to four weeks, and covenants registered on title may add time (City of Fernie, Development Permits, read October 2026). Studies of Coal Creek, Fairy Creek and the Elk River found large areas in the floodplain, including some not mapped before (e-know.ca, Floodplain bylaw updated after studies, read October 2026). Outside the City, the regional district has an interim policy for areas like West Fernie, Hosmer and Morrissey. It can ask owners to build to flood levels or register a covenant (Regional District of East Kootenay, Elk Valley Floodplain Bylaw, June 2023, read October 2026). That policy may have changed.</p>
<p>These items matter for a mortgage. A lender or insurer may ask about floodplain location, and a covenant on title can affect resale. Ask your lawyer to search title, and get an insurance quote before you remove conditions. Fernie and the Elk Valley had no wildfire season in 2026, according to the local MLA (The Free Press, Fernie avoids wildfire season, September 14, 2026, read October 2026). The City is also considering a wildfire permit area (City of Fernie, FireSmart, read October 2026).</p>

<h2>Homes outside the city, manufactured homes and land</h2>
<p>The Regional District of East Kootenay governs the areas outside the City limits, with different bylaws and covenants. Wells and septic systems are common there, and lenders may ask for test results. We did not verify any manufactured home parks or reserve land with homes for sale near Fernie. If your purchase involves a manufactured home, the land decides the file. See the <a href="/mobile-home-mortgages-bc/">manufactured home page</a>. If it involves reserve or leased land, tell Joshua at the start. He arranges those files through a lender that works on them, and the lender that fits depends on the land and your timing. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>

<h2>Local housing projects</h2>
<p>Several housing projects are moving ahead. The Province reported 49 affordable rental homes opened at North End Court in May 2024 (Province of BC, New affordable homes open in Fernie, May 31, 2024, read October 2026). A 27-unit project with child care began construction in March 2026 (City of Fernie, Groundbreaking for childcare centre and affordable homes, March 23, 2026, read October 2026). These are rentals, not homes for sale, but they may ease pressure over time. They do not predict prices.</p>

<h2>How Joshua works with Fernie clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> Mine pay, resort pay, remote work or a business each point to different lenders.</li>
<li><strong>Checks the property early.</strong> He asks about strata or freehold, any suite, hazard areas and covenants on title. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Fernie files, such as a second home with rental income, new self-employed income or a unit in a rental pool, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p>Buyers who like a mountain town also look at the <a href="/mortgage-broker-whistler/">Whistler page</a> and the <a href="/mortgage-broker-invermere/">Invermere page</a>, which covers another East Kootenay market.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a> and <a href="/mortgages-for-truckers-and-owner-operators/">truckers and owner-operators</a>. To plan a Fernie purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${cta({ title: "Talk to a broker who serves Fernie", text: "Book a 15-minute call. Share how you are paid, whether the home is a full-time or second home, and where you are moving from. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-fernie/",
  h1: "Mortgage broker in Fernie, BC: buying a home or second home in the Elk Valley",
  lede: "Buying a home in Fernie or moving to the Elk Valley for mine, resort or remote work? Joshua Resvick, Xeva Mortgage, serves the region from his Surrey office by phone and video. Mine and resort pay, second homes, suites and hazard zones, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Fernie", "/mortgage-broker-fernie/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Fernie before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move." },
    { q: "How does a lender count coal mine pay and overtime?", a: "It depends on the lender and on how steady the hours are. A permanent job with a set shift schedule is read like most jobs. Overtime is often averaged over two years. Joshua checks lender rules for your pay type before you apply." },
    { q: "Can I get a mortgage on a second home in Fernie?", a: "Yes, in many cases. Lenders may ask for a larger down payment, and rental income may count only in part. Your income and credit are assessed where you live and work. Tell Joshua early which province you live in and how you are paid." },
    { q: "Can I use a Fernie home as an Airbnb?", a: "Only in limited cases. The City allows short-term rentals in a primary residence with a licence, and in some condo and hotel zones. Suites, carriage houses and secondary homes are not eligible. Check the current bylaw, and note that lenders ask what rent they can count." },
    { q: "Does a flood or avalanche zone affect my mortgage?", a: "It can. The City has permit areas for floods, slopes and avalanches, and a covenant on title may apply. A lender or insurer may ask about it. Have your lawyer search title, and get an insurance quote before you remove conditions." },
    { q: "Why are Sparwood and Elkford so much cheaper than Fernie?", a: "On BC Assessment's 2026 typical single-family values, Fernie was $911,000, Sparwood $457,000 and Elkford $406,000. Fernie has more resort and second-home demand. These are assessed values, not sale prices. Compare real listings in each town before you decide." }
  ]
};
