import { cta, callout, ratesStrip } from "../lib/site.mjs";
import { bocDates } from "../lib/boc-dates.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "A variable rate moves with your lender's prime rate, which follows the Bank of Canada. With an adjustable mortgage your payment moves too. With a static payment, the payment stays put and the split between interest and principal moves, which brings in a trigger rate.",
  who: "Borrowers weighing variable against fixed, and anyone who already has a variable mortgage and wants to know how it behaves.",
  next: "Test a few rates, including a bad one, in the <a href=\"/mortgage-calculators/#payment\">payment calculator</a>, then compare with the <a href=\"/fixed-vs-variable-mortgage/\">fixed versus variable</a> guide."
})}
<h2>Two kinds of variable, and why it matters</h2>
<p>"Variable rate mortgage" covers two products that behave quite differently. Many borrowers don't learn which one they have until the rate moves. Both have a rate that changes when the lender's prime rate changes. They differ in what happens to your payment.</p>
<p>With an <strong>adjustable-rate mortgage</strong>, the payment itself changes whenever prime changes. When the rate goes up, the payment goes up. When it goes down, the payment goes down. The payment is reworked so the mortgage stays on its original schedule. You feel every change right away, but your balance keeps going down as planned.</p>
<p>With a <strong>variable-rate mortgage with a static payment</strong>, the payment stays the same while the rate moves. What changes is the split between interest and principal inside each payment.</p>
<p>When the rate rises, more of that same payment goes to interest and less to principal. Your balance falls more slowly, and the amortization gets longer. When the rate falls, the reverse happens and you pay down faster.</p>
<p>This feels calmer. But it has a feature adjustable mortgages don't: a trigger rate, explained below.</p>
<p>Before you choose, ask which of the two you're getting. The answer is in your mortgage contract. A broker can tell you before you sign.</p>

<h2>Prime and the Bank of Canada</h2>
<p>A variable rate is quoted against the lender's prime rate. For example, prime minus a discount, or prime plus a small premium.</p>
<p>Prime follows the Bank of Canada's policy rate. The Bank reviews and announces that rate on a set schedule through the year. Canadian lenders have historically set prime about 2.2 points above the Bank's rate. So a move in the policy rate usually shows up as the same move in prime, and in your rate, within a short time.</p>
<p>That's why a variable rate is easy to understand and hard to predict. You know the rule. You don't know what the Bank will do. The Bank responds to inflation and the economy, and its announcements usually avoid promises about the future.</p>
<p>Want plain-language notes on each announcement? The <a href="/guides/">guides library</a> carries them. Borrowers in the <a href="/mortgage-aftercare-program/">Resvick Aftercare program</a> get them directly.</p>
<p>This page prints no rate in its text. A 15-minute call gets you today's variable pricing for your own file.</p>
${ratesStrip()}

<h2>The trigger rate and the trigger point</h2>
<p>On a static-payment variable mortgage, there's a rate where your payment covers only the interest. None of it goes to principal. That's the <strong>trigger rate</strong>.</p>
<p>Above it, the payment doesn't cover all the interest. The shortfall gets added to the balance, and the balance grows.</p>
<p>Your contract also sets a balance where the lender will step in. That's the <strong>trigger point</strong>. When a mortgage reaches it, a lender usually asks for one of a few fixes. You might raise the payment, make a lump-sum payment or convert to another product.</p>
<p>Here's an example, with rates chosen just to show the idea. Take a $500,000 mortgage with a 25-year amortization at a variable rate of 4.00 percent, compounded monthly. The monthly payment is $2,639.18.</p>
<p>Interest on $500,000 at about 6.33 percent comes to roughly $2,639 a month. So the trigger rate at the start is about 6.33 percent. If the variable rate rose past that and stayed there, the payment would stop lowering the balance.</p>
<p>The trigger rate isn't fixed. As you pay down principal, the interest on a smaller balance falls, and the trigger rate rises. That gives you more room. The reverse happens if the rate rises and the balance stops falling.</p>
<p>Not every lender lists the trigger rate in your paperwork, so ask. In 2022 and 2023, rates rose quickly. A number of borrowers with static-payment variable mortgages hit their trigger rates. That's why the question is worth asking at the start.</p>

<h2>What a rate move does to the payment</h2>
<p>On an adjustable-rate mortgage, the effect is direct. Use the same example: a $500,000 balance with 25 years left and monthly compounding.</p>
<p>The payment is about $2,371 at 3.00 percent. It's about $2,639 at 4.00 percent and about $3,222 at 6.00 percent. A three-point change, from 3.00 to 6.00 percent, adds about $850 a month.</p>
<p>That's a payment on the original balance over the full amortization. A real mortgage partway through its term would differ in the details.</p>
<p>The <a href="/mortgage-calculators/#payment">payment calculator</a> lets you test your own balance and rate. You can pick the compounding method that matches your mortgage. A good habit is to test two or three likely rates, including a bad one, before you decide.</p>

<h2>Conversion rights</h2>
<p>Many variable mortgages can be switched to a fixed rate during the term, often with no penalty. That lets you start variable and lock in if rates start to rise.</p>
<p>Read the details. The fixed rate you're offered at conversion is set by the lender that day. It may be higher than what the lender offers new customers. Some lenders limit which terms you can pick, or add conditions. Ask for the conversion rate in writing if you can, and compare it with what another lender would offer.</p>
<p>The <a href="/fixed-vs-variable-mortgage/">fixed versus variable</a> page covers the wider comparison. That includes the difference in penalties, which are usually smaller on a variable mortgage.</p>

<h2>Payment shock and the renewal wave</h2>
<p>Payment shock is the sudden jump in what you pay when a fixed term ends at a higher rate. It's been a big part of the mortgage talk in Canada since the Bank of Canada raised rates.</p>
<p>The Bank of Canada (2025) looked at this. It found that roughly 60 percent of outstanding mortgages renew in 2025 and 2026. Borrowers coming off a five-year fixed face an average payment increase of roughly 15 to 20 percent.</p>
<p>The same analysis looked at variable-rate borrowers whose payments had already adjusted to higher rates. It projected they are expected to see an average decrease of roughly 5 to 7 percent.</p>
<p>The point isn't that variable is better. It's that where you stand depends on which product you had and when you took it. Rate changes reach different structures at different times.</p>
<p>If your own mortgage is coming up for renewal, the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains how to compare your options. That includes moving from variable to fixed, or the reverse.</p>

<h2>Who should think twice about variable</h2>
<p>A variable rate is a fair choice for many households. Some situations call for caution.</p>
<ul>
<li><strong>A tight budget.</strong> If a payment jump of a few hundred dollars a month would force changes you can't make, a fixed rate's certainty may be worth its price.</li>
<li><strong>Little room past the stress test.</strong> Lenders qualify you at a higher rate than you pay. Still, a household with very little margin may find a moving payment uncomfortable.</li>
<li><strong>A small cushion.</strong> Without savings to absorb surprises, rate risk adds to other risks. A job loss or higher payments on other debt are two examples.</li>
<li><strong>A static-payment mortgage with a low trigger rate.</strong> If the trigger rate is close to the current rate, a small rise could stop your principal from going down.</li>
<li><strong>A preference for a plan over a bet.</strong> If rate announcements will cost you sleep, that's a real cost.</li>
</ul>
<p>Variable suits households with room, flexibility and comfort with movement. It also suits people who value the smaller penalty if they leave early.</p>

${callout("Variable and aftercare", "<p>A variable mortgage works best when someone is watching it. Resvick Aftercare includes rate monitoring and plain-language notes after Bank of Canada announcements. So a rate change prompts a talk about converting or renewing. If your mortgage is somewhere else, the free renewal reminder is a good start.</p>")}

<h2>How Joshua approaches the decision</h2>
<p>Joshua Resvick asks about your budget, your savings and your plans before he talks rates. The structure matters as much as the number.</p>
<p>He compares variable and fixed options across a wide range of lenders. He looks at the trigger rate, the conversion terms and the penalty on each. Then he puts them in writing in the <a href="/lender-comparison-report/">Lender Comparison Report</a>.</p>
<p>When a mortgage goes to a mainstream (A) lender, the lender pays the broker. You pay nothing for the service. The wider rate picture is on the <a href="/mortgage-rates-bc/">mortgage rates in BC</a> page.</p>

${bocDates()}
${cta({ title: "Check how a variable would behave for you", text: "Bring your numbers. Joshua will show you the payment at several rates, your trigger rate and the conversion terms before you decide.", href: "/contact/", label: "Contact Joshua" })}
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
