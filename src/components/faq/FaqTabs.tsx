"use client";

import { useId, useMemo, useState } from "react";
import { Plus, Search, X } from "lucide-react";
import type { FaqCategory } from "@/data/faq-page";

/** Category tabs (5 questions each) + live search across every category. Native <details> items, keyed re-render uses the fadeUp keyframe, not data-reveal. */
export function FaqTabs({ categories }: { categories: FaqCategory[] }) {
  const [active, setActive] = useState(categories[0].id);
  const [query, setQuery] = useState("");
  const inputId = useId();

  const q = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      q
        ? categories.flatMap((c) => c.faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q)).map((f) => ({ ...f, cat: c.label })))
        : [],
    [categories, q],
  );
  const current = categories.find((c) => c.id === active) ?? categories[0];
  const list = q ? results : current.faqs.map((f) => ({ ...f, cat: current.label }));

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">Search the questions</label>
      <div className="relative sm:max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-500" aria-hidden />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search — placement, fees, certificate…"
          className="w-full rounded-full border border-ink-300/50 bg-white py-3 pl-11 pr-10 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-ink-900">
            <X className="size-4" aria-hidden />
          </button>
        )}
      </div>

      {!q && (
        <div role="tablist" aria-label="FAQ categories" className="mt-6 flex gap-2 overflow-x-auto border-b border-ink-300/40 pb-px">
          {categories.map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(c.id)}
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${on ? "border-brand-600 text-brand-600" : "border-transparent text-ink-500 hover:text-ink-900"}`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      )}

      <p aria-live="polite" className="mt-5 text-sm text-ink-500">
        {q ? `${list.length} question${list.length === 1 ? "" : "s"} match “${query.trim()}”` : `${list.length} questions in ${current.label}`}
      </p>

      <div key={q ? "search" : current.id} className="mt-4 space-y-3">
        {list.map((f, i) => (
          <details key={f.q} className="card group animate-[fadeUp_.4s_ease_both] open:border-brand-200 open:shadow-lg" style={{ animationDelay: `${i * 50}ms` }} open={i === 0 && !q}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold text-ink-900 sm:px-6">
              <span>
                {q && <span className="mb-1 block text-xs font-medium text-brand-600">{f.cat}</span>}
                {f.q}
              </span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                <Plus className="size-4" aria-hidden />
              </span>
            </summary>
            <p className="-mt-1 px-5 pb-6 leading-relaxed text-ink-500 sm:px-6">{f.a}</p>
          </details>
        ))}
        {list.length === 0 && (
          <div className="card p-8 text-center">
            <p className="font-semibold text-ink-900">No question matches “{query.trim()}”.</p>
            <p className="mt-1 text-sm text-ink-500">Call us and a counsellor will answer it.</p>
          </div>
        )}
      </div>
    </div>
  );
}
