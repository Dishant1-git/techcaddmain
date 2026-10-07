import type { CoursePage } from "./types";
import { meanStack } from "./mean-stack";
import { mernStack } from "./mern-stack";
import { phpFullStack } from "./php-full-stack";
import { webDevelopment } from "./web-development";
import { kotlin } from "./kotlin";
import { webDesigning } from "./web-designing";
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
  kotlin,
  webDesigning,
  webDevelopment,
  mernStack,
  meanStack,
  phpFullStack,
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
