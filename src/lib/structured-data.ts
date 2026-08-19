import { company, radiantControl, siteUrl } from "@/data/site";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

/**
 * Company-registry aggregators outrank the real site for its own name because
 * they publish machine-readable entity data and we published none. This is that
 * data, drawn from the same constants the pages render, so the two can't drift.
 */
const [addressLine, addressLocalityLine, addressRegionLine] = company.address;
const indiaPhone = company.phones[0]?.href.replace("tel:", "") ?? "";
const usPhone = radiantControl.phones[0]?.href.replace("tel:", "") ?? "";

const organisation = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  alternateName: "HariTech Automations",
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: `${siteUrl}/og-cover.jpg`,
  description:
    "Industrial automation systems integrator in Vadodara, Gujarat — PLC, SCADA, DCS, HMI and robotics integration, control panels and lifecycle support across 18 industries.",
  email: company.emails[1] ?? "",
  telephone: indiaPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: [addressLine, addressLocalityLine].filter(Boolean).join(", "),
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: addressRegionLine?.match(/\d{6}/)?.[0] ?? "390019",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: industries.map((industry) => `${industry.name} automation`),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.emails[1] ?? "",
      telephone: indiaPhone,
      areaServed: "IN",
      availableLanguage: ["en", "hi", "gu"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: radiantControl.emails[0] ?? "",
      telephone: usPhone,
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: company.name,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

/** Each integration package is a distinct service a plant can actually buy. */
const serviceCatalogue = services.map((service) => ({
  "@type": "Service",
  name: service.title,
  description: service.copy,
  serviceType: service.title,
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "India" },
}));

export const STRUCTURED_DATA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [organisation, website, ...serviceCatalogue],
});
