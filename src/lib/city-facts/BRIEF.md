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
