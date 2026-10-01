/**
 * Content for /about ("About techcadd" in the About Us dropdown).
 * Section list follows the reference about page; copy is North-India focused. Components in src/components/about/ only render this.
 * Icon fields are lucide-react icon names resolved in src/components/ui/Icon.tsx.
 * NOTE: journey milestones and recognition items are SAMPLE content — confirm with client before launch.
 */

import teamImg from "@/assets/about/alpine-college-team-with-faculty.jpg";
import labImg from "@/assets/about/agentic-ai-workshop-langchain-lab.jpg";
import demoImg from "@/assets/about/agentic-ai-workshop-live-demo.jpg";
import trainerImg from "@/assets/about/alpine-college-trainer-addressing.jpg";
import questionsImg from "@/assets/about/alpine-college-student-questions.jpg";
import frontRowsImg from "@/assets/about/alpine-college-front-rows.jpg";
import bannerImg from "@/assets/about/agentic-ai-workshop-banner.jpg";

export const about = {
  /** Event photos (src/assets/about/, from the official about page). Static imports → next/image blur placeholders. */
  images: {
    hero: { src: teamImg, alt: "The techcadd team with faculty at Alpine Girl's (AIIT) College", caption: "Team techcadd" },
    ecosystem: [
      { src: labImg, alt: "Workshop participants working through LangChain on their laptops" },
      { src: demoImg, alt: "A live demonstration on screen during the Agentic AI workshop" },
      { src: trainerImg, alt: "A techcadd trainer taking questions during a campus session" },
      { src: questionsImg, alt: "Students meeting a techcadd counsellor after a campus session" },
    ],
    matters: { src: frontRowsImg, alt: "Students in the front rows of a techcadd campus session" },
    industry: { src: bannerImg, alt: "The Agentic AI workshop run with Quest Group of Institutions" },
  },

  hero: {
    eyebrow: "About us",
    lead: "Empowering skills. Enabling careers.",
    highlight: "Building the future.",
    text: "Since 2007, TechCADD has trained students and professionals across Punjab, Chandigarh Tricity and North India in the technologies companies actually hire for — in classrooms built around practice, projects and placement.",
  },

  teach: [
    "Artificial Intelligence", "Data Science", "Machine Learning", "Cyber Security", "Cloud Computing", "Full Stack Development",
    "MERN Stack", "Python", "Web Development", "Mobile App Development", "Digital Marketing", "Graphic Designing",
    "UI/UX", "Animation", "Video Editing", "CAD/CAM",
  ],

  ecosystem: {
    text: "TechCADD is not a place where you only attend lectures. Classrooms, labs, live projects, seminars, hackathons and industry visits work together so that everything you learn is put to use the same week.",
    points: [
      "Workshops, seminars and tech events through the year",
      "Labs open for practice beyond class hours",
      "Live projects and internships with every career program",
      "Mentors who stay with you until you are placed",
    ],
    pillars: [
      { icon: "BookOpen", title: "Learn", text: "Concepts taught from the basics by working professionals." },
      { icon: "Workflow", title: "Implement", text: "Every topic ends in a lab task or a real project." },
      { icon: "ChartLine", title: "Grow", text: "Portfolio, interview prep and placement support." },
    ],
  },

  matters: {
    statement: "Technology is rewriting every job. The learners who keep pace are the ones who practise it, not just read about it.",
    points: [
      { icon: "BrainCircuit", title: "AI is everywhere", text: "From marketing to manufacturing, every role now expects comfort with AI tools and data." },
      { icon: "Briefcase", title: "Employers hire skills", text: "Recruiters shortlist on projects, portfolios and problem-solving — not on marks alone." },
      { icon: "Rocket", title: "Careers keep changing", text: "A learning habit built today keeps you employable through every technology shift." },
    ],
  },

  audience: [
    { title: "School & College Students", text: "Start early with coding, design and AI foundations alongside your studies." },
    { title: "Graduates & Job Seekers", text: "Add the job-ready skills and portfolio that turn a degree into an offer letter." },
    { title: "Engineering & IT Students", text: "Industrial training, internships and live projects your university accepts." },
    { title: "Working Professionals", text: "Upskill on weekends or evenings without pausing your career." },
    { title: "Career Switchers", text: "Move into tech from any background with a guided, beginner-friendly path." },
    { title: "Entrepreneurs & Freelancers", text: "Learn to build, market and run your own digital business or practice." },
  ],

  journey: [
    { icon: "BookOpen", title: "Learn", text: "Understand concepts from the ground up with trainer-led sessions." },
    { icon: "Laptop", title: "Practice", text: "Reinforce every topic with hands-on lab exercises and assignments." },
    { icon: "Layers", title: "Build", text: "Apply your skills on projects and practical, real-world applications." },
    { icon: "Rocket", title: "Grow", text: "Step into interviews and the workplace with professional confidence." },
  ],

  difference: [
    { icon: "Target", title: "Industry-Oriented Curriculum", text: "Syllabi designed with practitioners and refreshed as tools and hiring needs change." },
    { icon: "Laptop", title: "Hands-On Learning", text: "More time in the lab than in lectures." },
    { icon: "Sparkles", title: "Emerging Technology Programs", text: "AI, data, cloud and cyber security tracks." },
    { icon: "Briefcase", title: "Projects & Industrial Exposure", text: "Live projects, internships and industry visits built into every career program." },
    { icon: "Users", title: "Experienced Trainers & Mentors", text: "Learn from people who have done the job." },
    { icon: "MessageSquare", title: "Career Guidance", text: "1:1 counselling before and during your course." },
    { icon: "BadgeCheck", title: "Placement Assistance", text: "Resume, mock interviews and company drives." },
    { icon: "Cpu", title: "Modern Learning Infrastructure", text: "Equipped labs and smart classrooms." },
    { icon: "Network", title: "Industry & Academic Engagement", text: "Ties with colleges, universities and employers." },
  ],

  domains: [
    { icon: "BrainCircuit", title: "Technology", items: ["Artificial Intelligence", "Machine Learning", "Data Science", "Cyber Security", "Cloud Computing", "DevOps"] },
    { icon: "Code2", title: "Development", items: ["Python", "Full Stack", "MERN", "Web Development", "Mobile App Development"] },
    { icon: "Palette", title: "Digital & Creative", items: ["Digital Marketing", "UI/UX", "Graphic Designing", "Video Editing", "Animation"] },
    { icon: "PenTool", title: "Professional & Technical Skills", items: ["Advanced Excel", "CAD/CAM", "Accounting", "Other career-focused programs"] },
  ],

  approach: [
    { title: "Relevance", text: "We teach industry-aligned skills — the tools, workflows and standards used in real teams today." },
    { title: "Application", text: "Learning happens through practical, hands-on work: labs, assignments and live projects." },
    { title: "Growth", text: "We build a continuous-learning mindset so you keep moving long after the course ends." },
  ],

  industry: {
    text: "Education works best when it stays close to the workplace. TechCADD partners with colleges, universities and employers across North India so that our students learn what the industry needs — and meet the people who hire.",
    points: [
      { icon: "GraduationCap", title: "College & university partnerships", text: "Industrial training, workshops and faculty programs on campus." },
      { icon: "Users", title: "Expert sessions", text: "Guest lectures and seminars led by working professionals." },
      { icon: "Globe", title: "Industry visits & events", text: "Tech events, hackathons and exposure to real workplaces." },
      { icon: "Briefcase", title: "Hiring network", text: "A placement cell connected to Mohali, Chandigarh and NCR IT hubs." },
    ],
  },

  recognition: [
    { icon: "ShieldCheck", title: "ISO 9001 Certified", text: "Quality-managed processes for training delivery and student support." },
    { icon: "Network", title: "Industry-Academia Engagement", text: "Recognised for connecting classrooms with employers and live work." },
    { icon: "GraduationCap", title: "Academic Collaboration", text: "Training partner to colleges and universities across the region." },
    { icon: "Sparkles", title: "Technology & Innovation Initiatives", text: "Events, showcases and programs that bring new technology to students." },
  ],

  timeline: [
    { year: "2007", title: "Where it began", text: "TechCADD is founded in Jalandhar by Mr. Gourav Gupta." },
    { year: "2010", title: "Industrial training", text: "Six-week and six-month industrial training programs for engineering students." },
    { year: "2013", title: "Placement cell", text: "A dedicated placement cell starts working with regional employers." },
    { year: "2016", title: "College partnerships", text: "Workshops and training tie-ups with colleges and universities." },
    { year: "2020", title: "Live online classes", text: "Online batches open TechCADD to learners across North India." },
    { year: "2021", title: "Data science programs", text: "Data science and analytics join the course catalogue." },
    { year: "2022", title: "Cloud & DevOps", text: "Cloud computing and DevOps tracks are launched." },
    { year: "2023", title: "After-12th pathways", text: "3, 6 and 9-month career programs for school leavers." },
    { year: "2024", title: "AI curriculum", text: "Generative AI and machine learning run through every program." },
    { year: "2025", title: "A growing alumni family", text: "Tens of thousands of learners trained, and counting." },
  ],

  belief: {
    lines: ["Technology changes.", "Skills evolve.", "Learning never stops."],
    text: "We believe meaningful education is not about a certificate on the wall — it is about the confidence to pick up the next tool, solve the next problem and keep growing. That belief shapes every class we run.",
  },

  cta: {
    title: "Ready to get started?",
    text: "Start building your career today.",
    perks: ["Free 1:1 career counselling", "Attend a live demo class before enrolling", "Weekday, weekend & online batches"],
  },
};

/** Content for /about/mission-vision ("Mission and Vision" in the About Us dropdown). Sections follow the reference page. */
export const missionVision = {
  hero: {
    eyebrow: "Mission & Vision",
    lead: "Where we are going, and",
    highlight: "what we are building towards.",
    text: "The purpose behind every class we run, and the future we want our learners to help build.",
  },

  mission: {
    text: "Our mission is to build a strong training ecosystem where learners can access advanced technology, practical exposure, and industry-relevant skills that prepare them for real-world opportunities.",
    pillars: [
      { icon: "Laptop", title: "Make Technology Accessible", text: "Provide learners with relevant and accessible technology education." },
      { icon: "Workflow", title: "Prioritize Practical Learning", text: "Go beyond theory through projects, hands-on training, and real-world exposure." },
      { icon: "Briefcase", title: "Build Industry-Ready Talent", text: "Develop skills that align with evolving industry requirements and employment opportunities." },
      { icon: "ChartLine", title: "Encourage Continuous Upskilling", text: "Help learners adapt to emerging technologies and continuously upgrade their capabilities." },
      { icon: "Network", title: "Expand the Learning Ecosystem", text: "Build a wider network through centres and collaborations so advanced technology education reaches more learners." },
    ],
    note: "This direction is consistent with techcadd's publicly stated mission of developing a national and international network through franchise centres and providing qualitative advanced technology with practical exposure to improve employability.",
  },

  vision: {
    text: "techcadd envisions contributing to an India where skilled engineers, technology professionals, and digitally capable young people are prepared to participate confidently in the evolving technology economy.",
    badge: { label: "Our Vision", value: "Future-ready", sub: "by 2030" },
    goals: [
      "Creating future-ready technology professionals",
      "Promoting practical and industry-oriented education",
      "Encouraging innovation and continuous learning",
      "Supporting India's digital transformation",
      "Building a trusted name in software, services, and technology education",
    ],
    note: "The organization's publicly stated vision is to help make India a hub of well-trained engineers and technical professionals and establish a globally trusted name in software and services.",
  },

  future: {
    statement: "From learning technology to creating technology.",
    text: "techcadd aims to keep evolving with emerging fields such as Artificial Intelligence, Cloud Computing, Cyber Security, Data Science, Automation and other future-facing technologies, helping learners stay relevant in a rapidly changing digital world.",
    fields: [
      { icon: "BrainCircuit", label: "Artificial Intelligence" },
      { icon: "Cloud", label: "Cloud Computing" },
      { icon: "ShieldCheck", label: "Cyber Security" },
      { icon: "ChartBar", label: "Data Science" },
      { icon: "Cpu", label: "Automation" },
    ],
  },
};
