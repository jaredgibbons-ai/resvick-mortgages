import { TOOLS, topTool } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Added Nov 24, 2026 from the Keyword Planner sheet: "cmhc insurance" (100-1K) and "mortgage default insurance" (10-100).
// Premium table: CMHC, Premium information for homeowner and small rental loans (read Nov 24, 2026). PST on premiums only in ON, QC, SK.
// $1.5M insured cap and 30-year insured amortization for first-time buyers and new builds: since Dec 15, 2024 (site's programs page).
const body = `
${short({
  answer: "If you put less than 20% down on a home in BC, your mortgage must be insured against default. The premium is a percentage of the loan, from 2.80% to 4.00% at those down payments, and it's usually added to your mortgage. BC charges no sales tax on it.",
  who: "You're buying with less than 20% down, or you want to know whether a bigger down payment is worth waiting for.",
  next: "Run the premium calculator below with your price and down payment, then try it with a bit more down."
})}

<div class="tools">${topTool(TOOLS.cmhc())}</div>

<h2>What mortgage default insurance is</h2>
<p>Mortgage default insurance protects the lender, not you. If a borrower stops paying and the home sells for less than what's owed, the insurer covers the lender's loss. Because the lender carries less risk, it can lend with as little as 5% down, and insured mortgages often get some of the lowest rates.</p>
<p>People call it CMHC insurance, but there are three insurers in Canada: CMHC, Sagen and Canada Guaranty. Their premiums are close to one another, and your lender picks the insurer. You pay the premium either way.</p>
<p>It isn't the same as mortgage life or disability insurance. Those protect you or your family and are optional. Default insurance is required on any mortgage with less than 20% down.</p>

<h2>Who needs it</h2>
<ul>
<li><strong>Less than 20% down.</strong> Any purchase with a down payment under 20% has to be insured.</li>
<li><strong>A home priced under $1,500,000.</strong> Insurance is only available below that price. At $1,500,000 or more, you need at least 20% down. The limit was raised from $1,000,000 on December 15, 2024.</li>
<li><strong>A 25-year amortization, or 30 for some buyers.</strong> Insured mortgages are capped at 25 years. First-time buyers and buyers of newly built homes can choose 30 years.</li>
<li><strong>A home you'll live in.</strong> The standard programs are for owner-occupied homes of one to four units.</li>
</ul>
<p>With 20% or more down, insurance isn't required. Some lenders still insure those mortgages behind the scenes at their own cost, which doesn't change what you pay.</p>

<h2>Premium rates</h2>
<p>The premium depends on your loan-to-value ratio, which is the mortgage amount divided by the price. Here is CMHC's published table for a purchase:</p>
<div class="table-wrap"><table>
<thead><tr><th>Loan-to-value</th><th>Down payment</th><th class="num">Premium on the loan</th></tr></thead>
<tbody>
<tr><td>Up to 65%</td><td>35% or more</td><td class="num">0.60%</td></tr>
<tr><td>65.01% to 75%</td><td>25% to 34.99%</td><td class="num">1.70%</td></tr>
<tr><td>75.01% to 80%</td><td>20% to 24.99%</td><td class="num">2.40%</td></tr>
<tr><td>80.01% to 85%</td><td>15% to 19.99%</td><td class="num">2.80%</td></tr>
<tr><td>85.01% to 90%</td><td>10% to 14.99%</td><td class="num">3.10%</td></tr>
<tr><td>90.01% to 95%</td><td>5% to 9.99%</td><td class="num">4.00%</td></tr>
<tr><td>90.01% to 95%, non-traditional down payment</td><td>5% to 9.99%, borrowed</td><td class="num">4.50%</td></tr>
</tbody></table></div>
<p>An amortization over 25 years adds a 0.20% surcharge. So a first-time buyer with 5% down who picks 30 years pays 4.20% instead of 4.00%. The first three rows only matter for the uncommon cases where a mortgage with 20% or more down is insured.</p>

<h2>What it costs on a real purchase</h2>
<p>Take a $600,000 home with the minimum down payment. That's 5% of the first $500,000 plus 10% of the remaining $100,000, or $35,000. The mortgage is $565,000, a loan-to-value of about 94%. The premium is 4.00% of $565,000, which is $22,600. It's added to the mortgage, so you'd owe $587,600 from day one.</p>
<p>Choose a 30-year amortization as a first-time buyer, and the premium becomes 4.20%, or $23,730. Your payment is lower, but you pay a little more for the insurance and much more interest over the life of the loan.</p>
<p>Now put 10% down instead, $60,000. The mortgage drops to $540,000, and the premium drops to 3.10%, or $16,740. Saving the extra $25,000 cuts the premium by about $5,860, on top of borrowing less. The <a href="/buying-with-5-percent-down/">5 percent down guide</a> works through when waiting to save more pays off and when it doesn't.</p>

<h2>Paying the premium</h2>
<p>Almost everyone adds the premium to the mortgage rather than paying it in cash. That means you pay interest on it, so it costs a little more than the sticker number over time. You can pay it up front if you'd rather.</p>
<p>In BC there's no provincial sales tax on the premium. CMHC says PST applies to premiums only in Ontario, Quebec and Saskatchewan, and there it must be paid in cash, not added to the loan. That's one less closing cost here. The rest are in the <a href="/closing-costs-bc/">BC closing costs guide</a>.</p>

${callout("Moving before your term ends?", "<p>If you sell and buy again, your insured mortgage may be portable, and CMHC can credit part of the premium you already paid. Its published schedule gives a 100% credit within 6 months of the original loan closing, 50% within 12 months and 25% within 24 months. Ask before you sign the new purchase.</p>")}

<h2>Is it worth waiting to reach 20% down?</h2>
<p>Sometimes, but often not. Waiting saves the premium, but home prices and your rent keep moving while you save. An insured mortgage often has a lower rate than an uninsured one, which takes back part of the saving. And reaching 20% on a BC home can take years.</p>
<p>The better question is what you can comfortably afford, and how much cash you'll have left after closing. The <a href="/down-payment-guide-bc/">down payment guide</a> covers the minimums and where the money can come from. First-time buyers can use the FHSA and the Home Buyers' Plan to get there faster. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs page</a> shows how they stack. To compare the numbers side by side, the <a href="/mortgage-calculators/">mortgage calculators</a> include payment and affordability tools.</p>

${cta({ title: "Want the premium on your own numbers?", text: "Book a 15-minute call. Joshua will compare 5%, 10% and more down on the homes you're looking at, with the premium and payment for each." })}

<p class="small">Sources: CMHC, Premium information for homeowner and small rental loans, read November 2026. Insured price limit and 30-year amortization for first-time buyers and new builds: federal rules effective December 15, 2024. Premiums from Sagen and Canada Guaranty are similar but set by each insurer.</p>
`;

export default {
  slug: "/cmhc-insurance-bc/",
  h1: "CMHC insurance in BC: who needs it, what the premium costs, and how it's paid",
  lede: "Mortgage default insurance in plain terms: when it's required, CMHC's premium table, what it adds to a real BC purchase, and whether waiting for 20% down is worth it.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["CMHC insurance", "/cmhc-insurance-bc/"]],
  nav: "/first-time-home-buyer-bc/",
  calc: true,
  body,
  faqs: [
    { q: "How much is CMHC insurance in BC?", a: "It's a percentage of your mortgage: 2.80% with 15% to 19.99% down, 3.10% with 10% to 14.99% down and 4.00% with 5% to 9.99% down. A 30-year amortization adds 0.20%. On a $565,000 mortgage with 5% down, that's $22,600, usually added to the loan." },
    { q: "Do I need CMHC insurance with 20% down?", a: "No. Insurance is only required when your down payment is under 20%. With 20% or more down, you have a conventional mortgage. Some lenders insure those behind the scenes at their own cost, but it isn't charged to you." },
    { q: "Is there PST on CMHC insurance in BC?", a: "No. CMHC says provincial sales tax applies to the premium only in Ontario, Quebec and Saskatchewan. In BC the premium is the only cost, and it's usually added to your mortgage." },
    { q: "Can I get an insured mortgage on a $1.6 million home?", a: "No. Insured mortgages are only available on homes priced below $1,500,000. At $1,500,000 or more you need at least 20% down, so the mortgage is conventional and no insurance premium applies." },
    { q: "Is CMHC insurance the same as mortgage life insurance?", a: "No. Default insurance protects the lender if you stop paying and is required with less than 20% down. Mortgage life and disability insurance protect you or your family and are optional. They're priced and sold separately." }
  ]
};
