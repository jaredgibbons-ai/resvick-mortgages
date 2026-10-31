import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Standard charge or collateral charge: how the mortgage is registered</h2>
<p>When you take out a mortgage, the lender registers a claim against your property at the land title office. In British Columbia that claim is called a charge. How the charge is written affects what happens later, and it is one of the least discussed details of a mortgage, because most borrowers never see it until they try to move the mortgage.</p>
<p>With a <strong>standard charge</strong>, the claim is registered for the amount you borrowed and secures that specific mortgage, on its stated terms. With a <strong>collateral charge</strong>, the claim is registered as security for a separate promise to repay, and it is often registered for an amount that is more than the mortgage you took. The registration is the security, and the loan agreement sits behind it. Some larger lenders register their mortgages as collateral charges by default, and others offer both types.</p>
<p>Neither is unlawful or inherently harmful. The question is whether you know which one you have, because a collateral charge can make switching lenders at renewal slower and more costly. This page explains why lenders use them, what changes at renewal, how to check your own mortgage and when a collateral charge is useful. Joshua Resvick raises it early in every renewal conversation because it changes the cost of the best-priced option.</p>

<h2>Why lenders use collateral charges</h2>
<p>The main reason is flexibility. If a charge is registered for more than the current loan, the lender can lend you additional money later, up to the registered amount, without registering a new charge. That is how readvanceable mortgages work: as you pay down the principal, credit room reopens in a line of credit attached to the same charge, and you can borrow against it again without going back to the title office. The <a href="/readvanceable-mortgage/">readvanceable mortgage</a> page explains how those products operate.</p>
<p>A collateral charge can also secure more than the mortgage. Depending on the wording, it can cover other credit products with the same lender, such as a line of credit or a loan, which is sometimes called cross-collateralization. That is convenient when the lender is also your bank and you want everything under one arrangement.</p>
<p>There is another side. A collateral charge makes it harder to move the mortgage to another lender, and a lender that uses one has a retention advantage. Whether that is the intention or only a consequence depends on the lender, but the effect on borrowers is the same either way.</p>

<h2>The transfer problem at renewal</h2>
<p>Renewal is the one moment at which you can leave your lender without a prepayment penalty, and it is the reason the charge type matters. When a mortgage is registered as a standard charge, a new lender can often take over the existing charge through a transfer, also called an assignment. That route is quick and the new lender commonly absorbs the legal and related costs as part of its offer. When the mortgage is a collateral charge, a transfer usually is not available. The existing charge generally has to be discharged and a new charge registered in the new lender's name.</p>
<p>The difference shows up in cost and time. A new registration can mean new legal work, title registration fees and possibly an appraisal. Many lenders cover some or all of the switching costs to win your business, but this varies, and it is worth confirming in writing, before you commit, who pays for what when the charge has to be discharged and re-registered. If the old charge also secures other products with your current lender, those may need to be dealt with at the same time.</p>
<p>The rule changes that took effect in late 2024 make straight switches easier for many borrowers, since in qualifying cases there is no stress test on a switch at maturity. They do not remove the practical issue of re-registration, and a collateral charge adds a question about how the new lender treats the move, which is covered on the pages about <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a> and the <a href="/stress-test-exemption-switching-lenders/">stress-test exemption</a>.</p>

<h2>Other effects of a large registered amount</h2>
<p>A charge registered for much more than the loan can limit your choices in other ways. Because the amount registered on title is visible to other lenders, it can affect how a second lender views the equity in your home, since some may count the full registered amount as encumbering the property even though you owe less. If you later want a second mortgage or a home equity line from a different lender, that can complicate the application. The effect varies by lender and by how they read title, so it is something to ask about rather than assume.</p>

<h2>How to check which charge you have</h2>
<p>You do not need a lawyer to find out. The following steps usually answer the question.</p>
<ol>
<li><strong>Read your mortgage documents.</strong> Look for the words "collateral" or "standard charge terms" in your commitment letter, your mortgage terms or the documents your lawyer or notary gave you at closing.</li>
<li><strong>Ask your lender.</strong> A direct question, such as whether your mortgage is registered as a standard charge or a collateral charge, and for what amount, should get a direct answer.</li>
<li><strong>Look at title.</strong> A title search through BC's Land Title and Survey Authority shows the charge registered against your property and the amount. A broker can help you read it.</li>
<li><strong>Check what else it secures.</strong> Ask whether the charge secures any other loan, line of credit or credit card with the same lender.</li>
</ol>
<p>Do this well before your renewal date, ideally at the start of the 120-day window in which lenders allow rate holds. It is also a good question to ask when you first take out a mortgage, since it is easier to choose a standard charge at the start than to change the arrangement later.</p>

${callout("Do not assume the worst", "<p>A collateral charge is not a reason to panic, and many borrowers with one renew with their existing lender without any issue. It matters most if your lender's renewal offer is not competitive and you want to move. Knowing the cost of leaving gives you a stronger hand in the negotiation, because you can price your options accurately.</p>")}

<h2>When a collateral charge is useful</h2>
<p>There are good reasons to want one, and they are mostly about borrowing again later.</p>
<ul>
<li><strong>A planned home equity line.</strong> If you expect to use a <a href="/heloc-bc/">home equity line of credit</a> alongside your mortgage, a collateral charge lets the two share one registration, and credit reopens as you pay down principal.</li>
<li><strong>A readvanceable mortgage.</strong> Products that combine a mortgage with a revolving line depend on this kind of registration. The page on <a href="/readvanceable-mortgage/">readvanceable mortgages</a> covers how they work and what they cost.</li>
<li><strong>The Smith Manoeuvre.</strong> This is a strategy in which borrowing against the room that reopens as you pay down your mortgage is used to invest, with the intention of making interest on the borrowing tax-deductible. It requires a readvanceable structure. It also involves borrowing to invest, which carries market and interest-rate risk, and the tax treatment should be confirmed with a tax professional. The <a href="/smith-manoeuvre/">Smith Manoeuvre page</a> explains the strategy and its risks.</li>
<li><strong>Frequent changes.</strong> A household that expects to borrow in stages, for example for renovations over several years, can benefit from not having to re-register each time.</li>
</ul>
<p>For borrowers without such a plan, the flexibility has no value, and the cost of leaving is paid for nothing. That is the central point: the charge type should match your plans.</p>

<h2>How Joshua handles it</h2>
<p>Joshua Resvick checks the charge type when he looks at a renewal, and the lenders he compares, through Xeva Mortgage, are asked how they register their mortgages and what switching would cost. The answers appear in your written <a href="/lender-comparison-report/">Lender Comparison Report</a> next to the rate and the penalty, so a lower rate with a harder exit is visible as such. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. The overall renewal process is in the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>.</p>

${cta({ title: "Find out which charge you have", text: "Send Joshua your mortgage documents or renewal letter and he will tell you how the mortgage is registered and what leaving would involve.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/collateral-charge-mortgage/",
  h1: "Collateral charge mortgages: the fine print that traps switchers",
  lede: "A collateral charge can make switching lenders at renewal slower and pricier. How to tell which charge you have, and why it matters before you sign.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Collateral charge", "/collateral-charge-mortgage/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "What is a collateral charge mortgage?", a: "It is a mortgage registered against your property as security for a separate promise to repay, often for an amount greater than the loan. A standard charge secures the specific mortgage on its stated terms. The difference matters mostly when you want to move the mortgage or borrow again." },
    { q: "Can I switch lenders if I have a collateral charge?", a: "Yes, but the charge usually has to be discharged and a new one registered, so there can be legal, registration and appraisal costs that a transfer would avoid. Many lenders cover some of these costs. Confirm who pays what in writing before you commit." },
    { q: "How do I know whether I have a collateral charge?", a: "Check your mortgage documents for the word collateral, ask your lender whether the mortgage is a standard or a collateral charge and for what amount, or look at the charge on title through BC's Land Title and Survey Authority. A broker can help you read it." },
    { q: "Is a collateral charge bad?", a: "Not by itself. It is useful if you plan to borrow again, for example through a home equity line or a readvanceable mortgage. It is a drawback if you simply want the lowest rate and the freedom to switch, since moving costs more. The charge should match your plans." },
    { q: "Does the stress-test exemption apply to a collateral charge?", a: "Conditions apply to the exemption for straight switches, and a collateral charge adds a question about how the new lender treats the move. Confirm with the new lender before relying on it, and see the exemption guide for the conditions." }
  ]
};
