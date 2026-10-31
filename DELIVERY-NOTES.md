# Delivery notes: Phase 0 + Phase 1 (Resvick Mortgages)

Phase 2 is documented in `docs/PHASE2-NOTES.md` (52 pages, 0 errors, 24/24 tests).

## What is in the box
29 pages (28 content pages plus a draft privacy page), the generator, the validator, the calculator engine with tests, and the lead-form function. `dist/` is the built site. Validator: 0 errors. Engine tests: 12/12. Every page was checked at phone width for horizontal overflow and the calculators were exercised in a real browser with no console errors.

Phase 0: Home, About, Contact, Calculators index (7 live tools), BC transfer tax calculator.
Phase 1 core: Aftercare, Lender Comparison Report, How brokers get paid, Application checklist, Broker vs bank.
Phase 1 first-time buyers: hub, programs and stacking, pre-approval, down payment, gifted down payment, 5% down, closing costs, affordability.
Phase 1 renewals: hub, renewal rates, switch lenders, stress-test exemption (flagship), early renewal, renewal letter, renewal denied, renewing without a job, rental renewal, renewal reminder (with signup form).

| Page | Body words | Distinct in-body internal links |
|---|---|---|
| /about-joshua-resvick/ | 1107 | 8 |
| /bc-property-transfer-tax-calculator/ | 1317 | 8 |
| /buying-with-5-percent-down/ | 1391 | 8 |
| /closing-costs-bc/ | 1443 | 8 |
| /contact/ | 1106 | 9 |
| /down-payment-guide-bc/ | 1611 | 11 |
| /early-mortgage-renewal/ | 1496 | 7 |
| /first-time-buyer-programs-bc/ | 2120 | 9 |
| /first-time-home-buyer-bc/ | 1646 | 15 |
| /gifted-down-payment/ | 1598 | 7 |
| /how-mortgage-brokers-get-paid/ | 1412 | 7 |
| /how-much-mortgage-can-i-afford/ | 1427 | 9 |
| / | 1462 | 22 |
| /lender-comparison-report/ | 1286 | 9 |
| /mortgage-aftercare-program/ | 1357 | 9 |
| /mortgage-application-checklist/ | 1642 | 9 |
| /mortgage-broker-vs-bank/ | 1233 | 7 |
| /mortgage-calculators/ | 1580 | 10 |
| /mortgage-pre-approval-bc/ | 1396 | 8 |
| /mortgage-renewal-bc/ | 1703 | 13 |
| /mortgage-renewal-denied/ | 1769 | 9 |
| /mortgage-renewal-letter-explained/ | 1396 | 7 |
| /mortgage-renewal-rates-bc/ | 1314 | 7 |
| /mortgage-renewal-reminder/ | 1165 | 7 |
| /privacy/ | 431 | 0 |
| /renewing-mortgage-without-a-job/ | 1581 | 7 |
| /rental-property-mortgage-renewal/ | 1625 | 9 |
| /stress-test-exemption-switching-lenders/ | 1828 | 9 |
| /switch-mortgage-lenders-at-renewal/ | 1482 | 8 |

## Decisions from Jared (Oct 30, evening)
- **Service promises confirmed** (Open Item 11): the written Lender Comparison Report for every client, annual review, rate monitoring and outreach about six months before maturity. Copy describes exactly those; the aftercare page still says frequency and format are set with Josh, which is a good line to keep.
- **Josh's timeline:** ten years as a mortgage broker, after five years as an underwriter. Used site-wide ("10+ years" removed).
- **Aftercare name:** Resvick Aftercare (my pick; the working name is retired).
- **Newcomer pages:** yes (`/new-to-canada-mortgage/`, Phase 4). **Punjabi pages:** yes, assuming "Peng" meant Punjabi. Phase 4, first three: first-time buyer, renewal, pre-approval. Needs a native-speaker review and confirmation that Josh serves clients in Punjabi (it also becomes a Google Business Profile language).

## Spec deviations (flagged, not silent)
- **Broker-vs-bank meta** said "a broker shops dozens of lenders", a lender-count claim that breaks the no-lender-counts rule (Open Item 4). Changed to "many lenders"; change it back in `tools/gen-specs-p1.mjs` if Jared prefers.
- **PTT page title and meta** are mine (not in the prompt): "BC Property Transfer Tax Calculator | With First-Time Buyer Exemption".
- **Privacy page** is not in the §16 link map; draft, noindex, needs legal review.

## Source conflicts and judgment calls
- **PTT first-time exemption:** the prompt's "first $500,000 exempt" is a flat $8,000 up to $835,000 phasing to zero at $860,000 (gov.bc.ca). Copy and calculator follow gov.bc.ca; a $750,000 home still owes $5,000.
- **Suite and rental income percentages** conflict (prompt: offset 50–80%, add-back about 50%; other sources up to 100%; CMHC up to 100% of gross for an owner-occupied two-unit). Copy gives the prompt's ranges, names the CMHC ceiling as a ceiling, and says lenders vary. Needs Josh's lender-side view before the suite cluster in Phase 2.
- **Break-even figures:** the research says about 6 basis points on $500,000 repays a lean switch; the engine gives different values depending on the assumptions, so copy shows the engine's own illustrative figures and never the research's.
- **Not used (per the bank):** CMHC's "$1.15M / $400B" and "$375 a month" figures, Ratehub's $13,857, "Prime+3% / $970" and "4.5× income" as a borrower cap. The "$3,000" allowance appears only as the Finance Canada measure of Dec 16, 2024.
- **Finance Canada measure scope:** the bank says "any new lender" while OSFI's measure covers federally regulated lenders. The pages keep the two measures separate and hedge on credit unions.

## Josh to confirm (practice or lender-behaviour statements written as general and hedged)
- The 21-day renewal statement figure (from the prompt and gap brief; no statute in the bank).
- Roughly 90 days of down-payment history; the gift-letter contents and who counts as family for gifts; lenders re-checking employment and credit before funding; income averaging for overtime and bonuses.
- Same-lender renewals usually skipping an income re-check; severance and EI treated cautiously; short-term-rental income often excluded at A lenders; B-lender fees (no figure given).
- Refinance caps: up to 80% with an A lender (four doors or fewer), about 75% with alternative lenders (from PACKAGE.pdf, not an official page).
- The GST rebate non-date eligibility conditions are described only generally and point to CRA.
- The Lender A/B/C comparison on the report page uses invented, labelled-illustrative terms.

## Still placeholder
Photos (hero and About arches are empty), colour tokens and logo (Open Item 9), rates (empty on purpose), reviews (hidden until real ones exist), GA4 snippet, CRM and alert webhooks for `/api/lead`, the `/reviews` redirect, and the cal.com embed (test on staging).
**Nine calculators on the index are "in development" cards** (prepayment, compare, consolidation, offset, suite checker, readvanceable, sale proceeds, MLI, quiz). Several Phase 1 pages link to them; build them with Phase 2.

## Links to pages not built yet (37, all valid §16 slugs)
Rates cluster (mortgage-rates-bc, 3- and 5-year fixed, variable, fixed-vs-variable, open-vs-closed, interest-rate-differential, blend-and-extend, rate-hold, prepayment, collateral charge), refinance (hub, break-even, is-it-worth, pay-off-debt, cash-out, rental, secondary-suite), suite income, self-employed hub, stated income, newly self-employed, contractors, B-lender, private lending, behind-on-payments, credit building, car loan, cosigner, deposit loan, newcomers, presale, investor hub, home equity estimator, penalty calculator page, porting, Surrey city page. Do not launch before these exist.

## Next
Phase 2: rates cluster, refinance cluster, suite cluster, plus the in-development calculators that Phase 1 links to.
