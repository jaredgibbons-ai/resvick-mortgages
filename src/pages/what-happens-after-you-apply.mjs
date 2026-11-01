import { short } from "../lib/short.mjs";
import { cta, callout, SITE } from "../lib/site.mjs";

const body = `
${short({
  answer: "Your online application is a first step, not a credit application. Joshua reads it himself, books a short call, then asks for documents through a secure link. You see a written comparison of lender options before you decide anything.",
  who: "Anyone thinking about filling in the application form, or who just sent one.",
  next: "Read the steps below. When you are ready, start the application, or book a 15-minute call."
})}
<h2>Why this page exists</h2>
<p>Filling in a mortgage form can feel like a leap. You wonder who reads it, what happens to it and whether a lender is about to look at your credit. Most people hesitate for that reason alone.</p>
<p>So here is the plain version. This page walks through what happens after you press send, and what happens later if you decide to go ahead. Times vary with lenders and with the week, so we do not promise exact hours or days. We do show you the order of things and what is asked of you at each stage.</p>

<h2>Step 1: You send a short summary</h2>
<p>The <a href="/apply/">online application</a> is a short set of questions in a few steps. You can stop and come back, because it saves your progress on your own device. It asks what you want to do, your rough numbers and a way to reach you.</p>
<p>It does not ask for your Social Insurance Number, your date of birth or any account numbers. It does not take documents, and it does not run a credit check. Those things come later, and only when you are ready. The <a href="/privacy/">privacy policy</a> lists exactly what the form collects.</p>

<h2>Step 2: Joshua reads it himself</h2>
<p>If you are buying your first home, the <a href="/first-time-home-buyer-bc/">first-time buyer guide</a> covers the programs and the numbers around this process. Your summary goes to Joshua Resvick, not to a call centre. He reads it and gets in touch to book a short first call. If anything has a deadline, such as a subject removal date or a closing date, say so on the form, or phone or text. A deadline should never wait in a queue.</p>
<p>You may get a question or two first, so he can point you the right way. Nothing is required of you at this point, and there is no obligation.</p>

<h2>Step 3: The first call</h2>
<p>The first call is short. Joshua confirms your goal, your timeline and what is realistic for your situation. He spent five years as a mortgage underwriter before he became a broker, so he knows where files tend to go wrong. He will tell you early if something needs fixing first, such as a debt, a deposit or a date.</p>
<p>It is also the place to ask anything you like. Bring your questions about rates, terms, the stress test or the down payment. The calls do not include a hard sell. If the best answer is to wait, he will say so.</p>

<h2>Step 4: A secure link for documents and permission</h2>
<p>If you decide to go ahead, Joshua sends a secure upload link. That is where your documents go, and where you give permission for the credit check. Please do not email financial documents. Email is not a safe place for them.</p>
<p>He asks only for what the lender needs for your file, and the list depends on how you earn your income. The <a href="/mortgage-document-checklist/">free document checklist</a> shows the usual items, and the <a href="/mortgage-application-checklist/">application checklist</a> explains the problems that sink files. Having them ready saves days.</p>

<h2>Step 5: A written comparison of lender options</h2>
<p>Before you decide anything, you get a written side-by-side of real lender options that fit your file. It covers the rate, the term, the penalty method, prepayment privileges and portability. The page on the <a href="/lender-comparison-report/">lender comparison report</a> shows what it includes. The point is that you choose with the full picture, not the first number you heard.</p>

<h2>Step 6: A checked pre-approval, if you are buying</h2>
<p>For a purchase, the next stage is a checked pre-approval. A lender reviews your documents and your credit, and it traces your down payment. Many lenders will hold a rate for about 120 days, though terms vary, so ask what yours is. The page on <a href="/mortgage-pre-approval-bc/">mortgage pre-approval</a> explains why a checked one is worth more than a quick guess.</p>
<p>If you are renewing or refinancing, this stage looks a little different, and Joshua will tell you what applies.</p>

<h2>Step 7: Your offer and the conditions</h2>
<p>Once you have an accepted offer, the lender checks the property. It usually orders an appraisal and may ask for strata documents, insurance proof or other papers. Your subject dates are short, so Joshua plans the lender steps around them. If you have just had an offer accepted, the <a href="/accepted-offer/">accepted offer page</a> lets him see your dates at once.</p>
<p>Commonly a lender replies within a few business days, but lenders and weeks vary. As conditions clear, he keeps you and your realtor up to date.</p>

<h2>Step 8: Final approval, legal work and funding</h2>
<p>When the conditions are met, the lender gives final approval and your lawyer or notary prepares the transfer and mortgage documents. You sign, the mortgage funds and you get the keys. The <a href="/closing-costs-bc/">closing costs guide</a> shows what to budget for beyond the down payment.</p>
<p>Until the mortgage has funded, keep your situation the same. Do not open new credit, change jobs or move large sums without calling Joshua first. A lender can check your job and your credit again before it funds.</p>

<h2>Step 9: After closing</h2>
<p>For clients, the work does not end at closing. The <a href="/mortgage-aftercare-program/">aftercare program</a> includes a yearly review and a call about six months before your renewal. That is when your options are widest.</p>

<h2>What you can expect from the process</h2>
<ul>
<li><strong>A person, not a queue.</strong> Joshua reads your message and replies himself.</li>
<li><strong>No surprises about documents.</strong> You know what is needed, and you send it through a secure link.</li>
<li><strong>No credit check without your permission.</strong> It happens only after you say yes.</li>
<li><strong>A written comparison before you commit.</strong> You decide with the options in front of you.</li>
<li><strong>An honest answer.</strong> If a mortgage is not the right move yet, he tells you.</li>
</ul>

<h2>What if it does not go to plan</h2>
<p>Sometimes a file does not fit the first lender. Income may be hard to document, a credit problem may show up or the property may not suit the lender. That is not the end. Joshua can look at other lenders and, where it fits, at options such as a <a href="/b-lender-mortgage-bc/">B lender</a>. He explains the trade-offs and any added cost in writing first. Where it makes sense, he may suggest a short plan to fix the issue and try again.</p>

${cta({ title: "Ready for step one?", text: "Start the online application, or book a 15-minute call to talk it through first. Either way, there is no obligation." })}

${callout("What it costs", "<p>On a mortgage placed with an A lender, the lender pays the broker, so you pay nothing for the service. Fees can come up on some B-lender and private-lender files. If one does, Joshua explains it in writing before you sign. The page on <a href=\"/how-mortgage-brokers-get-paid/\">how mortgage brokers get paid</a> has the detail.</p>")}

<h2>If you are not ready to apply</h2>
<p>You do not have to apply to get help. You can try the <a href="/mortgage-calculators/">mortgage calculators</a>, take the <a href="/mortgage-check/">two-minute mortgage check</a> or <a href="/contact/">send Joshua a question</a>. Many people read, get their numbers in order and come back months later. That is fine.</p>
`;

export default {
  slug: "/what-happens-after-you-apply/",
  h1: "What happens after you apply: the mortgage process, step by step",
  lede: "Your online application is a first step, not a credit check. Here is what happens next, who reads it and what is asked of you, from the first call to the keys.",
  crumb: "After you apply", nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Does applying on this website run a credit check?", a: "No. The online application is a first step. It does not ask for your Social Insurance Number or date of birth, and it does not check your credit. Joshua asks for your permission through a secure link later, only if you decide to go ahead." },
    { q: "Who reads my application?", a: "Joshua Resvick reads it himself. It does not go to a call centre. He gets in touch to book a short first call, and he may ask a question or two first so he can point you the right way." },
    { q: "How long until I hear back?", a: "Joshua replies himself, so timing depends on the day. If anything has a deadline, such as a subject removal date, say so on the form or phone or text, so it is seen the same day. Lender timelines vary, and a lender commonly replies within a few business days." },
    { q: "What documents will I need to send?", a: "It depends on how you earn your income and what you are doing. Most files need photo ID, proof of income, a list of debts and proof of your down payment. Joshua sends a secure upload link and asks only for what the lender needs. Please do not email financial documents." },
    { q: "Am I committed once I apply?", a: "No. There is no obligation. You see a written comparison of lender options before you decide anything. You can stop at any time, and the credit check happens only after you give permission through the secure link." },
    { q: "Will I pay a fee to apply?", a: "On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. Fees can come up on some B-lender and private-lender files, and Joshua explains any fee in writing before you sign." }
  ]
};
