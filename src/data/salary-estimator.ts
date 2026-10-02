/** Content for /salary-estimator and the /placements salary table (one source, so numbers never differ between pages). Verify before launch. */

export type Region = "punjab" | "ncr" | "remote";

export const regions: { id: Region; label: string; note: string; /** fallback multiplier on the Punjab/Tricity range */ mult: number }[] = [
  { id: "punjab", label: "Punjab / Tricity", note: "Jalandhar, Mohali, Chandigarh & the wider Tricity", mult: 1 },
  { id: "ncr", label: "Delhi NCR", note: "Delhi, Gurugram & Noida", mult: 1.25 },
  { id: "remote", label: "Remote / Freelance", note: "Pay tracks the hiring company's market, not the city you sit in", mult: 1.15 },
];

export type Band = { fresher: [number, number]; twoYear: [number, number] };

export type Role = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  /** Punjab/Tricity ranges in LPA. */
  fresher: [number, number];
  twoYear: [number, number];
  /** Published NCR / Remote ranges; when absent they are derived from the Punjab range via the region multiplier. */
  ncr?: Band;
  remote?: Band;
  hiredBy: string[];
  courseHref: string;
  courseLabel: string;
};

export const roles: Role[] = [
  { id: "fullstack", title: "Full-Stack Developer", icon: "Code2", summary: "Builds and ships complete web applications, front end to back end.", fresher: [2.4, 4.5], twoYear: [5, 9],
    ncr: { fresher: [3, 6], twoYear: [7, 14] }, remote: { fresher: [3.5, 7], twoYear: [8, 18] },
    hiredBy: ["Product & SaaS startups (Mohali IT Park, Chandigarh)", "IT services & staffing companies across Tricity and NCR", "Remote-first teams and freelance marketplaces", "MNC captive development centres"], courseHref: "/courses/mern-stack", courseLabel: "MERN Stack" },
  { id: "seo", title: "SEO Specialist", icon: "Megaphone", summary: "Grows organic traffic and enquiries through search, content and technical fixes.", fresher: [1.8, 3], twoYear: [3.5, 6],
    ncr: { fresher: [2.5, 4], twoYear: [5, 9] }, remote: { fresher: [2, 4.5], twoYear: [5, 10] },
    hiredBy: ["Digital marketing agencies", "E-commerce and D2C brands", "In-house marketing teams of local businesses", "Freelance and consulting clients"], courseHref: "/courses/seo", courseLabel: "SEO" },
  { id: "analyst", title: "Data Analyst", icon: "ChartBar", summary: "Turns raw business data into dashboards and decisions.", fresher: [2.5, 4.5], twoYear: [5, 8],
    ncr: { fresher: [3.5, 6], twoYear: [7, 12] }, remote: { fresher: [3, 5.5], twoYear: [6, 11] },
    hiredBy: ["Banks, NBFCs and fintech companies", "Retail and e-commerce analytics teams", "Consulting and BPO analytics units", "Startups needing reporting and BI"], courseHref: "/courses/data-analytics", courseLabel: "Data Analytics" },
  { id: "cad", title: "CAD Designer", icon: "Box", summary: "Produces 2D drawings and 3D models for manufacturing and construction.", fresher: [2, 3.5], twoYear: [4, 7],
    ncr: { fresher: [2.5, 4.5], twoYear: [5, 9] }, remote: { fresher: [2, 4], twoYear: [4.5, 8] },
    hiredBy: ["Manufacturing units in Ludhiana, Jalandhar and Mohali", "Architecture and interior design firms", "Auto-parts and tool-room companies", "Freelance drafting and 3D printing clients"], courseHref: "/courses", courseLabel: "CAD & design courses" },
  { id: "python", title: "Python Developer", icon: "Code2", summary: "Writes backend services, automation and data tooling in Python.", fresher: [2.2, 4], twoYear: [4.5, 8],
    ncr: { fresher: [3, 5.5], twoYear: [6, 12] }, remote: { fresher: [3, 6], twoYear: [7, 15] },
    hiredBy: ["Software product companies", "Data and automation teams", "Startups building APIs and AI features", "IT services firms"], courseHref: "/courses/python", courseLabel: "Python" },
  { id: "java", title: "Java Developer", icon: "Code2", summary: "Builds enterprise backends and Android-adjacent services in Java.", fresher: [2.4, 4.5], twoYear: [5, 9],
    ncr: { fresher: [3, 6], twoYear: [7, 14] }, remote: { fresher: [3, 5.5], twoYear: [6.5, 13] },
    hiredBy: ["Banking and insurance IT teams", "Large IT services companies", "Enterprise software vendors", "Product companies with Spring stacks"], courseHref: "/courses/java", courseLabel: "Java" },
  { id: "dm", title: "Digital Marketing Executive", icon: "Megaphone", summary: "Runs social, search and paid campaigns and reports on results.", fresher: [1.8, 3.2], twoYear: [3.5, 6],
    ncr: { fresher: [2.5, 4.5], twoYear: [5, 9] }, remote: { fresher: [2, 4], twoYear: [5, 10] },
    hiredBy: ["Digital agencies", "Real estate, education and healthcare brands", "E-commerce teams", "Freelance campaign management"], courseHref: "/courses/digital-marketing", courseLabel: "Digital Marketing" },
  { id: "aiml", title: "AI / ML Engineer", icon: "BrainCircuit", summary: "Builds, evaluates and deploys machine-learning and generative AI features.", fresher: [3, 5.5], twoYear: [6, 12],
    ncr: { fresher: [4, 8], twoYear: [9, 18] }, remote: { fresher: [4.5, 9], twoYear: [10, 22] },
    hiredBy: ["AI-first startups and product companies", "Analytics and consulting firms", "R&D teams at MNC development centres", "Remote contract AI projects"], courseHref: "/courses/machine-learning", courseLabel: "Machine Learning" },
  { id: "cloud", title: "Cloud / DevOps Engineer", icon: "Cloud", summary: "Deploys, automates and monitors applications on cloud infrastructure.", fresher: [2.8, 5], twoYear: [5.5, 10],
    ncr: { fresher: [3.5, 7], twoYear: [8, 16] }, remote: { fresher: [4, 8], twoYear: [9, 20] },
    hiredBy: ["Managed-services and hosting companies", "SaaS product teams", "IT services and infrastructure firms", "Startups moving to cloud"], courseHref: "/courses/cloud-computing", courseLabel: "Cloud Computing" },
  { id: "security", title: "Cybersecurity Analyst", icon: "ShieldCheck", summary: "Monitors, tests and hardens systems against attacks.", fresher: [2.5, 4.5], twoYear: [5, 9],
    ncr: { fresher: [3.5, 6], twoYear: [7, 14] }, remote: { fresher: [3.5, 7], twoYear: [8, 16] },
    hiredBy: ["SOC and managed-security providers", "Banks and fintech compliance teams", "IT services security practices", "Consulting and audit firms"], courseHref: "/courses/cybersecurity", courseLabel: "Cybersecurity" },
  { id: "android", title: "Android Developer", icon: "Smartphone", summary: "Builds and maintains native Android apps.", fresher: [2.4, 4.2], twoYear: [4.5, 8.5],
    hiredBy: ["Mobile app studios", "Startups with consumer apps", "IT services firms", "Freelance app clients"], courseHref: "/courses/kotlin", courseLabel: "Kotlin / Android" },
  { id: "uiux", title: "UI/UX & Web Designer", icon: "Palette", summary: "Designs interfaces and websites that are easy and pleasant to use.", fresher: [1.8, 3.5], twoYear: [4, 7],
    hiredBy: ["Design and branding agencies", "Product startups", "In-house design teams", "Freelance web design clients"], courseHref: "/courses/web-designing", courseLabel: "Web Designing" },
];

/** Scale of the salary bars, in LPA. */
export const SCALE_MAX = 24;

const round = (n: number) => Math.round(n * 2) / 2;
export const scaled = (r: [number, number], mult: number): [number, number] => [round(r[0] * mult), round(r[1] * mult)];
export const fmt = (r: [number, number]) => `₹${r[0]}–${r[1]} LPA`;

/** Fresher / 2-year range for a role in a region — published figures where we have them, else derived. */
export function bandFor(role: Role, region: Region): Band {
  if (region === "punjab") return { fresher: role.fresher, twoYear: role.twoYear };
  const given = role[region];
  if (given) return given;
  const m = regions.find((r) => r.id === region)!.mult;
  return { fresher: scaled(role.fresher, m), twoYear: scaled(role.twoYear, m) };
}
