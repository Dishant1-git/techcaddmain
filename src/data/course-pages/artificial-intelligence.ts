import type { CoursePage } from "./types";

/* /courses/artificial-intelligence — long-form landing copy supplied by the client (used as given, section by section;
   the brand is spelled "Techcadd" in this text and kept that way).
   - Editor notes inside the fee and certificate FAQs are left out. The supplied FAQ numbering skips 3.
   - `duration` and `level` are the previous values — confirm with the client.
   CHECK WITH THE CLIENT before launch:
   - Reviews: the ten reviewers (names, cities, roles) are identical to the ten on /courses/google-ads, and their text describes
     prompt/AI-tools training rather than this coding syllabus. Confirm they are real reviews of this course.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim — keep only if it can be supported.
   - The FAQ mentions computer vision, OpenCV and AI automation (not in the 8 modules) and a ₹3–8 lakh fresher range, while the
     rest of the page says ₹3–6 lakh. Shown as supplied. */

const roles = ["AI/ML trainee", "Data analyst", "Junior data scientist", "Python developer with AI skills", "Prompt and automation specialist", "AI consultant"];

export const artificialIntelligence: CoursePage = {
  slug: "artificial-intelligence",
  title: "Artificial Intelligence Course",
  navLabel: "Artificial Intelligence",
  group: "ai-data",
  icon: "BrainCircuit",
  tagline:
    "Begin with Python and the essential maths, then move into machine learning, deep learning, natural language processing and generative AI, applying each concept through hands-on projects.",
  level: "Intermediate",
  duration: "6–9 Months",
  eligibility: "No prior coding experience; basic school-level maths (percentages, simple algebra)",
  overview: [
    "An artificial intelligence course is no longer meant only for computer science graduates. AI now powers chatbots, recommendation engines, fraud detection, medical imaging and the generative AI tools that teams use every day, and employers across India are looking for people who can build and apply it. The Artificial Intelligence Course at Techcadd is designed for graduates, postgraduates, working professionals, job switchers, freelancers and business owners who want practical skills rather than theory alone.",
    "You begin with Python and the essential maths, then move into machine learning, deep learning, natural language processing and generative AI, applying each concept through hands-on projects. By the end, you should be able to build, test and explain working AI solutions to real business problems.",
    "Learners in Punjab, from industrial hubs to IT-focused cities, can attend classes at our Jalandhar centre, while learners in other states can join live online classes from home. Whether you want to start an AI career, add AI skills to your current role, or automate your own business, this program gives you a clear and structured path.",
  ],
  // "Learning outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Write Python code to clean, analyse and visualise data",
    "Build, train and evaluate machine learning and deep learning models",
    "Work with text data and use pre-trained language models",
    "Create basic generative AI applications using model APIs",
    "Explain your model's results in plain language to non-technical people",
    "Present a portfolio of projects to employers or clients",
  ],
  syllabus: [
    {
      title: "Module 1: Python for AI",
      summary: "Variables, data structures, functions, file handling and writing clean, reusable code. No prior coding experience is needed.",
      topics: ["Variables and data structures", "Functions", "File handling", "Writing clean, reusable code"],
    },
    {
      title: "Module 2: Data Handling and Maths Essentials",
      summary: "Working with NumPy and pandas, cleaning messy data, basic statistics, probability and the linear algebra concepts that models rely on, explained in simple terms.",
      topics: ["NumPy and pandas", "Cleaning messy data", "Basic statistics and probability", "Linear algebra concepts that models rely on"],
    },
    {
      title: "Module 3: Data Analysis and Visualisation",
      summary: "Exploring datasets, finding patterns and presenting results with charts using Matplotlib and Seaborn. Basic SQL for pulling data from databases.",
      topics: ["Exploring datasets and finding patterns", "Charts with Matplotlib and Seaborn", "Basic SQL for pulling data from databases"],
    },
    {
      title: "Module 4: Machine Learning",
      summary: "Regression, classification, clustering, feature engineering and model evaluation using scikit-learn. You learn how to avoid common problems such as overfitting.",
      topics: ["Regression, classification and clustering", "Feature engineering", "Model evaluation with scikit-learn", "Avoiding overfitting"],
    },
    {
      title: "Module 5: Deep Learning",
      summary: "Neural networks, how they learn, and building models with TensorFlow or PyTorch. Introduction to image-based tasks such as classification.",
      topics: ["Neural networks and how they learn", "Building models with TensorFlow or PyTorch", "Image-based tasks such as classification"],
    },
    {
      title: "Module 6: Natural Language Processing",
      summary: "Text cleaning, sentiment analysis, text classification and working with pre-trained language models through Hugging Face.",
      topics: ["Text cleaning", "Sentiment analysis", "Text classification", "Pre-trained language models through Hugging Face"],
    },
    {
      title: "Module 7: Generative AI and Prompt Engineering",
      summary: "How large language models work, writing effective prompts, using AI model APIs, building simple chatbots and document question-answering tools, and an introduction to retrieval-augmented generation (RAG).",
      topics: ["How large language models work", "Writing effective prompts", "Using AI model APIs", "Simple chatbots and document question-answering tools", "Introduction to retrieval-augmented generation (RAG)"],
    },
    {
      title: "Module 8: Deployment, Responsible AI and Capstone Project",
      summary: "Turning a model into a simple web app with Streamlit, version control with Git, understanding bias, privacy and AI ethics, and completing an end-to-end capstone project for your portfolio.",
      topics: ["A simple web app with Streamlit", "Version control with Git", "Bias, privacy and AI ethics", "End-to-end capstone project"],
    },
  ],
  tools: [
    "Python", "Jupyter Notebook", "Google Colab", "NumPy", "pandas", "Matplotlib", "Seaborn", "scikit-learn", "TensorFlow", "PyTorch",
    "Hugging Face", "LangChain", "Streamlit", "Git and GitHub", "SQL",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who is eligible for the artificial intelligence course?", a: "Graduates, postgraduates, working professionals, job switchers, freelancers, business owners and 12th-pass students can join. No computer science degree is required, as the course starts with Python and fundamentals." },
    { q: "Can beginners with no coding background learn AI?", a: "Yes, beginners can learn AI here. The early modules teach logic, Python and data handling in plain language before moving to machine learning and generative AI." },
    { q: "What is the fee for the artificial intelligence course?", a: "The fee depends on the batch, mode of learning and course duration, so please request the current fee structure through the callback form or by contacting Techcadd." },
    { q: "What topics does the AI syllabus cover?", a: "The syllabus covers Python, data handling and statistics, machine learning, deep learning, computer vision, natural language processing, generative AI, AI automation and a capstone project. Each module includes practical work." },
    { q: "Which tools and software will I learn?", a: "You will work with Python, SQL, NumPy, pandas, scikit-learn, TensorFlow or PyTorch, OpenCV, Hugging Face, LangChain, Jupyter or Google Colab, Git and Streamlit. The toolset is updated as the industry changes." },
    { q: "Will I get a certificate after completing the course?", a: "Yes, you receive a Techcadd course completion certificate after finishing the program." },
    { q: "Is the course available online or offline?", a: "Both options are available. You can attend live online classes from anywhere in India or join in person at the Jalandhar centre in Punjab." },
    { q: "What jobs can I get after an artificial intelligence course?", a: "Common roles include AI/ML engineer, data analyst, junior data scientist, NLP or prompt engineer, AI automation specialist and computer vision engineer. Many learners also apply the skills in marketing, operations or their own business. Outcomes depend on your effort, portfolio and the job market, and jobs are not guaranteed." },
    { q: "What salary can a fresher expect in AI?", a: "Fresher salaries in India are approximately ₹3 to ₹8 lakh per year, depending on city, company and skill level. These are approximate market figures, not a promise." },
    { q: "Can I do freelancing after learning AI?", a: "Yes, freelancing is a realistic path. You can offer services such as chatbot development, data analysis, content and workflow automation and AI-assisted marketing, using the projects from your portfolio as proof of skill." },
    { q: "Does the course include real projects?", a: "Yes, project work runs through every module and ends with a capstone project. You can build items like a prediction model, an image recognition tool, a chatbot or an automation workflow." },
    { q: "Can students from Himachal Pradesh join the artificial intelligence course online?", a: "Yes, students from Himachal Pradesh can join fully online through live classes. This works well for learners in Shimla, Dharamshala and Solan who want to study without relocating." },
    { q: "What are the AI job opportunities in Punjab and Haryana?", a: "In Punjab, opportunities are growing in Mohali's IT and startup cluster and in manufacturing and export units that use automation and forecasting. In Haryana, Gurugram and Faridabad offer analytics and automation roles in MNCs, logistics, automobile and e-commerce companies." },
    { q: "Is there an AI course for working professionals in Delhi NCR and Uttar Pradesh?", a: "Yes, working professionals in Delhi NCR, Noida, Ghaziabad, Lucknow and Meerut can attend live online sessions with flexible timings. Evening and weekend batches suit those who work full time." },
    { q: "Can learners from Jammu & Kashmir, Uttarakhand and Rajasthan study this course?", a: "Yes, learners from Jammu & Kashmir, Uttarakhand and Rajasthan can study online with live classes, doubt support and project guidance, with no need to travel to Jalandhar." },
    { q: "How do I join the course or get a free demo?", a: "Fill in the callback form at the end of this page, and the Techcadd team will contact you with batch dates, fees and demo details." },
  ],
  related: ["machine-learning", "deep-learning", "data-science"],
  copy: {
    heading: { title: "Artificial Intelligence Course", highlight: "at Techcadd", meta: "Artificial Intelligence Course at Techcadd: Python, Machine Learning, Deep Learning & Generative AI" },
    overview: { eyebrow: "Program Overview", title: "The Artificial Intelligence Course at Techcadd", gainsTitle: "Learning outcomes" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "Module-wise curriculum",
      text: "The Artificial Intelligence Course follows a clear path from basic programming to building and deploying AI applications. Each module ends with a practical task, so you apply what you learn before moving on.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Artificial Intelligence Course",
      intro: "You do not need to be a programmer to start learning AI. The course begins from the fundamentals, so it suits anyone with basic computer comfort, curiosity and the willingness to practise regularly. This course is a good fit for:",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Students from BCA, B.Tech, B.Sc, BBA, B.Com, MCA, MBA and other streams can add AI as a job-ready skill. Non-technical graduates are welcome, because the course teaches Python from scratch." },
        { icon: "Briefcase", title: "Working professionals", text: "If you work in marketing, finance, HR, operations or IT, you can learn to automate routine tasks, analyse data faster and use AI tools with confidence in your current role." },
        { icon: "Shuffle", title: "Job switchers", text: "If you want to move from a non-tech or support role into analytics and AI-related work, this course gives you a structured way to build skills and a project portfolio." },
        { icon: "PenTool", title: "Freelancers", text: "You can learn to offer AI-based services such as chatbots, content automation and data analysis to clients in India and abroad." },
        { icon: "Building2", title: "Business owners", text: "You can learn to use AI for customer replies, sales forecasting, marketing and inventory, so decisions rest on data rather than guesswork." },
        { icon: "BookOpen", title: "12th-pass students", text: "Students who have finished 12th and are comfortable with basic maths can use this course to start building skills early, though it is designed mainly for graduates and professionals." },
      ],
      need: "No prior coding experience, basic school-level maths (percentages, simple algebra), and a laptop and a stable internet connection for live online classes.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from across states",
      intro: "Because live online classes are available, you can join from wherever you are. Here is how the course fits learners in different regions:",
      items: [
        { title: "Punjab", text: "Manufacturers, exporters and agri-tech businesses in cities like Ludhiana are using AI for demand forecasting and quality checks. Anyone looking for an artificial intelligence course in Punjab can learn these applications, and Mohali's growing IT sector is another strong destination for skilled freshers." },
        { title: "Haryana", text: "Gurugram's MNCs and the e-commerce and logistics companies around Faridabad hire for analytics and automation roles, so learners aiming for corporate jobs can build the right skills here. Those searching for an artificial intelligence course in Haryana can follow the same route online." },
        { title: "Himachal Pradesh", text: "Hotels, tourism businesses and horticulture units in places like Shimla can use AI chatbots and smart booking tools. Learners seeking an artificial intelligence course in Himachal Pradesh can also build remote-work and freelancing careers without leaving the hills." },
        { title: "Chandigarh", text: "The city's IT, BPO and startup ecosystem, along with Panchkula nearby, values people who can apply AI tools to real workflows. Learners can explore an artificial intelligence course in Chandigarh to move from support roles to technical ones." },
        { title: "Delhi NCR", text: "With agencies, fintech firms and the country's largest fresher job market, Delhi and Noida reward learners who bring portfolio projects. An artificial intelligence course in Delhi helps freshers stand out among many applicants." },
        { title: "Jammu & Kashmir", text: "Online sellers, handicraft businesses and tourism operators in Jammu and Srinagar can use AI for product descriptions, customer support and market analysis. Learners can join an artificial intelligence course in Jammu and Kashmir entirely online." },
        { title: "Uttarakhand", text: "Hospitality, tourism and the pharma units around Haridwar and SIDCUL are adopting automation, and Dehradun's education sector is doing the same. This makes an artificial intelligence course in Uttarakhand useful for both job seekers and local entrepreneurs." },
        { title: "Rajasthan", text: "Jaipur's tourism, jewellery and textile businesses can use AI for recommendations, design trends and customer insights. An artificial intelligence course in Rajasthan helps both employees and business owners in these sectors." },
        { title: "Uttar Pradesh", text: "IT, electronics and retail are expanding in Lucknow and Meerut, and government digital projects need data-skilled people. Learners can take an artificial intelligence course in Uttar Pradesh online and aim for these growing opportunities." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Artificial Intelligence Course Is Worth Your Time",
      intro: "AI has moved from research labs into everyday business. Banks use it to detect fraud, hospitals use it to read scans, retailers use it to predict demand, and small businesses use it to answer customers around the clock. This course is built to give you the skills behind these applications, not just the vocabulary.",
      points: [
        { title: "Learn by building, not just watching", text: "Every concept is tied to a hands-on task. You write Python code, train machine learning models, work with real datasets and build projects such as a prediction model, a text classifier and a generative AI-based assistant. By the end, you have a portfolio you can show to employers or clients, which often matters more than a certificate alone." },
        { title: "A curriculum that follows what the industry actually uses", text: "The program covers the full path from foundations to modern applications: Python, data handling, machine learning, deep learning, natural language processing and generative AI. It also introduces responsible AI, so you understand bias, privacy and the limits of what models can do. The tools taught are the ones working teams rely on, including Python libraries, Jupyter notebooks and current generative AI platforms." },
        {
          title: "Skills that fit many career paths",
          text: "AI skills are valuable well beyond one job title. Depending on your background, you can aim for roles such as:",
          list: [
            "AI or machine learning trainee",
            "Data analyst",
            "Python developer with AI skills",
            "Prompt and automation specialist",
            "AI-enabled marketing or operations executive",
            "Freelance AI consultant",
          ],
          after: "Entry-level salaries for these roles vary widely by city, company and skill level. As an approximate guide, freshers in India often start in the range of ₹3 to ₹6 lakh per year, and experienced professionals who add AI to their existing expertise can move into higher bands. Treat these numbers as indicative, since the market changes quickly.",
        },
        { title: "Flexible for working learners", text: "Many learners are already employed or running a business, so the course supports both live online classes and in-person learning. You can fit sessions around your schedule, revisit concepts through practice tasks, and ask questions directly instead of studying alone." },
        { title: "Opportunities that reach beyond your city", text: "Because AI work can be done remotely, your location matters less than your skills. Learners can apply for roles in Bengaluru, Hyderabad, Pune and Mumbai, take on remote projects, or build services for international clients, all while staying close to home." },
        { title: "Is this course right for you?", text: "This course suits you if you want practical, job-focused AI skills and are ready to practise regularly. It may not be the best fit if you are looking only for a quick overview or a theory-heavy academic programme. If you are unsure, a free demo class is a good way to see the teaching style before you decide." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "Techcadd is positioned as North India's first AI-powered and Robotics learning centre, and that shapes how the Artificial Intelligence Course is taught. Learners work in a modern, technology-focused environment with hands-on exposure to AI and robotics concepts, and they build practical projects instead of only reading theory. For this course, that means you see how AI models connect with real applications and automation. The same learning experience is open to students from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh." },
        { title: "Practical, project-based training", text: "You learn AI by doing. Each module includes coding exercises and mini-projects, such as a prediction model or a text classifier, so you finish with work you can explain in interviews or show to clients." },
        { title: "Industry-relevant curriculum", text: "The syllabus covers Python, machine learning, deep learning, natural language processing and generative AI, along with responsible AI practices. Topics and tools are chosen for what teams actually use in AI work today, and the content can be updated as the field changes." },
        { title: "Experienced trainers", text: "Trainers focus on explaining concepts in simple language and guiding you through real coding problems. You can ask questions during sessions and get feedback on your practice work, which matters a lot when you are learning something new." },
        { title: "Small, focused batches", text: "Smaller batches give each learner more attention. If you get stuck on a concept like model evaluation or data cleaning, there is room to slow down and resolve it instead of falling behind." },
        { title: "Certificate and career support", text: "On completing the course, learners receive a Techcadd course certificate. Career guidance covers portfolio building, resume preparation and interview practice, so you know how to present your AI skills to employers or freelance clients." },
        { title: "Flexible online and offline learning", text: "Choose live online classes or in-person learning, depending on what suits your schedule. This helps working professionals and business owners who cannot attend fixed daily sessions in person." },
        { title: "Support for learners from other states", text: "Students outside Punjab are not left to study alone. Live online sessions, doubt-clearing and shared practice material mean that a learner in Shimla, Jaipur or Lucknow gets the same teaching as a learner sitting in class." },
      ],
    },
    tools: {
      title: "Tools and software covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "Programming and notebooks", tools: "Python, Jupyter Notebook, Google Colab" },
        { area: "Data libraries", tools: "NumPy, pandas, Matplotlib, Seaborn" },
        { area: "Machine learning and deep learning", tools: "scikit-learn, TensorFlow, PyTorch" },
        { area: "NLP and generative AI", tools: "Hugging Face, LLM APIs from major providers, LangChain" },
        { area: "Deployment and workflow", tools: "Streamlit, Git and GitHub, SQL" },
      ],
      note: "The AI field changes fast, so specific tools and versions may be updated to match current industry practice.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and future scope",
      intro: "AI skills are being used across IT, finance, healthcare, retail, education and manufacturing. Roles that learners commonly aim for include AI/ML trainee, data analyst, junior data scientist, Python developer with AI skills, prompt and automation specialist, and AI consultant. Salaries are approximate and depend on skills, city and employer, but entry-level roles in India often fall around ₹3 to ₹6 lakh per year, with growth as your experience and project work increase.",
      roles,
      jobsTitle: "Artificial intelligence jobs across states",
      jobs: [
        { title: "Punjab", text: "Manufacturing, hosiery and sports goods units in Amritsar and Patiala are beginning to use AI for quality inspection and demand planning, and these units need people who can build and maintain such systems. Artificial intelligence jobs in Punjab also exist in agri-tech and in the state's growing startup scene." },
        { title: "Haryana", text: "Corporate offices and logistics firms around Karnal and Ambala, along with larger employers in the NCR belt, look for analysts and automation specialists. Artificial intelligence jobs in Haryana lean towards IT services, e-commerce and supply chain optimisation." },
        { title: "Himachal Pradesh", text: "Pharma units in Baddi and tourism businesses in Dharamshala can use AI for process control and customer engagement. Many learners here choose remote jobs or freelancing so they can work with companies elsewhere while staying in the state." },
        { title: "Delhi NCR", text: "Agencies, fintech companies and media houses in Delhi and Ghaziabad hire freshers for analytics, content automation and AI support roles. It is the most competitive fresher market, so a strong project portfolio makes a clear difference." },
        { title: "Uttarakhand", text: "Tourism, hospitality and education businesses can use recommendation systems, chatbots and booking analytics, which creates openings for local AI-skilled professionals and consultants." },
        { title: "Rajasthan", text: "Handicraft, textile and tourism sellers, including those in Sri Ganganagar's farming economy, can use AI for demand forecasting and online customer service, opening freelance and in-house roles." },
      ],
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Ravneet Kaur", role: "Business Owner", place: "Patiala, Punjab", rating: 5, headline: "AI finally started making sense to me.", text: "I had heard a lot about AI but did not know where to start. The course explained AI concepts in simple language and showed how tools can be used in daily business work. The practical sessions helped me understand how AI can save time and improve productivity." },
        { name: "Aman Chauhan", role: "Freelancer", place: "Karnal, Haryana", rating: 5, headline: "Very practical for freelancers.", text: "I joined the live online AI classes to improve my freelance services. I learned how to use AI for content, research, presentations and client work. The trainer also explained prompt writing clearly, and doubts were resolved quickly." },
        { name: "Pooja Thakur", role: "Graduate (B.Com)", place: "Dharamshala, Himachal Pradesh", rating: 4, headline: "Learned AI from home.", text: "The online classes were easy to follow and the recordings helped whenever I missed a session. I learned the basics of generative AI, prompting and different AI tools. The practical examples made the topics much easier to understand." },
        { name: "Simran Gill", role: "Job Switcher (from Sales)", place: "Panchkula, Chandigarh Tricity", rating: 5, headline: "Structured and beginner friendly.", text: "I had no technical background, so I was initially worried about learning AI. The course started with the basics and gradually moved to practical applications. Learning prompt engineering and AI tools has given me more confidence for interviews and workplace tasks." },
        { name: "Rohit Malhotra", role: "Working Professional (Content Executive)", place: "Delhi", rating: 4, headline: "Useful for professionals in the NCR.", text: "I wanted to add AI skills to my existing content experience. The course covered AI-assisted content creation, research, ideas and productivity workflows. The practical assignments helped me understand how to use AI responsibly in my daily work." },
        { name: "Insha Mir", role: "Online Seller", place: "Jammu, Jammu & Kashmir", rating: 4, headline: "AI is helping me save time.", text: "I joined the course to understand how AI could help with my online business. I learned how to use AI for product descriptions, customer communication, ideas and basic marketing tasks. I am still practising, but I now have a much better understanding of what AI can do." },
        { name: "Deepak Rawat", role: "Postgraduate (MBA)", place: "Uttarakhand", rating: 5, headline: "Clear teaching and lots of practice.", text: "The trainer explained each topic patiently and gave practical tasks after the modules. I especially liked the sessions on prompt engineering and AI productivity tools. Instead of only learning theory, we actually practised using AI for different business situations." },
        { name: "Kritika Sharma", role: "12th-pass Student", place: "Sri Ganganagar, Rajasthan", rating: 4, headline: "A good start after 12th.", text: "I was completely new to AI, but the trainer started from the basics. I learned about generative AI, prompts, AI tools and how they can be used for study and work. The practical exercises made the classes interesting and easy to follow." },
        { name: "Mohit Verma", role: "Working Professional (Sales)", place: "Uttar Pradesh", rating: 4, headline: "Worth it for working professionals.", text: "I joined because I wanted to understand how AI could help me with sales and lead-generation work. The course showed me practical ways to use AI for research, communication and preparing ideas. I now feel more confident discussing AI with my team." },
        { name: "Harpreet Singh", role: "Graduate (BBA)", place: "Ambala, Haryana", rating: 5, headline: "Practical classroom learning worked best for me.", text: "I preferred offline learning, so I attended the classes at the centre. The trainer explained concepts clearly and gave us hands-on practice with different AI tools. Learning how to create effective prompts and complete tasks using AI was the best part of the course." },
      ],
    },
    faqTitle: "Artificial Intelligence Course: Frequently Asked Questions",
    cta: {
      title: "Start Your AI Career",
      highlight: "with Techcadd",
      text: "Build real AI skills, not just certificate lines. Join the artificial intelligence course and learn Python, machine learning, deep learning and generative AI through hands-on projects, with live online classes from anywhere in India or classroom training at any of our centres.",
    },
  },
};
