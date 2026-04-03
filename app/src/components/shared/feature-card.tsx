import Link from "next/link";
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
  /** When set, entire card is a link (ignored if onClick is set) */
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  cta,
  onClick,
  href,
  className,
  children,
}: FeatureCardProps) {
  const body = (
    <>
      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
        <Icon className="size-5" />
      </div>
      <h3 className="text-h3 text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-navy-500 leading-relaxed">{description}</p>
      {cta && (
        <p className="mt-4 text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
          {cta} &rarr;
        </p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </>
  );

  const shellClass = cn(
    "rounded-2xl bg-white p-6 shadow-sm border border-navy-200/40 transition-shadow hover:shadow-md",
    (onClick || href) && "cursor-pointer",
    href && "group block text-left no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
    className
  );

  if (href && !onClick) {
    return (
      <Link href={href} className={shellClass}>
        {body}
      </Link>
    );
  }

  return (
    <div className={shellClass} onClick={onClick} role={onClick ? "button" : undefined}>
      {body}
    </div>
  );
}
