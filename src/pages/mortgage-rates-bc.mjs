import { short } from "../lib/short.mjs";
import { cta, callout, ratesStrip } from "../lib/site.mjs";

const body = `
${short({ answer: "Your mortgage rate depends on your down payment, credit, property, purpose and term. It also depends on which lender you ask, and when. The lowest rate isn't always the cheapest mortgage once you count the penalty to leave.", who: "Anyone buying, renewing or refinancing in BC who wants to understand the rate they're being offered.", next: "Compare offers side by side with the <a href=\"/mortgage-calculators/#compare\">scenario tool</a>, or book a 15-minute call for real numbers." })}
${ratesStrip()}

<h2>Start with what a rate is, and what it is not</h2>
<p>A mortgage rate is the price of borrowing. It's stated as a yearly percentage. It's the number everyone talks about.</p>
<p>Oddly, it's also the number that tells you the least about whether a mortgage is any good. Two mortgages with the same rate can cost very different amounts. The differences hide in four places:</p>
<ul>
<li>The penalty to leave early.</li>
<li>The limits on extra payments.</li>
<li>How the lender treats you at renewal.</li>
<li>Whether the mortgage can move with you to a new home.</li>
</ul>
<p>So this page does something a little different. It explains how your rate actually gets set. It compares the main choices of term and type. It shows what to look at besides the rate.</p>
<p>You'll notice it prints no rate. That's on purpose. A rate in an article goes out of date soon after it's written.</p>
<p>Joshua Resvick doesn't post rates on this site. The rate that matters is the one your own file qualifies for. That depends on your down payment, credit, property and lender. A 15-minute call gets you real numbers for your situation.</p>

<h2>Why your rate differs from the posted rate</h2>
<p>Every lender publishes a posted rate. It works a lot like a list price, and hardly anyone pays it.</p>
<p>The rate you're offered is a discounted rate, set for your file. It moves with the lender's own cost of money. It also moves with how hungry the lender is for new mortgages that week.</p>
<p>That's the first reason rates differ between lenders on the same day. Each one has its own funding costs and targets. Each has its own view of which borrowers it wants.</p>
<p>The second reason is you. Lenders price the risk of each mortgage. The main inputs are fairly consistent across the industry.</p>
<ul>
<li><strong>Down payment or equity.</strong> The less of the home you own, the more risk the lender carries. The pricing reflects that.</li>
<li><strong>Credit history.</strong> Your payment history, balances against limits and the age of your credit all shape the lender's view of risk.</li>
<li><strong>The property.</strong> A house, a condo, a rural home and a home with a rental suite are each treated differently. So are different locations.</li>
<li><strong>How you'll use it.</strong> A home you live in is priced differently from a rental.</li>
<li><strong>The purpose.</strong> A purchase, a renewal switch and a refinance that takes out equity can each be priced differently at the same lender.</li>
<li><strong>The term and amortization.</strong> Different terms carry different prices. So does a longer amortization.</li>
</ul>
<p>That's why a rate quoted to a stranger on a website is a starting point, not a promise. It assumes a standard file. You find your own rate by looking at your file. If you work with a broker, you also ask several lenders at once.</p>

<h2>Insured, insurable and uninsured: three pricing categories</h2>
<p>Here's some industry lingo worth knowing. The category your mortgage lands in can change the rate more than most people expect. Lenders commonly sort mortgages into three buckets.</p>
<p>An <strong>insured</strong> mortgage has less than 20 percent down, so the law requires default insurance. You pay the premium, usually added to the mortgage. The insurance protects the lender if the loan fails.</p>
<p>An <strong>insurable</strong> mortgage has 20 percent or more down. It also meets the rules for the lender to buy its own insurance on it. So the lender carries little risk, even though you didn't pay a premium.</p>
<p>An <strong>uninsured</strong> mortgage doesn't meet those rules. The reason might be the price, the amortization or the type of property.</p>
<p>Lenders tend to price lower risk lower. A lender that insures a mortgage pays for that cover itself. So how it prices the three buckets is its own call.</p>
<p>The takeaway is simple. Your rate depends on which bucket you're in. That can shift with the price of the home, the amortization and the property type. Buying with less than 20 percent down? The <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> shows what the insurance adds to the mortgage.</p>

<h2>Fixed versus variable at a glance</h2>
<p>A fixed rate stays put for the whole term, so your payment is predictable. A variable rate moves with the lender's prime rate. Prime follows the Bank of Canada's policy rate. So what you pay can change during the term.</p>
<p>Neither one is better in general, whatever anyone tells you at a barbecue. It comes down to three things. How much payment uncertainty can you live with? How likely are you to leave the mortgage early? What penalty would that trigger?</p>
<p>The page on <a href="/fixed-vs-variable-mortgage/">fixed versus variable mortgages</a> works through the trade-offs properly. The page on <a href="/variable-rate-mortgage/">variable rate mortgages</a> explains the two very different ways a variable can behave. Your choice also shapes the penalty if you leave early. That's covered below and on the page about the <a href="/interest-rate-differential/">interest rate differential</a>.</p>

<h2>Term lengths compared</h2>
<p>The term is how long your rate and conditions are locked in. It can run from a few months to ten years, depending on the lender.</p>
<p>It's not the same as the amortization. That's how long it would take to pay off the whole mortgage. When the term ends, you renew, with the same lender or a new one. The table shows the usual character of each choice, without quoting rates.</p>
<div class="table-wrap"><table>
<thead><tr><th>Term</th><th>Who often chooses it</th><th>The trade-off</th></tr></thead>
<tbody>
<tr><th scope="row">1 to 2 years</th><td>People expecting their plans to change, or watching rates.</td><td>Renewals come often, so you're more exposed to rates each time.</td></tr>
<tr><th scope="row">3 years</th><td>Likely movers, refinancers and people planning a project.</td><td>More flexible than five years, with a sooner renewal. See <a href="/3-year-fixed-mortgage-rate/">the 3-year fixed</a>.</td></tr>
<tr><th scope="row">5 years</th><td>Households that want a steady payment for a long stretch.</td><td>The most common term, with a longer commitment. See <a href="/5-year-fixed-mortgage-rate/">the 5-year fixed</a>.</td></tr>
<tr><th scope="row">7 to 10 years</th><td>People who value certainty over a long horizon.</td><td>Fewer lenders offer them, and the penalty to leave can be large.</td></tr>
<tr><th scope="row">Variable</th><td>People who can absorb payment changes.</td><td>Your payment or interest cost moves with prime.</td></tr>
</tbody></table></div>
<p>A lower rate on a longer term isn't automatically the better deal. Is there a decent chance you'll move, refinance or sell before the term ends? Then the penalty to leave matters as much as the rate. The <a href="/open-vs-closed-mortgage/">open versus closed mortgage</a> page explains the one product with no penalty to leave. It also explains what you pay for that freedom.</p>

<h2>The true cost of a rate</h2>
<p>When you compare mortgages, a rate gap of a tenth of a point is easy to see and easy to chase. The costs sitting right beside the rate are harder to see. They can be a lot bigger.</p>
<ul>
<li><strong>The penalty to leave early.</strong> Most closed mortgages charge a penalty if you pay them off before the term ends. A variable penalty is usually three months of interest. A fixed penalty is usually the bigger of three months of interest and the interest rate differential. Lenders work out that differential in different ways.</li>
<li><strong>Prepayment privileges.</strong> Lenders let you make extra payments each year, up to a limit. The limits differ. They matter if a bonus, an inheritance or a sale is coming.</li>
<li><strong>Portability.</strong> Some mortgages can move to a new home. Some can't, or only with conditions.</li>
<li><strong>Charge type.</strong> How the mortgage is registered can make switching at renewal slower or pricier. The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> explains why.</li>
<li><strong>Fees.</strong> Some lenders charge a fee when you pay off or transfer the mortgage. Some don't.</li>
</ul>
<p>Some lenders are known for a fair, predictable penalty. Others are known for a harsh one. The penalty comes from the lender's own formula, so you can't judge it from the rate. You have to read it in the mortgage terms. Ideally, you compare it across lenders, which is part of a broker's job. The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> page covers what to look for.</p>

${callout("An illustration, not a quote", "<p>Take a $500,000 mortgage on a 25-year amortization. One offer is a five-year fixed at 4.50 percent. Another is 4.40 percent. The monthly payments are about $2,767 and $2,740. That's a gap of roughly $28 a month. Now say the cheaper rate comes with a harsher penalty formula, worth $5,000 to $15,000 more. It would take decades of those savings to make up the difference. The rates are examples, not current rates.</p>")}

<h2>Rate holds, briefly</h2>
<p>A rate hold reserves a rate for a set time. You might be shopping for a home, waiting for a build to finish or deciding at renewal. Holds commonly run 90 to 120 days. A hold isn't an approval. What happens if rates fall during it depends on the lender. The full story is on the page about <a href="/mortgage-rate-hold/">mortgage rate holds</a>.</p>

<h2>How Joshua shops the market</h2>
<p>Resvick Mortgages works under Xeva Mortgage (Verico Xeva Mortgage Inc.). That gives Joshua access to a wide range of lenders.</p>
<p>He doesn't just quote one lender's product. He asks the lenders whose rules fit your file for their terms. Then he compares them on everything above. That means rate, term, penalty, prepayment, portability and how the lender treats you later on. Every client gets that comparison in writing, in the <a href="/lender-comparison-report/">Lender Comparison Report</a>.</p>
<p>And since people always wonder, here's how fees work. With a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees come up only on some B-lender and private-lender files. When they do, BC rules require written disclosure before you commit. The page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> has the detail.</p>

<h2>Renewing rather than buying</h2>
<p>Maybe your mortgage is already in place, and the question is what rate to accept at maturity. The same ideas apply, with one bonus. Renewal is when you can move lenders without a penalty. The page on <a href="/mortgage-renewal-rates-bc/">renewal rates in BC</a> explains how renewal offers stack up against switch offers. It also explains when to start.</p>

<h2>Rates in the cities Joshua serves</h2>
<p>Mortgage rates are set by lender and by file, not by city. A rate in Vancouver doesn't differ from one in Kelowna just because of the postal code.</p>
<p>What does change from place to place is property type, price and how keen lenders are on certain areas. For the local angle, see the pages for <a href="/mortgage-rates-vancouver/">Vancouver mortgage rates</a> and <a href="/mortgage-rates-surrey/">Surrey mortgage rates</a>. Joshua works with clients across BC, online and by phone.</p>

<h2>Compare your options side by side</h2>
<p>The scenario tool on the <a href="/mortgage-calculators/#compare">calculators page</a> puts up to four options side by side. It covers payment, interest over the term and penalty exposure. Plug in rates you've been quoted. Or try a few to see how much a small difference really matters.</p>

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
