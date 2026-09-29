import { steps } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, delay } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section relative overflow-hidden bg-brand-50/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title={<>Your journey from <span className="text-gradient">enquiry to offer letter</span></>}
          text="A proven 4-step path followed by 50,000+ TechCADD alumni."
        />
        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-linear-to-r from-transparent via-brand-300 to-transparent lg:block" aria-hidden />
          {steps.map((s, i) => (
            <div key={s.title} data-reveal="up" style={delay(i, 140)} className="relative text-center">
              <div className="relative mx-auto grid size-20 place-items-center rounded-full border-8 border-white bg-brand-600 text-white shadow-xl shadow-brand-600/30">
                <Icon name={s.icon} className="size-7" />
                <span className="absolute -right-2 -top-2 grid size-8 place-items-center rounded-full bg-accent-500 font-display text-xs font-bold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-500">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
