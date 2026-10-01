import type { TrainingPage } from "./types";

/* Internship & Training pages — Digital Marketing, Data Analytics, Data Science, Cyber Security. */

export const trainingB: TrainingPage[] = [
  /* ───────── 1. Digital Marketing ───────── */
  {
    slug: "digital-marketing",
    navLabel: "Digital Marketing",
    title: "Digital Marketing Training",
    icon: "Megaphone",
    tag: "Live campaigns",
    tagline: "Plan, run and measure real campaigns across SEO, social, search ads and email — with live briefs from local brands.",
    level: "Beginner",
    eligibility: "12th pass, any stream — no coding or marketing background needed.",
    overview: [
      "This hands-on industrial training teaches you how businesses actually win customers online. You work inside real ad accounts, analytics dashboards and content calendars, learning SEO, social media, performance marketing and email as one connected system.",
      "Punjab’s manufacturers, exporters, clinics, coaching centres and retail brands are moving online fast and need people who can deliver measurable results. Through live projects and an internship option on your track, you graduate with campaigns, reports and a portfolio you can show employers or clients.",
    ],
    concepts: [
      "SEO & keyword research",
      "Google Ads",
      "Meta Ads",
      "Social media strategy",
      "Content & copywriting",
      "Email automation",
      "GA4 analytics",
      "Conversion optimisation",
    ],
    phases: [
      {
        title: "Foundations & content",
        summary: "Understand how customers search, discover and decide online, then create content that answers them.",
        topics: [
          "Marketing funnel & buyer personas",
          "Website structure with WordPress",
          "Keyword research & on-page SEO",
          "Copywriting for web and social",
          "Canva design for posts & creatives",
        ],
        outcome: "You can plan a content strategy and optimise pages for search.",
      },
      {
        title: "Channels & performance",
        summary: "Run organic and paid campaigns across search, social and email with clear objectives and tracking.",
        topics: [
          "Google Search & Performance Max campaigns",
          "Meta Ads for Facebook & Instagram",
          "Local SEO & Google Business Profile",
          "Email marketing & automation flows",
          "Tag Manager & conversion tracking",
        ],
        outcome: "You can launch, track and optimise campaigns on major ad platforms.",
      },
      {
        title: "Analytics & strategy",
        summary: "Turn campaign data into decisions and present results the way agencies report to clients.",
        topics: [
          "GA4 reports & audience insights",
          "Looker Studio dashboards",
          "A/B testing & landing-page optimisation",
          "Technical SEO audits",
          "Client reporting & strategy decks",
        ],
        outcome: "You can audit a brand’s digital presence and present a data-backed growth plan.",
      },
    ],
    impact:
      "Digital marketing skills let you join agencies, in-house brand teams or e-commerce businesses — or build your own freelance practice serving local and overseas clients.",
    audience: [
      { title: "After 12th", text: "Start a creative, in-demand career without needing a technical degree.", icon: "GraduationCap" },
      { title: "Graduates & final-year students", text: "Complete university industrial training with live campaigns and a report.", icon: "BookOpen" },
      { title: "Working professionals", text: "Move into marketing or add digital skills to sales and business roles.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Grow your own brand online or offer marketing services to clients.", icon: "ShoppingCart" },
      { title: "Career restarters", text: "Return to work with a flexible, remote-friendly skill set.", icon: "Rocket" },
      { title: "Self-taught learners", text: "Replace scattered tutorials with structured practice on real ad accounts.", icon: "Sparkles" },
    ],
    tools: [
      { name: "Google Ads", use: "Search, display & video campaigns" },
      { name: "Meta Ads Manager", use: "Facebook & Instagram advertising" },
      { name: "Google Analytics 4", use: "Website & conversion analytics" },
      { name: "Google Search Console", use: "Search performance & indexing" },
      { name: "Google Tag Manager", use: "Event and conversion tracking" },
      { name: "Semrush", use: "Keyword & competitor research" },
      { name: "WordPress", use: "Build and optimise websites" },
      { name: "Canva", use: "Social creatives & ad designs" },
      { name: "Mailchimp", use: "Email campaigns & automation" },
      { name: "Looker Studio", use: "Client reporting dashboards" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Digital marketing executive, SEO analyst, social media manager, performance marketing (PPC) executive, content marketer and email marketing specialist are common entry roles.",
      },
      {
        q: "How does a digital marketing career grow?",
        a: "Most people start as executives, then specialise in SEO, paid media or content, and move into campaign manager, team lead or head-of-growth roles as their results build up.",
      },
      {
        q: "Can I freelance after this training?",
        a: "Yes. Many learners manage social media, local SEO or ad campaigns for shops, clinics and exporters, and find international clients on platforms like Upwork and Fiverr.",
      },
      {
        q: "Who hires digital marketers in North India?",
        a: "Agencies in Mohali, Chandigarh and Ludhiana, e-commerce and D2C brands, education and healthcare groups, real-estate firms and exporters in Jalandhar and Ludhiana — plus remote roles with agencies across India and abroad.",
      },
      {
        q: "What should I learn next?",
        a: "Deepen into performance marketing and analytics, learn marketing automation and CRM tools, or explore data analytics and AI tools for content and campaign optimisation.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "SEO-ready blog for a local café",
        text: "Build a WordPress site, research keywords and publish optimised posts that start ranking for local searches.",
        tags: ["WordPress", "On-page SEO"],
      },
      {
        stage: "Real-world challenge",
        title: "Social audit for a Ludhiana textile brand",
        text: "Audit Instagram and Facebook presence, benchmark competitors and build a 30-day content calendar with creatives.",
        tags: ["Social media", "Canva", "Strategy"],
      },
      {
        stage: "Live client brief",
        title: "Lead campaign for a Jalandhar sports-goods exporter",
        text: "Set up tracking, launch Google and Meta lead campaigns, optimise weekly and report results to the client.",
        tags: ["Google Ads", "Meta Ads", "GA4"],
      },
      {
        stage: "Portfolio capstone",
        title: "Full-funnel growth plan",
        text: "Deliver a complete strategy — SEO, paid, email and analytics dashboard — for a brand of your choice.",
        tags: ["Looker Studio", "Strategy", "Reporting"],
      },
    ],
    faqs: [
      {
        q: "Do I need any prior experience or technical skills?",
        a: "No. Basic computer use and comfort with English or Hindi content is enough. We start from how customers search and buy online and build up step by step.",
      },
      {
        q: "What laptop or tools do I need?",
        a: "Any laptop with a modern browser works — most tools are web-based. Lab systems are available at our branches, and you will use free tiers or trainer-provided access for paid tools.",
      },
      {
        q: "Is this accepted for university industrial training?",
        a: "Yes. Students from PTU (IKGPTU), GNDU, Panjab University and other universities complete their 6-month industrial training here with a live project, training report and internship letter.",
      },
      {
        q: "How is this different from a short social media course?",
        a: "Short courses usually cover one platform. This training connects SEO, paid ads, social, email and analytics, and you run campaigns on real briefs rather than only watching demos.",
      },
    ],
    related: ["data-analytics", "artificial-intelligence", "full-stack-development"],
  },

  /* ───────── 2. Data Analytics ───────── */
  {
    slug: "data-analytics",
    navLabel: "Data Analytics",
    title: "Data Analytics Training",
    icon: "ChartBar",
    tag: "Job-ready",
    tagline: "Clean, analyse and visualise business data with Excel, SQL, Power BI and Python — on real datasets from Punjab businesses.",
    level: "Beginner",
    eligibility: "12th pass or graduate, any stream — comfort with basic maths helps.",
    overview: [
      "This industrial training turns you into someone who can answer business questions with data. You learn to clean messy spreadsheets, query databases with SQL, build interactive Power BI dashboards and automate analysis with Python.",
      "Retailers, manufacturers, banks and service companies across North India now expect data-driven reporting. You practise on realistic datasets, work on live projects and can take an internship on your track, so you finish with dashboards and case studies ready for interviews.",
    ],
    concepts: [
      "Advanced Excel",
      "SQL queries",
      "Power BI dashboards",
      "Python with Pandas",
      "Data cleaning",
      "Statistics basics",
      "Data storytelling",
    ],
    phases: [
      {
        title: "Excel & statistics",
        summary: "Build strong spreadsheet and statistics foundations, the everyday toolkit of every analyst.",
        topics: [
          "Formulas, lookups & data validation",
          "Pivot tables & pivot charts",
          "Power Query for data cleaning",
          "Descriptive statistics & distributions",
          "Business KPIs & metrics",
        ],
        outcome: "You can clean a raw dataset and summarise it into clear business insights.",
      },
      {
        title: "SQL & Power BI",
        summary: "Query relational databases and turn the results into interactive dashboards for decision-makers.",
        topics: [
          "SELECT, JOINs & aggregations",
          "Subqueries, CTEs & window functions",
          "Data modelling & relationships",
          "DAX measures & calculated columns",
          "Interactive dashboards & report publishing",
        ],
        outcome: "You can pull data with SQL and build a dashboard managers actually use.",
      },
      {
        title: "Python & storytelling",
        summary: "Automate analysis with Python and present findings as a clear, persuasive story.",
        topics: [
          "Python basics & Jupyter Notebook",
          "Pandas & NumPy for analysis",
          "Matplotlib & Seaborn visualisation",
          "Exploratory data analysis",
          "Presenting insights to stakeholders",
        ],
        outcome: "You can run an end-to-end analysis and present recommendations with confidence.",
      },
    ],
    impact:
      "Data analytics is needed in every industry, so these skills open roles in business, finance, operations and marketing teams — and form a solid step towards data science.",
    audience: [
      { title: "After 12th", text: "Build job-ready analysis skills early, from any stream including commerce.", icon: "GraduationCap" },
      { title: "Graduates & final-year students", text: "Complete industrial training with real dashboards, a report and a live project.", icon: "BookOpen" },
      { title: "Working professionals", text: "Automate reports and move into analyst roles in your current industry.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Track sales, stock and customers with dashboards you build yourself.", icon: "ChartBar" },
      { title: "Career restarters", text: "Re-enter the workforce with a practical skill companies need everywhere.", icon: "Rocket" },
      { title: "Self-taught learners", text: "Turn scattered tutorials into a structured portfolio reviewed by mentors.", icon: "Sparkles" },
    ],
    tools: [
      { name: "Microsoft Excel", use: "Cleaning, formulas & pivot analysis" },
      { name: "Power Query", use: "Automated data transformation" },
      { name: "MySQL", use: "Relational database querying" },
      { name: "Power BI", use: "Interactive business dashboards" },
      { name: "Tableau Public", use: "Visual analytics & storytelling" },
      { name: "Python", use: "Automating analysis workflows" },
      { name: "Pandas", use: "Data wrangling in Python" },
      { name: "Jupyter Notebook", use: "Interactive analysis & reports" },
      { name: "Google Sheets", use: "Collaborative data tracking" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Data analyst, business analyst, MIS executive, Power BI developer, reporting analyst and junior operations analyst are typical entry roles.",
      },
      {
        q: "How does a data analytics career grow?",
        a: "Analysts grow into senior analyst, analytics lead or BI manager roles, or specialise further into data engineering or data science as their technical depth increases.",
      },
      {
        q: "Can I freelance as a data analyst?",
        a: "Yes. Small businesses often need Excel automation, sales dashboards or MIS reporting, and freelance platforms list regular Power BI and data-cleaning projects from overseas clients.",
      },
      {
        q: "Who hires data analysts in North India?",
        a: "IT and consulting firms in Mohali and Chandigarh, banks and NBFCs, manufacturers and exporters in Ludhiana and Jalandhar, retail chains and healthcare groups — plus remote analytics teams across India.",
      },
      {
        q: "What should I learn next?",
        a: "Move towards data science and machine learning, learn cloud data tools like BigQuery or Azure, or deepen business-domain expertise in finance, supply chain or marketing analytics.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Sales tracker in Excel",
        text: "Clean a raw monthly sales sheet, build pivot summaries and create a one-page KPI report.",
        tags: ["Excel", "Pivot tables"],
      },
      {
        stage: "Real-world challenge",
        title: "Punjab retail chain analysis",
        text: "Query store, product and footfall data with SQL to find top performers and seasonal trends across cities.",
        tags: ["SQL", "Data cleaning", "EDA"],
      },
      {
        stage: "Live client brief",
        title: "Inventory dashboard for a Ludhiana hosiery unit",
        text: "Model stock and dispatch data and build a Power BI dashboard the owner can review every morning.",
        tags: ["Power BI", "DAX", "Data modelling"],
      },
      {
        stage: "Portfolio capstone",
        title: "End-to-end business insights report",
        text: "Pick a public dataset, analyse it in Python, build a dashboard and present recommendations to a panel.",
        tags: ["Python", "Pandas", "Storytelling"],
      },
    ],
    faqs: [
      {
        q: "Do I need coding or a maths background?",
        a: "No coding is required to start. Basic school-level maths is enough — we teach Excel, SQL and Python from the ground up with plenty of practice.",
      },
      {
        q: "What laptop do I need?",
        a: "A Windows laptop with 8 GB RAM is recommended because Power BI Desktop runs on Windows. Mac users can use lab systems at our branches or cloud alternatives we set up.",
      },
      {
        q: "Is this accepted for university industrial training?",
        a: "Yes. B.Tech, BCA, MCA, BBA and B.Com students from PTU, GNDU, Panjab University and other universities complete industrial training here with a live project and report.",
      },
      {
        q: "How is data analytics different from data science?",
        a: "Data analytics focuses on explaining what happened and why, using Excel, SQL and dashboards. Data science goes further into machine learning and prediction. Analytics is the ideal starting point.",
      },
    ],
    related: ["data-science", "digital-marketing", "artificial-intelligence"],
  },

  /* ───────── 3. Data Science ───────── */
  {
    slug: "data-science",
    navLabel: "Data Science",
    title: "Data Science Training",
    icon: "ChartLine",
    tag: "Python & ML",
    tagline: "Go from Python and statistics to machine-learning models you can deploy — built on real datasets and mentor-reviewed projects.",
    level: "Intermediate",
    eligibility: "Graduates or final-year students; basic maths and logic recommended.",
    overview: [
      "This industrial training covers the full data science workflow: Python programming, statistics, data wrangling, machine learning and model deployment. Every concept is practised in Jupyter notebooks on realistic datasets, not just explained on slides.",
      "Companies in Mohali, Chandigarh and across remote teams need people who can build and explain predictive models. With live projects and an internship option on your track, you finish with a GitHub portfolio of models and deployed apps that proves what you can do.",
    ],
    concepts: [
      "Python for data",
      "Statistics & probability",
      "Machine learning",
      "Feature engineering",
      "Model evaluation",
      "Deep learning basics",
      "NLP fundamentals",
      "Model deployment",
    ],
    phases: [
      {
        title: "Python & statistics",
        summary: "Master the programming and statistical foundations every data scientist relies on.",
        topics: [
          "Python, NumPy & Pandas",
          "Data cleaning & wrangling",
          "Probability & hypothesis testing",
          "Exploratory data analysis",
          "Visualisation with Matplotlib & Seaborn",
        ],
        outcome: "You can explore any dataset and back your findings with statistics.",
      },
      {
        title: "Machine learning",
        summary: "Build, tune and evaluate supervised and unsupervised models with scikit-learn.",
        topics: [
          "Regression & classification",
          "Decision trees, random forests & XGBoost",
          "Clustering & dimensionality reduction",
          "Feature engineering & pipelines",
          "Cross-validation & model metrics",
        ],
        outcome: "You can choose, train and evaluate the right model for a business problem.",
      },
      {
        title: "Deep learning & deployment",
        summary: "Explore neural networks and ship models as usable apps and APIs.",
        topics: [
          "Neural networks with TensorFlow/Keras",
          "NLP & text classification",
          "Intro to computer vision",
          "Model deployment with Streamlit & Flask",
          "Git, GitHub & portfolio presentation",
        ],
        outcome: "You can deploy a working model and explain its results to non-technical people.",
      },
    ],
    impact:
      "Data science skills position you for analytical and machine-learning roles across IT services, product companies, finance and healthcare — and give you a strong base for AI specialisation.",
    audience: [
      { title: "After 12th", text: "Start with our foundation track if you have strong maths and curiosity.", icon: "GraduationCap" },
      { title: "Graduates & final-year students", text: "Complete industrial training with ML projects, a report and a live project.", icon: "BookOpen" },
      { title: "Working professionals", text: "Move from analyst, developer or engineering roles into machine learning.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Use prediction and automation to make sharper, data-backed decisions.", icon: "Target" },
      { title: "Career restarters", text: "Rebuild momentum with a future-focused, remote-friendly technical skill.", icon: "Rocket" },
      { title: "Self-taught learners", text: "Fill the gaps in online courses with mentor-reviewed, deployable projects.", icon: "BrainCircuit" },
    ],
    tools: [
      { name: "Python", use: "Core data science language" },
      { name: "Jupyter Notebook", use: "Experiments & analysis notebooks" },
      { name: "Pandas & NumPy", use: "Data wrangling & numerical computing" },
      { name: "scikit-learn", use: "Classical machine-learning models" },
      { name: "TensorFlow / Keras", use: "Building neural networks" },
      { name: "Matplotlib & Seaborn", use: "Statistical data visualisation" },
      { name: "SQL", use: "Querying data from databases" },
      { name: "Streamlit", use: "Deploying interactive model apps" },
      { name: "Git & GitHub", use: "Version control & portfolio" },
      { name: "Google Colab", use: "Cloud notebooks with GPUs" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Junior data scientist, machine-learning engineer (entry level), data analyst, ML/AI intern and analytics consultant are common starting roles.",
      },
      {
        q: "How does a data science career grow?",
        a: "You can progress to data scientist, senior ML engineer and lead roles, or specialise in NLP, computer vision, MLOps or generative AI as you gain project experience.",
      },
      {
        q: "Can I freelance in data science?",
        a: "Yes. Freelance work includes predictive models, data cleaning, dashboards and ML prototypes for startups, often found on global platforms and through research collaborations.",
      },
      {
        q: "Who hires data scientists in North India?",
        a: "IT services and product companies in Mohali and Chandigarh, fintech, e-commerce and healthcare firms, analytics consultancies in Delhi NCR and a growing number of remote-first global teams.",
      },
      {
        q: "What should I learn next?",
        a: "Advance into deep learning, generative AI and agentic AI, learn MLOps and cloud ML platforms, or build domain depth in finance, healthcare or retail analytics.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Exploratory analysis of Punjab crop data",
        text: "Clean public agriculture data, test hypotheses on yields and visualise district-wise patterns in a notebook.",
        tags: ["Pandas", "Statistics", "EDA"],
      },
      {
        stage: "Real-world challenge",
        title: "Customer churn prediction",
        text: "Build and compare classification models to predict which telecom customers are likely to leave, and explain why.",
        tags: ["scikit-learn", "Classification"],
      },
      {
        stage: "Live client brief",
        title: "Demand forecast for a Jalandhar sports-goods exporter",
        text: "Forecast seasonal order volumes from past sales so the client can plan production and raw material.",
        tags: ["Forecasting", "Python", "XGBoost"],
      },
      {
        stage: "Portfolio capstone",
        title: "Deployed ML web app",
        text: "Train a model on a problem you choose, deploy it with Streamlit and document it on GitHub.",
        tags: ["Streamlit", "Deployment", "GitHub"],
      },
    ],
    faqs: [
      {
        q: "What are the prerequisites?",
        a: "Comfort with basic algebra and logical thinking is enough. Prior Python helps but is not required — the first phase covers Python and statistics from scratch.",
      },
      {
        q: "What laptop do I need?",
        a: "A laptop with 8 GB RAM (16 GB preferred) and any modern OS works. Heavier deep-learning work runs on Google Colab, so you do not need a dedicated GPU.",
      },
      {
        q: "Is this accepted for university industrial training?",
        a: "Yes. B.Tech, BCA, MCA and M.Sc students from PTU, GNDU, Panjab University and other universities complete industrial training here with a live project, report and internship letter.",
      },
      {
        q: "How is this different from data analytics or AI training?",
        a: "Data analytics focuses on reporting and dashboards. Data science adds statistics and machine learning to predict outcomes. Our AI programs go further into generative and agentic AI.",
      },
    ],
    related: ["data-analytics", "artificial-intelligence", "agentic-ai"],
  },

  /* ───────── 4. Cyber Security ───────── */
  {
    slug: "cyber-security",
    navLabel: "Cyber Security",
    title: "Cyber Security Training",
    icon: "ShieldCheck",
    tag: "Ethical hacking",
    tagline: "Learn networking, ethical hacking and defence hands-on in authorised labs — and build the skills to protect real organisations.",
    level: "Beginner",
    eligibility: "12th pass or graduate; basic computer knowledge — networking taught from scratch.",
    overview: [
      "This industrial training builds cyber security skills from the ground up: networking, Linux, web security, ethical hacking and incident response. Every offensive technique is practised only in authorised, isolated lab environments, alongside the defensive skills to detect and stop attacks.",
      "Banks, IT companies, hospitals and government bodies across North India face rising cyber threats and need trained defenders. With live projects and an internship option on your track, you graduate with lab reports, audit write-ups and a clear path towards industry certifications.",
    ],
    concepts: [
      "Networking fundamentals",
      "Linux for security",
      "Ethical hacking",
      "Web application security",
      "Vulnerability assessment",
      "SOC & SIEM basics",
      "Incident response",
      "Security compliance",
    ],
    phases: [
      {
        title: "Networking & systems",
        summary: "Build the networking and operating-system foundations that every security role depends on.",
        topics: [
          "OSI & TCP/IP models",
          "Subnetting, ports & protocols",
          "Linux command line & permissions",
          "Windows & Active Directory basics",
          "Cryptography fundamentals",
        ],
        outcome: "You can explain how networks and systems work and where they are weak.",
      },
      {
        title: "Ethical hacking & VAPT",
        summary: "Practise reconnaissance, scanning and exploitation strictly in authorised lab environments.",
        topics: [
          "Reconnaissance & footprinting",
          "Scanning with Nmap",
          "Vulnerability assessment with Nessus",
          "OWASP Top 10 & Burp Suite",
          "Exploitation with Metasploit in labs",
        ],
        outcome: "You can run an authorised vulnerability assessment and write a professional report.",
      },
      {
        title: "Defence & response",
        summary: "Monitor, detect and respond to threats the way a security operations centre does.",
        topics: [
          "Firewalls, IDS & IPS",
          "SIEM monitoring & log analysis",
          "Traffic analysis with Wireshark",
          "Incident response & basic forensics",
          "Security policies, ISO 27001 & compliance",
        ],
        outcome: "You can detect suspicious activity and follow an incident-response process.",
      },
    ],
    impact:
      "Cyber security skills are in demand across every sector that stores data, preparing you for SOC, VAPT and security operations roles and a long-term path into specialised security careers.",
    audience: [
      { title: "After 12th", text: "Start a defence-focused tech career with networking taught from scratch.", icon: "GraduationCap" },
      { title: "Graduates & final-year students", text: "Complete industrial training with lab reports, an audit project and a report.", icon: "BookOpen" },
      { title: "Working professionals", text: "Move from IT support, networking or development into security roles.", icon: "Briefcase" },
      { title: "Business owners & freelancers", text: "Protect your business data and offer basic security audits to clients.", icon: "Lock" },
      { title: "Career restarters", text: "Return with a specialist skill that organisations actively need.", icon: "Rocket" },
      { title: "Self-taught learners", text: "Turn CTF curiosity into structured, ethical, mentor-guided lab practice.", icon: "Terminal" },
    ],
    tools: [
      { name: "Kali Linux", use: "Security testing distribution" },
      { name: "Nmap", use: "Network discovery & port scanning" },
      { name: "Wireshark", use: "Network packet analysis" },
      { name: "Burp Suite", use: "Web application security testing" },
      { name: "Metasploit", use: "Authorised exploitation in labs" },
      { name: "Nessus", use: "Vulnerability scanning & reporting" },
      { name: "OWASP ZAP", use: "Automated web vulnerability scanning" },
      { name: "Splunk", use: "SIEM log monitoring & alerts" },
      { name: "VirtualBox", use: "Isolated virtual lab environments" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "SOC analyst (L1), security analyst, VAPT analyst, junior penetration tester, network security engineer and IT security executive are common entry roles.",
      },
      {
        q: "How does a cyber security career grow?",
        a: "Professionals move from L1 SOC or VAPT roles into penetration testing, threat hunting, cloud security or security architecture, and later into security management and consulting.",
      },
      {
        q: "Can I freelance in cyber security?",
        a: "Yes, with experience. Security audits for small businesses and authorised bug-bounty programs on platforms like HackerOne and Bugcrowd are common routes — always with written permission and within scope.",
      },
      {
        q: "Who hires cyber security professionals in North India?",
        a: "IT and managed-security firms in Mohali, Chandigarh and Delhi NCR, banks and fintechs, hospitals, telecom companies, government and defence contractors — plus remote SOC teams worldwide.",
      },
      {
        q: "What should I learn next?",
        a: "Prepare for certifications such as CompTIA Security+, CEH or OSCP, and specialise in cloud security, digital forensics or advanced penetration testing.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Build your own security lab",
        text: "Set up isolated Kali and target virtual machines, configure networking and document a safe lab setup.",
        tags: ["VirtualBox", "Kali Linux"],
      },
      {
        stage: "Real-world challenge",
        title: "Web app vulnerability assessment",
        text: "Test a deliberately vulnerable web app in the lab for OWASP Top 10 issues and report fixes.",
        tags: ["Burp Suite", "OWASP", "Reporting"],
      },
      {
        stage: "Live client brief",
        title: "Security audit for a Jalandhar school network",
        text: "Under written authorisation, assess network hygiene, passwords and exposed services, then present practical fixes.",
        tags: ["Nmap", "Nessus", "Audit"],
      },
      {
        stage: "Portfolio capstone",
        title: "SOC detection & incident report",
        text: "Monitor simulated attacks in a SIEM, investigate alerts and write a full incident-response report.",
        tags: ["Splunk", "Wireshark", "Incident response"],
      },
    ],
    faqs: [
      {
        q: "Do I need programming or networking knowledge first?",
        a: "No. We teach networking and Linux from scratch. Basic scripting is introduced during the training, and curiosity plus patience matter more than prior experience.",
      },
      {
        q: "What laptop do I need?",
        a: "A laptop with 8 GB RAM (16 GB preferred) and virtualisation support lets you run lab VMs at home. Fully equipped lab systems are also available at our branches.",
      },
      {
        q: "Is this accepted for university industrial training?",
        a: "Yes. B.Tech, BCA, MCA and diploma students from PTU, GNDU, Panjab University and other universities complete industrial training here with a project report and internship letter.",
      },
      {
        q: "Is ethical hacking legal, and how is this different from a CEH course?",
        a: "Testing systems is legal only with written permission, so all offensive practice happens in our authorised labs. Unlike exam-only prep, this training adds live projects, defence skills and an internship option.",
      },
    ],
    related: ["cloud-computing", "full-stack-development", "artificial-intelligence"],
  },
];
