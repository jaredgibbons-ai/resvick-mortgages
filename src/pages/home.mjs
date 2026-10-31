import fs from "node:fs";
import { SITE, ratesStrip, reviews, cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const photo = fs.existsSync("src/assets/img/josh-hero.webp")
  ? `<div class="arch"><img src="/assets/img/josh-hero-720.webp" srcset="/assets/img/josh-hero-720.webp 720w, /assets/img/josh-hero-1080.webp 1080w" sizes="(max-width: 720px) 86vw, 360px" width="720" height="1080" alt="Joshua Resvick, mortgage broker in Surrey, BC" fetchpriority="high"></div>`
  : `<div class="arch" aria-hidden="true"></div>`;

const hero = `<div class="hero-copy"><h1>A BC mortgage broker who explains the process, then manages the mortgage after it funds</h1>
<p class="lede">Hi, I'm Joshua Resvick. I've been a mortgage broker for ten years, I spent five years before that as a mortgage underwriter, and I've funded over 1,000 mortgages. You deal with me directly, from the first call right through to renewal.</p>
<div class="hero-actions"><a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a><a class="btn btn-ghost" href="${SITE.phoneHref}" data-evt="phone_click">Call ${SITE.phone}</a></div></div>${photo}`;

const body = `
${ratesStrip()}
${short({
  answer: "I'm a licensed BC mortgage broker. I compare lenders for you, explain every step in plain language, and keep managing your mortgage after it funds. On mainstream (A) lender mortgages, the lender pays me and you pay nothing.",
  who: "First-time buyers, homeowners renewing or refinancing, self-employed borrowers and investors anywhere in BC.",
  next: "Book a 15-minute call, or try the <a href=\"/mortgage-check/\">two-minute mortgage check</a> first."
})}

<h2>Who I help</h2>
<p>Most people who call me are in one of five spots. Each one has its own rules, its own traps and its own best first move. So each one gets its own corner of this site.</p>
<p>Don't see yourself on the list? Call anyway. I work on every kind of mortgage. The list is just where most conversations start.</p>
<div class="persona">
<a href="/first-time-home-buyer-bc/"><strong>First-time buyers</strong><span>The programs, the down payment rules, the closing costs and the order to do things in, before you write an offer.</span></a>
<a href="/mortgage-renewal-bc/"><strong>Renewing homeowners</strong><span>That letter from your lender is an offer, not a verdict. Here's what you can compare, and when.</span></a>
<a href="/self-employed-mortgage-bc/"><strong>Self-employed borrowers</strong><span>How lenders actually read business income, and which route fits your tax returns and your timeline.</span></a>
<a href="/investment-property-mortgages-bc/"><strong>Investors</strong><span>Rental mortgages, how lenders count rent, the strategies worth knowing and the risks worth respecting.</span></a>
<a href="/porting-your-mortgage/"><strong>Movers</strong><span>Selling and buying in the same window, taking your rate with you, and bridging the gap between two closing dates.</span></a>
<a href="/refinance-mortgage-bc/"><strong>Refinancing</strong><span>Using your equity, consolidating debt or funding a project, after checking whether the math actually works.</span></a>
</div>

<h2>What a mortgage broker does, and what it costs you</h2>
<p>Here's the short version. A mortgage broker is a licensed pro who arranges your mortgage through lenders. I don't sell you one lender's product.</p>
<p>In BC, brokers are licensed and regulated by the BC Financial Services Authority (BCFSA). I work under Xeva Mortgage (Verico Xeva Mortgage Inc.), brokerage licence #X300203. My own broker licence is MB503619. You can look it up in BCFSA's public lookup any time.</p>
<p>Now the part people are too polite to ask about: the money. On a mortgage placed with a mainstream (A) lender, the lender pays me. You pay nothing for the service.</p>
<p>Fees only come up on some B-lender and private-lender files. When they do, BC rules say you see the disclosure in writing before you commit. I walk through the whole setup, including what to ask any broker, on my page about <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>
<p>Does being paid by the lender tilt the advice? It shouldn't, and here's why. A broker's value is having several lenders on the table at once. A good broker's value is knowing which one actually suits your file.</p>
<p>That takes a lot more than the posted rate. How does the lender treat your income? What are the prepayment privileges? How is the penalty worked out? Can you port the mortgage? How does the lender act when your life changes? Those are the things I compare. A single quote from a single lender can't show you any of them.</p>

<h2>How it works</h2>
<ol class="steps">
<li><strong>A strategy call</strong>Fifteen minutes on your goals, your numbers and your timeline. You'll leave knowing what's realistic and what your next step is.</li>
<li><strong>Your Lender Comparison Report</strong>A written side-by-side of real lender options: rate, term, penalties, prepayment and portability. Read about <a href="/lender-comparison-report/">the Lender Comparison Report</a>.</li>
<li><strong>Funding, then aftercare</strong>I manage the file to closing, and the relationship keeps going afterwards. See <a href="/mortgage-aftercare-program/">the aftercare program</a>.</li>
</ol>

${cta({ title: "Start with a conversation, not a form", text: "A 15-minute call is enough to map where you are and where you want to be. It's free, there's no obligation, and you're talking to the person who'll do the work." })}

<h2>An underwriter's view of your file</h2>
<p>Before I was a broker, I spent five years as a mortgage underwriter. I read a high volume of files and decided which ones got approved. That changes how I build an application.</p>
<p>An underwriter reads a file looking for the reason it won't work. Maybe it's income that can't be documented the way the lender needs. Maybe it's a forgotten debt, a credit entry that needs a letter or a down payment with no paper trail. So I look for those problems first. I fix them before your file ever reaches a lender's desk.</p>
<p>Put simply, I understand how deals get approved, not just how they get pitched. For you, that means fewer surprises late in the process, which is exactly when surprises cost the most.</p>
<p>It also means I'll tell you straight when a lender is the wrong fit, even if its rate looks great on paper. There's more about my background on the <a href="/about-joshua-resvick/">About page</a>.</p>

<div class="band">
<h2>The mortgage doesn't end at signing</h2>
<p>Most mortgages get set up once and left alone until the renewal letter shows up. Resvick Aftercare, my aftercare program, is built for the years in between.</p>
<p>You get an annual review against your goals and an eye on your renewal window. You get a plain-language note whenever the Bank of Canada makes a rate decision. And you get a call about six months before your mortgage matures, so there's time to compare.</p>
<p>If life changes, call me. A new job, a growing family, a separation or a plan to rent the place out are all reasons to talk, not to wait for the next review.</p>
<p><a href="/mortgage-aftercare-program/">See what the aftercare program includes</a>, or <a href="/mortgage-renewal-reminder/">sign up for a free renewal reminder</a> if your mortgage is somewhere else. Yes, really, even if it's not with me.</p>
</div>

<h2>Why renewals matter right now</h2>
<p>Bank of Canada research (2025) found that roughly 60 percent of outstanding Canadian mortgages renew in 2025 and 2026. Most of those borrowers face a higher payment.</p>
<p>How much higher depends on what you've got. The Bank found bigger jumps for people coming off a five-year fixed rate. Some variable-rate borrowers can expect smaller changes, or even a drop. Your situation is its own thing. That's why it pays to look at the numbers before you sign.</p>
<p>The most useful thing to know is this: at renewal, you're free to compare. A renewal letter is one lender's offer.</p>
<p>Rules that took effect in late 2024 help here. Many borrowers can now move an uninsured mortgage to a different federally regulated lender at maturity with no new stress test. The catch is that the balance and amortization can't go up.</p>
<p>There are conditions, and credit unions and collateral charges complicate things. Read the details on the page about <a href="/stress-test-exemption-switching-lenders/">the stress-test exemption when switching lenders</a>. For the full process, start with the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>.</p>
<p>One thing I'll underline. A mortgage that hits its maturity date with no signed renewal usually rolls into an open term. That rate is typically much higher than a negotiated one. It isn't a penalty, it's just how the contract works. And it's easy to avoid if you start early.</p>

<h2>Tools you can use without giving anything up</h2>
<p>Every calculator on this site shows you the full result right away. No email address needed.</p>
<p>They all run on one shared calculation engine, built from published rules. It's been tested against cases worked out independently. Each tool tells you what it does and doesn't cover.</p>
<p>Check a <a href="/mortgage-calculators/#payment">mortgage payment</a> with the CMHC premium included. See how much home your income might support with the <a href="/mortgage-calculators/#affordability">affordability calculator</a>. Estimate your <a href="/mortgage-calculators/#penalty">prepayment penalty</a>. Or work out the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax</a>, with the first-time buyer exemption included. Browse them all on the <a href="/mortgage-calculators/">mortgage calculators</a> page.</p>

<h2>From the educator</h2>
<p>My approach is to teach you the process so you can make the call yourself. Not sure where to start? These are good first reads:</p>
<ul>
<li><a href="/first-time-buyer-programs-bc/">First-time buyer programs in BC</a>, and how to combine the Home Buyers' Plan and the FHSA.</li>
<li><a href="/early-mortgage-renewal/">Early mortgage renewal</a>: when it helps, when it costs you, and how to tell the difference.</li>
<li><a href="/mortgage-rates-bc/">How mortgage rates work in BC</a>, and why the lowest advertised rate is rarely the whole story.</li>
</ul>
${reviews()}
${callout("A note on rates", "<p>You won't find rates printed in the articles here. A rate in an article is out of date the day after it's written. A quick call gets you the number for your own file, which is the only rate worth comparing. What you qualify for depends on your down payment, your credit, the property and the lender.</p>")}
`;

export default {
  slug: "/",
  home: true,
  h1: "A BC mortgage broker who explains the process",
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
