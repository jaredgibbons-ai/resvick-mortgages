import { short } from "../lib/short.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
${short({ answer: "Your renewal letter is your lender's first offer, not your only one. At maturity you can sign, negotiate, switch lenders with no penalty, or refinance. Start comparing about 120 days before your term ends.", who: "BC homeowners whose renewal letter has arrived, or whose maturity date is within the next year.", next: "Run the renewal calculator below, or set a <a href=\"/mortgage-renewal-reminder/\">free renewal reminder</a> if you're still months away." })}
<h2>Your renewal letter is one offer, not the only offer</h2>
<p>Has a letter from your lender landed on the counter? Is your maturity date coming into view? Then this page is for you.</p>

<h2>Why so many people are renewing at once</h2>
<p>Most Canadian mortgages have terms of five years or less. So they come up for renewal fairly often. Right now, an unusually large crowd is renewing at the same time.</p>
<p>Research from the Bank of Canada (2025, Staff Analytical Note 2025-21) looked at this. It estimated that about 60 percent of all outstanding mortgages renew in 2025 or 2026. About 60 percent of those borrowers face a higher payment.</p>
<p>The same research found the average payment is about 10 percent higher for 2025 renewers. For 2026 renewers, it's about 6 percent higher. Both are compared with December 2024.</p>
<p>But averages hide a wide range. People leaving a five-year fixed rate faced increases of roughly 15 to 20 percent. People with variable-rate mortgages were expected to see payments fall by about 5 to 7 percent. Your own change depends on your rate now, the rate you're offered and how much of the balance is left.</p>
<p>Here's an example to make it real. It's not a forecast. A $400,000 balance with 22 years of amortization left costs $1,872.51 a month at 2.00 percent. Renew at 4.50 percent on the same balance and amortization, and it's $2,380.38. That's about 27 percent more. If the number on your letter looks anything like that, keep reading.</p>

<h2>Your four real options</h2>
<p>When a mortgage matures, the balance is technically due. There are four ways to handle that, and each one plays out differently.</p>
<ol>
<li><strong>Sign your lender's offer.</strong> It's the easiest option, with no new application. But you're relying on one lender's pricing, so compare first.</li>
<li><strong>Negotiate with your current lender.</strong> Lenders often have room beyond the first offer, especially once they know you have options. A competing written offer turns that chat from a request into a negotiation.</li>
<li><strong>Switch to a new lender.</strong> A switch at maturity is a transfer of your mortgage. There's no prepayment penalty at maturity. The new lender often covers the legal and appraisal costs. The full process is on the page about <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a>.</li>
<li><strong>Refinance.</strong> Want to change the balance, borrow more or stretch the amortization? That's a refinance, and the rules are different. The <a href="/refinance-mortgage-bc/">refinance hub</a> explains when it makes sense.</li>
</ol>
<p>Which one is best depends on the numbers and your plans for the next few years. A lender comparison puts those numbers side by side, so you're not deciding on a hunch. Joshua prepares one in writing, the <a href="/lender-comparison-report/">Lender Comparison Report</a>.</p>

<h2>The timeline that matters: 120 days and 21 days</h2>
<p>Two numbers shape a renewal. The first is 21 days. Lenders send a renewal statement shortly before your term ends. The rule requires at least 21 days, and many lenders send it earlier.</p>
<p>But 21 days isn't much time. You'd need to shop for a better offer and maybe arrange an appraisal. A lawyer also has to prepare the transfer.</p>
<p>The second number is 120 days. Most lenders will hold a rate for roughly 120 days. So the useful window to compare opens about four months before maturity. Some lenders open renewals even earlier.</p>
<p>The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> explains how to use that window. It also explains when renewing early costs you money instead.</p>
<p>So the advice is simple. Start at 120 days, not at the letter. A broker can usually hold a rate for you and keep several offers on the table while you decide.</p>
<p>Is your maturity date still a ways off? <a href="/mortgage-renewal-reminder/">Set a free renewal reminder</a> now, then forget about it until it pings you.</p>

<h2>The stress-test exemption, in one paragraph</h2>
<p>A lot of people worry that switching means passing the stress test all over again. Good news: since late 2024, you may not need to on a straight switch.</p>
<p>In November 2024, OSFI, the federal banking regulator, changed its guidance. It no longer expects lenders to apply the qualifying rate to uninsured straight switches between federally regulated lenders. The loan amount and amortization can't go up.</p>
<p>A separate Finance Canada measure took effect December 16, 2024. It covers low-ratio insured switches and allows up to $3,000 to be added for costs.</p>
<p>Credit unions, collateral charges and any increase in the balance change the picture. The new lender still checks your credit, income and property. Read the full explanation in the <a href="/stress-test-exemption-switching-lenders/">guide to the stress-test exemption for switching lenders</a>.</p>

${cta({ title: "Four months out? That's the moment.", text: "Book a 15-minute call. Bring your renewal letter or maturity date. Joshua will show you your options before the clock runs down." })}

<h2>What switching costs, and who pays</h2>
<p>A switch at maturity usually means discharging the old mortgage and registering the new one. There's some legal work, and sometimes an appraisal.</p>
<p>The research behind this site found sourced all-in costs from about $833 at the low end to about $3,465 at the high end. In many cases, the new lender covers some or all of it. Since that varies by lender and file, build one simple habit. Get the arrangement in writing.</p>
<p>Whether the cost is worth paying comes down to the rate difference. It takes less of a difference than you'd guess.</p>
<p>Take an example with a $500,000 balance, 20 years of amortization and a five-year term. A rate cut of just 0.05 points saves about $1,175 in interest over the term. A cut of 0.15 points saves about $3,524.</p>
<p>Run your own figures in the calculator below. See the <a href="/mortgage-renewal-rates-bc/">renewal rates guide</a> for how switch pricing is set.</p>
<div class="tools">${TOOLS.renewal()}</div>
<p>The tool above compares staying, switching and refinancing over one term. You'll also find it, with all the other tools, on the <a href="/mortgage-calculators/#renewal">mortgage calculators</a> page.</p>

<h2>The auto-renewal trap</h2>
<p>What if your mortgage hits its maturity date and nothing's been signed? The lender usually rolls it into an open term. That rate is usually much higher than a negotiated renewal.</p>
<p>That's how the contract works. It isn't a penalty, and it's entirely avoidable. Nobody's trying to catch you out. But a busy household that missed the letter can pay extra for a month or more, just because the paperwork didn't get done.</p>
<p>So read the letter carefully when it arrives. It names the offered rates, the term options and the deadline to respond. It usually says what happens if you do nothing.</p>
<p>The page on <a href="/mortgage-renewal-letter-explained/">how to read your mortgage renewal letter</a> walks through every line. If a lender has declined to renew, or you're worried it might, see <a href="/mortgage-renewal-denied/">what to do when a renewal is denied</a>.</p>

<h2>Renewing a rental property</h2>
<p>Landlords face the same timeline, with a few extra conditions. Lenders treat rental income differently. They often look at your whole portfolio. And choosing between renewing and refinancing can have tax effects. Joshua covers all of it on the page about <a href="/rental-property-mortgage-renewal/">renewing a mortgage on a rental property</a>.</p>

<h2>The aftercare runway</h2>
<p>The best renewals are planned long before the letter shows up. That's the whole point of Joshua's <a href="/mortgage-aftercare-program/">aftercare program</a>. Here's what it includes:</p>
<ul>
<li>A yearly review of your mortgage against your goals.</li>
<li>An eye on your renewal window.</li>
<li>Plain-language notes when the Bank of Canada makes an announcement.</li>
<li>A call about six months before your term ends, so there's time to compare.</li>
</ul>
<p>Is your mortgage with a bank or another broker? You can still use the free reminder. You can also <a href="/contact/">contact Joshua</a> any time to talk through your options.</p>
<p>And since it comes up, here's how fees work. With a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees come up only on some B-lender and private-lender files. BC rules require written disclosure before you commit.</p>

${callout("Illustrative figures", "<p>The payment and interest examples on this page use sample balances and rates to make a point. They aren't quotes. Your lender's figures, and the rates available to you on the day, will differ.</p>")}

<h2>Who wrote this</h2>
<p>Joshua Resvick is a BC mortgage broker. He has ten years as a broker, five years as an underwriter before that, and over 1,000 mortgages funded. He writes these pages for people whose payment might be about to change. They'd like to understand their options before picking one.</p>
`;

export default {
  slug: "/mortgage-renewal-bc/",
  h1: "Mortgage renewal in BC: don't just sign the letter",
  lede: "Your lender's renewal letter is an opening offer. Here are your real options, the timeline that matters and what to check before your maturity date.",
  crumb: "Mortgage renewal", nav: "/mortgage-renewal-bc/", calc: true, body,
  faqs: [
    { q: "Do I have to renew with my current lender?", a: "No. At maturity you can sign your lender's offer, negotiate, switch to a different lender or refinance. A switch at maturity carries no prepayment penalty, and the new lender often covers the legal and appraisal costs. Compare before you sign, because the letter is only ever one lender's offer." },
    { q: "When should I start shopping for my renewal?", a: "About four months, or 120 days, before maturity. Most lenders will hold a rate for roughly that long, while the renewal statement itself may arrive only 21 days or so before the term ends. Starting at 120 days leaves time to compare, negotiate and, if needed, switch." },
    { q: "Will I need to pass the stress test to switch lenders?", a: "Often not on a straight switch. Since late 2024, uninsured straight switches between federally regulated lenders do not need the stress test if the amount and amortization stay the same. You may not need to re-pass it, but the new lender still checks credit, income and property." },
    { q: "What happens if I do nothing at renewal?", a: "If the maturity date passes with nothing signed, the mortgage typically rolls into an open term at a rate that's usually much higher than a negotiated one. It's avoidable. Read the letter, note the deadline and respond before it, or set a renewal reminder well ahead of time." },
    { q: "Does a broker charge me for a renewal?", a: "On a mortgage placed with a mainstream A lender, the lender pays the broker and you pay nothing for the service. Fees arise only on certain B-lender and private-lender files, with written disclosure first. Joshua explains how this works on his page about how brokers get paid." }
  ]
};
