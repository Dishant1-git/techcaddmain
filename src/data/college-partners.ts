/** College Partnerships page (/college-partnerships). Institution list, formats and process are SAMPLE copy from the reference site — confirm with the client. */
export const partnerHero = {
  eyebrow: "College Partnerships",
  title: "Bringing industry practice onto your campus.",
  text: "Workshops, mandated industrial training, faculty development and joint placement drives, run with your departments and on your timetable.",
  stats: [
    { value: "2016", label: "Working with institutions since" },
    { value: "10,000+", label: "Students trained" },
    { value: "50+", label: "Courses and tracks" },
    { value: "6", label: "Partnership formats" },
  ],
};

export const partnerPhone = { label: "+91 98881 22291", href: "tel:+919888122291" };

export type Institution = { name: string; place: string; short: string };

export const institutions: Institution[] = [
  { name: "RIMT University", place: "Mandi Gobindgarh", short: "RIMT" },
  { name: "Sant Baba Bhag Singh University", place: "Khiala, Jalandhar", short: "SBBSU" },
  { name: "Chandigarh Group of Colleges", place: "Landran", short: "CGC" },
  { name: "Lyallpur Khalsa College Technical Campus", place: "Jalandhar", short: "LKCTC" },
  { name: "KMV College", place: "Jalandhar", short: "KMV" },
  { name: "Trinity Institute of Management and Technology", place: "Jalandhar", short: "TIMT" },
  { name: "Amritsar Group of Colleges", place: "Amritsar", short: "AGC" },
  { name: "Doaba Group of Colleges", place: "Kharar", short: "DGC" },
  { name: "Universal Group of Institutions", place: "Lalru", short: "UGI" },
  { name: "Ram Devi Jindal Group of Institutions", place: "Bassi", short: "RDJ" },
  { name: "Pyramid College of Business & Technology", place: "Phagwara", short: "PCBT" },
  { name: "Shree Hanumat Institute of Management and Technology", place: "Phagwara", short: "SHIMT" },
  { name: "Shri Guru Nanak Dev Academy", place: "Jhunir, Mansa", short: "SGND" },
];

export const partnerFormats = [
  { icon: "MonitorPlay", title: "Campus Workshops", text: "Hands-on sessions on AI, robotics, cyber security and emerging tools, run at your campus and sized to a single department or a whole year group." },
  { icon: "GraduationCap", title: "Industrial Training", text: "45-day, 6-week and 6-month programmes mapped to university training requirements, so a batch completes its mandated hours without a timetable clash." },
  { icon: "Briefcase", title: "Placement Drives", text: "Joint drives and pre-placement talks with the employers who recruit from us, hosted on your campus or at the Jalandhar centre." },
  { icon: "Users", title: "Faculty Development", text: "Short programmes that bring teaching staff up to date on the stacks their students will be interviewed on: cloud, data and modern web tooling." },
  { icon: "FlaskConical", title: "Lab & Curriculum Support", text: "Help specifying a teaching lab and aligning elective content with what hiring managers currently ask for, rather than what the syllabus was written against." },
  { icon: "BadgeCheck", title: "Certification", text: "Completion certificates and internship letters issued in the format your university requires, for every student who finishes a programme." },
] as const;

export const partnerSteps = [
  { title: "Introductory call", text: "A short conversation about your departments, student numbers and where the gap between syllabus and industry is widest." },
  { title: "Proposal", text: "A written plan covering scope, duration, delivery mode and cost. Nothing starts on a handshake." },
  { title: "Pilot batch", text: "One cohort or one workshop first, so both sides can judge the fit before committing to a longer arrangement." },
  { title: "Ongoing programme", text: "A rolling schedule across semesters, with placement activity attached to the students who complete it." },
];
