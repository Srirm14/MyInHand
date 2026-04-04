/**
 * Framer Motion presets shared with the marketing landing and salary flows.
 * Keep easing, viewport, and variant shapes aligned for a consistent feel.
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered sections: animate once, slightly before fully in view */
export const VIEWPORT = { once: true, margin: "-64px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: EASE },
  }),
};

export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});
