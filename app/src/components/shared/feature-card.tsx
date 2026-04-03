import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Optional CTA text */
  cta?: string;
  /** Optional onClick or link behavior */
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  cta,
  onClick,
  className,
  children,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm border border-navy-200/40 transition-shadow hover:shadow-md",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
        <Icon className="size-5" />
      </div>

      {/* Content */}
      <h3 className="text-h3 text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-navy-500 leading-relaxed">{description}</p>

      {/* Optional CTA */}
      {cta && (
        <p className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
          {cta} &rarr;
        </p>
      )}

      {/* Optional children (preview area) */}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
