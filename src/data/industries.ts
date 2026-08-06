import {
  Beaker,
  Car,
  CircuitBoard,
  Cog,
  Construction,
  Cpu,
  Droplets,
  Factory,
  Fan,
  Flame,
  FlaskConical,
  Fuel,
  HardHat,
  Layers,
  Milk,
  Pill,
  Sun,
  Truck,
  Utensils,
  Waves,
  Wheat,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

import engineeringImg from "@/assets/sector-engineering.jpg";
import supplyImg from "@/assets/sector-supplychain.jpg";
import electronicsImg from "@/assets/sector-electronics.jpg";
import dairyImg from "@/assets/sector-dairy.jpg";
import metalImg from "@/assets/sector-metal.jpg";
import renewableImg from "@/assets/sector-renewable.jpg";

export type FamilySlug =
  | "heavy-engineering-metals"
  | "process-chemical"
  | "food-dairy-lifesciences"
  | "mobility-electronics"
  | "energy-renewables"
  | "utilities-environment";

export type Industry = {
  slug: string;
  name: string;
  family: FamilySlug;
  tagline: string;
  intro: string;
  image: string;
  /** Shown until the generated photo exists at `image`. */
  fallbackImage: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: string[];
  standards?: string[];
  relatedServices: string[];
};

export type Family = {
  slug: FamilySlug;
  name: string;
  blurb: string;
  image: string;
  fallbackImage: string;
  icon: LucideIcon;
};

export const families: Family[] = [
  {
    slug: "heavy-engineering-metals",
    name: "Heavy Engineering & Metals",
    blurb:
      "PLC, SCADA and drive control for plants that run hot, heavy and continuously — where a control fault stops the whole floor.",
    image: "/images/families/heavy-engineering-metals.jpg",
    fallbackImage: engineeringImg,
    icon: HardHat,
    },
  {
    slug: "process-chemical",
    name: "Process & Chemical",
    blurb:
      "DCS, safety instrumented systems and classified-area automation for reactive and hazardous process streams.",
    image: "/images/families/process-chemical.jpg",
    fallbackImage: metalImg,
    icon: Beaker,
  },
  {
    slug: "food-dairy-lifesciences",
    name: "Food, Dairy & Life Sciences",
    blurb:
      "Recipe-driven SCADA, batch control and validated automation for hygienic and regulated production.",
    image: "/images/families/food-dairy-lifesciences.jpg",
    fallbackImage: dairyImg,
    icon: Milk,
  },
  {
    slug: "mobility-electronics",
    name: "Mobility, Electronics & Assembly",
    blurb:
      "Line control, robotics and traceable automation engineered around takt time, not around the building.",
    image: "/images/families/mobility-electronics.jpg",
    fallbackImage: electronicsImg,
    icon: Cpu,
  },
  {
    slug: "energy-renewables",
    name: "Energy & Renewables",
    blurb:
      "SCADA, monitoring and control integration for generation, storage and industrial load-management systems.",
    image: "/images/families/energy-renewables.jpg",
    fallbackImage: renewableImg,
    icon: Zap,
  },
  {
    slug: "utilities-environment",
    name: "Utilities & Environment",
    blurb:
      "Automated dosing, monitoring and control for water, effluent and heat-rejection systems that must hold compliance unattended.",
    image: "/images/families/utilities-environment.jpg",
    fallbackImage: supplyImg,
    icon: Waves,
  },
];

export const industries: Industry[] = [
  // ── Heavy Engineering & Metals ──────────────────────────────────────────────
  {
    slug: "engineering-heavy-industries",
    name: "Engineering & Heavy Industries",
    family: "heavy-engineering-metals",
    tagline: "Control system integration built for continuous duty cycles.",
    intro:
      "Heavy engineering floors punish anything specified on paper alone. We integrate PLCs, SCADA and drive systems with engineers who understand production, so control logic survives contact with real load, real vibration and real shift patterns.",
    image: "/images/industries/engineering-heavy-industries.jpg",
    fallbackImage: engineeringImg,
    icon: Cog,
    challenges: [
      "Standalone machine controllers with no visibility into overall line status",
      "Legacy PLCs approaching end-of-life with no migration path planned",
      "Utility and process interlocks wired without documented logic",
      "Fault diagnosis relying on tribal knowledge instead of alarm history",
    ],
    solutions: [
      "PLC selection, programming and control philosophy for new and retrofit lines",
      "SCADA and HMI development for line-wide visibility and alarm management",
      "Panel design, build and factory acceptance testing to IEC 61439",
      "Instrumentation, loop checking and interlock verification",
      "AMC cover with defined response times for control-system faults",
    ],
    standards: ["IEC 61439 (panels)", "IEC 60204-1 (machine electrical)", "NFPA 79", "IEC 62443 (network security)"],
    relatedServices: ["plc-programming", "scada-hmi", "control-panels"],
  },
  {
    slug: "metal-industries",
    name: "Metal Industries",
    family: "heavy-engineering-metals",
    tagline: "Process control for rolling, machining and treatment lines at volume.",
    intro:
      "Rolling mills, machining shops and treatment lines generate data at a rate that decides whether a fault is caught in seconds or discovered as scrap. We build the control and monitoring systems that keep pace with production speed.",
    image: "/images/industries/metal-industries.jpg",
    fallbackImage: metalImg,
    icon: Factory,
    challenges: [
      "Drive and motion faults on mills detected only after a quality reject",
      "Temperature and process control loops tuned once and never revisited",
      "Multiple vendor PLCs on one line with no common data layer",
      "Vibration and load data collected locally but never analysed centrally",
    ],
    solutions: [
      "Drive, VFD and motion control tuned to actual mill dynamics",
      "SCADA integration across mixed-vendor PLC lines",
      "Instrumentation for temperature, load and vibration monitoring",
      "MES and data integration for scrap, yield and downtime tracking",
      "Industrial networking to unify legacy and current control platforms",
    ],
    standards: ["IEC 61439", "IEC 62443", "ISA-95 (MES integration)"],
    relatedServices: ["robotics-motion", "mes-data", "industrial-networking"],
  },
  {
    slug: "forging-casting",
    name: "Forging & Casting",
    family: "heavy-engineering-metals",
    tagline: "Safety-rated control for the highest-consequence floors we work on.",
    intro:
      "Forges and foundries are the hardest environment we integrate into: molten metal, shock load and heat in the same cell as the operator. Every control and safety system here is specified for the failure mode that actually matters, not the generic template.",
    image: "/images/industries/forging-casting.jpg",
    fallbackImage: metalImg,
    icon: Flame,
    challenges: [
      "Press and hammer interlocks that predate current safety standards",
      "Induction and furnace controllers isolated from plant-wide monitoring",
      "Pour and shakeout sequencing dependent on manual operator timing",
      "No SIL/PL verification on existing safety circuits",
    ],
    solutions: [
      "Safety PLC, light-curtain and interlock design to current SIL/PL requirements",
      "Furnace and induction control integration with plant SCADA",
      "Sequencing and cycle control for pour, press and shakeout stations",
      "Risk assessment review and validation testing on existing safety systems",
      "AMC support for safety-critical control assets",
    ],
    standards: ["IEC 61511 / SIL", "ISO 13849 (PL)", "IEC 62443"],
    relatedServices: ["safety-systems", "scada-hmi", "amc-support"],
  },
  {
    slug: "concrete-mix",
    name: "Concrete Mix & RMC",
    family: "heavy-engineering-metals",
    tagline: "Batching automation and recipe control for consistent yield.",
    intro:
      "Ready-mix and precast plants live or die on batching consistency. We automate the weighing, dosing and sequencing that decide whether every batch matches the mix design, not just the first one.",
    image: "/images/industries/concrete-mix.jpg",
    fallbackImage: engineeringImg,
    icon: Construction,
    challenges: [
      "Batching accuracy drifting without automated weight verification",
      "Recipe changes managed manually with no audit trail",
      "Silo and conveyor interlocks wired point-to-point with no central control",
      "Production data never reaching a reportable batch record",
    ],
    solutions: [
      "PLC-based batching control with automated weight and moisture correction",
      "Recipe management SCADA with full batch audit trail",
      "Silo, conveyor and pneumatic gate interlocking",
      "MES integration for batch reporting and yield tracking",
      "Instrumentation for load cells, level and flow measurement",
    ],
    standards: ["IEC 61439", "ISA-88 (batch control)"],
    relatedServices: ["plc-programming", "mes-data", "instrumentation"],
  },

  // ── Process & Chemical ──────────────────────────────────────────────────────
  {
    slug: "chemical",
    name: "Chemical Industries",
    family: "process-chemical",
    tagline: "DCS and safety-instrumented control for reactive process streams.",
    intro:
      "In chemical plants the control system is a safety system. Hazardous-area classification, interlock logic and SIS design are decided at engineering stage — we design them in rather than retrofitting after an inspection finds them missing.",
    image: "/images/industries/chemical.jpg",
    fallbackImage: metalImg,
    icon: FlaskConical,
    challenges: [
      "Hazardous-area classification driving every controller and panel selection",
      "Safety instrumented functions not independently verified from basic process control",
      "Batch and continuous processes running on disconnected control platforms",
      "Alarm floods during upset conditions instead of prioritised guidance",
    ],
    solutions: [
      "DCS and PLC control philosophy for batch and continuous process streams",
      "Safety instrumented systems (SIS) independent of the basic process control layer",
      "Flameproof and intrinsically-safe panel design for classified zones",
      "Alarm rationalisation to ISA-18.2 for upset-condition clarity",
      "SCADA integration with discharge and emission compliance monitoring",
    ],
    standards: ["IEC 61511 / SIL", "ATEX / IECEx zoning", "ISA-18.2 (alarm management)", "IEC 62443"],
    relatedServices: ["dcs-integration", "safety-systems", "control-panels"],
  },
  {
    slug: "petrochemical",
    name: "Petrochemical",
    family: "process-chemical",
    tagline: "Classified-area automation with full traceability and documentation.",
    intro:
      "Petrochemical scope is governed by classification, testing and documentation. We work to the permit system, deliver full loop and FAT records, and design control systems that can be isolated and maintained without taking a unit down.",
    image: "/images/industries/petrochemical.jpg",
    fallbackImage: engineeringImg,
    icon: Fuel,
    challenges: [
      "Zone 1 and Zone 2 equipment selection across controllers, panels and instrumentation",
      "Hot-work and permit constraints compressing every commissioning window",
      "SCADA visibility gaps between older DCS islands and newer control additions",
      "Traceability demands on every controller change and firmware revision",
    ],
    solutions: [
      "Classified-area PLC, DCS and instrumentation selection and installation",
      "SCADA integration bridging legacy DCS islands with current platforms",
      "Fire and gas system integration with safety-rated logic",
      "FAT/SAT protocols with full witnessed testing and sign-off records",
      "Obsolescence audits and migration planning around shutdown windows",
    ],
    standards: ["IEC 61511 / SIL", "OISD guidelines", "IEC 62443", "IECEx / ATEX"],
    relatedServices: ["dcs-integration", "commissioning-fat-sat", "migration-upgrades"],
  },
  {
    slug: "plastic-extrusion",
    name: "Plastic & Extrusion",
    family: "process-chemical",
    tagline: "Process control that holds tolerance across a shift, not just at startup.",
    intro:
      "Extrusion, moulding and film lines are control problems dressed as production problems. Consistent temperature, speed and pressure control loops are what hold dimensional tolerance from the first metre to the last.",
    image: "/images/industries/plastic-extrusion.jpg",
    fallbackImage: electronicsImg,
    icon: Layers,
    challenges: [
      "Temperature zone control drifting and showing up as dimensional variation",
      "Line speed and haul-off synchronisation dependent on manual trimming",
      "Recipe changeovers taking longer than the run they are meant to support",
      "No historian data to correlate scrap events with process parameters",
    ],
    solutions: [
      "Multi-zone temperature and pressure PLC control with PID tuning",
      "Drive synchronisation for extruder, puller and winder sections",
      "Recipe management SCADA for fast, repeatable changeovers",
      "Historian and MES integration linking scrap events to process data",
      "Instrumentation for melt pressure, temperature and gauge measurement",
    ],
    standards: ["IEC 61439", "ISA-88 (batch/recipe control)"],
    relatedServices: ["plc-programming", "scada-hmi", "mes-data"],
  },

  // ── Food, Dairy & Life Sciences ─────────────────────────────────────────────
  {
    slug: "dairy",
    name: "Dairy Industries",
    family: "food-dairy-lifesciences",
    tagline: "CIP, batch and cold-chain control with full traceability.",
    intro:
      "Dairy plants are judged on hygiene and on cold-chain integrity, both of which depend on control systems doing what they are supposed to do every cycle, unattended. We automate CIP, batching and refrigeration monitoring so nothing is left to a checklist.",
    image: "/images/industries/dairy.jpg",
    fallbackImage: dairyImg,
    icon: Milk,
    challenges: [
      "CIP cycles run manually with no verified completion record",
      "Batch and recipe control spread across disconnected local panels",
      "Refrigeration and cold-room monitoring without centralised alarming",
      "Traceability gaps between process data and finished-batch records",
    ],
    solutions: [
      "CIP skid automation with verified cycle completion and reporting",
      "Batch control SCADA with recipe management and ISA-88 structure",
      "Refrigeration monitoring and centralised alarm management",
      "MES integration for batch traceability and audit-ready records",
      "Instrumentation for flow, temperature and conductivity verification",
    ],
    standards: ["FSSAI", "3-A Sanitary Standards", "ISA-88 (batch control)"],
    relatedServices: ["scada-hmi", "mes-data", "instrumentation"],
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    family: "food-dairy-lifesciences",
    tagline: "Line control and data integration for high-speed filling and packing.",
    intro:
      "Beverage and packaged food lines run fast and stop expensively. We engineer the PLC and SCADA layer that keeps a filler, capper and packer synchronised — and keeps production data flowing into the reports the plant is audited on.",
    image: "/images/industries/food-beverages.jpg",
    fallbackImage: dairyImg,
    icon: Utensils,
    challenges: [
      "Filler, capper and packer running on unsynchronised local controllers",
      "Micro-stoppages logged manually or not logged at all",
      "Recipe and format changeovers slower than the line's own changeover target",
      "No connected data path from the line to quality or MIS reporting",
    ],
    solutions: [
      "Line-wide PLC synchronisation across filling, capping and packing",
      "SCADA with automated micro-stoppage and downtime capture",
      "Recipe and format-changeover automation with SCADA-managed presets",
      "MES integration for OEE, batch tracking and MIS reporting",
      "Vision and sensor integration for fill-level and pack verification",
    ],
    standards: ["FSSAI", "HACCP", "ISA-88 (batch control)"],
    relatedServices: ["scada-hmi", "mes-data", "robotics-motion"],
  },
  {
    slug: "sugar",
    name: "Sugar Industries",
    family: "food-dairy-lifesciences",
    tagline: "Season-critical process control with no tolerance for downtime.",
    intro:
      "A sugar mill's crushing season leaves no room for a control-system failure. We plan work into the off-season window, integrate DCS and PLC control across the crushing-to-boiling train, and hand back systems the mill's own team can run.",
    image: "/images/industries/sugar.jpg",
    fallbackImage: engineeringImg,
    icon: Wheat,
    challenges: [
      "A fixed crushing season with no tolerance for control-system downtime",
      "Mill, boiler and evaporator control running as separate, unlinked systems",
      "Steam and juice-flow loops tuned decades ago and never revisited",
      "Obsolete controllers with no local spares or support",
    ],
    solutions: [
      "Off-season migration planning with committed completion dates",
      "DCS and PLC integration across crushing, boiling and evaporator sections",
      "Steam and process loop retuning with instrumentation verification",
      "Obsolescence audits and controller replacement ahead of the crushing season",
      "AMC support with response times matched to the season's criticality",
    ],
    standards: ["IEC 61439", "IBR (boiler control)", "IEC 62443"],
    relatedServices: ["migration-upgrades", "dcs-integration", "amc-support"],
  },
  {
    slug: "pharma",
    name: "Pharmaceutical",
    family: "food-dairy-lifesciences",
    tagline: "Validated automation with documentation that passes audit.",
    intro:
      "In pharma the system is not delivered until the paperwork is. We design PLC and SCADA control with 21 CFR Part 11 and qualification in mind, and hand over DQ/IQ/OQ documentation alongside the automation.",
    image: "/images/industries/pharma.jpg",
    fallbackImage: dairyImg,
    icon: Pill,
    challenges: [
      "Electronic batch records and audit trails not meeting 21 CFR Part 11",
      "Change control gaps on any modification to a validated control system",
      "Batch and recipe management spread across manual and automated steps",
      "Alarm and event data not traceable back to a specific batch",
    ],
    solutions: [
      "PLC/SCADA control with 21 CFR Part 11 compliant electronic batch records",
      "Recipe management and batch control to ISA-88 structure",
      "Validation support: DQ, IQ, OQ protocols and as-built documentation",
      "Change-control procedures for validated automation systems",
      "Alarm, audit-trail and event integration tied to batch identity",
    ],
    standards: ["WHO GMP", "Schedule M", "21 CFR Part 11", "ISA-88"],
    relatedServices: ["scada-hmi", "commissioning-fat-sat", "mes-data"],
  },

  // ── Mobility, Electronics & Assembly ────────────────────────────────────────
  {
    slug: "automobile",
    name: "Automobile",
    family: "mobility-electronics",
    tagline: "Line control and robotics engineered around takt time.",
    intro:
      "Automotive plants measure everything in seconds. Paint, weld and assembly control systems have to hold their sequence continuously, and any work we do on a live line is planned around the plant's own stoppage calendar.",
    image: "/images/industries/automobile.jpg",
    fallbackImage: engineeringImg,
    icon: Car,
    challenges: [
      "Weld and robot cell controllers ageing out with no replacement plan",
      "Any single PLC fault cascading straight into line stoppage",
      "Traceability gaps between robot cycle data and vehicle build records",
      "Multiple robot and PLC vendors on one line with no unified diagnostics",
    ],
    solutions: [
      "Robot cell integration and safety interlocking for weld and paint stations",
      "PLC and SCADA control with line-stoppage diagnostics down to the station",
      "MES integration linking cycle data to vehicle build and traceability records",
      "Multi-vendor robot and PLC diagnostics through a common SCADA layer",
      "AMC with response times aligned to line criticality",
    ],
    standards: ["IATF 16949", "ISO 13849 (safety)", "IEC 62443"],
    relatedServices: ["robotics-motion", "scada-hmi", "amc-support"],
  },
  {
    slug: "electronics",
    name: "Electronics Industries",
    family: "mobility-electronics",
    tagline: "Traceable line control for boards and precision assembly.",
    intro:
      "Electronics assembly fails quietly — from a drifting reflow profile, from an untracked lot, from a controller nobody documented. We build the control and traceability infrastructure so every board carries its process history.",
    image: "/images/industries/electronics.jpg",
    fallbackImage: electronicsImg,
    icon: CircuitBoard,
    challenges: [
      "Reflow and process parameters logged locally with no central record",
      "Lot and serial traceability broken between stations",
      "SMT and test equipment on isolated networks with no shared diagnostics",
      "ESD-critical interlocks not integrated into line control",
    ],
    solutions: [
      "Control panels, PLCs and SCADA with traceable build records",
      "MES integration for lot, serial and process-parameter traceability",
      "Industrial networking across SMT, test and inspection equipment",
      "Vision system integration for inline inspection and verification",
      "ESD-safe interlocking integrated into line control logic",
    ],
    standards: ["IPC-A-610", "IEC 61340 (ESD)", "IEC 62443"],
    relatedServices: ["mes-data", "industrial-networking", "control-panels"],
  },
  {
    slug: "assembly-supply-chain",
    name: "Assembly & Supply Chain",
    family: "mobility-electronics",
    tagline: "Sortation, tracking and cell control without buffer waste.",
    intro:
      "Sub-assembly and logistics operations waste more in untracked movement than in cycle time. We control the conveyors, sortation and storage systems so material is tracked and released exactly when the line consumes it.",
    image: "/images/industries/assembly-supply-chain.jpg",
    fallbackImage: supplyImg,
    icon: Truck,
    challenges: [
      "Conveyor and sortation logic running open-loop with no fault visibility",
      "Buffer stock accumulating because release logic is manual",
      "Barcode and RFID tracking not integrated with the control system",
      "Multi-vendor sub-assembly cells with inconsistent PLC standards",
    ],
    solutions: [
      "PLC control for conveyor, sortation and automated storage systems",
      "Barcode, RFID and vision integration for automated tracking",
      "SCADA for material-flow visibility and buffer-release logic",
      "Standardised PLC and panel specifications across sub-assembly cells",
      "MES integration for throughput and vendor-lot tracking",
    ],
    standards: ["ISO 9001", "IEC 61439"],
    relatedServices: ["robotics-motion", "mes-data", "control-panels"],
  },

  // ── Energy & Renewables ─────────────────────────────────────────────────────
  {
    slug: "renewable-energy",
    name: "Renewable Industries",
    family: "energy-renewables",
    tagline: "SCADA and control integration for generation and load-side systems.",
    intro:
      "Renewable capacity only pays back if the control system behind it is trustworthy. We integrate SCADA, monitoring and interlocking so generation, storage and industrial load-management systems report accurately and fail safely.",
    image: "/images/industries/renewable-energy.jpg",
    fallbackImage: renewableImg,
    icon: Wind,
    challenges: [
      "Inverter and battery management systems reporting into disconnected dashboards",
      "SCADA gaps between generation assets and plant load-management systems",
      "Control-room visibility limited to individual asset vendors' portals",
      "Performance claims that do not survive independent monitoring",
    ],
    solutions: [
      "SCADA integration across inverters, BMS and plant load-management systems",
      "Centralised monitoring dashboards independent of individual OEM portals",
      "Protocol conversion and gateway integration for mixed-vendor assets",
      "Alarm and event management for generation and storage systems",
      "Post-commissioning performance monitoring against committed output",
    ],
    standards: ["IEC 61439 (panels)", "IEC 62443", "IEEE 1547 (interconnection)"],
    relatedServices: ["scada-hmi", "industrial-networking", "mes-data"],
  },
  {
    slug: "solar",
    name: "Solar",
    family: "energy-renewables",
    tagline: "Monitoring, control and communication for rooftop and ground-mount arrays.",
    intro:
      "Solar on an industrial site is a monitoring and communication job as much as an electrical one. We integrate SCADA, inverter communication and string-level monitoring so the array reports what it is actually generating.",
    image: "/images/industries/solar.jpg",
    fallbackImage: renewableImg,
    icon: Sun,
    challenges: [
      "Inverter communication protocols that do not talk to the plant SCADA",
      "String-level faults invisible until a measurable generation drop",
      "Weather station and generation data not correlated for performance reporting",
      "Remote sites with no centralised alarm or fault notification",
    ],
    solutions: [
      "SCADA integration for inverter, string and weather-station monitoring",
      "Protocol conversion for mixed-vendor inverter fleets",
      "Remote monitoring and alarm notification for unattended sites",
      "Performance-ratio reporting correlated against irradiance data",
      "AMC covering monitoring-system uptime and inspection",
    ],
    standards: ["IEC 61439", "MNRE technical specifications", "IEC 62443"],
    relatedServices: ["scada-hmi", "industrial-networking", "amc-support"],
  },

  // ── Utilities & Environment ─────────────────────────────────────────────────
  {
    slug: "water-treatment",
    name: "Water Treatment",
    family: "utilities-environment",
    tagline: "Automated dosing and compliance monitoring for RO, ETP and STP systems.",
    intro:
      "We integrate control systems for water-treatment plant builders and for industrial clients directly. Either way, the target is the same: automated dosing and monitoring that meets consent conditions every day, not only on the day of inspection.",
    image: "/images/industries/water-treatment.jpg",
    fallbackImage: supplyImg,
    icon: Droplets,
    challenges: [
      "Dosing controlled manually against influent that varies far more than assumed",
      "Compliance parameters logged by hand instead of monitored continuously",
      "Membrane and filtration status not visible until a failure occurs",
      "Legacy PLCs on treatment trains with no remote monitoring capability",
    ],
    solutions: [
      "PLC-based dosing control responsive to real-time influent quality",
      "SCADA integration with online compliance monitoring and reporting",
      "Instrumentation for flow, turbidity, pH and conductivity verification",
      "Remote monitoring for unattended or multi-site treatment plants",
      "Obsolescence audits and controller migration on existing treatment trains",
    ],
    standards: ["CPCB / GPCB consent norms", "IEC 61439", "IEC 62443"],
    relatedServices: ["scada-hmi", "instrumentation", "migration-upgrades"],
  },
  {
    slug: "cooling-towers-fans",
    name: "Cooling Towers & Industrial Fans",
    family: "utilities-environment",
    tagline: "Automated control that holds approach temperature year-round.",
    intro:
      "A cooling tower quietly drifting off its approach temperature costs more than most plants realise, and manual logging rarely catches it in time. We automate control and monitoring for heat-rejection systems — and verify performance after handover.",
    image: "/images/industries/cooling-towers-fans.jpg",
    fallbackImage: metalImg,
    icon: Fan,
    challenges: [
      "Fan and pump control running on fixed schedules instead of load-responsive logic",
      "Approach-temperature drift going undetected between manual readings",
      "Vibration and bearing condition unmonitored until failure",
      "Multiple towers and fan banks with no centralised control point",
    ],
    solutions: [
      "VFD-based fan and pump control responsive to measured load and approach temperature",
      "SCADA integration for centralised monitoring across multiple towers",
      "Vibration and condition-monitoring instrumentation with alarm thresholds",
      "Water chemistry dosing control integrated with the monitoring system",
      "Performance verification against approach and range after commissioning",
    ],
    standards: ["CTI performance standards", "IEC 61439", "IEC 62443"],
    relatedServices: ["instrumentation", "scada-hmi", "amc-support"],
  },
];

/** Keyed lookup so pages can reference a family image without an index guard. */
export const familyBySlug = Object.fromEntries(families.map((f) => [f.slug, f])) as Record<
  FamilySlug,
  Family
>;

export const industriesByFamily = (family: FamilySlug) =>
  industries.filter((i) => i.family === family);

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

export const getFamily = (slug: FamilySlug) => families.find((f) => f.slug === slug);

/** Ordered exactly as rendered on /industries — used for prev/next navigation. */
export const orderedIndustries: Industry[] = families.flatMap((f) => industriesByFamily(f.slug));

export const industryNeighbours = (slug: string) => {
  const i = orderedIndustries.findIndex((x) => x.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? orderedIndustries[i - 1] : orderedIndustries[orderedIndustries.length - 1],
    next: i < orderedIndustries.length - 1 ? orderedIndustries[i + 1] : orderedIndustries[0],
  };
};
