import type { CoursePage } from "./types";

/* /courses/mean-stack — long-form landing copy supplied by the client (Google Doc "…courses" file), used as given.
   Left out on purpose: the student reviews (the document marks them as sample / illustrative drafts, so this page keeps
   the shared testimonials — add `copy.reviews` when real, consented reviews exist), the SEO/GEO strategy stage, the
   optional trust line outside the "Why Choose Techcadd" section, and the CTA's course-details table and form fields.
   NOT in the document for this course (previous content kept): CTA.
   Fields the document does not cover (tagline, level, duration, eligibility, projects, whyNow, related, tools) are the previous
   values — the document says to confirm duration and fees with Techcadd. The "North India's first AI-powered and Robotics
   learning centre" line is a first/only claim: keep only if it can be supported. */

const roles = ["Full Stack Developer", "Angular Developer", "Node.js Developer", "JavaScript Developer", "Frontend Developer", "Backend Developer", "Web Application Developer", "API Developer", "Junior Software Developer"];

export const meanStack: CoursePage = {
  slug: "mean-stack",
  title: "MEAN Stack Development Course",
  navLabel: "MEAN Stack",
  group: "programming",
  icon: "Workflow",
  tagline:
    "Build enterprise-style web applications with MongoDB, Express, Angular and Node.js, using TypeScript, RxJS and modern deployment practices.",
  level: "Intermediate",
  duration: "5–6 Months",
  eligibility: "Basic HTML/CSS/JavaScript knowledge; graduates and final-year students welcome",
  overview: [
    "A MEAN Stack Course is designed to introduce learners to full-stack web application development using MongoDB, Express.js, Angular, and Node.js. Together, these technologies cover major parts of a modern web application, including the frontend, server-side application logic, APIs, and database management. (CSC India Learning)",
    "The course can be useful for graduates, postgraduates, working professionals, career changers, aspiring developers, and learners interested in building web applications. Depending on the curriculum, learners can expect to work with JavaScript, Angular-based interfaces, Node.js and Express.js backend development, MongoDB databases, APIs, authentication, debugging, and application deployment.",
    "MEAN Stack learning is particularly relevant for people who want to understand how different parts of a web application communicate rather than learning frontend or backend development in isolation.",
    "For learners in Punjab, classroom learning can be explored at the Techcadd Jalandhar centre, while learners from other regions can consider the online learning option.",
  ],
  gains: [
    "Build scalable single-page applications with modern Angular and TypeScript",
    "Create Node.js and Express APIs backed by MongoDB",
    "Handle reactive data flow with RxJS and Angular signals",
    "Apply authentication, testing and cloud deployment practices",
    "Course completion certification, live projects and placement assistance",
  ],
  syllabus: [
    {
      title: "Module 1: Web Development Fundamentals",
      summary: "Learners can begin with the foundations required to understand modern web applications. This may include HTML, CSS, responsive design, JavaScript fundamentals, browser behaviour and basic programming logic. These concepts create the foundation for working with Angular on the frontend and Node.js on the backend.",
      topics: [],
    },
    {
      title: "Module 2: JavaScript and TypeScript",
      summary: "JavaScript is central to the MEAN ecosystem, while TypeScript is widely used with Angular.",
      topics: ["Variables and data types", "Functions and objects", "Arrays and control structures", "ES6+ concepts", "Asynchronous programming", "Promises and callbacks", "Modules", "TypeScript types and interfaces", "Classes and object-oriented concepts"],
    },
    {
      title: "Module 3: Angular for Frontend Development",
      summary: "Angular is the frontend framework in MEAN Stack. Learners can explore how Angular is used to create structured, interactive web interfaces. This can help learners move beyond static web pages and understand how dynamic web applications are developed.",
      topics: ["Components", "Templates", "Directives", "Data binding", "Services", "Routing", "Forms", "Validation", "HTTP communication", "Application structure", "Angular project development"],
    },
    {
      title: "Module 4: Node.js for Backend Development",
      summary: "Node.js provides the server-side environment for JavaScript development. Understanding Node.js helps learners see how requests from a frontend application can be processed on the server.",
      topics: ["Node.js fundamentals", "Modules", "npm", "File and package management", "Server-side JavaScript", "Asynchronous operations", "Creating backend services", "Connecting applications with databases"],
    },
    {
      title: "Module 5: Express.js and REST APIs",
      summary: "Express.js can be used with Node.js to create backend applications and APIs. Tools such as Postman may also be useful for testing and understanding API requests and responses.",
      topics: ["Express application structure", "Routes", "Middleware", "Request and response handling", "REST API development", "API testing", "Error handling", "Connecting APIs with databases"],
    },
    {
      title: "Module 6: MongoDB and Database Management",
      summary: "MongoDB is the database component of MEAN Stack. Mongoose may also be introduced for working with MongoDB from Node.js applications, depending on the curriculum.",
      topics: ["Documents and collections", "CRUD operations", "Database design basics", "Queries", "Data relationships", "Connecting MongoDB with Node.js", "Working with MongoDB through application code"],
    },
    {
      title: "Module 7: Authentication and Application Security Basics",
      summary: "The objective is to help learners understand how applications manage users and protect restricted functionality.",
      topics: ["User registration and login", "Password handling", "Authentication", "Authorization", "Protected routes", "JWT-based authentication", "Basic security practices"],
    },
    {
      title: "Module 8: Git, GitHub and Development Tools",
      summary: "These tools can help learners manage code, track changes, collaborate and test applications.",
      topics: ["Git", "GitHub", "Visual Studio Code", "npm", "Browser developer tools", "Postman"],
    },
    {
      title: "Module 9: Full-Stack Project Development",
      summary: "The most useful part of MEAN learning is connecting everything together. Angular → Express.js → Node.js → MongoDB For example, a learner could develop a business management application where Angular handles the interface, Express and Node.js process requests, and MongoDB stores application data. Project work can help learners understand the complete flow of a web application rather than learning each technology separately.",
      topics: [],
    },
  ],
  tools: [
    "Angular",
    "TypeScript",
    "RxJS",
    "NgRx",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Angular Material",
    "Playwright",
    "Docker",
    "Git & GitHub",
  ],
  projects: [
    {
      title: "Employee Management Portal",
      text: "Role-based portal for departments, attendance and leave requests with reactive forms and dashboards.",
      tags: ["Angular", "RBAC", "MongoDB"],
    },
    {
      title: "Inventory and Billing System",
      text: "Stock tracking, invoice generation and reports for a small trading business, in the style of a Ludhiana manufacturer’s back office.",
      tags: ["Express", "Mongoose", "PDF Export"],
    },
    {
      title: "Real-Time Support Ticket System",
      text: "Raise, assign and track tickets with live status updates.",
      tags: ["Socket.IO", "RxJS", "Angular"],
    },
    {
      title: "Online Learning Platform",
      text: "Courses, enrolments and progress tracking with lazy-loaded feature modules.",
      tags: ["Lazy Loading", "NgRx", "REST"],
    },
    {
      title: "Appointment Booking App",
      text: "Slot booking with validation, email confirmation and an admin calendar.",
      tags: ["Reactive Forms", "Node.js", "Email"],
    },
    {
      title: "Sales Analytics Dashboard",
      text: "Interactive charts powered by MongoDB aggregation and Angular signals.",
      tags: ["Aggregation", "Signals", "Charts"],
    },
  ],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [
    "Angular continues to be a common choice for enterprise dashboards and internal tools, and recent releases with signals and standalone components make it easier to learn.",
    "TypeScript across the stack helps teams catch errors early, a habit that employers value in new developers.",
  ],
  faqs: [
    { q: "What is a MEAN Stack Course?", a: "A MEAN Stack Course teaches full-stack web development using MongoDB, Express.js, Angular and Node.js, along with supporting programming and development tools." },
    { q: "Who can join a MEAN Stack Course?", a: "Graduates, postgraduates, students, working professionals, career changers and beginners interested in web development can consider the course." },
    { q: "Can beginners learn MEAN Stack?", a: "Yes, beginners can learn MEAN Stack by starting with programming and web-development fundamentals before progressing to Angular, Node.js, Express.js and MongoDB." },
    { q: "What are the main technologies in MEAN Stack?", a: "The four core technologies are MongoDB, Express.js, Angular and Node.js." },
    { q: "Is MEAN Stack different from MERN Stack?", a: "Yes. Both are JavaScript-based full-stack technologies, but MEAN uses Angular, whereas MERN uses React as its frontend technology." },
    { q: "What programming language is used in MEAN Stack?", a: "JavaScript is central to MEAN Stack, while TypeScript is commonly used for Angular development." },
    { q: "What tools can be covered in MEAN Stack training?", a: "Depending on the curriculum, learners may work with Angular, Node.js, Express.js, MongoDB, Mongoose, REST APIs, Git, GitHub, npm, Postman and Visual Studio Code." },
    { q: "Can I learn MEAN Stack online?", a: "Yes. Online learning can allow students and working professionals to study MEAN Stack without attending a physical classroom." },
    { q: "Is offline MEAN Stack learning available in Jalandhar?", a: "Techcadd offers Online + Offline learning, with its physical centre located in Jalandhar, Punjab." },
    { q: "What career options are available after learning MEAN Stack?", a: "Possible career directions include Full Stack Developer, Angular Developer, Node.js Developer, JavaScript Developer, Frontend Developer, Backend Developer and Web Application Developer." },
    { q: "Can MEAN Stack skills help with freelancing?", a: "Yes. Full-stack skills can be useful for freelance projects involving websites, dashboards, APIs, business applications and database-driven web solutions." },
    { q: "Can working professionals learn MEAN Stack?", a: "Yes. Working professionals can use online learning to develop or upgrade their web-development skills alongside their existing work, subject to their available time." },
    { q: "Is a MEAN Stack Course useful for career switching?", a: "It can be useful for career changers who want to move towards software and web development, particularly when they combine course learning with programming practice and projects." },
    { q: "What projects can be built using MEAN Stack?", a: "Depending on the curriculum and learner's skill level, projects can include dashboards, customer portals, management applications, authentication systems, API-driven applications and database-based web applications." },
    { q: "Is a certificate enough to get a MEAN Stack job?", a: "No certificate alone can guarantee employment. Employers may also consider programming ability, practical projects, problem-solving skills, technical understanding and interview performance." },
    { q: "Does MEAN Stack have career scope in Punjab?", a: "Yes. Learners in Punjab can explore opportunities in IT services, software companies, startups, e-commerce businesses and freelance development, depending on their skills and experience." },
    { q: "Is MEAN Stack useful for learners in Haryana and Delhi NCR?", a: "Yes. Learners from Gurugram, Faridabad, Delhi, Noida and Ghaziabad can use MEAN Stack skills for exploring software, SaaS, e-commerce, IT services and technology-sector opportunities." },
    { q: "Can students from Himachal Pradesh learn MEAN Stack online?", a: "Yes. Students from Shimla, Dharamshala and Solan can use online learning to develop full-stack skills while remaining in their home location." },
    { q: "Can learners from Jammu & Kashmir join online MEAN Stack training?", a: "Yes. Learners from Jammu and Srinagar can use online learning to access MEAN Stack training and develop skills relevant to remote work, freelancing and software-development careers." },
    { q: "What should I learn after completing MEAN Stack training?", a: "After building a strong MEAN foundation, learners can deepen their knowledge through advanced Angular, backend architecture, API development, authentication, testing, deployment, cloud technologies and larger real-world projects." },
  ],
  related: ["mern-stack", "web-development", "java"],
  copy: {
    heading: { title: "MEAN Stack Course", highlight: "Online + Jalandhar", meta: "MEAN Stack Course: MongoDB, Express.js, Angular and Node.js | techcadd" },
    overview: { eyebrow: "Program Overview", title: "What the MEAN Stack Course covers" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "What You Will Learn in the MEAN Stack Course" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This MEAN Stack Course?",
      intro: "A MEAN Stack Course can suit learners who want to move into full-stack web development and are willing to spend regular time practising programming concepts. Because the stack combines frontend, backend, database, and API development, learners should be prepared for hands-on coding rather than treating the course as purely theoretical training.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, IT, engineering, mathematics, business, or other backgrounds can consider MEAN Stack training if they want to develop software and web-development skills. A technical background can make some concepts easier to approach, but the more important factor is the learner's willingness to practise programming consistently." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who want to add a development skill to their existing qualification can use MEAN Stack training to move toward web-development roles. Learners from management or non-technical backgrounds may need additional time for programming fundamentals before progressing into the complete stack." },
        { icon: "Briefcase", title: "Working Professionals", text: "Working professionals in IT, software support, web services, digital products, or related areas can use MEAN Stack training for upskilling. Someone already familiar with programming may be able to connect the different technologies more quickly and apply them to existing technical responsibilities." },
        { icon: "Shuffle", title: "Job Switchers", text: "Professionals planning a move into software development can explore MEAN Stack as a structured pathway into full-stack development. A career switch should be approached realistically: completing a course is only one part of becoming job-ready, while coding practice, projects, debugging ability, Git usage, and interview preparation also matter." },
        { icon: "PenTool", title: "Freelancers", text: "MEAN Stack skills can be useful for freelancers who want to develop customized web applications rather than only managing basic websites. Freelance opportunities can involve frontend development, API development, database-backed applications, dashboards, authentication systems, and maintenance. However, freelance success depends on technical ability, portfolio quality, communication, project management, and finding suitable clients." },
        { icon: "Building2", title: "Business Owners", text: "Entrepreneurs and business owners who want to understand the technology behind their digital products can benefit from learning full-stack concepts. MEAN Stack knowledge can help them communicate more effectively with developers and understand how application interfaces, servers, APIs, and databases work together." },
        { icon: "Rocket", title: "Career Changers", text: "People moving from another professional field can consider MEAN Stack if they are genuinely interested in programming. Unlike simpler digital tools, full-stack development requires consistent coding practice, logical thinking, debugging, and problem-solving." },
        { icon: "Laptop", title: "Beginners", text: "Beginners can learn MEAN Stack, but they should understand that it is more technically demanding than basic website-building courses." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass students who have a strong interest in programming can explore the field, particularly if they plan to continue their formal education alongside skill development. The course should complement rather than replace a broader educational pathway for students at this stage." },
      ],
      need: "A learner may need to first become comfortable with HTML, CSS, JavaScript, programming logic, and web fundamentals before moving deeply into Angular, Node.js, Express.js, and MongoDB.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Punjab learners can explore MEAN Stack development alongside the state's growing IT, startup, business, manufacturing, and digital-services ecosystem. Students from Jalandhar, Ludhiana, Amritsar, Mohali, and other areas can use online learning when attending a physical class is not practical." },
        { title: "Haryana", text: "Haryana has a strong concentration of corporate, IT, automobile, e-commerce, and logistics activity. Learners from Gurugram, Faridabad, Panchkula, and other cities can develop MEAN Stack skills with the aim of pursuing software-development or technology-oriented career paths." },
        { title: "Himachal Pradesh", text: "For learners in Shimla, Dharamshala, and Solan, online MEAN Stack learning can provide access to a technical skill without requiring relocation. The ability to work remotely can also make web-development skills relevant for learners interested in remote employment or freelance projects." },
        { title: "Chandigarh", text: "Chandigarh's IT, BPO, education, startup, and professional-services environment can provide a useful context for learners developing software skills. MEAN Stack can complement learners who want to move toward application development rather than focusing only on digital content or marketing." },
        { title: "Delhi NCR", text: "Delhi, Noida, and Ghaziabad offer exposure to IT services, software companies, agencies, e-commerce, fintech, media, and startups. Learners in this region can use MEAN Stack training as part of a broader software-development career strategy." },
        { title: "Jammu & Kashmir", text: "Students from Jammu and Srinagar can consider online MEAN Stack learning if they want to develop technical skills while remaining in their home region. Web applications can serve businesses and organizations across tourism, handicrafts, retail, e-commerce, and other sectors." },
        { title: "Uttarakhand", text: "Learners from Dehradun and Haridwar can explore MEAN Stack as a technical skill alongside opportunities connected with education, tourism, hospitality, pharma, and digital services. Online learning can also support learners who are balancing education or employment." },
        { title: "Rajasthan", text: "Learners from Jaipur and surrounding areas can develop MEAN Stack skills for software and web-development opportunities while also exploring applications for tourism, retail, jewellery, handicrafts, and other digital businesses." },
        { title: "Uttar Pradesh", text: "Learners from Lucknow, Meerut, Noida, and other parts of Uttar Pradesh can consider MEAN Stack for software development and technology careers. The skill can also be useful for learners who want to build applications for businesses, startups, or freelance clients." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This MEAN Stack Program?",
      intro: "",
      points: [
        { title: "Learn Full-Stack Development as One Connected Skill", text: "One of the main advantages of learning MEAN Stack is that learners can understand how the frontend, backend, APIs, and database interact within a web application. The stack brings MongoDB, Express.js, Angular, and Node.js into one development workflow. (CSC India Learning)" },
        { title: "Develop Frontend Skills With Angular", text: "Angular gives learners a structured framework for building web interfaces. Learning components, routing, forms, services, and application logic can help learners understand how more complex frontend applications are organized." },
        { title: "Build Backend Applications With Node.js", text: "Node.js allows JavaScript to be used on the server side. Learners can explore server-side programming, application logic, APIs, request handling, and communication between the frontend and backend." },
        { title: "Understand Express.js and APIs", text: "Express.js is commonly used with Node.js to structure server-side applications and APIs. Understanding API development helps learners see how frontend applications communicate with backend services." },
        { title: "Work With MongoDB", text: "A full-stack application often needs a database to store and retrieve information. MongoDB gives learners experience with document-oriented database concepts and CRUD operations." },
        { title: "Build Projects Instead of Learning Technologies in Isolation", text: "MEAN Stack becomes more meaningful when learners connect its individual technologies into working applications. Projects can help them practise frontend development, backend logic, database operations, API integration, authentication, and debugging together." },
        { title: "Develop a Technical Portfolio", text: "A portfolio can demonstrate what a learner can actually build. Full-stack projects can showcase skills such as responsive interfaces, APIs, database integration, authentication, application logic, and deployment." },
        { title: "Prepare for Multiple Development Roles", text: "Depending on experience and additional skills, learners may explore roles such as: Full-Stack Developer, Angular Developer, Node.js Developer, JavaScript Developer, Web Application Developer, Backend Developer, Frontend Developer. A course does not automatically qualify someone for every role; practical proficiency and project experience remain important." },
        { title: "Explore Freelancing", text: "MEAN Stack skills can be useful for freelancers who want to work on customized web applications, dashboards, business tools, APIs, database-driven applications, or ongoing development projects." },
        { title: "Build a Foundation for Modern Web Development", text: "Learning the MEAN ecosystem can give learners a structured understanding of frontend and backend development. They can later expand into areas such as TypeScript, testing, cloud deployment, DevOps, advanced databases, system design, or other development frameworks." },
        { title: "Useful for Career Switching", text: "For professionals moving toward software development, MEAN Stack can provide a focused technology pathway. However, successful career switching requires consistent coding practice and should include projects, Git/version control, debugging, problem-solving, and interview preparation alongside the course." },
        { title: "Relevant Across Different Industries", text: "Web applications are used across sectors such as e-commerce, education, finance, healthcare, logistics, SaaS, media, travel, and professional services. This gives full-stack development skills relevance beyond a single industry." },
        { title: "Long-Term Skill Development", text: "The value of MEAN Stack learning is not limited to memorizing four technologies. Learners can develop broader abilities in programming logic, application architecture, API communication, databases, debugging, version control, and software-development workflows. Overall, the MEAN Stack Course can be a suitable pathway for learners who want to move beyond basic website creation and develop the technical ability to build database-driven, interactive web applications." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Techcadd",
      title: "Why Choose Techcadd for the MEAN Stack Course?",
      intro: "",
      points: [
        { title: "AI-Powered & Robotics Learning Environment", text: "Techcadd is “North India's first AI-powered and Robotics learning centre”. For MEAN Stack learners, exposure to a technology-focused learning environment can help connect web development skills with the wider direction of modern technology." },
        { title: "Practical, Project-Based Learning", text: "MEAN Stack development becomes easier to understand when learners actually build applications rather than only studying concepts. Practical exercises can cover frontend interfaces, backend APIs, database operations, authentication and complete web applications." },
        { title: "Industry-Relevant MEAN Stack Skills", text: "The learning path can focus on the four core technologies of MEAN Stack—MongoDB, Express.js, Angular and Node.js—along with supporting development skills such as JavaScript, TypeScript, REST APIs and version control." },
        { title: "Guidance for Different Learning Levels", text: "MEAN Stack can appear complex to beginners because frontend, backend and database concepts are connected. Structured guidance can help learners gradually move from basic programming concepts to building and understanding full-stack applications." },
        { title: "Online + Offline Learning Flexibility", text: "Learners can choose the learning format that suits their circumstances. Offline learning is available at the Jalandhar centre, while online learning can make the course accessible to students and professionals from other North Indian locations." },
        { title: "Portfolio-Focused Development", text: "Building practical applications gives learners something more meaningful to discuss during interviews or freelance discussions. Depending on the curriculum, projects may involve dashboards, business websites, API-driven applications, authentication systems or database-based web solutions." },
        { title: "Career-Oriented Skill Development", text: "MEAN Stack knowledge can support several web-development pathways, including frontend, backend and full-stack roles. Learners can gradually strengthen their programming, API development, database and application-development abilities according to their career goals." },
        { title: "Support for Learners Beyond Jalandhar", text: "Online learning can make MEAN Stack training accessible to learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh, without requiring everyone to relocate to Jalandhar." },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career Scope After MEAN Stack Learning",
      intro: "MEAN Stack skills can support different web-development career directions, depending on a learner's programming ability, projects and practical experience.",
      roles,
      rolesNote: "The skills can also be relevant across industries such as IT services, SaaS, e-commerce, education, healthcare, logistics, travel, media, fintech and startups. For freelancers and independent developers, MEAN Stack knowledge can be useful for developing business websites, dashboards, customer portals, database-driven applications and custom web solutions.",
      notes: [
        { title: "Future Relevance", text: "Web applications continue to require people who understand more than one layer of development. Learning frontend, backend, APIs and databases together can therefore provide a broader technical foundation than focusing on only one development area. For a beginner, the goal should not simply be to learn the names of four technologies. The stronger objective is to understand how a complete web application is planned, developed, connected, tested and improved using the MEAN ecosystem." },
      ],
      jobsTitle: "Opportunities Across North India",
      jobs: [
        { title: "Punjab", text: "Learners in Jalandhar, Ludhiana, Amritsar, Mohali, Patiala and Phagwara can build MEAN Stack skills for local IT companies, software services, startups and freelance web-development opportunities." },
        { title: "Haryana", text: "Cities such as Gurugram, Faridabad, Panchkula, Ambala and Karnal have strong connections with IT services, e-commerce, corporate businesses and technology-driven organisations, making full-stack development a relevant skill area." },
        { title: "Chandigarh", text: "Learners in Chandigarh can explore web-development opportunities connected with IT services, startups, education, BPO and technology-focused businesses." },
        { title: "Delhi NCR", text: "For learners from Delhi, Noida and Ghaziabad, MEAN Stack skills can be relevant to software companies, digital businesses, SaaS companies, agencies, e-commerce and technology startups." },
        { title: "Himachal Pradesh", text: "Learners from Shimla, Dharamshala and Solan can use online learning to build development skills without depending entirely on local classroom availability, while also exploring remote work and freelance opportunities." },
        { title: "Jammu & Kashmir", text: "Students from Jammu and Srinagar can use online MEAN Stack learning to develop technology skills that can support remote employment, freelance projects and broader software-development opportunities." },
        { title: "Uttarakhand, Rajasthan and Uttar Pradesh", text: "Learners from Dehradun, Haridwar, Jaipur, Lucknow and Meerut can similarly use online training to build full-stack development capabilities while remaining connected to opportunities beyond their immediate city." },
      ],
    },
    faqTitle: "MEAN Stack Course FAQs",
  },
};
