import {
  BadgeCheck,
  Building2,
  Cpu,
  ClipboardCheck,
  Eye,
  FileText,
  Gauge,
  Globe2,
  Layers,
  Mail,
  MonitorCog,
  Newspaper,
  PanelsTopLeft,
  RefreshCw,
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
  name: "Dipak Rathod",
  role: "Director",
  location: "United States · India",
  phone: { display: "+91 98257 43029", href: "tel:+91 98257 43029" },
  quote:
    "Every plant we walk into already has controllers running. Our job is to leave it better integrated — documented, monitored and handed back to your own people.",
  bio: [
    "I lead HariTech across both sides of the joint venture: the US practice that sets specification and review standards, and the Vadodara operation that programs, builds and services the automation.",
    "He stays close to the technical side of a mandate rather than the sales side — scoping controllers, networks and shutdown windows himself, so what gets quoted is what the plant actually needs.",
  ],
} as const;

export const stats = [
  { value: "22+", label: "Years serving industry" },
  { value: "18", label: "Industries served" },
  { value: "400+", label: "Control systems commissioned" },
  { value: "99.2%", label: "System availability target" },
];

export const capabilities = [
  {
    icon: Workflow,
    title: "Concept to commissioning",
    copy: "One accountable team from control philosophy and design through panel build, programming and site commissioning.",
  },
  {
    icon: Gauge,
    title: "Platform-agnostic integration",
    copy: "PLC, SCADA, DCS and HMI work across Siemens, Allen-Bradley, Schneider and Mitsubishi — we integrate what you already run.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance by design",
    copy: "Safety, hazardous-area and industry-specific standards embedded into control philosophy, not retrofitted after inspection.",
  },
  {
    icon: Globe2,
    title: "Multi-sector integration",
    copy: "Automation experience spanning metals, process, food & life sciences, mobility and utilities across India and overseas mandates.",
  },
];

export const processSteps = [
  {
    n: "01",
    t: "Assess",
    d: "Control audit, obsolescence review and constraint mapping before a line of logic is written.",
  },
  {
    n: "02",
    t: "Engineer",
    d: "Control philosophy, panel design and PLC/SCADA architecture with alternatives you can actually compare.",
  },
  {
    n: "03",
    t: "Build",
    d: "Panel build, programming and factory acceptance testing under our own quality regime.",
  },
  {
    n: "04",
    t: "Sustain",
    d: "Commissioning, operator training and long-term AMC with measured uptime KPIs.",
  },
];

export const deliveryTracks = [
  {
    icon: MonitorCog,
    title: "Design",
    copy: "Control audits, I/O schedules, control philosophy and panel schematics.",
  },
  {
    icon: PanelsTopLeft,
    title: "Panels",
    copy: "IEC 61439 control panels, PLC racks, HMI stations and safety-rated enclosures.",
  },
  {
    icon: Cpu,
    title: "Integration",
    copy: "PLC, SCADA, DCS, robotics and industrial networking engineered around your existing systems.",
  },
  {
    icon: RefreshCw,
    title: "Sustain",
    copy: "Commissioning, migration, handover and AMC support with lifecycle service.",
  },
];

export const principles = [
  {
    icon: Target,
    title: "Mission",
    copy: "A lean, cost-efficient systems integrator built on control-system reliability — surpassing customer expectations of quality and delivery through sustainable engineering processes and an empowered team.",
  },
  {
    icon: Eye,
    title: "Vision",
    copy: "To be a customer-oriented benchmark for industrial automation integration, execution and lifecycle support.",
  },
  {
    icon: BadgeCheck,
    title: "Quality policy",
    copy: "Continual improvement of a well-defined quality management system, platform-agnostic integration approaches, and recognition for premium reliability and documentation standards.",
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
    copy: "Short reads on control-system migration, SCADA visibility and obsolescence planning.",
    href: "/capabilities#notes",
    label: "View notes",
  },
  {
    icon: MonitorCog,
    title: "Solutions catalogue",
    copy: "Core categories for PLC, SCADA, DCS, robotics and control-panel integration.",
    href: "/services",
    label: "Explore",
  },
];

export const engineeringNotes = [
  "Why an obsolescence audit should happen before the controller fails, not after",
  "SCADA alarm floods: fixing the alarm philosophy, not just the tag count",
  "What actually breaks when a PLC migration is rushed",
  "Network segmentation as the cheapest cybersecurity project on any plant floor",
];
