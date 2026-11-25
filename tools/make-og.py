#!/usr/bin/env python3
"""Share images (og:image) for city pages and the cities hub, drawn on the default card's empty navy panel.

Usage: node -e 'import("./src/lib/nearby.mjs").then(m=>console.log(JSON.stringify(m.CITY_NAME)))' > /tmp/cities.json
       python3 tools/make-og.py /tmp/cities.json /path/to/fonts
Fonts: Plus Jakarta Sans 500 and 800 as TTF (pjs-500.ttf, pjs-800.ttf). Convert the @fontsource woff2 files with fontTools.
Writes src/assets/img/og/<city-key>.jpg and src/assets/img/og/cities.jpg (1200x630).
"""
import json, os, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = os.path.join(ROOT, "src/assets/img/og-default.jpg")
OUT = os.path.join(ROOT, "src/assets/img/og")
PANEL_X, PANEL_W = 72, 640          # text column inside the navy panel (panel is ~780px wide)
WHITE, SOFT, MARKER = (245, 246, 248), (201, 208, 219), (240, 210, 75)


def fit(draw, text, font_path, start, minimum, width):
    """Largest size (down to minimum) at which every line fits the column."""
    size = start
    while size > minimum:
        f = ImageFont.truetype(font_path, size)
        if all(draw.textlength(line, font=f) <= width for line in text):
            return f
        size -= 4
    return ImageFont.truetype(font_path, minimum)


def wrap(name, draw, font_path):
    """One line if it fits at a good size, else split on ' and ' or the last space."""
    one = fit(draw, [name], font_path, 112, 84, PANEL_W)
    if draw.textlength(name, font=one) <= PANEL_W and one.size >= 84:
        return [name], one
    if " and " in name:
        a, b = name.split(" and ", 1)
        lines = [a + " and", b]
    else:
        i = name.rfind(" ")
        lines = [name[:i], name[i + 1:]]
    return lines, fit(draw, lines, font_path, 104, 60, PANEL_W)


def card(kicker, name, foot, fonts, out):
    img = Image.open(BASE).convert("RGB")
    d = ImageDraw.Draw(img)
    reg, bold = os.path.join(fonts, "pjs-500.ttf"), os.path.join(fonts, "pjs-800.ttf")
    k = ImageFont.truetype(reg, 34)
    lines, big = wrap(name, d, bold)
    line_h = int(big.size * 1.08)
    block = 34 + 28 + line_h * len(lines) + 34 + 40   # kicker, gap, name lines, gap, rule
    y = (630 - block - 70) // 2 + 10
    d.text((PANEL_X, y), kicker, font=k, fill=SOFT)
    y += 34 + 28
    for line in lines:
        d.text((PANEL_X, y), line, font=big, fill=WHITE)
        y += line_h
    y += 30
    d.rectangle([PANEL_X, y, PANEL_X + 96, y + 8], fill=MARKER)
    f = ImageFont.truetype(reg, 28)
    d.text((PANEL_X, 630 - 72), foot, font=f, fill=SOFT)
    img.save(out, "JPEG", quality=84, optimize=True, progressive=True)


def main():
    cities = json.load(open(sys.argv[1]))
    fonts = sys.argv[2]
    os.makedirs(OUT, exist_ok=True)
    foot = "Joshua Resvick  ·  Xeva Mortgage"
    for key, name in cities.items():
        card("Mortgage broker serving", name, foot, fonts, os.path.join(OUT, key + ".jpg"))
    # Hubs: the cities hub and region hubs that are not in CITY_NAME.
    extra = {"cities": "Cities and towns across BC", "vancouver-island": "Vancouver Island"}
    for key, name in extra.items():
        card("Mortgage broker serving", name, foot, fonts, os.path.join(OUT, key + ".jpg"))
    print(f"wrote {len(cities) + len(extra)} images to {OUT}")


if __name__ == "__main__":
    main()
