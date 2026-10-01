import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";
import { DemoForm } from "./DemoForm";

/** Bottom CTA (modelled on techcaddjalandhar.com "Ready to get started?"): centred headline, mobile number + Book Demo, call pill. */
export function DemoCta() {
  return (
    <section id="demo" className="section relative isolate overflow-hidden bg-linear-to-b from-white via-brand-100/70 to-brand-50">
      <div className="bg-grid-light absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="container-x text-center">
        <p data-reveal="up" className="flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
          <span className="h-px w-9 bg-ink-300" aria-hidden /> Ready to get started?
        </p>
        <h2 data-reveal="up" style={delay(1)} className="mx-auto mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
          Start building <br className="hidden sm:block" />
          your <span className="text-amber-400">career</span> today.
        </h2>
        <p data-reveal="up" style={delay(2)} className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
          Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and
          the job you want.
        </p>

        <div data-reveal="up" style={delay(3)} className="mx-auto mt-12 max-w-3xl">
          <DemoForm />
        </div>

        <div data-reveal="up" style={delay(4)} className="mt-12">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-5 rounded-full bg-linear-to-r from-brand-500 to-brand-700 py-3 pl-4 pr-10 text-left text-white shadow-[0_20px_40px_-12px_rgba(29,83,240,0.55)] transition-transform hover:-translate-y-0.5"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-white/30 bg-white/20">
              <Phone className="size-6 fill-white" aria-hidden />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Call now</span>
              <span className="font-display text-2xl font-bold">{site.phone}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
