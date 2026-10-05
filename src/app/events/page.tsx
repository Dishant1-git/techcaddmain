import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { events, formatEventDate, isPast } from "@/data/events";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";
import { delay } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events — Seminars & Workshops at techcadd",
  description: "Hands-on seminars and workshops at the techcadd campus and at colleges across Punjab — most of them free, all taught by the people who run our courses.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Events</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">Events</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Seminars, workshops and <span className="text-gradient">the days we spend teaching</span> in public.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-300">
            Hands-on sessions at our campus and at colleges across Punjab — most of them free, all of them taught by the people who run our courses.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Events</p>
            <p className="text-xs text-ink-500">{events.length} events</p>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {events.map((e, i) => (
              <li key={e.slug} data-reveal="up" style={delay(i % 3)} className="flex">
                <article className="card card-hover relative flex flex-1 flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-linear-to-br from-brand-700 via-brand-800 to-ink-950">
                    <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-md">{e.type}</span>
                    {isPast(e.date) && <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-900">Past</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-brand-600">
                      <CalendarDays className="size-3.5" aria-hidden />
                      <time dateTime={e.date}>{formatEventDate(e.date)}</time>
                    </div>
                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink-900">
                      <Link href={`/events/${e.slug}`} className="after:absolute after:inset-0 hover:text-brand-600">{e.title}</Link>
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-500">{e.summary}</p>
                    <p className="mt-auto flex items-center gap-1.5 pt-5 text-xs text-ink-500"><MapPin className="size-3.5" aria-hidden />{e.venue}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GuidanceCta
        title="Want a session at your college?"
        text="We run free seminars and hands-on workshops for colleges across Punjab. Talk to us about topics and dates."
        button="Request a Session"
      />
    </>
  );
}
