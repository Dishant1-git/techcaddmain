"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { CheckCircle2, FolderGit2, Plus } from "lucide-react";
import type { AiCourse } from "@/data/site";

/**
 * WAI-ARIA tabs (automatic activation, roving tabindex, ←/→/Home/End) with a <details> accordion per module.
 * All panels are server-rendered for SEO; inactive ones are `hidden`. Panels fade in with the tabIn keyframe —
 * never data-reveal, which would leave content inside a hidden panel invisible forever.
 */
export function CurriculumTabs({ phases }: { phases: AiCourse["curriculum"] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  // Module numbers run across phases: 01, 02 | 03, 04 | …
  const offsets = phases.map((_, i) => phases.slice(0, i).reduce((n, p) => n + p.modules.length, 0));

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = phases.length - 1;
    const keys: Record<string, number> = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Curriculum phases"
        className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-6 pt-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:overflow-visible sm:px-0"
        style={{ gridTemplateColumns: `repeat(${phases.length}, minmax(0, 1fr))` }}
      >
        {phases.map((p, i) => {
          const on = active === i;
          return (
            <button
              key={p.title}
              ref={(el) => { tabs.current[i] = el; }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={on}
              aria-controls={`${uid}-panel-${i}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`w-60 shrink-0 snap-start rounded-3xl p-5 text-left transition-[translate,box-shadow,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-500 active:translate-y-0.5 sm:w-auto ${
                on ? "soft-active" : "glass-sm text-ink-900 hover:-translate-y-0.5 hover:shadow-soft"
              }`}
            >
              <span className={`block text-xs font-semibold uppercase tracking-[0.14em] ${on ? "text-brand-100" : "text-brand-700"}`}>
                Phase {i + 1} · {p.period}
              </span>
              <span className="mt-1 block font-display text-lg font-bold">{p.title}</span>
              <span className={`mt-0.5 block text-sm ${on ? "text-brand-100" : "text-ink-500"}`}>
                {p.modules.length} {p.modules.length === 1 ? "module" : "modules"}
              </span>
            </button>
          );
        })}
      </div>

      {phases.map((p, i) => (
        <div
          key={p.title}
          role="tabpanel"
          id={`${uid}-panel-${i}`}
          aria-labelledby={`${uid}-tab-${i}`}
          hidden={active !== i}
          className="mt-6 animate-[tabIn_0.45s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
        >
          <ol className="space-y-5">
            {p.modules.map((m, j) => (
              <li key={m.title}>
                <details className="accordion glass group open:shadow-soft-inset" open={j === 0}>
                  <summary className="flex cursor-pointer items-center gap-4 rounded-[1.75rem] p-5 text-left transition-colors hover:text-brand-700 sm:p-6">
                    <span className="soft-icon size-12 font-display text-sm font-bold">
                      {String(offsets[i] + j + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink-900 sm:text-lg">{m.title}</span>
                      <span className="mt-0.5 block text-sm text-ink-500">{m.topics.length} topics · 1 project</span>
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-soft text-brand-700 shadow-soft-sm transition-[rotate,box-shadow,background-color] duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white group-open:shadow-glow">
                      <Plus className="size-4" aria-hidden />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 sm:px-6 sm:pl-[5.5rem]">
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {m.topics.map((t) => (
                        <li key={t} className="flex gap-2.5 text-ink-700">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /> {t}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 flex items-start gap-3 rounded-2xl border border-white/60 bg-soft px-4 py-3 text-sm text-ink-900 shadow-soft-sm">
                      <FolderGit2 className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
                      <span><strong>Project:</strong> {m.project}</span>
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
}
