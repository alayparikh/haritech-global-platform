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
      { title: "HariTech — Engineering & Heavy Industries" },
      {
        name: "description",
        content:
          "HariTech engineers heavy industry, assembly supply chain, electronics, dairy, metal and renewable systems. Intense to high impact.",
      },
      { property: "og:title", content: "HariTech — Engineering & Heavy Industries" },
      {
        property: "og:description",
        content:
          "Precision engineering and turnkey industrial systems across six sectors, built for uptime and scale.",
      },
    ],
  }),
  component: Index,
});

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
    copy: "Controlled-environment PCB assembly, control panels and instrumentation with full traceability at every stage.",
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
    copy: "One accountable team from feasibility studies and CAD through installation, validation and handover.",
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
    copy: "A qualified supplier network spanning metals, electronics and process equipment across regions.",
  },
];

const stats = [
  { value: "6", label: "Industrial sectors served" },
  { value: "18+", label: "Years of field engineering" },
  { value: "400+", label: "Projects commissioned" },
  { value: "99.2%", label: "Delivered uptime target" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src={logo.url} alt="HariTech logo" className="h-10 w-auto" width={200} height={60} />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#sectors" className="transition-colors hover:text-foreground">Sectors</a>
            <a href="#capabilities" className="transition-colors hover:text-foreground">Capabilities</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5"
          >
            Talk to engineering
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
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
              <p className="eyebrow text-cyan">Intense to high impact</p>
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

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector) => (
                <article
                  key={sector.title}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-ink opacity-30" />
                    <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-brand text-primary-foreground shadow-panel">
                      <sector.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-semibold">{sector.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sector.copy}</p>
                  </div>
                </article>
              ))}
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
              {capabilities.map((c) => (
                <div key={c.title} className="bg-ink p-8 transition-colors hover:bg-ink-foreground/5">
                  <c.icon className="h-7 w-7 text-cyan" />
                  <h3 className="mt-6 text-base font-semibold text-ink-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 md:py-32">
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
                <p className="font-display text-4xl font-bold">18+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-90">Years on the floor</p>
              </div>
            </div>
            <div>
              <p className="eyebrow text-primary">Who we are</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                An engineering partner, not a vendor.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                HariTech was founded by process and mechanical engineers who spent their careers
                commissioning plants. That origin still shapes how we work — pragmatic specifications,
                honest lead times, and hardware chosen for serviceability over spec-sheet gloss.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From a single retrofit to a greenfield line, our teams stay on site until output is
                stable and your people can run it without us.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "In-house design, fabrication and automation teams",
                  "Qualified multi-region sourcing and expediting",
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
        </section>

        {/* Process */}
        <section id="process" className="border-y border-border bg-secondary/60 py-24 md:py-32">
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
        <section id="contact" className="py-24 md:py-32">
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
                  <div className="mt-10 space-y-4 text-sm">
                    <p className="flex items-center gap-3">
                      <Mail className="h-4 w-4 opacity-80" /> projects@haritech.com
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="h-4 w-4 opacity-80" /> +1 (555) 018-4420
                    </p>
                    <p className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 opacity-80" /> Industrial Park East, Sector 7
                    </p>
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
                  <label className="block text-sm">
                    <span className="font-medium">Email</span>
                    <input
                      type="email"
                      required
                      className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </label>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
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
              Engineering, heavy industries and industrial supply chain solutions. Intense to high impact.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
            <a href="#sectors" className="transition-colors hover:text-ink-foreground">Sectors</a>
            <a href="#capabilities" className="transition-colors hover:text-ink-foreground">Capabilities</a>
            <a href="#about" className="transition-colors hover:text-ink-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-ink-foreground">Contact</a>
          </nav>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-ink-foreground/10 px-6 pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} HariTech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
