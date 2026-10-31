import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "On October 28, 2026, the Bank of Canada raised its policy rate by 0.25 points to 2.50 percent. Prime at the big banks went from 4.45 to 4.70 percent the next day. Adjustable-rate payments rise. Static-payment variable mortgages pay down more slowly.",
  who: "Anyone with a variable-rate mortgage, anyone renewing before the end of 2027, and anyone shopping for a fixed rate.",
  next: "Check which kind of variable you have, then run the <a href=\"/mortgage-calculators/#payment\">payment calculator</a> with your balance."
})}
<h2>What the Bank decided</h2>
<p>On Wednesday, October 28, 2026, the Bank of Canada raised its target for the overnight rate. It went up by 25 basis points, from 2.25 percent to 2.50 percent. The Bank Rate is now 2.75 percent, and the deposit rate is 2.45 percent (Bank of Canada, October 28, 2026).</p>
<p>It's the first increase since July 2023. It ends a run of decisions that held the rate at 2.25 percent.</p>
<p>In the Bank's own words, inflation has been higher and more stubborn than it expected in July. Energy prices remain high. The Bank raised the rate to lower the risk that those costs spread into the prices of other goods and services.</p>
<p>Headline inflation has been around 3 percent since April. The Bank expects it to reach about 3.5 percent by year-end. Leaving out gasoline, inflation was 2.2 percent in September. The Bank's core measures remain close to 2 percent. It projects inflation to average 3 percent in 2027 and to return to 2 percent by the middle of 2028.</p>
<p>On growth, the Bank said the economy grew 3.3 percent in the second quarter. Indicators point to about 2 percent growth in the third. It expects growth to slow in the fourth quarter because of new U.S. tariffs, then pick up in 2027. The unemployment rate has been around 6.5 percent for several months. Housing, the statement said, is expected to stay fairly weak.</p>
<p>The sentence that matters most for borrowers is the guidance at the end. Governing Council said the policy rate may need to rise further. It also said it will proceed carefully, given the uncertainty. That's neither a promise of more increases nor a promise of a pause.</p>
<p>The next scheduled announcement is December 9, 2026. The next Monetary Policy Report is due January 27, 2027.</p>

<h2>What happened to prime</h2>
<p>Nobody pays the policy rate on a mortgage. A variable-rate borrower pays a rate tied to their lender's prime rate. Prime moves when the banks decide to move it. That has usually been within a day of a Bank of Canada decision, and by the same amount.</p>
<p>This time was no different. National Bank announced a prime rate of 4.70 percent, effective October 29, 2026, up from 4.45 percent. The other large banks announced the same figure (National Bank of Canada, October 28, 2026).</p>
<p>If your variable mortgage is priced as prime minus a discount, your rate rose by 0.25 points on the day your lender's prime changed.</p>

<h2>If you hold a variable-rate mortgage</h2>
<p>Canada has two kinds of variable mortgage. The October decision affects them differently. The <a href="/variable-rate-mortgage/">variable rate mortgage guide</a> explains both in full. Here's the short version, applied to this week.</p>
<p><strong>Adjustable-rate mortgages</strong> have a payment that changes when prime changes. They'll see a higher payment on the next payment date after the lender reprices.</p>
<p>On a $500,000 balance with 22 years of amortization left, a 0.25-point increase adds roughly $65 to $70 a month. The exact number depends on the lender's compounding and amortization. That figure is an example, worked out with the site's payment engine. Your lender's statement is what counts.</p>
<p><strong>Variable mortgages with a static payment</strong> keep the same payment. What shifts is the split between interest and principal. These won't see a payment change. What changes is how much of each payment lowers the balance.</p>
<p>Less principal gets paid each month, and the amortization quietly gets longer. For most people, that feels less alarming in the short run. Over time, it costs more.</p>
<p>The thing to watch is the trigger rate. That's the rate where your fixed payment no longer covers the interest. One 0.25-point rise is unlikely to push a mortgage set up in the last two years to its trigger rate.</p>
<p>Did you take a static-payment variable in 2021 or 2022 and never reset your payment? Then ask your lender where your trigger rate sits.</p>
<p>After an increase, many variable holders ask about switching to a fixed rate. Most variable mortgages let you convert to a fixed term with the same lender, with no penalty. But the fixed rate you're offered is the lender's current rate, not a special one.</p>
<p>Fixed rates are priced from bond yields, and those had already moved before the announcement. Converting comes down to how much payment certainty is worth to you. The <a href="/fixed-vs-variable-mortgage/">fixed vs variable guide</a> sets out the trade-offs without making the choice for you.</p>

<h2>If you are renewing in the next twelve months</h2>
<p>A renewal is a chance to compare. Nothing about this decision changes that.</p>
<p>If your current term was set in 2021 or early 2022, you're coming off an unusually low rate. The rate you're offered will be higher, whatever the Bank does before your maturity date. If your term was set in 2023 or 2024, the comparison is closer. It could go either way.</p>
<p>The Bank's own research in 2025 found that most borrowers renewing in 2025 and 2026 face a higher payment. The biggest increases are for people coming off a five-year fixed (Bank of Canada, 2025).</p>
<p>The useful response is the same in every case. Start early. Get your lender's offer in writing. Compare it with what other lenders would offer for the same balance and amortization.</p>
<p>Since late 2024, many borrowers can move an uninsured mortgage to a different federally regulated lender at renewal without a new stress test. The balance and amortization can't go up. That rule didn't change this week.</p>
<p>It's the most useful thing to know about a renewal when rates are rising. Your options aren't limited to the lender you already have. The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> explains who qualifies and the traps. The <a href="/mortgage-renewal-bc/">renewal guide</a> covers the process.</p>
<p>A renewal letter arrives at least 21 days before maturity. Most lenders will hold a renewal rate 120 days out, and some earlier. When the Bank says rates may rise further, a rate hold has real value. The <a href="/early-mortgage-renewal/">early renewal guide</a> explains when locking in early helps and when it costs you.</p>

<h2>If you are watching fixed rates</h2>
<p>Fixed mortgage rates don't follow the policy rate directly. They're priced from Government of Canada bond yields. Those move every day on what the market expects for inflation and future policy.</p>
<p>The Bank's statement noted that financial conditions had already tightened since July, with higher government bond yields. In practice, some of the October increase was already in fixed rates before the announcement.</p>
<p>Whether fixed rates rise further depends on how the bond market reads the Bank's guidance. It also depends on the inflation data between now and December. No one can forecast that reliably, including this site.</p>
<p>What you can control is the rate hold. If you're pre-approved and shopping, confirm how long your hold runs. Ask if the lender will give you a lower rate if rates fall before you close. The <a href="/mortgage-rate-hold/">rate hold guide</a> covers both.</p>
<p>If you're choosing a term, the <a href="/5-year-fixed-mortgage-rate/">5-year fixed</a> and <a href="/3-year-fixed-mortgage-rate/">3-year fixed</a> pages set out who each one suits.</p>

<h2>What to do, and what not to do</h2>
<ul>
<li><strong>Do</strong> find out which kind of variable mortgage you have, adjustable or static-payment. If it's the second kind, ask your lender for your trigger rate.</li>
<li><strong>Do</strong> start a renewal conversation if your maturity date falls before the end of 2027. Six months out isn't too early.</li>
<li><strong>Do</strong> run your own numbers. The <a href="/mortgage-calculators/#payment">payment calculator</a> shows what a quarter point does to your payment. The <a href="/mortgage-calculators/#renewal">renewal calculator</a> compares staying, switching and refinancing side by side.</li>
<li><strong>Don't</strong> break a fixed-rate mortgage to react to one announcement. The penalty on a fixed mortgage can be large. The <a href="/interest-rate-differential/">IRD guide</a> explains why.</li>
<li><strong>Don't</strong> assume the next decision will be another increase. The Bank said it will proceed carefully. The data between now and December 9 will decide.</li>
<li><strong>Don't</strong> make a long-term choice based on a forecast, including a lender's. The honest answer about where rates go next is that no one knows.</li>
</ul>

${callout("How this series works", "<p>Each post covers one decision, on or near the day it happens. It quotes the Bank's own statement rather than a headline. Figures are dated. The evergreen guides linked above carry the rules, and this post carries the event. Clients in the aftercare program get the same note by email on decision day.</p>")}

${cta({ title: "Want this applied to your own mortgage?", text: "A 15-minute call is enough to work out what October's decision means for your payment, your trigger rate or your renewal. It's free, and there's no obligation." })}
`;

export default {
  slug: "/guides/bank-of-canada-october-2026/",
  date: "2026-10-30",
  series: "boc",
  title: "Bank of Canada October 2026 Rate Decision | What It Means",
  meta: "The Bank of Canada raised its policy rate to 2.50% on October 28, 2026. What it means for variable-rate holders, renewals in the next year and fixed rates.",
  h1: "Bank of Canada raises the policy rate to 2.50 percent: what the October 28, 2026 decision means for your mortgage",
  crumb: "Bank of Canada, October 2026",
  lede: "The first increase since 2023. What the Bank said, why, what prime did the next day, and what it changes for variable-rate holders, upcoming renewals and anyone shopping for a fixed rate.",
  body,
  links: ["/variable-rate-mortgage/", "/fixed-vs-variable-mortgage/", "/stress-test-exemption-switching-lenders/", "/mortgage-renewal-bc/", "/early-mortgage-renewal/", "/mortgage-rate-hold/", "/5-year-fixed-mortgage-rate/", "/3-year-fixed-mortgage-rate/", "/mortgage-calculators/#payment", "/mortgage-calculators/#renewal", "/interest-rate-differential/"],
  faqs: [
    { q: "Did my variable mortgage rate go up because of this decision?", a: "If your rate is set as prime minus a discount, yes. The large banks moved prime from 4.45 to 4.70 percent effective October 29, 2026, so a mortgage at prime minus 0.90 went from 3.55 to 3.80 percent. Whether your payment changes depends on whether your mortgage is adjustable or has a static payment, which your mortgage documents or your lender can confirm." },
    { q: "Does this mean fixed rates will go up too?", a: "Not automatically. Fixed rates are priced from bond yields, which move on expectations rather than on the announcement itself, and the Bank noted that yields had already risen since July. Some of the move was priced in before October 28. Where fixed rates go from here depends on the data and the market's reading of the Bank's guidance, and that cannot be forecast reliably." },
    { q: "Should I lock in my variable rate now?", a: "That depends on how much payment certainty is worth to you, not on a prediction. Most variable mortgages can be converted to a fixed term with the same lender without a penalty, at the lender's current fixed rate. Compare that rate with what you pay now and with what other lenders would offer at renewal, and decide on your own tolerance for change rather than on a guess about December." },
    { q: "When is the next Bank of Canada decision?", a: "December 9, 2026. The Bank publishes its full schedule a year ahead, with eight fixed dates. The next Monetary Policy Report, which carries the Bank's updated projections, is due on January 27, 2027. Each decision will have its own post in this series on the day." },
    { q: "I renew in 2027. Is there anything to do now?", a: "Yes: find out your maturity date, note that most lenders will hold a renewal rate about 120 days before it, and plan to compare offers rather than sign the first letter. If your mortgage is uninsured, you can usually move it to another federally regulated lender at renewal without a new stress test. The renewal guide and the early renewal guide walk through the timing." }
  ]
};
