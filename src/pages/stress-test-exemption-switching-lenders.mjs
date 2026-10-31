import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "If you move your mortgage to a new lender at renewal without borrowing more or stretching the amortization, you may not need to re-pass the stress test. Two separate federal measures from late 2024 make that possible. The new lender still checks your credit, income and property.",
  who: "Homeowners renewing in the next year who want to compare lenders, especially if their income hasn't grown much.",
  next: "Find your maturity date, check whether your mortgage is a <a href=\"/collateral-charge-mortgage/\">collateral charge</a>, then <a href=\"/contact/\">book a 15-minute call</a>."
})}
<h2>The short answer</h2>
<p>Thinking about moving your mortgage to a new lender at renewal? Here's the good news. You may not need to re-pass the stress test.</p>
<p>Two separate federal measures, both from late 2024, remove the higher qualifying rate for what's called a straight switch. They have different dates, different sources and different conditions. Mixing them up is the most common mistake in articles on this topic.</p>
<p>So this page keeps them apart. It walks you through who's covered and who isn't. Then it shows what still happens at the new lender once the test is gone.</p>
<p>A quick word on who's writing this. Joshua Resvick is a BC mortgage broker. He has ten years as a broker, five years as an underwriter before that, and over 1,000 mortgages funded. He explains these rules the way he does on a call. He also reads a file the way a lender will, before it's ever sent.</p>
<p>Everything here was checked against the official sources listed at the bottom on October 30, 2026. The page gets updated if the rules change.</p>

<h2>What the stress test is</h2>
<p>Let's start with the test itself, since it's the thing you're trying to avoid.</p>
<p>Say you take an uninsured mortgage from a federally regulated lender. Normally you have to qualify at a higher rate than the one you'll pay. That higher rate is called the minimum qualifying rate, or MQR. It's your contract rate plus 2 percentage points, or 5.25 percent, whichever is higher. The rule comes from OSFI Guideline B-20.</p>
<p>So if your contract rate is 4.49 percent, the lender tests you at 6.49 percent. On paper, the payment looks a lot bigger than the one you'll really make.</p>
<p>At renewal, that creates a trap. Picture someone whose income hasn't grown much in five years. They've paid the same mortgage faithfully the whole time. But a fresh stress test on the same balance might say they can't afford it.</p>
<p>That's exactly the problem the exemption fixes. It's for people who only want to change lenders, not borrow more.</p>

<h2>The two exemptions, separated and dated</h2>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Measure A: OSFI</th><th>Measure B: Finance Canada</th></tr></thead>
<tbody>
<tr><th scope="row">Effective</th><td>November 21, 2024.</td><td>December 16, 2024.</td></tr>
<tr><th scope="row">Who it applies to</th><td>Uninsured straight switches at renewal, from one federally regulated lender to another.</td><td>Low-ratio mortgages, at 80% loan-to-value or less. Switched from a federally regulated lender to a new lender, for portfolio insurance.</td></tr>
<tr><th scope="row">What it removes</th><td>OSFI does not expect the lender to apply the minimum qualifying rate.</td><td>The minimum qualifying rate requirement.</td></tr>
<tr><th scope="row">Balance</th><td>No increase allowed. OSFI's measure has no dollar allowance.</td><td>The balance may rise by up to $3,000 to cover related costs, such as penalties or fees.</td></tr>
<tr><th scope="row">Equity take-out</th><td>Not allowed.</td><td>Not allowed.</td></tr>
<tr><th scope="row">Mortgage origin</th><td>Current and new lender both federally regulated.</td><td>Mortgage started at a federally regulated institution and was already tested at the minimum qualifying rate.</td></tr>
<tr><th scope="row">Amortization</th><td>No increase.</td><td>A straight switch is the intended case. Confirm any change with the lender.</td></tr>
</tbody></table></div>
<p>Here's the plain-English version of that table.</p>
<p><strong>Measure A</strong> is the banking regulator telling lenders what it expects. <strong>Measure B</strong> is a mortgage insurance rule from the Department of Finance. It matters for lenders that insure their low-ratio mortgages in a pool behind the scenes.</p>
<p>Insured mortgages were already exempt from a new stress test on straight switches before either change. So the 2024 measures really leveled the field for people with uninsured and pool-insured mortgages.</p>
<p>Which measure covers your switch depends partly on how the new lender funds and insures the mortgage. That's your broker's job to work out, not yours.</p>
<p>One thing worth underlining. The $3,000 allowance belongs only to Finance Canada's measure. You'll see it pinned to OSFI's announcement in plenty of articles. That's wrong. It's a good way to spot a page that hasn't read the sources.</p>

<h2>The conditions in plain terms</h2>
<p>For a switch to qualify, you only need to keep three things in mind.</p>
<ol>
<li><strong>Federally regulated lenders.</strong> OSFI's measure covers a switch from one federally regulated lender to another. Finance Canada's needs the mortgage to have started at a federally regulated institution. It also needs the mortgage to have been tested at the minimum qualifying rate before.</li>
<li><strong>The balance doesn't go up.</strong> Under OSFI's measure, there's no increase at all. Under Finance Canada's, there can be up to $3,000 for related costs, and nothing for equity.</li>
<li><strong>The amortization doesn't go up.</strong> You can keep the time you have left or shorten it. Stretching it out takes you outside a straight switch.</li>
</ol>
<p>It also helps a lot to switch right at your maturity date. A switch at maturity has no prepayment penalty. Leaving early does, and the exemption doesn't make that penalty go away. The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> shows how timing changes the cost. It's worth a read if your date is still a while off.</p>

<h2>Who is not covered</h2>
<ul>
<li><strong>Credit unions and banks.</strong> Credit unions in BC are regulated by the province. The federal measures apply to federally regulated lenders. So a move between a credit union and a bank, either way, can mean full requalification. Ask the new lender before you plan around the exemption.</li>
<li><strong>Collateral charges.</strong> A mortgage registered as a collateral charge usually can't just be transferred. It has to be discharged and registered again. That changes the legal costs, and sometimes the whole process. Not sure which kind you have? The page on <a href="/collateral-charge-mortgage/">collateral charge mortgages</a> shows you how to check.</li>
<li><strong>Any balance increase.</strong> Adding money for a renovation, a purchase or paying off debt turns the switch into a refinance. The exemption doesn't cover a refinance.</li>
<li><strong>Cash-out and equity take-out.</strong> Neither measure lets you pull equity out of the home.</li>
<li><strong>Longer amortization.</strong> Stretching the amortization to lower the payment also takes you outside a straight switch.</li>
</ul>

<h2>What underwriting still happens</h2>
<p>This is the part people miss. The exemption removes the qualifying rate. It does not remove the approval.</p>
<p>Under OSFI Guideline B-20, the new lender is still expected to review your credit history. It verifies your income, counts your debts and confirms the property is acceptable. Someone whose credit has dropped sharply can still be declined, even with no stress test. So can someone whose income has fallen, or whose property has problems.</p>
<p>That's why the honest wording is that you may not need to re-pass the stress test. It's never that no approval is needed.</p>
<p>This is also where an underwriter's eye pays off. Joshua reads your file the way a lender will, before anything is sent. Any soft spot gets found early, and the right lender gets picked for it.</p>
<p>And if a switch does get declined, you still have options. The page on <a href="/mortgage-renewal-denied/">renewals that are denied</a> sets them out calmly.</p>

${cta({ title: "Find out if your switch qualifies", text: "Book a 15-minute call. Bring your maturity date, your lender's name, and whether your mortgage is a collateral charge. Joshua will tell you which rules apply." })}

<h2>Three example scenarios</h2>
<p>Numbers make this easier to see, so here are three. They all use a $450,000 balance with 22 years of amortization left. The offered rate is 4.49 percent. The figures are examples worked out for this page, not quotes. At that rate, the minimum qualifying rate would be 6.49 percent.</p>
<h3>1. A clean switch</h3>
<p>You move the $450,000 balance to a new federally regulated lender at maturity. You keep the same 22-year amortization. The payment at your contract rate is $2,675.50 a month.</p>
<p>Without the exemption, you'd have to qualify at the 6.49 percent payment. That's $3,182.19, or $506.69 a month more. With the exemption, you may not need to re-pass the stress test. The lender can base its decision on the real payment, after the usual credit, income and property review.</p>
<h3>2. A switch with $3,000 of costs added</h3>
<p>Now say the switch is a low-ratio mortgage handled under Finance Canada's measure. The lender adds $3,000 to cover the costs of the switch. The balance becomes $453,000, and the payment becomes $2,693.34. The stress test at 6.49 percent would have needed $3,203.40.</p>
<p>Under the measure, that extra $3,000 is fine, as long as it stays within the allowance and no equity comes out. Want $10,000 added instead? That's outside the allowance, and it's a different conversation.</p>
<h3>3. A switch with debt consolidation: really a refinance</h3>
<p>Suppose you'd like to roll $20,000 of credit card debt into the new mortgage. That takes the balance to $470,000. The payment is $2,794.41. The stress test payment at 6.49 percent is $3,323.62.</p>
<p>The balance has gone up past what either exemption allows. So this is a refinance. The lender can apply the full test, and the exemption doesn't help.</p>
<p>It might still be a perfectly good choice. It's just a different one. The page on <a href="/refinance-to-pay-off-debt/">refinancing to pay off debt</a> explains how to weigh it. The <a href="/refinance-mortgage-bc/">refinance hub</a> covers the wider route.</p>

<h2>Why your bank may not mention this</h2>
<p>A renewal letter from your current lender is written to keep you. It rarely says you could move with no new stress test, because that makes moving easier. Lenders aren't hiding it, exactly. They just don't have to tell you, and most people never ask.</p>
<p>On top of that, switch pricing is often better than the rate in your renewal letter. New lenders compete for new business. The page on <a href="/mortgage-renewal-rates-bc/">renewal rates in BC</a> explains how that works. The full step-by-step is in the guide to <a href="/switch-mortgage-lenders-at-renewal/">switching mortgage lenders at renewal</a>.</p>
<p>And if you do nothing at all? An unsigned mortgage often rolls into an open term at a much higher rate. That alone is reason enough to know about the exemption.</p>
<p>Start about 120 days before maturity. Read your letter properly and compare. The <a href="/mortgage-renewal-bc/">mortgage renewal hub</a> pulls all the pieces together. You can <a href="/contact/">contact Joshua</a> with your details whenever you're ready.</p>

${callout("Sources, checked October 30, 2026", "<p>OSFI, minimum qualifying rate page and backgrounder (Measure A, effective November 21, 2024). Department of Finance Canada, straight switches and portfolio insurance (Measure B, effective December 16, 2024). OSFI Guideline B-20. This is general education. Your lender and insurer decide how the rules apply to your file.</p>")}
`;

export default {
  slug: "/stress-test-exemption-switching-lenders/",
  h1: "The stress-test exemption for switching lenders",
  lede: "Since late 2024, you may not need to re-pass the stress test on a straight switch. Two federal measures, who is covered, who is not, and the traps.",
  crumb: "Stress-test exemption for switching lenders", nav: "/mortgage-renewal-bc/", body,
  faqs: [
    { q: "Do I need to pass the stress test to switch lenders at renewal?", a: "You may not need to re-pass it on a straight switch between federally regulated lenders, as long as the balance and amortization don't go up. The new lender still checks your credit, income and property under OSFI's B-20 guideline, so it isn't an automatic approval, and credit unions and collateral charges can change the answer." },
    { q: "What is the $3,000 allowance?", a: "It belongs to Finance Canada's measure, effective December 16, 2024, for low-ratio (80% loan-to-value or less) switches under portfolio insurance. The balance may rise by up to $3,000 to cover costs such as penalties or fees, with no equity take-out. OSFI's separate November 2024 measure has no dollar allowance at all." },
    { q: "Does the exemption apply if I move between a credit union and a bank?", a: "Not reliably. BC credit unions are provincially regulated, and the federal measures apply to federally regulated lenders. A move between a credit union and a bank, in either direction, can trigger full requalification. Check with the new lender before you plan around it." },
    { q: "Can I add money when I switch?", a: "Only a little, and only under Finance Canada's measure: up to $3,000 for transaction costs such as fees or penalties. Anything more, such as debt consolidation or renovation money, makes it a refinance, which follows the usual qualification rules including the stress test." },
    { q: "Does the exemption remove the penalty for switching early?", a: "No. The measures are about qualification, not penalties. A switch at maturity carries no prepayment penalty, while leaving mid-term usually does. Aim the switch at your maturity date, and ask your lender for the written penalty figure before moving early, because the number can be large." },
    { q: "Does my mortgage have to be uninsured?", a: "No. Insured mortgages were already exempt from a new stress test on straight switches. OSFI's measure covers uninsured switches, and Finance Canada's covers low-ratio switches under portfolio insurance. Which route fits your file depends on the lender, and your broker checks it for you." }
  ]
};
