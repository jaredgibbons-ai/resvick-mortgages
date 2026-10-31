import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Four programs can help a first-time buyer in BC: the FHSA, the Home Buyers' Plan, the GST rebate on new homes and the BC transfer tax exemption. Each one has its own test, so you can pass one and fail another.",
  who: "Anyone buying their first home in BC who wants to know which programs they can use, and in what order.",
  next: "Check your transfer tax with the <a href=\"/bc-property-transfer-tax-calculator/\">BC property transfer tax calculator</a>, then read the four tests below."
})}
<h2>The stack at a glance</h2>
<p>Four programs can lower what you pay as a first-time buyer in BC, or help you fund the down payment. Two are federal savings tools. One is a federal tax rebate on new homes. One is a provincial tax exemption.</p>
<p>They work on their own, and each one defines "first-time buyer" a little differently. That's why the order you do things in matters. The table shows the published limits, and the sections below explain each program.</p>
<div class="table-wrap"><table>
<thead><tr><th>Program</th><th>Who runs it</th><th>What you get</th><th>Key limits</th></tr></thead>
<tbody>
<tr><th scope="row">FHSA</th><td>CRA</td><td>Tax-deductible savings, tax-free withdrawal for a first home</td><td>$8,000 a year, $40,000 lifetime</td></tr>
<tr><th scope="row">Home Buyers' Plan</th><td>CRA</td><td>Withdraw from your own RRSP and repay it</td><td>$60,000 per person, up to 15 years to repay</td></tr>
<tr><th scope="row">GST first-time buyer rebate</th><td>CRA</td><td>100% of the 5% GST on a new home</td><td>Up to $50,000; homes valued to $1,000,000; reduced to nil at $1,500,000; agreements on or after March 20, 2025</td></tr>
<tr><th scope="row">BC PTT exemption</th><td>Province of BC</td><td>No transfer tax on the first $500,000</td><td>Up to $8,000; value up to $835,000; ends at $860,000</td></tr>
</tbody></table></div>
<p>There's also a fifth item. It isn't a program, but it's a mortgage rule that helps first-time buyers. Since December 15, 2024, insured mortgages can use a 30-year amortization for first-time buyers and for buyers of newly built homes. The insured price cap is now below $1,500,000. We cover both below.</p>

<h2>FHSA: open it before you need it</h2>
<p>The First Home Savings Account lets you save for a first home with two tax breaks. You get a deduction when you put money in. You pay no tax when you take it out for a qualifying home.</p>
<p>You get $8,000 of room for each year you hold the account, up to $40,000 in total. Here's the detail that matters most: room only starts to build in the year you open your first account. Open it this year and buy next year, and you have $16,000 of room. Open it and buy in the same year, and you have $8,000.</p>
<p>Contributions are usually deductible in the year you make them, or a later year. A transfer from your RRSP into an FHSA doesn't create a deduction, but it's still a way to move money in. If you never buy, the money can later move tax-free to an RRSP or RRIF under CRA's rules. You can use the FHSA and the Home Buyers' Plan together on the same home, as long as you meet each program's conditions when you withdraw.</p>

<h2>Home Buyers' Plan: borrowing from your own RRSP</h2>
<p>The Home Buyers' Plan lets each person take up to $60,000 out of their RRSP for a first home. A couple can reach $120,000 if each person has the savings in their own plan.</p>
<p>It's a loan from yourself, not a gift. Repayment normally starts in the second year after your first withdrawal, and you have up to 15 years to pay it back. A temporary deferral applied to first withdrawals made from January 1, 2022 to December 31, 2025. CRA's repayment page is the official source. Check it for any relief that applies to your year before you count on it.</p>
<p>If you miss a year's repayment, the shortfall is added to your income for that year. You also can't make repayments into an FHSA. So the plan is useful, but it comes with a duty to repay. Know the schedule before you withdraw.</p>

<h2>The GST rebate on new homes</h2>
<p>When you buy a newly built or substantially renovated home from a builder, 5 percent GST normally applies to the price. Under the first-time home buyers' GST rebate, eligible buyers can get back 100 percent of that GST. That applies to homes valued up to $1,000,000, to a maximum of $50,000.</p>
<p>The rebate shrinks for values between $1,000,000 and $1,500,000. It doesn't apply at $1,500,000 or more. BC only charges the federal GST on new homes, so $50,000 is the most you can practically get back here.</p>
<p>The key date is the one on your agreement of purchase and sale. CRA's current guidance covers agreements signed on or after March 20, 2025 and before 2031. Some websites still quote an older proposal date, so check the date against CRA's own pages.</p>
<p>The older GST new housing rebate still exists too. It returns 36 percent of the GST, up to $6,300, and phases out between $350,000 and $450,000. Because it ends at $450,000, it fits very few new homes in BC. The <a href="/presale-mortgages-bc/">presale and new-build mortgage guide</a> explains how builders and lenders handle the rebate at closing.</p>

<h2>The BC property transfer tax exemption</h2>
<p>The Province removes the transfer tax on the first $500,000 of value for eligible first-time buyers. For a home worth up to $835,000, the exemption is a flat $8,000. Between $835,000 and $860,000 it shrinks, and at $860,000 it ends.</p>
<p>People get this one wrong more than any other. It doesn't make homes under $835,000 tax-free. A $750,000 home still owes $5,000 after the exemption.</p>
<p>There's also a separate exemption for newly built homes. It covers the full tax up to $1,100,000, then phases out and ends at $1,150,000. You don't need to be a first-time buyer to use it.</p>
<p>The <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator</a> works out the tax for your price with either exemption applied. The <a href="/closing-costs-bc/">closing costs guide</a> shows where the tax fits among your other costs on completion day.</p>

<h2>30-year amortization and the $1.5 million insured cap</h2>
<p>The rules changed on December 15, 2024. First-time buyers and buyers of newly built homes can now pick a 30-year amortization on an insured mortgage, up from 25. On the same date, the insured price limit went from $1,000,000 to below $1,500,000.</p>
<p>A longer amortization lowers your payment but raises your total interest. Insured mortgages longer than 25 years also carry a premium surcharge of 0.20 percent.</p>
<p>Across that price range, the minimum down payment is 5 percent of the first $500,000 and 10 percent of the rest. See the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/mortgage-calculators/#down-payment">minimum down payment calculator</a> for your number.</p>

<h2>Four tests, not one</h2>
<p>Each program defines a first-time buyer in its own way, so each one has its own checklist. Passing one tells you nothing about the others. You can pass three and fail the fourth.</p>
<ul>
<li><strong>FHSA (CRA).</strong> Look at the year you open the account and the four calendar years before it. In that time, you didn't live in a qualifying home that you or your spouse or partner owned as a principal residence.</li>
<li><strong>Home Buyers' Plan (CRA).</strong> You didn't live in a home you owned as your principal residence during the four years ending 31 days before you withdraw. There are legal exceptions, for example after a relationship breaks down.</li>
<li><strong>GST rebate (CRA).</strong> This one has its own definition and extra conditions. A signed agreement dated March 20, 2025 or later is needed, but it isn't enough. CRA also sets conditions on the buyer and on how you'll use the home. The home must be new or substantially renovated, and bought from a builder. Read CRA's current guidance for each part.</li>
<li><strong>BC transfer tax exemption (Province).</strong> This is the strictest test. You must never have owned a principal residence anywhere in the world. You must be a Canadian citizen or permanent resident. You must have lived in BC for 12 months in a row before registration, or filed two of your last six BC tax returns. The property, its value and how you live in it must also meet the rules.</li>
</ul>

${cta({ title: "Which of the four do you pass?", text: "Bring your situation to a 15-minute call. Joshua will go through each program's test with you before you make an offer." })}

<h2>Stacking order and how the programs interact</h2>
<p>Order matters because each program's clock starts at a different moment. The FHSA clock starts when you open the account, so open it first.</p>
<p>You make the HBP and FHSA withdrawals near completion, once you have a home to buy. The GST rebate depends on the date you sign with the builder. That's why a presale contract date can decide whether you qualify. The transfer tax exemption is claimed when the transfer is registered, and your lawyer or notary handles that step.</p>
<p>The federal programs mostly work on their own. The BC exemptions are the one place two benefits can overlap. A newly built home can use the newly built exemption, which can be bigger than the first-time buyer one.</p>
<p>None of these programs changes whether you qualify for the mortgage. Lenders still test your income and debts at the qualifying rate. Use the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> alongside this one. If you're new to Canada, CMHC has a separate program with its own credit rules, explained on the <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a>.</p>

<h2>Worked examples</h2>
<p>These are illustrative. The figures come from the same engine as the calculators on this site, using the published rules. The prices are examples only.</p>
<h3>A $750,000 resale home, one eligible first-time buyer</h3>
<p>The minimum down payment is $50,000. That's 5 percent of the first $500,000 plus 10 percent of the remaining $250,000.</p>
<p>The loan before insurance is $700,000, a loan-to-value ratio of about 93.3 percent. So the CMHC premium is 4.00 percent, or $28,000. It's added to the mortgage, for a total of $728,000. On a 30-year amortization the premium rate is 4.20 percent, or $29,400, for a total of $729,400.</p>
<p>The transfer tax on a $750,000 purchase is $13,000. After the $8,000 first-time buyer exemption, $5,000 is still payable.</p>
<p>One person with a full FHSA and the Home Buyers' Plan could, in principle, put up to $100,000 toward the down payment. So the $50,000 minimum is within reach of those two programs alone.</p>
<h3>An $800,000 newly built home from a builder</h3>
<p>Say the price is $800,000 before GST. The GST is $40,000, and an eligible first-time buyer could get it back through the rebate.</p>
<p>The general transfer tax is $14,000. The newly built exemption removes all of it, so nothing is payable. Together, the two tax benefits come to $54,000.</p>
<p>The minimum down payment is $55,000. With a 30-year amortization, the CMHC premium on the $745,000 loan is 4.20 percent, or $31,290. Whether you get each benefit depends on the tests above and the date of your agreement.</p>

<h2>What no longer exists</h2>
<p>Some programs are still advertised long after they ended. The federal First-Time Home Buyer Incentive is closed. Any page that promotes it as available is out of date.</p>
<p>The Canada Secondary Suite Loan Program was announced at $40,000 and later $80,000. It was cancelled in Budget 2025 and never opened. If a calculator or guide says either one can lower your costs, it's wrong. Treat that as a sign to check its other numbers too.</p>
<p>Rules change, so every figure on this page is dated and sourced to a government or insurer page. Each one is rechecked against its source on a regular schedule. If you want to see how they apply to your plan, <a href="/contact/">contact Joshua</a> and bring your questions. The <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> has the full set of guides.</p>

${callout("Use the date on your agreement", "<p>Several of these programs depend on dates: when you open an account, when you withdraw, and when you sign with a builder. Write down each date as it happens. Eligibility questions get answered by the record.</p>")}
`;

export default {
  slug: "/first-time-buyer-programs-bc/",
  h1: "BC first-time buyer programs, stacked in the right order",
  lede: "FHSA, Home Buyers' Plan, GST rebate and the BC transfer tax exemption: what each does, who qualifies, and how to use them together.",
  crumbs: [["Home", "/"], ["First-time home buyers", "/first-time-home-buyer-bc/"], ["Programs and stacking", "/first-time-buyer-programs-bc/"]],
  nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Can I use the FHSA, the Home Buyers' Plan and the BC exemption on the same purchase?", a: `Yes, if you pass each program's test. The FHSA and the Home Buyers' Plan can be combined for the same home. The BC transfer tax exemption is a separate provincial benefit. Each one defines a first-time buyer in its own way, so you need to check all of them.` },
    { q: "Is a home under $835,000 free of transfer tax for first-time buyers?", a: `No. The exemption covers the tax on the first $500,000, a maximum of $8,000, for homes valued up to $835,000. The exemption then phases out and ends at $860,000. A $750,000 home still owes $5,000 after the exemption is applied.` },
    { q: "Which date decides the GST rebate?", a: `The date of your written agreement of purchase and sale with the builder. CRA's current guidance covers agreements signed on or after March 20, 2025. The date is needed, but it isn't enough on its own. The other conditions must also be met.` },
    { q: "Does the First-Time Home Buyer Incentive still exist?", a: `No. The federal incentive is closed, and any website that promotes it as available is out of date. The programs on this page are the ones in place now. Each has a published government source you can check yourself before you rely on it.` },
    { q: "Does using these programs change whether I qualify for the mortgage?", a: `Not directly. Lenders still assess your income, debts, credit and property at the qualifying rate. That's the greater of your contract rate plus 2% or 5.25%. The programs help with your savings and your costs, but they don't replace the lender's approval.` }
  ]
};
