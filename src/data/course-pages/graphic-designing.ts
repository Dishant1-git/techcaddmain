import type { CoursePage } from "./types";

/* /courses/graphic-designing — NEW page (Courses ▾ Digital Marketing). Long-form landing copy supplied by the client,
   used as given, section by section.
   - The supplied text gives no course duration → `duration` is a neutral placeholder. CONFIRM with the client.
   - The supplied FAQ numbering skips 4, 5, 8 and 9 (fee, duration, certificate…) — only the questions provided are shown.
   - The tool list came as plain names, so the Tools section uses the standard tool tiles (no `copy.tools` table).
   - Reviews are the client's supplied text — confirm they are from real students before launch. */

const roles = [
  "Graphic Designer", "Creative or Visual Designer", "Social Media Designer", "Packaging Designer", "Brand Identity Designer",
  "UI Designer (Junior)", "Freelance Designer", "DTP Operator or Print Production Designer",
];

export const graphicDesigning: CoursePage = {
  slug: "graphic-designing",
  title: "Graphic Designing Course",
  navLabel: "Graphic Designing",
  group: "marketing",
  icon: "Palette",
  tagline:
    "Learn Adobe Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva, along with AI-assisted design workflows, through project-based training that ends in a professional portfolio.",
  level: "Beginner",
  duration: "Duration on enquiry",
  eligibility: "Basic computer knowledge; no art degree or design background required",
  overview: [
    "A graphic designing course is one of the most practical ways to enter the creative industry, where brands need logos, social media creatives, packaging, websites and ads every single day. The graphic designing course at techcadd is built for graduates, working professionals, job switchers, freelancers and business owners who want job-ready design skills rather than just theory.",
    "You learn Adobe Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva, along with AI-assisted design workflows. The training is project-based, so you build branding kits, brochures, ad creatives and UI screens that mirror real client work.",
    "Designed for learners in Punjab and across North India, the program runs in two modes: live online classes, and classroom training at our Jalandhar centre. Whether you want a full-time design job, freelance clients, or better visuals for your own business, the course takes you from design basics like colour, typography and layout to a professional portfolio you can show employers and clients.",
  ],
  // Not shown on this page (the overview is full width); used for the Course schema "teaches" list.
  gains: [
    "Judge good design, explain your choices and avoid common beginner mistakes",
    "Edit product photos, create campaign visuals and prepare images for web and print",
    "Design a logo and complete brand kit that works at any size",
    "Prepare print-ready files that printers accept without corrections",
    "Create simple landing pages and app screens",
    "Deliver high-volume, brand-consistent content quickly",
    "A portfolio and a clear plan to apply for jobs or find clients",
  ],
  syllabus: [
    {
      title: "Module 1: Design Fundamentals",
      summary: "",
      topics: [
        "Elements and principles of design: line, shape, balance, contrast, hierarchy and white space",
        "Colour theory, colour psychology and building palettes for brands",
        "Typography basics: font pairing, readability and text hierarchy",
        "Layout, grids and composition",
      ],
      outcome: "You can judge good design, explain your choices and avoid common beginner mistakes.",
    },
    {
      title: "Module 2: Adobe Photoshop",
      summary: "",
      topics: [
        "Image editing, retouching and colour correction",
        "Layers, masks, selections and blending modes",
        "Photo manipulation, social media creatives and ad banners",
        "AI-assisted features such as Generative Fill and background removal, used responsibly",
      ],
      outcome: "You can edit product photos, create campaign visuals and prepare images for web and print.",
    },
    {
      title: "Module 3: Adobe Illustrator",
      summary: "",
      topics: ["Vector drawing with the pen tool and shapes", "Logo design, icons and illustrations", "Brand identity kits and scalable artwork"],
      outcome: "You can design a logo and complete brand kit that works at any size.",
    },
    {
      title: "Module 4: Adobe InDesign and CorelDRAW",
      summary: "",
      topics: [
        "Multi-page layouts: brochures, catalogues, magazines and menus",
        "Print basics: bleed, margins, CMYK, resolution and file export",
        "CorelDRAW for signage, stickers, packaging dielines and flex printing, widely used by print shops",
      ],
      outcome: "You can prepare print-ready files that printers accept without corrections.",
    },
    {
      title: "Module 5: Figma for UI Basics",
      summary: "",
      topics: ["Frames, auto layout, components and prototyping", "Designing website and app screens", "Handing off designs to developers"],
      outcome: "You can create simple landing pages and app screens, which opens the door to UI roles.",
    },
    {
      title: "Module 6: Canva, Social Media and Branding Projects",
      summary: "",
      topics: ["Fast templates, brand kits and content calendars", "Instagram, LinkedIn and YouTube creatives", "Packaging, label and ad campaign projects"],
      outcome: "You can deliver high-volume, brand-consistent content quickly, a skill that most marketing teams value.",
    },
    {
      title: "Module 7: Basic Motion and AI Design Workflows",
      summary: "",
      topics: ["Introduction to animated posts and short reels", "AI tools for idea generation, mood boards and image variations, along with copyright and ethical use"],
      outcome: "You can add motion to your work and use AI to speed up routine tasks while keeping the creative decisions yours.",
    },
    {
      title: "Module 8: Portfolio, Freelancing and Interview Preparation",
      summary: "",
      topics: ["Building a portfolio on Behance or a personal site", "Setting up freelance profiles, pricing projects and handling clients", "Resume building and mock interviews"],
      outcome: "You finish with a portfolio and a clear plan to apply for jobs or find clients.",
    },
  ],
  tools: [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "CorelDRAW", "Figma", "Canva",
    "Adobe Firefly and other AI-assisted design features", "Basic motion tools for short animated content",
  ],
  // The supplied copy has no project list, so the Projects section and its nav item are hidden on this page.
  projects: [],
  // Shown as role chips on the page (via copy.careers.roles); the compare pages read the role names from here.
  careers: roles.map((role) => ({ role, work: "", hirers: "" })),
  whyNow: [],
  faqs: [
    { q: "What is a graphic designing course?", a: "A graphic designing course teaches you to create visual content such as logos, social media posts, brochures, packaging, banners and app screens using design principles and software. At techcadd, you learn colour, typography and layout first, then Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva through project work." },
    { q: "Who is eligible for this course?", a: "Anyone with basic computer knowledge can join, and no design background or art degree is required. Graduates, postgraduates, working professionals, job switchers, freelancers and business owners are the main learners. Students who have just finished 12th can also join, as long as they are ready to practise regularly." },
    { q: "Can a complete beginner learn graphic designing?", a: "Yes, the course starts with design fundamentals before moving to software, so beginners can follow it step by step. Most learners reach a confident level by completing the module assignments and building a portfolio." },
    { q: "What is covered in the syllabus?", a: "The syllabus covers design fundamentals, Photoshop, Illustrator, InDesign and CorelDRAW, Figma for UI basics, Canva for social media, basic motion and AI workflows, and portfolio, freelancing and interview preparation. Each module ends with a practical assignment." },
    { q: "Which software will I learn?", a: "You will learn Adobe Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva, along with AI-assisted features such as Adobe Firefly. These are widely used in agencies, print shops and in-house marketing teams." },
    { q: "Can I learn graphic designing online, and is it as good as classroom training?", a: "Yes, live online classes give the same syllabus, instructor interaction, screen-sharing and assignment feedback as classroom sessions. Choose online if you are a working professional or live far from the centre, and offline if you prefer in-person guidance. Both modes are available at techcadd." },
    { q: "What jobs can I get after this course, and what is the salary?", a: "You can work as a graphic designer, social media designer, packaging designer, junior UI designer or print production designer. Entry-level salaries in India are approximately ₹15,000 to ₹30,000 per month, and they rise with experience, portfolio quality and city. techcadd cannot guarantee jobs, but the course prepares you with a portfolio and interview practice." },
    { q: "Can I do freelancing after learning graphic design?", a: "Yes, many designers start freelancing with logos, posters, social media kits and thumbnails once they have a portfolio. The course covers setting up freelance profiles, pricing projects and handling client feedback. Income depends on how many clients you build over time." },
    { q: "Can students from Himachal Pradesh join the graphic designing course online?", a: "Yes, students from Shimla, Kullu, Mandi or any other part of Himachal Pradesh can join live online classes from home. This helps learners in hill areas where design training is limited, and the same skills can be used for remote freelancing." },
    { q: "What are the graphic designing job opportunities in Punjab and Haryana?", a: "Punjab offers openings in manufacturing, export, sports goods and Mohali's IT and startup circle, while Haryana has roles in e-commerce, automobile, logistics and corporate marketing teams. Designers in both states also work remotely for agencies in metro cities such as Bengaluru, Pune and Mumbai." },
    { q: "Is there a graphic designing course in Chandigarh for working professionals?", a: "Yes, working professionals in Chandigarh and the tricity can join techcadd's evening or weekend online batches without leaving their jobs. The course helps IT, BPO and startup employees add branding, social media and UI skills to their profile." },
    { q: "Does techcadd offer a graphic designing course in Jammu & Kashmir?", a: "Yes, learners in Jammu, Srinagar or any other town can join live online classes. Online sellers, tourism operators and handicraft businesses use these skills to create product images, catalogues and social media content for their own brands." },
    { q: "Can I join a graphic designing course in Uttar Pradesh from Lucknow or Meerut?", a: "Yes, the live online format works from anywhere in Uttar Pradesh, including Lucknow and Meerut, with the same syllabus and trainer interaction as other batches. Learners use it for jobs in retail, print and advertising, or for freelance work." },
  ],
  related: ["graphics-video", "social-media-marketing", "web-designing"],
  copy: {
    heading: { title: "Graphic Designing Course", highlight: "Online & Offline", meta: "Graphic Designing Course Online & Offline with Certificate | techcadd" },
    overview: { eyebrow: "Program Overview", title: "Graphic Designing Course Online & Offline with Certificate" },
    syllabus: {
      eyebrow: "What You Will Learn & Tools Covered",
      title: "What You Will Learn in the Graphic Designing Course",
      text: "The curriculum moves from design principles to tools, then to real project work. Here is the module-wise breakdown.",
    },
    audience: {
      eyebrow: "Who Can Do This Course",
      title: "Who Can Do This Graphic Designing Course?",
      intro: "You do not need an art degree or years of drawing practice to start. The course begins with design fundamentals and builds up to professional client-style projects, so most learners with a basic comfort with computers can join. It suits the following groups.",
      items: [
        { icon: "GraduationCap", title: "Graduates and postgraduates", text: "Whether you finished B.A., B.Com, BBA, B.Tech, BCA or an MA, a design skill adds a creative, in-demand profile to your degree. Many graduates use it to move into design, marketing or content teams." },
        { icon: "Briefcase", title: "Working professionals", text: "If you work in marketing, sales, HR or operations, you can create your own presentations, social media posts and campaign visuals instead of waiting on an external designer." },
        { icon: "Shuffle", title: "Job switchers", text: "Professionals from non-creative fields, such as banking, teaching or administration, can retrain here and build a portfolio for entry-level design roles." },
        { icon: "PenTool", title: "Freelancers", text: "If you already do video editing, writing or photography, graphic design lets you offer a complete package of logos, thumbnails, brochures and social media kits to clients." },
        { icon: "Building2", title: "Business owners and entrepreneurs", text: "Shop owners, boutique founders, café owners and exporters can design their own branding, packaging, menus and ads, saving agency costs and keeping a consistent brand look." },
        { icon: "BookOpen", title: "12th pass students", text: "Students who have completed Class 12 and want a skill-based career path can also join, as long as they are serious about practice and projects. They are a smaller part of our batches, since most learners are graduates and working adults." },
      ],
      need: "A laptop or desktop (for online learners, a stable internet connection), basic computer knowledge, and curiosity and a willingness to practise daily. No prior design software experience is needed, as beginners are fully supported.",
    },
    regions: {
      eyebrow: "Learn from Anywhere",
      title: "Learners from Across States",
      intro: "Our live online format means you can learn from home and still get instructor interaction, doubt-solving and project feedback. Here is how learners from different regions benefit.",
      items: [
        { title: "Punjab", text: "A graphic designing course in Punjab suits learners from Ludhiana's hosiery and garment trade and Amritsar's food and retail brands, who need catalogues, labels and packaging designs for exports and local markets." },
        { title: "Haryana", text: "For a graphic designing course in Haryana, learners in Gurugram's MNC and e-commerce circles can target product banners, marketplace creatives and corporate presentation design roles." },
        { title: "Himachal Pradesh", text: "A graphic designing course in Himachal Pradesh helps learners in Shimla's tourism and hotel business create brochures, menus and promotional posters, and it also supports remote freelancing from the hills." },
        { title: "Chandigarh", text: "For a graphic designing course in Chandigarh, working professionals in the city's IT firms, startups and Mohali's tech companies can add UI and branding skills to their profile." },
        { title: "Delhi NCR", text: "A graphic designing course in Delhi is ideal for job seekers aiming at the region's large agency and media market, including Noida's digital marketing and content companies." },
        { title: "Jammu & Kashmir", text: "A graphic designing course in Jammu & Kashmir lets handicraft sellers, tourism operators and online store owners in Srinagar design product visuals, catalogues and social media creatives without relocating." },
        { title: "Uttarakhand", text: "For a graphic designing course in Uttarakhand, learners in Dehradun's education sector and Haridwar's pharma and tourism businesses can handle packaging, signage and promotional design." },
        { title: "Rajasthan", text: "A graphic designing course in Rajasthan fits jewellery, textile and handicraft entrepreneurs in Jaipur who want stronger product photography layouts, lookbooks and brand identities." },
        { title: "Uttar Pradesh", text: "For a graphic designing course in Uttar Pradesh, learners in Lucknow's government-linked and retail sectors and Meerut's local businesses can build skills for print media, ads and digital campaigns." },
      ],
    },
    whyProgram: {
      eyebrow: "Why This Program",
      title: "Why Choose This Graphic Designing Course?",
      intro: "Every business, from a local boutique to a national e-commerce brand, now competes for attention on screens. That makes visual communication a skill employers and clients pay for. A well-structured graphic designing course gives you that skill in months rather than years, without a long degree programme. Here is why this program is a smart move for your career.",
      points: [
        { title: "Strong and Growing Demand for Designers", text: "Social media marketing, online shopping, app development, video content and print advertising all depend on designers. Agencies, in-house marketing teams, startups, publishing houses and e-commerce brands hire for roles such as graphic designer, creative designer, social media designer, packaging designer and UI designer. Because demand comes from so many industries, your skills stay useful even when one sector slows down." },
        { title: "Skills Matter More Than Degrees", text: "In design, a strong portfolio often counts for more than your qualification. Recruiters and clients look at your work first. This program is built around that reality, so you finish with real projects in your portfolio rather than only notes and certificates." },
        {
          title: "Multiple Ways to Earn",
          text: "You are not limited to one career path after learning design. You can:",
          list: [
            "Take a full-time job in an agency, company or media house",
            "Work as a freelancer for domestic and international clients",
            "Start your own design or branding studio",
            "Improve the branding of your existing business",
            "Move into related fields such as UI/UX, motion graphics or digital marketing",
          ],
        },
        { title: "Industry-Standard Tools Plus AI Workflows", text: "Professional design today means mastering core tools such as Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva, and also knowing how to use AI-assisted features to speed up routine work. Learning both makes you faster and more competitive, because employers want designers who deliver quality work on tight deadlines." },
        { title: "Project-Based, Practical Learning", text: "Each module ends with a hands-on assignment, such as a logo and brand kit, a social media campaign, a brochure, product packaging or a landing page design. This approach builds confidence, teaches you to handle client feedback and gives you work samples to show in interviews." },
        { title: "Flexible Online and Offline Learning", text: "Working professionals can attend live online classes in the evening or on weekends, while those who prefer classroom guidance can choose offline training. Live sessions allow questions, screen-sharing and feedback, so you are not left alone with recorded videos." },
        { title: "Remote and Metro Opportunities", text: "Many design jobs and freelance projects can be done remotely. Learners from smaller towns can work with agencies and brands based in Bengaluru, Hyderabad, Pune and Mumbai without relocating, once their portfolio is strong." },
        { title: "Realistic Earning Potential", text: "Salaries vary with skill, city and experience. As an approximate guide, entry-level designers in India often start around ₹15,000 to ₹30,000 per month. Designers with a few years of experience and a strong portfolio can reach ₹40,000 to ₹80,000 or more. Freelance income depends on the number and quality of clients you build over time." },
        { title: "A Skill That Supports Your Existing Career", text: "Even if you never become a full-time designer, this skill raises your value in marketing, sales, teaching, entrepreneurship and content creation. You can create your own visuals, communicate ideas better and cut outsourcing costs." },
        { title: "Who Benefits Most?", text: "If you enjoy creativity, want a practical skill with clear career routes, and are ready to practise regularly, this program is a strong fit." },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose techcadd",
      title: "Why Choose techcadd for Graphic Design Training?",
      intro: "Choosing where to learn design matters as much as choosing to learn it. A good institute should teach current tools, give you real project practice and help you build a portfolio that clients and recruiters take seriously. Here is what learners can expect at techcadd.",
      points: [
        { title: "Curriculum Built Around Real Design Work", text: "The syllabus follows how design is actually done in agencies and in-house creative teams. You start with colour theory, typography, layout and composition, then move into Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva. Each tool is taught through the kind of task it is used for: photo editing, logos, print layouts, UI screens and social media creatives." },
        { title: "Live Instructor-Led Classes", text: "Recorded videos alone rarely help when you get stuck. techcadd's live sessions let you ask questions in the moment, share your screen and get corrections on your own work. Online learners get the same instructor attention as classroom learners, which suits working professionals and learners outside Punjab." },
        {
          title: "Portfolio-First Approach",
          text: "Design hiring runs on portfolios. Throughout the course you build a body of work that can include:",
          list: [
            "A complete brand identity kit (logo, colour palette, typography, stationery)",
            "A month-long social media campaign set",
            "A brochure, catalogue or magazine layout",
            "Product packaging and label design",
            "Web or app UI screens in Figma",
            "Ad banners and marketplace creatives",
          ],
          after: "By the end, you have organised, presentable work to show employers, or to pitch to freelance clients.",
        },
        { title: "Practice with Client-Style Briefs", text: "Instead of only copying tutorials, you work from briefs similar to what clients send: a target audience, a message, a deadline and revision requests. This teaches you how to interpret requirements, take feedback and deliver on time, which are skills that separate job-ready designers from tutorial followers." },
        { title: "Flexible Batches for Different Learners", text: "Graduates, job switchers, freelancers and working professionals have different schedules. techcadd offers online and offline modes so you can choose what fits your routine, and learners can ask about weekday, evening and weekend options when they enquire." },
        { title: "Updated Tools and AI-Assisted Workflows", text: "Design software changes quickly. The course covers current versions of industry tools and shows how to use AI-assisted features, such as generative fill, background removal and idea exploration, responsibly. The focus stays on design judgement, because AI tools help speed up work but cannot replace a trained eye." },
        { title: "Guidance Beyond the Classroom", text: "Learning does not end with the last module. Trainers can guide you on building a portfolio, setting up profiles on freelance platforms, preparing for design interviews and pricing your first projects. Support of this kind helps beginners move from learning to earning with more confidence." },
        { title: "Honest Career Counselling", text: "Not everyone wants the same outcome. Some want a job, some want freelance clients and some want to improve their own business. Counsellors can help you pick the right learning path and tell you what is realistic for your background and time commitment." },
        { title: "A Learning Community", text: "Learning alongside peers from different cities and professions exposes you to varied ideas and design styles. Group feedback on assignments helps you see your work through a client's eyes." },
        { title: "Is techcadd Right for You?", text: "If you want practical, portfolio-driven training with live guidance and flexible modes, techcadd gives you a structured path from basics to professional work. Ask for a free demo class to see the teaching style before you decide." },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Career and Future Scope",
      intro: "After completing the course, you can work as:",
      roles,
      rolesNote: "Related career paths include UI/UX design, motion graphics, video editing and digital marketing. Employers range from design agencies and media houses to e-commerce brands, publishers, IT firms and startups. Entry-level salaries in India often start at about ₹15,000 to ₹30,000 per month, depending on skill, city and portfolio.",
      jobsTitle: "Graphic Designing Job Opportunities Across States",
      jobs: [
        { title: "Punjab", text: "Graphic designing jobs in Punjab are growing with sports goods and export brands around Patiala and agri-tech firms that need packaging, labels and catalogues." },
        { title: "Haryana", text: "Graphic designing jobs in Haryana include industrial and automobile catalogue design in Faridabad, and in-house marketing roles at logistics and e-commerce companies." },
        { title: "Delhi NCR", text: "Graphic designing jobs in Delhi are plentiful in agencies, fintech and media companies, with Ghaziabad adding openings in print and advertising." },
        { title: "Himachal Pradesh", text: "Graphic designing jobs in Himachal Pradesh include packaging design for the pharma units around Solan and remote freelancing for clients across India, which suits learners based in Dharamshala and other hill towns." },
        { title: "Rajasthan", text: "Graphic designing jobs in Rajasthan lean towards tourism promotion, wedding and event branding, and heritage hotel marketing." },
        { title: "Uttarakhand", text: "Graphic designing jobs in Uttarakhand are tied to tourism, hospitality and education, such as travel brochures, resort menus and admission campaigns." },
      ],
    },
    reviews: {
      title: "What Our Learners Say",
      items: [
        { name: "Harpreet Kaur", role: "B.Com Graduate", place: "Hoshiarpur, Punjab", rating: 5, text: "After B.Com I had no clear direction. I joined the online batch and was surprised that the trainers started from the very basics. Colour, fonts and layout were explained properly before we touched Photoshop. Now I have a portfolio with a logo kit and social media posts, and I am applying for junior designer roles." },
        { name: "Rohit Malhotra", role: "Marketing Executive", place: "Karnal, Haryana", rating: 5, text: "I work in a marketing team and was always depending on our designer for small changes. I joined the evening batch and now I make my own banners and presentations. The Canva and Photoshop modules were most useful for my daily work. Doubts were solved in the live class itself." },
        { name: "Neha Thakur", role: "Freelancer", place: "Una, Himachal Pradesh", rating: 4, text: "I was doing content writing and wanted to offer design also. Illustrator and Figma sessions helped me a lot. I like that we got client-type briefs with revisions, because real clients also change their mind many times. I have started taking small logo and poster projects online." },
        { name: "Simran Bedi", role: "Ex-Banking Professional, Job Switcher", place: "Chandigarh", rating: 5, text: "Switching from banking to a creative field was a big decision for me. The trainers were patient with beginners and never made me feel I was late to start. The portfolio guidance and mock interview helped me understand what recruiters actually look for." },
        { name: "Aman Verma", role: "BCA Graduate", place: "Delhi", rating: 4, text: "I had basic computer knowledge but no design background. The module-wise approach made it easy to follow. I liked InDesign and the print preparation part, which I did not find in free YouTube videos. Would be good if more practice sessions are added on weekends." },
        { name: "Irfan Mir", role: "Business Owner (Handicrafts)", place: "Anantnag, Jammu & Kashmir", rating: 5, text: "I sell shawls and handicrafts online and was paying outside people for every catalogue and post. Learning online from home was very convenient for me. Now I design my product images, price cards and Instagram posts myself, and our brand looks much more professional." },
        { name: "Pooja Rawat", role: "12th Pass Student", place: "Rishikesh, Uttarakhand", rating: 4, text: "I completed 12th and wanted to learn a skill instead of sitting idle. At first the tools looked difficult, but the trainer explained step by step and gave daily practice tasks. My confidence has improved a lot, and I am now building my Behance profile." },
        { name: "Kunal Sharma", role: "Freelance Video Editor", place: "Sri Ganganagar, Rajasthan", rating: 5, text: "I edit videos for local businesses, and clients kept asking me for thumbnails and posters also. This course helped me add that service. The AI tools part was practical because the trainer also explained where not to depend on AI. My client work now includes complete design packages." },
        { name: "Shweta Mishra", role: "Former School Teacher, Job Switcher", place: "Agra, Uttar Pradesh", rating: 4, text: "I taught for six years and wanted a change. Online live classes fitted my schedule, and recordings were helpful when I missed a session. The brand identity project was my favourite. I am still working on my portfolio, but I now understand what a design job needs." },
        { name: "Gurpreet Singh", role: "Owner, Printing and Packaging Unit", place: "Ambala, Haryana", rating: 5, text: "We run a small printing press, and CorelDRAW and Illustrator were my main interest. Learning bleed, CMYK and proper file setup reduced our printing mistakes. I also understood how to talk to clients about design in a better way." },
        { name: "Ankit Negi", role: "12th Pass Student", place: "Mandi, Himachal Pradesh", rating: 4, text: "Being from a small town, I did not have many options to learn design nearby. The online class was very helpful. The instructor gave personal feedback on my assignments, and my poster and logo work improved week by week." },
        { name: "Meenakshi Joshi", role: "Working Professional (HR)", place: "Haldwani, Uttarakhand", rating: 5, text: "I wanted to create better presentations and recruitment posters for my company. The course was practical and not too heavy on theory. Figma and Canva sessions were the best part for me, and I now get appreciation from my seniors for my visuals." },
      ],
    },
    faqTitle: "Graphic Designing Course FAQs",
    cta: {
      title: "Start Your Graphic Designing Course Today",
      highlight: "and Build a Portfolio That Gets You Hired",
      text: "Turn your creativity into a career or a freelance income. Learn Photoshop, Illustrator, InDesign, CorelDRAW, Figma and Canva with live trainers, real client-style projects and portfolio guidance. Join the graphic designing course online from anywhere in India, or learn in the classroom at any of our centres.",
    },
  },
};
