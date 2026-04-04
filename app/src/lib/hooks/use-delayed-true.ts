"use client";

import { useEffect, useState } from "react";

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
    const t = window.setTimeout(() => setActive(true), delayMs);
    return () => window.clearTimeout(t);
  }, [value, delayMs]);
  return active;
}
