import { ArrowDown, ArrowRight, Award, BadgeCheck } from "lucide-react";
import { site } from "@/data/site";
import { a12Common, type A12Page } from "@/data/after-12th";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "@/components/course/CourseSection";
import { TrCarousel } from "@/components/training/TrCarousel";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Certification — four things you leave with + a CSS certificate mock-up that swings in from the side. */
export function A12Certification({ page }: { page: A12Page }) {
  const { tier, subject } = page;
  return (
    <CourseSection id="certification" overflow="overflow-x-clip" className="defer-render bg-soft" decor={<SoftBlobs flip />}>
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="a12-tilt-l">
          {/* Decorative mock-up — the real facts are in the list beside it. */}
          <div aria-hidden className="su-card relative mx-auto max-w-md rotate-[-2deg] p-3">
            <div className="rounded-[1.35rem] border-2 border-dashed border-brand-200 bg-white p-7 text-center">
              <span className="su-icon mx-auto size-14 !rounded-full"><Award className="size-7" /></span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">{site.name} · {tier.credential}</p>
              <p className="mt-3 font-display text-2xl font-extrabold text-ink-900">{subject.name}</p>
              <p className="mt-1 text-sm text-ink-700">{tier.months}-month {tier.suffix.toLowerCase()}</p>
              <div className="su-inset mx-auto mt-6 h-2 w-3/4 !rounded-full" />
              <div className="su-inset mx-auto mt-2.5 h-2 w-1/2 !rounded-full" />
              <div className="mt-7 flex items-end justify-between text-left text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                <span>Verified online</span>
                <span className="grid size-12 place-items-center rounded-full bg-linear-to-br from-accent-400 to-accent-500 text-ink-950 shadow-[var(--su-accent)]"><BadgeCheck className="size-6" /></span>
              </div>
            </div>
            <p className="su-chip tr-float absolute -bottom-4 -left-4 !px-4 !py-2 !text-sm">{tier.months} reviewed projects</p>
          </div>
        </div>

        <div>
          <SectionHeading id="certification-title" align="left" eyebrow="Certification" title={<>Get certified in <span className="text-gradient">{subject.name}</span></>} text={`You finish the ${page.label.toLowerCase()} with proof of what you built — not only a piece of paper.`} />
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {a12Common.credentials.map((c, i) => (
              <li key={c.title} data-reveal="up" style={delay(i)}>
                <div className="su-card h-full !rounded-3xl p-5">
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

/**
 * Future scope — neumorphic "career track": four numbered discs sit on a pressed groove that fills as the row scrolls
 * in; a role card rises from the surface under each disc. No salary figures.
 */
export function A12Scope({ page }: { page: A12Page }) {
  const { subject } = page;
  return (
    <CourseSection id="scope" overflow="overflow-x-clip" className="bg-neu">
      <SectionHeading id="scope-title" eyebrow="Future scope" title={<>Where this course <span className="text-brand-700">takes you</span></>} text={`Four roles ${subject.short} learners grow into — each one builds on the last.`} />

      <ol className="tr-rail relative mt-16 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Pressed groove behind the number discs; fills left → right as the row scrolls in (lg+ only). */}
        <li aria-hidden className="neu-inset absolute left-[12.5%] right-[12.5%] top-8 hidden h-3 !rounded-full p-[3px] lg:block">
          <div className="tr-rail-x size-full rounded-full bg-accent-500" />
        </li>
        {subject.roles.map((r, i) => (
          <li key={r.title} className="relative">
            <span aria-hidden className="neu relative z-10 mx-auto grid size-[4.5rem] place-items-center !rounded-full">
              <span className="neu-inset grid size-12 place-items-center !rounded-full font-display text-base font-extrabold text-brand-700">{num(i)}</span>
            </span>
            <div className="extrude mt-6 h-[calc(100%-6rem)]">
              <article className="neu neu-hover group flex h-full flex-col p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Role {i + 1} of {subject.roles.length}</p>
                <h3 className="mt-3 text-xl font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-700">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{r.text}</p>
                <span aria-hidden className="neu-inset mt-6 block h-3 !rounded-full p-[3px]">
                  <span className="block h-full rounded-full bg-accent-500 transition-[width] duration-700 ease-out" style={{ width: `${((i + 1) / subject.roles.length) * 100}%` }} />
                </span>
              </article>
            </div>
          </li>
        ))}
      </ol>

      <p data-reveal="up" className="mt-12 text-center">
        <a href="#enquire" className="btn-neu">
          <Icon name={subject.icon} className="size-4 text-brand-600" /> Ask a counsellor about {subject.short} careers <ArrowRight className="size-4" aria-hidden />
        </a>
      </p>
    </CourseSection>
  );
}

/** Portfolio projects — neumorphic snap carousel, one card per month; the centre card is in focus. */
export function A12Projects({ page }: { page: A12Page }) {
  return (
    <CourseSection id="projects" overflow="overflow-x-clip" className="bg-neu">
      <SectionHeading id="projects-title" align="left" eyebrow="Portfolio projects" title={<>{page.months.length} hands-on projects <span className="text-brand-700">you will ship</span></>} />
      <div className="mt-4">
        <TrCarousel label="Portfolio projects" itemName="project">
          {page.months.map((m, i) => (
            <li key={m.project.title} className="w-[86%] shrink-0 snap-start sm:w-[23rem]">
              <article className="snap-focus neu flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="neu-inset px-4 py-2 font-display text-sm font-extrabold text-brand-700">Project {num(i)}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Month {i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-900">{m.project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{m.project.text}</p>
                <ul aria-label="Tools" className="mt-6 flex flex-wrap gap-2">
                  {m.tools.map((t) => <li key={t} className="rounded-full bg-neu px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-neu-sm">{t}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </TrCarousel>
      </div>
    </CourseSection>
  );
}

/** Working loop — three steps joined by a rail that draws itself as the block scrolls in. */
export function A12Loop() {
  return (
    <CourseSection id="loop" className="bg-soft" decor={<SoftBlobs />}>
      <SectionHeading id="loop-title" eyebrow="The working loop" title={<>Learn it. Build it. <span className="text-gradient">Make it yours.</span></>} text="Every topic in every month runs through the same three steps." />
      <ol className="tr-rail relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <li aria-hidden className="absolute left-[16.6%] right-[16.6%] top-10 hidden h-1 rounded-full bg-[#dbe2f0] lg:block">
          <div className="tr-rail-x size-full rounded-full bg-accent-500" />
        </li>
        {a12Common.loop.map((s, i) => (
          <li key={s.title} data-reveal="up" style={delay(i, 140)} className="relative text-center">
            <span className="su-card relative mx-auto grid size-20 place-items-center !rounded-full">
              <span className="su-icon size-12 !rounded-full"><Icon name={s.icon} className="size-6" /></span>
            </span>
            {i < a12Common.loop.length - 1 && <ArrowDown aria-hidden className="mx-auto mt-4 size-5 text-brand-600 lg:hidden" />}
            <div className="su-card mt-6 p-6 lg:mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Step {i + 1}</p>
              <h3 className="mt-1.5 text-xl font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </CourseSection>
  );
}

/** Why techcadd — neumorphic bento: one tall intro tile + four reason tiles. */
export function A12Why() {
  return (
    <CourseSection id="why" overflow="overflow-x-clip" className="defer-render bg-neu">
      <div className="grid gap-7 lg:grid-cols-3">
        <div className="extrude">
          <div className="neu flex h-full flex-col justify-between p-8">
            <div>
              <span className="eyebrow">Why {site.name}</span>
              <h2 id="why-title" className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl">Why students choose <span className="text-brand-700">techcadd</span></h2>
              <p className="mt-4 leading-relaxed text-ink-700">A first course after 12th should leave you with skills you can show, not notes you can&apos;t use.</p>
            </div>
            <a href="#enquire" className="btn-neu-primary mt-8 self-start">Book a free demo <ArrowRight className="size-4" aria-hidden /></a>
          </div>
        </div>
        <ul className="grid gap-7 sm:grid-cols-2 lg:col-span-2">
          {a12Common.why.map((w) => (
            <li key={w.title} className="extrude">
              <div className="neu neu-hover group flex h-full gap-5 p-6">
                <span className="neu-icon size-14 transition-colors duration-300 group-hover:text-accent-600"><Icon name={w.icon} className="size-6" /></span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{w.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CourseSection>
  );
}
