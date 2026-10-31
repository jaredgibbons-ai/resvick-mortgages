import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";

// Embed the live offset comparator once it exists (built separately); the page stands on its own without it.
const tool = TOOLS.offset ? TOOLS.offset() : "";

const body = `
<h2>The short answer: it depends on the method, and the method depends on the lender</h2>
<p>Many homes in the Fraser Valley come with a basement suite, a laneway home or a second unit, and most buyers want to know the same thing: will a lender let the rent help me qualify? The honest answer is a method, not a single number. Lenders do not simply add the rent to your income. Each one applies a formula that credits a share of it, and the share, the formula and the paperwork all differ from lender to lender.</p>
<p>That difference matters because the same suite, with the same tenant paying the same rent, can raise your approval by a modest amount at one lender and by a large amount at another. It can also be worth nothing at all. This page explains the two common methods, shows the same suite run through each, covers the rule that decides whether the rent counts at all, and lists the proof a lender will ask for. Percentages here are typical ranges, not promises, and your own file is the only thing that produces a real answer.</p>

<h2>The two methods side by side</h2>
<p><strong>Rental offset.</strong> A share of the rent, typically somewhere between 50 and 80 percent, is subtracted from the property's carrying costs. The mortgage payment, property tax and heat are reduced by that credit, and only what remains counts against your income in the ratios. Offset tends to help most when a suite cash-flows well.</p>
<p><strong>Rental add-back.</strong> A share of the gross rent, typically about 50 percent at many lenders and higher at some, is added to your income. The full carrying costs of the property then count as expenses. Because the credit enters as income, it is multiplied by the ratio limit (39 percent for housing costs) before it affects the payment you can carry, so add-back usually produces a smaller increase than an offset at the same percentage.</p>
<p>Published sources do not agree on a single set of percentages. Some lenders and broker guides describe offsets of 50 to 80 percent and add-backs of about 50 percent, while others describe lenders going higher on either method, and the big banks often sit near 50 to 60 percent. The practical lesson is that the percentage is a lender policy, so you ask which lender applies which method before you choose one.</p>

<h2>A worked example: $1,800 a month in rent</h2>
<p>Consider an illustrative household with $120,000 of gross income, or $10,000 a month. Property tax and heat on the home come to $500 a month, there are no other debts, and the suite rents for $1,800 a month. The contract rate is 4.50 percent, so the qualifying rate is 6.50 percent, with a 25-year amortization. The lender ratios are 39 percent of gross income for housing costs and 44 percent for all debts. These figures are for illustration only and are not a quote or a prediction.</p>
<div class="table-wrap"><table>
<thead><tr><th>How the suite is counted</th><th>Credit from the rent</th><th>Payment the lender can use</th><th>Approximate maximum mortgage</th></tr></thead>
<tbody>
<tr><th scope="row">Suite ignored (or unregistered)</th><td>$0</td><td>$3,400</td><td>about $507,600</td></tr>
<tr><th scope="row">Add-back at 50%</th><td>$900 added to income</td><td>$3,751</td><td>about $560,000</td></tr>
<tr><th scope="row">Add-back at 100%</th><td>$1,800 added to income</td><td>$4,102</td><td>about $612,400</td></tr>
<tr><th scope="row">Offset at 50%</th><td>$900 off housing costs</td><td>$4,300</td><td>about $642,000</td></tr>
<tr><th scope="row">Offset at 80%</th><td>$1,440 off housing costs</td><td>$4,840</td><td>about $722,600</td></tr>
</tbody></table></div>
<p>Look at the spread. With the suite ignored, this household is approved for roughly $507,600. With the same suite credited at an offset of 80 percent, the figure is about $722,600, a difference of more than $215,000 from the choice of lender policy alone. The housing ratio of 39 percent is the limit that binds in every row, which is why the total debt ratio does not change the outcome here. Different incomes, debts and property costs will move the numbers, and the offset figures assume the lender allows the credit to exceed the home's tax and heat costs, which not every lender does.</p>
<p>You can run your own figures in the <a href="/mortgage-calculators/#offset">rental offset and add-back comparator</a>. It uses the same qualifying rate and ratios as the affordability calculator, so the two tools agree with each other. For the base calculation without a suite, see <a href="/how-much-mortgage-can-i-afford/">how much mortgage you can afford</a>.</p>
${tool}

<h2>The registered-suite rule: an unregistered suite usually counts as zero</h2>
<p>Everything above assumes the suite is legal. For A lenders, rent from a suite that is not legal or registered with the municipality generally counts as zero, however reliable the tenant and however long the suite has been rented. The suite typically needs to be self-contained, which means its own entrance, kitchen and bathroom, and it needs to meet local zoning and building rules.</p>
<p>This is the single most important point for buyers in markets where unregistered suites are common. A listing that advertises a suite does not tell you whether the suite is legal. Ask for the permit history, ask the municipality what it has on file for the address, and have your realtor and lawyer confirm it before you rely on the rent in your numbers. If the suite is not legal, you may still be able to buy the home, but you would qualify on your income alone, and some B lenders may look at the rent differently. That is a different conversation, covered on the <a href="/b-lender-mortgage-bc/">B-lender page</a>.</p>
<p>Provincial legislation passed in 2023 changed what many BC municipalities must allow in single-family zones, including secondary suites and detached accessory units. That makes legal suites easier to create than they used to be, but it does not make an existing unpermitted suite legal. Permits, inspections, servicing and local conditions still apply, and the municipality's own rules are the final word.</p>

<h2>The proof package lenders ask for</h2>
<p>When the suite is legal and rented, the lender wants to see that the rent is real. Expect to provide the following:</p>
<ul>
<li><strong>A signed lease</strong> for the suite that is current and in effect.</li>
<li><strong>Deposit history,</strong> meaning bank statements that show the rent arriving on the dates the lease says it should.</li>
<li><strong>Your tax filing for rental income,</strong> which for most owners is the T776 statement of real estate rentals, once you have filed one.</li>
<li><strong>The property tax bill and insurance details</strong> for the whole property.</li>
</ul>
<p>The <a href="/mortgage-application-checklist/">mortgage application checklist</a> lists the full document set. If the suite has not been rented for long, lenders often discount it. With fewer than about two years of documented rent, many lenders cap the credit at 50 percent, or they use an appraiser's estimate of market rent with an allowance for vacancy instead of your lease. Rent paid by a family member is commonly excluded or treated cautiously, so an arrangement with a relative needs to be disclosed early.</p>

<h2>The insured two-unit nuance</h2>
<p>If your mortgage will be insured by CMHC, the insurer has its own rental income rules. According to CMHC's rental income reference sheet (2024), for an owner-occupied property with two units, the insurer allows an approach that credits up to 100 percent of gross rental income. Owner-occupied properties with three or four units follow different approaches, one crediting up to 50 percent of gross rent and the other based on net rental income.</p>
<p>Read that carefully. The figure is a ceiling, not an entitlement. The lender making the loan still sets its own policy, and many lenders credit less than the insurer would allow. The 100 percent figure also applies to a legal, self-contained two-unit home that you will live in. It is not a rule that every lender will count every dollar of rent. When you are comparing offers, ask which percentage the lender will actually use on your file.</p>

<h2>Buying with a suite versus adding one later</h2>
<p>There are two routes to a suited home. In the first, you buy a home that already has a legal suite, and the rent helps you qualify from the start. In the second, you buy a home and add a suite afterwards. The rent from a suite that does not exist yet cannot help you qualify today, though a lender may consider a projected market rent in some cases. If the plan is to build, the financing is a separate product, described on the page about the <a href="/secondary-suite-refinance/">CMHC secondary suite refinance</a>, and the timing matters, because approval is needed before construction starts.</p>
<p>If you are stretching to buy and the suite is what makes the numbers work, keep the plan realistic. Lenders qualify you on the rule, and you still pay the mortgage when a tenant leaves. Keep a reserve for vacancy, and make sure the home is one you could carry in a short gap. Buyers using a small down payment can read about how the suite affects the picture on the page about <a href="/buying-with-5-percent-down/">buying with 5 percent down</a>.</p>

<h2>If the suite is part of an investment</h2>
<p>Everything on this page applies to owner-occupied homes. If you are buying a property mainly to rent it out, or you want to borrow against a rental you already own, lenders apply different limits to the loan amount and often a different method for the rent. The <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a> covers purchases, and the page on how to <a href="/refinance-rental-property/">refinance a rental property</a> covers borrowing against one. A broker can match the property to the lender whose policy on rent suits it.</p>

${callout("What to do next", "<p>Before you make an offer on a suited home, ask your broker to run the file under more than one lender's method. A lender that credits 80 percent of the rent as an offset and a lender that credits 50 percent as an add-back can be hundreds of thousands of dollars apart on the same suite. Tell Joshua whether the suite is registered, what it rents for and how long it has been rented, and he will tell you what each route is likely to produce. You can <a href=\"/contact/\">contact him</a> with those three facts at any time.</p>")}

${cta({ title: "Run your suite through real lender policies", text: "Use the comparator above to see the range, then book a 15-minute call. Joshua will tell you which lenders are likely to credit your rent and how much, before you write an offer." })}
`;

export default {
  slug: "/how-much-suite-income-will-a-lender-count/",
  h1: "How much suite income will a lender count?",
  lede: "A legal suite can lift what you qualify for, or count for nothing. Here is the offset and add-back math, the registered-suite rule and the proof lenders ask for.",
  crumbs: [["Home", "/"], ["How much can I afford?", "/how-much-mortgage-can-i-afford/"], ["Suite income", "/how-much-suite-income-will-a-lender-count/"]],
  nav: "/refinance-mortgage-bc/",
  calc: !!tool,
  body,
  faqs: [
    { q: "How much of my suite rent will a lender count?", a: "It depends on the lender and the method. A rental offset typically credits 50 to 80 percent of the rent against housing costs, and an add-back typically adds about 50 percent to income, with some lenders going higher. Big banks often sit near 50 to 60 percent. Ask the lender, not a general rule." },
    { q: "Does an unregistered or illegal suite help me qualify?", a: "Generally not at A lenders, where rent from a suite that is not legal or registered typically counts as zero. The suite usually needs to be self-contained and permitted by the municipality. Confirm the permit history before you rely on the rent, because a listing that mentions a suite does not prove it is legal." },
    { q: "What proof of rent will a lender want?", a: "Typically a signed lease, bank statements showing the rent being deposited, and your rental tax filing, the T776, once you have one. With under about two years of documented rent, many lenders cap the credit at 50 percent or use an appraiser's market rent estimate instead of the lease." },
    { q: "What is the difference between offset and add-back?", a: "An offset subtracts a share of the rent from the property's carrying costs. An add-back adds a share of the rent to your income and counts the full costs as debts. At the same percentage, an offset usually raises your approval by more, because the credit is not scaled down by the ratio limit." },
    { q: "Can I count rent from a suite I plan to build?", a: "Usually not for the purchase itself, since the rent does not exist yet. Some lenders may consider a projected market rent in limited cases. Financing the construction is a separate product, and for insured loans the approval must come before construction starts, so talk to a broker before you build." }
  ]
};
