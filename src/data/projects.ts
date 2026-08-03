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
    sector: "HVAC & utilities",
    title: "Production-floor air handling retrofit",
    image: engineeringImg,
    fallbackImage: engineeringImg,
    scope: "Load study, AHU selection, duct routing, controls and commissioning.",
    outcome: "Stabilised working conditions for continuous-shift manufacturing.",
    industries: ["engineering-heavy-industries", "automobile", "metal-industries", "electronics"],
  },
  {
    sector: "Dairy process",
    title: "Hygienic piping and cold-chain support",
    image: dairyImg,
    fallbackImage: dairyImg,
    scope: "Stainless process lines, utility piping, insulation and validation support.",
    outcome: "Cleaner operations with service access planned into the layout.",
    industries: ["dairy", "food-beverages", "pharma", "sugar"],
  },
  {
    sector: "Renewable industry",
    title: "Energy efficiency and balance-of-plant work",
    image: renewableImg,
    fallbackImage: renewableImg,
    scope: "Power distribution coordination, support steelwork and energy retrofits.",
    outcome: "Lower operating load with simpler long-term maintenance.",
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
