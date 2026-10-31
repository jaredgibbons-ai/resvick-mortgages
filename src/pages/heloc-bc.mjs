import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "A HELOC is a credit line secured by your home. Federally regulated lenders cap it at 65 percent of your home's value on its own, or 80 percent combined with your mortgage. The rate is variable, and the minimum payment is usually interest only.",
  who: "Homeowners who want flexible access to equity for a renovation, a reserve or a project.",
  next: "See your room with the <a href=\"/home-equity-estimator/\">home equity estimator</a>, then compare it with a refinance."
})}
<h2>What a HELOC is, and what it is not</h2>
<p>A home equity line of credit is a revolving credit line secured by your home. The lender approves a limit. You borrow when you choose, and you pay interest only on what you've drawn. As you pay it back, the room opens up again.</p>
<p>It works like a credit card, with two big differences. The rate is far lower, because your home is the security. And the contract lets the lender reduce or freeze the limit if your situation or the property changes.</p>
<p>It isn't a mortgage in the usual sense. A mortgage has an amortization, a set schedule of principal and interest, and a term that ends. A HELOC has no amortization. The minimum payment is usually interest only, so a balance can sit for years without shrinking.</p>
<p>That flexibility is the product's main strength and its main risk. The rest of this page helps you keep the two straight.</p>

<h2>The limits: 65 percent standalone, 80 percent combined</h2>
<p>For federally regulated lenders, OSFI sets the ceilings in Guideline B-20. A HELOC on its own is capped at 65 percent of your home's value.</p>
<p>When a HELOC sits alongside a regular mortgage on the same home, the two together can't go above 80 percent of the value. Any borrowing above the 65 percent mark has to be the amortizing kind, not revolving. OSFI restated these rules in an advisory on combined loan plans (2022–2023).</p>
<p>Here's how that plays out. Take a home worth $900,000 with a $450,000 mortgage. The total a federally regulated lender could lend is $720,000, so there's $270,000 of room for a line. All of it could be revolving, because it sits under the 65 percent line of $585,000.</p>
<p>Now say the same home has a $650,000 mortgage. The total ceiling is still $720,000, which leaves $70,000 of room. The mortgage is already above 65 percent of value. So the lender would set up any extra borrowing as an amortizing portion, not a revolving line.</p>
<p>BC credit unions are provincially regulated and may set their own policies. The same numbers don't always apply there.</p>
<p>The <a href="/home-equity-estimator/">home equity estimator</a> applies these limits to your own numbers. It shows what a refinance could reach next to what a line could reach. It doesn't look anything up or send anything anywhere.</p>

<h2>How a HELOC is priced</h2>
<p>HELOC rates are variable. They're quoted as a spread over the lender's prime rate, for example prime plus half a point. When the Bank of Canada moves its policy rate, prime usually follows. The interest on any balance you carry changes right away.</p>
<p>There's no fixed-rate HELOC in the usual sense. Some lenders do let you lock part of the balance into a fixed-rate, amortizing piece.</p>
<p>Lenders also differ on how the line is registered. It can sit under its own charge, or under a collateral charge that also covers the mortgage. That affects how easy it is to move at renewal. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> covers it.</p>
<p>Setting up a line usually involves an appraisal and legal registration. The lender may or may not cover those. Ask before you sign, and ask what the discharge fee would be if you close it later.</p>

<h2>HELOC, refinance or second mortgage: the decision</h2>
<p>Three products borrow against the same equity. The right one depends on what the money is for, how long you'll carry it and what your current mortgage looks like.</p>
<table>
<thead><tr><th>Question</th><th>HELOC</th><th>Cash-out refinance</th><th>Second mortgage</th></tr></thead>
<tbody>
<tr><td>Touches your first mortgage?</td><td>No, if added alongside it</td><td>Yes, replaces it</td><td>No</td></tr>
<tr><td>Penalty on the first mortgage?</td><td>No</td><td>Usually, inside a term</td><td>No</td></tr>
<tr><td>Rate</td><td>Variable, prime plus a spread</td><td>Mortgage rate, fixed or variable</td><td>Higher, often with lender and broker fees</td></tr>
<tr><td>Repayment</td><td>Interest only minimum, revolving</td><td>Amortized</td><td>Often interest only, short term</td></tr>
<tr><td>Best for</td><td>Ongoing or uncertain needs, a reserve</td><td>A single large, long-held amount</td><td>Short-term need when the first mortgage must stay</td></tr>
</tbody>
</table>
<p>A HELOC suits money you may or may not need. Think of a renovation paid in stages, or a reserve for a business or family event.</p>
<p>A <a href="/cash-out-refinance-bc/">cash-out refinance</a> suits one large amount you'll carry for years. There, an amortized payment at a mortgage rate is usually cheaper and more disciplined.</p>
<p>A <a href="/second-mortgage-bc/">second mortgage</a> is usually the answer only in one case. Your first mortgage has a rate too good to break, and you don't qualify for a line at a prime lender. The <a href="/refinance-mortgage-bc/">refinance hub</a> walks through all the options.</p>

<h2>Readvanceable structures</h2>
<p>Many lenders sell the mortgage and the line as one package, under one collateral charge. As you pay down the mortgage, the line's room grows by the same amount, within the 65 percent limit. That's a <a href="/readvanceable-mortgage/">readvanceable mortgage</a>.</p>
<p>It's the structure behind the <a href="/smith-manoeuvre/">Smith Manoeuvre</a>. In that strategy, borrowed money is invested so the interest may be tax-deductible. There are tax rules attached. Confirm the details with a tax professional before you rely on the deduction.</p>
<p>The trade-off is the collateral charge. It secures both products, so moving lenders at renewal usually means paying out and re-registering, not a simple transfer. That can add legal costs. It may also affect whether the stress-test exemption for switches applies.</p>

<h2>Qualifying for a HELOC</h2>
<p>A HELOC is approved like a mortgage. The lender checks your income, credit and property, and applies debt-service ratios.</p>
<p>The stress test applies too. Federally regulated lenders qualify the line at your contract rate plus two points, or 5.25 percent, whichever is higher. They usually assume the full limit is drawn, even if you plan to leave it empty.</p>
<p>That catches people out. A $200,000 line, tested as fully drawn, can shrink what you qualify for on a later purchase, even with a zero balance.</p>
<p>Since the lender treats an approved line as possible debt, pick the size you actually need, not the biggest one offered. A smaller line is easier to carry on your file, and easier to leave alone.</p>

${cta({ title: "Estimate your room, then talk it through", text: "Run the equity estimator, then book a 15-minute call. Joshua will check the number against lender limits, your income and your mortgage. Then he'll tell you if a line, a refinance or neither is the right move." })}

<h2>The risks, in plain language</h2>
<ul>
<li><strong>The revolving temptation.</strong> A line that's always there tends to get used. With interest-only minimums, a balance can sit for a decade with no principal paid. If you borrow, set your own payback schedule. Treat the minimum as a floor, not a plan.</li>
<li><strong>Variable rate exposure.</strong> Every change in prime changes your cost right away. A balance that felt fine at one rate may not at another.</li>
<li><strong>Demand and review clauses.</strong> Most HELOC contracts let the lender cut the limit, freeze new draws or demand repayment in some cases. Triggers include a drop in your home's value, a change in your credit or a missed payment. It's rare for borrowers in good standing, but the clause is real. Read it before you sign.</li>
<li><strong>Collateral charges.</strong> A line under a collateral charge makes switching lenders slower and costlier. Factor that in if you plan to shop your mortgage at renewal.</li>
<li><strong>Qualification drag.</strong> An approved line counts against you on future applications, even when it's unused.</li>
</ul>
<p>None of these is a reason to avoid a HELOC. They're reasons to size it on purpose, use it for something with an exit, and know what the contract lets the lender do.</p>

<h2>What it costs you to arrange one</h2>
<p>On a line placed with a prime lender, the lender pays the broker. You pay nothing for the arrangement. Broker fees come up only on some B-lender and private files. When they do, BC rules require written disclosure on a Form 1A before you commit.</p>
<p>Appraisal, registration and discharge costs come from the lender's fee schedule, not the broker's, and they vary by lender. If a HELOC is part of a bigger plan, Joshua can show you the full cost of each route side by side. Or <a href="/contact/">contact him</a> with a question first.</p>

${callout("A reserve is not a budget", "<p>The best use of a HELOC is often as a reserve you rarely touch. It's there for a real need, drawn and repaid on a schedule you set. The worst use is topping up monthly spending. Decide which one yours is before the lender hands you the limit.</p>")}
`;

export default {
  slug: "/heloc-bc/",
  h1: "HELOC in BC: home equity lines of credit, explained honestly",
  lede: "How a home equity line of credit works, the 65 and 80 percent limits, what it costs, and when a HELOC beats a refinance or a second mortgage.",
  crumbs: [["Home", "/"], ["Refinancing", "/refinance-mortgage-bc/"], ["HELOC in BC", "/heloc-bc/"]],
  nav: "/refinance-mortgage-bc/", body,
  faqs: [
    { q: "How much can I borrow on a HELOC in BC?", a: "At a federally regulated lender, a standalone line is capped at 65 percent of your home's value, and a line plus a mortgage together cannot exceed 80 percent. Subtract your mortgage balance from 80 percent of the appraised value to see the room, then check whether any of it falls above the 65 percent revolving line." },
    { q: "Does a HELOC have to pass the stress test?", a: "Yes, at federally regulated lenders. The line is qualified at the higher of your contract rate plus two percentage points and 5.25 percent, and lenders usually treat the full limit as drawn. An approved line also counts as debt on future applications, even with a zero balance." },
    { q: "Is a HELOC better than refinancing?", a: "For money you may need in stages or as a reserve, a line avoids a penalty on your first mortgage and charges interest only on what you draw. For a single large amount you will carry for years, an amortized refinance at a mortgage rate is usually cheaper and more disciplined. The purpose decides." },
    { q: "Can the lender reduce or freeze my HELOC?", a: "Most agreements allow it under conditions such as a drop in the home's value, a change in your credit or missed payments. It is uncommon for borrowers in good standing, but the clause is in the contract and you should read it before you sign." },
    { q: "Do I pay a broker fee to arrange a HELOC?", a: "Not on a line placed with a prime lender, where the lender pays the broker. Fees arise only on some B-lender and private files, with written disclosure first. Appraisal, registration and discharge fees are the lender's and vary, so ask for the schedule." }
  ]
};
