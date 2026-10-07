import Link from "next/link";
import { ArrowRight, Check, Wrench } from "lucide-react";
import { aiHub } from "@/data/ai-hub";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

/* Long-form sections of the AI courses hub (/ai-courses), in page order. Site theme (white / brand-50 / ink-950 rhythm,
   `card`, SectionHeading); all copy comes from `aiHub` in src/data/ai-hub.ts. */

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Overview paragraphs + the "Which course suits you?" picker. */
export function HubOverview() {
  const { overview, picker } = aiHub;
  return (
    <section className="section defer-render bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow="Program Overview" title={overview.title} />
          <div data-reveal="up" style={delay(2)} className="mt-6 space-y-4 leading-relaxed text-ink-700">
            {overview.text.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <div data-reveal="left" className="lg:pt-2">
          <div className="on-dark relative isolate overflow-hidden rounded-3xl bg-ink-950 p-6 text-white sm:p-8">
            <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
            <div className="absolute -right-20 -top-24 -z-10 size-64 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />
            <h3 className="text-xl font-bold">{picker.title}</h3>
            <p className="mt-4 flex justify-between font-mono text-[0.65rem] uppercase tracking-widest text-ink-300">
              <span>{picker.columns[0]}</span>
              <span>{picker.columns[1]}</span>
            </p>
            <ul className="mt-2 border-b border-white/10">
              {picker.rows.map((r) => (
                <li key={r.who} className="border-t border-white/10">
                  <Link href={r.href} className="group flex items-center justify-between gap-4 py-4 text-sm">
                    <span className="text-ink-300 transition-colors group-hover:text-white">{r.who}</span>
                    <span className="flex shrink-0 items-center gap-1.5 font-semibold text-accent-400">
                      {r.course} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Who can join: six learner cards + the "what you need" line. */
export function HubAudience() {
  const a = aiHub.audience;
  return (
    <section className="section defer-render bg-brand-50/50">
      <div className="container-x">
        <SectionHeading eyebrow="Who Can Do This Course" title={a.title} text={a.intro} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {a.items.map((it, i) => (
            <li key={it.title} data-reveal="up" style={delay(i % 3)}>
              <div className="card h-full p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={it.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p data-reveal="up" className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brand-200 bg-white px-6 py-4 text-center text-sm leading-relaxed text-ink-700">
          {a.need}
        </p>
      </div>
    </section>
  );
}

/** Learners from across states. */
export function HubRegions() {
  const r = aiHub.regions;
  return (
    <section className="section defer-render bg-white">
      <div className="container-x">
        <SectionHeading eyebrow="Learn from Anywhere" title={r.title} text={r.intro} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {r.items.map((it, i) => (
            <li key={it.title} data-reveal="up" style={delay(i % 3)} className="bg-white p-6">
              <p className="font-mono text-xs font-bold text-brand-600">{num(i)}</p>
              <h3 className="mt-2 text-lg font-bold text-ink-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Why learn AI now (dark, numbered reasons). */
export function HubWhy() {
  const w = aiHub.why;
  return (
    <section className="on-dark section defer-render relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="container-x">
        <SectionHeading dark eyebrow="Why This Program" title={w.title} text={w.intro} />
        <ol className="mt-12 grid gap-x-12 lg:grid-cols-2">
          {w.points.map((p, i) => (
            <li key={p.title} data-reveal="up" style={delay(i % 2)} className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-white/10 py-6">
              <span className="font-mono text-sm font-bold text-accent-400">{num(i)}</span>
              <div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p data-reveal="up" className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-center leading-relaxed text-ink-300">
          {w.outro}
        </p>
      </div>
    </section>
  );
}

/** Why choose techcadd. */
export function HubWhyUs() {
  const w = aiHub.whyUs;
  return (
    <section className="section defer-render bg-white">
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose techcadd" title={w.title} text={w.intro} />
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {w.points.map((p, i) => (
            <li key={p.title} data-reveal="up" style={delay(i % 2)}>
              <div className="card h-full p-6">
                <p className="font-mono text-xs font-bold text-brand-600">{num(i)}</p>
                <h3 className="mt-2 text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** What you will learn: one card per course (topics, main tools, link) + shared outcomes. */
export function HubLearn() {
  const l = aiHub.learn;
  return (
    <section className="section defer-render bg-brand-50/50">
      <div className="container-x">
        <SectionHeading eyebrow="What You Will Learn & Tools Covered" title={l.title} text={l.intro} />
        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {l.courses.map((c, i) => (
            <li key={c.name} data-reveal="up" style={delay(i % 2)}>
              <article className="card flex h-full flex-col p-6 sm:p-7">
                <p className="font-mono text-xs font-bold text-brand-600">Course {i + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-ink-900">{c.name}</h3>
                <ul className="mt-5 space-y-3">
                  {c.points.map((p) => (
                    <li key={p.title} className="grid grid-cols-[auto_1fr] gap-x-3 text-sm leading-relaxed text-ink-500">
                      <Check className="mt-0.5 size-4 text-brand-600" aria-hidden />
                      <span><strong className="font-semibold text-ink-900">{p.title}:</strong> {p.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-start gap-2 rounded-xl bg-brand-50 px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-ink-700">
                  <Wrench className="mt-0.5 size-3.5 shrink-0 text-brand-600" aria-hidden /> {c.tools}
                </p>
                <Link href={c.href} className="link mt-auto inline-flex items-center gap-1.5 pt-5 text-sm">
                  View the {c.name.replace(/\s*\(.*\)$/, "")} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            </li>
          ))}
        </ol>
        <p data-reveal="up" className="mt-6 text-center text-sm text-ink-500">{l.toolsNote}</p>

        <div data-reveal="up" className="card mx-auto mt-10 max-w-3xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-ink-900">{l.outcomesTitle}</h3>
          <p className="mt-2 text-sm text-ink-500">{l.outcomesIntro}</p>
          <ul className="mt-5 space-y-3">
            {l.outcomes.map((o) => (
              <li key={o} className="grid grid-cols-[auto_1fr] gap-x-3 text-sm leading-relaxed text-ink-700">
                <Check className="mt-0.5 size-4 text-brand-600" aria-hidden /> {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Careers + state-by-state job notes. */
export function HubCareers() {
  const c = aiHub.careers;
  return (
    <section className="section defer-render bg-white">
      <div className="container-x">
        <SectionHeading eyebrow="Careers" title={c.title} text={c.intro} />
        <h3 data-reveal="up" className="mt-12 text-center text-xl font-bold text-ink-900">{c.jobsTitle}</h3>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.jobs.map((j, i) => (
            <li key={j.title} data-reveal="up" style={delay(i % 3)}>
              <div className="card h-full p-6">
                <h4 className="font-bold text-ink-900">{j.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{j.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p data-reveal="up" className="mt-8 text-center text-sm text-ink-500">{c.outro}</p>
      </div>
    </section>
  );
}
