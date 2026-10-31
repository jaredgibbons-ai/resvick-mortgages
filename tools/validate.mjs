// QA gate: node tools/validate.mjs  (run after build)
import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";
import { SPECS } from "../src/lib/specs.mjs";
import { isCanonical, SLUGS } from "../src/lib/linkmap.mjs";

const dist = path.join(path.dirname(new URL(import.meta.url).pathname), "../dist");
const WHITELIST = new Set(["/privacy/"]);
const BANNED = [/Resvick\s*&(amp;)?\s*Associates/i, /\bDLC\b/, /1\.15\s*M/i, /\$400\s*B/i, /\bInvis\b/i];
const PHASE_NOW = new Set(Object.keys(SPECS));
let errors = 0, warns = 0;
const E = (p, m) => { errors++; console.log(`  ERROR ${p}: ${m}`); };
const W = (p, m) => { warns++; if (process.env.VERBOSE) console.log(`  warn  ${p}: ${m}`); };

const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const full = path.join(d, f); fs.statSync(full).isDirectory() ? walk(full) : f === "index.html" && files.push(full); } })(dist);

const later = new Set();
const rows = [];
for (const file of files) {
  const slug = "/" + path.relative(dist, path.dirname(file)).replace(/\\/g, "/") + (path.relative(dist, path.dirname(file)) ? "/" : "");
  const spec = SPECS[slug];
  const html = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(html);
  if (!spec) { E(slug, "built without a spec"); continue; }
  if ($("title").text() !== spec.title) E(slug, `title mismatch: "${$("title").text()}"`);
  if ($('meta[name="description"]').attr("content") !== spec.meta) E(slug, "meta description mismatch");
  if ($("title").text().length > 60) W(slug, `title ${$("title").text().length} chars`);
  if (($("meta[name=description]").attr("content") || "").length > 155) W(slug, "meta over 155 chars");
  const canon = $('link[rel="canonical"]').attr("href");
  if (canon !== "https://www.resvickmortgages.com" + slug) E(slug, `canonical wrong: ${canon}`);
  if ($("h1").length !== 1) E(slug, `h1 count ${$("h1").length}`);
  // word count: body copy only
  const art = $("article.prose").clone();
  art.find("[data-nocount], form, .out, .rates, script, style, .cta-block, .honest").remove();
  const words = art.text().replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;
  if (!spec.exempt && words < 1000) E(slug, `only ${words} words (need 1,000+)`);
  // links
  const hrefs = [];
  $("article.prose a[href]").each((_, a) => hrefs.push($(a).attr("href")));
  for (const need of spec.links || []) if (!hrefs.includes(need)) E(slug, `missing required link ${need}`);
  const internalAll = [];
  $("a[href]").each((_, a) => { const h = $(a).attr("href"); if (h.startsWith("/") && !h.startsWith("/assets")) internalAll.push(h); });
  for (const h of new Set(internalAll)) {
    const p = h.split("#")[0];
    if (WHITELIST.has(p)) continue;
    if (!isCanonical(h)) E(slug, `href not in canonical link map: ${h}`);
    else if (!PHASE_NOW.has(p)) later.add(p);
  }
  for (const h of hrefs) if (/^#/.test(h) === false && h.startsWith("/") && (h.split("#")[0] !== slug)) { /* counted below */ }
  const inBody = new Set(hrefs.filter((h) => h.startsWith("/"))).size;
  if (!spec.exempt && inBody > 18) W(slug, `${inBody} distinct internal links in body`);
  // text rules
  const text = $.text();
  if (/!/.test($("article.prose, .hero").text().replace(/!important/g, ""))) E(slug, "exclamation mark in copy");
  for (const re of BANNED) if (re.test(html.replace(/<script[^>]*ld\+json[\s\S]*?<\/script>/g, "")) ) E(slug, `banned string ${re}`);
  if (!/BCFSA Brokerage Licence #X300203/.test(html)) E(slug, "footer licence line missing");
  if (!/Broker Licence #MB503619/.test($("footer").text())) E(slug, "footer broker licence number missing");
  if (!/Xeva Mortgage/.test($("footer").text())) E(slug, "footer brokerage line missing");
  if (!$('footer a[href="/privacy/"]').length) E(slug, "footer privacy link missing");
  if (!spec.exempt && !$(".cta-block").length) E(slug, "no closing CTA");
  if (!spec.noindex && $('meta[name="robots"]').length) E(slug, "unexpected robots meta");
  if (spec.noindex && !$('meta[name="robots"]').length) E(slug, "noindex missing");
  $("img").each((_, i) => { if ($(i).attr("alt") == null) E(slug, "img without alt"); });
  $("input,select,textarea").each((_, i) => { const id = $(i).attr("id"); if ($(i).attr("type") === "hidden" || $(i).closest(".hp").length) return; if (!$(i).closest("label").length && !(id && $(`label[for="${id}"]`).length)) E(slug, `unlabelled field ${$(i).attr("name")}`); });
  // calc anchors that the spec links to must exist when the index is built
  if (slug === "/mortgage-calculators/") for (const a of ["payment", "affordability", "down-payment", "closing-costs", "cmhc", "renewal", "penalty", "prepayment", "compare", "offset", "consolidation", "readvanceable", "sale-proceeds", "mli", "suite-checker", "quiz"]) if (!$("#" + a).length) E(slug, `anchor #${a} missing`);
  rows.push([slug, words, inBody]);
}
console.log("\nPage".padEnd(42) + "words".padStart(7) + "  body links");
for (const r of rows) console.log(r[0].padEnd(42) + String(r[1]).padStart(7) + "  " + r[2]);
console.log(`\n${files.length} pages, ${errors} errors, ${warns} warnings`);
console.log(`Links to pages scheduled in later phases (${later.size}) — expected until built:`);
if (process.env.VERBOSE) console.log([...later].sort().join("\n"));
for (const f of ["sitemap.xml", "robots.txt", "_redirects", "_headers", "404.html"]) if (!fs.existsSync(path.join(dist, f))) { E(f, "missing"); }
process.exit(errors ? 1 : 0);
