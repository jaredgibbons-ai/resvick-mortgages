import { cta, callout } from "../lib/site.mjs";
import { bocDates } from "../lib/boc-dates.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "The Bank of Canada makes its last rate decision of 2026 on Wednesday, December 9, at 9:45 a.m. Eastern. Its policy rate is 2.50 percent. Economists are split between another quarter-point increase and a pause, so plan for both.",
  who: "You have a variable-rate mortgage, you renew before the end of 2027, or you're buying with a rate hold.",
  next: "Find out which kind of variable mortgage you have, then run the <a href=\"/mortgage-calculators/#payment\">payment calculator</a> at your balance."
})}
<h2>The date and where things stand</h2>
<p>The Bank of Canada announces its next policy rate decision on Wednesday, December 9, 2026, at 9:45 a.m. Eastern. That's 6:45 a.m. in BC. It's the eighth and last scheduled decision of 2026 (Bank of Canada, 2026 schedule).</p>
<p>The policy rate is 2.50 percent. The Bank raised it by a quarter point on October 28, 2026. That was the first increase since July 2023. The large banks moved their prime rate from 4.45 to 4.70 percent the next day (Bank of Canada and National Bank of Canada, October 28, 2026).</p>
<p>Our <a href="/guides/bank-of-canada-october-2026/">October decision post</a> covers what the Bank said then and what it meant for each kind of mortgage. This post is the lead-up to December. It sets out what the Bank will be weighing, the two most likely outcomes, and what to do this week either way.</p>

<h2>What the Bank will be weighing</h2>
<p>Three things stand out from the data and speeches since October.</p>
<p><strong>Inflation is still above target.</strong> Statistics Canada reported on November 16 that prices rose 3.1 percent over the year to October. That matched September. Gasoline, natural gas, groceries and clothing pushed it up. Leaving out energy, inflation was 2.0 percent. Leaving out both food and energy, it was 1.8 percent (Statistics Canada, via The Canadian Press, November 16, 2026).</p>
<p>So the high number comes mostly from energy. The question for the Bank is whether those costs spread into everything else.</p>
<p><strong>The Governor flagged that risk.</strong> Tiff Macklem spoke at the Economic Club of Canada in Toronto on November 24. He said oil prices and refinery margins have come down, but inflation is expected to persist. He warned of a second-round effect of the oil shock in the new year, as businesses pass on higher costs. He also called the economy resilient (Global News, November 25, 2026).</p>
<p><strong>The economy is not running hot.</strong> In October the Bank said unemployment had been around 6.5 percent for several months. It expected growth to slow late this year as new U.S. tariffs bite. A rate increase in a slowing economy is a harder call than one in a booming economy.</p>

<h2>What economists expect</h2>
<p>Forecasters don't agree, and it's worth seeing why.</p>
<p>Sal Guatieri, a senior economist at BMO Capital Markets, said the Governor's remarks ended hopes of waiting until early 2027. He expects an increase of at least a quarter point, to 2.75 percent. He also said a hike could prove premature if the job market weakens (Global News, November 25, 2026).</p>
<p>Avery Shenfeld, chief economist at CIBC, said the Bank seems to want to move sooner rather than later. He added that December may be the last increase for some time, if energy prices keep cooling (Global News, November 25, 2026).</p>
<p>Other forecasters expect a pause in December, pointing to softer underlying inflation (CTC News, November 25, 2026).</p>
<p>No one knows what the Bank will do, and this site won't guess. The useful move is to know what each outcome means for you before Wednesday morning.</p>

<h2>If the Bank raises the rate a quarter point</h2>
<p>A quarter-point increase would take the policy rate to 2.75 percent. Lenders set their own prime rate. In recent years, the big banks have moved prime by the same amount within a day. If they do that again, prime would go from 4.70 to 4.95 percent.</p>
<p>Here's what that would mean by mortgage type:</p>
<ul>
<li><strong>Adjustable-rate mortgage.</strong> Your payment goes up at the next payment after your lender reprices. On a $500,000 balance with 22 years left, a quarter point adds roughly $65 to $70 a month. That's an example from this site's payment engine. Your lender's notice is what counts.</li>
<li><strong>Variable with a fixed payment.</strong> Your payment stays the same. More of it goes to interest and less to the balance. Watch your trigger rate, the point where the payment no longer covers the interest.</li>
<li><strong>Fixed-rate mortgage.</strong> Nothing changes until your term ends. Fixed rates for new borrowers follow bond yields, which often move before the announcement.</li>
<li><strong>Line of credit or HELOC.</strong> Most are tied to prime, so the rate on any balance would rise the same day prime does.</li>
</ul>

<h2>If the Bank holds at 2.50 percent</h2>
<p>A hold leaves prime where it is. Variable payments and HELOC rates stay put.</p>
<p>The words matter as much as the number. In October, the Bank said the rate may need to rise further. If it repeats that in December, markets will keep pricing a chance of an increase in 2027. That can keep fixed rates firm even with no change in the policy rate.</p>
<p>A hold is not a cut. Nothing the Bank has said since October points to lower rates soon.</p>

<h2>What to do before December 9</h2>
<ul>
<li><strong>Know your mortgage type.</strong> Check your last statement or call your lender. Ask whether your variable payment adjusts, or stays fixed while the split changes.</li>
<li><strong>Ask for your trigger rate.</strong> This matters most if you took a fixed-payment variable in 2021 or 2022 and never raised your payment.</li>
<li><strong>Check your rate hold.</strong> If you're pre-approved or mid-purchase, confirm when your hold expires and whether you'd get a lower rate if rates fall before you close. The <a href="/mortgage-rate-hold/">rate hold guide</a> explains how holds work.</li>
<li><strong>Start your renewal early.</strong> If your term ends before the end of 2027, now isn't too soon to compare. The <a href="/mortgage-renewal-bc/">renewal guide</a> covers the steps, and many borrowers can switch lenders at renewal without a new stress test.</li>
<li><strong>Don't break a fixed mortgage over one decision.</strong> The penalty can be large. The <a href="/interest-rate-differential/">IRD guide</a> shows why.</li>
<li><strong>Thinking of locking in a variable?</strong> Most lenders let you convert to a fixed term with no penalty. You'd get their current fixed rate. The <a href="/fixed-vs-variable-mortgage/">fixed vs variable guide</a> sets out the trade-off.</li>
</ul>

<h2>After the announcement</h2>
<p>Joshua posts what the Bank decided on December 9, with the Bank's own wording, what prime did and what it means for each kind of mortgage. That post will be linked from the <a href="/guides/">guides page</a> the same day.</p>
<p>The next decision after that is January 27, 2027, along with a new Monetary Policy Report. If your maturity date or a purchase falls in the next few months, both dates are worth marking.</p>

${callout("How this series works", "<p>Each Bank of Canada post covers one decision, before or on the day it happens. Figures are dated and sourced. The evergreen guides carry the rules, and these posts carry the event. Aftercare clients get the same note by email on decision day.</p>")}

${bocDates()}
${cta({ title: "Want to know what December means for your mortgage?", text: "A 15-minute call is enough to check your mortgage type, your trigger rate or your renewal timing before Wednesday. It's free, and there's no obligation." })}
`;

export default {
  slug: "/guides/bank-of-canada-december-2026-preview/",
  date: "2026-11-27",
  series: "boc",
  title: "Bank of Canada December 9, 2026 Decision | What to Watch",
  meta: "The Bank of Canada decides on December 9, 2026. Where the rate stands, what economists expect, and what a hike or a hold means for your mortgage.",
  h1: "Bank of Canada December 9, 2026 rate decision: what to watch and how to prepare",
  crumb: "Bank of Canada, December 2026 preview",
  lede: "The last decision of 2026 is on Wednesday, December 9. Where the rate stands, what the Bank is weighing, what a hike or a hold would mean for each kind of mortgage, and what to do this week.",
  body,
  links: ["/guides/bank-of-canada-october-2026/", "/mortgage-calculators/#payment", "/mortgage-rate-hold/", "/mortgage-renewal-bc/", "/interest-rate-differential/", "/fixed-vs-variable-mortgage/", "/guides/"],
  faqs: [
    { q: "When is the next Bank of Canada rate decision?", a: "Wednesday, December 9, 2026, at 9:45 a.m. Eastern, which is 6:45 a.m. in BC. It's the last scheduled decision of 2026. The first of 2027 is January 27, with a new Monetary Policy Report." },
    { q: "Will my variable mortgage payment go up in December?", a: "Only if the Bank raises its rate and your lender moves prime, and only if your mortgage is adjustable. On a fixed-payment variable, your payment stays the same, but less of it goes to the balance. Your mortgage documents say which kind you have." },
    { q: "Should I lock my variable into a fixed rate before December 9?", a: "It depends on how much a steady payment is worth to you, not on a forecast. Most lenders let you convert with no penalty, at their current fixed rate. Fixed rates follow bond yields, which often move before the announcement, so waiting a day rarely changes much." },
    { q: "What happens to my HELOC if the rate goes up?", a: "Most home equity lines of credit are priced at prime plus a margin. If your lender raises prime, the rate on your balance rises the same day. Your minimum payment is usually interest only, so it rises too." },
    { q: "Does the December decision affect my renewal?", a: "Indirectly. Renewal rates depend on the term you choose. Variable offers follow prime, and fixed offers follow bond yields. Either way, start comparing about six months before your maturity date and get any lender's offer in writing." }
  ]
};
