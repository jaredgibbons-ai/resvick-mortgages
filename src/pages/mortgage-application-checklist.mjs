import { createRequire } from "node:module";
import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";
const RM = createRequire(import.meta.url)("../assets/js/engine.js");
const base = { annualIncome: 100000, ratePct: 4.5, amortYears: 25, down: 50000, propertyTaxMonthly: 300, heatMonthly: 100, condoFeesMonthly: 0 };
const clean = RM.affordability({ ...base, debtsMonthly: 0 });
const withCar = RM.affordability({ ...base, debtsMonthly: 600 });
const $0 = (x) => "$" + Math.round(x).toLocaleString("en-CA");

const body = `
${short({
  answer: "Most mortgage applications fail on paperwork, not price. Six problems cause most of it: income you can't prove the lender's way, forgotten debts, credit surprises, an untraceable down payment, the property, and changes before closing.",
  who: "Anyone about to apply for a mortgage or pre-approval, or about to remove conditions on an offer.",
  next: "Run the six self-checks below. Then gather the documents for your situation."
})}
<h2>Most applications die on paperwork, not price</h2>
<p>When a mortgage application fails, it's rarely because of the rate. It fails because something on the file didn't match what the lender needed to see.</p>
<p>Maybe the income couldn't be proven the way the lender wants. Maybe nobody mentioned a debt. A credit entry might have shown up late. The down payment might have had no paper trail. Or the property didn't fit the lender's rules.</p>
<p>Each of these can be found and fixed early. That's why Joshua Resvick reads a file for these problems first. His background includes five years as an underwriter.</p>
<p>This page lists the six problems that sink the most applications, with a self-check for each. Run through them before you apply, before you make an offer and again before closing. It takes less time than recovering from any one of them.</p>

<h2>The six problems that kill applications</h2>

<h3>1. Income that cannot be proven the lender's way</h3>
<p>A lender doesn't accept what you earn. It accepts what you can document, in the form it wants.</p>
<p>Salaried employees are usually simple. Everyone else faces more questions about how income is averaged and which documents prove it. That includes people paid by commission or bonus, contract workers and the self-employed. Lenders differ on all of this. One lender may count an income source in full while another discounts it.</p>
<p><strong>Self-check:</strong> For every income source you're claiming, can you produce the documents that show it? Can you go back as far as the lender asks? If your income varies, do you know how a lender will average it? Self-employed borrowers should start with the <a href="/self-employed-mortgage-bc/">self-employed mortgage guide</a>.</p>

<h3>2. Forgotten debts, car loans above all</h3>
<p>Lenders count your monthly debt payments against your income. They find every one of them on your credit report.</p>
<p>Car loans and leases are the most common surprise, because people think of them as normal spending. Credit card minimums, lines of credit, student loans, support payments and other financing count too.</p>
<p>Here's how much one debt can matter. Take an illustrative household earning $100,000 a year, with $50,000 down. Use a 4.50% rate and a 25-year amortization. Add $300 a month in property tax and $100 in heat.</p>
<p>With no other debts, they could qualify for roughly ${$0(clean.maxPrice)} at the stress-test rate. Add a $600 monthly car payment, and that drops to roughly ${$0(withCar.maxPrice)}. That's about ${$0(clean.maxPrice - withCar.maxPrice)} less buying power. These are estimates, not an approval. The point is the size of the effect.</p>
<p><strong>Self-check:</strong> Write down every monthly payment you make on credit. Then compare the list with your credit report. The <a href="/how-much-mortgage-can-i-afford/">affordability explainer</a> shows how the ratios work.</p>

<h3>3. Credit surprises</h3>
<p>Credit reports hold things people don't expect. Think of an old collection, an account opened in error, a maxed-out card or a missed payment from years ago. Lenders see all of it. A surprise mid-application costs time, and sometimes the approval.</p>
<p><strong>Self-check:</strong> Pull your own credit report before you apply and read every entry. If something looks wrong, dispute it early, because fixes take time.</p>
<p>While your application is in progress, don't open new credit. Don't finance a car or furniture, and don't close old accounts. If your credit needs work, the guide to <a href="/build-credit-for-a-mortgage/">building credit for a mortgage</a> explains where to start.</p>

<h3>4. A down payment without a paper trail</h3>
<p>Lenders check where your down payment came from. A common expectation is about 90 days of history in your account, so the source is clear.</p>
<p>Large deposits with no explanation raise questions. Money that was borrowed, or came from someone else, needs to be disclosed and documented properly.</p>
<p>A gift from family can work. You need a signed gift letter, an immediate-family giver and proof the money moved. A loan dressed up as a gift counts as debt and changes your ratios.</p>
<p>The page on <a href="/gifted-down-payment/">gifted down payments</a> covers the rules. The <a href="/down-payment-guide-bc/">down payment guide</a> covers every accepted source.</p>
<p><strong>Self-check:</strong> Can you show, with statements, where every dollar of your down payment came from and where it has been?</p>

<h3>5. The property itself</h3>
<p>You can be a perfect borrower and still have the file fail on the property. These are the most common issues:</p>
<ul>
<li><strong>A low appraisal.</strong> If the appraisal comes in under your agreed price, the lender lends on the lower number. You cover the gap.</li>
<li><strong>An unregistered suite.</strong> Income from a suite that isn't legal and registered usually counts for nothing at A lenders. If you need suite income to qualify, check its status first. Read about <a href="/how-much-suite-income-will-a-lender-count/">how much suite income a lender will count</a>.</li>
<li><strong>Strata and zoning questions.</strong> Strata finances, upcoming special levies, rental limits and zoning can all affect whether a lender will finance the property.</li>
</ul>
<p><strong>Self-check:</strong> Before you remove conditions, have you checked the property's legal status? Have you read the strata documents, if there's a strata? Have you confirmed any suite you're counting on?</p>

<h3>6. Last-minute changes before closing</h3>
<p>Your approval is based on your situation the day it was issued. Changes between approval and completion can trigger a re-check. That includes a new job, a new loan, a big card balance, moving large sums or a big purchase. A failed re-check can stop the closing. Lenders often re-check employment and credit shortly before funding.</p>
<p><strong>Self-check:</strong> Between approval and funding, don't change anything about your income, debts or accounts without talking to Joshua first.</p>

${cta({ title: "Have a file you want checked before you apply?", text: "A 15-minute call is a good time to run through these six with your real situation. Joshua will tell you where the risks are." })}

<h2>Documents by situation</h2>
<p>Want this as a printable list with boxes to tick? Get the <a href="/mortgage-document-checklist/">free two-page document checklist</a>.</p>
<p>The exact list depends on the lender. The lists below are a reliable starting point. Joshua will tell you which items your file needs, and he'll send a secure upload link for the sensitive ones. Please don't email financial documents.</p>
<h3>If you are employed</h3>
<ul>
<li>Government-issued photo ID.</li>
<li>A recent pay stub, and a letter of employment confirming your position, pay and status.</li>
<li>Recent tax documents from the Canada Revenue Agency (CRA).</li>
<li>Statements showing your down payment and where it has been.</li>
</ul>
<h3>If you are self-employed</h3>
<ul>
<li>Several years of personal tax returns with notices of assessment.</li>
<li>Business financial statements, plus corporate records for an incorporated business.</li>
<li>Proof that you owe the CRA nothing, or a plan if you do.</li>
<li>Down payment statements, as above.</li>
</ul>
<h3>If you are new to Canada</h3>
<ul>
<li>Proof of status and work authorization, plus ID.</li>
<li>Employment documents and, where you have it, a record of your credit history, Canadian or alternative. Your options may depend on your status and the lender.</li>
<li>Down payment statements, including how the money came into Canada.</li>
</ul>
<p>The <a href="/new-to-canada-mortgage/">guide to mortgages for people new to Canada</a> explains the options in more detail.</p>

<h2>A checked approval versus a guessed one</h2>
<p>A pre-approval based on a quick chat tells you what might be possible. A checked pre-approval tells you what a lender is likely to do. That means your income documents were reviewed, your credit was examined and your down payment was traced.</p>
<p>That difference is the whole point of preparing. Most of the six problems above show up in a checked pre-approval. In a guessed one, they only surface later, as costly surprises.</p>
<p>Want to see where you stand before you talk to anyone? Try the <a href="/mortgage-check/">two-minute mortgage check</a>, also linked from the <a href="/mortgage-calculators/#quiz">calculators page</a>. It points you to the right next step. You see your result first, then choose whether to book a call.</p>

<h2>What a clean file looks like over time</h2>
<ol>
<li><strong>The first conversation:</strong> goals, income, debts, down payment and timeline.</li>
<li><strong>Document gathering:</strong> the items above, reviewed for gaps.</li>
<li><strong>Pre-approval:</strong> a verified approval, not a guess.</li>
<li><strong>Offer and conditions:</strong> the property is reviewed, and the lender appraises it.</li>
<li><strong>Final approval and legal work:</strong> your lawyer or notary prepares the transfer and mortgage documents.</li>
<li><strong>Funding and possession:</strong> the mortgage funds, and you get the keys.</li>
</ol>
<p>Nothing on that list moves fast if a file has a problem at step two. That's why you want to find it there. At that point, it's still free to fix.</p>

${callout("The one-line version", "<p>Know your income documents, your debts and your credit. Know your down payment's history and your property's status. Then keep everything the same until closing. If any of those is a question mark, <a href=\"/contact/\">contact Joshua</a> before you apply.</p>")}
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
