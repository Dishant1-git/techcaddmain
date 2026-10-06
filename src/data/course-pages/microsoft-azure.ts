import type { CoursePage } from "./types";

/* /courses/microsoft-azure — long-form landing copy supplied by the client (used as given, section by section).
   Navigation is unchanged at the client's request (`navLabel`, the Courses ▾ link and the slug are as before).
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts for
     CMS/content planning" that "should be replaced or verified with genuine learner feedback before publication". The
     page keeps the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "Contact Techcadd for the current course duration".
   - Editor notes left out: "the following represents an appropriate course framework rather than an unsupported claim
     about a fixed syllabus" and "The exact list should be aligned with the current course syllabus before publishing
     specific tool-by-tool claims." The old page's AZ-900 / AZ-104 exam-prep claims are gone (not in the supplied copy).
   - The overview's last paragraph and FAQs 4, 5, 6, 8 and 12 still say details "should be confirmed" — replace with real
     details.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table were added here to fit the layout. The supplied
     copy has no learning-outcomes or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy report) and the enquiry-form field list are not page content. */

// The supplied "career directions" — shown as chips, each explained in `copy.careers.notes`.
const directions = [
  { title: "Cloud Administration", text: "Learners with broader IT fundamentals can explore cloud administration roles involving resource management, access control, monitoring and infrastructure operations." },
  { title: "Cloud Infrastructure", text: "Those interested in infrastructure can build further knowledge around networking, virtual machines, storage, security and scalable cloud environments." },
  { title: "DevOps", text: "Azure can also provide a foundation for learners who want to move toward DevOps. However, DevOps careers typically require additional knowledge of automation, version control, CI/CD, scripting, containers and related practices." },
  { title: "Software Development", text: "Developers can use Azure knowledge to better understand how applications are hosted, deployed and connected to cloud services." },
  { title: "Cloud Support", text: "Azure knowledge can complement technical-support skills for professionals working with cloud-based applications and infrastructure." },
  { title: "Cloud Security", text: "Learners interested in security can eventually combine Azure knowledge with networking, identity, security monitoring and broader cloud-security concepts." },
];

export const microsoftAzure: CoursePage = {
  slug: "microsoft-azure",
  title: "Microsoft Azure Course",
  navLabel: "Microsoft Azure",
  group: "cyber-cloud",
  icon: "Server",
  tagline:
    "A Microsoft Azure Course introduces learners to Microsoft's cloud computing platform and the practical concepts used to build, deploy, manage and secure applications and infrastructure in the cloud.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, IT professionals, career changers and beginners with an interest in cloud computing",
  overview: [
    "A Microsoft Azure Course introduces learners to Microsoft's cloud computing platform and the practical concepts used to build, deploy, manage and secure applications and infrastructure in the cloud. Instead of treating Azure as only a collection of services, the course can help learners understand how cloud resources work together and how organizations use them for computing, storage, networking, databases and application deployment.",
    "The course can be useful for graduates, IT students, working professionals, career changers and beginners who want to build cloud-related skills. Learners can expect to develop an understanding of core Azure services, cloud concepts, resource management, security fundamentals and practical cloud workflows.",
    "For learners in Punjab, Azure skills can complement existing IT and software knowledge and open additional directions in cloud-focused careers. Techcadd's Jalandhar centre provides an offline learning option, while learners outside the region can consider online learning.",
    "The exact syllabus, tools covered, duration and certification preparation should be confirmed according to the current course structure.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Cloud Computing Fundamentals",
      summary: "Learners first need to understand what cloud computing is and how it differs from traditional on-premises infrastructure.",
      topics: ["Cloud computing fundamentals", "Cloud service models", "Cloud deployment concepts", "Benefits and limitations of cloud environments", "Basic cloud infrastructure concepts", "Understanding resources and services"],
      outcome: "Learners should be able to explain fundamental cloud concepts and understand why organizations use cloud platforms.",
    },
    {
      title: "Introduction to Microsoft Azure",
      summary: "The next stage introduces the Azure ecosystem and its core structure.",
      topics: ["Azure portal", "Azure resources", "Resource groups", "Azure subscriptions", "Azure regions", "Azure resource management", "Basic Azure terminology"],
      outcome: "Learners should understand how Azure organizes and manages cloud resources.",
    },
    {
      title: "Azure Compute",
      summary: "Compute is one of the fundamental areas of cloud infrastructure.",
      topics: ["Virtual machines", "Compute resources", "Application hosting", "Scaling concepts", "Availability considerations", "Cloud-based application deployment"],
      outcome: "Learners should understand how computing resources can be created and used in an Azure environment.",
    },
    {
      title: "Azure Storage",
      summary: "Cloud applications require reliable ways to store data and files.",
      topics: ["Azure storage", "Storage accounts", "Blob storage", "File storage", "Storage management", "Data access concepts"],
      outcome: "Learners should understand different cloud storage requirements and how Azure provides resources to support them.",
    },
    {
      title: "Azure Networking",
      summary: "Networking knowledge is particularly important for learners moving toward infrastructure or cloud administration roles.",
      topics: ["Virtual networks", "Subnets", "Network connectivity", "IP addressing concepts", "Network security", "Connectivity between Azure resources"],
      outcome: "Learners should be able to understand how Azure resources communicate within a cloud network.",
    },
    {
      title: "Azure Databases",
      summary: "Cloud applications frequently depend on managed database services.",
      topics: ["Cloud database concepts", "Relational database services", "Data storage considerations", "Database connectivity", "Managed database concepts"],
      outcome: "Learners should understand how database services fit into cloud-based application architectures.",
    },
    {
      title: "Identity and Security Fundamentals",
      summary: "Security is an important part of cloud computing rather than a separate consideration added at the end.",
      topics: ["Identity concepts", "Access management", "Authentication", "Authorization", "Permissions", "Basic cloud security practices"],
      outcome: "Learners should understand how access to Azure resources can be controlled and why identity management is important.",
    },
    {
      title: "Monitoring and Resource Management",
      summary: "Managing cloud resources involves more than creating them.",
      topics: ["Resource monitoring", "Performance concepts", "Resource management", "Usage awareness", "Basic troubleshooting", "Operational considerations"],
      outcome: "Learners should understand the basic process of monitoring and managing Azure resources.",
    },
  ],
  tools: ["Microsoft Azure Portal", "Azure Virtual Machines", "Azure Storage", "Azure Virtual Network", "Azure databases", "Azure identity and access services", "Azure monitoring tools", "Cloud resource management tools"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as chips on the page (via copy.careers.roles); the compare pages read the names from here.
  careers: directions.map((d) => ({ role: d.title, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Microsoft Azure Course?", a: "A Microsoft Azure Course teaches learners how Microsoft's Azure cloud platform works and introduces core concepts such as cloud computing, computing resources, storage, networking, databases, identity and resource management." },
    { q: "Who can join a Microsoft Azure Course?", a: "Graduates, postgraduates, IT professionals, career changers and beginners with an interest in cloud computing can consider a Microsoft Azure Course. Existing knowledge of basic IT concepts can make the learning process easier, but the appropriate starting level depends on the learner's background." },
    { q: "Can beginners learn Microsoft Azure?", a: "Yes, beginners can learn Microsoft Azure by starting with cloud-computing fundamentals and gradually progressing to Azure services. Basic understanding of computers, networking or IT concepts can be helpful but does not mean a beginner must already know Azure." },
    { q: "What is covered in the Microsoft Azure syllabus?", a: "A typical Azure learning path can cover cloud fundamentals, Azure resources, virtual machines, storage, networking, databases, identity, security, monitoring and resource management. The exact Techcadd syllabus should be confirmed against the current course curriculum." },
    { q: "How long does a Microsoft Azure Course take?", a: "The duration depends on the course structure, learning depth and learner's prior knowledge. The current Techcadd course duration should be confirmed directly rather than assuming a fixed number of weeks or months." },
    { q: "What are the fees for a Microsoft Azure Course?", a: "Microsoft Azure Course fees vary according to the institute, course structure, duration, delivery mode and services included. The current Techcadd fee should be confirmed with the institute because no fixed fee was provided in the course information." },
    { q: "Can I learn Microsoft Azure online?", a: "Yes, Microsoft Azure can be learned online because the platform itself is cloud-based and much of the learning can involve cloud resources, demonstrations and guided practical work. Techcadd provides an online learning option for learners who cannot attend the Jalandhar centre." },
    { q: "Is offline Microsoft Azure training available?", a: "Yes, Techcadd offers an offline learning option at its physical centre in Jalandhar, Punjab. Learners should confirm current batch schedules and availability before enrolling." },
    { q: "What jobs can I pursue after learning Microsoft Azure?", a: "Azure skills can support career directions such as cloud support, cloud administration, cloud infrastructure, software development and DevOps-related roles. The exact job a learner can pursue depends on additional technical skills, experience and the requirements of the employer." },
    { q: "What salary can I expect after learning Azure?", a: "There is no single salary associated with Azure training because compensation varies according to experience, location, job role, technical skills and specialization. Azure should therefore be viewed as one component of a broader professional skill set rather than a guaranteed salary pathway." },
    { q: "Can Azure skills help with freelancing?", a: "Yes, Azure knowledge can be useful for freelancers working with applications, websites, hosting, cloud infrastructure or digital systems. Freelancing opportunities depend on the freelancer's complete technical skill set, portfolio and ability to deliver specific client requirements." },
    { q: "Which tools and technologies are relevant to Azure learning?", a: "Azure learning can involve the Microsoft Azure Portal and services related to computing, storage, networking, databases, identity and monitoring. The exact tools covered should be checked against the current Techcadd curriculum." },
    { q: "Is Azure useful for software developers?", a: "Yes, Azure can complement software development skills by helping developers understand cloud hosting, application deployment, storage, databases and other cloud-based components. Developers can then explore more specialized Azure services based on their application requirements." },
    { q: "Is Microsoft Azure useful for a career in DevOps?", a: "Yes, Azure can provide a useful cloud foundation for DevOps, but DevOps roles generally require additional knowledge of areas such as version control, automation, CI/CD, scripting, containers and infrastructure practices." },
    { q: "Can students from Punjab learn Microsoft Azure online?", a: "Yes, students and professionals across Punjab can learn Microsoft Azure online, while learners near Jalandhar can also explore the offline option available at Techcadd's Jalandhar centre." },
    { q: "Can students from Himachal Pradesh join the Azure course online?", a: "Yes, learners from Himachal Pradesh can join Microsoft Azure training online without needing a physical Techcadd centre in the state. This can be useful for students and professionals in areas such as Shimla, Solan and Dharamshala." },
    { q: "What Azure opportunities are available for learners from Haryana?", a: "Azure skills can complement IT, software, infrastructure and cloud-related career paths in Haryana, particularly for learners targeting technology and digitally operated businesses around areas such as Gurugram." },
    { q: "Can students from Rajasthan learn Microsoft Azure online?", a: "Yes, students and professionals from Rajasthan can learn Microsoft Azure online and build cloud skills alongside their existing education or IT experience. Learners around Jaipur can consider Azure as an additional specialization within a broader technology career path." },
    { q: "Is Microsoft Azure suitable for students from Uttar Pradesh?", a: "Yes, Microsoft Azure can be suitable for students and professionals from Uttar Pradesh who are interested in cloud computing, IT infrastructure, software development or related technology careers. Learners should select the learning depth according to their existing technical background." },
    { q: "Is Azure certification the same as completing an Azure course?", a: "No, completing a training course and earning a Microsoft certification are different things. Certification generally involves meeting the requirements of the relevant Microsoft certification process, so learners should verify the current certification requirements separately." },
  ],
  related: ["cloud-computing", "aws", "devops"],
  copy: {
    heading: { title: "Microsoft Azure Course", highlight: "Online + Offline", meta: "Microsoft Azure Course: Build Azure Cloud Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Microsoft Azure Course" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "A Microsoft Azure Course should build understanding progressively, beginning with cloud fundamentals and moving toward practical Azure services and workflows.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "A Microsoft Azure Course can be relevant to several types of learners because cloud platforms are used across software development, IT infrastructure, data services, application hosting and business technology. However, the learning path can vary considerably depending on a learner's existing technical background.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, IT and related technical disciplines can use Azure training to build cloud skills alongside their academic knowledge. Concepts such as servers, networking, databases, applications and operating systems become more practical when learners see how similar resources are created and managed in a cloud environment. Graduates who already understand programming or basic networking may find it easier to connect Azure services with application development and infrastructure concepts." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduate learners can use Azure knowledge to complement deeper technical or specialized studies. For someone pursuing software, IT, data or related fields, cloud skills can provide an additional practical area of expertise. Rather than learning cloud computing only theoretically, learners can explore how cloud resources are organized, deployed and managed." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals can consider Azure training when their current responsibilities involve infrastructure, software applications, databases, networking or technical operations. For an experienced professional, the objective may not be to start from zero. Instead, Azure can become an additional skill that connects existing experience with cloud-based environments." },
        { icon: "Shuffle", title: "Job Switchers", text: "Professionals considering a move toward cloud and IT infrastructure roles can use an Azure course to establish structured knowledge of cloud concepts. A career switch should still be approached realistically. Azure training alone does not automatically qualify someone for every cloud role. Relevant networking, operating-system, scripting, development or infrastructure knowledge may also be valuable depending on the target position." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers who build or manage websites, applications or digital systems can benefit from understanding cloud hosting and infrastructure concepts. Azure knowledge can help them better understand areas such as application deployment, storage, databases and cloud resources when working on technically demanding projects." },
        { icon: "Building2", title: "Business Owners", text: "Business owners working with software products or digital operations may also benefit from basic Azure knowledge. Understanding cloud infrastructure can help them communicate more effectively with developers and IT teams and make better-informed decisions about hosting and technology requirements. They do not necessarily need to pursue the same technical depth as someone preparing for a cloud engineering role." },
        { icon: "Compass", title: "Career Changers", text: "Someone moving from a non-IT background should first understand that cloud computing involves technical concepts. A beginner-friendly learning path should therefore start with fundamentals before moving into more advanced Azure services. People transitioning from networking, technical support, system administration or software-related work may have a particularly useful foundation." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can learn Azure, but starting with cloud fundamentals is important. Understanding basic concepts such as computing, networking, storage, operating systems and databases can make the Azure learning process much easier. A beginner does not need to know every Azure service before starting. The more important requirement is a willingness to understand technical concepts progressively." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass students interested in IT can explore Azure as an additional technology skill, although they may need more time to develop the foundational knowledge that graduates or experienced IT professionals already possess. For this group, Azure training can work best as part of a broader technical learning path rather than as an isolated skill." },
      ],
      need: "Basic understanding of computers, networking or IT concepts can be helpful but does not mean a beginner must already know Azure.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from cities such as Jalandhar, Ludhiana and Amritsar can use Azure learning to complement IT, software and digital-business interests. Online learning can also help students who are not near the Jalandhar centre." },
        { title: "Haryana", text: "Learners in Gurugram and other technology-oriented areas can connect Azure knowledge with the state's strong presence of IT services, MNCs, e-commerce and digitally operated businesses." },
        { title: "Himachal Pradesh", text: "Students and professionals from Himachal Pradesh can use online Azure learning to build cloud skills without depending on a local physical training centre, particularly when exploring remote or technology-focused career opportunities." },
        { title: "Chandigarh", text: "Learners in Chandigarh and the Tricity region can consider Azure as an additional technical skill alongside existing education or IT/BPO experience." },
        { title: "Delhi NCR", text: "Students and working professionals in Delhi, Noida and Ghaziabad can explore Azure training as part of a broader cloud and IT career strategy within a large technology and services market." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can use online training to access structured Azure education while developing skills that can be relevant beyond the local employment market." },
        { title: "Uttarakhand", text: "Students and professionals from Dehradun and other parts of Uttarakhand can learn Azure remotely and combine cloud skills with existing education, software or IT experience." },
        { title: "Rajasthan", text: "Learners from Jaipur and surrounding areas can use Azure training to strengthen their technology profile and explore cloud-related career directions without requiring a physical Techcadd centre in the state." },
        { title: "Uttar Pradesh", text: "Learners from Noida, Lucknow, Meerut and other cities can pursue Azure online as a way to build cloud skills alongside software, IT or other technical experience." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Cloud Computing Skills Are Increasingly Relevant", text: "Modern applications and digital services frequently depend on cloud infrastructure. Learning Azure gives students an opportunity to understand how computing resources, storage, networking and applications can operate within a cloud environment. For learners interested in cloud technology, this creates a structured way to move beyond basic definitions and understand how different cloud components work together." },
        { title: "Practical Understanding of Azure Services", text: "Azure is a large platform containing many services. A structured course can help learners understand the purpose of important service categories instead of trying to memorize an unconnected list of products. This can make it easier to understand concepts such as virtual machines, cloud storage, databases, networking and application hosting." },
        { title: "Builds a Foundation for Cloud Careers", text: "Azure knowledge can contribute to career paths related to cloud administration, cloud infrastructure, DevOps, technical support, software development and related IT functions. The specific role a learner can pursue depends on their broader skills and experience. Someone targeting a cloud engineering role, for example, may also need strong networking, operating-system, scripting and infrastructure knowledge." },
        { title: "Useful for Software Professionals", text: "Developers increasingly work with applications that run on cloud infrastructure. Azure knowledge can therefore complement programming skills by helping developers understand deployment environments, cloud-hosted applications, databases, storage and related services. This makes the course relevant not only to infrastructure-focused learners but also to software professionals who want broader technical awareness." },
        { title: "Supports Career Switching", text: "For professionals moving toward cloud computing, a structured Azure program can provide a defined learning path. Instead of attempting to learn dozens of cloud services independently, learners can progress from fundamental cloud concepts to Azure services and practical workflows. This can make the transition more organized, although additional hands-on practice remains important." },
        { title: "Develops Practical Problem-Solving Skills", text: "Cloud learning is not only about knowing what a service does. Learners also need to understand when a particular resource is appropriate and how different services interact. Working through practical exercises and cloud scenarios can therefore help develop technical decision-making and troubleshooting skills." },
        { title: "Relevant Across Different Industries", text: "Cloud technology is not restricted to one industry. Software companies, e-commerce businesses, financial services, education platforms, media organizations and many other digitally operated businesses can use cloud infrastructure. This broad applicability allows Azure skills to complement different professional backgrounds." },
        { title: "Creates a Base for Further Specialization", text: "Azure can be a starting point rather than the end of a cloud career path. After developing foundational knowledge, learners may choose to explore areas such as cloud administration, DevOps, cloud security, data services, application development or infrastructure automation depending on their interests and existing technical background." },
        { title: "Suitable for Progressive Learning", text: "Azure can appear complex because of the size of the platform, but learners do not need to understand everything at once. A structured progression from cloud fundamentals to core Azure services can make the subject more approachable. For beginners, this provides a clearer starting point. For experienced IT professionals, it can provide an organized way to fill gaps in existing cloud knowledge." },
        { title: "Helps Connect Theory With Modern IT Infrastructure", text: "Traditional IT concepts such as servers, networking, storage and databases remain important even when those resources are hosted through cloud platforms. Learning Azure can therefore help learners understand how familiar IT concepts are implemented and managed in a modern cloud environment. This connection between foundational knowledge and cloud technology is one of the key reasons an Azure course can be useful for students and professionals planning long-term IT careers." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "Modern Technology-Focused Learning Environment", text: "North India's first AI-powered and Robotics learning centre. For Microsoft Azure learners, a modern technology environment can help connect cloud concepts with the wider technology ecosystem. Exposure to AI, automation and emerging technologies can provide useful context as learners understand how cloud platforms support modern applications and digital systems. Learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh can access the learning program through the available online option, while learners near Jalandhar can consider offline learning." },
        { title: "Practical Approach to Cloud Learning", text: "Azure is easier to understand when learners can connect concepts with practical cloud scenarios. The learning approach should focus on understanding how Azure resources are used rather than simply memorizing service names. Practical exercises can help learners develop confidence with cloud concepts and understand how different services work together." },
        { title: "Industry-Relevant Azure Concepts", text: "The Azure ecosystem is broad, so a structured curriculum can focus learners on foundational services and concepts that are useful for understanding cloud environments. Topics can cover areas such as computing, storage, networking, databases, security and resource management, depending on the confirmed course structure." },
        { title: "Learning Path for Different Experience Levels", text: "Azure can be approached by beginners as well as learners who already have IT experience. A structured progression helps beginners build fundamentals while allowing experienced learners to connect Azure concepts with their existing technical knowledge. This makes the learning path relevant to graduates, working professionals and career changers." },
        { title: "Online + Offline Learning Options", text: "Learners who are able to attend the Jalandhar centre can explore the offline learning route, while students and professionals from other locations can learn online. This is particularly useful for learners across North Indian states who want structured Azure training without needing to relocate." },
        { title: "Career-Oriented Cloud Skills", text: "Learning Azure can support broader career development in areas such as cloud administration, infrastructure, DevOps, software development and technical support. The course should be viewed as one part of a career-building process, with additional skills and practical experience depending on the learner's intended role." },
        { title: "Foundation for Further Specialization", text: "Azure provides a foundation from which learners can explore more specialized cloud areas. Depending on their career goals, learners may later move toward cloud infrastructure, DevOps, cloud security, application deployment, data services or automation." },
        { title: "Support for Learners Beyond Jalandhar", text: "Students from outside Punjab do not need to be physically present at the Jalandhar centre to begin building Azure skills. Online learning can make the program accessible to learners across different states. This gives students and working professionals more flexibility when combining technical learning with their existing education or employment." },
      ],
    },
    tools: {
      title: "Tools, Services & Technologies",
      groups: [
        { area: "Management", tools: "Microsoft Azure Portal, Cloud resource management tools" },
        { area: "Compute", tools: "Azure Virtual Machines" },
        { area: "Storage", tools: "Azure Storage" },
        { area: "Networking", tools: "Azure Virtual Network" },
        { area: "Databases", tools: "Azure databases" },
        { area: "Identity", tools: "Azure identity and access services" },
        { area: "Monitoring", tools: "Azure monitoring tools" },
      ],
      note: "Depending on the confirmed Techcadd curriculum, relevant Azure learning may involve the Microsoft Azure Portal and Azure's core cloud services.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Azure skills can contribute to several technology career directions.",
      roles: directions.map((d) => d.title),
      notes: [
        ...directions,
        { title: "Industries Where Azure Skills Can Be Relevant", text: "Cloud technologies are used across many digitally enabled sectors, including IT services, software development, e-commerce, financial services, education technology, healthcare technology, media and digital services, and business technology. The actual responsibilities of an Azure professional depend on the organization, job role and level of experience." },
        { title: "Salary Context", text: "Azure-related salaries in India vary considerably based on job title, technical specialization, location, experience, certifications and existing IT skills. A beginner should therefore avoid treating a course as a guaranteed salary pathway. Entry-level learners may start in broader IT or cloud-support positions, while professionals with stronger infrastructure, development, DevOps or security experience may qualify for more specialized opportunities. For this reason, salary should be evaluated alongside the complete skill set required for the intended role rather than based on Azure training alone." },
      ],
      jobsTitle: "State-Wise Career Opportunities",
      jobs: [
        { title: "Punjab", text: "Azure skills can complement the IT and digital-business ecosystem in cities such as Jalandhar, Ludhiana and Mohali. Learners can use cloud knowledge alongside software, networking or support skills when exploring technology-oriented roles." },
        { title: "Haryana", text: "Gurugram's concentration of MNCs, IT services, e-commerce and digitally operated businesses creates a relevant environment for professionals building cloud and infrastructure skills. Azure can complement existing experience in systems, development or IT operations." },
        { title: "Chandigarh", text: "Learners in Chandigarh and the Tricity region can combine Azure knowledge with existing IT, BPO, software or technical-support experience. Cloud skills can become an additional specialization rather than replacing foundational IT knowledge." },
        { title: "Delhi NCR", text: "Delhi NCR provides a broad technology and services market where cloud knowledge can complement software development, infrastructure, support, DevOps and enterprise IT skills. Learners targeting Noida and Delhi-based opportunities can use Azure as part of a wider technical career strategy." },
        { title: "Uttar Pradesh", text: "Noida's technology and electronics ecosystem makes cloud knowledge relevant to learners pursuing software and IT-oriented careers. Azure can be particularly useful when combined with programming, networking or infrastructure knowledge." },
        { title: "Rajasthan", text: "For learners around Jaipur, Azure can provide an additional technology specialization alongside software development and IT skills. Online learning also allows professionals outside major technology centres to build cloud knowledge without requiring relocation." },
      ],
    },
    faqTitle: "Frequently Asked Questions",
    cta: {
      title: "Build Your Microsoft Azure Skills for a",
      highlight: "Cloud-Focused Career",
      text: "Cloud computing is becoming an important part of modern IT, software and digital infrastructure. A structured Microsoft Azure Course can help you understand cloud fundamentals, Azure services and practical concepts while building a stronger foundation for future cloud-related learning. Whether you are a beginner, graduate, working professional or looking to move toward cloud and DevOps, enquire about the current Microsoft Azure learning program and find the learning path that fits your background.",
    },
  },
};
