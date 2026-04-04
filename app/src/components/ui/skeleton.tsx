import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-navy-100/85 dark:bg-navy-800/40",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
