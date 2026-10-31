"""Independent re-implementation (Python Decimal, different code path) used to
generate expected outputs for the JS engine. Run: python3 -I tests/independent.py"""
import json
from decimal import Decimal as D, getcontext, ROUND_HALF_UP
getcontext().prec = 50

def cents(x): return D(x).quantize(D("0.01"), rounding=ROUND_HALF_UP)

def periodic(rate_pct, n):
    r = D(str(rate_pct)) / 100
    return (1 + r / 2) ** (D(2) / n) - 1

def level(P, rate_pct, years, n):
    i = periodic(rate_pct, n); N = int(round(years * n)); P = D(P)
    return P * i / (1 - (1 + i) ** (-N))

def payment(P, rate, years, freq):
    n = {"monthly":12,"semimonthly":24,"biweekly":26,"weekly":52,"accbiweekly":26,"accweekly":52}[freq]
    if freq == "accbiweekly": p = cents(cents(level(P, rate, years, 12)) / 2)
    elif freq == "accweekly": p = cents(cents(level(P, rate, years, 12)) / 4)
    else: p = cents(level(P, rate, years, n))
    i = periodic(rate, n); bal = D(P); periods = 0; interest = D(0)
    while bal > D("0.005"):
        it = bal * i; pay = min(p, bal + it); bal = bal + it - pay; interest += it; periods += 1
    return {"payment": float(p), "periods": periods, "totalInterest": float(cents(interest))}

def min_down(price):
    price = D(price)
    if price >= 1500000: return cents(price * D("0.2"))
    if price <= 500000: return cents(price * D("0.05"))
    return cents(25000 + (price - 500000) * D("0.1"))

BANDS = [(D("0.65"), D("0.60")), (D("0.75"), D("1.70")), (D("0.80"), D("2.40")),
         (D("0.85"), D("2.80")), (D("0.90"), D("3.10")), (D("0.95"), D("4.00"))]

def cmhc(price, down, amort=25, nontrad=False):
    price, down = D(price), D(down); loan = price - down; ltv = loan / price
    if ltv <= D("0.80"): return {"error": False, "required": False, "premium": 0.0, "total": float(loan)}
    if price >= 1500000 or down < min_down(price): return {"error": True}
    rate = next(r for m, r in BANDS if ltv <= m)
    if nontrad and ltv > D("0.90"): rate = D("4.50")
    if amort > 25: rate += D("0.20")
    prem = cents(loan * rate / 100)
    return {"error": False, "required": True, "rate": float(rate), "premium": float(prem), "total": float(cents(loan + prem))}

def general(f):
    f = D(f); t = D(0)
    t += min(f, D(200000)) * D("0.01")
    if f > 200000: t += (min(f, D(2000000)) - 200000) * D("0.02")
    if f > 2000000: t += (f - 2000000) * D("0.03")
    return t

def ptt(f, ftb=False, nb=False, share=1):
    f = D(f); g = general(f); add = (f - 3000000) * D("0.02") if f > 3000000 else D(0)
    if f <= 500000: fe = g
    elif f <= 835000: fe = D(8000)
    elif f < 860000: fe = D(8000) * (D(860000) - f) / D(25000)
    else: fe = D(0)
    fe = min(fe, g) * D(share)
    if f <= 1100000: ne = g
    elif f < 1150000: ne = g * (D(1150000) - f) / D(50000)
    else: ne = D(0)
    ne = ne * D(share)
    applied = D(0)
    if ftb and fe > 0: applied = fe
    if nb and ne > applied: applied = ne
    net = max(D(0), g + add - applied)
    return {"general": float(cents(g)), "additional": float(cents(add)), "ftbExemption": float(cents(fe)),
            "newBuiltExemption": float(cents(ne)), "net": float(cents(net))}

out = {"payments": [], "cmhc": [], "ptt": [], "minDown": []}
for P, r, y, f in [(500000,5,25,"monthly"),(400000,4.5,30,"biweekly"),(400000,4.5,30,"accbiweekly"),
                   (300000,6,20,"weekly"),(600000,5.49,25,"semimonthly"),(450000,4.99,25,"accweekly"),
                   (250000,3.25,15,"monthly"),(800000,5.79,30,"accbiweekly")]:
    out["payments"].append({"in": [P, r, y, f], "out": payment(P, r, y, f)})
for price, down, am, nt in [(500000,25000,25,False),(500000,50000,25,False),(500000,75000,25,False),
        (500000,100000,25,False),(1000000,100000,25,False),(1000000,100000,25,True),(1000000,75000,25,True),
        (600000,35000,30,False),(600000,30000,25,False),(1500000,150000,25,False),(1500000,300000,25,False),
        (1499999,125000,25,False),(400000,140000,25,False),(700000,35000,25,False)]:
    out["cmhc"].append({"in": [price, down, am, nt], "out": cmhc(price, down, am, nt)})
for f in [200000,200001,500000,500001,835000,845000,859000,860000,1100000,1101000,1125000,1149999,1150000,2000000,3000000,3500000,4000000]:
    for ftb, nb in [(False, False), (True, False), (False, True), (True, True)]:
        out["ptt"].append({"in": [f, ftb, nb], "out": ptt(f, ftb, nb)})
out["ptt"].append({"in": [835000, True, False, 0.5], "out": ptt(835000, True, False, 0.5)})
for p in [100000,500000,500001,750000,1000000,1499999,1500000,2000000]:
    out["minDown"].append({"in": p, "out": float(min_down(p))})

# ======================= PHASE 2 TOOLS (independent implementations) =======================
NN = {"monthly":12,"semimonthly":24,"biweekly":26,"weekly":52,"accbiweekly":26,"accweekly":52}

def reg_payment(P, rate, years, freq):
    n = NN[freq]
    if freq == "accbiweekly": return cents(cents(level(P, rate, years, 12)) / 2)
    if freq == "accweekly": return cents(cents(level(P, rate, years, 12)) / 4)
    return cents(level(P, rate, years, n))

def prepay(P, rate, years, freq, extra, lump, annual):
    n = NN[freq]; N = int(round(years * n)); i = periodic(rate, n); p = reg_payment(P, rate, years, freq)
    def run(pmt, l, yr):
        bal = D(P) - D(l); k = 0; it_sum = D(0)
        while bal > D("0.005") and k < N:
            it = bal * i
            pay = (bal + it) if k + 1 >= N else min(D(pmt), bal + it)
            bal = bal + it - pay; it_sum += it; k += 1
            if yr and k % n == 0 and bal > D("0.005"): bal -= min(D(yr), bal)
        return k, it_sum
    k0, i0 = run(p, 0, 0); k1, i1 = run(p + D(str(extra)), lump, annual)
    return {"payment": float(p), "basePeriods": k0, "baseInterest": float(cents(i0)), "periods": k1, "interest": float(cents(i1)),
            "saved": float(cents(i0 - i1)), "periodsSaved": k0 - k1}

out["prepay"] = []
for args in [(500000,5,25,"monthly",200,0,0), (500000,5,25,"accbiweekly",0,10000,5000), (300000,4.2,20,"weekly",50,0,0),
             (400000,6,25,"biweekly",0,0,0), (250000,3.5,15,"monthly",0,20000,0), (650000,5.49,30,"monthly",0,0,10000),
             (180000,4.79,10,"semimonthly",75,5000,2500), (500000,5,25,"monthly",3000,0,0)]:
    out["prepay"].append({"in": list(args), "out": prepay(*args)})

def term_cost(P, rate, amort, term, freq):
    n = NN[freq]; p = reg_payment(P, rate, amort, freq); i = periodic(rate, n)
    steps = min(int(round(term * n)), int(round(amort * n)) + n); bal = D(P); inter = D(0); k = 0
    while k < steps and bal > D("0.005"):
        it = bal * i; pay = min(p, bal + it); bal = bal + it - pay; inter += it; k += 1
    return {"payment": float(p), "interest": float(cents(inter)), "endBalance": float(cents(max(bal, D(0))))}

out["compare"] = []
for bal, am, fr, sc in [(500000,25,"monthly",[(5.0,5,"fixed",0),(4.5,5,"fixed",1500),(5.6,3,"fixed",0),(6.1,5,"variable",0)]),
                        (320000,20,"biweekly",[(4.99,5,"fixed",0),(4.49,3,"fixed",800)]),
                        (750000,30,"accbiweekly",[(5.25,1,"fixed",0),(5.0,2,"fixed",0),(4.89,5,"fixed",0)])]:
    rows = []
    for r, t, ty, c in sc:
        tc = term_cost(bal, r, am, t, fr); tc.update({"total": float(cents(D(str(tc["interest"])) + D(c))), "three": float(cents(D(bal) * D(str(r)) / 100 / 4))})
        rows.append(tc)
    best = min(range(len(rows)), key=lambda k: rows[k]["total"])
    best_py = min(range(len(rows)), key=lambda k: rows[k]["total"] / sc[k][1])
    out["compare"].append({"in": {"balance": bal, "amort": am, "freq": fr, "sc": [list(x) for x in sc]}, "out": {"rows": rows, "best": best, "bestPerYear": best_py}})

def debt_sim(b, rate, pmt):
    i = D(str(rate)) / 100 / 12; b = D(b); m = 0; t = D(0)
    while b > D("0.005") and m < 1200:
        it = b * i; pay = min(D(pmt), b + it); b = b + it - pay; t += it; m += 1
    return m, t

def consol(mb, mr, ma, debts, nr, na, pen, costs):
    cur = payment(mb, mr, ma, "monthly"); dpay = D(0); dint = D(0); dbal = D(0)
    for b, r, p in debts:
        m, t = debt_sim(b, r, p); dpay += D(p); dint += t; dbal += D(b)
    newbal = D(mb) + dbal + D(pen) + D(costs)
    nw = payment(newbal, nr, na, "monthly")
    curmonthly = D(str(cur["payment"])) + dpay; curint = D(str(cur["totalInterest"])) + dint
    res = {"curMonthly": float(cents(curmonthly)), "curInterest": float(cents(curint)), "newPayment": nw["payment"], "newInterest": nw["totalInterest"],
           "monthlyChange": float(cents(D(str(nw["payment"])) - curmonthly)), "interestChange": float(cents(D(str(nw["totalInterest"])) - curint))}
    if curmonthly > D(str(nw["payment"])):
        i = periodic(nr, 12); bal = newbal; k = 0; t = D(0)
        while bal > D("0.005") and k < 1200:
            it = bal * i; pay = min(curmonthly, bal + it); bal = bal + it - pay; t += it; k += 1
        res["sameOutlayMonths"] = k; res["sameOutlayInterest"] = float(cents(t))
    return res

out["consolidation"] = []
for args in [(400000,5.2,20,[(18000,19.99,540),(25000,7.5,520),(9000,9.5,250)],4.6,20,3200,1800),
             (550000,4.1,22,[(30000,21.9,900)],5.4,25,0,1500),
             (300000,6.0,18,[(12000,8.0,400),(6000,22.0,200)],4.75,18,1000,1200)]:
    out["consolidation"].append({"in": [args[0],args[1],args[2],[list(d) for d in args[3]],*args[4:]], "out": consol(*args)})

def lp(P, rate, years): return level(P, rate, years, 12)
def bal_after(P, rate, pmt, m):
    i = periodic(rate, 12); g = (1 + i) ** m
    return D(P) * g - D(pmt) * (g - 1) / i

def refi(B, r0, a0, curpay, r1, a1, pen, costs, roll, H):
    pk = cents(D(curpay)) if curpay else cents(lp(B, r0, a0))
    up = D(pen) + D(costs); nb = D(B) + (up if roll else 0); cash = D(0) if roll else up
    pr = cents(lp(nb, r1, a1)); be = 0 if up == 0 else None; rows = {}
    for m in range(1, H + 1):
        nk = pk * m + bal_after(B, r0, pk, m); nr = pr * m + cash + bal_after(nb, r1, pr, m)
        if be is None and nr <= nk + D("0.000000001"): be = m
        if m % 12 == 0 or m == H: rows[m] = float(cents(nk - nr))
    sav = pk - pr
    import math
    simple = math.ceil(float(up / sav) - 1e-9) if sav > 0 else None
    return {"keep": float(pk), "refi": float(pr), "be": be, "simple": simple, "advantage": rows[H], "rows": rows}

out["refi"] = []
for args in [(500000,5.5,20,None,4.5,20,4000,1500,False,60), (500000,5.5,20,None,4.5,20,4000,1500,True,60),
             (500000,5.5,20,None,4.5,20,0,0,False,60), (500000,4.5,20,None,5.5,20,0,1500,False,60),
             (620000,5.89,24,3900.00,4.79,30,9200,2100,True,120), (350000,5.0,15,None,4.9,15,6000,1500,False,60),
             (450000,6.2,25,None,4.4,25,5200,2400,False,24)]:
    out["refi"].append({"in": list(args), "out": refi(*args)})

def maxloan(room, qr, years):
    if room <= 0: return 0.0
    i = periodic(qr, 12); N = int(years * 12)
    return float(cents(D(room) * (1 - (1 + i) ** (-N)) / i))

def rental_case(inc, rent, rate, years, tax, heat, debts, legal):
    qr = max(D(str(rate)) + 2, D("5.25")); m = D(inc) / 12; c = D(rent) if legal else D(0)
    def room(g, t): return min(g, t)
    def ml(g, t):
        r = room(g, t); return maxloan(r, qr, years)
    base = ml(m * D("0.39") - tax - heat, m * D("0.44") - tax - heat - debts)
    rows = []
    for s in (D("0.5"), D("0.8"), D(1)):
        rc = c * s
        ab = ml((m + rc) * D("0.39") - tax - heat, (m + rc) * D("0.44") - tax - heat - debts)
        of = ml(m * D("0.39") + rc - tax - heat, m * D("0.44") + rc - tax - heat - debts)
        rows.append({"share": float(s), "addBack": ab, "offset": of})
    return {"base": base, "rows": rows}

out["rental"] = []
for args in [(110000,2000,4.5,25,350,120,400,True), (110000,2000,4.5,25,350,120,400,False), (85000,1800,5.0,30,300,100,0,True),
             (150000,2600,3.0,25,500,150,900,True), (60000,1500,4.0,25,400,120,1500,True)]:
    out["rental"].append({"in": list(args), "out": rental_case(*args)})

def readv(V, B, rate, years, drawn, span):
    pay = cents(lp(B, rate, years)); rows = []
    for y in range(0, span + 1):
        bal = D(B) if y == 0 else max(D(0), bal_after(B, rate, pay, 12 * y))
        lim = max(D(0), min(D("0.65") * V, D("0.80") * V - bal))
        rows.append({"bal": float(cents(bal)), "limit": float(cents(lim))})
    return {"payment": float(pay), "rows": rows}

out["readv"] = []
for args in [(1000000,400000,4.5,25,0,10), (800000,560000,5.0,25,50000,5), (1200000,300000,4.0,20,100000,15), (500000,400000,5.5,30,0,3)]:
    out["readv"].append({"in": list(args), "out": readv(*args)})

def sale(price, c1, c2, payout, pen, liens, legal, other):
    price = D(price); comm = price * D(str(c1)) / 100 if price <= 100000 else D(100000) * D(str(c1)) / 100 + (price - 100000) * D(str(c2)) / 100
    gst = comm * D("0.05")
    return {"commission": float(cents(comm)), "gst": float(cents(gst)), "net": float(cents(price - comm - gst - D(payout) - D(pen) - D(liens) - D(legal) - D(other)))}

out["sale"] = []
for args in [(1000000,7,2.5,450000,0,0,1800,3000), (100000,7,2.5,50000,0,0,1000,0), (100001,7,2.5,0,0,0,0,0),
             (850000,5,2,610000,9500,25000,2000,6000), (600000,4,1.5,590000,15000,0,1800,5000)]:
    out["sale"].append({"in": list(args), "out": sale(*args)})

def equity(V, B, L, pen, costs):
    V = D(V); debt = D(B) + D(L)
    a80 = lambda v: max(D(0), D("0.8") * v - debt)
    return {"equity": float(cents(V - debt)), "refi": float(cents(a80(V))), "net": float(cents(a80(V) - D(pen) - D(costs))),
            "line": float(cents(max(D(0), min(D("0.65") * V, D("0.8") * V - D(B)) - D(L)))), "l5": float(cents(a80(V * D("0.95")))), "l10": float(cents(a80(V * D("0.9"))))}

out["equity"] = []
for args in [(900000,400000,0,0,0), (900000,400000,50000,6000,2000), (1000000,800000,0,0,0), (1000000,850000,0,0,0), (750000,100000,0,0,0), (640000,512000,0,0,0)]:
    out["equity"].append({"in": list(args), "out": equity(*args)})

def suite(V, debt, proj, add, units, occ, st, started, amort, credit, sc):
    total = D(debt) + D(add); ltv = total / D(V); fails = 0; checks = 0
    fails += not (V < 2000000); fails += not (ltv <= D("0.9")); fails += not (add <= proj); fails += not (2 <= units <= 4)
    fails += occ not in ("owner", "relative"); fails += bool(st); fails += (not sc); fails += not (amort <= 30)
    fails += credit == "below"; checks += credit == "unsure"; checks += bool(started)
    res = "no" if fails else ("confirm" if checks else "likely")
    return {"fails": int(fails), "checks": int(checks), "result": res, "maxNew": float(cents(max(D(0), min(D("0.9") * D(V) - D(debt), D(proj)))))}

out["suite"] = []
for args in [(1200000,600000,180000,180000,2,"owner",False,False,30,"600plus",True),
             (1999999,600000,180000,180000,2,"relative",False,False,25,"600plus",True),
             (2000000,600000,180000,180000,2,"owner",False,False,25,"600plus",True),
             (1000000,720000,180000,180000,2,"owner",False,False,25,"600plus",True),
             (1000000,720000,180000,180000,2,"owner",False,False,25,"600plus",True),
             (1000000,700000,200000,200000,2,"owner",False,False,25,"600plus",True),
             (1000000,700000,200000,200001,2,"owner",False,False,25,"600plus",True),
             (1300000,500000,150000,150000,5,"owner",False,False,25,"600plus",True),
             (1300000,500000,150000,150000,4,"no",False,False,25,"600plus",True),
             (1300000,500000,150000,150000,3,"owner",True,False,25,"unsure",True),
             (1300000,500000,150000,150000,3,"owner",False,True,31,"below",False),
             (1300000,500000,150000,150000,3,"owner",False,False,30,"unsure",True)]:
    out["suite"].append({"in": list(args), "out": suite(*args)})


# ---- Mortgage check-up: date arithmetic (independent, via datetime) and term interest via term_cost ----
from datetime import date as _date
def months_between(a, b):
    a = _date.fromisoformat(a); b = _date.fromisoformat(b)
    m = (b.year - a.year) * 12 + (b.month - a.month)
    if b.day < a.day: m -= 1
    return m
def days_between(a, b): return (_date.fromisoformat(b) - _date.fromisoformat(a)).days
out["checkup"] = []
for bal, rate, am, fr, ty, today, mat in [
    (480000, 4.79, 21, "monthly", "fixed", "2026-10-30", "2027-06-01"),
    (300000, 5.25, 18, "biweekly", "fixed", "2026-10-30", "2026-12-15"),   # under 4 months -> "now", inside 120-day window
    (650000, 6.10, 24, "monthly", "variable", "2026-10-30", "2028-02-29"), # leap day, >12 months -> "plan"
    (200000, 3.99, 10, "accbiweekly", "fixed", "2026-10-30", "2027-04-30"), # exactly 6 months -> "compare"
    (410000, 4.50, 22, "monthly", "fixed", "2026-10-30", "2027-02-27"),     # exactly 120 days
    (410000, 4.50, 22, "monthly", "fixed", "2026-10-30", "2026-10-01"),     # matured -> "past"
]:
    m = months_between(today, mat); d = days_between(today, mat)
    phase = "past" if d < 0 else "plan" if m > 12 else "compare" if m >= 6 else "act" if m >= 4 else "now"
    term_years = max(m, 0) / 12
    if term_years > 0:
        if ty == "variable":
            # monthly compounding for variable: reuse term_cost with a monthly periodic rate
            n = NN[fr]; i = (D(str(rate)) / 100) / 12 if fr == "monthly" else None
        tc = term_cost(bal, rate, am, term_years, fr) if ty == "fixed" else None
    three = float(cents(D(bal) * D(str(rate)) / 100 / 4))
    out["checkup"].append({"in": {"balance": bal, "rate": rate, "amort": am, "freq": fr, "type": ty, "today": today, "maturity": mat},
                           "out": {"months": m, "days": d, "phase": phase, "inEarly": 0 <= d <= 120, "inOutreach": 0 <= d <= 183, "three": three,
                                   "interest": (float(tc["interest"]) if (ty == "fixed" and term_years > 0) else None),
                                   "endBalance": (float(tc["endBalance"]) if (ty == "fixed" and term_years > 0) else None)}})

json.dump(out, open("tests/expected.json", "w"), indent=1)
print("cases:", {k: len(v) for k, v in out.items()})
