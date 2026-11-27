// Per-city local facts section. Data: src/lib/city-facts/batch1-7.mjs (verified-only, from Muse research read October 31, 2026)
// plus src/lib/city-provincial.mjs (gov.bc.ca lists). Rendered once per city page.
import { esc } from "./site.mjs";
import { CITY_NAME } from "./nearby.mjs";
import { PROV, PROV_STR_URL, PROV_SVT_URL } from "./city-provincial.mjs";
import b1 from "./city-facts/batch1.mjs";
import b2 from "./city-facts/batch2.mjs";
import b3 from "./city-facts/batch3.mjs";
import b4 from "./city-facts/batch4.mjs";
import b5 from "./city-facts/batch5.mjs";
import b6 from "./city-facts/batch6.mjs";
import b7 from "./city-facts/batch7.mjs";

export const FACTS = { ...b1, ...b2, ...b3, ...b4, ...b5, ...b6, ...b7 };
export const hasFacts = (k) => !!FACTS[k];

const dot = (s) => (/[.!?]$/.test(s.trim()) ? s.trim() : s.trim() + ".");
const list = (a) => (a.length <= 1 ? a.join("") : a.length === 2 ? a.join(" and ") : a.slice(0, -1).join(", ") + ", and " + a[a.length - 1]);
const places = (k) => {
  const p = PROV[k];
  if (!p) return null;
  return p.places ? p.places : [[CITY_NAME[k], p.strP, p.svt]];
};

function strLead(k) {
  const pl = places(k);
  const yes = pl.filter((x) => x[1]).map((x) => x[0]);
  const no = pl.filter((x) => !x[1]).map((x) => x[0]);
  let t = "";
  if (yes.length) t += `The Province's main-home rule applies in ${list(yes)}. Hosts may rent only their main home, plus one suite or extra unit. `;
  if (no.length) t += `${list(no)} ${no.length > 1 || /^the /i.test(no[0]) ? "are" : "is"} exempt from the Province's main-home rule, but a town can still set its own. `;
  t += "Hosts also need a provincial registration number.";
  return t;
}

function svtLine(k) {
  const pl = places(k);
  const yes = pl.filter((x) => x[2]).map((x) => x[0]);
  const no = pl.filter((x) => !x[2]).map((x) => x[0]);
  let t = "";
  if (yes.length) t += `${list(yes)} ${yes.length > 1 ? "are" : "is"} in the Province's Speculation and Vacancy Tax zone, an empty-home tax. Owners file a yearly form. Owners who live in the home are generally exempt. `;
  if (no.length) t += `${list(no)} ${no.length > 1 ? "are" : "is"} not in the Province's empty-home tax zone. `;
  if (k === "vancouver") t += " The City of Vancouver also has its own Empty Homes Tax. Owners declare each property's status every year. The City sends the steps with the tax notice.";
  return t.trim();
}

export const cityFacts = (k) => {
  const d = FACTS[k];
  if (!d) return "";
  const name = CITY_NAME[k];
  let h = `\n<h2>${esc(name)}: local rules, employers and lenders</h2>`;
  h += `\n<p>I read the ${esc(name)} sources below in ${esc(d.checked || "October 2026")}. Local rules change, so check with ${esc(name)} before you rely on them.</p>`;
  h += `\n<!--fk:str--><h3>Short-term rentals in ${esc(name)}</h3><p>${esc(strLead(k))}</p>`;
  if (d.str) h += `\n<p>${esc(dot(d.str))}</p>`;
  h += `<!--/fk-->`;
  h += `\n<!--fk:suites--><h3>Suites and small multi-unit housing</h3><p>${esc(dot(d.suites))}</p><!--/fk-->`;
  h += `\n<h3>Empty-home tax</h3><p>${esc(svtLine(k))}</p>`;
  if (d.employers && d.employers.length) h += `\n<!--fk:jobs--><h3>Who employs people in ${esc(name)}</h3><ul>${d.employers.map((e) => `\n<li>${esc(dot(e))}</li>`).join("")}</ul><!--/fk-->`;
  if ((d.areas && d.areas.length) || d.mix) {
    h += `\n<!--fk:areas--><h3>Neighbourhoods and the homes in them</h3>`;
    if (d.mix) h += `\n<p>${esc(dot(d.mix))}</p>`;
    if (d.areas && d.areas.length) h += `<ul>${d.areas.map((a) => `\n<li><strong>${esc(a.n)}.</strong> ${esc(dot(a.d))}</li>`).join("")}</ul>`;
    h += `<!--/fk-->`;
  }
  if (d.land) h += `\n<h3>Leased, treaty and reserve land</h3><p>${esc(dot(d.land))}</p>`;
  if (d.lenders) h += `\n<h3>Lenders based in ${esc(name)}</h3><p>${esc(dot(d.lenders))} I compare these with the banks and other lenders, since each one sets its own rules.</p>`;
  if (d.feature) h += `\n<h3>One thing that changes mortgage files here</h3><p>${esc(dot(d.feature))}</p>`;
  const extra = k === "vancouver" ? [["City of Vancouver: Empty Homes Tax FAQ", "https://vancouver.ca/home-property-development/empty-homes-tax-frequently-asked-questions.aspx"]] : [];
  const src = (d.src || []).concat(extra, [["Province of BC: short-term rental rule", PROV_STR_URL], ["Province of BC: Speculation and Vacancy Tax areas", PROV_SVT_URL]]);
  h += `\n<details class="small"><summary>Where I read this</summary><ul>${src.map((s) => `<li><a href="${esc(s[1])}" rel="noopener">${esc(s[0])}</a></li>`).join("")}</ul></details>`;
  return h;
};

/* One section per topic on a city page. Where the page already has its own section on suites or on
   short-term rentals, the local-rules facts for that topic move into the end of that section (minus any
   sentence it already says) and the matching sub-heading in the local-rules block is dropped. */
const words = (t) => new Set(t.toLowerCase().replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").match(/[a-z0-9$%.,]+/g) || []);
const sentences = (t) => t.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").split(/(?<=[.?!])\s+(?=[A-Z])/).map((x) => x.trim()).filter(Boolean);
const similar = (a, b) => { const A = words(a), B = words(b); let n = 0; for (const w of A) if (B.has(w)) n++; return n / Math.max(1, Math.min(A.size, B.size)) > 0.7; };
const TOPIC = { suites: /suite|laneway|coach house|carriage|multi-unit|multiplex|garden suite/i, str: /short-term|nightly|airbnb|vacation rental/i, jobs: /\bjobs\b|\bemployers\b/i, areas: /neighbourhood/i };
const LEAD = { jobs: "Employers named in the local sources:", areas: "How the local plans describe each area:" };
export function mergeLocal(body, k) {
  const name = CITY_NAME[k];
  if (!name || !FACTS[k]) return body;
  const cut = body.indexOf(`<h2>${esc(name)}: local rules`);
  if (cut < 0) return body;
  let mine = body.slice(0, cut), facts = body.slice(cut);
  for (const key of ["str", "suites", "jobs", "areas"]) {
    const m = new RegExp(`<!--fk:${key}-->([\\s\\S]*?)<!--/fk-->`).exec(facts);
    if (!m) continue;
    const hs = [...mine.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
    const h = hs.find((x) => TOPIC[key].test(x[1].replace(/<[^>]+>/g, "")) && !(key === "suites" && TOPIC.str.test(x[1]) && !/suite/i.test(x[1])));
    if (!h) { facts = facts.replace(m[0], m[1]); continue; }
    const start = h.index + h[0].length;
    const next = mine.indexOf("<h2", start);
    const end = next < 0 ? mine.length : next;
    const section = mine.slice(start, end);
    const have = sentences(section);
    const paras = [...m[1].matchAll(/<p>([\s\S]*?)<\/p>/g)].map((x) => sentences(x[1]).filter((s) => !have.some((o) => similar(s, o))).join(" ")).filter(Boolean);
    const items = [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => x[1]).filter((li) => !have.some((o) => similar(li, o)));
    let add = paras.length ? "\n" + paras.map((t) => `<p>${t}</p>`).join("\n") + "\n" : "";
    if (items.length) add += `\n<p>${LEAD[key] || ""}</p><ul>${items.map((t) => `\n<li>${t}</li>`).join("")}</ul>\n`;
    mine = mine.slice(0, end).replace(/\s*$/, "") + add + "\n" + mine.slice(end);
    facts = facts.replace(m[0], "");
  }
  facts = facts.replace(/<!--\/?fk(:[a-z]+)?-->/g, "");
  return mine + facts;
}
