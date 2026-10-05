import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, FlaskConical, GraduationCap, MonitorPlay, Phone, Users, type LucideIcon } from "lucide-react";
import { institutions, partnerFormats, partnerHero, partnerPhone, partnerSteps } from "@/data/college-partners";
import { site } from "@/data/site";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "College Partnerships — Campus Workshops & Placement Drives in Punjab | techcadd",
  description: "Campus workshops, industrial training, faculty development and placement drives with colleges and universities across Punjab.",
  alternates: { canonical: "/college-partnerships" },
};

const icons: Record<string, LucideIcon> = { MonitorPlay, GraduationCap, Briefcase, Users, FlaskConical, BadgeCheck };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "College Partnerships", item: `${site.url}/college-partnerships` },
  ],
};

export default function CollegePartnershipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — same dark treatment as the home hero / inner-page heroes */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-32 bottom-0 -z-10 size-[26rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">College Partnerships</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">{partnerHero.eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Bringing <span className="text-gradient">industry practice</span> onto your campus.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">{partnerHero.text}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={partnerPhone.href} className="btn-primary">Call {partnerPhone.label}</a>
            <Link href="/#demo" className="btn-ghost-dark">Send an enquiry</Link>
          </div>
          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerHero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <dd className="text-3xl font-extrabold text-white lg:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-sm text-ink-300">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Institutions */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Institutions we work with"
            title={<>Colleges and universities <span className="text-gradient">across Punjab</span></>}
            text="Workshops, industrial training and placement activity run with departments at institutions from Amritsar and Jalandhar down to Landran, Kharar and Lalru."
          />
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {institutions.map((c, i) => (
              <li key={c.name} data-reveal="up" style={delay(i % 4, 70)} className="card card-hover flex items-center gap-4 p-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-600 to-brand-800 text-sm font-extrabold text-white shadow-lg shadow-brand-600/25">
                  {c.short}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold leading-snug text-ink-900">{c.name}</span>
                  <span className="mt-0.5 block text-xs text-ink-500">{c.place}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formats */}
      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we run"
            title={<>Six ways we <span className="text-gradient">work with institutions</span></>}
            text="Pick one format or combine them across semesters — each is scoped with your department."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerFormats.map((f, i) => {
              const Icon = icons[f.icon];
              return (
                <div key={f.title} data-reveal="up" style={delay(i % 3)} className="card card-hover group p-7">
                  <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-accent-400 to-accent-600 text-white shadow-lg shadow-accent-500/30">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-500">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — same numbered-circle pattern as home HowItWorks */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title={<>From first call to <span className="text-gradient">a running programme</span></>}
          />
          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-linear-to-r from-transparent via-brand-300 to-transparent lg:block" aria-hidden />
            {partnerSteps.map((s, i) => (
              <div key={s.title} data-reveal="up" style={delay(i, 140)} className="relative text-center">
                <div className="relative mx-auto grid size-20 place-items-center rounded-full border-8 border-white bg-brand-600 text-white shadow-xl shadow-brand-600/30">
                  <span className="font-display text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-500">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — home DemoCta look: light gradient, amber accent, blue call pill */}
      <section className="section relative isolate overflow-hidden bg-linear-to-b from-white via-brand-100/70 to-brand-50">
        <div className="bg-grid-light absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="container-x text-center">
          <p data-reveal="up" className="flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
            <span className="h-px w-9 bg-ink-300" aria-hidden /> Partner with us
          </p>
          <h2 data-reveal="up" style={delay(1)} className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            Tell us what your <span className="text-amber-400">students</span> need next.
          </h2>
          <p data-reveal="up" style={delay(2)} className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-500">
            Send us your department, student numbers and the semester you are planning for, and we will come back with a written proposal covering scope, duration, delivery mode and cost.
          </p>
          <div data-reveal="up" style={delay(3)} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={partnerPhone.href}
              className="inline-flex items-center gap-5 rounded-full bg-linear-to-r from-brand-500 to-brand-700 py-3 pl-4 pr-10 text-left text-white shadow-[0_20px_40px_-12px_rgba(29,83,240,0.55)] transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-white/30 bg-white/20">
                <Phone className="size-6 fill-white" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Call now</span>
                <span className="font-display text-2xl font-bold">{partnerPhone.label}</span>
              </span>
            </a>
            <Link href="/#demo" className="btn-ghost">Send an enquiry <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
