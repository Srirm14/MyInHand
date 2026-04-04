/**
 * Visible placeholder while the global Premium plans modal is open on `/paywall`.
 * (Modal is mounted from `PremiumPlansModalHost` in the root layout.)
 */
export function PaywallPageShell() {
  return (
    <>
      <div className="sr-only">Premium subscription plans</div>
      <div
        className="min-h-[calc(100dvh-4rem)] w-full bg-navy-950/[0.06]"
        aria-hidden
      />
    </>
  );
}
