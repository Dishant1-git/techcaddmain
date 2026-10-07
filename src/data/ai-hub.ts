/* Long-form copy for the AI courses hub (/ai-courses), supplied by the client ("All AI Courses in Jalandhar" in the Google Doc,
   Stages 1–4, 6 and 7), used as given. Rendered by src/components/course/AiHubSections.tsx.
   Left out on purpose: Stage 5 sample reviews (the doc's Stage 8 says to replace them with real, consented ones), Stage 8 and
   the keyword plan (planning notes), bracketed editor notes, the CTA form fields, and FAQ 9 ("government-recognised?") whose
   answer is only an editor's note pending proof.
   CHECK WITH THE CLIENT: the copy speaks of FOUR connected AI courses while the hub lists every entry in `aiCourses`; the
   certificate / placement-support lines; and the "North India's first AI-powered and Robotics learning centre" claim. */

type TitledText = { title: string; text: string };

export const aiHub = {
  overview: {
    title: "AI Courses in Jalandhar: Program Overview",
    text: [
      "Looking for AI courses in Jalandhar that go beyond theory? techcadd offers a connected set of AI programs for graduates, working professionals, job switchers, freelancers and business owners, so you can pick the path that matches your career goal.",
      "The AI Course covers Python, machine learning, generative AI and prompt engineering. The Agentic AI course teaches you to build AI agents that plan tasks and use tools. The RAG course shows how to make AI answer accurately from your own documents. The AI-Powered Marketing course applies AI to content, SEO, ads and analytics. Every program is project-based, so you finish with work you can show in your portfolio.",
      "Learners in Jalandhar and nearby Punjab cities can attend offline batches at our Jalandhar centre, while learners from other parts of Punjab and North India can join live online classes. Not sure where to start? Begin with the AI Course for the foundations, then specialise in agents, RAG or marketing.",
    ],
  },
  audience: {
    title: "Who Can Join AI Courses in Jalandhar?",
    intro: "The AI courses at techcadd are built for people who want to use AI in real work, not only read about it.",
    need: "You do not need a computer science degree, and Python and the core concepts are taught from scratch. If you are curious, logical and ready to practise, you can start.",
    items: [
      { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Graduates and postgraduates from BCA, B.Tech, B.Sc, BBA, B.Com, MBA, MCA or any other stream can use these courses to move toward roles such as AI associate, data analyst, LLM application developer or AI marketing executive. Working projects give freshers something concrete to show in interviews." },
      { icon: "Briefcase", title: "Working professionals", text: "Working professionals in IT, finance, HR, sales, operations or teaching can learn to automate routine work, analyse data and build AI tools for their teams. This makes you more valuable in your current role and ready for the next one." },
      { icon: "Shuffle", title: "Job switchers", text: "Job switchers moving from software testing, support, banking or non-IT fields will find a structured, project-based path with a portfolio at the end." },
      { icon: "PenTool", title: "Freelancers and agency owners", text: "Freelancers and agency owners can add services such as AI-assisted content, chatbots over client documents and workflow automation." },
      { icon: "Building2", title: "Business owners and startup founders", text: "Business owners and startup founders can learn what AI can and cannot do, so they can choose the right tools and avoid wasting money on the wrong ones." },
      { icon: "BookOpen", title: "12th-pass students", text: "12th-pass students with a strong interest in technology can also join. Regular practice matters more than prior knowledge, and extra effort on Python will help." },
    ] as (TitledText & { icon: string })[],
  },
  picker: {
    title: "Which course suits you?",
    columns: ["If you are...", "Start with"],
    rows: [
      { who: "A complete beginner wanting the foundations", course: "AI Course", href: "/courses/artificial-intelligence" },
      { who: "A developer or tester wanting to build autonomous AI systems", course: "Agentic AI course", href: "/courses/agentic-ai" },
      { who: "Someone who wants AI to answer accurately from company documents", course: "RAG course", href: "/courses/rag" },
      { who: "A marketer, freelancer or business owner promoting a brand", course: "AI-Powered Marketing course", href: "/courses/ai-powered-marketing" },
    ],
  },
  regions: {
    title: "Learners from Across States",
    intro: "Our Jalandhar centre serves learners in the city and nearby areas. Learners from other states join the same programs through live online classes. Here is how the courses fit each region.",
    items: [
      { title: "Punjab", text: "AI courses in Punjab suit Mohali's IT and startup teams, Ludhiana's manufacturers and exporters who want to use data and automation, and graduates in Amritsar and Patiala who prefer to build an AI career close to home." },
      { title: "Haryana", text: "Online AI courses for Haryana students fit engineers and analysts in Gurugram and Faridabad working in IT services, e-commerce, logistics or automobile companies, who can learn after office hours." },
      { title: "Himachal Pradesh", text: "Learners in Shimla, Solan and Dharamshala can study online and offer AI services to clients elsewhere, and hotel or horticulture businesses can use AI for bookings and customer replies. Online AI courses for Himachal Pradesh students remove the need to move to a metro." },
      { title: "Chandigarh and Tricity", text: "AI courses in Chandigarh suit professionals in Chandigarh, Mohali and Panchkula from BPO, IT support and education backgrounds who want to move into AI-driven roles. The Tricity's closeness to Jalandhar also makes occasional offline sessions possible." },
      { title: "Delhi NCR", text: "Delhi, Noida and Ghaziabad have the region's largest fresher market and many agencies, fintech and SaaS firms. Online AI courses for Delhi students help marketers and analysts stand out." },
      { title: "Jammu & Kashmir", text: "Handicraft sellers, tourism operators and students in Jammu and Srinagar can use AI to reach customers and work remotely. Online AI courses for Jammu & Kashmir students make that possible without relocating." },
      { title: "Uttarakhand", text: "Teachers, hospitality and pharma-linked staff in Dehradun and Haridwar can use AI for content, documentation and analysis, making online AI courses for Uttarakhand students practical for working learners." },
      { title: "Rajasthan", text: "Jaipur's tourism, jewellery and textile businesses can use AI for catalogues, customer replies and demand planning. Online AI courses for Rajasthan students suit both entrepreneurs and graduates." },
      { title: "Uttar Pradesh", text: "Learners in Noida, Lucknow and Meerut can target IT, electronics and retail roles, or data projects linked to public services, through online AI courses for Uttar Pradesh students." },
    ] as TitledText[],
  },
  why: {
    title: "Why Learn AI Now, and Why Choose a Connected Path?",
    intro: "Almost everyone has tried an AI chatbot. Far fewer people can build with AI, apply it to a real business problem or explain where it fails. That gap is why choosing the right AI courses in Jalandhar matters, and why a connected path works better than one random course.",
    points: [
      { title: "AI is becoming a basic workplace skill.", text: "Writing, analysis, customer support, marketing, finance and software work are all changing as AI tools enter daily routines. Professionals who understand the tools, and not just the buttons, are trusted with more responsibility." },
      { title: "One size does not fit every career.", text: "A marketer, a software tester and a business owner need different AI skills. Here, you choose the course that fits your goal: foundations in the AI Course, autonomous systems in Agentic AI, accurate document-based assistants in RAG, or campaign skills in AI-Powered Marketing. You do not pay for topics you will never use." },
      { title: "The courses build on each other.", text: "A common path is the AI Course first, then RAG, then Agentic AI, because agents depend on good access to knowledge. Marketers can go from the AI Course to AI-Powered Marketing. Starting with the foundations makes every later course easier." },
      { title: "You learn by building.", text: "Every course ends with working projects: a prediction model, a document question-answering assistant, an AI agent workflow or a full marketing campaign. You also learn the parts that matter at work, such as checking AI output, protecting data and measuring results." },
      { title: "You can learn in the mode that suits you.", text: "Learners in Jalandhar can attend offline batches at the centre, while working professionals and learners in other cities can join live online classes. Both follow the same practical approach." },
      { title: "It opens several career routes.", text: "Depending on your background and course, you can aim for roles such as AI associate, data analyst, LLM application developer, RAG developer, AI automation engineer, AI marketing executive or AI consultant. You can also freelance by offering AI-assisted content, chatbots and automation to small businesses. Many roles are remote or hybrid with companies in Bengaluru, Hyderabad, Pune and Mumbai, so relocation is not always needed." },
      { title: "Pay potential is decent, though it varies.", text: "As an approximate guide, entry-level AI, data and AI marketing roles in India often start in the range of ₹3-8 LPA, depending on the role, and experienced professionals can earn considerably more. Actual salary depends on your skills, portfolio, company and city, so treat these as indicative figures and not promises." },
      { title: "You do not have to leave the region to start.", text: "Punjab has a growing IT scene around Mohali, and exporters and manufacturers around Ludhiana and Jalandhar are looking at data and automation. Building your skills locally lets you work with regional businesses, or remotely with companies elsewhere." },
    ] as TitledText[],
    outro: "What you leave with: a clear understanding of how AI works, a portfolio of practical projects in your chosen area, and the confidence to explain your work in interviews or to clients.",
  },
  whyUs: {
    title: "Why Choose techcadd for AI Courses in Jalandhar?",
    intro: "Choosing where to learn AI matters, because the field changes quickly and many institutes stop at a list of apps or a few prompt tricks. Here is what techcadd offers learners in Jalandhar and across North India who want practical, job-relevant AI skills.",
    points: [
      { title: "North India's first AI-powered and Robotics learning centre", text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For an AI learner, this means you study in an environment where AI is part of everyday learning, not a side topic. AI and robotics share the same foundations: systems that learn from data, make decisions and act on them. Exposure to both helps you understand how AI moves from a screen to real-world use, whether you are building an agent, a document assistant or a marketing workflow. In practice, learners get hands-on AI exposure, practical projects and a modern technology environment that keeps pace with the industry. This benefits learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh equally, since live online classes bring the same practical approach to your screen wherever you are." },
      { title: "Four connected AI courses under one roof", text: "You do not have to search different institutes for different skills. The AI Course, Agentic AI, RAG and AI-Powered Marketing programs are designed to connect, so you can start with the foundations and specialise later without repeating topics or changing institutes." },
      { title: "Practical, project-based training", text: "You learn by building. Each course produces working outputs, such as a prediction model, a document question-answering assistant, an AI agent workflow or a complete marketing campaign. By the end, you have a portfolio you can show to employers or clients." },
      { title: "Industry-relevant curriculum", text: "The curriculum focuses on skills employers ask for now: Python, machine learning basics, generative AI, retrieval and agent frameworks, AI-assisted marketing and responsible AI use. Content is reviewed as tools and models evolve, so you are not learning outdated material." },
      { title: "Experienced trainers", text: "Trainers guide you through real problems, such as an agent that loops, a chatbot that retrieves the wrong passage or an ad campaign that does not convert. Learners get feedback on their code, reasoning and project design, not only on tool usage." },
      { title: "Small batches", text: "Smaller batches mean more attention and more chances to ask questions. This helps non-technical learners, business owners and working professionals who need extra support with Python or the underlying logic." },
      { title: "Certificate on completion", text: "Learners receive a techcadd course completion certificate." },
      { title: "Career and placement support", text: "techcadd can help with resume building, portfolio review and interview preparation." },
      { title: "Flexible online and offline learning", text: "Learners in Jalandhar can attend offline batches at the centre, and others can join live online classes. Online learners get recorded or revision support where available. This lets working professionals and freelancers learn around their schedule." },
      { title: "A local centre with reach beyond the city", text: "Being based in Jalandhar gives learners from Punjab's cities and nearby districts a real place to ask questions, meet trainers and study with peers. Students from Himachal Pradesh, J&K, Uttarakhand, Rajasthan and other states join the same live sessions, get doubt support and can choose project topics relevant to their local fields, from tourism and handicrafts to manufacturing and pharma." },
    ] as TitledText[],
  },
  learn: {
    title: "What You Will Learn in AI Courses in Jalandhar",
    intro: "Each course has its own modules and projects, and together they form a path from AI foundations to specialised skills. Here is what each one covers.",
    courses: [
      {
        name: "AI Course (Foundations)", href: "/courses/artificial-intelligence", tools: "Python, Jupyter, Google Colab, Pandas, scikit-learn, Hugging Face, Streamlit",
        points: [
          { title: "AI foundations", text: "what AI, machine learning and generative AI mean, and how they differ." },
          { title: "Python and data", text: "Python basics, NumPy, Pandas and charts with Matplotlib." },
          { title: "Machine learning", text: "regression, classification and clustering with scikit-learn, plus how to tell whether a model is actually good." },
          { title: "Generative AI and prompt engineering", text: "how ChatGPT, Claude and Gemini work, writing clear prompts and using model APIs." },
          { title: "Automation, ethics and capstone", text: "simple automations, responsible AI use, data privacy and an end-to-end project." },
        ],
      },
      {
        name: "Agentic AI Course", href: "/courses/agentic-ai", tools: "LangChain, LangGraph, CrewAI, MCP, n8n, FastAPI",
        points: [
          { title: "LLM and agent foundations", text: "the agent loop of goal, plan, act, observe and repeat." },
          { title: "Tool calling and MCP", text: "connecting agents to search, spreadsheets, email and business APIs." },
          { title: "Frameworks", text: "building with LangChain, LangGraph and CrewAI." },
          { title: "Multi-agent workflows", text: "agents that collaborate, with human approval steps." },
          { title: "Evaluation and deployment", text: "testing, guardrails, cost control and a working agent app." },
        ],
      },
      {
        name: "RAG Course", href: "/courses/rag", tools: "LlamaIndex, LangChain, Chroma, FAISS, Pinecone, RAGAS, LangSmith",
        points: [
          { title: "Document processing and chunking", text: "loading PDFs, handling tables and scanned files, and choosing chunking strategies." },
          { title: "Embeddings and vector databases", text: "Chroma, FAISS, Pinecone and similarity search." },
          { title: "Retrieval and reranking", text: "hybrid search, query rewriting and rerankers." },
          { title: "Grounded generation", text: "prompts that keep answers tied to sources, with citations." },
          { title: "Evaluation and deployment", text: "measuring retrieval quality and deploying with FastAPI and Streamlit." },
        ],
      },
      {
        name: "AI-Powered Marketing Course", href: "/courses/ai-powered-marketing", tools: "ChatGPT, Claude, Gemini, Canva, Google Ads, Meta Ads, GA4, Looker Studio",
        points: [
          { title: "Research and content", text: "audience research, content calendars and brand voice with AI." },
          { title: "SEO and AI search visibility", text: "keyword research and content that works for search and AI answers." },
          { title: "Social media and paid ads", text: "Google Ads and Meta Ads campaigns with AI-assisted testing." },
          { title: "Email, WhatsApp and automation", text: "lead funnels and follow-ups." },
          { title: "Analytics and capstone", text: "GA4, Looker Studio reporting and a full campaign project." },
        ],
      },
    ],
    outcomesTitle: "Learning outcomes",
    outcomesIntro: "By the end of your chosen course, you will be able to:",
    outcomes: [
      "Explain how AI works in simple terms and choose the right approach for a problem.",
      "Build a working project in your area, whether a model, an agent, a document assistant or a campaign.",
      "Check AI output for errors, bias and privacy risks before relying on it.",
      "Measure results with tests, metrics or campaign data.",
      "Present a portfolio of projects to employers or clients.",
    ],
    toolsNote: "All courses also use major model APIs such as OpenAI, Anthropic and Google, plus Git and GitHub.",
  },
  careers: {
    title: "Career and Future Scope After the Courses",
    intro: "AI skills apply across almost every industry. Depending on your course, common roles include AI associate, data analyst, junior machine learning engineer, LLM application developer, RAG developer, AI automation engineer, AI marketing executive, performance marketer and AI consultant. Freelancers can offer analysis, chatbots, automation and campaign management to small businesses and agencies. Entry-level salaries in India are approximately ₹3-8 LPA depending on the role, and they rise with experience and a strong portfolio.",
    jobsTitle: "Job opportunities across North India",
    jobs: [
      { title: "Punjab", text: "AI jobs in Punjab are growing around Mohali's IT and startup cluster, while manufacturers and exporters in Ludhiana and Jalandhar need people who can use data, document search and automation for planning and export work." },
      { title: "Haryana", text: "AI jobs in Haryana are concentrated around Gurugram, where MNCs, e-commerce and IT services firms hire analysts, AI developers and performance marketers, and Faridabad's logistics and automobile units use data and document tools." },
      { title: "Himachal Pradesh", text: "AI jobs in Himachal Pradesh are mostly remote or freelance, and hospitality and pharma units in Baddi can use AI for bookings, marketing and documentation." },
      { title: "Delhi NCR", text: "AI jobs in Delhi NCR are the most plentiful for freshers, with fintech, SaaS, media agencies and consulting firms hiring across data, automation and AI-led marketing." },
      { title: "Rajasthan", text: "AI jobs in Rajasthan are linked to tourism, jewellery and textile businesses that need catalogue chatbots, ad campaigns and demand planning, as well as to Jaipur's IT scene." },
      { title: "Uttar Pradesh", text: "AI jobs in Uttar Pradesh span Noida's IT and electronics sector, retail chains in Lucknow and government-linked digital projects that handle large amounts of public data." },
    ] as TitledText[],
    outro: "Remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai are also open to learners from any state.",
  },
  faqTitle: "AI Courses in Jalandhar: FAQs",
  faqs: [
    { q: "Which AI courses are available at techcadd in Jalandhar?", a: "techcadd offers four connected AI programs: the AI Course (foundations), the Agentic AI course, the RAG (Retrieval-Augmented Generation) course and the AI-Powered Marketing course. Each is project-based and available as offline batches in Jalandhar or as live online classes." },
    { q: "Which AI course should I join as a beginner?", a: "Beginners should start with the AI Course, because it teaches Python, data handling, machine learning basics and generative AI from scratch. Marketers and business owners who do not want to code can start directly with the AI-Powered Marketing course, which focuses on strategy and tools." },
    { q: "What is the difference between the AI Course, Agentic AI and RAG?", a: "The AI Course teaches the foundations, including how machine learning and generative AI work. RAG teaches you to build assistants that answer accurately from your own documents, and Agentic AI teaches you to build agents that plan tasks and use tools on their own. In simple terms, RAG gives AI knowledge, and Agentic AI gives it the ability to act." },
    { q: "Who is eligible for AI courses at techcadd?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners from any stream can join. 12th-pass students with a strong interest in technology can also enrol, but they should be ready for regular practice. No prior AI experience is required." },
    { q: "Can I learn AI without coding or a maths background?", a: "Yes, you can start without either, because Python is taught from scratch and the courses focus on practical use more than heavy mathematics. The AI-Powered Marketing course needs almost no coding, while the Agentic AI and RAG courses involve more Python practice, and the small batches and trainer support are meant to help with that." },
    { q: "What will I learn in the AI courses?", a: "The AI Course covers Python, data analysis, machine learning and generative AI. Agentic AI covers tool calling and multi-agent workflows, RAG covers chunking, embeddings, vector databases and retrieval, and the AI-Powered Marketing course covers content, SEO, ads, automation and analytics." },
    { q: "Which tools and software will I use?", a: "Depending on the course, you will use Python, Jupyter, Pandas, scikit-learn, LangChain, LangGraph, CrewAI, LlamaIndex, vector databases such as Chroma and FAISS, Google Ads, Meta Ads, GA4, Canva and AI assistants such as ChatGPT, Claude and Gemini." },
    { q: "Will I get a certificate after completing an AI course?", a: "Yes, learners receive a techcadd course completion certificate. A certificate helps, but employers mainly look at your portfolio and working projects." },
    { q: "Can I attend AI classes offline in Jalandhar, or only online?", a: "You can choose either one. Offline batches run at the Jalandhar centre in Punjab, and live online classes let learners from any city or state join. Both modes follow the same practical, project-based approach." },
    { q: "What are the fees and duration of the AI courses in Jalandhar?", a: "The fees and duration depend on the course, batch and learning mode, so please contact techcadd for current details." },
    { q: "What jobs can I get after an AI course in Jalandhar?", a: "Depending on your course, you can aim for roles such as AI associate, data analyst, LLM application developer, RAG developer, AI automation engineer, AI marketing executive or AI consultant. Existing professionals can also use these skills to grow in their current roles." },
    { q: "What is the salary after learning AI in India?", a: "Entry-level AI, data and AI marketing roles in India approximately start between ₹3 and ₹8 LPA depending on the role, and experienced professionals can earn much more. Your actual pay depends on your skills, portfolio, company and city, and the courses do not guarantee a salary." },
    { q: "Can I do freelancing after these courses?", a: "Yes, many learners use these skills to offer data analysis, chatbots over client documents, workflow automation, content planning and ad management to small businesses. Freelancing works best when you build a few strong portfolio projects and understand the client's business problem." },
    { q: "Can I take more than one course?", a: "Yes, the courses are designed to build on each other. A common path is the AI Course first, then RAG, then Agentic AI, and marketers can follow the AI Course with the AI-Powered Marketing course." },
    { q: "Can students from Himachal Pradesh join AI courses online?", a: "Yes, students from Himachal Pradesh can join live online classes from anywhere in the state. Since remote and freelance work is common there, this is a practical way to take an AI course in Himachal Pradesh without moving to a metro." },
    { q: "What are the AI job opportunities in Punjab and Haryana?", a: "In Punjab, opportunities are growing in IT and startups around Mohali, as well as in manufacturing and export businesses around Ludhiana and Jalandhar that use data and automation. In Haryana, IT services, e-commerce, logistics and automobile companies, especially around Gurugram, are the main employers. Both states also offer remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai." },
    { q: "Are these courses useful for students in Jammu & Kashmir and Uttarakhand?", a: "Yes, they are useful for both, and online classes remove the need to travel. In Jammu & Kashmir, students and small business owners can use AI for tourism, handicraft sales and remote client work, and in Uttarakhand, teachers, hospitality and pharma-linked professionals can use AI for content, analysis and documentation. Learners can also pursue remote jobs and freelancing." },
    { q: "Can learners from Delhi, Rajasthan and Uttar Pradesh join online?", a: "Yes, learners from Delhi NCR, Rajasthan and Uttar Pradesh can attend live online sessions and work on the same projects. Delhi has the largest fresher market for AI roles, Rajasthan's tourism, jewellery and textile businesses can use AI for catalogues and customer replies, and Uttar Pradesh offers openings in IT, electronics and retail." },
    { q: "Is an AI course in Chandigarh or the Tricity area available through techcadd?", a: "Yes, learners in Chandigarh, Mohali and Panchkula can join live online classes, and some may choose the Jalandhar centre for offline batches. An AI course in Chandigarh suits people in IT support, BPO and education who want to move into AI-driven roles, and online learning lets you continue your job while you study." },
  ],
  cta: { title: "Ready to Start Your AI Career in Jalandhar?", highlight: "Choose Your AI Course at techcadd", text: "Stop watching AI from the sidelines. Whether you want to learn the foundations, build AI agents, create document-based assistants or market smarter, techcadd has a course that fits your goal. Join offline batches in Jalandhar or live online classes from anywhere in North India, with hands-on projects, small batches and trainer support." },
};
