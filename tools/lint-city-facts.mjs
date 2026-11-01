// Lint the city-facts data: meta wording, dashes, exclamation marks, hype, rates/prices, forbidden names.
import { FACTS } from "../src/lib/city-facts.mjs";
const bad = [/\bbatch\b/i, /\bresearch\b/i, /not (been )?(confirmed|verified|given) here/i, /NOT VERIFIED/, /\bMuse\b/, /—|–/, /!/, /\b(best|top|leading|amazing|perfect|ideal|vibrant|thriving|stunning)\b/i, /\bInvis\b|\bDLC\b|Resvick & Associates|Verico/i, /\d+(\.\d+)?\s?%/, /\$\s?\d/, /\bin this pass\b|\bthe lead files\b/i];
let n = 0, keys = Object.keys(FACTS);
for (const k of keys) {
  const d = FACTS[k];
  const texts = [d.str, d.suites, d.lenders, d.land, d.feature, ...(d.employers || []), ...(d.areas || []).flatMap((a) => [a.n, a.d])].filter(Boolean);
  for (const t of texts) for (const re of bad) if (re.test(t)) { n++; console.log(k, String(re), "::", t.slice(0, 140)); }
  if (!d.suites) console.log(k, "MISSING suites");
  for (const [l, u] of d.src || []) if (/\s|gclid|utm_/.test(u) || !/^https?:/.test(u)) console.log(k, "BAD URL", u);
}
console.log(keys.length, "towns;", n, "flags");
