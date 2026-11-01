import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-keremeos/#service", name: "Resvick Mortgages, serving Keremeos", url: SITE.origin + "/mortgage-broker-keremeos/", areaServed: [{ "@type": "City", name: "Keremeos", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Okanagan-Similkameen" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Keremeos by phone and video from his Surrey office. Most buyers here are retirees, farm families, orchard and vineyard workers, and people priced out of bigger Okanagan towns. You can start the mortgage before you ever drive in.",
  who: "Buyers of village homes, orchards and acreages around Keremeos, and anyone moving to the Lower Similkameen.",
  next: "Book a 15-minute call and tell Joshua where you are moving from and how you are paid."
})}
<p>Keremeos sits beside the Similkameen River, about 45 km south of Penticton. (The Canadian Encyclopedia, Keremeos, read October 2026). The Village calls itself the Orchard Village and says nearly a third of its area is orchards. (Village of Keremeos, Our Community, read October 2026). Fruit stands line the highway, and the valley floor is farmland. A mortgage here often comes with a farm, a farm paycheque, or a move from somewhere bigger.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. He works from his Surrey office and serves Keremeos by phone and video. There is no Keremeos branch. You can <a href="/contact/">book a 15-minute call</a> from your porch or your truck.</p>

${ratesStrip()}

<h2>Moving to Keremeos: buying a home before or after you arrive</h2>
<p>Many people who search for buying a home in Keremeos do not live here yet. Some are retirees who fell for the sunshine. Some have a seasonal job on an orchard or at a winery. Others have sold in Kelowna or the Lower Mainland and want land for less money. Moving to Keremeos brings a few mortgage questions that a local buyer does not face.</p>
<p>Here is an order that tends to work:</p>
<ol>
<li><strong>Get pre-approved before you visit.</strong> It tells you which price range to search and holds a rate for a set time. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what lenders ask for.</li>
<li><strong>Gather your income papers early.</strong> Employees need an offer or employer letter and recent pay stubs. Retirees need pension and account statements. Growers and seasonal workers should have two years of tax returns ready.</li>
<li><strong>Choose a closing date that fits the move.</strong> A long closing lets you finish a season, a lease or a sale. Ask your realtor what the seller can accept.</li>
<li><strong>Plan for the home you leave.</strong> If you own a place elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
</ol>
<p>You do not have to live here to start. Joshua works by phone and video, so a pre-approval can be done from your current home. A realtor can show you the house, and you can sign from anywhere.</p>

<h2>Incomes in Keremeos</h2>
<p>Keremeos is a small village, so its Census counts are small. The 2021 Census puts the median household income at $53,200 for 2020. About 16.8 percent of workers were self-employed, or 90 of 535. Health care was the largest industry with 90 workers, then retail with 80, construction with 60 and manufacturing with 55. (Statistics Canada, 2021 Census Profile, read October 2026). A lower household income can still qualify, since lenders look at your debts and down payment as well. Farm and seasonal pay is read over a longer period, often two years, so bring your tax returns.</p>
${censusTable("keremeos")}

<h2>A small village in a farm valley</h2>
<p>The 2021 Census counted 1,608 people in the Village, up from 1,502 in 2016. Private dwellings grew by 10.5%. Rural Area G, which wraps around the Village, grew by 164 people to 2,298. Cawston, in Area B, grew by 104 to 1,151. (Kelowna Capital News, Census finds steady growth in Keremeos, February 11, 2022, read October 2026).</p>
<p>The mayor at the time said a new subdivision two blocks from his home sold as soon as the roofs went on. He also said fruit land was giving way to housing in places. (Kelowna Capital News, Census finds steady growth in Keremeos, February 11, 2022, read October 2026). That is the small-town pattern: not many homes, steady interest, and fewer choices than a city offers.</p>
<p>The regional housing needs report looks ahead. It projects that the Village needs 107 new homes over five years and 369 over twenty years, a 43% rise in its housing stock. (Regional District of Okanagan-Similkameen, Housing Needs Report 2024, read October 2026). For a buyer, that means supply is tight now and may grow later. It does not predict prices.</p>
<p>Rentals are part of the picture too. A 43-home affordable rental building called Ambrosia, at 714 Veterans Avenue, was built for seniors, families and people with disabilities on low to moderate incomes. The Province and the Lower Similkameen Community Services Society partnered on it, and the Lower Similkameen Indian Band supported it. (Government of British Columbia, Keremeos housing project news release, September 15, 2020, read October 2026). It helps some people, but it does not replace a market with few rentals. If you cannot rent first, you may have to buy first.</p>

<h2>Orchard, vineyard and farm paycheques</h2>
<p>The Village says the local economy has been farm-based since settlers arrived in the mid-1800s. It lists tree fruit, ground crops, grapes and beef cattle. (Village of Keremeos, Our Community, read October 2026). Tourism and wine now sit beside those. The valley has wineries, cideries and about a dozen fruit stands in and around the Village. (Village of Keremeos, Area Attractions, read October 2026).</p>
<p>Lenders read these incomes in different ways:</p>
<ul>
<li><strong>Year-round wage jobs.</strong> A packing house, winery or farm that pays a steady wage is read like any other job. An employer letter and recent pay stubs do most of the work.</li>
<li><strong>Seasonal work.</strong> Pay that stops in winter is harder. Many lenders average income over two years, and some count only the months you are paid. Policies vary, so Joshua checks before you apply.</li>
<li><strong>Owners and growers.</strong> If you run your own orchard or crew, lenders usually want two years of tax returns and often look at net income after expenses. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> explains the routes.</li>
</ul>
<p>Farm worker housing has its own rules. The regional district reviewed how it treats temporary farm worker housing on agricultural land. It proposed that such housing be temporary or easy to remove, and be limited to farm workers. (Regional District of Okanagan-Similkameen, Temporary Farm Labour Housing Review, read October 2026). That matters if you buy land with worker cabins. A lender may not count them as homes or as rent. Ask the regional district what applies to your lot before you make an offer.</p>

<h2>Village lots, benches and orchard land</h2>
<p>A home inside the Village sits on a town lot with municipal services. A home outside it is often on a larger rural lot, and the rules and costs change.</p>
<h3>Homes in the Village</h3>
<p>These are the easiest files. Lenders appraise them against nearby sales. In a small market there may be few recent sales to compare, so the appraiser may reach further back or further out. Lenders vary in how they handle that, and a low appraisal can change your down payment. Ask Joshua about it before you waive conditions.</p>
<h3>Orchards and hobby farms</h3>
<p>Much of the valley is farmland. In May 2022 the Village held a public hearing on applications to exclude land from the Agricultural Land Reserve (ALR). So ALR land sits inside the Village, not only beyond it. (Village of Keremeos, Applications for exclusion from ALR lands, April 25, 2022, read October 2026). Whether land is in the ALR changes what you can build and what a lender will value. A home with a few fruit trees is not the same file as a working orchard. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> explains where residential lending stops.</p>
<h3>Wells and septic</h3>
<p>Outside the Village, many lots rely on a well, a septic system or an irrigation district. Lenders commonly ask for test results and may make an approval depend on them. Budget for the inspections, and see the <a href="/closing-costs-bc/">closing costs page</a>.</p>
<h3>Manufactured homes</h3>
<p>Some buyers look at manufactured homes in parks or on rural lots. The land decides the file. A home on land you own is easier than one on a rented pad, and pad homes often have fewer lenders and age limits. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> covers both cases.</p>
<h3>Homes on Band land</h3>
<p>The Lower Similkameen Indian Band is a member of the Okanagan Nation Alliance, and its community lies on the Similkameen River near Keremeos. (Government of British Columbia, Lower Similkameen Indian Band, read October 2026). Homes on Indian reserve land are held differently from a town lot. This page covers homes off reserve. If a purchase involves reserve land, tell Joshua at the start so he can check what lenders will do.</p>
<h3>Wildfire and insurance</h3>
<p>The Keremeos Creek wildfire of August 2022 put 493 properties under evacuation order and 909 on alert across the regional district. It burned near Olalla and the Highway 3A corridor. (Global News, Keremeos Creek wildfire update, August 10, 2022, read October 2026). Insurers may ask extra questions about rural and hillside homes. Ask for a quote before you remove conditions, because a lender will want proof of insurance before it funds.</p>

<h2>Suites and the 2024 zoning changes</h2>
<p>A legal suite can help carry a mortgage. In 2024 the Village moved to bring its bylaws in line with the provincial small-scale multi-unit housing rules. Zoning Amendment Bylaw 851-06 covers density, dwelling types, setbacks, height, lot coverage and parking in the low-density zones RS1, RS2, RS3 and RD1. Council gave it first reading on April 15, 2024. (Village of Keremeos, Notice of public hearing, April 16, 2024, read October 2026).</p>
<p>The notice does not spell out suite rules, so call the Village before you plan a build. For a lender, the unit must be legal and the rent documented. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two common methods.</p>

<h2>Retirees and downsizers</h2>
<p>An increasing number of retirees have chosen to settle in Keremeos. (The Canadian Encyclopedia, Keremeos, read October 2026). Many arrive with equity from a larger home and no job income. That is a different file from a worker's file.</p>
<p>Lenders commonly count pensions, annuities and registered income from award letters and statements. Some will also consider investment income. A bigger down payment can offset a small income. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> covers timing, and the sale of the old home often decides the order of events. Dry, sunny weather is part of the draw. The Village reports more than 2,600 hours of sunshine and about 50 cm of snow a year. (Village of Keremeos, Our Community, read October 2026).</p>

<h2>Priced out of larger Okanagan towns</h2>
<p>BC Assessment's typical single-family value in the Village was $519,000 for 2026, up 4%. Osoyoos was $639,000 and Princeton was $387,000. (BC Assessment, Southern Interior 2026 Property Assessments, January 2, 2026, read October 2026). These are assessed values, not sale prices, and they move each year. They do show why buyers drive south from Penticton or east from Princeton. Keremeos can sit between the two.</p>
<p>A first-time buyer can use the same BC and federal programs as anyone. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows the order, and the <a href="/down-payment-guide-bc/">down payment guide</a> shows how much to set aside. Test your own numbers in the <a href="/mortgage-calculators/">mortgage calculators</a>, and read the <a href="/mortgage-rates-bc/">BC rates hub</a> to see how a rate is set.</p>

<h2>Cawston, Olalla, Hedley and the surrounding area</h2>
<p>Many searches say Keremeos but mean the wider valley. Cawston sits about five minutes away on Highway 3A and calls itself the Organic Farming Capital of Canada. (Similkameen Valley, Cawston community page, read October 2026). Rural Keremeos, Hedley and Olalla together make up Electoral Area G. (Regional District of Okanagan-Similkameen, Housing Needs Report 2024, read October 2026).</p>
<p>Joshua serves all of them. The first question on a rural property is which government's rules apply, the Village or the regional district. Many buyers also price homes in other towns. The <a href="/mortgage-broker-penticton/">Penticton page</a> covers the South Okanagan, and the <a href="/mortgage-broker-princeton/">Princeton page</a> covers the town about a 40-minute drive west. (Village of Keremeos, Area Attractions, read October 2026).</p>

<h2>How Joshua works with Keremeos clients</h2>
<ol>
<li><strong>Asks how you are paid first.</strong> Wages, seasonal work, a farm, a pension or sale proceeds all point to different lenders.</li>
<li><strong>Checks the property early.</strong> He asks about ALR status, well and septic, and whether it is a pad home or has a suite. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Keremeos files, such as pad homes, new farm income or working orchards, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<p>If a home in the Similkameen sits on First Nation land or leased land, it is a different kind of file. Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a> and <a href="/leasehold-mortgages-bc/">leasehold mortgages</a>.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgage-for-contractors/">contractors and trades</a> and <a href="/farm-and-alr-mortgages-bc/">farm and ALR mortgages</a>. To plan a Keremeos purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

<p>The next towns south and east are Oliver and Osoyoos. Our <a href="/mortgage-broker-osoyoos-oliver/">Osoyoos and Oliver page</a> compares their zoning, rentals and leasehold homes.</p>

${nearbyCallout("keremeos", callout)}

${cta({ title: "Talk to a broker who serves Keremeos", text: "Book a 15-minute call. Share where you are moving from, how you are paid and the kind of home you want. You will leave knowing which lenders fit and what to line up before you move." })}
`;

export default {
  slug: "/mortgage-broker-keremeos/",
  h1: "Mortgage broker in Keremeos, BC: buying a home or moving to Keremeos",
  lede: "Buying a home in Keremeos, or moving to Keremeos? Joshua Resvick, Xeva Mortgage, serves the Lower Similkameen from his Surrey office by phone and video. Orchard pay, retirees, suites and acreages, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Keremeos", "/mortgage-broker-keremeos/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Keremeos before I move there?", a: "Often, yes. Many buyers get pre-approved by phone or video, then make an offer through a realtor, in person or by proxy. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move." },
    { q: "I am moving to Keremeos. When should I get pre-approved?", a: "Before you start visiting homes. A pre-approval shows your price range and holds a rate for a set time. Bring income papers, your down payment details and any sale plans for your old home. Retirees, employees and growers need different papers, so tell Joshua early." },
    { q: "How does a lender count seasonal orchard or vineyard pay?", a: "It depends on the lender. Many average your income over two years, and some count only the months you are paid. A steady wage from one employer helps. Growers and owners usually need two years of tax returns. Joshua checks lender rules before you apply." },
    { q: "Can I get a regular mortgage on an orchard or farm property?", a: "Sometimes. A home on a few acres can finance like a house, but lenders often count only some of the land. A working orchard is usually agricultural lending. The Agricultural Land Reserve limits what you can build. Share the listing with Joshua before you offer." },
    { q: "Can a manufactured home in the Keremeos area be financed?", a: "In some cases. A home on land you own is far easier than one on a rented pad. Pad homes often have fewer lenders, shorter terms and age limits. Joshua checks the land and the home before you make an offer." },
    { q: "Can a suite help me qualify for a Keremeos mortgage?", a: "It can, if the suite is legal and the rent is documented. Many lenders count part of the rent, and an unpermitted unit usually counts for nothing. The Village updated its zoning in 2024, so call the Village before you plan a build." }
  ]
};
