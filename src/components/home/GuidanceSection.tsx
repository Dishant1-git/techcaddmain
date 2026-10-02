import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guidanceSummaries } from "@/data/guidance";
import { ServiceCard } from "@/components/guidance/ServiceCard";

/**
 * Home preview of the Resources ▾ Guidance offerings. Full detail lives at /guidance/[topic].
 * `headingLevel="h1"` + `showViewAll={false}` when this is the page's own top section (the
 * /guidance hub itself — no point linking "View All Guidance" to the page you're already on);
 * defaults suit embedding partway down the home page, which already has its own h1.
 */
export function GuidanceSection({
  headingLevel = "h2",
  showViewAll = true,
}: { headingLevel?: "h1" | "h2"; showViewAll?: boolean }) {
  const Heading = headingLevel;
  return (
    <section id="guidance" className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span data-reveal="up" className="font-display text-sm font-bold tracking-[0.3em] text-brand-500">02</span>
          <Heading data-reveal="up" style={{ "--d": "80ms" } as CSSProperties} className="mt-3 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Guidance</span>
          </Heading>
          <p data-reveal="up" style={{ "--d": "160ms" } as CSSProperties} className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            Talk to people who&apos;ve done it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guidanceSummaries.map((g, i) => (
            <ServiceCard key={g.slug} index={i} icon={g.icon} title={g.navLabel} text={g.cardDescription} href={`/guidance/${g.slug}`} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link href="/guidance" className="btn-ghost">
              View All Guidance <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
