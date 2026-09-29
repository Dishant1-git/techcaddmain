"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BarChart3, Clock, Flame, MonitorPlay } from "lucide-react";
import { categories, courses } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

const tabs = [{ id: "all", title: "All Courses" }, ...categories.map((c) => ({ id: c.id, title: c.title }))];

/** Filterable course grid. Cards use a CSS keyframe (not data-reveal) so re-filtered cards always appear. */
export function CourseExplorer() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? courses : courses.filter((c) => c.category === active);

  return (
    <>
      <div role="tablist" aria-label="Course categories" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:flex-wrap lg:justify-center">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              active === t.id ? "bg-ink-900 text-white shadow-lg" : "bg-ink-900/5 text-ink-700 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      <div key={active} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => {
          const cat = categories.find((x) => x.id === c.category)!;
          return (
            <article
              key={c.title}
              className="card card-hover group flex flex-col overflow-hidden animate-[fadeUp_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative h-36 overflow-hidden bg-linear-to-br from-brand-600 via-brand-700 to-ink-900 p-6">
                <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
                <Icon name={cat.icon} className="absolute -bottom-6 -right-4 size-32 text-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <Icon name={cat.icon} className="size-3.5" /> {cat.title}
                </span>
                {c.popular && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-1 text-[11px] font-bold text-white">
                    <Flame className="size-3" aria-hidden /> Popular
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-ink-900">{c.title}</h3>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-ink-500">
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5 text-brand-600" aria-hidden />{c.duration}</span>
                  <span className="flex items-center gap-1.5"><BarChart3 className="size-3.5 text-brand-600" aria-hidden />{c.level}</span>
                  <span className="flex items-center gap-1.5"><MonitorPlay className="size-3.5 text-brand-600" aria-hidden />{c.mode}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-ink-700">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent-500" />{h}</li>
                  ))}
                </ul>
                <Link href="/#demo" className="mt-auto flex items-center justify-between border-t border-ink-900/5 pt-5 text-sm font-semibold text-brand-700">
                  Enquire now
                  <span className="grid size-9 place-items-center rounded-full bg-brand-50 transition-all group-hover:bg-brand-600 group-hover:text-white">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
        {list.length === 0 && (
          <p className="col-span-full rounded-2xl bg-brand-50 p-10 text-center text-ink-500">
            More courses in this track are coming soon — <Link href="/#demo" className="font-semibold text-brand-700">ask a counsellor</Link>.
          </p>
        )}
      </div>
    </>
  );
}
