import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Brand mark: `public/brand/inhand-logo.svg`. Favicon: `src/app/icon.svg` (keep in sync). */
export const INHAND_MARK_SRC = "/brand/inhand-logo.svg";

const VIEWBOX_W = 50;
const VIEWBOX_H = 52;

type InhandLogoMarkProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height"
> & {
  /** CSS pixel height; width follows 50:52 aspect ratio. */
  height?: number;
};

export function InhandLogoMark({
  className,
  height = 36,
  ...imgProps
}: Readonly<InhandLogoMarkProps>) {
  const width = Math.round((height * VIEWBOX_W) / VIEWBOX_H);
  return (
    <img
      src={INHAND_MARK_SRC}
      alt=""
      width={width}
      height={height}
      decoding="async"
      className={cn("shrink-0 select-none", className)}
      {...imgProps}
    />
  );
}
