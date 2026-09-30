import type { AiCourse } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "./CourseSection";

/** Outcome grid. data-reveal sits on the <li>, hover transform on the inner card, so hover never inherits reveal delays. */
export function CourseOutcomes({ course }: { course: AiCourse }) {
  return (
    <CourseSection id="outcomes" className="bg-soft" decor={<SoftBlobs flip />}>
      <SectionHeading
        id="outcomes-title"
        eyebrow="What You'll Learn"
        title={<>Skills you will <span className="text-gradient">actually use at work</span></>}
        text={`${course.outcomes.length} core outcomes, each practised through hands-on projects and weekly mentor reviews.`}
      />
      <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {course.outcomes.map((o, i) => (
          <li key={o.title} data-reveal="up" style={delay(i % 3)}>
            <div className="glass glass-hover group relative h-full p-7">
              <span aria-hidden className="absolute right-6 top-6 font-display text-4xl font-extrabold text-ink-900/[0.06]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="soft-icon size-14 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon name={o.icon} className="size-6" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink-900">{o.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-500">{o.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}
