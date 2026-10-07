import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone, Quote, Star } from "lucide-react";
import { site, testimonials } from "@/data/site";
import { trainingCommon, type TrainingPage } from "@/data/training";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs, initials } from "@/components/course/CourseSection";
import { TrCarousel } from "./TrCarousel";
import { FaqSearch } from "./FaqSearch";
import { TrEnquiryForm } from "./TrEnquiryForm";

/** Student reviews — raised review cards in a snap carousel (sample testimonials from site.ts). */
export function TrReviews() {
  if (testimonials.length === 0) return null;
  return (
    <CourseSection id="reviews" overflow="overflow-x-clip" className="defer-render bg-white">
      <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
        <SectionHeading id="reviews-title" align="left" eyebrow="Student reviews" title={<>From people who <span className="text-gradient">trained here</span></>} />
        <p data-reveal="up" className="su-inset flex items-center gap-4 px-5 py-4">
          <span className="font-display text-4xl font-extrabold text-ink-900">{site.rating.score}</span>
          <span className="text-sm text-ink-700">
            <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent-400 text-accent-400" />)}</span>
            {site.rating.reviews} Google reviews
          </span>
        </p>
      </div>
      <div className="mt-6">
        <TrCarousel label="Student reviews" itemName="review">
          {testimonials.map((t) => (
            <li key={t.name} className="w-[86%] shrink-0 snap-start sm:w-[23rem]">
              <figure className="su-card su-hover flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="su-icon-light size-11"><Quote className="size-5" aria-hidden /></span>
                  <span className="flex" role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent-400 text-accent-400" aria-hidden />)}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink-700">“{t.text}”</blockquote>
                <figcaption className="su-inset mt-6 flex items-center gap-3 !rounded-2xl p-3">
                  <span aria-hidden className="su-icon size-10 !rounded-full text-sm font-bold">{initials(t.name)}</span>
                  <span>
                    <span className="block font-bold text-ink-900">{t.name}</span>
                    <span className="block text-sm text-ink-700">{t.role} · {t.city}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </TrCarousel>
      </div>
    </CourseSection>
  );
}

/** Learning modes — four raised cards; the icon well presses in on hover. */
export function TrModes() {
  return (
    <CourseSection id="modes" className="defer-render bg-soft" decor={<SoftBlobs flip />}>
      <SectionHeading id="modes-title" eyebrow="Learning modes" title={<>Learn the way <span className="text-gradient">that fits your week</span></>} text="Switch modes if your schedule changes — your projects and progress move with you." />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trainingCommon.modes.map((m, i) => (
          <li key={m.title} data-reveal="flip" style={delay(i, 110)}>
            <div className="su-card su-hover group h-full p-7 text-center">
              <span className="su-inset mx-auto grid size-20 place-items-center !rounded-full transition-shadow duration-300">
                <span className="su-icon size-12 !rounded-full transition-transform duration-300 group-hover:scale-110"><Icon name={m.icon} className="size-6" /></span>
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{m.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** FAQ — searchable soft accordion; the page emits the same list as FAQPage JSON-LD. */
export function TrFaq({ course, faqs }: { course: TrainingPage; faqs: { q: string; a: string }[] }) {
  return (
    <CourseSection id="faq" className="defer-render bg-white">
      <SectionHeading id="faq-title" eyebrow="FAQ" title={<>Questions about <span className="text-gradient">{course.navLabel}</span></>} />
      <FaqSearch faqs={faqs} askHref={waLink(`Hi TechCADD, I have a question about ${course.title}: `)} />
    </CourseSection>
  );
}

/** "Not sure?" banner — raised brand slab with a pressed action well. */
export function TrStart({ course }: { course: TrainingPage }) {
  return (
    <section aria-labelledby="start-title" className="overflow-x-clip bg-soft py-20 md:py-24">
      <div className="container-x">
        <div className="tr-unfold">
          <div className="on-dark relative isolate grid items-center gap-8 overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-500 via-brand-600 to-brand-800 p-8 text-white shadow-[var(--su-brand),0_40px_80px_-40px_rgb(29_83_240/0.7)] sm:p-12 lg:grid-cols-[1fr_auto]">
            <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-50" />
            <div aria-hidden className="tr-float absolute -right-12 -top-16 -z-10 size-64 rounded-full bg-white/15 blur-2xl" />
            <div aria-hidden className="tr-float absolute -bottom-24 left-1/4 -z-10 size-64 rounded-full bg-accent-400/30 blur-3xl [animation-delay:-3s]" />
            <div>
              <h2 id="start-title" className="max-w-2xl text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
                Not sure if {course.navLabel} is the right fit?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-brand-100">Sit in a free demo class or talk to a counsellor about your background and goals — no obligation.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-[1.5rem] bg-ink-950/20 p-3 shadow-[inset_3px_3px_10px_rgb(10_19_48/0.35),inset_-2px_-2px_8px_rgb(255_255_255/0.08)] sm:flex-row lg:flex-col">
              <a href="#enquire" className="su-btn-accent tr-shine !px-7 !py-3.5 text-base">Book a Free Demo <ArrowRight className="size-5" aria-hidden /></a>
              <a href={site.phoneHref} className="btn-ghost-dark !px-7 !py-3.5 text-base"><Phone className="size-5" aria-hidden /> {site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Related programs — carousel of six raised program cards (this program's `related` first). */
export function TrRelated({ courses }: { courses: TrainingPage[] }) {
  if (courses.length === 0) return null;
  return (
    <CourseSection id="related" overflow="overflow-x-clip" className="defer-render bg-white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading id="related-title" align="left" eyebrow="Keep exploring" title={<>Related <span className="text-gradient">training programs</span></>} />
        <Link href="/training" className="su-btn-ghost">All programs <ArrowRight className="size-4" aria-hidden /></Link>
      </div>
      <div className="mt-6">
        <TrCarousel label="Related training programs" itemName="program">
          {courses.map((c) => (
            <li key={c.slug} className="w-[86%] shrink-0 snap-start sm:w-[22rem]">
              <TrCard course={c} />
            </li>
          ))}
        </TrCarousel>
      </div>
    </CourseSection>
  );
}

/** Program card (related carousel + /training hub). Whole card is one link (stretched ::after). */
export function TrCard({ course, headingLevel: H = "h3" }: { course: TrainingPage; headingLevel?: "h2" | "h3" }) {
  return (
    <article className="su-card su-hover group relative flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="su-inset grid size-16 place-items-center !rounded-2xl">
          <span className="su-icon size-11 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon name={course.icon} className="size-5" /></span>
        </span>
        {course.tag && <span className="su-chip-brand">{course.tag}</span>}
      </div>
      <H className="mt-5 text-lg font-bold text-ink-900">
        <Link href={`/training/${course.slug}`} className="after:absolute after:inset-0 after:rounded-[1.75rem] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-500">
          {course.title}
        </Link>
      </H>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{course.tagline}</p>
      <p className="su-inset mt-5 flex items-center justify-between !rounded-2xl px-4 py-3 text-sm">
        <span className="font-medium text-ink-700">3 · 6 · 9 months</span>
        <span className="flex items-center gap-1 font-semibold text-brand-700">
          View program <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </p>
    </article>
  );
}

/** Enquiry — raised contact tiles + the soft 5-field form. */
export function TrEnquire({ course, courses }: { course: TrainingPage; courses: string[] }) {
  const contact = [
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with a counsellor", href: waLink(`Hi TechCADD, I'd like details of ${course.title}.`) },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <CourseSection id="enquire" className="bg-soft" decor={<SoftBlobs />}>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading id="enquire-title" align="left" eyebrow="Enquire now" title={<>Start your {course.navLabel} <span className="text-gradient">journey</span></>} text="Tell us a little about yourself — we'll suggest the right track, share fee and scholarship details and book your free demo." />
          <ul className="mt-10 space-y-4">
            {contact.map((c, i) => (
              <li key={c.label} data-reveal="left" style={delay(i)}>
                <a href={c.href} {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="su-card su-hover group flex items-center gap-4 !rounded-3xl p-4">
                  <span className="su-icon size-12"><c.icon className="size-5" aria-hidden /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{c.label}</span>
                    <span className="block truncate font-semibold text-ink-900">{c.value}</span>
                  </span>
                  <ArrowUpRight className="ml-auto size-5 shrink-0 text-ink-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <p data-reveal="up" className="su-inset mt-6 space-y-2 p-4 text-sm text-ink-700">
            <span className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />{site.address}</span>
            <span className="flex items-center gap-2"><Clock className="size-4 shrink-0 text-brand-600" aria-hidden />{site.hours}</span>
          </p>
        </div>
        <div className="tr-right">
          <TrEnquiryForm course={course.navLabel} courses={courses} />
        </div>
      </div>
    </CourseSection>
  );
}
