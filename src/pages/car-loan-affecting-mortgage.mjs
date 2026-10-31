import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Yes. A car payment counts as debt, and the stress test magnifies it. Once your debts are the limit, each $100 a month can cut your approval by roughly $15,000 to $17,000.", who: "Anyone car-shopping while home-shopping. Not planning a car? Read the <a href='/how-much-mortgage-can-i-afford/'>affordability guide</a> instead.", next: "Test your own payment in the <a href='/mortgage-calculators/#affordability'>affordability calculator</a>." })}
<h2>The direct answer</h2>
<p>Yes, a car loan or lease affects your mortgage, and it can affect it a lot. A lender adds your car payment to your other monthly debts. It uses them to work out your total debt service ratio. Every dollar you owe on a vehicle is a dollar the lender cannot count toward your mortgage payment. The mortgage payment is calculated at the stress-test rate. So each dollar of car payment removes far more than a dollar's worth of mortgage.</p>
<p>The size of the effect surprises almost everyone. Roughly speaking, once your debts are the limit, each $100 of monthly car payment cuts your approval by about $15,000 to $17,000. A $600 payment can therefore cut an approval by something in the range of $90,000 to $100,000.</p>
<p>This page shows where those figures come from and when they apply. It also shows when they do not, and what to do if you are car-shopping while you are home-shopping.</p>

<h2>How lenders count the payment: the two ratios</h2>
<p>Lenders test two ratios against your gross income, which is your income before tax. The gross debt service ratio (GDS) counts housing costs only. Those are the mortgage payment, property tax, heat and, for a strata unit, a share of the fees. It is capped at 39 percent.</p>
<p>The total debt service ratio (TDS) counts those housing costs plus every other monthly debt payment. That means car loans and leases, credit cards, lines of credit and student loans. It is capped at 44 percent. Your mortgage has to pass both.</p>
<p>The mortgage payment used in the test is calculated at the qualifying rate. That is the greater of your contract rate plus 2 percentage points or 5.25 percent. At a contract rate of 4.50 percent, that means a test at 6.50 percent. The page on <a href="/how-much-mortgage-can-i-afford/">how much mortgage you can afford</a> explains the full method.</p>
<p>There is a gap of five percentage points between the two limits, and it explains the whole topic. The first debts you owe, up to roughly 5 percent of your gross income, fit inside the gap. They often change nothing, because the housing ratio is the one that limits you. After that, every added dollar of debt payment comes straight out of what is left for the mortgage payment.</p>
<p>For someone earning $10,000 a month before tax, 5 percent is $500. That is the $500 a month problem. Below it, a debt is nearly free. Above it, each payment dollar reduces your approval.</p>

<h2>Worked examples at $400, $650 and $900 a month</h2>
<p>These figures are illustrative. Suppose a household earns $120,000 a year, or $10,000 a month. Property tax and heat total $500 a month. They already carry $300 a month in other debts, such as a credit card and a student loan. The contract rate is 4.50 percent, so the qualifying rate is 6.50 percent, over a 25-year amortization. The table shows the approximate maximum mortgage when a car payment is added.</p>
<div class="table-wrap"><table>
<thead><tr><th>Car payment</th><th>Total debts outside the mortgage</th><th>Payment room for the mortgage</th><th>Approximate maximum mortgage</th><th>Change</th></tr></thead>
<tbody>
<tr><th scope="row">None</th><td>$300</td><td>$3,400 (GDS limits)</td><td>about $507,600</td><td>baseline</td></tr>
<tr><th scope="row">$400</th><td>$700</td><td>$3,200 (TDS limits)</td><td>about $477,700</td><td>about $29,900 less</td></tr>
<tr><th scope="row">$650</th><td>$950</td><td>$2,950 (TDS limits)</td><td>about $440,400</td><td>about $67,200 less</td></tr>
<tr><th scope="row">$900</th><td>$1,200</td><td>$2,700 (TDS limits)</td><td>about $403,100</td><td>about $104,500 less</td></tr>
</tbody></table></div>
<p>Notice the pattern. The first $200 of the $400 payment fits in the gap and costs nothing. The remaining $200 reduces the payment room by $200. After that, every added dollar of car payment lowers the room by a dollar.</p>
<p>At a 6.50 percent qualifying rate and a 25-year amortization, each $100 of monthly payment is worth about $14,900 of mortgage. So $600 comes to roughly $89,600. At the 5.25 percent qualifying floor, the same $100 is worth about $16,800, and $600 is roughly $100,700. That is where the range of $90,000 to $100,000 comes from.</p>
<p>You can test your own numbers in the <a href="/mortgage-calculators/#affordability">affordability calculator</a>, which has a field for car payments. The <a href="/mortgage-calculators/#payment">payment calculator</a> shows what a given mortgage costs per month.</p>
${TOOLS.affordability()}

<h2>Timing: before pre-approval, after it, and the closing-day trap</h2>
<p>When the car is bought matters nearly as much as what it costs.</p>
<ul>
<li><strong>Before you apply.</strong> A car already on your credit report is counted in the pre-approval. So the number you receive is honest from the start.</li>
<li><strong>After a pre-approval.</strong> A pre-approval is based on the debts you had when it was issued. If you finance a car afterwards, the lender will usually find it when it checks your credit again. The approval can shrink or fall away.</li>
<li><strong>Between the offer and the closing day.</strong> This is the trap. Lenders commonly review your credit again shortly before the mortgage funds. A new car loan in that window can push your ratios over a limit when the house is already purchased and the deposit is already committed. Do not take on new debt, open new credit or change jobs between pre-approval and closing without calling your broker first.</li>
</ul>
<p>For the order of events from pre-approval to possession, read the <a href="/mortgage-pre-approval-bc/">pre-approval guide</a>. If this is your first purchase, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> places the car decision within the whole sequence.</p>

<h2>Loans and leases</h2>
<p>A car loan and a car lease are both monthly obligations, and lenders generally count both. A lease is not a way to keep a car off your ratios. Lenders may also count the full payment shown on your credit report or contract. So a low advertised monthly figure paired with a balloon payment or fees may be measured differently than you expect. Weighing a lease against a purchase? Ask a broker to run both payments through the ratios before you sign either.</p>
<p>Some lenders will exclude a debt that is nearly finished, for example one with only a few payments left. Others count every debt until it is closed. That policy varies by lender, so do not assume that a loan about to end will drop out of the math. Ask early.</p>

<h2>Your options if the car payment is holding you back</h2>
<ol>
<li><strong>Choose a smaller payment.</strong> A less expensive vehicle, a larger trade-in or down payment, or a longer loan term lowers the monthly figure that counts. A longer term costs more in interest over time, so weigh that against the approval you gain.</li>
<li><strong>Pay the loan down or off.</strong> A payment that is gone no longer counts. Before you use savings to do that, check that you do not need them for your down payment and closing costs. The <a href="/mortgage-calculators/#down-payment">down payment calculator</a> shows the minimum you need.</li>
<li><strong>Add a co-borrower.</strong> A second income can raise the amount you qualify for. But the second person's debts count as well, and they become responsible for the mortgage. The page on <a href="/mortgage-with-a-cosigner/">mortgages with a co-signer</a> explains the roles and the risks.</li>
<li><strong>Wait.</strong> If the purchase date is flexible, buy the home first and the car afterwards. Then the car payment is judged against a mortgage that is already in place. Make sure you can afford both, because the lender no longer checks.</li>
</ol>

<h2>What to bring to the conversation</h2>
<p>If you are considering both a car and a home, tell your broker before you visit a dealership. Bring the amount you expect to finance, the payment you have been quoted and the interest rate. The <a href="/mortgage-application-checklist/">application checklist</a> shows how debts are documented.</p>
<p>The broker can run the numbers with and without the car. He can tell you what the difference is worth in purchase price. You can <a href=\"/contact/\">contact Joshua</a> before you start shopping.</p>

${callout("A rule of thumb, not a rule", "<p>Every lender calculates the payment, treats leases and nearly finished loans, and rounds ratios in its own way. The figures here use the standard 39 and 44 percent limits and the stress-test rate. They are for illustration only. A real answer needs your real file.</p>")}

${cta({ title: "Planning to buy a car and a home?", text: "Run your figures through the affordability calculator, then book a 15-minute call. Joshua will show you how the car changes your approval before you sign for either." })}
`;

export default {
  slug: "/car-loan-affecting-mortgage/",
  h1: "Does a car loan affect your mortgage?",
  lede: "A car payment counts as debt, and the stress test magnifies it. Here is the math at $400, $650 and $900 a month, and how to time a car purchase around a mortgage.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Car loan and your mortgage", "/car-loan-affecting-mortgage/"]],
  nav: "/first-time-home-buyer-bc/",
  calc: true,
  body,
  faqs: [
    { q: "Does a car loan reduce how much mortgage I can get?", a: "Yes, once your total debts are high enough that the total debt service ratio, capped at 44 percent of gross income, becomes the limit. After that point, each $100 of monthly payment can reduce the mortgage you qualify for by roughly $15,000 to $17,000, because the mortgage is tested at the stress-test rate." },
    { q: "Should I buy a car before or after I buy a home?", a: "Generally after, if your timing is flexible. A car financed before you apply is counted honestly in the approval. A car financed after pre-approval, or before closing, can shrink or cancel the approval when the lender checks your credit again. Speak with your broker before taking on any new debt." },
    { q: "Does a car lease count against my mortgage application?", a: "Generally yes. Lenders count lease payments as monthly debt along with loan payments. Policies on how a lease is measured can differ by lender, so ask a broker to run the real payment through the ratios before you sign a lease." },
    { q: "Will paying off my car loan help me qualify?", a: "It can, because a payment that no longer exists is not counted. Compare the benefit with what the cash is needed for. Savings used to clear the loan may be needed for your down payment and closing costs, which lenders also verify." },
    { q: "Can a co-borrower offset my car payment?", a: "A co-borrower's income can raise the amount you qualify for, but their debts are added to the calculation too, and they take on liability for the mortgage. It can work when their income is strong and their debts are low. The co-signer page explains the trade-offs." }
  ]
};
