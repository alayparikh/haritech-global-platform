import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { Container } from "./Container";
import { ScrollCue } from "./ScrollCue";
import { SmartImage } from "./SmartImage";
import { VentureBadge } from "./VentureBadge";

export type Crumb = { label: string; to?: string };

/**
 * Compact hero for every interior page. Keeps h1 scale, breadcrumb position
 * and scroll cue identical across routes.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  fallbackImage,
  crumbs = [],
  scrollTo,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  fallbackImage?: string;
  crumbs?: Crumb[];
  /** id of the first content section — renders the scroll cue when provided. */
  scrollTo?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {image && (
        <SmartImage
          src={image}
          fallbackSrc={fallbackImage}
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      )}
      <div className="absolute inset-0 bg-gradient-ink opacity-85" />

      <Container className="relative pb-20 pt-16 md:pb-28 md:pt-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-cyan">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink-foreground/80">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl motion-safe:rise">
          {/* Runs on every interior page, so the joint venture is stated
              wherever a visitor lands — not only on the home page. */}
          <VentureBadge className="mb-6" />
          <p className="eyebrow text-cyan">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-ink-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {lede}
            </p>
          )}
          {children}
        </div>

        {scrollTo && (
          <div className="mt-14 flex justify-center md:mt-16">
            <ScrollCue targetId={scrollTo} />
          </div>
        )}
      </Container>
    </section>
  );
}
