import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>What blending is</h2>
<p>Suppose your mortgage has two years left at a rate that is higher than today's rates, and you would like the lower payment now, not at maturity. Breaking the mortgage would trigger a prepayment penalty. A blend-and-extend offers a different route. Your lender combines your current rate with its current rate for a longer term, produces a single blended rate, and starts a new, longer term at that rate. You do not pay a prepayment penalty, because you are not leaving the mortgage. You are renegotiating it with the same lender.</p>
<p>That sounds like a free improvement, and sometimes it is a good one. It is not free. The cost is hidden in two places: the blended rate is a compromise between your old rate and the new one, so you do not get the full benefit of today's rates, and you are committed to the lender for a longer term. This page explains the arithmetic, when blending beats breaking, when it is worse than doing nothing and which questions to ask a lender that offers it. Rates in the examples are illustrative.</p>

<h2>How the blend works, with numbers</h2>
<p>Take a $400,000 balance with 20 years of amortization remaining. The current rate is 5.00 percent with 2 years left in the term. The lender's current five-year rate is, for illustration, 4.00 percent. In a simple time-weighted blend, the lender averages the old rate over the two years that remain and the new rate over the three years of the extension:</p>
<p>(5.00% x 2 years + 4.00% x 3 years) / 5 years = 4.40 percent.</p>
<p>The new five-year term would run at 4.40 percent. The payments, calculated on the same balance and amortization, change as follows:</p>
<div class="table-wrap"><table>
<thead><tr><th>Option</th><th>Rate</th><th>Monthly payment</th></tr></thead>
<tbody>
<tr><th scope="row">Stay as you are</th><td>5.00%</td><td>$2,628.50</td></tr>
<tr><th scope="row">Blend and extend</th><td>4.40%</td><td>$2,500.51</td></tr>
<tr><th scope="row">Break and refinance at today's rate</th><td>4.00%</td><td>$2,416.99</td></tr>
</tbody></table></div>
<p>The blend lowers the payment by about $128 a month straight away. Breaking and refinancing would lower it by about $212 a month, but only after paying the penalty. Lenders have their own blending formulas, and some weight by balance or by months in different ways, so treat this as a model of the idea rather than a quote.</p>

<h2>Blend and extend versus blend to term</h2>
<p>The word "blend" is used for more than one arrangement, and lenders are not consistent about the labels. In a blend-and-extend, the term is lengthened, so you give up the original maturity date. Some lenders also describe a blend that keeps the original maturity date, and in that case the blended rate applies only to the time remaining, with no extension. The second is less common and gives you less, because you are only combining rates over a short period. Ask exactly what is being offered: the rate, the new maturity date, whether the amortization changes and whether any fees apply.</p>

<h2>When blending beats breaking</h2>
<p>The comparison to make is between three paths: blend, break and refinance, or wait until maturity. Using the same example, here is how the break option looks. The penalty on the fixed mortgage is the greater of three months of interest and the <a href="/interest-rate-differential/">interest rate differential</a>. Three months of interest on $400,000 at 5.00 percent is $5,000. A one-point differential over two years is $8,000, so the penalty would be $8,000 under a contract-rate method, and potentially more under a posted-rate method.</p>
<p>Breaking saves a further $83.52 a month compared with the blend ($2,500.51 less $2,416.99). To earn back an $8,000 penalty at that pace takes about 96 months, which is eight years and well beyond the five-year term. In this example, blending wins. If the penalty were much smaller, or the gap between the blended rate and the new rate much larger, breaking could win. The <a href="/refinance-break-even/">refinance break-even calculator</a> does this arithmetic with your numbers, including fees. The more general decision is covered on the <a href="/refinance-mortgage-bc/">refinance hub</a>.</p>
<p>Blending also has a natural fit. If you are adding money to the mortgage, as when you port it to a larger home or take equity out for a project, the lender will often blend the old rate on the existing balance with the new rate on the additional amount. That is a close relative of a blend-and-extend, and it is one reason porting questions and blending questions overlap.</p>

<h2>When blending is a trap</h2>
<p>A blend can be a poor deal in several situations, and lenders are not always eager to point them out.</p>
<ul>
<li><strong>The new-rate component is not a competitive rate.</strong> The blend is only as good as the rate in the formula. If the lender uses a posted or a high renewal rate for the extension, the blended rate may be higher than you could get elsewhere.</li>
<li><strong>You lose the free exit.</strong> At your original maturity date you could have switched lenders with no penalty. By extending, you give that up and are tied to the lender for the longer term, with a penalty if you leave.</li>
<li><strong>Waiting would be cheaper.</strong> If rates are likely to be lower, or you expect to shop at maturity, the benefit of blending now may be small. The two years of lower payments have to be weighed against the risk that you are locking in an average.</li>
<li><strong>Fees or conditions.</strong> Some lenders charge administrative or legal fees on a blend, or apply conditions to the new term, so check.</li>
</ul>
<p>The last test is simple: compare the blended offer with what another lender would offer you at maturity, and with the cost of breaking. If it does not beat both, it is a convenience and not a saving.</p>

${callout("Blending is a negotiation", "<p>Lenders do not always volunteer a blend, and a first offer is a starting point. A broker can ask for a blended rate, compare it with the rate on offer from other lenders and show you the difference in writing. If the blend is the best option, take it. If it is not, you will know why.</p>")}

<h2>Questions to ask your lender</h2>
<ol>
<li>What is the exact blended rate, and what two rates and weights produce it?</li>
<li>Which current rate is used for the extension: the lender's best, its posted rate or something else?</li>
<li>What is the new maturity date, and does my amortization change?</li>
<li>Are there any fees, and who pays the legal costs, if any?</li>
<li>What would the penalty be if I left during the new term?</li>
<li>What would I get if I did nothing and renewed at my original maturity date?</li>
</ol>

<h2>How Joshua helps</h2>
<p>Joshua Resvick compares the blend against the alternatives: staying, breaking and refinancing, and switching at maturity. He lays them side by side in the <a href="/mortgage-calculators/#compare">scenario tool</a> and in his written Lender Comparison Report, with the penalty, the break-even and the commitment shown for each. If the best option is to renew with your lender, he will say so. If the best option is waiting, he will say that too. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. For renewal timing and the steps, see the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>.</p>

${cta({ title: "See whether blending beats breaking for you", text: "Send Joshua your balance, rate and maturity date and he will model the blend, the break and the wait side by side.", href: "/contact/", label: "Contact Joshua" })}
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
