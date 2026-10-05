/** Founder page (/about/founder). Copy is from the reference site — SAMPLE until confirmed with the client (founding year / student counts differ from site.ts). */
export const founderHero = {
  name: "Gourav Gupta",
  role: "Founder, techcadd",
  title: ["Inspiring Careers,", "Building Skills,", "Creating Futures."],
  lead: "Empowering students with practical skills, industry exposure, and the confidence to build successful careers in technology.",
  tags: ["Founder", "Educator", "Mentor"],
};

export const founderMeet = {
  heading: "Meet Gourav Gupta",
  paragraphs: [
    "Every successful journey begins with a dream, but only a few are built through relentless hard work, courage and the determination to never give up.",
    "Gourav Gupta is an entrepreneur, mentor and career coach whose life journey is a powerful example of resilience, self-belief and the transformative power of education. From facing financial challenges and driving an auto to complete his engineering education, to building an organization from the ground up, his story reflects a simple yet powerful belief: your circumstances may shape your beginning, but your determination shapes your future.",
    "Today, he is recognized for his entrepreneurial vision, commitment to skill-based education and passion for helping students and aspiring professionals discover their potential.",
  ],
  quote: "A certificate proves attendance. A portfolio proves capability. We build the second one.",
  stats: [
    { value: "2007", label: "techcadd founded in Jalandhar" },
    { value: "10,000+", label: "Students trained" },
    { value: "7", label: "Centres across Punjab" },
    { value: "100%", label: "Placement assistance" },
  ],
};

export const founderRoles = [
  { icon: "Rocket", tag: "Start small, think big", title: "Self-made entrepreneur", text: "Built techcadd from the ground up — putting up flex banners, doing offline branding and reaching students himself." },
  { icon: "Compass", tag: "Career direction", title: "Career coach", text: "Guides students on education, technical fields and career pathways, and on the move from education to work." },
  { icon: "Users", tag: "Goal setting & growth", title: "Mentor", text: "Helps young professionals build clarity, confidence and a growth mindset, and overcome self-doubt." },
  { icon: "Mic", tag: "Lessons from his journey", title: "Public speaker & motivator", text: "College talks, career guidance seminars and motivational sessions built on his own story of struggle and success." },
];

export type JourneyChapter = {
  tab: string;
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  numbered?: { title: string; text: string }[];
  quote?: string;
  closing?: string;
};

export const founderJourney: JourneyChapter[] = [
  {
    tab: "The start",
    label: "Where it began",
    title: "A Journey Built on Struggle and Self-Belief",
    paragraphs: [
      "Gourav Gupta’s journey was far from easy. Pursuing engineering education while facing financial hardships demanded extraordinary commitment and sacrifice. To support himself and continue his studies, he drove an auto while completing his engineering education.",
      "For him, education was not merely a qualification. It was a pathway to independence, growth and a better future.",
      "Balancing work, studies and personal responsibilities taught him lessons that no textbook could offer: discipline, patience, resilience and the courage to keep moving forward, even when the circumstances were difficult.",
    ],
    closing: "His journey stands as a reminder that where you begin does not define where you can go.",
  },
  {
    tab: "Building",
    label: "Chapter 01",
    title: "Building techcadd from the Ground Up",
    paragraphs: [
      "The early days of techcadd were a testament to Gourav Gupta’s hands-on approach, entrepreneurial spirit and unwavering belief in his vision.",
      "In the initial phase of building techcadd, he personally took responsibility for tasks that many would overlook. From putting up flex banners and carrying out offline branding to working on the ground to create awareness, he was involved in every aspect of building the organization.",
      "There were no shortcuts—only hard work, persistence and a willingness to do whatever it took to turn a vision into reality.",
      "Every banner installed, every conversation with a prospective student and every small step toward building the brand became part of a larger journey.",
    ],
    closing: "He did not simply build a business; he built it through experience, sacrifice and the belief that meaningful impact begins with taking the first step.",
  },
  {
    tab: "Mentoring",
    label: "Chapter 02",
    title: "More Than an Entrepreneur—A Career Coach and Mentor",
    paragraphs: [
      "Gourav Gupta believes that education should do more than provide a certificate. It should build confidence, develop practical skills and empower individuals to create meaningful careers.",
      "As a career coach and mentor, he is passionate about helping students and young professionals:",
    ],
    bullets: [
      "Discover their strengths, interests and career potential.",
      "Make informed decisions about education and career pathways.",
      "Develop industry-relevant skills and a growth-oriented mindset.",
      "Overcome self-doubt and challenges with confidence.",
      "Understand the importance of practical learning and continuous development.",
      "Transform their ambitions into clear, achievable goals.",
    ],
    closing: "His own experiences allow him to connect with learners at a deeper level. His approach to mentorship is rooted in practical guidance, empathy, discipline and the belief that every individual deserves the opportunity to grow.",
  },
  {
    tab: "Philosophy",
    label: "Chapter 03",
    title: "The Philosophy Behind His Success",
    paragraphs: [
      "Gourav Gupta’s story is not about overnight success. It is about showing up every day, embracing challenges and continuing to work toward a bigger vision.",
      "His personal and professional philosophy is built around a few core principles:",
    ],
    numbered: [
      { title: "Education is a powerful tool for transformation.", text: "Knowledge, skills and continuous learning can open doors to new opportunities." },
      { title: "Hard work creates possibilities.", text: "Success is often the result of consistent effort, even when progress seems slow." },
      { title: "Your starting point does not determine your destination.", text: "Financial challenges, limited resources or difficult beginnings do not have to define your future." },
      { title: "Practical experience matters.", text: "Real-world exposure, hands-on learning and the willingness to take responsibility are essential for professional growth." },
      { title: "Success becomes meaningful when it inspires others.", text: "The true impact of a journey lies not only in what you achieve, but also in the lives you positively influence." },
    ],
  },
  {
    tab: "Vision",
    label: "Chapter 04",
    title: "His Vision as a Career Coach",
    paragraphs: [
      "Gourav Gupta envisions a future where students and young professionals have access to the right guidance, practical skills and opportunities to build successful careers.",
      "Through his work as a mentor and career coach, he aims to bridge the gap between academic education and industry expectations. His focus is on encouraging learners to think beyond conventional career paths, develop confidence in their abilities and prepare themselves for a changing professional world.",
      "He believes that every individual has untapped potential—and the right guidance, combined with consistent effort, can help turn that potential into achievement.",
    ],
  },
  {
    tab: "Today",
    label: "Chapter 05",
    title: "An Inspiration for Every Dreamer",
    paragraphs: [
      "From driving an auto to complete his engineering education, to personally building the foundations of techcadd through offline branding and hands-on effort, Gourav Gupta’s journey is a story of perseverance, humility and determination.",
      "His life demonstrates that success is not defined by where you start, but by the courage to keep going.",
      "For students, aspiring entrepreneurs and young professionals, his journey offers a powerful message:",
    ],
    quote: "Your circumstances may decide where you begin, but your hard work, learning and determination can shape where you go.",
    closing: "Gourav Gupta is not just building an organization. He is inspiring individuals to believe in themselves, pursue their ambitions and build a future they can be proud of.",
  },
];

export const founderClosing = {
  title: "A Leader Who Inspires Beyond the Workplace",
  paragraphs: [
    "From his early struggles while completing engineering education to building techcadd through hands-on effort, Gourav Gupta’s journey continues to inspire the people associated with him.",
    "These words of appreciation reflect the values he strives to bring to his professional relationships: trust, mentorship, perseverance, innovation and the belief that every individual has the potential to achieve more.",
  ],
  quote: "True leadership is not just about building an organization; it is about building people who believe they can achieve extraordinary things.",
};

export const founderTestimonials = [
  { name: "Asmita Sehgal", role: "Senior Manager, techcadd", text: "Working with Gourav Sir has been a truly meaningful experience. His journey, from overcoming personal and professional struggles to building techcadd, is a constant source of inspiration. What I admire most is his ability to trust people, understand their challenges and encourage them to grow. His leadership goes beyond business—it is about empowering people and helping them believe in their own potential." },
  { name: "Harrachneet Kaur", role: "Relationship Manager, techcadd", text: "Gourav Sir’s dedication, positive attitude and vision have always inspired me. He leads by example and motivates everyone around him to give their best. His belief in people and his ability to guide them through challenges make him a truly inspiring leader. Working with him has been a valuable learning experience." },
  { name: "Daljeet Singh", role: "Franchise Owner, Ludhiana", text: "Gourav Gupta Sir’s entrepreneurial journey is a reflection of determination, hard work and strong vision. His guidance and commitment have been an inspiration throughout our association. He understands the challenges of building a business and encourages his partners to move forward with confidence. His journey motivates us to dream bigger and work harder." },
  { name: "Alam", role: "Franchise Owner, Amritsar", text: "What makes Gourav Sir stand out is his passion for education, his dedication to his vision and his willingness to support people around him. His journey teaches us that success comes through persistence and continuous effort. His guidance and entrepreneurial mindset have been a source of motivation and learning." },
  { name: "Amit", role: "IT Technical Head", text: "Gourav Sir is a visionary leader who understands the importance of technology, innovation and continuous learning. His commitment to building a strong organization and encouraging professional development is truly admirable. His journey reminds us that with the right mindset, discipline and dedication, challenges can become opportunities for growth." },
  { name: "Shiv", role: "AI Engineer", text: "Gourav Sir’s vision for technology and skill-based education is inspiring. He encourages innovation, learning and the development of future-ready skills. His journey demonstrates the importance of perseverance and self-belief. Being associated with his vision motivates me to keep learning, improving and contributing meaningfully." },
  { name: "Eakumpreet Singh", role: "Generative AI Engineer", text: "Gourav Sir’s journey is a powerful example of how determination and a clear vision can create meaningful success. His focus on emerging technologies, innovation and professional growth inspires young professionals like us. His leadership encourages us to explore new possibilities, strengthen our skills and build a better future." },
];

export const founderCta = {
  title: "Connect with Gourav Gupta",
  lead: "Looking for career guidance, mentorship or inspiration to take the next step in your professional journey?",
  text: "Follow Gourav Gupta for insights on career development, entrepreneurship, skill-based education, personal growth and the mindset required to turn challenges into opportunities.",
  motto: "Learn. Grow. Believe. Achieve.",
  instagram: "https://www.instagram.com/gouravgupta0/",
  signoff: "Gourav Gupta — Inspiring careers. Empowering dreams. Building futures.",
};
