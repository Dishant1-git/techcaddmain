import type { CoursePage } from "./types";

/* /courses/cloud-computing — long-form landing copy supplied by the client (used as given, section by section).
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "illustrative testimonial drafts,
     not verified student reviews" to be published only after being replaced or validated with genuine learner feedback.
     The page keeps the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed based on the current program structure".
   - Syllabus: "The following represents a course-relevant learning framework, rather than a claim about a confirmed
     Techcadd syllabus." Tools: "These should be presented as relevant cloud-industry technologies rather than as confirmed
     Techcadd course inclusions unless the actual course syllabus verifies them." (editor notes, left out of the page).
   - FAQs 2, 4, 5, 6 and 7 still carry "should be confirmed" / "supplied information" wording — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table and the four titles in `careers.notes` were added
     here to fit the layout. The supplied copy has no learning-outcomes or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO strategy report) and the enquiry-form field list are not page content. */

const roles = [
  "Cloud Support Associate",
  "Cloud Administrator",
  "Cloud Engineer",
  "Cloud Infrastructure Engineer",
  "DevOps Engineer",
  "Systems Administrator",
  "Cloud Security professional",
  "Site Reliability/Infrastructure roles",
  "Technical Support roles with cloud responsibilities",
];

export const cloudComputing: CoursePage = {
  slug: "cloud-computing",
  title: "Cloud Computing Course",
  navLabel: "Cloud Computing",
  group: "cyber-cloud",
  icon: "Cloud",
  tagline:
    "Understand the technologies and practices used to deliver servers, storage, databases, networking and applications through cloud environments, and develop practical cloud skills.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, job switchers, career changers, and beginners with an interest in technology",
  overview: [
    "A Cloud Computing Course introduces learners to the technologies and practices used to deliver computing resources such as servers, storage, databases, networking, applications, and related services through cloud environments. Instead of depending only on physical infrastructure, organizations increasingly use cloud platforms to build, deploy, manage, scale, and secure digital services.",
    "The course can be useful for graduates, IT professionals, career changers, job switchers, and beginners who want to understand modern computing infrastructure and develop practical cloud skills. Depending on the learning path, learners can explore concepts such as virtualization, cloud architecture, networking, storage, deployment, security, monitoring, and cloud-based application environments.",
    "For learners in Punjab, Cloud Computing can be particularly relevant to those preparing for technology careers, remote work, IT services, startups, and digitally enabled businesses. Students can learn through online study, while learners seeking classroom-based education can explore the Techcadd centre in Jalandhar.",
    "The program should help learners move from basic cloud concepts toward practical understanding of how cloud environments are designed, accessed, deployed, monitored, and managed.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Cloud Computing Fundamentals",
      summary: "Learners begin by understanding what cloud computing is and why organizations use it. Important concepts include cloud characteristics, resource sharing, scalability, elasticity, availability, virtualization, and the differences between traditional infrastructure and cloud-based environments.",
      topics: [],
      outcome: "Learners should be able to explain core cloud concepts and identify common reasons organizations adopt cloud infrastructure.",
    },
    {
      title: "Cloud Service Models",
      summary: "Learners explore the major service models used in cloud computing. They can also understand how these models change the responsibilities of cloud providers and customers.",
      topics: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)"],
      outcome: "Learners should be able to distinguish between major cloud service models and identify suitable use cases.",
    },
    {
      title: "Cloud Deployment Models",
      summary: "This area introduces public, private, hybrid, and other commonly discussed cloud deployment approaches. Learners can understand how organizations choose an environment according to requirements such as control, scalability, security, workload characteristics, and operational needs.",
      topics: [],
      outcome: "Learners should be able to compare deployment approaches and understand their practical applications.",
    },
    {
      title: "Virtualization and Compute",
      summary: "Virtualization is an important foundation for understanding modern cloud infrastructure. Learners can explore virtual machines, compute resources, resource allocation, and the relationship between physical infrastructure and virtual environments.",
      topics: [],
      outcome: "Learners should understand how virtualized computing resources are used within cloud infrastructure.",
    },
    {
      title: "Cloud Storage and Databases",
      summary: "Cloud environments provide different approaches to storing files, objects, application data, and databases. Learners can study storage concepts, data availability, access permissions, backup considerations, and the differences between common storage approaches.",
      topics: [],
      outcome: "Learners should be able to identify appropriate cloud storage concepts for different types of workloads.",
    },
    {
      title: "Cloud Networking",
      summary: "Cloud networking introduces concepts such as virtual networks, subnets, IP addressing, routing, connectivity, firewalls/security groups, and network access.",
      topics: [],
      outcome: "Learners should develop a foundation for understanding how cloud resources communicate securely within and outside a cloud environment.",
    },
    {
      title: "Identity and Access Management",
      summary: "Security is a major part of cloud administration. Learners can study authentication, authorization, users, roles, permissions, and the principle of giving users only the access they require.",
      topics: [],
      outcome: "Learners should understand basic cloud identity and access-management practices.",
    },
    {
      title: "Cloud Security and Monitoring",
      summary: "Learners can explore basic cloud-security principles, logging, monitoring, resource visibility, access control, and operational awareness.",
      topics: [],
      outcome: "Learners should understand how cloud environments can be monitored and managed with security and reliability in mind.",
    },
    {
      title: "Application Deployment",
      summary: "This area connects infrastructure knowledge with practical application delivery. Depending on the training environment, learners may work with application deployment, configuration, environments, and basic scaling concepts.",
      topics: [],
      outcome: "Learners should understand the basic workflow involved in deploying an application within a cloud environment.",
    },
    {
      title: "Automation and DevOps Foundations",
      summary: "Cloud environments commonly intersect with automation and DevOps practices. Learners can be introduced to concepts such as automated workflows, version control, continuous integration, continuous delivery, and infrastructure management.",
      topics: [],
      outcome: "Learners should understand why automation is important for repeatable and scalable cloud operations.",
    },
  ],
  tools: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud", "Linux", "Git and GitHub", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Cloud Computing course?", a: "A Cloud Computing course teaches the fundamentals and practical concepts used to work with cloud-based computing infrastructure, services, storage, networking, deployment, security, and related technologies." },
    { q: "Who is eligible for a Cloud Computing course?", a: "Graduates, postgraduates, working professionals, job switchers, career changers, and beginners with an interest in technology can consider a Cloud Computing course. The exact eligibility requirements should be confirmed with the training provider." },
    { q: "Is Cloud Computing suitable for beginners?", a: "Yes, Cloud Computing can be suitable for beginners when the course starts with fundamental concepts and progresses gradually. Basic computer knowledge and an interest in technology can make the learning process easier." },
    { q: "What does the Cloud Computing syllabus include?", a: "A Cloud Computing syllabus commonly covers cloud fundamentals, service and deployment models, virtualization, computing, storage, networking, identity and access management, security, monitoring, deployment, and cloud-related automation. The exact Techcadd syllabus should be confirmed before enrolment." },
    { q: "What tools are used in Cloud Computing?", a: "Common cloud technologies include AWS, Microsoft Azure, Google Cloud, Linux, Docker, Kubernetes, Terraform, Git, GitHub, and Jenkins. The tools actually covered should be verified against the current Techcadd curriculum." },
    { q: "How long does a Cloud Computing course take?", a: "Course duration depends on the training provider, syllabus depth, learning mode, and number of practical sessions. An exact Techcadd duration is not established by the supplied course information, so it should be confirmed before enrolment." },
    { q: "How much are Cloud Computing course fees?", a: "Cloud Computing course fees vary according to the institute, duration, curriculum, learning mode, and technologies included. The supplied information does not establish an exact Techcadd fee, so prospective learners should enquire for the current fee structure." },
    { q: "Can I learn Cloud Computing online?", a: "Yes, Cloud Computing can be learned online, including through live online training where offered. Online learning can allow students and professionals from different cities and states to study without relocating." },
    { q: "Is offline Cloud Computing training available?", a: "Offline learning can be available at the Techcadd centre in Jalandhar, Punjab. Learners outside Jalandhar can use online learning rather than assuming that Techcadd has physical centres in other cities." },
    { q: "What jobs can I pursue after Cloud Computing training?", a: "Cloud Computing skills can support roles such as Cloud Support Associate, Cloud Administrator, Cloud Engineer, Cloud Infrastructure Engineer, DevOps Engineer, and related infrastructure or technical-support positions. Job requirements vary by employer and usually require additional technical skills and experience." },
    { q: "What is the salary after a Cloud Computing course?", a: "Cloud Computing salaries vary according to job role, experience, location, employer, technical specialization, and existing skills. Completing a course by itself does not guarantee a particular salary." },
    { q: "Can Cloud Computing help with freelancing?", a: "Yes, Cloud Computing can complement freelance services involving application deployment, cloud infrastructure, server administration, DevOps, technical support, and related IT work. Freelance opportunities depend on the learner's practical skills, portfolio, communication, and client demand." },
    { q: "Can students from Punjab learn Cloud Computing online?", a: "Yes, students from Punjab can learn Cloud Computing online without relocating to Jalandhar. Learners who prefer classroom-based training can explore the Techcadd centre in Jalandhar." },
    { q: "Can students from Haryana join Cloud Computing online?", a: "Yes, students from Haryana can join Cloud Computing training online. This can be useful for learners balancing education, employment, or other commitments while developing skills relevant to IT services, MNCs, e-commerce, logistics, and technology businesses." },
    { q: "Can students from Himachal Pradesh learn Cloud Computing online?", a: "Yes, students from Himachal Pradesh can learn Cloud Computing online. Online learning can be particularly useful for learners who want access to specialized technology training without relocating from cities such as Shimla, Dharamshala, or Solan." },
    { q: "Is Cloud Computing suitable for students from Uttar Pradesh?", a: "Yes, Cloud Computing can be suitable for students from Uttar Pradesh who are interested in IT and technology careers. Learners can combine cloud knowledge with programming, networking, cybersecurity, DevOps, or other technical skills." },
    { q: "What is the career scope of Cloud Computing in India?", a: "Cloud Computing has career relevance across IT services, software, e-commerce, fintech, SaaS, healthcare, education, manufacturing, logistics, and other digital industries. Career progression depends on developing practical cloud skills and complementary technical expertise." },
  ],
  related: ["linux", "cybersecurity", "data-science"],
  copy: {
    heading: { title: "Cloud Computing Course", highlight: "Online + Offline", meta: "Cloud Computing Course: Build Practical Cloud Computing Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Cloud Computing Course" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "Cloud Computing Course — Core Learning Areas" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do a Cloud Computing Course?",
      intro: "A Cloud Computing Course is not limited to one academic background. The field can be relevant to learners who want to enter IT, strengthen an existing technical profile, or understand the infrastructure behind modern digital products and services.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology, engineering, mathematics, or other technical backgrounds may find Cloud Computing a useful specialization. Learners from non-technical degrees can also study the fundamentals if they are prepared to build basic computer and networking knowledge alongside the course." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who already have exposure to programming, databases, networking, software development, or IT systems can use cloud learning to broaden their technical skill set and understand how applications and infrastructure operate in modern environments." },
        { icon: "Briefcase", title: "Working professionals", text: "IT professionals can learn cloud concepts to complement existing experience in development, networking, system administration, databases, cybersecurity, or technical support. Cloud knowledge can also help professionals understand how organizations modernize their infrastructure." },
        { icon: "Shuffle", title: "Job switchers", text: "Professionals planning a move into IT can use a structured cloud program as a starting point. However, learners should understand that employability depends on practical skills, technical fundamentals, projects, and the requirements of individual job roles—not simply completing a course." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers working with websites, applications, software projects, or digital businesses may benefit from understanding cloud hosting, deployment environments, storage, domains, networking, and related infrastructure. Cloud knowledge can make it easier to communicate with technical teams and manage suitable project requirements." },
        { icon: "Building2", title: "Business owners", text: "Entrepreneurs and business owners do not necessarily need to become cloud engineers. Basic cloud knowledge can nevertheless help them understand scalable infrastructure, hosted applications, data storage, access management, backups, and technology costs when working with developers or IT teams." },
        { icon: "Compass", title: "Career changers", text: "Someone moving from another technical or technology-adjacent field may use Cloud Computing to develop a new specialization. The transition is more practical when combined with fundamentals such as networking, operating systems, security, and basic scripting." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can start with cloud fundamentals before progressing to more technical areas. A suitable learning path should introduce concepts progressively rather than assuming advanced infrastructure knowledge from the first lesson." },
        { icon: "BookOpen", title: "12th-pass students", text: "Students who have completed 12th standard can explore Cloud Computing, particularly if they have a strong interest in computers and technology. For a technical career, however, they should also consider building foundational knowledge and pursuing an appropriate higher-education or skill-development pathway." },
      ],
      need: "Basic computer knowledge and an interest in technology can make the learning process easier.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can use online Cloud Computing training to build skills relevant to IT services, startups, manufacturing technology, and businesses increasingly dependent on digital infrastructure. Those near Jalandhar can also consider classroom learning at the Techcadd centre." },
        { title: "Haryana", text: "Students and professionals in Haryana can approach cloud learning from an enterprise-technology perspective. The state's MNC, automobile, e-commerce, logistics, and IT-service ecosystem creates a useful context for understanding scalable digital infrastructure." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online learning can reduce the need to relocate for specialized technology training. Cloud skills can also complement remote-work and freelancing pathways for people building technology careers from cities such as Shimla, Dharamshala, or Solan." },
        { title: "Chandigarh", text: "Learners in Chandigarh can use Cloud Computing training to strengthen their profiles for IT, BPO, startup, education, and technology-related opportunities. Online study also provides flexibility for students and working professionals." },
        { title: "Delhi NCR", text: "Students and professionals in Delhi NCR can use cloud training as part of a broader IT career pathway. The region's large technology, fintech, media, e-commerce, and services ecosystem makes cloud infrastructure knowledge relevant across many digital businesses." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can study online without needing to relocate to another state. Cloud skills can support technology-oriented career development, remote work, freelancing, and digital-business opportunities." },
        { title: "Uttarakhand", text: "Students from Dehradun, Haridwar, and other parts of Uttarakhand can use online learning to access cloud training alongside education or employment. Cloud knowledge can complement opportunities connected with IT, education, pharma, and digitally enabled services." },
        { title: "Rajasthan", text: "Learners in Rajasthan, particularly around Jaipur, can explore Cloud Computing as a technical skill alongside the region's growing digital-business environment. Online learning can be useful for students who want access to specialized training without relocating." },
        { title: "Uttar Pradesh", text: "Learners from Lucknow, Meerut, and other parts of Uttar Pradesh can study Cloud Computing online while developing broader IT skills. The state's IT, electronics, retail, and digital-service sectors provide relevant contexts for understanding cloud-based technology." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn Cloud Computing?",
      intro: "Cloud Computing has become an important part of modern IT infrastructure because organizations increasingly use cloud environments for applications, storage, databases, networking, development, analytics, and other technology workloads. Learning how these environments work can therefore provide a useful technical foundation for people preparing for or progressing within technology careers.",
      points: [
        { title: "Understand modern IT infrastructure", text: "Cloud learning helps students understand how computing resources can be provisioned and managed without relying exclusively on traditional physical infrastructure. Concepts such as virtual machines, storage, networking, scalability, availability, and resource management provide a foundation for understanding modern IT environments." },
        { title: "Build practical technical skills", text: "A good Cloud Computing learning path should go beyond definitions. Learners can develop practical understanding of creating or configuring cloud resources, managing access, working with storage and networking concepts, deploying applications, and monitoring cloud environments. The exact practical exercises depend on the technologies and platforms used in the program." },
        { title: "Explore multiple career directions", text: "Cloud knowledge can support several technology career paths. Depending on additional skills and experience, learners may explore roles related to cloud support, cloud administration, system administration, DevOps, cloud engineering, infrastructure, technical operations, or cloud security. Cloud training alone does not guarantee any particular job; the required skills vary by employer and role." },
        { title: "Strengthen an existing IT profile", text: "Cloud Computing does not have to be studied in isolation. A developer can learn how applications are deployed in cloud environments. A system administrator can expand into cloud infrastructure. A networking learner can understand cloud networking. A cybersecurity learner can explore identity, access, infrastructure security, and cloud-specific risks." },
        { title: "Support career switching", text: "For people changing careers into technology, Cloud Computing can provide a structured area of specialization. Beginners should first develop fundamental knowledge of computers, operating systems, networking, and basic technical concepts before progressing into more complex cloud environments." },
        { title: "Create project and portfolio opportunities", text: "Cloud skills can be demonstrated through practical projects. Examples might include deploying a simple application, configuring cloud storage, designing a basic cloud architecture, implementing access controls, setting up monitoring, or documenting a deployment workflow. A project portfolio can help learners demonstrate what they can actually do rather than relying only on course completion." },
        { title: "Useful for remote and freelance work", text: "Cloud infrastructure supports many digital businesses, which can make cloud-related knowledge useful for freelancers and remote professionals. People with complementary skills in web development, system administration, DevOps, cybersecurity, or technical support may be able to apply cloud knowledge to client projects. Freelancing opportunities depend on individual expertise, portfolio quality, communication, and market demand." },
        { title: "Develop future-oriented technology skills", text: "Cloud environments continue to intersect with areas such as automation, containers, DevOps, data services, artificial intelligence, cybersecurity, and distributed applications. Learning cloud fundamentals can therefore provide a base for continuing technical development as learners move toward more specialized areas." },
      ],
      outro: "For learners in Punjab and other North Indian states, online learning can make specialized Cloud Computing education accessible without requiring relocation. The most valuable outcome, however, is not simply completing a course—it is developing a practical understanding of cloud technologies that can be demonstrated through skills, projects, and continued learning.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "AI-Powered and Robotics Learning Environment", text: "“North India's first AI-powered and Robotics learning centre” provides a modern technology-learning environment that can complement Cloud Computing education. For cloud learners, the value is primarily in exposure to a technology-focused environment where cloud concepts can be understood alongside the broader ecosystem of AI, automation, software, and emerging technologies. For learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh, online learning can provide access without requiring relocation." },
        { title: "Practical Learning Focus", text: "Cloud Computing is easier to understand when theoretical concepts are connected with practical tasks. Learners can work toward understanding cloud infrastructure, storage, networking, deployment, access management, monitoring, and other core concepts rather than studying terminology in isolation." },
        { title: "Industry-Relevant Cloud Skills", text: "Cloud technology is used across software, IT services, e-commerce, fintech, education, healthcare, manufacturing, and other digital industries. A course structured around current cloud concepts can help learners understand the technologies and workflows used in modern IT environments." },
        { title: "Learning Through Projects", text: "Projects can give learners an opportunity to apply cloud concepts in realistic scenarios. Examples may include deploying an application, configuring cloud storage, creating a basic cloud architecture, setting access permissions, or documenting a deployment process. The exact projects should depend on the technologies included in the actual training." },
        { title: "Online + Offline Flexibility", text: "Techcadd's learning model supports both online and offline participation. This can be useful for learners who prefer classroom interaction as well as students and professionals who need the flexibility of learning remotely from another city or state." },
        { title: "Suitable for Different Career Stages", text: "Cloud Computing can be approached from different starting points. Beginners can build foundational knowledge, while developers, system administrators, networking professionals, technical-support professionals, and other IT learners can use cloud skills to extend their existing expertise." },
        { title: "Support for Learners Beyond Jalandhar", text: "The physical Techcadd centre is in Jalandhar, Punjab, but learners from other states can use online learning to access the program. This makes the course relevant to students and professionals across North India without implying that Techcadd operates physical centres in those locations." },
      ],
    },
    tools: {
      title: "Tools, Platforms & Technologies",
      groups: [
        { area: "Cloud platforms", tools: "Amazon Web Services (AWS), Microsoft Azure, Google Cloud" },
        { area: "Operating system", tools: "Linux" },
        { area: "Version control", tools: "Git and GitHub" },
        { area: "Containers", tools: "Docker, Kubernetes" },
        { area: "Infrastructure as code", tools: "Terraform" },
        { area: "CI/CD", tools: "Jenkins" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Cloud Computing can support several technical career directions, depending on the learner's broader skills and experience.",
      roles,
      notes: [
        { title: "Industries", text: "Cloud skills can be relevant across IT services, software development, e-commerce, fintech, SaaS, education, healthcare, manufacturing, logistics, and digital businesses." },
        { title: "Career Progression", text: "Career progression generally depends on developing complementary skills. A beginner may start with cloud fundamentals and basic infrastructure, then progress toward administration, DevOps, security, automation, architecture, or specialized cloud engineering." },
        { title: "Freelancing", text: "For freelancers, cloud knowledge can complement web development, application deployment, server administration, DevOps, and technical-support services. The actual availability of freelance work depends on portfolio quality, technical capability, communication, and client demand." },
        { title: "Salary", text: "Salary varies substantially according to role, experience, location, technology specialization, employer, and overall technical skill. It is therefore more useful to treat salary figures as market-dependent rather than promise a specific income after completing a course." },
      ],
      jobsTitle: "State-Wise Opportunities",
      jobs: [
        { title: "Punjab", text: "Cloud Computing skills can complement Punjab's IT services, startups, manufacturing, exports, and digitally enabled businesses. Learners can build skills relevant to infrastructure, application deployment, technical support, and cloud-based business systems." },
        { title: "Haryana", text: "Haryana's MNCs, automobile companies, e-commerce businesses, logistics operations, and IT services create varied environments where cloud infrastructure and scalable digital systems are relevant. Learners can combine cloud skills with networking, DevOps, software development, or system administration." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, cloud skills can support technology careers that are less dependent on physical location. Cloud knowledge can be particularly useful alongside remote IT work, freelancing, software development, and digital services." },
        { title: "Chandigarh", text: "Chandigarh's IT, BPO, education, government, and startup ecosystem provides several contexts in which cloud knowledge can complement existing technology skills. Learners can combine cloud fundamentals with software, networking, cybersecurity, or technical-support capabilities." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology ecosystem spanning IT services, fintech, e-commerce, media, agencies, and large enterprises. Cloud learners can therefore explore multiple specialization paths, including cloud administration, DevOps, infrastructure, and cloud-support roles." },
        { title: "Uttar Pradesh", text: "In Uttar Pradesh, particularly around Noida and Lucknow, cloud skills can complement opportunities connected with IT, electronics, software, retail, and digital services. Learners can build cloud knowledge alongside programming, networking, cybersecurity, or DevOps skills." },
      ],
    },
    faqTitle: "Frequently Asked Questions About the Cloud Computing Course",
    cta: {
      title: "Build Practical Cloud Computing Skills for Your",
      highlight: "IT Career",
      text: "Learn Cloud Computing Online + Offline with Techcadd. Want to understand cloud infrastructure, deployment, storage, networking, security, and modern cloud technologies? Explore the Cloud Computing Course at Techcadd and discuss the learning path that best matches your current skills and career goals. Whether you are a beginner, graduate, working professional, job switcher, or IT learner looking to strengthen your technical profile, you can enquire about the program and its current curriculum.",
    },
  },
};
