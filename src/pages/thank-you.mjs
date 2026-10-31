import { SITE } from "../lib/site.mjs";
// Thank-you page. One page, noindex, content switches on ?f=<form> in src/assets/js/thanks.js.
// Without JavaScript the generic block below stays visible, so the page still reads well.
const txt = `<a href="${SITE.smsHref}" data-evt="text_click">Text Josh</a>`;
const tel = `<a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>`;
const block = (id, h1, lede, steps, more) => `<section class="thx" data-thx="${id}"${id === "other" ? "" : " hidden"} data-h1="${h1}" data-lede="${lede}">
<h2>What happens next</h2>
<ol>${steps.map((s) => `<li>${s}</li>`).join("")}</ol>
${more ? `<p class="thx-more">${more}</p>` : ""}
</section>`;

const blocks = [
  block("other", "Thank you", "Your details reached Joshua. He reads and replies himself.",
    ["Joshua reads your message himself.", "He replies by email or phone, from the person who will actually work on your file.", "If anything has a deadline, phone or text so it does not wait in a queue."],
    `While you wait, the <a href="/mortgage-calculators/">mortgage calculators</a> give you rough numbers, and the <a href="/resources/">resources page</a> lists every guide.`),
  block("contact", "Thank you. Your message is in.", "Joshua reads every message himself and replies by email or phone.",
    ["Joshua reads your message and replies himself.", "He may reply with a question or two first, so he can point you the right way.", "Nothing is required of you. There is no obligation, and he will not ask for documents yet."],
    `If you want to be ready, the <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows what lenders usually ask for. Anything with a deadline, such as a closing date, is better handled by phone or text.`),
  block("apply", "Thank you. Your application summary is in.", "This was a first step, not a credit application. Joshua reads it himself.",
    ["Joshua reads your summary and gets in touch to book a short first call.", "On that call he confirms the plan and what is realistic for you.", "Then he sends a secure upload link for documents and the credit-check permission. Please do not email documents.", "After that, you get a written comparison of lender options before you decide anything."],
    `Want a head start? The <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows the usual documents. Would you rather pick the call time now? You can <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a>. Ready to go further? You can also <a href="${SITE.fullApp}" target="_blank" rel="noopener" data-evt="full_app_click">start the full application</a> in the secure portal.`),
  block("accepted-offer", "Thank you. Your accepted offer is in.", "Joshua will line up the lender in the right order, with your subject removal date in mind.",
    ["Joshua reads your contract, listing and dates, and plans the lender steps around your deadline.", "He confirms what the lender will need from you. Commonly the lender then replies within a few business days, but lenders and weeks vary.", "As conditions clear, he keeps you and your realtor up to date."],
    `If your deadline is within a few days, phone or text now so it is seen today. Meanwhile, the <a href="/closing-costs-bc/">closing costs guide</a> shows what to budget for. Still need a lawyer or notary? The <a href="/partners/">partners page</a> lists some.`),
  block("refer", "Thank you. That means a lot.", "Joshua will reach out gently, mention your name and go at their pace.",
    ["Joshua contacts the person you named, only because you said they agreed to hear from him.", "He mentions your name, so it is not a cold call.", "He goes at their pace. If they only want one question answered, that is a fine outcome."],
    `Nothing is expected of you, and no referral fee is paid. If the person wants to read first, send them the page on <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.`),
  block("renewal-reminder", "You are on the list.", "You will get two reminder emails before your mortgage matures.",
    ["One email comes six months before your maturity date.", "The second comes 120 days before it. That is when your options are widest.", "You can unsubscribe from the emails at any time."],
    `Not sure what to do at renewal? The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains your options in plain English. Lenders often send a renewal offer early. You do not have to sign it before you compare your options.`),
  block("check-up", "Thank you. Your check-up request is in.", "Joshua will look at your numbers himself.",
    ["Joshua reads your check-up and your statement numbers.", "He replies with what stands out and what to do next.", "If renewal is close, he can also show you how a switch or a refinance would compare."],
    `The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> and the <a href="/mortgage-aftercare-program/">aftercare program page</a> cover the next steps while you wait.`),
  block("quiz", "Thank you. Your result is on its way.", "Joshua will write up your result and email it to you.",
    ["Joshua reads your answers and writes up what they mean.", "He emails the write-up to the address you gave.", "If you ticked the box for a call, he will also suggest a time."],
    `A quiz score is a guide, not an approval. You can <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a> whenever you would like to talk it through.`),
  block("booking", "Your call is booked.", "Cal.com sends the confirmation to the email you used.",
    ["Check your inbox for the confirmation. It has the time and how to join.", "You do not need to prepare anything. Rough numbers are plenty, and estimates are fine.", "On the call, Joshua asks about your goal, your numbers and your timeline, then explains what is realistic."],
    `Need to change the time? Use the link in your confirmation email. If you would like to be ready, the <a href="/mortgage-application-checklist/">mortgage application checklist</a> shows what lenders usually ask for.`)
].join("\n");

const body = `
<div class="thx-note" data-thx-quiz hidden></div>
${blocks}
<div class="thx-contact" data-nocount>
<h2>Need Joshua sooner?</h2>
<p>For anything urgent, such as a closing date or a lender deadline, phone ${tel} or send a text.</p>
<p class="thx-btns"><a class="btn" href="${SITE.phoneHref}" data-evt="phone_click">Call ${SITE.phone}</a> <a class="btn btn-ghost" href="${SITE.smsHref}" data-evt="text_click">Text Josh</a></p>
<p class="small">Please do not text bank details, SIN numbers or other sensitive information. Joshua will send a secure link when documents are needed.</p>
</div>
<p><a href="/">Back to the home page</a></p>
`;

export default {
  slug: "/thank-you/",
  h1: "Thank you",
  lede: "Your details reached Joshua. He reads and replies himself.",
  crumb: "Thank you", nav: "", body, faqs: [],
  reviews: false, closing: false,
  scripts: ["/assets/js/thanks.js"],
  hero: `<div class="hero-copy"><h1 data-thx-h1>Thank you</h1><p class="lede" data-thx-lede>Your details reached Joshua. He reads and replies himself.</p></div>`
};
