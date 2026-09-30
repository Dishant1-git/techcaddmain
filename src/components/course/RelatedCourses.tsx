import Link from "next/link";
import type { AiCourse } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { AiCourseCard } from "./AiCourseCard";
import { CourseSection, SoftBlobs } from "./CourseSection";

export function RelatedCourses({ courses }: { courses: AiCourse[] }) {
  if (courses.length === 0) return null;
  return (
    <CourseSection id="related" className="defer-render bg-soft" decor={<SoftBlobs flip />}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="related-title"
          align="left"
          eyebrow="Related AI Courses"
          title={<>Keep building your <span className="text-gradient">AI skill stack</span></>}
        />
        <Link data-reveal="up" href="/ai-courses" className="btn-glass">View All AI Courses</Link>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <li key={c.slug} data-reveal="up" style={delay(i)}>
            <AiCourseCard course={c} />
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}
