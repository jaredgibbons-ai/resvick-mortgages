#!/usr/bin/env python3
"""Builds src/assets/downloads/resvick-mortgage-document-checklist.pdf (the free checklist lead magnet).
Run: python3 tools/make-checklist-pdf.py   (needs reportlab). Plain, printable, black on white with navy rules. No rates, no hype."""
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit

NAVY = HexColor("#253551"); INK = HexColor("#2A2829"); MUTED = HexColor("#55534F"); RULE = HexColor("#CFCFC8")
W, H = letter
M = 54
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "assets", "downloads", "resvick-mortgage-document-checklist.pdf")
os.makedirs(os.path.dirname(OUT), exist_ok=True)

SECTIONS = [
  ("For every file", [
    "Government photo ID for each person on the mortgage",
    "Addresses for the last two years, with dates",
    "A list of every debt: cards, car loans and leases, lines of credit, student loans, support payments. Include the balance and the monthly payment",
    "A purchase: the signed offer or the MLS listing. A renewal: your latest mortgage statement and renewal letter",
    "The latest property tax bill, if you already own the home",
  ]),
  ("If you are paid a salary or hourly wage", [
    "A recent pay stub",
    "A letter from your employer: position, pay, hours, start date and whether you are permanent",
    "Your last two years of tax slips or CRA Notices of Assessment",
    "For bonus, overtime or commission: two years of history showing what you were paid",
  ]),
  ("If you are self-employed", [
    "Two years of personal tax returns with the Notices of Assessment",
    "Business financial statements, or your sole proprietor business income pages",
    "Incorporation papers or your business licence",
    "Proof that you owe the CRA nothing, or a payment plan if you do",
  ]),
  ("Your down payment", [
    "About 90 days of statements for the account it sits in",
    "A gift: a signed gift letter and proof that the money moved",
    "A sale of another home: the signed contract of sale",
    "RRSP, FHSA or other registered account statements, if you will use them",
  ]),
  ("If you own a rental or are buying one", [
    "Current leases for each rental unit",
    "Property tax bill and strata fees for each property",
    "Mortgage statements for each property you own",
  ]),
  ("If you are buying a condo or townhouse", [
    "Strata bylaws, minutes and financial statements from the seller's agent",
    "The Form B Information Certificate and any depreciation report",
    "A note of any special levy, planned or approved",
  ]),
  ("If you are new to Canada", [
    "Passport and proof of status, such as a work permit or PR card",
    "An employment letter, and pay slips if you have them",
    "Statements that show how the down payment came into Canada",
    "Any credit record you have, Canadian or from another country",
  ]),
]

c = canvas.Canvas(OUT, pagesize=letter)
c.setTitle("Mortgage document checklist | Resvick Mortgages")
c.setAuthor("Resvick Mortgages")
c.setSubject("A printable checklist of the documents a BC mortgage file usually needs")

def footer(page):
    c.setStrokeColor(RULE); c.setLineWidth(0.6); c.line(M, 66, W - M, 66)
    c.setFillColor(MUTED); c.setFont("Helvetica", 7.4)
    lines = [
        "Resvick Mortgages, Joshua Resvick, Mortgage Broker, Xeva Mortgage, #106, 2626 Croydon Drive, Surrey, BC",
        "BCFSA Brokerage Licence #X300203  |  Broker Licence #MB503619",
        "778.882.5674  |  joshua@resvickmortgages.com  |  resvickmortgages.com  |  General information, not advice on your file. Lists vary by lender.",
    ]
    y = 51
    for ln in lines:
        c.drawString(M, y, ln); y -= 10
    c.drawRightString(W - M, 20, "Page %d of 2" % page)

def header(page):
    c.setFillColor(NAVY); c.rect(0, H - 14, W, 14, stroke=0, fill=1)
    if page == 1:
        c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 24); c.drawString(M, H - 62, "Mortgage document checklist")
        c.setFillColor(INK); c.setFont("Helvetica", 10.5)
        intro = simpleSplit("Gather what applies to you before you apply, make an offer or renew. Lenders differ, so Joshua will confirm what your file needs. Tick each box as you go.", "Helvetica", 10.5, W - 2 * M)
        y = H - 82
        for ln in intro:
            c.drawString(M, y, ln); y -= 14
        return y - 8
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 14); c.drawString(M, H - 46, "Mortgage document checklist, continued")
    return H - 70

def section(y, title, items):
    need = 26 + sum(len(simpleSplit(t, "Helvetica", 10.2, W - 2 * M - 26)) * 13 + 5 for t in items)
    if y - need < 80:
        return None
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 12); c.drawString(M, y, title)
    c.setStrokeColor(NAVY); c.setLineWidth(1); c.line(M, y - 4, W - M, y - 4)
    y -= 22
    for t in items:
        lines = simpleSplit(t, "Helvetica", 10.2, W - 2 * M - 26)
        c.setStrokeColor(INK); c.setLineWidth(0.9); c.rect(M, y - 8, 9, 9, stroke=1, fill=0)
        c.setFillColor(INK); c.setFont("Helvetica", 10.2)
        for i, ln in enumerate(lines):
            c.drawString(M + 20, y - 7 - i * 13 + 1, ln)
        y -= len(lines) * 13 + 5
    return y - 10

page = 1
y = header(page)
for title, items in SECTIONS:
    ny = section(y, title, items)
    if ny is None:
        footer(page); c.showPage(); page += 1; y = header(page)
        ny = section(y, title, items)
    y = ny

# closing note on the last page
box = [
    "Please do not email these documents. Joshua sends a secure upload link for anything sensitive.",
    "Between approval and closing, do not open new credit, change jobs or move large sums without talking to him first.",
    "Want a second pair of eyes on your file? Book a free 15-minute call at cal.com/resvickmortgages/mortgage-advice or call 778.882.5674.",
]
need = 24 + sum(len(simpleSplit(t, "Helvetica", 10.2, W - 2 * M - 24)) * 13 + 4 for t in box)
if y - need < 80:
    footer(page); c.showPage(); page += 1; y = header(page)
c.setFillColor(HexColor("#EEF0F4")); c.setStrokeColor(NAVY); c.setLineWidth(0.8)
c.roundRect(M, y - need + 8, W - 2 * M, need, 6, stroke=1, fill=1)
yy = y - 12
c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 11); c.drawString(M + 12, yy, "Before you send anything"); yy -= 16
c.setFillColor(INK); c.setFont("Helvetica", 10.2)
for t in box:
    for ln in simpleSplit(t, "Helvetica", 10.2, W - 2 * M - 24):
        c.drawString(M + 12, yy, ln); yy -= 13
    yy -= 4
footer(page)
if page == 1:
    raise SystemExit("expected 2 pages, got 1 (footer text says 'of 2')")
c.save()
print("wrote", os.path.abspath(OUT), "pages:", page)
