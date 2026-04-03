"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type RefObject,
} from "react";

const SCROLL_KEY = "inhand.salaryBreakdown.scrollY";

function isBrowser(): boolean {
  return globalThis.window !== undefined;
}

/**
 * Drop saved scroll so the next breakdown visit starts at the top (e.g. user chose
 * "Back to salary inputs" to edit CTC, not a detour).
 */
export function clearSalaryBreakdownScrollSave(): void {
  if (!isBrowser()) return;
  try {
    globalThis.sessionStorage.removeItem(SCROLL_KEY);
  } catch {
    /* ignore */
  }
}

function peekSavedScrollY(): number | null {
  if (!isBrowser()) return null;
  try {
    const raw = globalThis.sessionStorage.getItem(SCROLL_KEY);
    if (raw == null) return null;
    const y = Number.parseInt(raw, 10);
    return Number.isFinite(y) && y >= 0 ? y : null;
  } catch {
    return null;
  }
}

function writeSavedScroll(y: number): void {
  if (!isBrowser()) return;
  try {
    globalThis.sessionStorage.setItem(SCROLL_KEY, String(Math.round(y)));
  } catch {
    /* quota / private mode */
  }
}

/**
 * Call on pointer down on any link/control that leaves Salary Breakdown. Next.js may
 * scroll the window and fire `scroll` before the breakdown unmounts, zeroing the ref —
 * capturing here preserves the real position.
 */
export function persistSalaryBreakdownScrollNow(): void {
  if (!isBrowser()) return;
  try {
    const y = Math.round(globalThis.window.scrollY ?? 0);
    if (y >= 0) writeSavedScroll(y);
  } catch {
    /* ignore */
  }
}

/**
 * Tracks window scroll while the salary breakdown content is shown; persists the last
 * position when leaving the page. Restores synchronously on return (layout) and
 * corrects one frame later if the App Router resets scroll.
 *
 * @param enabled — pass `true` only when the full breakdown UI is mounted (not the loading shell).
 * @param options.skipNextPersistRef — set to `true` before navigating away when scroll should not
 *   be saved (e.g. “Back to salary inputs”). Cleanup clears the flag and skips `writeSavedScroll`.
 */
export function useSalaryBreakdownScrollRestoration(
  enabled: boolean,
  options?: { skipNextPersistRef?: RefObject<boolean> }
): void {
  const scrollYRef = useRef(0);
  const skipRef = options?.skipNextPersistRef;
  const restoreTargetRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (!enabled) return;
    const y = peekSavedScrollY();
    if (y == null || y <= 8) {
      restoreTargetRef.current = null;
      return;
    }
    restoreTargetRef.current = y;
    globalThis.window.scrollTo({ top: y, behavior: "auto" });
    scrollYRef.current = y;
    try {
      globalThis.sessionStorage.removeItem(SCROLL_KEY);
    } catch {
      /* ignore */
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const target = restoreTargetRef.current;
    if (target == null) return;
    restoreTargetRef.current = null;
    let raf = 0;
    const fix = () => {
      if (Math.abs(globalThis.window.scrollY - target) > 12) {
        globalThis.window.scrollTo({ top: target, behavior: "auto" });
        scrollYRef.current = target;
      }
    };
    raf = globalThis.requestAnimationFrame(() => {
      globalThis.requestAnimationFrame(fix);
    });
    return () => globalThis.cancelAnimationFrame(raf);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const win = globalThis.window;
    const onScroll = () => {
      scrollYRef.current = win.scrollY;
    };
    onScroll();
    win.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      win.removeEventListener("scroll", onScroll);
      if (skipRef?.current) {
        skipRef.current = false;
        return;
      }
      const stored = peekSavedScrollY();
      const live = scrollYRef.current;
      const best = Math.max(live, stored ?? 0);
      writeSavedScroll(best);
    };
  }, [enabled, skipRef]);
}
