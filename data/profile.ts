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
  description?: string;
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
  emoji: string;
  name: string;
  description: string;
  whatIBuilt: string;
  techStack: string[];
  features: string[];
  architecture: string[];
  githubUrl: string;
  demoUrl: string;
  screenshot: string;
  logoUrl?: string;
  screenshotsFolderUrl?: string;
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
    "I'm a QA Automation Engineer focused on building reliable, maintainable test automation for web, API, and mobile applications. I enjoy turning repetitive testing into scalable automation, designing reusable frameworks, and integrating tests into CI/CD pipelines. My current focus is Playwright, TypeScript, API automation, and SDET practices.",
  highlights: [
    "Playwright",
    "TypeScript",
    "API Automation",
    "CI/CD",
    "SDET",
    "Mobile Testing",
  ],
};

export const achievements: Achievement[] = [
  {
    value: "⚙️",
    label: "Framework Design",
    icon: "wrench",
    description: "Reusable and maintainable automation frameworks",
  },
  {
    value: "🤖",
    label: "Automation",
    icon: "bot",
    description: "Web • API • Mobile test automation",
  },
  {
    value: "🔄",
    label: "CI/CD",
    icon: "refresh",
    description: "Automated test execution and reporting",
  },
  {
    value: "🐛",
    label: "Quality Engineering",
    icon: "bug",
    description: "Defect analysis and production quality — 140+ issues caught",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Automation",
    skills: ["Playwright", "Selenium", "Cypress", "Appium", "Patrol"],
  },
  {
    name: "API & Performance",
    skills: ["Postman", "REST Assured", "JMeter"],
  },
  {
    name: "Programming",
    skills: ["Java", "TypeScript", "JavaScript", "Dart"],
  },
  {
    name: "Framework & Engineering",
    skills: ["TestNG", "POM", "Maven", "Allure", "CI/CD"],
  },
  {
    name: "Tools",
    skills: ["Jenkins", "GitHub Actions", "Git", "Jira", "MySQL"],
  },
];

export const certifications: Certification[] = [
  {
    name: "ISTQB CTFL v4.0",
    issuer: "ISTQB",
    featured: true,
    year: "2026",
  },
  {
    name: "SQL Fundamentals",
    issuer: "Online Course",
    year: "2023",
  },
  {
    name: "Cyber-Security and IoT",
    issuer: "Online Course",
    year: "2021",
  },
  {
    name: "JavaScript & JQuery From Scratch",
    issuer: "Online Course",
    year: "2022",
  },
  {
    name: "Automate the Boring Stuff with Python",
    issuer: "Online Course",
    year: "2022",
  },
  {
    name: "Object-Oriented Programming Using Java",
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
    id: "playwright-framework",
    emoji: "🎭",
    name: "Playwright TypeScript Automation Framework",
    description: "Scalable E2E automation framework with parallel execution and CI/CD integration.",
    whatIBuilt:
      "A scalable end-to-end automation framework designed for maintainable and parallel test execution across multiple browsers, with built-in reporting and CI/CD pipeline integration.",
    techStack: ["TypeScript", "Playwright", "POM", "Fixtures", "Allure", "CI/CD"],
    features: [
      "Page Object Model",
      "Reusable fixtures",
      "Web-first assertions",
      "Parallel execution",
      "Cross-browser testing",
      "Screenshots & traces",
      "Allure reporting",
      "CI/CD integration",
    ],
    architecture: ["Tests", "Page Objects", "Fixtures / Utilities", "Playwright", "Browser"],
    githubUrl: "https://github.com/sonurprajapati/playwright-typescript-automation-framework",
    screenshotsFolderUrl: "https://drive.google.com/drive/folders/1lLr-0JMwo3U02sYPww2ligpHb92g5T84?usp=drive_link",
    demoUrl: "#",
    screenshot: "/projects/playwright.png",
    logoUrl: "https://playwright.dev/img/playwright-logo.svg",
  },
  {
    id: "selenium-framework",
    emoji: "🧪",
    name: "Selenium Java TestNG Automation Framework",
    description: "Enterprise-grade WebDriver framework with POM, data-driven tests, and Allure reporting.",
    whatIBuilt:
      "A robust enterprise-grade WebDriver framework built on Page Object Model, designed for data-driven, parallel test execution with comprehensive Allure reporting and Jenkins CI/CD integration.",
    techStack: ["Java", "Selenium", "TestNG", "Maven", "Allure", "Jenkins"],
    features: [
      "Page Object Model",
      "Data-driven testing",
      "Parallel execution via TestNG",
      "Cross-browser support",
      "Allure reporting",
      "Jenkins CI/CD",
      "Maven build management",
      "Reusable base utilities",
    ],
    architecture: ["Tests", "Page Objects", "Base Classes", "Selenium WebDriver", "Browser"],
    githubUrl: "https://github.com/sonurprajapati/selenium-java-testng-automation-framework",
    screenshotsFolderUrl: "https://drive.google.com/drive/folders/15CLJF7lICtYB6wx46vav3wKwBJcYxTgz?usp=drive_link",
    demoUrl: "#",
    screenshot: "/projects/selenium.png",
    logoUrl: "https://www.selenium.dev/images/selenium_logo_square_green.png",
  },
  {
    id: "appium-framework",
    emoji: "📱",
    name: "Appium Java Mobile Automation Framework",
    description: "Cross-platform mobile automation for Android & iOS with BrowserStack and parallel execution.",
    whatIBuilt:
      "A cross-platform mobile automation framework for Android and iOS, leveraging Appium with cloud device farm integration via BrowserStack, parallel test execution, and full Allure reporting.",
    techStack: ["Java", "Appium", "TestNG", "BrowserStack", "Allure", "Maven"],
    features: [
      "Android & iOS support",
      "Cross-platform capabilities",
      "BrowserStack cloud integration",
      "Parallel device execution",
      "Page Object Model",
      "Allure reporting",
      "Device farm support",
      "CI/CD pipeline",
    ],
    architecture: ["Tests", "Page Objects", "Appium Driver", "BrowserStack / Device Farm", "Android / iOS"],
    githubUrl: "https://github.com/sonurprajapati/appium-java-test-automation-framework",
    screenshotsFolderUrl: "https://drive.google.com/drive/folders/1zyjEWPrjkVKbYnbXW8H_Jlyn_Pm9fSY7?usp=drive_link",
    demoUrl: "#",
    screenshot: "/projects/appium.png",
    logoUrl: "https://avatars.githubusercontent.com/u/3221291?s=200&v=4",
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
