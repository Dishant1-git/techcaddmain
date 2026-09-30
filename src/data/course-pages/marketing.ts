import type { CoursePage } from "./types";

export const marketingCourses: CoursePage[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing Course",
    navLabel: "Digital Marketing",
    group: "marketing",
    icon: "Megaphone",
    tagline:
      "Master SEO, paid ads, social media, email and analytics with live campaigns, and earn a certification that employers and clients recognise.",
    level: "All Levels",
    duration: "4–6 Months",
    eligibility: "12th pass or above; no prior marketing experience needed",
    overview: [
      "This course covers the full digital marketing funnel, from understanding an audience and building a website presence to running paid campaigns, growing organic reach, nurturing leads and measuring results in GA4. You work through each channel in a structured order, so you understand how search, social, email and content work together rather than in isolation.",
      "Every batch, classroom in Jalandhar or live online, runs on live projects. You plan and execute real campaigns for local businesses, exporters and startups, guided by a working mentor, and finish with a portfolio, certification and placement assistance for agency, in-house and freelance roles.",
    ],
    gains: [
      "A complete grounding in SEO, Google Ads, Meta Ads, email and content marketing",
      "Hands-on GA4, Search Console and Looker Studio reporting skills",
      "Live campaign experience with real businesses, not just practice exercises",
      "A portfolio, TechCADD certification and mentor-led interview preparation",
      "Placement assistance plus guidance for freelancing with overseas clients",
    ],
    syllabus: [
      {
        title: "Digital Marketing Foundations",
        summary:
          "Understand how the modern marketing funnel works and how to plan a channel mix around business goals.",
        topics: [
          "Marketing funnel, customer journey and buyer personas",
          "Owned, earned and paid media explained",
          "Setting goals, KPIs and a simple channel strategy",
          "Competitor and market research with free and paid tools",
          "Brand positioning and messaging for local and export markets",
        ],
      },
      {
        title: "Website, Landing Pages and Conversion Basics",
        summary:
          "Build and improve the pages that turn visitors into enquiries, calls and orders.",
        topics: [
          "Website structure, domains and hosting basics",
          "Building landing pages with WordPress and page builders",
          "Copywriting for headlines, offers and calls to action",
          "Forms, WhatsApp click-to-chat and lead capture",
          "Conversion rate optimisation and A/B testing fundamentals",
        ],
      },
      {
        title: "Search Engine Optimisation",
        summary:
          "Rank pages on Google through technical health, quality content and trustworthy links, including visibility in AI-generated answers.",
        topics: [
          "Keyword research and search intent mapping",
          "On-page SEO, internal linking and schema markup",
          "Technical SEO: crawling, indexing and Core Web Vitals",
          "Local SEO and Google Business Profile optimisation",
          "Link building and digital PR basics",
          "Optimising content for AI Overviews and answer engines",
        ],
      },
      {
        title: "Google Ads and Paid Search",
        summary:
          "Plan, launch and optimise Search, Display, YouTube and Performance Max campaigns with proper tracking.",
        topics: [
          "Account structure, keywords, match types and negatives",
          "Writing responsive search ads and using assets",
          "Smart bidding strategies and conversion tracking",
          "Performance Max campaigns and audience signals",
          "Display and YouTube video campaigns",
        ],
      },
      {
        title: "Social Media Marketing and Meta Ads",
        summary:
          "Build brand presence on major platforms and run paid campaigns that generate leads.",
        topics: [
          "Content calendars for Instagram, Facebook, LinkedIn and YouTube",
          "Short-form video and Reels strategy",
          "Meta Ads Manager, Advantage+ campaigns and lead forms",
          "Custom audiences, lookalikes and retargeting",
          "Community management and reputation handling",
        ],
      },
      {
        title: "Content, Email and Marketing Automation",
        summary:
          "Create content people want to read and nurture leads with automated email and WhatsApp journeys.",
        topics: [
          "Blogging, video and content repurposing workflows",
          "Email marketing with Mailchimp and Brevo",
          "List building, segmentation and welcome sequences",
          "WhatsApp Business API messaging basics",
          "Using AI tools such as ChatGPT and Canva for faster, responsible content",
        ],
      },
      {
        title: "Analytics and Reporting",
        summary:
          "Track what works using GA4, Google Tag Manager and clear client-ready dashboards.",
        topics: [
          "GA4 events, conversions and audiences",
          "Google Tag Manager setup and debugging",
          "UTM tagging and attribution concepts",
          "Search Console performance analysis",
          "Building dashboards in Looker Studio",
        ],
      },
      {
        title: "Capstone Live Campaign and Career Preparation",
        summary:
          "Run an end-to-end live campaign for a real business and prepare for interviews and freelance work.",
        topics: [
          "Planning a multi-channel campaign with goals and KPIs",
          "Executing SEO, paid and social activity on a live project",
          "Final performance report and presentation to a mentor panel",
          "Portfolio, LinkedIn profile and resume building",
          "Mock interviews, agency test tasks and freelance proposal writing",
        ],
      },
    ],
    tools: [
      "Google Analytics 4",
      "Google Search Console",
      "Google Ads",
      "Meta Ads Manager",
      "Google Tag Manager",
      "Looker Studio",
      "SEMrush",
      "Ubersuggest",
      "Canva",
      "Mailchimp",
      "WordPress",
      "ChatGPT",
    ],
    projects: [
      {
        title: "Local Business Growth Plan",
        text: "Audit a Jalandhar or Ludhiana business and create a full digital strategy with channel mix, goals and a 90-day roadmap.",
        tags: ["Strategy", "Research", "Planning"],
      },
      {
        title: "SEO Audit and Ranking Project",
        text: "Audit a live website, fix on-page and technical issues, and track keyword movement in Search Console.",
        tags: ["SEO", "Search Console", "Technical"],
      },
      {
        title: "Google Ads Lead Campaign",
        text: "Set up a Search campaign with conversion tracking and optimise it over several weeks using real data.",
        tags: ["Google Ads", "Tracking", "Optimisation"],
      },
      {
        title: "Instagram and Meta Lead Funnel",
        text: "Create content, ads and a lead form for a service business, then retarget engaged users.",
        tags: ["Meta Ads", "Social", "Retargeting"],
      },
      {
        title: "Email Nurture Automation",
        text: "Design a welcome and follow-up email sequence with segmentation and performance tracking.",
        tags: ["Email", "Automation", "Mailchimp"],
      },
      {
        title: "Client Reporting Dashboard",
        text: "Connect GA4, Search Console and ads data into a Looker Studio dashboard a client can read at a glance.",
        tags: ["GA4", "Looker Studio", "Reporting"],
      },
    ],
    careers: [
      {
        role: "Digital Marketing Executive",
        work: "Runs day-to-day campaigns across SEO, paid media and social channels.",
        hirers: "Marketing agencies, startups and in-house teams of growing businesses",
      },
      {
        role: "SEO Specialist",
        work: "Improves organic visibility through technical fixes, content and link building.",
        hirers: "SEO agencies, publishers and e-commerce companies",
      },
      {
        role: "Performance Marketer",
        work: "Manages Google and Meta ad campaigns and optimises them for leads or sales.",
        hirers: "Performance agencies, D2C brands and lead-generation businesses",
      },
      {
        role: "Social Media Manager",
        work: "Plans content, grows communities and reports on brand engagement.",
        hirers: "Brands, hospitality and education businesses, creative agencies",
      },
      {
        role: "Freelance Digital Marketer",
        work: "Serves local and overseas clients with campaign setup, management and reporting.",
        hirers: "Self-employed work with small businesses, exporters and international clients",
      },
    ],
    whyNow: [
      "Businesses across Punjab, Chandigarh and Delhi NCR are moving customer acquisition online, and they need people who can run tracked, measurable campaigns rather than just post on social media.",
      "Search is changing with AI answers, GA4 and automated ad formats, so employers value professionals who understand both the fundamentals and the newest tools.",
    ],
    faqs: [
      {
        q: "Do I need a marketing or technical background to join?",
        a: "No. The course starts from the basics and suits students, graduates, business owners and working professionals. Basic computer and internet comfort is enough.",
      },
      {
        q: "Will I work on real campaigns?",
        a: "Yes. Live projects are part of every batch, and you run campaigns for real businesses under a mentor's guidance before the final capstone.",
      },
      {
        q: "Can I join a live online batch from outside Jalandhar?",
        a: "Yes. Live online batches follow the same syllabus and project work as classroom batches, and are open to learners across Punjab, Haryana, Himachal, J&K and beyond.",
      },
      {
        q: "Will I get a certificate and placement help?",
        a: "You receive a TechCADD course certification on completion, along with placement assistance covering resume building, mock interviews and introductions to hiring companies. Placement assistance is not a guarantee of a job.",
      },
      {
        q: "Can this course help me start freelancing?",
        a: "Yes. The final module covers building a portfolio, writing proposals and working with overseas clients, so you can start taking projects while or after you learn.",
      },
    ],
    related: ["seo", "google-ads", "social-media-marketing"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing Course",
    navLabel: "Social Media Marketing",
    group: "marketing",
    icon: "Share2",
    tagline:
      "Plan content, grow communities and run Meta, LinkedIn and YouTube campaigns that generate real enquiries for businesses and personal brands.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; a smartphone and regular internet access",
    overview: [
      "This course teaches how to build and run social media presence professionally, from content planning and design to short-form video, community management and paid campaigns. It covers Instagram, Facebook, LinkedIn, YouTube and WhatsApp, with the focus on what actually brings leads and sales.",
      "You learn by creating and publishing real content, running live ad campaigns in Meta Ads Manager and reporting results, with a mentor reviewing your work. Classroom batches in Jalandhar and live online batches follow the same project-first approach and include certification and placement assistance.",
    ],
    gains: [
      "A repeatable process for planning, creating and scheduling social content",
      "Practical Meta Ads Manager skills including Advantage+ campaigns and lead forms",
      "Design and short video editing skills using Canva and CapCut",
      "A live social media portfolio built for a real page or business",
      "TechCADD certification, placement assistance and freelance guidance",
    ],
    syllabus: [
      {
        title: "Social Media Strategy and Audience Research",
        summary:
          "Decide which platforms suit a business and build a strategy around audience and goals.",
        topics: [
          "How Instagram, Facebook, LinkedIn, YouTube and X differ",
          "Audience personas and competitor benchmarking",
          "Brand voice, positioning and content pillars",
          "Setting goals and choosing KPIs that matter",
        ],
      },
      {
        title: "Content Planning and Creation",
        summary:
          "Create a consistent flow of useful, on-brand posts using design and AI-assisted tools.",
        topics: [
          "Monthly content calendars and posting frequency",
          "Designing posts, carousels and stories in Canva",
          "Copywriting for captions, hooks and calls to action",
          "Using ChatGPT responsibly for ideas and first drafts",
          "Hashtags, keywords and social search basics",
        ],
      },
      {
        title: "Short-Form Video and Creator Skills",
        summary:
          "Shoot, edit and publish Reels and Shorts that hold attention.",
        topics: [
          "Scripting hooks, storytelling and trends",
          "Filming with a phone: lighting, audio and framing",
          "Editing with CapCut and Instagram's built-in editor",
          "YouTube Shorts and channel basics",
          "Collaborations and influencer outreach",
        ],
      },
      {
        title: "Platform Management and Community",
        summary:
          "Set up profiles properly and manage conversations, comments and reputation.",
        topics: [
          "Meta Business Suite, page roles and scheduling",
          "LinkedIn company pages and personal branding",
          "Handling comments, messages and negative reviews",
          "WhatsApp Business catalogues and quick replies",
        ],
      },
      {
        title: "Meta Ads and Paid Social",
        summary:
          "Launch and optimise paid campaigns on Facebook and Instagram using current automated formats.",
        topics: [
          "Campaign objectives, ad sets and ads in Ads Manager",
          "Advantage+ audience and placements explained",
          "Lead forms, click-to-WhatsApp ads and landing pages",
          "Meta Pixel, Conversions API and event tracking basics",
          "Retargeting and lookalike audiences",
          "Reading results and making optimisation decisions",
        ],
      },
      {
        title: "Analytics and Reporting",
        summary:
          "Measure content and ad performance and present it clearly to a client.",
        topics: [
          "Meta Insights and platform analytics",
          "UTM links and tracking social traffic in GA4",
          "Building simple reports in Looker Studio",
          "Turning numbers into next-month actions",
        ],
      },
      {
        title: "Capstone Live Page and Career Preparation",
        summary:
          "Run a live social media and ad campaign for a real page and prepare for interviews and freelance work.",
        topics: [
          "Complete strategy, content calendar and publishing plan",
          "Running a live paid campaign with a mentor",
          "Final report and presentation",
          "Portfolio, resume and Instagram or LinkedIn profile polish",
          "Mock interviews and freelance client onboarding basics",
        ],
      },
    ],
    tools: [
      "Meta Business Suite",
      "Meta Ads Manager",
      "Canva",
      "CapCut",
      "LinkedIn",
      "YouTube Studio",
      "Buffer",
      "Later",
      "ChatGPT",
      "Google Analytics 4",
      "Looker Studio",
      "WhatsApp Business",
    ],
    projects: [
      {
        title: "Brand Content Calendar",
        text: "Plan and design a full month of posts, carousels and stories for a real local business.",
        tags: ["Content", "Canva", "Planning"],
      },
      {
        title: "Reels Series",
        text: "Script, shoot and edit a series of short videos and track which formats perform best.",
        tags: ["Video", "CapCut", "Reels"],
      },
      {
        title: "Meta Lead Generation Campaign",
        text: "Launch an Advantage+ campaign with a lead form and optimise it using live results.",
        tags: ["Meta Ads", "Leads", "Optimisation"],
      },
      {
        title: "LinkedIn Personal Brand Profile",
        text: "Build a professional profile and content plan for a founder or job seeker.",
        tags: ["LinkedIn", "Branding", "Content"],
      },
      {
        title: "Click-to-WhatsApp Ad Funnel",
        text: "Create ads that open a WhatsApp chat, with quick replies and a catalogue to convert enquiries.",
        tags: ["WhatsApp", "Meta Ads", "Funnel"],
      },
      {
        title: "Monthly Performance Report",
        text: "Combine platform insights and GA4 data into a Looker Studio report with recommendations.",
        tags: ["Analytics", "Reporting", "Looker Studio"],
      },
    ],
    careers: [
      {
        role: "Social Media Executive",
        work: "Creates, schedules and publishes content and tracks its performance.",
        hirers: "Digital agencies, brands, restaurants and education institutes",
      },
      {
        role: "Paid Social Specialist",
        work: "Builds and optimises Meta and LinkedIn ad campaigns.",
        hirers: "Performance agencies and D2C or lead-generation businesses",
      },
      {
        role: "Content Creator and Video Editor",
        work: "Produces short-form videos and graphics for brands and channels.",
        hirers: "Media houses, creators, agencies and in-house marketing teams",
      },
      {
        role: "Community Manager",
        work: "Engages followers, manages conversations and protects brand reputation.",
        hirers: "Consumer brands, startups and service businesses",
      },
      {
        role: "Freelance Social Media Manager",
        work: "Manages social accounts and ads for several small business clients.",
        hirers: "Self-employed work with local shops, clinics, exporters and overseas clients",
      },
    ],
    whyNow: [
      "Local customers in Punjab and North India discover shops, clinics and courses through Instagram and WhatsApp first, so businesses want people who can manage that presence properly.",
      "Platforms now reward short video and automated ad formats like Advantage+, which makes structured training more valuable than trial and error.",
    ],
    faqs: [
      {
        q: "Is this course suitable for absolute beginners?",
        a: "Yes. It starts from platform basics and content creation and gradually moves to paid campaigns and reporting. No design or editing experience is needed.",
      },
      {
        q: "Will I run real ad campaigns?",
        a: "Yes. You launch and optimise live campaigns in Meta Ads Manager on real pages as part of your live projects, with a mentor reviewing the setup.",
      },
      {
        q: "How is this different from the Digital Marketing course?",
        a: "This course goes deeper into social content, video and paid social. The Digital Marketing course is broader and also covers SEO, Google Ads and email in detail.",
      },
      {
        q: "Do I need to be good at design or video?",
        a: "No. You learn Canva and CapCut step by step, and templates plus mentor reviews help you reach a professional standard.",
      },
    ],
    related: ["digital-marketing", "google-ads", "shopify"],
  },
  {
    slug: "google-ads",
    title: "Google Ads Course",
    navLabel: "Google Ads",
    group: "marketing",
    icon: "Target",
    tagline:
      "Build, track and optimise Search, Performance Max, Display and YouTube campaigns with accurate conversion tracking and smart bidding.",
    level: "Intermediate",
    duration: "2–3 Months",
    eligibility: "12th pass or above; basic understanding of websites recommended",
    overview: [
      "This course teaches how to plan and run Google Ads campaigns professionally, from account structure and keyword strategy to conversion tracking, smart bidding and reporting. It covers Search, Performance Max, Demand Gen, Display, Shopping and YouTube, so you can pick the right format for each business goal.",
      "You practise on live accounts with a mentor, learn to set up tracking through GA4 and Google Tag Manager, and prepare for the Google Ads certifications. Classroom and live online batches include certification and placement assistance for agency, in-house and freelance roles.",
    ],
    gains: [
      "Confidence in setting up and structuring Google Ads accounts from scratch",
      "Accurate conversion tracking with GA4, Google Tag Manager and enhanced conversions",
      "Working knowledge of Performance Max, Demand Gen and Shopping campaigns",
      "Optimisation and reporting skills that clients and managers can act on",
      "TechCADD certification, exam preparation guidance and placement assistance",
    ],
    syllabus: [
      {
        title: "Google Ads Fundamentals",
        summary:
          "Understand how the auction, quality signals and account structure work.",
        topics: [
          "How Google Ads works: auction, ad rank and quality",
          "Account, campaign, ad group and asset hierarchy",
          "Campaign types and choosing objectives",
          "Setting up a new account with billing and access best practices",
        ],
      },
      {
        title: "Keyword Research and Search Campaigns",
        summary:
          "Build Search campaigns around intent with tight structure and strong ads.",
        topics: [
          "Keyword Planner and search intent grouping",
          "Match types, negative keywords and search term reports",
          "Writing responsive search ads and using assets",
          "Location, language and schedule targeting for Indian markets",
          "Call, lead form and sitelink assets",
        ],
      },
      {
        title: "Conversion Tracking and Measurement",
        summary:
          "Set up reliable tracking so bidding and reporting use real outcomes.",
        topics: [
          "Google Tag Manager and Google tag installation",
          "GA4 events imported as conversions",
          "Enhanced conversions and consent mode basics",
          "Call and WhatsApp click tracking",
          "Offline conversion import concepts",
        ],
      },
      {
        title: "Smart Bidding and Optimisation",
        summary:
          "Use automated bidding responsibly and know when to intervene.",
        topics: [
          "Maximise Conversions, Target CPA and Target ROAS explained",
          "Learning periods and data requirements",
          "Budget pacing and campaign experiments",
          "Search term, audience and device analysis",
          "Quality Score and landing page experience",
        ],
      },
      {
        title: "Performance Max, Demand Gen and Shopping",
        summary:
          "Run automated, asset-based campaigns across Google surfaces with proper signals.",
        topics: [
          "Performance Max asset groups and audience signals",
          "Demand Gen campaigns across YouTube, Discover and Gmail",
          "Google Merchant Center and Shopping campaigns",
          "Brand exclusions, URL expansion and insights reports",
          "Measuring incrementality and avoiding wasted spend",
        ],
      },
      {
        title: "Display, YouTube and Remarketing",
        summary:
          "Build awareness and re-engage visitors using visual and video formats.",
        topics: [
          "Display targeting, placements and responsive display ads",
          "YouTube in-stream, in-stream discovery and Shorts formats",
          "Remarketing lists and customer match",
          "Video creative best practices",
        ],
      },
      {
        title: "Reporting, Compliance and Certification Prep",
        summary:
          "Present results clearly and prepare for Google's certification exams.",
        topics: [
          "Custom reports and Looker Studio dashboards",
          "Google Ads policies, disapprovals and appeals",
          "Manager accounts and client access",
          "Google Ads Search and Measurement certification preparation",
        ],
      },
      {
        title: "Capstone Live Campaign and Career Preparation",
        summary:
          "Plan, launch and report a live campaign, then prepare for interviews and freelance clients.",
        topics: [
          "Campaign plan with goals, structure and tracking",
          "Launch and optimisation on a live account under mentor review",
          "Final case study presentation",
          "Resume, portfolio and mock interviews",
          "Freelance proposal, scope and reporting templates",
        ],
      },
    ],
    tools: [
      "Google Ads",
      "Google Keyword Planner",
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Merchant Center",
      "Looker Studio",
      "Google Ads Editor",
      "Microsoft Advertising",
      "SEMrush",
      "Google Search Console",
    ],
    projects: [
      {
        title: "Search Lead Campaign",
        text: "Build a structured Search campaign with negatives, assets and tracked lead conversions.",
        tags: ["Search", "Leads", "Tracking"],
      },
      {
        title: "Conversion Tracking Setup",
        text: "Implement GA4 events, Tag Manager and enhanced conversions on a real website and verify them.",
        tags: ["GTM", "GA4", "Tracking"],
      },
      {
        title: "Performance Max for a Local Store",
        text: "Create asset groups and audience signals for a retail or service business and review the insights.",
        tags: ["Performance Max", "Assets", "Retail"],
      },
      {
        title: "Shopping Campaign Setup",
        text: "Prepare product data in Merchant Center and launch a Shopping campaign for a sample store.",
        tags: ["Shopping", "Merchant Center", "E-commerce"],
      },
      {
        title: "YouTube Video Campaign",
        text: "Plan creative and targeting for a video campaign and analyse view and conversion results.",
        tags: ["YouTube", "Video", "Awareness"],
      },
      {
        title: "Account Audit Report",
        text: "Audit an existing account, list issues in priority order and present a clear improvement plan.",
        tags: ["Audit", "Optimisation", "Reporting"],
      },
    ],
    careers: [
      {
        role: "Google Ads Specialist",
        work: "Builds and manages Search, Display and Shopping campaigns for measurable results.",
        hirers: "PPC agencies, e-commerce brands and in-house marketing teams",
      },
      {
        role: "Performance Marketing Executive",
        work: "Manages multi-channel paid campaigns and reports on cost per lead and return.",
        hirers: "Performance agencies, D2C brands and education companies",
      },
      {
        role: "PPC Analyst",
        work: "Analyses campaign data, audits accounts and recommends optimisation steps.",
        hirers: "Digital agencies and analytics-driven marketing teams",
      },
      {
        role: "E-commerce Advertising Executive",
        work: "Runs Shopping and Performance Max campaigns for online stores.",
        hirers: "Online retailers, marketplace sellers and export-focused brands",
      },
      {
        role: "Freelance Google Ads Consultant",
        work: "Sets up and manages accounts for local and overseas business clients.",
        hirers: "Self-employed work with small businesses, agencies and international clients",
      },
    ],
    whyNow: [
      "Google is moving advertisers towards automation such as Performance Max and smart bidding, so professionals who can give these systems the right signals and tracking stand out.",
      "Many Punjab and North India businesses already spend on ads without proper tracking, which creates steady demand for people who can measure and improve results.",
    ],
    faqs: [
      {
        q: "Do I need to know digital marketing before joining?",
        a: "Basic awareness of websites and online marketing helps, but the course explains concepts from first principles. Beginners are welcome.",
      },
      {
        q: "Will I manage a real Google Ads account?",
        a: "Yes. Live projects use real accounts under a mentor's supervision, so you practise setup, tracking, optimisation and reporting on real data.",
      },
      {
        q: "Does the course prepare me for Google's own certifications?",
        a: "Yes. A dedicated module covers exam preparation for the Google Ads Search and Measurement certifications, which are taken separately on Google's platform.",
      },
      {
        q: "Is Performance Max covered in detail?",
        a: "Yes. You learn asset groups, audience signals, brand exclusions and how to read insights, along with Demand Gen and Shopping.",
      },
    ],
    related: ["digital-marketing", "seo", "social-media-marketing"],
  },
  {
    slug: "seo",
    title: "SEO Course",
    navLabel: "SEO",
    group: "marketing",
    icon: "Search",
    tagline:
      "Learn keyword research, on-page and technical SEO, local SEO and link building, plus how to earn visibility in AI-driven search results.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; basic computer and internet skills",
    overview: [
      "This course teaches search engine optimisation as it is practised today, covering keyword research, on-page optimisation, technical SEO, local SEO, content strategy and ethical link building. It also explains how AI Overviews and answer engines use content, and how to structure pages so they can be cited.",
      "You work on real websites, audit them with Search Console and industry tools, and track ranking and traffic changes with a mentor's guidance. Classroom batches in Jalandhar and live online batches include certification and placement assistance for agency, in-house and freelance roles.",
    ],
    gains: [
      "A complete SEO process from research and audit to content and reporting",
      "Hands-on use of Search Console, GA4 and professional SEO tools",
      "Local SEO skills for Google Business Profile and Maps visibility",
      "Understanding of AI Overviews, E-E-A-T and structured data",
      "TechCADD certification, portfolio audits and placement assistance",
    ],
    syllabus: [
      {
        title: "How Search Engines Work",
        summary:
          "Understand crawling, indexing, ranking and the types of search results.",
        topics: [
          "Crawling, rendering, indexing and ranking basics",
          "Search intent types and result features",
          "AI Overviews and how answer engines use web content",
          "Google's quality guidelines and E-E-A-T",
          "Setting up Search Console and Bing Webmaster Tools",
        ],
      },
      {
        title: "Keyword Research and Content Strategy",
        summary:
          "Find topics people search for and plan content that satisfies their intent.",
        topics: [
          "Keyword research with Keyword Planner, SEMrush and Ahrefs",
          "Clustering keywords into topics and pillar pages",
          "Competitor gap analysis",
          "Content briefs and writing for readers first",
          "Refreshing and pruning existing content",
        ],
      },
      {
        title: "On-Page SEO",
        summary:
          "Optimise individual pages so search engines and users understand them.",
        topics: [
          "Title tags, meta descriptions and headings",
          "Internal linking and site architecture",
          "Image optimisation and alt text",
          "Schema markup with JSON-LD for articles, FAQs and products",
          "Using Yoast SEO and Rank Math on WordPress",
        ],
      },
      {
        title: "Technical SEO",
        summary:
          "Find and fix the technical issues that stop good content from ranking.",
        topics: [
          "Site audits with Screaming Frog",
          "XML sitemaps, robots.txt and canonical tags",
          "Core Web Vitals and page speed improvements",
          "Mobile-first indexing and JavaScript SEO basics",
          "Redirects, migrations and fixing crawl errors",
        ],
      },
      {
        title: "Local SEO",
        summary:
          "Help physical and service businesses appear in local search and on Google Maps.",
        topics: [
          "Google Business Profile setup and optimisation",
          "NAP consistency and local citations",
          "Reviews strategy and responding to customers",
          "Location pages for multi-branch businesses",
          "Local rank tracking",
        ],
      },
      {
        title: "Link Building and Off-Page SEO",
        summary:
          "Earn trustworthy links and mentions using safe, sustainable methods.",
        topics: [
          "How links, authority and anchor text work",
          "Digital PR, guest content and partnerships",
          "Directory and profile links that are actually useful",
          "Toxic links, disavow and avoiding penalties",
        ],
      },
      {
        title: "Analytics and SEO Reporting",
        summary:
          "Prove SEO impact with clear data and client-ready reports.",
        topics: [
          "Search Console performance and indexing reports",
          "GA4 organic traffic and conversion tracking",
          "Rank tracking and visibility measurement",
          "Looker Studio SEO dashboards",
        ],
      },
      {
        title: "Capstone SEO Project and Career Preparation",
        summary:
          "Optimise a live website end to end and prepare for interviews and freelance work.",
        topics: [
          "Full audit, keyword plan and action roadmap for a live site",
          "Implementing fixes and tracking results with a mentor",
          "Case study presentation",
          "Portfolio, resume and mock interviews",
          "Freelance SEO proposals and monthly reporting templates",
        ],
      },
    ],
    tools: [
      "Google Search Console",
      "Google Analytics 4",
      "Screaming Frog",
      "SEMrush",
      "Ahrefs",
      "Yoast SEO",
      "Rank Math",
      "Google Keyword Planner",
      "PageSpeed Insights",
      "Looker Studio",
      "Google Business Profile",
    ],
    projects: [
      {
        title: "Full Website SEO Audit",
        text: "Crawl a live website, identify technical and content issues and prepare a prioritised fix list.",
        tags: ["Audit", "Screaming Frog", "Technical"],
      },
      {
        title: "Keyword and Content Plan",
        text: "Research keyword clusters for a business and create a three-month content roadmap with briefs.",
        tags: ["Keywords", "Content", "Strategy"],
      },
      {
        title: "Local SEO Campaign",
        text: "Optimise a Google Business Profile and location pages for a local service business and track map visibility.",
        tags: ["Local SEO", "Maps", "Reviews"],
      },
      {
        title: "Schema Markup Implementation",
        text: "Add FAQ, article and organisation structured data to a site and validate it.",
        tags: ["Schema", "JSON-LD", "On-page"],
      },
      {
        title: "Page Speed Improvement",
        text: "Improve Core Web Vitals on a WordPress site through image, caching and code optimisation.",
        tags: ["Core Web Vitals", "WordPress", "Speed"],
      },
      {
        title: "SEO Performance Dashboard",
        text: "Connect Search Console and GA4 to Looker Studio and present monthly ranking and traffic insights.",
        tags: ["Reporting", "GA4", "Looker Studio"],
      },
    ],
    careers: [
      {
        role: "SEO Executive",
        work: "Handles on-page optimisation, keyword research and monthly reporting.",
        hirers: "SEO and digital agencies, publishers and e-commerce businesses",
      },
      {
        role: "Technical SEO Analyst",
        work: "Audits crawlability, speed and structured data and works with developers on fixes.",
        hirers: "Agencies, SaaS companies and large websites",
      },
      {
        role: "Content Strategist",
        work: "Plans search-led content and briefs writers around topics and intent.",
        hirers: "Content teams, media companies and B2B companies",
      },
      {
        role: "Local SEO Specialist",
        work: "Improves Maps and local search visibility for multi-location businesses.",
        hirers: "Local marketing agencies, clinics, hospitality and retail chains",
      },
      {
        role: "Freelance SEO Consultant",
        work: "Delivers audits and ongoing optimisation for small business and overseas clients.",
        hirers: "Self-employed work with local businesses, exporters and international clients",
      },
    ],
    whyNow: [
      "AI Overviews and answer engines are changing how results are shown, and businesses need specialists who understand quality content, structured data and trust signals rather than outdated tricks.",
      "Local search drives many walk-in and call enquiries in cities like Jalandhar, Ludhiana and Chandigarh, so local SEO skills are directly useful to nearby businesses.",
    ],
    faqs: [
      {
        q: "Is SEO still relevant with AI search?",
        a: "Yes. AI-generated answers still draw on well-structured, trustworthy web content. The course covers how to adapt content and technical setup for both traditional and AI-driven results.",
      },
      {
        q: "Do I need coding knowledge?",
        a: "No. Basic HTML concepts are taught as part of on-page and technical SEO, and no programming background is required.",
      },
      {
        q: "Will I work on a live website?",
        a: "Yes. Your live projects include auditing and optimising real sites, and you track results in Search Console and GA4.",
      },
      {
        q: "How long does it take to see rankings improve?",
        a: "SEO results depend on competition and site quality and usually take weeks to months. The course teaches how to set realistic expectations and report progress honestly.",
      },
    ],
    related: ["digital-marketing", "wordpress", "google-ads"],
  },
  {
    slug: "wordpress",
    title: "WordPress Development Course",
    navLabel: "WordPress",
    group: "marketing",
    icon: "Globe",
    tagline:
      "Build fast, secure, SEO-ready business websites with WordPress, Elementor, WooCommerce and custom themes, and launch them on real hosting.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; basic computer skills",
    overview: [
      "This course teaches you to design, build and maintain professional websites with WordPress, the most widely used content management system. You begin with themes, page builders and plugins, then move to WooCommerce, performance, security and an introduction to custom theme and plugin development with PHP.",
      "Projects are built for real businesses and deployed on live hosting. Classroom batches in Jalandhar and live online batches include mentor reviews, certification and placement assistance, and the skills also support freelance web design work.",
    ],
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
      {
        q: "Do I need coding knowledge to learn WordPress?",
        a: "No. The first half of the course is built around themes, blocks and Elementor. Introductory PHP is taught later for those who want to customise deeper.",
      },
      {
        q: "Will I learn to sell products online?",
        a: "Yes. A full module covers WooCommerce, including products, Razorpay and PayU payment setup, shipping, tax and order management.",
      },
      {
        q: "Will my projects be on real hosting?",
        a: "Yes. You deploy projects to live hosting with a domain and SSL, so you experience the complete launch process.",
      },
      {
        q: "Is this course useful for freelancing?",
        a: "Yes. The capstone covers client handover, maintenance plans and proposals, so you can begin freelance website work confidently.",
      },
    ],
    related: ["seo", "web-designing", "php-full-stack"],
  },
  {
    slug: "shopify",
    title: "Shopify E-commerce Course",
    navLabel: "Shopify",
    group: "marketing",
    icon: "ShoppingCart",
    tagline:
      "Set up, design and grow online stores with Shopify, from products, payments and themes to ads, SEO and dropshipping or export selling.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; entrepreneurs and business owners welcome",
    overview: [
      "This course shows you how to launch and run a complete online store on Shopify. You learn store setup, product and collection management, theme customisation, payments and shipping, and then the marketing and analytics that bring in customers and repeat orders.",
      "It suits students, business owners, exporters and traders in Punjab who want to sell online in India or internationally. You build real stores in live projects with mentor reviews, and classroom and live online batches include certification and placement assistance.",
    ],
    gains: [
      "The ability to build a complete, professional Shopify store from scratch",
      "Skills in product setup, themes, apps, payments, shipping and taxes",
      "Store marketing with Google Shopping, Meta Ads, email and SEO",
      "Understanding of dropshipping, print on demand and export selling models",
      "TechCADD certification, a live store portfolio and placement assistance",
    ],
    syllabus: [
      {
        title: "E-commerce Foundations and Store Planning",
        summary:
          "Choose a niche and business model and plan a store around real customers.",
        topics: [
          "E-commerce models: own inventory, dropshipping, print on demand",
          "Niche and competitor research",
          "Brand name, logo and positioning basics",
          "Planning catalogue, collections and customer journey",
          "Legal basics: GST, business registration and policies",
        ],
      },
      {
        title: "Shopify Store Setup",
        summary:
          "Create and configure a Shopify store with the settings every store needs.",
        topics: [
          "Creating an account and understanding the Shopify admin",
          "Adding products, variants, media and inventory",
          "Collections, tags and navigation menus",
          "Domains, email and store policies",
          "Staff accounts and permissions",
        ],
      },
      {
        title: "Themes and Store Design",
        summary:
          "Design a store that looks trustworthy and converts on mobile first.",
        topics: [
          "Choosing and customising an Online Store 2.0 theme",
          "Sections, blocks and the theme editor",
          "Homepage, product page and collection page best practices",
          "Basics of Liquid templating for small edits",
          "Branding with Canva and Figma",
        ],
      },
      {
        title: "Payments, Shipping and Taxes",
        summary:
          "Set up the operations that let customers pay and receive orders reliably.",
        topics: [
          "Payment gateways including Razorpay, UPI and cash on delivery",
          "Shipping zones and courier partners such as Shiprocket",
          "GST settings and invoices",
          "Selling internationally with Shopify Markets and multiple currencies",
          "Returns, refunds and customer service workflows",
        ],
      },
      {
        title: "Apps, Automation and Dropshipping",
        summary:
          "Extend the store with the right apps and automate order handling.",
        topics: [
          "Evaluating and installing Shopify apps",
          "Dropshipping with DSers and supplier vetting",
          "Print on demand workflows",
          "Reviews, upsells and bundles",
          "Shopify Flow and basic automation",
        ],
      },
      {
        title: "Store Marketing and Growth",
        summary:
          "Drive traffic and sales through search, social and email.",
        topics: [
          "Shopify SEO: titles, collections and structured data",
          "Google Shopping and Merchant Center basics",
          "Meta Advantage+ shopping campaigns and catalogue setup",
          "Email and WhatsApp marketing with Klaviyo",
          "Abandoned cart recovery and retention",
        ],
      },
      {
        title: "Analytics and Conversion Optimisation",
        summary:
          "Read store data and improve the customer journey.",
        topics: [
          "Shopify Analytics and reports",
          "GA4 e-commerce tracking and Meta Pixel",
          "Funnel analysis and checkout optimisation",
          "Page speed and image optimisation",
        ],
      },
      {
        title: "Capstone Live Store and Career Preparation",
        summary:
          "Launch a complete live store and prepare for interviews and freelance work.",
        topics: [
          "End-to-end store build with products, design and payments",
          "Marketing launch plan with a mentor review",
          "Final presentation and store audit",
          "Portfolio, resume and mock interviews",
          "Freelance store setup packages and client onboarding",
        ],
      },
    ],
    tools: [
      "Shopify",
      "Shopify Markets",
      "Shiprocket",
      "Razorpay",
      "DSers",
      "Klaviyo",
      "Canva",
      "Google Merchant Center",
      "Meta Ads Manager",
      "Google Analytics 4",
      "Figma",
    ],
    projects: [
      {
        title: "Fashion or Lifestyle Store",
        text: "Build a complete branded store with collections, variants, custom theme sections and policies.",
        tags: ["Shopify", "Theme", "Branding"],
      },
      {
        title: "Dropshipping Store",
        text: "Set up a supplier-connected store using DSers and automate order forwarding.",
        tags: ["Dropshipping", "Automation", "Apps"],
      },
      {
        title: "Export-Ready Store",
        text: "Configure multi-currency selling and international shipping for a Punjab-made product line.",
        tags: ["Export", "Markets", "Shipping"],
      },
      {
        title: "Checkout and Payment Setup",
        text: "Integrate Razorpay, UPI and cash on delivery with GST-ready invoices and tested orders.",
        tags: ["Payments", "GST", "Checkout"],
      },
      {
        title: "Store Ad Campaigns",
        text: "Connect the catalogue to Google Merchant Center and Meta, then launch Shopping and Advantage+ campaigns.",
        tags: ["Google Shopping", "Meta Ads", "Catalogue"],
      },
      {
        title: "Email Retention Flows",
        text: "Create welcome, abandoned cart and post-purchase flows in Klaviyo and review their results.",
        tags: ["Klaviyo", "Email", "Retention"],
      },
    ],
    careers: [
      {
        role: "Shopify Developer",
        work: "Builds and customises stores, themes and app integrations.",
        hirers: "E-commerce agencies, D2C brands and web studios",
      },
      {
        role: "E-commerce Executive",
        work: "Manages catalogue, orders, promotions and daily store operations.",
        hirers: "Online retailers, manufacturers selling direct and marketplace sellers",
      },
      {
        role: "E-commerce Marketing Executive",
        work: "Runs ads, SEO and email campaigns to grow store sales.",
        hirers: "D2C brands, digital agencies and export houses",
      },
      {
        role: "Store Manager",
        work: "Oversees performance, inventory, customer service and growth plans for an online store.",
        hirers: "Growing D2C brands and multi-channel retailers",
      },
      {
        role: "Freelance E-commerce Consultant",
        work: "Sets up and improves Shopify stores for small business and overseas clients.",
        hirers: "Self-employed work with local manufacturers, exporters and international clients",
      },
    ],
    whyNow: [
      "Punjab's textile, sports goods, hosiery and handicraft makers can now sell directly to customers in India and abroad, and Shopify gives them a ready platform if they have someone who can run it.",
      "Shopify Markets and social commerce tools like Meta catalogues have made cross-border and mobile-first selling easier than ever, which raises demand for trained store builders.",
    ],
    faqs: [
      {
        q: "Do I need a product to start the course?",
        a: "No. You can build a practice store with sample or supplier products. If you already have a business, you can build your real store during the course.",
      },
      {
        q: "Do I need coding skills for Shopify?",
        a: "No. Themes and apps handle most needs. Basic Liquid is introduced for small edits, but coding is optional.",
      },
      {
        q: "Will the course cover selling internationally?",
        a: "Yes. You learn Shopify Markets, multi-currency selling and shipping basics for overseas customers.",
      },
      {
        q: "Can I work as a freelancer after this course?",
        a: "Yes. The final module covers store setup packages, client onboarding and maintenance, so you can start freelance projects with confidence.",
      },
    ],
    related: ["wordpress", "digital-marketing", "google-ads"],
  },
];
