import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Cog,
  Truck,
  CircuitBoard,
  Milk,
  Factory,
  Sun,
  ShieldCheck,
  Gauge,
  Workflow,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Wind,
  Droplets,
  Filter,
  Wrench,
  Zap,
  Boxes,
  Target,
  Eye,
  BadgeCheck,
  Layers,
  Building2,
  Users,
} from "lucide-react";

import logo from "@/assets/haritech-logo.png.asset.json";
import heroImg from "@/assets/hero-industry.jpg";
import aboutImg from "@/assets/about-facility.jpg";
import engineeringImg from "@/assets/sector-engineering.jpg";
import supplyImg from "@/assets/sector-supplychain.jpg";
import electronicsImg from "@/assets/sector-electronics.jpg";
import dairyImg from "@/assets/sector-dairy.jpg";
import metalImg from "@/assets/sector-metal.jpg";
import renewableImg from "@/assets/sector-renewable.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HariTech — Engineering & Heavy Industries, Vadodara" },
      {
        name: "description",
        content:
          "HariTech Automations engineers HVAC&R, piping, energy, water treatment, filtration and automation systems for heavy industry — 14+ years of field experience.",
      },
      { property: "og:title", content: "HariTech — Engineering & Heavy Industries" },
      {
        property: "og:description",
        content:
          "Turnkey industrial engineering across six sectors — HVAC&R, piping, energy, water treatment, automation and material handling.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#sectors", label: "Sectors", icon: Layers },
  { href: "#capabilities", label: "Capabilities", icon: Gauge },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#about", label: "About", icon: Building2 },
  { href: "#clients", label: "Clients", icon: Users },
];

const sectors = [
  {
    title: "Engineering & Heavy Industries",
    copy: "Turnkey plant engineering, heavy fabrication and machinery integration built to withstand continuous duty cycles.",
    image: engineeringImg,
    icon: Cog,
  },
  {
    title: "Assembly & Supply Chain",
    copy: "Line design, sub-assembly programs and vendor-managed logistics that keep production flowing without buffer waste.",
    image: supplyImg,
    icon: Truck,
  },
  {
    title: "Electronics Industries",
    copy: "Controlled-environment assembly, control panels and instrumentation with full traceability at every stage.",
    image: electronicsImg,
    icon: CircuitBoard,
  },
  {
    title: "Dairy Industries",
    copy: "Hygienic stainless process lines, CIP systems and cold-chain equipment engineered to food-grade standards.",
    image: dairyImg,
    icon: Milk,
  },
  {
    title: "Metal Industries",
    copy: "Foundry support, precision machining, structural fabrication and surface treatment at industrial volume.",
    image: metalImg,
    icon: Factory,
  },
  {
    title: "Renewable Industries",
    copy: "Solar and wind balance-of-plant, energy retrofits and efficiency programs that cut industrial load and cost.",
    image: renewableImg,
    icon: Sun,
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Concept to commissioning",
    copy: "One accountable team from feasibility studies and design through installation, validation and handover.",
  },
  {
    icon: Gauge,
    title: "Uptime engineering",
    copy: "Preventive maintenance regimes, spares strategy and condition monitoring designed around your OEE targets.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance by design",
    copy: "Safety, food-grade and electrical standards embedded into drawings, not retrofitted after inspection.",
  },
  {
    icon: Globe2,
    title: "Multi-sector sourcing",
    copy: "A qualified supplier network spanning metals, electronics and process equipment across India and overseas.",
  },
];

const services = [
  { icon: Wind, title: "HVAC & R Systems", copy: "Air handling units, chillers, clean-room and refrigeration systems sized to real plant load." },
  { icon: Droplets, title: "Water Treatment", copy: "RO, ETP, STP and process water systems with reuse and discharge compliance built in." },
  { icon: Wind, title: "Exhaust Ventilation", copy: "Fume, dust and heat extraction designed for operator safety and statutory limits." },
  { icon: Filter, title: "Industrial Filtration", copy: "All types of industrial filter systems for air, liquid and process streams." },
  { icon: Wrench, title: "Piping Projects", copy: "Gas, water, air and fire line piping — fabrication, erection, testing and certification." },
  { icon: Zap, title: "Energy Projects", copy: "Energy audits, heat recovery and efficiency retrofits that pay back in operating cost." },
  { icon: Cog, title: "Automations", copy: "PLC, SCADA and control panel automation for process lines and utility plants." },
  { icon: Boxes, title: "Material Handling", copy: "Conveyors, crates, bins and racking systems engineered around your floor layout." },
];

const clients = [
  "JCB", "Reliance", "Torrent Power", "ENPAY", "L&T", "Hitachi", "Schneider Electric",
  "NTPC", "ONGC", "Hero", "Sanghi Cement", "TATA", "Amul", "Mother Dairy",
  "Xylem", "Essar", "Zydex", "FAG", "Nikkiso Cosmodyne", "LM Wind Power",
  "Banco Products", "Time Technoplast", "Claris", "DSM", "Alleima", "Bray",
  "Kömmerling", "Lucas-TVS", "Cadila Pharmaceuticals", "Jyoti", "ITT", "Chemco",
];

const stats = [
  { value: "14+", label: "Years serving industry" },
  { value: "6", label: "Industrial sectors served" },
  { value: "400+", label: "Projects commissioned" },
  { value: "99.2%", label: "Delivered uptime target" },
];

const principles = [
  {
    icon: Target,
    title: "Mission",
    copy: "A lean, cost-efficient service organisation built on product reliability — surpassing customer expectations of quality and delivery through sustainable processes and an empowered team.",
  },
  {
    icon: Eye,
    title: "Vision",
    copy: "To be a customer-oriented, environment-friendly benchmark for power-train service, execution and solution delivery.",
  },
  {
    icon: BadgeCheck,
    title: "Quality policy",
    copy: "Continual improvement of a well-defined quality management system, innovative process approaches, and recognition worldwide for premium quality, reliability and durability.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src={logo.url} alt="HariTech logo" className="h-10 w-auto" width={200} height={60} />
          </a>
          <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative inline-flex items-center gap-2 px-3 py-2 transition-colors hover:text-foreground"
              >
                <l.icon className="h-4 w-4 text-primary/70 transition-all duration-300 group-hover:text-primary" />
                {l.label}
                <span className="pointer-events-none absolute inset-x-3 bottom-0 h-px origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-sm bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Talk to engineering
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-6 pb-6 pt-2 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 border-b border-border/60 py-3 text-sm font-medium text-foreground"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-secondary text-primary">
                      <l.icon className="h-4 w-4" />
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Talk to engineering
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-ink">
          <img
            src={heroImg}
            alt="Robotic assembly cell inside a heavy engineering facility"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-ink opacity-80" />
          <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-28 md:pb-40 md:pt-36">
            <div className="max-w-3xl rise">
              <p className="eyebrow text-cyan">14+ years · Vadodara, India</p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-6xl md:text-7xl">
                Industrial systems engineered for the long shift.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
                HariTech designs, builds and maintains production infrastructure across heavy engineering,
                supply chain, electronics, dairy, metal and renewable industries — with a single team
                accountable from drawing to commissioning.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#sectors"
                  className="inline-flex items-center gap-2 rounded-sm border border-ink-muted/40 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  Explore our sectors
                </a>
              </div>
            </div>
          </div>
          <div className="relative border-t border-ink-foreground/10">
            <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-foreground/10 px-0 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink px-6 py-8">
                  <dt className="font-display text-3xl font-bold text-cyan md:text-4xl">{s.value}</dt>
                  <dd className="mt-2 text-sm text-ink-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Sectors */}
        <section id="sectors" className="relative py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-primary">Industries we power</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Six sectors. One engineering standard.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Every mandate is scoped by engineers who have run the floor — so specifications survive
                contact with real production conditions.
              </p>
            </div>

            <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-5 md:grid-cols-2 lg:grid-cols-6">
              {sectors.map((sector, i) => {
                const wide = i === 0 || i === 3;
                return (
                  <article
                    key={sector.title}
                    className={`group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-sm border border-border/70 bg-ink text-ink-foreground shadow-panel transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
                      wide ? "lg:col-span-4" : "lg:col-span-2"
                    }`}
                  >
                    <img
                      src={sector.image}
                      alt={sector.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55 transition-all duration-[900ms] group-hover:scale-105 group-hover:opacity-70"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
                    <span className="absolute right-5 top-5 font-display text-5xl font-bold leading-none text-ink-foreground/15 transition-colors duration-500 group-hover:text-cyan/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-cyan to-transparent" />
                    <div className="p-7">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-brand text-primary-foreground shadow-panel transition-transform duration-500 group-hover:-translate-y-1">
                        <sector.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold">{sector.title}</h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed text-ink-muted ${wide ? "max-w-xl" : ""}`}
                      >
                        {sector.copy}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Talk to an engineer
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="relative overflow-hidden bg-ink py-24 md:py-32">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-cyan">Capabilities</p>
                <h2 className="mt-4 text-3xl font-bold text-ink-foreground sm:text-5xl">
                  Built around throughput, not deliverables.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                We measure our work the way your plant does: cycle time, yield, downtime and total cost
                of ownership over the asset's life.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c, i) => (
                <div
                  key={c.title}
                  className="group relative overflow-hidden bg-ink p-8 transition-colors duration-500 hover:bg-ink-foreground/5"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-cyan/30 bg-cyan/10 text-cyan transition-colors duration-500 group-hover:bg-cyan group-hover:text-ink">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-ink-muted/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-base font-semibold text-ink-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-primary">Services & solutions</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Everything the plant needs, under one contract.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Manufacturer, supplier, service and solution provider for utility and process systems —
                delivered as standard packages or fully customised engineering projects.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-sm border border-border bg-card p-7 shadow-panel transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-brand text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-base font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Technicians assembling precision machinery on a production line"
                loading="lazy"
                width={1200}
                height={900}
                className="rounded-sm object-cover shadow-lift"
              />
              <div className="absolute -bottom-8 -right-4 hidden rounded-sm bg-gradient-brand p-7 text-primary-foreground shadow-lift sm:block">
                <p className="font-display text-4xl font-bold">14+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-90">Years on the floor</p>
              </div>
            </div>
            <div>
              <p className="eyebrow text-primary">Who we are</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                An engineering partner, not a vendor.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                HariTech is a manufacturer and service provider for HVAC&amp;R systems, piping projects
                (gas, water, air and fire lines), energy projects, water treatment, structural work,
                ventilation, filtration, automation and material handling — backed by a team with more
                than 14 years of experience.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our range is built to industry quality standards, with sturdy construction and energy
                efficiency tuned to each client's need. From a single retrofit to a greenfield line, our
                teams stay on site until output is stable and your people can run it without us.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "In-house design, fabrication and automation teams",
                  "Qualified sourcing across Indian and overseas markets",
                  "Lifecycle service contracts with guaranteed response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gradient-brand" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="rounded-sm border border-border bg-secondary/50 p-8">
                <p.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="border-y border-border bg-secondary/60 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-primary">Esteemed customers</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Trusted on demanding floors.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A partial list of the organisations whose plants, utilities and process lines we have
                engineered, supplied or serviced.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
              {clients.map((c) => (
                <div
                  key={c}
                  className="flex min-h-20 items-center justify-center bg-card px-4 py-6 text-center text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-primary">How we deliver</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">A disciplined four-stage route.</h2>
            </div>
            <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Assess", d: "Site survey, load studies and constraint mapping before a single line is drawn." },
                { n: "02", t: "Engineer", d: "Detailed design, simulation and costed BOM with alternatives you can actually compare." },
                { n: "03", t: "Build", d: "Fabrication, assembly and factory acceptance testing under our own quality regime." },
                { n: "04", t: "Sustain", d: "Commissioning, operator training and long-term maintenance with measured KPIs." },
              ].map((step) => (
                <li key={step.n} className="border-t-2 border-primary/70 pt-6">
                  <span className="font-display text-sm font-bold text-primary">{step.n}</span>
                  <h3 className="mt-3 text-xl font-semibold">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-sm bg-gradient-brand px-8 py-16 shadow-lift md:px-16 md:py-20">
              <div className="relative grid gap-12 lg:grid-cols-2">
                <div className="text-primary-foreground">
                  <p className="eyebrow opacity-80">Let's build</p>
                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    Tell us what needs to run better.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed opacity-90">
                    Send a scope, a drawing or just a problem statement. An engineer — not a
                    salesperson — responds within one working day.
                  </p>
                  <div className="mt-10 space-y-5 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 flex-none opacity-80" />
                      <span>
                        <a href="mailto:info@haritatechnology.com" className="block hover:underline">
                          info@haritatechnology.com
                        </a>
                        <a href="mailto:enquiry@haritatechnology.com" className="block hover:underline">
                          enquiry@haritatechnology.com
                        </a>
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 flex-none opacity-80" />
                      <span>
                        <a href="tel:+919825743029" className="block hover:underline">+91 98257 43029</a>
                        <a href="tel:+917802058470" className="block hover:underline">+91 78020 58470</a>
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-none opacity-80" />
                      <address className="not-italic leading-relaxed">
                        Haritech Automations Pvt. Ltd.
                        <br />
                        TF14, VR One, Opp. L&amp;T Knowledge City
                        <br />
                        NH 48, Between Ajwa-Waghodia Crossing
                        <br />
                        Vadodara, Gujarat, India-390019
                      </address>
                    </div>
                  </div>
                </div>

                <form
                  className="space-y-4 rounded-sm bg-background p-8 shadow-panel"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="font-medium">Name</span>
                      <input
                        type="text"
                        required
                        className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="font-medium">Company</span>
                      <input
                        type="text"
                        className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                      />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="font-medium">Email</span>
                      <input
                        type="email"
                        required
                        className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="font-medium">Mobile</span>
                      <input
                        type="tel"
                        className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                      />
                    </label>
                  </div>
                  <label className="block text-sm">
                    <span className="font-medium">Sector</span>
                    <select className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30">
                      {sectors.map((s) => (
                        <option key={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium">Project details</span>
                    <textarea
                      rows={4}
                      className="mt-2 w-full resize-none rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-opacity hover:opacity-90"
                  >
                    Send enquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-ink py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src={logo.url}
              alt="HariTech logo"
              loading="lazy"
              width={200}
              height={60}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm text-ink-muted">
              Engineering, heavy industries and industrial supply chain solutions. Serving industry for
              over 14 years from Vadodara, Gujarat.
            </p>
          </div>
          <div className="text-sm text-ink-muted">
            <p className="font-semibold text-ink-foreground">Haritech Automations Pvt. Ltd.</p>
            <address className="mt-2 not-italic leading-relaxed">
              TF14, VR One, Opp. L&amp;T Knowledge City
              <br />
              NH 48, Between Ajwa-Waghodia Crossing
              <br />
              Vadodara, Gujarat, India-390019
            </address>
            <p className="mt-3">+91 98257 43029 · +91 78020 58470</p>
            <p>info@haritatechnology.com</p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-ink-muted">
            {navLinks.concat({ href: "#contact", label: "Contact", icon: Mail }).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-2.5 transition-colors hover:text-ink-foreground"
              >
                <l.icon className="h-4 w-4 text-cyan/70 transition-colors group-hover:text-cyan" />
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-ink-foreground/10 px-6 pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} Haritech Automations Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
