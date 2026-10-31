import { TOOLS } from "../lib/tools.mjs";
import { cta, callout, ratesStrip } from "../lib/site.mjs";

const body = `
<h2>What renewal rates look like for switchers</h2>
<p>A renewal rate is the rate on your next term, and you are not limited to the one in your lender's letter. The letter is one offer from one lender. A broker can ask several lenders for their rate on the same mortgage, which is why a rate for a borrower who switches can differ from the rate printed in the envelope. This page prints no rate in its text; a 15-minute call gets you today's renewal and switch numbers for your own file, checked against real lenders rather than an advertisement. When the panel says to ask for today's rate, that is the honest answer, because rates change and the one that applies to you depends on your balance, your property and your lender.</p>
${ratesStrip()}
<p>This page deliberately has no rate typed into its text. A rate in an article is out of date almost at once, and a page that quotes one is either wrong or stale. What it does instead is explain how renewal rates work, and give you a tool to calculate what a different rate would mean for you.</p>

<h2>Why switch offers can differ from your bank's letter</h2>
<p>Lenders compete hardest for new customers, and a switch is a new customer. Your current lender already has your mortgage, so it has less reason to sharpen its offer, and its opening letter is a starting position, not a best price. That is why the guidance in the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> is to treat the letter as an opening offer. It does not mean your lender will never improve it. It means you will not know until you ask, and you are in a stronger position to ask when you have another offer in hand.</p>
<p>The Bank of Canada's analysis explains why this matters now. Bank of Canada (2025) estimates that about 60 percent of outstanding mortgages renew across 2025 and 2026, and that about 60 percent of those renewing face a higher payment. The average payment increase is about 10 percent for 2025 renewals and about 6 percent for 2026 renewals, compared with December 2024. For borrowers renewing a five-year fixed mortgage the average increase is roughly 15 to 20 percent, while variable-rate borrowers see an average decrease of roughly 5 to 7 percent. Your own result depends on the rate you had and the term you choose, so check it with your own figures.</p>

<h2>Insured switches and pricing</h2>
<p>Some lenders price a switch differently depending on whether the mortgage is insured or can be insured. Since December 16, 2024, Finance Canada's rules allow a low-ratio mortgage, meaning one with a loan-to-value ratio of 80 percent or less, to switch lenders at renewal under portfolio insurance without a new stress test, and the balance may rise by up to $3,000 to cover switching costs. When a lender can insure the mortgage, it carries less risk, and that can influence how it prices the switch. Whether it does is lender by lender, so the practical advice is to ask each lender how it prices your file, rather than assume. The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> explains both measures, and what they do and do not cover.</p>
<p>The details of the switch itself, such as who pays which cost and how long it takes, are on the <a href="/switch-mortgage-lenders-at-renewal/">switching lenders guide</a>. You do not pay a prepayment penalty to switch at maturity, which is why the renewal date is the one free move you have.</p>

${cta({ title: "Bring your renewal letter", text: "Share the rate and term your lender offered, and Joshua will show you what other lenders could do with the same mortgage, in writing, before you sign anything." })}

<h2>The savings math: do your own, not someone else's</h2>
<p>Some websites advertise an average saving from switching. Those figures describe somebody else's mortgage. The only number that matters is your own, and it takes four inputs: your balance, the years left on your amortization, the rate you have been offered, and the rate you could get elsewhere. The calculator below compares staying, switching and refinancing side by side over one term, including any costs you enter.</p>
<div class="tools">${TOOLS.renewal()}</div>
<p>You can also run it from the main <a href="/mortgage-calculators/#renewal">renewal calculator</a> page. Here is an illustrative example. Take a $500,000 balance with 20 years of amortization left, and compare two five-year fixed rates that are only examples, not quotes: 5.00 percent and 4.50 percent.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>5.00%</th><th>4.50%</th></tr></thead>
<tbody>
<tr><th scope="row">Monthly payment</th><td>$3,285.63</td><td>$3,152.03</td></tr>
<tr><th scope="row">Interest over five years</th><td>$114,029</td><td>$102,302</td></tr>
<tr><th scope="row">Balance after five years</th><td>$416,892</td><td>$413,181</td></tr>
</tbody></table></div>
<p>The lower rate saves about $11,727 of interest over the term and leaves a balance about $3,711 lower. Smaller differences matter too. On the same mortgage, a rate 0.10 percentage points lower (5.00 percent versus 4.90 percent) saves about $2,350 of interest over five years, and 0.25 percentage points saves about $5,870. If switching costs you a few thousand dollars of your own, as it sometimes does, you can see how small a rate difference repays them. Many lenders cover most switching costs, so ask for that in writing.</p>

<h2>Timing: when to start</h2>
<p>Most lenders let you lock a renewal rate about 120 days before your maturity date, and some allow it earlier. A lender is required to send a renewal statement at least 21 days before the term ends, but that is the legal minimum, not the time to start shopping. By then the choices that matter are already narrowing. Starting around 120 days out gives you time to compare offers, and a rate hold protects you if rates rise while you decide. What happens if rates fall during the hold depends on the lender, so ask before you rely on it. The <a href="/early-mortgage-renewal/">early renewal guide</a> covers rate holds in detail, including when renewing early costs you instead.</p>
<p>The warning on this page is the same as on every renewal page. A mortgage that reaches maturity without a signed renewal commonly rolls into an open term at a much higher rate. It is a feature of the contract, not a penalty, and it is entirely avoidable if you start early. The <a href="/mortgage-rates-bc/">mortgage rates guide</a> explains how lenders set rates and why the lowest advertised number is rarely the whole story.</p>

${callout("What a rate does not tell you", "<p>Two mortgages with the same rate can cost different amounts if one has a more expensive penalty, a smaller prepayment allowance, or terms that make switching harder next time. Compare the whole mortgage, not only the rate. Joshua's written Lender Comparison Report is built to do that.</p>")}

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
