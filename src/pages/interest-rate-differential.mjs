import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "The IRD is the rate-based part of a fixed-rate penalty. Your penalty is usually the greater of three months of interest and the IRD. How your lender works out the IRD can double the cost.",
  who: "Anyone with a fixed-rate mortgage who might sell, refinance or switch before the term ends.",
  next: "Estimate yours with the <a href=\"/mortgage-calculators/#penalty\">penalty calculator</a>, then ask your lender for the exact figure in writing."
})}
<h2>IRD in plain language</h2>
<p>The interest rate differential, or IRD, is the part of a fixed-rate penalty that depends on interest rates. It answers a lender's question. If this borrower leaves now, how much interest do I lose compared with lending the money out again today?</p>
<p>When today's rates are lower than your rate, the lender would earn less on the money it gets back. The IRD charges you for that gap over the time left in your term. When today's rates are higher, the IRD is zero, and the penalty drops to its minimum.</p>
<p>A fixed-rate penalty is generally the greater of two amounts: three months of interest, or the IRD. A variable-rate penalty is generally just three months of interest. That difference is one reason choosing fixed or variable is about more than the rate. The page on <a href="/fixed-vs-variable-mortgage/">fixed versus variable mortgages</a> covers it.</p>
<p>The IRD is also why the cost of breaking a fixed mortgage is hard to know in advance. It uses your rate, your balance and the months left. It also uses a comparison rate the lender picks, and lenders pick it in different ways. Test the math with your own figures in the <a href="/mortgage-calculators/#penalty">penalty calculator</a>.</p>

<h2>The two methods</h2>
<p>Lenders use one of two main ways to find the comparison rate. The choice can change your penalty by thousands of dollars.</p>
<p>The <strong>contract-rate method</strong> compares your rate with the rate the lender charges today for a term that matches your time left. With three years left, the lender looks at its current three-year rate. The IRD is the gap between the two rates.</p>
<p>The <strong>posted-rate method</strong> works differently. First, the lender looks at the discount you got at the start. That's the gap between the posted rate back then and the rate you were given.</p>
<p>Then it takes today's posted rate for your remaining term and subtracts that same discount. The result is the comparison rate. The IRD is the gap between your rate and that comparison rate.</p>
<p>The comparison rate comes from posted rates, not the rates the lender actually charges today. So the result can look very different from the contract-rate method.</p>

<h2>A worked example with generic figures</h2>
<p>These figures are illustrative, not any lender's formula. They show how the methods compare on the same mortgage.</p>
<p>Say the balance is $400,000, the rate is 4.99 percent and there are 36 months left. When you took the mortgage, the posted five-year rate was 6.99 percent. So your discount was 2.00 points.</p>
<div class="table-wrap"><table>
<thead><tr><th>Method</th><th>How the comparison works</th><th>Penalty</th></tr></thead>
<tbody>
<tr><th scope="row">Three months of interest</th><td>$400,000 x 4.99% x 3/12</td><td>$4,990</td></tr>
<tr><th scope="row">Contract-rate IRD</th><td>Lender's current 3-year rate is 4.49%, a 0.50-point differential for 3 years</td><td>$6,000</td></tr>
<tr><th scope="row">Posted-rate IRD</th><td>Today's posted 3-year rate of 5.99% less your 2.00-point discount gives 3.99%, a 1.00-point differential for 3 years</td><td>$12,000</td></tr>
</tbody></table></div>
<p>The penalty is the greater of three months of interest and the IRD. So this borrower pays $6,000 at a lender using the contract-rate method. At a lender using the posted-rate method, it's $12,000. Same mortgage, same balance, same rate, twice the cost.</p>
<p>The gap can be wider. One Canadian mortgage broker published a teaching example in 2026. It uses a $400,000 balance at 4.89 percent with three years left. Three months of interest comes to $4,890. The contract-rate IRD is $6,000. The posted-rate IRD is $20,400.</p>
<p>So a penalty over $20,000 on a mortgage that size is possible under the posted-rate method. That's why it deserves a question before you sign.</p>

<h2>Why some penalties run higher</h2>
<p>The posted-rate method tends to produce bigger penalties because it starts from posted rates. Posted rates are published list rates, and lenders often discount them a lot.</p>
<p>Your original discount gets subtracted from a posted rate that may have dropped only a little. That can push the comparison rate below the rates the lender actually offers today. A lower comparison rate means a bigger gap, and a bigger penalty.</p>
<p>Some larger lenders use the posted-rate method. Many others use the contract-rate method. It's a feature of the lender and the product, and it should be in your contract or commitment letter.</p>
<p>A lender with a modest, predictable penalty isn't the same as one with an open-ended penalty, even when the advertised rates match.</p>

<h2>Three months of interest, compared</h2>
<p>Three months of interest is simple. Multiply your balance by your rate, then divide by four. On $400,000 at 5.00 percent, that's $5,000.</p>
<p>It's the whole penalty on a variable mortgage, and the floor under a fixed one. It's also a good yardstick. If a fixed penalty is much bigger than three months of interest, the IRD is doing the work. Then the lender's method is the thing to look at.</p>
<p>The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> page covers the penalty alongside the privileges that let you pay extra without triggering it.</p>

<h2>When breaking still wins</h2>
<p>A big penalty doesn't always mean you should stay. If your rate is much higher than what you can get today, the savings can beat the penalty over the rest of your term.</p>
<p>It's a break-even question. How many months of lower payments does it take to earn back the penalty? And will you likely keep the new mortgage that long? The <a href="/refinance-break-even/">refinance break-even calculator</a> works it through, including the penalty, the new rate and any fees.</p>
<p>There are options between staying and breaking too. A blend-and-extend can lower your rate without the penalty, in exchange for a longer commitment. The page on <a href="/blend-and-extend-mortgage/">blend and extend mortgages</a> explains when that helps and when it's a trap. Which route wins depends on your numbers, and Joshua Resvick can run them with you.</p>

${callout("A note on how the penalty is stated", "<p>A calculator gives you a range, not a quote. Your lender's number is the one that counts. It can differ from any online estimate because of how the lender picks the comparison rate. Ask for the penalty in writing, for your exact payout date, before you decide anything that depends on it.</p>")}

<h2>Questions to ask before you sign a fixed term</h2>
<ol>
<li>Does the lender use the contract-rate method or the posted-rate method?</li>
<li>If it's the contract-rate method, which rate is the comparison? Is it a discounted rate or the posted rate?</li>
<li>What would the penalty be on a $100,000 payout, so you can see the formula at work?</li>
<li>Is the penalty based on the full balance, or only on what you prepay beyond your privileges?</li>
<li>Can the mortgage be ported to a new property, and what happens to the penalty if it is?</li>
<li>Is there a fee at discharge, or when moving the mortgage?</li>
</ol>
<p>Joshua compares lenders on these points as well as the rate. He shows them in writing in the <a href="/lender-comparison-report/">Lender Comparison Report</a>. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. For the wider picture of how rates and terms fit together, see <a href="/mortgage-rates-bc/">mortgage rates in BC</a>.</p>

${cta({ title: "Get a penalty estimate", text: "Bring your mortgage statement. Joshua will estimate your penalty, work out whether breaking pays and show you the alternatives.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/interest-rate-differential/",
  h1: "Interest rate differential (IRD) explained: the penalty math",
  lede: "How lenders calculate the part of a fixed-rate penalty that depends on rates, why two methods can differ by thousands of dollars, and how to check yours before you sign.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Interest rate differential", "/interest-rate-differential/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "What does IRD mean on a mortgage?", a: "It stands for interest rate differential, the rate-based part of a fixed-rate prepayment penalty. It compares your contract rate with a lender-chosen comparison rate over the time remaining. The penalty is generally the greater of the IRD and three months of interest." },
    { q: "Is the IRD the same at every lender?", a: "No. Some lenders compare against their current rate for the remaining term, and others compare against posted rates less your original discount. The second method can produce a much larger penalty on the same mortgage, so check which one your contract uses." },
    { q: "Does a variable-rate mortgage have an IRD?", a: "Generally not. The penalty on a variable-rate mortgage is usually three months of interest. That is a key reason the penalty on a variable is typically smaller, though the other terms of the contract, including any fees, still deserve a read." },
    { q: "Can I find out my penalty before I decide to break?", a: "Yes. Ask your lender for a written payout statement showing the penalty for a specific date. A calculator gives an estimate, but your lender's figure governs, and it can differ from the estimate because of the comparison rate the lender chooses to use." },
    { q: "How can I avoid a large IRD penalty?", a: "Choose a lender with a fair penalty method before you sign, pick a term that matches your plans, and consider options such as blend and extend or waiting for maturity when leaving early would cost more than it saves. Compare the whole mortgage, not only its rate." }
  ]
};
