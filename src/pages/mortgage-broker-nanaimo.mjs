import { short } from "../lib/short.mjs";
import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-nanaimo/#service", name: "Resvick Mortgages, serving Nanaimo", url: SITE.origin + "/mortgage-broker-nanaimo/", areaServed: [{ "@type": "City", name: "Nanaimo", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Central Vancouver Island" }] };

const body = `
${short({ answer: "Yes, you can work with a mortgage broker in Nanaimo without one being in town. Joshua serves the city from his Surrey office by phone and video. The appraisal and the signing happen locally.", who: "Nanaimo buyers, ferry commuters, families moving to the Island and anyone renewing.", next: "Book a 15-minute call, or check your numbers first with the <a href=\"/mortgage-calculators/#affordability\">affordability calculator</a>." })}
<p>Nanaimo sits where Vancouver Island comes closest to the mainland. A lot of its housing story follows from that. Two BC Ferries terminals, Departure Bay and Duke Point, link the city to Metro Vancouver. Seaplanes and a helicopter service also run to downtown Vancouver (City of Nanaimo, Getting Here, read October 2026).</p>
<p>So Nanaimo is a city of commuters and people who moved here. Plenty of them have one foot on each side of the strait. That makes the mortgage questions a little different from a purely local market.</p>
<p>Joshua Resvick is a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.). He serves Nanaimo and the mid-Island from his Surrey office. He works by phone, video and secure document upload. He doesn't keep a Nanaimo branch, and the process doesn't need one.</p>
<p>He has funded over 1,000 mortgages. Before he became a broker, he spent five years as a mortgage underwriter. He works every file himself.</p>

${ratesStrip()}

<h2>The ferry-commuter purchase</h2>
<p>Here's a common Nanaimo buyer. They work for a Lower Mainland employer, in person some days and at home on others. They're buying on the Island for more space at a better price.</p>
<p>The mortgage doesn't care where you work. The lender does care about two things. The home must be your main home, and your job must be steady. A few practical points:</p>
<ul>
<li><strong>Remote and hybrid jobs</strong> are documented like any other job. You'll need an employment letter, pay stubs and T4s. If your role is remote by agreement, ask for a line in the letter that says so. It heads off a question later.</li>
<li><strong>Keeping a mainland home</strong> while you buy in Nanaimo changes the file. If you're selling it, the sale money becomes your down payment. The timing may then need <a href="/bridge-financing/">bridge financing</a>. If you're keeping it as a rental, the lender counts that mortgage and a share of the rent. The <a href="/converting-your-home-to-a-rental/">converting your home to a rental</a> page walks through the steps.</li>
<li><strong>Moving your current mortgage</strong> to the new home is called porting. It can save you a penalty if your lender allows it and the dates line up. Portability is one of the terms Joshua compares before you pick a lender.</li>
</ul>

<h2>Nanaimo housing and suites</h2>
<p>Nanaimo has older character streets near the harbour. It has settled subdivisions in the north and south ends. It also has newer townhouses and condos, plus rural lots at the edges.</p>
<p>Homes with suites are a big part of the market, and the City's rules are specific. The source is the City's own guide (City of Nanaimo, Secondary Suites: Building Code and Zoning Requirements, revised September 2024). Here's what it says.</p>
<ul>
<li>A suite in a house can use up to 40 percent of the home's living space, to a maximum of 100 square metres.</li>
<li>On some lots, a suite can go in a separate building instead.</li>
<li>Each suite needs its own parking spot on the property.</li>
</ul>
<p>Rules change. Check with the City before you count on a suite being legal.</p>
<p>A legal suite with proof of rent can help you qualify. Lenders count part of that rent. Some subtract it from your housing costs. Others add a share to your income. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows both methods on the same numbers.</p>
<p>Already own and want to add a suite? The <a href="/secondary-suite-refinance/">secondary suite refinance</a> program lets you borrow against the home's value after the work is done. Conditions apply.</p>

<h2>Who Joshua helps in Nanaimo</h2>
<p><strong>First-time buyers.</strong> For many households priced out of the coast, a first home in Nanaimo is within reach. The same programs apply here as anywhere in BC. That means the property transfer tax exemption, the First Home Savings Account, the Home Buyers' Plan and the GST rebate on new homes. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains the order to use them in. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives the exact tax at any price.</p>
<p><strong>Families and retirees moving here.</strong> Many arrive from the mainland or another province. They often bring equity from a sale and a pension or a new job. Lenders document pension and investment income differently from a salary. And a signed job offer can often stand in for a start date that hasn't come yet.</p>
<p><strong>Homeowners renewing.</strong> Your lender's renewal letter is an opening offer. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains what to compare. Rules from late 2024 make it easier to move an uninsured mortgage at maturity. You can switch to a new federally regulated lender without a new stress test. The catch is that the balance and amortization can't go up.</p>
<p><strong>Self-employed and seasonal workers.</strong> Nanaimo has trades, tourism, marine and forestry work. It also has a university and a hospital. That's a wide mix of income types. The <a href="/self-employed-mortgage-bc/">self-employed mortgage hub</a> covers how lenders read tax returns. It also covers the options when your returns don't tell the whole story.</p>

${callout("The cost of using a broker", "<p>On a mortgage placed with an A lender, the lender pays the broker. You pay nothing for the service. Fees come up only on some B-lender and private files. BC rules require those fees in writing, on BCFSA's Form 1A, before you commit. You'll know which kind of file yours is on the first call.</p>")}

<h2>How it works from the Island</h2>
<p>It starts with a 15-minute call by phone or video. Your documents go through a secure upload link, never by email. Joshua reviews them the way an underwriter would. Then he picks the lenders whose rules fit your file.</p>
<p>You get a written <a href="/lender-comparison-report/">Lender Comparison Report</a>. It sets rate, term, penalty method, prepayment privileges and portability side by side.</p>
<p>A Nanaimo appraiser does the appraisal. You sign with a local lawyer or notary. Joshua sends dates and documents straight to your realtor and lawyer.</p>
<p>After funding, <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> keeps your mortgage under review. You get a yearly check-in and a call about six months before your term ends.</p>

<h2>Calculators</h2>
<p>Every calculator on this site shows the full result right away. None of them ask for your email. Nanaimo buyers usually start with the <a href="/mortgage-calculators/#affordability">affordability calculator</a>, which applies the stress test. Next comes the <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> for the total cash you'll need.</p>
<p>Keeping a mainland home? Try the <a href="/mortgage-calculators/#offset">rental offset tool</a>. It shows how that home's rent would be counted. The full set is on the <a href="/mortgage-calculators/">calculators page</a>.</p>

<h2>Nearby</h2>
<p>Joshua serves the whole Island. The <a href="/mortgage-broker-victoria/">Victoria page</a> covers the Capital Region, including government and military income. For the mainland side of a two-place life, see the <a href="/mortgage-broker-vancouver/">Vancouver page</a>. Current rates and how your rate gets set are on the <a href="/mortgage-rates-bc/">BC mortgage rates hub</a>.</p>

${cta({ title: "Talk to a broker who serves Nanaimo", text: "Book a 15-minute call. Buying on the Island while keeping a mainland job or home? Say so in your first message, and Joshua will plan the file around it." })}

<p>Resvick Mortgages is listed on Google as a mortgage broker serving BC from Surrey. Found this page by searching for a broker in Nanaimo? The <a href="/contact/">contact page</a> has the phone number, the email address and what to have ready.</p>
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
