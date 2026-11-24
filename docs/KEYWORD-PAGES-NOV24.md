# Keyword pass and new pages (Nov 24, 2026)

Source: Google Ads Keyword Planner sheet "Resvick Mortgages – BC Keyword Targets (Nov 2026)", BC, Nov 2025 to Oct 2026.
Volumes are ranges (no ad spend on the account).

## New pages
- /home-equity-loan-bc/ ("home equity loan", 100-1K, bids to $77.61). Equity estimator auto-placed with the email form.
- /reverse-mortgage-calculator-bc/ ("reverse mortgage calculator", 100-1K). New engine function RM.reverseMortgage (tested).
- /cmhc-insurance-bc/ ("cmhc insurance", 100-1K; "mortgage default insurance"). Uses the existing CMHC premium tool.
- /fhsa-bc/ ("fhsa", 1K-10K).
- Dropped: a separate mortgage payment calculator page. It would compete with /mortgage-calculators/ for the same searches; the hub H1 now covers "mortgage calculator BC".

## Sources
- Financial Consumer Agency of Canada, Reverse mortgages (modified 2025-10-15): usually 55+, usually up to 55% of value, payout options, costs, repayment.
- HomeEquity Bank, CHIP Reverse Mortgage page: up to 55%, all owners 55+, $250,000 minimum appraised value, no-negative-equity guarantee with exclusions.
- CMHC, Premium information for homeowner and small rental loans: premium table, 0.20% over-25-year surcharge, portability credits, PST only in ON, QC, SK.
- CRA, Participating in your FHSAs (modified 2026-09-17) and Definitions for FHSAs (modified 2026-02-05).
- Province of BC, Home Owner Grant page (updated 2026-09-22): up to $570 from Jan 1, 2027; 2026 threshold $2,075,000.
- Bank of Canada press release Oct 28, 2026 (policy rate 2.50%); National Bank prime 4.70% effective Oct 29, 2026.

## Rates right now box
- src/data/benchmarks.json. Public benchmark rates only. Hides itself 3 days after nextDecision.
- The Dec 9, 2026 Bank of Canada scheduled task updates it. If that task is ever skipped, the box disappears rather than going stale.

## CONFIRM with Josh
- Reverse mortgages: which lenders he uses (the page names HomeEquity Bank only as the source of the 55%/age/$250,000 facts).
- Home equity loan page: that second mortgages he arranges are usually private or B lender, short term, rolled in at renewal.
- CMHC page: fine as is; premiums are CMHC's published table.
