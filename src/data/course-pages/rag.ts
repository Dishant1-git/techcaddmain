import type { CoursePage } from "./types";

/* /courses/rag — long-form landing copy supplied by the client (Google Doc, Stages 1–4, 6 and 7), used as given.
   The older page at /ai-courses/rag (`aiCourses` in site.ts) now REDIRECTS here — see `movedTo` in
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

const roles = ["RAG developer", "LLM application developer", "AI engineer", "Conversational AI developer", "Search and knowledge engineer", "AI consultant"];

export const rag: CoursePage = {
  slug: "rag",
  title: "RAG Course",
  navLabel: "RAG (Retrieval-Augmented Generation)",
  group: "ai-data",
  icon: "Database",
  tagline: "Build AI assistants that answer accurately from your own documents, websites and databases.",
  level: "Advanced",
  duration: "2 Months",
  eligibility: "Open to any stream; no machine learning background needed. Python basics are taught from scratch",
  overview: [
    "The RAG course at techcadd teaches you how to build AI applications that answer questions from your own data. Retrieval-Augmented Generation (RAG) connects a large language model to documents, databases and knowledge bases, so its answers are grounded in real sources and not guesswork. This is how companies build document assistants, support bots and internal search tools.",
    "You will learn how to prepare and chunk documents, create embeddings, store them in vector databases, retrieve the right context and generate accurate, source-backed answers. You will also learn hybrid search, reranking, and how to test and improve RAG quality. Tools include Python, LangChain, LlamaIndex, Chroma, FAISS and Pinecone, along with leading model APIs. Python basics are included, so graduates, working professionals, job switchers and freelancers can start without a machine learning background.",
    "Learners across Punjab can join live online classes, and those near our physical centre in Jalandhar can attend offline batches. Every module is project-based, so you finish with working systems, such as a PDF question-answering assistant, that you can show in your portfolio.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Explain how RAG works and when to use it instead of fine-tuning",
    "Process messy real-world documents and choose sensible chunking and embedding settings",
    "Build and tune a retrieval pipeline with hybrid search and reranking",
    "Produce answers with source citations and handle questions the data cannot answer",
    "Evaluate a RAG system with test sets and metrics, and improve weak spots",
    "Deploy a working assistant and present it in a portfolio",
  ],
  syllabus: [
    { title: "Module 1: Foundations of LLMs and RAG", summary: "How large language models work, what tokens and context windows are, why models hallucinate, and where RAG fits against prompting and fine-tuning. You will learn the basic RAG pipeline: ingest, chunk, embed, retrieve, generate.", topics: [] },
    { title: "Module 2: Python for AI Applications", summary: "Python basics, working with APIs and JSON, file handling, environment setup, and Git and GitHub. This module is built for beginners and non-programmers.", topics: [] },
    { title: "Module 3: Document Processing and Chunking", summary: "Loading PDFs, Word files, web pages and spreadsheets, cleaning text, handling tables and scanned documents with OCR, and choosing chunking strategies such as fixed-size, recursive and semantic chunking, with metadata for filtering.", topics: [] },
    { title: "Module 4: Embeddings and Vector Databases", summary: "How embeddings represent meaning, choosing embedding models, similarity search, and storing and querying vectors in Chroma, FAISS, Pinecone and similar databases.", topics: [] },
    { title: "Module 5: Retrieval Strategies and Reranking", summary: "Dense, keyword (BM25) and hybrid search, metadata filtering, query rewriting, multi-query retrieval and rerankers, so the model sees the most relevant context.", topics: [] },
    { title: "Module 6: Generation, Prompting and Citations", summary: "Writing prompts that keep answers grounded, returning source citations, handling \"I don't know\" cases, structured outputs and conversational memory.", topics: [] },
    { title: "Module 7: Frameworks and Advanced RAG", summary: "Building pipelines with LangChain and LlamaIndex, then moving to advanced patterns such as agentic RAG with LangGraph, multi-document and multi-source retrieval, and an introduction to knowledge-graph-based approaches.", topics: [] },
    { title: "Module 8: Evaluation, Safety and Optimisation", summary: "Measuring retrieval and answer quality with metrics and tools such as RAGAS and LangSmith, building test sets, tracing and debugging, access control, data privacy, prompt-injection awareness, and cost and latency tuning.", topics: [] },
    { title: "Module 9: Deployment and Capstone Project", summary: "Wrapping your system in an API or app with FastAPI and Streamlit, containerising with Docker, and building an end-to-end assistant, such as a company knowledge bot or a multi-PDF research assistant. Resume, portfolio and interview preparation are included.", topics: [] },
  ],
  tools: ["Python", "Jupyter", "VS Code", "Git and GitHub", "OpenAI", "Anthropic Claude", "Google Gemini", "open models via Ollama or Hugging Face", "LangChain", "LlamaIndex", "LangGraph", "OpenAI embeddings", "Sentence Transformers (such as BGE)", "Chroma", "FAISS", "Pinecone", "Qdrant", "pgvector", "PyMuPDF", "Unstructured", "Tesseract OCR", "BM25", "cross-encoder rerankers", "Cohere Rerank", "RAGAS", "LangSmith", "FastAPI", "Streamlit", "Docker"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is the RAG course?", a: "The RAG course teaches you to build AI applications that answer questions from your own documents and data using Retrieval-Augmented Generation. It covers document processing, chunking, embeddings, vector databases, hybrid search, reranking, evaluation and deployment, with hands-on projects in every module." },
    { q: "What is Retrieval-Augmented Generation (RAG) in simple words?", a: "RAG is a method where an AI system first searches your documents for the relevant information and then uses a language model to write an answer from what it found. This keeps answers grounded in real sources and reduces made-up responses, and it lets you update the AI's knowledge by changing the documents instead of retraining the model." },
    { q: "Who is eligible for the RAG course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners from any stream can join. 12th-pass students with a strong interest in AI can also enrol, but they should be ready for regular practice. No prior machine learning experience is required." },
    { q: "Is the RAG course suitable for beginners?", a: "Yes, the course starts from LLM and Python basics and builds step by step. Beginners should expect to practise regularly, because building retrieval pipelines needs hands-on coding and logical thinking, but you do not need a machine learning or computer science degree." },
    { q: "Can I learn RAG without a machine learning background?", a: "Yes, you can start without a machine learning background, because RAG applications mostly use ready-made models through APIs and focus on data handling, search and prompt design. Non-programmers may take longer with the coding-heavy modules, and the small batches and trainer support are meant to help with that." },
    { q: "How is RAG different from fine-tuning?", a: "RAG gives a model access to external documents at the time of answering, while fine-tuning changes the model itself by training it on new examples. RAG is usually faster and cheaper to update when your information changes, and fine-tuning suits cases where you need a specific style, format or behaviour. Many real projects use them together or choose based on the problem." },
    { q: "What is covered in the RAG course syllabus?", a: "The syllabus has nine modules: LLM and RAG foundations, Python, document processing and chunking, embeddings and vector databases, retrieval and reranking, generation and citations, frameworks and advanced RAG, evaluation and safety, and deployment with a capstone project." },
    { q: "Which tools and frameworks will I learn in the RAG course?", a: "You will work with Python, LangChain, LlamaIndex, vector databases such as Chroma, FAISS and Pinecone, embedding models, rerankers, evaluation tools such as RAGAS, and FastAPI and Streamlit for deployment, along with major model APIs." },
    { q: "Will I get a certificate after completing the RAG course?", a: "Yes, learners receive a techcadd course completion certificate. A certificate helps, but employers mainly look at your portfolio and working projects." },
    { q: "Can I learn RAG online, or do I have to attend offline?", a: "You can choose either one. Live online classes let you join from any state, and offline batches are available at the Jalandhar centre in Punjab. Both modes follow the same practical, project-based approach." },
    { q: "What are the fees and duration of the RAG course?", a: "The fees and duration depend on the batch and learning mode, so please contact techcadd for current details." },
    { q: "What jobs can I get after learning RAG?", a: "You can aim for roles such as RAG developer, LLM application developer, AI engineer, conversational AI developer, search and knowledge engineer or AI consultant. Existing professionals can also use RAG skills to build assistants and search tools within their current roles." },
    { q: "What is the salary of a RAG developer in India?", a: "Entry-level AI and LLM application roles in India approximately start between ₹4 and ₹8 LPA, and experienced developers can earn much more. Your actual pay depends on your skills, portfolio, company and city, and the course does not guarantee a salary." },
    { q: "Can I do freelancing after the RAG course?", a: "Yes, many learners use these skills to build chatbots that answer from a client's PDFs, FAQs, catalogues and policy documents. Freelancing works best when you have a few strong portfolio projects and understand the client's business problem." },
    { q: "Can students from Himachal Pradesh join the RAG course online?", a: "Yes, students from Himachal Pradesh can join live online classes from anywhere in the state. Since remote and freelance work is common there, this is a practical way to take a RAG course in Himachal Pradesh without moving to a metro." },
    { q: "What are the RAG job opportunities in Punjab and Haryana?", a: "In Punjab, opportunities are growing in IT and startups around Mohali, as well as in manufacturing and export businesses that need document search tools. In Haryana, IT services, e-commerce and automobile companies, especially around Gurugram, are the main employers. Both states also offer remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai." },
    { q: "Is the RAG course useful for students in Jammu & Kashmir and Uttarakhand?", a: "Yes, it is useful for both, and online classes remove the need to travel. In Jammu & Kashmir, developers and sellers can build assistants for tourism, e-commerce and scheme information, and in Uttarakhand, education, hospitality and pharma-linked professionals can build tools over course material, guest information or SOP documents. Learners can also pursue remote jobs and freelancing." },
    { q: "Can learners from Delhi, Rajasthan and Uttar Pradesh join the RAG course?", a: "Yes, learners from Delhi NCR, Rajasthan and Uttar Pradesh can attend live online sessions and work on the same projects. Delhi has the largest fresher market for AI roles, Rajasthan's tourism, jewellery and textile sellers can use catalogue chatbots, and Uttar Pradesh offers openings in IT, electronics and retail." },
    { q: "Is the RAG course relevant for students in Chandigarh and Tricity?", a: "Yes, a RAG course in Chandigarh is useful for people in IT support, BPO, education and startups who want to move into AI application roles. Because the course is online-friendly, you can learn while continuing your job in the Tricity area." },
  ],
  related: ["generative-ai", "agentic-ai", "machine-learning"],
  copy: {
    heading: { title: "RAG Course", highlight: "in India", meta: "RAG Course in India: Build AI That Answers from Your Own Data | techcadd" },
    overview: { eyebrow: "Program Overview", title: "RAG Course in India: Program Overview" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "What You Will Learn in the RAG Course", text: "The program is split into modules that build on each other. You start with how language models work, then move through data preparation, retrieval, generation, evaluation and deployment, and finish with a complete RAG project." },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join the RAG Course?",
      intro: "The RAG course at techcadd is built for people who want to make AI useful with real data, not only try it in a chat window.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Graduates and postgraduates from BCA, B.Tech, B.Sc, MCA, MBA or any other stream can use this course to move into roles such as RAG developer, LLM application developer or AI engineer. A working document-assistant project gives freshers something concrete to show in interviews." },
        { icon: "Briefcase", title: "Working professionals", text: "Working professionals in IT, data, QA, support, legal, finance or operations can learn to build search and question-answering tools over company documents. This makes you more valuable in your current role and prepares you for AI-focused work." },
        { icon: "Shuffle", title: "Job switchers", text: "Job switchers moving from software testing, web development, technical support or non-IT fields will find a structured path with a portfolio at the end." },
        { icon: "PenTool", title: "Freelancers and agency owners", text: "Freelancers and agency owners can offer clients custom chatbots that answer from their own PDFs, FAQs and product catalogues, which is one of the most requested AI services for small businesses." },
        { icon: "Building2", title: "Business owners and startup founders", text: "Business owners and startup founders can learn what RAG can and cannot do, so they can plan knowledge assistants for customers or staff without overspending on the wrong tools." },
        { icon: "BookOpen", title: "12th-pass students", text: "12th-pass students with a strong interest in AI can also join. Comfort with logic and regular practice matter more than prior knowledge, and extra effort on Python will help." },
      ],
      need: "You do not need a machine learning degree. If you are logical, curious and ready to practise, you can start. Python basics are taught from scratch.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because classes run live online, you can join from anywhere in North India. Here is how the course fits learners in each region.",
      items: [
        { title: "Punjab", text: "A RAG course in Punjab suits developers in Mohali's IT firms who want to add AI search to products, manufacturers in Ludhiana who want assistants that answer from technical manuals, and graduates in Amritsar and Patiala aiming for AI roles close to home." },
        { title: "Haryana", text: "Engineers in Gurugram and Faridabad working in IT services, e-commerce or automobile companies can build support and knowledge assistants over large document sets. This is why a RAG course in Haryana appeals to working professionals." },
        { title: "Himachal Pradesh", text: "Remote work is the main opportunity. Learners in Shimla, Solan and Dharamshala can study online and build RAG chatbots for clients elsewhere, and pharma-linked staff in Baddi can learn to search compliance documents faster. Interest in a RAG course in Himachal Pradesh is growing for these reasons." },
        { title: "Chandigarh and Tricity", text: "Professionals in Chandigarh, Mohali and Panchkula, especially from IT support, BPO and education backgrounds, can move from routine ticket handling to building AI assistants. Many look for a RAG course in Chandigarh for this shift." },
        { title: "Delhi NCR", text: "Delhi, Noida and Ghaziabad have the region's largest fresher market and a high concentration of fintech, media and SaaS companies. Learners can use RAG skills to stand out, and a RAG course in Delhi supports that goal." },
        { title: "Jammu & Kashmir", text: "Developers and freelancers in Jammu and Srinagar can build assistants for tourism, e-commerce and government-scheme information, serving clients across India remotely. A RAG course in Jammu & Kashmir makes that possible without relocating." },
        { title: "Uttarakhand", text: "Teachers, education staff and hospitality or pharma-linked professionals in Dehradun and Haridwar can build assistants over course material, guest information or SOP documents, making a RAG course in Uttarakhand practical for working learners." },
        { title: "Rajasthan", text: "Jaipur's tourism, jewellery and textile businesses can use RAG chatbots that answer product and booking questions from their own catalogues, so a RAG course in Rajasthan fits both entrepreneurs and graduates." },
        { title: "Uttar Pradesh", text: "Learners in Noida, Lucknow and Meerut can target IT, electronics and retail roles, or work on AI search for government-linked document systems, through a RAG course in Uttar Pradesh." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn RAG Now?",
      intro: "Anyone can ask a chatbot a question. Far fewer people know how to build a system that answers correctly from a company's own documents, shows its sources and stays reliable as the data changes. That gap is why this RAG course is worth your time.",
      points: [
        { title: "Businesses need AI that knows their data.", text: "A general language model does not know your policies, product manuals, contracts or customer history, and it can sound confident while being wrong. RAG fixes this by retrieving the relevant information first and then letting the model answer from it. That is why RAG sits behind many of the document assistants, support bots and internal search tools companies are building today." },
        { title: "RAG is often the practical first step into enterprise AI.", text: "Compared with training or fine-tuning a model, RAG is usually faster to build, easier to update and cheaper to maintain, because you change the documents and not the model. For many business problems it is the first approach teams try, so people who can build it well are in demand." },
        { title: "The real skill is quality, not just setup.", text: "A basic RAG demo takes an afternoon. A reliable one takes judgement: choosing chunk sizes, picking embeddings, using hybrid search and reranking, handling tables and scanned PDFs, and reducing wrong or unsupported answers. This program trains you to measure retrieval quality and improve it, which is what separates a prototype from a system a client will trust." },
        { title: "You learn by building.", text: "Every module ends with something that works. You will create a PDF question-answering assistant, a multi-document knowledge bot and a search tool with source citations. You will also learn the parts that matter in real projects: evaluation, access control, data privacy, cost and response speed." },
        { title: "It works for technical and non-technical backgrounds.", text: "Python is taught from the basics, and the course focuses on logic and problem-solving more than heavy mathematics. A software tester, a commerce graduate and a support executive can follow the same path and use it differently." },
        { title: "It opens several career routes.", text: "Depending on your background, you can aim for roles such as RAG developer, LLM application developer, AI engineer, conversational AI developer or AI consultant. You can also freelance by building custom knowledge chatbots for small businesses and agencies. Many of these roles are remote or hybrid with companies in Bengaluru, Hyderabad, Pune and Mumbai, so relocation is not always needed." },
        { title: "Pay potential is strong, though it varies.", text: "As an approximate guide, entry-level AI and LLM application roles in India often start in the range of ₹4-8 LPA, and experienced developers can earn considerably more. Actual salary depends on your skills, portfolio, company and city, so treat these as indicative figures and not promises." },
        { title: "It is a base skill for what comes next.", text: "RAG is a core building block of AI agents. Learners who understand retrieval well find it easier to move into agentic workflows later, because agents depend on good access to knowledge." },
      ],
      outro: "What you leave with: a clear understanding of how RAG systems are designed and evaluated, a portfolio of working projects, and the confidence to explain your choices in interviews or to clients.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your RAG Course?",
      intro: "Choosing where to learn RAG matters, because the tools change fast and many courses stop at a five-line demo. Here is what techcadd offers learners who want practical, job-relevant skills in Retrieval-Augmented Generation.",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For a RAG learner, this means you study in an environment where AI is part of everyday learning, not a side topic. You see how AI systems are built, connected to data and used in real applications, which helps you understand where RAG works well, where it struggles and how to make it dependable. In practice, learners get hands-on AI exposure, practical projects and a modern technology environment that keeps pace with the industry. This benefits learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh equally, since live online classes bring the same practical approach to your screen wherever you are." },
        { title: "Practical, project-based training", text: "You learn by building. Each module produces a working output, such as a PDF question-answering assistant, a multi-document knowledge bot or a search tool that cites its sources. By the end, you have a portfolio you can show to employers or clients." },
        { title: "Industry-relevant curriculum", text: "The curriculum focuses on skills companies ask for now: document processing, chunking, embeddings, vector databases, hybrid search, reranking, evaluation and safe deployment. Content is reviewed as tools and frameworks evolve, so you are not learning outdated material." },
        { title: "Experienced trainers", text: "Trainers guide you through real implementation problems, such as an assistant that retrieves the wrong passage, misreads a table or gives an answer the documents do not support. Learners get feedback on their code, retrieval design and evaluation, not only on tool usage." },
        { title: "Small batches", text: "Smaller batches mean more attention and more chances to ask questions. This helps non-technical learners and working professionals who need extra support with Python or the underlying logic." },
        { title: "Certificate on completion", text: "Learners receive a techcadd course completion certificate." },
        { title: "Career and placement support", text: "techcadd can help with resume building, portfolio review and interview preparation." },
        { title: "Flexible online and offline learning", text: "Choose live online classes or offline batches. Online learners get recorded or revision support where available. This lets working professionals and freelancers learn around their schedule." },
        { title: "Support for students from other states", text: "Learners from outside Punjab are not treated as an afterthought. Students from Himachal Pradesh, J&K, Uttarakhand, Rajasthan and other states join the same live sessions, get doubt support and can build projects relevant to their local fields, from tourism and handicraft catalogues to pharma documents and education material." },
      ],
    },
    tools: {
      title: "Tools and software covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "Language and environment", tools: "Python, Jupyter, VS Code, Git and GitHub" },
        { area: "Model APIs", tools: "OpenAI, Anthropic Claude, Google Gemini; open models via Ollama or Hugging Face" },
        { area: "Frameworks", tools: "LangChain, LlamaIndex, LangGraph" },
        { area: "Embeddings", tools: "OpenAI embeddings, Sentence Transformers (such as BGE)" },
        { area: "Vector databases", tools: "Chroma, FAISS, Pinecone, Qdrant, pgvector" },
        { area: "Document processing", tools: "PyMuPDF, Unstructured, Tesseract OCR" },
        { area: "Retrieval and reranking", tools: "BM25, cross-encoder rerankers, Cohere Rerank" },
        { area: "Evaluation and tracing", tools: "RAGAS, LangSmith" },
        { area: "App and deployment", tools: "FastAPI, Streamlit, Docker" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope After the Course",
      intro: "RAG skills apply across almost every industry that holds large amounts of documents. Common roles include RAG developer, LLM application developer, AI engineer, conversational AI developer, search and knowledge engineer and AI consultant. Freelancers can build custom knowledge chatbots for small businesses and agencies. Entry-level salaries in India are approximately ₹4-8 LPA, and they rise with experience and a strong portfolio.",
      roles,
      jobsTitle: "Job opportunities across North India",
      jobs: [
        { title: "Punjab", text: "RAG jobs in Punjab are growing around Mohali's IT and startup cluster, where teams add AI search and support assistants to products, while manufacturers and exporters in Ludhiana and Jalandhar need tools that answer from technical manuals, price lists and export documents." },
        { title: "Haryana", text: "RAG jobs in Haryana are concentrated around Gurugram, where MNCs, e-commerce firms and IT services companies build internal knowledge assistants and customer support bots over large document sets, and automobile units in Faridabad use document search for service and parts manuals." },
        { title: "Himachal Pradesh", text: "RAG jobs in Himachal Pradesh are mostly remote or freelance. Developers in Shimla and Solan can serve clients elsewhere, and pharma units in Baddi can use document assistants to search SOPs and compliance records." },
        { title: "Delhi NCR", text: "RAG jobs in Delhi NCR are the most plentiful for freshers, with fintech, SaaS, media and consulting firms hiring for knowledge search, customer support automation and research tools." },
        { title: "Rajasthan", text: "RAG jobs in Rajasthan are linked to tourism, jewellery and textile businesses, where chatbots can answer booking, product and pricing questions from catalogues, and to Jaipur's growing IT and startup scene." },
        { title: "Uttar Pradesh", text: "RAG jobs in Uttar Pradesh span Noida's IT and electronics sector, retail chains and government-linked digital projects, where citizens' queries and large policy documents make AI search useful." },
      ],
      outro: "Remote roles with companies in Bengaluru, Hyderabad, Pune and Mumbai are also open to learners from any state.",
    },
    faqTitle: "RAG Course: FAQs",
    cta: { title: "Ready to Build AI That Answers from Your Data?", highlight: "Start Your RAG Journey with techcadd", text: "Stop settling for chatbots that guess. Join the RAG course at techcadd and learn to build AI assistants that retrieve the right information and answer with sources. Learn through hands-on projects, small batches and trainer support, whether you are a graduate, working professional, job switcher, freelancer or business owner." },
  },
};
