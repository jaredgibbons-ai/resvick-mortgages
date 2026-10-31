import { SITE, cta } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

import fs from "node:fs";
const photo = fs.existsSync("src/assets/img/josh-contact.webp")
  ? `<div class="arch"><img src="/assets/img/josh-contact-720.webp" srcset="/assets/img/josh-contact-720.webp 720w, /assets/img/josh-contact-1080.webp 1080w" sizes="(max-width: 720px) 86vw, 360px" width="720" height="1080" alt="Joshua Resvick at his desk" fetchpriority="high"></div>`
  : "";
const hero = `<div class="hero-copy"><h1>Contact a mortgage broker in Surrey, BC</h1>
<p class="lede">The fastest way to start is a 15-minute call with me. Pick a time, phone, or send a message. Either way, you're dealing with me directly.</p></div>${photo}`;

const body = `
${short({ answer: "Book a free 15-minute call, phone 778.882.5674, or send a note below. You'll deal with me directly.", who: "Anyone in BC who is buying, renewing, refinancing or just has a mortgage question.", next: `Pick a time in the <a href="${SITE.book}">booking calendar</a>. You don't need any documents yet.` })}
<h2>Book a 15-minute call</h2>
<p>The call is where a mortgage plan starts. I'll ask about your goals and your numbers, tell you what's realistic, and explain the next step. There's no obligation, and you don't need to prepare anything. Just pick a time that suits you in the calendar below. It's my own booking page, so what you see is what I've actually got open.</p>
<div class="book-facade" data-nocount>
<p><strong>Choose a time</strong></p>
<p class="small">The calendar only loads when you ask for it, so this page stays quick on a phone.</p>
<div id="book-frame" style="width:100%"></div>
<button class="btn" type="button" data-book-load>Show available times</button>
<a href="${SITE.book}" data-evt="book_call_click">Or open the booking page in a new view</a>
</div>

<h2>Phone, email and office</h2>
<div class="contact-grid">
<div><strong>Phone</strong><a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a><br>Best for anything time-sensitive.</div>
<div><strong>Email</strong><a href="mailto:${SITE.email}">${SITE.email}</a><br>Best for questions that are not urgent.</div>
<div><strong>Office</strong>#106, 2626 Croydon Drive<br>Surrey, BC V3Z 0S8<br>Xeva Mortgage head office</div>
</div>
<p>I'm a licensed mortgage broker with Xeva Mortgage (Verico Xeva Mortgage Inc.). The brokerage holds BCFSA Brokerage Licence #X300203, and my individual broker licence is MB503619. There's more about me on the <a href="/about-joshua-resvick/">About page</a>.</p>

<h2>What happens on the call</h2>
<p>Fifteen minutes goes quickly, so I keep the call to a simple agenda.</p>
<ol>
<li><strong>Your goal.</strong> Are you buying, renewing, refinancing or investing, and what are you actually trying to achieve? The best mortgage depends on the plan, so the plan comes first.</li>
<li><strong>Your numbers.</strong> A rough picture is plenty: household income, the debts you pay each month, your down payment or home equity, and a target timeline. Estimates are fine. I'll tell you which ones matter most.</li>
<li><strong>What's realistic.</strong> I'll explain where you stand, which lender types fit, and what could change the result. If something in the plan won't work, you'll hear it now, along with the alternatives.</li>
<li><strong>The next step.</strong> That might be a pre-approval, a written lender comparison, a renewal timeline, or just a date to talk again. Nothing's required of you at the end of the call.</li>
</ol>
<p>One thing I'll say up front: nobody has ever wasted my time with a question that felt too basic. If you're not sure whether your situation even counts as a mortgage question, that's exactly the kind of thing the call is for.</p>
<p>If you'd like a number before you call, the <a href="/mortgage-calculators/#affordability">affordability calculator</a> gives you an estimate of what your income might support. It's an estimate, not an approval, and we'll refine it together.</p>

<h2>What to have ready</h2>
<p>You can book the call with nothing in hand. When it's time to build an application, the documents depend on how you earn your income. These lists are a general guide. Lenders sometimes ask for more.</p>
<ul>
<li><strong>Employed, salary or hourly:</strong> recent pay stubs, a letter of employment, and recent tax documents from the Canada Revenue Agency (CRA).</li>
<li><strong>Self-employed:</strong> several years of personal tax returns with notices of assessment, and business financial statements. Which documents work best depends on the lender, and sorting that out is part of what the first call is for. See the <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a>.</li>
<li><strong>Down payment:</strong> statements showing where the money has been, since lenders usually look at its history. Gifted funds need a gift letter.</li>
<li><strong>Renewal:</strong> your most recent mortgage statement and your renewal letter, along with your maturity date. The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> explains what to do with them.</li>
<li><strong>Buyers:</strong> a rough timeline, a sense of the price range, and the date you'd like to close. The <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> covers the sequence.</li>
</ul>
<p>The <a href="/mortgage-application-checklist/">mortgage application checklist</a> goes further, with the six problems that most often sink applications and a self-check for each.</p>

<h2>Send a message</h2>
<p>If you'd rather write than talk, use the form. I read every message myself and reply by email or phone. For anything urgent, like a closing date or a lender deadline, just phone ${SITE.phone}.</p>
<div class="form-card">
<p class="small"><strong>Please don't send financial documents through this form.</strong> It doesn't accept attachments. When it's time for documents, I'll send you a secure upload link.</p>
<form data-lead="contact" novalidate>
<div class="row2">
<div class="fld"><label for="c-name">Your name</label><input id="c-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="c-email">Email</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
</div>
<div class="row2">
<div class="fld"><label for="c-phone">Phone (optional)</label><input id="c-phone" name="phone" type="tel" autocomplete="tel"></div>
<div class="fld"><label for="c-intent">What is this about?</label><select id="c-intent" name="intent"><option value="buyer">Buying a home</option><option value="renewal">Renewing my mortgage</option><option value="refinance">Refinancing</option><option value="investor">Investment property</option><option value="self-employed">Self-employed mortgage</option><option value="distress">Struggling with payments</option><option value="other" selected>Something else</option></select></div>
</div>
<div class="fld"><label for="c-timeline">Target closing date or mortgage maturity date (optional)</label><input id="c-timeline" name="timeline" type="text" placeholder="For example, March 2027"></div>
<div class="fld"><label for="c-msg">Your message</label><textarea id="c-msg" name="message"></textarea></div>
<div class="hp" aria-hidden="true"><label for="c-web">Leave this field empty</label><input id="c-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<p class="small">By sending this message you agree that Joshua Resvick may contact you to reply to it. See the <a href="/privacy/">privacy policy</a>.</p>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. This is optional, and you can unsubscribe at any time.</span></label>
<div><button class="btn" type="submit">Send message</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
</form>
</div>

<h2>Questions people bring to a first call</h2>
<p>You don't need a polished question to start. Here are the kinds of things people open with. Every one is a good reason to get in touch.</p>
<ul>
<li>I'd like to buy in the next year. How much do I need to save, and what can I afford?</li>
<li>My mortgage renews in a few months and I've got a letter from my lender. Is it a good offer?</li>
<li>I'm self-employed and a bank turned me down. Is there another route?</li>
<li>I want to use the equity in my home for a renovation, to consolidate debt or to buy a rental. What are the options and what would they cost?</li>
<li>I'm selling and buying at the same time. How do I avoid paying a penalty, or ending up without a home between closing dates?</li>
<li>I'm behind on payments, or worried I soon will be. What can I do before it gets worse?</li>
</ul>
<p>That last one deserves a note of its own. If you're struggling with payments, reach out early, and by phone if you can. There are almost always more options at the beginning of a problem than at the end, and I won't pressure you. I'll explain the choices plainly and let you decide.</p>

<h2>Who I work with</h2>
<p>I work with clients across all of British Columbia. Everything can be done online and by phone. So it doesn't matter where you live: Metro Vancouver, the Okanagan, the Island, up North or anywhere in between. My office is in Surrey, and you're welcome to meet there if it's convenient, but you never need to. Applications, documents and signatures can all be handled remotely.</p>
<p>I also help with renewals on mortgages that were arranged somewhere else. If your mortgage is with a bank or another broker, you can still ask me what your options are before your maturity date. The <a href="/mortgage-aftercare-program/">aftercare program</a> page explains how ongoing support works for my clients.</p>

${cta({ title: "Ready when you are", text: "Book the 15-minute call and bring your questions. If picking up the phone is easier, I'm at " + SITE.phone + "." })}
`;

export default {
  slug: "/contact/",
  h1: "Contact a mortgage broker in Surrey, BC",
  hero, crumb: "Contact", nav: "/contact/", forms: true, body,
  faqs: [
    { q: "How quickly will Joshua reply?", a: "I read and answer messages myself, so the reply comes from the person who'll actually work on your file. For anything with a deadline, like a closing date or a lender cutoff, phone " + SITE.phone + " rather than waiting on email. Mention the deadline in your message and I'll bump it up the list." },
    { q: "Can I speak with Joshua in the evening?", a: "The booking calendar shows the times I've got open, and it's the most reliable guide. If none of them suit your schedule, send an email or a message with a couple of times that work for you, and I'll reply with what's possible." },
    { q: "Is the call really without obligation?", a: "Yes, really. The 15-minute call is for understanding your situation and explaining your options. You're not asked to commit to anything, and on mainstream (A-lender) mortgages the lender pays the broker, so you pay nothing for the service. See <a href=\"/how-mortgage-brokers-get-paid/\">how brokers get paid</a>." },
    { q: "Do I need documents before I book?", a: "No. Bring your questions and a rough idea of your income, debts, savings and timeline. Documents come later, once you decide to go ahead, and I'll tell you exactly which ones you need and send a secure upload link so you can share them safely." }
  ]
};
