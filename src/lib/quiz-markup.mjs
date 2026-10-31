// Markup for embedding a readiness check. Pages set `quiz: true` so render() adds engine.js + quiz.js.
import { SITE } from "./site.mjs";

export const QUIZ_IDS = ["check", "purchase", "renewal", "equity", "investor", "selfemployed", "lendermatch"];

const LEDE = {
  check: "Two quick questions, then the check that fits your situation.",
  purchase: "Four numbers and nine questions. You see your full result before anything is asked of you.",
  renewal: "Four numbers and ten questions, including the one most renewal letters never mention.",
  equity: "Three numbers and eight questions. Your loan-to-value shows as you type.",
  investor: "Eleven questions on money, plan and experience. No numbers needed.",
  selfemployed: "Nine questions, then five numbers. The result compares three lending routes side by side.",
  lendermatch: "Seven sliders. The result names a lender type and a rate type, with the reason."
};

export function quizEmbed(id) {
  if (!QUIZ_IDS.includes(id)) throw new Error("Unknown quiz " + id);
  return `<section class="quiz tool" id="quiz-${id}" data-quiz="${id}" data-book="${SITE.book}" data-nocount aria-label="${id === "check" ? "Where are you at" : id === "lendermatch" ? "Lender match" : "Readiness check"}">
<p class="small">${LEDE[id]}</p>
<noscript><p class="honest">This check needs JavaScript. You can <a href="/contact/">contact Joshua</a> and he will walk through the same questions with you on a call.</p></noscript>
</section>`;
}
