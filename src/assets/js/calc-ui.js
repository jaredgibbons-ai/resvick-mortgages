/* Calculator front ends. Pure presentation over window.RM (engine.js). Results are shown in full with no email required. */
(function () {
  var RM = window.RM;
  function $(f, n) { var e = f.elements[n]; return e; }
  function n(f, name) { var e = $(f, name); if (!e || e.value === "" || e.value == null) return NaN; return Number(e.value); }
  function nz(f, name) { var v = n(f, name); return isNaN(v) ? 0 : v; }
  function b(f, name) { var e = $(f, name); return !!(e && e.checked); }
  function s(f, name) { var e = $(f, name); return e ? e.value : ""; }
  var money0 = function (x) { return "$" + Math.round(x).toLocaleString("en-CA"); };
  var money2 = function (x) { return "$" + Number(x).toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  var pct = function (x) { return (Math.round(x * 100) / 100) + "%"; };
  function rows(list) { return "<dl>" + list.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("") + "</dl>"; }
  function err(msg) { return '<p class="err">' + msg + "</p>"; }
  function yrs(x) { var y = Math.floor(x), m = Math.round((x - y) * 12); if (m === 12) { y++; m = 0; } return y + " yr" + (m ? " " + m + " mo" : ""); }

  var calcs = {
    payment: function (f) {
      var price = n(f, "price"), rate = n(f, "rate");
      if (isNaN(rate)) return err("Enter the interest rate you have been quoted.");
      var down = Math.round(price * (nz(f, "downPct") / 100) * 100) / 100;
      var amort = Number(s(f, "amort"));
      var c = RM.cmhcPremium({ price: price, down: down, amortYears: amort, eligible30: amort > 25 ? b(f, "elig30") : true });
      if (c.error) return err(c.error);
      var p = RM.payment({ principal: c.totalLoan, ratePct: rate, amortYears: amort, freq: s(f, "freq") });
      if (p.error) return err(p.error);
      var mo = RM.payment({ principal: c.totalLoan, ratePct: rate, amortYears: amort, freq: "monthly" }).payment;
      var qr = RM.qualifyingRate(rate);
      var qpmt = RM.payment({ principal: c.totalLoan, ratePct: qr, amortYears: amort, freq: "monthly" }).payment;
      var tax = nz(f, "tax"), heat = nz(f, "heat"), condo = nz(f, "condo");
      var housing = mo + tax + heat + condo;
      var income = ((qpmt + tax + heat + condo * 0.5) / 0.39) * 12;
      var l = [["Down payment", money0(down)], ["CMHC premium (added to mortgage)", c.insuranceRequired ? money0(c.premium) + " at " + pct(c.rate) : "None (20% or more down)"], ["Total mortgage", money0(c.totalLoan)], ["Monthly housing cost (mortgage payment, tax, heat and condo fees)", money2(housing)], ["Gross income lenders would look for*", money0(income) + " a year"]];
      var extra = amort > 25 ? "<p class='small'>Longer amortization lowers the payment and raises the cost: total interest over the full amortization is <strong>" + money0(p.totalInterest) + "</strong>.</p>" : "<p class='small'>Total interest over the full amortization: <strong>" + money0(p.totalInterest) + "</strong>.</p>";
      return '<span class="big">' + money2(p.payment) + "</span>" + RM.FREQ[s(f, "freq")].label.toLowerCase() + " payment" + rows(l) + extra + "<p class='small'>*Estimate for housing costs alone, before any other debts, at the qualifying rate of " + pct(qr) + " (greater of your rate + 2% or 5.25%), 39% gross debt service, condo fees counted at 50%.</p>";
    },
    affordability: function (f) {
      var rate = n(f, "rate");
      var a = RM.affordability({ annualIncome: n(f, "income"), ratePct: rate, amortYears: Number(s(f, "amort")), down: nz(f, "down"), debtsMonthly: nz(f, "debts"), propertyTaxMonthly: nz(f, "tax"), heatMonthly: nz(f, "heat"), condoFeesMonthly: nz(f, "condo") });
      if (a.error) return err(a.error);
      if (a.note) return err(a.note);
      var out = '<span class="big">' + money0(a.maxPrice) + "</span>estimated maximum purchase price" + rows([["Maximum mortgage (including any CMHC premium)", money0(a.maxLoan)], ["Maximum monthly mortgage payment", money2(a.maxPayment)], ["Ratio that limits you", a.limitedBy === "GDS" ? "GDS (39%)" : "TDS (44%)"], ["Qualifying rate used", pct(a.qualifyingRate)]]);
      if (a.downShort) out += "<p class='err'>Your down payment is below the minimum of " + money0(a.downNeeded) + " for a price this high. Saving more would raise the number.</p>";
      return out + "<p class='small'>This is an estimate, not an approval. A lender still verifies your income, credit and the property.</p>";
    },
    downpayment: function (f) {
      var price = n(f, "price");
      if (!(price > 0)) return err("Enter a purchase price above zero.");
      var amort = Number(s(f, "amort")), min = RM.minDownPayment(price);
      var l = [];
      if (price >= 1500000) l.push(["Rule at this price", "20% minimum; insurance not available"]);
      else if (price <= 500000) l.push(["Tier", "5% of the full price"]);
      else l.push(["Tier", "5% of the first $500,000 ($25,000) + 10% of the " + money0(price - 500000) + " above"]);
      l.push(["Minimum down payment", money0(min) + " (" + pct((min / price) * 100) + ")"]);
      var out = '<span class="big">' + money0(min) + "</span>minimum down payment" + rows(l);
      if (price < 1500000) {
        var c = RM.cmhcPremium({ price: price, down: min, amortYears: amort, eligible30: amort > 25 ? b(f, "elig30") : true });
        if (c.error) out += err(c.error); else if (c.insuranceRequired) out += "<p>CMHC premium at the minimum: <strong>" + money0(c.premium) + "</strong> (" + pct(c.rate) + " of the loan), bringing the mortgage to " + money0(c.totalLoan) + ".</p>";
      } else out += "<p>At $1,500,000 and above there is no insured option, so the lender needs at least 20% down.</p>";
      var t = RM.minDownPayment(price) ; var twenty = price * 0.2;
      return out + "<p class='small'>Putting down 20% ( " + money0(twenty) + " ) removes the premium entirely.</p>";
    },
    closing: function (f) {
      var c = RM.closingCosts({ price: n(f, "price"), down: nz(f, "down"), firstTimeBuyer: b(f, "ftb"), newlyBuilt: b(f, "newBuilt"), legal: nz(f, "legal"), appraisal: nz(f, "appraisal"), inspection: nz(f, "inspection"), titleInsurance: nz(f, "title"), other: nz(f, "other") });
      if (c.error) return err(c.error);
      var l = [["Down payment", money0(nz(f, "down"))], ["BC property transfer tax", money0(c.ptt.net) + (c.ptt.applied ? " (after " + money0(c.ptt.applied) + " exemption)" : "")], ["Your other costs (as entered)", money0(c.items.legal + c.items.appraisal + c.items.inspection + c.items.titleInsurance + c.items.other)]];
      return '<span class="big">' + money0(c.cashToClose) + "</span>total cash needed on completion" + rows(l) + "<p class='small'>Excludes GST on newly built homes and any mortgage insurance premium (which is normally added to the mortgage).</p>";
    },
    cmhc: function (f) {
      var amort = Number(s(f, "amort"));
      var c = RM.cmhcPremium({ price: n(f, "price"), down: nz(f, "down"), amortYears: amort, nonTraditional: b(f, "nonTrad"), eligible30: amort > 25 ? b(f, "elig30") : true });
      if (c.error) return err(c.error);
      if (!c.insuranceRequired) return '<span class="big">$0</span>' + c.note;
      return '<span class="big">' + money0(c.premium) + "</span>CMHC premium" + rows([["Loan-to-value", pct(c.ltv * 100)], ["Premium rate", pct(c.baseRate) + (c.surcharge ? " + " + pct(c.surcharge) + " amortization surcharge" : "")], ["Mortgage before premium", money0(c.loan)], ["Mortgage with premium added", money0(c.totalLoan)]]);
    },
    renewal: function (f) {
      var bal = n(f, "balance"), rem = nz(f, "remaining") || 20, term = nz(f, "term") || 5;
      var sc = [["A. Stay", n(f, "rateA"), nz(f, "costA")], ["B. Switch", n(f, "rateB"), nz(f, "costB")]];
      if (!isNaN(n(f, "rateC"))) sc.push(["C. Refinance", n(f, "rateC"), nz(f, "costC")]);
      var res = [], i, r;
      for (i = 0; i < sc.length; i++) {
        if (isNaN(sc[i][1])) return err("Enter a rate for scenario " + sc[i][0].charAt(0) + ".");
        r = RM.termCost({ balance: bal, ratePct: sc[i][1], amortYears: rem, termYears: term });
        if (r.error) return err(r.error);
        res.push({ name: sc[i][0], rate: sc[i][1], cost: sc[i][2], r: r, total: r.interest + sc[i][2] });
      }
      var cur = n(f, "current"), curPmt = isNaN(cur) ? null : RM.payment({ principal: bal, ratePct: cur, amortYears: rem }).payment;
      var head = "<tr><th></th>" + res.map(function (x) { return "<th class='num'>" + x.name + "</th>"; }).join("") + "</tr>";
      function row(label, fn) { return "<tr><th scope='row'>" + label + "</th>" + res.map(function (x) { return "<td class='num'>" + fn(x) + "</td>"; }).join("") + "</tr>"; }
      var t = "<div class='table-wrap'><table><thead>" + head + "</thead><tbody>" + row("Rate", function (x) { return pct(x.rate); }) + row("Monthly payment", function (x) { return money2(x.r.payment); }) +
        (curPmt ? row("Change from today's payment", function (x) { var d = x.r.payment - curPmt; return (d >= 0 ? "+" : "−") + money2(Math.abs(d)); }) : "") +
        row("Interest over the term", function (x) { return money0(x.r.interest); }) + row("Costs you pay", function (x) { return money0(x.cost); }) +
        row("Interest + costs", function (x) { return money0(x.total); }) + row("Balance at end of term", function (x) { return money0(x.r.endBalance); }) + "</tbody></table></div>";
      var best = res.slice().sort(function (a, b2) { return a.total - b2.total; })[0];
      var vsA = res[0].total - best.total;
      var msg = best === res[0] ? "On these numbers, staying costs the least over the term." : "Over " + term + " years, scenario " + best.name.replace(/\. /, " (") + ") costs <strong>" + money0(vsA) + "</strong> less in interest and costs than staying.";
      return "<p>" + msg + "</p>" + t + "<p class='small'>Costs and rates are the figures you entered. A straight switch (same balance, same or shorter amortization) usually skips the stress test; adding money turns it into a refinance, which does not.</p>";
    },
    penalty: function (f) {
      var p = RM.penalty({ type: s(f, "type"), balance: n(f, "balance"), contractPct: n(f, "contract"), monthsRemaining: n(f, "months"), comparisonPct: s(f, "comparison"), originalPostedPct: s(f, "origPosted"), currentPostedPct: s(f, "currPosted") });
      if (p.error) return err(p.error);
      var l = [["Three months' interest", money0(p.threeMonths)]];
      if (p.type === "fixed") { l.push(["Contract-rate IRD", p.contractIrd == null ? "Add a comparison rate" : money0(p.contractIrd)]); l.push(["Posted-rate IRD", p.postedIrd == null ? "Add the posted rates" : money0(p.postedIrd)]); }
      var range = p.estimateLow === p.estimateHigh ? money0(p.estimateLow) : money0(p.estimateLow) + " to " + money0(p.estimateHigh);
      var note = p.type === "fixed" ? "Fixed-rate lenders generally charge the greater of three months' interest and the IRD. Which IRD method applies is your lender's choice, and the posted-rate method usually produces the larger figure." : "Variable-rate penalties are typically three months' interest.";
      return '<span class="big">' + range + "</span>estimated penalty range" + rows(l) + "<p class='small'>" + note + " Your lender's figure governs: ask for it in writing.</p>" + (p.note ? "<p class='small'>" + p.note + "</p>" : "");
    },
    ptt: function (f) {
      var o = RM.ptt({ fmv: n(f, "fmv"), residentialFmv: s(f, "res"), firstTimeBuyer: b(f, "ftb"), newlyBuilt: b(f, "newBuilt"), eligibleShare: Number(s(f, "share")) });
      if (o.error) return err(o.error);
      var l = [["General property transfer tax", money0(o.general)]];
      if (o.additional) l.push(["Further 2% on residential value over $3,000,000", money0(o.additional)]);
      if (o.applied) l.push(["Exemption applied (" + o.appliedWhich + ")", "−" + money0(o.applied)]);
      var out = '<span class="big">' + money0(o.net) + "</span>property transfer tax payable" + rows(l);
      if (b(f, "ftb") && o.ftbExemption === 0) out += "<p class='small'>At this value the first-time buyers' exemption doesn't apply (it ends at $860,000).</p>";
      if (b(f, "ftb") && n(f, "fmv") > 500000 && n(f, "fmv") <= 835000) out += "<p class='small'>The exemption covers the tax on the first $500,000 (up to $8,000). The part of the price above $500,000 is still taxed.</p>";
      return out;
    },
    prepayment: function (f) {
      var extra = nz(f, "extra"), lump = nz(f, "lump"), annual = nz(f, "annual");
      var o = RM.prepayment({ balance: n(f, "balance"), ratePct: n(f, "rate"), amortYears: n(f, "years"), freq: s(f, "freq"), extraPerPayment: extra, lumpSumNow: lump, annualLump: annual });
      if (o.error) return err(o.error);
      if (!extra && !lump && !annual) return err("Enter an extra payment, a yearly lump sum or a one-time lump sum to see what it changes.");
      var l = [["Regular payment", money2(o.payment)], ["Payment with your extra", money2(o.newPayment)], ["Interest with no extra", money0(o.baseline.interest)], ["Interest with your extra", money0(o.scenario.interest)], ["Time to pay off, with no extra", yrs(o.baseline.years)], ["Time to pay off, with your extra", yrs(o.scenario.years)]];
      return '<span class="big">' + money0(o.interestSaved) + "</span>interest saved, and " + yrs(o.yearsSaved) + " off the amortization" + rows(l) + "<p class='small'>Your rate is held for the whole amortization, and the final payment is adjusted to clear the balance. Check your lender's annual prepayment limit before relying on a lump sum.</p>";
    },
    compare: function (f) {
      var list = [], k, L = ["A", "B", "C", "D"];
      for (k = 0; k < 4; k++) {
        var r = n(f, "rate" + L[k]);
        if (isNaN(r)) { if (k < 2) return err("Enter a rate for option " + L[k] + "."); continue; }
        list.push({ name: "Option " + L[k], ratePct: r, termYears: n(f, "term" + L[k]), type: s(f, "type" + L[k]), costs: nz(f, "cost" + L[k]) });
      }
      var o = RM.compare({ balance: n(f, "balance"), amortYears: nz(f, "amort") || 25, freq: s(f, "freq"), scenarios: list });
      if (o.error) return err(o.error);
      var best = o.rows[o.cheapestPerYearIndex];
      function row(label, fn) { return "<tr><th scope='row'>" + label + "</th>" + o.rows.map(function (x) { return "<td class='num'>" + fn(x) + "</td>"; }).join("") + "</tr>"; }
      var t = "<div class='table-wrap'><table><thead><tr><th></th>" + o.rows.map(function (x) { return "<th class='num'>" + x.name + "</th>"; }).join("") + "</tr></thead><tbody>" +
        row("Rate and type", function (x) { return pct(x.ratePct) + " " + x.type; }) + row("Term", function (x) { return x.termYears + " yr"; }) +
        row("Payment", function (x) { return money2(x.payment); }) + row("Interest over the term", function (x) { return money0(x.interest); }) +
        row("Costs you pay", function (x) { return money0(x.costs); }) + row("Interest + costs", function (x) { return money0(x.totalCost); }) +
        row("Per year of term", function (x) { return money0(x.costPerYear); }) + row("Balance at end of term", function (x) { return money0(x.endBalance); }) +
        row("Three months' interest (minimum exit cost)", function (x) { return money0(x.threeMonthsInterest); }) + "</tbody></table></div>";
      return "<p><strong>" + best.name + "</strong> has the lowest interest-plus-costs per year of term, at " + money0(best.costPerYear) + ". Lowest cost is not the same as best fit: compare prepayment privileges, portability and penalty method too.</p>" + t + "<p class='small'>Cost per year of term lets a 3-year and a 5-year option be read side by side, but the ranking judges only the term you entered. Variable options assume the rate stays put. A fixed-rate penalty can be much larger than three months' interest.</p>";
    },
    consolidation: function (f) {
      var names = ["Credit card", "Car or personal loan", "Line of credit"], debts = [], k;
      for (k = 1; k <= 3; k++) { var b1 = n(f, "d" + k + "b"); if (!(b1 > 0)) continue; debts.push({ name: names[k - 1], balance: b1, ratePct: nz(f, "d" + k + "r"), payment: nz(f, "d" + k + "p") }); }
      var o = RM.consolidation({ balance: n(f, "balance"), ratePct: n(f, "rate"), amortYears: nz(f, "years") || 20, debts: debts, newRatePct: n(f, "nrate"), newAmortYears: nz(f, "nyears") || nz(f, "years") || 20, penalty: nz(f, "pen"), costs: nz(f, "costs") });
      if (o.error) return err(o.error);
      if (o.debtsNeverPaid) return err("At least one debt payment is smaller than its monthly interest, so that debt never pays off at the payment you entered. Raise the payment or check the rate.");
      var up = o.monthlyChange > 0 ? "up" : "down";
      var l = [["Monthly total today (mortgage + debts)", money2(o.current.monthly)], ["Monthly payment on the new mortgage", money2(o.next.payment)], ["New mortgage amount (debts + penalty + costs)", money0(o.next.balance)], ["Interest from now to debt-free today", money0(o.current.interest)], ["Interest on the new mortgage", money0(o.next.interest)]];
      var html = '<span class="big">' + (o.monthlyChange <= 0 ? "−" : "+") + money2(Math.abs(o.monthlyChange)) + "</span>change in your monthly payment (" + up + ")" + rows(l);
      html += "<p>" + (o.interestChange > 0 ? "Total interest <strong>rises by " + money0(o.interestChange) + "</strong>: the lower payment comes from spreading the debts over a longer time." : "Total interest <strong>falls by " + money0(-o.interestChange) + "</strong> on these numbers.") + "</p>";
      if (o.sameOutlay) html += "<p class='small'>If you kept paying today's combined " + money2(o.current.monthly) + " into the new mortgage, it would clear in about " + yrs(o.sameOutlay.years) + " with " + money0(o.sameOutlay.interest) + " of interest (" + (o.sameOutlay.interestVsCurrent <= 0 ? money0(-o.sameOutlay.interestVsCurrent) + " less" : money0(o.sameOutlay.interestVsCurrent) + " more") + " than today).</p>";
      return html + "<p class='small'>Debts compound monthly and the mortgage rate is assumed to hold. A consolidation refinance is limited to 80% of the home's value and needs you to qualify on income.</p>";
    },
    offset: function (f) {
      var o = RM.rental({ annualIncome: n(f, "income"), rentMonthly: n(f, "rent"), ratePct: n(f, "rate"), amortYears: Number(s(f, "amort")), propertyTaxMonthly: nz(f, "tax"), heatMonthly: nz(f, "heat"), debtsMonthly: nz(f, "debts"), legal: b(f, "legal") });
      if (o.error) return err(o.error);
      var t = "<div class='table-wrap'><table><thead><tr><th>Share of rent counted</th><th class='num'>Add-back: largest mortgage</th><th class='num'>Offset: largest mortgage</th></tr></thead><tbody><tr><th scope='row'>No suite income</th><td class='num' colspan='2'>" + money0(o.base.maxLoan) + "</td></tr>" +
        o.rows.map(function (r) { return "<tr><th scope='row'>" + Math.round(r.share * 100) + "% (" + money0(r.rentCounted) + " a month)</th><td class='num'>" + money0(r.addBack.maxLoan) + " (+" + money0(r.addBack.gain) + ")</td><td class='num'>" + money0(r.offset.maxLoan) + " (+" + money0(r.offset.gain) + ")</td></tr>"; }).join("") + "</tbody></table></div>";
      var lead = o.legal ? "<p>Largest mortgage your ratios allow at the qualifying rate of " + pct(o.qualifyingRate) + ", before any CMHC premium. The gain from the same rent depends heavily on the method and the share.</p>" : "<p class='err'>With an unregistered or non-self-contained suite the rent counts as $0 at mainstream lenders, so every row equals the no-suite figure.</p>";
      return lead + t + "<p class='small'>Ratios are limited by " + o.base.limitedBy + " with no suite. Lenders choose the method and the share, and many cap it at 50%. CMHC guidelines allow up to 100% of gross rent from a legal two-unit owner-occupied home, but a lender's own policy still governs.</p>";
    },
    suitechecker: function (f) {
      var o = RM.suiteCheck({ asImprovedValue: n(f, "value"), existingDebt: nz(f, "debt"), projectCost: n(f, "cost"), additional: isNaN(n(f, "add")) ? "" : n(f, "add"), unitsAfter: nz(f, "units"), occupant: s(f, "occupant"), shortTerm: b(f, "short"), constructionStarted: b(f, "started"), amortYears: Number(s(f, "amort")), credit: s(f, "credit"), selfContained: b(f, "self") });
      if (o.error) return err(o.error);
      var head = o.result === "likely" ? "These inputs meet the published conditions." : o.result === "confirm" ? "These inputs meet the published conditions, with items to confirm." : "These inputs do not meet one or more published conditions.";
      var tag = { pass: "Meets", fail: "Does not meet", check: "Confirm" };
      var list = "<ul class='checks'>" + o.checks.map(function (c) { return "<li><strong>" + tag[c.status] + ":</strong> " + c.label + ". <span class='small'>" + c.detail + "</span></li>"; }).join("") + "</ul>";
      return '<span class="big">' + (o.result === "likely" ? "Likely eligible" : o.result === "confirm" ? "Confirm a few items" : "Not eligible as entered") + "</span>" + head + list +
        rows([["Total borrowing with the new money", money0(o.totalBorrowing) + " (" + pct(o.ltv * 100) + " of value)"], ["Limit at 90% of value", money0(o.maxTotalBorrowing)], ["Most new financing these inputs allow", money0(o.maxNewFinancing)]]) +
        (o.premiumSurcharge ? "<p class='small'>Amortization past 25 years carries a 0.20% surcharge on the insurance premium, which is added to the mortgage.</p>" : "") +
        "<p class='small'>A screening result, not an approval. Lenders add their own rules, and financing is normally arranged before construction is under way. Ask a broker before you spend.</p>";
    },
    readvanceable: function (f) {
      var o = RM.readvanceable({ homeValue: n(f, "value"), balance: n(f, "balance"), ratePct: n(f, "rate"), amortYears: nz(f, "years") || 25, lineRatePct: nz(f, "lineRate"), drawn: nz(f, "drawn"), years: Number(s(f, "span")) });
      if (o.error) return err(o.error);
      var t = "<div class='table-wrap'><table><thead><tr><th>Year</th><th class='num'>Mortgage balance</th><th class='num'>Principal repaid</th><th class='num'>Credit line limit</th><th class='num'>Room still available</th></tr></thead><tbody>" +
        o.rows.map(function (r) { return "<tr><th scope='row'>" + r.year + "</th><td class='num'>" + money0(r.balance) + "</td><td class='num'>" + money0(r.repaid) + "</td><td class='num'>" + money0(r.limit) + "</td><td class='num'>" + money0(r.available) + "</td></tr>"; }).join("") + "</tbody></table></div>";
      var last = o.rows[o.rows.length - 1];
      return '<span class="big">' + money0(last.limit) + "</span>credit line limit after " + last.year + " years" + rows([["Mortgage payment (monthly)", money2(o.mortgagePayment)], ["Line limit on day one", money0(o.startLimit)], ["Interest-only cost of the amount you borrow", money2(o.lineInterestMonthly) + " a month"]]) + t + "<p class='small'>Home value is held constant. The line limit is the lesser of 65% of value and 80% of value less the mortgage balance. Borrowing on the line is a debt that must be serviced and repaid.</p>";
    },
    saleproceeds: function (f) {
      var o = RM.saleProceeds({ price: n(f, "price"), c1Pct: nz(f, "c1"), c2Pct: nz(f, "c2"), payout: nz(f, "payout"), penalty: nz(f, "penalty"), otherLiens: nz(f, "liens"), legal: nz(f, "legal"), other: nz(f, "other") });
      if (o.error) return err(o.error);
      function ded(x) { return x > 0 ? "−" + money0(x) : "$0"; }
      var l = [["Sale price", money0(o.price)], ["Commission", ded(o.commission)], ["GST on commission (5%)", ded(o.gst)], ["Mortgage payout", ded(o.payout)], ["Prepayment penalty", ded(o.penalty)], ["Other debts on the home", ded(o.otherLiens)], ["Legal / notary", ded(o.legal)], ["Other selling costs", ded(o.other)]];
      if (o.shortfall) return '<span class="big">−' + money0(-o.net) + "</span>shortfall: the sale would not cover these costs" + rows(l) + "<p class='small'>Speak with your lender before listing, since a shortfall must be covered from other funds.</p>";
      return '<span class="big">' + money0(o.net) + "</span>estimated net proceeds" + rows(l) + "<p class='small'>Before property tax and utility adjustments. This is the cash available toward your next down payment, not including any bridge financing.</p>";
    },
    quiz: function (f) {
      var r = RM.quizRoute({ situation: s(f, "situation"), timeline: s(f, "timeline") });
      if (r.error) return err(r.error);
      var book = f.getAttribute("data-book") || "/contact/";
      return '<span class="big">' + r.persona + "</span>Start with <a href='" + r.hub + "'>this guide</a>." + (r.urgent ? "<p class='err'>If a payment is due or missed, call as soon as you can. There are usually more options at the start of a problem than at the end.</p>" : "") +
        "<p>" + r.nextStep + "</p><p><strong>Then read:</strong></p><ul>" + r.guides.map(function (g) { return "<li><a href='" + g.slug + "'>" + g.label + "</a></li>"; }).join("") + "</ul><p><strong>Useful tool:</strong> <a href='" + r.tool.slug + "'>" + r.tool.label + "</a></p>" +
        "<p><a class='btn' href='" + book + "' data-evt='book_call_click'>Book a 15-minute call</a> <span class='small'>Optional.</span></p>";
    },
    refibe: function (f) {
      var o = RM.refiBreakEven({ balance: n(f, "balance"), ratePct: n(f, "rate"), amortYears: nz(f, "years") || 20, currentPayment: nz(f, "curpay"), newRatePct: n(f, "nrate"), newAmortYears: nz(f, "nyears") || nz(f, "years") || 20, penalty: nz(f, "pen"), costs: nz(f, "costs"), roll: s(f, "roll") === "roll", horizonMonths: Number(s(f, "horizon")) });
      if (o.error) return err(o.error);
      var l = [["Payment today", money2(o.keepPayment)], ["Payment after refinancing", money2(o.refiPayment)], ["Penalty and costs", money0(o.upfront)], ["New mortgage amount", money0(o.newBalance)]];
      var big, sub;
      if (o.breakEvenMonth === null) { big = "No break-even"; sub = "within " + o.horizonMonths + " months on these numbers"; }
      else if (o.breakEvenMonth === 0) { big = "Immediate"; sub = "there are no costs to recover"; }
      else { big = o.breakEvenMonth + " months"; sub = "to break even (" + yrs(o.breakEvenMonth / 12) + ")"; }
      var t = "<div class='table-wrap'><table><thead><tr><th>Month</th><th class='num'>Position if you keep</th><th class='num'>Position if you refinance</th><th class='num'>Advantage of refinancing</th></tr></thead><tbody>" + o.rows.map(function (r) { return "<tr><th scope='row'>" + r.month + "</th><td class='num'>" + money0(r.keep) + "</td><td class='num'>" + money0(r.refi) + "</td><td class='num'>" + (r.advantage >= 0 ? "+" : "−") + money0(Math.abs(r.advantage)) + "</td></tr>"; }).join("") + "</tbody></table></div>";
      var simple = o.simpleBreakEvenMonths != null ? "<p class='small'>The simple version, costs divided by the monthly saving, is " + o.simpleBreakEvenMonths + " months. The table above differs because it also counts the principal you repay along the way; at a lower rate more of each payment goes to principal.</p>" : "";
      return '<span class="big">' + big + "</span>" + sub + rows(l) + "<p>" + (o.breakEvenMonth !== null ? "If you keep the new mortgage past month " + o.breakEvenMonth + ", you come out ahead. By month " + o.horizonMonths + " the advantage is " + money0(Math.abs(o.advantageAtHorizon)) + "." : "The refinance costs more than it saves within this period.") + "</p>" + t + simple + "<p class='small'>Position = payments made + cash costs + balance still owing. Both rates are assumed to hold.</p>";
    },
    checkup: function (f) {
      var o = RM.checkUp({ balance: n(f, "balance"), ratePct: n(f, "rate"), amortYears: n(f, "amort"), freq: s(f, "freq"), type: s(f, "type"), maturity: s(f, "maturity"), homeValue: s(f, "value"), comparisonPct: s(f, "comparison") });
      if (o.error) return err(o.error);
      var lender = s(f, "lender");
      var when = o.daysToMaturity < 0 ? "Your term ended " + Math.abs(o.daysToMaturity) + " days ago" : o.monthsToMaturity === 0 ? o.daysToMaturity + " days to maturity" : o.monthsToMaturity + " month" + (o.monthsToMaturity === 1 ? "" : "s") + " to maturity";
      var windowLine = o.daysToMaturity < 0 ? "If you have not signed anything, your mortgage has likely rolled into an open term at a higher rate. That is fixable, and the sooner the better." :
        o.inEarlyWindow ? "You are inside the 120-day window most lenders use for early renewals, so other lenders can already quote you for a switch at maturity with no penalty." :
        o.inOutreachWindow ? "You are inside the six-month window. Lenders will not all quote yet, but this is when the comparison work starts." :
        "You are outside the renewal window for now. Nothing to sign, but a good time to know your numbers.";
      var l = [["Maturity date", o.maturity], ["Current " + RM.FREQ[o.freq].label.toLowerCase() + " payment (recalculated)", money2(o.payment)], ["Interest still to pay before maturity", money0(o.interestLeftInTerm)], ["Balance you will carry into renewal", money0(o.balanceAtMaturity)]];
      var penRange = o.penaltyLow === o.penaltyHigh ? money0(o.penaltyLow) : money0(o.penaltyLow) + " to " + money0(o.penaltyHigh);
      l.push(["Estimated penalty to leave today (" + (o.penaltyType === "fixed" ? "three months' interest or IRD" : "three months' interest") + ")", o.daysToMaturity < 0 ? "None at or after maturity" : penRange]);
      if (o.equity != null) { l.push(["Equity on your estimate of value", money0(o.equity) + " (" + pct(o.ltv * 100) + " loan-to-value)"]); l.push(["Refinance room up to 80% of value", money0(o.refiRoom)]); l.push(["Line-of-credit room (65% revolving cap, 80% combined)", money0(o.lineRoom)]); }
      var steps = {
        past: ["Call your lender today and ask what rate and term you are on right now; an unsigned maturity usually means an open term at a high rate.", "Get a written renewal offer and at least one outside quote before you sign anything.", "A switch at this point is still a transfer, not a new purchase, so there is no penalty for moving."],
        now: ["Ask your current lender for its renewal offer in writing now; the statement should arrive at least 21 days before maturity.", "Get two outside quotes for a straight switch; most borrowers skip the stress test on a switch since late 2024.", "Decide at least two weeks before maturity so the paperwork is not rushed."],
        act: ["This is the comparison window: collect your lender's early offer and two outside quotes.", "Check whether you have a collateral charge; it changes the cost of moving.", "Decide what you want from the next term (payment certainty, flexibility, a lump-sum plan) before you look at rates."],
        compare: ["Pull your latest statement and confirm the maturity date and remaining amortization.", "Read your renewal letter when it arrives as an opening offer, not a verdict.", "If you plan to move, sell or borrow against the home in the next term, say so now; it changes the right product."],
        plan: ["Nothing to sign. Put the six-month date in your calendar and sign up for the free reminder below.", "If rates have moved a lot since you signed, the penalty figure above tells you whether an early switch is even worth running the numbers on.", "Use the prepayment calculator if you want to be further ahead by the time renewal arrives."]
      }[o.phase];
      var lenderNote = lender === "cu" ? "Credit unions are provincially regulated, so the federal switch rules read a little differently; worth a question before you count on the stress-test exemption." : lender === "mono" ? "Broker-channel lenders are usually the easiest to move away from at maturity, and often the ones to compare against." : lender === "bank" ? "Big banks often register collateral charges, which can make a switch slower and a little pricier. Check which charge you have." : "";
      var html = '<span class="big">' + when + "</span>" + windowLine + rows(l) + "<p><strong>What to do now</strong></p><ol>" + steps.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ol>" + (lenderNote ? "<p class='small'>" + lenderNote + "</p>" : "");
      html += "<p class='small'>Payment is recalculated from the balance, rate and amortization you entered and may differ slightly from your statement. The penalty is a range and your lender's figure governs. Nothing you typed leaves your browser unless you choose to send it below.</p>";
      var h = document.querySelector("form[data-lead] input[name=tool_inputs]");
      if (h) h.value = JSON.stringify({ tool: "check-up", balance: n(f, "balance"), rate: n(f, "rate"), rate_type: s(f, "type"), amort_years: n(f, "amort"), maturity: s(f, "maturity"), months_to_maturity: o.monthsToMaturity, phase: o.phase, lender_type: lender, home_value: isNaN(n(f, "value")) ? null : n(f, "value"), penalty_low: o.penaltyLow, penalty_high: o.penaltyHigh });
      return html;
    },
    equity: function (f) {
      var o = RM.homeEquity({ homeValue: n(f, "value"), balance: n(f, "balance"), otherLiens: nz(f, "liens"), penalty: nz(f, "pen"), costs: nz(f, "costs"), wanted: nz(f, "wanted"), ratePct: isNaN(n(f, "rate")) ? "" : n(f, "rate"), amortYears: nz(f, "amort") || 25 });
      if (o.error) return err(o.error);
      var l = [["Equity (value less what you owe)", money0(o.equity)], ["Loan-to-value today", pct(o.ltv * 100)], ["Room up to 80% of value", money0(o.refiRoom)], ["After penalty and costs", money0(o.refiNet)], ["Line of credit alone (up to 65%)", money0(o.lineRoom)], ["If the value comes in 5% lower", money0(o.lower5)], ["If the value comes in 10% lower", money0(o.lower10)]];
      var html = '<span class="big">' + money0(Math.max(0, o.refiNet)) + "</span>estimated amount you could borrow against your equity" + rows(l);
      if (o.overLimit) html += "<p class='err'>You owe more than 80% of the value you entered, so a regulated lender would not add to the mortgage. Other lenders have different rules; ask.</p>";
      if (o.wanted) html += "<p>" + (o.fitsRefi ? "Your " + money0(o.wanted) + " fits within the estimate" : "Your " + money0(o.wanted) + " is more than the estimate") + (o.addedPayment != null ? ". Over the amortization you entered it would add about <strong>" + money2(o.addedPayment) + " a month</strong> at that rate." : ".") + "</p>";
      html += "<p class='small'>Based only on the figures you typed. Nothing was looked up or sent. A lender decides the real amount after an appraisal, a credit check and proof of income.</p>";
      var h = document.querySelector("form[data-lead] input[name=tool_inputs]");
      if (h) h.value = JSON.stringify({ tool: "equity", home_value: n(f, "value"), mortgage_balance: n(f, "balance"), other_liens: nz(f, "liens"), estimated_room_80: o.refiRoom, estimated_net: o.refiNet, wanted: nz(f, "wanted") });
      return html;
    }
  };

  function run(form) {
    var out = form.parentNode.querySelector(".out");
    var html;
    try { html = calcs[form.getAttribute("data-calc")](form); } catch (e) { html = err("Check the numbers you entered and try again."); }
    var ok = html.indexOf('class="err"') === -1;
    out.innerHTML = html + (ok ? '<p class="print-row"><button type="button" class="btn btn-ghost btn-sm" data-print>Print or save as PDF</button> <span class="small">Prints this tool\'s inputs and result only.</span></p>' : "");
    out.hidden = false;
    var pb = out.querySelector("[data-print]");
    if (pb) pb.addEventListener("click", function () {
      var tool = form.closest(".tool"); if (!tool) { try { window.print(); } catch (e) {} return; }
      var meta = document.createElement("p"); meta.className = "print-meta"; meta.textContent = "Resvick Mortgages · " + document.title + " · printed " + new Date().toLocaleDateString("en-CA") + " · estimate only, not an approval";
      tool.insertBefore(meta, tool.firstChild); tool.classList.add("printing"); document.body.classList.add("printing-tool");
      var done = function () { tool.classList.remove("printing"); document.body.classList.remove("printing-tool"); if (meta.parentNode) meta.parentNode.removeChild(meta); window.removeEventListener("afterprint", done); };
      window.addEventListener("afterprint", done); setTimeout(done, 60000);
      try { window.print(); } catch (e) { done(); }
    });
    if (window.RMTrack && ok) window.RMTrack("calculator_complete", { tool: form.getAttribute("data-calc"), page: location.pathname });
  }
  Array.prototype.forEach.call(document.querySelectorAll("form[data-calc]"), function (form) {
    form.addEventListener("submit", function (e) { e.preventDefault(); run(form); });
    form.addEventListener("change", function () { if (!form.parentNode.querySelector(".out").hidden) run(form); });
  });
})();
