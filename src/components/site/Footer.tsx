import { Link } from "@tanstack/react-router";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

import buildwiseIcon from "@/assets/buildwise-icon.png";
import { families, industriesByFamily } from "@/data/industries";
import { company, navLinks } from "@/data/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="onDark" />
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              <Globe2 className="h-3.5 w-3.5 flex-none" />
              {company.venture.short}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Manufacturer, supplier and service provider for industrial utility and process systems
              — engineered, built and maintained by one accountable team.
            </p>
            <div className="mt-7 space-y-3 text-sm text-ink-muted">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none opacity-70" />
                <span>
                  {company.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-cyan">
                      {e}
                    </a>
                  ))}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none opacity-70" />
                <span>
                  {company.phones.map((p) => (
                    <a key={p.href} href={p.href} className="block hover:text-cyan">
                      {p.display}
                    </a>
                  ))}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none opacity-70" />
                <address className="not-italic leading-relaxed">
                  {company.name}
                  <br />
                  {company.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="eyebrow text-cyan">Industries</p>
            {/* Subgrid lets the heading and list rows align across all columns,
                no matter how many lines a family name wraps to. */}
            <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:grid-rows-[repeat(6,auto)] lg:grid-cols-3 lg:grid-rows-[repeat(4,auto)]">
              {families.map((f) => (
                <div key={f.slug} className="sm:row-span-2 sm:grid sm:grid-rows-subgrid">
                  <Link
                    to="/industries"
                    hash={f.slug}
                    className="block text-xs font-semibold uppercase leading-[1.5] tracking-[0.14em] text-ink-foreground/80 hover:text-cyan"
                  >
                    {f.name}
                  </Link>
                  <ul className="mt-2 space-y-1.5">
                    {industriesByFamily(f.slug).map((ind) => (
                      <li key={ind.slug}>
                        <Link
                          to="/industries/$slug"
                          params={{ slug: ind.slug }}
                          className="text-sm text-ink-muted transition-colors hover:text-cyan"
                        >
                          {ind.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-cyan">Company</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-ink-muted transition-colors hover:text-cyan">
                  Home
                </Link>
              </li>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-muted transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={company.capabilityStatement}
                  download
                  className="text-sm text-ink-muted transition-colors hover:text-cyan"
                >
                  Capability statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-ink-foreground/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Vadodara, Gujarat · Serving industry across India</p>
          <a
            href={company.builtBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-none items-center gap-2 transition-colors hover:text-cyan"
          >
            <span>Built by</span>
            {/* Decorative: the wordmark beside it already names the studio, so
                alt text here would make a screen reader say it twice. */}
            <img
              src={buildwiseIcon}
              alt=""
              width={95}
              height={84}
              loading="lazy"
              decoding="async"
              className="h-5 w-auto"
            />
            <span className="font-semibold text-ink-foreground/80 transition-colors group-hover:text-cyan">
              {company.builtBy.name}
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
