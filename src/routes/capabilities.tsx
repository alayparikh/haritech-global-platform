import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionRail } from "@/components/site/SectionRail";
import { HEADING_GAP, IconChip, Section } from "@/components/site/primitives";
import { familyBySlug } from "@/data/industries";
import { capabilities, deliveryTracks, engineeringNotes, processSteps } from "@/data/site";

export const Route = createFileRoute("/capabilities")({
  head: () =>
    seo({
      title: "Automation Capabilities & Delivery Process | HariTech",
      description:
        "Concept to commissioning, platform-agnostic PLC and SCADA integration, compliance by design, and a four-stage delivery route from assessment to lifecycle support.",
      path: "/capabilities",
    }),
  component: Capabilities,
});

const rail = [
  { id: "capabilities", label: "Capabilities" },
  { id: "process", label: "Process" },
  { id: "tracks", label: "Delivery tracks" },
  { id: "notes", label: "Engineering notes" },
];

function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Built around uptime, not deliverables."
        lede="We measure our work the way your plant does: cycle time, availability, downtime and total cost of ownership over the control system's life."
        image="/images/families/mobility-electronics.jpg"
        imageAlt="Robotic assembly line in an automotive electronics plant"
        fallbackImage={familyBySlug["mobility-electronics"].fallbackImage}
        crumbs={[{ label: "Home", to: "/" }, { label: "Capabilities" }]}
        scrollTo="capabilities"
      />

      <SectionRail sections={rail} />

      <Section id="capabilities">
        <Container>
          <SectionHeading
            eyebrow="What we bring"
            title="Four things a plant can hold us to."
            aside="Everything below is contractual, not aspirational — response times, standards and measured outcomes are written into the scope."
          />
          <div className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card p-7 shadow-panel transition-transform hover:-translate-y-1"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <IconChip icon={c.icon} />
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="process" tone="ink" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="How we deliver"
            title="A disciplined four-stage route."
            aside="The same route runs whether the job is a single retrofit or a greenfield line — only the duration changes."
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

      <Section id="notes">
        <Container>
          <SectionHeading
            eyebrow="Engineering notes"
            title="Things we keep having to explain."
            lede="Short reads on control-system migration, SCADA visibility and obsolescence planning — written by the engineers who ran into the problem."
          />
          <ul
            className={`${HEADING_GAP} grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2`}
          >
            {engineeringNotes.map((note) => (
              <li key={note} className="bg-card p-7">
                <p className="text-base font-medium leading-relaxed">{note}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
                  Available on request
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
