import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "A 5-year fixed locks your rate and payment for five years. It's the most common choice, but its exit penalty can be large, so it suits people who expect to stay put.", who: "Buyers and renewers who want a steady payment and don't expect to move or refinance soon.", next: "Check what leaving early could cost with the <a href=\"/mortgage-calculators/#penalty\">penalty calculator</a>, then <a href=\"/contact/\">talk to Joshua</a>." })}

<h2>Why the 5-year fixed became the default</h2>
<p>Ask a Canadian what kind of mortgage they have. Often the answer is a five-year fixed. It has long been the most popular term. Most rate tables and ads lead with it.</p>
<p>The reasons are practical. Five years is long enough to give a household a steady payment for a real stretch of life. It also fits how many people think about a home. You stay a while, plan around a payment, and look at it again in five years.</p>
<p>That popularity is the reason to look closely rather than assume. The default for most people isn't always right for you. A good rate on the wrong term can cost more than a slightly higher rate on the right one.</p>
<p>This page explains when the 5-year fixed fits and when a shorter term beats it. It also shows what the penalty can look like if you leave early. This page prints no rate in its text. A 15-minute call gets you today's number for your own file.</p>
${ratesStrip()}

<h2>What a 5-year fixed term actually locks in</h2>
<p>The term is how long your rate and contract conditions are fixed. After five years, you renew. You can stay with the same lender or move to another one with no penalty.</p>
<p>Your amortization is separate. That's the full repayment schedule, and it's usually much longer. With a 25-year amortization, you'd go through five terms over the life of the mortgage. Each renewal brings a new set of rates.</p>
<p>Fixed-rate mortgages in Canada compound semi-annually. The Interest Act's disclosure rules make that the standard. Each regular payment covers the interest on the balance and pays down some principal. In the early years, most of each payment is interest. So the balance falls slowly at first. The <a href="/mortgage-calculators/#payment">payment calculator</a> shows the payment and the balance at the end of any term.</p>

<h2>Qualifying on a 5-year fixed: the stress test</h2>
<p>Lenders don't qualify you at the rate you'll pay. They test your income against a higher rate. That checks you could still manage if rates went up.</p>
<p>At a federally regulated lender, the qualifying rate is the higher of two numbers. One is your contract rate plus 2 percentage points. The other is 5.25 percent. With an illustrative contract rate of 4.50 percent, the qualifying rate would be 6.50 percent.</p>
<p>So the most you can borrow depends on the stress-test rate, not the rate on the page. A small change in your contract rate moves the qualifying rate by the same amount. That means the rate you get can shift your borrowing limit. The <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> explains the ratios lenders use alongside the test.</p>

<h2>The penalty reality</h2>
<p>The most useful thing to know about any fixed mortgage is what leaving early would cost. The penalty on a fixed term is usually the larger of two numbers. One is three months of interest. The other is the <a href="/interest-rate-differential/">interest rate differential</a>. Lenders work out the differential in different ways. So the result can vary a lot between lenders on the same mortgage.</p>
<p>Here's an example with generic figures. It isn't any lender's formula. Take a $400,000 balance at about 5.00 percent with three years left.</p>
<ul>
<li>Three months of interest is about $5,000.</li>
<li>A differential of 0.50 percentage points over those 36 months would be about $6,000.</li>
<li>A differential of 1.00 percentage point would be about $12,000.</li>
</ul>
<p>The penalty is the larger figure. So the same mortgage can have a very different exit cost depending on the lender's method. The <a href="/mortgage-calculators/#penalty">penalty calculator</a> lets you try your own balance, rate and months left.</p>
<p>The lesson is to ask before you sign, not after. A five-year fixed with a harsh penalty can be a poor fit if you might move or refinance in three years. That's true even if its rate is the lowest on the table.</p>

<h2>5-year or 3-year: some scenarios</h2>
<p>These scenarios show how the term fits different plans. They're examples of reasoning, not advice for your file.</p>
<ul>
<li><strong>The first-time buyer who expects to stay.</strong> A couple buying their first home and planning to stay for years often values a steady payment. A five-year fixed gives them that. They should still check the penalty and the prepayment privileges. Income often rises over five years, and extra payments become possible.</li>
<li><strong>The likely mover.</strong> A household that expects to move within three or four years should compare it with a <a href="/3-year-fixed-mortgage-rate/">3-year fixed</a>. A portable mortgage can follow them to the next home. But porting has conditions, and the <a href="/porting-your-mortgage/">porting guide</a> explains them.</li>
<li><strong>The upsizer.</strong> A family planning a bigger home in a few years needs to think about both the penalty and portability. A shorter term may cost less in total, even at a higher rate. So may a mortgage with a fair penalty.</li>
<li><strong>The borrower who wants to refinance soon.</strong> Maybe a renovation, a suite or a debt consolidation is coming. A shorter term keeps your options open. So does a mortgage with generous prepayment rights.</li>
</ul>
<p>Compare the total cost across your realistic timeline, including a possible exit. Don't compare the rate alone. The <a href="/fixed-vs-variable-mortgage/">fixed versus variable</a> page covers the wider choice.</p>

<h2>Portability and blending</h2>
<p>A portable mortgage lets you carry your rate and term to a new home. The lender's conditions apply, and you have to qualify again on the new mortgage. If you buy a pricier home, you may need more money. A lender may blend your current rate with a new rate for the extra amount.</p>
<p>Portability doesn't mean you can skip the details. Timing windows vary by lender. So does how long you have to buy after selling, and how the extra money is priced. A portable five-year fixed can cut the cost of a move. One that isn't portable can make a move much more expensive.</p>

${callout("What the rate table doesn't tell you", "<p>A 5-year fixed rate is easy to advertise and hard to compare. Two mortgages with the same rate can have different penalties, prepayment limits and portability. Compare the whole mortgage, not just the number. The Lender Comparison Report is built for that.</p>")}

<h2>How a broker approaches the 5-year question</h2>
<p>Joshua Resvick works with Xeva Mortgage. He compares lenders on more than the rate. For a five-year fixed, he asks each lender a few questions. How is the penalty worked out? What are the prepayment privileges? Can the mortgage be ported? What happens at renewal?</p>
<p>Every client gets the results as a written <a href="/lender-comparison-report/">Lender Comparison Report</a>. On a mortgage with a mainstream (A) lender, the lender pays the broker. You pay nothing for the service. Fees come up only on some B-lender and private files, with written disclosure first.</p>
<p>Want to see how a 5-year fixed stacks up against your other options? The rates hub at <a href="/mortgage-rates-bc/">mortgage rates in BC</a> lays out the whole picture. The best next step is a short chat about your own plans.</p>

${cta({ title: "Is the 5-year fixed right for you?", text: "Tell Joshua how long you expect to stay and what changes you see coming. He'll show you the options and the exit costs side by side.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/5-year-fixed-mortgage-rate/",
  h1: "5-year fixed mortgage rates in BC: when the classic term fits",
  lede: "Canada's default term, examined. When the 5-year fixed is the right call, when a shorter term beats it, and the penalty math worth knowing before you sign.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["5-year fixed", "/5-year-fixed-mortgage-rate/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "Is a 5-year fixed mortgage the best choice?", a: "It suits many households, especially those who want a stable payment and expect to stay put, but it is not best for everyone. If you may move or refinance within a few years, a shorter term or a different structure can cost less in total once the penalty is included." },
    { q: "What happens at the end of a 5-year fixed term?", a: "You renew. You can renew with the same lender or move to another lender with no prepayment penalty on the maturity date. The earlier you start comparing, ideally about 120 days before maturity, the more room you have to negotiate." },
    { q: "Does a 5-year fixed have a high penalty?", a: "It can. The penalty is usually the greater of three months of interest and the interest rate differential, and lenders calculate the differential in different ways. The result can differ a lot between lenders, so ask how yours is calculated before you sign." },
    { q: "Can I take my 5-year fixed mortgage with me if I move?", a: "Many fixed mortgages are portable, which lets you keep your rate and term on a new property if you qualify again and meet the lender's timing rules. Conditions vary, so ask whether yours is portable and how an increase in the amount would be priced." },
    { q: "How does the stress test apply to a 5-year fixed?", a: "At a federally regulated lender you qualify at the greater of your contract rate plus 2 percentage points and 5.25 percent. So a contract rate of 4.50 percent is tested at 6.50 percent. The test affects how much you can borrow, not the rate you pay." }
  ]
};
