import fs from "node:fs";
import { SITE, cta } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const photo = fs.existsSync("src/assets/img/josh-about.webp")
  ? `<div class="arch"><img src="/assets/img/josh-about-720.webp" srcset="/assets/img/josh-about-720.webp 720w, /assets/img/josh-about-1080.webp 1080w" sizes="(max-width: 720px) 86vw, 360px" width="720" height="1080" alt="Joshua Resvick, mortgage broker at Xeva Mortgage" fetchpriority="high"></div>`
  : `<div class="arch" aria-hidden="true"></div>`;

const hero = `<div class="hero-copy"><h1>Joshua Resvick, mortgage broker in Surrey, BC</h1>
<p class="lede">Ten years as a mortgage broker, five years as an underwriter before that, and over 1,000 mortgages funded. I teach you the process, then I stick around after it funds.</p>
<div class="hero-actions"><a class="btn" href="${SITE.book}" data-evt="book_call_click">Book a 15-minute call</a></div></div>${photo}`;

const body = `
${short({ answer: "I'm Joshua Resvick, a BC mortgage broker with Xeva Mortgage. I spent five years as an underwriter, then ten as a broker, and I've funded over 1,000 mortgages.", who: "Anyone in BC who wants to know who they'd be working with before they call.", next: "Book a free <a href=\"${SITE.book}\">15-minute call</a>, or read <a href=\"/how-mortgage-brokers-get-paid/\">how brokers get paid</a> first." })}

<h2>Who I am</h2>
<p>I'm the broker behind Resvick Mortgages. I work under Xeva Mortgage (Verico Xeva Mortgage Inc.). My office is in Surrey, British Columbia. I work with clients across the province, online and by phone.</p>
<p>I've been a mortgage broker for ten years. Before that, I was a mortgage underwriter for five years. I've funded over 1,000 mortgages.</p>
<p>I work directly with every client. There's no call centre between you and me. No junior hands off your file. No team of strangers learns your story from scratch. When you call, you get me.</p>

<h2>Where the underwriting years come in</h2>
<p>Underwriters are the people at a lender who decide if a file gets approved. I did that job for five years before I became a broker. So I've read a huge number of applications the way a lender reads them. I looked for what didn't fit, what was missing and what needed explaining.</p>
<p>Here's how I'd put it. I know how deals actually get approved, not just how they get pitched. The difference matters more than it sounds. A pitch is about the best parts of a file. An approval is about the weakest.</p>
<p>So what does a file that reads well look like? The income is shown the way that lender wants it. Every debt is listed. The down payment has a clear history. The property fits the lender's rules. I check those things before an application goes anywhere.</p>

<h2>What that means for your file</h2>
<p>In practice, an underwriting background shows up in a few ways:</p>
<ul>
<li><strong>Lender-ready applications.</strong> Your documents are sorted and explained before the lender sees them. Questions get answered up front, not as surprise conditions at the last minute. The <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows what I look for.</li>
<li><strong>The right lender for the file.</strong> Lenders treat the same income, credit and property differently. I know how each one reads a file. That's how I match you to a lender that will actually approve it, not just one with a nice rate.</li>
<li><strong>Honest early answers.</strong> If a plan won't work as drawn, you'll hear that on the first call. You'll also hear what would make it work. It saves time. It also stops you building a plan on a number that won't hold.</li>
<li><strong>Clear comparisons.</strong> Every client gets a written side-by-side of real lender options before deciding. The <a href="/lender-comparison-report/">Lender Comparison Report</a> page explains what's in it.</li>
</ul>

<h2>The numbers, labelled honestly</h2>
<div class="band">
<p><strong>Over 1,000</strong> mortgages funded by me.</p>
<p><strong>Ten years</strong> as a mortgage broker, after <strong>five years</strong> as a mortgage underwriter.</p>
<p><strong>$14B+</strong> in funded volume is a figure Xeva Mortgage, the brokerage, cites for the whole firm. It's not my personal total. It's here so you know the size of the organization behind the licence.</p>
</div>
<p>Those are the only numbers this page claims. You won't find made-up review counts, lender counts or savings promises on this site. If I can't check a number, it isn't here.</p>

<h2>How I work</h2>
<p>I run my practice on systems, because organized files are fast files. Day to day, it looks like this:</p>
<ol>
<li><strong>One conversation to start.</strong> A 15-minute call covers your goals, your numbers and your timeline. You don't need a stack of documents to have it.</li>
<li><strong>A plan with dates.</strong> For a purchase, I work back from your offer or possession date. For a renewal, I work back from your maturity date. The deadlines drive the checklist.</li>
<li><strong>Updates at each step.</strong> You'll hear from me when the application goes in and when the lender responds. You'll also hear when conditions arrive and when they're cleared. You should never have to chase me for news.</li>
<li><strong>Talking to your realtor and lawyer.</strong> When you're buying, the people around you need the right dates and documents. I keep them in the loop so nothing stalls at the end.</li>
<li><strong>Safe document handling.</strong> Private financial documents don't travel by plain email or website forms. I send you a secure upload link when it's time.</li>
</ol>
<p>New buyers often ask what to do first. My usual answer is to talk to a broker before you start viewing homes. Knowing your real buying power and your real cash needs changes which homes you should look at. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> walks through the steps.</p>

<h2>The aftercare promise</h2>
<p>A mortgage is a long relationship, and funding day is only one date in it. My aftercare program keeps the mortgage working for you. It includes four things:</p>
<ul>
<li>A yearly review against your goals.</li>
<li>An eye on your renewal window.</li>
<li>A plain-language note when the Bank of Canada makes an announcement.</li>
<li>A call about six months before your term ends, so you have time to compare.</li>
</ul>
<p>The <a href="/mortgage-aftercare-program/">aftercare program page</a> describes each part. It matters most at renewal. That's where a lot of people lose money just by default. If your mortgage matures in the next year or two, start with the <a href="/mortgage-renewal-bc/">renewal guide</a>.</p>

<h2>A little about me</h2>
<p>I'm a husband and a father of two. I live and work in British Columbia. That's a useful reminder of what a mortgage is actually for.</p>
<p>The questions clients bring me are family questions as much as money ones. Should we wait or buy now? How does this payment sit next to the rest of our budget? What happens if one income stops? Those deserve a patient, plain answer. That's the standard I hold myself to.</p>
<p>I work with clients across BC. If you're near my office, the <a href="/mortgage-broker-surrey/">mortgage broker in Surrey</a> page has the local details. If you're anywhere else in the province, nothing changes. The process is online, and the service is the same.</p>

<h2>Licence and brokerage details</h2>
<p>Resvick Mortgages is the working name of Joshua Resvick, Mortgage Broker, at Xeva Mortgage (Verico Xeva Mortgage Inc.), a member of the VERICO network. The brokerage holds BCFSA Brokerage Licence #X300203. Joshua's own mortgage broker licence number is MB503619.</p>
<p>Mortgage brokers in British Columbia are regulated by the BC Financial Services Authority. You can confirm any broker's licence, including his, in BCFSA's public Find a Mortgage Broker lookup. Joshua encourages you to do that with every professional you consider.</p>
<p>The office is #106, 2626 Croydon Drive, Surrey, BC V3Z 0S8. You can phone ${SITE.phone} or email <a href="mailto:${SITE.email}">${SITE.email}</a>. You can also use the <a href="/contact/">contact page</a>, which explains what to have ready for your first call.</p>
<p>Wondering how the money side works? The page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a> answers it plainly. On A-lender mortgages, the lender pays the broker and you pay nothing. Fees come up only on some B-lender and private files, with written disclosure first.</p>

${cta({ title: "Talk to the person who'll do the work", text: "Book a 15-minute call. You'll leave with a clear picture of your options and a concrete next step, whether or not we end up working together." })}
`;

export default {
  slug: "/about-joshua-resvick/",
  h1: "Joshua Resvick, mortgage broker in Surrey, BC",
  hero,
  crumb: "About Joshua Resvick",
  nav: "/about-joshua-resvick/",
  body,
  schema: [{
    "@context": "https://schema.org", "@type": "Person", "@id": SITE.origin + "/about-joshua-resvick/#person", name: "Joshua Resvick", jobTitle: "Mortgage Broker", identifier: { "@type": "PropertyValue", propertyID: "BCFSA Mortgage Broker Licence", value: "MB503619" },
    url: SITE.origin + "/about-joshua-resvick/", email: SITE.email, telephone: "+1-778-882-5674",
    worksFor: { "@type": "Organization", name: "Xeva Mortgage (Verico Xeva Mortgage Inc.)" },
    workLocation: { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "#106, 2626 Croydon Drive", addressLocality: "Surrey", addressRegion: "BC", postalCode: "V3Z 0S8", addressCountry: "CA" } }
  }]
};
