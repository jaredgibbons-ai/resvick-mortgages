import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Find out when a refinance pays for itself</h2>
<p>Every refinance has a price. If you break a mortgage early you pay a prepayment penalty, and almost every refinance adds legal fees, an appraisal and sometimes lender fees. In exchange you get a lower rate, a different payment or access to cash. The only honest way to judge it is to ask how long it takes the savings to repay the price. That length of time is the break-even point.</p>
<p>The calculator below finds it month by month. Enter your current mortgage, the new rate and what the refinance will cost. It shows whether you reach break-even inside the period you chose, and how far ahead or behind you are at each year.</p>
<div class="tools">${TOOLS["refi-break-even"]()}</div>
<p>Nothing you enter is sent anywhere, and no email address is needed. Get the penalty figure from your lender in writing first, since it is the largest single input. The <a href="/mortgage-penalty-calculator/">mortgage penalty calculator</a> can give you a planning range while you wait.</p>

<h2>The simple version, and why it is only a first look</h2>
<p>The quick way to find a break-even is to divide the total cost by the monthly saving. If the penalty and fees come to $5,500 and the new payment is $270 lower, the break-even is about 21 months. That is a useful rule of thumb, and it is the figure many articles stop at. It has two weaknesses.</p>
<p>First, it counts only the payment. A lower rate also changes how much of each payment goes to principal, so you are paying down the balance faster than the payment difference suggests. Second, it ignores how the cost is paid. A penalty rolled into the new mortgage is borrowed money that earns interest for years, while a penalty paid in cash is gone on day one. Those two cases have the same sticker price and different results.</p>

<h2>How the calculator measures it</h2>
<p>For each month, the tool adds up three things for each path:</p>
<ul>
<li>the payments you have made so far;</li>
<li>any cash you paid at the start for the penalty and fees; and</li>
<li>the balance you still owe.</li>
</ul>
<p>That total is your position. On the path where you keep your mortgage, there is no cash cost. On the refinance path there is the cash cost, or a larger balance if you rolled it in. The break-even month is the first month in which the refinance position is equal to or better than the keep position. Because balance is part of the measure, a cheaper rate shows its value exactly as it arises, through lower interest, and a longer amortization cannot hide behind a lower payment.</p>

<h2>A worked example</h2>
<p>These figures are illustrative. The rates are chosen for the example and are not quotes. Type them in to see the same results.</p>
<p>You owe $500,000 with 20 years of amortization left, at 5.50 percent. A lender offers 4.50 percent. The penalty to leave is $4,000 and the legal and appraisal costs are $1,500, all paid in cash.</p>
<div class="table-wrap"><table><thead><tr><th>Month</th><th class="num">Position if you keep</th><th class="num">Position if you refinance</th><th class="num">Advantage of refinancing</th></tr></thead><tbody>
<tr><td>12</td><td class="num">$526,839</td><td class="num">$527,471</td><td class="num">−$632</td></tr>
<tr><td>24</td><td class="num">$552,885</td><td class="num">$548,720</td><td class="num">+$4,165</td></tr>
<tr><td>36</td><td class="num">$578,094</td><td class="num">$569,215</td><td class="num">+$8,879</td></tr>
<tr><td>60</td><td class="num">$625,809</td><td class="num">$607,802</td><td class="num">+$18,007</td></tr>
</tbody></table></div>
<p>The payment falls from $3,421.96 to $3,152.03, a saving of $269.93 a month, and the simple break-even is 21 months. The month-by-month method puts break-even at month 14, because the lower rate also cuts interest, which the payment difference alone understates. After five years the refinance is ahead by about $18,000, but only if you keep the new mortgage that long and the rates hold.</p>
<h3>The same offer when the costs are rolled in</h3>
<p>If the same $5,500 is added to the new mortgage instead of being paid in cash, the new balance is $505,500, the payment is $3,186.70 and break-even moves to month 15. The advantage after five years is about $16,900 instead of $18,000. Rolling in avoids writing a cheque, and it costs a little over $1,000 more across five years, which is the interest on the borrowed fees.</p>
<h3>An offer that does not pay</h3>
<p>Now take a smaller gap: 5.00 percent to 4.80 percent, with a $6,000 penalty and $1,500 of costs paid in cash. The payment drops by only $53.78 a month. After five years the refinance is still behind by about $2,800, and the simple break-even is 140 months, more than eleven years. Few people keep a five-year term that long without renewing at a different rate, so for practical purposes this one does not pay.</p>

<h2>Costs people forget to include</h2>
<p>The result is only as good as the costs you enter. Check the list:</p>
<ul>
<li>The prepayment penalty on the old mortgage, in writing, with the method named.</li>
<li>Legal or notary fees for registering the new mortgage.</li>
<li>An appraisal, if the new lender requires one and does not cover it.</li>
<li>Any lender or broker fee. On a mainstream (A) lender file the lender pays the broker; some alternative and private files carry a fee, which BC rules require to be disclosed in writing.</li>
<li>Discharge or administration fees charged by the old lender.</li>
<li>A title search or title insurance fee.</li>
<li>If the new mortgage has a higher premium or a longer amortization, the interest cost beyond the period you are comparing.</li>
</ul>

<h2>Three traps in a refinance comparison</h2>
<p><strong>Extending the amortization.</strong> Moving from 20 years left to a fresh 25 or 30 lowers the payment, and that can make a refinance look attractive in a short comparison. The saving arrives from borrowing for longer, and the extra years carry extra interest. Use the amortization box to model this, and compare the same horizon for both paths.</p>
<p><strong>Comparing against the wrong alternative.</strong> A refinance competes with other ways of getting the same result, not only with doing nothing. Waiting for your renewal date removes the penalty entirely, switching lenders at renewal can capture a better rate with no break fee, and a blend-and-extend can lower your rate without the full penalty. The <a href="/blend-and-extend-mortgage/">blend and extend</a> page explains that third option, and the <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a> page covers the second.</p>
<p><strong>Assuming rates hold.</strong> The calculator holds both rates steady for the period you choose. Real terms end, and the renewal rate on either path is unknown. The result tells you what the decision is worth if the world does not change, which is the cleanest way to compare and also the reason not to push the horizon too far.</p>

<h2>The rule that settles most cases</h2>
<p>If the break-even month falls after the date you expect to sell, renew with someone else or change your situation, the refinance does not pay. A break-even at month 14 on a mortgage you expect to keep for five years is comfortable. A break-even at month 50 on a mortgage you may leave in three years is not. The article <a href="/is-it-worth-refinancing/">is it worth refinancing</a> works through this test with three kinds of refinance, and the <a href="/refinance-mortgage-bc/">refinance hub</a> places it among the other reasons to refinance.</p>
<p>When the refinance is about debt rather than rate, the arithmetic changes shape: the saving is in the interest on the debts you retire, not in a rate gap. The <a href="/refinance-to-pay-off-debt/">refinance to pay off debt</a> page and the <a href="/mortgage-calculators/#consolidation">debt consolidation calculator</a> handle that case. If your mortgage is close to maturity, the <a href="/early-mortgage-renewal/">early renewal guide</a> shows when an early renewal beats a full refinance.</p>

${callout("Break-even is a screen, not a verdict", "<p>A refinance also has to qualify. Lenders limit a refinance to a share of your home's value, and they test your income and credit again. A good break-even on paper still needs an approval. If the numbers look promising, <a href=\"/contact/\">contact Joshua</a> and he will check both sides.</p>")}

${cta({ title: "Have a penalty quote and a rate offer?", text: "Book a 15-minute call. Joshua will run your real figures, including the options that avoid the penalty, and tell you which way the numbers point." })}

<p>More tools are on the <a href="/mortgage-calculators/">mortgage calculators</a> page, including the <a href="/mortgage-penalty-calculator/">penalty estimator</a> and the renewal comparison.</p>
`;

export default {
  slug: "/refinance-break-even/",
  h1: "Refinance break-even calculator",
  lede: "Penalty and costs against the new rate's savings, tracked month by month, so you can see when a refinance pays for itself and when it does not.",
  crumbs: [["Home", "/"], ["Calculators", "/mortgage-calculators/"], ["Refinance break-even calculator", "/refinance-break-even/"]],
  nav: "/mortgage-calculators/", calc: true, body,
  faqs: [
    { q: "What is a refinance break-even point?", a: "It is the month at which the savings from a new mortgage have repaid the cost of getting it, including the prepayment penalty and fees. Before that month you are behind compared with keeping your current mortgage, and after it you are ahead. A break-even later than you plan to keep the mortgage means the refinance does not pay." },
    { q: "How long should a break-even be before a refinance makes sense?", a: "There is no universal number. The test is whether the break-even falls well before the date you expect to sell, move or renew elsewhere. A break-even inside a year or two is usually comfortable on a five-year term, while one beyond three years leaves little margin for the plan to change." },
    { q: "Should I pay the penalty in cash or roll it into the new mortgage?", a: "Rolling it in keeps cash in your pocket but you pay interest on the borrowed amount, so the total is higher over time. Paying cash costs more now and less later. The calculator models both, so you can see the difference in break-even month and in the five-year result." },
    { q: "Does it matter if I extend my amortization when I refinance?", a: "Yes. A longer amortization lowers the payment, which can make the saving look larger than it is, and it adds interest in the later years. Compare both paths over the same horizon, and consider keeping the old amortization or making a small extra payment to protect the long-term result." },
    { q: "Is there a way to get a lower rate without a break fee?", a: "Sometimes. You can wait for your renewal date, when no penalty applies, switch lenders at maturity, or ask about a blend and extend, which mixes your current rate with a new one. Those routes are worth pricing against a full refinance before you pay anything to leave." }
  ]
};
