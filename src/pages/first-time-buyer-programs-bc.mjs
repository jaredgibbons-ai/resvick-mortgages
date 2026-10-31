import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>The stack at a glance</h2>
<p>Four programs can lower what a first-time buyer in British Columbia pays or help fund the down payment. Two are federal savings tools, one is a federal tax rebate on new homes, and one is a provincial tax exemption. They work independently, and their rules for who counts as a first-time buyer are different, which is why a clear order of operations matters. The table gives the published parameters; the sections below explain each one.</p>
<div class="table-wrap"><table>
<thead><tr><th>Program</th><th>Who runs it</th><th>What you get</th><th>Key limits</th></tr></thead>
<tbody>
<tr><th scope="row">FHSA</th><td>CRA</td><td>Tax-deductible savings, tax-free withdrawal for a first home</td><td>$8,000 a year, $40,000 lifetime</td></tr>
<tr><th scope="row">Home Buyers' Plan</th><td>CRA</td><td>Withdraw from your own RRSP and repay it</td><td>$60,000 per person, up to 15 years to repay</td></tr>
<tr><th scope="row">GST first-time buyer rebate</th><td>CRA</td><td>100% of the 5% GST on a new home</td><td>Up to $50,000; homes valued to $1,000,000; reduced to nil at $1,500,000; agreements on or after March 20, 2025</td></tr>
<tr><th scope="row">BC PTT exemption</th><td>Province of BC</td><td>No transfer tax on the first $500,000</td><td>Up to $8,000; value up to $835,000; ends at $860,000</td></tr>
</tbody></table></div>
<p>A fifth item is not a program but a mortgage rule that helps first-time buyers: since December 15, 2024, insured mortgages can use a 30-year amortization for first-time buyers and for buyers of newly built homes, and the insured price cap is below $1,500,000. That is covered below.</p>

<h2>FHSA: open it before you need it</h2>
<p>The First Home Savings Account lets you save toward a first home with a tax deduction on the way in and tax-free withdrawals on the way out, provided the withdrawal is a qualifying one. Participation room is $8,000 for each year you hold the account, up to a lifetime limit of $40,000. The detail that matters most is that room only starts to build in the year you open your first account. Someone who opens an account in one calendar year and buys in the next has $16,000 of room available. Someone who opens it and buys in the same year has $8,000.</p>
<p>Contributions are generally deductible in the year you make them or a later year. A transfer from your RRSP into an FHSA does not generate a deduction, though it is still a way to move money into the account. If you do not use the account for a home, funds can later move tax-free to an RRSP or RRIF within CRA's rules. The FHSA and the Home Buyers' Plan can be combined for the same qualifying home when you meet each program's conditions at the time you withdraw.</p>

<h2>Home Buyers' Plan: borrowing from your own RRSP</h2>
<p>The Home Buyers' Plan allows each person to withdraw up to $60,000 from their RRSP for a first home, so a couple can access up to $120,000 if each has the savings in their own plan. It is a loan from yourself, not a gift. Repayment normally starts in the second year after the year of your first withdrawal, and you repay over up to 15 years. A temporary deferral applied to first withdrawals made from January 1, 2022 to December 31, 2025. CRA's repayment page is the governing source, so check it for any relief that applies to the year you plan to withdraw before you rely on it.</p>
<p>If you miss a year's repayment, the shortfall is added to your income for that year. Repayments cannot be made into an FHSA. That makes the plan useful but not free of obligation, and it is worth understanding the schedule before you withdraw.</p>

<h2>The GST rebate on new homes</h2>
<p>If you buy a newly built or substantially renovated home from a builder, GST of 5 percent normally applies to the price. Under the first-time home buyers' GST rebate, eligible buyers can recover 100 percent of that GST on a home valued up to $1,000,000, to a maximum of $50,000. The rebate is reduced gradually for values between $1,000,000 and $1,500,000 and does not apply at $1,500,000 or more. In British Columbia only the federal GST applies, so the maximum practical rebate is $50,000.</p>
<p>The key date is the one on your agreement of purchase and sale. CRA's current guidance covers agreements entered into on or after March 20, 2025 and before 2031. Some websites still quote an earlier proposal date, so check the date against CRA's own pages. The older GST new housing rebate, which returns 36 percent of the GST up to $6,300 and phases out between $350,000 and $450,000, still exists, but because it ends at $450,000 it applies to very few new homes in BC. The <a href="/presale-mortgages-bc/">presale and new-build mortgage guide</a> explains how builders and lenders handle the rebate at closing.</p>

<h2>The BC property transfer tax exemption</h2>
<p>The Province of BC removes the transfer tax on the first $500,000 of value for eligible first-time buyers. For a home worth up to $835,000, the exemption is a flat $8,000. Between $835,000 and $860,000 it shrinks, and at $860,000 it ends. This is the program people most often misstate. It does not make homes under $835,000 tax-free: a $750,000 home still owes $5,000 after the exemption. Separately, newly built homes qualify for a full exemption up to $1,100,000, which phases out and ends at $1,150,000, whether or not you are a first-time buyer.</p>
<p>The <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax calculator</a> works out the tax for your price with either exemption applied. The <a href="/closing-costs-bc/">closing costs guide</a> shows where the tax sits among the other costs on completion day.</p>

<h2>30-year amortization and the $1.5 million insured cap</h2>
<p>Since December 15, 2024, first-time buyers and buyers of newly built homes can choose a 30-year amortization on an insured mortgage, up from 25. The insured mortgage price limit was raised from $1,000,000 to below $1,500,000 on the same date. A longer amortization lowers the payment and raises the total interest, and a premium surcharge of 0.20 percent applies to insured mortgages with an amortization beyond 25 years. The minimum down payment across that range is 5 percent of the first $500,000 and 10 percent of the remainder; see the <a href="/down-payment-guide-bc/">down payment guide</a> and the <a href="/mortgage-calculators/#down-payment">minimum down payment calculator</a>.</p>

<h2>Four tests, not one</h2>
<p>Because the definition of a first-time buyer differs, each program has its own checklist. Passing one says nothing about the others, and a buyer can pass three and fail the fourth.</p>
<ul>
<li><strong>FHSA (CRA).</strong> In the year you open the account and the previous four calendar years, you did not live in a qualifying home that you or your spouse or partner owned as a principal residence.</li>
<li><strong>Home Buyers' Plan (CRA).</strong> You did not occupy a home you owned as your principal residence during the four-year period ending 31 days before the withdrawal. There are statutory exceptions, for example after a relationship breakdown.</li>
<li><strong>GST rebate (CRA).</strong> A separate definition with further conditions. The agreement date of March 20, 2025 or later is necessary but not enough. CRA also sets conditions on the buyer and on the intended use of the home, and the home must be a new or substantially renovated home bought from a builder. Read CRA's current guidance for each element.</li>
<li><strong>BC transfer tax exemption (Province).</strong> The strictest test. You must never have owned a principal residence anywhere in the world at any time, be a Canadian citizen or permanent resident, have lived in BC for 12 consecutive months before registration or have filed two of the last six BC tax returns, and meet the property, value and occupancy conditions.</li>
</ul>

${cta({ title: "Which of the four do you pass?", text: "Bring your situation to a 15-minute call. Joshua will go through each program's test with you before you make an offer." })}

<h2>Stacking order and how the programs interact</h2>
<p>The order matters because some clocks start at different moments. The FHSA clock starts when you open the account, so that comes first. The HBP withdrawal and the FHSA withdrawal both happen near completion, once you have a home to buy. The GST rebate turns on the date of your signed agreement with the builder, which is why a presale contract date can decide eligibility. The transfer tax exemption is claimed when the transfer is registered, and your lawyer or notary handles that step.</p>
<p>The federal programs generally work independently of each other. The BC exemptions are the one place where two benefits can overlap, because a newly built home can use the newly built exemption, which can be larger than the first-time buyer one. The programs also do not change your qualification for the mortgage. Lenders still run your income and debts at the qualifying rate, so use the <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> alongside this one. If you are new to Canada, CMHC has a separate program with its own credit rules, explained on the <a href="/new-to-canada-mortgage/">new to Canada mortgage page</a>.</p>

<h2>Worked examples</h2>
<p>These are illustrative. Figures are computed with the same engine as the calculators on this site, at the published rules, and the prices are examples only.</p>
<h3>A $750,000 resale home, one eligible first-time buyer</h3>
<p>The minimum down payment is $50,000, which is 5 percent of the first $500,000 plus 10 percent of the remaining $250,000. The loan before insurance is $700,000, a loan-to-value ratio of about 93.3 percent, so the CMHC premium is 4.00 percent, or $28,000, added to the mortgage for a total of $728,000. On a 30-year amortization the premium rate is 4.20 percent, or $29,400, for a total of $729,400. The transfer tax on a $750,000 purchase is $13,000. After the first-time buyer exemption of $8,000, $5,000 is payable. One person with a full FHSA and the Home Buyers' Plan could in principle put up to $100,000 toward the down payment, so the minimum of $50,000 is within reach of those two programs alone.</p>
<h3>An $800,000 newly built home from a builder</h3>
<p>Assuming a price of $800,000 before GST, GST is $40,000, which an eligible first-time buyer could recover under the first-time buyer rebate. The general transfer tax is $14,000, and the newly built exemption removes all of it, so nothing is payable. The two tax benefits together come to $54,000. The minimum down payment is $55,000, and with a 30-year amortization the CMHC premium on the $745,000 loan is 4.20 percent, or $31,290. Whether you qualify for each benefit depends on the tests above and the timing of your agreement.</p>

<h2>What no longer exists</h2>
<p>Some programs are still advertised long after they ended. The federal First-Time Home Buyer Incentive is closed, and any page that promotes it as available is out of date. The Canada Secondary Suite Loan Program, announced at $40,000 and later $80,000, was cancelled in Budget 2025 and never opened. If a calculator or guide tells you either one can reduce your costs, it is wrong, and it is a sign to check its other numbers.</p>
<p>It is also worth remembering that rules change. Every parameter on this page is dated and sourced to a government or insurer page, and each is rechecked against its source on a regular schedule. If you want to see how they apply to your plan, <a href="/contact/">contact Joshua</a> and bring your questions. The <a href="/first-time-home-buyer-bc/">first-time home buyer hub</a> has the full set of guides.</p>

${callout("Use the date on your agreement", "<p>Several of these programs depend on dates: when you open an account, when you withdraw, and when you sign with a builder. Write down each date as it happens, because eligibility questions are answered by the record.</p>")}
`;

export default {
  slug: "/first-time-buyer-programs-bc/",
  h1: "BC first-time buyer programs, stacked in the right order",
  lede: "FHSA, Home Buyers' Plan, GST rebate and the BC transfer tax exemption: what each does, who qualifies, and how to use them together.",
  crumbs: [["Home", "/"], ["First-time home buyers", "/first-time-home-buyer-bc/"], ["Programs and stacking", "/first-time-buyer-programs-bc/"]],
  nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Can I use the FHSA, the Home Buyers' Plan and the BC exemption on the same purchase?", a: `Yes, if you pass each program's test. The FHSA and the Home Buyers' Plan can be combined for the same home, and the BC transfer tax exemption is a separate provincial benefit. Each has its own definition of a first-time buyer, so you need to check all of them.` },
    { q: "Is a home under $835,000 free of transfer tax for first-time buyers?", a: `No. The exemption covers the tax on the first $500,000, a maximum of $8,000, for homes valued up to $835,000. The exemption then phases out and ends at $860,000. A $750,000 home still owes $5,000 after the exemption is applied.` },
    { q: "Which date decides the GST rebate?", a: `The date of your written agreement of purchase and sale with the builder. CRA's current guidance covers agreements entered into on or after March 20, 2025. The date is necessary but not sufficient, so the other conditions must also be met.` },
    { q: "Does the First-Time Home Buyer Incentive still exist?", a: `No. The federal incentive is closed, and any website that promotes it as available is out of date. The programs on this page are the ones currently in place, each with a published government source you can check yourself before you rely on it.` },
    { q: "Does using these programs change whether I qualify for the mortgage?", a: `Not directly. Lenders still assess your income, debts, credit and property at the qualifying rate, which is the greater of your contract rate plus 2% or 5.25%. The programs help with your savings and your costs, but they do not replace the lender's approval process.` }
  ]
};
