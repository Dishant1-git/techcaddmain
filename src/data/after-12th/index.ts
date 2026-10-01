/* ───────── After 12th pages (/after-12th/[slug]) — one per link in the "After 12th" dropdown ─────────
   A page = subject × duration. Subject content (9-month roadmap, roles, FAQs) lives in ./subjects-*.ts; a tier cuts the
   roadmap to its length. Shared blocks live here. Pricing and salary figures are intentionally NEVER shown.
   Adding a page: add the subject slug to `offered` (and a subject entry if new) + a `nav` link in site.ts →
   page, sitemap and hub card are automatic. Stats and reviews are SAMPLE content — confirm before launch. */

import type { A12Page, A12Subject, A12Tier } from "./types";
import { subjectsA } from "./subjects-a";
import { subjectsB } from "./subjects-b";

export type { A12Month, A12Page, A12Subject, A12Tier } from "./types";

export const a12Subjects: A12Subject[] = [...subjectsA, ...subjectsB];

const short: A12Tier = {
  months: 3,
  suffix: "Program",
  badge: "Starter",
  credential: "Program certificate",
  text: "One subject, one term, one live project.",
  includes: "Certificate + live project",
  overview:
    "The 3-month program is the quickest way to find out whether {name} is the right career for you. You finish the foundations, build three guided projects and leave with a certificate — and every class counts if you later move up to the 6 or 9-month track.",
};

export const a12Tiers: A12Tier[] = [
  short,
  { ...short, months: 4, badge: "Extended starter", overview: "The 4-month program adds one more month to the starter track, so you practise on a live campaign before you finish. You leave with four projects and a certificate — and every class counts if you later move up to the 6 or 9-month track." },
  {
    months: 6,
    suffix: "Certificate Program",
    badge: "Most chosen",
    credential: "Industry certificate",
    text: "Half a year, finishing with a portfolio.",
    includes: "Certificate + placement support",
    overview:
      "The 6-month certificate program takes you from zero to a portfolio. You move forward when a project is finished and reviewed, not when the calendar says so — by the end you have six projects, an industry certificate and placement support for entry-level {name} roles.",
  },
  {
    months: 9,
    suffix: "Diploma Program",
    badge: "Job-ready",
    credential: "Diploma + internship letter",
    text: "The longest track, with placement preparation.",
    includes: "Diploma + internship + placement prep",
    overview:
      "The 9-month diploma is the complete route. After the certificate-level modules you specialise, work on an internship-style capstone and spend the final weeks on interview and placement preparation — you leave with nine projects, a diploma and an internship letter in {name}.",
  },
];

/** Subject slugs offered per duration — mirrors the After 12th dropdown columns in site.ts. */
const all = a12Subjects.map((s) => s.slug);
const offered: Record<number, string[]> = {
  3: all,
  4: ["digital-marketing"],
  6: all,
  9: all.filter((s) => s !== "data-analytics" && s !== "data-science"),
};

export const a12Pages: A12Page[] = a12Tiers.flatMap((tier) =>
  a12Subjects
    .filter((s) => offered[tier.months].includes(s.slug))
    .map((subject) => ({
      slug: `${tier.months}-month-${subject.slug}`,
      title: `After 12th ${tier.months}-Month ${subject.name} ${tier.suffix}`,
      label: `${subject.name} ${tier.suffix}${tier.months === 4 ? " (4 Months)" : ""}`,
      tier,
      subject,
      months: subject.months.slice(0, tier.months),
    })),
);

export const a12Common = {
  heroFacts: [
    { label: "Mode", value: "Practical + theory" },
    { label: "Eligibility", value: "12th pass, any stream" },
  ],
  /** Eligibility — four groups. `{name}` is replaced with the subject name. */
  audience: [
    { title: "Students after 12th", text: "Arts, commerce, medical or non-medical — start {name} from zero, before or alongside your degree.", icon: "GraduationCap" },
    { title: "College students", text: "BCA, B.Tech, B.Sc or B.Com students who want real project work next to their syllabus.", icon: "BookOpen" },
    { title: "Graduates & career switchers", text: "Finished a degree in another field? Build job-ready {name} skills with a portfolio to prove them.", icon: "Rocket" },
    { title: "Freelancers & family business", text: "Learn enough {name} to take paid work or bring the skill into your own business.", icon: "Briefcase" },
  ],
  requirements: ["12th pass in any stream", "Basic computer and English reading skills", "No coding background needed", "A laptop helps — labs are available on campus"],
  /** Certification section — four things you leave with. */
  credentials: [
    { title: "Industry certificate", text: "Online-verifiable certificate that lists your modules, projects and grade.", icon: "Award" },
    { title: "Internship letter", text: "Issued for live-project work on the longer tracks and accepted for college credit.", icon: "Briefcase" },
    { title: "Portfolio of projects", text: "One reviewed project per month that you can walk an interviewer through.", icon: "Layers" },
    { title: "Placement support", text: "Resume review, mock interviews and referrals to our hiring partners.", icon: "BadgeCheck" },
  ],
  loop: [
    { title: "Understand", text: "A short concept class with a worked example — you see why before you see how.", icon: "Eye" },
    { title: "Build", text: "You build it yourself in the lab while a mentor reviews your work and unblocks you.", icon: "Code2" },
    { title: "Present", text: "You demo the result and answer questions — practice for every interview to come.", icon: "MessageSquare" },
  ],
  why: [
    { title: "Progress by project", text: "You move on when your project is reviewed and working — not when the month ends.", icon: "Target" },
    { title: "Real tools, real accounts", text: "The same tools, devices and accounts that working teams use every day.", icon: "Laptop" },
    { title: "Trainers who still ship", text: "Mentors who deliver client projects, so what you learn is what is used.", icon: "Users" },
    { title: "A track you can extend", text: "Start with 3 months and continue to 6 or 9 without repeating a single class.", icon: "Workflow" },
  ],
  stats: [
    { value: "2007", label: "Training students since" },
    { value: "50,000+", label: "Students trained" },
    { value: "500+", label: "Hiring partners" },
  ],
  faqs: [
    { q: "Can I join right after my 12th result, in any stream?", a: "Yes. The program starts from zero and is open to arts, commerce, medical and non-medical students. You only need basic computer skills." },
    { q: "Can I do this alongside college?", a: "Yes. Morning, evening and weekend batches are available, and live online classes come with recordings for revision." },
    { q: "Is placement guaranteed?", a: "No institute can honestly guarantee a job. We give placement support — resume and portfolio reviews, mock interviews and referrals — and keep helping until you are placed." },
    { q: "How do I get fee and scholarship details?", a: "Book a free counselling session or message us on WhatsApp. A counsellor will share the current fee, instalment options and scholarships for your chosen program." },
  ],
};

const fill = (text: string, s: A12Subject) => text.replaceAll("{name}", s.name);

/** Tier-aware FAQs: duration, difference between tracks, background, certificate, next step. */
export function a12Faqs(page: A12Page) {
  const { tier, subject: s } = page;
  const longer = a12Pages.filter((p) => p.subject.slug === s.slug && p.tier.months > tier.months && p.tier.months !== 4);
  return [
    { q: `How long is the ${page.label}?`, a: `${tier.months} months, with one module and one reviewed project per month. Classes are practical first: most of every session is spent building.` },
    { q: `What is the difference between the 3, 6 and 9-month ${s.short} programs?`, a: `They share one roadmap. 3 months covers the foundations with guided projects, 6 months reaches portfolio level with an industry certificate and placement support, and 9 months adds specialisation, an internship-style capstone and placement preparation.` },
    ...s.faqs,
    { q: "What do I receive when I finish?", a: `${tier.credential}, a portfolio of ${tier.months} reviewed projects and ${tier.months >= 6 ? "placement support with resume review, mock interviews and referrals" : "guidance on what to learn next"}.` },
    ...(longer.length
      ? [{ q: "Can I continue to a longer program afterwards?", a: `Yes. You can move up to the ${longer.map((p) => `${p.tier.months}-month ${p.tier.suffix.toLowerCase()}`).join(" or the ")} and carry on from where you stopped — no class is repeated.` }]
      : []),
    ...a12Common.faqs,
  ].filter((f, i, list) => list.findIndex((x) => x.q === f.q) === i);
}

export const a12Fill = fill;
