import {
  Boxes,
  Cog,
  Droplets,
  Filter,
  Gauge,
  HardHat,
  Sparkles,
  Users,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  copy: string;
  /** Longer detail, shown on /services. */
  detail: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "hvac-r",
    icon: Wind,
    title: "HVAC & R Systems",
    copy: "Air handling units, chillers, clean-room and refrigeration systems sized to real plant load.",
    detail:
      "We size to measured load rather than nameplate, which is usually the difference between a system that holds its setpoint in May and one that does not. Selection, installation, balancing and commissioning are all in scope.",
    deliverables: [
      "Heat load surveys and psychrometric calculations",
      "AHU, chiller, cold room and refrigeration package supply",
      "Duct fabrication, erection, insulation and air balancing",
      "Controls, interlocks and commissioning reports",
    ],
  },
  {
    slug: "water-treatment",
    icon: Droplets,
    title: "Water Treatment",
    copy: "RO, ETP, STP and process water systems with reuse and discharge compliance built in.",
    detail:
      "Treatment plants designed around your actual influent, with reuse loops wherever the consent conditions and the economics allow. We stay involved after handover through AMC on media, membranes and dosing.",
    deliverables: [
      "Influent characterisation and treatment scheme design",
      "RO, ETP, STP and process water plant supply and erection",
      "Dosing, instrumentation and online compliance monitoring",
      "Sludge handling and reuse or ZLD integration",
    ],
  },
  {
    slug: "exhaust-ventilation",
    icon: Wind,
    title: "Exhaust Ventilation",
    copy: "Fume, dust and heat extraction designed for operator safety and statutory limits.",
    detail:
      "Capture at source, sized for the worst hour of the shift. We design hoods and ducting around how operators actually work, so the system is used rather than switched off.",
    deliverables: [
      "Capture velocity studies and hood design",
      "Fume, weld, solder and heat extraction systems",
      "Corrosion- and abrasion-rated ducting",
      "Scrubbers, stacks and emission-compliance testing",
    ],
  },
  {
    slug: "industrial-filtration",
    icon: Filter,
    title: "Industrial Filtration",
    copy: "All types of industrial filter systems for air, liquid and process streams.",
    detail:
      "Filtration specified for the dust or fluid you actually have, with change-out access designed in — because a filter that is hard to reach is a filter that does not get changed.",
    deliverables: [
      "Bag, cartridge, HEPA and wet-scrubber systems",
      "Liquid, hydraulic and process-stream filtration",
      "Reverse-pulse cleaning and differential-pressure monitoring",
      "Consumables supply under AMC",
    ],
  },
  {
    slug: "piping-projects",
    icon: Wrench,
    title: "Piping Projects",
    copy: "Gas, water, air and fire line piping — fabrication, erection, testing and certification.",
    detail:
      "Full piping scope from isometrics to hydro-test, in carbon steel, stainless, PP, PVDF and lined pipe. Weld records, radiography and test certificates are part of the deliverable, not an extra.",
    deliverables: [
      "Isometrics, stress checks and material take-off",
      "Shop and site fabrication with qualified welders",
      "Hydro-testing, radiography and NDT documentation",
      "Insulation, painting, tagging and as-built drawings",
    ],
  },
  {
    slug: "energy-projects",
    icon: Zap,
    title: "Energy Projects",
    copy: "Energy audits, heat recovery and efficiency retrofits that pay back in operating cost.",
    detail:
      "We measure first, then propose. Every recommendation carries a costed payback, and we re-measure after commissioning so the saving is demonstrated rather than asserted.",
    deliverables: [
      "Measured energy audits with baseline data",
      "Costed retrofit options with payback analysis",
      "Heat recovery, VFD and compressed-air loss projects",
      "Post-commissioning verification against the baseline",
    ],
  },
  {
    slug: "automations",
    icon: Cog,
    title: "Automations",
    copy: "PLC, SCADA and control panel automation for process lines and utility plants.",
    detail:
      "Panels built to IEC 61439 and logic written to be read by the next engineer. Integration with existing plant systems is scoped up front rather than discovered at commissioning.",
    deliverables: [
      "Control panel design, build and factory acceptance testing",
      "PLC, HMI and SCADA programming with documented logic",
      "Instrumentation selection, installation and loop checks",
      "Alarm, trending and reporting integration",
    ],
  },
  {
    slug: "material-handling",
    icon: Boxes,
    title: "Material Handling",
    copy: "Conveyors, crates, bins and racking systems engineered around your floor layout.",
    detail:
      "Handling designed from the material flow outward. We start with where material is consumed and work back, rather than fitting equipment into whatever space is left.",
    deliverables: [
      "Material flow study and layout design",
      "Belt, roller, chain and sortation conveyors",
      "Crates, bins, trolleys and line-side storage",
      "Racking, mezzanines and access structures",
    ],
  },
  {
    slug: "dehumidifier",
    icon: Gauge,
    title: "Dehumidifier & Humidifier",
    copy: "Humidity control packages for process quality, storage stability and operator comfort.",
    detail:
      "Desiccant and refrigerant systems selected against the dew point you need to hold, not the relative humidity someone quoted. Common fix for condensation, corrosion and dimensional drift.",
    deliverables: [
      "Dew-point and moisture-load calculations",
      "Desiccant and refrigerant dehumidification packages",
      "Precision humidification for electronics and print",
      "Control integration and monitoring",
    ],
  },
  {
    slug: "structural-engineering",
    icon: HardHat,
    title: "Structural Engineering",
    copy: "Platforms, supports, utility steelwork and site structures coordinated with plant services.",
    detail:
      "Steelwork designed alongside the services it carries, so pipe routes, cable trays and maintenance access are resolved on the drawing rather than on site.",
    deliverables: [
      "Design, analysis and fabrication drawings",
      "Platforms, walkways, pipe racks and equipment supports",
      "Roof-load verification for solar and plant additions",
      "Fabrication, erection, surface treatment and handover",
    ],
  },
  {
    slug: "amc-manpower",
    icon: Users,
    title: "AMC & Skilled Manpower",
    copy: "Dedicated maintenance teams, annual service contracts and shutdown support for critical assets.",
    detail:
      "Contracts written around your asset criticality, with defined response times and a spares strategy. Shutdown teams are planned and briefed before the window opens.",
    deliverables: [
      "Preventive maintenance schedules and checklists",
      "Defined response times by asset criticality",
      "Spares strategy and consumables management",
      "Shutdown planning and deputed skilled manpower",
    ],
  },
  {
    slug: "clean-room",
    icon: Sparkles,
    title: "Clean Room Solutions",
    copy: "Clean-room HVAC, filtration, pressure zoning and validation support for controlled spaces.",
    detail:
      "Turnkey controlled environments with the qualification documentation auditors ask for. Pressure cascades, air-change rates and recovery times are designed, tested and recorded.",
    deliverables: [
      "Clean-room HVAC, HEPA terminals and pressure cascades",
      "Panel walls, ceilings, doors and pass-throughs",
      "Particle count, recovery and integrity testing",
      "DQ, IQ, OQ protocols and as-built documentation",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
