/** Content for the /training-matcher tool. SAMPLE content — confirm tracks, durations and seat counts with the client. */

export const universities = [
  "IKG Punjab Technical University (PTU)",
  "Guru Nanak Dev University (GNDU)",
  "Punjabi University, Patiala",
  "PSBTE (Diploma)",
  "Chandigarh University",
  "Lovely Professional University (LPU)",
  "DAV University, Jalandhar",
  "CT University, Ludhiana",
  "RIMT University, Mandi Gobindgarh",
  "SGGS / SLIET / NIT",
  "Kurukshetra University",
  "HP University / HP Technical",
  "Other University or Board",
];

export type BranchId = "cse" | "bca" | "mca" | "mech" | "civil" | "ece" | "ai" | "mba";

export const branches: { id: BranchId; label: string; icon: string }[] = [
  { id: "cse", label: "CSE / IT / Computer Applications", icon: "CodeXml" },
  { id: "bca", label: "BCA / BCA-AI / B.Sc IT", icon: "CodeXml" },
  { id: "mca", label: "MCA / M.Sc IT / M.Tech CS", icon: "CodeXml" },
  { id: "mech", label: "Mechanical & Automobile Engg.", icon: "Box" },
  { id: "civil", label: "Civil & Architectural Engg.", icon: "Building2" },
  { id: "ece", label: "ECE / EE / Electronics", icon: "Cpu" },
  { id: "ai", label: "AI & Data Science / ML", icon: "BrainCircuit" },
  { id: "mba", label: "MBA / BBA / Commerce", icon: "Briefcase" },
];

export const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export type SemesterTrack = { tag: string; title: string; text: string; seats: number };

export function semesterTrack(sem: number): SemesterTrack {
  if (sem <= 2) return { tag: "Foundation Track", title: "4 Weeks Skill Foundation Program", text: "Early-year exposure to coding, design or business tools so later training is easier to choose and complete.", seats: 12 };
  if (sem <= 4) return { tag: "Summer Training Track", title: "6 Weeks Summer Training", text: "A structured summer programme with a mini project and a certificate for your training credits.", seats: 9 };
  if (sem === 5) return { tag: "Pre-Final Year Track", title: "6 Weeks / 2 Months Minor Project Training", text: "Builds a production-grade live project to strengthen your resume before campus recruitment and fulfil pre-final year training credits.", seats: 4 };
  if (sem === 6) return { tag: "Pre-Final Year Track", title: "6 Weeks Industrial Training", text: "Industry-style training with a live project, ahead of your final-year placement season.", seats: 6 };
  return { tag: "Final Year Track", title: "6 Months Industrial Training & Major Project", text: "Full-semester industrial training with a major project, report support and interview preparation.", seats: 5 };
}

export type MatchedProject = {
  badge: string;
  duration: "6 Weeks" | "6 Months";
  title: string;
  text: string;
  stack: string[];
  outcome: string;
};

const web: MatchedProject[] = [
  { badge: "Most Popular", duration: "6 Weeks", title: "MERN Stack Live Project", text: "Full-stack application from scratch with authentication, REST APIs, database design and live cloud deployment.", stack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel / Render"], outcome: "Deployed full-stack app + GitHub portfolio" },
  { badge: "AI Trending", duration: "6 Weeks", title: "Python & Machine Learning Project", text: "Clean a real dataset, train and evaluate a model, and ship it behind a simple web interface.", stack: ["Python", "Pandas", "scikit-learn", "Flask", "Jupyter"], outcome: "Trained model + working demo" },
  { badge: "Major Project", duration: "6 Months", title: "Full-Stack + Cloud Industrial Training", text: "Team-based product build with CI/CD, testing, cloud hosting and a written project report.", stack: ["React.js", "Node.js", "Docker", "AWS", "Git & GitHub Actions"], outcome: "Major project report + experience letter" },
  { badge: "Security", duration: "6 Weeks", title: "Cybersecurity & Ethical Hacking Lab", text: "Hands-on labs: scanning, exploitation basics, hardening and a documented security assessment.", stack: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"], outcome: "Security assessment report" },
];

export const projectsByBranch: Record<BranchId, MatchedProject[]> = {
  cse: web,
  bca: web,
  mca: web,
  ai: [
    web[1],
    { badge: "Most Popular", duration: "6 Weeks", title: "Data Science with Power BI", text: "Analyse a business dataset and deliver an interactive dashboard with clear recommendations.", stack: ["Python", "SQL", "Power BI", "Excel"], outcome: "Interactive dashboard + case study" },
    { badge: "Major Project", duration: "6 Months", title: "Applied AI / Deep Learning Project", text: "Build, evaluate and deploy a deep-learning system end to end with a research-style report.", stack: ["Python", "TensorFlow", "PyTorch", "FastAPI", "Docker"], outcome: "Deployed AI system + report" },
  ],
  mech: [
    { badge: "Most Popular", duration: "6 Weeks", title: "AutoCAD & SolidWorks Design Project", text: "Model a multi-part mechanism, produce dimensioned drawings and an assembly with exploded view.", stack: ["AutoCAD", "SolidWorks", "Fusion 360"], outcome: "Drawing set + 3D assembly" },
    { badge: "Industry", duration: "6 Weeks", title: "CNC, 3D Printing & Prototyping", text: "Take a design to a printable or machinable file and learn the manufacturing workflow.", stack: ["Fusion 360", "G-code basics", "Ultimaker Cura"], outcome: "Prototype-ready model" },
    { badge: "Major Project", duration: "6 Months", title: "Product Design & Analysis Training", text: "Design, simulate and document a complete product with stress and motion analysis.", stack: ["SolidWorks", "ANSYS basics", "Keyshot"], outcome: "Major project report + render pack" },
  ],
  civil: [
    { badge: "Most Popular", duration: "6 Weeks", title: "AutoCAD & Revit for Civil Engineers", text: "Plans, sections and elevations of a small building, then a Revit BIM model.", stack: ["AutoCAD", "Revit", "SketchUp"], outcome: "Plan set + BIM model" },
    { badge: "Structural", duration: "6 Weeks", title: "STAAD.Pro Structural Analysis", text: "Analyse and design a framed structure, with load cases and a design summary.", stack: ["STAAD.Pro", "Excel", "IS Codes"], outcome: "Design report" },
    { badge: "Major Project", duration: "6 Months", title: "BIM & Estimation Industrial Training", text: "A full-building project from drawings to quantity take-off and cost estimate.", stack: ["Revit", "Navisworks", "MS Project"], outcome: "Major project report" },
  ],
  ece: [
    { badge: "Most Popular", duration: "6 Weeks", title: "Embedded Systems & IoT Project", text: "Build a sensor-driven device that sends data to a cloud dashboard.", stack: ["Arduino", "ESP32", "C/C++", "MQTT"], outcome: "Working IoT prototype" },
    { badge: "Industry", duration: "6 Weeks", title: "PCB Design & Electronics Lab", text: "Schematic to PCB layout and a tested board.", stack: ["KiCad", "Multisim", "Soldering"], outcome: "Tested PCB design" },
    { badge: "Major Project", duration: "6 Months", title: "Embedded + AI Industrial Training", text: "An edge-AI device project with firmware, model and documentation.", stack: ["Raspberry Pi", "Python", "TensorFlow Lite"], outcome: "Major project report + demo" },
  ],
  mba: [
    { badge: "Most Popular", duration: "6 Weeks", title: "Digital Marketing Live Campaigns", text: "Plan and run a real SEO, social and paid campaign with measured results.", stack: ["Google Ads", "Meta Ads", "SEO", "Analytics"], outcome: "Campaign case study" },
    { badge: "Analytics", duration: "6 Weeks", title: "Business Analytics with Excel & Power BI", text: "Turn raw business data into dashboards and decisions.", stack: ["Excel", "Power BI", "SQL"], outcome: "Dashboard + insights deck" },
    { badge: "Major Project", duration: "6 Months", title: "AI-Powered Marketing Industrial Training", text: "A semester-long marketing project using AI tools, with a final report.", stack: ["ChatGPT", "Canva", "Google Ads", "HubSpot"], outcome: "Major project report" },
  ],
};
