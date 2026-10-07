import type { CoursePage } from "./types";

/* /courses/kotlin — long-form landing copy supplied by the client (Google Doc "…courses" file), used as given.
   Left out on purpose: the student reviews (the document marks them as sample / illustrative drafts, so this page keeps
   the shared testimonials — add `copy.reviews` when real, consented reviews exist), the SEO/GEO strategy stage, the
   optional trust line outside the "Why Choose Techcadd" section, and the CTA's course-details table and form fields.
   NOT in the document for this course (previous content kept): why techcadd, syllabus, careers, FAQs, CTA.
   Fields the document does not cover (tagline, level, duration, eligibility, projects, whyNow, related, tools) are the previous
   values — the document says to confirm duration and fees with Techcadd. The "North India's first AI-powered and Robotics
   learning centre" line is a first/only claim: keep only if it can be supported. */

export const kotlin: CoursePage = {
  slug: "kotlin",
  title: "Kotlin & Android App Development Course",
  navLabel: "Kotlin",
  group: "programming",
  icon: "Smartphone",
  tagline:
    "Learn Kotlin and modern Android development with Jetpack Compose to design, build and publish real mobile apps.",
  level: "Intermediate",
  duration: "4–5 Months",
  eligibility: "12th pass or above; basic programming knowledge is helpful but not mandatory",
  overview: [
    "A Kotlin Course introduces learners to Kotlin programming and the concepts needed to build modern applications. Kotlin is a statically typed programming language widely associated with Android development and is also used in other application-development environments. A structured course can help learners move from programming fundamentals toward writing clean, maintainable Kotlin code.",
    "The course can be useful for students, graduates, aspiring developers, working professionals, career changers, and beginners who want to develop programming skills. Learners can expect to study Kotlin syntax, variables, data types, control flow, functions, object-oriented programming, collections, null safety, exception handling, and other core programming concepts. Depending on the curriculum, Kotlin training can also introduce Android application development and related development practices.",
    "For learners in Punjab, Kotlin can be a useful skill for those interested in software development, mobile applications, startups, IT services, and freelance development. Students who prefer classroom learning can explore the Techcadd centre in Jalandhar, while learners from other locations can consider online learning.",
    "The focus should be on building programming understanding and practical problem-solving ability rather than simply memorizing Kotlin syntax.",
  ],
  gains: [
    "Write idiomatic Kotlin with null safety, data classes, lambdas and coroutines",
    "Design Android screens using Jetpack Compose and Material 3",
    "Fetch API data with Retrofit and store data with Room",
    "Apply MVVM architecture, Hilt and Navigation in real apps",
    "Course completion certification, Play Store publishing guidance and placement assistance",
  ],
  syllabus: [
    {
      title: "Kotlin Language Essentials",
      summary: "Learn the concise, safe syntax that makes Kotlin popular.",
      topics: [
        "Setting up Android Studio and Kotlin basics",
        "val and var, types, string templates and control flow",
        "Null safety, safe calls and the Elvis operator",
        "Functions, default arguments and extension functions",
        "Collections and higher-order functions",
      ],
    },
    {
      title: "Object-Oriented and Functional Kotlin",
      summary: "Model app data and logic with classes and functional patterns.",
      topics: [
        "Classes, data classes and objects",
        "Interfaces, inheritance and sealed classes",
        "Enums and companion objects",
        "Lambdas, scope functions (let, apply, run)",
        "Generics and delegation",
      ],
    },
    {
      title: "Android Fundamentals",
      summary: "Understand how Android apps are structured and how they run.",
      topics: [
        "Project structure, Gradle and the manifest",
        "Activities and the lifecycle",
        "Intents, permissions and resources",
        "Running on emulators and physical devices",
        "Debugging with Logcat and the Layout Inspector",
      ],
    },
    {
      title: "Jetpack Compose UI",
      summary: "Build responsive, modern interfaces declaratively.",
      topics: [
        "Composable functions, Column, Row and Box",
        "State, remember and state hoisting",
        "Lists with LazyColumn and grids",
        "Material 3 theming, dark mode and accessibility",
        "Navigation between screens with Navigation Compose",
      ],
    },
    {
      title: "Coroutines, Networking and Storage",
      summary: "Handle background work, remote data and offline storage.",
      topics: [
        "Kotlin coroutines and Flow",
        "Retrofit, JSON parsing and error handling",
        "Room database with DAOs",
        "DataStore for preferences",
        "Image loading with Coil",
      ],
    },
    {
      title: "Architecture and Firebase",
      summary: "Organise apps for growth and add cloud features.",
      topics: [
        "MVVM with ViewModel and StateFlow",
        "Dependency injection with Hilt",
        "Firebase Authentication and Firestore",
        "Push notifications with Firebase Cloud Messaging",
        "Google Maps and location basics",
      ],
    },
    {
      title: "Testing and Publishing",
      summary: "Make your app reliable and release it.",
      topics: [
        "Unit tests with JUnit and MockK",
        "Compose UI testing basics",
        "Performance and app size basics",
        "Signing apps and creating an app bundle",
        "Google Play Console setup and listing guidelines",
      ],
    },
    {
      title: "Capstone Project and Interview Preparation",
      summary: "Build a portfolio-ready app and prepare for Android interviews.",
      topics: [
        "Capstone: a complete MVVM app with API, Room and Firebase",
        "Mentor code reviews and UI polish",
        "Android and Kotlin interview questions",
        "Publishing a demo build and preparing a portfolio",
        "Mock interviews and resume review",
      ],
    },
  ],
  tools: [
    "Kotlin",
    "Android Studio",
    "Jetpack Compose",
    "Material 3",
    "Retrofit",
    "Room",
    "Hilt",
    "Firebase",
    "Coroutines & Flow",
    "Git & GitHub",
  ],
  projects: [
    {
      title: "Expense Tracker App",
      text: "Add, categorise and chart expenses stored offline with Room and displayed using Compose.",
      tags: ["Compose", "Room", "MVVM"],
    },
    {
      title: "News and Weather Reader",
      text: "Fetch live data from public APIs and present it in a clean, searchable list with offline caching.",
      tags: ["Retrofit", "Coroutines", "Coil"],
    },
    {
      title: "Local Business Catalogue App",
      text: "A product catalogue for a small business such as a Ludhiana hosiery seller, with categories and WhatsApp enquiry buttons.",
      tags: ["Firebase", "Navigation", "Intents"],
    },
    {
      title: "Chat App with Firebase",
      text: "Real-time messaging with user authentication and push notifications.",
      tags: ["Firestore", "Auth", "FCM"],
    },
    {
      title: "Fitness and Habit Tracker",
      text: "Track daily goals with reminders, statistics and a Material 3 interface.",
      tags: ["WorkManager", "DataStore", "Material 3"],
    },
    {
      title: "Food Order App Prototype",
      text: "Menu, cart and order screens with dependency injection and unit-tested view models.",
      tags: ["Hilt", "MockK", "StateFlow"],
    },
  ],
  careers: [
    {
      role: "Android Developer",
      work: "Builds and maintains Android applications in Kotlin.",
      hirers: "Mobile app studios, product companies and IT services firms",
    },
    {
      role: "Kotlin Developer",
      work: "Writes Kotlin for mobile apps and backend services.",
      hirers: "Software companies and startups",
    },
    {
      role: "Mobile App Freelancer",
      work: "Delivers custom apps to small businesses and agencies.",
      hirers: "Local businesses, agencies and international freelance clients",
    },
    {
      role: "Junior Mobile Engineer",
      work: "Supports feature development, bug fixing and testing on live apps.",
      hirers: "E-commerce, fintech and education technology companies",
    },
  ],
  whyNow: [
    "Android is the dominant mobile platform in India, and Kotlin with Jetpack Compose is now the standard approach for new Android apps.",
    "Small businesses across Punjab and North India increasingly want their own apps, creating practical freelance and job opportunities.",
  ],
  faqs: [
    {
      q: "Do I need to know Java before learning Kotlin?",
      a: "No. The course teaches Kotlin from the beginning. Any earlier programming experience helps, but it is not required.",
    },
    {
      q: "What kind of laptop do I need?",
      a: "Android Studio runs best on a laptop with at least 8 GB RAM, though 16 GB is more comfortable. Our centres also have lab systems for classroom batches.",
    },
    {
      q: "Will I learn Jetpack Compose or old XML layouts?",
      a: "The main focus is Jetpack Compose, the current recommended toolkit. We also explain XML basics so you can read and maintain older projects.",
    },
    {
      q: "Will I learn how to publish an app?",
      a: "Yes. You learn app signing, bundles and Google Play Console basics, and we guide you through preparing a listing.",
    },
  ],
  related: ["java", "web-development", "python"],
  copy: {
    heading: { title: "Kotlin Course", highlight: "Online + Jalandhar", meta: "Kotlin Course: Learn Modern Programming and Android Development Basics | techcadd" },
    overview: { eyebrow: "Program Overview", title: "What the Kotlin Course covers" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Kotlin Course?",
      intro: "A Kotlin Course can suit learners at different stages of their education and career. While a programming background can make some topics easier, beginners can also start with Kotlin when the course introduces programming concepts progressively.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology, software engineering, mathematics, or related technical fields can use Kotlin to strengthen their programming profile. Learning Kotlin can complement existing knowledge of programming, databases, algorithms, software development, or mobile applications." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates with an IT or software background can use Kotlin as an additional programming skill. It can be particularly useful for learners who want to explore Android development or expand their understanding of modern statically typed programming." },
        { icon: "Briefcase", title: "Working professionals", text: "Developers and IT professionals can learn Kotlin to broaden their programming capabilities or explore application-development opportunities. Professionals already familiar with Java may find Kotlin especially relevant because of its close relationship with the Java ecosystem." },
        { icon: "Shuffle", title: "Job switchers", text: "Professionals moving toward software development can use Kotlin as one possible entry point into programming. However, learning the language alone is not enough for most developer roles. Job seekers should also build problem-solving ability, development projects, version-control knowledge, and an understanding of software-development practices." },
        { icon: "PenTool", title: "Freelancers", text: "Freelancers interested in mobile or application development can explore Kotlin as a skill for suitable client projects. A strong portfolio demonstrating functional applications is generally more useful than simply listing Kotlin as a skill." },
        { icon: "Building2", title: "Business owners", text: "Business owners do not necessarily need to become Kotlin developers, but understanding the fundamentals can help them communicate more effectively with development teams when planning mobile or application-based products. Those who want to build technical products themselves can progress further into application development." },
        { icon: "Rocket", title: "Career changers", text: "Learners changing careers into software development can use Kotlin to develop programming fundamentals and then move toward application development. A structured learning path can help them progress from syntax and programming logic to practical projects." },
        { icon: "Laptop", title: "Beginners", text: "Kotlin can be learned by beginners when fundamental programming concepts are introduced first." },
        { icon: "BookOpen", title: "12th-pass students", text: "Students who have completed 12th standard and have an interest in programming can explore Kotlin. For a long-term software-development career, they should also consider building broader computer-science and programming fundamentals through appropriate education and practical projects." },
      ],
      need: "Beginners should expect to spend time practising variables, functions, conditions, loops, classes, collections, debugging, and problem-solving rather than focusing only on theoretical explanations.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can study Kotlin online while developing programming skills relevant to IT services, startups, software businesses, and mobile applications. Students interested in development careers can use Kotlin as part of a broader software-development learning path." },
        { title: "Haryana", text: "Learners in Haryana can combine Kotlin training with interests in software development, e-commerce, IT services, and technology-driven businesses. Online learning can be particularly convenient for working professionals in cities such as Gurugram and Faridabad." },
        { title: "Himachal Pradesh", text: "For students in Himachal Pradesh, online Kotlin learning can provide access to programming education without requiring relocation. The skill can also complement remote software work and freelancing for learners who develop a strong application-development portfolio." },
        { title: "Chandigarh", text: "Learners in Chandigarh can use Kotlin training to strengthen programming skills relevant to IT, BPO, startups, education technology, and software development. It can also complement existing knowledge of Java or other programming languages." },
        { title: "Delhi NCR", text: "Delhi NCR provides a broad technology environment spanning IT, agencies, fintech, e-commerce, media, and software businesses. Kotlin learners can use the language as part of a wider development profile, particularly when combined with Android or backend-development skills." },
        { title: "Jammu & Kashmir", text: "Students from Jammu and Srinagar can use online Kotlin training to develop programming skills without relocating. Building practical applications can also provide a foundation for remote software-development or freelance opportunities." },
        { title: "Uttarakhand", text: "Learners from Dehradun, Haridwar, and other parts of Uttarakhand can study Kotlin alongside college or employment. Programming skills can complement opportunities connected with education, IT services, digital businesses, and remote work." },
        { title: "Rajasthan", text: "Students in Rajasthan, especially around Jaipur, can explore Kotlin as part of a broader software-development pathway. Online learning can allow learners to build programming skills while continuing their existing education or work." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can use Kotlin training to strengthen software-development skills relevant to IT, electronics, retail technology, and digital businesses. Students in Noida, Lucknow, and other cities can study online while building application-based projects." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Kotlin Program?",
      intro: "Kotlin is a modern programming language that can be valuable for learners interested in application development, particularly Android development. Studying Kotlin can provide more than knowledge of a programming language: it can help learners develop structured programming, problem-solving, application-building, and software-development skills.",
      points: [
        { title: "Build a modern programming foundation", text: "Learning Kotlin introduces learners to fundamental programming concepts such as variables, data types, functions, conditions, loops, classes, objects, collections, and error handling. These concepts help develop programming logic that can be applied beyond a single project." },
        { title: "Explore Android development", text: "Kotlin has an important role in modern Android development. Learners interested in mobile applications can use Kotlin as a foundation for understanding how Android applications are structured, developed, tested, and improved." },
        { title: "Develop practical programming skills", text: "Programming is best learned through practice. Kotlin projects can involve creating small applications, working with user input, handling data, designing application logic, and debugging code. Such exercises help learners move from understanding syntax to actually solving problems." },
        { title: "Strengthen problem-solving ability", text: "A good Kotlin program should teach learners how to break a problem into smaller components, select appropriate programming structures, handle data, identify errors, and improve their solutions. These problem-solving skills are valuable across software-development roles." },
        { title: "Useful for Java developers and learners", text: "Kotlin's relationship with the Java ecosystem makes it particularly relevant for learners who already know Java or want to understand another language used in JVM-based development. Learners with Java knowledge can use Kotlin to broaden their programming toolkit." },
        { title: "Create portfolio projects", text: "Kotlin learners can build practical projects that demonstrate their programming ability. Depending on the learning path, projects may include utility applications, data-driven applications, Android applications, or other software projects. A portfolio gives learners something tangible to discuss during interviews or freelance discussions." },
        { title: "Support career switching", text: "For someone moving into software development, Kotlin can form part of a structured learning pathway. However, learners should complement Kotlin with Git, databases, APIs, development tools, software-engineering concepts, and problem-solving practice to build a more complete profile." },
        { title: "Freelancing opportunities", text: "Kotlin can be useful for freelancers interested in suitable mobile or software-development projects. Freelance opportunities depend on the type of applications a client requires, the developer's experience, portfolio, communication, and ability to deliver complete solutions." },
        { title: "Continue into advanced development", text: "After learning the fundamentals, learners can progress toward areas such as Android development, backend development, APIs, application architecture, testing, databases, and other software-development technologies. Kotlin can therefore serve as one component of a longer-term development roadmap." },
        { title: "Suitable for progressive learning", text: "Beginners do not need to master every advanced programming concept immediately. A structured course can introduce Kotlin fundamentals first and then gradually move toward object-oriented programming, collections, application development, debugging, and practical projects." },
      ],
      outro: "The strongest outcome from Kotlin training is not simply knowing Kotlin syntax. It is being able to use programming concepts to create, understand, debug, and improve software. Learners who combine Kotlin with practical projects and complementary development skills can build a stronger foundation for further software-development learning.",
    },
  },
};
