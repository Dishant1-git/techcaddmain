import type { CoursePage } from "./types";

/* /courses/generative-ai — NEW page with the client's long-form landing copy (used as given, section by section).
   The older Generative AI page at /ai-courses/generative-ai (AI dropdown, `aiCourses` in site.ts) now REDIRECTS here — see
   `movedTo` in src/app/ai-courses/[slug]/page.tsx — so there is a single Generative AI page. The AI dropdown link and the
   new Courses ▾ AI & Data link both point here.
   - Bracketed editor notes in FAQs 4 and 5 ("[Confirm the final module list…]", "[Remove any tool you do not actually
     teach.]") are left out — CONFIRM the module and tool lists with the client.
   - The supplied FAQ numbering skips 7 and 9 (duration, fee…). `duration` is the value from the old AI page — confirm.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim — keep only if it can be supported.
   - Reviews are the client's supplied text — confirm they are from real students before launch. */

const roles = ["Prompt engineer", "AI content specialist", "AI automation executive", "Chatbot developer", "AI-assisted analyst", "AI consultant or freelancer"];

export const generativeAi: CoursePage = {
  slug: "generative-ai",
  title: "Generative AI Course",
  navLabel: "Generative AI",
  group: "ai-data",
  icon: "Sparkles",
  tagline:
    "Learn to build with, and work alongside, AI tools that create text, images, code, audio and video: large language models, prompt engineering, RAG, AI agents and responsible AI use.",
  level: "All Levels",
  duration: "6 Months",
  eligibility: "A laptop with stable internet and basic English reading skills; prior coding is helpful but not mandatory",
  overview: [
    "The generative AI course at techcadd is a practical, career-focused program that teaches you how to build with, and work alongside, AI tools that create text, images, code, audio and video. Designed for graduates, working professionals, job switchers, freelancers and business owners across India, it starts with AI and machine learning fundamentals. It then moves into large language models, prompt engineering, retrieval-augmented generation (RAG), AI agents and responsible AI use.",
    "Learners work on hands-on projects such as building a chatbot, automating content workflows and creating an AI-assisted business solution. The tools used include ChatGPT, Claude, Gemini, Python and LangChain. No advanced coding background is needed to begin, and the pace is set so beginners can grow into confident practitioners.",
    "Students in Punjab can attend classes at the techcadd centre in Jalandhar, while learners from other states can join live online sessions from home. Whether you want to upskill in your current job, start freelancing or move into an AI-related role, this program helps you turn fast-moving technology into skills you can use.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Explain generative AI clearly and choose the right type of tool for a task",
    "Judge which model suits a task based on quality, cost, speed and privacy",
    "Build reusable prompt templates for marketing, HR, analytics, support and documentation work",
    "Call an AI model through code and automate small repetitive tasks",
    "Build a chatbot that answers from your own data instead of guessing",
    "Automate a complete workflow, such as lead qualification or report drafting",
    "Produce campaign-ready assets faster while understanding usage limits",
    "Finish with a deployable project and a clear way to explain your work",
  ],
  syllabus: [
    {
      title: "Module 1: AI, Machine Learning and Generative AI Foundations",
      summary: "How AI, machine learning, deep learning and generative AI differ, how models learn from data and where generative AI is used across industries.",
      topics: ["How AI, machine learning, deep learning and generative AI differ", "How models learn from data", "Where generative AI is used across industries"],
      outcome: "You can explain generative AI clearly to a colleague or client and choose the right type of tool for a task.",
    },
    {
      title: "Module 2: Large Language Models (LLMs)",
      summary: "How LLMs work (tokens, context windows, training and fine-tuning at a conceptual level), and how to compare models such as GPT, Claude, Gemini and open-source options like Llama.",
      topics: ["Tokens and context windows", "Training and fine-tuning at a conceptual level", "Comparing GPT, Claude, Gemini and open-source options like Llama"],
      outcome: "You can judge which model suits a task based on quality, cost, speed and privacy.",
    },
    {
      title: "Module 3: Prompt Engineering",
      summary: "Writing clear prompts, role and context setting, few-shot examples, structured outputs, and testing and improving prompts.",
      topics: ["Writing clear prompts", "Role and context setting", "Few-shot examples and structured outputs", "Testing and improving prompts"],
      outcome: "You can build reusable prompt templates for marketing, HR, analytics, support and documentation work.",
    },
    {
      title: "Module 4: Python Basics for AI",
      summary: "Python fundamentals, working with APIs, JSON and simple scripts in Google Colab or Jupyter.",
      topics: ["Python fundamentals", "Working with APIs and JSON", "Simple scripts in Google Colab or Jupyter"],
      outcome: "You can call an AI model through code and automate small repetitive tasks.",
    },
    {
      title: "Module 5: RAG (Retrieval-Augmented Generation)",
      summary: "Embeddings, vector databases and chunking, and connecting an AI model to your own PDFs, FAQs or company documents.",
      topics: ["Embeddings", "Vector databases and chunking", "Connecting an AI model to your own PDFs, FAQs or company documents"],
      outcome: "You can build a chatbot that answers from your own data instead of guessing.",
    },
    {
      title: "Module 6: AI Agents and Workflow Automation",
      summary: "Tool-calling, multi-step agents, and no-code or low-code automation that links AI with email, spreadsheets and forms.",
      topics: ["Tool-calling", "Multi-step agents", "No-code or low-code automation linking AI with email, spreadsheets and forms"],
      outcome: "You can automate a complete workflow, such as lead qualification or report drafting.",
    },
    {
      title: "Module 7: Image, Audio and Video Generation",
      summary: "Text-to-image, voice and short-video tools for marketing creatives, product visuals and social content, with attention to copyright and brand safety.",
      topics: ["Text-to-image tools", "Voice and short-video tools", "Marketing creatives, product visuals and social content", "Copyright and brand safety"],
      outcome: "You can produce campaign-ready assets faster while understanding usage limits.",
    },
    {
      title: "Module 8: Responsible AI, Capstone Project and Portfolio",
      summary: "Hallucinations, bias, data privacy and human review, followed by a capstone project and portfolio presentation.",
      topics: ["Hallucinations and bias", "Data privacy and human review", "Capstone project", "Portfolio presentation"],
      outcome: "You finish with a deployable project and a clear way to explain your work to employers or clients.",
    },
  ],
  tools: [
    "ChatGPT", "Claude", "Gemini", "Microsoft Copilot", "Hugging Face", "Python", "Google Colab", "Jupyter", "Streamlit", "LangChain", "LlamaIndex",
    "Chroma", "FAISS", "n8n", "Zapier", "Make", "Midjourney", "Stable Diffusion", "Canva AI", "ElevenLabs", "Runway", "NotebookLM", "Perplexity",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who is eligible for the generative AI course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners from any stream can join. Motivated 12th-pass students are also welcome, though batches are designed mainly for adult learners. You need a laptop, a stable internet connection and a willingness to practise." },
    { q: "Can beginners and non-IT students learn generative AI?", a: "Yes, the course starts from the basics, so beginners and non-IT learners can follow it. The early modules explain AI concepts in simple language, and Python is introduced step by step. Learners from commerce, arts, management and other non-technical backgrounds regularly use these skills in their own work." },
    { q: "Do I need coding knowledge to join?", a: "No, prior coding is not required. Prompt engineering, AI assistants and no-code automation need no programming, and the Python basics module covers what you need for API-based projects. Coding experience helps you go deeper, but it is not a condition for joining." },
    { q: "What is covered in the generative AI course syllabus?", a: "The syllabus covers AI and machine learning foundations, large language models, prompt engineering, Python basics, RAG, AI agents and workflow automation, image, audio and video generation, and responsible AI with a capstone project. Each module ends with a practical task." },
    { q: "Which tools will I learn in this course?", a: "You will work with tools such as ChatGPT, Claude, Gemini, Python, Google Colab, LangChain, vector databases like Chroma or FAISS, and automation platforms like n8n, Zapier or Make. You also learn how to evaluate new tools, because this field changes quickly." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, learners who complete the program receive a techcadd course completion certificate. Employers mainly look at your projects and practical ability, so the certificate works best alongside your portfolio." },
    { q: "Can I learn generative AI online, or do I need to attend offline?", a: "You can learn fully online through live, interactive classes, so no relocation is needed. Learners who prefer face-to-face guidance can also attend offline sessions at our Punjab centre. Both options follow the same curriculum." },
    { q: "What jobs can I get after a generative AI course?", a: "Common roles include prompt engineer, AI content specialist, AI automation executive, chatbot developer and AI-assisted analyst. Many learners also use these skills to get more done in their current job, and no specific job outcome is guaranteed. Your portfolio and practical skills usually matter more than the certificate alone." },
    { q: "What is the salary after a generative AI course in India?", a: "Entry-level AI-related roles in India are generally reported at roughly ₹3 to ₹8 LPA, though this is only an approximate range. Actual pay depends on your city, employer, prior experience, coding ability and project portfolio. Candidates with domain experience in marketing, finance or operations often negotiate better." },
    { q: "Can I do freelancing after learning generative AI?", a: "Yes, freelancing is a common path after this course. You can offer AI-assisted content writing, chatbot setup, workflow automation, product descriptions, social media creatives and AI training for small businesses. Build two or three sample projects first, because clients want to see proof of work." },
    { q: "Can students from Himachal Pradesh join the generative AI course online?", a: "Yes, students from Himachal Pradesh can join live online classes from Shimla, Dharamshala, Solan or any other town. Recordings help if your internet drops. A generative AI course in Himachal Pradesh also suits freelancers, remote workers and tourism or hotel businesses that want AI-supported marketing and guest communication." },
    { q: "What are the generative AI job opportunities in Punjab and Haryana?", a: "In Punjab, startups and IT companies around Mohali and export-oriented businesses in Ludhiana need chatbot, automation and AI content skills. In Haryana, Gurugram's MNCs, e-commerce and logistics companies hire for AI-assisted support, reporting and operations roles. Remote roles with companies in Bengaluru, Hyderabad, Pune or Mumbai are also open to learners from both states." },
    { q: "Is the generative AI course useful for students in Jammu and Kashmir and Uttarakhand?", a: "Yes, the online format lets learners in Srinagar, Jammu, Dehradun and Haridwar join the same live batches. In Jammu and Kashmir, handicraft sellers and online entrepreneurs can use AI for catalogues and buyer communication. In Uttarakhand, tourism, education and hospitality professionals can use it for documentation, training content and customer replies." },
    { q: "Can learners from Delhi, Rajasthan and Uttar Pradesh take this course online?", a: "Yes, learners from Delhi NCR, Rajasthan and Uttar Pradesh can attend the same live sessions and receive the same project feedback. Professionals in Noida can aim for agency and fintech roles, sellers in Jaipur can create AI-generated product content, and graduates in Lucknow or Meerut can target IT, retail and education roles." },
  ],
  related: ["artificial-intelligence", "machine-learning", "deep-learning"],
  copy: {
    heading: { title: "Generative AI Course", highlight: "in India", meta: "Generative AI Course: Build with AI, Not Just Read About It | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Generative AI Course: Program Overview" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "What You Will Learn in the Generative AI Course",
      text: "The curriculum moves from fundamentals to deployment in eight modules. Each module ends with a practical task.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Generative AI Course?",
      intro: "Generative AI is not limited to software engineers. If you are curious, comfortable with a computer and willing to practise, this program is built for you. Here is who benefits most.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates (any stream)", text: "Whether you studied commerce, arts, science, engineering or management, this program helps you add an in-demand skill to your resume. You do not need a computer science degree to begin." },
        { icon: "Briefcase", title: "Working professionals", text: "Marketers, HR executives, accountants, teachers, designers, analysts and managers can use generative AI to cut repetitive work, draft faster and make better decisions. If you want to stay relevant in your current role, this is a practical upskilling path." },
        { icon: "Shuffle", title: "Job switchers", text: "If you are moving from a traditional role into AI-enabled work such as AI content operations, automation, prompt engineering or AI-assisted analytics, the structured curriculum and project work give you something concrete to show employers." },
        { icon: "PenTool", title: "Freelancers and creators", text: "Writers, video editors, designers and consultants can use AI tools to deliver more work in less time and offer new services to clients." },
        { icon: "Building2", title: "Business owners and startup founders", text: "Learn how to use AI for customer support, marketing, product descriptions, internal workflows and decision support, without depending entirely on outside agencies." },
        { icon: "BookOpen", title: "12th-pass students", text: "Motivated students who have finished 12th and want an early start in AI can join too, provided they are willing to learn step by step. This is a smaller part of our batches, so the pace is set mainly for graduates and working professionals." },
      ],
      need: "A laptop or desktop with a stable internet connection, basic English reading skills and a willingness to experiment. Prior coding experience is helpful but not mandatory, since Python basics are covered in the program.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because classes run live online, learners across North India can join the same batches without relocating. Here is how the program fits different regions.",
      items: [
        { title: "Punjab", text: "Anyone searching for a generative AI course in Punjab will find it useful for manufacturing and export businesses in Ludhiana, startup teams around Mohali and overseas-study aspirants who want AI skills to strengthen their profile." },
        { title: "Haryana", text: "A generative AI course in Haryana suits professionals in Gurugram's MNCs, e-commerce and logistics firms who want to automate reporting, customer support and content tasks." },
        { title: "Himachal Pradesh", text: "A generative AI course in Himachal Pradesh is a strong fit for remote workers and freelancers, as well as tourism and hotel businesses in Shimla that want AI-driven marketing and guest communication." },
        { title: "Chandigarh", text: "For a generative AI course in Chandigarh, the program works well for IT and BPO professionals, government-sector staff and startup teams exploring AI-based workflows." },
        { title: "Delhi NCR", text: "A generative AI course in Delhi helps agency professionals, fintech employees and freshers in Noida compete in the country's largest entry-level job market." },
        { title: "Jammu and Kashmir", text: "A generative AI course in Jammu and Kashmir allows handicraft sellers, e-commerce entrepreneurs and graduates in Srinagar to build digital skills without leaving home." },
        { title: "Uttarakhand", text: "Learners seeking a generative AI course in Uttarakhand, from hospitality professionals in Dehradun to educators and pharma-sector staff in Haridwar, can use AI for communication, documentation and operations." },
        { title: "Rajasthan", text: "A generative AI course in Rajasthan appeals to tourism operators, jewellery and textile sellers in Jaipur who want AI-generated product content and marketing creatives." },
        { title: "Uttar Pradesh", text: "For a generative AI course in Uttar Pradesh, graduates in Lucknow and working professionals in Meerut can build AI skills for retail, IT and government-linked roles." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Generative AI Course?",
      intro: "Generative AI has moved from experiment to everyday workplace tool. Companies across industries now expect employees to use AI responsibly, and many roles are being redefined around it. This program is built to help you keep pace without feeling lost in the jargon.",
      points: [
        { title: "Built around real skills, not just theory.", text: "You will learn how large language models work, how to write effective prompts, how to connect AI to your own documents using RAG, and how to build simple AI agents. Every concept is followed by a practical task, so you finish with work you can show." },
        { title: "Useful whether or not you come from a tech background.", text: "The curriculum starts from the basics and builds up. Marketers, teachers, accountants and entrepreneurs can apply the same tools in their own fields, while those with coding skills can go deeper into Python and LangChain." },
        { title: "Focused on current tools.", text: "You work with widely used platforms such as ChatGPT, Claude, Gemini, Python and LangChain, along with image and content generation tools. The AI landscape changes quickly, so the focus is on understanding how to evaluate and adopt new tools rather than memorising one interface." },
        { title: "Responsible AI is part of the training.", text: "You will learn about hallucinations, data privacy, bias, copyright concerns and when human review is essential. Employers value people who can use AI safely, not only quickly." },
        { title: "Multiple career and income paths.", text: "After the program, learners can explore roles such as AI content specialist, prompt engineer, AI automation executive, AI-assisted analyst or chatbot developer. Others use the skills to freelance, take on consulting projects or improve efficiency in their own business. Salary ranges vary widely by city, experience and employer, so treat any figure you see online as approximate and focus on building a strong portfolio." },
        { title: "Flexible learning for working people.", text: "Live online classes let you learn from anywhere in India, whether you are in a metro or a smaller town. Learners near Jalandhar who prefer in-person guidance can also choose offline sessions." },
        { title: "A structured path from beginner to practitioner.", text: "Instead of jumping between random videos, you follow a planned sequence: fundamentals, prompting, tools, projects and deployment basics. This reduces confusion and helps you build confidence at each step." },
        { title: "Skills that compound over time.", text: "Generative AI knowledge supports related paths such as data analytics, automation, digital marketing and software development. Once you understand how these systems behave, you can adapt as new models and tools appear." },
      ],
      outro: "If you are deciding whether a generative AI course is worth your time and money, ask a simple question: will this help me do my current work better or open a new opportunity? For most graduates, professionals and business owners today, the answer is yes, provided the training is practical and you commit to practising regularly.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your Generative AI Course?",
      intro: "Choosing where to learn AI matters as much as choosing what to learn. Here is what learners can expect from techcadd.",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre.", text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For a generative AI learner, this means studying in an environment where AI is part of everyday learning, not a single chapter in a syllabus. You get hands-on exposure to how AI connects with real systems, such as automation workflows and intelligent applications, and you see how software-side AI relates to robotics and smart devices. Practical projects, a modern technology environment and trainers who work with emerging tech help you move from \"I have heard of AI\" to \"I have built something with AI.\" For learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu and Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh, this exposure is available through live online sessions, so you do not need to relocate to a metro to learn in a technology-focused setting." },
        { title: "Practical, project-based training.", text: "Each topic ends with a task. You will build prompts, chatbots, content workflows and small AI-assisted solutions, so you finish with a portfolio rather than only notes." },
        { title: "Industry-relevant curriculum.", text: "The syllabus covers large language models, prompt engineering, RAG, AI agents and responsible AI use, and is reviewed as tools and practices change. The aim is to keep you employable as the field moves." },
        { title: "Experienced trainers.", text: "Trainers guide you through real use cases, explain why a tool behaves the way it does and help you debug your own projects. You learn from practice, not only slides." },
        { title: "Small batches.", text: "Limited batch sizes mean you can ask questions, get feedback on your work and avoid being lost in a crowd. This matters especially for non-technical learners who need extra support in the early weeks." },
        { title: "Certificate on completion.", text: "Learners receive a techcadd course completion certificate that can be added to a resume or LinkedIn profile, alongside the projects that prove what you can actually do." },
        { title: "Career and placement support.", text: "Guidance on resume building, portfolio presentation and interview preparation helps you position your new skills for AI-related roles, freelancing or promotion in your current job." },
        { title: "Flexible online and offline learning.", text: "Choose live online classes from anywhere, or attend offline sessions at the centre if you prefer face-to-face learning. Working professionals can pick a schedule that fits their routine." },
        { title: "Support for students from other states.", text: "Learners outside Punjab get the same curriculum, live interaction and mentor access. A professional in Gurugram, a freelancer in Dharamshala, a graduate in Jaipur and a business owner in Lucknow can sit in the same session, ask questions in real time and receive the same project feedback. We do not claim physical centres outside Punjab, and our online format is designed to make that gap irrelevant." },
      ],
      outro: "If you want a generative AI course that combines current tools, guided projects and a technology-first learning environment, techcadd offers a structured path with real support at each stage.",
    },
    tools: {
      title: "Tools Covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "AI assistants and LLMs", tools: "ChatGPT, Claude, Gemini, Microsoft Copilot, open-source models via Hugging Face" },
        { area: "Development", tools: "Python, Google Colab, Jupyter, Streamlit" },
        { area: "Frameworks", tools: "LangChain, LlamaIndex" },
        { area: "Vector databases", tools: "Chroma, FAISS" },
        { area: "Automation", tools: "n8n, Zapier or Make" },
        { area: "Creative generation", tools: "Midjourney, Stable Diffusion, Canva AI, ElevenLabs, Runway" },
        { area: "Research and knowledge", tools: "NotebookLM, Perplexity" },
      ],
      note: "Tools in this field change quickly, so you also learn how to evaluate and adopt new ones instead of depending on one interface.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Generative AI skills apply across marketing, IT, operations, education, finance and entrepreneurship. Common career paths include prompt engineer, AI content specialist, AI automation executive, chatbot developer, AI-assisted analyst and AI consultant or freelancer. Entry-level AI-related roles in India are generally reported in the range of roughly ₹3 to ₹8 LPA, with higher figures for those with strong coding, project experience or domain expertise. Treat these numbers as approximate, since they vary by city, employer and experience.",
      roles,
      jobsTitle: "Generative AI jobs in North India, state by state",
      jobs: [
        { title: "Haryana", text: "Gurugram's MNCs, e-commerce and logistics companies hire for AI-assisted customer support, reporting automation and operations roles." },
        { title: "Delhi NCR", text: "Agencies, fintech firms and media houses in Delhi and Noida look for AI content, marketing automation and analytics skills, and the region has the largest fresher job market in the north." },
        { title: "Punjab", text: "Mohali's IT companies and startups offer chatbot and automation work, while manufacturing and export businesses in Ludhiana and Jalandhar increasingly use AI for catalogues, quotations and buyer communication." },
        { title: "Himachal Pradesh", text: "Remote work and freelancing suit learners in the hills, and tourism and hospitality businesses in Shimla and Dharamshala need AI-supported marketing and guest communication." },
        { title: "Uttarakhand", text: "Dehradun's education and hospitality sectors and Haridwar's pharma and industrial units use AI for documentation, training content and customer communication." },
        { title: "Rajasthan", text: "Jaipur's handicraft, jewellery and tourism sellers can use AI for product descriptions, creatives and multilingual customer replies." },
      ],
      outro: "Beyond these, many learners find remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai, since AI work can often be done from anywhere.",
    },
    reviews: {
      title: "What Our Learners Say About the Generative AI Course",
      items: [
        { name: "Simran K.", role: "Graduate", place: "Ludhiana, Punjab", rating: 5, headline: "Non-IT background, but I could follow everything.", text: "I am a B.Com graduate and was nervous about the Python part. The trainer started from scratch and the practice tasks made it easy. My capstone was a chatbot that answers questions from a PDF price list, and I now use a similar one in my family business." },
        { name: "Rohit M.", role: "Working professional", place: "Gurugram, Haryana", rating: 5, headline: "Helped me automate my daily reporting.", text: "I work in operations at a logistics company, and weekly reports used to eat up half a day. After the automation and AI agents modules, I built a workflow that drafts the first version for me. Live classes in the evening suited my shift." },
        { name: "Anjali T.", role: "Freelancer", place: "Dharamshala, Himachal Pradesh", rating: 4, headline: "Good for freelancers working from the hills.", text: "I do freelance content writing from Himachal, and clients were asking for AI-assisted work. The prompt engineering module was the most useful part. Internet drops sometimes affected me, but recordings helped me catch up." },
        { name: "Harpreet S.", role: "Job switcher", place: "Mohali, Punjab", rating: 5, headline: "Small batch, so doubts actually get answered.", text: "I was a bank clerk preparing to move into a tech-related role. In a small batch, I could ask basic questions without hesitation. The RAG project gave me something real to discuss in interviews." },
        { name: "Neha G.", role: "Postgraduate", place: "Chandigarh", rating: 5, headline: "Practical, not just slides.", text: "I did my MBA in marketing and wanted to understand how AI really works, beyond using ChatGPT. The modules on LLMs and responsible AI cleared many of my wrong ideas. I now create campaign drafts and creatives much faster." },
        { name: "Vikas D.", role: "Working professional", place: "Noida, Delhi NCR", rating: 4, headline: "Learned a lot, wish there were more weekend slots.", text: "I work at a fintech firm in Noida and attended the weekday evening batch. Content was current and the trainers were supportive. I would like more weekend revision sessions, but overall it was worth the time." },
        { name: "Aamir R.", role: "Business owner", place: "Srinagar, Jammu and Kashmir", rating: 5, headline: "Online classes made it possible from Srinagar.", text: "I sell handicrafts online and used to pay others for product descriptions and posters. Now I generate catalogue text and images myself and reply to buyers in multiple languages. The trainers explained everything patiently." },
        { name: "Pooja N.", role: "Job switcher", place: "Dehradun, Uttarakhand", rating: 5, headline: "Clear roadmap from beginner to project.", text: "I managed a hotel front desk and wanted a skill that could grow my career. The course gave me a step-by-step path, and I built an AI assistant for guest queries as my final project. Certificate plus portfolio gave me confidence." },
        { name: "Kunal J.", role: "12th-pass student", place: "Jaipur, Rajasthan", rating: 4, headline: "Joined after 12th, and it was challenging but doable.", text: "I am in my first year of college and joined to start early. Some topics like APIs were difficult at first, but the trainer repeated them with simple examples. I now build small tools with Python and AI." },
        { name: "Dr. Meenakshi V.", role: "Postgraduate / educator", place: "Lucknow, Uttar Pradesh", rating: 5, headline: "Useful for my teaching and my own side projects.", text: "I teach commerce at a college and now use AI to prepare quizzes, notes and sample question papers. The responsible AI module made me careful about checking outputs. I also built a study assistant for my students." },
        { name: "Ankush B.", role: "Graduate", place: "Meerut, Uttar Pradesh", rating: 5, headline: "Good guidance for a fresher.", text: "After my BCA, I was applying for jobs without a clear skill edge. The portfolio work and interview preparation helped me explain my projects clearly. I would suggest practising daily, because the course rewards effort." },
        { name: "Jasleen K.", role: "12th-pass student", place: "Amritsar, Punjab", rating: 5, headline: "Class 12 pass, and it still made sense.", text: "I had basic computer knowledge only, and the first two modules built my confidence. I am still learning, but I can now use AI tools for studies and small freelance tasks." },
      ],
    },
    faqTitle: "Generative AI Course: FAQs",
    cta: {
      title: "Ready to Build with AI,",
      highlight: "Not Just Read About It?",
      text: "Start Your Generative AI Career with techcadd. Book a free demo class and learn how the generative AI course can fit your career, business or freelancing goals. Whether you are a graduate looking for a skill edge, a working professional who wants to automate daily tasks, or a business owner ready to use AI in marketing and support, our counsellors can help you pick the right batch. Join live online from anywhere in India, or attend offline at any of our centres.",
    },
  },
};
