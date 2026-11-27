#!/usr/bin/env python3
"""Builds the four free printables in src/assets/downloads/ (the fifth, the document checklist, has its own script).
Run: python3 tools/make-printables.py   (needs reportlab). Plain, printable, black on white with navy rules. No rates, no hype.
Every figure here is copied from a page on the site that cites its source. When a figure changes on the site, change it here
and re-run. Each PDF prints the month the figures were checked."""
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, Flowable,
                                KeepTogether, CondPageBreak)
from reportlab.pdfgen import canvas as rl_canvas

NAVY = HexColor("#253551"); INK = HexColor("#2A2829"); MUTED = HexColor("#55534F"); RULE = HexColor("#CFCFC8"); TINT = HexColor("#EEF0F4")
W, H = letter
M = 54
OUTDIR = os.path.join(os.path.dirname(__file__), "..", "src", "assets", "downloads")
CHECKED = "November 2026"

S = {
  "h1": ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=NAVY, spaceAfter=6),
  "intro": ParagraphStyle("intro", fontName="Helvetica", fontSize=10.6, leading=14.5, textColor=INK, spaceAfter=10),
  "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=12.4, leading=15, textColor=NAVY, spaceBefore=8, spaceAfter=2),
  "body": ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=13.2, textColor=INK),
  "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.6, leading=11, textColor=MUTED),
  "cell": ParagraphStyle("cell", fontName="Helvetica", fontSize=9, leading=11.6, textColor=INK),
  "cellb": ParagraphStyle("cellb", fontName="Helvetica-Bold", fontSize=9, leading=11.6, textColor=INK),
  "th": ParagraphStyle("th", fontName="Helvetica-Bold", fontSize=8.8, leading=11, textColor=white),
  "boxh": ParagraphStyle("boxh", fontName="Helvetica-Bold", fontSize=10.6, leading=13.5, textColor=NAVY, spaceAfter=3),
}

class Rule(Flowable):
    def __init__(self, color=NAVY, width=1): super().__init__(); self.c, self.w = color, width
    def wrap(self, aw, ah): self.aw = aw; return aw, 6
    def draw(self): self.canv.setStrokeColor(self.c); self.canv.setLineWidth(self.w); self.canv.line(0, 4, self.aw, 4)

class Box(Flowable):
    """An empty tick box."""
    def wrap(self, aw, ah): return 10, 10
    def draw(self): self.canv.setStrokeColor(INK); self.canv.setLineWidth(0.9); self.canv.rect(0, 0, 9, 9, stroke=1, fill=0)

def h2(t): return KeepTogether([Paragraph(t, S["h2"]), Rule()])

def checks(items, aw=W - 2 * M):
    rows = [[Box(), Paragraph(t, S["body"])] for t in items]
    t = Table(rows, colWidths=[18, aw - 18])
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                           ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
    return t

def fill(lines, aw=W - 2 * M, label_w=0.55):
    """Label on the left, a blank line to write on at the right."""
    rows = [[Paragraph(t, S["cellb" if t.startswith("<b>") else "cell"]), ""] for t in lines]
    t = Table(rows, colWidths=[aw * label_w, aw * (1 - label_w)], rowHeights=[20] * len(rows))
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "BOTTOM"), ("LINEBELOW", (1, 0), (1, -1), 0.7, INK),
                           ("LEFTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    return t

def table(head, rows, widths, blank_col=None, row_h=None):
    data = [[Paragraph(h, S["th"]) for h in head]] + [[Paragraph(c, S["cellb"] if i == 0 else S["cell"]) if isinstance(c, str) else c for i, c in enumerate(r)] for r in rows]
    t = Table(data, colWidths=widths, repeatRows=1, rowHeights=([None] + [row_h] * len(rows)) if row_h else None)
    st = [("BACKGROUND", (0, 0), (-1, 0), NAVY), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("GRID", (0, 0), (-1, -1), 0.5, RULE),
          ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 3), ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5)]
    if blank_col is not None: st.append(("BACKGROUND", (blank_col, 1), (blank_col, -1), white))
    t.setStyle(TableStyle(st))
    return t

def box(title, paras, aw=W - 2 * M):
    inner = [Paragraph(title, S["boxh"])] + [Paragraph(p, S["body"]) for p in paras]
    t = Table([[inner]], colWidths=[aw])
    t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), TINT), ("BOX", (0, 0), (-1, -1), 0.8, NAVY),
                           ("LEFTPADDING", (0, 0), (-1, -1), 12), ("RIGHTPADDING", (0, 0), (-1, -1), 12), ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)]))
    return KeepTogether([Spacer(1, 6), t])

FOOT = [
  "Resvick Mortgages, Joshua Resvick, Mortgage Broker, Xeva Mortgage, #106, 2626 Croydon Drive, Surrey, BC",
  "BCFSA Brokerage Licence #X300203  |  Broker Licence #MB503619",
  "778.882.5674  |  joshua@resvickmortgages.com  |  resvickmortgages.com  |  General information, not advice on your file.",
]

def make_canvas(title):
    class C(rl_canvas.Canvas):
        """Two-pass page numbers: 'Page 1 of 2'."""
        def __init__(self, *a, **k): super().__init__(*a, **k); self._pages = []
        def showPage(self): self._pages.append(dict(self.__dict__)); self._startPage()
        def save(self):
            n = len(self._pages)
            for p in self._pages:
                self.__dict__.update(p)
                self.setFillColor(NAVY); self.rect(0, H - 14, W, 14, stroke=0, fill=1)
                self.setStrokeColor(RULE); self.setLineWidth(0.6); self.line(M, 66, W - M, 66)
                self.setFillColor(MUTED); self.setFont("Helvetica", 7.4)
                y = 51
                for ln in FOOT: self.drawString(M, y, ln); y -= 10
                self.drawString(M, 20, title + "  |  Figures checked " + CHECKED + ". Rules change, so confirm before you rely on them.")
                if n > 1: self.drawRightString(W - M, 20, "Page %d of %d" % (self._pageNumber, n))
                super().showPage()
            super().save()
    return C

def build(fname, title, subject, story, max_pages):
    path = os.path.join(OUTDIR, fname)
    doc = BaseDocTemplate(path, pagesize=letter, leftMargin=M, rightMargin=M, topMargin=40, bottomMargin=80,
                          title=title + " | Resvick Mortgages", author="Resvick Mortgages", subject=subject)
    doc.addPageTemplates([PageTemplate(id="p", frames=[Frame(M, 80, W - 2 * M, H - 120, id="f", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)])])
    doc.build(story, canvasmaker=make_canvas(title))
    from reportlab.lib.utils import open_and_read
    n = open_and_read(path).count(b"/Type /Page\n") or open_and_read(path).count(b"/Type /Page ")
    print("wrote", os.path.abspath(path))
    return path

AW = W - 2 * M
CTA = "Want a second pair of eyes? Book a free 15-minute call at resvickmortgages.com or call 778.882.5674. On most mortgages the lender pays the broker, so you pay nothing for the advice."

# ---------------------------------------------------------------- 1. First-time buyer game plan
fthb = [
  Paragraph("First-time buyer game plan", S["h1"]),
  Paragraph("Buying your first home in BC, in the order that saves you money. Each step has a box to tick. The figures come from the CRA and the Province of BC, checked " + CHECKED + ".", S["intro"]),
  h2("1. Now, before you start looking"),
  checks([
    "Open a First Home Savings Account (FHSA), even with a small deposit. Room is $8,000 a year, up to $40,000, and it only starts building the year you open the account.",
    "Check your RRSP. The Home Buyers' Plan lets each person use up to $60,000 for a first home, repaid over up to 15 years. You can use it together with the FHSA.",
    "Hold off on a new car loan or lease. Once your debts are the limit, each $100 a month of payment cuts an approval by roughly $15,000 to $17,000.",
    "Keep your down payment in one account and leave it there. Many lenders ask for about 90 days of statements.",
    "Pay down card balances and pay every bill on time. Lenders read your credit report and your monthly debt payments.",
  ]),
  h2("2. Know your two numbers"),
  Paragraph("Most buyers plan for the down payment and forget closing costs. You need both in cash on completion day.", S["body"]),
  Spacer(1, 4),
  fill(["Price range I'm looking at", "Minimum down payment", "Closing costs (see the closing costs worksheet)", "<b>Cash I need in total</b>", "Cash I have today (savings, FHSA, RRSP)", "<b>Gap to close</b>"]),
  Spacer(1, 4),
  Paragraph("Minimum down payment: 5% of the first $500,000 and 10% of the rest, for homes below $1,500,000. At $1,500,000 or more it's 20%. Less than 20% down means mortgage default insurance, and the premium is added to the mortgage, not paid in cash.", S["small"]),
  KeepTogether([h2("3. Check the four programs"),
  Paragraph("Each program has its own test for who counts as a first-time buyer. You can pass three and fail the fourth, so check each one.", S["body"]),
  Spacer(1, 4),
  table(["Program", "What it does", "Limit", "Me?"], [
    ["FHSA (CRA)", "Tax-deductible savings, tax-free withdrawal for a first home", "$8,000 a year, $40,000 lifetime", Box()],
    ["Home Buyers' Plan (CRA)", "Use your own RRSP savings, then repay over up to 15 years", "$60,000 per person", Box()],
    ["GST rebate on new homes (CRA)", "Returns the 5% GST on a new home from a builder", "Up to $50,000. Homes to $1,000,000, none at $1,500,000. Agreements signed March 20, 2025 or later", Box()],
    ["BC transfer tax exemption (Province)", "No transfer tax on the first $500,000 of value", "Up to $8,000. Homes to $835,000, ends at $860,000", Box()],
  ], [AW * 0.26, AW * 0.34, AW * 0.32, AW * 0.08]),
  Paragraph("Also worth knowing: since December 15, 2024, first-time buyers and buyers of new builds can choose a 30-year amortization on an insured mortgage. New builds also have their own BC transfer tax exemption: the full tax up to $1,100,000, ending at $1,150,000.", S["small"])]),
  h2("4. Get pre-approved"),
  checks([
    "Book a 15-minute call. Bring rough numbers: income, debts, savings and the price range you have in mind.",
    "Gather your documents. The free document checklist at resvickmortgages.com lists what lenders usually ask for.",
    "Get a real pre-approval. It checks your income, your credit and where your down payment came from, not just a rate.",
    "Ask how long the rate hold lasts, and put the end date in your calendar.",
  ]),
  h2("5. From offer to keys"),
  checks([
    "Write your offer subject to financing, with enough days for the lender to approve the file.",
    "Send your accepted offer to your broker the same day. The lender clock starts now.",
    "Remove subjects only when the approval is in writing and its conditions are met.",
    "Hire a lawyer or notary. They handle the transfer, register the mortgage and claim the transfer tax exemption.",
    "Until completion: no new credit, no job change, and no large money moves without asking first.",
  ]),
  box("A worked example: a $750,000 resale home, one eligible first-time buyer", [
    "Minimum down payment: $50,000 (5% of $500,000 plus 10% of $250,000).",
    "Transfer tax: $13,000, less the $8,000 exemption, so <b>$5,000 is still due</b>. The $835,000 line does not mean tax-free.",
    "Insurance premium at 4.00%: $28,000, added to the mortgage for a total of $728,000 (25-year amortization).",
  ]),
  box("Next step", [CTA]),
]

# ---------------------------------------------------------------- 2. Closing costs worksheet
cc = [
  Paragraph("Closing costs worksheet", S["h1"]),
  Paragraph("Your down payment is not the whole bill. Fill in each line with a quote or an estimate, then add it up. The transfer tax is set by rule, and the rest depends on the professionals you choose.", S["intro"]),
  fill(["Purchase price", "Down payment"], label_w=0.45),
  Spacer(1, 6),
  table(["Cost", "How it's set", "Your figure"], [
    ["BC property transfer tax", "1% on the first $200,000, 2% from $200,000 to $2,000,000, 3% above $2,000,000, plus 2% on the residential part above $3,000,000. Paid on completion.", ""],
    ["Less: first-time buyer exemption", "Up to $8,000 off for eligible buyers. Homes to $835,000, ends at $860,000.", ""],
    ["Less: newly built home exemption", "Full tax removed up to $1,100,000, ending at $1,150,000. You don't need to be a first-time buyer.", ""],
    ["Lawyer or notary", "Get a quote. It depends on the professional and the deal.", ""],
    ["Home inspection", "Get a quote.", ""],
    ["Appraisal", "Get a quote. Some lenders cover it.", ""],
    ["Title insurance", "Usually arranged by your lawyer or notary.", ""],
    ["Property tax and strata adjustments", "Shared with the seller based on the completion date.", ""],
    ["GST (new homes only)", "5% of the price. A first-time buyer rebate may return up to $50,000.", ""],
    ["Moving and setup", "Movers, utility hookups, basic furniture.", ""],
    ["<b>Total closing costs</b>", "", ""],
  ], [AW * 0.27, AW * 0.53, AW * 0.20], blank_col=2),
  Spacer(1, 8),
  fill(["<b>Cash needed: down payment plus closing costs</b>", "Cash available", "<b>Gap to close</b>"], label_w=0.55),
  Spacer(1, 6),
  h2("Transfer tax at a glance"),
  table(["Purchase", "Minimum down", "Transfer tax", "Cash before other costs"], [
    ["$500,000, first-time buyer", "$25,000", "$0", "$25,000"],
    ["$750,000, first-time buyer", "$50,000", "$5,000", "$55,000"],
    ["$750,000, not a first-time buyer", "$50,000", "$13,000", "$63,000"],
    ["$900,000, first-time buyer", "$65,000", "$16,000", "$81,000"],
    ["$1,000,000, newly built", "$75,000", "$0", "$75,000, plus GST unless rebated"],
    ["$1,000,000, resale", "$75,000", "$18,000", "$93,000"],
  ], [AW * 0.32, AW * 0.18, AW * 0.18, AW * 0.32]),
  Paragraph("The exemptions have residency and ownership tests. Your lawyer or notary confirms them and claims them when the transfer is registered. " + CTA, S["small"]),
]

# ---------------------------------------------------------------- 3. Renewal checklist
QS = [
  ("When does the new rate and term start?", "Today, or on your maturity date? If today, ask about any fee or blended rate, in writing."),
  ("What would I pay if I waited until the term ends?", "At maturity you can renew, switch or pay off with no prepayment charge."),
  ("What would another lender offer?", "Proof of a competing offer helps you negotiate. A broker can ask several lenders at once."),
  ("What would switching cost?", "Discharge or transfer fees, appraisal, legal. Ask who pays. A collateral charge can cost more to move."),
  ("How is the penalty on the new mortgage worked out?", "Variable: often three months' interest. Fixed: often the greater of that and the interest rate differential."),
  ("Can I take this mortgage with me?", "If you might move, ask whether it is portable and what the rules are."),
  ("Does the offer change anything else?", "Term, amortization, prepayment privileges, and whether it is a blend-and-extend."),
]
ren = [
  Paragraph("Mortgage renewal checklist", S["h1"]),
  Paragraph("Your renewal is the one time you can leave your lender without a penalty. Fill in your dates, then ask these seven questions before you sign anything.", S["intro"]),
  fill(["Current lender and rate", "Balance and years left on the amortization", "<b>Maturity date</b>", "Start comparing (about 120 days before maturity)", "Renewal statement due (at least 21 days before)"], label_w=0.5),
  Spacer(1, 4),
  h2("The seven questions to ask"),
]
for i, (q, n) in enumerate(QS, 1):
    t = Table([[Box(), [Paragraph("<b>%d. %s</b>" % (i, q), S["body"]), Paragraph(n, S["small"])], ""]], colWidths=[18, AW * 0.58, AW - 18 - AW * 0.58])
    t.setStyle(TableStyle([("VALIGN", (0, 0), (1, 0), "TOP"), ("LINEBELOW", (2, 0), (2, 0), 0.7, INK), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                           ("RIGHTPADDING", (1, 0), (1, 0), 10), ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
    ren.append(t)
ren += [
  box("If you might sell in the next year or two", [
    "<b>Likely to sell soon:</b> compare a shorter term, a variable rate with a lower penalty, and a portable option.",
    "<b>Unsure:</b> get a penalty example on your balance in writing and weigh it against the rate you'd save.",
    "<b>Planning to stay:</b> a longer term at a competitive rate may suit you, and the penalty matters less.",
  ]),
  box("Before you sign", ["Get the offer in writing, with the start date and the penalty method. Compare it with at least one other lender. " + CTA]),
  Paragraph("Renewal statement and switching points: Financial Consumer Agency of Canada, checked " + CHECKED + ". Your own contract and your lender's written figures are the final word.", S["small"]),
]

# ---------------------------------------------------------------- 4. Down payment sources
dp = [
  Paragraph("Down payment sources sheet", S["h1"]),
  Paragraph("Lenders accept more sources than most buyers expect. What they care about is proof of where the money came from. Find each of your sources below, then list where your money sits today.", S["intro"]),
  table(["Source", "Proof lenders usually want", "Watch out for"], [
    ["Your own savings", "Recent statements for the account. Many lenders ask for about 90 days.", "Large deposits with no clear source. Keep the paperwork."],
    ["FHSA", "Account statements and withdrawal records.", "The first-time buyer test and timing rules. $8,000 a year, $40,000 lifetime."],
    ["RRSP Home Buyers' Plan", "RRSP statements and the withdrawal paperwork.", "Up to $60,000 per person, repaid over up to 15 years. A missed repayment is added to your income."],
    ["Gift from family", "A signed gift letter saying it is not repaid, plus bank records showing the transfer.", "A loan is not a gift. Lenders treat it very differently."],
    ["Sale of your home", "The sale contract, then the lawyer's statement of proceeds.", "Timing. Buying before you sell may need bridge financing."],
    ["TFSA or investments", "Statements showing the holdings, then the proceeds landing in your bank.", "Moving money through several accounts. Each hop must be easy to follow."],
    ["Inheritance or settlement", "A letter from the lawyer or estate, plus the deposit record.", "Funds that arrive as cash or in odd amounts."],
    ["Borrowed money", "Depends on the lender. Ask first.", "A loan adds a payment that lowers your approval. Many lenders limit it."],
  ], [AW * 0.22, AW * 0.41, AW * 0.37]),
  Spacer(1, 4),
  h2("Where my down payment sits today"),
  table(["Account or source", "Amount", "Where it came from", "Proof ready?"], [["", "", "", Box()] for _ in range(4)] + [["<b>Total</b>", "", "", ""]],
        [AW * 0.30, AW * 0.17, AW * 0.38, AW * 0.15], blank_col=None, row_h=20),
  h2("Five habits that make the file easy"),
  checks([
    "Know your number: add closing costs to the down payment.",
    "Move money once, then leave it alone.",
    "Save every record: statements, gift letters, withdrawal slips.",
    "Explain big deposits early. A short note now beats a scramble later.",
    "Ask your broker for the lender's document list before you apply.",
  ]),
  Spacer(1, 4),
  Paragraph(CTA + " I'm a mortgage broker, not a tax adviser. Confirm FHSA and RRSP room with the CRA.", S["small"]),
]

if __name__ == "__main__":
    os.makedirs(OUTDIR, exist_ok=True)
    build("resvick-first-time-buyer-game-plan.pdf", "First-time buyer game plan", "Buying a first home in BC, step by step, with the four programs and the cash you need", fthb, 2)
    build("resvick-closing-costs-worksheet.pdf", "Closing costs worksheet", "A fill-in worksheet for BC closing costs, with the property transfer tax rules", cc, 1)
    build("resvick-mortgage-renewal-checklist.pdf", "Mortgage renewal checklist", "Seven questions to ask before you renew a mortgage in BC, with your key dates", ren, 1)
    build("resvick-down-payment-sources.pdf", "Down payment sources sheet", "Each down payment source BC lenders accept, the proof each needs, and a fill-in tracker", dp, 1)
