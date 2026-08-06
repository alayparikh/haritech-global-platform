import engineeringImg from "@/assets/sector-engineering.jpg";
import dairyImg from "@/assets/sector-dairy.jpg";
import renewableImg from "@/assets/sector-renewable.jpg";

export type Project = {
  sector: string;
  title: string;
  image: string;
  fallbackImage: string;
  scope: string;
  outcome: string;
  /** Industry slugs this project is shown against. */
  industries: string[];
};

export const projects: Project[] = [
  {
    sector: "PLC & SCADA integration",
    title: "Line-wide PLC and SCADA migration on a live production floor",
    image: engineeringImg,
    fallbackImage: engineeringImg,
    scope: "Obsolescence audit, control philosophy, PLC/SCADA migration and commissioning.",
    outcome: "Unified visibility across previously isolated cells, planned around the shutdown window.",
    industries: ["engineering-heavy-industries", "automobile", "metal-industries", "electronics"],
  },
  {
    sector: "Batch & recipe control",
    title: "CIP and batch automation with traceable records",
    image: dairyImg,
    fallbackImage: dairyImg,
    scope: "PLC-based CIP skid automation, recipe management SCADA and MES data integration.",
    outcome: "Verified cycle completion and audit-ready batch records, no manual logbook.",
    industries: ["dairy", "food-beverages", "pharma", "sugar"],
  },
  {
    sector: "SCADA & monitoring",
    title: "Centralised SCADA for generation and utility assets",
    image: renewableImg,
    fallbackImage: renewableImg,
    scope: "Protocol conversion, SCADA integration and remote monitoring across mixed-vendor assets.",
    outcome: "Single dashboard replacing individual OEM portals, with alarm notification on faults.",
    industries: [
      "renewable-energy",
      "solar",
      "water-treatment",
      "cooling-towers-fans",
      "petrochemical",
      "chemical",
      "plastic-extrusion",
      "forging-casting",
      "concrete-mix",
      "assembly-supply-chain",
    ],
  },
];

export const projectsForIndustry = (slug: string) =>
  projects.filter((p) => p.industries.includes(slug));
