import type { CoursePage } from "./types";

/* /courses/social-media-marketing — long-form landing copy supplied by the client (used as given, section by section).
   Editorial placeholders/notes in the supplied text are left out: the fee and duration blanks, "[Remove any tool not actually
   taught.]" / "Please remove any tool you don't actually teach.", the certificate brackets, "[Confirm that recorded sessions
   are available.]" and "[Confirm batch timings.]". `duration` below is the previous value — confirm with the client.
   Reviews are the client's supplied text — confirm they are from real students before launch. */

const roles = [
  "Social media executive", "Content strategist", "Community manager", "Paid social specialist", "Influencer coordinator", "Video content creator", "Freelance consultant",
];

export const socialMediaMarketing: CoursePage = {
  slug: "social-media-marketing",
  title: "Social Media Marketing Course",
  navLabel: "Social Media Marketing",
  group: "marketing",
  icon: "Share2",
  tagline:
    "Learn to plan, run and measure campaigns on Instagram, Facebook, LinkedIn, YouTube and WhatsApp Business, built around live campaign projects and portfolio-ready work.",
  level: "Beginner",
  duration: "2–3 Months",
  eligibility: "No technical background or prior marketing experience needed",
  overview: [
    "The Social Media Marketing Course at techcadd is a practical, career-focused program that teaches you to plan, run and measure campaigns on Instagram, Facebook, LinkedIn, YouTube and WhatsApp Business. If you are searching for a social media marketing course in India that goes beyond theory, this program is built around live campaign projects and portfolio-ready work.",
    "You will learn audience research, content strategy, reel and short-video planning, paid advertising with Meta Ads Manager, community management, influencer collaboration, and performance reporting. The training suits graduates, postgraduates, working professionals, job switchers, freelancers and business owners who want to grow brands online or move into a digital marketing career.",
    "Learners in Punjab can attend classes at our Jalandhar centre, while students from other states can join live online batches from home. Whether your goal is an agency role, a steady freelance income or promoting your own business, this course gives you a clear, step-by-step path from fundamentals to real campaign results.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "A one-page strategy for a real or mock brand",
    "A persona sheet and an optimised business profile",
    "A 30-day content calendar with designed creatives",
    "Five edited short videos for your portfolio",
    "A mock campaign with budget, targeting and cost-per-lead tracking",
    "A response playbook for common situations",
    "A final performance report with recommendations",
  ],
  syllabus: [
    {
      title: "Module 1: Social Media Marketing Foundations",
      summary: "",
      topics: ["Overview of social media marketing and how platforms differ", "Setting business goals and choosing KPIs", "Building a campaign plan around a goal"],
      outcome: "a one-page strategy for a real or mock brand",
    },
    {
      title: "Module 2: Audience Research and Brand Voice",
      summary: "",
      topics: ["Customer personas, competitor analysis and social listening", "Brand voice, positioning and profile optimisation"],
      outcome: "a persona sheet and an optimised business profile",
    },
    {
      title: "Module 3: Content Creation and Planning",
      summary: "",
      topics: ["Monthly content calendars and content pillars", "Captions, hooks and storytelling for each platform", "Interactive formats such as polls, quizzes and live sessions"],
      outcome: "a 30-day content calendar with designed creatives",
    },
    {
      title: "Module 4: Reels and Short-Video Marketing",
      summary: "",
      topics: ["Scripting, shooting and editing short videos", "YouTube Shorts and repurposing one idea across platforms"],
      outcome: "five edited short videos for your portfolio",
    },
    {
      title: "Module 5: Advertising on Social Media",
      summary: "",
      topics: ["Facebook, Instagram and LinkedIn Ads", "Audience targeting, creative testing and budgeting", "Lead-generation and WhatsApp click-to-chat campaigns"],
      outcome: "a mock campaign with budget, targeting and cost-per-lead tracking",
    },
    {
      title: "Module 6: Community Management and Crisis Handling",
      summary: "",
      topics: ["Replying to comments, messages and complaints", "Handling negative feedback and protecting brand reputation"],
      outcome: "a response playbook for common situations",
    },
    {
      title: "Module 7: Influencer and Collaboration Marketing",
      summary: "",
      topics: ["Finding creators, briefing them and measuring results"],
    },
    {
      title: "Module 8: Analytics and Reporting",
      summary: "",
      topics: ["Reading reach, engagement, conversions and cost metrics", "Building a monthly client report"],
      outcome: "a final performance report with recommendations",
    },
    {
      title: "Module 9: Freelancing and Career Readiness",
      summary: "",
      topics: ["Pricing packages, proposals and client communication", "Portfolio, resume and interview preparation"],
    },
  ],
  tools: [
    "Meta Business Suite", "Meta Ads Manager", "LinkedIn Campaign Manager", "YouTube Studio", "WhatsApp Business", "Canva", "CapCut", "Google Analytics 4", "Buffer",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a social media marketing course?", a: "A social media marketing course teaches you to plan, create, publish, promote and measure content on platforms such as Instagram, Facebook, LinkedIn, YouTube and WhatsApp Business. At techcadd, the training covers strategy, content creation, Reels, paid ads, community management and reporting, with assignments in every module." },
    { q: "Who is eligible for the social media marketing course at techcadd?", a: "Anyone who is comfortable using social media and has basic computer or smartphone skills can join. Graduates, postgraduates, working professionals, job switchers, freelancers and business owners are all welcome, and 12th-pass students can also enrol. No prior marketing experience or technical background is required." },
    { q: "What is the fee for the social media marketing course?", a: "The course fee may vary depending on batch type and mode of learning. Please contact techcadd for the current fee, instalment options and any ongoing offers." },
    { q: "How long is the social media marketing course?", a: "Duration can depend on the batch you choose and your practice schedule." },
    { q: "What does the syllabus cover?", a: "The syllabus covers social media foundations, audience research, content planning, Reels and short-video marketing, advertising on Facebook, Instagram and LinkedIn, community management, influencer collaboration, analytics and reporting, and freelancing basics. The final modules focus on building a portfolio." },
    { q: "Which tools will I learn?", a: "You will learn Meta Business Suite, Meta Ads Manager, LinkedIn Campaign Manager, YouTube Studio, WhatsApp Business, Canva, CapCut and Google Analytics 4, along with AI-assisted writing tools used responsibly." },
    { q: "Is the course suitable for complete beginners?", a: "Yes, the course starts from the fundamentals and builds step by step. Beginners should plan to practise regularly, because hands-on assignments are where most of the learning happens." },
    { q: "Will I get a certificate?", a: "Learners receive a techcadd course completion certificate after completing the program." },
    { q: "Can I learn social media marketing online, or do I need to attend the centre?", a: "You can learn through live online classes from anywhere in India, and learners in Punjab can also attend at the Jalandhar centre. Online learners get the same assignments and trainer feedback as classroom learners." },
    { q: "What jobs can I get after this course?", a: "Common roles include social media executive, content creator, community manager, paid social specialist and influencer coordinator. Outcomes depend on your skills, portfolio and effort, and techcadd does not guarantee jobs or fixed salaries." },
    { q: "Can I start freelancing after the course?", a: "Yes, many learners use these skills to take on small clients, manage business pages or offer content packages. The course includes pricing, proposals and reporting guidance, but building a client base takes time and consistent effort." },
    { q: "Can students from Himachal Pradesh join the social media marketing course in Himachal Pradesh online?", a: "Yes, learners from Shimla, Solan, Dharamshala and other areas can join live online batches from home. Tourism-linked businesses such as hotels, homestays and cafés in the state often need social media skills, and remote freelancing also suits hill-town learners." },
    { q: "What are the social media marketing job opportunities in Punjab and Haryana?", a: "Punjab offers openings with manufacturers, exporters and Mohali startups, while Haryana has more agency, e-commerce and corporate roles around Gurugram. Both states also offer freelance opportunities with small local businesses. Salaries vary by city and company, and fresher pay is usually modest at the start." },
    { q: "Is the social media marketing course in Delhi and Chandigarh suitable for working professionals?", a: "Yes, evening and weekend live batches are designed for people with jobs. Professionals in Delhi NCR and the Chandigarh tricity can learn after work hours and apply the skills in their current role or a new one." },
    { q: "Can learners from Jammu and Kashmir, Uttarakhand, Rajasthan and Uttar Pradesh study this course online?", a: "Yes, the live online format is open to learners in all of these states, including Jammu, Srinagar, Dehradun, Haridwar, Jaipur, Lucknow and Meerut. Each region has strong sectors such as handicrafts, tourism, textiles and retail that can use social media skills." },
  ],
  related: ["digital-marketing", "google-ads", "shopify"],
  copy: {
    heading: { title: "Social Media Marketing Course", highlight: "in India", meta: "Social Media Marketing Course in India: Live Campaign Projects and Portfolio-Ready Work | techcadd" },
    overview: { eyebrow: "Program Overview", title: "The Social Media Marketing Course at techcadd" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "Module-Wise Curriculum",
      text: "The program follows the workflow of a real social media team, from strategy to reporting. Each module ends with a practical assignment.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join This Social Media Marketing Course?",
      intro: "The Social Media Marketing Course at techcadd is designed for people who want a practical digital skill, not just a certificate. You do not need a technical background or prior marketing experience.",
      items: [
        { icon: "GraduationCap", title: "Graduates and Postgraduates", text: "If you have completed a degree in commerce, arts, science, management, engineering or mass communication and are looking for a clear career direction, this course helps you step into a growing field. Social media roles such as executive, content strategist, community manager and paid-ads specialist are open to fresh graduates, and a portfolio of live campaign work often counts for more than your degree stream." },
        { icon: "Shuffle", title: "Working Professionals and Job Switchers", text: "Professionals in sales, customer support, HR, teaching, banking or operations can use this program to move into marketing without starting from zero. Weekend and evening batches let you learn while you continue your current job. If you want to switch industries, the course gives you campaign case studies and reporting skills that recruiters can evaluate." },
        { icon: "PenTool", title: "Freelancers and Content Creators", text: "Designers, writers, video editors, photographers and influencers often struggle to turn their skill into steady client work. Here you learn how to pitch social media packages, plan monthly content calendars, run paid ads and present performance reports, so you can price your services with confidence." },
        { icon: "Building2", title: "Business Owners and Entrepreneurs", text: "Shop owners, clinic owners, coaching-centre founders, boutique sellers and manufacturers can learn to manage their own pages and ads instead of depending on agencies. You will understand lead generation, WhatsApp Business catalogues, and how to track what a rupee of ad spend actually returns." },
        { icon: "BookOpen", title: "Students", text: "Students who have finished 12th can also join, particularly if they want to build a skill alongside college or start earning through freelance projects after 12th. They make up a smaller part of each batch, and trainers adjust assignments so beginners are never left behind." },
      ],
      need: "A phone, a stable internet connection and curiosity about how brands grow online are enough to begin.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Every state has different businesses that need social media talent. Here is how learners in each region can join our live online batches and apply the skills locally:",
      items: [
        { title: "Punjab", text: "Anyone looking for a social media marketing course in Punjab can build campaigns for local industries such as hosiery, sports goods and exporters, or for Mohali's startup scene." },
        { title: "Haryana", text: "Learners near Gurugram can target agency, e-commerce and corporate brand roles, while Karnal and Ambala students can serve local retail and agri-businesses." },
        { title: "Himachal Pradesh", text: "Hotel, homestay and café owners in Shimla and Dharamshala can learn Instagram and Reels strategy to attract tourists directly, and remote freelancing suits hill-town learners." },
        { title: "Chandigarh", text: "Tricity professionals can aim for IT, education and startup marketing teams, with Panchkula and Mohali offering plenty of local clients." },
        { title: "Delhi NCR", text: "With the largest fresher job market, learners in Delhi and Noida can target agencies, fintech and media brands and build a strong portfolio while applying." },
        { title: "Jammu & Kashmir", text: "Handicraft sellers, saffron and dry-fruit businesses and tourism operators in Jammu and Srinagar can reach buyers across India through social commerce." },
        { title: "Uttarakhand", text: "Learners in Dehradun and Haridwar can promote travel, wellness, yoga retreats and hospitality brands, as well as education institutes." },
        { title: "Rajasthan", text: "Jaipur's jewellery, textile and handicraft sellers and heritage hotels can use visual platforms to grow national and overseas orders." },
        { title: "Uttar Pradesh", text: "Learners in Lucknow and Meerut can work with retail, electronics and local service brands, or serve government-linked awareness campaigns." },
      ],
      outro: "Whichever group you belong to, the program is built so that your location does not limit your learning.",
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This Social Media Marketing Program?",
      intro: "Social media is no longer a side activity for brands. It is where customers discover products, compare options, ask questions and decide whom to trust. India has hundreds of millions of social media users, and businesses of every size, from a neighbourhood boutique to a funded startup, now need people who can turn that attention into enquiries and sales. This program is built to make you one of those people.",
      points: [
        { title: "Skills Employers and Clients Actually Ask For", text: "Many beginners learn how to post, but few learn how to measure. This course gives equal weight to creative work and numbers. You will plan content around business goals, write captions and hooks that suit each platform, and then read analytics to see what worked. By the end, you can explain why a campaign succeeded or failed, which is exactly what agency managers and business owners want to hear in an interview or a pitch." },
        { title: "Paid Advertising Is Part of the Core, Not an Add-On", text: "Organic reach alone rarely delivers predictable leads. You will learn to set up campaigns in Meta Ads Manager, define audiences, test creatives, control budgets and track cost per lead. Practising on structured exercises first helps you avoid expensive mistakes when you handle a real client's money." },
        { title: "Short-Form Video and Reels Strategy", text: "Reels, YouTube Shorts and short-form video now drive much of the discovery on social platforms. The program covers scripting, hooks, editing basics, posting rhythm and how to repurpose one idea across several platforms, so a small team or a solo freelancer can stay consistent without burning out." },
        { title: "Built for Freelancing as Well as Jobs", text: "You can use this skill in three ways: join an agency or in-house team, freelance for multiple clients, or grow your own business. The course therefore includes client communication, proposal writing, simple pricing models and monthly reporting formats. A freelancer in Himachal Pradesh or a business owner in Uttarakhand can work remotely with clients across India using the same toolkit." },
        { title: "Flexible Learning Without Moving Cities", text: "Because live online classes are part of the format, learners do not need to relocate to a metro to get quality training. Working professionals can choose timings that fit around office hours, and recorded revision material helps you catch up if you miss a session. Those in Punjab who prefer classroom learning can attend at the Jalandhar centre." },
        { title: "A Portfolio You Can Show", text: "Hiring managers rarely ask for marks first. They ask for proof. Through assignments, mock campaigns and live projects, you build a portfolio that includes content calendars, creatives, ad structures and a final performance report. This portfolio becomes your strongest tool when you apply for jobs or approach your first paying client." },
        { title: "Honest Career Expectations", text: "Results depend on practice, consistency and the effort you put into projects. Salary ranges for social media roles in India vary widely by city, company type and skill level, and fresher packages are typically modest before rising with experience and proven results. The program focuses on building skills that justify growth rather than promising a fixed outcome." },
      ],
      outro: "If you want to start a career in digital marketing, add a high-demand skill to your current profile, or grow your own business, this social media marketing course gives you a structured path with practical outcomes.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your Social Media Marketing Training?",
      intro: "Choosing where to learn social media marketing matters as much as choosing the skill. Many institutes teach platform features, but few connect them to real business results. techcadd builds its training around practice, mentoring and measurable outcomes, so you finish with skills you can demonstrate, not just topics you have heard about.",
      points: [
        { title: "Training Led by Practitioners", text: "Social platforms change their algorithms, ad formats and tools every few months, and a syllabus that is not updated quickly becomes outdated. techcadd trainers teach from hands-on campaign experience, so lessons reflect how Instagram, Meta Ads Manager, LinkedIn and YouTube work today. You learn the reasoning behind each decision, such as why one creative is tested against another, rather than memorising button clicks." },
        { title: "Learning by Doing, Not Just Listening", text: "Every module ends with an assignment. You build content calendars, design post creatives, write ad copy, set up mock campaigns and analyse the results. Practical work takes up a major share of class time, which means you get comfortable with tools before a client or employer expects results from you." },
        { title: "Live Classes with Real Interaction", text: "techcadd's live online batches let you ask questions in the moment, get your work reviewed and see how your trainer solves problems on screen. This format suits learners who cannot travel, including working professionals and freelancers who need flexible timings. Recorded sessions are available for revision, so a missed class does not break your learning flow." },
        { title: "Personal Feedback on Your Work", text: "Reviews are most useful when they are specific. Trainers comment on your captions, creatives, targeting choices and reports, and explain what to improve. Smaller, well-managed batches help ensure that each learner's assignments are actually looked at and that doubts are cleared before moving on." },
        { title: "A Curriculum That Reflects Real Jobs", text: "The program follows the workflow of an actual social media team: research, strategy, content creation, publishing, paid promotion, community management and reporting. Because each stage builds on the previous one, you understand how the pieces fit together. That broader view is what separates a person who can post from one who can run a brand's social presence." },
        { title: "Support Beyond the Classroom", text: "Learners can get guidance on building a portfolio, preparing a resume, framing case studies and approaching freelance clients. Interview preparation covers common questions about metrics, ad budgets and content planning. We encourage learners to treat this as skill-building support, because outcomes depend on individual effort and the job market." },
        { title: "Transparent and Honest Approach", text: "techcadd aims to be clear about what the course offers: the syllabus, duration, mode of learning, fees and certificate details are shared upfront. We do not promise guaranteed jobs or fixed salaries. What we promise is structured training, regular practice and honest feedback, and what you achieve will depend on how you apply them." },
        {
          title: "Who Benefits Most from techcadd's Approach",
          text: "This program works well if you:",
          list: [
            "Want hands-on practice rather than a theory-only course",
            "Need flexible live online batches alongside work or college",
            "Plan to freelance and need pricing, pitching and reporting skills",
            "Own a business and want to run your own pages and ads",
            "Are switching careers and need a portfolio to show recruiters",
          ],
          after: "If these points match your goals, techcadd offers a practical, well-supported route into social media marketing.",
        },
      ],
    },
    tools: {
      title: "Tools and Software Covered",
      columns: ["Tool", "Used for"],
      groups: [
        { area: "Meta Business Suite and Meta Ads Manager", tools: "Publishing, inbox, ads and insights" },
        { area: "LinkedIn Campaign Manager", tools: "B2B advertising" },
        { area: "YouTube Studio", tools: "Shorts and channel analytics" },
        { area: "WhatsApp Business", tools: "Catalogues, quick replies and broadcasts" },
        { area: "Canva and CapCut", tools: "Design and video editing" },
        { area: "Google Analytics 4 and UTM links", tools: "Tracking website traffic from social media" },
        { area: "Scheduling tools", tools: "Buffer or Meta's native scheduler" },
        { area: "AI writing and ideation assistants", tools: "Drafts and research, always reviewed by a human" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Typical roles include social media executive, content strategist, community manager, paid social specialist, influencer coordinator, video content creator and freelance consultant. Experienced professionals can move into digital marketing manager or brand strategist roles. Fresher salaries in India are approximate and vary widely by city, company type and skill level. They typically start modestly and rise with proven campaign results.",
      roles,
      jobsTitle: "State-Wise Job Opportunities",
      jobs: [
        { title: "Punjab", text: "Manufacturers and exporters in Ludhiana and Jalandhar, along with Mohali startups, need people to handle lead generation and B2B pages." },
        { title: "Haryana", text: "Social media marketing jobs in Haryana are concentrated in Gurugram, where agencies, e-commerce firms and corporate brand teams hire for content and paid-ads roles." },
        { title: "Himachal Pradesh", text: "Hotels, homestays and cafés in Shimla and Dharamshala need Reels and booking-enquiry campaigns. Remote freelancing for clients elsewhere is also practical." },
        { title: "Delhi NCR", text: "Agencies, fintech and media companies in Delhi and Noida offer the widest range of fresher openings and the fastest career growth." },
        { title: "Rajasthan", text: "Jaipur's jewellery, textile and handicraft sellers, and heritage hotels, rely on visual storytelling to reach buyers across India and abroad." },
        { title: "Uttarakhand", text: "Travel, wellness, yoga-retreat and hospitality brands in Dehradun and Haridwar hire for destination content and community management." },
      ],
      outro: "Learners from any state can also work remotely for agencies in Bengaluru, Hyderabad, Pune and Mumbai.",
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Harpreet Kaur", role: "Graduate, B.Com", place: "Jalandhar, Punjab", rating: 5, text: "After my B.Com I was confused about what to do next. The course started from the basics, and by the second month I was making my own content calendar. The trainer checked every assignment and told me exactly what to fix. I now have a proper portfolio to show." },
        { name: "Rohit Malhotra", role: "Working professional, bank employee", place: "Karnal, Haryana", rating: 5, text: "I joined the online weekend batch because of my job timings. Classes were live, so I could ask doubts directly. The Meta Ads part was very useful. Now I manage the pages of two local shops on the side." },
        { name: "Neha Thakur", role: "Freelancer", place: "Shimla, Himachal Pradesh", rating: 4, text: "I was already doing some design work but did not know how to pitch social media packages. The lessons on pricing and monthly reports helped me talk to clients with more confidence. Internet in the hills is sometimes slow, but the recorded sessions helped me catch up." },
        { name: "Gurpreet Singh", role: "Job switcher, from customer support", place: "Mohali, Chandigarh", rating: 5, text: "I wanted to move out of the support profile, so I needed something practical, not just theory. The mock campaigns and the final report gave me something real to show in interviews. The learning was hands-on, and I liked that." },
        { name: "Ananya Sharma", role: "Postgraduate, MBA Marketing", place: "Noida, Delhi NCR", rating: 4, text: "My MBA taught me the concepts, but not the tools. Here I actually learned content planning, Reels, and how to read analytics. The feedback was honest, even when my first creatives were not good." },
        { name: "Imran Bhat", role: "Business owner, handicraft seller", place: "Srinagar, Jammu & Kashmir", rating: 5, text: "I sell handicrafts and always depended on an agency. After this course I handle my Instagram and WhatsApp Business catalogue myself. I now understand which posts bring enquiries and which do not." },
        { name: "Simran Rawat", role: "12th pass, learning alongside college", place: "Dehradun, Uttarakhand", rating: 4, text: "I am still in college, so I was nervous about joining with working people. The trainer explained things in simple language and nobody made me feel behind. I have started helping a cousin's café with Instagram." },
        { name: "Pooja Agarwal", role: "Boutique owner", place: "Jaipur, Rajasthan", rating: 5, text: "My boutique sells ethnic wear, and I wanted regular customers beyond my area. I learned how to plan reels, write captions that suit my brand and run small ad budgets sensibly. My orders from other cities have started to come in." },
        { name: "Ankit Verma", role: "Job switcher, from retail sales", place: "Lucknow, Uttar Pradesh", rating: 4, text: "Coming from sales, I knew customers but not content. The module on community management and handling complaints was very practical. The pace was fine for a beginner, though you need to practise daily to get the benefit." },
        { name: "Ritika Chauhan", role: "12th pass, planning freelance work", place: "Ludhiana, Punjab", rating: 4, text: "I joined right after 12th because I want to earn through freelancing while I study. The assignments pushed me to create real posts instead of just watching videos. I still have a lot to learn, but I now know where to start." },
      ],
    },
    faqTitle: "Frequently Asked Questions: Social Media Marketing Course",
    cta: {
      title: "Start Your Social Media Marketing Career",
      highlight: "with techcadd",
      text: "Learn to plan, post, advertise and report, and build a portfolio you can show to employers and clients. Join the Social Media Marketing Course at techcadd and learn Instagram, Facebook, LinkedIn and YouTube marketing through live projects, mock ad campaigns and trainer feedback. Study online from anywhere in India, or attend classes at any of our centres.",
    },
  },
};
