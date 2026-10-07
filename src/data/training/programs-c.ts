import type { TrainingPage } from "./types";

export const trainingC: TrainingPage[] = [
  /* ───────── 1. Artificial Intelligence ───────── */
  {
    slug: "artificial-intelligence",
    navLabel: "Artificial Intelligence",
    title: "Artificial Intelligence Training",
    icon: "BrainCircuit",
    tag: "Trending",
    tagline: "Go from Python and the essential maths to machine learning, deep learning, natural language processing and generative AI — applying each concept through hands-on projects.",
    level: "Intermediate",
    eligibility: "10+2 with maths, or any B.Tech/BCA/MCA/B.Sc student or graduate.",
    overview: [
      "AI now powers chatbots, recommendation engines, fraud detection, medical imaging and the generative AI tools teams use every day. This training gives you the skills behind those applications rather than theory alone: you begin with Python and the essential maths, then move into machine learning, deep learning, natural language processing and generative AI.",
      "Each module ends with a practical task, so you apply what you learn before moving on. By the end you should be able to build, test and explain working AI solutions to real business problems, with a portfolio of projects to show for it.",
    ],
    concepts: [
      "Python for AI",
      "Data handling & maths essentials",
      "Machine learning",
      "Deep learning",
      "Natural language processing",
      "Generative AI & prompt engineering",
      "Deployment with Streamlit",
      "Responsible AI",
    ],
    phases: [
      {
        title: "Python, Data & Maths Foundations",
        summary: "Learn Python from scratch and the data and maths skills every AI model depends on.",
        topics: [
          "Python: variables, data structures, functions & file handling",
          "NumPy & pandas for cleaning messy data",
          "Basic statistics, probability & linear algebra",
          "Charts with Matplotlib & Seaborn",
          "Basic SQL for pulling data",
        ],
        outcome: "You can write Python code to clean, analyse and visualise a dataset.",
      },
      {
        title: "Machine Learning, Deep Learning & NLP",
        summary: "Build, train and evaluate machine learning models, neural networks and text models.",
        topics: [
          "Regression, classification & clustering",
          "Feature engineering & model evaluation with scikit-learn",
          "Neural networks with TensorFlow or PyTorch",
          "Image classification",
          "Sentiment analysis & pre-trained language models",
        ],
        outcome: "You can build, train and evaluate models for tabular, image and text data.",
      },
      {
        title: "Generative AI, Deployment & Capstone",
        summary: "Build basic generative AI applications, publish a model as a web app and complete your capstone.",
        topics: [
          "How large language models work & effective prompts",
          "AI model APIs, chatbots & document question-answering",
          "Introduction to retrieval-augmented generation (RAG)",
          "Streamlit web apps & version control with Git",
          "Bias, privacy, AI ethics & capstone project",
        ],
        outcome: "You can turn a model into a simple web app and explain its results in plain language.",
      },
    ],
    impact:
      "AI skills are used across IT, finance, healthcare, retail, education and manufacturing, and because much of the work can be done remotely, what you can build matters more than where you live.",
    audience: [
      { title: "12th-pass students", text: "Start building skills early if you are comfortable with basic maths.", icon: "GraduationCap" },
      { title: "Graduates & postgraduates", text: "Add AI as a job-ready skill from any stream; Python is taught from scratch.", icon: "BookOpen" },
      { title: "Working professionals", text: "Automate routine tasks and analyse data faster in marketing, finance, HR, operations or IT.", icon: "Briefcase" },
      { title: "Business owners", text: "Use AI for customer replies, sales forecasting, marketing and inventory decisions.", icon: "Rocket" },
      { title: "Job switchers", text: "Move from a non-tech or support role into analytics and AI-related work with a project portfolio.", icon: "Target" },
      { title: "Freelancers", text: "Offer chatbots, content automation and data analysis to clients.", icon: "Sparkles" },
    ],
    tools: [
      { name: "Python", use: "Core AI programming language" },
      { name: "Jupyter Notebook & Google Colab", use: "Notebooks for experiments" },
      { name: "NumPy & pandas", use: "Data handling and cleaning" },
      { name: "Matplotlib & Seaborn", use: "Charts and data visualisation" },
      { name: "scikit-learn", use: "Machine learning models and evaluation" },
      { name: "TensorFlow", use: "Deep learning models" },
      { name: "PyTorch", use: "Neural networks" },
      { name: "Hugging Face", use: "Pre-trained language models" },
      { name: "LangChain", use: "LLM application pipelines" },
      { name: "Streamlit", use: "Simple AI web apps" },
      { name: "Git & GitHub", use: "Version control" },
      { name: "SQL", use: "Pulling data from databases" },
    ],
    outcomes: [
      {
        q: "What job roles can I apply for after this training?",
        a: "Roles learners commonly aim for include AI/ML trainee, data analyst, junior data scientist, Python developer with AI skills, prompt and automation specialist, and AI consultant. A portfolio of projects often matters more than a certificate alone.",
      },
      {
        q: "How does an AI career usually grow?",
        a: "Growth comes as your experience and project work increase. Many people start in trainee or analyst roles, while professionals who add AI to existing expertise in marketing, finance or operations can move into AI-enabled roles in their own field.",
      },
      {
        q: "Can I freelance with AI skills?",
        a: "Yes, freelancing is a realistic path. You can offer chatbot development, data analysis, content and workflow automation and AI-assisted marketing, using your portfolio projects as proof of skill.",
      },
      {
        q: "Which companies hire AI talent in North India?",
        a: "AI skills are used across IT, finance, healthcare, retail, education and manufacturing. In Punjab, manufacturing, hosiery and sports goods units use AI for quality inspection and demand planning, alongside agri-tech, Mohali's IT sector and the startup scene; in Delhi NCR, agencies, fintech and media firms hire for analytics, content automation and AI support roles.",
      },
      {
        q: "What should I learn after this program?",
        a: "Go deeper into the area you enjoyed most: machine learning, deep learning, NLP or generative AI applications such as RAG. Our Agentic AI and Data Science programs are natural next steps.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Prediction model",
        text: "Clean a dataset with pandas and train a scikit-learn model that predicts an outcome, then evaluate it and check for overfitting.",
        tags: ["Python", "scikit-learn", "pandas"],
      },
      {
        stage: "Real-world challenge",
        title: "Text classifier",
        text: "Clean real text data and build a sentiment or topic classifier using a pre-trained language model.",
        tags: ["NLP", "Hugging Face", "Text classification"],
      },
      {
        stage: "Live client brief",
        title: "Document question-answering assistant",
        text: "Build a generative AI assistant that answers questions from a business's documents, using a model API and a basic RAG setup.",
        tags: ["LLM APIs", "RAG", "LangChain"],
      },
      {
        stage: "Portfolio capstone",
        title: "End-to-end AI app",
        text: "Pick a real problem, build and evaluate the model, publish it as a Streamlit web app and document it on GitHub.",
        tags: ["Streamlit", "Git", "Capstone"],
      },
    ],
    faqs: [
      {
        q: "Do I need strong maths or coding skills to join?",
        a: "No. No prior coding experience is needed, and basic school-level maths such as percentages and simple algebra is enough. The early modules teach logic, Python and data handling in plain language before machine learning begins.",
      },
      {
        q: "What do I need for the classes?",
        a: "A laptop and a stable internet connection for live online classes. Practice work runs in Jupyter or Google Colab notebooks.",
      },
      {
        q: "Which tools and software will I learn?",
        a: "Python, SQL, NumPy, pandas, scikit-learn, TensorFlow or PyTorch, Hugging Face, LangChain, Jupyter or Google Colab, Git and Streamlit. The toolset is updated as the field changes.",
      },
      {
        q: "Does the training include real projects?",
        a: "Yes. Project work runs through every module and ends with a capstone. You can build items such as a prediction model, an image classifier, a chatbot or a document question-answering tool.",
      },
      {
        q: "Can I learn online, or only in the classroom?",
        a: "Both options are available: live online classes from anywhere in India, or in person at the Jalandhar centre.",
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
    tagline: "Learn how complete web applications are built — from the frontend interface to backend logic, databases, APIs and the fundamentals of deployment — by building real projects.",
    level: "All Levels",
    eligibility: "10+2 or any graduate; B.Tech/BCA/MCA/diploma students welcome.",
    overview: [
      "This training shows how modern web applications are created, from the frontend interface to the backend systems that process data and business logic. Instead of focusing on one part of web development, it brings together frontend development, backend programming, databases, APIs and the fundamentals of deploying web applications.",
      "You progress from web-development fundamentals — HTML, CSS, responsive design and JavaScript — towards building complete applications and understanding how the layers work together. The learning is practice-oriented: you write code, connect application components, work with data, debug problems and build a portfolio of genuine project work.",
    ],
    concepts: [
      "HTML & CSS",
      "Responsive web design",
      "JavaScript & DOM",
      "Frontend development",
      "Backend programming",
      "Databases & CRUD",
      "APIs & JSON",
      "Git & GitHub",
    ],
    phases: [
      {
        title: "Web & Front-End Foundations",
        summary: "Understand how websites work, then structure and style responsive pages yourself.",
        topics: [
          "How browsers, clients & servers work",
          "Semantic HTML, forms & accessibility basics",
          "CSS box model, Flexbox & Grid",
          "Media queries & mobile-first layouts",
          "Project & file structure",
        ],
        outcome: "You can build a structured, responsive web page without relying on a template.",
      },
      {
        title: "JavaScript, Front End & Back-End Concepts",
        summary: "Add programming logic to your pages, then learn how the server side processes requests.",
        topics: [
          "Variables, functions, arrays & objects",
          "Events & DOM manipulation",
          "Front-end development workflow",
          "Server-side programming & routing",
          "Request handling, authentication concepts & validation",
        ],
        outcome: "You can add interactive behaviour to pages and explain how the server side handles a request.",
      },
      {
        title: "Databases, APIs & Development Workflow",
        summary: "Store and retrieve data, connect the layers through APIs and manage your code like a developer.",
        topics: [
          "Database concepts & CRUD operations",
          "Connecting applications with databases",
          "HTTP requests, JSON & API integration",
          "Git, GitHub & browser developer tools",
          "Deployment fundamentals & complete project",
        ],
        outcome: "You can connect a front end, a back end and a database into one working application.",
      },
    ],
    impact:
      "Full stack skills cover both the client and server side of an application, which supports several software and web development paths and builds transferable abilities such as debugging, version control, API integration and database handling.",
    audience: [
      { title: "12th-pass students & beginners", text: "Start with HTML, CSS and programming logic; basic computer use is enough to begin.", icon: "GraduationCap" },
      { title: "Graduates & postgraduates", text: "Add practical development skills to a technical or non-technical degree.", icon: "BookOpen" },
      { title: "Working professionals", text: "Move beyond a single technology and understand front end, back end and databases together.", icon: "Briefcase" },
      { title: "Business owners", text: "Understand what goes into websites, portals and digital products, and communicate better with technical teams.", icon: "ShoppingCart" },
      { title: "Job switchers & career changers", text: "A structured route into programming and web development, backed by projects and a portfolio.", icon: "Target" },
      { title: "Freelancers", text: "Handle client projects that need functionality, APIs and databases, not only page design.", icon: "Code2" },
    ],
    tools: [
      { name: "HTML5", use: "Page structure and semantics" },
      { name: "CSS3", use: "Styling, Flexbox, Grid and responsive layouts" },
      { name: "JavaScript", use: "Programming logic and interactivity" },
      { name: "Visual Studio Code", use: "Code editor" },
      { name: "Browser developer tools", use: "Inspecting and debugging pages" },
      { name: "Git", use: "Version control" },
      { name: "GitHub", use: "Hosting code and portfolio projects" },
    ],
    outcomes: [
      {
        q: "What roles can I apply for after full-stack training?",
        a: "Depending on your additional knowledge and experience, you can explore roles such as Full Stack Developer, Web Developer, Frontend Developer, Backend Developer, Software Developer, Junior Software Engineer and Application Developer. Job requirements vary between employers, so programming fundamentals and practical projects count alongside course completion.",
      },
      {
        q: "How does a full-stack career progress?",
        a: "After the core skills, developers typically specialise in frontend engineering, backend development, databases, cloud technologies, DevOps or application architecture as their experience grows.",
      },
      {
        q: "Is full-stack development good for freelancing?",
        a: "It can be. Client websites, dashboards, APIs and other digital products are common freelance work. Success also depends on communication, project estimation, portfolio quality, reliability and understanding client requirements.",
      },
      {
        q: "Who hires full-stack developers in North India?",
        a: "IT services companies, startups, digital agencies, e-commerce and other digital businesses across Punjab, Chandigarh Tricity, Haryana and Delhi NCR, where websites, customer portals and internal applications are part of everyday operations. Remote development work is also an option.",
      },
      {
        q: "What should I learn next?",
        a: "Choose a direction to specialise in: frontend engineering, backend development, cloud technologies, DevOps, databases or application architecture. Our MERN Stack and Cloud Computing programs are natural next steps.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Responsive business website",
        text: "Build a multi-page site with semantic HTML, a mobile-first layout and a working contact form.",
        tags: ["HTML", "CSS", "Responsive design"],
      },
      {
        stage: "Real-world challenge",
        title: "Interactive task manager",
        text: "Add JavaScript logic, DOM updates and form validation to build an app that manages tasks in the browser.",
        tags: ["JavaScript", "DOM", "Forms"],
      },
      {
        stage: "Live client brief",
        title: "Customer portal with login",
        text: "Build a portal from a client-style brief with server-side routing, authentication and records stored in a database.",
        tags: ["Backend", "Database", "Authentication"],
      },
      {
        stage: "Portfolio capstone",
        title: "Complete full stack application",
        text: "Plan and build an application that connects a front end, an API and a database, with the code and a write-up of your contribution on GitHub.",
        tags: ["API", "CRUD", "GitHub"],
      },
    ],
    faqs: [
      {
        q: "Do I need prior coding experience?",
        a: "No. Basic computer use is helpful, and prior development experience is not essential. Beginners should expect to spend significant time practising HTML, CSS and programming logic before tackling more complex applications.",
      },
      {
        q: "Which languages and technologies are covered?",
        a: "HTML, CSS and JavaScript form the core, followed by backend programming, databases, APIs and version control with Git. The specific backend language, framework and database follow the current curriculum, so confirm them before you enrol.",
      },
      {
        q: "What is the difference between front end, back end and full stack?",
        a: "The front end is what users see and interact with; the back end handles server-side processing, application logic and data. Full stack learning covers both, so you understand how the parts of an application communicate.",
      },
      {
        q: "Will I build a portfolio?",
        a: "Yes. Completed websites and applications are evidence of your skills when applying for jobs, internships or freelance work. A portfolio should show genuine work and explain what you contributed, not just list technologies.",
      },
      {
        q: "Can I learn online, or do I need to attend in Jalandhar?",
        a: "Both formats exist: classroom learning at the Jalandhar centre and online learning for those further away. Confirm current batch schedules and delivery format before enrolling.",
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
