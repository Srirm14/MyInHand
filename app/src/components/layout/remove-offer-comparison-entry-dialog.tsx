"use client";

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
  onConfirm: () => void;
}) {
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
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="default"
            className="h-10 rounded-full bg-danger-600 px-5 hover:bg-danger-700"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            Remove comparison
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
