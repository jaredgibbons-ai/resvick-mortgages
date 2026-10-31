import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Lenders test you at a higher rate than you'll pay, then cap housing costs at about 39% of gross income and all debts at about 44%. Your debts and down payment move the number most.", who: "Buyers who want to know their realistic price range before they start looking.", next: 'Try the <a href=\"/mortgage-calculators/#affordability\">affordability calculator</a>, then book a call for a real pre-approval.' })}
<h2>Start with your own numbers</h2>
<p>This calculator applies the same ratios and stress-test rate that lenders use for insured mortgages. Enter your income, debts and the rate you expect, and it shows an estimate of the most you could borrow and the highest price that implies. The rest of this page explains how the answer is built, so you can see which of your numbers moves it the most. The same tool also sits with the others on the <a href="/mortgage-calculators/#affordability">mortgage calculators page</a>.</p>
<div class="tools">${TOOLS.affordability()}</div>

<h2>How lenders actually decide</h2>
<p>Lenders do not pick a multiple of your income and stop. They test your finances against two ratios, and the lower of the two results sets the limit.</p>
<ul>
<li><strong>Gross debt service (GDS)</strong> measures housing costs against income. It adds the mortgage payment, property tax, heating and half of any condo or strata fees, then divides by your gross (before-tax) income. For insured mortgages the limit is 39 percent.</li>
<li><strong>Total debt service (TDS)</strong> adds your other debt payments to those housing costs and divides by the same income. For insured mortgages the limit is 44 percent.</li>
</ul>
<p>Whichever ratio you hit first is the one that limits you. If you carry little other debt, GDS is usually the binding one. If you carry a car loan, a line of credit or support payments, TDS can take over and your borrowing power drops. The calculator tells you which of the two limited the result.</p>
<p>You may see claims that lenders cap you at 4.5 times your income. That is not a rule for borrowers. It comes from a federal regulator's quarterly limit on how many high loan-to-income mortgages a lender can write in its portfolio, and it does not set your personal maximum. Your limit comes from the ratios above.</p>

<h2>The stress test sets the payment that counts</h2>
<p>The payment used in the ratios is not the payment you will make. Lenders calculate it at the qualifying rate, which is the greater of your contract rate plus 2 percentage points or 5.25 percent. A 4.50 percent mortgage is tested at 6.50 percent. A 3.00 percent mortgage is tested at 5.25 percent, because the floor applies. The test is meant to check that you could still manage if rates rose, and it is the single biggest reason people qualify for less than they expect.</p>
<p>This is also why a lower advertised rate does not always raise your qualifying amount as much as you hope. If your contract rate is below 3.25 percent, the qualifying rate is the same 5.25 percent, so a lower rate helps your payment but not your approval.</p>

${cta({ title: "Run it against your real documents", text: "The calculator uses what you type. A call with Joshua checks it against how lenders would actually count your income and debts.", href: "/contact/", label: "Contact Joshua" })}

<h2>What counts as a debt</h2>
<p>Everything with a required monthly payment goes into TDS, and people regularly forget some of them. The list includes:</p>
<ul>
<li>Car loans and leases. See how they affect approvals on the <a href="/car-loan-affecting-mortgage/">car loan and your mortgage</a> page.</li>
<li>Credit cards and lines of credit, at the payment the lender calculates for each.</li>
<li>Student loans and any personal or consolidation loans.</li>
<li>Child or spousal support payments.</li>
<li>Payments on other properties you own.</li>
</ul>
<p>Paying a debt off entirely removes its payment from the ratio, but only helps if TDS is your limit. In the example below, clearing a $500 monthly debt changes nothing because the housing ratio was already the binding one.</p>

<h2>How different income is counted</h2>
<p>Lenders count income by how reliable and documentable it is. The rules vary by lender, so treat this as the general picture.</p>
<ul>
<li><strong>Salary and hourly pay</strong> are counted from your pay stubs and employment letter, usually at base pay.</li>
<li><strong>Overtime, bonus and commission</strong> are usually averaged over a track record. A short history may be counted partially or not at all.</li>
<li><strong>Self-employed income</strong> is commonly assessed from your tax returns, which often show less than you earn because of deductions. There are other routes if your returns understate your income. The <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a> explains them.</li>
<li><strong>Rental or suite income</strong> is counted differently by each lender. One method is an offset, which takes a share of rent off your housing costs, typically 50 to 80 percent. The other is an add-back, which adds roughly 50 percent of rent to your income. CMHC's guidelines allow up to 100 percent of gross rent on an owner-occupied two-unit home as a ceiling, though many lenders use less. A suite that is not legal and registered generally counts for nothing at a mainstream lender. See the <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a>.</li>
</ul>

<h2>Five levers that raise your number</h2>
<ol>
<li><strong>Reduce debts with the biggest payments.</strong> This helps when TDS is the limit.</li>
<li><strong>Save a larger down payment.</strong> It cuts the loan, and it can reduce or remove the insurance premium. The <a href="/down-payment-guide-bc/">down payment guide</a> has the tiers.</li>
<li><strong>Add a qualifying co-borrower or a legitimate co-signer.</strong> A second income helps, though both parties become responsible. See <a href="/mortgage-with-a-cosigner/">buying with a co-signer</a>.</li>
<li><strong>Use a 30-year amortization if you are eligible.</strong> First-time buyers and buyers of new builds can use it on an insured mortgage. It lowers the payment used in the ratios.</li>
<li><strong>Improve your credit.</strong> A stronger profile widens the lenders open to you. The <a href="/build-credit-for-a-mortgage/">credit building guide</a> shows where to start.</li>
</ol>

<h2>Worked examples</h2>
<p>These are illustrative. They use an example rate of 4.50 percent, a 25-year amortization and an $80,000 down payment, with $300 a month in property tax and $120 in heating. All results come from this site's calculator engine, and none is an approval.</p>
<div class="table-wrap"><table>
<thead><tr><th>Scenario</th><th>Limiting ratio</th><th>Maximum price</th></tr></thead>
<tbody>
<tr><th scope="row">Base: $120,000 income, $500 monthly debts</th><td>GDS</td><td>$583,900</td></tr>
<tr><th scope="row">Same, with no monthly debts</th><td>GDS</td><td>$583,900</td></tr>
<tr><th scope="row">Same, with $1,200 monthly debts</th><td>TDS</td><td>$483,700</td></tr>
<tr><th scope="row">Base, with a $120,000 down payment</th><td>GDS</td><td>$625,300</td></tr>
<tr><th scope="row">Base, with 30-year amortization (eligible buyer)</th><td>GDS</td><td>$617,800</td></tr>
<tr><th scope="row">Base, with $150,000 income</th><td>GDS</td><td>$725,100</td></tr>
<tr><th scope="row">Base, at a 6.00% rate instead of 4.50%</th><td>GDS</td><td>$523,500</td></tr>
</tbody></table></div>
<p>The pattern is clear. Eliminating a modest debt changed nothing, because housing costs were the constraint, while a large debt shifted the limit to TDS and removed about $100,000 of buying power. A higher down payment and a longer amortization each helped, and a rate increase hurt, since the qualifying rate rises with it. Notice also that the extra $40,000 down raised the maximum price by $41,400. That's a little more than the deposit itself, because a smaller loan carries a smaller insurance premium.</p>

<h2>What the number is and is not</h2>
<p>The result is an estimate for planning. A lender confirms your income, credit and the property before any approval, and individual lenders apply their own policies. Use the number to set a search range, but keep your comfort in mind. The most a lender will approve isn't the same as what makes sense for your budget. For the full sequence, read the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a>, then <a href="/contact/">contact Joshua</a> to review your own file.</p>

${callout("A practical rule", "<p>Run the calculator three ways: with your best case, your likely case and a case where your income drops a little. If the payment still works in the third, the number is solid.</p>")}
`;

export default {
  slug: "/how-much-mortgage-can-i-afford/",
  h1: "How much mortgage can I afford in BC?",
  lede: "Lenders run your income, debts and the stress test through two ratios. Here is the real math behind the answer, and how to raise your number.",
  crumbs: [["Home", "/"], ["First-time home buyers", "/first-time-home-buyer-bc/"], ["How much mortgage can I afford?", "/how-much-mortgage-can-i-afford/"]],
  nav: "/first-time-home-buyer-bc/", calc: true, body,
  faqs: [
    { q: "How do lenders calculate how much I can borrow?", a: `They test your gross income against two ratios, GDS at 39% and TDS at 44% for insured mortgages, using the qualifying rate, which is the greater of your contract rate plus 2% or 5.25%. The lower result sets your limit, and lender policy on income and debts adjusts it further.` },
    { q: "Is there a rule that I can borrow 4.5 times my income?", a: `No. That figure comes from a regulator's portfolio limit on how many high loan-to-income mortgages a lender can write each quarter. It is not a cap on borrowers. Your limit comes from the debt service ratios, the qualifying rate and the lender's own policies.` },
    { q: "Do I need to count credit card payments as debt?", a: `Yes. Lenders include a payment for every credit card and line of credit on your report, calculated by their own method. Paying off a card before applying removes its payment from your ratios, which helps most when total debt service is the ratio limiting you.` },
    { q: "Why does my bank's number differ from this calculator?", a: `Lenders differ in how they count income, rental income and debts, and some use different limits for uninsured mortgages. This tool uses the standard insured ratios. A broker can show you how several lenders would treat your file, and which gives the highest approval.` },
    { q: "Does rental income from a suite help me qualify?", a: `It can, if the suite is legal and registered and the lender counts it. Methods and percentages vary by lender. An unregistered suite generally counts for nothing at a mainstream lender, so confirm the status of any suite before you rely on its income.` }
  ]
};
