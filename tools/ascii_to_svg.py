#!/usr/bin/env python3
"""Generate the CodeStrux wordmark+skull as a crisp inline SVG.

Source of truth: tools/wordmark.txt (the original Unicode block-element art).
The wordmark (columns left of SPLIT) renders on square cells; the skull (right
of SPLIT) renders on slimmer, taller cells so it reads as a more elongated
emblem. Every rect coordinate is an integer, so shape-rendering="crispEdges"
stays seam-free across engines/DPRs (which is the whole point of using an SVG
instead of live block-text). Output: _includes/codestrux-wordmark.html

Run: python3 tools/ascii_to_svg.py
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
ART_FILE = ROOT / "tools" / "wordmark.txt"
OUT = ROOT / "_includes" / "codestrux-wordmark.html"

SPLIT = 37             # column separating the wordmark (left) from the skull (right)
WM_W, WM_H = 20, 20    # wordmark cell size (square)
SK_W, SK_H = 18, 24    # skull cell size — slimmer (-10%) + taller (+20%) than square
GAP = 56               # gap between wordmark and skull, in viewBox units

# block glyph -> the quadrants it fills (UL, UR, LL, LR)
QUADRANTS = {
    0x2588: {"UL", "UR", "LL", "LR"},  # █ full
    0x2580: {"UL", "UR"},              # ▀ upper half
    0x2584: {"LL", "LR"},              # ▄ lower half
    0x2599: {"UL", "LL", "LR"},        # ▙ all but UR
    0x259F: {"UR", "LL", "LR"},        # ▟ all but UL
    0x259C: {"UL", "UR", "LR"},        # ▜ all but LL
    0x259B: {"UL", "UR", "LL"},        # ▛ all but LR
}


def merge_runs(rects):
    """Merge horizontally-contiguous rects sharing the same y and height."""
    bands = {}
    for x, y, w, h in rects:
        bands.setdefault((y, h), []).append((x, w))
    out = []
    for (y, h), spans in sorted(bands.items()):
        spans.sort()
        cx, cw = spans[0]
        for x, w in spans[1:]:
            if x <= cx + cw:
                cw = max(cx + cw, x + w) - cx
            else:
                out.append((cx, y, cw, h)); cx, cw = x, w
        out.append((cx, y, cw, h))
    return out


def render(lines, cw, ch):
    """Rects for a block-art grid at the given cell size (cw, ch must be even)."""
    hw, hh = cw // 2, ch // 2
    qpos = {"UL": (0, 0), "UR": (hw, 0), "LL": (0, hh), "LR": (hw, hh)}
    rects, unknown = [], set()
    for r, line in enumerate(lines):
        for c, char in enumerate(line):
            if char == " " or ord(char) == 0:
                continue
            cp = ord(char)
            if cp not in QUADRANTS:
                unknown.add(f"{char!r} U+{cp:04X}"); continue
            quad = QUADRANTS[cp]
            x, y = c * cw, r * ch
            if quad == {"UL", "UR", "LL", "LR"}:
                rects.append((x, y, cw, ch))
            elif quad == {"UL", "UR"}:
                rects.append((x, y, cw, hh))
            elif quad == {"LL", "LR"}:
                rects.append((x, y + hh, cw, hh))
            else:
                for q in sorted(quad):
                    qx, qy = qpos[q]
                    rects.append((x + qx, y + qy, hw, hh))
    if unknown:
        raise SystemExit(f"Unmapped glyph(s): {sorted(unknown)}")
    return merge_runs(rects)


def trim_left(lines):
    width = max(len(l) for l in lines)
    lines = [l.ljust(width) for l in lines]
    while lines[0] and all(l[0] == " " for l in lines):
        lines = [l[1:] for l in lines]
    return lines


def bbox(rects):
    return (min(x for x, _, _, _ in rects), min(y for _, y, _, _ in rects),
            max(x + w for x, _, w, _ in rects), max(y + h for _, y, _, h in rects))


def main():
    art = ART_FILE.read_text(encoding="utf-8").split("\n")
    while art and art[-1] == "":
        art.pop()

    wm = render([l[:SPLIT] for l in art], WM_W, WM_H)
    sk = render(trim_left([l[SPLIT:] for l in art]), SK_W, SK_H)

    wx0, wy0, wx1, wy1 = bbox(wm)
    sx0, sy0, sx1, sy1 = bbox(sk)
    tx = round((wx1 + GAP) - sx0)                       # skull sits after wordmark + gap
    ty = round((wy0 + wy1) / 2 - (sy0 + sy1) / 2)       # vertically centered on wordmark
    sk = [(x + tx, y + ty, w, h) for x, y, w, h in sk]

    rects = wm + sk
    bx0, by0, bx1, by1 = bbox(rects)
    rects = [(x - bx0, y - by0, w, h) for x, y, w, h in rects]
    for rect in rects:
        assert all(isinstance(v, int) for v in rect), rect
    W, H = bx1 - bx0, by1 - by0

    body = "\n".join(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}"/>' for x, y, w, h in rects)
    svg = (f'<svg class="ascii-logo" viewBox="0 0 {W} {H}" fill="currentColor"\n'
           f'     shape-rendering="crispEdges" role="img" aria-hidden="true"\n'
           f'     focusable="false" xmlns="http://www.w3.org/2000/svg">\n{body}\n</svg>\n')
    OUT.write_text(svg, encoding="utf-8")
    print(f"wordmark={WM_W}x{WM_H} skull={SK_W}x{SK_H} gap={GAP}")
    print(f"wordmark bbox=({wx0},{wy0},{wx1},{wy1})  skull→translate=({tx},{ty})")
    print(f"viewBox=0 0 {W} {H}  aspect={W/H:.2f}  rects={len(rects)}  bytes={len(svg)}")
    print(f"wrote {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
