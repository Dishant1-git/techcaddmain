import Image from "next/image";
import type { AiMentor } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs, initials } from "./CourseSection";

export function CourseMentor({ mentor }: { mentor: AiMentor }) {
  const stats = [
    { label: "Industry experience", value: mentor.experience },
    { label: "Students mentored", value: mentor.students },
    { label: "Doubt support", value: "Same day" },
  ];

  return (
    <CourseSection id="mentor" className="bg-soft" decor={<SoftBlobs />}>
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          id="mentor-title"
          align="left"
          eyebrow="Your Mentor"
          title={<>Learn from <span className="text-gradient">working professionals</span></>}
          text="Every batch is led by a senior mentor and supported by teaching assistants, so your doubts are cleared the same day."
        />
        <article data-reveal="right" className="glass p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row">
            {mentor.image ? (
              <Image src={mentor.image} alt={`Photo of ${mentor.name}`} placeholder="blur" sizes="120px" className="size-30 shrink-0 rounded-[2rem] object-cover shadow-soft" />
            ) : (
              <span aria-hidden className="soft-icon size-30 rounded-[2rem] font-display text-4xl font-bold">
                {initials(mentor.name)}
              </span>
            )}
            <div className="min-w-0">
              <h3 className="text-2xl font-bold text-ink-900">{mentor.name}</h3>
              <p className="font-semibold text-brand-700">{mentor.role}</p>
              <p className="mt-4 leading-relaxed text-ink-700">{mentor.bio}</p>
              <ul aria-label="Areas of expertise" className="mt-5 flex flex-wrap gap-2.5">
                {mentor.expertise.map((e) => (
                  <li key={e} className="glass-sm rounded-full px-3.5 py-1.5 text-sm font-medium text-brand-800">{e}</li>
                ))}
              </ul>
            </div>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3 text-center sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="soft-inset flex flex-col-reverse p-3 sm:p-4">
                <dt className="text-xs text-ink-500">{s.label}</dt>
                <dd className="font-display text-lg font-bold text-ink-900 sm:text-xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </CourseSection>
  );
}
