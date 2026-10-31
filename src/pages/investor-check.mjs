import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";
import { short } from "../lib/short.mjs";

const body = `
${quizEmbed("investor")}

${short({
  answer: "Ten questions on your reserves, plan, finances and experience. You get a score, a band and the one thing to work on, right on the page.",
  who: "Anyone thinking about buying a rental property, first or fifth.",
  next: "Take the check below. Then read the <a href=\"/investment-property-mortgages-bc/\">investment property guide</a> for the details."
})}

<h2>What this check measures</h2>
<p>Rentals are different. A rental purchase is a business decision dressed up as a mortgage. The lender wants to know four things. How deep are your reserves? What do you plan to do with the property? How strong is your own position? Have you done this before?</p>
<p>So that's how this check is built. There are no number screens at the start. Instead it asks ten questions.</p>
<ul>
<li>How many properties you own today.</li>
<li>Whether you own your home, and how much equity is in it.</li>
<li>What you have for a down payment, and what's left after that.</li>
<li>Where your credit sits.</li>
<li>What the plan is, and your timeline.</li>
<li>How well you know the area you're buying in.</li>
<li>How you'd get out or refinance later.</li>
<li>Who'll manage the property.</li>
<li>How you'd rate your own knowledge.</li>
</ul>
<p>One answer is an escape hatch. If the plan turns out to be a home to live in, the check sends you to the <a href="/purchase-readiness-check/">purchase check</a> instead. A home you live in is a different file with different rules. That includes a much smaller minimum down payment.</p>

<h2>What the result shows</h2>
<p>You get a score out of 100, a band and a recommended focus. The three bands are Investment ready, Nearly there, and Build the base first.</p>
<p>The focus is the one thing in your answers that would most change how a lender sees you. Usually it's reserves. Sometimes it's the down payment, a credit band or a plan that needs writing down.</p>
<p>The result also lists your strengths. A check that only points at gaps isn't telling the whole story.</p>
<p>What it doesn't show is an affordability number, and that's on purpose. Rental affordability depends on how a lender counts the rent. Lenders count it in different ways and at different shares.</p>
<p>To work that out properly, use the <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> and the rental income comparator on the <a href="/mortgage-calculators/">calculators page</a>. A single number from a quiz would be a guess dressed up as a fact.</p>

<h2>Why the result comes first</h2>
<p>You see your score, band and focus the moment you finish. Nothing is sent anywhere, because the check runs in your browser.</p>
<p>Afterwards, an optional button offers a written version with Joshua's notes. It asks for a name and an email. The consent box starts unticked, and so does the "I'd like a call" box.</p>

${callout("The 20 percent rule, briefly", "<p>High-ratio mortgage insurance isn't available on a purchase you won't live in. So plan on at least 20 percent down, and more at some lenders. Small rentals of two to four units can still be insured up to 80 percent loan-to-value. The <a href=\"/investment-property-mortgages-bc/\">investment property guide</a> has the details and the exceptions.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers the way an underwriter reads a rental file. That was his job for five years before he became a broker.</p>
<p>The written version covers how a lender is likely to count the rent on your kind of property. It covers the reserves they'd want to see and how your other properties affect the count. It also tests whether your exit plan holds up.</p>
<p>If your plan uses a strategy with its own rules, like <a href="/brrrr-strategy-canada/">BRRRR</a> or turning your home into a rental, it points you to the right guide. If you asked for a call, he'll suggest a time.</p>
<p>Planning a short-term rental? The written version will be straight with you about that too. Many lenders count that income differently, or not at all. And BC's short-term rental rules changed in 2024. Better to know before you buy than after.</p>

<h2>What the check can't do</h2>
<p>It can't see your credit, so it goes by the band you give it. It can't know a lender's door limit or seasoning rules, and those vary. It can't tell you whether a property cash-flows, either. That's your spreadsheet, not this page.</p>
<p>What it can do is tell you whether you're in a position to be looking. If you're not, it shows what to shore up.</p>
<p>On fees: on a mortgage with a mainstream (A) lender, the lender pays the broker. You pay nothing for the service, including on a rental. Fees only come up on some B-lender and private-lender files. BC rules say you see the disclosure in writing first.</p>
<p>Already own a rental and need to renew it? The <a href="/rental-property-mortgage-renewal/">rental renewal guide</a> is the better page. Not sure this is your check? The <a href="/mortgage-check/">two-question router</a> will sort it out. The <a href="/contact/">contact page</a> is there if you'd rather talk.</p>

${cta({ title: "Ready to run a real property through the numbers?", text: "Bring the listing and your result to a 15-minute call. Joshua will show you how a lender would count the rent." })}
`;

export default {
  slug: "/investor-check/",
  h1: "Investor check: are you ready to buy a rental property?",
  lede: "Ten questions on reserves, intent, strength and experience. Score, band and a recommended focus on the page, before any form.",
  crumb: "Investor check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "Why doesn't the investor check give me an affordability number?", a: "Because rental affordability depends on how a lender counts the rent, and lenders use different methods and different shares. A single number would be a guess. The rental income comparator on the calculators page shows how the same rent changes the result under each method, which is the honest way to look at it." },
    { q: "I own my home with lots of equity but have little cash. Where do I stand?", a: "Better than you might think, and the check accounts for it. Equity in a home you live in can often be used toward a rental down payment through a refinance or a line of credit, within the lending limits. The written version explains how that works and what it costs, and the equity check covers the mechanics." },
    { q: "Does it matter whether I'll manage the property myself?", a: "To a lender, not much directly; to your result, a little, because a plan that includes management is a plan that's been thought through. Where it matters more is cash flow, since management fees change the numbers, and that's worth having in your own spreadsheet before you buy." },
    { q: "I'm buying with a partner who isn't on my mortgage. How do I answer?", a: "Answer for the people who'll be on the rental's mortgage. If that's both of you, use combined figures. If one of you will own it alone, use that person's. Co-ownership of a rental has title and tax wrinkles worth a lawyer's or accountant's read, and the written version will say so." },
    { q: "Is a short-term rental treated the same as a long-term one?", a: "No. Many lenders won't count short-term rental income at all, some want two years of tax returns showing it, and BC's principal-residence rules for short-term rentals changed in 2024. The check asks about your plan so it can flag this, and the short-term rental guide has the full picture." }
  ]
};
