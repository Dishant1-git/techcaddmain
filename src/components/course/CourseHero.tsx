import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Clock, FolderGit2, MonitorPlay, Sparkles, Star } from "lucide-react";
import { site, type AiCourse } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { Breadcrumb } from "./Breadcrumb";

/** Parallax depth for a `.parallax` layer (CSS scroll-driven, see globals.css). Negative = moves up. */
const depth = (v: string) => ({ "--parallax": v }) as CSSProperties;

/**
 * Dark hero, single column — deliberately NO side card and NO pricing.
 * No data-reveal on the H1/intro (LCP); only the decorative glow layers move (CSS parallax).
 */
export function CourseHero({ course }: { course: AiCourse }) {
  const facts = [
    { icon: Clock, label: course.duration },
    { icon: BarChart3, label: course.level },
    { icon: MonitorPlay, label: "Classroom + Live Online" },
    { icon: FolderGit2, label: `${course.projects}+ projects` },
  ];

  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink-950 pb-16 pt-10 text-white md:pb-24 md:pt-14">
      <div className="parallax absolute inset-x-0 -top-1/4 -z-10 h-[150%]" style={depth("15%")} aria-hidden>
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>
      <div className="parallax absolute -left-32 -top-20 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" style={depth("45%")} aria-hidden />
      <div className="parallax absolute -right-24 bottom-0 -z-10 size-[22rem] rounded-full bg-accent-500/15 blur-[120px]" style={depth("-35%")} aria-hidden />

      <div className="container-x">
        <div className="min-w-0 max-w-4xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Courses", href: "/ai-courses" }, { label: course.navLabel }]} />
          <p className="eyebrow eyebrow-dark mt-8">
            <Sparkles className="size-3.5" aria-hidden /> {course.tag ?? "AI Course"} · {course.level}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            {course.title} <span className="text-gradient">in Jalandhar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{course.tagline}</p>

          <ul aria-label="Course highlights" className="mt-8 flex flex-wrap gap-3 text-sm">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 shadow-glass-dark backdrop-blur-md">
                <f.icon className="size-4 text-accent-400" aria-hidden /> {f.label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#enrol" className="btn-primary">Book a Free Demo Class <ArrowRight className="size-4" aria-hidden /></Link>
            <a
              href={waLink(`Hi TechCADD, please share the ${course.title} syllabus and next batch details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark"
            >
              Get the Syllabus on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-300">
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-accent-400 text-accent-400" />)}
            </span>
            <span><strong className="text-white">{site.rating.score}/5</strong> from {site.rating.reviews} Google reviews</span>
            <span aria-hidden>·</span>
            <span>50,000+ alumni since 2007</span>
          </p>
        </div>
      </div>
    </section>
  );
}
