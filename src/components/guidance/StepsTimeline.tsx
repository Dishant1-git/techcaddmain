import type { Step } from "@/data/guidance";
import { Icon } from "@/components/ui/Icon";
import { delay } from "@/components/ui/SectionHeading";

/** Numbered step timeline — same visual language as the home HowItWorks section. */
export function StepsTimeline({ steps }: { steps: Step[] }) {
  const cols = steps.length >= 5 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid gap-x-8 gap-y-14 ${cols}`}>
      {steps.map((s, i) => (
        <div key={s.title} data-reveal="up" style={delay(i, 120)} className="relative text-center">
          <div className="relative mx-auto grid size-20 place-items-center rounded-full border-8 border-white bg-brand-600 text-white shadow-xl shadow-brand-600/30">
            <Icon name={s.icon} className="size-7" />
            <span className="absolute -right-2 -top-2 grid size-8 place-items-center rounded-full bg-accent-500 font-display text-xs font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-500">{s.text}</p>
        </div>
      ))}
    </div>
  );
}
