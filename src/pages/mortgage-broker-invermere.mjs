import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-invermere/#service", name: "Resvick Mortgages, serving Invermere", url: SITE.origin + "/mortgage-broker-invermere/", areaServed: [{ "@type": "City", name: "Invermere", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of East Kootenay" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Invermere and the Columbia Valley by phone and video from his Surrey office. Many homes here are second homes, rentals or have suites. Each use changes how a lender reads the file.",
  who: "Second-home buyers, Alberta and out-of-province buyers, short-term rental owners, suite builders and local business owners.",
  next: "Book a 15-minute call and tell Joshua how you plan to use the home."
})}
<p>Invermere is a small town with a lot of weekend traffic. About 3,917 people lived here in the 2021 Census (Housing Needs Report, November 25, 2024, read October 2026). On a long weekend, many more fill the lake, the golf courses and the trails. A mortgage here often starts with one question. Is this your home, your getaway or your rental?</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He serves Invermere clients online and by phone from his office in Surrey. There is no Invermere branch. You can <a href="/contact/">book a 15-minute call</a> from anywhere in the valley, or from your home in another province.</p>

${ratesStrip()}

<h2>A town where many homes are not lived in all year</h2>
<p>The District's housing report gives a clear picture. It counts 2,238 private dwellings and says 578 of them, about 26 percent, are not occupied by usual residents. About 71 percent of households own, and 29 percent rent. The median household income was about $84,000. Owners sat near $93,000, and renters near $53,200 (Housing Needs Report, November 25, 2024, read October 2026).</p>
<p>Those numbers explain a lot. A good share of buyers do not live here full time. Local renters earn far less than owners, so many locals compete with buyers who have other sources of money. A lender sees that mix too, and it asks what the home is for before it looks at much else.</p>

<h2>Buying a second home or a getaway</h2>
<p>A second home is not treated like the home you live in. Lenders vary, but these points come up often:</p>
<ul>
<li><strong>Down payment.</strong> Insurance for a small down payment is generally for homes you will live in. For a second home, plan on at least 20 percent down. The <a href="/down-payment-guide-bc/">down payment guide</a> shows what counts as a source.</li>
<li><strong>Your main home.</strong> The lender looks at the mortgage on your first property too. Both payments go into your debt ratios.</li>
<li><strong>The plan for the cabin.</strong> A lender may ask if you will rent it, and how often. Say so at the start, because a change later can create problems.</li>
<li><strong>Closing costs.</strong> A second home still pays property transfer tax and legal fees. The <a href="/closing-costs-bc/">closing costs page</a> lists the usual items.</li>
</ul>
<p>Some buyers use equity in their main home as part of the down payment. That can work, but it changes the shape of the file. Joshua walks through the choices before you write an offer.</p>

<h2>Buying from Alberta or another province</h2>
<p>Many valley owners live elsewhere for most of the year. The housing report does not say how many are from Alberta, and Joshua will not guess. What he can say is how the file works.</p>
<ul>
<li><strong>Income.</strong> Pay stubs, an employer letter and Canada Revenue Agency tax documents read the same way in any province. A lender may ask more about how long the job will last.</li>
<li><strong>Your main home.</strong> Its mortgage and property taxes count as debts. If you rent it out, ask early how the lender will count that rent.</li>
<li><strong>Remote closing.</strong> A lawyer in BC can handle signing by courier or video. Plan the timing so you are not rushed.</li>
</ul>
<p>The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists what to gather. A pre-approval before your trip means you can make an offer on your first visit.</p>

<h2>Moving to Invermere: buying a home before or after you arrive</h2>
<p>Many people who search for buying a home in Invermere do not live here yet. Some have a job offer or a remote-work plan. Others want to retire near the lake. Moving to Invermere brings a few mortgage questions that a local buyer never faces.</p>
<ul>
<li><strong>Get pre-approved before your first visit.</strong> Joshua works by phone and video, so you can do this from your kitchen table. See the <a href="/mortgage-pre-approval-bc/">pre-approval page</a> for what to gather. A clear budget lets you act when a home comes up.</li>
<li><strong>Bring income papers from your province.</strong> Pay stubs, an employer letter and tax documents work in any province. If you will work remotely for an employer elsewhere, ask for a letter that says the job continues after the move.</li>
<li><strong>Pick a closing date that fits the move.</strong> Match it to your start date, your move-out date and any probation. Invermere has no local vacancy count, so the town's report uses the province's 1.4 percent rental vacancy rate as a stand-in (Housing Needs Report, November 2024, read October 2026). Rentals may be hard to find, so plan your housing for the days between homes.</li>
<li><strong>Plan for the home you leave.</strong> If it has not sold, you may need to carry two homes for a while. The <a href="/bridge-financing/">bridge financing page</a> explains the options.</li>
</ul>
<p>The valley's small size helps. A few phone calls can line up the lender, the lawyer and the home inspector. Ask your realtor to book a video walk-through when you cannot visit.</p>

<h2>Short-term rentals: 253 listings and a permit system</h2>
<p>The housing report counts 253 active short-term rental listings in November 2024. The report uses AirDNA data. Another page of it shows 259 for August 2024, so treat the number as about 250 (Housing Needs Report, November 2024, read October 2026). That is a lot of listings for a town of under 4,000 people.</p>
<p>The District now regulates them. In early 2024 Council set a two-part system. An operator needs a business licence, and a Temporary Use Permit in single-family and low-density areas. Only one licence or permit is issued per owner. Each unit needs a noise monitoring system. The rules were set to start on May 1, 2024. (District of Invermere, STR Council direction, February 2, 2024, read October 2026). The housing report adds that the District does not require a principal residence.</p>
<p>What does that mean for a buyer? Do not assume a house can be rented by the night because the last owner did it. Ask for the licence, the permit and its end date. Ask what the strata or the title allows. Then ask your broker how a lender will treat the income. Many lenders count short-term rent in a limited way, or not at all. The <a href="/airbnb-and-short-term-rental-mortgages/">short-term rental mortgage page</a> explains the options. The <a href="/investment-property-mortgages-bc/">investment property page</a> covers how ordinary rent is counted.</p>

<h2>Lock-off units, cabins and resort strata</h2>
<p>The valley has many strata homes, and some have a lock-off suite. A lock-off is a part of a unit that can be rented on its own. Lenders and stratas treat these units in different ways, so ask early.</p>
<p>Rural parcels outside the District fall under the Regional District of East Kootenay (RDEK). Its short-term rental permit policy says a permit will not be issued for a cabin, lock-off unit, park model trailer or recreational vehicle. The policy also sends Electoral Area F applications down a different path than most (RDEK, STR permit policy, adopted July 14, 2023, read October 2026). Check the policy again before you buy. A rule that blocks nightly rent changes the value of the unit to you.</p>
<p>For a strata file, a lender may ask for the minutes, the budget and the depreciation report. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> lists the papers.</p>

<h2>Secondary suites after the 2026 change</h2>
<p>A suite can help a local buyer carry a mortgage. The housing report counts about 110 dwellings with suites in 2023, roughly 5 percent of the stock. It also notes that short-term rental demand pulls some suites away from long-term renters (Housing Needs Report, November 2024, read October 2026).</p>
<p>The rules changed in 2026. The District posted a notice for Zoning Amendment Bylaw 1686. It said the change would remove suite size limits, the principal residency rule and the land title covenant. It would also allow suites in more building types where the BC Building Code permits (District of Invermere, Bylaw 1686 notice, February 10, 2026, read October 2026). A local paper reported that Council adopted the changes at its February 24 meeting (Columbia Valley Pioneer, Invermere encourages secondary suites, read October 2026). As drafted, the bylaw allows one suite per parcel (District of Invermere, draft Zoning Amendment Bylaw 1686, read October 2026).</p>
<p>A lender still wants the unit to be legal and the rent to be documented. A permit and a building inspection matter more than a handshake lease. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two methods. Check your own lot with the District before you plan any build.</p>

<h2>Paycheques in the Columbia Valley</h2>
<p>Tourism shapes the local economy. In the 2021 Census, 15 percent of local jobs were in accommodation and food services. Retail had 13 percent, and construction had 12 percent (Housing Needs Report, November 2024, read October 2026). Many people also run their own shops, guiding firms, cleaning crews or trade businesses.</p>
<ul>
<li><strong>Seasonal pay.</strong> Lenders usually want a pattern of about two years in the same kind of work. A hospitality job that returns each summer shows that pattern.</li>
<li><strong>Self-employed owners.</strong> Lenders generally look at two years of tax returns. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how that income is read.</li>
<li><strong>Trades and contractors.</strong> Winter can be slow and summer can be full. The <a href="/mortgage-for-contractors/">contractor mortgage page</a> covers lumpy income.</li>
<li><strong>Remote workers.</strong> A job with a company elsewhere can count. The lender will want proof the job is stable.</li>
</ul>
<p>Joshua spent five years as an underwriter. He knows which lenders accept seasonal, tip and business income, and he lines up the papers before you apply. If you are new to buying, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> shows the programs that can help.</p>

<h2>Acreages, wells and septic</h2>
<p>Outside town, lots get bigger. Many rural homes use a well and a septic system. Lenders often ask for a water test and proof the septic works. Some limit how many acres they will count. Land in the Agricultural Land Reserve adds more rules. The <a href="/farm-and-alr-mortgages-bc/">farm and ALR page</a> sets out the property types.</p>
<p>Cabins and seasonal homes can bring more questions, such as road access in winter and heating. Raise them with your broker before you remove conditions.</p>

<h2>Rules that do not apply here</h2>
<p>Out-of-province and foreign buyers often ask about taxes. Two BC rules are easy to check.</p>
<ul>
<li><strong>The additional property transfer tax.</strong> The Province lists the areas where it applies. The East Kootenay and Invermere are not listed (Province of British Columbia, additional property transfer tax page, read October 2026).</li>
<li><strong>The speculation and vacancy tax.</strong> The East Kootenay and Invermere are not on the taxable list (Province of BC, taxable areas, December 8, 2025, read October 2026).</li>
</ul>
<p>The federal foreign buyer ban works differently. It covers only property inside a census metropolitan area or census agglomeration (Non-Canadians Regulations, section 3(1), Justice Laws, read October 2026). Joshua has not confirmed where each valley address falls. Use CMHC's address lookup for your property, and confirm it with a lawyer. The <a href="/foreign-buyers-bc/">foreign buyers page</a> explains the lender side.</p>
<p>Regular property transfer tax still applies. Lenders also set their own rules for buyers who live outside Canada.</p>

<h2>Beyond the District line</h2>
<p>Buyers search the whole valley. Radium Hot Springs, Windermere, Fairmont Hot Springs and Panorama Mountain Resort all come up in listings. Radium is its own village. The others generally sit outside the District of Invermere, many under the RDEK. Zoning, rental rules and water systems can differ from one to the next, so Joshua starts with the street address.</p>
<p>If you are comparing resort towns, the <a href="/mortgage-broker-whistler/">Whistler page</a> covers a market with nightly-rental condos. The <a href="/mortgage-broker-princeton/">Princeton page</a> covers another small BC town with lake cabins and acreages.</p>

<h2>What Joshua does for Columbia Valley clients</h2>
<ol>
<li><strong>Asks about use first.</strong> Main home, second home, rental or suite. That choice shapes the lender list.</li>
<li><strong>Checks the property early.</strong> Strata rules, permits, water and septic can all change the file.</li>
<li><strong>Writes out the options.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> puts rate, term, penalty method and flexibility side by side.</li>
<li><strong>Stays in touch.</strong> Through <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage every year and calls before it matures.</li>
</ol>

${callout("Who pays for what", "<p>When a Columbia Valley file suits an A lender, that lender pays Joshua and his help costs you nothing. Some second-home, rental or unusual-income files need a B or private lender. In that case BC rules require any fee to you to appear in writing on BCFSA Form 1A before you agree to it.</p>")}

<h2>Buying, renewing and refinancing</h2>
<p>If you already own in the valley, plan your renewal early. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out a timeline. You can test your numbers with the <a href="/mortgage-calculators/">mortgage calculators</a>. To see how a rate is set, read the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

<h2>Who writes this</h2>
<p>This page is a Resvick Mortgages guide for Invermere. Joshua Resvick, a licensed BC broker with Xeva Mortgage, stands behind it. He spent five years as an underwriter before he became a broker, and he has funded over 1,000 mortgages. Each local fact above names its source and was read in October 2026. Lender practice varies, so he confirms it on your file. This page is general information, not legal advice.</p>

${cta({ title: "Talk to a broker who serves Invermere", text: "Book a 15-minute call. Tell Joshua how you plan to use the home and how you earn. You will leave knowing how a lender may read the file and what to gather first." })}
`;

export default {
  slug: "/mortgage-broker-invermere/",
  h1: "Mortgage broker in Invermere, BC: buying a home or moving to the Valley",
  lede: "Buying a home in Invermere, or moving to Invermere? Joshua Resvick, Xeva Mortgage, serves the Columbia Valley from his Surrey office by phone and video. Vacation homes, short-term rentals, suites and rural properties, read the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Invermere", "/mortgage-broker-invermere/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I get a mortgage on a second home or cabin in Invermere?", a: "Yes, often. Lenders vary, but a second home usually needs a larger down payment, and plan on at least 20 percent. The lender also counts the payment on your main home in your debt ratios. Tell Joshua early if you plan to rent the place out, because that changes the file." },
    { q: "Can I rent my Invermere home by the night?", a: "Not always. The District uses a business licence plus a Temporary Use Permit in single-family and low-density areas. Stratas and titles can also say no. Ask for the licence, the permit and its end date before you rely on the income, and know that many lenders count it in a limited way." },
    { q: "I live in Alberta. Can I still buy in the Columbia Valley?", a: "Often yes. Income documents from another province read the same way, and a lawyer in BC can handle signing. The lender will count your main home's mortgage and taxes as debts. A pre-approval before your first trip lets you make an offer with a clear budget." },
    { q: "Can I add a suite to my Invermere home?", a: "Possibly. The District changed its suite rules in 2026, and the notice said size limits and the principal residency rule would be removed. Confirm the details for your lot with the District. A lender counts rent only when the suite is legal and the rent is documented." },
    { q: "Can I buy a home in Invermere before I move there?", a: "Yes, often. Many people get pre-approved by phone or video, then make an offer when they visit or through a realtor. Lenders look at your income, credit and down payment, not where you live today. Ask for a closing date that fits your move and any probation." },
    { q: "I am moving to Invermere. When should I get pre-approved?", a: "As soon as you know your income and budget, and before your first visit. A pre-approval shows your price range and holds a rate for a set time. Bring pay stubs, tax documents and down payment details. If the home you leave is unsold, tell Joshua early." },
    { q: "Do the foreign buyer taxes apply in Invermere?", a: "The province's additional property transfer tax and the speculation and vacancy tax do not list Invermere or the East Kootenay. The federal ban covers only certain census areas, and Joshua has not confirmed where each valley address falls. Check the address and your status with a lawyer before you commit." },
    { q: "How do lenders see tourism or seasonal income?", a: "Lenders vary. Many look for about two years in the same kind of work. Tips and commission are often averaged. Self-employed owners usually show two years of tax returns. Joshua matches the file to a lender before you apply so there are fewer surprises." }
  ]
};
