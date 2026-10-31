# Bank of Canada decision-day post: the fill-in template

Who this is for: Josh, or whoever publishes for him, on each of the Bank's eight announcement days. No developer needed. The post goes up the same day; a day late is still worth publishing, with the real date.

Worked example to copy from: `src/posts/bank-of-canada-october-2026.mjs` (the October 28, 2026 decision).

## 1. Before you write (10 minutes, decision day, after 9:45 am ET)

Open the Bank's press release at bankofcanada.ca (home page, "Press releases", the one dated today). Pull these, verbatim where quoted:

| Pull | Where in the statement | Goes in |
|---|---|---|
| Decision: raised / lowered / held, by how much, to what | first sentence | H1, lede, "What the Bank decided" |
| Bank Rate and deposit rate | first paragraph | "What the Bank decided" |
| The Bank's stated reason (one or two sentences, quoted) | second paragraph | "What the Bank decided" |
| Headline CPI now, core measures, the projection | inflation paragraph | "What the Bank decided" |
| GDP, unemployment, housing sentence | growth paragraphs | "What the Bank decided" |
| The forward-guidance sentence ("Governing Council ...") | last paragraph | "What the Bank decided", and the "do not" list |
| Next announcement date; next Monetary Policy Report date | footer of the release | last paragraph of section 1, FAQ |

The next afternoon, check one bank's prime-rate press release (RBC, TD, BMO, Scotia, CIBC or National all publish one) and record the new prime and its effective date. If prime has not moved by the next morning, say so and update the post when it does.

Cite as: "(Bank of Canada, <Month> <day>, <year>)" and "(<Bank name>, <date>)". No other sources are needed for this series. Never quote a forecast from anyone, including a bank economist.

## 2. The file

Copy the October 2026 post to `src/posts/bank-of-canada-<month>-<year>.mjs` and change:

- `slug`: `/guides/bank-of-canada-<month>-<year>/`
- `date`: today, `YYYY-MM-DD`
- `series`: leave as `boc`
- `title`: 60 characters or fewer. Pattern: `Bank of Canada <Month> <Year> Rate Decision | What It Means`
- `meta`: 155 or fewer. Pattern: `The Bank of Canada <raised/lowered/held> its policy rate <to X%> on <date>. What it means for variable-rate holders, renewals in the next year and fixed rates.`
- `h1`: the decision in plain words, with the date
- `crumb`: `Bank of Canada, <Month> <Year>`
- `lede`: two sentences, what happened and who it touches
- `links`: keep the list; it is the standard set (below)

## 3. The sections, in order

0. **The short-version box, first in the body.** The October post imports `short` from `../lib/short.mjs` and opens the body with `${short({ answer, who, next })}`. Answer: the decision and what it means, in two or three plain sentences. Who: variable-rate holders, renewers and fixed-rate shoppers. Next: one step with a link (usually the payment or renewal calculator).
1. **What the Bank decided.** The numbers, the quoted reason, the inflation and growth picture, the forward-guidance sentence, the next dates. Four paragraphs. No opinion.
2. **What happened to prime.** One paragraph. New prime, effective date, which bank's release you read. What it means for "prime minus" mortgages in one sentence.
3. **If you hold a variable-rate mortgage.** Adjustable (payment changes) vs static-payment (amortization changes). One illustrative payment figure from the site engine (see §5). Trigger-rate reminder for static-payment holders if the rate rose; skip if it fell. One paragraph on converting to fixed, with no recommendation.
4. **If you are renewing in the next twelve months.** Start early, letter 21+ days out, rate holds about 120 days out, compare. The straight-switch exemption reminder. Links to the renewal guide, early renewal guide and exemption guide.
5. **If you are watching fixed rates.** Bond yields, not the policy rate. Rate holds. Links to the rate hold guide and the term pages.
6. **What to do, and what not to do.** Three "do", three "do not". The last "do not" is always: do not act on a forecast.
7. The "how this series works" callout and the CTA. Copy them unchanged.
8. **FAQs.** Five. Keep the structure of the October post; change the numbers and the next date.

Length: 1,000 words minimum in the body; the October post is about 1,800. Run `node tools/check-page.mjs src/posts/<file>.mjs` and fix anything it flags (word count, missing links, an exclamation mark).

Reading level: grade 8 target (see `docs/READABILITY-RULES.md`). The post must score grade 8.5 or lower, average 17 words or fewer per sentence, and have no sentence over 30 words. Run `node tools/readability.mjs src/posts/<file>.mjs` until it prints OK. Split long sentences rather than cutting facts; quoted Bank sentences stay verbatim, so keep the sentences around them short. End table cells with a period and put a citation's period after the closing parenthesis, or the checker reads two sentences as one.

## 4. The three audiences, every time

Variable-rate holders, borrowers renewing within a year, and borrowers shopping for a fixed rate. Each gets its own section, even on a "hold" decision, because a hold still answers their question ("nothing changed for your payment; here is what to watch").

## 5. The one number you are allowed to compute

An illustrative payment change on a round balance (the October post used $500,000 over 22 years, old rate vs new rate). From the site folder:

```
node -e 'const RM=require("./src/assets/js/engine.js"); const a=RM.payment({principal:500000,ratePct:OLD,amortYears:22}), b=RM.payment({principal:500000,ratePct:NEW,amortYears:22}); console.log(a.payment,b.payment,(b.payment-a.payment).toFixed(2))'
```

Label it illustrative and say the lender's statement governs. No other figures are invented. Everything else is quoted from the Bank or the bank's prime release.

## 6. Rules that do not bend

- No predictions, no "experts expect", no "likely to". The Bank's own guidance sentence is the only forward-looking line, and it is quoted.
- No exclamation marks, no em dashes, no urgency language.
- No rates for Josh's own products. The series never says what Joshua can offer today.
- Dates on everything. The post is a record of one day.
- Fee honesty line is in the CTA already; leave it.
- If the Bank's statement and a news report disagree, the statement wins. If you cannot open the statement, wait; do not publish from a headline.

## 7. The standard link set

Keep these in `links` and use each at least once in the body:

```
/variable-rate-mortgage/
/fixed-vs-variable-mortgage/
/stress-test-exemption-switching-lenders/
/mortgage-renewal-bc/
/early-mortgage-renewal/
/mortgage-rate-hold/
/5-year-fixed-mortgage-rate/
/3-year-fixed-mortgage-rate/
/mortgage-calculators/#payment
/mortgage-calculators/#renewal
/interest-rate-differential/
```

Add a link to the previous decision's post in the first section ("the previous decision, on <date>, ...") once there is one.

## 8. Publish

`node build.mjs`, then deploy. The post appears on `/guides/` automatically, in the Bank of Canada series, newest first, and in the sitemap with its date. Send the same note to aftercare clients by email the same day.

## 9. The 2026 and 2027 dates

2026: January 28, March 18, April 29, June 10, July 15, September 2, October 28, December 9 (Bank of Canada schedule published August 6, 2025). All at 9:45 am ET. The 2027 schedule is published by the Bank in the summer of 2026; add it here when it is out.
