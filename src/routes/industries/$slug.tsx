import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BadgeCheck, CircleAlert } from "lucide-react";

import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import { IndustryCard } from "@/components/site/cards";
import {
  HEADING_GAP,
  IconChip,
  Reveal,
  Section,
  btn,
  textLink,
} from "@/components/site/primitives";
import { getFamily, getIndustry, industriesByFamily, industryNeighbours } from "@/data/industries";
import { projectsForIndustry } from "@/data/projects";
import { getService } from "@/data/services";

export const Route = createFileRoute("/industries/$slug")({
  // Validate only — the industry record holds icon components, which cannot be
  // serialised into the SSR payload, so the page reads it from static data.
  loader: ({ params }) => {
    if (!getIndustry(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) return {};
    return {
      meta: [
        { title: `${industry.name} — Industrial Engineering | HariTech` },
        { name: "description", content: industry.tagline },
        { property: "og:title", content: `${industry.name} | HariTech` },
        { property: "og:description", content: industry.tagline },
      ],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  const industry = getIndustry(slug);
  if (!industry) return null;

  const family = getFamily(industry.family);
  const siblings = industriesByFamily(industry.family).filter((i) => i.slug !== industry.slug);
  const relatedProjects = projectsForIndustry(industry.slug);
  const { prev, next } = industryNeighbours(industry.slug);

  return (
    <>
      <PageHero
        eyebrow={family?.name ?? "Industries"}
        title={industry.name}
        lede={industry.tagline}
        image={industry.image}
        fallbackImage={industry.fallbackImage}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: industry.name },
        ]}
        scrollTo="overview"
      />

      {/* Overview + challenges */}
      <Section id="overview">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Overview" title="What we do here" lede={industry.intro} />
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <CircleAlert className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">What this floor demands</h3>
              </div>
              <ul className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border">
                {industry.challenges.map((c) => (
                  <li key={c} className="bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions */}
      <Section id="solutions" tone="ink">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Scope"
            title="What we deliver here"
            aside="Each item below is a package we build, install and support in-house — not a subcontracted line on a quote."
          />
          <div
            className={`${HEADING_GAP} grid gap-px bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-3`}
          >
            {industry.solutions.map((s, i) => (
              <div key={s} className="flex gap-5 bg-ink p-7">
                <span className="font-display text-sm font-bold text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink-muted">{s}</p>
              </div>
            ))}
          </div>

          {industry.standards && industry.standards.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                <BadgeCheck className="h-4 w-4" />
                Standards we work to
              </span>
              {industry.standards.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-ink-foreground/15 bg-ink-foreground/[0.04] px-3 py-1.5 text-xs text-ink-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Related services */}
      <Section id="services">
        <Container>
          <SectionHeading
            eyebrow="Services applied"
            title="The packages behind this scope"
            action={
              <Link to="/services" className={btn("outline")}>
                All services
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
            {industry.relatedServices.map((slug) => {
              const service = getService(slug);
              if (!service) return null;
              return (
                <a
                  key={slug}
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-sm border border-border bg-card p-7 shadow-panel transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <IconChip icon={service.icon} />
                  <h3 className="mt-6 text-base font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-all group-hover:gap-3">
                    Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <Section id="projects" tone="muted">
          <Container>
            <SectionHeading eyebrow="Proof points" title="Comparable work we have delivered" />
            <div className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2`}>
              {relatedProjects.slice(0, 2).map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-panel"
                >
                  <SmartImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.title}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow text-primary">{project.sector}</p>
                    <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">Scope: </span>
                      {project.scope}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">Result: </span>
                      {project.outcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Siblings */}
      {siblings.length > 0 && (
        <Section id="related">
          <Container>
            <SectionHeading
              eyebrow={family?.name ?? "Related"}
              title="Others in this family"
              lede="Adjacent industries where the same engineering constraints show up."
            />
            <div className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
              {siblings.map((s) => (
                <IndustryCard key={s.slug} industry={s} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Prev / next */}
      <Container className="pb-24 md:pb-32">
        <nav className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {prev && (
            <Link
              to="/industries/$slug"
              params={{ slug: prev.slug }}
              className="group flex items-center gap-4 bg-card p-7 transition-colors hover:bg-secondary/60"
            >
              <ArrowLeft className="h-4 w-4 flex-none text-primary transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="eyebrow block text-[0.62rem] text-muted-foreground">Previous</span>
                <span className="mt-1 block font-display text-base font-semibold">{prev.name}</span>
              </span>
            </Link>
          )}
          {next && (
            <Link
              to="/industries/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-end gap-4 bg-card p-7 text-right transition-colors hover:bg-secondary/60"
            >
              <span>
                <span className="eyebrow block text-[0.62rem] text-muted-foreground">Next</span>
                <span className="mt-1 block font-display text-base font-semibold">{next.name}</span>
              </span>
              <ArrowRight className="h-4 w-4 flex-none text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </nav>
      </Container>

      <CTABand
        title={`Running a ${industry.name.toLowerCase()} operation?`}
        copy="Send a scope, a drawing or just a problem statement. An engineer who knows this floor responds within one working day."
      />
    </>
  );
}
