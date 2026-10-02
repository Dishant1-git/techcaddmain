import { ArrowRight } from "lucide-react";
import { delay } from "@/components/ui/SectionHeading";

/** Horizontal labelled flow: Research → Strategy → Content → Automation → Analytics → Optimization. */
export function WorkflowStrip({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-3">
      {steps.map((s, i) => (
        <div key={s.title} className="flex items-center gap-3">
          <div data-reveal="up" style={delay(i)} className="card card-hover w-44 shrink-0 p-5 text-center sm:w-52">
            <span className="font-display text-2xl font-extrabold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 font-bold text-ink-900">{s.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{s.text}</p>
          </div>
          {i < steps.length - 1 && <ArrowRight className="hidden size-5 shrink-0 text-brand-300 lg:block" aria-hidden />}
        </div>
      ))}
    </div>
  );
}
