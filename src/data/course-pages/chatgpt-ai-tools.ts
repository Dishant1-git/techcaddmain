import type { CoursePage } from "./types";

/* /courses/chatgpt-ai-tools — NEW page with the client's long-form landing copy (used as given, section by section; the
   brand is spelled "Techcadd" in this text and kept that way).
   The older page at /ai-courses/chatgpt-ai-tools (AI dropdown, `aiCourses` in site.ts) now REDIRECTS here — see `movedTo`
   in src/app/ai-courses/[slug]/page.tsx. The AI dropdown link and the new Courses ▾ AI & Data link both point here.
   - `duration` is the value from the old AI page ("4 Weeks") — confirm with the client (the FAQ says it depends on batch).
   - "North India's First AI-Powered and Robotics Learning Centre" is a first/only claim — keep only if it can be supported.
   - Reviews are the client's supplied text — confirm they are from real students before launch. */

const roles = [
  "AI-assisted content writer or social media executive", "Digital marketing executive", "Prompt writer or AI operations assistant",
  "Virtual assistant or executive assistant", "Customer support and communication specialist", "Freelance consultant for small businesses",
];

export const chatgptAiTools: CoursePage = {
  slug: "chatgpt-ai-tools",
  title: "ChatGPT & AI Tools Course",
  navLabel: "ChatGPT & AI Tools",
  group: "ai-data",
  icon: "MessageSquare",
  tagline:
    "Learn to use ChatGPT and other leading AI tools to work faster, write better, analyse information and automate everyday tasks, with no coding background needed.",
  level: "Beginner",
  duration: "4 Weeks",
  eligibility: "Basic computer or smartphone skills and a stable internet connection; no coding knowledge required",
  overview: [
    "The ChatGPT and AI tools course at Techcadd teaches you how to use ChatGPT and other leading AI tools to work faster, write better, analyse information and automate everyday tasks, with no coding background needed. Whether you are a graduate, working professional, freelancer or business owner, this practical program turns AI from a curiosity into a daily productivity skill.",
    "You will learn prompt writing, content and research workflows, and AI for presentations, images, spreadsheets and customer communication, along with responsible use of AI at work. Every concept is practised on real tasks, so you finish with a set of working prompts and mini-projects rather than just theory.",
    "Learners from Punjab and across India can join live online classes, while our Jalandhar centre offers classroom learning for those who prefer to study in person. With flexible online and offline modes, this program is built for anyone who wants to stay relevant as AI reshapes jobs, freelancing and business.",
  ],
  // "Learning Outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Write clear, structured prompts that give reliable results",
    "Choose the right AI tool for writing, research, design, data or automation",
    "Cut repetitive work time and improve the quality of your output",
    "Check AI answers for errors before using them",
    "Present a portfolio of prompts and mini-projects to employers or clients",
  ],
  syllabus: [
    {
      title: "Module 1: AI Foundations",
      summary: "",
      topics: [
        "What generative AI is and how large language models work, in simple terms",
        "What ChatGPT can and cannot do, including hallucinations and limits",
        "Setting up accounts, understanding free vs paid plans and privacy settings",
      ],
    },
    {
      title: "Module 2: ChatGPT Essentials and Prompt Writing",
      summary: "",
      topics: [
        "The structure of a strong prompt: role, context, task, format and tone",
        "Follow-up prompts, step-by-step refinement and using examples",
        "Building a personal prompt library",
        "Custom instructions, memory settings and custom GPTs",
      ],
    },
    {
      title: "Module 3: AI for Writing and Communication",
      summary: "",
      topics: [
        "Emails, reports, proposals, resumes, cover letters and social media captions",
        "Editing, tone correction and translating between English and Hindi",
        "Keeping your own voice rather than sounding robotic",
      ],
    },
    {
      title: "Module 4: AI for Research and Learning",
      summary: "",
      topics: [
        "Researching with AI search tools and checking sources",
        "Summarising long PDFs, articles and meeting notes",
        "Turning notes into study guides, comparison tables and briefs",
      ],
    },
    {
      title: "Module 5: AI for Presentations, Design and Visuals",
      summary: "",
      topics: [
        "Building slide decks and one-page documents quickly",
        "Creating social media graphics, posters and basic product images with AI",
        "Writing image prompts and avoiding copyright and misuse problems",
      ],
    },
    {
      title: "Module 6: AI for Data, Spreadsheets and Business Tasks",
      summary: "",
      topics: [
        "Using AI to clean data, write formulas and explain charts",
        "Drafting quotations, SOPs, customer replies and FAQs",
        "Basic market and competitor research for small businesses",
      ],
    },
    {
      title: "Module 7: Workflow Automation",
      summary: "",
      topics: [
        "Connecting AI tools to everyday apps for repetitive tasks",
        "Simple no-code automations such as auto-summaries and lead replies",
        "Voice, transcription and meeting-assistant tools",
      ],
    },
    {
      title: "Module 8: Responsible AI and Capstone Project",
      summary: "",
      topics: [
        "Fact-checking, bias, data privacy and ethical use at work",
        "Disclosing AI use honestly in study, jobs and client work",
        "A final project tailored to your goal: job application kit, freelance toolkit or business workflow",
      ],
    },
  ],
  tools: [
    "ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot", "Perplexity", "NotebookLM", "Canva", "Gamma", "Adobe Firefly", "Midjourney", "CapCut",
    "Notion AI", "Excel", "Google Sheets", "Otter.ai", "ElevenLabs", "Zapier", "Make",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who can join the ChatGPT and AI tools course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers, business owners and 12th-pass students can all join. You only need basic computer or smartphone skills and a stable internet connection." },
    { q: "Do I need coding knowledge to learn ChatGPT and AI tools?", a: "No, coding knowledge is not required. The course focuses on prompt writing, content, research and workflow skills that anyone can learn through guided practice." },
    { q: "Is this course suitable for complete beginners?", a: "Yes, the course starts from the basics of how generative AI works and builds up step by step. Beginners get hands-on practice with every topic before moving to the next." },
    { q: "What is the duration and fee of the course?", a: "Duration and fees depend on the batch and mode you choose. Please contact Techcadd's counsellors for the current batch details, as these can change." },
    { q: "What will I learn in the ChatGPT and AI tools course?", a: "You will learn AI foundations, prompt writing, AI for writing and communication, research, presentations and design, spreadsheets and business tasks, simple workflow automation, and responsible AI use. The course ends with a capstone project based on your own goal." },
    { q: "Which AI tools are covered in the course?", a: "The course covers ChatGPT along with other widely used tools such as Google Gemini, Claude, Microsoft Copilot, Perplexity, NotebookLM, Canva, Gamma and automation tools like Zapier. The exact list may be updated as AI tools change." },
    { q: "Will I only learn ChatGPT, or other tools too?", a: "You will learn several tools. ChatGPT is the starting point, and you also learn how to pick the right tool for research, design, data, meetings and automation." },
    { q: "Will I get a certificate after the course?", a: "Learners receive a Techcadd course completion certificate after finishing the program. It shows the skills you have practised and can be added to your resume and LinkedIn profile." },
    { q: "Is the certificate government-approved or recognised by a university?", a: "Please check with Techcadd directly, as this page does not claim any government or university recognition. Employers mostly look at your practical skills and portfolio, so projects you complete matter as much as the certificate." },
    { q: "Can I learn the ChatGPT and AI tools course online?", a: "Yes, you can attend live online classes from anywhere in India. Classroom learning is also available at the Jalandhar centre for those who prefer to study in person." },
    { q: "What jobs can I get after learning ChatGPT and AI tools?", a: "You can work towards roles such as content writer, digital marketing executive, virtual or executive assistant, customer support specialist and AI operations assistant. Job outcomes depend on your skills, portfolio and the employer, and placement is not guaranteed." },
    { q: "What is the salary after a ChatGPT and AI tools course?", a: "Approximate fresher pay in India for related roles often falls between ₹2.4 lakh and ₹5 lakh per year. Actual pay varies by role, city, experience and company." },
    { q: "Can I earn as a freelancer after this course?", a: "Yes, many freelancers use AI tools to speed up writing, research, design and client communication, which lets them take more projects. Income depends on your skills, portfolio and how well you find clients." },
    { q: "What are the ChatGPT and AI tools job opportunities in Punjab and Haryana?", a: "Punjab offers openings in Mohali's IT firms, startups and Ludhiana's export and manufacturing units for content, documentation and operations roles. In Haryana, Gurugram's corporate, e-commerce and logistics companies value AI-ready candidates for reporting and support work." },
    { q: "Can students from Himachal Pradesh join the ChatGPT course online?", a: "Yes, students from Himachal Pradesh can join the live online classes from home. This suits learners in Shimla, Solan and Dharamshala who want to freelance, work remotely or support tourism and hotel businesses." },
    { q: "Is the AI tools course in Delhi and Chandigarh available online?", a: "Yes, learners in Delhi NCR and Chandigarh can attend live online sessions or choose classroom learning in Jalandhar if they prefer. Delhi's agencies and fintech firms and the tricity's startups and BPOs actively look for people who can use AI at work." },
    { q: "Can learners from Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh take this course?", a: "Yes, learners from these states join the same live online batches and get the same practice material and doubt support. Common use cases include tourism and handicraft sellers in Jammu and Srinagar, hospitality staff in Dehradun, businesses in Jaipur, and IT and retail roles in Lucknow." },
  ],
  related: ["generative-ai", "artificial-intelligence", "digital-marketing"],
  copy: {
    heading: { title: "ChatGPT and AI Tools Course", highlight: "in India", meta: "ChatGPT and AI Tools Course: Use AI Like a Pro, From Anywhere in India | Techcadd" },
    overview: { eyebrow: "Program Overview", title: "The ChatGPT and AI tools course at Techcadd", gainsTitle: "Learning Outcomes" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "Module-Wise Curriculum",
      text: "Here is what you will learn in this ChatGPT and AI tools course, module by module.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "You do not need to be a programmer or a tech graduate to benefit from this program. If you use a computer or smartphone for study or work and want to get more done with AI, this course is for you.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Fresh graduates from commerce, arts, science, engineering or management can use AI skills to write sharper resumes, research companies before interviews and prepare better for job applications. In a crowded fresher market, knowing how to use AI well is a clear advantage." },
        { icon: "Briefcase", title: "Working professionals", text: "Executives in marketing, HR, sales, accounts, operations, teaching and administration can use ChatGPT to draft emails, summarise long reports, build presentations and cut down repetitive paperwork." },
        { icon: "Shuffle", title: "Job switchers", text: "If you are moving into a new role or industry, AI tools help you learn faster, build sample work quickly and show employers a modern, practical skill set." },
        { icon: "PenTool", title: "Freelancers", text: "Writers, designers, editors, social media managers and consultants can speed up proposals, content drafts and client communication, and take on more projects without working longer hours." },
        { icon: "Building2", title: "Business owners and entrepreneurs", text: "Product descriptions, social media posts, customer replies, quotations and basic market research can all be handled faster, even without a large team." },
        { icon: "BookOpen", title: "12th-pass students", text: "Students who have completed 12th and are comfortable with basic computer use can also join. Starting early gives them an edge in college projects and future internships." },
      ],
      need: "Basic computer or smartphone skills, a stable internet connection and the willingness to practise. No coding knowledge is required.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because classes run live online, learners from different states join the same practical batches. Here is how the course helps in each region:",
      items: [
        { title: "Punjab", text: "A ChatGPT and AI tools course in Punjab suits exporters, manufacturers and traders in Ludhiana who write buyer emails and product catalogues every day, as well as job seekers building digital skills for the growing IT sector." },
        { title: "Haryana", text: "For a ChatGPT course in Haryana, professionals in Gurugram's corporate, e-commerce and logistics teams can apply AI to reports, documentation and customer support." },
        { title: "Himachal Pradesh", text: "An online AI tools course for Himachal Pradesh students works well for hotel and homestay owners in Shimla and for freelancers who want to work remotely from the hills." },
        { title: "Chandigarh", text: "A ChatGPT course in Chandigarh helps tricity startup teams, BPO staff and education professionals in Panchkula and nearby areas save time on content and communication." },
        { title: "Delhi", text: "An AI tools course in Delhi fits the huge fresher job market, with agencies, fintech and media companies in Noida and across NCR looking for AI-ready candidates." },
        { title: "Jammu & Kashmir", text: "A ChatGPT course in Jammu and Kashmir helps handicraft sellers, tourism operators and online sellers in Srinagar write listings and answer customer enquiries more effectively." },
        { title: "Uttarakhand", text: "An AI tools course in Uttarakhand benefits hospitality and tourism staff in Dehradun and Haridwar, and professionals in industrial and pharma units who handle documentation." },
        { title: "Rajasthan", text: "A ChatGPT course in Rajasthan suits jewellery, textile and handicraft businesses and tourism professionals in Jaipur who need quick product descriptions and multilingual customer replies." },
        { title: "Uttar Pradesh", text: "An AI tools course in Uttar Pradesh helps IT and retail professionals, and government-job aspirants in Lucknow and Meerut, to research, summarise and draft faster." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn ChatGPT and AI Tools Now",
      intro: "AI is no longer a future skill. Employers, clients and customers already expect faster work, cleaner writing and quicker research. People who know how to direct AI well finish tasks in minutes that once took hours, while those who ignore it risk falling behind in the same role. This ChatGPT and AI tools course is designed to close that gap in a practical, step-by-step way.",
      points: [
        { title: "It focuses on skill, not hype.", text: "Many people open ChatGPT, type a vague question and get a vague answer. Here, you learn how to give clear instructions, set context, refine results and check outputs, so the answers you get are actually useful." },
        { title: "It goes beyond one tool.", text: "ChatGPT is the starting point, but real work needs more. You will explore other widely used AI tools for research, writing, presentations, design, spreadsheets and meeting notes, and learn how to choose the right tool for each job. Since AI products change quickly, the course teaches you how to evaluate new tools, not just how to use today's." },
        { title: "It is built around real tasks.", text: "Instead of abstract theory, you practise on work you will actually do: drafting emails and proposals, summarising long documents, preparing reports, planning content calendars and answering customer queries." },
        { title: "It teaches responsible use.", text: "You will learn where AI makes mistakes, how to fact-check its answers, how to protect confidential information and how to use AI honestly in study and professional work. This builds trust with employers and clients." },
        {
          title: "What You Gain",
          text: "",
          list: [
            "Time saved every week on repetitive writing, research and admin work",
            "Better quality output through structured prompts and review habits",
            "A personal prompt library you can reuse in your own job or business",
            "Mini-projects that show your AI skills to employers, clients or your own team",
            "Confidence to try new AI tools without fear or confusion",
          ],
        },
        { title: "Career and Income Benefits", text: "For job seekers, AI skills strengthen your profile in roles such as content, marketing, HR, operations, customer support and business administration. For freelancers, they help you deliver faster and take on more clients. For business owners, they reduce the cost and effort of marketing, communication and research. Salary or income gains vary by role, experience and employer, so treat any figure you see online as a rough guide rather than a promise." },
        { title: "Flexible Learning for Busy People", text: "Most learners here are studying alongside college, a job or a business. Live online classes let you attend from anywhere in India, and classroom learning is available for those who prefer it. Beginners are welcome, and you can learn at a comfortable pace with guided practice." },
        { title: "Is This Program Right for You?", text: "If you want to work smarter, build a modern skill set and use AI with confidence rather than guesswork, this is a strong place to start. You do not need coding knowledge, an IT background or expensive software. You need curiosity, regular practice and the willingness to apply what you learn to real work." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Techcadd",
      title: "Why Choose Techcadd",
      intro: "Choosing where to learn AI matters as much as choosing what to learn. Here is what Techcadd offers to learners of this ChatGPT and AI tools course.",
      points: [
        {
          title: "North India's First AI-Powered and Robotics Learning Centre",
          text: "Techcadd positions itself as North India's first AI-powered and Robotics learning centre. For a learner of this course, that means studying in an environment where AI is part of everyday learning, not just a topic on a syllabus.",
          list: [
            "Hands-on AI exposure: You work with real AI tools on real tasks from day one, rather than only watching demonstrations.",
            "Practical projects: Learning is built around applying AI to writing, research, reporting and communication work you will actually do.",
            "A modern technology environment: Being part of an institute that also trains learners in AI and robotics keeps you close to how the technology is changing, so what you learn stays current.",
            "Value for learners across North India: Students from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh can access the same AI-focused learning through live online classes, without relocating.",
          ],
        },
        { title: "Practical and Project-Based Training", text: "Every module ends with an applied task: a prompt set, a draft, a summary or a small workflow you can reuse. You finish with a body of work to show, not just notes to read." },
        { title: "Industry-Relevant Curriculum", text: "The course focuses on how AI is used in everyday jobs and businesses today, including prompting, content and research workflows, and responsible use. Since AI tools change fast, the content is reviewed and updated so you are not learning outdated features." },
        { title: "Experienced Trainers", text: "You learn from trainers who guide you through hands-on practice, review your prompts and outputs, and explain why a result works or fails. Questions are encouraged, and feedback is specific to your work." },
        { title: "Small Batches", text: "Smaller batches mean more attention, easier doubt-clearing and more time to practise during sessions. This matters especially for beginners who are new to AI tools." },
        { title: "Certificate on Completion", text: "Learners receive a Techcadd course completion certificate after finishing the program. It reflects the skills you have practised, and you can add it to your resume and LinkedIn profile." },
        { title: "Career and Placement Support", text: "Techcadd supports learners with career guidance such as resume tips, profile building and interview preparation. Job outcomes depend on your skills, effort and the market, so no placement is promised." },
        { title: "Flexible Online and Offline Learning", text: "Choose live online classes or classroom learning, whichever suits your schedule. This helps working professionals, freelancers and business owners study without disturbing their routine." },
        { title: "Support for Students from Other States", text: "Learners outside Punjab get the same quality of teaching, practice material and doubt support through live online sessions. Trainers keep sessions interactive so remote learners are not left behind." },
      ],
    },
    tools: {
      title: "Tools Covered",
      columns: ["Area", "Tools"],
      groups: [
        { area: "AI assistants", tools: "ChatGPT, Google Gemini, Claude, Microsoft Copilot" },
        { area: "Research and notes", tools: "Perplexity, NotebookLM" },
        { area: "Presentations and design", tools: "Canva, Gamma" },
        { area: "Image and video", tools: "Adobe Firefly, Midjourney, CapCut" },
        { area: "Productivity", tools: "Notion AI, Excel and Google Sheets AI features" },
        { area: "Meetings and voice", tools: "Otter.ai, ElevenLabs" },
        { area: "Automation", tools: "Zapier, Make" },
      ],
      note: "AI products change quickly, so the exact tools and features may be updated as the course evolves.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "AI skills are now useful in almost every office-based role. Common roles and responsibilities where these skills help include:",
      roles,
      rolesNote: "Approximate fresher pay for such roles in India often falls between ₹2.4 lakh and ₹5 lakh per year, and freelance income varies widely. Your actual result depends on your portfolio, communication skills and the employer.",
      jobsTitle: "State-Wise Opportunities",
      jobs: [
        { title: "Punjab", text: "ChatGPT and AI tools jobs in Punjab are growing in Mohali's IT companies and startups, and in Amritsar's growing digital agencies, for content, support and operations roles." },
        { title: "Haryana", text: "With a ChatGPT course in Haryana behind you, you can apply AI to documentation, vendor communication and reporting in Faridabad's manufacturing and automobile units, and in Karnal's agri and logistics businesses." },
        { title: "Himachal Pradesh", text: "Freelancing and remote work suit learners in Dharamshala, where AI helps with client writing, translation, travel-content creation and online bookings." },
        { title: "Delhi", text: "In Delhi's agencies, fintech firms and media houses, AI skills help freshers stand out for marketing, research and content roles." },
        { title: "Jammu & Kashmir", text: "Online sellers and tourism operators in Jammu can use AI for product listings, customer replies and scheme-related paperwork." },
        { title: "Rajasthan", text: "Handicraft, textile and tourism businesses in Sri Ganganagar and across the state can use AI for catalogues, export communication and multilingual customer support." },
      ],
      outro: "Learners can also apply to remote and hybrid roles in Bengaluru, Hyderabad, Pune and Mumbai, where many companies hire AI-ready professionals for work-from-home positions.",
    },
    reviews: {
      title: "What Our Learners Say About the ChatGPT & AI Tools Course",
      items: [
        { name: "Harpreet Singh", role: "Graduate", place: "Jalandhar, Punjab", rating: 5, headline: "ChatGPT has completely changed how I work.", text: "I had used ChatGPT only for basic questions before joining this course. Now I use it for emails, research, content creation, presentations, and daily office tasks. The trainers explained everything with practical examples." },
        { name: "Neha Malhotra", role: "Working Professional", place: "Gurugram, Haryana", rating: 5, headline: "Very useful for my daily office work.", text: "I joined because I wanted to save time at work. I learned how to use ChatGPT for reports, Excel-related tasks, emails, meeting summaries, and research. I now finish many routine tasks much faster." },
        { name: "Rohit Thakur", role: "Job Seeker", place: "Shimla, Himachal Pradesh", rating: 4, headline: "Easy to understand even for a non-technical person.", text: "I come from a commerce background and was worried that AI tools would be difficult. The course started from the basics and gradually introduced different tools. The hands-on practice made everything much easier." },
        { name: "Simran Kaur", role: "Working Professional", place: "Mohali, Chandigarh", rating: 5, headline: "Helped me become more productive.", text: "I work in customer support and wanted to learn practical AI skills. I now use ChatGPT for drafting replies, summarising conversations, creating FAQs, and improving communication. It has made my daily work much more efficient." },
        { name: "Aman Verma", role: "Freelancer", place: "Noida, Delhi NCR", rating: 5, headline: "I started using AI for my freelance work.", text: "As a freelancer, I wanted to learn more than just ChatGPT basics. The course introduced me to AI tools for content, research, presentations, images, and productivity. I can now deliver work faster and offer more services to clients." },
        { name: "Irfan Mir", role: "Business Owner", place: "Srinagar, Jammu & Kashmir", rating: 4, headline: "Excellent course for business owners.", text: "I joined to understand how AI could help my business. I learned how to use ChatGPT for customer communication, marketing ideas, product descriptions, social media content, and business research. The teaching was simple and practical." },
        { name: "Pooja Rawat", role: "Postgraduate", place: "Dehradun, Uttarakhand", rating: 5, headline: "Online classes were much better than I expected.", text: "I was initially unsure about learning AI tools online. The sessions were interactive, and the practical demonstrations made it easy to follow. Recordings were also useful whenever I wanted to revise a topic." },
        { name: "Karan Sharma", role: "Software Developer", place: "Jaipur, Rajasthan", rating: 4, headline: "Much more than just learning prompts.", text: "I liked that the course covered different AI tools instead of focusing only on ChatGPT. We learned practical ways to use AI for productivity, research, content, presentations, and automation. I especially enjoyed the hands-on exercises." },
        { name: "Ankita Yadav", role: "Fresher", place: "Lucknow, Uttar Pradesh", rating: 5, headline: "Perfect for freshers.", text: "I recently completed my graduation and wanted to develop a practical skill. The course helped me understand how professionals actually use AI at work. I now have several AI-based projects and workflows that I can discuss in interviews." },
        { name: "Gurpreet Gill", role: "12th-Pass Student", place: "Ludhiana, Punjab", rating: 4, headline: "I thought AI would be too difficult for me.", text: "I am a 12th-pass student and had very little technical knowledge. The trainers started from the basics and explained everything step by step. With regular practice, I was able to use ChatGPT and other AI tools confidently." },
        { name: "Vikas Chauhan", role: "Data Analyst", place: "Panchkula, Haryana", rating: 5, headline: "A big time-saver for a data analyst.", text: "I already had some experience with technology, but I wasn't using AI effectively. The course showed me how to use ChatGPT for data-related tasks, documentation, analysis, research, and report writing. It has become part of my daily workflow." },
        { name: "Ritu Bansal", role: "Graduate", place: "Chandigarh", rating: 4, headline: "Clear teaching and lots of practical examples.", text: "I come from a non-technical background, so I appreciated the simple teaching style. We practiced different AI tools instead of just watching demonstrations. The trainers also encouraged us to experiment and ask questions." },
      ],
    },
    faqTitle: "ChatGPT and AI Tools Course: FAQs",
    cta: {
      title: "Start Using ChatGPT and AI Tools Like a Pro,",
      highlight: "From Anywhere in India",
      text: "Learn to write better prompts, finish work faster and build real AI skills for your job, freelancing or business. Join the Techcadd ChatGPT and AI tools course online or at any of our centres, and get a free callback from our counsellor today.",
    },
  },
};
