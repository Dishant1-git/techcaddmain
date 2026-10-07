import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";
import { DemoForm } from "./DemoForm";

/** Bottom CTA (modelled on techcaddjalandhar.com "Ready to get started?"): centred headline, mobile number + Book Demo, call pill. */
export function DemoCta() {
  return (
    <section id="demo" className="section defer-render relative isolate overflow-hidden bg-linear-to-b from-white via-brand-100/70 to-brand-50">
      <div className="bg-grid-light absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="container-x text-center">
        <p data-reveal="up" className="flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
          <span className="h-px w-9 bg-ink-300" aria-hidden /> Ready to get started?
        </p>
        <h2 data-reveal="up" style={delay(1)} className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
          Start building <br className="hidden sm:block" />
          your <span className="text-accent-500">career</span> today.
        </h2>
        <p data-reveal="up" style={delay(2)} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
          Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and
          the job you want.
        </p>

        <div data-reveal="up" style={delay(3)} className="mx-auto mt-9 max-w-2xl">
          <DemoForm />
        </div>

        <div data-reveal="up" style={delay(4)} className="mt-8">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-4 rounded-full bg-linear-to-r from-brand-500 to-brand-700 py-2.5 pl-3 pr-8 text-left text-white shadow-[0_20px_40px_-12px_rgba(29,83,240,0.55)] transition-transform hover:-translate-y-0.5"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 bg-white/20">
              <Phone className="size-5 fill-white" aria-hidden />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Call now</span>
              <span className="font-display text-xl font-bold">{site.phone}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
