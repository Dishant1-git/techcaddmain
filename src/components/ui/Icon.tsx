import {
  Award, BadgeCheck, BookOpen, Box, BrainCircuit, Briefcase, Calendar, ChartBar, Clock, Cloud,
  Code2, Database, Eye, GraduationCap, Laptop, Layers, Megaphone, MessageSquare, PenTool, Rocket,
  Search, ShieldCheck, Sparkles, Target, Users, Workflow,
  Bug, ChartLine, Coffee, Cpu, FileCode, Globe, Lock, Network, Palette, Server, Share2, ShoppingCart, Smartphone, Terminal,
  type LucideIcon,
} from "lucide-react";

/** Maps icon names used in src/data/site.ts to components. Add new icons here. */
const icons: Record<string, LucideIcon> = {
  Award, BadgeCheck, BookOpen, Box, BrainCircuit, Briefcase, Calendar, ChartBar, Clock, Cloud,
  Code2, Database, Eye, GraduationCap, Laptop, Layers, Megaphone, MessageSquare, PenTool, Rocket,
  Search, ShieldCheck, Sparkles, Target, Users, Workflow,
  Bug, ChartLine, Coffee, Cpu, FileCode, Globe, Lock, Network, Palette, Server, Share2, ShoppingCart, Smartphone, Terminal,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden />;
}
