import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Globe2 } from "lucide-react";

import aboutImg from "@/assets/about-facility.jpg";
import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { ClientWall } from "@/components/site/ClientLogos";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionRail } from "@/components/site/SectionRail";
import {
  HEADING_GAP,
  IconChip,
  Reveal,
  Section,
  btn,
  textLink,
} from "@/components/site/primitives";
import { clients } from "@/data/clients";
import { familyBySlug } from "@/data/industries";
import { company, principles } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HariTech — Engineering Partner, Not a Vendor" },
      {
        name: "description",
        content:
          "HariTech Automations, Vadodara: a USA–India joint venture, 22+ years engineering HVAC&R, piping, energy, water treatment, structural, ventilation, filtration, automation and material handling systems.",
      },
    ],
  }),
  component: About,
});

const rail = [
  { id: "story", label: "Who we are" },
  { id: "venture", label: "Joint venture" },
  { id: "principles", label: "Principles" },
  { id: "clients", label: "Customers" },
];

/** What each side of the joint venture brings to a mandate. */
const ventureSides = [
  {
    icon: Globe2,
    place: "United States",
    title: "Engineering governance",
    copy: "Specifications, design review and documentation held to international standards, so audits and overseas stakeholders see work they recognise.",
  },
  {
    icon: Factory,
    place: "India · Vadodara",
    title: "Manufacturing and execution",
    copy: "In-house fabrication, automation and a service team on the ground — sourcing, building and commissioning without a middle layer.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="An engineering partner, not a vendor."
        lede="A USA–India joint venture with twenty-two years of building, commissioning and maintaining industrial utility systems — the same team on site until output is stable and your people can run it without us."
        image="/images/families/food-dairy-lifesciences.jpg"
        fallbackImage={familyBySlug["food-dairy-lifesciences"].fallbackImage}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        scrollTo="story"
      />

      <SectionRail sections={rail} />

      <Section id="story">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div className="relative pb-10 lg:pb-0">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lift">
                <img
                  src={aboutImg}
                  alt="Technicians assembling precision machinery on a production line"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-6 rounded-sm bg-gradient-brand p-7 text-primary-foreground shadow-lift sm:right-8 lg:-bottom-8">
                <p className="font-display text-4xl font-bold">22+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-90">
                  Years on the floor
                </p>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="The company"
                title="Haritech Automations Pvt. Ltd."
                lede="HariTech is a manufacturer and service provider for HVAC&R systems, piping projects (gas, water, air and fire lines), energy projects, water treatment, structural work, ventilation, filtration, automation and material handling — backed by a team with more than 22 years of experience."
              />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our range is built to industry quality standards, with sturdy construction and
                energy efficiency tuned to each client's need. From a single retrofit to a
                greenfield line, our teams stay on site until output is stable and your people can
                run it without us.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "In-house design, fabrication and automation teams",
                  "Qualified sourcing across Indian and overseas markets",
                  "Lifecycle service contracts with guaranteed response",
                  "Engineers who have run production, not just specified it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-brand" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/capabilities" className={textLink("brand", "mt-9")}>
                How we deliver
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="venture" tone="ink" className="relative overflow-hidden">
        <div className="absolute inset-0 brand-glow opacity-30 mix-blend-soft-light" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Two countries, one team"
            title={`${company.venture.long}.`}
            aside={company.venture.copy}
          />
          <Reveal className={`${HEADING_GAP} grid gap-px bg-ink-foreground/10 md:grid-cols-2`}>
            {ventureSides.map((side) => (
              <div key={side.place} className="group flex flex-col bg-ink p-8 md:p-10">
                <IconChip icon={side.icon} variant="outline-dark" />
                <p className="eyebrow mt-6 text-cyan">{side.place}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-foreground">
                  {side.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{side.copy}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section id="principles" tone="muted">
        <Container>
          <SectionHeading eyebrow="What we hold to" title="Mission, vision and quality policy." />
          <div className={`${HEADING_GAP} grid gap-6 md:grid-cols-3`}>
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-sm border border-border bg-background p-8"
              >
                <IconChip icon={p.icon} variant="outline" />
                <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="clients">
        <Container>
          <SectionHeading
            eyebrow="Esteemed customers"
            title="Trusted on demanding floors."
            lede="A partial list of the organisations whose plants, utilities and process lines we have engineered, supplied or serviced."
          />
          <ClientWall clients={clients} className={HEADING_GAP} />
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
