import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Plan for two numbers: the down payment (5 percent of the first $500,000, 10 percent of the rest) and closing costs. Then check which of the four first-time buyer programs you qualify for, because each has its own test.",
  who: "First-time buyers in BC who want the whole process on one page, in the right order.",
  next: "See what your income can support with the <a href=\"/how-much-mortgage-can-i-afford/\">affordability guide</a>, then book a 15-minute call if you want a real pre-approval."
})}
<h2>The BC first-buyer landscape in one map</h2>
<p>Buying your first home in BC is really four things stacked together. Most of the confusion comes from treating them as one. There's the mortgage itself, which decides how much you can borrow and what the monthly payment looks like. There's the cash you need on day one, which is your down payment plus closing costs. There are the federal programs that help you save or cut what you pay. And there's one provincial tax, the BC property transfer tax, which has its own first-time buyer exemption.</p>
<p>Here's what catches people out. Each layer has its own rules, and its own idea of who counts as a first-time buyer. That's not a typo. The FHSA, the Home Buyers' Plan, the GST rebate on new homes and the BC transfer tax exemption each use a different test. You can pass three and fail the fourth. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs and stacking guide</a> sets the four tests side by side so you can check yourself against each one.</p>
<p>Think of this page as the map. It tells you what each piece is, what order to tackle them in, and where to go for the detail. Joshua Resvick wrote it. He's been a BC mortgage broker for ten years, after five years as an underwriter. The goal is simple: you walk into your first talk with a lender or realtor already knowing how the process works. You don't need to memorize any of it. You just need to know what to ask.</p>

<h2>The program stack</h2>
<p>These are the programs that matter to most BC first-time buyers. The parameters are the published ones, and each row links to the page that explains it properly.</p>
<div class="table-wrap"><table>
<thead><tr><th>Program</th><th>What it does</th><th>Key parameter</th></tr></thead>
<tbody>
<tr><th scope="row">First Home Savings Account (FHSA)</th><td>A registered account for saving a down payment; contributions are generally tax-deductible and qualifying withdrawals are tax-free</td><td>$8,000 a year of room, $40,000 lifetime; room starts when you open the account</td></tr>
<tr><th scope="row">Home Buyers' Plan (HBP)</th><td>Lets you borrow from your own RRSP for the purchase and repay it over time</td><td>$60,000 per person, repaid over up to 15 years</td></tr>
<tr><th scope="row">GST rebate on new homes</th><td>Returns the GST on a newly built home for eligible first-time buyers</td><td>100% of the 5% GST on homes valued up to $1,000,000, reduced to nothing at $1,500,000; agreements signed on or after March 20, 2025</td></tr>
<tr><th scope="row">BC property transfer tax exemption</th><td>Removes the transfer tax on the first $500,000 of value for eligible first-time buyers</td><td>Up to $8,000 saved on homes up to $835,000; phases out to zero at $860,000</td></tr>
<tr><th scope="row">30-year amortization</th><td>Lower payment on an insured mortgage for first-time buyers and buyers of new builds</td><td>Since December 15, 2024; insured price must be below $1,500,000</td></tr>
</tbody></table></div>
<p>A couple of things worth knowing right away. You can use the FHSA and the HBP together on the same home. You just need to meet each program's conditions when you withdraw. The federal Home Buyers' Plan is not the same thing as the provincial exemption, and neither one replaces the other. Programs that no longer exist, like the federal First-Time Home Buyer Incentive, are on the programs page too. That way you'll spot them when an old website still promotes them.</p>

<h2>How much you actually need</h2>
<p>There are two numbers to plan for, and most buyers plan for only one of them. The first is the down payment. For homes priced below $1,500,000, the minimum is 5 percent of the first $500,000. Above that, it's 10 percent of the rest. At $1,500,000 and up, the minimum is 20 percent. Anything under 20 percent down means mortgage default insurance, and that premium gets added to your mortgage. The <a href="/down-payment-guide-bc/">down payment guide</a> walks through the tiers, where the money can come from, and the paper trail lenders expect to see.</p>
<p>The second number is closing costs, and this is the one that surprises people. It covers the property transfer tax, legal fees and a home inspection. It can also include an appraisal, title insurance and the adjustments between you and the seller on possession day. All of it comes due at completion, on top of the down payment, and none of it is part of the mortgage. The <a href="/closing-costs-bc/">BC closing costs guide</a> lists every line. The <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> adds them to your down payment, so you get one total cash figure.</p>
<p>If your savings are on the modest side, two questions usually come up. Can you buy with the minimum? The page on <a href="/buying-with-5-percent-down/">buying with 5 percent down</a> explains what it really costs and when it makes sense. And can family help? Yes. Parents can gift money toward a purchase with a signed letter and a clear paper trail. The <a href="/gifted-down-payment/">gifted down payment guide</a> has the rules.</p>

${cta({ title: "Not sure which number to start with?", text: "Book a 15-minute call. Joshua will go through your savings, income and timeline and tell you which of these steps actually matter for you." })}

<h2>Pre-approval, done properly</h2>
<p>A pre-approval is the point where a lender actually reads your file. It isn't a rate quote. It isn't a prequalification either, which is often just math on numbers you typed in yourself. A proper pre-approval checks your income documents, your credit and where your down payment came from. Then it tells you the price range you can shop in. It doesn't guarantee the final mortgage, because the property still has to pass the lender's review.</p>
<p>Why do it before you start viewing homes? Knowing your real number changes which homes you look at. It also lets you move fast when the right one shows up. <a href="/mortgage-pre-approval-bc/">The pre-approval guide</a> explains what gets verified, what doesn't, and which documents to bring. The <a href="/mortgage-application-checklist/">application checklist</a> covers the six problems that most often sink applications. Check your own file before anyone else does.</p>

<h2>The buying timeline</h2>
<p>The exact calendar depends on your situation, but the order is almost always the same:</p>
<ol>
<li><strong>Learn your numbers.</strong> Use the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> and calculator to see what your income and debts can support at the qualifying rate.</li>
<li><strong>Open the right accounts early.</strong> FHSA room only starts building once the account exists. Opening it early can matter, even if you only put in a little at first.</li>
<li><strong>Get a real pre-approval.</strong> Documents, not guesses.</li>
<li><strong>Shop with a realtor.</strong> Offers usually carry a financing condition, and that's the window where your broker confirms the lender's final approval.</li>
<li><strong>Complete the lender's checks.</strong> That normally includes an appraisal or property review and final document verification.</li>
<li><strong>Prepare for completion.</strong> Your lawyer or notary collects the down payment, the transfer tax and the closing costs, registers the transfer and releases the keys.</li>
</ol>

<h2>Common first-buyer mistakes</h2>
<p>These come up again and again, and nearly all of them are avoidable.</p>
<ul>
<li><strong>Budgeting only for the down payment.</strong> Closing costs are separate and due at the same time.</li>
<li><strong>Assuming the $835,000 line means "exempt."</strong> It doesn't. The first-time buyer exemption removes the tax on the first $500,000, so a $750,000 home still owes $5,000 in transfer tax.</li>
<li><strong>Forgetting a debt.</strong> Car loans, lines of credit and even the minimum payment on a credit card all count in your ratios.</li>
<li><strong>Moving money around.</strong> Big unexplained deposits in the months before you apply create questions, and questions take time to answer.</li>
<li><strong>Changing jobs or taking on new credit mid-process.</strong> The lender looks at your file again before funding, so a change between approval and closing can matter more than you'd think.</li>
<li><strong>Getting only one quote.</strong> One lender's offer can't show you what the market is offering. See how a broker compares in <a href="/mortgage-broker-vs-bank/">mortgage broker versus bank</a>.</li>
</ul>

<h2>Your situation may be different</h2>
<p>Plenty of buyers have a wrinkle worth a closer look. New to Canada? CMHC has programs for permanent residents and eligible work permit holders. The <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a> explains them. If you're planning to buy with a parent or partner who'll help you qualify, read about <a href="/mortgage-with-a-cosigner/">buying with a co-signer</a>. Buying a presale or a new build? The GST rebate and the newly built exemption change the math. The <a href="/presale-mortgages-bc/">presale mortgage guide</a> covers it.</p>
<p>Your job can change how a lender reads your income. There's a page for the common ones: <a href="/mortgages-for-first-responders/">first responders</a>, <a href="/mortgages-for-nurses-and-healthcare-workers/">nurses and healthcare workers</a>, <a href="/mortgages-for-military-and-veterans/">military and veterans</a> and <a href="/mortgage-for-contractors/">contractors and trades</a>. So can your household: <a href="/mortgages-for-single-parents/">buying on one income as a single parent</a> or <a href="/co-buying-a-home/">co-buying with friends or family</a>. The property has rules of its own too, whether it's a <a href="/condo-and-townhouse-mortgages/">condo or townhouse</a>, a <a href="/mobile-home-mortgages-bc/">mobile or manufactured home</a> or a <a href="/farm-and-alr-mortgages-bc/">farm or ALR acreage</a>.</p>
<p>If you'd rather just talk it through, <a href="/contact/">contact Joshua</a> directly and he'll answer your questions in plain language. People often ask about cost. On a mortgage with a mainstream (A) lender, the lender pays the broker. You pay nothing for the service. Fees arise only on some B-lender and private files, and BC rules require written disclosure first. The details are on the page about <a href="/how-mortgage-brokers-get-paid/">how brokers get paid</a>.</p>

${callout("The rule worth remembering", "<p>Federal programs help you save and borrow. The provincial exemption reduces a tax. None of them lowers the price of the home, and each one has its own conditions. Check each one separately before you write an offer, not after.</p>")}

${cta({ title: "Plan your first purchase with someone who reads files like an underwriter", text: "Book a 15-minute call, or start with the affordability calculator. Either way, you'll leave with a number and a next step." })}
`;

export default {
  slug: "/first-time-home-buyer-bc/",
  h1: "First-time home buyer mortgages in BC",
  lede: "How the federal programs, the BC transfer tax exemption and the mortgage rules fit together, what you'll need in cash, and the order to do things in.",
  crumb: "First-time home buyers", nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "How much do I need to buy my first home in BC?", a: `You need the down payment plus closing costs. The minimum down payment is 5% of the first $500,000 and 10% of the rest, up to a price below $1,500,000. Closing costs include transfer tax, legal fees and inspections. The <a href="/mortgage-calculators/#closing-costs">closing cost calculator</a> totals it from your own figures.` },
    { q: "Do all the first-time buyer programs use the same definition?", a: `No, and this trips up a lot of people. The FHSA, the Home Buyers' Plan, the GST rebate and the BC transfer tax exemption each have their own test, and the transfer tax test is the strictest. You can qualify for some and not others, so check each one separately.` },
    { q: "Can I use the FHSA and the Home Buyers' Plan together?", a: `Yes, for the same qualifying home, if you meet each program's conditions at the time you withdraw. The FHSA is limited to $40,000 over its lifetime and the Home Buyers' Plan to $60,000 per person. Each has its own rules on timing and repayment.` },
    { q: "Do I need a pre-approval before I look at homes?", a: `It's not required, but it's strongly advised. A real pre-approval checks your income, credit and down payment, so you know your price range before you shop and can move quickly on an offer. It's not a guarantee, because the property has to qualify too.` },
    { q: "Is the first-time buyer transfer tax exemption the same as no tax under $835,000?", a: `No. It removes the tax on the first $500,000 of value, worth up to $8,000, for eligible buyers of homes up to $835,000, and it phases out between $835,000 and $860,000. A $750,000 home still carries $5,000 of tax, so build that into your closing-cost plan from the start.` }
  ]
};
