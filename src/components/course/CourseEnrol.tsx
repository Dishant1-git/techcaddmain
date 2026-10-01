import { CheckCircle2, Phone } from "lucide-react";
import { site, type AiCourse } from "@/data/site";
import { delay } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "./EnquiryForm";

const perks = ["Free 1:1 career counselling", "Attend a live class before you pay", "Easy EMI & merit scholarships", "Weekday, weekend & online batches"];

/** Final CTA. Same look as the home DemoCta, but the form is pre-scoped to this course. */
export function CourseEnrol({ course }: { course: AiCourse }) {
  return (
    <section id="enrol" aria-labelledby="enrol-title" className="section on-dark relative scroll-mt-16 overflow-hidden bg-linear-to-br from-brand-700 via-brand-800 to-ink-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -right-20 -top-20 size-96 rounded-full bg-accent-500/25 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -left-16 hidden size-48 rounded-full border border-white/20 bg-white/10 shadow-glass-dark backdrop-blur-md animate-float lg:block" aria-hidden />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 id="enrol-title" data-reveal="up" style={delay(1)} className="text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
            Start your {course.navLabel} journey <span className="text-accent-400">this month.</span>
          </h2>
          <p data-reveal="up" style={delay(2)} className="mt-5 max-w-lg text-lg text-brand-100">
            Book a free demo class, meet your mentor and get a personalised learning plan — no commitment.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {perks.map((p, i) => (
              <li key={p} data-reveal="up" style={delay(i + 3, 70)} className="flex items-center gap-2.5 text-sm font-medium">
                <CheckCircle2 className="size-5 shrink-0 text-accent-400" aria-hidden /> {p}
              </li>
            ))}
          </ul>
          <a data-reveal="up" href={site.phoneHref} className="group mt-10 inline-flex items-center gap-4 rounded-2xl">
            <span className="soft-icon-accent size-14 rounded-full transition-transform duration-300 group-hover:scale-110 group-active:scale-95"><Phone className="size-6" aria-hidden /></span>
            <span>
              <span className="block text-sm text-brand-100">Prefer to talk? Call a counsellor</span>
              <span className="font-display text-2xl font-bold">{site.phone}</span>
            </span>
          </a>
        </div>
        <div data-reveal="right">
          <EnquiryForm course={course.title} />
        </div>
      </div>
    </section>
  );
}
