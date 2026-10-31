import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { isCanonical } from "../src/lib/linkmap.mjs";
const require = createRequire(import.meta.url);
const RM = require("../src/assets/js/engine.js");
const Q = require("../src/assets/js/quiz.js");

const SCORED = ["purchase", "renewal", "equity", "investor", "selfemployed"];

test("every scored quiz has 4 bands covering 0-100 and every question has a why", () => {
  for (const id of SCORED) {
    const d = Q.DEFS[id];
    assert.equal(d.bands.length, 4, id);
    assert.equal(d.bands[3][0], 0);
    for (let p = 0; p <= 100; p++) assert.ok(Q.band(d, p).name, id + " " + p);
    for (const s of Q.scoredSteps(d)) { assert.ok(s.why && s.why.length > 40, id + "/" + s.id + " why"); assert.ok(s.options.length >= 2); for (const o of s.options) assert.ok(o.score >= 0 && o.score <= 10); }
  }
});

test("scoring is deterministic and spans 0..100", () => {
  for (const id of SCORED) {
    const d = Q.DEFS[id], steps = Q.scoredSteps(d);
    const best = {}, worst = {};
    for (const s of steps) { let hi = 0, lo = 0; s.options.forEach((o, k) => { if (o.score > s.options[hi].score) hi = k; if (o.score < s.options[lo].score) lo = k; }); best[s.id] = hi; worst[s.id] = lo; }
    const a = Q.score(d, best), b = Q.score(d, best);
    assert.deepEqual(a, b);
    assert.equal(a.score, 100, id + " best");
    assert.ok(Q.score(d, worst).score <= 50, id + " worst");
    assert.equal(a.answered, steps.length);
    assert.ok(a.band.name && a.strengths.length === 3);
  }
});

test("every answer path yields a band (random walks)", () => {
  let seed = 7; const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;
  for (const id of SCORED) {
    const d = Q.DEFS[id], steps = Q.scoredSteps(d);
    for (let t = 0; t < 200; t++) {
      const ans = {}; for (const s of steps) ans[s.id] = Math.floor(rnd() * s.options.length);
      const r = Q.score(d, ans);
      assert.ok(r.score >= 0 && r.score <= 100 && r.band.name, id);
    }
  }
});

test("router and branch gotos resolve to canonical slugs; no exclamation marks or em dashes in copy", () => {
  const seen = [];
  const walk = (o) => { if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) { if (k === "goto") seen.push(v); walk(v); } };
  walk(Q.DEFS);
  assert.ok(seen.length >= 10);
  for (const g of seen) assert.ok(isCanonical(g), g);
  const text = JSON.stringify(Q.DEFS);
  assert.ok(!/!/.test(text), "exclamation mark in quiz copy");
  assert.ok(!/—/.test(text), "em dash in quiz copy");
});

test("lender match returns a lender type and rate type for any slider mix", () => {
  const keys = ["penalty", "prepay", "rate", "port", "equity", "brand", "digital"];
  for (const v of [0, 50, 100]) { const m = Q.lenderMatch(Object.fromEntries(keys.map((k) => [k, v]))); assert.ok(m.lender && ["fixed", "variable"].includes(m.rateType) && m.lenderWhy && m.rateWhy); }
  assert.equal(Q.lenderMatch({ brand: 100, digital: 100 }).lender, "A big bank");
  assert.equal(Q.lenderMatch({ penalty: 100, rate: 100 }).lender, "A monoline lender");
  assert.equal(Q.lenderMatch({ penalty: 90 }).rateType, "variable");
  assert.equal(Q.lenderMatch({ brand: 90 }).rateType, "fixed");
});

test("results numbers use the engine and stay labelled as estimates", () => {
  const h = Q.numbersFor("purchase", { income: 120000, down: 50000, debts: 500, price: 650000 }, RM);
  assert.match(h, /estimated maximum purchase price/);
  assert.match(h, /not an approval/);
  const r = RM.affordability({ annualIncome: 120000, ratePct: 5, amortYears: 25, down: 50000, debtsMonthly: 500, propertyTaxMonthly: 300, heatMonthly: 125 });
  assert.ok(h.includes("$" + Math.round(r.maxPrice).toLocaleString("en-CA")));
  const e = Q.numbersFor("equity", { value: 850000, balance: 420000 }, RM);
  assert.match(e, /\$260,000/); // 0.8*850000-420000
  assert.match(e, /49\.4%/);
  const s = Q.numbersFor("selfemployed", { revenue: 180000, declared: 70000, down: 150000 }, RM);
  assert.equal((s.match(/qz-tier-n/g) || []).length, 3);
  assert.match(s, /planning estimates, not approvals/);
});
