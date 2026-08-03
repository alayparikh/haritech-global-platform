import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { company } from "@/data/site";
import { Container } from "./Container";
import { btn } from "./primitives";

export function CTABand({
  title = "Tell us what needs to run better.",
  copy = "Send a scope, a drawing or just a problem statement. An engineer — not a salesperson — responds within one working day.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="overflow-hidden rounded-sm bg-gradient-brand px-8 py-14 shadow-lift md:px-16 md:py-16">
          <div className="grid gap-8 text-primary-foreground md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow opacity-80">Let's build</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">{title}</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed opacity-90">{copy}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <Link to="/contact" className={btn("onBrand", "lg")}>
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={btn("onInk", "lg")}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
