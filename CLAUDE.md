# Resvick Mortgages website (resvickmortgages.com)

Static site for Joshua Resvick, BC mortgage broker (Xeva Mortgage / VERICO). Built by Jared Gibbons.

## Commands
- `npm install` once. `node build.mjs` builds to `dist/`. `node tools/validate.mjs` must show 0 errors before any commit.
- `node tests/engine.test.mjs` and `node --test tests/quiz.test.mjs` must pass.
- One page: `node tools/check-page.mjs src/pages/<file>.mjs` (words, FAQs, links). Reading level: `node tools/readability.mjs <file>`.
- Preview copy for a non-root host: `node tools/preview-pack.mjs`.

## Layout
- Pages: `src/pages/*.mjs` (one default export each). Dated posts: `src/posts/*.mjs` → `/guides/<slug>/`.
- Titles/metas/required links: `src/lib/specs*.mjs` (SEO overrides in `specs-seo.mjs`). Canonical slugs only: `src/lib/linkmap.mjs`.
- Shared layout, nav, footer: `src/lib/site.mjs`. Calculators: `src/assets/js/engine.js` + `calc-ui.js` + `src/lib/tools.mjs`. Quizzes: `src/assets/js/quiz.js` + `src/lib/quiz-markup.mjs`. Lead API: `functions/api/lead.js` (Cloudflare Pages Function).
- Notes for every phase and the confirm-with-Josh lists: `docs/`.

## Non-negotiables
- Every content page 1,000+ body words, 4+ FAQs, required links present, canonical slugs only.
- Educator voice, warm and plain (see `docs/READABILITY-RULES.md`): grade 8 target, no "!", no em dashes, no hype.
- Verified facts only; hedge lender practice ("lenders vary"). No rates in evergreen copy, no review or lender counts, no savings promises.
- Fee honesty: A-lender deals cost the borrower nothing; fees only on B/private files with BCFSA Form 1A disclosure.
- Never mention "Resvick & Associates", "Invis" or DLC. Josh serves cities online from his Surrey office; never imply a branch.
- Footer furniture on every page: brokerage line, BCFSA licence #X300203, broker licence MB503619, privacy link.
