import Link from "next/link";
import { FileDown } from "lucide-react";
import type { AiCourse } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "./CourseSection";
import { CurriculumTabs } from "./CurriculumTabs";

export function CourseCurriculum({ course }: { course: AiCourse }) {
  const modules = course.curriculum.reduce((n, p) => n + p.modules.length, 0);

  return (
    <CourseSection id="curriculum" className="bg-soft" decor={<SoftBlobs />}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="curriculum-title"
          align="left"
          eyebrow="Curriculum"
          title={<>A clear <span className="text-gradient">{course.duration.toLowerCase()}</span> learning path</>}
          text={`${course.curriculum.length} phases · ${modules} modules · ${course.projects}+ projects. Open any module to see its topics and the project you will build.`}
        />
        <div data-reveal="up">
          <a
            href={waLink(`Hi TechCADD, please send me the full ${course.title} syllabus (PDF).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            <FileDown className="size-4 text-brand-600" aria-hidden /> Get the Full Syllabus PDF<span className="sr-only"> on WhatsApp (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div data-reveal="up" className="mt-12">
        {course.curriculum.length > 0 ? (
          <CurriculumTabs phases={course.curriculum} />
        ) : (
          <p className="glass p-8 text-center text-ink-500">
            The detailed syllabus for this course is being updated. <Link href="#enrol" className="link">Ask a counsellor for the latest syllabus</Link>.
          </p>
        )}
      </div>
    </CourseSection>
  );
}
