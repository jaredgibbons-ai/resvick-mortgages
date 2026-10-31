import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("equity")}

<h2>What this check measures</h2>
<p>"I want to use my equity" is the start of five different conversations. Someone wants to clear credit cards. Someone wants to renovate. Someone wants to buy a rental, or buy out a partner, or just stop paying a rate that no longer makes sense. The mortgage that fits each of those is different, and so is the cost of getting there. This check sorts out which conversation you're in. It starts with three numbers (your home's rough value, what you still owe, and your monthly non-mortgage debt payments) and shows your loan-to-value live as you type. Then it asks about eight questions: your current rate type, where the mortgage lives, whether you know your payout penalty, whether you already have a line of credit, what the money is for, your timeline, when a lender last looked at your mortgage, and what you want from an advisor.</p>

<h2>The numbers you'll see</h2>
<p>The result shows your score out of 100 and a band, plus a short numbers panel: home value, mortgage balance, loan-to-value, and the equity you could realistically access. That last figure uses the limits that apply to federally regulated lenders, which is up to 80 percent of the home's value on a refinance, and 65 percent for the revolving part of a line of credit. It's an estimate from the value you typed, not an appraisal, and the page says so. If you want to play with the inputs, the <a href="/home-equity-estimator/">home equity estimator</a> does the same calculation with more detail.</p>
<p>If you told the check your rate type and that you're mid-term, it'll also remind you that breaking a fixed term usually carries a penalty, and that the penalty is the number everything else hinges on. The <a href="/mortgage-penalty-calculator/">penalty calculator</a> shows a range; your lender's figure governs.</p>

<h2>What the bands mean</h2>
<p>"Clear case" means the equity is there, the purpose is sound and the costs are likely worth it. "Possible, check the math" is the honest middle: the equity exists, but a penalty, a timeline or a purpose makes it a closer call, and the result tells you which. "Think twice" means the numbers point the other way, at least for now, and the result says why. It's not a refusal. Sometimes the right answer is a line of credit instead of a refinance, or waiting for renewal, or nothing at all, and a check that can say "nothing" is more useful than one that can't.</p>

<h2>Why the result comes first</h2>
<p>You see everything on the page the moment you finish, and nothing is sent anywhere; the check runs in your browser. Afterwards there's an optional button for a written version with Joshua's notes, which is where you'd give a name and an email. The consent box starts unticked, and so does the "I'd like a call" box. The answer is yours either way.</p>

${callout("Consolidating debt: the question the payment hides", "<p>Rolling $40,000 of cards into a mortgage drops the monthly payment a lot. It also spreads that $40,000 over 25 years. The check asks what you'd use the equity for so it can show total interest beside the payment, because the payment alone tells you the wrong story. The <a href=\"/refinance-to-pay-off-debt/\">debt consolidation guide</a> goes through it properly.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers against the thing that decides every refinance: the break-even. Penalty plus costs on one side, savings or benefit on the other, month by month. The written version tells you whether the math is likely to work for your purpose and timeline, what a lender would want to see, and whether a different product (a line of credit, a second mortgage, a <a href="/blend-and-extend-mortgage/">blend and extend</a> with your current lender) would get you there cheaper. If you've asked for a call, he'll suggest a time.</p>
<p>If you haven't had anyone look at your mortgage since it funded, that's normal and it's also the problem. His <a href="/mortgage-aftercare-program/">aftercare program</a> exists so the equity conversation happens at the right moment rather than by accident.</p>

<h2>What the check can't do</h2>
<p>It can't value your home; it works from your estimate, which is why the result says "your estimate" next to it. It can't calculate your actual penalty, because your lender chooses the method. And it can't tell you whether a specific lender will approve a specific purpose; some restrict what they'll lend for, and that's a conversation. What it can do is tell you, in two minutes, whether you're having the right conversation at all.</p>
<p>On fees: on a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files, and BC rules say you see the disclosure in writing first. If the check suggests your file points that way, it'll say so. The <a href="/refinance-mortgage-bc/">refinancing guide</a> is the long version of everything here; the <a href="/mortgage-check/">two-question router</a> is there if this wasn't your check; and the <a href="/contact/">contact page</a> is there if you'd rather talk.</p>

${cta({ title: "Equity there, but the penalty's the question?", text: "Fifteen minutes with your lender's penalty figure in hand is usually enough to settle it either way." })}
`;

export default {
  slug: "/equity-check/",
  h1: "Equity check: can you use your home's value, and should you?",
  lede: "Three numbers and about eight questions. Your loan-to-value, accessible equity and a score appear on the page, before any form.",
  crumb: "Equity check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "How does the check know what my home is worth?", a: "It doesn't. It uses the value you type and labels it as your estimate. No valuation data is looked up, nothing is fetched, and nothing is sent anywhere. A lender will order an appraisal before any refinance, and that figure, not yours or the check's, is the one that counts." },
    { q: "What's the most equity I could access?", a: "At a federally regulated lender, a refinance can go up to 80 percent of the home's appraised value, and the revolving portion of a home equity line of credit is capped at 65 percent. The check applies those limits to your figures. Alternative lenders have their own limits, and the result will tell you if your answers point that way." },
    { q: "I'm mid-term on a fixed rate. Does that change the result?", a: "Usually it's the deciding factor. Breaking a fixed term typically triggers a penalty, often calculated on an interest rate differential, and that cost has to be paid back by the benefit of refinancing before you're ahead. The check flags it and points you to the penalty calculator for a range; your lender's figure governs." },
    { q: "Is a line of credit better than a refinance?", a: "Sometimes. A HELOC leaves your existing mortgage alone and lets you borrow as you go, which suits renovations and irregular needs; a refinance replaces the mortgage and suits one lump sum at a fixed rate. The check asks what the money is for so it can point you to the right one, and the written version explains the trade-off for your case." },
    { q: "Will a refinance to pay off debt actually save me money?", a: "It depends on whether the habits that built the debt change, and on how long the new balance is spread over. The monthly payment nearly always drops; the total interest can go either way. The check shows total interest beside the payment for exactly that reason, and the debt consolidation guide walks through the full comparison." }
  ]
};
