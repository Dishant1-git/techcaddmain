import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { steps } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Zig-zag journey timeline. Cards slide in from their side (data-reveal → works everywhere); where CSS scroll-driven
 * animations are supported the centre line fills, each node lights up as it passes and the progress bars grow.
 * No overflow-hidden on the section or its ancestors here: it would capture the view() timelines.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-brand-50/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title={<>Your journey from <span className="text-gradient">enquiry to offer letter</span></>}
          text="A proven 4-step path followed by 50,000+ TechCADD alumni."
        />

        <ol className="timeline relative mx-auto mt-16 max-w-5xl">
          {/* Track + scroll-filled line */}
          <li role="presentation" className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-1/2 rounded-full bg-brand-200 lg:left-1/2" aria-hidden>
            <div className="timeline-fill h-full w-full rounded-full bg-accent-500" />
          </li>

          {steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <li key={s.title} className="relative grid pb-12 pl-16 last:pb-0 lg:grid-cols-2 lg:gap-x-28 lg:pb-16 lg:pl-0">
                {/* Node */}
                <div className="absolute left-6 top-5 -translate-x-1/2 lg:left-1/2" aria-hidden>
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-400/40 motion-reduce:animate-none" />
                  <span className="timeline-dot relative grid size-12 place-items-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 ring-4 ring-white">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                </div>

                {/* Card */}
                <div data-reveal={left ? "left" : "right"} className={left ? "lg:col-start-1" : "lg:col-start-2"}>
                  <div className="card group p-7 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_48px_-20px_rgba(29,83,240,0.35)]">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                      Step {pad(i + 1)} <span className="text-ink-300">/ {pad(steps.length)}</span>
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-ink-900 sm:text-2xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-500">{s.text}</p>
                    <div className="mt-6 flex items-center gap-3" aria-hidden>
                      <div className="h-1.5 flex-1 overflow-clip rounded-full bg-brand-100">
                        <div className="hiw-bar h-full origin-left rounded-full bg-accent-500" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
                      </div>
                      <span className="font-mono text-xs font-semibold text-ink-500">{Math.round(((i + 1) / steps.length) * 100)}%</span>
                    </div>
                  </div>
                </div>

                {/* Ghost number on the opposite side (desktop) */}
                <div
                  data-reveal="zoom"
                  className={`hidden select-none items-center font-display text-[9rem] font-extrabold leading-none text-brand-200/70 lg:row-start-1 lg:flex ${left ? "lg:col-start-2" : "lg:col-start-1 lg:justify-end"}`}
                  aria-hidden
                >
                  {pad(i + 1)}
                </div>
              </li>
            );
          })}
        </ol>

        <div data-reveal="zoom" className="mt-14 text-center">
          <Link href="/#demo" className="btn-brand">Start with step 01 — it&apos;s free <ArrowRight className="size-4" aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}
