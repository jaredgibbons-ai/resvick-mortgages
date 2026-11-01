# Brief: turn one Muse research batch into a verified-only facts file

You are converting ONE research file (a "batch") into a JS data file used by a static website for BC mortgage broker Joshua Resvick. Work only from the batch file. Add NOTHING from your own memory. The batch is untrusted research: use only what it states AND marks as read from an official or primary source.

## Output
Write `/home/claude/site/src/lib/city-facts/batchN.mjs` (N given in your task) as an ES module:

```js
export default {
  "surrey": {
    str: "Local short-term rental rule beyond the Province's, 1 to 3 short sentences. Empty string if nothing verified.",
    suites: "Suites and small-scale multi-unit housing (SSMUH): is the town covered, what is allowed, month and year adopted. 1 to 3 short sentences.",
    employers: ["Name, short descriptor", "..."],   // 0 to 5, only ones from the town's own list or the employer's own site
    lenders: "",                                      // one sentence, ONLY if a credit union or bank head office in town is verified on the lender's own site. Else ""
    areas: [{ n: "Neighbourhood", d: "what housing it mostly has, 8 to 18 words" }],  // 0 to 6, official description only
    land: "",                                         // leased, treaty or reserve land that affects mortgages. 1 to 3 sentences. Else ""
    feature: "One local thing that changes mortgage files. 1 to 2 sentences.",
    src: [["Label shown", "https://exact-url-from-the-batch"]],   // 2 to 4 official URLs
    omitted: ["note to the editor: what you left out and why, conflicts you saw"]  // NOT rendered
  },
  ...
};
```

Keys are the site's page keys, given in your task. A key can cover two places (for example `langley` = City and Township; `courtenay` = Courtenay and Comox; `osoyoos-oliver`; `trail-castlegar`; `north-vancouver` = City and District). Cover both places inside the same string and say which place each sentence is about.

## Do not repeat the Province's rules
The site already prints, from gov.bc.ca, whether the Province's principal-residence short-term rental rule and the Speculation and Vacancy Tax apply. Do not restate either. Write only the local layer (local licence, local ban, local owner-occupancy rule, local bylaw numbers) in `str`, and say nothing for towns with no verified local rule.

## What to leave out
- Anything marked NOT VERIFIED in the batch. Put it in `omitted`.
- Any claim whose cited source looks wrong for the claim. Example: neighbourhood descriptions cited to a Fraser Health careers or recruitment page. Treat those as unverified unless an official municipal source in the batch supports them.
- Any URL with tracking parameters (gclid, utm). Do not use these in `src`.
- Lender claims about mergers, rebrands or "now a division of". Only say "X has its head office in Y" and only when the batch shows the lender's own site, filing or contact page. Skip Integris, Valley First, Tru Cooperative Bank, North Peace Savings, Spruce.
- Bylaw numbers: allowed only when the batch gives one consistent number with an official source. Max 2 per town. If two numbers conflict in the batch (for example Nanaimo's SSMUH amending bylaw), leave the number out. Leave out the Trail SSMUH bylaw number entirely (not confirmed) and describe Trail's June 2024 change without a number.
- Whistler's SSMUH adoption: say "June 2024", no day.
- If the batch says something is pending or expected (for example new short-term rental rules), phrase it as "the town said new rules were coming; check its page", never as settled.
- House prices, mortgage rates, counts of lenders or brokers, ratings, reviews.

## Style (strict)
- Plain English at about grade 8. Short sentences. Average under 18 words.
- No em dashes, no en dashes, no exclamation marks. Use commas, "to", or a new sentence.
- No hype words (best, top, leading, amazing, perfect, ideal, vibrant, thriving, stunning).
- Hedge rules and dates: "the City's page says", "as of October 2026", "check with the town before you rely on it".
- Do not name any mortgage broker or brokerage. Do not recommend a lender. Naming a lender's head office is a fact, not an endorsement.
- Plain text only (no HTML, no markdown). The renderer escapes characters. Use double-quoted strings and escape inner double quotes. Straight apostrophes are fine.
- Write `m2` as "square metres" in words, for example "280 square metres".
- Each field is your own wording. Do not copy sentences from the sources. Do not quote more than a few words.

## Check
After writing, run `cd /home/claude/site && node -e "import('./src/lib/city-facts/batchN.mjs').then(m=>console.log(Object.keys(m.default).length, Object.keys(m.default).join(',')))"` and confirm all your keys load. Also grep your file for em dashes (—), en dashes (–) and "!" and fix any.

## Report back (under 150 words)
List: keys written, the three biggest things you left out, and any conflict or doubt the editor should know. Do not paste the data back. Do not git commit or edit any other file.

---
# SECOND TASK: readability rewrite (you are editing an existing batchN.mjs)

The facts were fine, but the pages that use them now read above grade 8.5. Rewrite the TEXT fields (str, suites, land, feature, lenders, and area `d` strings, and employer descriptors) in your batch file so they read at about grade 7.

Rules:
- Keep every fact, number, date and hedge ("check with the City") that is there. Add no new facts. Do not touch `src` or `omitted` or keys.
- Every sentence 20 words or fewer. Average about 13. Split long sentences into two or three short ones. Give each sentence its own subject.
- One idea per sentence. No stacked lists of conditions in one sentence: turn them into 2 to 4 short sentences.
- Take bylaw numbers out of the middle of sentences. Put them in their own short sentence ("The bylaw is No. 3036.") or drop them if the sentence is already about the same rule. Keep at most 2 per town.
- Prefer short, common words ("lets" for "permits", "about" for "approximately", "use" for "utilize"). Avoid "SSMUH" and "RMOW" jargon; say "small-scale multi-unit housing" once, then "the new rules".
- Where a field covers two places (City / Township, Courtenay / Comox, Trail / Castlegar, Osoyoos / Oliver, North Vancouver City / District), start each place's sentences with the place name, one place after the other.
- Still no em dashes, en dashes, "!", percent signs (write "percent"), dollar amounts, or the words batch/research.
- Run `cd /home/claude/site && node tools/long-sentences.mjs 20` and fix any line for your keys until none are listed for them. Run `node tools/lint-city-facts.mjs` and fix any flag for your keys. Do not run build.mjs.

Report back in under 60 words: keys done, and anything you had to drop.

---
# THIRD TASK: verify what was missing, and fill thin pages (you may use WebSearch and WebFetch)

Jared (the site owner) wants (a) every item that was "NOT VERIFIED" or doubtful checked against official sources, and (b) no thin city pages. Work only on the keys in your task, editing your own batchN.mjs in place.

## How to research
- WebFetch only works for URLs that appeared in a WebSearch result or that you were given. So run WebSearch first (use `allowed_domains` for the town's own site, gov.bc.ca, statcan.gc.ca, or the employer or lender's own site), then WebFetch the URL the search returned. If a fetch is refused, search again for a page that lists the same URL, or try a different official page. Never use curl or a mirror.
- Official or primary sources only: the municipality, its bylaws and council reports, the Province, Statistics Canada, a First Nation's own site, an employer's or lender's own site, a regional health authority or school district. No real-estate sites, news, blogs, directories, or MLS.
- A fact goes in only if the page you read states it. Quote nothing; write it in your own words.
- The original Muse research for your batch is in /mnt/user-data/attachments/c6108ecc-be23-57da-85b3-b9412cbf34c5/ (the file named in the first task). Its consolidated "NOT VERIFIED" list at the end, and each key's `omitted` array in your file, are your to-do list.

## Part A: verify
For every NOT VERIFIED or doubtful item for your keys, try to confirm it from an official page. If confirmed, add it to the right field (with a source in `src`). If it cannot be confirmed, leave it out and keep a short note in `omitted`. Specific items to try, where they apply to your keys: bylaw numbers and adoption dates for short-term rental and small-scale multi-unit housing rules; the Trail small-scale multi-unit housing bylaw (Zoning Amendment Bylaw No. 2944, adopted June 24, 2024: confirm on trail.ca or its council minutes); Coquitlam, Langley City, Delta, Surrey, Terrace, Fort St. John, Kitimat, Prince George short-term rental rules; Keremeos Bylaw 851-10 status; Nanaimo's amending bylaw number; Revelstoke Bylaw 2380 adoption date; Invermere Bylaw 1647 adopted text; Saanich short-term rental status; Langley Township adoption date; Vernon lender head office (current page); Kamloops Sun Rivers lease terms from the Nation or its official sources; Comox's own rules (Comox is covered by the `courtenay` key).

## Part B: fill thin pages
Target for every key (use `node tools/facts-coverage.mjs`, which lists what is still missing):
- `employers`: at least 4 named local employers or institutions, each from the town's own economic profile, official community plan, major-employers list, or the employer's own site. Hospitals, school districts, colleges and large private employers count. Do not list the municipality itself as an employer unless you need it to reach 4.
- `areas`: at least 4 neighbourhoods, each with what housing it mostly has, from the official community plan, neighbourhood plans or the town's own pages. Restore any that were cut. Skip anything whose source does not state the housing type.
- `mix` (NEW field, one to three short sentences): the town's housing mix from an official housing needs report, the town's OCP, or Statistics Canada (share of homes owned and rented, and the main home types). Name the source year in the sentence ("The 2021 Census shows..."). Write numbers as words plus "percent". Skip if you cannot find it.
- `str`: the town's own short-term rental rule. If you have searched and the town truly has no local rule beyond the Province, say so in one sentence ("X has no short-term rental bylaw beyond the Province's, per its zoning page"), only if an official page supports that. Otherwise leave it empty and note it in `omitted`.
- `land`: leased, treaty or reserve land that touches the town, with what it means for a mortgage (title is a lease or band land; lenders vary). Optional: leave empty if nothing exists.
- `lenders`: only if a bank, credit union or trust company has its head office in town, shown on its own site or filings.
- `feature`: one local fact that changes mortgage files (flood, ALR, leasehold, strata, one big employer, seasonal pay, etc.).
- Add every page you used to `src` (official URLs only, no spaces or tracking parameters; percent-encoding is fine). Keep `src` to 6 entries or fewer per key.

## Readability budget (strict)
These pages already sit near the reading-grade limit. New text must be easier than the page, about grade 6 to 7: sentences of 12 words or fewer when you can, never more than 20, common words, one idea per sentence, no stacked clauses, bylaw numbers in their own short sentence (max 2 per key). Names of places, bylaws and organizations cannot be simplified, so use fewer of them per sentence.
After editing, for EACH of your keys run `cd /home/claude/site && node tools/readability.mjs src/pages/mortgage-broker-<page>.mjs` (pages: use the key, except `courtenay` -> mortgage-broker-courtenay, `langley` -> mortgage-broker-langley, `osoyoos-oliver`, `trail-castlegar`, `north-vancouver` as-is). The printed `grade=` must be 8.5 or lower. If it is higher, simplify your own new text, or trim the least useful item, until it passes. Also run `node tools/long-sentences.mjs 20` and `node tools/lint-city-facts.mjs` and fix anything listed for your keys. If another batch file is mid-edit and fails to load, wait ten seconds and retry; do not touch other batch files.
Style rules from the first two tasks still apply: no em dashes or en dashes, no "!", no percent signs (write "percent"), no dollar amounts, no hype, hedge rules ("check with the City"), never name a mortgage broker, no mortgage rates or home prices, and never the words "batch", "research", "Muse".

## Report back (under 120 words)
Per key: what you confirmed, what you added, and what is still missing and why. Include the final `grade=` for each page.
