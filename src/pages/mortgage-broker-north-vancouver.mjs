import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-north-vancouver/#service", name: "Resvick Mortgages, serving North Vancouver", url: SITE.origin + "/mortgage-broker-north-vancouver/", areaServed: [{ "@type": "City", name: "North Vancouver", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "City", name: "West Vancouver", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }] };

const body = `
${short({
  answer: "Joshua Resvick serves the City and the District of North Vancouver, and West Vancouver, by phone and video from his Surrey office. On the North Shore, the price, the building and the legal status of any suite shape the file.",
  who: "North Shore buyers, condo owners, owners with a suite, and long-time homeowners with equity.",
  next: "Book a 15-minute call and tell Joshua the property and the price range."
})}
<p>North Vancouver is the part of the Lower Mainland where the price is often the first question. It's also where a lender's eye lands on the building, the strata and the suite. Those details move a file more than they do in most cities.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He works with North Vancouver and West Vancouver clients from his Surrey office, by phone and video, and there is no North Shore branch. He spent five years as an underwriter and has funded over 1,000 mortgages. You can <a href="/contact/">book a 15-minute call</a> to begin.</p>

${ratesStrip()}

<h2>Two North Vancouvers, and why the address matters</h2>
<p>North Vancouver is two separate municipalities. The City of North Vancouver covers Lower Lonsdale, Central Lonsdale and the waterfront around Lonsdale Quay, where the SeaBus runs to downtown. The District of North Vancouver is much bigger. It includes Lynn Valley, Edgemont, Capilano and Deep Cove. West Vancouver is a third municipality again.</p>
<p>Each one writes its own bylaws. The rules for suites, coach houses and renovation permits can differ from one side of the border to the other. For a lender, that matters when part of your income or value comes from a suite. Your file starts with the exact address.</p>
<p>Joshua works with buyers in all three. He checks which rules apply before you write an offer, not after.</p>

<h2>Incomes in the two North Vancouvers</h2>
<p>The City and the District of North Vancouver are counted separately in the 2021 Census. The District had the highest median household income of any area on this site at $123,000 for 2020, and 22.2 percent of its workers were self-employed. The City's median was $86,000, with 17.4 percent self-employed. Professional services led in both, followed by health care and retail. (Statistics Canada, 2021 Census Profile, read October 2026). A high household income can still fall short of what a North Shore detached home costs. Lenders also look at your down payment source and your debts. Joshua checks the numbers with you before you make an offer.</p>

<h2>When the price is above the insured limit</h2>
<p>An insured mortgage allows less than 20 percent down. It is only available when the home is priced at $1.5 million or less. Above that, the minimum down payment is 20 percent of the full price. Below it, the minimum is 5 percent on the first $500,000 and 10 percent on the part from $500,000 to $1.5 million.</p>
<p>That gap is large. A $1.2 million home needs at least $95,000 down. A $1.6 million home needs $320,000. Check the price against the cap first, because it decides which lenders and which rates you can use.</p>
<p>The <a href="/down-payment-guide-bc/">down payment guide</a> walks through the layers. The <a href="/buying-with-5-percent-down/">5 percent down page</a> explains what the low end really costs. The guide on <a href="/guides/thirty-year-amortization-and-the-1-5-million-cap/">30-year amortization and the $1.5 million cap</a> covers the December 2024 changes.</p>

<h2>Condos and townhouses: the lender reads the building too</h2>
<p>A large share of North Shore homes are strata units. When you buy one, the lender approves two things: you, and the building.</p>
<p>Lenders commonly look at the strata minutes, the budget, the contingency reserve fund and any special assessments. Many also ask about a depreciation report, the age of the building, and bylaws that limit rentals. A building with a past envelope repair, or a pending one, can change both the approval and the lender.</p>
<p>Not every lender reads these documents the same way. A building one lender declines may be fine for another. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> explains what to ask for before you remove conditions.</p>
<p>Joshua reviews the strata package alongside your own documents, so surprises come out while you still have time to act.</p>

<h2>Suites, coach houses and the legal question</h2>
<p>Both municipalities allow a suite in a single-family home, and both let a coach house sit on the same lot as a suite. The paperwork differs from one side of the border to the other, so the address comes first.</p>
<p>In the City, a suite added to an existing building needs its own building permit application. The owner must live on the property, and a single-family lot may have one suite, with or without a coach house (City of North Vancouver, Secondary Suites, read October 2026). A coach house needs a development permit and a building permit, and it cannot be stratified (City of North Vancouver, Coach House, read October 2026). Lots in the City's Ground Oriented Zone, adopted December 8, 2025, follow different rules. It allows up to four homes per lot, or six in central areas (City of North Vancouver, Ground Oriented Housing, read October 2026).</p>
<p>In the District, the zoning bylaw allows suites in single-family homes, with some exceptions (District of North Vancouver, Build or register a secondary suite, read October 2026). Its zoning guide lists creating a suite as work that needs a building permit. It also says the owner must live in either the suite or the main home (District of North Vancouver, RS1-5 Zoning Guide, April 2026, read October 2026). The permit checklist asks for a separate electrical panel for the suite. Its location is checked at inspection (District of North Vancouver, Building Permit Requirements Questionnaire, January 2026, read October 2026). A suite may share a lot with a coach house (District of North Vancouver, Coach House How-To Guide, June 2026, read October 2026).</p>
<p>In the District, "registered" does not mean "legal". The District asks every home with a suite to register it so the extra water and sewer charge can be collected. That charge applies whether or not the suite was permitted. The District says it does not inspect a suite when it is registered, and the owner stays responsible for its safety and legal compliance. (District of North Vancouver, Build or register a secondary suite, updated January 30, 2026, read October 2026). So a utility account is not proof of a legal suite. Ask the seller for the building permit and the inspection records instead of relying on a bill.</p>
<p>A new suite in the District is a different path. You need a building permit first. The suite can be up to 130 square metres or 49% of the main house, whichever is less, and the lot needs three off-street parking spaces. A suite cannot be sold or stratified separately. (District of North Vancouver, Build or register a secondary suite, updated January 30, 2026, read October 2026).</p>
<p>Zoning is also moving. The City changed 19 zones in June 2025 under the province's small-scale multi-unit housing rules. A provincial law passed on November 27, 2025 requires more rezoning (City of North Vancouver, Small-Scale Multi-Unit Housing Changes, read October 2026). The District keeps its own page on the provincial housing changes (District of North Vancouver, Provincial housing legislation, read October 2026). Check what your lot allows today.</p>
<p>This matters because lenders usually count rent only from a legal, documented suite. An unpermitted one often can't count. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> explains the offset and add-back methods. Confirm the current rules with the City or the District before you rely on a unit being legal.</p>

<h2>Long-time owners: equity, renewals and the next move</h2>
<p>Many North Shore owners bought years ago and now hold a lot of equity. That opens choices, and each one has a cost.</p>
<ul>
<li><strong>Renew and compare.</strong> The lender's letter is an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> shows how to compare it with other lenders.</li>
<li><strong>Add a credit line.</strong> A <a href="/heloc-bc/">HELOC</a> is capped at 65 percent of the home's value on its own, and 80 percent combined with the mortgage. A <a href="/readvanceable-mortgage/">readvanceable mortgage</a> bundles the two.</li>
<li><strong>Downsize.</strong> Selling a large home for a smaller one changes your income test and your cash. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> works through the numbers.</li>
</ul>
<p>The break-even math comes first in all three cases. A good move on paper can lose money once the penalty and fees are counted.</p>

<h2>What Joshua does for North Shore clients</h2>
<ol>
<li><strong>Checks the property first.</strong> Price against the insured limit, strata documents, suite status. Problems surface before you are committed.</li>
<li><strong>Reads your income like an underwriter.</strong> Salary, commission, bonus and self-employed income each have a lender they fit. He matches the file before it is sent.</li>
<li><strong>Puts the options in writing.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> sets rate, term, penalty method and privileges next to each other.</li>
<li><strong>Keeps in touch.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> adds a yearly review and a call roughly six months before maturity.</li>
</ol>

${callout("What you pay", "<p>Most North Shore files go to an A lender, where the lender pays Joshua and you pay nothing for his work. A self-employed file that needs an alternative lender is the usual exception. Any fee to you must be shown in writing on BCFSA's Form 1A before you commit.</p>")}

<h2>Buying, renewing and refinancing on the North Shore</h2>
<p><strong>First-time buyers</strong> can stack the federal and provincial programs, including the First Home Savings Account and the property transfer tax exemption. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the order. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact figure at any price.</p>
<p><strong>Self-employed owners and professionals</strong> are common here. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how lenders read business income, and which routes exist when your tax return understates what you earn.</p>
<p><strong>Renewals and refinances</strong> begin with your own numbers. The <a href="/mortgage-calculators/">calculators</a> compare staying, switching and refinancing, and the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a> explains how a rate is set.</p>

<h2>Nearby</h2>
<p>Joshua serves the whole Lower Mainland the same way. The <a href="/mortgage-broker-vancouver/">Vancouver page</a> covers the city across the inlet. The <a href="/mortgage-broker-burnaby/">Burnaby page</a> covers the neighbouring city to the east and the Tri-Cities beyond it.</p>

${cta({ title: "Talk to a broker who serves North Vancouver", text: "Book a 15-minute call. Tell Joshua the property, the price range and how you're paid. You'll leave knowing what a lender will ask for first." })}
`;

export default {
  slug: "/mortgage-broker-north-vancouver/",
  h1: "Mortgage broker serving North Vancouver, BC",
  lede: "Joshua Resvick, Xeva Mortgage, serves the City and District of North Vancouver and West Vancouver from his Surrey office by phone and video. Condos, suites, high-priced homes and long-time equity, handled like an underwriter would.",
  crumbs: [["Home", "/"], ["Serving North Vancouver", "/mortgage-broker-north-vancouver/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Does Joshua have an office in North Vancouver?", a: "No. Joshua works from his office in Surrey and serves the North Shore by phone, video and secure document exchange. The appraisal is done locally, and you sign with a lawyer or notary near you. BC brokers are licensed provincially by BCFSA and lenders lend across the province, so the broker's location does not change your mortgage." },
    { q: "What down payment do I need for a home over $1.5 million?", a: "Twenty percent of the full price. Insured mortgages, which allow less than 20 percent down, are only available when the home is priced at $1.5 million or less. Below that line, the minimum is 5 percent on the first $500,000 and 10 percent on the rest, up to $1.5 million. Joshua can run your exact figure." },
    { q: "Will a lender count the rent from my suite?", a: "Usually only if the suite is legal, meaning it has the building permit the City or District requires. Lenders then count a share of documented rent, using either an offset or an add-back method. An unpermitted suite often cannot count. The share and method vary by lender, so Joshua runs both on your numbers." },
    { q: "Do lenders look closely at North Vancouver condos?", a: "Often, yes. Lenders commonly review the strata minutes, budget, contingency reserve fund, special assessments and depreciation report, plus the age of the building and any rental limits. Policies differ, so a building that one lender declines may suit another. Joshua reviews the strata package early so a problem does not surface late." },
    { q: "I have a lot of equity in my North Vancouver home. What are my options?", a: "You can renew and compare offers, refinance, add a home equity line of credit, or downsize. A HELOC is capped at 65 percent of the home's value on its own, and 80 percent combined with the mortgage. Every option has a penalty or cost, so the break-even comes first." }
  ]
};
