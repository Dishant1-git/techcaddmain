import type { CoursePage } from "./types";

/* /courses/agentic-ai — long-form landing copy supplied by the client (Google Doc, Stages 1–4, 6 and 7), used as given.
   The older page at /ai-courses/agentic-ai (`aiCourses` in site.ts) now REDIRECTS here — see `movedTo` in
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

const roles = ["AI agent developer", "AI automation engineer", "LLM application developer", "Prompt and workflow engineer", "RAG developer", "AI consultant"];

export const agenticAi: CoursePage = {
  slug: "agentic-ai",
  title: "Agentic AI Course",
  navLabel: "Agentic AI",
  group: "ai-data",
  icon: "Workflow",
  tagline: "Design and deploy AI agents that plan, use tools and complete multi-step tasks on their own.",
  level: "Intermediate",
  duration: "4 Months",
  eligibility: "Open to any stream; no computer science degree needed. Python basics are taught from scratch",
  overview: [
    "The Agentic AI course at techcadd is designed for learners who want to go beyond chatbots and build AI systems that plan, decide and act on their own. Agentic AI refers to autonomous AI agents that break a goal into steps, use tools and APIs, remember context and complete tasks with minimal human supervision.",
    "In this program, you will learn large language model fundamentals, prompt and context engineering, tool calling, retrieval-augmented generation (RAG), multi-agent workflows and agent evaluation. You will work with current frameworks such as LangChain, LangGraph and CrewAI, along with leading model APIs. Python basics are included, so graduates, working professionals, job switchers and freelancers can start without a deep coding background.",
    "Learners across Punjab can join live online classes, and those near our physical centre in Jalandhar can attend offline batches. Every module is project-based, so you finish with working agents, such as a research assistant or a workflow automation bot, that you can show in your portfolio.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Explain how AI agents work and when to use them",
    "Build, test and deploy a working agent with real tool access",
    "Create RAG systems that answer from company documents",
    "Design multi-agent workflows with sensible safeguards",
    "Evaluate agent reliability and control cost",
    "Present a portfolio of projects to employers or clients",
  ],
  syllabus: [
    { title: "Module 1: Foundations of AI, LLMs and Agentic AI", summary: "How large language models work, what tokens and context windows are, and how Agentic AI differs from chatbots and Generative AI. You will learn the agent loop of goal, plan, act, observe and repeat.", topics: [] },
    { title: "Module 2: Python for AI Agents", summary: "Python basics, working with APIs and JSON, handling files and environment setup, and using Git and GitHub. This module is built for beginners and non-programmers.", topics: [] },
    { title: "Module 3: Prompt and Context Engineering", summary: "Writing clear instructions, system prompts, structured outputs, few-shot examples and managing context so the agent stays accurate across long tasks.", topics: [] },
    { title: "Module 4: Tool Calling and Function Execution", summary: "Connecting agents to external tools such as search, databases, spreadsheets, email and business APIs, and understanding the Model Context Protocol (MCP) for standardised tool access.", topics: [] },
    { title: "Module 5: Retrieval-Augmented Generation (RAG) and Memory", summary: "Document loading, chunking, embeddings and vector databases, so agents answer from your own data. Short-term and long-term memory for agents is covered here too.", topics: [] },
    { title: "Module 6: Agent Frameworks and Orchestration", summary: "Building agents with LangChain and LangGraph, plus role-based multi-agent teams with CrewAI. You will compare frameworks and learn when a simple workflow is better than a full agent.", topics: [] },
    { title: "Module 7: Multi-Agent Systems and Workflow Automation", summary: "Designing agents that collaborate, hand over tasks and use human-in-the-loop approval. Low-code automation with n8n is introduced for business use cases.", topics: [] },
    { title: "Module 8: Evaluation, Safety and Deployment", summary: "Testing agent output, tracing and debugging, guardrails, prompt-injection awareness, cost and latency control, and deploying a simple agent app with FastAPI and Streamlit.", topics: [] },
    { title: "Module 9: Capstone Project and Career Preparation", summary: "You build an end-to-end agent, such as a research assistant, a customer-support agent or a sales-reporting automation, and present it. Resume, portfolio and interview preparation are included.", topics: [] },
  ],
  tools: ["Python", "Jupyter", "VS Code", "Git and GitHub", "OpenAI", "Anthropic Claude", "Google Gemini", "LangChain", "LangGraph", "CrewAI", "AutoGen", "LlamaIndex", "Chroma", "FAISS", "Pinecone", "Model Context Protocol (MCP)", "REST APIs", "n8n", "Make", "LangSmith", "basic custom test suites", "FastAPI", "Streamlit"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is the Agentic AI course?", a: "The Agentic AI course teaches you to build AI agents that plan tasks, use tools, remember context and complete multi-step work with little supervision. It covers LLM basics, prompt and context engineering, tool calling, RAG, multi-agent workflows, evaluation and deployment, with hands-on projects in every module." },
    { q: "Who is eligible for the Agentic AI course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners from any stream can join. 12th-pass students with a strong interest in technology can also enrol, but they should be ready for extra practice. No prior AI experience is required." },
    { q: "Is the Agentic AI course suitable for beginners?", a: "Yes, the course starts from the basics and teaches Python from scratch. Beginners should expect to practise regularly, because building agents needs hands-on coding and logical thinking, but you do not need a computer science degree." },
    { q: "Can I learn Agentic AI without coding experience?", a: "Yes, you can start without coding experience, because Python basics are taught in Module 2. Non-programmers usually take a little longer with the coding-heavy modules, and the small batches and trainer support are meant to help with that." },
    { q: "What is the difference between Agentic AI and Generative AI?", a: "Generative AI creates content such as text, images or code when you give it a prompt, while Agentic AI takes a goal, plans the steps, uses tools and acts until the task is done. In simple terms, Generative AI answers, and Agentic AI works. Agentic systems often use Generative AI models as their \"brain.\"" },
    { q: "What is covered in the Agentic AI syllabus?", a: "The syllabus has nine modules: AI and LLM foundations, Python, prompt and context engineering, tool calling and MCP, RAG and memory, agent frameworks, multi-agent workflows, evaluation and deployment, and a capstone project. Tools include LangChain, LangGraph, CrewAI, n8n, vector databases and major model APIs." },
    { q: "Which tools and frameworks will I learn?", a: "You will work with Python, VS Code, Git, LangChain, LangGraph, CrewAI, LlamaIndex, vector databases such as Chroma and FAISS, n8n, FastAPI and Streamlit. You will also use model APIs from providers such as OpenAI, Anthropic and Google." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, learners receive a techcadd course completion certificate. A certificate helps, but employers mainly look at your portfolio and projects." },
    { q: "Can I learn Agentic AI online, or do I have to attend offline?", a: "You can choose either one. Live online classes let you join from any state, and offline batches are available at the Jalandhar centre in Punjab. Both modes follow the same practical, project-based approach." },
    { q: "What are the fees and duration of the Agentic AI course?", a: "The fees and duration depend on the batch and learning mode, so please contact techcadd for current details." },
    { q: "What jobs can I get after an Agentic AI course?", a: "You can aim for roles such as AI agent developer, AI automation engineer, LLM application developer, RAG developer, prompt and workflow engineer or AI consultant. Existing professionals can also use these skills to automate work in their current roles." },
    { q: "What is the salary after learning Agentic AI in India?", a: "Entry-level AI and automation roles in India approximately start between ₹4 and ₹8 LPA, and experienced agent developers can earn much more. Your actual pay depends on your skills, portfolio, company and city, and the course does not guarantee a salary." },
    { q: "Can I do freelancing after this course?", a: "Yes, many learners use these skills to offer services such as customer-reply bots, lead follow-up automation, document question-answering systems and reporting workflows. Freelancing works best when you build a few strong portfolio projects and understand a client's business problem." },
    { q: "Can students from Himachal Pradesh join the Agentic AI course online?", a: "Yes, students from Himachal Pradesh can join live online classes from anywhere in the state. Since opportunities in hospitality, tourism and pharma-linked businesses often involve remote or freelance work, this is a practical way to take an Agentic AI course in Himachal Pradesh without moving to a metro." },
    { q: "What are the Agentic AI job opportunities in Punjab and Haryana?", a: "In Punjab, opportunities are growing in IT and startups, as well as in manufacturing and export businesses that need automation. In Haryana, e-commerce, logistics, automobile and IT services companies are the main employers. Both states also offer remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai." },
    { q: "Is the Agentic AI course useful for students in Jammu & Kashmir and Uttarakhand?", a: "Yes, it is useful for both, and online classes remove the need to travel. In Jammu & Kashmir, sellers and tourism or handicraft businesses can use agents for enquiries and orders, and in Uttarakhand, hospitality, tourism and pharma-linked businesses can automate bookings and documentation. Learners can also pursue remote jobs and freelancing." },
    { q: "Can learners from Delhi, Rajasthan and Uttar Pradesh join the Agentic AI course?", a: "Yes, learners from Delhi NCR, Rajasthan and Uttar Pradesh can attend live online sessions and work on the same projects. Delhi has the largest fresher market for AI roles, Rajasthan's tourism and textile businesses can adopt agents for customer handling, and Uttar Pradesh offers openings in IT, electronics and retail." },
    { q: "Is the Agentic AI course relevant for students in Chandigarh and Tricity?", a: "Yes, an Agentic AI course in Chandigarh is useful for people in IT, BPO, startups and education-related work who want to move into AI automation roles. Because the course is online-friendly, you can learn while continuing your job in the Tricity area." },
  ],
  related: ["generative-ai", "rag", "artificial-intelligence"],
  copy: {
    heading: { title: "Agentic AI Course", highlight: "in India", meta: "Agentic AI Course in India: Build AI Agents That Plan, Use Tools and Act | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Agentic AI Course in India: Program Overview" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "What You Will Learn in the Agentic AI Course", text: "The program is split into modules that build on each other. You start with core concepts and finish by deploying and evaluating your own agents." },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join the Agentic AI Course?",
      intro: "The Agentic AI course at techcadd is built for people who want to use AI to get real work done, not only to understand it.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Graduates and postgraduates from BCA, B.Tech, BBA, B.Com, BA, MBA, MCA or any other stream can use this course to enter AI roles such as AI automation specialist, AI agent developer or prompt and workflow engineer. It helps freshers stand out in a crowded job market." },
        { icon: "Briefcase", title: "Working professionals", text: "Working professionals in IT, marketing, finance, HR, operations or customer support can learn to automate repetitive work with AI agents. This makes you more valuable in your current role and ready for the next one." },
        { icon: "Shuffle", title: "Job switchers", text: "Job switchers moving from non-technical or traditional IT roles into AI will find a structured, project-based path with a portfolio at the end." },
        { icon: "PenTool", title: "Freelancers and agency owners", text: "Freelancers and agency owners can offer AI workflow automation, research agents and lead-handling bots to clients, which is a growing service area." },
        { icon: "Building2", title: "Business owners and startup founders", text: "Business owners and startup founders can learn what agents can and cannot do, so they can automate sales follow-ups, support and reporting without wasting money on the wrong tools." },
        { icon: "BookOpen", title: "12th-pass students", text: "12th-pass students with a strong interest in technology can also join. A coding background helps but is not compulsory, and they should be ready to put in extra practice." },
      ],
      need: "You do not need a computer science degree. If you are curious, logical and ready to practise, you can start. Python basics are taught from scratch.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because classes run live online, you can join from anywhere in North India. Here is how the course fits learners in each region.",
      items: [
        { title: "Punjab", text: "An Agentic AI course in Punjab suits professionals in Mohali's IT companies, Ludhiana's manufacturers and exporters who want to automate quotations and order tracking, and graduates in Amritsar and Patiala looking for AI roles at home." },
        { title: "Haryana", text: "Learners in Gurugram and Faridabad working in e-commerce, logistics or IT services can build agents for support, inventory and reporting, and add an AI skill to their current job. This is what makes an Agentic AI course in Haryana useful for them." },
        { title: "Himachal Pradesh", text: "Remote work and freelancing are the main opportunity. Students in Shimla, Solan and Dharamshala can learn online and take AI automation projects from clients elsewhere, without moving to a metro. Interest in an Agentic AI course in Himachal Pradesh is growing for this reason." },
        { title: "Chandigarh and Tricity", text: "Candidates in Chandigarh, Mohali and Panchkula, especially those in BPO, IT support and startups, can move from routine tasks to AI-driven roles. Many look for an Agentic AI course in Chandigarh for this reason." },
        { title: "Delhi NCR", text: "Delhi, Noida and Ghaziabad have the largest fresher job market in the region. Marketers, analysts and fintech or agency staff can use agent skills to stand out. An Agentic AI course in Delhi supports that need." },
        { title: "Jammu & Kashmir", text: "Tourism operators, e-commerce sellers and handicraft businesses in Jammu and Srinagar can use agents for customer queries and bookings. Students can also build remote careers through an Agentic AI course in Jammu & Kashmir." },
        { title: "Uttarakhand", text: "Hospitality, tourism and pharma-linked businesses in Dehradun and Haridwar can automate enquiries and documentation, which makes an Agentic AI course in Uttarakhand practical for working learners." },
        { title: "Rajasthan", text: "Jaipur's tourism, jewellery and textile businesses can use agents for catalogues, customer replies and order follow-ups, so an Agentic AI course in Rajasthan fits both entrepreneurs and graduates." },
        { title: "Uttar Pradesh", text: "Learners in Noida, Lucknow and Meerut can target IT, electronics and retail roles, or prepare for AI-led digital work in government-linked projects, through an Agentic AI course in Uttar Pradesh." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn Agentic AI Now?",
      intro: "Most people have used a chatbot. Far fewer know how to build an AI system that completes a task from start to finish. That gap is why this Agentic AI course is worth your time.",
      points: [
        { title: "The industry is moving from \"AI that answers\" to \"AI that acts.\"", text: "Generative AI writes a reply when you ask. Agentic AI takes a goal, plans the steps, calls tools, checks its own output and keeps going until the job is done. Companies are already testing agents in customer support, sales operations, research, reporting and IT workflows. Industry analysts such as Gartner have forecast that agentic capabilities will appear in a large share of enterprise software over the next few years." },
        { title: "Employers want people who can build and manage agents, not just use them.", text: "Knowing how to write a good prompt is no longer a differentiator. What stands out is the ability to design a reliable agent, connect it to business tools, control its mistakes and measure its results. This program trains you for exactly that." },
        { title: "You learn by building.", text: "Every module ends with something that works. You will create agents that search and summarise information, answer questions from company documents using RAG, and automate multi-step tasks. You will also learn the less glamorous but essential parts: testing, guardrails, cost control and human approval steps. These are the skills that make the difference between a demo and a real deployment." },
        { title: "It works for technical and non-technical backgrounds.", text: "Python is taught from the basics, and the course focuses on logic, workflow design and problem-solving rather than heavy theory. A marketing professional, a commerce graduate and a software tester can all follow the same path, and each can apply it differently." },
        { title: "It opens several career routes.", text: "Depending on your background, you can aim for roles such as AI agent developer, AI automation engineer, LLM application developer, prompt and workflow engineer, or AI consultant. You can also freelance by building automations for small businesses and agencies. Many of these roles are available remotely or in hybrid form with companies in Bengaluru, Hyderabad, Pune and Mumbai, so you do not have to relocate to benefit." },
        { title: "The pay potential is strong, though it varies.", text: "As an approximate guide, entry-level AI and automation roles in India often start in the range of ₹4-8 LPA, while experienced agent developers can earn considerably more. Actual salary depends on your skills, portfolio, company and city, so treat these as indicative figures and not promises." },
        { title: "Early learners have an advantage.", text: "Agentic AI is still a young field. Those who build a solid foundation now will be ahead of the crowd that waits until every employer demands it." },
      ],
      outro: "What you leave with: a working understanding of how AI agents are designed, a portfolio of practical projects, and the confidence to explain and demonstrate your skills in interviews or to clients.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your Agentic AI Course?",
      intro: "Choosing where to learn Agentic AI matters, because the field changes fast and many courses stop at theory. Here is what techcadd offers learners who want practical, job-relevant skills.",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For an Agentic AI learner, this means you study in an environment where AI and robotics are part of everyday learning, not a side topic. Agentic AI is closely related to robotics, because both are about systems that sense, decide and act. Exposure to both helps you understand how an AI agent moves from a software task to real-world automation. In practice, learners get hands-on AI exposure, practical projects and a modern technology environment that keeps pace with the industry. This benefits learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh equally, since live online classes bring the same practical approach to your screen wherever you are." },
        { title: "Practical, project-based training", text: "You learn by building. Each module produces a working output, such as a research agent, a document question-answering assistant or a multi-step workflow automation. By the end, you have a portfolio you can show to employers or clients." },
        { title: "Industry-relevant curriculum", text: "The curriculum focuses on skills companies are asking for now: LLM fundamentals, tool calling, RAG, multi-agent workflows, evaluation and safe deployment. Content is reviewed as tools and frameworks evolve, so you are not learning outdated material." },
        { title: "Experienced trainers", text: "Trainers guide you through real implementation problems, such as debugging an agent that loops or gives unreliable answers, and not only through slides. Learners get feedback on their code, prompts and workflow design." },
        { title: "Small batches", text: "Smaller batches mean more attention and more chances to ask questions. This helps non-technical learners and working professionals who need extra support with Python or logic." },
        { title: "Certificate on completion", text: "Learners receive a techcadd course completion certificate." },
        { title: "Career and placement support", text: "techcadd can help with resume building, portfolio review and interview preparation." },
        { title: "Flexible online and offline learning", text: "Choose live online classes or offline batches. Online learners get recorded or revision support where available. This lets working professionals and freelancers learn around their schedule." },
        { title: "Support for students from other states", text: "Learners from outside Punjab are not treated as an afterthought. Students from Himachal Pradesh, J&K, Uttarakhand, Rajasthan and other states join the same live sessions, get doubt support and can work on projects relevant to their local industries, from tourism and handicrafts to pharma and retail." },
      ],
    },
    tools: {
      title: "Tools and software covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "Language and environment", tools: "Python, Jupyter, VS Code, Git and GitHub" },
        { area: "Model APIs", tools: "OpenAI, Anthropic Claude, Google Gemini" },
        { area: "Agent frameworks", tools: "LangChain, LangGraph, CrewAI, AutoGen, LlamaIndex" },
        { area: "Vector databases", tools: "Chroma, FAISS, Pinecone" },
        { area: "Tool integration", tools: "Model Context Protocol (MCP), REST APIs" },
        { area: "Automation", tools: "n8n, Make" },
        { area: "Evaluation and tracing", tools: "LangSmith, basic custom test suites" },
        { area: "App building", tools: "FastAPI, Streamlit" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope After the Course",
      intro: "Agentic AI skills apply across industries. Common roles include AI agent developer, AI automation engineer, LLM application developer, prompt and workflow engineer, RAG developer and AI consultant. Freelancers can offer automation services to agencies and small businesses. Entry-level salaries in India are approximately ₹4-8 LPA, and they rise with experience and a strong portfolio.",
      roles,
      jobsTitle: "Job opportunities across North India",
      jobs: [
        { title: "Punjab", text: "Agentic AI jobs in Punjab are growing around Mohali's IT and startup cluster, while manufacturers and exporters in the Ludhiana and Jalandhar belt need automation for quotations, order tracking and export documentation." },
        { title: "Haryana", text: "Agentic AI jobs in Haryana are concentrated in the Gurugram corridor, where MNCs, e-commerce and logistics firms look for people who can build support, inventory and reporting agents. Karnal and Ambala offer openings in agri-processing and auto-linked units." },
        { title: "Himachal Pradesh", text: "Agentic AI jobs in Himachal Pradesh are mostly remote or freelance. Learners can serve clients elsewhere, and pharma units in Baddi or hotels and travel businesses in the hills can use agents for documentation and guest queries." },
        { title: "Delhi NCR", text: "Agentic AI jobs in Delhi NCR are the most plentiful for freshers, especially in digital agencies, fintech, media and e-commerce, where AI content and customer workflow automation are in demand." },
        { title: "Rajasthan", text: "Agentic AI jobs in Rajasthan are linked to tourism, handicrafts, jewellery and textile businesses. Entrepreneurs and graduates can build catalogue, enquiry and order-follow-up agents, including in smaller markets like Sri Ganganagar." },
        { title: "Uttar Pradesh", text: "Agentic AI jobs in Uttar Pradesh span Noida's IT and electronics sector, retail chains and government-linked digital projects, with openings for both developers and automation specialists." },
      ],
      outro: "Remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai are also open to learners from any state.",
    },
    faqTitle: "Agentic AI Course: FAQs",
    cta: { title: "Ready to Build AI That Works for You?", highlight: "Start Your Agentic AI Journey with techcadd", text: "Stop just using AI and start building it. Join the Agentic AI course at techcadd and learn to create AI agents that plan, use tools and complete real tasks. Learn through live projects, small batches and trainer support, whether you are a graduate, working professional, job switcher or freelancer." },
  },
};
