import type { PdfTextItem, PdfTextLine } from "@/lib/salary/pdf/salary-pdf-parse.types";

type RawTextItem = {
  str: string;
  transform: number[];
  width: number;
  height: number;
  hasEOL?: boolean;
};

function itemY(transform: number[]): number {
  return transform[5] ?? 0;
}

function itemX(transform: number[]): number {
  return transform[4] ?? 0;
}

/**
 * Cluster PDF.js text items into left-to-right lines using vertical proximity.
 * Exported for unit tests with synthetic items.
 */
export function clusterTextItemsIntoLines(
  items: PdfTextItem[],
  lineSlackRatio = 0.55
): PdfTextLine[] {
  if (items.length === 0) return [];

  const heights = items.map((i) => i.height).filter((h) => h > 0);
  const medianH =
    heights.length > 0
      ? [...heights].sort((a, b) => a - b)[Math.floor(heights.length / 2)]!
      : 10;
  const slack = Math.max(2, medianH * lineSlackRatio);

  const sorted = [...items].sort((a, b) => {
    const dy = b.y - a.y;
    if (Math.abs(dy) > slack) return dy;
    return a.x - b.x;
  });

  const lines: PdfTextLine[] = [];
  for (const it of sorted) {
    const last = lines[lines.length - 1];
    if (!last || Math.abs(it.y - last.y) > slack) {
      lines.push({
        pageNumber: it.pageNumber,
        y: it.y,
        xMin: it.x,
        xMax: it.x + it.width,
        text: it.str,
        items: [it],
      });
    } else {
      last.items.push(it);
      last.xMin = Math.min(last.xMin, it.x);
      last.xMax = Math.max(last.xMax, it.x + it.width);
      last.y = (last.y + it.y) / 2;
      last.text = buildLineText(last.items);
    }
  }

  for (const line of lines) {
    line.items.sort((a, b) => a.x - b.x);
    line.text = buildLineText(line.items);
  }

  return lines;
}

function buildLineText(items: PdfTextItem[]): string {
  if (items.length === 0) return "";
  let out = items[0]!.str;
  for (let i = 1; i < items.length; i++) {
    const prev = items[i - 1]!;
    const cur = items[i]!;
    const gap = cur.x - (prev.x + prev.width);
    const spacer = gap > prev.height * 0.35 ? " " : "";
    out += spacer + cur.str;
  }
  return out.replace(/\s+/g, " ").trim();
}

export function rawItemsToPdfTextItems(
  raw: RawTextItem[],
  pageNumber: number
): PdfTextItem[] {
  const out: PdfTextItem[] = [];
  for (const r of raw) {
    const str = (r.str ?? "").replace(/\u00a0/g, " ");
    if (!str.trim()) continue;
    out.push({
      str,
      x: itemX(r.transform),
      y: itemY(r.transform),
      width: r.width,
      height: r.height,
      pageNumber,
    });
  }
  return out;
}

export function linesToPlainText(lines: PdfTextLine[]): string {
  return lines.map((l) => l.text).join("\n");
}
