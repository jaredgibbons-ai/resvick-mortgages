import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { cityServiceSchema, servesLine } from "../lib/city.mjs";

const slug = "/mortgage-broker-burnaby/";

const body = `
<h2>Burnaby is a city of four town centres</h2>
<p>Burnaby organizes itself around four town centres, each on SkyTrain: Metrotown, which the city calls its downtown and regional centre; Brentwood in the northwest; Lougheed in the northeast; and Edmonds in the southeast (City of Burnaby). Most of Burnaby's new housing goes up in and around those centres, in concrete towers and the townhouse and low-rise projects at their edges. Between them are the single-family neighbourhoods on the slopes of Burnaby Mountain, Capitol Hill, the Heights, Buckingham and South Slope, where houses are large, lots are deep and a growing number now carry a suite or a laneway home.</p>
<p>That gives a Burnaby mortgage broker two main kinds of file: the strata purchase near a town centre, often a first home or a newcomer's first Canadian property, and the detached house, often a move-up or multigenerational purchase with a suite in the plan. ${servesLine("Burnaby")}</p>

${ratesStrip()}

<h2>Condo and townhouse mortgages near the town centres</h2>
<p>A strata mortgage is approved against your file and the building's. Lenders read the depreciation report, the Form B, the contingency reserve fund and the minutes, and they add a share of the monthly strata fee to your housing costs when they calculate what you can carry. In a tower with amenities and higher fees, that can reduce the approval noticeably. Burnaby also has a steady presale pipeline at Brentwood, Metrotown and Lougheed. A presale is financed at completion, which may be years after the deposit, so the approval that matters is the one available then. The <a href="/presale-mortgages-bc/">presale mortgages guide</a> explains the deposit schedule, assignments and the completion approval.</p>

<h2>Newcomer files</h2>
<p>Burnaby is one of the most common places for newcomers to Canada to buy a first home, near SkyTrain and near the schools, colleges and the university on the mountain. Lenders and the mortgage insurers run programs for buyers who are new to Canada, and they have specific rules on how long you have been in the country, what status you hold, how foreign credit history is treated and how income from abroad or a new Canadian job is documented. Some of these programs allow a smaller down payment than you might expect, and others require more. The <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a> lays out the programs and the documents, and the right lender for a newcomer file is not always the one with the lowest advertised rate.</p>

<h2>Houses, suites and laneway homes</h2>
<p>Burnaby's detached neighbourhoods changed in 2023, when the city approved laneway homes and secondary suites in semi-detached homes as the first phase of its Housing Choices program and began accepting applications that September (City of Burnaby). Laneway homes cannot be stratified or sold separately from the main house, and a semi-detached home may carry one suite in each half. For buyers, that means more Burnaby houses now come with, or can be given, a rental unit.</p>
<p>The mortgage question is how much of that rent a lender will count. Lenders either add a share of the rent to your income or subtract it from your housing costs, and the share varies by lender; a permitted suite with a lease and bank deposits is far easier to count than an unpermitted one. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> works through both methods. If the plan is to add a suite after buying, the <a href="/secondary-suite-refinance/">secondary suite refinance page</a> explains the federal program that allows refinancing to 90 percent of as-improved value for a legal suite.</p>

<h2>Multigenerational and co-buying purchases</h2>
<p>Burnaby's large houses are often bought by more than one household: parents and adult children, siblings, or two couples sharing a home with a suite. Lenders can put several borrowers on one mortgage, and their incomes and debts are combined for qualification, but each person on the mortgage is fully responsible for the whole debt, and ownership shares are a separate legal question for your lawyer. The <a href="/co-buying-a-home/">co-buying guide</a> covers the structures, and the <a href="/mortgage-with-a-cosigner/">co-signer page</a> explains the difference between a co-borrower, a co-signer and a guarantor.</p>

<h2>Renewals and switching</h2>
<p>Burnaby owners renewing a first five-year term often find the renewal letter is not the best offer available. Since late 2024, a straight switch to a different lender at maturity, with no increase in balance or amortization, usually skips the stress test, and the costs of a switch are often covered. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers the timing and the comparison, and the free renewal reminder contacts you six months and 120 days before maturity.</p>

<h2>Income that is not a simple T4</h2>
<p>Burnaby's employers include the institute and the university, the hospital, film and game studios, and a large number of small businesses and professionals. Commission, contract, incorporated and self-employed income are all workable, but lenders read them differently. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains add-backs, dividends and stated-income programs, and when a fee can apply on a non-mainstream file. On a mortgage with a mainstream lender, the lender pays the broker and you pay nothing for the service.</p>

<h2>Working with Joshua from Burnaby</h2>
<ol>
<li><strong>A 15-minute call</strong> to map your goals, your numbers and your timeline.</li>
<li><strong>An underwriter's read of your file</strong> before a lender sees it, which is where problems are cheapest to fix.</li>
<li><strong>A written Lender Comparison Report</strong> of real options: rate, term, penalty method, prepayment room and portability.</li>
<li><strong><a href="/mortgage-aftercare-program/">Resvick Aftercare</a></strong> after funding, with annual reviews and a renewal plan six months out.</li>
</ol>
<p>The <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set and why the lowest number is rarely the cheapest mortgage. The <a href="/mortgage-calculators/">calculators</a> let you test a payment with strata fees and the CMHC premium, see how a suite changes affordability, and estimate the cash you need on completion. Every result shows immediately with no email required.</p>

${callout("Nearby", `<p>Joshua also serves <a href="/mortgage-broker-vancouver/">Vancouver</a> and <a href="/mortgage-broker-coquitlam/">Coquitlam</a> and the Tri-Cities, New Westminster and the rest of Metro Vancouver. The Google Business Profile for Resvick Mortgages shows the Surrey office and the BC-wide service area; a review from a Burnaby client helps the next buyer find him.</p>`)}

${cta({ title: "Buying near Metrotown or Brentwood, or renewing in the Heights?", text: "Book a 15-minute call. You will leave knowing what is realistic and what to do first." })}
<p>First purchase? Start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>. Anything else, use the <a href="/contact/">contact page</a>.</p>
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
