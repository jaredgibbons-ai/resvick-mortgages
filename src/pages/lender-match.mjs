import { cta, callout } from "../lib/site.mjs";
import { quizEmbed } from "../lib/quiz-markup.mjs";

const body = `
${quizEmbed("lendermatch")}

<h2>What this quiz does, and what it doesn't</h2>
<p>This one isn't scored, and it won't tell you how ready you are. It asks a different question: what do you actually want from a mortgage? Seven sliders, each from "not important" to "very important": avoiding a big penalty if you break the term, being able to pay extra, the lowest rate full stop, taking the mortgage with you if you move, getting at your equity without refinancing, a bank name you know, and good online banking. Move the sliders, and the result names the kind of lender and the kind of rate that tends to fit those priorities.</p>
<p>Notice that it names a kind of lender, not a lender. The three broad types in Canada (the big banks, the credit unions, and the monoline lenders that only do mortgages) each do some things well and some things less well, and the differences are mostly about the things on those sliders. The <a href="/mortgage-broker-vs-bank/">broker versus bank page</a> explains the landscape if you're new to it.</p>

<h2>Why the sliders are the ones they are</h2>
<p>Because they're the things people regret not asking about. The lowest rate is the easiest thing to compare and often the least important over five years. A penalty method can cost thousands more at one lender than another on the same balance; the <a href="/interest-rate-differential/">IRD guide</a> shows how. Prepayment room decides how fast you can get ahead. Portability decides whether moving house means breaking the mortgage. Access to equity without a full refinance is a feature some products have and most don't. And a familiar name or a good app is a real preference, even if it isn't a financial one. Each slider has a short note explaining what you're trading off when you push it up or down.</p>

<h2>Reading your result</h2>
<p>The result pairs a lender type with a rate type. Push "lowest rate" and "online banking" up and leave the rest neutral, and you'll tend to land on a monoline with a fixed rate. Push "avoid penalties" and "flexibility" up, and a variable rate at a lender with generous prepayment terms starts to look sensible, since variable penalties are usually three months' interest. Push "familiar name" and "equity access" up, and a bank with a readvanceable product may fit. The <a href="/fixed-vs-variable-mortgage/">fixed versus variable guide</a> and the <a href="/readvanceable-mortgage/">readvanceable mortgage guide</a> go deep on the two choices the result most often raises.</p>
<p>Nothing is sent anywhere; the quiz runs in your browser, and the result shows on the page. There's no form at the end of this one at all. If you'd like to talk about it, the buttons under the result go to the <a href="/contact/">contact page</a> and the <a href="/mortgage-calculators/">calculators</a>, and the "compare lender types" link goes to a page that actually compares them, which is more than some quizzes manage.</p>

${callout("A preference quiz, not a recommendation", "<p>Your priorities are one half of the match. The other half is your file: income, credit, property, down payment. A lender type that fits your preferences may not fit your file, and vice versa. The scored checks cover the file side; this one covers the preference side. Both are worth doing.</p>")}

<h2>How Joshua uses this in practice</h2>
<p>When you work with him, this conversation happens anyway, usually in the first fifteen minutes. He asks what matters to you, because the answer changes which lenders he puts on the table. Then every client gets a written Lender Comparison Report before deciding: rate, term, penalties, prepayment and portability, side by side, for real lender options. The sliders here are a preview of that conversation. If you've already thought about what you want, the call goes faster and the comparison is sharper. The <a href="/lender-comparison-report/">Lender Comparison Report page</a> shows what it looks like.</p>
<p>He'll also tell you when your priorities conflict. Wanting the lowest rate and the most flexibility at the same time is common and usually impossible; the honest job is showing you what each one costs so you can pick. That's what the sliders are for, too.</p>

<h2>What the quiz can't do</h2>
<p>It can't know your file, so it can't tell you who would approve you. It can't compare actual rates, because this site prints none and because the right rate depends on your situation. And it can't account for the lender-specific details that matter most in practice, like how a particular lender calculates its penalty or treats your income. For those, you need the comparison report, which needs a conversation.</p>
<p>On fees: on a mortgage placed with a mainstream (A) lender, the lender pays the broker, and you pay nothing for the service. Fees only come up on certain B-lender and private-lender files, with written disclosure first. If you came here without a situation in mind, the <a href="/mortgage-check/">two-question router</a> will put you in the scored check that fits, and the <a href="/mortgage-rates-bc/">rates guide</a> explains how the rate you're eventually offered gets set.</p>

${cta({ title: "Want the real comparison?", text: "Book the 15-minute call. Joshua will turn your priorities into actual lender options, side by side, in writing." })}
`;

export default {
  slug: "/lender-match/",
  h1: "Lender match: which kind of lender and rate fits what you want?",
  lede: "Seven sliders on what matters to you: penalties, prepayment, rate, portability, equity access, a familiar name, online banking. The result names a lender type and a rate type, on the page.",
  crumb: "Lender match", nav: "/mortgage-check/", quiz: true, body,
  faqs: [
    { q: "Does the result name a specific lender?", a: "No. It names a type of lender (big bank, credit union or monoline) and a rate type (fixed or variable) that tends to fit the priorities you set. Naming a specific lender needs your file as well as your preferences, and that's what the written Lender Comparison Report does once you're working with Joshua." },
    { q: "What's a monoline lender?", a: "A lender that only does mortgages, with no branches and no chequing accounts. They're accessed through brokers, often have competitive rates and friendlier penalty methods, and you deal with them online. The trade-off is no familiar brand and no in-branch service, which is exactly what two of the sliders ask you about." },
    { q: "Why isn't the lowest rate the most important slider?", a: "Because over a five-year term, the penalty method, the prepayment room and whether you can port the mortgage often cost or save more than a small rate difference. The quiz treats rate as one priority among seven on purpose, so you can see what you'd be giving up to chase it." },
    { q: "Can I take the quiz again with different priorities?", a: "Yes, as many times as you like. There's a restart button on the result, and nothing is stored or sent. Trying it twice with different sliders is a quick way to see how much each priority moves the answer, which is useful before you talk to anyone." },
    { q: "Is this where I find out if I'd be approved?", a: "No, this quiz only covers what you want. The scored checks reached through the two-question router cover the file side: income, credit, down payment, timeline. For an actual approval you need a lender to verify documents, and a real pre-approval is the step that does that." }
  ]
};
