/**
 * Copyright (c) 2025 Sarisa Jaya Surya
 *
 * This file is part of a proprietary project and is governed by the terms in LICENSE.
 * Unauthorized use, modification, or distribution is prohibited. All rights reserved.
 * For permissions, contact yanis.sebastian.zuercher@gmail.com
 */

export interface ProjectPageConfig {
  slug: string;
  title: string;
  description: string;
  date: string;
  silkColor: string;
  silkSpeed?: number;
  silkScale?: number;
  silkNoiseIntensity?: number;
  silkRotation?: number;
  overview: string;
  techStack: string[];
  features: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  mdxPath: string; // required
}

export const projectPagesConfig: Record<string, ProjectPageConfig> = {
  expertLocation: {
    slug: "expertLocation",
    title: "Expert Location & Communication",
    description: "Modern portfolio website built with React and TypeScript",
    date: "February 2025 - Present",
    silkColor: "#FFF0F0",
    silkSpeed: 3,
    silkScale: 1.2,
    silkNoiseIntensity: 1.8,
    silkRotation: 0.3,
    overview:
      "A location-based, real-time chat app for students and teachers. It uses Socket.IO for instant messaging, Firebase Storage for media, and Gemini API to auto-assist when tutors are offline. Built with React, Express, TypeScript, and MongoDB, it’s fully responsive and optimized for quick, context-aware academic help.",
    techStack: [
      "React",
      "Express Js",
      "Socket.IO",
      "Gemini Api",
      "Firebase Storage",
      "MongoDB",
      "TypeScript",
    ],
    features: [
      "Real-time messaging via Socket.IO (presence, typing, read indicators)",
      "Location-based expert discovery and proximity routing",
      "Gemini API fallback: auto-suggest answers when tutor is offline",
      "Image & file uploads with resumable storage (Firebase Storage)",
      "Responsive UI (mobile-first) with accessibility best practices",
      "Secure auth (JWT/session) and role-based access (Student/Tutor/Admin)",
      "Chat threads with subjects/tags and searchable history",
      "Online/offline status, availability windows, and quick handoff",
      "Rate-limit & spam protection for healthy conversations",
      "Scalable backend with Express + MongoDB (indexes for queries)",
      "Configurable notifications (in-app; push-ready)",
      "Extensible plugin hooks for scheduling or whiteboard tools",
    ],
    links: {
      live: "https://expert-location-and-communication.onrender.com/",
      github:
        "https://github.com/suryasarisa99/expert-location-and-communication",
    },
    mdxPath: "expertLocation",
  },
  mitmui: {
    slug: "mitmui",
    title: "MITMUI",
    description: "A modern, responsive UI for mitm using Flutter",
    date: "August 2025 - Present",
    silkColor: "#FF7474",
    silkSpeed: 3,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.2,
    overview:
      "MITMUI is a modern, responsive user interface for the popular mitm tool, designed to enhance user experience with a sleek, intuitive design. Built with Flutter, it provides a cross-platform solution that works seamlessly on all desktop. The UI is designed to be user-friendly, with a focus on simplicity and ease of use, making it accessible for both beginners and experienced users.",
    techStack: ["Flutter", "Dart", "mitmproxy", "Websockets"],
    features: [
      "Cross-platform Desktop Support",
      "Responsive design",
      "Intuitive user interface",
      "Real-time data visualization",
    ],
    links: {
      github: "https://github.com/suryasarisa99/mitmui",
    },
    mdxPath: "mitmui",
  },
  netmirror: {
    slug: "netmirror",
    title: "Netmirror",
    description: "Unoffical Netmirror client, with modern interface",
    date: "May 2025 - Present",
    silkColor: "#1a202c",
    silkSpeed: 3,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.2,
    overview:
      "Netmirror a all in one OTT platform to watch movies and shows, built with Flutter. It is a cross platform supports on desktop and Mobile devices. It provides a modern, responsive interface for accessing and managing your favorite content. The app is designed to be user-friendly, it supports downloading content for offline viewing, and features a sleek.",
    techStack: ["Flutter", "Dart", "SQFLite", "MediaKit", "RiverPod"],
    features: [
      "Cross-platform support",
      "Modern, responsive design",
      "Offline content download",
      "Media playback with MediaKit",
      "User-friendly interface",
      "RiverPod state management",
    ],
    links: {
      github: "https://github.com/suryasarisa99/netmirror",
    },
    mdxPath: "netmirror",
  },
  typingss: {
    slug: "typingss",
    title: "Typingss",
    description: "Customizable advanced typing practice app",
    date: "March 2025 - Present",
    silkColor: "#181A21",
    silkSpeed: 3,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.2,
    overview:
      "Typingss is a Advanced typing practice app with custom word filters, datasets, frequency control, smart random generator, and adjustable word complexity.",
    techStack: ["React", "PWA", "speech-js"],
    features: [
      "Custom word filters",
      "Smart random word generator",
      "Adjustable word complexity",
      "Dataset management",
      "Frequency control",
      "Progress tracking",
      "PWA support",
      "Beautiful Themes",
    ],
    links: {
      live: "https://typingss.vercel.app",
      github: "https://github.com/suryasarisa99/type",
    },
    mdxPath: "typingss",
  },
  auth: {
    slug: "auth",
    title: "2FA",
    description: "Customizable advanced typing practice app",
    date: "March 2025 - Present",
    silkColor: "#289DFA",
    silkSpeed: 3,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.2,
    overview:
      "2FA is a lightweight authenticator app built with React and Express, using Speakeasy for secure OTP generation and Firebase with MongoDB for seamless authentication and storage.",
    techStack: [
      "React",
      "Express.Js",
      "Firebase",
      "MongoDB",
      "speakeasy",
      "PWA",
    ],
    features: [
      "Custom word filters",
      "Smart random word generator",
      "Adjustable word complexity",
      "Dataset management",
      "Frequency control",
      "Progress tracking",
      "PWA support",
      "Beautiful Themes",
    ],
    links: {
      live: "https://2fa-surya.vercel.app/",
      github: "https://github.com/suryasarisa99/auth",
    },
    mdxPath: "auth",
  },
  dietEcap: {
    slug: "dietEecap",
    title: "Diet Ecap",
    description: "Flutter mobile client for ECAP website.",
    overview:
      "Built a Flutter-based mobile app for my college’s ECAP portal by reverse-engineering its network requests, optimizing performance, and creating a mobile-friendly, intuitive user interface.",
    techStack: ["Flutter", "Dart", "html", "Riverpod"],
    features: [
      "Mobile-friendly design",
      "Optimized performance",
      "Intuitive user interface",
      "Offline support",
      "Caching data",
      "Android Material Theme",
    ],
    links: {
      github: "https://github.com/suryasarisa99/diet-ecap",
    },
    date: "January 2025 - Present",
    silkColor: "#f0f4f8",
    mdxPath: "diet-ecap",
    silkSpeed: 4,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.1,
  },
  applicare: {
    slug: "applicare",
    title: "AppliCare",
    description: "Manage your job applications with ease.",
    date: "Dec 2024 - Feb 2025",
    silkColor: "#007bff",
    silkSpeed: 4,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.1,
    overview:
      "A comprehensive job application tracking system built with React and Spring Boot. Features a modern, intuitive interface for managing job applications, interviews, and career progress.",
    techStack: [
      "React (Vite)",
      "Spring Boot",
      "Ant Design",
      "MongoDB",
      "Java",
      "JavaScript",
      "Docker",
      "SEO",
    ],
    features: [
      "Application tracking",
      "Interview scheduling",
      "Progress visualization",
      "Document management",
      "Responsive design",
      "Docker deployment",
    ],
    links: {
      live: "https://applicare.app",
      github: "https://github.com/lyfe691/AppliCare",
    },
    mdxPath: "applicare",
  },

  "code-extractor": {
    slug: "code-extractor",
    title: "Website Code Extractor",
    description:
      "Chrome extension for extracting and downloading website source code",
    date: "November 2024",
    silkColor: "#f59e0b",
    silkSpeed: 5,
    silkScale: 0.9,
    silkNoiseIntensity: 2.0,
    silkRotation: -0.2,
    overview:
      "A powerful Chrome extension that allows developers to easily extract and download the complete source code of any website. Used by 600+ developers worldwide.",
    techStack: ["Chrome Extension", "JSZip", "HTML", "CSS", "JavaScript"],
    features: [
      "One-click extraction",
      "Complete source download",
      "ZIP file generation",
      "Clean folder structure",
      "600+ active users",
      "Chrome Web Store verified",
    ],
    links: {
      live: "https://chromewebstore.google.com/detail/website-code-extractor/foppgeakfpkdghmmmflmblcidoofpohm",
      github: "https://github.com/lyfe691/Website-Code-Extractor",
    },
    mdxPath: "code-extractor",
  },

  onenovel: {
    slug: "onenovel",
    title: "One Novel",
    description:
      "A customizable Windows system information display tool inspired by Neofetch",
    date: "May 2025",
    silkColor: "#E5EBEB",
    silkSpeed: 3,
    silkScale: 1.1,
    silkNoiseIntensity: 1.5,
    silkRotation: 0.2,
    overview:
      "One Novel is a platform where you can earn by referring friends to buy books or by uploading and selling your own. It connects readers and authors while rewarding every interaction.",
    techStack: [
      "React",
      "Express.Js",
      "MongoDB",
      "Firebase",
      "TypeScript",
      "nodemailer",
    ],
    features: [
      "System info display",
      "Image/ASCII art rendering",
      "Block and Braille render modes",
      "Customizable themes",
      "Easy installation via PowerShell",
      "Caching for performance",
    ],
    links: {
      github: "https://github.com/suryasarisa99/one-novel",
    },
    mdxPath: "onenovel",
  },
};

export const getProjectConfig = (slug: string): ProjectPageConfig | null => {
  return projectPagesConfig[slug] || null;
};

export const getAllProjectSlugs = (): string[] => {
  return Object.keys(projectPagesConfig);
};
