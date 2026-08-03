import { cn } from "@/lib/utils";

/**
 * Team photos, if any have been added. See `public/images/team/README.md` for
 * the naming rule — dropping a file in that folder is the only step needed.
 */
const portraitFiles = import.meta.glob("/public/images/team/*.{webp,jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const EXTENSION_ORDER = ["webp", "jpg", "png"];

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

/**
 * A person's photo, or a brand monogram while there isn't one. Both render at
 * the same 4:5 ratio, so adding the real photo later can't shift the layout.
 */
export function Portrait({ name, className }: { name: string; className?: string }) {
  const slug = slugify(name);
  const src = EXTENSION_ORDER.map(
    (ext) => portraitFiles[`/public/images/team/${slug}.${ext}`],
  ).find(Boolean);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-secondary shadow-lift",
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
          width={1200}
          height={1500}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-brand">
          <span
            aria-hidden="true"
            className="font-display text-6xl font-bold text-primary-foreground/90"
          >
            {initials(name)}
          </span>
          <span className="sr-only">{name}</span>
        </div>
      )}
    </div>
  );
}
