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

## Fact-check 13-30 applied (Oct 31)
Corrections from Jared's fact-check file applied to the site copy:
- Alternative-lender refinance ceiling: 80% on strong files, 65% to 75% when credit or property is harder (was "about 75%"). Pages: refinance a rental, rental renewal, BRRRR, plus SEO meta.
- Stated income: insured programs (Sagen, Canada Guaranty) can go to 10% down; uninsured and alternative programs are capped at 80% LTV.
- 2/2/2 is labelled a rule of thumb, not a published insurer rule; the dollar limit varies by lender.
- Bankruptcy and proposal: Sagen's two-year test is named; B-lender timelines vary by lender and product.
- Variable pay: needs a two-year history; often the lower of last year or the two-year average (first responders, nurses, single parents, Kamloops, Prince George).
- Porting: several major lenders allow up to 120 days.
- Suite income: unauthorized-suite wording tightened (Sagen case by case, most A lenders count zero); Canada Guaranty caps at 50% of gross rent, so the 100% two-unit credit is CMHC and Sagen only; insurers publish no offset percentage.
- Left as written (confirmed): strata 50%, HELOC 65/80, bridge financing, spousal buyout 95%, 90 days of down payment history, rate holds, prepayment privileges, short-term rental exclusion.
Open gaps from the fact-check: CMHC and Canada Guaranty bankruptcy seasoning lines, CMHC tax-arrears rule, B2B figures (broker-hosted copy), and no insurer publishes an STR rule.

## Thank-you flow and conversion tracking

- Page: `/thank-you/` (src/pages/thank-you.mjs, script src/assets/js/thanks.js). noindex, left out of sitemap.xml, disallowed in robots.txt, no closing CTA, no reviews. One page, nine blocks chosen by `?f=` (contact, apply, refer, accepted-offer, renewal-reminder, check-up, quiz, booking, other). Unknown or missing `f` shows the generic block; with JavaScript off the generic block shows.
- Redirects: after `/api/lead` returns 200, forms.js sends the visitor to `/thank-you/?f=<data-lead value>`. A failed post (502) shows the existing error message and does not redirect. The in-page success message stays as the fallback if navigation is blocked.
- Quiz: quiz.js redirects to `/thank-you/?f=quiz` only after the lead is saved. It stores the title, score and band (no financial values) in sessionStorage so the thank-you page can show "Your result" with a link back to the quiz.
- Stay-on-page forms: the mortgage check-up and the home equity estimator carry `data-stay`. Their results live on the page, so they keep the visitor there and fire `generate_lead` in place. Remove `data-stay` from the form if Josh prefers a redirect.
- Booking: after the visitor clicks "Show available times" on /contact/, forms.js listens for a cal.com iframe message containing `bookingSuccessful` (origin must be cal.com) and redirects to `/thank-you/?f=booking`. Bookings made by the "open the booking page in a new view" link, or from the Book a call buttons that go straight to cal.com, cannot be seen by the site. See the confirm list below.
- Events (GA4, when `GA4_ID` is set): `generate_lead` {form, page} fires once per real submission on /thank-you/ (and in place for the two stay-on-page forms). Existing events are unchanged: `form_submit`, `reminder_signup`, `book_call_click`, `phone_click`, plus a new `text_click` for the "Text Josh" links. Without gtag, events go into `window.dataLayer` instead (harmless; useful if Tag Manager is added later).
- De-duplication: forms.js and quiz.js leave a ten-minute sessionStorage token (`rm-lead`) just before redirecting. thanks.js consumes it on first view, so a refresh, a bookmark or a shared link never counts a second conversion. If storage is blocked, the event fires once per view.
- "Text Josh": `sms:+17788825674` link on the contact page (Phone card) and on /thank-you/ only. Not in the sticky bar. No WhatsApp.

How to set the GA4 conversion: in GA4 go to Admin, Events, wait for `generate_lead` to appear (or add it by name), then switch on "Mark as key event". Count it as the only lead conversion. `form_submit` fires too, so do not mark both or leads will be double counted. Optional: create audiences or reports by the `form` parameter (register `form` as a custom dimension, event scope).

Confirm with Josh:
- Can 778.882.5674 receive texts? If not, remove the sms links (contact page, SITE.smsHref in site.mjs, thank-you page).
- Response-time wording: the thank-you copy makes no timing promise (it follows the contact page: "I read and answer messages myself"). The quiz form's existing line says "usually within a business day" and the refer form's existing in-page message says "in the next day or two". Confirm both or soften them.
- cal.com: confirm the real booking-success message from the embed on a live booking (it could not be tested offline; the test used a simulated cal.com message). Cal's own setting "redirect on booking" could send people to the thank-you page, but inside the embed iframe it would load the whole page in the frame, so the message hook is used instead. Confirm the cal.com event sends the confirmation email (the booking block says it does).
- robots.txt blocks /thank-you/ and the page is also noindex. That is fine because nothing links to it. If it ever gets linked, remove the robots.txt line so search engines can see the noindex tag.

## Newton full-application link (Oct 31, 2026)
- `SITE.fullApp` (src/lib/site.mjs) holds Josh's Newton Velocity client-journey link. It shows as a secondary "Start the full application" button in a box under the short form on /apply/, and as a line on the apply thank-you block. The short form and its buttons are unchanged. Click event: `full_app_click`.
- Confirm with Josh: (1) this link is meant to be public and safe to share on a website; (2) Xeva is fine with clients reaching the full application without a first call and without the BCFSA disclosure step being sent first; (3) the privacy policy should say lead details may be held in Newton.
- Later option: Newton "Velocity In API" (request key in Velocity, Settings, Request API Key, with resvickmortgages.com) to push leads into Velocity automatically.
