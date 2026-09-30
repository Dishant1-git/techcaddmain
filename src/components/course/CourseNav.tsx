"use client";

import { useEffect, useRef, useState } from "react";

export type CourseNavItem = { id: string; label: string };

/**
 * Sticky in-page nav under the header (top-24 = header height). Links are plain #anchors, so it works without JS;
 * JS only adds scroll-spy (aria-current) and keeps the active chip visible on narrow screens.
 * `variant`: "glass" (AI course pages) or "neu" (neumorphic /courses pages).
 */
const styles = {
  glass: {
    bar: "border-b border-white/70 bg-white/70 shadow-[0_10px_24px_-18px_rgb(10_19_48/0.35)] backdrop-blur-xl",
    link: "hover:shadow-soft-sm active:shadow-soft-inset aria-[current]:bg-soft aria-[current]:shadow-soft-inset",
    cta: "btn-primary",
  },
  neu: {
    bar: "border-b border-white/60 bg-neu/95 shadow-[0_8px_16px_-10px_#c3cad8] backdrop-blur-md",
    link: "hover:shadow-neu-sm active:shadow-neu-inset-sm aria-[current]:bg-neu aria-[current]:shadow-neu-inset-sm",
    cta: "btn-neu-primary",
  },
};

export function CourseNav({ items, variant = "glass" }: { items: CourseNavItem[]; variant?: keyof typeof styles }) {
  const st = styles[variant];
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
    <nav aria-label="Course sections" className={`sticky top-24 z-40 ${st.bar}`}>
      <div className="container-x flex items-center gap-4">
        <ul ref={listRef} className="relative -mx-4 flex min-w-0 flex-1 gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:mx-0 sm:px-0">
          {items.map((i) => (
            <li key={i.id} className="shrink-0">
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? "location" : undefined}
                className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-ink-500 transition-[color,box-shadow] duration-300 hover:text-ink-900 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 aria-[current]:text-brand-700 ${st.link}`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#enrol" className={`${st.cta} hidden shrink-0 !px-5 !py-2 md:inline-flex`}>Book Free Demo</a>
      </div>
    </nav>
  );
}
