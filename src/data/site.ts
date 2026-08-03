import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Eye,
  FileText,
  Gauge,
  Globe2,
  Layers,
  Mail,
  Newspaper,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Target,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { to: string; label: string; icon: LucideIcon };

export const navLinks: NavLink[] = [
  { to: "/industries", label: "Industries", icon: Layers },
  { to: "/capabilities", label: "Capabilities", icon: Gauge },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/projects", label: "Projects", icon: ClipboardCheck },
  { to: "/about", label: "About", icon: Building2 },
  { to: "/contact", label: "Contact", icon: Mail },
];

export const company = {
  name: "Haritech Automations Pvt. Ltd.",
  /** Single source for the joint-venture line — it appears on every page. */
  venture: {
    short: "USA · India joint venture",
    long: "A USA–India joint venture",
    copy: "American engineering governance and Indian manufacturing depth under one accountable team — specifications written to international standards, built and serviced locally.",
  },
  emails: ["info@haritatechnology.com", "enquiry@haritatechnology.com"],
  phones: [
    { display: "+91 98257 43029", href: "tel:+919825743029" },
    { display: "+91 78020 58470", href: "tel:+917802058470" },
  ],
  whatsapp: "https://wa.me/919825743029",
  address: [
    "TF14, VR One, Opp. L&T Knowledge City",
    "NH 48, Between Ajwa-Waghodia Crossing",
    "Vadodara, Gujarat, India-390019",
  ],
  mapEmbed:
    "https://www.google.com/maps?q=VR+One+NH+48+Ajwa+Waghodia+Crossing+Vadodara+390019&output=embed",
  capabilityStatement: "/haritech-capability-statement.txt",
};

/**
 * Leadership. Photos are optional — see `public/images/team/README.md`; a
 * person with no file renders as a monogram plate.
 */
export const leadership = {
  name: "Tejas Patwa",
  role: "Director",
  location: "United States · India",
  phone: { display: "+1 (404) 435-9548", href: "tel:+14044359548" },
  quote:
    "Every plant we walk into is already running. Our job is to leave it running better — measured, documented and handed back to your own people.",
  bio: [
    "Tejas leads HariTech across both sides of the joint venture: the US practice that sets specification and review standards, and the Vadodara operation that fabricates, installs and services the work.",
    "He stays close to the technical side of a mandate rather than the sales side — scoping load, utilities, access and shutdown windows himself, so what gets quoted is what the floor actually needs.",
  ],
} as const;

export const stats = [
  { value: "22+", label: "Years serving industry" },
  { value: "18", label: "Industries served" },
  { value: "400+", label: "Projects commissioned" },
  { value: "99.2%", label: "Delivered uptime target" },
];

export const capabilities = [
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

export const processSteps = [
  {
    n: "01",
    t: "Assess",
    d: "Site survey, load studies and constraint mapping before a single line is drawn.",
  },
  {
    n: "02",
    t: "Engineer",
    d: "Detailed design, simulation and costed BOM with alternatives you can actually compare.",
  },
  {
    n: "03",
    t: "Build",
    d: "Fabrication, assembly and factory acceptance testing under our own quality regime.",
  },
  {
    n: "04",
    t: "Sustain",
    d: "Commissioning, operator training and long-term maintenance with measured KPIs.",
  },
];

export const deliveryTracks = [
  {
    icon: Ruler,
    title: "Design",
    copy: "Plant surveys, load calculations, layouts, BOQs and execution drawings.",
  },
  {
    icon: PackageCheck,
    title: "Products",
    copy: "HVAC&R packages, filters, piping assemblies, panels, conveyors and utility equipment.",
  },
  {
    icon: Wrench,
    title: "Solutions",
    copy: "Custom engineering for water, air, energy, clean rooms and production support systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Executions",
    copy: "Fabrication, installation, commissioning, handover and lifecycle service.",
  },
];

export const principles = [
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

export const resources = [
  {
    icon: FileText,
    title: "Capability statement",
    copy: "A quick, shareable overview of industries, services and contact channels.",
    href: company.capabilityStatement,
    label: "Download",
    download: true,
  },
  {
    icon: Newspaper,
    title: "Engineering notes",
    copy: "Short reads on maintenance, clean-room utilities and energy-saving retrofits.",
    href: "/capabilities#notes",
    label: "View notes",
  },
  {
    icon: PackageCheck,
    title: "Product catalogue",
    copy: "Core categories for HVAC, filtration, piping, automation and material handling.",
    href: "/services",
    label: "Explore",
  },
];

export const engineeringNotes = [
  "Sizing exhaust for the worst hour of the shift, not the average",
  "Why clean-room recovery time matters more than particle count",
  "Cooling tower approach temperature as an early failure signal",
  "Compressed air leaks: the cheapest energy project on any site",
];
