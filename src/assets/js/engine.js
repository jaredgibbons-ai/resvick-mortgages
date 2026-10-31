/*
 * Resvick Mortgages — shared calculation engine (one amortization core).
 * Runs in the browser (window.RM) and in Node (require) so the same code is tested.
 *
 * FORMULAS (documented per build prompt §14)
 * -------------------------------------------------------------------------
 * Canadian compounding: fixed rates are nominal annual rates compounded
 * semi-annually (Interest Act). Periodic rate for n payments a year:
 *     i = (1 + r/2)^(2/n) - 1
 * Variable rates are treated as compounded monthly: i = (1 + r/12)^(12/n) - 1.
 * Level payment:  PMT = P * i / (1 - (1 + i)^-N),  N = years * n
 * Accelerated bi-weekly / weekly: PMT = (monthly payment) / 2  or  / 4,
 * paid 26 / 52 times a year; payoff time is found by simulation.
 * Rounding: to the cent, half up.
 *
 * CMHC premium: charged on the insured loan amount (price - down payment),
 * rate by loan-to-value band (CMHC homeowner schedule), +0.20% when the
 * amortization is over 25 years; premium is added to the mortgage.
 *
 * Minimum down payment: 5% of the first $500,000 + 10% of the portion above,
 * for prices below $1,500,000; 20% at or above $1,500,000.
 *
 * BC property transfer tax: 1% to $200,000; 2% from $200,000 to $2,000,000;
 * 3% above $2,000,000; plus a further 2% on the residential portion above
 * $3,000,000.
 *   First-time buyers' exemption (registered on/after Apr 1, 2024):
 *     FMV <= $500,000 : exemption = the tax (nothing payable)
 *     FMV <= $835,000 : exemption = $8,000
 *     FMV <  $860,000 : exemption = $8,000 * (860,000 - FMV) / 25,000
 *     otherwise       : none
 *   Newly built home exemption (registered on/after Apr 1, 2024):
 *     FMV <= $1,100,000 : exemption = the tax
 *     FMV <  $1,150,000 : exemption = tax * (1,150,000 - FMV) / 50,000
 *     otherwise         : none
 *   Partial eligibility: exemption * eligible share.
 *
 * Affordability (estimate only): GDS <= 39%, TDS <= 44% of gross monthly
 * income, at the qualifying rate = max(contract rate + 2%, 5.25%).
 * GDS costs = mortgage payment + property tax + heat + 50% of condo fees.
 * TDS = GDS costs + other debt payments.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.RM = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var FREQ = {
    monthly: { n: 12, label: "Monthly" },
    semimonthly: { n: 24, label: "Semi-monthly" },
    biweekly: { n: 26, label: "Bi-weekly" },
    weekly: { n: 52, label: "Weekly" },
    accbiweekly: { n: 26, accel: 2, label: "Accelerated bi-weekly" },
    accweekly: { n: 52, accel: 4, label: "Accelerated weekly" }
  };

  function roundCents(x) {
    var s = x < 0 ? -1 : 1;
    return (s * Math.floor(Math.abs(x) * 100 + 0.5 + 1e-9)) / 100;
  }

  function periodicRate(annualPct, n, compounding) {
    var r = annualPct / 100;
    if (compounding === "monthly") return Math.pow(1 + r / 12, 12 / n) - 1;
    return Math.pow(1 + r / 2, 2 / n) - 1;
  }

  function levelPayment(P, annualPct, years, n, compounding) {
    var N = Math.round(years * n);
    if (!(P > 0) || !(N > 0)) return 0;
    var i = periodicRate(annualPct, n, compounding);
    if (i === 0) return P / N;
    return (P * i) / (1 - Math.pow(1 + i, -N));
  }

  /** Payment for a given frequency (handles accelerated). Returns {payment, n, ...} */
  function payment(opts) {
    var P = Number(opts.principal), rate = Number(opts.ratePct), years = Number(opts.amortYears);
    var f = FREQ[opts.freq || "monthly"];
    var comp = opts.compounding || "semi";
    if (!f) return { error: "Unknown payment frequency." };
    if (!(P > 0)) return { error: "Enter a mortgage amount above zero." };
    if (!(years > 0)) return { error: "Enter an amortization above zero years." };
    if (!(rate >= 0)) return { error: "Enter an interest rate of zero or more." };
    var pmt;
    if (f.accel) {
      var monthly = levelPayment(P, rate, years, 12, comp);
      pmt = roundCents(monthly) / f.accel;
    } else {
      pmt = levelPayment(P, rate, years, f.n, comp);
    }
    pmt = roundCents(pmt);
    var sim = simulate(P, periodicRate(rate, f.n, comp), pmt, f.n);
    return {
      payment: pmt,
      paymentsPerYear: f.n,
      periods: sim.periods,
      payoffYears: sim.periods / f.n,
      totalInterest: roundCents(sim.totalInterest),
      totalPaid: roundCents(sim.totalPaid)
    };
  }

  function simulate(P, i, pmt, n) {
    var bal = P, periods = 0, interest = 0, paid = 0, cap = n * 100;
    if (i === 0) {
      periods = Math.ceil(P / pmt);
      return { periods: periods, totalInterest: 0, totalPaid: P };
    }
    if (pmt <= P * i) return { periods: Infinity, totalInterest: Infinity, totalPaid: Infinity };
    while (bal > 0.005 && periods < cap) {
      var int = bal * i;
      var pay = Math.min(pmt, bal + int);
      bal = bal + int - pay;
      interest += int;
      paid += pay;
      periods++;
    }
    return { periods: periods, totalInterest: interest, totalPaid: paid };
  }

  /** Principal supported by a monthly payment at a rate (inverse of levelPayment). */
  function principalFromPayment(pmt, annualPct, years, compounding) {
    var N = Math.round(years * 12);
    var i = periodicRate(annualPct, 12, compounding || "semi");
    if (!(pmt > 0) || !(N > 0)) return 0;
    if (i === 0) return pmt * N;
    return (pmt * (1 - Math.pow(1 + i, -N))) / i;
  }

  // ---- CMHC ---------------------------------------------------------------
  var CMHC_BANDS = [
    { maxLtv: 0.65, rate: 0.6 },
    { maxLtv: 0.75, rate: 1.7 },
    { maxLtv: 0.8, rate: 2.4 },
    { maxLtv: 0.85, rate: 2.8 },
    { maxLtv: 0.9, rate: 3.1 },
    { maxLtv: 0.95, rate: 4.0 }
  ];
  var NON_TRADITIONAL_RATE = 4.5;
  var AMORT_SURCHARGE = 0.2;

  function minDownPayment(price) {
    price = Number(price);
    if (!(price > 0)) return 0;
    if (price >= 1500000) return roundCents(price * 0.2);
    if (price <= 500000) return roundCents(price * 0.05);
    return roundCents(25000 + (price - 500000) * 0.1);
  }

  /**
   * opts: price, down, amortYears (default 25), nonTraditional (bool)
   * Returns { insuranceRequired, ltv, baseRate, surcharge, rate, premium, totalLoan, loan, note, error }
   */
  function cmhcPremium(opts) {
    var price = Number(opts.price), down = Number(opts.down);
    var amort = opts.amortYears == null ? 25 : Number(opts.amortYears);
    if (!(price > 0)) return { error: "Enter a purchase price above zero." };
    if (!(down >= 0)) return { error: "Enter a down payment of zero or more." };
    if (down >= price) return { error: "Down payment must be less than the price." };
    var loan = price - down;
    var ltv = loan / price;
    var res = { loan: roundCents(loan), ltv: ltv, insuranceRequired: false, rate: 0, premium: 0, totalLoan: roundCents(loan) };
    if (ltv <= 0.8 + 1e-12) {
      res.note = "20% or more down: default insurance isn't required.";
      return res;
    }
    if (price >= 1500000) {
      res.error = "Insured mortgages are available only for purchase prices below $1,500,000. At this price a minimum 20% down payment applies.";
      return res;
    }
    if (down + 0.005 < minDownPayment(price)) {
      res.error = "That down payment is below the minimum of " + fmt(minDownPayment(price)) + " for this price.";
      return res;
    }
    var band = null;
    for (var k = 0; k < CMHC_BANDS.length; k++) {
      if (ltv <= CMHC_BANDS[k].maxLtv + 1e-12) { band = CMHC_BANDS[k]; break; }
    }
    if (!band) { res.error = "Loan-to-value above 95% is not insurable."; return res; }
    var base = band.rate;
    if (opts.nonTraditional && ltv > 0.9 + 1e-12) base = NON_TRADITIONAL_RATE;
    if (amort > 25 && opts.eligible30 === false) {
      res.error = "Insured mortgages are limited to a 25-year amortization unless you are a first-time buyer or buying a newly built home (since December 15, 2024).";
      return res;
    }
    var sur = amort > 25 ? AMORT_SURCHARGE : 0;
    var rate = Math.round((base + sur) * 100) / 100;
    var prem = roundCents((loan * rate) / 100);
    res.insuranceRequired = true;
    res.baseRate = base;
    res.surcharge = sur;
    res.rate = rate;
    res.premium = prem;
    res.totalLoan = roundCents(loan + prem);
    return res;
  }

  // ---- BC property transfer tax ------------------------------------------
  function generalPtt(fmv) {
    var t = 0;
    t += Math.min(fmv, 200000) * 0.01;
    if (fmv > 200000) t += (Math.min(fmv, 2000000) - 200000) * 0.02;
    if (fmv > 2000000) t += (fmv - 2000000) * 0.03;
    return t;
  }

  function ptt(opts) {
    var fmv = Number(opts.fmv);
    if (!(fmv > 0)) return { error: "Enter a fair market value above zero." };
    var resFmv = opts.residentialFmv == null || opts.residentialFmv === "" ? fmv : Number(opts.residentialFmv);
    var general = generalPtt(fmv);
    var additional = resFmv > 3000000 ? (resFmv - 3000000) * 0.02 : 0;
    var gross = general + additional;
    var share = opts.eligibleShare == null ? 1 : Math.min(1, Math.max(0, Number(opts.eligibleShare)));

    var ftb = 0;
    if (fmv <= 500000) ftb = general;
    else if (fmv <= 835000) ftb = 8000;
    else if (fmv < 860000) ftb = (8000 * (860000 - fmv)) / 25000;
    ftb = Math.min(ftb, general) * share;

    var nb = 0;
    if (fmv <= 1100000) nb = general;
    else if (fmv < 1150000) nb = (general * (1150000 - fmv)) / 50000;
    nb = nb * share;

    var applied = 0, which = "none";
    if (opts.firstTimeBuyer && ftb > 0) { applied = ftb; which = "first-time buyer"; }
    if (opts.newlyBuilt && nb > applied) { applied = nb; which = "newly built home"; }
    var net = Math.max(0, gross - applied);
    return {
      general: roundCents(general),
      additional: roundCents(additional),
      gross: roundCents(gross),
      ftbExemption: roundCents(ftb),
      newBuiltExemption: roundCents(nb),
      applied: roundCents(applied),
      appliedWhich: which,
      net: roundCents(net)
    };
  }

  // ---- Affordability (estimate) ------------------------------------------
  function qualifyingRate(contractPct) {
    return Math.max(Number(contractPct) + 2, 5.25);
  }

  function affordability(o) {
    var income = Number(o.annualIncome) || 0;
    var rate = Number(o.ratePct);
    var years = Number(o.amortYears) || 25;
    if (!(income > 0)) return { error: "Enter your gross annual household income." };
    if (!(rate >= 0)) return { error: "Enter an interest rate." };
    var down = Number(o.down) || 0;
    var m = income / 12;
    var tax = Number(o.propertyTaxMonthly) || 0;
    var heat = Number(o.heatMonthly) || 0;
    var condo = (Number(o.condoFeesMonthly) || 0) * 0.5;
    var debts = Number(o.debtsMonthly) || 0;
    var gdsRoom = m * 0.39 - tax - heat - condo;
    var tdsRoom = m * 0.44 - tax - heat - condo - debts;
    var room = Math.min(gdsRoom, tdsRoom);
    var limitedBy = gdsRoom <= tdsRoom ? "GDS" : "TDS";
    var qr = qualifyingRate(rate);
    if (!(room > 0)) {
      return { qualifyingRate: qr, maxPayment: 0, maxLoan: 0, maxPrice: 0, limitedBy: limitedBy, note: "With these debts and costs, no mortgage payment fits the ratios." };
    }
    var maxLoan = principalFromPayment(room, qr, years, "semi");
    // largest price where (price - down) plus any insurance premium fits maxLoan
    var lo = down, hi = down + maxLoan * 1.2 + 1, k;
    function feasible(price) {
      if (price <= down) return true;
      var need = minDownPayment(price);
      if (down + 0.005 < need) return false;
      var loan = price - down;
      if (loan / price <= 0.8 + 1e-12) return loan <= maxLoan;
      var c = cmhcPremium({ price: price, down: down, amortYears: years });
      if (c.error) return false;
      return c.totalLoan <= maxLoan;
    }
    for (k = 0; k < 60; k++) {
      var mid = (lo + hi) / 2;
      if (feasible(mid)) lo = mid; else hi = mid;
    }
    var price = Math.floor(lo / 100) * 100;
    var minNeeded = minDownPayment(price);
    return {
      qualifyingRate: qr,
      gdsRoom: roundCents(gdsRoom),
      tdsRoom: roundCents(tdsRoom),
      maxPayment: roundCents(room),
      limitedBy: limitedBy,
      maxLoan: roundCents(maxLoan),
      maxPrice: price,
      downNeeded: minNeeded,
      downShort: down + 0.005 < minNeeded
    };
  }

  // ---- Closing costs ------------------------------------------------------
  function closingCosts(o) {
    var price = Number(o.price), down = Number(o.down) || 0;
    if (!(price > 0)) return { error: "Enter a purchase price above zero." };
    var p = ptt({ fmv: price, firstTimeBuyer: !!o.firstTimeBuyer, newlyBuilt: !!o.newlyBuilt });
    var items = {
      legal: Number(o.legal) || 0,
      appraisal: Number(o.appraisal) || 0,
      inspection: Number(o.inspection) || 0,
      titleInsurance: Number(o.titleInsurance) || 0,
      other: Number(o.other) || 0
    };
    var other = items.legal + items.appraisal + items.inspection + items.titleInsurance + items.other;
    var total = down + p.net + other;
    return {
      ptt: p,
      items: items,
      costsExcludingDown: roundCents(p.net + other),
      cashToClose: roundCents(total)
    };
  }


  // ---- Term cost (used by the renewal comparison) -------------------------
  /** Payment, interest and ending balance over a term, on an amortization schedule. */
  function termCost(o) {
    var P = Number(o.balance), rate = Number(o.ratePct), amort = Number(o.amortYears), term = Number(o.termYears);
    var f = FREQ[o.freq || "monthly"];
    var comp = o.compounding || "semi";
    if (!(P > 0)) return { error: "Enter a balance above zero." };
    if (!(amort > 0) || !(term > 0)) return { error: "Enter an amortization and a term above zero." };
    if (!(rate >= 0)) return { error: "Enter a rate of zero or more." };
    var base = payment({ principal: P, ratePct: rate, amortYears: amort, freq: o.freq || "monthly", compounding: comp });
    if (base.error) return base;
    var i = periodicRate(rate, f.n, comp), bal = P, interest = 0, steps = Math.min(Math.round(term * f.n), Math.round(amort * f.n) + f.n);
    for (var k = 0; k < steps && bal > 0.005; k++) {
      var it = bal * i, pay = Math.min(base.payment, bal + it);
      bal = bal + it - pay; interest += it;
    }
    return { payment: base.payment, interest: roundCents(interest), endBalance: roundCents(Math.max(bal, 0)), paid: roundCents(base.payment * steps) };
  }

  // ---- Prepayment penalty estimate ----------------------------------------
  /**
   * Teaching model (range, not a quote — your lender's figure governs).
   * 3 months' interest = balance * rate * 3/12.
   * Contract-rate IRD  = balance * max(0, contract - comparison rate) * months/12
   *   (comparison rate = rate the lender would charge today for the remaining term).
   * Posted-rate IRD    = balance * max(0, original posted - current posted) * months/12
   *   (the original discount is carried into today's comparison, so the
   *    differential is the change in posted rates).
   * Fixed: greater of 3 months' interest and the IRD. Variable: 3 months' interest.
   */
  function penalty(o) {
    var bal = Number(o.balance), rate = Number(o.contractPct), months = Number(o.monthsRemaining);
    if (!(bal > 0)) return { error: "Enter your mortgage balance." };
    if (!(rate >= 0)) return { error: "Enter your contract rate." };
    if (!(months > 0)) return { error: "Enter the months left in your term." };
    var three = bal * (rate / 100) * (3 / 12);
    var out = { threeMonths: roundCents(three), contractIrd: null, postedIrd: null, estimateLow: roundCents(three), estimateHigh: roundCents(three) };
    if (o.type !== "fixed") { out.type = "variable"; return out; }
    out.type = "fixed";
    var vals = [three];
    if (o.comparisonPct !== "" && o.comparisonPct != null && !isNaN(Number(o.comparisonPct))) {
      var d = Math.max(0, rate - Number(o.comparisonPct));
      out.contractIrd = roundCents(bal * (d / 100) * (months / 12));
      vals.push(out.contractIrd);
    }
    if (o.originalPostedPct !== "" && o.originalPostedPct != null && o.currentPostedPct !== "" && o.currentPostedPct != null &&
        !isNaN(Number(o.originalPostedPct)) && !isNaN(Number(o.currentPostedPct))) {
      var d2 = Math.max(0, Number(o.originalPostedPct) - Number(o.currentPostedPct));
      out.postedIrd = roundCents(bal * (d2 / 100) * (months / 12));
      vals.push(out.postedIrd);
    }
    out.estimateLow = roundCents(Math.max(three, out.contractIrd == null ? 0 : out.contractIrd));
    out.estimateHigh = roundCents(Math.max.apply(null, vals));
    if (out.contractIrd == null && out.postedIrd == null) out.note = "Add a comparison rate or the posted rates to estimate the IRD.";
    return out;
  }

  // =========================================================================
  // PHASE 2 TOOLS. Every function below uses the same periodicRate / levelPayment /
  // simulate core as the tools above. Assumptions are listed per function.
  // =========================================================================

  // ---- Prepayment ---------------------------------------------------------
  /**
   * Interest saved and time cut by paying extra. The rate is held for the whole
   * amortization (a simplification: real terms renew at new rates).
   *   extraPerPayment : added to every regular payment
   *   lumpSumNow      : one lump sum applied before the first payment
   *   annualLump      : applied after every n-th payment (once a year)
   * Interest is calculated each payment period on the opening balance; payoff
   * is when the balance reaches zero. Rounding follows payment().
   */
  function prepayment(o) {
    var P = Number(o.balance), rate = Number(o.ratePct), years = Number(o.amortYears);
    var f = FREQ[o.freq || "monthly"], comp = o.compounding || "semi";
    var extra = Number(o.extraPerPayment) || 0, lump = Number(o.lumpSumNow) || 0, annual = Number(o.annualLump) || 0;
    if (!f) return { error: "Unknown payment frequency." };
    if (!(P > 0)) return { error: "Enter your mortgage balance." };
    if (!(years > 0)) return { error: "Enter the years left on your amortization." };
    if (!(rate >= 0)) return { error: "Enter an interest rate of zero or more." };
    if (extra < 0 || lump < 0 || annual < 0) return { error: "Extra amounts cannot be negative." };
    if (lump >= P) return { error: "A lump sum equal to or above the balance pays the mortgage off. Check your prepayment limit before relying on it." };
    var base = payment({ principal: P, ratePct: rate, amortYears: years, freq: o.freq || "monthly", compounding: comp });
    if (base.error) return base;
    var i = periodicRate(rate, f.n, comp), N = Math.round(years * f.n);
    // Run the schedule. A final payment is adjusted to clear the balance at the scheduled
    // end (period N), so rounding the regular payment to the cent never adds a stub period.
    function run(pmt, lumpNow, yearly) {
      var bal = P - lumpNow, periods = 0, interest = 0;
      while (bal > 0.005 && periods < N) {
        var it = bal * i, pay = periods + 1 >= N ? bal + it : Math.min(pmt, bal + it);
        bal = bal + it - pay; interest += it; periods++;
        if (yearly > 0 && periods % f.n === 0 && bal > 0.005) bal -= Math.min(yearly, bal);
      }
      return { periods: periods, interest: interest };
    }
    var b0 = run(base.payment, 0, 0), sc = run(base.payment + extra, lump, annual);
    return {
      payment: base.payment, newPayment: roundCents(base.payment + extra), paymentsPerYear: f.n,
      baseline: { periods: b0.periods, years: b0.periods / f.n, interest: roundCents(b0.interest) },
      scenario: { periods: sc.periods, years: sc.periods / f.n, interest: roundCents(sc.interest) },
      interestSaved: roundCents(b0.interest - sc.interest),
      periodsSaved: b0.periods - sc.periods,
      yearsSaved: (b0.periods - sc.periods) / f.n
    };
  }

  // ---- Scenario comparison (up to four) -----------------------------------
  /** o: {balance, amortYears, freq, scenarios:[{name, ratePct, termYears, type, costs}]} */
  function compare(o) {
    var list = o.scenarios || [];
    if (!(Number(o.balance) > 0)) return { error: "Enter a mortgage balance." };
    if (list.length < 2) return { error: "Enter at least two scenarios to compare." };
    var rows = [], k, best = 0;
    for (k = 0; k < list.length && k < 4; k++) {
      var s = list[k];
      var t = termCost({ balance: o.balance, ratePct: s.ratePct, amortYears: o.amortYears, termYears: s.termYears, freq: o.freq || "monthly" });
      if (t.error) return { error: "Scenario " + (k + 1) + ": " + t.error };
      var costs = Number(s.costs) || 0;
      rows.push({
        name: s.name || "Scenario " + (k + 1), ratePct: Number(s.ratePct), termYears: Number(s.termYears), type: s.type === "variable" ? "variable" : "fixed",
        payment: t.payment, interest: t.interest, endBalance: t.endBalance, costs: roundCents(costs),
        totalCost: roundCents(t.interest + costs),
        threeMonthsInterest: roundCents(Number(o.balance) * (Number(s.ratePct) / 100) * 0.25)
      });
      if (rows[k].totalCost < rows[best].totalCost) best = k;
    }
    // Cost per year of term lets 3-year and 5-year options be read side by side.
    var bestPy = 0;
    rows.forEach(function (r, k) { r.costPerYear = roundCents(r.totalCost / r.termYears); if (r.totalCost / r.termYears < rows[bestPy].totalCost / rows[bestPy].termYears) bestPy = k; });
    return { rows: rows, cheapestIndex: best, cheapestPerYearIndex: bestPy };
  }

  // ---- Debt consolidation -------------------------------------------------
  function debtPayoff(bal, ratePct, pmt) {
    var i = ratePct / 100 / 12, months = 0, interest = 0, cap = 1200;
    if (!(bal > 0)) return { months: 0, interest: 0, ok: true };
    if (!(pmt > 0)) return { months: Infinity, interest: Infinity, ok: false };
    if (i > 0 && pmt <= bal * i) return { months: Infinity, interest: Infinity, ok: false };
    while (bal > 0.005 && months < cap) {
      var it = bal * i, pay = Math.min(pmt, bal + it);
      bal = bal + it - pay; interest += it; months++;
    }
    return { months: months, interest: interest, ok: bal <= 0.005 };
  }

  /**
   * o: {balance, ratePct, amortYears (remaining), debts:[{name,balance,ratePct,payment}],
   *     newRatePct, newAmortYears, penalty, costs}
   * Debts compound monthly (nominal rate / 12). The mortgage compounds semi-annually.
   * Penalty and costs are added to the new mortgage. The new rate is assumed to
   * hold for the whole new amortization.
   */
  function consolidation(o) {
    var mb = Number(o.balance), mr = Number(o.ratePct), ma = Number(o.amortYears);
    var nr = Number(o.newRatePct), na = Number(o.newAmortYears) || ma;
    var penalty = Number(o.penalty) || 0, costs = Number(o.costs) || 0;
    if (!(mb > 0)) return { error: "Enter your mortgage balance." };
    if (!(ma > 0)) return { error: "Enter the years left on your amortization." };
    if (!(mr >= 0) || !(nr >= 0)) return { error: "Enter your current and new mortgage rates." };
    var debts = (o.debts || []).filter(function (d) { return Number(d.balance) > 0; });
    if (!debts.length) return { error: "Enter at least one debt with a balance." };
    var cur = payment({ principal: mb, ratePct: mr, amortYears: ma, freq: "monthly" });
    if (cur.error) return cur;
    var debtRows = [], debtBal = 0, debtPay = 0, debtInt = 0, never = false, k;
    for (k = 0; k < debts.length; k++) {
      var d = debts[k], b = Number(d.balance), r = Number(d.ratePct) || 0, p = Number(d.payment) || 0;
      var po = debtPayoff(b, r, p);
      if (!po.ok) never = true;
      debtRows.push({ name: d.name || "Debt " + (k + 1), balance: roundCents(b), ratePct: r, payment: roundCents(p), months: po.months, interest: po.ok ? roundCents(po.interest) : null });
      debtBal += b; debtPay += p; if (po.ok) debtInt += po.interest;
    }
    var newBal = mb + debtBal + penalty + costs;
    var nw = payment({ principal: newBal, ratePct: nr, amortYears: na, freq: "monthly" });
    if (nw.error) return nw;
    var curMonthly = cur.payment + debtPay;
    var curInterest = cur.totalInterest + debtInt;
    var out = {
      debts: debtRows, debtsNeverPaid: never,
      current: { mortgagePayment: cur.payment, debtPayments: roundCents(debtPay), monthly: roundCents(curMonthly), mortgageInterest: cur.totalInterest, debtInterest: roundCents(debtInt), interest: roundCents(curInterest) },
      next: { balance: roundCents(newBal), payment: nw.payment, interest: nw.totalInterest, years: nw.periods / 12 },
      monthlyChange: roundCents(nw.payment - curMonthly),
      interestChange: roundCents(nw.totalInterest - curInterest),
      totalPaidChange: roundCents(nw.totalPaid - (mb + debtBal + curInterest))
    };
    // Keep paying what you paid before: how fast does the new mortgage clear?
    if (curMonthly > nw.payment) {
      var i = periodicRate(nr, 12, "semi"), bal = newBal, n = 0, inte = 0;
      while (bal > 0.005 && n < 1200) { var it = bal * i, pay = Math.min(curMonthly, bal + it); bal = bal + it - pay; inte += it; n++; }
      out.sameOutlay = { months: n, years: n / 12, interest: roundCents(inte), interestVsCurrent: roundCents(inte - curInterest) };
    }
    return out;
  }

  // ---- Refinance break-even -----------------------------------------------
  /**
   * o: {balance, ratePct, amortYears (remaining), currentPayment (optional),
   *     newRatePct, newAmortYears (default = remaining), penalty, costs,
   *     roll (true = penalty and costs are added to the new mortgage; false = paid in cash),
   *     horizonMonths (default 60, max 360)}
   * Monthly comparison of "position" = payments made + cash costs + balance still owed.
   * Break-even = first month the refinance position is at or below the keep-it position.
   * Both rates are assumed to hold across the horizon.
   */
  function refiBreakEven(o) {
    var B = Number(o.balance), r0 = Number(o.ratePct), a0 = Number(o.amortYears), r1 = Number(o.newRatePct);
    var a1 = Number(o.newAmortYears) || a0, penalty = Number(o.penalty) || 0, costs = Number(o.costs) || 0;
    var H = Math.min(360, Math.max(1, Math.round(Number(o.horizonMonths) || 60)));
    if (!(B > 0)) return { error: "Enter your mortgage balance." };
    if (!(a0 > 0)) return { error: "Enter the years left on your amortization." };
    if (!(r0 >= 0) || !(r1 >= 0)) return { error: "Enter your current rate and the new rate." };
    var upfront = penalty + costs;
    var pKeep = Number(o.currentPayment) > 0 ? roundCents(Number(o.currentPayment)) : roundCents(levelPayment(B, r0, a0, 12, "semi"));
    var newBal = B + (o.roll ? upfront : 0);
    var cash = o.roll ? 0 : upfront;
    var pRefi = roundCents(levelPayment(newBal, r1, a1, 12, "semi"));
    var i0 = periodicRate(r0, 12, "semi"), i1 = periodicRate(r1, 12, "semi");
    var bk = B, br = newBal, payK = 0, payR = 0, m, be = null, rows = [];
    if (upfront === 0) be = 0;
    for (m = 1; m <= H; m++) {
      var ik = bk * i0, xk = Math.min(pKeep, bk + ik); bk = bk + ik - xk; payK += xk;
      var ir = br * i1, xr = Math.min(pRefi, br + ir); br = br + ir - xr; payR += xr;
      var netK = payK + bk, netR = payR + cash + br;
      if (be === null && netR <= netK + 1e-9) be = m;
      if (m % 12 === 0 || m === H) rows.push({ month: m, keep: roundCents(netK), refi: roundCents(netR), advantage: roundCents(netK - netR) });
    }
    var last = rows[rows.length - 1];
    var saving = pKeep - pRefi;
    return {
      keepPayment: pKeep, refiPayment: pRefi, monthlyChange: roundCents(pRefi - pKeep), monthlySaving: roundCents(saving),
      upfront: roundCents(upfront), newBalance: roundCents(newBal),
      simpleBreakEvenMonths: saving > 0 ? Math.max(0, Math.ceil(upfront / saving - 1e-9)) + 0 : null,
      breakEvenMonth: be, horizonMonths: H, rows: rows, advantageAtHorizon: last.advantage,
      verdict: be !== null ? "pays" : "no"
    };
  }

  // ---- Rental income: offset vs add-back ----------------------------------
  /**
   * Same rent, same costs, two methods, three shares. Qualifying payment room is
   * found from GDS 39% / TDS 44% at the stress-test rate, then converted to a
   * maximum mortgage with the shared amortization function.
   *   add-back: share x rent is added to income; all property costs count.
   *   offset  : share x rent is deducted from property costs.
   * Unregistered or non-self-contained suites count $0. Condo fees are not modelled.
   */
  function rental(o) {
    var income = Number(o.annualIncome), rent = Number(o.rentMonthly), rate = Number(o.ratePct), years = Number(o.amortYears) || 25;
    var tax = Number(o.propertyTaxMonthly) || 0, heat = Number(o.heatMonthly) || 0, debts = Number(o.debtsMonthly) || 0;
    var legal = o.legal !== false;
    if (!(income > 0)) return { error: "Enter your gross annual income." };
    if (!(rent > 0)) return { error: "Enter the monthly rent." };
    if (!(rate >= 0)) return { error: "Enter an interest rate." };
    var qr = qualifyingRate(rate), m = income / 12, counted = legal ? rent : 0;
    function build(gds, tds) {
      var room = Math.min(gds, tds);
      return { maxPayment: room > 0 ? roundCents(room) : 0, maxLoan: room > 0 ? roundCents(principalFromPayment(room, qr, years, "semi")) : 0, limitedBy: gds <= tds ? "GDS" : "TDS" };
    }
    var base = build(m * 0.39 - tax - heat, m * 0.44 - tax - heat - debts);
    var rows = [], shares = o.shares || [0.5, 0.8, 1.0], k, s;
    for (k = 0; k < shares.length; k++) {
      s = shares[k];
      var rc = counted * s;
      var a = build((m + rc) * 0.39 - tax - heat, (m + rc) * 0.44 - tax - heat - debts);
      var f = build(m * 0.39 + rc - tax - heat, m * 0.44 + rc - tax - heat - debts);
      rows.push({ share: s, rentCounted: roundCents(rc), addBack: { maxPayment: a.maxPayment, maxLoan: a.maxLoan, gain: roundCents(a.maxLoan - base.maxLoan) }, offset: { maxPayment: f.maxPayment, maxLoan: f.maxLoan, gain: roundCents(f.maxLoan - base.maxLoan) } });
    }
    return { qualifyingRate: qr, legal: legal, base: base, rows: rows };
  }

  // ---- Secondary suite refinance eligibility checker ----------------------
  /**
   * Published conditions of the default-insured "refinance for secondary suites"
   * (applications on or after Jan 15, 2025). Sources: Department of Finance Canada
   * (Oct 2024 news release), CMHC Refinance fact sheet (2025), Sagen lender update (Dec 2024).
   * o: {asImprovedValue, existingDebt, projectCost, additional, unitsAfter, occupant ('owner'|'relative'|'no'),
   *     shortTerm (bool), constructionStarted (bool), amortYears, credit ('600plus'|'below'|'unsure'), selfContained (bool)}
   */
  function suiteCheck(o) {
    var V = Number(o.asImprovedValue), debt = Number(o.existingDebt) || 0, proj = Number(o.projectCost), add = o.additional === "" || o.additional == null ? proj : Number(o.additional);
    if (!(V > 0)) return { error: "Enter the estimated value of the home after the suite is built." };
    if (!(proj > 0)) return { error: "Enter the expected project cost." };
    var total = debt + add, ltv = total / V, checks = [];
    function chk(id, label, status, detail) { checks.push({ id: id, label: label, status: status, detail: detail }); }
    chk("value", "As-improved value under $2,000,000", V < 2000000 ? "pass" : "fail", V < 2000000 ? "The value after the suite is built is under the $2,000,000 limit." : "The program requires an as-improved value under $2,000,000.");
    chk("ltv", "Total borrowing at or below 90% of the as-improved value", ltv <= 0.9 + 1e-12 ? "pass" : "fail", "Existing debt plus the new financing is " + (Math.round(ltv * 10000) / 100) + "% of the as-improved value. The limit is 90%.");
    chk("cost", "New financing does not exceed the project cost", add <= proj + 1e-9 ? "pass" : "fail", add <= proj + 1e-9 ? "The new money is limited to the cost of building the suite." : "Financing above the project cost is not allowed. This is not a way to take out equity.");
    chk("units", "No more than four units in total", Number(o.unitsAfter) <= 4 && Number(o.unitsAfter) >= 2 ? "pass" : "fail", "The program allows a maximum of four dwelling units, including the existing home.");
    chk("occupant", "You or a close relative live in an existing unit", o.occupant === "owner" || o.occupant === "relative" ? "pass" : "fail", "The borrower or a close relative must occupy one of the existing units.");
    chk("shortterm", "The new unit is not a short-term rental", o.shortTerm ? "fail" : "pass", "New units must be long-term rentals. Rentals under 90 consecutive days are excluded.");
    chk("selfcontained", "The suite will be legal and self-contained", o.selfContained === false ? "fail" : "pass", "The unit must be fully self-contained and meet local bylaws and zoning.");
    chk("amort", "Amortization of 30 years or less", Number(o.amortYears) <= 30 ? "pass" : "fail", Number(o.amortYears) > 25 ? "Up to 30 years is allowed. Past 25 years the insurance premium carries a 0.20% surcharge." : "Within the 25-year standard.");
    chk("credit", "Credit score of at least 600 for one borrower or guarantor", o.credit === "600plus" ? "pass" : (o.credit === "below" ? "fail" : "check"), o.credit === "unsure" ? "Confirm your score before applying." : "CMHC's refinance fact sheet sets a minimum score of 600 for at least one borrower or guarantor.");
    chk("timing", "Application made before construction starts", o.constructionStarted ? "check" : "pass", o.constructionStarted ? "Lenders expect financing to be arranged before or very early in construction. If work has started, ask a broker before you spend more." : "Arrange the financing first. A building permit is needed at the first advance.");
    var fail = checks.filter(function (c) { return c.status === "fail"; }).length, check = checks.filter(function (c) { return c.status === "check"; }).length;
    var maxFinancing = Math.max(0, Math.min(0.9 * V - debt, proj));
    return {
      checks: checks, failCount: fail, checkCount: check,
      result: fail ? "no" : (check ? "confirm" : "likely"),
      totalBorrowing: roundCents(total), ltv: ltv, maxTotalBorrowing: roundCents(0.9 * V), maxNewFinancing: roundCents(maxFinancing),
      premiumSurcharge: Number(o.amortYears) > 25
    };
  }

  // ---- Readvanceable mortgage ---------------------------------------------
  /**
   * Illustration of how the credit line grows as principal is repaid.
   * Total credit is capped at 80% of the home value and the revolving (line of
   * credit) part at 65%, the federal limits for regulated lenders. Home value is
   * held constant. Interest on the line is interest-only at the rate you enter.
   * o: {homeValue, balance, ratePct, amortYears, lineRatePct, drawn, years}
   */
  function readvanceable(o) {
    var V = Number(o.homeValue), B = Number(o.balance), rate = Number(o.ratePct), years = Number(o.amortYears), lr = Number(o.lineRatePct) || 0, drawn = Number(o.drawn) || 0;
    var span = Math.min(30, Math.max(1, Math.round(Number(o.years) || 10)));
    if (!(V > 0)) return { error: "Enter your home value." };
    if (!(B > 0)) return { error: "Enter your mortgage balance." };
    if (!(years > 0) || !(rate >= 0)) return { error: "Enter your rate and the years left on your amortization." };
    var pay = payment({ principal: B, ratePct: rate, amortYears: years, freq: "monthly" });
    if (pay.error) return pay;
    function limitFor(bal) { return Math.max(0, Math.min(0.65 * V, 0.8 * V - bal)); }
    var limit0 = limitFor(B);
    if (drawn > limit0 + 0.005) return { error: "At the start you could borrow at most " + fmt(limit0) + " on the line (the lesser of 65% of value and 80% of value less the mortgage). Lower the amount you borrow." };
    var i = periodicRate(rate, 12, "semi"), bal = B, rows = [], y, m;
    rows.push({ year: 0, balance: roundCents(B), repaid: 0, limit: roundCents(limit0), available: roundCents(limit0 - drawn), totalOwing: roundCents(B + drawn), ltv: (B + drawn) / V });
    for (y = 1; y <= span; y++) {
      for (m = 0; m < 12 && bal > 0.005; m++) { var it = bal * i, px = Math.min(pay.payment, bal + it); bal = bal + it - px; }
      var lim = limitFor(bal);
      rows.push({ year: y, balance: roundCents(Math.max(bal, 0)), repaid: roundCents(B - Math.max(bal, 0)), limit: roundCents(lim), available: roundCents(Math.max(0, lim - drawn)), totalOwing: roundCents(Math.max(bal, 0) + drawn), ltv: (Math.max(bal, 0) + drawn) / V });
    }
    return { mortgagePayment: pay.payment, lineInterestMonthly: roundCents(drawn * lr / 100 / 12), lineInterestYearly: roundCents(drawn * lr / 100), startLimit: roundCents(limit0), rows: rows };
  }

  // ---- Sale proceeds ------------------------------------------------------
  /**
   * Net proceeds of a sale. Commission: c1% on the first $100,000 and c2% on the
   * rest (the rates are the ones in your listing agreement; none are assumed).
   * GST at 5% is charged on the commission. Everything else is as entered.
   */
  function saleProceeds(o) {
    var price = Number(o.price), c1 = Number(o.c1Pct) || 0, c2 = Number(o.c2Pct) || 0;
    if (!(price > 0)) return { error: "Enter the expected sale price." };
    if (c1 < 0 || c2 < 0) return { error: "Commission rates cannot be negative." };
    var comm = price <= 100000 ? price * c1 / 100 : 100000 * c1 / 100 + (price - 100000) * c2 / 100;
    var gst = comm * 0.05;
    var payout = Number(o.payout) || 0, pen = Number(o.penalty) || 0, liens = Number(o.otherLiens) || 0, legal = Number(o.legal) || 0, other = Number(o.other) || 0;
    var net = price - comm - gst - payout - pen - liens - legal - other;
    return {
      price: roundCents(price), commission: roundCents(comm), gst: roundCents(gst), payout: roundCents(payout), penalty: roundCents(pen),
      otherLiens: roundCents(liens), legal: roundCents(legal), other: roundCents(other),
      totalCosts: roundCents(comm + gst + legal + other), net: roundCents(net), shortfall: net < 0
    };
  }

  // ---- Home equity estimate -----------------------------------------------
  /**
   * Equity from figures the visitor types. No data is looked up.
   *   Equity           = value - mortgage - other liens
   *   Refinance ceiling = 80% of value (federally regulated lenders)
   *   Line of credit   = up to 65% of value on its own, within the 80% combined limit
   * o: {homeValue, balance, otherLiens, penalty, costs, wanted, ratePct, amortYears}
   */
  function homeEquity(o) {
    var V = Number(o.homeValue), B = Number(o.balance), L = Number(o.otherLiens) || 0, pen = Number(o.penalty) || 0, costs = Number(o.costs) || 0;
    if (!(V > 0)) return { error: "Enter your estimate of the home's value." };
    if (!(B >= 0)) return { error: "Enter your mortgage balance." };
    var debt = B + L;
    function at80(v) { return Math.max(0, 0.8 * v - debt); }
    var out = {
      equity: roundCents(V - debt), ltv: debt / V,
      refiRoom: roundCents(at80(V)), refiNet: roundCents(at80(V) - pen - costs),
      lineRoom: roundCents(Math.max(0, Math.min(0.65 * V, 0.8 * V - B) - L)),
      lower5: roundCents(at80(V * 0.95)), lower10: roundCents(at80(V * 0.9)),
      overLimit: debt / V > 0.8 + 1e-12
    };
    var want = Number(o.wanted) || 0;
    if (want > 0) {
      out.wanted = roundCents(want); out.fitsRefi = want <= out.refiNet + 0.005;
      if (Number(o.ratePct) >= 0 && o.ratePct !== "" && o.ratePct != null && Number(o.amortYears) > 0) out.addedPayment = roundCents(levelPayment(want, Number(o.ratePct), Number(o.amortYears), 12, "semi"));
    }
    return out;
  }

  // ---- Readiness quiz routing ---------------------------------------------
  var QUIZ_ROUTES = {
    "first-home": { persona: "A first-time buyer", hub: "/first-time-home-buyer-bc/", guides: [["/mortgage-pre-approval-bc/", "How a pre-approval works"], ["/how-much-mortgage-can-i-afford/", "How much mortgage you can afford"], ["/first-time-buyer-programs-bc/", "First-time buyer programs in BC"]], tool: ["/mortgage-calculators/#affordability", "Run the affordability calculator"] },
    "renewing": { persona: "A homeowner renewing", hub: "/mortgage-renewal-bc/", guides: [["/switch-mortgage-lenders-at-renewal/", "Switching lenders at renewal"], ["/stress-test-exemption-switching-lenders/", "The stress-test exemption when switching"], ["/mortgage-renewal-letter-explained/", "Your renewal letter, explained"]], tool: ["/mortgage-calculators/#renewal", "Compare stay, switch and refinance"] },
    "moving": { persona: "A homeowner moving", hub: "/porting-your-mortgage/", guides: [["/bridge-financing/", "Bridge financing between closing dates"], ["/mortgage-pre-approval-bc/", "How a pre-approval works"], ["/downsizing-and-your-mortgage/", "Downsizing and your mortgage"]], tool: ["/mortgage-calculators/#sale-proceeds", "Estimate your sale proceeds"] },
    "equity": { persona: "A homeowner using equity", hub: "/refinance-mortgage-bc/", guides: [["/is-it-worth-refinancing/", "Is it worth refinancing?"], ["/cash-out-refinance-bc/", "Cash-out refinancing in BC"], ["/heloc-bc/", "Home equity lines of credit"]], tool: ["/home-equity-estimator/", "Estimate your accessible equity"] },
    "investing": { persona: "An investor", hub: "/investment-property-mortgages-bc/", guides: [["/how-much-suite-income-will-a-lender-count/", "How much suite income a lender counts"], ["/refinance-rental-property/", "Refinancing a rental property"], ["/rental-property-mortgage-renewal/", "Renewing a rental property mortgage"]], tool: ["/mortgage-calculators/#offset", "Compare offset and add-back"] },
    "self-employed": { persona: "A self-employed borrower", hub: "/self-employed-mortgage-bc/", guides: [["/stated-income-mortgage/", "Stated-income mortgages"], ["/newly-self-employed-mortgage/", "If you are newly self-employed"], ["/mortgage-application-checklist/", "The mortgage application checklist"]], tool: ["/mortgage-calculators/#affordability", "Run the affordability calculator"] },
    "struggling": { persona: "A homeowner under payment pressure", hub: "/behind-on-mortgage-payments/", guides: [["/missed-a-mortgage-payment/", "If you have missed a payment"], ["/mortgage-payment-deferral/", "Payment deferral"], ["/refinance-to-pay-off-debt/", "Consolidating debt into a mortgage"]], tool: ["/mortgage-calculators/#consolidation", "Compare consolidation scenarios"] },
    "unsure": { persona: "Still working out the first step", hub: "/mortgage-calculators/", guides: [["/how-mortgage-brokers-get-paid/", "How mortgage brokers get paid"], ["/mortgage-broker-vs-bank/", "Mortgage broker or bank?"], ["/lender-comparison-report/", "The Lender Comparison Report"]], tool: ["/mortgage-calculators/", "Browse the calculators"] }
  };
  var QUIZ_TIMING = {
    now: "Your timeline is short, so the most useful step is a call this week. Bring the documents you have, and Joshua will tell you what is missing.",
    soon: "You have a few months, which is enough time to plan well. A call now will set the order of the steps and the dates that matter.",
    later: "You have room to prepare, and preparation is where most of the savings are. A call can map the milestones so nothing arrives as a surprise.",
    exploring: "There is no deadline, so the aim is to learn the rules before you need them. Read the guides below and call when a date appears."
  };
  /** a: {situation, timeline} -> route object, or {error} */
  function quizRoute(a) {
    var r = QUIZ_ROUTES[a && a.situation];
    if (!r) return { error: "Choose the answer that fits best." };
    var t = QUIZ_TIMING[a.timeline] ? a.timeline : "exploring";
    var out = { situation: a.situation, persona: r.persona, hub: r.hub, guides: r.guides.map(function (g) { return { slug: g[0], label: g[1] }; }), tool: { slug: r.tool[0], label: r.tool[1] }, timeline: t, nextStep: QUIZ_TIMING[t], urgent: a.situation === "struggling" };
    if (a.situation === "renewing" && (t === "exploring" || t === "later")) out.guides[2] = { slug: "/mortgage-renewal-reminder/", label: "Set a free renewal reminder" };
    return out;
  }

  function fmt(n) {
    return "$" + Number(n).toLocaleString("en-CA", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }


  // ---------------------------------------------------------------------------
  // MORTGAGE CHECK-UP (results-first tracker). Composes payment, termCost, penalty and homeEquity.
  // monthsToMaturity is a whole-month count from `today` (ISO date) to `maturity` (ISO date), day-of-month aware.
  // Windows: 120 days = the common early-renewal window; 180 days = the aftercare outreach point.
  // Phase: "plan" (>12 months), "compare" (6-12), "act" (4-6), "now" (<4), "past" (matured).
  // ---------------------------------------------------------------------------
  function monthsBetween(fromIso, toIso) {
    var a = new Date(fromIso + "T00:00:00Z"), b = new Date(toIso + "T00:00:00Z");
    if (isNaN(a) || isNaN(b)) return NaN;
    var m = (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth());
    if (b.getUTCDate() < a.getUTCDate()) m -= 1;
    return m;
  }
  function daysBetween(fromIso, toIso) {
    var a = new Date(fromIso + "T00:00:00Z"), b = new Date(toIso + "T00:00:00Z");
    if (isNaN(a) || isNaN(b)) return NaN;
    return Math.round((b - a) / 86400000);
  }
  function checkUp(o) {
    var bal = Number(o.balance), rate = Number(o.ratePct), amort = Number(o.amortYears);
    if (!(bal > 0)) return { error: "Enter your current mortgage balance." };
    if (!(rate >= 0)) return { error: "Enter your current interest rate." };
    if (!(amort > 0)) return { error: "Enter the years left on your amortization." };
    if (!o.maturity || isNaN(new Date(o.maturity + "T00:00:00Z"))) return { error: "Enter your maturity date (the day your current term ends)." };
    var today = o.today || new Date().toISOString().slice(0, 10);
    var months = monthsBetween(today, o.maturity), days = daysBetween(today, o.maturity);
    var freq = o.freq || "monthly", type = o.type === "variable" ? "variable" : "fixed";
    var pay = payment({ principal: bal, ratePct: rate, amortYears: amort, freq: freq, compounding: type === "variable" ? "monthly" : "semi" });
    if (pay.error) return pay;
    var termYears = Math.max(months, 0) / 12;
    var tc = termYears > 0 ? termCost({ balance: bal, ratePct: rate, amortYears: amort, termYears: termYears, freq: freq, compounding: type === "variable" ? "monthly" : "semi" }) : { interest: 0, endBalance: bal };
    var pen = penalty({ type: type, balance: bal, contractPct: rate, monthsRemaining: Math.max(months, 1), comparisonPct: o.comparisonPct == null ? "" : o.comparisonPct, originalPostedPct: "", currentPostedPct: "" });
    var phase = days < 0 ? "past" : months > 12 ? "plan" : months >= 6 ? "compare" : months >= 4 ? "act" : "now";
    var eq = null;
    if (o.homeValue != null && o.homeValue !== "" && Number(o.homeValue) > 0) {
      eq = homeEquity({ homeValue: Number(o.homeValue), balance: bal, otherLiens: 0, penalty: 0, costs: 0, wanted: 0, ratePct: "", amortYears: amort });
    }
    return {
      today: today, maturity: o.maturity, monthsToMaturity: months, daysToMaturity: days, phase: phase,
      inEarlyWindow: days >= 0 && days <= 120, inOutreachWindow: days >= 0 && days <= 183,
      payment: pay.payment, freq: freq, paymentMonthlyEquivalent: roundCents(pay.payment * FREQ[freq].n / 12),
      interestLeftInTerm: roundCents(tc.interest || 0), balanceAtMaturity: roundCents(tc.endBalance == null ? bal : tc.endBalance),
      penaltyLow: pen.estimateLow, penaltyHigh: pen.estimateHigh, penaltyType: type,
      equity: eq ? eq.equity : null, ltv: eq ? eq.ltv : null, refiRoom: eq ? eq.refiRoom : null, lineRoom: eq ? eq.lineRoom : null
    };
  }

  return {
    FREQ: FREQ, roundCents: roundCents, periodicRate: periodicRate,
    levelPayment: levelPayment, payment: payment, principalFromPayment: principalFromPayment,
    minDownPayment: minDownPayment, cmhcPremium: cmhcPremium,
    generalPtt: generalPtt, ptt: ptt, qualifyingRate: qualifyingRate,
    affordability: affordability, closingCosts: closingCosts, termCost: termCost, penalty: penalty, fmt: fmt,
    prepayment: prepayment, compare: compare, consolidation: consolidation, refiBreakEven: refiBreakEven, rental: rental,
    suiteCheck: suiteCheck, readvanceable: readvanceable, saleProceeds: saleProceeds, homeEquity: homeEquity, quizRoute: quizRoute, QUIZ_ROUTES: QUIZ_ROUTES, checkUp: checkUp, monthsBetween: monthsBetween, daysBetween: daysBetween
  };
});
