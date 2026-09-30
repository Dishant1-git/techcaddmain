import Link from "next/link";
import { Award, BarChart3, Clock, FolderGit2, MonitorPlay, Timer } from "lucide-react";
import type { AiCourse } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "./CourseSection";

export function CourseOverview({ course }: { course: AiCourse }) {
  const glance = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: BarChart3, label: "Level", value: course.level },
    { icon: Timer, label: "Learning time", value: course.hours },
    { icon: FolderGit2, label: "Projects", value: `${course.projects}+ real projects` },
    { icon: MonitorPlay, label: "Mode", value: "Classroom or live online" },
    { icon: Award, label: "Certificate", value: "Verifiable TechCADD certificate" },
  ];

  return (
    <CourseSection id="overview" className="bg-soft" decor={<SoftBlobs />}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <SectionHeading
            id="overview-title"
            align="left"
            eyebrow="Course Overview"
            title={<>Why learn <span className="text-gradient">{course.navLabel}</span> with TechCADD</>}
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
            {course.overview.map((p, i) => <p key={i} data-reveal="up" style={delay(i + 2)}>{p}</p>)}
          </div>
          <p data-reveal="up" style={delay(4)} className="mt-8 text-ink-700">
            Not sure this is the right course? <Link href="#enrol" className="link">Talk to a counsellor for free</Link> or{" "}
            <Link href="/ai-courses" className="link">compare all AI courses</Link>.
          </p>
        </div>

        <aside data-reveal="left" aria-labelledby="glance-title" className="glass h-fit p-6 sm:p-8">
          <h3 id="glance-title" className="text-lg font-bold text-ink-900">Course at a glance</h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {glance.map((g) => (
              <div key={g.label} className="soft-inset flex items-center gap-3 p-3.5">
                <span className="soft-icon size-10 rounded-xl"><g.icon className="size-4.5" aria-hidden /></span>
                <div className="flex min-w-0 flex-col-reverse">
                  <dd className="break-words text-sm font-semibold text-ink-900">{g.value}</dd>
                  <dt className="text-xs text-ink-500">{g.label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </CourseSection>
  );
}
