// Per-city local facts section. Data: src/lib/city-facts/batch1-6.mjs (verified-only, from Muse research read October 31, 2026)
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

export const FACTS = { ...b1, ...b2, ...b3, ...b4, ...b5, ...b6 };
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
  h += `\n<p>We read the pages below in October 2026. Rules change, so check with the town first.</p>`;
  h += `\n<h3>Short-term rentals in ${esc(name)}</h3><p>${esc(strLead(k))}</p>`;
  if (d.str) h += `\n<p>${esc(dot(d.str))}</p>`;
  h += `\n<h3>Suites and small multi-unit housing</h3><p>${esc(dot(d.suites))}</p>`;
  h += `\n<h3>Empty-home tax</h3><p>${esc(svtLine(k))}</p>`;
  if (d.employers && d.employers.length) h += `\n<h3>Who employs people in ${esc(name)}</h3><ul>${d.employers.map((e) => `\n<li>${esc(dot(e))}</li>`).join("")}</ul>`;
  if ((d.areas && d.areas.length) || d.mix) {
    h += `\n<h3>Neighbourhoods and the homes in them</h3>`;
    if (d.mix) h += `\n<p>${esc(dot(d.mix))}</p>`;
    if (d.areas && d.areas.length) h += `<ul>${d.areas.map((a) => `\n<li><strong>${esc(a.n)}.</strong> ${esc(dot(a.d))}</li>`).join("")}</ul>`;
  }
  if (d.land) h += `\n<h3>Leased, treaty and reserve land</h3><p>${esc(dot(d.land))}</p>`;
  if (d.lenders) h += `\n<h3>Lenders based in ${esc(name)}</h3><p>${esc(dot(d.lenders))} Joshua compares these with the banks and other lenders, since each one sets its own rules.</p>`;
  if (d.feature) h += `\n<h3>One thing that changes mortgage files here</h3><p>${esc(dot(d.feature))}</p>`;
  const extra = k === "vancouver" ? [["City of Vancouver: Empty Homes Tax FAQ", "https://vancouver.ca/home-property-development/empty-homes-tax-frequently-asked-questions.aspx"]] : [];
  const src = (d.src || []).concat(extra, [["Province of BC: short-term rental rule", PROV_STR_URL], ["Province of BC: Speculation and Vacancy Tax areas", PROV_SVT_URL]]);
  h += `\n<details class="small"><summary>Where we read this</summary><ul>${src.map((s) => `<li><a href="${esc(s[1])}" rel="noopener">${esc(s[0])}</a></li>`).join("")}</ul></details>`;
  return h;
};
