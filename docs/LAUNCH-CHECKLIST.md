# Launch checklist (Resvick Mortgages on Cloudflare Pages)

Accounts stay in Josh's or Xeva's name; Jared and the builder get access, never ownership (§13).

## 1. Inputs still needed from Josh (nothing else is blocked on them)
- [ ] Google review link and "write a review" short link → `src/data/reviews.json` (`link`, `writeLink`, `count`, `rating`, `asOf`). `/reviews` redirects to `writeLink`; until then it goes to /contact/.
- [ ] GA4 measurement ID (created under Josh's Google account) → set `GA4_ID` in the Cloudflare Pages build environment. The cookie banner, footer "Cookie settings" link and GA load only when it is set. Test: GA must not fire until Accept is clicked. Events are already fired by `forms.js` and `calc-ui.js`: `book_call_click`, `phone_click`, `form_submit`, `quiz_complete`, `reminder_signup`, `calculator_complete`, `estimator_submit`, `apply_click` (header Apply), `checkup_click` (header Check-Up). The last two fire automatically from `data-evt` attributes via `track.js`; the check-up form sends `form: "check-up"` with intent `renewal`. Parameters carry page, tool and intent only.
- [ ] CRM webhook URL and alert email → Cloudflare Pages environment variables `CRM_WEBHOOK_URL` and `ALERT_WEBHOOK_URL` (see docs/LEAD-CONTRACT.md). Without them `/api/lead` returns 502 and the form shows the phone number, so no lead is silently lost.
- [ ] Registrar login for resvickmortgages.com (or a DNS delegation to Cloudflare).
- [ ] Confirm the office neighbourhood line on /mortgage-broker-surrey/ ("Grandview Heights area of South Surrey") and in-person meetings by appointment.
- [ ] The "Josh to confirm" lists in docs/PHASE2-NOTES.md through PHASE4-NOTES.md (30-minute read; see docs/BRAND-NOTES.md for what is already settled).
- [ ] Privacy policy and terms of use: legal review of /privacy/ and /terms-of-use/ before launch.
- [ ] SMS: can 778.882.5674 receive texts? If not, remove the sms links on the contact and thank-you pages and `SITE.smsHref`.
- [ ] Retargeting pixel IDs and the consent decision (the cookie banner covers GA only until then).

## 2. Cloudflare Pages
- [ ] Create the Pages project from the repo (or direct upload of `dist/`). Build command `node build.mjs`, output `dist`, Node 22.
- [ ] Environment variables: `CRM_WEBHOOK_URL`, `ALERT_WEBHOOK_URL`. Functions directory `functions/` deploys `/api/lead` automatically.
- [ ] Staging: a second Pages environment (preview branch) with Cloudflare Access (password) in front, and `noindex` forced by setting `STAGING=1` (build.mjs can emit a site-wide noindex when that variable is present; add this before the first preview deploy).
- [ ] Custom domain: `www.resvickmortgages.com` as primary (matches `SITE.origin`); apex redirects to www. HTTPS on, HSTS already in `_headers`.
- [ ] Weekly scheduled rebuild (Cloudflare Deploy Hook hit by a cron Worker or an external scheduler) so the 14-day rates expiry and `lastmod` dates stay honest even when nothing is pushed.

## 3. Redirects from the Squarespace site (verify each live)
`/home` → `/` · `/new-page` → `/` · `/about` → `/about-joshua-resvick/` · `/contact` → `/contact/` · `/reviews` → Google review link. Archive a full crawl of the old site first (Screaming Frog or `wget -m`) and keep it with the repo.

## 4. Search Console and GBP
- [ ] Verify the domain in Search Console under Josh's account; submit `https://www.resvickmortgages.com/sitemap.xml`; watch coverage for the old URLs for 60 days.
- [ ] Google Business Profile per docs/GBP-SETUP.md (claim, categories, 20 service areas, services = site architecture, Q&A, photos, booking link, UTM website link).
- [ ] Directories per docs/DIRECTORY-LISTINGS.md (Birdeye, WOWA, ThreeBestRated, Bing, Apple, Yelp, Xeva profile), then the Surrey and White Rock boards of trade and the BC mortgage-broker directories. Use one NAP block everywhere: Resvick Mortgages · Joshua Resvick, Mortgage Broker · Xeva Mortgage · #106, 2626 Croydon Drive, Surrey, BC V3Z 0S8 · 778.882.5674 · https://www.resvickmortgages.com/. Ask Xeva compliance to approve third-party listings first.
- [ ] City pages: local facts (src/lib/city-facts/) were read from official pages in October 2026. Re-check short-term rental and suite rules every six months. Jared's own Fraser Valley notes still to add.

## 5. Pre-launch QA (run on the production preview)
- [ ] `node tools/validate.mjs` → 0 errors. `node tests/engine.test.mjs` → all pass.
- [ ] Core Web Vitals on mobile (PageSpeed Insights) for `/`, `/mortgage-renewal-bc/`, `/mortgage-calculators/`: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Fonts are self-hosted with `font-display: swap`; hero images carry width/height and `fetchpriority="high"`; calculator JS loads only on calculator pages; cal.com loads behind a click.
- [ ] On a phone: tap "Book a 15-minute call" (opens cal.com Mortgage Advice), tap the phone number (dials), submit the contact form (arrives in the CRM and the alert inbox), sign up for the renewal reminder.
- [ ] Keyboard-only pass on one calculator and the quiz; focus visible; results readable by a screen reader (the `.out` regions are `aria-live`).
- [ ] Contrast check of navy #253551 on #EBEBE8 and #E0E0DB (both pass AA for body text at 18px).
- [ ] 404 returns a real 404 status (Cloudflare Pages serves `404.html` with status 404).

## 6. Day-one content
- [ ] Publish the first Bank of Canada post on the next decision date using docs/BOC-POST-TEMPLATE.md.
- [ ] Rates: stay off (Jared's call). If Josh ever wants them, fill `src/data/rates.json` with a date and the panel returns on the next build, with a 14-day expiry.

## 7. Ongoing
- Monthly: dependency update (`npm update`), rebuild, validator, tests.
- Quarterly: re-check the source register (prompt §11) and the dated municipal rules on the city pages.
- Every BoC decision and every rule change: a guide post, then a GBP post that links to it.
