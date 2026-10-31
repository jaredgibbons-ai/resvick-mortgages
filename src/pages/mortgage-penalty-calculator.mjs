import { short } from "../lib/short.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "On a fixed mortgage, the penalty is usually the bigger of three months' interest or the interest rate differential (IRD). How your lender works out the IRD can triple the number. This tool gives you a range.", who: "Anyone thinking about selling, refinancing or leaving their lender before the term ends.", next: "Run the estimator below, then ask your lender for a written penalty quote with the method named." })}
<h2>Estimate your mortgage prepayment penalty</h2>
<p>A prepayment penalty is the fee a lender charges when you pay off a mortgage early, in full or in part. People run into it for ordinary reasons. They sell the home, refinance to a better rate, pay off debt, or leave a lender with a poor renewal offer. The amount can be small or large. You almost never see it until you ask.</p>
<p>This estimator gives you a range, not a single number. That's because the answer depends on a method your lender chooses. Enter what you know. Add the optional rates to see both versions of the interest rate differential.</p>
<div class="tools">${TOOLS.penalty()}</div>
<p>Everything on this page runs in your browser. Nothing you enter is sent anywhere, and you don't need an email address to see the result. The sections below explain where each figure comes from, so you can check the math yourself. Then they explain what to ask your lender to confirm it.</p>

<h2>The two numbers behind nearly every penalty</h2>
<p>On a fixed-rate mortgage, lenders usually charge the bigger of two amounts. One is three months' interest. The other is the interest rate differential, or IRD for short. On a variable-rate mortgage, the penalty is usually three months' interest. Your contract is what counts, so read it. Since fixed-rate penalties take the bigger of the two, the question is always which one is bigger on your mortgage, on the day you leave.</p>

<h2>Three months' interest</h2>
<p>This one is simple. Multiply your balance by your contract rate, then by three twelfths. A balance of $400,000 at 4.89 percent gives $400,000 x 0.0489 x 0.25, or $4,890. It doesn't depend on how much time is left in your term. It depends only on the balance and the rate. It's the minimum for a fixed-rate penalty. For most variable mortgages, it's the whole penalty.</p>
<p>The figure grows with the balance and with the rate. Someone with a higher rate pays more to leave than someone with a low one, all else equal. That's the opposite of what many people expect.</p>

<h2>The interest rate differential</h2>
<p>The IRD is the lender's estimate of the interest it loses because you're leaving early. The lender compares your rate with a rate it could charge today for the time left in your term. It charges you the difference on your balance for that time. If rates have dropped since you signed, the lender would have to re-lend your money for less. So it charges you the gap. If rates have risen, there's no gap. The IRD is zero, and the penalty falls back to three months' interest.</p>
<p>The simplest form of the calculation is: balance x rate difference x months remaining / 12.</p>
<h3>Two ways of choosing the comparison rate</h3>
<p>This is where mortgages differ most. Lenders use one of two methods. Your contract says which one.</p>
<ul>
<li><strong>Contract-rate IRD.</strong> The comparison rate is what the lender would charge today for a term matching your time left. It's discounted the way a new customer's rate would be. Your rate minus that rate is the differential.</li>
<li><strong>Posted-rate IRD.</strong> The lender takes the gap between its original posted rate and its current posted rate for your time left. In effect, it takes your original discount off today's comparison rate. Posted rates are higher than the discounted rates people actually get. The original discount is also carried forward. So this method often produces the bigger penalty.</li>
</ul>
<p>The estimator's two optional boxes match these methods. Enter a comparison rate for the contract-rate version. Or enter the original and current posted rates for the posted-rate version. Then read the range between them.</p>

<h2>A worked example you can reproduce</h2>
<p>These figures are only an example, not quotes. The rates were chosen for the example. Type them into the estimator and you'll see the same results. The mortgage is $400,000 at a contract rate of 4.89 percent, with 36 months left in a fixed term.</p>
<div class="table-wrap"><table><thead><tr><th>Method</th><th>Inputs</th><th class="num">Result</th></tr></thead><tbody>
<tr><td>Three months' interest</td><td>$400,000 x 4.89% x 3/12.</td><td class="num">$4,890</td></tr>
<tr><td>Contract-rate IRD</td><td>Comparison rate 4.39%. Then 0.50% x $400,000 x 36/12.</td><td class="num">$6,000</td></tr>
<tr><td>Posted-rate IRD</td><td>Original posted 6.59%, current posted 4.89%. Then 1.70% x $400,000 x 36/12.</td><td class="num">$20,400</td></tr>
</tbody></table></div>
<p>Under the contract-rate method, the penalty is the bigger of $4,890 and $6,000. So it's $6,000. Under the posted-rate method, it's $20,400. Same balance, same rate, same time left, and a penalty more than three times bigger. That's why you should read the penalty clause before you sign a fixed mortgage, not only when you want out.</p>
<p>Now change one thing. Say rates had risen instead, so the comparison rate is above your contract rate. Both IRD figures would be zero. The penalty would be the $4,890 minimum. For a variable-rate mortgage of $400,000 at 6.20 percent, three months' interest is $6,200. There's no differential at all.</p>

<h2>What the estimator cannot know</h2>
<p>It uses the formulas above with the numbers you give it. It can't see your contract, and real contracts add details. Some lenders round the time left in the term. Some use a different comparison rate for terms they don't offer right now. Some charge an admin or discharge fee on top. Some include a minimum penalty amount. The figure on your lender's payout statement is the one that counts. So the useful step is to ask for it in writing.</p>
<p>Questions to put to your lender:</p>
<ul>
<li>Is my penalty calculated by the contract-rate method or the posted-rate method?</li>
<li>What comparison rate would you use today, and what is the term you are matching?</li>
<li>Does the quote include discharge, administration or legal fees?</li>
<li>How long is the quote valid, and does the figure change on my payment date?</li>
<li>Could I port this mortgage or blend it instead of paying the penalty?</li>
</ul>

<h2>Ways to avoid or reduce a penalty</h2>
<p>A penalty is not always the price of leaving. Several options are worth checking first.</p>
<ul>
<li><strong>Wait for maturity.</strong> At the end of the term there is no penalty, and you are free to compare lenders. If your date is close, the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains how to use that window.</li>
<li><strong>Use your prepayment privileges.</strong> Most closed mortgages allow lump sums and higher payments up to a limit each year with no penalty. The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> page explains how those limits work.</li>
<li><strong>Port the mortgage.</strong> If you are moving, a portable mortgage may move with you. See <a href="/porting-your-mortgage/">porting your mortgage</a>.</li>
<li><strong>Blend and extend.</strong> Some lenders will blend your current rate with today's rate and extend the term, instead of charging a penalty. The <a href="/blend-and-extend-mortgage/">blend and extend</a> page covers when it helps.</li>
<li><strong>Renew early on purpose.</strong> Sometimes an early renewal with the same lender avoids a penalty. Sometimes it just resets the problem. The <a href="/early-mortgage-renewal/">early renewal guide</a> compares the cases.</li>
</ul>

<h2>When paying the penalty is still the right call</h2>
<p>A big penalty doesn't always mean you should stay. If the new rate is far enough below your current one, the savings can beat the penalty within a few years. If you have to sell, the penalty is part of the cost of the sale. The <a href="/mortgage-calculators/#sale-proceeds">sale proceeds calculator</a> shows what you keep after it.</p>
<p>For refinancing decisions, the penalty is one half of a calculation. The other half is the monthly saving it buys. The <a href="/refinance-break-even/">refinance break-even calculator</a> puts the two side by side. It shows the month when you come out ahead. The <a href="/interest-rate-differential/">interest rate differential</a> page goes deeper on the IRD itself. Fixed versus variable matters here too, because a variable rate usually costs less to leave. That trade-off is covered in <a href="/fixed-vs-variable-mortgage/">fixed vs variable</a>.</p>

${callout("Get the number in writing", "<p>Estimates are for planning. Before you sign a listing agreement, a new mortgage commitment or a payout request, ask your lender for a written penalty quote with the method named. If you would like a second opinion on whether the penalty is worth paying, <a href=\"/contact/\">contact Joshua</a> and bring the quote.</p>")}

${cta({ title: "Not sure the penalty is worth paying?", text: "Book a 15-minute call. Bring your lender's quote, and Joshua will run the break-even and tell you which way the numbers point." })}

<p>The full set of tools, including the payment, affordability and renewal calculators, is on the <a href="/mortgage-calculators/">mortgage calculators</a> page. If your mortgage is due for renewal, the <a href="/refinance-mortgage-bc/">refinancing hub</a> explains how a refinance differs from a switch.</p>
`;

export default {
  slug: "/mortgage-penalty-calculator/",
  h1: "Mortgage penalty calculator for BC borrowers",
  lede: "Estimate what it would cost to leave your mortgage early: three months' interest against both versions of the interest rate differential, as a range.",
  crumbs: [["Home", "/"], ["Calculators", "/mortgage-calculators/"], ["Mortgage penalty calculator", "/mortgage-penalty-calculator/"]],
  nav: "/mortgage-calculators/", calc: true, body,
  faqs: [
    { q: "How is a mortgage prepayment penalty calculated?", a: "A fixed-rate lender generally charges the greater of three months' interest and the interest rate differential. Three months' interest is your balance times your rate times three twelfths. The differential is the rate gap times your balance times the months remaining. Variable penalties are usually three months' interest." },
    { q: "Why do two lenders charge such different penalties on the same mortgage?", a: "They use different methods. A contract-rate calculation compares your rate to a discounted current rate. A posted-rate calculation compares posted rates and carries your original discount forward, which often produces a much larger figure. Your contract states the method, so read it before signing, not when you want out." },
    { q: "Is the penalty ever zero?", a: "Yes, in a few cases. There is no penalty at maturity, and most closed mortgages allow lump sums and extra payments up to a yearly limit without one. Porting to a new home or blending and extending may also avoid it. Open mortgages carry no penalty but come with higher rates." },
    { q: "Can I add the penalty to my new mortgage?", a: "Often yes when you refinance, because the new lender can include the payout in the new balance. That avoids paying cash now, but it means you borrow and pay interest on the penalty. The break-even calculator can model both ways, cash and rolled in, so you can compare them." },
    { q: "How accurate is this estimate?", a: "It applies the standard formulas to the numbers you enter, so it is as accurate as those numbers and as your lender's method matches ours. Treat it as a planning range. Your lender's written payout statement is the only figure that counts, and it can include fees the estimate leaves out." }
  ]
};
