import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import type { Stat } from "@/data/guidance";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { delay } from "@/components/ui/SectionHeading";

type CTA = { label: string; href: string };

/** Shared dark hero shell for every /guidance/* landing page. */
export function GuidanceHero({
  breadcrumb,
  icon,
  eyebrow,
  titleLead,
  titleHighlight,
  titleTail,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  stats,
}: {
  breadcrumb: string;
  icon: string;
  eyebrow: string;
  titleLead: string;
  titleHighlight: string;
  titleTail?: string;
  subtitle: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
  stats?: Stat[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden />
      <div className="absolute -right-24 bottom-0 -z-10 size-[24rem] rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-300">
          <Link href="/" className="hover:text-white">Home</Link> / <Link href="/guidance" className="hover:text-white">Guidance</Link> / <span className="text-white">{breadcrumb}</span>
        </nav>
        <span className="eyebrow eyebrow-dark mt-8">
          <Icon name={icon} className="size-3.5" /> {eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          {titleLead}
          <span className="text-gradient">{titleHighlight}</span>
          {titleTail}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-300">{subtitle}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href={ctaPrimary.href} className="btn-primary">
            {ctaPrimary.label} <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link href={ctaSecondary.href} className="btn-ghost-dark">
            {ctaSecondary.label}
          </Link>
          <a href={site.phoneHref} className="btn-ghost-dark">
            <Phone className="size-4" aria-hidden /> {site.phone}
          </a>
        </div>

        {stats && (
          <div className="mt-14 grid max-w-3xl grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s, i) => (
              <div key={s.label} data-reveal="up" style={delay(i)} className="p-5 text-center sm:p-7">
                <p className="font-display text-2xl font-extrabold sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-1.5 text-xs text-ink-300 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
