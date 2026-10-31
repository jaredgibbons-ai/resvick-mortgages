# Phase 5 notes (Resvick Mortgages)

Added: the guides engine, 12 pages (120 total: 108 evergreen + /guides/ + 11 posts), GBP and directory copy, reviews wiring, GA4 and staging hooks, launch checklist. Validator: 120 pages, 0 errors (2 warnings: the two hub pages with 21–22 in-body links). Engine tests 24/24. Guides index and a post checked in the browser at 390px and 1280px: no errors, no overflow.

## Content engine (§7.15)
- Posts live in `src/posts/<name>.mjs` and render at `/guides/<name>/` with an Article schema (datePublished, dateModified, author Joshua, publisher the business entity), a dated line at the top, breadcrumbs Home → Guides → post, and `lastmod` in the sitemap. `src/posts/_TEMPLATE.md` tells Josh or Xeva staff how to add one without a developer; `docs/BOC-POST-TEMPLATE.md` is the fill-in for decision days.
- `/guides/` lists the three series: Bank of Canada decisions, rule changes, questions clients ask. Dates and figures are allowed in posts and nowhere else.
- First 11 posts (all dated Oct 30, 2026, 1,300–1,810 body words, 5 FAQs, SEO titles and metas):
  BoC: Oct 28, 2026 decision (policy rate to 2.50%, first increase since 2023, prime 4.70% from Oct 29 per National Bank; next decision Dec 9, 2026). Sources: Bank of Canada release Oct 28, 2026; National Bank release Oct 28, 2026.
  Rules: stress-test exemption for switches (OSFI Nov 21, 2024; Finance Dec 16, 2024); CMHC secondary suite refinance (Jan 15, 2025) and the cancelled $80K loan program; FTHB GST rebate (Bill C-4, Royal Assent Mar 12, 2026; CRA pages June 2026); BC PTT thresholds (Apr 1, 2024; gov.bc.ca pages 2025–2026).
  Questions: what a broker costs; how much suite income counts; when to start a renewal; should my parents co-sign; the car-loan $100K question; fixed or variable right now (a framework, no prediction).
- Engine-checked figures in the posts: $500K at 3.55% vs 3.80% over 22 years is $2,724.68 vs $2,789.58 a month; all eight PTT examples match `RM.ptt`.

## Reviews (Open Item 7)
`src/data/reviews.json` takes Josh's own Google `link`, `writeLink`, `count`, `rating`, `asOf` and quoted `items`. The home-page component shows the count and rating as plain text (no review schema, per Google's self-serving review rules) and links "Leave a review" to `/reviews`, which 302s to `writeLink`; until it is set, `/reviews` goes to /contact/. The Invis / Resvick & Associates listing is never used.

## GBP and directories (§7.14)
`docs/GBP-SETUP.md`: claim and verify steps, how to handle the father's separate Invis listing (never merge, cite or borrow reviews), NAP block, categories, a 746-character description, 20 named service areas (Metro Vancouver and Fraser Valley, not "all of BC"), 21 services mirroring the site with UTM links, 8 seeded Q&A pairs, first-month posting plan, review-request SMS and email scripts, monthly maintenance.
`docs/DIRECTORY-LISTINGS.md`: NAP, three description lengths, UTM table, claim steps for Birdeye, WOWA, ThreeBestRated, Xeva, Bing, Apple, Yelp, a 13-item consistency checklist.

## Launch plumbing
- `GA4_ID` build variable injects gtag on every page (anonymize_ip); events already fire from `track.js`, `forms.js`, `calc-ui.js`. `STAGING=1` forces site-wide noindex for the password-protected preview.
- cal.com: the embed on the contact page and every button use the 15-minute Mortgage Advice event.
- `docs/LAUNCH-CHECKLIST.md`: inputs still needed, Cloudflare Pages setup (env vars, staging, weekly rebuild for the rates expiry and lastmod), redirect verification, Search Console, pre-launch QA including Core Web Vitals and accessibility, day-one content, ongoing cadence.

## Josh to confirm
- BoC post: the "first increase since July 2023" framing comes from coverage of the release; the hike itself is from the Bank's statement.
- Suite post and secondary-suite rule post: the $80K loan cancellation is sourced to an industry summary of Budget 2025; check the Budget housing chapter.
- GST post: age-18, four-year and 2031/2036 conditions are from advisor summaries; CRA's eligibility page is named as the authority.
- Question posts carry the same hedged lender norms as their parent guides (21-day statement, co-signer credit minimums, STR income excluded at A lenders, conversion at posted or discounted rate).
- Everything in docs/GBP-SETUP.md marked "Josh supplies": owning Google account, video verification, hours, exterior and interior photos, review short link, attribute confirmations.

## Post-delivery fix (10:35 pm)
A crawl of the built site found 11 pages with no path from the home page (four people-niche pages, both property-type pages, the five Island and Interior city pages). Added footer columns "Who we help" (13 links) and "Cities served" (12), an "Every city Joshua serves" paragraph on /mortgage-broker-surrey/ (the nav's "Cities served" target), and a jobs/household/property-type paragraph on the first-time buyer hub. Every page is now within three clicks of home.

## Voice pass, independent QA and preview (10:38 pm – 11:10 pm)
- **Voice (Jared: "educator style and light easy chat").** Eleven highest-traffic pages rewritten in a warm, conversational register with contractions and second person: Home, About and Contact in Josh's first person; the FTHB hub, renewal hub, refinance hub, rates hub, flagship exemption page, aftercare, broker-pay and self-employed hub in the same register, third person. Facts, links, hedges, FAQ counts and headings unchanged; word counts up slightly. Legal and licence paragraphs left formal on purpose. The remaining 109 pages are in the original educator voice; a second pass can bring them over if Josh likes the sample.
- **Independent QA** (a reviewer that had not seen the build read 24 pages plus site-wide sweeps). Clean on: Resvick & Associates, Invis, DLC, exclamation marks, review and lender counts, named lenders, placeholder text, duplicated paragraphs; footer compliance on 119/119; arithmetic spot-checks all correct; the Oct 28, 2026 BoC post verified against an external report. Fixed from its list: five pages still referred to the switched-off rates panel; the investor pages said a rental "cannot be insured" (now "high-ratio insurance is not available, plan on 20 percent down"); three pages promised written exit plans on Josh's behalf (now described as his approach); aftercare timing on three alt-lending pages aligned to annual review plus six months; an invented "in Joshua's experience" line cut; "approved the first time" softened; the military page no longer claims no program exists (affinity packages do); the Kelowna suite rule now carries the 2024 SSMUH caveat; the unsourced BC suite-incentive date removed; a line that disparaged Prince George brokers cut; a Bank of Canada projection no longer written as an observed result; the FCAC credit-reporting sentence reworded to "report agreed relief accurately"; the 35-year option removed from the suite checker; small copy nits. Kept on purpose: the Sagen 95% spousal buyout figure (dated primary source), listed for Josh.
- **Preview.** Published as a private page from this chat (relative-link copy of dist/ via `tools/preview-pack.mjs`, with a reviewer landing page). Forms, cal.com embed, tap-to-call and the review link are off in the preview by nature; everything else works, including all calculators. When Josh's Cloudflare account is ready, the same `dist/` deploys as-is.
