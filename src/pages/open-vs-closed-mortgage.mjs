import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Two definitions, one trade</h2>
<p>An <strong>open mortgage</strong> lets you pay off some or all of the balance at any time, without a penalty. A <strong>closed mortgage</strong> limits how much you can prepay during the term, and charges a penalty if you pay it out, or break it, before the term ends. Almost every mortgage in Canada is closed, and the reason is price. Lenders charge more for the right to leave at any moment, because an open mortgage offers them no certainty about how long they will earn interest on the money.</p>
<p>The decision is therefore a trade: you pay a higher rate for freedom, or a lower rate for limits. Neither is better in general. The right one depends on how likely you are to need the freedom, and how much the freedom costs. This page explains how to price that trade, the maturity trap that turns many borrowers into open-mortgage holders without meaning to, and the middle path of prepayment privileges. It prints no current rates. The <a href="/mortgage-rates-bc/">mortgage rates hub</a> explains how your rate is set; a 15-minute call gets you today's number for your own file.</p>

<h2>What the open-mortgage premium looks like</h2>
<p>Open rates are typically higher than closed rates for the same term, and the gap is not small. It varies by lender and by when you ask, so no single number applies. An illustration, with rates chosen only for the sake of example: a $400,000 mortgage on a 25-year amortization at a closed rate of 5.00 percent has a payment of $2,326.42 a month. The same mortgage at an open rate of 5.75 percent has a payment of $2,500.09, which is $173.67 more each month. Over a year, the interest on the closed mortgage is about $19,608 and on the open mortgage about $22,537. The premium for a year of full freedom is about $2,929.</p>
<p>That is the price in this example. The question is whether freedom is worth that much to you. If there is a good chance you will use it, perhaps because a sale is close, it can be. If not, you are paying for an option you will not exercise. You can test your own figures in the <a href="/mortgage-calculators/#payment">payment calculator</a>.</p>

<h2>The maturity trap</h2>
<p>Many borrowers meet an open mortgage by accident. When a closed term ends, your mortgage reaches maturity. If you have not signed a renewal or arranged a replacement, a lender commonly rolls the mortgage into an open term, or a short term, at a rate that is typically much higher than a negotiated one. That is a feature of the contract and not a penalty, and the lender is acting within the contract. For the borrower it is expensive, because the rate is often among the highest the lender offers.</p>
<p>The trap is avoidable. Lenders must send a renewal statement at least 21 days before the term ends, but that is the legal minimum, not the time to start. Rate holds run about 120 days, so beginning around 120 days before maturity gives you time to compare, to switch if you want to and to sign something before the date arrives. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> sets out the process. A mortgage that is open at maturity is also the one point at which you can leave without a penalty, so the same date that exposes you to a high rate also gives you the freedom to move to another lender.</p>

<h2>When an open mortgage makes sense</h2>
<p>Choosing open deliberately is a legitimate and sometimes smart decision. It tends to suit a short and specific window, such as:</p>
<ul>
<li><strong>An imminent sale.</strong> If you will sell within months, an open mortgage lets you pay it out on closing day with no penalty. The <a href="/mortgage-calculators/#sale-proceeds">sale proceeds calculator</a> shows what you would net.</li>
<li><strong>A pending inheritance or windfall.</strong> If a lump sum is expected and the timing is uncertain, open lets you apply it the day it arrives.</li>
<li><strong>A bridge situation.</strong> A household that has bought before selling may need flexibility until the first home closes. For that gap, see the page on <a href="/bridge-financing/">bridge financing</a>.</li>
<li><strong>A gap before a planned change.</strong> An open term can cover the months between the end of one plan and the start of another, such as a refinance that is being arranged.</li>
</ul>
<p>In each case the logic is the same: the open period is short, and the premium is small compared with the penalty or the missed opportunity it prevents. Open is a poor choice as a five-year default.</p>

<h2>Prepayment privileges: the middle path</h2>
<p>Between fully open and fully closed is a wide middle. Most closed mortgages let you prepay part of the balance each year without penalty. The usual privileges are a lump-sum payment of some percentage of the original balance, an increase in your regular payment by some percentage and sometimes a doubling of a payment. The percentages differ between lenders, so they are worth comparing before you sign. A closed mortgage with generous privileges gives a household much of the benefit of open at a closed-rate price, and the page on <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> explains what to compare.</p>
<p>A useful way to compare is to estimate how much you are realistically likely to prepay, then to check whether the closed mortgage's limits cover it. Someone who will add a few thousand dollars each year, or who expects a bonus, may never need to be open. Someone who expects to pay out most of the balance in one go may.</p>

${callout("Open, closed and the cost of leaving", "<p>A closed mortgage is only a problem if you leave it early. The penalty depends on whether the rate is fixed or variable and on how the lender calculates it. If you expect to leave in the next year or two, price the penalty and the open premium side by side before choosing, rather than assuming the lower rate is the better deal.</p>")}

<h2>Convertible and short-term closed mortgages</h2>
<p>Some lenders offer products between the two: a convertible mortgage that can be changed to a longer closed term without a penalty, or a short closed term of six months to a year. A short closed term is cheaper than open and expires soon, and a convertible term allows you to lock in later. Which products exist depends on the lender, so ask what is available for your timeline. Do not assume that a product labelled flexible is free to leave. Read what it says about prepayment and penalty.</p>

<h2>How Joshua helps with the choice</h2>
<p>Joshua Resvick starts with your timeline. If you tell him you might sell in a year, he will compare the open, short-term and closed options across a wide range of lenders, including the cost of each way out, and show you the results in the <a href="/lender-comparison-report/">Lender Comparison Report</a>. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private-lender files, with written disclosure first.</p>

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
