import type { CSSProperties } from "react";
import { Award, Check, Plus, ShieldCheck, X } from "lucide-react";
import { site } from "@/data/site";
import { trainingCommon, type TrainingPage } from "@/data/training";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "@/components/course/CourseSection";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Certification — certificates rest in a pressed tray (raised paper on top) + four raised credential cards. */
export function TrCertification({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="certification" className="bg-soft" decor={<SoftBlobs flip />}>
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="tr-left order-2 lg:order-1">
          <ul aria-label="Certificates you receive" className="su-inset relative grid gap-6 !rounded-[2rem] p-5 sm:block sm:h-[40rem] sm:p-0">
            {trainingCommon.certificates.map((c, i) => (
              <li key={c.title} className={`transition-all duration-500 hover:z-20 sm:absolute sm:w-[80%] ${i ? "sm:bottom-6 sm:right-6 sm:rotate-2 sm:hover:rotate-0" : "z-10 sm:left-6 sm:top-6 sm:-rotate-2 sm:hover:rotate-0"}`}>
                <article className="su-card relative overflow-hidden p-6 transition-transform duration-500 hover:scale-[1.03]">
                  <div aria-hidden className="absolute inset-2 rounded-[1.4rem] border border-dashed border-brand-200" />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="font-sans text-2xl font-extrabold tracking-[-0.04em] text-brand-900">techcadd<sup className="text-[10px] font-medium">™</sup></span>
                    <span className="grid size-14 place-items-center rounded-full bg-linear-to-br from-accent-400 to-accent-500 text-ink-950 shadow-[var(--su-accent)]"><Award className="size-7" aria-hidden /></span>
                  </div>
                  <p className="relative mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700">{c.tag}</p>
                  <h3 className="relative mt-1 font-display text-2xl font-extrabold text-ink-900">{c.title}</h3>
                  <p className="relative text-sm text-ink-500">{course.title}</p>
                  <p className="relative mt-4 text-sm leading-relaxed text-ink-700">{c.text}</p>
                  <p aria-hidden className="su-inset relative mt-5 flex items-center justify-between !rounded-xl px-3 py-2 text-[11px] text-ink-700">
                    <span>No. TC-{course.slug.slice(0, 3).toUpperCase()}-0{i + 1}XXX</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="size-3.5 text-emerald-700" /> Online verifiable</span>
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading id="certification-title" align="left" eyebrow="Certification" title={<>Proof you can <span className="text-gradient">put on the table</span></>} text={`Every certificate has a unique number that anyone can verify on ${site.url.replace("https://", "")}.`} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {trainingCommon.credentials.map((c, i) => (
              <li key={c.title} data-reveal="up" style={delay(i)}>
                <div className="su-card su-hover h-full !rounded-3xl p-5">
                  <span className="su-icon-light size-11"><Icon name={c.icon} className="size-5" /></span>
                  <h3 className="mt-4 font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CourseSection>
  );
}

/** Future scope — career questions as raised accordion cards; the open one shows its answer in a pressed well. */
export function TrScope({ course }: { course: TrainingPage }) {
  return (
    <CourseSection id="scope" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-48 lg:self-start">
          <SectionHeading id="scope-title" align="left" eyebrow="Future scope" title={<>Where {course.navLabel} <span className="text-gradient">can take you</span></>} text="Straight answers to the career questions students ask us most." />
        </div>
        <div className="space-y-5">
          {course.outcomes.map((o, i) => (
            <div key={o.q} data-reveal="up" style={delay(i, 70)}>
              <details className="accordion su-card group overflow-hidden !rounded-3xl" open={i === 0}>
                <summary className="flex cursor-pointer items-center gap-4 p-5 text-left sm:p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white font-display text-sm font-extrabold text-brand-700 shadow-[var(--su-raise-sm)] transition-all duration-300 group-open:bg-linear-to-br group-open:from-brand-500 group-open:to-brand-700 group-open:text-white group-open:shadow-[var(--su-brand)]">
                    {num(i)}
                  </span>
                  <span className="flex-1 font-bold text-ink-900 transition-colors group-hover:text-brand-700 sm:text-lg">{o.q}</span>
                  <Plus className="faq-icon size-5 shrink-0 text-brand-600 transition-transform duration-300" aria-hidden />
                </summary>
                <p className="su-inset mx-4 mb-4 p-4 leading-relaxed text-ink-700 sm:mx-5 sm:mb-5 sm:p-5">{o.a}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </CourseSection>
  );
}

/** Portfolio projects — sticky stacked soft cards; each sinks back as the next slides over it. */
export function TrProjects({ course }: { course: TrainingPage }) {
  const n = course.projects.length;
  return (
    <CourseSection id="projects" overflow="overflow-x-clip" className="bg-soft" decor={<SoftBlobs />}>
      <SectionHeading id="projects-title" eyebrow="Portfolio projects" title={<>Four builds, <span className="text-gradient">one portfolio</span></>} text="Each project is reviewed by a trainer and published to your portfolio before you move on." />
      <ol className="tr-stack mx-auto mt-14 max-w-4xl space-y-8">
        {course.projects.map((p, i) => (
          <li key={p.title} className="sticky" style={{ top: `calc(11.5rem + ${i * 1.25}rem)` }}>
            <article
              className={`${i < n - 1 ? "tr-sink" : ""} su-card grid gap-6 p-7 sm:grid-cols-[auto_1fr] sm:p-9`}
              style={{ "--s": `${(i / n) * 100}%`, "--e": `${((i + 1) / n) * 100}%` } as CSSProperties}
            >
              <span aria-hidden className="su-inset grid size-20 place-items-center !rounded-3xl">
                <span className="su-icon size-14 font-display text-xl font-extrabold">{num(i)}</span>
              </span>
              <div>
                <span className="su-chip-brand">{p.stage}</span>
                <h3 className="mt-3 text-2xl font-extrabold text-ink-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{p.text}</p>
                <ul aria-label="Skills used" className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => <li key={t} className="su-chip">{t}</li>)}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** The working loop — three raised discs on a pressed rail that fills on scroll. */
export function TrLoop() {
  return (
    <CourseSection id="loop" className="bg-white">
      <SectionHeading id="loop-title" eyebrow="How every class runs" title={<>The <span className="text-gradient">working loop</span></>} text="Repeated for every module, so the job feels familiar before you get it." />
      <ol className="tr-rail relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        <span aria-hidden className="su-inset absolute left-[16.6%] right-[16.6%] top-9 hidden h-3 !rounded-full md:block" />
        <span aria-hidden className="tr-rail-x absolute left-[16.6%] right-[16.6%] top-10 hidden h-1 rounded-full bg-accent-500 md:block" />
        {trainingCommon.loop.map((s, i) => (
          <li key={s.title} data-reveal="zoom" style={delay(i, 160)} className="relative text-center">
            <span className="su-card relative mx-auto grid size-20 place-items-center !rounded-full">
              <span className="su-icon size-14 !rounded-full"><Icon name={s.icon} className="size-6" /></span>
              <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-linear-to-br from-accent-400 to-accent-500 text-xs font-extrabold text-ink-950 shadow-[var(--su-accent)]">{i + 1}</span>
            </span>
            <h3 className="mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-ink-700">{s.text}</p>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** Why TechCADD — dark bento of soft dark cards (first tile large, brand gradient). */
export function TrWhy() {
  return (
    <CourseSection id="why" className="on-dark bg-ink-950 text-white" decor={<><div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" /><div aria-hidden className="absolute -right-40 top-0 -z-10 size-[30rem] rounded-full bg-brand-600/25 blur-[120px]" /></>}>
      <SectionHeading id="why-title" dark eyebrow="Why TechCADD" title={<>Why students pick <span className="text-gradient">{site.name}</span></>} />
      <ul className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trainingCommon.why.map((w, i) => (
          <li key={w.title} className={`tr-rise ${i === 0 ? "sm:col-span-2 lg:row-span-2" : ""} ${i === 3 ? "lg:col-span-2" : ""}`}>
            {i === 0 ? (
              <div className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[1.75rem] bg-linear-to-br from-brand-500 to-brand-800 p-8 shadow-[var(--su-brand)]">
                <span aria-hidden className="absolute -right-8 -top-8 text-white/10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"><Icon name={w.icon} className="size-48" /></span>
                <span className="relative grid size-14 place-items-center rounded-2xl bg-white/15 shadow-[inset_0_1px_0_rgb(255_255_255/0.3)]"><Icon name={w.icon} className="size-7" /></span>
                <h3 className="relative mt-6 text-2xl font-extrabold">{w.title}</h3>
                <p className="relative mt-2 max-w-sm text-brand-100">{w.text}</p>
              </div>
            ) : (
              <div className="su-dark group h-full p-6">
                <span className="su-icon size-11 transition-transform duration-300 group-hover:scale-110"><Icon name={w.icon} className="size-5" /></span>
                <h3 className="mt-5 font-bold">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{w.text}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Comparison — raised table card; TechCADD column is a pressed brand well. Scrolls sideways on small screens. */
export function TrCompare() {
  return (
    <CourseSection id="compare" className="bg-soft">
      <SectionHeading id="compare-title" eyebrow="Compare" title={<>TechCADD vs <span className="text-gradient">other institutes</span></>} text="What changes when training is built around live work." />
      <div className="tr-unfold mx-auto mt-14 max-w-5xl">
        <div tabIndex={0} role="region" aria-label="Comparison table (scrolls sideways on small screens)" className="su-card overflow-x-auto p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 sm:p-3">
          <table className="w-full min-w-[40rem] border-separate border-spacing-y-1.5 text-left text-sm">
            <caption className="sr-only">Training at TechCADD compared with other institutes</caption>
            <thead>
              <tr>
                <th scope="col" className="p-4 font-semibold text-ink-500">What matters</th>
                <th scope="col" className="rounded-t-2xl bg-linear-to-br from-brand-500 to-brand-700 p-4 font-bold text-white">{site.name}</th>
                <th scope="col" className="p-4 font-semibold text-ink-500">Typical institute</th>
              </tr>
            </thead>
            <tbody>
              {trainingCommon.comparison.map((r) => (
                <tr key={r.feature} className="group">
                  <th scope="row" className="rounded-l-2xl p-4 font-semibold text-ink-900 transition-colors group-hover:bg-[#f1f4fb]">{r.feature}</th>
                  <td className="bg-[#e9eef8] p-4 font-medium text-ink-900 shadow-[inset_0_2px_4px_rgb(10_19_48/0.06)]">
                    <span className="flex items-start gap-2"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white"><Check className="size-3" aria-hidden /></span>{r.us}</span>
                  </td>
                  <td className="rounded-r-2xl p-4 text-ink-700 transition-colors group-hover:bg-[#f1f4fb]">
                    <span className="flex items-start gap-2"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-white text-ink-500 shadow-[var(--su-raise-sm)]"><X className="size-3" aria-hidden /></span>{r.them}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CourseSection>
  );
}
