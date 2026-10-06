import type { CoursePage } from "./types";

/* /courses/devops — long-form landing copy supplied by the client (used as given, section by section).
   Navigation is unchanged at the client's request (`navLabel`, the Courses ▾ link and the slug are as before).
   Points to CONFIRM with the client:
   - The 12 supplied reviews are NOT published: the supplied text itself says "No verified student review data was
     provided… The following are sample testimonial drafts/templates, not claims of actual student experiences" (they are
     signed "Sample Review"). The page keeps the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed". `level` was "Intermediate"; the supplied copy
     says beginners can join, so it is now "Beginner" — confirm.
   - Editor notes left out: "The specific platform should be confirmed according to the actual course delivery before
     publishing a fixed tool list." and "The exact tools covered should be aligned with Techcadd's actual syllabus before
     the final webpage is published." Tools are worded "may include" — confirm the tool list and cloud platform taught.
   - FAQs 6, 7 and 23 (duration, fees, certification) still say to contact/confirm with Techcadd — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table were added here to fit the layout. The CTA's
     "Who Can Enquire?" list has no slot in the banner and is not shown. Module 10 describes a project workflow, but no
     separate project list was supplied, so the Projects section is hidden.
   The supplied Stage 5 (SEO + GEO/AEO/AIO strategy report) and the enquiry-form field list are not page content. */

const roles = [
  "Junior DevOps Engineer",
  "DevOps Associate",
  "Cloud/DevOps Associate",
  "Build and Release Engineer",
  "Automation Engineer",
  "Junior Infrastructure Engineer",
  "Site Reliability-oriented roles",
  "Cloud Support or Operations roles",
];

export const devops: CoursePage = {
  slug: "devops",
  title: "DevOps Engineering Course",
  navLabel: "DevOps",
  group: "cyber-cloud",
  icon: "Workflow",
  tagline:
    "Understand the practices, tools, and workflows used to bring software development and IT operations closer together — how applications are developed, tested, deployed, monitored, and maintained through more consistent and automated processes.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, IT learners, job switchers, career changers, and beginners with an interest in technology",
  overview: [
    "A DevOps Engineering Course introduces learners to the practices, tools, and workflows used to bring software development and IT operations closer together. The focus is on understanding how applications can be developed, tested, deployed, monitored, and maintained through more consistent and automated processes.",
    "The course can be useful for graduates, postgraduates, working professionals, IT learners, career switchers, and beginners who want to build practical knowledge around software delivery, automation, cloud environments, and development operations. Learners can expect to study areas such as Linux, version control, continuous integration and delivery, containerization, infrastructure concepts, cloud platforms, monitoring, and deployment workflows.",
    "For learners in Punjab, DevOps skills can be relevant to the region's growing IT, startup, and technology-oriented work environment. Students who prefer classroom learning can explore the Jalandhar centre, while learners outside the local area can use online learning options.",
    "The emphasis should be on understanding how different DevOps tools work together rather than simply memorizing commands. This helps learners develop a practical foundation for working with modern software development and deployment environments.",
  ],
  // "Learning Outcomes" from the supplied copy — shown in the card beside the overview.
  gains: [
    "Understand core DevOps principles and workflows.",
    "Work with Linux command-line environments.",
    "Use Git for source-code version control.",
    "Understand CI/CD pipeline concepts.",
    "Package applications using containers.",
    "Understand Docker-based workflows.",
    "Understand cloud and infrastructure concepts.",
    "Explore infrastructure automation.",
    "Understand container orchestration concepts.",
    "Approach application monitoring and troubleshooting systematically.",
    "Connect development, deployment, infrastructure, and operations into a single workflow.",
  ],
  syllabus: [
    {
      title: "DevOps Fundamentals",
      summary: "The course begins with the basic principles of DevOps and explains how development and operations work together. The objective is to give learners a clear understanding of why DevOps exists and what problems it is designed to address.",
      topics: ["What DevOps means", "Development and operations workflows", "Software development lifecycle concepts", "Continuous integration and continuous delivery", "Automation principles", "Collaboration between development and operations teams", "Benefits and challenges of DevOps adoption"],
    },
    {
      title: "Linux and Command-Line Fundamentals",
      summary: "Linux is widely used in software infrastructure and cloud environments, making command-line knowledge valuable for DevOps learners. Learners should become more comfortable navigating and managing a Linux environment from the command line.",
      topics: ["Linux filesystem", "Files and directories", "Users and permissions", "Processes", "Package management", "Environment variables", "Shell commands", "Basic shell scripting", "System administration concepts"],
    },
    {
      title: "Git and Version Control",
      summary: "Version control is an essential part of modern software development workflows. Git allows teams to maintain and collaborate on source code while providing a structured history of changes.",
      topics: ["Git fundamentals", "Repositories", "Commits", "Branches", "Merging", "Remote repositories", "Pull and push workflows", "Collaboration practices", "Basic version-control troubleshooting"],
    },
    {
      title: "Continuous Integration and Continuous Delivery",
      summary: "CI/CD introduces automation into the software delivery process. Learners can understand how automated pipelines can be used for the activities below. Tools such as Jenkins or comparable CI/CD platforms may be introduced depending on the final course implementation.",
      topics: ["Building applications", "Running tests", "Packaging software", "Managing deployment workflows", "Automating repetitive delivery tasks", "Identifying problems earlier in the development lifecycle"],
      outcome: "The important learning outcome is understanding how a software change can move through a controlled and repeatable delivery pipeline.",
    },
    {
      title: "Docker and Containerization",
      summary: "Containers provide a consistent environment for packaging and running applications. Docker can help learners understand how applications and their dependencies can be packaged into portable environments.",
      topics: ["Container concepts", "Docker images", "Docker containers", "Dockerfiles", "Container registries", "Basic networking", "Volumes", "Application packaging", "Container-based deployment concepts"],
    },
    {
      title: "Cloud and DevOps Environments",
      summary: "DevOps and cloud computing are closely connected in many modern technology environments. Depending on the final training plan, a cloud platform such as AWS, Microsoft Azure, or Google Cloud may be used for practical demonstrations.",
      topics: ["Cloud infrastructure concepts", "Compute resources", "Storage", "Networking", "Application deployment", "Cloud-based environments", "Infrastructure management", "Basic cloud security considerations"],
    },
    {
      title: "Infrastructure as Code and Automation",
      summary: "Infrastructure as Code introduces the idea of managing infrastructure through configuration files and repeatable processes rather than relying entirely on manual setup. Tools such as Terraform can be relevant in this area. The goal is to understand how infrastructure-related tasks can become more repeatable and manageable.",
      topics: ["Infrastructure configuration", "Declarative infrastructure", "Environment consistency", "Automation workflows", "Configuration management", "Infrastructure provisioning"],
    },
    {
      title: "Kubernetes and Container Orchestration",
      summary: "As learners progress beyond individual containers, they can explore container orchestration concepts. Kubernetes is particularly relevant when learners want to understand how containerized applications can be managed at a larger scale.",
      topics: ["Kubernetes fundamentals", "Pods", "Deployments", "Services", "Configuration", "Scaling concepts", "Container orchestration", "Basic cluster concepts"],
    },
    {
      title: "Monitoring and Logging",
      summary: "Deploying an application is only part of the DevOps process. Teams also need ways to observe application and infrastructure behaviour. Tools may include monitoring or observability platforms appropriate to the final curriculum.",
      topics: ["Monitoring concepts", "Logs", "Metrics", "Application health", "Infrastructure monitoring", "Alerts", "Troubleshooting workflows"],
      outcome: "The learning outcome is to understand how technical teams identify problems and investigate system behaviour after deployment.",
    },
    {
      title: "DevOps Projects and Deployment Workflows",
      summary: "A practical project can bring the individual modules together. A project-based workflow could involve the steps below. This type of project helps learners see DevOps as an interconnected process rather than a collection of separate technologies.",
      topics: [
        "Managing application source code with Git.",
        "Creating a build process.",
        "Running automated testing.",
        "Packaging the application.",
        "Creating a container.",
        "Building a CI/CD pipeline.",
        "Deploying the application into an appropriate environment.",
        "Monitoring the deployed application.",
        "Investigating deployment or runtime issues.",
        "Documenting the complete workflow.",
      ],
    },
  ],
  tools: ["Linux", "Git", "GitHub", "Jenkins", "Docker", "Kubernetes", "Terraform", "AWS", "Microsoft Azure", "Google Cloud", "CI/CD platforms", "Monitoring and logging tools", "Shell scripting"],
  // No separate project list was supplied (module 10 describes the project workflow), so the Projects section is hidden.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a DevOps Engineering course?", a: "A DevOps Engineering course teaches the practices, tools, and workflows used to connect software development with IT operations, automation, testing, deployment, infrastructure, and monitoring." },
    { q: "Who is eligible for a DevOps Engineering course?", a: "Graduates, postgraduates, working professionals, IT learners, job switchers, career changers, and beginners with an interest in technology can explore DevOps Engineering. A basic understanding of computers and software can make the learning process easier." },
    { q: "Is DevOps Engineering suitable for beginners?", a: "Yes, DevOps Engineering can be suitable for beginners when the course starts with foundational topics such as Linux, command-line concepts, networking, and version control before moving into automation, containers, CI/CD, and cloud technologies." },
    { q: "What is included in a DevOps Engineering syllabus?", a: "A DevOps Engineering syllabus can include DevOps fundamentals, Linux, Git, CI/CD, Docker, cloud concepts, infrastructure automation, Kubernetes, monitoring, logging, deployment workflows, and practical projects. The exact syllabus should be confirmed with Techcadd before enrolment." },
    { q: "Which tools are commonly covered in DevOps training?", a: "DevOps training can involve tools and technologies such as Linux, Git, GitHub, Jenkins, Docker, Kubernetes, Terraform, cloud platforms, CI/CD systems, and monitoring technologies. The exact toolset depends on the final course implementation." },
    { q: "How long does a DevOps Engineering course take?", a: "The exact duration depends on the course structure, training schedule, and depth of coverage. Techcadd should be contacted for the current DevOps Engineering course duration rather than relying on a generic duration." },
    { q: "What are the fees for a DevOps Engineering course?", a: "DevOps course fees depend on the current course structure, duration, delivery mode, and curriculum. Prospective learners should contact Techcadd for the latest fee information." },
    { q: "Can I learn DevOps Engineering online?", a: "Yes, learners can study DevOps Engineering online. Online learning can be particularly useful for students and professionals who live outside Jalandhar or need flexibility around their existing education or work schedule." },
    { q: "Is offline DevOps training available?", a: "Yes, Techcadd offers online and offline learning, with its physical centre in Jalandhar, Punjab. Learners from other locations can use the online option rather than assuming a physical centre exists in their city." },
    { q: "What jobs can I pursue after learning DevOps?", a: "DevOps skills can support career paths such as Junior DevOps Engineer, DevOps Associate, Cloud/DevOps Associate, Build and Release Engineer, Automation Engineer, and junior infrastructure or operations roles. Actual job suitability depends on previous experience and additional technical skills." },
    { q: "What is the salary of a DevOps Engineer in India?", a: "DevOps salaries in India vary according to experience, location, employer, technical skills, and specialization. Salary figures should therefore be treated as approximate rather than guaranteed, and learners should compare current market information when evaluating career opportunities." },
    { q: "Can DevOps skills be used for freelancing?", a: "Yes, DevOps skills can support freelance work involving deployment, CI/CD setup, containerization, cloud configuration, automation, and technical maintenance. Freelancers should only perform infrastructure or deployment work with proper client authorization." },
    { q: "Can someone from a non-IT background learn DevOps?", a: "Yes, someone from a non-IT background can begin learning DevOps, although foundational knowledge of computers, operating systems, networking, and basic programming can make the subject easier to understand." },
    { q: "Can students from Punjab learn DevOps Engineering online?", a: "Yes, students from Punjab can learn DevOps Engineering online, while learners near Jalandhar can also explore offline learning at the Techcadd centre." },
    { q: "Can students from Haryana join DevOps Engineering training?", a: "Yes, students and working professionals from Haryana can join through online learning. DevOps can be particularly relevant for learners interested in IT, software, automation, cloud, and technology-driven industries." },
    { q: "Can students from Himachal Pradesh learn DevOps online?", a: "Yes, students from Himachal Pradesh can study DevOps online without needing to relocate. This can be useful for learners interested in remote technology work, software, cloud platforms, and automation." },
    { q: "Is DevOps Engineering suitable for students from Delhi NCR?", a: "Yes, DevOps Engineering can be relevant for learners from Delhi NCR who want to develop skills in software delivery, automation, cloud infrastructure, containers, and application deployment." },
    { q: "Can students from Rajasthan learn DevOps Engineering online?", a: "Yes, students from Rajasthan can learn DevOps Engineering online. Learners interested in software, cloud technologies, automation, or technology-focused careers can use online training to build relevant technical foundations." },
    { q: "Is DevOps Engineering suitable for students from Uttar Pradesh?", a: "Yes, DevOps Engineering can be suitable for students and professionals from Uttar Pradesh who want to develop skills related to software development workflows, automation, cloud environments, deployment, and infrastructure." },
    { q: "Does DevOps require programming?", a: "DevOps does not always require advanced programming, but basic programming and scripting knowledge can be useful. DevOps learners commonly benefit from understanding scripts, automation logic, application workflows, and configuration." },
    { q: "Is DevOps a good career option in India?", a: "DevOps can be a strong technology career direction for learners interested in automation, cloud infrastructure, software delivery, and operations. Career outcomes depend on practical skills, experience, projects, specialization, and continued learning." },
    { q: "Can DevOps help a software developer?", a: "Yes, DevOps can help software developers understand source control, automated testing, CI/CD, containers, deployment, cloud environments, and application operations." },
    { q: "Is certification necessary for a DevOps career?", a: "A certification is not the only factor in a DevOps career. Practical skills, projects, technical understanding, problem-solving ability, and relevant experience are also important. Any specific certification offered by Techcadd should be confirmed before publication." },
    { q: "Can DevOps knowledge be useful for cloud careers?", a: "Yes, DevOps knowledge can complement cloud careers because modern cloud environments often involve automation, CI/CD, containers, infrastructure management, deployment, and monitoring." },
  ],
  related: ["docker-kubernetes", "cloud-computing", "linux"],
  copy: {
    heading: { title: "DevOps Engineering Course", highlight: "Online + Offline", meta: "DevOps Engineering Course: Practical DevOps, Automation & Cloud Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "DevOps Engineering Course", gainsTitle: "Learning Outcomes" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "A DevOps Engineering learning path should focus on understanding the complete software delivery lifecycle rather than treating DevOps as a collection of unrelated tools. Learners should gradually move from foundational system concepts toward source-code management, automation, continuous integration, containers, cloud environments, infrastructure management, deployment, and monitoring.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "DevOps Engineering can be useful for people from different technical and career backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, IT, software, engineering, or related disciplines can use DevOps training to build skills that connect software development with deployment and operations. For recent graduates, learning version control, Linux, automation, containers, CI/CD, and cloud concepts can provide a more practical understanding of how modern applications move from development to production. Graduates from other technical disciplines can also explore DevOps if they have an interest in software, infrastructure, automation, or cloud technologies." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduate learners who already have some programming, networking, database, or systems knowledge may use DevOps Engineering to connect their academic knowledge with practical software delivery workflows. The course can also be relevant for learners pursuing technology-focused career paths who want to understand automation and infrastructure alongside development." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals can consider DevOps training when they want to expand their existing technical responsibilities. Developers may want to understand deployment and automation, while system or infrastructure professionals may want to learn more about development workflows and continuous delivery. For working professionals, online learning can make it easier to study without completely changing an existing work schedule." },
        { icon: "Shuffle", title: "Job Switchers", text: "Professionals considering a move into DevOps can use the course to systematically build knowledge instead of trying to learn individual tools without understanding how they connect. A structured learning path can cover version control, Linux, CI/CD, containers, cloud concepts, infrastructure automation, monitoring, and deployment practices in a connected way." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers working with websites, applications, software projects, or cloud-based services may benefit from understanding deployment automation and development workflows. DevOps knowledge can help freelancers communicate more effectively with development teams and understand tasks involving deployment pipelines, application environments, containers, or basic infrastructure management. Freelancing work should always be undertaken according to the client's authorization and technical requirements." },
        { icon: "Building2", title: "Business Owners", text: "Business owners who operate software products, websites, digital platforms, or technology-driven services can benefit from understanding the basic principles behind reliable software delivery. A working knowledge of DevOps can help business owners communicate with developers and technical teams about deployment processes, cloud environments, automation, monitoring, and application maintenance. They do not need to become full-time DevOps Engineers; the value can come from understanding how technical delivery processes affect their digital operations." },
        { icon: "Compass", title: "Career Changers", text: "People moving from another technical or technology-adjacent field can explore DevOps as a pathway into modern software infrastructure and automation. A career changer may already have transferable skills such as problem solving, systems thinking, scripting, troubleshooting, project coordination, or technical support. DevOps training can provide a structured way to develop these skills around software delivery and infrastructure workflows." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can study DevOps when the course is structured progressively. Instead of starting immediately with complex deployment environments, learners can first understand operating systems, networking basics, command-line concepts, version control, and software development workflows. From there, they can progress toward containers, CI/CD, cloud concepts, infrastructure automation, and monitoring. The important point for beginners is to understand why each DevOps tool is used and how the tools work together." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass students with a strong interest in computers and technology can explore DevOps, although the subject may be easier after developing some foundational knowledge of operating systems, networking, programming, and software concepts. Students at this stage should approach DevOps as a longer-term technical skill path rather than expecting to master the complete field immediately." },
      ],
      need: "Although a basic understanding of computers and software concepts can make learning easier, learners do not necessarily need to begin as experienced DevOps professionals.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can use DevOps training to build skills relevant to IT services, startups, software teams, and technology-enabled businesses. Students from Jalandhar, Ludhiana, Amritsar, Mohali, or Patiala who prefer flexibility can choose online learning, while local learners can explore classroom options in Jalandhar." },
        { title: "Haryana", text: "Haryana has strong technology, MNC, automobile, e-commerce, logistics, and IT activity. For learners from Gurugram and other parts of the state, DevOps knowledge can be useful for understanding how software applications and digital systems are developed, deployed, and maintained in technology-driven organizations." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online DevOps training can provide access to a technical learning path without requiring relocation. Students and professionals in areas such as Shimla, Dharamshala, and Solan can build skills that may support remote technology work, software-related roles, or freelance projects." },
        { title: "Chandigarh", text: "Learners from Chandigarh and the wider Tricity can explore DevOps as an extension of the region's IT, BPO, education, government, and startup environment. DevOps can be particularly relevant for learners who want to move from general IT knowledge toward software delivery, automation, and cloud-oriented technical skills." },
        { title: "Delhi NCR", text: "Delhi NCR provides a broad technology ecosystem covering IT, fintech, e-commerce, media, agencies, and software businesses. Learners from Delhi, Noida, and Ghaziabad can use DevOps training to develop skills around automated deployment, cloud environments, CI/CD, and application operations." },
        { title: "Jammu & Kashmir", text: "For learners from Jammu and Srinagar, online learning can remove the need to relocate for technical training. DevOps can provide an additional technology skill path for graduates and professionals interested in software, remote work, cloud technologies, or digital businesses." },
        { title: "Uttarakhand", text: "Learners from Uttarakhand can study DevOps online while continuing their education or professional responsibilities. The state's education, tourism, pharma, and business environments also create opportunities for technology professionals who can support digital systems and software-based operations." },
        { title: "Rajasthan", text: "Students and professionals from Jaipur and other parts of Rajasthan can explore DevOps to strengthen their technology skills alongside the state's growing digital, tourism, retail, textile, and business ecosystem. Online learning can be especially useful for learners who want access to specialized technical education without changing location." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can approach DevOps from several directions, including IT, electronics, retail, software services, and government-sector technology needs. Students from Lucknow, Meerut, and other cities can use online training to develop practical knowledge in automation, cloud environments, application deployment, and infrastructure workflows." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Understand Modern Software Delivery", text: "Software development is no longer limited to writing application code. Modern teams also need repeatable ways to test, deploy, monitor, update, and maintain applications. DevOps Engineering helps learners understand the processes connecting these activities. This broader perspective can be valuable for anyone who wants to understand how software moves from a developer's workstation into a usable environment." },
        { title: "Build Practical Automation Skills", text: "Automation is an important part of DevOps. Instead of repeatedly performing deployment and infrastructure tasks manually, teams can use scripts, pipelines, configuration tools, and automated workflows. Learning these concepts helps learners understand how repetitive technical tasks can be made more consistent and easier to manage." },
        { title: "Develop Skills Around Industry Tools", text: "DevOps is strongly connected with practical tools and platforms. Depending on the learning path, learners may work with technologies such as Git, Linux, Docker, Jenkins or other CI/CD systems, cloud platforms, infrastructure-as-code tools, and monitoring solutions. The value is not simply knowing the names of these tools. Learners should understand what problem each tool solves and how different tools fit into a delivery workflow." },
        { title: "Explore DevOps Career Roles", text: "DevOps knowledge can support career exploration across several technology roles. Depending on prior skills and experience, learners may work toward roles such as DevOps Engineer, Cloud/DevOps Associate, Build and Release Engineer, Site Reliability-oriented roles, Automation Engineer, or junior infrastructure and deployment positions. The exact role depends on the learner's technical background and the additional skills they develop." },
        { title: "Strengthen Cloud and Infrastructure Knowledge", text: "Cloud computing and DevOps frequently work together. Understanding deployment environments, containers, infrastructure, automation, and monitoring can help learners develop a broader view of modern application infrastructure. This is useful for learners who want to move beyond basic software development or traditional system administration toward more automated technology environments." },
        { title: "Create Project-Based Learning Value", text: "DevOps concepts become easier to understand when learners can connect them with practical projects. A project might involve managing source code, creating a build process, packaging an application, setting up a deployment workflow, or monitoring an application environment. Such work can help learners demonstrate what they understand rather than relying only on theoretical course completion." },
        { title: "Support Career Switching", text: "Professionals from software development, system administration, technical support, networking, or related IT backgrounds may find DevOps a useful direction for expanding their existing knowledge. Instead of starting completely from zero, they can connect previous experience with new skills in automation, CI/CD, containers, cloud platforms, and infrastructure management." },
        { title: "Remain Relevant as Technology Evolves", text: "Software teams continue to adopt automation, cloud platforms, containers, infrastructure-as-code, and continuous delivery practices. Learning the principles behind these technologies can therefore be more useful than focusing on one tool alone. A strong DevOps foundation also makes it easier for learners to continue adapting as tools and cloud platforms change." },
        { title: "Develop Problem-Solving Skills", text: "DevOps work involves identifying deployment problems, understanding system dependencies, investigating failures, improving workflows, and reducing repetitive manual work. Learning to approach these situations systematically can strengthen technical troubleshooting and problem-solving abilities." },
        { title: "Suitable for a Structured Beginner Path", text: "DevOps can appear complex because it combines development, systems, networking, automation, cloud, and operations concepts. A structured course can make the subject more manageable by introducing foundational concepts first and gradually moving toward automation and deployment workflows. For beginners, this progression can provide a clearer understanding of how the individual parts of DevOps fit together." },
        { title: "Build a Foundation for Multiple Technology Paths", text: "DevOps does not have to be viewed as an isolated skill. The knowledge can complement software development, cloud computing, system administration, cybersecurity, data engineering, and infrastructure-focused career paths. This makes DevOps Engineering relevant for learners who want to develop a broader technical profile rather than concentrating on only one area of IT." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "North India's first AI-powered and Robotics learning centre provides learners with exposure to a modern technology-focused learning environment. For DevOps Engineering learners, this can complement practical understanding of automation, software systems, cloud technologies, and technology-driven workflows. Learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh can access the program through suitable online learning options, while learners near Jalandhar can explore classroom learning." },
        { title: "Practical DevOps-Oriented Learning", text: "DevOps is easier to understand when learners work with actual development and deployment workflows rather than studying terminology alone. The learning approach should connect concepts such as version control, automation, CI/CD, containers, infrastructure, and monitoring with practical tasks. This helps learners understand how different parts of a DevOps environment work together." },
        { title: "Course-Specific Technical Curriculum", text: "DevOps Engineering combines development practices with IT operations, automation, deployment, and infrastructure concepts. A structured curriculum can take learners from foundational topics such as Linux and Git toward more advanced areas such as containerization, CI/CD, cloud environments, and infrastructure automation. This creates a more logical learning progression than studying individual tools separately." },
        { title: "Learn Online or Offline", text: "Techcadd supports Online + Offline learning, giving learners flexibility based on their location and schedule. Learners in and around Jalandhar can explore the physical centre, while students from other locations can learn online. This makes the course accessible to learners across the target North Indian regions without requiring them to relocate." },
        { title: "Useful for Different Technical Backgrounds", text: "DevOps can complement existing knowledge in software development, system administration, networking, IT support, cloud computing, and related technical areas. Graduates, working professionals, job switchers, and career changers can therefore approach the course from different starting points and build skills relevant to their existing experience." },
        { title: "Focus on Automation and Modern Workflows", text: "Automation is central to DevOps. Learners can develop an understanding of how source-code management, testing, builds, deployment, infrastructure, and monitoring can be connected into repeatable workflows. This practical perspective is useful for understanding how modern technology teams manage software delivery." },
        { title: "Learning Support Beyond Jalandhar", text: "Learners outside Punjab can participate through online learning rather than needing a physical Techcadd centre in their state. This is particularly relevant for students from Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh. The online route allows learners to study DevOps concepts while continuing their existing education or professional responsibilities." },
        { title: "Foundation for Continued Technical Growth", text: "DevOps is connected with several wider areas of technology, including cloud computing, software development, infrastructure, cybersecurity, automation, and site reliability practices. Building a foundation in DevOps can therefore give learners a starting point for continued technical learning as their career interests become clearer." },
      ],
    },
    tools: {
      title: "Key Tools and Technologies",
      groups: [
        { area: "Operating system & scripting", tools: "Linux, Shell scripting" },
        { area: "Version control", tools: "Git, GitHub" },
        { area: "CI/CD", tools: "Jenkins, CI/CD platforms" },
        { area: "Containers & orchestration", tools: "Docker, Kubernetes" },
        { area: "Infrastructure as code", tools: "Terraform" },
        { area: "Cloud platforms", tools: "AWS, Microsoft Azure, Google Cloud" },
        { area: "Observability", tools: "Monitoring and logging tools" },
      ],
      note: "Depending on the final course implementation, relevant DevOps technologies may include those above.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "DevOps skills can support several technology career directions depending on a learner's previous experience and additional specialization.",
      roles,
      rolesNote: "DevOps knowledge can also complement careers in software development, cloud computing, system administration, cybersecurity, and infrastructure engineering.",
      notes: [
        { title: "Relevant Industries", text: "Relevant industries include IT services, software companies, e-commerce, banking and financial technology, telecommunications, healthcare technology, manufacturing, education technology, and digital businesses." },
        { title: "Career Progression", text: "A learner might begin with foundational Linux, Git, automation, and deployment knowledge before progressing toward cloud, infrastructure automation, container orchestration, observability, and more advanced DevOps responsibilities. The actual progression depends on technical ability, prior experience, projects, and continued learning." },
        { title: "Freelancing", text: "DevOps-related freelance work can include deployment support, CI/CD setup, cloud configuration, containerization, automation, and technical maintenance. Such work requires appropriate client authorization and should match the freelancer's actual level of expertise." },
        { title: "Salary Context", text: "DevOps salaries in India vary substantially according to experience, technical specialization, location, organization, and role. Instead of treating one salary figure as universal, learners should consider published salary ranges as approximate and develop skills that can support progression over time." },
      ],
      jobsTitle: "State-Wise Opportunities",
      jobs: [
        { title: "Punjab", text: "Punjab learners can connect DevOps skills with software companies, IT services, startups, and technology-enabled businesses. The combination of automation, cloud knowledge, and deployment skills can complement existing IT backgrounds." },
        { title: "Haryana", text: "Haryana's MNC, IT, e-commerce, automobile, and logistics ecosystem creates relevant contexts for software infrastructure and application delivery skills. Learners can explore DevOps alongside cloud and software engineering knowledge." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology ecosystem covering IT, fintech, e-commerce, media, agencies, and software businesses. DevOps learners can explore roles connected with deployment automation, cloud infrastructure, application operations, and software delivery." },
        { title: "Chandigarh", text: "The Chandigarh and Tricity technology environment includes IT, BPO, education, government, and startups. DevOps can be useful for learners looking to move from general IT knowledge toward automation, cloud, and software delivery." },
        { title: "Uttar Pradesh", text: "Noida and other technology-focused areas of Uttar Pradesh provide opportunities connected with IT, electronics, software, and digital businesses. DevOps training can complement software development and cloud-oriented career paths." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online learning can provide access to specialized DevOps education while remaining in the state. Remote technology work and freelancing can also make cloud, automation, and software deployment skills relevant for suitable professionals." },
      ],
    },
    faqTitle: "Frequently Asked Questions",
    cta: {
      title: "Build Practical DevOps Engineering Skills for Your",
      highlight: "Technology Career",
      text: "DevOps Engineering connects software development, automation, deployment, cloud infrastructure, and IT operations. If you want to build a stronger foundation in modern software delivery workflows, this course can help you understand the tools and practices used across the DevOps lifecycle. Whether you are a graduate, working professional, IT learner, job switcher, or beginner exploring DevOps, you can enquire about the current course structure, learning schedule, fees, and available learning options.",
    },
  },
};
