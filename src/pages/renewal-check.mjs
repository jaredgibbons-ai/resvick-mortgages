import { short } from "../lib/short.mjs";
import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${short({ answer: "This check scores how ready you are to shop your renewal, and turns your maturity date into a simple timeline. Many borrowers can now switch lenders at renewal without redoing the stress test. Your result shows on the page, with no email needed.", who: "Anyone whose mortgage term ends in the next year or so.", next: "Answer the questions below, then read the <a href=\"/mortgage-renewal-bc/\">renewal guide</a> for the full process." })}

${quizEmbed("renewal")}

<h2>What this check measures</h2>
<p>Renewal is a free moment. It's the one time in a mortgage when you're truly free to shop, and most people waste it. The letter arrives with a rate on it, and signing takes thirty seconds. This check is built to slow that moment down.</p>
<p>It asks four numbers and six questions across five themes. Timing is how long until your term ends. Your situation covers missed payments or big life changes. Income is how stable your pay is today. Flexibility is how much room you'd have if the payment went up. And horizon is how long you expect to stay in the home. Each question comes with a note on why a lender, or you, should care.</p>
<p>One question is really a lesson in disguise. It asks whether you know that most borrowers can now switch lenders at renewal without the stress test. A lot of people don't. It's the biggest reason renewals cost more than they should. The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> has the full explanation. The check just makes sure you've heard of it.</p>

<h2>What the result shows</h2>
<p>You get a score out of 100 and a band. For a renewal, the bands are about readiness to compare, not whether you'll be approved. They are "Well placed to shop", "Shop, but sort these first" and "Talk before you sign anything".</p>
<p>The result also shows where you are in the timeline. Most lenders open renewals about 120 days before maturity. The renewal statement has to arrive before the term ends. So the check turns your maturity date into a plain to-do list. It shows when to get quotes, when to decide, and when it's too late to switch without rushing. The <a href="/early-mortgage-renewal/">early renewal guide</a> covers what happens if you want to move sooner.</p>

<h2>The hand-off to the equity check</h2>
<p>Partway through, the check asks if you'd like to roll high-interest debt into your mortgage when you renew. If you say yes, it sends you to the <a href="/equity-check/">equity check</a> with a short note explaining why.</p>
<p>That's not the quiz being fussy. A renewal that also takes money out is a refinance. A refinance is approved differently. The amount matters and the loan-to-value matters. And the stress-test exemption for a straight switch doesn't apply once you borrow more. Different question, different check.</p>

<h2>Why you see the result first</h2>
<p>Nothing you answer is sent anywhere. The check runs in your browser and shows your score and timeline on the page.</p>
<p>After that, there's an optional button for a written version with Joshua's notes on your renewal. That's where you'd give a name and email. The consent box starts unticked, and so does the box asking for a call. If you only wanted the number, you've got it.</p>

${callout("The auto-renewal trap", "<p>If a term reaches maturity without a signed renewal, it commonly rolls into an open term. That rate is usually much higher than a negotiated one. It's how the contract works, not a penalty, and the only cure is starting early. The <a href=\"/mortgage-renewal-letter-explained/\">renewal letter guide</a> shows what to look for on the letter itself.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers and does what he does for every client at renewal. He works backwards from your maturity date.</p>
<p>The written version tells you what to ask your current lender. It explains what a switch would involve for someone like you. It covers what the stress-test exemption does and doesn't cover for you. And it flags anything in your answers that might make a new lender hesitate.</p>
<p>Maybe you've been with the same lender for years, and nobody has looked at the mortgage in between. Then it's worth knowing his <a href="/mortgage-aftercare-program/">aftercare program</a> exists so that doesn't happen again.</p>
<p>If you asked for a call, he'll suggest a time. If you'd like him to compare real options, every client gets a written Lender Comparison Report before deciding. It puts rate, term, penalties, prepayment and portability side by side. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains how that fits into the timeline.</p>

<h2>What the check can't do</h2>
<p>It can't see your renewal letter. If you have one, keep it handy. The written version is better when Joshua can see the actual offer.</p>
<p>It can't know your lender's penalty method if you're thinking of leaving early. And it can't tell you what rate you'd get. Nobody can without seeing your file. That's why this site doesn't print rates in its articles.</p>
<p>About fees. On a mortgage placed with a mainstream (A) lender, the lender pays the broker and you pay nothing for the service, including at a switch. Fees only come up on certain B-lender and private-lender files, with written disclosure first.</p>
<p>Not sure this is your check? The <a href="/mortgage-check/">two-question router</a> will sort it. The <a href="/mortgage-calculators/">renewal calculator</a> lets you run stay-versus-switch numbers yourself. And the <a href="/contact/">contact page</a> is there if you'd rather just talk.</p>

${cta({ title: "Maturity date in the next year?", text: "Book the 15-minute call now, not at 110 days. The earlier the conversation, the more options are still open." })}
`;

export default {
  slug: "/renewal-check/",
  h1: "Renewal check: are you ready to compare before you sign?",
  lede: "Four numbers and six questions on timing, your situation, income, flexibility and how long you're staying. Score and timeline on the page, before any form.",
  crumb: "Renewal check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "My renewal is more than two years away. Is there any point?", a: "Yes, mostly for the timeline. The check tells you when to start and what to have in order by then, and it flags anything in your situation that would be better fixed early, like a credit report nobody has looked at. You can also sign up for the free renewal reminder so you hear from Joshua at six months and 120 days out." },
    { q: "Why does the check send me to the equity check when I ask about debt?", a: "Because rolling debt into your mortgage turns a renewal into a refinance, and refinances are underwritten differently: the amount, the loan-to-value and the stress test all come back into play. The equity check asks the questions that matter for that, so you get a result that actually fits what you're planning." },
    { q: "Can I switch lenders if I've had a missed payment this year?", a: "Sometimes, but it's harder, and the check will tell you that honestly. Your current lender must usually renew you regardless; a new lender will look at the missed payment closely. The written version is the place to work out which path is realistic for you." },
    { q: "Does the check tell me what rate I'd get?", a: "No, and be wary of any quiz that claims to. A rate depends on your file, your property and the lender, and this site deliberately prints no rates in its articles. What the check tells you is whether you're in a position to shop and when to start." },
    { q: "Is the result sent to my current lender?", a: "No. Nothing is sent anywhere unless you ask for the written version, and even then it goes to Joshua only. He doesn't share it with any lender. Whether and when to approach your current lender is a decision you make with the timeline in front of you." }
  ]
};
