// Quick single-page check without touching dist/: node tools/check-page.mjs src/pages/foo.mjs [more...]
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as cheerio from "cheerio";
import { render } from "../src/lib/site.mjs";
import { SPECS } from "../src/lib/specs.mjs";
import { isCanonical } from "../src/lib/linkmap.mjs";
import { postPage } from "../src/lib/posts.mjs";
let bad = 0;
for (const f of process.argv.slice(2)) {
  const mod = (await import(pathToFileURL(path.resolve(f)).href)).default;
  for (const raw of Array.isArray(mod) ? mod : [mod]) {
    const page = raw.series ? postPage(raw) : raw;
    const spec = SPECS[page.slug] || (raw.series ? { title: raw.title, meta: raw.meta, links: raw.links || [] } : null);
    if (!spec) { console.log(`${page.slug}: NO SPEC`); bad++; continue; }
    const html = render({ ...page, title: spec.title, meta: spec.meta, noindex: spec.noindex });
    const $ = cheerio.load(html);
    const art = $("article.prose").clone(); art.find("[data-nocount], form, .out, .rates, script, style, .cta-block, .honest").remove();
    const words = art.text().replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;
    const hrefs = []; $("article.prose a[href]").each((_, a) => hrefs.push($(a).attr("href")));
    const missing = (spec.links || []).filter((l) => !hrefs.includes(l));
    const notCanon = [...new Set(hrefs.filter((h) => h.startsWith("/") && h !== "/privacy/" && !isCanonical(h)))];
    const excl = /!/.test($("article.prose, .hero").text().replace(/!important/g, ""));
    const banned = /Resvick\s*&(amp;)?\s*Associates|\bDLC\b|dozens of|1\.15\s*M|\$400\s*B/i.test(html);
    const faqs = (page.faqs || []).map((q) => q.a.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length);
    const ok = words >= 1000 && !missing.length && !notCanon.length && !excl && !banned && (page.faqs || []).length >= 4;
    if (!ok) bad++;
    console.log(`${ok ? "OK  " : "FAIL"} ${page.slug} words=${words} faqs=${(page.faqs||[]).length} (answer words ${faqs.join("/")}) missing=${JSON.stringify(missing)} notCanonical=${JSON.stringify(notCanon)} excl=${excl} banned=${banned}`);
  }
}
process.exit(bad ? 1 : 0);
