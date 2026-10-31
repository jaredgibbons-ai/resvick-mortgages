import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("check")}

<h2>Two questions, then the right check for you</h2>
<p>Most people who land here don't need a long questionnaire. They need to know which of five situations they're actually in, because the rules, the traps and the best first move are different for each one. That's what the two questions above do. Do you own a home today, and what's on your mind? From there, you're sent to the check that fits, and it takes about two minutes.</p>
<p>There are six checks in total. Five are scored: <a href="/purchase-readiness-check/">purchase readiness</a> for anyone buying, <a href="/renewal-check/">the renewal check</a> for a term that's ending, <a href="/equity-check/">the equity check</a> for people who want to use the value in their home, <a href="/investor-check/">the investor check</a> for a rental purchase, and <a href="/self-employed-check/">the self-employed check</a> for anyone whose income comes from a business. The sixth, <a href="/lender-match/">lender match</a>, isn't scored at all. It asks what matters to you in a mortgage and tells you which kind of lender and rate tends to fit that answer.</p>

<h2>Why you see your result before you give us anything</h2>
<p>Here's the deal with most online mortgage quizzes: you answer twelve questions, and then a form appears asking for your email before it will tell you anything. That's a trade, and it's not a fair one, because you've already done the work. So these checks run the other way round. You answer, you see your score, your band and your numbers right there on the page, and nothing has been sent anywhere. The calculations happen in your browser.</p>
<p>After the result, there's one more button. It offers a written version of the same result, with Joshua's notes on what to do next, and that one does ask for your name and email so he can send it. It's optional. Plenty of people take the number and go. If you'd like the written version, you tick a box that says exactly what you're agreeing to, and nothing is pre-ticked for you. Whether you'd like a call afterwards is a separate box, and that one starts unticked too.</p>

<h2>What a score out of 100 actually means</h2>
<p>Each scored check adds up your answers into a number out of 100 and gives it a band name, so you have something to hold on to. The bands are plain English: things like "Ready now", "Close, with a few things to sort" and "Worth a conversation first". A high score doesn't mean you're approved. A lender still has to verify your income, your credit and the property, and no quiz can do that. A low score doesn't mean you're stuck either. It usually means one or two things need to happen in a particular order, and the result will tell you which ones.</p>
<p>The scoring isn't a secret. Every question comes with a short "why this matters" note, and the things that weigh most are the things a lender weighs most: how stable your income is, how much debt you carry against it, how long until your deadline, and how much room you have if something goes sideways. If a question feels like it's testing you, it's really just telling you what an underwriter looks at.</p>

<h2>What happens to the written version</h2>
<p>If you ask for the written result, Joshua reads it before it goes out. He's been a mortgage broker for ten years, and he spent five years as an underwriter before that, reading files the way a lender reads them. That shows up in the notes: which answer would change the outcome, what to fix first, and whether there's a program you may not have heard of that fits your situation. If you've asked for a call, he'll suggest a time. If you haven't, you won't get one.</p>
<p>One thing the written version will never be is a sales pitch for a particular product. It points you to the guide on this site that covers your situation, and it tells you what you'd need to have ready before a lender could give you a real answer. That's it.</p>

${callout("Nothing here replaces a real pre-approval", "<p>A check is a map of where you stand. A pre-approval is a lender checking your documents. If you're about to write an offer, you need the second one, and the <a href=\"/mortgage-pre-approval-bc/\">pre-approval guide</a> explains what a real one includes.</p>")}

<h2>Which check should I take if I'm not sure?</h2>
<p>Start with the two questions at the top; they're designed for exactly that. But if you'd rather pick directly, here's a quick way to think about it. If you don't own a home yet and you're planning to buy one to live in, that's the purchase check, whether it's your first home or your fifth. If you own and your term ends in the next couple of years, that's the renewal check. If you own and you want to pull money out, whether to pay off cards, renovate, invest or buy out a partner, that's the equity check. If you're buying a property you won't live in, that's the investor check, even if you also own a home. And if your income comes from your own business, contracting or a corporation, the self-employed check matters more than any of the others, because how lenders read business income is the whole game.</p>
<p>Some checks hand you to another one partway through. The renewal check, for example, asks whether you'd like to roll high-interest debt into your mortgage at renewal; say yes, and it takes you into the equity check, because that's now the question that matters. You'll see a line explaining the hand-off when it happens.</p>

<h2>Where the checks fit with the rest of the site</h2>
<p>Think of this page as a front door. Every check ends by pointing you at the guide that goes deeper: the <a href="/first-time-home-buyer-bc/">first-time buyer hub</a>, the <a href="/mortgage-renewal-bc/">renewal guide</a>, the <a href="/refinance-mortgage-bc/">refinancing guide</a>, the <a href="/investment-property-mortgages-bc/">investment property guide</a> or the <a href="/self-employed-mortgage-bc/">self-employed guide</a>. If you'd rather work the numbers yourself, every figure the checks show comes from the same engine that runs the <a href="/mortgage-calculators/">calculators</a>, so a payment you see here will match the payment you see there.</p>
<p>And if you'd rather skip the whole thing and just talk, that's fine too. A 15-minute call with Joshua is free, and he'd rather hear your situation in your own words than read it off a form. The <a href="/contact/">contact page</a> has the booking link and the phone number.</p>

<h2>A word on fees, since people wonder</h2>
<p>None of this costs anything, and neither does the mortgage advice that follows it. On a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files, and when they do, BC rules say you see the disclosure in writing before you commit. The checks will tell you if your answers point toward that kind of lending, so there are no surprises later.</p>

${cta({ title: "Rather just talk it through?", text: "Skip the quiz. Fifteen minutes on the phone is usually enough to work out where you stand and what to do first." })}
`;

export default {
  slug: "/mortgage-check/",
  h1: "Where are you at with your mortgage? A two-minute check",
  lede: "Two questions send you to the check that fits: buying, renewing, using equity, investing or self-employed. You see your result first. The form afterwards is optional.",
  crumb: "Mortgage check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "Do I have to give my email to see my result?", a: "No. Your score, band and numbers appear on the page the moment you finish, and nothing is sent anywhere, because the check runs in your browser. The form afterwards is only for a written version of the same result with Joshua's notes, and it's entirely optional." },
    { q: "Is a high score the same as being approved?", a: "No. A check can only go on what you tell it. A lender verifies income, credit and the property before anything is approved, and a broker's pre-approval is the step that does that. Treat the score as a map of where you stand and what to sort out first, not as a decision." },
    { q: "Which check do I take if I own a home and want to buy a rental?", a: "The investor check. It's built around what lenders ask on a non-owner-occupied purchase: the down payment, your reserves, how rent will be counted and your plan for the property. If your real question is about the home you live in, the renewal or equity check will fit better." },
    { q: "What does Joshua do with my answers if I ask for the written version?", a: "He reads them, adds notes on what would change your outcome and what to do first, points you to the right guide on this site, and sends it. If you ticked the box asking for a call, he suggests a time. If you didn't, he doesn't call. Your answers are not shared with any lender." },
    { q: "Does the check tell me which lender to use?", a: "The scored checks don't; they tell you where you stand. The lender match quiz is the one that points toward a kind of lender and rate type based on what you say matters to you. Even then it's a starting point for a conversation, not a recommendation for a specific lender." }
  ]
};
