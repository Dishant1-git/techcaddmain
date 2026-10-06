import type { CoursePage } from "./types";

/* /courses/java — long-form landing copy supplied by the client (used as given, section by section).
   Navigation is unchanged at the client's request (`navLabel`, the Courses ▾ link and the slug are as before).
   Title changed from "Java Programming Course" to "Java Course" to follow the supplied copy.
   Points to CONFIRM with the client:
   - The 12 supplied reviews are NOT published: the supplied text itself says they are "sample drafts for page planning"
     to be published as real reviews only after being replaced or validated with genuine learner feedback. The page keeps
     the shared testimonials until real reviews arrive.
   - No Stage 4 (CTA) text was supplied for this course, so the final enquiry banner keeps the site's default wording.
   - `duration` is a placeholder — the supplied FAQ says the duration "should be confirmed before enrolment".
   - Editor notes left out: "The exact sequence and technology stack can be adjusted according to the final course
     implementation." and "Not every tool needs to be taught in every Java course. The final tool list should reflect the
     actual Techcadd curriculum rather than being presented as a guaranteed syllabus item." Tools are worded "may include"
     — confirm the tool list actually taught.
   - FAQs 2, 5, 6, 7 and 9 say details should be confirmed with Techcadd — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table were added here to fit the layout. Module 10
     describes project work, but no separate project list was supplied, so the Projects section is hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy) is not page content. */

const roles = [
  "Java Developer",
  "Junior Java Developer",
  "Software Developer",
  "Backend Developer",
  "Java Application Developer",
  "Software Engineer",
  "Junior Backend Engineer",
  "Application Support Developer",
];

export const java: CoursePage = {
  slug: "java",
  title: "Java Course",
  navLabel: "Java",
  group: "programming",
  icon: "Coffee",
  tagline:
    "Build a practical understanding of Java programming and the concepts used to develop software applications — object-oriented programming, application development, problem-solving and software engineering concepts.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, students, working professionals, career changers and beginners; no prior programming experience needed",
  overview: [
    "A Java Course is designed to help learners build a practical understanding of Java programming and the concepts used to develop software applications. Java is a widely used programming language and provides a strong foundation for understanding object-oriented programming, application development, problem-solving and software engineering concepts.",
    "The course can be useful for graduates, postgraduates, students, working professionals, career changers and beginners who want to develop programming skills or explore software development. Depending on the final course structure, learners can expect to work with topics such as Java syntax, variables, data types, control flow, methods, object-oriented programming, exception handling, collections, file handling and application development concepts.",
    "Learning Java can also provide a foundation for exploring areas such as backend development, enterprise software, Android-related development concepts and broader software engineering pathways.",
    "Learners in Punjab can choose a learning format that suits their circumstances, while the Techcadd centre in Jalandhar provides an offline learning option for those able to attend locally. Learners outside the local area can explore online learning options.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Java and Programming Fundamentals",
      summary: "Learners begin by understanding Java as a programming language and learning how programs are structured.",
      topics: ["Java fundamentals", "Program structure", "Variables", "Data types", "Operators", "Input and output", "Basic syntax", "Comments", "Type conversion"],
      outcome: "Learners should be able to understand basic Java syntax and write simple programs using fundamental programming constructs.",
    },
    {
      title: "Control Flow and Problem Solving",
      summary: "Programming requires the ability to make decisions and repeat operations logically.",
      topics: ["Conditional statements", "if and else", "Nested conditions", "switch", "Loops", "for", "while", "do-while", "Break and continue", "Basic problem-solving exercises"],
      outcome: "Learners should be able to translate simple problems into logical programming steps and implement those solutions in Java.",
    },
    {
      title: "Methods and Program Organization",
      summary: "As programs become larger, organizing code becomes important.",
      topics: ["Methods", "Parameters", "Return values", "Method overloading", "Scope", "Reusable code", "Basic program organization"],
      outcome: "Learners should be able to divide programs into reusable components rather than placing all logic into one block of code.",
    },
    {
      title: "Object-Oriented Programming",
      summary: "Object-oriented programming is one of the most important areas of Java. This foundation is particularly important for learners who eventually want to work with larger Java applications or frameworks.",
      topics: ["Classes", "Objects", "Constructors", "Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Interfaces"],
      outcome: "Learners should be able to design Java programs around objects and understand how different components of an application can interact.",
    },
    {
      title: "Arrays, Strings and Collections",
      summary: "Java applications frequently need to store and manipulate groups of data.",
      topics: ["Arrays", "Strings", "String operations", "Lists", "Sets", "Maps", "Collection concepts", "Iteration"],
      outcome: "Learners should be able to store, retrieve, organize and process groups of data within Java programs.",
    },
    {
      title: "Exception Handling",
      summary: "Real applications need to handle unexpected situations rather than simply stopping when something goes wrong.",
      topics: ["Exceptions", "Try-catch", "Finally", "Throw and throws", "Exception handling practices", "Debugging-related concepts"],
      outcome: "Learners should understand how Java applications can identify and handle runtime problems more systematically.",
    },
    {
      title: "File Handling and Application Concepts",
      summary: "Java can also be used to work with files and application-level data.",
      topics: ["File handling", "Reading data", "Writing data", "Streams and related concepts", "Basic application data processing"],
      outcome: "Learners should be able to work with basic file-based operations and understand how applications process external data.",
    },
    {
      title: "Database Connectivity",
      summary: "For learners moving toward application and backend development, understanding how software interacts with databases is valuable.",
      topics: ["Database fundamentals", "SQL concepts", "Java database connectivity", "Connecting applications with databases", "Executing queries", "Processing database results"],
      outcome: "Learners should understand the basic relationship between Java applications and databases and how application data can be stored and retrieved.",
    },
    {
      title: "Development Tools and Environment",
      summary: "A practical Java learner should become familiar with tools used to write, execute and manage code. Depending on the final course implementation, relevant tools may include the ones below.",
      topics: ["Java Development Kit (JDK)", "Java Runtime Environment concepts", "IntelliJ IDEA", "Eclipse", "Visual Studio Code", "Git", "GitHub", "Maven", "Database tools", "Command-line development tools"],
    },
    {
      title: "Application Development and Projects",
      summary: "The final learning stage should bring individual concepts together through practical exercises or projects. A project may involve the steps below.",
      topics: ["Planning application requirements", "Designing classes", "Writing Java code", "Working with data", "Handling errors", "Connecting to a database where relevant", "Testing functionality", "Debugging", "Improving code structure"],
      outcome: "Learners should be able to combine Java concepts to create functional applications and explain the programming decisions behind their work.",
    },
  ],
  tools: ["Java Development Kit (JDK)", "IntelliJ IDEA", "Eclipse", "Visual Studio Code", "Git", "GitHub", "Maven", "Database tools", "Command-line development tools"],
  // No separate project list was supplied (module 10 describes the project work), so the Projects section is hidden.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Java course?", a: "A Java course teaches programming using Java, including fundamentals, object-oriented programming and application-development concepts. Depending on the syllabus, learners may also study databases, development tools and practical projects." },
    { q: "Who is eligible for a Java course?", a: "Graduates, postgraduates, students, working professionals, career changers and beginners can consider a Java course. The exact eligibility requirements should be confirmed with Techcadd before enrolment." },
    { q: "Is Java suitable for beginners?", a: "Yes, Java can be suitable for beginners when the course starts with basic programming concepts and progresses gradually. Consistent coding practice is important because programming cannot be learned effectively through theory alone." },
    { q: "What is covered in a Java course syllabus?", a: "A Java syllabus can include programming fundamentals, variables, control flow, methods, object-oriented programming, arrays, strings, collections, exception handling, file handling and application-development concepts. Database connectivity and development tools may also be included depending on the course structure." },
    { q: "Which tools are used for Java development?", a: "Common Java development tools include the JDK, IntelliJ IDEA, Eclipse, Visual Studio Code, Git, GitHub and Maven. The exact tools covered by a Techcadd course should be confirmed against its current curriculum." },
    { q: "How long does a Java course take?", a: "The course duration depends on the final Techcadd schedule and curriculum, so an exact duration should be confirmed before enrolment. Learning time also depends on the learner's previous programming knowledge and practice." },
    { q: "What are the fees for a Java course?", a: "Java course fees depend on the current course structure, schedule and learning mode. Prospective learners should contact Techcadd for the latest fee information rather than relying on an outdated figure." },
    { q: "Can I learn Java online?", a: "Yes, Java can be learned online, including through live online learning where available. Online learning can be useful for students and professionals who cannot attend the physical Jalandhar centre." },
    { q: "Is offline Java training available?", a: "Yes, Techcadd offers online and offline learning options, with its physical centre located in Jalandhar, Punjab. Availability and batch schedules should be confirmed before enrolment." },
    { q: "What jobs can I pursue after learning Java?", a: "Java skills can contribute to roles such as Java Developer, Junior Java Developer, Software Developer, Backend Developer and Java Application Developer. Job eligibility depends on additional skills, practical experience, projects and employer requirements." },
    { q: "What salary can a Java developer earn in India?", a: "Java developer salaries vary significantly based on experience, location, skills, employer and role, so there is no single reliable salary figure for every learner. Current job listings and market data should be considered when evaluating salary expectations." },
    { q: "Can Java skills help with freelancing?", a: "Yes, Java can support certain freelance software-development projects, particularly when combined with backend, database and API skills. Freelancers also need communication, project-management and client-handling abilities." },
    { q: "Is Java useful for a career in software development?", a: "Yes, Java can provide a strong programming foundation for software-development pathways. Learners should combine Java with practical projects and additional technologies relevant to their target role." },
    { q: "Do I need programming experience before learning Java?", a: "No, prior programming experience is not necessarily required for a beginner-oriented Java course. However, learners should be prepared to practise coding regularly and work through programming problems." },
    { q: "Can a non-IT graduate learn Java?", a: "Yes, a non-IT graduate can learn Java if they are willing to develop programming fundamentals through structured learning and regular practice. A career transition may require additional technical skills beyond Java." },
    { q: "Can working professionals learn Java online?", a: "Yes, working professionals can learn Java online and use the flexibility to continue developing programming skills alongside their existing work. The appropriate schedule depends on the available batches and learning format." },
    { q: "Can students from Punjab join the Java course?", a: "Yes, students from Punjab can explore Java learning through the available online and offline options. The physical Techcadd centre is in Jalandhar, while learners elsewhere in Punjab can consider online learning." },
    { q: "Can students from Haryana learn Java online?", a: "Yes, students from Haryana can learn Java online without needing a physical Techcadd centre in Haryana. This can be useful for learners interested in software and IT-related career pathways." },
    { q: "Can learners from Himachal Pradesh join Java training?", a: "Yes, learners from Himachal Pradesh can explore online Java learning. This can provide access to structured programming education without requiring relocation to Jalandhar." },
    { q: "Can students from Delhi NCR learn Java with Techcadd?", a: "Yes, learners from Delhi NCR can explore the online Java learning option. Students and professionals can use it to develop programming foundations for software-development pathways." },
    { q: "Can students from Rajasthan learn Java online?", a: "Yes, students from Rajasthan can learn Java online. Learners can begin with programming fundamentals and progress toward object-oriented programming and application-development concepts." },
    { q: "Can students from Uttar Pradesh learn Java?", a: "Yes, learners from Uttar Pradesh can explore Java through online learning. Students and career changers can use the course as a starting point for developing programming skills." },
    { q: "Is Java better than Python?", a: "Java and Python serve different programming needs, so neither is universally better. Java is particularly relevant for learners interested in object-oriented programming and many software-development and enterprise environments, while the better choice depends on the learner's goals." },
    { q: "What should I learn after Core Java?", a: "After Core Java, learners can choose additional technologies based on their career goals, such as databases, APIs, backend frameworks, testing, cloud technologies or other software-development tools. The appropriate next step depends on the role they want to pursue." },
  ],
  related: ["kotlin", "c-cpp", "mern-stack"],
  copy: {
    heading: { title: "Java Course", highlight: "Online + Offline", meta: "Java Course: Build Practical Java Programming Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Java Course" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "A Java course should build skills progressively, beginning with programming fundamentals and moving toward object-oriented and application-development concepts.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course?",
      intro: "Java can be useful for a wide range of learners because programming knowledge can support both entry-level learning and longer-term software development growth. The course is not limited to people who already work as programmers. The appropriate starting point depends on the learner's existing education, technical exposure and career goals.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology and related disciplines can use Java learning to strengthen programming fundamentals and move toward software development roles. For graduates from other fields, Java can provide a structured introduction to programming if they are interested in changing their career direction." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduate learners can use Java to complement academic knowledge with practical programming skills. Those studying technology-related subjects may also find Java useful for application development, projects and broader software engineering preparation." },
        { icon: "Briefcase", title: "Working Professionals", text: "Professionals already working in IT or related areas may learn Java to strengthen their programming knowledge or expand into software development. Someone working with testing, technical support, web technologies or other technology functions may find programming skills useful when planning a broader career path." },
        { icon: "Shuffle", title: "Job Switchers", text: "For people considering a move into software development, Java can provide a structured programming foundation. A career switch should be approached realistically, with attention to programming practice, projects, problem-solving ability and the additional technologies required for the desired job role." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers can explore Java when their projects involve software applications, backend systems or other Java-relevant development work. Java skills alone do not guarantee freelance work, so learners should also develop project experience, communication skills and an understanding of client requirements." },
        { icon: "Building2", title: "Business Owners", text: "Business owners who work with technology teams or digital products can benefit from understanding programming concepts even when they do not intend to become full-time developers. Java knowledge can make it easier to understand development workflows, technical discussions and software requirements." },
        { icon: "Compass", title: "Career Changers", text: "People moving from a non-technical career into technology can consider Java as one possible programming pathway. Beginners should focus first on programming fundamentals rather than trying to learn a large number of technologies simultaneously." },
        { icon: "Rocket", title: "Beginners", text: "Java can be learned by beginners when the course starts with fundamental programming concepts and progresses gradually. A beginner should be prepared to practise regularly because programming is learned through writing, testing and debugging code rather than through theory alone." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "Students who have completed 12th grade and are interested in programming can explore Java as an additional technical skill. However, learners should understand that professional software development generally requires broader education, programming practice, projects and continued skill development." },
      ],
      need: "Prior programming experience is not necessarily required for a beginner-oriented Java course. However, learners should be prepared to practise coding regularly and work through programming problems.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can use Java skills as part of a broader technology career pathway. Students and graduates interested in IT, software development and startups can build programming foundations through online learning or, where practical, attend the Jalandhar centre." },
        { title: "Haryana", text: "For learners from Haryana, Java can complement the region's strong IT, services, e-commerce and technology-oriented employment environment. Professionals and graduates can use programming knowledge as a foundation for exploring software development opportunities." },
        { title: "Himachal Pradesh", text: "Learners from Himachal Pradesh may benefit from online Java learning when local access to specialized programming training is limited. Students, remote workers and career changers can build programming skills that can support technology-oriented and remote career pathways." },
        { title: "Chandigarh", text: "Learners in Chandigarh and the wider Tricity area can consider Java as a programming foundation for IT services, software development and startup-oriented career interests. It can also complement learners who already have exposure to technology or BPO-related environments and want to develop deeper technical skills." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology ecosystem across IT services, software, fintech, e-commerce and digital businesses. Learners from Delhi, Noida and nearby areas can use Java training to strengthen their programming foundation while preparing for software-oriented career paths." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Kashmir can use online Java learning to access structured programming education without needing to relocate. Students and career changers can build a foundation that may support remote technology work and further software development learning." },
        { title: "Uttarakhand", text: "For learners in Uttarakhand, Java can be a useful technical skill alongside education and professional development. Online learning can make the course accessible to students and working professionals in areas such as Dehradun and Haridwar." },
        { title: "Rajasthan", text: "Learners from Rajasthan can explore Java as a programming pathway alongside the region's growing digital and technology requirements. Students and graduates can use Java fundamentals as a starting point before progressing toward specific software development specializations." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can use Java training to strengthen programming skills relevant to the state's large student and technology-oriented population. Those in cities such as Lucknow and Meerut can learn online and gradually build toward software development through projects and continued practice." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program?",
      intro: "",
      points: [
        { title: "Build Strong Programming Fundamentals", text: "Java provides a structured way to learn programming concepts such as variables, conditions, loops, methods, classes and objects. These fundamentals are important because effective software development requires more than knowing the syntax of a single programming language." },
        { title: "Develop Object-Oriented Programming Skills", text: "Object-oriented programming is a major part of Java. Learning concepts such as classes, objects, inheritance, encapsulation, abstraction and polymorphism can help learners understand how larger software applications can be structured." },
        { title: "Prepare for Software Development Pathways", text: "Java skills can support learners who want to explore software development. Depending on their additional skills and experience, learners may eventually work toward roles such as Java Developer, Backend Developer, Software Developer or other programming-oriented positions. The course itself should be viewed as a foundation rather than a guarantee of employment." },
        { title: "Practise Problem Solving", text: "Programming requires learners to break problems into smaller steps, write logical solutions and identify errors. Regular Java practice can therefore strengthen computational thinking and structured problem-solving abilities." },
        { title: "Understand Application Development Concepts", text: "Java learning can move beyond basic syntax into concepts used when developing applications. Depending on the final syllabus, this may include collections, exception handling, file handling, database connectivity and other application-development concepts." },
        { title: "Build Projects for a Portfolio", text: "Practical projects can demonstrate whether a learner can apply programming concepts rather than simply recall definitions. Small Java applications can help learners practise requirements, logic, coding, debugging and testing. Projects can also become useful discussion points during interviews or career conversations, provided they genuinely represent the learner's work." },
        { title: "Support Career Switching", text: "Someone moving toward software development needs a structured technical foundation. Java can be one route into programming for career changers, especially when learning is combined with project work, problem-solving practice and additional development technologies." },
        { title: "Create a Foundation for Further Learning", text: "Java can lead into more specialized areas of software development. After establishing core programming skills, learners can explore relevant frameworks, databases, APIs, backend development, testing, cloud technologies or other areas according to their career goals." },
        { title: "Useful for Beginners With Consistent Practice", text: "Java can be approachable for beginners when concepts are introduced progressively. However, learners should expect a learning curve. Understanding programming requires hands-on practice, debugging and repeated problem solving." },
        { title: "Relevant Across Different Technology Environments", text: "Java is used across multiple types of software environments, including enterprise applications, backend systems and other application-development contexts. This makes Java knowledge potentially useful as part of a broader software engineering skill set." },
        { title: "A Practical Skill-Building Path", text: "The strongest value of a Java program comes from combining concepts with implementation. Learners should aim to understand why code works, not simply memorise syntax. A useful progression is: Programming fundamentals → Object-oriented programming → Application concepts → Projects → Additional development technologies → Career preparation. This approach allows learners to build Java knowledge progressively while keeping their long-term career objective in view." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd for a Java Course?",
      intro: "",
      points: [
        { title: "AI-Powered and Robotics Learning Environment", text: "North India's first AI-powered and Robotics learning centre. For Java learners, this environment can add value by placing programming education within a broader technology-focused setting. Java students can benefit from exposure to practical technology concepts, application-oriented thinking and project-based learning. The connection is especially useful for learners who want to understand how programming fits into larger technology ecosystems rather than studying syntax in isolation. Learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh can access the course through the available learning modes, including online learning for those outside the Jalandhar location." },
        { title: "Practical Programming Focus", text: "Java is best learned through regular coding practice. A practical approach can help learners move from understanding concepts to actually writing, testing and debugging programs. Exercises and projects can reinforce topics such as object-oriented programming, collections, exception handling and application logic." },
        { title: "Course Structure Around Core Java Skills", text: "A structured Java program can take learners progressively from programming fundamentals to more advanced application concepts. This helps beginners establish a foundation while giving existing learners an organized path for strengthening their Java knowledge." },
        { title: "Industry-Relevant Development Concepts", text: "Java learning can be connected to concepts used in professional software development, including object-oriented design, application development, databases, APIs and backend programming. The exact technologies and frameworks should follow the current implementation of the course." },
        { title: "Online + Offline Learning Options", text: "Techcadd provides online and offline learning options. The physical Techcadd centre is in Jalandhar, Punjab, while learners from other states can use online learning options without the need to assume a physical Techcadd centre in their city. This makes the course relevant to learners who prefer classroom interaction as well as those who need a more location-flexible learning format." },
        { title: "Suitable for Different Career Stages", text: "The course can support beginners developing their first programming skills, graduates preparing for software-oriented careers, working professionals strengthening technical capabilities and career changers exploring software development. The learning path can therefore begin with fundamentals and progress toward practical development skills according to the learner's existing knowledge." },
        { title: "Project and Portfolio Development", text: "Programming knowledge becomes more meaningful when learners can demonstrate what they have built. Java projects can help learners practise requirements, program structure, debugging and problem solving while creating practical work that can potentially be discussed in interviews or included in a portfolio." },
        { title: "Support for Learners Beyond Jalandhar", text: "Learners from different parts of North India do not need to be physically located in Jalandhar to explore the course. Online learning can make Java education accessible to students and professionals in regions including Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh." },
      ],
    },
    tools: {
      title: "Development Tools and Environment",
      groups: [
        { area: "Java platform", tools: "Java Development Kit (JDK), Java Runtime Environment concepts" },
        { area: "IDEs & editors", tools: "IntelliJ IDEA, Eclipse, Visual Studio Code" },
        { area: "Version control", tools: "Git, GitHub" },
        { area: "Build", tools: "Maven" },
        { area: "Databases", tools: "Database tools" },
        { area: "Command line", tools: "Command-line development tools" },
      ],
      note: "A practical Java learner should become familiar with tools used to write, execute and manage code. Depending on the final course implementation, relevant tools may include those above.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Java skills can contribute to several software-development pathways when combined with practical projects and additional technologies.",
      roles,
      rolesNote: "A course should be viewed as skill preparation rather than a guarantee of any particular job.",
      notes: [
        { title: "Relevant industries", text: "Java skills can be relevant across areas such as IT services, software development, enterprise applications, banking and financial technology, e-commerce, telecommunications, healthcare technology, education technology, business software and digital services." },
        { title: "Career progression", text: "A possible learning progression is: Java fundamentals → Core Java → OOP → Database/application development → Frameworks and APIs → Projects → Job preparation. Learners can later specialize according to their goals, such as backend development, enterprise application development or broader software engineering." },
        { title: "Freelancing", text: "Java can also support selected freelance development work, particularly when combined with backend, database and API skills. Freelancers need more than programming knowledge: they also need project planning, communication, debugging, documentation and client-management abilities." },
        { title: "Future relevance", text: "Java remains a useful programming foundation for learners interested in software development. Its long-term value for an individual depends on continuing to develop complementary skills rather than relying on knowledge of the language alone." },
      ],
      jobsTitle: "State-Wise Career & Learning Opportunities",
      jobs: [
        { title: "Punjab", text: "Punjab learners can use Java as a foundation for software development and IT-oriented career paths. The state's IT activity, startups and growing digital businesses can make programming skills relevant to graduates and career changers. Learners in Jalandhar can consider the physical centre, while those elsewhere in Punjab can explore online learning." },
        { title: "Haryana", text: "Haryana's technology and business ecosystem, particularly around Gurugram, creates relevance for software and application-development skills. Java can be useful for learners interested in IT services, enterprise software, e-commerce and related technology roles." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology environment spanning software, fintech, e-commerce, digital services and IT companies. Java learners can use their programming foundation as a starting point for backend and software-development pathways, while building additional skills required by specific employers." },
        { title: "Chandigarh", text: "Chandigarh's IT services, education and startup ecosystem provides a relevant environment for learners developing programming skills. Java can complement students and professionals who want to move from general technology exposure toward software development." },
        { title: "Uttar Pradesh", text: "Uttar Pradesh has diverse technology activity, including IT and electronics-related opportunities around areas such as Noida and Lucknow. Java can provide a programming foundation for learners interested in software and application development, particularly when supported by projects and database knowledge." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online Java learning can provide access to programming education without requiring relocation. The skill can be relevant to remote-work pathways and learners seeking to build a technology-oriented career alongside opportunities available within the state." },
      ],
    },
    faqTitle: "Frequently Asked Questions",
  },
};
