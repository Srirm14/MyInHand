/** @vitest-environment happy-dom */

import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { PremiumSuccessAbstract } from "@/components/features/billing/premium-success-abstract";

describe("PremiumSuccessAbstract", () => {
  let host: HTMLDivElement;

  beforeEach(() => {
    // Satisfy React 19 act() in Vitest + happy-dom (silences testing warnings).
    (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT =
      true;

    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  afterEach(() => {
    host?.remove();
  });

  it("renders the success motif with an accessible label and check icon", async () => {
    host = document.createElement("div");
    document.body.appendChild(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(<PremiumSuccessAbstract />);
    });

    const region = host.querySelector('[aria-label="Premium unlocked"]');
    expect(region).toBeTruthy();
    expect(host.querySelector("svg")).toBeTruthy();
  });
});
