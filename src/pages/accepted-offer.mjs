import { SITE, cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const BOOK45 = "https://cal.com/resvickmortgages/30min"; // cal.com "New Client Discovery Meeting", listed as 45 minutes (the slug says 30min; see notes)

const form = `
<div class="form-card urgent" data-nocount>
<form data-lead="accepted-offer" data-success="Got it. Joshua will be in touch about your file." novalidate>
<div class="row2">
<div class="fld"><label for="o-name">Your name</label><input id="o-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="o-phone">Mobile phone</label><input id="o-phone" name="phone" type="tel" autocomplete="tel" required></div>
</div>
<div class="fld"><label for="o-email">Email</label><input id="o-email" name="email" type="email" autocomplete="email" required></div>
<div class="row2">
<div class="fld"><label for="o-subjects">Subject removal date</label><input id="o-subjects" name="x_subject_removal" type="date" required><span class="hint">The date your financing condition has to be satisfied by.</span></div>
<div class="fld"><label for="o-closing">Completion (closing) date</label><input id="o-closing" name="timeline" type="date" required></div>
</div>
<div class="row2">
<div class="fld"><label for="o-price">Accepted price</label><input id="o-price" name="x_price" type="number" inputmode="numeric" min="0" step="1000" placeholder="e.g. 780000" required></div>
<div class="fld"><label for="o-down">Down payment available</label><input id="o-down" name="x_down_payment" type="number" inputmode="numeric" min="0" step="1000" placeholder="e.g. 80000" required></div>
</div>
<div class="choice"><p class="choice-q">Do you already have a pre-approval?</p>
<label><input type="radio" name="x_preapproval" value="yes_broker" id="pa-0" required><span>Yes, through a broker</span></label>
<label><input type="radio" name="x_preapproval" value="yes_bank" id="pa-1" required><span>Yes, from a bank</span></label>
<label><input type="radio" name="x_preapproval" value="no" id="pa-2" required><span>No, not yet</span></label>
</div>
<div class="fld"><label for="o-address">Property address</label><input id="o-address" name="x_property_area" type="text" required></div>
<div class="fld"><label for="o-msg">Anything else (optional)</label><textarea id="o-msg" name="message" rows="3" placeholder="Realtor's name, property type, anything unusual about the deal"></textarea></div>
<input type="hidden" name="intent" value="buyer">
<div class="hp" aria-hidden="true"><label for="o-web">Leave this field empty</label><input id="o-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<p class="small">By sending this you agree that Joshua Resvick may contact you about your file. No credit check is run from this form. See the <a href="/privacy/">privacy policy</a>.</p>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. Optional, unsubscribe any time.</span></label>
<div><button class="btn" type="submit">Send my deadline</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
<div class="done" data-done hidden>
<p><strong>Thanks. Your dates are in front of me.</strong></p>
<p>Book the 45-minute call below so we can start the file today, or phone me at <a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a> if your subject removal is in the next few days.</p>
</div>
</form>
</div>`;

const body = `

${form}

${short({ answer: "Send me three things today: the contract, the listing and your dates. I will line up the lender in the right order so you can meet your subject removal date.", who: "Anyone with an accepted offer and a financing condition. No offer yet? Start with the <a href=\"/mortgage-pre-approval-bc/\">pre-approval guide</a>.", next: "Use the form below, or phone <a href=\"tel:+17788825674\" data-evt=\"phone_click\">778.882.5674</a> if your deadline is within a few days." })}

<h2>First, breathe. Then send me three things.</h2>
<p>An accepted offer with a financing condition gives you a deadline. It is usually a week or so to get a lender's approval, and sometimes less. That's enough time if the file moves in the right order. That order starts today. Here's what I need first:</p>
<ol>
<li><strong>The contract.</strong> The accepted offer, with the subject removal date and the completion date on it. Your realtor can send it straight to me.</li>
<li><strong>The listing.</strong> The MLS sheet, or just the address. The lender needs to know what it's lending against, and so do I.</li>
<li><strong>Your dates.</strong> Use the form at the top of this page, or phone. Subject removal is the date that matters most. Completion is the second.</li>
</ol>
<p>Everything else comes later, once I've seen the deal. That means income documents and down payment statements. I'll ask for them in a set order through a secure link. If you already did a <a href="/mortgage-pre-approval-bc/">proper pre-approval</a> with me, most of that is done. The lender only needs the property side. If your pre-approval came from a bank, send it along anyway. Then I know what they checked and what they didn't.</p>

<h2>How the next week usually goes</h2>
<p>Every file is its own, so treat this as the common shape rather than a promise. Lenders differ, and a busy week at a lender can stretch any of these steps.</p>
<ol class="steps">
<li><strong>Day one</strong>Contract, listing and dates come in. I confirm the plan and match the deal to the right lender. Then I send you a secure document link with a short, specific list. If you don't have a pre-approval, the credit-check authorization and the BCFSA Form 1A disclosure happen here too, in writing.</li>
<li><strong>Days two to three</strong>The application goes to the lender. Commonly, the lender comes back within a couple of business days with an approval and a list of conditions. Sometimes that happens the same day. A complicated file or a busy week can take longer.</li>
<li><strong>Days three to five</strong>Conditions get cleared. The lender confirms income, down payment and the property, and may order an appraisal. Appraisals are the step most likely to need extra days, especially outside the Lower Mainland.</li>
<li><strong>Before subject removal</strong>You remove the financing condition only once the lender's approval is in hand. The conditions that matter must be satisfied too. If they aren't, we talk to your realtor about an extension before the deadline, not after.</li>
</ol>
<p>Between approval and completion, your lawyer or notary takes over the paperwork. The lender sends them instructions. You bring the rest of the down payment and closing costs to that appointment. The <a href="/closing-costs-bc/">closing costs page</a> has the full list. The <a href="/bc-property-transfer-tax-calculator/">property transfer tax calculator</a> gives you the biggest single number on it, including the first-time buyer exemption if you qualify. Need a name? The <a href="/partners/">partners page</a> lists a realtor, two notaries and a law firm.</p>

<h2>The things that slow a file down</h2>
<p>After ten years as a broker and five as an underwriter, I can tell you where the days get lost. It's rarely the rate. It's almost always the paperwork.</p>
<ul>
<li><strong>Down payment history.</strong> Lenders want to see where the money has been, commonly for around 90 days. A big transfer with no trail costs days. So does a gift without a letter. Line it up now.</li>
<li><strong>Income that isn't what the pre-approval assumed.</strong> Maybe a new job, a change from salary to contract, or a bonus that was counted but can't be documented. Tell me today, not when the lender asks.</li>
<li><strong>The property.</strong> Strata documents that raise questions, a suite the listing calls "unauthorized," or a rural property with a well or septic. None of these are deal-breakers. But each one changes which lender I'd choose, and I'd rather choose right the first time.</li>
<li><strong>The appraisal.</strong> If the lender wants one, it's the step neither of us controls. The earlier it's ordered, the better.</li>
<li><strong>Silence.</strong> A lender's condition sitting in an inbox for two days is the most common delay there is. During a subject period I'll be in touch at every step. I'd ask the same of you.</li>
</ul>

<h2>What a rate hold does and doesn't do here</h2>
<p>If you have a pre-approval, you probably have a rate held for a period, commonly 90 to 120 days. That's useful. If rates have gone up since, you keep the lower one. At many lenders you also get the lower rate if rates have fallen before closing. The float-down terms vary, so confirm them. What a rate hold doesn't do is approve the property. The lender still reviews the home, the price and the paperwork before it commits. The <a href="/mortgage-rate-hold/">rate hold page</a> explains the fine print. The <a href="/mortgage-application-checklist/">application checklist</a> covers the six things that most often trip a file.</p>

${callout("Already an accepted offer and no pre-approval?", "<p>It happens, and it's workable. Phone me rather than filling in the form, because the order of the next two days matters. The credit check and documents go first. The lender application goes in the same day where possible. If the subject period is tight, we'll talk to your realtor about it together.</p>")}

<h2>Book the longer call</h2>
<p>A subject period deserves more than a 15-minute chat. This is the 45-minute first-client meeting. We go through the deal, your documents and the lender choice. You leave knowing exactly what happens each day until subject removal. The calendar only loads when you ask for it, so this page stays quick on a phone.</p>
<div class="book-facade" data-nocount>
<p><strong>45-minute file review</strong></p>
<div id="book-frame-45" style="width:100%"></div>
<button class="btn" type="button" data-book-load data-book-frame="book-frame-45" data-book-url="${BOOK45}" data-book-title="Book a 45-minute file review with Joshua Resvick">Show available times</button>
<a href="${BOOK45}" data-evt="book_call_click">Or open the booking page in a new view</a>
<p class="small">If nothing suits in the next day or two, don't wait for the calendar. Phone <a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>.</p>
</div>

<h2>On fees, since you're about to spend a lot of money</h2>
<p>On a mortgage placed with a mainstream (A) lender, the lender pays me. You pay nothing for the service, including everything above. Fees only come up on some B-lender and private files. If that's ever the route, BC rules require me to disclose it in writing before you commit. The full explanation is on the page about <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>
<p>Prefer the general form to the deadline one? The <a href="/apply/">application page</a> is the same six steps without the urgency. The <a href="/contact/">contact page</a> has every other way to reach me.</p>

${cta({ title: "Deadline in the next few days?", text: "Phone first, form second. " + SITE.phone + " goes straight to me." })}
`;

export default {
  slug: "/accepted-offer/",
  h1: "I have an accepted offer. What now?",
  lede: "You've got a subject-removal deadline. Here's what to send today, how the next week usually runs, and a 45-minute call to get the file moving.",
  crumb: "Accepted offer", nav: "/first-time-home-buyer-bc/", forms: true, body,
  faqs: [
    { q: "How long does financing approval take after an accepted offer?", a: "Commonly a few business days from a complete application to a lender's approval, then a few more to clear conditions such as income verification and an appraisal. Lenders and weeks vary. The file moves fastest when the contract, the listing and your documents arrive on day one, which is why this page asks for them first." },
    { q: "My subject removal is in three days. Is that enough?", a: "Often, yes, if everything is ready and the property is straightforward, and it is tighter if an appraisal is needed. Phone rather than using the form. If the lender cannot commit in time, the right move is to ask your realtor about an extension before the deadline, not to remove the condition on hope." },
    { q: "I was pre-approved by my bank. Do I still need you?", a: "A bank pre-approval is that bank's view of you, not an approval of this property, and it is one lender's pricing. Send it along. I will compare it with other lenders on the actual deal, and if the bank is the best fit, I will say so. On A-lender files the lender pays the broker, so the comparison costs you nothing." },
    { q: "What do I bring to the lawyer or notary?", a: "Government ID, the balance of your down payment and closing costs as a bank draft or wire, and proof of home insurance in place for the completion date. Your lawyer sends you the exact figure a few days before. The closing costs page lists what makes up that number, including property transfer tax." },
    { q: "Does using the form run a credit check?", a: "No. The form only sends me your dates and the deal basics. The credit-check authorization and the Form 1A disclosure happen in a secure step, in writing, once we have spoken and agreed to proceed. Nothing is pulled on your credit from a web form." }
  ]
};
