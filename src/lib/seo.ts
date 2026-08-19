import { company, siteUrl } from "@/data/site";

/**
 * Every route builds its head through this, so no page can ship with a title
 * but no Open Graph card, or a description that silently falls back to the
 * root default. Routes that set their own metadata previously left `og:` alone
 * and inherited the root's — which meant Services, About and Contact were all
 * sharing one stale card on WhatsApp and LinkedIn.
 */
type SeoInput = {
  title: string;
  description: string;
  /** Route path with a leading slash, e.g. `/industries/dairy`. `/` for home. */
  path: string;
  /** Absolute or root-relative image; falls back to the site-wide cover. */
  image?: string;
};

/** Crawlers ignore relative image paths, so social images need the full origin. */
const absolute = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

export const OG_IMAGE = "/og-cover.jpg";

export function seo({ title, description, path, image = OG_IMAGE }: SeoInput) {
  const url = absolute(path);
  const cover = absolute(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: company.name },
      { property: "og:image", content: cover },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
