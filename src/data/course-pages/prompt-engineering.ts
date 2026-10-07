import type { CoursePage } from "./types";

/* /courses/prompt-engineering — long-form landing copy supplied by the client (Google Doc, Stages 1–4, 6 and 7), used as given.
   The older page at /ai-courses/prompt-engineering (`aiCourses` in site.ts) now REDIRECTS here — see `movedTo` in
   src/app/ai-courses/[slug]/page.tsx — and the AI dropdown link points here.
   Left out on purpose:
   - Stage 5 "Reviews": the document itself says "These are illustrative drafts, not real reviews", so this page keeps the
     shared testimonials section (add `copy.reviews` when real, consented reviews exist);
   - Stage 8 (keyword & GEO strategy report) and the keyword plan: planning notes, not page content;
   - the CTA's course-details table and form fields (duration there is "[Add verified duration…]").
   CHECK WITH THE CLIENT: `duration`/`level` are the old AI-page values; and the "North India's first AI-powered and Robotics
   learning centre" first/only claim — keep only if it can be supported. */

const roles = ["AI content specialist", "Prompt designer", "AI operations executive", "Automation associate", "Digital marketing executive", "Research analyst", "Freelance AI consultant"];

export const promptEngineering: CoursePage = {
  slug: "prompt-engineering",
  title: "Prompt Engineering Course",
  navLabel: "Prompt Engineering",
  group: "ai-data",
  icon: "MessageSquare",
  tagline: "Get reliable, high-quality results from ChatGPT, Claude and Gemini, and turn prompting into a job skill.",
  level: "Beginner",
  duration: "6 Weeks",
  eligibility: "Open to any stream; no technical degree or programming background needed",
  overview: [
    "The Prompt Engineering course at techcadd teaches you how to communicate with AI models such as ChatGPT, Claude, Gemini and Microsoft Copilot to get accurate, useful and repeatable results. Instead of treating AI as a toy, you learn to use it as a dependable work tool for writing, research, analysis, automation and customer-facing tasks.",
    "This Prompt Engineering course is built for graduates, working professionals, job switchers, freelancers and business owners who want practical AI skills. You will learn prompt structures, role and context setting, few-shot and chain-of-thought techniques, output formatting, prompt testing and refinement, and how to build reusable prompt workflows for real business needs. No coding background is required to begin.",
    "Learners across Punjab can attend classes at the Jalandhar centre, while students from other states can join live online sessions with the same practical, project-based approach. Each module is hands-on, so you finish with a portfolio of working prompts and AI workflows rather than just theory.",
    "Whether you want to upgrade your current role, start freelancing or move into an AI-driven career, this program gives you a clear and practical starting point.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "You understand what AI can and cannot do, and choose the right tool for a task",
    "You write structured prompts that produce consistent, usable answers",
    "You handle complex tasks such as research, analysis and long-form drafting",
    "You build ready-to-use workflows for your own profession",
    "You speed up research and reporting without sacrificing accuracy",
    "You create visuals and analyse documents using AI",
    "You move from single prompts to repeatable systems",
    "You use AI safely and professionally",
  ],
  syllabus: [
    {
      title: "Module 1: Foundations of Generative AI",
      summary: "",
      topics: ["How large language models work, in simple terms: tokens, context windows, temperature and training limits", "Differences between major AI assistants and when to use each", "Why the same prompt can give different results"],
      outcome: "You understand what AI can and cannot do, and choose the right tool for a task.",
    },
    {
      title: "Module 2: Core Prompting Principles",
      summary: "",
      topics: ["Writing clear instructions with role, task, context, constraints and output format", "Zero-shot, one-shot and few-shot prompting", "Using tone, audience and length controls"],
      outcome: "You write structured prompts that produce consistent, usable answers.",
    },
    {
      title: "Module 3: Advanced Prompting Techniques",
      summary: "",
      topics: ["Step-by-step reasoning and task decomposition", "Prompt chaining for multi-stage work", "Self-review, critique and refinement prompts", "Templates and variables for reusable prompts"],
      outcome: "You handle complex tasks such as research, analysis and long-form drafting.",
    },
    {
      title: "Module 4: Prompting for Business and Content",
      summary: "",
      topics: ["Marketing copy, SEO content, social media and email campaigns", "HR, sales, customer support and operations use cases", "Summarising documents, meetings and reports", "Translation and multilingual content, including Hindi and Punjabi"],
      outcome: "You build ready-to-use workflows for your own profession.",
    },
    {
      title: "Module 5: Data, Research and Analysis with AI",
      summary: "",
      topics: ["Research with source checking and fact verification", "Turning raw data into summaries, tables and insights", "Using AI inside spreadsheets and documents"],
      outcome: "You speed up research and reporting without sacrificing accuracy.",
    },
    {
      title: "Module 6: Image, Visual and Multimodal Prompting",
      summary: "",
      topics: ["Writing prompts for AI image and design tools", "Working with images, PDFs and screenshots in multimodal assistants"],
      outcome: "You create visuals and analyse documents using AI.",
    },
    {
      title: "Module 7: Automation and AI Workflows",
      summary: "",
      topics: ["Connecting AI with everyday apps through no-code automation", "Building simple custom assistants and prompt libraries", "Introduction to using AI through APIs, with optional basic scripting"],
      outcome: "You move from single prompts to repeatable systems.",
    },
    {
      title: "Module 8: Testing, Safety and Responsible AI",
      summary: "",
      topics: ["Spotting hallucinations, bias and weak outputs", "Evaluating and improving prompts systematically", "Data privacy, confidentiality and copyright awareness"],
      outcome: "You use AI safely and professionally.",
    },
    {
      title: "Module 9: Capstone Project and Portfolio",
      summary: "",
      topics: ["A real-world project in your chosen domain", "Portfolio of tested prompts, workflows and case studies", "Resume, LinkedIn and freelance profile guidance"],
    },
  ],
  tools: ["ChatGPT", "Claude", "Google Gemini", "Microsoft Copilot", "Perplexity", "NotebookLM", "Notion AI", "Canva AI tools", "AI image generators", "Google Workspace", "Microsoft 365 with built-in AI features", "Zapier", "Make or similar no-code platforms", "AI playgrounds", "basic API usage"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Prompt Engineering course?", a: "A Prompt Engineering course teaches you how to write clear, structured instructions for AI models like ChatGPT, Claude, Gemini and Copilot so they give accurate and useful results. It covers prompting techniques, output control, testing, workflows and responsible AI use, with practical projects in each module." },
    { q: "Who can join the Prompt Engineering course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers, business owners and 12th-pass students can join. The course starts from the basics, so you only need basic computer skills and a willingness to practise." },
    { q: "Do I need coding knowledge to learn Prompt Engineering?", a: "No, coding is not required to start. Most of the course focuses on writing structured prompts and building workflows with no-code tools. Basic scripting and API usage are only an optional extension for those who want to go deeper." },
    { q: "Is this course suitable for complete beginners?", a: "Yes, the Prompt Engineering course for beginners begins with how AI models work and moves step by step to advanced techniques. Each concept is practised through hands-on tasks, so you build confidence gradually." },
    { q: "What is covered in the Prompt Engineering syllabus?", a: "The syllabus covers generative AI foundations, core and advanced prompting techniques, prompting for business and content, research and data analysis with AI, multimodal prompting, automation workflows, testing and responsible AI, and a capstone project. The exact module list is shared during counselling." },
    { q: "Which tools will I learn in this course?", a: "You typically work with AI assistants such as ChatGPT, Claude, Gemini, Microsoft Copilot and Perplexity, along with research, design, productivity and no-code automation tools. Because tools change quickly, the training focuses on principles you can apply to any platform." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, learners receive a techcadd course completion certificate after finishing the program and its assignments. This is a skill-based completion certificate, not a university degree, and it should be presented alongside your project portfolio." },
    { q: "Is the certificate government-approved or recognised?", a: "The techcadd certificate is an institute-issued course completion certificate. Please check with the counselling team for any specific affiliation, skill-recognition or approval details before relying on it for a particular application, as these should only be claimed where they can be verified." },
    { q: "Can I learn Prompt Engineering online, or only in the classroom?", a: "You can choose either. Live online classes and classroom training are both available, and the online mode lets working professionals and learners from other cities take part in interactive sessions with trainer feedback." },
    { q: "What jobs can I get after learning Prompt Engineering, and what is the salary?", a: "Roles include AI content specialist, prompt designer, AI operations executive, automation associate, research analyst and digital marketing executive. Entry-level AI-related roles in India are often around ₹3 to ₹6 lakh per year (approximate), and pay varies by company, city, skills and experience. Jobs and salary are not guaranteed." },
    { q: "Can I do freelancing with Prompt Engineering skills?", a: "Yes, many learners offer AI-assisted writing, research, translation, social media and workflow services to clients. A strong portfolio of tested prompts and case studies helps you win projects on freelance platforms and through direct clients." },
    { q: "Is Prompt Engineering a good career for working professionals?", a: "Yes, especially for professionals in marketing, HR, sales, operations, finance and customer support. Even without changing jobs, prompt skills can save time, improve output quality and strengthen your case for promotions or new responsibilities." },
    { q: "Can students from Himachal Pradesh join the Prompt Engineering course online?", a: "Yes, students from Himachal Pradesh can join live online classes from Shimla, Dharamshala, Solan or any other town with a stable internet connection. The sessions are interactive, and learners in hospitality, tourism and remote freelancing find the content especially useful." },
    { q: "What are the Prompt Engineering job opportunities in Punjab and Haryana?", a: "In Punjab, opportunities are emerging in Mohali's IT and startup circle and in manufacturing and export businesses across Ludhiana and Jalandhar. In Haryana, Gurugram and Faridabad offer openings in MNC support teams, e-commerce and logistics. Demand is growing, but availability varies by company." },
    { q: "Can learners from Jammu & Kashmir and Uttarakhand take this course?", a: "Yes, learners from Jammu, Srinagar, Dehradun and Haridwar can attend live online sessions without relocating. Business owners in tourism, handicrafts and hospitality often use the skill for listings, guest communication and marketing content." },
    { q: "Is the Prompt Engineering course useful for students in Delhi, Rajasthan and Uttar Pradesh?", a: "Yes, the skills apply across industries. Learners in Delhi NCR can target agency, media and fintech roles, those in Rajasthan can use AI for tourism, jewellery and textile marketing, and those in Uttar Pradesh can apply it to IT, retail and research work." },
  ],
  related: ["chatgpt-ai-tools", "generative-ai", "agentic-ai"],
  copy: {
    heading: { title: "Prompt Engineering Course", highlight: "in India", meta: "Prompt Engineering Course with Live Online + Offline Training | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Prompt Engineering Course at techcadd" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "What You Will Learn in the Prompt Engineering Course", text: "The curriculum moves from AI fundamentals to advanced prompting, workflow building and responsible use. Each module includes practical assignments." },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join the Prompt Engineering Course?",
      intro: "AI tools now sit inside everyday work, from drafting emails to analysing data. The Prompt Engineering course at techcadd is designed for anyone who wants to use them with skill instead of trial and error.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Graduates and postgraduates from any stream (commerce, arts, science, engineering or management) can use this skill to stand out in a crowded fresher market. Employers increasingly look for candidates who can work efficiently with AI tools." },
        { icon: "Briefcase", title: "Working professionals", text: "Working professionals in marketing, HR, sales, operations, finance, content and customer support can use prompt techniques to cut repetitive work, produce faster reports and improve the quality of their output." },
        { icon: "Shuffle", title: "Job switchers", text: "Job switchers moving towards AI-enabled roles, such as AI content specialist, prompt designer, AI operations executive or automation associate, get a practical, portfolio-ready skill set." },
        { icon: "PenTool", title: "Freelancers", text: "Freelancers can offer AI-assisted writing, research, social media, translation and workflow services to clients with greater speed and consistency." },
        { icon: "Building2", title: "Business owners and entrepreneurs", text: "Business owners and entrepreneurs can apply prompts to product descriptions, customer replies, market research and internal documentation without hiring a large team." },
        { icon: "BookOpen", title: "Students after 12th", text: "Students after 12th who are curious about AI can also begin here, as the course starts from the basics and builds step by step." },
      ],
      need: "You do not need a technical degree or programming background. What you need is curiosity, basic computer comfort and a willingness to practise.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Students outside Jalandhar do not need to relocate. Live online classes bring the same practical training to learners across North India, each with a different goal:",
      items: [
        { title: "Punjab", text: "Whether you are looking for a Prompt Engineering course in Punjab to support a family business in Ludhiana's hosiery trade or a startup in Mohali, you can build AI workflows for catalogues, export communication and customer support." },
        { title: "Haryana", text: "For a Prompt Engineering course in Haryana, professionals in Gurugram's corporate and e-commerce space can use prompts for reporting, content operations and logistics documentation." },
        { title: "Himachal Pradesh", text: "A Prompt Engineering course in Himachal Pradesh suits hospitality owners, travel operators and remote workers who want AI-assisted bookings, itineraries and multilingual guest replies." },
        { title: "Chandigarh", text: "Those seeking a Prompt Engineering course in Chandigarh, including Tricity IT and BPO staff, can improve support scripts, knowledge bases and documentation." },
        { title: "Delhi", text: "In the competitive fresher market, a Prompt Engineering course in Delhi helps agency, media and fintech aspirants add a differentiating AI skill." },
        { title: "Jammu & Kashmir", text: "A Prompt Engineering course in Jammu and Kashmir lets handicraft sellers and tourism businesses create product listings and customer content in several languages." },
        { title: "Uttarakhand", text: "For a Prompt Engineering course in Uttarakhand, pharma and hospitality staff around Dehradun and Haridwar can streamline SOPs, guest communication and training material." },
        { title: "Rajasthan", text: "A Prompt Engineering course in Rajasthan suits Jaipur's jewellery, textile and tourism sellers who need product descriptions and marketing copy at scale." },
        { title: "Uttar Pradesh", text: "Learners looking for a Prompt Engineering course in Uttar Pradesh, from Noida's IT sector to Lucknow's government and retail roles, can apply prompts to research, drafting and data summarisation." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This Prompt Engineering Program?",
      intro: "Most people who use AI tools get average results because they type vague instructions and accept the first answer. The difference between a casual user and a skilled one is how well they frame the task. This program teaches that difference in a structured, repeatable way.",
      points: [
        { title: "AI skills are now a hiring advantage", text: "Companies across sectors are adding AI tools to everyday workflows, and many job descriptions in marketing, operations, content, analytics and customer support now mention generative AI. A professional who can reliably direct these tools saves time and produces better work. Roles such as AI content specialist, prompt designer, AI operations associate and automation executive are growing alongside this demand." },
        { title: "You learn a method, not just a list of tricks", text: "Prompts that work today may need adjusting when a model updates. So the program focuses on principles that carry across tools: defining a clear role, supplying context, setting constraints, specifying output format, giving examples, breaking problems into steps and testing results. Once you understand these, you can adapt to ChatGPT, Claude, Gemini, Copilot or whatever tool your employer prefers." },
        { title: "Practical work over theory", text: "Every module ends with a task you can use at work or show to a client: a content workflow, a research summary template, a customer-reply system, a data-cleaning prompt or a document-drafting routine. By the end, you hold a portfolio of tested prompts and workflows, which is far more convincing in an interview or freelance pitch than a list of topics studied." },
        { title: "Useful beyond one job role", text: "Prompt skills transfer across functions. A marketer uses them for campaigns, an HR executive for job descriptions and screening summaries, an accountant for report explanations, and a business owner for proposals and customer communication. This flexibility makes the skill valuable even if you change careers later." },
        { title: "Responsible and accurate AI use", text: "The program also covers the limits of AI. You learn to spot hallucinations, verify facts, protect confidential data, avoid copyright pitfalls and review outputs before sharing them. These habits matter to employers who want AI used safely." },
        { title: "Suited to busy learners", text: "With live online sessions alongside classroom learning, working professionals and learners from smaller towns can fit training around their schedule. Sessions are interactive, so you can ask questions, get feedback on your prompts and refine them with the trainer." },
        { title: "Realistic career outlook", text: "Salaries vary widely by company, city, skills and experience. As an approximate guide, entry-level AI-related roles in India often start around ₹3 to ₹6 lakh per year, while experienced professionals who combine prompt skills with domain expertise, analytics or automation can earn considerably more. Freelancers can build income by serving clients in content, research and workflow automation. These are indicative figures, not guarantees, and outcomes depend on your effort, portfolio and the market." },
      ],
      outro: "If you want a practical, beginner-friendly Prompt Engineering course that builds real skills you can use immediately, this program offers a clear path from basics to job-ready workflows.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your Prompt Engineering Training?",
      intro: "Choosing where to learn AI skills matters as much as choosing what to learn. Here is what sets the techcadd approach apart for learners of this course.",
      points: [
        { title: "North India's First AI-Powered and Robotics Learning Centre", text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For a Prompt Engineering learner, this means you train in an environment where AI is part of daily teaching, not an add-on topic. You work with live AI tools, see how language models connect with automation and intelligent systems, and understand where prompting fits into the wider AI landscape, including robotics and smart-technology workflows. In practical terms, this gives you:", list: ["Hands-on AI exposure: You practise on real AI platforms with real tasks instead of watching slides about them.", "Practical projects: Your prompts are tested on realistic business scenarios, such as content workflows, research summaries and customer-reply systems.", "A modern technology environment: You learn alongside other AI and technology learners, which helps you see how prompting connects to automation, data and emerging tools.", "Wider career vision: Understanding how AI and robotics are converging helps you plan a future-ready path, not just a one-tool skill."], after: "This matters for learners from different states in different ways. Students from Punjab and Haryana, many from manufacturing, trading and IT service backgrounds, can see how AI assists operations and documentation. Learners from Himachal Pradesh and Uttarakhand, often in tourism, hospitality and remote work, can apply AI to guest communication and freelance services. Professionals from Chandigarh and Delhi can connect prompting skills with agency, BPO and fintech workflows. Learners from Jammu & Kashmir, Rajasthan and Uttar Pradesh, often running small businesses or handicraft, retail and government-linked work, can use AI for listings, research and drafting." },
        { title: "Practical, Project-Based Training", text: "Every module is built around doing. You write, test and refine prompts, compare model outputs and build a portfolio of working workflows you can show employers or clients." },
        { title: "Industry-Relevant Curriculum", text: "The syllabus focuses on skills businesses actually use: structured prompting, output control, prompt testing, workflow design and responsible AI use. It is reviewed so that it stays current as tools change." },
        { title: "Experienced Trainers", text: "Trainers guide you through practical work, give feedback on your prompts and explain not just what works but why." },
        { title: "Small Batches", text: "Smaller batches allow more individual attention, quicker doubt-solving and personalised feedback on your assignments." },
        { title: "Certificate", text: "On completion, learners receive a techcadd course completion certificate. It reflects the skills you have practised and the projects you have finished." },
        { title: "Career and Placement Support", text: "techcadd offers career guidance such as portfolio building, resume support and interview preparation. Job outcomes depend on your performance, effort and the market, so no guaranteed placement is promised." },
        { title: "Flexible Online + Offline Learning", text: "You can choose classroom training or live online sessions, which suits working professionals and learners who cannot travel." },
        { title: "Support for Students from Other States", text: "Learners outside Punjab get the same interactive live classes, doubt support and assignment feedback, with timings planned so that working learners can attend." },
      ],
    },
    tools: {
      title: "Tools Covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "AI assistants", tools: "ChatGPT, Claude, Google Gemini, Microsoft Copilot, Perplexity" },
        { area: "Research and notes", tools: "NotebookLM, Notion AI" },
        { area: "Image and design", tools: "Canva AI tools and AI image generators" },
        { area: "Productivity", tools: "Google Workspace and Microsoft 365 with built-in AI features" },
        { area: "Automation", tools: "Zapier, Make or similar no-code platforms" },
        { area: "Optional technical layer", tools: "AI playgrounds and basic API usage" },
      ],
      note: "Tools evolve quickly, so the training focuses on skills that transfer. Typical tools include:",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Roles where prompt skills help include AI content specialist, prompt designer, AI operations executive, automation associate, digital marketing executive, research analyst and freelance AI consultant. Salaries depend on company, city and experience, and entry-level AI-related roles in India are often in the range of ₹3 to ₹6 lakh per year (approximate). Metro hubs such as Bengaluru, Hyderabad, Pune and Mumbai also offer remote and hybrid options.",
      roles,
      jobsTitle: "Prompt Engineering Jobs Across North Indian States",
      jobs: [
        { title: "Punjab", text: "Prompt Engineering jobs in Punjab are emerging in Mohali's IT and startup circle, and in manufacturing and export firms in Ludhiana and Jalandhar that need AI-assisted catalogues, buyer communication and documentation." },
        { title: "Haryana", text: "Gurugram and Faridabad offer openings in MNC support teams, e-commerce operations and logistics, where AI-based reporting and content workflows are valued." },
        { title: "Delhi NCR", text: "Delhi and Noida have the largest fresher market, with agencies, media houses and fintech firms hiring for AI-assisted content, research and campaign roles." },
        { title: "Himachal Pradesh", text: "Hospitality, tourism and Baddi's pharma sector create demand for AI-supported guest communication and documentation, and many learners here also build remote freelance careers." },
        { title: "Rajasthan", text: "Jaipur's tourism, handicraft and jewellery businesses can use AI for product listings, multilingual marketing and online selling." },
        { title: "Uttar Pradesh", text: "Lucknow and Meerut offer scope in retail, government-linked work and education, while Noida's IT firms hire for AI-enabled operations." },
      ],
      outro: "Freelancing is another route: you can serve clients in content, research, customer support and automation from any city.",
    },
    faqTitle: "Frequently Asked Questions: Prompt Engineering Course",
    cta: { title: "Start Your AI Career with the", highlight: "Prompt Engineering Course at techcadd", text: "Learn to get better results from AI, and turn that skill into work. Join the practical, project-based Prompt Engineering course. Build a portfolio of tested prompts and AI workflows you can use in your job, freelance business or startup. No coding background needed, and live online classes are open to learners across North India." },
  },
};
