export interface PersonalInfo {

  name: string;
  title: string;
  location: string;
  tagline: string;
  email: string;
  resumeUrl: string;
  istqbBadge: {
    label: string;
    version: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "email" | "location";
}

export interface Achievement {
  value: string;
  label: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  featured?: boolean;
  year?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  highlights: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  screenshot: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface AboutContent {
  summary: string;
  highlights: string[];
}

export const personalInfo: PersonalInfo = {

  name: "Sonu Prajapati",
  title: "QA Automation Engineer | SDET | ISTQB Certified",
  location: "Mumbai, India",
  tagline:
    "Building reliable automation frameworks that ship quality at scale — from REST APIs to mobile and CI/CD pipelines.",
  email: "sonurprajapati1112@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1zN8pRto4EXrN-wk0egVVke-XGLhw-CWe/view?usp=sharing",
  istqbBadge: {
    label: "ISTQB Certified",
    version: "CTFL v4.0",
  },
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sonuprajapati",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/sonurprajapati",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:sonurprajapati1112@gmail.com",
    icon: "email",
  },
  {
    name: "Location",
    url: "https://maps.google.com/?q=Mumbai,India",
    icon: "location",
  },
];

export const aboutContent: AboutContent = {
  summary:
    "QA Automation Engineer with 4+ years of experience delivering high-quality software through robust test automation, API validation, and CI/CD integration. Passionate about building scalable frameworks that empower teams to ship with confidence.",
  highlights: [
    "Automation",
    "API Testing",
    "Mobile Testing",
    "CI/CD",
    "Agile",
  ],
};

export const achievements: Achievement[] = [
  { value: "4+", label: "Years Experience", icon: "calendar" },
  { value: "140+", label: "Production Bugs", icon: "bug" },
  { value: "5+", label: "Automation Frameworks", icon: "code" },
  { value: "6+", label: "Certifications", icon: "award" },
  { value: "2+", label: "Companies", icon: "building" },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "JavaScript", "Dart"],
  },
  {
    name: "Web Automation",
    skills: ["Selenium", "Cypress"],
  },
  {
    name: "Mobile Automation",
    skills: ["Appium", "Patrol"],
  },
  {
    name: "API Testing",
    skills: ["REST Assured", "Postman"],
  },
  {
    name: "CI/CD",
    skills: ["Jenkins", "GitHub Actions", "GitLab"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    name: "Tools",
    skills: [
      "Jira",
      "TestRail",
      "TestLink",
      "Confluence",
      "Sentry",
      "Allure",
    ],
  },
  {
    name: "Platforms",
    skills: ["Windows", "Linux", "macOS"],
  },
];

export const certifications: Certification[] = [
  {
    name: "ISTQB CTFL v4.0",
    issuer: "ISTQB",
    featured: true,
    year: "2024",
  },
  {
    name: "SQL Fundamentals",
    issuer: "Online Course",
    year: "2023",
  },
  {
    name: "Automate the Boring Stuff with Python",
    issuer: "Online Course",
    year: "2022",
  },
  {
    name: "JavaScript & JQuery From Scratch",
    issuer: "Online Course",
    year: "2022",
  },
  {
    name: "Cybersecurity and IoT",
    issuer: "Online Course",
    year: "2021",
  },
  {
    name: "Bootstrap Masterclass",
    issuer: "Online Course",
    year: "2021",
  },
];

export const experience: Experience[] = [
  {
    company: "Qube Health",
    role: "QA Automation Engineer / SDET",
    period: "Sep 2023 – Present",
    startDate: "2023-09",
    endDate: null,
    highlights: [
      "REST API Testing",
      "REST Assured",
      "Jenkins",
      "Flutter Automation",
      "Patrol",
      "Firebase Test Lab",
      "Allure",
      "Sentry",
      "MySQL",
      "140+ Production Issues",
    ],
  },
  {
    company: "Quantum TCS Inc.",
    role: "QA Automation Engineer",
    period: "Jan 2022 – Sep 2023",
    startDate: "2022-01",
    endDate: "2023-09",
    highlights: [
      "Selenium",
      "Cypress",
      "Appium",
      "JMeter",
      "Postman",
      "Jira",
      "TestRail",
    ],
  },
  {
    company: "Quantum TCS Inc.",
    role: "QA Engineer",
    period: "Aug 2021 – Jan 2022",
    startDate: "2021-08",
    endDate: "2022-01",
    highlights: ["Manual Testing", "UAT", "Defect Tracking"],
  },
];

export const projects: Project[] = [
  {
    id: "selenium-framework",
    name: "Selenium Framework",
    description:
      "Enterprise-grade Selenium WebDriver framework with Page Object Model, parallel execution, and Allure reporting integration.",
    techStack: ["Java", "Selenium", "TestNG", "Maven", "Allure"],
    githubUrl: "https://github.com/sonuprajapati/selenium-framework",
    demoUrl: "#",
    screenshot: "/projects/selenium.png",
  },
  {
    id: "cypress-framework",
    name: "Cypress Framework",
    description:
      "Modern E2E testing framework with custom commands, API intercepts, and CI/CD pipeline integration for fast feedback loops.",
    techStack: ["JavaScript", "Cypress", "Mocha", "GitHub Actions"],
    githubUrl: "https://github.com/sonuprajapati/cypress-framework",
    demoUrl: "#",
    screenshot: "/projects/cypress.png",
  },
  {
    id: "rest-assured-framework",
    name: "REST Assured Framework",
    description:
      "Comprehensive API testing framework with schema validation, data-driven tests, and Jenkins pipeline for continuous API quality.",
    techStack: ["Java", "REST Assured", "TestNG", "Jenkins", "JSON Schema"],
    githubUrl: "https://github.com/sonuprajapati/rest-assured-framework",
    demoUrl: "#",
    screenshot: "/projects/rest-assured.png",
  },
  {
    id: "appium-framework",
    name: "Appium Framework",
    description:
      "Cross-platform mobile automation framework supporting Android and iOS with device farm integration and parallel test execution.",
    techStack: ["Java", "Appium", "TestNG", "BrowserStack", "Allure"],
    githubUrl: "https://github.com/sonuprajapati/appium-framework",
    demoUrl: "#",
    screenshot: "/projects/appium.png",
  },
  {
    id: "flutter-patrol-framework",
    name: "Flutter Patrol Framework",
    description:
      "Native Flutter integration testing framework using Patrol for widget tests, native automation, and Firebase Test Lab deployment.",
    techStack: ["Dart", "Flutter", "Patrol", "Firebase Test Lab", "Allure"],
    githubUrl: "https://github.com/sonuprajapati/flutter-patrol-framework",
    demoUrl: "#",
    screenshot: "/projects/patrol.png",
  },
];

export const education: Education[] = [
  {
    degree: "M.Sc Information Technology",
    institution: "University of Mumbai",
    period: "2019 – 2021",
  },
  {
    degree: "B.Sc Information Technology",
    institution: "University of Mumbai",
    period: "2016 – 2019",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "selenium-vs-cypress",
    title: "Selenium vs Cypress: Choosing the Right Web Automation Tool",
    excerpt:
      "A practical comparison of Selenium and Cypress for modern web testing — covering speed, debugging, CI integration, and team fit.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Web Automation",
  },
  {
    slug: "appium-setup-guide",
    title: "Appium Setup Guide: Mobile Automation from Zero to First Test",
    excerpt:
      "Step-by-step guide to setting up Appium for Android and iOS testing, including environment configuration and best practices.",
    date: "2024-10-20",
    readTime: "12 min read",
    category: "Mobile Testing",
  },
  {
    slug: "rest-assured-best-practices",
    title: "REST Assured Best Practices for API Test Automation",
    excerpt:
      "Patterns and practices for building maintainable API test suites with REST Assured — schema validation, reusable specs, and reporting.",
    date: "2024-09-05",
    readTime: "10 min read",
    category: "API Testing",
  },
  {
    slug: "jenkins-cicd-for-qa",
    title: "Jenkins CI/CD for QA: Automating Your Test Pipeline",
    excerpt:
      "How to integrate automated tests into Jenkins pipelines for continuous quality — parallel runs, Allure reports, and failure notifications.",
    date: "2024-08-12",
    readTime: "9 min read",
    category: "CI/CD",
  },
  {
    slug: "flutter-automation-with-patrol",
    title: "Flutter Automation with Patrol: Native Integration Testing",
    excerpt:
      "Leveraging Patrol for Flutter app testing — widget tests, native dialogs, and Firebase Test Lab integration for mobile QA.",
    date: "2024-07-18",
    readTime: "11 min read",
    category: "Mobile Testing",
  },
];

export const siteConfig = {
  url: "https://sonuprajapati.dev",
  ogImage: "/og-image.png",
  keywords: [
    "QA Automation Engineer",
    "SDET",
    "ISTQB Certified",
    "Selenium",
    "Cypress",
    "Appium",
    "REST Assured",
    "Test Automation",
    "Mumbai",
    "India",
  ],
};
