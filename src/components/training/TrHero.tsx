import type { CSSProperties } from "react";
import { ArrowRight, Award, Briefcase, CheckCircle2, FolderGit2, MessageCircle, MonitorPlay, Star } from "lucide-react";
import { site } from "@/data/site";
import { trainingCommon, type TrainingPage } from "@/data/training";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumb } from "@/components/course/Breadcrumb";
import { SoftBlobs } from "@/components/course/CourseSection";

/** On-load entrance (not scroll): CSS keyframe with a delay; off for reduced motion. */
const enter = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;
const enterCls = "motion-safe:animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]";
const factIcons = [MonitorPlay, FolderGit2, Award, Briefcase];

/**
 * Soft UI Evolution hero on bg-soft. Left: copy + CTAs + rating. Right: a raised "program console" card — pressed
 * roadmap well (phase rows with depth bars) + four raised fact tiles — with two floating soft chips.
 * H1 + tagline are LCP: no animation on them. No pricing.
 */
export function TrHero({ course }: { course: TrainingPage }) {
  return (
    <section id="tr-hero" className="relative isolate overflow-hidden bg-soft pb-16 pt-10 md:pb-24 md:pt-14">
      <SoftBlobs />
      <div className="container-x">
        <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Internship & Training", href: "/training" }, { label: course.navLabel }]} />

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className={`flex flex-wrap items-center gap-2.5 ${enterCls}`}>
              <span className="su-chip !py-1.5 !text-brand-800">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
                </span>
                Admissions open · Internship &amp; Training
              </span>
              {course.tag && <span className="su-chip-brand">{course.tag}</span>}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-balance text-ink-900 sm:text-5xl lg:text-6xl">
              {course.title} <span className="text-gradient">in Jalandhar</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">{course.tagline}</p>

            <ul aria-label="Highlights" className={`mt-8 grid max-w-xl gap-3 sm:grid-cols-2 ${enterCls}`} style={enter(120)}>
              {trainingCommon.heroBadges.map((b) => (
                <li key={b} className="su-inset flex items-center gap-2.5 !rounded-2xl px-4 py-3 text-sm font-semibold text-ink-900">
                  <CheckCircle2 className="size-4 shrink-0 text-brand-600" aria-hidden /> {b}
                </li>
              ))}
            </ul>

            <div className={`mt-9 flex flex-wrap gap-4 ${enterCls}`} style={enter(220)}>
              <a href="#enquire" className="su-btn-accent tr-shine !px-7 !py-3.5 text-base">
                Book a Free Demo Class <ArrowRight className="size-5" aria-hidden />
              </a>
              <a
                href={waLink(`Hi TechCADD, please share details of ${course.title} (3/6/9-month tracks).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="su-btn-ghost !px-7 !py-3.5 text-base"
              >
                <MessageCircle className="size-5" aria-hidden /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Program console */}
          <div className={`relative ${enterCls}`} style={enter(180)}>
            <div className="su-card relative p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="su-icon size-14"><Icon name={course.icon} className="size-7" /></span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Program snapshot</p>
                  <p className="truncate font-display text-lg font-bold text-ink-900">{course.navLabel} · {course.level}</p>
                </div>
              </div>

              <ol aria-label="Roadmap" className="su-inset mt-6 space-y-4 p-4 sm:p-5">
                {course.phases.map((p, i) => (
                  <li key={p.title} className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-xs font-extrabold text-brand-700 shadow-[var(--su-raise-sm)]">{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-ink-900">{p.title}</span>
                      <span aria-hidden className="mt-1.5 block h-1.5 overflow-hidden rounded-full bg-white/80">
                        <span className="block h-full rounded-full bg-linear-to-r from-brand-500 to-accent-400" style={{ width: `${((i + 1) / course.phases.length) * 100}%` }} />
                      </span>
                    </span>
                  </li>
                ))}
              </ol>

              <dl className="mt-5 grid grid-cols-2 gap-3">
                {trainingCommon.heroFacts.map((f, i) => {
                  const I = factIcons[i] ?? Award;
                  return (
                    <div key={f.label} className="flex flex-col-reverse rounded-2xl border border-white/90 bg-linear-to-br from-white to-[#f3f6fc] p-4 shadow-[var(--su-raise-sm)]">
                      <dd className="mt-0.5 text-sm font-bold leading-snug text-ink-900">{f.value}</dd>
                      <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                        <I className="size-3.5 text-brand-600" aria-hidden /> {f.label}
                      </dt>
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* Floating soft chips (decorative; the same facts are stated elsewhere on the page). */}
            <p aria-hidden className="su-chip tr-float absolute -left-3 -top-5 !px-4 !py-2 !text-sm sm:-left-8">
              <Star className="size-4 fill-accent-400 text-accent-400" /> <strong className="text-ink-900">{site.rating.score}</strong> Google rating
            </p>
            <p aria-hidden className="su-chip tr-float absolute -bottom-5 -right-2 !px-4 !py-2 !text-sm [animation-delay:-3s] sm:-right-6">
              <Briefcase className="size-4 text-brand-600" /> Internship letter included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
