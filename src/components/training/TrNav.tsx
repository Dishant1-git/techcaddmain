"use client";

import { useEffect, useRef, useState } from "react";

export type TrNavItem = { id: string; label: string };

/**
 * Sticky in-page nav for /training pages (top-24 = header height). Own copy so other tabs' pages are untouched.
 * Links are plain #anchors (works without JS); JS only adds scroll-spy (aria-current) and keeps the active chip in view.
 * The bottom bar is a CSS scroll-driven reading-progress line (hidden where unsupported).
 */
export function TrNav({ items, label = "Training sections" }: { items: TrNavItem[]; label?: string }) {
  const [active, setActive] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => el !== null);
    const visible = new Set<string>();
    // A thin band across the middle of the viewport decides which section is "current".
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const current = items.find((i) => visible.has(i.id));
        if (current) setActive(current.id);
        else if (sections[0] && sections[0].getBoundingClientRect().top > window.innerHeight * 0.4) setActive("");
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const link = active ? list?.querySelector<HTMLElement>(`a[href="#${active}"]`) : null;
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  return (
    // Soft UI: a floating raised pill; the active link is a pressed well with brand text (not a colour swap only).
    <nav aria-label={label} className="pointer-events-none sticky top-24 z-40 py-3">
      <div className="container-x">
        <div className="su-card pointer-events-auto relative flex items-center gap-3 overflow-hidden !rounded-full p-1.5">
          <ul ref={listRef} className="flex min-w-0 flex-1 gap-1 overflow-x-auto px-1 [scrollbar-width:none]">
            {items.map((i) => (
              <li key={i.id} className="shrink-0">
                <a
                  href={`#${i.id}`}
                  aria-current={active === i.id ? "location" : undefined}
                  className="block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition-[background-color,color,box-shadow] duration-300 hover:text-brand-700 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600 active:shadow-[var(--su-press)] aria-[current]:bg-[#e9eef8] aria-[current]:text-brand-700 aria-[current]:shadow-[var(--su-press)]"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#enquire" className="su-btn hidden shrink-0 !px-5 !py-2 md:inline-flex">Book Free Demo</a>
          <div aria-hidden className="scroll-progress absolute inset-x-6 bottom-0 hidden h-[3px] rounded-full bg-linear-to-r from-brand-500 to-accent-400 supports-[animation-timeline:scroll()]:block" />
        </div>
      </div>
    </nav>
  );
}
