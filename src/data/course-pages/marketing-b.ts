import type { CoursePage } from "./types";

/** Digital Marketing, part 2 (Meta Ads). SAMPLE content — confirm with the client. */
export const marketingMoreCourses: CoursePage[] = [
  {
    slug: "meta-ads",
    title: "Meta Ads Course (Facebook & Instagram Ads)",
    navLabel: "Meta Ads",
    group: "marketing",
    icon: "Target",
    tagline: "Plan, launch and scale paid campaigns on Facebook and Instagram — from audience research and creatives to tracking and reporting.",
    level: "Beginner",
    duration: "6–8 Weeks",
    eligibility: "12th pass or above; basic social media familiarity",
    overview: [
      "This course teaches paid advertising on Meta's platforms the way working media buyers do it. You set up a Business Manager and ad account properly, choose objectives, research audiences, write and design creatives, install tracking and read the numbers that decide whether a campaign is working.",
      "Local businesses, e-commerce stores, coaching institutes and agencies across North India all advertise on Facebook and Instagram, which makes this one of the quickest marketing skills to turn into a job or freelance income. You practise on live campaigns and leave with results you can show.",
    ],
    gains: [
      "A correctly structured Business Manager, ad account, Pixel and Conversions API setup",
      "Ability to plan campaigns for leads, sales, traffic and awareness",
      "Audience research, creative testing and budget optimisation skills",
      "Reporting that explains cost per result and return on ad spend to a client",
      "Live campaign practice, course certification and placement assistance",
    ],
    syllabus: [
      { title: "Meta Advertising Foundations", summary: "Understand the ecosystem and set up your accounts the right way.", topics: ["How the Meta ad auction and delivery system work", "Business Manager, pages, ad accounts and roles", "Campaign, ad set and ad structure", "Choosing the right objective", "Advertising policies and common rejection reasons"] },
      { title: "Audiences and Targeting", summary: "Reach the people most likely to act.", topics: ["Core, custom and lookalike audiences", "Location targeting for local businesses", "Advantage+ audience and broad targeting", "Customer lists and website audiences", "Audience overlap and exclusions"] },
      { title: "Creatives and Copy", summary: "Make ads people stop scrolling for.", topics: ["Image, video, carousel and Reels ad formats", "Writing hooks, primary text and headlines", "Designing creatives in Canva", "Lead forms versus landing pages", "Creative testing frameworks"] },
      { title: "Tracking and Measurement", summary: "Know exactly what your budget produced.", topics: ["Meta Pixel installation and events", "Conversions API overview", "Events Manager and aggregated event measurement", "UTM parameters and Google Analytics 4", "Attribution settings and reading reports"] },
      { title: "Optimisation and Scaling", summary: "Improve results and grow budgets safely.", topics: ["Campaign budget optimisation and bidding strategies", "A/B testing in Ads Manager", "Retargeting funnels", "Advantage+ shopping and catalogue ads", "Scaling methods and avoiding ad fatigue"] },
      { title: "Client Work, Capstone and Career Readiness", summary: "Run a real campaign and present it like a professional.", topics: ["Capstone: plan, launch and optimise a live campaign", "Building client reports and dashboards", "Pricing and proposals for freelance ad management", "WhatsApp and Messenger click-to-chat campaigns", "Interview questions and portfolio preparation"] },
    ],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Events Manager", "Meta Pixel", "Conversions API", "Canva", "Google Analytics 4", "Google Tag Manager", "Looker Studio", "WhatsApp Business"],
    projects: [
      { title: "Lead Generation Campaign", text: "Run a lead campaign for a local service business and report cost per lead.", tags: ["Lead Ads", "Targeting", "Report"] },
      { title: "E-commerce Sales Funnel", text: "Build prospecting and retargeting campaigns with catalogue ads for an online store.", tags: ["Catalogue", "Retargeting", "ROAS"] },
      { title: "Creative Testing Sprint", text: "Test multiple hooks and formats, then document which creative won and why.", tags: ["A/B test", "Reels", "Canva"] },
      { title: "Tracking Setup and Dashboard", text: "Install Pixel events and build a client-ready performance dashboard.", tags: ["Pixel", "GA4", "Looker Studio"] },
    ],
    careers: [
      { role: "Meta Ads Specialist", work: "Plans, launches and optimises Facebook and Instagram campaigns.", hirers: "Digital agencies and in-house marketing teams" },
      { role: "Performance Marketing Executive", work: "Manages paid budgets across platforms and reports on results.", hirers: "E-commerce brands, ed-tech and real estate companies" },
      { role: "Social Media Advertising Executive", work: "Combines content and paid promotion to grow a brand's reach and leads.", hirers: "Agencies and businesses across Punjab, Chandigarh and Delhi NCR" },
      { role: "Freelance Media Buyer", work: "Runs ad accounts for several clients on a retainer or performance basis.", hirers: "Local businesses, coaches and online stores" },
    ],
    whyNow: [
      "Small and mid-sized businesses increasingly rely on Facebook and Instagram ads for leads and sales, and few have the skills in-house.",
      "Automation in Ads Manager has shifted the job toward creative, tracking and strategy — skills that are learnable in weeks and easy to demonstrate.",
    ],
    faqs: [
      { q: "Do I need a marketing background?", a: "No. The course starts with how the platform works and builds up to full campaigns. Regular social media use is enough to begin." },
      { q: "Will I run real ads?", a: "Yes. You practise on live campaigns with small budgets under mentor guidance, so you learn from real delivery and results data." },
      { q: "How is this different from the Social Media Marketing course?", a: "Social Media Marketing covers organic content and community growth across platforms. This course focuses only on paid advertising on Facebook and Instagram." },
      { q: "Can I freelance after this course?", a: "Yes. The final module covers reporting, pricing and proposals so you can manage ad accounts for clients." },
    ],
    related: ["social-media-marketing", "google-ads", "digital-marketing"],
  },
];
