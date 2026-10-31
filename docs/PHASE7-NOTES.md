# Phase 7: partners page and reviews (Oct 31)

## Confirmed by Jared (Oct 31)
- Four Google reviews approved for use by initials.
- Partners approved for listing (Jared, both notaries, Spagnuolo LLP).
- "1,000+ mortgages funded" confirmed true. It can stay in the proof strip and page copy.

## Still to confirm with Josh before launch
- Referral fees (below) and the rest of the questionnaire.
- /partners/ says Josh neither pays nor accepts referral fees from the listed realtor, notaries or law firm. Confirm this is true. If any fee or arrangement exists, the page must disclose it.
- Partners (details from Google listings and the firm's site): Jared Gibbons (Royal LePage Little Oak Realty), Rajesh Ahuja Notary Corporation (White Rock), Clayton Heights Notary (Surrey), Spagnuolo LLP (Coquitlam). Ask each if they are happy to be listed, and check phone numbers and addresses.
- Reviews (src/data/reviews.json): four Google reviews shown by initials. J.G. is a REALTOR® and is the same Jared listed as a partner. Edits: "!" changed to "." or removed (no-exclamation rule); J.M.'s closing thank-you line dropped. Confirm the reviewers are fine with being quoted. No star rating, count or review schema is shown.

## Where reviews appear
Home, about, contact, apply, refer, partners, first-time buyer, pre-approval, programs, affordability, down payment, accepted offer, broker vs bank, how brokers get paid, and every city page. All four reviews are purchase stories, so they are kept off renewal, refinance and self-employed pages. Controlled by REV_TAG in src/lib/site.mjs; each review has tags in reviews.json.
