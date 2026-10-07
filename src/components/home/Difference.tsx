import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { difference } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DifferenceStage } from "./DifferenceStage";

/**
 * How TechCADD differs: heading + an interactive "flip the switch" stage (DifferenceStage) that shows the same
 * student's CV after a typical institute vs after TechCADD. Icons are rendered here so the client stage stays light.
 */
export function Difference() {
  const rows = difference.rows.map((r) => ({ ...r, icon: <Icon name={r.icon} className="size-5" /> }));
  return (
    <section id="difference" className="section defer-render bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow={difference.eyebrow}
          title={<>Same student. Same course name. <span className="text-gradient">Two different CVs.</span></>}
          text={difference.text}
        />

        <div data-reveal="up" className="mt-12 lg:mt-16">
          <DifferenceStage rows={rows} cv={difference.cv} othersLabel={difference.othersLabel} usLabel={difference.usLabel} />
        </div>

        <div data-reveal="up" className="mx-auto mt-12 max-w-2xl text-center">
          <p className="leading-relaxed text-ink-700">{difference.verdict}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={difference.cta.href} className="btn-brand">
              {difference.cta.label} <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href="/#demo" className="btn-ghost">Book a Free Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
