import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>A bankruptcy is an event, not a sentence</h2>
<p>Roughly speaking, a bankruptcy tells a lender two things: that at some point your debts became unmanageable, and that you dealt with them through a legal process rather than leaving creditors unpaid. The first is a risk signal. The second, read carefully, is not. Lenders have been approving mortgages for discharged bankrupts for decades, and the rules they use are well established, if rarely written down in one place.</p>
<p>This page sets out those rules as lender norms rather than law, because that is what they are: expectations about time, re-established credit and explanation that most lenders share and each applies in its own way. It covers the insured and conventional paths, how the down payment changes, what the explanation letter needs to say, and the B and private routes that can hold a home while the file matures. It is written for people who have been discharged, or are about to be, and who want to know when homeownership is realistic again.</p>

<h2>The standard re-establishment expectations</h2>
<p>Three things appear on almost every lender's list for a borrower with a past bankruptcy.</p>
<ol>
<li><strong>Time since discharge.</strong> Lenders count from the discharge date, not the filing date. A lenders and the default insurers typically want to see a period of clean history after discharge before they will consider the file at standard pricing. Two years is the figure most often quoted in the industry, and some lenders want longer for an insured purchase. B lenders will often look at a file sooner.</li>
<li><strong>Re-established credit.</strong> Lenders want to see new credit opened after the discharge and paid perfectly. The industry shorthand is the 2/2/2 rule: two accounts, open about two years, with limits around $2,000 or more. The page on <a href="/build-credit-for-a-mortgage/">building credit for a mortgage</a> explains how to meet it, including secured credit cards for borrowers who cannot yet get an ordinary one.</li>
<li><strong>No new missed payments.</strong> A late payment after discharge is read as a continuation of the old pattern rather than a one-off, and it can reset the clock in a lender's eyes. Perfect payment history after the bankruptcy is the most important single factor.</li>
</ol>
<p>These are norms, and Joshua will confirm the current policy of each lender for your file. The direction is consistent, though: the longer since discharge and the cleaner the new history, the more lenders are available and the better the price.</p>

<h2>How long it stays on your report</h2>
<p>Equifax Canada states that a first bankruptcy remains on a credit report for six years after the discharge date, or seven years after the filing date if there is no discharge, and that a second bankruptcy extends both to fourteen years after discharge (Equifax Canada, 2026). TransUnion's rules are similar. The important point is that you do not have to wait for the entry to disappear. Lenders approve mortgages with a bankruptcy still showing, provided the time and the re-established credit meet their expectations.</p>

<h2>Insured and conventional paths</h2>
<p>There are two routes, and the down payment decides which is open.</p>
<h3>The insured route</h3>
<p>A purchase with less than 20 percent down must be insured through CMHC or a private insurer, and the insurer sets its own standards for past bankruptcies on top of the lender's. In broad terms, the insurers expect the discharge to be some time behind you, credit to be re-established and no further defaults. Where the file meets both the insurer's and the lender's rules, you can buy with as little as 5 percent down at A-lender pricing. The exact combination of time and credit each insurer wants changes, and Joshua checks the current position when you apply rather than quoting a rule that may have moved.</p>
<h3>The conventional route</h3>
<p>With 20 percent or more down, no insurer is involved, and the lender's own policy governs. A lenders still apply their norms on time and credit. B lenders are more flexible and will often consider a file within a year or two of discharge, at a higher rate with a lender fee, for a short term. The <a href="/b-lender-mortgage-bc/">B lender page</a> explains that pricing and the plan back to A.</p>

<h2>Down payment: more helps, and its source matters</h2>
<p>A larger down payment does two things for a post-bankruptcy file. It opens the conventional route, which removes the insurer's rules from the equation, and it reduces the lender's risk, which makes a B lender more willing and sometimes more generous on rate. Where the down payment comes from matters too. Lenders look for a documented history of savings, which itself demonstrates re-established financial habits. A gift from family is acceptable at most lenders with a gift letter. Borrowed down payments are harder to use on a post-bankruptcy file.</p>

<h2>The application story</h2>
<p>Most lenders ask for a letter of explanation with a post-bankruptcy application, and it is worth taking seriously. A good letter is short and factual. It states what caused the bankruptcy, such as a business failure, a divorce, a medical event or a job loss; when it was filed and discharged; what has changed since; and what has been done to rebuild. It does not apologize at length or argue. An underwriter reading it wants to see a cause that is over and a borrower who understands what happened.</p>
<p>Joshua helps write this letter, because he has read many of them from the other side of the desk. The ones that work are the ones that make the rest of the file easy to believe.</p>
${callout("Documents to gather", "<p>Alongside the standard items on the <a href=\"/mortgage-application-checklist/\">application checklist</a>, expect to provide your certificate of discharge, your trustee's statement of receipts and disbursements if asked, statements for every credit account opened since discharge, and the letter of explanation.</p>")}

<h2>B and private routes in the interim</h2>
<p>If you want or need to buy before an A lender will consider the file, two interim routes exist. A B lender will often fund a purchase or a refinance within a year or two of discharge, provided credit has been re-established and the down payment is 20 percent or more. The rate is higher and a lender fee applies, but the terms are short and the exit to an A lender is planned from the start. A private lender will fund sooner still, against equity rather than credit, at a cost that makes sense only for a short period and only with an exit date.</p>
<p>On either route, a broker fee can apply, and BC rules require that it be disclosed to you in writing under BCFSA Form 1A before you commit. On an A-lender mortgage the lender pays the broker and you pay nothing for the service. Joshua shows every cost before any decision.</p>

<h2>If you had a consumer proposal instead</h2>
<p>A consumer proposal is a different legal process with a different reporting period and somewhat different lender treatment. If your situation was a proposal rather than a bankruptcy, the page on <a href="/mortgage-after-consumer-proposal/">getting a mortgage after a consumer proposal</a> is the one to read. For a general picture of how lenders weigh credit of all kinds, the page on <a href="/bad-credit-mortgage-bc/">bad credit mortgages</a> covers the full range.</p>

<h2>Where to start</h2>
<p>The first step is to look at your credit report together, confirm the discharge date, and count what has been re-established since. From that, Joshua can tell you which tier of lender would consider the file today, what it would cost, and what the timeline to A-lender pricing looks like. If the answer is "not yet", you leave with a plan and a date rather than a refusal. <a href="/contact/">Book a 15-minute call</a> whenever you are ready.</p>

${cta({ title: "Discharged and rebuilding?", text: "Book a 15-minute call. Joshua will tell you how your file reads today, which lenders would consider it, and what to do over the next year to reach standard pricing." })}
`;

export default {
  slug: "/mortgage-after-bankruptcy/",
  h1: "Getting a mortgage after bankruptcy in Canada: the re-establishment rules",
  lede: "Discharged and rebuilding? Lenders want time, two clean accounts and a story that adds up. Here is how mortgages after bankruptcy work in BC, including the interim routes.",
  crumbs: [["Home", "/"], ["Self-employed", "/self-employed-mortgage-bc/"], ["After bankruptcy", "/mortgage-after-bankruptcy/"]],
  nav: "/self-employed-mortgage-bc/",
  body,
  faqs: [
    { q: "How long after bankruptcy can I get a mortgage?", a: "Lenders count from the discharge date. A lenders and insurers typically want a clean period of around two years with re-established credit, and some want longer for an insured purchase. B lenders will often consider a file sooner, and private lenders sooner still, at a higher cost. Policies vary, so Joshua checks the current position for your file." },
    { q: "Does a bankruptcy have to be off my credit report first?", a: "No. Equifax Canada keeps a first bankruptcy on the report for six years after discharge, but lenders approve mortgages well before that, provided the time since discharge and the re-established credit meet their expectations. The entry is read alongside the clean history that follows it, not on its own." },
    { q: "What is the 2/2/2 rule?", a: "An industry convention for rebuilt credit: two active accounts, each open about two years, with limits around $2,000 or more, all paid on time. It is not a regulation, and lenders apply it flexibly, but it describes what an underwriter wants to see after a bankruptcy." },
    { q: "Can I buy with 5 percent down after a bankruptcy?", a: "Sometimes. A purchase with less than 20 percent down must be insured, and the insurer applies its own standards on time since discharge and re-established credit. Where the file meets both the insurer's and the lender's rules, 5 percent down at A-lender pricing is possible." },
    { q: "Will I pay a broker fee because of my bankruptcy?", a: "Not if the mortgage is placed with an A lender, where the lender pays the broker and you pay nothing. If your file needs a B or private lender in the interim, a fee can apply and must be disclosed to you in writing under BCFSA Form 1A before you commit." }
  ]
};
