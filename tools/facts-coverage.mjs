// Coverage of the city-facts data: which towns are thin. Thin = fewer than 4 employers, fewer than 4 neighbourhoods, no local STR line, no housing-mix line, or no feature line. (land is optional)
import { FACTS } from "../src/lib/city-facts.mjs";
const rows = [];
for (const [k, d] of Object.entries(FACTS)) {
  const e = (d.employers || []).length, a = (d.areas || []).length;
  const miss = [];
  if (e < 4) miss.push(`employers=${e}`);
  if (a < 4) miss.push(`areas=${a}`);
  if (!d.str) miss.push("str");
  if (!d.mix) miss.push("mix");
  if (!d.feature) miss.push("feature");
  const words = [d.str, d.suites, d.land, d.feature, d.lenders, d.mix, ...(d.employers || []), ...(d.areas || []).map((x) => x.d)].join(" ").split(/\s+/).filter(Boolean).length;
  rows.push({ k, words, miss });
}
rows.sort((x, y) => x.words - y.words);
for (const r of rows) console.log(String(r.words).padStart(4), r.k.padEnd(18), r.miss.join(", "));
console.log("thin:", rows.filter((r) => r.miss.length).length, "of", rows.length);
