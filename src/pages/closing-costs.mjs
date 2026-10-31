import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Your down payment is not the whole bill. On completion day you also pay the BC property transfer tax, legal fees, adjustments and a handful of smaller costs.", who: "Anyone buying in BC, especially first-time buyers. Buying a new build? The <a href='/presale-mortgages-bc/'>presale guide</a> covers GST.", next: "Add up your own cash to close with the calculator on this page." })}
<h2>Your down payment is only part of the cash you need</h2>
<p>Most first-time buyers in British Columbia plan carefully for the down payment. Then they find that completion day needs more. Closing costs are the payments that arrive on top of the down payment. They include a government tax, professional fees, adjustments between you and the seller, and a handful of smaller items. They are not hidden. But they are easy to miss, because no single document lists them together.</p>
<p>This guide goes through each line. It shows which ones can be worked out by rule and which depend on quotes. It ends with a calculator that adds them up. The aim is a single number for the cash you need on completion day, so there are no surprises when it is too late to change your plan. For the down payment itself, the <a href="/down-payment-guide-bc/">down payment guide</a> covers the tiers and the sources.</p>

<h2>Every line item, explained</h2>
<h3>BC property transfer tax</h3>
<p>This is the largest closing cost for most buyers. It is also the one item that can be worked out exactly. The general rates are 1 percent on the first $200,000 of value and 2 percent on the portion from $200,000 to $2,000,000. They are 3 percent above $2,000,000, with a further 2 percent on the residential portion above $3,000,000.</p>
<p>Two exemptions can reduce it. The first-time buyers' exemption removes the tax on the first $500,000, up to $8,000, for eligible buyers of a home valued at $835,000 or less. It phases out to zero at $860,000. The newly built home exemption is a full exemption up to $1,100,000, phasing out by $1,150,000. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> works it out for your price.</p>
<h3>Legal fees or notary fees</h3>
<p>A lawyer or notary handles the transfer of title and registers your mortgage. They also collect and pass on the transfer tax. Fees vary by professional and by how complex the deal is. So this is a figure to get from a quote, not a rule of thumb. The calculator below asks you to enter your own number.</p>
<h3>Appraisal</h3>
<p>Your lender may require an appraisal to confirm the property supports the mortgage. Whether you pay for it directly, and how much it costs, depends on the lender and the property. Ask when you are choosing the mortgage.</p>
<h3>Home inspection</h3>
<p>An inspection is not a lender requirement. But it is usually the best money spent in the process, because it is done before you remove your conditions. Get a quote from an inspector you trust. If you are buying a strata unit, the inspection is more limited, and a review of the strata documents matters more.</p>
<h3>Title insurance</h3>
<p>Title insurance protects against certain defects in ownership. It is a one-time cost. Some lenders or lawyers include it in the closing package. Ask your lawyer or notary whether it is required for your mortgage and what it costs.</p>
<h3>Adjustments</h3>
<p>On completion day, you reimburse the seller for expenses they have prepaid for the time after the completion date. Common examples are property taxes, utilities and, for strata properties, strata fees. These are called adjustments. Your lawyer or notary works them out in a statement of adjustments before you complete. They can run in either direction, but plan for a payment.</p>
<h3>GST on newly built homes</h3>
<p>New homes carry the 5 percent federal GST. It is the only sales tax in play for a BC purchase of this kind. Two rebates can reduce it.</p>
<p>The First-Time Home Buyers' GST rebate returns 100 percent of the GST on a new or substantially renovated home valued up to $1,000,000, to a maximum of $50,000. It reduces gradually between $1,000,000 and $1,500,000, with none at $1,500,000 or more. It applies where the agreement was entered into on or after March 20, 2025, and the buyer meets CRA's conditions.</p>
<p>The older GST new housing rebate is 36 percent of the GST, to a maximum of $6,300. It ends at $450,000, so it matters little in most BC markets. The <a href="/presale-mortgages-bc/">presale and new-build guide</a> explains how these work in practice.</p>

<h2>The cash-to-close calculator</h2>
<p>Enter your price, your down payment and the quotes you have collected. The calculator applies the property transfer tax by rule, including the exemptions you tick. It adds your other costs exactly as you entered them. It does not invent figures for legal fees, appraisals or inspections, because those depend on the professionals you choose.</p>
<div class="tools">${TOOLS["closing-costs"]()}</div>
<p>The same tool lives on the main <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> page, alongside the payment and affordability tools.</p>

${cta({ title: "Get your cash-to-close number checked", text: "Joshua will go through your price, your down payment and the programs you may qualify for, and tell you what to have ready on completion day." })}

<h2>Worked examples at different price points</h2>
<p>These examples are illustrative. They show the two items that can be worked out by rule: the minimum down payment and the transfer tax. They leave out the costs that depend on quotes. Add your own quotes for legal fees, appraisal, inspection, title insurance and adjustments to get the full total.</p>
<div class="table-wrap"><table>
<thead><tr><th>Purchase</th><th>Minimum down payment</th><th>Transfer tax payable</th><th>Cash from these two items</th></tr></thead>
<tbody>
<tr><td>$500,000, first-time buyer</td><td>$25,000</td><td>$0</td><td>$25,000</td></tr>
<tr><td>$750,000, first-time buyer</td><td>$50,000</td><td>$5,000</td><td>$55,000</td></tr>
<tr><td>$750,000, not a first-time buyer</td><td>$50,000</td><td>$13,000</td><td>$63,000</td></tr>
<tr><td>$900,000, first-time buyer</td><td>$65,000</td><td>$16,000</td><td>$81,000</td></tr>
<tr><td>$1,000,000, newly built</td><td>$75,000</td><td>$0</td><td>$75,000, plus GST unless rebated</td></tr>
<tr><td>$1,000,000, resale</td><td>$75,000</td><td>$18,000</td><td>$93,000</td></tr>
</tbody></table></div>
<p>Two points stand out. A first-time buyer at $750,000 saves $8,000. But the exemption is flat and does not remove the tax on the part of the price above $500,000, so $5,000 is still due. At $900,000, the first-time buyers' exemption has run out entirely, because it ends at $860,000.</p>

<h2>The costs buyers forget</h2>
<ul>
<li><strong>Moving.</strong> Movers, truck rental, cleaning and storage for the gap between homes.</li>
<li><strong>Utility connections and hook-ups.</strong> Setting up internet, gas, electricity and, in some homes, other services.</li>
<li><strong>Strata costs.</strong> Strata properties may charge move-in fees or require deposits. The first strata fee is due at once.</li>
<li><strong>Immediate repairs and basics.</strong> Locks, a lawnmower, window coverings, appliances that do not convey.</li>
<li><strong>Insurance.</strong> Home insurance must be in place on completion day, and lenders require proof.</li>
</ul>
<p>None of these is large alone, but together they can add up. The calculator has an "other" field for them. Put in a figure you are comfortable with, rather than leaving it blank.</p>

<h2>How the first-time buyer programs reduce the total</h2>
<p>The programs available to first-time buyers do different jobs. The transfer tax exemption and the GST rebate reduce closing costs directly. The FHSA and the Home Buyers' Plan help fund the down payment. The 30-year insured amortization lowers the monthly payment.</p>
<p>A buyer can qualify for some and not others, because "first-time buyer" is defined separately in each program. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs guide</a> shows the four tests side by side. The <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> puts them in order.</p>
<p>When your numbers are in, the <a href="/mortgage-application-checklist/">application checklist</a> shows the documents that prove them. That includes statements for the down payment and any proof of funds for closing costs.</p>

${callout("Not an estimate of your lawyer's bill", "<p>The calculator adds up the numbers you give it. Your lawyer or notary will confirm the final amounts, including the statement of adjustments, shortly before completion.</p>")}

${cta({ title: "Plan your whole cash picture", text: "Bring your price range to a 15-minute call, and Joshua will show you the down payment, the transfer tax and the programs that can reduce them.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/closing-costs-bc/",
  h1: "Closing costs in BC: your total cash to buy",
  lede: "The down payment is only part of it. Every closing cost on a BC purchase explained, with a calculator that adds up the cash you need on completion day.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Closing costs", "/closing-costs-bc/"]],
  nav: "/first-time-home-buyer-bc/", calc: true, body,
  faqs: [
    { q: "How much are closing costs in BC?", a: "It depends on your price and your choices. The transfer tax is set by rule and can be calculated exactly; legal fees, appraisal, inspection and title insurance depend on quotes. The calculator on this page adds the tax to the figures you enter, so you get a number that reflects your own purchase." },
    { q: "Are closing costs paid by the buyer or the seller in BC?", a: "The buyer pays the property transfer tax, the buyer's legal or notary fees and the buyer's other costs. The seller pays their own costs, such as real estate commission. Adjustments are shared between the two according to the completion date." },
    { q: "Do I need cash for closing costs on top of my down payment?", a: "Yes. Closing costs are separate from the down payment and are normally paid in cash through your lawyer or notary on completion day. The mortgage insurance premium is the one common exception, because it can be added to the mortgage balance instead." },
    { q: "Can a first-time buyer avoid the property transfer tax?", a: "Only up to a point. The exemption removes the tax on the first $500,000, up to $8,000, on a home valued at $835,000 or less, and phases out to zero at $860,000. Buyers must also meet the Province's residency and ownership conditions. The calculator shows the exact result." },
    { q: "Does GST apply when I buy a resale home?", a: "Generally not. GST applies mainly to newly built or substantially renovated homes bought from a builder. If you are buying new, a first-time buyer rebate may return the GST up to $50,000, subject to CRA's conditions and the agreement date." }
  ]
};
