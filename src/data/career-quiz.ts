/** Content + scoring for the /my-career "Find my IT / CAD career track" tool. Components only render this. */

export type TrackId = "software" | "cad" | "marketing" | "cloud";

export type QuizOption = {
  label: string;
  text: string;
  /** Track weights this answer adds to. */
  weights: Partial<Record<TrackId, number>>;
};

export type QuizQuestion = {
  id: "interest" | "background" | "reward" | "goal";
  step: string;
  title: string;
  hint: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "interest",
    step: "Interest",
    title: "Which of these would you happily do for a whole afternoon?",
    hint: "Pick the one you would not have to force yourself through.",
    options: [
      { label: "Build a working app or website", text: "Writing code, watching a screen come alive, fixing what breaks.", weights: { software: 3 } },
      { label: "Draw and model a real object", text: "Dimensions, sections, assemblies — a part that could be manufactured.", weights: { cad: 3 } },
      { label: "Grow a page's traffic and enquiries", text: "Keywords, ad copy, analytics, and the numbers moving week on week.", weights: { marketing: 3 } },
      { label: "Set up servers and keep them running", text: "Linux, deployments, backups, and being the one who fixes it at 2am.", weights: { cloud: 3 } },
    ],
  },
  {
    id: "background",
    step: "Background",
    title: "Where are you starting from?",
    hint: "No answer here is wrong — it only changes the pace of your plan.",
    options: [
      { label: "Class 12 / just finished school", text: "Starting fresh, no formal tech training yet.", weights: {} },
      { label: "Diploma / ITI", text: "Hands-on technical base, looking to formalise it.", weights: { cad: 1, cloud: 1 } },
      { label: "Graduate (any stream)", text: "Degree in hand, want a skill employers actually hire for.", weights: { marketing: 1, software: 1 } },
      { label: "Working professional", text: "Already employed, switching or levelling up.", weights: { software: 1, cloud: 1 } },
    ],
  },
  {
    id: "reward",
    step: "Reward",
    title: "What kind of reward matters most to you?",
    hint: "Think about what would make a hard week worth it.",
    options: [
      { label: "A strong, steady salary", text: "Clear pay bands and a defined career ladder.", weights: { software: 2, cloud: 1 } },
      { label: "Seeing my work built for real", text: "A finished thing you can point at and say “I made that”.", weights: { cad: 2, software: 1 } },
      { label: "Visible, measurable results", text: "Dashboards and numbers that prove what you did.", weights: { marketing: 2 } },
      { label: "Being trusted with critical systems", text: "Responsibility, uptime, and respect from the team.", weights: { cloud: 2 } },
    ],
  },
  {
    id: "goal",
    step: "Goal",
    title: "What do you want out of the next 90 days?",
    hint: "This shapes the last part of your plan.",
    options: [
      { label: "Land my first job", text: "Resume, portfolio and interview-ready fast.", weights: {} },
      { label: "Start freelancing", text: "Get a first paying client from outside a company.", weights: { marketing: 1, software: 1 } },
      { label: "Switch careers", text: "Move from my current field into tech/design.", weights: {} },
      { label: "Just explore, risk-free", text: "Try the field before committing money or time.", weights: {} },
    ],
  },
];

export type Track = {
  id: TrackId;
  name: string;
  tagline: string;
  icon: string;
  courseHref: string;
  courseLabel: string;
  jobTitles: string[];
  freeCerts: { name: string; by: string }[];
  projects: { title: string; text: string }[];
  /** Weeks 1–4, 5–8, 9–13 headlines. */
  phases: { label: string; weeks: string; focus: string }[];
  pitch: string;
};

export const tracks: Record<TrackId, Track> = {
  software: {
    id: "software",
    name: "Software & Web Development",
    tagline: "You like building things that run. Full-stack roles are the broadest door into IT.",
    icon: "Code2",
    courseHref: "/courses/web-development",
    courseLabel: "Web Development course",
    jobTitles: ["Junior Web Developer", "Front-End Developer", "Full-Stack Trainee", "Python Developer"],
    freeCerts: [
      { name: "Responsive Web Design", by: "freeCodeCamp" },
      { name: "JavaScript Algorithms & Data Structures", by: "freeCodeCamp" },
      { name: "Python for Everybody (audit)", by: "Coursera" },
    ],
    projects: [
      { title: "Personal portfolio site", text: "Responsive, deployed on a free host, with your real contact details." },
      { title: "CRUD app with a database", text: "A task or expense tracker with login, saved data and a clean UI." },
      { title: "API-driven mini product", text: "Consume a public API (weather, jobs, movies) and add one feature of your own." },
    ],
    phases: [
      { label: "Foundations", weeks: "Weeks 1–4", focus: "HTML, CSS, JavaScript basics and Git. Ship one small page every week." },
      { label: "Build", weeks: "Weeks 5–8", focus: "A framework (React) plus a backend and database. Start project two." },
      { label: "Prove it", weeks: "Weeks 9–13", focus: "Finish project three, polish GitHub, rehearse interviews, apply daily." },
    ],
    pitch: "Hi [Name], I build fast, mobile-friendly websites for local businesses. I noticed [Business] doesn't have a site that works well on phones — I can build a 3-page version in a week. Happy to share two examples. Can I send them over?",
  },
  cad: {
    id: "cad",
    name: "CAD, Design & Engineering",
    tagline: "You think in dimensions and parts. Drafting and modelling skills are always in demand in manufacturing.",
    icon: "Box",
    courseHref: "/courses",
    courseLabel: "CAD & design courses",
    jobTitles: ["CAD Draftsman", "Design Engineer Trainee", "3D Modeller", "Production Drafter"],
    freeCerts: [
      { name: "Fusion 360 for Personal Use learning path", by: "Autodesk" },
      { name: "SolidWorks Tutorials (CSWA prep)", by: "Dassault Systèmes" },
      { name: "Engineering Drawing basics", by: "NPTEL" },
    ],
    projects: [
      { title: "Fully dimensioned part drawing", text: "A real household object, measured, modelled and drawn to standard." },
      { title: "Multi-part assembly", text: "A vice, gearbox or hinge with constraints and an exploded view." },
      { title: "Render + 3D-print-ready model", text: "A product with materials, a render and an exported STL." },
    ],
    phases: [
      { label: "Foundations", weeks: "Weeks 1–4", focus: "Drawing standards, sketching constraints and basic part modelling." },
      { label: "Build", weeks: "Weeks 5–8", focus: "Assemblies, sheet-metal or surfacing, and drawing sheets. Start project two." },
      { label: "Prove it", weeks: "Weeks 9–13", focus: "Finish project three, build a PDF portfolio, apply to local manufacturers." },
    ],
    pitch: "Hello [Name], I'm a CAD designer. If [Company] has parts that need 2D drawings or 3D models, I can turn sketches or samples into production-ready files within 48 hours. I can send a sample drawing — would that help?",
  },
  marketing: {
    id: "marketing",
    name: "Digital Marketing & Growth",
    tagline: "You like seeing numbers move. Local businesses need people who can turn ad spend into enquiries.",
    icon: "Megaphone",
    courseHref: "/courses/digital-marketing",
    courseLabel: "Digital Marketing course",
    jobTitles: ["Digital Marketing Executive", "SEO Executive", "Social Media Manager", "Performance Marketing Trainee"],
    freeCerts: [
      { name: "Google Analytics Certification", by: "Google Skillshop" },
      { name: "Fundamentals of Digital Marketing", by: "Google Digital Garage" },
      { name: "Inbound Marketing", by: "HubSpot Academy" },
    ],
    projects: [
      { title: "SEO audit of a local business", text: "Findings, quick wins and a 30-day fix list on one page." },
      { title: "Small Google/Meta ad campaign", text: "A real ₹500–1,000 test with a before/after results sheet." },
      { title: "30-day content calendar", text: "Posts, captions and a measured reach/engagement report." },
    ],
    phases: [
      { label: "Foundations", weeks: "Weeks 1–4", focus: "SEO, social basics and analytics. Audit one real website." },
      { label: "Build", weeks: "Weeks 5–8", focus: "Run a small paid campaign and log results. Start project two." },
      { label: "Prove it", weeks: "Weeks 9–13", focus: "Package three case studies, then pitch or apply every day." },
    ],
    pitch: "Hi [Name], I help local businesses get more enquiries from Google and Instagram. I did a quick check on [Business] and found three fixes that could bring in more calls. Can I send you the 1-page summary — free?",
  },
  cloud: {
    id: "cloud",
    name: "Cloud, Linux & Cybersecurity",
    tagline: "You like being the person who keeps things running. Infrastructure and security roles pay for trust.",
    icon: "ShieldCheck",
    courseHref: "/courses/cloud-computing",
    courseLabel: "Cloud Computing course",
    jobTitles: ["Linux / System Administrator", "Cloud Support Associate", "SOC Analyst Trainee", "DevOps Trainee"],
    freeCerts: [
      { name: "AWS Cloud Practitioner Essentials", by: "AWS Skill Builder" },
      { name: "Linux Essentials (course)", by: "Linux Professional Institute / NDG" },
      { name: "Introduction to Cybersecurity", by: "Cisco Networking Academy" },
    ],
    projects: [
      { title: "Hardened Linux server", text: "A VM with SSH keys, firewall, users and a written hardening checklist." },
      { title: "Deploy a site on the cloud", text: "A web app on a free-tier VM with HTTPS and automated backups." },
      { title: "Home security lab", text: "Scan, find and fix issues in a deliberately vulnerable VM; document it." },
    ],
    phases: [
      { label: "Foundations", weeks: "Weeks 1–4", focus: "Linux command line, networking basics and one cloud free-tier account." },
      { label: "Build", weeks: "Weeks 5–8", focus: "Deploy, secure and monitor a service. Start project two." },
      { label: "Prove it", weeks: "Weeks 9–13", focus: "Write up three labs, take a free practice exam, apply for support roles." },
    ],
    pitch: "Hi [Name], I set up and secure servers for small businesses. If [Company] runs its own website or office network, I can do a free basic security check and send a short report. Would that be useful?",
  },
};

export const goalNotes: Record<string, string> = {
  "Land my first job": "Spend the last two weeks on mock interviews and apply to 5 openings a day. Put your portfolio link at the top of every resume.",
  "Start freelancing": "Send the pitch below to 10 local businesses a week from week 6. One yes is enough to start a track record.",
  "Switch careers": "Keep your current job. Work 1–2 focused hours daily and lead your resume with the projects, not the old title.",
  "Just explore, risk-free": "Complete only Phase 1 and one free certification. You will know within four weeks whether this is for you.",
};

export const backgroundNotes: Record<string, string> = {
  "Class 12 / just finished school": "You have the most time. Take the full 13 weeks and consider a structured diploma after.",
  "Diploma / ITI": "Lean on your hands-on base; you can compress Phase 1 to two weeks.",
  "Graduate (any stream)": "Employers value the degree plus a portfolio. Projects matter more than marks here.",
  "Working professional": "Aim for 7–8 hours a week. Weekend batches or short evening sessions fit best.",
};

export function scoreTrack(answers: Record<string, number>): TrackId {
  const totals: Record<TrackId, number> = { software: 0, cad: 0, marketing: 0, cloud: 0 };
  for (const q of quizQuestions) {
    const idx = answers[q.id];
    if (idx === undefined) continue;
    for (const [t, w] of Object.entries(q.options[idx].weights)) totals[t as TrackId] += w ?? 0;
  }
  // Ties are broken in favour of the Interest answer (heaviest weight there).
  const interest = quizQuestions[0].options[answers.interest ?? 0];
  const primary = Object.keys(interest.weights)[0] as TrackId;
  return (Object.keys(totals) as TrackId[]).sort(
    (a, b) => totals[b] - totals[a] || (b === primary ? 1 : 0) - (a === primary ? 1 : 0),
  )[0];
}
