import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your situation</h2>
<p>You are two years into a five-year fixed mortgage at a rate you were pleased to get, and now you need to move: a new job in another city, a growing family, a downsize, a separation. Breaking the mortgage would mean a prepayment penalty that could run to five figures. Someone has told you that you can take your mortgage with you. That is porting, and it is real, but it is also one of the most misunderstood features in a mortgage contract. This page explains what porting actually moves, when it beats breaking, how the blended rate works when the new mortgage is bigger, and the qualification you still have to pass, because porting is not automatic. Joshua Resvick is a BC mortgage broker and former underwriter, and the port-or-break question comes up on a large share of his purchase files.</p>

<h2>What porting is</h2>
<p>Porting transfers your existing mortgage, with its rate, its remaining term and its terms and conditions, from the home you are selling to the home you are buying, without a prepayment penalty. The lender discharges the mortgage on the old property and registers it on the new one, usually with a short gap allowed between the two closings. Most fixed and many variable mortgages in Canada are portable, but not all, and the details are in your mortgage contract and the lender's policy. Three things do not change when you port: the lender, the rate on the ported balance, and the maturity date. Everything else can.</p>

<h2>The three port scenarios</h2>
<h3>Same balance</h3>
<p>If the new mortgage is the same size as the old, the port is straightforward. The balance, rate and remaining term move over, the penalty is waived, and you pay the lender's port fee and the legal costs of the new registration.</p>

<h3>Port and increase</h3>
<p>If you are moving up and need a bigger mortgage, lenders port the existing balance at its current rate and lend the additional amount at today's rate, then blend the two into a single rate for the remaining term. The blended rate is a weighted average, so a large increase at a higher rate moves the blend a long way toward the new rate, and a small increase barely moves it. Some lenders blend to the existing maturity date; others offer a blend to a new, longer term, which is a related product explained on the <a href="/blend-and-extend-mortgage/">blend and extend page</a>. The choice between them is arithmetic, and it is worth doing before you accept either.</p>

<h3>Port and decrease</h3>
<p>If the new mortgage is smaller, as in a downsize, the part of the balance you pay off is treated as a prepayment. Many lenders charge the penalty on that part only and port the rest; some allow a prepayment up to your annual privilege without penalty; a few will only port the full balance. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> covers this scenario in the context of the whole move.</p>

<h2>When porting beats breaking</h2>
<p>The decision rests on two numbers: the penalty you avoid, and the rate you keep. If your rate is below today's rates, porting keeps the lower rate on your balance and avoids the penalty, and it is usually the right choice. If today's rates are lower than yours, breaking may be worth the penalty, because a new mortgage at a lower rate could save more over the remaining term than the penalty costs. The penalty itself is the greater of three months' interest and the interest rate differential, and the <a href="/interest-rate-differential/">IRD page</a> explains why that figure can be far larger than people expect on a fixed mortgage with time left. The <a href="/mortgage-penalty-calculator/">penalty calculator</a> gives a range, and your lender gives the exact figure on request. With those two numbers, the comparison is simple: the penalty on one side, and the interest difference over the remaining term on the other.</p>
<p>An illustrative example. A $450,000 balance with three years left at 3.90 percent, in a market where a new three-year rate is 4.80 percent, keeps about $11,700 of interest over the three years by porting rather than taking the new rate (illustrative, 22 years of amortization, calculated with the site engine), and avoids a penalty on top. Reverse the rates, with the existing mortgage at 5.60 percent and new rates at 4.60 percent, and breaking might save more than the penalty, depending on the lender's IRD calculation. The example is for the shape of the decision only; your figures come from your contract and the calculators.</p>

<h2>The qualification you still have to pass</h2>
<p>This surprises people. Porting is not a right that survives from the original approval; it is a new application on the new property. The lender re-qualifies you on your current income, debts and credit, applies the stress test, and appraises the new home. If your income has dropped, your debts have grown or the new home does not meet the lender's property rules, the port can be declined, and you are then back to breaking the mortgage and starting fresh with a penalty. The <a href="/mortgage-application-checklist/">application checklist</a> applies in full. A broker checks that you will qualify for the port before the sale is firm, which is the point at which it matters.</p>

<h2>Timing windows</h2>
<p>Lenders allow a period between the sale closing and the purchase closing during which the port can happen. Thirty to ninety days is common, and some lenders allow longer; the exact window is lender policy and is written into the port approval. If the purchase closes before the sale, the lender may port against the new home and treat the old balance differently, or you may need <a href="/bridge-financing/">bridge financing</a> for the down payment. If the sale closes first and the purchase is outside the window, the port lapses and the penalty is charged, sometimes with a refund if you buy within a later period. The sequence of the two closings and the dates in the contract decide whether a port is possible, and they should be set with the port in mind.</p>

<h2>Costs of porting</h2>
<ul>
<li><strong>A port or assignment fee</strong> charged by the lender, modest compared with a penalty.</li>
<li><strong>Legal fees</strong> for discharging the old mortgage and registering the new one, which you would pay on any purchase.</li>
<li><strong>An appraisal</strong> of the new property, at some lenders.</li>
<li><strong>The penalty on any part paid down</strong>, in a port-and-decrease.</li>
</ul>
<p>Sale proceeds still matter even when you port, because the down payment on the new home comes from them. The <a href="/mortgage-calculators/#sale-proceeds">sale proceeds calculator</a> estimates the net after commission, legal fees and the existing mortgage, which with a port is not paid out but moved.</p>

<h2>When porting is not available</h2>
<ul>
<li>Your mortgage contract excludes it, or the lender does not port its variable or its insured products. Read the contract or ask.</li>
<li>The new home is outside the lender's lending area or property type, such as a rural property, a leasehold or a building the lender declines.</li>
<li>You no longer qualify on income or credit.</li>
<li>The timing between closings falls outside the lender's window.</li>
<li>You want to change lenders. A port stays with the same lender by definition; moving to a different lender is a break, with the penalty, and the comparison has to include that.</li>
</ul>

<h2>Joshua's process</h2>
<ol>
<li><strong>A 15-minute call</strong> about your current mortgage, its rate and term, and the move you are planning.</li>
<li><strong>Two numbers.</strong> The penalty to break, and the interest you would keep or lose by porting at your rate versus today's.</li>
<li><strong>A qualification check</strong> before the sale is firm, so a port does not fail at the lender's desk after you have committed to both deals.</li>
<li><strong>The closing dates set to the port window</strong>, with a bridge arranged if the purchase closes first.</li>
<li><strong>Port, blend or break</strong>, shown side by side in a written Lender Comparison Report, with the costs of each.</li>
</ol>
<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service, and that includes the work of arranging a port with your existing lender. Fees arise only on some B-lender and private files, disclosed in writing on BCFSA's Form 1A before you commit.</p>

${callout("Ask about the port before the penalty", "<p>Lenders will quote the penalty readily and mention the port only if asked. If you are selling with time left on a fixed term, the first question is whether the mortgage is portable and what the window is. The second is whether you still qualify. Joshua answers both before you list.</p>")}

${cta({ title: "Moving with time left on your term?", text: "Book a 15-minute call. Joshua will work out the penalty, the port and the blend, and tell you which is cheapest. Or <a href=\"/contact/\">contact him</a> by email." })}
`;

export default {
  slug: "/porting-your-mortgage/",
  h1: "Porting your mortgage in BC: take your rate with you",
  lede: "Porting moves your existing rate and terms to the new home and avoids the penalty. When it beats breaking, how the blended rate works, and the qualification you still have to pass.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Porting your mortgage", "/porting-your-mortgage/"]],
  nav: "/mortgage-rates-bc/",
  body,
  faqs: [
    { q: "What does it mean to port a mortgage?", a: "Porting transfers your existing mortgage, with its rate, remaining term and conditions, from the home you are selling to the home you are buying, without a prepayment penalty. The lender stays the same. Most Canadian mortgages are portable, but not all, and the lender re-qualifies you on the new property before approving the port." },
    { q: "Do I have to re-qualify to port my mortgage?", a: "Yes. A port is a new application on the new home. The lender checks your current income, debts and credit, applies the stress test and appraises the property. If anything has changed for the worse, the port can be declined, which is why a broker checks that you will qualify before your sale is firm." },
    { q: "What is a blended rate when I port and increase?", a: "When the new mortgage is larger, the lender ports your existing balance at its current rate and lends the extra at today's rate, then combines the two into one weighted-average rate for the remaining term. A large increase at a higher rate moves the blend most of the way toward the new rate; a small one barely moves it." },
    { q: "How long do I have between selling and buying to port?", a: "Lenders allow a window between the two closings, commonly 30 to 90 days and sometimes longer, set out in the port approval. If the purchase closes first, you may need bridge financing. If the purchase falls outside the window, the port lapses and the penalty is charged, sometimes with a refund if you buy within a later period." },
    { q: "Is porting always cheaper than breaking?", a: "No. Porting keeps your rate and avoids the penalty, which is best when your rate is below today's. If new rates are well below yours, breaking and taking a new mortgage can save more than the penalty costs over the remaining term. The comparison needs the exact penalty from your lender and current rates." }
  ]
};
