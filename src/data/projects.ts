import clawstepImg from "../../public/clawstep.png";
import sarthakStudioImg from "../../public/sarthakstudio.png";

export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  stars?: string;
  technologies?: string[];
  year?: number;
  badge?: {
    icon?: string;
    text: string;
  };
  rankRibbon?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Cloud Notebook",
    description:
      "Full-stack cloud notebook featuring Appwrite BaaS, OAuth authentication, automated Telegram Bot alerts, and edge deployment on Vercel.",
    image: clawstepImg, // import your new notebook screenshot
    liveUrl: "https://clawsteps.com",
    githubUrl: "https://github.com/luckycoding-lab/clawsteps_nextjs",
    technologies: [
      "Next.js",
      "React",
      "Appwrite",
      "OAuth",
      "Telegram Bot",
      "TailwindCSS",
      "Vercel",
    ],
    year: 2026,
    stars: "Vercel Edge",
    badge: {
      icon: "▲",
      text: "Production Ready",
    },
  },
  {
    id: 2,
    title: "Studio Sarthak",
    description:
      "This is a modern, fully responsive frontend for Studio Sarthak, a wedding choreography service.",
    image: sarthakStudioImg,
    liveUrl: "https://sarthakstudio.vercel.app/",
    githubUrl: "https://github.com/luckycoding-lab/sarthakstudio",
    technologies: ["React", "Vite", "Tailwind CSS"],
    year: 2024,
    badge: {
      icon: "▲",
      text: "In Development",
    },
  },
];
