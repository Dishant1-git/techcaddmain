"use client";

import { useId, useMemo, useRef, useState } from "react";
import { MessageCircle, Plus, Search, X } from "lucide-react";

type Faq = { q: string; a: string };

/**
 * Searchable FAQ: live filter over questions + answers (result count announced politely), Expand all / Collapse all,
 * and an empty state that routes to WhatsApp. Items are native <details class="accordion"> (keyboard + no-JS friendly).
 * Items appear via the CSS keyframe `tr-pop` — never data-reveal, because the list re-renders on filter.
 */
export function FaqSearch({ faqs, askHref }: { faqs: Faq[]; askHref: string }) {
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputId = useId();

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q)) : faqs;
  }, [faqs, query]);

  const toggleAll = (open: boolean) => listRef.current?.querySelectorAll("details").forEach((d) => (d.open = open));

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor={inputId} className="sr-only">Search questions</label>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-500" aria-hidden />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. certificate, placement, weekend"
            className="su-field !rounded-full !py-4 !pl-12 !pr-12"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white text-ink-700 shadow-[var(--su-raise-sm)] transition-colors hover:text-brand-700">
              <X className="size-4" aria-hidden />
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => toggleAll(true)} disabled={shown.length === 0} className="su-btn-ghost !px-4 !py-2.5">Expand all</button>
          <button type="button" onClick={() => toggleAll(false)} disabled={shown.length === 0} className="su-btn-ghost !px-4 !py-2.5">Collapse all</button>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-ink-500">
        {query ? `${shown.length} of ${faqs.length} questions match “${query.trim()}”` : `${faqs.length} questions`}
      </p>

      <div ref={listRef} className="mt-5 space-y-4">
        {shown.map((f, i) => (
          <details key={f.q} className="accordion su-card group tr-pop overflow-hidden !rounded-3xl" style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold text-ink-900 transition-colors hover:text-brand-700 sm:px-6">
              {f.q}
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-[var(--su-raise-sm)] transition-all duration-300 group-open:bg-[#e9eef8] group-open:shadow-[var(--su-press)]">
                <Plus className="faq-icon size-4 transition-transform duration-300" aria-hidden />
              </span>
            </summary>
            <p className="su-inset mx-4 mb-4 p-4 leading-relaxed text-ink-700 sm:mx-5 sm:mb-5 sm:p-5">{f.a}</p>
          </details>
        ))}

        {shown.length === 0 && (
          <div className="su-card tr-pop p-8 text-center">
            <p className="font-semibold text-ink-900">No question matches “{query.trim()}”.</p>
            <p className="mt-1 text-sm text-ink-500">Ask a counsellor directly — we usually reply within the hour.</p>
            <a href={askHref} target="_blank" rel="noopener noreferrer" className="su-btn mt-5">
              <MessageCircle className="size-4" aria-hidden /> Ask on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
