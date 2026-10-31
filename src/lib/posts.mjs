// Guides (content engine, §7.15). Posts live in src/posts/<name>.mjs and render at /guides/<slug>/.
// Post shape: { slug: "/guides/<x>/", date: "YYYY-MM-DD", updated?: "YYYY-MM-DD", series: "boc"|"rules"|"questions",
//   title, meta, h1, lede, body, faqs: [{q,a}], links: [required canonical links], noindex? }
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { SITE, esc } from "./site.mjs";

export const SERIES = {
  boc: { label: "Bank of Canada decisions", blurb: "Every Bank of Canada rate announcement, explained the same day: what it means for variable-rate holders and for anyone renewing in the next year." },
  rules: { label: "Rule changes, explained", blurb: "When OSFI, Finance Canada, CMHC or the Province change a mortgage rule, this is where it is explained first, with the source and the date." },
  questions: { label: "Questions clients ask", blurb: "Real questions from real files, answered at full depth and linked to the guide that goes deeper." }
};

export async function loadPosts() {
  const dir = path.resolve("src/posts");
  if (!fs.existsSync(dir)) return [];
  const posts = [];
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort()) {
    const p = (await import(pathToFileURL(path.join(dir, f)).href)).default;
    if (!/^\/guides\/[a-z0-9-]+\/$/.test(p.slug)) throw new Error(`Post slug must be /guides/<name>/: ${p.slug} (${f})`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date)) throw new Error(`Post needs an ISO date: ${f}`);
    if (!SERIES[p.series]) throw new Error(`Unknown series ${p.series} in ${f}`);
    posts.push({ ...p, file: f });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const fmtDate = (iso) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export function postPage(p) {
  const dateLine = `<p class="post-date" data-nocount><span class="series-tag">${esc(SERIES[p.series].label)}</span> Published ${fmtDate(p.date)}${p.updated && p.updated !== p.date ? `, updated ${fmtDate(p.updated)}` : ""}. Dates matter on this page: the rules and figures below were current on the date shown.</p>`;
  const schema = [{
    "@context": "https://schema.org", "@type": "Article", headline: p.h1, datePublished: p.date, dateModified: p.updated || p.date,
    author: { "@type": "Person", name: SITE.person, url: SITE.origin + "/about-joshua-resvick/" },
    publisher: { "@id": SITE.origin + "/#business" }, mainEntityOfPage: SITE.origin + p.slug, inLanguage: "en-CA"
  }];
  return { slug: p.slug, h1: p.h1, lede: p.lede, nav: "/guides/", crumbs: [["Home", "/"], ["Guides", "/guides/"], [p.crumb || p.h1, p.slug]],
    body: dateLine + p.body, faqs: p.faqs, schema, calc: p.calc, noindex: p.noindex };
}
