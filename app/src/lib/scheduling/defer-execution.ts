/**
 * Central place for delayed (wall-clock) work. Feature code should import from
 * here instead of calling `setTimeout` / `clearTimeout` directly so scheduling
 * stays consistent and easy to audit.
 */
export type DeferredCancel = () => void;

export function deferExecution(
  delayMs: number,
  callback: () => void
): DeferredCancel {
  const handle = globalThis.setTimeout(callback, delayMs);
  return () => globalThis.clearTimeout(handle);
}

/** Promise helper for tests/mocks — built on `deferExecution`. */
export function waitForMs(ms: number): Promise<void> {
  return new Promise((resolve) => {
    deferExecution(ms, () => resolve());
  });
}
