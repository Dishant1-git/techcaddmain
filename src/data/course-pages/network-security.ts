import type { CoursePage } from "./types";

/* /courses/network-security — long-form landing copy supplied by the client (used as given, section by section).
   Points to CONFIRM with the client:
   - The 10 supplied reviews are NOT published: the supplied text itself says they are "sample testimonial drafts for page
     development" to be published as real reviews only after being replaced with genuine learner feedback. The page keeps
     the shared testimonials until real reviews arrive.
   - `duration` is a placeholder — the supplied text says "To be confirmed based on the current course structure".
   - Syllabus / tools: "exact modules and tools should be confirmed against the institute's final syllabus" and "The exact
     software and hardware available for this course should be confirmed with the training centre." (editor notes, left out).
   - FAQs 2, 4, 5, 6 and 9 still carry "should be confirmed" / "not established from the provided information" wording —
     replace with real answers.
   - "North India's first AI-powered and Robotics learning centre" is a first/only claim.
   - The tools came as a plain list; the "Area" labels in the tools table were added here to fit the layout.
   - The supplied copy has no state-wise career section, learning-outcomes list or project list, so those blocks are hidden.
   The supplied Stage 5 (SEO / GEO / AEO / AIO strategy report) and the enquiry-form field list are not page content. */

const roles = [
  "Network Support Technician",
  "Network Administrator",
  "IT Support Technician",
  "Network Engineer",
  "Technical Support Engineer",
  "Junior Network Security professional",
  "Infrastructure Support professional",
];

export const networkSecurity: CoursePage = {
  slug: "network-security",
  title: "Network Security & CCNA Course",
  navLabel: "Network Security & CCNA",
  group: "cyber-cloud",
  icon: "Network",
  tagline:
    "Build practical knowledge of computer networking — network infrastructure, IP addressing, routing, switching and troubleshooting — along with the principles used to protect networks, systems and digital resources.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Graduates, postgraduates, working professionals, career changers, beginners, and other learners interested in networking and network security",
  overview: [
    "A Network Security & CCNA Course is designed to build practical knowledge of computer networking while introducing the principles used to protect networks, systems, and digital resources. The CCNA-focused component helps learners understand core networking concepts such as network infrastructure, IP addressing, routing, switching, connectivity, and network troubleshooting, while the network security component introduces concepts related to secure network operation, access control, threats, vulnerabilities, and basic security practices.",
    "The program can be useful for graduates, working professionals, career changers, beginners interested in networking, and individuals looking to develop skills relevant to IT infrastructure and cybersecurity. Learners can expect a combination of networking concepts, security fundamentals, troubleshooting approaches, and practical technology exposure.",
    "For learners in Punjab, the course can be particularly relevant to those exploring IT and networking opportunities in cities such as Jalandhar, Ludhiana, and Mohali. Techcadd's physical learning centre is located in Jalandhar, Punjab, while learners outside the area can explore online learning options.",
  ],
  gains: [],
  syllabus: [
    {
      title: "Networking Fundamentals",
      summary: "Learners begin with the basic concepts required to understand computer networks.",
      topics: ["Computer networking fundamentals", "Types of networks", "Network components", "Network topologies", "OSI and TCP/IP models", "Network protocols", "Client-server communication", "Basic network architecture"],
      outcome: "Learners should be able to explain how devices communicate within a network and understand the role of common networking components.",
    },
    {
      title: "IP Addressing and Subnetting",
      summary: "IP addressing is an essential part of networking and CCNA-level knowledge.",
      topics: ["IPv4 addressing", "IPv6 fundamentals", "Public and private IP addresses", "Subnet masks", "Subnetting concepts", "Default gateways", "Basic address planning"],
      outcome: "Learners should be able to understand IP addressing structures and apply basic subnetting concepts when working with network configurations.",
    },
    {
      title: "Switching Concepts",
      summary: "Switching explains how devices communicate within local networks.",
      topics: ["Ethernet fundamentals", "Switch operation", "MAC addresses", "VLAN concepts", "Access ports", "Trunking fundamentals", "Basic switching configuration concepts"],
      outcome: "Learners should understand how switches connect devices and how logical network segmentation can be implemented.",
    },
    {
      title: "Routing Fundamentals",
      summary: "Routing is another core area of networking.",
      topics: ["Routing concepts", "Routing tables", "Static routing", "Dynamic routing fundamentals", "Default routes", "Inter-network communication", "Basic router configuration concepts"],
      outcome: "Learners should understand how traffic moves between different networks and how routing decisions are made.",
    },
    {
      title: "Network Services",
      summary: "Modern networks depend on several services for communication and accessibility.",
      topics: ["DNS", "DHCP", "NAT", "Network connectivity", "Basic network services", "Troubleshooting network communication"],
      outcome: "Learners should understand the purpose of common network services and how they contribute to normal network operation.",
    },
    {
      title: "Network Security Fundamentals",
      summary: "The security component introduces the principles used to protect network environments.",
      topics: ["Network security concepts", "Common network threats", "Vulnerabilities", "Authentication", "Authorization", "Access control", "Secure network practices", "Security awareness"],
      outcome: "Learners should be able to recognise common network-security risks and understand the basic principles used to reduce them.",
    },
    {
      title: "Network Security Technologies",
      summary: "Once fundamental security concepts are understood, learners can explore technologies and approaches used to secure network environments.",
      topics: ["Firewalls", "Secure network access", "VPN concepts", "Network segmentation", "Security policies", "Basic monitoring concepts", "Secure communication"],
      outcome: "Learners should understand how different security mechanisms can be used to control, protect, and monitor network traffic.",
    },
    {
      title: "Network Troubleshooting",
      summary: "Troubleshooting brings networking concepts together through problem-solving. Learners can work through situations involving the areas below.",
      topics: ["Connectivity problems", "IP configuration issues", "Routing problems", "Switching issues", "DNS-related problems", "Access problems", "Basic security-related connectivity issues"],
      outcome: "Learners should develop a logical approach to identifying and isolating common network problems.",
    },
  ],
  tools: ["Cisco networking concepts and devices", "Cisco Packet Tracer", "Network simulation environments", "Routers", "Switches", "Firewalls", "IP addressing and subnetting tools", "Network troubleshooting utilities", "Packet-analysis concepts"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Network Security & CCNA course?", a: "A Network Security & CCNA course teaches networking fundamentals along with essential network-security concepts, including IP addressing, routing, switching, troubleshooting, network threats, access control, and secure networking practices." },
    { q: "Who is eligible for a Network Security & CCNA course?", a: "The course can be considered by graduates, postgraduates, working professionals, career changers, beginners, and other learners interested in networking and network security. Exact admission requirements should be confirmed with the training provider." },
    { q: "Is Network Security & CCNA suitable for beginners?", a: "Yes, the course can be suitable for beginners when it starts with fundamental networking concepts and progressively introduces security topics. Basic computer familiarity can make the learning process easier." },
    { q: "What does the Network Security & CCNA syllabus include?", a: "The syllabus can include networking fundamentals, OSI and TCP/IP models, IP addressing, subnetting, switching, VLAN concepts, routing, network services, troubleshooting, network-security fundamentals, firewalls, VPN concepts, access control, and secure networking practices. The exact syllabus should be confirmed before enrolment." },
    { q: "How long does a Network Security & CCNA course take?", a: "The exact duration is not established from the provided course information. Course duration can vary according to the training structure, learning mode, and depth of practical coverage." },
    { q: "What are the fees for a Network Security & CCNA course?", a: "The exact course fee is not established from the provided information. Prospective learners should contact the training centre for current fee details and any applicable learning options." },
    { q: "Can I study Network Security & CCNA online?", a: "Yes, online learning is an available learning mode for this program. Learners outside Jalandhar can use online learning to study networking and security concepts without relocating." },
    { q: "Can I attend the course offline?", a: "Yes, offline learning can be considered at the Jalandhar, Punjab centre. Learners should confirm the current batch schedule, availability, and delivery format before enrolling." },
    { q: "What tools are used for Network Security & CCNA training?", a: "Common networking learning environments can include Cisco-related networking technologies, network simulation tools such as Cisco Packet Tracer, routers, switches, firewalls, and network troubleshooting utilities. The exact tools available in the course should be confirmed with the training provider." },
    { q: "What jobs can I pursue after Network Security & CCNA?", a: "Potential career directions include network support, IT support, network administration, technical support, networking, infrastructure support, and entry-level security-oriented roles. Actual job eligibility depends on practical skills, experience, additional qualifications, and employer requirements." },
    { q: "What is the salary after a Network Security & CCNA course?", a: "There is no single fixed salary after completing the course. Compensation varies according to job role, location, experience, technical skills, employer, and additional certifications or qualifications." },
    { q: "Can Network Security & CCNA help with freelancing?", a: "It can provide a foundation for certain technical-support and networking-related freelance services, particularly after gaining sufficient practical experience. Beginners should develop strong technical competence before independently handling client network or security environments." },
    { q: "What is the career scope of Network Security & CCNA?", a: "The course can provide a foundation for careers in networking, IT infrastructure, technical support, and network security. Learners can later specialise in areas such as cybersecurity, cloud networking, infrastructure, or security operations." },
    { q: "Can students from Himachal Pradesh join Network Security & CCNA online?", a: "Yes, students from Himachal Pradesh can join through online learning. Learners from locations such as Shimla, Dharamshala, and Solan can study remotely while building networking and security skills." },
    { q: "What are Network Security & CCNA opportunities in Punjab and Haryana?", a: "Punjab and Haryana offer opportunities across IT services, business technology, manufacturing, logistics, e-commerce, and other digitally connected industries. Networking and security skills can support career exploration in technical support, infrastructure, networking, and related roles." },
    { q: "Can students from Rajasthan learn Network Security & CCNA online?", a: "Yes, learners from Rajasthan can study the course online. This can be useful for people who want networking and security training while continuing their education or work in cities such as Jaipur." },
    { q: "Is Network Security & CCNA suitable for students from Uttar Pradesh?", a: "Yes, learners from Uttar Pradesh can consider the course if they are interested in networking, IT infrastructure, or security. Online learning allows learners in cities such as Lucknow and Meerut to access the program without relocating to Jalandhar." },
    { q: "Can learners from Jammu & Kashmir join the course?", a: "Yes, learners from Jammu & Kashmir can use online learning to pursue the course. It can provide a structured introduction to networking and security for people interested in developing technical IT skills." },
    { q: "Is Network Security & CCNA useful for someone changing careers?", a: "Yes, it can be useful for career changers interested in moving toward networking, IT infrastructure, or cybersecurity. Beginners should focus on developing networking fundamentals before progressing toward specialised security roles." },
    { q: "Does completing the course guarantee a job?", a: "No, completing a course does not guarantee employment. Career outcomes depend on technical skills, practical experience, interview performance, qualifications, employer requirements, and the learner's continued professional development." },
  ],
  related: ["cybersecurity", "soc-analyst", "ethical-hacking"],
  copy: {
    heading: { title: "Network Security & CCNA Course", highlight: "Online + Offline", meta: "Network Security & CCNA Course: Build Networking & Security Skills, Online + Offline | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Network Security & CCNA Course" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "Course Learning Structure",
      text: "A Network Security & CCNA program should progressively build knowledge from basic networking concepts toward network security.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Course",
      intro: "A Network Security & CCNA Course can be relevant to people from different educational and professional backgrounds because networking knowledge forms an important foundation for many IT infrastructure and security-related roles.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from computer-related or other technical backgrounds can use the course to develop practical networking knowledge alongside their academic education. It can provide a structured path for understanding how networks operate and how basic security practices are applied to network environments. Graduates who are considering IT infrastructure, networking, technical support, or cybersecurity-related career paths may find the combination of CCNA and network security particularly useful." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who want to move toward infrastructure or cybersecurity can use the program to strengthen their understanding of networking. This can be useful when their academic qualification is broader than the practical networking skills expected in technical roles." },
        { icon: "Briefcase", title: "Working Professionals", text: "IT professionals already working in technical support, system administration, infrastructure, or related areas may benefit from developing stronger networking fundamentals. Understanding routing, switching, IP addressing, troubleshooting, and network security concepts can complement existing technical responsibilities. For professionals considering a move toward networking or cybersecurity, the course can also provide a structured way to build relevant knowledge without treating networking and security as completely separate subjects." },
        { icon: "Shuffle", title: "Job Switchers", text: "People planning a career change into IT can consider the program if they are interested in networking and infrastructure. A combined networking and security learning path can help them understand the technical foundation behind enterprise network environments. However, career switching should be approached as a skills-building process. Completing a course alone does not guarantee employment; practical ability, technical understanding, projects, troubleshooting skills, and interview preparation also matter." },
        { icon: "Laptop", title: "Freelancers", text: "Networking is generally more infrastructure-oriented than many conventional freelance digital skills, but networking knowledge can still be useful for individuals providing technical IT services where appropriate. Understanding network configuration, troubleshooting, connectivity, and security fundamentals can support certain technology-support activities. Freelancers should focus on offering services that match their actual technical competence rather than presenting themselves as security specialists without sufficient practical experience." },
        { icon: "Building2", title: "Business Owners", text: "Business owners and people responsible for technology decisions can benefit from understanding basic network security concepts. Knowledge of access control, network threats, secure connectivity, and common security practices can help them communicate more effectively with IT teams and make better-informed technology decisions. The course does not need to be limited to people seeking a networking job. Basic network-security awareness can also be valuable when managing technology-dependent business operations." },
        { icon: "Compass", title: "Career Changers", text: "Someone moving from a non-IT field into technology may consider this course as an introduction to networking and security. Beginners should be prepared to spend time understanding fundamental concepts rather than expecting advanced cybersecurity skills immediately. A logical progression is important: first understand how networks work, then understand how those networks can be protected and monitored." },
        { icon: "Rocket", title: "Beginners", text: "Beginners can consider a Network Security & CCNA course if they have an interest in computers, networking, infrastructure, or cybersecurity. Prior professional networking experience is not necessarily required to start learning the fundamentals, although basic computer knowledge can make the learning process easier. For beginners, concepts such as IP addressing, protocols, routing, switching, network devices, and troubleshooting should be understood step by step before moving into more security-focused topics." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "12th-pass learners can also explore this field, particularly if they are interested in IT and networking. However, they should understand that networking and security are technical areas requiring continuous practice and learning. Building a strong foundation first can make later professional development easier." },
      ],
      need: "Basic computer familiarity can make the learning process easier.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "",
      items: [
        { title: "Punjab", text: "Learners from Punjab can use online learning to build networking and security skills while remaining in cities such as Ludhiana, Amritsar, Mohali, Patiala, or Phagwara. The combination can be relevant for people exploring opportunities within Punjab's growing IT, business, manufacturing, and technology-support environments." },
        { title: "Haryana", text: "For learners from Haryana, online training can provide access to networking-focused education without requiring relocation. Professionals and graduates around Gurugram and Faridabad may find networking knowledge relevant to IT services, corporate infrastructure, e-commerce, logistics, and technology-driven businesses." },
        { title: "Himachal Pradesh", text: "Learners from Himachal Pradesh can study online while continuing their education or work locally. Networking skills can be useful for people interested in IT support, remote technology roles, business connectivity, and organizations operating across tourism, hospitality, pharmaceuticals, and other sectors." },
        { title: "Chandigarh", text: "Learners in Chandigarh and the surrounding Tricity region can pursue the course through online learning while developing skills applicable to IT services, BPO environments, educational organizations, startups, and other technology-dependent workplaces." },
        { title: "Delhi NCR", text: "For learners from Delhi NCR, online learning can provide flexibility for graduates and working professionals. The region's large IT, fintech, e-commerce, media, and technology-services ecosystem makes networking and security knowledge relevant across different technical environments." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can study online while building technical skills from their existing location. Network knowledge can support career exploration in IT services, organizations using digital systems, e-commerce, and remote technology work." },
        { title: "Uttarakhand", text: "Learners from Dehradun, Haridwar, and other parts of Uttarakhand can use online learning to develop networking fundamentals without relocating. The skills can be relevant to technology operations across education, hospitality, pharmaceuticals, and other digitally connected businesses." },
        { title: "Rajasthan", text: "Learners from Rajasthan, particularly Jaipur and surrounding areas, can study online while developing technical knowledge relevant to IT services and organizations using digital infrastructure. The networking foundation can also serve as a starting point for deeper exploration of cybersecurity." },
        { title: "Uttar Pradesh", text: "Learners from Uttar Pradesh can use online learning to build networking and security knowledge alongside college, employment, or other commitments. For learners in cities such as Lucknow and Meerut, the course can provide a pathway toward exploring IT infrastructure, technical support, networking, and security-oriented roles." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This Program",
      intro: "",
      points: [
        { title: "Networking Is a Core IT Skill", text: "Networks connect computers, applications, users, servers, devices, and digital services. Understanding how these systems communicate provides a strong technical foundation for people interested in infrastructure and cybersecurity." },
        { title: "Combines Networking With Security Fundamentals", text: "Learning networking and security together can provide a more connected understanding of IT environments. Instead of viewing security as an isolated topic, learners can understand how network architecture, communication, access, and security practices relate to one another." },
        { title: "Builds Practical Troubleshooting Knowledge", text: "Networking professionals frequently need to identify connectivity and configuration problems. Learning systematic troubleshooting approaches can help learners understand how to examine network issues instead of relying only on theoretical definitions." },
        { title: "Relevant to Multiple IT Career Paths", text: "Networking knowledge can contribute to several technical career directions, including networking, IT support, infrastructure, system administration, and cybersecurity. The exact role a learner can pursue depends on their additional skills, experience, and level of technical proficiency." },
        { title: "Develops Understanding of Network Infrastructure", text: "A strong understanding of IP addressing, network communication, routing, switching, and related infrastructure concepts helps learners understand what happens behind everyday internet and enterprise connectivity. This foundation can become especially valuable when progressing toward more advanced networking or security technologies." },
        { title: "Useful for Career Switching", text: "People moving toward IT from another field often need a structured starting point. A combined networking and security program can provide a defined technical direction for someone who wants to explore infrastructure or cybersecurity rather than general-purpose software development." },
        { title: "Creates a Foundation for Further Specialisation", text: "Network security is a broad field. After developing foundational networking knowledge, learners can explore more specialised areas such as cybersecurity, security operations, network administration, cloud networking, or other infrastructure-related technologies according to their interests and experience." },
        { title: "Suitable for Continuous Skill Development", text: "Networking and security technologies continue to evolve, so professionals need to keep updating their knowledge. Starting with core concepts gives learners a foundation they can build upon through further certifications, practical labs, projects, professional experience, and specialised security learning." },
      ],
      outro: "For beginners as well as working professionals, the real value of the program comes from developing understanding and practical problem-solving ability, rather than simply memorising networking terminology.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose Techcadd",
      intro: "",
      points: [
        { title: "AI-Powered and Robotics Learning Environment", text: "“North India's first AI-powered and Robotics learning centre”. For learners pursuing Network Security & CCNA, a modern technology-focused environment can provide useful exposure to how networking concepts connect with broader technology ecosystems. While robotics is not a core part of network security, exposure to modern technology environments can help learners understand that networking supports many connected systems and digital applications. Learners joining from Punjab, Haryana, Himachal Pradesh, Chandigarh, Delhi NCR, Jammu & Kashmir, Uttarakhand, Rajasthan, and Uttar Pradesh can access this learning approach through online learning, while learners near Jalandhar can consider the physical centre." },
        { title: "Course-Specific Practical Learning", text: "Network Security & CCNA requires more than memorising networking terminology. Practical learning can help learners understand concepts such as network connectivity, IP addressing, routing, switching, troubleshooting, and fundamental security practices in a more meaningful way." },
        { title: "Networking and Security in One Learning Path", text: "The program brings together two closely related areas: networking and network security. Understanding how networks function first makes it easier to understand where security controls, access restrictions, threats, and vulnerabilities fit into an IT environment." },
        { title: "Structured Learning for Different Backgrounds", text: "The program can accommodate learners coming from different backgrounds, including graduates, working professionals, career changers, and beginners. A structured progression from networking fundamentals toward security concepts can make the subject easier to approach." },
        { title: "Online + Offline Learning Flexibility", text: "Learners who are able to attend the Jalandhar centre can consider offline learning, while those living in other locations can explore online learning. This makes the course accessible to learners across North Indian states without requiring everyone to relocate to Jalandhar." },
        { title: "Focus on Troubleshooting Skills", text: "Troubleshooting is an important part of networking. Understanding how to identify connectivity problems, examine configurations, and logically isolate issues can be more useful professionally than simply knowing networking definitions." },
        { title: "Foundation for Further Technical Growth", text: "Network Security & CCNA can serve as a foundation for learners who later want to explore areas such as network administration, infrastructure, cybersecurity, cloud networking, or security operations. Further specialisation would depend on the learner's interests and additional training." },
        { title: "Career-Oriented Technical Knowledge", text: "The course focuses on technical concepts that can support career exploration in networking and IT infrastructure. Learners can use the foundation to develop further skills, practical projects, troubleshooting ability, and professional experience according to their chosen career direction." },
      ],
    },
    tools: {
      title: "Tools, Technologies & Practical Environment",
      groups: [
        { area: "Networking", tools: "Cisco networking concepts and devices, Routers, Switches" },
        { area: "Simulation", tools: "Network simulation environments" },
        { area: "Security", tools: "Firewalls" },
        { area: "Addressing", tools: "IP addressing and subnetting tools" },
        { area: "Troubleshooting & analysis", tools: "Network troubleshooting utilities, Packet-analysis concepts" },
      ],
      note: "Cisco Packet Tracer is commonly used for networking simulation and can help learners practise network configurations in a simulated environment.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "Network Security & CCNA can provide a foundation for several technical career directions. Depending on additional skills and experience, learners may explore roles such as:",
      roles,
      rolesNote: "Actual job responsibilities and eligibility vary by employer and experience level.",
      notes: [
        { title: "Relevant Industries", text: "Networking and security skills can be useful across industries that depend on connected systems, including IT services, telecommunications, banking and financial services, e-commerce, manufacturing, healthcare, education, government and public-sector technology environments, and cloud and technology services." },
        { title: "Career Progression", text: "A learner may begin with foundational networking or technical-support responsibilities and later specialise in areas such as network administration, cybersecurity, cloud networking, infrastructure, or security operations. The progression depends on practical experience, additional certifications or training, technical projects, and the ability to work with real-world network environments." },
        { title: "Freelancing and Independent Work", text: "Networking is generally more infrastructure-focused than conventional freelance skills. However, experienced professionals may find opportunities in appropriate technical-support and network-related services. Beginners should first build sufficient practical competence before independently handling client network or security environments." },
        { title: "Future Relevance", text: "As organisations continue to depend on connected devices, cloud services, digital applications, and distributed infrastructure, understanding networking remains relevant to many technology roles. Security is also increasingly connected to network architecture and access management. The strongest long-term approach is therefore not to treat CCNA or network security as a one-time skill, but as a foundation for continuous technical development." },
      ],
      jobsTitle: "",
      jobs: [],
    },
    faqTitle: "Frequently Asked Questions About the Network Security & CCNA Course",
    cta: {
      title: "Build Your Networking & Security Skills With",
      highlight: "Network Security & CCNA",
      text: "Develop a practical foundation in networking, CCNA concepts, network troubleshooting, and security fundamentals through a structured Network Security & CCNA Course designed for learners interested in networking and IT infrastructure. Whether you are beginning your IT journey, planning a career change, or looking to strengthen existing technical knowledge, you can enquire about the available learning format and course details.",
    },
  },
};
