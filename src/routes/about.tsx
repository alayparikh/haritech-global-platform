import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Globe2, Phone } from "lucide-react";

import aboutImg from "@/assets/about-facility.jpg";
import ventureImg from "@/assets/venture-flags.jpg";
import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { ClientMarqueeWall } from "@/components/site/ClientLogos";
import { PageHero } from "@/components/site/PageHero";
import { Portrait } from "@/components/site/Portrait";
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
import { company, leadership, principles } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HariTech — Systems Integrator, Not a Vendor" },
      {
        name: "description",
        content:
          "HariTech Automations, Vadodara: a USA–India joint venture, 22+ years integrating PLC, SCADA, DCS, HMI, robotics and control-panel automation systems.",
      },
    ],
  }),
  component: About,
});

const rail = [
  { id: "story", label: "Who we are" },
  { id: "venture", label: "Joint venture" },
  { id: "leadership", label: "Leadership" },
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
    title: "Integration and execution",
    copy: "In-house panel build, programming and a service team on the ground — engineering, integrating and commissioning without a middle layer.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A systems integrator, not a vendor."
        lede="A USA–India joint venture with twenty-two years of integrating, commissioning and maintaining industrial control systems — the same team on site until the system is stable and your people can run it without us."
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
                eyebrow="The company"
                title="Haritech Automations Pvt. Ltd."
                lede="HariTech is a systems integrator for PLC, SCADA, DCS, HMI, robotics and control-panel automation — backed by a team with more than 22 years of experience."
              />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our integration work is built to industry standards, platform-agnostic across
                major PLC and SCADA vendors, and tuned to each client's existing systems. From a
                single controller migration to a greenfield line, our teams stay on site until the
                system is stable and your people can run it without us.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "In-house control engineering and panel-build teams",
                  "Platform-agnostic across major PLC and SCADA vendors",
                  "Lifecycle AMC contracts with guaranteed response",
                  "Engineers who understand production, not just logic diagrams",
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

      <Section id="venture" tone="ink" className="relative isolate overflow-hidden">
        <img
          src={ventureImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1087}
          height={650}
          // Background only from md up. On a narrow, tall band `cover` crops so
          // hard that the flags become colour blur, so small screens get the
          // in-flow banner below instead.
          className="absolute inset-0 -z-10 hidden h-full w-full object-cover md:block"
        />
        {/* Even, light scrim only. An earlier left-heavy gradient sat exactly
            over the Indian flag and crushed it; contrast for the type is
            handled by the panels below instead, so both flags stay bright. */}
        <div className="absolute inset-0 -z-10 bg-ink/25" />
        {/* Seams into the light sections above and below. */}
        <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink/70 to-transparent" />

        <Container className="relative">
          <img
            src={ventureImg}
            alt="The flags of India and the United States"
            loading="lazy"
            width={1087}
            height={650}
            className="mb-6 aspect-[16/9] w-full rounded-sm border border-ink-foreground/15 object-cover shadow-lift md:hidden"
          />

          {/* The heading carries its own plate rather than darkening the whole
              band — white type would otherwise land on the flag's white
              stripes, which is the one place it cannot be read. */}
          <div className="max-w-4xl rounded-sm bg-ink/80 p-8 shadow-lift backdrop-blur-md md:p-10">
            <SectionHeading
              tone="dark"
              eyebrow="Two countries, one team"
              title={`${company.venture.long}.`}
              aside={company.venture.copy}
            />
          </div>

          <Reveal className="mt-6 grid gap-6 md:grid-cols-2">
            {ventureSides.map((side) => (
              <div
                key={side.place}
                className="group flex flex-col rounded-sm bg-ink/80 p-8 shadow-lift backdrop-blur-md md:p-10"
              >
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

      <Section id="leadership">
        <Container>
          <SectionHeading eyebrow="Leadership" title="Who you will actually be dealing with." />
          <div className={`${HEADING_GAP} grid items-start gap-10 lg:grid-cols-12 lg:gap-14`}>
            <div className="lg:col-span-4">
              <Portrait name={leadership.name} className="mx-auto max-w-sm lg:mx-0" />
            </div>

            {/* Stops short of col 12 to keep the measure readable — a full
                eight columns runs past 110 characters a line. */}
            <div className="lg:col-span-7 xl:col-span-6">
              <h3 className="font-display text-3xl font-bold">{leadership.name}</h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="font-semibold text-primary">{leadership.role}</span>
                <span aria-hidden="true" className="text-border">
                  |
                </span>
                <span>{leadership.location}</span>
              </p>

              <blockquote className="mt-8 border-l-2 border-primary/40 pl-6">
                <p className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  “{leadership.quote}”
                </p>
              </blockquote>

              {leadership.bio.map((para) => (
                <p key={para} className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}

              <div className="mt-9 flex flex-wrap gap-3">
                <a href={leadership.phone.href} className={btn("outline")}>
                  <Phone className="h-4 w-4" />
                  {leadership.phone.display}
                </a>
                <Link to="/contact" className={btn("brand")}>
                  Talk to engineering
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
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
            title="Trusted on demanding control systems."
            lede="A partial list of the organisations whose plants, lines and process systems we have automated, integrated or serviced."
          />
          <ClientMarqueeWall clients={clients} className={HEADING_GAP} />
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
