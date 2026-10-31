# Phase 3 notes (Resvick Mortgages)

Added: 21 pages (73 total). Validator: 73 pages, 0 errors (1 warning: the home page's 22 in-body links, by design). Engine tests 24/24. Four new pages driven in a real browser at 390px and 1280px: no console errors, no horizontal overflow, the readvanceable tool renders on its page.
All 21 carry SEO titles (≤60) and metas (≤155) per Jared's Oct 30 instruction; prompt originals kept as `specTitle`/`specMeta` in `src/lib/specs-p3-*.mjs`.

## New pages
Alternative lending (§7.7): /self-employed-mortgage-bc/ (hub), /stated-income-mortgage/, /newly-self-employed-mortgage/, /b-lender-mortgage-bc/, /bad-credit-mortgage-bc/, /mortgage-after-bankruptcy/, /mortgage-after-consumer-proposal/, /build-credit-for-a-mortgage/, /private-mortgage-lending-bc/.
Equity and access (§7.8): /heloc-bc/, /second-mortgage-bc/, /bridge-financing/, /spousal-buyout-mortgage/, /readvanceable-mortgage/ (embeds the readvanceable tool), /purchase-plus-improvements/, /reverse-mortgage-bc/, /deposit-loan-and-borrowed-down-payment/.
Distress (§7.11): /behind-on-mortgage-payments/ (hub), /missed-a-mortgage-payment/, /mortgage-default-and-foreclosure-bc/, /mortgage-payment-deferral/. Calm tone, one soft contact line each, no sales pressure.
Every page: 1,380 to 2,160 body words, 5 FAQs, required links present, canonical slugs only, fee-honesty line (A lender pays the broker; lender fees normal and broker fees possible on B and private files, BCFSA Form 1A). No fee figures anywhere.

## Sources read Oct 30, 2026 (cited with dates in copy)
- Equifax Canada retention periods: late payments and collections 6 years, first bankruptcy 6 years after discharge, consumer proposal 3 years after completion or 6 from filing.
- OSFI B-20 combined loan plan advisory: 65% revolving cap, 80% combined ceiling, lending above 65% amortizing and non-readvanceable.
- CMHC Improvement product (via the reference bank): 95% for 1–2 units, 90% for 3–4, lending value the lesser of as-improved and as-is plus cost, single advance up to 10% of as-improved value.
- Sagen "Equity Buyout Policy" lender update, Feb 5, 2019, still hosted: purchase transactions to 95% LTV, both parties on title, separation agreement or court order. The prompt said not to publish an LTV until a bulletin was confirmed; this one is, and the page cites it. CMHC and Canada Guaranty terms not found; copy says "comparable programs".
- People's Law School "Facing foreclosure" and Dial-A-Law "Foreclosure" (reviewed April 2025): demand letter, petition commonly after about three months of arrears, 21-day response, order nisi with a six-month default redemption period, conduct of sale needs court approval, "final order of foreclosure" (older term "order absolute" noted once).
- FCAC guideline on mortgages in exceptional circumstances (July 2023, updated Sept 2025), FCAC financial-difficulties page (Oct 2025), FCAC briefing on the Canadian Mortgage Charter (Nov 2023): copy says the Charter is expectations, not law.
- Canadian Mortgage Trends reverse-mortgage overview (Oct 22, 2026): 55+, typically up to about 55% of value. No providers or rates named.

## Josh to confirm (hedged as lender norms in copy)
Alt lending: two years since discharge or completion for A lenders and insurers, about a year for B lenders; the 2/2/2 re-established credit convention; 20%+ down for most stated-income and B files; CCA add-back and gross-ups at some A lenders; paying out a proposal at closing with B or private money; independent legal advice as a condition of most BC private mortgages; collections, judgments and CRA balances paid before funding.
Equity: HELOC demand and review clauses; who pays HELOC appraisal and registration; second mortgages exceeding the 80% combined ceiling through non-federally-regulated lenders; bridge only with the new mortgage's lender, prime-plus pricing and admin fee; assumption-with-release on spousal buyouts and how support income counts; PPI completion windows; reverse mortgage no-negative-equity guarantee "generally included" and OAS/GIS unaffected; BC deposit timing after subject removal; flex-down lenders requiring closing costs from own funds. All three insurers' current spousal-buyout terms.
Distress: deficiency and surplus handling after a court-ordered sale (People's Law School does not cover it; needs a lawyer read); 30/60/90-day reporting and how long late marks stay; skip-a-payment mechanics; "hardship team" wording; naming the Credit Counselling Society (not from the bank).

## Nav
Alt-lending pages sit under Self-Employed; equity and distress pages under Refinancing; PPI and deposit-loan pages under First-Time Buyers. A "Situations" nav group may be worth adding in Phase 4 when the people-niche pages land.

## Links to pages not built yet (14)
Phase 4: /investment-property-mortgages-bc/, /dscr-loans-canada/, /smith-manoeuvre/, /converting-your-home-to-a-rental/, /mortgage-for-contractors/, /new-to-canada-mortgage/, /presale-mortgages-bc/, /porting-your-mortgage/, /mortgages-during-separation-and-divorce/, /downsizing-and-your-mortgage/, /mortgage-broker-surrey/, /mortgage-rates-vancouver/, /mortgage-rates-surrey/. Phase 5: /guides/.
