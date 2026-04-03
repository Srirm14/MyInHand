import { cn } from "@/lib/utils";

type BadgeVariant = "earning" | "deduction" | "tax-free" | "neutral";

interface BadgeLabelProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  earning: "bg-emerald-50 text-emerald-600 border-emerald-200/50",
  deduction: "bg-danger-50 text-danger-600 border-danger-200/50",
  "tax-free": "bg-teal-50 text-teal-600 border-teal-200/50",
  neutral: "bg-navy-100 text-navy-500 border-navy-200/50",
};

export function BadgeLabel({ variant, children, className }: BadgeLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
