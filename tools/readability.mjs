// node tools/readability.mjs src/pages/foo.mjs [...]  -> Flesch-Kincaid grade, words/sentence, share of 30+ word sentences, for the rendered article
import path from "node:path"; import { pathToFileURL } from "node:url"; import * as cheerio from "cheerio";
import { render } from "../src/lib/site.mjs"; import { SPECS } from "../src/lib/specs.mjs"; import { postPage } from "../src/lib/posts.mjs";
const syll = (w) => { w = w.toLowerCase().replace(/[^a-z]/g, ""); if (!w) return 0; let n = (w.match(/[aeiouy]+/g) || []).length; if (w.endsWith("e") && !w.endsWith("le") && n > 1) n--; return Math.max(1, n); };
let bad = 0;
for (const f of process.argv.slice(2)) {
  const mod = (await import(pathToFileURL(path.resolve(f)).href)).default;
  for (const raw of Array.isArray(mod) ? mod : [mod]) {
    const page = raw.series ? postPage(raw) : raw; const spec = SPECS[page.slug] || { title: raw.title, meta: raw.meta };
    const $ = cheerio.load(render({ ...page, title: spec.title, meta: spec.meta }));
    const art = $("article.prose").clone(); art.find("script, style, form, details, .short").remove();
    const t = art.text().replace(/\s+/g, " ");
    const sents = t.split(/[.!?]+\s/).filter((x) => x.split(" ").length > 2); const words = t.match(/[A-Za-z][A-Za-z'-]*/g) || [];
    const W = words.length, S = sents.length, Y = words.reduce((a, w) => a + syll(w), 0);
    const fk = 0.39 * W / S + 11.8 * Y / W - 15.59, wps = W / S, long = sents.filter((x) => x.split(" ").length > 30).length;
    const ok = fk <= 8.5 && wps <= 17 && long === 0; if (!ok) bad++;
    console.log(`${ok ? "OK  " : "HARD"} ${page.slug} grade=${fk.toFixed(1)} words/sentence=${wps.toFixed(1)} sentences_over_30_words=${long} short_box=${$(".short").length ? "yes" : "NO"}`);
  }
}
process.exit(bad ? 1 : 0);
