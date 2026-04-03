"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  startTransition,
} from "react";
import { Download, X, FileText, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";
import { salaryPDFFilename } from "@/lib/utils/export-csv";
import { cn } from "@/lib/utils";

type PDFGenState =
  | { status: "idle" }
  | { status: "generating" }
  | { status: "ready"; blobUrl: string }
  | { status: "error"; message: string };

interface PDFPreviewModalProps {
  open: boolean;
  onClose: () => void;
  breakdown: SalaryBreakdown;
  input: SalaryInput;
}

async function generatePDFBlob(
  breakdown: SalaryBreakdown,
  input: SalaryInput
): Promise<Blob> {
  const [{ pdf }, { SalaryPDFDocument }, { createElement }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("./salary-pdf-document"),
    import("react"),
  ]);

  const element = createElement(SalaryPDFDocument, { breakdown, input });
  const instance = pdf(element as Parameters<typeof pdf>[0]);
  return instance.toBlob();
}

function revokeBlobRef(ref: { current: string | null }) {
  if (ref.current) {
    URL.revokeObjectURL(ref.current);
    ref.current = null;
  }
}

export function PDFPreviewModal({
  open,
  onClose,
  breakdown,
  input,
}: PDFPreviewModalProps) {
  const [state, setState] = useState<PDFGenState>({ status: "idle" });
  const [retryKey, setRetryKey] = useState(0);
  const blobUrlRef = useRef<string | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    let cancelled = false;
    startTransition(() => setState({ status: "generating" }));
    revokeBlobRef(blobUrlRef);

    generatePDFBlob(breakdown, input)
      .then((blob) => {
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        blobUrlRef.current = url;
        setState({ status: "ready", blobUrl: url });
      })
      .catch(() => {
        if (cancelled) return;
        setState({
          status: "error",
          message: "PDF generation failed. Please try again.",
        });
      });

    return () => {
      cancelled = true;
      revokeBlobRef(blobUrlRef);
    };
  }, [open, breakdown, input, retryKey]);

  const handleClose = useCallback(() => {
    revokeBlobRef(blobUrlRef);
    setState({ status: "idle" });
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleDownload = useCallback(() => {
    if (state.status !== "ready") return;
    const a = document.createElement("a");
    a.href = state.blobUrl;
    a.download = salaryPDFFilename(breakdown.statedAnnualCTC);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [state, breakdown.statedAnnualCTC]);

  const handleRetry = useCallback(() => {
    setRetryKey((k) => k + 1);
  }, []);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === backdropRef.current) handleClose();
    },
    [handleClose]
  );

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center p-4",
        "bg-navy-900/50 backdrop-blur-sm",
        "animate-in fade-in-0 duration-200"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="PDF Preview"
    >
      <div
        className={cn(
          "relative flex h-full max-h-[90vh] w-full max-w-4xl flex-col",
          "rounded-2xl border border-navy-200/60 bg-white shadow-2xl",
          "animate-in zoom-in-95 slide-in-from-bottom-4 duration-200"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-navy-200/60 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <FileText className="size-4.5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-navy-800">
                Salary Report Preview
              </h2>
              <p className="text-xs text-navy-400">
                {input.fullName?.trim()
                  ? `${input.fullName.trim()} · `
                  : ""}
                {input.taxRegime === "old" ? "Old" : "New"} Regime ·{" "}
                {new Date().toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              disabled={state.status !== "ready"}
              onClick={handleDownload}
              className="rounded-full bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
            >
              <Download className="mr-1.5 size-3.5" />
              Download
            </Button>
            <button
              type="button"
              onClick={handleClose}
              className={cn(
                "flex size-8 items-center justify-center rounded-full text-navy-400",
                "hover:bg-navy-100 hover:text-navy-700 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              )}
              aria-label="Close preview"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 min-h-0 flex-col overflow-hidden rounded-b-2xl bg-navy-50/50">
          {state.status === "generating" && <PDFSkeleton />}
          {state.status === "error" && (
            <PDFError message={state.message} onRetry={handleRetry} />
          )}
          {state.status === "ready" && (
            <iframe
              src={state.blobUrl}
              className="h-full min-h-[420px] w-full flex-1 rounded-b-2xl border-0 bg-white"
              title="Salary Report PDF Preview"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function PDFSkeleton() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start overflow-hidden p-6">
      <div className="w-full max-w-[595px] space-y-4 rounded-lg border border-navy-200/40 bg-white p-8 shadow-sm animate-pulse">
        <div className="flex items-start justify-between">
          <div className="h-4 w-24 rounded bg-teal-100" />
          <div className="flex flex-col items-end space-y-1.5">
            <div className="h-3 w-28 rounded bg-navy-100" />
            <div className="h-3 w-20 rounded bg-navy-100" />
          </div>
        </div>
        <div className="h-px bg-navy-100" />
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2 rounded-md bg-navy-50 p-3">
              <div className="h-2.5 w-16 rounded bg-navy-100" />
              <div className="h-5 w-24 rounded bg-navy-200" />
              <div className="h-2 w-12 rounded bg-navy-100" />
            </div>
          ))}
        </div>
        <div className="h-3 w-28 rounded bg-navy-100" />
        <div className="space-y-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-3 w-1/2 rounded bg-navy-50" />
              <div className="ml-auto h-3 w-1/5 rounded bg-navy-50" />
              <div className="h-3 w-1/5 rounded bg-navy-50" />
              <div className="h-4 w-14 rounded-full bg-navy-100" />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-navy-400">
        <Loader2 className="size-3.5 animate-spin text-teal-600" />
        Generating your salary report…
      </p>
    </div>
  );
}

function PDFError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-danger-50 text-danger-500">
        <AlertCircle className="size-6" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-navy-800">Export failed</p>
        <p className="mt-1 text-xs text-navy-500">{message}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="rounded-full border-navy-200 px-4 text-xs font-semibold"
      >
        Try again
      </Button>
    </div>
  );
}
