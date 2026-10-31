import { cta, callout } from "../lib/site.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Resvick Aftercare keeps an eye on your mortgage after it funds. You get an annual review, plain-language notes on Bank of Canada decisions, rate watching before renewal and a call about six months before your term ends.",
  who: "Joshua's clients, and anyone who wants their mortgage managed instead of forgotten until the renewal letter arrives.",
  next: "Not a client yet? Set up a <a href=\"/mortgage-renewal-reminder/\">free renewal reminder</a>, or book a 15-minute call."
})}
<h2>The problem with set-and-forget mortgages</h2>
<p>Here's how most mortgages go. You set it up once and sign. Then you don't think about it again until a renewal letter lands in the mailbox.</p>
<p>Between those two dates, nobody looks at the mortgage for you. Your income changes. Your family changes. Rates move. Your home gains or loses value. The original plan quietly drifts out of date.</p>
<p>The lender has your signature, so it has no reason to call. And the broker who set it up has often moved on to the next file.</p>
<p>That gap is where people lose options. A renewal offer that shows up with three weeks to go leaves almost no time to compare. A life change, like a new baby or a job move, goes unexamined until it becomes a problem. A prepayment privilege sits unused for five years.</p>
<p>None of that is dramatic alone. Add it up, though, and it's the difference between a mortgage that's managed and one that just sits there.</p>
<p>Joshua Resvick built Resvick Aftercare, his aftercare program, to close that gap. He's spent five years as an underwriter and ten as a broker, and funded more than 1,000 mortgages. His view is simple. Funding day is the start of the relationship, not the end.</p>

<h2>What the program includes</h2>
<p>Think of the program as a handful of habits applied to every client's mortgage. Each one has a plain purpose.</p>
<ul>
<li><strong>An annual review against your goals.</strong> Once a year, Joshua looks at your mortgage and your plans together. What's changed? What's coming? Does the mortgage still fit? It's about your goals first and your rate second.</li>
<li><strong>Rate watching on your renewal window.</strong> Rates matter most when you can actually act on them. Joshua watches the market as your renewal window gets closer. That way, the first number you see isn't the only one.</li>
<li><strong>Bank of Canada announcements, in plain language.</strong> When the Bank makes a rate decision, you get a short note on what it does and doesn't mean for your mortgage. No jargon, no alarm.</li>
<li><strong>Equity and prepayment check-ins.</strong> Homes and balances change over the years. A regular look at your equity and your prepayment privileges shows whether you're using what you're entitled to. The <a href="/prepayment-privileges-and-penalties/">prepayment privileges and penalties guide</a> explains those terms.</li>
<li><strong>Life-change triggers.</strong> A new job, a growing family, a separation, a plan to rent out a property or help a child buy. These are reasons to call right away, not at the next review. Many of the best mortgage decisions happen in the weeks after a life event. Many of the worst happen because nobody asked the right questions.</li>
</ul>

<h2>How the annual review works</h2>
<p>The review is kept simple on purpose, because a simple review actually happens. It covers the same few questions every year.</p>
<ol>
<li><strong>What's changed?</strong> Income, household, debts, home value and plans for the next few years.</li>
<li><strong>Where does the mortgage stand?</strong> Balance, rate, term, maturity date and how much prepayment room your contract gives you.</li>
<li><strong>What's coming?</strong> A renewal in the next year or two, a planned purchase, a renovation, a rental or a change in work.</li>
<li><strong>What should we do about it?</strong> Sometimes the answer is nothing, and that's a perfectly good result. Sometimes it's a prepayment, a fresh renewal plan or a talk about equity.</li>
</ol>
<p>Want a sense of your equity before the conversation? The <a href="/home-equity-estimator/">home equity estimator</a> gives you a starting point. It's an estimate, and the review tests it against your real numbers.</p>

${cta({ title: "Start with the first conversation", text: "Aftercare begins when your mortgage is arranged. If you are not yet a client, a 15-minute call is where it starts." })}

<h2>The renewal runway</h2>
<p>If one part of aftercare pays for itself, it's timing. Renewal is when you have the most freedom to change lenders. That freedom is widest well before your maturity date.</p>
<p>Lenders typically open renewal rate holds about 120 days ahead. They only have to send the formal renewal statement at least 21 days before the term ends. Wait for the letter, and you've got a few weeks. Start earlier, and you've got months.</p>
<p>Joshua's program is built around that gap. About six months before your mortgage matures, he reaches out. That leaves time to look at the market, check your options and decide without being rushed.</p>
<p>Around the 120-day mark, when rate holds open up, the options get laid out side by side. You can get a written comparison too: see <a href="/lender-comparison-report/">the Lender Comparison Report</a>.</p>
<p>The <a href="/mortgage-renewal-bc/">mortgage renewal guide</a> covers everything you can do at renewal, including switching lenders. The page on <a href="/early-mortgage-renewal/">early mortgage renewal</a> covers renewing before your maturity date.</p>
<p>This matters more right now than usual. Bank of Canada research (2025) found that most outstanding mortgages in Canada renew in 2025 and 2026. A majority of those renewers face higher payments. Someone with a plan months ahead is far better off than someone who starts when the letter arrives.</p>

<h2>Who the program is for</h2>
<p>It's for anyone who wants their mortgage looked after. A few situations get the most out of it.</p>
<ul>
<li><strong>First-time buyers.</strong> The first five years teach you everything you didn't know at signing. A yearly check-in turns those lessons into decisions.</li>
<li><strong>Homeowners approaching renewal.</strong> The runway above was designed with you in mind.</li>
<li><strong>Self-employed borrowers.</strong> If your income moves year to year, you need to get ahead of how a lender will read it.</li>
<li><strong>Owners with rental income or plans to buy again.</strong> Timing and the shape of your current mortgage decide what comes next.</li>
<li><strong>Anyone whose life is changing.</strong> The program is most useful just before something changes. That's also when people are least likely to be thinking about their mortgage.</li>
</ul>
<p>It isn't for people who want to be sold something. Each review exists to find out whether anything should change. When nothing should, that's the answer you get, and you get it straight.</p>

${callout("A note on scope", "<p>You confirm the details with Joshua when you become a client. That includes how often you hear from him and in what form. This page describes what the program is for and how it's organized.</p>")}

<h2>Not yet a client, or your mortgage is elsewhere</h2>
<p>You don't need to have set up your mortgage with Joshua to use the timing advice on this site. Is your mortgage with a bank or another broker? Set up the free <a href="/mortgage-renewal-reminder/">renewal reminder</a>, and you'll get a nudge as your window opens.</p>
<p>If you'd like to talk about your situation, <a href="/contact/">contact Joshua</a>. You can also read more about him on the <a href="/about-joshua-resvick/">About page</a>.</p>
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
