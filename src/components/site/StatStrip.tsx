import { stats } from "@/data/site";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

/**
 * Hero stats. The first cell carries no left padding so the figures start on
 * exactly the same vertical line as every section heading below.
 */
export function StatStrip() {
  return (
    <div className="relative border-t border-ink-foreground/10 bg-ink">
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "border-ink-foreground/10",
                i % 2 === 1 && "border-l pl-6",
                i % 4 === 0 ? "md:border-l-0 md:pl-0" : "md:border-l md:pl-10",
              )}
            >
              <dt className="font-display text-3xl font-bold text-cyan md:text-4xl">{s.value}</dt>
              <dd className="mt-2 text-sm text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
