import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";
import { short } from "../lib/short.mjs";

const body = `
${short({
  answer: "Nine quick questions and five numbers show which of three lending routes fits your business: traditional, stated income or alternative. You see all three side by side before any form.",
  who: "Business owners, contractors and anyone whose tax return shows less income than the business really earns.",
  next: "Take the check below with your last two notices of assessment handy. It runs in your browser and sends nothing."
})}
${quizEmbed("selfemployed")}

<h2>What this check measures</h2>
<p>Here's the problem. If you work for yourself, you know it well. Your business does fine. Your accountant keeps your taxable income low. Then a lender reads your tax return and sees a number that wouldn't rent a basement suite. This check is built around that gap.</p>
<p>It starts with nine questions. They cover your credit range and what you're doing: buying, refinancing or renewing. They ask your goal and how long you've worked for yourself. They ask how the business is set up, how you file, and who does your taxes. They ask if there's a co-borrower, and whether you're a first-time buyer or buying new.</p>
<p>Then it asks for five numbers. Those are your gross business revenue and your declared income as a two-year average. It also asks your monthly debt payments, a target price and your down payment.</p>
<p>The order is on purpose. The questions decide which routes are even open to you. The numbers then show what each route would look like. Done the other way round, you'd get a number that might not apply.</p>

<h2>Three routes, side by side</h2>
<p>This is where this check differs from the others. You don't get one affordability number. You get three.</p>
<p>The first is what a traditional lender would likely support from your declared income. The second is what a stated-income lender might support. The third is what an alternative lender might support. Each one shows a rough maximum and a payment based on your numbers.</p>
<p>The point isn't to pick one on the spot. It's to show you there are three doors, not one. The right door depends on how your business is set up, how you file and your timeline. The <a href="/self-employed-mortgage-bc/">self-employed guide</a> explains each route. The <a href="/stated-income-mortgage/">stated income page</a> goes deep on the middle one.</p>
<p>Each preview is marked as an estimate, because it is. Lenders treat add-backs, dividends and retained earnings differently. A lender reads your real documents before anything is confirmed.</p>

<h2>What the bands mean</h2>
<p>"Traditional route open" means your declared income, time in business and filings line up well. A mainstream lender is realistic.</p>
<p>"Stated income likely" means the business is sound but the tax return doesn't show it. A lender who looks at revenue and bank statements makes sense.</p>
<p>"Alternative first, then plan the move" means something points to a B lender today. It might be time in business, your credit or your filing history. The plan is a route back to a mainstream lender later.</p>
<p>None of these judges your business. They show how a lender would see it, and that's a different thing.</p>

<h2>Why the result comes first</h2>
<p>All three previews show up on the page when you finish. Nothing you typed has been sent anywhere. The check runs in your browser.</p>
<p>After the result, there's an optional button for a written breakdown with Joshua's notes. That's where you'd give a name and an email. The consent box starts unticked. So does the box asking for a call.</p>

${callout("Newly self-employed?", "<p>If it's been less than two years, most mainstream lenders can't use your income yet. That's not the end of the road. The <a href=\"/newly-self-employed-mortgage/\">newly self-employed guide</a> covers what's possible in the meantime. The check will send you there if your answers fit.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers against how each lender type really treats business income. He spent five years doing that from the other side of the desk, as an underwriter.</p>
<p>The written breakdown tells you which route he'd start with and why. It lists the documents each route would need. Depending on the route, that could be two years of returns and notices of assessment, financial statements and bank statements. It could also be a business licence or articles of incorporation. It also covers what would move you from one route to a better one. If a fee is involved, you'll know before anything else happens. More on that below.</p>
<p>If you asked for a call, he'll suggest a time. If you asked for the written version only, that's what you'll get. He won't shop your numbers to anyone.</p>

<h2>What the check can't do</h2>
<p>It can't read your financial statements. So it can't know how much of your expenses a lender would add back. It can't tell you what a given lender's stated-income test would decide. And it can't promise a rate on any route.</p>
<p>What it can do is stop you walking into a bank with the wrong papers and the wrong hopes. That's how most self-employed applications go wrong.</p>
<p>Now fees, said plainly, because they matter more here than anywhere else on this site. When a mortgage goes to a mainstream (A) lender, the lender pays the broker. You pay nothing for the service. On B-lender and private files, lender fees are normal and broker fees can apply. BC rules require written disclosure on a BCFSA Form 1A before you commit. The <a href="/how-mortgage-brokers-get-paid/">how brokers get paid</a> page lays it all out.</p>
<p>Not sure this is your check? The <a href="/mortgage-check/">two-question router</a> will sort it out. The <a href="/mortgage-calculators/">calculators</a> are there if you'd like to run numbers yourself. The <a href="/contact/">contact page</a> is there if you'd rather talk.</p>

${cta({ title: "Three routes is a lot to weigh on your own", text: "Fifteen minutes with your last two notices of assessment nearby is usually enough to pick a starting point." })}
`;

export default {
  slug: "/self-employed-check/",
  h1: "Self-employed check: which lending route fits your business?",
  lede: "Nine questions, then five numbers. The result previews three lending routes side by side, on the page, before any form.",
  crumb: "Self-employed check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "Why does this check ask the questions before the numbers?", a: "Because the questions decide which lending routes are open to you, and the numbers only mean something inside a route. Two years of declared income matters a lot to a traditional lender and much less to a stated-income one. Asking in this order means the three previews at the end actually apply to you." },
    { q: "What's a stated-income mortgage, in one sentence?", a: "It's a mortgage where the lender assesses your income from your business's revenue, bank statements and the reasonableness of the figure, rather than only from the taxable income on your return. It usually needs a larger down payment, and the lender still has to find the stated figure believable for your trade." },
    { q: "I'm incorporated and pay myself dividends. Does that hurt me?", a: "Not necessarily, but it changes which lenders fit. Some mainstream lenders work from your personal T1 figures; some will consider corporate financial statements and a share of retained earnings; some won't. The check asks how you're structured and how you file so the written version can point at the lenders whose rules suit that." },
    { q: "Does the check tell me what the fees would be on a B-lender route?", a: "No figure, because fees depend on the lender and the file. What it does is tell you plainly if your answers point toward B or private lending, where lender fees are normal and broker fees can apply, so you aren't surprised. Any fee is disclosed in writing on BCFSA Form 1A before you commit." },
    { q: "My accountant minimizes my income on purpose. Should I change that before applying?", a: "Maybe, and it's a real conversation to have with your accountant, because a higher declared income means more tax. Some clients file a year or two at a higher figure before a purchase; others use a stated-income route and keep the tax planning. The written version will set out both paths so you can take them to your accountant." }
  ]
};
