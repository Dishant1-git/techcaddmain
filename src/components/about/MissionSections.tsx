import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { missionVision as mv } from "@/data/about";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { CourseSection } from "@/components/course/CourseSection";

/* Mission & Vision page sections, in page order (the final CTA is about/AboutCta). Site theme. */

const num = (i: number) => String(i + 1).padStart(2, "0");

const darkDecor = (
  <>
    <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
    <div aria-hidden className="absolute -right-40 top-0 -z-10 size-[30rem] rounded-full bg-brand-600/25 blur-[120px]" />
  </>
);

const jumps = [
  { label: "Our Mission", href: "#mission" },
  { label: "Our Vision", href: "#vision" },
  { label: "Our Future", href: "#future" },
];

/** Hero — dark, centred statement + in-page jump links. No data-reveal on the H1 (LCP). */
export function MvHero() {
  return (
    <section id="mv-hero" aria-labelledby="mv-hero-title" className="on-dark relative isolate overflow-hidden bg-ink-950 pb-20 pt-10 text-white md:pb-28 md:pt-14">
      {darkDecor}
      <div aria-hidden className="absolute -left-40 bottom-0 -z-10 size-[26rem] rounded-full bg-accent-500/15 blur-[120px]" />
      <div className="container-x">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About techcadd", href: "/about" }, { label: "Mission and Vision" }]} />
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <span className="eyebrow eyebrow-dark">{mv.hero.eyebrow}</span>
          <h1 id="mv-hero-title" className="mt-6 text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            {mv.hero.lead} <span className="text-gradient">{mv.hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{mv.hero.text}</p>
          <nav aria-label="On this page" className="mt-10">
            <ul className="flex flex-wrap justify-center gap-3">
              {jumps.map((j) => (
                <li key={j.href}>
                  <Link href={j.href} className="btn-ghost-dark">{j.label} <ArrowDown className="size-4" aria-hidden /></Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

/** Our Mission — sticky heading + source note on the left, five numbered pillars on the right. */
export function MvMission() {
  return (
    <CourseSection id="mission" overflow="overflow-x-clip" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="mission-title" align="left" eyebrow="Our Mission" title={<>Bridging Education <span className="text-gradient">with Industry</span></>} text={mv.mission.text} />
          <p data-reveal="up" style={delay(3)} className="mt-8 border-l-2 border-brand-200 pl-4 text-sm leading-relaxed text-ink-500">{mv.mission.note}</p>
        </div>
        <ol className="space-y-5">
          {mv.mission.pillars.map((p, i) => (
            <li key={p.title} className="tr-right">
              <div className="card card-hover group relative flex items-start gap-5 overflow-hidden p-6 sm:p-7">
                <span aria-hidden className="absolute -right-1 -top-4 font-display text-7xl font-extrabold text-brand-50 transition-colors duration-300 group-hover:text-brand-100">{num(i)}</span>
                <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25"><Icon name={p.icon} className="size-6" /></span>
                <div className="relative">
                  <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-700">{p.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </CourseSection>
  );
}

/** Our Vision — "Future-ready by 2030" badge panel beside the five vision goals. */
export function MvVision() {
  return (
    <CourseSection id="vision" className="bg-brand-50/50">
      <SectionHeading id="vision-title" eyebrow="Our Vision" title={<>Building India&apos;s Future-Ready <span className="text-gradient">Technology Workforce</span></>} text={mv.vision.text} />
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="tr-left">
          <div className="relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-ink-900 p-8 text-white sm:p-10">
            <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
            <div aria-hidden className="absolute -bottom-24 -right-24 size-72 rounded-full border-[28px] border-white/10" />
            <div aria-hidden className="absolute -bottom-10 -right-10 size-44 rounded-full border-[18px] border-accent-400/40" />
            <span className="eyebrow eyebrow-dark relative self-start">{mv.vision.badge.label}</span>
            <p className="relative mt-10">
              <span className="block font-display text-4xl font-extrabold leading-none sm:text-5xl">{mv.vision.badge.value}</span>
              <span className="mt-2 block font-display text-2xl font-bold text-accent-400 sm:text-3xl">{mv.vision.badge.sub}</span>
            </p>
          </div>
        </div>
        <ul className="card grid content-center gap-1 p-4 sm:p-6">
          {mv.vision.goals.map((g, i) => (
            <li key={g} data-reveal="up" style={delay(i, 70)}>
              <span className="flex items-center gap-4 rounded-2xl p-4 font-semibold text-ink-900 transition-colors duration-300 hover:bg-brand-50">
                <CheckCircle2 className="size-6 shrink-0 text-brand-600" aria-hidden /> {g}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p data-reveal="up" className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-500">{mv.vision.note}</p>
    </CourseSection>
  );
}

/** Our Future — dark scroll-filled statement + the emerging fields we are moving into. */
export function MvFuture() {
  return (
    <CourseSection id="future" className="on-dark bg-ink-950 text-white" decor={darkDecor}>
      <div className="mx-auto max-w-5xl text-center">
        <span data-reveal="up" className="eyebrow eyebrow-dark">Our Future</span>
        <h2 id="future-title" className="tr-fill mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl" style={{ "--tr-on": "#fff", "--tr-off": "var(--color-ink-500)" } as CSSProperties}>
          {mv.future.statement}
        </h2>
        <p data-reveal="up" className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-ink-300">{mv.future.text}</p>
        <ul aria-label="Emerging fields" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {mv.future.fields.map((f, i) => (
            <li key={f.label} data-reveal="zoom" style={delay(i)}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-brand-400/50 hover:bg-white/10">
                <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand-600/25 text-brand-200 transition-transform duration-300 group-hover:scale-110"><Icon name={f.icon} className="size-6" /></span>
                <p className="mt-4 font-bold">{f.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CourseSection>
  );
}
