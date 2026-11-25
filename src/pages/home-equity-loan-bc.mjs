import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Added Nov 24, 2026 from the Keyword Planner sheet: "home equity loan" (100-1K a month in BC, bids up to $77.61).
// Figures are the site's own (80% refinance cap, 65% revolving cap, 55% reverse mortgage ceiling), each sourced on its own page.
const body = `
${short({
  answer: "In BC there are four main ways to borrow against your home: a refinance, a home equity line of credit (HELOC), a second mortgage and, if you're 55 or older, a reverse mortgage. Which one is cheapest depends on how much you need, for how long, and what your current mortgage costs to change.",
  who: "You own a home in BC and want to use some of its value, for a renovation, to pay off debt, to help family or to buy another property.",
  next: "Run the equity estimator below to see roughly how much room you have, then read the comparison table."
})}

<h2>What a home equity loan is</h2>
<p>Your equity is what your home is worth, less what you owe on it. A home equity loan is any loan that uses that equity as security. In the US the phrase usually means one fixed lump-sum loan. In Canada it's a catch-all. People use it for four different products, and they work very differently.</p>
<p>That matters because the cheapest option for one person can be the most expensive for another. A refinance can have the lowest rate and still cost more in total, once you count the penalty for breaking your current mortgage. A second mortgage costs more per year but can be cheaper for a short need. The right answer comes from your numbers, not the product name.</p>

<h2>The four options at a glance</h2>
<div class="table-wrap"><table>
<thead><tr><th>Option</th><th>How you get the money</th><th>How much you can usually borrow</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><a href="/refinance-mortgage-bc/">Refinance</a></td><td>A new, bigger first mortgage. You get the difference as a lump sum.</td><td>Up to 80% of the home's value, in total</td><td>Large, long-term needs, especially at renewal when there's no penalty</td></tr>
<tr><td><a href="/heloc-bc/">HELOC</a></td><td>A line of credit you draw on, repay and draw on again</td><td>The line itself up to 65% of value; line and mortgage together up to 80%</td><td>Costs that come in stages, like a renovation, or an emergency fund</td></tr>
<tr><td><a href="/second-mortgage-bc/">Second mortgage</a></td><td>A separate loan behind your first mortgage, as a lump sum</td><td>Depends on the lender, usually a private or B lender</td><td>Short-term needs when breaking the first mortgage would cost too much</td></tr>
<tr><td><a href="/reverse-mortgage-bc/">Reverse mortgage</a></td><td>A lump sum or draws, with no regular payments</td><td>Usually up to 55% of value, for owners 55 and older</td><td>Retirees who want to stay in the home without a monthly payment</td></tr>
</tbody></table></div>
<p>The 80% and 65% limits are the rules federally regulated lenders follow. Credit unions and private lenders set their own, and some go further at a higher cost.</p>

<h2>Option 1: refinance your mortgage</h2>
<p>A refinance replaces your current mortgage with a new, larger one. You get the difference in cash. Because it's a first mortgage, it usually has the lowest rate of the four.</p>
<p>The catch is timing. If you're partway through a fixed term, breaking it can trigger a penalty. On a fixed rate that's often the larger of three months' interest or the interest rate differential, and it can run into the thousands. The <a href="/mortgage-penalty-calculator/">mortgage penalty calculator</a> gives you a range, and the guide to <a href="/is-it-worth-refinancing/">whether refinancing is worth it</a> shows how to weigh the penalty against the savings.</p>
<p>At renewal, there's no penalty to leave, which makes it the natural time to refinance. You'll still need to qualify at the stress-test rate, and the lender will want an appraisal. If you mainly want cash out, the <a href="/cash-out-refinance-bc/">cash-out refinance guide</a> covers how lenders size it.</p>

<h2>Option 2: a home equity line of credit</h2>
<p>A HELOC is a revolving line, much like a credit card secured by your home. You only pay interest on what you use. You can repay and borrow again without a new application. The rate is usually variable and tied to prime.</p>
<p>That flexibility is why it suits projects with costs that come in stages, or as a safety net. The risk is the same flexibility. Many lines only need interest payments, so the balance can sit there for years. If rates rise, your payment rises too. Treat it as a tool with a plan to pay it down, not as extra income.</p>
<p>Some lenders package a HELOC with your mortgage, so the line grows as you pay the mortgage down. The <a href="/heloc-bc/">HELOC guide</a> explains those combined plans and how the 65% and 80% limits interact.</p>

<h2>Option 3: a second mortgage</h2>
<p>A second mortgage sits behind your first one. You keep your current mortgage and its rate, and add a separate loan. It usually comes from a private lender or a B lender, so the rate and fees are higher. How long it runs depends on the lender. Private seconds are usually short term, often a year or two. Some others can run longer.</p>
<p>It can still be the cheapest choice. Say you need money for 18 months and your first mortgage has a large penalty. Paying a higher rate on a smaller loan for a short time can cost less than breaking the first mortgage. Many second mortgages are rolled into the first at its renewal, when there's no penalty. The <a href="/second-mortgage-bc/">second mortgage guide</a> covers the costs, and any fee on these files is disclosed in writing before you commit.</p>

<h2>Option 4: a reverse mortgage</h2>
<p>A reverse mortgage is for homeowners 55 and older. You make no regular payments. Interest is added to the balance, and the loan is repaid when you sell, move out, or the last owner passes away. Lenders usually lend up to 55% of the home's value, and the real figure depends on the ages of everyone on title, the home and its location.</p>
<p>It keeps you in the home without a monthly payment, which is the whole point. The trade-off is that the balance grows every year, so there's less equity left for you or your estate. The <a href="/reverse-mortgage-calculator-bc/">reverse mortgage calculator</a> shows how fast that happens, and the <a href="/reverse-mortgage-bc/">reverse mortgage guide</a> covers the costs and alternatives.</p>

<h2>How to choose</h2>
<p>Four questions settle most files:</p>
<ul>
<li><strong>How much do you need?</strong> A small amount rarely justifies breaking a mortgage. A large amount usually points to a refinance.</li>
<li><strong>For how long?</strong> A short need favours a line or a second mortgage. A long one favours a refinance.</li>
<li><strong>What does your current mortgage cost to change?</strong> Get the penalty in writing first. It often decides the answer.</li>
<li><strong>Can you make a payment?</strong> If a monthly payment is the problem, and you're 55 or older, a reverse mortgage may be the only fit.</li>
</ul>
<p>Compare the total cost over the time you'll actually carry the money, not just the rate. A lower rate over 25 years can cost far more than a higher rate over two.</p>

${callout("What it costs to arrange", "<p>On a refinance or HELOC with a mainstream (A) lender, the lender pays the broker, so you pay nothing for the advice. Second mortgages and some reverse mortgages carry lender fees, and some files carry a broker fee. Any fee is shown to you in writing before you sign. See <a href='/how-mortgage-brokers-get-paid/'>how mortgage brokers get paid</a>.</p>")}

<h2>What lenders check</h2>
<p>Every option except a reverse mortgage needs you to qualify. The lender looks at your income, your credit, your other debts and the home's value. For a refinance or HELOC with a federally regulated lender, you also need to pass the stress test. A reverse mortgage looks mostly at your age, the home and where it is.</p>
<p>An appraisal is almost always part of it. If your estimate of the value is high, the amount you can borrow drops with it. The equity estimator below shows what happens if the appraisal comes in 5% or 10% lower.</p>

${cta({ title: "Not sure which one fits?", text: "Book a 15-minute call. Joshua will check your penalty, your equity and your numbers, and show you which option costs least in total." })}

<p class="small">Sources: limits for federally regulated lenders from the site's refinance and HELOC guides (OSFI Guideline B-20). Reverse mortgage limits from the Financial Consumer Agency of Canada, Reverse mortgages page, read November 2026.</p>
`;

export default {
  slug: "/home-equity-loan-bc/",
  h1: "Home equity loans in BC: four ways to borrow against your home, compared",
  lede: "A refinance, a HELOC, a second mortgage or a reverse mortgage. How much each lets you borrow, what it costs, and how to pick the cheapest one for your situation.",
  crumbs: [["Home", "/"], ["Refinance", "/refinance-mortgage-bc/"], ["Home equity loans", "/home-equity-loan-bc/"]],
  nav: "/refinance-mortgage-bc/",
  body,
  faqs: [
    { q: "What is a home equity loan in Canada?", a: "Any loan secured by the equity in your home. In BC that usually means a refinance, a home equity line of credit, a second mortgage or, for owners 55 and older, a reverse mortgage. Each works differently, so the cheapest one depends on your numbers." },
    { q: "How much equity can I borrow in BC?", a: "With a federally regulated lender, your total borrowing against the home is usually capped at 80% of its value, and a line of credit on its own at 65%. Private lenders set their own limits at a higher cost. A reverse mortgage usually goes up to 55%." },
    { q: "Is a HELOC or a refinance better?", a: "A refinance usually has a lower rate and suits a large, long-term need, best done at renewal to avoid a penalty. A HELOC suits money you need in stages and want to repay soon. Compare the total cost, including any penalty, over the time you'll carry it." },
    { q: "Can I get a home equity loan with bad credit?", a: "Often, yes, through a B lender or a private second mortgage, at a higher rate and with fees. These are usually short-term while you rebuild. A reverse mortgage depends mainly on age and the home, not credit, but it isn't for everyone." },
    { q: "Do I have to pay a penalty to borrow against my home?", a: "Only if you break your current mortgage early, which a refinance does unless it's at renewal. A HELOC or second mortgage leaves your first mortgage in place, so there's no penalty on it. Get the penalty figure in writing before you decide." }
  ]
};
