import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Calculate your BC property transfer tax</h2>
<p>The property transfer tax is a one-time tax paid to the Province of British Columbia when a property changes hands. It is due when the transfer is registered at the land title office, and your lawyer or notary collects it from you as part of your closing funds. It is one of the largest costs on completion that buyers forget to plan for, and for many first-time buyers it can be reduced or removed.</p>
<div class="tools">${TOOLS.ptt()}</div>
<p>The calculator works out the general tax, the additional tax on very high-value residential property, and then whichever exemption applies. The sections below explain each step, so you can check the arithmetic yourself.</p>

<h2>How the general tax is calculated</h2>
<p>The tax is charged on the fair market value of the property, which in an ordinary arm's-length purchase is the price you pay. It is progressive, in the same way income tax is: each rate applies only to the slice of value inside its band.</p>
<ul>
<li><strong>1 percent</strong> of the value up to and including $200,000.</li>
<li><strong>2 percent</strong> of the portion above $200,000, up to and including $2,000,000.</li>
<li><strong>3 percent</strong> of the portion above $2,000,000.</li>
<li><strong>A further 2 percent</strong> on the residential portion of the value above $3,000,000.</li>
</ul>
<p>For a $750,000 purchase, the first $200,000 costs $2,000, and the remaining $550,000 at 2 percent costs $11,000. The general tax is $13,000. Nothing about the tax depends on how much you borrow or how much you put down; it depends only on the value.</p>

<h2>The first-time buyers' exemption</h2>
<p>Eligible first-time buyers can have the tax removed on the first $500,000 of value, which saves up to $8,000. The exemption has a price ceiling and a phase-out, and this is where most online summaries go wrong.</p>
<ul>
<li>At a fair market value of <strong>$500,000 or less</strong>, the tax is fully exempt.</li>
<li>From above $500,000 up to <strong>$835,000</strong>, the exemption is a flat $8,000, which equals the tax on the first $500,000. The tax on the rest is still payable.</li>
<li>Between $835,000 and <strong>$860,000</strong>, the exemption shrinks steadily and reaches zero at $860,000.</li>
<li>At $860,000 and above, there is no exemption.</li>
</ul>
<p>The point to keep in mind is that a home under $835,000 is not exempt from the whole tax. A $750,000 home still carries $5,000 in tax after the exemption. The Province's rules also require that the property be 0.5 hectares or smaller and used only as your principal residence, and they include tests on residency and on your ownership history. Whether you qualify depends on those tests, so read the Province's published criteria for first-time buyers before you rely on the result, and ask your lawyer or notary to confirm. The exemption rules took effect on April 1, 2024.</p>
<p>The first-time buyers' exemption is one of several programs that can be combined. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs guide</a> explains how it stacks with the federal programs, and the <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> shows where it fits in the overall sequence.</p>

<h2>The newly built home exemption</h2>
<p>A separate exemption applies to new homes, and it is available whether or not you are a first-time buyer. It is a full exemption when the fair market value is $1,100,000 or less. Above that, it phases out evenly over the next $50,000 and is eliminated at $1,150,000. The buyer must move in within 92 days of registration and live there as a principal residence for the rest of the first year. The Province introduced the current thresholds on April 1, 2024.</p>
<p>New homes carry other taxes that this calculator does not cover. GST applies to most newly built homes, and there are federal rebates for first-time buyers. The <a href="/presale-mortgages-bc/">presale and new-build mortgage guide</a> covers that side of the purchase.</p>

<h2>Worked examples</h2>
<p>These use the same rules as the calculator. Run each one through the tool above to confirm.</p>
<div class="table-wrap"><table><thead><tr><th>Purchase</th><th>General tax</th><th>Exemption</th><th>Tax payable</th></tr></thead><tbody>
<tr><td>$750,000, not a first-time buyer</td><td>$13,000</td><td>None</td><td>$13,000</td></tr>
<tr><td>$750,000, first-time buyer</td><td>$13,000</td><td>$8,000</td><td>$5,000</td></tr>
<tr><td>$850,000, first-time buyer</td><td>$15,000</td><td>$3,200 (partial)</td><td>$11,800</td></tr>
<tr><td>$900,000, first-time buyer</td><td>$16,000</td><td>None (over $860,000)</td><td>$16,000</td></tr>
<tr><td>$1,000,000, newly built</td><td>$18,000</td><td>$18,000 (full)</td><td>$0</td></tr>
<tr><td>$1,125,000, newly built</td><td>$20,500</td><td>$10,250 (half)</td><td>$10,250</td></tr>
<tr><td>$3,500,000, residential</td><td>$83,000 + $10,000</td><td>None</td><td>$93,000</td></tr>
</tbody></table></div>
<p>The last row shows the extra 2 percent: the general tax on $3,500,000 is $83,000, and the additional tax is 2 percent of the $500,000 above $3,000,000, or $10,000.</p>
<h3>When only one buyer qualifies</h3>
<p>If two people buy together and only one is a qualifying first-time buyer, the exemption applies to that buyer's share of the property. For equal owners, that is half. On a $750,000 home with one qualifying buyer, the exemption is $4,000 instead of $8,000, and the tax payable is $9,000. Use the share selector in the calculator to model it. This catches many couples by surprise, so it is worth knowing before you choose how to take title.</p>

<h2>What the calculator does not include</h2>
<p>The tool follows the Province's rules for the standard cases. It does not model properties over 0.5 hectares, which have their own treatment. It does not include the additional property transfer tax that applies to foreign nationals, foreign corporations and certain trustees in designated areas of BC, or any other tax or fee on completion. The Province's own assessment is the final word, and your lawyer or notary will confirm the exact amount before closing.</p>

<h2>Where it fits in your closing costs</h2>
<p>The transfer tax is only one item. A realistic cash plan also includes your down payment, legal fees, an appraisal if the lender requires one, a home inspection, title insurance, adjustments for property taxes and utilities, and moving costs. Most of those depend on quotes you will gather, so the <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> asks you to enter them rather than guessing. The <a href="/closing-costs-bc/">BC closing costs guide</a> lists every item, and the <a href="/down-payment-guide-bc/">down payment guide</a> explains how much you need to save and how lenders check where it came from.</p>
<p>Other tools are on the <a href="/mortgage-calculators/">mortgage calculators</a> page, including the payment, affordability and CMHC premium calculators that complete the picture.</p>

${callout("Check your own numbers", "<p>Qualifying for an exemption turns on details of your history and the property, and a mistake can be expensive to correct after closing. If you are not sure, ask your lawyer or notary before you remove an offer condition, and bring the question to Joshua when you plan your cash needs. You can <a href=\"/contact/\">contact him here</a>.</p>")}

${cta({ title: "Planning the cash you will need to close?", text: "Book a 15-minute call. Joshua will go through the transfer tax, your down payment and the other closing costs with your real figures." })}
`;

export default {
  slug: "/bc-property-transfer-tax-calculator/",
  h1: "BC property transfer tax calculator",
  lede: "Work out the tax on your purchase, with the first-time buyers' and newly built home exemptions built in, and see the rules behind the number.",
  crumbs: [["Home", "/"], ["Calculators", "/mortgage-calculators/"], ["BC property transfer tax calculator", "/bc-property-transfer-tax-calculator/"]],
  nav: "/mortgage-calculators/", calc: true, body,
  faqs: [
    { q: "Who pays the BC property transfer tax?", a: "The buyer pays it. It is due when the transfer is registered at the land title office, and your lawyer or notary normally collects it from you with the rest of your closing funds, then remits it to the Province on your behalf. Plan for it in your cash-to-close total." },
    { q: "Is a $750,000 home exempt for first-time buyers?", a: "Not entirely. The exemption covers the tax on the first $500,000, which is up to $8,000. On a $750,000 home the general tax is $13,000, so $5,000 is still payable for a qualifying first-time buyer. Only homes at $500,000 or less are fully exempt." },
    { q: "Can I get both the first-time buyers' and the newly built exemptions?", a: "They are separate programs with separate conditions. As a planning estimate the calculator applies whichever exemption is larger. Your lawyer or notary confirms which one applies when the transfer is filed, so ask them before you finalize your closing budget." },
    { q: "Does the tax depend on my mortgage?", a: "No. It depends on the fair market value of the property, not on your down payment or loan amount. A bigger down payment does not reduce it, and borrowing more does not increase it. The tax is calculated on the value of the property being transferred." },
    { q: "When is the tax actually paid?", a: "At completion. It is part of the funds you provide to your lawyer or notary before the transfer is registered, so it belongs in your cash-to-close plan from the start, alongside your down payment, legal fees and the other closing costs you will need to cover." }
  ]
};
