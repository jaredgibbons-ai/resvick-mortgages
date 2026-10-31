import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>The question underneath the question</h2>
<p>People usually ask whether a fixed or a variable rate will cost less. Nobody can answer that in advance, because the answer depends on what interest rates do over the term, and professional forecasters miss it regularly. A more useful question is which risk you are better placed to carry. A fixed rate gives you payment certainty and exposes you to a larger penalty if you leave early. A variable rate gives you a smaller, simpler penalty and exposes you to changes in the cost of borrowing.</p>
<p>This page sets out how each works, what the rate gap is really pricing, how the penalties differ and who tends to be suited to which. It prints no current rates, which change often; the <a href="/mortgage-rates-bc/">mortgage rates hub</a> explains how your rate is set, and a 15-minute call gets you today's number for your own file. The examples below use rates chosen for illustration only.</p>

<h2>How each one works</h2>
<p>With a <strong>fixed rate</strong>, the interest rate is set at the start of the term and stays the same until the term ends. Your payment does not change unless you choose to change it. At the end of the term, you renew at whatever rates are available then.</p>
<p>With a <strong>variable rate</strong>, the rate is quoted relative to the lender's prime rate, for example prime minus a discount. When prime changes, your rate changes with it. The details of how that reaches your payment differ by product, and there are two common types: one where the payment itself moves, and one where the payment stays the same while the share going to interest and principal changes. The page on <a href="/variable-rate-mortgage/">variable rate mortgages</a> explains both, along with the trigger rate that matters in the second type.</p>
<p>Fixed-rate mortgages in Canada compound semi-annually, as federal law requires, while variable-rate mortgages are commonly set to compound monthly. That is a small technical difference, and the payment calculators on this site apply the right one in each case.</p>

<h2>The spread, and what it is pricing</h2>
<p>For much of the time, variable rates have been lower than fixed rates for the same borrower, but this is not a rule, and the gap can close or reverse. To see why, it helps to know what moves each rate.</p>
<p>Fixed rates are priced from what it costs a lender to fund a loan of that term. In practice that follows the yield on Government of Canada bonds of a similar term, plus the lender's margin. Fixed rates therefore tend to move with bond markets, which respond to expectations about inflation and future central bank decisions, sometimes before the Bank of Canada acts. Variable rates follow prime, which lenders adjust after the Bank of Canada changes its policy rate.</p>
<p>The gap between the two is therefore a market view as much as a price. A wide gap, with variable much cheaper, usually means the market expects rates to fall. A narrow gap, or fixed below variable, usually means the opposite. A borrower who picks variable because it is cheaper today is making a bet that rates will not rise enough to erase the saving. A borrower who picks fixed is paying for certainty. Neither is a mistake. Both are choices.</p>

<h2>The penalty asymmetry</h2>
<p>The difference that surprises borrowers most is the cost of leaving a term early. It matters if you might sell, refinance, separate or simply find a better mortgage.</p>
<p>The penalty on a variable-rate mortgage is usually three months of interest. The penalty on a fixed-rate mortgage is usually the greater of three months of interest and the <a href="/interest-rate-differential/">interest rate differential</a>, which compares your rate with the rate the lender could charge today for the time that remains. Lenders calculate the differential in different ways, and the difference between methods can be large.</p>
<p>An illustrative example makes the asymmetry concrete. Assume a $400,000 balance and a contract rate of about 5.00 percent, with three years left on a fixed term. These are generic figures, not any lender's actual formula:</p>
<div class="table-wrap"><table>
<thead><tr><th>Situation</th><th>Approximate penalty</th></tr></thead>
<tbody>
<tr><th scope="row">Variable, three months of interest at 5.00%</th><td>$5,000</td></tr>
<tr><th scope="row">Fixed at 4.99%, three months of interest</th><td>$4,990</td></tr>
<tr><th scope="row">Fixed, differential of 0.50 points over 36 months</th><td>$6,000</td></tr>
<tr><th scope="row">Fixed, differential of 1.00 point over 36 months</th><td>$12,000</td></tr>
</tbody></table></div>
<p>On a fixed mortgage the penalty is the greater of the first row and whichever differential method the lender uses, so it can sit at either end of the range, or above it on a larger balance. You can estimate yours with the <a href="/mortgage-calculators/#penalty">penalty calculator</a>.</p>

<h2>Conversion and lock-in rights</h2>
<p>Many variable-rate mortgages let you convert to a fixed rate during the term without a penalty. This is a useful safety valve, because it lets you start variable and lock in if rates begin to rise. The details are the part to read carefully. Some lenders convert you into their current fixed rate for the term you choose, and that may be a posted rate that is higher than the best rate they offer to new customers. Some have limits on which terms are available at conversion. Ask what the conversion rate would be, not only whether the right exists.</p>
<p>The reverse is not generally true. A fixed-rate mortgage cannot normally be changed to variable mid-term without leaving it, which brings in the penalty described above. The only free exit from a fixed term is its end date, which is why the renewal date matters so much, and why the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> tells you to start early.</p>
<p>It is also worth knowing how the mortgage is registered. A collateral charge can make switching lenders at renewal slower and more expensive, whichever rate type you choose. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains how to check.</p>

<h2>Who each one tends to suit</h2>
<p>These are tendencies, not prescriptions. They show how a conversation tends to go.</p>
<ul>
<li><strong>A first-time buyer with a tight budget</strong> often values a fixed payment, because a payment that cannot rise makes the household budget easier to plan. The right choice also depends on how much room there is between the payment and income. A variable rate with a lot of room is a different situation from a variable rate with very little.</li>
<li><strong>A borrower with a large cushion</strong>, such as stable income well above the payment and savings in reserve, can better absorb a rise in payments, and may prefer the smaller penalty of a variable mortgage.</li>
<li><strong>A household that might move or refinance within a few years</strong> should weigh the penalty at least as heavily as the rate. A variable mortgage is easier to leave.</li>
<li><strong>A household planning to stay put for the whole term</strong> and wanting a stable plan often chooses a fixed rate, because the penalty will probably never apply.</li>
<li><strong>A borrower close to qualifying limits</strong> should look carefully at how a payment increase would affect their budget, since lenders qualify you at a higher rate than you pay, but your budget does not.</li>
</ul>

<h2>Hybrid and split options</h2>
<p>Some lenders offer a split mortgage, which divides the balance into a fixed portion and a variable portion. A split reduces the cost of being wrong about either, because part of the mortgage behaves each way. The cost is complexity, and each portion has its own term and penalty. Another approach is to choose a shorter fixed term, such as <a href="/3-year-fixed-mortgage-rate/">the 3-year fixed</a>, instead of the more common <a href="/5-year-fixed-mortgage-rate/">5-year fixed</a>. A shorter term brings the renewal date forward without taking on variable-rate risk. Whether a split suits you depends on the lender, and not every lender offers one.</p>

${callout("A caution about 'what will rates do'", "<p>Choosing between fixed and variable on a forecast is a gamble, however confident the forecast sounds. A sturdier approach is to choose the structure whose worst case you can live with, then to review it regularly. Resvick Aftercare includes rate monitoring so that a decision made today is not forgotten until renewal.</p>")}

<h2>What Joshua asks before recommending one</h2>
<p>A recommendation needs facts that a rate table cannot supply. Before suggesting a structure, Joshua asks questions like these:</p>
<ol>
<li>How long do you expect to keep this property, and how sure are you?</li>
<li>If your payment rose by a few hundred dollars a month, what would you change?</li>
<li>Do you have any big changes ahead, such as a new child, a career change, a sale or a project?</li>
<li>Are you carrying other debts whose payments could also rise?</li>
<li>How would a large penalty affect you if you had to leave early?</li>
</ol>
<p>The answers shape the comparison he builds for you. Every client gets that comparison in writing as the <a href="/lender-comparison-report/">Lender Comparison Report</a>, which shows rate, term, penalty and flexibility side by side. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the advice.</p>

<h2>Timing a lock</h2>
<p>If you choose fixed while you are still shopping, a rate hold keeps the rate available for a period while you decide, which is covered on the page about <a href="/mortgage-rate-hold/">when to lock in</a>. A hold reserves a rate, not the right outcome, so it does not remove the need to choose the structure carefully.</p>

${cta({ title: "Choose the risk you can carry", text: "In 15 minutes Joshua can walk through your numbers and show you how a fixed and a variable option would look side by side, including what each would cost to leave." })}
`;

export default {
  slug: "/fixed-vs-variable-mortgage/",
  h1: "Fixed vs variable mortgage: how to actually choose",
  lede: "Payment certainty, penalty math, conversion rights and who each suits. The decision is about which risk you can carry, not which rate wins.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Fixed vs variable", "/fixed-vs-variable-mortgage/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "Is a fixed or variable mortgage cheaper in the long run?", a: "It depends on what interest rates do during your term, which nobody can predict reliably. Variable has often been cheaper at the start, but this is not guaranteed. A better test is which structure you can live with if the outcome goes against you." },
    { q: "Why is the penalty bigger on a fixed mortgage?", a: "A fixed penalty is usually the greater of three months of interest and the interest rate differential, which reflects the lender's lost income if rates have fallen. A variable penalty is usually just three months of interest. Lenders calculate the differential in different ways, so check your own contract." },
    { q: "Can I switch from variable to fixed during my term?", a: "Many variable mortgages allow conversion to a fixed rate without a penalty, but the rate offered at conversion is set by the lender and may be higher than the best rate for new customers. Ask what the conversion rate would be and which terms are available." },
    { q: "What is a split mortgage?", a: "A split divides your balance into a fixed portion and a variable portion, so part of the mortgage behaves each way. It reduces the cost of being wrong about either, at the price of added complexity, since each portion has its own term and penalty. Not every lender offers it." },
    { q: "Should I choose fixed or variable if I might sell soon?", a: "If a sale, move or refinance is likely within the term, the penalty matters as much as the rate. A variable mortgage usually has the smaller penalty, and an open mortgage has none, though it costs more. Tell your broker your timeline so the comparison reflects it." }
  ]
};
