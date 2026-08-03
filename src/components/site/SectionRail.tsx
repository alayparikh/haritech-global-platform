import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type RailSection = { id: string; label: string };

/**
 * Sticky in-page navigation for the long pages. Desktop only — on smaller
 * screens the page order itself is the navigation.
 */
export function SectionRail({ sections }: { sections: RailSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="On this page"
      // Only rendered once the viewport is wide enough to give the rail its own
      // gutter. The content container is 1280px, the rail about 180px plus its
      // offset, so anything under ~1700px would put it on top of the text —
      // which is exactly what it used to do at xl.
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden w-44 -translate-y-1/2 min-[1700px]:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-1 rounded-sm border border-border/70 bg-background/85 p-2 shadow-panel backdrop-blur-xl">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "flex items-center gap-2.5 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
                active === s.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 flex-none rounded-full transition-colors",
                  active === s.id ? "bg-gradient-brand" : "bg-border",
                )}
              />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
