import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Clock, FolderGit2, MonitorPlay, Star } from "lucide-react";
import { site } from "@/data/site";
import { courseCommon, type CourseGroup, type CoursePage } from "@/data/course-pages";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { Breadcrumb } from "@/components/course/Breadcrumb";

const depth = (v: string) => ({ "--parallax": v }) as CSSProperties;
/** On-load entrance (not scroll): CSS keyframe with a delay; disabled for reduced motion. */
const enter = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;
const enterCls = "motion-safe:animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]";

/**
 * Light neumorphic hero, centred, single column — deliberately NO side card and NO pricing.
 * The H1 and tagline are the LCP content: no entrance animation on them. Decorative discs float + parallax;
 * content stays fully visible while scrolling.
 */
export function CpHero({ course, group }: { course: CoursePage; group: CourseGroup }) {
  const facts = [
    { icon: Clock, label: course.duration },
    { icon: BarChart3, label: course.level },
    { icon: MonitorPlay, label: "Classroom + Live Online" },
    { icon: FolderGit2, label: `${course.projects.length} portfolio projects` },
  ].filter((f) => !f.label.startsWith("0 "));

  return (
    <section className="relative isolate overflow-x-clip bg-neu pb-14 pt-10 md:pb-20 md:pt-14">
      {/* Decorative neumorphic discs (not cards): raised left, pressed right. */}
      <div aria-hidden className="bg-grid-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div aria-hidden className="parallax absolute -left-24 top-24 -z-10 hidden md:block" style={depth("40%")}>
        <div className="neu size-56 !rounded-full motion-safe:animate-float" />
      </div>
      <div aria-hidden className="parallax absolute -right-20 top-10 -z-10 hidden md:block" style={depth("-30%")}>
        <div className="neu-inset size-72 !rounded-full" />
      </div>
      <div aria-hidden className="parallax absolute bottom-24 right-[12%] -z-10 hidden lg:block" style={depth("60%")}>
        <div className="neu-icon-brand size-14 !rounded-full opacity-80 motion-safe:animate-float [animation-delay:-3s]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: course.navLabel }]} />
          </div>

          <span aria-hidden className={`neu-icon mx-auto mt-8 size-20 !rounded-[1.75rem] ${enterCls}`}>
            <Icon name={course.icon} className="size-9" />
          </span>
          <p className={`eyebrow mt-6 !border-0 !bg-neu shadow-neu-inset-sm ${enterCls}`} style={enter(80)}>
            {group.title} · {course.level}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            {course.copy?.heading?.title ?? course.title} <span className="text-gradient">{course.copy?.heading?.highlight ?? "in Jalandhar"}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">{course.tagline}</p>

          <ul aria-label="Course highlights" className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium text-ink-900">
            {facts.map((f, i) => (
              <li key={f.label} className={`neu-sm flex items-center gap-2 !rounded-full px-4 py-2 ${enterCls}`} style={enter(160 + i * 70)}>
                <f.icon className="size-4 text-brand-600" aria-hidden /> {f.label}
              </li>
            ))}
          </ul>
          <p className={`mt-5 text-sm text-ink-700 ${enterCls}`} style={enter(450)}>
            <strong className="text-ink-900">Eligibility:</strong> {course.eligibility}
          </p>

          <div className={`mt-9 flex flex-wrap justify-center gap-4 ${enterCls}`} style={enter(520)}>
            <Link href="#enrol" className="btn-neu-primary">Book a Free Demo Class <ArrowRight className="size-4" aria-hidden /></Link>
            <a
              href={waLink(`Hi TechCADD, please share the ${course.title} syllabus and next batch details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neu"
            >
              Get the Syllabus on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <p className={`mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-ink-700 ${enterCls}`} style={enter(600)}>
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-accent-500 text-accent-500" />)}
            </span>
            <span><strong className="text-ink-900">{site.rating.score}/5</strong> from {site.rating.reviews} Google reviews</span>
          </p>
        </div>
      </div>

      <dl className="container-x mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {courseCommon.stats.map((s) => (
          <div key={s.label} className="extrude">
            <div className="neu flex h-full flex-col-reverse items-center p-5 text-center sm:p-6">
              <dt className="mt-1 text-sm text-ink-700">{s.label}</dt>
              <dd className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
