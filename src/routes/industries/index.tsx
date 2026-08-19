import { createFileRoute } from "@tanstack/react-router";

import { seo } from "@/lib/seo";

import { Container } from "@/components/site/Container";
import { CTABand } from "@/components/site/CTABand";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SectionRail } from "@/components/site/SectionRail";
import { SmartImage } from "@/components/site/SmartImage";
import { IndustryCard } from "@/components/site/cards";
import { HEADING_GAP, Section } from "@/components/site/primitives";
import { families, familyBySlug, industries, industriesByFamily } from "@/data/industries";

export const Route = createFileRoute("/industries/")({
  head: () =>
    seo({
      title: "Industries We Serve — 18 Sectors | HariTech",
      description:
        "PLC and SCADA automation for 18 industries: heavy engineering, metals, forging, chemical, pharma, dairy, food, sugar, automobile, electronics, solar and water treatment.",
      path: "/industries",
    }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  const railSections = families.map((f) => ({ id: f.slug, label: f.name }));

  return (
    <>
      <PageHero
        eyebrow={`${industries.length} industries · 6 engineering families`}
        title="Every floor has its own failure mode. We engineer for yours."
        lede="Grouped into six engineering families so you can find the constraints that match your plant — then go straight to what we build there."
        image="/images/families/heavy-engineering-metals.jpg"
        fallbackImage={familyBySlug["heavy-engineering-metals"].fallbackImage}
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
        scrollTo="heavy-engineering-metals"
      />

      <SectionRail sections={railSections} />

      {families.map((family, i) => {
        const list = industriesByFamily(family.slug);
        return (
          <Section key={family.slug} id={family.slug} tone={i % 2 === 1 ? "muted" : "default"}>
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-panel">
                    <SmartImage
                      src={family.image}
                      fallbackSrc={family.fallbackImage}
                      alt={family.name}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <SectionHeading
                    eyebrow={`Family ${String(i + 1).padStart(2, "0")} · ${list.length} industries`}
                    title={family.name}
                    lede={family.blurb}
                  />
                </div>
              </div>

              <div className={`${HEADING_GAP} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
                {list.map((industry) => (
                  <IndustryCard key={industry.slug} industry={industry} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CTABand
        title="Not sure which category your plant falls into?"
        copy="Most of our work sits across two or three of these. Describe the problem and we will tell you who on the team owns it."
      />
    </>
  );
}
