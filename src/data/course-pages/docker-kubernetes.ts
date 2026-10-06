import type { CoursePage } from "./types";

/* /courses/docker-kubernetes — NEW page with the client's long-form copy (used as given, section by section).
   The client asked for this content on "the Docker & Kubernetes course page under the Courses dropdown" and for NO
   navigation changes — but no such page or dropdown link existed, so this is a new page WITHOUT a Courses ▾ link (it is
   reachable from the /courses hub, the sitemap and related-course cards). The DevOps page is untouched.
   Points to CONFIRM with the client:
   - Should this page get a Courses ▾ Cyber & Cloud link? (DevOps later received its own separate copy, so this content
     was not meant to replace that page.)
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts, not
     verified customer reviews" that "should be replaced with genuine learner feedback before being published". The page
     shows the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed — contact Techcadd".
   - FAQs 9, 21 and 22 (duration, certificate, fees) say "should be confirmed" — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table were added here to fit the layout. The "Overall
     Learning Outcome" paragraphs are shown as the line under the module list. The CTA's "Why Enquire About the Course?"
     bullet list has no slot in the banner and is not shown. No project list was supplied, so Projects is hidden.
   The supplied Stage 5 (SEO + GEO strategy report) and the enquiry-form field list are not page content. */

const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Junior DevOps Engineer",
  "Site Reliability Engineering-oriented roles",
  "Cloud Infrastructure Engineer",
  "Platform Engineering roles",
  "System Administrator with DevOps responsibilities",
  "Software Engineer working with containerized applications",
  "Deployment/Infrastructure-oriented roles",
];

export const dockerKubernetes: CoursePage = {
  slug: "docker-kubernetes",
  title: "Docker & Kubernetes Course",
  navLabel: "Docker & Kubernetes",
  group: "cyber-cloud",
  icon: "Box",
  tagline:
    "Build practical knowledge of containerization, application deployment, and Kubernetes orchestration with a structured learning approach designed for students, professionals, and career-focused learners.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Students, graduates, working professionals and career changers; basic Linux, networking and command-line familiarity is helpful",
  overview: [
    "A Docker & Kubernetes Course helps learners understand modern application deployment through containers and container orchestration. Docker is widely used to package applications and their dependencies into portable containers, while Kubernetes provides a framework for managing containerized applications across environments.",
    "The course is useful for students and professionals interested in DevOps, cloud computing, software deployment, infrastructure, and application operations. Learners can expect to build an understanding of containers, images, Dockerfiles, registries, Kubernetes architecture, pods, deployments, services, configuration, scaling, and basic application management.",
    "The subject is particularly relevant for learners in Punjab, where IT services, startups, technology-enabled businesses, and professionals working with modern software environments can benefit from cloud-native skills. Learners looking for offline training can explore the Jalandhar centre, while students from other locations can use online learning options.",
    "The course can provide a practical foundation for understanding how modern applications are packaged, deployed, managed, and scaled using Docker and Kubernetes.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Containerization Fundamentals",
      summary: "Learners begin by understanding why containers are used and how they differ from traditional application deployment approaches.",
      topics: ["Containers and containerization", "Containers vs virtual machines", "Container lifecycle", "Images and containers", "Basic container architecture", "Container registries", "Common container workflows"],
      outcome: "Learners should understand what containers are, why they are useful, and how applications can be packaged into portable environments.",
    },
    {
      title: "Docker Fundamentals",
      summary: "The next stage focuses on working with Docker itself.",
      topics: ["Docker installation and environment", "Docker CLI", "Running containers", "Starting and stopping containers", "Inspecting containers", "Managing images", "Pulling images from registries", "Removing unused resources", "Container lifecycle management"],
      outcome: "Learners should be able to perform basic Docker operations and understand the relationship between images, containers, and registries.",
    },
    {
      title: "Dockerfiles and Application Images",
      summary: "Docker becomes particularly useful when learners understand how custom application images are created.",
      topics: ["Dockerfiles", "Base images", "Image layers", "Build instructions", "Application dependencies", "Image optimization concepts", "Building custom images", "Running applications from custom images"],
      outcome: "Learners should understand how an application environment can be packaged into a reusable Docker image.",
    },
    {
      title: "Docker Networking and Storage",
      summary: "Containerized applications often need to communicate with other containers or access persistent data.",
      topics: ["Docker networking concepts", "Container-to-container communication", "Ports and port mapping", "Network configuration", "Volumes", "Persistent storage concepts", "Application data management"],
      outcome: "Learners should understand how containers communicate and how application data can be handled beyond the lifetime of an individual container.",
    },
    {
      title: "Docker Compose",
      summary: "For applications involving multiple services, Docker Compose provides a structured way to define and manage containerized environments.",
      topics: ["Compose files", "Multi-container applications", "Service definitions", "Environment configuration", "Networking between services", "Starting and stopping application stacks"],
      outcome: "Learners should be able to understand how multiple related containers can work together as an application environment.",
    },
    {
      title: "Kubernetes Fundamentals",
      summary: "After establishing Docker knowledge, learners can move into Kubernetes.",
      topics: ["Kubernetes architecture", "Cluster concepts", "Control plane and worker nodes", "Pods", "Deployments", "Services", "Namespaces", "Kubernetes objects", "Basic cluster interaction"],
      outcome: "Learners should understand how Kubernetes organizes and manages containerized workloads.",
    },
    {
      title: "Kubernetes Deployments and Services",
      summary: "Learners can then explore how applications are deployed and exposed within Kubernetes.",
      topics: ["Creating deployments", "Managing replicas", "Updating applications", "Services", "Application exposure", "Basic scaling", "Configuration concepts", "Resource management fundamentals"],
      outcome: "Learners should understand the basic workflow of deploying an application to Kubernetes and making it accessible through Kubernetes services.",
    },
    {
      title: "Configuration and Application Management",
      summary: "Real-world applications require configuration information and environment-specific settings.",
      topics: ["ConfigMaps", "Secrets", "Environment variables", "Application configuration", "Resource requests and limits", "Basic workload management"],
      outcome: "Learners should understand how configuration and sensitive information can be separated from application images.",
    },
    {
      title: "Kubernetes Scaling and Operations",
      summary: "Kubernetes becomes particularly valuable when applications need to be managed across changing workloads.",
      topics: ["Scaling concepts", "Replica management", "Rolling updates", "Application availability", "Basic troubleshooting", "Viewing workload status", "Logs and diagnostics"],
      outcome: "Learners should be able to understand the basic operational workflow for monitoring and managing Kubernetes workloads.",
    },
    {
      title: "Containerized Application Deployment",
      summary: "The final learning areas can bring the concepts together through application-oriented scenarios. A practical workflow can involve: Application → Dockerfile → Docker Image → Container → Registry → Kubernetes Deployment → Service. This helps learners see how containerization and orchestration fit together rather than learning Docker and Kubernetes as disconnected technologies.",
      topics: [],
    },
  ],
  tools: ["Docker", "Docker CLI", "Docker Compose", "Kubernetes", "kubectl", "Kubernetes YAML configuration", "Container registries", "Linux command line", "Git", "GitHub", "CI/CD concepts", "Cloud container environments"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Docker & Kubernetes Course?", a: "A Docker & Kubernetes Course teaches learners how to work with containers using Docker and manage containerized applications using Kubernetes. It can cover container creation, images, Dockerfiles, networking, deployments, services, scaling, and basic Kubernetes operations." },
    { q: "Is Docker and Kubernetes suitable for beginners?", a: "Yes, beginners can learn Docker and Kubernetes, although basic knowledge of Linux, networking, command-line usage, or software development can make the learning process easier." },
    { q: "What will I learn in a Docker & Kubernetes Course?", a: "You can learn containerization, Docker commands, Dockerfiles, images, containers, networking, volumes, Docker Compose, Kubernetes architecture, pods, deployments, services, configuration, scaling, and basic workload management." },
    { q: "Which tools are used in Docker and Kubernetes training?", a: "Common tools include Docker, Docker CLI, Docker Compose, Kubernetes, kubectl, Linux command-line tools, container registries, Git, and YAML-based Kubernetes configuration." },
    { q: "Do I need programming knowledge to learn Docker and Kubernetes?", a: "No, advanced programming knowledge is not necessarily required, but familiarity with software applications and basic programming concepts can be helpful. Linux, networking, and command-line knowledge are also useful foundations." },
    { q: "Can I learn Docker and Kubernetes online?", a: "Yes, Docker and Kubernetes can be learned online through structured lessons and practical exercises. Online learning can be suitable for students and working professionals who cannot regularly attend offline classes." },
    { q: "Is offline Docker and Kubernetes training available?", a: "Offline learning can be explored at the Techcadd centre in Jalandhar, Punjab. Learners should confirm the current batch schedule and availability before enrolling." },
    { q: "What is included in the Docker and Kubernetes syllabus?", a: "A typical syllabus can include Docker fundamentals, images and containers, Dockerfiles, networking, storage, Docker Compose, Kubernetes architecture, pods, deployments, services, configuration, scaling, and basic troubleshooting." },
    { q: "How long does it take to learn Docker and Kubernetes?", a: "The learning duration depends on the course structure, learner's existing technical knowledge, and the depth of practical training. The current course duration should be confirmed before enrollment." },
    { q: "What are the career options after learning Docker and Kubernetes?", a: "Docker and Kubernetes can support career paths related to DevOps, cloud infrastructure, platform engineering, system administration, software deployment, and cloud-oriented software development." },
    { q: "Is Docker and Kubernetes useful for a DevOps career?", a: "Yes, Docker and Kubernetes are relevant technologies for DevOps because they help learners understand containerization, application deployment, orchestration, scalability, and infrastructure workflows." },
    { q: "Can I use Docker and Kubernetes for freelancing?", a: "Yes, Docker and Kubernetes skills can be useful in freelance projects involving application deployment, development environments, APIs, websites, microservices, and cloud infrastructure. Additional skills such as Linux, Git, programming, and cloud platforms can be important for freelance work." },
    { q: "What is the difference between Docker and Kubernetes?", a: "Docker is primarily used for building and running containers, while Kubernetes is a container orchestration platform used to manage containerized workloads and applications across a cluster." },
    { q: "Can working professionals learn Docker and Kubernetes?", a: "Yes, working professionals can learn Docker and Kubernetes as an additional technical skill, particularly if they are interested in software deployment, cloud, infrastructure, or DevOps-related responsibilities." },
    { q: "Can students from Punjab learn Docker and Kubernetes?", a: "Yes, students from Punjab can learn Docker and Kubernetes through available online or offline learning options. Learners interested in offline training can check current availability at the Jalandhar centre." },
    { q: "Can students from Haryana join Docker and Kubernetes training online?", a: "Yes, students and professionals from Haryana can learn Docker and Kubernetes online. The skills can complement existing interests in software development, IT services, cloud computing, or DevOps." },
    { q: "Can students from Himachal Pradesh learn Docker and Kubernetes online?", a: "Yes, students from Himachal Pradesh can learn Docker and Kubernetes online. This can be useful for learners who want to develop technical skills while continuing their studies or work locally." },
    { q: "Can students from Rajasthan learn Docker and Kubernetes?", a: "Yes, students and professionals from Rajasthan can learn Docker and Kubernetes online and use the skills as part of a broader software, cloud, or DevOps learning pathway." },
    { q: "Is Docker and Kubernetes suitable for students from Uttar Pradesh?", a: "Yes, Docker and Kubernetes can be suitable for students from Uttar Pradesh who are interested in software development, cloud computing, DevOps, or infrastructure-related technology careers." },
    { q: "What should I learn before Docker and Kubernetes?", a: "Basic Linux, networking, command-line usage, software development concepts, and cloud fundamentals can provide a useful foundation, although the exact prerequisites depend on the learner's starting level and course structure." },
    { q: "Does the course provide a certificate?", a: "Certificate availability depends on the current course offering and should be confirmed with Techcadd before enrollment." },
    { q: "What are the fees for the Docker & Kubernetes Course?", a: "The current course fee should be confirmed directly with Techcadd because fees can depend on the current course structure and batch offering." },
    { q: "Is Docker and Kubernetes a good career skill?", a: "Yes, Docker and Kubernetes can be valuable career skills when combined with Linux, networking, cloud computing, Git, CI/CD, programming, and other DevOps technologies. They are best viewed as components of a broader technical skill set." },
  ],
  related: ["devops", "linux", "cloud-computing"],
  copy: {
    heading: { title: "Docker & Kubernetes Course", highlight: "Online + Offline", meta: "Docker & Kubernetes Course: Containerization & Kubernetes Orchestration, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Docker & Kubernetes Course" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "What You Will Learn & Tools Covered",
      text: "A Docker & Kubernetes Course should take learners from the fundamentals of containerization to the basic concepts required to manage containerized applications through Kubernetes. The exact depth can vary according to the course level, but the learning path can be organized into the following areas.",
      note: "Overall Learning Outcome: By the end of a structured Docker & Kubernetes learning path, learners should have a clearer understanding of how modern applications can be packaged, containerized, deployed, configured, exposed, and managed. The strongest career value comes from combining Docker and Kubernetes with foundational knowledge of Linux, networking, programming, Git, cloud computing, CI/CD, and automation. This broader combination can help learners understand not only how containers work, but also how modern software delivery environments are designed and operated.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "A Docker & Kubernetes course can be useful for learners from several technical and professional backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology, software engineering, or related technical disciplines can use Docker and Kubernetes to strengthen their understanding of modern application infrastructure. Academic knowledge of programming or operating systems can provide a useful foundation when learning containers and orchestration." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduate students and learners with advanced technical education can explore Docker and Kubernetes as practical technologies that connect software development with infrastructure and deployment. The skills can complement areas such as cloud computing, DevOps, software engineering, and system administration." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals who already work with applications, servers, development environments, cloud platforms, or infrastructure can learn how containerized workflows operate. Docker can help them understand consistent application environments, while Kubernetes introduces concepts for managing containerized workloads at scale." },
        { icon: "Shuffle", title: "Job Switchers", text: "Professionals planning to move toward DevOps, cloud, infrastructure, or deployment-oriented roles can use Docker and Kubernetes as part of their technical skill development. Learning both technologies can help them understand the relationship between application packaging, deployment, networking, configuration, and orchestration." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers working with websites, applications, APIs, or software deployment can benefit from understanding containerized environments. Docker knowledge can make it easier to work with applications that have specific dependencies and development environments. Kubernetes can be useful when projects require more structured container orchestration." },
        { icon: "Building2", title: "Business Owners", text: "Business owners managing technology products or development teams do not necessarily need to become Kubernetes administrators, but understanding the concepts can help them communicate more effectively with developers and technical teams. Knowledge of containerization can also help when evaluating modern deployment approaches." },
        { icon: "Compass", title: "Career Changers", text: "People moving from software development, system administration, networking, technical support, or other IT roles may find Docker and Kubernetes relevant to a transition toward DevOps and cloud-oriented responsibilities." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can start learning Docker and Kubernetes, although having basic familiarity with Linux, networking, command-line environments, and software development concepts can make the learning journey smoother. A structured course can introduce these concepts progressively rather than assuming advanced infrastructure knowledge from the beginning." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "Students who have completed 12th grade and are developing an interest in IT can explore Docker and Kubernetes as part of a longer-term technical learning path. However, they may benefit from first building foundational computer, programming, Linux, and networking knowledge before moving deeply into container orchestration." },
      ],
      need: "While prior exposure to programming, Linux, networking, or cloud concepts can make the learning process easier, the depth of prior knowledge required depends on the learner's starting point and the level at which the course is delivered.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can explore Docker and Kubernetes as part of a modern IT skill set relevant to software companies, startups, IT services, and technology-driven businesses. Students and early-career professionals can use online learning to build skills alongside their studies or existing work." },
        { title: "Haryana", text: "For learners in Haryana, particularly those connected with the IT and corporate ecosystem around Gurugram and other technology-oriented areas, Docker and Kubernetes can complement software development, cloud, infrastructure, and DevOps career preparation." },
        { title: "Himachal Pradesh", text: "Students and professionals in Himachal Pradesh can learn Docker and Kubernetes online while remaining connected to local education, IT, and remote-work opportunities. These skills can also complement professionals who want to work with distributed technology teams." },
        { title: "Chandigarh", text: "Chandigarh's IT, BPO, education, government, and startup ecosystem creates a relevant environment for learners interested in modern software technologies. Docker and Kubernetes can add infrastructure and deployment knowledge to an existing technical skill set." },
        { title: "Delhi NCR", text: "Learners from Delhi NCR can explore Docker and Kubernetes as part of a broader DevOps and cloud skill pathway. The region's large technology, IT services, fintech, media, and e-commerce ecosystem provides varied environments where knowledge of application deployment can be relevant." },
        { title: "Jammu & Kashmir", text: "Students from Jammu and Kashmir can use online learning to develop Docker and Kubernetes skills without needing to relocate for training. The skills can complement broader IT learning and remote career preparation." },
        { title: "Uttarakhand", text: "Learners from Uttarakhand can study Docker and Kubernetes online alongside education or employment. For students interested in IT services and remote technology careers, containerization can become a useful addition to their technical foundation." },
        { title: "Rajasthan", text: "Students and professionals in Rajasthan can add Docker and Kubernetes to software, cloud, and DevOps learning pathways. For learners interested in technology-driven businesses and IT opportunities, these technologies can provide practical exposure to modern deployment concepts." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can use Docker and Kubernetes to strengthen technical skills related to software development, IT, electronics, and cloud-oriented work. Online learning can make the course accessible to students and professionals across cities such as Lucknow and Meerut." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "Modern software is increasingly developed and deployed across environments that require consistency, portability, automation, and efficient resource management. Docker and Kubernetes address important parts of this challenge, making knowledge of containerization and orchestration valuable for people building careers around modern application infrastructure.",
      points: [
        { title: "Build Practical Containerization Skills", text: "Docker introduces learners to the practical process of packaging applications and their dependencies into containers. Understanding images, containers, Dockerfiles, registries, volumes, networks, and container lifecycle management provides a foundation for working with containerized applications." },
        { title: "Understand Modern Deployment", text: "Learning Kubernetes introduces a different level of application management. Instead of handling individual containers manually, learners can understand concepts such as pods, deployments, services, namespaces, configurations, and scaling. This helps connect container knowledge with larger deployment environments." },
        { title: "Develop DevOps-Oriented Knowledge", text: "Docker and Kubernetes are closely associated with modern DevOps workflows. Learning them can help learners understand how development and operations activities connect through repeatable environments, automated deployment practices, infrastructure processes, and application management." },
        { title: "Prepare for Relevant Technical Roles", text: "Docker and Kubernetes skills can complement roles involving DevOps, cloud infrastructure, system administration, platform engineering, software development, and application deployment. They should be viewed as part of a broader technical skill set rather than as a guarantee of a particular job." },
        { title: "Strengthen Existing IT Skills", text: "The technologies can be particularly useful when combined with Linux, networking, cloud computing, scripting, version control, and CI/CD knowledge. Learners who already possess some of these skills can use Docker and Kubernetes to connect different areas of their technical knowledge." },
        { title: "Improve Understanding of Application Environments", text: "A common challenge in software development is ensuring that applications behave consistently across different environments. Docker helps learners understand how applications and dependencies can be packaged into standardized environments, making the concept of portability easier to understand." },
        { title: "Learn Skills Relevant to Cloud Computing", text: "Containerized applications are commonly associated with cloud-native architectures. Kubernetes is also used as an orchestration platform in many cloud environments. Learning the underlying concepts can therefore provide a useful foundation for learners planning to explore cloud technologies further." },
        { title: "Create a Foundation for Automation", text: "Docker and Kubernetes can introduce learners to automation-oriented approaches to application deployment and management. This can be valuable for professionals who want to move beyond manually managing individual servers or application environments." },
        { title: "Support Career Switching", text: "For a software developer, system administrator, network professional, or IT support professional, Docker and Kubernetes can become additional skills when moving toward DevOps or cloud-related responsibilities. The learning path is especially useful when combined with practical projects and foundational infrastructure knowledge." },
        { title: "Develop Project-Based Understanding", text: "The value of learning these technologies increases when concepts are connected to practical scenarios. Learners can work toward understanding how an application moves from a Docker image to a running container and then into a Kubernetes-managed environment. Such project-oriented learning can make abstract infrastructure concepts easier to understand and demonstrate." },
        { title: "Remain Relevant as Technology Evolves", text: "Software deployment continues to evolve toward automation, cloud infrastructure, containerization, and scalable application architectures. Docker and Kubernetes are therefore useful technologies for learners who want to understand the infrastructure behind contemporary application delivery." },
      ],
      outro: "For learners beginning their technology journey, Docker and Kubernetes should not be treated as isolated tools. They are more valuable when understood as part of a broader pathway involving Linux, networking, software development, cloud computing, DevOps, automation, and infrastructure management.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "“North India's first AI-powered and Robotics learning centre”. For learners studying Docker and Kubernetes, a technology-focused learning environment can provide useful exposure to modern computing concepts beyond individual software tools. While Docker and Kubernetes are primarily associated with containers, orchestration, DevOps, and cloud infrastructure, exposure to a broader technology environment can help learners understand how different technologies fit into modern IT workflows. Students from Punjab and nearby regions can explore offline learning at the Jalandhar centre, while learners from Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh can access the course online." },
        { title: "Practical Learning Approach", text: "Docker and Kubernetes are highly practical technologies. Understanding commands, container configurations, images, deployments, services, and orchestration concepts becomes more meaningful when learners can work through practical scenarios rather than relying only on theoretical explanations. A practical approach can help learners understand how individual concepts connect to an actual deployment workflow." },
        { title: "Industry-Relevant Technology Focus", text: "Docker and Kubernetes are relevant to modern application development and infrastructure environments. A course focused on these technologies can help learners build knowledge around containerization, application deployment, orchestration, scalability, and environment management. The curriculum should remain aligned with practical use cases so learners understand not just what a command does, but why a particular technology or workflow is used." },
        { title: "Structured Learning for Different Experience Levels", text: "Learners may enter the course with different levels of technical knowledge. Some may come from software development, while others may have Linux, networking, cloud, or system administration experience. A structured progression from Docker fundamentals to Kubernetes concepts can make the subject easier to approach and help learners build knowledge progressively." },
        { title: "Focus on Modern DevOps Skills", text: "Docker and Kubernetes can form an important part of a broader DevOps learning pathway. Understanding containers and orchestration can help learners connect application development with deployment and infrastructure management. This makes the course relevant for learners who want to explore DevOps, cloud computing, application deployment, and infrastructure-oriented career paths." },
        { title: "Online + Offline Learning Flexibility", text: "Learners in Punjab can explore offline learning options at the Jalandhar centre, while students and professionals in other North Indian regions can learn online. This makes the learning format more flexible for working professionals, college students, career changers, and learners who cannot regularly attend an offline centre." },
        { title: "Career-Focused Technical Skills", text: "The course focuses on technologies that can complement broader technical skills. Docker and Kubernetes knowledge can be useful alongside Linux, networking, cloud platforms, programming, Git, CI/CD, and automation. Instead of treating Docker and Kubernetes as isolated technologies, learners can understand where they fit into wider technical and DevOps workflows." },
        { title: "Support for Learners Building Their Next Technical Skill", text: "Docker and Kubernetes can be learned as an additional skill after gaining experience in software development, system administration, cloud computing, or IT infrastructure. For beginners, they can also become part of a longer learning pathway that starts with foundational computing concepts and gradually progresses toward containers, orchestration, cloud, and DevOps." },
      ],
    },
    tools: {
      title: "Tools, Software & Technologies",
      groups: [
        { area: "Containers", tools: "Docker, Docker CLI, Docker Compose" },
        { area: "Orchestration", tools: "Kubernetes, kubectl, Kubernetes YAML configuration" },
        { area: "Registries", tools: "Container registries" },
        { area: "Operating system", tools: "Linux command line" },
        { area: "Version control", tools: "Git, GitHub" },
        { area: "Delivery", tools: "CI/CD concepts" },
        { area: "Cloud", tools: "Cloud container environments" },
      ],
      note: "The precise toolset can vary according to the practical exercises and course implementation, so learners should confirm the current tool coverage before enrollment.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Docker and Kubernetes can contribute to several technical career pathways, particularly when combined with other foundational skills.",
      roles,
      rolesNote: "These technologies are used across industries where software applications need to be developed, deployed, maintained, and scaled efficiently. Relevant environments can include software companies, IT services, SaaS businesses, e-commerce, fintech, technology startups, and organizations operating cloud-based applications.",
      notes: [
        { title: "Career Progression", text: "A learner might build a pathway such as: IT / Software Fundamentals → Linux + Networking → Docker → Kubernetes → Cloud Platforms → CI/CD + Infrastructure Automation → DevOps / Cloud / Platform-oriented Roles. Docker and Kubernetes therefore work best as components of a broader technical skill set." },
        { title: "Freelancing and Project Opportunities", text: "Freelancers with suitable technical foundations can potentially use containerization knowledge in projects involving application deployment, development environments, API services, websites, microservices, and cloud infrastructure. However, successful freelance work generally requires additional skills such as programming, Linux administration, networking, Git, cloud platforms, and client/project management." },
      ],
      jobsTitle: "State-Wise Career Opportunities",
      jobs: [
        { title: "Punjab", text: "Learners in Punjab can use Docker and Kubernetes alongside software development, IT services, startups, and technology-driven businesses. Professionals can build these skills as an addition to existing development or infrastructure knowledge." },
        { title: "Haryana", text: "Haryana, particularly the broader Gurugram technology ecosystem, provides a relevant context for learners interested in IT services, MNCs, e-commerce, logistics technology, and cloud-oriented technical roles. Docker and Kubernetes can complement DevOps and cloud preparation." },
        { title: "Chandigarh", text: "For learners in Chandigarh and the Tricity area, Docker and Kubernetes can strengthen existing software, IT, BPO, or startup-oriented technical skills. Online learning can also allow working professionals to develop these skills alongside their careers." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology ecosystem spanning IT services, fintech, media, e-commerce, and software businesses. Learners can combine Docker and Kubernetes with cloud, programming, Linux, and CI/CD skills when preparing for infrastructure and DevOps-oriented roles." },
        { title: "Uttar Pradesh", text: "Learners in Uttar Pradesh can explore Docker and Kubernetes alongside software development, IT, electronics, and cloud technologies. For professionals in technology-oriented cities such as Noida and Lucknow, these skills can complement an existing technical career or support a transition toward DevOps and cloud infrastructure." },
      ],
    },
    faqTitle: "Frequently Asked Questions",
    cta: {
      title: "Start Learning Docker & Kubernetes With",
      highlight: "Techcadd",
      text: "Build practical knowledge of containerization, application deployment, and Kubernetes orchestration with a structured learning approach designed for students, professionals, and career-focused learners. If you want to understand Docker and Kubernetes, strengthen your DevOps skill set, or explore modern application deployment technologies, enquire with Techcadd to discuss the current course structure, batch details, and learning options.",
    },
  },
};
