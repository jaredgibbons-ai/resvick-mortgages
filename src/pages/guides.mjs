import { SITE, cta, callout, esc } from "../lib/site.mjs";
import { loadPosts, SERIES, fmtDate } from "../lib/posts.mjs";
import { short } from "../lib/short.mjs";

const posts = await loadPosts();
const list = (series) => {
  const items = posts.filter((p) => p.series === series && !p.noindex);
  if (!items.length) return `<p class="small">The first posts in this series are on the way.</p>`;
  return `<ul class="post-list" data-nocount>${items.map((p) => `<li><a href="${p.slug}">${esc(p.h1)}${/[.?!]$/.test(p.h1) ? "" : "."}</a> <span class="when">Published ${fmtDate(p.date)}${p.updated && p.updated !== p.date ? `, updated ${fmtDate(p.updated)}` : ""}.</span> <p>${esc(p.lede)}</p></li>`).join("\n")}</ul>`;
};

const body = `
${short({
  answer: "This is the dated part of the site: Bank of Canada decisions explained the same day, rule changes explained first, and real client questions answered in depth.",
  who: "Anyone who wants to know what changed, when, and what it means for their mortgage.",
  next: "Pick a series below. For the current rules, use the <a href=\"/resources/\">resource library</a> instead."
})}
<h2>What this section is, and why dates live here</h2>
<p>The rest of this site is written to stay true. It covers things like how a stress test works, what a renewal letter means and how a lender counts suite income. Those pages skip dates and market numbers on purpose. A figure that was right one month is wrong the next, and a page that quotes it ages badly.</p>
<p>This section is the opposite. Everything here is dated, and the date is part of the information.</p>
<p>A Bank of Canada post is about one announcement on one day. A rule-change post is about one change, with its start date and its source. When a newer post replaces an old one, the old one stays as a record. The new one links back to it.</p>
<p>Joshua Resvick writes these the way he explains things on a call. What changed? Who does it affect? What should you do, and what can you ignore? There are no predictions and no sales pitches. If a post makes you want a number for your own situation, the <a href="/contact/">contact page</a> is the next step. A 15-minute call is free.</p>

<h2>${esc(SERIES.boc.label)}</h2>
<p>Each one is explained the same day.</p>
<p>${esc(SERIES.boc.blurb)}</p>
<p>The Bank of Canada sets its policy rate on eight fixed dates a year. Each decision moves the prime rate. Variable-rate mortgages and lines of credit follow prime.</p>
<p>Decisions also shape the bond yields that fixed rates are priced from, though not directly or right away. Each post covers one decision. What did the Bank say? What does it mean for a variable payment? What about anyone renewing in the next year? Is anything worth doing?</p>
<p>Do you have a variable rate or a renewal coming? The <a href="/mortgage-aftercare-program/">aftercare program</a> sends clients the same note the day it happens.</p>
${list("boc")}

<h2>${esc(SERIES.rules.label)}</h2>
<p>These posts record each change as it happens.</p>
<p>${esc(SERIES.rules.blurb)}</p>
<p>Mortgage rules in Canada come from several places at once. OSFI sets rules for federally regulated lenders. The Department of Finance sets them for insured mortgages and the stress test. CMHC and the private insurers set program terms. The Province sets the transfer tax and suite rules. The CRA runs the tax programs first-time buyers stack together.</p>
<p>A change in any of them can change what you qualify for. These posts explain each change in full. Then they point to the guide that carries the current rule.</p>
<p>The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> is the model. The rule lives there. The post here records when and how it arrived.</p>
${list("rules")}

<h2>${esc(SERIES.questions.label)}</h2>
<p>${esc(SERIES.questions.blurb)}</p>
<p>Most of these started as a question on a first call, or an email at ten at night. The short answer is usually on the matching guide already. These posts give the longer answer. That includes the exceptions, how lenders differ and the follow-up question people ask next.</p>
<p>They link to the <a href="/mortgage-calculators/">calculators</a> wherever a number helps. They also link to the hub for each situation, like <a href="/first-time-home-buyer-bc/">first-time buyers</a>, <a href="/mortgage-renewal-bc/">renewals</a> or <a href="/refinance-mortgage-bc/">refinancing</a>.</p>
${list("questions")}

<h2>How to use these posts with the rest of the site</h2>
<p>Read the post for the event. Read the guide for the rule.</p>
<p>A Bank of Canada post tells you what happened on the day. The <a href="/variable-rate-mortgage/">variable rate mortgage guide</a> tells you how a variable mortgage behaves in general, including trigger rates and conversion rights.</p>
<p>A rule-change post might tell you the secondary suite refinance program opened on a set date. The <a href="/secondary-suite-refinance/">secondary suite refinance guide</a> carries the current terms and the eligibility checker.</p>
<p>The two kinds of page are kept apart so each can do its job. The post can be specific and dated. The guide can stay accurate without a rewrite every month.</p>
<p>Want a heads-up when it matters to you? Sign up on the <a href="/mortgage-renewal-reminder/">free renewal reminder page</a>. Joshua will reach out six months and 120 days before your maturity date. That's when the decisions in this section start to affect you directly.</p>
<p>For the Bank of Canada series itself, just bookmark this page. The decision dates are published a year ahead, and each post goes up on the day.</p>

${callout("What you will not find here", "<p>No rate predictions, market forecasts, lender rankings or anything written to rush you. The Bank's own statements are quoted. Rule changes link to their official sources. And the posts say plainly when something is uncertain or depends on your lender.</p>")}

${cta({ title: "A question these posts do not answer?", text: "Send it. The next question post usually comes from a real conversation. A 15-minute call is the quickest way to get your own answer in the meantime." })}
`;

export default {
  slug: "/guides/",
  h1: "Guides: Bank of Canada decisions, rule changes and client questions",
  lede: "The dated side of the site. Rate announcements explained the same day, mortgage rule changes explained first, and the questions clients ask, answered at full depth.",
  crumb: "Guides", nav: "/guides/", body,
  faqs: [
    { q: "How often are these posts published?", a: "The Bank of Canada series follows the Bank's eight fixed announcement dates a year, with a post on each decision day. Rule-change posts appear when a regulator, insurer or government changes something that affects BC borrowers. Question posts are published as the questions come up, with no fixed schedule, so the index is the place to check." },
    { q: "Are the figures in these posts kept up to date?", a: "No, and that is deliberate. Each post is a record of what was true on its date, and the date is shown at the top. The evergreen guide pages are the ones kept current, and every post links to the guide that carries the current rule, so you can read the history here and the present state there." },
    { q: "Do these posts predict where rates are going?", a: "They do not. A post explains what the Bank of Canada decided and what that means for the mortgages people already hold or are about to renew. Forecasting is a different job, and getting it wrong in writing is a way to mislead people, so the posts stick to what was announced and what it changes." },
    { q: "Can I ask a question to be answered in the series?", a: "Yes. Most of the questions series comes from real conversations with clients and readers. Use the contact page to send yours. If it is urgent, a 15-minute call gets you an answer for your own file straight away, which is faster than waiting for a post." }
  ]
};
