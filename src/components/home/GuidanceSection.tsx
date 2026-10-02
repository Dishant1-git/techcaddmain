import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { guidanceSummaries } from "@/data/guidance";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/components/ui/SectionHeading";

/**
 * Home preview of the Resources ▾ Guidance offerings. Full detail lives at /guidance/[topic].
 * `headingLevel="h1"` + `showViewAll={false}` when this is the page's own top section (the
 * /guidance hub itself — no point linking "View All Guidance" to the page you're already on);
 * defaults suit embedding partway down the home page, which already has its own h1.
 * Layout: sticky intro (left) + 2×2 numbered cards (right); the first card (free counselling) is the navy feature card.
 */
export function GuidanceSection({
  headingLevel = "h2",
  showViewAll = true,
}: { headingLevel?: "h1" | "h2"; showViewAll?: boolean }) {
  const Heading = headingLevel;
  return (
    <section id="guidance" className="section relative isolate bg-brand-50/50">
      <div className="bg-grid-light absolute inset-0 -z-10 opacity-50" aria-hidden />

      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p data-reveal="up" className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              <span className="h-px w-8 bg-brand-600" aria-hidden /> Guidance
            </p>
            <Heading data-reveal="up" style={delay(1)} className="mt-5 text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl lg:text-5xl">
              Talk to people who&apos;ve <span className="text-gradient">done it</span>
            </Heading>
            <p data-reveal="up" style={delay(2)} className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Not sure which course, which role or how to start earning from a skill? Pick a guidance path and speak to
              someone who has walked it.
            </p>
            {showViewAll && (
              <div data-reveal="up" style={delay(3)} className="mt-8">
                <Link href="/guidance" className="btn-brand">View all guidance <ArrowRight className="size-4" aria-hidden /></Link>
              </div>
            )}
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {guidanceSummaries.map((g, i) => {
            const dark = i === 0;
            return (
              <li key={g.slug} data-reveal="up" style={delay(i % 2)}>
                <Link
                  href={`/guidance/${g.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 sm:p-8 ${
                    dark
                      ? "on-dark border-transparent bg-ink-950 text-white hover:shadow-[0_30px_60px_-25px_rgba(5,11,31,0.7)]"
                      : "border-ink-950/10 bg-white hover:border-brand-200 hover:shadow-[0_24px_48px_-20px_rgba(29,83,240,0.35)]"
                  }`}
                >
                  {dark && <span className="bg-grid absolute inset-0 opacity-50" aria-hidden />}
                  {dark && <span className="absolute -right-16 -top-20 size-56 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden />

                  <div className="relative flex items-center justify-between">
                    <span className={`grid size-12 place-items-center rounded-xl border transition-colors duration-300 ${
                      dark ? "border-white/15 bg-white/10 text-white" : "border-ink-950/10 bg-brand-50 text-brand-700 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white"
                    }`}>
                      <Icon name={g.icon} className="size-6" />
                    </span>
                    <span className={`font-mono text-xs font-bold ${dark ? "text-accent-400" : "text-ink-300"}`}>
                      {dark ? "FREE · " : ""}{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={`relative mt-7 text-xl font-bold sm:text-2xl ${dark ? "" : "text-ink-900"}`}>{g.navLabel}</h3>
                  <p className={`relative mt-3 leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>{g.cardDescription}</p>

                  <div className="relative mt-auto pt-7">
                  <div className={`flex items-center justify-between gap-4 border-t pt-5 text-sm ${dark ? "border-white/15" : "border-ink-950/10"}`}>
                    <span className={`font-medium ${dark ? "text-brand-200" : "text-ink-700"}`}>{g.hubDescription}</span>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
                      dark ? "bg-accent-500 text-white" : "bg-ink-950/5 text-ink-700 group-hover:bg-brand-600 group-hover:text-white"
                    }`}>
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
