import {
  Award, BadgeCheck, BookOpen, Box, BrainCircuit, Briefcase, Calendar, ChartBar, Clock, Cloud,
  Code2, GraduationCap, Laptop, Layers, Megaphone, PenTool, Rocket, ShieldCheck, Sparkles,
  Target, Users, type LucideIcon,
} from "lucide-react";

/** Maps icon names used in src/data/site.ts to components. Add new icons here. */
const icons: Record<string, LucideIcon> = {
  Award, BadgeCheck, BookOpen, Box, BrainCircuit, Briefcase, Calendar, ChartBar, Clock, Cloud,
  Code2, GraduationCap, Laptop, Layers, Megaphone, PenTool, Rocket, ShieldCheck, Sparkles,
  Target, Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden />;
}
