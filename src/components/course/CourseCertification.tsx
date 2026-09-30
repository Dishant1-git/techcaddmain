import { Award, CheckCircle2 } from "lucide-react";
import { aiCourseCommon, placementStats, site, type AiCourse } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection } from "./CourseSection";

export function CourseCertification({ course }: { course: AiCourse }) {
  return (
    <CourseSection
      id="certification"
      className="on-dark relative overflow-hidden bg-ink-950 text-white"
      decor={
        <>
          <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
          <div className="absolute -right-32 top-1/3 size-[30rem] rounded-full bg-accent-500/15 blur-[140px]" aria-hidden />
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0">
          <SectionHeading
            id="certification-title"
            dark
            align="left"
            eyebrow="Certification & Placement"
            title={<>Get certified. <span className="text-gradient">Get hired.</span></>}
            text="Finish with a verifiable certificate and a placement team that works with you until you land the role."
          />
          <ul className="mt-8 space-y-3">
            {aiCourseCommon.certification.map((c, i) => (
              <li key={c} data-reveal="up" style={delay(i, 70)} className="flex gap-3 text-ink-300">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-400" aria-hidden /> <span className="text-white">{c}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {placementStats.map((s, i) => (
              <div key={s.label} data-reveal="up" style={delay(i)} className="glass-dark flex flex-col-reverse !rounded-2xl p-4">
                <dt className="mt-1 text-xs text-ink-300">{s.label}</dt>
                <dd className="font-display text-2xl font-extrabold">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-ink-300">*Based on eligible students of recent batches. Individual outcomes vary.</p>
        </div>

        <div className="min-w-0">
          <div data-reveal="zoom" role="img" aria-label={`Sample ${site.name} certificate for the ${course.title}`} className="rounded-[1.75rem] border border-white/20 bg-white/10 p-2 text-ink-900 shadow-[0_30px_70px_-30px_rgba(6,10,35,0.95)] backdrop-blur-xl">
            <div className="rounded-[1.4rem] border-2 border-brand-100 bg-white p-6 text-center sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Certificate of Completion</p>
              <p className="mt-4 text-sm text-ink-500">This certifies that</p>
              <p className="mt-1 font-display text-2xl font-bold">Your Name</p>
              <p className="mt-3 text-sm text-ink-500">has successfully completed the</p>
              <p className="mt-1 font-display text-lg font-bold text-brand-700">{course.title}</p>
              <div className="mt-6 flex items-center justify-between gap-4 text-xs text-ink-500">
                <span>{site.name}, Jalandhar</span>
                <Award className="size-10 text-accent-500" />
                <span>ID: TC-AI-0000</span>
              </div>
            </div>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {aiCourseCommon.placement.map((p, i) => (
              <li key={p.title} data-reveal="up" style={delay(i)}>
                <div className="glass-dark h-full !rounded-2xl p-5 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.1]">
                  <Icon name={p.icon} className="size-6 text-accent-400" />
                  <h3 className="mt-3 font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CourseSection>
  );
}
