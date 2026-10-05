import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, MapPin, Tag } from "lucide-react";
import { events, findEvent, formatEventDate, isPast } from "@/data/events";
import { GuidanceCta } from "@/components/guidance/GuidanceCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const e = findEvent(slug);
  if (!e) return {};
  return { title: `${e.title} | techcadd`, description: e.summary, alternates: { canonical: `/events/${e.slug}` } };
}

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const e = findEvent(slug);
  if (!e) notFound();
  const others = events.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/events" className="hover:text-white">Events</Link> / <span className="text-white">{e.type}</span>
          </nav>
          <span className="eyebrow eyebrow-dark mt-8">{isPast(e.date) ? "Past event" : "Upcoming event"}</span>
          <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">{e.title}</h1>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-300">
            <li className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-accent-400" aria-hidden /><time dateTime={e.date}>{formatEventDate(e.date)}</time></li>
            <li className="inline-flex items-center gap-2"><MapPin className="size-4 text-accent-400" aria-hidden />{e.venue}</li>
            <li className="inline-flex items-center gap-2"><Tag className="size-4 text-accent-400" aria-hidden />{e.type}</li>
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-700">{e.summary}</p>
          <Link href="/events" className="btn-ghost mt-8 inline-flex">All events</Link>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section bg-brand-50/50">
          <div className="container-x">
            <h2 className="font-display text-2xl font-extrabold text-ink-900">More events</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/events/${o.slug}`} className="card card-hover group flex h-full flex-col p-6">
                    <time dateTime={o.date} className="text-xs text-brand-600">{formatEventDate(o.date)}</time>
                    <span className="mt-2 flex-1 font-display text-base font-bold text-ink-900 group-hover:text-brand-600">{o.title}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">Read more <ArrowRight className="size-3.5" aria-hidden /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <GuidanceCta
        title="Want a session at your college?"
        text="We run free seminars and hands-on workshops for colleges across Punjab. Talk to us about topics and dates."
        button="Request a Session"
      />
    </>
  );
}
