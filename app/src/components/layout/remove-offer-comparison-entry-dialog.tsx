"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { OfferComparisonHistoryEntry } from "@/lib/types/history.types";

export function RemoveOfferComparisonEntryDialog({
  entry,
  open,
  onOpenChange,
  onConfirm,
}: {
  entry: OfferComparisonHistoryEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void | Promise<void>;
}) {
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) setBusy(false);
  }, [open]);

  const handleConfirm = async () => {
    setBusy(true);
    try {
      await Promise.resolve(onConfirm());
    } finally {
      setBusy(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="sm:max-w-[420px] gap-0 p-6 pt-7"
      >
        <DialogHeader className="space-y-3 text-left pr-10">
          <DialogTitle className="text-base font-semibold text-navy-800 font-heading leading-snug">
            Remove this offer comparison?
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-navy-600">
            {entry ? (
              <>
                <span className="block">
                  <span className="font-semibold text-navy-800">
                    {entry.title}
                  </span>{" "}
                  will be permanently removed from recent activity on this
                  device. This cannot be undone.
                </span>
                <span className="mt-3 block text-xs leading-relaxed text-navy-500">
                  You can run a new comparison anytime from Offer comparison.
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
            onClick={() => void handleConfirm()}
          >
            {busy ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                Removing…
              </>
            ) : (
              "Remove comparison"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
