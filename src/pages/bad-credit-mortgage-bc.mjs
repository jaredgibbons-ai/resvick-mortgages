import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({ answer: "Yes, you can get a mortgage in BC with bad credit. It changes which lender says yes, how much you need down and what it costs. For most people it's a two-year problem, not a permanent one.", who: "Anyone with missed payments, collections, or a past proposal or bankruptcy on their report.", next: "Read the rebuild rule below, then <a href=\"/contact/\">contact Joshua</a> to look at your report together." })}

<h2>Credit changes the lender, not the conversation</h2>
<p>A low credit score doesn't mean you can't get a mortgage in BC. It means three things are different from what someone with clean credit would see. The lender that approves you changes. So does the down payment you need, and the price you pay.</p>
<p>Those are real consequences, and this page won't pretend otherwise. But you can plan around them. In most cases, they're temporary.</p>
<p>Credit scores in Canada run from 300 to 900. Lenders group them into bands. Where the lines sit varies by lender and by product. The exact cut-offs aren't published in a way that can be quoted reliably. So this page describes the bands in general terms. It only names thresholds that come from an official source.</p>
<p>What matters more than the number is the story behind it. What happened? When? Is it over? What have you done since?</p>

<h2>What each range tends to unlock</h2>
<p>Treat this as a map, not a rulebook. Lenders change their thresholds. Two lenders in the same tier can disagree about the same file.</p>
<ul>
<li><strong>Strong credit.</strong> The full A-lender market is open to you. That includes insured mortgages with as little as 5 percent down, at the best pricing. Credit isn't what limits you. Income and ratios are.</li>
<li><strong>Mid-range credit.</strong> A lenders will generally still look at the file, sometimes with conditions. The default insurers will often still insure it. Here's one published anchor. CMHC's refinance program for adding a secondary suite needs a minimum score of 600 for at least one borrower. That gives a sense of where insured lending starts. A lenders generally expect more than that for a purchase. That gap is where a broker's knowledge of each lender's policy matters.</li>
<li><strong>Bruised credit.</strong> Maybe you had a stretch of missed payments or a collection. Maybe there's a past consumer proposal or bankruptcy. A lenders mostly say no, and the file moves to the B tier. There, credit is weighed alongside equity and income, rather than treated as a gate. The page on <a href="/b-lender-mortgage-bc/">B lender mortgages</a> explains the pricing.</li>
<li><strong>Damaged credit.</strong> Recent defaults, active collections, a very recent bankruptcy. B lenders may say no too. The option left is a <a href="/private-mortgage-lending-bc/">private mortgage</a>. It lends against your equity, not your credit. It's a short term at a high cost while you rebuild.</li>
</ul>

<h2>What else helps</h2>
<p>Lenders at every tier weigh credit against the rest of the file. A weak score with strong points elsewhere can get approved. A weak score on its own often can't.</p>
<ul>
<li><strong>Equity or down payment.</strong> The more of the property you own, the less the lender loses if things go wrong. A 25 or 35 percent down payment opens doors that 20 percent doesn't. On a refinance, a low loan-to-value ratio does the same job.</li>
<li><strong>Steady income.</strong> A long time in the same job or business, with income that's easy to document, tells an underwriter the payments will be made.</li>
<li><strong>Low ratios.</strong> A mortgage well inside the debt limits leaves room for error. Lenders notice.</li>
<li><strong>An explanation that adds up.</strong> A credit problem with a clear cause and a clear end reads very differently from a pattern with no story. Think of a job loss, an illness or a separation, followed by a clean stretch. Most bruised-credit applications include a short letter of explanation. Joshua helps you write it.</li>
</ul>

<h2>Collections, judgments and arrears</h2>
<p>Specific items on a report are handled in specific ways. How they're handled matters more than the score.</p>
<ul>
<li><strong>Collections.</strong> Most lenders want unpaid collections settled before funding. Some will accept proof of payment at closing. A paid collection still shows on your report for a while. But at most lenders, it stops being a roadblock.</li>
<li><strong>Judgments.</strong> A court judgment usually has to be paid and cleared before a lender will advance money. That's because it can attach to the property.</li>
<li><strong>Mortgage arrears.</strong> Late mortgage payments weigh more than late credit card payments. They predict exactly what a mortgage lender fears. A recent stretch of mortgage arrears pushes a file toward B or private lending. That lasts until a clean year or two has passed.</li>
<li><strong>Income tax owing.</strong> An unpaid CRA balance is taken seriously. The tax authority can rank ahead of a lender. Expect to pay it before or at funding.</li>
</ul>
<p>The credit bureaus decide how long items stay on a report. Here's what Equifax Canada states (Equifax Canada, 2026):</p>
<ul>
<li>Late payments stay for up to six years from the date reported.</li>
<li>Collections and charged-off accounts stay for six years after the first missed payment.</li>
<li>Judgments stay for six years.</li>
<li>A first bankruptcy stays for six years after discharge.</li>
<li>A consumer proposal stays for three years after all debts are paid, or six years from filing, whichever comes first.</li>
</ul>
<p>Paying an item doesn't remove it sooner. But it does change how a lender reads it.</p>

<h2>The rebuild rule lenders use</h2>
<p>When lenders judge rebuilt credit, they commonly look for what the industry calls the 2/2/2 rule. That means two active credit accounts. Each has been open for about two years. Each has a limit of around $2,000 or more. And all of them are paid on time. It is a broker rule of thumb, not a published rule, and lenders vary.</p>
<p>It's a convention, not a regulation. Lenders apply it with some flexibility. But it describes what an underwriter wants to see after a credit event. You need enough recent history, on enough accounts, to show the problem is behind you. The page on <a href="/build-credit-for-a-mortgage/">how to build credit for a mortgage</a> turns the rule into a 12-to-24-month plan.</p>
${callout("Renewing with changed credit", "<p>Has your credit gotten worse since your mortgage was arranged? Your current lender will often renew anyway. A renewal with the same lender usually doesn't involve a new credit check. Switching lenders is where your credit gets looked at again. The page on <a href=\"/mortgage-renewal-denied/\">what happens when a renewal is denied</a> explains both cases and the order to do things in.</p>")}

<h2>B versus private: where the line falls</h2>
<p>Choosing between a B lender and a private lender comes down to three questions. How recent is the credit event? How much equity or down payment do you have? Can your income be documented?</p>
<p>Say the credit event is over and a year or two old. You have 20 percent down and documented income. That's usually a B file. Now say the event is recent or still going. Or you have lots of equity but no income you can document. That's more often a private file.</p>
<p>The cost gap between the two is big. B lenders charge a higher rate than A lenders, plus a lender fee, on a one- or two-year term. Private lenders charge a lot more again, with lender and broker fees, often on a one-year term.</p>
<p>Both are outside the A tier, so a broker fee can apply on either. BC rules say it must be disclosed to you in writing, on BCFSA Form 1A, before you commit. On an A-lender mortgage, by contrast, the lender pays the broker and you pay nothing.</p>

<h2>The timeline back to A</h2>
<p>Bruised credit is usually a two-year problem, not a permanent one. A typical path looks like this:</p>
<ol>
<li>Settle any open collections and judgments.</li>
<li>Open or keep two accounts and pay them perfectly.</li>
<li>Keep your balances low compared with your limits.</li>
<li>Let the clean history build up.</li>
</ol>
<p>During that time, a B or private mortgage holds the home. At the first renewal where your credit meets A-lender standards, the mortgage moves to A pricing with no penalty.</p>
<p>Joshua treats every bruised-credit mortgage as a file with a date on it. The <a href="/mortgage-application-checklist/">application checklist</a> shows what to gather now. The <a href="/mortgage-calculators/#affordability">affordability calculator</a> shows what your income supports once credit isn't the limit. Aftercare includes a check at the yearly review, and again about six months before maturity, on whether your credit has recovered enough to make the move.</p>
<p>Has your credit been the reason you've put off a call? <a href="/contact/">Contact Joshua</a>. He's seen every kind of credit report. The first step is just to look at yours together.</p>

${cta({ title: "Not sure what your credit allows?", text: "Book a 15-minute call. Joshua will read your report the way an underwriter does. He'll tell you which tier of lender fits today and lay out the steps back to bank pricing." })}
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
