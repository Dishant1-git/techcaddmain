import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import type { AiCourse } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "./CourseSection";

const prerequisites: Record<AiCourse["level"], string> = {
  Beginner: "No prior experience needed — basic computer skills are enough.",
  Intermediate: "Basic programming helps. Need a refresher? Join our free 2-week Python bridge module first.",
  Advanced: "Working Python and some experience with an LLM API.",
  "All Levels": "Open to everyone — beginners and working professionals are guided at their own pace.",
};

export function CourseAudience({ course }: { course: AiCourse }) {
  return (
    <CourseSection id="audience" className="bg-soft" decor={<SoftBlobs flip />}>
      <SectionHeading
        id="audience-title"
        eyebrow="Who Is This For"
        title={<>Built for <span className="text-gradient">people like you</span></>}
        text="Wherever you are starting from, there is a batch and a pace that fits."
      />
      <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {course.audience.map((a, i) => (
          <li key={a.title} data-reveal="up" style={delay(i)}>
            <div className="glass glass-hover group h-full p-6 text-center">
              <span className="soft-icon-accent mx-auto size-16 rounded-full transition-transform duration-300 group-hover:scale-110">
                <Icon name={a.icon} className="size-7" />
              </span>
              <h3 className="mt-5 font-bold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div data-reveal="up" className="soft-inset mt-10 flex flex-col gap-4 rounded-[1.75rem] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="flex items-start gap-3 text-ink-700">
          <span className="soft-icon size-9 rounded-xl"><BadgeCheck className="size-4.5" aria-hidden /></span>
          <span><strong className="text-ink-900">Prerequisites ({course.level}):</strong> {prerequisites[course.level]}</span>
        </p>
        <Link href="#enrol" className="btn-glass shrink-0">Check My Eligibility</Link>
      </div>
    </CourseSection>
  );
}
