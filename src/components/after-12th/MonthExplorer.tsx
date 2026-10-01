"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, Hammer, Wrench } from "lucide-react";
import type { A12Month } from "@/data/after-12th";

/**
 * Month-by-month explorer: a horizontal WAI-ARIA tablist of neumorphic month keys (←/→, Home/End; the selected key is
 * pressed in) over one panel per month with six numbered topic wells, the month's tools and its project.
 * All panels are server-rendered; inactive ones are `hidden`. Panels animate in with the `tr-pop` keyframe
 * (never data-reveal — they appear after client state changes).
 */
export function MonthExplorer({ months }: { months: A12Month[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const last = months.length - 1;
  const num = (i: number) => String(i + 1).padStart(2, "0");

  const go = (i: number, focus = false) => {
    setActive(i);
    const tab = tabs.current[i];
    if (focus) tab?.focus();
    tab?.scrollIntoView({ block: "nearest", inline: "center" });
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const next = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    go(next, true);
  };

  return (
    <div className="mt-12">
      <div role="tablist" aria-label="Months" onKeyDown={onKey} className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-6 pt-2 [scrollbar-width:none] lg:justify-center">
        {months.map((m, i) => (
          <button
            key={m.title}
            ref={(el) => { tabs.current[i] = el; }}
            id={`a12-month-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`a12-month-panel-${i}`}
            aria-label={`Month ${i + 1}: ${m.title}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => go(i)}
            className="group grid size-16 shrink-0 place-items-center rounded-2xl border border-white/50 bg-neu text-center shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 aria-selected:translate-y-0 aria-selected:border-transparent aria-selected:shadow-neu-inset sm:size-20"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">Month</span>
              <span className="block font-display text-xl font-extrabold text-ink-900 transition-colors duration-300 group-aria-selected:text-brand-700 sm:text-2xl">{num(i)}</span>
            </span>
          </button>
        ))}
      </div>

      {months.map((m, i) => (
        <div
          key={m.title}
          id={`a12-month-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`a12-month-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className="neu tr-pop mt-4 p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-brand-700">Month {i + 1} of {months.length}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-3xl">{m.title}</h3>
              <p className="mt-3 max-w-2xl text-ink-700">{m.summary}</p>
              <ol className="mt-7 grid gap-3 sm:grid-cols-2">
                {m.topics.map((t, k) => (
                  <li key={t} className="neu-inset tr-pop flex items-center gap-3 p-3.5 text-sm font-medium text-ink-900" style={{ animationDelay: `${k * 55}ms` }}>
                    <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-neu text-xs font-extrabold text-brand-700 shadow-neu-sm">{k + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-5">
              <div className="neu-inset p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"><Wrench className="size-4 text-brand-600" aria-hidden /> Tools this month</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {m.tools.map((t) => (
                    <li key={t} className="rounded-full bg-neu px-3 py-1.5 text-sm font-semibold text-ink-900 shadow-neu-sm">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 p-5 text-white shadow-neu-brand">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-100"><Hammer className="size-4" aria-hidden /> You ship</p>
                <p className="mt-2 font-display text-lg font-bold">{m.project.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-50">{m.project.text}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <button type="button" onClick={() => go(i - 1, true)} disabled={i === 0} className="btn-neu !px-4 !py-2">
              <ArrowLeft className="size-4" aria-hidden /> Previous month
            </button>
            {i < last ? (
              <button type="button" onClick={() => go(i + 1, true)} className="btn-neu-primary !px-4 !py-2">
                Next month <ArrowRight className="size-4" aria-hidden />
              </button>
            ) : (
              <a href="#enquire" className="btn-neu-primary !px-4 !py-2">Start this program <ArrowRight className="size-4" aria-hidden /></a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
