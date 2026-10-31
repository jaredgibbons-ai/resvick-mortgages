import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>The honest answer on no-money-down</h2>
<p>People search for a no-down-payment mortgage in Canada, and the straight answer is that the zero-down product does not exist in the insured market. Every insured purchase requires a minimum down payment: five percent of the first $500,000 of the price and ten percent of the portion above that, up to the $1.5 million ceiling, and twenty percent beyond it. What does exist is a set of rules about where the down payment can come from, and under those rules it can be borrowed. That is what a flex-down or borrowed down payment is: a real five percent down payment, funded from credit rather than from savings.</p>
<p>The rest of this page explains how that works, how a borrowed payment changes your qualifying ratios, what a deposit loan is and why it is a separate problem, the higher insurance premium that applies, and who should not do any of this.</p>

<h2>Flex-down, explained</h2>
<p>The mortgage insurers allow what they call non-traditional sources of down payment: money that is borrowed rather than saved or gifted. CMHC's published program rules allow non-traditional sources on one- and two-unit owner-occupied purchases at 90.01 to 95 percent loan-to-value only, with a strong credit history required, and not for non-permanent residents. In practice the borrowed funds come from one of three places:</p>
<ul>
<li><strong>An unsecured line of credit or personal loan</strong> in your name, from a bank or credit union, arranged before the purchase.</li>
<li><strong>A family loan</strong> that is genuinely repayable. A gift that must be paid back is a loan, and lenders treat it as one; the page on <a href="/gifted-down-payment/">gifted down payments</a> explains the difference and why it matters.</li>
<li><strong>Other credit</strong> such as a credit card advance, which some lenders accept and all of them price into your ratios. It is the most expensive source and the least advisable.</li>
</ul>
<p>Not every lender offers flex-down programs, and the ones that do apply their own overlays on top of the insurer's rules: a minimum credit score, a cap on how much of the down payment can be borrowed, and sometimes a requirement that closing costs come from your own funds. The <a href="/down-payment-guide-bc/">down payment guide</a> covers the standard sources and the ninety-day history rule; borrowed funds sit outside that rule because the source is a loan statement rather than a savings history.</p>

<h2>How a borrowed payment hits your ratios</h2>
<p>This is the part that decides whether the plan works. A borrowed down payment is debt, and the lender adds its monthly payment to your other obligations when it calculates your total debt service ratio. The insured limit for that ratio is 44 percent of gross income, after the stress test is applied to the mortgage payment itself. A borrowed $30,000 on a line of credit might carry a monthly payment of several hundred dollars, depending on the rate and the repayment terms, and that payment reduces the mortgage you can carry.</p>
<p>A labelled illustration, computed with the same engine as the site's calculators: on a $100,000 gross income with no other debts, property taxes and heat of $500 a month, a 25-year amortization and a qualifying rate of 6.50 percent, the maximum mortgage is about $410,600, set by the housing-cost ratio. A $300 monthly payment on a borrowed down payment does not change that figure, because the first few hundred dollars of debt fit inside the gap between the two ratios. At $600 a month the total-debt ratio takes over and the maximum falls to about $383,200. At $900 a month it is about $338,400. Past a modest threshold, the borrowed money that was meant to get you into a home reduces the home you can get into. The <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> and the <a href="/mortgage-calculators/#affordability">affordability calculator</a> let you test your own figures.</p>
<p>Lenders also look at the total picture. A buyer with strong income, excellent credit and no other debt who borrows five percent to get in a year earlier is a different file from a buyer who is borrowing because there is no savings capacity at all. The first is the person flex-down programs were designed for.</p>

<h2>Deposit loans: a different problem</h2>
<p>In BC, a contract of purchase and sale usually requires a deposit, held in trust by the buyer's or seller's brokerage, within a day or a few days of subject removal. The deposit is part of the down payment, but it is due weeks or months before completion, when the rest of the down payment and the mortgage funds arrive. The timing is the problem. A buyer whose down payment is coming from the sale of their current home, from an RRSP withdrawal under the Home Buyers' Plan, from a First Home Savings Account, or from an investment that takes time to liquidate may have the money but not have it yet.</p>
<p>A deposit loan is short-term credit that covers the deposit until completion, when it is repaid from the funds that arrive. It is common for move-up buyers whose equity is in their current home, and it is often arranged alongside <a href="/bridge-financing/">bridge financing</a>, which covers the larger gap between completion dates. For a first-time buyer, the usual solution is to plan the deposit from savings and the balance of the down payment from the program accounts, since the FHSA and Home Buyers' Plan withdrawals can be timed for completion. A deposit loan from a lender or a short family loan can fill the gap when that planning is not possible.</p>
<p>Two cautions. The deposit is at risk if you fail to complete, so a borrowed deposit on a purchase that might not close is a borrowed loss. And a deposit loan that is still outstanding at completion counts in your ratios like any other debt, so tell your broker about it before the mortgage is finalized, not after.</p>

<h2>The non-traditional premium: 4.50 percent</h2>
<p>Insured mortgages carry a premium charged as a percentage of the loan, and the premium rises with the loan-to-value. For a purchase at 90.01 to 95 percent loan-to-value with a traditional down payment, the premium is 4.00 percent. With a non-traditional, borrowed down payment at the same loan-to-value, the premium is 4.50 percent. Both figures carry a 0.20 percent surcharge if the amortization is longer than 25 years. On a $570,000 mortgage, the difference between 4.00 and 4.50 percent is $2,850, added to the loan and amortized over its life. The <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> shows the premium at each tier.</p>
<p>So a borrowed down payment costs three times: the interest on the borrowed funds, the reduction in what you qualify for, and the higher premium. For some buyers it is still worth it, because waiting to save has its own cost in rent and in the risk of prices or rates moving. For others it is a sign that the purchase is a year or two early. A broker's job is to show the arithmetic both ways, and the <a href="/mortgage-application-checklist/">application checklist</a> is the place to see what a lender will ask for on either path.</p>

${cta({ title: "Find out if borrowing the down payment makes sense for you", text: "Book a 15-minute call. Joshua will run your income, credit and the borrowed payment through the ratios, show you the all-in cost against waiting to save, and tell you which lenders offer flex-down on a file like yours." })}

<h2>Who should not do this</h2>
<ul>
<li><strong>Anyone whose ratios are already tight.</strong> If the borrowed payment pushes you to the limit, the first unexpected cost after moving in becomes a crisis.</li>
<li><strong>Anyone without a cash reserve.</strong> Closing costs still need to be paid, often from your own funds, and a home needs money in its first year. Borrowing the down payment and arriving with nothing left is the pattern that leads to arrears.</li>
<li><strong>Anyone with a short or bruised credit history.</strong> Flex-down programs require strong credit, and the lenders that offer them check it closely.</li>
<li><strong>Anyone who could save it within a year or two.</strong> The three costs above are avoided entirely by waiting, and the programs on the <a href="/first-time-home-buyer-bc/">first-time home buyer page</a>, particularly the First Home Savings Account, make saving faster than it used to be.</li>
<li><strong>Anyone being told it is simple.</strong> It is not. The product exists, it is legitimate, and it has three costs that must be counted honestly.</li>
</ul>
<p>On a mortgage placed with a prime lender under a flex-down program, the lender pays the broker and you pay nothing for the arrangement. Fees arise only on B-lender and private files, with written disclosure on a Form 1A first. If you want the numbers run for your own situation, <a href="/contact/">contact Joshua</a> or book a call.</p>

${callout("A borrowed down payment is still a down payment", "<p>The money has to be real, in your account, and traceable to a loan you are responsible for. Lenders verify the source. The program is a way to fund a five percent down payment from credit, not a way around having one.</p>")}
`;

export default {
  slug: "/deposit-loan-and-borrowed-down-payment/",
  h1: "Borrowed down payments and deposit loans: the flex-down rules",
  lede: "There is no zero-down mortgage in Canada, but a five percent down payment can be borrowed under flex-down rules. How it works, what it does to your ratios, the 4.50 percent premium, and who should not do it.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["Borrowed down payments", "/deposit-loan-and-borrowed-down-payment/"]],
  nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Can I get a mortgage with no down payment in Canada?", a: "Not in the insured market. The minimum is five percent of the first $500,000 and ten percent of the rest, up to $1.5 million. What is allowed is borrowing that minimum from a line of credit, loan or repayable family loan under flex-down rules, with strong credit and a higher insurance premium." },
    { q: "Can I borrow my down payment?", a: "Yes, under the insurers' non-traditional source rules, on one- or two-unit owner-occupied purchases at 90.01 to 95 percent loan-to-value, with a strong credit history, and not for non-permanent residents. Not every lender offers it, and the borrowed payment counts as debt in your ratios." },
    { q: "What is the insurance premium on a borrowed down payment?", a: "4.50 percent of the loan at 90.01 to 95 percent loan-to-value, against 4.00 percent with a traditional down payment, plus 0.20 percent if the amortization exceeds 25 years. On a $570,000 mortgage the half-point difference is $2,850, added to the loan." },
    { q: "What is a deposit loan?", a: "Short-term credit that covers the deposit on a purchase contract, which is due at subject removal, until the rest of your funds arrive at completion. Common for move-up buyers whose equity is in their current home, often arranged with bridge financing." },
    { q: "How does a borrowed down payment affect what I qualify for?", a: "Its monthly payment is added to your debts in the total debt service ratio. In a labelled example at a 6.50 percent qualifying rate on $100,000 income with no other debt, the maximum mortgage is about $410,600; a $300 payment leaves it unchanged, $600 cuts it to about $383,200 and $900 to about $338,400." }
  ]
};
