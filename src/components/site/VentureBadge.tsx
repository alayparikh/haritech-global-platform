import { Globe2 } from "lucide-react";

import { company } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * The USA–India joint-venture line. It runs on every page, so it lives in one
 * component reading one string from `company.venture` — changing the wording
 * later is a single edit.
 */
export function VentureBadge({
  tone = "ink",
  className,
}: {
  /** `ink` for dark heroes, `light` for page surfaces. */
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5",
        tone === "ink"
          ? "border-cyan/25 bg-cyan/10 text-cyan"
          : "border-border bg-card text-primary",
        className,
      )}
    >
      <Globe2 className="h-3.5 w-3.5 flex-none" />
      <span className="eyebrow text-[0.65rem]">{company.venture.short}</span>
    </span>
  );
}
