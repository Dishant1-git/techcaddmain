import type { CoursePage } from "./types";

export const cyberCloudCourses: CoursePage[] = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity Course",
    navLabel: "Cybersecurity",
    group: "cyber-cloud",
    icon: "ShieldCheck",
    tagline:
      "Learn to defend networks, systems and applications with SOC monitoring, hardening and incident response through hands-on lab work.",
    level: "Beginner",
    duration: "4–6 Months",
    eligibility: "12th pass or above; basic computer knowledge is enough",
    overview: [
      "This cybersecurity course takes you from networking and operating-system fundamentals to the daily work of a security team: monitoring alerts, hardening systems, investigating incidents and reporting risk. Every concept is practised in isolated virtual labs guided by a mentor.",
      "Banks, IT parks, hospitals, government bodies and startups across Punjab, Chandigarh Tricity and Delhi NCR are building security teams. The course is designed for students, graduates and working IT professionals who want a structured path into SOC, security analyst and compliance roles, with placement assistance at the end.",
    ],
    gains: [
      "Strong foundation in networking, Linux, Windows and security concepts",
      "Hands-on SOC practice with SIEM tools such as Splunk and Wazuh in lab environments",
      "Live projects covering hardening, log analysis and incident response reports",
      "Preparation aligned with CompTIA Security+ and similar industry certifications",
      "Course completion certification, resume support and placement assistance",
    ],
    syllabus: [
      {
        title: "Security Fundamentals and Networking Basics",
        summary: "Build the vocabulary and network knowledge every security professional relies on.",
        topics: [
          "CIA triad, threats, vulnerabilities and risk",
          "OSI and TCP/IP models, IP addressing and subnetting",
          "DNS, DHCP, HTTP/HTTPS, TLS and common ports",
          "Firewalls, proxies, VPNs and network segmentation",
          "Setting up a virtual lab with VirtualBox or VMware",
        ],
      },
      {
        title: "Operating System Security",
        summary: "Understand how Windows and Linux systems are configured, secured and audited.",
        topics: [
          "Linux command line, users, permissions and services",
          "Windows accounts, Active Directory basics and Group Policy",
          "System hardening baselines and patch management",
          "Endpoint protection and host-based firewalls",
          "Logging and auditing on Windows and Linux",
        ],
      },
      {
        title: "Cryptography and Identity",
        summary: "Learn how data and identities are protected using encryption and access control.",
        topics: [
          "Symmetric and asymmetric encryption, hashing and digital signatures",
          "PKI, certificates and TLS handshake concepts",
          "Authentication, MFA, SSO and password policy",
          "Role-based access control and least privilege",
          "Secrets handling and key management basics",
        ],
      },
      {
        title: "Network Security and Traffic Analysis",
        summary: "Inspect traffic and secure network perimeters using industry-standard tools.",
        topics: [
          "Packet capture and analysis with Wireshark",
          "Firewall rules, IDS and IPS concepts with Snort and Suricata",
          "Wireless security and secure network design",
          "Discovering hosts and services with Nmap on authorised lab networks",
          "Zero trust principles and secure remote access",
        ],
      },
      {
        title: "Application and Web Security",
        summary: "Recognise common web weaknesses and learn the secure coding habits that prevent them.",
        topics: [
          "OWASP Top 10 explained with defensive fixes",
          "Input validation, session management and secure headers",
          "Using Burp Suite in a lab to understand how vulnerabilities appear",
          "API security fundamentals",
          "Secure development lifecycle and code review basics",
        ],
      },
      {
        title: "Security Operations, SIEM and Threat Detection",
        summary: "Work like a SOC analyst: collect logs, triage alerts and hunt for suspicious activity.",
        topics: [
          "SOC structure, tiers and workflows",
          "Log collection and correlation with Splunk and Wazuh",
          "MITRE ATT&CK framework and detection use cases",
          "Threat intelligence, indicators of compromise and alert triage",
          "Writing clear analyst notes and escalation reports",
        ],
      },
      {
        title: "Incident Response, Forensics and Compliance",
        summary: "Handle a security incident from detection to recovery and align with governance requirements.",
        topics: [
          "Incident response lifecycle: prepare, detect, contain, eradicate, recover",
          "Basic digital forensics and evidence handling",
          "Vulnerability scanning and risk-based remediation",
          "ISO 27001, NIST CSF and India DPDP Act awareness",
          "Business continuity and disaster recovery planning",
        ],
      },
      {
        title: "Capstone Project and Certification Readiness",
        summary: "Deliver an end-to-end security project and prepare for exams and interviews.",
        topics: [
          "Capstone: secure and monitor a small enterprise lab from design to incident report",
          "Exam strategy and practice tests aligned with CompTIA Security+",
          "Overview of CEH, CySA+ and CISSP learning paths",
          "SOC analyst mock interviews and scenario questions",
          "Resume, LinkedIn and portfolio preparation",
        ],
      },
    ],
    tools: [
      "Kali Linux",
      "Wireshark",
      "Nmap",
      "Splunk",
      "Wazuh",
      "Burp Suite",
      "Snort",
      "pfSense",
      "VirtualBox",
      "Windows Server",
      "Ubuntu",
      "Nessus Essentials",
    ],
    projects: [
      {
        title: "Enterprise Network Hardening Lab",
        text: "Design a segmented lab network with firewall rules, host hardening and a documented security baseline.",
        tags: ["pfSense", "Hardening", "Networking"],
      },
      {
        title: "SOC Dashboard with Wazuh",
        text: "Deploy Wazuh agents, collect logs from Windows and Linux hosts and build alert dashboards.",
        tags: ["Wazuh", "SIEM", "Monitoring"],
      },
      {
        title: "Traffic Analysis Investigation",
        text: "Analyse a packet capture in Wireshark to identify suspicious behaviour and write a findings report.",
        tags: ["Wireshark", "Packet Analysis"],
      },
      {
        title: "Vulnerability Assessment Report",
        text: "Scan an authorised lab environment, prioritise findings by risk and recommend remediation steps.",
        tags: ["Nessus", "Risk", "Reporting"],
      },
      {
        title: "Incident Response Playbook",
        text: "Create a playbook and run a simulated incident from detection through containment and lessons learned.",
        tags: ["IR", "Playbook", "MITRE ATT&CK"],
      },
      {
        title: "Secure Web Application Review",
        text: "Review a deliberately vulnerable practice app, map issues to OWASP Top 10 and propose secure fixes.",
        tags: ["OWASP", "Burp Suite", "AppSec"],
      },
    ],
    careers: [
      {
        role: "SOC Analyst",
        work: "Monitors alerts, triages incidents and escalates threats using SIEM tools.",
        hirers: "IT services companies, banks, managed security providers and NOC/SOC teams in Chandigarh, Mohali and Delhi NCR",
      },
      {
        role: "Cybersecurity Analyst",
        work: "Assesses risks, reviews configurations and recommends security improvements.",
        hirers: "Enterprises, fintech firms and consulting companies",
      },
      {
        role: "Vulnerability Management Associate",
        work: "Runs scans, tracks remediation and reports risk to system owners.",
        hirers: "Software companies, telecom and healthcare organisations",
      },
      {
        role: "IT Security Administrator",
        work: "Maintains firewalls, access control, endpoint protection and patching.",
        hirers: "Universities, hospitals, government bodies and mid-sized businesses",
      },
      {
        role: "Compliance and Governance Trainee",
        work: "Supports audits and policy documentation against ISO 27001 and data-protection requirements.",
        hirers: "Auditing firms, BPOs and product companies",
      },
    ],
    whyNow: [
      "Digital payments, cloud adoption and data-protection rules keep raising the demand for trained security staff across every industry.",
      "Organisations in Punjab and North India are setting up SOC and IT-security teams locally, creating openings beyond the metros.",
    ],
    faqs: [
      {
        q: "Do I need coding or networking knowledge before joining?",
        a: "No. The course begins with networking and operating-system basics, so a 12th pass student or a fresher can follow along. Basic comfort with computers is enough.",
      },
      {
        q: "Is this course different from Ethical Hacking?",
        a: "Yes. Cybersecurity focuses on defence: monitoring, hardening, incident response and compliance. Ethical Hacking focuses on authorised penetration testing. Many students take both.",
      },
      {
        q: "Will I practise on real tools?",
        a: "Yes. You work with tools such as Wireshark, Nmap, Splunk, Wazuh and Burp Suite inside isolated virtual labs, guided by a mentor.",
      },
      {
        q: "Does the course prepare me for certifications?",
        a: "The syllabus aligns with CompTIA Security+ topics and introduces CEH, CySA+ and CISSP paths. Exam registration is separate and taken directly with the certifying body.",
      },
      {
        q: "Are classroom and online batches available?",
        a: "Yes. You can join a classroom batch at a TechCADD branch or a live online batch with recorded session access, depending on your location.",
      },
    ],
    related: ["ethical-hacking", "linux", "cloud-computing"],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking Course",
    navLabel: "Ethical Hacking",
    group: "cyber-cloud",
    icon: "Bug",
    tagline:
      "Learn authorised penetration testing in controlled labs, with legal and ethical grounding and a focus on helping organisations fix weaknesses.",
    level: "Intermediate",
    duration: "4–6 Months",
    eligibility: "Graduate or diploma student; basic networking and Linux familiarity recommended",
    overview: [
      "Ethical hacking means testing systems only with written permission, so that weaknesses are found and fixed before real attackers exploit them. This course teaches the penetration testing methodology inside isolated lab environments and treats law, scope and responsible disclosure as core skills, not afterthoughts.",
      "You learn to think like a tester while writing like a consultant: every exercise ends with evidence, risk rating and clear remediation advice. It suits IT graduates, network administrators and developers in Punjab and North India who want to move into security testing and audit roles.",
    ],
    gains: [
      "A clear understanding of the legal framework, scope and rules of engagement for authorised testing",
      "Practice with Kali Linux, Nmap, Burp Suite and Metasploit on purpose-built practice labs",
      "Report-writing skills that turn findings into actionable fixes for developers and managers",
      "Preparation aligned with the EC-Council CEH syllabus and entry-level pentest paths",
      "Live projects, mentor guidance, course certification and placement assistance",
    ],
    syllabus: [
      {
        title: "Ethics, Law and Lab Setup",
        summary: "Understand what is legal, what is permitted and how to build a safe practice environment.",
        topics: [
          "Ethical hacking scope, written authorisation and rules of engagement",
          "IT Act 2000 and data-protection awareness in India",
          "Responsible disclosure and bug bounty etiquette",
          "Building an isolated lab with Kali Linux and practice targets",
          "Penetration testing phases and standards such as PTES and OWASP",
        ],
      },
      {
        title: "Networking and Linux for Security Testers",
        summary: "Strengthen the technical base that every later module builds on.",
        topics: [
          "TCP/IP, ports, protocols and packet flow",
          "Linux command line, file permissions and scripting basics",
          "Bash and Python for simple automation tasks",
          "Understanding firewalls, proxies and VPNs",
          "Note-taking and evidence collection habits",
        ],
      },
      {
        title: "Reconnaissance and Vulnerability Assessment",
        summary: "Map an authorised lab target and identify weaknesses methodically.",
        topics: [
          "Passive information gathering and OSINT within legal limits",
          "Host and service discovery with Nmap in lab networks",
          "Vulnerability scanning with Nessus Essentials and OpenVAS",
          "Interpreting CVEs, CVSS scores and false positives",
          "Prioritising findings by business risk",
        ],
      },
      {
        title: "Web Application Security Testing",
        summary: "Find and explain common web weaknesses using deliberately vulnerable practice applications.",
        topics: [
          "OWASP Top 10 categories and how developers prevent them",
          "Intercepting and inspecting requests with Burp Suite",
          "Authentication, session and access-control weaknesses",
          "Injection and cross-site scripting concepts in practice labs",
          "API testing basics and secure remediation guidance",
        ],
      },
      {
        title: "Network and System Assessment",
        summary: "Assess lab servers and workstations to learn how misconfigurations lead to compromise.",
        topics: [
          "Password policy weaknesses and credential hygiene",
          "Using Metasploit Framework in a controlled lab to validate findings",
          "Windows and Linux privilege escalation concepts and mitigations",
          "Active Directory misconfiguration awareness",
          "Post-test cleanup and restoring lab state",
        ],
      },
      {
        title: "Wireless, Mobile and Cloud Security Awareness",
        summary: "Survey the wider attack surface and the defences that protect it.",
        topics: [
          "Wireless network security standards and common weaknesses",
          "Mobile app security basics with OWASP MASVS",
          "Cloud misconfiguration risks in AWS and Azure",
          "Social engineering awareness and security training for staff",
          "Defensive controls: WAF, EDR and logging",
        ],
      },
      {
        title: "Reporting, Blue-Team Collaboration and Defence",
        summary: "Communicate results professionally and work alongside defenders.",
        topics: [
          "Structure of a penetration testing report",
          "Executive summary versus technical findings",
          "Mapping findings to MITRE ATT&CK for detection teams",
          "Retesting and verifying remediation",
          "Purple-team exercises with SIEM alerts",
        ],
      },
      {
        title: "Capstone Project and CEH Readiness",
        summary: "Complete a full authorised assessment of a lab environment and prepare for exams and interviews.",
        topics: [
          "Capstone: scoped assessment of a lab network and web app with a full report",
          "CEH exam pattern, domains and practice questions",
          "Introduction to CompTIA PenTest+ and OSCP learning paths",
          "Security tester interview questions and scenario discussion",
          "Building a professional portfolio and write-ups",
        ],
      },
    ],
    tools: [
      "Kali Linux",
      "Nmap",
      "Burp Suite",
      "Metasploit Framework",
      "Wireshark",
      "OWASP ZAP",
      "Nessus Essentials",
      "OpenVAS",
      "Hydra",
      "John the Ripper",
      "DVWA",
      "Bash and Python",
    ],
    projects: [
      {
        title: "Scoped Network Assessment Report",
        text: "Perform a permitted assessment of a virtual lab network and document findings with risk ratings.",
        tags: ["Nmap", "Nessus", "Reporting"],
      },
      {
        title: "Web App Security Review",
        text: "Test a practice web application for OWASP Top 10 issues and provide developer-friendly fixes.",
        tags: ["Burp Suite", "OWASP", "AppSec"],
      },
      {
        title: "Password Policy Audit Lab",
        text: "Evaluate password strength and policy in a lab directory and recommend stronger controls.",
        tags: ["Active Directory", "Policy"],
      },
      {
        title: "Vulnerability Prioritisation Matrix",
        text: "Combine CVSS scores and business impact to build a remediation roadmap for a mock company.",
        tags: ["CVSS", "Risk", "Remediation"],
      },
      {
        title: "Purple-Team Detection Exercise",
        text: "Run a scripted lab test and tune SIEM rules so defenders can detect the same activity.",
        tags: ["MITRE ATT&CK", "Wazuh", "Detection"],
      },
      {
        title: "Bug Bounty Style Write-Up",
        text: "Write a responsible-disclosure report for a practice-lab finding with proof, impact and fix.",
        tags: ["Disclosure", "Reporting"],
      },
    ],
    careers: [
      {
        role: "Junior Penetration Tester",
        work: "Performs authorised tests on applications and networks and documents findings.",
        hirers: "Security consulting firms, IT service companies and audit organisations",
      },
      {
        role: "Vulnerability Assessment Analyst",
        work: "Runs scans, validates results and tracks remediation with system owners.",
        hirers: "Banks, fintech companies and enterprise IT teams",
      },
      {
        role: "Application Security Associate",
        work: "Reviews applications during development and guides developers on secure fixes.",
        hirers: "Software product companies and startups in Mohali, Chandigarh and Delhi NCR",
      },
      {
        role: "Security Consultant Trainee",
        work: "Supports client assessments, reporting and awareness sessions.",
        hirers: "Cybersecurity consultancies and managed security providers",
      },
      {
        role: "Purple Team Analyst",
        work: "Bridges testing and detection so that alerts improve after every exercise.",
        hirers: "SOC teams and large enterprises",
      },
    ],
    whyNow: [
      "Regulators, banks and software companies increasingly require regular security testing before applications go live.",
      "Skilled testers who can explain risk in plain language are still scarce, and employers value proven lab work and clear reports.",
    ],
    faqs: [
      {
        q: "Is ethical hacking legal?",
        a: "Yes, when done with written permission and within an agreed scope. The course teaches the legal rules and all practice happens on lab systems that you are authorised to test.",
      },
      {
        q: "Do I need networking or Linux knowledge first?",
        a: "Basic familiarity helps, and the early modules revise networking and Linux. If you are completely new, the Cybersecurity course is a smoother starting point.",
      },
      {
        q: "Will I test real websites or company systems?",
        a: "No. All exercises run on isolated virtual labs and deliberately vulnerable practice applications. Testing any system without permission is illegal and is never part of the course.",
      },
      {
        q: "Does the course cover the CEH exam?",
        a: "The syllabus aligns with the CEH knowledge domains and includes exam-style practice. The exam itself is booked separately with EC-Council.",
      },
      {
        q: "What can I do after this course?",
        a: "You can apply for junior penetration testing, vulnerability assessment and application security roles, or continue toward PenTest+ and OSCP-style certifications.",
      },
    ],
    related: ["cybersecurity", "linux", "python"],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing Course (AWS & Azure)",
    navLabel: "Cloud Computing",
    group: "cyber-cloud",
    icon: "Cloud",
    tagline:
      "Design, deploy and manage cloud infrastructure on AWS and Azure with hands-on labs in networking, containers, automation and DevOps.",
    level: "Beginner",
    duration: "4–6 Months",
    eligibility: "12th pass or above; basic IT or programming familiarity helpful",
    overview: [
      "This cloud computing course teaches you how modern applications are hosted, secured and scaled on AWS and Microsoft Azure. You move from core concepts such as virtual machines, storage and networking to infrastructure as code, containers and CI/CD pipelines.",
      "Companies across Chandigarh Tricity, Delhi NCR and beyond are moving workloads to the cloud and need engineers who can build reliably and control usage. The course suits students, system administrators and developers, and prepares you for cloud roles and vendor certifications with live projects and placement assistance.",
    ],
    gains: [
      "Working knowledge of core AWS and Azure services across compute, storage, networking and identity",
      "Hands-on experience with Linux, Docker, Kubernetes and Terraform",
      "CI/CD pipeline practice with Git and GitHub Actions",
      "Preparation aligned with AWS Cloud Practitioner, AWS Solutions Architect Associate and Azure AZ-900 and AZ-104",
      "Live projects, mentor support, course certification and placement assistance",
    ],
    syllabus: [
      {
        title: "Cloud Concepts and Linux Essentials",
        summary: "Learn what the cloud is, how it is delivered and the Linux skills used everywhere in it.",
        topics: [
          "IaaS, PaaS, SaaS and shared responsibility model",
          "Public, private and hybrid cloud, regions and availability zones",
          "Linux command line, users, permissions and package management",
          "SSH, key pairs and remote administration",
          "Cost awareness and the basics of cloud billing models",
        ],
      },
      {
        title: "AWS Core Services",
        summary: "Build a working environment using the foundational AWS building blocks.",
        topics: [
          "IAM users, roles and policies",
          "EC2 instances, AMIs, security groups and Elastic IPs",
          "S3 storage classes, versioning and static website hosting",
          "VPC, subnets, route tables and gateways",
          "RDS databases, CloudWatch monitoring and alarms",
        ],
      },
      {
        title: "AWS Scaling, Availability and Serverless",
        summary: "Make applications resilient, scalable and event-driven.",
        topics: [
          "Elastic Load Balancing and Auto Scaling groups",
          "Route 53 DNS and CloudFront content delivery",
          "Lambda, API Gateway and event-driven design",
          "SQS, SNS and decoupled architectures",
          "Well-Architected Framework pillars",
        ],
      },
      {
        title: "Microsoft Azure Fundamentals and Administration",
        summary: "Apply the same cloud principles on Azure and compare the two platforms.",
        topics: [
          "Azure subscriptions, resource groups and Azure Portal",
          "Virtual Machines, Storage accounts and Blob storage",
          "Virtual Networks, NSGs and Azure Load Balancer",
          "Microsoft Entra ID and role-based access control",
          "Azure App Service, Azure Monitor and cost management",
        ],
      },
      {
        title: "Containers and Kubernetes",
        summary: "Package applications with Docker and run them on managed Kubernetes.",
        topics: [
          "Docker images, containers, volumes and networks",
          "Writing Dockerfiles and using registries such as ECR and Docker Hub",
          "Kubernetes pods, deployments, services and ingress",
          "Managed clusters: Amazon EKS and Azure AKS overview",
          "ConfigMaps, secrets and basic autoscaling",
        ],
      },
      {
        title: "Infrastructure as Code and CI/CD",
        summary: "Automate infrastructure and application delivery with repeatable pipelines.",
        topics: [
          "Git workflows and branching with GitHub",
          "Terraform providers, state, variables and modules",
          "CI/CD pipelines with GitHub Actions and Jenkins",
          "Deploying containers automatically to the cloud",
          "Monitoring and logging with CloudWatch, Prometheus and Grafana",
        ],
      },
      {
        title: "Cloud Security, Backup and Governance",
        summary: "Protect cloud workloads and plan for failure.",
        topics: [
          "Least privilege, MFA and key management",
          "Encryption at rest and in transit",
          "Backup, snapshots and disaster recovery strategies",
          "Compliance, tagging and budget alerts",
          "Common cloud misconfigurations and how to avoid them",
        ],
      },
      {
        title: "Capstone Project and Certification Readiness",
        summary: "Deploy a complete multi-tier application and prepare for cloud exams and interviews.",
        topics: [
          "Capstone: deploy a scalable web application with Terraform and a CI/CD pipeline",
          "Exam roadmap for AWS Cloud Practitioner and AWS Solutions Architect Associate",
          "Exam roadmap for Azure AZ-900 and AZ-104",
          "Architecture whiteboard practice and cloud interview questions",
          "Resume, GitHub portfolio and LinkedIn preparation",
        ],
      },
    ],
    tools: [
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Git and GitHub",
      "GitHub Actions",
      "Jenkins",
      "Linux",
      "Prometheus",
      "Grafana",
      "Ansible",
    ],
    projects: [
      {
        title: "Highly Available Web Application on AWS",
        text: "Deploy a load-balanced, auto-scaling web app across multiple availability zones with a managed database.",
        tags: ["EC2", "ALB", "RDS"],
      },
      {
        title: "Static Website with CDN and DNS",
        text: "Host a website on S3 with CloudFront delivery, HTTPS and a custom domain.",
        tags: ["S3", "CloudFront", "Route 53"],
      },
      {
        title: "Serverless API",
        text: "Build a REST API using API Gateway and Lambda with a database backend.",
        tags: ["Lambda", "API Gateway", "DynamoDB"],
      },
      {
        title: "Infrastructure as Code with Terraform",
        text: "Provision a full network and compute environment on AWS or Azure from version-controlled code.",
        tags: ["Terraform", "IaC", "Azure"],
      },
      {
        title: "Containerised App on Kubernetes",
        text: "Package a multi-service application with Docker and run it on a managed Kubernetes cluster.",
        tags: ["Docker", "Kubernetes", "EKS"],
      },
      {
        title: "CI/CD Pipeline to the Cloud",
        text: "Automate build, test and deployment with GitHub Actions and monitor the release with dashboards.",
        tags: ["GitHub Actions", "CI/CD", "Grafana"],
      },
    ],
    careers: [
      {
        role: "Cloud Support Associate",
        work: "Troubleshoots cloud environments, manages resources and supports customers or internal teams.",
        hirers: "IT service providers, managed hosting companies and enterprise NOC teams",
      },
      {
        role: "Cloud Engineer",
        work: "Builds and maintains cloud infrastructure, networking and automation.",
        hirers: "Software companies, startups and consulting firms in Mohali, Chandigarh and Delhi NCR",
      },
      {
        role: "DevOps Engineer (Junior)",
        work: "Creates CI/CD pipelines, containers and infrastructure as code for development teams.",
        hirers: "Product companies and digital agencies",
      },
      {
        role: "Cloud Administrator",
        work: "Manages identities, backups, monitoring and cost controls for cloud accounts.",
        hirers: "Banks, healthcare groups and mid-sized enterprises",
      },
      {
        role: "Solutions Architect Trainee",
        work: "Assists in designing secure, scalable architectures based on customer requirements.",
        hirers: "Cloud partners and systems integrators",
      },
    ],
    whyNow: [
      "More businesses, including small and mid-sized firms, are moving applications and data to AWS and Azure, which increases demand for practical cloud skills.",
      "Cloud knowledge now supports many career paths, including DevOps, security, data and AI engineering.",
    ],
    faqs: [
      {
        q: "Do I need programming knowledge to learn cloud computing?",
        a: "No. Basic IT understanding is enough to start. Scripting and configuration files are taught step by step within the course.",
      },
      {
        q: "Why does the course cover both AWS and Azure?",
        a: "Employers use one or both platforms. Learning the shared concepts on each makes you flexible and helps you pick the certification path that suits your career.",
      },
      {
        q: "How will I practise if cloud services need an account?",
        a: "Mentors guide you to set up free-tier or trial accounts and teach you to monitor usage and clean up resources so that labs stay within limits.",
      },
      {
        q: "Does the course prepare for AWS or Azure certifications?",
        a: "Yes. The syllabus is aligned with AWS Cloud Practitioner, AWS Solutions Architect Associate, AZ-900 and AZ-104 topics. Exam registration is separate with the vendor.",
      },
      {
        q: "Is Linux knowledge required?",
        a: "Not beforehand. The first module covers the Linux essentials you need for cloud and container work.",
      },
    ],
    related: ["linux", "cybersecurity", "data-science"],
  },
  {
    slug: "linux",
    title: "Linux Administration Course",
    navLabel: "Linux",
    group: "cyber-cloud",
    icon: "Terminal",
    tagline:
      "Master Linux administration, shell scripting, networking and services, with preparation aligned to RHCSA and LFCS certifications.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; basic computer knowledge",
    overview: [
      "Linux runs most servers, cloud instances, containers and security tools, which makes it a core skill for system administrators, DevOps engineers and security professionals. This course builds command-line confidence and teaches you to install, configure, secure and troubleshoot Linux systems.",
      "Classes are lab-driven on Red Hat family and Ubuntu systems, so you practise everything you learn. It suits students, IT support staff and working professionals in North India who want a dependable route into server administration, NOC and DevOps roles.",
    ],
    gains: [
      "Confident use of the Linux command line, editors and package managers",
      "Skills in user management, permissions, storage, networking and service control with systemd",
      "Bash scripting and task automation with cron",
      "Preparation aligned with the RHCSA and Linux Foundation LFCS exam objectives",
      "Live projects, mentor guidance, course certification and placement assistance",
    ],
    syllabus: [
      {
        title: "Introduction to Linux and the Command Line",
        summary: "Get comfortable with the shell and the Linux file system.",
        topics: [
          "Linux distributions, open source and installation on virtual machines",
          "Filesystem hierarchy and navigation commands",
          "Working with files, directories, links and wildcards",
          "Viewing and searching text with grep, less, find and locate",
          "Manual pages and getting help",
        ],
      },
      {
        title: "Text Processing, Editors and Shell Basics",
        summary: "Use pipes, redirection and editors to work efficiently.",
        topics: [
          "Vim and nano editing essentials",
          "Standard input, output, pipes and redirection",
          "sed, awk, cut, sort and uniq for text processing",
          "Environment variables, aliases and shell profiles",
          "Archiving and compression with tar and gzip",
        ],
      },
      {
        title: "Users, Groups and Permissions",
        summary: "Control who can access what on a Linux system.",
        topics: [
          "Creating and managing users and groups",
          "File permissions, umask and special bits",
          "sudo configuration and the principle of least privilege",
          "Access control lists (ACLs)",
          "SELinux modes and basic troubleshooting",
        ],
      },
      {
        title: "Package, Process and Service Management",
        summary: "Install software and keep services healthy.",
        topics: [
          "dnf, rpm, apt and repository configuration",
          "Processes, signals, priorities and monitoring with top and htop",
          "systemd units, targets and journalctl logs",
          "Scheduling jobs with cron and systemd timers",
          "Boot process and GRUB basics",
        ],
      },
      {
        title: "Storage and File Systems",
        summary: "Manage disks and file systems for real servers.",
        topics: [
          "Disk partitioning with fdisk and parted",
          "Creating and mounting ext4 and XFS file systems",
          "Logical Volume Manager (LVM): extend and manage volumes",
          "fstab, swap space and disk usage tools",
          "Backup and restore with rsync and tar",
        ],
      },
      {
        title: "Networking and Security",
        summary: "Configure network connectivity and protect the server.",
        topics: [
          "IP configuration with NetworkManager and nmcli",
          "DNS resolution, hostnames and troubleshooting with ping, ss and traceroute",
          "Firewall management with firewalld and ufw",
          "Secure remote access with SSH keys and hardening",
          "Log review and basic intrusion prevention with fail2ban",
        ],
      },
      {
        title: "Shell Scripting and Server Services",
        summary: "Automate repetitive tasks and run common services.",
        topics: [
          "Bash scripting: variables, conditions, loops and functions",
          "Writing maintenance and backup scripts",
          "Installing and configuring Apache and Nginx web servers",
          "File sharing with Samba and NFS",
          "Introduction to Git, Docker and Ansible for automation",
        ],
      },
      {
        title: "Capstone Project and RHCSA Readiness",
        summary: "Build and secure a complete Linux server environment and prepare for certification and interviews.",
        topics: [
          "Capstone: deploy, secure, monitor and back up a multi-service Linux server",
          "RHCSA exam objectives and timed practice labs",
          "LFCS objectives overview and practice tasks",
          "Troubleshooting scenarios and system administrator interview questions",
          "Resume and portfolio preparation with a GitHub scripts repository",
        ],
      },
    ],
    tools: [
      "Red Hat Enterprise Linux",
      "AlmaLinux",
      "Ubuntu Server",
      "Bash",
      "systemd",
      "Vim",
      "LVM",
      "firewalld",
      "OpenSSH",
      "Nginx",
      "Apache",
      "Ansible",
    ],
    projects: [
      {
        title: "Secure Web Server Setup",
        text: "Install and harden an Nginx web server with firewall rules, SSH keys and automatic updates.",
        tags: ["Nginx", "firewalld", "SSH"],
      },
      {
        title: "Automated Backup Solution",
        text: "Write Bash scripts and cron jobs that back up data with rsync and rotate old archives.",
        tags: ["Bash", "cron", "rsync"],
      },
      {
        title: "LVM Storage Management Lab",
        text: "Create, extend and snapshot logical volumes, and document the recovery procedure.",
        tags: ["LVM", "XFS", "Storage"],
      },
      {
        title: "User and Access Management Framework",
        text: "Design groups, sudo rules and ACLs for a mock company with different teams.",
        tags: ["Users", "sudo", "ACL"],
      },
      {
        title: "System Monitoring and Log Reports",
        text: "Build scripts that collect resource usage and log summaries and email a daily health report.",
        tags: ["systemd", "journalctl", "Scripting"],
      },
      {
        title: "Configuration Automation with Ansible",
        text: "Automate the setup of multiple lab servers using Ansible playbooks.",
        tags: ["Ansible", "Automation", "YAML"],
      },
    ],
    careers: [
      {
        role: "Linux System Administrator",
        work: "Installs, configures, patches and troubleshoots Linux servers.",
        hirers: "IT service companies, hosting providers, banks and data centres",
      },
      {
        role: "NOC and Technical Support Engineer",
        work: "Monitors servers and networks and resolves incidents following runbooks.",
        hirers: "Managed service providers and BPO tech teams in Chandigarh, Mohali and Delhi NCR",
      },
      {
        role: "DevOps Trainee",
        work: "Supports build servers, deployments and automation on Linux systems.",
        hirers: "Software product companies and startups",
      },
      {
        role: "Cloud Support Associate",
        work: "Manages Linux instances on AWS or Azure and assists with migrations.",
        hirers: "Cloud partners and enterprise IT teams",
      },
      {
        role: "Security Operations Assistant",
        work: "Uses Linux tooling to review logs, harden systems and support incident response.",
        hirers: "SOC teams and cybersecurity firms",
      },
    ],
    whyNow: [
      "Linux underpins cloud platforms, containers and most web servers, so nearly every infrastructure and security role expects command-line skill.",
      "A solid Linux foundation shortens the path to DevOps, cloud and cybersecurity careers.",
    ],
    faqs: [
      {
        q: "Is this course suitable for complete beginners?",
        a: "Yes. It starts from the basics of the command line and moves gradually to administration and scripting, with every concept practised on lab machines.",
      },
      {
        q: "Which Linux distribution will I use?",
        a: "The main labs use a Red Hat family distribution such as AlmaLinux or RHEL for RHCSA alignment, and you also practise on Ubuntu Server, so you can work in both worlds.",
      },
      {
        q: "Will the course help me prepare for RHCSA?",
        a: "The syllabus follows the RHCSA objectives with timed practice tasks. The exam itself is booked directly with Red Hat and is not included in the course.",
      },
      {
        q: "Do I need a powerful laptop?",
        a: "A laptop with 8 GB RAM is comfortable for running virtual machines. Classroom batches also provide lab systems, and mentors help online learners set up their environment.",
      },
      {
        q: "Can I continue to cloud or cybersecurity courses after this?",
        a: "Yes. Linux is the base for both the Cloud Computing and Cybersecurity courses, and many students move on to them after completing this course.",
      },
    ],
    related: ["cloud-computing", "cybersecurity", "ethical-hacking"],
  },
];
