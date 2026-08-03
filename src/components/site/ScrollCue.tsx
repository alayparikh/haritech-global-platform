import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bottom-of-hero affordance that scrolls into the first content section.
 * `targetId` must match the id on that section.
 */
export function ScrollCue({
  targetId,
  label = "Scroll to explore",
  className,
}: {
  targetId: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`#${targetId}`}
      aria-label={label}
      className={cn(
        "group inline-flex flex-col items-center gap-2 text-ink-muted transition-colors hover:text-cyan",
        className,
      )}
    >
      <span className="eyebrow text-[0.62rem]">{label}</span>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-muted/30 transition-colors group-hover:border-cyan/60">
        <ChevronDown className="h-4 w-4 motion-safe:animate-[cue_2s_ease-in-out_infinite]" />
      </span>
    </a>
  );
}
