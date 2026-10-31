import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";

// Embed the live eligibility checker once it exists (built separately); the page stands on its own without it.
const tool = TOOLS["suite-checker"] ? TOOLS["suite-checker"]() : "";

const body = `
<h2>What the program is</h2>
<p>Since January 15, 2025, CMHC has insured a refinance specifically for homeowners who want to build a secondary suite. The idea is simple. You already own your home. You want to add a legal, self-contained suite, such as a basement suite, a laneway home or a garden suite. Instead of being limited to the usual 80 percent of today's value, you can borrow up to 90 percent of what the home is worth after the suite is built. That figure is called the as-improved value, and it is what makes the program different from an ordinary refinance.</p>
<p>The program is a mortgage insurance product, so the loan is arranged through a lender that works with CMHC, and the insurance premium is added to the mortgage. It is not a government grant and not a separate government loan. If you have read about an $80,000 suite loan, read the myth-buster section below before you plan around it.</p>

<h2>The program box: every parameter that matters</h2>
<div class="table-wrap"><table>
<thead><tr><th>Item</th><th>The rule, as published by CMHC</th></tr></thead>
<tbody>
<tr><th scope="row">Maximum loan</th><td>Up to 90 percent of the as-improved value</td></tr>
<tr><th scope="row">Value limit</th><td>As-improved value must be below $2,000,000</td></tr>
<tr><th scope="row">Units</th><td>Up to 4 units in total, counting the existing unit or units</td></tr>
<tr><th scope="row">Amortization</th><td>Up to 30 years; amortization past 25 years carries a 0.20 percent premium surcharge</td></tr>
<tr><th scope="row">Ratios</th><td>39 percent gross debt service and 44 percent total debt service, at the greater of the contract rate plus 2 percentage points or 5.25 percent</td></tr>
<tr><th scope="row">Credit score</th><td>Minimum 600 for at least one borrower or guarantor</td></tr>
<tr><th scope="row">Occupancy</th><td>You must already own the home, and at least one unit must be lived in by you or a person related to you by marriage, common-law partnership or as a parent or child, rent-free</td></tr>
<tr><th scope="row">The suite</th><td>Self-contained, and compliant with municipal bylaws and zoning</td></tr>
<tr><th scope="row">Short-term rentals</th><td>Not permitted; the suite cannot be rented for any period of less than 90 consecutive days</td></tr>
<tr><th scope="row">Use of the money</th><td>Construction or completion of the suite only; no equity take-out; additional financing cannot exceed the project cost</td></tr>
<tr><th scope="row">Timing</th><td>CMHC approval is required before construction starts, or at least at an early stage</td></tr>
</tbody></table></div>
<p>These terms come from CMHC's refinance fact sheet and product page, and the insurer can change them. A lender may also apply its own rules on top of CMHC's, so a program you qualify for with CMHC is still subject to the lender's approval of you and of the plans.</p>

<h2>The timing trap</h2>
<p>The row that matters most in that table is the last one. CMHC's published rule is that insured financing must be approved before construction begins, or at the latest at an early stage. If you build first and ask later, the program is generally lost, because the financing is meant to pay for work that has not been done yet. A contractor's deposit, a demolition or a permit application that moves into physical work can all complicate the timing, so speak with a broker before you sign a construction contract, not after the first invoice arrives.</p>

${tool}

<h2>The program compared with an ordinary 80 percent refinance</h2>
<p>A conventional refinance with an A lender is limited to 80 percent of the home's appraised value, and the appraisal is usually based on what the home is worth today. If your goal is to build a suite, that limit often leaves too little room for the work. The program changes the arithmetic in two ways: the percentage is higher, and the value used is the as-improved value.</p>
<p>Here is an illustration with made-up numbers. Your home is worth $900,000 as it stands, and an appraiser estimates $1,000,000 once the suite is built. You owe $620,000 and the suite is quoted at $160,000.</p>
<ul>
<li><strong>Conventional refinance.</strong> 80 percent of $900,000 is $720,000. You owe $620,000, so the room is $100,000, which is $60,000 short of the project cost.</li>
<li><strong>The CMHC program.</strong> 90 percent of $1,000,000 is $900,000, but the new financing cannot exceed the project cost, so the total is limited to $620,000 plus $160,000, or $780,000. The full project is funded.</li>
</ul>
<p>Some lenders will consider an as-improved value on a conventional suite refinance, and some use construction-draw products, so the conventional route is not always as restrictive as the example. The program's advantage is that the as-improved approach is built into the insurer's rules.</p>
<p>The cost of the program is the premium. The premium is a percentage of the insured loan that rises with the loan-to-value ratio, and it is added to the mortgage balance. If the premium bands for owner-occupied homes apply to the as-improved value, the illustrative $780,000 loan sits at 78 percent of $1,000,000, which falls in the 75.01 to 80 percent band at 2.40 percent, or about $18,720. A 30-year amortization adds the 0.20 percent surcharge, bringing the rate to 2.60 percent, or about $20,280. Confirm the premium on a real quote, and test other figures with the <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a>.</p>

<h2>The myth: the $80,000 secondary suite loan never existed</h2>
<p>You may have seen the Canada Secondary Suite Loan Program, an $80,000 loan at 2 percent over 15 years. The federal government announced it in 2024, first at $40,000 and then at $80,000 in December of that year. It never opened for applications. Budget 2025 confirmed that the program, which was not yet operational, would not be implemented because of its potential to overlap with the homeowner insured mortgage changes announced in January 2025.</p>
<p>The CMHC insured refinance described on this page is the live product. Articles and AI-generated summaries still describe the loan as if you could apply for it, so if a source tells you to apply for the $80,000 loan, treat the source with caution. If you are looking for provincial money, BC's earlier secondary suite incentive program closed to new applications in 2025; confirm current provincial programs with BC Housing. Check BC Housing for anything that has replaced it.</p>

<h2>BC specifics: bylaws and permits</h2>
<p>CMHC requires the suite to comply with municipal bylaws and zoning, and in BC the municipality is where the real work happens. Provincial legislation passed in 2023 requires many BC municipalities to permit secondary suites or detached accessory units on lots zoned for single-family use, which has widened what is possible. It does not remove the need for a building permit, inspections, servicing capacity or compliance with local rules on parking, setbacks and size. Rules differ between Surrey, Langley, Vancouver and smaller communities, and some lots are excluded, so confirm with your municipality before you design anything.</p>
<p>For lenders and for CMHC, a suite that is legal and finished is a suite that counts. A suite that is built without permits is not compliant, cannot be financed under the program, and generally earns no credit toward qualifying. The next section explains what happens once the suite is finished.</p>

<h2>What the suite does for you afterwards</h2>
<p>The program helps you build. A finished, legal, rented suite can then help your next qualification, because lenders credit a share of the rent when they work out your ratios. How much they credit depends on the lender and the method, which the page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a> works through with numbers. Remember that this program does not allow short-term rentals, so the income that counts is long-term rent, and the occupancy rule means you or a close relative will still be living in the home.</p>

<h2>The project sequence</h2>
<ol>
<li><strong>Plan and cost the project.</strong> Get drawings and a firm quote. The financing is capped at the project cost, so a realistic budget, including a contingency, matters.</li>
<li><strong>Talk to a broker before any work starts.</strong> This is where eligibility, the as-improved value and the lender's rules are checked against the numbers.</li>
<li><strong>Obtain approval.</strong> The lender submits the file for insured approval before construction begins.</li>
<li><strong>Permits and construction.</strong> The municipality issues permits, and the work is done. Where the work is paid in stages, CMHC's full-service option validates up to four consecutive advances at no cost, so ask your lender how advances are handled.</li>
<li><strong>Final inspection and final advance.</strong> The suite is completed, inspected and registered where the municipality requires it, and the final funds are released.</li>
</ol>

<h2>When this is not the right tool</h2>
<p>The program is for building a suite, not for general borrowing. You cannot use it to pay off debts or take cash out, and the borrowing cannot exceed the project cost. If your goal is to use equity for other purposes, see the <a href="/cash-out-refinance-bc/">cash-out refinance guide</a> and the broader <a href="/refinance-mortgage-bc/">refinancing hub</a>. If you are buying a property to rent out rather than adding a suite to your home, start with the <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a>. To see how much of a loan your income could support first, use the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a>.</p>

${callout("Before you start construction", "<p>The rule that catches people is the timing. Approval comes first, and a conversation takes fifteen minutes. If you are thinking about a suite, call before you hire a contractor or sign anything, so the file is set up in the right order. The <a href=\"/mortgage-calculators/#suite-checker\">suite eligibility checker</a> gives a first read in a few minutes, and you can <a href=\"/contact/\">contact Joshua</a> to go through the result.</p>")}

${cta({ title: "Check your plan before you build", text: "Use the checker, then book a 15-minute call before construction starts. Joshua will confirm whether the program fits your numbers and what the lender will need to see." })}
`;

export default {
  slug: "/secondary-suite-refinance/",
  h1: "Refinance to build a secondary suite: the CMHC 90 percent program",
  lede: "Since January 15, 2025, a CMHC-insured refinance can fund a legal suite up to 90 percent of the as-improved value. Here are the real rules, and the $80,000 loan that never opened.",
  crumbs: [["Home", "/"], ["Refinancing", "/refinance-mortgage-bc/"], ["Secondary suite refinance", "/secondary-suite-refinance/"]],
  nav: "/refinance-mortgage-bc/",
  calc: !!tool,
  body,
  faqs: [
    { q: "Can I refinance to build a basement suite in BC?", a: "Yes. Since January 15, 2025, a CMHC-insured refinance can lend up to 90 percent of the home's as-improved value to build a new legal, self-contained suite, if the as-improved value is under $2,000,000 and the borrowing does not exceed the project cost. The lender and insurer must approve the file." },
    { q: "Do I need approval before construction starts?", a: "Yes. CMHC's rule is that insured financing must be approved before construction begins, or at least at an early stage. Building first and applying later generally means the program is not available, so speak with a broker before you sign a construction contract." },
    { q: "Is the $80,000 secondary suite loan available?", a: "No. The Canada Secondary Suite Loan Program was announced but never opened, and Budget 2025 confirmed it would not be implemented. The CMHC insured refinance is the live product. Be cautious of any source that tells you to apply for the $80,000 loan." },
    { q: "Can I rent the new suite on Airbnb?", a: "Not under this program. The suite cannot be used as a short-term rental, which CMHC defines as renting it for any period of less than 90 consecutive days. Long-term tenancies are allowed, and you or a close relative must live in one of the units." },
    { q: "Can I take extra cash out when I refinance for a suite?", a: "No. The additional financing is for building or completing the suite only, equity take-out is not permitted, and the new borrowing cannot exceed the project cost. For cash for other purposes, a conventional cash-out refinance is the route to compare." }
  ]
};
