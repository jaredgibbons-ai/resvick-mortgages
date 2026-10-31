import { createRequire } from "node:module";
import { cta, callout } from "../lib/site.mjs";
const RM = createRequire(import.meta.url)("../assets/js/engine.js");

// Illustrative comparison: $500,000 balance, 25-year amortization, 5-year fixed. Rates are made up for the example.
const $0 = (x) => "$" + Math.round(x).toLocaleString("en-CA");
const $2 = (x) => "$" + x.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const lenders = [["Lender A", 4.4], ["Lender B", 4.55], ["Lender C", 4.65]].map(([n, r]) => ({ n, r, t: RM.termCost({ balance: 500000, ratePct: r, amortYears: 25, termYears: 5 }) }));
const spread = lenders[2].t.interest - lenders[0].t.interest;
const pen3 = RM.penalty({ balance: 400000, contractPct: 5, monthsRemaining: 24, type: "fixed" }).threeMonths;
const penIrd = RM.penalty({ balance: 400000, contractPct: 5, monthsRemaining: 24, type: "fixed", comparisonPct: 4 }).contractIrd;

const body = `
<h2>Why one quote is not a market</h2>
<p>When you ask a single lender for a mortgage, you receive that lender's best offer for that lender's product. It may be a good offer. You have no way of knowing, because there is nothing next to it. A rate on its own tells you very little about the mortgage you are agreeing to live with for five years, and the lender who quotes it has no reason to point out what a competitor would do differently.</p>
<p>The Lender Comparison Report exists to put something next to the offer. On the initial strategy call, Joshua Resvick commits to presenting a written side-by-side of real lender options: the rate, the term, the penalties, the prepayment privileges and the portability. You see the options in one document, with the trade-offs explained, before you choose. The aim is that you decide with the full picture, not with the first number you were given.</p>
<p>Joshua is a broker with Xeva Mortgage and a member of the VERICO network, which means he can place a mortgage with more than one lender. The report is where that advantage becomes visible to you, rather than staying a claim on a website.</p>

<h2>What the report compares</h2>
<p>A comparison that stops at the rate is a price list. These are the items Joshua puts in the report, and why each one matters.</p>
<ul>
<li><strong>Rate and term.</strong> The rate you will pay, for how long, and whether it is fixed or variable. The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> explains how to think about the choice.</li>
<li><strong>The penalty, and how it is calculated.</strong> Breaking a fixed-rate mortgage early can cost the greater of three months' interest or an interest rate differential (IRD). Lenders calculate the IRD differently, and the difference can be very large. This is often the clearest gap between lenders and the one most borrowers do not look at until they need to leave.</li>
<li><strong>Prepayment privileges.</strong> How much extra you can pay each year, whether you can raise your regular payment, and whether any of that is limited. These terms shape how quickly you can reduce your balance. See <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> for the detail.</li>
<li><strong>Portability.</strong> Whether you can take the mortgage with you if you move, and on what conditions.</li>
<li><strong>Collateral charge versus conventional charge.</strong> How the mortgage is registered on your title affects whether it can be transferred to another lender without cost at renewal. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains the trade-off.</li>
<li><strong>Blend options.</strong> Whether the lender will blend an existing rate with a new one if you need to change the mortgage mid-term.</li>
</ul>

<h2>A worked sample comparison</h2>
<p>The following is illustrative. The three lenders are generic, the rates were chosen only for the sake of the example, and the terms below are not real offers. The figures are for a $500,000 balance on a 25-year amortization over a five-year fixed term, with monthly payments.</p>
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
<p>On the rate alone, Lender A looks best, and over the term it costs about ${$0(spread)} less in interest than Lender C. That is a real difference, and a good report shows it. But the lower rows matter too. In this illustration, if you needed to leave the mortgage early, the penalty method could decide the outcome. For example, on a $400,000 balance at 5.00% with two years left, three months' interest is ${$0(pen3)}, while an interest rate differential against a 4.00% comparison rate is ${$0(penIrd)}, and a posted-rate calculation can be larger again. If your plans are certain, you may choose the lowest rate. If they are not, you may prefer the lender with the gentler penalty method, even at a slightly higher rate. The report does not tell you what to value. It makes the trade-off visible so that you can.</p>
<p>You can build similar side-by-side comparisons yourself with the <a href="/mortgage-calculators/#compare">scenario comparison tool</a> as it becomes available, and the renewal calculator on the calculators page already compares staying, switching and refinancing.</p>

${cta({ title: "Get your report", text: "The report starts with a 15-minute strategy call. Book a time, and Joshua will explain what he needs to build yours." })}

<h2>How lenders differ beyond rate</h2>
<p>An underwriter reads files the way a lender does, and Joshua's background includes underwriting at volume. That experience is part of why the report goes beyond the rate sheet. Two lenders can quote the same rate and still approve very different applications, because they differ in how they treat things like:</p>
<ul>
<li><strong>Income.</strong> How a lender counts overtime, bonuses, commissions, self-employed earnings and rental income can differ materially from one lender to the next.</li>
<li><strong>Debts and credit.</strong> Some lenders are more forgiving of certain credit histories and others of certain debt loads.</li>
<li><strong>Property types.</strong> Condos, properties with a secondary suite, acreages and new builds each fit some lenders better than others.</li>
<li><strong>Behaviour over time.</strong> How easily a lender allows prepayments, changes and renewals is part of the real cost of the mortgage, even though it never appears in an advertised rate.</li>
</ul>
<p>The right lender for your file is the one that will approve it on workable terms and treat you well afterwards. Sometimes that is not the lender with the lowest rate on a given day, and the report explains why.</p>

<h2>The process</h2>
<ol>
<li><strong>The strategy call.</strong> Fifteen minutes on your goals, your numbers and your timeline.</li>
<li><strong>The report.</strong> You receive a written comparison of real lender options that fit your situation, with the terms side by side and the trade-offs explained.</li>
<li><strong>Your decision.</strong> You choose, with questions answered. From there, Joshua manages the application to funding and stays involved through the <a href="/mortgage-aftercare-program/">aftercare program</a>.</li>
</ol>
<p>The report is not tied to a purchase. It is as useful at renewal as at a first purchase, and it can show you whether the offer from your current lender is competitive. To see how current rates are set and why a rate alone is not enough, read the <a href="/mortgage-rates-bc/">guide to mortgage rates in BC</a>.</p>

${callout("What it costs", "<p>On a mortgage placed with an A lender, the lender pays the broker, and you pay nothing for the service, including the report. Fees can arise on certain B-lender and private-lender files, and when they do, they are disclosed to you in writing before you commit. The full explanation is on the page about <a href=\"/how-mortgage-brokers-get-paid/\">how mortgage brokers get paid</a>.</p>")}

<p>If you are ready to start, or want to ask what a report would look like for your situation, <a href="/contact/">contact Joshua</a> and he will take it from there.</p>
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
