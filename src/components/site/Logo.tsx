import { cn } from "@/lib/utils";

import logoLight from "@/assets/haritech-logo.png";
import logoDark from "@/assets/haritech-logo-dark.png";

/**
 * The supplied lockup, background removed so it sits on any surface.
 *
 * Two files rather than CSS filters: the source art puts a near-black tagline
 * and a mid-blue wordmark on white, and both sink into the ink header/footer.
 * `haritech-logo-dark.png` keeps the four-quadrant mark in brand colour and
 * lifts only the type to white. Both are derived from the supplied
 * `haritech-logo2.png` artwork, with its white background removed.
 *
 * `color` is theme-aware — it swaps to the dark-surface art in dark mode, where
 * the page background is ink.
 */
const ASPECT = "aspect-[707/166]";

export function Logo({
  className,
  variant = "color",
}: {
  className?: string;
  /** `color` for light surfaces (auto-swaps in dark mode), `onDark` for ink. */
  variant?: "color" | "onDark";
}) {
  const sizing = cn("h-10 w-auto", ASPECT, className);

  if (variant === "onDark") {
    return <img src={logoDark} alt="HariTech — intense to high impact" className={sizing} />;
  }

  return (
    <>
      <img
        src={logoLight}
        alt="HariTech — intense to high impact"
        className={cn(sizing, "dark:hidden")}
      />
      <img src={logoDark} alt="" aria-hidden="true" className={cn(sizing, "hidden dark:block")} />
    </>
  );
}

/** The four-quadrant mark on its own — for favicons, tight spaces and loaders. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="HariTech"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top row — outer corner swept toward the right */}
      <path d="M0 0h17a29 29 0 0 1 29 29v17H0z" fill="#0f80bf" />
      <path d="M54 0h17a29 29 0 0 1 29 29v17H54z" fill="#1cc2e4" />
      {/* Bottom row — mirrored 180°, sweep toward the left */}
      <path d="M0 54h46v46H29A29 29 0 0 1 0 71z" fill="#0f80bf" />
      <path d="M54 54h46v46H83a29 29 0 0 1-29-29z" fill="#1cc2e4" />
    </svg>
  );
}
