import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("selfemployed")}

<h2>What this check measures</h2>
<p>If you work for yourself, you already know the problem. Your business does fine, your accountant keeps your taxable income sensible, and then a lender looks at your tax return and sees a number that wouldn't rent you a basement suite. This check is built around that gap. It asks about nine questions first: your credit band, what you're doing (buying, refinancing, renewing), your goal, how long you've been self-employed, how the business is structured, how you file, who prepares your taxes, whether there's a co-borrower, and whether you're a first-time buyer or buying new construction. Then it asks for five numbers: gross business revenue, your declared income as a two-year average, your monthly debt payments, a target price and your down payment.</p>
<p>The order is deliberate. The questions decide which lending route is even open to you; the numbers then show what each route would look like. Doing it the other way round gives you a number that may not apply.</p>

<h2>Three routes, side by side</h2>
<p>This is where the self-employed check differs from the others. Instead of one affordability figure, the result previews three: what a traditional lender working from your declared income would likely support, what a stated-income approach might support, and what an alternative lender might support, each with a rough maximum and payment on your numbers. The point isn't to pick one on the spot. It's to show you that there are three doors, not one, and that the right door depends on your structure, your filings and your timeline. The <a href="/self-employed-mortgage-bc/">self-employed guide</a> explains each route; the <a href="/stated-income-mortgage/">stated income page</a> goes deep on the middle one.</p>
<p>Each preview is labelled as an estimate, because it is. Lenders differ in how they treat add-backs, dividends and retained earnings, and a lender reads your actual documents before anything is confirmed.</p>

<h2>What the bands mean</h2>
<p>"Traditional route open" means your declared income, time in business and filings line up well enough that a mainstream lender is realistic. "Stated income likely" means the business is sound but the tax return doesn't show it, and a lender who looks at revenue and bank statements is the sensible path. "Alternative first, then plan the move" means something (time in business, a credit band, the filing history) points to a B lender today, with a route back to a mainstream lender later. None of these is a judgement on your business. They're a reading of how a lender would see it, which is a different thing.</p>

<h2>Why the result comes first</h2>
<p>All three previews appear on the page when you finish, and nothing you typed has been sent anywhere; the check runs in your browser. After the result, there's an optional button for a written breakdown with Joshua's notes, which is where you'd give a name and an email. The consent box starts unticked; so does the box for a call.</p>

${callout("Newly self-employed?", "<p>If it's been less than two years, most mainstream lenders can't use your income yet, but that's not the end of the road. The <a href=\"/newly-self-employed-mortgage/\">newly self-employed guide</a> covers what's possible in the meantime, and the check will route you there if your answers fit.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers against how each lender type actually treats business income, which is something he spent five years doing from the other side of the desk as an underwriter. The written breakdown tells you which route he'd start with and why, what documents each would need (two years of returns and notices of assessment, financial statements, bank statements, a business licence or articles of incorporation, depending on the route), and what would move you from one route to a better one. If there's a fee involved, you'll know before anything else happens; see below.</p>
<p>If you've asked for a call, he'll suggest a time. If you've asked for the written version only, that's what you'll get. He won't shop your numbers to anyone.</p>

<h2>What the check can't do</h2>
<p>It can't read your financial statements, so it can't know how much of your expenses a lender would add back. It can't tell you what a specific lender's reasonability test on stated income would conclude. And it can't promise a rate for any route. What it can do is stop you walking into a bank branch with the wrong documents and the wrong expectation, which is how most self-employed applications go wrong.</p>
<p>On fees, said plainly because it matters more here than anywhere else on this site: on a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Lender fees are normal, and broker fees can apply, on B-lender and private files, and BC rules require written disclosure (BCFSA Form 1A) before you commit. The <a href="/how-mortgage-brokers-get-paid/">how brokers get paid</a> page lays it out. Not sure this is your check? The <a href="/mortgage-check/">two-question router</a> will sort it. The <a href="/mortgage-calculators/">calculators</a> are there if you'd like to run the numbers yourself, and the <a href="/contact/">contact page</a> is there if you'd rather talk.</p>

${cta({ title: "Three routes is a lot to weigh on your own", text: "Fifteen minutes with your last two notices of assessment nearby is usually enough to pick the starting point." })}
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
