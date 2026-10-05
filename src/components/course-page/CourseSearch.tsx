"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, SearchX } from "lucide-react";
import { openLeadPopup } from "@/components/layout/LeadPopup";

export type CourseItem = {
  id: string;
  title: string;
  href: string;
  /** Extra searchable text (group, tools, description) — never shown. */
  keywords: string;
  /** Brand logo (simple-icons path, resolved on the server) or, without one, a 2–3 letter monogram. */
  path?: string;
  mono?: string;
  color: string;
};

export type CourseSection = { id: string; title: string; items: CourseItem[] };

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9+#. ]/g, " ");

/** Hero CTA on /courses: opens the site-wide lead popup. */
export function DemoClassButton() {
  return (
    <button
      type="button"
      onClick={openLeadPopup}
      aria-haspopup="dialog"
      className="group on-light mt-9 inline-flex cursor-pointer items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-sm font-semibold text-ink-900 transition-colors duration-300 hover:bg-brand-50"
    >
      Book a free demo class
      <span className="grid size-8 place-items-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight className="size-4" aria-hidden />
      </span>
    </button>
  );
}

/**
 * Course directory for /courses: one search box, then a section of compact course tiles per group. Every word typed
 * must match the course name, its group or its keywords; groups with no match are hidden. "/" focuses the search box.
 * No data-reveal on the tiles — the list re-renders on every keystroke.
 */
export function CourseSearch({ sections, sub }: { sections: CourseSection[]; /** Second line on every tile. */ sub: string }) {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const total = sections.reduce((n, s) => n + s.items.length, 0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key !== "/" || e.ctrlKey || e.metaKey || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      e.preventDefault();
      input.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const index = useMemo(
    () => sections.map((s) => ({ ...s, items: s.items.map((c) => ({ c, hay: norm(`${c.title} ${s.title} ${c.keywords}`) })) })),
    [sections],
  );

  const words = norm(query).split(/\s+/).filter(Boolean);
  const shown = index
    .map((s) => ({ ...s, items: s.items.filter(({ hay }) => words.every((w) => hay.includes(w))).map(({ c }) => c) }))
    .filter((s) => s.items.length > 0);
  const count = shown.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      <section aria-label="Search courses" className="border-b border-ink-900/10 py-8 lg:py-10">
        <div className="container-x">
          <div className="relative mx-auto max-w-2xl">
            <Search aria-hidden className="pointer-events-none absolute left-5 top-1/2 size-4.5 -translate-y-1/2 text-ink-500" />
            <input
              ref={input}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${total} courses: try "python", "cloud", "marketing"`}
              aria-label="Search courses"
              className="w-full rounded-full border border-ink-900/10 bg-white py-4 pl-13 pr-12 text-sm text-ink-900 outline-none transition-colors duration-300 placeholder:text-ink-500 focus-visible:border-brand-600/50 focus-visible:ring-4 focus-visible:ring-brand-600/10"
            />
          </div>
          <p className="sr-only" aria-live="polite">{words.length > 0 ? `${count} of ${total} courses match` : ""}</p>
        </div>
      </section>

      {shown.map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24 py-16 lg:py-20">
          <div className="container-x">
            <h2 id={`${s.id}-title`} className="text-2xl font-bold text-ink-900 lg:text-3xl">{s.title}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.items.map((c) => (
                <Link
                  key={c.id}
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-[0_24px_50px_-30px_rgb(10_19_48/0.5)]"
                >
                  <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: `${c.color}1a` }}>
                    {c.path ? (
                      <svg viewBox="0 0 24 24" className="size-5" fill={c.color}><path d={c.path} /></svg>
                    ) : (
                      <span className="font-display text-xs font-bold tracking-tight" style={{ color: c.color }}>{c.mono}</span>
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-base font-bold tracking-tight text-ink-900">{c.title}</span>
                    <span className="mt-1 block truncate text-xs text-ink-500">{sub}</span>
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-600/10 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {shown.length === 0 && (
        <section className="py-20 text-center">
          <div className="container-x">
            <SearchX className="mx-auto size-10 text-ink-300" aria-hidden />
            <p className="mt-4 text-lg font-bold text-ink-900">No course matches “{query.trim()}”</p>
            <p className="mt-1 text-sm text-ink-500">Try a shorter word, or tell us what you want to learn and a counsellor will guide you.</p>
            <button type="button" onClick={() => { setQuery(""); input.current?.focus(); }} className="btn-brand mt-6">Clear search</button>
          </div>
        </section>
      )}
    </>
  );
}
