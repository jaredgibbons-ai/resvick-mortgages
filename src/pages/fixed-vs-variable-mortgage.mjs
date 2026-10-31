import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Neither one is reliably cheaper. Fixed gives you a payment that can't rise but a bigger penalty if you leave early. Variable gives you a smaller penalty but a cost that moves with prime.",
  who: "Anyone choosing a rate type for a purchase, renewal or refinance.",
  next: "Compare both side by side with the <a href=\"/mortgage-calculators/#penalty\">penalty calculator</a>, then ask for a written comparison."
})}
<h2>The question underneath the question</h2>
<p>People usually ask which one will cost less. Nobody can answer that in advance. It depends on what rates do over your term, and professional forecasters miss it all the time.</p>
<p>A better question is which risk you can carry. A fixed rate gives you a steady payment, but a larger penalty if you leave early. A variable rate gives you a smaller, simpler penalty, but your cost of borrowing can change.</p>
<p>This page covers how each one works and what the rate gap is really pricing. It also covers how the penalties differ and who each one tends to suit. It prints no current rates, because they change often. The <a href="/mortgage-rates-bc/">mortgage rates hub</a> explains how your rate is set. A 15-minute call gets you today's number for your own file. The examples below use rates chosen for illustration only.</p>

<h2>How each one works</h2>
<p>A <strong>fixed rate</strong> is set at the start of the term. It stays the same until the term ends. Your payment doesn't change unless you choose to change it. At the end of the term, you renew at whatever rates are on offer then.</p>
<p>A <strong>variable rate</strong> is quoted against the lender's prime rate, for example prime minus a discount. When prime moves, your rate moves with it.</p>
<p>How that reaches your payment depends on the product. There are two common types. In one, the payment itself goes up or down. In the other, the payment stays the same while the split between interest and principal changes. The page on <a href="/variable-rate-mortgage/">variable rate mortgages</a> explains both, plus the trigger rate that matters in the second type.</p>
<p>Fixed-rate mortgages in Canada compound semi-annually, which the Interest Act's disclosure rules make the standard. Variable-rate mortgages commonly compound monthly. It's a small technical difference, and the calculators on this site apply the right one in each case.</p>

<h2>The spread, and what it is pricing</h2>
<p>Variable rates have often been lower than fixed rates for the same borrower. That isn't a rule, though. The gap can close or even flip. To see why, it helps to know what moves each rate.</p>
<p>Fixed rates are priced from what it costs a lender to fund a loan of that length. In practice that tracks Government of Canada bond yields of a similar term, plus the lender's margin.</p>
<p>So fixed rates tend to move with bond markets. Those markets react to expectations about inflation and future central bank moves, sometimes before the Bank of Canada acts. Variable rates follow prime, which lenders adjust after the Bank changes its policy rate.</p>
<p>That makes the gap a market view as much as a price. A wide gap, with variable much cheaper, usually means the market expects rates to fall. A narrow gap, or fixed below variable, usually means the opposite.</p>
<p>Pick variable because it's cheaper today, and you're betting rates won't rise enough to wipe out the saving. Pick fixed, and you're paying for certainty. Neither is a mistake. Both are choices.</p>

<h2>The penalty asymmetry</h2>
<p>The difference that surprises people most is the cost of leaving early. It matters if you might sell, refinance, separate or simply find a better mortgage.</p>
<p>The penalty on a variable mortgage is usually three months of interest. On a fixed mortgage, it's usually the greater of three months of interest and the <a href="/interest-rate-differential/">interest rate differential</a>.</p>
<p>The differential compares your rate with the rate the lender could charge today for the time left. Lenders calculate it in different ways, and the gap between methods can be large.</p>
<p>Here's an illustrative example. Say you have a $400,000 balance at about 5.00 percent, with three years left on a fixed term. These are generic figures, not any lender's actual formula:</p>
<div class="table-wrap"><table>
<thead><tr><th>Situation</th><th>Approximate penalty</th></tr></thead>
<tbody>
<tr><th scope="row">Variable, three months of interest at 5.00%</th><td>$5,000</td></tr>
<tr><th scope="row">Fixed at 4.99%, three months of interest</th><td>$4,990</td></tr>
<tr><th scope="row">Fixed, differential of 0.50 points over 36 months</th><td>$6,000</td></tr>
<tr><th scope="row">Fixed, differential of 1.00 point over 36 months</th><td>$12,000</td></tr>
</tbody></table></div>
<p>On a fixed mortgage, the penalty is the greater of the first row and whichever differential method your lender uses. So it can land at either end of the range. On a bigger balance, it can go above it. Estimate yours with the <a href="/mortgage-calculators/#penalty">penalty calculator</a>.</p>

<h2>Conversion and lock-in rights</h2>
<p>Many variable mortgages let you convert to a fixed rate mid-term without a penalty. That's a useful safety valve. You can start variable and lock in if rates begin to climb.</p>
<p>Read the details carefully. Some lenders convert you into their current fixed rate for the term you pick. That may be a posted rate, higher than the best rate they give new customers. Some limit which terms you can pick at conversion. So ask what the conversion rate would be, not just whether the right exists.</p>
<p>It doesn't usually work the other way. You can't normally move a fixed mortgage to variable mid-term without leaving it, and that brings in the penalty above. The only free exit from a fixed term is its end date. That's why the renewal date matters so much, and why the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> says to start early.</p>
<p>It also helps to know how your mortgage is registered. A collateral charge can make switching lenders at renewal slower and pricier, whichever rate type you have. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> shows how to check.</p>

<h2>Who each one tends to suit</h2>
<p>These are tendencies, not rules. They show how the conversation usually goes.</p>
<ul>
<li><strong>A first-time buyer with a tight budget</strong> often values a fixed payment. A payment that can't rise makes the household budget easier to plan. It also depends on how much room there is between the payment and your income. Variable with lots of room is very different from variable with almost none.</li>
<li><strong>A borrower with a big cushion</strong> can handle a payment rise more easily. Think stable income well above the payment, plus savings in reserve. That person may prefer the smaller penalty of a variable mortgage.</li>
<li><strong>A household that might move or refinance within a few years</strong> should weigh the penalty at least as heavily as the rate. A variable mortgage is easier to leave.</li>
<li><strong>A household staying put for the whole term</strong> often picks fixed for a steady plan. The penalty will probably never apply.</li>
<li><strong>A borrower close to qualifying limits</strong> should look hard at how a higher payment would hit the budget. Lenders qualify you at a higher rate than you pay. Your budget doesn't.</li>
</ul>

<h2>Hybrid and split options</h2>
<p>Some lenders offer a split mortgage. It divides your balance into a fixed part and a variable part. That lowers the cost of being wrong about either, because part of the mortgage behaves each way.</p>
<p>The trade-off is complexity. Each part has its own term and penalty. Not every lender offers a split, so it depends on who you're with.</p>
<p>Another approach is a shorter fixed term, such as <a href="/3-year-fixed-mortgage-rate/">the 3-year fixed</a>, instead of the more common <a href="/5-year-fixed-mortgage-rate/">5-year fixed</a>. A shorter term brings your renewal date closer without taking on variable-rate risk.</p>

${callout("A caution about 'what will rates do'", "<p>Choosing fixed or variable based on a forecast is a gamble, however confident the forecast sounds. A sturdier approach is to pick the structure whose worst case you can live with. Then review it regularly. Resvick Aftercare includes rate monitoring, so today's decision isn't forgotten until renewal.</p>")}

<h2>What Joshua asks before recommending one</h2>
<p>A recommendation needs facts a rate table can't supply. Before he suggests a structure, Joshua asks questions like these:</p>
<ol>
<li>How long do you expect to keep this property, and how sure are you?</li>
<li>If your payment rose by a few hundred dollars a month, what would you change?</li>
<li>Any big changes ahead, like a new child, a career change, a sale or a project?</li>
<li>Do you carry other debts whose payments could also rise?</li>
<li>How would a large penalty affect you if you had to leave early?</li>
</ol>
<p>Your answers shape the comparison he builds for you. Every client gets it in writing as the <a href="/lender-comparison-report/">Lender Comparison Report</a>. It shows rate, term, penalty and flexibility side by side. On a mortgage placed with a mainstream (A) lender, the lender pays the broker. You pay nothing for the advice.</p>

<h2>Timing a lock</h2>
<p>Choosing fixed while you're still shopping? A rate hold keeps the rate available for a while as you decide. The page on <a href="/mortgage-rate-hold/">when to lock in</a> covers how holds work. A hold reserves a rate, not the right answer. You still need to pick the structure carefully.</p>

${cta({ title: "Choose the risk you can carry", text: "In 15 minutes, Joshua can show you a fixed and a variable option side by side. That includes what each would cost to leave." })}
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
