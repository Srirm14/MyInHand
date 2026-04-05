"use client";

/**
 * Browser-only PDF.js bootstrap. Keeps worker URL aligned with the installed pdfjs-dist version.
 */
let workerConfigured = false;

export async function ensurePdfJsWorker(): Promise<void> {
  if (typeof window === "undefined") return;
  if (workerConfigured) return;
  const pdfjs = await import("pdfjs-dist");
  const version = pdfjs.version ?? "4.10.38";
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;
  workerConfigured = true;
}
