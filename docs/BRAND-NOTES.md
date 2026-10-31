# Brand package applied (Oct 30, 10:01 pm)

Source: josh-resvick-package-2026-10-30.zip (INTAKE.md addendum, CONFIRM-LIST.md, assets/).

- **Colours:** navy #253551 (buttons, hero, footer, links), near-black text #2A2829, cream #E0E0DB used for bands and table heads. The page background is #EBEBE8, a slightly lighter tint of the cream, because #E0E0DB behind 1,500 words of body text reads as grey; the bands and cards keep the exact hex. One token change in `src/assets/css/site.css` (`--bg`) puts it back to #E0E0DB if Josh wants the exact match everywhere.
- **Fonts:** Instrument Serif for headings and the wordmark, Newsreader for body, both self-hosted (@fontsource, latin subset). Instrument Serif ships in one weight, so heading weights were reset to 400 and sizes raised about 8 percent to compensate. Inter stays for navigation, buttons, labels and form UI; Josh's site has no UI face, and a sans keeps forms and calculators legible.
- **Logo:** none exists; the wordmark is "Resvick Mortgages" in Instrument Serif, as on his current site.
- **Photos:** `josh-hero-portrait` (black crew-neck, arms crossed) on Home, `josh-photo-3-suit` on About, `josh-photo-2` (desk, laptop) on Contact. Served as 720w and 1080w WebP with srcset. OG/social image is the hero portrait on navy at 1200×630 (`/assets/img/og-default.jpg`) on every page. Photographer: Kate Paterson Creative (from the file names); no credit line is on the site; add one if Josh's agreement requires it.
- **cal.com:** every "Book a 15-minute call" button now goes straight to the Mortgage Advice (15 min) event, `https://cal.com/resvickmortgages/mortgage-advice`. The booking root is kept as `SITE.bookRoot` for pages that may want the full menu. Note from cal.com: the New Client Discovery event's URL ends in "30min" but is listed as 45 minutes; Josh may want to tidy that slug.
- **theme-color** meta updated to the navy.

## From CONFIRM-LIST.md, already settled
1 Punjabi: no (pages deleted). 2 Licence: MB503619 (in). 6 Proof line: "Over 1,000 mortgages funded" (in). 12 Service promises: confirmed (in). 13 Aftercare name: Resvick Aftercare. 16 Rates: no rates shown (Jared's call; panel auto-returns if a dated rate is ever supplied).

## Still open for Josh
3 VERICO/Xeva disclosure wording · 4 first licensed year (copy says ten years as a broker) · 5 lender count (copy says "many lenders") · 7 Google review link and count · 8 suite-income lender practice · 9 spousal buyout insurers (Sagen 2019 bulletin is cited) · 10 lender norms · 11 MLI Select tiers · 14 CRM webhook and alert email · 15 GA4 property · 17 registrar and account access.
