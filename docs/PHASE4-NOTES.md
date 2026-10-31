# Phase 4 notes (Resvick Mortgages)

Added: 35 pages (108 total). Validator: 108 pages, 0 errors (1 warning: home page's 22 in-body links, by design). Engine tests 24/24. Browser check at 390px and 1280px on Home, Surrey, investor hub, co-buying and rates hub: no console errors, no overflow, 8-item header fits on one line at 1240px and up (hamburger below that).
SEO titles ≤60 and metas ≤155 on every page; prompt originals kept as `specTitle`/`specMeta` in `src/lib/specs-p4-*.mjs`.

## Decisions from Jared (Oct 30, 9:49–9:50 pm)
- **Punjabi pages cancelled.** Josh does not serve clients in Punjabi. Nothing from that work remains. The newcomer page says Joshua serves in English and a translator is welcome.
- **No rates on the site.** The rates panel now renders nothing unless `src/data/rates.json` holds a confirmed rate dated within `maxAgeDays` (14). All copy that referred to "the panel above" was reworded. The rates pages are educational articles and rank for the "how rates work" queries, not "current rates". If Josh ever wants rates shown, he fills in the file; nothing else changes.

## New pages
People niches (§7.9, 10): first responders, nurses and healthcare, military and veterans, contractors and trades, new to Canada, separation and divorce, single parents, co-buying, downsizing, porting.
Investor (§7.10, 8): investment property hub (embeds the offset tool), Smith Manoeuvre, DSCR, BRRRR, rent-to-own, Airbnb and short-term rental, converting your home to a rental, presale.
Property types (§7.10, 3): condo and townhouse, mobile and manufactured homes, farm and ALR. Metas are mine (prompt gave titles only), marked provisional.
Cities (§7.12, 12): Vancouver, Surrey, Langley, Burnaby, Coquitlam, Richmond, Abbotsford, Victoria, Kelowna, Kamloops, Nanaimo, Prince George. Every page says Joshua serves the city from his Surrey office, online and by phone, no branch. Each carries a MortgageBroker schema with the Surrey address and the city as areaServed. Surrey is the only page that states the office address and offers in-person meetings.
City rates (2): /mortgage-rates-vancouver/, /mortgage-rates-surrey/.
Every page 1,270+ body words, 5 FAQs, required links present, canonical slugs only, fee-honesty line.

## Nav
New "Situations" group (behind on payments, separation, newcomers, co-buying, porting, investors, presales, cities served). A page whose `nav` matches a dropdown child now highlights its parent group, so investor pages light up Situations without a ninth header item. Header CSS tightened; desktop breakpoint moved to 1240px.

## Keyword split
Home targets "mortgage broker Surrey" with the brand. /mortgage-broker-surrey/ targets the service-area angle (South Surrey, White Rock, Cloverdale, Fleetwood, Newton, Guildford) with a neighbourhood-by-neighbourhood body, so the two do not compete.

## Sources read Oct 30, 2026 (cited with dates in copy)
Newcomers: CMHC Newcomers page and Sagen New to Canada (June 25, 2026): PR or work permit, 95% to $1.5M, 600 score, international credit or 12 months of statements. The brief's "two-year arrival window" is on neither page and is not stated.
Co-buying: gov.bc.ca FTHB exemption (June 20, 2025) proportionate-share rule.
Short-term rentals: gov.bc.ca principal-residence requirement (Sept 21, 2026), City of Vancouver STR handbook (Feb 2025) and Empty Homes Tax (3%, 2025 reference year).
Presale GST: MNP on Bill C-4 (Royal Assent March 12, 2026) for the FTHB GST rebate conditions; CRA page unreachable, copy says confirm with CRA. BCFSA rent-to-own consumer notice (Nov 14, 2017).
Municipal suite rules: Surrey (Oct 20, 2026), Richmond (May 7, 2024), Burnaby (Sept 2023), Victoria, Kelowna carriage houses (Aug 4, 2023), Kamloops (2019 bylaw), Nanaimo (Sept 2024). Surrey Langley SkyTrain (May 8, 2026, late 2029 opening). Abbotsford ~72% ALR (2021 report). Speculation and vacancy tax areas (Dec 8, 2025).
Property types: BCFSA Form B resource (Mar 27, 2023); depreciation report rules effective July 1, 2024 (Lawson Lundell; regional deadlines via Zealty, gov.bc.ca unreachable); BC bulletin B26-01 (Jan 28, 2026) on Z240 vs A277; Manufactured Home Registry (Apr 22, 2026); CMHC Prefab Plus; ALC Housing in the ALR (Apr 15, 2026); FCC mandate (AAFC note).

## Josh to confirm (hedged as lender norms in copy)
- Surrey page: office described as "in the Grandview Heights area of South Surrey"; in-person meetings "by appointment". Both easy to strip.
- Variable, shift, casual and overtime income (two-year average, caps); probationary hires; student loans counted when not in repayment; CAF allowance and disability-benefit treatment; posting messages and offers of employment accepted for relocations.
- Support income with a finalized agreement, Canada Child Benefit counted at some lenders; assumption-with-release on separation files.
- Strata fees at 50% in GDS/TDS (used across condo, downsizing and Vancouver pages); strata deductible and building-problem behaviours; chattel lending for mobile homes and age or CSA-label cutoffs; acreage caps and outbuilding treatment on farm and ALR files.
- STR income treatment (exclude, two years of returns, B-lender statements); 20% down on rentals; 30-year amortizations on uninsured rentals; BRRRR seasoning and door limits; presale deposit ranges, assignment and GST norms; builder rate holds.
- Convert-to-rental tax paragraph (change in use, 45(2) style election, interest deductibility) routed to an accountant; Smith Manoeuvre tracing routed to a tax professional.
- Porting windows (30–90 days common) and penalty refund on a later purchase. The porting illustration ($450K, 3.90% vs 4.80%, about $11,700 over three years) is engine-computed.
- Local employer and neighbourhood descriptions on city pages are general knowledge; worth a local read.

## Remaining dangling link
/guides/ (Phase 5 content engine index). Everything else in §16 now exists.
