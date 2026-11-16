import type {
  TNavLink,
  TNenType,
  TNenOrb,
  TExperience,
  TProject,
  TCertification,
} from "../types";

export const navLinks: TNavLink[] = [
  { id: "about", title: "License" },
  { id: "exam", title: "Exam" },
  { id: "nen", title: "Nen" },
  { id: "hunts", title: "Hunts" },
  { id: "certs", title: "Certs" },
  { id: "contact", title: "Contact" },
];

// Nen categories mapped to my development focus areas
export const nenTypes: TNenType[] = [
  {
    title: "Enhancer",
    role: "Backend Development",
    icon: "💪",
    blurb: "Java, Spring Boot, Python and SQL: services, APIs and business logic.",
  },
  {
    title: "Conjurer",
    role: "Frontend Development",
    icon: "🎨",
    blurb: "Building and changing user-facing views with JavaScript and the web stack.",
  },
  {
    title: "Transmuter",
    role: "Cloud, CI/CD & Releases",
    icon: "☁️",
    blurb: "AWS, Docker, pipelines and release management from build to deploy.",
  },
  {
    title: "Specialist",
    role: "Support & Mentoring",
    icon: "🎯",
    blurb: "Incident investigation, root-cause fixes and teaching other developers.",
  },
];

export const experiences: TExperience[] = [
  {
    stage: "5th Phase",
    title: "Hackathon Mentor (Volunteer)",
    companyName: "Geekulcha & FNB Hackathons",
    iconBg: "#8a6d12",
    date: "2026",
    points: [
      "Volunteered as a mentor at the Geekulcha Annual Hackathon (GKHack), a large pan-African event; a team I mentored won first place.",
      "Invited to mentor at the FNB App of the Year Hackathon, one of the biggest hackathons in South Africa.",
      "Guided teams on scoping, architecture, debugging and delivering a working solution under time pressure.",
    ],
  },
  {
    stage: "4th Phase",
    title: "Graduate Software Engineer - Full Stack",
    companyName: "BMW IT Hub",
    iconBg: "#1f6b3a",
    date: "January 2026 - Present",
    points: [
      "Developed and changed features across the stack: frontend views, backend services and SQL data handling.",
      "Implemented business-logic and configuration changes in backend code, keeping behaviour consistent across environments.",
      "Took part in release management: preparing builds, coordinating deployments and verifying releases in target environments.",
      "Investigated production and environment issues end to end, tracing data flow to the root cause and shipping the fix.",
      "Wrote scripts and tooling to automate repetitive build, setup and validation tasks, with testing as one part of delivery.",
    ],
  },
  {
    stage: "3rd Phase",
    title: "Technical Mentor",
    companyName: "WeThinkCode",
    iconBg: "#8a6d12",
    date: "September 2025 - December 2025",
    points: [
      "Coach students through programming concepts, debugging and project work.",
      "Run pair-programming and code-review sessions to raise code quality.",
      "Teach Git workflows, web technologies and collaborative development.",
    ],
  },
  {
    stage: "2nd Phase",
    title: "Front Desk Administrator & Tech Support",
    companyName: "WeThinkCode",
    iconBg: "#1f6b3a",
    date: "January 2025 - December 2025",
    points: [
      "Provide front-line technical support across Windows, macOS and internal tools.",
      "Maintain documentation and resolve issues quickly with clear communication.",
    ],
  },
  {
    stage: "1st Phase",
    title: "Customer Service Supervisor",
    companyName: "Drinkworld",
    iconBg: "#8a6d12",
    date: "September 2022 - February 2024",
    points: [
      "Led customer operations in a high-pressure retail environment.",
      "Built the communication and accountability habits I bring to engineering teams.",
    ],
  },
];

// Skills rendered as Nen orbs (kept to ~10 to stay within browser WebGL context limits)
export const nenOrbs: TNenOrb[] = [
  { name: "Java", label: "Java", color: "#f5c542" },
  { name: "Spring Boot", label: "Spring", color: "#3fcf6a" },
  { name: "React", label: "React", color: "#7fd4ff" },
  { name: "Angular", label: "Angular", color: "#e0245e" },
  { name: "Node.js", label: "Node", color: "#3fcf6a" },
  { name: "JavaScript", label: "JS", color: "#f5c542" },
  { name: "TypeScript", label: "TS", color: "#6f8bff" },
  { name: "SQL", label: "SQL", color: "#7fd4ff" },
  { name: "Python", label: "Py", color: "#3fcf6a" },
  { name: "AWS Cloud", label: "AWS", color: "#ff9d3b" },
  { name: "Docker", label: "Docker", color: "#7fd4ff" },
  { name: "Kubernetes", label: "K8s", color: "#6f8bff" },
  { name: "Git", label: "Git", color: "#e0245e" },
];

export const otherSkills: string[] = [
  "Linux/Unix",
  "REST APIs",
  "Flask",
  "CI/CD Pipelines",
  "Release Management",
  "Cloud Architecture",
  "Incident Support",
  "Scripting & Automation",
  "Test Automation",
  "Documentation",
];

export const projects: TProject[] = [
  {
    name: "Hackathon Mentoring",
    icon: "🏆",
    description:
      "Volunteer mentor at the Geekulcha Annual Hackathon (GKHack), where a team I mentored won first place, and invited to mentor at the FNB App of the Year Hackathon, two of South Africa's large-scale developer events.",
    tags: [
      { name: "Mentoring", color: "text-gon" },
      { name: "Hackathons", color: "text-gold" },
      { name: "1stPlace", color: "text-killua" },
    ],
  },
  {
    name: "End-to-End Feature Delivery",
    icon: "🧩",
    description:
      "Built and changed features across the stack: user-facing views, the backend logic behind them and the SQL data they rely on, from requirement through to release.",
    tags: [
      { name: "FullStack", color: "text-gon" },
      { name: "JavaScript", color: "text-gold" },
      { name: "SQL", color: "text-killua" },
    ],
  },
  {
    name: "Backend Services & Business Logic",
    icon: "⚙️",
    description:
      "Developed and maintained backend code and configuration that drives pricing and product behaviour, keeping it correct and consistent across environments.",
    tags: [
      { name: "Java", color: "text-gon" },
      { name: "SpringBoot", color: "text-gold" },
      { name: "APIs", color: "text-killua" },
    ],
  },
  {
    name: "Release Management & Deployments",
    icon: "🚀",
    description:
      "Prepared builds, coordinated deployments and verified releases across environments, working with CI/CD pipelines and version control to ship changes safely.",
    tags: [
      { name: "CI/CD", color: "text-gon" },
      { name: "Git", color: "text-gold" },
      { name: "Releases", color: "text-killua" },
    ],
  },
  {
    name: "Production Support & Root-Cause Fixes",
    icon: "🛠️",
    description:
      "Investigated live issues, traced them through the data flow and fixed the cause, documenting the outcome so the same problem does not return.",
    tags: [
      { name: "Debugging", color: "text-gon" },
      { name: "Support", color: "text-gold" },
      { name: "Linux", color: "text-killua" },
    ],
  },
  {
    name: "Automation & Developer Tooling",
    icon: "🤖",
    description:
      "Scripted repetitive setup, build and validation work and helped prepare repositories for automated testing, so the team could spend more time building.",
    tags: [
      { name: "Python", color: "text-gon" },
      { name: "Scripting", color: "text-gold" },
      { name: "Automation", color: "text-killua" },
    ],
  },
];

export const certifications: TCertification[] = [
  {
    name: "CS50's Introduction to Programming with Python",
    status: "completed",
  },
  { name: "Microsoft AI Fluency Course", status: "completed" },
  { name: "Java Core Certification", status: "completed" },
  { name: "CS50's Introduction to Databases with SQL", status: "completed" },
  { name: "AWS Cloud Practitioner", status: "completed" },
  { name: "AWS Solutions Architect Associate", status: "scheduled" },
  { name: "CompTIA Security+", status: "in-progress" },
];

export const education = [
  {
    title: "Higher National Diploma — Software Engineering",
    place: "WeThinkCode",
    date: "September 2024 - December 2025",
  },
  {
    title: "High School (NSC) — Technical Education",
    place: "John Orr Technical High School",
    date: "December 2021",
  },
];
