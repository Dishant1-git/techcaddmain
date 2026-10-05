import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Briefcase, Clock, GraduationCap, Landmark, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { contactHero, mapEmbed, mapLink, nextSteps, supportDesks, trust } from "@/data/contact";
import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact techcadd Jalandhar | Batches, Fees & Free Demo Class",
  description: "Talk to a techcadd counsellor in Jalandhar about batches, fees and a free demo class. Call, WhatsApp, email or visit the campus near PIMS Hospital.",
  alternates: { canonical: "/contact" },
};

const icons: Record<string, LucideIcon> = { GraduationCap, Landmark, Briefcase, Building2 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
  ],
};

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Address", value: site.address, href: mapLink, cta: "Get directions" },
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref, cta: "Call now" },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, cta: "Send email" },
    { icon: Clock, label: "Office hours", value: site.hours },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-32 bottom-0 -z-10 size-[26rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Contact</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">{contactHero.eyebrow}</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Talk to a <span className="text-gradient">counsellor</span> in Jalandhar
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">{contactHero.text}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#enquiry" className="btn-primary">Book a free demo class</Link>
            <a href={site.phoneHref} className="btn-ghost-dark">Call {site.phone}</a>
          </div>
        </div>
      </section>

      {/* Support desks */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Support & Assistance"
            title={<>Get personalised support for your <span className="text-gradient">journey</span></>}
            text="Pick the desk that fits — every one reaches the same team on the same number."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportDesks.map((d, i) => {
              const Icon = icons[d.icon];
              return (
                <div key={d.title} data-reveal="up" style={delay(i)} className="card card-hover p-7">
                  <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/25">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{d.text}</p>
                </div>
              );
            })}
          </div>
          <div data-reveal="up" className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-brand"><Phone className="size-4" aria-hidden /> Call now</a>
            <a href={waLink("Hi techcadd, I'd like to know more about your courses.")} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle className="size-4" aria-hidden /> WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost"><Mail className="size-4" aria-hidden /> Email</a>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="relative isolate scroll-mt-24 overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
        <div className="absolute -right-32 -top-20 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.06] sm:text-5xl">
              Take the first step towards <span className="text-accent-400">your IT career</span> with techcadd
            </h2>
            <p className="mt-8 font-bold">What happens next?</p>
            <ol className="mt-4 space-y-3.5">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-brand-600 text-[11px] font-bold">{i + 1}</span>
                  <span className="text-sm leading-relaxed text-ink-300">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-ink-300">
              You can also call <a href={site.phoneHref} className="font-medium text-white underline underline-offset-2">{site.phone}</a> or write to{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-white underline underline-offset-2">{site.email}</a>.
            </p>
            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Trusted by learners across Punjab</p>
              <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/85">
                {trust.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Visit */}
      <section className="section bg-brand-50/50">
        <div className="container-x">
          <SectionHeading eyebrow="Visit us" title={<>Find us in <span className="text-gradient">Jalandhar</span></>} text="Drop in for a campus tour and a free demo class — no appointment needed during office hours." />
          <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div data-reveal="left" className="card overflow-hidden">
              <iframe
                src={mapEmbed}
                title="techcadd Jalandhar location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-80 w-full border-0 lg:h-[26rem]"
              />
            </div>
            <div data-reveal="right" className="grid gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="card p-5">
                  <d.icon className="size-5 text-brand-600" aria-hidden />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-500">{d.label}</p>
                  <p className="mt-1 text-sm text-ink-900">{d.value}</p>
                  {d.href && (
                    <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="link mt-2 inline-flex items-center gap-1 text-xs font-semibold">
                      {d.cta} <ArrowRight className="size-3" aria-hidden />
                    </a>
                  )}
                </div>
              ))}
              <a
                href={waLink("Hi techcadd, I'd like to know more about your courses.")}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex items-center gap-4 p-5 sm:col-span-2"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white"><MessageCircle className="size-6" aria-hidden /></span>
                <span>
                  <span className="block text-sm font-bold text-ink-900">Chat on WhatsApp</span>
                  <span className="block text-xs text-ink-500">Get instant replies during office hours</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
