import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { a12Pages, a12Tiers } from "@/data/after-12th";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { A12Card } from "@/components/after-12th/A12Connect";

export const metadata: Metadata = {
  title: "After 12th Courses in Jalandhar — 3, 6 & 9-Month IT Programs",
  description: `${a12Pages.length} After 12th programs at TechCADD Jalandhar for students of any stream: Cloud, Flutter, MERN, Agentic AI, Digital Marketing, Data, Cyber Security, AI and Full Stack — 3, 6 and 9-month tracks with a project every month.`,
  alternates: { canonical: "/after-12th" },
};

/** One group per dropdown column; the 4-month Digital Marketing program sits with the 3-month starters. */
const groups = a12Tiers
  .filter((t) => t.months !== 4)
  .map((t) => ({ tier: t, pages: a12Pages.filter((p) => p.tier.months === t.months || (t.months === 3 && p.tier.months === 4)) }));

/** Hub for the After 12th dropdown ("Browse After 12th courses"): neumorphic, links to every /after-12th/<slug>. */
export default function After12thHubPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-neu pb-10 pt-10 md:pt-14">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-brand-300/30 blur-[120px]" />
        <div className="container-x">
          <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "After 12th" }]} />
          <h1 className="mt-10 max-w-4xl text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            After 12th courses <span className="text-brand-700">in Jalandhar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            Any stream, no coding background needed. Pick a subject, pick a duration, and ship one real project every month.
          </p>
          <ul aria-label="Durations" className="neu-inset mt-9 inline-flex flex-wrap gap-2 !rounded-[1.75rem] p-2 sm:!rounded-full">
            {groups.map((g) => (
              <li key={g.tier.months}>
                <a href={`#months-${g.tier.months}`} className="btn-neu !px-5 !py-2.5">{g.tier.months}-month {g.tier.suffix.toLowerCase()}s</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.tier.months} id={`months-${g.tier.months}`} aria-labelledby={`months-${g.tier.months}-title`} className="scroll-mt-8 overflow-x-clip bg-neu py-12 md:py-16">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">{g.tier.badge}</span>
                <h2 id={`months-${g.tier.months}-title`} className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">After 12th {g.tier.months}-Month {g.tier.suffix}</h2>
                <p className="mt-2 text-ink-700">{g.tier.text}</p>
              </div>
              <p className="neu-inset !rounded-full px-4 py-2 text-sm font-semibold text-ink-900">{g.pages.length} programs</p>
            </div>
            <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {g.pages.map((p) => (
                <li key={p.slug} className="extrude">
                  <A12Card page={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section aria-label="Counselling" className="bg-neu pb-20 text-center md:pb-28">
        <Link href="/#demo" className="btn-neu-primary tr-shine !px-7 !py-3.5 text-base">Get Free Career Counselling <ArrowRight className="size-4" aria-hidden /></Link>
      </section>
    </>
  );
}
