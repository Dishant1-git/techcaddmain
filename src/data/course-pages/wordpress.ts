import type { CoursePage } from "./types";

/* /courses/wordpress — long-form landing copy supplied by the client (Stage 1 overview / who can join / states / why this
   program, Stage 3 FAQs, Stage 4 CTA), used as given.
   Left out on purpose:
   - the 10 "Student Reviews": the supplied text marks them as SAMPLE DRAFTS "for page planning" that may only be published
     once matched with genuine student experiences and approved names, so this page keeps the shared testimonials section
     (add `copy.reviews` when real, permitted reviews exist);
   - Stage 5 (SEO/GEO/AEO strategy report): planning notes, not page content;
   - the optional trust line ("North India's first AI-powered and Robotics learning centre"): the same document says it needs
     real-world proof first;
   - the CTA's extra form fields (email, state/city, qualification): the page keeps the shared 5-field enquiry form.
   No syllabus, tools, projects or careers were supplied, so those blocks are the previous ones. `duration` is the previous
   value too ("Confirm current duration with Techcadd" in the brief). */

export const wordpress: CoursePage = {
  slug: "wordpress",
  title: "WordPress Course",
  navLabel: "WordPress",
  group: "marketing",
  icon: "Globe",
  tagline:
    "Build fast, secure, SEO-ready business websites with WordPress, Elementor, WooCommerce and custom themes, and launch them on real hosting.",
  level: "Beginner",
  duration: "2–3 Months",
  eligibility: "12th pass or above; basic computer skills",
  overview: [
    "A WordPress Course is designed to help learners understand how websites are created, managed, customized, and maintained using WordPress, one of the widely used content management systems for website development. The course can be useful for learners who want practical website-building skills without beginning with advanced programming concepts.",
    "Learners can explore essential areas such as WordPress installation and setup, website structure, themes, plugins, pages, posts, menus, media management, basic customization, responsive design, forms, website security, SEO fundamentals, and website maintenance. Depending on the learning path, learners may also work with popular website-building tools and e-commerce functionality.",
    "The course can benefit graduates, working professionals, freelancers, business owners, and career changers who want to develop websites or add website-management skills to their existing profile.",
    "For learners in Punjab, classroom learning can be considered at the Techcadd Jalandhar centre, while students outside the region can explore online learning options.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "The ability to build complete business websites without starting from scratch each time",
    "Practical skills in Elementor, Gutenberg block editing and WooCommerce",
    "SEO, speed and security best practices built into every site",
    "Introductory PHP for custom themes, plugins and shortcodes",
    "TechCADD certification, live site portfolio and placement assistance",
  ],
  syllabus: [
    {
      title: "WordPress Setup and Hosting",
      summary:
        "Understand domains, hosting and how to install and configure WordPress correctly.",
      topics: [
        "Domains, DNS, hosting types and SSL",
        "Local development with LocalWP",
        "Installing WordPress and essential settings",
        "Dashboard, posts, pages, media and users",
        "Backups and staging environments",
      ],
    },
    {
      title: "Themes and Block Editor",
      summary:
        "Design layouts using modern block themes and the Gutenberg editor.",
      topics: [
        "Choosing and customising themes",
        "Gutenberg blocks, patterns and reusable blocks",
        "Full Site Editing and global styles",
        "Menus, widgets and navigation design",
        "Child themes for safe customisation",
      ],
    },
    {
      title: "Page Builders with Elementor",
      summary:
        "Build responsive, well-designed pages quickly using a visual builder.",
      topics: [
        "Elementor sections, containers and widgets",
        "Global colours, fonts and design systems",
        "Responsive design for mobile and tablet",
        "Popups, forms and dynamic content",
        "Landing pages that convert",
      ],
    },
    {
      title: "Plugins and Functionality",
      summary:
        "Extend a site with trusted plugins while keeping it fast and secure.",
      topics: [
        "Choosing and vetting plugins",
        "Contact forms with Contact Form 7 and WPForms",
        "Custom post types and Advanced Custom Fields",
        "Multilingual sites with Polylang or WPML",
        "Membership and booking plugin basics",
      ],
    },
    {
      title: "WooCommerce E-commerce",
      summary:
        "Set up an online store with products, payments, shipping and orders.",
      topics: [
        "Products, variations, categories and attributes",
        "Payment gateways such as Razorpay and PayU",
        "Shipping zones, taxes and GST invoice basics",
        "Order management and email notifications",
        "Coupons, abandoned cart and store analytics",
      ],
    },
    {
      title: "SEO, Speed and Security",
      summary:
        "Make every site search-friendly, quick to load and protected against common attacks.",
      topics: [
        "Yoast SEO and Rank Math configuration",
        "Caching, image optimisation and Core Web Vitals",
        "Security hardening and login protection",
        "Updates, maintenance plans and malware cleanup basics",
      ],
    },
    {
      title: "Custom Development with PHP",
      summary:
        "Go beyond templates with an introduction to theme and plugin development.",
      topics: [
        "WordPress template hierarchy and the Loop",
        "Actions, filters and hooks",
        "Building a simple custom plugin and shortcode",
        "REST API basics",
        "Version control with Git",
      ],
    },
    {
      title: "Capstone Website Launch and Career Preparation",
      summary:
        "Deliver a complete live website for a real client and prepare for interviews and freelance work.",
      topics: [
        "Requirement gathering and site planning",
        "Building, testing and launching on live hosting",
        "Client handover, training and maintenance documentation",
        "Portfolio, resume and mock interviews",
        "Freelance proposals and working with overseas clients",
      ],
    },
  ],
  tools: [
    "WordPress",
    "Elementor",
    "WooCommerce",
    "Gutenberg",
    "LocalWP",
    "Advanced Custom Fields",
    "Yoast SEO",
    "Rank Math",
    "Contact Form 7",
    "Git",
    "cPanel",
    "Figma",
  ],
  projects: [
    {
      title: "Business Website",
      text: "Build a multi-page responsive website for a local business with contact forms and Google Maps integration.",
      tags: ["WordPress", "Elementor", "Responsive"],
    },
    {
      title: "Portfolio and Blog Site",
      text: "Create a personal or agency site with a blog, custom post types and SEO configuration.",
      tags: ["Blog", "SEO", "ACF"],
    },
    {
      title: "WooCommerce Store",
      text: "Launch an online store with products, payment gateway, shipping and order emails.",
      tags: ["WooCommerce", "Payments", "E-commerce"],
    },
    {
      title: "Landing Page for a Campaign",
      text: "Design a high-converting landing page with tracking, forms and fast load time.",
      tags: ["Landing Page", "Conversion", "Speed"],
    },
    {
      title: "Custom Plugin",
      text: "Write a small PHP plugin that adds a shortcode and admin settings page.",
      tags: ["PHP", "Plugin", "Hooks"],
    },
    {
      title: "Site Speed and Security Makeover",
      text: "Improve an existing slow site with caching, image optimisation and security hardening, then report the changes.",
      tags: ["Performance", "Security", "Maintenance"],
    },
  ],
  careers: [
    {
      role: "WordPress Developer",
      work: "Builds and customises WordPress sites, themes and plugins.",
      hirers: "Web agencies, software companies and in-house digital teams",
    },
    {
      role: "Website Designer",
      work: "Designs and builds responsive sites using page builders.",
      hirers: "Digital agencies, design studios and startups",
    },
    {
      role: "WooCommerce Specialist",
      work: "Sets up and manages online stores, payments and shipping.",
      hirers: "E-commerce agencies and small and medium retail businesses",
    },
    {
      role: "Website Maintenance Executive",
      work: "Handles updates, backups, speed and security for client sites.",
      hirers: "Hosting companies, agencies and managed service providers",
    },
    {
      role: "Freelance Web Developer",
      work: "Delivers websites and maintenance plans directly to business clients.",
      hirers: "Self-employed work with local businesses, exporters and overseas clients",
    },
  ],
  whyNow: [
    "Small and medium businesses across Punjab and North India still need professional websites, and WordPress gives them a manageable, cost-conscious way to own their content.",
    "Modern WordPress with block themes, WooCommerce and strong SEO practices lets one developer deliver complete solutions, which suits both agency and freelance careers.",
  ],
  faqs: [
    { q: "What is a WordPress Course?", a: "A WordPress Course teaches learners how to create, customize, manage, optimize, and maintain websites using WordPress and related website tools." },
    { q: "Who can join a WordPress Course?", a: "Graduates, postgraduates, working professionals, freelancers, business owners, career changers, beginners, and suitable 12th-pass students can consider learning WordPress, depending on their goals." },
    { q: "Is WordPress suitable for beginners?", a: "Yes, WordPress can be suitable for beginners because its fundamental website-building workflow can be learned without requiring advanced programming knowledge at the starting level." },
    { q: "What is covered in a WordPress Course syllabus?", a: "A typical syllabus can cover WordPress setup, dashboard management, pages and posts, themes, plugins, website customization, responsive design, forms, basic SEO, security, maintenance, and website performance." },
    { q: "How long does it take to learn WordPress?", a: "The learning duration depends on the course structure and depth of training. Basic WordPress skills can be learned progressively, while becoming proficient in advanced customization and web development requires additional practice." },
    { q: "What are the fees for a WordPress Course?", a: "WordPress course fees vary according to the training provider, course duration, curriculum, learning mode, and level of practical training. Learners should confirm the current fee directly with the institute before enrolling." },
    { q: "Can I learn WordPress online?", a: "Yes, WordPress can be learned online through live instruction, demonstrations, practical exercises, and website projects, making it accessible to learners who cannot attend classroom training." },
    { q: "Can I learn WordPress offline?", a: "Yes, learners who prefer classroom-based training can explore offline learning options at the Techcadd centre in Jalandhar, Punjab, subject to the availability of the specific course or batch." },
    { q: "Do I need coding knowledge to learn WordPress?", a: "No, advanced coding knowledge is not necessary to begin learning WordPress; however, HTML, CSS, JavaScript, or PHP knowledge can become valuable when learners move toward deeper customization and development." },
    { q: "What jobs can I pursue after learning WordPress?", a: "Depending on practical ability and additional skills, learners can explore roles such as WordPress Developer, Website Designer, CMS Executive, Website Manager, Web Content Manager, WordPress Administrator, or Junior Web Developer." },
    { q: "Can WordPress skills help with freelancing?", a: "Yes, WordPress can support freelance services such as website creation, landing-page development, theme customization, content updates, website maintenance, and basic website optimization." },
    { q: "What tools are used with WordPress?", a: "WordPress learners may work with the WordPress CMS, themes, plugins, website builders, hosting platforms, domain management tools, HTML, CSS, SEO tools, Google Analytics, and Google Search Console, depending on the course curriculum." },
    { q: "What salary can I expect after learning WordPress?", a: "WordPress-related salaries vary significantly according to job role, experience, technical skills, location, employer, and portfolio. A course itself does not guarantee a particular salary." },
    { q: "What is the career scope of WordPress?", a: "WordPress can lead toward website development, website management, CMS operations, freelance services, digital agency work, content management, and further web-development specialization." },
    { q: "Can students from Himachal Pradesh join a WordPress Course online?", a: "Yes, learners from Himachal Pradesh can consider online WordPress training, allowing students in locations such as Shimla, Dharamshala, and Solan to learn without needing to relocate." },
    { q: "What are WordPress career opportunities in Punjab and Haryana?", a: "Punjab and Haryana learners can explore WordPress-related opportunities with digital agencies, small businesses, e-commerce companies, IT services, corporate organizations, and freelance clients, particularly when WordPress is combined with complementary digital skills." },
    { q: "Can students from Rajasthan learn WordPress online?", a: "Yes, students from Rajasthan can learn WordPress online and develop website skills that may be useful for local businesses, tourism, retail, handicrafts, jewellery, textiles, and freelance projects." },
    { q: "Is WordPress suitable for students from Uttar Pradesh?", a: "Yes, WordPress can be suitable for learners from Uttar Pradesh who are interested in website creation, digital services, freelancing, or web-related career paths, including learners from cities such as Lucknow and Meerut." },
  ],
  related: ["seo", "web-designing", "php-full-stack"],
  copy: {
    heading: { title: "WordPress Course", highlight: "Online + Jalandhar", meta: "WordPress Course: Learn to Build, Customize and Manage Websites | techcadd" },
    overview: { eyebrow: "Program Overview", title: "What the WordPress Course covers" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This WordPress Course?",
      intro: "A WordPress course is not limited to students from a particular academic background. Since WordPress is widely used for creating and managing websites, the skill can be relevant to people with different educational and professional profiles.",
      items: [
        { icon: "GraduationCap", title: "Graduates", text: "Graduates from business, commerce, management, arts, computer-related, or other backgrounds can consider WordPress as a practical digital skill. It can help them understand how websites work and provide an additional capability alongside their academic qualification." },
        { icon: "Award", title: "Postgraduates", text: "Postgraduates who want to develop a practical technology-related skill can use WordPress training to complement their existing education. For management or business graduates, for example, website knowledge can be useful when working with digital businesses, agencies, marketing teams, or online ventures." },
        { icon: "Briefcase", title: "Working Professionals", text: "Professionals can learn WordPress to expand their existing responsibilities. Someone working in marketing, sales, communications, administration, content, or business operations may benefit from understanding how to update website content, create pages, manage basic website elements, and collaborate more effectively with web teams." },
        { icon: "Shuffle", title: "Job Switchers", text: "For people considering a career change, WordPress can provide an accessible introduction to website development and content management. It can be particularly useful for learners who want to move toward web-related roles without immediately starting with complex programming." },
        { icon: "PenTool", title: "Freelancers", text: "Freelancers can use WordPress skills to develop websites for clients, maintain existing websites, create landing pages, manage content, or provide website-related services. Their opportunities will depend on their practical skills, portfolio, communication abilities, and ability to understand client requirements." },
        { icon: "Building2", title: "Business Owners", text: "Small-business owners and entrepreneurs can benefit from understanding WordPress because it gives them greater familiarity with their own website. They can learn how website pages, content, forms, images, plugins, and basic SEO elements work instead of depending entirely on others for every small update." },
        { icon: "Rocket", title: "Career Changers", text: "People moving from non-technical backgrounds can consider WordPress as a practical starting point. The visual nature of many WordPress workflows makes it possible to begin understanding website creation before progressing into more technical web-development concepts." },
        { icon: "Laptop", title: "Beginners", text: "WordPress can be suitable for beginners because learners can start with fundamental website concepts and gradually move toward customization and more advanced website management." },
        { icon: "BookOpen", title: "12th-Pass Students", text: "Students who have completed 12th standard and are interested in websites, digital businesses, or freelancing can also explore WordPress. However, the course should be viewed as a skill-development pathway rather than a replacement for formal higher education." },
      ],
      need: "No particular programming specialization is required to begin learning the basic WordPress workflow, although technical knowledge can become useful as learners progress.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners From Across States",
      intro: "Learners outside Punjab can explore online learning, while those who prefer classroom training can enquire about the Jalandhar centre.",
      items: [
        { title: "Punjab", text: "Punjab has a mix of businesses, exporters, manufacturers, service providers, startups, and small enterprises that increasingly depend on an online presence. Learners from Jalandhar, Ludhiana, Amritsar, Mohali, Patiala, and surrounding areas can develop WordPress skills for website-related employment, freelance work, or supporting local businesses." },
        { title: "Haryana", text: "For learners from Gurugram, Faridabad, Panchkula, Ambala, and Karnal, WordPress can complement opportunities connected with IT services, e-commerce, logistics, automobile businesses, and corporate organizations. Online learning can be particularly useful for working learners who need flexibility." },
        { title: "Himachal Pradesh", text: "Students and professionals from Shimla, Dharamshala, and Solan can explore WordPress for website projects connected with tourism, hospitality, local businesses, education, and remote work. The ability to work online can also make the skill relevant for learners who want location-independent opportunities." },
        { title: "Chandigarh", text: "Chandigarh learners may find WordPress useful alongside digital marketing, content, IT, BPO, education, and startup-related skills. Learning website creation can help professionals understand the practical side of maintaining an organization's online presence." },
        { title: "Delhi NCR", text: "Delhi, Noida, and Ghaziabad have a broad ecosystem of agencies, technology companies, e-commerce businesses, media organizations, and startups. WordPress training can therefore complement learners interested in website management, digital agencies, content operations, and freelance web projects." },
        { title: "Jammu & Kashmir", text: "Learners from Jammu and Srinagar can explore WordPress for businesses and organizations working in tourism, handicrafts, horticulture, retail, and e-commerce. Online learning also gives learners the option to develop the skill without needing to relocate for training." },
        { title: "Uttarakhand", text: "For learners in Dehradun and Haridwar, WordPress can be relevant to tourism, hospitality, education, pharma-related businesses, local services, and online ventures. Website skills can also support professionals who want to work with remote clients." },
        { title: "Rajasthan", text: "Learners from Jaipur and surrounding areas can apply WordPress skills to websites associated with tourism, jewellery, handicrafts, textiles, retail, and small businesses. The skill can be particularly useful when combined with content, branding, or digital marketing knowledge." },
        { title: "Uttar Pradesh", text: "Learners from Lucknow, Meerut, Noida, and other parts of Uttar Pradesh can explore WordPress alongside opportunities in IT, retail, electronics, education, and digital services. Online learning can make the course accessible to learners who are not located near a physical training centre." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why This WordPress Program?",
      intro: "Overall, the WordPress Course can be a practical choice for learners who want to understand website creation, develop a demonstrable digital skill, and explore employment, freelance, business, or career-transition opportunities around the web ecosystem.",
      points: [
        { title: "Build a Practical Website Skill", text: "WordPress training focuses on an actual digital platform used to create and manage websites. Learners can move beyond theoretical concepts by understanding how a website is structured and how its different components work together." },
        { title: "Learn Website Creation Without Starting With Advanced Coding", text: "One attraction of WordPress is that beginners can start working with websites without first becoming advanced programmers. Learners can understand themes, pages, plugins, content, layouts, menus, and other website components before gradually exploring more technical concepts." },
        { title: "Develop Skills Useful Across Multiple Careers", text: "WordPress can complement careers in digital marketing, content management, communications, entrepreneurship, web services, and freelancing. A learner does not necessarily have to pursue a purely web-development career to benefit from the skill." },
        { title: "Understand Themes and Website Customization", text: "A major part of WordPress learning involves understanding how website appearance and functionality can be customized. Learners can explore themes, layouts, menus, widgets or blocks, media, forms, and other website components to create a more functional online presence." },
        { title: "Work With Plugins and Website Functionality", text: "Plugins extend WordPress websites by adding different capabilities. Understanding how plugins are selected, configured, updated, and managed can help learners handle common website requirements more confidently." },
        { title: "Create a Portfolio", text: "Practical website projects can become valuable portfolio pieces. Instead of simply stating that they know WordPress, learners can demonstrate websites or website components they have created and explain the decisions behind them." },
        { title: "Explore Freelancing Opportunities", text: "WordPress can be relevant to freelance services such as website creation, content updates, landing-page development, website maintenance, and basic website management. Freelancing success depends on portfolio quality, communication, pricing, client acquisition, and service quality." },
        { title: "Support Digital Marketing Skills", text: "A website is an important part of many digital marketing strategies. Someone who understands both WordPress and digital marketing can better connect website content, landing pages, calls to action, basic SEO practices, forms, and user experience." },
        { title: "Develop a Foundation for Further Web Skills", text: "WordPress can also act as a stepping stone toward broader web technologies. After becoming comfortable with website structure and customization, learners may choose to explore HTML, CSS, JavaScript, PHP, hosting, databases, or more advanced web-development concepts." },
        { title: "Stay Relevant to Small Businesses and Online Ventures", text: "Businesses frequently need websites that can be updated as their products, services, offers, content, and business information change. Understanding WordPress can therefore be useful for people who want to work with small businesses, agencies, entrepreneurs, or their own online projects." },
        { title: "Suitable for Career Transition", text: "For someone moving from a non-technical field, WordPress can provide a practical entry point into website-related work. Learners can begin with fundamental concepts and build complexity gradually rather than attempting to master an entire programming stack immediately." },
        { title: "Combine Website Skills With Other Digital Skills", text: "The strongest career value often comes from combining WordPress with complementary skills such as SEO, content creation, digital marketing, graphic design, analytics, or social media. This combination can broaden the type of projects a learner can handle." },
      ],
    },
    faqTitle: "WordPress Course FAQs",
    cta: {
      title: "Learn WordPress. Build Websites.",
      highlight: "Create New Career Opportunities.",
      text: "Turn your interest in websites into a practical digital skill with the WordPress Course at Techcadd. Learn the fundamentals of WordPress, website creation, themes, plugins, customization, responsive design, basic SEO, website management, and maintenance. Course details, availability, and fee structure should be confirmed with Techcadd before enrolment. No job or salary outcome is guaranteed.",
    },
  },
};
