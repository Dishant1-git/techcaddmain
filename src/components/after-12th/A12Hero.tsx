import type { CSSProperties } from "react";
import { ArrowRight, Award, Clock, GraduationCap, MessageCircle, MonitorPlay, Star } from "lucide-react";
import { site } from "@/data/site";
import { a12Common, type A12Page } from "@/data/after-12th";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumb } from "@/components/course/Breadcrumb";

/** On-load entrance (not scroll): CSS keyframe with a delay; off for reduced motion. */
const enter = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;
const enterCls = "motion-safe:animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]";

const R = 86;
const C = 2 * Math.PI * R;

/**
 * Neumorphic hero on bg-neu. Left: copy, rating, CTAs. Right: a raised "duration dial" — a pressed disc whose ring
 * shows this program's length on the 9-month roadmap — over four inset fact wells (duration · mode · eligibility ·
 * includes). H1 + pitch are LCP: no animation on them. No pricing.
 */
export function A12Hero({ page }: { page: A12Page }) {
  const { tier, subject } = page;
  const facts = [
    { icon: Clock, label: "Duration", value: `${tier.months} months` },
    { icon: MonitorPlay, ...a12Common.heroFacts[0] },
    { icon: GraduationCap, ...a12Common.heroFacts[1] },
    { icon: Award, label: "Includes", value: tier.includes },
  ];
  return (
    <section id="a12-hero" className="relative isolate overflow-hidden bg-neu pb-16 pt-10 md:pb-24 md:pt-14">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-brand-300/30 blur-[120px]" />
      <div className="container-x">
        <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "After 12th", href: "/after-12th" }, { label: page.label }]} />

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className={`neu-sm inline-flex flex-wrap items-center gap-2 !rounded-full px-4 py-2 text-sm font-semibold text-ink-900 ${enterCls}`}>
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
              </span>
              After 12th · {tier.months}-month track
              <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-bold text-white">{tier.badge}</span>
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-balance text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              {page.title} <span className="text-brand-700">in Jalandhar</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">{subject.pitch}</p>

            <p className={`mt-7 flex flex-wrap items-center gap-3 text-sm text-ink-700 ${enterCls}`} style={enter(100)}>
              <span className="neu-inset flex items-center gap-2 !rounded-full px-4 py-2">
                <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent-500 text-accent-500" />)}</span>
                <strong className="text-ink-900">{site.rating.score}</strong> on Google
              </span>
              {site.rating.reviews} reviews
            </p>

            <div className={`mt-9 flex flex-wrap gap-4 ${enterCls}`} style={enter(200)}>
              <a href="#enquire" className="btn-neu-primary tr-shine !px-7 !py-3.5 text-base">
                Book a Free Demo <ArrowRight className="size-5" aria-hidden />
              </a>
              <a
                href={waLink(`Hi TechCADD, please share details of the ${page.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neu !px-7 !py-3.5 text-base"
              >
                <MessageCircle className="size-5" aria-hidden /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Duration dial */}
          <div className={enterCls} style={enter(160)}>
            <div className="neu p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="neu-icon-brand size-14"><Icon name={subject.icon} className="size-7" /></span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{tier.suffix}</p>
                  <p className="truncate font-display text-lg font-bold text-ink-900">{subject.name}</p>
                </div>
              </div>

              <div className="neu-inset relative mx-auto mt-7 grid size-56 place-items-center !rounded-full">
                <svg viewBox="0 0 200 200" className="absolute inset-0 size-full -rotate-90" role="img" aria-label={`${tier.months} of 9 roadmap months`}>
                  <defs>
                    <linearGradient id="a12-dial" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="var(--color-brand-500)" />
                      <stop offset="1" stopColor="var(--color-accent-400)" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r={R} fill="none" stroke="#d3dae7" strokeWidth="10" />
                  <circle
                    cx="100" cy="100" r={R} fill="none" stroke="url(#a12-dial)" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={C} strokeDashoffset={C * (1 - tier.months / 9)}
                    className="a12-dial" style={{ "--a12-c": C } as CSSProperties}
                  />
                </svg>
                <div className="neu grid size-36 place-items-center !rounded-full text-center">
                  <p>
                    <span className="block font-display text-5xl font-extrabold leading-none text-ink-900">{tier.months}</span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">months</span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-center text-sm font-medium text-ink-700">{tier.text}</p>

              <dl className="mt-6 grid grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="neu-inset flex flex-col-reverse p-4">
                    <dd className="mt-1 text-sm font-bold leading-snug text-ink-900">{f.value}</dd>
                    <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      <f.icon className="size-3.5 text-brand-600" aria-hidden /> {f.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
