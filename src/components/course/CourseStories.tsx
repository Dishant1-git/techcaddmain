import Link from "next/link";
import { Quote, Star } from "lucide-react";
import { aiTestimonials, site, type AiCourse } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs, initials } from "./CourseSection";

/** 3 stories: this course's first, then other AI alumni. Hidden entirely if there are none. */
export function CourseStories({ course }: { course: AiCourse }) {
  const stories = [...aiTestimonials].sort((a, b) => Number(b.course === course.slug) - Number(a.course === course.slug)).slice(0, 3);
  if (stories.length === 0) return null;

  return (
    <CourseSection id="reviews" className="defer-render bg-soft" decor={<SoftBlobs flip />}>
      <SectionHeading
        id="reviews-title"
        eyebrow="Student Stories"
        title={<>Real results from <span className="text-gradient">our AI alumni</span></>}
        text={`Rated ${site.rating.score}/5 by ${site.rating.reviews} students on Google.`}
      />
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((t, i) => (
          <li key={t.name} data-reveal="up" style={delay(i)}>
            <figure className="glass glass-hover flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-accent-400 text-accent-400" aria-hidden />)}
                </div>
                <Quote className="size-8 text-brand-100" aria-hidden />
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink-700">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/80 pt-5">
                <span aria-hidden className="soft-icon size-11 rounded-full text-sm font-bold">
                  {initials(t.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-500">{t.role} · {t.city}</p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center">
        <Link href="/#testimonials" className="link">Read more student stories</Link>
      </p>
    </CourseSection>
  );
}
