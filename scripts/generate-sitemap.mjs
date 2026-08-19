/**
 * Writes public/sitemap.xml before every build.
 *
 * Without it Google only ever found the homepage — a Firecrawl map of the
 * domain returned one URL against 25 real pages, because a sitemap is the
 * manifest crawlers read first. The industry slugs are parsed out of the data
 * file rather than duplicated here, so adding an industry updates the sitemap
 * automatically.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://www.haritechautomations.com";

/** Highest first — relative weight within the site, not a ranking request. */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/industries", priority: "0.9", changefreq: "monthly" },
  { path: "/capabilities", priority: "0.8", changefreq: "monthly" },
  { path: "/projects", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "yearly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
];

const source = readFileSync(resolve(root, "src/data/industries.ts"), "utf8");

// Each record runs from its own `slug:` to the next one. Industry records carry
// relatedServices; the six family records don't, and families are anchors on
// /industries rather than pages of their own.
const slugMatches = [...source.matchAll(/slug: "([a-z-]+)"/g)];

const industrySlugs = slugMatches
  .filter(({ index }, i) => {
    const record = source.slice(index, slugMatches[i + 1]?.index ?? source.length);
    return record.includes("relatedServices");
  })
  .map(([, slug]) => slug);

if (industrySlugs.length === 0) {
  throw new Error("generate-sitemap: parsed zero industry slugs — check src/data/industries.ts");
}

const lastmod = new Date().toISOString().slice(0, 10);

const urls = [
  ...STATIC_ROUTES,
  ...industrySlugs.map((slug) => ({
    path: `/industries/${slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority, changefreq }) =>
      `  <url>\n` +
      `    <loc>${SITE_URL}${path}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      `  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml — ${urls.length} URLs (${industrySlugs.length} industries)`);
