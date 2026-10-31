import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema } from "../lib/city.mjs";
import { short } from "../lib/short.mjs";

const slug = "/mortgage-broker-burnaby/";

const body = `
${short({
  answer: "Joshua Resvick serves Burnaby online and by phone from his Surrey office. Most Burnaby files are either a condo or townhouse near a town centre, or a house with a suite or laneway home.",
  who: "Burnaby buyers, newcomers to Canada buying a first home, multigenerational families and owners coming up for renewal.",
  next: "Book a 15-minute call, or start with the <a href=\"/first-time-home-buyer-bc/\">first-time home buyer guide</a> if this is your first purchase."
})}
<h2>Burnaby is a city of four town centres</h2>
<p>Burnaby is built around four town centres, each on SkyTrain. Metrotown is the downtown and regional centre. Brentwood is in the northwest, Lougheed in the northeast and Edmonds in the southeast (City of Burnaby).</p>
<p>Most of Burnaby's new housing goes up in and around those centres. That means concrete towers, plus townhouses and low-rises at the edges.</p>
<p>Between them are the single-family neighbourhoods. Think of the slopes of Burnaby Mountain, Capitol Hill, the Heights, Buckingham and South Slope. Houses there are big, lots are deep, and more of them now have a suite or a laneway home.</p>
<p>So a Burnaby broker sees two main kinds of file. One is the strata purchase near a town centre, often a first home or a newcomer's first Canadian property. The other is the detached house, often a move-up or multigenerational purchase with a suite in the plan.</p>
<p>Joshua Resvick serves Burnaby from his office in Surrey, by phone, video and secure document upload. There's no Burnaby branch, and you never need to visit an office. Every step is done online, and your lawyer or notary handles the signing near you.</p>

${ratesStrip()}

<h2>Incomes in Burnaby</h2>
<p>In the 2021 Census, Burnaby's median household income was $83,000 for 2020. The self-employed made up 14.8 percent of workers. The largest industry was professional, scientific and technical services, followed by retail and health care. (Statistics Canada, 2021 Census Profile, read October 2026). A city led by office and professional jobs tends to bring salaried files, plus a good number of consultants who invoice through a company. Salaried files are simpler. A company owner may need extra paperwork, and lenders differ on what they accept.</p>

<h2>Condo and townhouse mortgages near the town centres</h2>
<p>A strata mortgage is approved on your file and on the building. Lenders read the depreciation report, the Form B, the contingency reserve fund and the minutes.</p>
<p>They also add a share of the monthly strata fee to your housing costs when they work out what you can carry. In a tower with amenities and higher fees, that can cut the approval noticeably.</p>
<p>Burnaby also has a steady flow of presales at Brentwood, Metrotown and Lougheed. A presale is financed at completion, which may be years after the deposit. So the approval that counts is the one you can get then. The <a href="/presale-mortgages-bc/">presale mortgages guide</a> explains the deposit schedule, assignments and the completion approval.</p>

<h2>Newcomer files</h2>
<p>Burnaby is one of the most common places for newcomers to Canada to buy a first home. It's near SkyTrain, schools, colleges and the university on the mountain.</p>
<p>Lenders and the mortgage insurers run programs for buyers who are new to Canada. They have rules on how long you've been here and what status you hold. They also cover how foreign credit history is treated, and how income from abroad or a new Canadian job is documented.</p>
<p>Some of these programs allow a smaller down payment than you might expect. Others require more. The <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a> lays out the programs and the documents. For a newcomer file, the right lender isn't always the one with the lowest advertised rate.</p>

<h2>Houses, suites and laneway homes</h2>
<p>Burnaby's detached neighbourhoods changed in 2023. The city approved laneway homes, and suites in semi-detached homes, as the first phase of its Housing Choices program. It began taking applications that September (City of Burnaby).</p>
<p>Laneway homes can't be stratified or sold apart from the main house. A semi-detached home may have one suite in each half. For buyers, that means more Burnaby houses now come with, or can get, a rental unit.</p>
<p>The mortgage question is how much of that rent a lender will count. Lenders either add a share of the rent to your income, or subtract it from your housing costs. The share varies by lender. A permitted suite with a lease and bank deposits is far easier to count than an unpermitted one.</p>
<p>The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods. Planning to add a suite after you buy? The <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explains the federal program. It lets you refinance up to 90 percent of the finished value for a legal suite.</p>

<h2>Multigenerational and co-buying purchases</h2>
<p>Burnaby's big houses are often bought by more than one household. That could be parents and adult children, siblings, or two couples sharing a home with a suite.</p>
<p>Lenders can put several borrowers on one mortgage. Their incomes and debts are combined to qualify. But each person on the mortgage is responsible for the whole debt. Ownership shares are a separate legal question for your lawyer.</p>
<p>The <a href="/co-buying-a-home/">co-buying guide</a> covers the setups. The <a href="/mortgage-with-a-cosigner/">co-signer page</a> explains the difference between a co-borrower, a co-signer and a guarantor.</p>

<h2>Renewals and switching</h2>
<p>Burnaby owners renewing a first five-year term often find the renewal letter isn't the best offer out there.</p>
<p>Since late 2024, a straight switch to another lender at maturity usually skips the stress test. That's as long as the balance and amortization don't go up. Switch costs are often covered too.</p>
<p>The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the timing and how to compare. The free renewal reminder contacts you six months and 120 days before maturity.</p>

<h2>Income that is not a simple T4</h2>
<p>Burnaby's employers include BCIT and the university, the hospital, and film and game studios. There are also many small businesses and professionals.</p>
<p>Commission, contract, incorporated and self-employed income all work, but lenders read them differently. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, dividends and stated-income programs. It also covers when a fee can apply on a non-mainstream file.</p>
<p>On a mortgage with a mainstream lender, the lender pays the broker. You pay nothing for the service.</p>

<h2>Working with Joshua from Burnaby</h2>
<ol>
<li><strong>A 15-minute call</strong> to map your goals, your numbers and your timeline.</li>
<li><strong>An underwriter's read of your file</strong> before a lender sees it. That's where problems are cheapest to fix.</li>
<li><strong>A written Lender Comparison Report</strong> of real options: rate, term, penalty method, prepayment room and portability.</li>
<li><strong><a href="/mortgage-aftercare-program/">Resvick Aftercare</a></strong> after funding, with annual reviews and a renewal plan six months out.</li>
</ol>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set, and why the lowest number is rarely the cheapest mortgage.</p>
<p>The <a href="/mortgage-calculators/">calculators</a> let you test a payment with strata fees and the CMHC premium. You can see how a suite changes affordability, and estimate the cash you need on completion. Every result shows right away, with no email needed.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-vancouver/">Vancouver</a>, <a href="/mortgage-broker-coquitlam/">Coquitlam</a> and the Tri-Cities. He serves New Westminster and the rest of Metro Vancouver too. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area. A review from a Burnaby client helps the next buyer find him.</p>`)}

${cta({ title: "Buying near Metrotown or Brentwood, or renewing in the Heights?", text: "Book a 15-minute call. You'll leave knowing what's realistic and what to do first." })}
<p>First purchase? Start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>. For anything else, use the <a href="/contact/">contact page</a>.</p>
`;

export default {
  slug,
  h1: "Mortgage broker serving Burnaby, BC",
  lede: "Tower condos at the four town centres, newcomer first purchases, and big houses with suites and laneway homes. Joshua Resvick serves Burnaby from his Surrey office, online and by phone.",
  crumbs: [["Home", "/"], ["Burnaby", slug]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [cityServiceSchema(slug, "Burnaby", ["New Westminster"])],
  faqs: [
    { q: "I am new to Canada and want to buy in Burnaby. Is that possible?", a: "Often, yes. Lenders and mortgage insurers run programs for newcomers with rules on your status, how long you have been in Canada, how foreign credit is treated and how income is documented, and some allow a smaller down payment than you might expect. The new to Canada page explains the programs and the documents to gather first." },
    { q: "Why do high strata fees matter to my Burnaby condo approval?", a: "Lenders add a share of the monthly strata fee to your housing costs when they calculate your debt service ratios, so a tower with high fees reduces what you qualify for compared with a lower-fee building at the same price. The building's reserve fund and any special levies also affect which lenders will approve the unit." },
    { q: "Can I use laneway home rent to qualify in Burnaby?", a: "Usually some of it, if the laneway home is permitted and the rent is documented. Burnaby has allowed laneway homes since 2023, and lenders either add a share of the rent to your income or subtract it from your housing costs. The share varies by lender, which is why the choice of lender matters on a house with a rental unit." },
    { q: "Can my parents and I buy a Burnaby house together?", a: "Yes. Lenders can place several borrowers on one mortgage and combine incomes and debts for qualification. Everyone on the mortgage is responsible for the whole debt, and the ownership shares are set separately by your lawyer. The co-buying guide covers the common structures and what to agree on before you buy." },
    { q: "Do I need to visit an office to work with Joshua?", a: "No. His office is in Surrey, and Burnaby clients work with him by phone, video and secure document upload. Your lawyer or notary handles the signing in Burnaby. Everything from the first call to the funded mortgage can be done without a visit, and the service is the same as for a client next door to the office." }
  ]
};
