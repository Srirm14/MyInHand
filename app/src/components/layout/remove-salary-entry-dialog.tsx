"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { formatCTCAsLPA } from "@/lib/utils/format-currency";
import type { SalaryHistoryEntry } from "@/lib/types/history.types";

async function runSalaryRemoveConfirm(
  onConfirm: () => void | Promise<void>,
  setBusy: (busy: boolean) => void,
  onOpenChange: (open: boolean) => void
): Promise<void> {
  setBusy(true);
  try {
    await Promise.resolve(onConfirm());
  } finally {
    setBusy(false);
    onOpenChange(false);
  }
}

function RemoveSalaryBulkDialogDescription({
  count,
  entries,
  sole,
}: {
  readonly count: number;
  readonly entries: SalaryHistoryEntry[];
  readonly sole: SalaryHistoryEntry | undefined;
}) {
  if (count <= 0) return null;
  return (
    <>
      <span className="block">
        {sole ? (
          <>
            <span className="font-semibold text-navy-800 tabular-nums">
              {formatCTCAsLPA(sole.annualCTC)}
            </span>{" "}
            will be permanently removed
            {sole.title ? (
              <>
                {" "}
                <span className="text-navy-500">({sole.title})</span>
              </>
            ) : null}
            . This cannot be undone.
          </>
        ) : (
          <>
            These sessions will be permanently removed from saved salaries. This cannot
            be undone.
          </>
        )}
      </span>
      {count > 1 ? (
        <ul className="mt-3 max-h-36 list-disc space-y-1 overflow-y-auto pl-4 text-xs text-navy-600">
          {entries.slice(0, 8).map((e) => (
            <li key={e.id} className="tabular-nums">
              {formatCTCAsLPA(e.annualCTC)}
              {e.title ? (
                <span className="font-normal text-navy-500"> · {e.title}</span>
              ) : null}
            </li>
          ))}
          {count > 8 ? (
            <li className="list-none pl-0 text-navy-500">…and {count - 8} more</li>
          ) : null}
        </ul>
      ) : null}
      <span className="mt-3 block text-xs leading-relaxed text-navy-500">
        If your active salary is in this list, we&apos;ll load the next saved one or take
        you to a clean salary form.
      </span>
    </>
  );
}

export function RemoveSalaryEntryDialog({
  entry,
  open,
  onOpenChange,
  onConfirm,
  variant = "nav",
}: {
  readonly entry: SalaryHistoryEntry | null;
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly onConfirm: () => void | Promise<void>;
  /** `nav` copy vs `sheet` copy for reconcile hint */
  readonly variant?: "nav" | "sheet";
}) {
  const secondaryHint =
    variant === "sheet"
      ? "If this was your active salary, we’ll load the next saved entry or take you to a clean salary form."
      : "Your current workspace is unchanged until you pick another entry or start a new check.";

  const [busy, setBusy] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) setBusy(false);
        onOpenChange(next);
      }}
    >
      <DialogContent
        showCloseButton
        className="sm:max-w-[420px] gap-0 p-6 pt-7"
      >
        <DialogHeader className="space-y-3 text-left pr-10">
          <DialogTitle className="text-base font-semibold text-navy-800 font-heading leading-snug">
            Remove this saved salary?
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-navy-600">
            {entry ? (
              <>
                <span className="block">
                  <span className="font-semibold text-navy-800 tabular-nums">
                    {formatCTCAsLPA(entry.annualCTC)}
                  </span>{" "}
                  will be permanently removed from saved salaries on this device.
                  This cannot be undone.
                </span>
                <span className="mt-3 block text-xs leading-relaxed text-navy-500">
                  {secondaryHint}
                </span>
              </>
            ) : null}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex flex-col-reverse gap-2.5 border-t border-navy-100 pt-5 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            className="h-10 rounded-full px-5"
            disabled={busy}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="default"
            className="h-10 rounded-full bg-danger-600 px-5 hover:bg-danger-700"
            disabled={busy}
            onClick={() =>
              void runSalaryRemoveConfirm(onConfirm, setBusy, onOpenChange)
            }
          >
            {busy ? (
              <>
                <Loader2
                  className="mr-2 size-4 animate-spin"
                  aria-hidden
                />
                Removing…
              </>
            ) : (
              "Remove saved salary"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function RemoveSalaryBulkDialog({
  entries,
  open,
  onOpenChange,
  onConfirm,
}: {
  readonly entries: SalaryHistoryEntry[];
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly onConfirm: () => void | Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const count = entries.length;
  const sole = count === 1 ? entries[0] : undefined;

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) setBusy(false);
        onOpenChange(next);
      }}
    >
      <DialogContent
        showCloseButton
        className="sm:max-w-[420px] gap-0 p-6 pt-7"
      >
        <DialogHeader className="space-y-3 text-left pr-10">
          <DialogTitle className="text-base font-semibold text-navy-800 font-heading leading-snug">
            {count === 1
              ? "Remove this saved salary?"
              : `Remove ${count} saved salaries?`}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-navy-600">
            <RemoveSalaryBulkDialogDescription
              count={count}
              entries={entries}
              sole={sole}
            />
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex flex-col-reverse gap-2.5 border-t border-navy-100 pt-5 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            className="h-10 rounded-full px-5"
            disabled={busy}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="default"
            className="h-10 rounded-full bg-danger-600 px-5 hover:bg-danger-700"
            disabled={busy || count === 0}
            onClick={() =>
              void runSalaryRemoveConfirm(onConfirm, setBusy, onOpenChange)
            }
          >
            {busy ? (
              <>
                <Loader2
                  className="mr-2 size-4 animate-spin"
                  aria-hidden
                />
                Removing…
              </>
            ) : count === 1 ? (
              "Remove saved salary"
            ) : (
              `Remove ${count} salaries`
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
