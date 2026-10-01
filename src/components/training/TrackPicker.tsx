"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Track = { name: string; months: number; badge: string; text: string; points: string[] };

/**
 * Segmented 3 / 6 / 9-month track picker (WAI-ARIA tabs: roving tabindex, ←/→/Home/End, automatic activation).
 * All panels are server-rendered (inactive ones `hidden`), so content is in the HTML for SEO / no-JS users see the
 * default track. The duration ring animates its stroke when the track changes. No prices — fees via counsellor.
 */
export function TrackPicker({ tracks, course, initial = 1 }: { tracks: Track[]; course: string; initial?: number }) {
  const [active, setActive] = useState(initial);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = tracks.length - 1;
    const next = { ArrowRight: active === last ? 0 : active + 1, ArrowLeft: active === 0 ? last : active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const C = 2 * Math.PI * 52; // ring circumference

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      {/* Soft UI segmented control: pressed track, the selected tab is the raised thumb. */}
      <div role="tablist" aria-label="Training duration" onKeyDown={onKey} className="su-inset mx-auto grid max-w-2xl grid-cols-3 gap-1 !rounded-full p-1.5">
        {tracks.map((t, i) => (
          <button
            key={t.name}
            ref={(el) => { tabs.current[i] = el; }}
            id={`track-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`track-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className="relative rounded-full px-3 py-3 text-sm font-semibold text-ink-700 transition-all duration-300 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:scale-[0.98] aria-selected:bg-linear-to-b aria-selected:from-white aria-selected:to-[#f3f6fc] aria-selected:font-bold aria-selected:text-brand-700 aria-selected:shadow-[var(--su-raise-sm)] sm:text-base"
          >
            {t.months} months
          </button>
        ))}
      </div>

      {tracks.map((t, i) => (
        <div
          key={t.name}
          id={`track-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`track-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className="su-card tr-pop mt-10 grid items-center gap-8 p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 sm:p-10 md:grid-cols-[auto_1fr]"
        >
          {/* Pressed dial with a raised centre disc. */}
          <div className="su-inset relative mx-auto size-48 shrink-0 !rounded-full p-3">
            <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden>
              <circle cx="60" cy="60" r="52" fill="none" strokeWidth="10" className="stroke-white/70" />
              <circle
                cx="60" cy="60" r="52" fill="none" strokeWidth="10" strokeLinecap="round"
                stroke={`url(#track-grad-${i})`}
                strokeDasharray={C}
                strokeDashoffset={C * (1 - t.months / 9)}
                style={{ "--tr-c": C } as CSSProperties}
                className="tr-ring-draw"
              />
              <defs>
                <linearGradient id={`track-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand-500)" />
                  <stop offset="100%" stopColor="var(--color-accent-400)" />
                </linearGradient>
              </defs>
            </svg>
            <p className="su-card absolute inset-[26%] grid place-content-center !rounded-full text-center">
              <span className="font-display text-4xl font-extrabold leading-none text-ink-900">{t.months}</span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">months</span>
            </p>
          </div>

          <div>
            <span className="su-chip-brand">{t.badge}</span>
            <h3 className="mt-3 text-2xl font-extrabold text-ink-900 sm:text-3xl">{t.name}</h3>
            <p className="mt-2 max-w-xl text-ink-500">{t.text}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.points.map((p) => (
                <li key={p} className="su-inset flex items-start gap-2 p-3.5 text-sm font-medium text-ink-900">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /> {p}
                </li>
              ))}
            </ul>
            <a href="#enquire" className="su-btn mt-7">
              Ask about the {t.months}-month {course} track <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
