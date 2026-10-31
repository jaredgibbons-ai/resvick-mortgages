import { createRequire } from "node:module";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
const RM = createRequire(import.meta.url)("../assets/js/engine.js");

// Illustrative comparison: $500,000 balance, 25-year amortization, 5-year fixed. Rates are made up for the example.
const $0 = (x) => "$" + Math.round(x).toLocaleString("en-CA");
const $2 = (x) => "$" + x.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const lenders = [["Lender A", 4.4], ["Lender B", 4.55], ["Lender C", 4.65]].map(([n, r]) => ({ n, r, t: RM.termCost({ balance: 500000, ratePct: r, amortYears: 25, termYears: 5 }) }));
const spread = lenders[2].t.interest - lenders[0].t.interest;
const pen3 = RM.penalty({ balance: 400000, contractPct: 5, monthsRemaining: 24, type: "fixed" }).threeMonths;
const penIrd = RM.penalty({ balance: 400000, contractPct: 5, monthsRemaining: 24, type: "fixed", comparisonPct: 4 }).contractIrd;

const body = `
${short({
  answer: "Every client gets a written side-by-side of real lender options: rate, term, penalty method, prepayment privileges and portability. You see the trade-offs before you choose.",
  who: "Anyone buying, renewing or refinancing who wants more than one lender's quote.",
  next: "Book a 15-minute strategy call. That's where your report starts."
})}
<h2>Why one quote is not a market</h2>
<p>Ask one lender for a mortgage, and you get that lender's best offer on its own product. It may be a good offer. You can't tell, because there's nothing next to it.</p>
<p>A rate alone tells you very little about the mortgage you'll live with for five years. And the lender quoting it has no reason to mention what a competitor would do differently.</p>
<p>The Lender Comparison Report puts something next to the offer. On the first strategy call, Joshua Resvick commits to a written side-by-side of real lender options. It covers the rate, the term, the penalties, the prepayment privileges and the portability.</p>
<p>You see the options in one document, with the trade-offs explained, before you choose. The goal is that you decide with the full picture, not the first number you heard.</p>

<h2>What the report compares</h2>
<p>A comparison that stops at the rate is just a price list. Here's what Joshua puts in the report, and why each item matters.</p>
<ul>
<li><strong>Rate and term.</strong> The rate you'll pay, for how long, and whether it's fixed or variable. The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> explains how to think about the choice.</li>
<li><strong>The penalty, and how it's worked out.</strong> Breaking a fixed mortgage early can cost the greater of three months' interest or an interest rate differential (IRD). Lenders work out the IRD differently, and the gap can be large. This is often the biggest difference between lenders. Most people don't look at it until they need to leave.</li>
<li><strong>Prepayment privileges.</strong> How much extra you can pay each year, whether you can raise your regular payment, and any limits. These terms shape how fast you can shrink your balance. See <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> for the detail.</li>
<li><strong>Portability.</strong> Whether you can take the mortgage with you if you move, and on what terms.</li>
<li><strong>Collateral charge versus conventional charge.</strong> How the mortgage is registered on your title affects whether you can move it to another lender for free at renewal. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains the trade-off.</li>
<li><strong>Blend options.</strong> Whether the lender will blend your current rate with a new one if you need to change the mortgage mid-term.</li>
</ul>

<h2>A worked sample comparison</h2>
<p>This is illustrative. The three lenders are generic. The rates were picked just for the example, and the terms aren't real offers. The figures are for a $500,000 balance on a 25-year amortization, over a five-year fixed term, with monthly payments.</p>
<div class="table-wrap"><table>
<thead><tr><th>Illustrative</th><th class="num">Lender A</th><th class="num">Lender B</th><th class="num">Lender C</th></tr></thead>
<tbody>
<tr><th scope="row">Rate (5-year fixed)</th>${lenders.map((l) => `<td class="num">${l.r.toFixed(2)}%</td>`).join("")}</tr>
<tr><th scope="row">Monthly payment</th>${lenders.map((l) => `<td class="num">${$2(l.t.payment)}</td>`).join("")}</tr>
<tr><th scope="row">Interest over the term</th>${lenders.map((l) => `<td class="num">${$0(l.t.interest)}</td>`).join("")}</tr>
<tr><th scope="row">Balance after five years</th>${lenders.map((l) => `<td class="num">${$0(l.t.endBalance)}</td>`).join("")}</tr>
<tr><th scope="row">Penalty method</th><td class="num">Three months' interest</td><td class="num">Contract-rate IRD</td><td class="num">Posted-rate IRD</td></tr>
<tr><th scope="row">Prepayment privileges</th><td class="num">Illustrative: generous</td><td class="num">Illustrative: standard</td><td class="num">Illustrative: limited</td></tr>
<tr><th scope="row">Portable</th><td class="num">Illustrative: yes</td><td class="num">Illustrative: yes</td><td class="num">Illustrative: with conditions</td></tr>
</tbody></table></div>
<p>On rate alone, Lender A looks best. Over the term, it costs about ${$0(spread)} less in interest than Lender C. That's a real difference, and a good report shows it.</p>
<p>But the lower rows matter too. If you needed to leave early, the penalty method could decide the outcome. Take a $400,000 balance at 5.00% with two years left. Three months' interest is ${$0(pen3)}. An IRD against a 4.00% comparison rate is ${$0(penIrd)}. A posted-rate calculation can be bigger again.</p>
<p>If your plans are certain, you might pick the lowest rate. If they're not, you might prefer the gentler penalty, even at a slightly higher rate. The report doesn't tell you what to value. It makes the trade-off visible so you can decide.</p>
<p>You can build similar comparisons yourself with the <a href="/mortgage-calculators/#compare">scenario comparison tool</a>. The renewal calculator on the same page compares staying, switching and refinancing.</p>

${cta({ title: "Get your report", text: "The report starts with a 15-minute strategy call. Book a time, and Joshua will explain what he needs to build yours." })}

<h2>How lenders differ beyond rate</h2>
<p>An underwriter reads files the way a lender does. Joshua spent five years doing exactly that, at volume. That's part of why the report goes beyond the rate sheet.</p>
<p>Two lenders can quote the same rate and still approve different files. They differ in how they treat things like these:</p>
<ul>
<li><strong>Income.</strong> Lenders count overtime, bonuses, commissions, self-employed earnings and rental income in different ways. The gap can be big.</li>
<li><strong>Debts and credit.</strong> Some lenders are more forgiving of certain credit histories. Others are more relaxed about certain debt loads.</li>
<li><strong>Property types.</strong> Condos, homes with a secondary suite, acreages and new builds each suit some lenders better than others.</li>
<li><strong>Behaviour over time.</strong> How easily a lender allows prepayments, changes and renewals is part of the real cost. It never shows up in an advertised rate.</li>
</ul>
<p>The right lender for your file will approve it on workable terms and treat you well afterwards. Sometimes that isn't the lender with the lowest rate that day, and the report explains why.</p>

<h2>The process</h2>
<ol>
<li><strong>The strategy call.</strong> Fifteen minutes on your goals, your numbers and your timeline.</li>
<li><strong>The report.</strong> A written comparison of real lender options that fit you, side by side, with the trade-offs explained.</li>
<li><strong>Your decision.</strong> You choose, with your questions answered. Then Joshua manages the application to funding and stays involved through the <a href="/mortgage-aftercare-program/">aftercare program</a>.</li>
</ol>
<p>The report isn't only for purchases. It's just as useful at renewal. It can show you whether your current lender's offer is competitive. To see how rates are set and why a rate alone isn't enough, read the <a href="/mortgage-rates-bc/">guide to mortgage rates in BC</a>.</p>

${callout("What it costs", "<p>On a mortgage placed with an A lender, the lender pays the broker. You pay nothing for the service, including the report. Fees can come up on some B-lender and private-lender files. When they do, you see them in writing before you commit. The full explanation is on the page about <a href=\"/how-mortgage-brokers-get-paid/\">how mortgage brokers get paid</a>.</p>")}

<p>Ready to start? Or want to know what a report would look like for you? <a href="/contact/">Contact Joshua</a> and he'll take it from there.</p>

<h2>Who wrote this</h2>
<p>Joshua is a broker with Xeva Mortgage. That means he can place a mortgage with more than one lender. The report is where you actually see that advantage, instead of just reading about it on a website.</p>
`;

export default {
  slug: "/lender-comparison-report/",
  h1: "The Lender Comparison Report",
  lede: "A written, side-by-side look at real lender options before you decide: rate, term, penalties, prepayment and portability.",
  crumb: "Lender Comparison Report", nav: "/about-joshua-resvick/", body,
  faqs: [
    { q: "Does the Lender Comparison Report cost anything?", a: "No. On mortgages placed with an A lender, the lender pays the broker, so the client pays nothing for the service or the report. Fees apply only on some B-lender and private files, and are disclosed in writing before you commit." },
    { q: "How many lenders will be in my report?", a: "That depends on your file, because the report includes the lenders that realistically fit your situation, not a long list for its own sake. Joshua explains which options he included, and why others were left out, when he walks you through it." },
    { q: "How quickly will I get the report?", a: "Timing depends on how complete your information is and how your situation is structured. Joshua will tell you what he needs, and when you can expect it, on the strategy call. The report is built after that first conversation, once he understands your goals and numbers." },
    { q: "Can I use it if I am renewing, not buying?", a: "Yes. A comparison is especially valuable at renewal, when you can move to another lender without a prepayment penalty at maturity. It shows whether your current lender's offer is competitive, and what each alternative would mean for your payment and penalty exposure. See the <a href=\"/mortgage-renewal-bc/\">renewal guide</a>." }
  ]
};
