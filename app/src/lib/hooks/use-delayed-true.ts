"use client";

import { useEffect, useState } from "react";
import { deferExecution } from "@/lib/scheduling/defer-execution";

/**
 * Becomes true only after `value` stays true for `delayMs` (avoids flashing UI on
 * very short async work).
 */
export function useDelayedTrue(value: boolean, delayMs: number): boolean {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!value) {
      setActive(false);
      return;
    }
    return deferExecution(delayMs, () => setActive(true));
  }, [value, delayMs]);
  return active;
}
