import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "There's no zero-down mortgage in Canada. But you can borrow a five percent down payment under flex-down rules. It costs you three ways: interest, a smaller approval and a higher insurance premium.",
  who: "Read on if you're short on savings and weighing a loan for your down payment. Gift from family? See <a href=\"/gifted-down-payment/\">gifted down payments</a>.",
  next: "<a href=\"/mortgage-calculators/#affordability\">Test your ratios</a> with the loan payment included, then compare that with waiting to save."
})}
<h2>The honest answer on no-money-down</h2>
<p>People search for a no-down-payment mortgage in Canada. The straight answer is that the zero-down product doesn't exist in the insured market. Every insured purchase needs a minimum down payment. It's five percent of the first $500,000 of the price. It's ten percent of the portion above that, up to the $1.5 million ceiling. Beyond that, it's twenty percent.</p>
<p>What does exist is a set of rules about where the down payment can come from. Under those rules, it can be borrowed. That's what a flex-down or borrowed down payment is: a real five percent down payment, funded from credit rather than from savings.</p>
<p>The rest of this page explains how that works. We'll look at how a borrowed payment changes your qualifying ratios. We'll cover what a deposit loan is and why it's a separate problem, and the higher insurance premium that applies. And we'll say who should not do any of this.</p>

<h2>Flex-down, explained</h2>
<p>The mortgage insurers allow what they call non-traditional sources of down payment. That's money that is borrowed, rather than saved or gifted. CMHC's published program rules allow non-traditional sources only in some cases. The purchase must be a one- or two-unit home that you'll live in. The loan-to-value must be 90.01 to 95 percent. You need a strong credit history. And it's not available to non-permanent residents. In practice, the borrowed funds come from one of three places:</p>
<ul>
<li><strong>An unsecured line of credit or personal loan</strong> in your name. It comes from a bank or credit union and is arranged before the purchase.</li>
<li><strong>A family loan</strong> that is genuinely repayable. A gift that must be paid back is a loan, and lenders treat it as one. The page on <a href="/gifted-down-payment/">gifted down payments</a> explains the difference and why it matters.</li>
<li><strong>Other credit</strong>, such as a credit card advance. Some lenders accept it, and all of them price it into your ratios. It's the most expensive source and the least advisable.</li>
</ul>
<p>Not every lender offers flex-down programs. The ones that do add their own rules on top of the insurer's. These can include a minimum credit score and a cap on how much of the down payment can be borrowed. Sometimes closing costs must come from your own funds.</p>
<p>The <a href="/down-payment-guide-bc/">down payment guide</a> covers the standard sources and the ninety-day history rule. Borrowed funds sit outside that rule, because the source is a loan statement rather than a savings history.</p>

<h2>How a borrowed payment hits your ratios</h2>
<p>This part decides whether the plan works. A borrowed down payment is debt. The lender adds its monthly payment to your other obligations when it works out your total debt service ratio. The insured limit for that ratio is 44 percent of gross income. The stress test is applied to the mortgage payment itself first. A borrowed $30,000 on a line of credit might carry a monthly payment of several hundred dollars, depending on the rate and the repayment terms. That payment reduces the mortgage you can carry.</p>
<p>Here's a labelled illustration, computed with the same engine as the site's calculators. Say you earn $100,000 gross with no other debts. Property taxes and heat are $500 a month. The amortization is 25 years and the qualifying rate is 6.50 percent. The maximum mortgage is about $410,600, set by the housing-cost ratio.</p>
<p>A $300 monthly payment on a borrowed down payment doesn't change that figure. The first few hundred dollars of debt fit inside the gap between the two ratios. At $600 a month, the total-debt ratio takes over, and the maximum falls to about $383,200. At $900 a month, it's about $338,400. Past a modest threshold, the borrowed money that was meant to get you into a home reduces the home you can get into. The <a href="/how-much-mortgage-can-i-afford/">affordability guide</a> and the <a href="/mortgage-calculators/#affordability">affordability calculator</a> let you test your own figures.</p>
<p>Lenders also look at the whole picture. A buyer has strong income, excellent credit and no other debt. They borrow five percent to get in a year earlier. That's a different file from a buyer who is borrowing because there's no savings capacity at all. The first is the person flex-down programs were designed for.</p>

<h2>Deposit loans: a different problem</h2>
<p>In BC, a contract of purchase and sale usually requires a deposit. The buyer's or seller's brokerage holds it in trust. It's due within a day or a few days of subject removal. The deposit is part of the down payment. But it's due weeks or months before completion, when the rest of the down payment and the mortgage funds arrive. The timing is the problem.</p>
<p>Some buyers have the money but don't have it yet. The down payment may be coming from the sale of their current home. It may come from an RRSP withdrawal under the Home Buyers' Plan, or from a First Home Savings Account. It may come from an investment that takes time to sell.</p>
<p>A deposit loan is short-term credit that covers the deposit until completion. It's repaid from the funds that arrive then. It's common for move-up buyers whose equity is in their current home. It's often arranged alongside <a href="/bridge-financing/">bridge financing</a>, which covers the larger gap between completion dates.</p>
<p>For a first-time buyer, the usual fix is to plan. Pay the deposit from savings. Take the balance of the down payment from the program accounts, since FHSA and Home Buyers' Plan withdrawals can be timed for completion. A deposit loan from a lender, or a short family loan, can fill the gap when that planning isn't possible.</p>
<p>Two cautions. The deposit is at risk if you fail to complete, so a borrowed deposit on a purchase that might not close is a borrowed loss. And a deposit loan still outstanding at completion counts in your ratios like any other debt. Tell your broker about it before the mortgage is finalized, not after.</p>

<h2>The non-traditional premium: 4.50 percent</h2>
<p>Insured mortgages carry a premium charged as a percentage of the loan. The premium rises with the loan-to-value. For a purchase at 90.01 to 95 percent loan-to-value with a traditional down payment, the premium is 4.00 percent. With a non-traditional, borrowed down payment at the same loan-to-value, the premium is 4.50 percent. Both figures carry a 0.20 percent surcharge if the amortization is longer than 25 years. On a $570,000 mortgage, the difference between 4.00 and 4.50 percent is $2,850. It's added to the loan and paid off over its life. The <a href="/mortgage-calculators/#cmhc">CMHC premium calculator</a> shows the premium at each tier.</p>
<p>So a borrowed down payment costs you three times. You pay interest on the borrowed funds. You qualify for less. And you pay the higher premium. For some buyers it's still worth it, because waiting to save has its own cost in rent and in the risk of prices or rates moving. For others it's a sign that the purchase is a year or two early. A broker's job is to show the arithmetic both ways. The <a href="/mortgage-application-checklist/">application checklist</a> shows what a lender will ask for on either path.</p>

${cta({ title: "Find out if borrowing the down payment makes sense for you", text: "Book a 15-minute call. Joshua will run your income, credit and the borrowed payment through the ratios, show you the all-in cost against waiting to save, and tell you which lenders offer flex-down on a file like yours." })}

<h2>Who should not do this</h2>
<ul>
<li><strong>Anyone whose ratios are already tight.</strong> If the borrowed payment pushes you to the limit, the first unexpected cost after moving in becomes a crisis.</li>
<li><strong>Anyone without a cash reserve.</strong> Closing costs still need to be paid, often from your own funds. A home needs money in its first year too. Borrowing the down payment and arriving with nothing left is the pattern that leads to arrears.</li>
<li><strong>Anyone with a short or bruised credit history.</strong> Flex-down programs require strong credit, and the lenders that offer them check it closely.</li>
<li><strong>Anyone who could save it within a year or two.</strong> Waiting avoids all three costs above. The programs on the <a href="/first-time-home-buyer-bc/">first-time home buyer page</a> help too. The First Home Savings Account, in particular, makes saving faster than it used to be.</li>
<li><strong>Anyone being told it is simple.</strong> It isn't. The product exists and it's legitimate. It has three costs that must be counted honestly.</li>
</ul>
<p>On a mortgage placed with a prime lender under a flex-down program, the lender pays the broker and you pay nothing for the arrangement. Fees arise only on B-lender and private files. You get written disclosure on a Form 1A first. If you want the numbers run for your own situation, <a href="/contact/">contact Joshua</a> or book a call.</p>

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
