import { cta, callout } from "../lib/site.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { short } from "../lib/short.mjs";

// Embed the live offset comparator once it exists (built separately); the page stands on its own without it.
const tool = TOOLS.offset ? TOOLS.offset() : "";

const body = `
${short({
  answer: "It depends on the lender's method. An offset often credits about 50 to 80 percent of the rent against your housing costs. An add-back often adds about 50 percent of the rent to your income. Rent from an unregistered suite usually counts as zero at A lenders.",
  who: "Buyers looking at homes with a basement suite, laneway home or second unit, and owners thinking of adding one.",
  next: "Run your numbers in the <a href=\"/mortgage-calculators/#offset\">offset and add-back comparator</a>, and confirm the suite's permit history before you write an offer."
})}
<h2>The short answer: it depends on the method, and the method depends on the lender</h2>
<p>Suites are everywhere in the Fraser Valley. Many homes come with a basement suite, a laneway home or a second unit. Most buyers want to know the same thing. Will a lender let the rent help me qualify?</p>
<p>The honest answer is a method, not one number. Lenders don't just add the rent to your income. Each one uses a formula that counts a share of it. The share, the formula and the paperwork all differ from lender to lender.</p>
<p>That matters. The same suite, with the same tenant and the same rent, can raise your approval a little at one lender and a lot at another. It can also count for nothing.</p>
<p>This page explains the two common methods. It runs the same suite through each one. It covers the rule that decides whether the rent counts at all, and it lists the proof a lender will ask for. The percentages here are typical ranges, not promises. Only your own file gives a real answer.</p>

<h2>The two methods side by side</h2>
<p><strong>Rental offset.</strong> A share of the rent, often between 50 and 80 percent, is taken off the home's carrying costs. Your mortgage payment, property tax and heat are reduced by that credit. Only what's left counts against your income in the ratios. Offset tends to help most when a suite brings in good rent.</p>
<p><strong>Rental add-back.</strong> A share of the gross rent is added to your income. At many lenders that's about 50 percent, and some go higher. Then the full costs of the home count as expenses.</p>
<p>Because the credit shows up as income, it gets multiplied by the ratio limit first. That limit is 39 percent for housing costs. So an add-back usually raises your approval less than an offset at the same percentage.</p>
<p>Published sources don't agree on one set of percentages. Some lenders and broker guides describe offsets of 50 to 80 percent and add-backs of about 50 percent. Others say some lenders go higher on either method. The big banks often sit near 50 to 60 percent.</p>
<p>The lesson is simple. The percentage is a lender's policy. So ask which lender uses which method before you pick one.</p>

<h2>A worked example: $1,800 a month in rent</h2>
<p>Take an example household with $120,000 of gross income. That's $10,000 a month. Property tax and heat on the home cost $500 a month. There are no other debts. The suite rents for $1,800 a month.</p>
<p>The contract rate is 4.50 percent, so the qualifying rate is 6.50 percent. The amortization is 25 years. The lender ratios are 39 percent of gross income for housing costs and 44 percent for all debts. These numbers are only an example. They aren't a quote or a forecast.</p>
<div class="table-wrap"><table>
<thead><tr><th>How the suite is counted</th><th>Credit from the rent</th><th>Payment the lender can use</th><th>Rough maximum mortgage</th></tr></thead>
<tbody>
<tr><th scope="row">Suite ignored (or unregistered)</th><td>$0.</td><td>$3,400.</td><td>About $507,600.</td></tr>
<tr><th scope="row">Add-back at 50%</th><td>$900 added to income.</td><td>$3,751.</td><td>About $560,000.</td></tr>
<tr><th scope="row">Add-back at 100%</th><td>$1,800 added to income.</td><td>$4,102.</td><td>About $612,400.</td></tr>
<tr><th scope="row">Offset at 50%</th><td>$900 off housing costs.</td><td>$4,300.</td><td>About $642,000.</td></tr>
<tr><th scope="row">Offset at 80%</th><td>$1,440 off housing costs.</td><td>$4,840.</td><td>About $722,600.</td></tr>
</tbody></table></div>
<p>Look at the spread. With the suite ignored, this household is approved for about $507,600. With the same suite counted at an 80 percent offset, it's about $722,600. That's more than $215,000 apart, from the lender's policy alone.</p>
<p>The 39 percent housing ratio is the limit that binds in every row. That's why the total debt ratio doesn't change the result here. Different incomes, debts and costs will move the numbers. The offset rows also assume the lender lets the credit exceed the home's tax and heat costs. Not every lender does.</p>
<p>You can run your own numbers in the <a href="/mortgage-calculators/#offset">rental offset and add-back comparator</a>. It uses the same qualifying rate and ratios as the affordability calculator, so the two tools agree. For the base math without a suite, see <a href="/how-much-mortgage-can-i-afford/">how much mortgage you can afford</a>.</p>
${tool}

<h2>The registered-suite rule: an unregistered suite usually counts as zero</h2>
<p>Everything above assumes the suite is legal. At A lenders, rent from a suite that isn't legal or registered with the city generally counts as zero. It doesn't matter how reliable the tenant is or how long it's been rented.</p>
<p>The suite usually needs to be self-contained. That means its own entrance, kitchen and bathroom. It also needs to meet local zoning and building rules.</p>
<p>This is the most important point for buyers in markets where unregistered suites are common. A listing that mentions a suite doesn't tell you it's legal. Ask for the permit history. Ask the city what it has on file for the address. Have your realtor and lawyer confirm it before you count on the rent.</p>
<p>If the suite isn't legal, you may still be able to buy the home. But you'd qualify on your income alone. Some B lenders may treat the rent differently. That's a different talk, covered on the <a href="/b-lender-mortgage-bc/">B-lender page</a>.</p>
<p>A 2023 provincial law changed what many BC cities must allow in single-family zones. That includes suites and small detached units. It makes legal suites easier to create than before. But it doesn't make an existing unpermitted suite legal. Permits, inspections, servicing and local rules still apply. The city's own rules are the final word.</p>

<h2>The proof lenders ask for</h2>
<p>When the suite is legal and rented, the lender wants to see that the rent is real. Expect to provide these.</p>
<ul>
<li><strong>A signed lease</strong> for the suite that's current and in effect.</li>
<li><strong>Deposit history.</strong> That means bank statements showing the rent arriving on the dates the lease says.</li>
<li><strong>Your rental income tax filing.</strong> For most owners, that's the T776 statement of real estate rentals, once you've filed one.</li>
<li><strong>The property tax bill and insurance details</strong> for the whole property.</li>
</ul>
<p>The <a href="/mortgage-application-checklist/">mortgage application checklist</a> lists the full set. If the suite hasn't been rented for long, lenders often count less of it. With under about two years of documented rent, many lenders cap the credit at 50 percent. Others use an appraiser's estimate of market rent, minus an allowance for vacancy, instead of your lease.</p>
<p>Rent paid by a family member is often left out or treated with caution. If you rent to a relative, say so early.</p>

<h2>The insured two-unit nuance</h2>
<p>If CMHC will insure your mortgage, the insurer has its own rental income rules. CMHC's rental income reference sheet (2024) covers owner-occupied homes with two units. For those, it allows an approach that credits up to 100 percent of gross rent.</p>
<p>Owner-occupied homes with three or four units follow different approaches. One credits up to 50 percent of gross rent. The other is based on net rental income.</p>
<p>Read that carefully. The figure is a ceiling, not a promise. The lender still sets its own policy, and many credit less than the insurer would allow. The 100 percent figure also only applies to a legal, self-contained two-unit home that you live in. It doesn't mean every lender counts every dollar of rent. When you compare offers, ask which percentage the lender will really use on your file.</p>

<h2>Buying with a suite versus adding one later</h2>
<p>There are two ways to end up in a suited home. You can buy a home that already has a legal suite. Then the rent helps you qualify from day one. Or you can buy a home and add a suite later.</p>
<p>Rent from a suite that doesn't exist yet can't help you qualify today. A lender may consider a projected market rent in some cases. If you plan to build, the financing is a separate product. It's described on the page about the <a href="/secondary-suite-refinance/">CMHC secondary suite refinance</a>. Timing matters, because approval is needed before building starts.</p>
<p>If you're stretching to buy and the suite is what makes the numbers work, stay realistic. Lenders qualify you on the rules, but you still pay the mortgage when a tenant leaves. Keep a cushion for vacancy. Make sure you could carry the home through a short gap. If you have a small down payment, the page on <a href="/buying-with-5-percent-down/">buying with 5 percent down</a> shows how a suite fits in.</p>

<h2>If the suite is part of an investment</h2>
<p>Everything on this page applies to homes you live in. If you're buying mainly to rent out, lenders use different limits on the loan. They often use a different method for the rent too. The same goes if you want to borrow against a rental you already own.</p>
<p>The <a href="/investment-property-mortgages-bc/">investment property mortgage guide</a> covers purchases. The page on how to <a href="/refinance-rental-property/">refinance a rental property</a> covers borrowing against one. A broker can match the property to a lender whose rent policy suits it.</p>

${callout("What to do next", "<p>Before you make an offer on a suited home, ask your broker to run the file under more than one lender's method. Picture one lender that credits 80 percent of the rent as an offset. Picture another that credits 50 percent as an add-back. On the same suite, they can be hundreds of thousands of dollars apart. Tell Joshua three things. Is the suite registered? What does it rent for? How long has it been rented? He'll tell you what each route is likely to produce. You can <a href=\"/contact/\">contact him</a> with those three facts any time.</p>")}

${cta({ title: "Run your suite through real lender policies", text: "Use the comparator above to see the range, then book a 15-minute call. Joshua will tell you which lenders are likely to credit your rent, and how much, before you write an offer." })}
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
