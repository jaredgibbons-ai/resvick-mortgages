import { createRequire } from "node:module";
import { cta, callout } from "../lib/site.mjs";
const RM = createRequire(import.meta.url)("../assets/js/engine.js");
const base = { annualIncome: 100000, ratePct: 4.5, amortYears: 25, down: 50000, propertyTaxMonthly: 300, heatMonthly: 100, condoFeesMonthly: 0 };
const clean = RM.affordability({ ...base, debtsMonthly: 0 });
const withCar = RM.affordability({ ...base, debtsMonthly: 600 });
const $0 = (x) => "$" + Math.round(x).toLocaleString("en-CA");

const body = `
<h2>Most applications die on paperwork, not price</h2>
<p>When a mortgage application fails, it is rarely because the interest rate was wrong. It fails because something on the file did not match what the lender needed to see: income that could not be proven the way the lender requires, a debt nobody mentioned, a credit entry that appeared late, a down payment with no paper trail, or a property that did not fit the lender's rules. Each of these can be found and fixed early, which is why Joshua Resvick, whose background includes underwriting, reads a file for these problems first.</p>
<p>This page lists the six that sink the most applications, with a self-check for each. Run through them before you apply, before you make an offer, and again before your closing date. It takes less time than recovering from any one of them.</p>

<h2>The six problems that kill applications</h2>

<h3>1. Income that cannot be proven the lender's way</h3>
<p>A lender does not accept what you earn. It accepts what you can document, in the form it requires. Salaried employees are usually straightforward. Everyone else, including people paid by commission or bonus, people on contract, and the self-employed, faces more questions about how income is averaged and which documents prove it. Lenders differ on all of this, and a source of income that one lender counts in full another may discount.</p>
<p><strong>Self-check:</strong> Can you produce, for every income source you are claiming, the documents that show it, going back as far as the lender asks? If your income varies, do you know how a lender will average it? Self-employed borrowers should start with the <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a>.</p>

<h3>2. Forgotten debts, car loans above all</h3>
<p>Lenders count your monthly debt payments against your income, and they find every one of them on your credit report. Car loans and leases are the most common surprise, because borrowers think of them as part of ordinary spending. Credit card minimums, lines of credit, student loans, support payments and other financing count as well.</p>
<p>Here is how much one debt can matter. In an illustrative case, a household earning $100,000 a year, with a $50,000 down payment, a 4.50% rate, a 25-year amortization, $300 a month in property tax and $100 in heat, could qualify for roughly ${$0(clean.maxPrice)} at the stress-test rate with no other debts. Add a $600 monthly car payment and the figure falls to roughly ${$0(withCar.maxPrice)}, a difference of about ${$0(clean.maxPrice - withCar.maxPrice)} in purchasing power. These are estimates, not an approval. The point is the size of the effect.</p>
<p><strong>Self-check:</strong> Write down every monthly payment you make on credit, then compare the list with your credit report. The <a href="/how-much-mortgage-can-i-afford/">affordability explainer</a> shows how the ratios work.</p>

<h3>3. Credit surprises</h3>
<p>Credit reports contain things borrowers do not expect: an old collection, an account opened in error, a high utilization on a card, a missed payment from years ago. Lenders see all of it. A surprise in the middle of an application costs time, and sometimes the approval.</p>
<p><strong>Self-check:</strong> Pull your own credit report before applying and read it entry by entry. If something looks wrong, dispute it early, since corrections take time. Do not open new credit, finance a vehicle or furniture, or close old accounts while an application is under way. If your credit needs work, the guide to <a href="/build-credit-for-a-mortgage/">building credit for a mortgage</a> explains where to start.</p>

<h3>4. A down payment without a paper trail</h3>
<p>Lenders verify where your down payment came from. A common expectation is that the funds have been in your account for about 90 days, so that the source is visible. Large, unexplained deposits raise questions. Funds that were borrowed, or that came from someone else, need to be disclosed and documented properly.</p>
<p>A gift from family can work, with a signed gift letter, an immediate-family source and proof that the money was transferred. A loan dressed up as a gift counts as debt and changes your ratios. The page on <a href="/gifted-down-payment/">gifted down payments</a> covers the rules, and the <a href="/down-payment-guide-bc/">down payment guide</a> covers every acceptable source.</p>
<p><strong>Self-check:</strong> Can you explain, with statements, where every dollar of your down payment has been and where it came from?</p>

<h3>5. The property itself</h3>
<p>You can be a perfect borrower and still have the file fail on the property. The most common issues are:</p>
<ul>
<li><strong>A low appraisal.</strong> If the lender's appraisal comes in under the price you agreed, the lender lends against the lower figure, and you must cover the gap.</li>
<li><strong>An unregistered suite.</strong> Income from a suite that is not legal and registered generally counts as nothing at A lenders. If your plan relies on suite income to qualify, check the status first and read about <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a>.</li>
<li><strong>Strata and zoning questions.</strong> Strata finances, pending special assessments, rental restrictions and zoning details can affect whether a lender will finance the property.</li>
</ul>
<p><strong>Self-check:</strong> Before you remove conditions, have you reviewed the property's legal status, the strata documents if there is a strata, and any suite you are counting on?</p>

<h3>6. Last-minute changes before closing</h3>
<p>Approvals are based on your situation on the day they were issued. Changing jobs, taking on a new loan, running up a card, moving large sums of money or making a big purchase between approval and completion can trigger a re-check, and a failed one can stop the closing. Lenders often re-verify employment and credit shortly before funding.</p>
<p><strong>Self-check:</strong> Between approval and funding, change nothing about your income, debts or accounts without talking to Joshua first.</p>

${cta({ title: "Have a file you want checked before you apply?", text: "A 15-minute call is a good time to run through these six with your real situation. Joshua will tell you where the risks are." })}

<h2>Documents by situation</h2>
<p>The exact list depends on the lender, but the following is a reliable starting point. Joshua will tell you which items your file needs, and will send a secure upload link for the sensitive ones. Please do not email financial documents.</p>
<h3>If you are employed</h3>
<ul>
<li>Government-issued photo ID.</li>
<li>A recent pay stub and a letter of employment confirming position, pay and status.</li>
<li>Recent tax documents from the Canada Revenue Agency (CRA).</li>
<li>Statements showing your down payment and where it has been.</li>
</ul>
<h3>If you are self-employed</h3>
<ul>
<li>Several years of personal tax returns with notices of assessment.</li>
<li>Business financial statements and, for an incorporated business, corporate records.</li>
<li>Proof that you owe the CRA nothing, or a plan if you do.</li>
<li>Down payment statements, as above.</li>
</ul>
<h3>If you are new to Canada</h3>
<ul>
<li>Proof of status and work authorization, and ID.</li>
<li>Employment documents and, where available, a record of your credit history, whether Canadian or alternative. Your options may depend on your status and on the lender.</li>
<li>Down payment statements, including how funds were brought into Canada.</li>
</ul>
<p>The <a href="/new-to-canada-mortgage/">guide to mortgages for people new to Canada</a> explains the options in more detail.</p>

<h2>A checked approval versus a guessed one</h2>
<p>A pre-approval that is based on a quick conversation tells you what might be possible. A pre-approval that has been checked, with income documents reviewed, credit examined and the down payment traced, tells you what a lender is likely to do. The difference is the whole point of preparing. Most of the six problems above come to light in the second kind and surface only as costly surprises in the first.</p>
<p>If you want to see where you stand before you speak to anyone, the readiness quiz, which will be available on the <a href="/mortgage-calculators/#quiz">calculators page</a>, is designed to point you to the right next step. You will see your result first, and then you can choose whether to book a call.</p>

<h2>What a clean file looks like over time</h2>
<ol>
<li><strong>The first conversation:</strong> goals, income, debts, down payment and timeline.</li>
<li><strong>Document gathering:</strong> the items above, reviewed for gaps.</li>
<li><strong>Pre-approval:</strong> a verified approval, not a guess.</li>
<li><strong>Offer and conditions:</strong> the property is reviewed, and the lender appraises it.</li>
<li><strong>Final approval and legal work:</strong> your lawyer or notary prepares the transfer and mortgage documents.</li>
<li><strong>Funding and possession:</strong> the mortgage funds, and you receive the keys.</li>
</ol>
<p>Nothing on that list happens quickly if a file has a problem at step two. The reason to find it there is that it is then still free to fix.</p>

${callout("The one-line version", "<p>Know your income documents, your debts, your credit, your down payment's history, your property's status and your plan to keep everything the same until closing. If any of those is a question mark, <a href=\"/contact/\">contact Joshua</a> before you apply.</p>")}
`;

export default {
  slug: "/mortgage-application-checklist/",
  h1: "Mortgage application checklist: the six things that kill applications",
  lede: "Most applications fail on paperwork, ratios and surprises, not on price. Here are the six problems that sink files, and how to check each one first.",
  crumb: "Application checklist", nav: "/first-time-home-buyer-bc/", body,
  faqs: [
    { q: "Why are mortgage applications denied?", a: "The usual reasons are income that cannot be documented the way the lender needs, debts that push your ratios too high, credit problems, a down payment without a clear source, or a property that does not meet the lender's rules. Each one can be checked before you apply." },
    { q: "How long should my down payment be in my account?", a: "Lenders commonly want to see about 90 days of history so the source is clear. Newer funds, such as a gift or a sale of an asset, can usually be accepted if they are properly documented. Joshua can tell you what your lender will need." },
    { q: "Do car loans really affect my mortgage?", a: "Yes. The payment counts as a monthly debt and reduces how much a lender will approve, often by more than borrowers expect. Leases and loans on a vehicle count the same way. Include every payment when you estimate what you can afford." },
    { q: "Can I change jobs while my mortgage is being approved?", a: "It is risky. Lenders approve you based on your employment at the time and often verify it again before funding. If a change is unavoidable, tell Joshua before you make it, so that the file can be handled properly and you know the risk." },
    { q: "What should I not do after I am approved?", a: "Avoid new credit, large purchases, moving big sums between accounts, and changes to employment until the mortgage has funded. A lender can re-check your credit and income before closing, and a surprise at that stage can delay or stop the deal. When in doubt, ask Joshua first." }
  ]
};
