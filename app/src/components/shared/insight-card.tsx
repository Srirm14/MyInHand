import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  className?: string;
  /** "teal" = brand highlight, "white" = standard card */
  variant?: "teal" | "white";
}

export function InsightCard({
  title,
  description,
  className,
  variant = "white",
}: InsightCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-5",
        variant === "teal"
          ? "bg-teal-600 text-white"
          : "bg-white border border-navy-200/40 shadow-sm",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl",
            variant === "teal"
              ? "bg-white/20 text-white"
              : "bg-teal-50 text-teal-600"
          )}
        >
          <Sparkles className="size-5" />
        </div>
        <div>
          <h4
            className={cn(
              "text-sm font-semibold",
              variant === "teal" ? "text-white" : "text-navy-800"
            )}
          >
            {title}
          </h4>
          <p
            className={cn(
              "mt-1 text-sm leading-relaxed",
              variant === "teal" ? "text-white/80" : "text-navy-500"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
