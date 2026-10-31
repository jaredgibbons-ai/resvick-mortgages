# Phase 2 notes (Resvick Mortgages)

Added in this drop: 23 pages (52 total), 8 calculators made live, 10 new engine functions, broker licence number.
Validator: 52 pages, 0 errors (2 warnings: the home page's 22 in-body links, which is the hub; the co-signer title is 71 characters as written in the prompt). Engine tests: 24/24, checked against 143 independently computed cases in Python Decimal. Four tool pages driven in a real browser: correct output, no console errors, no horizontal overflow at 390px.

## New pages
Rates/term (§7.2): /mortgage-rates-bc/ (hub), /fixed-vs-variable-mortgage/, /5-year-fixed-mortgage-rate/, /3-year-fixed-mortgage-rate/, /variable-rate-mortgage/, /open-vs-closed-mortgage/, /interest-rate-differential/, /blend-and-extend-mortgage/, /collateral-charge-mortgage/, /prepayment-privileges-and-penalties/, /mortgage-rate-hold/.
Refinance (§7.5): /refinance-mortgage-bc/ (hub), /is-it-worth-refinancing/, /refinance-to-pay-off-debt/, /cash-out-refinance-bc/, /refinance-rental-property/.
Suite and qualification (§7.6): /how-much-suite-income-will-a-lender-count/, /secondary-suite-refinance/, /car-loan-affecting-mortgage/, /mortgage-with-a-cosigner/.
Tool pages: /mortgage-penalty-calculator/, /refinance-break-even/, /home-equity-estimator/ (result first, then an optional lead form; the "include my estimate" box decides whether the figures are sent).
Every page is 1,400+ body words, 5 FAQs, exact §7 title and meta, required links present, canonical slugs only.

## Calculators now live on /mortgage-calculators/
#prepayment, #compare (four scenarios), #consolidation, #offset (offset vs add-back), #suite-checker, #readvanceable, #sale-proceeds, #quiz. #mli stays "in development" until the program tiers are confirmed.
Field ids are now prefixed per tool (the index had duplicate ids, so labels pointed at the wrong inputs). `/api/lead` and forms.js accept `tool_inputs` (flat values, 20 keys max). Privacy page has one new sentence about the equity-estimator opt-in; it is inside the pending legal review.

## Broker licence
Joshua's individual BCFSA licence MB503619 (from Jared's screenshot, Oct 30) is in the footer of every page next to the brokerage licence, on Home, About, Contact and the broker-pay page, and in the Person schema. The validator checks for it.

## Spec deviations (flagged)
- Titles and metas for the three tool pages are mine (§7.13 gives URLs and purposes only). Marked provisional in `src/lib/specs-p2-tools.mjs`.
- /cash-out-refinance-bc/ also links /smith-manoeuvre/ and /dscr-loans-canada/; /refinance-rental-property/ also links the checklist and calculators. Extra links, all canonical.

## Source conflicts
- Suite income shares: prompt says offset 50–80% and add-back about 50%; Auxilium says offset up to 90% and add-back up to 100%; big banks 50–60%. Copy shows the ranges, names CMHC's up-to-100% gross-rent ceiling for an owner-occupied two-unit (2024 reference sheet) as a ceiling, and says lenders vary. The offset tool's 50/80/100% rows are comparator rows, not lender claims.
- Secondary suite refinance conditions were re-verified Oct 30, 2026 against the Finance Canada release, CMHC's 2025 refinance fact sheet and Sagen's Dec 2024 lender update: 90% of as-improved value, under $2M, 4 units or fewer, owner or close relative in a unit, no short-term rental, capped at project cost, 30-year amortization (0.20% surcharge past 25), 600 score, 39/44, applications from Jan 15, 2025. "Approval before construction starts" is not stated for this program in any of the three; the checker returns "Confirm" for started construction and the copy says "arrange financing before work is under way, confirm with a broker".
- Break-even: engine figures only; the research's "6 bp" is not used. /is-it-worth-refinancing/ example 1 frames a 43-month cash-flow break-even against a 24-month remaining term as "a bet on renewal rates"; the break-even tool shows both numbers.
- Car-loan meta "$600 a month cuts approval about $100,000" holds only when TDS binds: about $89.6K at a 6.50% qualifying rate, about $100.7K at the 5.25% floor. Copy says "roughly $90,000–$100,000" and explains.

## Josh to confirm (hedged in copy)
Rates cluster: posted-rate IRD attributed to "some larger lenders"; prime about 2.2 points over the policy rate (historical); 10–20% prepayment privileges as common; 90/120-day holds and float-downs as general; variable compounding monthly; blend-and-extend weighting as a model; whether the Dec 2024 switch exemption applies to collateral-charge moves (copy says confirm with the new lender). The IRD example cites "one Canadian broker's published teaching example (2026)" without naming Pragmatic Mortgage; say the word and it will be named or removed.
Refinance: 80% A-lender cap and "about four doors", about 75% at alternative lenders (PACKAGE.pdf); who pays appraisal and discharge; CRA arrears handling at closing and whether CRA's rate is reset quarterly; lender conditions on consolidated cards (close or cut limits); purpose restrictions on cash-out; Purchase Plus Improvements details; 20% down on non-owner-occupied purchases.
Suite and qualification: the worked suite example (illustrative, engine-computed); whether standard CMHC premium bands apply on a suite refinance (hedged); co-signer vs guarantor vs co-borrower definitions and title practice in BC; the tax and title paragraph needs a lawyer or accountant read; BC small-scale multi-unit legislation (2023) mention and the line that BC's Secondary Suite Incentive Program stopped taking applications March 30, 2025 (from competitor teardown notes only).
Tools: GST on commission hard-coded at 5% in the sale-proceeds tool; equity estimator uses the 80% refinance and 65% HELOC federal limits only.

## Still placeholder
Unchanged from Phase 1: photos, colour tokens and logo, rates, reviews, GA4, CRM and alert webhooks, /reviews redirect, cal.com embed test, #mli.

## Links to pages not built yet (26)
Phase 3: /b-lender-mortgage-bc/, /private-mortgage-lending-bc/, /stated-income-mortgage/, /self-employed-mortgage-bc/, /newly-self-employed-mortgage/, /mortgage-for-contractors/, /heloc-bc/, /second-mortgage-bc/, /readvanceable-mortgage/, /smith-manoeuvre/, /bridge-financing/, /behind-on-mortgage-payments/, /build-credit-for-a-mortgage/, /deposit-loan-and-borrowed-down-payment/, /purchase-plus-improvements/, /spousal-buyout-mortgage/, /converting-your-home-to-a-rental/.
Phase 4: /investment-property-mortgages-bc/, /dscr-loans-canada/, /new-to-canada-mortgage/, /presale-mortgages-bc/, /porting-your-mortgage/, /mortgage-broker-surrey/, /mortgage-rates-vancouver/, /mortgage-rates-surrey/ (the last two are required links on the rates hub).
Phase 5: /guides/.

## SEO pass on titles and metas (Jared, Oct 30, 7:07 pm)
Jared asked for every title and meta to be top SEO for "mortgage broker". All 52 now sit at 60 characters or fewer (titles) and 155 or fewer (metas), primary keyword first, "BC" or "Surrey, BC" wherever the search is local, brand on Home, About and Contact. Home is now "Mortgage Broker in Surrey, BC | Resvick Mortgages"; About and Contact lead with "Mortgage Broker in Surrey, BC". Six weak H1s were strengthened to match (About, Contact, checklist, affordability, penalty calculator, equity estimator).
The overrides live in one file, `src/lib/specs-seo.mjs`, applied after the §7 specs; the original prompt titles and metas are kept on each spec as `specTitle` and `specMeta`, so this supersedes the "exact §7 title/meta" rule on Jared's instruction. The validator now warns on titles over 60 and metas over 155.
Note for Phase 4: the Surrey city page (/mortgage-broker-surrey/) will also target "mortgage broker Surrey". Home targets the brand plus the city; the city page should target the service-area angle (South Surrey, White Rock, Langley, Cloverdale) so the two do not compete.
