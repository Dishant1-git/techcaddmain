import Link from "next/link";
import { Check, FileDown, Plus, Sparkles } from "lucide-react";
import { courseCommon, type CoursePage } from "@/data/course-pages";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection } from "@/components/course/CourseSection";

/* Overview · Syllabus timeline · Learning loop. All neumorphic on bg-neu.
   Scroll motion: `.extrude` wrappers (CSS scroll-driven) + data-reveal on text. Never both on one element. */

export function CpOverview({ course }: { course: CoursePage }) {
  const copy = course.copy?.overview;
  // Courses with their own long-form copy show the overview full width (no "What you'll gain" card).
  const wide = !!copy;
  return (
    <CourseSection id="overview" className="bg-neu" overflow="overflow-x-clip">
      <div className={wide ? "mx-auto max-w-4xl" : "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"}>
        <div className="min-w-0">
          <SectionHeading
            id="overview-title"
            align="left"
            eyebrow={copy?.eyebrow ?? "Course Overview"}
            title={copy ? copy.title : <>What the <span className="text-gradient">{course.navLabel}</span> course covers</>}
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
            {course.overview.map((p, i) => <p key={i} data-reveal="blur" style={delay(i + 2)}>{p}</p>)}
          </div>

          {course.whyNow.length > 0 && (
            <div className="extrude mt-10">
              <div className="neu-inset p-6">
                <p className="flex items-center gap-2 font-display font-bold text-ink-900">
                  <Sparkles className="size-4 text-accent-600" aria-hidden /> Why learn it now
                </p>
                <ul className="mt-3 space-y-2.5">
                  {course.whyNow.map((w) => (
                    <li key={w} className="flex gap-2.5 text-ink-700">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /> {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {!wide && <div className="extrude h-fit">
          <aside aria-labelledby="gains-title" className="neu p-6 sm:p-8">
            <h3 id="gains-title" className="text-lg font-bold text-ink-900">What you&apos;ll gain</h3>
            <ul className="mt-6 space-y-4">
              {course.gains.map((g, i) => (
                <li key={g} data-reveal="left" style={delay(i, 80)} className="flex items-start gap-4">
                  <span aria-hidden className="neu-icon-brand size-9 !rounded-xl"><Check className="size-4" /></span>
                  <span className="pt-1.5 text-ink-900">{g}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink-700">
              Not sure it&apos;s the right fit? <Link href="#enrol" className="link">Talk to a counsellor for free</Link>.
            </p>
          </aside>
        </div>}
      </div>
    </CourseSection>
  );
}

/** Numbered module timeline. The rail fills and each dot lights up as you scroll (.timeline / .timeline-fill / .timeline-dot). */
export function CpSyllabus({ course }: { course: CoursePage }) {
  const copy = course.copy?.syllabus;
  const topics = course.syllabus.reduce((n, m) => n + m.topics.length, 0);
  const stats = [
    { label: "Modules", value: course.syllabus.length },
    { label: "Topics", value: topics },
    { label: "Projects", value: course.projects.length },
  ].filter((s) => s.value > 0);

  return (
    <CourseSection id="syllabus" className="bg-neu" overflow="overflow-x-clip">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-48 lg:h-fit">
          <SectionHeading
            id="syllabus-title"
            align="left"
            eyebrow={copy?.eyebrow ?? "Syllabus"}
            title={copy ? copy.title : <>Your <span className="text-gradient">module-by-module</span> roadmap</>}
            text={copy?.text ?? "Open any module to see exactly what you will learn. Every module ends with hands-on practice reviewed by your mentor."}
          />
          <dl data-reveal="up" style={{ ...delay(3), gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }} className={`mt-8 grid gap-3 text-center ${stats.length < 3 ? "max-w-[10rem]" : ""}`}>
            {stats.map((s) => (
              <div key={s.label} className="neu-inset flex flex-col-reverse p-4">
                <dt className="text-xs text-ink-700">{s.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ink-900">{s.value}</dd>
              </div>
            ))}
          </dl>
          <a
            data-reveal="up"
            style={delay(4)}
            href={waLink(`Hi TechCADD, please send me the full ${course.title} syllabus (PDF).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neu mt-8"
          >
            <FileDown className="size-4 text-brand-600" aria-hidden /> Get the Full Syllabus PDF<span className="sr-only"> on WhatsApp (opens in a new tab)</span>
          </a>
        </div>

        {course.syllabus.length > 0 ? (
          <ol className="timeline relative space-y-6">
            <span aria-hidden className="absolute bottom-6 left-[1.4rem] top-6 w-1.5 rounded-full bg-neu shadow-neu-inset-sm" />
            <span aria-hidden className="timeline-fill absolute bottom-6 left-[1.4rem] top-6 w-1.5 rounded-full bg-linear-to-b from-brand-400 to-brand-700" />
            {course.syllabus.map((m, i) => (
              <li key={m.title} className="extrude relative pl-16">
                <span aria-hidden className="timeline-dot absolute left-0 top-4 grid size-12 place-items-center rounded-full bg-neu font-display text-sm font-bold text-brand-700 shadow-neu-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <details className="accordion neu group open:shadow-neu-inset" open={i === 0}>
                  <summary className="flex cursor-pointer items-start gap-4 rounded-[1.75rem] p-5 text-left sm:p-6">
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Module {i + 1}</span>
                      <span className="mt-1 block font-display font-bold text-ink-900 transition-colors group-hover:text-brand-700 sm:text-lg">{m.title}</span>
                      {m.summary && <span className="mt-1 block text-sm text-ink-700">{m.summary}</span>}
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-neu text-brand-700 shadow-neu-sm transition-[rotate,box-shadow,background-color,color] duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white group-open:shadow-neu-brand">
                      <Plus className="size-4" aria-hidden />
                    </span>
                  </summary>
                  {m.topics.length > 0 && (
                    <ul className="grid gap-2.5 px-5 pb-6 sm:grid-cols-2 sm:px-6">
                      {m.topics.map((t) => (
                        <li key={t} className="flex gap-2.5 text-sm text-ink-700">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /> {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  {m.outcome && (
                    <p className="mx-5 mb-6 flex gap-2.5 rounded-2xl bg-neu p-4 text-sm text-ink-700 shadow-neu-inset-sm sm:mx-6">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                      <span><strong className="text-ink-900">Outcome:</strong> {m.outcome}</span>
                    </p>
                  )}
                </details>
              </li>
            ))}
            {copy?.note && <li className="relative pl-16 text-ink-700">{copy.note}</li>}
          </ol>
        ) : (
          <p className="neu p-8 text-center text-ink-700">
            The detailed syllabus is being updated. <Link href="#enrol" className="link">Ask a counsellor for the latest syllabus</Link>.
          </p>
        )}
      </div>
    </CourseSection>
  );
}

/** Understand → Build → Present. The connecting curve draws itself on scroll (.draw-path). */
export function CpMethod() {
  return (
    <CourseSection id="method" className="bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="method-title"
        eyebrow="How You Learn"
        title={<>One simple loop, <span className="text-gradient">every single week</span></>}
        text="Concepts become skills only when you use them. Each week follows the same three steps."
      />
      <div className="relative mt-16">
        <svg aria-hidden viewBox="0 0 900 100" preserveAspectRatio="none" className="absolute inset-x-[16%] top-8 hidden h-24 w-[68%] lg:block">
          <path
            className="draw-path"
            d="M0 50 C 150 -10, 300 110, 450 50 S 750 -10, 900 50"
            fill="none"
            stroke="var(--color-brand-400)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1"
            pathLength={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ol className="relative grid gap-10 lg:grid-cols-3">
          {courseCommon.loop.map((s, i) => (
            <li key={s.title} className="extrude">
              <div className="group text-center">
                <span className="neu-icon-brand relative mx-auto size-24 !rounded-full transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
                  <Icon name={s.icon} className="size-9" />
                  <span aria-hidden className="absolute -right-1 -top-1 grid size-8 place-items-center rounded-full bg-neu font-display text-sm font-bold text-brand-700 shadow-neu-sm">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink-900">
                  <span className="sr-only">Step {i + 1}: </span>{s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-700">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </CourseSection>
  );
}
