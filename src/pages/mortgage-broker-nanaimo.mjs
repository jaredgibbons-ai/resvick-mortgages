import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-nanaimo/#service", name: "Resvick Mortgages, serving Nanaimo", url: SITE.origin + "/mortgage-broker-nanaimo/", areaServed: [{ "@type": "City", name: "Nanaimo", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Central Vancouver Island" }] };

const body = `
<p>Nanaimo sits at the point where Vancouver Island is closest to the mainland, and a lot of its housing story follows from that. Two BC Ferries terminals, Departure Bay and Duke Point, connect the city to Metro Vancouver, and seaplanes and a helicopter service run to downtown Vancouver (City of Nanaimo, Getting Here, read October 2026). That makes Nanaimo a city of commuters, relocators and people with one foot on each side of the strait, and it makes the mortgage questions a little different from a purely local market.</p>
<p>Joshua Resvick, a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.), serves Nanaimo and the mid-Island from his Surrey office by phone, video and secure document exchange. He does not keep a Nanaimo branch, and nothing about the process requires one. He has funded over 1,000 mortgages, spent five years as a mortgage underwriter before becoming a broker, and works every file personally.</p>

${ratesStrip()}

<h2>The ferry-commuter purchase</h2>
<p>A common Nanaimo buyer works for a Lower Mainland employer, in person some days and remotely on others, and is buying on the Island for space and price. The mortgage itself does not care where you work, but the lender does care that the home will be your principal residence and that your employment is stable. A few practical points:</p>
<ul>
<li><strong>Remote and hybrid employment</strong> is documented like any other job: an employment letter, pay stubs and T4s. If your role is remote by agreement, a line in the letter confirming that avoids a question later.</li>
<li><strong>Keeping a mainland property</strong> while buying in Nanaimo changes the file. If the mainland home is being sold, the sale proceeds are your down payment and the timing may need <a href="/bridge-financing/">bridge financing</a>. If it is being kept as a rental, the lender counts the existing mortgage and a share of the rent, and the <a href="/converting-your-home-to-a-rental/">converting your home to a rental</a> page explains the steps.</li>
<li><strong>Moving an existing mortgage</strong> to the new home, known as porting, can save a penalty if your lender allows it and the dates line up. Portability is one of the terms Joshua compares before you choose a lender.</li>
</ul>

<h2>Nanaimo housing and suites</h2>
<p>Nanaimo's housing runs from older character neighbourhoods near the harbour, through established subdivisions in the north and south ends, to newer townhouse and condo developments and rural lots at the edges. Homes with suites are a large part of the market, and the City's rules are specific. Under its zoning bylaw, a secondary suite in a single-family home is limited to 40 percent of the principal building's habitable floor space and 100 square metres, a suite is also possible in an accessory building on qualifying lots, and each suite needs its own on-site parking space (City of Nanaimo, Secondary Suites: Building Code and Zoning Requirements, revised September 2024). Rules change, so confirm with the City before relying on a suite being legal.</p>
<p>For a lender, a legal suite with documented rent means a portion of that rent can be counted toward qualifying, and the method varies: some lenders offset the rent against your housing costs and some add a share to your income. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows both on the same numbers. If you own a home and want to add a suite, the <a href="/secondary-suite-refinance/">secondary suite refinance</a> program allows borrowing against the as-improved value, with conditions.</p>

<h2>Who Joshua helps in Nanaimo</h2>
<p><strong>First-time buyers.</strong> Nanaimo has been a place where a first home is within reach for many households that are priced out of the coast. The provincial and federal programs apply the same here: the property transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new homes. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the order to use them in, and the <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact figure for any price.</p>
<p><strong>Relocating families and retirees.</strong> Many arrive from the mainland or from other provinces with equity from a sale and a pension or a new job. Pension and investment income is documented differently from a salary, and a signed offer of employment can often stand in for a start date that has not arrived.</p>
<p><strong>Renewing homeowners.</strong> The letter from your lender is an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains what to compare, and the switching rules that took effect in late 2024 make it easier to move an uninsured mortgage to a new federally regulated lender at maturity without a new stress test, if the balance and amortization do not increase.</p>
<p><strong>Self-employed and seasonal workers.</strong> Trades, tourism, marine and forestry businesses, and a university and hospital workforce, give Nanaimo a wide spread of income types. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers how tax returns are read and which routes exist when they do not tell the whole story.</p>

${callout("The cost of using a broker", "<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on some B-lender and private files, and BC rules require them to be disclosed in writing, on BCFSA's Form 1A, before you commit. You will know which kind of file yours is on the first call.</p>")}

<h2>How it works from the Island</h2>
<p>A 15-minute call starts it, by phone or video. Documents go through a secure upload link, never by email. Joshua reviews them as an underwriter would, chooses the lenders whose policies fit, and sends you a written <a href="/lender-comparison-report/">Lender Comparison Report</a>: rate, term, penalty method, prepayment privileges and portability, side by side. The appraisal is done by a Nanaimo appraiser and you sign with a local lawyer or notary. Your realtor and lawyer get dates and documents from Joshua directly. After funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps the mortgage under review, with an annual check and contact about six months before maturity.</p>

<h2>Calculators</h2>
<p>Every calculator on this site shows the full result immediately and asks for no email address. Nanaimo buyers tend to start with the <a href="/mortgage-calculators/#affordability">affordability calculator</a>, which applies the stress test, and the <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> for the total cash needed on completion. Those keeping a mainland property can use the <a href="/mortgage-calculators/#offset">rental offset tool</a> to see how its rent would be counted. The full set is on the <a href="/mortgage-calculators/">calculators page</a>.</p>

<h2>Nearby</h2>
<p>Joshua serves the whole Island. The <a href="/mortgage-broker-victoria/">Victoria page</a> covers the Capital Region, including government and military income. For the mainland side of a two-sided life, the <a href="/mortgage-broker-vancouver/">Vancouver page</a> is the counterpart. Current rates and how your rate is set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Nanaimo", text: "Book a 15-minute call. If you are buying on the Island while keeping a mainland job or property, say so in the first message and Joshua will plan the file around it." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving British Columbia from Surrey. If you searched for a mortgage broker in Nanaimo and found this page, the <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready.</p>
`;

export default {
  slug: "/mortgage-broker-nanaimo/",
  h1: "Mortgage broker serving Nanaimo and the mid-Island",
  lede: "Joshua Resvick, Xeva Mortgage, serves Nanaimo from his Surrey office by phone and video: first homes, ferry-commuter purchases, suite homes, relocations and renewals.",
  crumbs: [["Home", "/"], ["Serving Nanaimo", "/mortgage-broker-nanaimo/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy in Nanaimo while working for a Vancouver employer?", a: "Yes. Lenders document remote and hybrid employment the same way as any job: an employment letter, pay stubs and T4s. A line in the letter confirming the role is remote by agreement avoids questions. What the lender needs is that the Nanaimo home will be your principal residence and that your employment is stable." },
    { q: "I want to keep my mainland home as a rental and buy in Nanaimo. Is that possible?", a: "Often, if you qualify carrying both. The lender counts the existing mortgage and property costs and, usually, a share of the documented rent. Whether the rent is offset against costs or added to income depends on the lender and changes the result. Joshua runs the numbers both ways before you decide which home to buy." },
    { q: "Does Joshua have an office in Nanaimo?", a: "No. His office is in Surrey, and he serves Nanaimo by phone, video and secure document exchange. The appraisal is done locally and you sign with a Nanaimo lawyer or notary. Brokers in BC are licensed by BCFSA for the whole province, and lenders lend province-wide, so where the broker sits does not affect the mortgage." },
    { q: "Will a lender count the rent from a Nanaimo basement suite?", a: "If the suite is legal under the City of Nanaimo's zoning and building rules and the rent can be documented, most lenders count a share of it. The share and the method vary by lender. An unpermitted suite usually cannot be counted. The suite income page on this site explains the offset and add-back methods with worked examples." },
    { q: "Can I port my current mortgage to a home in Nanaimo?", a: "If your mortgage is portable and your lender approves the new property and your current income, yes, and it can avoid a prepayment penalty. The dates between the sale and the purchase have to line up, and some lenders allow a short gap. Portability is one of the terms Joshua compares in every Lender Comparison Report for exactly this reason." }
  ]
};
