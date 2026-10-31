import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Yes. You can buy in BC with 5 percent down, but only on the first $500,000 of the price. You also need mortgage insurance and have to pass the stress test.", who: "First-time buyers short on savings. If you have 20 percent or more, skip to the <a href='/down-payment-guide-bc/'>down payment guide</a>.", next: "Run your own numbers in the <a href='/mortgage-calculators/#affordability'>affordability calculator</a>." })}
<h2>The direct answer</h2>
<p>Yes, you can buy a home in British Columbia with 5 percent down. It is legal, it is insured, and it is a common route for first-time buyers. There are three conditions to know before you plan around it.</p>
<p>First, the 5 percent applies only to the first $500,000 of the price. On a more expensive home, the minimum is a blend. Second, buying with less than 20 percent down requires mortgage default insurance. The premium is added to your mortgage. Third, you still have to qualify at the stress-test rate, which is higher than the rate you will pay.</p>

<h2>Who is eligible</h2>
<p>The federal insured-mortgage rules set the minimum down payment. It is 5 percent of the first $500,000 of the price. It is 10 percent of the part from $500,000 up to a price below $1,500,000. At $1,500,000 and above, the minimum is 20 percent and insurance is not available. Insurers state the limit as a purchase price below $1,500,000, so that is the wording to use.</p>
<p>The home generally has to be a place you will live in. Insured mortgages for investment properties require more equity, and the rental-property rules are separate.</p>
<p>The lender also checks that you can afford the payments. For an insured mortgage, housing costs generally cannot exceed 39 percent of gross income. Total debts generally cannot exceed 44 percent. Both are worked out at the qualifying rate. That rate is the greater of your contract rate plus 2 percent or 5.25 percent.</p>
<p>If your income is only just enough, a rental suite that a lender counts can raise the number. The <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> explains how. It also explains why an unregistered suite usually counts for nothing at a mainstream lender.</p>
<p>The money has to come from an acceptable source. Savings, an FHSA or Home Buyers' Plan withdrawal, and a gift from family all qualify with the right paperwork. Borrowed money is treated differently and costs more. A down payment that is borrowed or from a non-traditional source carries a higher premium rate when the loan-to-value is above 90 percent. See the <a href="/down-payment-guide-bc/">down payment guide</a> for the sources and the documents.</p>

${cta({ title: "See what your own numbers look like", text: "Try the affordability calculator, or book a 15-minute call and Joshua will run a 5 percent scenario against your income and debts." , href: "/mortgage-calculators/#affordability", label: "Open the affordability calculator" })}

<h2>The true cost of 5 percent down</h2>
<p>The cost is the insurance premium and the larger loan. CMHC's premium is a one-time percentage of the loan. It is set by the loan-to-value ratio, and you can add it to the mortgage instead of paying it up front. The standard schedule for owner-occupied homes is:</p>
<div class="table-wrap"><table>
<thead><tr><th>Loan-to-value</th><th>Premium rate</th></tr></thead>
<tbody>
<tr><td>Up to 65%</td><td>0.60%</td></tr>
<tr><td>65.01% to 75%</td><td>1.70%</td></tr>
<tr><td>75.01% to 80%</td><td>2.40%</td></tr>
<tr><td>80.01% to 85%</td><td>2.80%</td></tr>
<tr><td>85.01% to 90%</td><td>3.10%</td></tr>
<tr><td>90.01% to 95%</td><td>4.00%</td></tr>
<tr><td>90.01% to 95%, non-traditional down payment</td><td>4.50%</td></tr>
</tbody></table></div>
<p>An amortization longer than 25 years adds 0.20 percentage points to the premium rate. That applies to the 30-year option open to first-time buyers and buyers of new builds. Use the <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> to see the premium at any price and down payment.</p>

<h2>5%, 10% and 20% side by side</h2>
<p>This is an illustrative comparison on a $500,000 purchase. It was computed with this site's calculator engine, using an example rate of 4.50 percent and a 25-year amortization. The rate is an assumption for the example and is not a quote.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>5% down</th><th>10% down</th><th>20% down</th></tr></thead>
<tbody>
<tr><th scope="row">Down payment</th><td>$25,000</td><td>$50,000</td><td>$100,000</td></tr>
<tr><th scope="row">CMHC premium</th><td>$19,000 (4.00%)</td><td>$13,950 (3.10%)</td><td>None</td></tr>
<tr><th scope="row">Mortgage including premium</th><td>$494,000</td><td>$463,950</td><td>$400,000</td></tr>
<tr><th scope="row">Monthly payment</th><td>$2,734.16</td><td>$2,567.84</td><td>$2,213.89</td></tr>
<tr><th scope="row">Interest over 25 years</th><td>$326,246</td><td>$306,401</td><td>$264,168</td></tr>
</tbody></table></div>
<p>Two things stand out. The 5 percent buyer starts about $520 a month behind the 20 percent buyer in this example. That buyer also pays about $62,000 more interest over the full amortization.</p>
<p>But the 5 percent buyer needs $75,000 less cash on day one. That may be the difference between buying this year and buying in several years. If prices rise in the meantime, the extra years of waiting also have a cost. No one can promise how that plays out.</p>
<p>On the 30-year option, the same 5 percent purchase carries a 4.20 percent premium of $19,950. The payment is $2,495.61 a month, with interest of about $403,473 over the full term. A lower payment is a real benefit. The extra $77,000 in interest that comes with it is a real cost. The calculators let you test both.</p>

<h2>When 5 percent is smart, and when it is stretched</h2>
<p>A small down payment is a sound choice when three things are true. The monthly payment sits comfortably within your budget. You will still have an emergency fund after closing. And you plan to stay long enough for the insurance cost to be worth it.</p>
<p>For many first-time buyers, the alternative is renting while saving for years, which has its own cost. Using your FHSA and Home Buyers' Plan can also help you reach the minimum without draining your savings. The <a href="/first-time-buyer-programs-bc/">programs guide</a> explains how.</p>
<p>It is a stretch when the payment leaves no room for repairs or a change in income. It is also a stretch when the cash left after closing is close to zero, or when you are relying on a rate that may differ at renewal. Closing costs are separate from the down payment. A buyer who puts every dollar into 5 percent down can arrive at completion unable to pay the transfer tax and legal fees. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> covers how to budget for both.</p>

<h2>Qualification math at 5 percent</h2>
<p>A larger loan means a higher payment. A higher payment means you need more income to qualify. In this example, the qualifying rate is 6.50 percent (4.50 plus 2). At that rate, the payment on the $494,000 mortgage is about $3,309 a month for qualifying purposes.</p>
<p>For housing costs alone to stay within 39 percent of gross income, that implies a household income of about $101,800 a year. This is before property tax, heating or any other debts. The 10 percent version needs about $95,600. The 20 percent version needs about $82,400. This is illustrative and excludes your other costs, which the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> handles in full.</p>
<p>One more point is easy to miss. A bigger down payment raises your buying power in two ways. It reduces the loan, and it removes or reduces the premium. A modest increase in savings can therefore have a larger effect on what you can qualify for than it seems. If you are close to a threshold, <a href="/contact/">talk to Joshua</a> about whether a few more months of saving or a gift changes the picture.</p>

${callout("The $500,000 line", "<p>The 5 percent rate applies to the first $500,000 only. On a $600,000 home, the minimum is $35,000, which is 5.83 percent. On a $750,000 home it is $50,000, which is 6.67 percent. A page that says 5 percent works at any price up to $1.5 million is skipping this step.</p>")}
`;

export default {
  slug: "/buying-with-5-percent-down/",
  h1: "Can I buy a house with 5% down in BC?",
  lede: "Yes, with these rules: the first $500,000 at 5%, mortgage insurance, the stress test and a price below $1.5 million. Here is what it costs.",
  crumbs: [["Home", "/"], ["First-time home buyers", "/first-time-home-buyer-bc/"], ["Buying with 5% down", "/buying-with-5-percent-down/"]],
  nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Is 5% down really allowed in BC?", a: `Yes, within the insured mortgage rules. The minimum is 5% of the first $500,000 and 10% of the rest, for homes priced below $1,500,000. You must pay for mortgage default insurance and qualify at the stress-test rate. At $1,500,000 or more, 20% is required.` },
    { q: "Does 5% down apply to a $700,000 home?", a: `Not entirely. The 5% applies only to the first $500,000, and 10% applies to the remaining $200,000. The minimum on $700,000 is therefore $45,000, which is 6.43% of the price. The minimum down payment calculator shows the exact figure for any price.` },
    { q: "Can I borrow my down payment?", a: `Borrowed money is treated as a non-traditional source. It is allowed in some cases for loan-to-value between 90.01% and 95%, but the CMHC premium rises to 4.50% and a strong credit history is required. Gifts from family are treated differently, and so are savings and withdrawals.` },
    { q: "What is the stress test for a 5% down mortgage?", a: `You must qualify at the greater of your contract rate plus 2% or 5.25%, with housing costs within 39% of gross income and total debts within 44%. For insured mortgages the same qualifying rate applies, so a 4.50% rate is tested at 6.50%.` },
    { q: "Is the CMHC premium paid up front?", a: `Usually not. The premium is a one-time percentage of the loan and can be added to the mortgage balance, which means you pay interest on it for the life of the mortgage. That is why the cost shows up in your payment rather than your cash needs at closing.` }
  ]
};
