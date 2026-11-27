import { TOOLS, topTool } from "../lib/tools.mjs";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Added Nov 24, 2026 from the Keyword Planner sheet: "reverse mortgage calculator" (100-1K a month in BC).
// Limits: Financial Consumer Agency of Canada, Reverse mortgages (modified 2025-10-15): usually 55+, usually up to 55% of value.
// HomeEquity Bank CHIP page: up to 55%, all owners 55+, minimum appraised value $250,000, no-negative-equity guarantee with exclusions.
const body = `
${short({
  answer: "Lenders usually lend up to 55% of your home's value to owners who are all 55 or older. Any mortgage you have is paid off first, and you get the rest. You make no payments, so interest is added to the balance and it grows every year.",
  who: "You're 55 or older, own a home in BC, and want to know how much a reverse mortgage could give you and what it would cost over time.",
  next: "Fill in the calculator below with a rate you've been quoted. Then read how the balance grows before you decide."
})}

<div class="tools">${topTool(TOOLS.reverse())}</div>

<h2>How the calculator works</h2>
<p>It does two things. First, it shows the most you could get in cash. That's 55% of the value you enter, less any mortgage or line of credit that has to be paid off. Second, it shows what you'd owe after 5, 10, 15 years and more, if you make no payments.</p>
<p>Treat the first number as a ceiling, not an offer. The Financial Consumer Agency of Canada says lenders usually lend up to 55% of the home's value. The lender sets your actual amount from the ages of everyone on title, the home's type and condition, its appraised value and its location. Younger owners usually get less, because the loan is expected to run longer.</p>
<p>The second part is the one most people skip. With no payments, interest is added to what you owe, and next year you pay interest on that too. The table shows how quickly that adds up, and how much equity is left at each point.</p>

<h2>Who can get a reverse mortgage</h2>
<ul>
<li><strong>Age.</strong> Usually 55 or older. HomeEquity Bank, a major reverse mortgage lender, requires every owner on title, including a spouse, to be 55 or older.</li>
<li><strong>Your home.</strong> It has to be your principal residence, which generally means you live there at least six months a year.</li>
<li><strong>Value.</strong> Lenders set a minimum. HomeEquity Bank's minimum appraised value is $250,000.</li>
<li><strong>Upkeep.</strong> You keep ownership, so you keep paying property tax and home insurance and keep the home in good repair. Falling behind on these can put the loan in default.</li>
</ul>
<p>Your income and credit matter far less than with a regular mortgage, because there's no monthly payment to qualify for. That's why reverse mortgages suit retirees with a valuable home and modest income.</p>

<h2>How the balance grows</h2>
<p>Say your home is worth $1,000,000, you have no mortgage, and you take $300,000 at 7%. You make no payments. After 10 years, at that rate compounding twice a year, you'd owe about $597,000. After 15 years, about $842,000. If the home's value doesn't change, your equity falls from $700,000 today to about $158,000 at 15 years.</p>
<p>Reverse mortgage rates are usually higher than regular mortgage rates, which speeds this up. A rising home value slows it down. Try the growth box in the calculator with 0%, 2% and 3% to see the range. No one can promise what values will do, so look at the 0% line first.</p>
<p>Some lenders offer a guarantee that you or your estate won't owe more than the home is worth when it's sold, as long as you meet the loan's terms. Read the exclusions. HomeEquity Bank's guarantee, for example, excludes administrative costs and interest that builds up after the loan comes due.</p>

<h2>Lump sum or regular payments</h2>
<p>You don't have to take it all at once. The federal consumer agency describes three ways to draw the money:</p>
<ul>
<li><strong>A lump sum.</strong> You pay interest on the full amount from day one, even if you don't spend it yet.</li>
<li><strong>A lump sum plus later draws.</strong> Often a minimum first draw of about $25,000. Each later draw may carry a fee or change your rate.</li>
<li><strong>Regular payments.</strong> For example, about $1,000 a month, usually after a first draw of about $20,000.</li>
</ul>
<p>Taking only what you need, when you need it, keeps the balance lower. Run the calculator with the amount you'd really take in the first year, not the maximum.</p>

<h2>Costs to plan for</h2>
<p>Beyond the interest, expect an appraisal, legal fees and setup or closing costs. Some lenders add these to the balance and some want them up front. Paying the loan off early, other than by selling or after the last owner passes away, can trigger a prepayment penalty. Ask for all of it in writing.</p>

${callout("Compare before you sign", "<p>A reverse mortgage is one of several ways to use your home's value. If you can carry a small payment, a <a href='/heloc-bc/'>home equity line of credit</a> usually costs less. Selling and buying something smaller is often the cheapest of all, and the <a href='/downsizing-and-your-mortgage/'>downsizing guide</a> walks through it. The <a href='/home-equity-loan-bc/'>home equity loan comparison</a> puts all four options side by side.</p>")}

<h2>Talk to family first</h2>
<p>The federal consumer agency recommends talking to a financial adviser, your family and possibly a lawyer before signing. That's sound advice. A reverse mortgage reduces what's left for your estate, and your executor will have a limited time to repay it after the last owner passes away. If family members expect to inherit the home, it's better they hear about the plan now.</p>
<p>The <a href="/reverse-mortgage-bc/">reverse mortgage guide</a> covers the pros, cons and alternatives in more depth. If you're still working out your retirement income, the page on <a href="/mortgages-for-retirees-and-seniors/">mortgages for retirees and seniors</a> explains how lenders count pension income for a regular mortgage too.</p>

${cta({ title: "Want a real number?", text: "Book a 15-minute call. I arrange reverse mortgages with HomeEquity Bank across BC and will compare them with a line of credit and downsizing on your numbers." })}

<p class="small">Sources: Financial Consumer Agency of Canada, Reverse mortgages, modified October 15, 2025. HomeEquity Bank, CHIP Reverse Mortgage page, read November 2026. The worked example uses 7% compounded semi-annually and is illustrative, not a quote.</p>
`;

export default {
  slug: "/reverse-mortgage-calculator-bc/",
  h1: "Reverse mortgage calculator for BC homeowners 55 and older",
  lede: "See the most you could get at the 55% most lenders advertise, after your current mortgage is paid off, and how the balance grows when you make no payments.",
  crumbs: [["Home", "/"], ["Calculators", "/mortgage-calculators/"], ["Reverse mortgage calculator", "/reverse-mortgage-calculator-bc/"]],
  nav: "/mortgage-calculators/",
  calc: true,
  body,
  faqs: [
    { q: "How much can I get from a reverse mortgage in BC?", a: "Lenders usually lend up to 55% of the home's value, less any mortgage that has to be paid off first. Your real figure depends on the ages of everyone on title, the home and its location. Younger owners usually get less." },
    { q: "What age do you have to be for a reverse mortgage?", a: "Usually 55 or older. HomeEquity Bank, a major lender, requires every owner on title, including a spouse, to be at least 55. The home has to be your principal residence, which generally means you live there at least six months a year." },
    { q: "Do I make payments on a reverse mortgage?", a: "No regular payments are required. Interest is added to the balance instead, so what you owe grows over time. The loan is repaid when you sell, move out, or the last owner passes away. You still pay property tax and insurance." },
    { q: "Can I owe more than my home is worth?", a: "Some lenders guarantee you won't, as long as you meet the loan's terms, but read the exclusions. One major lender's guarantee excludes administrative costs and interest that builds up after the loan comes due. Ask each lender for its guarantee in writing." },
    { q: "Is this calculator's number what a lender will offer?", a: "No. It shows the 55% ceiling most lenders advertise and how the balance would grow at the rate you enter. Only a lender's appraisal and review set your real amount. Fees and the lender's own compounding method aren't included." }
  ]
};
