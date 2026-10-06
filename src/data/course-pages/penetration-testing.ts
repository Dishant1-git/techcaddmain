import type { CoursePage } from "./types";

/* /courses/penetration-testing — NEW page with the client's long-form copy (used as given, section by section).
   The client asked for this content on "the penetration testing course page under the Courses dropdown" and for NO
   navigation changes — but no such page or dropdown link existed, so this is a new page WITHOUT a Courses ▾ link (it is
   reachable from the /courses hub, the sitemap and related-course cards). The Ethical Hacking page is untouched.
   Points to CONFIRM with the client:
   - Should this page get a Courses ▾ Cyber & Cloud link? (Ethical Hacking later received its own separate copy, so this
     content was not meant to replace that page.)
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts for
     CMS/content planning" that "should be replaced with genuine student feedback before publication". The page shows the
     shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "Contact Techcadd for the current course duration".
   - FAQs 6 and 7 still carry "not established by the supplied course information" wording — replace with real answers.
   - Tools are worded "may include" — confirm the tool list actually taught.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The supplied copy has no learning-outcomes or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy) and the enquiry-form field list are not page content. */

const roles = [
  "Penetration Tester",
  "Junior Penetration Tester",
  "Vulnerability Assessment Analyst",
  "Security Tester",
  "Application Security Tester",
  "Cybersecurity Analyst",
  "Security Consultant",
  "Information Security Analyst",
];

const authorised = "Tools should be used only against systems where the learner has explicit authorization to test.";

export const penetrationTesting: CoursePage = {
  slug: "penetration-testing",
  title: "Penetration Testing Course",
  navLabel: "Penetration Testing",
  group: "cyber-cloud",
  icon: "Bug",
  tagline:
    "Learn how authorized security testing works, understand vulnerabilities, explore industry-relevant security tools, and develop a stronger foundation for pursuing cybersecurity opportunities.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, IT professionals, career changers, cybersecurity learners, and beginners with an interest in technology",
  overview: [
    "A Penetration Testing Course helps learners understand how authorized security testing is used to identify, assess, and document vulnerabilities in systems, networks, web applications, and other digital environments. The subject combines cybersecurity concepts with practical security-testing techniques and requires learners to think from both an attacker’s and defender’s perspective.",
    "The course can be useful for graduates, cybersecurity learners, IT professionals, career changers, and beginners who want to develop practical skills in offensive security. Learners can expect to study areas such as reconnaissance, vulnerability assessment, network security testing, web application security, authentication weaknesses, security tools, reporting, and responsible testing practices.",
    "For learners in Punjab, penetration testing can complement broader IT and cybersecurity career preparation. Students looking for classroom-based learning can explore the Jalandhar centre, while learners from other locations can consider online learning where available.",
    "The focus should remain on authorized security testing: understanding vulnerabilities, validating security weaknesses safely, documenting findings, and communicating remediation recommendations rather than performing unauthorized attacks.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Cybersecurity & Penetration Testing Fundamentals",
      summary: "Learners begin by understanding the purpose of penetration testing and how it fits into cybersecurity.",
      topics: ["Cybersecurity fundamentals", "Penetration testing concepts", "Vulnerability assessment vs penetration testing", "Types of penetration testing", "Security testing methodologies", "Legal and ethical considerations", "Authorization and scope", "Responsible disclosure", "Basic security terminology"],
      outcome: "Learners should be able to explain the purpose of penetration testing, identify its role within cybersecurity, and understand why authorization and defined testing scope are essential.",
    },
    {
      title: "Networking Fundamentals for Security",
      summary: "Networking knowledge is an important foundation for penetration testing.",
      topics: ["IP addressing", "MAC addresses", "TCP/IP", "OSI model", "Ports and protocols", "DNS", "DHCP", "HTTP and HTTPS", "Network services", "Firewalls", "Network traffic fundamentals"],
      outcome: "Learners should be able to understand how devices communicate across networks and identify the networking concepts that are relevant when assessing system security.",
    },
    {
      title: "Reconnaissance and Information Gathering",
      summary: "Reconnaissance is an important stage of a penetration-testing workflow.",
      topics: ["Information gathering", "Target enumeration", "Domain and DNS information", "Service discovery", "Network reconnaissance", "Asset identification", "Passive and active reconnaissance concepts"],
      outcome: "Learners should understand how security testers collect relevant information about an authorized target before conducting further security testing.",
    },
    {
      title: "Vulnerability Assessment",
      summary: "Learners can then move from information gathering toward identifying potential weaknesses.",
      topics: ["Vulnerability concepts", "Common security weaknesses", "Vulnerability identification", "Risk assessment", "Vulnerability validation", "False positives", "Prioritization of findings"],
      outcome: "Learners should be able to interpret potential vulnerabilities, understand their security implications, and distinguish between a suspected issue and a properly validated finding.",
    },
    {
      title: "Network Penetration Testing",
      summary: "This area introduces security testing against authorized network environments.",
      topics: ["Network enumeration", "Service identification", "Port analysis", "Network security weaknesses", "Authentication-related weaknesses", "Controlled exploitation concepts", "Post-testing documentation"],
      outcome: "Learners should understand how network security assessments are structured and how findings can be documented for remediation.",
    },
    {
      title: "Web Application Security Testing",
      summary: "Web applications are an important area of cybersecurity testing.",
      topics: ["Web application architecture", "HTTP requests and responses", "Authentication", "Session management", "Input validation", "Access-control weaknesses", "Common web vulnerabilities", "Security testing methodology"],
      outcome: "Learners should be able to analyze common web-application security weaknesses in controlled environments and understand how such findings can affect application security.",
    },
    {
      title: "Operating System Security",
      summary: "Penetration testers need familiarity with operating systems because many security assessments involve servers, endpoints, and system services.",
      topics: ["Linux fundamentals", "Windows security concepts", "Users and permissions", "Processes and services", "File systems", "System configuration", "Security controls", "Privilege-related concepts"],
      outcome: "Learners should become more comfortable navigating security-relevant operating-system environments and understanding how configuration and permissions affect security.",
    },
    {
      title: "Penetration Testing Tools",
      summary: `Tools can help security professionals automate discovery, analyze traffic, inspect applications, and validate vulnerabilities. However, learners should understand the underlying concepts rather than relying entirely on automated tools. ${authorised}`,
      topics: [
        "Nmap — network discovery and service enumeration",
        "Wireshark — network traffic analysis",
        "Burp Suite — web application security testing",
        "Metasploit Framework — controlled penetration-testing and exploitation framework",
        "Kali Linux — security-focused Linux environment",
        "Gobuster — directory and resource enumeration",
        "Nikto — web-server security assessment",
        "OWASP ZAP — web application security testing",
      ],
      outcome: "Learners should understand what different penetration-testing tools are designed to accomplish and how they fit into an authorized security-assessment workflow.",
    },
    {
      title: "Reporting and Documentation",
      summary: "Technical testing is only one part of professional penetration testing. Communicating the findings clearly is equally important.",
      topics: ["Recording evidence", "Describing vulnerabilities", "Explaining potential impact", "Risk classification", "Reproduction steps", "Remediation recommendations", "Executive-level reporting", "Technical reporting"],
      outcome: "Learners should be able to turn technical findings into understandable security reports that explain the issue, its potential impact, and possible remediation.",
    },
  ],
  tools: ["Nmap", "Wireshark", "Burp Suite", "Metasploit Framework", "Kali Linux", "Gobuster", "Nikto", "OWASP ZAP"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Penetration Testing Course?", a: "A Penetration Testing Course teaches learners how authorized security testing is performed to identify, assess, validate, and document vulnerabilities in systems, networks, and applications." },
    { q: "Who is eligible for a penetration testing course?", a: "Graduates, IT professionals, career changers, cybersecurity learners, and beginners with an interest in technology can explore a penetration testing course. Basic knowledge of computers and networking can make the learning process easier." },
    { q: "Is penetration testing suitable for beginners?", a: "Yes, penetration testing can be studied by beginners when the learning path starts with cybersecurity, networking, operating-system, and web fundamentals before progressing to more advanced security-testing concepts." },
    { q: "What does a penetration testing course syllabus include?", a: "A penetration testing syllabus can include cybersecurity fundamentals, networking, reconnaissance, vulnerability assessment, network security testing, web application security, operating-system security, security tools, testing methodology, and penetration-testing reporting." },
    { q: "What tools are used in penetration testing?", a: "Commonly used penetration-testing tools and technologies include Nmap, Wireshark, Burp Suite, Metasploit Framework, Kali Linux, Gobuster, Nikto, and OWASP ZAP. Their use should always be limited to authorized security-testing environments." },
    { q: "How long does a penetration testing course take?", a: "The exact duration depends on the training structure and schedule of the institute. The available course information does not establish a specific duration, so learners should confirm the current schedule before enrollment." },
    { q: "What are the fees for a penetration testing course?", a: "The exact course fee is not established by the supplied course information. Learners should contact Techcadd for the current fee structure, available batches, and applicable learning options." },
    { q: "Can I learn penetration testing online?", a: "Yes, penetration testing can be learned online through structured instruction and controlled practical environments. Online learning can allow students from different states to study without relocating." },
    { q: "Is offline penetration testing training available?", a: "Offline learning can be explored at the Techcadd centre in Jalandhar, Punjab, subject to the availability of the relevant batch and current course schedule." },
    { q: "What jobs can I pursue after learning penetration testing?", a: "Depending on your overall technical skills and experience, penetration-testing knowledge can contribute to career paths such as Penetration Tester, Security Tester, Vulnerability Assessment Analyst, Application Security Tester, Cybersecurity Analyst, and Security Consultant." },
    { q: "What is the salary after learning penetration testing?", a: "There is no single salary associated with completing a penetration testing course. Compensation varies according to role, experience, technical skills, location, employer, and other qualifications. Learners should treat salary figures as market-dependent rather than guaranteed outcomes." },
    { q: "Can penetration testing be used for freelancing?", a: "Yes, experienced cybersecurity professionals can explore authorized security assessments and consulting as freelance opportunities. Freelancers must have explicit client authorization and clearly defined testing scope before performing security tests." },
    { q: "Can students from Punjab join a penetration testing course?", a: "Yes, students from Punjab can explore both online learning and the Jalandhar-based learning option, depending on the current course delivery and batch availability." },
    { q: "Can students from Haryana learn penetration testing online?", a: "Yes, students and working professionals from Haryana can learn penetration testing online without needing to relocate to Jalandhar." },
    { q: "Can students from Himachal Pradesh join the course online?", a: "Yes, students from Himachal Pradesh can use online learning to study penetration testing while continuing their education or professional commitments." },
    { q: "Can students from Rajasthan learn penetration testing online?", a: "Yes, learners from Rajasthan can study penetration testing online and develop cybersecurity skills without needing to relocate." },
    { q: "Is penetration testing suitable for students from Uttar Pradesh?", a: "Yes, students from Uttar Pradesh can explore penetration testing as a cybersecurity specialization, particularly after developing basic knowledge of networking, operating systems, and computer security." },
    { q: "Do I need a cybersecurity degree to learn penetration testing?", a: "No, a cybersecurity degree is not necessarily required to begin learning penetration testing. However, understanding computers, networking, operating systems, and basic security concepts can make the subject easier to learn." },
    { q: "Is penetration testing the same as ethical hacking?", a: "Penetration testing and ethical hacking are closely related, but they are not always identical terms. Penetration testing generally refers to a structured, authorized security assessment conducted within a defined scope, while ethical hacking can be used more broadly to describe authorized security-focused hacking activities." },
    { q: "Is penetration testing legal?", a: "Penetration testing is legal when it is performed with appropriate authorization and within the agreed testing scope. Testing systems without permission can create legal and security consequences, so learners should practice only in authorized environments." },
  ],
  related: ["ethical-hacking", "network-security", "soc-analyst"],
  copy: {
    heading: { title: "Penetration Testing Course", highlight: "Online + Offline", meta: "Penetration Testing Course: Authorized Security Testing Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Penetration Testing Course" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "Course Learning Structure",
      text: "A penetration testing program should combine cybersecurity fundamentals with controlled practical exercises. The exact curriculum can vary according to the training structure, but the following areas represent a logical learning pathway for this subject.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "Penetration testing is a specialized cybersecurity skill, but learners can approach it from different educational and professional backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, IT, engineering, or related backgrounds can use penetration testing to develop a more specialized cybersecurity skill set. Their existing understanding of operating systems, programming, databases, and networks can make it easier to understand security-testing concepts. Graduates from other disciplines can also explore the field if they are prepared to build foundational IT and networking knowledge alongside the penetration testing curriculum." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates looking to specialize in cybersecurity can use penetration testing as a practical area of study. It can help connect theoretical security concepts with the process of identifying vulnerabilities, assessing risk, and preparing technical findings. Learners with postgraduate qualifications in IT or computer-related subjects may already have useful technical foundations, while others may need additional time to become comfortable with networking and operating-system concepts." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals who already work with networks, systems, applications, cloud environments, or technical support may find penetration testing relevant to their professional development. For example, someone working in networking or system administration can use security testing knowledge to better understand how vulnerabilities affect infrastructure. Developers can also benefit from learning how applications are assessed from a security perspective." },
        { icon: "Shuffle", title: "Job Switchers", text: "Professionals considering a move into cybersecurity can explore penetration testing as one possible specialization within the wider security field. A career switcher should not expect the course alone to replace foundational knowledge. Building familiarity with networking, Linux, Windows, web technologies, scripting, and security concepts can make the learning process more productive." },
        { icon: "Laptop", title: "Freelancers", text: "Penetration testing can be relevant to cybersecurity professionals who eventually want to work independently. Security assessment, vulnerability assessment, and security consulting can involve project-based work. However, penetration testing must always be performed with clear authorization and defined scope. Freelancers should therefore develop not only technical capabilities but also professional practices around documentation, scope management, responsible disclosure, and client communication." },
        { icon: "Building2", title: "Business Owners", text: "Business owners and technical decision-makers can benefit from understanding penetration testing even if they do not intend to become security testers themselves. Learning the fundamentals can help them understand why systems need security assessments, what vulnerabilities may mean for an organization, and why authorized security testing should be carried out before problems become serious security incidents." },
        { icon: "Compass", title: "Career Changers", text: "People moving from general IT, networking, software development, technical support, or related technology careers may find penetration testing an interesting cybersecurity specialization. A career changer can gradually build the required foundation rather than attempting to learn every advanced security concept immediately. Starting with networking, operating systems, web technologies, and security fundamentals provides a stronger base for practical penetration-testing work." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can explore penetration testing, but they should approach it as a structured cybersecurity discipline rather than simply learning a collection of hacking tools. Understanding concepts such as IP addresses, ports, protocols, authentication, operating systems, web applications, vulnerabilities, and security controls is important. Beginners should also understand the legal and ethical boundaries surrounding security testing." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "Students who have completed 12th standard and are interested in cybersecurity can consider penetration testing as a longer-term skill pathway. However, beginners at this stage may benefit from first developing basic computer, networking, Linux, and programming knowledge. Penetration testing can then be introduced progressively as their technical foundation improves." },
      ],
      need: "The most important factors are an interest in cybersecurity, willingness to understand how computer systems work, and a commitment to practicing only in authorized environments.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can use online learning to develop cybersecurity skills while continuing college, work, or other studies. Students from technology-focused cities such as Jalandhar, Ludhiana, Amritsar, Mohali, and Patiala may find penetration testing relevant to broader IT and cybersecurity career preparation. Learners seeking classroom interaction can consider the Jalandhar-based learning option where applicable, while online learning can make the subject accessible without relocating." },
        { title: "Haryana", text: "Students and professionals from Haryana, particularly those connected with Gurugram, Faridabad, Panchkula, Ambala, and Karnal, can explore penetration testing as a cybersecurity specialization alongside the region's large IT-services, MNC, automobile, e-commerce, and logistics ecosystem. Online learning can be useful for working professionals who want to develop security skills without interrupting their existing schedule." },
        { title: "Himachal Pradesh", text: "Learners from Himachal Pradesh can use online training to access cybersecurity education without needing to relocate from cities such as Shimla, Dharamshala, or Solan. For students and professionals interested in remote technology careers, penetration testing can be explored as part of a broader cybersecurity skill set. Learners should focus on building strong technical fundamentals before progressing to advanced security testing." },
        { title: "Chandigarh", text: "For learners in Chandigarh, penetration testing can complement existing interests in IT, BPO, education, startups, and technology services. Online learning provides an option for students and working professionals who prefer flexible access to cybersecurity training while continuing their regular education or employment." },
        { title: "Delhi NCR", text: "Learners from Delhi NCR, including Delhi, Noida, and Ghaziabad, can explore penetration testing in the context of the region's large IT, fintech, media, e-commerce, and technology-services ecosystem. Working professionals may particularly benefit from a structured learning approach that allows them to develop cybersecurity skills alongside their current technical roles." },
        { title: "Jammu & Kashmir", text: "Students from Jammu and Srinagar can access penetration testing education through online learning without needing to travel to another state. For learners interested in technology careers, cybersecurity can provide a specialized direction after developing appropriate foundations in networking, operating systems, and computer security." },
        { title: "Uttarakhand", text: "Learners from Uttarakhand, including Dehradun and Haridwar, can explore penetration testing through online learning while continuing college or professional responsibilities. Students interested in technology, education, pharma, or other sectors can develop cybersecurity knowledge that may complement broader IT career preparation." },
        { title: "Rajasthan", text: "Students from Rajasthan, particularly Jaipur and surrounding areas, can study penetration testing online and develop practical cybersecurity knowledge without requiring relocation. The skill can be explored by graduates, technology learners, and professionals who want to add cybersecurity capabilities to their existing technical background." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh, including Lucknow and Meerut, can use online learning to develop penetration-testing skills alongside their existing education or employment. For learners connected with IT and electronics-oriented career paths, penetration testing can provide a specialized cybersecurity direction after establishing suitable networking and operating-system fundamentals." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Build Practical Cybersecurity Skills", text: "Penetration testing moves beyond simply learning cybersecurity terminology. Learners can develop an understanding of how security professionals examine systems for weaknesses, assess vulnerabilities, validate findings, and document their observations. The practical nature of the subject can help learners connect security theory with real security-testing workflows in controlled environments." },
        { title: "Understand How Vulnerabilities Are Identified", text: "A major reason to study penetration testing is to understand the process behind vulnerability discovery. Learners can develop knowledge of reconnaissance, information gathering, vulnerability assessment, controlled testing, evidence collection, and security reporting. This helps them understand not only that a vulnerability exists, but also how security professionals investigate and evaluate it." },
        { title: "Develop Offensive-Security Thinking", text: "Penetration testing introduces an offensive-security perspective in which learners study how weaknesses could potentially be exploited under authorized conditions. This perspective can also help organizations strengthen defensive security because understanding common attack paths can make it easier to identify appropriate security controls and remediation strategies." },
        { title: "Explore Cybersecurity Career Paths", text: "Penetration testing can contribute to preparation for several cybersecurity-oriented roles, depending on a learner's overall skills and experience. Potential career directions can include penetration testing, vulnerability assessment, security testing, application security, security operations, and broader cybersecurity roles. The course should be viewed as one part of professional preparation rather than an automatic qualification for a particular job." },
        { title: "Learn Security Testing Methodology", text: "Effective penetration testing involves much more than running security tools. Learners need to understand authorization, scope, reconnaissance, testing methodology, evidence collection, risk assessment, documentation, and reporting. Developing these habits can make their technical work more structured and professional." },
        { title: "Strengthen Networking and System Knowledge", text: "Penetration testing naturally encourages learners to understand networks, ports, protocols, operating systems, services, authentication, and application behavior. These foundations are valuable beyond penetration testing and can strengthen a learner's broader understanding of cybersecurity." },
        { title: "Develop Project and Portfolio Experience", text: "Controlled security-testing projects can give learners opportunities to demonstrate how they approach a technical problem. A useful project portfolio can show areas such as vulnerability identification, testing methodology, evidence documentation, risk explanation, and remediation recommendations—provided all work is conducted in legal and authorized environments." },
        { title: "Support Career Switching", text: "For professionals already working in IT, networking, development, technical support, or related areas, penetration testing can provide a pathway toward cybersecurity specialization. The transition is usually stronger when learners combine penetration-testing knowledge with fundamentals such as networking, Linux, operating systems, scripting, and web technologies." },
        { title: "Relevant to a Changing Security Environment", text: "Organizations increasingly depend on interconnected applications, networks, cloud services, and digital infrastructure. Security testing therefore remains an important component of understanding whether systems contain exploitable weaknesses. Learning penetration testing gives students a structured way to understand these risks while emphasizing responsible and authorized security practices." },
        { title: "Learn With a Responsible Security Mindset", text: "One of the most important reasons to study penetration testing formally is to understand the difference between authorized security testing and unauthorized access. Professional penetration testing requires permission, defined scope, responsible handling of findings, and appropriate reporting. Developing this mindset alongside technical skills is essential for anyone planning to work in cybersecurity." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "“North India's first AI-powered and Robotics learning centre” provides a modern technology-learning environment that can complement cybersecurity education. For penetration testing learners, exposure to a technology-focused environment can encourage practical thinking, experimentation, and project-oriented learning. For learners across Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh, online learning can provide access to the course without requiring relocation. The AI and robotics focus is broader than penetration testing itself, but it reflects a technology-driven learning environment where learners can explore multiple areas of modern technology." },
        { title: "Practical and Project-Oriented Learning", text: "Penetration testing is best understood through practical application rather than theory alone. A structured learning approach can help learners work through security-testing scenarios, understand vulnerabilities, analyze findings, and practice documenting results. Projects can also help learners demonstrate their developing technical skills when preparing for further education or cybersecurity-oriented opportunities." },
        { title: "Industry-Relevant Cybersecurity Skills", text: "The program can focus on concepts and techniques relevant to modern security testing, including reconnaissance, vulnerability assessment, network security, web application security, authentication, security tools, and reporting. This helps learners develop knowledge that extends beyond memorizing definitions and introduces them to the workflow used when assessing security in authorized environments." },
        { title: "Structured Learning for Different Experience Levels", text: "Learners enter cybersecurity with different levels of technical knowledge. Graduates, working IT professionals, career changers, and beginners may therefore require different amounts of foundational support. A structured penetration-testing program can introduce concepts progressively, allowing learners to strengthen networking, operating-system, web, and security fundamentals before moving toward more advanced testing concepts." },
        { title: "Online + Offline Learning Flexibility", text: "Learners based in Jalandhar and other parts of Punjab can explore classroom-based learning where available, while students from other regions can use online learning to access the program. This is particularly useful for working professionals and students who cannot relocate. Learners from Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh can pursue the subject remotely while continuing their existing education or professional commitments." },
        { title: "Focus on Responsible Security Testing", text: "A strong penetration-testing learning experience should include the legal and ethical side of cybersecurity. Learners need to understand authorization, testing scope, responsible handling of vulnerabilities, evidence collection, and reporting. This helps establish the distinction between professional penetration testing and unauthorized attempts to access systems." },
        { title: "Career-Focused Skill Development", text: "Penetration testing can form part of a broader cybersecurity career pathway. Learners can build skills relevant to areas such as vulnerability assessment, security testing, application security, and other cybersecurity functions. The course can therefore be useful for people who want to add a specialized security skill to an existing IT background or explore cybersecurity as a new career direction." },
        { title: "Support for Learners From Outside Punjab", text: "Because the program can be accessed online, learners do not necessarily need to be physically located in Jalandhar to study penetration testing. This makes the course relevant to learners across North India who want structured cybersecurity learning while remaining in their own city or state." },
      ],
    },
    tools: {
      title: "Penetration Testing Tools",
      columns: ["Tool", "Used for"],
      groups: [
        { area: "Nmap", tools: "Network discovery and service enumeration" },
        { area: "Wireshark", tools: "Network traffic analysis" },
        { area: "Burp Suite", tools: "Web application security testing" },
        { area: "Metasploit Framework", tools: "Controlled penetration-testing and exploitation framework" },
        { area: "Kali Linux", tools: "Security-focused Linux environment" },
        { area: "Gobuster", tools: "Directory and resource enumeration" },
        { area: "Nikto", tools: "Web-server security assessment" },
        { area: "OWASP ZAP", tools: "Web application security testing" },
      ],
      note: authorised,
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Penetration testing can contribute to several cybersecurity career pathways. Depending on additional education, experience, and technical skills, learners may explore roles such as:",
      roles,
      rolesNote: "A learner's actual eligibility for these positions will depend on their broader technical knowledge, practical experience, employer requirements, and other qualifications.",
      notes: [
        { title: "Industries", text: "Penetration-testing skills can be relevant across industries that operate digital infrastructure, applications, networks, and online services. These can include IT services, software and technology companies, financial services, e-commerce, healthcare technology, telecommunications, consulting, digital businesses, and enterprises with internal IT infrastructure." },
        { title: "Career Progression", text: "A learner may initially build foundational cybersecurity and security-testing skills before moving toward specialized areas such as web application security, network security, application security, cloud security, or security consulting. Progression generally depends on practical experience, technical depth, certifications where relevant, and the ability to demonstrate real security-analysis skills." },
        { title: "Freelancing", text: "Experienced security professionals may also explore independent security assessment or consulting opportunities. However, penetration-testing work must always be performed with explicit authorization and clearly defined scope. A freelancer therefore needs both technical capabilities and professional skills such as client communication, documentation, reporting, confidentiality, and responsible vulnerability handling." },
        { title: "Future Relevance", text: "As organizations continue to depend on websites, applications, networks, cloud services, and connected digital infrastructure, security testing remains an important cybersecurity function. For learners, the long-term value comes from understanding security principles and testing methodology, rather than learning only a fixed collection of tools. Tools change over time, while fundamental concepts such as networking, authentication, vulnerability assessment, application security, and risk analysis remain important." },
      ],
      jobsTitle: "State-Wise Opportunities",
      jobs: [
        { title: "Punjab", text: "Punjab learners can combine penetration-testing knowledge with broader IT and cybersecurity skills. Jalandhar, Ludhiana, Amritsar, Mohali, and other technology-oriented areas can provide different educational and professional contexts for learners exploring cybersecurity." },
        { title: "Haryana", text: "Haryana offers a strong technology and corporate environment, particularly around Gurugram and Faridabad. Penetration-testing skills can complement careers involving enterprise IT, technology services, e-commerce, and other digitally dependent organizations." },
        { title: "Chandigarh", text: "Learners in Chandigarh can explore penetration testing alongside the region's IT, BPO, startup, education, and technology-service ecosystem. Online learning can also make specialization accessible while continuing existing professional responsibilities." },
        { title: "Delhi NCR", text: "Delhi, Noida, and Ghaziabad provide exposure to a broad technology ecosystem including IT services, fintech, e-commerce, media, and enterprise technology. Penetration testing can be one specialization for learners pursuing cybersecurity-oriented roles in this environment." },
        { title: "Uttar Pradesh", text: "Learners in cities such as Noida, Lucknow, and Meerut can use penetration-testing skills to complement broader IT and cybersecurity preparation. Noida's technology ecosystem can be particularly relevant for learners interested in security roles within software and IT services." },
      ],
    },
    faqTitle: "Frequently Asked Questions About the Penetration Testing Course",
    cta: {
      title: "Build Practical Penetration Testing Skills for a",
      highlight: "Cybersecurity Career",
      text: "Learn how authorized security testing works, understand vulnerabilities, explore industry-relevant security tools, and develop a stronger foundation for pursuing cybersecurity opportunities. Interested in cybersecurity and ethical security testing? The Penetration Testing Course can help you develop practical knowledge of reconnaissance, vulnerability assessment, network security, web application security, operating systems, security tools, and professional reporting.",
    },
  },
};
