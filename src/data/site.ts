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
      { label: "About techcadd", href: "/about" },
      { label: "Mission and Vision", href: "/about/mission-vision" },
      { label: "Our Founder", href: "/#about" },
    ],
    featured: [
      { title: "About techcadd", href: "/about", badge: "Story", meta: "Since 2007", image: navAboutImg, alt: "TechCADD students in a seminar hall" },
      { title: "Mission and Vision", href: "/about/mission-vision", badge: "Purpose", meta: "Our Direction", image: navMissionImg, alt: "Students at a TechCADD auditorium session" },
      { title: "Our Founder", href: "/#about", badge: "Profile", meta: "Gourav Gupta", image: navFounderImg, alt: "Founder Gourav Gupta presenting a robot dog on stage" },
    ],
  },
  {
    label: "AI",
    href: "/ai-courses",
    highlight: true,
    skills: {
      title: "Learn AI Skills.",
      text: "Build projects with machine learning, data science, automation, and generative AI.",
      groups: [
        {
          title: "AI Fundamentals",
          icon: "Sparkles",
          links: [
            { label: "Generative AI", href: "/ai-courses/generative-ai" },
            { label: "Artificial Intelligence (AI)", href: "/ai-courses/artificial-intelligence" },
            { label: "Prompt Engineering", href: "/ai-courses/prompt-engineering" },
            { label: "ChatGPT & AI Tools", href: "/ai-courses/chatgpt-ai-tools", hot: true },
          ],
        },
        {
          title: "AI Development",
          icon: "Zap",
          links: [
            { label: "Agentic AI", href: "/ai-courses/agentic-ai", hot: true },
            { label: "AI-Powered Marketing", href: "/ai-courses/ai-powered-marketing", hot: true },
            { label: "RAG (Retrieval-Augmented Generation)", href: "/ai-courses/rag" },
            { label: "Machine Learning", href: "/ai-courses/machine-learning" },
          ],
        },
      ],
      featuredCourse: { tag: "Featured AI Course", title: "Artificial Intelligence Training in North India", href: "/ai-courses/artificial-intelligence", art: "AI" },
      cta: { text: "Start with AI fundamentals, then move into real projects and career-ready tools.", button: "Explore AI", href: "/ai-courses" },
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
            { label: "Python", href: "/courses/python" },
            { label: "Java", href: "/courses/java" },
            { label: "C & C++", href: "/courses/c-cpp" },
            { label: "Kotlin", href: "/courses/kotlin" },
            { label: "Web Designing", href: "/courses/web-designing" },
            { label: "Web Development", href: "/courses/web-development" },
            { label: "MERN Stack", href: "/courses/mern-stack" },
            { label: "MEAN Stack", href: "/courses/mean-stack" },
            { label: "PHP Full Stack", href: "/courses/php-full-stack" },
            { label: "IT Foundation Programme", href: "/courses/it-foundation" },
          ],
        },
        {
          title: "AI & Data",
          text: "Models, analytics and decision intelligence",
          links: [
            { label: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
            { label: "Machine Learning", href: "/courses/machine-learning" },
            { label: "Deep Learning", href: "/courses/deep-learning" },
            { label: "Data Science", href: "/courses/data-science" },
            { label: "Data Analytics", href: "/courses/data-analytics" },
            { label: "Power BI", href: "/courses/power-bi" },
            { label: "Tableau", href: "/courses/tableau" },
          ],
        },
        {
          title: "Digital Marketing",
          text: "Growth, performance and commerce",
          links: [
            { label: "Digital Marketing", href: "/courses/digital-marketing" },
            { label: "Social Media Marketing", href: "/courses/social-media-marketing" },
            { label: "Google Ads", href: "/courses/google-ads" },
            { label: "SEO", href: "/courses/seo" },
            { label: "WordPress", href: "/courses/wordpress" },
            { label: "Shopify", href: "/courses/shopify" },
          ],
        },
        {
          title: "Cyber & Cloud",
          text: "Secure, resilient infrastructure",
          links: [
            { label: "Cybersecurity", href: "/courses/cybersecurity" },
            { label: "Ethical Hacking", href: "/courses/ethical-hacking" },
            { label: "Cloud Computing", href: "/courses/cloud-computing" },
            { label: "Linux", href: "/courses/linux" },
          ],
        },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "Browse all courses", href: "/courses" },
    },
  },
  {
    label: "Internship & Training",
    href: "/#programs",
    tiles: {
      tiles: [
        { label: "Cloud Computing", href: "/training/cloud-computing", icon: "Cloud" },
        { label: "Flutter App Development", href: "/training/flutter-app-development", icon: "Smartphone" },
        { label: "MERN Stack", href: "/training/mern-stack", icon: "CodeXml" },
        { label: "Agentic AI", href: "/training/agentic-ai", icon: "Brain", badge: "New" },
        { label: "Digital Marketing", href: "/training/digital-marketing", icon: "Megaphone" },
        { label: "Data Analytics", href: "/training/data-analytics", icon: "ChartColumn" },
        { label: "Data Science", href: "/training/data-science", icon: "ChartColumn" },
        { label: "Cyber Security", href: "/training/cyber-security", icon: "ShieldCheck" },
        { label: "Artificial Intelligence", href: "/training/artificial-intelligence", icon: "Brain" },
        { label: "Full Stack Development", href: "/training/full-stack-development", icon: "CodeXml" },
        { label: "Basic Skill and Programs", href: "/training/basic-skill-programs", icon: "Monitor" },
        { label: "Civil/Mechanical", href: "/training/civil-mechanical", icon: "Box" },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "See all training formats", href: "/training" },
    },
  },
  {
    label: "After 12th",
    href: "/after-12th",
    columns: {
      variant: "glass",
      columns: [
        {
          title: "After 12th 3-Month Program",
          text: "One subject, one term, one live project",
          links: [
            { label: "Cloud Computing Program", href: "/after-12th/3-month-cloud-computing" },
            { label: "Flutter App Development Program", href: "/after-12th/3-month-flutter-app-development" },
            { label: "MERN Stack Program", href: "/after-12th/3-month-mern-stack" },
            { label: "Agentic AI Program", href: "/after-12th/3-month-agentic-ai" },
            { label: "Digital Marketing Program (3 Months)", href: "/after-12th/3-month-digital-marketing" },
            { label: "Digital Marketing Program (4 Months)", href: "/after-12th/4-month-digital-marketing" },
            { label: "Data Analytics Program", href: "/after-12th/3-month-data-analytics" },
            { label: "Data Science Program", href: "/after-12th/3-month-data-science" },
            { label: "Cyber Security Program", href: "/after-12th/3-month-cyber-security" },
            { label: "Artificial Intelligence Program", href: "/after-12th/3-month-artificial-intelligence" },
            { label: "Full Stack Development Program", href: "/after-12th/3-month-full-stack-development" },
          ],
        },
        {
          title: "After 12th 6-Month Program",
          text: "Half a year, finishing with a portfolio",
          links: [
            { label: "Cloud Computing Certificate Program", href: "/after-12th/6-month-cloud-computing" },
            { label: "Flutter App Development Certificate Program", href: "/after-12th/6-month-flutter-app-development" },
            { label: "MERN Stack Certificate Program", href: "/after-12th/6-month-mern-stack" },
            { label: "Agentic AI Certificate Program", href: "/after-12th/6-month-agentic-ai" },
            { label: "Digital Marketing Certificate Program", href: "/after-12th/6-month-digital-marketing" },
            { label: "Data Analytics Certificate Program", href: "/after-12th/6-month-data-analytics" },
            { label: "Data Science Certificate Program", href: "/after-12th/6-month-data-science" },
            { label: "Cyber Security Certificate Program", href: "/after-12th/6-month-cyber-security" },
            { label: "Artificial Intelligence Certificate Program", href: "/after-12th/6-month-artificial-intelligence" },
            { label: "Full Stack Development Certificate Program", href: "/after-12th/6-month-full-stack-development" },
          ],
        },
        {
          title: "After 12th 9-Month Program",
          text: "The longest track, with placement preparation",
          links: [
            { label: "Cloud Computing Diploma Program", href: "/after-12th/9-month-cloud-computing" },
            { label: "Flutter App Development Diploma Program", href: "/after-12th/9-month-flutter-app-development" },
            { label: "MERN Stack Diploma Program", href: "/after-12th/9-month-mern-stack" },
            { label: "Agentic AI Diploma Program", href: "/after-12th/9-month-agentic-ai" },
            { label: "Digital Marketing Diploma Program", href: "/after-12th/9-month-digital-marketing" },
            { label: "Cyber Security Diploma Program", href: "/after-12th/9-month-cyber-security" },
            { label: "Artificial Intelligence Diploma Program", href: "/after-12th/9-month-artificial-intelligence" },
            { label: "Full Stack Development Diploma Program", href: "/after-12th/9-month-full-stack-development" },
          ],
        },
      ],
      quote: { text: "Everybody should learn to program a computer, because it teaches you how to think.", author: "Steve Jobs" },
      browse: { label: "Browse After 12th courses", href: "/after-12th" },
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

/** Technologies section (orbit). `icon` = a `simple-icons` export name (e.g. "siPython");
 *  brands missing from simple-icons use a coloured monogram: `mono` text + `color` hex. First 5 items = inner ring. */
export type TechItem = { name: string; icon?: string; mono?: string; color?: string };
export const techStack: { id: string; label: string; items: TechItem[] }[] = [
  {
    id: "programming", label: "Programming", items: [
      { name: "Python", icon: "siPython" }, { name: "Go", icon: "siGo" }, { name: "Swift", icon: "siSwift" },
      { name: "Rust", icon: "siRust" }, { name: "R", icon: "siR" },
      { name: "C++", icon: "siCplusplus" }, { name: "C", icon: "siC" }, { name: "PHP", icon: "siPhp" },
      { name: "Kotlin", icon: "siKotlin" }, { name: "Java", icon: "siOpenjdk" }, { name: "Linux", icon: "siLinux" },
      { name: "JavaScript", icon: "siJavascript" }, { name: "TypeScript", icon: "siTypescript" },
    ],
  },
  {
    id: "frameworks", label: "Frameworks", items: [
      { name: "React", icon: "siReact" }, { name: "Next.js", icon: "siNextdotjs" }, { name: "Node.js", icon: "siNodedotjs" },
      { name: "Django", icon: "siDjango" }, { name: "Tailwind CSS", icon: "siTailwindcss" },
      { name: "Angular", icon: "siAngular" }, { name: "Vue.js", icon: "siVuedotjs" }, { name: "Express", icon: "siExpress" },
      { name: "Spring Boot", icon: "siSpringboot" }, { name: "Laravel", icon: "siLaravel" }, { name: "Flask", icon: "siFlask" },
      { name: "WordPress", icon: "siWordpress" }, { name: "Shopify", icon: "siShopify" },
    ],
  },
  {
    id: "ai", label: "AI & ML", items: [
      { name: "TensorFlow", icon: "siTensorflow" }, { name: "PyTorch", icon: "siPytorch" }, { name: "LangChain", icon: "siLangchain" },
      { name: "Hugging Face", icon: "siHuggingface" }, { name: "Claude", icon: "siClaude" },
      { name: "Scikit-learn", icon: "siScikitlearn" }, { name: "Keras", icon: "siKeras" }, { name: "Pandas", icon: "siPandas" },
      { name: "NumPy", icon: "siNumpy" }, { name: "Jupyter", icon: "siJupyter" }, { name: "OpenCV", icon: "siOpencv" },
      { name: "Gemini", icon: "siGooglegemini" }, { name: "Ollama", icon: "siOllama" },
    ],
  },
  {
    id: "cad", label: "CAD / CAM", items: [
      { name: "AutoCAD", icon: "siAutocad" }, { name: "SolidWorks", mono: "SW", color: "#DA291C" },
      { name: "Revit", mono: "Rv", color: "#186BFF" }, { name: "SketchUp", icon: "siSketchup" }, { name: "Blender", icon: "siBlender" },
      { name: "Autodesk", icon: "siAutodesk" }, { name: "CATIA", mono: "C", color: "#005386" }, { name: "Ansys", icon: "siAnsys" },
      { name: "Dassault Systèmes", icon: "siDassaultsystemes" }, { name: "Photoshop", mono: "Ps", color: "#31A8FF" },
      { name: "Figma", icon: "siFigma" }, { name: "MATLAB", mono: "M", color: "#E16737" },
    ],
  },
  {
    id: "databases", label: "Databases", items: [
      { name: "MySQL", icon: "siMysql" }, { name: "MongoDB", icon: "siMongodb" }, { name: "PostgreSQL", icon: "siPostgresql" },
      { name: "Redis", icon: "siRedis" }, { name: "Firebase", icon: "siFirebase" },
      { name: "SQLite", icon: "siSqlite" }, { name: "Oracle", mono: "O", color: "#F80000" }, { name: "Power BI", mono: "BI", color: "#F2C811" },
      { name: "Tableau", mono: "T", color: "#E97627" }, { name: "Pandas", icon: "siPandas" },
    ],
  },
  {
    id: "devops", label: "DevOps", items: [
      { name: "Docker", icon: "siDocker" }, { name: "Kubernetes", icon: "siKubernetes" }, { name: "Git", icon: "siGit" },
      { name: "GitHub", icon: "siGithub" }, { name: "Jenkins", icon: "siJenkins" },
      { name: "GitHub Actions", icon: "siGithubactions" }, { name: "Terraform", icon: "siTerraform" }, { name: "Ansible", icon: "siAnsible" },
      { name: "Linux", icon: "siLinux" }, { name: "Kali Linux", icon: "siKalilinux" }, { name: "Wireshark", icon: "siWireshark" },
    ],
  },
  {
    id: "cloud", label: "Cloud", items: [
      { name: "AWS", mono: "AWS", color: "#FF9900" }, { name: "Microsoft Azure", mono: "Az", color: "#0078D4" },
      { name: "Google Cloud", icon: "siGooglecloud" }, { name: "Vercel", icon: "siVercel" }, { name: "Firebase", icon: "siFirebase" },
      { name: "Cloudflare", icon: "siCloudflare" }, { name: "DigitalOcean", icon: "siDigitalocean" }, { name: "Netlify", icon: "siNetlify" },
      { name: "Docker", icon: "siDocker" }, { name: "Kubernetes", icon: "siKubernetes" }, { name: "Terraform", icon: "siTerraform" },
    ],
  },
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
    { label: "Programming", href: "/courses" },
    { label: "AI & Data", href: "/courses" },
    { label: "Digital Marketing", href: "/courses" },
    { label: "Cyber & Cloud", href: "/courses" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Mission & Vision", href: "/#why-us" },
    { label: "Our Founder", href: "/#about" },
    { label: "Contact Us", href: "/#demo" },
  ],
  Support: [
    { label: "Placement Support", href: "/#placements" },
    { label: "Student Reviews", href: "/#testimonials" },
    { label: "FAQs", href: "/#faq" },
    { label: "Enquire Now", href: "/#demo" },
  ],
};

/** Bottom-row legal links in the footer. TODO: these pages don't exist yet — create the routes before launch. */
export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

/* ───────── AI course pages (/ai-courses/[slug]) — one entry per link in the AI nav dropdown ─────────
   Pricing is intentionally NOT shown on AI pages (counsellor shares it). Mentors and stories are SAMPLE content — confirm with the client before launch. */

export type AiMentor = {
  id: string;
  name: string;
  role: string;
  experience: string;
  students: string;
  bio: string;
  expertise: string[];
  /** Optional photo (static import from src/assets). Falls back to an initials avatar. */
  image?: StaticImageData;
};

export type AiCourse = {
  slug: string;
  /** Page H1, e.g. "Generative AI Course" (rendered with "in Jalandhar"). */
  title: string;
  /** Exact label used in the AI nav dropdown. */
  navLabel: string;
  tag?: string;
  tagline: string;
  level: Course["level"];
  duration: string;
  hours: string;
  projects: number;
  overview: string[];
  outcomes: { title: string; text: string; icon: string }[];
  curriculum: { period: string; title: string; modules: { title: string; topics: string[]; project: string }[] }[];
  tools: { name: string; use: string }[];
  audience: { title: string; text: string; icon: string }[];
  mentor: string; // aiMentors[].id
  faqs: { q: string; a: string }[];
  related: string[]; // aiCourses[].slug
};

export const aiMentors: AiMentor[] = [
  {
    id: "karan",
    name: "Karan Mehta",
    role: "Lead Generative AI Mentor",
    experience: "9+ years",
    students: "1,200+",
    bio: "Builds LLM and agent products for international clients and has mentored over a thousand students in Python and AI. His classes focus on shipping real, deployable projects — not slides.",
    expertise: ["LLM apps", "AI agents", "RAG", "Python", "Cloud deployment"],
  },
  {
    id: "priya",
    name: "Dr. Priya Sood",
    role: "Head of Data Science & AI",
    experience: "12+ years",
    students: "2,000+",
    bio: "PhD in machine learning with industry experience in forecasting and computer vision. Known for turning complex maths into clear, code-first lessons that stick.",
    expertise: ["Machine learning", "Deep learning", "Computer vision", "Statistics"],
  },
  {
    id: "aman",
    name: "Aman Bedi",
    role: "AI Productivity & Marketing Mentor",
    experience: "8+ years",
    students: "1,500+",
    bio: "Runs AI-first marketing campaigns for brands across Punjab and trains teams to use ChatGPT and AI tools productively and safely at work.",
    expertise: ["Prompt engineering", "AI tools", "Performance marketing", "Automation"],
  },
];

/** Shared by every AI course page. */
export const aiCourseCommon = {
  nextBatch: "New batches start every month",
  includes: ["Lab access & AI tool credits", "Recorded sessions for revision", "Weekly 1:1 mentor reviews", "Lifetime alumni community"],
  batches: [
    { label: "Weekday Morning", time: "Mon – Fri · 9:00 – 11:00 AM", mode: "Classroom" },
    { label: "Weekday Evening", time: "Mon – Fri · 5:00 – 7:00 PM", mode: "Classroom" },
    { label: "Weekend", time: "Sat – Sun · 10:00 AM – 1:00 PM", mode: "Classroom + Live" },
    { label: "Live Online", time: "Mon – Fri · 8:00 – 9:30 PM", mode: "Live online" },
  ],
  certification: [
    "Verifiable online with a unique certificate ID",
    "Lists your projects and capstone",
    "Accepted for university industrial training credit",
    "Add to LinkedIn in one click",
  ],
  placement: [
    { title: "Resume & GitHub portfolio", text: "Mentors review your resume, GitHub and LinkedIn until they are interview-ready.", icon: "BadgeCheck" },
    { title: "Mock interviews", text: "Technical and HR mock rounds with feedback from working AI engineers.", icon: "Users" },
    { title: "Hiring partner referrals", text: "Direct referrals to 500+ hiring partners across North India and remote roles.", icon: "Briefcase" },
    { title: "Internship with live projects", text: "Top performers join live client projects and earn an experience letter.", icon: "Rocket" },
  ],
  faqs: [
    { q: "Do you provide placement assistance for AI courses?", a: "Yes. Every AI course includes 100% placement assistance — resume and portfolio reviews, mock interviews and referrals through our 500+ hiring partners." },
    { q: "Can I attend a free demo class before enrolling?", a: "Yes. Book a free demo using the form on this page or call us. You can attend at any branch or join a live online class." },
    { q: "How do I get fee and scholarship details?", a: "Book a free counselling session or message us on WhatsApp. A counsellor will share the current fee, EMI options and merit scholarships for your batch." },
  ],
};

/** Sample AI student stories. `course` = aiCourses[].slug (matching stories are shown first). */
export const aiTestimonials = [
  { name: "Gurpreet Singh", role: "AI Engineer (Fresher)", city: "Jalandhar", course: "generative-ai", text: "I built 11 AI apps during the course, including a PDF chatbot my college now uses. That project alone got me through three interview rounds." },
  { name: "Sukhmani Gill", role: "B.Tech Industrial Trainee", city: "Amritsar", course: "artificial-intelligence", text: "My 6-month AI training covered everything from Python to deep learning. The capstone report was appreciated by my university panel." },
  { name: "Jasleen Kaur", role: "Content Strategist", city: "Ludhiana", course: "prompt-engineering", text: "I use the prompt library I built in class every single day. My content output doubled and my manager noticed within a month." },
  { name: "Anil Bansal", role: "Shop Owner", city: "Phagwara", course: "chatgpt-ai-tools", text: "I now make my own posters, reels and customer replies with AI. The weekend batch fit perfectly around my shop timings." },
  { name: "Rahul Kapoor", role: "Automation Developer", city: "Mohali", course: "agentic-ai", text: "Agentic AI felt advanced, but the step-by-step labs made it manageable. My lead-qualification agent became the centrepiece of my portfolio." },
  { name: "Vikas Thakur", role: "Digital Marketing Executive", city: "Hoshiarpur", course: "ai-powered-marketing", text: "Running real ad campaigns with a budget gave me confidence no video course could. I got placed at an agency before the course ended." },
  { name: "Nikita Sharma", role: "Junior AI Developer", city: "Mohali", course: "rag", text: "The evaluation module is what set me apart. In my interview I could explain exactly how I measured and improved my RAG assistant." },
  { name: "Megha Arora", role: "ML Analyst", city: "Chandigarh", course: "machine-learning", text: "The loan-default and segmentation projects were exactly the kind of work I do now. Weekly code reviews made a huge difference." },
];

export const aiCourses: AiCourse[] = [
  {
    slug: "generative-ai",
    title: "Generative AI Course",
    navLabel: "Generative AI",
    tag: "Most Popular",
    tagline: "Build real apps with LLMs, image models and AI APIs — from your first prompt to a deployed product.",
    level: "Intermediate",
    duration: "6 Months",
    hours: "240+ hours",
    projects: 10,
    overview: [
      "Generative AI is changing how software, content and business work get done. This course takes you from Python basics to shipping your own AI-powered apps — chatbots, content generators, document assistants and image tools — using the same APIs and frameworks product teams use in Mohali IT Park and beyond.",
      "Every module ends with a project you build in class and review with a mentor. By the final month you will have a portfolio of 10+ working AI apps, a capstone deployed to the cloud and interview preparation from our placement team.",
    ],
    outcomes: [
      { title: "Python for AI", text: "Write clean Python and work confidently with APIs, JSON and data files.", icon: "Code2" },
      { title: "How LLMs work", text: "Understand tokens, context windows and embeddings in GPT, Claude, Gemini and Llama.", icon: "BrainCircuit" },
      { title: "Prompt design", text: "Write system prompts, few-shot examples and structured outputs that behave reliably.", icon: "MessageSquare" },
      { title: "RAG & vector search", text: "Connect models to your own PDFs, websites and databases.", icon: "Database" },
      { title: "Image & media generation", text: "Create and edit images, audio and video with multimodal models.", icon: "Sparkles" },
      { title: "Deployment", text: "Ship AI apps with Streamlit, FastAPI and the cloud — with cost and safety controls.", icon: "Rocket" },
    ],
    curriculum: [
      {
        period: "Months 1–2",
        title: "Foundations",
        modules: [
          { title: "Python for AI", topics: ["Variables, loops & functions", "Files, JSON & APIs", "NumPy & Pandas basics", "Git & GitHub workflow"], project: "Expense tracker that pulls live API data" },
          { title: "How Generative AI works", topics: ["Tokens, embeddings & context windows", "Transformers — the intuition", "GPT vs Claude vs Gemini vs Llama", "Responsible AI & data privacy"], project: "Model comparison report" },
        ],
      },
      {
        period: "Months 3–4",
        title: "Building with LLMs",
        modules: [
          { title: "Prompt engineering & structured output", topics: ["System prompts & roles", "Few-shot & step-by-step prompting", "JSON output & function calling", "Evaluating prompt quality"], project: "Resume-screening assistant" },
          { title: "RAG applications", topics: ["Chunking & embeddings", "Vector databases (Chroma, Pinecone)", "LangChain & LlamaIndex", "Citations & hallucination control"], project: "PDF Q&A chatbot for a college prospectus" },
        ],
      },
      {
        period: "Months 5–6",
        title: "Ship & get hired",
        modules: [
          { title: "Multimodal AI & agents", topics: ["Image generation with Stable Diffusion", "Speech-to-text & text-to-speech", "Tool use & simple agents", "Automation with n8n"], project: "AI content studio for a local business" },
          { title: "Deployment & capstone", topics: ["FastAPI & Streamlit apps", "Docker & cloud deployment", "Cost, rate limits & monitoring", "Portfolio & interview prep"], project: "Capstone: a deployed Generative AI product" },
        ],
      },
    ],
    tools: [
      { name: "Python", use: "Core language for every project" },
      { name: "OpenAI API", use: "GPT models & function calling" },
      { name: "Claude API", use: "Long-context reasoning & writing" },
      { name: "LangChain", use: "Chains, RAG & agent workflows" },
      { name: "Hugging Face", use: "Open-source models & datasets" },
      { name: "Chroma", use: "Vector search for RAG" },
      { name: "Streamlit", use: "Fast AI web app interfaces" },
      { name: "Stable Diffusion", use: "Image generation & editing" },
    ],
    audience: [
      { title: "B.Tech, BCA & MCA students", text: "Add an in-demand AI specialisation to your degree and industrial training.", icon: "GraduationCap" },
      { title: "Working developers", text: "Move from web or app development into AI engineering roles.", icon: "Code2" },
      { title: "Graduates switching careers", text: "Basic computer skills are enough — we teach Python from zero.", icon: "Rocket" },
      { title: "Founders & freelancers", text: "Build AI features and tools for your business or your clients.", icon: "Briefcase" },
    ],
    mentor: "karan",
    faqs: [
      { q: "Do I need coding experience for the Generative AI course?", a: "No. The first two months teach Python from scratch. If you already code, a counsellor can place you in a fast-track batch." },
      { q: "Which AI models will I work with?", a: "You will build with OpenAI GPT, Anthropic Claude, Google Gemini and open-source models like Llama, so your skills are not tied to one vendor." },
      { q: "Are API credits included for class projects?", a: "Yes. Lab API credits for class projects are included. For personal projects after the course, most providers offer free tiers." },
    ],
    related: ["rag", "agentic-ai", "prompt-engineering"],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence Course",
    navLabel: "Artificial Intelligence (AI)",
    tag: "Flagship",
    tagline: "Master machine learning, deep learning and generative AI in one structured, placement-focused course.",
    level: "Beginner",
    duration: "6 Months",
    hours: "260+ hours",
    projects: 12,
    overview: [
      "Our flagship Artificial Intelligence course covers the full AI stack — Python, statistics, machine learning, deep learning, computer vision, NLP and generative AI — in the order industry teams actually use them.",
      "It is built for students across Punjab, Chandigarh and North India who want a complete AI foundation rather than a single tool. You learn by building 12 projects and finish with an industry capstone and full placement support.",
    ],
    outcomes: [
      { title: "Python & data handling", text: "Clean, analyse and visualise real datasets with Pandas and Matplotlib.", icon: "Code2" },
      { title: "Maths for AI", text: "Build intuition for statistics, probability and linear algebra — code first.", icon: "ChartBar" },
      { title: "Machine learning", text: "Train, tune and evaluate regression, classification and clustering models.", icon: "BrainCircuit" },
      { title: "Deep learning", text: "Build neural networks with TensorFlow and PyTorch.", icon: "Layers" },
      { title: "Computer vision & NLP", text: "Classify images, detect objects and analyse text and sentiment.", icon: "Eye" },
      { title: "Generative AI", text: "Add LLMs, prompting and RAG to your projects.", icon: "Sparkles" },
    ],
    curriculum: [
      {
        period: "Months 1–2",
        title: "Python & data",
        modules: [
          { title: "Python programming", topics: ["Syntax, functions & OOP", "NumPy & Pandas", "Data visualisation", "Git & Jupyter notebooks"], project: "Punjab crop-yield data analysis" },
          { title: "Statistics for AI", topics: ["Descriptive statistics", "Probability & distributions", "Hypothesis testing", "Linear algebra intuition"], project: "Exploratory data report" },
        ],
      },
      {
        period: "Months 3–4",
        title: "Machine & deep learning",
        modules: [
          { title: "Machine learning", topics: ["Regression & classification", "Decision trees & ensembles", "Clustering & PCA", "Model evaluation & tuning"], project: "House-price predictor for the Tricity" },
          { title: "Deep learning", topics: ["Neural networks & backpropagation", "CNNs for images", "RNNs & transformers", "Transfer learning"], project: "Face-mask detector with a webcam" },
        ],
      },
      {
        period: "Months 5–6",
        title: "Applied AI & capstone",
        modules: [
          { title: "NLP & generative AI", topics: ["Text preprocessing & embeddings", "Sentiment & text classification", "LLM APIs & prompt design", "RAG basics"], project: "Punjabi–English FAQ chatbot" },
          { title: "MLOps & capstone", topics: ["Model APIs with FastAPI", "Docker basics", "Monitoring models in production", "Portfolio & mock interviews"], project: "Capstone: an end-to-end AI application" },
        ],
      },
    ],
    tools: [
      { name: "Python", use: "Core language for every project" },
      { name: "Jupyter", use: "Interactive notebooks for experiments" },
      { name: "Pandas", use: "Data cleaning & analysis" },
      { name: "scikit-learn", use: "Classical ML algorithms" },
      { name: "TensorFlow", use: "Deep learning models" },
      { name: "PyTorch", use: "Research-grade neural networks" },
      { name: "OpenCV", use: "Computer vision" },
      { name: "Hugging Face", use: "Pretrained NLP & vision models" },
    ],
    audience: [
      { title: "Students after 12th", text: "Start an AI career early with a structured, beginner-friendly path.", icon: "BookOpen" },
      { title: "B.Tech, BCA & MCA students", text: "University-approved 6-month industrial training with an AI capstone.", icon: "GraduationCap" },
      { title: "IT professionals", text: "Move from testing, support or development into AI/ML roles.", icon: "Laptop" },
      { title: "Analysts", text: "Add predictive modelling to your Excel, SQL or Power BI skills.", icon: "ChartBar" },
    ],
    mentor: "priya",
    faqs: [
      { q: "How is this different from the Generative AI course?", a: "This course covers the full AI stack — ML, deep learning, vision, NLP and generative AI. The Generative AI course goes deeper into LLM apps only. If you are unsure, start here." },
      { q: "Is maths compulsory for the AI course?", a: "You need 10+2 level maths. We teach the statistics and linear algebra you need with code-first examples, not heavy theory." },
      { q: "Can I do this as 6 months industrial training?", a: "Yes. It is available as university-approved 6-month industrial training for PTU, GNDU, PU, LPU, CU and other universities, with a project report and certificate." },
    ],
    related: ["machine-learning", "generative-ai", "agentic-ai"],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering Course",
    navLabel: "Prompt Engineering",
    tagline: "Get reliable, high-quality results from ChatGPT, Claude and Gemini — and turn prompting into a job skill.",
    level: "Beginner",
    duration: "6 Weeks",
    hours: "36 hours",
    projects: 5,
    overview: [
      "Prompt engineering is the skill of instructing AI models clearly enough that they produce accurate, useful and safe output every time. It is now expected in roles from content and marketing to software, HR and customer support.",
      "In six practical weeks you will learn proven prompt patterns, build a personal prompt library, evaluate outputs objectively and automate everyday work — no coding background required.",
    ],
    outcomes: [
      { title: "Prompt patterns", text: "Control output with role, context, examples and constraints.", icon: "MessageSquare" },
      { title: "Structured output", text: "Get tables, JSON and formatted documents you can use directly.", icon: "Layers" },
      { title: "Reasoning prompts", text: "Break complex tasks into steps the model follows accurately.", icon: "BrainCircuit" },
      { title: "Evaluation", text: "Test prompts against sample inputs and measure quality.", icon: "Target" },
      { title: "Multimodal prompting", text: "Prompt image, voice and document tools, not just chat.", icon: "Sparkles" },
      { title: "Safety & privacy", text: "Reduce hallucinations and bias, and protect sensitive data.", icon: "ShieldCheck" },
    ],
    curriculum: [
      {
        period: "Weeks 1–2",
        title: "Prompt fundamentals",
        modules: [
          { title: "How language models respond", topics: ["Tokens, context & temperature", "Strengths of GPT, Claude & Gemini", "Zero-shot vs few-shot prompting", "Common failure modes"], project: "Before-and-after prompt makeover" },
          { title: "Core prompt patterns", topics: ["Role & audience framing", "Step-by-step instructions", "Examples & templates", "Output formatting"], project: "Personal prompt library (30+ prompts)" },
        ],
      },
      {
        period: "Weeks 3–4",
        title: "Advanced techniques",
        modules: [
          { title: "Reasoning & structure", topics: ["Task decomposition", "JSON & table outputs", "Long documents & summarisation", "Custom GPTs & Projects"], project: "Custom GPT for a college helpdesk" },
          { title: "Evaluation & safety", topics: ["Test sets & scoring rubrics", "Reducing hallucinations", "Bias & fairness checks", "Data privacy at work"], project: "Prompt evaluation report" },
        ],
      },
      {
        period: "Weeks 5–6",
        title: "Prompting at work",
        modules: [
          { title: "Domain prompting", topics: ["Marketing & content workflows", "Coding assistants", "HR, sales & support use cases", "Image prompts (Midjourney, DALL·E)"], project: "Department playbook for a local business" },
          { title: "Automation & portfolio", topics: ["Prompt chaining", "Zapier & Make basics", "API playground introduction", "Portfolio & freelancing profile"], project: "Capstone: an automated content workflow" },
        ],
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Everyday prompting & Custom GPTs" },
      { name: "Claude", use: "Long documents & careful writing" },
      { name: "Gemini", use: "Google Workspace integration" },
      { name: "Microsoft Copilot", use: "Office & Windows workflows" },
      { name: "Midjourney", use: "Image prompting" },
      { name: "Perplexity", use: "Research with cited sources" },
      { name: "Zapier", use: "No-code automation" },
    ],
    audience: [
      { title: "Content writers & marketers", text: "Produce more, better content without losing your voice.", icon: "PenTool" },
      { title: "Students & freshers", text: "Add a practical AI skill to your resume in six weeks.", icon: "GraduationCap" },
      { title: "Office professionals", text: "Save hours on reports, emails and documentation every week.", icon: "Briefcase" },
      { title: "Teachers & trainers", text: "Create lesson plans, quizzes and material faster — responsibly.", icon: "BookOpen" },
    ],
    mentor: "aman",
    faqs: [
      { q: "Is prompt engineering a real career skill?", a: "Yes — as a role in AI teams and, more often, as a core skill in content, marketing, support, HR and development jobs. Recruiters in Mohali and Chandigarh increasingly list it in job descriptions." },
      { q: "Do I need to know coding for prompt engineering?", a: "No. The course is designed for non-programmers. Optional API sessions are included for those who want to go further." },
      { q: "Which paid tools do I need to buy?", a: "None. We use free tiers in class and provide lab access to paid features where needed." },
    ],
    related: ["chatgpt-ai-tools", "generative-ai", "ai-powered-marketing"],
  },
  {
    slug: "chatgpt-ai-tools",
    title: "ChatGPT & AI Tools Course",
    navLabel: "ChatGPT & AI Tools",
    tag: "Hot",
    tagline: "Use ChatGPT and 20+ AI tools to work faster in office, study, design and business — from week one.",
    level: "Beginner",
    duration: "4 Weeks",
    hours: "24 hours",
    projects: 4,
    overview: [
      "A short, hands-on course for anyone who wants to use AI productively today. You will learn ChatGPT properly, then build a toolkit of AI apps for writing, presentations, spreadsheets, design, video and research.",
      "Every session ends with a task from real work or study. It is ideal for students, office staff, teachers, shop owners and freelancers across Punjab who want results without learning to code.",
    ],
    outcomes: [
      { title: "ChatGPT mastery", text: "Write, summarise, translate and plan with reusable prompts.", icon: "MessageSquare" },
      { title: "Office productivity", text: "Build Excel formulas, reports and slide decks with AI help.", icon: "Laptop" },
      { title: "Design with AI", text: "Create social posts, posters and logos with Canva AI.", icon: "PenTool" },
      { title: "Video & voice", text: "Make short videos, voice-overs and captions for reels.", icon: "Megaphone" },
      { title: "Research", text: "Find and verify information with cited AI search tools.", icon: "Search" },
      { title: "Everyday automation", text: "Automate repetitive emails, forms and messages.", icon: "Workflow" },
    ],
    curriculum: [
      {
        period: "Week 1",
        title: "ChatGPT essentials",
        modules: [
          { title: "Getting started", topics: ["Accounts, plans & privacy settings", "Prompt basics that work", "Writing & rewriting", "Translation in Punjabi, Hindi & English"], project: "Personal study or work assistant" },
          { title: "Beyond chat", topics: ["Uploading files & images", "Custom instructions & memory", "Custom GPTs", "Voice mode"], project: "A Custom GPT for your job" },
        ],
      },
      {
        period: "Weeks 2–3",
        title: "Your AI tool stack",
        modules: [
          { title: "Office & documents", topics: ["Excel & Google Sheets with AI", "Presentations with Gamma & Copilot", "Notes with Notion AI", "Email & report templates"], project: "A monthly report built with AI" },
          { title: "Design, video & research", topics: ["Canva AI & Adobe Firefly", "CapCut & text-to-video tools", "ElevenLabs voice-overs", "Perplexity for research"], project: "Social media kit for a local shop" },
        ],
      },
      {
        period: "Week 4",
        title: "Apply it",
        modules: [
          { title: "Automation & safe use", topics: ["Zapier basics", "WhatsApp & email workflows", "Fact-checking AI output", "Data privacy rules"], project: "Capstone: an AI workflow for your own work" },
        ],
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Writing, planning & analysis" },
      { name: "Microsoft Copilot", use: "Word, Excel & PowerPoint" },
      { name: "Canva AI", use: "Posters, posts & branding" },
      { name: "Gamma", use: "AI presentations" },
      { name: "Perplexity", use: "Research with sources" },
      { name: "ElevenLabs", use: "AI voice-overs" },
      { name: "CapCut", use: "AI video editing" },
      { name: "Notion AI", use: "Notes & documents" },
    ],
    audience: [
      { title: "School & college students", text: "Study smarter and finish projects faster with AI.", icon: "BookOpen" },
      { title: "Office & admin staff", text: "Cut hours from reports, emails and data entry.", icon: "Briefcase" },
      { title: "Shop owners & small businesses", text: "Create marketing content and reply to customers faster.", icon: "Target" },
      { title: "Teachers & homemakers", text: "Learn a practical digital skill in flexible weekend batches.", icon: "Users" },
    ],
    mentor: "aman",
    faqs: [
      { q: "I am not technical. Can I join the ChatGPT course?", a: "Yes. If you can use a smartphone and a browser, you can take this course. Classes move step by step with personal help." },
      { q: "Do I need ChatGPT Plus?", a: "No. Everything is taught on free plans first. We show what paid plans add so you can decide for yourself." },
      { q: "Is there a weekend batch?", a: "Yes. Weekend and evening batches run at all branches and online." },
    ],
    related: ["prompt-engineering", "ai-powered-marketing", "generative-ai"],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI Course",
    navLabel: "Agentic AI",
    tag: "New",
    tagline: "Design and deploy AI agents that plan, use tools and complete multi-step tasks on their own.",
    level: "Intermediate",
    duration: "4 Months",
    hours: "160+ hours",
    projects: 8,
    overview: [
      "Agentic AI is the next step after chatbots: systems that reason about a goal, call tools and APIs, remember context and finish work end to end. Companies are hiring for it fast — from support automation to coding and research agents.",
      "This course assumes basic Python. You will build agents with LangGraph, the OpenAI Agents SDK and the Claude Agent SDK, connect them to real tools with MCP, and learn to test, monitor and secure them in production.",
    ],
    outcomes: [
      { title: "Agent architecture", text: "Understand planning, tool use, memory and reflection loops.", icon: "BrainCircuit" },
      { title: "Tool calling & MCP", text: "Connect agents to APIs, databases and apps with the Model Context Protocol.", icon: "Workflow" },
      { title: "Multi-agent systems", text: "Coordinate specialist agents that hand work to each other.", icon: "Users" },
      { title: "Memory & retrieval", text: "Give agents short- and long-term memory with vector stores.", icon: "Database" },
      { title: "Evaluation & guardrails", text: "Test behaviour, limit permissions and add human approval steps.", icon: "ShieldCheck" },
      { title: "Production deployment", text: "Deploy agents with logging, cost tracking and monitoring.", icon: "Rocket" },
    ],
    curriculum: [
      {
        period: "Month 1",
        title: "Foundations",
        modules: [
          { title: "LLM & Python refresher", topics: ["Async Python & APIs", "LLM APIs & function calling", "Structured outputs", "Prompting for agents"], project: "Tool-calling weather & currency bot" },
          { title: "Agent patterns", topics: ["ReAct & plan-and-execute", "Types of memory", "Reflection & self-correction", "When not to use an agent"], project: "Research agent with web search" },
        ],
      },
      {
        period: "Months 2–3",
        title: "Building agents",
        modules: [
          { title: "Agent frameworks", topics: ["LangGraph state machines", "OpenAI Agents SDK", "Claude Agent SDK", "CrewAI for multi-agent teams"], project: "Multi-agent content team" },
          { title: "Tools & integrations", topics: ["Model Context Protocol (MCP)", "Database & CRM tools", "Browser & file tools", "n8n workflow automation"], project: "Lead-qualification agent for a Jalandhar business" },
        ],
      },
      {
        period: "Month 4",
        title: "Production",
        modules: [
          { title: "Reliability & safety", topics: ["Evals & test harnesses", "Guardrails & permissions", "Human-in-the-loop approval", "Tracing with LangSmith"], project: "Agent evaluation suite" },
          { title: "Deployment & capstone", topics: ["FastAPI & background workers", "Docker & cloud deployment", "Cost & latency control", "Demo day & interviews"], project: "Capstone: a production-ready AI agent" },
        ],
      },
    ],
    tools: [
      { name: "Python", use: "Agent logic & integrations" },
      { name: "LangGraph", use: "Stateful agent workflows" },
      { name: "OpenAI Agents SDK", use: "Agent orchestration" },
      { name: "Claude Agent SDK", use: "Tool-using agents" },
      { name: "CrewAI", use: "Multi-agent teams" },
      { name: "MCP", use: "Standard tool connections" },
      { name: "n8n", use: "Workflow automation" },
      { name: "LangSmith", use: "Tracing & evaluation" },
    ],
    audience: [
      { title: "Python developers", text: "Add the most in-demand AI engineering skill to your stack.", icon: "Code2" },
      { title: "Generative AI learners", text: "Take your LLM skills from chatbots to autonomous workflows.", icon: "Sparkles" },
      { title: "Automation professionals", text: "Upgrade rule-based automation to intelligent agents.", icon: "Workflow" },
      { title: "Final-year students", text: "Build a standout capstone for campus placements.", icon: "GraduationCap" },
    ],
    mentor: "karan",
    faqs: [
      { q: "What should I know before joining Agentic AI?", a: "Basic Python (functions, lists, dictionaries) and some experience with an LLM API. If you are new, start with our Generative AI course or the 2-week Python bridge module." },
      { q: "How is an AI agent different from a chatbot?", a: "A chatbot answers messages. An agent works toward a goal: it plans steps, calls tools like search, databases or email, checks its own results and finishes the task." },
      { q: "Are Agentic AI jobs available in North India?", a: "Yes. IT companies in Mohali, Chandigarh and Noida are building agent-based products for global clients, and remote roles are growing fast." },
    ],
    related: ["rag", "generative-ai", "artificial-intelligence"],
  },
  {
    slug: "ai-powered-marketing",
    title: "AI-Powered Digital Marketing Course",
    navLabel: "AI-Powered Marketing",
    tag: "Hot",
    tagline: "Plan, create and scale campaigns with AI — SEO, Google Ads, Meta Ads and content that converts.",
    level: "All Levels",
    duration: "4 Months",
    hours: "150+ hours",
    projects: 6,
    overview: [
      "AI now writes first drafts, suggests keywords, builds audiences and optimises bids. This course teaches complete digital marketing — SEO, Google Ads, Meta Ads, social media and analytics — with AI built into every workflow.",
      "You will run live campaigns with real budgets, manage social pages for local businesses and graduate with a results-backed portfolio, ready for agency jobs, in-house roles or freelancing.",
    ],
    outcomes: [
      { title: "AI content creation", text: "Produce blogs, ad copy, reel scripts and creatives faster, on-brand.", icon: "PenTool" },
      { title: "SEO & AI search", text: "Rank on Google and appear in AI answers with modern SEO.", icon: "Search" },
      { title: "Performance ads", text: "Plan and optimise Google Ads and Meta Ads with smart bidding.", icon: "Target" },
      { title: "Social media growth", text: "Grow Instagram, YouTube and LinkedIn with a content calendar.", icon: "Megaphone" },
      { title: "Analytics", text: "Track results with GA4, Looker Studio and AI-assisted reports.", icon: "ChartBar" },
      { title: "Marketing automation", text: "Automate email, WhatsApp and lead follow-ups.", icon: "Workflow" },
    ],
    curriculum: [
      {
        period: "Month 1",
        title: "Marketing & AI foundations",
        modules: [
          { title: "Digital marketing fundamentals", topics: ["Customer journey & funnels", "Websites with WordPress", "Brand voice & positioning", "AI tools for marketers"], project: "Brand kit for a local business" },
          { title: "Content with AI", topics: ["Copywriting prompts", "Blogs & landing pages", "Reels & short video", "Design with Canva AI"], project: "30-day content calendar" },
        ],
      },
      {
        period: "Months 2–3",
        title: "Growth channels",
        modules: [
          { title: "SEO & AI search", topics: ["Keyword research with AI", "On-page & technical SEO", "Local SEO & Google Business Profile", "Optimising for AI Overviews"], project: "SEO audit of a real website" },
          { title: "Paid ads", topics: ["Google Search & Performance Max", "Meta Ads Manager", "Audience & creative testing", "Budgeting & ROAS"], project: "Live ad campaign with a real budget" },
        ],
      },
      {
        period: "Month 4",
        title: "Measure & automate",
        modules: [
          { title: "Analytics & automation", topics: ["GA4 & Looker Studio", "Conversion tracking", "Email & WhatsApp automation", "AI-assisted reporting"], project: "Client performance dashboard" },
          { title: "Career & freelancing", topics: ["Agency workflows", "Client proposals & pricing", "Google & Meta certifications", "Interview preparation"], project: "Capstone: a full-funnel campaign" },
        ],
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Copy, ideas & research" },
      { name: "Google Ads", use: "Search & Performance Max" },
      { name: "Meta Ads Manager", use: "Facebook & Instagram ads" },
      { name: "Google Analytics 4", use: "Traffic & conversions" },
      { name: "SEMrush", use: "SEO & competitor research" },
      { name: "Canva AI", use: "Creatives & reels" },
      { name: "WordPress", use: "Websites & landing pages" },
      { name: "HubSpot", use: "CRM & email automation" },
    ],
    audience: [
      { title: "Students after 12th", text: "Start a creative career that does not require coding.", icon: "BookOpen" },
      { title: "Business owners", text: "Bring more customers online without depending on agencies.", icon: "Briefcase" },
      { title: "Freelancers", text: "Offer AI-powered marketing services to clients in India and abroad.", icon: "Laptop" },
      { title: "Marketing professionals", text: "Update your skills for AI-first campaigns.", icon: "Megaphone" },
    ],
    mentor: "aman",
    faqs: [
      { q: "Will I run real ad campaigns?", a: "Yes. You run live Google and Meta campaigns for real businesses with a supervised budget, so your portfolio shows actual results." },
      { q: "Does the course prepare me for Google certifications?", a: "Yes. We cover Google Ads, Google Analytics and Meta certification topics, with practice tests." },
      { q: "Can I start freelancing after this course?", a: "Yes. The final month covers proposals, pricing and client handling, and many students start freelancing during the course." },
    ],
    related: ["chatgpt-ai-tools", "prompt-engineering", "generative-ai"],
  },
  {
    slug: "rag",
    title: "RAG (Retrieval-Augmented Generation) Course",
    navLabel: "RAG (Retrieval-Augmented Generation)",
    tagline: "Build AI assistants that answer accurately from your own documents, websites and databases.",
    level: "Advanced",
    duration: "2 Months",
    hours: "80 hours",
    projects: 5,
    overview: [
      "Most business AI projects are RAG projects: an HR policy chatbot, a search assistant for product manuals, a support bot trained on company FAQs. Retrieval-Augmented Generation connects a language model to trusted data so answers are accurate, current and cited.",
      "This focused course covers the complete RAG pipeline — ingestion, chunking, embeddings, vector databases, hybrid search, re-ranking and evaluation — and ends with a production-grade assistant you can demo in interviews.",
    ],
    outcomes: [
      { title: "Document ingestion", text: "Load PDFs, web pages, spreadsheets and databases cleanly.", icon: "BookOpen" },
      { title: "Embeddings & chunking", text: "Choose chunk sizes and embedding models that improve recall.", icon: "Layers" },
      { title: "Vector databases", text: "Store and query embeddings in Chroma, Pinecone and pgvector.", icon: "Database" },
      { title: "Advanced retrieval", text: "Use hybrid search, re-ranking and query rewriting.", icon: "Search" },
      { title: "Evaluation", text: "Measure faithfulness and answer quality with RAGAS.", icon: "Target" },
      { title: "Production RAG", text: "Add citations, access control, caching and monitoring.", icon: "Rocket" },
    ],
    curriculum: [
      {
        period: "Weeks 1–2",
        title: "RAG foundations",
        modules: [
          { title: "Embeddings & retrieval", topics: ["How semantic search works", "Embedding models compared", "Chunking strategies", "Similarity metrics"], project: "Semantic search over college notices" },
          { title: "Your first RAG pipeline", topics: ["LangChain & LlamaIndex loaders", "Vector stores", "Prompting with retrieved context", "Citing sources"], project: "PDF Q&A assistant" },
        ],
      },
      {
        period: "Weeks 3–6",
        title: "Advanced RAG",
        modules: [
          { title: "Better retrieval", topics: ["Hybrid keyword + vector search", "Re-ranking with cross-encoders", "Query rewriting & HyDE", "Metadata filters"], project: "Product-manual support bot" },
          { title: "Evaluation", topics: ["Building test datasets", "RAGAS metrics", "Hallucination detection", "A/B testing retrievers"], project: "RAG evaluation dashboard" },
        ],
      },
      {
        period: "Weeks 7–8",
        title: "Production",
        modules: [
          { title: "Production & capstone", topics: ["A FastAPI RAG service", "Access control & PII", "Caching & cost control", "Agentic RAG & knowledge graphs"], project: "Capstone: a company knowledge assistant" },
        ],
      },
    ],
    tools: [
      { name: "Python", use: "Pipelines & services" },
      { name: "LangChain", use: "Retrieval chains" },
      { name: "LlamaIndex", use: "Data connectors & indexing" },
      { name: "Chroma", use: "Local vector database" },
      { name: "Pinecone", use: "Managed vector database" },
      { name: "pgvector", use: "Vector search in PostgreSQL" },
      { name: "RAGAS", use: "RAG evaluation" },
      { name: "FastAPI", use: "Production APIs" },
    ],
    audience: [
      { title: "Python developers", text: "Learn the pattern behind most company AI projects.", icon: "Code2" },
      { title: "Generative AI alumni", text: "Go deeper into the most-hired generative AI skill.", icon: "Sparkles" },
      { title: "Data engineers", text: "Apply your pipeline skills to AI search.", icon: "Database" },
      { title: "Final-year students", text: "Build an interview-ready capstone.", icon: "GraduationCap" },
    ],
    mentor: "karan",
    faqs: [
      { q: "What are the prerequisites for the RAG course?", a: "Working Python and basic experience with an LLM API. Our Generative AI course or the 2-week Python bridge module covers both." },
      { q: "Why learn RAG as a separate course?", a: "RAG is the most common pattern in company AI projects. A dedicated course goes beyond tutorials into evaluation, security and scaling — what interviewers ask about." },
      { q: "Will I work with company-style data?", a: "Yes. Projects use messy real-world PDFs, spreadsheets and web pages, just like enterprise data." },
    ],
    related: ["agentic-ai", "generative-ai", "machine-learning"],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning Course",
    navLabel: "Machine Learning",
    tagline: "Turn data into predictions — build, evaluate and deploy ML models the way industry does.",
    level: "Intermediate",
    duration: "5 Months",
    hours: "200+ hours",
    projects: 10,
    overview: [
      "Machine learning powers recommendations, fraud detection, demand forecasting and credit scoring. This course builds strong ML fundamentals with Python, statistics and scikit-learn, then moves into deep learning and model deployment.",
      "You will work with real datasets from agriculture, retail, finance and healthcare, and finish with a deployed ML project, a GitHub portfolio and placement support from our team.",
    ],
    outcomes: [
      { title: "Data preparation", text: "Clean, explore and engineer features from messy datasets.", icon: "ChartBar" },
      { title: "Supervised learning", text: "Build regression and classification models and pick the right one.", icon: "Target" },
      { title: "Unsupervised learning", text: "Segment customers and detect anomalies with clustering.", icon: "Layers" },
      { title: "Model evaluation", text: "Use cross-validation, metrics and tuning to avoid overfitting.", icon: "BadgeCheck" },
      { title: "Deep learning basics", text: "Train neural networks for images, text and time series.", icon: "BrainCircuit" },
      { title: "Deployment", text: "Serve models through APIs and simple web apps.", icon: "Rocket" },
    ],
    curriculum: [
      {
        period: "Month 1",
        title: "Python & data",
        modules: [
          { title: "Python for data", topics: ["NumPy & Pandas", "Data cleaning", "Visualisation with Seaborn", "SQL basics"], project: "Retail sales analysis" },
          { title: "Statistics", topics: ["Distributions & sampling", "Correlation", "Hypothesis tests", "Feature engineering"], project: "Feature engineering notebook" },
        ],
      },
      {
        period: "Months 2–3",
        title: "Core machine learning",
        modules: [
          { title: "Supervised learning", topics: ["Linear & logistic regression", "Decision trees & random forests", "XGBoost", "Handling imbalanced data"], project: "Loan-default predictor" },
          { title: "Unsupervised learning & evaluation", topics: ["K-means & DBSCAN", "PCA", "Cross-validation & tuning", "Explainability with SHAP"], project: "Customer segmentation for an online store" },
        ],
      },
      {
        period: "Months 4–5",
        title: "Deep learning & deployment",
        modules: [
          { title: "Deep learning", topics: ["Neural networks with Keras", "CNNs for images", "Time-series forecasting", "Introduction to transformers"], project: "Crop-disease image classifier" },
          { title: "MLOps & capstone", topics: ["Model APIs with Flask & FastAPI", "Experiment tracking with MLflow", "Docker basics", "Portfolio & mock interviews"], project: "Capstone: a deployed ML product" },
        ],
      },
    ],
    tools: [
      { name: "Python", use: "Core language for every project" },
      { name: "Pandas", use: "Data wrangling" },
      { name: "scikit-learn", use: "ML algorithms & pipelines" },
      { name: "XGBoost", use: "Gradient-boosted models" },
      { name: "TensorFlow", use: "Deep learning with Keras" },
      { name: "Jupyter", use: "Notebooks & experiments" },
      { name: "MLflow", use: "Experiment tracking" },
      { name: "SQL", use: "Querying data" },
    ],
    audience: [
      { title: "Engineering & science students", text: "Turn your maths background into a high-growth career.", icon: "GraduationCap" },
      { title: "Data analysts", text: "Move from reporting what happened to predicting what will.", icon: "ChartBar" },
      { title: "Software developers", text: "Add ML to the products you already build.", icon: "Code2" },
      { title: "Career switchers", text: "A structured path with strong fundamentals and mentor support.", icon: "Rocket" },
    ],
    mentor: "priya",
    faqs: [
      { q: "Machine Learning or Data Science — which should I choose?", a: "Data Science focuses on analysis, dashboards and business insight. Machine Learning focuses on building predictive models. A counsellor can suggest the right fit in a free session." },
      { q: "Do I need a powerful laptop for machine learning?", a: "No. A laptop with 8 GB RAM is enough. Heavy training runs on free cloud GPUs like Google Colab." },
      { q: "Which jobs can I apply for after this course?", a: "Machine Learning Engineer, Junior Data Scientist, entry-level AI Engineer and ML Analyst roles." },
    ],
    related: ["artificial-intelligence", "rag", "generative-ai"],
  },
];
