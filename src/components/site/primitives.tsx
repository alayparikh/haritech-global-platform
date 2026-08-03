import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/**
 * The site's button language, as a class helper rather than a component, so it
 * can be dropped onto a router `<Link>`, an `<a>` or a `<button>` without
 * losing the router's typed `to` prop.
 *
 * - `brand`  — primary action on a light surface
 * - `outline`— secondary action on a light surface
 * - `onInk`  — secondary action on a dark/ink surface
 * - `onBrand`— primary action inside a brand-gradient panel
 */
export function btn(
  variant: "brand" | "outline" | "onInk" | "onBrand" = "brand",
  size: "md" | "lg" = "md",
  className?: string,
) {
  const base =
    "inline-flex w-fit items-center justify-center gap-2 rounded-sm font-semibold whitespace-nowrap " +
    "transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out " +
    "motion-safe:hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none";

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-sm",
  }[size];

  const variants = {
    brand: "bg-gradient-brand text-primary-foreground shadow-panel hover:shadow-lift",
    outline:
      "border border-border bg-card text-foreground shadow-panel hover:border-primary/45 hover:text-primary hover:shadow-lift",
    onInk:
      "border border-ink-foreground/25 text-ink-foreground hover:border-cyan/60 hover:bg-ink-foreground/10",
    onBrand: "bg-primary-foreground text-primary shadow-panel hover:shadow-lift",
  }[variant];

  return cn(base, sizes, variants, className);
}

/** Inline text link with the site's standard arrow-nudge affordance. */
export function textLink(tone: "brand" | "cyan" = "brand", className?: string) {
  return cn(
    "group inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all duration-200",
    "motion-safe:hover:gap-3",
    tone === "cyan" ? "text-cyan hover:text-cyan/85" : "text-primary hover:text-brand-deep",
    className,
  );
}

/**
 * Fades and lifts its children in when they scroll into view. No-ops for
 * reduced-motion users and renders content visible without JS.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  /** Use `ul` when the children are list items, so semantics survive. */
  as?: "div" | "ul" | "dl";
  /** Stagger offset in ms — keep under ~240ms so nothing feels laggy. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * Two icon treatments only — a filled brand chip and an outlined chip.
 * Both are 44px so cards line up regardless of which one they use.
 */
export function IconChip({
  icon: Icon,
  variant = "brand",
  className,
}: {
  icon: LucideIcon;
  variant?: "brand" | "outline" | "outline-dark";
  className?: string;
}) {
  const styles = {
    brand: "bg-gradient-brand text-primary-foreground shadow-panel",
    outline: "border border-border bg-secondary text-primary",
    "outline-dark": "border border-cyan/30 bg-cyan/10 text-cyan",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 flex-none items-center justify-center rounded-sm",
        "transition-transform duration-300 ease-out motion-safe:group-hover:scale-105",
        styles,
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

/** Vertical rhythm for every section on the site. */
export function Section({
  id,
  tone = "default",
  className,
  children,
}: {
  id?: string;
  tone?: "default" | "muted" | "ink";
  className?: string;
  children: React.ReactNode;
}) {
  const toneClass = {
    default: "bg-background",
    muted: "border-y border-border bg-secondary/50",
    ink: "border-y border-ink-foreground/10 bg-ink text-ink-foreground",
  }[tone];

  return (
    <section id={id} className={cn("py-20 md:py-28 lg:py-32", toneClass, className)}>
      {children}
    </section>
  );
}

/** Standard gap between a SectionHeading and the grid beneath it. */
export const HEADING_GAP = "mt-14";
