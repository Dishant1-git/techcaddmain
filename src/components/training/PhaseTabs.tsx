"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Flag } from "lucide-react";

type Phase = { title: string; summary: string; topics: string[]; outcome: string };

/**
 * Syllabus explorer: vertical WAI-ARIA tabs (↑/↓/←/→, Home/End) on the left, phase panel on the right with a
 * progress bar and Previous/Next phase buttons. All panels are server-rendered; inactive ones are `hidden`.
 * Stacks to a horizontal tab row on small screens.
 */
export function PhaseTabs({ phases, syllabusHref }: { phases: Phase[]; syllabusHref: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const last = phases.length - 1;
  const num = (i: number) => String(i + 1).padStart(2, "0");

  const go = (i: number, focus = false) => {
    setActive(i);
    if (focus) tabs.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const next = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowRight: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    go(next, true);
  };

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[20rem_1fr]">
      <div className="flex flex-col gap-4">
      <div role="tablist" aria-label="Syllabus phases" aria-orientation="vertical" onKeyDown={onKey} className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-5 pt-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
        {phases.map((p, i) => (
          <button
            key={p.title}
            ref={(el) => { tabs.current[i] = el; }}
            id={`phase-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`phase-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => go(i)}
            // Soft UI: unselected = raised card, selected = pressed into the surface.
            className="group flex min-w-[15rem] shrink-0 items-center gap-4 rounded-2xl border border-white/90 bg-linear-to-br from-white to-[#f3f6fc] p-4 text-left shadow-[var(--su-raise-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--su-raise)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:scale-[0.99] aria-selected:translate-y-0 aria-selected:border-transparent aria-selected:bg-none aria-selected:bg-[#e9eef8] aria-selected:shadow-[var(--su-press)] lg:min-w-0"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white font-display font-extrabold text-brand-700 shadow-[var(--su-raise-sm)] transition-all duration-300 group-aria-selected:bg-linear-to-br group-aria-selected:from-brand-500 group-aria-selected:to-brand-700 group-aria-selected:text-white group-aria-selected:shadow-[var(--su-brand)]">
              {num(i)}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Phase {num(i)}</span>
              <span className="mt-0.5 block font-bold leading-snug text-ink-900 group-aria-selected:text-brand-700">{p.title}</span>
            </span>
          </button>
        ))}
      </div>
      <a href={syllabusHref} target="_blank" rel="noopener noreferrer" className="su-btn-ghost justify-self-start">
        <FileText className="size-4" aria-hidden /> Get the detailed syllabus on WhatsApp
      </a>
      </div>

      {phases.map((p, i) => (
        <div
          key={p.title}
          id={`phase-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`phase-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className="su-card tr-pop relative overflow-hidden p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 sm:p-9"
        >
          <div aria-hidden className="su-inset absolute inset-x-6 top-5 h-2 !rounded-full sm:inset-x-9">
            <div className="h-full rounded-full bg-linear-to-r from-brand-500 to-accent-400 transition-[width] duration-700 ease-out" style={{ width: `${((i + 1) / phases.length) * 100}%` }} />
          </div>
          <p className="mt-4 text-sm font-semibold text-brand-700">Phase {i + 1} of {phases.length}</p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-3xl">{p.title}</h3>
          <p className="mt-3 max-w-2xl text-ink-500">{p.summary}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {p.topics.map((t, k) => (
              <li key={t} className="su-inset tr-pop flex items-start gap-3 p-4 text-sm font-medium text-ink-900" style={{ animationDelay: `${k * 60}ms` }}>
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /> {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-3 rounded-2xl border border-white/90 bg-linear-to-r from-accent-400/25 to-white p-4 text-sm text-ink-900 shadow-[var(--su-raise-sm)]">
            <Flag className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
            <span><strong>By the end:</strong> {p.outcome}</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-2">
            <button type="button" onClick={() => go(i - 1, true)} disabled={i === 0} className="su-btn-ghost !px-4 !py-2">
              <ArrowLeft className="size-4" aria-hidden /> Previous phase
            </button>
            {i < last ? (
              <button type="button" onClick={() => go(i + 1, true)} className="su-btn !px-4 !py-2">
                Next phase <ArrowRight className="size-4" aria-hidden />
              </button>
            ) : (
              <a href="#enquire" className="su-btn !px-4 !py-2">Start this program <ArrowRight className="size-4" aria-hidden /></a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
