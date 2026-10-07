"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Check, FileText, Minus, MousePointerClick } from "lucide-react";

type Row = { label: string; icon: ReactNode; others: string; us: string; cv: string };
type Cv = {
  title: string; name: string; othersRole: string; usRole: string; heading: string; empty: string;
  meter: string; othersMeter: string; usMeter: string; othersStamp: string; usStamp: string;
};

const step = (i: number) => ({ "--i": i }) as CSSProperties;

/** Two stacked versions of the same slot; CSS cross-fades them from the stage's data-mode. */
function Swap({ us, others, mine, className = "" }: { us: boolean; others: ReactNode; mine: ReactNode; className?: string }) {
  return (
    <span className={`dx-swap ${className}`}>
      <span className="dx-others" aria-hidden={us}>{others}</span>
      <span className="dx-us" aria-hidden={!us}>{mine}</span>
    </span>
  );
}

/**
 * Interactive stage for home #difference: a switch flips the whole panel between "Most institutes" (flat grey,
 * empty CV) and "TechCADD" (lit navy, CV fills in line by line, stamp lands). Flips itself once when scrolled
 * into view unless the visitor has already used the switch. All motion is CSS (`.dx-*` in globals.css).
 */
export function DifferenceStage({ rows, cv, othersLabel, usLabel }: { rows: Row[]; cv: Cv; othersLabel: string; usLabel: string }) {
  const [us, setUs] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const touched = useRef(false);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          if (!touched.current) setUs(true);
        }, 1200);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const pick = (next: boolean) => {
    touched.current = true;
    setUs(next);
  };

  const side = "relative z-10 rounded-full px-5 py-2.5 text-sm font-bold text-(--dx-muted) transition-colors duration-500 aria-pressed:text-ink-950 sm:px-7";

  return (
    <div
      ref={stage}
      data-mode={us ? "us" : "others"}
      className={`dx-stage relative isolate grid items-center gap-12 overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-14 ${us ? "on-dark" : ""}`}
    >
      {/* Lights that come on in TechCADD mode */}
      <div className="dx-glow pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute -right-24 -top-32 size-[28rem] rounded-full bg-brand-600/45 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 size-96 rounded-full bg-accent-500/15 blur-3xl" />
      </div>

      {/* Switch + the six checks */}
      <div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="dx-toggle" role="group" aria-label="Compare institutes">
            <span className="dx-thumb" aria-hidden />
            <button type="button" aria-pressed={!us} onClick={() => pick(false)} className={side}>{othersLabel}</button>
            <button type="button" aria-pressed={us} onClick={() => pick(true)} className={side}>{usLabel}</button>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-(--dx-muted)">
            <MousePointerClick className="size-3.5" aria-hidden /> Flip the switch
          </span>
        </div>

        <ol className="mt-8">
          {rows.map((r, i) => (
            <li
              key={r.label}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="grid grid-cols-[auto_1fr] items-center gap-x-4 border-t border-(--dx-line) py-4 transition-colors duration-700 last:border-b"
            >
              <span className="grid size-10 place-items-center rounded-xl border border-(--dx-line) text-(--dx-muted) transition-colors duration-700">
                {r.icon}
              </span>
              <div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-(--dx-muted) transition-colors duration-700">
                  {String(i + 1).padStart(2, "0")} · {r.label}
                </p>
                <p className="mt-1 text-sm leading-snug sm:text-base" style={step(i)}>
                  <Swap
                    us={us}
                    others={<span className="text-(--dx-muted)">{r.others}</span>}
                    mine={<span className="font-semibold">{r.us}</span>}
                  />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* The CV the same student walks out with */}
      <div className="on-light mx-auto w-full max-w-sm">
        <div className="dx-paper relative rounded-2xl bg-white p-6 text-ink-900 sm:p-7">
          <div className="flex items-center gap-3 border-b border-ink-950/10 pb-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
              <FileText className="size-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-500">{cv.title}</p>
              <p className="font-display text-lg font-extrabold leading-tight">{cv.name}</p>
              <p className="mt-0.5 text-xs">
                <Swap
                  us={us}
                  others={<span className="text-ink-500">{cv.othersRole}</span>}
                  mine={<span className="font-semibold text-brand-700">{cv.usRole}</span>}
                />
              </p>
            </div>
          </div>

          <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-500">{cv.heading}</p>
          <ul className="mt-3 grid gap-2">
            {rows.map((r, i) => (
              <li key={r.label} style={step(i)} className={`rounded-lg transition-shadow duration-300 ${active === i ? "shadow-[0_0_0_2px_var(--color-accent-500)]" : ""}`}>
                <Swap
                  us={us}
                  className="text-sm"
                  others={
                    <span className="flex items-center gap-2.5 rounded-lg border border-dashed border-ink-950/20 px-3 py-2 text-ink-500">
                      <Minus className="size-4 shrink-0" aria-hidden />
                      <span className="truncate">{r.label}: {cv.empty.toLowerCase()}</span>
                    </span>
                  }
                  mine={
                    <span className="flex items-center gap-2.5 rounded-lg bg-brand-50 px-3 py-2 font-semibold">
                      <span className="dx-tick grid size-4 shrink-0 place-items-center rounded-full bg-brand-600 text-white" style={step(i)}>
                        <Check className="size-3" strokeWidth={3.5} aria-hidden />
                      </span>
                      <span className="truncate">{r.cv}</span>
                    </span>
                  }
                />
              </li>
            ))}
          </ul>

          <div className="mt-6 pr-24">
            <div className="flex items-baseline justify-between gap-3 text-xs">
              <span className="font-mono uppercase tracking-wider text-ink-500">{cv.meter}</span>
              <Swap
                us={us}
                className="text-right font-bold"
                others={<span className="text-ink-500">{cv.othersMeter}</span>}
                mine={<span className="text-brand-700">{cv.usMeter}</span>}
              />
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-950/10">
              <div className="dx-meter h-full rounded-full bg-brand-600" />
            </div>
          </div>

          {/* Rubber stamps */}
          <span className="dx-stamp dx-stamp-others absolute -right-2 bottom-5 rounded-md border-2 border-ink-500 px-2.5 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-ink-500" aria-hidden>
            {cv.othersStamp}
          </span>
          <span className="dx-stamp dx-stamp-us absolute -right-3 bottom-4 rounded-md border-[3px] border-double border-brand-600 bg-accent-400 px-3 py-1.5 font-mono text-xs font-extrabold uppercase tracking-widest shadow-lg" aria-hidden>
            {cv.usStamp}
          </span>
        </div>
      </div>
    </div>
  );
}
