import type { ExperienceItemProps } from "@/components/portfolio/ExperienceItem";
import type { ProjectItemProps } from "@/components/portfolio/ProjectItem";

export const portfolioData = {
  header: {
    name: "Anella Bekena",
    title: "Senior Full Stack Developer",
    description:
      "Full stack developer building scalable multi-tenant platforms on Next.js, Nest.js, and AWS.",
  },

  about: {
    paragraphs: [
      "I'm a developer passionate about building products that bring clarity and connection to people's everyday lives. What excites me most is creating digital experiences that are not only reliable and scalable, but also intuitive and enjoyable to use. I enjoy the challenge of translating complex ideas into solutions that feel simple.",
      "Currently, I work as a Senior Full-Stack Developer, where I help lead the design and implementation of multi-tenant platforms used by organizations and communities. I thrive in collaborative environments working closely with designers, product teams, and other developers to turn ideas into systems that people can depend on.",
      "In the past, I've had the opportunity to contribute across a variety of settings from startups and corporate environments to independent projects. Each experience has deepened my perspective on how software can adapt to different needs while remaining thoughtful, secure, and sustainable.",
      "Outside of work, I'm often exploring new ideas or sketching out concepts for community-focused apps. When I'm not at a screen, you'll usually find me enjoying time outdoors, discovering local cafés, or traveling.",
    ],
  },

  experience: {
    items: [
      {
        period: "Mar 2025 — Present",
        periodAria: "March 2025 to Present",
        title:
          'Senior Full Stack Developer, Supplier Side ("Source Pin") SEGP, MEGP',
        company: "Perago Systems",
        companyUrl: "https://www.peragosystems.com",
        description:
          "Lead development of a multi-tenant e‑procurement platform with Next.js and Hono; architect isolated tenant schemas using Drizzle ORM on PostgreSQL; implement dynamic routing, auth, and RBAC; mentor juniors and collaborate with product and UX for scalable solutions.",
        technologies: [
          "Next.js",
          "Hono",
          "Drizzle ORM",
          "PostgreSQL",
          "TypeScript",
          "RBAC",
        ],
      },
      {
        period: "Sep 2023 — Present",
        periodAria: "September 2023 to Present",
        title: "Full Stack Developer",
        company: "Muyalogy (Jiret / M4 Health)",
        companyUrl: "https://www.muyalogy.com",
        description:
          "Build SaaS multi‑tenant LMS features with Next.js and Nest.js using Server Actions, webhooks, and Drizzle; design modules with product teams; implement S3 file management, Mux uploads, Vercel Blob images; deliver e‑commerce, analytics dashboards, and AI‑powered features.",
        technologies: [
          "Next.js",
          "Nest.js",
          "Drizzle ORM",
          "AWS S3",
          "Mux",
          "Vercel Blob",
        ],
      },
      {
        period: "Apr 2024 — Jun 2025",
        periodAria: "April 2024 to June 2025",
        title: "Backend Developer",
        company: "Aje Africa",
        companyUrl: "https://www.aje.africa/market",
        description:
          "Engineered a bulk email sender with templating for a crypto‑focused e‑commerce app using Node.js and NestJS; documented APIs in Confluence and streamlined workflows with Atlassian tooling.",
        technologies: ["Node.js", "NestJS", "Atlassian", "Confluence"],
      },
    ] as ExperienceItemProps[],
    // Relative path so it resolves under the current locale, e.g. /en/resume
    resumeLink: "resume",
  },

  projects: {
    items: [
      {
        title: "Ongize",
        description:
          "Schedule reminders for yourself and families. Make sure no one misses what's important with phone calls, SMS texts, and email reminders at the perfect time. Perfect for personal, healthcare, business, and special occasions.",
        technologies: [
          "React Native",
          "Next.js",
          "Mantine",
          "LangChain",
          "TypeScript",
          "Hono",
          "PostgreSQL",
        ],
        projectUrl: "https://ongize.com/",
      },
      {
        title: "SEGP / MEGP Supplier Platform",
        description:
          "Multi‑tenant e‑procurement supplier platform with isolated tenant schemas (Drizzle + Postgres), RBAC, and scalable Next.js/Hono architecture.",
        technologies: [
          "Next.js",
          "Hono",
          "Drizzle ORM",
          "PostgreSQL",
          "TypeScript",
        ],
        projectUrl: "https://segp.dev.peragosystems.com/",
      },
      {
        title: "Jiret LMS / M4 Health",
        description:
          "Cloud LMS features including server actions, webhooks, S3 file management, Mux video, and analytics/e‑commerce modules.",
        technologies: ["Next.js", "Nest.js", "Drizzle ORM", "AWS S3", "Mux"],
        projectUrl: "https://www.muyalogy.com/",
      },
    ] as ProjectItemProps[],
    archiveLink: "/archive",
    archive: {
      items: [
        {
          year: 2025,
          title: "Ongize",
          madeAt: "Ongize",
          builtWith: [
            "React Native",
            "Next.js",
            "Mantine",
            "LangChain",
            "TypeScript",
            "Hono",
            "PostgreSQL",
          ],
          linkUrl: "https://ongize.com/",
          linkLabel: "ongize.com",
        },
        {
          year: 2025,
          title: "SEGP / MEGP Supplier Platform",
          madeAt: "Perago Systems",
          builtWith: [
            "Next.js",
            "Hono",
            "Node.js",
            "Drizzle ORM",
            "PostgreSQL",
            "TypeScript",
          ],
          linkUrl: "https://segp.dev.peragosystems.com/",
          linkLabel: "segp.dev.peragosystems.com",
        },
        {
          year: 2024,
          title: "Jiret LMS",
          madeAt: "Muyalogy",
          builtWith: [
            "Next.js",
            "Nest.js",
            "Drizzle ORM",
            "AWS S3",
            "Mux",
            "TypeScript",
            "LangChain",
          ],
          // Multiple links to highlight SaaS presence
          links: [
            { url: "https://www.muyalogy.com/", label: "muyalogy.com" },
            { url: "https://learn.afriwork.com/", label: "learn.afriwork.com" },
            { url: "https://donkeyacademy.com/", label: "donkeyacademy.com" },
          ],
          badges: ["SaaS"],
        },
        {
          year: 2024,
          title: "Vibe",
          madeAt: "Muyalogy",
          builtWith: [
            "Next.js",
            "Nest.js",
            "Drizzle ORM",
            "AWS S3",
            "Mux",
            "TypeScript",
          ],
          linkUrl: "https://vibe.et/",
          linkLabel: "vibe.et",
        },

        {
          year: 2023,
          title: "Buzz Addis",
          madeAt: "Personal",
          builtWith: [
            "Next.js",
            "React Native",
            "Google Maps API",
            "AWS S3",
            "TypeScript",
          ],
          linkUrl: "https://github.com/Bamose",
          linkLabel: "GitHub",
        },
      ],
    },
  },
};
