import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import {
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  HEADING_GAP,
  IconChip,
  Reveal,
  Section,
  btn,
  textLink,
} from "@/components/site/primitives";
import { familyBySlug, industries } from "@/data/industries";
import { services } from "@/data/services";
import { company, radiantControl, resources } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact HariTech — Automation Engineers, Vadodara",
      description:
        "Send a scope, a drawing or a problem statement to HariTech Automations, Vadodara. An engineer — not a salesperson — responds within one working day.",
      path: "/contact",
    }),
  component: Contact,
});

// h-12 on every control — a native <select> renders shorter than an <input>
// with the same padding, which left the two form columns visibly out of step.
const fieldClass =
  "mt-2 h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";
const labelClass = "block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground";

/**
 * FormSubmit emails the submission to us without a backend of our own. It only
 * starts delivering once someone opens the confirmation mail it sends on the
 * very first submission — until then submissions are accepted and dropped.
 */
const FORM_RECIPIENT = "info@radiantcontrolsystems.com";
/**
 * `action` points at the plain endpoint rather than the AJAX one so a visitor
 * without JavaScript still gets a working native POST. It also has to stay an
 * https target: Chrome disables autofill on any form aimed somewhere else,
 * which is what the old `mailto:` action was doing.
 */
const FORM_ENDPOINT = `https://formsubmit.co/${FORM_RECIPIENT}`;
const FORM_ENDPOINT_AJAX = `https://formsubmit.co/ajax/${FORM_RECIPIENT}`;

/**
 * A native <select> hands its popup to the OS — on macOS that's an oversized
 * light-grey list detached from the field, which no CSS can reach. Radix renders
 * its own listbox instead, so the popup matches the form. `name` makes Radix
 * emit a hidden native select, keeping the plain mailto submission working.
 */
function SelectField({
  id,
  label,
  placeholder,
  options,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <Select name={id}>
        <SelectTrigger
          id={id}
          className="mt-2 h-12 rounded-sm border-border bg-background px-4 text-sm shadow-none focus:border-primary focus:ring-0"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-72 rounded-sm">
          {options.map((o) => (
            <SelectItem key={o} value={o} className="rounded-sm text-sm">
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

type SubmitStatus = "idle" | "sending" | "sent" | "error";

/**
 * Submits over fetch so the visitor never leaves the page. reCAPTCHA has to be
 * off for that — FormSubmit can't show a challenge to an AJAX caller — so the
 * `_honey` honeypot below carries the spam filtering instead.
 */
function EnquiryForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT_AJAX, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error(`FormSubmit replied ${response.status}`);

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-border bg-card p-8 shadow-panel">
        <IconChip icon={CheckCircle2} />
        <h2 className="mt-5 font-display text-2xl font-bold">Enquiry received</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          An engineer reads it and responds within one working day. If it's urgent, WhatsApp or call
          the numbers on the left.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={btn("outline", "md", "mt-6")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-sm border border-border bg-card p-8 shadow-panel"
      action={FORM_ENDPOINT}
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="New enquiry from haritechautomations.com" />
      {/* <input type="hidden" name="_cc" value={FORM_CC} /> */}
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* Bots fill every field they find; people never see this one. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p className="eyebrow text-primary">Enquiry</p>
      <h2 className="mt-3 font-display text-2xl font-bold">Send us the scope</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Plant or organisation"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            className={fieldClass}
          />
        </div>
        <SelectField
          id="industry"
          label="Industry"
          placeholder="Select an industry"
          options={industries.map((i) => i.name)}
        />
        <SelectField
          id="service"
          label="Service needed"
          placeholder="Select a service"
          options={[...services.map((s) => s.title), "Not sure yet"]}
        />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">
          What needs to run better?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe the scope, the constraint or the problem you are seeing on the floor."
          className={`${fieldClass} h-auto resize-y py-3`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-xs leading-relaxed text-destructive">
          That didn't go through. Please try again, or email or WhatsApp us directly using the
          details on the left.
        </p>
      ) : (
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          An engineer responds within one working day. Prefer to reach us directly? Use the email,
          phone or WhatsApp details on the left.
        </p>
      )}
    </form>
  );
}

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Let's build"
        title="Tell us what needs to run better."
        lede="Send a scope, a drawing or just a problem statement. An engineer — not a salesperson — responds within one working day."
        image="/images/families/utilities-environment.jpg"
        imageAlt="Water treatment plant instrumentation under SCADA control"
        fallbackImage={familyBySlug["utilities-environment"].fallbackImage}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        scrollTo="enquiry"
      />

      <Section id="enquiry">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Reach us" title="Direct lines to the team." />

              <div className="mt-10 space-y-8 text-sm">
                <div className="space-y-6">
                  <p className="eyebrow text-muted-foreground/70">India office</p>
                  <div className="flex items-start gap-4">
                    <IconChip icon={Mail} variant="outline" />
                    <span className="pt-2">
                      {company.emails.map((e) => (
                        <a
                          key={e}
                          href={`mailto:${e}`}
                          className="block text-foreground hover:text-primary"
                        >
                          {e}
                        </a>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconChip icon={Phone} variant="outline" />
                    <span className="pt-2">
                      {company.phones.map((p) => (
                        <a
                          key={p.href}
                          href={p.href}
                          className="block text-foreground hover:text-primary"
                        >
                          {p.display}
                        </a>
                      ))}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 border-t border-border pt-6">
                  <p className="eyebrow text-muted-foreground/70">US office</p>
                  <div className="flex items-start gap-4">
                    <IconChip icon={Mail} variant="outline" />
                    <span className="pt-2">
                      {radiantControl.emails.map((e) => (
                        <a
                          key={e}
                          href={`mailto:${e}`}
                          className="block text-foreground hover:text-primary"
                        >
                          {e}
                        </a>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconChip icon={Phone} variant="outline" />
                    <span className="pt-2">
                      {radiantControl.phones.map((p) => (
                        <a
                          key={p.href}
                          href={p.href}
                          className="block text-foreground hover:text-primary"
                        >
                          {p.display}
                        </a>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={btn("brand")}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={company.capabilityStatement} download className={btn("outline")}>
                  <Download className="h-4 w-4" />
                  Capability statement
                </a>
              </div>

              {/* Fills the column so it reads level with the form card instead of
                  trailing off into empty space. */}
              <div className="mt-12 rounded-sm border border-border bg-secondary/50 p-7">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="eyebrow text-primary">What happens next</p>
                </div>
                <ol className="mt-6 space-y-5">
                  {[
                    "An engineer reads the scope — not a sales desk — and comes back within one working day.",
                    "We ask the handful of questions that decide feasibility: load, utilities, access, shutdown window.",
                    "You get a costed approach with alternatives you can compare, before any commitment.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-display text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="resources" tone="ink">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Resources"
            title="Useful next steps for buyers and plant teams."
            aside="Share the capability statement, review service categories, or send a project scope straight to the engineering team."
          />
          <div className={`${HEADING_GAP} grid gap-4 lg:grid-cols-3`}>
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                download={resource.download}
                className="group flex flex-col rounded-sm border border-ink-foreground/10 bg-ink-foreground/[0.04] p-7 transition-colors hover:bg-ink-foreground/[0.08]"
              >
                <IconChip icon={resource.icon} variant="outline-dark" />
                <span className="mt-6 block font-display text-lg font-semibold">
                  {resource.title}
                </span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {resource.copy}
                </span>
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  {resource.label}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Two distinct companies (HariTech in India, Radiant in the US) shown
          as paired columns — same shape, same weight — rather than as two
          disconnected sections down the page. */}
      <Section id="offices" className="py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Our offices" title="US office · India office." />
          <div className={`${HEADING_GAP} grid gap-10 lg:grid-cols-2`}>
            {[
              {
                key: "india",
                label: "India office",
                entity: company,
                mapTitle: "HariTech Automations location, Vadodara",
                link: undefined as { href: string; label: string } | undefined,
              },
              {
                key: "us",
                label: "US office",
                entity: radiantControl,
                mapTitle: "Radiant Control Systems location, Duluth",
                link: { href: radiantControl.website, label: "radiantcontrolsystems.com" },
              },
            ].map((office) => (
              <div
                key={office.key}
                className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card shadow-panel"
              >
                <div className="p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="eyebrow text-primary">{office.label}</p>
                    {office.link && (
                      <a
                        href={office.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={textLink("brand")}
                      >
                        {office.link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 font-display text-xl font-semibold">{office.entity.name}</p>

                  <div className="mt-6 space-y-5 text-sm">
                    <div className="flex items-start gap-4">
                      <IconChip icon={Mail} variant="outline" />
                      <span className="pt-2">
                        {office.entity.emails.map((e) => (
                          <a
                            key={e}
                            href={`mailto:${e}`}
                            className="block text-foreground hover:text-primary"
                          >
                            {e}
                          </a>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <IconChip icon={Phone} variant="outline" />
                      <span className="pt-2">
                        {office.entity.phones.map((p) => (
                          <a
                            key={p.href}
                            href={p.href}
                            className="block text-foreground hover:text-primary"
                          >
                            {p.display}
                          </a>
                        ))}
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <IconChip icon={MapPin} variant="outline" />
                      <address className="pt-2 not-italic leading-relaxed text-muted-foreground">
                        {office.entity.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </div>
                </div>

                <iframe
                  title={office.mapTitle}
                  src={office.entity.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[18rem] w-full flex-1 border-0"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
