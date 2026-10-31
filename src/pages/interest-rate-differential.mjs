import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>IRD in plain language</h2>
<p>The interest rate differential, usually shortened to IRD, is the part of a fixed-rate prepayment penalty that depends on interest rates. It answers a lender's question: if I let this borrower leave now, how much interest income do I lose compared with what I would earn by lending the money out again today? When market rates are lower than your contract rate, the lender would earn less on the money it gets back, and the IRD charges you for the difference over the time left in your term. When market rates are higher, the differential is zero, and the penalty falls back to its minimum.</p>
<p>The penalty on a fixed-rate mortgage is generally the greater of two amounts: three months of interest, and the IRD. The penalty on a variable-rate mortgage is generally just three months of interest. That asymmetry is one reason the choice between fixed and variable involves more than the rate, and it is covered on the page about <a href="/fixed-vs-variable-mortgage/">fixed versus variable mortgages</a>.</p>
<p>The IRD is also the main reason that the cost of breaking a fixed mortgage is difficult to know in advance. The inputs are your rate, your balance, the months remaining and a comparison rate that the lender chooses, and different lenders choose it differently. You can test the arithmetic with your own figures in the <a href="/mortgage-calculators/#penalty">penalty calculator</a>.</p>

<h2>The two methods</h2>
<p>Lenders broadly use one of two approaches to find the comparison rate, and the choice can change the penalty by thousands of dollars.</p>
<p>The <strong>contract-rate method</strong> compares your contract rate with the rate the lender would charge today for a term equal to the time you have left. If you have three years remaining, the lender looks at its current three-year rate. The differential is the gap between the two rates.</p>
<p>The <strong>posted-rate method</strong> works differently. The lender takes the discount you originally received, which is the gap between the posted rate at the start of your term and the contract rate you were given. It then takes today's posted rate for the remaining term and subtracts that same original discount. The result is the comparison rate, and the differential is the gap between your contract rate and that comparison rate. Because the comparison rate is built from posted rates and not from the rates the lender actually charges today, the result can look very different from the contract-rate method.</p>

<h2>A worked example with generic figures</h2>
<p>The figures below are illustrative. They are not any lender's formula, and they show how the methods compare on the same mortgage. Suppose the balance is $400,000, the contract rate is 4.99 percent and there are 36 months left in the term. When you took the mortgage, the posted five-year rate was 6.99 percent, so your discount was 2.00 percentage points.</p>
<div class="table-wrap"><table>
<thead><tr><th>Method</th><th>How the comparison works</th><th>Penalty</th></tr></thead>
<tbody>
<tr><th scope="row">Three months of interest</th><td>$400,000 x 4.99% x 3/12</td><td>$4,990</td></tr>
<tr><th scope="row">Contract-rate IRD</th><td>Lender's current 3-year rate is 4.49%, a 0.50-point differential for 3 years</td><td>$6,000</td></tr>
<tr><th scope="row">Posted-rate IRD</th><td>Today's posted 3-year rate of 5.99% less your 2.00-point discount gives 3.99%, a 1.00-point differential for 3 years</td><td>$12,000</td></tr>
</tbody></table></div>
<p>On a fixed mortgage the penalty is the greater of three months of interest and the IRD, so this borrower would pay $6,000 at a lender using the contract-rate method and $12,000 at a lender using the posted-rate method. Same mortgage, same balance, same rate, twice the cost.</p>
<p>The gap can be wider. One Canadian mortgage broker's published teaching example from 2026 uses a $400,000 balance at 4.89 percent with three years left. It shows three months of interest at $4,890, a contract-rate IRD of $6,000 and a posted-rate IRD of $20,400. A penalty above $20,000 on a mortgage of that size is possible under the posted-rate method, which is why it deserves a question before you sign.</p>

<h2>Why some penalties run higher</h2>
<p>The posted-rate method tends to produce larger penalties because the comparison rate is built from posted rates. Posted rates are published list rates, and the discounts lenders give from them can be large. When the borrower's original discount is subtracted from a posted rate that has moved down only a little, the comparison rate can come out lower than the rates the lender is actually offering today. A lower comparison rate means a larger differential, and a larger penalty.</p>
<p>Some larger lenders use the posted-rate method, and many other lenders use the contract-rate method. The policy is a feature of the lender and the product, and it should appear in your mortgage contract or commitment letter. A lender with a modest, predictable penalty is not the same as a lender with an open-ended one, even when the advertised rates match.</p>

<h2>Three months of interest, compared</h2>
<p>Three months of interest is simple: your balance multiplied by your rate, divided by four. On a $400,000 balance at 5.00 percent it is $5,000. It is the whole penalty on a variable-rate mortgage and the floor under a fixed-rate one. It is also a good yardstick. If a fixed penalty is much larger than three months of interest, the IRD is doing the work, and the method the lender uses is the thing to look at. The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> page covers the penalty alongside the privileges that let you pay extra without triggering it.</p>

<h2>When breaking still wins</h2>
<p>A large penalty does not always mean you should stay. If your rate is much higher than what you can get today, the savings on a new mortgage can exceed the penalty over the rest of your term. The question is a break-even one: how many months of lower payments does it take to earn back the penalty, and are you likely to keep the new mortgage that long? The <a href="/refinance-break-even/">refinance break-even calculator</a> works through it, taking into account the penalty, the new rate and any fees.</p>
<p>There are also options between staying and breaking. A blend-and-extend can lower your rate without paying the penalty, in exchange for a longer commitment, and the page on <a href="/blend-and-extend-mortgage/">blend and extend mortgages</a> explains when that helps and when it is a trap. Which route wins depends on your figures, and Joshua Resvick can run them with you.</p>

${callout("A note on how the penalty is stated", "<p>An estimate from a calculator is a range, not a quote. Your lender's number governs, and it can differ from any online estimate because of the way it chooses the comparison rate. Ask for the penalty in writing, for your specific payout date, before you make any decision that depends on it.</p>")}

<h2>Questions to ask before you sign a fixed term</h2>
<ol>
<li>Does the lender use the contract-rate method or the posted-rate method?</li>
<li>If the contract-rate method, which of its rates is the comparison, and does it use a discounted rate or the posted rate?</li>
<li>What is the penalty on a $100,000 payout, to see the formula at work?</li>
<li>Is the penalty calculated on the full balance or only on the portion you prepay beyond your privileges?</li>
<li>Can the mortgage be ported to a new property, and what happens to the penalty if it is?</li>
<li>Is there a fee at discharge, or when moving the mortgage?</li>
</ol>
<p>Joshua compares lenders on these points as well as the rate, and shows them in writing in the <a href="/lender-comparison-report/">Lender Comparison Report</a>. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. For the wider picture of how rates and terms fit together, see <a href="/mortgage-rates-bc/">mortgage rates in BC</a>.</p>

${cta({ title: "Get a penalty estimate", text: "Bring your mortgage statement and Joshua will estimate your penalty, work out whether breaking pays and show you the alternatives.", href: "/contact/", label: "Contact Joshua" })}
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
