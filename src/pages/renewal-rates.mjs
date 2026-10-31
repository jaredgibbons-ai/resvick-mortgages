import { short } from "../lib/short.mjs";
import { TOOLS } from "../lib/tools.mjs";
import { cta, callout, ratesStrip } from "../lib/site.mjs";

const body = `
${short({ answer: "Your lender's renewal letter is one offer, not the best price. Lenders compete hardest for new customers, so a switch can often beat the letter. On a $500,000 mortgage, half a point lower saves about $11,700 of interest over five years.", who: "Anyone with a renewal letter in hand, or a maturity date in the next four months.", next: "Compare staying and switching with your own numbers in the <a href=\"/mortgage-calculators/#renewal\">renewal calculator</a>." })}

<h2>What renewal rates look like for switchers</h2>
<p>A renewal rate is the rate on your next term. You're not stuck with the one in your lender's letter. That letter is one offer from one lender.</p>
<p>A broker can ask several lenders for their rate on the same mortgage. That's why a rate for someone who switches can differ from the one in the envelope. This page prints no rate in its text. A 15-minute call gets you today's renewal and switch numbers for your own file. They're checked against real lenders, not an ad. Rates change, and the one that applies to you depends on your balance, your property and your lender.</p>
${ratesStrip()}
<p>This page has no rate typed into its text on purpose. A rate in an article goes out of date almost at once. A page that quotes one is either wrong or stale. Instead, this page explains how renewal rates work. It also gives you a tool to work out what a different rate would mean for you.</p>

<h2>Why switch offers can differ from your bank's letter</h2>
<p>Lenders compete hardest for new customers, and a switch is a new customer. Your current lender already has your mortgage. So it has less reason to sharpen its offer. Its opening letter is a starting position, not a best price.</p>
<p>That's why the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> says to treat the letter as an opening offer. It doesn't mean your lender will never improve it. It means you won't know until you ask. And you're in a stronger spot to ask when you have another offer in hand.</p>
<p>The Bank of Canada's analysis shows why this matters now. Bank of Canada (2025) estimates that about 60 percent of outstanding mortgages renew across 2025 and 2026. About 60 percent of those renewing face a higher payment. The average payment increase is about 10 percent for 2025 renewals and about 6 percent for 2026 renewals, compared with December 2024.</p>
<p>For people renewing a five-year fixed mortgage, the average increase is roughly 15 to 20 percent. Variable-rate borrowers are expected to see an average decrease of roughly 5 to 7 percent. Your own result depends on the rate you had and the term you choose. Check it with your own figures.</p>

<h2>Insured switches and pricing</h2>
<p>Some lenders price a switch differently depending on whether the mortgage is insured or can be insured. Since December 16, 2024, Finance Canada's rules allow a low-ratio mortgage to switch lenders at renewal without a new stress test. Low-ratio means a loan-to-value ratio of 80 percent or less. The switch happens under portfolio insurance. The balance may rise by up to $3,000 to cover switching costs.</p>
<p>When a lender can insure the mortgage, it carries less risk. That can affect how it prices the switch. Whether it does varies by lender. So ask each lender how it prices your file, instead of assuming. The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> explains both measures, and what they do and don't cover.</p>
<p>The details of the switch itself, like who pays which cost and how long it takes, are in the <a href="/switch-mortgage-lenders-at-renewal/">switching lenders guide</a>. You don't pay a prepayment penalty to switch at maturity. That's why renewal is the one free move you have.</p>

${cta({ title: "Bring your renewal letter", text: "Share the rate and term your lender offered. Joshua will show you in writing what other lenders could do with the same mortgage, before you sign anything." })}

<h2>The savings math: do your own, not someone else's</h2>
<p>Some websites advertise an average saving from switching. Those figures describe somebody else's mortgage. The only number that matters is yours. It takes four inputs. Those are your balance, the years left on your amortization, the rate you've been offered and the rate you could get elsewhere.</p>
<p>The calculator below compares staying, switching and refinancing side by side over one term. It includes any costs you enter.</p>
<div class="tools">${TOOLS.renewal()}</div>
<p>You can also run it from the main <a href="/mortgage-calculators/#renewal">renewal calculator</a> page. Here's an illustration. Take a $500,000 balance with 20 years of amortization left. Compare two five-year fixed rates, which are only examples, not quotes: 5.00 percent and 4.50 percent.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>5.00%</th><th>4.50%</th></tr></thead>
<tbody>
<tr><th scope="row">Monthly payment</th><td>$3,285.63</td><td>$3,152.03</td></tr>
<tr><th scope="row">Interest over five years</th><td>$114,029</td><td>$102,302</td></tr>
<tr><th scope="row">Balance after five years</th><td>$416,892</td><td>$413,181</td></tr>
</tbody></table></div>
<p>The lower rate saves about $11,727 of interest over the term. It also leaves a balance about $3,711 lower.</p>
<p>Smaller gaps matter too. On the same mortgage, a rate 0.10 points lower (5.00 versus 4.90 percent) saves about $2,350 of interest over five years. A gap of 0.25 points saves about $5,870. Switching sometimes costs a few thousand dollars of your own. You can see how small a rate gap pays that back. Many lenders cover most switching costs, so ask for that in writing.</p>

<h2>Timing: when to start</h2>
<p>Most lenders let you lock a renewal rate about 120 days before your maturity date. Some allow it earlier. A lender must send a renewal statement at least 21 days before the term ends. But that's the legal minimum, not the time to start shopping. By then, your choices are already narrowing.</p>
<p>Starting around 120 days out gives you time to compare offers. A rate hold protects you if rates rise while you decide. What happens if rates fall during the hold depends on the lender, so ask before you rely on it. The <a href="/early-mortgage-renewal/">early renewal guide</a> covers rate holds in detail. It also explains when renewing early costs you instead.</p>
<p>The warning on this page is the same as on every renewal page. A mortgage that reaches maturity without a signed renewal commonly rolls into an open term at a much higher rate. That's how the contract works, not a penalty. It's entirely avoidable if you start early. The <a href="/mortgage-rates-bc/">mortgage rates guide</a> explains how lenders set rates, and why the lowest advertised number is rarely the whole story.</p>

${callout("What a rate does not tell you", "<p>Two mortgages with the same rate can cost different amounts. One may have a pricier penalty, a smaller prepayment allowance or terms that make switching harder next time. Compare the whole mortgage, not just the rate. Joshua's written Lender Comparison Report is built to do that.</p>")}

${cta({ title: "Find out what a switch could save you", text: "A 15-minute call is enough to see whether a different lender is worth the move, and when to start.", href: "/contact/", label: "Contact Joshua" })}
`;

export default {
  slug: "/mortgage-renewal-rates-bc/",
  h1: "Mortgage renewal rates in BC: what switchers actually get",
  lede: "Your renewal letter is one offer. How renewal rates differ for switchers, what a lower rate is worth on your own mortgage, and when to start.",
  crumbs: [["Home", "/"], ["Renewals", "/mortgage-renewal-bc/"], ["Renewal rates", "/mortgage-renewal-rates-bc/"]],
  nav: "/mortgage-renewal-bc/", calc: true, body,
  faqs: [
    { q: "Are renewal rates lower if I switch lenders?", a: "Often a different lender will offer a better rate than the letter you were sent, because lenders compete for new customers. It is not guaranteed, and the best offer depends on your balance, property and credit. That is why it is worth comparing before you sign." },
    { q: "Do I pay a penalty to switch lenders at renewal?", a: "Not when you switch at maturity. There is no prepayment penalty on the renewal date, which is why it is the one free move. There may be switching costs such as legal and appraisal fees, which the new lender often covers. Ask for that in writing." },
    { q: "When should I start shopping for a renewal rate?", a: "About 120 days before maturity. Most lenders allow a rate hold in that window, and it gives you time to compare. Waiting for the renewal letter, which only has to arrive 21 days ahead, leaves you very little room to negotiate or switch." },
    { q: "Will switching lenders mean a stress test?", a: "Often not. Straight switches with no increase in the balance or amortization are exempt from the stress test for uninsured mortgages between federally regulated lenders, and low-ratio insured switches have their own exemption. There are exceptions, so read the stress-test exemption guide." },
    { q: "What is a good renewal rate?", a: "There is no single number, because rates change and each borrower's file is different. A good rate is one that compares well with other real offers on your mortgage, with terms and penalties that fit your plans. Ask for several, and look at the whole mortgage." }
  ]
};
