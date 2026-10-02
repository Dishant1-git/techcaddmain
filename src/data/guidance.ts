/**
 * Content for the Resources ▾ Guidance feature: the home preview section, the /guidance hub
 * page and the four full landing pages (career-counselling, mentorship, ai-marketing, freelancing).
 * Kept in its own file (rather than site.ts) purely because of size — same rule applies:
 * edit text here, components only render it. `icon` fields must exist in src/components/ui/Icon.tsx.
 */

export type Stat = { value: number; suffix: string; label: string; decimals?: number };
export type FeatureItem = { icon: string; title: string; text?: string };
export type Step = { icon: string; title: string; text: string };
export type FaqItem = { q: string; a: string };
export type LogoItem = { name: string; note: string };
export type MentorProfile = { initials: string; name: string; role: string; experience: string; expertise: string[]; rating: number };

export type GuidanceSummary = {
  slug: string;
  navLabel: string;
  icon: string;
  cardDescription: string;
  hubDescription: string;
};

/** Drives the home "02 Guidance" preview cards and the /guidance hub's "Find the Guidance You Need" cards. */
export const guidanceSummaries: GuidanceSummary[] = [
  {
    slug: "career-counselling",
    navLabel: "Free Career Counselling",
    icon: "Target",
    cardDescription: "A free 1:1 session to map your interests and background to the right course and career.",
    hubDescription: "Find clarity before choosing your career path.",
  },
  {
    slug: "mentorship",
    navLabel: "1:1 Mentorship",
    icon: "Users",
    cardDescription: "Weekly reviews and direct access to a working industry professional throughout your course.",
    hubDescription: "Learn directly from experienced professionals.",
  },
  {
    slug: "ai-marketing",
    navLabel: "AI Marketing",
    icon: "Megaphone",
    cardDescription: "Combine core digital marketing with AI content, ad and analytics tools employers want now.",
    hubDescription: "Discover how AI can transform modern marketing.",
  },
  {
    slug: "freelancing",
    navLabel: "Freelancing",
    icon: "Briefcase",
    cardDescription: "Turn a course skill into client-ready work — portfolio, pricing, proposals and platforms.",
    hubDescription: "Turn your skills into real-world opportunities.",
  },
];

/* ───────────────────────── Career Counselling ───────────────────────── */

export const careerCounselling = {
  meta: {
    title: "Free Career Counselling",
    description:
      "Get personalised career guidance to understand your strengths, explore opportunities and choose the right path with confidence — free, with no obligation.",
  },
  hero: {
    eyebrow: "1:1 Career Guidance",
    titleLead: "Make the ",
    titleHighlight: "right career decision",
    titleTail: " with expert guidance",
    subtitle:
      "Get personalised career guidance to understand your strengths, explore opportunities and choose the right path with confidence.",
    ctaPrimary: { label: "Book Free Counselling", href: "/#demo" },
    ctaSecondary: { label: "Explore Career Paths", href: "#career-paths" },
  },
  why: {
    eyebrow: "Why It Matters",
    title: "Most career decisions are made with too little information",
    text:
      "Students and professionals often pick a course or job based on trends, peer pressure or incomplete advice — not on their own strengths, interests and the realities of the market. A proper counselling session closes that gap: it gives you an honest read on where you stand, what the industry actually pays and hires for, and a plan you can act on immediately instead of guessing and restarting later.",
  },
  whatYouGet: [
    { icon: "CheckCircle2", title: "Career Assessment", text: "A structured look at your interests, strengths and past academic or work experience." },
    { icon: "TrendingUp", title: "Skill Evaluation", text: "An honest read on your current skill level and what's realistic to build on it." },
    { icon: "Compass", title: "Career Roadmap", text: "A written, step-by-step plan from where you are today to your target role." },
    { icon: "BookOpen", title: "Course Selection", text: "The right course, duration and batch format for your goals and schedule." },
    { icon: "Building2", title: "Industry Guidance", text: "Real insight on hiring trends, in-demand skills and realistic salary ranges." },
    { icon: "Briefcase", title: "Career Opportunities", text: "A view of the roles and companies your chosen path can actually lead to." },
  ] as FeatureItem[],
  whoBenefits: [
    { icon: "School", title: "School Students" },
    { icon: "GraduationCap", title: "College Students" },
    { icon: "UserCheck", title: "Fresh Graduates" },
    { icon: "Briefcase", title: "Working Professionals" },
    { icon: "Shuffle", title: "Career Switchers" },
  ] as FeatureItem[],
  steps: [
    { icon: "Calendar", title: "Book a Session", text: "Pick a slot that works — at any branch, on a call, or over video." },
    { icon: "MessageCircle", title: "Discuss Your Goals", text: "Tell us your background, interests and where you want to be in 2 years." },
    { icon: "Compass", title: "Understand Your Options", text: "See real career tracks, salaries and demand mapped to your profile." },
    { icon: "Target", title: "Get Your Career Roadmap", text: "Leave with a written plan and a course recommendation, not a sales pitch." },
  ] as Step[],
  careerPaths: [
    { icon: "CodeXml", title: "Web Development" },
    { icon: "Code2", title: "Software Development" },
    { icon: "ChartBar", title: "Data Science" },
    { icon: "BrainCircuit", title: "AI & Machine Learning" },
    { icon: "Megaphone", title: "Digital Marketing" },
    { icon: "PenTool", title: "UI/UX Design" },
    { icon: "ShieldCheck", title: "Cyber Security" },
    { icon: "Building2", title: "Business & Entrepreneurship" },
  ] as FeatureItem[],
  stats: [
    { value: 50000, suffix: "+", label: "Students guided" },
    { value: 20, suffix: "+", label: "Years of legacy" },
    { value: 500, suffix: "+", label: "Hiring partners" },
    { value: 4.9, suffix: "/5", decimals: 1, label: "Google rating" },
  ] as Stat[],
  faqs: [
    { q: "Is the career counselling session really free?", a: "Yes, completely free with no obligation to enrol. It's a genuine conversation to help you choose the right path." },
    { q: "Do I need to have decided on a course already?", a: "Not at all — most students come in undecided. That's exactly what this session is for." },
    { q: "Can I get counselling online if I'm not near a branch?", a: "Yes, we offer phone and video counselling for students across Haryana, Himachal, J&K, Delhi NCR and beyond." },
    { q: "What happens after the session?", a: "You'll get a written roadmap and can book a free demo class before making any payment." },
    { q: "Will I be pushed to buy a specific course?", a: "No. Counsellors are trained to guide, not sell — if TechCADD isn't the right fit, we'll tell you honestly." },
  ] as FaqItem[],
  finalCta: {
    title: "Not Sure Which Career Path Is Right For You?",
    text: "Talk to a counsellor before you decide — it's free, honest and takes 20 minutes.",
    button: "Book Free Career Counselling",
  },
};

/* ───────────────────────── Mentorship ───────────────────────── */

export const mentorship = {
  meta: {
    title: "1:1 Mentorship",
    description:
      "Get personalised guidance, practical feedback and a clear roadmap from experienced industry professionals — weekly, throughout your program.",
  },
  hero: {
    eyebrow: "Learn With a Mentor, Not Just a Trainer",
    titleLead: "Learn faster with ",
    titleHighlight: "1:1 expert mentorship",
    subtitle:
      "Get personalised guidance, practical feedback and a clear roadmap from experienced industry professionals.",
    ctaPrimary: { label: "Find a Mentor", href: "/#demo" },
    ctaSecondary: { label: "Book a Session", href: "/#demo" },
  },
  why: {
    eyebrow: "Why It Works",
    title: "A classroom teaches everyone the same thing. A mentor teaches you.",
    text:
      "Group training is efficient, but it can't adjust to your pace, your gaps or your goals. A dedicated mentor reviews your actual work every week, tells you exactly what to fix, and holds you accountable to a plan built around your target role — which is why mentored students consistently build stronger portfolios and interview better.",
  },
  helpsWith: [
    { icon: "Compass", title: "Career Planning" },
    { icon: "Code2", title: "Technical Skills" },
    { icon: "Laptop", title: "Project Guidance" },
    { icon: "MessageCircle", title: "Interview Preparation" },
    { icon: "FileText", title: "Resume Improvement" },
    { icon: "Layers", title: "Portfolio Building" },
    { icon: "Handshake", title: "Freelancing" },
    { icon: "Shuffle", title: "Career Switching" },
  ] as FeatureItem[],
  process: [
    { icon: "Target", title: "Choose Your Goal", text: "Tell us the role or skill you're aiming for." },
    { icon: "Users", title: "Match With a Mentor", text: "Get paired with a working professional in that field." },
    { icon: "Calendar", title: "Schedule Your Session", text: "Set a recurring weekly slot that fits your routine." },
    { icon: "Compass", title: "Build Your Roadmap", text: "Break your goal into clear, trackable milestones." },
    { icon: "TrendingUp", title: "Track Your Progress", text: "Weekly check-ins keep you accountable until you get there." },
  ] as Step[],
  categories: [
    { icon: "CodeXml", title: "MERN Stack" },
    { icon: "Layers", title: "Full Stack Development" },
    { icon: "Terminal", title: "Python" },
    { icon: "Coffee", title: "Java" },
    { icon: "Cpu", title: "C / C++" },
    { icon: "ChartBar", title: "Data Science" },
    { icon: "BrainCircuit", title: "AI" },
    { icon: "Megaphone", title: "Digital Marketing" },
    { icon: "TrendingUp", title: "Career Development" },
  ] as FeatureItem[],
  mentors: [
    { initials: "RK", name: "Rohan Kapoor", role: "Senior Full-Stack Engineer", experience: "9+ yrs", expertise: ["MERN", "Next.js", "System Design"], rating: 4.9 },
    { initials: "PS", name: "Priya Sethi", role: "Data Scientist", experience: "7+ yrs", expertise: ["Python", "ML", "Power BI"], rating: 4.8 },
    { initials: "AV", name: "Aman Verma", role: "AI Engineer", experience: "6+ yrs", expertise: ["LLMs", "RAG", "LangChain"], rating: 4.9 },
    { initials: "SK", name: "Simran Kaur", role: "Performance Marketing Lead", experience: "8+ yrs", expertise: ["Meta Ads", "SEO", "AI Content"], rating: 4.8 },
  ] as MentorProfile[],
  faqs: [
    { q: "Is 1:1 mentorship included in my course fee?", a: "Yes, every career program at TechCADD includes weekly mentor reviews as standard — it isn't a paid add-on." },
    { q: "Who are the mentors?", a: "Working professionals and senior trainers currently active in AI, development, data or marketing roles." },
    { q: "What if I fall behind on milestones?", a: "Your mentor adjusts the plan with you — mentorship is there to keep you moving, not to penalise you." },
    { q: "Does mentorship continue after placement?", a: "Yes, alumni can reach out to their mentor for guidance even after they're placed." },
    { q: "Can I switch mentors if it's not a good fit?", a: "Yes — tell your program coordinator and we'll match you with someone better suited to your goals." },
  ] as FaqItem[],
  finalCta: {
    title: "Ready to Get Personalised Guidance?",
    text: "Get matched with a mentor who's already doing the job you want.",
    button: "Start 1:1 Mentorship",
  },
};

/* ───────────────────────── AI Marketing ───────────────────────── */

export const aiMarketing = {
  meta: {
    title: "AI Marketing",
    description:
      "Use artificial intelligence to create better content, reach the right audience and build scalable marketing strategies.",
  },
  hero: {
    eyebrow: "In-Demand Career Path",
    titleLead: "Grow smarter with ",
    titleHighlight: "AI-powered marketing",
    subtitle:
      "Use artificial intelligence to create better content, reach the right audience and build scalable marketing strategies.",
    ctaPrimary: { label: "Explore AI Marketing", href: "#what-is" },
    ctaSecondary: { label: "Get Started", href: "/#demo" },
  },
  whatIs: {
    eyebrow: "What Is AI Marketing?",
    title: "Marketing that uses AI to think, create and optimise faster",
    text:
      "AI marketing means using tools like large language models, generative image models and automation platforms to speed up the parts of marketing that used to take hours — writing copy, building creatives, segmenting audiences and reading performance data. It doesn't replace marketing strategy; it removes the busywork so you can run more campaigns, test more ideas and react to data faster than a fully manual process ever could.",
  },
  capabilities: [
    { icon: "Sparkles", title: "AI Content Creation", text: "Generate first-draft copy, captions and creative variations in minutes." },
    { icon: "Megaphone", title: "Social Media Marketing", text: "Plan, caption and schedule content across platforms faster." },
    { icon: "Search", title: "SEO", text: "Research keywords, briefs and on-page structure with AI assistance." },
    { icon: "Mail", title: "Email Marketing", text: "Write and personalise sequences that adapt to subscriber behaviour." },
    { icon: "SlidersHorizontal", title: "Ad Optimization", text: "Test creatives and targeting faster with AI-assisted ad platforms." },
    { icon: "Radar", title: "Customer Insights", text: "Turn raw analytics into clear patterns about who's actually converting." },
    { icon: "Workflow", title: "Marketing Automation", text: "Automate repetitive reporting, follow-ups and campaign workflows." },
    { icon: "Target", title: "Lead Generation", text: "Qualify and prioritise leads using AI-scored intent signals." },
  ] as FeatureItem[],
  tools: [
    { name: "ChatGPT", note: "Copywriting & ideation" },
    { name: "Gemini", note: "Research & content" },
    { name: "Claude", note: "Long-form content & strategy" },
    { name: "Canva AI", note: "AI-assisted design" },
    { name: "Midjourney", note: "AI image generation" },
    { name: "Copy.ai", note: "Ad & marketing copy" },
    { name: "HubSpot AI", note: "CRM & automation" },
    { name: "Google Ads (AI features)", note: "Smart bidding & creatives" },
  ] as LogoItem[],
  toolsDisclaimer:
    "Tool names and logos belong to their respective owners. TechCADD teaches practical use of these tools and is not affiliated with or endorsed by any of them.",
  workflow: [
    { title: "Research", text: "Understand the audience, competitors and market gaps." },
    { title: "Strategy", text: "Define goals, channels and the plan to reach them." },
    { title: "Content", text: "Produce copy, creatives and campaigns faster with AI." },
    { title: "Automation", text: "Schedule, sequence and route campaigns without manual work." },
    { title: "Analytics", text: "Track what's actually driving results, not just activity." },
    { title: "Optimization", text: "Feed learnings back in and improve every next campaign." },
  ] as { title: string; text: string }[],
  benefits: [
    { icon: "Clock", title: "Save Time", text: "Cut hours of manual content and reporting work down to minutes." },
    { icon: "Zap", title: "Reduce Marketing Effort", text: "Run more campaigns without growing your team." },
    { icon: "Sparkles", title: "Improve Content", text: "Iterate faster to consistently sharper copy and creative." },
    { icon: "Target", title: "Better Targeting", text: "Reach the audience most likely to convert, not just the widest one." },
    { icon: "ChartBar", title: "Data-Driven Decisions", text: "Replace guesswork with clear, measurable performance signals." },
    { icon: "TrendingUp", title: "Higher Productivity", text: "Do the work of a bigger team with the tools of a smaller one." },
  ] as FeatureItem[],
  useCases: [
    { icon: "Rocket", title: "Startups", text: "Launch and iterate marketing without a large in-house team." },
    { icon: "Building2", title: "Small Businesses", text: "Compete with bigger budgets using smarter, faster execution." },
    { icon: "Users", title: "Agencies", text: "Deliver more client work without proportionally more headcount." },
    { icon: "Briefcase", title: "Freelancers", text: "Offer AI-augmented services clients are actively asking for." },
    { icon: "Award", title: "Personal Brands", text: "Stay consistent across content and channels with less effort." },
    { icon: "ShoppingBag", title: "E-commerce", text: "Automate product content, ads and customer follow-ups at scale." },
  ] as FeatureItem[],
  faqs: [
    { q: "Do I need a marketing background to start?", a: "No — the AI-Powered Digital Marketing program starts from the basics and is open to all levels." },
    { q: "Which AI tools will I actually use?", a: "AI copywriting and creative tools, campaign automation and analytics assistants used by real agencies today." },
    { q: "Can this lead to freelancing instead of a job?", a: "Yes — many students run client campaigns independently after this program; see our Freelancing guidance page too." },
    { q: "Will I get placement support for marketing roles?", a: "Yes, resume building, portfolio review and introductions through our 500+ hiring partners are included." },
    { q: "Is AI going to replace marketing jobs?", a: "It's replacing repetitive tasks, not marketing judgement — people who can direct AI tools well are in more demand, not less." },
  ] as FaqItem[],
  finalCta: {
    title: "Ready to Transform Your Marketing With AI?",
    text: "Learn the tools and workflow real marketing teams use today.",
    button: "Start Learning AI Marketing",
  },
};

/* ───────────────────────── Freelancing ───────────────────────── */

export const freelancing = {
  meta: {
    title: "Freelancing",
    description:
      "Learn how to find clients, build your portfolio, price your services and create a sustainable freelance career.",
  },
  hero: {
    eyebrow: "Work On Your Own Terms",
    titleLead: "Turn your skills into a ",
    titleHighlight: "freelancing career",
    subtitle:
      "Learn how to find clients, build your portfolio, price your services and create a sustainable freelance career.",
    ctaPrimary: { label: "Start Your Freelancing Journey", href: "/#demo" },
    ctaSecondary: { label: "Explore Skills", href: "#skills" },
  },
  why: {
    eyebrow: "Why Freelancing?",
    title: "One skill, sold to many clients — on your schedule",
    text:
      "Freelancing lets you turn a single in-demand skill into multiple income streams, work with clients across the world, and control your own hours — as a side income alongside a job or study, or as a full career. The skill is only half of it though: without a portfolio, pricing and a way to find clients, even strong skills go unused. That's what this guidance path fixes.",
  },
  skills: [
    { icon: "CodeXml", title: "Web Development" },
    { icon: "Layers", title: "MERN Stack" },
    { icon: "Terminal", title: "Python" },
    { icon: "PenTool", title: "UI/UX Design" },
    { icon: "Palette", title: "Graphic Design" },
    { icon: "Film", title: "Video Editing" },
    { icon: "Search", title: "SEO" },
    { icon: "Megaphone", title: "Digital Marketing" },
    { icon: "FileText", title: "Content Writing" },
    { icon: "Sparkles", title: "AI Services" },
  ] as FeatureItem[],
  howItWorks: [
    { icon: "GraduationCap", title: "Learn a Skill", text: "Master one in-demand skill deeply before spreading thin." },
    { icon: "Layers", title: "Build Your Portfolio", text: "Turn 2-3 practice projects into client-facing case studies." },
    { icon: "UserCheck", title: "Create Your Profile", text: "Set up a strong, complete profile on the platforms that fit your skill." },
    { icon: "Search", title: "Find Clients", text: "Apply, pitch and network — on platforms and directly." },
    { icon: "CheckCircle2", title: "Deliver Projects", text: "Scope clearly, communicate often, and deliver on time." },
    { icon: "Handshake", title: "Build Long-Term Relationships", text: "Turn one-off projects into repeat clients and referrals." },
  ] as Step[],
  platforms: [
    { name: "Upwork", note: "Long-term & hourly contracts" },
    { name: "Fiverr", note: "Fixed-price gig services" },
    { name: "Freelancer", note: "Bid-based project work" },
    { name: "LinkedIn", note: "Networking & direct outreach" },
    { name: "Direct Clients", note: "Referrals & local businesses" },
    { name: "Personal Website", note: "Your own portfolio & inbound leads" },
  ] as LogoItem[],
  platformsDisclaimer:
    "Platform names belong to their respective owners. TechCADD is not affiliated with or endorsed by Upwork, Fiverr, Freelancer or LinkedIn — we teach you how to use them effectively.",
  profile: [
    { icon: "UserCheck", title: "Professional Profile", text: "A complete, credible profile with a clear specialisation." },
    { icon: "Layers", title: "Strong Portfolio", text: "Real work samples that show outcomes, not just tasks." },
    { icon: "Box", title: "Service Packages", text: "Clear, scoped offers instead of vague 'anything you need'." },
    { icon: "Quote", title: "Client Testimonials", text: "Social proof from real projects, however small the first ones are." },
    { icon: "Wallet", title: "Clear Pricing", text: "Rates that reflect your skill and are simple for clients to say yes to." },
    { icon: "MessageCircle", title: "Professional Communication", text: "Fast, clear replies that make clients trust the process." },
  ] as FeatureItem[],
  firstClientRoadmap: [
    { icon: "UserCheck", title: "Optimise Your Profile", text: "Niche down and lead with outcomes, not just skills." },
    { icon: "MessageCircle", title: "Send Personalised Proposals", text: "Reference the client's actual project, not a template." },
    { icon: "Wallet", title: "Offer a Small Paid Trial", text: "Lower the risk for a first-time client to say yes." },
    { icon: "CheckCircle2", title: "Deliver Beyond Expectations", text: "A great first project is your best marketing asset." },
    { icon: "Quote", title: "Ask for a Review & Referral", text: "Turn one happy client into your next three leads." },
  ] as Step[],
  mistakes: [
    { icon: "FileX", title: "No Portfolio", text: "Clients can't hire what they can't see — show real work, even self-initiated." },
    { icon: "MessageCircle", title: "Poor Communication", text: "Slow or unclear replies lose projects faster than skill gaps do." },
    { icon: "Wallet", title: "Unrealistic Pricing", text: "Pricing too low signals low quality; too high without proof scares clients off." },
    { icon: "Clock", title: "Missing Deadlines", text: "One missed deadline can undo several good projects' worth of trust." },
    { icon: "Search", title: "No Client Research", text: "Generic pitches get ignored — understand the client before you apply." },
    { icon: "Layers", title: "Depending on One Platform", text: "A single platform ban or slow month can stop your income entirely." },
  ] as FeatureItem[],
  faqs: [
    { q: "Can I freelance while still working a full-time job?", a: "Yes, most students start freelancing part-time alongside a job or their studies before going independent." },
    { q: "Is freelancing guidance a separate paid course?", a: "No, it's built into your career program mentorship — a focused track for students who want to freelance." },
    { q: "Which skills freelance best right now?", a: "Web development, UI/UX design, digital marketing and content/AI services are in strong freelance demand across North India and globally." },
    { q: "Do you help set up client platforms?", a: "Yes, mentors guide you on profile setup, pricing and your first proposals on the platforms above." },
    { q: "How long until I get my first client?", a: "It varies, but students who apply consistently with a strong profile typically land their first project within 4-8 weeks." },
  ] as FaqItem[],
  finalCta: {
    title: "Ready to Start Freelancing?",
    text: "Learn the exact steps to package your skill and land your first paying client.",
    button: "Build Your Freelance Career",
  },
};
