import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>Credit changes the lender, not the conversation</h2>
<p>A low credit score does not mean you cannot get a mortgage in BC. It means the lender that will approve you, the down payment you will need and the price you will pay are different from what a borrower with clean credit would see. Those are real consequences, and this page does not minimize them. But they are consequences you can plan around, and in most cases they are temporary.</p>
<p>Credit scores in Canada run from 300 to 900, and lenders group them into bands. Where the lines sit varies by lender and by product, and the exact cut-offs are not published in a way that can be quoted reliably, so this page describes the bands generally and names only the thresholds that come from an official source. What matters more than the number is the story behind it: what happened, when, whether it is finished, and what has been done since.</p>

<h2>What each range tends to unlock</h2>
<p>Treat the following as a map, not a rulebook. Lenders change their thresholds, and two lenders in the same tier can disagree about the same file.</p>
<ul>
<li><strong>Strong credit.</strong> The full A-lender market is open, including insured mortgages with as little as 5 percent down and the best available pricing. Credit is not the limiting factor; income and ratios are.</li>
<li><strong>Mid-range credit.</strong> A lenders will generally still consider the file, sometimes with conditions, and the default insurers will often still insure it. One useful published anchor: CMHC's refinance program for adding a secondary suite requires a minimum credit score of 600 for at least one borrower, which gives a sense of where insured lending starts to become possible. A lenders generally expect more than that for a purchase, and the gap is where a broker's knowledge of individual lender policy matters.</li>
<li><strong>Bruised credit.</strong> A period of missed payments, a collection, a past consumer proposal or bankruptcy. A lenders mostly decline, and the file moves to the B tier, where credit is weighed alongside equity and income rather than treated as a gate. The page on <a href="/b-lender-mortgage-bc/">B lender mortgages</a> explains the pricing.</li>
<li><strong>Damaged credit.</strong> Recent defaults, active collections, a very recent bankruptcy. B lenders may decline too, and the remaining option is a <a href="/private-mortgage-lending-bc/">private mortgage</a>, which lends against equity rather than credit, for a short term at a high cost, while the credit is rebuilt.</li>
</ul>

<h2>What else compensates</h2>
<p>Lenders at every tier balance credit against the other parts of the file. A weak score with strong compensating factors can be approved where a weak score alone would not be.</p>
<ul>
<li><strong>Equity or down payment.</strong> The more of the property you own, the less the lender loses if the mortgage fails. A 25 or 35 percent down payment opens doors that 20 percent does not, and on a refinance a low loan-to-value ratio does the same work.</li>
<li><strong>Income stability.</strong> A long tenure in the same job or the same business, with income that is easy to document, reassures an underwriter that the payments will be made.</li>
<li><strong>Low ratios.</strong> A mortgage well within the debt service limits leaves room for error, and a lender notices.</li>
<li><strong>An explanation that adds up.</strong> A credit problem with a clear cause and a clear end, such as a job loss, an illness or a separation, followed by a clean period, reads very differently from a pattern with no story. A short letter of explanation is part of most bruised-credit applications, and Joshua helps write it.</li>
</ul>

<h2>Collections, judgments and arrears</h2>
<p>Specific items on a report are handled in specific ways, and the handling matters more than the score.</p>
<ul>
<li><strong>Collections.</strong> Most lenders want unpaid collections settled before funding, and some will accept proof of payment at closing. A paid collection still shows on the report for a time, but it stops being an obstacle at most lenders.</li>
<li><strong>Judgments.</strong> A court judgment usually has to be paid and discharged before a lender will advance funds, because it can attach to the property.</li>
<li><strong>Mortgage arrears.</strong> Late mortgage payments weigh more than late credit card payments, because they predict exactly the behaviour a mortgage lender fears. A recent period of mortgage arrears pushes a file toward B or private lending until a clean year or two has passed.</li>
<li><strong>Income tax owing.</strong> An unpaid CRA balance is treated seriously, because the tax authority can rank ahead of a lender. Expect to pay it before or at funding.</li>
</ul>
<p>How long items stay on a report is set by the bureaus. Equifax Canada states that late payments stay for up to six years from the date reported, collections and charged-off accounts for six years after the first delinquency, judgments for six years, a first bankruptcy for six years after discharge, and a consumer proposal for three years after all debts are paid or six years from filing, whichever comes first (Equifax Canada, 2026). Paying an item does not remove it sooner, but it does change how a lender reads it.</p>

<h2>The rebuild rule lenders use</h2>
<p>Lenders judging rebuilt credit commonly look for what the industry calls the 2/2/2 rule: two active credit accounts, each open for about two years, with limits in the region of $2,000 or more, all paid on time. It is a convention rather than a regulation, and lenders apply it with some flexibility, but it describes what an underwriter wants to see after a credit event: enough recent history, on enough accounts, to show that the problem is behind you. The page on <a href="/build-credit-for-a-mortgage/">how to build credit for a mortgage</a> turns the rule into a 12-to-24-month plan.</p>
${callout("Renewing with changed credit", "<p>If your credit has worsened since your mortgage was arranged, your current lender will often renew anyway, because a renewal with the same lender usually does not involve a new credit check. Switching lenders is where credit is re-examined. The page on <a href=\"/mortgage-renewal-denied/\">what happens when a renewal is denied</a> explains both cases, and the order to do things in.</p>")}

<h2>B versus private: where the line falls</h2>
<p>The choice between a B lender and a private lender for a bruised-credit file comes down to three questions: how recent the credit event is, how much equity or down payment you have, and whether your income can be documented. A credit event that is finished and a year or two old, with 20 percent down and documented income, is usually a B file. A credit event that is recent or still active, or a file with very large equity but no documentable income, is more often a private file.</p>
<p>The cost difference between the two is substantial. B lenders charge a higher rate than A lenders plus a lender fee, on a one- or two-year term. Private lenders charge considerably more again, with lender and broker fees, on terms that are often a year. Because both are outside the A tier, a broker fee can apply on either, and BC rules require it to be disclosed to you in writing under BCFSA Form 1A before you commit. On an A-lender mortgage, by contrast, the lender pays the broker and you pay nothing.</p>

<h2>The timeline back to A</h2>
<p>Bruised credit is usually a two-year problem rather than a permanent one. A typical path looks like this: settle outstanding collections and judgments, open or maintain two accounts and pay them perfectly, keep utilization low, and let the clean history accumulate. During that period, a B or private mortgage holds the home. At the first renewal where the credit meets A-lender standards, the mortgage is switched to A pricing without penalty.</p>
<p>Joshua treats every bruised-credit mortgage as a file with a date on it. The <a href="/mortgage-application-checklist/">application checklist</a> shows what to gather now, and the <a href="/mortgage-calculators/#affordability">affordability calculator</a> shows what the income supports once credit is no longer the limit. Aftercare includes checking, at the annual review and again about six months before maturity, whether the credit has recovered enough to make the move.</p>
<p>If your credit is the reason you have been putting off a call, <a href="/contact/">book a 15-minute conversation</a>. Joshua has seen every kind of credit report, and the first step is simply to look at yours together.</p>

${cta({ title: "Not sure what your credit allows?", text: "Book a 15-minute call. Joshua will read your report the way an underwriter does, tell you which tier of lender fits today, and lay out the steps back to A pricing." })}
`;

export default {
  slug: "/bad-credit-mortgage-bc/",
  h1: "Bad credit mortgages in BC: what is possible at every score",
  lede: "Bruised credit does not end the conversation. It changes the lender, the down payment and the plan. Here is what each credit range can do in BC, and how long the road back usually takes.",
  crumbs: [["Home", "/"], ["Self-employed", "/self-employed-mortgage-bc/"], ["Bad credit", "/bad-credit-mortgage-bc/"]],
  nav: "/self-employed-mortgage-bc/",
  body,
  faqs: [
    { q: "What credit score do I need for a mortgage in Canada?", a: "There is no single number. A lenders generally expect a solid mid-range score or better, and the insurers have their own floors; CMHC's secondary suite refinance program, for example, requires 600 for at least one borrower. Below A-lender thresholds, B lenders weigh credit against equity and income, and private lenders look mainly at equity." },
    { q: "Can I get a mortgage with collections on my credit report?", a: "Often, yes, but most lenders want the collections paid before or at funding. A paid collection still appears on the report for a time, but it stops blocking approval at most lenders. Unpaid collections usually push the file to the B or private tier." },
    { q: "How long does bad credit affect a mortgage application?", a: "Equifax Canada reports that late payments and collections stay on a report for up to six years, and a first bankruptcy for six years after discharge. Lenders care less about the entry than about the clean history since, and many will consider a file after two years of rebuilt credit." },
    { q: "Is a larger down payment enough to offset bad credit?", a: "It helps a great deal. A down payment of 25 to 35 percent reduces the lender's risk and opens B lenders that would decline at 20 percent. It does not replace credit entirely at A lenders, which still apply score thresholds, but it changes which tier is available and the price." },
    { q: "Will I pay a broker fee because of my credit?", a: "Not if the mortgage is placed with an A lender, where the lender pays the broker. If your file needs a B or private lender, a fee can apply, and it must be disclosed in writing under BCFSA Form 1A before you commit. Joshua shows every cost before you decide." }
  ]
};
