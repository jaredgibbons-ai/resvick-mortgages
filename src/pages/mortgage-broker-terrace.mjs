import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
import { censusTable } from "../lib/city-census.mjs";
import { nearbyCallout } from "../lib/nearby.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-terrace/#service", name: "Resvick Mortgages, serving Terrace", url: SITE.origin + "/mortgage-broker-terrace/", areaServed: [{ "@type": "City", name: "Terrace", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Kitimat-Stikine" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Terrace by phone and video from his Surrey office. Terrace is a hub for big northwest projects, and a move here often means a tight rental market. Project, contract and shift pay can all work. The order of the steps matters.",
  who: "Newcomers to the northwest, project and contract workers, hospital and college staff, and buyers of older or manufactured homes in the Terrace area.",
  next: "Book a 15-minute call and tell Joshua when you arrive and how you are paid."
})}
<p>Terrace sits on the Skeena River where Highway 16 meets Highway 37. It is the hub for a wide stretch of the northwest. Kitimat is about 63 km south on Highway 37. (Wikipedia, Kitimat, read October 2026). That reach is why people move to Terrace for work, and why they often arrive in a hurry.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. More than 1,000 mortgages have been funded through him. He works from his Surrey office and serves Terrace by phone, video and secure document upload. There is no Terrace branch. You can <a href="/contact/">book a 15-minute call</a> before you pack a single box.</p>

${ratesStrip()}

<h2>A hub for work that happens elsewhere</h2>
<p>The City's 2024 Housing Needs Report calls Terrace a service hub for large industrial projects in surrounding communities. The report counted about 12,600 people in 2021. (City of Terrace, Housing Needs Report, December 2024, read October 2026).</p>
<p>Three pieces of the local picture matter to a lender and to you:</p>
<ul>
<li><strong>Power line work.</strong> A groundbreaking on September 3, 2026 marked the start of the North Coast Transmission Line. The line is to run from Prince George to Terrace. The governments expect about 1,400 jobs at the peak of construction. The line is meant to power the Ksi Lisims LNG facility and mining in the Golden Triangle. (Energy Now, Construction begins on major B.C. transmission line, September 2026, read October 2026).</li>
<li><strong>A new hospital.</strong> Mills Memorial Hospital opened in its new building on November 24, 2024, with 82 private rooms. (Northern Health, Mills Memorial Hospital Replacement, read October 2026).</li>
<li><strong>A college campus.</strong> Coast Mountain College runs a Terrace campus with trades, nursing and university courses, and a student residence. (Coast Mountain College, Terrace campus, read October 2026).</li>
</ul>
<p>Do not assume every new job lands in Terrace. The first phase of the power line is a 165 km stretch near Prince George. The article does not say where crews will live. A job tied to the line may be a rotation, a camp or a contract with an out-of-town employer. Each one reads differently to a lender, so the details matter more than the headline.</p>

<h2>Incomes in Terrace</h2>
<p>The 2021 Census puts Terrace's median household income at $90,000 for 2020. About 12.1 percent of workers were self-employed, or 780 of 6,470. Health care was the largest industry with 1,165 workers. Retail had 805, construction 650 and educational services 605. (Statistics Canada, 2021 Census Profile, read October 2026). Health care and schools bring steady salaried files. Construction brings contract and project pay, which lenders read through your tax returns. Joshua can sort out which type your file is before he picks a lender.</p>
${censusTable("terrace")}

<h2>How a lender reads project, contract and rotation pay</h2>
<p>Terrace files often mix pay types. Here is how lenders commonly see them. Policies vary, so Joshua checks each one before he picks a lender.</p>
<ul>
<li><strong>Permanent employee with a signed offer.</strong> This is the simplest file. Many lenders want probation done before funding. Some will look sooner if the new job matches your last one.</li>
<li><strong>Fixed-term or project contract.</strong> Lenders look at the contract length, whether it has renewed before and how long you have worked in the trade. A long record in the same trade helps a lot. A first-ever contract is harder.</li>
<li><strong>Rotation or camp work.</strong> Base pay is clean. Allowances for travel or living out may or may not count. Ask before you assume.</li>
<li><strong>Overtime, shift premiums and bonuses.</strong> These are variable. Many lenders average them over two years, so a new hire often qualifies on base pay first.</li>
<li><strong>Paid by invoice.</strong> If you run your own company, lenders read your tax returns, not your invoices. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> and the <a href="/mortgage-for-contractors/">contractor page</a> explain the routes.</li>
</ul>
<p>The papers that help most are an offer letter, early pay stubs, past T4s and a letter from the employer. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what to gather. If you quit a job to start your own company, read the <a href="/newly-self-employed-mortgage/">newly self-employed page</a> first.</p>
<p>The same report says international migration was the main source of new residents in Terrace. (City of Terrace, Housing Needs Report, December 2024, read October 2026). If you are new to Canada, a short credit history is the usual hurdle, and the <a href="/new-to-canada-mortgage/">new to Canada page</a> covers it.</p>

<h2>The rental squeeze, and buying while you relocate</h2>
<p>Renting first is the easy plan, but Terrace has few rentals. The City's report estimated overall rental vacancy at 0.8% in July 2024. It also says the primary rental stock fell from 595 units in 2016 to 410 in 2023. (City of Terrace, Housing Needs Report, December 2024, read October 2026).</p>
<p>The report adds that residents and service providers say rents are pushed up by workers who live in Terrace but work elsewhere. It estimates the city needs 793 more homes over five years. (City of Terrace, Housing Needs Report, December 2024, read October 2026).</p>
<p>With so little to rent, some new arrivals decide to buy. If you are a first-time buyer, the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> sets out the programs and their order.</p>

<h2>Moving to Terrace: buying a home before or after you arrive</h2>
<p>Many people who search for buying a home in Terrace are not living here yet. They have a job offer, a start date and a short window to find a place. Moving to Terrace for work often means a hospital, college or project employer, and a rental market with little room.</p>
<p>Here is an order that tends to work:</p>
<ol>
<li><strong>Get pre-approved before you visit.</strong> A pre-approval sets your price range and holds a rate for a set time. You can look at homes without a clock on your back. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> shows what lenders ask for.</li>
<li><strong>Bring your offer letter and pay stubs.</strong> A signed offer, your pay rate and your start date matter most. If you worked in the same trade before, add past stubs and T4s.</li>
<li><strong>Ask about probation.</strong> Many lenders want it finished before they fund. Some will look sooner in certain cases. Policies vary, so raise it early.</li>
<li><strong>Time your closing to your move.</strong> If the seller can wait, pick a date after you start work and after probation ends.</li>
<li><strong>Plan for the home you leave.</strong> If you own a place elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
<li><strong>Set aside cash for more than the down payment.</strong> The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs page</a> show the full list. Moving costs come on top.</li>
<li><strong>Hold off on new debt.</strong> A truck loan before funding can change what you qualify for. The <a href="/car-loan-affecting-mortgage/">car loan page</a> shows how.</li>
</ol>
<p>You do not have to live in Terrace to start. Joshua works by phone and video, so a pre-approval can be done before you drive up Highway 16. Moving from another province changes little. Lenders ask for the same papers from a different employer and bank.</p>

<h2>What Terrace homes are, and what lenders ask</h2>
<p>The Housing Needs Report puts single detached homes at about 60% of occupied dwellings. Mobile homes are 7%, or 325 of 4,870. Nearly half of occupied homes were built in the 1960s and 1970s. About 70% of households own. (City of Terrace, Housing Needs Report, December 2024, read October 2026).</p>
<h3>Older homes</h3>
<p>A 1960s or 1970s house can be a fine buy. Lenders and insurers look at the roof, wiring, plumbing, heating and any past updates. Ask the inspector about each. Ask your insurer about the home before you remove conditions. Some buyers also add a renovation budget, and the <a href="/purchase-plus-improvements/">purchase plus improvements page</a> shows how that works.</p>
<h3>Manufactured homes</h3>
<p>The big split is the land. A home on land you own is a far easier file than a home on a rented pad. Pad homes often have fewer lenders, shorter terms and age limits. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> explains both cases.</p>
<h3>Larger lots on the edge of town</h3>
<p>Some lots on the edge of town are bigger and may rely on a well or septic system. Many residential lenders count only a set amount of land, and some will not lend where the land is farmed as a business. Land in the Agricultural Land Reserve adds rules. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> sets out the property types.</p>
<h3>First Nations land</h3>
<p>The Housing Needs Report opens by naming Kitsumkalum and Kitselas on Ts'msyen territory. (City of Terrace, Housing Needs Report, December 2024, read October 2026). If a listing is on First Nations land, the title may be a certificate of possession or a leasehold. Many lenders will not fund those, and policies differ. Ask your realtor about title before you fall for a house.</p>

<h2>Suites and extra units in Terrace</h2>
<p>A legal suite can help carry a mortgage. The City's suite fact sheet, last updated in April 2020, allows one secondary suite per lot. It caps the suite at 90 square metres or 40% of the home's floor area, whichever is less. It also asks for one extra off-street parking space. (City of Terrace, Secondary Suites fact sheet DS-03, April 2020, read October 2026).</p>
<p>The rules have moved since then. On June 24, 2024, the City adopted a zoning change that allows up to four dwelling units on most low-density residential parcels. (City of Terrace, Zoning bylaw amendment passed, read October 2026). Lots with no municipal water or sewer, or very large lots, may be held to fewer units. Confirm both the zone and the lot with the City's planning office before you plan a build.</p>
<p>For a lender, the unit must be legal, and the rent must be documented. Many lenders then count part of the rent. An unpermitted unit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two methods. The <a href="/secondary-suite-refinance/">secondary suite refinance page</a> helps if you add a unit after you buy.</p>

<h2>Hospital and college staff</h2>
<p>Health care and teaching jobs are salaried and easy to document. For these files, the real choices are about term, penalty method and portability. If you plan to move between northern towns, a portable mortgage is worth a look. The <a href="/mortgages-for-nurses-and-healthcare-workers/">health care workers page</a> lists the common situations. Joshua also reviews the <a href="/porting-your-mortgage/">porting rules</a> with clients who may move on.</p>

<h2>When a mill or plant job ends</h2>
<p>Forestry has had a rough stretch in the area. Skeena Sawmills was reported closed and in receivership in 2023. (Wood Business, Offers now open for closed Skeena sawmill and pellet plant, November 14, 2023, read October 2026). Current mill status may have changed, so check local news.</p>
<p>If you left a long job and started a new one, a lender looks at the gap and the new pay. Keep your layoff or severance papers, plus your new offer. A broker can explain the break in the story before the lender asks. The <a href="/mortgage-renewal-bc/">renewal guide</a> also covers renewing when income has changed.</p>

<h2>How Joshua works with Terrace clients</h2>
<ol>
<li><strong>Asks about your arrival date first.</strong> Probation, your last job and your pay type decide which lenders to approach.</li>
<li><strong>Checks the property early.</strong> He asks if it is on a pad, on larger land, on well and septic, or on First Nations land. These facts steer the lender choice before you fall in love with a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Terrace files, such as pad homes or very new income, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<h2>Buying, renewing and refinancing in the northwest</h2>
<p><strong>Calculators.</strong> The <a href="/mortgage-calculators/">mortgage calculators</a> let you test your own numbers before you call.</p>
<p><strong>Renewals.</strong> Early planning pays off. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline.</p>
<p><strong>Rates.</strong> The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set, and why the lowest rate on a page is not always the best deal.</p>

<h2>Close to Terrace</h2>
<p>Terrace buyers often compare homes in other northern towns. The <a href="/mortgage-broker-prince-george/">Prince George page</a> covers the northern service centre, where resource, rotation and seasonal pay are read in a similar way.</p>

<p>If a home near Terrace sits on First Nation land, it is financed differently from other land. Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</p>

<p class="more-links"><strong>Related reading.</strong> Joshua has pages for <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>, <a href="/mortgages-for-truckers-and-owner-operators/">truckers and owner-operators</a> and <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>. The <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a> work for any Terrace file. To know who pays him, see <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>, or read <a href="/about-joshua-resvick/">about Joshua</a>.</p>

<p>If you are comparing the coast, Joshua also serves <a href="/mortgage-broker-prince-rupert/">Prince Rupert</a> and Port Edward, where port work and older homes shape the files.</p>

${nearbyCallout("terrace", callout)}

${cta({ title: "Talk to a broker who serves Terrace", text: "Book a 15-minute call. Share your arrival date, how you are paid and the kind of home you want. You will leave knowing which lenders fit and what to line up before you move." })}
`;

export default {
  slug: "/mortgage-broker-terrace/",
  h1: "Mortgage broker in Terrace, BC: buying a home or moving to Terrace",
  lede: "Buying a home in Terrace, or moving to Terrace for work? Joshua Resvick, Xeva Mortgage, serves Terrace from his Surrey office by phone and video. Project and contract pay, a tight rental market, older homes and suites, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Terrace", "/mortgage-broker-terrace/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "I'm moving to Terrace for a contract job. Can I get a mortgage?", a: "Often yes, but lenders look at the contract closely. They check its length, whether it has renewed and how long you have worked in the trade. A permanent offer is simpler than a first contract. Joshua checks which lenders fit your pay type before you make an offer, so you know your options early." },
    { q: "Should I buy in Terrace before I arrive, since rentals are scarce?", a: "Not always, but rentals are tight. The City's 2024 report estimated overall vacancy at 0.8% in July 2024. A pre-approval before you move lets you shop with a clear budget. Keep your down payment, closing costs and employer letter ready, and talk to your realtor about a closing date that fits your start date." },
    { q: "Can I buy a home in Terrace before I move there?", a: "Yes, you can start early. Joshua works by phone and video, so a pre-approval can be done before you visit. Lenders will want your offer letter, start date and pay stubs. Many want probation finished before funding, so ask your realtor about a closing date that follows your start." },
    { q: "I am moving to Terrace for a new job. When should I get pre-approved?", a: "As soon as you have a signed offer letter. A pre-approval shows your price range and holds a rate for a set time. Bring the offer, your start date, recent pay stubs and down payment details. If you are on probation, tell Joshua early so he can plan around it." },
    { q: "How will a lender count overtime, camp pay or travel allowances?", a: "Base wage is usually counted once employment is confirmed. Overtime, premiums and bonuses are variable, so many lenders average them over two years. Allowances may or may not count. Policies vary by lender, and Joshua shows you the file with and without the extras." },
    { q: "Can I get a mortgage on a manufactured home in Terrace?", a: "Yes, in some cases, but the land decides. A manufactured home on land you own is a far easier file. A home on a rented pad has fewer lenders, shorter terms and age limits. Pad rent and park rules also affect the file. Joshua checks this before you make an offer." },
    { q: "Does a house built in the 1960s or 1970s cause problems with a lender?", a: "Not by itself. Lenders and insurers focus on the roof, wiring, plumbing and heating, and on the condition of the home. A good inspection helps. Ask your insurer about the home before you remove conditions, and speak to Joshua if the repairs need to be funded." },
    { q: "Can I add a suite or a second unit to a Terrace home?", a: "Possibly. The City's older fact sheet allows one suite per lot, and a 2024 zoning change allows up to four units on most low-density lots. Lots without municipal water or sewer may be limited. Confirm your lot with the City's planning office. A legal, documented unit can help you qualify." }
  ]
};
