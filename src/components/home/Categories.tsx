import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import type { CSSProperties } from "react";
import { delay } from "@/components/ui/SectionHeading";

const total = categories.reduce((n, c) => n + c.courses, 0);

/** Where card `i` sits relative to the deck's resting spot, in card widths/heights: grid centre at lg (4 columns), top-centre at sm (2 columns). */
const deck = (i: number): CSSProperties => {
  const rows4 = Math.ceil(categories.length / 4);
  return {
    ...delay(i % 4),
    "--i": i,
    "--mid": (categories.length - 1) / 2,
    "--x4": 1.5 - (i % 4),
    "--y4": (rows4 - 1) / 2 - Math.floor(i / 4),
    "--x2": 0.5 - (i % 2),
    "--y2": -Math.floor(i / 2),
  } as CSSProperties;
};

/**
 * Learning tracks as a hairline "console" grid: numbered cells, mono paths, stack tags; a cell inverts to navy on hover.
 * Scroll-driven entrance (`.deck` / `.deck-card` in globals.css): the cells start as one tilted 3D deck and are dealt
 * out to their grid positions as the section scrolls in; browsers without scroll timelines fall back to data-reveal.
 */
export function Categories() {
  return (
    <section id="categories" className="section relative isolate bg-white">
      <div className="bg-grid-light absolute inset-0 -z-10 opacity-50" aria-hidden />

      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p data-reveal="up" className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              <span className="text-ink-300">{"//"}</span> Learning tracks
            </p>
            <h2 data-reveal="up" style={delay(1)} className="mt-4 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
              Choose your <span className="text-gradient">career track</span>
            </h2>
            <p data-reveal="up" style={delay(2)} className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Eight industry-aligned schools — each designed with hiring managers from North India&apos;s leading IT companies.
            </p>
          </div>

          <dl data-reveal="left" className="flex shrink-0 divide-x divide-ink-950/10 rounded-2xl border border-ink-950/10 bg-white font-mono shadow-sm">
            {[
              [String(categories.length).padStart(2, "0"), "tracks"],
              [`${total}+`, "programs"],
              ["100%", "hands-on"],
            ].map(([v, l]) => (
              <div key={l} className="px-5 py-3 sm:px-6">
                <dd className="text-2xl font-bold text-ink-900">{v}</dd>
                <dt className="text-[0.65rem] uppercase tracking-widest text-ink-500">{l}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* gap-px over a tinted background draws the shared hairlines between cells */}
        <div className="deck mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink-950/10 bg-ink-950/10 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)] sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <div key={c.id} data-reveal="up" style={deck(i)} className="deck-card bg-white">
              <Link
                href={c.href}
                className="group relative flex h-full flex-col p-7 transition-colors duration-300 hover:bg-ink-950 focus-visible:bg-ink-950"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" aria-hidden />

                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-brand-600 transition-colors group-hover:text-accent-400 group-focus-visible:text-accent-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink-300">~/tracks/{c.id}</span>
                </div>

                <span className="mt-7 grid size-12 place-items-center rounded-xl border border-ink-950/10 bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-white group-focus-visible:border-white/15 group-focus-visible:bg-white/10 group-focus-visible:text-white">
                  <Icon name={c.icon} className="size-6" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-ink-900 transition-colors group-hover:text-white group-focus-visible:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 transition-colors group-hover:text-ink-300 group-focus-visible:text-ink-300">{c.blurb}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {c.stack.map((t) => (
                    <li key={t} className="rounded-md border border-ink-950/10 px-2 py-0.5 font-mono text-[0.7rem] text-ink-700 transition-colors group-hover:border-white/15 group-hover:text-brand-200 group-focus-visible:border-white/15 group-focus-visible:text-brand-200">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between pt-7 font-mono text-xs">
                  <span className="flex items-center gap-2 text-ink-700 transition-colors group-hover:text-white group-focus-visible:text-white">
                    <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden /> {c.courses} courses
                  </span>
                  <ArrowUpRight className="size-5 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400 group-focus-visible:text-accent-400" aria-hidden />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
