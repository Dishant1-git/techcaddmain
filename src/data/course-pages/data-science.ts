import type { CoursePage } from "./types";

/* /courses/data-science — long-form landing copy supplied by the client (used as given, section by section; the brand is
   spelled "Techcadd" in this text and kept that way).
   - FAQ 17 ("recognised by the government?") is left out: the supplied text says to remove it unless a provable recognition
     is named. The supplied FAQ numbering also skips 4.
   - `duration` and `level` are the previous values — confirm with the client.
   CHECK WITH THE CLIENT before launch:
   - Reviews: the ten reviewers (names, cities, roles) are identical to the ten on /courses/google-ads,
     /courses/artificial-intelligence, /courses/machine-learning and /courses/deep-learning. Confirm they are real.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim — keep only if it can be supported. */

const roles = ["Data analyst", "Business analyst", "Junior data scientist", "BI developer", "Reporting analyst", "Machine learning associate"];

export const dataScience: CoursePage = {
  slug: "data-science",
  title: "Data Science Course",
  navLabel: "Data Science",
  group: "ai-data",
  icon: "ChartLine",
  tagline:
    "Learn to collect, clean, analyse and visualise data, then build predictive models that solve real business problems, using Python, SQL, statistics, machine learning and modern visualisation tools.",
  level: "Intermediate",
  duration: "5–6 Months",
  eligibility: "Basic school-level maths; no prior coding experience needed",
  overview: [
    "The data science course at Techcadd is a practical, career-focused program for graduates, working professionals, job switchers and freelancers who want to build skills in one of India's most in-demand fields. You will learn how to collect, clean, analyse and visualise data, then build predictive models that solve real business problems, using Python, SQL, statistics, machine learning and modern visualisation tools.",
    "Designed for learners across Punjab and the rest of North India, this data science course combines live online classes with classroom learning at our Jalandhar centre. Whether you come from a technical or a non-technical background, the curriculum starts from the fundamentals and builds toward hands-on projects you can show to employers or clients.",
    "By the end of the program, you will understand the full data science workflow, from framing a business question to presenting insights, and be ready to pursue roles such as data analyst, junior data scientist, business analyst or machine learning associate.",
  ],
  // "Learning Outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Clean, analyse and visualise real-world datasets confidently",
    "Write Python and SQL for everyday analytics work",
    "Build and evaluate basic machine learning models",
    "Create dashboards that help non-technical people make decisions",
    "Present your findings clearly and defend your approach in interviews",
    "Show a portfolio of projects to employers or freelance clients",
  ],
  syllabus: [
    {
      title: "Module 1: Foundations of Data Science",
      summary: "",
      topics: [
        "What data science is and how it differs from data analytics and machine learning",
        "The data science lifecycle, from business problem to final insight",
        "Types of data, common data sources and basic data ethics",
      ],
    },
    {
      title: "Module 2: Python Programming for Data Science",
      summary: "",
      topics: [
        "Python basics: variables, loops, functions and data structures",
        "Working with NumPy and Pandas to load, filter, merge and transform data",
        "Writing clean, reusable code in Jupyter Notebook",
      ],
    },
    {
      title: "Module 3: Statistics and Probability",
      summary: "",
      topics: [
        "Mean, median, variance, standard deviation and distributions",
        "Probability, hypothesis testing and confidence intervals",
        "Correlation, regression basics and A/B testing logic",
      ],
    },
    {
      title: "Module 4: SQL and Databases",
      summary: "",
      topics: [
        "Writing queries to select, filter, join and aggregate data",
        "Subqueries, window functions and working with large tables",
        "Pulling business data from relational databases",
      ],
    },
    {
      title: "Module 5: Data Cleaning and Exploratory Data Analysis",
      summary: "",
      topics: ["Handling missing values, duplicates and outliers", "Feature engineering and data preparation", "Finding patterns and trends before building any model"],
    },
    {
      title: "Module 6: Data Visualisation and Dashboards",
      summary: "",
      topics: [
        "Charts with Matplotlib and Seaborn",
        "Interactive dashboards in Power BI or Tableau",
        "Data storytelling: presenting insights to managers and clients in plain language",
      ],
    },
    {
      title: "Module 7: Machine Learning Essentials",
      summary: "",
      topics: [
        "Supervised learning: linear and logistic regression, decision trees and random forests",
        "Unsupervised learning: clustering and customer segmentation",
        "Model evaluation, cross-validation and avoiding overfitting using Scikit-learn",
      ],
    },
    {
      title: "Module 8: Capstone Projects and Career Preparation",
      summary: "",
      topics: [
        "End-to-end projects such as sales forecasting, churn prediction or customer segmentation",
        "Building a portfolio on GitHub",
        "Resume, LinkedIn profile and interview preparation",
      ],
    },
  ],
  tools: [
    "Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau", "SQL", "MySQL", "PostgreSQL", "Scikit-learn",
    "Microsoft Excel", "Git and GitHub",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who can join the data science course at Techcadd?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners can all join, and 12th-pass students can too if they are comfortable with basic maths. You do not need a coding background, because the program starts from the fundamentals." },
    { q: "Do I need programming knowledge to learn data science?", a: "No, you can start as a complete beginner. The course begins with Python basics and builds up step by step to statistics, SQL and machine learning. Regular practice matters more than prior experience." },
    { q: "What is covered in the data science course syllabus?", a: "The syllabus covers Python, NumPy and Pandas, statistics and probability, SQL, data cleaning and exploratory analysis, data visualisation with Power BI or Tableau, machine learning with Scikit-learn, and capstone projects. Each module includes hands-on practice, so you work with real-style datasets throughout." },
    { q: "Can I learn data science online, or do I have to attend in Jalandhar?", a: "You can choose live online classes or classroom learning at the Jalandhar centre. Online learners attend the same live sessions, get doubt support and complete the same projects, so they do not need to relocate." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, learners who complete the program receive a Techcadd course completion certificate. It adds value to your resume, but employers will judge you mainly on your skills and portfolio projects." },
    { q: "Is data science a good career for freshers in India?", a: "Yes, it is a strong option, as businesses in almost every sector now rely on data for decisions. Fresher salaries in India roughly range from ₹3 LPA to ₹7 LPA depending on the city, company and your skills. These figures are approximate." },
    { q: "Can I become a freelancer after learning data science?", a: "Yes, many learners offer services such as data cleaning, dashboard creation, reporting and analysis on freelance platforms. A portfolio of two or three solid projects makes it much easier to win your first clients." },
    { q: "Which tools will I learn in this course?", a: "You will work with Python, Jupyter Notebook, NumPy, Pandas, Matplotlib, Seaborn, SQL, Scikit-learn, Excel, Git and GitHub, along with a dashboard tool such as Power BI or Tableau. These are the tools commonly used in analytics teams today." },
    { q: "What is the difference between data science and data analytics?", a: "Data analytics mainly studies past data to explain what happened, while data science goes further and builds models to predict what may happen next. In practice the two overlap, and this course covers both, so you can pursue either type of role." },
    { q: "Can students from Himachal Pradesh join the data science course online?", a: "Yes, students from Himachal Pradesh can join live online classes from Shimla, Solan, Dharamshala or any other town with a stable internet connection. This route also suits those who want to work remotely or freelance without moving to a metro city." },
    { q: "What are the data science job opportunities in Punjab and Haryana?", a: "In Punjab, manufacturing, exports, agri-tech and the Mohali IT cluster hire analysts, while Haryana's Gurugram and Faridabad belts offer roles in e-commerce, logistics, automobile and IT services. Remote jobs with companies in Bengaluru, Hyderabad and Pune are open to learners in both states." },
    { q: "Is a data science course in Delhi or Chandigarh better than learning online from Techcadd?", a: "Location matters less than the quality of training, practice and projects. Learners in Delhi and Chandigarh can attend Techcadd's live online sessions and get the same curriculum and mentoring, while saving travel time and balancing classes with a job." },
    { q: "Can learners from Jammu & Kashmir and Uttarakhand take this course?", a: "Yes, learners from Jammu, Srinagar, Dehradun, Haridwar and nearby areas can join through live online classes. Sellers, tourism operators and professionals in these regions often use data skills to understand customer and sales trends." },
    { q: "Can I study data science from Rajasthan or Uttar Pradesh through Techcadd?", a: "Yes, learners in Jaipur, Lucknow, Meerut and other cities can attend the live online batches and complete the same projects as classroom students. Jobs in these states span tourism, textiles, retail and IT, and remote roles are open too." },
    { q: "Does Techcadd provide job or placement support?", a: "Techcadd offers career support such as resume building, interview preparation and portfolio guidance. These services improve your chances, but they do not guarantee a job, so steady practice and project work remain essential." },
  ],
  related: ["machine-learning", "data-analytics", "python"],
  copy: {
    heading: { title: "Data Science Course", highlight: "at Techcadd", meta: "Data Science Course at Techcadd: Learn to Turn Data into Decisions" },
    overview: { eyebrow: "Program Overview", title: "Data Science Course at Techcadd: Learn to Turn Data into Decisions", gainsTitle: "Learning Outcomes" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "What You Will Learn in This Data Science Course",
      text: "The curriculum moves from basics to real projects. Each module builds on the one before it, so beginners are not left behind and experienced learners are still challenged.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join This Data Science Course?",
      intro: "This data science course is built for people from many backgrounds, not just computer science graduates. If you enjoy working with numbers, patterns and problem-solving, and you are willing to practise regularly, you can start here. Techcadd begins with the fundamentals, so you do not need prior coding experience. This program suits:",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "From B.Tech, BCA, B.Sc, B.Com, BBA, MBA, M.Sc and similar streams who want a skill that employers actively look for." },
        { icon: "Briefcase", title: "Working professionals", text: "In IT, finance, marketing, operations or HR who want to use data for better decisions or move into an analytics role." },
        { icon: "Shuffle", title: "Job switchers", text: "Looking for a structured path into data analyst, business analyst or junior data scientist roles." },
        { icon: "PenTool", title: "Freelancers", text: "Who want to offer analytics, dashboards and reporting services to clients in India and abroad." },
        { icon: "Building2", title: "Business owners", text: "Who want to understand sales, customer and inventory data without depending on others." },
        { icon: "BookOpen", title: "12th-pass students", text: "Who want an early start in data science after 12th. They are welcome if they are comfortable with basic maths and ready to learn step by step." },
      ],
      need: "A laptop with a stable internet connection, basic school-level maths, and curiosity about how data drives business decisions.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Live online classes let learners from across North India join the same batch without relocating. Each region has its own reasons to learn data science:",
      items: [
        { title: "Punjab", text: "A data science course in Punjab helps learners from Ludhiana's manufacturing and export units apply analytics to demand forecasting and production planning." },
        { title: "Haryana", text: "A data science course in Haryana suits professionals in Gurugram's MNC, e-commerce and logistics sectors who want to move into analytics roles." },
        { title: "Himachal Pradesh", text: "A data science course in Himachal Pradesh lets learners in Shimla, Solan and other hill towns build skills for remote jobs and freelancing, without leaving home." },
        { title: "Chandigarh", text: "A data science course in Chandigarh suits IT and BPO professionals in the Tricity and Mohali who want to upgrade from support roles to analytics." },
        { title: "Delhi", text: "A data science course in Delhi prepares freshers for the country's largest job market, with demand from agencies, fintech firms and e-commerce companies in Noida." },
        { title: "Jammu & Kashmir", text: "A data science course in Jammu and Kashmir helps online sellers, tourism operators and handicraft entrepreneurs in Jammu and Srinagar study customer and sales trends." },
        { title: "Uttarakhand", text: "A data science course in Uttarakhand fits learners in Dehradun's education sector and the pharma and hospitality industries who want to work with data." },
        { title: "Rajasthan", text: "A data science course in Rajasthan benefits Jaipur's tourism, jewellery and textile businesses, where seasonal demand analysis matters." },
        { title: "Uttar Pradesh", text: "A data science course in Uttar Pradesh suits learners targeting IT, electronics, retail and government-sector analytics roles in Lucknow and Meerut." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This Data Science Course?",
      intro: "Every industry now makes decisions from data, from retail and banking to healthcare, logistics and education. Companies need people who can turn raw numbers into clear decisions, and demand for these skills in India continues to grow. A well-structured data science course gives you a practical route into this field, whether you are starting fresh or upgrading your current career.",
      points: [
        { title: "A Skill Employers Actively Hire For", text: "Data science is not limited to one industry or one job title. The same skill set opens doors to roles such as data analyst, business analyst, junior data scientist, BI developer and machine learning associate. As a rough guide, fresher salaries in India often fall between ₹3 LPA and ₹7 LPA, depending on the city, company and your skills. Experienced professionals can earn considerably more. These figures are approximate and vary by employer." },
        {
          title: "Learn the Full Workflow, Not Just Theory",
          text: "Many learners study Python or statistics in isolation and then struggle to use them on real problems. This program follows the complete data science workflow:",
          list: [
            "Framing a business question",
            "Collecting and cleaning data",
            "Exploring and visualising patterns",
            "Building and testing predictive models",
            "Presenting insights to non-technical people",
          ],
          after: "Working through this cycle repeatedly is what builds job-ready confidence.",
        },
        { title: "Portfolio Projects You Can Show", text: "Employers and freelance clients trust proof of work more than certificates alone. You will build projects with real-style datasets, such as sales forecasting, customer segmentation or dashboard reporting, which you can add to your resume, GitHub profile or LinkedIn." },
        { title: "A Path for Career Switchers", text: "You do not need to leave your job or restart from zero. Professionals from finance, marketing, operations and IT already understand business context, and that is a real advantage in analytics. The program helps you add the technical layer on top of what you already know." },
        { title: "Freelancing and Remote Work Options", text: "Skills in data analysis, dashboards and reporting are in demand on freelance platforms and with remote teams. Learners who live outside big cities can work with clients and companies in Bengaluru, Hyderabad, Pune or Mumbai without relocating, which makes this field especially useful for those who prefer to stay close to home." },
        { title: "Flexible Learning That Fits Your Schedule", text: "Live online classes with the option of classroom learning mean you can study alongside a job or a business. You get the structure of a guided batch without giving up your current commitments." },
        { title: "A Strong Base for Advanced Fields", text: "Data science connects directly to machine learning, deep learning and artificial intelligence. Once you are comfortable with Python, statistics and modelling, moving into these advanced areas becomes much easier. You are building a foundation, not a dead end." },
        { title: "Is This Data Science Course Right for You?", text: "If you want a skill with strong demand, flexible career options and clear room to grow, this program is a practical choice. You do not need to be a coding expert to begin. You need consistency, curiosity and the willingness to practise." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Techcadd",
      title: "Why Choose Techcadd for Your Data Science Course?",
      intro: "Choosing where to learn matters as much as choosing what to learn. Techcadd focuses on practical skills, guided practice and career direction, so you finish the data science course able to do the work, not just describe it.",
      points: [
        {
          title: "North India's First AI-Powered and Robotics Learning Centre",
          text: "Techcadd positions itself as North India's first AI-powered and Robotics learning centre. For data science learners, this matters in three ways:",
          list: [
            "Hands-on AI exposure: Data science sits right next to machine learning and artificial intelligence. Learning in an AI-focused environment helps you see how your Python, statistics and modelling skills connect to modern AI applications.",
            "Practical projects: The focus is on building things, not only reading slides. You work on data problems the way a working analyst would.",
            "A modern technology environment: You learn alongside students of AI and robotics, which keeps your thinking current and exposes you to where the industry is heading.",
          ],
          after: "This is useful whether you join from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan or Uttar Pradesh. Live online classes bring the same practical, AI-aware training to your screen, so you do not need to relocate to benefit from it.",
        },
        { title: "Practical, Project-Based Training", text: "Every major topic is followed by hands-on work. You clean messy datasets, build visualisations, train models and present findings. By the end, you have a portfolio that shows what you can do, which is what recruiters and freelance clients look at first." },
        { title: "Industry-Relevant Curriculum", text: "The syllabus follows what the job market actually asks for: Python, SQL, statistics, data visualisation and machine learning. The tools covered are the ones used in real analytics teams today, so your skills stay useful beyond the classroom." },
        { title: "Experienced Trainers", text: "You learn from trainers who explain concepts in simple language and connect them to real business problems. Questions are welcome, and doubts are cleared during the class, not left for later." },
        { title: "Small Batches for Personal Attention", text: "Smaller batches mean you get more time with the trainer. This is especially helpful for beginners and career switchers who need extra support while building confidence in coding and statistics." },
        { title: "Certificate on Completion", text: "On successfully completing the program, learners receive a Techcadd course completion certificate. It is a useful addition to your resume and LinkedIn profile, though employers will always judge you most on your projects and skills." },
        { title: "Career and Placement Support", text: "Techcadd offers career guidance such as resume building, interview preparation and portfolio review to help you present your skills well. Support of this kind improves your chances, but it does not replace your own effort and preparation." },
        { title: "Flexible Online and Offline Learning", text: "Choose live online classes or classroom learning, depending on what suits your schedule. Working professionals and business owners can study without disrupting their routine." },
        { title: "Support for Students from Other States", text: "Learners joining from outside Punjab are not treated as an afterthought. Live sessions, doubt support and project guidance are all available online, so you stay connected to the trainer and your batch wherever you are." },
      ],
    },
    tools: {
      title: "Tools and Software Covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "Programming", tools: "Python, Jupyter Notebook" },
        { area: "Data libraries", tools: "NumPy, Pandas" },
        { area: "Visualisation", tools: "Matplotlib, Seaborn, Power BI, Tableau" },
        { area: "Databases", tools: "SQL (MySQL or PostgreSQL)" },
        { area: "Machine learning", tools: "Scikit-learn" },
        { area: "Spreadsheets", tools: "Microsoft Excel" },
        { area: "Version control", tools: "Git and GitHub" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Data analyst, business analyst, junior data scientist, BI developer, reporting analyst and machine learning associate. With experience, you can grow into senior data scientist, analytics manager or AI specialist roles. As a rough guide, fresher packages in India often range from ₹3 LPA to ₹7 LPA, and they vary by city, company and skill level. These figures are approximate.",
      roles,
      jobsTitle: "State-Wise Job Opportunities",
      jobs: [
        { title: "Punjab", text: "Data science jobs in Punjab are growing in manufacturing, exports and agri-tech, where companies in Amritsar and Patiala use analytics for demand planning, quality control and supply chain decisions. The Mohali IT cluster also hires analysts." },
        { title: "Haryana", text: "Data science jobs in Haryana are concentrated around Faridabad's automobile and industrial units and the logistics and e-commerce firms near Gurugram, where analysts work on delivery, pricing and customer data." },
        { title: "Delhi NCR", text: "Delhi has the largest fresher market in North India, with openings at digital agencies, fintech startups, media companies and e-commerce firms in Ghaziabad and Noida. Roles here often focus on marketing analytics and reporting." },
        { title: "Himachal Pradesh", text: "Hill-town learners in Dharamshala and nearby areas can aim for remote analyst jobs and freelance work, while tourism and pharma businesses in the state also need people who understand booking and sales data." },
        { title: "Rajasthan", text: "In Jaipur and across the state, tourism, jewellery and textile businesses use analytics for seasonal demand forecasting and inventory decisions." },
        { title: "Uttarakhand", text: "Roles in Haridwar's SIDCUL industrial belt and in hospitality and education organisations focus on production data, occupancy trends and student analytics." },
      ],
      outro: "Remote work also lets you apply to companies in Bengaluru, Hyderabad, Pune and Mumbai while living in your home state. As more businesses adopt AI, the demand for people who can prepare, analyse and interpret data keeps rising. Strong data science skills also open the path to machine learning, deep learning and AI engineering, so this program is both a career start and a base for advanced learning.",
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Ravneet Kaur", role: "Business Owner", place: "Patiala, Punjab", rating: 5, headline: "Data Science became much easier to understand.", text: "I had heard a lot about data science but was confused about where to start. The course explained everything step by step, from Python and data handling to analysis and machine learning. The practical sessions helped me understand how data can be used to make better business decisions." },
        { name: "Aman Chauhan", role: "Freelancer", place: "Karnal, Haryana", rating: 5, headline: "Very practical for freelancers.", text: "I joined the Data Science course to build technical skills and explore new freelance opportunities. I learned Python, data analysis, visualization, statistics and machine learning basics. The practical assignments helped me understand how to work with real datasets and present useful insights." },
        { name: "Pooja Thakur", role: "Graduate (B.Com)", place: "Dharamshala, Himachal Pradesh", rating: 4, headline: "Learned Data Science from home.", text: "The online classes were easy to follow, and the recordings were helpful whenever I missed a session. I learned Python basics, data cleaning, visualization and introductory machine learning. The trainer explained technical topics in simple language with practical examples." },
        { name: "Simran Gill", role: "Job Switcher (from Sales)", place: "Panchkula, Chandigarh Tricity", rating: 5, headline: "Structured and beginner friendly.", text: "I had no strong technical background, so I was initially worried about learning data science. The course started with Python and basic data concepts before moving into analysis and machine learning. The step-by-step approach has given me more confidence to prepare for interviews and explore data-related careers." },
        { name: "Rohit Malhotra", role: "Working Professional (Content Executive)", place: "Delhi", rating: 4, headline: "Useful for professionals working with data.", text: "I wanted to add data skills to my existing professional experience. The course covered Python, data analysis, visualization and machine learning fundamentals. The practical projects helped me understand how data can be analyzed and converted into useful insights for workplace decisions." },
        { name: "Insha Mir", role: "Online Seller", place: "Jammu, Jammu & Kashmir", rating: 4, headline: "Now I understand how data tells a story.", text: "I joined the course because I wanted to understand how data could help me with my online business. I learned about data cleaning, analysis, charts and basic prediction techniques. I am still practising, but I now have a much better understanding of how data can support business decisions." },
        { name: "Deepak Rawat", role: "Postgraduate (MBA)", place: "Uttarakhand", rating: 5, headline: "Clear teaching and lots of practical work.", text: "The trainer explained every topic patiently and gave practical tasks after each module. I especially liked the sessions on Python, data visualization and machine learning. Instead of only learning theory, we worked with datasets and completed practical exercises, which made the concepts much easier to understand." },
        { name: "Kritika Sharma", role: "12th-pass Student", place: "Sri Ganganagar, Rajasthan", rating: 4, headline: "A good start after 12th.", text: "I was completely new to data science, but the trainer started from the basics. I learned Python, datasets, data visualization, statistics and the basics of machine learning. The practical exercises made the classes interesting and helped me understand the topics step by step." },
        { name: "Mohit Verma", role: "Working Professional (Sales)", place: "Uttar Pradesh", rating: 4, headline: "Worth it for working professionals.", text: "I joined because I wanted to understand how data science could help in sales and business analytics. The course showed me how to work with data, find patterns, create visualizations and understand basic predictive models. I now feel more confident discussing data-driven ideas with my team." },
        { name: "Harpreet Singh", role: "Graduate (BBA)", place: "Ambala, Haryana", rating: 5, headline: "Practical classroom learning worked best for me.", text: "I preferred offline learning, so I attended the classes at the centre. The trainer explained the concepts clearly and gave us hands-on practice with Python, datasets and visualization tools. Working on practical data problems and creating insights from datasets was the best part of the course." },
      ],
    },
    faqTitle: "Frequently Asked Questions About the Data Science Course",
    cta: {
      title: "Start Your Data Science Journey",
      highlight: "with Techcadd",
      text: "Turn Data into a Career. Join the Data Science Course at Techcadd. Learn Python, SQL, statistics, visualisation and machine learning through live classes and hands-on projects. Whether you are a graduate, a working professional or a freelancer, this data science course gives you a clear path from beginner to portfolio-ready. Join online from anywhere in North India, or learn at any of our centres.",
    },
  },
};
