/** Contact page (/contact). Desk names, next steps and course options are SAMPLE copy from the reference site — confirm with the client. */
export const contactHero = {
  eyebrow: "Contact",
  title: "Talk to a counsellor in Jalandhar",
  text: "Tell us where you are: 12th pass, mid-degree, working, or running a business. We will tell you honestly which track fits and which does not.",
};

export const supportDesks = [
  { icon: "GraduationCap", title: "Student Support", text: "Course advice, batches, fees and free demo classes." },
  { icon: "Landmark", title: "College Support", text: "Workshops, industrial training and faculty programmes." },
  { icon: "Briefcase", title: "Placement Cell", text: "Interview preparation and hiring-partner drives." },
  { icon: "Building2", title: "Franchise Enquiry", text: "Open a techcadd centre in your city." },
] as const;

export const nextSteps = [
  "A senior career counsellor calls you back during office hours.",
  "They go through your background, your budget and where you want to end up — including whether a course is wrong for you.",
  "You get a course roadmap and a batch that fits your week, free, with no obligation to enrol.",
];

export const trust = ["15,000+ students trained", "4.9★ on Google (556 reviews)", "Training since 2007"];

export const courseOptions: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python", "Java", "Web Development", "Full Stack Development", "MERN Stack", "Flutter App Development"] },
  { group: "AI & Data", items: ["Artificial Intelligence", "Generative AI", "Agentic AI", "Machine Learning", "Data Science", "Data Analytics", "Power BI"] },
  { group: "Marketing & Design", items: ["Digital Marketing", "SEO", "Google Ads", "Graphic Designing", "UI/UX Design"] },
  { group: "Cyber & Cloud", items: ["Cybersecurity", "Ethical Hacking", "Cloud Computing", "AWS Cloud", "DevOps Engineering"] },
  { group: "Programs", items: ["Internship Program", "Industrial Training", "45 Days Training", "6 Months Training", "After 12th Program"] },
  { group: "Civil / Mechanical", items: ["AutoCAD", "SolidWorks", "3ds Max", "Revit"] },
];

export const mapEmbed =
  "https://www.google.com/maps?q=31.3054981,75.5933857&z=15&output=embed";
export const mapLink = "https://www.google.com/maps?cid=3965721629544103804";
