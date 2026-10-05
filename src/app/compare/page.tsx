import type { Metadata } from "next";
import Link from "next/link";
import { courseGroups } from "@/data/course-pages";
import { comparePairs, shortName } from "@/lib/compare";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const metadata: Metadata = {
  title: "Compare Courses — Side-by-Side Course Comparisons",
  description: "Compare techcadd courses side by side: duration, level, tools, projects and career paths for every pair — Python vs Java, MERN vs MEAN, Power BI vs Tableau and more.",
  alternates: { canonical: "/compare" },
};

export default function CompareHubPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Compare Courses</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Compare</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {comparePairs.length} course comparisons, <span className="text-gradient">one page</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Duration, level, tools, projects and careers, pulled from each course&apos;s own page — pick a pair below.
          </p>
        </div>
      </section>

      {courseGroups.map((g, gi) => {
        const pairs = comparePairs.filter((p) => p.a.group === g.id);
        if (!pairs.length) return null;
        return (
          <section key={g.id} className={`section ${gi % 2 ? "bg-brand-50/50" : "bg-white"}`}>
            <div className="container-x">
              <SectionHeading align="left" eyebrow={g.title} title={<>{g.title} <span className="text-gradient">comparisons</span></>} text={g.text} />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pairs.map((p) => (
                  <Link key={p.slug} href={`/compare/${p.slug}`} className="card card-hover group flex flex-col p-5">
                    <span className="flex items-center gap-2 text-brand-600"><Icon name={g.icon} className="size-4" /></span>
                    <span className="mt-2 font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                      {shortName(p.a)} <span className="text-ink-500">vs</span> {shortName(p.b)}
                    </span>
                    <span className="mt-2 text-xs text-ink-500">{p.a.duration} · {p.b.duration}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <GuidanceCta
        title="Not sure which course fits?"
        text="Talk to a counsellor — one call is usually enough to match a course to your degree, schedule and the job you want."
        button="Book a Free Demo"
      />
    </>
  );
}
