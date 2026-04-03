"use client";

import { useEffect, useRef } from "react";

const SCROLL_KEY = "inhand.salaryBreakdown.scrollY";

/**
 * Drop saved scroll so the next breakdown visit starts at the top (e.g. user chose
 * "Back to salary inputs" to edit CTC, not a detour).
 */
export function clearSalaryBreakdownScrollSave(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(SCROLL_KEY);
  } catch {
    /* ignore */
  }
}

function readSavedScroll(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SCROLL_KEY);
    if (raw == null) return null;
    sessionStorage.removeItem(SCROLL_KEY);
    const y = Number.parseInt(raw, 10);
    return Number.isFinite(y) && y >= 0 ? y : null;
  } catch {
    return null;
  }
}

function writeSavedScroll(y: number): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(SCROLL_KEY, String(Math.round(y)));
  } catch {
    /* quota / private mode */
  }
}

/**
 * Tracks window scroll while the salary breakdown content is shown; persists the last
 * position when leaving the page (e.g. to Monthly plan / EMI / Forecast). Restores
 * after return. Uses a scroll listener so we never read `window.scrollY` on unmount
 * after Next.js has already moved to the next route (which would be ~0).
 *
 * @param enabled — pass `true` only when the full breakdown UI is mounted (not the loading shell).
 */
export function useSalaryBreakdownScrollRestoration(enabled: boolean): void {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const y = readSavedScroll();
    if (y != null && y > 8) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, behavior: "auto" });
        });
      });
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      writeSavedScroll(scrollYRef.current);
    };
  }, [enabled]);
}
