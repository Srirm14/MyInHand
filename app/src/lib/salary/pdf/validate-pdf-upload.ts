import { SalaryPdfParseError } from "@/lib/salary/pdf/salary-pdf-parse.types";

/** ~10 MiB — enough for multi-page comp PDFs without stressing mobile browsers */
export const MAX_SALARY_PDF_BYTES = 10 * 1024 * 1024;

const PDF_MAGIC = new Uint8Array([0x25, 0x50, 0x44, 0x46]); // %PDF

function hasPdfMagic(buffer: ArrayBuffer): boolean {
  const head = new Uint8Array(buffer, 0, Math.min(4, buffer.byteLength));
  if (head.length < 4) return false;
  return head.every((b, i) => b === PDF_MAGIC[i]);
}

export function assertValidSalaryPdfFile(file: File): void {
  if (!file || file.size === 0) {
    throw new SalaryPdfParseError("This file is empty.", "empty");
  }
  if (file.size > MAX_SALARY_PDF_BYTES) {
    throw new SalaryPdfParseError(
      `PDF is too large (max ${Math.round(MAX_SALARY_PDF_BYTES / (1024 * 1024))} MB).`,
      "too_large"
    );
  }
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  if (
    type !== "application/pdf" &&
    !name.endsWith(".pdf")
  ) {
    throw new SalaryPdfParseError(
      "Structured extraction supports PDF only. Use manual entry for images.",
      "not_pdf"
    );
  }
}

/** Call after reading bytes — cheap corrupt check before pdf.js */
export function assertPdfMagicBytes(buffer: ArrayBuffer): void {
  if (buffer.byteLength < 5) {
    throw new SalaryPdfParseError(
      "This PDF looks damaged or incomplete.",
      "corrupt"
    );
  }
  if (!hasPdfMagic(buffer)) {
    throw new SalaryPdfParseError(
      "This file is not a valid PDF.",
      "corrupt"
    );
  }
}

export function isPasswordPdfError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const name = "name" in err && typeof (err as { name: string }).name === "string"
    ? (err as { name: string }).name
    : "";
  return name === "PasswordException";
}

export function toUserFacingPdfError(err: unknown): string {
  if (err instanceof SalaryPdfParseError) {
    return err.message;
  }
  if (isPasswordPdfError(err)) {
    return "This PDF is password-protected. Unlock it and export a copy without a password, then try again.";
  }
  if (err instanceof Error && err.message) {
    return `We couldn’t read this PDF (${err.message}). Try another file or manual entry.`;
  }
  return "We couldn’t read this PDF. Try another file or manual entry.";
}
