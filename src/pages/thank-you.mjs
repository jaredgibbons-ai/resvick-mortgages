import { SITE } from "../lib/site.mjs";
// Thank-you page. One page, noindex, content switches on ?f=<form> in src/assets/js/thanks.js.
// Without JavaScript the generic block below stays visible, so the page still reads well.
const txt = `<a href="${SITE.smsHref}" data-evt="text_click">Text me</a>`;
const tel = `<a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>`;
const block = (id, h1, lede, steps, more) => `<section class="thx" data-thx="${id}"${id === "other" ? "" : " hidden"} data-h1="${h1}" data-lede="${lede}">
<h2>What happens next</h2>
<ol>${steps.map((s) => `<li>${s}</li>`).join("")}</ol>
${more ? `<p class="thx-more">${more}</p>` : ""}
</section>`;

const blocks = [
  block("other", "Thank you", "Got your details. I read every message myself and reply by email or phone.",
    ["I read your message myself.", "I'll reply by email or phone, so you hear from the person who'll work on your file.", "If anything has a deadline, phone or text me so it doesn't sit."],
    `While you wait, the <a href="/mortgage-calculators/">mortgage calculators</a> give you rough numbers, and the <a href="/resources/">resources page</a> lists every guide.`),
  block("contact", "Thank you. Your message is in.", "I read every message myself and reply by email or phone.",
    ["I'll read your message and reply myself.", "I may ask a question or two first, so I can point you the right way.", "Nothing is required of you. There's no obligation, and I won't ask for documents yet."],
    `If you want to be ready, the <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows what lenders usually ask for. Anything with a deadline, like a closing date, is better handled by phone or text.`),
  block("callback", "Thank you. I'll call you back.", "Got your name and number. I'll phone around the time you picked.",
    ["I'll call the number you gave, around the time you chose.", "If I miss you, I'll leave a short message and try once more.", "Nothing is required of you. There's no obligation, and I won't ask for documents on the first call."],
    `Rather pick the exact time yourself? You can <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a>. If anything has a deadline, phone or text so it doesn't wait.`),
  block("apply", "Thank you. Your application summary is in.", "This was a first step, not a credit application. I read it myself.",
    ["I'll read your summary and get in touch to book a short first call.", "On that call I'll confirm the plan and what's realistic for you.", "Then I'll send a secure upload link for documents and the credit-check permission. Please don't email documents.", "After that, you get a written comparison of lender options before you decide anything."],
    `Want a head start? The <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows the usual documents. Rather pick the call time now? You can <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a>. Ready to go further? You can also <a href="${SITE.fullApp}" target="_blank" rel="noopener" data-evt="full_app_click">start the full application</a> in the secure portal.`),
  block("accepted-offer", "Thank you. Your accepted offer is in.", "I'll line up the lender in the right order, with your subject removal date in mind.",
    ["I'll read your contract, listing and dates, and plan the lender steps around your deadline.", "I'll confirm what the lender needs from you. Lenders commonly reply within a few business days, but lenders and weeks vary.", "As conditions clear, I'll keep you and your realtor up to date."],
    `If your deadline is within a few days, phone or text now so I see it today. Meanwhile, the <a href="/closing-costs-bc/">closing costs guide</a> shows what to budget for. Still need a lawyer or notary? The <a href="/partners/">partners page</a> lists some.`),
  block("refer", "Thank you. That means a lot.", "I'll keep it low-key, mention your name and go at their pace.",
    ["I'll contact the person you named, only because you said they agreed to hear from me.", "I'll mention your name, so it isn't a cold call.", "I'll go at their pace. If they only want one question answered, that's a fine outcome."],
    `Nothing is expected of you, and no referral fee is paid. If they'd like to read first, send them the page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.`),
  block("renewal-reminder", "You're on the list.", "You'll get two reminder emails before your mortgage matures.",
    ["One email comes six months before your maturity date.", "The second comes 120 days before it. That's when your options are widest.", "You can unsubscribe at any time."],
    `Not sure what to do at renewal? The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains your options in plain English. Lenders often send a renewal offer early, and you don't have to sign it before you compare your options.`),
  block("check-up", "Thank you. Your check-up request is in.", "I'll look at your numbers myself.",
    ["I'll read your check-up and your statement numbers.", "I'll reply with what stands out and what to do next.", "If renewal is close, I can also show you how a switch or a refinance would compare."],
    `The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> and the <a href="/mortgage-aftercare-program/">aftercare program page</a> cover the next steps while you wait.`),
  block("quiz", "Thank you. I'll send your written result by email.", "I'll write up your result and email it to you.",
    ["I'll read your answers and write up what they mean.", "I'll email the write-up to the address you gave.", "If you ticked the box for a call, I'll suggest a time too."],
    `A quiz score is a guide, not an approval. You can <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a> whenever you'd like to talk it through.`),
  block("booking", "Your call is booked.", "Cal.com sends the confirmation to the email you used.",
    ["Check your inbox for the confirmation. It has the time and how to join.", "You don't need to prepare anything. Rough numbers are plenty.", "On the call, I'll ask about your goal, your numbers and your timeline, then tell you what's realistic."],
    `Need to change the time? Use the link in your confirmation email. If you'd like to be ready, the <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows what lenders usually ask for.`)
].join("\n");

const body = `
<div class="thx-note" data-thx-quiz hidden></div>
${blocks}
<div class="thx-contact" data-nocount>
<h2>Need me sooner?</h2>
<p>For anything urgent, like a closing date or a lender deadline, phone ${tel} or send a text.</p>
<p class="thx-btns"><a class="btn" href="${SITE.phoneHref}" data-evt="phone_click">Call ${SITE.phone}</a> <a class="btn btn-ghost" href="${SITE.smsHref}" data-evt="text_click">Text me</a></p>
<p class="small">Please don't text me bank details, SIN numbers or other sensitive information. I'll send a secure link when I need documents.</p>
</div>
<p><a href="/">Back to the home page</a></p>
`;

export default {
  slug: "/thank-you/",
  h1: "Thank you",
  lede: "Got your details. I read every message myself and reply by email or phone.",
  crumb: "Thank you", nav: "", body, faqs: [],
  reviews: false, closing: false,
  scripts: ["/assets/js/thanks.js"],
  hero: `<div class="hero-copy"><h1 data-thx-h1>Thank you</h1><p class="lede" data-thx-lede>Got your details. I read every message myself and reply by email or phone.</p></div>`
};
