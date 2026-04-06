"use client";

import { useCallback, useEffect, useState } from "react";

/** Throttles repeated actions (e.g. resend confirmation) for Resend free-tier safety. */
export function useResendCooldown(durationMs = 60_000) {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [secondsLeft]);

  const startCooldown = useCallback(() => {
    setSecondsLeft(Math.ceil(durationMs / 1000));
  }, [durationMs]);

  const canSend = secondsLeft === 0;

  return { canSend, secondsLeft, startCooldown };
}
