import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Added Nov 24, 2026 from the Keyword Planner sheet: "fhsa" (1K-10K a month in BC).
// Rules: CRA "Participating in your FHSAs" (modified 2026-09-17) and "Definitions for FHSAs" (modified 2026-02-05).
const body = `
${short({
  answer: "The First Home Savings Account (FHSA) lets first-time buyers put away $8,000 a year, up to $40,000 in total. Contributions are generally tax-deductible, and a qualifying withdrawal to buy your first home is tax-free. Room only starts the year you open the account, so open it early.",
  who: "You're 18 or older, live in Canada, and haven't lived in a home you or your spouse owned in this year or the four before it.",
  next: "Open an FHSA this year, even with a small deposit, so the room starts building. Then read how it works with the Home Buyers' Plan."
})}

<h2>The FHSA in one minute</h2>
<p>The FHSA mixes the best parts of an RRSP and a TFSA. Like an RRSP, what you put in is generally tax-deductible. Like a TFSA, what you take out to buy your first home isn't taxed, and neither is the growth. You don't pay it back, unlike the Home Buyers' Plan.</p>
<p>For a first-time buyer in BC, it's usually the first account to fill. The sooner it's open, the more room you build, and the more tax you can save along the way.</p>

<h2>How much you can put in</h2>
<ul>
<li><strong>$8,000 a year.</strong> That's your room in the year you open your first FHSA, and the base amount each year after.</li>
<li><strong>$40,000 in total.</strong> The lifetime limit counts everything you've contributed or transferred in.</li>
<li><strong>Unused room carries forward, up to $8,000.</strong> If you put in less than $8,000 one year, you can catch up the next. So the most you can usually add in one year is $16,000.</li>
<li><strong>Room starts when you open the account.</strong> It doesn't build before then. Open it this year and you have $8,000 of room. Wait a year, and you've missed a year.</li>
</ul>
<p>The room is shared across all your FHSAs, and the growth inside the account doesn't use up any room. The CRA tracks it on your tax return, so you'll file a schedule for the FHSA each year once it's open.</p>

<h2>Who can open one</h2>
<p>You need to meet three tests when you open the account:</p>
<ul>
<li>You're at least 18.</li>
<li>You're a resident of Canada.</li>
<li>You're a first-time home buyer. For the FHSA, that means a five-year test. At no point this year or in the four years before it did you live, as your principal residence, in a home that you or your spouse or partner owned.</li>
</ul>
<p>That definition is different from the one the BC transfer tax exemption uses, which is much stricter. You can qualify for the FHSA and still not qualify for the provincial exemption. The <a href="/first-time-buyer-programs-bc/">first-time buyer programs page</a> sets all four tests side by side.</p>

<h2>Taking the money out for your home</h2>
<p>A withdrawal is tax-free if it's a qualifying withdrawal. The main conditions:</p>
<ul>
<li>You're still a first-time home buyer when you withdraw.</li>
<li>You have a written agreement to buy or build a qualifying home in Canada, closing before October 1 of the year after the withdrawal.</li>
<li>You plan to live in it as your principal residence within a year of buying or building it.</li>
<li>You haven't bought the home more than 30 days before the withdrawal.</li>
</ul>
<p>Your financial institution has a form for this. Your lawyer or notary will want the money in place before completion, so plan the timing with your broker. Lenders also like to see where your down payment came from, and the <a href="/down-payment-guide-bc/">down payment guide</a> covers the paperwork.</p>

<h2>How long the account can stay open</h2>
<p>The FHSA isn't open-ended. It has to close by December 31 of the year in which the first of these happens:</p>
<ul>
<li>It's been 15 years since you opened your first FHSA.</li>
<li>You turn 71.</li>
<li>It's the year after your first qualifying withdrawal.</li>
</ul>
<p>If you never buy, the money can move to an RRSP or RRIF under the CRA's rules. That's why opening one is low risk even if you're not sure you'll buy.</p>

${callout("FHSA plus the Home Buyers' Plan", "<p>You can use both on the same home, as long as you meet each program's rules when you withdraw. The Home Buyers' Plan lets each person take up to $60,000 from their RRSP, but it's a loan you repay over up to 15 years. The FHSA doesn't need repaying. Use the FHSA first, then the HBP if you need more. The guide on <a href='/guides/fhsa-and-home-buyers-plan-together/'>using the FHSA and the HBP together</a> walks through it.</p>")}

<h2>What it can add up to</h2>
<p>A couple who each open an FHSA can save up to $80,000 between them over time. Add the Home Buyers' Plan, at up to $60,000 each, and two people could reach $200,000 toward a home. Few people use every dollar, but even part of it covers the minimum down payment on most BC homes.</p>
<p>On a $750,000 home, the minimum down payment is $50,000. One full FHSA covers most of it. You'll still need cash for closing costs, including the property transfer tax. The <a href="/bc-property-transfer-tax-calculator/">transfer tax calculator</a> shows what's due at your price, with the first-time buyer exemption.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Waiting to open it.</strong> Room doesn't build until the account exists. A small deposit this year still starts the clock.</li>
<li><strong>Going over the limit.</strong> Contributing more than your room leads to a tax on the excess. Check your room on the CRA's My Account before a large deposit.</li>
<li><strong>Withdrawing too early.</strong> Without a signed agreement to buy, a withdrawal is taxable. Wait until you have a deal.</li>
<li><strong>Forgetting the timing on closing.</strong> Your lender and lawyer need to see the funds before completion. Ask your institution how long a withdrawal takes.</li>
</ul>
<p>The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> puts the FHSA in order with the rest of the steps, from pre-approval to getting your keys.</p>

${cta({ title: "Planning your down payment?", text: "Book a 15-minute call. I'll map out your FHSA, Home Buyers' Plan and savings against the homes you're looking at, and what lenders will want to see." })}

<p class="small">Sources: Canada Revenue Agency, Participating in your FHSAs (modified September 17, 2026) and Definitions for FHSAs (modified February 5, 2026), read November 2026. I'm a mortgage broker, not a tax adviser. Check your own room and tax questions with the CRA or an accountant.</p>
`;

export default {
  slug: "/fhsa-bc/",
  h1: "The FHSA for BC home buyers: limits, rules and how to use it",
  lede: "The First Home Savings Account in plain terms: $8,000 a year, $40,000 in total, who can open one, how a tax-free withdrawal works, and how it fits with the Home Buyers' Plan.",
  crumbs: [["Home", "/"], ["First-time buyers", "/first-time-home-buyer-bc/"], ["FHSA", "/fhsa-bc/"]],
  nav: "/first-time-home-buyer-bc/",
  body,
  faqs: [
    { q: "How much can I put in an FHSA?", a: "$8,000 a year, up to $40,000 in total. Unused room carries forward, but only up to $8,000, so the most you can usually add in one year is $16,000. Room only starts in the year you open your first FHSA." },
    { q: "Is the FHSA withdrawal really tax-free?", a: "Yes, if it's a qualifying withdrawal. You need to be a first-time home buyer with a written agreement to buy or build a qualifying home. It has to close before October 1 of the next year, and you plan to live in it within a year. You don't repay it." },
    { q: "Can I use the FHSA and the Home Buyers' Plan together?", a: "Yes, for the same home, as long as you meet each program's conditions when you withdraw. The FHSA doesn't need repaying. The Home Buyers' Plan lets you take up to $60,000 from your RRSP and repay it over up to 15 years." },
    { q: "Who counts as a first-time home buyer for the FHSA?", a: "Someone who hasn't lived in a home they or their spouse or common-law partner owned, as their principal residence, at any time this year or the four years before. You also need to be 18 or older and a resident of Canada." },
    { q: "What happens to my FHSA if I don't buy a home?", a: "The account has to close within 15 years of opening it, or by the end of the year you turn 71. If you never buy, the money can move to an RRSP or RRIF under the CRA's rules, or come out as taxable income." }
  ]
};
