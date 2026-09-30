import type { AiCourse } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, monogram } from "./CourseSection";

/** Dark soft-UI section: section bg = bg-ink-950 so `glass-dark` tiles read as raised from the same surface. */
export function CourseTools({ course }: { course: AiCourse }) {
  return (
    <CourseSection
      id="tools"
      className="on-dark bg-ink-950 text-white"
      decor={
        <>
          <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
          <div className="absolute left-1/2 top-0 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[140px]" aria-hidden />
        </>
      }
    >
      <SectionHeading
        id="tools-title"
        dark
        eyebrow="Tools & Technologies"
        title={<>Work with the <span className="text-gradient">tools the industry uses</span></>}
        text={`Hands-on lab time with ${course.tools.length} tools — the same stack interviewers ask about.`}
      />
      <ul className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {course.tools.map((t, i) => (
          <li key={t.name} data-reveal="zoom" style={delay(i % 4, 70)}>
            <div className="glass-dark group h-full p-5 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-[var(--shadow-glass-dark),0_10px_30px_-8px_rgb(29_83_240/0.7)]">
              <span aria-hidden className="soft-icon size-14 font-display text-sm font-bold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                {monogram(t.name)}
              </span>
              <p className="mt-5 break-words font-display font-bold">{t.name}</p>
              <p className="mt-1 text-sm text-ink-300">{t.use}</p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}
