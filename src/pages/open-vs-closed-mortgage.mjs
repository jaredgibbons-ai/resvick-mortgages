import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "An open mortgage lets you pay it off anytime with no penalty, but it costs a higher rate. A closed mortgage is cheaper but limits prepayments. Open only makes sense for a short, specific window, like a sale a few months away.", who: "Anyone choosing a term, or about to sell, refinance or get a lump sum.", next: "Compare the open premium against your likely penalty in the <a href=\"/mortgage-calculators/#payment\">payment calculator</a>." })}

<h2>Two definitions, one trade</h2>
<p>An <strong>open mortgage</strong> lets you pay off some or all of the balance at any time, with no penalty. A <strong>closed mortgage</strong> limits how much you can prepay during the term. It charges a penalty if you pay it out, or break it, before the term ends.</p>
<p>Almost every mortgage in Canada is closed, and the reason is price. Lenders charge more for the right to leave at any moment. An open mortgage gives them no certainty about how long they'll earn interest on the money.</p>
<p>So the choice is a trade. You pay a higher rate for freedom, or a lower rate for limits. Neither is better in general. The right one depends on how likely you are to need the freedom, and what it costs.</p>
<p>This page shows how to price that trade. It covers the maturity trap that turns many borrowers into open-mortgage holders by accident. And it explains the middle path of prepayment privileges. It prints no current rates. The <a href="/mortgage-rates-bc/">mortgage rates hub</a> explains how your rate is set. A 15-minute call gets you today's number for your own file.</p>

<h2>What the open-mortgage premium looks like</h2>
<p>Open rates are usually higher than closed rates for the same term, and the gap isn't small. It varies by lender and by when you ask, so no single number applies.</p>
<p>Here's an example, with rates picked only for illustration. Take a $400,000 mortgage on a 25-year amortization. At a closed rate of 5.00 percent, the payment is $2,326.42 a month. At an open rate of 5.75 percent, it's $2,500.09. That's $173.67 more each month.</p>
<p>Over a year, the interest on the closed mortgage is about $19,608. On the open mortgage, it's about $22,537. So a year of full freedom costs about $2,929.</p>
<p>That's the price in this example. The question is whether freedom is worth that much to you. If there's a good chance you'll use it, maybe because a sale is close, it can be. If not, you're paying for an option you won't use. You can test your own figures in the <a href="/mortgage-calculators/#payment">payment calculator</a>.</p>

<h2>The maturity trap</h2>
<p>Many borrowers end up with an open mortgage by accident. When a closed term ends, your mortgage reaches maturity. Say you haven't signed a renewal or arranged a replacement. A lender commonly rolls the mortgage into an open term, or a short term. The rate is usually much higher than a negotiated one.</p>
<p>That's how the contract works. It isn't a penalty, and the lender is within its rights. For you, though, it's expensive, because that rate is often among the highest the lender offers.</p>
<p>The trap is avoidable. Lenders must send a renewal statement at least 21 days before the term ends. But that's the legal minimum, not the time to start. Rate holds run about 120 days. Starting around 120 days before maturity gives you time to compare, switch if you want and sign before the date arrives. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> sets out the process.</p>
<p>There's an upside, too. Maturity is also the one point when you can leave with no penalty. So the same date that exposes you to a high rate also frees you to move to another lender.</p>

<h2>When an open mortgage makes sense</h2>
<p>Choosing open on purpose can be a smart decision. It tends to suit a short, specific window, like these:</p>
<ul>
<li><strong>A sale coming soon.</strong> If you'll sell within months, an open mortgage lets you pay it out on closing day with no penalty. The <a href="/mortgage-calculators/#sale-proceeds">sale proceeds calculator</a> shows what you'd net.</li>
<li><strong>An inheritance or windfall on the way.</strong> If a lump sum is coming and the timing is unclear, open lets you apply it the day it arrives.</li>
<li><strong>A bridge situation.</strong> A household that bought before selling may need flexibility until the first home closes. For that gap, see the page on <a href="/bridge-financing/">bridge financing</a>.</li>
<li><strong>A gap before a planned change.</strong> An open term can cover the months between one plan and the next, like a refinance that's being arranged.</li>
</ul>
<p>The logic is the same each time. The open period is short. And the premium is small next to the penalty or missed chance it prevents. Open is a poor choice as a five-year default.</p>

<h2>Prepayment privileges: the middle path</h2>
<p>Between fully open and fully closed there's a wide middle. Most closed mortgages let you prepay part of the balance each year with no penalty.</p>
<p>The usual privileges are a lump-sum payment of some percentage of the original balance, and a raise in your regular payment by some percentage. Some lenders also let you double a payment. The percentages differ between lenders, so compare them before you sign. A closed mortgage with generous privileges gives you much of the benefit of open at a closed-rate price. The page on <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> explains what to compare.</p>
<p>Here's a useful test. Estimate how much you'll realistically prepay. Then check whether the closed mortgage's limits cover it. Someone who adds a few thousand dollars a year, or expects a bonus, may never need open. Someone who expects to pay out most of the balance at once may.</p>

${callout("Open, closed and the cost of leaving", "<p>A closed mortgage is only a problem if you leave it early. The penalty depends on whether the rate is fixed or variable, and on how the lender calculates it. If you expect to leave in the next year or two, price the penalty and the open premium side by side. Don't just assume the lower rate is the better deal.</p>")}

<h2>Convertible and short-term closed mortgages</h2>
<p>Some lenders offer products in between. A convertible mortgage can be changed to a longer closed term with no penalty. A short closed term runs six months to a year.</p>
<p>A short closed term is cheaper than open and ends soon. A convertible term lets you lock in later. Which products exist depends on the lender, so ask what's available for your timeline. Don't assume a product labelled flexible is free to leave. Read what it says about prepayment and penalty.</p>

<h2>How Joshua helps with the choice</h2>
<p>Joshua Resvick starts with your timeline. Tell him you might sell in a year, and he'll compare open, short-term and closed options across a wide range of lenders. He'll include the cost of each way out. You'll see the results in the <a href="/lender-comparison-report/">Lender Comparison Report</a>.</p>
<p>On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files, with written disclosure first.</p>

${cta({ title: "Tell Joshua your timeline", text: "Whether you might sell, refinance or receive a lump sum, a short conversation shows which structure fits and what the exit would cost.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/open-vs-closed-mortgage/",
  h1: "Open vs closed mortgage: when paying more buys freedom",
  lede: "Open mortgages cost more and let you leave at any time. Closed terms are cheaper with limits. When each is right, including the auto-renewal trap at maturity.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Open vs closed", "/open-vs-closed-mortgage/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "Is an open mortgage worth the higher rate?", a: "Only if there is a real chance you will use the freedom, for example because a sale or a lump-sum payment is near. In the illustration above, a year of open costs about $2,900 more in interest. If you would not use it, you are paying for an option you will not exercise." },
    { q: "What happens if I do not renew my mortgage?", a: "When the term ends, many lenders roll the mortgage into an open or short term at a rate that is typically much higher than a negotiated one. It is a feature of the contract, not a penalty, and it is avoidable if you start comparing about 120 days before maturity." },
    { q: "Can I pay extra on a closed mortgage?", a: "Yes, up to the limits in your prepayment privileges, which often allow a lump sum and a payment increase each year as a percentage of the original balance. The percentages differ between lenders. Going beyond them can trigger a penalty, so check your contract." },
    { q: "Do I pay a penalty to leave an open mortgage?", a: "No. An open mortgage can be paid off in part or in full at any time without a penalty. That is the feature you are paying for through the higher rate. Some lenders charge small administrative or discharge fees, so ask what applies." },
    { q: "Are there options between open and closed?", a: "Yes. Short closed terms, convertible mortgages and closed mortgages with generous prepayment privileges all sit between the two. Which of them exist depends on the lender, so describe your timeline to a broker and ask for the options to be compared in writing." }
  ]
};
