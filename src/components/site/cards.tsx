import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { Family, Industry } from "@/data/industries";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { IconChip } from "./primitives";
import { SmartImage } from "./SmartImage";

/** Photo card used for the six families on the home page. */
export function FamilyCard({
  family,
  index,
  count,
  wide = false,
}: {
  family: Family;
  index: number;
  count: number;
  wide?: boolean;
}) {
  return (
    <Link
      to="/industries"
      hash={family.slug}
      className={cn(
        "group relative isolate flex flex-col justify-end overflow-hidden rounded-sm border border-ink-foreground/10 bg-ink text-ink-foreground shadow-panel",
        "transition-[transform,box-shadow,border-color] duration-500 ease-out hover:border-cyan/35 hover:shadow-lift",
        "motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none",
        wide ? "min-h-[26rem] lg:col-span-4" : "min-h-[22rem] lg:col-span-2",
      )}
    >
      <SmartImage
        src={family.image}
        fallbackSrc={family.fallbackImage}
        alt={`${family.name} — industrial automation by HariTech`}
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55 transition-all duration-[900ms] motion-safe:group-hover:scale-105 group-hover:opacity-75"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/15" />
      {/* Brand wash that only lights up on hover — keeps the resting grid calm. */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 brand-glow mix-blend-soft-light" />
      <span className="absolute right-7 top-7 font-display text-5xl font-bold leading-none text-ink-foreground/15 transition-colors duration-500 group-hover:text-cyan/45">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-cyan to-transparent transition-all duration-500 group-hover:h-24" />
      <div className="p-7">
        <IconChip icon={family.icon} />
        <h3 className="mt-5 font-display text-xl font-semibold">{family.name}</h3>
        <p className={cn("mt-3 text-sm leading-relaxed text-ink-muted", wide && "max-w-xl")}>
          {family.blurb}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan transition-all duration-500 group-hover:gap-3">
          {count} industries
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

/** Compact card linking to a single industry page. */
export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      to="/industries/$slug"
      params={{ slug: industry.slug }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card p-7 shadow-panel",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-primary/40 hover:shadow-lift",
        "motion-safe:hover:-translate-y-1 motion-reduce:transition-none",
      )}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
      <IconChip icon={industry.icon} variant="outline" />
      <h3 className="mt-6 font-display text-base font-semibold">{industry.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {industry.tagline}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-all group-hover:gap-3">
        View industry
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

export function ServiceCard({ service, href }: { service: Service; href?: string }) {
  const body = (
    <>
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
      <IconChip icon={service.icon} />
      <h3 className="mt-6 font-display text-base font-semibold">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
      {href && (
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-all group-hover:gap-3">
          Details
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  const className = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card p-7 shadow-panel",
    "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-none",
    href && "hover:border-primary/40 hover:shadow-lift motion-safe:hover:-translate-y-1",
  );

  return href ? (
    <a href={href} className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
