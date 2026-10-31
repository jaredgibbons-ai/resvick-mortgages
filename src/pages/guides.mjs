import { SITE, cta, callout, esc } from "../lib/site.mjs";
import { loadPosts, SERIES, fmtDate } from "../lib/posts.mjs";

const posts = await loadPosts();
const list = (series) => {
  const items = posts.filter((p) => p.series === series && !p.noindex);
  if (!items.length) return `<p class="small">The first posts in this series are on the way.</p>`;
  return `<ul class="post-list" data-nocount>${items.map((p) => `<li><a href="${p.slug}">${esc(p.h1)}</a><span class="when">${fmtDate(p.date)}${p.updated && p.updated !== p.date ? `, updated ${fmtDate(p.updated)}` : ""}</span><p>${esc(p.lede)}</p></li>`).join("")}</ul>`;
};

const body = `
<h2>What this section is, and why dates live here</h2>
<p>The rest of this site is written to stay true: how a stress test works, what a renewal letter means, how a lender counts suite income. Those pages avoid dates and market numbers on purpose, because a figure that was right in one month is wrong in the next, and a page that quotes it ages badly. This section is the opposite. Everything here is dated, and the date is part of the information. A Bank of Canada post is about one announcement on one day. A rule-change post is about one change, with its effective date and its source. When a post here is superseded, it stays as a record and the newer post links back to it.</p>
<p>Joshua Resvick writes these the way he explains things on a call: what changed, who it affects, what to do about it and what not to worry about. There are no predictions and no sales pitches. If a post makes you want a number for your own situation, the <a href="/contact/">contact page</a> is the next step, and a 15-minute call is free.</p>

<h2>${esc(SERIES.boc.label)}</h2>
<p>${esc(SERIES.boc.blurb)} The Bank of Canada sets its policy rate on eight fixed dates a year. Each decision moves the prime rate that variable-rate mortgages and lines of credit follow, and it shapes the bond yields that fixed rates are priced from, though not directly or immediately. Each post in this series covers one decision: what the Bank said, what it means for a variable-rate payment, what it means for anyone renewing in the next twelve months, and what, if anything, is worth doing. If you hold a variable rate or have a renewal coming, the <a href="/mortgage-aftercare-program/">aftercare program</a> sends the same note to clients the day it happens.</p>
${list("boc")}

<h2>${esc(SERIES.rules.label)}</h2>
<p>${esc(SERIES.rules.blurb)} Mortgage rules in Canada come from several places at once: OSFI for federally regulated lenders, the Department of Finance for insured mortgages and the stress-test framework, CMHC and the private insurers for program terms, the Province for the property transfer tax and the suite rules, and the CRA for the tax programs first-time buyers stack together. A change in any of them can alter what you qualify for. These posts explain each change at full depth and point to the evergreen page that carries the current rule. The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> is the model: the rule lives there, and the post here records when and how it arrived.</p>
${list("rules")}

<h2>${esc(SERIES.questions.label)}</h2>
<p>${esc(SERIES.questions.blurb)} Most of these started as a question on a first call or an email at ten at night. The short answer is usually on the relevant guide page already; these posts are for the longer answer, the one that includes the exceptions, the lender-by-lender differences and the follow-up question people ask next. They link into the <a href="/mortgage-calculators/">calculators</a> wherever a number helps, and into the hub page for whichever situation the question belongs to, such as <a href="/first-time-home-buyer-bc/">first-time buyers</a>, <a href="/mortgage-renewal-bc/">renewals</a> or <a href="/refinance-mortgage-bc/">refinancing</a>.</p>
${list("questions")}

<h2>How to use these posts with the rest of the site</h2>
<p>Read the post for the event, then the guide for the rule. A Bank of Canada post tells you what happened on the day; the <a href="/variable-rate-mortgage/">variable rate mortgage guide</a> tells you how a variable mortgage behaves in general, including trigger rates and conversion rights. A rule-change post tells you that the secondary suite refinance program opened on a particular date; the <a href="/secondary-suite-refinance/">secondary suite refinance guide</a> carries the program's current terms and the eligibility checker. The two kinds of page are kept separate so that each can do its job: the post can be specific and dated, and the guide can stay accurate without a rewrite every month.</p>
<p>If you want to be told when a post is published, the renewal reminder covers one of the two triggers. Sign up on the <a href="/mortgage-renewal-reminder/">free renewal reminder page</a> and you will hear from Joshua at six months and at 120 days before your maturity date, which is when the rate decisions in this section start to matter for you personally. For the Bank of Canada series itself, the simplest route is to bookmark this page; the decision dates are published a year ahead and each post goes up on the day.</p>

${callout("What you will not find here", "<p>Rate predictions, market forecasts, lender rankings or anything written to create urgency. The Bank's own statements are quoted, the rule changes are linked to their official sources, and the posts say plainly when something is uncertain or depends on your lender.</p>")}

${cta({ title: "A question these posts do not answer?", text: "Send it. The next post in the questions series usually comes from a real conversation, and a 15-minute call is the quickest way to get your own answer in the meantime." })}
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
