import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const RM = require("../src/assets/js/engine.js");
const X = JSON.parse(fs.readFileSync(new URL("./expected.json", import.meta.url)));
const close = (a, b, tol = 0.011) => assert.ok(Math.abs(a - b) <= tol, `${a} vs ${b}`);

test("payments match independent Decimal implementation", () => {
  for (const c of X.payments) {
    const [P, r, y, f] = c.in;
    const o = RM.payment({ principal: P, ratePct: r, amortYears: y, freq: f });
    close(o.payment, c.out.payment, 0.0001);
    assert.equal(o.periods, c.out.periods, JSON.stringify(c.in));
    close(o.totalInterest, c.out.totalInterest, 0.5);
  }
});

test("CMHC premium matches independent implementation + boundaries", () => {
  for (const c of X.cmhc) {
    const [price, down, am, nt] = c.in;
    const o = RM.cmhcPremium({ price, down, amortYears: am, nonTraditional: nt });
    if (c.out.error) { assert.ok(o.error, JSON.stringify(c.in)); continue; }
    assert.ok(!o.error, JSON.stringify(c.in) + " " + o.error);
    assert.equal(o.insuranceRequired, c.out.required);
    close(o.premium, c.out.premium, 0.0001);
    close(o.totalLoan, c.out.total, 0.0001);
    if (c.out.rate) close(o.rate, c.out.rate, 1e-9);
  }
});

test("CMHC worked example from a published source: $565,000 loan, 30-yr -> 4.20% = $23,730", () => {
  const o = RM.cmhcPremium({ price: 600000, down: 35000, amortYears: 30 });
  assert.equal(o.rate, 4.2); assert.equal(o.premium, 23730); assert.equal(o.totalLoan, 588730);
});

test("PTT matches independent implementation at every threshold", () => {
  for (const c of X.ptt) {
    const [f, ftb, nb, share] = c.in;
    const o = RM.ptt({ fmv: f, firstTimeBuyer: ftb, newlyBuilt: nb, eligibleShare: share });
    for (const k of ["general", "additional", "ftbExemption", "newBuiltExemption", "net"]) close(o[k], c.out[k], 0.0101);
  }
});

test("PTT official worked examples (gov.bc.ca)", () => {
  assert.equal(RM.ptt({ fmv: 835000 }).general, 14700);                          // tax before exemption
  assert.equal(RM.ptt({ fmv: 800000 }).general, 14000);
  assert.equal(RM.ptt({ fmv: 500000 }).general, 8000);
  assert.equal(RM.ptt({ fmv: 835000, firstTimeBuyer: true, eligibleShare: 0.5 }).net, 10700);
  assert.equal(RM.ptt({ fmv: 845000, firstTimeBuyer: true }).ftbExemption, 4800);
  assert.equal(RM.ptt({ fmv: 859000, firstTimeBuyer: true }).ftbExemption, 320);
  assert.equal(RM.ptt({ fmv: 860000, firstTimeBuyer: true }).ftbExemption, 0);
  const nb = RM.ptt({ fmv: 1101000, newlyBuilt: true });
  assert.equal(nb.general, 20020); close(nb.newBuiltExemption, 19619.6); close(nb.net, 400.4);
  assert.equal(RM.ptt({ fmv: 835000, newlyBuilt: true, eligibleShare: 0.5 }).net, 7350);
  assert.equal(RM.ptt({ fmv: 4000000 }).net, 118000);                              // 2,000+36,000+60,000+20,000
  assert.equal(RM.ptt({ fmv: 1100000, newlyBuilt: true }).net, 0);
  assert.equal(RM.ptt({ fmv: 1150000, newlyBuilt: true }).net, RM.ptt({ fmv: 1150000 }).net);
});

test("minimum down payment tiers and $1.5M cap", () => {
  for (const c of X.minDown) close(RM.minDownPayment(c.in), c.out, 0.0001);
  assert.equal(RM.minDownPayment(1500000), 300000);
});

test("edge inputs fail gracefully, never a wrong number", () => {
  assert.ok(RM.payment({ principal: 0, ratePct: 5, amortYears: 25 }).error);
  assert.ok(RM.payment({ principal: 400000, ratePct: -1, amortYears: 25 }).error);
  assert.ok(RM.payment({ principal: 400000, ratePct: 5, amortYears: 0 }).error);
  assert.ok(RM.cmhcPremium({}).error);
  assert.ok(RM.cmhcPremium({ price: 400000, down: 400000 }).error);
  assert.ok(RM.ptt({ fmv: 0 }).error);
  assert.ok(RM.affordability({ ratePct: 5 }).error);
  const z = RM.payment({ principal: 120000, ratePct: 0, amortYears: 10 });
  close(z.payment, 1000, 0.0001);
});

test("affordability: qualifying rate and ratio logic", () => {
  assert.equal(RM.qualifyingRate(3), 5.25);
  assert.equal(RM.qualifyingRate(4.5), 6.5);
  const a = RM.affordability({ annualIncome: 120000, ratePct: 4.5, amortYears: 25, down: 80000, debtsMonthly: 0, propertyTaxMonthly: 300, heatMonthly: 100 });
  assert.equal(a.limitedBy, "GDS"); close(a.maxPayment, 10000 * 0.39 - 400, 0.01);
  // more debt can only lower the number
  const b = RM.affordability({ annualIncome: 120000, ratePct: 4.5, amortYears: 25, down: 80000, debtsMonthly: 900, propertyTaxMonthly: 300, heatMonthly: 100 });
  assert.ok(b.maxPrice < a.maxPrice);
  // the maximum loan really does fit the payment room at the qualifying rate
  const chk = RM.payment({ principal: a.maxLoan, ratePct: a.qualifyingRate, amortYears: 25 });
  close(chk.payment, a.maxPayment, 1);
});

test("closing costs add up", () => {
  const c = RM.closingCosts({ price: 750000, down: 75000, legal: 2000, inspection: 600 });
  assert.equal(c.ptt.net, RM.ptt({ fmv: 750000 }).net);
  close(c.cashToClose, 75000 + c.ptt.net + 2600, 0.001);
  const f = RM.closingCosts({ price: 750000, down: 75000, firstTimeBuyer: true });
  assert.equal(f.ptt.net, RM.ptt({ fmv: 750000 }).general - 8000);
});

test("penalty reproduces Pragmatic's published teaching example ($400K, 4.89%, 3 years left)", () => {
  const p = RM.penalty({ balance: 400000, contractPct: 4.89, monthsRemaining: 36, type: "fixed", comparisonPct: 4.39, originalPostedPct: 6.59, currentPostedPct: 4.89 });
  assert.equal(p.threeMonths, 4890);
  assert.equal(p.contractIrd, 6000);
  assert.equal(p.postedIrd, 20400);
  assert.equal(p.estimateLow, 6000);
  assert.equal(p.estimateHigh, 20400);
  assert.equal(RM.penalty({ balance: 400000, contractPct: 6.2, monthsRemaining: 24, type: "variable" }).threeMonths, 6200);
  assert.ok(RM.penalty({ balance: 0, contractPct: 5, monthsRemaining: 12 }).error);
});

test("insured 30-year amortization is gated to eligible buyers", () => {
  assert.ok(RM.cmhcPremium({ price: 600000, down: 35000, amortYears: 30, eligible30: false }).error);
  assert.equal(RM.cmhcPremium({ price: 600000, down: 35000, amortYears: 30, eligible30: true }).rate, 4.2);
  assert.equal(RM.cmhcPremium({ price: 600000, down: 120000, amortYears: 30, eligible30: false }).insuranceRequired, false);
});

test("term cost: balance falls and interest matches payment schedule", () => {
  const t = RM.termCost({ balance: 500000, ratePct: 5, amortYears: 25, termYears: 5 });
  close(t.payment, 2908.02, 0.5);
  assert.ok(t.endBalance < 500000 && t.endBalance > 430000);
  close(t.paid - t.interest, 500000 - t.endBalance, 1);
});

// ===================== Phase 2 tools: compared against tests/independent.py =====================
import { SLUGS, isCanonical } from "../src/lib/linkmap.mjs";

test("prepayment matches independent implementation (extra, lump, annual lump, accelerated)", () => {
  for (const c of X.prepay) {
    const [P, r, y, f, extra, lump, annual] = c.in;
    const o = RM.prepayment({ balance: P, ratePct: r, amortYears: y, freq: f, extraPerPayment: extra, lumpSumNow: lump, annualLump: annual });
    assert.ok(!o.error, JSON.stringify(c.in));
    close(o.payment, c.out.payment, 0.0001);
    assert.equal(o.baseline.periods, c.out.basePeriods, "base " + JSON.stringify(c.in));
    assert.equal(o.scenario.periods, c.out.periods, "scen " + JSON.stringify(c.in));
    close(o.baseline.interest, c.out.baseInterest, 0.05);
    close(o.scenario.interest, c.out.interest, 0.05);
    close(o.interestSaved, c.out.saved, 0.05);
    assert.equal(o.periodsSaved, c.out.periodsSaved);
  }
});

test("prepayment edges: nothing extra saves nothing; a lump at or above the balance is refused", () => {
  const z = RM.prepayment({ balance: 400000, ratePct: 6, amortYears: 25, freq: "biweekly" });
  assert.equal(z.interestSaved, 0); assert.equal(z.periodsSaved, 0);
  assert.ok(RM.prepayment({ balance: 100000, ratePct: 5, amortYears: 20, lumpSumNow: 100000 }).error);
  assert.ok(RM.prepayment({ balance: 0, ratePct: 5, amortYears: 20 }).error);
  const m = RM.prepayment({ balance: 500000, ratePct: 5, amortYears: 25, extraPerPayment: 100 }), n = RM.prepayment({ balance: 500000, ratePct: 5, amortYears: 25, extraPerPayment: 400 });
  assert.ok(n.interestSaved > m.interestSaved && n.yearsSaved > m.yearsSaved);
});

test("four-scenario comparison matches independent term cost, total cost and cheapest pick", () => {
  for (const c of X.compare) {
    const o = RM.compare({ balance: c.in.balance, amortYears: c.in.amort, freq: c.in.freq, scenarios: c.in.sc.map(([r, t, ty, k]) => ({ ratePct: r, termYears: t, type: ty, costs: k })) });
    assert.ok(!o.error);
    c.out.rows.forEach((e, k) => {
      close(o.rows[k].payment, e.payment, 0.0001); close(o.rows[k].interest, e.interest, 0.05);
      close(o.rows[k].endBalance, e.endBalance, 0.05); close(o.rows[k].totalCost, e.total, 0.05);
      close(o.rows[k].threeMonthsInterest, e.three, 0.0101);
    });
    assert.equal(o.cheapestIndex, c.out.best);
    assert.equal(o.cheapestPerYearIndex, c.out.bestPerYear);
  }
  assert.ok(RM.compare({ balance: 400000, amortYears: 25, scenarios: [{ ratePct: 5, termYears: 5 }] }).error);
});

test("debt consolidation matches independent payoff simulation and flags endless debts", () => {
  for (const c of X.consolidation) {
    const [mb, mr, ma, debts, nr, na, pen, costs] = c.in;
    const o = RM.consolidation({ balance: mb, ratePct: mr, amortYears: ma, debts: debts.map(([b, r, p]) => ({ balance: b, ratePct: r, payment: p })), newRatePct: nr, newAmortYears: na, penalty: pen, costs });
    assert.ok(!o.error, o.error);
    close(o.current.monthly, c.out.curMonthly, 0.011); close(o.current.interest, c.out.curInterest, 0.1);
    close(o.next.payment, c.out.newPayment, 0.0001); close(o.next.interest, c.out.newInterest, 0.1);
    close(o.monthlyChange, c.out.monthlyChange, 0.02); close(o.interestChange, c.out.interestChange, 0.15);
    if (c.out.sameOutlayMonths) { assert.equal(o.sameOutlay.months, c.out.sameOutlayMonths); close(o.sameOutlay.interest, c.out.sameOutlayInterest, 0.15); } else assert.equal(o.sameOutlay, undefined);
  }
  const never = RM.consolidation({ balance: 300000, ratePct: 5, amortYears: 20, debts: [{ balance: 20000, ratePct: 20, payment: 100 }], newRatePct: 5, newAmortYears: 20 });
  assert.equal(never.debtsNeverPaid, true);
  assert.ok(RM.consolidation({ balance: 300000, ratePct: 5, amortYears: 20, debts: [], newRatePct: 5 }).error);
});

test("refinance break-even matches independent closed-form position comparison", () => {
  for (const c of X.refi) {
    const [B, r0, a0, cp, r1, a1, pen, costs, roll, H] = c.in;
    const o = RM.refiBreakEven({ balance: B, ratePct: r0, amortYears: a0, currentPayment: cp, newRatePct: r1, newAmortYears: a1, penalty: pen, costs, roll, horizonMonths: H });
    assert.ok(!o.error, o.error);
    close(o.keepPayment, c.out.keep, 0.0001); close(o.refiPayment, c.out.refi, 0.0001);
    assert.equal(o.breakEvenMonth, c.out.be, JSON.stringify(c.in));
    assert.equal(o.simpleBreakEvenMonths, c.out.simple, JSON.stringify(c.in));
    close(o.advantageAtHorizon, c.out.advantage, 0.2);
    for (const r of o.rows) close(r.advantage, c.out.rows[String(r.month)], 0.2);
  }
  assert.ok(RM.refiBreakEven({ balance: 0, ratePct: 5, amortYears: 20, newRatePct: 4 }).error);
});

test("refinance break-even: a higher new rate never breaks even; zero cost breaks even at once", () => {
  const worse = RM.refiBreakEven({ balance: 400000, ratePct: 4, amortYears: 25, newRatePct: 5, costs: 1000 });
  assert.equal(worse.breakEvenMonth, null); assert.equal(worse.verdict, "no"); assert.equal(worse.simpleBreakEvenMonths, null);
  assert.equal(RM.refiBreakEven({ balance: 400000, ratePct: 5, amortYears: 25, newRatePct: 4 }).breakEvenMonth, 0);
});

test("rental offset vs add-back matches independent math; offset beats add-back; unregistered suite counts $0", () => {
  for (const c of X.rental) {
    const [inc, rent, rate, yrs, tax, heat, debts, legal] = c.in;
    const o = RM.rental({ annualIncome: inc, rentMonthly: rent, ratePct: rate, amortYears: yrs, propertyTaxMonthly: tax, heatMonthly: heat, debtsMonthly: debts, legal });
    assert.ok(!o.error);
    close(o.base.maxLoan, c.out.base, 0.02);
    c.out.rows.forEach((e, k) => { assert.equal(o.rows[k].share, e.share); close(o.rows[k].addBack.maxLoan, e.addBack, 0.02); close(o.rows[k].offset.maxLoan, e.offset, 0.02); });
  }
  const o = RM.rental({ annualIncome: 110000, rentMonthly: 2000, ratePct: 4.5, propertyTaxMonthly: 350, heatMonthly: 120, debtsMonthly: 400 });
  o.rows.forEach((r) => { assert.ok(r.offset.maxLoan >= r.addBack.maxLoan); assert.ok(r.addBack.maxLoan > o.base.maxLoan); });
  const u = RM.rental({ annualIncome: 110000, rentMonthly: 2000, ratePct: 4.5, propertyTaxMonthly: 350, heatMonthly: 120, debtsMonthly: 400, legal: false });
  u.rows.forEach((r) => { assert.equal(r.addBack.maxLoan, u.base.maxLoan); assert.equal(r.offset.maxLoan, u.base.maxLoan); });
  assert.ok(RM.rental({ annualIncome: 0, rentMonthly: 1000, ratePct: 5 }).error);
});

test("suite refinance checker: each published condition flips the result at its boundary", () => {
  for (const c of X.suite) {
    const [V, debt, proj, add, units, occ, st, started, am, credit, sc] = c.in;
    const o = RM.suiteCheck({ asImprovedValue: V, existingDebt: debt, projectCost: proj, additional: add, unitsAfter: units, occupant: occ, shortTerm: st, constructionStarted: started, amortYears: am, credit, selfContained: sc });
    assert.ok(!o.error, o.error);
    assert.equal(o.failCount, c.out.fails, JSON.stringify(c.in)); assert.equal(o.checkCount, c.out.checks, JSON.stringify(c.in));
    assert.equal(o.result, c.out.result, JSON.stringify(c.in)); close(o.maxNewFinancing, c.out.maxNew, 0.011);
  }
  assert.ok(RM.suiteCheck({ asImprovedValue: 0, projectCost: 1000 }).error);
});

test("readvanceable: limit = min(65% of value, 80% of value less mortgage); grows as principal is repaid", () => {
  for (const c of X.readv) {
    const [V, B, r, y, drawn, span] = c.in;
    const o = RM.readvanceable({ homeValue: V, balance: B, ratePct: r, amortYears: y, drawn, years: span });
    assert.ok(!o.error, o.error);
    close(o.mortgagePayment, c.out.payment, 0.0001);
    o.rows.forEach((row, k) => { close(row.balance, c.out.rows[k].bal, 0.1); close(row.limit, c.out.rows[k].limit, 0.1); });
  }
  const o = RM.readvanceable({ homeValue: 1000000, balance: 400000, ratePct: 4.5, amortYears: 25, years: 10 });
  for (let k = 1; k < o.rows.length; k++) assert.ok(o.rows[k].limit >= o.rows[k - 1].limit);
  assert.ok(o.rows[10].limit <= 650000);
  assert.ok(RM.readvanceable({ homeValue: 1000000, balance: 400000, ratePct: 4.5, amortYears: 25, drawn: 500000 }).error);
});

test("sale proceeds: commission on the first $100,000 and the rest, GST on commission, net after every deduction", () => {
  for (const c of X.sale) {
    const [price, c1, c2, payout, pen, liens, legal, other] = c.in;
    const o = RM.saleProceeds({ price, c1Pct: c1, c2Pct: c2, payout, penalty: pen, otherLiens: liens, legal, other });
    assert.ok(!o.error);
    close(o.commission, c.out.commission, 0.0101); close(o.gst, c.out.gst, 0.0101); close(o.net, c.out.net, 0.02);
  }
  assert.equal(RM.saleProceeds({ price: 100000, c1Pct: 7, c2Pct: 2.5 }).commission, 7000);
  assert.equal(RM.saleProceeds({ price: 100001, c1Pct: 7, c2Pct: 2.5 }).commission, 7000.03);
  assert.equal(RM.saleProceeds({ price: 500000, c1Pct: 0, c2Pct: 0, payout: 600000 }).shortfall, true);
  assert.ok(RM.saleProceeds({ price: 0 }).error);
});

test("home equity estimate: 80% refinance ceiling, 65% line, lower-value sensitivity, over-limit flag", () => {
  for (const c of X.equity) {
    const [V, B, L, pen, costs] = c.in;
    const o = RM.homeEquity({ homeValue: V, balance: B, otherLiens: L, penalty: pen, costs });
    assert.ok(!o.error);
    close(o.equity, c.out.equity, 0.011); close(o.refiRoom, c.out.refi, 0.011); close(o.refiNet, c.out.net, 0.011);
    close(o.lineRoom, c.out.line, 0.011); close(o.lower5, c.out.l5, 0.011); close(o.lower10, c.out.l10, 0.011);
  }
  assert.equal(RM.homeEquity({ homeValue: 1000000, balance: 800000 }).refiRoom, 0);
  assert.equal(RM.homeEquity({ homeValue: 1000000, balance: 800000 }).overLimit, false);
  assert.equal(RM.homeEquity({ homeValue: 1000000, balance: 800001 }).overLimit, true);
  const w = RM.homeEquity({ homeValue: 1000000, balance: 500000, wanted: 200000, ratePct: 5, amortYears: 25 });
  assert.equal(w.fitsRefi, true); assert.ok(w.addedPayment > 1000);
  assert.ok(RM.homeEquity({ homeValue: 0, balance: 1 }).error);
});

test("readiness quiz routes every answer to canonical slugs and never invents one", () => {
  const sit = Object.keys(RM.QUIZ_ROUTES);
  assert.equal(sit.length, 8);
  for (const s of sit) for (const t of ["now", "soon", "later", "exploring"]) {
    const r = RM.quizRoute({ situation: s, timeline: t });
    assert.ok(!r.error);
    for (const slug of [r.hub, r.tool.slug, ...r.guides.map((g) => g.slug)]) assert.ok(isCanonical(slug), slug);
    assert.ok(r.nextStep.length > 40);
  }
  assert.equal(RM.quizRoute({ situation: "first-home", timeline: "now" }).hub, "/first-time-home-buyer-bc/");
  assert.equal(RM.quizRoute({ situation: "renewing", timeline: "soon" }).hub, "/mortgage-renewal-bc/");
  assert.equal(RM.quizRoute({ situation: "equity", timeline: "later" }).hub, "/refinance-mortgage-bc/");
  assert.equal(RM.quizRoute({ situation: "investing", timeline: "now" }).hub, "/investment-property-mortgages-bc/");
  assert.equal(RM.quizRoute({ situation: "renewing", timeline: "later" }).guides[2].slug, "/mortgage-renewal-reminder/");
  assert.equal(RM.quizRoute({ situation: "struggling", timeline: "now" }).urgent, true);
  assert.ok(RM.quizRoute({}).error);
});

test("mortgage check-up: date windows, phases and term figures match the independent implementation", () => {
  for (const c of X.checkup) {
    const i = c.in, o = RM.checkUp({ balance: i.balance, ratePct: i.rate, amortYears: i.amort, freq: i.freq, type: i.type, today: i.today, maturity: i.maturity });
    assert.ok(!o.error, "no error for " + JSON.stringify(i));
    assert.equal(o.monthsToMaturity, c.out.months);
    assert.equal(o.daysToMaturity, c.out.days);
    assert.equal(o.phase, c.out.phase);
    assert.equal(o.inEarlyWindow, c.out.inEarly);
    assert.equal(o.inOutreachWindow, c.out.inOutreach);
    close(o.penaltyLow, c.out.three, 0.01); // no comparison rate supplied: three months' interest is the whole range
    close(o.penaltyHigh, c.out.three, 0.01);
    if (c.out.interest != null) { close(o.interestLeftInTerm, c.out.interest, 0.02); close(o.balanceAtMaturity, c.out.endBalance, 0.02); }
    if (c.out.phase === "past") assert.equal(o.interestLeftInTerm, 0);
  }
  assert.ok(RM.checkUp({ balance: 0, ratePct: 5, amortYears: 20, maturity: "2027-01-01" }).error);
  assert.ok(RM.checkUp({ balance: 1, ratePct: 5, amortYears: 20, maturity: "not-a-date" }).error);
  const eq = RM.checkUp({ balance: 480000, ratePct: 4.79, amortYears: 21, maturity: "2027-06-01", homeValue: 900000, today: "2026-10-30" });
  assert.equal(eq.equity, 420000); assert.equal(eq.refiRoom, 240000); close(eq.ltv, 0.5333, 0.001);
});
