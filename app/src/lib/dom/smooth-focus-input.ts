import { deferExecution } from "@/lib/scheduling/defer-execution";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Smoothly scrolls an input into view, then focuses it without a second scroll jump.
 * Returns a disposer to cancel pending fallback scheduling.
 */
export function smoothScrollInputIntoViewAndFocus(
  el: HTMLInputElement | null
): () => void {
  if (!el || typeof el.focus !== "function") return () => {};

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    try {
      el.focus({ preventScroll: true });
    } catch {
      el.focus();
    }
  };

  const reduce = prefersReducedMotion();
  el.scrollIntoView({
    behavior: reduce ? "instant" : "smooth",
    block: "center",
    inline: "nearest",
  });

  if (reduce) {
    finish();
    return () => {};
  }

  let cancelFallback: (() => void) | undefined;

  function onScrollEnd() {
    cancelFallback?.();
    cancelFallback = undefined;
    window.removeEventListener("scrollend", onScrollEnd);
    finish();
  }

  cancelFallback = deferExecution(600, () => {
    window.removeEventListener("scrollend", onScrollEnd);
    finish();
  });

  window.addEventListener("scrollend", onScrollEnd, { once: true });

  return () => {
    cancelFallback?.();
    cancelFallback = undefined;
    window.removeEventListener("scrollend", onScrollEnd);
  };
}
