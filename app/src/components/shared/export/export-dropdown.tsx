"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Download, FileSpreadsheet, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PDFPreviewModal } from "./pdf-preview-modal";
import {
  buildSalaryCSV,
  downloadCSV,
  salaryCSVFilename,
} from "@/lib/utils/export-csv";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { mergeSalaryInputWithProfile } from "@/lib/utils/salary-input-profile";
import { cn } from "@/lib/utils";

interface ExportDropdownProps {
  breakdown: SalaryBreakdown;
  input: SalaryInput;
  /** Button label. Defaults to "Export" */
  label?: string;
  className?: string;
}

/**
 * Export dropdown with two actions:
 *  1. Download CSV — immediate download, no preview.
 *  2. Preview PDF  — opens modal with professional PDF preview, then user clicks Download PDF.
 */
export function ExportDropdown({
  breakdown,
  input,
  label = "Export",
  className,
}: ExportDropdownProps) {
  const [open, setOpen] = useState(false);
  const [pdfOpen, setPDFOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const user = useAuthStore((s) => s.user);
  const inputForExport = useMemo(
    () => mergeSalaryInputWithProfile(input, user),
    [input, user]
  );

  // ── Close dropdown on outside click ──
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // ── Keyboard ──
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // ── CSV download (immediate) ──
  const handleCSV = useCallback(() => {
    setOpen(false);
    const csv = buildSalaryCSV(breakdown, inputForExport);
    const filename = salaryCSVFilename(breakdown.statedAnnualCTC);
    downloadCSV(csv, filename);
  }, [breakdown, inputForExport]);

  // ── PDF preview ──
  const handlePDFPreview = useCallback(() => {
    setOpen(false);
    setPDFOpen(true);
  }, []);

  return (
    <>
      <div ref={containerRef} className={cn("relative inline-block", className)}>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "h-9 rounded-full border-navy-200 px-4 text-xs font-semibold text-navy-700",
            "hover:border-navy-300 hover:bg-navy-50 hover:text-navy-800",
            "inline-flex items-center gap-1.5",
            "focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
            open && "bg-navy-50 border-navy-300"
          )}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          <Download className="size-3.5 shrink-0" />
          {label}
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform duration-150",
              open && "rotate-180"
            )}
          />
        </Button>

        {open && (
          <div
            className={cn(
              "absolute right-0 top-full z-50 mt-2",
              "w-52 rounded-xl border border-navy-200/60 bg-white py-1.5 shadow-lg",
              "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"
            )}
            role="menu"
            aria-label="Export options"
          >
            {/* CSV option */}
            <button
              type="button"
              role="menuitem"
              onClick={handleCSV}
              className={cn(
                "flex w-full items-start gap-3 px-3 py-2.5 text-left",
                "transition-colors hover:bg-navy-50",
                "focus-visible:outline-none focus-visible:bg-navy-50"
              )}
            >
              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <FileSpreadsheet className="size-3.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-800">CSV</p>
                <p className="text-[11px] text-navy-400 leading-relaxed">
                  Download immediately (Excel or Sheets).
                </p>
              </div>
            </button>

            {/* Divider */}
            <div className="my-1 border-t border-navy-100" />

            {/* PDF option */}
            <button
              type="button"
              role="menuitem"
              onClick={handlePDFPreview}
              className={cn(
                "flex w-full items-start gap-3 px-3 py-2.5 text-left",
                "transition-colors hover:bg-navy-50",
                "focus-visible:outline-none focus-visible:bg-navy-50"
              )}
            >
              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <FileText className="size-3.5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-800">PDF</p>
                <p className="text-[11px] text-navy-400 leading-relaxed">
                  Preview the report, then download from the dialog.
                </p>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* PDF preview modal (rendered at root so it escapes z-index stacking) */}
      <PDFPreviewModal
        open={pdfOpen}
        onClose={() => setPDFOpen(false)}
        breakdown={breakdown}
        input={inputForExport}
      />
    </>
  );
}
