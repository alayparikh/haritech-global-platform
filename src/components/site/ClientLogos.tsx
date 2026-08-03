import type { Client } from "@/data/clients";
import { cn } from "@/lib/utils";

/**
 * Real logo files, if any have been added. See `public/images/clients/README.md`
 * for the naming rule — dropping a file in that folder is the only step needed
 * for it to appear here, and a client without one keeps its wordmark.
 */
const logoFiles = import.meta.glob("/public/images/clients/*.{svg,webp,png,jpg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const EXTENSION_ORDER = ["svg", "webp", "png", "jpg"];

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const logoFor = (name: string) => {
  const slug = slugify(name);
  for (const ext of EXTENSION_ORDER) {
    const hit = logoFiles[`/public/images/clients/${slug}.${ext}`];
    if (hit) return hit;
  }
  return undefined;
};

/**
 * One client, sized to a fixed box so a wordmark and a logo file sit on the
 * same optical baseline. Desaturated at rest so 30-odd marks read as one
 * texture rather than a ransom note; full colour on hover.
 */
function ClientPlate({ client, tone }: { client: Client; tone: "light" | "ink" }) {
  const logo = logoFor(client.name);

  return (
    <div
      title={`${client.name} — ${client.category}`}
      className={cn(
        "group flex h-20 items-center justify-center px-5",
        tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
      )}
    >
      {logo ? (
        <img
          src={logo}
          alt={client.name}
          loading="lazy"
          className={cn(
            "max-h-9 w-auto max-w-full object-contain opacity-70 grayscale transition duration-300",
            "group-hover:opacity-100 group-hover:grayscale-0",
            tone === "ink" && "brightness-0 invert group-hover:brightness-100 group-hover:invert-0",
          )}
        />
      ) : (
        <span
          className={cn(
            "font-display text-base leading-none transition-colors duration-300 sm:text-lg",
            tone === "ink" ? "group-hover:text-cyan" : "group-hover:text-primary",
            client.style,
          )}
        >
          {client.mark}
        </span>
      )}
    </div>
  );
}

/**
 * Full customer list. An auto-fit grid rather than a fixed column count, so 33
 * names land in six or seven short rows instead of the nine-row wall of text
 * the section used to be.
 */
export function ClientWall({ clients, className }: { clients: Client[]; className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-px overflow-hidden rounded-sm border border-border bg-border",
        className,
      )}
    >
      {clients.map((c) => (
        <li key={c.name} className="bg-card transition-colors duration-300 hover:bg-secondary/60">
          <ClientPlate client={c} tone="light" />
        </li>
      ))}
    </ul>
  );
}

/**
 * Teaser strip: one continuously scrolling row. The track is duplicated so the
 * loop is seamless; `aria-hidden` on the copy keeps screen readers from
 * announcing every client twice. Reduced-motion users get a static, wrapped
 * grid instead — see `marquee` in styles.css.
 */
export function ClientStrip({ clients, className }: { clients: Client[]; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        // Fades both ends so the row reads as continuing past the viewport
        // rather than being cut off.
        "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
    >
      <div className="marquee flex w-max items-center gap-px">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex items-center gap-px"
          >
            {clients.map((c) => (
              <li key={`${copy}-${c.name}`} className="w-44 flex-none bg-card">
                <ClientPlate client={c} tone="light" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
