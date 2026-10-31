import { SITE, cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

// Radio group helper: name is x_<key> so the answer travels in `extra` (see forms.js / lead.js).
const choice = (key, q, opts, extra = "") => `<div class="choice${opts.length > 3 ? " cols" : ""}"${extra}><p class="choice-q" id="q-${key}">${q}</p>${opts.map(([v, l, s], i) => `<label><input type="radio" name="x_${key}" value="${v}" id="${key}-${i}" ${extra ? "data-required" : "required"}><span>${l}${s ? `<small>${s}</small>` : ""}</span></label>`).join("")}</div>`;

const form = `
<div class="form-card wizard" data-nocount>
<p class="small"><strong>Nothing sensitive is asked for here.</strong> No social insurance number, no date of birth, no account numbers, no documents. Those come later, through a secure link I send you, never through a web form.</p>
<form data-lead="apply" data-steps data-save="rm-apply" data-success="Thanks. I have your application summary." novalidate>
<div class="wiz-top"><span data-progress>Step 1 of 6</span><span class="wiz-bar"><i data-bar></i></span></div>
<p class="small" data-restored hidden>Welcome back. I kept your answers from last time on this device. Use Start over if you'd rather begin fresh.</p>

<fieldset data-step="1"><legend>What are you looking to do?</legend>
${choice("goal", "Pick the one that fits best.", [["purchase", "Buy a home", "First home, next home, or a pre-approval to shop with"], ["refinance", "Refinance", "Access equity, consolidate debt, fund a suite or a project"], ["renewal", "Renew my mortgage", "My term is ending and I want to see my options"], ["switch", "Switch lenders", "Move an existing mortgage somewhere better"]])}
<div data-show-if="x_goal=purchase">
${choice("found_property", "Have you found a property yet?", [["yes", "Yes, I have a property in mind or an accepted offer"], ["no", "Not yet, I'm getting ready"]], ' data-cond')}
<div class="row2">
<div class="fld"><label for="a-price">Target purchase price (rough is fine)</label><input id="a-price" name="x_price" type="number" inputmode="numeric" min="0" step="1000" placeholder="e.g. 750000"></div>
<div class="fld"><label for="a-down">Down payment you have available</label><input id="a-down" name="x_down_payment" type="number" inputmode="numeric" min="0" step="1000" placeholder="e.g. 75000"></div>
</div>
${choice("first_time", "Is this your first home purchase?", [["yes", "Yes"], ["no", "No"]], ' data-cond')}
</div>
<div data-show-if="x_goal=refinance|renewal|switch">
<div class="row2">
<div class="fld"><label for="a-balance">Current mortgage balance (approximate)</label><input id="a-balance" name="x_balance" type="number" inputmode="numeric" min="0" step="1000" placeholder="e.g. 480000"></div>
<div class="fld"><label for="a-maturity">Maturity date (month and year)</label><input id="a-maturity" name="x_maturity" type="text" placeholder="e.g. June 2027"></div>
</div>
<div class="fld"><label for="a-lender">Current lender</label><input id="a-lender" name="current_lender" type="text" placeholder="e.g. a bank, credit union or other lender"></div>
</div>
<div class="fld"><label for="a-notes">Anything I should know? (optional)</label><textarea id="a-notes" name="message" rows="3" placeholder="Timeline, special circumstances, a question you want answered first"></textarea></div>
</fieldset>

<fieldset data-step="2" hidden><legend>About you</legend>
<div class="row2">
<div class="fld"><label for="a-name">Your full name</label><input id="a-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="a-email">Email</label><input id="a-email" name="email" type="email" autocomplete="email" required></div>
</div>
<div class="row2">
<div class="fld"><label for="a-phone">Mobile phone</label><input id="a-phone" name="phone" type="tel" autocomplete="tel" required></div>
<div class="fld"><label for="a-city">City or town you live in</label><input id="a-city" name="x_city" type="text" autocomplete="address-level2" required></div>
</div>
${choice("applicants", "How many people will be on the mortgage?", [["1", "Just me"], ["2", "Two of us"], ["3", "Three or more"]])}
${choice("housing", "Where do you live right now?", [["own", "I own my home"], ["rent", "I rent"], ["family", "With family"], ["other", "Something else"]])}
</fieldset>

<fieldset data-step="3" hidden><legend>How you earn</legend>
${choice("income_type", "Which describes your main income?", [["employed", "Employed", "Salary or hourly, paid by an employer"], ["self_employed", "Self-employed", "Sole proprietor, incorporated, or contract"], ["commission", "Commission or variable pay"], ["retired", "Pension or retired"], ["other", "Something else"]])}
<div class="row2">
<div class="fld"><label for="a-employer">Employer or business name</label><input id="a-employer" name="x_employer" type="text" required></div>
<div class="fld"><label for="a-years">Years in this job or business</label><input id="a-years" name="x_years" type="number" inputmode="decimal" min="0" step="0.5" placeholder="e.g. 3" required></div>
</div>
<div class="fld"><label for="a-income">Approximate gross annual income, before tax (household, if two of you)</label><input id="a-income" name="x_income" type="number" inputmode="numeric" min="0" step="1000" placeholder="e.g. 120000" required><span class="hint">A rough figure is fine. Lenders verify it later from your documents, not from this form.</span></div>
${choice("variable_pay", "Does your income include bonus, overtime or commission?", [["no", "No, it's steady"], ["some", "Some of it"], ["mostly", "Most of it"]])}
</fieldset>

<fieldset data-step="4" hidden><legend>Debts and down payment</legend>
<div class="fld"><label for="a-debts">What you pay each month on debts, not counting rent or a mortgage</label><input id="a-debts" name="x_monthly_debts" type="number" inputmode="numeric" min="0" step="50" placeholder="e.g. 450" required><span class="hint">Car loans, credit cards, lines of credit, student loans. Zero is a fine answer.</span></div>
${choice("down_source", "Where is the down payment or equity coming from?", [["savings", "Savings or investments"], ["gift", "A gift from family"], ["equity", "Equity in a home I own"], ["mixed", "A mix"], ["na", "Not applicable, I'm renewing or switching"]])}
${choice("credit", "How would you describe your credit?", [["good", "Good, no missed payments I know of"], ["fair", "A few bumps"], ["unsure", "Honestly not sure"]])}
</fieldset>

<fieldset data-step="5" hidden><legend>The property</legend>
<div class="fld"><label for="a-address">Address, or the area you're looking in</label><input id="a-address" name="x_property_area" type="text" placeholder="e.g. 123 Example St, Surrey, or Langley townhouses" required></div>
${choice("ptype", "Property type", [["detached", "Detached house"], ["townhouse", "Townhouse"], ["condo", "Condo or apartment"], ["suite", "House with a suite"], ["other", "Other"]])}
${choice("occupancy", "Will you live in it?", [["yes", "Yes, it's my home"], ["partly", "Yes, and part of it will be rented"], ["no", "No, it's a rental or investment"]])}
</fieldset>

<fieldset data-step="6" hidden><legend>Review and send</legend>
<p class="small">Here's what you've told me. Use Back to change anything.</p>
<div class="review" data-review></div>
<div class="hp" aria-hidden="true"><label for="a-web">Leave this field empty</label><input id="a-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="chk"><input type="checkbox" name="consent_enquiry_ack" required data-msg="Please tick the box so Joshua can contact you about your application."><span>I'd like Joshua Resvick to contact me about this application. I understand this form is a starting point, not a credit application: the credit-check authorization and the BCFSA Form 1A disclosure happen in a secure step later, and nothing is pulled on my credit from this form.</span></label>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. Optional, unsubscribe any time.</span></label>
<p class="small">See the <a href="/privacy/">privacy policy</a> for how this information is handled.</p>
</fieldset>

<div class="wiz-nav">
<button class="btn btn-ghost" type="button" data-back hidden>Back</button>
<button class="btn" type="button" data-next>Continue</button>
<button class="btn" type="submit" hidden>Send my application</button>
<button class="btn btn-ghost" type="button" data-restart>Start over</button>
</div>
<p class="form-msg" role="status" aria-live="polite"></p>
<div class="done" data-done hidden>
<p><strong>Got it. Thank you.</strong></p>
<p>I'll read this myself and be in touch to book your first call. If you'd rather pick the time now, the booking page is open: <a href="${SITE.book}" data-evt="book_call_click">book a 15-minute call</a>. Anything urgent, phone me at <a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>.</p>
<p class="small">What happens next: a short call to confirm the plan, then a secure link for documents and the credit-check authorization, then a written comparison of lender options before you decide anything.</p>
</div>
</form>
</div>`;

const body = `
${short({ answer: "This is a short, easy first step. Six questions, about five minutes. It is not a credit application and asks for nothing sensitive. I read it myself, then we talk.", who: "Anyone buying, renewing, switching or refinancing in BC. Already have an accepted offer? Use the <a href=\"/accepted-offer/\">accepted offer page</a> instead.", next: "Fill in the form below, or <a href=\"/contact/\">book a 15-minute call</a> if you would rather talk first." })}
<h2>What this is, and what it isn't</h2>
<p>This is the easy version of a mortgage application. It has six short steps and takes about five minutes. You can do it on your phone. It tells me enough about your situation before we talk. That way the first call is about your options, not your postal code.</p>
<p>It is not a credit application. Nothing here touches your credit report, and nothing gets sent to a lender. I'm not asking for anything a stranger shouldn't have. That means no social insurance number, no date of birth, no account numbers and no documents.</p>
<p>Think of it as the first ten minutes of our chat, written down. Then neither of us has to repeat it. If you'd rather talk first and type later, that's fine too. <a href="/contact/">Book the 15-minute call</a> and skip the form entirely.</p>
<p>Here's how I work, so you know what you're starting. On a mortgage placed with a mainstream (A) lender, the lender pays me. You pay nothing for the service. Fees only come up on some B-lender and private files. If that's ever the route for you, BC rules require me to disclose it in writing before you commit. The full explanation is on the page about <a href="/how-mortgage-brokers-get-paid/">how mortgage brokers get paid</a>.</p>

${form}

<h2>Why I ask for rough numbers instead of exact ones</h2>
<p>A lender checks everything to the dollar in the end. It uses pay stubs, tax documents and bank statements. That comes later, through a secure link. For now, rough is better than nothing. Rough is also better than a guess that sounds exact. If you earn about $120,000, type $120,000. Then I can tell you roughly what that supports. If you don't know your exact mortgage balance, your best guess from the last statement is plenty.</p>
<p>I spent five years as a mortgage underwriter before I became a broker. So I read applications the way a lender does. I look for the thing that will trip it up. That's why the questions here are the ones that matter:</p>
<ul>
<li>How you earn.</li>
<li>How long you've earned it that way.</li>
<li>What you pay on debts each month.</li>
<li>Where the down payment is coming from.</li>
</ul>
<p>Those four answers decide most files. The <a href="/mortgage-application-checklist/">application checklist</a> walks through the six problems that sink applications. Nearly all of them show up in those same four answers.</p>

<h2>What happens after you press send</h2>
<ol>
<li><strong>I read it.</strong> Me, not a system. I'll usually have a view on your situation before we speak.</li>
<li><strong>We talk.</strong> A short call to confirm the goal, check the numbers, and tell you what's realistic. If something in the plan won't work, you hear it then, with the alternatives. Want a sense of the numbers before the call? The <a href="/mortgage-calculators/#affordability">affordability calculator</a> gives an estimate.</li>
<li><strong>Secure step.</strong> If we're going ahead, I send a secure link. It covers your documents and the credit-check authorization. It also has the BCFSA Form 1A disclosure, which tells you in writing who I'm acting for. That's where the formal application lives. It's the only place anything sensitive travels.</li>
<li><strong>A written comparison.</strong> Before you choose anything, you get a side-by-side of real lender options. It covers rate, term, penalties, prepayment and portability. The <a href="/lender-comparison-report/">Lender Comparison Report</a> page shows what it looks like.</li>
</ol>
<p>For buyers who want to shop with confidence, step three usually means a <a href="/mortgage-pre-approval-bc/">proper pre-approval</a>. That's the kind where income, credit and down payment have actually been checked and a rate is held. For renewals and switches, it means I pull your options together before your maturity date. Then you're comparing instead of just signing.</p>

<h2>Good to have nearby, but not required</h2>
<p>You can fill this in from memory. If you want to be a little more precise, these help:</p>
<ul>
<li>A recent pay stub or your last notice of assessment, for the income figure.</li>
<li>Your latest mortgage statement, if you're renewing, switching or refinancing. The balance and the maturity date are on it.</li>
<li>A rough total of your monthly debt payments. Your banking app usually shows these in a minute.</li>
<li>For buyers, the price range you're looking at and the down payment you've set aside, including any gift from family. The <a href="/down-payment-guide-bc/">down payment guide</a> explains what counts.</li>
</ul>

${callout("If you have an accepted offer", `<p>Skip this form and go straight to the <a href="/accepted-offer/">accepted offer page</a>. It has a short list of what to send today. It also has a booking link for a longer call. A subject-removal deadline changes the order of everything.</p>`)}

<h2>A few honest notes</h2>
<p>Your answers are saved on your own device while you work through the steps. So you can close the page and come back. They're sent to me only when you press the button at the end. Once sent, they go into my client system and nowhere else. The <a href="/privacy/">privacy policy</a> has the details. You can ask me to delete them at any time.</p>
<p>If you're self-employed, the income question is the one lenders argue about most. I'd rather hear your real situation than a tidy number. The <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a> explains why declared income, business revenue and what a lender will count are three different figures. If your credit has had a rough patch, say so in the notes. It changes which lenders I'd look at, not whether I'll help.</p>
<p>Not sure this is the right form? Want to ask one question first? That's what the call is for. <a href="/contact/">Get in touch</a> whichever way is easiest.</p>

${cta({ title: "Prefer to talk it through first?", text: "Fifteen minutes on the phone covers most of what this form asks, and I'll tell you honestly where you stand." })}
`;

export default {
  slug: "/apply/",
  h1: "Start your mortgage application",
  lede: "Six short steps, about five minutes, nothing sensitive. I read it myself, then we talk about your options.",
  crumb: "Apply", nav: "/contact/", forms: true, body,
  faqs: [
    { q: "Does filling this in affect my credit score?", a: "No. Nothing on this form touches your credit report, and nothing is sent to a lender. The credit check happens later, only with your written authorization, in a secure step after we've talked and agreed on a plan. The form is a starting point, not a credit application." },
    { q: "Why don't you ask for my SIN or date of birth?", a: "Because a web form is the wrong place for them. Identity details, the credit-check authorization and your documents all travel through a secure link I send you, where they're encrypted and stored properly. If a website asks for your social insurance number in a plain form, be cautious." },
    { q: "What if I don't know some of the numbers?", a: "Give your best guess and say so in the notes. Rough income, rough balance and rough monthly debts are enough for me to understand your situation and tell you what's realistic on the call. Lenders verify the exact figures later, from your documents, not from this form." },
    { q: "Does it cost anything to apply?", a: "No. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service. Fees only arise on some B-lender and private files, and BC rules require written disclosure before you commit. There is never a charge for this form or the first call." },
    { q: "Can I apply if I'm not in Surrey?", a: "Yes. I work with clients across British Columbia, and everything can be done online and by phone. My office is in Surrey and you're welcome to meet there, but you never need to. Applications, documents and signatures are all handled remotely." }
  ]
};
