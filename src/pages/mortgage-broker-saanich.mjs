import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-saanich/#service", name: "Resvick Mortgages, serving Saanich", url: SITE.origin + "/mortgage-broker-saanich/", areaServed: [{ "@type": "City", name: "Saanich", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Saanich Peninsula" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Saanich and the Saanich Peninsula by phone and video. Saanich has established house neighbourhoods, a rural north and homes with suites. Where the property sits changes what a lender and the District allow.",
  who: "Saanich buyers, downsizers, suite owners, acreage buyers and anyone renewing.",
  next: "Book a 15-minute call and tell Joshua the street, the home type and your plan."
})}
<p>Saanich wraps around the north and east sides of Victoria. Part of it feels like the city, with older house neighbourhoods and the University of Victoria. Farther north it turns rural, with farms and large lots on the Saanich Peninsula. Central Saanich, North Saanich and Sidney sit beside it on the same peninsula.</p>
<p>Joshua Resvick is a mortgage broker at Xeva Mortgage, licensed by BCFSA. He spent five years as an underwriter first, then ten as a broker, and has funded over 1,000 mortgages. His office is in Surrey. He has no Saanich branch and does not need one, because files are handled by phone, video and secure uploads. <a href="/contact/">Book a 15-minute call</a> to begin.</p>

${ratesStrip()}

<h2>Inside the boundary and outside it</h2>
<p>The most useful fact about a Saanich property is whether it is inside the Urban Containment Boundary. The District says the boundary protects about 52 percent of Saanich, keeping growth out of farm and rural land. (District of Saanich, About Saanich Agriculture, read October 2026.)</p>
<p>That line affects what you can do with the home. Saanich says its zoning changes, effective June 30, 2024, allow three to six housing units without rezoning on residential lots inside the boundary. Outside it, a lot is allowed one secondary suite. Larger projects of five or more units need a development permit, and any suite needs a building permit. (District of Saanich, small-scale multi-unit housing page, read October 2026.)</p>
<p>Why does a lender care? Because a buyer's plans often shape the price they pay. If you are counting on a second unit to carry the mortgage, the lender wants proof that it is allowed, built to code and documented. Check the lot with Saanich Planning before you build your budget around it.</p>

<h2>Incomes in Saanich</h2>
<p>Saanich's median household income was $93,000 for 2020, and 17.1 percent of workers were self-employed. Health care was the largest industry, then public administration and retail. (Statistics Canada, 2021 Census Profile, read October 2026). The mix of hospital, government and retail jobs means many files have steady wages. A second group is retired homeowners living on pensions and savings. Lenders can count pension income, and some also count a portion of investment income. The rules differ by lender, so ask early.</p>
${censusTable("saanich")}

<h2>Suites and garden suites in Saanich</h2>
<p>Saanich lists secondary suites as a permitted accessory use in its single-family, duplex and agricultural zones. There can be one suite per main dwelling. It must be inside the main home, and it cannot sit on its own title. A suite needs an occupancy permit from Building Inspections and one extra on-site parking space. Boarding is not allowed in a suite. (District of Saanich, Secondary Suites page, read October 2026.)</p>
<p>Garden suites are the detached version. They are permitted on single-family or duplex lots inside the sewer service area or the boundary. The lot must be at least 400 square metres and 12 metres wide, and the suite can be for family or for rent. Short-term rental and bed-and-breakfast use are not allowed. (District of Saanich, Garden Suites page, read October 2026.) The District has also dropped the owner-occupancy requirement for both kinds of suite, and both can exist on the same property. (District of Saanich, small-scale multi-unit housing page, read October 2026.)</p>
<p>From a lender's side, the question is simple. Is the suite permitted, and is the rent real? Many lenders count a share of documented rent from a permitted suite. The share and the method differ by lender. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains both. Because short-term rental is off the table for garden suites, the <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental page</a> is worth reading if that was your plan.</p>

<h2>Rural Saanich and acreage</h2>
<p>Saanich still has working farmland. Its own agriculture page reports about 1,844 hectares in the Agricultural Land Reserve. (District of Saanich, About Saanich Agriculture, read October 2026.) If you are buying a rural property, the type of land matters as much as the house.</p>
<p>Lenders ask whether the home is mainly a residence or mainly a business. They ask how much of the value is land, and whether the well and septic system work. Many residential lenders cap the land value they count and give little credit to farm buildings. Others are more flexible. Read the <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgage page</a> and name the property type to Joshua before you write an offer.</p>

<h2>Downsizers and retirees</h2>
<p>Some Saanich buyers are selling a larger home and want something smaller. They may bring equity, a pension and no regular salary. Lenders can work with that, but the file looks different. Pension, RRIF withdrawals and investment income are documented in their own ways, and some lenders weigh them more favourably than others.</p>
<p>The <a href="/downsizing-and-your-mortgage/">downsizing page</a> covers the numbers to run first, including what a sale really nets. If you own your home outright and want to tap it, the <a href="/reverse-mortgage-bc/">reverse mortgage page</a> explains the costs and the trade-offs.</p>

<h2>Near the university</h2>
<p>Two kinds of buyer often look at homes near the University of Victoria. One is a household that wants a house with a rentable suite. The other is a family helping a student buy. Both bring paperwork.</p>
<p>A parent who signs on is taking on the whole debt, and it counts against their own borrowing. The <a href="/mortgage-with-a-cosigner/">co-signer page</a> explains the roles, and the <a href="/gifted-down-payment/">gifted down payment page</a> covers the simpler option of a gift instead.</p>

<h2>What Joshua does for Saanich clients</h2>
<ol>
<li><strong>Checks the property first.</strong> Inside or outside the boundary, suite or no suite, house or acreage. Each answer changes the lender list.</li>
<li><strong>Compares in writing.</strong> A <a href="/lender-comparison-report/">Lender Comparison Report</a> sets out the rate, term, penalty method, prepayment privileges and portability for each option.</li>
<li><strong>Coordinates the team.</strong> Your realtor, lawyer or notary and appraiser get what they need from him directly, through secure links.</li>
<li><strong>Looks ahead.</strong> With <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews the mortgage each year and gets in touch before your term ends.</li>
</ol>

${callout("What you pay in Saanich", "<p>For most Saanich files the lender is an A lender, and it pays Joshua. You pay nothing for his service. Rural, unusual-income or credit-challenged files sometimes call for a B or private lender. If yours does, BCFSA's Form 1A lays out any fee in writing before you agree.</p>")}

<h2>Buying, renewing and refinancing</h2>
<p><strong>First-time buyers</strong> in Saanich can stack provincial and federal programs if they meet each test. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows how to line them up.</p>
<p><strong>Renewing owners</strong> should start about four months before maturity. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains the timeline. The <a href="/mortgage-calculators/">mortgage calculators</a> test staying, switching and refinancing on your own numbers.</p>
<p><strong>Business owners</strong> are read through tax returns. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes, and the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> shows how a rate gets set.</p>

<h2>Nearby</h2>
<p>For heritage homes and downtown condos, see the <a href="/mortgage-broker-victoria/">Victoria page</a>. For a bigger move up the Island, see the <a href="/mortgage-broker-nanaimo/">Nanaimo page</a>. Joshua also works with buyers in Central Saanich, North Saanich and Sidney the same way.</p>

<p class="more-links"><strong>Related reading.</strong> Joshua has pages for <a href="/mortgages-for-government-and-city-employees/">government and city employees</a>, <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a> and <a href="/mortgages-for-teachers-and-school-staff/">teachers and school staff</a>. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> work for any Saanich file. To know who pays him, see <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>, or read <a href="/about-joshua-resvick/">about Joshua</a>.</p>

${nearbyCallout("saanich", callout)}

${cta({ title: "Talk to a broker who serves Saanich", text: "Book a 15-minute call. Tell Joshua the property, the plan and how you are paid. You will leave knowing what a lender will ask for first." })}
`;

export default {
  slug: "/mortgage-broker-saanich/",
  h1: "Mortgage broker serving Saanich and the Saanich Peninsula, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves Saanich and the Peninsula by phone and video. Suites, garden suites, acreage, downsizers and renewals, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Saanich", "/mortgage-broker-saanich/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on a Saanich home with a suite?", a: "Yes. If the suite is permitted by the District, with a building permit and an occupancy permit, many lenders count part of the documented rent. The share and the method vary by lender. An unpermitted suite usually cannot be counted, so check the permit history before you make an offer." },
    { q: "Does it matter whether a property is inside the Urban Containment Boundary?", a: "Yes. Saanich allows three to six units on many residential lots inside the boundary, and one secondary suite outside it. If your plan depends on a second unit, confirm the lot's rules with Saanich Planning first, then share that with Joshua so the lender sees the same facts." },
    { q: "Can I finance acreage in rural Saanich?", a: "Often, but not with every lender. Many residential lenders cap the land value they count, give farm buildings little or no value, and want proof that the well and septic work. Land in the Agricultural Land Reserve adds rules. Name the property type early so the financing condition is realistic." },
    { q: "I am retired and selling a larger home. How does a lender see my income?", a: "Lenders can use pension, RRIF withdrawals and investment income, and each is documented its own way. Some lenders weigh these more favourably than others. A broker matches your income mix and your equity to a lender whose policy fits, which matters more than the headline rate." },
    { q: "Do I need to meet Joshua in person?", a: "No. Joshua works from his Surrey office and serves Saanich by phone, video and secure document upload. Your appraiser and lawyer or notary are local to you. BC lenders and rules apply across the province, so a broker's location does not change your options." }
  ]
};
