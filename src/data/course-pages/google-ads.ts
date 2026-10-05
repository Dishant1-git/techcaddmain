import type { CoursePage } from "./types";

/* /courses/google-ads — long-form landing copy supplied by the client (used as given, section by section).
   The supplied text carried editor notes; how each was handled:
   - Module 2 and Module 5 titles were "[Confirm: suggested topic: …]" → the suggested topics are used. CONFIRM with the client.
   - Tools: only Google Ads + GA4 were confirmed; Tag Manager, Merchant Center and Looker Studio were "include only if you teach
     them". They are listed because the overview / why-program copy already says they are taught. CONFIRM or remove.
   - Bracketed asks ("[Add verified detail here…]", "[Confirm batch timings…]", "[Add real batch size…]", "[Mention interview
     preparation… only if you actually provide it.]", fee/duration blanks, "[confirm]") are left out.
   - FAQ 12 (government recognition) uses the fallback answer the text supplied for "no such recognition".
   `duration` below is the previous value — confirm. Reviews are the client's supplied text — confirm they are real before launch. */

const roles = ["PPC executive", "Performance marketer", "Paid search analyst", "Digital marketing executive"];

export const googleAds: CoursePage = {
  slug: "google-ads",
  title: "Google Ads Course",
  navLabel: "Google Ads",
  group: "marketing",
  icon: "Target",
  tagline:
    "Learn to plan, launch and optimise Search, Display, YouTube, Shopping and Performance Max campaigns, and track conversions with Google Analytics 4 and Google Tag Manager.",
  level: "All Levels",
  duration: "2–3 Months",
  eligibility: "Basic computer skills; no coding or technical degree required",
  overview: [
    "The Google Ads course at techcadd is a practical, career-focused program for graduates, working professionals, freelancers and business owners who want to run profitable paid campaigns. In this Google Ads course, you learn to plan, launch and optimise Search, Display, YouTube, Shopping and Performance Max campaigns. You also learn to track conversions with Google Analytics 4 and Google Tag Manager, so every rupee of ad spend can be tied to leads and sales.",
    "Whether you want to move into digital marketing, start freelancing or grow your own business, the training focuses on keyword research, ad copywriting, bidding strategies and campaign reporting rather than theory alone. Learners in Punjab will find it especially useful, as local manufacturers, exporters, startups and service businesses increasingly depend on paid search to reach customers.",
    "Classes run in both online and offline modes. techcadd's physical centre is in Jalandhar, Punjab, and learners from other states can join live online sessions. By the end of the program, you will be prepared to manage client or business campaigns confidently and to attempt Google's Skillshop certification exams.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Explain how ads are served and choose the right campaign type for a business goal",
    "Build a keyword plan and ad copy for a real business",
    "Launch a Search campaign with a sensible budget and bidding approach",
    "Make ads more useful and more prominent on the results page",
    "Plan awareness and remarketing campaigns",
    "Show what the budget produced and decide what to change next",
  ],
  syllabus: [
    {
      title: "Module 1: Introduction to Google Ads",
      summary: "Learn how Google's ad platform works, how to set up an account and the main campaign types.",
      topics: ["How Google's ad platform works", "Setting up an account", "The main campaign types"],
      outcome: "You can explain how ads are served and choose the right campaign type for a business goal.",
    },
    {
      title: "Module 2: Keyword Research & Ad Copywriting",
      summary: "Find high-intent keywords, group them into ad groups and write responsive search ads.",
      topics: ["Finding high-intent keywords", "Grouping keywords into ad groups", "Writing responsive search ads"],
      outcome: "You can build a keyword plan and ad copy for a real business.",
    },
    {
      title: "Module 3: Creating Your First Google Ads Campaign",
      summary: "Covers campaign setup, budgeting and bidding strategies.",
      topics: ["Campaign setup", "Budgeting", "Bidding strategies"],
      outcome: "You can launch a Search campaign with a sensible budget and bidding approach.",
    },
    {
      title: "Module 4: Google Ads Extensions",
      summary: "Covers ad extensions such as callouts, sitelinks and structured snippets, which improve visibility and click-through rate.",
      topics: ["Callouts", "Sitelinks", "Structured snippets"],
      outcome: "You can make ads more useful and more prominent on the results page.",
    },
    {
      title: "Module 5: Display, Remarketing & YouTube Ads",
      summary: "Reach audiences beyond search and bring back past visitors.",
      topics: ["Reaching audiences beyond search", "Bringing back past visitors"],
      outcome: "You can plan awareness and remarketing campaigns.",
    },
    {
      title: "Module 6: Google Ads Reporting and Analytics",
      summary: "Covers reading Google Ads reports, conversion tracking and A/B testing.",
      topics: ["Reading Google Ads reports", "Conversion tracking", "A/B testing"],
      outcome: "You can show what the budget produced and decide what to change next.",
    },
  ],
  tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Google Merchant Center", "Looker Studio"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a Google Ads course?", a: "A Google Ads course teaches you to create, manage and optimise paid campaigns on Google Search, Display, YouTube and related networks. At techcadd, you learn account setup, campaign creation, budgeting, bidding, ad extensions, conversion tracking and reporting through hands-on tasks." },
    { q: "Who is eligible for the Google Ads course?", a: "Anyone with basic computer skills can join, as no coding or technical degree is required. The program suits graduates, postgraduates, working professionals, job switchers, freelancers and business owners. Motivated 12th-pass students can also enrol and will start with the fundamentals." },
    { q: "Can beginners learn Google Ads from scratch?", a: "Yes, the training starts with how Google Ads works, account setup and campaign types before moving to bidding, extensions and reporting. No prior marketing experience is needed. Regular practice on mock or real campaigns is what builds confidence." },
    { q: "What is the fee for the Google Ads course?", a: "Fees can differ by mode (online or offline) and batch type, so confirm the latest details with the techcadd team before enrolling." },
    { q: "What is the duration of the Google Ads course?", a: "Batch timings are flexible, and weekday and weekend options may be available." },
    { q: "What does the Google Ads syllabus include?", a: "The syllabus covers an introduction to Google Ads, keyword research and ad writing, creating your first campaign (setup, budgeting and bidding), ad extensions such as callouts, sitelinks and structured snippets, and reporting with conversion tracking and A/B testing. Display and remarketing topics are included." },
    { q: "Which tools will I learn in this course?", a: "You will work with Google Ads and Google Analytics 4 as core tools." },
    { q: "Will I get a certificate after the course?", a: "Yes, techcadd issues a course completion certificate. This is separate from Google's free Skillshop certifications, which you take on Google's platform. techcadd guides you in preparing but cannot promise an exam result." },
    { q: "Is the Google Ads course available online or offline?", a: "Both options are available: live online classes for learners anywhere in India, and classroom sessions at techcadd's Jalandhar centre. Online learners get doubt support and recorded sessions to catch up." },
    { q: "What jobs can I get after learning Google Ads?", a: "Common roles include PPC executive, performance marketer, paid search analyst and digital marketing executive. Others freelance or run ads for their own business. techcadd offers placement assistance, but no job is guaranteed." },
    { q: "What is the salary of a Google Ads specialist in India?", a: "Entry-level roles in India often fall around ₹2.4 to ₹4 lakh per year, and experienced performance marketers can earn more. These figures are approximate and vary by city, company, skills and results. Freelance income depends on your clients." },
    { q: "Is a government-approved certificate or skill-recognition available?", a: "techcadd's certificate is an institute completion certificate. Google's Skillshop certificates are issued by Google and are widely recognised by employers." },
    { q: "Can students from Himachal Pradesh join the Google Ads course online?", a: "Yes, learners from anywhere in Himachal Pradesh can join live online classes without travelling. A Google Ads course in Himachal Pradesh is especially useful for people working with hotels, homestays and travel services, or freelancers serving remote clients. A stable internet connection is enough." },
    { q: "Is the Google Ads course in Chandigarh available online?", a: "Yes, learners in Chandigarh and the Tricity can join the live online batch from home or office, and some may also attend the Jalandhar classroom sessions. A Google Ads course in Chandigarh is a good fit for those targeting IT, education and startup roles." },
    { q: "What are the Google Ads job opportunities in Punjab and Haryana?", a: "Both states offer roles with agencies, startups, exporters, manufacturers and e-commerce brands. Punjab businesses often need lead generation and export-focused ads, while Haryana's NCR belt hires for e-commerce, logistics and Shopping campaign skills. Remote agency work is also open to learners in both states." },
    { q: "Can learners from Jammu & Kashmir take this course?", a: "Yes, a Google Ads course in Jammu & Kashmir is open to learners through live online classes. It helps sellers, tour operators and handicraft businesses learn to reach customers across India with controlled budgets." },
    { q: "Is this course useful for learners in Rajasthan and Uttar Pradesh?", a: "Yes, learners in both states can attend online. Rajasthan's jewellery, textile and tourism businesses benefit from Shopping and remarketing skills, while Uttar Pradesh learners can target retail, electronics and education marketing roles or freelance work." },
    { q: "Which is better to learn first, Google Ads or SEO?", a: "Google Ads gives faster, measurable results because you pay for visibility, while SEO builds free traffic over months. If you want quick lead-generation skills or freelance work, start with Google Ads. If you plan a content or website career, start with SEO, and learn both over time." },
  ],
  related: ["digital-marketing", "seo", "social-media-marketing"],
  copy: {
    heading: { title: "Google Ads Course", highlight: "with Live Campaigns", meta: "Google Ads Course: Turn Clicks into Customers with Live Campaigns | techcadd" },
    overview: { eyebrow: "Program Overview", title: "The Google Ads course at techcadd" },
    syllabus: {
      eyebrow: "What You Will Learn",
      title: "What You Will Learn in the Google Ads Course",
      text: "The curriculum is organised module by module, from account setup to reporting. Each module ends with a hands-on task.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join This Google Ads Course?",
      intro: "The Google Ads course at techcadd is built for people who want a practical, job-ready skill in paid marketing. You do not need a technical background or any coding knowledge. The program suits these learners:",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "From commerce, management, arts, science or engineering who want a clear entry point into digital marketing." },
        { icon: "Briefcase", title: "Working professionals", text: "In sales, marketing, content or operations who want to add paid advertising to their skill set and move up." },
        { icon: "Shuffle", title: "Job switchers", text: "From non-marketing roles who want a skill that is in demand across agencies, startups and in-house teams." },
        { icon: "PenTool", title: "Freelancers", text: "Who want to offer lead generation and campaign management as a paid service to clients." },
        { icon: "Building2", title: "Business owners and shop owners", text: "Who want to stop depending on agencies and run their own ads with control over budget and results." },
        { icon: "BookOpen", title: "12th-pass students", text: "Who are serious about starting a career early. A small part of each batch is made up of such learners, and they start with the fundamentals before moving on to live campaign work." },
      ],
      need: "Basic computer skills, an internet connection and a willingness to work with real campaign data are enough to begin. If you already know basic SEO or social media marketing, this program helps you add measurable, performance-based skills. If you are a complete beginner, the training starts from how Google's ad auction works and builds up step by step.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because live classes run online, learners from different parts of North India can join the same batch. Here is how the course helps in each region.",
      items: [
        { title: "Punjab", text: "A Google Ads course in Punjab suits exporters, manufacturers and service businesses in places like Ludhiana that want to reach buyers beyond their local market." },
        { title: "Haryana", text: "In Gurugram and the NCR belt, agencies and e-commerce brands hire people who can manage search and shopping campaigns with clear return-on-ad-spend targets." },
        { title: "Himachal Pradesh", text: "Hotel, homestay and travel operators in Shimla and nearby tourist areas can use Search and Performance Max campaigns to get direct bookings. Freelancers can also serve clients remotely." },
        { title: "Chandigarh", text: "Mohali and the Tricity have a growing base of IT firms, coaching centres and startups, so Chandigarh learners can target in-house and agency roles." },
        { title: "Delhi NCR", text: "With the largest fresher job market in the region, a Google Ads course in Delhi helps candidates in Noida and across NCR qualify for agency and fintech roles." },
        { title: "Jammu & Kashmir", text: "Handicraft sellers, tour operators and online sellers in Srinagar can use Display and YouTube campaigns to reach customers across India. A Google Ads course in Jammu & Kashmir helps them do so with a controlled budget." },
        { title: "Uttarakhand", text: "Tourism, hospitality and education businesses in Dehradun can run local-intent campaigns that capture visitors and admission enquiries." },
        { title: "Rajasthan", text: "Jewellery, textile and handicraft businesses in Jaipur can use Shopping campaigns and remarketing to sell to customers outside the state." },
        { title: "Uttar Pradesh", text: "Learners in Lucknow and other cities can build careers in retail, electronics and service marketing, or take on freelance clients from home." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Learn Google Ads with This Program?",
      intro: "Paid search is one of the few digital skills where your results show up as numbers: clicks, leads, sales and cost per acquisition. Businesses in India keep investing in Google's ad platform because it reaches people at the moment they are searching for a product or service. A Google Ads course gives you a skill that can be measured, priced and sold, whether you work for an employer, a client or your own brand.",
      points: [
        { title: "Skills that match how Google Ads works today", text: "Google Ads has moved well beyond manual keyword bidding. Smart Bidding, broad match, Performance Max and Demand Gen campaigns now rely on automation and machine learning. This program teaches you how to work with that automation: how to feed it good conversion data, set the right goals, write strong assets and spot when a campaign is wasting money. You learn the logic behind the settings, so you are not dependent on a single interface layout that may change next year." },
        { title: "Measurement comes first", text: "Many beginners learn how to launch ads but not how to prove they work. Here, Google Analytics 4 and Google Tag Manager are treated as core skills, not add-ons. You learn conversion tracking, event setup, audience building and reporting in Looker Studio. Employers and clients value people who can explain what happened to the budget and what to do next." },
        { title: "Practice over theory", text: "Each module is built around tasks: researching keywords for a real business type, writing responsive search ads, structuring ad groups, setting up a Shopping feed in Merchant Center, and analysing search term reports. You also learn budget planning and campaign audits, which are the skills freelancers and agency executives use every week." },
        { title: "Flexible learning for working people", text: "Live online classes let working professionals and learners from other cities attend without relocating, while the Jalandhar centre serves those who prefer classroom learning. Recorded support and doubt-clearing sessions help you keep pace if you miss a class." },
        { title: "Clear career and income routes", text: "Trained learners can pursue roles such as PPC executive, performance marketer, paid search analyst and digital marketing executive. Others use the skill to freelance or to grow their own business. Salaries vary widely with city, company and experience. As a rough guide, entry-level roles in India often fall around ₹2.4 to ₹4 lakh per year, and experienced performance marketers can earn considerably more. Freelance income depends on your client base and results. Treat these figures as approximate, not guaranteed." },
        { title: "Recognised certification path", text: "You will be guided to prepare for Google's free Skillshop certifications, which are widely recognised by employers. techcadd's own course completion certificate is separate from Google's, and the program does not promise any exam result." },
        { title: "Useful for any business, not only marketers", text: "A shop owner, clinic, coaching institute, exporter or online seller can all benefit from the same core skills. Understanding how paid search works helps you decide your budget, judge an agency's report and avoid costly mistakes." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your Google Ads Course?",
      intro: "Choosing where to learn Google Ads matters, because the skill changes quickly and poor training can leave you with outdated habits. techcadd designs this program around what a working paid media professional actually does each day, not around slides and definitions.",
      points: [
        { title: "A curriculum built around real campaign work", text: "The training follows the order in which a campaign is built: understanding the audience, researching keywords, structuring accounts, writing ads, setting up tracking, optimising and reporting. Every module ends with a task, so you leave with campaign plans, ad copy samples, audit checklists and report templates you can show to employers or clients." },
        { title: "Trainers who teach from practice", text: "Good Google Ads training comes from people who have managed budgets and seen campaigns fail. Sessions focus on why a campaign underperforms and how to fix it, using search term reports, conversion data and quality indicators." },
        { title: "Current tools and platform updates", text: "The course covers the platform as it works now, including Smart Bidding, Performance Max, Demand Gen, Google Analytics 4, Google Tag Manager, Merchant Center and Looker Studio. When Google changes a feature, the training material is meant to be updated, so you are not learning from an old interface." },
        { title: "Online and offline learning options", text: "You can attend live online classes from any city or choose classroom sessions at the Jalandhar centre. Working professionals can pick a schedule that suits them, and missed sessions can be caught up through recordings and doubt-clearing support." },
        { title: "Small-batch attention and doubt support", text: "Paid advertising is learned by doing, and learners often get stuck on specific settings, such as conversion goals or budget pacing. Regular doubt-clearing and feedback on your campaign work help you move forward without guessing." },
        { title: "Skills for jobs, freelancing and business growth", text: "techcadd shapes the program for three outcomes: employment as a PPC or performance marketing executive, freelance client work, and in-house advertising for your own business. You get guidance on building a portfolio, writing a proposal, pricing your services and presenting monthly reports to clients." },
        { title: "Honest expectations", text: "We do not promise guaranteed jobs, fixed salaries or exam results. What techcadd offers is structured training, practice with the same tools professionals use, and support to prepare you for Google's Skillshop certifications. Your results depend on your effort, practice time and the opportunities you pursue." },
        { title: "Learning that fits learners across North India", text: "Many techcadd learners join from different cities and states. Our teaching uses examples from varied business types, such as exporters, service providers, retailers, clinics, tourism operators and online sellers, so the skills transfer to whichever market you serve." },
      ],
    },
    tools: {
      title: "Tools Covered",
      columns: ["Tool", "Used for"],
      groups: [
        { area: "Google Ads", tools: "Campaign creation, bidding, extensions and reports" },
        { area: "Google Analytics 4", tools: "Traffic and conversion analysis" },
        { area: "Google Tag Manager and Google Merchant Center", tools: "Conversion tracking and Shopping feeds" },
        { area: "Looker Studio", tools: "Reporting dashboards" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "Skills from this course lead to roles such as PPC executive, performance marketer, paid search analyst and digital marketing executive. Others use it to freelance or run their own advertising. Opportunities differ by region:",
      roles,
      jobsTitle: "Google Ads Jobs by State",
      jobs: [
        { title: "Google Ads jobs in Punjab", text: "Mohali's IT and startup firms and Amritsar's travel and service businesses hire people to run lead-generation campaigns, and exporters need buyer-focused search ads." },
        { title: "Google Ads jobs in Haryana", text: "Faridabad's manufacturers and the NCR belt's logistics and e-commerce brands look for Shopping and search specialists who can work to return-on-ad-spend targets." },
        { title: "Google Ads jobs in Himachal Pradesh", text: "Hotels, homestays and travel operators need direct-booking campaigns. Solan's pharma and allied businesses add B2B demand, and remote freelancing suits hill-town learners." },
        { title: "Google Ads jobs in Uttarakhand", text: "Haridwar's pilgrimage tourism and hospitality businesses run seasonal, local-intent campaigns, so timing and budget control are valuable." },
        { title: "Google Ads jobs in Rajasthan", text: "Jewellery, textile and handicraft sellers need Shopping campaigns and remarketing to sell nationally, and Jaipur-based agencies serve these clients." },
        { title: "Google Ads jobs in Uttar Pradesh", text: "Retail, electronics and education businesses in Meerut and Ghaziabad need local lead campaigns, and the government and education sectors also advertise for admissions." },
      ],
      outro: "Remote roles with agencies in Bengaluru, Hyderabad, Pune and Mumbai are also open to trained candidates. Salaries vary by city and experience, and no job or income is guaranteed.",
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Ravneet Kaur", role: "Business Owner", place: "Patiala, Punjab", rating: 5, headline: "I finally understand where my ad budget goes.", text: "I run a small garment business and was paying an agency without knowing what they did. After this course I can read my own search term reports and conversion data. The trainer explained bidding in simple language, and I now manage my campaigns myself." },
        { name: "Aman Chauhan", role: "Freelancer", place: "Karnal, Haryana", rating: 5, headline: "Good for freelancers, very practical.", text: "I attended the live online classes after work. The sessions on ad extensions and conversion tracking helped me prepare a proper proposal for my first client. Doubts were cleared quickly on the same day." },
        { name: "Pooja Thakur", role: "Graduate (B.Com)", place: "Dharamshala, Himachal Pradesh", rating: 4, headline: "Learned from home, in the hills.", text: "Online classes were easy to follow even with an average internet connection, and recordings helped when I missed one session. I now understand how hotels and local businesses can get bookings through Search ads." },
        { name: "Simran Gill", role: "Job Switcher (from Sales)", place: "Panchkula, Chandigarh Tricity", rating: 5, headline: "Structured and beginner friendly.", text: "I had no marketing background. The course started from account setup and moved to campaigns step by step. The A/B testing and reporting module gave me confidence to speak about results in interviews." },
        { name: "Rohit Malhotra", role: "Working Professional (Content Executive)", place: "Delhi", rating: 4, headline: "Useful for agency work in the NCR.", text: "I wanted to add paid ads to my content skills. Practical tasks on budgeting and bidding strategies made the learning clear. Weekend flexibility helped me balance office hours." },
        { name: "Insha Mir", role: "Online Seller", place: "Jammu, Jammu & Kashmir", rating: 4, headline: "Helpful for selling beyond my town.", text: "I sell handmade items and wanted customers outside the region. The course showed me how to set a controlled budget and target the right audience. I am still practising, but I am much clearer about what to test." },
        { name: "Deepak Rawat", role: "Postgraduate (MBA)", place: "Uttarakhand", rating: 5, headline: "Clear teaching, patient trainer.", text: "Sessions were not rushed, and each module ended with a task. Reporting and analytics was my favourite part, since it showed how to explain performance to a manager." },
        { name: "Kritika Sharma", role: "12th-pass Student", place: "Sri Ganganagar, Rajasthan", rating: 4, headline: "Good start after 12th.", text: "I am young and a beginner, but the trainer started from basics. I learned keywords, ad copy and how campaigns are set up. I am practising on small mock campaigns before I look for work." },
        { name: "Mohit Verma", role: "Working Professional (Sales)", place: "Uttar Pradesh", rating: 4, headline: "Worth it for working professionals.", text: "I joined to understand lead generation for my company. Learning how search ads and tracking work helped me discuss goals with our marketing team more confidently." },
        { name: "Harpreet Singh", role: "Graduate (BBA)", place: "Ambala, Haryana", rating: 5, headline: "Classroom learning worked best for me.", text: "I preferred offline learning, so I attended at the centre. Practical sessions and regular doubt support kept me on track. Setting up campaigns by myself was the best part." },
      ],
    },
    faqTitle: "Frequently Asked Questions: Google Ads Course",
    cta: {
      title: "Start Your Google Ads Career",
      highlight: "with techcadd",
      text: "Turn Clicks into Customers: Learn Google Ads with Live Campaigns. Whether you want a digital marketing job, freelance clients or better results for your own business, this Google Ads course takes you from account setup to campaign reporting through hands-on practice. Join live online from anywhere in India, or learn in the classroom at any of our centres.",
    },
  },
};
