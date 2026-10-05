import type { StaticImageData } from "next/image";
import portraitImg from "@/assets/founder/founder-portrait.png";
import aboutImg from "@/assets/founder/founder-about.jpg";
import stage1 from "@/assets/founder/stage-1.jpg";
import stage2 from "@/assets/founder/stage-2.jpg";
import stage3 from "@/assets/founder/stage-3.jpg";
import stage4 from "@/assets/founder/stage-4.jpg";
import journeyStart from "@/assets/founder/journey-start.jpg";
import journey2016 from "@/assets/founder/journey-2016.jpg";
import journey2018 from "@/assets/founder/journey-2018.jpg";
import journey2020 from "@/assets/founder/journey-2020.jpg";
import journey2023 from "@/assets/founder/journey-2023.jpg";
import asmitaImg from "@/assets/founder/asmita-mam.png";
import richiImg from "@/assets/founder/richi-mam.png";
import daljeetImg from "@/assets/founder/daljeet-sir.png";
import alamImg from "@/assets/founder/alam-sir.png";
import amitImg from "@/assets/founder/amit-sir.png";
import shivImg from "@/assets/founder/shiv-sir.png";

/** Founder page (/about/founder). Copy, photos and section order are taken as-is from techcaddjalandhar.com/about/founder.
 *  NOTE: the reference says "2016 founded / 5,000+ students" while the rest of this site says 2007 / 50,000+ — confirm with the client. */
export const founderHero = {
  name: "Gourav Gupta",
  role: "Founder, techcadd",
  title: ["Inspiring Careers,", "Building Skills,", "Creating Futures."],
  lead: "Empowering students with practical skills, industry exposure, and the confidence to build successful careers in technology.",
  tags: ["Founder", "Educator", "Mentor"],
  image: portraitImg,
  alt: "Gourav Gupta, founder of techcadd, speaking to students with a microphone",
};

export const founderMeet = {
  ghost: "ABOUT",
  heading: "Meet",
  image: aboutImg,
  alt: "Gourav Gupta, founder of techcadd, smiling in a white shirt",
  intro: "Every successful journey begins with a dream, but only a few are built through relentless hard work, courage and the determination to never give up.",
  /** Rendered after a bold "Gourav Gupta". */
  bio: "is an entrepreneur, mentor and career coach whose life journey is a powerful example of resilience, self-belief and the transformative power of education. From facing financial challenges and driving an auto to complete his engineering education, to building an organization from the ground up, his story reflects a simple yet powerful belief: your circumstances may shape your beginning, but your determination shapes your future.",
  today: "Today, he is recognized for his entrepreneurial vision, commitment to skill-based education and passion for helping students and aspiring professionals discover their potential.",
  quote: "A certificate proves attendance. A portfolio proves capability. We build the second one.",
  cta: { label: "Explore the courses", href: "/courses" },
  stats: [
    { value: "2016", label: "techcadd founded in Jalandhar" },
    { value: "5,000+", label: "Students trained" },
    { value: "7", label: "Centres across Punjab" },
    { value: "100%", label: "Placement assistance" },
  ],
};

/** "On stage" photo marquee (two rows sliding in opposite directions). */
export const founderGallery: { image: StaticImageData; alt: string }[] = [
  { image: stage1, alt: "Gourav Gupta on stage in a large auditorium, with a robot on the stage floor beside him" },
  { image: stage2, alt: "Gourav Gupta walking across the stage in front of a packed auditorium" },
  { image: stage3, alt: "Gourav Gupta addressing a full hall of students from the stage" },
  { image: stage4, alt: "Gourav Gupta raising his hand to the audience during a talk" },
];

export const founderRoles = [
  { icon: "Rocket", tag: "Start small, think big", title: "Self-made entrepreneur", text: "Built techcadd from the ground up — putting up flex banners, doing offline branding and reaching students himself." },
  { icon: "Compass", tag: "Career direction", title: "Career coach", text: "Guides students on education, technical fields and career pathways, and on the move from education to work." },
  { icon: "Users", tag: "Goal setting & growth", title: "Mentor", text: "Helps young professionals build clarity, confidence and a growth mindset, and overcome self-doubt." },
  { icon: "Mic", tag: "Lessons from his journey", title: "Public speaker & motivator", text: "College talks, career guidance seminars and motivational sessions built on his own story of struggle and success." },
];

export type JourneyBlock =
  | { kind: "p"; text: string; /** Emphasised ending of the paragraph. */ em?: string }
  | { kind: "lead"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "numbered"; items: { title: string; text: string }[] }
  | { kind: "quote"; text: string };

export type JourneyChapter = {
  id: string;
  /** Tab label, e.g. "2016". */
  tab: string;
  /** Chip on the card, e.g. "Chapter 01". */
  label: string;
  icon: string;
  title: string;
  /** One line typed out in the control card while this chapter is on screen. */
  line: string;
  /** Pill under the control card. */
  caption: string;
  image: StaticImageData;
  /** object-position for the background photo. */
  position?: string;
  blocks: JourneyBlock[];
};

export const founderJourneyIntro = {
  eyebrow: "The journey behind techcadd",
  title: "From driving an auto to",
  highlight: "building techcadd",
  text: "Scroll through the story, one chapter at a time.",
};

export const founderJourney: JourneyChapter[] = [
  {
    id: "start",
    tab: "The start",
    label: "Where it began",
    icon: "BookOpen",
    title: "A Journey Built on Struggle and Self-Belief",
    line: "Where you begin does not define where you can go.",
    caption: "Before techcadd · Driving an auto through engineering",
    image: journeyStart,
    blocks: [
      { kind: "p", text: "Gourav Gupta’s journey was far from easy. Pursuing engineering education while facing financial hardships demanded extraordinary commitment and sacrifice. To support himself and continue his studies, he drove an auto while completing his engineering education." },
      { kind: "p", text: "For him, education was not merely a qualification. It was a pathway to independence, growth and a better future." },
      { kind: "p", text: "Balancing work, studies and personal responsibilities taught him lessons that no textbook could offer: discipline, patience, resilience and the courage to keep moving forward, even when the circumstances were difficult." },
      { kind: "p", text: "His journey stands as a reminder that", em: "where you begin does not define where you can go." },
    ],
  },
  {
    id: "2016",
    tab: "2016",
    label: "Chapter 01",
    icon: "Megaphone",
    title: "Building techcadd from the Ground Up",
    line: "No shortcuts — only hard work, persistence and a willingness to do whatever it took.",
    caption: "2016 · techcadd begins in Jalandhar",
    image: journey2016,
    blocks: [
      { kind: "p", text: "The early days of techcadd were a testament to Gourav Gupta’s hands-on approach, entrepreneurial spirit and unwavering belief in his vision." },
      { kind: "p", text: "In the initial phase of building techcadd, he personally took responsibility for tasks that many would overlook. From putting up flex banners and carrying out offline branding to working on the ground to create awareness, he was involved in every aspect of building the organization." },
      { kind: "p", text: "There were no shortcuts—only hard work, persistence and a willingness to do whatever it took to turn a vision into reality." },
      { kind: "p", text: "Every banner installed, every conversation with a prospective student and every small step toward building the brand became part of a larger journey." },
      { kind: "lead", text: "He did not simply build a business; he built it through experience, sacrifice and the belief that meaningful impact begins with taking the first step." },
      { kind: "p", text: "Over time, this commitment helped shape techcadd into an organization focused on technical education, industry-relevant skills and opportunities for learners." },
    ],
  },
  {
    id: "2018",
    tab: "2018",
    label: "Chapter 02",
    icon: "Users",
    title: "More Than an Entrepreneur—A Career Coach and Mentor",
    line: "Every student has a different starting point, and a unique definition of success.",
    caption: "2018 · Coach and mentor",
    image: journey2018,
    blocks: [
      { kind: "p", text: "Gourav Gupta believes that education should do more than provide a certificate. It should build confidence, develop practical skills and empower individuals to create meaningful careers." },
      { kind: "p", text: "As a career coach and mentor, he is passionate about helping students and young professionals:" },
      {
        kind: "bullets",
        items: [
          "Discover their strengths, interests and career potential.",
          "Make informed decisions about education and career pathways.",
          "Develop industry-relevant skills and a growth-oriented mindset.",
          "Overcome self-doubt and challenges with confidence.",
          "Understand the importance of practical learning and continuous development.",
          "Transform their ambitions into clear, achievable goals.",
        ],
      },
      { kind: "p", text: "His own experiences allow him to connect with learners at a deeper level. He understands that every student has a different starting point, different challenges and a unique definition of success." },
      { kind: "p", text: "His approach to mentorship is rooted in practical guidance, empathy, discipline and the belief that every individual deserves the opportunity to grow." },
    ],
  },
  {
    id: "2020",
    tab: "2020",
    label: "Chapter 03",
    icon: "Lightbulb",
    title: "The Philosophy Behind His Success",
    line: "Show up every day, embrace the challenges, and keep working toward a bigger vision.",
    caption: "2020 · The philosophy",
    image: journey2020,
    blocks: [
      { kind: "p", text: "Gourav Gupta’s story is not about overnight success. It is about showing up every day, embracing challenges and continuing to work toward a bigger vision." },
      { kind: "p", text: "His personal and professional philosophy is built around a few core principles:" },
      {
        kind: "numbered",
        items: [
          { title: "Education is a powerful tool for transformation.", text: "Knowledge, skills and continuous learning can open doors to new opportunities." },
          { title: "Hard work creates possibilities.", text: "Success is often the result of consistent effort, even when progress seems slow." },
          { title: "Your starting point does not determine your destination.", text: "Financial challenges, limited resources or difficult beginnings do not have to define your future." },
          { title: "Practical experience matters.", text: "Real-world exposure, hands-on learning and the willingness to take responsibility are essential for professional growth." },
          { title: "Success becomes meaningful when it inspires others.", text: "The true impact of a journey lies not only in what you achieve, but also in the lives you positively influence." },
        ],
      },
    ],
  },
  {
    id: "2023",
    tab: "2023",
    label: "Chapter 04",
    icon: "Compass",
    title: "His Vision as a Career Coach",
    line: "Bridge the gap between academic education and what the industry actually expects.",
    caption: "2023 · The vision",
    image: journey2023,
    blocks: [
      { kind: "p", text: "Gourav Gupta envisions a future where students and young professionals have access to the right guidance, practical skills and opportunities to build successful careers." },
      { kind: "p", text: "Through his work as a mentor and career coach, he aims to bridge the gap between academic education and industry expectations. His focus is on encouraging learners to think beyond conventional career paths, develop confidence in their abilities and prepare themselves for a changing professional world." },
      { kind: "p", text: "He believes that every individual has untapped potential—and the right guidance, combined with consistent effort, can help turn that potential into achievement." },
    ],
  },
  {
    id: "2026",
    tab: "2026",
    label: "Chapter 05",
    icon: "Star",
    title: "An Inspiration for Every Dreamer",
    line: "Your circumstances decide where you begin. Your hard work decides where you go.",
    caption: "2026 · An inspiration for every dreamer",
    image: portraitImg,
    position: "50% 20%",
    blocks: [
      { kind: "p", text: "From driving an auto to complete his engineering education, to personally building the foundations of techcadd through offline branding and hands-on effort, Gourav Gupta’s journey is a story of perseverance, humility and determination." },
      { kind: "p", text: "His life demonstrates that success is not defined by where you start, but by the courage to keep going." },
      { kind: "p", text: "For students, aspiring entrepreneurs and young professionals, his journey offers a powerful message:" },
      { kind: "quote", text: "Your circumstances may decide where you begin, but your hard work, learning and determination can shape where you go." },
      { kind: "lead", text: "Gourav Gupta is not just building an organization. He is inspiring individuals to believe in themselves, pursue their ambitions and build a future they can be proud of." },
    ],
  },
];

export const founderClosing = {
  title: "A Leader Who Inspires Beyond the Workplace",
  text: "From his early struggles while completing engineering education to building techcadd through hands-on effort, Gourav Gupta’s journey continues to inspire the people associated with him.",
  values: { lead: "These words of appreciation reflect the values he strives to bring to his professional relationships:", em: "trust, mentorship, perseverance, innovation and the belief that every individual has the potential to achieve more." },
  quote: "True leadership is not just about building an organization; it is about building people who believe they can achieve extraordinary things.",
};

export const founderTestimonialsIntro = {
  eyebrow: "Testimonials & Words of Appreciation",
  title: "What People Say About",
  highlight: "Gourav Gupta",
  lead: "A leader’s true impact is reflected not only in the organization they build, but also in the people they inspire, guide and empower.",
  text: "Gourav Gupta’s journey as an entrepreneur, mentor and career coach has touched the lives of colleagues, franchise partners and professionals who have worked alongside him. Here are a few words of appreciation from people associated with his professional journey.",
};

export type FounderTestimonial = { name: string; role: string; text: string; photo?: StaticImageData };

export const founderTestimonials: FounderTestimonial[] = [
  { name: "Asmita Sehgal", role: "Senior Manager, techcadd", photo: asmitaImg, text: "Working with Gourav Sir has been a truly meaningful experience. His journey, from overcoming personal and professional struggles to building techcadd, is a constant source of inspiration. What I admire most is his ability to trust people, understand their challenges and encourage them to grow. His leadership goes beyond business—it is about empowering people and helping them believe in their own potential." },
  { name: "Harrachneet Kaur", role: "Relationship Manager, techcadd", photo: richiImg, text: "Gourav Sir’s dedication, positive attitude and vision have always inspired me. He leads by example and motivates everyone around him to give their best. His belief in people and his ability to guide them through challenges make him a truly inspiring leader. Working with him has been a valuable learning experience." },
  { name: "Daljeet Singh", role: "Franchise Owner, Ludhiana", photo: daljeetImg, text: "Gourav Gupta Sir’s entrepreneurial journey is a reflection of determination, hard work and strong vision. His guidance and commitment have been an inspiration throughout our association. He understands the challenges of building a business and encourages his partners to move forward with confidence. His journey motivates us to dream bigger and work harder." },
  { name: "Alam", role: "Franchise Owner, Amritsar", photo: alamImg, text: "What makes Gourav Sir stand out is his passion for education, his dedication to his vision and his willingness to support people around him. His journey teaches us that success comes through persistence and continuous effort. His guidance and entrepreneurial mindset have been a source of motivation and learning." },
  { name: "Amit", role: "IT Technical Head", photo: amitImg, text: "Gourav Sir is a visionary leader who understands the importance of technology, innovation and continuous learning. His commitment to building a strong organization and encouraging professional development is truly admirable. His journey reminds us that with the right mindset, discipline and dedication, challenges can become opportunities for growth." },
  { name: "Shiv", role: "AI Engineer", photo: shivImg, text: "Gourav Sir’s vision for technology and skill-based education is inspiring. He encourages innovation, learning and the development of future-ready skills. His journey demonstrates the importance of perseverance and self-belief. Being associated with his vision motivates me to keep learning, improving and contributing meaningfully." },
  { name: "Eakumpreet Singh", role: "Generative AI Engineer", text: "Gourav Sir’s journey is a powerful example of how determination and a clear vision can create meaningful success. His focus on emerging technologies, innovation and professional growth inspires young professionals like us. His leadership encourages us to explore new possibilities, strengthen our skills and build a better future." },
];

export type FounderReel = { code: string; shape?: "landscape" };

export const founderReels = {
  eyebrow: "On Instagram",
  title: "Life at techcadd,",
  highlight: "reel by reel",
  text: "Classroom sessions, student projects and placement days — drag to browse, tap a reel to play it.",
  more: { label: "See more", href: "https://www.instagram.com/techcadd__jalandhar" },
  /** Instagram reel codes → https://www.instagram.com/reel/<code>/embed. Mark 16:9 videos with shape "landscape". */
  items: [
    { code: "DRXM4TqE0cJ" },
    { code: "DRuqlw_k7rE" },
    { code: "DR7A8aDk_UI" },
    { code: "DSNg9j5k3AY" },
    { code: "DSxbHVbk0D8" },
    { code: "DVSgB2ME4e0", shape: "landscape" },
    { code: "DQMjtZ5k-0h" },
  ] as FounderReel[],
};

export const founderCta = {
  title: "Connect with Gourav Gupta",
  lead: "Looking for career guidance, mentorship or inspiration to take the next step in your professional journey?",
  text: "Follow Gourav Gupta for insights on career development, entrepreneurship, skill-based education, personal growth and the mindset required to turn challenges into opportunities.",
  motto: "Learn. Grow. Believe. Achieve.",
  instagram: "https://www.instagram.com/gouravgupta0/",
  linkedin: "https://www.linkedin.com/in/gripwellhandtools/",
  signoff: "Gourav Gupta — Inspiring careers. Empowering dreams. Building futures.",
};
