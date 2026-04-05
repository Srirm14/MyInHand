"use client";

import {
  clusterTextItemsIntoLines,
  linesToPlainText,
  rawItemsToPdfTextItems,
} from "@/lib/salary/pdf/extract-pdf-text-structure";
import { mapPdfLinesToSalaryFields } from "@/lib/salary/pdf/map-text-to-salary-fields";
import { ensurePdfJsWorker } from "@/lib/salary/pdf/pdfjs-browser";
import type {
  CompensationPdfParseResult,
  PdfTextItem,
} from "@/lib/salary/pdf/salary-pdf-parse.types";
import { SalaryPdfParseError } from "@/lib/salary/pdf/salary-pdf-parse.types";
import {
  assertPdfMagicBytes,
  isPasswordPdfError,
} from "@/lib/salary/pdf/validate-pdf-upload";

async function loadPdf() {
  await ensurePdfJsWorker();
  return import("pdfjs-dist");
}

function textItemsFromContent(
  content: { items: unknown[] },
  pageNumber: number
): PdfTextItem[] {
  const raw: { str: string; transform: number[]; width: number; height: number }[] =
    [];
  for (const it of content.items) {
    if (typeof it !== "object" || it === null || !("str" in it)) continue;
    const rawStr = (it as { str: unknown }).str;
    if (typeof rawStr !== "string") continue;
    const str = rawStr;
    const transform = (it as { transform?: unknown }).transform;
    if (!Array.isArray(transform) || transform.length < 6) continue;
    const width = Number((it as { width?: unknown }).width);
    const height = Number((it as { height?: unknown }).height);
    raw.push({
      str,
      transform: transform as number[],
      width: Number.isFinite(width) ? width : 0,
      height: Number.isFinite(height) ? height : 0,
    });
  }
  return rawItemsToPdfTextItems(raw, pageNumber);
}

/**
 * Parse a compensation / salary PDF in the browser using PDF.js text extraction,
 * preserving line structure for label/value heuristics.
 */
export async function parseCompensationPdf(
  buffer: ArrayBuffer,
  fileName: string
): Promise<CompensationPdfParseResult> {
  assertPdfMagicBytes(buffer);

  let pdf: Awaited<ReturnType<typeof loadPdf>>;
  try {
    pdf = await loadPdf();
  } catch {
    throw new SalaryPdfParseError(
      "PDF engine failed to load in this browser.",
      "unsupported"
    );
  }

  let doc;
  try {
    doc = await pdf.getDocument({
      data: new Uint8Array(buffer),
      disableFontFace: true,
      isEvalSupported: false,
    }).promise;
  } catch (err) {
    if (isPasswordPdfError(err)) {
      throw new SalaryPdfParseError(
        "This PDF is password-protected. Unlock it and try again.",
        "password_required"
      );
    }
    throw new SalaryPdfParseError(
      "This PDF could not be opened — it may be damaged.",
      "corrupt"
    );
  }

  const numPages = doc.numPages;
  if (numPages < 1) {
    throw new SalaryPdfParseError("This PDF has no pages.", "empty");
  }

  const warnings: string[] = [];
  const pages: CompensationPdfParseResult["pages"] = [];
  const allLines: ReturnType<typeof clusterTextItemsIntoLines> = [];

  const maxPages = Math.min(numPages, 40);
  if (numPages > maxPages) {
    warnings.push(
      `Only the first ${maxPages} pages were scanned — very long PDFs may miss data on later pages.`
    );
  }

  for (let p = 1; p <= maxPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const items = textItemsFromContent(content, p);
    const lines = clusterTextItemsIntoLines(items);
    pages.push({
      pageNumber: p,
      lines,
      plainText: linesToPlainText(lines),
    });
    allLines.push(...lines);
  }

  const fields = mapPdfLinesToSalaryFields(allLines);

  if (fields.length === 0 && allLines.every((l) => l.text.trim().length === 0)) {
    warnings.push(
      "No selectable text was found — scanned image PDFs need OCR outside the app."
    );
  } else if (fields.length === 0) {
    warnings.push(
      "We could not confidently match salary labels — you can still enter values manually below."
    );
  }

  return { fileName, pages, fields, warnings };
}
