import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "In BC you need 5% of the first $500,000, 10% of the part above that, and 20% at $1.5 million or more. Under 20% down, the mortgage must be insured.", who: "Anyone saving for a purchase, or working out whether savings, gifts or programs can cover it.", next: 'Run your price through the <a href=\"/mortgage-calculators/#down-payment\">down payment calculator</a>, then read on for where the money can come from.' })}
<h2>The short answer: how much do you need down in BC?</h2>
<p>In British Columbia the minimum down payment is set by federal mortgage insurance rules, and it depends on the purchase price. It is <strong>5 percent of the first $500,000</strong> and <strong>10 percent of the portion above $500,000</strong>, for homes priced below $1,500,000. At <strong>$1,500,000 or more, the minimum is 20 percent</strong>, and mortgage default insurance is not available. CMHC's product sheets say the insured purchase price must be below $1,500,000, and that is the wording this guide follows.</p>
<p>Two things follow from that. First, the 5 percent figure people quote is only the starting point: on anything above $500,000, the blended percentage is higher. Second, the price of the home, not your income, decides which tier you are in. Your income decides how much mortgage a lender will approve, which is a separate question covered in the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a>.</p>

<h2>The tier math, step by step</h2>
<p>Take a $750,000 purchase. The first $500,000 requires 5 percent, which is $25,000. The remaining $250,000 requires 10 percent, which is another $25,000. The minimum down payment is $50,000, or 6.67 percent of the price. The calculator below does the same arithmetic for any price.</p>
<div class="tools">${TOOLS["down-payment"]()}</div>
<p>The same formula sits behind the <a href="/mortgage-calculators/#down-payment">minimum down payment calculator</a> on the main calculators page. If you are planning to buy with the smallest possible down payment, the <a href="/buying-with-5-percent-down/">5 percent down guide</a> covers the full cost and the situations where it is smart or stretched.</p>

<h2>What 20 percent changes</h2>
<p>A down payment of 20 percent or more of the price means the mortgage is not required to carry default insurance, so there is no premium. That removes a cost that can run to tens of thousands of dollars on a larger mortgage. It also changes the product. The lender carries the risk itself, or buys insurance of its own. So the terms, rates and rules can differ from an insured mortgage. A broker can compare both routes on your numbers.</p>
<p>It is not always sensible to wait until you reach 20 percent. Prices and rates move while you save. The premium is added to the mortgage, not paid in cash. So many buyers choose to buy sooner with less down, and pay the mortgage down later. The right choice depends on your savings, your income and how long you expect to hold the home. The point is to make that choice with the numbers in front of you.</p>

<h2>The CMHC premium, by tier</h2>
<p>When the down payment is under 20 percent, the mortgage must be insured. The premium is a one-time percentage of the loan, set by your loan-to-value (LTV) ratio. It can be added to the mortgage, so you don't pay it out of pocket. CMHC's published homeowner schedule is:</p>
<div class="table-wrap"><table>
<thead><tr><th>Loan-to-value</th><th>Premium (% of loan)</th></tr></thead>
<tbody>
<tr><td>65% or less</td><td>0.60%</td></tr>
<tr><td>65.01% to 75%</td><td>1.70%</td></tr>
<tr><td>75.01% to 80%</td><td>2.40%</td></tr>
<tr><td>80.01% to 85%</td><td>2.80%</td></tr>
<tr><td>85.01% to 90%</td><td>3.10%</td></tr>
<tr><td>90.01% to 95%</td><td>4.00%</td></tr>
<tr><td>90.01% to 95%, non-traditional down payment</td><td>4.50%</td></tr>
</tbody></table></div>
<p>An amortization longer than 25 years adds 0.20 percentage points. Since December 15, 2024, 30-year insured amortizations are available to first-time buyers and to buyers of newly built homes. As an illustrative example, a $600,000 purchase with $35,000 down has a $565,000 loan at 94.17 percent LTV. On a 30-year amortization the premium is 4.20 percent, or $23,730, which brings the mortgage to $588,730. Use the <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> to see your own figure.</p>
<div class="tools">${TOOLS.cmhc()}</div>

<h2>Where the down payment can come from</h2>
<p>A down payment is not only cash in a chequing account. Lenders accept several sources, each with its own rules.</p>
<ul>
<li><strong>Your own savings.</strong> Chequing, savings, TFSA and investment accounts. This is the simplest source to document.</li>
<li><strong>The First Home Savings Account (FHSA).</strong> You receive $8,000 of room in the first year you open the account and a lifetime limit of $40,000. Contributions are generally tax-deductible, and qualifying withdrawals for a first home are tax-free. The room only starts when you open the account, so opening one early matters.</li>
<li><strong>The Home Buyers' Plan (HBP).</strong> You can withdraw up to $60,000 per person from an RRSP without tax, and repay it over 15 years. Repayment normally starts in the second year after your first withdrawal. Withdrawals made between January 1, 2022 and December 31, 2025 get a longer grace period before repayment starts. The FHSA and HBP can be combined on the same home if each one's conditions are met.</li>
<li><strong>A gift from family.</strong> Allowed with documentation. The <a href="/gifted-down-payment/">gifted down payment guide</a> explains the letter, the source and the paper trail.</li>
<li><strong>Borrowed funds.</strong> Allowed in some forms, with ratio and source rules. A non-traditional down payment carries the higher 4.50 percent premium at 90.01 to 95 percent LTV, and CMHC product sheets tie it to strong credit history. See the <a href="/deposit-loan-and-borrowed-down-payment/">borrowed down payment and deposit loan guide</a>.</li>
</ul>
<p>Each of these programs is a separate test with its own definition of a first-time buyer. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs guide</a> lays them out side by side, and explains how they stack.</p>

${cta({ title: "Not sure which sources fit your plan?", text: "A 15-minute call is enough to map your savings, your programs and your timeline into a down payment number you can trust." })}

<h2>The paper trail lenders expect</h2>
<p>Lenders do not only ask how much you have; they ask where it came from. Many lenders want roughly 90 days of statements for the account that holds your down payment. They want to see the money was yours, or was gifted, and wasn't secretly borrowed. The exact requirement varies by lender and by file. A large deposit that appears without explanation is the classic problem, and it is much easier to explain before the application than after.</p>
<p>Keep statements, the record of any transfer between your own accounts, and the paperwork for any gift, sale of an asset or RRSP withdrawal. A lender who finds a gap will ask for the document that closes it, and a clean file moves faster. The <a href="/mortgage-application-checklist/">application checklist</a> shows what Joshua looks for.</p>

<h2>Deposit versus down payment</h2>
<p>These are different things. The deposit is the amount you pay when your offer is accepted, and it is held in trust until completion. It is part of your down payment, not an addition to it. The down payment is the total of your own funds that goes toward the price on completion. Because the deposit is due first, you need that money available quickly, and in some cases lenders will want to know where it came from too. If your plan relies on funds that will not arrive until later, such as an RRSP withdrawal, check the timing before you make an offer.</p>
<p>Closing costs are separate again and come on top of the down payment. The <a href="/closing-costs-bc/">BC closing costs guide</a> explains every line, and the <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> shows how the pieces fit into a buying timeline.</p>

<h2>Worked examples at three price points</h2>
<p>These figures are illustrative. They assume a 25-year amortization and a 4.50 percent rate, which is an example rate and not a quote. Premiums come from the schedule above and are added to the mortgage.</p>
<div class="table-wrap"><table>
<thead><tr><th>Price</th><th>Down payment</th><th>Premium</th><th>Mortgage incl. premium</th><th>Monthly payment</th></tr></thead>
<tbody>
<tr><td>$600,000, minimum</td><td>$35,000 (5.83%)</td><td>$22,600 (4.00%)</td><td>$587,600</td><td>$3,252.21</td></tr>
<tr><td>$600,000, 10%</td><td>$60,000</td><td>$16,740 (3.10%)</td><td>$556,740</td><td>$3,081.41</td></tr>
<tr><td>$600,000, 20%</td><td>$120,000</td><td>None</td><td>$480,000</td><td>$2,656.67</td></tr>
<tr><td>$900,000, minimum</td><td>$65,000 (7.22%)</td><td>$33,400 (4.00%)</td><td>$868,400</td><td>$4,806.36</td></tr>
<tr><td>$900,000, 20%</td><td>$180,000</td><td>None</td><td>$720,000</td><td>$3,985.01</td></tr>
<tr><td>$1,400,000, minimum</td><td>$115,000 (8.21%)</td><td>$51,400 (4.00%)</td><td>$1,336,400</td><td>$7,396.61</td></tr>
<tr><td>$1,400,000, 20%</td><td>$280,000</td><td>None</td><td>$1,120,000</td><td>$6,198.90</td></tr>
</tbody></table></div>
<p>Notice that the larger down payments do two jobs: they remove the premium, and they shrink the amount you pay interest on. They also take far more cash, and cash you keep in reserve has real value. Nothing in the table says which choice is best. It shows the trade-off, and the right answer depends on your savings, your other goals and your comfort with the payment.</p>

${callout("Check this against your own file", "<p>These are the standard insured rules. A lender can ask for more than the minimum, and some property types or situations have their own conditions. Joshua will confirm what applies to your purchase before you make an offer.</p>")}

${cta({ title: "Turn the numbers into a plan", text: "Bring your savings and your target price to a 15-minute call. You'll leave with a down payment figure and an order for using each source.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/down-payment-guide-bc/",
  h1: "Down payment in BC: minimums, rules and where it can come from",
  lede: "The 5%, 10% and 20% tiers, the $1.5 million insured cap, what premiums cost and what lenders need to see, with the math done for you.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Down payment guide", "/down-payment-guide-bc/"]],
  nav: "/first-time-home-buyer-bc/", calc: true, body,
  faqs: [
    { q: "How much is the minimum down payment on a $750,000 home in BC?", a: "It is $50,000. The rule is 5 percent of the first $500,000 ($25,000) plus 10 percent of the portion above that ($25,000). Because the home is priced below $1,500,000, it can be insured, and the premium is added to the mortgage." },
    { q: "Can I buy a home with less than 5 percent down?", a: "Not with a standard insured mortgage. Five percent of the first $500,000 is the floor. Borrowed funds can sometimes make up part of a down payment, but they carry rules and a higher premium, and they are not a way around the minimum." },
    { q: "Do I have to put 20 percent down on a $1.5 million home?", a: "Yes. At $1,500,000 or more the minimum is 20 percent, which is $300,000, and default insurance is not available. Insured mortgages apply only to purchase prices below $1,500,000, so above that line the lender will expect at least a fifth of the price in cash or equity." },
    { q: "Can I combine an FHSA and the Home Buyers' Plan?", a: "Yes. Both can be used on the same qualifying home if the conditions of each are met when you withdraw. Each program has its own first-time buyer test, so check them separately. The programs guide compares them side by side." },
    { q: "How long do lenders want to see my down payment in the account?", a: "Many lenders ask for about 90 days of statements, but the exact rule varies by lender and by file. Gifts, RRSP withdrawals and the sale of an asset are each documented differently, so tell your broker early where every part of the down payment is coming from." }
  ]
};
