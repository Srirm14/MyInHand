import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UpgradeBannerProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function UpgradeBanner({
  title,
  description,
  ctaText = "Upgrade Now",
  ctaHref = "/paywall",
  className,
}: UpgradeBannerProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-teal-600 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
        className
      )}
    >
      <div>
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/80 max-w-md leading-relaxed">
          {description}
        </p>
      </div>
      <Link href={ctaHref}>
        <Button
          variant="secondary"
          className="rounded-full bg-white text-teal-700 px-6 py-2.5 font-semibold hover:bg-teal-50 shadow-md"
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  );
}
