import type { CoursePage } from "./types";

/* /courses/ethical-hacking — long-form landing copy supplied by the client (used as given, section by section).
   Navigation is unchanged at the client's request (`navLabel`, the Courses ▾ link and the slug are as before).
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: they are "sample review drafts/templates" with "[Student Name]"
     placeholders, to be replaced with verified student information before publishing. The page keeps the shared
     testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed". `level` was "Intermediate"; the supplied copy
     says beginners can join, so it is now "Beginner" — confirm.
   - Editor note left out: "the following represents a course-relevant learning framework, rather than a claim about a
     confirmed Techcadd syllabus." Tools are worded "may encounter" — confirm the tool list actually taught.
   - FAQs 2, 4, 5, 6 and 9 still carry "should be confirmed" / "before publication" wording — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The supplied copy has no learning-outcomes or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy report) and the enquiry-form field list are not page content. */

const roles = [
  "Junior Cybersecurity Analyst",
  "Security Analyst",
  "Vulnerability Assessment Analyst",
  "Penetration Testing Trainee",
  "Junior Penetration Tester",
  "Security Testing Associate",
  "SOC-related entry-level roles",
  "Web Application Security Tester",
];

const toolsNote =
  "Tools should be learned within authorized laboratory environments. Knowing how to operate a tool is less valuable than understanding what it does, when it should be used, and how its results should be interpreted.";

export const ethicalHacking: CoursePage = {
  slug: "ethical-hacking",
  title: "Ethical Hacking Course",
  navLabel: "Ethical Hacking",
  group: "cyber-cloud",
  icon: "Bug",
  tagline:
    "Learn the fundamentals of ethical hacking, cybersecurity, networking, vulnerability assessment, web security, and security testing through a structured learning approach designed for students, graduates, working professionals, and career changers.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, career changers, freelancers, and beginners with an interest in computers and cybersecurity",
  overview: [
    "An Ethical Hacking Course introduces learners to the principles and practical techniques used to identify, assess, and understand security weaknesses in computer systems, networks, applications, and digital environments. The field is focused on authorized security testing, helping organizations understand vulnerabilities before they can be exploited maliciously.",
    "The course can be useful for graduates, postgraduates, working professionals, career changers, freelancers, and beginners who want to develop practical cybersecurity skills. Learners can build an understanding of areas such as networking, system security, web application security, vulnerability assessment, penetration testing concepts, and responsible security practices.",
    "For learners in Punjab, Ethical Hacking can provide a pathway into the broader cybersecurity field, particularly for those interested in technology, IT services, security operations, or technical roles. Students who prefer classroom learning can explore training at the Jalandhar centre, while learners outside the local area can consider online learning.",
    "A practical learning approach can help students connect cybersecurity concepts with real-world security scenarios rather than treating ethical hacking as purely theoretical knowledge.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Cybersecurity & Ethical Hacking Fundamentals",
      summary: "Learners begin by understanding what cybersecurity and ethical hacking mean, how authorized security testing works, and why ethical and legal boundaries matter.",
      topics: ["Cybersecurity fundamentals", "Ethical hacking concepts", "Common security threats", "Security vulnerabilities", "Attack surfaces", "Responsible security testing", "Basic security terminology"],
      outcome: "Learners should be able to explain the role of ethical hacking and distinguish authorized security testing from malicious or unauthorized activity.",
    },
    {
      title: "Networking Fundamentals",
      summary: "Networking knowledge is important because many cybersecurity activities involve understanding how devices communicate.",
      topics: ["IP addressing", "TCP/IP concepts", "Ports and protocols", "DNS", "HTTP and HTTPS", "Network architecture", "Client-server communication", "Basic network security concepts"],
      outcome: "Learners should be able to understand network communication and recognize where security considerations can arise within a network.",
    },
    {
      title: "Operating Systems & System Security",
      summary: "Ethical hackers need to understand the systems they are assessing. Linux is particularly relevant to cybersecurity learning because many security tools and laboratory environments use Linux-based systems.",
      topics: ["Operating-system fundamentals", "Users and permissions", "Processes and services", "File systems", "System configuration", "Access control", "Basic system-hardening concepts"],
      outcome: "Learners should be able to navigate security-focused operating-system environments and understand how permissions and services affect system security.",
    },
    {
      title: "Information Gathering & Reconnaissance",
      summary: "Before assessing a system, security professionals need to understand the target environment. The emphasis should remain on authorized and ethical use.",
      topics: ["Reconnaissance", "Information gathering", "Asset identification", "Domain and network information", "Basic enumeration", "Open-source intelligence concepts"],
      outcome: "Learners should understand how security professionals gather relevant information before conducting a controlled assessment.",
    },
    {
      title: "Vulnerability Assessment",
      summary: "Vulnerability assessment focuses on identifying weaknesses that could create security risks.",
      topics: ["Vulnerability concepts", "Security misconfigurations", "Vulnerability scanning", "Risk identification", "Vulnerability prioritization", "Basic security reporting"],
      outcome: "Learners should be able to interpret vulnerability information and understand why some weaknesses require greater attention than others.",
    },
    {
      title: "Web Application Security",
      summary: "Websites and web applications represent an important area of cybersecurity.",
      topics: ["Web application architecture", "HTTP requests and responses", "Authentication", "Authorization", "Session management", "Input validation", "Common web security weaknesses", "Secure application practices"],
      outcome: "Learners should understand common web application security risks and how authorized testers evaluate them in controlled environments.",
    },
    {
      title: "Penetration Testing Concepts",
      summary: "Penetration testing involves a structured process for assessing security weaknesses under defined authorization and scope.",
      topics: ["Defining scope", "Reconnaissance", "Enumeration", "Vulnerability identification", "Controlled validation", "Documentation", "Reporting", "Recommendations"],
      outcome: "Learners should understand how a professional security assessment progresses from initial information gathering to reporting.",
    },
    {
      title: "Security Tools and Technologies",
      summary: `Depending on the finalized curriculum and training environment, Ethical Hacking learners may encounter the tools below. ${toolsNote}`,
      topics: [
        "Kali Linux — security-focused Linux distribution commonly used in cybersecurity labs",
        "Nmap — network discovery and security auditing",
        "Wireshark — network traffic analysis",
        "Burp Suite — web application security testing",
        "Metasploit Framework — security testing and controlled exploitation research",
        "OWASP resources — widely used references for web application security",
      ],
      outcome: "Learners should develop familiarity with common cybersecurity tools while understanding their appropriate and responsible use.",
    },
  ],
  tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit Framework", "OWASP resources"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is an Ethical Hacking course?", a: "An Ethical Hacking course teaches authorized methods of identifying, assessing, and understanding security weaknesses in systems, networks, applications, and digital environments. It can cover cybersecurity fundamentals, networking, vulnerability assessment, web security, penetration-testing concepts, and responsible security practices." },
    { q: "Who is eligible for an Ethical Hacking course?", a: "Graduates, postgraduates, working professionals, career changers, freelancers, and beginners with an interest in computers and cybersecurity can consider an Ethical Hacking course. The exact eligibility requirements should be confirmed with the training provider." },
    { q: "Is Ethical Hacking suitable for beginners?", a: "Yes, beginners can learn Ethical Hacking, although basic computer, networking, and operating-system knowledge can make the learning process easier. Beginners should expect to build foundational skills before progressing to more advanced security concepts." },
    { q: "What does an Ethical Hacking course syllabus include?", a: "An Ethical Hacking syllabus can include cybersecurity fundamentals, networking, operating systems, reconnaissance, vulnerability assessment, web application security, penetration-testing concepts, security tools, and responsible security practices. The exact Techcadd syllabus should be confirmed before publication." },
    { q: "How long does an Ethical Hacking course take?", a: "The course duration depends on the specific training structure and curriculum. An exact Techcadd duration has not been established in the provided information, so it should be confirmed before displaying a duration on the course page." },
    { q: "What are the fees for an Ethical Hacking course?", a: "Ethical Hacking course fees vary according to the training provider, curriculum, duration, and learning format. The exact Techcadd course fee should be confirmed directly rather than publishing an unverified amount." },
    { q: "Can I learn Ethical Hacking online?", a: "Yes, Ethical Hacking can be learned online. Online learning can be useful for students and professionals who cannot attend classroom sessions, provided they have access to an appropriate learning environment and authorized practical labs." },
    { q: "Is offline Ethical Hacking training available?", a: "Offline learning can be available at the Techcadd centre in Jalandhar, Punjab. Learners who are not located nearby can consider the online learning option instead." },
    { q: "What tools are used in Ethical Hacking?", a: "Common cybersecurity learning tools include Kali Linux, Nmap, Wireshark, Burp Suite, and Metasploit Framework. The exact tools covered in a particular Techcadd course should be confirmed against its finalized curriculum." },
    { q: "What jobs can I pursue after learning Ethical Hacking?", a: "Ethical Hacking can help prepare learners to explore cybersecurity roles such as security analyst, vulnerability assessment analyst, penetration-testing trainee, security testing associate, and other entry-level cybersecurity positions. Actual job requirements vary by employer and experience level." },
    { q: "What is the salary after an Ethical Hacking course?", a: "There is no single salary associated with an Ethical Hacking course. Compensation depends on the role, location, employer, education, practical skills, certifications where applicable, and professional experience. The course should not be presented as guaranteeing a particular salary." },
    { q: "Can Ethical Hacking lead to freelancing opportunities?", a: "Yes, experienced cybersecurity professionals can explore legitimate freelance security work. Such work must be performed with explicit authorization and an agreed scope from the system or organization being assessed." },
    { q: "Can non-IT students learn Ethical Hacking?", a: "Yes, non-IT students can learn Ethical Hacking, but they may need additional time to develop computer, networking, operating-system, and web-technology fundamentals." },
    { q: "What is the career scope of Ethical Hacking?", a: "Ethical Hacking can provide a foundation for several cybersecurity specializations. Learners may later explore penetration testing, vulnerability management, application security, security operations, cloud security, incident response, or security engineering." },
    { q: "Can students from Himachal Pradesh join an Ethical Hacking course online?", a: "Yes, students from Himachal Pradesh can consider online Ethical Hacking learning. This can allow learners in cities such as Shimla, Dharamshala, and Solan to develop cybersecurity skills without needing to relocate to Jalandhar for classroom training." },
    { q: "What are the Ethical Hacking opportunities in Punjab and Haryana?", a: "Punjab and Haryana learners can explore Ethical Hacking as a cybersecurity specialization alongside the region's IT, MNC, technology-services, e-commerce, manufacturing, and digitally dependent businesses. Career opportunities still depend on the learner's technical skills, experience, and employer requirements." },
    { q: "Can students from Rajasthan learn Ethical Hacking online?", a: "Yes, students from Rajasthan can learn Ethical Hacking online. Online training can be particularly useful for learners who want to develop cybersecurity skills while continuing their education or employment in cities such as Jaipur." },
    { q: "Is Ethical Hacking suitable for students from Uttar Pradesh?", a: "Yes, Ethical Hacking can be suitable for students from Uttar Pradesh who have an interest in cybersecurity and technology. Learners can use online training to build foundational skills while exploring technology opportunities in locations such as Noida and Lucknow." },
    { q: "Can students from Delhi NCR learn Ethical Hacking online?", a: "Yes, students and working professionals from Delhi NCR can learn Ethical Hacking online. The format can be useful for learners balancing cybersecurity training with college, employment, or other professional commitments." },
    { q: "Do I need programming knowledge to learn Ethical Hacking?", a: "Advanced programming knowledge is not necessarily required to begin learning Ethical Hacking. However, understanding scripting, programming concepts, web technologies, and operating systems can become increasingly valuable as learners progress toward more technical cybersecurity roles." },
  ],
  related: ["penetration-testing", "network-security", "soc-analyst"],
  copy: {
    heading: { title: "Ethical Hacking Course", highlight: "Online + Offline", meta: "Ethical Hacking Course: Practical Ethical Hacking & Cybersecurity Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Ethical Hacking Course" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "An Ethical Hacking curriculum should build from fundamental computing and networking concepts toward security assessment and authorized testing.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "Ethical Hacking is a broad cybersecurity skill area, so learners can enter it from different educational and professional backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, information technology, engineering, mathematics, or related technical disciplines can use Ethical Hacking training to develop specialized cybersecurity skills. It can complement existing knowledge of programming, operating systems, databases, or networking and help learners explore security-focused career paths. Graduates from non-technical disciplines can also explore the field, although they may need additional time to become comfortable with basic computing and networking concepts." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who already have technical or IT knowledge can use Ethical Hacking as a specialization. For someone with an existing background in software, networking, systems, or information technology, cybersecurity skills can broaden the range of technical roles they can consider." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals can study Ethical Hacking to strengthen their understanding of security risks within the systems they already work with. Professionals working with networks, servers, software, websites, cloud environments, or IT support may find cybersecurity knowledge particularly relevant to their existing responsibilities." },
        { icon: "Shuffle", title: "Job Switchers", text: "Professionals considering a transition into cybersecurity can use an Ethical Hacking course as an introduction to the security domain. A career switch should be approached as a skill-building process: learners need to develop fundamentals, practise security concepts, work on projects, and continue learning beyond the course." },
        { icon: "Laptop", title: "Freelancers", text: "Freelancers interested in cybersecurity can develop skills that may support legitimate security-related services, subject to appropriate authorization and applicable laws. Ethical hacking must always be performed with permission from the system or organization being tested." },
        { icon: "Building2", title: "Business Owners", text: "Business owners can learn the fundamentals of ethical hacking to better understand common security weaknesses affecting websites, networks, applications, accounts, and business data. The course does not replace professional security services, but security awareness can help business owners make better decisions about protecting digital operations." },
        { icon: "Compass", title: "Career Changers", text: "People moving from another technical or technology-related career can use Ethical Hacking to explore cybersecurity as a new specialization. Existing experience with computers, software, networks, or troubleshooting can provide a useful foundation." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can learn Ethical Hacking, but they should be prepared to understand foundational topics such as computer networks, operating systems, web technologies, and basic security concepts. Ethical hacking is not simply about learning hacking tools; understanding how the underlying technology works is essential." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass students with a strong interest in computers can consider Ethical Hacking as an introductory skill area. Students without previous technical experience may need to spend additional time building foundational computer and networking knowledge before progressing to more advanced security concepts." },
      ],
      need: "The most important starting point is an interest in computers, networks, digital security, and problem-solving. A strong willingness to practise and understand how systems work is often more important than having an advanced cybersecurity background.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can combine cybersecurity learning with their existing education or IT career plans. Those near Jalandhar can explore classroom learning, while students elsewhere in the state can consider online options." },
        { title: "Haryana", text: "Students and professionals from Haryana can use online learning to develop cybersecurity skills alongside existing studies or employment, particularly those interested in the region's IT services, MNC, and technology-oriented employment landscape." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online Ethical Hacking training can be useful where access to specialized classroom training is limited. It can also complement remote-work and technology career goals." },
        { title: "Chandigarh", text: "Learners in Chandigarh and the Tricity region can explore Ethical Hacking as a technical specialization alongside education or existing IT and BPO-related career interests." },
        { title: "Delhi NCR", text: "Students and working professionals in Delhi NCR can study Ethical Hacking online while exploring cybersecurity opportunities within the region's large IT, fintech, e-commerce, media, and technology ecosystem." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Kashmir can use online training to access structured cybersecurity learning without needing to relocate for every stage of their education." },
        { title: "Uttarakhand", text: "Students from Uttarakhand can pursue Ethical Hacking online while building technology skills alongside education or employment in sectors such as education, services, and other digitally connected industries." },
        { title: "Rajasthan", text: "Learners from Rajasthan, particularly those exploring technology careers around Jaipur, can use online Ethical Hacking training to develop a specialized cybersecurity skill set." },
        { title: "Uttar Pradesh", text: "Students and professionals from Uttar Pradesh can study Ethical Hacking online while developing skills relevant to the state's growing IT and electronics ecosystem, including opportunities connected with major technology centres such as Noida and Lucknow." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Growing Importance of Cybersecurity", text: "Organizations increasingly depend on websites, applications, networks, cloud services, and digital data. This creates an ongoing need to understand security weaknesses and reduce avoidable risks. Ethical Hacking provides learners with a structured way to study these security challenges from an authorized testing perspective." },
        { title: "Practical Security Skills", text: "Ethical Hacking is a hands-on technical field. Learning can involve understanding networks, identifying vulnerabilities, examining systems, analysing security weaknesses, and studying how defensive measures respond to different types of attacks. The practical nature of the subject makes it particularly useful for learners who prefer solving technical problems rather than only studying theory." },
        { title: "Understanding Vulnerabilities", text: "One of the important skills in cybersecurity is being able to recognize where a system may be exposed. Ethical Hacking training can introduce learners to vulnerability assessment and penetration-testing concepts so they understand how weaknesses can be identified and documented responsibly." },
        { title: "Relevant Career Direction", text: "Ethical Hacking can serve as an entry point into the wider cybersecurity domain. Depending on their broader skills and experience, learners may eventually explore areas such as security testing, penetration testing, vulnerability assessment, security operations, application security, or other cybersecurity specializations. The course itself should be viewed as part of a longer skill-development journey rather than an automatic route to a particular job." },
        { title: "Development of Technical Problem-Solving", text: "Security testing requires analytical thinking. Learners need to understand how systems function, examine unexpected behaviour, identify possible weaknesses, and interpret technical information. These problem-solving abilities can be useful beyond cybersecurity as well." },
        { title: "Portfolio and Project Potential", text: "Cybersecurity knowledge becomes more meaningful when learners can demonstrate what they understand through legitimate projects and documented security exercises. A portfolio can include authorized lab work, vulnerability-analysis exercises, security assessments, or other projects that demonstrate technical reasoning without exposing real systems without permission." },
        { title: "Useful for Career Switching", text: "For someone moving toward cybersecurity from IT support, networking, software, systems administration, or another technology background, Ethical Hacking can provide a focused introduction to security. Existing technical knowledge can make it easier to understand some of the underlying concepts." },
        { title: "Beginner-Friendly With the Right Foundation", text: "Ethical Hacking can be learned by beginners, but beginners should not expect to master cybersecurity simply by memorizing tools or commands. Building a foundation in networking, operating systems, web technologies, and security concepts makes advanced topics easier to understand." },
        { title: "Long-Term Learning Value", text: "Cybersecurity changes continuously as technologies, vulnerabilities, attack techniques, and defensive practices evolve. Learning Ethical Hacking can therefore establish a foundation for continued specialization in cybersecurity rather than being treated as a one-time skill." },
      ],
      outro: "For learners considering this field, the strongest long-term approach is to combine structured training with regular practice, responsible security experimentation, continuous technical learning, and an understanding of legal and ethical boundaries.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "Technology-Focused Learning Environment", text: "North India's first AI-powered and Robotics learning centre. For Ethical Hacking learners, a modern technology environment can provide useful exposure to practical and technology-driven learning. While robotics is not directly part of ethical hacking, exposure to emerging technologies can help learners understand how cybersecurity increasingly intersects with connected devices, automation, AI, and digital systems. Learners from Punjab and other North Indian states can benefit from this kind of environment through classroom or online learning, without needing to relocate simply to begin developing cybersecurity skills." },
        { title: "Practical and Project-Oriented Approach", text: "Ethical Hacking is best understood through practical application. Learning can involve security exercises, controlled environments, vulnerability analysis, networking concepts, and project work that allows students to apply concepts rather than only memorize terminology. Projects can also help learners demonstrate their understanding when building a technical portfolio." },
        { title: "Course-Specific Cybersecurity Learning", text: "A focused Ethical Hacking program allows learners to concentrate on security-related concepts instead of treating cybersecurity as a small part of a broader technology course. The learning journey can cover areas such as networking fundamentals, system security, web security, vulnerability assessment, penetration-testing concepts, and responsible security practices." },
        { title: "Online + Offline Flexibility", text: "Learners have different circumstances. Some may prefer classroom interaction, while others may need to study alongside college, employment, or other commitments. Techcadd's learning model supports both online and offline participation. The Jalandhar centre provides a classroom option for learners who can attend locally, while students from other locations can consider online learning." },
        { title: "Suitable for Different Career Stages", text: "Ethical Hacking can be relevant to graduates entering technology careers, working professionals expanding their IT skills, and career changers exploring cybersecurity. A learner does not necessarily need to begin as a cybersecurity professional. Building the fundamentals first and progressing toward more specialized security skills can make the learning process more manageable." },
        { title: "Focus on Responsible Security Practices", text: "Ethical hacking differs from unauthorized hacking because security testing must be performed with appropriate permission. Understanding responsible testing, legal boundaries, vulnerability reporting, and ethical security practices is therefore an important part of developing cybersecurity skills. This foundation helps learners approach security work professionally." },
        { title: "Accessible to Learners Beyond Jalandhar", text: "The physical centre is in Jalandhar, Punjab, but learners from other North Indian states can consider online learning. This can make the program relevant to students and professionals in Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh who want to develop cybersecurity skills without relocating." },
      ],
    },
    tools: {
      title: "Security Tools and Technologies",
      columns: ["Tool", "Used for"],
      groups: [
        { area: "Kali Linux", tools: "Security-focused Linux distribution commonly used in cybersecurity labs" },
        { area: "Nmap", tools: "Network discovery and security auditing" },
        { area: "Wireshark", tools: "Network traffic analysis" },
        { area: "Burp Suite", tools: "Web application security testing" },
        { area: "Metasploit Framework", tools: "Security testing and controlled exploitation research" },
        { area: "OWASP resources", tools: "Widely used references for web application security" },
      ],
      note: toolsNote,
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Ethical Hacking can provide a foundation for exploring several cybersecurity career directions. Actual job eligibility depends on a person's broader technical skills, education, practical experience, and employer requirements.",
      roles,
      rolesNote: "With continued experience and specialization, learners may move toward areas such as penetration testing, application security, cloud security, security operations, vulnerability management, incident response, or security engineering.",
      notes: [
        { title: "Industries", text: "Cybersecurity skills can be relevant across industries that depend on digital systems and data, including IT services, software and technology, banking and financial services, e-commerce, telecommunications, healthcare technology, manufacturing, education technology, and government and public-sector technology environments." },
        { title: "Freelancing & Independent Work", text: "Experienced cybersecurity professionals may also explore legitimate freelance security work, security assessments, vulnerability research, or authorized testing engagements. However, security testing should only be performed when explicit permission and appropriate scope have been established. Ethical and legal authorization is fundamental to this field." },
        { title: "Future Relevance", text: "As organizations adopt cloud platforms, web applications, connected devices, automation, and AI-enabled systems, cybersecurity continues to evolve. Ethical Hacking provides a foundation for understanding how digital systems can be assessed and protected. Learners should expect continuous learning rather than treating the course as the final stage of cybersecurity education." },
      ],
      jobsTitle: "State-Wise Opportunities",
      jobs: [
        { title: "Punjab", text: "Punjab learners can explore cybersecurity alongside the state's IT, manufacturing, exports, startups, and digitally enabled businesses. Jalandhar, Ludhiana, Amritsar, Mohali, and Patiala can provide different local contexts for technology-oriented career development." },
        { title: "Haryana", text: "Haryana offers a strong technology and business environment around Gurugram and other major cities. Learners can use Ethical Hacking skills as a foundation for exploring cybersecurity roles connected with IT services, MNCs, e-commerce, logistics, and other digitally dependent businesses." },
        { title: "Himachal Pradesh", text: "For learners in Himachal Pradesh, online training can make specialized cybersecurity education more accessible. Cybersecurity skills can also complement remote-work and freelancing ambitions for technically inclined professionals." },
        { title: "Delhi NCR", text: "Delhi NCR provides one of the strongest environments for technology and digital employment in North India. Ethical Hacking skills can be relevant to organizations operating in IT, fintech, e-commerce, digital agencies, software, and other sectors where information security is important." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can explore cybersecurity alongside the state's expanding technology ecosystem. Noida is particularly relevant for IT and technology services, while Lucknow provides another growing technology and services environment." },
        { title: "Chandigarh", text: "Chandigarh and the wider Tricity region offer opportunities connected with IT, BPO, education, startups, and digital services. Ethical Hacking can complement existing technical education and provide a pathway toward cybersecurity specialization." },
      ],
    },
    faqTitle: "Frequently Asked Questions About the Ethical Hacking Course",
    cta: {
      title: "Build Practical Ethical Hacking Skills for a",
      highlight: "Cybersecurity Career",
      text: "Learn the fundamentals of ethical hacking, cybersecurity, networking, vulnerability assessment, web security, and security testing through a structured learning approach designed for students, graduates, working professionals, and career changers. Whether you are beginning your cybersecurity journey or adding security skills to an existing IT background, an Ethical Hacking course can help you develop a stronger understanding of how digital systems are assessed and protected.",
    },
  },
};
