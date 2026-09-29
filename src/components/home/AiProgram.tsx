import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { aiProgram } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";

export function AiProgram() {
  return (
    <section id="ai-program" className="section relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[140px]" aria-hidden />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span data-reveal="up" className="eyebrow eyebrow-dark"><Sparkles className="size-3.5" aria-hidden /> {aiProgram.eyebrow}</span>
          <h2 data-reveal="up" style={delay(1)} className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
            {aiProgram.title.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">{aiProgram.title.split(" ").slice(2).join(" ")}</span>
          </h2>
          <p data-reveal="up" style={delay(2)} className="mt-5 text-lg leading-relaxed text-ink-300">{aiProgram.subtitle}</p>

          <div data-reveal="up" style={delay(3)} className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><Clock className="size-4 text-accent-400" aria-hidden /> {aiProgram.duration}</span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><Calendar className="size-4 text-accent-400" aria-hidden /> {aiProgram.nextBatch}</span>
          </div>

          <div data-reveal="up" style={delay(4)} className="mt-8 flex flex-wrap gap-2">
            {aiProgram.tools.map((t) => (
              <span key={t} className="rounded-lg bg-brand-600/20 px-3 py-1.5 text-sm font-medium text-brand-200">{t}</span>
            ))}
          </div>

          <div data-reveal="up" style={delay(5)} className="mt-10 flex flex-wrap gap-4">
            <Link href="/#demo" className="btn-primary">Apply for Next Batch <ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="/#demo" className="btn-ghost-dark">Download Curriculum</Link>
          </div>
        </div>

        <div data-reveal="right" className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur">
          <div className="rounded-[1.25rem] bg-ink-900/60 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink-300">Program roadmap</p>
            <ol className="mt-6 space-y-1">
              {aiProgram.modules.map((m, i) => (
                <li key={m} className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-white/5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 font-display text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium">{m}</span>
                  <CheckCircle2 className="size-5 text-emerald-400 opacity-60 transition-opacity group-hover:opacity-100" aria-hidden />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
