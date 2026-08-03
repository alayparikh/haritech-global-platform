import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";

import { families, industriesByFamily } from "@/data/industries";
import { navLinks } from "@/data/site";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { btn } from "./primitives";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const megaRef = useRef<HTMLDivElement>(null);

  // Close every menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      {/* Wraps the bar and the mega panel so moving between them doesn't close
          it — and so the outside-click handler treats the panel as inside.
          With the ref on the trigger alone, a mousedown in the panel closed it
          before the click could land, making every link in it dead. */}
      <div ref={megaRef} onMouseLeave={() => setMegaOpen(false)}>
        <Container className="flex items-center justify-between gap-6 py-4">
          <Link to="/" aria-label="HariTech home" className="flex items-center">
            <Logo variant="color" />
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((l) =>
              l.to === "/industries" ? (
                <div key={l.to} onMouseEnter={() => setMegaOpen(true)}>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    // Hover already opened the panel for mouse users, so a
                    // plain toggle here just shut it again and the label felt
                    // dead. Open it when closed (keyboard path), otherwise go
                    // to the index page the label names.
                    onClick={() => (megaOpen ? navigate({ to: l.to }) : setMegaOpen(true))}
                    className={cn(
                      "group relative inline-flex items-center gap-2 px-3 py-2 transition-colors hover:text-foreground",
                      isActive(l.to) && "text-foreground",
                    )}
                  >
                    <l.icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
                    {l.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", megaOpen && "rotate-180")}
                    />
                    <span
                      className={cn(
                        "pointer-events-none absolute inset-x-3 bottom-0 h-px origin-left bg-gradient-brand transition-transform duration-300",
                        isActive(l.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "group relative inline-flex items-center gap-2 px-3 py-2 transition-colors hover:text-foreground",
                    isActive(l.to) && "text-foreground",
                  )}
                >
                  <l.icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
                  {l.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-3 bottom-0 h-px origin-left bg-gradient-brand transition-transform duration-300",
                      isActive(l.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={dark ? "Use light theme" : "Use dark theme"}
              onClick={toggle}
              className="hidden h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link to="/contact" className={btn("brand", "md", "hidden xl:inline-flex")}>
              Talk to engineering
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {megaOpen && <MegaMenu />}
      </div>

      {menuOpen && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-border bg-background lg:hidden">
          <Container className="pb-6 pt-2">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.to}>
                  {l.to === "/industries" ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobileIndustriesOpen}
                        onClick={() => setMobileIndustriesOpen((v) => !v)}
                        className="flex w-full items-center gap-3 border-b border-border/60 py-3 text-sm font-medium text-foreground"
                      >
                        <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-secondary text-primary">
                          <l.icon className="h-4 w-4" />
                        </span>
                        {l.label}
                        <ChevronDown
                          className={cn(
                            "ml-auto h-4 w-4 transition-transform",
                            mobileIndustriesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileIndustriesOpen && (
                        <div className="border-b border-border/60 py-3 pl-11">
                          <Link
                            to="/industries"
                            className="block py-2 text-sm font-semibold text-primary"
                          >
                            All 18 industries
                          </Link>
                          {families.map((f) => (
                            <div key={f.slug} className="mt-3">
                              <p className="eyebrow text-[0.62rem] text-muted-foreground">
                                {f.name}
                              </p>
                              <ul className="mt-1">
                                {industriesByFamily(f.slug).map((ind) => (
                                  <li key={ind.slug}>
                                    <Link
                                      to="/industries/$slug"
                                      params={{ slug: ind.slug }}
                                      className="block py-1.5 text-sm text-muted-foreground"
                                    >
                                      {ind.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={l.to}
                      className="flex items-center gap-3 border-b border-border/60 py-3 text-sm font-medium text-foreground"
                    >
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-secondary text-primary">
                        <l.icon className="h-4 w-4" />
                      </span>
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/contact" className={btn("brand", "lg", "mt-5 w-full")}>
              Talk to engineering
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button type="button" onClick={toggle} className={btn("outline", "lg", "mt-3 w-full")}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {dark ? "Light theme" : "Dark theme"}
            </button>
          </Container>
        </nav>
      )}
    </header>
  );
}

/**
 * Full-width panel anchored to the header rather than to the nav item, so its
 * columns land on the same grid as the rest of the page and it can never
 * overflow the viewport.
 */
function MegaMenu() {
  return (
    <div className="hidden border-t border-border bg-background shadow-lift lg:block">
      <Container className="py-8">
        <div className="grid gap-x-8 gap-y-7 md:grid-cols-3 lg:grid-cols-6">
          {families.map((f) => (
            <div key={f.slug}>
              <Link
                to="/industries"
                hash={f.slug}
                className="group flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <f.icon className="h-4 w-4 flex-none text-primary" />
                {f.name}
              </Link>
              <ul className="mt-3 space-y-1.5 border-l border-border pl-4">
                {industriesByFamily(f.slug).map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      to="/industries/$slug"
                      params={{ slug: ind.slug }}
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {ind.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
          <p className="text-xs text-muted-foreground">
            18 industries across 6 engineering families.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            View all industries
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
