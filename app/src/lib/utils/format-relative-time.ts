/** Lightweight relative labels (no date-fns). */
export function formatRelativeTime(timestampMs: number): string {
  const sec = Math.floor((Date.now() - timestampMs) / 1000);
  if (sec < 45) return "Just now";
  if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
  if (sec < 86400) return `${Math.floor(sec / 3600)}h ago`;
  if (sec < 604800) return `${Math.floor(sec / 86400)}d ago`;
  return new Date(timestampMs).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year:
      new Date(timestampMs).getFullYear() === new Date().getFullYear()
        ? undefined
        : "numeric",
  });
}
