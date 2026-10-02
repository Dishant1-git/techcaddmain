/* ───────── Course pages (/courses/[slug]) — one entry per link in the "Courses" nav dropdown ─────────
   Split out of site.ts because of size: per-course content lives in ./<group>.ts (typed by ./types.ts),
   group + shared content lives here. Pricing is intentionally NEVER shown on these pages.
   Mentors, stats and reviews are SAMPLE content — confirm with the client before launch. */

import { aiCourseCommon } from "../site";
import type { CourseGroupId, CoursePage } from "./types";
import { programmingCourses } from "./programming";
import { aiDataCourses } from "./ai-data";
import { marketingCourses } from "./marketing";
import { marketingMoreCourses } from "./marketing-b";
import { cyberCloudCourses } from "./cyber-cloud";
import { cyberCloudMoreCourses } from "./cyber-cloud-b";
import { moreCourses } from "./more";


export type CourseGroup = {
  id: CourseGroupId;
  title: string;
  /** Short line for the hub page. */
  text: string;
  icon: string;
  audience: { title: string; text: string; icon: string }[];
  mentor: { name: string; role: string; experience: string; students: string; bio: string; expertise: string[] };
};

export const courseGroups: CourseGroup[] = [
  {
    id: "programming",
    title: "Programming",
    text: "Core languages and full-stack engineering",
    icon: "Code2",
    audience: [
      { title: "10+2 & fresh graduates", text: "Start from zero and build a coding foundation employers trust.", icon: "GraduationCap" },
      { title: "B.Tech, BCA & MCA students", text: "Turn theory into projects for placements and industrial training.", icon: "BookOpen" },
      { title: "Career switchers", text: "Move into software from any background with guided, step-by-step labs.", icon: "Rocket" },
      { title: "Freelancers & founders", text: "Build and ship your own products and client websites.", icon: "Briefcase" },
    ],
    mentor: {
      name: "Rajat Malhotra",
      role: "Senior Full-Stack Mentor",
      experience: "10+ years",
      students: "3,000+",
      bio: "Has built web platforms for startups and export businesses across Punjab. Teaches with live coding and code reviews, so students learn how real teams write, test and ship software.",
      expertise: ["JavaScript & TypeScript", "React & Node.js", "Python", "Java", "System design"],
    },
  },
  {
    id: "ai-data",
    title: "AI & Data",
    text: "Models, analytics and decision intelligence",
    icon: "BrainCircuit",
    audience: [
      { title: "Commerce & science graduates", text: "Use data skills to move into analyst and business roles.", icon: "GraduationCap" },
      { title: "Engineering students", text: "Add machine learning and analytics to your degree and training.", icon: "Cpu" },
      { title: "Working professionals", text: "Automate reports and make data-driven decisions at work.", icon: "Briefcase" },
      { title: "Career switchers", text: "Excel users and fresh starters welcome — we build up step by step.", icon: "Rocket" },
    ],
    mentor: {
      name: "Dr. Neha Bansal",
      role: "Lead Data Science Mentor",
      experience: "11+ years",
      students: "2,500+",
      bio: "Worked on forecasting and analytics for retail and healthcare companies before teaching. Known for explaining statistics and ML with real Punjab business datasets.",
      expertise: ["Machine learning", "Python & SQL", "Power BI", "Statistics", "Deep learning"],
    },
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    text: "Growth, performance and commerce",
    icon: "Megaphone",
    audience: [
      { title: "Students after 12th", text: "Start a creative, in-demand career without a technical degree.", icon: "GraduationCap" },
      { title: "Business owners", text: "Grow your shop or brand online with ads, SEO and social media.", icon: "ShoppingCart" },
      { title: "Graduates & job seekers", text: "Get job-ready for agency, in-house and freelance marketing roles.", icon: "Briefcase" },
      { title: "Content creators", text: "Turn your content skills into measurable, paid campaigns.", icon: "Share2" },
    ],
    mentor: {
      name: "Simran Ahuja",
      role: "Performance Marketing Mentor",
      experience: "9+ years",
      students: "2,000+",
      bio: "Has managed ad accounts and SEO for brands, colleges and e-commerce stores across North India. Students work on live campaigns with real budgets, not just theory.",
      expertise: ["Google Ads", "Meta Ads", "SEO", "Analytics", "E-commerce"],
    },
  },
  {
    id: "cyber-cloud",
    title: "Cyber & Cloud",
    text: "Secure, resilient infrastructure",
    icon: "ShieldCheck",
    audience: [
      { title: "B.Tech, BCA & diploma students", text: "Build hands-on security and cloud skills for placements.", icon: "GraduationCap" },
      { title: "IT & network staff", text: "Upskill into cloud, DevOps and security roles.", icon: "Server" },
      { title: "Graduates switching careers", text: "Start with fundamentals — we teach Linux and networking first.", icon: "Rocket" },
      { title: "Certification aspirants", text: "Prepare for AWS, CEH and CompTIA-style exams with lab practice.", icon: "Award" },
    ],
    mentor: {
      name: "Vikram Rana",
      role: "Cybersecurity & Cloud Mentor",
      experience: "12+ years",
      students: "1,800+",
      bio: "Former network security engineer who has secured infrastructure for banks and IT firms. Runs every class as a lab — students attack, defend and deploy real systems.",
      expertise: ["Ethical hacking", "Network security", "AWS & Azure", "Linux", "DevOps"],
    },
  },
  {
    id: "more",
    title: "More Courses",
    text: "CADD, office, accounting and design",
    icon: "Layers",
    audience: [
      { title: "Students after 10th & 12th", text: "Pick up a practical, job-oriented skill alongside or after school.", icon: "GraduationCap" },
      { title: "Diploma, ITI & engineering students", text: "Add the design software your branch expects and complete industrial training.", icon: "BookOpen" },
      { title: "Job seekers & office staff", text: "Build the computer, accounting or design skills employers ask for first.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Manage your own accounts, drawings or creatives without depending on others.", icon: "Rocket" },
    ],
    mentor: {
      name: "Harjit Sandhu",
      role: "Senior CADD & Skills Mentor",
      experience: "14+ years",
      students: "4,000+",
      bio: "Leads the CADD, accounting and design faculty. Every topic is taught on real drawings, case files and client briefs, so students practise exactly what a workplace will hand them.",
      expertise: ["AutoCAD & Revit", "SolidWorks", "TallyPrime & GST", "Adobe Creative Suite", "MS Office"],
    },
  },
];

/** Shared by every course page. */
export const courseCommon = {
  /** Meta strip under the hero. */
  stats: [
    { value: 50000, suffix: "+", label: "Students trained" },
    { value: 4.9, suffix: "/5", label: "Google rating", decimals: 1 },
    { value: 80, suffix: "%", label: "Practical learning" },
    { value: 500, suffix: "+", label: "Hiring partners" },
  ],
  loop: [
    { title: "Understand", text: "Short concept sessions with live demos — every idea is shown before it is practised.", icon: "Eye" },
    { title: "Build", text: "Hands-on labs and a project at the end of every module, reviewed by your mentor.", icon: "Code2" },
    { title: "Present", text: "Explain your work in weekly demos — the same way you will in interviews.", icon: "MessageSquare" },
  ],
  why: [
    { title: "Industry mentors", text: "Taught by working professionals, not just trainers.", icon: "Users" },
    { title: "Small batches", text: "Personal attention and same-day doubt support.", icon: "Target" },
    { title: "Live projects", text: "Real client-style projects for a portfolio that stands out.", icon: "Rocket" },
    { title: "Placement support", text: "Resume, mock interviews and referrals to 500+ partners.", icon: "Briefcase" },
    { title: "Flexible batches", text: "Weekday, weekend and live online options.", icon: "Calendar" },
    { title: "Verifiable certificate", text: "Online-verifiable certificate with your projects listed.", icon: "Award" },
  ],
  /** Table 1 — TechCADD vs typical institute. */
  comparison: [
    { feature: "Learning style", us: "80% practical labs & projects", them: "Mostly theory & slides" },
    { feature: "Mentors", us: "Working industry professionals", them: "Full-time trainers only" },
    { feature: "Batch size", us: "Small batches, 1:1 reviews", them: "Large classrooms" },
    { feature: "Projects", us: "Live, portfolio-ready projects", them: "Copy-paste sample projects" },
    { feature: "Placement", us: "Resume, mock interviews & referrals", them: "Job list shared on request" },
    { feature: "After the course", us: "Lifetime alumni community & refreshers", them: "Support ends with the course" },
  ],
  /** Table 2 — learning tracks (no prices, ever). `true` = included, string = detail. */
  tracks: {
    columns: ["Certificate Course", "Industrial Training", "Job-Ready Diploma"],
    rows: [
      { feature: "Typical duration", values: ["Course duration", "6 weeks – 6 months", "9 – 12 months"] },
      { feature: "Full course curriculum", values: [true, true, true] },
      { feature: "Module projects", values: [true, true, true] },
      { feature: "Live industry project", values: [false, true, true] },
      { feature: "University training report & letter", values: [false, true, true] },
      { feature: "Advanced specialisation modules", values: [false, false, true] },
      { feature: "Placement assistance", values: [true, true, true] },
      { feature: "Internship with experience letter", values: [false, false, true] },
    ] as { feature: string; values: (boolean | string)[] }[],
  },
  batches: aiCourseCommon.batches,
  certification: [
    "Verifiable online with a unique certificate ID",
    "Lists your modules, projects and grade",
    "Accepted for university industrial training credit",
    "Add to LinkedIn in one click",
  ],
  faqs: [
    { q: "Do you provide placement assistance?", a: "Yes. Every course includes placement assistance — resume and portfolio reviews, mock interviews and referrals through our 500+ hiring partners across North India." },
    { q: "Can I attend a free demo class first?", a: "Yes. Book a free demo with the form on this page or call us. You can attend at any branch or join a live online class." },
    { q: "How do I get fee and scholarship details?", a: "Book a free counselling session or message us on WhatsApp. A counsellor will share the current fee, EMI options and scholarships for your batch." },
  ],
};

export const coursePages: CoursePage[] = [
  ...programmingCourses, ...aiDataCourses, ...marketingCourses, ...marketingMoreCourses,
  ...cyberCloudCourses, ...cyberCloudMoreCourses, ...moreCourses,
];

export type { CourseGroupId, CoursePage } from "./types";

export const courseGroup = (id: CourseGroupId) => courseGroups.find((g) => g.id === id) ?? courseGroups[0];
