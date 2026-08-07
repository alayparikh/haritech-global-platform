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
 * same optical baseline. Logos render in full colour on a white card — many
 * source files carry their own solid brand-colour background, which reads as
 * a muddy block under a grayscale filter, so we let the mark's own colour do
 * the work instead of desaturating it.
 */
function ClientPlate({ client, tone }: { client: Client; tone: "light" | "ink" }) {
  const logo = logoFor(client.name);

  return (
    <div
      title={`${client.name} — ${client.category}`}
      className={cn(
        "group flex h-24 items-center justify-center px-6",
        tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
      )}
    >
      {logo ? (
        <img
          src={logo}
          alt={client.name}
          loading="lazy"
          className="max-h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
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
 * One continuously scrolling row. The track is duplicated so the loop is
 * seamless; `aria-hidden` on the copy keeps screen readers from announcing
 * every client twice. Reduced-motion users get a static, wrapped row instead
 * — see `marquee` / `marquee-reverse` in styles.css.
 */
function ClientMarqueeRow({
  clients,
  reverse,
  durationSeconds,
}: {
  clients: Client[];
  reverse?: boolean;
  durationSeconds?: number;
}) {
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      <div
        className={cn("flex w-max items-center gap-4", reverse ? "marquee-reverse" : "marquee")}
        style={durationSeconds ? { animationDuration: `${durationSeconds}s` } : undefined}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex items-center gap-4"
          >
            {clients.map((c) => (
              <li
                key={`${copy}-${c.name}`}
                className="w-44 flex-none overflow-hidden rounded-md border border-border bg-card shadow-sm"
              >
                <ClientPlate client={c} tone="light" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Splits a list into `rows` roughly-even, contiguous chunks. */
const chunk = <T,>(items: T[], rows: number): T[][] => {
  const size = Math.ceil(items.length / rows);
  return Array.from({ length: rows }, (_, i) => items.slice(i * size, i * size + size)).filter(
    (part) => part.length > 0,
  );
};

/**
 * Teaser strip: a single scrolling row, used where space is tight (e.g. the
 * homepage clients section).
 */
export function ClientStrip({ clients, className }: { clients: Client[]; className?: string }) {
  return (
    <div className={className}>
      <ClientMarqueeRow clients={clients} />
    </div>
  );
}

/**
 * Full customer list as several scrolling rows moving in alternating
 * directions at slightly different speeds. Never puts all 49-odd logos on
 * screen at once — each row's own scroll pace keeps mismatched logo
 * backgrounds from reading as one flat, cluttered wall.
 */
export function ClientMarqueeWall({
  clients,
  rows = 3,
  className,
}: {
  clients: Client[];
  rows?: number;
  className?: string;
}) {
  const parts = chunk(clients, rows);

  return (
    <div className={cn("space-y-4", className)}>
      {parts.map((row, i) => (
        <ClientMarqueeRow key={i} clients={row} reverse={i % 2 === 1} durationSeconds={50 + i * 12} />
      ))}
    </div>
  );
}
