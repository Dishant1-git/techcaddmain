/** Events listed on /events and /events/[slug]. Taken from the reference page's visible cards — it listed 8, the rest were not
 *  available, so add them here (newest first) and the hub, detail pages and sitemap update automatically. */

export type SiteEvent = {
  slug: string;
  title: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  type: "Seminar" | "Workshop" | "Demo class";
  venue: string;
  summary: string;
};

export const events: SiteEvent[] = [
  {
    slug: "techcadd-conducts-generative-ai-seminar-at-trinity-college-jalandhar",
    title: "techcadd Conducts Generative AI Seminar at Trinity College, Jalandhar",
    date: "2026-08-06",
    type: "Seminar",
    venue: "Trinity College, Jalandhar",
    summary: "techcadd conducted a Generative AI Seminar at Trinity College, Jalandhar, introducing students to Generative AI, emerging technology trends, digital skills, innovation, and the importance of future-ready learning.",
  },
  {
    slug: "free-generative-ai-demo-class-at-techcadd",
    title: "Free Generative AI Demo Class at techcadd",
    date: "2026-05-12",
    type: "Seminar",
    venue: "techcadd, Jalandhar",
    summary: "Join the Free Generative AI Demo Class at techcadd to explore Generative AI, practical AI tools, automation, creativity, productivity, and emerging career opportunities in the AI-driven technology landscape.",
  },
  {
    slug: "techcadd-jalandhar-technology-digitalcareer",
    title: "Seminar on evolving technology landscape and emerging career opportunities",
    date: "2026-03-13",
    type: "Seminar",
    venue: "H.M.V, Jalandhar",
    summary: "techcadd engaged with students at Hans Raj Mahila Maha Vidyalaya, Jalandhar, offering insights into technology, emerging career opportunities, industry-relevant skills, and future-ready learning.",
  },
  {
    slug: "techcadd-conducts-ai-industry-4-0-workshop-at-dav-college-jalandhar",
    title: "techcadd Conducts AI & Industry 4.0 Workshop at DAV College, Jalandhar",
    date: "2026-01-29",
    type: "Seminar",
    venue: "DAV College, Jalandhar",
    summary: "techcadd conducted an AI and Industry 4.0 workshop at DAV College, Jalandhar, introducing students to emerging technologies, real-world applications, innovation, and career-ready skills for the evolving technology industry.",
  },
];

export const findEvent = (slug: string) => events.find((e) => e.slug === slug);

export const formatEventDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export const isPast = (iso: string) => new Date(`${iso}T23:59:59`) < new Date();
