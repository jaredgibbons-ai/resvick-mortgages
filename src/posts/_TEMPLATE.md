# Writing a guide post (for Josh or Xeva staff)

1. Copy `example-post.mjs.txt` to `src/posts/<slug>.mjs` (lowercase, hyphens).
2. Fill in: slug (`/guides/<slug>/`), date (YYYY-MM-DD), series (`boc`, `rules` or `questions`), title (60 chars max), meta (155 max), h1, lede, body (HTML, 1,000+ words), faqs (4 or more), links (the canonical pages you link to).
3. Run `node tools/check-page.mjs src/posts/<slug>.mjs` until it says OK, then `node build.mjs` and deploy.
4. Dates and figures are allowed in posts (they are not allowed in the evergreen pages). Cite the source and the date for every figure.
