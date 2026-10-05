import type { CoursePage } from "./types";

/* /courses/ui-ux-design — NEW page (Courses ▾ Digital Marketing). Long-form landing copy supplied by the client, used as
   given, section by section.
   - REVIEWS ARE NOT PUBLISHED: every supplied review has a "[Name]" placeholder, and the supplied text says bracketed items
     must be filled in with real information before publishing. This page keeps the shared testimonials section until real,
     named reviews are provided (then add `copy.reviews`).
   - The supplied text gives no course duration → `duration` is a neutral placeholder. CONFIRM with the client.
   - The supplied FAQ numbering skips 3, 4, 11 and 12 (fee, duration, certificate…) — only the questions provided are shown. */

const roles = ["UI designer", "UX designer", "Product designer", "UX researcher", "Interaction designer", "Design system specialist"];

export const uiUxDesign: CoursePage = {
  slug: "ui-ux-design",
  title: "UI/UX Design Course",
  navLabel: "UI/UX Design",
  group: "marketing",
  icon: "Layers",
  tagline:
    "Learn to research users, plan journeys, build wireframes, create high-fidelity interfaces in Figma and test prototypes, the same workflow product teams use.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Basic computer skills; no design degree or coding knowledge required",
  overview: [
    "The UI/UX design course at techcadd is built for graduates, working professionals, job switchers, freelancers and business owners who want to enter one of India's fastest-growing digital careers. You learn how to research users, plan journeys, build wireframes, create high-fidelity interfaces in Figma and test prototypes, the same workflow product teams use at startups, agencies and IT companies.",
    "This UI/UX design course in India is designed around practical, portfolio-first learning. Instead of only theory, you work on real mobile app and website projects, learn design thinking, usability principles and design systems, and finish with case studies you can show to recruiters or clients. No prior design background is required; beginners start from fundamentals, and working designers can sharpen their skills.",
    "Students across Punjab, from Ludhiana and Amritsar to Mohali, can join the programme, and the same live classes are open to learners in other states online. The techcadd centre in Jalandhar offers classroom learning for those who prefer in-person guidance, while the online mode gives the same curriculum with live mentoring and recorded revision support.",
    "Whether you want a job as a UI/UX designer, a freelance career or better design for your own business, this course gives you a clear, skill-based path.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Explain design roles and the product lifecycle clearly in an interview",
    "Turn user needs into clear design goals",
    "Structure an app or website so users find things easily",
    "Quickly test ideas with wireframes before investing time in visuals",
    "Produce professional, developer-ready interfaces in Figma",
    "Demonstrate how a product feels before it is built",
    "Back every design decision with evidence from usability testing",
    "A portfolio of real projects and interview confidence",
  ],
  syllabus: [
    {
      title: "Module 1: Foundations of UI/UX Design",
      summary: "Learn the difference between UI, UX, product design and graphic design, how digital products are built, and how designers work with developers and product managers.",
      topics: ["UI vs UX vs product design vs graphic design", "How digital products are built", "Working with developers and product managers"],
      outcome: "you can explain design roles and the product lifecycle clearly in an interview.",
    },
    {
      title: "Module 2: Design Thinking & User Research",
      summary: "Cover the design thinking process, interviews, surveys, competitor analysis, personas, empathy maps and problem statements.",
      topics: ["The design thinking process", "Interviews and surveys", "Competitor analysis", "Personas, empathy maps and problem statements"],
      outcome: "you can turn user needs into clear design goals.",
    },
    {
      title: "Module 3: Information Architecture & User Flows",
      summary: "Learn sitemaps, card sorting, navigation patterns, task flows and user journey maps.",
      topics: ["Sitemaps and card sorting", "Navigation patterns", "Task flows", "User journey maps"],
      outcome: "you can structure an app or website so users find things easily.",
    },
    {
      title: "Module 4: Wireframing & Low-Fidelity Design",
      summary: "Sketch and build wireframes for mobile and web, and learn layout grids, spacing and content hierarchy.",
      topics: ["Wireframes for mobile and web", "Layout grids and spacing", "Content hierarchy"],
      outcome: "you can quickly test ideas before investing time in visuals.",
    },
    {
      title: "Module 5: Visual Design Principles",
      summary: "Study colour theory, typography, iconography, contrast, imagery and visual hierarchy, along with accessibility basics such as readable text and colour contrast.",
      topics: ["Colour theory and typography", "Iconography, contrast and imagery", "Visual hierarchy", "Accessibility basics: readable text and colour contrast"],
      outcome: "your screens look clean, consistent and usable for everyone.",
    },
    {
      title: "Module 6: UI Design in Figma",
      summary: "Work with frames, auto layout, components, variants, styles and variables. Build high-fidelity screens for mobile apps and responsive websites.",
      topics: ["Frames and auto layout", "Components and variants", "Styles and variables", "High-fidelity screens for mobile apps and responsive websites"],
      outcome: "you can produce professional, developer-ready interfaces.",
    },
    {
      title: "Module 7: Prototyping & Interaction Design",
      summary: "Create clickable prototypes, micro-interactions and transitions, and learn basic motion principles.",
      topics: ["Clickable prototypes", "Micro-interactions and transitions", "Basic motion principles"],
      outcome: "you can demonstrate how a product feels before it is built.",
    },
    {
      title: "Module 8: Design Systems",
      summary: "Build reusable component libraries, design tokens and documentation, the way product teams maintain consistency at scale.",
      topics: ["Reusable component libraries", "Design tokens", "Documentation"],
      outcome: "you can work in team environments that rely on design systems.",
    },
    {
      title: "Module 9: Usability Testing & Iteration",
      summary: "Plan tests, observe users, gather feedback, analyse issues and improve your designs.",
      topics: ["Planning tests", "Observing users and gathering feedback", "Analysing issues", "Improving your designs"],
      outcome: "you can back every design decision with evidence.",
    },
    {
      title: "Module 10: Developer Handoff, Portfolio & Career Preparation",
      summary: "Learn specs, asset export and communication with developers. Then build case studies, shape your resume and practise design interviews and design challenges.",
      topics: ["Specs, asset export and communication with developers", "Building case studies", "Shaping your resume", "Design interviews and design challenges"],
      outcome: "a portfolio of real projects and interview confidence.",
    },
  ],
  tools: ["Figma", "FigJam", "Miro", "Maze", "Adobe Photoshop", "Adobe Illustrator", "Notion"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a UI/UX design course?", a: "A UI/UX design course teaches you how to design digital products, such as apps and websites, that look good and are easy to use. UI (user interface) covers the visuals, like layouts, colours and typography. UX (user experience) covers research, user flows and testing. You learn both, along with Figma and prototyping, through practical projects." },
    { q: "Who is eligible for the UI/UX design course?", a: "Anyone with basic computer skills can join, including graduates, postgraduates, working professionals, job switchers, freelancers, business owners and 12th-pass students. No design degree or coding knowledge is required, because the course starts from fundamentals." },
    { q: "What does the UI/UX design syllabus include?", a: "The syllabus covers design thinking, user research, information architecture, wireframing, visual design, Figma UI design, prototyping, design systems, usability testing, developer handoff and portfolio building. The full module-wise breakdown is listed in the curriculum section above." },
    { q: "Which tools will I learn in this course?", a: "You will mainly learn Figma, along with FigJam or Miro for brainstorming, basic Adobe Photoshop and Illustrator, usability testing tools and accessibility checkers. The focus is on design thinking that carries over to any tool." },
    { q: "Is the UI/UX design course suitable for beginners?", a: "Yes, the course begins with design basics such as layout, colour, typography and spacing before moving to advanced topics. Beginners from non-design backgrounds can follow along, though regular practice outside class helps a lot." },
    { q: "Can I learn UI/UX design online, and is it as good as offline?", a: "Yes, the online mode covers the same curriculum through live classes, mentor interaction and revision support. Offline classes at the Jalandhar centre suit learners who prefer face-to-face guidance. Choose the mode that fits your schedule and learning style." },
    { q: "What jobs can I get after a UI/UX design course, and what is the salary?", a: "You can apply for roles such as UI designer, UX designer, product designer, UX researcher and interaction designer, or work as a freelancer. As a rough guide, fresher salaries in India often fall between ₹2.5 and ₹5 lakh per year. These figures are approximate and depend on your portfolio, skills, city and company. No course can guarantee a job." },
    { q: "Can I do freelancing after learning UI/UX design?", a: "Yes, many designers freelance by designing websites, mobile app screens and landing pages for small businesses and startups. A strong portfolio of case studies and clear communication with clients matter most when you are starting out." },
    { q: "Can students from Himachal Pradesh join a UI UX design course online?", a: "Yes, students from Himachal Pradesh can join the UI UX design course in Himachal Pradesh through live online classes without travelling. The online format also suits freelancers and remote workers in hill areas, who can later offer design services to clients across India." },
    { q: "What are the UI UX designer job opportunities in Punjab and Haryana?", a: "Designers can find roles in startups, IT firms, e-commerce companies, logistics and manufacturing businesses that need better websites, apps and dashboards. UI UX designer jobs in Punjab and UI UX designer jobs in Haryana are also open to remote and hybrid work for companies in larger metros, so a strong portfolio widens your options." },
    { q: "Is the UI/UX design course useful for learners in Jammu and Kashmir?", a: "Yes, learners in Jammu and Kashmir can study online and apply the skills to tourism platforms, handicraft stores, local e-commerce sellers and remote design work. Stable internet and regular practice help online learners get the most from live sessions." },
    { q: "Can learners from Uttarakhand and Rajasthan take this course online and freelance?", a: "Yes, learners in Uttarakhand and Rajasthan can attend live online classes and use their skills to design for tourism, hospitality, jewellery, textile and handicraft businesses. These sectors are moving online, which creates steady freelance demand for designers who can improve booking and shopping experiences." },
    { q: "Is Delhi NCR a good place to start a UI/UX career as a fresher?", a: "Yes, Delhi NCR has one of North India's largest pools of agencies, fintech companies, media platforms and IT firms hiring junior designers. Competition is also high, so a well-presented portfolio is essential for freshers." },
  ],
  related: ["graphic-designing", "web-designing", "digital-marketing"],
  copy: {
    heading: { title: "UI/UX Design Course", highlight: "in India", meta: "techcadd UI/UX Design Course: Learn to Design Products People Love" },
    overview: { eyebrow: "Program Overview", title: "techcadd UI/UX Design Course: Learn to Design Products People Love" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "Module-wise Curriculum" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This UI/UX Design Course?",
      intro: "A UI/UX design course suits anyone who enjoys solving problems visually and wants a career in digital products. You don't need to be an artist or a coder. The programme is open to these groups.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Whether your degree is in commerce, arts, science, engineering, BCA or MBA, design skills add a practical, job-ready layer to your profile. Many recruiters look at a portfolio before a degree, which makes this a strong route into product and design roles." },
        { icon: "Shuffle", title: "Working professionals and job switchers", text: "If you work in marketing, development, content, sales or operations, UI/UX knowledge helps you move into a design or product role. You can also stay in your field and become the person who understands users better than the rest of the team." },
        { icon: "PenTool", title: "Freelancers and creative professionals", text: "Graphic designers, video editors and web developers can add UX research, wireframing and prototyping to their services and take on higher-value client work." },
        { icon: "Building2", title: "Business owners and startup founders", text: "If you run an online store, a service business or an app idea, you will learn to review and improve your own website and app experience, and to brief designers more clearly." },
        { icon: "BookOpen", title: "Students after 12th", text: "Motivated students who want to start early can join as well. They begin from fundamentals and build a portfolio while others are still choosing a direction." },
      ],
      need: "Curiosity, basic computer skills and a willingness to practise are enough.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from across states",
      intro: "techcadd's live online classes let you learn from wherever you are. Here is how the course fits learners in each state.",
      items: [
        { title: "Punjab", text: "A UI UX design course in Punjab suits manufacturers, exporters, agri-tech ventures and startups that need better websites and apps, and young learners planning design careers at home or abroad." },
        { title: "Haryana", text: "Many people in Gurugram and Faridabad work near MNCs, e-commerce firms and IT services companies, so a UI UX design course in Haryana is a natural step up for professionals who want to move into product teams." },
        { title: "Himachal Pradesh", text: "Remote work and freelancing are growing across the state, from Shimla to Solan. A UI UX design course in Himachal Pradesh lets you serve clients nationwide, including hotels and tourism brands that need better booking experiences." },
        { title: "Chandigarh", text: "With IT firms, BPOs and startups across the tricity, Panchkula and Chandigarh learners can take a UI UX design course in Chandigarh to move from support or operations roles into design." },
        { title: "Delhi NCR", text: "Delhi and Noida have agencies, fintech companies and the country's largest fresher job market. A UI UX design course in Delhi helps you compete for entry-level product design roles with a ready portfolio." },
        { title: "Jammu & Kashmir", text: "Jammu and Srinagar learners can follow a UI UX design course in Jammu and Kashmir to design for local sellers, handicraft stores and tourism platforms, or to work remotely." },
        { title: "Uttarakhand", text: "In Dehradun and Haridwar, tourism, hospitality and education businesses are going digital, and a UI UX design course in Uttarakhand prepares you to design their apps and websites." },
        { title: "Rajasthan", text: "Jaipur's jewellery, textile and tourism sellers rely on strong online storefronts, so a UI UX design course in Rajasthan is useful for freelancers and brand owners." },
        { title: "Uttar Pradesh", text: "From Lucknow to Meerut, retail, electronics and government-linked digital projects need usability-focused designers, and a UI UX design course in Uttar Pradesh opens those doors." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This UI/UX Design Course",
      intro: "Design is no longer a \"nice to have\" skill. Every app, website, dashboard and online store depends on someone who understands how people think, scroll and decide. That is why UI/UX roles keep appearing across startups, product companies, agencies and IT services firms. This programme helps you build that skill in a structured, practical way.",
      points: [
        { title: "Portfolio-first learning.", text: "Recruiters and clients judge designers by their work. You will finish with case studies that show your research, thinking, wireframes, final screens and prototype, not just pretty visuals. This is what separates a job-ready designer from someone who has only watched tutorials." },
        { title: "A complete workflow, not just a tool.", text: "Many learners think UI/UX means learning Figma. Figma is important, but it is only the tool. You will learn the full process: user research, personas, user journeys, information architecture, wireframes, visual design, prototyping and usability testing. This is the thinking that product teams actually hire for." },
        { title: "Beginner-friendly, career-ready.", text: "You do not need a design degree or coding knowledge. The course starts with design fundamentals such as layout, colour, typography and spacing, then moves step by step to advanced topics like design systems and responsive design. Working designers can use it to fill gaps and level up." },
        { title: "Online and offline flexibility.", text: "Classroom learners get face-to-face guidance, while online learners attend live sessions with mentor interaction and revision support. This suits professionals who can only study after work and learners who live far from a training centre." },
        { title: "A growing career with several paths.", text: "Skills from this course can lead to roles such as UI designer, UX designer, product designer, UX researcher or interaction designer. You can also freelance, work remotely for companies in Bengaluru, Hyderabad, Pune or Mumbai, or improve your own business's digital presence. Salaries vary by city, skill level and portfolio strength. As a rough guide, fresher roles in India often start in the range of ₹2.5 to ₹5 lakh per year, and experienced designers can earn considerably more. These figures are approximate and not a promise." },
        { title: "Skills that carry across industries.", text: "E-commerce, fintech, healthcare, education, travel and SaaS all need good user experience. Once you understand the principles, you can apply them to almost any digital product." },
        { title: "Honest, practical mentoring.", text: "Good design improves through feedback. You will present your work, receive critique and revise it, which builds the confidence needed for interviews and client conversations." },
      ],
      outro: "If you are looking for a UI/UX design course that focuses on real projects, a clear learning path and skills you can use immediately, this programme is built for exactly that goal.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Learn UI/UX Design at techcadd",
      intro: "Choosing where to learn matters almost as much as choosing what to learn. A good UI/UX design course should leave you with real skills, a portfolio and the confidence to apply for roles or pitch clients. Here is what learners can expect from techcadd.",
      points: [
        { title: "Practical training over theory.", text: "techcadd's approach to design education is hands-on. Instead of sitting through long lectures, you design screens, build prototypes and solve user problems in every module. Concepts such as user research, wireframing and usability testing are taught through exercises, so you understand why a design decision works, not just how to copy one." },
        { title: "Projects that build a portfolio.", text: "Your portfolio is your strongest proof of skill. You work on mobile app and website design projects and document each one as a case study: the problem, your research, your process and your final solution. By the end, you have work you can share on Behance, LinkedIn or a personal website." },
        { title: "Mentor feedback on your work.", text: "Design improves through critique. Trainers review your screens and flows, point out usability gaps and guide you through revisions. This feedback loop is what helps beginners grow quickly and helps working designers fix habits they may not notice." },
        { title: "Industry-relevant tools.", text: "You learn the tools used by design teams today, with Figma at the centre, along with supporting tools for research, prototyping and handoff. The focus stays on transferable thinking, so you can adapt when tools change." },
        { title: "Flexible learning modes.", text: "techcadd offers both online and offline learning. Online learners join live classes and can revisit concepts through revision support, while classroom learners get direct, in-person guidance. This flexibility helps working professionals, freelancers and business owners fit learning around their schedules." },
        { title: "Support for beginners and switchers.", text: "Not everyone arrives with a design background. The course begins with fundamentals and builds gradually, so graduates from commerce, science, arts or engineering, as well as job switchers from other fields, can follow along comfortably. Doubts are addressed openly, and learners are encouraged to ask questions." },
        { title: "Career guidance.", text: "techcadd helps learners prepare for what comes after the course: structuring a portfolio, shaping a resume for design roles, and getting ready for design interviews and client conversations. Careful, honest guidance matters more than big promises, and outcomes always depend on your effort, portfolio quality and the job market." },
        { title: "Try before you commit.", text: "A free demo session lets you experience the teaching style, meet the trainers and ask questions before enrolling. If the course fits your goals, you can then decide with confidence." },
        { title: "A learner-first approach.", text: "techcadd's aim is simple: help you gain skills that employers and clients actually value. That means clear explanations, realistic expectations and steady support throughout your learning journey." },
      ],
      outro: "If you want a UI/UX design course that balances practical projects, mentor feedback and flexible learning, techcadd is a sensible place to start.",
    },
    tools: {
      title: "Tools & Software Covered",
      columns: ["Purpose", "Tools"],
      groups: [
        { area: "Interface design & prototyping", tools: "Figma (including Dev Mode)" },
        { area: "Brainstorming & workshops", tools: "FigJam, Miro" },
        { area: "User testing & feedback", tools: "Maze or similar usability testing tools" },
        { area: "Visual assets", tools: "Adobe Photoshop and Illustrator basics" },
        { area: "Accessibility checks", tools: "Contrast checkers and accessibility plugins" },
        { area: "Documentation", tools: "Notion or similar" },
        { area: "AI-assisted workflows", tools: "Using AI tools for research summaries and idea generation, always with human judgement" },
      ],
      note: "The focus stays on transferable thinking, so you can adapt as tools evolve.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Career & Future Scope",
      intro: "UI/UX skills open roles such as UI designer, UX designer, product designer, UX researcher, interaction designer and design system specialist. You can also freelance, work remotely for companies in Bengaluru, Hyderabad, Pune or Mumbai, or improve your own business's digital experience.",
      roles,
      rolesNote: "Fresher salaries in India often fall around ₹2.5 to ₹5 lakh per year, while experienced designers can earn considerably more. These are approximate figures that depend on city, portfolio and skill level.",
      jobsTitle: "State-wise Opportunities",
      jobs: [
        { title: "Punjab", text: "UI UX designer jobs in Punjab are growing with startups, IT firms and exporters that need better websites and apps. Patiala and nearby cities also offer freelance work for local brands moving online." },
        { title: "Haryana", text: "UI UX designer jobs in Haryana are concentrated around e-commerce, logistics and IT services companies, where product teams hire for dashboards, checkout flows and customer apps. Karnal and Ambala learners can also work remotely for these firms." },
        { title: "Delhi NCR", text: "UI UX designer jobs in Delhi lead the region in volume, spanning agencies, fintech companies and media platforms. Ghaziabad residents commonly commute or work hybrid, making it the largest fresher market in North India." },
        { title: "Himachal Pradesh", text: "UI UX design jobs in Himachal Pradesh lean towards remote work and freelancing, plus tourism and hospitality brands that need booking and travel apps. Dharamshala has an active remote-work community." },
        { title: "Chandigarh", text: "UI UX designer jobs in Chandigarh come mainly from IT companies, BPO-linked product teams and a busy startup scene across the tricity." },
        { title: "Uttar Pradesh", text: "UI UX designer jobs in Uttar Pradesh are rising in IT, electronics, retail and government-linked digital projects, where usability for large user bases matters." },
      ],
    },
    faqTitle: "Frequently Asked Questions: UI/UX Design Course",
    cta: {
      title: "Start Your UI/UX Design Career",
      highlight: "with techcadd",
      text: "Learn Figma, user research and prototyping through real projects, and build a portfolio that shows your skills. Join our UI/UX design course online or at our centre, with live mentor-led classes, practical case studies and flexible batches for graduates, working professionals, freelancers and career switchers. Book a free demo and see if it fits your goals.",
    },
  },
};
