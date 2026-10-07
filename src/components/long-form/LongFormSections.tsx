import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { LongForm } from "@/data/long-form";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

/* Long-form sections shared by Internship & Training pages (tone "site": white / brand-50 sections, `card`) and After 12th
   pages (tone "soft": bg-soft sections, `su-card`). Copy comes from `longFormFor()` in src/data/long-form.ts. */

type Tone = "site" | "soft";
const look = {
  site: { regions: "bg-white", why: "bg-brand-50/50", card: "card" },
  soft: { regions: "bg-soft", why: "bg-soft", card: "su-card" },
} satisfies Record<Tone, { regions: string; why: string; card: string }>;

const num = (i: number) => String(i + 1).padStart(2, "0");

/** "Learners from across states": one card per state / region. */
export function LfRegions({ data, tone = "site" }: { data: LongForm; tone?: Tone }) {
  const r = data.regions;
  const t = look[tone];
  return (
    <section id="states" aria-labelledby="states-title" className={`section defer-render scroll-mt-16 ${t.regions}`}>
      <div className="container-x">
        <SectionHeading id="states-title" eyebrow={r.eyebrow} title={r.title} text={r.intro || undefined} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {r.items.map((it, i) => (
            <li key={it.title} data-reveal="up" style={delay(i % 3)}>
              <div className={`${t.card} h-full p-6`}>
                <h3 className="flex items-center gap-2 text-lg font-bold text-ink-900">
                  <MapPin className="size-4 shrink-0 text-brand-600" aria-hidden /> {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
        {r.outro && <p data-reveal="up" className="mx-auto mt-8 max-w-3xl text-center text-ink-700">{r.outro}</p>}
      </div>
    </section>
  );
}

/** "Why this program": numbered reasons in two columns. */
export function LfWhy({ data, tone = "site" }: { data: LongForm; tone?: Tone }) {
  const w = data.whyProgram;
  const t = look[tone];
  return (
    <section id="why-program" aria-labelledby="why-program-title" className={`section defer-render scroll-mt-16 ${t.why}`}>
      <div className="container-x">
        <SectionHeading id="why-program-title" eyebrow={w.eyebrow} title={w.title} text={w.intro || undefined} />
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {w.points.map((p, i) => (
            <li key={p.title} data-reveal="up" style={delay(i % 2)}>
              <div className={`${t.card} h-full p-6`}>
                <p className="font-mono text-xs font-bold text-brand-600">{num(i)}</p>
                <h3 className="mt-2 text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.text}</p>
                {p.list && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-500">
                    {p.list.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                )}
                {p.after && <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.after}</p>}
              </div>
            </li>
          ))}
        </ol>
        {w.outro && <p data-reveal="up" className="mx-auto mt-10 max-w-3xl text-center text-ink-700">{w.outro}</p>}
        {data.href && (
          <p data-reveal="up" className="mt-8 text-center">
            <Link href={data.href} className="link inline-flex items-center gap-1.5">
              Read the full {data.name} page <ArrowRight className="size-4" aria-hidden />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
