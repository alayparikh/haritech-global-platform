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
      "Structural fabrication, machining and turnkey plant engineering for floors that run hot, heavy and continuously.",
    image: "/images/families/heavy-engineering-metals.jpg",
    fallbackImage: engineeringImg,
    icon: HardHat,
  },
  {
    slug: "process-chemical",
    name: "Process & Chemical",
    blurb:
      "Corrosion-rated piping, ventilation, filtration and utility packages for reactive and hazardous process streams.",
    image: "/images/families/process-chemical.jpg",
    fallbackImage: metalImg,
    icon: Beaker,
  },
  {
    slug: "food-dairy-lifesciences",
    name: "Food, Dairy & Life Sciences",
    blurb:
      "Hygienic stainless systems, clean-room utilities and validated documentation for regulated production.",
    image: "/images/families/food-dairy-lifesciences.jpg",
    fallbackImage: dairyImg,
    icon: Milk,
  },
  {
    slug: "mobility-electronics",
    name: "Mobility, Electronics & Assembly",
    blurb:
      "Line design, controlled-environment assembly and material handling engineered around takt time.",
    image: "/images/families/mobility-electronics.jpg",
    fallbackImage: electronicsImg,
    icon: Cpu,
  },
  {
    slug: "energy-renewables",
    name: "Energy & Renewables",
    blurb:
      "Balance-of-plant, energy retrofits and efficiency programmes that cut industrial load and operating cost.",
    image: "/images/families/energy-renewables.jpg",
    fallbackImage: renewableImg,
    icon: Zap,
  },
  {
    slug: "utilities-environment",
    name: "Utilities & Environment",
    blurb:
      "Water, effluent and heat-rejection infrastructure built for discharge compliance and year-round duty.",
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
    tagline: "Turnkey plant engineering built for continuous duty cycles.",
    intro:
      "Heavy engineering floors punish anything specified on paper alone. We scope machinery integration, heavy fabrication and utility infrastructure with engineers who have run production, so drawings survive contact with real load, real vibration and real shift patterns.",
    image: "/images/industries/engineering-heavy-industries.jpg",
    fallbackImage: engineeringImg,
    icon: Cog,
    challenges: [
      "Machine foundations and support steelwork that must hold alignment under continuous vibration",
      "Utility routing squeezed between existing plant with no shutdown window",
      "Crane, access and maintenance clearances discovered too late in the layout",
      "Spares and service response measured in shifts, not weeks",
    ],
    solutions: [
      "Plant surveys, load calculations, layouts, BOQs and execution drawings",
      "Heavy fabrication, platforms, supports and utility steelwork",
      "Machinery installation, alignment, grouting and commissioning",
      "Compressed air, water and gas line piping with testing and certification",
      "AMC cover with defined response times and shutdown support",
    ],
    standards: ["IS 800", "IS 2062", "ASME B31.3", "IS 3764 (safety)"],
    relatedServices: ["structural-engineering", "piping-projects", "amc-manpower"],
  },
  {
    slug: "metal-industries",
    name: "Metal Industries",
    family: "heavy-engineering-metals",
    tagline: "Machining, fabrication and surface treatment at industrial volume.",
    intro:
      "Rolling mills, machining shops and treatment lines generate heat, dust and fume in quantities that decide whether operators can work and whether equipment lasts. We engineer the extraction, cooling and structural systems around that reality.",
    image: "/images/industries/metal-industries.jpg",
    fallbackImage: metalImg,
    icon: Factory,
    challenges: [
      "Radiant heat loads that defeat conventional ventilation sizing",
      "Metallic dust and scale loading filters far faster than design assumptions",
      "Quench and process water circuits fouling heat exchangers",
      "Structures carrying dynamic loads from presses and mills",
    ],
    solutions: [
      "Heat and fume extraction sized to real radiant load, not nameplate",
      "Industrial filtration for metallic dust with accessible change-out",
      "Process and quench water treatment with reuse loops",
      "Cooling tower selection, installation and water-side chemistry",
      "Structural platforms, guarding and access for mill maintenance",
    ],
    standards: ["IS 800", "Factories Act ventilation limits", "CPCB emission norms"],
    relatedServices: ["exhaust-ventilation", "industrial-filtration", "water-treatment"],
  },
  {
    slug: "forging-casting",
    name: "Forging & Casting",
    family: "heavy-engineering-metals",
    tagline: "Foundry and forge support engineered for heat, fume and shock load.",
    intro:
      "Forges and foundries are the hardest environment we work in: molten metal, high radiant heat, sand and combustion products in the same air stream. Every system we install there is specified for the worst hour of the shift, not the average.",
    image: "/images/industries/forging-casting.jpg",
    fallbackImage: metalImg,
    icon: Flame,
    challenges: [
      "Operator heat stress at press and pour stations",
      "Fume and sand dust capture without disturbing the melt or mould",
      "Furnace and induction cooling circuits that cannot be allowed to fail",
      "Hammer and press foundations transmitting shock into surrounding utilities",
    ],
    solutions: [
      "Canopy hoods, fume extraction and spot-cooling for pour and press stations",
      "Sand and particulate filtration with wear-rated ducting",
      "Closed-loop furnace and induction cooling with redundancy",
      "Cooling towers and heat exchangers rated for continuous high-delta duty",
      "Isolated support structures and utility routing clear of shock paths",
    ],
    standards: ["IS 3764", "CPCB emission norms", "IS 4082 (site practice)"],
    relatedServices: ["exhaust-ventilation", "industrial-filtration", "hvac-r"],
  },
  {
    slug: "concrete-mix",
    name: "Concrete Mix & RMC",
    family: "heavy-engineering-metals",
    tagline: "Batching plant utilities, dust control and water recovery.",
    intro:
      "Ready-mix and precast plants live or die on batching consistency and on staying inside dust and discharge limits. We handle the utility side — air, water, dust suppression and recovery — so the plant keeps its licence and its yield.",
    image: "/images/industries/concrete-mix.jpg",
    fallbackImage: engineeringImg,
    icon: Construction,
    challenges: [
      "Cement and aggregate dust at silo, weigh-hopper and loading points",
      "Wash-water and slurry that cannot go to drain untreated",
      "Compressed air reliability for pneumatic gates and valves",
      "Conveyor and silo structures exposed to weather and abrasion",
    ],
    solutions: [
      "Silo-top and transfer-point dust collection with reverse-pulse cleaning",
      "Dust suppression misting at loading and stockpile areas",
      "Wash-water recovery, settling and reuse systems",
      "Compressed air generation, drying and distribution piping",
      "Conveyor gantries, silo access structures and maintenance platforms",
    ],
    standards: ["IS 4926 (RMC)", "IS 456", "CPCB dust norms"],
    relatedServices: ["industrial-filtration", "water-treatment", "material-handling"],
  },

  // ── Process & Chemical ──────────────────────────────────────────────────────
  {
    slug: "chemical",
    name: "Chemical Industries",
    family: "process-chemical",
    tagline: "Corrosion-rated utilities for reactive process streams.",
    intro:
      "In chemical plants the utility system is a safety system. Material selection, area classification and containment are decided at drawing stage — we design them in rather than retrofitting after an inspection finds them missing.",
    image: "/images/industries/chemical.jpg",
    fallbackImage: metalImg,
    icon: FlaskConical,
    challenges: [
      "Material compatibility across acid, solvent and caustic service",
      "Hazardous-area classification driving every electrical and fan selection",
      "Scrubbing and neutralisation before any stream reaches atmosphere or drain",
      "Ventilation that must keep working during an upset, not just at steady state",
    ],
    solutions: [
      "Process and utility piping in SS, PP, PVDF and lined carbon steel",
      "Fume scrubbers, exhaust hoods and corrosion-rated ducting",
      "ETP and neutralisation plants with discharge-compliance monitoring",
      "Flameproof-rated ventilation, panels and automation for classified zones",
      "Energy recovery on reactor and utility heat loads",
    ],
    standards: ["ASME B31.3", "ATEX / IS 5572 zoning", "CPCB discharge norms"],
    relatedServices: ["piping-projects", "exhaust-ventilation", "water-treatment", "automations"],
  },
  {
    slug: "petrochemical",
    name: "Petrochemical",
    family: "process-chemical",
    tagline: "Utility and safety infrastructure for classified areas.",
    intro:
      "Petrochemical scope is governed by classification, testing and documentation. We work to the permit system, deliver full weld and test records, and design utilities that can be isolated and maintained without taking a unit down.",
    image: "/images/industries/petrochemical.jpg",
    fallbackImage: engineeringImg,
    icon: Fuel,
    challenges: [
      "Hot work and permit constraints compressing every execution window",
      "Zone 1 and Zone 2 equipment selection across ventilation and controls",
      "Fire water, foam and deluge lines requiring certified fabrication",
      "Traceability demands on every weld, material and test",
    ],
    solutions: [
      "Fire, gas, water and air line piping with radiography and hydro-test records",
      "Classified-area ventilation, purging and pressurisation packages",
      "Heat recovery and energy audits on furnace and exchanger trains",
      "Instrumentation, control panels and SCADA integration",
      "Shutdown planning with dedicated skilled manpower",
    ],
    standards: ["ASME B31.3", "OISD guidelines", "IS 5572", "NFPA fire water"],
    relatedServices: ["piping-projects", "energy-projects", "automations", "amc-manpower"],
  },
  {
    slug: "plastic-extrusion",
    name: "Plastic & Extrusion",
    family: "process-chemical",
    tagline: "Chilled water, fume capture and humidity control for polymer lines.",
    intro:
      "Extrusion, moulding and film lines are cooling problems dressed as production problems. Consistent chilled water and stable ambient humidity are what hold dimensional tolerance across a shift.",
    image: "/images/industries/plastic-extrusion.jpg",
    fallbackImage: electronicsImg,
    icon: Layers,
    challenges: [
      "Chilled-water temperature drift showing up as dimensional variation",
      "Polymer fume and VOC release at die and melt stations",
      "Ambient humidity affecting hygroscopic resin and film handling",
      "Pneumatic resin conveying that blocks or segregates material",
    ],
    solutions: [
      "Process chilling, cooling towers and closed-loop water circuits",
      "Die-face fume extraction and VOC filtration",
      "Dehumidification packages for resin storage and production halls",
      "Pneumatic conveying, hoppers, bins and material handling",
      "Energy retrofits on chiller and compressor loads",
    ],
    standards: ["IS 660 (refrigeration safety)", "CPCB VOC norms"],
    relatedServices: ["hvac-r", "dehumidifier", "exhaust-ventilation", "material-handling"],
  },

  // ── Food, Dairy & Life Sciences ─────────────────────────────────────────────
  {
    slug: "dairy",
    name: "Dairy Industries",
    family: "food-dairy-lifesciences",
    tagline: "Hygienic stainless process lines, CIP and cold chain.",
    intro:
      "Dairy plants are judged on hygiene and on cold-chain integrity, both of which are decided by pipe routing, slope, drainability and refrigeration reliability. We build to food-grade standards and leave service access planned into the layout.",
    image: "/images/industries/dairy.jpg",
    fallbackImage: dairyImg,
    icon: Milk,
    challenges: [
      "Dead legs and poor drainage creating microbiological risk",
      "CIP coverage and chemical recovery across long process runs",
      "Refrigeration capacity that must hold through peak intake",
      "Effluent with high organic load ahead of discharge limits",
    ],
    solutions: [
      "Sanitary stainless process piping, orbital welding and slope-verified routing",
      "CIP skids, chemical dosing and recovery loops",
      "Ammonia and glycol refrigeration, chillers and cold-room packages",
      "ETP sized for high-BOD dairy effluent with reuse where permitted",
      "Hygienic HVAC, filtration and pressure zoning for packing halls",
    ],
    standards: ["FSSAI", "3-A Sanitary Standards", "IS 660 (ammonia safety)"],
    relatedServices: ["hvac-r", "piping-projects", "water-treatment", "clean-room"],
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    family: "food-dairy-lifesciences",
    tagline: "Hygienic utilities and controlled environments for high-speed lines.",
    intro:
      "Beverage and packaged food lines run fast and stop expensively. We engineer the air, water and utility systems that keep a filler running clean — and keep the plant inside its food-safety audit.",
    image: "/images/industries/food-beverages.jpg",
    fallbackImage: dairyImg,
    icon: Utensils,
    challenges: [
      "Airborne contamination risk over open product zones",
      "Condensation on cold surfaces above the line",
      "Process water quality driving taste, scale and shelf life",
      "Washdown environments destroying non-rated equipment",
    ],
    solutions: [
      "Filtered, pressure-zoned HVAC over filling and packing halls",
      "Dehumidification to eliminate condensate drip risk",
      "RO and process water treatment tuned to product specification",
      "Washdown-rated ducting, supports and stainless fabrication",
      "Conveyors, crates and material handling around the line layout",
    ],
    standards: ["FSSAI", "HACCP", "BRC / ISO 22000 utility requirements"],
    relatedServices: ["hvac-r", "dehumidifier", "water-treatment", "material-handling"],
  },
  {
    slug: "sugar",
    name: "Sugar Industries",
    family: "food-dairy-lifesciences",
    tagline: "Season-critical steam, water and dust systems.",
    intro:
      "A sugar mill's crushing season leaves no room for a utility failure. We plan work into the off-season window, engineer for bagasse dust and high steam load, and hand back systems the mill's own team can run.",
    image: "/images/industries/sugar.jpg",
    fallbackImage: engineeringImg,
    icon: Wheat,
    challenges: [
      "A fixed crushing season with no tolerance for downtime",
      "Bagasse dust loading on every air-side system",
      "Large condenser and cooling water circuits with heavy fouling",
      "Boiler and evaporator heat that could be recovered but usually is not",
    ],
    solutions: [
      "Off-season overhaul planning with committed completion dates",
      "Bagasse and ash dust extraction plus abrasion-rated filtration",
      "Cooling tower refurbishment, spray-pond and condenser water treatment",
      "Steam, condensate and process piping with insulation",
      "Energy audits and heat recovery across boiler and evaporator trains",
    ],
    standards: ["IBR (boiler piping)", "FSSAI", "CPCB emission norms"],
    relatedServices: [
      "piping-projects",
      "energy-projects",
      "industrial-filtration",
      "water-treatment",
    ],
  },
  {
    slug: "pharma",
    name: "Pharmaceutical",
    family: "food-dairy-lifesciences",
    tagline: "Validated clean-room utilities with documentation that passes audit.",
    intro:
      "In pharma the system is not delivered until the paperwork is. We design clean-room HVAC, pressure cascades and utilities with qualification in mind, and hand over DQ/IQ/OQ documentation alongside the plant.",
    image: "/images/industries/pharma.jpg",
    fallbackImage: dairyImg,
    icon: Pill,
    challenges: [
      "Pressure cascade and cross-contamination control between grades",
      "Particle count and air-change rates that must hold under audit",
      "Qualification documentation traceable back to design",
      "Change control on any modification to a validated system",
    ],
    solutions: [
      "Clean-room HVAC with HEPA terminals, pressure zoning and interlocks",
      "Purified water and WFI-adjacent utility distribution loops",
      "Validation support: DQ, IQ, OQ protocols and as-built documentation",
      "Fume, solvent and dust containment for OSD and API areas",
      "Automation, monitoring and alarm integration with audit trails",
    ],
    standards: ["WHO GMP", "Schedule M", "ISO 14644", "USP purified water"],
    relatedServices: ["clean-room", "hvac-r", "water-treatment", "automations"],
  },

  // ── Mobility, Electronics & Assembly ────────────────────────────────────────
  {
    slug: "automobile",
    name: "Automobile",
    family: "mobility-electronics",
    tagline: "Utilities engineered around takt time, not around the building.",
    intro:
      "Automotive plants measure everything in seconds. Paint, weld and assembly utilities have to hold their spec continuously, and any work we do on a live plant is planned around the line's own stoppage calendar.",
    image: "/images/industries/automobile.jpg",
    fallbackImage: engineeringImg,
    icon: Car,
    challenges: [
      "Paint shop air quality, temperature and humidity holding to tight bands",
      "Weld fume capture without disturbing robot cells or fixtures",
      "Compressed air demand spiking across shift changeover",
      "Any utility outage cascading straight into line stoppage",
    ],
    solutions: [
      "Paint booth and oven HVAC with temperature and humidity control",
      "Weld fume extraction integrated into cell guarding",
      "Compressed air generation, drying, receivers and ring-main piping",
      "Conveyors, trolleys, bins and line-side material handling",
      "AMC with response times aligned to line criticality",
    ],
    standards: ["IATF 16949 utility requirements", "IS 3764", "CPCB VOC norms"],
    relatedServices: ["hvac-r", "exhaust-ventilation", "piping-projects", "material-handling"],
  },
  {
    slug: "electronics",
    name: "Electronics Industries",
    family: "mobility-electronics",
    tagline: "Controlled-environment assembly with full traceability.",
    intro:
      "Electronics assembly fails quietly — from humidity, from static, from particulate you cannot see. We build the controlled environment and the panel infrastructure, with traceability at every stage.",
    image: "/images/industries/electronics.jpg",
    fallbackImage: electronicsImg,
    icon: CircuitBoard,
    challenges: [
      "ESD control across flooring, benching and air handling",
      "Humidity bands for moisture-sensitive devices and reflow quality",
      "Particulate control over open boards and bare die",
      "Solder fume extraction at operator breathing height",
    ],
    solutions: [
      "Clean-room and controlled-environment HVAC with HEPA filtration",
      "Precision humidification and dehumidification packages",
      "Solder and reflow fume extraction with carbon filtration",
      "Control panels, instrumentation and SCADA with traceable build records",
      "ESD-safe benching, storage and material handling",
    ],
    standards: ["ISO 14644", "IPC-A-610 environment", "IEC 61340 (ESD)"],
    relatedServices: ["clean-room", "dehumidifier", "automations", "exhaust-ventilation"],
  },
  {
    slug: "assembly-supply-chain",
    name: "Assembly & Supply Chain",
    family: "mobility-electronics",
    tagline: "Line design and vendor-managed flow without buffer waste.",
    intro:
      "Sub-assembly and logistics operations waste more in movement than in machining. We design the layout, the handling and the storage so material arrives where it is consumed, in the quantity it is consumed.",
    image: "/images/industries/assembly-supply-chain.jpg",
    fallbackImage: supplyImg,
    icon: Truck,
    challenges: [
      "Buffer stock accumulating because the layout forces it",
      "Manual handling distances that never appear in the cycle-time study",
      "Racking and storage that outgrows the building before the volume does",
      "Multi-vendor sub-assembly with inconsistent quality gates",
    ],
    solutions: [
      "Line and cell layout design with material flow simulation",
      "Conveyors, sortation, crates, bins and racking systems",
      "Sub-assembly programmes with in-house fabrication and quality gates",
      "Vendor-managed sourcing across Indian and overseas suppliers",
      "Warehouse ventilation, lighting coordination and utility support",
    ],
    standards: ["ISO 9001", "IS 15139 (racking)"],
    relatedServices: ["material-handling", "structural-engineering", "automations"],
  },

  // ── Energy & Renewables ─────────────────────────────────────────────────────
  {
    slug: "renewable-energy",
    name: "Renewable Industries",
    family: "energy-renewables",
    tagline: "Balance-of-plant and efficiency programmes that cut industrial load.",
    intro:
      "Renewable capacity only pays back if the plant behind it is efficient first. We audit the load, cut what can be cut, then build the balance-of-plant that carries the remainder.",
    image: "/images/industries/renewable-energy.jpg",
    fallbackImage: renewableImg,
    icon: Wind,
    challenges: [
      "Generation added on top of avoidable load, inflating system size",
      "Inverter and battery rooms needing their own thermal management",
      "Cable, tray and support routing across live plant",
      "Payback claims that do not survive measurement",
    ],
    solutions: [
      "Energy audits with measured baselines and costed retrofit options",
      "Heat recovery, VFD retrofits and compressed-air loss elimination",
      "Inverter, battery and control room HVAC",
      "Support structures, cable trays and balance-of-plant civils coordination",
      "Post-commissioning monitoring against the committed savings",
    ],
    standards: ["BEE energy audit protocol", "IS 732", "IEC 61439 (panels)"],
    relatedServices: ["energy-projects", "structural-engineering", "hvac-r"],
  },
  {
    slug: "solar",
    name: "Solar",
    family: "energy-renewables",
    tagline: "Rooftop and ground-mount structures, cabling and cleaning water.",
    intro:
      "Solar on an industrial site is a structural and utility job as much as an electrical one. We handle mounting, routing, cleaning water and the inverter environment so the array actually generates what the model promised.",
    image: "/images/industries/solar.jpg",
    fallbackImage: renewableImg,
    icon: Sun,
    challenges: [
      "Existing roof structures not rated for the added load and wind uplift",
      "Soiling losses in dusty industrial locations",
      "Cleaning water demand and disposal on site",
      "Inverter room heat rejection in peak ambient conditions",
    ],
    solutions: [
      "Mounting structure design, fabrication and roof-load verification",
      "Cable tray, conduit and support routing across the plant",
      "Module cleaning water treatment with recovery and reuse",
      "Inverter and control room ventilation and cooling",
      "Ongoing AMC covering cleaning, inspection and structural checks",
    ],
    standards: ["IS 875 (wind load)", "IS 732", "MNRE technical specifications"],
    relatedServices: ["structural-engineering", "energy-projects", "water-treatment"],
  },

  // ── Utilities & Environment ─────────────────────────────────────────────────
  {
    slug: "water-treatment",
    name: "Water Treatment",
    family: "utilities-environment",
    tagline: "RO, ETP, STP and reuse systems built for discharge compliance.",
    intro:
      "We serve water-treatment plant builders and operators, and we build treatment plants directly for industrial clients. Either way, the target is the same: meet the consent conditions every day, not on the day of the inspection.",
    image: "/images/industries/water-treatment.jpg",
    fallbackImage: supplyImg,
    icon: Droplets,
    challenges: [
      "Influent quality varying far more than the design basis assumed",
      "Membrane fouling and chemical cost eroding the operating budget",
      "Sludge handling and disposal treated as an afterthought",
      "Consent conditions tightening after the plant was commissioned",
    ],
    solutions: [
      "RO, ETP, STP and process water plants with reuse loops",
      "Dosing systems, instrumentation and online compliance monitoring",
      "Membrane, media and filtration replacement under AMC",
      "Sludge handling, dewatering and transfer equipment",
      "Retrofit and capacity upgrades on existing treatment trains",
    ],
    standards: ["CPCB / GPCB consent norms", "IS 10500", "ZLD guidelines"],
    relatedServices: ["water-treatment", "industrial-filtration", "automations", "amc-manpower"],
  },
  {
    slug: "cooling-towers-fans",
    name: "Cooling Towers & Industrial Fans",
    family: "utilities-environment",
    tagline: "Heat rejection that holds approach temperature year-round.",
    intro:
      "A cooling tower quietly drifting two degrees off its approach temperature costs more than most plants realise. We size, install, refurbish and maintain heat-rejection and air-movement equipment — and we measure it after handover.",
    image: "/images/industries/cooling-towers-fans.jpg",
    fallbackImage: metalImg,
    icon: Fan,
    challenges: [
      "Approach temperature drifting as fill fouls and drift eliminators degrade",
      "Water chemistry causing scale, corrosion and biological growth",
      "Fan, gearbox and drive vibration going unmonitored until failure",
      "Towers sited where recirculation defeats the design",
    ],
    solutions: [
      "Cooling tower selection, installation, refurbishment and fill replacement",
      "Axial and centrifugal fan supply, balancing and vibration monitoring",
      "Cooling water treatment, dosing and blowdown control",
      "Header piping, valves, basins and structural support work",
      "Performance testing against approach and range after handover",
    ],
    standards: ["CTI performance standards", "IS 8188", "IS 1391"],
    relatedServices: ["hvac-r", "water-treatment", "piping-projects", "amc-manpower"],
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
