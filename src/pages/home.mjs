import fs from "node:fs";
import { SITE, ratesStrip, reviews, cta, callout } from "../lib/site.mjs";

const photo = fs.existsSync("src/assets/img/josh-hero.webp")
  ? `<div class="arch"><img src="/assets/img/josh-hero-720.webp" srcset="/assets/img/josh-hero-720.webp 720w, /assets/img/josh-hero-1080.webp 1080w" sizes="(max-width: 720px) 86vw, 360px" width="720" height="1080" alt="Joshua Resvick, mortgage broker in Surrey, BC" fetchpriority="high"></div>`
  : `<div class="arch" aria-hidden="true"></div>`;

const hero = `<div class="hero-copy"><h1>A BC mortgage broker who explains the process, then manages the mortgage after it funds</h1>
<p class="lede">Hi, I'm Joshua Resvick. I've been a mortgage broker for ten years, I spent five years before that as a mortgage underwriter, and I've funded over 1,000 mortgages. You deal with me directly, from the first call right through to renewal.</p>
<div class="hero-actions"><a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a><a class="btn btn-ghost" href="${SITE.phoneHref}" data-evt="phone_click">Call ${SITE.phone}</a></div></div>${photo}`;

const body = `
${ratesStrip()}

<h2>Who I help</h2>
<p>Most people who call me are in one of five spots. Each one has its own rules, its own traps and its own best first move, so each one gets its own corner of this site. If you don't see yourself on the list, call anyway. I work on every kind of mortgage; the list is just where most conversations start.</p>
<div class="persona">
<a href="/first-time-home-buyer-bc/"><strong>First-time buyers</strong><span>The programs, the down payment rules, the closing costs and the order to do things in, before you write an offer.</span></a>
<a href="/mortgage-renewal-bc/"><strong>Renewing homeowners</strong><span>That letter from your lender is an offer, not a verdict. Here's what you can compare, and when.</span></a>
<a href="/self-employed-mortgage-bc/"><strong>Self-employed borrowers</strong><span>How lenders actually read business income, and which route fits your tax returns and your timeline.</span></a>
<a href="/investment-property-mortgages-bc/"><strong>Investors</strong><span>Rental mortgages, how lenders count rent, the strategies worth knowing and the risks worth respecting.</span></a>
<a href="/porting-your-mortgage/"><strong>Movers</strong><span>Selling and buying in the same window, taking your rate with you, and bridging the gap between two closing dates.</span></a>
<a href="/refinance-mortgage-bc/"><strong>Refinancing</strong><span>Using your equity, consolidating debt or funding a project, after checking whether the math actually works.</span></a>
</div>

<h2>What a mortgage broker does, and what it costs you</h2>
<p>Here's the short version. A mortgage broker is a licensed professional who arranges your mortgage through lenders, instead of selling you one lender's product. In British Columbia, brokers are licensed and regulated by the BC Financial Services Authority (BCFSA). I work under Xeva Mortgage (Verico Xeva Mortgage Inc.), brokerage licence #X300203, and my own broker licence is MB503619, which you can look up in BCFSA's public lookup any time you like.</p>
<p>Now the part people are usually too polite to ask about: the money. On a mortgage placed with a mainstream (A) lender, the lender pays me, and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files, and when they do, BC rules say you see the disclosure in writing before you commit. I walk through the whole arrangement, including what to ask any broker, on my page about <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>
<p>Does being paid by the lender tilt the advice toward the lender? It shouldn't, and here's why. The value of a broker is having several lenders on the table at once. The value of a good broker is knowing which one actually suits your file, and that depends on a lot more than the posted rate: how the lender treats your income, what the prepayment privileges are, how the penalty gets calculated, whether you can port the mortgage, and how the lender behaves when something in your life changes. Those are the things I compare, and they're the things a single quote from a single lender can't show you.</p>

<h2>How it works</h2>
<ol class="steps">
<li><strong>A strategy call</strong>Fifteen minutes on your goals, your numbers and your timeline. You'll leave knowing what's realistic and what your next step is.</li>
<li><strong>Your Lender Comparison Report</strong>A written side-by-side of real lender options: rate, term, penalties, prepayment and portability. Read about <a href="/lender-comparison-report/">the Lender Comparison Report</a>.</li>
<li><strong>Funding, then aftercare</strong>I manage the file to closing, and the relationship keeps going afterwards. See <a href="/mortgage-aftercare-program/">the aftercare program</a>.</li>
</ol>

${cta({ title: "Start with a conversation, not a form", text: "A 15-minute call is enough to map where you are and where you want to be. It's free, there's no obligation, and you're talking to the person who'll actually do the work." })}

<h2>An underwriter's view of your file</h2>
<p>Before I was a broker, I spent five years as a mortgage underwriter, reading a high volume of files and deciding which ones got approved. That changes how I build an application. An underwriter reads a file looking for the reason it won't work: income that can't be documented the way the lender needs it, a debt that got forgotten, a credit entry that needs a letter, a down payment with no paper trail. So I look for those problems first, and fix them before the file ever reaches a lender's desk.</p>
<p>I'd put it this way: I understand how deals actually get approved, not just how they get pitched. For you, that means fewer surprises late in the process, which is exactly when surprises cost the most. It also means I'll tell you honestly when a particular lender is the wrong fit, even if its rate looks great on paper. There's more about my background on the <a href="/about-joshua-resvick/">About page</a>.</p>

<div class="band">
<h2>The mortgage doesn't end at signing</h2>
<p>Most mortgages get arranged once and then left alone until the renewal letter shows up. Resvick Aftercare, my aftercare program, is built for the years in between: an annual review against your goals, an eye on your renewal window, a plain-language note whenever the Bank of Canada announces a rate decision, and a call about six months before your mortgage matures so there's time to compare options. And if life changes, a new job, a growing family, a separation, a plan to rent the place out, that's a reason to call me, not a reason to wait for the next review.</p>
<p><a href="/mortgage-aftercare-program/">See what the aftercare program includes</a>, or <a href="/mortgage-renewal-reminder/">sign up for a free renewal reminder</a> if your mortgage is arranged somewhere else. Yes, really, even if it's not with me.</p>
</div>

<h2>Why renewals matter right now</h2>
<p>Research from the Bank of Canada (2025) found that roughly 60 percent of outstanding Canadian mortgages come up for renewal in 2025 and 2026, and that most of those borrowers face a higher payment. How much higher depends on what you've got. The Bank's analysis found bigger jumps for people coming off a five-year fixed rate, and smaller or even negative changes for some variable-rate borrowers. Your situation will be its own thing, which is why it pays to look at the numbers before you sign anything.</p>
<p>The most useful thing to know is this: at renewal, you're free to compare. A renewal letter is one lender's offer. Under rules that took effect in late 2024, many borrowers can move an uninsured mortgage to a different federally regulated lender at maturity without taking a new stress test, as long as the balance and amortization don't increase. There are conditions, and credit unions and collateral charges complicate the picture, so the details are worth reading on the page about <a href="/stress-test-exemption-switching-lenders/">the stress-test exemption when switching lenders</a>. If you want the full process, start with the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>.</p>
<p>One thing I'll underline. A mortgage that reaches its maturity date without a signed renewal usually rolls into an open term at a rate that's typically much higher than a negotiated one. That's not a penalty, it's just how the contract works, and it's entirely avoidable if you start early.</p>

<h2>Tools you can use without giving anything up</h2>
<p>Every calculator on this site shows you the full result right away, no email address required. They all run on one shared calculation engine, built from published rules and tested against independently calculated cases, and each one tells you what it does and doesn't cover. You can check a <a href="/mortgage-calculators/#payment">mortgage payment</a> with the CMHC premium included, see how much house your income might support with the <a href="/mortgage-calculators/#affordability">affordability calculator</a>, estimate your <a href="/mortgage-calculators/#penalty">prepayment penalty</a>, or work out the <a href="/bc-property-transfer-tax-calculator/">BC property transfer tax</a>, first-time buyers' exemption included. Browse them all on the <a href="/mortgage-calculators/">mortgage calculators</a> page.</p>

<h2>From the educator</h2>
<p>My approach is to teach you the process so you can make the decision yourself. If you're not sure where to start, these are good first reads:</p>
<ul>
<li><a href="/first-time-buyer-programs-bc/">First-time buyer programs in BC</a>, and how the Home Buyers' Plan and the First Home Savings Account can be combined.</li>
<li><a href="/early-mortgage-renewal/">Early mortgage renewal</a>: when it helps, when it costs you, and how to tell the difference.</li>
<li><a href="/mortgage-rates-bc/">How mortgage rates work in BC</a>, and why the lowest advertised rate is rarely the whole story.</li>
</ul>
${reviews()}
${callout("A note on rates", "<p>You won't find rates printed in the articles on this site, because a rate in an article is out of date the day after it's written. A quick call gets you the number that applies to your file, which is the only rate worth comparing anyway. What you qualify for depends on your down payment, your credit, the property and the lender.</p>")}
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
