import {
  Bot,
  Cable,
  ClipboardCheck,
  CircuitBoard,
  Cpu,
  Database,
  MonitorCog,
  Network,
  PanelsTopLeft,
  RefreshCw,
  ShieldCheck,
  Users,
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
    slug: "plc-programming",
    icon: Cpu,
    title: "PLC Programming & Upgrades",
    copy: "PLC selection, logic development and migration for machines and lines that need control, not just power.",
    detail:
      "Logic written to be read by the next engineer, not just to pass FAT. We work across Siemens, Allen-Bradley, Schneider and Mitsubishi platforms, and we migrate legacy or obsolete controllers without a full machine rebuild.",
    deliverables: [
      "Control philosophy, I/O schedules and logic design",
      "PLC programming, testing and structured documentation",
      "Migration from obsolete or unsupported controller platforms",
      "On-site commissioning and operator handover",
    ],
  },
  {
    slug: "scada-hmi",
    icon: MonitorCog,
    title: "SCADA & HMI Development",
    copy: "Supervisory control, operator screens and alarm management built around how your operators actually work the line.",
    detail:
      "SCADA and HMI screens designed for the decision an operator has to make in the moment, not a tag-list dump. Trending, alarm rationalisation and historian integration are scoped up front.",
    deliverables: [
      "HMI screen design and navigation for operator workflow",
      "SCADA architecture, tag database and redundancy design",
      "Alarm rationalisation and event logging",
      "Historian, trending and shift-report integration",
    ],
  },
  {
    slug: "dcs-integration",
    icon: Network,
    title: "DCS Integration",
    copy: "Distributed control system engineering for continuous process plants where a single controller is not enough.",
    detail:
      "DCS scope from process narrative to loop tuning, integrated with the safety system rather than bolted alongside it. We work with what is already installed rather than forcing a platform change.",
    deliverables: [
      "Process narratives, control philosophy and loop design",
      "DCS configuration, graphics and controller programming",
      "Integration with existing PLC, SIS and field instrumentation",
      "Loop checks, tuning and commissioning support",
    ],
  },
  {
    slug: "robotics-motion",
    icon: Bot,
    title: "Robotics & Motion Control",
    copy: "Robotic cells, servo and VFD-driven motion integrated into the line, not delivered as a standalone island.",
    detail:
      "Robot cell integration, safety fencing logic, motion sequencing and drive tuning done as one scope with the rest of the line's control system, so handoffs between machine and robot are clean.",
    deliverables: [
      "Robot cell layout, safety interlocking and cycle programming",
      "Servo and VFD selection, tuning and motion sequencing",
      "Vision and sensor integration for pick, place and inspection tasks",
      "Cell commissioning and cycle-time verification",
    ],
  },
  {
    slug: "control-panels",
    icon: PanelsTopLeft,
    title: "Control Panel Design & Build",
    copy: "Control and MCC panels engineered, built and factory-tested to IEC 61439 before they leave the shop.",
    detail:
      "Panels built in-house from schematic to FAT, so wiring, labelling and documentation match what actually gets commissioned on site rather than what was originally drawn.",
    deliverables: [
      "Schematic design, panel layout and bill of materials",
      "Panel fabrication, wiring and factory acceptance testing",
      "IEC 61439 compliant builds with UL-panel options",
      "As-built drawings and wiring documentation",
    ],
  },
  {
    slug: "instrumentation",
    icon: Cable,
    title: "Instrumentation & Field Devices",
    copy: "Sensor, transmitter and field-device selection, installation and loop checking for control systems that need real data.",
    detail:
      "Automation is only as good as the signal feeding it. We specify instrumentation for the process condition it actually sees, install it correctly, and prove every loop before handover.",
    deliverables: [
      "Instrument specification, sizing and vendor selection",
      "Installation, wiring and junction-box termination",
      "Loop checking, calibration and signal verification",
      "Instrument index and as-built documentation",
    ],
  },
  {
    slug: "industrial-networking",
    icon: CircuitBoard,
    title: "Industrial Networking & Communication",
    copy: "Ethernet/IP, Profinet, Modbus and fieldbus networks that connect controllers, drives, panels and field devices reliably.",
    detail:
      "Network architecture designed for the plant's actual traffic and redundancy needs, with managed switches, ring topologies and documented IP schemes instead of a flat, undocumented network nobody can troubleshoot.",
    deliverables: [
      "Network architecture and topology design",
      "Managed switch configuration and VLAN segmentation",
      "Protocol conversion and gateway integration (Modbus, Profinet, Ethernet/IP)",
      "Network documentation and IP address registers",
    ],
  },
  {
    slug: "mes-data",
    icon: Database,
    title: "MES & Data Integration",
    copy: "Production data pulled from the floor into MES, ERP and reporting systems that management actually trusts.",
    detail:
      "We connect SCADA and PLC data to MES and reporting layers so OEE, downtime and batch records are captured automatically instead of transcribed from a logbook.",
    deliverables: [
      "PLC/SCADA-to-MES and ERP data integration",
      "OEE, downtime and batch-tracking dashboards",
      "Historian configuration and data retention design",
      "Custom reporting for shift, quality and compliance teams",
    ],
  },
  {
    slug: "migration-upgrades",
    icon: RefreshCw,
    title: "Obsolescence & Migration Upgrades",
    copy: "PLC, HMI and drive platforms replaced before end-of-life support turns into unplanned downtime.",
    detail:
      "We map what is running, flag what is at end-of-life, and migrate logic and screens to current platforms with minimal production disruption — planned around your shutdown window, not ours.",
    deliverables: [
      "Obsolescence audit across controllers, drives and HMIs",
      "Logic and screen migration to current platforms",
      "Spares cross-reference and lifecycle planning",
      "Cutover planning around shutdown windows",
    ],
  },
  {
    slug: "commissioning-fat-sat",
    icon: ClipboardCheck,
    title: "FAT/SAT & Commissioning",
    copy: "Factory and site acceptance testing that catches integration problems before they reach the production line.",
    detail:
      "Structured FAT protocols run against the actual control philosophy, followed by SAT and commissioning on site with documented sign-off at every stage.",
    deliverables: [
      "FAT protocols, test scripts and witnessed testing",
      "Site acceptance testing and punch-list closure",
      "Commissioning support and operator training",
      "Sign-off documentation and handover packages",
    ],
  },
  {
    slug: "safety-systems",
    icon: ShieldCheck,
    title: "Safety & Interlock Systems",
    copy: "Safety PLCs, light curtains, interlocks and SIS logic engineered to the risk assessment, not to a generic template.",
    detail:
      "Safety functions specified from the machine's actual risk assessment, with SIL/PL ratings verified and documented rather than assumed.",
    deliverables: [
      "Risk assessment review and safety function specification",
      "Safety PLC, relay and light-curtain integration",
      "SIL/PL verification and validation testing",
      "Safety documentation and periodic proof-test schedules",
    ],
  },
  {
    slug: "amc-support",
    icon: Users,
    title: "Automation AMC & Support",
    copy: "Annual maintenance contracts and remote or on-site support for PLC, SCADA and DCS systems already in service.",
    detail:
      "Contracts written around system criticality, with defined response times, spares availability and engineers who already know your logic rather than starting from zero on every call.",
    deliverables: [
      "Preventive maintenance schedules for control systems",
      "Defined response times by system criticality",
      "Remote diagnostics and on-site troubleshooting",
      "Backup management for logic, screens and configurations",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
