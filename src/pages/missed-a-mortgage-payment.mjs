import { callout } from "../lib/site.mjs";

const body = `
<h2>What one missed payment is, and is not</h2>
<p>A single missed mortgage payment is a credit problem and a cost problem. It is not a foreclosure, and in British Columbia it is nowhere near one. Technically, missing a scheduled payment is a default under your mortgage contract, and the contract gives the lender rights that it almost never uses after one payment. In practice, what happens after one missed payment is a fee, some interest, a note on your credit file if the payment goes past 30 days, and a phone call. What happens next depends mostly on what you do in the first two weeks.</p>
<p>This page walks through the sequence a lender follows in BC, roughly day by day, and then through the steps that contain the damage. If you are more than one payment behind, or a letter from a lawyer has arrived, start with the <a href="/behind-on-mortgage-payments/">behind on mortgage payments</a> hub, which lays out your options in order.</p>

<h2>Day 1 to 15: the payment bounces</h2>
<p>Most mortgage payments are taken by pre-authorized debit. If the account does not have the money, the debit is returned. Two things happen immediately. Your bank charges a non-sufficient-funds fee on the chequing account, and your mortgage lender usually charges a returned-payment or missed-payment fee under the mortgage agreement. The amounts vary by lender and are set out in your contract and in your lender's fee schedule, so look them up rather than guessing. The missed payment itself stays owing, and interest keeps accruing on the whole balance as it always does. Nothing is reported to a credit bureau yet.</p>
<p>Some lenders retry the debit after a few days; many do not. Do not assume either. If you know the money will be in the account on a specific date, call the lender and ask them to re-present the payment on that date, or make the payment manually through online banking. Many lenders accept a one-time payment to the mortgage account from a different bank account.</p>

<h2>Day 15 to 30: the lender makes contact</h2>
<p>You will get a call, a letter or both. The tone is usually administrative at this stage: the payment was missed, here is the amount with the fee, please bring the account current. This is the best moment in the whole sequence to act, because the lender's own relief options are all still open and nothing has been reported. The <a href="/behind-on-mortgage-payments/">call script on the hub page</a> covers what to say. The short version is to tell the truth about why the payment was missed, say when you can pay, and ask whether anything should be set up so it does not happen again.</p>

<h2>Day 30 and after: credit reporting begins</h2>
<p>Lenders report to the credit bureaus monthly. A payment that is 30 days late is commonly reported as such, and a payment that reaches 60 or 90 days late is reported at each of those levels. The mortgage line on your credit report then shows the late payment for years, and the effect on your score is larger than most people expect, because a mortgage is the largest account on the report and a late mortgage payment is read by every future lender as a serious signal. This is the real cost of a single missed payment: not the fee, but the mark that follows you to your next renewal, refinance or purchase.</p>
<p>There is one important exception. Under the Financial Consumer Agency of Canada's guideline for federally regulated lenders (published July 2023), a payment that the lender agreed you could miss as part of a relief measure should not be reported to the credit bureaus as a missed payment. That is why calling before the due date, and getting the arrangement in writing, matters so much. A deferral agreed to in advance is a relief measure. A payment that simply bounced is not.</p>

<h2>Beyond 90 days: the demand letter</h2>
<p>If payments continue to be missed, the lender eventually sends the file to a lawyer, and the lawyer sends a demand letter. The People's Law School, whose foreclosure guide was reviewed for legal accuracy in April 2025, explains that the letter must state the exact amount owing and give you a choice: reinstate the mortgage by paying the arrears and costs by a deadline, or redeem it by paying the whole balance. Lenders commonly reach this point after about three months of missed payments, sometimes sooner. The demand letter is the start of the court process, not the end of your options, and the <a href="/mortgage-default-and-foreclosure-bc/">default and foreclosure in BC</a> page explains what follows and how slow it is.</p>

<h2>Containing the damage this week</h2>
<ol>
<li><strong>Pay it if you can, even late.</strong> A payment made before the 30-day mark usually avoids the credit report entirely. If you can cover it with savings, a family loan or an early paycheque, do that first and sort out the cause second.</li>
<li><strong>If you cannot pay it, call before day 30.</strong> Ask for the hardship or financial-difficulty team and ask what relief measures are available. A one-payment deferral, with the payment capitalized onto the balance, is a common answer for a one-off problem. The <a href="/mortgage-payment-deferral/">deferral and skip-a-payment</a> page explains what that costs.</li>
<li><strong>Ask how it will be reported.</strong> Get the answer in writing. If the lender agrees to a relief measure, the missed payment should not be reported as late.</li>
<li><strong>Fix the cause.</strong> If the payment date lands before your pay date, ask the lender to move it. If the payment is simply too large for the budget, that is a different problem, and a <a href="/refinance-to-pay-off-debt/">consolidation of other debts</a> or a longer amortization may be the answer, provided you still qualify.</li>
<li><strong>Check your credit report in 60 days.</strong> Both bureaus provide free copies. If a payment that was covered by an agreed relief measure shows as late, dispute it with the lender first and the bureau second, with your written agreement attached.</li>
</ol>

<h2>If the mark has already landed</h2>
<p>A late payment that has been reported does not come off because you catch up, but its weight fades as new, on-time payments accumulate above it. Lenders look at the pattern as much as the event. One late payment two years ago, followed by a clean record, is a question to answer in a letter of explanation; three late payments in the last year is a reason for an A lender to decline. The <a href="/build-credit-for-a-mortgage/">credit building</a> page covers what moves a score and how long it takes, which matters if a renewal or refinance is coming.</p>
<p>At renewal, keep in mind that your current lender sees your payment history directly and may offer a renewal regardless, while a new lender sees the credit report and may not. If you are planning to switch lenders at maturity, the cleaner the twelve months before maturity, the better.</p>

${callout("Why this page does not sell you anything", "<p>One missed payment is not a reason to refinance, switch lenders or take a second mortgage, and a broker who suggests any of those after a single late payment is solving their problem, not yours. On an A-lender mortgage the lender pays the broker and you pay nothing. Fees arise only on B and private files, which a single missed payment should never require.</p>")}

<h2>A straight answer if you want one</h2>
<p>Most people who miss one payment do not need a broker. They need to make the payment, make the call and fix the cause. If the missed payment is a symptom of something larger, such as a payment that no longer fits the household budget, a renewal coming at a much higher rate, or debts that have grown around the mortgage, then it is worth a conversation about whether the structure of the mortgage can be changed while your credit still qualifies you for the better options. Joshua will tell you plainly if nothing needs to change. <a href="/contact/">Contact him</a> if you want that conversation, and mention the missed payment in your first message.</p>
`;

export default {
  slug: "/missed-a-mortgage-payment/",
  h1: "Missed a mortgage payment? What happens next in BC",
  lede: "One missed payment is a credit problem, not a foreclosure. Here is what your lender does, roughly day by day, and the five steps that contain the damage this week.",
  crumbs: [["Home", "/"], ["Behind on mortgage payments", "/behind-on-mortgage-payments/"], ["Missed a payment", "/missed-a-mortgage-payment/"]],
  nav: "/refinance-mortgage-bc/",
  body,
  faqs: [
    { q: "What happens if I miss one mortgage payment in Canada?", a: "The payment is returned, your lender charges a missed-payment fee set out in your mortgage agreement, and interest continues on the balance. If the payment is still unpaid at 30 days it is commonly reported to the credit bureaus as late. One missed payment does not start foreclosure, and in BC foreclosure is a court process that takes months." },
    { q: "Does one missed mortgage payment affect my credit score?", a: "If it is paid within 30 days, usually not. Once it is 30 days late it is typically reported, and a late mortgage payment weighs more than most other late payments because the mortgage is the largest account on your report. A payment the lender agreed to defer under a relief measure should not be reported as missed." },
    { q: "Can I just make a double payment next month?", a: "Often, but check with the lender first. Some lenders apply the next pre-authorized debit normally and leave the arrears on the account until you pay them separately, so the account stays behind. Ask the lender exactly how to bring the account current and confirm the amount, including any fee." },
    { q: "Should I refinance because I missed a payment?", a: "Not because of one missed payment. A refinance has costs and may require breaking your term. It becomes worth considering only if the missed payment is a sign that the payment no longer fits your budget, in which case consolidating other debts or lengthening the amortization may help, provided your credit still qualifies you." },
    { q: "How long does a late mortgage payment stay on my credit report?", a: "Late payments typically remain on a Canadian credit report for several years from the date of the late payment, with the exact period depending on the bureau. Its effect fades as on-time payments accumulate after it. Check both bureaus about 60 days after the event, and dispute any late mark that was covered by an agreed relief measure." }
  ]
};
