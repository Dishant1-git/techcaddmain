import type { CoursePage } from "./types";

/* /courses/soc-analyst — long-form landing copy supplied by the client (used as given, section by section).
   Navigation is unchanged at the client's request (`navLabel`, the Courses ▾ link and the slug are as before).
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts for
     page-content purposes" that "should be replaced with verified student experiences before publication". The page keeps
     the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed with Techcadd". `level` was "Intermediate"; the
     supplied copy says beginners can join, so it is now "Beginner" — confirm.
   - Tools: only technology AREAS are listed, because the supplied text says "Specific software names should only be added
     to the course page after confirming that they are actually taught in the SOC Analyst program." (The old page named
     Splunk, Wazuh, Elastic, Sentinel etc. — add them back to `copy.tools` once confirmed.)
   - Editor note left out: "The exact syllabus, tools, and duration should be confirmed with Techcadd before publishing
     course-specific claims."
   - FAQs 2, 5, 6, 8 and 12 still carry "should be confirmed" wording — replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The four titles in `careers.notes` were added here (those paragraphs had no headings). The supplied copy has no
     learning-outcomes or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO + GEO strategy report), the CTA "Short Description" second paragraph and the enquiry-form field
   list are not page content. */

const roles = ["SOC Analyst", "Security Analyst", "Junior Security Analyst", "Cybersecurity Analyst"];

const techAreas = [
  "SIEM platforms",
  "Log-management systems",
  "Network monitoring tools",
  "Endpoint security technologies",
  "Threat-intelligence resources",
  "Incident-response platforms",
  "Security monitoring dashboards",
];

export const socAnalyst: CoursePage = {
  slug: "soc-analyst",
  title: "SOC Analyst Course",
  navLabel: "SOC Analyst",
  group: "cyber-cloud",
  icon: "Radar",
  tagline:
    "A SOC Analyst Course can help you understand how Security Operations Centres monitor digital environments, investigate suspicious activity, and support incident response.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, career changers, and beginners with an interest in cybersecurity",
  overview: [
    "A SOC Analyst Course introduces learners to the practical foundations of Security Operations Centre work and helps them understand how cybersecurity teams monitor, identify, investigate, and respond to potential security incidents. The field is particularly relevant for learners interested in cybersecurity, threat monitoring, incident analysis, and security operations.",
    "The course can be useful for graduates, postgraduates, working professionals, career changers, and beginners who want to build cybersecurity-oriented skills. Learners can expect to develop an understanding of security monitoring, suspicious activity, alerts, incidents, basic threat analysis, and the processes used by security teams to investigate potential risks.",
    "For students in Punjab, this can provide a structured pathway into a growing cybersecurity skill area while allowing learners to choose online learning according to their location. Learners who prefer classroom-based study can explore the Jalandhar centre where applicable.",
    "The overall focus should be on building practical understanding rather than simply learning cybersecurity terminology.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Cybersecurity Fundamentals",
      summary: "Learners begin by understanding the basic concepts behind cybersecurity, including common security risks, threats, vulnerabilities, and the importance of protecting digital systems.",
      topics: [],
      outcome: "Learners should be able to explain fundamental cybersecurity concepts and understand how security incidents can affect organisations.",
    },
    {
      title: "Security Operations Centre Fundamentals",
      summary: "This module introduces the role of a Security Operations Centre and explains how security teams monitor systems, identify suspicious activity, analyse alerts, and support incident response.",
      topics: [],
      outcome: "Learners should understand the purpose of a SOC and the responsibilities associated with SOC Analyst work.",
    },
    {
      title: "Networking Fundamentals for SOC Analysts",
      summary: "Understanding networks is important for analysing security events. Learners can develop foundational knowledge of network communication, common protocols, traffic, and network-related security events.",
      topics: [],
      outcome: "Learners should be able to interpret basic network-related information when investigating suspicious activity.",
    },
    {
      title: "Security Monitoring & Alerts",
      summary: "Learners explore how security monitoring works and why organisations generate security alerts. The focus is on understanding what an alert represents and how analysts can determine whether an event requires further investigation.",
      topics: [],
      outcome: "Learners should be able to understand security alerts and follow a structured approach when analysing them.",
    },
    {
      title: "Log Analysis",
      summary: "Logs provide valuable information about activity occurring across systems and applications. Learners can develop an understanding of how logs are examined to identify unusual behaviour or investigate potential incidents.",
      topics: [],
      outcome: "Learners should be able to read and interpret relevant log information as part of a security investigation.",
    },
    {
      title: "Threat Detection & Analysis",
      summary: "This area focuses on recognising suspicious patterns and understanding how analysts investigate potential threats. Learners can develop analytical thinking rather than relying only on predefined security terminology.",
      topics: [],
      outcome: "Learners should be able to approach suspicious security activity systematically and identify information that may require deeper investigation.",
    },
    {
      title: "Incident Response Fundamentals",
      summary: "SOC teams often play an important role when a security incident is identified. Learners can understand the basic stages involved in responding to incidents, documenting findings, and supporting appropriate security actions.",
      topics: [],
      outcome: "Learners should understand the basic incident-response process and the SOC Analyst's role within it.",
    },
    {
      title: "Security Analysis & Reporting",
      summary: "A SOC Analyst needs to communicate findings clearly. This includes documenting observations, recording relevant evidence, and communicating security events to appropriate teams.",
      topics: [],
      outcome: "Learners should be able to organise investigation findings and communicate security-related observations clearly.",
    },
  ],
  tools: techAreas,
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a SOC Analyst course?", a: "A SOC Analyst course teaches the fundamentals of security operations, including security monitoring, alert analysis, incident investigation, and basic incident response." },
    { q: "Who is eligible for a SOC Analyst course?", a: "Graduates, postgraduates, working professionals, career changers, and beginners with an interest in cybersecurity can explore a SOC Analyst course; the exact eligibility requirements should be confirmed with the training provider." },
    { q: "Is a SOC Analyst course suitable for beginners?", a: "Yes, a SOC Analyst course can be suitable for beginners who are willing to learn cybersecurity and technical fundamentals progressively." },
    { q: "What does a SOC Analyst course syllabus usually include?", a: "A SOC Analyst syllabus generally covers cybersecurity fundamentals, security operations, networking concepts, security monitoring, log analysis, alert investigation, threat detection, and incident-response fundamentals." },
    { q: "How long does a SOC Analyst course take?", a: "The course duration depends on the specific training program and its curriculum, so the exact duration should be confirmed with Techcadd before enrolment." },
    { q: "What are the fees for a SOC Analyst course?", a: "SOC Analyst course fees vary according to the training provider, curriculum, duration, learning mode, and included training components; the current Techcadd fee should be confirmed directly before publication." },
    { q: "Can I learn SOC Analyst skills online?", a: "Yes, SOC Analyst skills can be learned online through structured instruction, demonstrations, exercises, and practical cybersecurity learning activities." },
    { q: "Is offline SOC Analyst training available?", a: "Offline learning may be available at the Techcadd centre in Jalandhar, Punjab, but the current availability and batch schedule should be confirmed before publishing this as a current offering." },
    { q: "What jobs can I pursue after SOC Analyst training?", a: "Depending on skills and experience, learners can explore roles such as SOC Analyst, Junior Security Analyst, Security Analyst, and Cybersecurity Analyst, while additional experience may open pathways into specialised cybersecurity areas." },
    { q: "What salary can a SOC Analyst expect in India?", a: "SOC Analyst salaries in India vary significantly based on experience, location, organisation, technical skills, and role level, so salary figures should be treated as approximate rather than guaranteed." },
    { q: "Can I freelance after learning SOC Analyst skills?", a: "SOC-related knowledge can contribute to a broader cybersecurity skill set, but freelancing opportunities depend on practical expertise, the services offered, experience, and client requirements." },
    { q: "What tools are used by SOC Analysts?", a: "SOC Analysts commonly work with technologies such as SIEM platforms, log-management systems, network monitoring tools, endpoint security technologies, threat-intelligence resources, and incident-response platforms. The exact tools taught by Techcadd should be confirmed before being listed as course components." },
    { q: "Can someone without a cybersecurity background learn SOC Analyst skills?", a: "Yes, someone without previous cybersecurity experience can begin learning SOC Analyst fundamentals, although basic computer, networking, and technical concepts can make the learning process easier." },
    { q: "What is the career scope of a SOC Analyst?", a: "The career scope includes security monitoring and analysis roles, with potential progression into areas such as incident response, threat detection, threat intelligence, security engineering, and other cybersecurity specialisations." },
    { q: "Can students from Himachal Pradesh join a SOC Analyst course online?", a: "Yes, students from Himachal Pradesh can use online learning to study SOC Analyst concepts without needing to relocate to a physical training centre." },
    { q: "What are SOC Analyst opportunities in Punjab and Haryana?", a: "Punjab and Haryana learners can explore SOC Analyst and broader cybersecurity opportunities within IT services, MNCs, technology-driven businesses, e-commerce, and other organisations that depend on digital systems." },
    { q: "Can students from Rajasthan learn SOC Analyst skills online?", a: "Yes, students from Rajasthan can learn SOC Analyst skills online and build cybersecurity knowledge while continuing their education or employment from their home location." },
    { q: "Is SOC Analyst training suitable for students from Uttar Pradesh?", a: "Yes, students from Uttar Pradesh can consider SOC Analyst training as a focused way to begin developing cybersecurity skills, particularly if they are interested in security monitoring and related technology careers." },
  ],
  related: ["cybersecurity", "network-security", "ethical-hacking"],
  copy: {
    heading: { title: "SOC Analyst Course", highlight: "Online + Offline", meta: "SOC Analyst Course: Security Monitoring, Alert Analysis & Incident Response, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "SOC Analyst Course" },
    syllabus: {
      eyebrow: "Course Learning",
      title: "What You Will Learn & Tools Covered",
      text: "A SOC Analyst program should focus on the knowledge and practical abilities required to understand security monitoring and the investigation of potential security incidents.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "A SOC Analyst program can suit people coming from different educational and professional backgrounds.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer science, IT, engineering, mathematics, or related backgrounds may find SOC Analyst training relevant because it can build specialised cybersecurity skills beyond their academic education. It can help them understand how security monitoring and incident analysis are applied in professional environments. Graduates from other disciplines who are interested in moving into cybersecurity can also explore the field, provided they are willing to develop the required technical fundamentals." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who want to specialise further can use SOC Analyst learning to build a cybersecurity-focused skill set. For someone with a general technology or management background, learning security operations can provide a possible direction for career development or a future transition into cybersecurity." },
        { icon: "Briefcase", title: "Working Professionals", text: "Professionals already working in IT, networking, system administration, technical support, or related technology roles may find SOC concepts particularly useful. Their existing technical exposure can make it easier to understand security alerts, systems, networks, and incident-related processes. For working professionals, online learning can also make it easier to study alongside existing responsibilities." },
        { icon: "Shuffle", title: "Job Switchers", text: "People planning a transition into cybersecurity can consider SOC Analyst training as one possible entry point into security operations. Instead of attempting to learn the entire cybersecurity field at once, learners can focus on monitoring, analysing, and responding to security-related events." },
        { icon: "Laptop", title: "Freelancers", text: "Cybersecurity freelancing requires appropriate expertise and should not be confused with simply completing a course. However, learners can use SOC-related knowledge as part of a broader cybersecurity skill set and later explore suitable security-related services depending on their experience and capabilities." },
        { icon: "Building2", title: "Business Owners", text: "Business owners may benefit from understanding SOC concepts even if they do not intend to become professional SOC Analysts. Knowledge of security monitoring, suspicious activity, and incident response can help them better understand the cybersecurity risks affecting digital businesses." },
        { icon: "Compass", title: "Career Changers", text: "For someone moving from another career into technology, SOC Analyst learning can offer a structured introduction to a specialised cybersecurity area. Career changers should be prepared to spend time building foundational knowledge rather than expecting advanced security skills immediately." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can explore SOC Analyst training if they have an interest in cybersecurity and are willing to learn technical concepts step by step. Basic computer knowledge is useful, while familiarity with networking, operating systems, and security concepts can make the learning process easier." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "Students who have completed 12th can explore cybersecurity as a career area, although they may need more time to develop the technical and academic foundation required for professional SOC-related roles. Building knowledge progressively can be more useful than focusing only on a job title." },
      ],
      need: "While a technical foundation can be helpful, beginners can also start by developing the fundamental concepts gradually.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners in Punjab can study SOC Analyst skills while developing knowledge relevant to the region's growing IT, business, and technology ecosystem. Students who are closer to Jalandhar can consider available offline learning, while others can choose online learning." },
        { title: "Haryana", text: "Students and professionals from Gurugram, Faridabad, Panchkula, and other parts of Haryana may find SOC skills relevant alongside the state's strong presence of IT services, MNCs, e-commerce, and technology-driven businesses. Online learning can allow working learners to study without relocating." },
        { title: "Himachal Pradesh", text: "Learners from Shimla, Dharamshala, Solan, and other areas can use online learning to access cybersecurity education without depending on a nearby physical training centre. This can be particularly useful for students and professionals interested in technology careers or remote work." },
        { title: "Chandigarh", text: "Chandigarh learners can explore SOC Analyst training as a specialised technology skill alongside the region's IT, BPO, education, government, and startup ecosystem. Online learning can provide flexibility for students and working professionals." },
        { title: "Delhi NCR", text: "Delhi, Noida, and Ghaziabad offer exposure to a broad technology and corporate employment market. Learners from the region can use SOC training to build cybersecurity knowledge relevant to IT services, fintech, e-commerce, media, and other digitally dependent industries." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can study online and build cybersecurity skills without needing to move to another city for initial training. This provides a practical option for students and professionals exploring technology-based career paths." },
        { title: "Uttarakhand", text: "Students from Dehradun, Haridwar, and other parts of Uttarakhand can use online SOC learning to build specialised technology skills alongside existing education or employment. This can be useful for learners interested in expanding their opportunities beyond local industries." },
        { title: "Rajasthan", text: "Learners from Jaipur and other parts of Rajasthan can study SOC Analyst concepts online while building skills applicable to technology-dependent organisations. Online access can also make specialised cybersecurity learning more accessible outside major training locations." },
        { title: "Uttar Pradesh", text: "Students and professionals from Lucknow, Meerut, Noida, and other areas of Uttar Pradesh can explore SOC Analyst training as part of a broader cybersecurity career path. Online learning can be particularly convenient for learners balancing education, work, or other commitments." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Growing Importance of Cybersecurity", text: "As organisations increasingly depend on digital systems, networks, applications, and online services, security monitoring has become an important part of technology operations. SOC Analysts contribute to this environment by helping identify and investigate suspicious security activity." },
        { title: "Develop Practical Security Skills", text: "A SOC Analyst course can move learners beyond theoretical cybersecurity terminology by introducing practical concepts related to monitoring, alerts, incidents, investigation, and security response. These skills can form an important foundation for further cybersecurity learning." },
        { title: "Understand Security Monitoring", text: "Security monitoring is central to SOC operations. Learners can develop an understanding of how security teams observe systems and investigate unusual activities rather than treating every alert as an isolated technical problem." },
        { title: "Build a Foundation for Cybersecurity Roles", text: "SOC Analyst skills can support exploration of several cybersecurity career directions. Depending on experience and additional skills, learners may later progress toward areas such as security analysis, incident response, threat detection, or other specialised cybersecurity functions." },
        { title: "Useful for Career Switching", text: "Professionals from IT support, networking, systems, or other technical backgrounds may find SOC training useful when considering cybersecurity as their next career direction. It provides a focused area through which they can begin developing security-specific expertise." },
        { title: "Relevant Across Industries", text: "Cybersecurity is not restricted to one business sector. IT services, financial services, e-commerce, healthcare, education, manufacturing, government-related organisations, and other digitally dependent industries need to consider security risks. This makes cybersecurity knowledge relevant across different professional environments." },
        { title: "Supports Continuous Skill Development", text: "Cybersecurity is a continuously evolving field. Learning SOC fundamentals can encourage learners to keep developing their knowledge of security threats, monitoring practices, investigation methods, and emerging technologies rather than treating the course as the end of their learning journey." },
        { title: "Suitable for a Structured Learning Path", text: "For beginners, cybersecurity can initially appear broad and difficult to navigate. A SOC-focused program gives learners a defined area to concentrate on, helping them progressively understand security operations before moving toward more advanced cybersecurity domains." },
        { title: "Can Complement Existing Technical Knowledge", text: "Learners who already understand networking, operating systems, IT support, or related technologies can use SOC training to connect those concepts with security operations. This can help transform general technical knowledge into a more specialised cybersecurity skill set." },
        { title: "Supports Long-Term Career Development", text: "SOC Analyst training should be viewed as a foundation for continued professional development rather than a guaranteed job outcome. With experience, additional technical skills, and continuous learning, learners can explore broader cybersecurity responsibilities and specialised career paths." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "AI-Powered & Modern Learning Environment", text: "“North India's first AI-powered and Robotics learning centre”. For SOC Analyst learners, a modern technology-focused learning environment can provide useful exposure to how emerging technologies connect with cybersecurity. While robotics is not a core SOC skill, exposure to a technology-driven environment can encourage learners to understand security in the context of increasingly connected digital systems. Learners from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh can benefit from this environment through available online or offline learning options, depending on their location." },
        { title: "Course-Specific Practical Learning", text: "SOC Analyst learning is more useful when learners understand how security operations work rather than only memorising cybersecurity terminology. Practical exercises can help learners connect concepts such as security alerts, monitoring, investigation, and incident handling with real-world scenarios." },
        { title: "Industry-Relevant Cybersecurity Skills", text: "The SOC Analyst field requires an understanding of continuously changing security threats and defensive practices. A focused learning program can help learners build foundational knowledge relevant to security operations and prepare for further skill development." },
        { title: "Flexible Online + Offline Learning", text: "Learners have different circumstances and locations. The availability of online and offline learning provides flexibility for students who live outside Jalandhar as well as learners who prefer classroom-based education at the Jalandhar centre." },
        { title: "Suitable for Different Career Backgrounds", text: "SOC Analyst training can be explored by graduates, working professionals, IT learners, career changers, and beginners. A structured approach allows learners to gradually build cybersecurity knowledge instead of requiring them to already be cybersecurity specialists." },
        { title: "Focus on Career-Oriented Skills", text: "The program can help learners understand the skills associated with SOC operations and the broader cybersecurity ecosystem. This gives students a clearer idea of what they need to continue learning for security-focused career opportunities." },
        { title: "Learning Support for Online Students", text: "Students from outside Punjab do not necessarily need to relocate to Jalandhar to begin learning. Online learning can make the program accessible to learners across North India while allowing them to study from their own location." },
        { title: "Foundation for Further Cybersecurity Learning", text: "SOC Analyst knowledge can serve as a foundation for learners who later want to explore areas such as incident response, threat detection, security analysis, or other cybersecurity specialisations. Continuous learning remains important because cybersecurity practices and threats evolve over time." },
      ],
    },
    tools: {
      title: "Tools / Software / Technologies",
      columns: ["Area", "Technologies"],
      groups: [{ area: "Relevant technology areas", tools: techAreas.join(", ") }],
      note: "SOC environments commonly involve technologies for security monitoring, log management, network analysis, endpoint visibility, and incident investigation.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "SOC Analyst training can provide a foundation for exploring cybersecurity roles such as SOC Analyst, Security Analyst, Junior Security Analyst, Cybersecurity Analyst, and related security operations positions, depending on the learner's additional skills and experience.",
      roles,
      notes: [
        { title: "Career Progression", text: "Career development does not stop with an entry-level SOC role. With practical experience and continued learning, professionals may eventually explore areas such as incident response, threat detection, security engineering, threat intelligence, or other specialised cybersecurity domains." },
        { title: "Industries", text: "SOC-related skills can be relevant across industries that depend on digital infrastructure, including IT services, financial services, e-commerce, healthcare, manufacturing, education, and other technology-dependent organisations." },
        { title: "Freelancing", text: "For freelancing, learners should first develop sufficient practical expertise. SOC operations are often organisation-based, so freelancing opportunities may depend more on broader cybersecurity capabilities than on the SOC Analyst title alone." },
        { title: "Salary", text: "Salary expectations should also be treated as variable rather than guaranteed. Compensation can differ significantly according to experience, technical skills, location, organisation, role level, and additional cybersecurity expertise." },
      ],
      jobsTitle: "State-Wise Career Opportunities",
      jobs: [
        { title: "Punjab", text: "Punjab learners can explore cybersecurity opportunities alongside the state's IT, business, manufacturing, startup, and digitally connected organisations. Jalandhar and other major cities can provide a local starting point, while online learning can support learners from other parts of the state." },
        { title: "Haryana", text: "Haryana, particularly the Gurugram and Faridabad ecosystem, has a strong presence of MNCs, IT services, e-commerce, logistics, and technology-driven businesses. This creates a relevant environment for learners developing cybersecurity skills for corporate technology roles." },
        { title: "Delhi NCR", text: "Delhi NCR offers a broad technology employment ecosystem covering IT services, fintech, media, e-commerce, and large organisations. Learners can use SOC Analyst knowledge as a foundation while developing additional skills needed for cybersecurity positions." },
        { title: "Chandigarh", text: "The Chandigarh–Tricity region includes IT services, BPO, education, government-related organisations, and startups. Cybersecurity skills can complement broader IT knowledge for learners looking to specialise in security operations." },
        { title: "Uttar Pradesh", text: "Noida is particularly relevant for technology and IT services, while Lucknow and other cities offer opportunities across different sectors. Learners from Uttar Pradesh can use online training to build cybersecurity skills while continuing their existing education or employment." },
        { title: "Rajasthan", text: "Jaipur's technology, services, e-commerce, and digitally enabled business ecosystem provides another potential environment for cybersecurity professionals. Learners can build SOC skills locally and continue developing broader cybersecurity expertise for future opportunities." },
      ],
    },
    faqTitle: "FAQ — SOC Analyst Course",
    cta: {
      title: "Build Your Cybersecurity Career with a",
      highlight: "SOC Analyst Course",
      text: "Learn the fundamentals of security operations, monitoring, alert analysis, threat detection, and incident response through a structured SOC Analyst learning path. Whether you are a graduate, working professional, career changer, or beginner exploring cybersecurity, this program can help you develop a focused foundation for progressing toward security-related career opportunities.",
    },
  },
};
