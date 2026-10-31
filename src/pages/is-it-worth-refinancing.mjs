import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Only if it pays for itself before you leave the mortgage. Add up the penalty and fees, divide by the monthly saving, and you get the months to break even.", who: "Anyone thinking about breaking a mortgage early for a lower rate, lower payments or to pull out equity.", next: "Run your numbers in the <a href=\"/refinance-break-even/\">refinance break-even calculator</a>." })}
<h2>The test: months until it pays for itself</h2>
<p>Every refinance made for a lower rate, or for lower payments, has to pass one test. Add up everything it costs you to do, and divide by the amount it saves you each month. The answer is the number of months until you are ahead. If that number is longer than the time you expect to keep the mortgage, the refinance loses money, however good the new rate looks.</p>
<p>Written out, it is simple:</p>
<ul>
<li><strong>One-time costs:</strong> the penalty on your current mortgage. Add legal fees and any discharge or admin fee. Add the appraisal too, if the lender won't pay for it.</li>
<li><strong>Monthly benefit:</strong> your current payment minus the new one. Keep the amortization the same so you compare like with like.</li>
<li><strong>Break-even months:</strong> one-time costs divided by the monthly benefit.</li>
</ul>
<p>The penalty is almost always the biggest line, so find it first. On a variable-rate mortgage it is generally three months of interest. On a fixed rate, it's generally the larger of three months of interest and the <a href="/interest-rate-differential/">interest rate differential</a>. Your lender chooses how that differential is worked out. The <a href="/mortgage-calculators/#penalty">penalty calculator</a> shows a range, and the <a href="/refinance-break-even/">refinance break-even calculator</a> runs the whole test with your figures. Use them to get oriented, then ask your lender for its penalty figure in writing.</p>

<h2>Example 1: a lower rate</h2>
<p>These figures are illustrative. The rates are chosen for the example and are not quotes or predictions. Suppose you owe $500,000 at a 5.50 percent fixed rate, with 20 years of amortization left and 24 months remaining in your term. A new five-year fixed rate of 4.50 percent is available.</p>
<ul>
<li>Three months of interest on your balance is $6,875.</li>
<li>A contract-rate differential, using a 4.50 percent comparison rate over the 24 remaining months, is $10,000. That is larger, so $10,000 is the penalty in this example. Other methods can produce more.</li>
<li>Add $1,500 for legal and appraisal costs, and the one-time cost is $11,500.</li>
<li>The monthly payment falls from $3,421.96 to $3,152.03, a saving of $269.93.</li>
</ul>
<p>Divide $11,500 by $269.93 and you get roughly 43 months. That is inside a new five-year term, so on a first look it passes. Look closer, though. Your existing mortgage matures in 24 months anyway. In those 24 months the lower rate saves about $9,665 in interest, which is less than the $11,500 you spent. The refinance does not pay for itself before your old term would have ended. After month 24 the question becomes what rate you would have had at renewal. If renewal rates are then higher than 4.50 percent, locking in 4.50 percent for the remaining three years was worth it. If they are the same or lower, it was not. A refinance at this stage is a bet about future rates, and the cost of the bet is known in advance.</p>

<h2>Example 2: rolling in debt</h2>
<p>Consolidation changes the test. The benefit is the interest you stop paying on the debt, not a lower mortgage rate. Suppose you carry $30,000 on credit cards at about 19.99 percent and your mortgage is at renewal, so there is no penalty. Roll the debt in at an illustrative 4.50 percent over 25 years and the added mortgage payment is $166.04 a month. Repaying the same cards over five years would take about $794.65 a month, so the monthly cash flow improves by roughly $628. With $1,500 of one-time costs, the cost is repaid in under three months of cash flow.</p>
<p>That is the payment view. The total-cost view is less flattering. Over five years the card interest comes to about $17,679. The same $30,000 inside a 25-year mortgage costs about $19,813 in interest over its full life, which is more. So the refinance wins on monthly breathing room. It can lose on lifetime interest, unless you keep paying what you used to pay on the cards. At $794.65 a month, the $30,000 would be cleared in about 41 months with roughly $2,384 of interest. The tool works only if the extra cash flow is used to pay it down. The full discussion is on the page about <a href="/refinance-to-pay-off-debt/">refinancing to pay off debt</a>.</p>

<h2>Example 3: a suite</h2>
<p>Say you borrow $120,000 to build a legal suite. Use an illustrative 4.50 percent over 25 years. The added payment is $664.17 a month. Say the suite rents for $1,800. Insurance, utilities, upkeep and the odd empty month bring the net to about $1,200. After the new payment, the suite adds about $536 a month. Treat $11,500 of combined penalty and fees as the one-time cost, and the break-even is about 22 months of the suite being rented.</p>
<p>The flaw in that arithmetic is the assumption that the suite exists, is legal, and is rented the day the work finishes. Building runs late and over budget. And a suite that isn't registered or up to code can count as zero income at many lenders. The page on <a href="/secondary-suite-refinance/">refinancing to build a secondary suite</a> covers the federal program. The page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a> covers the income side.</p>

${cta({ title: "Run your own break-even", text: "Send Joshua your balance, rate, maturity date and the reason you are considering a refinance. He will get your penalty figure and give you a straight answer on the break-even months, before you talk to any lender." })}

<h2>The hidden costs checklist</h2>
<p>People price the penalty and forget the rest. Before you decide, ask for each of these in writing:</p>
<ul>
<li><strong>Legal fees</strong> for registering the new mortgage and discharging the old one.</li>
<li><strong>Appraisal.</strong> Some lenders cover it and some do not.</li>
<li><strong>Discharge or administration fees</strong> charged by your current lender.</li>
<li><strong>A new term.</strong> The new rate locks you in for its full term, with its own penalty structure. Check that the prepayment privileges and the penalty calculation are no worse than what you have now.</li>
<li><strong>Re-amortization.</strong> If the payment drops partly because you stretched the amortization, you are paying for it in total interest, not saving it.</li>
<li><strong>Qualification.</strong> A refinance goes through the stress test, which a straight switch at maturity may avoid. If your income has changed since you first qualified, the answer can differ.</li>
<li><strong>Your time.</strong> It is a real application, with documents, an appraisal and a legal appointment.</li>
</ul>

<h2>The rule: if break-even comes after you will leave, the answer is no</h2>
<p>This is the part that gets forgotten. A refinance can have a break-even of 30 months and still be a bad idea if you expect to sell in 20. Be honest about your likely move date, and about whether you might renew with a different lender or restructure again. If your answer to "how long will I keep this mortgage?" is shorter than the break-even months, stop. Also check if your mortgage is portable. Taking your rate to a new home can change the math, and your lender's terms decide that. The short rule is that a refinance has to pay back before the date you expect to leave it.</p>

<h2>The other route: wait for renewal, or blend and extend</h2>
<p>Within a year or so of maturity, waiting often beats breaking. At maturity there is no penalty, and a refinance or a switch costs only the ordinary fees. Starting about 120 days out, with a rate hold, lets you compare lenders without a penalty. The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> sets out the timing.</p>
<p>Another route sits between waiting and breaking. Your lender may offer to <a href="/blend-and-extend-mortgage/">blend and extend</a>. It averages your rate with today's rate and extends your term. No separate penalty is charged. The blended rate is a weighted average. It may be higher than you'd get elsewhere, so compare it like any other offer. It is the no-break option, which makes it worth a look whenever you are tempted by a rate drop mid-term.</p>

${callout("Rule of thumb", "<p>Penalty first, new rate second. If you cannot get the penalty in writing, you do not yet have the information you need to decide.</p>")}

<p>For the wider picture of why people refinance and which route fits each reason, return to the <a href="/refinance-mortgage-bc/">refinance hub</a>. If you want the numbers checked, <a href="/contact/">contact Joshua</a> and he will run them with you.</p>
`;

export default {
  slug: "/is-it-worth-refinancing/",
  h1: "Is it worth refinancing my mortgage? The break-even test",
  lede: "Add up the penalty and the costs, divide by what you save each month, and compare the answer to how long you will keep the mortgage. Three worked examples.",
  crumbs: [["Home", "/"], ["Refinancing", "/refinance-mortgage-bc/"], ["Is it worth refinancing?", "/is-it-worth-refinancing/"]],
  nav: "/refinance-mortgage-bc/", body,
  faqs: [
    { q: "How do I know if refinancing is worth it?", a: "Add the penalty and all one-time costs, then divide by the monthly saving to get break-even months. If that number is shorter than the time you will keep the mortgage, and there is no penalty-free route available soon, the refinance can make sense. If not, it will not." },
    { q: "How much lower does the rate have to be to refinance?", a: "There is no single number. A small rate drop can pay off when the penalty is three months of interest, and a large drop can fail when the penalty is a big interest rate differential. The break-even months settle it, not the size of the rate gap." },
    { q: "Is it better to refinance or wait until renewal?", a: "If you are within a year of maturity, waiting is often cheaper, because renewal carries no penalty and you can still compare lenders. Mid-term refinancing makes sense mainly when the savings are large and the penalty is small, or when you need the funds now." },
    { q: "What does it cost to refinance a mortgage in BC?", a: "The main cost is the prepayment penalty on your existing mortgage, followed by legal fees, an appraisal where the lender does not cover it, and possibly a discharge fee. These vary, so ask for each in writing. A refinance does not trigger the BC property transfer tax." },
    { q: "Does a refinance restart my mortgage term?", a: "Yes. The new mortgage has its own term, rate and penalty rules, and you can choose a new amortization within the lender's limits. Stretching the amortization lowers the payment but raises the total interest, so compare the numbers on the same amortization." }
  ]
};
