// Uniqueness check: share of a page's 6-word shingles that appear on no other page. Usage: node tools/uniqueness.mjs [slug-substring] [--min 70]
import fs from "node:fs"; import path from "node:path"; import * as cheerio from "cheerio";
const arg = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "";
const minIdx = process.argv.indexOf("--min"); const MIN = minIdx > 0 ? +process.argv[minIdx + 1] : 70;
const N = 6, pages = {};
(function walk(d) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else if (f.name === "index.html") pages[p.replace("dist", "").replace("index.html", "") || "/"] = p; } })("dist");
const sh = {}, owners = new Map();
for (const [u, p] of Object.entries(pages)) {
  const $ = cheerio.load(fs.readFileSync(p, "utf8"));
  const art = $("article.prose").first().clone(); art.find("script,style,form,nav,[data-nocount],.cta-block,.reviews,.callout.related").remove();
  const w = art.text().toLowerCase().replace(/[^a-z0-9$%' ]+/g, " ").split(/\s+/).filter(Boolean);
  const set = new Set(); for (let i = 0; i + N <= w.length; i++) set.add(w.slice(i, i + N).join(" "));
  sh[u] = set; for (const s of set) owners.set(s, (owners.get(s) || 0) + 1);
}
let bad = 0; const rows = [];
for (const [u, set] of Object.entries(sh)) {
  if (arg && !u.includes(arg)) continue;
  let uniq = 0; for (const s of set) if (owners.get(s) === 1) uniq++;
  const pct = set.size ? Math.round((100 * uniq) / set.size) : 100; rows.push([u, pct, set.size]);
}
rows.sort((a, b) => a[1] - b[1]);
for (const [u, pct, n] of rows) { if (pct < MIN) bad++; console.log(`${pct < MIN ? "LOW " : "ok  "} ${String(pct).padStart(3)}%  ${u} (${n} shingles)`); }
console.log(bad ? `${bad} pages under ${MIN}%` : `all listed pages at ${MIN}% or better`);
