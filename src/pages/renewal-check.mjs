import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("renewal")}

<h2>What this check measures</h2>
<p>A renewal is the one moment in a mortgage when you're genuinely free to shop, and most people waste it. The letter arrives, it has a rate on it, and signing it takes thirty seconds. This check is built to slow that moment down. It asks about a dozen questions across five themes: timing (how long until your term ends), your situation (any missed payments, any big life changes), your income (how stable it is today), flexibility (how much room you'd have if the payment went up), and horizon (how long you expect to stay in the home). Each one comes with a note on why a lender, or you, should care.</p>
<p>One of the questions is really a lesson in disguise. It asks whether you know that most borrowers can now switch lenders at renewal without going through the stress test again. A lot of people don't, and it's the single biggest reason renewals end up costing more than they should. The <a href="/stress-test-exemption-switching-lenders/">stress-test exemption guide</a> is the full explanation; the check just makes sure you've heard of it.</p>

<h2>What the result shows</h2>
<p>You get a score out of 100 and a band. The bands for a renewal are about readiness to compare, not about whether you'll be approved: "Well placed to shop", "Shop, but sort these first" and "Talk before you sign anything". The result also tells you where you are in the timeline. Most lenders open renewals about 120 days before maturity, and the renewal statement has to arrive before the term ends, so the check turns your maturity date into a plain to-do: when to get quotes, when to decide, and when it's too late to switch without rushing. The <a href="/early-mortgage-renewal/">early renewal guide</a> covers what happens if you want to move sooner than that.</p>

<h2>The hand-off to the equity check</h2>
<p>Partway through, the check asks whether you'd like to roll high-interest debt into your mortgage when you renew. If you say yes, it hands you to the <a href="/equity-check/">equity check</a> with a short note explaining why. That's not the quiz being fussy. A renewal that also pulls money out is a refinance, and a refinance is underwritten differently: the amount matters, the loan-to-value matters, and the stress-test exemption for a straight switch doesn't apply once you're borrowing more. Different question, different check.</p>

<h2>Why you see the result first</h2>
<p>Nothing you answer is sent anywhere. The check runs in your browser and shows your score and timeline on the page. After that, there's an optional button for a written version with Joshua's notes on your specific renewal, which is where you'd give a name and an email. The consent box starts unticked, and so does the box asking for a call. If you only wanted the number, you've got it.</p>

${callout("The auto-renewal trap", "<p>If a term reaches its maturity date without a signed renewal, it commonly rolls into an open term at a rate that's typically much higher than a negotiated one. That's a feature of the contract, not a penalty, and the only cure is starting early. The <a href=\"/mortgage-renewal-letter-explained/\">renewal letter guide</a> shows you what to look for on the letter itself.</p>")}

<h2>What Joshua does with the written version</h2>
<p>He reads your answers and does the thing he does for every client at renewal: he works backwards from your maturity date. The written version tells you what to ask your current lender, what a switch would involve for someone in your situation, what the stress-test exemption does and doesn't cover for you, and whether anything in your answers would make a new lender hesitate. If you've been with the same lender for years and never had anyone look at the mortgage in between, this is also the moment to mention that his <a href="/mortgage-aftercare-program/">aftercare program</a> exists precisely so that doesn't happen again.</p>
<p>If you've asked for a call, he'll suggest a time. If you'd rather have him compare real options, every client gets a written Lender Comparison Report before deciding, which puts rate, term, penalties, prepayment and portability side by side. The <a href="/mortgage-renewal-bc/">renewal guide</a> explains how that fits into the timeline.</p>

<h2>What the check can't do</h2>
<p>It can't see your renewal letter, so if you've got one, keep it handy; the written version is better when Joshua can see the actual offer. It can't know your lender's penalty method if you're thinking of leaving early. And it can't tell you what rate you'd get; nobody can without seeing your file, which is why this site doesn't print rates in its articles.</p>
<p>On fees: on a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service, including at a switch. Fees only come up on certain B-lender and private-lender files, with written disclosure first. Not sure this is your check? The <a href="/mortgage-check/">two-question router</a> will sort it. The <a href="/mortgage-calculators/">renewal calculator</a> is there if you'd like to run stay-versus-switch numbers yourself, and the <a href="/contact/">contact page</a> is there if you'd rather just talk.</p>

${cta({ title: "Maturity date in the next year?", text: "Book the 15-minute call now, not at 110 days. The earlier the conversation, the more options are still open." })}
`;

export default {
  slug: "/renewal-check/",
  h1: "Renewal check: are you ready to compare before you sign?",
  lede: "About a dozen questions on timing, your situation, income, flexibility and how long you're staying. Score and timeline on the page, before any form.",
  crumb: "Renewal check", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "My renewal is more than two years away. Is there any point?", a: "Yes, mostly for the timeline. The check tells you when to start and what to have in order by then, and it flags anything in your situation that would be better fixed early, like a credit report nobody has looked at. You can also sign up for the free renewal reminder so you hear from Joshua at six months and 120 days out." },
    { q: "Why does the check send me to the equity check when I ask about debt?", a: "Because rolling debt into your mortgage turns a renewal into a refinance, and refinances are underwritten differently: the amount, the loan-to-value and the stress test all come back into play. The equity check asks the questions that matter for that, so you get a result that actually fits what you're planning." },
    { q: "Can I switch lenders if I've had a missed payment this year?", a: "Sometimes, but it's harder, and the check will tell you that honestly. Your current lender must usually renew you regardless; a new lender will look at the missed payment closely. The written version is the place to work out which path is realistic for you." },
    { q: "Does the check tell me what rate I'd get?", a: "No, and be wary of any quiz that claims to. A rate depends on your file, your property and the lender, and this site deliberately prints no rates in its articles. What the check tells you is whether you're in a position to shop and when to start." },
    { q: "Is the result sent to my current lender?", a: "No. Nothing is sent anywhere unless you ask for the written version, and even then it goes to Joshua only. He doesn't share it with any lender. Whether and when to approach your current lender is a decision you make with the timeline in front of you." }
  ]
};
