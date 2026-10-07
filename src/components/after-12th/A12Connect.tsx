import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import type { A12Page } from "@/data/after-12th";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { CourseSection, SoftBlobs } from "@/components/course/CourseSection";
import { FaqSearch } from "@/components/training/FaqSearch";
import { TrEnquiryForm } from "@/components/training/TrEnquiryForm";

/** Popular courses — six neumorphic program cards (other durations of this subject first). */
export function A12Related({ pages }: { pages: A12Page[] }) {
  if (pages.length === 0) return null;
  return (
    <CourseSection id="related" overflow="overflow-x-clip" className="defer-render bg-neu">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading id="related-title" align="left" eyebrow="Explore more" title={<>Popular <span className="text-brand-700">After 12th courses</span></>} />
        <Link href="/after-12th" className="btn-neu">All After 12th programs <ArrowRight className="size-4" aria-hidden /></Link>
      </div>
      <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((p) => (
          <li key={p.slug} className="extrude">
            <A12Card page={p} />
          </li>
        ))}
      </ul>
    </CourseSection>
  );
}

/** Program card (related grid + /after-12th hub). Whole card is one link (stretched ::after). Must sit on bg-neu. */
export function A12Card({ page, headingLevel: H = "h3" }: { page: A12Page; headingLevel?: "h2" | "h3" }) {
  return (
    <article className="neu neu-hover group relative flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="neu-icon size-14 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"><Icon name={page.subject.icon} className="size-6" /></span>
        <span className="neu-inset !rounded-full px-3.5 py-1.5 text-xs font-bold text-brand-700">{page.tier.months} months</span>
      </div>
      <H className="mt-5 text-lg font-bold leading-snug text-ink-900">
        <Link href={`/after-12th/${page.slug}`} className="after:absolute after:inset-0 after:rounded-[1.75rem] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand-600">
          {page.label}
        </Link>
      </H>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{page.subject.pitch}</p>
      <p className="mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-ink-700">{page.tier.badge}</span>
        <span className="flex items-center gap-1 font-semibold text-brand-700">
          View program <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </p>
    </article>
  );
}

/** FAQ — searchable soft accordion; the page emits the same list as FAQPage JSON-LD. */
export function A12Faq({ page, faqs }: { page: A12Page; faqs: { q: string; a: string }[] }) {
  return (
    <CourseSection id="faq" className="defer-render bg-white">
      <SectionHeading id="faq-title" eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient">questions</span></>} />
      <FaqSearch faqs={faqs} askHref={waLink(`Hi TechCADD, I have a question about the ${page.title}: `)} />
    </CourseSection>
  );
}

/** Contact — raised contact tiles + the soft 5-field form. */
export function A12Enquire({ page, courses }: { page: A12Page; courses: string[] }) {
  const contact = [
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with a counsellor", href: waLink(`Hi TechCADD, I'd like details of the ${page.title}.`) },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <CourseSection id="enquire" className="bg-soft" decor={<SoftBlobs />}>
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="a12-tilt-l lg:order-1">
          <TrEnquiryForm course={page.label} courses={courses} context={`After 12th, ${page.tier.months} months`} placeholder="e.g. I just finished 12th commerce — can I join the next batch?" />
        </div>
        <div className="lg:order-2">
          <SectionHeading id="enquire-title" align="left" eyebrow="Get in touch with us" title={<>Ask about the <span className="text-gradient">{page.label}</span></>} text="Tell us your stream and goal — we will suggest the right duration, share fee details and book your free demo." />
          <ul className="mt-9 space-y-4">
            {contact.map((c, i) => (
              <li key={c.label} data-reveal="right" style={delay(i)}>
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
      </div>
    </CourseSection>
  );
}

/** Closing CTA — a raised neumorphic slab with a pressed action well that scales up from the surface. */
export function A12Start({ page }: { page: A12Page }) {
  return (
    <section aria-labelledby="start-title" className="overflow-x-clip bg-neu py-20 md:py-24">
      <div className="container-x">
        <div className="a12-zoom">
          <div className="neu relative isolate overflow-hidden p-8 text-center sm:p-14">
            <span aria-hidden className="a12-drift pointer-events-none absolute inset-x-0 -top-10 -z-10 whitespace-nowrap font-display text-[9rem] font-extrabold leading-none text-white/60 sm:text-[13rem]">after 12th</span>
            <span className="eyebrow">Get started today</span>
            <h2 id="start-title" className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-balance text-ink-900 sm:text-4xl">
              Not sure if the {page.label} is the right fit?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-700">Sit in a free demo class first. If {page.subject.short} is not for you, a counsellor will help you find what is.</p>
            <div className="neu-inset mx-auto mt-9 flex w-fit max-w-full flex-col gap-3 !rounded-[1.75rem] p-3 sm:flex-row sm:!rounded-full">
              <a href="#enquire" className="btn-neu-primary tr-shine !px-7 !py-3.5 text-base">Book a Free Demo <ArrowRight className="size-5" aria-hidden /></a>
              <a href={site.phoneHref} className="btn-neu !px-7 !py-3.5 text-base"><Phone className="size-5" aria-hidden /> {site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
