import fs from "node:fs";
import { SITE, ratesStrip, reviews, actionCards } from "../lib/site.mjs";

const photo = fs.existsSync("src/assets/img/josh-hero.webp")
  ? `<div class="arch"><img src="/assets/img/josh-hero-720.webp" srcset="/assets/img/josh-hero-720.webp 720w, /assets/img/josh-hero-1080.webp 1080w" sizes="(max-width: 720px) 86vw, 360px" width="720" height="1080" alt="Joshua Resvick, mortgage broker in Surrey, BC" fetchpriority="high"></div>`
  : `<div class="arch" aria-hidden="true"></div>`;

const hero = `<div class="hero-copy"><h1>Your BC mortgage broker, in plain English</h1>
<p class="lede">I'm Joshua Resvick. I compare lenders for you, explain every step and stay with you after closing. On most mortgages, the lender pays me and you pay nothing.</p>
${actionCards()}<p class="hero-phone">Prefer to talk? Call <a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>.</p></div>${photo}`;

const body = `
${ratesStrip()}
<h2>What do you need help with?</h2>
<div class="persona">
<a href="/first-time-home-buyer-bc/"><strong>Buying my first home</strong><span>Programs, down payment and the order to do things in.</span></a>
<a href="/mortgage-renewal-bc/"><strong>Renewing my mortgage</strong><span>Your renewal letter is an offer. Compare before you sign.</span></a>
<a href="/refinance-mortgage-bc/"><strong>Refinancing or using equity</strong><span>Check the math first, then decide.</span></a>
<a href="/self-employed-mortgage-bc/"><strong>Self-employed</strong><span>How lenders read business income.</span></a>
<a href="/investment-property-mortgages-bc/"><strong>Buying a rental</strong><span>How lenders count rent, and the risks.</span></a>
<a href="/porting-your-mortgage/"><strong>Selling and buying</strong><span>Take your rate with you, and bridge the gap.</span></a>
</div>
<p>Not on the list? Call anyway. I work on every kind of mortgage. Or browse <a href="/resources/">every guide in one place</a>.</p>

<h2>How it works</h2>
<ol class="steps">
<li><strong>A 15-minute call</strong>We talk about your goal, your numbers and your timeline. You leave with a clear next step.</li>
<li><strong>A written comparison</strong>Real lender options side by side: rate, term, penalties and flexibility. See <a href="/lender-comparison-report/">the Lender Comparison Report</a>.</li>
<li><strong>Funding, then aftercare</strong>I manage the file to closing. Then I check in each year. See <a href="/mortgage-aftercare-program/">the aftercare program</a>.</li>
</ol>

<h2>What it costs</h2>
<p>On a mortgage with a mainstream (A) lender, the lender pays me. You pay nothing. Fees only come up on some B-lender and private files, and BC rules say you see them in writing first. Here is <a href="/how-mortgage-brokers-get-paid/">how brokers get paid</a>.</p>
<p>I'm licensed by the BC Financial Services Authority (BCFSA), licence MB503619, through Xeva Mortgage (Verico Xeva Mortgage Inc.), brokerage licence #X300203. You can look me up in BCFSA's public lookup any time.</p>

<h2>Why me</h2>
<p>I spent five years as a mortgage underwriter before I became a broker. So I read your file the way a lender will, and fix the problems before it gets sent. That means fewer surprises late in the process. More on the <a href="/about-joshua-resvick/">About page</a>.</p>

<div class="band">
<h2>Is your renewal coming up?</h2>
<p>A mortgage that reaches its maturity date unsigned often rolls into a pricier open term. Start about 120 days out and you have time to compare. I'll remind you for free, even if your mortgage isn't with me.</p>
<p><a href="/mortgage-renewal-reminder/">Sign up for the renewal reminder</a>, or read <a href="/switch-mortgage-lenders-at-renewal/">how switching lenders works</a>.</p>
</div>

<h2>Try a calculator</h2>
<p>Every result shows right away. No email needed. <a href="/mortgage-calculators/#affordability">How much can I afford</a>, <a href="/mortgage-calculators/#payment">my payment</a>, <a href="/mortgage-calculators/#penalty">my penalty</a> or <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax</a>. Or see <a href="/mortgage-calculators/">all the calculators</a>. Wondering about rates? Read <a href="/mortgage-rates-bc/">how mortgage rates work in BC</a>.</p>
${reviews()}
`;

export default {
  slug: "/",
  home: true,
  h1: "Your BC mortgage broker, in plain English",
  hero,
  nav: "/",
  body,
  faqs: [
    { q: "How much does a mortgage broker cost?", a: "On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees only come up on some B-lender and private-lender files, and BC rules require written disclosure before you commit. I explain the whole thing on my <a href=\"/how-mortgage-brokers-get-paid/\">page about how brokers get paid</a>." },
    { q: "Why use a broker instead of going to my bank?", a: "Your bank can only offer its own products. A broker can compare several lenders and pick the one whose rules, penalties and flexibility fit your file, not just the one with a nice posted rate. The comparison is the whole point. Read the full answer on <a href=\"/mortgage-broker-vs-bank/\">broker versus bank</a>." },
    { q: "How fast can a mortgage be arranged?", a: "Mostly it depends on how quickly your documents arrive and how soon the lender can appraise the property. A clean, complete file moves fastest, which is why I review it like an underwriter first. Tell me your deadline on the first call and I'll plan backwards from it." },
    { q: "Where does Joshua work, and who do you serve?", a: "My office is at #106, 2626 Croydon Drive in Surrey, and the brokerage is Xeva Mortgage. Everything can be done online or by phone, so I work with clients across British Columbia, not just near Surrey, and you never need to visit the office unless you'd like to. <a href=\"/contact/\">Get in touch</a> to start." }
  ]
};
