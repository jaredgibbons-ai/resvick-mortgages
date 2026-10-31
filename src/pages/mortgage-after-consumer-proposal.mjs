import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Proposal versus bankruptcy, in a lender's eyes</h2>
<p>A consumer proposal is a legal arrangement, filed through a licensed insolvency trustee, in which you offer creditors a partial repayment over up to five years instead of declaring bankruptcy. You keep your assets, including a home, and creditors accept less than the full amount. Lenders know the difference between a proposal and a bankruptcy, and they read a proposal slightly more favourably, because it shows an effort to repay. It is still an insolvency event, though, and it is treated as one.</p>
<p>What lenders want to know about a proposal is its status. There are three distinct positions: a proposal that is still being paid, a proposal that has just been completed, and a proposal that is several years behind you. The options are very different at each, and this page takes them in turn. It also explains how long a proposal stays on your credit report, which is shorter than many people fear, and why you do not need to wait for it to disappear.</p>

<h2>How long a proposal stays on your report</h2>
<p>Equifax Canada states that a consumer proposal is removed from your credit report three years after you have paid off all the debts included in it, or six years from the filing date, whichever comes first (Equifax Canada, 2026). The "six years" people worry about is the outer limit for a proposal that took the full five years to pay. A proposal paid off in two years, for example, comes off after five. Either way, lenders approve mortgages with the proposal still showing, so the reporting period is not the thing to plan around.</p>

<h2>Buying during a proposal</h2>
<p>Getting a new mortgage while a proposal is still being paid is rare and difficult. A lenders and the default insurers generally will not consider it, because the borrower is, by definition, still in an insolvency process. A small number of B lenders and private lenders will look at a file in which the proposal is nearly complete and the borrower has a large down payment, and the usual condition is that the remaining proposal balance is paid off from the mortgage proceeds at closing, so that the proposal is completed on the same day the mortgage funds.</p>
<p>That structure is most common on a refinance of a home you already own. If you entered the proposal while owning the home, and the home has gained equity, a refinance that pays out the proposal can be worth exploring, because completing the proposal early starts the credit recovery clock sooner. It is expensive money, though, and it only makes sense with a plan to move to a cheaper lender once the proposal is done and the credit has been rebuilt.</p>

<h2>Just completed: the rebuild clock starts</h2>
<p>The day you receive the certificate of full performance from your trustee is the day lenders start counting. From that point, the expectations are the same ones that apply after a bankruptcy, applied somewhat more gently: time since completion, re-established credit and no new missed payments. The industry shorthand for re-established credit is the 2/2/2 rule, which is two accounts, open about two years, with limits around $2,000 or more, paid perfectly. The page on <a href="/build-credit-for-a-mortgage/">building credit for a mortgage</a> turns that into a practical plan, including secured cards for borrowers who cannot yet get an ordinary one.</p>
<p>Many people finish a proposal with no active credit at all, because every account was included in it. That is the first problem to fix. Without new accounts, there is no post-proposal history for a lender to read, and the clock effectively has not started. Opening two modest accounts in the first months after completion, and paying them on time without exception, is the most valuable thing you can do.</p>

<h2>After completion: realistic lender tiers</h2>
<p>With the proposal completed and credit re-established, the tiers open in sequence.</p>
<ul>
<li><strong>B lenders</strong> will often consider a purchase or refinance within a year or so of completion, with 20 percent or more down and two new accounts in good standing. The rate is higher than A pricing and a lender fee applies, for a short term. The <a href="/b-lender-mortgage-bc/">B lender page</a> explains the structure and the plan back to A.</li>
<li><strong>A lenders and insurers</strong> typically want a longer clean period, commonly described in the industry as around two years after completion, with the 2/2/2 standard met. At that point, an insured purchase with as little as 5 percent down becomes possible, subject to each insurer's current policy.</li>
<li><strong>Private lenders</strong> sit before both, lending against equity for borrowers who need to act before a B lender will, at a cost that only makes sense for a short period.</li>
</ul>
<p>These are norms, not rules. Joshua confirms the current policy of each lender for your file, because the exact time each one wants moves with the market.</p>
${callout("Documents for a post-proposal application", "<p>Your certificate of full performance from the trustee is the central document. Alongside it, expect to provide statements for every account opened since completion, a short letter of explanation covering the cause of the proposal and what has changed, and the standard items on the application checklist. Keep the certificate somewhere safe; lenders will ask for it for years.</p>")}

<h2>The explanation letter</h2>
<p>Lenders usually ask for a letter explaining the proposal. The most effective letters are short and specific: the cause, such as a business downturn, a divorce, a period of illness or a job loss; the dates filed and completed; and the steps taken since, such as the new accounts and the savings history. An underwriter is not looking for remorse. They are looking for a cause that has ended and a borrower who has managed money well since. Joshua helps draft the letter, because he has read many from the underwriting side and knows which ones move a file forward.</p>

<h2>First-time buyers after a proposal</h2>
<p>A proposal does not disqualify you from the first-time buyer programs. The First Home Savings Account, the Home Buyers' Plan, the BC property transfer tax exemption and the GST rebate all have their own eligibility rules, and none of them asks about past insolvency. If you are buying your first home after a proposal, the <a href="/first-time-home-buyer-bc/">first-time home buyer guide</a> explains how to stack them, and the only extra work is on the lender side. For the broader picture of how lenders weigh credit of every kind, the page on <a href="/bad-credit-mortgage-bc/">bad credit mortgages</a> covers the full range, and the page on <a href="/mortgage-after-bankruptcy/">mortgages after bankruptcy</a> describes the closely related rules for that process.</p>

<h2>Fees, honestly</h2>
<p>On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. If your file needs a B or private lender in the period after a proposal, a lender fee is normal and a broker fee can apply. BC rules require that any fee be disclosed to you in writing under BCFSA Form 1A before you commit, and Joshua puts every figure in front of you next to the cost of waiting, so that the decision is made with numbers rather than pressure.</p>
<p>If you are in a proposal, have just completed one, or finished one years ago and are wondering whether a lender will say yes, <a href="/contact/">book a 15-minute call</a>. The first step is simply to look at the certificate date and the credit report together.</p>

${cta({ title: "Finished a proposal and wondering what is possible?", text: "Book a 15-minute call. Joshua will tell you which tier of lender would consider your file today, what it would cost, and the steps to standard pricing." })}
`;

export default {
  slug: "/mortgage-after-consumer-proposal/",
  h1: "Getting a mortgage after a consumer proposal: buying before it is off your report",
  lede: "A consumer proposal does not shelve homeownership for six years. Here is how lenders in BC treat proposals during, just after completion and once they are behind you.",
  crumbs: [["Home", "/"], ["Self-employed", "/self-employed-mortgage-bc/"], ["After a consumer proposal", "/mortgage-after-consumer-proposal/"]],
  nav: "/self-employed-mortgage-bc/",
  body,
  faqs: [
    { q: "How long after a consumer proposal can I get a mortgage?", a: "Lenders count from the completion date on your certificate of full performance. B lenders will often consider a file within a year or so of completion with 20 percent down and re-established credit. A lenders and insurers typically want a longer clean period, commonly described as around two years, with two accounts paid perfectly." },
    { q: "Can I get a mortgage while still paying a consumer proposal?", a: "Rarely, and not at A lenders. A few B and private lenders will consider a file where the proposal is nearly complete, usually on condition that the remaining balance is paid from the mortgage at closing. It is expensive and makes most sense as a refinance of a home you already own." },
    { q: "When does a consumer proposal come off my credit report?", a: "Equifax Canada removes it three years after all the included debts are paid, or six years from the filing date, whichever comes first. You do not need to wait for that: lenders approve mortgages with the proposal still showing once time and rebuilt credit meet their expectations." },
    { q: "Do I need new credit after a proposal?", a: "Yes, and it is the first thing to arrange. Most proposals close every existing account, so without new accounts a lender has no post-proposal history to read. Two modest accounts, paid on time from the first month, are what the 2/2/2 rule looks for." },
    { q: "Will a proposal stop me using first-time buyer programs?", a: "No. The FHSA, the Home Buyers' Plan, the BC property transfer tax exemption and the GST rebate have their own eligibility rules and none asks about past insolvency. The extra work after a proposal is on the lender side only." }
  ]
};
