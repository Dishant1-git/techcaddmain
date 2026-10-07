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
    tagline: "Learn how modern brands grow online with SEO, Google Ads, social media and Meta Ads, content, email, GA4 analytics and AI-assisted workflows — practised on hands-on campaign tasks.",
    level: "Beginner",
    eligibility: "12th pass, any stream — no coding or marketing background needed.",
    overview: [
      "This hands-on training shows you how modern brands bring in customers, leads and sales through the internet. It covers SEO, Google Ads, social media marketing, Meta Ads, content marketing, email marketing, GA4 analytics and AI-assisted marketing workflows, built step by step from the basics.",
      "Instead of only theory, you build keyword and content plans, set up ad accounts, work on campaign exercises and learn to read performance data so you can make better decisions. Across Punjab, where startups, exporters and local brands are moving quickly towards online customers, these skills support a marketing job, freelancing or faster growth for your own business.",
    ],
    concepts: [
      "SEO & keyword research",
      "Google Ads (PPC)",
      "Social media & Meta Ads",
      "Content & copywriting",
      "Email marketing & automation",
      "Video & YouTube SEO",
      "GA4 analytics & reporting",
      "Generative AI for marketing",
    ],
    phases: [
      {
        title: "Fundamentals & SEO",
        summary: "Understand how digital channels work together, then learn how search brings customers to a website.",
        topics: [
          "Marketing funnel & customer journey",
          "Building a digital strategy",
          "Website planning & structure",
          "Keyword research, on-page & off-page SEO",
          "Technical SEO basics & local SEO with Google Business Profile",
        ],
        outcome: "You can draft a simple marketing plan, audit a website and build a keyword map.",
      },
      {
        title: "Paid ads, social & content",
        summary: "Run search and social campaigns with clear structure and tracking, and create the content and emails that support them.",
        topics: [
          "Google Ads search campaigns, ad copy & bidding basics",
          "Conversion tracking & optimisation",
          "Facebook, Instagram & LinkedIn marketing",
          "Meta Ads Manager & audience targeting",
          "Content strategy, copywriting & email sequences",
        ],
        outcome: "You can set up and review a Google Ads campaign, run a basic paid social campaign and build a lead-nurturing email flow.",
      },
      {
        title: "Video, analytics & AI",
        summary: "Add video to your channel mix, turn campaign data into decisions and speed up routine work with AI tools.",
        topics: [
          "Video planning, basic editing & YouTube optimisation",
          "Google Analytics (GA4) & conversion tracking",
          "Reading campaign data & reporting",
          "AI tools for research, content drafts & ad copy ideas",
          "Live project & portfolio review",
        ],
        outcome: "You can publish an optimised video, turn campaign numbers into a clear report and use AI tools without losing originality.",
      },
    ],
    impact:
      "Digital marketing is one of the few skills where results show up in numbers, and the same training can lead to an agency or in-house role, freelancing, or growing your own or your family business online.",
    audience: [
      { title: "12th-pass students", text: "Build a career skill early, alongside or after your studies, with basic computer knowledge.", icon: "GraduationCap" },
      { title: "Graduates & postgraduates", text: "Add a practical, job-ready marketing skill to a degree from any stream.", icon: "BookOpen" },
      { title: "Working professionals", text: "Move from sales, operations, HR, content or support into a marketing role.", icon: "Briefcase" },
      { title: "Business owners", text: "Run your own campaigns instead of depending entirely on an agency.", icon: "ShoppingCart" },
      { title: "Job switchers", text: "Change direction with a portfolio of real campaign work to show employers.", icon: "Rocket" },
      { title: "Freelancers", text: "Designers, writers and video editors adding SEO, social media or ad management as services.", icon: "Sparkles" },
    ],
    tools: [
      { name: "Google Search Console", use: "Search performance & indexing" },
      { name: "Semrush", use: "Keyword & competitor research" },
      { name: "Google Business Profile", use: "Local SEO & map listings" },
      { name: "Google Ads", use: "Search campaigns & paid search" },
      { name: "Meta Ads Manager", use: "Facebook & Instagram advertising" },
      { name: "Google Analytics 4", use: "Website & conversion analytics" },
      { name: "WordPress", use: "Website basics & content publishing" },
      { name: "Canva", use: "Social creatives & ad designs" },
      { name: "ChatGPT", use: "Research, content drafts & ad copy ideas" },
      { name: "Jasper", use: "AI-assisted copy drafts" },
      { name: "YouTube Studio", use: "Video publishing & optimisation" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Digital marketing executive, SEO specialist, PPC specialist, social media manager, content marketer, email marketer and analytics associate are the typical roles this training prepares you for.",
      },
      {
        q: "How does a digital marketing career grow?",
        a: "Most people begin in an executive role across channels, then specialise in an area such as SEO, performance marketing, content or analytics. Growth follows experience, measurable results and a strong portfolio, and some go on to freelance or run their own agency.",
      },
      {
        q: "Can I freelance after this training?",
        a: "Yes. Many learners offer SEO, social media management, content writing or ad setup as freelancers. The training covers portfolio building, client communication and proposals, but finding your first clients takes consistent effort.",
      },
      {
        q: "Who hires digital marketers in North India?",
        a: "Almost every business now needs customers online. In Punjab that includes manufacturers and exporters in Ludhiana and Amritsar and IT firms in Mohali; Delhi NCR adds agencies, media houses, fintech and e-commerce, and remote roles with companies in other cities are common too.",
      },
      {
        q: "What should I learn next?",
        a: "Go deeper into one specialisation such as performance marketing or analytics, keep up with AI-assisted workflows as platforms change, and keep adding real campaign work to your portfolio.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Website audit & keyword map",
        text: "Audit a small business website, research keywords and suggest practical on-page and local SEO fixes.",
        tags: ["SEO", "Keyword research", "Search Console"],
      },
      {
        stage: "Real-world challenge",
        title: "Content calendar & paid social campaign",
        text: "Plan a month of social content for a local brand and structure a basic Meta Ads campaign with audience targeting.",
        tags: ["Social media", "Meta Ads", "Canva"],
      },
      {
        stage: "Live client brief",
        title: "Search campaign & lead-nurturing flow",
        text: "Work from a business brief: set up a Google Ads search campaign with conversion tracking and write a simple email sequence for new leads.",
        tags: ["Google Ads", "Email", "Conversion tracking"],
      },
      {
        stage: "Portfolio capstone",
        title: "Live project & performance report",
        text: "Bring SEO, paid ads, content and video together for one brand, then present a GA4-based report with recommendations at your portfolio review.",
        tags: ["GA4", "Reporting", "Portfolio"],
      },
    ],
    faqs: [
      {
        q: "Do I need a technical or marketing background?",
        a: "No. Basic computer and internet knowledge is enough. The training starts from the basics and builds step by step, and regular weekly practice matters more than your starting level.",
      },
      {
        q: "What do I need to take part?",
        a: "A laptop or desktop, a stable internet connection, comfort reading English and Hindi or Punjabi, and the habit of practising what you learn each week.",
      },
      {
        q: "Which tools will I work with?",
        a: "Google Ads, Meta Ads Manager, Google Analytics 4, Google Search Console, Semrush, WordPress, Canva and AI tools such as ChatGPT. Tool lists are updated as platforms change, and the trainer uses the current interface of each platform.",
      },
      {
        q: "Can I learn online, or do I have to attend in person?",
        a: "Either. You can join live online classes with trainer interaction, assignments and recorded revision support, or attend classroom sessions at the Jalandhar centre if you live nearby.",
      },
      {
        q: "Is this useful for marketing my own business?",
        a: "Yes. Owners can apply each module directly to their own brand, from local SEO and Google Business Profile to Meta Ads and email campaigns, and learn to plan budgets and measure results instead of depending fully on an agency.",
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
    tagline: "Collect, clean, analyse and present business data with Excel, SQL, Power BI, Tableau and Python — on real datasets and hands-on projects.",
    level: "Beginner",
    eligibility: "12th pass or graduate, any stream — comfort with basic maths helps.",
    overview: [
      "Every business runs on numbers, and people who can turn raw data into clear decisions are in demand across industries. This training teaches you to collect, clean, analyse and present data with the tools employers ask for: Excel, SQL, Power BI, Tableau and Python.",
      "The curriculum follows the way analysts actually work: get the data, clean it, analyse it, visualise it and explain it. You learn on real datasets rather than theory alone, each module ends with a practical task, and you finish with dashboards and reports you can show in interviews.",
    ],
    concepts: [
      "Advanced Excel",
      "SQL queries",
      "Statistics for analysts",
      "Python with Pandas & NumPy",
      "Data cleaning",
      "Power BI & Tableau dashboards",
      "Presenting insights",
    ],
    phases: [
      {
        title: "Foundations, Excel & SQL",
        summary: "Learn how analysts frame a business question, then build the spreadsheet and query skills they use every day.",
        topics: [
          "Types of analytics & the analyst’s workflow",
          "Data types, sources & asking the right business question",
          "Excel data cleaning, formulas, lookups & conditional logic",
          "Pivot tables, pivot charts & what-if analysis",
          "SQL queries, joins, subqueries & window functions",
        ],
        outcome: "You can clean a spreadsheet, summarise it and write SQL queries that answer business questions.",
      },
      {
        title: "Statistics & Python",
        summary: "Read numbers correctly so you do not draw wrong conclusions, then use Python to explore larger and messier datasets.",
        topics: [
          "Mean, median, variance & distributions",
          "Correlation, hypothesis testing & sampling",
          "Python basics with Pandas & NumPy",
          "Handling missing values & duplicates",
          "Exploratory analysis with Matplotlib & Seaborn",
        ],
        outcome: "You can interpret statistics sensibly and explore a messy dataset in Python.",
      },
      {
        title: "Dashboards & capstone",
        summary: "Build interactive dashboards and complete an end-to-end business case study you can present.",
        topics: [
          "Interactive dashboards & KPI reports",
          "Data modelling & DAX basics in Power BI",
          "Calculated fields in Tableau & choosing the right chart",
          "Case studies on sales, marketing, HR, finance or operations data",
          "Capstone project & presenting insights in plain language",
        ],
        outcome: "You can run an end-to-end analysis, build a dashboard and explain what it means to non-technical people.",
      },
    ],
    impact:
      "Analytics is useful in almost every industry, so these skills make you better at a current role in sales, finance, HR, operations or marketing and open a path into analyst work, with data science as a later step.",
    audience: [
      { title: "Final-year & 12th-pass learners", text: "Get an early start alongside college, as long as you are ready to practise regularly.", icon: "GraduationCap" },
      { title: "Graduates & postgraduates", text: "Any stream, from commerce to engineering, wanting a skill valued across industries.", icon: "BookOpen" },
      { title: "Working professionals", text: "Decide from data instead of guesswork in sales, finance, operations, HR or marketing.", icon: "Briefcase" },
      { title: "Business owners & managers", text: "Track sales, inventory and customer trends on your own dashboards.", icon: "ChartBar" },
      { title: "Job switchers", text: "A structured path from non-technical or support roles into analytics.", icon: "Rocket" },
      { title: "Freelancers", text: "Offer reporting, dashboard and data-cleaning services to clients.", icon: "Sparkles" },
    ],
    tools: [
      { name: "Microsoft Excel", use: "Cleaning, formulas & pivot analysis" },
      { name: "Google Sheets", use: "Spreadsheet analysis & sharing" },
      { name: "SQL (MySQL or PostgreSQL)", use: "Querying relational databases" },
      { name: "Python", use: "Exploring & analysing datasets" },
      { name: "Pandas & NumPy", use: "Data handling in Python" },
      { name: "Matplotlib & Seaborn", use: "Charts for exploratory analysis" },
      { name: "Power BI", use: "Dashboards, data modelling & DAX basics" },
      { name: "Tableau", use: "Interactive visual reports" },
      { name: "Jupyter Notebook", use: "Practice environment for analysis" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, BI Analyst, Marketing Analyst and Operations Analyst are the roles this training prepares you for.",
      },
      {
        q: "How does a data analytics career grow?",
        a: "Over time many analysts move towards senior analyst or analytics manager roles, or build further technical depth for data engineering or data science.",
      },
      {
        q: "Can I freelance as a data analyst?",
        a: "Yes. Common services are data cleaning, Excel automation, dashboard building and monthly reporting for small businesses and online clients. Strong portfolio projects help you win your first clients.",
      },
      {
        q: "Who hires data analysts in North India?",
        a: "In Punjab, manufacturing, hosiery, sports goods and export units need analysts for production, cost and sales reporting, and Mohali’s IT and startup space hires for reporting roles. Elsewhere in North India, logistics, automobile, e-commerce, fintech, retail and BPO employers hire for MIS, operations and marketing analytics, and remote analyst roles are open too.",
      },
      {
        q: "What should I learn next?",
        a: "Go deeper into SQL, Power BI or Python, then consider data science or data engineering, depending on where you want your technical depth to grow.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Sales report in Excel",
        text: "Clean a raw sales sheet, build pivot summaries and charts, and turn them into a one-page KPI dashboard.",
        tags: ["Excel", "Pivot tables"],
      },
      {
        stage: "Real-world challenge",
        title: "Business questions with SQL",
        text: "Query a relational database with joins, aggregates and window functions to answer sales and inventory questions and prepare the data for reporting.",
        tags: ["SQL", "Data cleaning", "Reporting"],
      },
      {
        stage: "Live client brief",
        title: "KPI dashboard for a business team",
        text: "Take a brief on sales, marketing, HR, finance or operations data, model it and build an interactive dashboard with clear KPIs.",
        tags: ["Power BI", "Tableau", "Data modelling"],
      },
      {
        stage: "Portfolio capstone",
        title: "End-to-end business case study",
        text: "Clean and explore a dataset in Python, visualise the findings and present recommendations in plain language.",
        tags: ["Python", "Pandas", "Presentation"],
      },
    ],
    faqs: [
      {
        q: "Do I need coding or a strong maths background?",
        a: "No. SQL and Python are taught from the basics, and the early modules rely on Excel and visual tools. You only need to be comfortable with basic computer use and curious about numbers.",
      },
      {
        q: "What do I need to take part?",
        a: "A laptop or desktop, a stable internet connection if you learn online, and willingness to practise on real datasets.",
      },
      {
        q: "Which tools will I learn?",
        a: "Excel, Google Sheets, SQL, Python with Pandas, NumPy, Matplotlib and Seaborn, Power BI, Tableau and Jupyter Notebook — tools commonly asked for in analyst job listings.",
      },
      {
        q: "Can I learn online, or do I have to attend in person?",
        a: "Either. Live online classes and classroom learning at the Jalandhar centre are both available, so you can pick what suits your schedule and location.",
      },
      {
        q: "How is data analytics different from data science?",
        a: "Data analytics mainly studies past data to explain what happened, while data science goes further and builds models to predict what may happen next. In practice the two overlap, and analytics needs no coding background to begin.",
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
    tagline: "Collect, clean, analyse and visualise data, then build predictive models for real business problems with Python, SQL, statistics and machine learning.",
    level: "Intermediate",
    eligibility: "Graduates or final-year students; basic maths and logic recommended.",
    overview: [
      "This practical, career-focused training covers the full data science workflow, from framing a business question to presenting insights. You learn to collect, clean, analyse and visualise data, then build predictive models, using Python, SQL, statistics, machine learning and modern visualisation tools.",
      "The curriculum starts from the fundamentals, so it works for technical and non-technical backgrounds alike, and each module builds on the one before it. Every major topic is followed by hands-on work on real-style datasets, leading to portfolio projects you can show to employers or clients.",
    ],
    concepts: [
      "Python for data",
      "Statistics & probability",
      "SQL & databases",
      "Data cleaning & EDA",
      "Feature engineering",
      "Visualisation & dashboards",
      "Machine learning",
      "Model evaluation",
    ],
    phases: [
      {
        title: "Python, statistics & SQL",
        summary: "Learn the data science lifecycle and the programming, statistics and query skills it rests on.",
        topics: [
          "Data science lifecycle, data types & basic data ethics",
          "Python basics: variables, loops, functions & data structures",
          "NumPy & Pandas in Jupyter Notebook",
          "Probability, hypothesis testing & confidence intervals",
          "SQL queries, joins, subqueries & window functions",
        ],
        outcome: "You can load, query and summarise data and back your findings with statistics.",
      },
      {
        title: "Cleaning, analysis & visualisation",
        summary: "Prepare real-style data, find the patterns in it and present them so managers and clients understand.",
        topics: [
          "Missing values, duplicates & outliers",
          "Feature engineering & data preparation",
          "Finding patterns & trends before modelling",
          "Charts with Matplotlib & Seaborn",
          "Dashboards in Power BI or Tableau & data storytelling",
        ],
        outcome: "You can prepare a messy dataset, explore it and present what it shows in plain language.",
      },
      {
        title: "Machine learning & capstone",
        summary: "Build, evaluate and explain supervised and unsupervised models, then complete end-to-end projects.",
        topics: [
          "Linear & logistic regression",
          "Decision trees & random forests",
          "Clustering & customer segmentation",
          "Model evaluation, cross-validation & avoiding overfitting",
          "Capstone project & GitHub portfolio",
        ],
        outcome: "You can build and evaluate a basic machine learning model and defend your approach.",
      },
    ],
    impact:
      "Businesses in almost every sector now rely on data for decisions, so these skills fit analyst and junior data science roles and form a strong base for machine learning, deep learning and artificial intelligence.",
    audience: [
      { title: "12th-pass students", text: "An early start if you are comfortable with basic maths and ready to learn step by step.", icon: "GraduationCap" },
      { title: "Graduates & postgraduates", text: "Technical and non-technical streams alike, adding a skill employers actively look for.", icon: "BookOpen" },
      { title: "Working professionals", text: "Use data for better decisions in IT, finance, marketing, operations or HR, or move into analytics.", icon: "Briefcase" },
      { title: "Business owners", text: "Understand your sales, customer and inventory data without depending on others.", icon: "Target" },
      { title: "Job switchers", text: "A structured path into data analyst, business analyst or junior data scientist roles.", icon: "Rocket" },
      { title: "Freelancers", text: "Offer analytics, dashboards and reporting services to clients.", icon: "BrainCircuit" },
    ],
    tools: [
      { name: "Python", use: "Core data science language" },
      { name: "Jupyter Notebook", use: "Writing & running analysis code" },
      { name: "NumPy & Pandas", use: "Loading, filtering & transforming data" },
      { name: "Matplotlib & Seaborn", use: "Charts & statistical visualisation" },
      { name: "Power BI / Tableau", use: "Interactive dashboards" },
      { name: "SQL (MySQL or PostgreSQL)", use: "Pulling data from relational databases" },
      { name: "Scikit-learn", use: "Machine learning models & evaluation" },
      { name: "Microsoft Excel", use: "Quick spreadsheet analysis" },
      { name: "Git & GitHub", use: "Version control & project portfolio" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Data analyst, business analyst, junior data scientist, BI developer, reporting analyst and machine learning associate are the roles this training prepares you for.",
      },
      {
        q: "How does a data science career grow?",
        a: "With experience you can grow into senior data scientist, analytics manager or AI specialist roles.",
      },
      {
        q: "Can I freelance in data science?",
        a: "Yes. Many learners offer data cleaning, dashboard creation, reporting and analysis on freelance platforms. A portfolio of two or three solid projects makes it much easier to win your first clients.",
      },
      {
        q: "Who hires data scientists in North India?",
        a: "In Punjab, manufacturing, exports and agri-tech use analytics for demand planning, quality control and supply chain decisions, and the Mohali IT cluster hires analysts. Across North India, e-commerce, logistics, automobile, fintech, tourism and pharma businesses need people who understand data, and remote roles let you apply beyond your home state.",
      },
      {
        q: "What should I learn next?",
        a: "Data science connects directly to machine learning, deep learning and artificial intelligence. Once you are comfortable with Python, statistics and modelling, moving into these advanced areas becomes much easier.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Exploratory analysis of a sales dataset",
        text: "Clean a real-style dataset in Pandas, test simple hypotheses and visualise the patterns in a notebook.",
        tags: ["Pandas", "Statistics", "EDA"],
      },
      {
        stage: "Real-world challenge",
        title: "Customer churn prediction",
        text: "Build and compare classification models that predict which customers are likely to leave, and explain the result.",
        tags: ["Scikit-learn", "Classification"],
      },
      {
        stage: "Live client brief",
        title: "Customer segmentation & dashboard",
        text: "Work from a business brief: query the data with SQL, group customers with clustering and present the segments in a dashboard.",
        tags: ["SQL", "Clustering", "Dashboard"],
      },
      {
        stage: "Portfolio capstone",
        title: "End-to-end sales forecasting project",
        text: "Frame the question, prepare the data, build and evaluate a forecasting model, and publish the work on GitHub.",
        tags: ["Python", "Regression", "GitHub"],
      },
    ],
    faqs: [
      {
        q: "Do I need programming knowledge to start?",
        a: "No. You can start as a complete beginner: the training begins with Python basics and builds step by step to statistics, SQL and machine learning. Regular practice matters more than prior experience.",
      },
      {
        q: "What do I need to take part?",
        a: "A laptop with a stable internet connection, basic school-level maths and curiosity about how data drives business decisions.",
      },
      {
        q: "Which tools will I work with?",
        a: "Python, Jupyter Notebook, NumPy, Pandas, Matplotlib, Seaborn, SQL, Scikit-learn, Excel, Git and GitHub, along with a dashboard tool such as Power BI or Tableau.",
      },
      {
        q: "Can I learn online, or do I have to attend in Jalandhar?",
        a: "You can choose live online classes or classroom learning at the Jalandhar centre. Online learners attend the same live sessions, get doubt support and complete the same projects.",
      },
      {
        q: "How is data science different from data analytics?",
        a: "Data analytics mainly studies past data to explain what happened, while data science goes further and builds models to predict what may happen next. In practice the two overlap, and this training covers both, so you can pursue either type of role.",
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
    tagline: "Build cyber security skills from the fundamentals — networks, operating systems, threats, ethical hacking, web and network security, monitoring and incident response — in authorised learning environments.",
    level: "Beginner",
    eligibility: "12th pass or graduate; basic computer knowledge — networking taught from scratch.",
    overview: [
      "This training helps you understand how digital systems, networks, applications and data are protected from security threats. It combines foundational concepts with practical skills across network security, operating-system security, authentication, vulnerabilities, security monitoring, ethical security practices and common security tools.",
      "The path is gradual: you first learn how systems work, then how vulnerabilities occur and how those systems can be protected. Security testing is practised only in authorised learning environments, and the fundamentals you build support further specialisation in areas such as security operations, network security, ethical hacking, vulnerability assessment and application security.",
    ],
    concepts: [
      "Cyber security fundamentals",
      "Networking fundamentals",
      "Operating-system security",
      "Threats & vulnerabilities",
      "Ethical hacking fundamentals",
      "Web & application security",
      "Network security",
      "Monitoring & incident response",
    ],
    phases: [
      {
        title: "Security, networking & systems",
        summary: "Build the security, networking and operating-system foundations that every security role depends on.",
        topics: [
          "Confidentiality, integrity & availability",
          "IP addressing, ports & protocols",
          "TCP/IP, DNS, HTTP & HTTPS",
          "User accounts, file permissions & access control",
          "Basic system-hardening principles",
        ],
        outcome: "You can explain how devices communicate and where security controls and weaknesses can exist.",
      },
      {
        title: "Threats, ethical hacking & web security",
        summary: "Understand how weaknesses arise and how authorised security assessments are structured and documented.",
        topics: [
          "Malware, phishing & social engineering",
          "Password attacks & common attack patterns",
          "Reconnaissance & information gathering",
          "Vulnerability identification & reporting findings",
          "Authentication, session security & input validation",
        ],
        outcome: "You can recognise common threats and document findings from an authorised assessment responsibly.",
      },
      {
        title: "Network defence, monitoring & tools",
        summary: "Protect network infrastructure, spot suspicious activity and learn what each security tool is designed to do.",
        topics: [
          "Firewalls, access controls & network segmentation",
          "Intrusion detection & prevention concepts",
          "Logs, events & suspicious activity",
          "Incident-response fundamentals & evidence preservation",
          "Wireshark, Nmap, Burp Suite, Metasploit & SIEM concepts",
        ],
        outcome: "You can describe how incidents are identified, analysed, documented and responded to, and pick a suitable tool for an authorised task.",
      },
    ],
    impact:
      "Cyber security is relevant to every organisation that depends on digital systems, and a strong foundation lets you move towards security operations, vulnerability assessment, network security or application security as you gain experience.",
    audience: [
      { title: "12th-pass students & beginners", text: "Start with computing and networking fundamentals before moving into specialised security topics.", icon: "GraduationCap" },
      { title: "Graduates & postgraduates", text: "Connect existing technical knowledge with security concepts, or build the fundamentals from another discipline.", icon: "BookOpen" },
      { title: "Working professionals", text: "IT, system administration, networking, development and support staff adding security knowledge.", icon: "Briefcase" },
      { title: "Business owners", text: "Recognise weak passwords, insecure access and phishing, and make informed decisions about protecting business data.", icon: "Lock" },
      { title: "Job switchers & career changers", text: "A structured route into security in place of disconnected tutorials.", icon: "Rocket" },
      { title: "Freelancers", text: "Understand common risks in the websites, applications and networks you work on for clients.", icon: "Terminal" },
    ],
    tools: [
      { name: "Linux", use: "Security-oriented system & command-line work" },
      { name: "Kali Linux", use: "Security-focused Linux environment" },
      { name: "Wireshark", use: "Network traffic analysis" },
      { name: "Nmap", use: "Network discovery & authorised assessment" },
      { name: "Burp Suite", use: "Web application security testing" },
      { name: "Metasploit Framework", use: "Authorised security testing in labs" },
      { name: "SIEM concepts", use: "Security-event monitoring & analysis" },
    ],
    outcomes: [
      {
        q: "Which job roles can I apply for?",
        a: "Depending on skills, experience and specialisation, entry-level learners can explore roles such as Cybersecurity Analyst, Security Analyst, SOC Analyst, Network Security Analyst, Vulnerability Assessment Analyst, Junior Penetration Tester and Information Security Associate.",
      },
      {
        q: "How does a cyber security career grow?",
        a: "With additional experience and specialisation, professionals move towards penetration testing, cloud security, application security, incident response, digital forensics, security engineering or security architecture.",
      },
      {
        q: "Can I freelance in cyber security?",
        a: "Yes, with experience. Authorised freelance services include security assessments, vulnerability assessments, website-security reviews, security documentation and consulting. Such work must always be done with clear authorisation from the system owner.",
      },
      {
        q: "Who hires cyber security professionals in North India?",
        a: "Cyber security skills are relevant across IT services, banking and fintech, e-commerce, healthcare, education, manufacturing, telecommunications and government-related environments. In Punjab, the IT, manufacturing, export, services and startup ecosystems around Jalandhar, Ludhiana, Amritsar and Mohali increasingly depend on secure digital systems.",
      },
      {
        q: "What should I learn next?",
        a: "After the fundamentals, specialise according to your interests: cloud security, application security, penetration testing, SOC and incident response, digital forensics or security engineering.",
      },
    ],
    projects: [
      {
        stage: "Fundamentals build",
        title: "Network mapping & traffic analysis",
        text: "Map hosts, ports and services on a practice network and study the traffic to see how protocols behave.",
        tags: ["Nmap", "Wireshark"],
      },
      {
        stage: "Real-world challenge",
        title: "Web application security assessment",
        text: "Assess a practice web application in an authorised lab for common web vulnerabilities and write up the fixes.",
        tags: ["Burp Suite", "Web security", "Reporting"],
      },
      {
        stage: "Live client brief",
        title: "Authorised vulnerability assessment report",
        text: "Work to an agreed scope with written authorisation: identify weaknesses, rate the risk and document the findings responsibly.",
        tags: ["Vulnerability assessment", "Kali Linux", "Documentation"],
      },
      {
        stage: "Portfolio capstone",
        title: "Log analysis & incident report",
        text: "Review logs and events for suspicious activity, trace what happened and write an incident-response report.",
        tags: ["Log analysis", "SIEM concepts", "Incident response"],
      },
    ],
    faqs: [
      {
        q: "Do I need a computer science degree or prior security knowledge?",
        a: "No. A computer science degree helps with technical concepts but is not required. Beginners start with computers, networking and operating systems, and learners without a technical background may need extra time on these fundamentals.",
      },
      {
        q: "Is cyber security the same as ethical hacking?",
        a: "No. Ethical hacking is one part of the broader field. Cyber security also covers security operations, network security, application security, vulnerability management, incident response, risk management and defensive security.",
      },
      {
        q: "Which tools are used in the training?",
        a: "Tools and technologies such as Linux, Kali Linux, Wireshark, Nmap, Burp Suite and Metasploit Framework, along with SIEM concepts. The exact tools can vary with the current curriculum and practical requirements.",
      },
      {
        q: "How is hands-on security testing practised?",
        a: "Only in authorised learning environments and on systems where you have explicit permission to test. Documenting findings and responsible disclosure are part of the training.",
      },
      {
        q: "Can I learn cyber security online?",
        a: "Yes. Cyber security can be learned online through structured instruction, demonstrations, practical exercises and authorised security labs. Classroom learning is an option at the Jalandhar centre; confirm current batches before enrolling.",
      },
    ],
    related: ["cloud-computing", "full-stack-development", "artificial-intelligence"],
  },
];
