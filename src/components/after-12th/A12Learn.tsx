import type { CSSProperties } from "react";
import { ArrowRight, Check, CheckCircle2, FileText, Hammer, MessageCircle, Phone, X } from "lucide-react";
import { site } from "@/data/site";
import { a12Common, a12Fill, type A12Page } from "@/data/after-12th";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs, monogram } from "@/components/course/CourseSection";
import { MonthExplorer } from "./MonthExplorer";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Course overview — Soft UI: copy on the left, a pressed "month ladder" well on the right. */
export function A12Overview({ page }: { page: A12Page }) {
  const { subject, tier, months } = page;
  return (
    <CourseSection id="overview" className="bg-soft" decor={<SoftBlobs />}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading id="overview-title" align="left" eyebrow="Course overview" title={<>{tier.months} months of {subject.short}, <span className="text-gradient">built project by project</span></>} />
          <p data-reveal="up" className="mt-6 leading-relaxed text-ink-700">{subject.overview}</p>
          <p data-reveal="up" style={delay(1)} className="mt-4 leading-relaxed text-ink-700">{a12Fill(tier.overview, subject)}</p>
          <dl data-reveal="up" style={delay(2)} className="mt-8 grid grid-cols-3 gap-3">
            {a12Common.stats.map((s) => (
              <div key={s.label} className="su-card flex flex-col-reverse !rounded-2xl p-4 text-center">
                <dt className="mt-1 text-xs font-medium text-ink-500">{s.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ink-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="a12-tilt-r">
          <div className="su-card p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Your {tier.months} months at a glance</p>
            <ol className="su-inset mt-4 space-y-2.5 p-3 sm:p-4">
              {months.map((m, i) => (
                <li key={m.title} className="flex items-center gap-3 rounded-2xl border border-white/90 bg-linear-to-br from-white to-[#f3f6fc] p-3 shadow-[var(--su-raise-sm)]" style={{ marginLeft: `${Math.min(i, 5) * 0.5}rem` }}>
                  <span aria-hidden className="su-icon size-9 !rounded-xl text-xs font-extrabold">M{i + 1}</span>
                  <span className="min-w-0 truncate text-sm font-semibold text-ink-900"><span className="sr-only">Month {i + 1}: </span>{m.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </CourseSection>
  );
}

/** What you'll learn — neumorphic cards that rise from the surface; headline skills of the last (up to) four months. */
export function A12Skills({ page }: { page: A12Page }) {
  const start = Math.max(page.months.length - 4, 0);
  const skills = page.months.slice(start);
  return (
    <CourseSection id="learn" overflow="overflow-x-clip" className="bg-neu">
      <SectionHeading id="learn-title" eyebrow="What you'll learn" title={<>Skills you will <span className="text-brand-700">actually use</span></>} text={`By the end of the ${page.label.toLowerCase()} you can do each of these on your own.`} />
      <ul className={`mt-14 grid gap-7 sm:grid-cols-2 ${skills.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {skills.map((m, i) => (
          <li key={m.skill.title} className="extrude">
            <div className="neu neu-hover group relative h-full overflow-hidden p-7">
              <span aria-hidden className="absolute -right-2 -top-6 font-display text-[7rem] font-extrabold leading-none text-white/70 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">{i + 1}</span>
              <span className="neu-inset relative grid size-14 place-items-center text-sm font-extrabold text-brand-700">M{start + i + 1}</span>
              <h3 className="relative mt-6 text-lg font-bold text-ink-900">{m.skill.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-700">{m.skill.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Curriculum — zig-zag month timeline; the centre line fills and the dots light up as you scroll. */
export function A12Curriculum({ page }: { page: A12Page }) {
  return (
    <CourseSection id="curriculum" overflow="overflow-x-clip" className="bg-soft" decor={<SoftBlobs flip />}>
      <SectionHeading id="curriculum-title" eyebrow="Course curriculum" title={<>One module, one project, <span className="text-gradient">every month</span></>} />
      <ol className="timeline relative mt-16 space-y-8 lg:space-y-4">
        <li aria-hidden className="absolute bottom-4 left-5 top-4 w-1 rounded-full bg-[#dbe2f0] lg:left-1/2 lg:-ml-0.5">
          <div className="timeline-fill size-full rounded-full bg-linear-to-b from-brand-500 to-accent-400" />
        </li>
        {page.months.map((m, i) => (
          <li key={m.title} className="relative grid pl-14 lg:grid-cols-2 lg:gap-16 lg:pl-0">
            <span aria-hidden className="timeline-dot absolute left-0 top-6 grid size-11 place-items-center rounded-full bg-neu text-sm font-extrabold text-brand-700 shadow-[var(--su-raise-sm)] ring-4 ring-soft lg:left-1/2 lg:-ml-[1.375rem]">{i + 1}</span>
            <div className={i % 2 ? "tr-right lg:col-start-2" : "tr-left"}>
              <article className="su-card su-hover p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Month {num(i)}</p>
                <h3 className="mt-1.5 text-xl font-bold text-ink-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{m.summary}</p>
                <ul aria-label="Tools" className="mt-4 flex flex-wrap gap-2">
                  {m.tools.map((t) => <li key={t} className="su-chip">{t}</li>)}
                </ul>
                <p className="su-inset mt-5 flex items-start gap-2.5 !rounded-2xl p-3.5 text-sm text-ink-900">
                  <Hammer className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
                  <span><strong>Project:</strong> {m.project.title}</span>
                </p>
              </article>
            </div>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** Inside each month — interactive neumorphic explorer (topics, tools, project). */
export function A12Modules({ page }: { page: A12Page }) {
  return (
    <CourseSection id="modules" overflow="overflow-x-clip" className="bg-neu">
      <SectionHeading id="modules-title" eyebrow="Inside each month" title={<>Open a month, <span className="text-brand-700">see every topic</span></>} text="Pick a month to see exactly what is taught, which tools you use and what you ship." />
      <MonthExplorer months={page.months} />
      <p className="mt-8 text-center">
        <a href={waLink(`Hi TechCADD, please send the detailed syllabus of the ${page.title}.`)} target="_blank" rel="noopener noreferrer" className="btn-neu">
          <FileText className="size-4" aria-hidden /> Get the detailed syllabus on WhatsApp
        </a>
      </p>
    </CourseSection>
  );
}

/** Toolchain — dark section; every tool used across the program as a monogram tile. */
export function A12Tools({ page }: { page: A12Page }) {
  const tools = [...new Set(page.months.flatMap((m) => m.tools))];
  return (
    <CourseSection id="tools" className="on-dark bg-ink-950">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading id="tools-title" dark align="left" eyebrow="The toolchain" title={<>Tools you will <span className="text-gradient">actually work in</span></>} text={`${tools.length} tools across ${page.tier.months} months — introduced only when a project needs them.`} />
          <p data-reveal="up" className="mt-6 flex items-start gap-3 text-sm text-ink-300">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden />
            Everything is installed in our labs. On your own laptop, a mentor helps you set it up in the first week.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {tools.map((t, i) => (
            <li key={t} data-reveal="zoom" style={delay(i % 8, 50)}>
              <div className="su-dark flex h-full items-center gap-3 !rounded-2xl p-3.5">
                <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-sm font-extrabold text-brand-200">{monogram(t)}</span>
                <span className="min-w-0 text-sm font-semibold leading-tight text-white [overflow-wrap:anywhere]">{t}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CourseSection>
  );
}

/** Eligibility — four audience cards + a pressed checklist of requirements. */
export function A12Eligibility({ page }: { page: A12Page }) {
  return (
    <CourseSection id="eligibility" className="bg-soft" decor={<SoftBlobs />}>
      <SectionHeading id="eligibility-title" eyebrow="Eligibility" title={<>Who can do <span className="text-gradient">this course</span></>} />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {a12Common.audience.map((a, i) => (
          <li key={a.title} data-reveal="flip" style={delay(i, 110)}>
            <div className="su-card su-hover group h-full p-7">
              <div className="flex items-center justify-between">
                <span className="su-icon size-12 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon name={a.icon} className="size-6" /></span>
                <span aria-hidden className="font-display text-3xl font-extrabold text-ink-300">{num(i)}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{a12Fill(a.text, page.subject)}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul data-reveal="up" aria-label="Requirements" className="su-inset mx-auto mt-10 grid max-w-4xl gap-x-6 gap-y-3 p-5 sm:grid-cols-2 sm:p-6">
        {a12Common.requirements.map((r) => (
          <li key={r} className="flex items-center gap-2.5 text-sm font-semibold text-ink-900">
            <CheckCircle2 className="size-4 shrink-0 text-brand-600" aria-hidden /> {r}
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Why now — scroll-filled statement, then "where most stop → where you get to" rows (pressed vs raised). */
export function A12WhyNow({ page }: { page: A12Page }) {
  const { subject } = page;
  return (
    <CourseSection id="why-now" overflow="overflow-x-clip" className="bg-neu">
      <span data-reveal="up" className="eyebrow">Why now</span>
      <h2 id="why-now-title" className="tr-fill mt-6 max-w-5xl text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl" style={{ "--tr-off": "#b9c2d4" } as CSSProperties}>
        {subject.statement}
      </h2>
      <div className="mt-14 hidden grid-cols-[1fr_3rem_1fr] gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 sm:grid" aria-hidden>
        <span>Where most learners stop</span><span /><span>Where this program takes you</span>
      </div>
      <ul className="mt-4 space-y-4">
        {subject.contrast.map((c) => (
          <li key={c.pro} className="extrude grid items-stretch gap-3 sm:grid-cols-[1fr_3rem_1fr] sm:gap-4">
            <p className="neu-inset flex items-center gap-3 p-4 text-sm font-medium text-ink-700 sm:p-5 sm:text-base">
              <X className="size-4 shrink-0 text-ink-500" aria-hidden /><span className="sr-only">Most learners stop at: </span>{c.basic}
            </p>
            <span aria-hidden className="hidden place-items-center sm:grid"><ArrowRight className="size-5 text-brand-600" /></span>
            <p className="neu flex items-center gap-3 !rounded-2xl p-4 text-sm font-bold text-ink-900 sm:p-5 sm:text-base">
              <span aria-hidden className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-600 text-white"><Check className="size-4" /></span>
              <span className="sr-only">You get to: </span>{c.pro}
            </p>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Course advisor CTA — brand slab that opens like a curtain on scroll. */
export function A12Advisor({ page }: { page: A12Page }) {
  return (
    <section aria-labelledby="advisor-title" className="overflow-x-clip bg-neu pb-20 md:pb-28">
      <div className="container-x">
        <div className="a12-wipe">
          <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-600 via-brand-700 to-ink-900 p-8 text-white shadow-neu-brand sm:p-12">
            <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
            <div aria-hidden className="tr-float absolute -right-16 -top-20 -z-10 size-72 rounded-full bg-accent-400/25 blur-3xl" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 id="advisor-title" className="text-3xl font-extrabold leading-tight text-balance sm:text-4xl">Talk to a course advisor</h2>
                <p className="mt-3 max-w-xl text-lg text-brand-100">Ten minutes on a call is enough to know whether {page.tier.months} months of {page.subject.short} fits your stream, your college plans and your goal.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={site.phoneHref} className="su-btn-accent tr-shine !px-7 !py-3.5 text-base"><Phone className="size-5" aria-hidden /> Call {site.phone}</a>
                <a href={waLink(`Hi TechCADD, I'd like to talk to a course advisor about the ${page.title}.`)} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark !px-7 !py-3.5 text-base">
                  <MessageCircle className="size-5" aria-hidden /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
