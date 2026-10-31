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
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage. He serves North Vancouver and West Vancouver from his Surrey office, by phone and video. There's no North Shore branch. There's a broker who spent five years as an underwriter, has ten years in the business, and has funded over 1,000 mortgages. He handles your file himself.</p>

${ratesStrip()}

<h2>Two North Vancouvers, and why the address matters</h2>
<p>North Vancouver is two separate municipalities. The City of North Vancouver covers Lower Lonsdale, Central Lonsdale and the waterfront around Lonsdale Quay, where the SeaBus runs to downtown. The District of North Vancouver is much bigger. It includes Lynn Valley, Edgemont, Capilano and Deep Cove. West Vancouver is a third municipality again.</p>
<p>Each one writes its own bylaws. The rules for suites, coach houses and renovation permits can differ from one side of the border to the other. For a lender, that matters when part of your income or value comes from a suite. Your file starts with the exact address.</p>
<p>Joshua works with buyers in all three. He checks which rules apply before you write an offer, not after.</p>

<h2>When the price is above the insured limit</h2>
<p>An insured mortgage, the kind that allows less than 20 percent down, is only available when the home is priced at $1.5 million or less. Above that, the minimum down payment is 20 percent of the full price. Below it, the minimum is 5 percent on the first $500,000 and 10 percent on the part from $500,000 to $1.5 million.</p>
<p>That gap is large. A $1.2 million home needs at least $95,000 down. A $1.6 million home needs $320,000. Check the price against the cap first, because it decides which lenders and which rates you can use.</p>
<p>The <a href="/down-payment-guide-bc/">down payment guide</a> walks through the layers. The <a href="/buying-with-5-percent-down/">5 percent down page</a> explains what the low end really costs. The guide on <a href="/guides/thirty-year-amortization-and-the-1-5-million-cap/">30-year amortization and the $1.5 million cap</a> covers the December 2024 changes.</p>

<h2>Condos and townhouses: the lender reads the building too</h2>
<p>A large share of North Shore homes are strata units. When you buy one, the lender approves two things: you, and the building.</p>
<p>Lenders commonly look at the strata minutes, the budget, the contingency reserve fund and any special assessments. Many also ask about a depreciation report, the age of the building, and bylaws that limit rentals. A building with a past envelope repair, or a pending one, can change both the approval and the lender.</p>
<p>Not every lender reads these documents the same way. A building one lender declines may be fine for another. The <a href="/condo-and-townhouse-mortgages/">condo and townhouse mortgage page</a> explains what to ask for before you remove conditions.</p>
<p>Joshua reviews the strata package alongside your own documents, so surprises come out while you still have time to act.</p>

<h2>Suites, coach houses and the legal question</h2>
<p>Both municipalities allow secondary suites and coach houses in some form, and the rules are not the same. In the City of North Vancouver, installing, renovating or legalizing a suite needs a building permit (City of North Vancouver, Accessory Secondary Suite Zoning Bylaw Requirements, read October 2026).</p>
<p>In the District, being registered is not the same as being permitted. A local brokerage guide notes that a suite can be registered for utility billing without being a legal, inspected suite, and that older suites may not be authorized by default (Rossetti Realty, Guide to Secondary Suites in the District of North Vancouver, July 2025). Ask for the permit history, not just the utility notice.</p>
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
<li><strong>Compares lenders in writing.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> sets rate, term, penalty method and privileges side by side.</li>
<li><strong>Stays in touch after funding.</strong> <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> means an annual review and a call about six months before maturity.</li>
</ol>

${callout("What you pay", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees come up only on some B-lender and private files, such as a self-employed file that needs an alternative lender. In BC, any fee must be disclosed in writing on BCFSA's Form 1A before you commit. If yours has one, you'll see the cost before you decide.</p>")}

<h2>Buying, renewing and refinancing on the North Shore</h2>
<p><strong>First-time buyers</strong> can stack the same federal and provincial programs as anyone in BC, including the First Home Savings Account and the property transfer tax exemption. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the order. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact figure for any price.</p>
<p><strong>Self-employed owners and professionals</strong> are common here. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> explains how lenders read business income, and which routes exist when your tax return understates what you earn.</p>
<p><strong>Renewals and refinances</strong> start with your own numbers. The <a href="/mortgage-calculators/">calculators</a> compare staying, switching and refinancing. Current rates, and how your rate is set, are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

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
    { q: "Will a lender count the rent from my suite?", a: "Usually only if the suite is legal, meaning it has the permits and inspections the City or District requires. Lenders then count a share of documented rent, using either an offset or an add-back method. An unpermitted suite often cannot count. The share and method vary by lender, so Joshua runs both on your numbers." },
    { q: "Do lenders look closely at North Vancouver condos?", a: "Often, yes. Lenders commonly review the strata minutes, budget, contingency reserve fund, special assessments and depreciation report, plus the age of the building and any rental limits. Policies differ, so a building that one lender declines may suit another. Joshua reviews the strata package early so a problem does not surface late." },
    { q: "I have a lot of equity in my North Vancouver home. What are my options?", a: "You can renew and compare offers, refinance, add a home equity line of credit, or downsize. A HELOC is capped at 65 percent of the home's value on its own, and 80 percent combined with the mortgage. Every option has a penalty or cost, so the break-even comes first." }
  ]
};
