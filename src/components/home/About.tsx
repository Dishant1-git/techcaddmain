import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { about } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { delay } from "@/components/ui/SectionHeading";

const [titleLead] = about.title.split(about.highlight);

/** Corporate-style About: editorial intro, statement + photo panel, hairline stat band, numbered pillars. */
export function About() {
  return (
    <section id="about" className="section defer-render bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-5">
            <p data-reveal="up" className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> About TechCADD
            </p>
            <h2 data-reveal="up" style={delay(1)} className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
              {titleLead}<span className="text-gradient">{about.highlight}</span>
            </h2>
            <p data-reveal="up" style={delay(2)} className="mt-6 text-base leading-relaxed text-ink-500 sm:text-lg">{about.text}</p>

            <dl data-reveal="up" style={delay(3)} className="mt-8 grid grid-cols-2 gap-6 border-y border-ink-950/10 py-5 text-sm">
              <div>
                <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-500">Established</dt>
                <dd className="mt-1 font-semibold text-ink-900">{about.founded}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-500">Leadership</dt>
                <dd className="mt-1 font-semibold text-ink-900">{about.founder}</dd>
              </div>
            </dl>

            <div data-reveal="up" style={delay(4)} className="mt-8 flex flex-wrap gap-4">
              <Link href="/#why-us" className="btn-brand">Why choose us <ArrowRight className="size-4" aria-hidden /></Link>
              <Link href="/#demo" className="btn-ghost">Talk to a counsellor</Link>
            </div>
          </div>

          {/* Visual panel */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div data-reveal="zoom" className="sm:col-span-2">
              <div className="relative isolate overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
                <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
                <div className="absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-200">Our approach</p>
                <p className="mt-4 max-w-md font-display text-3xl font-extrabold leading-tight sm:text-4xl">{about.statement}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-300">{about.statementText}</p>
                <ArrowUpRight className="absolute right-8 top-8 size-6 text-accent-400" aria-hidden />
              </div>
            </div>
            {about.photos.map((p, i) => (
              <figure key={p.caption} data-reveal={i ? "right" : "left"} style={delay(i + 1)}>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl">
                  <Image src={p.image} alt={p.alt} fill placeholder="blur" sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 to-transparent" aria-hidden />
                  <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-900 backdrop-blur-sm">{p.caption}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Stat band */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-950/10 bg-ink-950/10 lg:grid-cols-4">
          {about.stats.map((s, i) => (
            <div key={s.label} data-reveal="up" style={delay(i)} className="flex flex-col-reverse bg-white p-6 sm:p-8">
              <dt className="mt-2 text-sm text-ink-500">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-ink-900 sm:text-5xl"><Counter value={s.value} suffix={s.suffix} /></dd>
            </div>
          ))}
        </dl>

        {/* Pillars */}
        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p, i) => (
            <li key={p.title} data-reveal="up" style={delay(i)} className="border-t-2 border-ink-950/10 pt-5 hover:border-brand-600">
              <span className="font-mono text-xs font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
