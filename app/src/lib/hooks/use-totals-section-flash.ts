"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type AnimationEvent,
} from "react";

const FLASH_ANIMATION_NAME = "inhand-totals-flash";

/**
 * Highlights the totals/stat strip briefly when `totalsSignature` changes after
 * the first value (prime). Uses CSS animation + `animationend` — no timers.
 */
export function useTotalsSectionFlash(totalsSignature: string) {
  const primed = useRef(false);
  const [flashOn, setFlashOn] = useState(false);

  useLayoutEffect(() => {
    if (!totalsSignature) return;
    if (!primed.current) {
      primed.current = true;
      return;
    }
    setFlashOn(false);
    let innerId = 0;
    const outerId = requestAnimationFrame(() => {
      innerId = requestAnimationFrame(() => setFlashOn(true));
    });
    return () => {
      cancelAnimationFrame(outerId);
      cancelAnimationFrame(innerId);
    };
  }, [totalsSignature]);

  const onTotalsFlashEnd = useCallback((e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName !== FLASH_ANIMATION_NAME) return;
    setFlashOn(false);
  }, []);

  return {
    flashActive: flashOn,
    stripFlashClass: flashOn ? "inhand-totals-flash-once" : "",
    onTotalsFlashEnd,
  };
}
