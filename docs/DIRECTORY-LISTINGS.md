# Directory listings: claim and align at launch

Prepared Oct 30, 2026 from build prompt §7.14 and §13. Companion to GBP-SETUP.md. Everything here is copy-paste ready; the rule is one identity, identical everywhere.

The Oct 30 teardown found Birdeye auto-generated "Mortgage Brokers near Surrey" pages ranking fourth and fifth for "mortgage broker Surrey", ThreeBestRated's Langley list ranking third for "mortgage broker Langley", and WOWA's Vancouver brokerage list ranking fourth for "mortgage broker Vancouver". Those directories are the softest targets in the results, and two competing brokers' Birdeye profiles appeared unclaimed. Claiming and completing them is free, and consistent listings are what Google uses to confirm a business is real.

---

## 1. The NAP block (identical on every directory)

```
Business name:   Resvick Mortgages
Contact:         Joshua Resvick, Mortgage Broker
Brokerage:       Xeva Mortgage
Address:         #106–2626 Croydon Drive, Surrey, BC V3Z 0S8
Phone:           778.882.5674
Email:           joshua@resvickmortgages.com
Website:         https://www.resvickmortgages.com/
Booking:         https://cal.com/resvickmortgages/mortgage-advice
Licences:        BCFSA Brokerage Licence #X300203 · Broker Licence #MB503619
Category:        Mortgage broker
```

Where a directory has a "suite" or "unit" field, put "106" there and "2626 Croydon Drive" in the street field. Where it has a single address line, use "#106–2626 Croydon Drive". Never abbreviate "Drive" on one site and spell it out on another; pick the form above everywhere.

---

## 2. Descriptions (three lengths, same voice)

**Short (155 characters)** for directory taglines and meta fields:

```
BC mortgage broker Joshua Resvick, Xeva Mortgage. Ten years a broker, 1,000+ mortgages funded. First-time buyers, renewals, refinancing. All of BC, online.
```

**Medium (393 characters)** for profile summaries:

```
Resvick Mortgages is Joshua Resvick, a licensed mortgage broker (BCFSA #MB503619) with Xeva Mortgage in Surrey, BC. Ten years as a broker after five as an underwriter, with over 1,000 mortgages funded. He works with first-time buyers, renewals, refinances, self-employed borrowers and investors across BC, online and by phone. On most mortgages the lender pays the broker. Free 15-minute call.
```

**Long (746 characters)** for full "about" fields:

```
Resvick Mortgages is Joshua Resvick, a licensed mortgage broker (BCFSA #MB503619) with Xeva Mortgage. Joshua has been a broker for ten years, after five years as a mortgage underwriter, and has funded over 1,000 mortgages. He works with first-time buyers, homeowners renewing or refinancing, self-employed borrowers and investors across British Columbia, online and by phone from his Surrey office. On most mortgages the lender pays the broker, so there is no fee to you; any exception is disclosed in writing first. Every client receives a written comparison of lender options before deciding, and the relationship continues after funding with annual reviews and renewal planning. Book a free 15-minute call to start.
```

Do not edit these per directory beyond trimming to a character limit. No "best", no "lowest rates", no lender counts, no review counts, no exclamation marks.

---

## 3. UTM convention

Every directory gets its own `utm_source` so GA4 can attribute traffic. Medium and campaign are fixed.

| Directory | Website URL to enter |
|---|---|
| Google Business Profile | https://www.resvickmortgages.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp |
| Birdeye | https://www.resvickmortgages.com/?utm_source=birdeye&utm_medium=directory&utm_campaign=listings |
| WOWA | https://www.resvickmortgages.com/?utm_source=wowa&utm_medium=directory&utm_campaign=listings |
| ThreeBestRated | https://www.resvickmortgages.com/?utm_source=threebestrated&utm_medium=directory&utm_campaign=listings |
| Xeva profile | https://www.resvickmortgages.com/?utm_source=xeva&utm_medium=directory&utm_campaign=listings |
| Bing Places | https://www.resvickmortgages.com/?utm_source=bing&utm_medium=organic&utm_campaign=listings |
| Apple Business Connect | https://www.resvickmortgages.com/?utm_source=apple&utm_medium=organic&utm_campaign=listings |
| Yelp | https://www.resvickmortgages.com/?utm_source=yelp&utm_medium=directory&utm_campaign=listings |

If a directory strips query strings (some do), enter the plain URL and note it in the tracking sheet; the referrer will still show in GA4.

---

## 4. Claim steps, directory by directory

### Birdeye (birdeye.com)
Why: its auto-generated "Mortgage Brokers near Surrey" and "Mortgage Lenders near Surrey" pages ranked fourth and fifth for "mortgage broker Surrey" on Oct 30. Profiles on those pages come from aggregated data; a claimed, complete profile with a photo ranks above an unclaimed stub.
1. Search birdeye.com for "Resvick Mortgages Surrey". If a stub exists, use "Claim this business". If not, create a free business profile.
2. Category: Mortgage Broker. Enter the NAP block, the medium description, hours (same as GBP), the Birdeye UTM URL.
3. Upload the hero portrait as the profile image.
4. Birdeye will offer a paid review-management plan. Decline; the free listing is what matters.
5. Do not connect the Invis listing if Birdeye suggests it as "possibly yours".

### WOWA (wowa.ca)
Why: WOWA's Vancouver brokerage list ranked fourth for "mortgage broker Vancouver" and its calculators dominate the tool queries. A broker profile on WOWA is a citation from a high-authority Canadian site.
1. WOWA lists brokerages and individual brokers under "Find a mortgage broker". Request a listing through its broker contact form (the exact path changes; search "WOWA add mortgage broker").
2. Supply the NAP block, the long description, the licence numbers and the WOWA UTM URL. WOWA verifies licences against BCFSA, so the numbers must match the registry exactly.
3. WOWA may ask for rates to display. Decline. Josh does not publish rates, and a stale rate on a third-party site is worse than none.

### ThreeBestRated (threebestrated.ca)
Why: its Langley list ranked third for "mortgage broker Langley". ThreeBestRated is editorial: it selects three businesses per city on its own criteria (reviews, history, complaints, cost). You cannot buy in.
1. Use "Nominate a business" on threebestrated.ca for Surrey and for Langley.
2. Supply the NAP block, the medium description and the ThreeBestRated UTM URL.
3. Selection depends mostly on Google review volume and consistency over time, so this is a six-to-twelve-month outcome tied to the review engine in GBP-SETUP.md section 9. Nominate now, expect nothing until reviews exist.

### Xeva profile alignment
Why: the brokerage's own directory is the one citation that also confirms the licence relationship, and it is the first place a lender or regulator looks.
1. **JOSH:** ask Xeva for the edit access to his agent profile on the Xeva site.
2. Make the name, phone, email, address and photo match the NAP block exactly. Replace any old headshot with the hero portrait.
3. Set the website link to the Xeva UTM URL. If the profile has a bio field, use the medium description.
4. Confirm the licence number shown is MB503619 and the brokerage licence is X300203.
5. If Xeva requires a network disclosure line on agent sites, get the exact wording (Confirm List item 3) and send it to Jared for the footer.

### Bing Places (bingplaces.com)
Why: Bing powers a meaningful share of desktop search and the Windows start menu, and the listing can be imported from Google in minutes.
1. Sign in at bingplaces.com with a Microsoft account Josh owns.
2. Choose "Import from Google Business Profile" after the GBP is verified. Check every imported field against the NAP block.
3. Set the website to the Bing UTM URL. Add the same photos and the same 20 service areas.

### Apple Business Connect (businessconnect.apple.com)
Why: Apple Maps is the default on every iPhone; "mortgage broker near me" on an iPhone goes here first.
1. Sign in with Josh's Apple ID at businessconnect.apple.com. Claim or create "Resvick Mortgages".
2. Category: Financial Services → Mortgage Broker (use the closest Apple offers). Enter the NAP block, hours, the Apple UTM URL and the booking link under "Actions".
3. Upload the cover photo and the portrait. Apple reviews each change; allow a few days.

### Yelp (biz.yelp.com)
Why: Yelp listings feed other directories and Apple Maps reviews. Low priority for a mortgage broker, but an unclaimed Yelp stub with wrong data is a liability.
1. Search Yelp for "Resvick Mortgages". Claim any existing stub; otherwise add the business.
2. Category: Mortgage Brokers. Enter the NAP block, the medium description, hours and the Yelp UTM URL.
3. Decline the advertising calls that follow. Yelp sales staff will phone repeatedly; a polite no is enough.
4. Do not ask clients for Yelp reviews. Yelp filters solicited reviews and the ask dilutes the Google request.

---

## 5. Consistency checklist (run before launch, then quarterly)

- [ ] Name is exactly "Resvick Mortgages" on every listing. No city appended, no "Joshua Resvick –" prefix, no "Mortgage Broker" suffix.
- [ ] Address is #106–2626 Croydon Drive, Surrey, BC V3Z 0S8 everywhere. No second address anywhere, including old listings from a previous office.
- [ ] Phone is 778.882.5674 everywhere. No tracking numbers on directories; a different number per directory breaks the match Google relies on.
- [ ] Email is joshua@resvickmortgages.com everywhere.
- [ ] The string "Resvick & Associates" appears on nothing Josh controls, and no listing links to the Invis profile.
- [ ] No per-city listings exist (no "Resvick Mortgages Langley", no "Resvick Mortgages Vancouver"). City pages on the website are service pages; the directories carry one location.
- [ ] Category is "Mortgage broker" (or the directory's nearest equivalent) as primary on every listing.
- [ ] Licence numbers X300203 and MB503619 appear wherever a licence field exists, and nowhere with a typo.
- [ ] Photos are the three Kate Paterson Creative photos or newer real photos. No stock images.
- [ ] Hours match the GBP hours exactly.
- [ ] No review counts, ratings, lender counts or rates appear in any description.
- [ ] Each directory's website URL carries its own utm_source from section 3.
- [ ] Old Squarespace-era listings (if any directory copied the old site's data) are updated or removed, not left as duplicates.

## 6. Tracking sheet

Keep one row per directory in a shared sheet: directory, URL of the live listing, date claimed, login owner (always Josh or Xeva, never the builder), UTM used, last checked. Review it quarterly alongside the GBP maintenance list.

## What Josh must supply

1. Logins he owns for Google, Microsoft, Apple and Yelp (or create them under joshua@resvickmortgages.com).
2. Edit access to his Xeva profile, and the network disclosure wording if Xeva requires one.
3. Real business hours.
4. A decision on ThreeBestRated nomination timing (now, or after the first reviews exist).
