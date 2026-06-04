#!/usr/bin/env python3
"""
Generate the CodeStrux wordmark+skull as a crisp inline SVG from the existing
Unicode block-element ASCII art that lives in index.markdown.

Why: block-element art rendered as live text cannot tile sub-pixel-perfectly
across engines/DPRs (WebKit vs Gecko round the half/quadrant seams differently),
so it looked wrong on real iOS Safari. An SVG of the same pixel grid renders
byte-identically everywhere.

The art is the single source of truth: we parse the <pre class="ascii-logo">…</pre>
block out of index.markdown, map each block glyph to filled sub-cells on a 10-unit
grid, run-length-merge horizontally, and emit _includes/codestrux-wordmark.html.

Run:  python3 tools/ascii_to_svg.py
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "index.markdown"
OUT = ROOT / "_includes" / "codestrux-wordmark.html"

CELL = 10
HALF = 5

# Each block glyph -> the set of quadrants it fills (UL, UR, LL, LR).
# Full block and the two half blocks are special-cased to single rects.
QUADRANTS = {
    0x2588: {"UL", "UR", "LL", "LR"},  # █ full block
    0x2580: {"UL", "UR"},              # ▀ upper half
    0x2584: {"LL", "LR"},              # ▄ lower half
    0x2599: {"UL", "LL", "LR"},        # ▙ all but UR
    0x259F: {"UR", "LL", "LR"},        # ▟ all but UL
    0x259C: {"UL", "UR", "LR"},        # ▜ all but LL
    0x259B: {"UL", "UR", "LL"},        # ▛ all but LR
}
QPOS = {"UL": (0, 0), "UR": (HALF, 0), "LL": (0, HALF), "LR": (HALF, HALF)}


def extract_art(text: str) -> list[str]:
    m = re.search(r'<pre class="ascii-logo"[^>]*>(.*?)</pre>', text, re.DOTALL)
    if not m:
        raise SystemExit("Could not find <pre class=\"ascii-logo\"> in index.markdown")
    return m.group(1).split("\n")


def glyph_rects(cp: int, x: int, y: int) -> list[tuple[int, int, int, int]]:
    quad = QUADRANTS[cp]
    if quad == {"UL", "UR", "LL", "LR"}:
        return [(x, y, CELL, CELL)]
    if quad == {"UL", "UR"}:
        return [(x, y, CELL, HALF)]
    if quad == {"LL", "LR"}:
        return [(x, y + HALF, CELL, HALF)]
    return [(x + QPOS[q][0], y + QPOS[q][1], HALF, HALF) for q in sorted(quad)]


def merge_runs(rects: list[tuple[int, int, int, int]]) -> list[tuple[int, int, int, int]]:
    """Merge horizontally-contiguous rects that share the same y and height."""
    by_band: dict[tuple[int, int], list[tuple[int, int]]] = {}
    for x, y, w, h in rects:
        by_band.setdefault((y, h), []).append((x, w))
    out: list[tuple[int, int, int, int]] = []
    for (y, h), spans in sorted(by_band.items()):
        spans.sort()
        cx, cw = spans[0]
        for x, w in spans[1:]:
            if x <= cx + cw:           # contiguous or overlapping
                cw = max(cx + cw, x + w) - cx
            else:
                out.append((cx, y, cw, h)); cx, cw = x, w
        out.append((cx, y, cw, h))
    return out


def main() -> None:
    lines = extract_art(SRC.read_text(encoding="utf-8"))
    max_cols = max(len(l) for l in lines)
    rects: list[tuple[int, int, int, int]] = []
    unknown: set[str] = set()
    for r, line in enumerate(lines):
        for c, ch in enumerate(line):
            if ch == " " or ord(ch) == 0:
                continue
            if ord(ch) not in QUADRANTS:
                unknown.add(f"{ch!r} U+{ord(ch):04X}")
                continue
            rects += glyph_rects(ord(ch), c * CELL, r * CELL)
    if unknown:
        raise SystemExit(f"Unmapped glyph(s) in art: {sorted(unknown)}")

    merged = merge_runs(rects)
    vb_w, vb_h = max_cols * CELL, len(lines) * CELL
    body = "\n".join(
        f'  <rect x="{x}" y="{y}" width="{w}" height="{h}"/>' for x, y, w, h in merged
    )
    svg = (
        f'<svg class="ascii-logo" viewBox="0 0 {vb_w} {vb_h}" fill="currentColor"\n'
        f'     shape-rendering="crispEdges" role="img" aria-hidden="true"\n'
        f'     focusable="false" xmlns="http://www.w3.org/2000/svg">\n'
        f"{body}\n"
        f"</svg>\n"
    )
    OUT.write_text(svg, encoding="utf-8")
    print(f"rows={len(lines)} cols={max_cols} cells_filled={len(rects)} "
          f"rects_after_merge={len(merged)} bytes={len(svg)}")
    print(f"wrote {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
