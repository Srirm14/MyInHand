import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-h1 text-navy-800">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-base text-navy-500 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {/* Optional right-side actions */}
        {children && <div className="flex items-center gap-3">{children}</div>}
      </div>
    </div>
  );
}
