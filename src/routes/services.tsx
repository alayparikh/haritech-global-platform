import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  HEADING_GAP,
  IconChip,
  Reveal,
  Section,
  btn,
  textLink,
} from "@/components/site/primitives";
import { familyBySlug, industries } from "@/data/industries";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "Services — PLC, SCADA, DCS & Robotics Integration | HariTech",
      description:
        "Twelve automation packages: PLC programming, SCADA & HMI, DCS integration, robotics, control panels, instrumentation, networking, MES, migration, FAT/SAT and AMC.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow={`${services.length} service packages`}
        title="Everything the control system needs, under one contract."
        lede="Systems integrator for PLC, SCADA, DCS, HMI and robotics — delivered as standard packages or fully customised integration projects."
        image="/images/families/process-chemical.jpg"
        fallbackImage={familyBySlug["process-chemical"].fallbackImage}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        scrollTo="index"
      />

      {/* Quick index — doubles as the anchor jump target from other pages. */}
      <Section id="index" className="py-16 md:py-20">
        <Container>
          <p className="eyebrow text-primary">Jump to</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4 text-primary/70" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {services.map((service, i) => (
        <Section key={service.slug} id={service.slug} tone={i % 2 === 0 ? "muted" : "default"}>
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <IconChip icon={service.icon} />
                <h2 className="mt-6 text-3xl font-bold sm:text-4xl">{service.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>
                <Link to="/contact" className={textLink("brand", "mt-8")}>
                  Discuss this scope
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <p className="eyebrow text-muted-foreground">What's included</p>
                <ul className="mt-5 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 bg-background p-6">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{d}</span>
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-10 text-muted-foreground">Applied in</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {industries
                    .filter((ind) => ind.relatedServices.includes(service.slug))
                    .map((ind) => (
                      <li key={ind.slug}>
                        <Link
                          to="/industries/$slug"
                          params={{ slug: ind.slug }}
                          className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          <ind.icon className="h-3.5 w-3.5" />
                          {ind.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section id="all-industries" tone="ink">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Coverage"
            title="These packages run across 18 industries."
            action={
              <Link to="/industries" className={btn("onInk")}>
                Browse industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <ul
            className={`${HEADING_GAP} grid gap-px bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-3`}
          >
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: ind.slug }}
                  className="flex items-center gap-3 bg-ink p-5 text-sm text-ink-muted transition-colors hover:bg-ink-foreground/5 hover:text-cyan"
                >
                  <ind.icon className="h-4 w-4 flex-none text-cyan" />
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
