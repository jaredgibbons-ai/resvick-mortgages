// Build a relative-path copy of dist/ for a hosted preview that is not served from the site root.
// node tools/preview-pack.mjs -> preview/ (index.html = reviewer landing page, site/** = the site with relative links)
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist"), out = path.resolve("preview"), site = path.join(out, "site");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(site, { recursive: true });

const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p) : files.push(p); } })(dist);

for (const f of files) {
  const rel = path.relative(dist, f);
  if (/^(_redirects|_headers|sitemap\.xml|robots\.txt)$/.test(rel)) continue;
  const dest = path.join(site, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!rel.endsWith(".html")) { fs.copyFileSync(f, dest); continue; }
  const depth = rel.split(path.sep).length - 1; // index.html at root -> 0
  const up = depth ? "../".repeat(depth) : "./";
  let html = fs.readFileSync(f, "utf8");
  // internal page links: /x/y/ -> up + x/y/index.html ; root "/" -> up + index.html ; keep #anchors and queries
  html = html.replace(/(href|src|srcset|action|content)="\/(?!\/)([^"]*)"/g, (m, attr, rest) => {
    if (attr === "content" && !/^assets\//.test(rest)) return m; // leave meta content (og:url etc.) alone unless it is an asset path
    if (attr === "srcset") return `${attr}="${rest.split(",").map((s) => { const [u, w] = s.trim().split(/\s+/); return up + u.replace(/^\//, "") + (w ? " " + w : ""); }).join(", ")}"`;
    if (rest.startsWith("api/")) return m;
    const [p, hash] = rest.split("#");
    if (p === "") return `${attr}="${up}index.html${hash ? "#" + hash : ""}"`;
    if (p.endsWith("/")) return `${attr}="${up}${p}index.html${hash ? "#" + hash : ""}"`;
    if (p === "reviews") return `${attr}="${up}contact/index.html"`;
    return `${attr}="${up}${p}${hash ? "#" + hash : ""}"`;
  });
  // srcset without leading slash fix-up for the regex above (it only matched a leading slash on the whole attribute)
  html = html.replace(/srcset="([^"]*)"/g, (m, v) => `srcset="${v.split(",").map((s) => { const [u, w] = s.trim().split(/\s+/); return (u.startsWith("/") ? up + u.slice(1) : u) + (w ? " " + w : ""); }).join(", ")}"`);
  // CSS url(/assets/...) inside inline styles
  html = html.replace(/url\(\/assets\//g, `url(${up}assets/`);
  // Preview banner (noindex is implied; this is a private review copy)
  html = html.replace(/<body([^>]*)>/, `<body$1><div style="background:#2A2829;color:#fff;font:600 12px/1.4 system-ui;letter-spacing:.06em;text-transform:uppercase;text-align:center;padding:6px 12px">Private preview, not live. Forms, phone links and the booking embed are disabled here.</div>`);
  html = html.replace(/<meta name="robots"[^>]*>/, "").replace(/<head>/, '<head><meta name="robots" content="noindex,nofollow">');
  fs.writeFileSync(dest, html);
}
// CSS: /assets/fonts/... -> relative to the css file (assets/css/site.css -> ../fonts/)
const css = path.join(site, "assets/css/site.css");
if (fs.existsSync(css)) fs.writeFileSync(css, fs.readFileSync(css, "utf8").replace(/url\(\/assets\/fonts\//g, "url(../fonts/"));
console.log(`preview/site: ${files.length} files packed`);
