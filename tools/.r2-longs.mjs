import path from "node:path"; import { pathToFileURL } from "node:url"; import * as cheerio from "cheerio";
import { render } from "/home/claude/site/src/lib/site.mjs"; import { SPECS } from "/home/claude/site/src/lib/specs.mjs";
const lim = Number(process.env.LIM || 22);
for (const f of process.argv.slice(2)) {
  const page = (await import(pathToFileURL(path.resolve(f)).href)).default; const spec = SPECS[page.slug];
  const $ = cheerio.load(render({ ...page, title: spec.title, meta: spec.meta }));
  const art = $("article.prose").clone(); art.find("script, style, form, details, .short").remove();
  const t = art.text().replace(/\s+/g, " ");
  const sents = t.split(/(?<=[.!?])\s+/).filter((x) => x.split(" ").length > lim);
  console.log(`== ${page.slug} (${sents.length} over ${lim})`); for (const s of sents) console.log(`[${s.split(" ").length}] ${s}`);
}
