import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Three things people call a pre-approval</h2>
<p>The word gets used loosely, and the difference matters when you are about to make an offer on a home. Three different things are commonly described as a pre-approval, and only one of them is the real thing.</p>
<ul>
<li><strong>A pre-qualification</strong> is an estimate. You tell a lender, a website or a calculator your income, debts and savings, and it returns a number. Nothing is checked. It is useful for orientation, and it is not something a seller or a realtor can rely on.</li>
<li><strong>A rate hold</strong> reserves an interest rate for a period while you shop. It is about the rate, not about whether you qualify. A hold can exist without anyone having reviewed your file. See the page on <a href="/mortgage-rate-hold/">mortgage rate holds</a> for how they work and what they do not protect.</li>
<li><strong>A pre-approval</strong> means a lender has actually looked at your income documents, your credit and your down payment, and has said, subject to the property, that it will lend you a specific amount at a rate it will hold.</li>
</ul>
<p>When this page says pre-approval, it means the third one. The reason to insist on it is simple: a number that nobody checked can disappear the moment someone does check it, and that tends to happen after you have fallen in love with a house.</p>

<h2>What gets verified</h2>
<p>A proper pre-approval reviews the same things the final approval will review, only earlier. That is the point of it.</p>
<ol>
<li><strong>Credit.</strong> The lender reads your credit report, including your payment history and every debt on it. This is why a real pre-approval involves a credit check. Missed payments, collections and high balances show up here, and so do debts you may have forgotten about.</li>
<li><strong>Income.</strong> Your documents are compared with the income you stated. How income is counted depends on how you earn it: salary, hourly work, overtime, commission, self-employment or rental income are each treated differently by lenders.</li>
<li><strong>Debts and ratios.</strong> Your monthly debt payments are added to the housing costs of the mortgage you want. Insured mortgages use gross debt service of 39 percent and total debt service of 44 percent, measured at the qualifying rate, which is the greater of your contract rate plus 2 percent or 5.25 percent. Other lenders set their own limits. The <a href="/how-much-mortgage-can-i-afford/">affordability explainer</a> walks through the math.</li>
<li><strong>Down payment.</strong> Lenders want to see where the money is and where it has been. Savings, an FHSA or RRSP withdrawal, and a gift each have their own paperwork, and lenders commonly ask for roughly 90 days of statements. The <a href="/down-payment-guide-bc/">down payment guide</a> explains the sources and the paper trail.</li>
</ol>

<h2>What a pre-approval does not guarantee</h2>
<p>A pre-approval is conditional. The property still has to be approved, which usually means an appraisal or other review confirming that it is worth what you agreed to pay and that it fits the lender's rules. Strata documents, a title issue, a suite that is not registered or a heating system that a lender will not accept can all create conditions after the offer is accepted.</p>
<p>It also depends on your file staying the same. A new car loan, a job change, a large unexplained deposit or a missed payment between pre-approval and closing can change the answer, because the lender reviews your file again before funding. The pre-approval protects you from the problems that exist today. It cannot protect you from problems created later, so the practical advice is to hold your finances steady until the keys are in your hand.</p>

${cta({ title: "Want to know your real number before you shop?", text: "Book a 15-minute call. Joshua will tell you what documents to bring and how he would structure your pre-approval." })}

<h2>Documents by employment type</h2>
<p>The checklist depends on how you earn your income. These lists are a general guide, and a specific lender may ask for more. The <a href="/mortgage-application-checklist/">application checklist</a> goes into the six issues that most often sink applications.</p>
<h3>Employed, salary or hourly</h3>
<ul>
<li>Government-issued photo ID.</li>
<li>Recent pay stubs and a letter of employment confirming your role, pay and start date.</li>
<li>Recent tax documents from CRA, such as your notices of assessment.</li>
<li>Statements for the accounts holding your down payment.</li>
</ul>
<h3>Self-employed or commission</h3>
<ul>
<li>Personal tax returns and notices of assessment for several years.</li>
<li>Business financial statements, and incorporation documents if you own a company.</li>
<li>Evidence of tax owing being paid up to date.</li>
</ul>
<p>Self-employed borrowers have more than one route, and the right one depends on how your income appears on your returns. The <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a> explains the options before you apply, and choosing the route first is far better than collecting the wrong documents.</p>
<h3>New to Canada, or with limited credit history</h3>
<ul>
<li>Immigration documents and proof of work authorization.</li>
<li>Any international credit report or a reference letter from your bank in your home country, which some programs accept in place of a Canadian credit history.</li>
</ul>
<p>If your credit is the issue, the <a href="/build-credit-for-a-mortgage/">credit building guide</a> shows what to fix first and in what order.</p>

<h2>How long it takes</h2>
<p>The time depends mostly on how complete your documents are. A buyer with employment income, a clean credit report and statements ready can move quickly. A file that needs missing documents, letters of explanation or a clarification of income takes longer, because every gap becomes a question that has to be answered before the lender will commit. The easiest way to shorten the process is to gather the documents before you ask.</p>
<p>A lender's pre-approval usually carries an expiry date and a rate hold for a limited period, and the length varies by lender. Ask for the terms in writing. If your shopping takes longer than the hold, the approval can usually be refreshed, but it is another review of your file.</p>

<h2>How Joshua approaches it</h2>
<p>Joshua's background includes underwriting mortgage files at volume, and he does a pre-approval the way an underwriter would. He reads your documents looking for the reasons a lender might hesitate, then fixes or explains them before the file goes anywhere. The goal is a pre-approval that holds up when it is tested, not one that merely produces an attractive number.</p>
<p>That approach includes choosing the lender. Different lenders count income, treat credit events and handle properties differently, so the right match for your file may not be the lender with the lowest advertised rate. Fees are straightforward: on a mortgage with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service.</p>
<p>If you are early in the process, start with the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> for the whole sequence, then <a href="/contact/">contact Joshua</a> to book a call.</p>

${callout("A quick test", "<p>Before you rely on a pre-approval, ask three questions. Did anyone read my documents? Did anyone check my credit? Is the amount and the rate hold in writing? If the answer to any is no, you have an estimate, not a pre-approval.</p>")}
`;

export default {
  slug: "/mortgage-pre-approval-bc/",
  h1: "Mortgage pre-approval in BC: a real one, not a rate guess",
  lede: "A real pre-approval means your income, credit and down payment were actually checked. Here is what that includes, what it protects you from, and what it does not.",
  crumbs: [["Home", "/"], ["First-time home buyers", "/first-time-home-buyer-bc/"], ["Mortgage pre-approval", "/mortgage-pre-approval-bc/"]],
  nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "What is the difference between pre-approval and pre-qualification?", a: `A pre-qualification is an estimate from numbers you provide, and nothing is checked. A pre-approval means a lender has reviewed your income documents, credit and down payment and has agreed, subject to the property, to lend a stated amount. Only the second is something you can rely on when making an offer.` },
    { q: "Can I get a mortgage pre-approval without a credit check?", a: `A real one needs your credit report, because credit is one of the things being verified. A rate quote or an online estimate can be done without a credit check, but it is not a pre-approval. If someone offers an approval without looking at your credit, treat the number as a guess.` },
    { q: "Does a pre-approval guarantee I will get the mortgage?", a: `No. It is conditional on the property being approved and on your finances staying the same until closing. An appraisal, strata documents, a job change or new debt can all change the outcome, which is why the file is reviewed again before the lender funds.` },
    { q: "How long does a pre-approval last?", a: `The length varies by lender, and so does the rate hold that comes with it. Ask for the expiry date and the hold period in writing. If you are still shopping when it ends, it can usually be refreshed, though your file will be reviewed again.` },
    { q: "Which documents should I gather first?", a: `Photo ID, recent pay stubs and a letter of employment if you are employed, tax notices of assessment from CRA, and statements for the account holding your down payment. Self-employed buyers also need tax returns and business financials. Joshua will confirm the exact list for your situation.` }
  ]
};
