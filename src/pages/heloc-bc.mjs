import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>What a HELOC is, and what it is not</h2>
<p>A home equity line of credit is a revolving credit line secured by your home. The lender approves a limit, you borrow against it when you choose, you pay interest only on what you have drawn, and as you repay, the room becomes available again. It is the same mechanic as a credit card, with two differences that matter: the rate is far lower because the lender holds your home as security, and the lender can, under the contract, reduce or freeze the limit if your situation or the property changes.</p>
<p>It is not a mortgage in the sense most people mean. A mortgage has a fixed amortization, a schedule of principal and interest payments, and a term that ends. A HELOC has no amortization. The minimum payment is usually interest only, which means a balance can sit for years without shrinking. That flexibility is the product's main advantage and its main risk, and the rest of this page is about keeping those two things straight.</p>

<h2>The limits: 65 percent standalone, 80 percent combined</h2>
<p>For federally regulated lenders, the Office of the Superintendent of Financial Institutions sets the ceilings in Guideline B-20. A HELOC on its own is limited to 65 percent of the home's value. When a HELOC is combined with a conventional mortgage on the same property, the total of the two cannot exceed 80 percent of the value, and any lending above the 65 percent mark has to be the amortizing kind, not revolving. OSFI restated these expectations in an advisory on combined loan plans (2022–2023).</p>
<p>In practice, on a home worth $900,000 with a $450,000 mortgage, the most a federally regulated lender could extend in total is $720,000, so the room for a line is $270,000, and that whole amount could be revolving because it sits under the 65 percent line ($585,000). On the same home with a $650,000 mortgage, the total ceiling is still $720,000, leaving $70,000 of room, and because the mortgage already exceeds 65 percent of value, the lender would structure any extra borrowing as an amortizing portion rather than a revolving line. Credit unions in BC are provincially regulated and may set their own policies, so the same numbers do not always apply there.</p>
<p>The <a href="/home-equity-estimator/">home equity estimator</a> applies these limits to your own figures and shows the difference between what a refinance could reach and what a line could reach, without looking anything up or sending anything anywhere.</p>

<h2>How a HELOC is priced</h2>
<p>HELOC rates are variable and quoted as a spread over the lender's prime rate, for example prime plus half a percentage point. When the Bank of Canada moves its policy rate, prime generally moves with it, and the interest cost on any balance you carry changes at once. There is no fixed-rate HELOC in the ordinary sense, though some lenders let you lock a portion of the balance into a fixed-rate amortizing segment.</p>
<p>Lenders also differ on whether the line sits under its own charge or under a collateral charge that covers the mortgage as well. This affects how easy the line is to move at renewal, which is covered on the page about <a href="/collateral-charge-mortgage/">collateral charge mortgages</a>. On the fee side, a line is typically set up with an appraisal and legal registration, which the lender may or may not cover. Ask before you sign, and ask what the discharge fee would be if you later close it.</p>

<h2>HELOC, refinance or second mortgage: the decision</h2>
<p>Three products borrow against the same equity, and the right one depends on what the money is for, how long you will carry it, and what your current mortgage looks like.</p>
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
<p>A HELOC suits money you may or may not need, such as a renovation that will be paid in stages, or a reserve for a business or a family event. A <a href="/cash-out-refinance-bc/">cash-out refinance</a> suits a single large amount you will carry for years, where an amortized payment at a mortgage rate is the cheaper and more disciplined choice. A <a href="/second-mortgage-bc/">second mortgage</a> is usually the answer only when the first mortgage has a rate too good to break and the borrower does not qualify for a line at a prime lender. The <a href="/refinance-mortgage-bc/">refinance hub</a> walks through the full set of options.</p>

<h2>Readvanceable structures</h2>
<p>Many lenders sell the mortgage and the line as one package under a single collateral charge. As you pay down the mortgage principal, the line's available room grows by the same amount, within the 65 percent limit. This is a <a href="/readvanceable-mortgage/">readvanceable mortgage</a>, and it is the structure used for the <a href="/smith-manoeuvre/">Smith Manoeuvre</a>, in which borrowed money is invested so that the interest may be deductible. That strategy has tax rules attached, and anyone considering it should confirm the details with a tax professional before relying on the deduction.</p>
<p>The trade-off is the collateral charge itself. Because it secures both products, moving to another lender at renewal usually means paying out and re-registering rather than a simple transfer, which can add legal costs and may affect whether the stress-test exemption for switches applies.</p>

<h2>Qualifying for a HELOC</h2>
<p>A HELOC is underwritten like a mortgage. The lender checks income, credit and the property, and applies debt-service ratios. The stress test applies: federally regulated lenders qualify the line at the higher of the contract rate plus two percentage points and 5.25 percent, and they usually assume the full limit is drawn even if you intend to leave it empty. That assumption catches people. A $200,000 line, tested as fully drawn, can reduce what you qualify for on a later purchase even if the balance is zero.</p>
<p>Because the lender treats an approved line as potential debt, it is worth deciding on the size you actually need rather than the maximum you are offered. A smaller line is easier to carry on your file and easier to resist drawing on.</p>

${cta({ title: "Estimate your room, then talk it through", text: "Run the equity estimator, then book a 15-minute call. Joshua will check the number against the lender limits, your income and your current mortgage, and tell you whether a line, a refinance or neither is the right move." })}

<h2>The risks, in plain language</h2>
<ul>
<li><strong>The revolving temptation.</strong> A line that is always available tends to get used. Interest-only minimums mean a balance can persist for a decade with no principal repaid. If you borrow, set your own repayment schedule and treat the minimum as a floor, not a plan.</li>
<li><strong>Variable rate exposure.</strong> Every change in prime changes your cost immediately. A balance that was comfortable at one rate may not be at another.</li>
<li><strong>Demand and review clauses.</strong> Most HELOC agreements allow the lender to reduce the limit, freeze further draws or require repayment in certain circumstances, such as a fall in the home's value, a change in your credit, or a missed payment. This is rare for borrowers in good standing, but the clause is real and worth reading before you sign.</li>
<li><strong>Collateral charges.</strong> A line registered under a collateral charge makes switching lenders slower and costlier. If you expect to shop your mortgage at renewal, factor this in.</li>
<li><strong>Qualification drag.</strong> An approved line counts against you on future applications even when unused.</li>
</ul>
<p>None of these is a reason to avoid a HELOC. They are reasons to size it deliberately, use it for a purpose with an exit, and know what the contract allows the lender to do.</p>

<h2>What it costs you to arrange one</h2>
<p>On a line placed with a prime lender, the lender pays the broker and you pay nothing for the arrangement. Broker fees arise only on certain B-lender and private files, and when they do, BC rules require written disclosure on a Form 1A before you commit. The appraisal, registration and discharge costs belong to the lender's fee schedule, not the broker's, and they vary by lender. If a HELOC is part of a larger plan, Joshua can show you the full cost of each route side by side, or you can <a href="/contact/">contact him</a> with a question first.</p>

${callout("A reserve is not a budget", "<p>The best use of a HELOC is often as a reserve you rarely touch: a source of funds for a real need, drawn and repaid on a schedule you set. The worst use is as a supplement to monthly spending. Decide which one yours is before the lender hands you the limit.</p>")}
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
