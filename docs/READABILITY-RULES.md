# Readability and "short version" pass (Jared, Oct 30, 11:34 pm: "do all 4")

Goal: every page reads at about grade 8, is people-friendly, and gives the answer in the first screen.

Rules for every page in src/pages/*.mjs and src/posts/*.mjs:
1. Add the short version box as the FIRST element of `body` (after any hero markup that is outside body):
   `import { short } from "../lib/short.mjs";` then `${short({ answer: "...", who: "...", next: "..." })}`.
   - answer: one or two plain sentences that answer the page's question outright (the thing a tired reader needs).
   - who: one sentence naming who should read on (and who should jump elsewhere, with a link if useful).
   - next: one sentence with the single next action, usually a link (a calculator, the hub, the contact page or the booking link).
   - Keep it under 70 words total. No hedging stacked on hedging; one "lenders vary" is enough. Links inside are fine (canonical slugs only).
2. Target grade 8.5 or lower, 17 words per sentence or fewer, and NO sentence over 30 words. Check with `node tools/readability.mjs src/pages/<file>` (also prints whether the short box is present). Split long sentences; cut throat-clearing ("It is worth noting that"); prefer short words (use "about" for "approximately", "start" for "commence", "help" for "assist"); one idea per sentence; keep paragraphs to 2–4 sentences.
3. Voice: the home page's register (read src/pages/home.mjs): warm, plain, contractions, second person, a light aside now and then. Educator, never salesy. No "!", no em dashes. Pages about Josh (About, Contact, Home) speak as "I"; guides say "Joshua".
4. Keep every fact, figure, date, citation, hedge ("lenders vary", "commonly", "confirm with"), link href, FAQ count, heading structure, schema, calc/forms flags and the fee-honesty line. Body word count must stay 1,000+ (`node tools/check-page.mjs`). Do not touch titles/metas (they live in specs).
5. Legal and licence paragraphs may stay formal. Tables stay.
6. Posts (src/posts/) get the short box too, placed as the first element of `body` (it renders after the date line automatically).
