import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${short({ answer: "This two-minute check scores how ready you are to buy, out of 100. It looks at what you can afford and whether you can prove it the way a lender needs. You see your result right away, with no email needed.", who: "Anyone thinking about buying a home in BC in the next year or so.", next: "Answer the questions below. If your result says to sort a few things first, the <a href=\"/first-time-home-buyer-bc/\">first-time buyer hub</a> shows the order." })}

${quizEmbed("purchase")}

<h2>What this check measures</h2>
<p>Buying is two tests in one. The first one you already know: can you afford it? The second one trips people up: can you prove it, the way a lender needs, by the date you need it? This check scores both.</p>
<p>It starts with four numbers. Those are your household income, what you've saved, what you pay on debts each month, and a target price if you have one. Then it asks about ten questions on the things that decide a purchase file. How long have you been in your job? Where did the down payment come from? How does your credit look? Do you have a pre-approval? How soon do you plan to write an offer?</p>
<p>Every question has a "why this matters" note under it. That's on purpose. By the end, you'll know what an underwriter looks at and why. That's worth more than the score itself.</p>

<h2>The numbers you'll see</h2>
<p>Once you've answered, you'll see your score out of 100 and a band. You'll also see your affordability figures. That's roughly how much mortgage your income supports under today's qualifying rules. It shows what that means for a purchase price with your down payment, plus an estimated monthly payment.</p>
<p>The figures use the same engine as the <a href="/mortgage-calculators/">calculators</a> on this site, including the stress test. So they'll match what you'd get there. They're labelled as an estimate, because that's what they are. A lender still has to verify everything.</p>
<p>If your down payment is under 20 percent, the check also shows what mortgage insurance would add. It tells you whether you're under the price cap for an insured purchase. The <a href="/buying-with-5-percent-down/">5 percent down guide</a> explains those rules in full.</p>

<h2>What the bands mean</h2>
<p>"Ready now" means your income, down payment and documents line up. The sensible next move is a real pre-approval.</p>
<p>"Close, with a few things to sort" is the most common result. It usually means one or two fixable items. Maybe your down payment needs a longer paper trail. Maybe a debt is worth paying down first. Or your credit report hasn't been checked in a while.</p>
<p>"Worth a conversation first" means something bigger needs attention before a lender will say yes. Your result will tell you what.</p>
<p>None of the bands is a verdict. They're a reading of where you are today, based on what you told the check.</p>

<h2>Why the result comes before the form</h2>
<p>You did the work, so you get the answer. Nothing you type is sent anywhere. The check runs in your browser.</p>
<p>After the result, there's an optional button for a written version with Joshua's notes. That's the only point where you're asked for a name and email, and the consent box starts unticked. If you'd like him to call, there's a separate box for that, also unticked. If you'd rather just take the number and go, that's completely fine.</p>

${callout("First-time buyer? Your programs aren't in the score", "<p>The FHSA, the Home Buyers' Plan, the GST rebate and the BC transfer tax exemption can change your cash position a lot. But each has its own eligibility test. The check flags that you may qualify. The <a href=\"/first-time-buyer-programs-bc/\">programs guide</a> walks you through each one.</p>")}

<h2>What Joshua does with the written version</h2>
<p>If you ask for it, he reads your answers himself. He's been a broker for ten years, and an underwriter for five before that. So he reads a file the way a lender does. He looks for the thing that would stop it, so it can be fixed before anyone else sees it. The written version tells you what that thing is, if there is one, and the order to do things in.</p>
<p>For a buyer, that order matters. Talking to a broker before you start viewing homes changes which homes you should look at. Your real buying power and real cash needs are rarely the numbers people guess. The <a href="/first-time-home-buyer-bc/">first-time buyer hub</a> lays out that sequence.</p>
<p>The written version won't push a product. It'll point you to the guides that fit. And it'll tell you what to have ready for a <a href="/mortgage-pre-approval-bc/">real pre-approval</a>, which is what you actually need before an offer.</p>

<h2>A few honest limits</h2>
<p>The check can't see your credit report, so it goes on what you tell it. It can't know how a particular lender treats overtime, bonuses or a new job, and lenders do differ. And it can't tell you what you'll be approved for. Only a lender can do that.</p>
<p>What it can do is take you from "no idea" to "I know what to fix and who to call" in about two minutes. That's a decent trade.</p>
<p>About fees. On a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files. BC rules say you see the disclosure in writing first. The <a href="/how-mortgage-brokers-get-paid/">how brokers get paid</a> page has the full picture.</p>
<p>Not sure this is the right check? The <a href="/mortgage-check/">two-question router</a> will point you to the right one. If you'd rather talk, the <a href="/contact/">contact page</a> is the quickest route.</p>

${cta({ title: "Got your result?", text: "Bring it to a 15-minute call. Joshua will tell you what a lender is likely to see and what to do about it." })}
`;

export default {
  slug: "/purchase-readiness-check/",
  h1: "Purchase readiness check: how ready are you to buy in BC?",
  lede: "Four numbers and about ten questions. You get a score, a band and your affordability figures on the page, before any form. The written version with Joshua's notes is optional.",
  crumb: "Purchase readiness check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "How accurate is the affordability number?", a: "It applies the standard lender ratios and the stress test to the figures you type, using the same engine as the site's calculators. It's a planning estimate. Lenders differ in how they count income and debts, and a pre-approval checked against real lender policy is the figure to rely on before you write an offer." },
    { q: "I don't know my target price. Can I leave it blank?", a: "Yes. The price question is optional. If you leave it blank, the check works from your income, debts and down payment to show you a rough maximum instead, which is often the more useful number anyway when you're early in the process." },
    { q: "Does a low score mean I can't buy?", a: "No. It usually means one or two things need to happen first, in a particular order: a longer history on the down payment, a debt paid down, a credit report checked. The result names them. Plenty of people move from the lowest band to the top one in a few months without changing their income at all." },
    { q: "Will this run a credit check?", a: "No. Nothing here touches your credit file, and nothing is sent anywhere unless you ask for the written version. Even then, Joshua only pulls credit as part of a real application, with your written consent, which is a separate step you'd agree to later." },
    { q: "I'm buying with a partner or a co-signer. Whose numbers do I enter?", a: "Enter the household's combined income and debts, since that's how a lender will look at the application. If someone is co-signing rather than living in the home, the check can't model that properly, so read the co-signer guide and mention it in the notes if you ask for the written version." }
  ]
};
