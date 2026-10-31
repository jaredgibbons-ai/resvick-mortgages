# Writing a guide post (for Josh or Xeva staff)

1. Copy `example-post.mjs.txt` to `src/posts/<slug>.mjs` (lowercase, hyphens).
2. Fill in: slug (`/guides/<slug>/`), date (YYYY-MM-DD), series (`boc`, `rules` or `questions`), title (60 chars max), meta (155 max), h1, lede, body (HTML, 1,000+ words), faqs (4 or more), links (the canonical pages you link to).
3. Put the short-version box first in the body. Add `import { short } from "../lib/short.mjs";` at the top of the file, then start the body with `${short({ answer: "...", who: "...", next: "..." })}`. The answer is two or three plain sentences, `who` is one sentence, and `next` is one step with a link.
4. Write to a grade 8 reading level (see `docs/READABILITY-RULES.md`): grade 8.5 or lower, 17 words or fewer per sentence on average, and no sentence over 30 words. Short sentences, "you", contractions, no "!", no em dashes. End table cells with a period and put a citation's period outside the parentheses, or the checker joins sentences together.
5. Run `node tools/readability.mjs src/posts/<slug>.mjs` until it says OK, and `node tools/check-page.mjs src/posts/<slug>.mjs` until it says OK. Then `node build.mjs` and deploy.
6. Dates and figures are allowed in posts (they are not allowed in the evergreen pages). Cite the source and the date for every figure.
