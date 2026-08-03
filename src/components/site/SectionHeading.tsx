import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/**
 * The one heading primitive. Every section uses it, so eyebrow → h2 → lede
 * spacing is identical everywhere and the optional right-hand slot always
 * baselines against the heading block instead of floating.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  aside,
  action,
  tone = "light",
  as: Tag = "h2",
  className,
}: {
  eyebrow: string;
  title: string;
  /** Paragraph directly beneath the heading. */
  lede?: string;
  /** Paragraph pulled to the right on md+, aligned to the heading's baseline row. */
  aside?: string;
  /** Button or link pulled to the right on md+. */
  action?: React.ReactNode;
  tone?: Tone;
  as?: "h1" | "h2";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-ink-muted" : "text-muted-foreground";
  const heading = tone === "dark" ? "text-ink-foreground" : "text-foreground";
  const eyebrowTone = tone === "dark" ? "text-cyan" : "text-primary";
  const hasRight = Boolean(aside || action);

  return (
    <div className={cn(hasRight && "gap-8 md:grid md:grid-cols-12 md:items-end", className)}>
      <div className={cn("max-w-2xl", hasRight && "md:col-span-7")}>
        <p className={cn("eyebrow", eyebrowTone)}>{eyebrow}</p>
        <Tag className={cn("mt-4 font-bold", heading, Tag === "h1" ? "text-hero" : "text-section")}>
          {title}
        </Tag>
        {lede && (
          <p className={cn("mt-5 text-base leading-relaxed md:text-[1.0625rem]", muted)}>{lede}</p>
        )}
      </div>

      {hasRight && (
        <div className="mt-8 md:col-span-5 md:mt-0 md:justify-self-end md:text-right">
          {aside && <p className={cn("max-w-md text-sm leading-relaxed", muted)}>{aside}</p>}
          {action && <div className={cn(aside && "mt-6")}>{action}</div>}
        </div>
      )}
    </div>
  );
}
