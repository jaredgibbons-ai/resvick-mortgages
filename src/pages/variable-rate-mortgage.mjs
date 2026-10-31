import { cta, callout, ratesStrip } from "../lib/site.mjs";

const body = `
<h2>Two kinds of variable, and why the difference matters</h2>
<p>"Variable rate mortgage" covers two products that behave quite differently, and many borrowers do not learn which one they have until the rate moves. Both have an interest rate that changes when the lender's prime rate changes. They differ in what happens to your payment.</p>
<p>With an <strong>adjustable-rate mortgage</strong>, the payment itself changes whenever prime changes. When the rate rises, the payment rises, and when it falls, the payment falls. The payment is recalculated so that the mortgage stays on its original amortization schedule. You feel every rate change immediately, but the balance keeps paying down on plan.</p>
<p>With a <strong>variable-rate mortgage with a static payment</strong>, the payment stays the same while the rate moves. What changes is the split between interest and principal inside each payment. When the rate rises, more of the unchanged payment goes to interest and less to principal, so the balance falls more slowly and the amortization lengthens. When the rate falls, the reverse happens and you pay down faster. This feels calmer, but it carries a feature that adjustable mortgages do not: a trigger rate, explained below.</p>
<p>Before choosing, ask which of the two the product is. The answer is in your mortgage contract, and a broker can tell you before you sign.</p>

<h2>Prime and the Bank of Canada</h2>
<p>A variable rate is quoted relative to the lender's prime rate, for example prime minus a discount or prime plus a small premium. Prime itself follows the Bank of Canada's policy rate, which the Bank reviews and announces on a published schedule through the year. Canadian lenders have historically set prime about 2.2 percentage points above the Bank's policy rate, so a move in the policy rate usually shows up as an equal move in prime and in your rate within a short time.</p>
<p>This is the main reason the price of a variable mortgage is easy to understand and difficult to predict. You know what the rule is. You do not know what the Bank will do. The Bank's decisions respond to inflation and economic conditions, and its own announcements usually avoid promises about the future. If you want plain-language explanations of announcements as they happen, the <a href="/guides/">guides library</a> carries them, and borrowers in the <a href="/mortgage-aftercare-program/">Resvick Aftercare program</a> receive them directly.</p>
<p>This page prints no rate in its text; a 15-minute call gets you today's variable pricing for your own file.</p>
${ratesStrip()}

<h2>The trigger rate and the trigger point</h2>
<p>On a static-payment variable mortgage, there is a rate at which your fixed payment covers only the interest and none of the principal. That is the <strong>trigger rate</strong>. Above it, the payment no longer covers the interest, the shortfall is added to the balance and the balance grows. The balance at which a lender will step in, a figure set in the contract, is the <strong>trigger point</strong>. When a mortgage reaches it, a lender typically asks for one of a few remedies, such as raising the payment, making a lump-sum payment or converting to another product.</p>
<p>An illustration with rates chosen for the sake of example. Take a $500,000 mortgage with a 25-year amortization at a variable rate of 4.00 percent, compounded monthly. The monthly payment is $2,639.18. Interest on $500,000 at about 6.33 percent comes to roughly $2,639 a month, so the trigger rate at the outset is about 6.33 percent. If the variable rate were to rise past that level and stay there, the payment would stop reducing the balance.</p>
<p>The trigger rate is not fixed. As you pay down principal at lower rates, the interest on a smaller balance falls and the trigger rate rises, which gives you more room. The reverse happens if the rate rises and the balance stops falling. Not every lender states the trigger rate in your paperwork, so ask. In 2022 and 2023, when rates rose quickly, a number of borrowers with static-payment variable mortgages reached their trigger rates, which is why the question is worth asking at the start.</p>

<h2>What a rate move does to the payment</h2>
<p>On an adjustable-rate mortgage the effect is direct. Using the same example, a $500,000 balance with 25 years remaining and monthly compounding gives a payment of about $2,371 at 3.00 percent, about $2,639 at 4.00 percent and about $3,222 at 6.00 percent. A three-point change in the rate, from 3.00 to 6.00 percent, adds about $850 a month. That figure is a payment on the original balance and the full amortization, so a real mortgage partway through its term would differ in the details.</p>
<p>The <a href="/mortgage-calculators/#payment">payment calculator</a> lets you test your own balance and rate, and you can select the compounding method that matches your mortgage. The right habit is to test at least two or three plausible rates, including a bad one, before deciding.</p>

<h2>Conversion rights</h2>
<p>Many variable mortgages can be converted to a fixed rate during the term, often without a penalty. This lets you start variable and lock in if rates begin to rise. Read the specifics. The fixed rate you are offered at conversion is set by the lender on the day, and it may be higher than the rate it offers to new customers. Some lenders limit the terms available at conversion or attach conditions to them. Ask for the conversion rate in writing if you can, and compare it with what another lender would offer.</p>
<p>The <a href="/fixed-vs-variable-mortgage/">fixed versus variable</a> page covers the wider comparison, including the difference in penalties, which are usually smaller on a variable mortgage.</p>

<h2>Payment shock and the renewal wave</h2>
<p>Payment shock is the sudden rise in what you pay when a fixed term ends and the new rate is higher. It has been central to the discussion of Canadian mortgages since the Bank of Canada raised rates. According to Bank of Canada (2025) analysis, roughly 60 percent of outstanding mortgages renew in 2025 and 2026, and borrowers coming off a five-year fixed face an average payment increase of roughly 15 to 20 percent. The same analysis found that variable-rate borrowers, whose payments had already adjusted to higher rates, are expected to see an average decrease of roughly 5 to 7 percent, according to the Bank's 2025 projection. The point is not that variable is better. It is that where you stand depends on which product you had and when you took it, and that exposure to rate changes arrives at different moments for different structures.</p>
<p>If your own mortgage is coming up for renewal, the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains how to compare your options, including a move from variable to fixed or the reverse.</p>

<h2>Who should think twice about variable</h2>
<p>A variable rate is a reasonable choice for many households, but some situations call for caution.</p>
<ul>
<li><strong>A tight budget.</strong> If a payment increase of a few hundred dollars a month would force changes you cannot make, the certainty of a fixed rate may be worth its price.</li>
<li><strong>Little room beyond the stress test.</strong> Lenders qualify you at a higher rate than you pay, but a household with very little margin may still find a variable payment uncomfortable.</li>
<li><strong>A small cushion.</strong> Without savings to absorb surprises, rate risk compounds other risks, such as a job loss or a rise in other debt payments.</li>
<li><strong>A static-payment mortgage with a low trigger rate.</strong> If the trigger rate is close to the current rate, a small rise could stop principal reduction.</li>
<li><strong>A preference for a plan over a bet.</strong> If you will lose sleep over rate announcements, that is a real cost.</li>
</ul>
<p>Variable suits households that have room, flexibility and tolerance for movement, and who value the smaller penalty if they leave early.</p>

${callout("Variable and aftercare", "<p>A variable mortgage works best when someone is watching it. Resvick Aftercare includes rate monitoring and plain-language notes after Bank of Canada announcements, so that a change in rates prompts a conversation about conversion or renewal. If your mortgage is arranged somewhere else, the free renewal reminder is a starting point.</p>")}

<h2>How Joshua approaches the decision</h2>
<p>Joshua Resvick asks about your budget, your reserves and your plans before discussing rates, because the structure matters as much as the number. He compares variable and fixed options across a wide range of lenders, including the trigger rate, the conversion terms and the penalty on each, and presents them in writing in the <a href="/lender-comparison-report/">Lender Comparison Report</a>. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. The wider rate landscape is on the <a href="/mortgage-rates-bc/">mortgage rates in BC</a> page.</p>

${cta({ title: "Check how a variable would behave for you", text: "Bring your numbers and Joshua will show you the payment at several rates, your trigger rate and the conversion terms before you decide.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/variable-rate-mortgage/",
  h1: "Variable rate mortgages in BC: payments, triggers and who it suits",
  lede: "Adjustable versus variable with a static payment, the trigger rate, and the honest math of riding prime.",
  crumbs: [["Home", "/"], ["Rates", "/mortgage-rates-bc/"], ["Variable rate", "/variable-rate-mortgage/"]],
  nav: "/mortgage-rates-bc/", body,
  faqs: [
    { q: "What is the difference between an adjustable-rate and a variable-rate mortgage?", a: "On an adjustable-rate mortgage the payment changes whenever prime changes. On a variable-rate mortgage with a static payment the payment stays the same and the split between interest and principal changes instead. Check your contract to see which one you have." },
    { q: "What is a trigger rate?", a: "On a static-payment variable mortgage, it is the rate at which your fixed payment covers only the interest and none of the principal. Above it, the balance can grow. Ask your lender or broker what yours is, since it changes as the balance changes." },
    { q: "Can I convert a variable mortgage to a fixed rate?", a: "Many variable mortgages allow conversion to a fixed rate during the term, often without a penalty. The rate offered is set by the lender on the day and may be higher than its best rate for new customers, so ask for it and compare it with other lenders." },
    { q: "Is a variable mortgage penalty smaller than a fixed penalty?", a: "Usually. The penalty on a variable-rate mortgage is typically three months of interest, while a fixed-rate penalty is usually the greater of three months of interest and the interest rate differential. Confirm the exact wording in your own mortgage contract before you rely on it." },
    { q: "Who should avoid a variable-rate mortgage?", a: "Households with a tight budget, a small cash cushion or a low trigger rate should be cautious, since a rise in rates could strain them. A variable rate suits borrowers who have room in their budget and can tolerate payments that move." }
  ]
};
