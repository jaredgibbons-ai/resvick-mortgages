import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "Porting moves your mortgage, rate and remaining term to your new home with no penalty. It isn't automatic. You still have to qualify again, and the new mortgage usually blends your old rate with today's rate if it's bigger.", who: "Anyone selling and buying with time left on a fixed or variable term.", next: "Ask your lender if your mortgage is portable and what the window is, then price the break with the <a href=\"/mortgage-penalty-calculator/\">penalty calculator</a>." })}

<h2>Your situation</h2>
<p>You're two years into a five-year fixed mortgage, at a rate you were happy to get. Now you need to move. Maybe it's a new job in another city, a growing family, a downsize or a separation. Breaking the mortgage would mean a prepayment penalty that could run to five figures.</p>
<p>Someone told you that you can take your mortgage with you. That's porting. It's real, but it's one of the most misunderstood features in a mortgage contract.</p>
<p>This page explains what porting actually moves and when it beats breaking. It covers how the blended rate works when the new mortgage is bigger. And it covers the qualification you still have to pass, because porting isn't automatic. Joshua Resvick is a BC mortgage broker and former underwriter. The port-or-break question comes up on a large share of his purchase files.</p>

<h2>What porting is</h2>
<p>Porting moves your existing mortgage from the home you're selling to the home you're buying, with no prepayment penalty. Your rate, remaining term and conditions all come along. The lender discharges the mortgage on the old property and registers it on the new one. There's usually a short gap allowed between the two closings.</p>
<p>Most fixed and many variable mortgages in Canada are portable, but not all. The details are in your mortgage contract and the lender's policy. Three things don't change when you port: the lender, the rate on the ported balance, and the maturity date. Everything else can.</p>

<h2>The three port scenarios</h2>
<h3>Same balance</h3>
<p>If the new mortgage is the same size as the old one, the port is simple. The balance, rate and remaining term move over, and the penalty is waived. You pay the lender's port fee and the legal costs of the new registration.</p>

<h3>Port and increase</h3>
<p>Say you're moving up and need a bigger mortgage. Lenders port your existing balance at its current rate. They lend the extra amount at today's rate. Then they blend the two into one rate for the rest of the term.</p>
<p>The blended rate is a weighted average. So a large increase at a higher rate pulls the blend a long way toward the new rate. A small increase barely moves it. Some lenders blend to your existing maturity date. Others offer a blend to a new, longer term. That's a related product, explained on the <a href="/blend-and-extend-mortgage/">blend and extend page</a>. Choosing between them is simple math, and it's worth doing before you accept either.</p>

<h3>Port and decrease</h3>
<p>If the new mortgage is smaller, like in a downsize, the part you pay off counts as a prepayment. Many lenders charge the penalty on that part only and port the rest. Some allow a prepayment up to your yearly privilege with no penalty. A few will only port the full balance. The <a href="/downsizing-and-your-mortgage/">downsizing page</a> covers this as part of the whole move.</p>

<h2>When porting beats breaking</h2>
<p>The decision comes down to two numbers: the penalty you avoid, and the rate you keep.</p>
<p>If your rate is below today's rates, porting keeps the lower rate and avoids the penalty. It's usually the right choice. If today's rates are lower than yours, breaking may be worth the penalty. A new mortgage at a lower rate could save more over the remaining term than the penalty costs.</p>
<p>The penalty is the greater of three months' interest and the interest rate differential. The <a href="/interest-rate-differential/">IRD page</a> explains why that can be far larger than people expect on a fixed mortgage with time left. The <a href="/mortgage-penalty-calculator/">penalty calculator</a> gives a range. Your lender gives the exact figure if you ask. With those two numbers, the comparison is simple. Put the penalty on one side and the interest difference over the remaining term on the other.</p>
<p>Here's an example, for illustration only. Take a $450,000 balance with three years left at 3.90 percent. A new three-year rate is 4.80 percent. By porting instead of taking the new rate, you keep about $11,700 of interest over the three years. That's illustrative, with 22 years of amortization, calculated with the site engine. And you avoid a penalty on top.</p>
<p>Now reverse the rates. Your existing mortgage is at 5.60 percent and new rates are 4.60 percent. Breaking might save more than the penalty, depending on the lender's IRD calculation. The example only shows the shape of the decision. Your figures come from your contract and the calculators.</p>

<h2>The qualification you still have to pass</h2>
<p>This surprises people. Porting isn't a right carried over from your original approval. It's a new application on the new property.</p>
<p>The lender checks your current income, debts and credit again. It applies the stress test and appraises the new home. Maybe your income dropped, your debts grew, or the new home doesn't meet the lender's property rules. Then the port can be declined. You're back to breaking the mortgage and starting fresh, with a penalty.</p>
<p>The <a href="/mortgage-application-checklist/">application checklist</a> applies in full. A broker checks that you'll qualify for the port before your sale is firm. That's the moment it matters.</p>

<h2>Timing windows</h2>
<p>Lenders allow a period between your sale closing and your purchase closing for the port to happen. Thirty to ninety days is common, and several major lenders allow up to 120 days. The exact window is lender policy, and it's written into the port approval.</p>
<p>What if the purchase closes before the sale? The lender may port against the new home and handle the old balance differently. Or you may need <a href="/bridge-financing/">bridge financing</a> for the down payment.</p>
<p>What if the sale closes first and the purchase falls outside the window? The port lapses and you pay the penalty. Some lenders refund it if you buy within a later period. The order of the two closings and the contract dates decide whether a port works. Set them with the port in mind.</p>

<h2>Costs of porting</h2>
<ul>
<li><strong>A port or assignment fee</strong> from the lender. It's small compared with a penalty.</li>
<li><strong>Legal fees</strong> to discharge the old mortgage and register the new one. You'd pay these on any purchase.</li>
<li><strong>An appraisal</strong> of the new property, at some lenders.</li>
<li><strong>The penalty on any part paid down,</strong> in a port-and-decrease.</li>
</ul>
<p>Sale proceeds still matter when you port, because your new down payment comes from them. The <a href="/mortgage-calculators/#sale-proceeds">sale proceeds calculator</a> estimates your net after commission, legal fees and the existing mortgage. With a port, that mortgage isn't paid out, it's moved.</p>

<h2>When porting is not available</h2>
<ul>
<li>Your mortgage contract rules it out, or the lender won't port its variable or insured products. Read the contract or ask.</li>
<li>The new home is outside the lender's area or property types. Think of a rural property, a leasehold or a building the lender declines.</li>
<li>You no longer qualify on income or credit.</li>
<li>The time between closings falls outside the lender's window.</li>
<li>You want to change lenders. A port stays with the same lender by definition. Moving to a different lender is a break, with the penalty, so the comparison has to include it.</li>
</ul>

<h2>Joshua's process</h2>
<ol>
<li><strong>A 15-minute call</strong> about your current mortgage, its rate and term, and the move you're planning.</li>
<li><strong>Two numbers.</strong> The penalty to break, and the interest you'd keep or lose by porting at your rate versus today's.</li>
<li><strong>A qualification check</strong> before your sale is firm. That way a port doesn't fail at the lender's desk after you've committed to both deals.</li>
<li><strong>Closing dates set to the port window,</strong> with a bridge arranged if the purchase closes first.</li>
<li><strong>Port, blend or break,</strong> shown side by side in a written Lender Comparison Report, with the costs of each.</li>
</ol>
<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. That includes arranging a port with your existing lender. Fees only come up on some B-lender and private files. They're disclosed in writing on BCFSA's Form 1A before you commit.</p>

${callout("Ask about the port before the penalty", "<p>Lenders will quote the penalty readily and mention the port only if you ask. If you're selling with time left on a fixed term, first ask whether the mortgage is portable and what the window is. Then ask whether you still qualify. Joshua answers both before you list.</p>")}

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
    { q: "How long do I have between selling and buying to port?", a: "Lenders allow a window between the two closings, commonly 30 to 90 days, and up to 120 days at several major lenders, set out in the port approval. If the purchase closes first, you may need bridge financing. If the purchase falls outside the window, the port lapses and the penalty is charged, sometimes with a refund if you buy within a later period." },
    { q: "Is porting always cheaper than breaking?", a: "No. Porting keeps your rate and avoids the penalty, which is best when your rate is below today's. If new rates are well below yours, breaking and taking a new mortgage can save more than the penalty costs over the remaining term. The comparison needs the exact penalty from your lender and current rates." }
  ]
};
