"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Clock, Search, SearchX, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

export type CourseItem = {
  id: string;
  title: string;
  text: string;
  href: string;
  /** Group id + label (filter chips). */
  group: string;
  groupTitle: string;
  icon: string;
  duration?: string;
  level?: string;
  /** Up to three shown as chips; all are searchable. */
  tags: string[];
  /** Hot / Trending / New (from the nav). */
  badge?: string;
};

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9+#. ]/g, " ");

const badgeTone: Record<string, string> = {
  hot: "bg-accent-500/10 text-accent-600",
  trending: "bg-brand-100 text-brand-700",
  new: "bg-emerald-100 text-emerald-700",
};

/**
 * Searchable, filterable course catalogue for /courses. Every word typed must match the course's title, description,
 * group or tools. Cards use a CSS keyframe (not data-reveal) because the list re-renders on every keystroke.
 */
export function CourseSearch({ items, groups }: { items: CourseItem[]; groups: { id: string; title: string }[] }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const input = useRef<HTMLInputElement>(null);

  // "/" focuses the search box (unless the user is already typing somewhere).
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
    () => items.map((c) => ({ c, hay: norm([c.title, c.text, c.groupTitle, c.level ?? "", ...c.tags].join(" ")) })),
    [items],
  );

  const words = norm(query).split(/\s+/).filter(Boolean);
  const matched = index.filter(({ hay }) => words.every((w) => hay.includes(w))).map(({ c }) => c);
  const shown = group === "all" ? matched : matched.filter((c) => c.group === group);
  const count = (id: string) => (id === "all" ? matched.length : matched.filter((c) => c.group === id).length);

  const reset = () => {
    setQuery("");
    setGroup("all");
    input.current?.focus();
  };

  return (
    <div>
      {/* Search + filters: sticks under the header while the results scroll */}
      <div className="sticky top-20 z-20 -mx-4 bg-slate-50/85 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-24">
        <div role="search" className="relative mx-auto max-w-3xl">
          <label htmlFor="course-search" className="sr-only">Search courses</label>
          <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-ink-500" aria-hidden />
          <input
            ref={input}
            id="course-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            placeholder="Search by course, skill or tool — e.g. Python, Excel, AutoCAD"
            autoComplete="off"
            className="w-full rounded-full border border-ink-950/10 bg-white py-4 pl-14 pr-24 text-base text-ink-900 shadow-[0_12px_30px_-14px_rgba(15,23,42,0.3)] outline-none transition-shadow placeholder:text-ink-500 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 [&::-webkit-search-cancel-button]:hidden"
          />
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
            {query ? (
              <button type="button" onClick={() => { setQuery(""); input.current?.focus(); }} aria-label="Clear search" className="grid size-9 place-items-center rounded-full bg-ink-950/5 text-ink-700 transition-colors hover:bg-ink-950/10">
                <X className="size-4" aria-hidden />
              </button>
            ) : (
              <kbd className="hidden rounded-md border border-ink-950/10 bg-slate-50 px-2 py-1 font-mono text-xs text-ink-500 sm:block" aria-hidden>/</kbd>
            )}
          </div>
        </div>

        <div role="group" aria-label="Filter by category" className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden">
          {[{ id: "all", title: "All courses" }, ...groups].map((g) => {
            const active = group === g.id;
            return (
              <button
                key={g.id}
                type="button"
                aria-pressed={active}
                onClick={() => setGroup(g.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? "border-ink-950 bg-ink-950 text-white" : "border-ink-950/10 bg-white text-ink-700 hover:border-brand-400 hover:text-brand-700"
                }`}
              >
                {g.title}
                <span className={`rounded-full px-1.5 font-mono text-xs ${active ? "bg-white/15" : "bg-ink-950/5 text-ink-500"}`}>{count(g.id)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-500" aria-live="polite">
        {shown.length === 0 ? "No courses found" : `Showing ${shown.length} of ${items.length} courses`}
        {query && <> for &ldquo;<span className="font-semibold text-ink-900">{query}</span>&rdquo;</>}
      </p>

      {shown.length === 0 ? (
        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-dashed border-ink-950/15 bg-white p-10 text-center">
          <SearchX className="mx-auto size-10 text-ink-300" aria-hidden />
          <p className="mt-4 text-lg font-bold text-ink-900">Nothing matches that search</p>
          <p className="mt-2 text-sm text-ink-500">Try a shorter word, a tool name, or clear the filters. Can&apos;t find a course? Ask a counsellor — we may still teach it.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={reset} className="btn-brand">Clear search</button>
            <Link href="/#demo" className="btn-ghost">Ask a counsellor</Link>
          </div>
        </div>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((c, i) => (
            <li key={c.id} className="motion-safe:animate-[fadeUp_0.45s_cubic-bezier(0.22,1,0.36,1)_both]" style={{ animationDelay: `${Math.min(i, 11) * 35}ms` }}>
              <CourseCard c={c} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Whole card is one link (stretched ::after); focus ring is drawn on the card. */
function CourseCard({ c }: { c: CourseItem }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white p-6 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_48px_-22px_rgba(29,83,240,0.4)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-brand-500">
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden />

      <div className="flex items-start justify-between gap-3">
        <span aria-hidden className="grid size-12 place-items-center rounded-xl border border-ink-950/10 bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={c.icon} className="size-6" />
        </span>
        {c.badge && (
          <span className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${badgeTone[c.badge.toLowerCase()] ?? badgeTone.trending}`}>{c.badge}</span>
        )}
      </div>

      <p className="mt-5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-500">{c.groupTitle}</p>
      <h3 className="mt-1.5 text-lg font-bold leading-snug text-ink-900">
        <Link href={c.href} className="outline-none after:absolute after:inset-0 group-hover:text-brand-700">{c.title}</Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-500">{c.text}</p>

      {c.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools covered">
          {c.tags.slice(0, 3).map((t) => (
            <li key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-ink-700">{t}</li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between gap-3 border-t border-ink-950/10 pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-700">
            {c.duration && <span className="flex items-center gap-1.5"><Clock className="size-3.5 text-brand-600" aria-hidden />{c.duration}</span>}
            {c.level && <span className="flex items-center gap-1.5"><BarChart3 className="size-3.5 text-brand-600" aria-hidden />{c.level}</span>}
            {!c.duration && !c.level && <span className="font-semibold text-brand-700">View details</span>}
          </div>
          <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-full bg-ink-950/5 text-ink-700 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-600 group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
