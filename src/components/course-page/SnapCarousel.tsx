"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal scroll-snap carousel. Works without JS (swipe / shift+wheel / arrow keys on the focused list);
 * JS only adds Previous/Next buttons that disable at the ends. Children must be <li class="snap-center …">.
 * Add `snap-focus` to each <li> for the CSS scroll-driven "centre card is largest" effect.
 */
export function SnapCarousel({ label, itemName, children }: { label: string; itemName: string; children: ReactNode }) {
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

  const btn =
    "grid size-12 place-items-center rounded-full bg-neu text-ink-900 shadow-neu-sm transition-[box-shadow,color,opacity] duration-300 hover:text-brand-700 hover:shadow-neu-lg active:shadow-neu-inset-sm aria-disabled:pointer-events-none aria-disabled:opacity-40";

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
        className="-mx-4 mt-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 py-8 [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 sm:mx-0 sm:rounded-[2rem] sm:px-2"
      >
        {children}
      </ul>
    </div>
  );
}
