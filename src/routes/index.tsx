import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-industry.jpg";
import aboutImg from "@/assets/about-facility.jpg";

import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { ClientStrip } from "@/components/site/ClientLogos";
import { ScrollCue } from "@/components/site/ScrollCue";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import { StatStrip } from "@/components/site/StatStrip";
import { VentureBadge } from "@/components/site/VentureBadge";
import { FamilyCard, ServiceCard } from "@/components/site/cards";
import {
  HEADING_GAP,
  IconChip,
  Reveal,
  Section,
  btn,
  textLink,
} from "@/components/site/primitives";
import { families, industriesByFamily } from "@/data/industries";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { capabilities } from "@/data/site";
import { clients } from "@/data/clients";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "HariTech — Industrial Automation Systems Integrator, Vadodara",
      description:
        "HariTech Automations — a USA–India joint venture — integrates PLC, SCADA, DCS, HMI and robotics across 18 industries. 22+ years of field experience, Vadodara.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Robotic assembly cell inside a heavy engineering facility"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        {/* Layered depth: ink base → brand light source → measurement grid.
            Each layer is cheap (no blur filters) so the hero still paints fast. */}
        <div className="absolute inset-0 bg-gradient-ink opacity-[0.88]" />
        <div className="absolute inset-0 brand-glow opacity-45 mix-blend-soft-light" />
        <div className="absolute inset-0 grid-lines opacity-[0.18]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

        <Container className="relative pb-16 pt-24 md:pb-20 md:pt-32">
          <div className="max-w-3xl motion-safe:rise">
            <div className="flex flex-wrap items-center gap-3">
              <VentureBadge />
              <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                <span className="eyebrow text-[0.65rem] text-cyan">22+ years of experience</span>
              </p>
            </div>
            <h1 className="mt-7 text-hero font-bold text-ink-foreground">
              Automation systems integrated for the long shift.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
              HariTech integrates PLC, SCADA, DCS, HMI and robotics across 18 industries — from
              heavy engineering and metals to pharma, petrochemical, solar and water treatment —
              with a single team accountable from control philosophy to commissioning.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className={btn("brand", "lg")}>
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/industries" className={btn("onInk", "lg")}>
                Explore 18 industries
              </Link>
            </div>
          </div>
          <div className="mt-12 flex justify-center md:mt-14">
            <ScrollCue targetId="families" />
          </div>
        </Container>
        <StatStrip />
      </section>

      {/* Industry families */}
      <Section id="families">
        <Container>
          <SectionHeading
            eyebrow="Industries we power"
            title="Eighteen industries. One integration standard."
            lede="Every mandate is scoped by engineers who understand control systems — so control philosophy survives contact with real production conditions."
            action={
              <Link to="/industries" className={btn("outline")}>
                View all industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <Reveal className={`${HEADING_GAP} grid gap-5 md:grid-cols-2 lg:grid-cols-6`}>
            {families.map((family, i) => (
              <FamilyCard
                key={family.slug}
                family={family}
                index={i}
                count={industriesByFamily(family.slug).length}
                wide={i === 0 || i === 3 || i === 4}
              />
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Capabilities teaser */}
      <Section id="capabilities" tone="ink" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Capabilities"
            title="Built around throughput, not deliverables."
            aside="We measure our work the way your plant does: cycle time, yield, downtime and total cost of ownership over the asset's life."
          />
          <Reveal
            className={`${HEADING_GAP} grid gap-px bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4`}
          >
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="group relative flex flex-col overflow-hidden bg-ink p-8 transition-colors duration-500 hover:bg-ink-foreground/5"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <IconChip icon={c.icon} variant="outline-dark" />
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-ink-muted/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-base font-semibold text-ink-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.copy}</p>
              </div>
            ))}
          </Reveal>
          <div className="mt-10">
            <Link to="/capabilities" className={textLink("cyan")}>
              How we deliver, end to end
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Services teaser */}
      <Section id="services">
        <Container>
          <SectionHeading
            eyebrow="Services & solutions"
            title="Everything the control system needs, under one contract."
            lede="Systems integrator for PLC, SCADA, DCS, HMI and robotics — delivered as standard packages or fully customised integration projects."
            action={
              <Link to="/services" className={btn("outline")}>
                All {services.length} services
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <Reveal className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} service={s} href={`/services#${s.slug}`} />
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Projects teaser */}
      <Section id="projects" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Proof points across design, products and execution."
            action={
              <Link to="/projects" className={btn("outline")}>
                See all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <Reveal className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2`}>
            {projects.slice(0, 2).map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-panel transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-105"
                  />
                  {/* Sector label sits on the image so the card leads with
                      context instead of a bare photo. */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-12">
                    <p className="eyebrow text-cyan">{project.sector}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="eyebrow text-[0.62rem] text-muted-foreground">Scope</dt>
                      <dd className="mt-1.5 text-muted-foreground">{project.scope}</dd>
                    </div>
                    <div className="border-t border-border pt-3">
                      <dt className="eyebrow text-[0.62rem] text-primary">Outcome</dt>
                      <dd className="mt-1.5 text-foreground/85">{project.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* About strip */}
      <Section id="about">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div className="relative pb-10 lg:pb-0">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lift">
                <img
                  src={aboutImg}
                  alt="Engineers programming a control panel on a production line"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-6 rounded-sm bg-gradient-brand p-7 text-primary-foreground shadow-lift sm:right-8 lg:-bottom-8">
                <p className="font-display text-4xl font-bold">22+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-90">
                  Years in automation
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="A systems integrator, not a vendor."
                lede="HariTech is a systems integrator for PLC, SCADA, DCS, HMI, robotics and control-panel automation — backed by a team with more than 22 years of experience."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "In-house control engineering and panel-build teams",
                  "Platform-agnostic across major PLC and SCADA vendors",
                  "Lifecycle AMC contracts with guaranteed response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-brand" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className={textLink("brand", "mt-9")}>
                More about HariTech
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Clients teaser */}
      <Section id="clients" tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Esteemed customers"
            title="Trusted on demanding control systems."
            lede="A partial list of the organisations whose plants, lines and process systems we have automated, integrated or serviced."
            action={
              <Link to="/about" hash="clients" className={btn("outline")}>
                See the full list
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <Reveal
            className={`${HEADING_GAP} overflow-hidden rounded-sm border border-border bg-border`}
          >
            <ClientStrip clients={clients} />
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
