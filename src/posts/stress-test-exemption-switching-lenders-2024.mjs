import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Since November 21, 2024, you can move an uninsured mortgage to a new federally regulated lender at renewal without the stress test, if the balance and amortization stay the same. Since December 16, 2024, the same goes for low-ratio insured mortgages, with up to $3,000 of costs allowed on top.",
  who: "Anyone renewing in the next year who thought the stress test would stop them from switching lenders.",
  next: "Read the current rule in the <a href=\"/stress-test-exemption-switching-lenders/\">stress-test exemption guide</a>, then compare stay, switch and refinance in the <a href=\"/mortgage-calculators/#renewal\">renewal calculator</a>."
})}
<h2>The rule in two sentences</h2>
<p>The first part started on November 21, 2024. Say you move an uninsured mortgage from one federally regulated lender to another at renewal. You don't have to qualify at the minimum qualifying rate, as long as the loan amount and the amortization don't go up.</p>
<p>The second part started on December 16, 2024. Since then, the same is true for low-ratio insured mortgages switching at renewal. Up to $3,000 of costs can be added to the balance.</p>
<p>The full rule, who qualifies, and the traps are on the <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a>. This post is the record of how the change arrived and why it matters.</p>

<h2>What the stress test was doing to renewals</h2>
<p>Everyone calls the minimum qualifying rate the stress test. Since 2018, it has made lenders qualify borrowers at the higher of two rates. One is their contract rate plus 2 percentage points. The other is 5.25 percent.</p>
<p>It was designed for new borrowing. It checks that someone taking on a mortgage could still carry it if rates rose. For a new purchase, that's a sensible question.</p>
<p>For a renewal, it gave an odd result. Picture a borrower who'd made every payment for five years. They want to move the exact same balance to a lender with a better rate. They had to prove they could afford a payment at a rate 2 points higher than the one they were about to sign.</p>
<p>Meanwhile, their current lender could renew the same mortgage without applying the test at all.</p>
<p>The result was that many borrowers couldn't leave. Rates rose through 2022 and 2023, and the stress-test rate rose with them. A household that qualified easily in 2019 could fail the test on the same balance in 2024.</p>
<p>Their current lender knew this. A renewal offer didn't have to be competitive to be accepted. The only other option was a test the current lender didn't have to apply.</p>
<p>Brokers called it the renewal trap. The Bank of Canada's own 2025 analysis of the renewal wave showed how many households were reaching maturity at the same time (Bank of Canada, 2025).</p>

<h2>November 21, 2024: OSFI acts on uninsured switches</h2>
<p>OSFI is the Office of the Superintendent of Financial Institutions. It regulates federally regulated lenders. Those include the banks and most of the monoline mortgage lenders.</p>
<p>On November 21, 2024, OSFI published a backgrounder. It said OSFI no longer requires a set minimum qualifying rate for uninsured straight switches at renewal, effective that day (OSFI, November 21, 2024).</p>
<p>What's a straight switch? In OSFI's words, it's a borrower moving an uninsured mortgage from one federally regulated lender to a different one. There's no increase to the amortization period or the loan amount.</p>
<p>Two details in that backgrounder matter.</p>
<p>First, OSFI tied the change to its new loan-to-income limits on uninsured mortgage portfolios. It expected those limits to contain overall mortgage credit risk. It also said it would consider whether the minimum qualifying rate was still needed at all once the loan-to-income framework was in place.</p>
<p>Second, OSFI didn't remove underwriting. Lenders must still apply the principles of Guideline B-20. They must still consider current and future conditions when they set their own qualifying rates.</p>
<p>So the exemption removes the set floor. It doesn't force any lender to approve anyone. In practice, the new lender still checks your income and credit. Some lenders use their own internal qualifying rate. It's lower than the old floor but higher than the contract rate.</p>
<p>OSFI had signalled the change in September 2024. That signal alone started to shift lender behaviour before the rule took effect. Lenders knew the trap was closing.</p>

<h2>December 16, 2024: Finance Canada extends it to insured switches</h2>
<p>OSFI's rule covered uninsured mortgages. Insured mortgages follow rules set by the Department of Finance under the mortgage insurance framework.</p>
<p>On December 16, 2024, Finance Canada published a backgrounder on straight switches and portfolio insurance. It took effect that day, for insurance applications sent on or after that date (Department of Finance Canada, December 16, 2024).</p>
<p>It removed the minimum qualifying rate for a low-ratio mortgage that renews with a new lender. Low-ratio means a loan-to-value of up to 80 percent. Two conditions apply. The original mortgage must have come from a federally regulated financial institution. And it must have been tested against the minimum qualifying rate before.</p>
<p>The rest of the conditions are narrow, so here they are plainly.</p>
<ul>
<li>You keep your existing amortization schedule.</li>
<li>You can't take equity out.</li>
<li>The unpaid balance can go up by up to $3,000 to cover related costs, such as penalties or fees. That's the one way a straight switch may grow.</li>
<li>All other rules for government-backed mortgage insurance still apply.</li>
</ul>
<p>Note that this measure is about low-ratio, or portfolio-insured, mortgages. The exemption guide covers high-ratio insured switches separately. It keeps the two measures apart because their sources and scopes differ.</p>

<h2>Who it helped, and who it did not</h2>
<p>Some people gained the most. They're renewing from 2025 on, and they took out their mortgage in the low-rate years. For them, the test at contract plus 2 points had been the difference between shopping their renewal and just signing it. The two measures together gave them back the choice.</p>
<p>Say you have a clean payment history and stable income. Your balance fits within a lender's loan-to-income limits. You can now take your renewal letter, get a competing quote, and move if the quote is better.</p>
<p>The <a href="/switch-mortgage-lenders-at-renewal/">switching lenders at renewal guide</a> covers the process and the costs. The new lender often covers part of those costs.</p>
<p>Three groups aren't fully covered. The exemption guide explains each one.</p>
<p><strong>Credit union borrowers.</strong> Credit unions in British Columbia are provincially regulated, so OSFI's rule doesn't bind them. Many have followed the spirit of the change. Still, if you're moving to or from a credit union, ask the new lender how it qualifies a switch. Don't assume.</p>
<p><strong>Borrowers with a collateral charge.</strong> A collateral charge isn't transferred the way a standard charge is. It's discharged, and a new mortgage is registered. Some lenders treat that as a new mortgage, not a straight switch. The <a href="/collateral-charge-mortgage/">collateral charge guide</a> explains how to tell which charge you have.</p>
<p><strong>Borrowers who want to change anything.</strong> These people are outside the rule by definition. Increase the balance beyond the $3,000 allowance, stretch the amortization, or take out equity, and the application becomes a refinance. A refinance is stress-tested as new borrowing. The <a href="/refinance-mortgage-bc/">refinance guide</a> covers that path.</p>

<h2>What it means in a rising-rate year</h2>
<p>The change arrived while rates were falling. That made it look less urgent than it was.</p>
<p>Its real value shows when rates rise, as they did on October 28, 2026. See the <a href="/guides/bank-of-canada-october-2026/">post on the October decision</a>.</p>
<p>A rising stress-test rate used to lock borrowers in just when lender competition would have helped them most. Now it doesn't. A borrower renewing in 2027 can compare offers based on their real payment history. A lender that wants to keep them has to compete on the renewal offer. It can't count on the test to stop them leaving.</p>
<p>If your maturity date is in the next year, the steps are the same as before the rule. You just have better odds.</p>
<ul>
<li>Find out your maturity date.</li>
<li>Expect the renewal letter at least 21 days before it. The <a href="/mortgage-renewal-letter-explained/">renewal letter guide</a> explains what each line means.</li>
<li>Get competing quotes about 120 days out, when most lenders will hold a rate.</li>
<li>Compare the whole mortgage, not just the rate. Penalties, prepayment options, portability and the type of charge all matter.</li>
</ul>
<p>The <a href="/mortgage-calculators/#renewal">renewal calculator</a> shows the stay, switch and refinance options side by side. The <a href="/mortgage-renewal-bc/">renewal guide</a> maps the decision.</p>

${callout("Sources for this post", "<p>OSFI, Backgrounder: Minimum Qualifying Rate (MQR), November 21, 2024. Department of Finance Canada, Straight Switches and Portfolio Insurance, December 16, 2024. Bank of Canada staff analysis of the 2025 to 2026 renewal wave, 2025. Both government pages were read on October 30, 2026. The rule as it stands today is on the stress-test exemption guide, which is the page kept current.</p>")}

${cta({ title: "Renewing in 2027?", text: "A 15-minute call will tell you if your mortgage qualifies for a straight switch. You'll also learn what the new lender would still check, and if moving is worth it on your numbers." })}
`;

export default {
  slug: "/guides/stress-test-exemption-switching-lenders-2024/",
  date: "2026-10-30",
  series: "rules",
  title: "How the Stress-Test Exemption for Switching Arrived | 2024",
  meta: "OSFI (Nov 21, 2024) and Finance Canada (Dec 16, 2024) removed the stress test for straight switches at renewal. The story of the change and who it helped.",
  h1: "The stress-test exemption for switching lenders: how the 2024 change arrived, and what it did to the renewal trap",
  crumb: "Stress-test exemption, 2024",
  lede: "Two measures, three weeks apart, ended the rule that had kept renewing borrowers tied to their current lender. The record of the change, with sources, and the groups it still leaves out.",
  body,
  links: ["/stress-test-exemption-switching-lenders/", "/switch-mortgage-lenders-at-renewal/", "/collateral-charge-mortgage/", "/refinance-mortgage-bc/", "/guides/bank-of-canada-october-2026/", "/mortgage-renewal-letter-explained/", "/mortgage-calculators/#renewal", "/mortgage-renewal-bc/"],
  faqs: [
    { q: "Does the exemption mean I will be approved by the new lender automatically?", a: "No. OSFI removed the set minimum qualifying rate for straight switches, not the lender's underwriting. The receiving lender still verifies your income, credit and property under Guideline B-20, and may apply its own qualifying rate. What changed is that the rate floor of contract plus 2 points, or 5.25 percent, no longer applies to a switch that keeps the balance and amortization the same." },
    { q: "Can I add my penalty or switching costs to the mortgage?", a: "For an insured low-ratio switch, Finance Canada's measure allows the unpaid principal to increase by up to $3,000 to cover related transaction costs such as penalties or fees. For an uninsured switch, whether costs can be added depends on the receiving lender, and adding more than a small amount may turn the application into a refinance, which is stress-tested." },
    { q: "I am with a credit union. Does the exemption apply to me?", a: "Not automatically. OSFI's rule binds federally regulated lenders, and credit unions in BC are provincially regulated. Many credit unions have adopted a similar approach, but it is their policy rather than a regulatory requirement, so ask the receiving lender how it qualifies a switch before you plan around the exemption." },
    { q: "Why does a collateral charge complicate a switch?", a: "A standard charge can be transferred from one lender to another. A collateral charge usually has to be discharged and a new mortgage registered, which costs more and which some lenders treat as new lending rather than a straight switch. The collateral charge guide explains how to tell which you have; it is usually stated on your original mortgage documents." },
    { q: "Did the rule change when the Bank of Canada raised rates in October 2026?", a: "No. The exemption is unchanged. If anything, a rising-rate period is when it matters most, because a higher stress-test rate used to lock renewing borrowers in with their current lender just when shopping around would have helped them. Under the current rule, a straight switch is qualified without that floor." }
  ]
};
