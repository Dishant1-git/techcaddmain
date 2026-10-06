import type { CoursePage } from "./types";
import { java } from "./java";
import { python } from "./python";

export const programmingCourses: CoursePage[] = [
  python,
  java,
  {
    slug: "c-cpp",
    title: "C & C++ Programming Course",
    navLabel: "C & C++",
    group: "programming",
    icon: "Cpu",
    tagline:
      "Build a strong programming foundation with C and modern C++, covering logic, memory, OOP and data structures for college and career success.",
    level: "Beginner",
    duration: "3–4 Months",
    eligibility: "10+2 or above; ideal for BCA, B.Tech, MCA and diploma students",
    overview: [
      "C and C++ teach how programs actually work: memory, pointers, compilation and performance. They are core subjects in university curricula and remain important in embedded systems, game engines, operating systems and competitive programming.",
      "This course starts with logic building in C, moves to object-oriented programming and the Standard Template Library in modern C++ (C++17/20), and finishes with data structures and problem solving. It is well suited to students in Jalandhar, Ludhiana and Chandigarh who want to strengthen their college subjects and prepare for placements.",
    ],
    gains: [
      "Think logically and write efficient programs in C and modern C++",
      "Understand pointers, memory management and the compilation process",
      "Apply OOP, templates and the STL to real problems",
      "Implement core data structures and solve interview-style problems",
      "Course completion certification and placement assistance",
    ],
    syllabus: [
      {
        title: "Programming Logic and C Basics",
        summary: "Learn to break problems into steps and express them in C.",
        topics: [
          "Algorithms, flowcharts and pseudocode",
          "Compiling with GCC and using VS Code or Code::Blocks",
          "Data types, operators and formatted input/output",
          "Decision making and loops",
          "Pattern printing and number-based logic problems",
        ],
      },
      {
        title: "Functions, Arrays and Strings in C",
        summary: "Structure programs into reusable pieces and manipulate collections of data.",
        topics: [
          "Function definitions, parameters and return values",
          "Recursion and the call stack",
          "One- and two-dimensional arrays",
          "String handling with string.h functions",
          "Storage classes and preprocessor directives",
        ],
      },
      {
        title: "Pointers and Memory Management",
        summary: "Gain control over memory, the skill that sets C programmers apart.",
        topics: [
          "Pointers, pointer arithmetic and arrays",
          "Dynamic memory with malloc, calloc, realloc and free",
          "Structures, unions and typedef",
          "Function pointers and callbacks",
          "Finding memory bugs with Valgrind and debugging with GDB",
        ],
      },
      {
        title: "File Handling and Mini Projects in C",
        summary: "Store data permanently and combine concepts into small programs.",
        topics: [
          "Text and binary file operations",
          "Command-line arguments",
          "Modular programming with header files and Makefiles",
          "Building a menu-driven record system",
          "Bit manipulation basics",
        ],
      },
      {
        title: "Object-Oriented Programming in C++",
        summary: "Move from procedural C to classes and objects.",
        topics: [
          "Classes, constructors, destructors and the this pointer",
          "Inheritance, virtual functions and polymorphism",
          "Operator overloading and friend functions",
          "References, const correctness and namespaces",
          "RAII, smart pointers (unique_ptr, shared_ptr) and the rule of five",
        ],
      },
      {
        title: "Templates and the Standard Template Library",
        summary: "Use the powerful C++ library instead of rewriting common structures.",
        topics: [
          "Function and class templates",
          "Vectors, maps, sets, stacks and queues",
          "Iterators and algorithms (sort, find, transform)",
          "Lambda expressions and range-based for loops",
          "Exception handling and file streams",
        ],
      },
      {
        title: "Data Structures and Algorithms",
        summary: "Learn the structures behind efficient software and coding tests.",
        topics: [
          "Linked lists, stacks and queues",
          "Trees and binary search trees",
          "Searching and sorting algorithms",
          "Time and space complexity with Big-O",
          "Hash tables and basic graph traversal",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Build a complete application and practise the questions asked in technical rounds.",
        topics: [
          "Capstone: console-based management system or simple game in C++",
          "Solving problems on coding practice platforms",
          "Common C and C++ interview questions on pointers and OOP",
          "Mock technical interviews and aptitude practice",
          "Resume and GitHub portfolio setup",
        ],
      },
    ],
    tools: [
      "GCC / G++",
      "VS Code",
      "Code::Blocks",
      "CMake",
      "GDB",
      "Valgrind",
      "Git & GitHub",
      "C++17 / C++20",
      "Makefile",
    ],
    projects: [
      {
        title: "Student Record Management System",
        text: "A menu-driven C program that adds, searches, edits and stores student data in binary files.",
        tags: ["C", "File Handling", "Structures"],
      },
      {
        title: "Banking Simulation in C++",
        text: "Model accounts and transactions with classes, inheritance and exception handling.",
        tags: ["C++", "OOP", "Exceptions"],
      },
      {
        title: "Tic-Tac-Toe and Snake Game",
        text: "Console games that apply arrays, loops, functions and game-state logic.",
        tags: ["C++", "Logic", "Arrays"],
      },
      {
        title: "Inventory Manager with STL",
        text: "Track stock for a small shop using vectors, maps and sorting algorithms.",
        tags: ["STL", "Templates", "Algorithms"],
      },
      {
        title: "Custom Linked List and BST Library",
        text: "Implement reusable data structure classes using templates and smart pointers, with unit-style tests.",
        tags: ["Data Structures", "Templates", "Pointers"],
      },
      {
        title: "Simple Text Compressor",
        text: "Read a file, count character frequencies and write a compressed output using a basic encoding scheme.",
        tags: ["File I/O", "Algorithms", "Memory"],
      },
    ],
    careers: [
      {
        role: "Software Developer (C/C++)",
        work: "Writes performance-sensitive application and system code.",
        hirers: "Software product companies and IT services firms",
      },
      {
        role: "Embedded Systems Trainee",
        work: "Programs microcontrollers and device firmware in C.",
        hirers: "Electronics, automotive and IoT companies",
      },
      {
        role: "Game or Graphics Programmer (Junior)",
        work: "Builds engine components and gameplay code in C++.",
        hirers: "Game studios and simulation companies",
      },
      {
        role: "Programming Trainer or Tutor",
        work: "Teaches C and C++ fundamentals to college students.",
        hirers: "Training institutes and coaching centres",
      },
      {
        role: "Junior Software Engineer",
        work: "Uses strong fundamentals to work in any language stack.",
        hirers: "IT companies hiring through campus and off-campus drives",
      },
    ],
    whyNow: [
      "C and C++ underpin operating systems, embedded devices, databases and game engines, and remain core to engineering placement tests.",
      "Once you understand memory and OOP in C++, learning Java, Python or Rust becomes considerably easier.",
    ],
    faqs: [
      {
        q: "Should I learn C first or go directly to C++?",
        a: "We recommend C first. It builds logic and memory understanding, and the course then moves to C++ so you can compare procedural and object-oriented styles.",
      },
      {
        q: "Will this help with my college subjects and exams?",
        a: "Yes. The syllabus covers what is taught in most BCA, B.Tech and diploma programming and data structures papers, with additional practical work.",
      },
      {
        q: "Which C++ standard do you teach?",
        a: "We teach modern C++ (C++17 and C++20 features), including smart pointers, lambdas and the STL, rather than outdated style.",
      },
      {
        q: "Is this suitable for competitive programming and placement tests?",
        a: "The data structures and problem-solving modules are designed for that. Regular practice problems and mock tests are part of the batch.",
      },
    ],
    related: ["java", "python", "it-foundation"],
  },
  {
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
      "Kotlin is Google’s preferred language for Android, and Jetpack Compose is the modern toolkit for building app interfaces. This course teaches the Kotlin language first and then applies it to complete Android apps using current architecture practices.",
      "You build apps that use APIs, local storage and Firebase, then learn to test and prepare them for the Google Play Store. The course suits students and working professionals who want to build mobile products for local businesses, startups or their own ideas.",
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
  },
  {
    slug: "web-designing",
    title: "Web Designing Course",
    navLabel: "Web Designing",
    group: "programming",
    icon: "Palette",
    tagline:
      "Design responsive, accessible websites with HTML5, CSS3, Tailwind CSS, Figma and JavaScript basics, and build a portfolio of live pages.",
    level: "Beginner",
    duration: "3–4 Months",
    eligibility: "12th pass or above; no coding background needed",
    overview: [
      "Every business needs a website that looks professional, loads quickly and works on a phone. This course teaches you to plan and design web pages in Figma and turn them into clean, responsive code with HTML5, CSS3, Flexbox, Grid and Tailwind CSS.",
      "You also learn JavaScript basics for interactivity, accessibility and SEO-friendly structure, and how to publish sites online. The course suits students, freelancers and shop owners in Punjab who want to create websites for themselves or for clients.",
    ],
    gains: [
      "Design layouts and prototypes in Figma using grids, typography and colour",
      "Code responsive pages with semantic HTML5, modern CSS and Tailwind CSS",
      "Add interactivity with JavaScript and build accessible, fast-loading pages",
      "Deploy websites using GitHub Pages, Netlify or Vercel",
      "Course completion certification, portfolio review and placement assistance",
    ],
    syllabus: [
      {
        title: "Web and Design Fundamentals",
        summary: "Understand how websites work and the principles of good visual design.",
        topics: [
          "How browsers, servers, domains and hosting work",
          "Layout, colour theory, typography and spacing",
          "User experience basics and wireframing",
          "Setting up VS Code, Live Server and Git",
          "Analysing well-designed websites",
        ],
      },
      {
        title: "Figma for Website Design",
        summary: "Create professional layouts and clickable prototypes before writing code.",
        topics: [
          "Frames, auto layout and constraints",
          "Components, variants and design tokens",
          "Designing for mobile, tablet and desktop",
          "Prototyping and design handoff",
          "Exporting images and assets for the web",
        ],
      },
      {
        title: "HTML5",
        summary: "Structure web pages meaningfully for users and search engines.",
        topics: [
          "Semantic elements: header, nav, main, section and footer",
          "Text, links, images, audio and video",
          "Tables, forms and input validation",
          "Accessibility with ARIA and alt text",
          "SEO basics: titles, meta tags and headings",
        ],
      },
      {
        title: "CSS3 and Responsive Layouts",
        summary: "Style pages and make them adapt to every screen size.",
        topics: [
          "Selectors, the cascade, specificity and the box model",
          "Flexbox and CSS Grid",
          "Media queries and mobile-first design",
          "Custom properties, transitions and animations",
          "Modern CSS: clamp(), container queries and aspect-ratio",
        ],
      },
      {
        title: "Tailwind CSS and UI Components",
        summary: "Build interfaces faster using a utility-first framework.",
        topics: [
          "Tailwind CSS v4 setup and utility classes",
          "Responsive variants and dark mode",
          "Building navbars, cards, hero sections and footers",
          "Comparing Bootstrap and Tailwind approaches",
          "Reusable component patterns",
        ],
      },
      {
        title: "JavaScript for Interactive Pages",
        summary: "Add behaviour such as menus, sliders, forms and dynamic content.",
        topics: [
          "Variables, functions, arrays and objects",
          "DOM selection, events and manipulation",
          "Form validation and localStorage",
          "Fetching data from APIs with fetch and async/await",
          "Building sliders, tabs and modals",
        ],
      },
      {
        title: "Performance, Deployment and Freelancing",
        summary: "Publish fast sites and learn how to work with clients.",
        topics: [
          "Image optimisation and Core Web Vitals with Lighthouse",
          "Publishing with GitHub Pages, Netlify or Vercel",
          "Connecting a custom domain",
          "Writing proposals and managing client projects",
          "Introduction to WordPress themes",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Design and build a complete website and prepare your portfolio.",
        topics: [
          "Capstone: business website designed in Figma and coded end to end",
          "Portfolio site with case studies",
          "Front-end and design interview questions",
          "Mock interviews and design critique sessions",
          "Resume, LinkedIn and freelance profile setup",
        ],
      },
    ],
    tools: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript (ES2024)",
      "Figma",
      "VS Code",
      "Git & GitHub",
      "Netlify / Vercel",
      "Chrome DevTools",
    ],
    projects: [
      {
        title: "Business Landing Page",
        text: "A responsive one-page website for a local business, such as a Jalandhar sports-goods exporter, with clear calls to action.",
        tags: ["HTML5", "CSS3", "Responsive"],
      },
      {
        title: "Personal Portfolio Website",
        text: "Showcase your projects and skills with a fast, accessible design published on your own domain.",
        tags: ["Tailwind CSS", "Figma", "Deployment"],
      },
      {
        title: "Restaurant Menu and Booking Site",
        text: "A multi-page site with menu sections, gallery, table booking form and Google Maps embed.",
        tags: ["Forms", "Grid", "Flexbox"],
      },
      {
        title: "E-commerce Product Page",
        text: "Product gallery, size selector and cart preview with JavaScript interactions.",
        tags: ["JavaScript", "DOM", "UI Design"],
      },
      {
        title: "Figma Design System",
        text: "A reusable set of colours, type styles and components documented for handoff to developers.",
        tags: ["Figma", "Components", "Design Tokens"],
      },
      {
        title: "Weather and News Widget Page",
        text: "Fetch live data from a public API and show it in an interactive, mobile-friendly layout.",
        tags: ["fetch API", "async/await", "Responsive"],
      },
    ],
    careers: [
      {
        role: "Web Designer",
        work: "Designs and builds attractive, responsive websites for clients.",
        hirers: "Digital agencies, design studios and IT companies",
      },
      {
        role: "Front-End Developer (Junior)",
        work: "Converts designs into clean HTML, CSS and JavaScript.",
        hirers: "Software companies and startups",
      },
      {
        role: "UI Designer (Junior)",
        work: "Creates interface layouts and prototypes in Figma.",
        hirers: "Product companies and design agencies",
      },
      {
        role: "Freelance Website Designer",
        work: "Delivers websites to small businesses, clinics and shops.",
        hirers: "Local businesses and online freelance marketplaces",
      },
      {
        role: "WordPress Designer",
        work: "Customises themes and landing pages for marketing teams.",
        hirers: "Marketing agencies and web studios",
      },
    ],
    whyNow: [
      "Most customers first meet a business through its website on a phone, so responsive, fast design is now a basic requirement.",
      "Tools like Figma and Tailwind CSS let a single designer move from idea to a live site much faster than before.",
    ],
    faqs: [
      {
        q: "Do I need to be good at drawing to learn web designing?",
        a: "No. Web design relies on layout, spacing and colour principles that we teach step by step, using Figma templates and guided exercises.",
      },
      {
        q: "What is the difference between Web Designing and Web Development?",
        a: "Web Designing focuses on visual design and front-end pages. Web Development adds server-side programming and databases. Many students start here and continue to Web Development.",
      },
      {
        q: "Will I learn JavaScript in this course?",
        a: "Yes, the essential JavaScript needed for interactive pages, forms and API data. Advanced frameworks are covered in our MERN and MEAN courses.",
      },
      {
        q: "Can I start freelancing after this course?",
        a: "Many students build simple business sites during the course. Your mentor helps with your portfolio and how to approach clients, but you should continue practising on real projects.",
      },
    ],
    related: ["web-development", "wordpress", "digital-marketing"],
  },
  {
    slug: "web-development",
    title: "Web Development Course",
    navLabel: "Web Development",
    group: "programming",
    icon: "Globe",
    tagline:
      "Learn front-end and back-end web development with HTML, CSS, JavaScript, React, Node.js and databases, and deploy full working applications.",
    level: "Intermediate",
    duration: "5–6 Months",
    eligibility: "12th pass or above; basic computer skills",
    overview: [
      "This course takes you from web fundamentals to building complete, database-driven web applications. You learn modern JavaScript, React for the front end, and Node.js with Express for the back end, along with SQL and MongoDB.",
      "The course is project-based: each stage ends with something you can deploy and share. It is designed for students and career switchers who want job-ready web skills for companies in Mohali, Chandigarh, Delhi NCR and remote teams.",
    ],
    gains: [
      "Build responsive front ends with HTML5, CSS3, Tailwind CSS and JavaScript",
      "Create React applications using hooks, routing and API integration",
      "Develop back-end services with Node.js, Express, and SQL or MongoDB",
      "Use Git, GitHub, Postman and cloud deployment in a professional workflow",
      "Course completion certification, portfolio guidance and placement assistance",
    ],
    syllabus: [
      {
        title: "Web Foundations: HTML and CSS",
        summary: "Structure and style responsive pages using current standards.",
        topics: [
          "Semantic HTML5 and accessibility basics",
          "CSS Flexbox, Grid and responsive design",
          "Tailwind CSS utility classes",
          "Git and GitHub basics",
          "Chrome DevTools for debugging layouts",
        ],
      },
      {
        title: "JavaScript Essentials",
        summary: "Learn the language that powers the web.",
        topics: [
          "Variables, functions, arrays, objects and ES6+ syntax",
          "DOM manipulation and events",
          "Promises, async/await and the fetch API",
          "Modules, destructuring and array methods",
          "Introduction to TypeScript",
        ],
      },
      {
        title: "React Front-End Development",
        summary: "Build dynamic single-page applications with components.",
        topics: [
          "Components, props and JSX",
          "State and effects with hooks",
          "Routing with React Router",
          "Forms, validation and API calls",
          "Global state with Context or Zustand",
        ],
      },
      {
        title: "Node.js and Express",
        summary: "Create back-end servers and RESTful APIs.",
        topics: [
          "Node.js runtime, npm and modules",
          "Express routing and middleware",
          "REST API design and Postman testing",
          "Error handling and environment variables",
          "File uploads and email sending",
        ],
      },
      {
        title: "Databases",
        summary: "Store and query application data with SQL and NoSQL options.",
        topics: [
          "SQL basics with MySQL or PostgreSQL",
          "MongoDB and Mongoose fundamentals",
          "Data modelling and relationships",
          "Indexes and basic query performance",
          "Choosing between SQL and NoSQL",
        ],
      },
      {
        title: "Authentication and Security",
        summary: "Protect user data and control access.",
        topics: [
          "Password hashing with bcrypt",
          "JWT and cookie-based sessions",
          "Role-based access control",
          "CORS, input validation and common vulnerabilities (OWASP Top 10)",
          "Protecting API keys and secrets",
        ],
      },
      {
        title: "Deployment and Workflow",
        summary: "Take applications live and work like a professional team.",
        topics: [
          "Deploying front ends on Vercel or Netlify",
          "Hosting back ends on Render or a VPS",
          "Environment configuration and CI basics with GitHub Actions",
          "Docker fundamentals",
          "Domain, HTTPS and monitoring basics",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Build a full application and prepare for developer interviews.",
        topics: [
          "Capstone: full web application with authentication and database",
          "Code review and refactoring with a mentor",
          "JavaScript, React and Node.js interview questions",
          "Data structures problems in JavaScript",
          "Mock interviews, portfolio and resume review",
        ],
      },
    ],
    tools: [
      "HTML5 & CSS3",
      "JavaScript / TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL / PostgreSQL",
      "Tailwind CSS",
      "Postman",
      "Git & GitHub",
      "Vercel",
    ],
    projects: [
      {
        title: "Responsive Business Website",
        text: "A multi-page marketing site with contact form and mobile-first layout.",
        tags: ["HTML5", "Tailwind CSS", "JavaScript"],
      },
      {
        title: "Task and Project Manager",
        text: "A React app with login, task boards and a Node.js API storing data in a database.",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Online Store",
        text: "Product listings, cart, checkout flow and an admin dashboard for managing orders.",
        tags: ["React", "Express", "JWT"],
      },
      {
        title: "Blog and CMS Platform",
        text: "Write, edit and publish posts with user roles, image upload and search.",
        tags: ["REST API", "SQL", "Auth"],
      },
      {
        title: "Job Portal",
        text: "Employers post jobs and candidates apply, with filters and role-based dashboards.",
        tags: ["React", "PostgreSQL", "RBAC"],
      },
      {
        title: "Live Weather and Maps Dashboard",
        text: "Combine third-party APIs into an interactive dashboard with caching on the server.",
        tags: ["API Integration", "Async", "Deployment"],
      },
    ],
    careers: [
      {
        role: "Web Developer",
        work: "Builds and maintains websites and web applications.",
        hirers: "Software companies, agencies and startups in Mohali, Chandigarh and Delhi NCR",
      },
      {
        role: "Front-End Developer",
        work: "Creates interfaces with React and modern CSS.",
        hirers: "Product companies and digital agencies",
      },
      {
        role: "Back-End Developer (Node.js)",
        work: "Builds APIs, databases and server logic.",
        hirers: "IT services firms and SaaS companies",
      },
      {
        role: "Full Stack Developer (Junior)",
        work: "Works across the interface, server and database of an application.",
        hirers: "Startups and technology teams",
      },
      {
        role: "Freelance Web Developer",
        work: "Delivers custom websites and web apps to clients.",
        hirers: "Local businesses and remote clients",
      },
    ],
    whyNow: [
      "Nearly every business needs web applications, and React with Node.js is one of the most requested skill combinations in developer job listings.",
      "Deployment platforms now make it simple to publish real projects, so your portfolio can be live and verifiable.",
    ],
    faqs: [
      {
        q: "How is this different from the MERN Stack course?",
        a: "This course gives a broader web foundation, including HTML, CSS, JavaScript, SQL and MongoDB. The MERN Stack course is a focused, deeper programme on MongoDB, Express, React and Node.js for students who already know web basics.",
      },
      {
        q: "Do I need prior coding knowledge?",
        a: "No, but comfort with using a computer helps. The first modules cover HTML, CSS and JavaScript from the start.",
      },
      {
        q: "Will I learn TypeScript?",
        a: "Yes, an introduction is included, and you apply it in selected projects, since many teams now use TypeScript.",
      },
      {
        q: "Are online batches available?",
        a: "Yes. Live online batches follow the same syllabus, with screen-sharing code reviews and recorded sessions for revision.",
      },
    ],
    related: ["mern-stack", "web-designing", "php-full-stack"],
  },
  {
    slug: "mern-stack",
    title: "MERN Stack Development Course",
    navLabel: "MERN Stack",
    group: "programming",
    icon: "Layers",
    tagline:
      "Become a full stack JavaScript developer with MongoDB, Express, React and Node.js, building and deploying production-style applications.",
    level: "Intermediate",
    duration: "5–6 Months",
    eligibility: "Basic HTML/CSS knowledge or completion of Web Designing; graduates and final-year students welcome",
    overview: [
      "The MERN stack lets you build a complete web application using one language, JavaScript, from database to browser. This course covers MongoDB, Express.js, React and Node.js, with TypeScript, authentication, testing and deployment included.",
      "You work through modern practices such as REST and GraphQL APIs, JWT security, state management and CI workflows. The course is ideal for students and professionals aiming for full stack roles at product companies and software firms in Mohali, Chandigarh and Delhi NCR.",
    ],
    gains: [
      "Build full stack applications with MongoDB, Express, React and Node.js",
      "Write typed, maintainable code using modern JavaScript and TypeScript",
      "Implement secure authentication, file uploads and payment-gateway integration in test mode",
      "Test, containerise and deploy applications to the cloud",
      "Course completion certification, live projects and placement assistance",
    ],
    syllabus: [
      {
        title: "Modern JavaScript and TypeScript",
        summary: "Strengthen the language fundamentals every MERN developer relies on.",
        topics: [
          "ES6+ features, modules and destructuring",
          "Closures, the event loop and asynchronous programming",
          "Array methods and functional patterns",
          "TypeScript types, interfaces and generics",
          "Tooling with npm, ESLint and Prettier",
        ],
      },
      {
        title: "React Fundamentals",
        summary: "Build interactive interfaces with components and hooks.",
        topics: [
          "JSX, components, props and rendering lists",
          "useState, useEffect, useRef and custom hooks",
          "Forms with React Hook Form and Zod validation",
          "Routing with React Router",
          "Styling with Tailwind CSS",
        ],
      },
      {
        title: "Advanced React and State Management",
        summary: "Manage complex data flow and optimise performance.",
        topics: [
          "Context API and Redux Toolkit",
          "Data fetching and caching with TanStack Query",
          "Memoisation, lazy loading and code splitting",
          "Introduction to Next.js and server rendering",
          "Testing components with Vitest and React Testing Library",
        ],
      },
      {
        title: "Node.js and Express",
        summary: "Create scalable server-side applications and APIs.",
        topics: [
          "Node.js internals, modules and streams",
          "Express routing, middleware and error handling",
          "REST API design and versioning",
          "File uploads with Multer and cloud storage",
          "Sending emails and background jobs",
        ],
      },
      {
        title: "MongoDB and Mongoose",
        summary: "Model and query document data efficiently.",
        topics: [
          "Documents, collections and MongoDB Atlas",
          "CRUD operations and the aggregation pipeline",
          "Mongoose schemas, validation and populate",
          "Indexes and query performance",
          "Data modelling: embedding versus referencing",
        ],
      },
      {
        title: "Authentication, Security and Real-Time Features",
        summary: "Secure applications and add live functionality.",
        topics: [
          "JWT access and refresh tokens, and OAuth login",
          "Password hashing, rate limiting and Helmet",
          "Role-based access control",
          "WebSockets with Socket.IO",
          "Payment gateway integration in sandbox mode",
        ],
      },
      {
        title: "Testing, DevOps and Deployment",
        summary: "Ship applications reliably.",
        topics: [
          "API testing with Jest and Supertest",
          "Docker basics and environment configuration",
          "CI with GitHub Actions",
          "Deploying to Vercel, Render or AWS",
          "Logging, monitoring and error tracking",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Deliver a complete full stack product and prepare for interviews.",
        topics: [
          "Capstone: production-style MERN application built in a team",
          "Agile workflow with Git branches and pull requests",
          "System design basics for web applications",
          "MERN and JavaScript interview questions, and DSA practice",
          "Mock interviews, portfolio and resume review",
        ],
      },
    ],
    tools: [
      "MongoDB Atlas",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Redux Toolkit",
      "Next.js",
      "Tailwind CSS",
      "Socket.IO",
      "Docker",
      "Git & GitHub",
      "Postman",
    ],
    projects: [
      {
        title: "Full Stack E-commerce Platform",
        text: "Product catalogue, cart, order management, admin dashboard and sandbox payment integration.",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Real-Time Chat Application",
        text: "Private and group chat with online status, message history and file sharing.",
        tags: ["Socket.IO", "JWT", "Express"],
      },
      {
        title: "Job Board with Role-Based Access",
        text: "Separate flows for employers, candidates and administrators with search and filters.",
        tags: ["RBAC", "Mongoose", "React Router"],
      },
      {
        title: "Project Management Tool",
        text: "Kanban boards, team invitations and activity logs with optimistic UI updates.",
        tags: ["Redux Toolkit", "TanStack Query", "TypeScript"],
      },
      {
        title: "Learning Management System",
        text: "Courses, video lessons, progress tracking and quizzes for a training institute.",
        tags: ["Next.js", "MongoDB", "Cloud Storage"],
      },
      {
        title: "Analytics Dashboard",
        text: "Aggregate business data with the MongoDB pipeline and display charts and reports.",
        tags: ["Aggregation", "Charts", "REST"],
      },
    ],
    careers: [
      {
        role: "MERN Stack Developer",
        work: "Builds complete web applications with the MERN technologies.",
        hirers: "Product companies, startups and software services firms",
      },
      {
        role: "Full Stack JavaScript Developer",
        work: "Owns features from database design to user interface.",
        hirers: "IT companies in Mohali, Chandigarh, Gurugram and Bengaluru",
      },
      {
        role: "React Developer",
        work: "Develops component-based front ends and integrates APIs.",
        hirers: "Digital agencies and SaaS companies",
      },
      {
        role: "Node.js Backend Developer",
        work: "Creates APIs, real-time services and integrations.",
        hirers: "E-commerce, fintech and education technology firms",
      },
      {
        role: "Freelance Web Application Developer",
        work: "Delivers custom web platforms to clients directly.",
        hirers: "Businesses and international freelance clients",
      },
    ],
    whyNow: [
      "Using one language across the stack helps small teams and startups move quickly, which keeps MERN skills widely requested.",
      "React and Next.js are a standard choice for modern front ends, and employers look for developers who can also build the API behind them.",
    ],
    faqs: [
      {
        q: "What should I know before joining the MERN Stack course?",
        a: "Basic HTML and CSS are recommended. JavaScript fundamentals are revised in the first module, so committed beginners can also keep up with mentor support.",
      },
      {
        q: "Do you teach TypeScript and Next.js?",
        a: "Yes. TypeScript is used in the projects, and Next.js is introduced so you understand server rendering and modern React frameworks.",
      },
      {
        q: "Will I get to work in a team?",
        a: "The capstone is built in a team using Git branches, pull requests and reviews, which mirrors how development companies work.",
      },
      {
        q: "MERN or MEAN, which should I choose?",
        a: "MERN uses React, which has a larger job market and community. MEAN uses Angular, favoured in some enterprise teams. Our counsellors can help you choose based on your goals.",
      },
      {
        q: "Is placement assistance provided?",
        a: "Yes. We support you with portfolio reviews, mock interviews and introductions to hiring partners, though outcomes depend on your skills and effort.",
      },
    ],
    related: ["mean-stack", "web-development", "cloud-computing"],
  },
  {
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
      "The MEAN stack combines MongoDB, Express.js, Angular and Node.js into a structured, TypeScript-first approach to full stack development. Angular’s opinionated architecture is popular in enterprise teams that value consistency and long-term maintainability.",
      "This course covers modern Angular (standalone components and signals), RxJS, Node.js APIs, MongoDB and deployment. It is suited to students and developers preparing for roles at IT services companies and product teams that use Angular.",
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
        title: "JavaScript and TypeScript Foundations",
        summary: "Prepare with the language skills Angular depends on.",
        topics: [
          "ES6+ syntax, modules and asynchronous JavaScript",
          "TypeScript types, interfaces, enums and generics",
          "Classes and decorators",
          "Tooling with Node.js, npm and the Angular CLI",
          "Git and GitHub workflow",
        ],
      },
      {
        title: "Angular Components and Templates",
        summary: "Structure the interface with modern Angular building blocks.",
        topics: [
          "Standalone components, templates and data binding",
          "Built-in control flow (@if, @for) and directives",
          "Component communication with inputs and outputs",
          "Pipes and lifecycle hooks",
          "Styling with Angular Material and Tailwind CSS",
        ],
      },
      {
        title: "Services, Routing and Forms",
        summary: "Organise logic and navigation in larger applications.",
        topics: [
          "Services and dependency injection",
          "Router, lazy-loaded routes, guards and resolvers",
          "Template-driven and reactive forms with validation",
          "Signals and state management basics",
          "HTTP client and interceptors",
        ],
      },
      {
        title: "RxJS and State Management",
        summary: "Handle asynchronous streams and shared state cleanly.",
        topics: [
          "Observables, subjects and operators (map, switchMap, debounceTime)",
          "Error handling and retry strategies",
          "NgRx store, actions, reducers and effects",
          "Async pipe and avoiding memory leaks",
          "Performance with OnPush change detection",
        ],
      },
      {
        title: "Node.js and Express APIs",
        summary: "Create the server side of your application.",
        topics: [
          "Node.js runtime and Express middleware",
          "REST API design and validation",
          "File uploads and email integration",
          "API documentation with Swagger/OpenAPI",
          "Error handling and logging",
        ],
      },
      {
        title: "MongoDB and Mongoose",
        summary: "Model application data in a document database.",
        topics: [
          "MongoDB Atlas, CRUD and query operators",
          "Aggregation pipeline basics",
          "Mongoose schemas, validation and relationships",
          "Indexing and pagination",
          "Data modelling patterns",
        ],
      },
      {
        title: "Security, Testing and Deployment",
        summary: "Make applications safe, tested and live.",
        topics: [
          "JWT authentication and role-based authorization",
          "Password hashing, CORS and rate limiting",
          "Unit testing with Jasmine/Karma or Jest and API tests",
          "End-to-end testing with Playwright",
          "Deploying with Docker, Render or AWS",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Deliver an enterprise-style project and prepare for interviews.",
        topics: [
          "Capstone: full MEAN application with modules, roles and dashboards",
          "Code reviews and Agile sprint practice",
          "Angular, RxJS and Node.js interview questions",
          "TypeScript and data structure problem solving",
          "Mock interviews, portfolio and resume review",
        ],
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
    careers: [
      {
        role: "MEAN Stack Developer",
        work: "Builds full stack applications with Angular and Node.js.",
        hirers: "IT services companies and product teams",
      },
      {
        role: "Angular Developer",
        work: "Develops and maintains large single-page applications.",
        hirers: "Enterprise software firms and consulting companies",
      },
      {
        role: "Node.js Developer",
        work: "Creates REST APIs and backend services.",
        hirers: "Startups and web agencies",
      },
      {
        role: "Full Stack Developer (Junior)",
        work: "Delivers features across interface, API and database.",
        hirers: "Software companies in Mohali, Chandigarh and Delhi NCR",
      },
    ],
    whyNow: [
      "Angular continues to be a common choice for enterprise dashboards and internal tools, and recent releases with signals and standalone components make it easier to learn.",
      "TypeScript across the stack helps teams catch errors early, a habit that employers value in new developers.",
    ],
    faqs: [
      {
        q: "What is the difference between MEAN and MERN?",
        a: "Both use MongoDB, Express and Node.js. MEAN uses Angular, a complete framework with strong conventions, while MERN uses React, a flexible library. Both lead to full stack roles.",
      },
      {
        q: "Is Angular hard to learn?",
        a: "Angular has more concepts than some alternatives, but its structure is consistent. We teach modern Angular step by step, with regular practice tasks.",
      },
      {
        q: "Which Angular version will be used?",
        a: "We use the current stable Angular release, with standalone components, signals and the new template control flow.",
      },
      {
        q: "Do I need to know JavaScript already?",
        a: "Basic JavaScript is recommended. The first module revises JavaScript and introduces TypeScript so you can start Angular with confidence.",
      },
    ],
    related: ["mern-stack", "web-development", "java"],
  },
  {
    slug: "php-full-stack",
    title: "PHP Full Stack Development Course",
    navLabel: "PHP Full Stack",
    group: "programming",
    icon: "Server",
    tagline:
      "Learn PHP 8, MySQL, Laravel and front-end skills to build dynamic websites, CMS solutions and business applications.",
    level: "Intermediate",
    duration: "5–6 Months",
    eligibility: "12th pass or above; basic computer knowledge",
    overview: [
      "PHP powers a large share of websites worldwide, including WordPress, WooCommerce and many custom business systems. This course teaches modern PHP 8, MySQL and the Laravel framework, alongside HTML, CSS and JavaScript for the front end.",
      "You learn to build secure, database-driven applications such as school portals, billing systems and online stores, the kind of software that small and medium businesses across Punjab and North India regularly need. Freelance and agency careers are a natural fit for this skill set.",
    ],
    gains: [
      "Write object-oriented PHP 8 code with modern language features",
      "Design and query MySQL databases with PDO and Eloquent ORM",
      "Build MVC applications and REST APIs with Laravel",
      "Create responsive front ends with HTML5, CSS3, Bootstrap or Tailwind CSS and JavaScript",
      "Course completion certification, live projects and placement assistance",
    ],
    syllabus: [
      {
        title: "Front-End Foundations",
        summary: "Build the pages that users see.",
        topics: [
          "HTML5 structure and forms",
          "CSS3, Flexbox and responsive layouts",
          "Bootstrap and Tailwind CSS basics",
          "JavaScript fundamentals and DOM events",
          "Git and GitHub basics",
        ],
      },
      {
        title: "PHP Fundamentals",
        summary: "Learn the core of server-side scripting with PHP 8.",
        topics: [
          "Setting up XAMPP or Laravel Herd, and Composer",
          "Variables, types, operators and control structures",
          "Functions, arrays and string handling",
          "Form handling with GET and POST",
          "Sessions, cookies and file uploads",
        ],
      },
      {
        title: "Object-Oriented PHP",
        summary: "Structure code the way modern PHP frameworks expect.",
        topics: [
          "Classes, objects, inheritance and interfaces",
          "Traits, namespaces and autoloading",
          "Enums, readonly properties and typed properties in PHP 8",
          "Exception handling",
          "Composer packages and PSR standards",
        ],
      },
      {
        title: "MySQL and Database Design",
        summary: "Store and retrieve data safely and efficiently.",
        topics: [
          "Relational design, keys and normalisation",
          "SQL queries, joins and aggregate functions",
          "PDO and prepared statements",
          "Preventing SQL injection",
          "Indexes, backups and phpMyAdmin",
        ],
      },
      {
        title: "Laravel Framework",
        summary: "Build applications with the leading PHP framework.",
        topics: [
          "MVC architecture, routing and controllers",
          "Blade templates and components",
          "Eloquent ORM, migrations, seeders and factories",
          "Form requests, validation and middleware",
          "Authentication with Laravel Breeze",
        ],
      },
      {
        title: "APIs and Integrations",
        summary: "Connect your application with other systems.",
        topics: [
          "Building REST APIs with API resources",
          "Token authentication with Laravel Sanctum",
          "Consuming third-party APIs",
          "Payment gateway integration in sandbox mode",
          "Sending emails, queues and scheduled tasks",
        ],
      },
      {
        title: "Testing, Security and Deployment",
        summary: "Make your application dependable and publish it.",
        topics: [
          "Automated testing with PHPUnit and Pest",
          "Security: CSRF, XSS and password hashing",
          "Deploying to shared hosting and a VPS with Nginx",
          "Environment configuration and caching",
          "Introduction to WordPress plugin and theme development",
        ],
      },
      {
        title: "Capstone Project and Interview Preparation",
        summary: "Build a complete web product and prepare for PHP interviews.",
        topics: [
          "Capstone: full Laravel application with admin panel and API",
          "Code review and refactoring with a mentor",
          "PHP, MySQL and Laravel interview questions",
          "Freelance proposal and client communication basics",
          "Mock interviews, portfolio and resume review",
        ],
      },
    ],
    tools: [
      "PHP 8",
      "Laravel",
      "MySQL",
      "Composer",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "XAMPP / Laravel Herd",
      "PHPUnit / Pest",
      "Postman",
      "Git & GitHub",
    ],
    projects: [
      {
        title: "School or Institute Management Portal",
        text: "Student records, attendance, result publishing and role-based logins for teachers and administrators.",
        tags: ["Laravel", "MySQL", "RBAC"],
      },
      {
        title: "Online Store with Admin Panel",
        text: "Products, cart, orders and sandbox payment integration for a small retailer.",
        tags: ["PHP", "Eloquent", "Payments"],
      },
      {
        title: "Blog and News CMS",
        text: "Content editor, categories, image uploads and an SEO-friendly public site.",
        tags: ["Blade", "Uploads", "SEO"],
      },
      {
        title: "Inventory and Invoice System",
        text: "Track stock and generate PDF invoices for a wholesale business, similar to those used by Jalandhar sports-goods exporters.",
        tags: ["MySQL", "PDF", "Reports"],
      },
      {
        title: "Job Portal REST API",
        text: "Secure API with token authentication, search filters and automated tests.",
        tags: ["Sanctum", "REST", "Pest"],
      },
      {
        title: "Appointment Booking Website",
        text: "Clinic or salon booking with slot management, email reminders and an admin calendar.",
        tags: ["Queues", "Mail", "Scheduling"],
      },
    ],
    careers: [
      {
        role: "PHP Developer",
        work: "Builds and maintains PHP web applications and websites.",
        hirers: "Web agencies, IT services firms and software companies",
      },
      {
        role: "Laravel Developer",
        work: "Develops MVC applications and APIs with Laravel.",
        hirers: "Product companies and startups in Mohali, Chandigarh and Delhi NCR",
      },
      {
        role: "WordPress and WooCommerce Developer",
        work: "Customises themes, plugins and online stores.",
        hirers: "Marketing agencies and e-commerce businesses",
      },
      {
        role: "Full Stack Web Developer (Junior)",
        work: "Handles both front-end pages and server-side logic.",
        hirers: "Software firms and freelance clients",
      },
      {
        role: "Freelance Web Developer",
        work: "Delivers websites and custom business systems to clients.",
        hirers: "Local businesses and international freelance clients",
      },
    ],
    whyNow: [
      "PHP still runs a large portion of the web, and modern PHP 8 with Laravel is fast, typed and well suited to maintainable applications.",
      "Demand from agencies, e-commerce sites and small businesses for PHP and WordPress developers remains steady, including for freelancers.",
    ],
    faqs: [
      {
        q: "Is PHP still worth learning in 2026?",
        a: "Yes. PHP powers WordPress, WooCommerce and countless business systems, and Laravel is widely used for new projects. It is a practical route to employment or freelancing.",
      },
      {
        q: "Will I learn Laravel or only core PHP?",
        a: "Both. You first master core PHP and MySQL, then build applications with Laravel, which is what most PHP employers expect.",
      },
      {
        q: "Does this course include WordPress?",
        a: "The course introduces WordPress theme and plugin basics. For deeper WordPress work, see our dedicated WordPress course.",
      },
      {
        q: "Can I do this course alongside college?",
        a: "Yes. Weekday and weekend batches are available in classroom and live online formats, so you can plan around your college schedule.",
      },
    ],
    related: ["wordpress", "web-development", "mern-stack"],
  },
  {
    slug: "it-foundation",
    title: "IT Foundation Programme",
    navLabel: "IT Foundation Programme",
    group: "programming",
    icon: "GraduationCap",
    tagline:
      "A beginner-friendly programme covering computer basics, office tools, programming logic, web basics and career skills to start your IT journey.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "10+2 pass or appearing; no technical background needed",
    overview: [
      "The IT Foundation Programme is designed for students who are new to computers or unsure which IT career path to choose. It builds confident, practical skills in computer operation, office productivity, internet safety, programming logic and web basics.",
      "By the end, you will have tried coding, web design, databases and digital tools, which helps you select a specialised course with clarity. It is also useful for school leavers, homemakers returning to work and professionals who want a solid digital base.",
    ],
    gains: [
      "Use computers, Windows, cloud storage and the internet safely and confidently",
      "Create professional documents, spreadsheets and presentations with Microsoft Office or Google Workspace",
      "Understand programming logic and write your first programs in Python",
      "Build a simple web page and understand how databases work",
      "Course completion certification and guidance towards the right advanced course",
    ],
    syllabus: [
      {
        title: "Computer Fundamentals",
        summary: "Learn how computers work and use them with ease.",
        topics: [
          "Hardware, software, operating systems and file management",
          "Windows settings, shortcuts and troubleshooting basics",
          "Typing skills and productivity habits",
          "Installing and managing applications",
          "Introduction to Linux and mobile operating systems",
        ],
      },
      {
        title: "Internet, Email and Cyber Safety",
        summary: "Work online with confidence and protect yourself.",
        topics: [
          "Browsers, search techniques and evaluating sources",
          "Email, video meetings and cloud storage",
          "Passwords, two-factor authentication and phishing awareness",
          "Safe use of UPI and online payments",
          "Digital etiquette and privacy settings",
        ],
      },
      {
        title: "Office Productivity Tools",
        summary: "Prepare documents, data and presentations professionally.",
        topics: [
          "Word or Google Docs: formatting, tables and mail merge",
          "Excel or Google Sheets: formulas, charts and sorting",
          "Pivot tables, VLOOKUP and XLOOKUP basics",
          "PowerPoint or Google Slides design principles",
          "Collaborating and sharing files online",
        ],
      },
      {
        title: "Programming Logic with Python",
        summary: "Understand how software thinks and write simple programs.",
        topics: [
          "Algorithms, flowcharts and problem solving",
          "Variables, data types and operators",
          "Conditions and loops",
          "Lists and functions",
          "Building small utility programs",
        ],
      },
      {
        title: "Web Basics",
        summary: "Create and publish a simple web page.",
        topics: [
          "How websites, domains and hosting work",
          "HTML structure, links, images and forms",
          "CSS basics for colour, fonts and layout",
          "Using a website builder and Canva for design",
          "Publishing a page online",
        ],
      },
      {
        title: "Databases and Data Literacy",
        summary: "Learn how information is stored and turned into insight.",
        topics: [
          "Tables, records and relationships",
          "Basic SQL queries",
          "Cleaning and organising data in spreadsheets",
          "Introduction to charts and dashboards",
          "How AI tools and assistants can help with everyday tasks",
        ],
      },
      {
        title: "Career Exploration and Professional Skills",
        summary: "Discover which IT field suits you and prepare for it.",
        topics: [
          "Overview of IT careers: development, data, design, marketing and security",
          "Demo sessions with mentors from each track",
          "Communication skills and email writing",
          "Creating a resume and LinkedIn profile",
          "Planning your learning path and next course",
        ],
      },
      {
        title: "Capstone Mini Project and Assessment",
        summary: "Bring your new skills together in one project and review your progress.",
        topics: [
          "Planning a mini project such as a personal or small-business website",
          "Data entry and reporting in a spreadsheet with charts",
          "Presenting your project to the batch",
          "Skills assessment and mentor review session",
          "Mock interview basics and course selection counselling",
        ],
      },
    ],
    tools: [
      "Windows",
      "Microsoft Office",
      "Google Workspace",
      "Python",
      "HTML & CSS",
      "VS Code",
      "SQL basics",
      "Canva",
      "Chrome",
      "AI assistants",
    ],
    projects: [
      {
        title: "Personal Digital Resume Website",
        text: "A simple web page with your profile, skills and contact details, published online.",
        tags: ["HTML", "CSS", "Publishing"],
      },
      {
        title: "Monthly Budget Tracker",
        text: "A spreadsheet with formulas, charts and a summary page for household or shop accounts.",
        tags: ["Excel", "Formulas", "Charts"],
      },
      {
        title: "Business Presentation",
        text: "A professional slide deck introducing a local business idea with clean design.",
        tags: ["PowerPoint", "Design", "Communication"],
      },
      {
        title: "Number and Text Utility Programs",
        text: "A set of small Python programs such as a calculator, unit converter and quiz game.",
        tags: ["Python", "Logic", "Loops"],
      },
      {
        title: "Student or Customer Contact Database",
        text: "Design a small table structure and run basic queries to find and sort records.",
        tags: ["SQL", "Tables", "Queries"],
      },
      {
        title: "Cyber Safety Awareness Poster and Guide",
        text: "Create a Canva poster and short guide on phishing and safe online payments for family or colleagues.",
        tags: ["Canva", "Security", "Research"],
      },
    ],
    careers: [
      {
        role: "Computer Operator / Data Entry Executive",
        work: "Handles data, documents and records for offices.",
        hirers: "Offices, schools, hospitals and small businesses",
      },
      {
        role: "Office Administrator (Digital)",
        work: "Manages spreadsheets, email, scheduling and reports.",
        hirers: "Companies, exporters and service firms",
      },
      {
        role: "IT Support Trainee",
        work: "Helps users with computers, software and basic troubleshooting.",
        hirers: "IT services companies and BPO centres",
      },
      {
        role: "Junior Programmer (after further training)",
        work: "Progresses to coding roles after a specialised course.",
        hirers: "Software companies and startups",
      },
    ],
    whyNow: [
      "Digital skills are now expected in almost every job, from accounts to retail, so a strong foundation helps whatever career you choose.",
      "A short foundation programme lets you try coding, design and data before committing to a longer specialised course.",
    ],
    faqs: [
      {
        q: "I have never used a computer much. Can I join?",
        a: "Yes. The programme is designed for complete beginners and starts with basic computer operation at a comfortable pace.",
      },
      {
        q: "Which course should I take after the IT Foundation Programme?",
        a: "It depends on your interests. Options include Python, Web Designing, Data Analytics or Digital Marketing. A mentor counselling session at the end helps you decide.",
      },
      {
        q: "Will I learn AI tools in this programme?",
        a: "You learn to use AI assistants safely and effectively for writing, research and everyday tasks. Building AI systems is covered in our dedicated AI courses.",
      },
      {
        q: "Is the programme suitable for school students?",
        a: "Yes, students who have completed 10+2 or are appearing for it can join. It gives them a head start before choosing a degree or specialisation.",
      },
    ],
    related: ["python", "web-designing", "digital-marketing"],
  },
];
