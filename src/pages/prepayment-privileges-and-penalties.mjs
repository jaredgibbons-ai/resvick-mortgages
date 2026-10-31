import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Why this belongs on your list before you sign</h2>
<p>When you choose a mortgage, the rate is the number everyone talks about. Two features that decide what the mortgage is like to live with get far less attention: how much extra you can pay each year without penalty, and what it costs when you pay more than that or leave early. These are your prepayment privileges and your prepayment penalty. They are written into every closed mortgage, they differ between lenders, and they are far easier to compare before you sign than to discover afterwards.</p>
<p>This page explains the three common privileges, the questions that separate a generous lender from a restrictive one, how penalties work when you go past your limits and why the renewal date is the best moment to make a large payment. It prints no rates or lender-specific percentages, because those change and differ by product. Check your own mortgage contract for the numbers that apply to you.</p>

<h2>The three common privileges</h2>
<p><strong>Lump-sum payments.</strong> Most closed mortgages let you pay a lump sum once or more each year, up to a percentage of the original mortgage amount, with no penalty. Percentages in the range of 10 to 20 percent are common, though they vary by lender and product. A lump sum goes straight to principal, which reduces the interest charged from that date onward.</p>
<p><strong>Payment increases.</strong> Many mortgages let you raise your regular payment by a set percentage, again commonly 10 to 20 percent or sometimes more. A higher payment reduces principal faster on every payment date. Some lenders let you change the increase permanently, and some only for the current year.</p>
<p><strong>Double-up payments.</strong> Some lenders let you make an extra payment equal to one regular payment, or double a single payment, as a way to prepay without using the lump-sum allowance. Not every lender offers it, and it often has conditions.</p>
<p>An illustration, with generic figures. Take a $500,000 mortgage at 4.50 percent over 25 years, with a payment of $2,767.36. If the contract allows a 15 percent lump sum, you can pay up to $75,000 a year without penalty. If it allows a 20 percent payment increase, the payment can rise to $3,320.83, which is $553.47 more each month. These percentages are examples, not any lender's terms.</p>

<h2>What prepaying is worth</h2>
<p>Extra payments reduce interest because interest is charged on the outstanding balance. The earlier you pay, the more interest you avoid. Using the same $500,000 mortgage at 4.50 percent, a single $25,000 lump sum at the end of the first year would cut the total interest by about $44,500 and shorten the mortgage by roughly two years. Raising the payment by 10 percent, about $277 a month, for the whole amortization would save about $56,800 and shorten the mortgage by nearly four years. These are rough illustrations of the principle: small, early extra payments have a large effect over a long amortization. You can run your own figures in the <a href="/mortgage-calculators/#prepayment">prepayment calculator</a>.</p>
<p>It is not always right to prepay. If you carry higher-interest debt, such as a credit card, paying that first usually costs less. If you have no emergency savings, putting every spare dollar into the mortgage can leave you short. Prepayment privileges are options, and the value of an option depends on whether you will use it.</p>

<h2>How lenders differ</h2>
<p>Two mortgages that both advertise a 15 percent lump sum can behave very differently. The questions below draw out the differences. They are worth asking of any lender, and a broker can ask them of several at once.</p>
<div class="table-wrap"><table>
<thead><tr><th>Question</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><th scope="row">Is the percentage based on the original balance or the current balance?</th><td>The original balance gives a larger allowance. A current-balance basis shrinks the allowance each year.</td></tr>
<tr><th scope="row">Does the year run on the calendar or from the mortgage anniversary?</th><td>It decides when your allowance resets and whether you can use two in quick succession.</td></tr>
<tr><th scope="row">Can unused allowance carry forward?</th><td>Most do not. Where it does not, an unused allowance is lost.</td></tr>
<tr><th scope="row">Is there a minimum lump-sum amount?</th><td>A high minimum limits small, frequent payments.</td></tr>
<tr><th scope="row">Is a payment increase permanent?</th><td>It determines whether you can later go back to the original payment.</td></tr>
<tr><th scope="row">Do the privileges differ by product or term?</th><td>Lower-rate products sometimes carry tighter limits.</td></tr>
</tbody></table></div>
<p>A lower rate attached to tighter privileges is not necessarily the cheaper mortgage if you are likely to prepay. Compare the whole product, as the <a href="/open-vs-closed-mortgage/">open versus closed mortgage</a> page explains, since an open mortgage is simply a mortgage with unlimited privileges at a higher price.</p>

<h2>Penalties when you go beyond the limit</h2>
<p>Pay more than your privileges allow, or pay the mortgage out before the term ends, and a prepayment penalty applies. On a variable-rate mortgage the penalty is generally three months of interest. On a fixed-rate mortgage it is generally the greater of three months of interest and the <a href="/interest-rate-differential/">interest rate differential</a>, and lenders calculate the differential in different ways. When you exceed your privileges but do not pay the mortgage out, many lenders charge the penalty only on the excess. Ask whether yours does.</p>
<p>Because penalties depend on your lender's method, an online estimate is a range and not a quote. The <a href="/mortgage-calculators/#penalty">penalty calculator</a> shows three months of interest alongside the two common IRD methods, so you can see how wide the range can be. For your lender's number, ask for a written payout statement for the date you have in mind.</p>

<h2>The renewal window: where large payments are free</h2>
<p>The most valuable moment for a big prepayment is the end of your term. At maturity, you can generally pay down any amount, or the whole mortgage, without a penalty. That makes the renewal date the natural time to put a bonus, an inheritance, a sale of another asset or accumulated savings against the principal. It also makes it the natural time to move lenders, which the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains.</p>
<p>A practical plan: if you expect a lump sum before your renewal, consider holding it in savings until maturity and applying it then, instead of using up your prepayment allowance earlier in the term. If you need the allowance for something else, ask your lender how it treats a large payment at renewal. Lenders handle this differently, and it is worth confirming in writing. If you would prefer to renew early, <a href="/early-mortgage-renewal/">early mortgage renewal</a> sets out when that helps and when it costs you.</p>

${callout("Check before you promise yourself a payoff", "<p>It is common to plan to pay off a mortgage with a coming windfall, and to discover that the amount exceeds the prepayment privilege. Read the privileges and the penalty before you count on a date. If the penalty on the excess is large, waiting for maturity may be better.</p>")}

<h2>Prepayment planning inside aftercare</h2>
<p>Prepayment is a plan to be revisited, not a decision made once. In the annual review that is part of <a href="/mortgage-aftercare-program/">Resvick Aftercare</a>, Joshua Resvick looks at your privileges, your progress and your goals, and works out whether it makes sense to prepay, raise your payment or keep the money in reserve. He also notes the dates on which your allowance resets, so the opportunities are not missed.</p>
<p>When you choose a mortgage, he compares prepayment terms across a wide range of lenders and presents them in writing in the <a href="/lender-comparison-report/">Lender Comparison Report</a>. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private-lender files, with written disclosure first.</p>

${cta({ title: "Know your privileges before you need them", text: "Send Joshua your mortgage contract or renewal letter and he will list your privileges, your penalty method and the best time to use them.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/prepayment-privileges-and-penalties/",
  h1: "Prepayment privileges and penalties: your mortgage's exit math",
  lede: "Lump sums, payment increases and the penalties that apply when you go past them. Know your privileges before you need them, especially at renewal.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Prepayment & penalties", "/prepayment-privileges-and-penalties/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "How much extra can I pay on my mortgage each year?", a: "It depends on your contract. Many closed mortgages allow a lump sum of 10 to 20 percent of the original balance each year and a payment increase of a similar size, but percentages differ by lender and product. Your mortgage documents state the exact limits." },
    { q: "What happens if I prepay more than my privilege allows?", a: "A prepayment penalty applies, usually the greater of three months of interest and the interest rate differential on a fixed mortgage, or three months of interest on a variable. Many lenders charge it only on the excess amount. Ask your lender how it treats an overpayment." },
    { q: "When can I pay down my mortgage with no penalty at all?", a: "At maturity. When your term ends, you can generally pay any amount, or the whole balance, without a prepayment penalty. That makes the renewal date a natural time for a large payment or a move to another lender, so start comparing early." },
    { q: "Is it better to prepay or to invest?", a: "There is no universal answer. Prepaying earns a certain return equal to your mortgage rate, while investing carries risk and different tax treatment. Paying down higher-interest debt and keeping emergency savings usually come first. A tax professional can speak to your own situation." },
    { q: "Do all mortgages have the same prepayment privileges?", a: "No. Percentages, the basis they apply to, when they reset and whether unused amounts carry forward all vary. Two mortgages with the same rate can differ a great deal in flexibility, which is why the privileges belong in any fair comparison of lenders." }
  ]
};
