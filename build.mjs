// Static site generator. `node build.mjs` -> dist/
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { render, SITE, setLinkData } from "./src/lib/site.mjs";
import { SPECS } from "./src/lib/specs.mjs";
import { loadPosts, postPage } from "./src/lib/posts.mjs";

setLinkData({
  guides: await loadPosts(),
  labels: Object.fromEntries(Object.entries(SPECS).map(([k, v]) => [k, String(v.h1 || v.title || "").split(" | ")[0]]))
});

const root = path.dirname(new URL(import.meta.url).pathname);
const dist = path.join(root, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// 1. Pages
const dir = path.join(root, "src/pages");
const built = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort()) {
  const mod = (await import(pathToFileURL(path.join(dir, f)).href)).default;
  for (const page of Array.isArray(mod) ? mod : [mod]) {
    const spec = SPECS[page.slug];
    if (!spec) throw new Error(`No spec registered for ${page.slug} (${f})`);
    const full = { ...page, title: spec.title, meta: spec.meta, noindex: spec.noindex };
    const out = path.join(dist, page.slug === "/" ? "" : page.slug, "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, render(full));
    built.push({ slug: page.slug, noindex: !!spec.noindex });
  }
}
// 1b. Guides posts (src/posts/*.mjs -> /guides/<slug>/)
for (const p of await loadPosts()) {
  const page = postPage(p);
  const out = path.join(dist, page.slug, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render({ ...page, title: p.title, meta: p.meta }));
  built.push({ slug: page.slug, noindex: !!p.noindex, lastmod: p.updated || p.date });
}

// 2. Assets (css, js, self-hosted fonts)
fs.cpSync(path.join(root, "src/assets"), path.join(dist, "assets"), { recursive: true });
fs.mkdirSync(path.join(dist, "assets/fonts"), { recursive: true });
const fonts = [["figtree", ["400-normal", "500-normal", "600-normal", "700-normal"]], ["dm-serif-display", ["400-normal", "400-italic"]]];
for (const [pkg, ws] of fonts) for (const w of ws) {
  const name = `${pkg}-latin-${w}.woff2`;
  fs.copyFileSync(path.join(root, "node_modules/@fontsource", pkg, "files", name), path.join(dist, "assets/fonts", name));
}

fs.copyFileSync(path.join(root, "src/assets/favicon.svg"), path.join(dist, "favicon.svg"));
fs.copyFileSync(path.join(root, "src/assets/favicon-48.png"), path.join(dist, "favicon.ico"));

// 3. 404, sitemap, robots, redirects, headers
const nf = render({ slug: "/404.html", title: "Page not found | Resvick Mortgages", meta: "That page is not here. Start from the hubs below.", h1: "That page is not here", lede: "The address may have changed. These are the main sections of the site.", noindex: true,
  body: `<p>Try one of these: <a href="/first-time-home-buyer-bc/">first-time home buyers</a>, <a href="/mortgage-renewal-bc/">mortgage renewals</a>, <a href="/refinance-mortgage-bc/">refinancing</a>, <a href="/mortgage-calculators/">calculators</a>, or <a href="/contact/">contact Joshua</a> directly.</p>` });
fs.writeFileSync(path.join(dist, "404.html"), nf);
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${built.filter((b) => !b.noindex).map((b) => `<url><loc>${SITE.origin}${b.slug}</loc><lastmod>${b.lastmod || today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /search\nDisallow: /thank-you/\nDisallow: /api/\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);
// /reviews -> Josh's Google review link, taken from src/data/reviews.json "writeLink" (Open Item 7). Until it is set, /reviews goes to the contact page.
let reviewsLink = "/contact/";
try { const rj = JSON.parse(fs.readFileSync(path.join(root, "src/data/reviews.json"), "utf8")); if (rj.writeLink) reviewsLink = rj.writeLink; } catch {}
fs.writeFileSync(path.join(dist, "_redirects"), `/home / 301\n/new-page / 301\n/about /about-joshua-resvick/ 301\n/contact /contact/ 301\n/reviews ${reviewsLink} 302\n`);
fs.writeFileSync(path.join(dist, "_headers"), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Strict-Transport-Security: max-age=31536000; includeSubDomains\n/assets/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/*\n  Cache-Control: public, max-age=3600\n`);
console.log(`Built ${built.length} pages -> dist/`);
