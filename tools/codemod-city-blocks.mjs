// One-off codemod: inserts the census table after each "Incomes in" paragraph and a Nearby callout where a page has none.
import fs from "node:fs";
import { hasCensus } from "../src/lib/city-census.mjs";
import { nearbyKeys } from "../src/lib/nearby.mjs";
let nCensus = 0, nNear = 0, problems = [];
for (const f of fs.readdirSync("src/pages").filter((f) => /^mortgage-broker-/.test(f) && !/vs-bank/.test(f))) {
  const key = f.replace("mortgage-broker-", "").replace(".mjs", "");
  const p = "src/pages/" + f;
  let t = fs.readFileSync(p, "utf8");
  const orig = t;
  const imports = [];
  if (hasCensus(key) && !t.includes("censusTable(")) {
    const re = /(<h2>Incomes in[^<]*<\/h2>\s*<p>[\s\S]*?<\/p>)/;
    if (re.test(t)) { t = t.replace(re, `$1\n${"${censusTable(\"" + key + "\")}"}`); imports.push('import { censusTable } from "../lib/city-census.mjs";'); nCensus++; }
    else problems.push("no incomes paragraph: " + key);
  }
  if (nearbyKeys.includes(key) && !t.includes('callout("Nearby"') && !t.includes("nearbyCallout(")) {
    const i = t.lastIndexOf("${cta(");
    if (i < 0) problems.push("no cta: " + key);
    else { t = t.slice(0, i) + `\${nearbyCallout("${key}", callout)}\n\n` + t.slice(i); imports.push('import { nearbyCallout } from "../lib/nearby.mjs";'); nNear++; }
  }
  if (imports.length) {
    const m = [...t.matchAll(/^import .*$/gm)];
    const last = m[m.length - 1];
    t = t.slice(0, last.index + last[0].length) + "\n" + imports.join("\n") + t.slice(last.index + last[0].length);
  }
  if (t !== orig) fs.writeFileSync(p, t);
}
console.log({ nCensus, nNear, problems });
