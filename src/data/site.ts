/**
 * SINGLE SOURCE OF TRUTH for all website content.
 * Edit text, numbers, links, courses, branches etc. here — components only render this data.
 * Icon fields are lucide-react icon names resolved in src/components/ui/Icon.tsx.
 */

import type { StaticImageData } from "next/image";
import navAboutImg from "@/assets/nav/about-techcadd.jpg";
import navMissionImg from "@/assets/nav/mission-vision.jpg";
import navFounderImg from "@/assets/nav/our-founder.jpg";


export const site = {
  name: "TechCADD",
  legalName: "TechCADD Computer Education Pvt. Ltd.",
  tagline: "North India's Premier IT & Design Training Institute",
  description:
    "TechCADD is North India's leading IT training institute offering AI, Full-Stack Development, Data Science, Cybersecurity, Cloud, Digital Marketing and CAD courses with 100% placement assistance across Punjab, Chandigarh, Haryana, Himachal, J&K and Delhi NCR.",
  url: "https://techcaddjalandhar.com",
  phone: "+91 98881 22254",
  phoneHref: "tel:+919888122254",
  whatsapp: "919888122254",
  email: "info@techcaddjalandhar.com",
  address: "Crystal Plaza, 158, Model Town Rd, Jalandhar, Punjab 144003",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  rating: { score: "4.9", reviews: "750+" },
  socials: {
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
  },
};

export const branches = [
  { city: "Jalandhar", state: "Punjab", slug: "jalandhar", hq: true },
  { city: "Chandigarh", state: "Chandigarh (UT)", slug: "chandigarh" },
  { city: "Mohali", state: "Punjab", slug: "mohali" },
  { city: "Ludhiana", state: "Punjab", slug: "ludhiana" },
  { city: "Amritsar", state: "Punjab", slug: "amritsar" },
  { city: "Phagwara", state: "Punjab", slug: "phagwara" },
  { city: "Hoshiarpur", state: "Punjab", slug: "hoshiarpur" },
];

/** States/regions we serve via branches + live online batches */
export const regions = [
  { name: "Punjab", note: "6 branches" },
  { name: "Chandigarh Tricity", note: "Chandigarh & Mohali" },
  { name: "Haryana", note: "Live online + weekend batches" },
  { name: "Himachal Pradesh", note: "Live online batches" },
  { name: "Jammu & Kashmir", note: "Live online batches" },
  { name: "Delhi NCR", note: "Live online batches" },
  { name: "Uttarakhand", note: "Live online batches" },
  { name: "Rajasthan & UP (West)", note: "Live online batches" },
];

export type NavLink = { label: string; href: string; desc?: string; badge?: string };
export type NavFeatured = { title: string; href: string; badge: string; meta: string; image: StaticImageData; alt: string };
export type NavItem = {
  label: string;
  href: string;
  /** Rendered as the glowing blue pill with a sparkle icon (the "AI" item). */
  highlight?: boolean;
  /** Dropdown items. `mega` renders a wide 2-column panel. */
  children?: NavLink[];
  mega?: boolean;
  /** If set, dropdown renders the full-width "list + FEATURED image cards" panel (see About Us). */
  featured?: NavFeatured[];
  /** If set, dropdown renders the full-width grouped "skills" panel (see AI). Takes priority over children. */
  skills?: NavSkillsPanel;
  /** If set, dropdown renders the full-width numbered-columns panel with quote footer (see Courses). */
  columns?: NavColumnsPanel;
  /** If set, dropdown renders the frosted-glass tile grid with quote footer (see Internship & Training). */
  tiles?: NavTilesPanel;
};

/** icon: lucide name resolved in Header's `tileIcons` map. */
export type NavTile = { label: string; href: string; icon: "Cloud" | "Smartphone" | "CodeXml" | "Brain" | "Megaphone" | "ChartColumn" | "ShieldCheck" | "Monitor" | "Box"; badge?: string };
export type NavTilesPanel = {
  tiles: NavTile[];
  quote: { text: string; author: string };
  browse: { label: string; href: string };
};

export type NavColumnsPanel = {
  /** "glass" = frosted translucent panel with lighter titles & denser lists (After 12th). Default = solid white (Courses). */
  variant?: "solid" | "glass";
  columns: { title: string; text: string; links: NavLink[] }[];
  quote: { text: string; author: string };
  browse: { label: string; href: string };
};

export type NavSkillLink = { label: string; href: string; hot?: boolean };
export type NavSkillsPanel = {
  title: string;
  text: string;
  /** icon: lucide name resolved in Header (Sparkles | Zap) */
  groups: { title: string; icon: "Sparkles" | "Zap"; links: NavSkillLink[] }[];
  featuredCourse: { tag: string; title: string; href: string; art: string };
  cta: { text: string; button: string; href: string };
};

/** Main header menu. Order = order on screen. */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/#about",
    children: [
      { label: "About techcadd", href: "/#about" },
      { label: "Mission and Vision", href: "/#why-us" },
      { label: "Our Founder", href: "/#about" },
    ],
    featured: [
      { title: "About techcadd", href: "/#about", badge: "Story", meta: "Since 2007", image: navAboutImg, alt: "TechCADD students in a seminar hall" },
      { title: "Mission and Vision", href: "/#why-us", badge: "Purpose", meta: "Our Direction", image: navMissionImg, alt: "Students at a TechCADD auditorium session" },
      { title: "Our Founder", href: "/#about", badge: "Profile", meta: "Gourav Gupta", image: navFounderImg, alt: "Founder Gourav Gupta presenting a robot dog on stage" },
    ],
  },
  {
    label: "AI",
    href: "/#ai-program",
    highlight: true,
    skills: {
      title: "Learn AI Skills.",
      text: "Build projects with machine learning, data science, automation, and generative AI.",
      groups: [
        {
          title: "AI Fundamentals",
          icon: "Sparkles",
          links: [
            { label: "Generative AI", href: "/#ai-program" },
            { label: "Artificial Intelligence (AI)", href: "/#ai-program" },
            { label: "Prompt Engineering", href: "/#ai-program" },
            { label: "ChatGPT & AI Tools", href: "/#ai-program", hot: true },
          ],
        },
        {
          title: "AI Development",
          icon: "Zap",
          links: [
            { label: "Agentic AI", href: "/#ai-program", hot: true },
            { label: "AI-Powered Marketing", href: "/#courses", hot: true },
            { label: "RAG (Retrieval-Augmented Generation)", href: "/#ai-program" },
            { label: "Machine Learning", href: "/#courses" },
          ],
        },
      ],
      featuredCourse: { tag: "Featured AI Course", title: "Artificial Intelligence Training in North India", href: "/#ai-program", art: "AI" },
      cta: { text: "Start with AI fundamentals, then move into real projects and career-ready tools.", button: "Explore AI", href: "/#ai-program" },
    },
  },
  {
    label: "Courses",
    href: "/#courses",
    columns: {
      columns: [
        {
          title: "Programming",
          text: "Core languages and full-stack engineering",
          links: [
            { label: "Python", href: "/#courses" },
            { label: "Java", href: "/#courses" },
            { label: "C & C++", href: "/#courses" },
            { label: "Kotlin", href: "/#courses" },
            { label: "Web Designing", href: "/#courses" },
            { label: "Web Development", href: "/#courses" },
            { label: "MERN Stack", href: "/#courses" },
            { label: "MEAN Stack", href: "/#courses" },
            { label: "PHP Full Stack", href: "/#courses" },
            { label: "IT Foundation Programme", href: "/#courses" },
          ],
        },
        {
          title: "AI & Data",
          text: "Models, analytics and decision intelligence",
          links: [
            { label: "Artificial Intelligence", href: "/#courses" },
            { label: "Machine Learning", href: "/#courses" },
            { label: "Deep Learning", href: "/#courses" },
            { label: "Data Science", href: "/#courses" },
            { label: "Data Analytics", href: "/#courses" },
            { label: "Power BI", href: "/#courses" },
            { label: "Tableau", href: "/#courses" },
          ],
        },
        {
          title: "Digital Marketing",
          text: "Growth, performance and commerce",
          links: [
            { label: "Digital Marketing", href: "/#courses" },
            { label: "Social Media Marketing", href: "/#courses" },
            { label: "Google Ads", href: "/#courses" },
            { label: "SEO", href: "/#courses" },
            { label: "WordPress", href: "/#courses" },
            { label: "Shopify", href: "/#courses" },
          ],
        },
        {
          title: "Cyber & Cloud",
          text: "Secure, resilient infrastructure",
          links: [
            { label: "Cybersecurity", href: "/#courses" },
            { label: "Ethical Hacking", href: "/#courses" },
            { label: "Cloud Computing", href: "/#courses" },
            { label: "Linux", href: "/#courses" },
          ],
        },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "Browse all courses", href: "/#courses" },
    },
  },
  {
    label: "Internship & Training",
    href: "/#programs",
    tiles: {
      tiles: [
        { label: "Cloud Computing", href: "/#programs", icon: "Cloud" },
        { label: "Flutter App Development", href: "/#programs", icon: "Smartphone" },
        { label: "MERN Stack", href: "/#programs", icon: "CodeXml" },
        { label: "Agentic AI", href: "/#programs", icon: "Brain", badge: "New" },
        { label: "Digital Marketing", href: "/#programs", icon: "Megaphone" },
        { label: "Data Analytics", href: "/#programs", icon: "ChartColumn" },
        { label: "Data Science", href: "/#programs", icon: "ChartColumn" },
        { label: "Cyber Security", href: "/#programs", icon: "ShieldCheck" },
        { label: "Artificial Intelligence", href: "/#programs", icon: "Brain" },
        { label: "Full Stack Development", href: "/#programs", icon: "CodeXml" },
        { label: "Basic Skill and Programs", href: "/#programs", icon: "Monitor" },
        { label: "Civil/Mechanical", href: "/#programs", icon: "Box" },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "See all training formats", href: "/#programs" },
    },
  },
  {
    label: "After 12th",
    href: "/#programs",
    columns: {
      variant: "glass",
      columns: [
        {
          title: "After 12th 3-Month Program",
          text: "One subject, one term, one live project",
          links: [
            { label: "Cloud Computing Program", href: "/#programs" },
            { label: "Flutter App Development Program", href: "/#programs" },
            { label: "MERN Stack Program", href: "/#programs" },
            { label: "Agentic AI Program", href: "/#programs" },
            { label: "Digital Marketing Program (3 Months)", href: "/#programs" },
            { label: "Digital Marketing Program (4 Months)", href: "/#programs" },
            { label: "Data Analytics Program", href: "/#programs" },
            { label: "Data Science Program", href: "/#programs" },
            { label: "Cyber Security Program", href: "/#programs" },
            { label: "Artificial Intelligence Program", href: "/#programs" },
            { label: "Full Stack Development Program", href: "/#programs" },
          ],
        },
        {
          title: "After 12th 6-Month Program",
          text: "Half a year, finishing with a portfolio",
          links: [
            { label: "Cloud Computing Certificate Program", href: "/#programs" },
            { label: "Flutter App Development Certificate Program", href: "/#programs" },
            { label: "MERN Stack Certificate Program", href: "/#programs" },
            { label: "Agentic AI Certificate Program", href: "/#programs" },
            { label: "Digital Marketing Certificate Program", href: "/#programs" },
            { label: "Data Analytics Certificate Program", href: "/#programs" },
            { label: "Data Science Certificate Program", href: "/#programs" },
            { label: "Cyber Security Certificate Program", href: "/#programs" },
            { label: "Artificial Intelligence Certificate Program", href: "/#programs" },
            { label: "Full Stack Development Certificate Program", href: "/#programs" },
          ],
        },
        {
          title: "After 12th 9-Month Program",
          text: "The longest track, with placement preparation",
          links: [
            { label: "Cloud Computing Diploma Program", href: "/#programs" },
            { label: "Flutter App Development Diploma Program", href: "/#programs" },
            { label: "MERN Stack Diploma Program", href: "/#programs" },
            { label: "Agentic AI Diploma Program", href: "/#programs" },
            { label: "Digital Marketing Diploma Program", href: "/#programs" },
            { label: "Cyber Security Diploma Program", href: "/#programs" },
            { label: "Artificial Intelligence Diploma Program", href: "/#programs" },
            { label: "Full Stack Development Diploma Program", href: "/#programs" },
          ],
        },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "Browse After 12th courses", href: "/#programs" },
    },
  },
  {
    label: "Resources",
    href: "/#blog",
    columns: {
      columns: [
        {
          title: "Career Tools",
          text: "Plan your path with smart, free tools",
          links: [
            { label: "Find My Career Track", href: "/#demo", badge: "New" },
            { label: "Training Matcher", href: "/#demo", badge: "New" },
            { label: "Salary Estimator", href: "/#placements", badge: "New" },
            { label: "Placements & Salaries", href: "/#placements", badge: "New" },
            { label: "Compare Courses", href: "/#courses" },
          ],
        },
        {
          title: "Guidance",
          text: "Talk to people who've done it",
          links: [
            { label: "Free Career Counselling", href: "/#demo" },
            { label: "1:1 Mentorship", href: "/#demo" },
            { label: "AI Marketing", href: "/#courses" },
            { label: "Freelancing", href: "/#courses" },
          ],
        },
        {
          title: "Explore",
          text: "Stories, events and life at techcadd",
          links: [
            { label: "Why techcadd", href: "/#why-us" },
            { label: "Blogs", href: "/#blog" },
            { label: "Pages", href: "/#blog" },
            { label: "Events", href: "/#blog" },
            { label: "Gallery", href: "/#about" },
          ],
        },
        {
          title: "Help & Community",
          text: "Answers, reviews and partners",
          links: [
            { label: "FAQ", href: "/#faq" },
            { label: "Reviews", href: "/#testimonials" },
            { label: "College Partnerships", href: "/#programs" },
          ],
        },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "Ask us a question", href: "/#faq" },
    },
  },
  { label: "Contact Us", href: "/#contact" },
];

export const heroStats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 50000, suffix: "+", label: "Students Trained" },
  { value: 500, suffix: "+", label: "Hiring Partners" },
  { value: 7, suffix: "", label: "Branches in North India" },
];

export const categories = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "BrainCircuit",
    blurb: "Generative AI, ML, LLM apps & prompt engineering.",
    courses: 8,
  },
  {
    id: "dev",
    title: "Full-Stack Development",
    icon: "Code2",
    blurb: "MERN, Next.js, Python-Django, Java & PHP.",
    courses: 12,
  },
  {
    id: "data",
    title: "Data Science & Analytics",
    icon: "ChartBar",
    blurb: "Python, SQL, Power BI, Tableau & statistics.",
    courses: 7,
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: "ShieldCheck",
    blurb: "Ethical hacking, VAPT, SOC & network security.",
    courses: 5,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "Cloud",
    blurb: "AWS, Azure, Docker, Kubernetes & CI/CD.",
    courses: 6,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: "Megaphone",
    blurb: "SEO, performance ads, social & AI marketing.",
    courses: 6,
  },
  {
    id: "design",
    title: "Graphic & UI/UX Design",
    icon: "PenTool",
    blurb: "Figma, Adobe suite, motion & product design.",
    courses: 7,
  },
  {
    id: "cad",
    title: "CAD / CAM & Engineering",
    icon: "Box",
    blurb: "AutoCAD, SolidWorks, Revit, CATIA & 3ds Max.",
    courses: 10,
  },
];

export type Course = {
  title: string;
  category: string; // matches categories[].id
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  mode: string;
  highlights: string[];
  popular?: boolean;
};

export const courses: Course[] = [
  {
    title: "Generative AI & Machine Learning",
    category: "ai",
    duration: "6 Months",
    level: "Intermediate",
    mode: "Classroom + Live",
    highlights: ["LLMs & RAG apps", "Python & ML", "10+ AI projects"],
    popular: true,
  },
  {
    title: "Full-Stack Web Development (MERN + Next.js)",
    category: "dev",
    duration: "6 Months",
    level: "Beginner",
    mode: "Classroom + Live",
    highlights: ["React & Next.js", "Node & MongoDB", "Deploy to cloud"],
    popular: true,
  },
  {
    title: "Data Science with Python & Power BI",
    category: "data",
    duration: "5 Months",
    level: "Beginner",
    mode: "Classroom + Live",
    highlights: ["Pandas & NumPy", "SQL & dashboards", "Capstone project"],
  },
  {
    title: "Ethical Hacking & Cybersecurity",
    category: "cyber",
    duration: "4 Months",
    level: "Intermediate",
    mode: "Classroom",
    highlights: ["Kali Linux", "VAPT labs", "SOC fundamentals"],
  },
  {
    title: "AWS Cloud & DevOps Engineer",
    category: "cloud",
    duration: "4 Months",
    level: "Intermediate",
    mode: "Classroom + Live",
    highlights: ["AWS services", "Docker & K8s", "CI/CD pipelines"],
  },
  {
    title: "AI-Powered Digital Marketing",
    category: "marketing",
    duration: "4 Months",
    level: "All Levels",
    mode: "Classroom + Live",
    highlights: ["SEO & Google Ads", "Meta Ads", "AI content tools"],
    popular: true,
  },
  {
    title: "UI/UX & Product Design",
    category: "design",
    duration: "4 Months",
    level: "Beginner",
    mode: "Classroom",
    highlights: ["Figma mastery", "Design systems", "Portfolio build"],
  },
  {
    title: "AutoCAD, Revit & 3ds Max (Civil/Arch)",
    category: "cad",
    duration: "3 Months",
    level: "Beginner",
    mode: "Classroom",
    highlights: ["2D & 3D drafting", "BIM with Revit", "Rendering"],
  },
  {
    title: "SolidWorks & CATIA (Mechanical)",
    category: "cad",
    duration: "3 Months",
    level: "Beginner",
    mode: "Classroom",
    highlights: ["Part & assembly", "Sheet metal", "Simulation"],
  },
  {
    title: "Python Programming with AI",
    category: "dev",
    duration: "2 Months",
    level: "Beginner",
    mode: "Classroom + Live",
    highlights: ["Core Python", "OOP & APIs", "AI automation"],
  },
  {
    title: "Graphic Design & Video Editing",
    category: "design",
    duration: "3 Months",
    level: "Beginner",
    mode: "Classroom",
    highlights: ["Photoshop & Illustrator", "Premiere Pro", "Brand design"],
  },
  {
    title: "Java Full-Stack with Spring Boot",
    category: "dev",
    duration: "6 Months",
    level: "Intermediate",
    mode: "Classroom",
    highlights: ["Core & Adv. Java", "Spring Boot", "React front-end"],
  },
];

export const aiProgram = {
  eyebrow: "Flagship Program",
  title: "Applied Generative AI Engineering",
  subtitle:
    "North India's most hands-on AI program — build real products with LLMs, agents and automation, mentored by industry engineers.",
  duration: "6 Months",
  nextBatch: "New batches every month",
  modules: [
    "Python for AI & Data Handling",
    "Machine Learning & Deep Learning",
    "LLMs, Prompt Engineering & RAG",
    "AI Agents & Workflow Automation",
    "Deploying AI Apps to the Cloud",
    "Capstone: Ship a Real AI Product",
  ],
  tools: ["Python", "PyTorch", "LangChain", "OpenAI & Claude APIs", "Vector DBs", "Hugging Face"],
};

export const steps = [
  { title: "Free Career Counselling", text: "Talk to our mentors to map your goals to the right course and career path.", icon: "Target" },
  { title: "Book a Free Demo", text: "Attend a live demo class at any North India branch or online before you enrol.", icon: "Calendar" },
  { title: "Learn by Building", text: "Industry curriculum, live projects and weekly mentor reviews — no rote learning.", icon: "Laptop" },
  { title: "Get Certified & Placed", text: "Earn a verifiable certificate, build your portfolio and get placement support.", icon: "Rocket" },
];

export const whyUs = [
  { title: "20+ Years of Legacy", text: "A trusted name in North India since 2007 with 50,000+ alumni.", icon: "Award" },
  { title: "Industry-Expert Mentors", text: "Learn from working professionals, not just trainers.", icon: "Users" },
  { title: "100% Placement Assistance", text: "Resume building, mock interviews and 500+ hiring partners.", icon: "Briefcase" },
  { title: "AI in Every Course", text: "Every curriculum is upgraded with AI tools used in real jobs.", icon: "Sparkles" },
  { title: "Live Projects & Internships", text: "Work on real client projects and earn internship certificates.", icon: "Layers" },
  { title: "Flexible Learning", text: "Weekday, weekend, classroom and live online batches.", icon: "Clock" },
];

export const programs = [
  {
    title: "6 Weeks / 6 Months Industrial Training",
    text: "University-approved industrial training for B.Tech, BCA, MCA, Diploma & polytechnic students of PTU, GNDU, PU, LPU, CU and more.",
    icon: "GraduationCap",
    tag: "B.Tech / BCA / MCA",
  },
  {
    title: "After 12th Career Programs",
    text: "Job-ready diploma programs in IT, design and digital marketing for students who want a career right after school.",
    icon: "BookOpen",
    tag: "10+2 Students",
  },
  {
    title: "Certificate Programs",
    text: "Short, skill-focused certifications for working professionals looking to upskill or switch careers fast.",
    icon: "BadgeCheck",
    tag: "Professionals",
  },
  {
    title: "Internship & Live Projects",
    text: "Paid and unpaid internships with real deliverables, mentor reviews and experience letters.",
    icon: "Briefcase",
    tag: "Freshers",
  },
];

export const placementStats = [
  { value: 92, suffix: "%", label: "Placement rate*" },
  { value: 4.5, suffix: " LPA", label: "Average package*", decimals: 1 },
  { value: 18, suffix: " LPA", label: "Highest package*" },
  { value: 500, suffix: "+", label: "Hiring partners" },
];

/** Displayed as text logos in the marquee (replace with real logo images when available). */
export const recruiters = [
  "Infosys", "TCS", "Wipro", "HCLTech", "Tech Mahindra", "Accenture", "Capgemini",
  "Cognizant", "Quark", "Trident Group", "Sonalika", "IDS Infotech", "Netsmartz", "Mohali IT Park",
];

export const technologies = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Java", "Spring Boot",
  "MongoDB", "MySQL", "Power BI", "Tableau", "AWS", "Azure", "Docker", "Kubernetes",
  "TensorFlow", "PyTorch", "LangChain", "Figma", "Photoshop", "AutoCAD", "SolidWorks", "Revit",
];

export const testimonials = [
  { name: "Harpreet Kaur", role: "Frontend Developer", city: "Jalandhar", text: "The MERN course was completely project-based. By the end I had 5 live projects in my portfolio and got placed at a Mohali IT company within a month." },
  { name: "Arjun Sharma", role: "Data Analyst", city: "Ludhiana", text: "Mentors explained every concept with real business data. The Power BI dashboards I built during training were exactly what my interviewer asked about." },
  { name: "Simranjeet Singh", role: "Cybersecurity Intern", city: "Amritsar", text: "Hands-on labs for ethical hacking were amazing. The faculty helped me prepare for certifications and interviews step by step." },
  { name: "Neha Thakur", role: "Digital Marketer", city: "Hoshiarpur", text: "I joined after 12th with zero knowledge. Now I run ad campaigns for three clients. The AI marketing tools module was a game-changer." },
  { name: "Rohit Verma", role: "B.Tech Industrial Trainee", city: "Phagwara", text: "My 6-month industrial training was the best decision of my degree. Real projects, proper guidance and a strong certificate for my university." },
  { name: "Ananya Gupta", role: "UI/UX Designer", city: "Chandigarh", text: "The design course pushed me to build a real portfolio. Weekly feedback sessions made a huge difference to my confidence." },
];

export const faqs = [
  { q: "Which courses does TechCADD offer?", a: "We offer 60+ career courses across AI & Machine Learning, Full-Stack Development, Data Science, Cybersecurity, Cloud & DevOps, Digital Marketing, Graphic & UI/UX Design and CAD/CAM engineering software." },
  { q: "Do you provide placement assistance?", a: "Yes. Every career program includes 100% placement assistance — resume building, mock interviews, soft-skills training and interview referrals through our 500+ hiring partners across North India and beyond." },
  { q: "Do you offer 6 weeks / 6 months industrial training?", a: "Yes. We provide university-approved industrial training for B.Tech, BCA, MCA, Diploma and polytechnic students of PTU, GNDU, PU, LPU, CU and other North India universities, with live projects and certificates." },
  { q: "Where are your branches located?", a: "We have branches in Jalandhar (head office), Chandigarh, Mohali, Ludhiana, Amritsar, Phagwara and Hoshiarpur. Students from Haryana, Himachal, J&K, Delhi NCR and Uttarakhand can join live online batches." },
  { q: "Can I attend a free demo class?", a: "Absolutely. Book a free demo using the form on this page or call us — you can attend at any branch or join online." },
  { q: "Are the certificates recognised?", a: "Our certificates are industry-recognised and verifiable online. Many courses also prepare you for global certifications from AWS, Microsoft, Autodesk and others." },
  { q: "Is there an EMI or scholarship option?", a: "Yes, easy EMI options and merit-based scholarships are available. Speak with a counsellor for current offers." },
];

export const blogs = [
  { title: "Top 10 AI Skills in Demand in Punjab & Chandigarh IT Hubs (2026)", category: "Artificial Intelligence", date: "Sep 18, 2026", read: "6 min" },
  { title: "Best IT Courses After 12th in North India: A Complete Guide", category: "Career Guide", date: "Sep 10, 2026", read: "8 min" },
  { title: "6 Months Industrial Training for B.Tech: How to Choose Right", category: "Industrial Training", date: "Aug 29, 2026", read: "5 min" },
  { title: "Full-Stack vs Data Science: Which Career Pays More in 2026?", category: "Careers", date: "Aug 20, 2026", read: "7 min" },
  { title: "How Mohali IT Park Is Hiring Freshers This Year", category: "Placements", date: "Aug 12, 2026", read: "4 min" },
  { title: "AutoCAD vs Revit: What Civil Engineers Should Learn First", category: "CAD", date: "Aug 02, 2026", read: "5 min" },
];

export const footerLinks = {
  Courses: [
    { label: "Artificial Intelligence", href: "/#courses" },
    { label: "Full-Stack Development", href: "/#courses" },
    { label: "Data Science", href: "/#courses" },
    { label: "Cybersecurity", href: "/#courses" },
    { label: "Cloud & DevOps", href: "/#courses" },
    { label: "Digital Marketing", href: "/#courses" },
    { label: "CAD / CAM", href: "/#courses" },
  ],
  Programs: [
    { label: "6 Weeks Industrial Training", href: "/#programs" },
    { label: "6 Months Industrial Training", href: "/#programs" },
    { label: "After 12th Courses", href: "/#programs" },
    { label: "Certificate Programs", href: "/#programs" },
    { label: "Internship & Live Projects", href: "/#programs" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Why TechCADD", href: "/#why-us" },
    { label: "Placements", href: "/#placements" },
    { label: "Student Reviews", href: "/#testimonials" },
    { label: "Blogs", href: "/#blog" },
  ],
  Support: [
    { label: "FAQs", href: "/#faq" },
    { label: "Book Free Demo", href: "/#demo" },
    { label: "Career Counselling", href: "/#demo" },
    { label: "Our Branches", href: "/#branches" },
  ],
};
