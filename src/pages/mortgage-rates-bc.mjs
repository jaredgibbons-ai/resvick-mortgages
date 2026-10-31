import { cta, callout, ratesStrip } from "../lib/site.mjs";

const body = `
${ratesStrip()}

<h2>Start with what a rate is, and what it is not</h2>
<p>A mortgage rate is the price of borrowing, stated as a yearly percentage. It's the most visible number in any mortgage conversation, and, oddly, it's also the number that tells you the least about whether a mortgage is a good one. Two mortgages with the same rate can cost very different amounts once you add in the penalty to leave, the limits on extra payments, the way the lender treats you at renewal and whether the mortgage can move with you to a new home.</p>
<p>So this page does something a little different. It explains how the rate you're offered actually gets set, how the main choices of term and type compare, and what to look at besides the rate. You'll notice it prints no rate in its text. That's deliberate: a rate in an article is out of date shortly after it's written. Joshua Resvick doesn't post rates on this site, because the rate that matters is the one your own file qualifies for, and that depends on your down payment, credit, property and lender. A 15-minute call gets you real numbers for your situation.</p>

<h2>Why your rate differs from the posted rate</h2>
<p>Every lender publishes a posted rate, and it works a lot like a list price. Hardly anyone pays it. The rate you're actually offered is a discounted rate, set by the lender for your particular file, and it moves with the lender's cost of funds and how hungry it is for new mortgages that week. That's the first reason rates differ between lenders on the same day: each has its own funding costs, its own targets and its own view of which borrowers it wants.</p>
<p>The second reason is you. Lenders price the risk of each mortgage, and the main inputs are pretty consistent across the industry:</p>
<ul>
<li><strong>Down payment or equity.</strong> The smaller the share of the home you own, the more risk the lender carries, and the pricing reflects it.</li>
<li><strong>Credit history.</strong> Payment history, balances against limits and the age of your credit all feed the lender's view of risk.</li>
<li><strong>The property.</strong> A house, a condo, a rural property and a home with a rental suite are all treated differently, and so are different locations.</li>
<li><strong>How you'll use it.</strong> An owner-occupied home is priced differently from a rental property.</li>
<li><strong>The purpose.</strong> A purchase, a renewal switch and a refinance that takes out equity can each carry different pricing at the very same lender.</li>
<li><strong>The term and amortization.</strong> Different terms are priced differently, and so is a longer amortization.</li>
</ul>
<p>That's why a rate quoted to a stranger on a website is a starting point and not a promise. It assumes a standard file. The rate that applies to you is found by looking at your file and, if you're working with a broker, by asking several lenders at once.</p>

<h2>Insured, insurable and uninsured: three pricing categories</h2>
<p>Here's a bit of industry vocabulary that's worth knowing, because the category your mortgage lands in can change the rate more than most people expect. Lenders commonly sort mortgages into three buckets.</p>
<p>An <strong>insured</strong> mortgage is one where the down payment is under 20 percent, so default insurance is required by law. You pay the premium, usually added to the mortgage, and the insurance protects the lender if the loan fails. An <strong>insurable</strong> mortgage has 20 percent or more down and meets the criteria for the lender to buy its own portfolio insurance, so the lender carries little risk even though you didn't pay a premium. An <strong>uninsured</strong> mortgage doesn't meet those criteria, maybe because of the price, the amortization or the type of property.</p>
<p>Lenders tend to price lower risk lower, and a lender that insures a mortgage pays for that insurance itself, so how it prices the three categories is its own call. The practical takeaway: your rate depends on which bucket your mortgage falls into, and that can shift with the price of the home, the amortization and the property type. If you're buying with less than 20 percent down, the <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> shows what the insurance adds to the mortgage.</p>

<h2>Fixed versus variable at a glance</h2>
<p>A fixed rate stays put for the whole term, so your payment is predictable. A variable rate moves with the lender's prime rate, which follows the Bank of Canada's policy rate, so what you pay can change during the term. Neither one is better in general, whatever anyone tells you at a barbecue. The choice comes down to how much payment uncertainty you can live with, how likely you are to leave the mortgage early and what penalty that would trigger.</p>
<p>The page on <a href="/fixed-vs-variable-mortgage/">fixed versus variable mortgages</a> works through the trade-offs properly, and the separate page on <a href="/variable-rate-mortgage/">variable rate mortgages</a> explains the two quite different ways a variable can behave. The decision also shapes the penalty if you leave early, which is covered below and on the page about the <a href="/interest-rate-differential/">interest rate differential</a>.</p>

<h2>Term lengths compared</h2>
<p>The term is how long your rate and conditions are locked in, anywhere from a few months to ten years depending on the lender. It's not the same as the amortization, which is how long it would take to pay the mortgage off completely. When the term ends you renew, either with the same lender or with a new one. The table gives you the usual character of each choice, without quoting rates.</p>
<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Who often chooses it</th><th>The trade-off</th></tr></thead>
<tbody>
<tr><th scope="row">1 to 2 years</th><td>Borrowers expecting a change of plans, or watching rates</td><td>Frequent renewals, so more exposure to the rate at each renewal</td></tr>
<tr><th scope="row">3 years</th><td>Likely movers, refinancers and people planning a project</td><td>More flexibility than five years, with a renewal sooner. See <a href="/3-year-fixed-mortgage-rate/">the 3-year fixed</a></td></tr>
<tr><th scope="row">5 years</th><td>Households that want a stable payment for a long stretch</td><td>The most common term, with a longer commitment. See <a href="/5-year-fixed-mortgage-rate/">the 5-year fixed</a></td></tr>
<tr><th scope="row">7 to 10 years</th><td>Borrowers who value certainty over a long horizon</td><td>Fewer lenders offer them, and the penalty to leave can be large</td></tr>
<tr><th scope="row">Variable</th><td>Borrowers who can absorb payment changes</td><td>Payment or interest cost moves with prime</td></tr>
</tbody></table></div>
<p>A lower rate on a longer term isn't automatically the better deal. If there's a decent chance you'll move, refinance or sell before the term ends, the penalty to leave early matters just as much as the rate. The <a href="/open-vs-closed-mortgage/">open versus closed mortgage</a> page explains the one product with no penalty to leave, and what you pay for that freedom.</p>

<h2>The true cost of a rate</h2>
<p>When you're comparing mortgages, a rate difference of a tenth of a point is easy to see and easy to chase. The costs sitting right beside the rate are harder to see, and they can be a lot larger.</p>
<ul>
<li><strong>The penalty to leave early.</strong> Most closed mortgages charge a penalty if you pay them out before the term ends. A variable penalty is usually three months of interest. A fixed penalty is usually the greater of three months of interest and the interest rate differential, and lenders calculate that differential in different ways.</li>
<li><strong>Prepayment privileges.</strong> Lenders let you make extra payments each year up to a limit, and the limits differ. If a bonus, an inheritance or a sale is on the horizon, they matter.</li>
<li><strong>Portability.</strong> Some mortgages can move to a new property, and some can't, or only under conditions.</li>
<li><strong>Charge type.</strong> How the mortgage is registered can make switching lenders at renewal slower or more expensive, as the page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains.</li>
<li><strong>Fees.</strong> Some lenders charge a fee at discharge, or when you transfer, and some don't.</li>
</ul>
<p>Some lenders are known for a fair, predictable penalty and others for a harsh one. Because the penalty comes from the lender's own formula, you can't judge it from the rate. It has to be read from the mortgage terms and, ideally, compared across lenders, which is part of what a broker does. The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> page covers what to look for.</p>

${callout("An illustration, not a quote", "<p>Suppose a $500,000 mortgage on a 25-year amortization, with a five-year fixed rate of 4.50 percent in one offer and 4.40 percent in another. The monthly payments are about $2,767 and $2,740, a difference of roughly $28 a month. A penalty of $5,000 to $15,000 on the offer with the harsher formula would take decades of those savings to offset. The rates are examples, not current rates.</p>")}

<h2>Rate holds, briefly</h2>
<p>A rate hold reserves a rate for a set period while you shop for a home, wait for a build to finish or make up your mind at renewal. Holds commonly run 90 to 120 days. A hold isn't an approval, and what happens if rates fall during it depends on the lender. The full story is on the page about <a href="/mortgage-rate-hold/">mortgage rate holds</a>.</p>

<h2>How Joshua shops the market</h2>
<p>Resvick Mortgages operates under Xeva Mortgage (Verico Xeva Mortgage Inc.), which gives Joshua access to a wide range of lenders. Rather than quoting one lender's product, he asks the lenders whose rules fit your file for their terms, then compares the results on everything above: rate, term, penalty, prepayment, portability and how the lender treats the mortgage later on. Every client gets that comparison in writing, in the <a href="/lender-comparison-report/">Lender Comparison Report</a>.</p>
<p>And since people always wonder: on a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private-lender files, and when they do, BC rules require written disclosure before you commit. The page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> has the detail.</p>

<h2>Renewing rather than buying</h2>
<p>If your mortgage is already in place and the question is what rate to accept at maturity, the same principles apply, with one bonus: renewal is the moment you can move lenders without a penalty. The page on <a href="/mortgage-renewal-rates-bc/">renewal rates in BC</a> explains how renewal offers stack up against switch offers and when to start.</p>

<h2>Rates in the cities Joshua serves</h2>
<p>Mortgage rates are set by lender and by file, not by city, so a rate in Vancouver doesn't differ from one in Kelowna just because of the postal code. What does change from place to place is property type, price and lender appetite for certain areas. If you'd like the local angle, see the pages for <a href="/mortgage-rates-vancouver/">Vancouver mortgage rates</a> and <a href="/mortgage-rates-surrey/">Surrey mortgage rates</a>. Joshua works with clients across BC, online and by phone.</p>

<h2>Compare your options side by side</h2>
<p>The scenario tool on the <a href="/mortgage-calculators/#compare">calculators page</a> puts up to four options next to each other, covering payment, interest over the term and penalty exposure. Plug in any rates you've been quoted, or try a few to see for yourself how much a small difference really matters.</p>

${cta({ title: "Get your comparison report", text: "A 15-minute call covers your goals and timeline. Then Joshua compares real lender options for your file and shows them to you in writing." })}
`;

export default {
  slug: "/mortgage-rates-bc/",
  h1: "Mortgage rates in BC: how your rate is set, and what the lowest rate leaves out",
  lede: "Why the rate you qualify for differs from the rate you see advertised, how terms compare, and what to check beyond the percentage.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "What is a good mortgage rate in BC right now?", a: "A good rate is one that compares well with real offers on your own file, at a term and penalty that fit your plans. Rates change often and vary by lender, down payment, credit and property, so a single number isn't meaningful. Joshua can show you what's available for your situation." },
    { q: "Why is the rate I was quoted higher than the one advertised?", a: "Advertised rates usually assume a standard, low-risk file, such as an insured purchase on a typical property. Your rate depends on your down payment, credit, the property, how you'll use it and the lender. Mortgage categories such as insured, insurable and uninsured can also change pricing." },
    { q: "Is the lowest rate always the cheapest mortgage?", a: "No. A lower rate can come with a larger penalty, tighter prepayment limits or less flexibility at renewal. Over a full term these can outweigh a small rate difference. Compare the whole mortgage, including what leaving early would cost, before choosing on the rate alone." },
    { q: "Does using a mortgage broker cost extra?", a: "On a mortgage placed with a mainstream lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private-lender files, and BC rules require written disclosure before you commit. Joshua explains this fully on his page about how brokers are paid." },
    { q: "How often do mortgage rates change?", a: "Fixed rates move with bond markets and lender funding costs and can change many times in a month. Variable rates follow the lender's prime rate, which changes after Bank of Canada rate announcements. A rate hold protects a quoted rate for a set period while you decide." }
  ]
};
