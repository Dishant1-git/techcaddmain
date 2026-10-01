"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal scroll-snap carousel for /training pages (own copy so other tabs' pages are untouched).
 * Works without JS (swipe / shift+wheel / arrow keys on the focused list); JS adds Previous/Next buttons that
 * disable at the ends. Children must be <li class="snap-start …">.
 */
export function TrCarousel({ label, itemName, children, dark = false }: { label: string; itemName: string; children: ReactNode; dark?: boolean }) {
  const ref = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    update();
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const item = el.querySelector("li");
    const step = item ? item.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const btn = dark
    ? "grid size-12 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 active:scale-95 aria-disabled:pointer-events-none aria-disabled:opacity-40"
    : "su-btn-ghost size-12 !p-0 aria-disabled:pointer-events-none aria-disabled:opacity-40";

  return (
    <div>
      <div className="flex justify-end gap-3">
        <button type="button" onClick={() => go(-1)} aria-disabled={edge.start || undefined} aria-label={`Previous ${itemName}`} className={btn}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" onClick={() => go(1)} aria-disabled={edge.end || undefined} aria-label={`Next ${itemName}`} className={btn}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
      <ul
        ref={ref}
        tabIndex={0}
        aria-label={label}
        className="-mx-4 mt-2 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-12 pt-6 [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 sm:rounded-2xl"
      >
        {children}
      </ul>
    </div>
  );
}
