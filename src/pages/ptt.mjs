import { short } from "../lib/short.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "BC property transfer tax is 1 percent on the first $200,000 and 2 percent up to $2 million, with higher rates above that. Eligible first-time buyers save up to $8,000 on homes up to $835,000, and newly built homes can be fully exempt up to $1.1 million.", who: "Anyone buying in BC who wants to know the tax due on completion day.", next: "Enter your price in the calculator below, then plan the rest of your cash with the <a href=\"/closing-costs-bc/\">BC closing costs guide</a>." })}

<h2>Calculate your BC property transfer tax</h2>
<p>The property transfer tax is a one-time tax paid to the Province of British Columbia when a property changes hands. It's due when the transfer is registered at the land title office. Your lawyer or notary collects it from you as part of your closing funds. It's one of the biggest costs on completion that buyers forget to plan for. For many first-time buyers, it can be reduced or removed.</p>
<div class="tools">${TOOLS.ptt()}</div>
<p>The calculator works out the general tax and the extra tax on very high-value homes. Then it applies whichever exemption fits. The sections below explain each step, so you can check the math yourself.</p>

<h2>How the general tax is calculated</h2>
<p>The tax is charged on the property's fair market value. In a normal arm's-length purchase, that's the price you pay. It works in bands, like income tax. Each rate applies only to the slice of value inside its band.</p>
<ul>
<li><strong>1 percent</strong> of the value up to and including $200,000.</li>
<li><strong>2 percent</strong> of the part above $200,000, up to and including $2,000,000.</li>
<li><strong>3 percent</strong> of the part above $2,000,000.</li>
<li><strong>A further 2 percent</strong> on the residential part of the value above $3,000,000.</li>
</ul>
<p>Take a $750,000 purchase. The first $200,000 costs $2,000. The remaining $550,000 at 2 percent costs $11,000. So the general tax is $13,000. The tax doesn't depend on how much you borrow or put down. It depends only on the value.</p>

<h2>The first-time buyers' exemption</h2>
<p>Eligible first-time buyers can have the tax removed on the first $500,000 of value. That saves up to $8,000. The exemption has a price ceiling and a phase-out, and this is where most online summaries go wrong.</p>
<ul>
<li>At a fair market value of <strong>$500,000 or less</strong>, the tax is fully exempt.</li>
<li>From above $500,000 up to <strong>$835,000</strong>, the exemption is a flat $8,000. That equals the tax on the first $500,000. You still pay the tax on the rest.</li>
<li>Between $835,000 and <strong>$860,000</strong>, the exemption shrinks steadily and reaches zero at $860,000.</li>
<li>At $860,000 and above, there's no exemption.</li>
</ul>
<p>Keep this in mind: a home under $835,000 isn't exempt from the whole tax. A $750,000 home still carries $5,000 in tax after the exemption.</p>
<p>The Province's rules have more conditions. The property must be 0.5 hectares or smaller and used only as your main home. There are also tests on residency and your ownership history. Whether you qualify depends on those tests. Read the Province's published criteria for first-time buyers before you rely on the result, and ask your lawyer or notary to confirm. These exemption rules took effect on April 1, 2024.</p>
<p>The first-time buyers' exemption is one of several programs you can combine. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs guide</a> explains how it stacks with the federal programs. The <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> shows where it fits in the overall sequence.</p>

<h2>The newly built home exemption</h2>
<p>A separate exemption applies to new homes. You can get it whether or not you're a first-time buyer. It's a full exemption when the fair market value is $1,100,000 or less. Above that, it phases out evenly over the next $50,000 and ends at $1,150,000.</p>
<p>The buyer must move in within 92 days of registration. They must live there as their main home for the rest of the first year. The Province brought in the current thresholds on April 1, 2024.</p>
<p>New homes carry other taxes this calculator doesn't cover. GST applies to most newly built homes, and there are federal rebates for first-time buyers. The <a href="/presale-mortgages-bc/">presale and new-build mortgage guide</a> covers that side of the purchase.</p>

<h2>Worked examples</h2>
<p>These use the same rules as the calculator. Run each one through the tool above to confirm.</p>
<ul>
<li><strong>$750,000, not a first-time buyer:</strong> general tax $13,000, no exemption, tax payable $13,000.</li>
<li><strong>$750,000, first-time buyer:</strong> general tax $13,000, exemption $8,000, tax payable $5,000.</li>
<li><strong>$850,000, first-time buyer:</strong> general tax $15,000, partial exemption $3,200, tax payable $11,800.</li>
<li><strong>$900,000, first-time buyer:</strong> general tax $16,000, no exemption (over $860,000), tax payable $16,000.</li>
<li><strong>$1,000,000, newly built:</strong> general tax $18,000, full exemption $18,000, tax payable $0.</li>
<li><strong>$1,125,000, newly built:</strong> general tax $20,500, half exemption $10,250, tax payable $10,250.</li>
<li><strong>$3,500,000, residential:</strong> general tax $83,000 plus $10,000 additional tax, no exemption, tax payable $93,000.</li>
</ul>
<p>The last row shows the extra 2 percent. The general tax on $3,500,000 is $83,000. The additional tax is 2 percent of the $500,000 above $3,000,000, or $10,000.</p>
<h3>When only one buyer qualifies</h3>
<p>Say two people buy together and only one is a qualifying first-time buyer. The exemption applies only to that buyer's share of the property. For equal owners, that's half.</p>
<p>On a $750,000 home with one qualifying buyer, the exemption is $4,000 instead of $8,000. The tax payable is $9,000. Use the share selector in the calculator to model it. This surprises many couples, so know it before you choose how to take title.</p>

<h2>What the calculator does not include</h2>
<p>The tool follows the Province's rules for standard cases. It doesn't model properties over 0.5 hectares, which have their own treatment. It doesn't include the additional tax on foreign nationals, foreign corporations and certain trustees in designated areas of BC. It also leaves out any other tax or fee on completion. The Province's own assessment is the final word. Your lawyer or notary will confirm the exact amount before closing.</p>

<h2>Where it fits in your closing costs</h2>
<p>The transfer tax is only one item. A realistic cash plan also covers your down payment and legal fees. Add an appraisal if the lender needs one, a home inspection and title insurance. Then there are adjustments for property taxes and utilities, plus moving costs.</p>
<p>Most of those depend on quotes you'll gather. So the <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> asks you to enter them instead of guessing. The <a href="/closing-costs-bc/">BC closing costs guide</a> lists every item. The <a href="/down-payment-guide-bc/">down payment guide</a> explains how much to save and how lenders check where it came from.</p>
<p>Other tools are on the <a href="/mortgage-calculators/">mortgage calculators</a> page. The payment, affordability and CMHC premium calculators complete the picture.</p>

${callout("Check your own numbers", "<p>Whether you qualify for an exemption turns on details of your history and the property. A mistake can be costly to fix after closing. If you're not sure, ask your lawyer or notary before you remove an offer condition. Bring the question to Joshua when you plan your cash needs. You can <a href=\"/contact/\">contact him here</a>.</p>")}

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
