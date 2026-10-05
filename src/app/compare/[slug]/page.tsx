import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import type { CoursePage } from "@/data/course-pages";
import { comparePairs, findPair, shortName } from "@/lib/compare";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

/** One statically generated page per pair in `comparePairs` (src/lib/compare.ts). No pricing, like all course pages. */
export const dynamicParams = false;

export function generateStaticParams() {
  return comparePairs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = findPair(slug);
  if (!p) return {};
  const title = `${shortName(p.a)} vs ${shortName(p.b)} — Which Course Should You Choose?`;
  const description = `Side-by-side comparison of ${p.a.title} and ${p.b.title}: duration, level, tools, projects and careers.`;
  return { title, description, alternates: { canonical: `/compare/${p.slug}` }, openGraph: { title, description, url: `/compare/${p.slug}` } };
}

const rows: { label: string; get: (c: CoursePage) => ReactNode }[] = [
  { label: "Level", get: (c) => c.level },
  { label: "Duration", get: (c) => c.duration },
  { label: "Who can join", get: (c) => c.eligibility },
  { label: "Key tools", get: (c) => c.tools.slice(0, 6).join(", ") },
  { label: "What you’ll learn", get: (c) => c.syllabus.slice(0, 4).map((s) => s.title).join(" · ") },
  { label: "Portfolio projects", get: (c) => c.projects.slice(0, 3).map((x) => x.title).join(" · ") || "—" },
  { label: "Career roles", get: (c) => c.careers.slice(0, 3).map((x) => x.role).join(", ") },
];

export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const p = findPair(slug);
  if (!p) notFound();
  const { a, b } = p;
  const pair = [a, b];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/compare" className="hover:text-white">Compare Courses</Link> /{" "}
            <span className="text-white">{shortName(a)} vs {shortName(b)}</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Compare</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {shortName(a)} <span className="text-gradient">vs</span> {shortName(b)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Both are taught at techcadd. Here is how they differ on level, tools, projects and where each one can take you.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading align="left" eyebrow="Side by side" title={<>The differences <span className="text-gradient">at a glance</span></>} />
          <div data-reveal="up" className="mt-10 overflow-x-auto rounded-2xl border border-ink-300/40">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-300/40 bg-brand-50/60 text-left">
                  <th scope="col" className="w-40 px-5 py-4 font-semibold text-ink-900"><span className="sr-only">Feature</span></th>
                  {pair.map((c) => (
                    <th key={c.slug} scope="col" className="px-5 py-4 font-display text-base font-bold text-ink-900">
                      <Link href={`/courses/${c.slug}`} className="inline-flex items-center gap-2 hover:text-brand-600"><Icon name={c.icon} className="size-4 text-brand-600" />{shortName(c)}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-ink-300/30 align-top last:border-0 even:bg-brand-50/30">
                    <th scope="row" className="px-5 py-4 text-left font-semibold text-ink-900">{r.label}</th>
                    {pair.map((c) => <td key={c.slug} className="px-5 py-4 leading-relaxed text-ink-700">{r.get(c)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Which to pick" title={<>Choose the one that <span className="text-gradient">fits your goal</span></>} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pair.map((c, i) => (
              <article key={c.slug} data-reveal="up" style={{ "--d": `${i * 90}ms` } as CSSProperties} className="card flex flex-col p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={c.icon} className="size-5" /></span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">Pick {shortName(c)} if…</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-700">
                  {c.gains.slice(0, 3).map((g) => <li key={g} className="flex gap-2"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-600" />{g}</li>)}
                </ul>
                <Link href={`/courses/${c.slug}`} className="btn-brand mt-6 self-start">Explore {shortName(c)} <ArrowRight className="size-4" aria-hidden /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GuidanceCta
        title="Still deciding between the two?"
        text="A counsellor can map either course to your degree, schedule and career goal — one call is usually enough."
        button="Book a Free Demo"
      />
    </>
  );
}
