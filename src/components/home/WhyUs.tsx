import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { site, whyUs, whyUsIntro } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/components/ui/SectionHeading";

/** Why TechCADD: sticky intro column (left) + numbered reason rows with hairlines (right). */
export function WhyUs() {
  return (
    <section id="why-us" className="section defer-render bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Intro — sticks while the reasons scroll past (desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p data-reveal="up" className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> Why TechCADD
            </p>
            <h2 data-reveal="up" style={delay(1)} className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
              An international learning experience, <span className="text-gradient">right here in North India</span>
            </h2>

            <p data-reveal="up" style={delay(2)} className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">{whyUsIntro}</p>

            <div data-reveal="up" style={delay(3)} className="mt-9">
              <div className="on-dark relative isolate overflow-hidden rounded-3xl bg-ink-950 p-7 text-white">
                <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
                <div className="absolute -bottom-24 -right-16 -z-10 size-64 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />
                <div className="flex items-center gap-1 text-accent-400" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="mt-3 font-display text-4xl font-extrabold">
                  {site.rating.score}<span className="text-xl text-ink-300">/5</span>
                </p>
                <p className="mt-1 text-sm text-ink-300">Rated by {site.rating.reviews} students on Google</p>
                <Link href="/#demo" className="btn-primary mt-6">Book a Free Demo <ArrowRight className="size-4" aria-hidden /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <ol className="border-b border-ink-950/10 lg:col-span-7">
          {whyUs.map((w, i) => (
            <li key={w.title} data-reveal="right" style={delay(i % 3)} className="border-t border-ink-950/10">
              <div className="group relative grid grid-cols-[auto_1fr] gap-x-5 px-2 py-7 transition-[translate,background-color] duration-300 hover:translate-x-2 hover:bg-brand-50/60 sm:grid-cols-[auto_auto_1fr] sm:gap-x-7 sm:px-5 sm:py-8">
                <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent-500 transition-transform duration-300 group-hover:scale-y-100" aria-hidden />
                <span className="hidden pt-3 font-mono text-sm font-bold text-ink-300 transition-colors group-hover:text-brand-600 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid size-12 place-items-center rounded-xl border border-ink-950/10 bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={w.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">{w.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink-500">{w.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {w.points.map((p) => (
                      <li key={p} className="rounded-md border border-ink-950/10 bg-white px-2.5 py-1 font-mono text-[0.7rem] text-ink-700">{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
