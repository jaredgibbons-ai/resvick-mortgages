import { SITE, ratesStrip, cta, callout, businessSchema } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const schema = { ...businessSchema(), "@id": SITE.origin + "/mortgage-broker-kitimat/#service", name: "Resvick Mortgages, serving Kitimat", url: SITE.origin + "/mortgage-broker-kitimat/", areaServed: [{ "@type": "City", name: "Kitimat", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } }, { "@type": "AdministrativeArea", name: "Regional District of Kitimat-Stikine" }] };

const body = `
${short({
  answer: "Joshua Resvick serves Kitimat by phone and video from his Surrey office. Big LNG projects bring contract and rotation pay, and lenders read that kind of income with care. A file built around how you are paid, and a home that appraises, gets through more easily.",
  who: "Plant and project workers, contractors, trades, and buyers of older homes or mobile homes in Kitimat.",
  next: "Book a 15-minute call and tell Joshua how you are paid and when your contract ends."
})}
<p>Kitimat is a small industrial town at the head of Douglas Channel. Around 8,200 people live here. (Statistics Canada 2021 Census, as used in Kitimat Housing Needs Report 2024, read October 2026). A few very large projects sit around that small base, and they pull on everything from pay stubs to house prices.</p>
<p>Joshua Resvick is a BC mortgage broker with Xeva Mortgage. Before he started brokering, he spent five years as a lender's underwriter, so he knows what a lender's desk looks for in a file. More than 1,000 mortgages have been funded through him. He works from his Surrey office and serves Kitimat by phone and video. There is no Kitimat branch. You can <a href="/contact/">book a 15-minute call</a> on your break or after a shift.</p>

${ratesStrip()}

<h2>Three big employers, one small housing market</h2>
<p>Three names come up in most Kitimat money talk. Each one touches home buying in a different way.</p>
<ul>
<li><strong>LNG Canada.</strong> On September 29, 2026, the company announced a final investment decision on Phase 2, which would double the plant's output. (BNN Bloomberg, LNG Canada to go ahead with Phase 2, September 29, 2026, read October 2026). The same story gave no job count and no building timeline, so any worker or housing number you hear for Phase 2 is a guess for now.</li>
<li><strong>Cedar LNG.</strong> This Haisla Nation-led project says its pipeline and marine terminal are under construction. It expects its floating plant to arrive in 2028. (Cedar LNG, Spring 2026 newsletter, April 30, 2026, read October 2026).</li>
<li><strong>Rio Tinto's aluminum smelter.</strong> It is the long-standing employer. The modernized smelter opened in 2016 with a stated capacity of 420,000 tonnes a year. (alcircle, Rio Tinto's modernised Kitimat smelter opens, September 26, 2016, read October 2026).</li>
</ul>
<p>A lender does not underwrite a megaproject. It underwrites you: your job, your pay and your debts. But these projects decide how long your job may last and how crowded the housing market feels, so they are worth understanding first.</p>

<h2>Incomes in Kitimat</h2>
<p>Kitimat's 2021 Census profile shows a median household income of $103,000 for 2020. Only 8.0 percent of workers were self-employed, or 340 of 4,265. Manufacturing was the largest industry with 820 workers, then construction with 635 and health care with 415. (Statistics Canada, 2021 Census Profile, read October 2026). That is a wage town, with industrial and project pay that can include shift premiums and overtime. Many lenders average that kind of pay over two years. Contract and camp work is read differently from a permanent job, so share your pay records at the start.</p>

<h2>What the District's own housing report shows</h2>
<p>Kitimat's Housing Needs Report 2024 gives a plain picture of who owns and who rents. It was dated December 2024. The numbers below come from the 2021 Census unless noted. (District of Kitimat, Housing Needs Report 2024, read October 2026).</p>
<ul>
<li><strong>Ownership.</strong> About 76% of households own their home, and about 24% rent.</li>
<li><strong>Income.</strong> Median household income is about $103,000. Owners sit near $114,000, and renters near $73,000.</li>
<li><strong>Age of homes.</strong> About 39% of homes were built before 1960. Another 39% date from 1961 to 1980.</li>
<li><strong>Mobile homes.</strong> There are 65 movable dwellings, about 2% of all homes.</li>
<li><strong>Short-term rentals.</strong> Seven licensed short-term rentals were active in 2024.</li>
</ul>
<p>Two things stand out for a buyer. This is mostly an owner town, with a large stock of older homes. Almost eight in ten homes are more than 40 years old, so the condition of the building matters as much as the price.</p>

<h2>Company leases and what comes next</h2>
<p>The report says LNG Canada held 133 housing leases in Kitimat, and most were set to expire in 2025. It also says 159 LNG Canada employees lived in company-provided housing as of September 2024. The leases dated from 2016, and the report expects rents to rise toward market levels as they reset. (District of Kitimat, Housing Needs Report 2024, read October 2026).</p>
<p>I could not confirm what happened to those leases after 2025. So treat this as a reason to plan, not a prediction. If your housing is tied to an employer lease or a work camp, ask now what happens when it ends.</p>
<p>Here is how buying and renting tend to compare for a worker in that spot:</p>
<ol>
<li><strong>Price the rent you may face.</strong> The report's 2024 listing average was $1,662 across 357 rental units. Market rents may differ now.</li>
<li><strong>Price the purchase.</strong> Use the <a href="/mortgage-calculators/">mortgage calculators</a> to see the payment, taxes and heating on a home you could really buy.</li>
<li><strong>Count your cash.</strong> The <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs page</a> show what to set aside.</li>
<li><strong>Ask how long the job runs.</strong> A home you may leave in two years carries a different risk than one you plan to keep for ten.</li>
</ol>

<h2>Moving to Kitimat: buying a home before or after you arrive</h2>
<p>Many people who search for buying a home in Kitimat are not living here yet. They have a job offer, a start date and a short window to find a place. Moving to Kitimat for work brings a few mortgage questions that a local buyer does not face.</p>
<p>Here is an order that tends to work:</p>
<ol>
<li><strong>Get pre-approved before you visit.</strong> A pre-approval tells you what price range to search in. It also holds a rate for a set time, so you can look without a clock on your back. The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> shows what lenders ask for.</li>
<li><strong>Bring your offer letter.</strong> A signed offer, your pay rate and your start date matter most. If you worked in the same trade before, add your past pay stubs and T4s.</li>
<li><strong>Ask about probation.</strong> Many lenders want probation finished before they fund. Some will look at a file earlier in certain cases. Policies vary, so raise it early.</li>
<li><strong>Time your closing to your move.</strong> If you can, pick a closing date that falls after you start work and after any probation ends.</li>
<li><strong>Plan for the home you leave.</strong> If you own a place elsewhere, the sale date matters. A <a href="/bridge-financing/">bridge loan</a> may cover a gap in some cases.</li>
</ol>
<p>You do not have to live in Kitimat to start. Joshua works by phone and video, so a pre-approval can be done before you ever drive up Highway 37 or Highway 16. If you are moving from another province, lenders ask for the same kinds of papers. They just come from a different employer and a different bank.</p>

<h2>Contract, camp and rotation pay</h2>
<p>Large projects hire in several ways, and a lender sorts them into different boxes. Policies vary, so Joshua checks each file against a lender's rules before you apply.</p>
<h3>Permanent staff</h3>
<p>A permanent, full-time job with a stated base wage is the easiest file. A lender usually wants an employer letter and recent pay stubs. Overtime and shift pay are often counted on an average, and many lenders want two years of history first.</p>
<h3>Contract and project hires</h3>
<p>Fixed-term contracts raise a fair question: will the income continue? Lenders commonly want to see a contract that runs past closing, or a record of back-to-back contracts in the same trade. If a contract ends in the spring, the date is a fact the lender will weigh. Be ready to explain what comes next.</p>
<h3>Camp pay and living allowances</h3>
<p>Some project jobs include a camp stay or a daily allowance for living away from home. Many lenders do not count an allowance as income that can pay a mortgage. Some do count part of it. Ask before you assume it helps, and keep the pay stubs that show it.</p>
<h3>Paid through your own company</h3>
<p>Many trades invoice a contractor instead of drawing a wage. That is self-employed income, even if one customer pays all of it. Lenders usually want two years of tax filings. The <a href="/self-employed-mortgage-bc/">self-employed hub</a> and the <a href="/mortgage-for-contractors/">contractor page</a> explain the routes.</p>
<p>The <a href="/mortgage-pre-approval-bc/">pre-approval page</a> lists the papers worth gathering. If you have moved here from another province or country for a job, tell Joshua early. The <a href="/new-to-canada-mortgage/">new-to-Canada page</a> covers files with a short Canadian history.</p>

<h2>Older homes in a small market</h2>
<p>With so many homes built before 1981, expect to look at the roof, the wiring, the heating system and the plumbing. A home inspection protects you and shows the lender that the building is sound. Ask your insurer about the home before you remove conditions, because some older systems affect cover.</p>
<p>A small town has few sales each year. That affects the appraisal. An appraiser may have few recent sales of similar homes to compare, and the value can come in below the price you agreed to. Some lenders also limit or price small remote markets in their own way. Lenders vary, so Joshua asks about the property early, before you pay for an inspection or an appraisal.</p>
<p>Good habits for a small market:</p>
<ul>
<li>Ask your realtor for recent sales on the same street, not just in town.</li>
<li>Keep extra cash in case the appraisal falls short.</li>
<li>Put the value check in your conditions, not after them.</li>
</ul>

<h2>Mobile homes and rental houses</h2>
<p>Kitimat has only 65 movable dwellings, so choices are limited. The land is the big question. A home on land you own is a far easier file than a home on a rented pad. Pad homes often have fewer lenders, shorter terms and age limits. The <a href="/mobile-home-mortgages-bc/">manufactured home page</a> explains both.</p>
<p>Some buyers consider a house to rent out. The report says a substantial portion of the rental stock is outdated and of poor quality. A lender cares about the unit's condition and legal status. The <a href="/investment-property-mortgages-bc/">investment property guide</a> shows how rental income is counted.</p>

<h2>Suites in Kitimat</h2>
<p>The District says secondary suites are allowed in most residential zones. A building permit is required to create one, and a fee applies to inspect and register the suite. (District of Kitimat, Secondary suites page, read October 2026). The page does not give size or parking rules, so call the District's planning office before you plan a suite.</p>
<p>For a lender, the suite must be legal, and the rent must be documented. A suite with no permit usually counts for nothing. The <a href="/how-much-suite-income-will-a-lender-count/">suite income page</a> shows the two methods.</p>

<h2>First-time buyers and renewals</h2>
<p><strong>First-time buyers</strong> can use the same BC and federal programs as buyers anywhere. The <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> shows the order in which to use them.</p>
<p><strong>Renewals</strong> reward early planning, especially if your income has changed since you signed. The <a href="/mortgage-renewal-bc/">renewal guide</a> sets out the timeline, and the <a href="/mortgage-rates-bc/">BC rates hub</a> explains how a rate is set.</p>

<h2>How Joshua works with Kitimat clients</h2>
<ol>
<li><strong>Starts with your pay type.</strong> Permanent, contract, camp or your own company: the answer picks the lender.</li>
<li><strong>Checks the home early.</strong> Age, land, pad rent and location steer the lender choice before you fall for a house.</li>
<li><strong>Writes the options down.</strong> The <a href="/lender-comparison-report/">Lender Comparison Report</a> lines up term, penalty method and portability, so you are not choosing on rate alone.</li>
<li><strong>Stays in touch.</strong> Under <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, he reviews your mortgage each year and calls about six months before renewal.</li>
</ol>

${callout("What a mortgage broker costs", "<p>When the deal goes through an A lender, the lender pays Joshua and you pay nothing for his work. Some Kitimat files, such as pad homes or very new contract income, may need a B or private lender. If a fee applies, you will see it in writing on BCFSA's Form 1A before you agree to anything.</p>")}

<h2>Other resource towns</h2>
<p>Another northern town where resource pay shapes the file is Prince George. The <a href="/mortgage-broker-prince-george/">Prince George page</a> covers it.</p>

<p>If a home near Kitimat sits on First Nation land, it is financed differently from other land. Joshua arranges mortgages on reserve land, leased land and First Nation land through a lender that works on it. See <a href="/first-nations-land-mortgages-bc/">First Nations land mortgages</a>.</p>

<p class="more-links"><strong>Where to go next.</strong> If you work in one of these fields, see <a href="/mortgages-for-camp-mine-and-shift-workers/">camp, mine and shift workers</a>, <a href="/mortgages-for-truckers-and-owner-operators/">truckers and owner-operators</a> and <a href="/mortgage-for-contractors/">contractors and trades</a>. To plan a Kitimat purchase, start with the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>, then the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/closing-costs-bc/">closing costs guide</a>. Owners can read the <a href="/refinance-mortgage-bc/">refinance guide</a>, and everyone can read <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

<p>Many Kitimat buyers also look west. Our <a href="/mortgage-broker-prince-rupert/">Prince Rupert page</a> covers port wages, muskeg lots and the City's four-unit zoning.</p>

${cta({ title: "Talk to a broker who serves Kitimat", text: "Book a 15-minute call. Share how you are paid, when your contract ends and the kind of home you want. You will leave knowing which lenders fit and what to line up first." })}
`;

export default {
  slug: "/mortgage-broker-kitimat/",
  h1: "Mortgage broker in Kitimat, BC: buying a home or moving to Kitimat",
  lede: "Buying a home in Kitimat, or moving to Kitimat for work? Joshua Resvick, Xeva Mortgage, serves Kitimat from his Surrey office by phone and video. LNG and smelter pay, contract work, older homes and small-market appraisals, explained the way an underwriter reads them.",
  crumbs: [["Home", "/"], ["Serving Kitimat", "/mortgage-broker-kitimat/"]],
  nav: "/about-joshua-resvick/",
  body,
  schema: [schema],
  faqs: [
    { q: "Can I buy a home in Kitimat before I move there?", a: "Yes, often. Many people get pre-approved by phone or video, then make an offer when they visit or through a realtor. Lenders look at your job offer, pay and credit, not where you live today. Ask for a closing date that fits your start date and any probation." },
    { q: "I am moving to Kitimat for a new job. When should I get pre-approved?", a: "As soon as you have a signed offer letter. A pre-approval shows your price range and holds a rate for a set time. Bring the offer, your start date, recent pay stubs and your down payment details. If you are still on probation, tell Joshua early so he can plan around it." },
    { q: "I work on a contract at an LNG site. Can I get a mortgage?", a: "Often yes. Lenders commonly look at whether the contract runs past closing, or whether you have a record of back-to-back contracts in the same trade. A permanent role is simpler. Joshua checks your file against lender rules before you apply, so you know where it stands." },
    { q: "Will a lender count my camp pay or living allowance?", a: "Many lenders do not count an allowance as income that can carry a mortgage, and some count only part of it. Base wage is usually counted in full once your job is confirmed. Ask before you assume the allowance helps, and keep the pay stubs that show it." },
    { q: "My employer housing lease may end. Should I buy instead of renting?", a: "It depends on how long you plan to stay and what rent would cost. The District's report expects rents to rise as company leases reset. Compare the monthly cost of a home you could really buy with the rent you may face. A pre-approval shows your budget without a commitment." },
    { q: "Why would a Kitimat home appraise low?", a: "A small town has few sales, so an appraiser may have few close comparisons. The value can come in under the price you agreed to. Keep extra cash on hand, and put a value check in your conditions. Lenders vary on how they treat small remote markets." },
    { q: "Can I buy a mobile home in Kitimat?", a: "Sometimes. A mobile home on land you own is a far easier file than one on a rented pad. Pad homes often have fewer lenders, shorter terms and age limits. Joshua checks this before you make an offer." },
    { q: "Does LNG Canada Phase 2 change how a lender sees my file?", a: "Not directly. A lender looks at your job, pay and debts, not at the project. The announcement gave no job count or building timeline, so plan from your own contract dates and income, not from headlines." }
  ]
};
