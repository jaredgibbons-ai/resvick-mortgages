import { short } from "../lib/short.mjs";
import { cta, callout, SITE } from "../lib/site.mjs";

const form = `
<h2>Get the printable checklist</h2>
<div class="form-card">
<p class="small"><strong>Please do not send financial documents through this form.</strong> It does not accept attachments. Joshua will send a secure upload link when the time comes.</p>
<form data-lead="checklist" data-stay novalidate>
<input type="hidden" name="intent" value="buyer">
<div class="row2">
<div class="fld"><label for="c-name">Your name</label><input id="c-name" name="name" type="text" autocomplete="name" required></div>
<div class="fld"><label for="c-email">Email</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
</div>
<div class="row2">
<div class="fld"><label for="c-sit">What are you doing?</label><select id="c-sit" name="x_situation"><option>Buying a home</option><option>Renewing my mortgage</option><option>Refinancing</option><option>Buying a rental</option><option>Just planning ahead</option></select></div>
<div class="fld"><label for="c-time">When do you expect to apply? (optional)</label><input id="c-time" name="timeline" type="text" placeholder="For example, spring 2027"></div>
</div>
<div class="hp" aria-hidden="true"><label for="c-web">Leave this field empty</label><input id="c-web" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<p class="small">By sending this you agree that Joshua Resvick may contact you about your file. No credit check is run from this form. See the <a href="/privacy/">privacy policy</a>.</p>
<label class="chk"><input type="checkbox" name="consent_marketing"><span>Email me Bank of Canada rate updates and mortgage tips. Optional, unsubscribe any time.</span></label>
<div><button class="btn" type="submit">Show me the checklist</button></div>
<p class="form-msg" role="status" aria-live="polite"></p>
<div class="done" data-done hidden>
<p><strong>Thanks. Your checklist is ready.</strong></p>
<p><a class="btn" href="/assets/downloads/resvick-mortgage-document-checklist.pdf" data-evt="checklist_download" download>Download the PDF (2 pages)</a></p>
<p class="small">It prints on letter paper. If you would like Joshua to look over your list, <a href="/contact/">send him a note</a> or call <a href="${SITE.phoneHref}" data-evt="phone_click">${SITE.phone}</a>.</p>
</div>
</form>
</div>`;

const body = `
${short({
  answer: "A mortgage file moves faster when the paperwork is ready before you need it. This free two-page checklist lists what lenders usually ask for, grouped by your situation, with a box to tick beside each item.",
  who: "Anyone about to get pre-approved, make an offer, renew or refinance in BC.",
  next: "Fill in the short form below. The PDF appears on this page right away."
})}
${form}

<h2>Why the paperwork comes first</h2>
<p>People tend to shop for a rate and gather documents later. The order is usually backwards. A rate means little until a lender has agreed to lend to you, and that agreement rests on paper.</p>
<p>Missing documents slow a file more than almost anything else. A job letter that takes two weeks to arrive can push a pre-approval past a deadline. A statement that shows a large deposit with no explanation can lead to a string of questions. None of this is hard to fix, but it is much easier to fix before you are waiting on it.</p>
<p>This checklist is built to remove that wait. It is the list Joshua Resvick walks through with clients. He spent five years as a mortgage underwriter before he became a broker, so he knows which gaps a lender notices first.</p>

<h2>What is on the checklist</h2>
<p>The PDF has seven groups. You tick the ones that apply to you and skip the rest.</p>
<ul>
<li><strong>For every file.</strong> Photo ID, your recent addresses, a list of your debts and the paper for the purchase or the renewal.</li>
<li><strong>Salary or hourly pay.</strong> A pay stub, an employer letter and two years of tax slips.</li>
<li><strong>Self-employed.</strong> Two years of returns, business statements and proof that the CRA is paid up.</li>
<li><strong>Your down payment.</strong> About 90 days of statements, plus a gift letter or a sale contract if they apply.</li>
<li><strong>Rentals.</strong> Leases, tax bills and mortgage statements for each property.</li>
<li><strong>Condos and townhouses.</strong> Strata bylaws, minutes, financials and the Form B.</li>
<li><strong>New to Canada.</strong> Proof of status, an employment letter and the path your down payment took into the country.</li>
</ul>
<p>It also carries a short note on what to do and what to avoid after you are approved. The note matters because a lender can check your job and your credit again before it funds the mortgage.</p>

<h2>When to gather each piece</h2>
<p>You do not need everything on day one. This is a sensible order. First-time buyers can pair it with the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a>, and the <a href="/mortgage-calculators/">mortgage calculators</a> show what your numbers could support.</p>
<h3>Before you start looking</h3>
<p>Pull your own credit report and read every line. Write down each debt with its balance and its monthly payment. Open the account that holds your down payment and check that the history is clean. The <a href="/down-payment-guide-bc/">down payment guide</a> lists the sources lenders accept. Funds that have sat in one account for about 90 days are easy to explain. Money that moved around last week is not.</p>
<p>If you are self-employed, ask your accountant now whether your last two returns are filed and whether anything is owing. The <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a> explains how lenders read that income.</p>
<h3>When you ask for a pre-approval</h3>
<p>This is where the income documents come in. Ask your employer for the letter early, because some payroll teams take a week or more. Download your tax slips from your CRA account. Joshua will confirm the exact list for the lender he has in mind, since lenders do not all ask for the same things. The page on <a href="/mortgage-pre-approval-bc/">mortgage pre-approval</a> shows how a checked pre-approval differs from a guess.</p>
<h3>When your offer is accepted</h3>
<p>Now the property paper arrives. You will need the signed contract, and for a condo the strata documents. Gift letters and sale contracts belong here too. Subject dates are short, so having the rest ready lets you spend your time on the property. If you have just had an offer accepted, the <a href="/accepted-offer/">accepted offer page</a> lets Joshua see your dates at once.</p>
<h3>Between approval and closing</h3>
<p>Keep everything the way it is. Do not open new credit, change jobs, finance a car or move large sums between accounts without calling first. The <a href="/mortgage-application-checklist/">application checklist</a> explains the six problems that sink files at this stage.</p>

<h2>For renewals and refinances</h2>
<p>A renewal needs far less. Most lenders want your latest mortgage statement and your renewal letter. If you are switching to a new lender, expect a request for income proof and property tax paper, because the new lender must approve you from scratch. A refinance asks for the full set, and it usually adds an appraisal. The guides on <a href="/mortgage-renewal-bc/">mortgage renewal</a> and <a href="/refinance-mortgage-bc/">refinancing</a> explain how each one works.</p>
<p>If you rent out part of your home, bring the lease and be ready to show how the suite is set up. The page on <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a> explains why the legal status of the suite matters.</p>

<h2>What happens next</h2>
<p>Wondering what comes after the paperwork? The page on <a href="/what-happens-after-you-apply/">what happens after you apply</a> walks through each step, from the first call to the keys.</p>

<h2>Keep your documents safe</h2>
<p>Mortgage paper holds your most private details. Please do not email it, and do not put it in a web form. Joshua sends a secure upload link when he needs a document, and he asks only for what the lender requires.</p>
<p>The form on this page asks for your name, your email and a few simple answers. It does not take attachments. Your details are used to reply to you and, if you tick the optional box, to send rate updates and tips. They are not sold. An unsubscribe link sits in every marketing email. The <a href="/privacy/">privacy policy</a> has the full detail.</p>

${cta({ title: "Want a second pair of eyes on your list?", text: "A 15-minute call is enough to go through it with your real situation. Joshua will tell you what to gather first and what can wait." })}

<h2>What this checklist is not</h2>
<p>It is not a promise of approval, and it is not a complete list for every file. Lenders differ on what they accept and in what form. A file with a rental, a gift, a new job or a business owner's income will have a few extra items. That is normal, and Joshua will tell you which ones as soon as he knows your situation.</p>
<p>It is also not a substitute for a conversation. Some of the best advice happens before any paper is gathered. A short call can show you that a debt, a deposit or a date needs attention first. The <a href="/mortgage-check/">two-minute mortgage check</a> is a good place to start if you would rather see where you stand before you talk to anyone.</p>

${callout("What it costs", "<p>The checklist is free, and so is the 15-minute call. On a mortgage placed with an A lender, the lender pays the broker, so you pay nothing for the service. Fees can come up on some B-lender and private-lender files. If one does, Joshua explains it in writing before you sign.</p>")}
`;

export default {
  slug: "/mortgage-document-checklist/",
  h1: "Free mortgage document checklist for BC buyers and renewals",
  lede: "A printable two-page checklist of what lenders usually ask for. Pick your situation, tick each box and walk into your pre-approval with the paper ready.",
  crumb: "Document checklist", nav: "/first-time-home-buyer-bc/", forms: true, body,
  faqs: [
    { q: "Is the mortgage document checklist free?", a: "Yes. You enter your name and email, and the two-page PDF appears on the same page. There is no cost and no obligation. You do not need to be a client, and you do not have to book a call." },
    { q: "Which documents do lenders usually ask for?", a: "Most files need photo ID, proof of income, a list of debts, proof of your down payment and the paper for the property. Self-employed borrowers add tax returns and business statements. Lenders differ, so Joshua confirms the exact list once he knows your file." },
    { q: "How far back should my down payment history go?", a: "Lenders commonly want to see about 90 days of statements so the source is clear. Newer money, such as a gift or a home sale, can usually be accepted if it is properly documented. A signed gift letter and proof of the transfer are the usual pieces." },
    { q: "Should I email my documents to Joshua?", a: "No. Please do not email financial documents. Joshua sends a secure upload link for anything sensitive, and he asks only for what the lender needs. The form on this page does not accept attachments." },
    { q: "Do I need all of this for a renewal?", a: "Usually not. A renewal with the same lender often needs little more than your mortgage statement and renewal letter. If you switch lenders, the new lender may ask for income and property paper, because it has to approve you from scratch." },
    { q: "Does having the documents ready mean I am approved?", a: "No. The checklist helps you avoid delays, but every approval is subject to lender and insurer underwriting. It is a way to start a clean file, not a promise of an outcome." }
  ]
};
