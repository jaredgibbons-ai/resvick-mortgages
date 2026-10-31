import { short } from "../lib/short.mjs";
import { callout } from "../lib/site.mjs";

const body = `
${short({ answer: "A deferral lets you miss payments with your lender's OK, but the interest gets added to your balance and costs more than you'd think. A skip-a-payment backed by prepayments you've already made costs close to nothing.", who: "Anyone facing a payment they can't make, or wondering whether their mortgage lets them skip one.", next: "Ask your lender for the dollar cost in writing before you agree. If you're already behind, start with the <a href=\"/behind-on-mortgage-payments/\">behind on mortgage payments</a> hub." })}
<h2>Two tools that sound alike and are not</h2>
<p>"Can I skip a mortgage payment?" has two honest answers. That's because a lender might mean two different things by yes.</p>
<p>A <strong>deferral</strong> is a hardship measure. The lender agrees you won't make one or more scheduled payments. The interest for those months gets added to your balance.</p>
<p>A <strong>skip-a-payment</strong> feature is a perk some lenders build into their mortgages. You can skip a payment, usually once a year. Most often, that's because you've already paid ahead by at least that amount.</p>
<p>One is borrowed time that costs interest. The other is time you already paid for. This page explains how each one works, what each costs in dollars, and when each is the right tool.</p>
<p>Already behind, rather than looking ahead to a payment you can't make? Start with the <a href="/behind-on-mortgage-payments/">behind on mortgage payments</a> hub. A deferral is only one step on a longer ladder.</p>

<h2>How a deferral works</h2>
<p>A deferral is an agreement with your lender, made in advance, that some payments won't be made. The mortgage isn't in default, because the lender agreed.</p>
<p>Interest doesn't stop. Each month's interest is worked out as usual. Instead of being paid, it's added to the principal. When payments start again, you owe more than before. You then pay interest on that bigger balance for the rest of the amortization.</p>
<p>It depends on the lender what happens next. Some raise your regular payment so the mortgage still ends on the original date. Others keep the payment the same, so the mortgage ends later.</p>
<p>Deferrals became familiar in 2020, when lenders offered them widely. Today they're a case-by-case hardship measure.</p>
<p>For banks and other federally regulated lenders, the Financial Consumer Agency of Canada sets out what's expected. The source is its Guideline on Existing Consumer Mortgage Loans in Exceptional Circumstances, published July 2023. It asks lenders to do several things:</p>
<ul>
<li>Contact borrowers who are at risk, and offer relief.</li>
<li>Waive their own fees on relief measures for a limited time.</li>
<li>When relief makes the balance grow, not charge interest on the added interest, for a limited time.</li>
</ul>
<p>A payment missed under an agreed relief measure shouldn't be reported to the credit bureaus as missed.</p>
<p>Before you accept, the lender must also tell you a few things. You'll see the new balance and the total cost in dollars. You'll see the effect on your amortization and your new payment.</p>
<p>Credit unions are provincially regulated and set their own policies, so ask.</p>

<h2>What a deferral costs, in numbers</h2>
<p>The figures below are only an example. The rate was chosen for the example and isn't a quote. Your own figures will differ.</p>
<p>Take a $500,000 mortgage at 4.50 percent with 25 years left on the amortization. The monthly payment is $2,767.36. One month of interest at that rate is about $1,858.</p>
<p>Now defer one payment, add that interest to the balance and keep the same payment afterwards. The mortgage takes about three months longer to pay off. It costs roughly $5,700 more in total interest over its life.</p>
<p>Defer six payments the same way, and the mortgage runs about 18 months longer. It costs roughly $35,000 more in interest.</p>
<p>Why is the cost so much bigger than the interest you put off? The added interest sits at the front of a 25-year amortization. Every dollar at the front compounds for the longest time.</p>
<p>Some lenders raise the payment to keep the original end date instead. That lowers the total interest cost. But your monthly payment goes up, which is the opposite of what a household in trouble needs.</p>
<p>Ask which approach your lender uses. Ask for the dollar figure before you agree. The <a href="/mortgage-calculators/#prepayment">prepayment calculator</a> shows the same effect in reverse. It shows how much a lump sum saves when it lands at the front of the amortization.</p>

<h2>How skip-a-payment works</h2>
<p>Several lenders offer skip-a-payment as a feature of the mortgage, not as hardship relief. The usual version works like this. You can skip one regular payment in a 12-month period. You must have already prepaid at least that much through lump sums or higher payments. The mortgage must also be in good standing.</p>
<p>Some lenders allow a skip without a prior prepayment. They just add the interest to the balance. That's really a deferral with a friendlier name.</p>
<p>Your mortgage agreement sets out the rules and limits, and whether the option exists at all. It's usually in the same section as your prepayment privileges. That's why the <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties</a> page is the place to understand it.</p>
<p>When a skip is backed by a prepayment you already made, it costs close to nothing. You're just using time you already bought. When it isn't, it costs the same as deferring one payment. The difference matters. The only way to know which you have is to read your agreement or ask the lender in writing.</p>

<h2>Which tool, when</h2>
<ul>
<li><strong>A one-time cash crunch, with prepayments already made.</strong> Your mortgage is in good standing. Use skip-a-payment, if your mortgage has it. It costs little and leaves no trace.</li>
<li><strong>A short gap in income with a clear end.</strong> Think of a layoff with a start date for your next job, or a payment you know is coming late. Ask for a deferral of one to three payments, agreed in advance, with the cost in writing. It protects your credit and your mortgage.</li>
<li><strong>A payment that won't fit the budget for the foreseeable future.</strong> Neither tool is right. A deferral delays the problem and makes it bigger. The right conversation is about restructuring. That could mean a longer amortization or a change at <a href="/mortgage-renewal-bc/">renewal</a>. It could mean a <a href="/refinance-to-pay-off-debt/">consolidation of other debts</a> into the mortgage, if you still qualify.</li>
<li><strong>A gap with no end in sight.</strong> A deferral may still be the right first step, because it keeps your credit clean while you work out the bigger answer. But pair it with the options on the hub page from day one.</li>
</ul>

<h2>Questions to ask before you agree to either</h2>
<ol>
<li>How many payments, and on what dates?</li>
<li>Will the interest be added to my balance? What's the new balance in dollars?</li>
<li>Will my payment change afterwards, or will the amortization get longer? By how much?</li>
<li>Will anything be reported to the credit bureaus?</li>
<li>Are there fees? Are they waived under your relief policy?</li>
<li>If I catch up later with a lump sum, will there be a penalty? Under FCAC's guideline, a federally regulated lender should waive the penalty on a lump sum made to stop the balance from growing.</li>
<li>Can I have all of that in writing before the first skipped date?</li>
</ol>

${callout("Nothing on this page costs you a broker fee", "<p>A deferral or a skip is arranged with your current lender, and no broker is involved. If a restructuring leads to a new mortgage with an A lender, the lender pays the broker, and you pay nothing. Fees come up only on B-lender and private files. In BC, they must be shown to you in writing, on BCFSA's Form 1A, before you commit.</p>")}

<h2>Prevention: the part most people skip</h2>
<p>The households that need a deferral least are the ones that have been paying a little ahead. A mortgage with a few thousand dollars of prepayments behind it has a skip-a-payment in reserve.</p>
<p>A household that reviews its mortgage each year also knows, before renewal, whether the next payment will fit. That's what Joshua's <a href="/mortgage-aftercare-program/">Resvick Aftercare</a> program is for. It's a yearly check of your mortgage against your household. You also get a conversation about six months before your term ends, so the renewal payment is one you've already planned for.</p>
<p>Looking at a payment you can't make? Want a straight answer on whether a deferral, a restructure or something else is the right move? <a href="/contact/">Contact Joshua</a> and say so in your first message.</p>
`;

export default {
  slug: "/mortgage-payment-deferral/",
  h1: "Mortgage payment deferrals and skip-a-payment in BC: how they work",
  lede: "A deferral pauses payments and adds the interest to your balance. A skip-a-payment uses privileges you already paid for. Here is what each costs, in dollars, and when each is the right tool.",
  crumbs: [["Home", "/"], ["Behind on mortgage payments", "/behind-on-mortgage-payments/"], ["Deferral and skip-a-payment", "/mortgage-payment-deferral/"]],
  nav: "/refinance-mortgage-bc/",
  body,
  faqs: [
    { q: "Can I skip a mortgage payment in Canada?", a: "Sometimes, in one of two ways. Some mortgages include a skip-a-payment privilege, usually once a year and usually only if you have prepaid at least that amount earlier. Otherwise you can ask your lender for a deferral as a hardship measure, in which case the interest for the skipped months is added to your balance. Both need the lender's agreement in advance." },
    { q: "Does a mortgage deferral hurt my credit score?", a: "A payment the lender has agreed to defer under a relief measure should not be reported to the credit bureaus as missed, according to FCAC's guideline for federally regulated lenders. A payment you simply do not make, without an agreement, is reported once it is 30 days late. Get the deferral agreement in writing before the first skipped date." },
    { q: "How much does deferring one mortgage payment cost?", a: "The month's interest, added to your balance, plus the interest on that amount for the rest of the amortization. On an illustrative $500,000 mortgage at 4.50 percent over 25 years, one deferred payment adds about $1,858 to the balance and roughly $5,700 to the total interest cost if the payment is left unchanged, because the added balance compounds for the full remaining term." },
    { q: "Is a deferral the same as a skip-a-payment?", a: "No. A deferral is hardship relief that capitalizes interest and costs you money. A skip-a-payment is a contractual feature that, with most lenders, lets you skip one payment per year because you already prepaid that amount, so it costs little. Some lenders use the name skip-a-payment for what is really a deferral, so read the agreement." },
    { q: "Can I defer my mortgage if I lose my job?", a: "You can ask, and federally regulated lenders are expected to consider relief for borrowers at risk and to waive related fees for a limited period. Whether a deferral is granted, for how long, and on what terms depends on the lender and your file. A short, defined gap in income is the situation a deferral suits best; a long-term shortfall needs a restructuring conversation instead." }
  ]
};
