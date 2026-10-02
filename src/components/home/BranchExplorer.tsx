"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Clock, MapPin, Navigation, Phone, Wifi } from "lucide-react";
import type { Branch } from "@/data/site";

const pad = (n: number) => String(n).padStart(2, "0");
const mapUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const tel = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

/**
 * Branch directory (right) drives the detail card (left): hovering, focusing or clicking a branch shows its details.
 * A click on a small screen also scrolls the card into view, because there it sits above the list.
 * The card content is keyed by slug and uses a CSS keyframe (not data-reveal) since it re-renders on selection.
 */
export function BranchExplorer({ branches, fallback }: { branches: Branch[]; fallback: { phone: string; hours: string } }) {
  const [active, setActive] = useState(() => Math.max(0, branches.findIndex((b) => b.hq)));
  const card = useRef<HTMLDivElement>(null);
  const b = branches[active];
  const phone = b.phone ?? fallback.phone;

  const select = (i: number, scroll: boolean) => {
    setActive(i);
    if (!scroll || !card.current) return;
    const top = card.current.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.6) card.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-12">
      {/* Detail card */}
      <div ref={card} data-reveal="left" className="scroll-mt-28 lg:col-span-5">
        <div className="on-dark relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-10" aria-live="polite">
          <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
          <div className="absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />

          <div key={b.slug} className="flex h-full flex-col motion-safe:animate-[fadeUp_0.45s_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-brand-200">
                {b.hq ? "Head office" : `Branch ${pad(active + 1)}`}
              </span>
              <span className="relative grid size-11 place-items-center" aria-hidden>
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-500/50 motion-reduce:animate-none" />
                <span className="relative grid size-11 place-items-center rounded-full bg-accent-500"><MapPin className="size-5" /></span>
              </span>
            </div>

            <h3 className="mt-8 text-4xl font-extrabold sm:text-5xl">{b.city}</h3>
            <p className="mt-1 text-sm text-brand-200">{b.state}</p>
            <p className="mt-4 leading-relaxed text-ink-300">{b.text}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Areas served by the ${b.city} branch`}>
              {b.areas.map((a) => (
                <li key={a} className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-[0.7rem] text-brand-200">{a}</li>
              ))}
            </ul>

            <ul className="mt-7 space-y-4 border-t border-white/10 pt-7 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />
                {b.address ?? `TechCADD ${b.city}, ${b.state} — call for the exact address and directions`}
              </li>
              <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />{fallback.hours}</li>
              <li>
                <a href={tel(phone)} className="flex gap-3 hover:text-accent-400"><Phone className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden />{phone}</a>
              </li>
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-9">
              <Link href={`/branches/${b.slug}`} className="btn-primary">Visit {b.city} campus <ArrowRight className="size-4" aria-hidden /></Link>
              <a href={mapUrl(`TechCADD, ${b.address ?? `${b.city}, ${b.state}`}`)} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                <Navigation className="size-4" aria-hidden /> Get directions<span className="sr-only"> to the {b.city} branch (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Directory */}
      <div data-reveal="right" className="lg:col-span-7">
        <ul className="h-full divide-y divide-ink-950/10 overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
          {branches.map((x, i) => {
            const on = i === active;
            return (
              <li key={x.slug}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => select(i, true)}
                  onMouseEnter={() => select(i, false)}
                  onFocus={() => select(i, false)}
                  className={`group relative flex w-full items-center gap-4 px-5 py-4 text-left transition-colors sm:gap-6 sm:px-7 ${on ? "bg-brand-50" : "hover:bg-brand-50/70"}`}
                >
                  <span className={`absolute inset-y-0 left-0 w-1 origin-top bg-accent-500 transition-transform duration-300 ${on ? "scale-y-100" : "scale-y-0"}`} aria-hidden />
                  <span className={`font-mono text-xs font-bold transition-colors ${on ? "text-brand-600" : "text-ink-300"}`}>{pad(i + 1)}</span>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-xl border transition-colors duration-300 ${on ? "border-brand-600 bg-brand-600 text-white" : "border-ink-950/10 bg-brand-50 text-brand-700"}`}>
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-lg font-bold text-ink-900">
                      {x.city}
                      {x.hq && <span className="rounded-full bg-accent-500/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent-600">HQ</span>}
                    </span>
                    <span className="block text-sm text-ink-500">{x.state}</span>
                  </span>
                  <ChevronRight className={`size-5 shrink-0 transition-all duration-300 ${on ? "translate-x-0.5 text-brand-600" : "text-ink-300"}`} aria-hidden />
                </button>
              </li>
            );
          })}
          <li>
            <Link href="/#demo" className="group flex items-center gap-4 bg-linear-to-r from-accent-500/10 to-transparent px-5 py-4 transition-colors hover:from-accent-500/20 sm:gap-6 sm:px-7">
              <span className="font-mono text-xs font-bold text-accent-600">{pad(branches.length + 1)}</span>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-500 text-white"><Wifi className="size-5" aria-hidden /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold text-ink-900">Live Online Classes</span>
                <span className="block text-sm text-ink-500">Join from anywhere in North India</span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-accent-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
