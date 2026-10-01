import type { TrainingPage } from "./types";

export const trainingC: TrainingPage[] = [
  /* ───────── 1. Artificial Intelligence ───────── */
  {
    slug: "artificial-intelligence",
    navLabel: "Artificial Intelligence",
    title: "Artificial Intelligence Training",
    icon: "BrainCircuit",
    tag: "Trending",
    tagline: "Build, train and deploy real AI models — from Python and machine learning to deep learning, NLP and generative AI apps.",
    level: "Intermediate",
    eligibility: "10+2 with maths, or any B.Tech/BCA/MCA/B.Sc student or graduate.",
    overview: [
      "This hands-on industrial training takes you from Python and data handling to machine learning, deep learning and generative AI. Every module ends in the lab, where you train models on real datasets and turn them into working apps.",
      "Projects are drawn from problems North Indian businesses actually face — demand forecasting for Ludhiana manufacturers, document automation for Chandigarh offices and chatbots for Punjab retailers. Longer tracks add an internship on a live AI project, with a report and letter for your university.",
    ],
    concepts: [
      "Python for AI",
      "Machine learning",
      "Deep learning",
      "Computer vision",
      "NLP",
      "Generative AI & LLMs",
      "Prompt engineering",
      "Model deployment",
    ],
    phases: [
      {
        title: "Python, Data & Maths Foundations",
        summary: "Get fluent in Python and the data and maths skills every AI model depends on.",
        topics: [
          "Python & Jupyter notebooks",
          "NumPy & Pandas",
          "Data cleaning & visualisation",
          "Linear algebra & statistics basics",
          "Git & GitHub",
        ],
        outcome: "You can clean, explore and visualise a real dataset in Python.",
      },
      {
        title: "Machine Learning & Deep Learning",
        summary: "Train, evaluate and tune classical ML models and neural networks on real problems.",
        topics: [
          "Regression & classification",
          "Model evaluation & tuning",
          "Neural networks with TensorFlow/Keras",
          "CNNs for computer vision",
          "NLP & transformers",
        ],
        outcome: "You can build and evaluate models for vision, text and tabular data.",
      },
      {
        title: "Generative AI & Deployment",
        summary: "Build LLM-powered apps and ship your models as usable web services.",
        topics: [
          "LLM APIs & prompt engineering",
          "RAG with vector databases",
          "LangChain basics",
          "Flask/FastAPI model serving",
          "Streamlit demos & cloud deployment",
        ],
        outcome: "You can deploy an AI app that others can actually use.",
      },
    ],
    impact:
      "AI skills are moving from research labs into everyday business software, and employers across Punjab, Chandigarh and remote teams want people who can build and deploy models — not just describe them.",
    audience: [
      { title: "After 12th", text: "Start early with Python and AI fundamentals before or alongside your degree.", icon: "GraduationCap" },
      { title: "Final-year & graduates", text: "Complete PTU, GNDU or PU industrial training on a live AI project.", icon: "BookOpen" },
      { title: "Working professionals", text: "Add machine learning and generative AI to your current developer or analyst role.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Build chatbots and automations for your business or for paying clients.", icon: "Rocket" },
      { title: "Career restarters", text: "Return to tech with a structured, mentor-guided path into AI.", icon: "Target" },
      { title: "Self-taught learners", text: "Turn scattered tutorials into deployed projects and a verifiable certificate.", icon: "Sparkles" },
    ],
    tools: [
      { name: "Python", use: "Core AI programming language" },
      { name: "Jupyter Notebook", use: "Experiments and data exploration" },
      { name: "Pandas & NumPy", use: "Data wrangling and numerics" },
      { name: "scikit-learn", use: "Classical machine learning models" },
      { name: "TensorFlow & Keras", use: "Deep learning models" },
      { name: "PyTorch", use: "Neural networks and research models" },
      { name: "Hugging Face", use: "Pretrained transformer models" },
      { name: "LangChain", use: "LLM app pipelines" },
      { name: "OpenCV", use: "Image and video processing" },
      { name: "Streamlit", use: "Quick AI web demos" },
    ],
    outcomes: [
      {
        q: "What job roles can I apply for after this training?",
        a: "Typical entry roles include junior ML engineer, AI developer, data analyst with ML skills, computer vision trainee and generative AI / prompt engineer. Your project portfolio decides which door opens first.",
      },
      {
        q: "How does an AI career usually grow?",
        a: "Most people start by building and maintaining models under a senior engineer, then move to owning ML pipelines, MLOps or specialisations like NLP and vision, and later into lead or AI architect roles.",
      },
      {
        q: "Can I freelance with AI skills?",
        a: "Yes. Small businesses regularly need chatbots, document extraction, recommendation features and workflow automation. Your capstone and client-brief projects give you ready samples to pitch on freelance platforms.",
      },
      {
        q: "Which companies hire AI talent in North India?",
        a: "IT service companies and start-ups in Mohali, Chandigarh and Noida, analytics teams at manufacturers and retailers, ed-tech and health-tech firms, plus remote-first global teams that hire on portfolio.",
      },
      {
        q: "What should I learn after this program?",
        a: "Go deeper with agentic AI and multi-agent systems, MLOps and cloud deployment, or data science for stronger statistics. Our Agentic AI and Cloud Computing programs are natural next steps.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Student performance predictor",
        text: "Clean a marks dataset and train a regression model that flags students who need extra support.",
        tags: ["Python", "scikit-learn", "Pandas"],
      },
      {
        stage: "Real-world challenge",
        title: "Defect detection for a factory line",
        text: "Train a CNN that spots faulty parts from images, modelled on Ludhiana auto-component quality checks.",
        tags: ["Computer vision", "TensorFlow", "OpenCV"],
      },
      {
        stage: "Live client brief",
        title: "Customer support chatbot",
        text: "Build a RAG chatbot that answers questions from a local business's product documents and FAQs.",
        tags: ["LLMs", "RAG", "LangChain"],
      },
      {
        stage: "Portfolio capstone",
        title: "Deployed end-to-end AI app",
        text: "Pick a real problem, build the model, serve it through an API and publish a live demo.",
        tags: ["FastAPI", "Streamlit", "Deployment"],
      },
    ],
    faqs: [
      {
        q: "Do I need strong maths or coding skills to join?",
        a: "Basic school maths is enough to start. We teach Python from scratch and cover the statistics and linear algebra you need, in practical terms, before machine learning begins.",
      },
      {
        q: "What laptop do I need for AI training?",
        a: "A laptop with an i5/Ryzen 5 processor and 8 GB RAM (16 GB preferred) works well. Heavy deep-learning training runs on Google Colab GPUs, so you don't need a gaming graphics card.",
      },
      {
        q: "Will my university accept this as industrial training?",
        a: "Yes. The 6-month industrial training and diploma tracks include a live project, training report and internship letter in the format PTU, GNDU, PU and other universities ask for.",
      },
      {
        q: "How is this different from the Data Science or Agentic AI programs?",
        a: "Data Science focuses on statistics, analysis and business insight. Agentic AI focuses on autonomous LLM agents. This program covers the broad AI core — ML, deep learning, vision, NLP and generative AI.",
      },
    ],
    related: ["agentic-ai", "data-science", "cloud-computing"],
  },

  /* ───────── 2. Full Stack Development ───────── */
  {
    slug: "full-stack-development",
    navLabel: "Full Stack Development",
    title: "Full Stack Development Training",
    icon: "Layers",
    tag: "Popular",
    tagline: "Design, build and deploy complete web applications — responsive front ends, secure APIs and databases — on live projects.",
    level: "All Levels",
    eligibility: "10+2 or any graduate; B.Tech/BCA/MCA/diploma students welcome.",
    overview: [
      "This industrial training covers the complete web stack: HTML, CSS and JavaScript, React on the front end, Node.js and Python back ends, SQL and NoSQL databases, and cloud deployment. You write code in every class and review it with a mentor.",
      "You build the kind of apps local companies commission — booking systems for Jalandhar clinics, dealer portals for Ludhiana manufacturers and dashboards for Mohali start-ups. Longer tracks end with an internship on live client work, plus a report and letter for your university.",
    ],
    concepts: [
      "Responsive UI",
      "JavaScript & TypeScript",
      "React & Next.js",
      "REST APIs",
      "SQL & NoSQL databases",
      "Authentication",
      "Git workflow",
      "Cloud deployment",
    ],
    phases: [
      {
        title: "Front-End Foundations",
        summary: "Build responsive, accessible interfaces with modern HTML, CSS and JavaScript.",
        topics: [
          "Semantic HTML5",
          "CSS, Flexbox & Grid",
          "Tailwind CSS",
          "JavaScript ES6+ & DOM",
          "Git & GitHub",
        ],
        outcome: "You can turn a design into a responsive, working web page.",
      },
      {
        title: "React & Back-End APIs",
        summary: "Build dynamic front ends and connect them to your own APIs and databases.",
        topics: [
          "React components, hooks & routing",
          "Node.js & Express",
          "Python with Django basics",
          "MySQL & MongoDB",
          "JWT authentication",
        ],
        outcome: "You can build a full CRUD app with login and a real database.",
      },
      {
        title: "Production & Deployment",
        summary: "Ship production-ready apps with testing, TypeScript and cloud hosting.",
        topics: [
          "Next.js & TypeScript",
          "API testing with Postman",
          "Performance & SEO basics",
          "Docker fundamentals",
          "Deploying to Vercel & AWS",
        ],
        outcome: "You can deploy and maintain a live full-stack application.",
      },
    ],
    impact:
      "Full-stack developers can take a product from idea to launch on their own, which makes them valuable to start-ups, agencies and IT companies across North India and to remote teams worldwide.",
    audience: [
      { title: "After 12th", text: "Start coding real websites and apps before or alongside your degree.", icon: "GraduationCap" },
      { title: "Final-year & graduates", text: "Complete university industrial training with a deployed full-stack project.", icon: "BookOpen" },
      { title: "Working professionals", text: "Move from testing, support or design into hands-on development.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Build your own web apps or deliver client websites end to end.", icon: "ShoppingCart" },
      { title: "Career restarters", text: "Rebuild coding confidence with structured modules and mentor reviews.", icon: "Target" },
      { title: "Self-taught learners", text: "Fill gaps from online courses and finish portfolio-grade projects.", icon: "Code2" },
    ],
    tools: [
      { name: "VS Code", use: "Code editor and debugging" },
      { name: "Git & GitHub", use: "Version control and collaboration" },
      { name: "React", use: "Component-based user interfaces" },
      { name: "Next.js", use: "Full-stack React framework" },
      { name: "Node.js & Express", use: "Server-side JavaScript APIs" },
      { name: "Django", use: "Python web back end" },
      { name: "MySQL", use: "Relational database" },
      { name: "MongoDB", use: "Document database" },
      { name: "Postman", use: "API testing" },
      { name: "Docker", use: "Containerised deployments" },
    ],
    outcomes: [
      {
        q: "What roles can I apply for after full-stack training?",
        a: "Common entry roles are front-end developer, back-end developer, full-stack developer, web developer and React or Node.js developer. Your GitHub and deployed projects carry most weight in interviews.",
      },
      {
        q: "How does a full-stack career progress?",
        a: "Developers usually grow from building features to owning modules, then to senior developer, tech lead or solutions architect. Many also specialise in cloud, DevOps or mobile along the way.",
      },
      {
        q: "Is full-stack development good for freelancing?",
        a: "Very. Businesses constantly need websites, admin panels, booking systems and e-commerce stores. Being able to deliver both front end and back end lets you take complete projects on your own.",
      },
      {
        q: "Who hires full-stack developers in North India?",
        a: "IT companies in Mohali's IT City, Chandigarh and Noida, digital agencies in Jalandhar and Ludhiana, SaaS and ed-tech start-ups, and remote product companies that hire on the strength of your portfolio.",
      },
      {
        q: "What should I learn next?",
        a: "Deepen one side of the stack — MERN for JavaScript specialisation, cloud computing for DevOps, or Flutter for mobile apps. Adding AI features to web apps is a growing next step too.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Responsive institute website",
        text: "Build a multi-page responsive site with forms, animations and accessibility checks, hosted on GitHub Pages.",
        tags: ["HTML/CSS", "JavaScript", "Tailwind"],
      },
      {
        stage: "Real-world challenge",
        title: "Clinic appointment system",
        text: "Create a booking app with patient login, doctor schedules and an admin panel backed by a database.",
        tags: ["React", "Node.js", "MySQL"],
      },
      {
        stage: "Live client brief",
        title: "Dealer ordering portal",
        text: "Build an order and inventory portal for a local manufacturer's dealer network from a real client brief.",
        tags: ["MERN", "REST API", "Auth"],
      },
      {
        stage: "Portfolio capstone",
        title: "Deployed SaaS-style product",
        text: "Plan, build and deploy your own full-stack product with authentication, dashboards and a live URL.",
        tags: ["Next.js", "TypeScript", "Docker"],
      },
    ],
    faqs: [
      {
        q: "Do I need prior coding experience?",
        a: "No. We start from HTML and JavaScript basics. If you already code, a mentor assesses you in week one so you can move faster through the foundations.",
      },
      {
        q: "What laptop and software do I need?",
        a: "Any laptop with an i3/Ryzen 3 or better and 8 GB RAM is fine. All tools we use — VS Code, Node.js, Git, MySQL and MongoDB — run on Windows, macOS or Linux.",
      },
      {
        q: "Is this accepted as university industrial training?",
        a: "Yes. The 6-month industrial training and diploma tracks include a live project, training report and internship letter accepted by PTU, GNDU, PU and other universities.",
      },
      {
        q: "How is this different from the MERN Stack program?",
        a: "MERN goes deep on one JavaScript stack. Full Stack Development is broader — React and Next.js, plus Node.js and Django back ends, SQL and NoSQL, and deployment — so you can work across stacks.",
      },
    ],
    related: ["mern-stack", "cloud-computing", "flutter-app-development"],
  },

  /* ───────── 3. Basic Skill and Programs ───────── */
  {
    slug: "basic-skill-programs",
    navLabel: "Basic Skill and Programs",
    title: "Basic Computer Skills Training",
    icon: "Laptop",
    tag: "Beginner friendly",
    tagline: "Use computers, office software, the internet and everyday AI tools with confidence — for study, work and daily life.",
    level: "Beginner",
    eligibility: "Anyone who can read and write — no prior computer knowledge needed.",
    overview: [
      "This practical program builds everyday digital confidence: using a computer and files, MS Office and Google Workspace, fast typing, internet and email, safe digital payments, and simple AI tools like ChatGPT. You practise on a computer in every session, at your own pace.",
      "It suits school students, 10+2 pass-outs preparing for jobs or government exams, office staff, homemakers and seniors across Punjab. You finish by writing an introductory program, so you can decide whether a coding career interests you.",
    ],
    concepts: [
      "Computer fundamentals",
      "MS Word, Excel & PowerPoint",
      "Google Workspace",
      "Typing speed",
      "Internet & email",
      "UPI & online safety",
      "AI tools basics",
      "Intro to programming",
    ],
    phases: [
      {
        title: "Computer & Typing Basics",
        summary: "Get comfortable with the computer, files and a keyboard.",
        topics: [
          "Parts of a computer",
          "Windows, files & folders",
          "English & Punjabi/Hindi typing",
          "Printing & scanning",
          "Basic troubleshooting",
        ],
        outcome: "You can operate a computer and organise your files confidently.",
      },
      {
        title: "Office, Internet & Digital Life",
        summary: "Create documents, sheets and presentations, and use the internet safely.",
        topics: [
          "MS Word & Google Docs",
          "Excel & Google Sheets basics",
          "PowerPoint & Google Slides",
          "Email, video calls & online forms",
          "UPI, net banking & scam safety",
        ],
        outcome: "You can handle everyday office work and online services safely.",
      },
      {
        title: "AI Tools & First Code",
        summary: "Use AI assistants responsibly and write your first simple programs.",
        topics: [
          "ChatGPT & AI assistants",
          "Writing good prompts",
          "Checking AI answers",
          "Scratch & block coding",
          "First Python programs",
        ],
        outcome: "You can use AI tools sensibly and write a basic program.",
      },
    ],
    impact:
      "Basic computer skills are now expected in almost every job, from offices and shops to government forms — this program makes you employable and independent in a digital world.",
    audience: [
      { title: "School students", text: "Build strong computer, typing and office skills alongside school studies.", icon: "GraduationCap" },
      { title: "10+2 & graduates", text: "Get job-ready computer skills for office roles and exam applications.", icon: "BookOpen" },
      { title: "Office staff", text: "Work faster with Excel, email, documents and online portals.", icon: "Briefcase" },
      { title: "Shop owners & freelancers", text: "Manage billing sheets, digital payments and customer communication online.", icon: "ShoppingCart" },
      { title: "Homemakers & career restarters", text: "Regain confidence with computers and prepare to return to work.", icon: "Target" },
      { title: "Seniors & self-learners", text: "Learn video calls, online banking and safe browsing at your own pace.", icon: "Users" },
    ],
    tools: [
      { name: "Windows 11", use: "Operating system basics" },
      { name: "MS Word", use: "Letters, resumes and documents" },
      { name: "MS Excel", use: "Lists, tables and simple formulas" },
      { name: "MS PowerPoint", use: "Presentations and slides" },
      { name: "Google Workspace", use: "Gmail, Docs, Sheets and Drive" },
      { name: "Typing Master", use: "Typing speed practice" },
      { name: "Google Pay / BHIM UPI", use: "Safe digital payments" },
      { name: "ChatGPT", use: "Everyday AI assistance" },
      { name: "Scratch", use: "Visual intro to coding" },
    ],
    outcomes: [
      {
        q: "What jobs can basic computer skills lead to?",
        a: "Common roles include data entry operator, computer operator, office assistant, front-desk executive, billing clerk and back-office staff — roles that almost every business and institution needs.",
      },
      {
        q: "How can I grow after starting in an office role?",
        a: "Strong Excel and office skills lead to roles like MIS executive, accounts assistant or office coordinator. Adding Tally, advanced Excel or digital marketing opens further growth.",
      },
      {
        q: "Can I earn from home with these skills?",
        a: "Yes. Typing, data entry, document formatting and online form filling are common home-based and freelance tasks, and many small businesses need part-time help with them.",
      },
      {
        q: "Who hires people with basic computer skills?",
        a: "Offices, schools, hospitals, banks' back offices, shops, factories' admin teams and service centres across Jalandhar, Ludhiana, Amritsar and Chandigarh, as well as online data-entry and support roles.",
      },
      {
        q: "What should I learn after this program?",
        a: "Move to data analytics for advanced Excel and reports, digital marketing for online business skills, or full stack development if you enjoyed the programming introduction.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Personal resume & cover letter",
        text: "Create a well-formatted resume and cover letter in Word, save it as PDF and email it.",
        tags: ["MS Word", "PDF", "Email"],
      },
      {
        stage: "Real-world challenge",
        title: "Household budget sheet",
        text: "Build an Excel sheet that tracks monthly spending with totals, simple formulas and a chart.",
        tags: ["Excel", "Formulas", "Charts"],
      },
      {
        stage: "Live client brief",
        title: "Shop stock & billing register",
        text: "Set up a stock list and billing sheet in Google Sheets for a local shop, shared online.",
        tags: ["Google Sheets", "Drive", "Sharing"],
      },
      {
        stage: "Portfolio capstone",
        title: "Digital skills showcase",
        text: "Present a slide deck of your work, including an AI-assisted document and your first Python program.",
        tags: ["PowerPoint", "ChatGPT", "Python"],
      },
    ],
    faqs: [
      {
        q: "I have never used a computer. Can I join?",
        a: "Absolutely. The program starts from switching on a computer and using a mouse. Trainers explain in English, Hindi or Punjabi and give you extra practice time whenever you need it.",
      },
      {
        q: "Do I need my own laptop?",
        a: "No. Classroom batches use our lab computers. For online classes, any laptop or desktop with internet works; a smartphone is useful for practising UPI and app-based tasks.",
      },
      {
        q: "Is this accepted for university training or job applications?",
        a: "You receive a verifiable training certificate that you can attach to job and exam applications. For university industrial training, students usually choose a technical program such as Full Stack or Data Analytics.",
      },
      {
        q: "How is this different from a regular computer course?",
        a: "Besides office software, it covers digital payments and scam safety, everyday AI tools and an introduction to programming — the skills people need today, not just typing and MS Office.",
      },
    ],
    related: ["digital-marketing", "data-analytics", "full-stack-development"],
  },

  /* ───────── 4. Civil / Mechanical ───────── */
  {
    slug: "civil-mechanical",
    navLabel: "Civil/Mechanical",
    title: "Civil & Mechanical CAD Training",
    icon: "Box",
    tag: "Core engineering",
    tagline: "Master industry CAD, BIM and analysis software on real drawings and models — the design skills civil and mechanical employers expect.",
    level: "All Levels",
    eligibility: "Civil or mechanical B.Tech, diploma or ITI students, graduates and working engineers.",
    overview: [
      "This industrial training covers the software used on real sites and shop floors: AutoCAD for drafting, Revit for BIM, STAAD.Pro for structural analysis, and SolidWorks, CATIA and Fusion 360 for 3D product design, with ANSYS for simulation basics. Every module is practical and drawing-driven.",
      "Projects mirror North India's industries — Jalandhar's hand-tools and sports-goods manufacturers, Ludhiana's cycle and auto-parts units, and Punjab's growing construction and real-estate sector. Longer tracks include an internship on live drawings, with a report and letter for your university.",
    ],
    concepts: [
      "2D drafting",
      "GD&T basics",
      "BIM modelling",
      "Structural analysis",
      "3D part & assembly design",
      "Surface modelling",
      "FEA basics",
      "Drawing standards",
    ],
    phases: [
      {
        title: "Drafting & Drawing Standards",
        summary: "Build strong 2D drafting skills with industry drawing conventions.",
        topics: [
          "AutoCAD 2D commands",
          "Layers, blocks & dimensions",
          "Building plans & sections",
          "Machine drawings & GD&T basics",
          "Plotting & sheet layouts",
        ],
        outcome: "You can produce clean, dimensioned drawings to industry standards.",
      },
      {
        title: "3D Modelling & BIM",
        summary: "Model buildings in BIM or mechanical parts and assemblies in 3D.",
        topics: [
          "Revit architecture & structure",
          "SolidWorks parts & assemblies",
          "CATIA part & surface design",
          "Fusion 360 for product design",
          "Detailed drawings from 3D models",
        ],
        outcome: "You can model a building or a product assembly and detail it.",
      },
      {
        title: "Analysis & Industry Projects",
        summary: "Analyse structures and components and deliver project-ready outputs.",
        topics: [
          "STAAD.Pro frame analysis",
          "ANSYS static structural basics",
          "Quantity & material take-offs",
          "Rendering & presentation",
          "Live industry project",
        ],
        outcome: "You can analyse, validate and present a complete design project.",
      },
    ],
    impact:
      "CAD and BIM skills turn a civil or mechanical degree into job-ready capability, opening design, drafting and analysis roles in construction firms, consultancies and manufacturing units across Punjab and beyond.",
    audience: [
      { title: "After 12th & ITI", text: "Start a drafting career with AutoCAD and 3D modelling fundamentals.", icon: "GraduationCap" },
      { title: "Final-year & graduates", text: "Complete PTU, GNDU or PU industrial training on real engineering drawings.", icon: "BookOpen" },
      { title: "Working engineers", text: "Site and production engineers adding BIM, CAD and analysis skills.", icon: "Briefcase" },
      { title: "Contractors & freelancers", text: "Prepare plans, 3D models and drawings for your own clients.", icon: "PenTool" },
      { title: "Career restarters", text: "Return to core engineering with current software and project practice.", icon: "Target" },
      { title: "Self-taught learners", text: "Formalise YouTube-learned CAD skills with standards and mentor reviews.", icon: "Layers" },
    ],
    tools: [
      { name: "AutoCAD", use: "2D drafting and detailing" },
      { name: "Revit", use: "BIM building modelling" },
      { name: "STAAD.Pro", use: "Structural analysis and design" },
      { name: "SolidWorks", use: "3D parts and assemblies" },
      { name: "CATIA", use: "Advanced surface and part design" },
      { name: "Fusion 360", use: "Product design and CAM basics" },
      { name: "ANSYS", use: "Finite element simulation basics" },
      { name: "SketchUp", use: "Quick 3D concept models" },
    ],
    outcomes: [
      {
        q: "What roles can I get after civil or mechanical CAD training?",
        a: "Civil learners move into roles like AutoCAD draftsman, BIM modeller, structural design assistant and site planning engineer. Mechanical learners move into design engineer, CAD engineer, product designer and tool-design roles.",
      },
      {
        q: "How does a CAD career grow?",
        a: "Draftsmen and modellers progress to design engineer, then senior designer or BIM coordinator, and later to design lead or project manager as they take ownership of complete projects.",
      },
      {
        q: "Can I freelance as a CAD designer?",
        a: "Yes. House plans, elevation drawings, 3D product models and drawing conversions are in steady demand from builders, contractors and small manufacturers, and many overseas firms outsource drafting work.",
      },
      {
        q: "Which companies hire CAD talent in North India?",
        a: "Architecture and structural consultancies, builders and real-estate developers across Punjab and Tricity, hand-tools and sports-goods makers in Jalandhar, cycle and auto-parts units in Ludhiana, and remote BIM outsourcing firms.",
      },
      {
        q: "What should I learn after this program?",
        a: "Civil learners can move into advanced BIM coordination, estimation and project planning tools. Mechanical learners can go deeper into simulation, CAM and CNC programming or product lifecycle tools.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Residential plan or machine part drawing",
        text: "Draft a complete house plan or a dimensioned machine component in AutoCAD, ready for plotting.",
        tags: ["AutoCAD", "Drafting", "Standards"],
      },
      {
        stage: "Real-world challenge",
        title: "Bicycle frame or G+2 building",
        text: "Model a Ludhiana-style bicycle frame in SolidWorks, or a G+2 building in Revit, with full detailing.",
        tags: ["SolidWorks", "Revit", "3D modelling"],
      },
      {
        stage: "Live client brief",
        title: "Hand-tool redesign or site layout",
        text: "Work on a real brief: redesign a Jalandhar hand-tool part or prepare a builder's site layout drawings.",
        tags: ["Fusion 360", "AutoCAD", "Client brief"],
      },
      {
        stage: "Portfolio capstone",
        title: "Analysed design project",
        text: "Deliver a complete project — a STAAD.Pro-analysed structure or an ANSYS-checked assembly — with drawings and report.",
        tags: ["STAAD.Pro", "ANSYS", "Portfolio"],
      },
    ],
    faqs: [
      {
        q: "Do I need prior CAD experience?",
        a: "No. We start with AutoCAD basics and engineering drawing conventions. You only need to be comfortable using a computer and have studied, or be studying, civil or mechanical subjects.",
      },
      {
        q: "What laptop do I need for CAD software?",
        a: "Aim for an i5/Ryzen 5 processor, 16 GB RAM and a dedicated graphics card for smooth 3D work. Classroom batches can use our lab systems with the software installed.",
      },
      {
        q: "Will this count as university industrial training?",
        a: "Yes. The 6-month industrial training and diploma tracks include a live engineering project, training report and internship letter in the format PTU, GNDU, PU and other universities require.",
      },
      {
        q: "Should I choose the civil or the mechanical path?",
        a: "Follow your branch. Everyone learns AutoCAD first; civil learners then focus on Revit and STAAD.Pro, while mechanical learners focus on SolidWorks, CATIA, Fusion 360 and ANSYS.",
      },
    ],
    related: ["basic-skill-programs", "data-analytics", "full-stack-development"],
  },
];
