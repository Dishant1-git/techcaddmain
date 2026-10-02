"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SCALE_MAX, bandFor, fmt, regions, roles, type Region } from "@/data/salary-estimator";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

function Bar({ label, range, accent }: { label: string; range: [number, number]; accent?: boolean }) {
  const left = (range[0] / SCALE_MAX) * 100;
  const width = ((range[1] - range[0]) / SCALE_MAX) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-white/80">{label}</span>
        <span className="font-mono text-sm font-bold tabular-nums text-white">{fmt(range)}</span>
      </div>
      <div role="img" aria-label={`${label}: ${range[0]} to ${range[1]} lakh per annum`} className="relative mt-2 h-2.5 rounded-full bg-white/10">
        <span aria-hidden className={`absolute inset-y-0 rounded-full transition-all duration-700 ${accent ? "bg-accent-500" : "bg-brand-300/70"}`} style={{ left: `${left}%`, width: `${width}%` }} />
      </div>
    </div>
  );
}

export function SalaryEstimator() {
  const [roleId, setRoleId] = useState(roles[0].id);
  const [region, setRegion] = useState<Region>("punjab");
  const role = roles.find((r) => r.id === roleId)!;
  const reg = regions.find((r) => r.id === region)!;
  const band = bandFor(role, region);

  return (
    <div className="mx-auto max-w-4xl">
      <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-500">
        {["100% free — always", "Results shown instantly", "No spam, ever"].map((t) => <li key={t} className="inline-flex items-center gap-1.5"><span className="text-brand-600">✓</span> {t}</li>)}
      </ul>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {roles.map((r) => {
          const on = r.id === roleId;
          return (
            <button key={r.id} type="button" aria-pressed={on} onClick={() => setRoleId(r.id)}
              className={`flex flex-col items-start gap-2.5 rounded-2xl border p-4 text-left transition-all duration-300 ${on ? "border-brand-600 bg-brand-50 shadow-[0_16px_40px_-24px_rgba(29,83,240,0.5)]" : "border-ink-300/40 bg-white hover:-translate-y-0.5 hover:border-brand-600/30"}`}>
              <span className={`grid size-9 shrink-0 place-items-center rounded-lg transition-colors duration-300 ${on ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"}`}><Icon name={r.icon} className="size-4" /></span>
              <span className="font-display text-sm font-bold leading-snug text-ink-900">{r.title}</span>
            </button>
          );
        })}
      </div>

      {/* Salary panel */}
      <div className="relative isolate mt-6 overflow-hidden rounded-[1.75rem] bg-ink-950 p-6 text-white shadow-[0_40px_100px_-30px_rgba(6,10,35,0.85)] sm:p-9" aria-live="polite">
        <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
        <span aria-hidden className="absolute -right-16 -top-20 -z-10 size-72 rounded-full bg-brand-600/30 blur-[100px]" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-400">{role.title}</p>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/65">{role.summary}</p>
          </div>
          <div role="tablist" aria-label="Region" className="inline-flex shrink-0 flex-wrap rounded-full border border-white/15 bg-white/5 p-1">
            {regions.map((r) => (
              <button key={r.id} type="button" role="tab" aria-selected={r.id === region} onClick={() => setRegion(r.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 ${r.id === region ? "bg-white text-ink-900" : "text-white/60 hover:text-white"}`}>
                {r.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <Bar label="Fresher" range={band.fresher} />
          <Bar label="After 2 Years" range={band.twoYear} accent />
        </div>
        <p className="mt-7 text-xs leading-relaxed text-white/45">
          Indicative ranges for entry-level {role.title.toLowerCase()} roles in {reg.label}, compiled from public job-market listings. Actual offers vary by employer, skillset and interview performance.
        </p>
      </div>

      {/* Where hired */}
      <div className="card mt-6 p-6 sm:p-8">
        <h3 className="text-lg font-extrabold text-ink-900">Where {role.title.toLowerCase()} graduates get hired</h3>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {role.hiredBy.map((h) => (
            <li key={h} className="flex items-start gap-2.5 rounded-xl border border-ink-300/40 bg-brand-50/50 px-4 py-3 text-sm leading-snug text-ink-700">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-600" /> {h}
            </li>
          ))}
        </ul>
        <Link href={role.courseHref} className="btn-brand mt-6 inline-flex">Explore {role.courseLabel} <ArrowRight className="size-4" aria-hidden /></Link>
      </div>

      {/* Consultation */}
      <div className="relative isolate mt-10 overflow-hidden rounded-[1.75rem] bg-ink-950 p-6 text-white sm:p-8">
        <span aria-hidden className="absolute -left-16 -top-20 -z-10 size-72 rounded-full bg-brand-600/30 blur-[100px]" />
        <span aria-hidden className="absolute -bottom-24 -right-20 -z-10 size-72 rounded-full bg-accent-500/20 blur-[100px]" />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-400">Free Consultation Call</p>
        <h3 className="mt-1 text-lg font-extrabold sm:text-xl">Talk through a {role.title} career</h3>
        <p className="mt-3 text-xs font-semibold text-white/60">★★★★★ {site.rating.score} · {site.rating.reviews} reviews</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-ink-900 transition-colors hover:bg-brand-50"><Phone className="size-4" aria-hidden /> Call Now — {site.phone}</a>
          <a href={waLink(`Hi techcadd, I'd like a free callback about a ${role.title} career.`)} target="_blank" rel="noreferrer noopener" className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold transition-colors hover:bg-white/10">Request a Free Callback</a>
        </div>
        <p className="mt-5 text-xs text-white/45">Always free. No fee for the call, no obligation to enrol.</p>
      </div>
    </div>
  );
}
