import Link from "next/link";
import { BadgeCheck, Briefcase, Building2, FolderGit2, MapPin } from "lucide-react";
import type { CourseGroup, CoursePage } from "@/data/course-pages";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, initials, monogram } from "@/components/course/CourseSection";
import { SnapCarousel } from "./SnapCarousel";

/* Tools · Projects · Eligibility · Careers · Mentor. */

export function CpTools({ course }: { course: CoursePage }) {
  const copy = course.copy?.tools;
  if (copy) {
    return (
      <CourseSection id="tools" className="bg-neu" overflow="overflow-x-clip">
        <SectionHeading id="tools-title" eyebrow="Tools & Technologies" title={copy.title} />
        <div className="extrude mx-auto mt-14 max-w-4xl">
          <div className="neu p-2 sm:p-3">
            <table className="w-full border-separate border-spacing-0 text-left">
              <caption className="sr-only">{copy.title}</caption>
              <thead>
                <tr>
                  <th scope="col" className="px-4 py-4 text-sm font-bold text-ink-900 sm:px-6">{copy.columns?.[0] ?? "Area"}</th>
                  <th scope="col" className="px-4 py-4 text-sm font-bold text-ink-900 sm:px-6">{copy.columns?.[1] ?? "Tools"}</th>
                </tr>
              </thead>
              <tbody>
                {copy.groups.map((g) => (
                  <tr key={g.area} className="transition-colors hover:bg-white/40">
                    <th scope="row" className="border-t border-white/70 px-4 py-4 align-top text-sm font-semibold text-brand-700 sm:px-6">{g.area}</th>
                    <td className="border-t border-white/70 px-4 py-4 text-sm text-ink-700 sm:px-6">{g.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {copy.note && <p data-reveal="up" className="mx-auto mt-6 max-w-4xl text-sm text-ink-700">{copy.note}</p>}
      </CourseSection>
    );
  }
  return (
    <CourseSection id="tools" className="bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="tools-title"
        eyebrow="Tools & Technologies"
        title={<>Hands-on with <span className="text-gradient">{course.tools.length} industry tools</span></>}
        text="You practise on the same tools teams use every day — the ones interviewers ask about."
      />
      <ul className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {course.tools.map((t) => (
          <li key={t} className="extrude">
            <div className="neu-sm group flex h-full items-center gap-3 p-4 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-neu-lg">
              <span aria-hidden className="neu-inset grid size-11 shrink-0 place-items-center !rounded-xl font-display text-sm font-bold text-brand-700 transition-transform duration-300 group-hover:rotate-[-8deg]">
                {monogram(t)}
              </span>
              <span className="min-w-0 break-words font-semibold text-ink-900">{t}</span>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Carousel: the centred card is full size (.snap-focus, CSS view(inline) timeline). */
export function CpProjects({ course }: { course: CoursePage }) {
  if (course.projects.length === 0) return null;
  return (
    <CourseSection id="projects" className="bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="projects-title"
        align="left"
        eyebrow="Portfolio Projects"
        title={<>Build a portfolio that <span className="text-gradient">gets you shortlisted</span></>}
        text={`${course.projects.length} guided projects — each one reviewed by your mentor and ready to show in interviews.`}
      />
      <div data-reveal="up" className="mt-4">
        <SnapCarousel label={`${course.navLabel} portfolio projects`} itemName="project">
          {course.projects.map((p, i) => (
            <li key={p.title} className="snap-focus w-[85%] shrink-0 snap-center sm:w-[55%] lg:w-[36%]">
              <article className="neu flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span aria-hidden className="neu-icon size-12"><FolderGit2 className="size-5" /></span>
                  <span className="font-display text-4xl font-extrabold text-ink-900/10" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-700">{p.text}</p>
                <ul aria-label="Skills used" className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-neu px-3 py-1 text-xs font-semibold text-brand-800 shadow-neu-inset-sm">{t}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </SnapCarousel>
      </div>
    </CourseSection>
  );
}

export function CpAudience({ course, group }: { course: CoursePage; group: CourseGroup }) {
  const copy = course.copy?.audience;
  const items = copy?.items ?? group.audience;
  return (
    <CourseSection id="eligibility" className="bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="eligibility-title"
        eyebrow={copy?.eyebrow ?? "Who Can Join"}
        title={copy ? copy.title : <>Made for <span className="text-gradient">where you are today</span></>}
        text={copy?.intro ?? "Whether you are starting fresh or levelling up, there is a batch and a pace that fits."}
      />
      <ul className={`mt-14 grid gap-7 sm:grid-cols-2 ${items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
        {items.map((a) => (
          <li key={a.title} className="extrude">
            <div className="neu neu-hover group h-full p-6 text-center">
              <span className="neu-icon mx-auto size-16 !rounded-full transition-[scale,color] duration-300 group-hover:scale-110 group-hover:text-accent-600">
                <Icon name={a.icon} className="size-7" />
              </span>
              <h3 className="mt-5 font-bold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{a.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="extrude mt-10">
        <div className="neu-inset flex flex-col gap-4 !rounded-[1.75rem] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="flex items-start gap-3 text-ink-700">
            <span aria-hidden className="neu-icon size-9 !rounded-xl"><BadgeCheck className="size-4.5" /></span>
            <span><strong className="text-ink-900">{copy ? "What you need:" : "Eligibility:"}</strong> {copy?.need ?? course.eligibility}</span>
          </p>
          <Link href="#enrol" className="btn-neu shrink-0">Check My Eligibility</Link>
        </div>
      </div>
      {copy?.fit && (
        <div data-reveal="up" className="neu mx-auto mt-10 max-w-3xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-ink-900">{copy.fit.title}</h3>
          <p className="mt-2 text-ink-700">{copy.fit.text}</p>
          <ul className="mt-4 space-y-2.5">
            {copy.fit.list.map((l) => (
              <li key={l} className="flex gap-2.5 text-sm text-ink-700">
                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden /> {l}
              </li>
            ))}
          </ul>
          {copy.fit.after && <p className="mt-4 text-sm leading-relaxed text-ink-700">{copy.fit.after}</p>}
        </div>
      )}
    </CourseSection>
  );
}

/** "Learners from across states" — only for courses whose `copy` has it. */
export function CpRegions({ course }: { course: CoursePage }) {
  const copy = course.copy?.regions;
  if (!copy) return null;
  return (
    <CourseSection id="regions" className="bg-neu" overflow="overflow-x-clip">
      <SectionHeading id="regions-title" eyebrow={copy.eyebrow} title={copy.title} text={copy.intro} />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {copy.items.map((r) => (
          <li key={r.title} className="extrude">
            <div className="neu neu-hover flex h-full gap-4 p-6">
              <span aria-hidden className="neu-icon size-11 shrink-0 !rounded-xl"><MapPin className="size-5" /></span>
              <div>
                <h3 className="font-bold text-ink-900">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{r.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {copy.outro && <p data-reveal="up" className="mx-auto mt-10 max-w-3xl text-center text-lg text-ink-700">{copy.outro}</p>}
    </CourseSection>
  );
}

export function CpCareers({ course }: { course: CoursePage }) {
  const copy = course.copy?.careers;
  if (copy) {
    return (
      <CourseSection id="careers" className="bg-neu" overflow="overflow-x-clip">
        <SectionHeading id="careers-title" eyebrow={copy.eyebrow} title={copy.title} text={copy.intro} />
        <ul aria-label="Typical roles" data-reveal="up" className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {copy.roles.map((r) => (
            <li key={r} className="neu-sm flex items-center gap-2 !rounded-full px-4 py-2 text-sm font-medium text-ink-900">
              <Briefcase className="size-4 text-brand-600" aria-hidden /> {r}
            </li>
          ))}
        </ul>
        <h3 data-reveal="up" className="mt-16 text-center text-2xl font-bold text-ink-900">{copy.jobsTitle}</h3>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.jobs.map((j, i) => (
            <li key={j.title} data-reveal="flip" style={delay(i % 3, 110)}>
              <div className="neu neu-hover flex h-full gap-4 p-6">
                <span aria-hidden className="neu-icon size-11 shrink-0 !rounded-xl"><Building2 className="size-5" /></span>
                <div>
                  <h4 className="font-bold text-ink-900">{j.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{j.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {copy.outro && <p data-reveal="up" className="mx-auto mt-10 max-w-3xl text-center text-ink-700">{copy.outro}</p>}
      </CourseSection>
    );
  }
  if (course.careers.length === 0) return null;
  return (
    <CourseSection id="careers" className="bg-neu" overflow="overflow-x-clip">
      <SectionHeading
        id="careers-title"
        eyebrow="Career Scope"
        title={<>Roles you can <span className="text-gradient">apply for</span></>}
        text="Our placement team helps you target these roles with resume reviews, mock interviews and referrals."
      />
      <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {course.careers.map((c, i) => (
          <li key={c.role} data-reveal="flip" style={delay(i % 3, 110)}>
            <div className="neu neu-hover flex h-full flex-col p-6">
              <span aria-hidden className="neu-icon size-12"><Briefcase className="size-5" /></span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{c.role}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-700">{c.work}</p>
              <p className="neu-inset mt-5 flex gap-2.5 p-3.5 text-sm text-ink-700">
                <Building2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                <span><strong className="text-ink-900">Who hires:</strong> {c.hirers}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

export function CpMentor({ group }: { group: CourseGroup }) {
  const m = group.mentor;
  const stats = [
    { label: "Industry experience", value: m.experience },
    { label: "Students mentored", value: m.students },
    { label: "Doubt support", value: "Same day" },
  ];
  return (
    <CourseSection id="mentor" className="bg-neu" overflow="overflow-x-clip">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          id="mentor-title"
          align="left"
          eyebrow="Your Mentor"
          title={<>Learn from people who <span className="text-gradient">do the work</span></>}
          text="Every batch is led by a senior mentor and supported by teaching assistants, so doubts are cleared the same day."
        />
        <div className="extrude">
          <article className="neu p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row">
              <span aria-hidden className="neu-icon-brand size-28 !rounded-full font-display text-3xl font-bold">{initials(m.name)}</span>
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-ink-900">{m.name}</h3>
                <p className="font-semibold text-brand-700">{m.role}</p>
                <p className="mt-4 leading-relaxed text-ink-700">{m.bio}</p>
                <ul aria-label="Areas of expertise" className="mt-5 flex flex-wrap gap-2.5">
                  {m.expertise.map((e) => (
                    <li key={e} className="neu-sm !rounded-full px-3.5 py-1.5 text-sm font-medium text-brand-800">{e}</li>
                  ))}
                </ul>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 text-center sm:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="neu-inset flex flex-col-reverse p-3 sm:p-4">
                  <dt className="text-xs text-ink-700">{s.label}</dt>
                  <dd className="font-display text-lg font-bold text-ink-900 sm:text-xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </CourseSection>
  );
}
