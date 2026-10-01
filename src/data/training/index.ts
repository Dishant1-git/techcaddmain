/* ───────── Internship & Training pages (/training/[slug]) — one per tile in the "Internship & Training" dropdown ─────────
   Per-program content lives in ./programs-*.ts (typed by ./types.ts); shared blocks live here.
   Pricing and salary figures are intentionally NEVER shown. Stats and reviews are SAMPLE content — confirm before launch. */

import type { TrainingPage } from "./types";
import { trainingA } from "./programs-a";
import { trainingB } from "./programs-b";
import { trainingC } from "./programs-c";

export type { TrainingPage } from "./types";

export const trainingCommon = {
  /** Track selection under the hero — durations only, never prices. */
  tracks: [
    {
      name: "3-Month Training",
      months: 3,
      badge: "Fast track",
      text: "Core skills and guided projects for students on a short timeline or professionals upskilling.",
      points: ["Core modules & tools", "2 guided projects", "Training certificate"],
    },
    {
      name: "6-Month Industrial Training",
      months: 6,
      badge: "Most chosen",
      text: "University-approved industrial training with a live project, training report and internship letter.",
      points: ["Full syllabus + live project", "University report & letter", "Placement assistance"],
    },
    {
      name: "9-Month Diploma + Internship",
      months: 9,
      badge: "Job-ready",
      text: "Everything in the 6-month track plus advanced modules and an internship on real client work.",
      points: ["Advanced specialisation", "Internship with experience letter", "Priority placement support"],
    },
  ],
  /** Hero trust badges + the "at a glance" facts bar (reference: mode · projects · certificate · includes). */
  heroBadges: ["Live client projects", "Practitioner trainers", "Placement support", "Certificate + internship"],
  heroFacts: [
    { label: "Mode", value: "Classroom, online & 1-on-1" },
    { label: "Projects", value: "Live client work" },
    { label: "Certificate", value: "Industry recognised" },
    { label: "Includes", value: "Internship letter" },
  ],
  /** "Industry-ready training" section — what every track includes. */
  whatYouGet: [
    "Practical, lab-first learning in every class",
    "AI tools built into your daily workflow",
    "Live client projects you can show employers",
    "An internship letter on the 6 and 9-month tracks",
    "Small batches with same-day doubt clearing",
  ],
  /** Certification section — four things you leave with. */
  credentials: [
    { title: "Industry certificate", text: "Online-verifiable certificate listing your modules, projects and grade.", icon: "Award" },
    { title: "Internship letter", text: "Experience letter for your live-project internship, accepted for university credit.", icon: "Briefcase" },
    { title: "Portfolio of projects", text: "Four reviewed projects on GitHub or Behance that you can walk an interviewer through.", icon: "Layers" },
    { title: "Placement support", text: "Resume and portfolio review, mock interviews and referrals until you are hired.", icon: "BadgeCheck" },
  ],
  stats: [
    { value: 50000, suffix: "+", label: "Students trained since 2007" },
    { value: 4.9, suffix: "★", label: "Google rating", decimals: 1 },
    { value: 100, suffix: "%", label: "Practical, project-based" },
    { value: 500, suffix: "+", label: "Hiring partners" },
  ],
  certificates: [
    { title: "Training Certificate", text: "Online-verifiable certificate listing your modules, projects and grade.", tag: "Industry recognised" },
    { title: "Internship Letter", text: "Experience letter for your live-project internship — accepted for university training credit.", tag: "University accepted" },
  ],
  loop: [
    { title: "Understand the brief", text: "Every task starts like a real job: a brief, a deadline and a clear definition of done.", icon: "Eye" },
    { title: "Build with guidance", text: "You build it yourself in the lab while a mentor reviews your work and unblocks you.", icon: "Code2" },
    { title: "Present & defend", text: "Demo your work and answer questions — practice for interviews and client calls.", icon: "MessageSquare" },
  ],
  why: [
    { title: "Practising trainers", text: "Mentors who still ship real projects for clients.", icon: "Users" },
    { title: "Live project coursework", text: "Real briefs, not copy-paste sample projects.", icon: "Rocket" },
    { title: "Small batches", text: "Personal attention and same-day doubt clearing.", icon: "Target" },
    { title: "Internship included", text: "Longer tracks include an internship and experience letter.", icon: "Briefcase" },
    { title: "Placement support", text: "Resume, mock interviews and referrals to 500+ partners.", icon: "BadgeCheck" },
    { title: "Since 2007", text: "Nearly two decades of training students across North India.", icon: "Award" },
  ],
  comparison: [
    { feature: "Training style", us: "Hands-on labs every class", them: "Mostly theory & slides" },
    { feature: "Projects", us: "Live client briefs & capstone", them: "Sample projects only" },
    { feature: "Batch size", us: "Small batches", them: "Large classrooms" },
    { feature: "Trainer background", us: "Working industry professionals", them: "Full-time trainers only" },
    { feature: "Internship", us: "Included in longer tracks", them: "Rarely offered" },
    { feature: "Placement support", us: "Resume, mock interviews & referrals", them: "Job list on request" },
    { feature: "Doubt clearing", us: "Same day, 1:1 if needed", them: "Weekly, if at all" },
    { feature: "Certification", us: "Verifiable certificate + internship letter", them: "Paper certificate" },
  ],
  modes: [
    { title: "Classroom training", text: "Lab-based batches at our North India branches.", icon: "Laptop" },
    { title: "Online live classes", text: "Interactive live sessions with recordings for revision.", icon: "Globe" },
    { title: "Weekend batches", text: "Saturday–Sunday batches for college students and working people.", icon: "Calendar" },
    { title: "1-on-1 training", text: "Personal mentoring at your pace and schedule.", icon: "Users" },
  ],
  faqs: [
    { q: "Is placement guaranteed?", a: "No institute can honestly guarantee a job. We provide placement assistance — resume and portfolio reviews, mock interviews and referrals to 500+ hiring partners — and keep supporting you until you are placed." },
    { q: "How do I get fee and scholarship details?", a: "Book a free counselling session or message us on WhatsApp. A counsellor will share the current fee, EMI options and scholarships for your chosen track." },
    { q: "Can I attend a free demo class first?", a: "Yes. Book a free demo using the form on this page or call us. You can attend at any branch or join a live online class." },
  ],
};

export const trainingPages: TrainingPage[] = [...trainingA, ...trainingB, ...trainingC];
