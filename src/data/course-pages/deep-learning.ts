import type { CoursePage } from "./types";

/* /courses/deep-learning — long-form landing copy supplied by the client (used as given, section by section).
   - FAQ 17 ("Is the course recognised by the government?") is left out: its supplied answer is an editor's note
     ("Please check this with techcadd before publishing…"). Add it once a provable answer is supplied.
   - The supplied FAQ numbering skips 4 and 5 (fee, duration…) — only the questions provided are shown.
   - `duration` and `level` are the previous values — confirm with the client.
   CHECK WITH THE CLIENT before launch:
   - Reviews: the ten reviewers (names, cities, roles) are identical to the ten on /courses/google-ads,
     /courses/artificial-intelligence and /courses/machine-learning. Confirm they are real reviews of this course.
   - "North India's First AI-Powered and Robotics Learning Centre" is a first/only claim — keep only if it can be supported. */

const roles = ["Deep Learning Engineer", "Machine Learning Engineer", "Computer Vision Engineer", "NLP Engineer", "AI Engineer", "Data Scientist"];

export const deepLearning: CoursePage = {
  slug: "deep-learning",
  title: "Deep Learning Course",
  navLabel: "Deep Learning",
  group: "ai-data",
  icon: "Network",
  tagline:
    "Learn how artificial neural networks, CNNs, RNNs, LSTMs and transformers learn from data, working in Python with TensorFlow, Keras and PyTorch on real datasets.",
  level: "Advanced",
  duration: "3–4 Months",
  eligibility: "Basic computer skills and school-level maths; Python or machine learning knowledge is useful but not compulsory",
  overview: [
    "The deep learning course at techcadd is built for learners who want to move beyond basic machine learning and build real neural network systems. This Deep Learning course in India covers how artificial neural networks, CNNs, RNNs, LSTMs and transformers learn from data. You will see how they power image recognition, speech assistants, chatbots, fraud detection and generative AI tools. You will work in Python with TensorFlow, Keras and PyTorch, and train models on real datasets instead of only reading theory.",
    "The program is designed for graduates, postgraduates, working professionals, job switchers and freelancers. It balances concepts, hands-on coding and project work, so you finish with a portfolio that shows what you can actually build. For learners in Punjab, where IT, startups and export-driven businesses keep growing, AI skills open doors to better roles and remote opportunities across India.",
    "Classes run online with live sessions, and learners who prefer in-person guidance can attend at the techcadd centre in Jalandhar. By the end, you will be able to design, train, evaluate and deploy deep learning models with confidence.",
  ],
  // "Learning Outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Explain how neural networks learn and why models fail.",
    "Build, train and evaluate deep learning models on real datasets.",
    "Apply CNNs, LSTMs and transformers to image, text and sequence problems.",
    "Use pre-trained models and transfer learning to save time and cost.",
    "Deploy a model as a simple web app or API.",
    "Present a portfolio of projects with clean code on GitHub.",
  ],
  syllabus: [
    {
      title: "Module 1: Python and Maths for Deep Learning",
      summary: "Python basics, NumPy, Pandas and Matplotlib, plus the linear algebra, probability and calculus ideas you actually need.",
      topics: ["Python basics", "NumPy, Pandas and Matplotlib", "Linear algebra, probability and calculus ideas you actually need"],
    },
    {
      title: "Module 2: Machine Learning Foundations",
      summary: "Regression, classification, model evaluation, train-test splits and Scikit-learn, so beginners are ready for neural networks.",
      topics: ["Regression and classification", "Model evaluation and train-test splits", "Scikit-learn"],
    },
    {
      title: "Module 3: Neural Network Fundamentals",
      summary: "Perceptrons, activation functions, loss functions, forward and backpropagation, gradient descent and optimisers such as Adam.",
      topics: ["Perceptrons and activation functions", "Loss functions", "Forward and backpropagation", "Gradient descent and optimisers such as Adam"],
    },
    {
      title: "Module 4: Building and Tuning Models with TensorFlow, Keras and PyTorch",
      summary: "Creating, training and saving models. Tackling overfitting with dropout, regularisation, batch normalisation and early stopping.",
      topics: ["Creating, training and saving models", "Dropout and regularisation", "Batch normalisation and early stopping"],
    },
    {
      title: "Module 5: Computer Vision with CNNs",
      summary: "Convolutional neural networks, image classification, data augmentation, transfer learning and object detection basics using OpenCV.",
      topics: ["Convolutional neural networks", "Image classification and data augmentation", "Transfer learning", "Object detection basics using OpenCV"],
    },
    {
      title: "Module 6: Sequence Models: RNNs, LSTMs and GRUs",
      summary: "Time-series forecasting, text classification and sentiment analysis.",
      topics: ["Time-series forecasting", "Text classification", "Sentiment analysis"],
    },
    {
      title: "Module 7: Transformers and Generative AI Basics",
      summary: "Attention mechanism, transformer architecture, using pre-trained models from Hugging Face, fine-tuning for text tasks, and an introduction to generative models such as autoencoders and GANs.",
      topics: ["Attention mechanism and transformer architecture", "Pre-trained models from Hugging Face", "Fine-tuning for text tasks", "Generative models such as autoencoders and GANs"],
    },
    {
      title: "Module 8: Model Deployment",
      summary: "Saving models, building a simple API with Flask or FastAPI, creating demo apps with Streamlit, and basics of Git and GitHub for your portfolio.",
      topics: ["Saving models", "A simple API with Flask or FastAPI", "Demo apps with Streamlit", "Git and GitHub basics for your portfolio"],
    },
    {
      title: "Module 9: Capstone Project",
      summary: "An end-to-end project, from data collection to a working demo, which you can present in interviews or to freelance clients.",
      topics: [],
    },
  ],
  tools: [
    "Python", "Jupyter Notebook", "Google Colab", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV",
    "Hugging Face Transformers", "Flask", "FastAPI", "Streamlit", "Git and GitHub",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a deep learning course?", a: "A deep learning course teaches you how to build and train artificial neural networks that learn from large amounts of data. At techcadd, the program covers Python, neural networks, CNNs, RNNs, LSTMs, transformers and model deployment through hands-on projects." },
    { q: "Who is eligible for the deep learning course?", a: "Graduates, postgraduates, working professionals, job switchers and freelancers can join, and no prior AI experience is mandatory. Students who have completed 12th can also join if they are ready to learn Python and basic maths from the start, though the program is pitched mainly at graduates and professionals." },
    { q: "Can beginners learn deep learning without knowing machine learning?", a: "Yes, beginners can start, because the program first covers Python, maths basics and machine learning foundations before moving to neural networks. Expect to spend extra practice time on programming in the first few weeks." },
    { q: "What is covered in the deep learning syllabus?", a: "The syllabus covers Python and maths, machine learning basics, neural network fundamentals, TensorFlow, Keras and PyTorch, computer vision with CNNs, sequence models, transformers, model deployment and a capstone project. You can see the module-wise details in the \"What You Will Learn\" section above." },
    { q: "Which tools and software will I learn?", a: "You will work with Python, Jupyter Notebook, Google Colab, NumPy, Pandas, Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV, Hugging Face Transformers, Streamlit and Git/GitHub. These are widely used in AI teams and freelance projects." },
    { q: "Do I get a certificate after the course?", a: "Yes, learners receive a techcadd course completion certificate after finishing the program and its projects. The certificate shows your training, while your skills and portfolio matter most for jobs." },
    { q: "Can I learn deep learning online, or do I have to attend offline?", a: "You can learn fully online through live classes, or attend offline guidance at the techcadd centre in Jalandhar if you prefer. Working professionals often choose the online mode for flexibility." },
    { q: "What jobs can I get after a deep learning course?", a: "You can apply for roles such as Deep Learning Engineer, Machine Learning Engineer, Computer Vision Engineer, NLP Engineer, AI Engineer and Data Scientist, or work as an AI freelancer. Job offers depend on your skills, projects and interview performance and cannot be guaranteed." },
    { q: "What is the salary after learning deep learning in India?", a: "Entry-level AI and ML roles in India often pay roughly ₹4 to ₹8 lakh per year, and experienced professionals with strong projects can earn well above ₹12 lakh per year. These figures are approximate and vary by company, city and skills." },
    { q: "Can I do freelancing after this course?", a: "Yes, many learners offer services such as image classification, chatbot development, text analysis and automation to clients. A strong project portfolio on GitHub helps you win your first freelance projects." },
    { q: "Can students from Himachal Pradesh join the deep learning course online?", a: "Yes, students from Himachal Pradesh can join through live online classes from Shimla, Solan, Dharamshala or any other town with a stable internet connection. This suits learners aiming for remote jobs or freelancing." },
    { q: "What are the deep learning job opportunities in Punjab and Haryana?", a: "In Punjab, openings are growing in Mohali's IT companies, startups and agri-tech, while Haryana's Gurugram and Faridabad offer roles in MNCs, e-commerce and logistics. Remote roles with companies in other cities are also open to learners from both states." },
    { q: "Is the deep learning course useful for students from Uttarakhand and Jammu & Kashmir?", a: "Yes, learners from Uttarakhand and Jammu & Kashmir can study online and apply the skills in tourism platforms, education technology, e-commerce and remote work. Location does not limit access, since classes are live and online." },
    { q: "Is the deep learning course useful for learners in Rajasthan and Uttar Pradesh?", a: "Yes, learners in Rajasthan can apply it in tourism, jewellery and textile businesses, while learners in Uttar Pradesh can target IT, electronics and government-linked technical roles in Noida and Lucknow. The same live online classes are available to both." },
  ],
  related: ["artificial-intelligence", "machine-learning", "data-science"],
  copy: {
    heading: { title: "Deep Learning Course", highlight: "in India", meta: "Deep Learning Course in India | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Deep Learning Course in India: Program Overview", gainsTitle: "Learning Outcomes" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "What You Will Learn in the Deep Learning Course",
      text: "The curriculum moves from foundations to advanced models, with a practice task or mini project in every module.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Deep Learning Course?",
      intro: "This program is for anyone who wants to build practical AI skills, not only learn definitions. You do not need to be an existing data scientist. You need curiosity, logical thinking and the willingness to practise coding regularly. This course suits:",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "From B.Tech, BCA, B.Sc, MCA, M.Sc, MBA Analytics and related streams who want a strong, job-relevant AI skill." },
        { icon: "Briefcase", title: "Working professionals", text: "In IT, software testing, data analysis, engineering or finance who want to move into AI and machine learning roles." },
        { icon: "Shuffle", title: "Job switchers", text: "From non-technical fields who are ready to learn Python and start a new career path." },
        { icon: "PenTool", title: "Freelancers", text: "Who want to offer AI services such as image processing, text analysis or chatbot development." },
        { icon: "Building2", title: "Business owners", text: "Who want to understand how deep learning can improve forecasting, quality checks or customer support." },
        { icon: "BookOpen", title: "12th pass students", text: "Who are serious about AI and ready to start from the fundamentals. This is a small part of our learner mix, so the pace and projects are pitched mainly at graduates and professionals." },
      ],
      need: "Basic computer skills and school-level maths. Knowing Python or machine learning is useful but not compulsory. Beginners should expect to spend extra time on programming and statistics at the start.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Learners do not need to relocate to join. With live online classes, the same course reaches students across North India. Each region has its own reason to learn deep learning:",
      items: [
        { title: "Punjab", text: "A deep learning course in Punjab suits professionals in manufacturing and export units around Ludhiana, where image-based quality inspection and demand forecasting are growing needs." },
        { title: "Haryana", text: "For a deep learning course in Haryana, the draw is the MNC, e-commerce and logistics ecosystem in Gurugram, where recommendation systems and route optimisation depend on AI skills." },
        { title: "Himachal Pradesh", text: "A deep learning course in Himachal Pradesh lets learners in Shimla or Solan build skills for remote jobs and freelancing, or apply vision models to pharma quality checks in industrial belts like Baddi." },
        { title: "Chandigarh", text: "A deep learning course in Chandigarh fits IT and BPO employees in Panchkula and Mohali who want to upskill alongside their jobs and move into AI roles." },
        { title: "Delhi NCR", text: "A deep learning course in Delhi helps freshers and switchers compete in the country's largest entry-level job market, with agencies, fintech and e-commerce firms in Noida and Ghaziabad." },
        { title: "Jammu & Kashmir", text: "A deep learning course in Jammu and Kashmir gives learners in Jammu and Srinagar location-independent access, useful for online sellers, tourism platforms and horticulture businesses exploring AI." },
        { title: "Uttarakhand", text: "A deep learning course in Uttarakhand benefits learners in Dehradun and Haridwar who work in education technology, hospitality analytics or the SIDCUL pharma sector." },
        { title: "Rajasthan", text: "A deep learning course in Rajasthan is relevant for Jaipur's tourism, jewellery, handicraft and textile businesses, where image recognition and personalised recommendations add real value." },
        { title: "Uttar Pradesh", text: "A deep learning course in Uttar Pradesh suits IT and electronics professionals in Noida and Lucknow, as well as learners aiming for technical roles in the government sector." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn Deep Learning Now?",
      intro: "Deep learning is the technology behind most of the AI products people use every day: face unlock on phones, voice assistants, language translation, medical image analysis, self-checkout cameras and generative AI tools. Companies in India are hiring people who can actually build and tune these models, not only use ready-made apps.",
      points: [
        { title: "Built on practice, not slides.", text: "You write code from the first weeks. You train neural networks, see them fail, fix overfitting and improve accuracy, which is how real AI work happens." },
        { title: "A clear path from basics to advanced models.", text: "The program moves from Python and neural network fundamentals to CNNs for images, RNNs and LSTMs for sequences, and transformers for language tasks. Each step builds on the previous one, so beginners do not feel lost." },
        { title: "Industry-standard tools.", text: "You work with Python, NumPy, Pandas, TensorFlow, Keras, PyTorch, OpenCV and Google Colab, the same stack used in most AI teams and in freelance projects. You also get an introduction to using pre-trained models from Hugging Face." },
        { title: "Portfolio projects you can show.", text: "Examples include an image classifier, a face or object detection system, a sentiment analysis model and a simple chatbot. Recruiters and clients look at working projects more closely than at certificate titles." },
        { title: "Flexible learning for working people.", text: "Live online classes allow professionals and job switchers to learn without leaving their current job or city, while offline guidance remains available for those who prefer it." },
        {
          title: "Career Scope After This Course",
          text: "Deep learning skills are used across roles such as:",
          list: ["Deep Learning Engineer", "Machine Learning Engineer", "Computer Vision Engineer", "NLP Engineer", "AI Engineer", "Data Scientist", "AI Freelancer or Consultant"],
          after: "Salary depends on your skills, projects, city and interview performance. As a rough guide, entry-level AI and ML roles in India often fall in the range of ₹4 to ₹8 lakh per year, and experienced professionals with strong project work can move well above ₹12 lakh per year. These figures are approximate and vary by company. Metros like Bengaluru, Hyderabad, Pune and Mumbai hire the most AI talent, but many companies now accept remote or hybrid candidates, which helps learners based in smaller cities.",
        },
        { title: "Deep Learning vs Machine Learning: Which Should You Pick?", text: "Machine learning is the wider field and works well for structured data like sales, customer or finance records. Deep learning goes further when you work with images, audio, video or large amounts of text. If you already know basic machine learning, this course is the natural next step. If you are starting fresh, the program covers the required foundations first." },
        { title: "Is This Program Right for You?", text: "It is a good fit if you enjoy problem-solving, want a technical career with long-term demand, and are ready to practise regularly. It is not a shortcut. Results depend on your effort, but with structured guidance and real projects, steady learners can build solid, job-relevant skills." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Deep Learning?",
      intro: "Choosing where to learn deep learning matters as much as choosing the course. Here is what learners get at techcadd.",
      points: [
        {
          title: "North India's First AI-Powered and Robotics Learning Centre",
          text: "techcadd positions itself as North India's first AI-powered and Robotics learning centre, and for deep learning learners this means the subject is taught in an environment where AI and robotics are part of everyday learning, not just a chapter in a syllabus. What this means for you:",
          list: [
            "Hands-on AI and robotics exposure: Deep learning is the brain behind vision-guided robots, object detection and smart automation. Learning in a centre focused on AI and robotics helps you connect neural networks to real machines and real-world uses.",
            "Practical projects: You train models for tasks like image classification, object detection and text analysis, and understand how the same ideas apply in robotics and automation.",
            "A modern technology environment: You learn with current tools such as Python, TensorFlow, PyTorch and OpenCV, the way modern AI teams work.",
            "Value for learners across North India: Students from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh can access this exposure through live online classes without relocating.",
          ],
        },
        { title: "Practical, Project-Based Training", text: "Every major concept is followed by coding practice and a mini project. By the end, you hold a portfolio of working models you can show to employers or clients." },
        { title: "Industry-Relevant Curriculum", text: "The syllabus focuses on what AI teams actually use today: neural networks, CNNs, RNNs, LSTMs, transformers and model deployment. It is reviewed so that outdated topics do not take up your time." },
        { title: "Experienced Trainers", text: "You learn from trainers who work hands-on with AI and programming, and who can explain difficult topics like backpropagation and overfitting in simple language, with doubt-solving built into the sessions." },
        { title: "Small Batches", text: "Smaller groups mean you get personal attention, can ask questions freely and receive feedback on your code and projects." },
        { title: "Certificate on Completion", text: "Learners receive a techcadd course completion certificate after finishing the program and its projects. The certificate shows your training, while your projects and skills decide your job opportunities." },
        { title: "Career and Placement Support", text: "techcadd offers career guidance such as resume building, portfolio review and interview preparation. Job offers depend on your skills and performance and cannot be guaranteed." },
        { title: "Flexible Online and Offline Learning", text: "Live online classes suit working professionals, freelancers and learners in other cities, while offline guidance is available for those who prefer classroom learning." },
        { title: "Support for Students from Other States", text: "Learners outside Punjab receive the same live-class experience, recorded or shared learning material where available, and doubt support, so distance does not limit learning quality." },
      ],
    },
    tools: {
      title: "Tools and Software Covered",
      columns: ["Category", "Tools"],
      groups: [
        { area: "Programming", tools: "Python, Jupyter Notebook, Google Colab" },
        { area: "Data handling", tools: "NumPy, Pandas, Matplotlib, Scikit-learn" },
        { area: "Deep learning frameworks", tools: "TensorFlow, Keras, PyTorch" },
        { area: "Computer vision", tools: "OpenCV" },
        { area: "NLP and generative AI", tools: "Hugging Face Transformers" },
        { area: "Deployment and sharing", tools: "Flask or FastAPI, Streamlit, Git and GitHub" },
      ],
      note: "Tool versions change quickly, so the syllabus uses current stable releases of these libraries.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Deep learning skills lead to roles such as Deep Learning Engineer, Machine Learning Engineer, Computer Vision Engineer, NLP Engineer, AI Engineer and Data Scientist. Freelancers can also offer image processing, chatbot and automation services. Demand is growing as more companies adopt generative AI, automation and smart analytics. Salaries are approximate and vary by skills and employer.",
      roles,
      jobsTitle: "Deep Learning Jobs Across North India",
      jobs: [
        { title: "Punjab", text: "Deep learning jobs in Punjab are growing in Mohali's IT companies and startups, and in agri-tech, where crop disease detection from images is a practical use case." },
        { title: "Haryana", text: "Gurugram's MNCs, e-commerce firms and logistics companies hire for recommendation systems, demand forecasting and delivery optimisation." },
        { title: "Delhi NCR", text: "Fintech, media and digital agencies in Delhi, Noida and Ghaziabad look for AI engineers for fraud detection, chatbots and content tools, and the area has the largest fresher job market." },
        { title: "Chandigarh", text: "Tricity IT and BPO companies need NLP and automation skills for customer support analytics and document processing." },
        { title: "Rajasthan", text: "In Jaipur, tourism, jewellery and textile businesses are exploring image search, design recommendation and customer analytics." },
        { title: "Uttar Pradesh", text: "Noida's electronics and IT firms and Lucknow's government-linked projects create openings in computer vision, quality inspection and data-driven governance." },
      ],
      outro: "Metros like Bengaluru, Hyderabad, Pune and Mumbai remain the biggest AI hiring hubs, and many roles there now allow remote or hybrid work.",
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Ravneet Kaur", role: "Business Owner", place: "Patiala, Punjab", rating: 5, headline: "Deep Learning finally started making sense.", text: "I had heard about deep learning and neural networks but found the concepts difficult to understand. The course explained everything step by step, starting with the basics and gradually moving to neural networks and practical applications. The hands-on sessions helped me understand how deep learning is used in real-world problems." },
        { name: "Aman Chauhan", role: "Freelancer", place: "Karnal, Haryana", rating: 5, headline: "Very practical and project focused.", text: "I joined the Deep Learning course to expand my technical skills and work on more advanced AI projects. I learned about neural networks, deep learning models, image processing and model training. The practical projects gave me a much better understanding of how deep learning is applied in real applications." },
        { name: "Pooja Thakur", role: "Graduate (B.Com)", place: "Dharamshala, Himachal Pradesh", rating: 4, headline: "Learned Deep Learning step by step.", text: "The online classes were easy to follow, and the recordings were useful whenever I missed a session. The trainer explained neural networks, training processes and deep learning concepts in simple language. The practical examples made advanced topics much easier to understand." },
        { name: "Simran Gill", role: "Job Switcher (from Sales)", place: "Panchkula, Chandigarh Tricity", rating: 5, headline: "Well structured for beginners.", text: "I did not have a strong technical background, so I was initially worried about learning deep learning. The course started with the fundamentals and gradually introduced neural networks, model training and practical applications. The step-by-step approach helped me build confidence and understand the subject better." },
        { name: "Rohit Malhotra", role: "Working Professional (Content Executive)", place: "Delhi", rating: 4, headline: "Useful for building advanced AI skills.", text: "I wanted to learn more advanced concepts after gaining some basic knowledge of AI and machine learning. The course introduced me to neural networks, deep learning architectures and practical AI applications. The assignments helped me understand how these models can be used for real-world tasks." },
        { name: "Insha Mir", role: "Online Seller", place: "Jammu, Jammu & Kashmir", rating: 4, headline: "Now I understand neural networks better.", text: "I joined the course because I wanted to understand how advanced AI systems work. I learned about neural networks, training data, model performance and different deep learning applications. I am still practising, but the course has given me a much clearer foundation in deep learning." },
        { name: "Deepak Rawat", role: "Postgraduate (MBA)", place: "Uttarakhand", rating: 5, headline: "Clear teaching with hands-on practice.", text: "The trainer explained the concepts patiently and provided practical exercises after the modules. I particularly enjoyed learning about neural networks, image-related applications and model training. Working on practical examples instead of only learning theory made the course much more effective." },
        { name: "Kritika Sharma", role: "12th-pass Student", place: "Sri Ganganagar, Rajasthan", rating: 4, headline: "A good introduction to advanced AI.", text: "I was new to deep learning, so I was happy that the trainer started with the basics. I learned about neural networks, datasets, model training and different applications of deep learning. The practical exercises made the classes interesting and helped me understand the concepts more easily." },
        { name: "Mohit Verma", role: "Working Professional (Sales)", place: "Uttar Pradesh", rating: 4, headline: "Helpful for understanding modern AI.", text: "I joined because I wanted to understand the technology behind modern AI applications. The course covered neural networks, deep learning models and practical use cases. The trainer explained technical topics in a simple way, and I now have a better understanding of how deep learning is used in different industries." },
        { name: "Harpreet Singh", role: "Graduate (BBA)", place: "Ambala, Haryana", rating: 5, headline: "Hands-on learning made the difference.", text: "I preferred classroom learning, so I attended the course at the centre. The trainer explained each topic clearly and gave us practical exercises using datasets and deep learning models. Building and training models was the most interesting part of the course and helped me understand the concepts much better." },
      ],
    },
    faqTitle: "Frequently Asked Questions: Deep Learning Course at techcadd",
    cta: {
      title: "Start Your Deep Learning Journey",
      highlight: "with techcadd",
      text: "Build real AI skills with live classes, hands-on projects and personal guidance. Learn neural networks, CNNs, LSTMs and transformers using Python, TensorFlow and PyTorch, and finish with a portfolio of working projects. Join from anywhere in North India, whether you are in Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi, Jammu & Kashmir, Uttarakhand, Rajasthan or Uttar Pradesh.",
    },
  },
};
