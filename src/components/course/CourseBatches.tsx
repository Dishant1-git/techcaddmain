import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { aiCourseCommon, branches, site, type AiCourse } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "./CourseSection";

export function CourseBatches({ course }: { course: AiCourse }) {
  const facts = [
    { label: "Duration", value: course.duration },
    { label: "Learning time", value: course.hours },
    { label: "Level", value: course.level },
    { label: "Projects", value: `${course.projects}+` },
  ];

  return (
    <CourseSection id="batches" className="bg-soft" decor={<SoftBlobs />}>
      <SectionHeading
        id="batches-title"
        eyebrow="Duration, Mode & Batches"
        title={<>Pick a batch that <span className="text-gradient">fits your day</span></>}
        text="Same curriculum, same mentors — choose classroom, live online or a mix of both."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal="up" className="glass relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-accent-500" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Next batch</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-ink-900">{aiCourseCommon.nextBatch}</p>
          <p className="mt-2 text-sm text-ink-500">Classroom and live online seats are limited per batch.</p>

          <dl className="mt-6 soft-inset grid grid-cols-2 gap-4 p-5">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse">
                <dd className="font-semibold text-ink-900">{f.value}</dd>
                <dt className="text-xs text-ink-500">{f.label}</dt>
              </div>
            ))}
          </dl>

          <h3 className="mt-6 font-bold text-ink-900">Included with every batch</h3>
          <ul className="mt-3 space-y-2.5">
            {aiCourseCommon.includes.map((i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink-700"><CheckCircle2 className="size-5 shrink-0 text-brand-600" aria-hidden /> {i}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#enrol" className="btn-primary">Reserve Your Seat</Link>
            <a href={site.phoneHref} className="btn-ghost"><Phone className="size-4" aria-hidden /> Call {site.phone}</a>
          </div>
        </div>

        <div className="min-w-0">
          <h3 data-reveal="up" className="text-lg font-bold text-ink-900">Batch timings</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {aiCourseCommon.batches.map((b, i) => (
              <li key={b.label} data-reveal="up" style={delay(i)}>
                <div className="glass glass-hover h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="soft-icon size-10 rounded-xl"><Clock className="size-5" aria-hidden /></span>
                    <p className="font-bold text-ink-900">{b.label}</p>
                  </div>
                  <p className="mt-3 text-sm text-ink-700">{b.time}</p>
                  <span className="mt-3 inline-flex rounded-full soft-inset px-3 py-1 text-xs font-semibold text-brand-700">{b.mode}</span>
                </div>
              </li>
            ))}
          </ul>

          <h3 data-reveal="up" className="mt-10 text-lg font-bold text-ink-900">Where you can learn</h3>
          <p data-reveal="up" className="mt-1 text-sm text-ink-500">
            Classroom batches at every branch · live online batches for Haryana, Himachal, J&amp;K and Delhi NCR.
          </p>
          <ul data-reveal="up" className="mt-4 flex flex-wrap gap-2">
            {branches.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/branches/${b.slug}`}
                  className="inline-flex items-center gap-1.5 glass-sm !rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-[color,box-shadow,background-color] hover:bg-white/90 hover:text-brand-700 hover:shadow-soft active:shadow-soft-inset"
                >
                  <MapPin className="size-3.5" aria-hidden /> {b.city}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ink-500">Timings can vary by branch — a counsellor will confirm the batch that suits you.</p>
        </div>
      </div>
    </CourseSection>
  );
}
