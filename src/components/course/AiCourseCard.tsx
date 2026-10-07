import Link from "next/link";
import { aiCourseHref } from "@/data/ai-moved";
import { ArrowRight, BarChart3, Clock } from "lucide-react";
import type { AiCourse } from "@/data/site";

/**
 * Whole-card link via a stretched ::after on the title link (one tab stop, short accessible name).
 * Focus ring is drawn on the card with has-[:focus-visible].
 */
export function AiCourseCard({ course, headingLevel: H = "h3" }: { course: AiCourse; headingLevel?: "h2" | "h3" }) {
  return (
    <article className="glass glass-hover group relative flex h-full flex-col p-6 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-500">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full soft-inset px-3 py-1 text-xs font-semibold text-brand-700">{course.tag ?? "AI Course"}</span>
        <span className="flex items-center gap-1.5 text-xs text-ink-500"><Clock className="size-3.5" aria-hidden /> {course.duration}</span>
      </div>
      <H className="mt-5 text-xl font-bold leading-snug text-ink-900">
        <Link href={aiCourseHref(course.slug)} className="outline-none after:absolute after:inset-0 after:rounded-[1.75rem] group-hover:text-brand-700">
          {course.title}
        </Link>
      </H>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-500">{course.tagline}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/80 pt-4 text-sm">
        <span className="flex items-center gap-1.5 text-ink-500"><BarChart3 className="size-4" aria-hidden /> {course.level}</span>
        <span aria-hidden className="flex items-center gap-1 font-semibold text-brand-700">
          View course <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
