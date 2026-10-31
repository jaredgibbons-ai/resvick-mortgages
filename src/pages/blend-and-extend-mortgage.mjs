import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "A blend-and-extend mixes your current rate with today's rate and starts a longer term with the same lender. There's no penalty, but you only get part of today's rate and you're tied in longer.", who: "Anyone with a rate above today's rates who wants a lower payment before maturity.", next: "Compare blend, break and wait with the <a href=\"/refinance-break-even/\">break-even calculator</a>, then <a href=\"/contact/\">ask Joshua</a> to model it." })}

<h2>What blending is</h2>
<p>Say your mortgage has two years left, at a rate higher than today's rates. You'd like the lower payment now, not at maturity. Breaking the mortgage would trigger a prepayment penalty.</p>
<p>A blend-and-extend offers another route. Your lender mixes your current rate with its current rate for a longer term. That gives one blended rate. A new, longer term then starts at that rate. You don't pay a prepayment penalty, because you're not leaving the mortgage. You're renegotiating it with the same lender.</p>
<p>That sounds like a free upgrade. Sometimes it's a good one. But it's not free. The cost hides in two places. First, the blended rate is a compromise between your old rate and the new one. So you don't get the full benefit of today's rates. Second, you're committed to the lender for a longer term.</p>
<p>This page explains the math and when blending beats breaking. It also covers when blending is worse than doing nothing, and what to ask a lender that offers it. Rates in the examples are illustrative.</p>

<h2>How the blend works, with numbers</h2>
<p>Take a $400,000 balance with 20 years of amortization left. The current rate is 5.00 percent, with 2 years left in the term. For illustration, the lender's current five-year rate is 4.00 percent.</p>
<p>In a simple time-weighted blend, the lender averages two things. It takes the old rate over the two years that remain. It takes the new rate over the three years of the extension. The math looks like this:</p>
<p>(5.00% x 2 years + 4.00% x 3 years) / 5 years = 4.40 percent.</p>
<p>The new five-year term would run at 4.40 percent. Here's how the payment changes on the same balance and amortization.</p>
<div class="table-wrap"><table>
<thead><tr><th>Option</th><th>Rate</th><th>Monthly payment</th></tr></thead>
<tbody>
<tr><th scope="row">Stay as you are</th><td>5.00%</td><td>$2,628.50</td></tr>
<tr><th scope="row">Blend and extend</th><td>4.40%</td><td>$2,500.51</td></tr>
<tr><th scope="row">Break and refinance at today's rate</th><td>4.00%</td><td>$2,416.99</td></tr>
</tbody></table></div>
<p>Look at the gap. The blend cuts the payment by about $128 a month right away. Breaking and refinancing would cut it by about $212 a month. But you'd pay the penalty first.</p>
<p>Lenders have their own blending formulas. Some weight by balance or by months in different ways. So treat this as a model of the idea, not a quote.</p>

<h2>Blend and extend versus blend to term</h2>
<p>The word "blend" is used for more than one thing, and lenders aren't consistent with the labels. In a blend-and-extend, the term gets longer. You give up your original maturity date.</p>
<p>Some lenders also offer a blend that keeps the original maturity date. In that case, the blended rate only applies to the time left. There's no extension. This is less common, and it gives you less, because you're only mixing rates over a short time.</p>
<p>Ask exactly what's on offer. What's the rate? What's the new maturity date? Does the amortization change? Are there any fees?</p>

<h2>When blending beats breaking</h2>
<p>Compare three paths: blend, break and refinance, or wait until maturity. Using the same example, here's how breaking looks.</p>
<p>The penalty on a fixed mortgage is the larger of two numbers. One is three months of interest. The other is the <a href="/interest-rate-differential/">interest rate differential</a>. Three months of interest on $400,000 at 5.00 percent is $5,000. A one-point differential over two years is $8,000. So the penalty would be $8,000 under a contract-rate method. It could be more under a posted-rate method.</p>
<p>Breaking saves another $83.52 a month compared with the blend. That's $2,500.51 minus $2,416.99. At that pace, it takes about 96 months to earn back an $8,000 penalty. That's eight years, well past the five-year term. In this example, blending wins.</p>
<p>If the penalty were much smaller, breaking could win. The same goes if the gap between the blended rate and the new rate were much bigger. The <a href="/refinance-break-even/">refinance break-even calculator</a> does this math with your numbers, fees included. The bigger decision is covered on the <a href="/refinance-mortgage-bc/">refinance hub</a>.</p>
<p>Blending also fits naturally in one case. That's when you're adding money to the mortgage. Maybe you're porting it to a bigger home, or taking out equity for a project. The lender will often blend the old rate on your current balance with the new rate on the extra amount. That's a close cousin of a blend-and-extend. It's one reason porting and blending questions overlap.</p>

<h2>When blending is a trap</h2>
<p>A blend can be a poor deal in a few situations. Lenders don't always point them out.</p>
<ul>
<li><strong>The new rate in the formula isn't competitive.</strong> The blend is only as good as the rate that goes into it. If the lender uses a posted rate or a high renewal rate for the extension, your blended rate may end up higher than you could get elsewhere.</li>
<li><strong>You lose the free exit.</strong> At your original maturity date, you could have switched lenders with no penalty. By extending, you give that up. You're tied to the lender for longer, with a penalty if you leave.</li>
<li><strong>Waiting would cost less.</strong> If you expect to shop around at maturity anyway, blending now may not help much. The same is true if rates look likely to fall. Weigh two years of lower payments against the risk of locking in an average.</li>
<li><strong>Fees or conditions.</strong> Some lenders charge admin or legal fees on a blend. Some add conditions to the new term. Check.</li>
</ul>
<p>The final test is simple. Compare the blended offer with what another lender would give you at maturity. Compare it with the cost of breaking too. If it doesn't beat both, it's a convenience, not a saving.</p>

${callout("Blending is a negotiation", "<p>Lenders don't always offer a blend, and a first offer is just a starting point. A broker can ask for a blended rate and compare it with rates from other lenders. Then you see the difference in writing. If the blend is the best option, take it. If it isn't, you'll know why.</p>")}

<h2>Questions to ask your lender</h2>
<ol>
<li>What's the exact blended rate? Which two rates and weights produce it?</li>
<li>Which current rate is used for the extension? Is it the lender's best rate, its posted rate or something else?</li>
<li>What's the new maturity date? Does my amortization change?</li>
<li>Are there any fees? Who pays the legal costs, if any?</li>
<li>What would the penalty be if I left during the new term?</li>
<li>What would I get if I did nothing and renewed at my original maturity date?</li>
</ol>

<h2>How Joshua helps</h2>
<p>Joshua Resvick compares the blend against the other paths: staying, breaking and refinancing, and switching at maturity. He lays them side by side in the <a href="/mortgage-calculators/#compare">scenario tool</a> and in his written Lender Comparison Report. Each option shows the penalty, the break-even and the commitment.</p>
<p>If the best option is to renew with your lender, he'll say so. If it's to wait, he'll say that too. On a mortgage with a mainstream (A) lender, the lender pays the broker. You pay nothing for the service. For renewal timing and the steps, see the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>.</p>

${cta({ title: "See whether blending beats breaking for you", text: "Send Joshua your balance, rate and maturity date. He'll model the blend, the break and the wait side by side.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/blend-and-extend-mortgage/",
  h1: "Blend and extend mortgages: lowering your rate without breaking",
  lede: "Blend and extend averages your current rate with today's, with no prepayment penalty and a longer commitment. When blending beats breaking, and when it is a trap.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Blend and extend", "/blend-and-extend-mortgage/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "What is a blend and extend mortgage?", a: "It is an agreement with your current lender to combine your existing rate with its current rate for a longer term, producing one blended rate and a new maturity date. You avoid a prepayment penalty because you are renegotiating, not leaving, but you commit to a longer term." },
    { q: "Is there a penalty for a blend and extend?", a: "Generally there is no prepayment penalty, because you are not paying out the mortgage. The cost shows up in the blended rate, which is a compromise between your old rate and today's, and in the longer commitment. Some lenders charge small fees, so ask." },
    { q: "Is blending better than breaking and refinancing?", a: "It depends on the numbers. If the penalty to break is large compared with the extra monthly savings, blending usually wins. If the penalty is small or the gap between the blended and new rates is large, breaking can win. A break-even calculation settles it." },
    { q: "Why might a blend and extend be a bad deal?", a: "The rate used for the new portion may be higher than you could get elsewhere, you give up the free exit at your original maturity date, and waiting may be cheaper. Compare the blended rate with other lenders' offers before accepting." },
    { q: "Can I blend and extend with a different lender?", a: "No. A blend and extend is an arrangement with your current lender about your current mortgage. A different lender can offer a new mortgage at maturity, or you can pay a penalty to leave early. Compare those paths with the blend." }
  ]
};
