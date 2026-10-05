import type { CoursePage } from "./types";

/* /courses/machine-learning — long-form landing copy supplied by the client (used as given, section by section; the brand
   is spelled "Techcadd" in this text and kept that way).
   - The supplied FAQ numbering skips 3, 4 and 12 (fee, duration…) — only the questions provided are shown.
   - `duration` and `level` are the previous values — confirm with the client.
   CHECK WITH THE CLIENT before launch:
   - Reviews: the ten reviewers (names, cities, roles) are identical to the ten on /courses/google-ads and
     /courses/artificial-intelligence. Confirm they are real reviews of this course.
   - "North India's First AI-Powered and Robotics Learning Centre" is a first/only claim — keep only if it can be supported. */

const roles = ["Machine Learning Engineer (junior)", "Data Analyst", "Junior Data Scientist", "AI Developer", "Business Analyst with ML skills", "Freelance ML consultant"];

export const machineLearning: CoursePage = {
  slug: "machine-learning",
  title: "Machine Learning Course",
  navLabel: "Machine Learning",
  group: "ai-data",
  icon: "Cpu",
  tagline:
    "Start with Python, statistics and data handling, then move on to supervised and unsupervised learning, model evaluation and deploying simple models into real applications.",
  level: "Intermediate",
  duration: "4–6 Months",
  eligibility: "Basic computer skills and school-level maths; no prior programming experience required",
  overview: [
    "The Machine Learning course in India at Techcadd is built for graduates, working professionals, job switchers and freelancers who want to turn data into decisions and build a career in one of the fastest-growing areas of technology. You will start with Python, statistics and data handling. Then you will move on to supervised and unsupervised learning, model evaluation and deploying simple models into real applications. Every concept is taught through hands-on projects, so you finish with a portfolio, not just notes.",
    "The program suits learners from non-IT backgrounds as well as those with some coding experience. It is delivered through live online classes and classroom sessions. In Punjab, IT companies in Mohali, manufacturing units in Ludhiana and a growing startup scene are creating demand for data-driven skills, and this course gives local learners a practical way into the field. Learners in Jalandhar can attend at the Techcadd centre, while students from other states can join live online batches from home.",
    "By the end, you will be able to clean data, train and tune models, and explain results clearly. These are the skills employers look for in entry-level machine learning and data roles.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Write Python scripts to handle and process data",
    "Understand why models behave as they do, not only how to run them",
    "Turn messy data into clear, usable insights",
    "Build prediction and classification models",
    "Find patterns such as customer segments in unlabelled data",
    "Judge and improve a model with the right metrics",
    "Finish with a deployable project and a portfolio",
  ],
  syllabus: [
    {
      title: "Module 1: Python for Machine Learning",
      summary: "Variables, loops, functions, data structures, file handling, and writing clean, reusable code. Git and GitHub basics are included so you can publish your work.",
      topics: ["Variables, loops and functions", "Data structures and file handling", "Writing clean, reusable code", "Git and GitHub basics"],
      outcome: "you can write Python scripts to handle and process data.",
    },
    {
      title: "Module 2: Maths and Statistics Essentials",
      summary: "Descriptive statistics, probability, distributions, correlation, hypothesis testing and the linear algebra concepts behind ML, taught in plain language.",
      topics: ["Descriptive statistics", "Probability and distributions", "Correlation and hypothesis testing", "Linear algebra concepts behind ML"],
      outcome: "you understand why models behave as they do, not only how to run them.",
    },
    {
      title: "Module 3: Data Handling and Visualisation",
      summary: "NumPy, Pandas, SQL basics, Matplotlib and Seaborn. Cleaning missing values, handling outliers, and exploratory data analysis (EDA).",
      topics: ["NumPy, Pandas and SQL basics", "Matplotlib and Seaborn", "Cleaning missing values and handling outliers", "Exploratory data analysis (EDA)"],
      outcome: "you can turn messy data into clear, usable insights.",
    },
    {
      title: "Module 4: Supervised Learning",
      summary: "Linear and logistic regression, decision trees, random forests, k-nearest neighbours, support vector machines and gradient boosting (XGBoost, LightGBM).",
      topics: ["Linear and logistic regression", "Decision trees and random forests", "k-nearest neighbours and support vector machines", "Gradient boosting (XGBoost, LightGBM)"],
      outcome: "you can build prediction and classification models.",
    },
    {
      title: "Module 5: Unsupervised Learning",
      summary: "Clustering (K-Means, hierarchical), dimensionality reduction (PCA) and basic anomaly detection.",
      topics: ["Clustering (K-Means, hierarchical)", "Dimensionality reduction (PCA)", "Basic anomaly detection"],
      outcome: "you can find patterns such as customer segments in unlabelled data.",
    },
    {
      title: "Module 6: Model Evaluation and Tuning",
      summary: "Train-test split, cross-validation, accuracy, precision, recall, F1, ROC-AUC, overfitting, feature engineering and hyperparameter tuning.",
      topics: ["Train-test split and cross-validation", "Accuracy, precision, recall, F1 and ROC-AUC", "Overfitting and feature engineering", "Hyperparameter tuning"],
      outcome: "you can judge and improve a model with the right metrics.",
    },
    {
      title: "Module 7: Introduction to Deep Learning",
      summary: "Neural network basics, TensorFlow or PyTorch fundamentals, and a simple image or text task.",
      topics: ["Neural network basics", "TensorFlow or PyTorch fundamentals", "A simple image or text task"],
      outcome: "you understand how deep learning builds on core ML.",
    },
    {
      title: "Module 8: Deployment and Capstone Project",
      summary: "Saving models, building a simple app with Streamlit or Flask, and an end-to-end capstone project from problem statement to presentation.",
      topics: ["Saving models", "A simple app with Streamlit or Flask", "End-to-end capstone project from problem statement to presentation"],
      outcome: "you finish with a deployable project and a portfolio.",
    },
  ],
  tools: [
    "Python", "Jupyter Notebook", "Google Colab", "NumPy", "Pandas", "SQL", "Matplotlib", "Seaborn", "scikit-learn", "XGBoost", "LightGBM",
    "TensorFlow", "PyTorch", "Streamlit", "Flask", "Git and GitHub",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who is eligible for the Machine Learning course?", a: "Graduates, postgraduates, working professionals, job switchers and freelancers can all join, and no prior coding experience is required. Students after 12th can also enrol if they are ready to practise regularly. Basic computer skills and school-level maths are enough to begin." },
    { q: "Can a non-IT graduate learn machine learning?", a: "Yes, a non-IT graduate can learn machine learning because the course starts with Python and statistics from scratch. Graduates from commerce, arts, management and science backgrounds regularly move into data roles. Consistent practice matters more than your degree." },
    { q: "What does the Machine Learning syllabus cover?", a: "The syllabus covers Python, statistics, data handling with Pandas and NumPy, supervised and unsupervised learning, model evaluation, an introduction to deep learning, and deployment with a capstone project. Each module ends with a practical task. The full module-wise breakdown is given in the \"What You Will Learn\" section above." },
    { q: "Which tools and software will I learn?", a: "You will learn Python, Jupyter Notebook, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn, SQL basics, and an introduction to TensorFlow or PyTorch. Deployment is covered with Streamlit or Flask, and Git and GitHub are used for version control. The toolset is reviewed as industry practice changes." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, learners receive a Techcadd course completion certificate after finishing the program. This is a private institute certificate, so employers will weigh your portfolio and practical skills more heavily." },
    { q: "Can I learn the Machine Learning course online, or only in the classroom?", a: "You can choose either live online classes or classroom sessions at the Jalandhar centre. Online learners get the same live teaching, projects and doubt-clearing support. This suits working professionals and learners outside Punjab." },
    { q: "What jobs can I get after learning machine learning, and what is the salary?", a: "Common roles include Junior Machine Learning Engineer, Data Analyst, Junior Data Scientist, AI Developer and Business Analyst. Freshers in India typically see approximately ₹4-8 LPA, depending on skills, portfolio, city and company. This is an indicative range, not a guarantee." },
    { q: "Can I do freelancing after this course?", a: "Yes, many learners use ML skills for freelance work such as data analysis, sales forecasting, customer segmentation and automation projects. You will need a solid portfolio and some client-handling practice to get started. The capstone project gives you a first portfolio piece." },
    { q: "Is the course suitable for beginners?", a: "Yes, the course is designed for beginners and starts with Python and statistics before moving to algorithms. Each topic builds on the previous one, and doubts are cleared in live sessions. Beginners should plan a few hours of practice each week." },
    { q: "Can students from Himachal Pradesh join the machine learning course online?", a: "Yes, students from Shimla, Solan, Dharamshala and other towns can join live online batches without relocating. A machine learning course in Himachal Pradesh through online classes also suits learners who plan remote work or freelancing. You only need a laptop and a stable internet connection." },
    { q: "What are the machine learning job opportunities in Punjab and Haryana?", a: "In Punjab, manufacturers in Ludhiana and Jalandhar, agri-tech firms and Mohali's IT companies hire for data and ML roles. In Haryana, Gurugram and Faridabad offer openings in e-commerce, logistics and MNC analytics teams. Learners also apply remotely to companies in other cities." },
    { q: "Can learners from Delhi NCR and Uttar Pradesh take this course online?", a: "Yes, learners in Delhi, Noida, Ghaziabad, Lucknow and Meerut can attend the same live online classes as other students. Delhi NCR has the largest concentration of fresher data roles in North India. Evening and weekend batches suit those who are working or studying." },
    { q: "Is there an online option for students in Jammu & Kashmir and Uttarakhand?", a: "Yes, students in Jammu, Srinagar, Dehradun and Haridwar can learn through live online classes with the same projects and support. You can then apply your skills to local sectors such as tourism, pharma and e-commerce, or take remote roles. Check batch timings with Techcadd before enrolling." },
  ],
  related: ["artificial-intelligence", "data-science", "deep-learning"],
  copy: {
    heading: { title: "Machine Learning Course", highlight: "in India", meta: "Machine Learning Course in India: Learn Practical ML with Techcadd" },
    overview: { eyebrow: "Program Overview", title: "Machine Learning Course in India: Learn Practical ML with Techcadd" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "What You Will Learn in the Machine Learning Course",
      text: "The curriculum moves from basics to deployment, with a practical task at the end of each module.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join This Machine Learning Program",
      intro: "Machine learning rewards curiosity and steady practice more than any single degree. If you are comfortable with basic computer use and school-level maths, you can start. The batches are paced so that complete beginners and learners with some coding background can progress together. No prior programming experience is required, because Python is taught from the ground up. This course is a good fit for:",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "From BCA, B.Tech, B.Sc, BBA, B.Com, MCA, MBA or M.Sc backgrounds who want a skill that employers actively hire for." },
        { icon: "Briefcase", title: "Working professionals", text: "Such as analysts, developers, testers, accountants and marketers who want to use data and prediction in their current roles." },
        { icon: "Shuffle", title: "Job switchers", text: "Moving from non-technical or support roles into data and AI-driven careers." },
        { icon: "PenTool", title: "Freelancers", text: "Who want to offer data analysis, automation and prediction projects to clients." },
        { icon: "Building2", title: "Business owners", text: "Who want to understand customer, sales and inventory data well enough to make better decisions." },
        { icon: "BookOpen", title: "Students after 12th", text: "Who are serious about a technology career and ready to put in regular practice time (a smaller share of each batch)." },
      ],
      need: "A laptop with a stable internet connection, a willingness to practise every week, and basic comfort with numbers. Everything else is covered in the training.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Learners from several North Indian states join the live online batches. Each brings a different need.",
      items: [
        { title: "Punjab", text: "With manufacturing, sports goods, hosiery and agri-tech businesses across the state, a machine learning course in Punjab helps learners apply ML to demand forecasting, quality checks and export planning." },
        { title: "Haryana", text: "Learners near Gurugram work around MNCs, e-commerce and logistics firms. A machine learning course in Haryana helps analysts and developers move into ML roles within the same industry." },
        { title: "Himachal Pradesh", text: "With tourism, horticulture and a growing remote-work culture, live online classes let learners in Shimla or other hill towns train without relocating, and take on freelance data projects." },
        { title: "Chandigarh", text: "The tricity has IT, BPO and startup teams, so a machine learning course in Chandigarh suits working professionals who want to upskill alongside their jobs." },
        { title: "Delhi NCR", text: "As the largest fresher job market, with agencies, fintech and e-commerce firms in Noida and Delhi, a machine learning course in Delhi helps graduates stand out with a project portfolio." },
        { title: "Jammu & Kashmir", text: "Tourism, handicrafts and online sellers generate useful data, and an online machine learning course for J&K students in Jammu or Srinagar offers a way to learn without leaving home." },
        { title: "Uttarakhand", text: "Learners in Dehradun and Haridwar connected to pharma units, education and hospitality can use a machine learning course in Uttarakhand to move into analytics and process-automation roles." },
        { title: "Rajasthan", text: "With tourism, jewellery and textile businesses in Jaipur, a machine learning course in Rajasthan helps learners work on customer behaviour and sales prediction." },
        { title: "Uttar Pradesh", text: "Electronics, retail and government-sector work around Lucknow and Meerut create openings, and a machine learning course in Uttar Pradesh prepares learners for data-driven roles in these sectors." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This Machine Learning Course in India",
      intro: "Machine learning is no longer limited to big tech companies. Banks use it to spot fraud, e-commerce firms use it to recommend products, hospitals use it to read scans, and factories use it to predict equipment failures. Companies in these sectors need people who can work with data and build models that solve real business problems. This program is designed to prepare you for that kind of work.",
      points: [
        { title: "It is built around projects, not theory alone", text: "Each module ends with a practical task. You work with real-style datasets, clean them, train models and present your findings, so you build a portfolio you can show in interviews or to freelance clients." },
        { title: "You learn the tools used in the industry", text: "The training covers Python, NumPy, Pandas, Matplotlib, scikit-learn and Jupyter Notebook, with an introduction to TensorFlow or PyTorch for deep learning basics. These are the tools most commonly listed in ML job descriptions." },
        { title: "It starts from zero and builds step by step", text: "You do not need a coding background. The course moves from Python and statistics to regression, classification, clustering and model evaluation, so each topic makes sense before the next begins." },
        { title: "It connects machine learning to real career paths", text: "You will understand how ML fits into roles such as Machine Learning Engineer, Data Analyst, Data Scientist (junior level), AI Developer and Business Analyst. Entry-level salaries in India are approximately ₹4-8 LPA for freshers, depending on skills, city, company and portfolio. Experienced professionals who add ML skills often move into higher-paying roles over time." },
        { title: "Flexible learning for working learners", text: "Live online classes let working professionals and learners outside the city train alongside their jobs or studies, while classroom sessions are available for those who prefer face-to-face learning." },
        { title: "Useful for freelancers and business owners too", text: "If you run a business or take on client work, you can apply ML to sales forecasting, customer segmentation and simple automation, even if you never take a full-time ML job." },
        {
          title: "What Makes the Learning Stick",
          text: "",
          list: [
            "Regular practice tasks so concepts are applied right after they are taught.",
            "Doubt-clearing support so you are not stuck on errors for days.",
            "Project review and feedback so you learn how to explain your model's results, which is a skill interviewers test.",
            "Interview and resume guidance focused on ML and data roles.",
          ],
        },
        { title: "Is This Course Right for You?", text: "Choose this program if you want a practical, structured path into machine learning, if you can commit a few hours each week to practice, and if you want to build projects rather than only collect a certificate. If you are looking for a shortcut with no practice involved, no course, including this one, will deliver results." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Techcadd",
      title: "Why Choose Techcadd for Machine Learning",
      intro: "Choosing where to learn machine learning matters as much as choosing the course. Techcadd focuses on practical skills, current tools and clear guidance, so you finish with things you can show to employers and clients.",
      points: [
        {
          title: "North India's First AI-Powered and Robotics Learning Centre",
          text: "This is what sets Techcadd apart. Machine learning is the core of modern AI and robotics. Learning it in a centre built around those technologies puts the subject in a real context. For a Machine Learning learner, this means:",
          list: [
            "Hands-on AI and robotics exposure. You see how the models you build connect to intelligent systems, such as prediction, automation and smart decision-making, rather than studying them as abstract maths.",
            "Practical projects. Your assignments focus on building and testing real models, not only reading about algorithms.",
            "A modern technology environment. You learn alongside other AI-focused programs, which helps you understand how ML, AI and automation fit together in today's industry.",
            "Benefits for learners across North India. Whether you are in Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan or Uttar Pradesh, you get the same AI-focused learning approach through live online classes.",
          ],
        },
        { title: "Practical, Project-Based Training", text: "Every module ends with a hands-on task. You clean datasets, train models, compare results and present your findings. By the end, you have a portfolio that shows what you can do." },
        { title: "Industry-Relevant Curriculum", text: "The syllabus follows the skills listed in current ML and data job descriptions: Python, data handling, core algorithms, model evaluation and basic deployment. The curriculum is reviewed so that tools and topics stay current." },
        { title: "Experienced Trainers", text: "You learn from trainers who explain concepts in simple language, connect them to real business problems, and help you debug your code when you get stuck." },
        { title: "Small Batches for Personal Attention", text: "Smaller batches mean you can ask questions, get your code reviewed and receive feedback on your projects instead of getting lost in a crowd." },
        { title: "Certificate on Completion", text: "Learners receive a Techcadd course completion certificate after finishing the program. Your portfolio and practical skills are what employers weigh most, so use the certificate as supporting proof rather than the main one." },
        { title: "Career and Placement Support", text: "Support includes resume building, interview preparation and guidance on ML and data roles. Placement support is guidance and assistance, not a job guarantee; outcomes depend on your effort, skills and the market." },
        { title: "Flexible Online and Offline Learning", text: "Choose live online classes or classroom sessions based on your schedule. Working professionals and learners outside the city can train without disrupting their jobs or studies." },
        { title: "Support for Students from Other States", text: "Learners from other states receive the same live-class experience, doubt-clearing support and project guidance as classroom students. You are not treated as a second-tier batch." },
      ],
    },
    tools: {
      title: "Tools and Software Covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "Programming", tools: "Python, Jupyter Notebook, Google Colab" },
        { area: "Data handling", tools: "NumPy, Pandas, SQL" },
        { area: "Visualisation", tools: "Matplotlib, Seaborn" },
        { area: "ML libraries", tools: "scikit-learn, XGBoost, LightGBM" },
        { area: "Deep learning (intro)", tools: "TensorFlow or PyTorch" },
        { area: "Deployment", tools: "Streamlit, Flask" },
        { area: "Version control", tools: "Git and GitHub" },
      ],
      note: "Tools evolve quickly, so the exact versions and libraries are updated as the industry changes.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Job roles: Machine Learning Engineer (junior), Data Analyst, Junior Data Scientist, AI Developer, Business Analyst with ML skills, and freelance ML consultant.",
      roles,
      rolesNote: "Salary (approximate): Freshers in India typically see about ₹4-8 LPA, depending on skills, portfolio, city and company. With 2-4 years of experience, many professionals move into the ₹8-18 LPA range. These are indicative figures and vary widely.",
      jobsTitle: "Opportunities by state",
      jobs: [
        { title: "Punjab", text: "Manufacturers in Ludhiana and Jalandhar, along with exporters and agri-tech firms, need people who can forecast demand and detect quality defects. Mohali's IT companies hire for data and ML roles." },
        { title: "Haryana", text: "Machine learning jobs in Haryana are concentrated around Gurugram and Faridabad, where MNCs, logistics firms and e-commerce companies use ML for recommendations, routing and fraud detection." },
        { title: "Delhi NCR", text: "Noida and Delhi have the largest concentration of agencies, fintech companies and product startups, which makes it the strongest market for fresher ML and analytics roles." },
        { title: "Chandigarh and Tricity", text: "IT services, BPO analytics and a growing startup scene create openings for data analysts and junior ML engineers." },
        { title: "Himachal Pradesh", text: "Pharma units in Baddi and tourism businesses generate data, and many learners here build careers through remote work and freelance projects." },
        { title: "Uttar Pradesh", text: "Lucknow and Noida offer roles in IT, electronics, retail analytics and government-linked digital projects." },
      ],
      outro: "Many learners also apply for remote roles with companies in Bengaluru, Hyderabad and Pune without relocating.",
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Ravneet Kaur", role: "Business Owner", place: "Patiala, Punjab", rating: 5, headline: "Machine Learning finally became easy to understand.", text: "I had heard a lot about machine learning but did not know where to begin. The course explained the concepts in simple language and gradually introduced algorithms, data preparation and model building. The practical sessions helped me understand how machine learning can be used in real-world business problems." },
        { name: "Aman Chauhan", role: "Freelancer", place: "Karnal, Haryana", rating: 5, headline: "Very practical for data-related work.", text: "I joined the Machine Learning course to improve my technical skills and explore data-related freelance work. I learned about Python, data preprocessing, regression, classification and model evaluation. The practical assignments helped me understand how machine learning projects are actually developed." },
        { name: "Pooja Thakur", role: "Graduate (B.Com)", place: "Dharamshala, Himachal Pradesh", rating: 4, headline: "Learned Machine Learning from home.", text: "The online classes were easy to follow and the recordings were helpful whenever I missed a session. I learned the basics of Python, machine learning algorithms, datasets and model training. The practical examples made difficult concepts much easier to understand." },
        { name: "Simran Gill", role: "Job Switcher (from Sales)", place: "Panchkula, Chandigarh Tricity", rating: 5, headline: "Structured and beginner friendly.", text: "I had no technical background, so I was initially nervous about learning machine learning. The course started with Python and basic concepts before moving into algorithms and projects. The step-by-step teaching has given me more confidence to prepare for technical interviews and explore data science roles." },
        { name: "Rohit Malhotra", role: "Working Professional (Content Executive)", place: "Delhi", rating: 4, headline: "Useful for professionals working with data.", text: "I wanted to develop technical skills alongside my existing professional experience. The course introduced me to data analysis, machine learning concepts, model building and prediction. The practical assignments helped me understand how machine learning can be applied to workplace problems." },
        { name: "Insha Mir", role: "Online Seller", place: "Jammu, Jammu & Kashmir", rating: 4, headline: "Now I understand how prediction models work.", text: "I joined the course because I wanted to understand how machine learning could be useful for business. I learned about datasets, features, training models and making predictions. I am still practising, but I now have a much clearer understanding of what machine learning can do." },
        { name: "Deepak Rawat", role: "Postgraduate (MBA)", place: "Uttarakhand", rating: 5, headline: "Clear teaching and lots of practical work.", text: "The trainer explained every concept patiently and gave practical tasks after the modules. I especially liked learning about regression, classification and model evaluation. Instead of only studying theory, we worked with datasets and built models, which made the learning experience much more useful." },
        { name: "Kritika Sharma", role: "12th-pass Student", place: "Sri Ganganagar, Rajasthan", rating: 4, headline: "A good start after 12th.", text: "I was completely new to machine learning, but the trainer started from the basics. I learned Python fundamentals, data handling, machine learning algorithms and how models are trained. The practical exercises made the classes interesting and helped me understand the concepts better." },
        { name: "Mohit Verma", role: "Working Professional (Sales)", place: "Uttar Pradesh", rating: 4, headline: "Worth it for working professionals.", text: "I joined because I wanted to understand how machine learning could be used in sales and business analytics. The course covered data preparation, prediction, classification and practical machine learning applications. I now feel more confident discussing machine learning and data-driven solutions with my team." },
        { name: "Harpreet Singh", role: "Graduate (BBA)", place: "Ambala, Haryana", rating: 5, headline: "Practical classroom learning worked best for me.", text: "I preferred offline learning, so I attended the classes at the centre. The trainer explained the concepts clearly and gave us hands-on practice with Python, datasets and machine learning models. Building models and understanding how predictions are made was the best part of the course." },
      ],
    },
    faqTitle: "Machine Learning Course: Frequently Asked Questions",
    cta: {
      title: "Start Your Machine Learning Career",
      highlight: "with Techcadd",
      text: "Ready to Build Real Machine Learning Skills? Join Techcadd's Machine Learning course and learn Python, data handling, model building and deployment through hands-on projects. Choose live online classes from anywhere in North India, or attend in the classroom at any centre. Talk to our counsellor, check the syllabus, and find a batch that fits your schedule.",
    },
  },
};
