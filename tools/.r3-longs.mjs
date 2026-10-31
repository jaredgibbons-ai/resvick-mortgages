import path from "node:path"; import { pathToFileURL } from "node:url"; import * as cheerio from "cheerio";
import { render } from "../src/lib/site.mjs"; import { SPECS } from "../src/lib/specs.mjs";
const min = Number(process.env.MIN || 24);
for (const f of process.argv.slice(2)) {
  const page = (await import(pathToFileURL(path.resolve(f)).href)).default; const spec = SPECS[page.slug];
  const $ = cheerio.load(render({ ...page, title: spec.title, meta: spec.meta }));
  const art = $("article.prose").clone(); art.find("script, style, form, details, .short").remove();
  const t = art.text().replace(/\s+/g, " ");
  const sents = t.split(/(?<=[.!?])\s+/).filter((x) => x.split(" ").length > 2);
  for (const s of sents) { const n = s.split(" ").length; if (n >= min) console.log(n + " | " + s); }
}
