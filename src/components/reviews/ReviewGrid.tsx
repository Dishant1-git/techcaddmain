"use client";

import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import type { Review } from "@/data/reviews";

/** Shows the first `initial` reviews; "See more" reveals the rest. New cards use the fadeUp keyframe (not data-reveal) because they mount after a click. */
export function ReviewGrid({ reviews, initial }: { reviews: Review[]; initial: number }) {
  const [open, setOpen] = useState(false);
  const shown = open ? reviews : reviews.slice(0, initial);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r, i) => (
          <article
            key={r.href}
            className="card flex flex-col p-6 animate-[fadeUp_.4s_ease_both]"
            style={{ animationDelay: `${(i % initial) * 50}ms` }}
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-600 to-accent-500 text-xs font-bold text-white">
                {r.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink-900">{r.name}</p>
                <p className="text-xs text-ink-500">Posted on Google</p>
              </div>
            </div>
            <div className="mt-4 flex gap-0.5 text-amber-400" role="img" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="size-4 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{r.text}</blockquote>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">{r.course}</span>
              <a href={r.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-[11px] font-semibold">
                Read on Google <ExternalLink className="size-3" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>
      {reviews.length > initial && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="btn-ghost">
            {open ? "See less" : `See more reviews (${reviews.length - initial})`}
          </button>
        </div>
      )}
    </div>
  );
}
