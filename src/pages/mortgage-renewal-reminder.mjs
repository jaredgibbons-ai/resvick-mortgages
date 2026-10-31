import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Set your reminder</h2>
<div class="form-card">
<p class="small"><strong>Please do not send financial documents through this form.</strong> It does not accept attachments. If documents are needed later, Joshua will send you a secure upload link.</p>
<form data-lead="renewal-reminder" novalidate>
<input type="hidden" name="intent" value="renewal">
<div class="row2">
<div class="fld"><label for="r-name">Your name</label><input id="r-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="r-email">Email</label><input id="r-email" name="email" type="email" autocomplete="email" required></div>
</div>
<div class="row2">
<div class="fld"><label for="r-timeline">Mortgage maturity month and year</label><input id="r-timeline" name="timeline" type="text" placeholder="For example, March 2027" required><span class="hint">Your renewal letter or mortgage statement shows it. A best guess is fine.</span></div>
<div class="fld"><label for="r-lender">Current lender (optional)</label><input id="r-lender" name="current_lender" type="text"></div>
</div>
<div class="hp" aria-hidden="true"><label for="r-web">Leave this field empty</label><input id="r-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="consent_reminders" required><span>Send me two reminder emails: six months and 120 days before my maturity date.</span></label>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. This is optional, and you can unsubscribe at any time.</span></label>
<p class="small">The first box is needed to send the reminders. See the <a href="/privacy/">privacy policy</a>.</p>
<div><button class="btn" type="submit">Set my reminder</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
</form>
</div>

${short({ answer: "Tell Joshua when your mortgage matures, and you'll get two emails: one at six months and one at 120 days before. That's when your options are widest. It's free, and it works no matter who holds your mortgage.", who: "Any BC homeowner whose renewal is more than a few months away.", next: "Fill in the short form below. Not sure of your date? Check your latest mortgage statement." })}

<h2>Why a reminder is worth setting</h2>
<p>A mortgage renewal is a deadline that only comes around every few years. That's exactly why people miss the best window for it. Most borrowers hear about their renewal when a letter shows up, and by then the useful time to compare options may be mostly gone. The reminder on this page is a simple fix. Tell Joshua when your mortgage matures. You'll get two emails at the points when your choices are widest.</p>
<p>It is free, it carries no obligation, and it works whether your mortgage is with a bank, a credit union or another broker. You do not need to be a client. Joshua Resvick is a BC mortgage broker. He has ten years as a broker, five as an underwriter before that, and over 1,000 mortgages funded. He built this because timing is where most renewal money is won or lost.</p>

<h2>Why timing is money</h2>
<p>There are two clocks in every renewal. The first is the 120-day window. Most lenders will hold a rate for roughly 120 days, so that is when you can start comparing offers without being rushed. A broker can request quotes, hold a rate and keep your options open while you decide. Waiting until the last few weeks removes most of that room.</p>
<p>The second is the renewal statement. Your lender must send it at least 21 days before your maturity date. That's often when people first start thinking about the renewal. Three weeks is not long enough to compare lenders carefully, and the letter itself is only one lender's offer. The page on <a href="/mortgage-renewal-letter-explained/">your mortgage renewal letter, explained</a> shows what to check when it arrives.</p>
<p>The Bank of Canada (2025) estimated that about 60 percent of all outstanding mortgages renew in 2025 or 2026. About 60 percent of those borrowers face a higher payment. For anyone in that group, a few weeks of preparation can matter. The full set of options is on the <a href="/mortgage-renewal-bc/">mortgage renewal hub</a>.</p>

<h2>The auto-renewal trap</h2>
<p>If a mortgage reaches its maturity date and nothing has been signed, the lender typically rolls it into an open term. Open terms let you repay freely, and lenders price that flexibility high, so the rate is usually much higher than a negotiated renewal. It isn't a penalty, and it isn't anyone's fault. But it can cost a household money until the paperwork gets sorted. The page on <a href="/open-vs-closed-mortgage/">open versus closed mortgages</a> explains the difference and why the default is what it is.</p>
<p>A reminder at six months and again at 120 days is designed to make sure the maturity date never sneaks up on you.</p>

<h2>How the reminder works</h2>
<ol>
<li><strong>You tell us your maturity month and year.</strong> You do not need the exact day. Month and year are enough, because the emails are scheduled from them.</li>
<li><strong>Email one arrives about six months before maturity.</strong> At this point your options are widest. It explains what to gather and what you can start doing now.</li>
<li><strong>Email two arrives about 120 days before maturity.</strong> This is the usual rate-hold window. It explains how to start comparing and when to ask for a hold.</li>
<li><strong>You decide what happens next.</strong> The reminders are information, not a sales sequence. You can book a call, forward your letter or do nothing at all.</li>
</ol>
<p>The two sends are scheduled in Pacific time (America/Vancouver). Each email carries an unsubscribe link, so you can stop at any time. If you tick the optional box for rate updates, you'll also get occasional Bank of Canada notes and mortgage tips. That's separate from the two reminders.</p>

<h2>What happens after you sign up</h2>
<p>Nothing is required of you. The reminders arrive on schedule, and each one ends with the same invitation: if you would like help, you can book a short call. If you do, Joshua will look at your maturity date, balance and goals. He'll explain what a switch or a negotiation could look like. He can also prepare a written comparison of lender options if you'd like one.</p>
<p>For clients, renewal planning is part of Joshua's <a href="/mortgage-aftercare-program/">aftercare program</a>. It includes a yearly review, an eye on your renewal window and a call about six months before maturity. The reminder gives people whose mortgage is arranged elsewhere a way to benefit from the same timing. If your maturity date is closer than six months, the <a href="/early-mortgage-renewal/">early renewal guide</a> explains what you can do now.</p>

<h2>A note on your information</h2>
<p>Your details are used to send the reminders you asked for and, if you ticked the optional box, rate updates and tips. They are held in the brokerage's records, they are not sold, and they are not shared outside normal brokerage operations. Marketing consent is separate from the reminder, and an unsubscribe stops all marketing messages. If you have a question about your information or want it removed, write to Joshua through the <a href="/contact/">contact page</a>.</p>

${cta({ title: "Would rather talk it through now?", text: "Book a 15-minute call. Bring your maturity date, and Joshua will show you what your options look like and when to act." })}

${callout("Not sure of your maturity date?", "<p>Look at your latest mortgage statement, your renewal letter or your lender's online account. If you cannot find it, give your best estimate. You can correct it later, and a quick call can sort it out.</p>")}
`;

export default {
  slug: "/mortgage-renewal-reminder/",
  h1: "Free mortgage renewal reminder: never get auto-renewed again",
  lede: "Tell us your maturity month and year. You receive two emails, six months and 120 days out, when your options are widest. Free, no obligation, unsubscribe anytime.",
  crumb: "Mortgage renewal reminder", nav: "/mortgage-renewal-bc/", forms: true, body,
  faqs: [
    { q: "Is the renewal reminder really free?", a: "Yes. It costs nothing, carries no obligation and does not require you to be a client. You receive two emails, six months and 120 days before your maturity date, and each has an unsubscribe link. Joshua may invite you to book a call, but you decide whether to." },
    { q: "Does my mortgage need to be arranged by Joshua?", a: "No. The reminder works whatever lender holds your mortgage, whether a bank, a credit union or another broker. You only need your maturity month and year. If you would like help comparing options later, you can book a call at any point." },
    { q: "What do I need to know to sign up?", a: "Your name, an email address and the month and year your mortgage matures. You can find the date on your mortgage statement or renewal letter, and a best guess is fine. Your current lender is optional, and no financial documents should be sent through the form." },
    { q: "What are the two emails?", a: "The first arrives about six months before maturity, when your options are widest, and explains what to gather. The second arrives about 120 days before, the usual rate-hold window, and explains how to start comparing. Both are scheduled in Pacific time, and each can be unsubscribed from." },
    { q: "Can I stop the emails?", a: "Yes, at any time. Every message has a one-click unsubscribe link. Unsubscribing from marketing stops all marketing messages, and you can ask Joshua to remove your details through the contact page. The reminder is a convenience, so nothing about it can lock you in." }
  ]
};
