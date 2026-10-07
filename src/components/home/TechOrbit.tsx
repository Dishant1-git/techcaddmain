"use client";

import { useState, type CSSProperties } from "react";

export type OrbitItem = { name: string; color: string; path?: string; mono?: string };
export type OrbitTab = { id: string; label: string; items: OrbitItem[] };

const INNER = 5; // first N items sit on the inner ring
const RING = { inner: 27, outer: 45 }; // radius in % of the orbit box

/** Category tabs + two slowly rotating rings of logos with hover/focus tooltips.
 *  Rotation never pauses; it is disabled for reduced-motion users. */
export function TechOrbit({ tabs }: { tabs: OrbitTab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  const inner = tab.items.slice(0, INNER);
  const outer = tab.items.slice(INNER);

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex justify-center" data-reveal="up">
        <div role="tablist" aria-label="Technology categories" className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-ink-900/5 bg-white p-1.5 shadow-sm [scrollbar-width:none]">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                t.id === active ? "bg-brand-600 text-white shadow-[0_8px_20px_-8px_rgba(29,83,240,0.8)]" : "text-ink-500 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orbit */}
      <div className="orbit relative mx-auto mt-8 aspect-square w-full max-w-[26rem] lg:max-w-[31rem]" role="tabpanel" aria-label={`${tab.label} technologies`}>
        {/* Glow + rings */}
        <div className="absolute inset-[20%] rounded-full bg-brand-200/40 blur-3xl" aria-hidden />
        <div className="absolute rounded-full border border-dashed border-ink-300/60" style={ring(RING.outer)} aria-hidden />
        <div className="absolute rounded-full border border-dashed border-ink-300/60" style={ring(RING.inner)} aria-hidden />

        {/* Centre mark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/30 motion-reduce:animate-none" aria-hidden />
          <span className="relative grid size-16 place-items-center rounded-full bg-ink-950 font-display text-3xl font-extrabold text-white shadow-[0_16px_40px_-10px_rgba(5,11,31,0.6)] sm:size-[4.5rem] sm:text-4xl">
            t
          </span>
        </div>

        <Ring key={`${tab.id}-in`} items={inner} radius={RING.inner} duration="70s" offset={0} />
        <Ring key={`${tab.id}-out`} items={outer} radius={RING.outer} duration="90s" offset={0.5} reverse delayBase={inner.length} />
      </div>

      <p className="mt-6 text-center text-sm text-ink-500">
        <strong className="text-ink-900">{tab.items.length}</strong> {tab.label} tools in our curriculum · hover a logo to see its name
      </p>
    </div>
  );
}

/** Round so server- and client-computed trig values match exactly (avoids hydration mismatch). */
const round = (n: number) => Math.round(n * 100) / 100;
const ring = (r: number): CSSProperties => ({ inset: `${50 - r}%` });

function Ring({
  items, radius, duration, offset, reverse = false, delayBase = 0,
}: { items: OrbitItem[]; radius: number; duration: string; offset: number; reverse?: boolean; delayBase?: number }) {
  const spin = (dir: "normal" | "reverse") => ({ "--dur": duration, "--dir": dir }) as CSSProperties;
  const dir = reverse ? "reverse" : "normal";
  const counter = reverse ? "normal" : "reverse";

  return (
    <div className="orbit-spin absolute inset-0" style={spin(dir)}>
      {items.map((item, i) => {
        const angle = ((i + offset) / items.length) * 2 * Math.PI - Math.PI / 2;
        return (
          <div
            key={item.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 has-[:hover,:focus-visible]:z-10"
            style={{ left: `${round(50 + radius * Math.cos(angle))}%`, top: `${round(50 + radius * Math.sin(angle))}%` }}
          >
            {/* Counter-rotate so logos + tooltip stay upright */}
            <div className="orbit-spin" style={spin(counter)}>
              <div className="animate-[popIn_0.5s_cubic-bezier(0.34,1.56,0.64,1)_both]" style={{ animationDelay: `${(delayBase + i) * 50}ms` }}>
                <Logo item={item} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Logo({ item }: { item: OrbitItem }) {
  return (
    <div
      tabIndex={0}
      aria-label={item.name}
      className="group/logo relative grid size-11 cursor-default place-items-center rounded-full border border-ink-900/5 bg-white shadow-[0_8px_24px_-10px_rgba(10,19,48,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:size-12 lg:size-[3.25rem]"
    >
      {item.path ? (
        <svg viewBox="0 0 24 24" className="size-5 sm:size-6" fill={item.color} aria-hidden>
          <path d={item.path} />
        </svg>
      ) : (
        <span
          className="grid size-6 place-items-center rounded-md text-[9px] font-extrabold text-white sm:size-7 sm:text-[10px]"
          style={{ background: item.color }}
          aria-hidden
        >
          {item.mono}
        </span>
      )}

      {/* Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-ink-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover/logo:translate-y-0 group-hover/logo:opacity-100 group-focus-visible/logo:translate-y-0 group-focus-visible/logo:opacity-100"
      >
        {item.name}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink-950" aria-hidden />
      </span>
    </div>
  );
}
