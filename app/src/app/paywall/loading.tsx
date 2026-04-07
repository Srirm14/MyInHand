export default function PaywallLoading() {
  // Avoid white flashes during server redirects (premium-only routes → /paywall).
  return (
    <div
      className="min-h-[calc(100dvh-4rem)] w-full bg-navy-950/[0.06]"
      aria-hidden
    />
  );
}

