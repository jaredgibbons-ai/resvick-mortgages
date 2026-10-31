# Resvick Mortgages — site generator (Phase 0)

Static site, no framework. Node 20+.

```
npm install          # cheerio + self-hosted fonts
node build.mjs       # writes dist/ (pages, assets, fonts, sitemap, robots, _redirects, _headers, 404)
node tools/validate.mjs   # QA gate: titles/metas vs spec, 1,000+ words, required links, canonical link map, banned strings, footer furniture
python3 tests/independent.py && node --test tests/engine.test.mjs   # calculator engine vs independent calculation
```

Deploy `dist/` to Cloudflare Pages; `functions/api/lead.js` becomes `/api/lead` (see docs/LEAD-CONTRACT.md). Set env vars `CRM_WEBHOOK_URL`, `ALERT_WEBHOOK_URL`.

Edit routines for Josh/Xeva staff:
- Rates: `src/data/rates.json` (leave `rate: null` until confirmed; the page then says "Ask for today's rate").
- Reviews: `src/data/reviews.json` (real Google reviews only; the section stays hidden while empty).
- Photos: drop `josh-hero.webp` and `josh-about.webp` (2:3, about 720x1080) into `src/assets/img/`; the arch picks them up on next build.

Adding a page: add its exact title/meta/required links to `src/lib/specs.mjs`, add a module in `src/pages/` that exports `{slug,h1,lede,body,faqs,...}`. Links must come from `src/lib/linkmap.mjs` (the §16 map).
