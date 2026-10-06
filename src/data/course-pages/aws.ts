import type { CoursePage } from "./types";

/* /courses/aws — long-form landing copy supplied by the client (used as given, section by section).
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample/template reviews for page
     development, not claims of genuine student experiences" to be published only after replacing them with verified
     learner feedback. The page keeps the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed based on the current Techcadd course schedule".
   - Tools: "The exact tools covered in a particular Techcadd delivery should be confirmed against the current course
     curriculum before publishing a fixed service list." (editor note, left out of the page).
   - FAQs 5, 6 and 12 still carry "should be confirmed" wording from the supplied text — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The supplied copy has no learning-outcomes list, project list or "what you get" list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO / AEO strategy notes) and the enquiry-form field list are not page content. */

const roles = [
  "Cloud Support Associate",
  "Cloud Administrator",
  "AWS Cloud Engineer",
  "Junior Cloud Engineer",
  "Cloud Infrastructure Engineer",
  "DevOps Engineer",
  "Systems Administrator",
  "Cloud Operations Associate",
  "Site Reliability-oriented roles",
  "Cloud-focused Software Developer",
  "Cloud Security-oriented roles",
];

export const aws: CoursePage = {
  slug: "aws",
  title: "AWS Cloud Course",
  navLabel: "AWS",
  group: "cyber-cloud",
  icon: "Cloud",
  tagline:
    "Understand how cloud computing works and how Amazon Web Services can be used to build, deploy, manage, and scale applications and IT infrastructure.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, job switchers, career changers, freelancers, and beginners with an interest in technology",
  overview: [
    "An AWS Cloud Course is designed to help learners understand how cloud computing works and how Amazon Web Services can be used to build, deploy, manage, and scale applications and IT infrastructure. The course can be useful for graduates, IT professionals, career changers, developers, system administrators, and beginners who want to build practical cloud skills.",
    "Depending on the learner's background, training can cover fundamental cloud concepts along with important AWS services, cloud security, storage, networking, computing, databases, monitoring, and deployment practices. Learners can also develop an understanding of how cloud environments are used in modern software and IT operations.",
    "For students and professionals in Punjab, AWS skills can be relevant to the region's growing IT, startup, service, and technology-driven business ecosystem. Techcadd offers learning from its Jalandhar, Punjab centre, while learners outside the area can use online learning options.",
    "The course is particularly relevant for people who want to move toward cloud-focused roles or add AWS knowledge to an existing technology skill set.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Cloud Computing Fundamentals",
      summary: "Learners begin by understanding what cloud computing means and why organisations use cloud infrastructure. Topics can include cloud service concepts, scalability, availability, infrastructure requirements, and the differences between traditional and cloud-based IT environments.",
      topics: [],
      outcome: "Learners should be able to explain fundamental cloud concepts and understand why cloud platforms are used for modern IT workloads.",
    },
    {
      title: "AWS Fundamentals",
      summary: "This module introduces the AWS ecosystem and the purpose of commonly used AWS services. Instead of simply memorising service names, learners should understand what each service is designed to accomplish and when it may be appropriate.",
      topics: [],
      outcome: "Learners should be able to identify appropriate AWS services for common cloud requirements.",
    },
    {
      title: "Compute",
      summary: "Compute services are central to cloud infrastructure. Learners can explore how applications and workloads run in AWS environments and understand concepts such as virtual servers, instances, scalability, and workload management.",
      topics: [],
      outcome: "Learners should understand the basic process of deploying and managing computing resources in AWS.",
    },
    {
      title: "Storage",
      summary: "Cloud storage is important for applications, backups, media, documents, datasets, and other digital assets. Learners can study AWS storage concepts and understand different approaches to storing and accessing data.",
      topics: [],
      outcome: "Learners should be able to distinguish between common cloud storage requirements and select an appropriate storage approach for a basic scenario.",
    },
    {
      title: "Networking",
      summary: "Cloud infrastructure depends heavily on networking. Learners can develop an understanding of virtual networks, connectivity, IP addressing, subnets, routing, and other fundamental networking concepts relevant to AWS environments.",
      topics: [],
      outcome: "Learners should understand how basic networking components fit together within a cloud environment.",
    },
    {
      title: "Databases",
      summary: "AWS provides services for different database requirements. Learners can explore the role of cloud databases and understand the distinction between different database approaches.",
      topics: [],
      outcome: "Learners should be able to recognise common database requirements and understand how cloud database services can support applications.",
    },
    {
      title: "Identity and Access Management",
      summary: "Security begins with controlling who can access cloud resources and what actions they are allowed to perform. Learners can study AWS identity and access concepts, permissions, users, roles, and policies.",
      topics: [],
      outcome: "Learners should understand the importance of least-privilege access and basic AWS permission management.",
    },
    {
      title: "Cloud Security",
      summary: "Security is an important part of every cloud environment. Learners can develop an understanding of secure access, resource protection, monitoring, and responsible cloud configuration.",
      topics: [],
      outcome: "Learners should be able to identify basic cloud security considerations and recognise common areas that require protection.",
    },
    {
      title: "Monitoring and Management",
      summary: "Cloud environments need to be monitored to understand performance, resource usage, availability, and operational issues. Learners can explore AWS monitoring and management concepts.",
      topics: [],
      outcome: "Learners should understand how monitoring contributes to maintaining reliable cloud infrastructure.",
    },
    {
      title: "Deployment and Application Hosting",
      summary: "Learners can explore how applications are moved into cloud environments and how AWS resources can support application hosting.",
      topics: [],
      outcome: "Learners should understand the basic workflow involved in deploying and operating an application using cloud infrastructure.",
    },
    {
      title: "Scalability and Availability",
      summary: "One of the major advantages of cloud computing is the ability to adapt infrastructure according to workload requirements. Learners can explore concepts such as scaling, availability, redundancy, and resilient architecture.",
      topics: [],
      outcome: "Learners should understand why scalable and highly available architectures are important for production workloads.",
    },
    {
      title: "Practical Cloud Projects",
      summary: "The learning process can be reinforced through practical exercises and projects involving AWS resources. Project work may include deploying a basic application, configuring storage, establishing access controls, working with databases, or monitoring cloud resources.",
      topics: [],
      outcome: "Learners should be able to demonstrate practical understanding rather than relying solely on theoretical knowledge.",
    },
  ],
  tools: ["Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon VPC", "AWS IAM", "Amazon CloudWatch", "AWS Lambda", "Amazon DynamoDB", "Elastic Load Balancing", "Auto Scaling", "AWS CloudFormation", "AWS CLI", "Linux", "Git/GitHub"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is an AWS Cloud Course?", a: "An AWS Cloud Course teaches the fundamentals of cloud computing and how AWS services can be used for computing, storage, networking, databases, security, monitoring, and application deployment." },
    { q: "Who is eligible for an AWS Cloud Course?", a: "Graduates, postgraduates, working professionals, job switchers, career changers, freelancers, and beginners with an interest in technology can consider an AWS Cloud Course. Learners without a technical background may need additional time to build IT fundamentals." },
    { q: "Is an AWS Cloud Course suitable for beginners?", a: "Yes, an AWS Cloud Course can be suitable for beginners when the learning path starts with cloud and IT fundamentals before progressing into AWS services and practical concepts." },
    { q: "What does an AWS Cloud Course syllabus include?", a: "An AWS Cloud Course can cover cloud fundamentals, AWS services, compute, storage, networking, databases, IAM, security, monitoring, deployment, scalability, availability, and practical cloud projects." },
    { q: "How long does an AWS Cloud Course take?", a: "The duration depends on the specific training schedule and curriculum. An exact course duration should be confirmed with Techcadd rather than assumed from the general AWS syllabus." },
    { q: "What are the fees for an AWS Cloud Course?", a: "AWS Cloud Course fees depend on the training format, curriculum, duration, and institute. The current Techcadd fee should be confirmed directly before publishing a specific amount." },
    { q: "Can I learn AWS Cloud online?", a: "Yes, AWS Cloud can be learned online, including through live online training, practical demonstrations, exercises, and cloud-based practice environments where available." },
    { q: "Is offline AWS Cloud training available?", a: "Offline learning is available through the stated Techcadd learning model at its Jalandhar, Punjab centre. Learners from other locations can use the online option rather than assuming a physical Techcadd centre exists in their city." },
    { q: "What jobs can I pursue after learning AWS?", a: "AWS skills can support roles such as Cloud Support Associate, Cloud Administrator, Cloud Engineer, Cloud Operations Associate, and DevOps-oriented roles, depending on the learner's experience and additional technical skills." },
    { q: "What is the salary after an AWS Cloud Course in India?", a: "There is no single salary figure for AWS-trained professionals in India. Compensation varies substantially according to experience, job role, location, technical skills, organisation, and additional certifications or expertise." },
    { q: "Can AWS skills help with freelancing?", a: "Yes, AWS skills can support certain freelance services, including cloud hosting, application deployment, infrastructure configuration, monitoring, and related technical work. Successful freelancing also requires broader technical and client-management abilities." },
    { q: "Which AWS tools and services can I learn?", a: "An AWS learning path can introduce services such as EC2, S3, RDS, VPC, IAM, CloudWatch, Lambda, DynamoDB, Elastic Load Balancing, Auto Scaling, CloudFormation, and the AWS CLI. The exact services covered should be confirmed against the current course curriculum." },
    { q: "Can students from Punjab join an AWS Cloud Course online?", a: "Yes, students from Punjab can learn AWS Cloud online. Online learning can be useful for learners from cities such as Ludhiana, Amritsar, Patiala, and other parts of the state who want to develop cloud skills without relocating." },
    { q: "Can students from Haryana learn AWS Cloud online?", a: "Yes, students from Haryana can join AWS Cloud training online. The option can be useful for learners balancing education or employment while developing cloud skills relevant to the state's IT, MNC, e-commerce, logistics, and technology ecosystem." },
    { q: "Can students from Himachal Pradesh learn AWS Cloud online?", a: "Yes, students from Himachal Pradesh can learn AWS Cloud online. This can be particularly convenient for learners in areas such as Shimla, Solan, and Dharamshala who prefer location-flexible technical training." },
    { q: "Can students from Rajasthan learn AWS Cloud online?", a: "Yes, students from Rajasthan can learn AWS Cloud online. Learners in Jaipur and other parts of the state can use online training to develop cloud skills while continuing their studies or professional commitments." },
    { q: "Is AWS Cloud suitable for students from Uttar Pradesh?", a: "Yes, AWS Cloud can be suitable for students from Uttar Pradesh who are interested in technology and cloud computing. Learners can build AWS knowledge alongside complementary skills such as Linux, networking, programming, databases, and DevOps." },
    { q: "What is the career scope after learning AWS?", a: "AWS has broad career relevance because cloud infrastructure is used across software, IT services, e-commerce, fintech, SaaS, digital businesses, and other technology-driven industries. Career progression depends on combining AWS knowledge with practical experience and complementary technical skills." },
    { q: "Is AWS certification necessary for a cloud career?", a: "AWS certification is not the only route to a cloud career. Practical skills, technical fundamentals, projects, professional experience, and relevant certifications can all contribute to a learner's profile, depending on the role being targeted." },
    { q: "Can a non-IT graduate learn AWS Cloud?", a: "Yes, a non-IT graduate can learn AWS Cloud, although building foundational knowledge of computers, networking, operating systems, and other IT concepts may make the learning process easier." },
  ],
  related: ["cloud-computing", "devops", "microsoft-azure"],
  copy: {
    heading: { title: "AWS Cloud Course", highlight: "Online + Offline", meta: "AWS Cloud Course: Build Practical AWS Cloud Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "AWS Cloud Course: Build Practical Cloud Skills" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "Course Modules" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "An AWS Cloud Course can suit learners with different educational and professional backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology, software, engineering, mathematics, or related backgrounds can use AWS training to develop cloud-focused skills alongside their academic knowledge. For fresh graduates, learning cloud infrastructure can provide an additional technical area to explore when preparing for entry-level IT opportunities. Graduates from non-technical disciplines can also consider the course if they are planning a technology-oriented career change, although they may need additional time to become comfortable with networking, operating systems, databases, and other fundamentals." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who already have exposure to IT, software development, networking, data, or related technologies can use AWS training to expand their existing technical profile. Cloud knowledge can complement skills such as programming, database management, DevOps, cybersecurity, and system administration." },
        { icon: "Briefcase", title: "Working Professionals", text: "Working IT professionals may learn AWS to strengthen their existing responsibilities or move toward cloud-oriented work. For example, someone working in development, system administration, networking, infrastructure, or technical support may find cloud skills relevant to their career progression. AWS knowledge can also help professionals understand how traditional infrastructure concepts translate into cloud environments." },
        { icon: "Shuffle", title: "Job Switchers", text: "For professionals considering a move into cloud computing, an AWS course can provide a structured way to learn the concepts and technologies involved. Job switchers should approach the transition realistically: completing training is only one part of becoming job-ready. Hands-on practice, projects, foundational IT knowledge, and relevant experience can also matter." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers working with websites, applications, software development, or IT services can benefit from understanding cloud infrastructure. AWS knowledge may help them communicate more effectively with clients and work on cloud-related implementation or maintenance tasks where their broader technical skills are relevant." },
        { icon: "Building2", title: "Business Owners", text: "Business owners and technology-focused entrepreneurs can learn AWS to better understand cloud infrastructure decisions. Knowledge of cloud services can help them have more informed conversations with developers, IT teams, and technology vendors about hosting, scalability, storage, security, and infrastructure requirements." },
        { icon: "Compass", title: "Career Changers", text: "People moving from another professional field into IT can consider AWS as part of a broader cloud-computing learning path. Beginners should first become comfortable with computer fundamentals and then progressively build knowledge of networking, operating systems, cloud concepts, and AWS services." },
        { icon: "Rocket", title: "Beginners", text: "AWS can be learned by beginners, but cloud computing should not be treated as a purely theoretical subject. Beginners benefit from learning concepts step by step and practising what they learn in a suitable AWS environment. Someone with no technical background may initially find terms such as compute instances, networking, storage, permissions, databases, and cloud architecture unfamiliar. A structured course can make these concepts easier to approach by introducing them progressively." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass students who are interested in technology can explore AWS as part of a longer-term IT learning pathway. However, students at this stage should understand that cloud careers often require broader technical foundations as they progress. Building knowledge of computers, networking, Linux, programming, and databases alongside AWS can create a stronger foundation." },
      ],
      need: "A specific technical degree is not necessarily the only factor that determines whether someone can learn AWS; interest in technology, willingness to practise, and a basic understanding of computers can be more important starting points.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can use online AWS training to build cloud skills without needing to relocate. This can be relevant for students and professionals exploring IT and startup opportunities in cities such as Ludhiana, Jalandhar, Mohali, and Amritsar." },
        { title: "Haryana", text: "Students and working professionals from Haryana can study AWS online while continuing their education or employment. Cloud knowledge can complement the technology needs of IT services, e-commerce, logistics, automobile, and MNC-driven business environments in the state." },
        { title: "Himachal Pradesh", text: "Learners from Himachal Pradesh can use online learning to access cloud training while remaining in locations such as Shimla, Dharamshala, or Solan. Remote learning can be particularly practical for professionals and students who prefer not to relocate for technical training." },
        { title: "Chandigarh", text: "Chandigarh-based learners can combine AWS training with the region's IT, BPO, education, startup, and technology-oriented opportunities. Online learning also provides flexibility for working professionals." },
        { title: "Delhi NCR", text: "Students and professionals from Delhi NCR can use AWS training to strengthen their technology profiles while targeting the region's large IT, fintech, e-commerce, media, agency, and software ecosystem. Online learning can fit around existing work or education commitments." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can use online AWS training to develop cloud skills without depending on local availability of specialized classroom programs. This can be useful for students, remote workers, and professionals exploring technology careers." },
        { title: "Uttarakhand", text: "Students and professionals from Dehradun, Haridwar, and other parts of Uttarakhand can learn AWS online while continuing their existing studies or employment. Cloud skills can complement technology-related opportunities connected with education, pharma, services, and other sectors." },
        { title: "Rajasthan", text: "Learners from Rajasthan, particularly Jaipur and surrounding areas, can use online AWS training to add cloud skills to an existing IT or technical profile. Online learning can also support professionals who want to develop technology skills without changing their location." },
        { title: "Uttar Pradesh", text: "Students and professionals from Uttar Pradesh can use online AWS training to build cloud knowledge relevant to IT, electronics, software, retail, and technology-enabled businesses. Learners in cities such as Lucknow and Meerut can study remotely while continuing other commitments." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Build Practical Cloud Skills", text: "Cloud computing is increasingly part of modern software and IT infrastructure. Learning AWS can help students understand how computing resources, storage, databases, networking, security, and applications can be managed through cloud platforms rather than relying exclusively on traditional physical infrastructure. A practical learning approach can help learners move beyond memorising service names and understand how different cloud components work together." },
        { title: "Understand AWS Services", text: "AWS provides a broad collection of cloud services. An AWS-focused program gives learners a structured way to understand the purpose of commonly used services and how they fit into real-world cloud environments. This knowledge can be useful for learners who want to continue toward cloud administration, development, DevOps, infrastructure, or other technology specialisations." },
        { title: "Develop Job-Relevant Skills", text: "AWS knowledge can complement technical skills required in roles associated with cloud infrastructure and IT operations. Depending on prior experience and additional skills, learners may explore career paths related to cloud support, cloud administration, system administration, cloud engineering, DevOps, or application development. The course itself should be viewed as a foundation rather than a guarantee of employment." },
        { title: "Support Career Switching", text: "Professionals from networking, system administration, software development, technical support, or related areas may use AWS learning as part of a transition toward cloud-oriented responsibilities. For a successful career switch, AWS knowledge should ideally be combined with practical projects and an understanding of the underlying technologies rather than treated as an isolated certification or skill." },
        { title: "Improve Technical Understanding", text: "AWS training can bring together several important IT concepts, including computing, networking, storage, databases, access management, monitoring, and security. Understanding how these areas interact can give learners a broader view of modern IT infrastructure and help them make better technical decisions." },
        { title: "Create Project Opportunities", text: "Cloud-based projects can provide useful practical experience for learners. Examples might include deploying an application, configuring cloud storage, setting up appropriate access controls, working with databases, monitoring resources, or creating a basic cloud-based architecture. Projects can help demonstrate what a learner can actually do rather than relying only on a list of completed topics." },
        { title: "Useful for Freelance and Business Work", text: "Cloud knowledge can be valuable for freelancers and technology-focused business owners who work with websites, applications, hosting, or IT services. Understanding AWS can make it easier to discuss infrastructure requirements and identify appropriate cloud-based approaches. The exact freelance opportunities will depend on the learner's broader technical abilities and ability to deliver services independently." },
        { title: "Relevant to Long-Term Cloud Careers", text: "Cloud computing is not limited to one job title. As learners progress, AWS knowledge can become part of broader paths involving cloud engineering, DevOps, infrastructure automation, security, architecture, or application development. This makes AWS particularly useful as a foundation that can be expanded with Linux, networking, programming, databases, automation, security, and other complementary skills." },
        { title: "Suitable for Different Starting Points", text: "The program can be approached by beginners as well as learners who already have IT experience, provided the learning path is adapted to their existing knowledge. Beginners may need more time with fundamentals, while experienced IT professionals can move more quickly into AWS-specific concepts. For learners in Punjab and other North Indian states, online learning also makes it possible to build AWS skills without relocating, while learners near Jalandhar can consider the available offline learning option at the Techcadd centre." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "Techcadd describes its learning environment as “North India's first AI-powered and Robotics learning centre”. For AWS Cloud learners, the broader benefit is exposure to a technology-focused environment where cloud computing can be understood alongside modern technology concepts. AI workloads, applications, automation, and connected systems increasingly depend on scalable computing infrastructure, making cloud knowledge a useful complementary skill. For learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh, online learning can provide access to this course without requiring relocation to Jalandhar." },
        { title: "Practical Cloud Learning", text: "AWS is best understood through practical work rather than theory alone. Learners can work through cloud concepts and develop familiarity with how computing, storage, networking, databases, security, and monitoring operate within a cloud environment. A practical approach can make technical concepts easier to understand and gives learners opportunities to apply what they study." },
        { title: "Course Content Aligned With Cloud Skills", text: "A useful AWS learning path should cover the major concepts that learners encounter when working with cloud infrastructure. These can include cloud fundamentals, AWS services, identity and access management, storage, networking, databases, security, monitoring, and deployment concepts. This structure helps learners gradually move from understanding individual services to understanding how they work together." },
        { title: "Learning for Different Experience Levels", text: "AWS learners do not all begin with the same background. A graduate entering IT, an experienced system administrator, a developer, and a career changer may require different levels of support. A structured learning approach can help beginners establish the fundamentals while allowing learners with existing IT experience to connect AWS concepts with technologies they already understand." },
        { title: "Online + Offline Flexibility", text: "Techcadd's course model supports both online and offline learning. Learners who are able to attend in person can learn through the Jalandhar, Punjab centre, while students and professionals outside the area can pursue the course online. This is particularly useful for learners in states where relocating for specialized training may not be practical." },
        { title: "Project-Oriented Skill Development", text: "Cloud skills become more meaningful when learners can apply them to practical scenarios. AWS learning can involve activities such as deploying applications, configuring storage, managing access, working with databases, monitoring resources, and understanding basic cloud architectures. Projects can also help learners explain their technical abilities more clearly when discussing their skills with employers or clients." },
        { title: "Useful Foundation for Career Growth", text: "AWS can form part of several technology career paths. Depending on their existing skills, learners can progress toward areas such as cloud administration, cloud engineering, DevOps, infrastructure, software development, or cloud security. The course should therefore be viewed as a foundation that can be expanded with complementary skills such as Linux, networking, programming, automation, databases, and security." },
        { title: "Accessible to Learners Outside Punjab", text: "Students from Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh do not need to relocate to Jalandhar to pursue the learning path. Online learning can allow them to develop AWS skills while continuing college, employment, freelancing, or other responsibilities." },
      ],
    },
    tools: {
      title: "Tools, Services & Technologies",
      columns: ["Tool / Service", "Used for"],
      groups: [
        { area: "Amazon EC2", tools: "Cloud computing and virtual server infrastructure" },
        { area: "Amazon S3", tools: "Object storage" },
        { area: "Amazon RDS", tools: "Managed relational databases" },
        { area: "Amazon VPC", tools: "Virtual networking" },
        { area: "AWS IAM", tools: "Identity and access management" },
        { area: "Amazon CloudWatch", tools: "Monitoring and observability" },
        { area: "AWS Lambda", tools: "Serverless computing" },
        { area: "Amazon DynamoDB", tools: "Managed NoSQL database" },
        { area: "Elastic Load Balancing", tools: "Distributing application traffic" },
        { area: "Auto Scaling", tools: "Adapting compute capacity to workload requirements" },
        { area: "AWS CloudFormation", tools: "Infrastructure deployment and management" },
        { area: "AWS CLI", tools: "Command-line interaction with AWS services" },
        { area: "Linux", tools: "An important complementary technology for many cloud and infrastructure roles" },
        { area: "Git/GitHub", tools: "Useful complementary tools for software and DevOps workflows" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "AWS skills can support several technology career directions, although the appropriate role depends on a learner's broader technical knowledge and experience.",
      roles,
      rolesNote: "Learners should not assume that completing an AWS course automatically qualifies them for every role above. More advanced positions generally require additional experience and skills in areas such as Linux, networking, programming, automation, containers, security, and infrastructure as code.",
      notes: [
        { title: "Industries", text: "Cloud skills can be relevant across industries including IT services, software development, SaaS, e-commerce, fintech, media and digital businesses, education technology, healthcare technology, startups, enterprise technology and digital services." },
        { title: "Career Progression", text: "A learner might begin with foundational cloud knowledge and progress toward cloud support or infrastructure responsibilities. With experience and additional technical skills, they can move toward cloud engineering, DevOps, architecture, security, automation, or specialised infrastructure roles." },
        { title: "Freelancing", text: "AWS knowledge can complement freelance services involving websites, application deployment, hosting, cloud migration support, infrastructure configuration, monitoring, and technical consulting. However, freelancers need broader technical and client-management skills to deliver these services independently." },
        { title: "Future Relevance", text: "Cloud computing is closely connected with modern software development, data platforms, AI applications, automation, and digital infrastructure. Developing AWS skills can therefore provide a foundation that learners can expand as technology requirements evolve." },
      ],
      jobsTitle: "State-Wise Career Opportunities",
      jobs: [
        { title: "Punjab", text: "AWS learners in Punjab can build cloud skills alongside the state's IT, startup, service, manufacturing, and technology-enabled business ecosystem. Learners in Jalandhar, Ludhiana, Mohali, and other cities can use cloud knowledge as an additional technical skill for IT-oriented career paths or remote opportunities." },
        { title: "Haryana", text: "Haryana offers a particularly relevant environment for cloud skills through its IT services, MNCs, e-commerce, logistics, and automobile-related businesses. Learners in Gurugram and surrounding areas can combine AWS with software development, networking, DevOps, or infrastructure skills." },
        { title: "Delhi NCR", text: "Delhi NCR has a broad technology and services ecosystem covering IT, fintech, e-commerce, media, agencies, and software companies. AWS skills can complement existing technical profiles for learners targeting cloud-related opportunities in Delhi, Noida, Ghaziabad, and the wider NCR region." },
        { title: "Chandigarh", text: "For learners in Chandigarh and the Tricity region, AWS can complement opportunities associated with IT services, BPO, education, startups, and technology-driven businesses. Online learning can also suit working professionals who need flexibility." },
        { title: "Uttar Pradesh", text: "Uttar Pradesh offers varied technology opportunities, particularly around Noida and other growing business centres. AWS can complement skills used in software, electronics, IT services, retail technology, and digital businesses. Learners from Lucknow and Meerut can also pursue the course online while building broader technical skills." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online AWS training can be particularly useful because cloud careers can support remote and location-flexible work. Students and professionals in Shimla, Solan, Dharamshala, and other areas can combine AWS with programming, networking, or DevOps skills to broaden their opportunities." },
      ],
    },
    faqTitle: "Frequently Asked Questions About the AWS Cloud Course",
    cta: {
      title: "Build Your AWS Cloud Skills for the Next Step in Your",
      highlight: "IT Career",
      text: "Cloud computing is becoming an important part of modern IT infrastructure, software development, and digital business. If you want to understand AWS and develop practical cloud skills, an AWS Cloud Course can give you a structured starting point. Whether you are a graduate, working professional, career changer, freelancer, or beginner exploring cloud technology, enquire about the program to understand the current curriculum, learning schedule, eligibility, and available training format.",
    },
  },
};
