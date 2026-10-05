import type { CoursePage } from "./types";

/* /courses/seo — long-form landing copy supplied by the client (used as given, section by section).
   Left out on purpose:
   - the "Reviews" block: the supplied text marks them as DRAFT TEMPLATES with "[Student Name]" placeholders, not real reviews,
     so this page keeps the shared testimonials section until real, permitted student reviews are provided (then add `copy.reviews`);
   - editorial placeholders ("[X weeks/months…]", "[₹X…]", "[course completion certificate, confirm exact name]");
   - FAQ 8 (government approval) — its answer is an editor's note pending proof documents.
   `duration` below is the previous value — confirm with the client. */

const roles = ["SEO executive", "Content strategist", "Technical SEO analyst", "Local SEO specialist", "Link-building specialist", "Freelance SEO consultant"];

export const seo: CoursePage = {
  slug: "seo",
  title: "SEO Course",
  navLabel: "SEO",
  group: "marketing",
  icon: "Search",
  tagline:
    "Learn keyword research, on-page and technical SEO, content strategy, link building, local SEO and performance tracking, and how search is changing with AI-generated answers.",
  level: "Beginner",
  duration: "2–3 Months",
  eligibility: "Basic computer skills and English reading ability; no coding or technical degree required",
  overview: [
    "techcadd's SEO course in India is built for people who want to turn search visibility into a real career or a stronger business. Whether you are a graduate looking for your first digital marketing role, a working professional planning a switch, a freelancer chasing better clients, or a business owner tired of depending on paid ads, this program shows you how websites actually earn traffic on Google.",
    "You will learn keyword research, on-page and technical SEO, content strategy, link building, local SEO, and performance tracking using tools such as Google Search Console, Google Analytics 4, Semrush and Ahrefs. The training also covers how search is changing with AI-generated answers, so your skills stay relevant beyond classic rankings.",
    "Learners from Punjab can attend classroom sessions at the techcadd centre in Jalandhar, while students from other states join live online classes with the same curriculum and practical projects. Every learner works on real websites, audits and reports, so you finish with proof of skill, not just theory.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Run a full technical and on-page audit for any website",
    "Build a keyword strategy matched to search intent",
    "Plan and brief content that meets E-E-A-T expectations",
    "Handle local SEO, including Google Business Profile and reviews",
    "Report progress using Google Analytics 4 and Search Console",
  ],
  syllabus: [
    {
      title: "Module 1: Introduction to SEO",
      summary: "You learn how search engines crawl, index and rank pages, and how organic results differ from paid ones. You also see how AI Overviews and answer engines are changing what users see.",
      topics: ["How search engines crawl, index and rank pages", "Organic vs paid results", "AI Overviews and answer engines"],
      outcome: "You can explain how a search result is produced and set realistic SEO goals for a business.",
    },
    {
      title: "Module 2: Keyword Research & Search Intent",
      summary: "This covers finding keywords, grouping them by intent, judging difficulty, and building a keyword map.",
      topics: ["Finding keywords", "Grouping keywords by intent", "Judging difficulty", "Building a keyword map"],
      outcome: "You can deliver a keyword plan for any website.",
    },
    {
      title: "Module 3: On-Page SEO & Content",
      summary: "Topics include title tags, meta descriptions, headings, internal links, image optimisation and content briefs written around E-E-A-T.",
      topics: ["Title tags and meta descriptions", "Headings", "Internal links", "Image optimisation", "Content briefs written around E-E-A-T"],
      outcome: "You can optimise a page so it matches search intent.",
    },
    {
      title: "Module 4: Technical SEO",
      summary: "You work on crawl errors, site speed, redirects, HTTPS, XML sitemaps, robots.txt and schema markup.",
      topics: ["Crawl errors", "Site speed", "Redirects and HTTPS", "XML sitemaps and robots.txt", "Schema markup"],
      outcome: "You can run and prioritise a technical audit.",
    },
    {
      title: "Module 5: Off-Page SEO",
      summary: "This module covers backlinks, brand mentions, social signals, and safe link-building practice.",
      topics: ["Backlinks", "Brand mentions", "Social signals", "Safe link-building practice"],
      outcome: "You can plan a link-building campaign that avoids risky shortcuts.",
    },
    {
      title: "Module 6: Local SEO",
      summary: "You learn Google Business Profile optimisation, NAP consistency, citations, reviews and location-based keywords.",
      topics: ["Google Business Profile optimisation", "NAP consistency", "Citations", "Reviews", "Location-based keywords"],
      outcome: "You can help a local business appear in map results and \"near me\" searches.",
    },
    {
      title: "Module 7: SEO Reporting & Analytics",
      summary: "You cover audits, performance tracking, and reports in Google Analytics 4 and Search Console.",
      topics: ["Audits", "Performance tracking", "Reports in Google Analytics 4 and Search Console"],
      outcome: "You can write a monthly report that a client or manager understands.",
    },
    {
      title: "Module 8: SEO Maintenance & Updates",
      summary: "This covers regular audits, tracking algorithm updates, and ongoing technical upkeep.",
      topics: ["Regular audits", "Tracking algorithm updates", "Ongoing technical upkeep"],
      outcome: "You can diagnose a ranking drop and propose a recovery plan.",
    },
  ],
  tools: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Screaming Frog", "PageSpeed Insights", "Google Business Profile"],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "Who is eligible for the SEO course?", a: "Anyone with basic computer skills and English reading ability can join. Graduates, postgraduates, working professionals, freelancers, business owners and 12th-pass students are all welcome, and no coding or technical degree is required." },
    { q: "Can beginners learn SEO from scratch?", a: "Yes, the course starts with how search engines work and builds up to audits and reporting. You move from keyword research to on-page SEO, technical SEO, local SEO and analytics in a fixed order, so no prior marketing knowledge is needed." },
    { q: "What is the duration of the SEO course?", a: "Batch length can vary with the schedule you choose (weekday, weekend or fast-track), so confirm current timings at enrolment." },
    { q: "What is the fee for the SEO course?", a: "The fee may vary by batch and mode, and by whether tool access is included. Ask the counsellor for the current fee, any instalment option and what the fee covers." },
    { q: "What does the SEO course syllabus include?", a: "The syllabus covers eight areas: introduction to SEO, keyword research, on-page SEO, technical SEO, off-page SEO, local SEO, reporting and analytics, and SEO maintenance with algorithm updates. It also touches on AI search topics such as answer-focused content and structured data." },
    { q: "Which tools will I learn in the SEO course?", a: "You learn Google Search Console, Google Analytics 4, Semrush, Ahrefs, PageSpeed Insights and Google Business Profile, plus a site crawler such as Screaming Frog if your batch uses it. Paid tool access depends on the batch, so ask what is included." },
    { q: "Will I get a certificate after the course?", a: "techcadd provides a course completion certificate after you complete the training. A certificate shows you finished the course, but employers and clients mainly judge you by your audits, reports and portfolio." },
    { q: "Can I learn SEO online, or do I have to attend in person?", a: "You can do either. Live online classes cover the same curriculum and projects as the classroom batch, and learners in Punjab can also attend sessions at the Jalandhar centre. Online learners should keep a laptop and stable internet ready for live practice." },
    { q: "What jobs can I get after an SEO course?", a: "Common roles are SEO executive, content strategist, technical SEO analyst, local SEO specialist, link-building specialist and freelance consultant. Outcomes depend on your portfolio, practice and the job market, and no placement is guaranteed." },
    { q: "What is the salary of an SEO executive in India?", a: "Fresher salaries are approximately ₹2-4 LPA, and experienced professionals can earn ₹5-9 LPA or more. These figures are rough and vary by city, company size and skills." },
    { q: "Can I do freelancing after learning SEO?", a: "Yes, many learners start with small audits, local SEO and content optimisation for local businesses. A freelancer should build two or three case studies first, because proven results make it easier to win paying clients." },
    { q: "Can students from Himachal Pradesh join the SEO course online?", a: "Yes, learners from Himachal Pradesh can join live online classes and follow the same curriculum as classroom students. This suits hotel owners, freelancers and job seekers in towns where a local SEO institute may not be available." },
    { q: "What are the SEO job opportunities in Punjab and Haryana?", a: "Punjab offers openings with exporters, manufacturers and IT startups, while Haryana has more in e-commerce, logistics and corporate marketing teams. SEO jobs in Punjab and SEO jobs in Haryana both include agency and in-house roles, plus remote work for clients in other states." },
    { q: "Is the SEO course useful for learners from Jammu & Kashmir and Uttarakhand?", a: "Yes, it helps tourism, handicraft and hospitality businesses in both regions attract customers from Google. Learners can study online and then apply local SEO and product-page optimisation to their own business or to clients." },
    { q: "Can working professionals in Delhi NCR or Chandigarh study SEO alongside a job?", a: "Yes, weekend batches, live online sessions and recorded classes allow you to learn around office hours. Working professionals usually benefit most by practising on their current employer's website or a personal project." },
    { q: "Can students from Rajasthan and Uttar Pradesh take this course online?", a: "Yes, learners from both states can attend live online classes and complete the same projects. Business owners in Jaipur and Lucknow-type markets often use the skills for product pages and local visibility, while job seekers build portfolios for remote or agency roles." },
  ],
  related: ["digital-marketing", "wordpress", "google-ads"],
  copy: {
    heading: { title: "SEO Course", highlight: "in India", meta: "SEO Course in India: Learn SEO That Ranks Pages, Wins Clients and Gets You Hired | techcadd" },
    overview: { eyebrow: "Program Overview", title: "techcadd's SEO course in India" },
    syllabus: { eyebrow: "What You Will Learn & Tools Covered", title: "Module-wise curriculum" },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Join This SEO Course?",
      intro: "You do not need a technical background to start. SEO rewards curiosity, clear writing and a habit of checking data, and all three can be built during training. The program is designed for several types of learners.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "If you hold a BA, B.Com, BBA, BCA, B.Tech, MBA or any other degree and want a digital skill that employers actually hire for, SEO is a practical entry point. Agencies, in-house marketing teams and e-commerce brands all need people who can improve search visibility." },
        { icon: "Shuffle", title: "Working professionals and job switchers", text: "Content writers, sales executives, designers, web developers and support staff often move into SEO because their existing skills transfer well. If you are switching careers, the hands-on projects help you build a portfolio before you apply." },
        { icon: "PenTool", title: "Freelancers", text: "If you already offer social media, design or website services, adding SEO lets you charge for ongoing results rather than one-time work, and it helps you win clients who want measurable growth." },
        { icon: "Building2", title: "Business owners", text: "Shop owners, clinic owners, coaching institute heads and manufacturers can learn to bring in enquiries from Google without relying only on paid ads." },
        { icon: "BookOpen", title: "12th-pass students", text: "Students who have finished school and want an early start in digital marketing can join too. This is a smaller part of our batches, and basic computer comfort is enough to begin." },
      ],
      need: "A laptop or computer, a stable internet connection, basic English reading skills and the willingness to practise on live websites.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Because classes run live online, learners from every North Indian state can follow the same curriculum. The local angle differs by state, though, so here is how SEO skills apply in each.",
      items: [
        { title: "Punjab", text: "If you are searching for an SEO course in Punjab, the demand comes from exporters, hosiery and sports goods makers in Ludhiana, and the growing IT startup scene in Mohali, all of which need leads from search." },
        { title: "Haryana", text: "An SEO course in Haryana suits learners aiming at e-commerce, logistics and MNC marketing teams in Gurugram, or manufacturers in Faridabad who want to reach buyers online." },
        { title: "Himachal Pradesh", text: "Hotel and homestay owners in Shimla and pharma professionals in Solan can use an SEO course in Himachal Pradesh to attract direct bookings and clients, or to build a remote freelancing career from the hills." },
        { title: "Chandigarh", text: "For those looking at an SEO course in Chandigarh, the Tricity's IT, BPO and startup ecosystem, including Panchkula, offers steady agency and in-house openings." },
        { title: "Delhi NCR", text: "An SEO course in Delhi connects you to the largest fresher job market in the region, with agencies, fintech and media companies in Noida hiring SEO executives regularly." },
        { title: "Jammu & Kashmir", text: "An SEO course in Jammu and Kashmir helps handicraft sellers in Srinagar and tourism operators in Jammu reach customers across India and abroad." },
        { title: "Uttarakhand", text: "Hotel, travel and education businesses in Dehradun and Haridwar can use an SEO course in Uttarakhand to rank for seasonal, high-intent searches." },
        { title: "Rajasthan", text: "In Jaipur, jewellery, textile and handicraft brands benefit from an SEO course in Rajasthan that teaches product-page and local search optimisation." },
        { title: "Uttar Pradesh", text: "An SEO course in Uttar Pradesh fits government-exam-turned-career-switchers in Lucknow and retail or electronics sellers in Meerut who want an online presence." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This SEO Program?",
      intro: "Plenty of institutes teach SEO as a list of definitions. This program is built around one idea: you learn SEO by ranking real pages, reading real data and fixing real problems. That is why it works for career starters and experienced professionals alike.",
      points: [
        { title: "Skills that match how search works today.", text: "Google no longer shows only ten blue links. AI Overviews, featured snippets and answer engines now shape what users see first. The program covers classic SEO alongside GEO and AEO, so you learn how to structure content that both search engines and AI tools can understand and cite." },
        { title: "Practical work from the first week.", text: "You do not wait until the end to touch a live site. Early assignments include keyword research for an actual business, a technical audit using Screaming Frog and Google Search Console, and on-page fixes you can measure over the following weeks." },
        { title: "A portfolio you can show.", text: "By the end, you will have audits, keyword maps, content briefs and monthly performance reports. Interviewers and freelance clients respond far better to these than to a certificate alone." },
        { title: "Tools used by professionals.", text: "Training covers Google Search Console, Google Analytics 4, Semrush, Ahrefs, Screaming Frog and PageSpeed Insights. Paid tool access depends on the batch and plan, so confirm what is included at enrolment." },
        { title: "Strong fundamentals in content and E-E-A-T.", text: "Rankings today depend on helpful, trustworthy content. You will learn how to plan topics, write for search intent and demonstrate experience and expertise on a page, which is the part many beginners skip." },
        { title: "Local SEO for real business needs.", text: "Many learners will work with local businesses such as clinics, hotels, coaching centres, shops and manufacturers. You will practise Google Business Profile optimisation, citations, review management and city-level targeting, skills that are useful whether you work in a metro or a smaller town." },
        { title: "Flexible learning.", text: "Learners in Punjab can attend classroom sessions at the Jalandhar centre, while others join live online classes. Recorded access and doubt-clearing support help working professionals keep pace alongside their jobs." },
        { title: "Career and freelance direction.", text: "The program prepares you for roles such as SEO executive, content strategist, technical SEO analyst, local SEO specialist and freelance consultant. Job outcomes depend on your effort and the market, and no placement is guaranteed." },
      ],
      outro: "If you want a course that treats SEO as a measurable, evolving craft rather than a checklist, this program gives you the structure and practice to build that skill.",
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Your SEO Training?",
      intro: "Choosing an SEO institute is a bigger decision than it looks. The wrong one gives you slides and definitions, and the right one gives you skills clients and employers will pay for. Here is what techcadd focuses on.",
      points: [
        { title: "Training built around practice, not theory", text: "Every module ends with a task you complete on a real or simulated website. You do not just learn what a title tag is. You rewrite fifty of them, track the impact in Google Search Console, and explain the result in a short report. This habit of doing, measuring and explaining is what separates a trainee from a hire-ready SEO executive." },
        { title: "Trainers who work with live search data", text: "SEO changes with every Google update, so teaching from outdated notes does not work. Sessions are led by trainers who use current tools and walk through real ranking cases, algorithm shifts and AI search changes. Learners get to ask \"why did this page drop?\" and see the diagnosis happen step by step." },
        {
          title: "Mentoring for different kinds of learners",
          text: "A fresh graduate, a working professional and a shop owner need different things from the same course. techcadd keeps batches practical enough for each group.",
          list: [
            "Graduates and job seekers get help with portfolio building, resume positioning and mock interviews for SEO executive roles.",
            "Freelancers learn how to run audits, price SEO services and write client-ready reports.",
            "Business owners focus on local visibility, enquiry generation and understanding what an agency should actually deliver.",
          ],
        },
        { title: "Online and offline flexibility", text: "Live online classes mean you can learn from any city without relocating, with the same curriculum and projects as the classroom batch. Recorded sessions and doubt-clearing support help people who study around a job or a business. Check the current batch timings and mode options at enrolment." },
        { title: "Updated for the AI search era", text: "The course goes beyond keywords and backlinks. It covers answer-focused content, structured data, entity building and how AI Overviews and chat-based tools choose sources. This prepares you for where search is heading, not just where it was." },
        { title: "Honest expectations", text: "techcadd's approach is simple: we tell you what the course can and cannot do. SEO results take time, and your outcome depends on practice and effort. Placement support, such as interview preparation and employer connections, is meant to improve your chances, but no job or ranking is guaranteed." },
        {
          title: "A clear path from learning to earning",
          text: "By the end, you should be able to:",
          list: [
            "Run a full technical and on-page audit for any website.",
            "Build a keyword strategy matched to search intent.",
            "Plan and brief content that meets E-E-A-T expectations.",
            "Handle local SEO, including Google Business Profile and reviews.",
            "Report progress using Google Analytics 4 and Search Console.",
          ],
          after: "These skills open doors in agencies, in-house teams, e-commerce brands and freelancing, and they stay useful as platforms change.",
        },
      ],
    },
    tools: {
      title: "Tools covered",
      columns: ["Tool", "Used for"],
      groups: [
        { area: "Google Search Console", tools: "Indexing, queries and performance" },
        { area: "Google Analytics 4", tools: "Traffic and conversion tracking" },
        { area: "Semrush and Ahrefs", tools: "Keyword, competitor and backlink research" },
        { area: "Screaming Frog (if used in your batch)", tools: "Site crawling" },
        { area: "PageSpeed Insights", tools: "Speed and Core Web Vitals" },
        { area: "Google Business Profile", tools: "Local visibility" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and future scope",
      intro: "Typical roles include SEO executive, content strategist, technical SEO analyst, local SEO specialist, link-building specialist and freelance SEO consultant. Fresher salaries are approximately ₹2-4 LPA in India, rising to ₹5-9 LPA or more with experience. These are rough figures and vary by city, company and skill. As search shifts toward AI-generated answers, professionals who understand structured data, entity building and answer-focused content will have an advantage.",
      roles,
      jobsTitle: "State-wise job opportunities",
      jobs: [
        { title: "Punjab", text: "SEO jobs in Punjab come from exporters, agri-tech firms and overseas-study consultancies in Amritsar and Patiala, which depend on Google enquiries to find clients." },
        { title: "Haryana", text: "SEO jobs in Haryana are strong in e-commerce, logistics and automobile-linked brands, where product-page and category-page optimisation is in demand." },
        { title: "Himachal Pradesh", text: "SEO jobs in Himachal Pradesh include tourism and hospitality marketing, and remote freelancing from places like Dharamshala for clients in metros such as Bengaluru and Mumbai." },
        { title: "Delhi NCR", text: "SEO jobs in Delhi go to agencies, fintech, media and e-commerce teams, with Ghaziabad adding more in-house roles." },
        { title: "Rajasthan", text: "SEO jobs in Rajasthan lean toward tourism, handicraft and jewellery brands selling to buyers across India and abroad." },
        { title: "Uttarakhand", text: "SEO jobs in Uttarakhand centre on hotels, travel and education brands that chase seasonal, high-intent searches." },
      ],
    },
    faqTitle: "Frequently Asked Questions: SEO Course",
    cta: {
      title: "Start Your SEO Career",
      highlight: "with techcadd",
      text: "Learn SEO that ranks pages, wins clients and gets you hired. Whether you are a graduate, a working professional, a freelancer or a business owner, our SEO course in India gives you hands-on practice with real websites, live search data and the tools professionals use. Study online from anywhere in North India, or attend classroom sessions across Punjab.",
    },
  },
};
