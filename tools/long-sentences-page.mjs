// node tools/long-sentences.mjs src/pages/foo.mjs -> prints sentences over 30 words in the rendered article (same split as readability.mjs)
import path from "node:path"; import { pathToFileURL } from "node:url"; import * as cheerio from "cheerio";
import { render } from "../src/lib/site.mjs"; import { SPECS } from "../src/lib/specs.mjs";
for (const f of process.argv.slice(2)) {
  const page = (await import(pathToFileURL(path.resolve(f)).href)).default; const spec = SPECS[page.slug] || {};
  const $ = cheerio.load(render({ ...page, title: spec.title, meta: spec.meta }));
  const art = $("article.prose").clone(); art.find("script, style, form, details, .short, table, noscript, .cta-block, .nudge, .partner-grid, .reviews").remove();
  const t = art.text().replace(/\s+/g, " ");
  for (const s of t.split(/[.!?]+\s/)) if (s.split(" ").length > 30) console.log(page.slug, "::", s);
}
