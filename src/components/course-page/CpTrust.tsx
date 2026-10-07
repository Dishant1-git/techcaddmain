import Link from "next/link";
import { ArrowRight, Award, Check, CheckCircle2, Clock, Minus, Phone, Plus, Quote, Star } from "lucide-react";
import { site, testimonials } from "@/data/site";
import { courseCommon, type CoursePage } from "@/data/course-pages";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, initials } from "@/components/course/CourseSection";
import { SnapCarousel } from "./SnapCarousel";
import { CpEnquiryForm } from "./CpEnquiryForm";

/* Why TechCADD (+ comparison table) · Tracks (+ batches) · Certification · Reviews · FAQ · Related · Enrol. */

const th = "px-4 py-4 text-left text-sm font-bold text-ink-900 sm:px-6";
const td = "px-4 py-4 text-sm text-ink-700 sm:px-6";

/** Numbered reason cards used by the long-form "Why this program" / "Why choose techcadd" copy. */
function Points({ points }: { points: { title: string; text: string; list?: string[]; after?: string }[] }) {
  return (
    <ol className="mt-14 grid gap-6 md:grid-cols-2">
      {points.map((p, i) => (
        <li key={p.title} className="extrude">
          <div className="neu neu-hover flex h-full gap-4 p-6">
            <span aria-hidden className="neu-icon-brand size-11 shrink-0 !rounded-full font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-bold text-ink-900">{p.title}</h3>
              {p.text && <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{p.text}</p>}
              {p.list && (
                <ul className="mt-3 space-y-2">
                  {p.list.map((l) => (
                    <li key={l} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /> {l}
                    </li>
                  ))}
                </ul>
              )}
              {p.after && <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.after}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** "Why this program" — only for courses whose `copy` has it. */
export function CpWhyProgram({ course }: { course: CoursePage }) {
  const copy = course.copy?.whyProgram;
  if (!copy) return null;
  return (
    <CourseSection id="why-program" className="defer-render bg-neu" overflow="overflow-x-clip">
      <SectionHeading id="why-program-title" eyebrow={copy.eyebrow} title={copy.title} text={copy.intro} />
      <Points points={copy.points} />
      {copy.outro && <p data-reveal="up" className="mx-auto mt-10 max-w-3xl text-center text-lg text-ink-700">{copy.outro}</p>}
    </CourseSection>
  );
}

export function CpWhy({ course }: { course: CoursePage }) {
  const copy = course.copy?.whyUs;
  if (copy) {
    return (
      <CourseSection id="why" className="defer-render bg-neu" overflow="overflow-x-clip">
        <SectionHeading id="why-title" eyebrow={copy.eyebrow} title={copy.title} text={copy.intro} />
        <Points points={copy.points} />
        {copy.outro && <p data-reveal="up" className="mx-auto mt-10 max-w-3xl text-center text-lg text-ink-700">{copy.outro}</p>}
      </CourseSection>
    );
  }
  return (
    <CourseSection id="why" className="defer-render bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="why-title"
        eyebrow="Why TechCADD"
        title={<>Training that feels like <span className="text-gradient">your first job</span></>}
        text="Since 2007, we have trained students across North India the practical way."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courseCommon.why.map((w) => (
          <li key={w.title} className="extrude">
            <div className="neu neu-hover group flex h-full gap-4 p-6">
              <span className="neu-icon size-12 transition-colors duration-300 group-hover:text-accent-600"><Icon name={w.icon} className="size-5" /></span>
              <div>
                <h3 className="font-bold text-ink-900">{w.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{w.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="extrude mt-14">
        <div className="neu overflow-hidden p-2 sm:p-3">
          <div className="overflow-x-auto" tabIndex={0} role="region" aria-labelledby="compare-caption">
            <table className="w-full min-w-[34rem] border-separate border-spacing-0">
              <caption id="compare-caption" className="px-4 pb-2 pt-4 text-left font-display text-lg font-bold text-ink-900 sm:px-6">
                TechCADD vs a typical institute
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={th}>What matters</th>
                  <th scope="col" className={`${th} rounded-t-2xl bg-neu text-brand-700 shadow-neu-inset-sm`}>TechCADD</th>
                  <th scope="col" className={th}>Typical institute</th>
                </tr>
              </thead>
              <tbody>
                {courseCommon.comparison.map((r, i) => (
                  <tr key={r.feature} className="transition-colors hover:bg-white/40">
                    <th scope="row" className={`${td} border-t border-white/70 font-semibold text-ink-900`}>{r.feature}</th>
                    <td className={`${td} border-t border-white/70 bg-neu shadow-[inset_4px_0_6px_-4px_#c3cad8,inset_-4px_0_6px_-4px_#fff] ${i === courseCommon.comparison.length - 1 ? "rounded-b-2xl" : ""}`}>
                      <span className="flex gap-2 font-medium text-ink-900"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-700" aria-hidden />{r.us}</span>
                    </td>
                    <td className={`${td} border-t border-white/70`}>
                      <span className="flex gap-2"><Minus className="mt-0.5 size-4 shrink-0 text-ink-500" aria-hidden />{r.them}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CourseSection>
  );
}

const cell = (v: boolean | string) =>
  typeof v === "string" ? (
    <span className="font-medium text-ink-900">{v}</span>
  ) : v ? (
    <span className="neu-icon-brand mx-auto size-7 !rounded-full"><Check className="size-4" aria-hidden /><span className="sr-only">Included</span></span>
  ) : (
    <span className="mx-auto grid size-7 place-items-center rounded-full bg-neu text-ink-500 shadow-neu-inset-sm"><Minus className="size-4" aria-hidden /><span className="sr-only">Not included</span></span>
  );

export function CpTracks({ course }: { course: CoursePage }) {
  const { columns, rows } = courseCommon.tracks;
  return (
    <CourseSection id="tracks" className="defer-render bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="tracks-title"
        eyebrow="Duration, Mode & Batches"
        title={<>Choose the <span className="text-gradient">track that fits you</span></>}
        text={`Learn ${course.navLabel} as a certificate course, as university industrial training, or as a longer job-ready diploma.`}
      />

      <div className="extrude mt-14">
        <div className="neu p-2 sm:p-3">
          <div className="overflow-x-auto" tabIndex={0} role="region" aria-labelledby="tracks-caption">
            <table className="w-full min-w-[40rem] border-separate border-spacing-0 text-center">
              <caption id="tracks-caption" className="sr-only">Compare learning tracks for the {course.title}</caption>
              <thead>
                <tr>
                  <th scope="col" className={th}><span className="sr-only">Feature</span></th>
                  {columns.map((c, i) => (
                    <th key={c} scope="col" className={`${th} !text-center ${i === 1 ? "rounded-t-2xl bg-neu text-brand-700 shadow-neu-inset-sm" : ""}`}>
                      {c}
                      {i === 1 && <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-accent-600">Most chosen</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature} className="transition-colors hover:bg-white/40">
                    <th scope="row" className={`${td} border-t border-white/70 text-left font-semibold text-ink-900`}>{r.feature}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className={`${td} border-t border-white/70 ${i === 1 ? "bg-neu shadow-[inset_4px_0_6px_-4px_#c3cad8,inset_-4px_0_6px_-4px_#fff]" : ""}`}>
                        {cell(i === 0 && v === "Course duration" ? course.duration : v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 data-reveal="up" className="mt-14 text-lg font-bold text-ink-900">Batch timings</h3>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courseCommon.batches.map((b) => (
          <li key={b.label} className="extrude">
            <div className="neu-sm h-full p-5">
              <div className="flex items-center gap-3">
                <span aria-hidden className="neu-inset grid size-10 place-items-center !rounded-xl text-brand-700"><Clock className="size-5" /></span>
                <p className="font-bold text-ink-900">{b.label}</p>
              </div>
              <p className="mt-3 text-sm text-ink-700">{b.time}</p>
              <span className="mt-3 inline-flex rounded-full bg-neu px-3 py-1 text-xs font-semibold text-brand-800 shadow-neu-inset-sm">{b.mode}</span>
            </div>
          </li>
        ))}
      </ul>
      <p data-reveal="up" className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-ink-700">
        Not sure which track or batch suits you? A counsellor will help you decide.
        <Link href="#enrol" className="btn-neu !py-2.5">Ask a Counsellor</Link>
      </p>
    </CourseSection>
  );
}

export function CpCertification({ course }: { course: CoursePage }) {
  return (
    <CourseSection id="certification" className="defer-render bg-neu" overflow="overflow-x-clip">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            id="certification-title"
            align="left"
            eyebrow="Certification & Placement"
            title={<>Finish with proof <span className="text-gradient">employers can verify</span></>}
            text="Your certificate lists your modules and projects, and our placement team works with you until you land the role."
          />
          <ul className="mt-8 space-y-4">
            {courseCommon.certification.map((c, i) => (
              <li key={c} data-reveal="left" style={delay(i, 80)} className="neu-inset flex items-center gap-3 p-4 text-ink-900">
                <span aria-hidden className="neu-icon-brand size-8 !rounded-full"><Check className="size-4" /></span> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="extrude">
          <div className="neu p-3 sm:p-4">
            <div role="img" aria-label={`Sample ${site.name} certificate for the ${course.title}`} className="rounded-[1.4rem] bg-white p-6 text-center shadow-neu-inset-sm sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Certificate of Completion</p>
              <p className="mt-5 text-sm text-ink-700">This certifies that</p>
              <p className="mt-1 font-display text-3xl font-bold text-ink-900">Your Name</p>
              <p className="mt-4 text-sm text-ink-700">has successfully completed the</p>
              <p className="mt-1 font-display text-xl font-bold text-brand-700">{course.title}</p>
              <div className="mt-8 flex items-center justify-between gap-4 text-xs text-ink-700">
                <span>{site.name}, Jalandhar</span>
                <span className="neu-icon-brand size-14 !rounded-full"><Award className="size-7" /></span>
                <span>ID: TC-{course.slug.slice(0, 3).toUpperCase()}-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CourseSection>
  );
}

export function CpReviews({ course }: { course: CoursePage }) {
  const copy = course.copy?.reviews;
  if (copy) {
    return (
      <CourseSection id="reviews" className="defer-render bg-neu" overflow="overflow-x-clip">
        <SectionHeading id="reviews-title" align="left" eyebrow="Student Reviews" title={copy.title} />
        <div data-reveal="up" className="mt-4">
          <SnapCarousel label="Student reviews" itemName="review">
            {copy.items.map((t) => (
              <li key={t.name} className="snap-focus w-[85%] shrink-0 snap-center sm:w-[55%] lg:w-[36%]">
                <figure className="neu flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    {t.rating ? (
                      <div className="flex gap-0.5" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className={`size-4 ${k < (t.rating ?? 0) ? "fill-accent-500 text-accent-500" : "text-ink-300"}`} aria-hidden />
                        ))}
                      </div>
                    ) : <span />}
                    <Quote className="size-8 text-brand-200" aria-hidden />
                  </div>
                  {t.headline && <p className="mt-4 font-display font-bold text-ink-900">{t.headline}</p>}
                  <blockquote className={`${t.headline ? "mt-2" : "mt-4"} flex-1 leading-relaxed text-ink-700`}>&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span aria-hidden className="neu-icon-brand size-11 shrink-0 !rounded-full text-sm font-bold">{initials(t.name)}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-ink-900">{t.name}</p>
                      <p className="text-sm text-ink-700">{t.role} · {t.place}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </SnapCarousel>
        </div>
      </CourseSection>
    );
  }
  if (testimonials.length === 0) return null;
  return (
    <CourseSection id="reviews" className="defer-render bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="reviews-title"
        align="left"
        eyebrow="Student Reviews"
        title={<>Heard from <span className="text-gradient">our alumni</span></>}
        text={`Rated ${site.rating.score}/5 by ${site.rating.reviews} students on Google.`}
      />
      <div data-reveal="up" className="mt-4">
        <SnapCarousel label="Student reviews" itemName="review">
          {testimonials.map((t) => (
            <li key={t.name} className="snap-focus w-[85%] shrink-0 snap-center sm:w-[55%] lg:w-[36%]">
              <figure className="neu flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-accent-500 text-accent-500" aria-hidden />)}
                  </div>
                  <Quote className="size-8 text-brand-200" aria-hidden />
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink-700">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span aria-hidden className="neu-icon-brand size-11 !rounded-full text-sm font-bold">{initials(t.name)}</span>
                  <div className="min-w-0">
                    <p className="font-bold text-ink-900">{t.name}</p>
                    <p className="text-sm text-ink-700">{t.role} · {t.city}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </SnapCarousel>
      </div>
    </CourseSection>
  );
}

export function CpFaq({ course, faqs }: { course: CoursePage; faqs: { q: string; a: string }[] }) {
  return (
    <CourseSection id="faq" className="defer-render bg-neu" overflow="overflow-x-clip">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="FAQs"
            title={course.copy?.faqTitle ?? <>Questions about <span className="text-gradient">{course.navLabel}</span>?</>}
            text="Straight answers on eligibility, batches, certification and placements."
          />
          <div className="extrude mt-8">
            <div className="neu p-6">
              <p className="font-bold text-ink-900">Still have a question?</p>
              <p className="mt-1 text-sm text-ink-700">Counsellors are available {site.hours}.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={site.phoneHref} className="btn-neu-primary !py-2.5"><Phone className="size-4" aria-hidden /> Call {site.phone}</a>
                <Link href="#enrol" className="btn-neu !py-2.5">Send an Enquiry</Link>
              </div>
            </div>
          </div>
        </div>
        {faqs.length > 0 ? (
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={f.q} className="extrude">
                <details className="accordion neu group open:shadow-neu-inset" open={i === 0}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-[1.75rem] p-6 text-left font-semibold text-ink-900 transition-colors hover:text-brand-700">
                    {f.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-neu text-brand-700 shadow-neu-sm transition-[rotate,background-color,box-shadow,color] duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white group-open:shadow-neu-brand">
                      <Plus className="size-4" aria-hidden />
                    </span>
                  </summary>
                  <p className="-mt-2 px-6 pb-6 leading-relaxed text-ink-700">{f.a}</p>
                </details>
              </div>
            ))}
          </div>
        ) : (
          <p className="neu p-8 text-ink-700">No FAQs yet for this course — <Link href="#enrol" className="link">ask us directly</Link>.</p>
        )}
      </div>
    </CourseSection>
  );
}

export function CpRelated({ courses, more = [] }: { courses: CoursePage[]; /** Links to the training / After 12th programs and comparison pages of this subject. */ more?: { label: string; href: string }[] }) {
  if (courses.length === 0) return null;
  return (
    <CourseSection id="related" className="defer-render bg-neu" overflow="overflow-x-clip">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="related-title"
          align="left"
          eyebrow="Related Courses"
          title={<>Pair it with <span className="text-gradient">these next</span></>}
        />
        <Link data-reveal="up" href="/courses" className="btn-neu">View All Courses</Link>
      </div>
      <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <li key={c.slug} className="extrude">
            <CpCourseCard course={c} />
          </li>
        ))}
      </ul>
      {more.length > 0 && (
        <nav aria-label="More on this subject" className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-ink-900">Also see:</span>
          {more.map((l) => (
            <Link key={l.href} href={l.href} className="neu-sm !rounded-full px-4 py-2 text-ink-700 transition-colors hover:text-brand-700">{l.label}</Link>
          ))}
        </nav>
      )}
    </CourseSection>
  );
}

/** Whole-card link via a stretched ::after (one tab stop); focus ring drawn on the card with has-[:focus-visible]. */
export function CpCourseCard({ course, headingLevel: H = "h3" }: { course: CoursePage; headingLevel?: "h2" | "h3" }) {
  return (
    <article className="neu neu-hover group relative flex h-full flex-col p-6 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-brand-500">
      <div className="flex items-center justify-between gap-3">
        <span aria-hidden className="neu-icon size-12 transition-colors duration-300 group-hover:text-accent-600"><Icon name={course.icon} className="size-5" /></span>
        <span className="flex items-center gap-1.5 text-xs text-ink-700"><Clock className="size-3.5" aria-hidden /> {course.duration}</span>
      </div>
      <H className="mt-5 text-xl font-bold leading-snug text-ink-900">
        <Link href={`/courses/${course.slug}`} className="outline-none after:absolute after:inset-0 after:rounded-[1.75rem] group-hover:text-brand-700">
          {course.title}
        </Link>
      </H>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-700">{course.tagline}</p>
      <div className="mt-6 flex items-center justify-between pt-1 text-sm">
        <span className="rounded-full bg-neu px-3 py-1 text-xs font-semibold text-brand-800 shadow-neu-inset-sm">{course.level}</span>
        <span aria-hidden className="flex items-center gap-1 font-semibold text-brand-700">
          View course <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

const perks = ["Free 1:1 career counselling", "Attend a live class before you enrol", "Weekday, weekend & online batches", "Placement support until you're hired"];

export function CpEnrol({ course, courses }: { course: CoursePage; courses: string[] }) {
  return (
    <section id="enrol" aria-labelledby="enrol-title" className="section relative scroll-mt-16 overflow-x-clip bg-neu">
      <div className="container-x">
        <div className="extrude">
          <div className="neu grid items-center gap-12 !rounded-[2.5rem] p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <h2 id="enrol-title" data-reveal="up" style={delay(1)} className="text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
                {course.copy?.cta ? course.copy.cta.title : `Start your ${course.navLabel} journey`} <span className="text-gradient">{course.copy?.cta?.highlight ?? "this month."}</span>
              </h2>
              <p data-reveal="up" style={delay(2)} className="mt-5 max-w-lg text-lg text-ink-700">
                {course.copy?.cta?.text ?? "Book a free demo class, meet your mentor and get a personalised learning plan — no commitment."}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {perks.map((p, i) => (
                  <li key={p} data-reveal="up" style={delay(i + 3, 70)} className="flex items-center gap-2.5 text-sm font-medium text-ink-900">
                    <CheckCircle2 className="size-5 shrink-0 text-brand-600" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
              <a data-reveal="up" href={site.phoneHref} className="group mt-10 inline-flex items-center gap-4 rounded-2xl">
                <span className="neu-icon-brand size-14 !rounded-full transition-transform duration-300 group-hover:scale-110 group-active:scale-95"><Phone className="size-6" aria-hidden /></span>
                <span>
                  <span className="block text-sm text-ink-700">Prefer to talk? Call a counsellor</span>
                  <span className="font-display text-2xl font-bold text-ink-900">{site.phone}</span>
                </span>
              </a>
            </div>
            <div data-reveal="right">
              <CpEnquiryForm course={course.navLabel} courses={courses} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
