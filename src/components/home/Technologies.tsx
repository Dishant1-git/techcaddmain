import { technologies } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Technologies() {
  const half = Math.ceil(technologies.length / 2);
  const chip = (t: string) => (
    <span key={t} className="whitespace-nowrap rounded-full border border-ink-900/10 bg-white px-6 py-3 font-semibold text-ink-700 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-700">
      {t}
    </span>
  );
  return (
    <section id="technologies" className="section overflow-hidden bg-brand-50/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tools & Technologies"
          title={<>Master the <span className="text-gradient">tools the industry uses</span></>}
          text="From AI frameworks to cloud platforms and engineering design software — learn on the exact stack employers hire for."
        />
      </div>
      <div className="mt-14 space-y-4">
        <Marquee duration="45s">{technologies.slice(0, half).map(chip)}</Marquee>
        <Marquee duration="45s" reverse>{technologies.slice(half).map(chip)}</Marquee>
      </div>
    </section>
  );
}
