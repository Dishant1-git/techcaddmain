/** The six published articles listed on /pages and served at /<slug>. Content is original and carries no fees, salaries or
 *  guaranteed-placement claims (same policy as the course pages). Confirm details with the client before launch. */

export type Article = {
  slug: string;
  /** Card + H1 title. */
  title: string;
  /** One-line summary for the /pages card and meta description (empty = card shows title only, like the reference). */
  summary: string;
  eyebrow: string;
  intro: string;
  /** "What you'll work on" bullets. */
  learn: string[];
  audience: string[];
  /** 3 steps of how the training runs. */
  steps: { title: string; text: string }[];
  /** Link to the matching full course/programme page. */
  related: { label: string; href: string };
};

export const articles: Article[] = [
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    summary: "",
    eyebrow: "Cloud & DevOps",
    intro: "Cloud computing is how most software is now hosted, scaled and kept secure. This guide explains what the field covers, what you build while learning it, and how to start from zero.",
    learn: ["Linux and networking essentials every cloud role assumes", "Virtual machines, storage and managed databases on a major cloud", "Deploying a web application with HTTPS and automated backups", "Containers, basic CI/CD and monitoring", "Cloud security basics: identities, permissions and least privilege"],
    audience: ["Students and graduates who want an infrastructure career", "System administrators moving to the cloud", "Developers who want to ship and run their own apps"],
    steps: [
      { title: "Foundations", text: "Linux, networking and one cloud free-tier account." },
      { title: "Build and deploy", text: "Host a real application, add a database and a domain." },
      { title: "Secure and monitor", text: "Harden the setup, add alerts and write up what you built." },
    ],
    related: { label: "Cloud Computing course", href: "/courses/cloud-computing" },
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    summary: "",
    eyebrow: "AI",
    intro: "Agentic AI systems plan, call tools and act toward a goal instead of answering one prompt at a time. Here is what the field involves and how to learn it with working projects.",
    learn: ["How LLM agents plan, use tools and keep memory", "Building an agent that calls APIs and searches documents", "Retrieval-augmented generation (RAG) for grounded answers", "Evaluating, logging and guarding agent behaviour", "Deploying a small agent as a usable product"],
    audience: ["Developers adding AI features to products", "Data and automation professionals", "Students who already know basic Python"],
    steps: [
      { title: "LLM fundamentals", text: "Prompts, structured output and tool calling." },
      { title: "Build an agent", text: "A multi-step agent with retrieval and external tools." },
      { title: "Make it reliable", text: "Testing, guardrails and deployment." },
    ],
    related: { label: "Agentic AI course", href: "/courses/agentic-ai" },
  },
  {
    slug: "web-design-basics-training-in-maqsudan-techcadd",
    title: "Web Design Basics Training in Maqsudan | techcadd",
    summary: "Learn Web Design Basics in Maqsudan at techcadd. Master HTML, CSS, responsive design, basic JavaScript, layouts, website creation through practical training.",
    eyebrow: "Web Design",
    intro: "A beginner-friendly path into web design for students in Maqsudan and across Jalandhar: you learn the building blocks, then publish a complete responsive website.",
    learn: ["HTML structure and semantic markup", "CSS layouts with Flexbox and Grid", "Responsive design for phones, tablets and desktops", "Basic JavaScript for interactive elements", "Publishing a finished multi-page website"],
    audience: ["Class 12 and college students with no coding background", "Small-business owners who want to manage their own site", "Anyone starting a design or development career"],
    steps: [
      { title: "Learn the basics", text: "HTML and CSS through short daily exercises." },
      { title: "Make it responsive", text: "Layouts that work on every screen size." },
      { title: "Publish a site", text: "Build and launch a complete portfolio website." },
    ],
    related: { label: "Web Designing course", href: "/courses/web-designing" },
  },
  {
    slug: "data-analytics-fast-track-3-months-bootcamp",
    title: "3 Months Fast-Track Data Analytics Bootcamp | techcadd",
    summary: "Master Intensive Daily Hands-On Lab Workstation Training at techcadd Jalandhar. Power BI dashboards and live business analytics, with placement support.",
    eyebrow: "Data Analytics",
    intro: "A three-month, lab-heavy bootcamp for learners who want job-ready analytics skills quickly: clean data, answer business questions and present the results in dashboards.",
    learn: ["Excel and SQL for cleaning and querying data", "Statistics you actually use in analysis", "Power BI dashboards and storytelling with data", "Python basics for analysis", "A capstone analysis on a real business dataset"],
    audience: ["Graduates from commerce, science or engineering", "Working professionals who handle reports", "Career switchers aiming for analyst roles"],
    steps: [
      { title: "Month 1: data foundations", text: "Excel, SQL and statistics." },
      { title: "Month 2: dashboards", text: "Power BI reports and Python basics." },
      { title: "Month 3: capstone", text: "A full analysis project, portfolio and interview preparation." },
    ],
    related: { label: "Data Analytics course", href: "/courses/data-analytics" },
  },
  {
    slug: "data-analytics-6-months-industrial-training-jalandhar",
    title: "6 Months Industrial Training Data Analytics Jalandhar",
    summary: "6 Months Industrial Training Data Analytics Jalandhar at techcadd Jalandhar (Crystal Plaza Opp PIMS). Live production data pipelines with university training certificate support.",
    eyebrow: "Industrial Training",
    intro: "For engineering and computer-application students who need six months of industrial training in Jalandhar: you work on live-style data pipelines and finish with a project report.",
    learn: ["Data pipelines from raw files to a clean reporting layer", "SQL, Python and Power BI in one connected workflow", "Version control and documenting your work", "A major project with a written report and viva preparation", "Interview preparation alongside the project"],
    audience: ["B.Tech, BCA and MCA students with a training requirement", "Final-year students who want a portfolio project", "Students who prefer classroom training in Jalandhar"],
    steps: [
      { title: "Months 1–2: foundations", text: "SQL, Python and data cleaning." },
      { title: "Months 3–4: pipelines and BI", text: "Automate data flows and build dashboards." },
      { title: "Months 5–6: major project", text: "Build, document and present your project." },
    ],
    related: { label: "Internship & Training programmes", href: "/training/data-analytics" },
  },
  {
    slug: "data-analytics-6-months-industrial-training",
    title: "6 Months Industrial Training in Data Analytics | techcadd",
    summary: "Master real client-style data pipelines and the training certificate at techcadd Jalandhar, with Power BI dashboards and live business analytics.",
    eyebrow: "Industrial Training",
    intro: "A six-month industrial training route in data analytics: structured weekly learning, client-style data problems and a final project you can show employers.",
    learn: ["Business questions turned into measurable analysis", "SQL, Excel, Python and Power BI used together", "Dashboards that decision-makers can read at a glance", "Working on a client-style brief with feedback", "A portfolio project and training certificate"],
    audience: ["Students needing industrial training credit", "Graduates building an analytics portfolio", "Professionals who want a structured, mentor-led path"],
    steps: [
      { title: "Learn the toolkit", text: "SQL, Excel, Python and statistics." },
      { title: "Apply it", text: "Client-style briefs with mentor review." },
      { title: "Present it", text: "Final dashboard, report and interview practice." },
    ],
    related: { label: "Data Analytics course", href: "/courses/data-analytics" },
  },
];

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
