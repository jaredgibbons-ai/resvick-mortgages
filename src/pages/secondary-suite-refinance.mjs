import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { short } from "../lib/short.mjs";

// Embed the live eligibility checker once it exists (built separately); the page stands on its own without it.
// The source line inside the shared tool is one long sentence; split it here so this page reads easily (no-op if the wording changes).
const tool = TOOLS["suite-checker"]
  ? TOOLS["suite-checker"]().replace("(applications on or after January 15, 2025), CMHC's refinance fact sheet", "(applications on or after January 15, 2025). Also CMHC's refinance fact sheet")
  : "";

const body = `
${short({
  answer: "Since January 15, 2025, a CMHC-insured refinance can lend up to 90 percent of your home's value after a legal suite is built. The money can only pay for the suite, and approval has to come before construction starts.",
  who: "BC homeowners planning a basement suite, laneway home or garden suite they or a close relative will live beside.",
  next: "Run the <a href=\"/mortgage-calculators/#suite-checker\">suite eligibility checker</a>, then talk to a broker before you sign with a contractor."
})}
<h2>What the program is</h2>
<p>Since January 15, 2025, CMHC has insured a special refinance for homeowners who want to add a suite. The idea is simple. You already own your home. You want to add a legal, self-contained suite. That could be a basement suite, a laneway home or a garden suite.</p>
<p>Normally a refinance is capped at 80 percent of what your home is worth today. This program lets you borrow up to 90 percent of what it will be worth once the suite is built. That figure is called the as-improved value. It's what sets the program apart.</p>
<p>It's a mortgage insurance product. You get the loan through a lender that works with CMHC, and the insurance premium is added to your mortgage. It isn't a grant. It isn't a separate government loan either. If you've read about an $80,000 suite loan, read the myth-buster section below before you plan around it.</p>

<h2>The program box: every rule that matters</h2>
<div class="table-wrap"><table>
<thead><tr><th>Item</th><th>The rule, as published by CMHC</th></tr></thead>
<tbody>
<tr><th scope="row">Maximum loan</th><td>Up to 90 percent of the as-improved value.</td></tr>
<tr><th scope="row">Value limit</th><td>The as-improved value must be below $2,000,000.</td></tr>
<tr><th scope="row">Units</th><td>Up to 4 units in total. The units you have now count.</td></tr>
<tr><th scope="row">Amortization</th><td>Up to 30 years. Going past 25 years adds a 0.20 percent premium surcharge.</td></tr>
<tr><th scope="row">Ratios</th><td>39 percent gross debt service and 44 percent total debt service. You qualify at the contract rate plus 2 points, or 5.25 percent, whichever is higher.</td></tr>
<tr><th scope="row">Credit score</th><td>At least 600 for one borrower or guarantor.</td></tr>
<tr><th scope="row">Who lives there</th><td>You must already own the home. You, or a spouse, partner, parent or child, must live in one unit rent-free.</td></tr>
<tr><th scope="row">The suite</th><td>Self-contained, and legal under local bylaws and zoning.</td></tr>
<tr><th scope="row">Short-term rentals</th><td>Not allowed. The suite can't be rented for less than 90 days in a row.</td></tr>
<tr><th scope="row">Use of the money</th><td>Building or finishing the suite only. No cash out. The new money can't be more than the project cost.</td></tr>
<tr><th scope="row">Timing</th><td>CMHC approval is needed before construction starts, or at least at an early stage.</td></tr>
</tbody></table></div>
<p>These terms come from CMHC's refinance fact sheet and product page. The insurer can change them. A lender may also add its own rules. So even if you fit CMHC's rules, the lender still has to approve you and your plans.</p>

<h2>The timing trap</h2>
<p>The last row in that table matters most. CMHC's rule is that the financing must be approved before building starts. At the latest, it should happen at an early stage. If you build first and ask later, you'll usually lose the program. The money is meant to pay for work that hasn't been done yet.</p>
<p>A contractor's deposit, a demolition, or a permit that turns into real work can all muddy the timing. So talk to a broker before you sign a building contract. Don't wait for the first invoice.</p>

${tool}

<h2>How it compares with a regular 80 percent refinance</h2>
<p>A regular refinance with an A lender stops at 80 percent of the home's appraised value. That appraisal usually looks at what the home is worth today. If you want to build a suite, that often leaves too little room. The program changes the math in two ways. The percentage is higher, and the value used is the after-suite value.</p>
<p>Here's an example with made-up numbers. Your home is worth $900,000 today. An appraiser thinks it will be worth $1,000,000 once the suite is built. You owe $620,000. The suite is quoted at $160,000.</p>
<ul>
<li><strong>Regular refinance.</strong> 80 percent of $900,000 is $720,000. You owe $620,000, so you have $100,000 of room. That's $60,000 short of the cost.</li>
<li><strong>The CMHC program.</strong> 90 percent of $1,000,000 is $900,000. But the new money can't be more than the project cost. So the total is $620,000 plus $160,000, or $780,000. The whole project is paid for.</li>
</ul>
<p>Some lenders will use an after-suite value on a regular refinance. Some offer construction loans paid out in stages. So the regular route isn't always as tight as the example. The program's edge is that the after-suite value is built right into the insurer's rules.</p>
<p>The cost of the program is the premium. It's a percentage of the insured loan. It goes up as you borrow a bigger share of the home's value, and it's added to your balance.</p>
<p>Say the usual premium bands for owner-occupied homes apply to the after-suite value. The example's $780,000 loan is 78 percent of $1,000,000. That falls in the 75.01 to 80 percent band, at 2.40 percent. That's about $18,720. A 30-year amortization adds the 0.20 percent surcharge. That brings it to 2.60 percent, or about $20,280. Confirm the premium on a real quote. You can test other numbers with the <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a>.</p>

<h2>The myth: the $80,000 secondary suite loan never existed</h2>
<p>You may have heard of the Canada Secondary Suite Loan Program. It promised $80,000 at 2 percent over 15 years. The federal government announced it in 2024. It started at $40,000 and rose to $80,000 that December.</p>
<p>It never opened for applications. Budget 2025 confirmed it would not go ahead. The reason given was that it could overlap with the insured mortgage changes announced in January 2025.</p>
<p>The CMHC insured refinance on this page is the real, live product. Some articles and AI summaries still talk about the loan as if you could apply. If a source tells you to apply for the $80,000 loan, be careful with that source.</p>
<p>Looking for provincial money? BC's Secondary Suite Incentive Program stopped taking new applications after March 30, 2025 (Province of BC, March 19, 2025). Check BC Housing for anything that has replaced it.</p>

<h2>BC details: bylaws and permits</h2>
<p>CMHC needs the suite to meet local bylaws and zoning. In BC, the city or town is where the real work happens. A 2023 provincial law requires many BC municipalities to allow suites or small detached units on single-family lots. That has opened up more options.</p>
<p>It doesn't remove the need for a building permit and inspections. You still need enough water and sewer capacity, and you still have to meet local rules on parking, setbacks and size. Rules differ between Surrey, Langley, Vancouver and smaller towns. Some lots are left out. So check with your municipality before you design anything.</p>
<p>For lenders and CMHC, a suite that's legal and finished is a suite that counts. A suite built without permits doesn't meet the rules. It can't be financed under this program. It usually won't help you qualify either. The next section explains what happens once the suite is done.</p>

<h2>What the suite does for you afterwards</h2>
<p>The program helps you build. Once the suite is finished, legal and rented, it can help your next mortgage too. Lenders count a share of the rent when they work out your ratios. How much they count depends on the lender and the method. The page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a> works through it with numbers.</p>
<p>Keep two things in mind. This program doesn't allow short-term rentals, so the rent that counts is long-term rent. And you or a close relative will still be living in the home.</p>

<h2>The project, step by step</h2>
<ol>
<li><strong>Plan and price the project.</strong> Get drawings and a firm quote. The loan is capped at the project cost, so a realistic budget with a cushion matters.</li>
<li><strong>Talk to a broker before any work starts.</strong> This is where your eligibility, the after-suite value and the lender's rules get checked against the numbers.</li>
<li><strong>Get approved.</strong> The lender sends the file for insured approval before building starts.</li>
<li><strong>Permits and building.</strong> The municipality issues the permits, and the work gets done. If the work is paid in stages, CMHC's full-service option checks up to four advances in a row at no cost. Ask your lender how they handle advances.</li>
<li><strong>Final inspection and final payment.</strong> The suite is finished and inspected. It's registered if your municipality requires that. Then the last of the money is released.</li>
</ol>

<h2>When this isn't the right tool</h2>
<p>The program is for building a suite. It isn't for general borrowing. You can't use it to pay off debts or take cash out, and you can't borrow more than the project costs.</p>
<p>If you want to use your equity for other things, see the <a href="/cash-out-refinance-bc/">cash-out refinance guide</a> and the wider <a href="/refinance-mortgage-bc/">refinancing hub</a>. If you're buying a place to rent out, start with the <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a>. To see first how much your income could support, use the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a>.</p>

${callout("Before you start building", "<p>The rule that catches people is the timing. Approval comes first, and a conversation takes fifteen minutes. If you're thinking about a suite, call before you hire a contractor or sign anything. That way the file is set up in the right order. The <a href=\"/mortgage-calculators/#suite-checker\">suite eligibility checker</a> gives a first read in a few minutes. You can <a href=\"/contact/\">contact Joshua</a> to go through the result.</p>")}

${cta({ title: "Check your plan before you build", text: "Use the checker, then book a 15-minute call before building starts. Joshua will confirm whether the program fits your numbers. He'll also tell you what the lender will need to see." })}
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
