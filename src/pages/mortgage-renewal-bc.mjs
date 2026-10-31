import { TOOLS } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Your renewal letter is one offer, not the only offer</h2>
<p>If a letter from your lender has landed on the counter, or your maturity date is coming into view, this page is for you. It explains what a mortgage renewal actually is, what your real choices are, when to act, and what to check before you sign anything. The short version: that letter is your current lender's opening offer, and in most cases you're free to compare it with others before your maturity date. Most people don't, which is exactly why it's worth a few minutes here.</p>
<p>Joshua Resvick is a BC mortgage broker with ten years as a broker, five years as an underwriter before that, and over 1,000 mortgages funded. He writes these pages for the person whose payment might be about to change, and who'd like to understand the options before picking one.</p>

<h2>Why so many people are renewing at once</h2>
<p>Most Canadian mortgages have terms of five years or less, so they come up for renewal fairly often. Right now, though, an unusually large crowd is renewing at the same time. Research from the Bank of Canada (2025, Staff Analytical Note 2025-21) estimated that about 60 percent of all outstanding mortgages renew in 2025 or 2026, and that about 60 percent of those renewing borrowers face a higher payment.</p>
<p>The same research found the average payment is about 10 percent higher for 2025 renewers and about 6 percent higher for 2026 renewers than it was in December 2024. But averages hide a wide range. People leaving a five-year fixed rate faced increases of roughly 15 to 20 percent, while people with variable-rate mortgages were expected to see their payments fall by about 5 to 7 percent. Your own change depends on the rate you have now, the rate you're offered, and how much of the balance is left.</p>
<p>To make that concrete, here's an illustrative case, not a forecast. A balance of $400,000 with 22 years of amortization left costs $1,872.51 a month at 2.00 percent. Renew at 4.50 percent on the same balance and amortization and it's $2,380.38, an increase of about 27 percent. If the number on your letter looks anything like that, keep reading.</p>

<h2>Your four real options</h2>
<p>When a mortgage matures, the balance is technically due. There are four ways to deal with that, and each one plays out differently.</p>
<ol>
<li><strong>Sign your lender's offer.</strong> The easiest option, with no new application. It's also the one where you're relying entirely on a single lender's pricing, so it deserves a comparison first.</li>
<li><strong>Negotiate with your current lender.</strong> Lenders often have room beyond the first offer, especially once they know you've got alternatives. A competing written offer in your hand is what turns that conversation from a request into a negotiation.</li>
<li><strong>Switch to a new lender.</strong> A switch at maturity is a transfer of your existing mortgage. There's no prepayment penalty at maturity, and the new lender frequently covers the legal and appraisal costs. The full process is on the page about <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal</a>.</li>
<li><strong>Refinance.</strong> If you want to change the balance, borrow more, or stretch the amortization, that's a refinance, and the rules are different. The <a href="/refinance-mortgage-bc/">refinance hub</a> explains when it makes sense.</li>
</ol>
<p>Which of the four is best depends on the numbers and on what you're planning for the next few years. A lender comparison, like the written <a href="/lender-comparison-report/">Lender Comparison Report</a> Joshua prepares, puts those numbers side by side so you're not deciding on a hunch.</p>

<h2>The timeline that matters: 120 days and 21 days</h2>
<p>Two numbers shape a renewal. Lenders typically send a renewal statement a short time before your term ends. The rule requires at least 21 days, and many lenders send it earlier, but 21 days isn't much time to shop for a better offer, arrange an appraisal if one's needed, and have a lawyer prepare the transfer.</p>
<p>Rate holds run on a longer clock. Most lenders will hold a rate for roughly 120 days, so the useful window to compare opens about four months before maturity, and some lenders open renewals even earlier. The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> explains how to use that window, and when renewing early actually costs you money instead.</p>
<p>So the practical advice is simple: start at 120 days, not at the letter. A broker can usually hold a rate for you and keep several lenders' offers on the table while you decide. If your maturity date is still a ways off, that's a good reason to <a href="/mortgage-renewal-reminder/">set a free renewal reminder</a> now and forget about it until it pings you.</p>

<h2>The stress-test exemption, in one paragraph</h2>
<p>A lot of people worry that switching means passing the stress test all over again. Good news: since late 2024, you may not need to re-pass it on a straight switch. In November 2024, the federal banking regulator OSFI said it no longer expects lenders to apply the minimum qualifying rate to uninsured straight switches between federally regulated lenders, provided the loan amount and amortization do not increase. A separate measure from Finance Canada, effective December 16, 2024, covers low-ratio insured switches and allows up to $3,000 to be added for costs. Credit unions, collateral charges and any increase in the balance change the picture, and the new lender still checks your credit, income and property. Read the full explanation in the <a href="/stress-test-exemption-switching-lenders/">guide to the stress-test exemption for switching lenders</a>.</p>

${cta({ title: "Four months out? That's the moment.", text: "Book a 15-minute call. Bring your renewal letter or your maturity date, and Joshua will show you what your options look like before the clock runs down." })}

<h2>What switching costs, and who pays</h2>
<p>A switch at maturity usually involves discharging the old mortgage, registering the new one, some legal work and sometimes an appraisal. The research behind this site found sourced all-in costs ranging from about $833 at the lean end to about $3,465 at the high end, and in many cases the new lender covers some or all of it. Because that varies by lender and by file, the habit to build is a simple one: get the arrangement in writing.</p>
<p>Whether the cost is worth paying comes down to the rate difference, and it takes less of a difference than you'd guess. In an illustrative case with a $500,000 balance, 20 years of amortization and a five-year term, a rate cut of just 0.05 points saves about $1,175 in interest over the term, and a cut of 0.15 points saves about $3,524. Run your own figures in the calculator below, and see the <a href="/mortgage-renewal-rates-bc/">renewal rates guide</a> for how switch pricing is set.</p>
<div class="tools">${TOOLS.renewal()}</div>
<p>The tool above compares staying, switching and refinancing over one term. You'll also find it, with all the other tools, on the <a href="/mortgage-calculators/#renewal">mortgage calculators</a> page.</p>

<h2>The auto-renewal trap</h2>
<p>If a mortgage hits its maturity date and nothing's been signed or arranged, the lender typically rolls it into an open term at a rate that's usually much higher than a negotiated renewal. That's a feature of the contract, not a penalty, and it's entirely avoidable. Nobody's trying to catch you out. But a busy household that missed the letter can pay a premium for a month or more just because the paperwork didn't get finished.</p>
<p>So read the letter carefully when it arrives. It names the offered rates, the term options and the deadline for responding, and it usually spells out what happens if you do nothing. The page on <a href="/mortgage-renewal-letter-explained/">how to read your mortgage renewal letter</a> walks through every line. If a lender has declined to renew, or you're worried it might, see <a href="/mortgage-renewal-denied/">what to do when a renewal is denied</a>.</p>

<h2>Renewing a rental property</h2>
<p>Landlords face the same timeline, with a few extra conditions on top. Lenders treat rental income differently, they often look at your whole portfolio, and the choice between renewing and refinancing can have tax consequences. Joshua covers all of it on the page about <a href="/rental-property-mortgage-renewal/">renewing a mortgage on a rental property</a>.</p>

<h2>The aftercare runway</h2>
<p>The best renewals are planned long before the letter shows up. That's the whole point of Joshua's <a href="/mortgage-aftercare-program/">aftercare program</a>: an annual review of your mortgage against your goals, an eye on your renewal window, plain-language notes when the Bank of Canada makes an announcement, and a call about six months before your term ends so there's time to compare. If your mortgage is with a bank or another broker, you can still use the free reminder, and you can <a href="/contact/">contact Joshua</a> at any point to talk through your options.</p>
<p>And since it comes up: on a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees arise only on certain B-lender and private-lender files, and BC rules require written disclosure before you commit.</p>

${callout("Illustrative figures", "<p>The payment and interest examples on this page use sample balances and rates chosen to illustrate the point. They aren't quotes. Your lender's figures, and the rates available to you on the day, will differ.</p>")}
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
