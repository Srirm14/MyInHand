"use client";

import { useCallback, useId, useRef, useState, type ReactNode } from "react";
import { FileUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DEFAULT_ACCEPT = "application/pdf,.pdf";

function isPdfFile(file: File): boolean {
  const n = file.name.toLowerCase();
  const t = file.type.toLowerCase();
  return t === "application/pdf" || n.endsWith(".pdf");
}

function fileListFromArray(files: File[]): FileList {
  const dt = new DataTransfer();
  for (const f of files) {
    dt.items.add(f);
  }
  return dt.files;
}

export type CompensationPdfUploadDropzoneProps = {
  onFilesSelected: (files: FileList | null) => void;
  busy: boolean;
  /** Shown next to the progress bar while busy */
  busyLabel?: string;
  disabled?: boolean;
  error?: string | null;
  multiple?: boolean;
  accept?: string;
  /** Reject non-PDF with inline message (recommended for all compensation uploads). */
  pdfOnly?: boolean;
  className?: string;
  title: string;
  description: ReactNode;
  footnote?: ReactNode;
  dropHint?: string;
  browseButtonLabel?: string;
  /**
   * `dropzone` — large dashed target, drag-and-drop + browse (CTC, offer compare).
   * `inline` — compact row + button only, no drag-and-drop (e.g. breakdown “replace”).
   */
  layout?: "dropzone" | "inline";
};

/**
 * Shared compensation PDF picker: PDF-first copy, branded progress bar while reading.
 * Default layout supports drag-and-drop; `layout="inline"` is click-to-browse only.
 */
export function CompensationPdfUploadDropzone({
  onFilesSelected,
  busy,
  busyLabel = "Working on your PDF…",
  disabled = false,
  error = null,
  multiple = false,
  accept = DEFAULT_ACCEPT,
  pdfOnly = true,
  className,
  title,
  description,
  footnote,
  dropHint = "Drag your PDF here, or click to choose",
  browseButtonLabel = "Choose PDF",
  layout = "dropzone",
}: CompensationPdfUploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const [dragDepth, setDragDepth] = useState(0);
  const [localError, setLocalError] = useState<string | null>(null);
  const isDropzone = layout === "dropzone";
  const dragging = isDropzone && dragDepth > 0 && !disabled && !busy;
  const combinedError = error ?? localError;
  const blockPick = disabled || busy;

  const processList = useCallback(
    (list: FileList | null) => {
      setLocalError(null);
      if (!list || list.length === 0) return;
      const arr = Array.from(list);
      if (pdfOnly) {
        const pdfs = arr.filter(isPdfFile);
        if (pdfs.length === 0) {
          setLocalError(
            "We need a PDF. Save or print your file as PDF, then try again."
          );
          return;
        }
        if (pdfs.length < arr.length) {
          setLocalError(
            "We only use PDFs here — other files were skipped."
          );
          onFilesSelected(
            multiple ? fileListFromArray(pdfs) : fileListFromArray([pdfs[0]!])
          );
          if (inputRef.current) inputRef.current.value = "";
          return;
        }
      }
      onFilesSelected(list);
      if (inputRef.current) inputRef.current.value = "";
    },
    [multiple, onFilesSelected, pdfOnly]
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processList(e.target.files);
  };

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (blockPick) return;
    setDragDepth((d) => d + 1);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragDepth((d) => Math.max(0, d - 1));
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragDepth(0);
    if (blockPick) return;
    processList(e.dataTransfer.files);
  };

  const progressBlock = busy ? (
        <div className="space-y-2" aria-live="polite" aria-busy="true">
          <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-teal-900">
            <span>{busyLabel}</span>
          </div>
          <div
            className="inhand-pdf-read-progress-track relative h-2 w-full overflow-hidden rounded-full"
            role="progressbar"
            aria-valuetext={busyLabel}
          >
            <div className="inhand-pdf-read-progress-bar absolute inset-y-0 left-0 w-[38%] rounded-full" />
          </div>
        </div>
  ) : null;

  return (
    <div className={cn("space-y-3", className)}>
      <input
        id={inputId}
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="sr-only"
        disabled={blockPick}
        onChange={onInputChange}
        aria-busy={busy}
      />

      {isDropzone ? (
        <label
          htmlFor={inputId}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          className={cn(
            "flex min-h-[152px] cursor-pointer flex-col justify-center rounded-2xl border-2 border-dashed px-4 py-5 text-center transition-[border-color,background-color,box-shadow] duration-200 sm:px-6",
            dragging
              ? "border-teal-500 bg-teal-50/90 shadow-md shadow-teal-900/[0.06]"
              : "border-navy-200/80 bg-white/80 hover:border-teal-300/90 hover:bg-teal-50/35",
            blockPick && "pointer-events-none cursor-not-allowed opacity-60",
            combinedError && "border-danger-200 bg-danger-50/20"
          )}
        >
          <div className="mx-auto flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-200/60">
            <FileUp className="size-5" strokeWidth={2} aria-hidden />
          </div>
          <p className="mt-3 text-sm font-semibold text-navy-800">{title}</p>
          <div className="mt-1 text-xs leading-relaxed text-navy-600">{description}</div>
          <p className="mt-3 text-[11px] font-medium text-teal-800">{dropHint}</p>
          <span className="mt-4 inline-flex items-center justify-center self-center rounded-full border border-teal-200 bg-white px-5 py-2.5 text-sm font-semibold text-teal-900 shadow-sm shadow-navy-900/[0.03]">
            {browseButtonLabel}
          </span>
        </label>
      ) : (
        <div
          className={cn(
            "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
            combinedError && "rounded-xl border border-danger-200/80 bg-danger-50/15 p-3 sm:p-0 sm:border-0 sm:bg-transparent"
          )}
        >
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Upload className="size-5" strokeWidth={2} aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-navy-800">{title}</p>
              <div className="mt-0.5 text-xs leading-relaxed text-navy-500">
                {description}
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
            <Button
              type="button"
              variant="outline"
              disabled={blockPick}
              className="rounded-full border-teal-200 text-teal-800 hover:bg-teal-50"
              onClick={() => inputRef.current?.click()}
            >
              {browseButtonLabel}
            </Button>
            {combinedError ? (
              <p className="text-xs font-medium leading-snug text-danger-600 sm:text-right sm:max-w-xs">
                {combinedError}
              </p>
            ) : null}
          </div>
        </div>
      )}

      {progressBlock}

      {isDropzone && combinedError ? (
        <p className="text-center text-xs font-medium leading-snug text-danger-600">
          {combinedError}
        </p>
      ) : null}

      {footnote && !busy ? (
        <p
          className={cn(
            "text-[11px] leading-relaxed text-navy-400",
            isDropzone ? "text-center" : "text-left sm:max-w-xl"
          )}
        >
          {footnote}
        </p>
      ) : null}
    </div>
  );
}
