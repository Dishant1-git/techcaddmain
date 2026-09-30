import Link from "next/link";
import { MessageCircle, Plus } from "lucide-react";
import { site, type AiCourse } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "./CourseSection";

/** Native <details> accordion (zero JS, find-in-page works); `.accordion` animates height where supported. */
export function CourseFaq({ course, faqs }: { course: AiCourse; faqs: { q: string; a: string }[] }) {
  return (
    <CourseSection id="faq" className="defer-render bg-soft" decor={<SoftBlobs />}>
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="FAQs"
            title={<>Questions about <span className="text-gradient">{course.navLabel}</span>?</>}
            text="Straight answers on eligibility, batches, certification and placements."
          />
          <div data-reveal="up" style={delay(3)} className="glass mt-8 p-6">
            <span className="soft-icon size-12"><MessageCircle className="size-5" aria-hidden /></span>
            <p className="mt-3 font-bold text-ink-900">Still have a question?</p>
            <p className="mt-1 text-sm text-ink-500">Counsellors are available {site.hours}.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-brand !py-2.5">Call {site.phone}</a>
              <Link href="#enrol" className="btn-glass !py-2.5">Send an Enquiry</Link>
            </div>
          </div>
        </div>
        {faqs.length > 0 ? (
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} data-reveal="up" style={delay(i, 60)} className="accordion glass group open:bg-white/85 open:shadow-soft-lg" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-[1.75rem] p-6 text-left font-semibold text-ink-900">
                  {f.q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-soft-sm transition-[rotate,background-color,box-shadow] duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white group-open:shadow-glow">
                    <Plus className="size-4" aria-hidden />
                  </span>
                </summary>
                <p className="-mt-2 px-6 pb-6 leading-relaxed text-ink-500">{f.a}</p>
              </details>
            ))}
          </div>
        ) : (
          <p className="glass p-8 text-ink-500">No FAQs yet for this course — <Link href="#enrol" className="link">ask us directly</Link>.</p>
        )}
      </div>
    </CourseSection>
  );
}
