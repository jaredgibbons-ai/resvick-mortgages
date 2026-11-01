import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-pitt-meadows/#service", name: "Resvick Mortgages, serving Pitt Meadows", url: SITE.origin + "/mortgage-broker-pitt-meadows/", areaServed: [{ "@type": "City", name: "Pitt Meadows", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves Pitt Meadows buyers and owners by phone and video from his Surrey office. This is a small city where most of the land is farmland and most of the land sits in a floodplain. A few questions decide the file: is the home in town or in the ALR, is any suite registered, and how are you paid?",
  who: "Pitt Meadows buyers of houses and townhomes, owners of acreage or farm-zoned lots, owners with a suite, and renewers.",
  next: "Book a 15-minute call and tell Joshua the street or neighbourhood, and whether the lot is in the Agricultural Land Reserve."
})}
<p>Pitt Meadows lies between the Fraser River and the Pitt River, with Maple Ridge to the east and Port Coquitlam to the south and west. It has a small town centre and a lot of open land. The City says that 78 percent of the city is agricultural land (City of Pitt Meadows, Agriculture, read October 2026). It also says the city ranks sixth among BC municipalities for farm production and supplies 20 percent of the province's blueberries (same page).</p>
<p>That mix makes this a city of two mortgage markets. One is the everyday market of houses and townhomes in town. The other is the market for acreage and farm-zoned land. Lenders treat them very differently, so it helps to know which one you are in before you make an offer.</p>

${ratesStrip()}

<h2>How lenders read Pitt Meadows incomes</h2>
<p>Many Pitt Meadows households earn their pay outside the city, at jobs across Metro Vancouver. For these files, the lender checks salary or hourly pay, overtime and bonus history, debts and credit. Lenders do not count your drive or train fare as a debt. They look at your pay and your obligations. You should still put the commute in your own budget.</p>
<p>A second group earns money from the land. Farm income can be seasonal, tied to weather and paid through a proprietorship or a company. Lenders commonly average two years of tax returns and notices of assessment for this kind of income. A year with a poor crop pulls the average down. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how those averages work, and lenders vary in how much they will credit.</p>
<p>If you are newly in business, a small down payment can narrow your choices. The right lender depends on how long you have filed and how steady the income has been. Joshua sorts that out before you start shopping, not after you have a firm offer.</p>

<h2>Incomes in Pitt Meadows</h2>
<p>Pitt Meadows' own Census profile shows a median household income of $104,000 for 2020. About 14.5 percent of workers were self-employed, or 1,550 of 10,655 in the labour force. Health care was the largest industry with 1,275 workers, then construction with 1,140 and retail with 1,120. (Statistics Canada, 2021 Census Profile, read October 2026). Wages from hospitals and stores sit next to trades pay and small companies. Lenders read each differently, so Joshua asks how you are paid and for how long before he chooses where to apply.</p>
${censusTable("pitt-meadows")}

<h2>Homes in town and homes on the land</h2>
<h3>The town stock</h3>
<p>Houses and attached homes such as townhouses make up most of the housing in town. Apartments are a small share (Statistics Canada 2021 Census, via Point2Homes, read October 2026). For a lender, that means less strata paperwork than in a condo-heavy city. If you do buy a townhouse in a strata, the <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> lists what lenders ask to see.</p>
<h3>Acreage and farm lots</h3>
<p>Land in the Agricultural Land Reserve, or ALR, follows provincial rules as well as City rules. The City says only one residence is allowed on an ALR property, unless the extra home is needed for farm use. A second house needs approval from the Agricultural Land Commission (City of Pitt Meadows, Residences in the ALR, read October 2026).</p>
<p>Lenders react to this in several ways. Many mainstream lenders limit or decline farm-classified property. Some want a larger down payment. Others send the file to a lender that works with farm land. They also ask about the well, the septic system, the outbuildings and how much of the price is land. Rules differ between lenders, so Joshua checks the property type first. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> gives the full picture.</p>

<h2>The floodplain question</h2>
<p>About 85 percent of Pitt Meadows lies in the Fraser River and Pitt River floodplains (City of Pitt Meadows, Flood Preparation, read October 2026). For a buyer, that is a reason to ask about insurance early.</p>
<p>A lender will want proof of home insurance before it funds. Insurers set their own terms for flood cover, and those terms can change from one property or insurer to the next. Ask your insurer for a quote before your subjects come off. That way a surprise on cost or cover does not land on closing week.</p>

<h2>Suites and garden suites: the City's rules</h2>
<p>A suite can help you qualify, but only when the City counts it as legal. The City publishes a Guide to Secondary Suites. It says it is not a bylaw and points to the Zoning Bylaw and the BC Building Code (City of Pitt Meadows, Secondary Suites guide, undated, read October 2026). Here is what the guide says.</p>
<ul>
<li><strong>Zones.</strong> Suites are allowed in the A-1 and A-2 farm zones, the RR-1 to RR-5 rural zones, and the RS, R-3, R-4 and R-6 urban zones.</li>
<li><strong>Size and number.</strong> One suite per main home, between 33 and 90 square metres.</li>
<li><strong>Registration.</strong> A suite is legal when the City confirms that it is registered.</li>
<li><strong>Who lives there.</strong> The owner must live in the main home or the suite. Otherwise the owner must hire a property manager based in Pitt Meadows, Maple Ridge or Port Coquitlam.</li>
<li><strong>Parking.</strong> One more off-street space is needed, except in the R-3, R-4 and R-6 zones.</li>
<li><strong>Short stays.</strong> Short-term rentals, including Airbnb, are not allowed.</li>
<li><strong>Floods.</strong> Living space below the required flood control level is not allowed.</li>
</ul>
<p>The guide also says a suite is not allowed on a lot that has a garden suite, except in the R-3, R-4 and R-6 zones. A garden suite is a small home in a separate building at the back of the lot, often called a coach house. The City's garden suite guide says Zoning Bylaw No. 2505 was adopted in October 2011 (City of Pitt Meadows, A Guide to Garden Suites, updated March 2015, read October 2026). Rules can change, so confirm your exact lot with the City.</p>
<p>On an acreage, suites are allowed only in the farm house. The guide says they are not allowed in the additional farm house built for farm workers. Many lenders count part of the rent from a registered suite, and few count rent from an unregistered one. Both methods are on the <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a>. Since short stays are barred, a plan built on nightly rent will not match City rules. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a> explains why lenders look at that closely.</p>

<h2>Commuting and move-up buyers</h2>
<p>West Coast Express trains stop at Pitt Meadows Station on weekdays only. The timetable lists no weekend or holiday service (TransLink, West Coast Express, effective January 5, 2026, read October 2026). Check the current times before you plan around it. Many residents drive instead, and the Golden Ears Bridge links the area to Langley and Surrey.</p>
<p>Many buyers here are trading space for travel time. Some sell a condo or townhome in a nearby city and bring that equity to a detached house. Others move over from Maple Ridge. Those files raise questions about timing. Do you sell first, buy first, or need short-term cash? The <a href="/bridge-financing/">bridge financing page</a> covers that, and the <a href="/porting-your-mortgage/">porting page</a> shows when it makes sense to take your current mortgage with you.</p>

<h2>Neighbourhood names buyers use</h2>
<p>The City does not publish an official neighbourhood list that we found. Local real-estate guides commonly use these names:</p>
<ul>
<li><strong>Osprey Village</strong>, near the river, with a mix of detached homes and townhomes.</li>
<li><strong>South Bonson</strong>, including the enclave called Bonson's Landing.</li>
<li><strong>Central Meadows and Mid Meadows</strong>, two names used for the central part of town.</li>
<li><strong>North Meadows and the acreage areas</strong>, where lots are larger and farm rules come up more.</li>
</ul>
<p>Treat these as search terms, not legal boundaries. What matters to a lender is the property type and the zone, not the area name. Joshua can check both when you send him a listing.</p>

<h2>What Joshua does for Pitt Meadows clients</h2>
<ol>
<li><strong>Checks the lot before the offer.</strong> He asks about the ALR, the floodplain and suite registration. Each answer shapes the lender choice.</li>
<li><strong>Puts lenders side by side.</strong> A <a href="/lender-comparison-report/">Lender Comparison Report</a> shows rate, term, penalty method and prepayment terms in writing.</li>
<li><strong>Keeps the file moving.</strong> You upload papers through a secure link, and your realtor and lawyer get updates.</li>
<li><strong>Looks ahead to renewal.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means a yearly review and a call about six months before your term ends.</li>
</ol>

${callout("Paying for the service", "<p>If your Pitt Meadows file suits a bank or other A lender, the lender pays Joshua and you pay nothing to him. A farm lot or a hard-to-document income may need a B or private lender instead. In that case, any charge to you must be shown in writing on BCFSA Form 1A before you agree to it.</p>")}

<h2>First-time buyers, renewals and refinances</h2>
<p><strong>First-time buyers</strong> can look at each program on its own test. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> sorts out the transfer tax exemption, the First Home Savings Account and the Home Buyers' Plan.</p>
<p><strong>Renewals</strong> are worth shopping, not signing at the first letter. The <a href="/mortgage-renewal-bc/">renewal guide</a> has the timeline. The <a href="/mortgage-calculators/">mortgage calculators</a> let you try your own balance and term. To see how a rate gets set, read the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Nearby cities</h2>
<p>Many Pitt Meadows buyers also look at <a href="/mortgage-broker-maple-ridge/">Maple Ridge</a>, next door to the east, and at <a href="/mortgage-broker-port-coquitlam/">Port Coquitlam</a>, across the Pitt River. Joshua serves all three the same way. The <a href="/contact/">contact page</a> shows how to reach him.</p>

<h2>Who writes this</h2>
<p>Joshua Resvick holds a mortgage broker licence through Xeva Mortgage. Before that, he worked as an underwriter, so he knows what a lender looks for when it reads a file. He has helped fund more than 1,000 mortgages. He works with Pitt Meadows clients from an office in Surrey, with calls, video and secure uploads. He has no office in Pitt Meadows.</p>

<p class="more-links"><strong>Related reading.</strong> Joshua has pages for <a href="/mortgage-for-contractors/">contractors and trades</a>, <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgages</a> and <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> work for any Pitt Meadows file. To know who pays him, see <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>, or read <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${nearbyCallout("pitt-meadows", callout)}

${cta({ title: "Talk to a broker who serves Pitt Meadows", text: "Book a 15-minute call. Share the address or area, and say whether the lot is in the ALR. You will leave knowing what a lender will ask and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-pitt-meadows/",
  h1: "Mortgage broker serving Pitt Meadows, BC",
  lede: "Joshua Resvick, Xeva Mortgage, helps Pitt Meadows buyers and owners from his Surrey office by phone and video. ALR land, floodplain homes, registered suites and commuter incomes, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Pitt Meadows", "/mortgage-broker-pitt-meadows/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "My Pitt Meadows property is in the ALR. Will a regular lender fund it?", a: "Sometimes, but not every lender will. Many mainstream lenders limit or decline farm-classified land, ask for more down payment or send the file to a lender that works with farm property. They also look at the well, septic and how much of the price is land. Joshua checks the property type before you write an offer." },
    { q: "Can I add a suite if my acreage has a farm worker house?", a: "The City's suite guide allows a suite in the farm house itself. It says suites are not allowed in the additional farm house built for farm workers. A second house on ALR land also needs approval from the Agricultural Land Commission. Check your exact lot with the City before you count on rent." },
    { q: "Is my basement suite legal if it was never registered?", a: "The City's guide says a suite is legal when the City confirms that it is registered. If it is not on the City's record, many lenders will not count its rent, and you may need to apply to register it. Rules for size, parking and flood levels apply. Ask the City before you buy." },
    { q: "Can I count a suite and a garden suite on the same lot?", a: "Only in some zones. The City's guide says a secondary suite is not allowed on a lot with a garden suite, except in the R-3, R-4 and R-6 zones. Zoning is lot by lot, so confirm yours with the City. Then Joshua can show how a lender would treat the rent." },
    { q: "Does the floodplain change my insurance or my lender's conditions?", a: "It can. About 85 percent of the city lies in a floodplain, so insurers may treat flood cover as a separate matter. Lenders usually need proof of home insurance before they fund. Get an insurance quote early, and tell Joshua if the quote adds a condition or a cost." }
  ]
};
