import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import {
  HEADING_GAP,
  IconChip,
  Reveal,
  Section,
  btn,
  textLink,
} from "@/components/site/primitives";
import { familyBySlug, getIndustry } from "@/data/industries";
import { projects } from "@/data/projects";
import { deliveryTracks, processSteps } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () =>
    seo({
      title: "Automation Projects & Delivery Tracks | HariTech",
      description:
        "Proof points across design, panels and integration — PLC and SCADA migrations, batch automation and plant monitoring delivered by HariTech from Vadodara.",
      path: "/projects",
    }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof points across design, panels and integration."
        lede="A selection of the work behind the capability statement — what was scoped, what was built and what changed on the control system afterwards."
        image="/images/families/heavy-engineering-metals.jpg"
        fallbackImage={familyBySlug["heavy-engineering-metals"].fallbackImage}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        scrollTo="work"
      />

      <Section id="work">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Scoped, built and commissioned."
            aside="Client names are withheld where the engagement is under NDA. We can walk you through comparable work on a call."
          />
          <div className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
            {projects.map((project) => (
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
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Result: </span>
                    {project.outcome}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                    {project.industries.slice(0, 3).map((slug) => {
                      const ind = getIndustry(slug);
                      if (!ind) return null;
                      return (
                        <li key={slug}>
                          <Link
                            to="/industries/$slug"
                            params={{ slug }}
                            className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                          >
                            <ind.icon className="h-3 w-3" />
                            {ind.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="tracks" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Delivery tracks"
            title="Four ways we get engaged."
            lede="Most clients start on one track and expand into the others once the first system is running."
          />
          <div
            className={`${HEADING_GAP} grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4`}
          >
            {deliveryTracks.map((track) => (
              <div key={track.title} className="flex flex-col bg-background p-7">
                <IconChip icon={track.icon} variant="outline" />
                <h3 className="mt-6 text-lg font-semibold">{track.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{track.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="route" tone="ink" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="How each one ran"
            title="The same four-stage route, every time."
            action={
              <Link to="/capabilities" className={btn("onInk")}>
                Our capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <ol className={`${HEADING_GAP} grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
            {processSteps.map((step) => (
              <li key={step.n} className="border-t-2 border-cyan/70 pt-6">
                <span className="font-display text-sm font-bold text-cyan">{step.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-foreground">
                  {step.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CTABand
        title="Have a scope that looks like one of these?"
        copy="Send the drawing or the problem statement. We will tell you what it takes and what it costs to run."
      />
    </>
  );
}
