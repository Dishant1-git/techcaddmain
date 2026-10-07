import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Calendar, CheckCircle2, CircleDashed, Hammer, Sparkles } from "lucide-react";
import { aiProgram } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";

type Job = (typeof aiProgram.jobs)[number];

const chip = "mr-4 flex h-14 w-[17rem] shrink-0 items-center gap-3 rounded-2xl border px-4 text-sm";

/** One endless belt moving left → right; the list is rendered four times (wide screens) and slid by 50% so the loop is seamless. */
function Belt({ jobs, done, duration }: { jobs: Job[]; done: boolean; duration: string }) {
  return (
    <div className="flex w-max animate-marquee" style={{ "--marquee-duration": duration, animationDirection: "reverse" } as CSSProperties}>
      {[0, 1, 2, 3].map((copy) => (
        <div key={copy} className="flex shrink-0">
          {jobs.map((j) =>
            done ? (
              <span key={j.out} className={`${chip} border-accent-400/40 bg-white/[0.08] font-semibold text-white shadow-[0_0_30px_-10px_rgba(250,204,21,0.7)]`}>
                <CheckCircle2 className="size-5 shrink-0 text-accent-400" /> <span className="truncate">{j.out}</span>
              </span>
            ) : (
              <span key={j.in} className={`${chip} border-dashed border-white/15 bg-white/[0.02] text-ink-300`}>
                <CircleDashed className="size-5 shrink-0" /> <span className="truncate">{j.in}</span>
              </span>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * A conveyor row is the same belt drawn twice in perfect sync: the "raw work" version is clipped to the left half,
 * the "finished" version to the right half, so every chip appears to be transformed as it passes the agent gate.
 */
function Row({ jobs, duration }: { jobs: Job[]; duration: string }) {
  return (
    <div className="relative">
      <div className="overflow-hidden [clip-path:inset(0_50%_0_0)]"><Belt jobs={jobs} done={false} duration={duration} /></div>
      <div className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_0_50%)]"><Belt jobs={jobs} done duration={duration} /></div>
    </div>
  );
}

/**
 * Flagship program (Agentic AI): centred heading, a full-width "work in → work done" conveyor passing through an
 * agent gate (CSS only, reuses `animate-marquee`), the 4-month path on a rail, then facts + CTAs.
 */
export function AiProgram() {
  const { jobs, stages } = aiProgram;
  const half = Math.ceil(jobs.length / 2);

  return (
    <section id="ai-program" className="on-dark section defer-render relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="absolute left-1/2 top-1/3 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[140px]" aria-hidden />

      <div className="container-x text-center">
        <span data-reveal="up" className="eyebrow eyebrow-dark">
          <Sparkles className="size-3.5" aria-hidden /> {aiProgram.eyebrow} · {aiProgram.title}
        </span>
        <h2 data-reveal="up" style={delay(1)} className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
          {aiProgram.lead} <span className="text-gradient">{aiProgram.highlight}</span>
        </h2>
        <p data-reveal="up" style={delay(2)} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">{aiProgram.subtitle}</p>
      </div>

      {/* Conveyor */}
      <div data-reveal="fade" className="relative mt-12 lg:mt-16">
        <div className="container-x mb-4 flex justify-between font-mono text-[0.7rem] uppercase tracking-[0.25em]" aria-hidden>
          <span className="text-ink-300">Work in</span>
          <span className="text-accent-400">Work done</span>
        </div>

        <div className="relative" aria-hidden>
        <div className="mask-fade-x relative">
          {/* Light spilling out of the gate onto the finished side */}
          <div className="absolute inset-y-0 left-1/2 w-72 bg-linear-to-r from-brand-500/25 to-transparent" />
          <div className="relative space-y-4 py-2">
            <Row jobs={jobs.slice(0, half)} duration="70s" />
            <Row jobs={jobs.slice(half)} duration="94s" />
          </div>
        </div>

        {/* Agent gate: covers the seam where the two belt versions meet */}
        <div className="absolute -inset-y-3 left-1/2 z-10 grid w-28 -translate-x-1/2 place-items-center rounded-[2rem] border border-white/15 bg-ink-950 shadow-[0_0_90px_-10px_rgba(29,83,240,0.95)] sm:w-32">
          <div className="absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-accent-400/60 to-transparent" />
          <div className="relative grid place-items-center gap-2">
            <span className="relative grid size-16 place-items-center">
              <span className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent_40%,var(--color-accent-400))] [animation-duration:3.5s] motion-reduce:animate-none" />
              <span className="relative grid size-[3.6rem] place-items-center rounded-full bg-ink-950 text-white">
                <Bot className="size-7" />
              </span>
            </span>
            <span className="flex items-end gap-0.5 rounded-full bg-ink-950 px-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-400">
              Working
              {[0, 1, 2].map((d) => (
                <span key={d} className="agent-dot mb-[0.2em] size-[3px] rounded-full bg-accent-400" style={{ animationDelay: `${d * 0.2}s` }} />
              ))}
            </span>
          </div>
        </div>
        </div>

        <p className="sr-only">
          Examples of work an AI agent completes: {jobs.map((j) => `${j.in} becomes ${j.out}`).join("; ")}.
        </p>
      </div>

      <div className="container-x">
        <p data-reveal="up" className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink-300 sm:text-base">{aiProgram.caption}</p>

        {/* The path, month by month, on a rail */}
        <ol className="relative mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          <span className="absolute inset-x-0 top-[0.4rem] hidden h-px bg-linear-to-r from-accent-400/70 via-white/15 to-white/5 lg:block" aria-hidden />
          {stages.map((s, i) => (
            <li key={s.title} data-reveal="up" style={delay(i)} className="relative">
              <span className="block size-3.5 rounded-full border-2 border-accent-400 bg-ink-950 shadow-[0_0_0_4px_rgba(250,204,21,0.12)]" aria-hidden />
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent-400">{s.when}</p>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.text}</p>
              <p className="mt-4 flex items-start gap-2 text-sm font-medium text-brand-200">
                <Hammer className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden /> {s.build}
              </p>
            </li>
          ))}
        </ol>

        {/* Facts, tools and CTAs */}
        <div data-reveal="up" className="mt-12 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:mt-16 lg:grid-cols-[auto_1fr_auto]">
          <dl className="flex divide-x divide-white/10">
            {aiProgram.facts.map((f) => (
              <div key={f.label} className="px-5 first:pl-0">
                <dd className="font-display text-2xl font-extrabold text-accent-400 sm:text-3xl">{f.value}</dd>
                <dt className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-300">{f.label}</dt>
              </div>
            ))}
          </dl>
          <div>
            <ul className="flex flex-wrap gap-1.5">
              {aiProgram.tools.map((t) => (
                <li key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[0.7rem] text-brand-200">{t}</li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-2 text-sm text-ink-300">
              <Calendar className="size-4 text-accent-400" aria-hidden /> {aiProgram.nextBatch}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={aiProgram.href} className="btn-primary">Explore the program <ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="/#demo" className="btn-ghost-dark">Book a free demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
