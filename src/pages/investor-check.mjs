import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("investor")}

<h2>What this check measures</h2>
<p>A rental purchase is underwritten as a business decision dressed up as a mortgage. The lender wants to know four things: how deep your reserves are, what you actually intend to do with the property, how strong your own position is, and whether you've done this before. So that's how this check is built. There are no number screens at the start; instead it asks about eleven questions: how many properties you own today, whether you own your home and how much equity is in it, what you have for a down payment, what's left after that, where your credit sits, what the plan is, your timeline, how well you know the area you're buying in, how you'd get out or refinance later, who'll manage the property, and how you'd rate your own knowledge.</p>
<p>One answer is an escape hatch. If the plan turns out to be "actually, this is a home to live in", the check sends you to the <a href="/purchase-readiness-check/">purchase check</a> instead, because an owner-occupied purchase is a different file with different rules, including a much smaller minimum down payment.</p>

<h2>What the result shows</h2>
<p>You get a score out of 100, a band and a recommended focus. The bands are "Investment ready", "Nearly there" and "Build the base first". The focus is the one thing in your answers that would most change how a lender sees you: reserves, usually, or the down payment, or a credit band, or simply a plan that needs writing down. The result also lists your strengths, because an investor check that only points at gaps isn't telling the whole story.</p>
<p>What it doesn't show is an affordability number, on purpose. Rental affordability depends on how a lender counts the rent, and lenders count it in different ways and at different shares; the <a href="/how-much-suite-income-will-a-lender-count/">suite income guide</a> and the rental income comparator on the <a href="/mortgage-calculators/">calculators page</a> are where to work that out properly. A single number from a quiz would be a guess dressed up as a fact.</p>

<h2>Why the result comes first</h2>
<p>You see your score, band and focus on the page the moment you finish, and nothing has been sent anywhere; the check runs in your browser. The optional button afterwards offers a written version with Joshua's notes and asks for a name and an email. The consent box starts unticked, and so does the "I'd like a call" box.</p>

${callout("The 20 percent rule, briefly", "<p>High-ratio mortgage insurance isn't available on a purchase you won't live in, so plan on at least 20 percent down, and more at some lenders. Small rentals of two to four units can still be insured up to 80 percent loan-to-value. The <a href=\"/investment-property-mortgages-bc/\">investment property guide</a> has the details and the exceptions.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers the way an underwriter reads a rental file, because that's what he was for five years before he became a broker. The written version tells you how a lender is likely to count the rent on the kind of property you're describing, what reserves they'd want to see, how your existing properties affect the count, and whether your exit plan holds up. If the plan involves a strategy with its own rules, such as <a href="/brrrr-strategy-canada/">BRRRR</a> or converting your current home to a rental, it'll point you to the guide that covers it. If you've asked for a call, he'll suggest a time.</p>
<p>If you're planning a short-term rental, the written version will also be honest with you about that: many lenders count that income differently or not at all, and BC's rules on short-term rentals changed in 2024. Better to know before you buy than after.</p>

<h2>What the check can't do</h2>
<p>It can't see your credit, so it goes on the band you give it. It can't know a specific lender's door limit or seasoning rules, and those vary. And it can't tell you whether a particular property cash-flows; that's your spreadsheet, not this page. What it can do is tell you, honestly, whether you're in a position to be looking, and what to shore up if you're not.</p>
<p>On fees: on a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service, including on a rental purchase. Fees only come up on certain B-lender and private-lender files, and BC rules say you see the disclosure in writing first. If you already own a rental and the question is about renewing it, the <a href="/rental-property-mortgage-renewal/">rental renewal guide</a> is the better page. Not sure this is your check? The <a href="/mortgage-check/">two-question router</a> will sort it, and the <a href="/contact/">contact page</a> is there if you'd rather talk.</p>

${cta({ title: "Ready to run a real property through the numbers?", text: "Bring the listing and your result to a 15-minute call. Joshua will show you how a lender would count the rent." })}
`;

export default {
  slug: "/investor-check/",
  h1: "Investor check: are you ready to buy a rental property?",
  lede: "Eleven questions on reserves, intent, strength and experience. Score, band and a recommended focus on the page, before any form.",
  crumb: "Investor check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "Why doesn't the investor check give me an affordability number?", a: "Because rental affordability depends on how a lender counts the rent, and lenders use different methods and different shares. A single number would be a guess. The rental income comparator on the calculators page shows how the same rent changes the result under each method, which is the honest way to look at it." },
    { q: "I own my home with lots of equity but have little cash. Where do I stand?", a: "Better than you might think, and the check accounts for it. Equity in a home you live in can often be used toward a rental down payment through a refinance or a line of credit, within the lending limits. The written version explains how that works and what it costs, and the equity check covers the mechanics." },
    { q: "Does it matter whether I'll manage the property myself?", a: "To a lender, not much directly; to your result, a little, because a plan that includes management is a plan that's been thought through. Where it matters more is cash flow, since management fees change the numbers, and that's worth having in your own spreadsheet before you buy." },
    { q: "I'm buying with a partner who isn't on my mortgage. How do I answer?", a: "Answer for the people who'll be on the rental's mortgage. If that's both of you, use combined figures. If one of you will own it alone, use that person's. Co-ownership of a rental has title and tax wrinkles worth a lawyer's or accountant's read, and the written version will say so." },
    { q: "Is a short-term rental treated the same as a long-term one?", a: "No. Many lenders won't count short-term rental income at all, some want two years of tax returns showing it, and BC's principal-residence rules for short-term rentals changed in 2024. The check asks about your plan so it can flag this, and the short-term rental guide has the full picture." }
  ]
};
