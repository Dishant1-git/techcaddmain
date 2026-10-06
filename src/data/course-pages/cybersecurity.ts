import type { CoursePage } from "./types";

/* /courses/cybersecurity — long-form landing copy supplied by the client (used as given, section by section).
   History: this slug briefly showed the Cyber Forensics copy (the client first sent that copy "for the cyber security
   page"); when the real Cybersecurity copy arrived, Cyber Forensics moved to its own page (/courses/cyber-forensics, see
   ./cyber-forensics) and the Courses ▾ link label went back to "Cybersecurity".
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts, not
     verified student reviews" to be published only after replacing them with genuine student feedback. The page keeps the
     shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "Contact Techcadd for the current course duration".
   - FAQs 4, 5 and 7 (duration, fees, offline batches) say to confirm with Techcadd — replace with real answers.
   - Tools are worded "may include" — confirm the tool list actually taught.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The title "Industries" in `careers.notes` was added here (that paragraph had no heading). The supplied copy has no
     learning-outcomes or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy) and the enquiry-form field list are not page content. */

const roles = [
  "Cybersecurity Analyst",
  "Security Analyst",
  "SOC Analyst",
  "Network Security Analyst",
  "Vulnerability Assessment Analyst",
  "Junior Penetration Tester",
  "Security Operations Professional",
  "Information Security Associate",
];

const toolsNote = "The exact tools covered in training can vary depending on the program's final curriculum and practical requirements.";

export const cybersecurity: CoursePage = {
  slug: "cybersecurity",
  title: "Cybersecurity Course",
  navLabel: "Cybersecurity",
  group: "cyber-cloud",
  icon: "ShieldCheck",
  tagline:
    "Understand cybersecurity fundamentals, explore relevant security technologies, develop practical skills through authorized learning environments, and build a foundation for further specialization in areas such as security operations, network security, ethical hacking, vulnerability assessment, and application security.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, working professionals, career changers, beginners, and learners with a strong interest in technology; Class 12 students can also begin",
  overview: [
    "A Cybersecurity Course is designed to help learners understand how digital systems, networks, applications, and data can be protected from security threats. The field combines foundational concepts with practical security skills, making it relevant for students as well as professionals looking to enter or transition into the technology and information-security domain.",
    "Learners can expect to build an understanding of areas such as network security, operating-system security, authentication, vulnerabilities, security monitoring, ethical security practices, and common cybersecurity tools. The exact depth of each area can vary depending on the training structure and learner level.",
    "The course can be useful for graduates, working professionals, career changers, and beginners who have an interest in technology and digital security. Learners in Punjab can choose between online learning and classroom-based learning where available. For those looking for classroom exposure, the Jalandhar centre provides a local learning option.",
    "For learners outside Punjab, online learning can make cybersecurity education accessible without requiring relocation. The broader goal is to develop practical security awareness and technical skills that can support further learning, projects, internships, and cybersecurity-related career paths.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Introduction to Cybersecurity",
      summary: "The first stage introduces learners to the cybersecurity landscape and explains why protecting digital systems has become important.",
      topics: ["What cybersecurity means", "Common categories of cyber threats", "Information and system security fundamentals", "Confidentiality, integrity, and availability", "Common security risks", "Basic security terminology", "Ethical and responsible security practices"],
      outcome: "After this module, learners should be able to explain fundamental cybersecurity concepts and recognize common categories of digital security risks.",
    },
    {
      title: "Networking Fundamentals",
      summary: "Networking knowledge is an important foundation for cybersecurity because many security issues involve communication between systems.",
      topics: ["Network fundamentals", "IP addressing", "Ports and protocols", "TCP/IP concepts", "DNS", "HTTP and HTTPS", "Network devices", "Client-server communication", "Basic network security concepts"],
      outcome: "Learners should be able to understand how devices communicate across networks and identify where security controls and potential vulnerabilities can exist.",
    },
    {
      title: "Operating System Security",
      summary: "Cybersecurity professionals frequently work with operating systems, so understanding how systems manage users, processes, files, and permissions is important.",
      topics: ["Operating-system fundamentals", "User and account management", "File permissions", "Processes and services", "System configuration", "Access control", "Basic system-hardening principles", "Security considerations for different operating environments"],
      outcome: "Learners should understand how operating systems manage resources and how configuration and access controls can influence system security.",
    },
    {
      title: "Cyber Threats and Vulnerabilities",
      summary: "This module focuses on understanding how security weaknesses can emerge and how attackers may attempt to exploit them. The focus should remain on understanding threats and learning how systems can be protected responsibly.",
      topics: ["Malware", "Phishing", "Social engineering", "Password attacks", "Unauthorized access", "Vulnerabilities", "Common attack patterns", "Security weaknesses", "Risk awareness"],
      outcome: "Learners should be able to recognize common cyber threats and understand the relationship between vulnerabilities, threats, risks, and security controls.",
    },
    {
      title: "Ethical Hacking Fundamentals",
      summary: "Ethical hacking introduces learners to the principles of authorized security testing. The emphasis should always be on systems where the learner has explicit permission to test.",
      topics: ["Ethical hacking concepts", "Reconnaissance fundamentals", "Information gathering", "Vulnerability identification", "Security assessment", "Basic penetration-testing concepts", "Reporting security findings", "Responsible disclosure"],
      outcome: "Learners should understand how authorized security assessments are structured and how security findings can be documented responsibly.",
    },
    {
      title: "Web and Application Security",
      summary: "Websites and applications can contain security weaknesses when authentication, input handling, access control, or data processing are not implemented securely.",
      topics: ["Web application security", "Authentication", "Authorization", "Session security", "Input validation", "Common web vulnerabilities", "Secure development principles", "Application security testing concepts"],
      outcome: "Learners should be able to identify common application-security concepts and understand why secure development and testing are important.",
    },
    {
      title: "Network Security",
      summary: "Network security focuses on protecting communication infrastructure and controlling access to network resources.",
      topics: ["Network security principles", "Firewalls", "Access controls", "Secure communication", "Network monitoring", "Traffic analysis concepts", "Intrusion detection and prevention concepts", "Network segmentation fundamentals"],
      outcome: "Learners should understand the role of network-security controls and how organizations can reduce unauthorized access and network-based risks.",
    },
    {
      title: "Security Monitoring and Incident Response",
      summary: "Preventing every security incident is not always possible, so organizations also need ways to identify suspicious activity and respond appropriately.",
      topics: ["Security monitoring", "Logs and events", "Suspicious activity", "Incident identification", "Incident-response fundamentals", "Evidence preservation concepts", "Basic response procedures", "Security documentation"],
      outcome: "Learners should understand the basic lifecycle of identifying, analyzing, documenting, and responding to security incidents.",
    },
    {
      title: "Cybersecurity Tools and Technologies",
      summary: `Cybersecurity professionals use different tools depending on the security task. Tools should be learned as part of a broader security methodology rather than treated as isolated software. ${toolsNote}`,
      topics: [
        "Linux for security-oriented system and command-line work",
        "Wireshark for network traffic analysis",
        "Nmap for network discovery and authorized security assessment",
        "Burp Suite for web application security testing",
        "Metasploit Framework for authorized security testing and learning",
        "Kali Linux as a security-focused Linux environment",
        "SIEM concepts for security-event monitoring and analysis",
      ],
      outcome: "Learners should understand what different cybersecurity tools are designed to accomplish and when a particular tool may be appropriate in an authorized security assessment or defensive workflow.",
    },
  ],
  tools: ["Linux", "Wireshark", "Nmap", "Burp Suite", "Metasploit Framework", "Kali Linux", "SIEM concepts"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who is eligible for a Cybersecurity Course?", a: "A Cybersecurity Course can be suitable for graduates, working professionals, career changers, beginners, and learners with a strong interest in technology. Students who have completed Class 12 can also begin learning cybersecurity, particularly through a structured foundation-first approach." },
    { q: "Is a Cybersecurity Course suitable for beginners?", a: "Yes, a Cybersecurity Course can be suitable for beginners if they are willing to learn technical fundamentals first. Basic knowledge of computers, networking, operating systems, and logical problem-solving can make the learning process easier." },
    { q: "What does a Cybersecurity Course syllabus usually include?", a: "A cybersecurity syllabus can include cybersecurity fundamentals, networking, operating-system security, threats and vulnerabilities, ethical hacking concepts, web security, network security, security monitoring, incident response, and security tools." },
    { q: "How long does a Cybersecurity Course take?", a: "The course duration depends on the training structure, depth of the curriculum, and learning mode. An exact duration should be confirmed with the institute before enrolment rather than assumed from the course title alone." },
    { q: "What are the fees for a Cybersecurity Course?", a: "Cybersecurity course fees vary according to the curriculum, duration, training format, practical components, and institute. The current fee should be confirmed directly with Techcadd before registration." },
    { q: "Can I learn cybersecurity online?", a: "Yes, cybersecurity can be learned online through structured instruction, demonstrations, practical exercises, and authorized security labs. Online learning can be particularly useful for students and professionals who cannot regularly attend classroom sessions." },
    { q: "Can I learn cybersecurity offline at Techcadd?", a: "Yes, learners who prefer classroom-based learning can explore the offline option at the Jalandhar, Punjab centre. Availability, batches, and current course schedules should be confirmed before enrolment." },
    { q: "What tools are used in cybersecurity training?", a: "Cybersecurity training can involve tools and technologies such as Linux, Kali Linux, Wireshark, Nmap, Burp Suite, and Metasploit Framework, depending on the curriculum and practical learning requirements." },
    { q: "What jobs can I pursue after learning cybersecurity?", a: "Depending on skills, experience, and specialization, learners can explore roles such as Cybersecurity Analyst, Security Analyst, SOC Analyst, Network Security Analyst, Vulnerability Assessment Analyst, and Junior Penetration Tester." },
    { q: "What is the salary after a Cybersecurity Course?", a: "There is no fixed salary after completing a cybersecurity course. Earnings depend on factors such as technical skills, experience, job role, location, specialization, organization, and additional qualifications." },
    { q: "Can cybersecurity skills be used for freelancing?", a: "Yes, experienced cybersecurity professionals can explore authorized freelance services such as security assessments, vulnerability assessments, website-security reviews, security documentation, and consulting. Security testing should only be performed with explicit authorization." },
    { q: "What is the career scope of cybersecurity in India?", a: "Cybersecurity has applications across IT services, banking and fintech, e-commerce, healthcare, manufacturing, telecommunications, education, government-related environments, and other organizations that depend on digital systems." },
    { q: "Can students from Himachal Pradesh join a Cybersecurity Course online?", a: "Yes, students from Himachal Pradesh can learn cybersecurity online without relocating to Punjab. Online learning can be useful for learners from Shimla, Solan, Dharamshala, and other areas who want to develop technology skills remotely." },
    { q: "What are the cybersecurity opportunities in Punjab and Haryana?", a: "Punjab and Haryana offer different technology environments where cybersecurity skills can be relevant. Punjab has IT, manufacturing, services, exports, and startup activity, while Haryana—particularly Gurugram and Faridabad—has major MNC, IT-services, automobile, logistics, and e-commerce activity." },
    { q: "Can students from Rajasthan learn cybersecurity online?", a: "Yes, students from Rajasthan can learn cybersecurity online and build skills while continuing their education or work. Learners in Jaipur and other cities can use online training as a flexible way to develop cybersecurity knowledge." },
    { q: "Is cybersecurity suitable for students from Uttar Pradesh?", a: "Yes, cybersecurity can be suitable for students from Uttar Pradesh who have an interest in technology and are prepared to develop their technical fundamentals. Learners from cities such as Noida, Lucknow, and Meerut can pursue online learning and build skills relevant to different technology career paths." },
    { q: "Do I need a computer science degree to learn cybersecurity?", a: "No, a computer science degree is not necessarily required to begin learning cybersecurity. However, learners without a technical background may need to spend additional time developing fundamentals such as networking, operating systems, and basic computing." },
    { q: "Is cybersecurity the same as ethical hacking?", a: "No, ethical hacking is one part of the broader cybersecurity field. Cybersecurity also covers areas such as security operations, network security, application security, vulnerability management, incident response, risk management, and defensive security." },
  ],
  related: ["ethical-hacking", "soc-analyst", "cyber-forensics"],
  copy: {
    heading: { title: "Cybersecurity Course", highlight: "Online + Offline", meta: "Cybersecurity Course: Build Practical Cybersecurity Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Cybersecurity Course" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "A cybersecurity learning path should combine technical fundamentals, security concepts, practical problem-solving, and responsible security practices. The following structure provides a logical foundation for someone beginning their cybersecurity journey.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "Cybersecurity is a broad technology field, so the Cybersecurity Course can be relevant to people coming from different educational and professional backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology, engineering, mathematics, or related disciplines may find cybersecurity a natural area for specialization. A cybersecurity course can help connect their existing technical knowledge with security-focused concepts such as networks, systems, vulnerabilities, and threat awareness. Graduates from other disciplines can also explore the field if they have a genuine interest in technology. They may need to spend additional time developing fundamentals such as operating systems, networking, and basic programming." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates looking to specialize further can use cybersecurity training to develop a focused technical skill set. It can complement an existing IT or technology background and provide exposure to practical security concepts that are relevant across different technology environments." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals, system administrators, network professionals, developers, and technical support professionals may benefit from cybersecurity knowledge because security increasingly intersects with everyday technology operations. Learning security principles can help professionals understand risks in the systems they already work with. For professionals considering a career transition, structured cybersecurity learning can provide a more organized route into the field instead of relying entirely on disconnected tutorials or individual topics." },
        { icon: "Shuffle", title: "Job Switchers", text: "People planning to move from another technology role into cybersecurity can use the course to build security-specific knowledge. Someone working in networking, system administration, software development, or technical support may already possess useful foundations that can be applied to security learning. Career switching should be viewed as a skill-building process rather than an immediate job guarantee. Learners should expect to strengthen their knowledge through practice, projects, labs, and continued learning." },
        { icon: "Laptop", title: "Freelancers", text: "Cybersecurity skills can also be useful for freelancers who work with websites, applications, networks, cloud environments, or small businesses. Security awareness can help them identify common risks and understand secure technology practices. However, professional security testing should always be performed with appropriate authorization. Cybersecurity training should be used to develop responsible and ethical security skills." },
        { icon: "Building2", title: "Business Owners", text: "Business owners increasingly rely on websites, cloud services, online payments, employee devices, and digital customer information. Learning cybersecurity fundamentals can help them better understand common security risks and make more informed decisions about protecting business systems and data. They do not necessarily need to become security professionals. Even foundational knowledge can help business owners recognize issues such as weak passwords, insecure access, phishing attempts, and poor security practices." },
        { icon: "Compass", title: "Career Changers", text: "Cybersecurity can be considered by people moving into technology from another career. The learning journey may take longer for complete beginners because networking, operating systems, and other technical fundamentals need to be understood alongside security concepts. A structured course can provide a clearer starting point and help learners progressively develop technical confidence." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can learn cybersecurity, but they should be prepared to start with fundamentals rather than immediately focusing on advanced security techniques. Basic computer knowledge, networking concepts, operating systems, and logical problem-solving can make the learning process easier. The most effective approach is usually gradual: understand how systems work first, then learn how vulnerabilities occur and how those systems can be protected." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "Students who have completed Class 12 and are interested in technology can explore cybersecurity as a career direction. Students with mathematics, computer science, or related academic exposure may find some technical concepts easier to approach, but prior specialization is not necessarily required for beginning-level learning. For younger learners, the focus should initially remain on understanding computing, networking, programming fundamentals, and responsible technology use before progressing into more specialized security topics." },
      ],
      need: "A computer science degree can be helpful for understanding technical concepts, but learners can also begin with foundational knowledge and gradually build the required skills.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can pursue cybersecurity through online learning or classroom-based training in Jalandhar where applicable. The state's growing IT, manufacturing, services, and business ecosystem creates varied environments where digital systems and data security are relevant. Students from cities such as Ludhiana, Amritsar, Mohali, and Phagwara can therefore consider cybersecurity as a technology skill alongside their existing education." },
        { title: "Haryana", text: "Students and professionals from Haryana can benefit from online cybersecurity learning while remaining close to major employment markets such as Gurugram and Faridabad. The region's concentration of MNCs, IT services, automobile businesses, logistics, and e-commerce creates exposure to organizations that depend heavily on digital infrastructure and secure data handling." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online learning can remove the need to relocate for specialized technology training. Students from Shimla, Solan, Dharamshala, and surrounding areas can build cybersecurity skills remotely while continuing their education or work. Remote technology careers can also make specialized IT skills relevant beyond the local employment market." },
        { title: "Chandigarh", text: "Chandigarh-based learners can combine cybersecurity education with the region's IT, BPO, education, startup, and government-office ecosystem. Online learning is particularly useful for professionals who want to develop security skills alongside an existing job or academic schedule." },
        { title: "Delhi NCR", text: "Delhi NCR offers a large technology and services environment, including IT companies, agencies, fintech, e-commerce, and other digitally dependent businesses. Learners from Delhi, Noida, and Ghaziabad can use online cybersecurity training to build specialized skills while remaining connected to one of India's major technology job markets." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can use online education to access cybersecurity training without depending entirely on local specialized training availability. Cybersecurity knowledge can complement careers connected with government services, e-commerce, tourism-related businesses, and other organizations increasingly dependent on digital platforms." },
        { title: "Uttarakhand", text: "Students and professionals from Dehradun, Haridwar, and other parts of Uttarakhand can pursue cybersecurity online while continuing their existing studies or employment. The state's education, pharmaceutical, tourism, and industrial sectors all increasingly depend on digital systems, creating a practical reason to develop stronger technology and security awareness." },
        { title: "Rajasthan", text: "For learners from Jaipur and other parts of Rajasthan, online cybersecurity training provides flexibility while building skills relevant to technology-enabled businesses. The state's growing digital services, e-commerce, tourism, and traditional industries can all benefit from professionals who understand information security and responsible technology use." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can use online cybersecurity training to prepare for technology opportunities across cities such as Noida, Lucknow, and Meerut. Noida in particular has a strong IT and electronics ecosystem, while Lucknow has opportunities across IT services and the government sector. Cybersecurity skills can complement these technology-focused career paths." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Growing Importance of Digital Security", text: "Organizations increasingly depend on websites, applications, cloud services, networks, databases, and connected devices. As digital dependence grows, understanding how systems can be attacked and protected becomes increasingly important. Cybersecurity therefore represents a specialized technology skill rather than a narrow IT topic." },
        { title: "Practical Technical Skills", text: "A good cybersecurity learning path should go beyond definitions and terminology. Learners benefit from understanding how networks operate, how systems are configured, how vulnerabilities arise, and how security controls can reduce risk. Practical exercises can make these concepts easier to understand and apply." },
        { title: "Multiple Career Directions", text: "Cybersecurity can lead toward several technical career paths depending on the learner's interests and level of specialization. Potential directions include security analyst, SOC analyst, penetration testing, vulnerability assessment, network security, application security, and security administration. The exact role a learner can pursue depends on their technical foundation, practical experience, specialization, and additional certifications or qualifications they may choose to obtain." },
        { title: "Relevant Across Industries", text: "Cybersecurity is not limited to traditional IT companies. Banks, fintech companies, e-commerce businesses, healthcare organizations, educational institutions, government departments, manufacturing companies, and other digitally dependent organizations need to consider the security of their systems and information. This cross-industry relevance gives cybersecurity learners flexibility when exploring career opportunities." },
        { title: "Useful for Career Switching", text: "Professionals already working with networks, systems, software, databases, or technical support may be able to transfer existing knowledge into cybersecurity. A structured course can help them identify the security concepts they need to learn and organize their transition more effectively." },
        { title: "Strong Foundation for Further Specialization", text: "Cybersecurity is a broad field rather than a single skill. Learners can eventually specialize in areas such as penetration testing, digital forensics, cloud security, application security, security operations, incident response, or governance and risk. Building strong fundamentals first makes it easier to decide which specialization matches their interests and career goals." },
        { title: "Project and Portfolio Potential", text: "Security-related projects can demonstrate practical understanding more effectively than theory alone. Depending on the learner's level, projects may involve security analysis, vulnerability assessment in authorized environments, network-security exercises, log analysis, or documenting security findings. A responsible portfolio can help learners demonstrate what they understand and how they approach technical security problems." },
        { title: "Relevant for Beginners With the Right Learning Path", text: "Cybersecurity may appear complex because it combines networking, operating systems, applications, and security concepts. However, beginners can approach it progressively. Starting with computer and networking fundamentals before moving toward security concepts can make the subject considerably more manageable. The most important factor is not trying to learn every cybersecurity topic at once. Building one technical foundation at a time allows learners to develop stronger and more useful skills." },
        { title: "A Skill With Long-Term Relevance", text: "Cyber threats and defensive technologies continue to evolve, so cybersecurity requires continuous learning. For someone who enjoys problem-solving and technology, this ongoing nature can be valuable because the field encourages continuous skill development rather than relying on a fixed set of tools or concepts." },
      ],
      outro: "For learners in Punjab and other North Indian regions, online and classroom learning can provide an accessible starting point for developing these skills and exploring cybersecurity as a longer-term technology career path.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "North India's first AI-powered and Robotics learning centre", text: "“North India's first AI-powered and Robotics learning centre” provides a technology-focused learning environment that can complement cybersecurity education. For cybersecurity learners, exposure to modern technology can help build awareness of how interconnected digital systems, automation, AI, and connected technologies create both opportunities and security considerations. For learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh, online learning can provide access to the program without requiring relocation to Jalandhar. Where classroom learning is preferred, the Jalandhar centre offers a local option for learners in the region." },
        { title: "Practical Approach to Cybersecurity Learning", text: "Cybersecurity is easier to understand when learners can connect concepts with practical situations. Instead of treating security as a collection of definitions, learning can focus on understanding how networks, systems, applications, users, and data interact. Practical exercises can help learners understand concepts such as vulnerabilities, authentication, network security, security monitoring, and responsible security testing." },
        { title: "Industry-Relevant Cybersecurity Concepts", text: "The cybersecurity field changes as technologies and attack techniques evolve. A useful learning program therefore needs to focus on fundamental security concepts that remain relevant while introducing learners to contemporary technologies and security practices. Learners can develop an understanding of areas such as network security, operating-system security, vulnerability assessment, ethical security practices, and security monitoring." },
        { title: "Learning That Supports Different Career Goals", text: "Not every cybersecurity learner wants the same career path. Some may be interested in security operations, while others may prefer penetration testing, vulnerability assessment, network security, or application security. A broad foundation allows learners to understand these different directions before deciding which area they want to explore more deeply." },
        { title: "Suitable for Online and Offline Learners", text: "Techcadd's learning model supports online + offline participation. This can be particularly useful for students and working professionals who cannot regularly travel to a physical training centre. Learners outside Punjab can study online, while students who prefer classroom learning can consider the Jalandhar centre. This makes the learning route more flexible for people with different schedules and locations." },
        { title: "Relevant for Career Changers", text: "Cybersecurity can be an option for professionals moving from related technology fields into information security. People with experience in networking, system administration, software development, databases, or technical support may already have useful foundations. A structured cybersecurity program can help such learners connect their existing technical knowledge with security-focused concepts." },
        { title: "Builds a Foundation for Continuous Learning", text: "Cybersecurity is not a field where learning ends after completing one course. Technologies, vulnerabilities, attack methods, defensive tools, and organizational security practices continue to change. A strong foundation can therefore be more valuable than simply memorizing individual tools. Learners can use their fundamentals to continue exploring specialized areas such as cloud security, application security, incident response, penetration testing, or digital forensics." },
        { title: "Accessible to Learners From Other North Indian States", text: "Learners do not need to be based in Jalandhar to begin learning cybersecurity through the online mode. Students and professionals from cities such as Gurugram, Chandigarh, Shimla, Delhi, Noida, Jammu, Dehradun, Jaipur, and Lucknow can consider online learning according to their requirements. This makes the program relevant to a wider North Indian audience while keeping the Jalandhar centre available for learners seeking classroom-based education." },
      ],
    },
    tools: {
      title: "Cybersecurity Tools and Technologies",
      columns: ["Tool / Technology", "Used for"],
      groups: [
        { area: "Linux", tools: "Security-oriented system and command-line work" },
        { area: "Wireshark", tools: "Network traffic analysis" },
        { area: "Nmap", tools: "Network discovery and authorized security assessment" },
        { area: "Burp Suite", tools: "Web application security testing" },
        { area: "Metasploit Framework", tools: "Authorized security testing and learning" },
        { area: "Kali Linux", tools: "A security-focused Linux environment" },
        { area: "SIEM concepts", tools: "Security-event monitoring and analysis" },
      ],
      note: toolsNote,
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Cybersecurity can lead to several technical career directions. Entry-level learners may explore roles such as:",
      roles,
      rolesNote: "With additional experience and specialization, professionals can move toward areas such as penetration testing, cloud security, application security, incident response, digital forensics, security engineering, or security architecture.",
      notes: [
        { title: "Industries", text: "Cybersecurity skills are relevant across IT services, banking and fintech, e-commerce, healthcare, education, manufacturing, telecommunications, government-related environments, and other organizations that rely on digital systems." },
        { title: "Freelancing and Independent Work", text: "Experienced cybersecurity professionals may also explore authorized freelance services such as security assessments, vulnerability assessments, website-security reviews, security documentation, and security consulting. Such work must always be performed with clear authorization from the system or organization being assessed." },
        { title: "Future Skill Development", text: "Cybersecurity is particularly suited to learners who enjoy continuous technical learning. After building the fundamentals, learners can specialize according to their interests and career goals. Potential advanced directions include: Cloud Security → Application Security → Penetration Testing → SOC & Incident Response → Digital Forensics → Security Engineering. The best specialization depends on the learner's existing technical knowledge, interests, practical experience, and long-term career objective." },
      ],
      jobsTitle: "State-Wise Opportunities",
      jobs: [
        { title: "Punjab", text: "Punjab-based learners can explore cybersecurity alongside the state's IT, manufacturing, export, services, and startup ecosystems. Jalandhar, Ludhiana, Amritsar, Mohali, and other technology-active areas can provide different career environments where organizations increasingly depend on secure digital systems." },
        { title: "Haryana", text: "Haryana offers particularly relevant opportunities around Gurugram and Faridabad, where MNCs, IT services, e-commerce, automobile businesses, and logistics operations rely heavily on technology. Cybersecurity skills can complement networking, IT support, cloud, and infrastructure careers in these environments." },
        { title: "Chandigarh", text: "Chandigarh's IT services, BPO, education, startup, and government-related ecosystem provides a relevant environment for technology professionals developing security skills. Learners can combine cybersecurity knowledge with existing IT or networking experience." },
        { title: "Delhi NCR", text: "Delhi NCR provides access to a large technology and services market. Delhi, Noida, and Ghaziabad have organizations across IT, fintech, media, agencies, and e-commerce, creating diverse environments where information security and digital-risk management are relevant." },
        { title: "Uttar Pradesh", text: "For learners in Uttar Pradesh, Noida and Lucknow offer different technology environments. Noida's IT and electronics ecosystem can be particularly relevant for cybersecurity-oriented professionals, while Lucknow provides opportunities connected with IT services and the broader government and services sector." },
        { title: "Rajasthan", text: "Learners from Rajasthan, particularly Jaipur, can combine cybersecurity with opportunities across technology services, e-commerce, tourism, and digitally enabled businesses. Online learning can also allow learners to target opportunities beyond their immediate city as their technical experience develops." },
      ],
    },
    faqTitle: "Frequently Asked Questions About the Cybersecurity Course",
    cta: {
      title: "Build Practical Cybersecurity Skills for Your Next",
      highlight: "Career Move",
      text: "Cybersecurity is a growing technology field that requires more than theoretical knowledge. Develop a foundation in networks, systems, vulnerabilities, security practices, and cybersecurity tools through structured learning designed for students, beginners, working professionals, and career changers. Whether you are starting from the basics or looking to add cybersecurity skills to your existing technical background, enquire about the program to understand the current curriculum, learning format, schedule, and admission process.",
    },
  },
};
