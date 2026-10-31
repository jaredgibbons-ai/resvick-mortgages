// node tools/pull-spec.mjs /slug/ [/slug2/ ...]  -> JSON {slug:{title,meta}} copied EXACTLY from the build prompt; paste into your specs-p2-*.mjs fragment and add `links`.
import fs from "node:fs";
const md = fs.readFileSync("/home/claude/package/josh-resvick-package/CLAUDE-BUILD-PROMPT.md", "utf8");
const out = {};
for (const slug of process.argv.slice(2)) {
  const i = md.indexOf(`— ${slug}**`);
  if (i < 0) { console.error("not found: " + slug); continue; }
  const blk = md.slice(i, i + 2400);
  const t = blk.match(/- Title: `([^`]+)`/), m = blk.match(/- Meta: `([^`]+)`/);
  out[slug] = { title: t && t[1], meta: m && m[1] };
}
console.log(JSON.stringify(out, null, 2));
