import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  /** Used if `src` fails to load — lets generated photos drop in later without breaking the page. */
  fallbackSrc?: string | undefined;
};

/**
 * Every photo that actually exists under `public/images`. The data files point
 * at that tree for photos we haven't produced yet, and a missing file used to
 * ship a broken `src` in the SSR HTML and 404 on every page view before the
 * client swapped in the fallback. Resolving against this manifest means an
 * unshot photo silently uses its fallback, and a real one is picked up the
 * moment the file lands — no data edits.
 */
const publicImages = new Set(
  Object.keys(import.meta.glob("/public/images/**/*.{jpg,jpeg,png,webp,avif}")).map((p) =>
    p.replace("/public", ""),
  ),
);

const resolve = (src: string, fallbackSrc?: string) =>
  src.startsWith("/images/") && !publicImages.has(src) && fallbackSrc ? fallbackSrc : src;

export function SmartImage({ src, fallbackSrc, ...props }: Props) {
  const [current, setCurrent] = useState(() => resolve(src, fallbackSrc));
  const ref = useRef<HTMLImageElement>(null);

  const swapToFallback = () => {
    if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc);
  };

  // The server-rendered image can finish failing before hydration, so `onError`
  // never fires for it — catch that case on mount.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) swapToFallback();
  });

  return (
    <img
      {...props}
      ref={ref}
      src={current}
      onError={swapToFallback}
      // A tinted plate so a slow or broken image reads as a placeholder panel
      // instead of a blank white hole in the layout.
      className={cn("bg-secondary", props.className)}
    />
  );
}
