import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as simpleIcons from "simple-icons";
import { techStack } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechOrbit, type OrbitTab } from "./TechOrbit";

type SimpleIcon = { path: string; hex: string };
const iconSet = simpleIcons as unknown as Record<string, SimpleIcon | undefined>;

/** Resolve simple-icons paths on the server so only the logos we use reach the client. */
const tabs: OrbitTab[] = techStack.map((cat) => ({
  id: cat.id,
  label: cat.label,
  items: cat.items.map((t) => {
    const icon = t.icon ? iconSet[t.icon] : undefined;
    return icon
      ? { name: t.name, path: icon.path, color: `#${icon.hex}` }
      : { name: t.name, mono: t.mono ?? t.name.slice(0, 2), color: t.color ?? "#1d53f0" };
  }),
}));

export function Technologies() {
  return (
    <section id="technologies" className="section defer-render overflow-hidden bg-brand-50/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tools & Technologies"
          title={<>Technologies We <span className="text-gradient">Master</span></>}
          text="From AI to Cloud, from Web Development to CAD/CAM — we train you on the latest, most in-demand technologies employers hire for."
        />
        <div className="mt-6 flex justify-center" data-reveal="up">
          <Link href="/#courses" className="btn-brand group !py-2.5 !pl-6 !pr-2.5">
            Explore all technologies
            <span className="grid size-8 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        </div>
        <TechOrbit tabs={tabs} />
      </div>
    </section>
  );
}
