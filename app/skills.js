import { FaCode } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi2";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiDatabase } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { PiLightning } from "react-icons/pi";
import { GoTools } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";
import { CiMobile2 } from "react-icons/ci";
import { GrLaunch } from "react-icons/gr";
import { GoVersions } from "react-icons/go";

export const skillsDetails = [
  {
    icon: FaCode,
    gradient: "bg-gradient-to-r from-blue-500 to-purple-500",
    category: "Core Expertise",
    skills: [
      "Vue.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Web Components",
      "Lit-HTML",
    ],
  },
  {
    icon: RiStackLine,
    gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Vue.js",
      "Pinia",
      "VueX",
      "Redux",
      "Next.js",
      "React Query",
    ],
  },
  {
    icon: IoColorPaletteOutline,
    gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
    category: "Styling & Design",
    skills: ["Tailwind CSS", "SCSS", "Responsive Design"],
  },
  {
    icon: GoTools,
    gradient: "bg-gradient-to-r from-orange-500 to-amber-500",
    category: "Development Tools",
    skills: ["Git & GitHub", "npm", "StoryBook"],
  },
  {
    icon: PiLightning,
    gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
    category: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Testing Library Vue",
      "ESLint",
      "Prettier",
      "Accessibility (WCAG)",
    ],
  },
  {
    icon: CiDatabase,
    gradient: "bg-gradient-to-r from-red-500 to-pink-500",
    category: "Backend & APIs",
    skills: ["REST APIs"],
  },
  {
    icon: TbWorld,
    gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    category: "Performance & SEO",
    skills: [
      "Web Vitals",
      "Code Splitting",
      "Lazy Loading",
      "SEO Best Practices",
    ],
  },
  {
    icon: CiMobile2,
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    category: "Domain Experience",
    skills: ["Fintech Solutions", "E-commerce Platforms", "B2B"],
  },
  {
    icon: GoVersions,
    gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    category: "Build & Release",
    skills: ["CI/CD pipelines", "Monorepo", "Versioning"],
  },
];

export const additionalStrengths = [
  "Agile/Scrum Methodologies",
  "Problem Solving",
  "Performance Optimization",
  "Responsive Design",
  "Team Collaboration",
  "Mentoring & Code Reviews",
];

export const timeLine = [
  {
    time: "2018",
    title: "Started Front-End Journey",
    subtitle: "Wunderman Thompson Commerce",
    content:
      "Began career in web development in e-commerce, focusing on creating responsive and accessible interfaces for several B2B clients and implementing A/B tests to continuously improve user experience.",
    icon: GrLaunch,
    color: "bg-blue-500",
  },
  {
    time: "2021",
    title: "Automotive Industry",
    subtitle: "EVBOX",
    content:
      "Worked at EVBOX, where I contributed to redesigning the company website and creating new application to support an upcoming product launch.",
    icon: HiOutlineCalendar,
    color: "bg-red-500",
  },
  {
    time: "2022",
    title: "Front-end Developer",
    subtitle: "ING via Sogeti",
    content:
      "Worked at ING via Sogeti, where I contributed to maintaining and developing multiple features, resolving production issues, managing releases, reducing technical debt, and implementing Adobe Analytics to monitor and improve user behavior insights. I was also involved in the Angular migration and the transition toward a micro-frontend architecture, helping modernize and streamline the overall application landscape.",
    icon: HiOutlineUserGroup,
    color: "bg-purple-500",
  },
  {
    time: "2025",
    title: "Front-end Developer",
    subtitle: "Sogeti",
    content:
      "Back from maternity leave and currently helping the company create custom components for the upcoming event. I’m also using this time to reconnect with colleagues, get back into the rhythm, and pick up new learnings along the way.",
    icon: HiOutlineUserGroup,
    color: "bg-purple-500",
  },
];

export const projects = [
  {
    title: "Movie Maze App in Next",
    content: "",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    src: "/assets/movie-maze-next.png",
    alt: "Movie Maze App in Next",
    link: "https://tv-show-explorer-five.vercel.app/",
  },
  {
    title: "Movie Maze App in Vue",
    content: "",
    tech: ["Vue.js", "Tailwind CSS", "TypeScript"],
    src: "/assets/movie-maze.png",
    alt: "Movie Maze App in Vue",
    link: "https://tv-maze-peach.vercel.app/",
  },
];
