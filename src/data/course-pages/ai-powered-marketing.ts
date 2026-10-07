import type { CoursePage } from "./types";

/* /courses/ai-powered-marketing — long-form landing copy supplied by the client (Google Doc, Stages 1–4, 6 and 7), used as given.
   The older page at /ai-courses/ai-powered-marketing (`aiCourses` in site.ts) now REDIRECTS here — see `movedTo` in
   src/app/ai-courses/[slug]/page.tsx — and the AI dropdown link points here.
   Left out on purpose:
   - Stage 5 "Student Reviews": the document's own Stage 8 calls them SAMPLE reviews to be replaced with real, consented ones,
     so this page keeps the shared testimonials section (add `copy.reviews` when real reviews exist);
   - Stage 8 (keyword & GEO strategy report) and the keyword plan: planning notes, not page content;
   - bracketed editor notes ("[Confirm before publishing…]", "[Add actual duration]"…) and the CTA's extra form fields.
   CHECK WITH THE CLIENT: `duration`/`level` are the old AI-page values (the doc says "[Add actual duration]"); the module and
   tool lists ("[Confirm the final syllabus matches your curriculum.]"); the certificate and placement-support lines; and the
   "North India's first AI-powered and Robotics learning centre" first/only claim — keep only if it can be supported.
   Module `topics` are split out of each module description by the import script. */

const roles = ["AI marketing executive", "Digital marketing specialist", "Content strategist", "Performance marketer", "SEO specialist", "Social media manager", "Marketing automation specialist", "Growth marketer"];

export const aiPoweredMarketing: CoursePage = {
  slug: "ai-powered-marketing",
  title: "AI-Powered Marketing Course",
  navLabel: "AI-Powered Marketing",
  group: "marketing",
  icon: "Megaphone",
  tagline: "Plan, create, run and measure marketing campaigns with AI: research, content, SEO, paid ads, automation and analytics.",
  level: "All Levels",
  duration: "4 Months",
  eligibility: "Open to any stream; no technical background needed",
  overview: [
    "The AI-powered marketing course at techcadd teaches you how to plan, create, run and measure marketing campaigns using AI tools, so you can deliver better results in less time. You will learn how to apply AI to market research, content creation, SEO, social media, email marketing, paid ads, analytics and customer journey automation, while keeping your brand voice and strategy firmly in human hands.",
    "The program covers practical tools such as ChatGPT, Claude, Gemini, Canva AI, Google Analytics 4, Google Ads, Meta Ads and marketing automation platforms. You will also learn prompt writing for marketers, AI-assisted content workflows, audience segmentation and campaign reporting. No technical background is needed, so graduates, working professionals, job switchers, freelancers and business owners can all start comfortably.",
    "Learners across Punjab can join live online classes, and those near our physical centre in Jalandhar can attend offline batches. Every module is project-based, so you finish with real campaign work, such as a content calendar, an ad campaign plan and a performance dashboard, that you can add to your portfolio.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Plan a full marketing funnel and choose the right AI tool for each stage",
    "Create on-brand content faster without losing quality or accuracy",
    "Run and optimise Google and Meta ad campaigns with data-backed decisions",
    "Set up email and WhatsApp automation for lead nurturing",
    "Build clear dashboards and explain results to clients or managers",
    "Present a portfolio of campaigns to employers or clients",
  ],
  syllabus: [
    { title: "Module 1: Marketing Foundations and AI Basics", summary: "Core marketing concepts (audience, positioning, funnel, brand voice) and how AI tools work, including what they do well, where they make mistakes and how to use them responsibly. You will also learn prompt writing for marketers.", topics: [] },
    { title: "Module 2: AI-Assisted Market and Audience Research", summary: "Competitor analysis, customer persona building, trend research and survey analysis using AI, with a focus on checking facts instead of trusting outputs blindly.", topics: [] },
    { title: "Module 3: Content Creation and Brand Voice", summary: "Planning content calendars, drafting blogs, captions, scripts and product descriptions with AI, then editing them to match a brand voice. Image and video creation with AI design tools is included.", topics: [] },
    { title: "Module 4: SEO and AI Search Visibility", summary: "Keyword research, on-page SEO, content briefs and optimising for both traditional search and AI-generated answers, including how to structure content so it is easy to cite.", topics: [] },
    { title: "Module 5: Social Media Marketing with AI", summary: "Platform strategy for Instagram, LinkedIn, YouTube and Facebook, short-video workflows, community management, and scheduling and reporting.", topics: [] },
    { title: "Module 6: Paid Advertising and Performance Marketing", summary: "Setting up Google Ads and Meta Ads campaigns, writing and testing ad variations with AI, budgeting, targeting and using automated campaign formats sensibly.", topics: [] },
    { title: "Module 7: Email, WhatsApp and Marketing Automation", summary: "Building lead funnels, email sequences and WhatsApp follow-ups, segmenting audiences, and automating repetitive tasks with CRM and workflow tools.", topics: [] },
    { title: "Module 8: Analytics, Reporting and Optimisation", summary: "Google Analytics 4, conversion tracking, dashboards in Looker Studio, A/B testing and using AI to summarise performance and suggest next steps.", topics: [] },
    { title: "Module 9: Ethics, Compliance and Data Privacy", summary: "Disclosing AI use, avoiding plagiarism and misleading claims, copyright awareness, and handling customer data responsibly under India's data protection rules.", topics: [] },
    { title: "Module 10: Capstone Campaign and Career Preparation", summary: "You plan, run and report an end-to-end campaign for a real or simulated business. Resume, portfolio, freelancing basics and interview preparation are included.", topics: [] },
  ],
  tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Canva", "Adobe Firefly", "CapCut", "Google Search Console", "Semrush or Ahrefs (basics)", "Google Keyword Planner", "Google Ads", "Meta Ads Manager", "Google Analytics 4", "Looker Studio", "Google Tag Manager", "Mailchimp", "HubSpot (free CRM)", "Zapier", "Make", "n8n", "Meta Business Suite", "LinkedIn", "YouTube Studio"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is the AI-powered marketing course?", a: "The AI-powered marketing course teaches you to plan, create, run and measure marketing campaigns using AI tools, while keeping strategy, brand voice and judgement in human hands. It covers research, content, SEO, social media, paid ads, email automation, analytics and responsible AI use, with hands-on projects in every module." },
    { q: "Who is eligible for the AI-powered marketing course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners from any stream can join. 12th-pass students with a strong interest in digital marketing can also enrol, but they should be ready for regular practice. No prior marketing or technical experience is required." },
    { q: "Is the AI-powered marketing course suitable for beginners?", a: "Yes, the course starts from marketing and AI basics and builds step by step. Beginners should expect to practise regularly, because campaigns, analytics and ad platforms need hands-on use, but you do not need a technical degree." },
    { q: "Can I learn AI marketing without a technical background?", a: "Yes, you can start without any technical background, because the course focuses on strategy, communication and analysis instead of coding. Analytics and ad platforms may feel new at first, and the small batches and trainer support are meant to help with that." },
    { q: "What is the difference between AI marketing and traditional digital marketing?", a: "Digital marketing is the practice of promoting a business through channels such as search, social media, email and ads, while AI marketing uses AI tools to speed up and improve each of those tasks, from research and content to targeting and reporting. In simple terms, AI does not replace digital marketing. It changes how efficiently you do it, and human strategy still decides what works." },
    { q: "What is covered in the AI-powered marketing syllabus?", a: "The syllabus has ten modules: marketing and AI foundations, AI-assisted research, content and brand voice, SEO and AI search visibility, social media, paid advertising, email and automation, analytics and reporting, ethics and compliance, and a capstone campaign." },
    { q: "Which AI and marketing tools will I learn?", a: "You will work with AI assistants such as ChatGPT, Claude and Gemini, design tools such as Canva, Google Ads, Meta Ads Manager, Google Analytics 4, Looker Studio, email and CRM platforms, and automation tools such as Zapier or Make." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, learners receive a techcadd course completion certificate. A certificate helps, but employers mainly look at your portfolio and campaign results." },
    { q: "Can I learn AI-powered marketing online, or do I have to attend offline?", a: "You can choose either one. Live online classes let you join from any state, and offline batches are available at the Jalandhar centre in Punjab. Both modes follow the same practical, project-based approach." },
    { q: "What are the fees and duration of the AI-powered marketing course?", a: "The fees and duration depend on the batch and learning mode, so please contact techcadd for current details." },
    { q: "What jobs can I get after an AI marketing course?", a: "You can aim for roles such as AI marketing executive, digital marketing specialist, content strategist, SEO specialist, performance marketer, social media manager or marketing automation specialist. Existing professionals can also use these skills to grow in their current marketing or sales roles." },
    { q: "What is the salary after learning AI marketing in India?", a: "Entry-level digital and AI marketing roles in India approximately start between ₹3 and ₹6 LPA, and experienced performance marketers and growth specialists can earn much more. Your actual pay depends on your skills, portfolio, company and city, and the course does not guarantee a salary." },
    { q: "Can I do freelancing after this course?", a: "Yes, many learners use these skills to offer services such as content planning, social media management, ad campaigns, email automation and monthly reporting to small businesses. Freelancing works best when you build a few strong portfolio campaigns and understand a client's business goals." },
    { q: "Can students from Himachal Pradesh join the AI-powered marketing course online?", a: "Yes, students from Himachal Pradesh can join live online classes from anywhere in the state. Since tourism, hospitality and horticulture businesses often rely on online promotion, this is a practical way to take an AI-powered marketing course in Himachal Pradesh without moving to a metro." },
    { q: "What are the AI marketing job opportunities in Punjab and Haryana?", a: "In Punjab, opportunities are growing in IT and startups around Mohali, as well as in export and manufacturing businesses that need online buyers. In Haryana, e-commerce, automobile and IT services companies, especially around Gurugram, are the main employers. Both states also offer remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai." },
    { q: "Is the AI-powered marketing course useful for students in Jammu & Kashmir and Uttarakhand?", a: "Yes, it is useful for both, and online classes remove the need to travel. In Jammu & Kashmir, handicraft sellers, tourism operators and horticulture businesses can reach customers across India, and in Uttarakhand, hotels, adventure tourism and pharma-linked businesses can use AI-assisted campaigns to generate bookings and leads. Learners can also pursue remote jobs and freelancing." },
    { q: "Can learners from Delhi, Rajasthan and Uttar Pradesh join the AI-powered marketing course?", a: "Yes, learners from Delhi NCR, Rajasthan and Uttar Pradesh can attend live online sessions and work on the same campaign projects. Delhi has the largest fresher market for marketing roles, Rajasthan's jewellery, textile and tourism sellers can grow through online campaigns, and Uttar Pradesh offers openings in retail, IT and electronics." },
    { q: "Is the AI-powered marketing course relevant for students in Chandigarh and Tricity?", a: "Yes, an AI-powered marketing course in Chandigarh is useful for people in BPO, education, IT and startups who want to move into digital and AI-led marketing roles. Because the course is online-friendly, you can learn while continuing your job in the Tricity area." },
  ],
  related: ["digital-marketing", "seo", "chatgpt-ai-tools"],
  copy: {
    heading: { title: "AI-Powered Marketing Course", highlight: "in India", meta: "AI-Powered Marketing Course in India: Plan, Create and Measure Campaigns with AI | techcadd" },
    overview: { eyebrow: "Program Overview", title: "AI-Powered Marketing Course in India: Program Overview" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "What You Will Learn in the AI-Powered Marketing Course", text: "The program is split into modules that build on each other. You start with strategy and AI fundamentals, then move through content, search, social, ads, email and analytics, and finish with a full campaign project." },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join the AI-Powered Marketing Course?",
      intro: "The AI-powered marketing course at techcadd is built for people who want to market smarter, not just harder.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Graduates and postgraduates from BBA, B.Com, BA, BCA, MBA, MCA or any other stream can use this course to enter roles such as AI marketing executive, content strategist, performance marketer or social media manager. It gives freshers a practical edge in a crowded job market." },
        { icon: "Briefcase", title: "Working professionals", text: "Working professionals in sales, marketing, HR, operations or customer support can learn to automate reporting, speed up content creation and improve campaign results. This makes you more valuable in your current role and ready for the next one." },
        { icon: "Shuffle", title: "Job switchers", text: "Job switchers moving from traditional marketing, teaching, banking or other fields will find a structured, project-based path with a portfolio at the end." },
        { icon: "PenTool", title: "Freelancers and agency owners", text: "Freelancers and agency owners can add AI-assisted content, ad management and reporting to their services, so they can serve more clients in less time." },
        { icon: "Building2", title: "Business owners and startup founders", text: "Business owners and startup founders can learn how to run lead generation, social media and email campaigns using AI, reducing dependence on expensive agencies while knowing what to ask for." },
        { icon: "BookOpen", title: "12th-pass students", text: "12th-pass students with a strong interest in digital marketing can also join. A creative mindset and regular practice matter more than prior knowledge." },
      ],
      need: "You do not need a technical background or prior marketing experience. If you are curious, creative and ready to practise, you can start. Every tool is taught from the basics.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because classes run live online, you can join from anywhere in North India. Here is how the course fits learners in each region.",
      items: [
        { title: "Punjab", text: "An AI-powered marketing course in Punjab suits exporters and manufacturers in Ludhiana who want to find international buyers online, Mohali's startups and IT firms building their brand, and graduates in Amritsar and Patiala who want agency or in-house marketing roles close to home." },
        { title: "Haryana", text: "Marketers in Gurugram and Faridabad working with e-commerce, automobile or IT services brands can use AI to scale ad testing, content and customer retention. This is what makes an AI-powered marketing course in Haryana useful for working professionals." },
        { title: "Himachal Pradesh", text: "Hotel owners, homestay operators and horticulture sellers in Shimla, Manali and Dharamshala can promote their business directly to travellers and buyers. Freelancers can also serve clients elsewhere remotely, which is why interest in an AI-powered marketing course in Himachal Pradesh keeps growing." },
        { title: "Chandigarh and Tricity", text: "Candidates in Chandigarh, Mohali and Panchkula, especially from BPO, education and startup backgrounds, can move into digital and AI-led marketing roles. Many look for an AI-powered marketing course in Chandigarh for exactly this shift." },
        { title: "Delhi NCR", text: "Delhi, Noida and Ghaziabad host the region's largest concentration of agencies, media houses and fintech brands. Freshers and professionals can use AI skills to stand out, and an AI-powered marketing course in Delhi supports that need." },
        { title: "Jammu & Kashmir", text: "Handicraft sellers, tourism operators and horticulture businesses in Jammu and Srinagar can reach customers across India through social media and online stores. Students can also build remote careers through an AI-powered marketing course in Jammu & Kashmir." },
        { title: "Uttarakhand", text: "Hotels, adventure tourism operators and pharma-linked businesses in Dehradun and Haridwar can attract bookings and leads through AI-assisted campaigns, making an AI-powered marketing course in Uttarakhand practical for working learners." },
        { title: "Rajasthan", text: "Jaipur's jewellery, textile and handicraft sellers can create catalogues, product descriptions and ads faster, and tourism businesses can improve their online bookings. An AI-powered marketing course in Rajasthan fits both entrepreneurs and graduates." },
        { title: "Uttar Pradesh", text: "Learners in Noida, Lucknow and Meerut can target roles in retail, electronics and IT companies, or support local businesses and government-linked communication work, through an AI-powered marketing course in Uttar Pradesh." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn AI-Powered Marketing Now?",
      intro: "Almost every marketer has tried an AI tool by now. Far fewer know how to use AI in a structured way to plan campaigns, improve results and prove the return on spend. That gap is why this AI-powered marketing course is worth your time.",
      points: [
        { title: "Marketing teams are being asked to do more with less.", text: "Brands expect more content, more testing and faster reporting, often without bigger teams or budgets. Marketers who can use AI for research, drafting, ad variations, segmentation and reporting can deliver that output without losing quality. Employers notice this quickly." },
        { title: "Knowing tools is not enough; judgement is the real skill.", text: "Anyone can type a prompt and get a post. What sets you apart is knowing which message suits which audience, how to edit AI output so it sounds like your brand, how to fact-check claims, and how to read data and decide what to do next. This program trains that judgement alongside the tools." },
        { title: "You learn by running real campaigns.", text: "Every module ends with usable work. You will build a content calendar, write SEO-friendly articles with AI assistance, design ad creatives, set up an email sequence, plan a paid campaign and create a performance report. You also learn the less glamorous parts that clients care about: brand voice guidelines, approvals, data privacy and responsible use of AI-generated content." },
        { title: "It works for creative and non-technical backgrounds.", text: "The course focuses on strategy, communication and analysis, not coding. A commerce graduate, a school teacher moving to marketing and a small shop owner can all follow the same path and apply it differently." },
        { title: "It opens several career routes.", text: "Depending on your background, you can aim for roles such as AI marketing executive, digital marketing specialist, content strategist, performance marketer, social media manager, marketing automation specialist or growth marketer. You can also freelance, offering AI-assisted content, ad management and reporting to small businesses and agencies. Many of these jobs are remote or hybrid, with companies in Bengaluru, Hyderabad, Pune and Mumbai, so relocation is not always necessary." },
        { title: "Pay potential is decent, though it varies.", text: "As an approximate guide, entry-level digital and AI marketing roles in India often start in the range of ₹3-6 LPA, while experienced performance marketers and growth specialists can earn considerably more. Actual salary depends on your skills, portfolio, company and city, so treat these as indicative figures and not promises." },
        { title: "Early skill-building gives you an edge.", text: "Search is changing, with AI answers appearing alongside traditional results, and social platforms are adding AI features constantly. Marketers who understand both the tools and the fundamentals will adapt faster than those who wait." },
      ],
      outro: "What you leave with: a practical understanding of how to use AI across the marketing funnel, a portfolio of real campaign work, and the confidence to explain your approach and results in interviews or to clients.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your AI-Powered Marketing Course?",
      intro: "Choosing where to learn AI-powered marketing matters, because the tools change every few months and many courses stop at a list of apps. Here is what techcadd offers learners who want practical, job-relevant marketing skills.",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For a marketing learner, this means you study in an environment where AI is part of everyday learning, not an add-on module. You see how AI systems are built and used across fields, which helps you understand what these tools can do well, where they fail and how to use them responsibly in campaigns. In practice, learners get hands-on AI exposure, practical projects and a modern technology environment that keeps pace with the industry. This benefits learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh equally, since live online classes bring the same practical approach to your screen wherever you are." },
        { title: "Practical, project-based training", text: "You learn by doing real marketing work. Each module produces a usable output, such as a content calendar, an SEO article, an ad campaign plan, an email sequence or a performance dashboard. By the end, you have a portfolio you can show to employers or clients." },
        { title: "Industry-relevant curriculum", text: "The curriculum focuses on skills marketing teams are asking for now: AI-assisted research, content workflows, SEO and AI search visibility, paid advertising, analytics, marketing automation and responsible AI use. Content is reviewed as tools and platforms evolve, so you are not learning outdated material." },
        { title: "Experienced trainers", text: "Trainers guide you through real campaign problems, such as fixing weak ad copy, improving a low-performing landing page or making AI-written content sound like your brand. Learners get feedback on their strategy, content and reports, not just on tool usage." },
        { title: "Small batches", text: "Smaller batches mean more attention and more chances to ask questions. This helps non-technical learners, business owners and working professionals who need extra support with analytics or ad platforms." },
        { title: "Certificate on completion", text: "Learners receive a techcadd course completion certificate." },
        { title: "Career and placement support", text: "techcadd can help with resume building, portfolio review and interview preparation." },
        { title: "Flexible online and offline learning", text: "Choose live online classes or offline batches. Online learners get recorded or revision support where available. This lets working professionals and freelancers learn around their schedule." },
        { title: "Support for students from other states", text: "Learners from outside Punjab are not treated as an afterthought. Students from Himachal Pradesh, J&K, Uttarakhand, Rajasthan and other states join the same live sessions, get doubt support and can build campaigns relevant to their local industries, from tourism and handicrafts to jewellery, textiles and horticulture." },
      ],
    },
    tools: {
      title: "Tools and software covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "AI assistants", tools: "ChatGPT, Claude, Gemini, Perplexity" },
        { area: "Design and video", tools: "Canva, Adobe Firefly, CapCut" },
        { area: "SEO", tools: "Google Search Console, Semrush or Ahrefs (basics), Google Keyword Planner" },
        { area: "Advertising", tools: "Google Ads, Meta Ads Manager" },
        { area: "Analytics and reporting", tools: "Google Analytics 4, Looker Studio, Google Tag Manager" },
        { area: "Email and CRM", tools: "Mailchimp, HubSpot (free CRM)" },
        { area: "Automation", tools: "Zapier, Make, n8n" },
        { area: "Social management", tools: "Meta Business Suite, LinkedIn, YouTube Studio" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope After the Course",
      intro: "AI-powered marketing skills apply across almost every industry. Common roles include AI marketing executive, digital marketing specialist, content strategist, performance marketer, SEO specialist, social media manager, marketing automation specialist and growth marketer. Freelancers can offer content, ad management and reporting to agencies and small businesses. Entry-level salaries in India are approximately ₹3-6 LPA, and they rise with experience and a strong portfolio.",
      roles,
      jobsTitle: "Job opportunities across North India",
      jobs: [
        { title: "Punjab", text: "AI marketing jobs in Punjab are growing in Mohali's IT and startup circle, while exporters and manufacturers in Ludhiana and Jalandhar need marketers who can reach overseas buyers through search, social media and B2B campaigns." },
        { title: "Haryana", text: "AI marketing jobs in Haryana are concentrated around Gurugram, where MNCs, e-commerce brands and automobile companies hire performance marketers, analysts and automation specialists for large-scale campaigns." },
        { title: "Himachal Pradesh", text: "AI marketing jobs in Himachal Pradesh lean towards tourism and hospitality, where hotels and homestays need bookings, reviews and social media, and towards freelance or remote work for clients in other states." },
        { title: "Delhi NCR", text: "AI marketing jobs in Delhi NCR are the most plentiful for freshers, with digital agencies, media houses, fintech and e-commerce companies hiring across content, SEO, paid media and analytics." },
        { title: "Rajasthan", text: "AI marketing jobs in Rajasthan are linked to tourism, jewellery, handicrafts and textiles, where marketers create catalogues, run Instagram and WhatsApp campaigns and help sellers reach customers across India." },
        { title: "Uttar Pradesh", text: "AI marketing jobs in Uttar Pradesh span Noida's IT, electronics and media sector, retail chains in Lucknow and government-linked communication projects, with openings for both generalists and specialists." },
      ],
      outro: "Remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai are also open to learners from any state.",
    },
    faqTitle: "AI-Powered Marketing Course: FAQs",
    cta: { title: "Ready to Market Smarter with AI?", highlight: "Start Your AI-Powered Marketing Journey with techcadd", text: "Stop guessing and start building campaigns that work. Join the AI-powered marketing course at techcadd and learn to plan, create, run and measure marketing using AI tools. Learn through real campaign projects, small batches and trainer support, whether you are a graduate, working professional, job switcher, freelancer or business owner." },
  },
};
