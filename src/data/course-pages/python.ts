import type { CoursePage } from "./types";

/* /courses/python — long-form landing copy supplied by the client (used as given, section by section).
   Navigation is unchanged at the client's request (`navLabel`, the Courses ▾ link and the slug are as before).
   Title changed from "Python Programming Course" to "Python Course" to follow the supplied copy.
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts for
     CMS/content planning" that "should be replaced or verified with genuine learner feedback before publication". The
     page keeps the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "Contact Techcadd for the current course duration".
   - Editor notes left out: "the following represents a logical course structure rather than a claim about a fixed
     syllabus", "The exact external libraries should be selected according to the current curriculum and intended
     specialization." and "These tools should be confirmed against the current Techcadd syllabus before being presented as
     officially included course components." Tools are worded "may include" — confirm the tool list actually taught.
   - FAQs 6 and 12 (fees, tools) say to confirm with Techcadd — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table were added here to fit the layout. The CTA's
     "Why Enquire?" list has no slot in the banner and is not shown. Module 8 describes project types, but no separate
     project list was supplied, so the Projects section is hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy) and the enquiry-form field list are not page content. */

// The supplied career "directions" — shown as chips, each explained in `copy.careers.notes`.
const directions = [
  { title: "Python Developer", text: "Build applications and backend functionality using Python and relevant frameworks." },
  { title: "Automation / Scripting", text: "Create scripts that reduce repetitive manual tasks and improve workflow efficiency." },
  { title: "Software Testing", text: "Use Python alongside appropriate testing tools and frameworks for automated testing." },
  { title: "Data-Related Roles", text: "Build additional skills in statistics, data handling, visualization, and relevant Python libraries." },
  { title: "Web Development", text: "Combine Python with an appropriate web framework, databases, frontend technologies, APIs, and deployment knowledge." },
  { title: "AI and Machine Learning", text: "Develop Python fundamentals further with mathematics, data handling, machine learning concepts, and relevant libraries." },
  { title: "Freelancing", text: "Depending on specialization and portfolio strength, Python can support freelance projects involving automation, scripting, data processing, web development, and custom software tasks." },
];

export const python: CoursePage = {
  slug: "python",
  title: "Python Course",
  navLabel: "Python",
  group: "programming",
  icon: "Terminal",
  tagline:
    "Learn Python fundamentals, programming logic, functions, data structures, object-oriented concepts, error handling, and practical application through a structured learning approach.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, career changers, freelancers, students and beginners; no previous programming experience needed",
  overview: [
    "A Python Course is designed to help learners build practical programming skills using Python, one of the most widely used programming languages across software development, automation, data-related work, web applications, testing, and emerging technology fields. It can be a useful starting point for students and graduates as well as professionals who want to add programming skills to their existing career profile.",
    "The learning journey can begin with Python fundamentals such as syntax, variables, data types, conditions, loops, functions, collections, and object-oriented programming before progressing toward practical programming tasks and projects. The exact depth and tools covered can depend on the current course curriculum.",
    "For learners in Punjab, Python can be particularly relevant to students and professionals exploring IT, software, automation, and technology-oriented careers. Techcadd's Jalandhar centre provides an offline learning option, while learners outside the area can explore online learning.",
    "The course is suitable for beginners who want to understand programming systematically as well as learners who already have some coding experience and want to strengthen their Python skills.",
  ],
  // "Learning Outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Understand core Python syntax and programming concepts",
    "Write basic and intermediate Python programs",
    "Use conditions and loops to solve programming problems",
    "Work with common Python data structures",
    "Create reusable functions",
    "Understand object-oriented programming fundamentals",
    "Handle errors and work with files",
    "Use appropriate Python modules and libraries",
    "Debug and improve code",
    "Build practical projects",
    "Develop a foundation for further Python specialization",
  ],
  syllabus: [
    {
      title: "Python Fundamentals",
      summary: "The first stage focuses on understanding the basic building blocks of Python programming. The objective is to understand how Python represents information and how instructions are written. Beginners should become comfortable reading simple programs and writing small pieces of code independently.",
      topics: ["Python syntax", "Variables", "Data types", "Operators", "Input and output", "Type conversion", "Basic expressions"],
    },
    {
      title: "Conditional Logic and Loops",
      summary: "Programming requires the ability to make decisions and repeat tasks. These concepts help learners solve repetitive and decision-based problems systematically.",
      topics: ["if, elif, and else", "Comparison and logical operators", "for loops", "while loops", "Nested logic", "Loop control"],
    },
    {
      title: "Python Data Structures",
      summary: "Python provides several built-in structures for organizing information. Learners should understand when different structures are useful and how to manipulate data efficiently for everyday programming tasks.",
      topics: ["Lists", "Tuples", "Sets", "Dictionaries", "Strings", "Common operations and methods"],
    },
    {
      title: "Functions and Modular Programming",
      summary: "Functions help developers divide larger problems into reusable components. Understanding functions is an important step toward writing cleaner and more maintainable Python programs.",
      topics: ["Defining functions", "Parameters and arguments", "Return values", "Scope", "Reusable logic", "Organizing code into modules"],
    },
    {
      title: "Object-Oriented Programming",
      summary: "Object-oriented programming introduces another way to structure larger programs. These concepts can help learners understand how Python applications can be organized as projects become larger and more complex.",
      topics: ["Classes", "Objects", "Attributes", "Methods", "Constructors", "Inheritance", "Encapsulation", "Polymorphism"],
    },
    {
      title: "Exception Handling and File Operations",
      summary: "Real programs need to handle unexpected situations rather than stopping whenever an error occurs. These skills are particularly useful when creating practical scripts and automation-oriented programs.",
      topics: ["Common Python errors", "Exception handling", "try and except", "File reading and writing", "Working with structured information"],
    },
    {
      title: "Modules, Packages and Libraries",
      summary: "Python's ecosystem includes a large collection of modules and libraries that extend what developers can build.",
      topics: ["Importing modules", "Using standard libraries", "Organizing reusable code", "Working with third-party packages where appropriate", "Managing project dependencies"],
    },
    {
      title: "Practical Python Projects",
      summary: "Projects help learners connect individual programming concepts. Depending on the learning objectives, practical exercises could involve the areas below. The objective is not simply to complete a project but to understand the programming decisions behind it.",
      topics: ["Utility programs", "File-processing scripts", "Basic automation", "Data-handling applications", "API-based tasks", "Small command-line applications", "Other beginner-to-intermediate Python projects"],
    },
  ],
  tools: ["Python interpreter", "Python package manager", "VS Code", "Jupyter Notebook", "Git/GitHub", "Python libraries and frameworks"],
  // No separate project list was supplied (module 8 describes the project types), so the Projects section is hidden.
  projects: [],
  // Shown as chips on the page (via copy.careers.roles); the compare pages read the names from here.
  careers: directions.map((d) => ({ role: d.title, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Python course?", a: "A Python course teaches learners how to use Python for programming, problem-solving, automation, software development and other technology applications. A structured course generally starts with fundamentals and gradually introduces more advanced programming concepts and practical projects." },
    { q: "Who is eligible for a Python course?", a: "Graduates, postgraduates, working professionals, career changers, freelancers, students and beginners can learn Python. The exact eligibility requirements may depend on the specific course structure, but prior professional programming experience is not necessarily required for a beginner-oriented Python course." },
    { q: "Is Python suitable for beginners?", a: "Yes, Python is suitable for beginners because its syntax is relatively readable and learners can start with fundamental programming concepts before moving to more advanced topics. Consistent practice is still important for developing programming and problem-solving skills." },
    { q: "What is included in a Python course syllabus?", a: "A Python syllabus can include programming fundamentals, variables, data types, operators, conditions, loops, functions, data structures, modules, exception handling, file handling and object-oriented programming. Practical projects and additional libraries or frameworks may be included depending on the course curriculum." },
    { q: "How long does it take to learn Python?", a: "The time required depends on the learner's previous experience, learning schedule and desired level of proficiency. Basic Python concepts can be learned relatively quickly, but becoming comfortable with practical programming and developing job-oriented skills requires continued practice and project work." },
    { q: "What are the fees for a Python course?", a: "Python course fees vary depending on the institute, course structure, duration, learning mode and included training components. Students should confirm the current fee directly with Techcadd rather than relying on an outdated fee listed elsewhere." },
    { q: "Can I learn Python online?", a: "Yes, Python can be learned online through structured live learning, depending on the training option available. Online learning can be particularly useful for students and professionals who live outside Jalandhar or need flexibility around their existing schedule." },
    { q: "Is offline Python training available?", a: "Yes, Techcadd offers an offline learning option at its Jalandhar, Punjab centre. Learners who prefer classroom-based instruction can enquire about the current schedule and availability." },
    { q: "What jobs can I pursue after learning Python?", a: "Python can contribute to career paths such as Python development, software development, automation, testing, backend development, data-related roles and other technology positions. Most professional roles require additional tools, frameworks, domain knowledge and practical experience beyond Python fundamentals." },
    { q: "What is the salary after learning Python?", a: "There is no single salary associated with Python because earnings depend on the job role, experience, location, specialization, company, portfolio and additional technical skills. Python should therefore be viewed as one part of a broader professional skill set rather than a guaranteed salary qualification." },
    { q: "Can Python be used for freelancing?", a: "Yes, Python can be used for freelance work involving scripting, automation, data processing, software development and selected web-development tasks. Freelancers generally need additional skills such as project management, communication, debugging and portfolio development." },
    { q: "Which tools are used with Python?", a: "Python developers may work with tools such as the Python interpreter, package-management tools, code editors such as VS Code, Jupyter Notebook for suitable data-oriented work, Git/GitHub for version control, and Python libraries or frameworks. The exact tools covered should be confirmed against the current course curriculum." },
    { q: "Can someone learn Python without previous coding experience?", a: "Yes, beginners can start Python without previous professional programming experience. The learning process should begin with fundamental concepts such as variables, conditions, loops, functions and basic problem-solving before progressing to more complex topics." },
    { q: "Is Python useful for AI and machine learning?", a: "Yes, Python is widely used in AI and machine learning, but learning Python alone does not make someone an AI or machine learning professional. Learners interested in these fields will need additional knowledge of mathematics, data handling, machine learning concepts and relevant libraries." },
    { q: "Can students from Punjab join a Python course?", a: "Yes, students from Punjab can explore Python learning through online or offline options, depending on their location and the current course schedule. Learners near Jalandhar can enquire about the offline centre, while others can consider online learning." },
    { q: "Can students from Himachal Pradesh learn Python online?", a: "Yes, students from Himachal Pradesh can learn Python online without needing to travel to Jalandhar for regular classroom sessions. This can be useful for learners from areas such as Shimla, Solan and Dharamshala." },
    { q: "Is a Python course useful for students in Haryana?", a: "Yes, Python can be useful for students and professionals in Haryana who want to develop programming skills for software, automation, testing, data-related or other technology career paths. Learners can choose online learning when attending a physical centre is not practical." },
    { q: "Can students from Rajasthan learn Python online?", a: "Yes, learners from Rajasthan can study Python online and build programming skills from their location. Students can gradually progress from fundamentals to projects and then choose an appropriate specialization based on their career goals." },
    { q: "Is Python suitable for students from Uttar Pradesh?", a: "Yes, Python can be suitable for students from Uttar Pradesh who want to build programming fundamentals or move toward technology-related careers. Learners can start with core programming and later add skills such as web development, databases, automation or data technologies." },
    { q: "Can working professionals learn Python?", a: "Yes, working professionals can learn Python alongside their existing careers, particularly when they choose a learning format that fits their schedule. Python can complement existing IT, operations, testing, analytics and other technology-related skills." },
  ],
  related: ["data-science", "machine-learning", "web-development"],
  copy: {
    heading: { title: "Python Course", highlight: "Online + Offline", meta: "Python Course: Build Practical Python Programming Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Python Course", gainsTitle: "Learning Outcomes" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "A Python learning path should move from programming fundamentals toward practical application.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "Python is a relatively accessible programming language, which makes it suitable for learners entering programming as well as professionals who want to add coding to their existing skill set. The right learning path can vary depending on a person's educational background, career goal, and previous programming experience.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, IT, engineering, mathematics, science, commerce, or other backgrounds can consider Python when developing programming skills. For technical graduates, it can complement existing knowledge and provide a practical programming foundation. For graduates from non-technical backgrounds, it can offer a structured introduction to coding and computational thinking." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduate students can use Python as a practical skill alongside their academic specialization. Depending on their field, Python may support programming assignments, data handling, automation, research-oriented tasks, or preparation for technology-focused career paths." },
        { icon: "Briefcase", title: "Working Professionals", text: "Professionals already working in IT, operations, testing, analytics, administration, or other technology-adjacent roles may learn Python to improve their technical capabilities. For someone who regularly works with repetitive processes or structured data, programming knowledge can open opportunities to explore automation and more technical responsibilities." },
        { icon: "Shuffle", title: "Job Switchers", text: "Python can also be relevant for people planning a transition toward technology roles. A career switcher should not expect the programming language alone to qualify them for every software role. However, building a strong Python foundation can be a useful first step before progressing into a specialization such as web development, automation, data-related technologies, or other Python-based career paths." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers can explore Python for practical client work involving automation, scripting, data processing, web-related tasks, or custom programming solutions. The exact opportunities depend on the freelancer's broader technical skills, portfolio, communication ability, and the requirements of individual projects." },
        { icon: "Building2", title: "Business Owners", text: "Business owners and entrepreneurs may find basic Python useful for understanding technical workflows, automating repetitive tasks, working with structured information, or communicating more effectively with development teams. Those who want to build technology products themselves can continue from Python fundamentals into more specialized development skills." },
        { icon: "Compass", title: "Career Changers", text: "For someone moving from a non-technical career into technology, Python can provide a relatively structured way to begin learning programming. The learner still needs consistent practice, problem-solving skills, and project experience to progress toward employment-oriented capabilities." },
        { icon: "Rocket", title: "Beginners", text: "Complete beginners can learn Python without having extensive previous programming experience. The important starting point is understanding programming logic rather than trying to memorize large amounts of syntax. Concepts such as variables, conditions, loops, functions, and problem-solving can gradually build a foundation for more advanced learning." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass students can also consider Python, particularly if they are interested in computer science, software, technology, or programming. However, the course should be viewed as a skill-building pathway rather than a replacement for formal higher education where a particular job or degree requires one." },
      ],
      need: "Prior professional programming experience is not necessarily required for a beginner-oriented Python course.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners interested in IT, software, automation, and technology can use Python as a foundation for further technical specialization. Students and professionals from cities such as Jalandhar, Ludhiana, or Amritsar can consider online learning when attending in person is not convenient." },
        { title: "Haryana", text: "Python can be useful for learners interested in the technology and software ecosystem around Gurugram and other business centres. Working professionals can use online learning to build programming skills alongside their existing schedules." },
        { title: "Himachal Pradesh", text: "For learners from Shimla, Solan, Dharamshala, and other areas, online Python learning can provide access to programming education without requiring regular travel to a training centre." },
        { title: "Chandigarh", text: "Students and professionals in the Chandigarh Tricity region can use Python skills as a foundation for software, automation, data-related, and other technology-oriented learning paths." },
        { title: "Delhi NCR", text: "The region's broad IT, media, fintech, e-commerce, and technology ecosystem makes programming skills relevant to many learners. Python can serve as a foundation for people exploring technical roles or adding coding skills to an existing profile." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can use online learning to develop programming skills while remaining in their local environment. Python can also support learners interested in remote technology work." },
        { title: "Uttarakhand", text: "Students and professionals from Dehradun, Haridwar, and surrounding areas can learn Python online and gradually build projects that demonstrate their programming abilities." },
        { title: "Rajasthan", text: "Learners in Jaipur and other parts of Rajasthan can use Python as a foundation for software development, automation, data-oriented learning, and further technical specialization." },
        { title: "Uttar Pradesh", text: "Students and professionals from cities such as Lucknow, Meerut, Noida, and other parts of the state can explore Python for programming fundamentals and technology career development through online learning." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "A Practical Introduction to Programming", text: "Python provides a structured way to learn core programming concepts. Instead of focusing only on syntax, learners can develop an understanding of variables, conditions, loops, functions, data structures, error handling, and reusable code. These fundamentals are useful beyond Python itself because they strengthen general programming logic." },
        { title: "Useful Across Multiple Technology Paths", text: "One of Python's major advantages is its relevance across several technical areas. Depending on additional training, Python skills can support pathways involving software development, automation, testing, data analysis, web technologies, scripting, and other technology domains. This gives learners flexibility when deciding on a later specialization." },
        { title: "Builds Problem-Solving Skills", text: "Programming is not simply about remembering commands. Learners need to break problems into smaller steps, identify the required logic, test their solutions, and correct errors. Regular Python practice can therefore help develop structured problem-solving habits that are valuable in technical work." },
        { title: "Supports Project-Based Learning", text: "Programming concepts become easier to understand when they are applied to practical tasks. Python learners can gradually move from small exercises to projects involving file handling, automation, data processing, APIs, utilities, or other appropriate applications. A project-based approach also gives learners something concrete to demonstrate when building a portfolio." },
        { title: "Relevant for Career Switching", text: "Someone moving toward technology may use Python as a starting point before selecting a specialized career direction. For example, a learner may begin with programming fundamentals and later explore web development, automation, data-related technologies, testing, or other Python-based areas." },
        { title: "Useful for Existing IT Professionals", text: "Python does not have to be the first programming language someone learns. IT professionals with experience in another technology can use it to expand their toolkit. Automation, scripting, data processing, and integration tasks can make programming knowledge useful even when the person's primary role is not software development." },
        { title: "Opens Freelancing Possibilities", text: "Python can be used for different types of freelance work, including scripting, automation, data processing, and selected web or software projects. However, successful freelancing generally requires more than knowledge of the language. Communication, project understanding, debugging, documentation, and a demonstrable portfolio are also important." },
        { title: "Provides a Foundation for Further Learning", text: "Python fundamentals can act as a base for more advanced technologies. Once learners are comfortable with programming logic, they can choose a direction according to their interests and career goals. This could involve web development, automation, data science, machine learning, testing, or other areas where Python is relevant." },
        { title: "Suitable for Progressive Learning", text: "A beginner does not need to understand every advanced Python concept on the first day. Learning can progress from basic syntax and logic to functions, collections, object-oriented programming, modules, error handling, and practical projects. This gradual progression makes it easier to identify weak areas and strengthen them through practice." },
        { title: "Relevant to India's Technology Job Market", text: "Python skills can contribute to a variety of technology-oriented career paths in India. The actual role and earning potential depend on experience, specialization, location, portfolio, interview performance, and additional technical skills. Learning Python should therefore be treated as a foundation for career development rather than a guarantee of a particular job or salary." },
      ],
      outro: "For someone looking for a programming skill that can lead into several technology specializations, a Python Course can provide a practical starting point while leaving room to build deeper expertise over time.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "Modern Technology Learning Environment", text: "“North India's first AI-powered and Robotics learning centre”. For Python learners, exposure to a technology-focused learning environment can help connect programming concepts with practical applications. Python is widely used beyond basic software development, including automation, data-related work, AI, machine learning, scripting, and technology projects. Learners from Punjab can access the Jalandhar centre, while students from Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh can explore online learning options. The broader technology environment can be especially useful for learners who want to understand how programming connects with newer technology areas." },
        { title: "Practical, Project-Oriented Python Learning", text: "Python becomes more useful when learners actually write and test code rather than only studying syntax. A practical learning approach can include programming exercises, problem-solving tasks, debugging, and projects that gradually increase in complexity. This helps learners understand how individual concepts work together in real programming situations." },
        { title: "Structured Learning From Fundamentals to Practical Skills", text: "A well-organized Python learning path can take learners from basic programming concepts toward more advanced areas. Topics can progress through variables, data types, conditions, loops, functions, collections, modules, error handling, object-oriented programming, and practical applications. This structure is useful for beginners because each concept builds upon earlier knowledge." },
        { title: "Relevant Skills for Multiple Career Directions", text: "Python is not limited to one specific career path. Depending on additional skills and specialization, learners can use Python as a foundation for software development, automation, testing, data-related work, web technologies, scripting, AI, or machine learning. This flexibility allows learners to decide on a specialization after developing their programming fundamentals." },
        { title: "Suitable for Beginners and Existing Programmers", text: "A Python course can accommodate different starting points when the learning process is structured appropriately. Beginners can start with programming logic and syntax, while learners who already know another programming language can focus on Python-specific concepts and practical differences. The goal should be to build understanding rather than simply memorize commands." },
        { title: "Online + Offline Learning Flexibility", text: "Learners have different schedules and geographical constraints. An online option can help students and working professionals from locations outside Jalandhar learn Python without relocating. Offline learning at the Jalandhar, Punjab centre can provide an in-person learning environment for those who prefer classroom-based education." },
        { title: "Career-Focused Skill Development", text: "Learning Python can be useful when it is connected to actual career requirements. Along with programming fundamentals, learners should develop debugging, logical thinking, project-building, code organization, and problem-solving abilities. These skills can make the transition from learning syntax to applying Python more meaningful." },
        { title: "Foundation for Advanced Technology Learning", text: "Python can serve as an entry point into several advanced technical areas. After developing strong fundamentals, learners may choose to explore areas such as automation, data analysis, web development, artificial intelligence, machine learning, or testing. The appropriate next step depends on the learner's career objective and the additional technologies required for that path." },
      ],
    },
    tools: {
      title: "Tools and Technologies",
      groups: [
        { area: "Language & packages", tools: "Python interpreter, Python package manager" },
        { area: "Code editor", tools: "VS Code or another suitable code editor" },
        { area: "Notebooks", tools: "Jupyter Notebook where data-oriented learning is included" },
        { area: "Version control", tools: "Git/GitHub where version-control concepts are part of the curriculum" },
        { area: "Libraries & frameworks", tools: "Relevant Python libraries and frameworks based on the selected specialization" },
      ],
      note: "Python itself is the central technology, but learners may also work with a development environment or code editor suitable for writing and testing Python programs.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Python can support several career directions, but the programming language itself is only one part of the skill set required for professional roles.",
      roles: directions.map((d) => d.title),
      rolesNote: "Salary varies significantly according to experience, specialization, location, company, portfolio, interview performance, and additional technical skills. Therefore, learning Python should not be treated as a guarantee of a particular salary.",
      notes: directions,
      jobsTitle: "State-Wise Career Opportunities",
      jobs: [
        { title: "Punjab", text: "Python can complement the growing technology and startup ecosystem around cities such as Jalandhar, Ludhiana, Amritsar, and Mohali. Learners can use it as a foundation for software, automation, data-related, and web-development pathways." },
        { title: "Haryana", text: "The technology and MNC ecosystem around Gurugram creates relevance for programming and automation skills. Python learners can build toward software development, testing, backend technologies, and other technical roles with the required additional skills." },
        { title: "Chandigarh", text: "The Chandigarh Tricity region's IT, BPO, education, and startup environment can provide a useful context for learners developing programming skills. Python can serve as a foundation for further software and technology specialization." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology ecosystem spanning IT, fintech, e-commerce, media, and digital businesses. Python can be relevant to learners targeting software, automation, data, testing, and backend-oriented career paths." },
        { title: "Uttar Pradesh", text: "Technology hubs such as Noida provide opportunities across IT and electronics-related businesses. Learners can build Python fundamentals and then add web development, databases, testing, cloud, or other skills depending on their intended role." },
        { title: "Rajasthan", text: "Jaipur's technology and digital ecosystem gives learners opportunities to develop programming capabilities alongside other professional skills. Python can serve as a starting point for software development, automation, data-related work, and further technical learning." },
      ],
      outro: "Overall, Python is best viewed as a foundation skill with multiple possible specialization paths. The strongest career outcomes come from combining Python fundamentals with practical projects, relevant tools, domain knowledge, and continued learning.",
    },
    faqTitle: "Frequently Asked Questions About the Python Course",
    cta: {
      title: "Build Practical Python Skills for Your",
      highlight: "Technology Career",
      text: "Start your programming journey with a structured Python Course designed for beginners, students, graduates, working professionals, and career changers who want to develop practical coding skills. Learn Python fundamentals, programming logic, functions, data structures, object-oriented concepts, error handling, and practical application through a structured learning approach. Whether you are starting from scratch or strengthening your existing programming knowledge, the course can help you build a foundation for further learning in software development, automation, data, web technologies, AI, and other Python-related fields.",
    },
  },
};
