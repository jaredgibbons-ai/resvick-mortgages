import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Most BC homeowners can borrow up to 80% of their home's value in total, minus what they still owe. A line of credit alone is capped at 65%.", who: "Homeowners thinking about a renovation, paying off debt or buying a rental with their equity.", next: 'Enter your value and balance in the estimator below. Nothing is looked up or sent.' })}
<h2>Estimate the equity you could borrow against</h2>
<p>Home equity is the part of your home you own outright: its value, less what you still owe against it. It grows as you pay down principal and as your home's value changes. It's the source of money for many big decisions. Think of a renovation, paying off high-interest debt, a down payment on a rental, or a cushion if your income changes. Before you speak to any lender, it helps to know roughly how much of it is usable, and that is not the same as how much of it exists.</p>
<p>Enter your own estimate of the home's value and what you owe. The estimator shows your equity, the room a regulated lender would allow you to borrow, and what happens to that room if the appraisal comes in lower than you hoped.</p>
<div class="tools">${TOOLS.equity()}</div>
<p>This tool does not check your credit, does not look up your property and does not send your figures anywhere. It works only from the numbers you type, which means it is a planning aid, and a real borrowing decision will involve more. The sections below explain how to read the result and what lenders add on top.</p>

<h2>Equity and usable equity are different numbers</h2>
<p>If your home is worth $900,000 and you owe $400,000, your equity is $500,000. You cannot borrow all of it. Federally regulated lenders, which include the banks, are limited to lending up to 80 percent of a home's value when you refinance. Eighty percent of $900,000 is $720,000. You already owe $400,000, so the most you could add is $320,000. The remaining 20 percent of the value stays in the home as a buffer, by design.</p>
<div class="table-wrap"><table><thead><tr><th>Home value</th><th>You owe</th><th>Equity</th><th>Room up to 80%</th></tr></thead><tbody>
<tr><td>$900,000</td><td>$400,000</td><td>$500,000</td><td>$320,000</td></tr>
<tr><td>$750,000</td><td>$300,000</td><td>$450,000</td><td>$300,000</td></tr>
<tr><td>$1,000,000</td><td>$780,000</td><td>$220,000</td><td>$20,000</td></tr>
<tr><td>$1,000,000</td><td>$850,000</td><td>$150,000</td><td>$0</td></tr>
</tbody></table></div>
<p>The third and fourth rows show how fast usable room disappears for a recent buyer with a small down payment. A homeowner with $220,000 in equity may have only $20,000 to borrow, and one who is already above 80 percent has none.</p>

<h2>Three ways to use the equity, and their limits</h2>
<p>The money can come through different products. They share the 80 percent ceiling and differ in everything else.</p>
<ul>
<li><strong>A cash-out refinance</strong> replaces your mortgage with a larger one. Your rate and terms reset, and breaking an existing mortgage may trigger a penalty. The <a href="/cash-out-refinance-bc/">cash-out refinance guide</a> explains the steps and the costs.</li>
<li><strong>A home equity line of credit</strong> is a revolving line you borrow from as needed. On its own it is limited to 65 percent of the home's value, within the 80 percent combined with your mortgage, and it is usually interest-only. See the <a href="/heloc-bc/">HELOC guide</a> for how it works.</li>
<li><strong>A second mortgage</strong> sits behind your first mortgage and is usually offered by lenders other than the major banks, often at a higher rate. It leaves your first mortgage untouched. The <a href="/second-mortgage-bc/">second mortgage page</a> covers when it is the better tool.</li>
</ul>
<p>The calculator's "line of credit alone" figure shows the HELOC limit under the 65 percent rule, and the 80 percent figure shows the refinance ceiling. If a line of credit is already attached to your home, enter its balance as an "other debt secured on the home" so the room is not overstated. A mortgage that combines a term mortgage with a line, described on the <a href="/readvanceable-mortgage/">readvanceable mortgage</a> page, follows the same two limits.</p>

<h2>Why the value you type might not be the value a lender uses</h2>
<p>Lenders lend against the appraised value, not the price you hope for. An appraiser compares recent sales of similar homes nearby, adjusts for condition and features, and sets a figure. If the number is lower than your estimate, your usable equity shrinks quickly, because the 80 percent applies to the lower value.</p>
<p>The estimator shows this on purpose. For the $900,000 home above, a value 5 percent lower leaves $284,000 of room instead of $320,000. At 10 percent lower it is $248,000. A homeowner who counted on the larger amount would find a gap of more than $70,000 between the plan and the approval. If the borrowing is part of a larger plan, run the lower scenarios too.</p>

<h2>What "no credit check" means here, and what it does not</h2>
<p>The estimator does not pull your credit report and does not ask for your name. That is the extent of the claim. A real application is different. A lender checks your credit, confirms your income, appraises the property and reviews how you intend to use the money. Your credit history and the ratio of your debts to your income can limit what you are approved for, even when the equity is there. Being approved for the ceiling is not automatic.</p>
<p>If your income or credit would stop a bank, other lenders exist, and Joshua can explain them. The <a href="/mortgage-calculators/">mortgage calculators</a> page has other tools that help you prepare for those conversations, including the <a href="/mortgage-calculators/#readvanceable">readvanceable mortgage calculator</a> and the <a href="/mortgage-calculators/#consolidation">debt consolidation calculator</a>.</p>

<h2>Costs that reduce the number</h2>
<p>Borrowing against a home is not free. The estimator lets you subtract the main costs so you see what lands in your account.</p>
<ul>
<li>The <strong>penalty</strong> for breaking your current mortgage, if you refinance before maturity. The <a href="/mortgage-penalty-calculator/">penalty estimator</a> gives a planning range.</li>
<li><strong>Legal fees and an appraisal</strong>, which new lenders sometimes cover on larger refinances and sometimes do not.</li>
<li>The <strong>higher payment</strong>. Enter the amount you want and a rate, and the estimator shows how much a month the new money adds over the amortization you chose.</li>
</ul>
<p>Whether borrowing is worth it depends on what you do with it. Paying off a high-interest debt can pay for itself, as the <a href="/refinance-to-pay-off-debt/">refinance to pay off debt</a> page explains. Using equity for an investment brings tax questions, since the deductibility of interest depends on how the borrowed money is used, so check with an accountant before you act. The <a href="/refinance-mortgage-bc/">refinancing hub</a> lays out every reason to refinance side by side.</p>

<h2>Want a person to check the numbers?</h2>
<p>The result above stays in your browser. If you would like Joshua to look at it with you, the form below sends him a message. The box that adds your figures to the message is unticked by default, so nothing travels unless you choose it.</p>
<div class="form-card">
<p class="small"><strong>Please do not send financial documents through this form.</strong> It does not accept attachments. When documents are needed, Joshua will send a secure upload link.</p>
<form data-lead="equity-estimator" data-stay novalidate>
<input type="hidden" name="intent" value="refinance">
<input type="hidden" name="tool_inputs" value="">
<div class="row2">
<div class="fld"><label for="e-name">Your name</label><input id="e-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="e-email">Email</label><input id="e-email" name="email" type="email" autocomplete="email" required></div>
</div>
<div class="row2">
<div class="fld"><label for="e-phone">Phone (optional)</label><input id="e-phone" name="phone" type="tel" autocomplete="tel"></div>
<div class="fld"><label for="e-timeline">When would you need the funds? (optional)</label><input id="e-timeline" name="timeline" type="text" placeholder="For example, spring 2027"></div>
</div>
<div class="fld"><label for="e-msg">What are you planning to use the equity for?</label><textarea id="e-msg" name="message"></textarea></div>
<div class="hp" aria-hidden="true"><label for="e-web">Leave this field empty</label><input id="e-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="include_estimate"><span>Include the figures I entered in the estimator (home value, mortgage balance and the result) with my message. Optional.</span></label>
<p class="small">By sending this message you agree that Joshua may contact you to reply to it. See the <a href="/privacy/">privacy policy</a>.</p>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. This is optional, and you can unsubscribe at any time.</span></label>
<div><button class="btn" type="submit">Send message</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
</form>
</div>

${callout("An estimate is not an offer", "<p>The amounts above are ceilings, not approvals. A lender may approve less, and different lenders follow different rules. For a view of the real options on your file, <a href=\"/contact/\">contact Joshua</a> or <a href=\"/how-mortgage-brokers-get-paid/\">read how brokers get paid</a> first. That way you know what a conversation costs. On mainstream lender files, it's nothing.</p>")}

${cta({ title: "Thinking about using your equity?", text: "Book a 15-minute call. Joshua will walk through the realistic routes for your situation, the costs of each and whether waiting for renewal would save you money." })}
`;

export default {
  slug: "/home-equity-estimator/",
  h1: "Home equity estimator for BC homeowners",
  lede: "See your equity and how much a regulated lender could allow you to borrow against it, from the figures you type. Nothing is looked up or sent.",
  crumbs: [["Home", "/"], ["Calculators", "/mortgage-calculators/"], ["Home equity estimator", "/home-equity-estimator/"]],
  nav: "/mortgage-calculators/", calc: true, forms: true, body,
  faqs: [
    { q: "How much equity can I actually borrow?", a: "For a refinance with a federally regulated lender the limit is 80 percent of the home's appraised value, less what you already owe. A line of credit on its own is limited to 65 percent of value. Other lenders follow different rules, and any lender may approve less after reviewing your income and credit." },
    { q: "Does this estimator check my credit?", a: "No. It uses only the numbers you type, it does not look up your property and it does not send anything anywhere. A real application is different: a lender will check your credit, verify your income and appraise the home before approving any amount, so the estimate is a ceiling and not an approval." },
    { q: "Why is my usable equity so much lower than my total equity?", a: "Regulated lenders keep 20 percent of the home's value untouched, so usable equity is 80 percent of value less your debts. If you bought recently with a small down payment, most of your equity may sit inside that buffer. The estimator also shows how the figure falls if the appraisal comes in lower." },
    { q: "Is borrowing against my home cheaper than a personal loan or credit card?", a: "Usually the rate is lower because the home secures the loan, but the risk is larger too, since the lender can enforce against the property if you cannot pay. Costs such as a penalty on your current mortgage, legal fees and a longer repayment period also matter. Compare total cost, not only the rate." },
    { q: "Can a mortgage broker access equity when my bank says no?", a: "Often there are other routes, such as a second mortgage or a different lender whose rules fit your income. They can come with higher rates or fees, which must be disclosed in writing before you commit. Joshua explains the trade-offs honestly, including when waiting or doing nothing is the better choice." }
  ]
};
