"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Download, RotateCcw } from "lucide-react";
import { backgroundNotes, goalNotes, quizQuestions, scoreTrack, tracks } from "@/data/career-quiz";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

export function CareerQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const done = step >= quizQuestions.length;
  const q = quizQuestions[Math.min(step, quizQuestions.length - 1)];

  const pick = (i: number) => {
    setAnswers((a) => ({ ...a, [q.id]: i }));
    // Short pause so the selected state is visible before advancing.
    setTimeout(() => setStep((s) => s + 1), 220);
  };
  const reset = () => { setAnswers({}); setStep(0); };

  return (
    <div className="mx-auto max-w-3xl">
      <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-500">
        {["100% free — always", "Results shown instantly", "No spam, ever"].map((t) => (
          <li key={t} className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-brand-600" aria-hidden /> {t}</li>
        ))}
      </ul>

      <div className="card p-6 sm:p-9">
        {/* Stepper */}
        <ol className="flex items-center gap-2 sm:gap-3 print:hidden" aria-label="Progress">
          {quizQuestions.map((s, i) => (
            <li key={s.id} className="flex flex-1 items-center gap-2 last:flex-none sm:gap-3">
              <span className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors duration-300 ${i < step ? "bg-brand-600 text-white" : i === step ? "bg-brand-600 text-white ring-4 ring-brand-100" : "bg-brand-50 text-ink-500"}`}>
                {i < step ? <Check className="size-4" aria-hidden /> : i + 1}
              </span>
              <span className={`hidden text-xs font-semibold sm:block ${i <= step ? "text-ink-900" : "text-ink-500"}`}>{s.step}</span>
              {i < quizQuestions.length - 1 && <span className={`h-px flex-1 transition-colors duration-300 ${i < step ? "bg-brand-600" : "bg-ink-300/40"}`} />}
            </li>
          ))}
        </ol>

        {!done ? (
          <div key={q.id} className="mt-8 animate-[fadeUp_.4s_ease_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">Question {step + 1} of {quizQuestions.length}</p>
            <h2 className="mt-2 text-xl font-extrabold leading-snug text-ink-900 sm:text-2xl">{q.title}</h2>
            <p className="mt-2 max-w-lg text-sm text-ink-500">{q.hint}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {q.options.map((o, i) => {
                const on = answers[q.id] === i;
                return (
                  <button
                    key={o.label}
                    type="button"
                    aria-pressed={on}
                    onClick={() => pick(i)}
                    className={`flex flex-col items-start gap-1.5 rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-28px_rgba(29,83,240,0.45)] ${on ? "border-brand-600 bg-brand-50" : "border-ink-300/40 bg-brand-50/40 hover:border-brand-600/40 hover:bg-white"}`}
                  >
                    <span className="font-display text-base font-bold leading-snug text-ink-900">{o.label}</span>
                    <span className="text-xs leading-relaxed text-ink-500">{o.text}</span>
                  </button>
                );
              })}
            </div>
            {step > 0 && (
              <button type="button" onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 hover:text-brand-600">
                <ArrowLeft className="size-4" aria-hidden /> Back
              </button>
            )}
          </div>
        ) : (
          <Result answers={answers} onReset={reset} />
        )}
      </div>
    </div>
  );
}

function Result({ answers, onReset }: { answers: Record<string, number>; onReset: () => void }) {
  const track = tracks[scoreTrack(answers)];
  const bg = quizQuestions[1].options[answers.background].label;
  const goal = quizQuestions[3].options[answers.goal].label;
  const msg = `Hi techcadd, my career quiz result is "${track.name}". I'd like to talk to a counsellor.`;

  return (
    <div id="career-plan" className="mt-8 animate-[fadeUp_.5s_ease_both]">
      <div className="rounded-2xl bg-linear-to-br from-brand-700 via-brand-800 to-ink-950 p-6 text-white sm:p-8 print:border print:bg-white print:text-black">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10"><Icon name={track.icon} className="size-6" /></span>
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-200">Your best-fit track</p>
        <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{track.name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-100">{track.tagline}</p>
        <p className="mt-4 text-xs text-brand-200">Starting point: {bg} · Goal: {goal}</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Block title="Job titles to apply for">
          <ul className="flex flex-wrap gap-2">
            {track.jobTitles.map((j) => <li key={j} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">{j}</li>)}
          </ul>
        </Block>
        <Block title="Free certifications">
          <ul className="space-y-2.5 text-sm">
            {track.freeCerts.map((c) => (
              <li key={c.name} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /><span><b className="text-ink-900">{c.name}</b> <span className="text-ink-500">· {c.by}</span></span></li>
            ))}
          </ul>
        </Block>
      </div>

      <h3 className="mt-10 text-lg font-extrabold text-ink-900">Your 90-day plan</h3>
      <ol className="mt-4 space-y-3">
        {track.phases.map((p, i) => (
          <li key={p.label} className="flex gap-4 rounded-2xl border border-ink-300/40 p-4 sm:p-5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{p.weeks}</p>
              <p className="font-display font-bold text-ink-900">{p.label}</p>
              <p className="mt-1 text-sm text-ink-500">{p.focus}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-ink-500">{backgroundNotes[bg]} {goalNotes[goal]}</p>

      <h3 className="mt-10 text-lg font-extrabold text-ink-900">Three portfolio projects</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {track.projects.map((p) => (
          <li key={p.title} className="rounded-2xl bg-brand-50/60 p-4">
            <p className="font-display text-sm font-bold text-ink-900">{p.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{p.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 text-lg font-extrabold text-ink-900">First-client pitch template</h3>
      <blockquote className="mt-4 rounded-2xl border-l-4 border-accent-500 bg-brand-50/60 p-5 text-sm italic leading-relaxed text-ink-700">{track.pitch}</blockquote>

      <div className="mt-10 flex flex-wrap gap-3 print:hidden">
        <button type="button" onClick={() => window.print()} className="btn-primary">
          <Download className="size-4" aria-hidden /> Download PDF roadmap
        </button>
        <a href={waLink(msg)} target="_blank" rel="noreferrer noopener" className="btn-brand">
          Talk to a counsellor <ArrowRight className="size-4" aria-hidden />
        </a>
        <Link href={track.courseHref} className="btn-ghost">{track.courseLabel}</Link>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-ink-500 hover:text-brand-600">
          <RotateCcw className="size-4" aria-hidden /> Retake
        </button>
      </div>
      <p className="mt-6 hidden text-xs text-ink-500 print:block">techcadd · {site.phone} · {site.url}</p>
      <p className="mt-4 text-xs text-ink-500 print:hidden">Tip: choose “Save as PDF” in the print dialog. Nothing is sent anywhere — your answers stay in this browser.</p>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-300/40 p-5">
      <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-ink-900">{title}</h3>
      {children}
    </div>
  );
}
