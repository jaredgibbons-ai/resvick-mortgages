import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "A 3-year fixed gives you a set payment for three years, then a fresh choice. You trade some rate certainty for flexibility and a smaller exit penalty.", who: "People with a plan on a date: a likely move, a refinance or a suite build in the next few years.", next: "Price it against the 5-year in the <a href=\"/mortgage-calculators/#compare\">scenario tool</a>, then <a href=\"/contact/\">ask Joshua</a> for real numbers." })}

<h2>The case for a shorter term</h2>
<p>A 3-year fixed is the quiet option in the rate table. It gets less advertising than the five-year term. Fewer people choose it. Yet it solves a real problem. Life tends to change faster than a five-year commitment assumes.</p>
<p>People move. They separate, start businesses, have kids, build suites and change jobs. A shorter term means the mortgage gets in the way of those changes for less time. It also brings your next decision point closer.</p>
<p>The trade is simple. A shorter term gives you more flexibility and more frequent renewals. In return, you take more risk on whatever rates are on the renewal date. Sometimes you also pay a slightly higher rate than the five-year term.</p>
<p>This page explains who the 3-year fixed suits and how to compare it fairly with the five-year. It also shows how the penalty works at different points in the term. This page prints no rate in its text. A 15-minute call gets you today's number for your own file.</p>
${ratesStrip()}

<h2>How the 3-year rate compares with the 5-year rate</h2>
<p>There's no fixed rule about which is lower. The gap between three-year and five-year rates moves with bond markets and with each lender's pricing. Sometimes the three-year rate has been lower. Other times it's been higher. Lenders also differ from one another on the same day. That's why comparing both terms from several lenders tells you more than any general rule.</p>
<p>When the shorter term costs a bit more, ask what that extra buys. Here's an illustrative example, with rates picked only for the sake of example. Take a $500,000 mortgage with a 25-year amortization.</p>
<ul>
<li>A 3-year fixed at 4.70 percent has a payment of $2,823.23 a month.</li>
<li>A 5-year fixed at 4.50 percent has a payment of $2,767.36 a month.</li>
<li>The gap is $55.87 a month.</li>
</ul>
<p>Over the first three years, interest is about $67,562 at 4.70 percent. At 4.50 percent it's about $64,654. That's a difference of roughly $2,908.</p>
<p>Is $2,908 over three years a fair price? It depends on what it buys you. If the shorter term helps you dodge a penalty bigger than that, it pays for itself. The same is true if it lets you refinance sooner at a better rate. If you'd have stayed put anyway, it's just a cost. The honest approach is to decide what you expect to happen first. Then price the options against it. You can set up this comparison in the <a href="/mortgage-calculators/#compare">scenario tool</a>.</p>

<h2>Matching the term to your plans</h2>
<p>The best use of a 3-year fixed is to match the mortgage to a plan with a date on it. Here are a few common cases.</p>
<ul>
<li><strong>A likely move.</strong> A family that expects to upsize in two or three years doesn't need a five-year commitment. A mortgage that ends near the move avoids the question of porting. It also means no penalty if the move lines up with maturity.</li>
<li><strong>A planned refinance.</strong> Maybe you plan to take out equity for a renovation, a rental suite or debt consolidation. You can line the term up with that event. The <a href="/refinance-mortgage-bc/">refinance hub</a> explains what a refinance involves and what it costs.</li>
<li><strong>A suite build.</strong> A household building a secondary suite will be in a stronger spot once the suite exists. Depending on the lender, its rent may then count as income. A term that ends after the build lets you reassess with a finished home.</li>
<li><strong>A change in income.</strong> Maybe your income is about to rise. You might be finishing a program or getting settled in self-employment. You may qualify for better terms at the next renewal.</li>
<li><strong>Rate watchers.</strong> Some people think rates will fall and don't want to lock in for five years. They accept the risk of being wrong.</li>
</ul>
<p>None of these makes a three-year term automatically right. They show the reasoning to use. Pick the term whose end date meets a decision you already expect to make.</p>

<h2>Penalty exposure compared</h2>
<p>A fixed-rate penalty is usually the larger of two numbers. One is three months of interest. The other is the <a href="/interest-rate-differential/">interest rate differential</a>. The differential is worked out over the time left in your term. So it shrinks as the end gets closer.</p>
<p>That's one real advantage of a shorter term. For the same rate gap, less time left means a smaller differential.</p>
<p>Here's an example with generic figures. It isn't any lender's formula. Take a $500,000 balance in two cases.</p>
<ul>
<li>You leave a 5-year fixed at 4.50 percent with 36 months left. The comparison rate is half a point lower, at 4.00 percent. The differential is about $7,500.</li>
<li>You leave a 3-year fixed at 4.70 percent with 12 months left. The comparison rate is half a point lower, at 4.20 percent. The differential is about $2,500.</li>
</ul>
<p>On the 3-year, three months of interest is about $5,875. That's the bigger number, so it would set the penalty.</p>
<p>The lesson is that the two penalties behave differently. On a five-year term, the differential usually sets the penalty for much of the term. On a three-year term, the three-month floor sets it more often. Neither figure is a quote. The <a href="/mortgage-calculators/#penalty">penalty calculator</a> lets you try your own numbers.</p>

<h2>Renewal timing strategy</h2>
<p>A shorter term means more renewal dates. Each one is a chance to move lenders with no penalty. Each one is also a point of risk. You'll be pricing a new term in whatever market exists on that day.</p>
<p>Here's how much it can matter. After three years on the example above, the balance is about $465,925, with 22 years of amortization left. Now look at three possible renewal rates:</p>
<ul>
<li>At 3.70 percent, the payment would be about $2,575 a month.</li>
<li>At 4.70 percent, it would be about $2,823.</li>
<li>At 5.70 percent, it would be about $3,083.</li>
</ul>
<p>A one-point move either way changes the payment by roughly $250. A household with room in its budget can handle that. A household without room should plan for it.</p>
<p>The way to manage the risk is to treat renewal as a project, not an event. Start about 120 days before maturity. Hold a rate, compare offers and decide before the lender's letter forces your hand. The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> explains when renewing early helps and when it costs you.</p>

${callout("Shorter isn't safer", "<p>A 3-year term cuts the time you're tied to one set of conditions. It doesn't cut the risk that rates are higher at renewal. If your budget couldn't handle a higher payment, a longer fixed term may suit you better. It puts off that test. The right answer depends on your own numbers.</p>")}

<h2>Where it sits among the other choices</h2>
<p>The term is one part of a bigger choice about how to set up your mortgage. The page on <a href="/fixed-vs-variable-mortgage/">fixed versus variable</a> lays out the trade-offs between the two types. The <a href="/5-year-fixed-mortgage-rate/">5-year fixed</a> page covers the classic term in the same detail. The overview at <a href="/mortgage-rates-bc/">mortgage rates in BC</a> brings all the terms together.</p>
<p>Joshua Resvick compares terms across a wide range of lenders. He gives you the results in writing, covering rate, penalty, prepayment and portability. On a mortgage with a mainstream (A) lender, the lender pays the broker. You pay nothing for the service. Fees come up only on some B-lender and private files, with written disclosure first.</p>

${cta({ title: "Match the term to your plans", text: "Tell Joshua what you expect to happen in the next three to five years and he'll price the terms against it.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/3-year-fixed-mortgage-rate/",
  h1: "3-year fixed mortgage rates in BC: the flexible middle term",
  lede: "A 3-year fixed trades a little rate for a lot of flexibility. Who it suits, how to compare it fairly with the 5-year and what leaving early costs.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["3-year fixed", "/3-year-fixed-mortgage-rate/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "Is a 3-year fixed rate higher than a 5-year fixed?", a: "Not always. The relationship between the two changes with bond markets and with each lender's pricing, and lenders differ on the same day. Compare both terms from several lenders at once, and price the difference against what a shorter term would let you do." },
    { q: "Who should choose a 3-year fixed mortgage?", a: "It tends to suit people with a dated plan, such as a likely move, a planned refinance or a suite build, who want the term to end near that event. If you expect to stay put and want a long, stable payment, a longer term may fit better." },
    { q: "Is the penalty smaller on a 3-year fixed?", a: "Often, because the interest rate differential is calculated on the time remaining, and there is less time remaining in a shorter term. The floor of three months of interest still applies, so the penalty is not zero. Ask how your lender calculates it." },
    { q: "What is the risk of renewing sooner?", a: "You price your next term in whatever market exists at that date, and rates may be higher. A shorter term means that test comes sooner and more often. A household should check that it could absorb a payment increase of a few hundred dollars a month." },
    { q: "When should I start shopping for the renewal of a 3-year term?", a: "About 120 days before maturity. Most lenders allow a rate hold in that window, which gives you time to compare offers and switch lenders if another one is better. Waiting for the lender's letter leaves very little room to negotiate or to switch." }
  ]
};
