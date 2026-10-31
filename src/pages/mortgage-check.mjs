import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("check")}

${short({ answer: "Answer two quick questions and you'll go to the check that fits you. You see your score and your numbers on the page right away. You never have to give an email to see them.", who: "Anyone buying, renewing, using equity, investing or self-employed who wants a quick read on where they stand.", next: "Answer the two questions below. Rather talk? <a href=\"/contact/\">Book a 15-minute call</a>." })}

<h2>Two questions, then the right check for you</h2>
<p>Keep it short. Most people don't need a long questionnaire. They need to know which of five situations they're in. The rules, the traps and the best first move differ for each one.</p>
<p>That's what the two questions above sort out. Do you own a home today? What's on your mind? From there, you go to the check that fits. It takes about two minutes.</p>
<p>There are six checks in total. Five of them give you a score.</p>
<ul>
<li><a href="/purchase-readiness-check/">Purchase readiness</a> is for anyone buying.</li>
<li><a href="/renewal-check/">The renewal check</a> is for a term that's ending.</li>
<li><a href="/equity-check/">The equity check</a> is for using the value in your home.</li>
<li><a href="/investor-check/">The investor check</a> is for a rental purchase.</li>
<li><a href="/self-employed-check/">The self-employed check</a> is for anyone whose income comes from a business.</li>
</ul>
<p>The sixth, <a href="/lender-match/">lender match</a>, isn't scored at all. It asks what matters to you in a mortgage. Then it tells you which kind of lender and rate tends to fit.</p>

<h2>Why you see your result before you give us anything</h2>
<p>Here's how most online mortgage quizzes work. You answer twelve questions. Then a form pops up asking for your email before it tells you anything. That's not a fair trade, because you've already done the work.</p>
<p>So these checks work the other way round. You answer. You see your score, your band and your numbers right there on the page. Nothing gets sent anywhere. The math happens in your browser.</p>
<p>After the result, there's one more button. It offers a written version of the same result, with Joshua's notes on what to do next. That one does ask for your name and email, so he can send it. It's optional. Plenty of people take the number and go. If you want the written version, you tick a box that says exactly what you're agreeing to. Nothing is pre-ticked for you. A call afterwards is a separate box, and it starts unticked too.</p>

<h2>What a score out of 100 actually means</h2>
<p>Each scored check adds up your answers into a number out of 100. It also gives you a band name, so you have something to hold on to. The bands are plain English. Think "Ready now", "Close, with a few things to sort" and "Worth a conversation first". A high score doesn't mean you're approved. A lender still has to verify your income, your credit and the property, and no quiz can do that. A low score doesn't mean you're stuck either. It usually means one or two things need to happen in a particular order, and the result will tell you which ones.</p>
<p>The scoring isn't a secret. Every question comes with a short "why this matters" note. The things that weigh most are the things a lender weighs most. How steady is your income? How much debt do you carry against it? How long until your deadline? How much room do you have if something goes sideways? If a question feels like it's testing you, it's really just telling you what an underwriter looks at.</p>

<h2>What happens to the written version</h2>
<p>If you ask for the written result, Joshua reads it before it goes out. He's been a mortgage broker for ten years, and he spent five years as an underwriter before that, reading files the way a lender reads them. That shows up in the notes. He points out which answer would change the outcome and what to fix first. He also flags any program you may not have heard of that fits your situation. If you've asked for a call, he'll suggest a time. If you haven't, you won't get one.</p>
<p>One thing the written version will never be is a sales pitch for a particular product. It points you to the guide on this site that covers your situation. It tells you what you'd need before a lender could give you a real answer. That's it.</p>

${callout("Nothing here replaces a real pre-approval", "<p>A check is a map of where you stand. A pre-approval is a lender checking your documents. If you're about to write an offer, you need the second one, and the <a href=\"/mortgage-pre-approval-bc/\">pre-approval guide</a> explains what a real one includes.</p>")}

<h2>Which check should I take if I'm not sure?</h2>
<p>Start with the two questions at the top. They're built for exactly that. If you'd rather pick directly, here's a quick guide.</p>
<ul>
<li><strong>Buying a home to live in?</strong> Take the purchase check, whether it's your first home or your fifth.</li>
<li><strong>Own, and your term ends in the next couple of years?</strong> Take the renewal check.</li>
<li><strong>Own, and want to pull money out?</strong> Take the equity check. That covers paying off cards, renovating, investing or buying out a partner.</li>
<li><strong>Buying a place you won't live in?</strong> Take the investor check, even if you also own a home.</li>
<li><strong>Income from your own business, contracting or a corporation?</strong> The self-employed check matters more than any other. How lenders read business income is the whole game.</li>
</ul>
<p>Some checks hand you to another one partway through. For example, the renewal check asks if you'd like to roll high-interest debt into your mortgage. Say yes, and it takes you into the equity check. That's now the question that matters. You'll see a line explaining the hand-off when it happens.</p>

<h2>Where the checks fit with the rest of the site</h2>
<p>Think of this page as a front door. Every check ends by pointing you to the guide that goes deeper. That might be the <a href="/first-time-home-buyer-bc/">first-time buyer hub</a> or the <a href="/mortgage-renewal-bc/">renewal guide</a>. It might be the <a href="/refinance-mortgage-bc/">refinancing guide</a>, the <a href="/investment-property-mortgages-bc/">investment property guide</a> or the <a href="/self-employed-mortgage-bc/">self-employed guide</a>.</p>
<p>Rather work the numbers yourself? Every figure in the checks comes from the same engine that runs the <a href="/mortgage-calculators/">calculators</a>. A payment you see here will match the payment you see there.</p>
<p>And if you'd rather skip the whole thing and just talk, that's fine too. A 15-minute call with Joshua is free, and he'd rather hear your situation in your own words than read it off a form. The <a href="/contact/">contact page</a> has the booking link and the phone number.</p>

<h2>A word on fees, since people wonder</h2>
<p>None of this costs anything, and neither does the mortgage advice that follows it. On a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files. When they do, BC rules say you see the disclosure in writing before you commit. The checks will tell you if your answers point toward that kind of lending, so there are no surprises later.</p>

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
