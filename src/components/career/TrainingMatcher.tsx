"use client";

import { useState } from "react";
import { ArrowRight, Check, Clock } from "lucide-react";
import { branches, projectsByBranch, semesterTrack, semesters, universities, type BranchId } from "@/data/training-matcher";
import { Icon } from "@/components/ui/Icon";
import { waLink } from "@/lib/whatsapp";

const label = "text-[10px] font-bold uppercase tracking-[0.14em] text-ink-500";

export function TrainingMatcher() {
  const [uni, setUni] = useState(universities[0]);
  const [branch, setBranch] = useState<BranchId>("cse");
  const [sem, setSem] = useState(5);

  const b = branches.find((x) => x.id === branch)!;
  const track = semesterTrack(sem);
  // 6-month track only makes sense for the last semesters; earlier ones see 6-week projects.
  const projects = projectsByBranch[branch].filter((p) => (sem >= 7 ? true : p.duration === "6 Weeks"));

  return (
    <div className="space-y-10">
      <div className="card p-5 sm:p-7">
        <p className={label}>1. Select your university / board</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {universities.map((u) => {
            const on = u === uni;
            return (
              <button key={u} type="button" aria-pressed={on} onClick={() => setUni(u)}
                className={`flex items-center justify-between gap-2 rounded-xl border p-3 text-left text-xs font-semibold transition-all duration-300 sm:text-sm ${on ? "border-brand-600 bg-brand-50 text-brand-700 shadow-md shadow-brand-600/10" : "border-ink-300/40 bg-white text-ink-700 hover:border-brand-600/30 hover:bg-brand-50/50"}`}>
                <span>{u}</span>{on && <Check className="size-3.5 shrink-0 text-brand-600" aria-hidden />}
              </button>
            );
          })}
        </div>

        <p className={`${label} mt-7`}>2. Select your branch / stream</p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((x) => {
            const on = x.id === branch;
            return (
              <button key={x.id} type="button" aria-pressed={on} onClick={() => setBranch(x.id)}
                className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-300 ${on ? "border-brand-600 bg-brand-50 shadow-md shadow-brand-600/10" : "border-ink-300/40 bg-white hover:border-brand-600/30 hover:bg-brand-50/50"}`}>
                <span className={`grid size-10 shrink-0 place-items-center rounded-lg transition-colors ${on ? "bg-brand-600 text-white" : "bg-brand-50 text-ink-500"}`}><Icon name={x.icon} className="size-5" /></span>
                <span className="text-xs font-bold leading-tight text-ink-900 sm:text-sm">{x.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex items-center justify-between">
          <p className={label}>3. Choose current semester</p>
          <span className="text-xs font-semibold text-brand-600">Semester {sem}</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {semesters.map((s) => (
            <button key={s} type="button" aria-pressed={s === sem} onClick={() => setSem(s)}
              className={`rounded-xl border py-2.5 text-center text-xs font-bold transition-all duration-300 sm:text-sm ${s === sem ? "border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/25" : "border-ink-300/40 bg-white text-ink-500 hover:border-brand-600/30"}`}>
              Sem {s}
            </button>
          ))}
        </div>
      </div>

      {/* Matched track banner */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-600/20 bg-linear-to-r from-brand-50 via-white to-white p-6 shadow-lg sm:p-7" aria-live="polite">
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-brand-600/20 bg-brand-600/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-600">{track.tag}</span>
              <span className="text-xs text-ink-500">Semester {sem} match</span>
            </div>
            <h2 className="mt-2 text-xl font-extrabold text-ink-900 sm:text-2xl">{track.title}</h2>
            <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-ink-500 sm:text-sm">{track.text}</p>
          </div>
          <div className="shrink-0 rounded-xl border border-ink-300/40 bg-white px-4 py-3 text-center shadow-sm">
            <span className="block text-[10px] uppercase text-ink-500">Batch status</span>
            <span className="mt-0.5 block text-sm font-bold text-brand-600">Only {track.seats} seats left</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-ink-900 sm:text-xl">Matched live project tracks for {b.label}</h3>
        <p className="mt-1 text-xs text-ink-500 sm:text-sm">Curriculum aligned for {uni}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card card-hover flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="rounded-md border border-ink-300/40 bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold uppercase text-ink-700">{p.badge}</span>
                  <span className="flex items-center gap-1 text-xs font-medium text-brand-600"><Clock className="size-3.5" aria-hidden />{p.duration}</span>
                </div>
                <h4 className="font-display text-base font-bold text-ink-900 sm:text-lg">{p.title}</h4>
                <p className="text-xs leading-relaxed text-ink-500 sm:text-sm">{p.text}</p>
                <div>
                  <p className={label}>Tech stack &amp; tools</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => <span key={s} className="rounded-md border border-ink-300/40 bg-brand-50/60 px-2 py-0.5 text-[11px] font-medium text-ink-700">{s}</span>)}
                  </div>
                </div>
                <p className="border-t border-ink-300/30 pt-3 text-xs text-ink-500"><b className="text-ink-900">You get:</b> {p.outcome}</p>
              </div>
              <a href={waLink(`Hi techcadd, I'm in ${b.label}, Sem ${sem} (${uni}). I'd like details and syllabus for "${p.title}".`)} target="_blank" rel="noreferrer noopener" className="btn-brand mt-5 self-start">
                Get syllabus &amp; seats <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
