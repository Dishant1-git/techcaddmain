import type { CoursePage } from "./types";

/* /courses/power-bi — long-form landing copy supplied by the client (used as given, section by section).
   Editor notes in the supplied text are left out; each marks a claim to CONFIRM with the client:
   - "Experienced trainers" — "(Add the trainers' actual experience… so this claim is specific and provable.)"
   - "Small batches" — "(State your actual batch size if you want to quote one.)"
   - "Certificate of completion" / FAQ 4 — "(Include only if it is actually issued.)"
   - "Career and placement support" — "(Describe only what techcadd actually provides…)"
   - Tools — "(Please confirm the final tool list… Copilot needs specific Microsoft licences…)"
   Also: "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   The supplied reviews carry no star ratings, so none are shown; confirm they are from real students.
   The supplied FAQ numbering skips 6 and 11. `duration` and `level` are the previous values — confirm. */

const roles = ["Power BI Developer", "Data Analyst", "Business Analyst", "MIS Executive", "Reporting Analyst", "BI Consultant", "Freelance Dashboard Developer"];

export const powerBi: CoursePage = {
  slug: "power-bi",
  title: "Power BI Course",
  navLabel: "Power BI",
  group: "ai-data",
  icon: "Layers",
  tagline:
    "Turn raw business data into clear dashboards and reports with Microsoft Power BI: data connection and cleaning, modelling, DAX calculations and interactive dashboards.",
  level: "Beginner",
  duration: "1–2 Months",
  eligibility: "Comfort with Excel; no coding background required",
  overview: [
    "The Power BI course at techcadd is a practical, job-focused program that teaches you to turn raw business data into clear dashboards and reports using Microsoft Power BI. Whether you want a Power BI course in India to move into a data analyst role, grow in your current job, or start freelance reporting work, this program takes you from data connection and cleaning to modelling, DAX calculations and interactive dashboards.",
    "You will work with Power BI Desktop and Power BI Service, use Power Query for data preparation, and build reports on real business scenarios such as sales, finance, HR and operations. The training suits graduates, working professionals, job switchers and business owners, and no coding background is required.",
    "Learners from Punjab, from export and manufacturing businesses in Ludhiana to IT teams in Mohali, can use these skills to track performance and make faster decisions. Classes run in both online and offline modes. The physical centre is in Jalandhar, Punjab, and learners from other states can join live online sessions.",
    "By the end, you will have portfolio-ready dashboards and a clear path to preparing for Microsoft's PL-300 certification exam.",
  ],
  // "Learning Outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Connect to multiple data sources and clean messy data without manual rework",
    "Design a star-schema data model",
    "Write DAX measures for KPIs, comparisons and time-based analysis",
    "Build interactive, well-designed dashboards",
    "Publish, refresh and share reports securely",
    "Explain your insights clearly to non-technical stakeholders",
    "Prepare for the PL-300 exam with confidence",
  ],
  syllabus: [
    {
      title: "Module 1: Business Intelligence and Power BI Basics",
      summary: "",
      topics: [
        "What BI is, and how Power BI Desktop, Power BI Service and Power BI Mobile fit together",
        "Understanding dashboards, reports, datasets (semantic models) and workspaces",
        "Installing and navigating the interface",
      ],
    },
    {
      title: "Module 2: Connecting to Data",
      summary: "",
      topics: ["Importing from Excel, CSV, PDF, web pages, folders, SQL databases and SharePoint", "Import vs DirectQuery vs Live Connection, and when to use each"],
    },
    {
      title: "Module 3: Data Cleaning with Power Query",
      summary: "",
      topics: [
        "Removing errors, splitting and merging columns, fixing data types and unpivoting",
        "Appending and merging queries, using parameters, and a first look at M language",
        "Building repeatable cleaning steps so reports refresh automatically",
      ],
    },
    {
      title: "Module 4: Data Modelling",
      summary: "",
      topics: [
        "Fact and dimension tables, star schema and relationships (one-to-many, many-to-many)",
        "Cross-filter direction, hierarchies and a proper date table",
        "Why a clean model matters more than a fancy chart",
      ],
    },
    {
      title: "Module 5: DAX (Data Analysis Expressions)",
      summary: "",
      topics: [
        "Calculated columns vs measures",
        "Core functions: SUM, CALCULATE, FILTER, ALL, RELATED, IF, SWITCH",
        "Time intelligence: year-to-date, month-on-month, same period last year",
        "Variables and writing readable, efficient measures",
      ],
    },
    {
      title: "Module 6: Visualisation and Dashboard Design",
      summary: "",
      topics: [
        "Choosing the right chart: bar, line, matrix, map, waterfall, KPI cards and slicers",
        "Bookmarks, drill-through, tooltips and conditional formatting",
        "Layout, colour and storytelling principles for managers and clients",
      ],
    },
    {
      title: "Module 7: Power BI Service and Collaboration",
      summary: "",
      topics: [
        "Publishing reports, setting up scheduled refresh and using gateways",
        "Workspaces, apps, sharing and row-level security (RLS)",
        "Dataflows and an introduction to Microsoft Fabric",
      ],
    },
    {
      title: "Module 8: AI Features in Power BI",
      summary: "",
      topics: [
        "Q&A natural-language queries, Key Influencers, Decomposition Tree and anomaly detection",
        "An overview of Copilot in Power BI, and how to check its output before trusting it",
      ],
    },
    {
      title: "Module 9: Capstone Projects and Certification Prep",
      summary: "",
      topics: ["End-to-end dashboards in sales, finance, HR and operations", "PL-300 style practice questions, portfolio review and mock interviews"],
    },
  ],
  tools: ["Power BI Desktop", "Power BI Service", "Power Query Editor", "DAX", "Microsoft Excel", "SQL basics", "Power BI Mobile", "Microsoft Fabric"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who can join the Power BI course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers and business owners can join the Power BI course. Students who have passed 12th can also join if they are comfortable with computers and basic Excel. No programming background is needed." },
    { q: "Do I need coding knowledge to learn Power BI?", a: "No, you do not need coding knowledge to learn Power BI. Power Query handles most data cleaning visually, and DAX, the formula language, is introduced step by step. Basic Excel skills and logical thinking are enough to start." },
    { q: "What is covered in the Power BI course syllabus?", a: "The syllabus covers BI basics, connecting to data, Power Query cleaning, data modelling, DAX, dashboard design, Power BI Service publishing, AI features and capstone projects. It also includes PL-300 style practice questions. Each module ends with a hands-on build." },
    { q: "Will I get a certificate after the Power BI course?", a: "Learners receive a techcadd course completion certificate. The course also prepares you for Microsoft's PL-300 (Power BI Data Analyst Associate) exam, which Microsoft conducts and certifies separately. You register and pay for that exam directly with Microsoft." },
    { q: "Can I learn Power BI online, or do I need to attend offline?", a: "You can learn Power BI fully online through live classes, or attend offline at the Jalandhar, Punjab centre. Both modes follow the same curriculum and projects. Working professionals can choose batches that fit around office hours." },
    { q: "What jobs can I get after learning Power BI, and what is the salary?", a: "Power BI skills lead to roles such as Data Analyst, Business Analyst, MIS Executive, Reporting Analyst and Power BI Developer. Entry-level pay is approximately ₹3 to 5 LPA, and experienced developers often earn ₹8 to 15 LPA or more. These figures vary by city, employer and skills, and are not guaranteed." },
    { q: "Can I do freelancing with Power BI?", a: "Yes, you can freelance with Power BI by building dashboards and reports for small businesses, agencies and online sellers. The course covers publishing, sharing and row-level security, which clients often need. A strong portfolio of 3 to 5 dashboards matters more than the certificate when you pitch." },
    { q: "Which tools are covered, and is Power BI free?", a: "The course covers Power BI Desktop, Power BI Service, Power Query, DAX, Excel, SQL basics and an introduction to Microsoft Fabric. Power BI Desktop is free to download on Windows. Publishing and sharing in Power BI Service, and features like Copilot, need a paid Microsoft licence or capacity." },
    { q: "Is Power BI better than Tableau?", a: "Neither is better in every case, but Power BI is often the more practical choice in India. It is cost-friendly, integrates with Excel, Azure and Teams, and appears frequently in job listings. Tableau is strong for advanced visual design, and the modelling and dashboard logic you learn in Power BI transfers to it." },
    { q: "Can students from Himachal Pradesh join the Power BI course online?", a: "Yes, students from Himachal Pradesh can join live online classes from anywhere in the state. A Power BI course in Himachal Pradesh suits hotel and tourism staff in Shimla, pharma professionals around Baddi and Solan, and freelancers working remotely. You only need a laptop and a stable internet connection." },
    { q: "What are the Power BI job opportunities in Punjab and Haryana?", a: "In Punjab, manufacturers, exporters and agri-businesses in Ludhiana, Jalandhar and Amritsar need order, cost and export reporting, and Mohali's IT and startup scene hires analysts. In Haryana, Gurugram and Faridabad offer analyst roles in MNCs, logistics and e-commerce firms. Many roles can also be remote with companies in Bengaluru, Hyderabad or Pune." },
    { q: "Is a Power BI course in Chandigarh useful for tricity learners?", a: "Yes, a Power BI course in Chandigarh is useful for learners in Chandigarh, Mohali and Panchkula, where IT, BPO and startup teams rely on performance and customer dashboards. Government-linked offices also use data for budget and scheme tracking. Online classes mean you do not have to commute." },
    { q: "Can learners from Jammu and Kashmir join the Power BI course?", a: "Yes, learners from Jammu, Srinagar and other parts of Jammu & Kashmir can join through live online classes. The skill is useful for tourism operators, handicraft sellers and online store owners who want to understand sales and stock data. If your connection is unstable, ask the counsellor whether recorded revision material is available." },
    { q: "Is there a Power BI course in Uttarakhand for Dehradun and Haridwar learners?", a: "Yes, you can take a Power BI course in Uttarakhand online through live sessions. It is useful for professionals in SIDCUL pharma units in Haridwar, hospitality businesses and education institutes in Dehradun that track production, occupancy or admissions data." },
    { q: "Can I take a Power BI course in Rajasthan or Uttar Pradesh online?", a: "Yes, you can take a Power BI course in Rajasthan or a Power BI course in Uttar Pradesh through live online classes. In Rajasthan, Jaipur's jewellery, textile and tourism businesses use dashboards for stock and seasonal demand. In Uttar Pradesh, Noida's IT and electronics firms and Lucknow's retail and government sectors need reporting talent." },
  ],
  related: ["data-analytics", "tableau", "data-science"],
  copy: {
    heading: { title: "Power BI Course", highlight: "in India", meta: "Power BI Course in India: Turn Your Data into Decisions | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Power BI Course: Program Overview", gainsTitle: "Learning Outcomes" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "Power BI Course Curriculum: What You Will Learn",
      text: "The curriculum follows the way analysts actually work: get the data, clean it, model it, calculate, visualise, publish and share.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do the Power BI Course?",
      intro: "Data reporting is now part of almost every business role, so this Power BI course is built for people from many backgrounds. You do not need to be a programmer. If you are comfortable with Excel and curious about numbers, you can start.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Commerce, BBA, BCA, B.Tech, MBA and science graduates can use Power BI to build a data analyst profile. A portfolio of dashboards often counts for more than a degree title when you apply for analyst, MIS or reporting roles." },
        { icon: "Briefcase", title: "Working professionals", text: "If you work in sales, finance, HR, operations, marketing or supply chain, you can replace manual Excel reports with automated dashboards and save hours every week." },
        { icon: "Shuffle", title: "Job switchers", text: "Professionals moving from non-technical or support roles into analytics can use this course as a structured bridge. It covers Power Query, data modelling and DAX in a logical order." },
        { icon: "PenTool", title: "Freelancers", text: "If you want to offer dashboard and reporting services to small businesses, this course teaches you to build client-ready reports and publish them through Power BI Service." },
        { icon: "Building2", title: "Business owners and managers", text: "Owners who want to track sales, inventory, expenses and customer trends can learn to read their own data instead of waiting on someone else's report." },
        { icon: "BookOpen", title: "Students", text: "Students who have passed 12th and are exploring data careers can join, though most of our learners are graduates and working adults. A basic comfort with computers and Excel is enough." },
      ],
      need: "Helpful, but not mandatory: basic Excel knowledge, logical thinking and comfort with simple maths. SQL or programming experience is a bonus, not a requirement.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "techcadd's physical centre is in Jalandhar, Punjab. Learners in other states can join live online classes, and each region has its own reasons to learn Power BI:",
      items: [
        { title: "Punjab", text: "For anyone searching for a Power BI course in Punjab, the skill fits manufacturers, hosiery units, sports goods exporters and agri-businesses in Amritsar and Patiala that need to track orders, costs and export data." },
        { title: "Haryana", text: "Learners in Gurugram and Faridabad can target analyst roles in MNCs, logistics firms and e-commerce companies, where dashboards for delivery and inventory are routine." },
        { title: "Himachal Pradesh", text: "For a Power BI course in Himachal Pradesh, online learning suits hotel and tourism staff in Shimla, pharma professionals in Baddi, and anyone building a remote or freelance career." },
        { title: "Chandigarh", text: "Tricity learners from IT, BPO and startup teams can use Power BI for performance and customer reporting, and government-office staff can use it for scheme and budget tracking." },
        { title: "Delhi NCR", text: "Delhi has India's largest fresher job market, with agencies, fintech and e-commerce firms in Noida and Ghaziabad hiring reporting talent. A Power BI course in Delhi helps you stand out among many applicants." },
        { title: "Jammu & Kashmir", text: "Online classes let learners in Jammu and Srinagar analyse tourism trends, handicraft sales and online seller performance without relocating." },
        { title: "Uttarakhand", text: "Professionals in Dehradun and Haridwar, especially in SIDCUL pharma units, hospitality and education, can use dashboards for production, occupancy and admissions data." },
        { title: "Rajasthan", text: "Business owners in Jaipur's jewellery, textile and tourism sectors can use Power BI for stock, seasonal demand and customer analysis." },
        { title: "Uttar Pradesh", text: "Learners in Lucknow and Meerut can apply Power BI to retail, electronics and government-sector reporting, where data-literate staff are increasingly valued." },
      ],
      outro: "Whatever your background or state, the course starts from the basics and builds up step by step.",
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn Power BI?",
      intro: "Companies already hold more data than they can read. What they lack are people who can turn it into decisions. Power BI is one of the most widely used business intelligence tools for that job, and this program is designed around the skills employers look for in analyst and reporting roles.",
      points: [
        { title: "High demand across industries", text: "Retail, banking, manufacturing, healthcare, logistics, education and IT services all use dashboards to track performance. Job portals regularly list Power BI as a required skill for data analyst, business analyst, MIS executive and reporting analyst roles." },
        { title: "Part of the Microsoft ecosystem", text: "Power BI works with Excel, SQL Server, Azure, SharePoint and Microsoft Teams, which many Indian companies already use. Power BI is also a core part of Microsoft Fabric, Microsoft's unified analytics platform, so this skill stays relevant as the platform evolves." },
        { title: "A realistic entry point into data careers", text: "You can start without coding. Power Query handles most data cleaning visually, and DAX, the formula language, is introduced gradually. If you later move towards SQL, Python or data engineering, you already understand the logic of data modelling." },
        { title: "Better pay potential", text: "Salaries vary by city, company and experience, but entry-level Power BI and data analyst roles in India typically start at roughly ₹3 to 5 LPA. Professionals with strong modelling and DAX skills often reach ₹8 to 15 LPA or more. These are approximate ranges, not guarantees." },
        { title: "Useful in your current job", text: "You don't have to change careers to benefit. Replacing a weekly manual Excel report with a refreshing dashboard is a visible win that managers notice during appraisals." },
        { title: "Freelance and business use", text: "Small businesses need dashboards but rarely have in-house analysts. With a solid portfolio, you can offer reporting services to clients in India or abroad." },
        {
          title: "How This Program Helps You",
          text: "",
          list: [
            "Project-first learning: You build dashboards on sales, finance, HR and operations data instead of only watching demonstrations.",
            "Complete workflow: You learn the full path from connecting data sources and cleaning data in Power Query, to modelling relationships, writing DAX measures, designing visuals and publishing on Power BI Service.",
            "Certification preparation: The curriculum is aligned with the skills tested in Microsoft's PL-300 (Power BI Data Analyst Associate) exam. The exam is conducted separately by Microsoft, so you register and pay for it directly.",
            "Interview readiness: You practise explaining your dashboards, justifying design choices and answering common DAX and data modelling questions.",
            "Flexible learning: Take live online classes from anywhere, or attend in person at the Jalandhar centre if you're nearby.",
          ],
        },
        { title: "Is It Right for You?", text: "If you want to move from \"I can make Excel reports\" to \"I can build dashboards that help a business decide,\" this program is a practical next step. It suits people who prefer learning by building, whether they are fresh graduates or experienced professionals." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your Power BI Course?",
      intro: "Many institutes can teach you where to click in Power BI. The harder part is learning to think like an analyst: asking the right business question, shaping the data, and presenting an answer a manager can act on. techcadd's Power BI training is built around that.",
      points: [
        {
          title: "North India's first AI-powered and Robotics learning centre",
          text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre. For a Power BI learner, this matters in practical ways:",
          list: [
            "Exposure to AI-driven analytics: Power BI now includes AI features such as Copilot, Q&A natural-language queries, Key Influencers and anomaly detection. Learning in an environment that works with AI daily helps you understand where these features fit and where human judgement is still needed.",
            "Practical, project-based mindset: Hands-on work is part of how the centre teaches. You build dashboards on realistic business data, not just watch demonstrations.",
            "A modern technology environment: Data, automation and AI are connected. Seeing how analytics sits next to other emerging technologies helps you speak confidently in interviews.",
            "Value for learners across states: Whether you join from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan or Uttar Pradesh, the live online format gives you the same teaching approach and project exposure without relocating.",
          ],
        },
        { title: "Practical, project-based training", text: "Each module ends with something you build: a sales dashboard, a finance summary, an HR report or an operations tracker. You finish with a portfolio you can show recruiters or clients." },
        { title: "Industry-relevant curriculum", text: "The syllabus covers the full workflow employers expect: data connection, Power Query cleaning, data modelling, DAX measures, visual design and publishing through Power BI Service. It is updated as Power BI changes, so you learn the current interface and features." },
        { title: "Experienced trainers", text: "You learn from trainers who work with real reporting scenarios and can explain not just how a feature works but why you would choose it." },
        { title: "Small batches", text: "Smaller batches mean you can ask questions, get your dashboards reviewed and receive feedback on your DAX and modelling." },
        { title: "Certificate of completion", text: "On completing the course, learners receive a techcadd course completion certificate. The course also prepares you for Microsoft's PL-300 exam, which Microsoft conducts and certifies separately." },
        { title: "Career and placement support", text: "Support can include resume guidance, portfolio review, mock interviews and interview preparation for analyst and reporting roles." },
        { title: "Flexible online and offline learning", text: "Attend live online classes from anywhere, or choose in-person learning if you are nearby. Working professionals can pick batches that fit around office hours." },
        { title: "Support for students from other states", text: "Learners outside Punjab get the same curriculum, live interaction and doubt support through online delivery. Recorded or revision material, if provided, helps you catch up on missed sessions." },
      ],
      outro: "You should leave with skills you can demonstrate, not just a certificate. techcadd's approach combines practical dashboards, a current curriculum and flexible delivery so you can learn at your pace and apply it at work or in your job search.",
    },
    tools: {
      title: "Tools and Software Covered",
      columns: ["Tool", "Used for"],
      groups: [
        { area: "Power BI Desktop", tools: "A free Windows application for building reports" },
        { area: "Power BI Service", tools: "The cloud platform for publishing, sharing and scheduled refresh" },
        { area: "Power Query Editor", tools: "Data preparation" },
        { area: "DAX", tools: "The calculation language" },
        { area: "Microsoft Excel", tools: "As a data source and for comparison with Power BI" },
        { area: "SQL basics", tools: "Querying data before it reaches Power BI" },
        { area: "Power BI Mobile", tools: "Viewing reports on phones and tablets" },
        { area: "Microsoft Fabric (introduction)", tools: "How Power BI fits into Microsoft's wider analytics platform" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Typical roles include Power BI Developer, Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, BI Consultant and Freelance Dashboard Developer. Entry-level pay is approximately ₹3 to 5 LPA, and experienced developers often earn ₹8 to 15 LPA or more, depending on city, employer and skills. These figures are indicative, not guaranteed.",
      roles,
      rolesNote: "Power BI is increasingly paired with SQL, Python and Fabric, so the course is a base to build on rather than an endpoint.",
      jobsTitle: "Power BI job opportunities across North India",
      jobs: [
        { title: "Haryana", text: "Searching for Power BI jobs in Haryana usually leads to Gurugram and Faridabad, where MNCs, logistics providers, automobile suppliers and e-commerce firms hire analysts for supply chain, delivery and inventory dashboards." },
        { title: "Punjab", text: "Manufacturers, exporters and agri-businesses in Ludhiana, Jalandhar and Amritsar need cost, order and export tracking, and Mohali's growing IT and startup sector hires reporting and analyst talent." },
        { title: "Chandigarh and Tricity", text: "IT and BPO companies in the tricity region need performance, quality and customer reporting, and government-linked bodies increasingly use data for budget and scheme tracking." },
        { title: "Delhi NCR", text: "Agencies, fintech and e-commerce firms in Delhi, Noida and Ghaziabad make it the largest market for junior analyst and MIS roles, and also a strong source of freelance clients." },
        { title: "Rajasthan", text: "Jaipur's jewellery, textile and tourism businesses use dashboards for stock, seasonal demand and customer analysis, creating openings in business reporting." },
        { title: "Uttar Pradesh", text: "Noida's IT and electronics companies, Lucknow's government and retail sector and Meerut's trading businesses all need people who can turn sales and operations data into usable reports." },
      ],
      outro: "Remote analyst roles with companies in Bengaluru, Hyderabad, Pune and Mumbai also open up for learners who build a strong portfolio, wherever they live.",
    },
    reviews: {
      title: "Student Reviews",
      items: [
        { name: "Harpreet Kaur", role: "Graduate, B.Com", place: "Ludhiana, Punjab", text: "I knew Excel but had no idea about DAX. The trainer explained CALCULATE with simple sales examples, and now I can build my own measures. The capstone dashboard became the main project in my portfolio." },
        { name: "Rohit Sharma", role: "Working professional, supply chain", place: "Gurugram, Haryana", text: "I used to spend two days every month making Excel reports. After this course I built a refreshing dashboard for our delivery data. My manager noticed it in the very next review meeting. Classes were online and the weekend batch suited my job." },
        { name: "Ankita Thakur", role: "Freelancer", place: "Shimla, Himachal Pradesh", text: "Living in Shimla, I was worried about learning online. But the live sessions were interactive and doubts were solved properly. I have now started offering simple sales dashboards to small business owners." },
        { name: "Gurpreet Singh", role: "Job switcher, from banking operations", place: "Jalandhar, Punjab", text: "I attended offline at the Jalandhar centre. Small batch size helped, as the trainer reviewed my data model personally. Power Query was a game-changer for me. The PL-300 practice questions also helped me understand the exam pattern." },
        { name: "Neha Verma", role: "Postgraduate, MBA", place: "Mohali, Chandigarh Tricity", text: "MBA gave me theory, but not the tools. Here I learned star schema, relationships and time intelligence step by step. Interview questions on data modelling felt much easier afterwards." },
        { name: "Aman Bansal", role: "Working professional, digital marketing agency", place: "Delhi", text: "Our agency needed client reports quickly. I now connect data from multiple sources and build one dashboard instead of five spreadsheets. The module on dashboard design really improved how clients see our reports." },
        { name: "Mohammad Irfan", role: "Business owner, handicrafts", place: "Srinagar, Jammu & Kashmir", text: "I sell online and always struggled to understand which products make profit. Learning Power BI taught me to read my own sales and stock data. No coding was needed, which was a big relief." },
        { name: "Pooja Rawat", role: "Graduate, B.Sc", place: "Dehradun, Uttarakhand", text: "I was nervous as a fresher, but the course starts from basics. Slowly I could build dashboards on HR and operations data. Recorded revision material helped when I missed one class." },
        { name: "Karan Meena", role: "Job switcher, retail", place: "Jaipur, Rajasthan", text: "I wanted to move from retail into reporting. The projects felt like real office work, not just practice files. My resume now has three dashboards I can actually explain in interviews." },
        { name: "Shivam Mishra", role: "Freelancer", place: "Lucknow, Uttar Pradesh", text: "Row-level security and publishing on Power BI Service were new to me. Now I can share client reports safely. The trainers were patient and explained why, not just how." },
        { name: "Simran Arora", role: "12th pass, exploring data careers", place: "Amritsar, Punjab", text: "I am young and had only basic computer knowledge, so I thought this course would be too difficult. Trainers explained everything slowly and the examples were easy to follow. Now I feel confident about building a data career." },
        { name: "Vikas Chauhan", role: "12th pass, helping in family trading business", place: "Meerut, Uttar Pradesh", text: "I helped in our family shop after 12th. Power BI taught me to track sales and stock without depending on anyone. Simple language and practical examples made it easy." },
      ],
    },
    faqTitle: "Power BI Course: Frequently Asked Questions",
    cta: {
      title: "Turn Your Data into Decisions:",
      highlight: "Start Your Power BI Course Today",
      text: "Build dashboards that managers and clients actually use. Join techcadd's practical Power BI course and learn Power Query, data modelling, DAX and dashboard design through hands-on projects. Learn online from anywhere in India, or attend in person at any of our centres.",
    },
  },
};
