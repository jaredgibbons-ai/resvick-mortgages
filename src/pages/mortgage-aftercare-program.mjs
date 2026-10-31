import { cta, callout } from "../lib/site.mjs";

const body = `
<h2>The problem with set-and-forget mortgages</h2>
<p>Here's how most mortgages go. You arrange it once, you sign, and then you don't think about it again until a renewal letter lands in the mailbox. Between those two dates, nobody is looking at the mortgage on your behalf. Your income changes, your family changes, interest rates move, your home gains or loses value, and the original plan quietly drifts out of date. The lender has your signature, so it has no particular reason to call. And the broker who arranged it has, in a lot of cases, moved on to the next file.</p>
<p>That gap is where people lose options. A renewal offer that shows up with three weeks to go leaves almost no room to compare. A life change, a new baby or a job move, goes unexamined until it turns into a problem. A prepayment privilege sits unused for five years. None of that is dramatic on its own, but add it up and it's the difference between a mortgage that's managed and a mortgage that just sits there.</p>
<p>Joshua Resvick built Resvick Aftercare, his aftercare program, to close that gap. His view of the job, shaped by five years as an underwriter, ten as a broker and more than 1,000 funded mortgages, is simple: funding day is the start of the relationship, not the end of it.</p>

<h2>What the program includes</h2>
<p>Think of the program as a handful of habits applied to every client's mortgage. Each one has a plain purpose.</p>
<ul>
<li><strong>An annual review against your goals.</strong> Once a year, Joshua sits down with your mortgage and your plans together: what's changed, what's coming and whether the mortgage still fits. It's a conversation about your goals first and your rate second.</li>
<li><strong>Rate watching on your renewal window.</strong> Rates matter most at the moment you can actually act on them. Joshua keeps an eye on where the market is as your renewal window approaches, so the first number you see isn't the only number you see.</li>
<li><strong>Bank of Canada announcements, in plain language.</strong> When the Bank of Canada announces a rate decision, you get a short note on what it does and doesn't mean for your mortgage. No jargon, no alarm.</li>
<li><strong>Equity and prepayment check-ins.</strong> Homes and balances change over the years. A periodic look at your equity and at the prepayment privileges in your contract shows whether you're using what you're entitled to. The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties guide</a> explains what those terms mean.</li>
<li><strong>Life-change triggers.</strong> A new job, a growing family, a separation, a plan to rent out a property or help a child buy: these are reasons to call right away, not at the next scheduled review. Many of the best mortgage decisions get made in the weeks after a life event, and many of the worst get made because nobody asked the right questions.</li>
</ul>

<h2>How the annual review works</h2>
<p>The review is kept deliberately simple, because a simple review actually happens. It runs through the same few questions every year.</p>
<ol>
<li><strong>What's changed?</strong> Income, household, debts, home value, plans for the next few years.</li>
<li><strong>Where does the mortgage stand?</strong> Balance, rate, term, maturity date, and how much prepayment room your contract gives you.</li>
<li><strong>What's coming?</strong> A renewal in the next year or two, a planned purchase, a renovation, a rental, a change in work.</li>
<li><strong>What should we do about it?</strong> Sometimes the answer is nothing, and that's a perfectly good result. Sometimes it's a prepayment, a fresh plan for the renewal window, or a conversation about equity.</li>
</ol>
<p>If you'd like a sense of your equity before the conversation, the <a href="/home-equity-estimator/">home equity estimator</a> gives you a starting point. It's an estimate, and the review is where it gets tested against your real numbers.</p>

${cta({ title: "Start with the first conversation", text: "Aftercare begins when your mortgage is arranged. If you are not yet a client, a 15-minute call is where it starts." })}

<h2>The renewal runway</h2>
<p>If there's one part of aftercare that pays for itself, it's timing. Renewal is the point where you have the most freedom to change lenders, and that freedom is widest well before your maturity date. Lenders typically open renewal rate holds about 120 days ahead, and they're only required to send the formal renewal statement at least 21 days before the term ends. Wait for the letter and you've got a few weeks. Start earlier and you've got months.</p>
<p>Joshua's program is built around that difference. About six months before your mortgage matures, he reaches out so there's time to look at the market, check your options and decide without anyone rushing you. Around the 120-day mark, when rate holds open up, the options get laid out side by side, including a written comparison if you want one: see <a href="/lender-comparison-report/">the Lender Comparison Report</a>. The full picture of what you can do at renewal, including switching lenders, is on the <a href="/mortgage-renewal-bc/">mortgage renewal guide</a>, and the question of renewing before your maturity date is covered on the page about <a href="/early-mortgage-renewal/">early mortgage renewal</a>.</p>
<p>This matters more right now than it usually would. Research from the Bank of Canada (2025) found that most mortgages outstanding in Canada come up for renewal in 2025 and 2026, and that a majority of renewers face higher payments. Someone who's had a plan for months is in a far better spot than someone who first thinks about it when the letter arrives.</p>

<h2>Who the program is for</h2>
<p>The program is for anyone who wants their mortgage looked after, but a few situations get the most out of it.</p>
<ul>
<li><strong>First-time buyers.</strong> The first five years teach you everything you didn't know at signing. An annual check-in turns those lessons into decisions.</li>
<li><strong>Homeowners approaching renewal.</strong> The runway above was designed with you in mind.</li>
<li><strong>Self-employed borrowers</strong> whose income moves from year to year, and who need to get ahead of how a lender will read it.</li>
<li><strong>Owners with rental income or plans to buy again</strong>, where timing and the structure of the existing mortgage shape what comes next.</li>
<li><strong>Anyone whose life is changing.</strong> The program is most useful right when something is about to change, which is also exactly when people are least likely to be thinking about their mortgage.</li>
</ul>
<p>It isn't for people who want to be sold something. The whole point of each review is to find out whether anything should change. When nothing should, that's the answer you get, and you get it straight.</p>

${callout("A note on scope", "<p>The details of each element, such as how often you hear from Joshua and in what form, are confirmed with him directly when you become a client. This page describes the intent of the program and how it is organized.</p>")}

<h2>Not yet a client, or your mortgage is elsewhere</h2>
<p>You don't need to have arranged your mortgage with Joshua to benefit from the timing advice on this site. If your mortgage is with a bank or another broker, you can set up a free reminder, and the <a href="/mortgage-renewal-reminder/">renewal reminder</a> will give you a nudge as your window opens. If you'd like to talk about your situation, <a href="/contact/">contact Joshua</a>. You can also read more about him and his background on the <a href="/about-joshua-resvick/">About page</a>.</p>
`;

export default {
  slug: "/mortgage-aftercare-program/",
  h1: "Resvick Aftercare: your mortgage, actively managed",
  lede: "After funding, the work continues: annual reviews, rate monitoring, Bank of Canada updates and a renewal plan six months early.",
  crumb: "Resvick Aftercare", nav: "/about-joshua-resvick/", body,
  faqs: [
    { q: "Does the aftercare program cost extra?", a: "No. It's part of how Joshua works with his clients. On a mortgage placed with an A lender, the lender pays the broker and you pay nothing for the service. See <a href=\"/how-mortgage-brokers-get-paid/\">how brokers get paid</a> for the details and the exceptions." },
    { q: "Can I use it if my mortgage is with another lender or broker?", a: "Non-clients are welcome to ask questions and to sign up for the free renewal reminder. The full program, with annual reviews and renewal planning, is designed for the mortgages Joshua arranges. If yours is elsewhere, a call is the best way to see what makes sense." },
    { q: "What if my situation changes between reviews?", a: "Call. A new job, a separation, a growing family or a plan to rent out a property are reasons to talk right away, because decisions made soon after a change tend to shape the options available later. You don't need to wait for the annual review." },
    { q: "When will I hear about my renewal?", a: "The aim is to start around six months before your mortgage matures, well ahead of the 120-day window when rate holds open and the 21-day statement a lender must send. Confirm the exact arrangement with Joshua when you work together." }
  ]
};
