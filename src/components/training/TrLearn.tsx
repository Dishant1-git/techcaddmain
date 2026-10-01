import type { CSSProperties } from "react";
import { ArrowRight, Award, Check, Star, Users, Zap } from "lucide-react";
import { trainingCommon, type TrainingPage } from "@/data/training";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs, monogram } from "@/components/course/CourseSection";
import { TrackPicker } from "./TrackPicker";
import { PhaseTabs } from "./PhaseTabs";

/* Soft UI Evolution: raised `su-card`s and pressed `su-inset` wells on bg-soft / white, dark bands use `su-dark`.
   Motion: `data-reveal` (JS observer) for headings/small items, CSS scroll-driven `tr-*` for blocks — never both on
   one element; hover transforms (su-hover) live on an inner element. */

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Choose your track — soft segmented 3 / 6 / 9-month picker. */
export function TrTracks({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="tracks" className="bg-soft">
      <SectionHeading id="tracks-title" eyebrow="Choose your track" title={<>One program, <span className="text-gradient">three depths</span></>} text="Same trainers and live projects on every track. Pick the length that fits your semester or career plan — a counsellor shares fees and scholarships." />
      <div className="tr-rise">
        <TrackPicker tracks={trainingCommon.tracks} course={course.navLabel} />
      </div>
    </CourseSection>
  );
}

const statIcons = [Users, Star, Zap, Award];

/** Stats — one raised panel holding four pressed counter wells (sample figures). */
export function TrStats() {
  return (
    <section aria-label="TechCADD in numbers" className="overflow-x-clip bg-soft pb-20 md:pb-28">
      <div className="container-x">
        <div className="tr-unfold">
          <dl className="su-card grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4 lg:grid-cols-4">
            {trainingCommon.stats.map((s, i) => {
              const I = statIcons[i] ?? Award;
              return (
                <div key={s.label} className="su-inset group flex flex-col-reverse gap-1 p-5 sm:p-6">
                  <dt className="text-sm font-medium text-ink-700">{s.label}</dt>
                  <dd className="flex items-center gap-3 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                    <span className="su-icon size-10 transition-transform duration-300 group-hover:-rotate-6"><I className="size-5" aria-hidden /></span>
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Overview — story + raised skill chips; "What you get" as a raised card of pressed rows. */
export function TrOverview({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="overview" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading id="overview-title" align="left" eyebrow="Overview" title={<>Industry-ready, <span className="text-gradient">lab-first</span> training</>} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-700">
            {course.overview.map((p, i) => <p key={i} data-reveal="up" style={delay(i + 2)}>{p}</p>)}
          </div>
          <ul aria-label="Skills you'll learn" className="mt-9 flex flex-wrap gap-3">
            {course.concepts.map((c, i) => (
              <li key={c} data-reveal="zoom" style={delay(i, 45)} className="su-chip !px-4 !py-2 !text-sm">{c}</li>
            ))}
          </ul>
        </div>

        <div className="tr-right lg:sticky lg:top-48 lg:self-start">
          <div className="su-card p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold text-ink-900">What you get</h3>
            <p className="mt-1 text-sm text-ink-500">Included on every track.</p>
            <ul className="mt-6 space-y-3">
              {trainingCommon.whatYouGet.map((w) => (
                <li key={w} className="su-inset flex items-center gap-3 !rounded-2xl p-3.5 pr-4">
                  <span className="su-icon size-8 !rounded-full"><Check className="size-4" aria-hidden /></span>
                  <span className="text-sm font-semibold text-ink-900 sm:text-base">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-700">
              <strong className="text-ink-900">Who can join:</strong> {course.eligibility}
            </p>
          </div>
        </div>
      </div>
    </CourseSection>
  );
}

/** Syllabus — "What you will actually build": soft phase explorer. */
export function TrSyllabus({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="syllabus" className="bg-soft" decor={<SoftBlobs flip />}>
      <SectionHeading id="syllabus-title" eyebrow="Syllabus" title={<>What you will <span className="text-gradient">actually build</span></>} text={`${course.phases.length} phases, each ending in work you can show. Tap a phase or use the arrow keys to explore.`} />
      <div className="tr-rise">
        <PhaseTabs phases={course.phases} syllabusHref={waLink(`Hi TechCADD, please send me the detailed syllabus for ${course.title}.`)} />
      </div>
    </CourseSection>
  );
}

const onDark = { "--tr-on": "#fff", "--tr-off": "var(--color-ink-500)" } as CSSProperties;

/** Why now — dark band: statement fills with white on scroll, two soft marquees underneath. */
export function TrWhyNow({ course }: { course: TrainingPage }) {
  return (
    <section aria-labelledby="whynow-title" className="on-dark relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
      <div className="container-x max-w-5xl text-center">
        <span data-reveal="up" className="eyebrow eyebrow-dark">Why learn it now</span>
        <h2 id="whynow-title" className="sr-only">Why learn {course.navLabel} now</h2>
        <p className="tr-fill mt-8 font-display text-3xl font-extrabold leading-[1.2] text-balance sm:text-4xl lg:text-5xl" style={onDark}>{course.impact}</p>
        <div data-reveal="up" className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#scope" className="su-btn">See the career scope <ArrowRight className="size-4" aria-hidden /></a>
          <a href="#enquire" className="btn-ghost-dark">Talk to a counsellor</a>
        </div>
      </div>
      <div className="mt-16 space-y-4">
        <Marquee duration="50s">
          {course.concepts.map((c) => <span key={c} className="su-dark whitespace-nowrap !rounded-full px-5 py-2.5 text-sm font-semibold text-white/90">{c}</span>)}
        </Marquee>
        <Marquee duration="60s" reverse>
          {course.tools.map((t) => <span key={t.name} className="whitespace-nowrap rounded-full bg-linear-to-br from-brand-500 to-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--su-brand)]">{t.name}</span>)}
        </Marquee>
      </div>
    </section>
  );
}

/** Eligibility — six raised audience cards; the number sits in a pressed disc. */
export function TrEligibility({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="eligibility" className="bg-soft" decor={<SoftBlobs />}>
      <SectionHeading id="eligibility-title" eyebrow="Eligibility" title={<>Built for <span className="text-gradient">where you are now</span></>} text={course.eligibility} />
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {course.audience.map((a, i) => (
          <li key={a.title} className={i % 2 ? "tr-right" : "tr-left"}>
            <article className="su-card su-hover group h-full p-7">
              <div className="flex items-center justify-between">
                <span className="su-icon size-12 transition-transform duration-300 group-hover:-rotate-6"><Icon name={a.icon} className="size-6" /></span>
                <span aria-hidden className="su-inset grid size-11 place-items-center !rounded-full font-display text-sm font-extrabold text-ink-500">{num(i)}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{a.text}</p>
            </article>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** Toolchain — raised tool tiles; the monogram sits in a pressed well and pops out on hover. */
export function TrTools({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="tools" className="bg-white">
      <SectionHeading id="tools-title" eyebrow="Toolchain" title={<>Real tools, <span className="text-gradient">not slideware</span></>} text="You install, configure and ship with every one of these in the lab — the stack employers expect on day one." />
      <ul className="mt-14 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4">
        {course.tools.map((t, i) => (
          <li key={t.name} data-reveal="up" style={delay(i % 4, 80)}>
            <div className="su-card su-hover group flex h-full items-center gap-4 !rounded-3xl p-4 sm:p-5">
              <span aria-hidden className="su-inset grid size-14 shrink-0 place-items-center !rounded-2xl font-display text-sm font-extrabold text-brand-700 transition-all duration-300 group-hover:bg-white group-hover:shadow-[var(--su-raise-sm)]">
                {monogram(t.name)}
              </span>
              <div className="min-w-0">
                <h3 className="font-bold leading-tight break-words text-ink-900">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-500">{t.use}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}
