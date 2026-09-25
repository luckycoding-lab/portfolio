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
    title: "Claw Steps | Next.js",
    description:
      "Full-stack cloud notebook featuring Appwrite BaaS, OAuth authentication, automated Telegram Bot alerts, and edge deployment on Vercel.",
    image: "/clawstep.png",
    liveUrl: "https://clawsteps.com",
    githubUrl: "https://github.com/luckycoding-lab/clawsteps_nextjs",
    technologies: [
      "Next.js",
      "Appwrite",
      "OAuth",
      "Telegram Bot",
      "Vercel",
    ],
    year: 2026,
    stars: "5k+ Impressions",
    badge: {
      icon: "▲",
      text: "SEO Optimized",
    },
  },
  {
    id: 2,
    title: "Studio Sarthak",
    description:
      "This is a modern, fully responsive frontend for Studio Sarthak, a wedding choreography service.",
    // image: sarthakStudioImg,
    image: "/sarthakstudio.png",
    liveUrl: "https://sarthakstudio.vercel.app/",
    githubUrl: "https://github.com/luckycoding-lab/sarthakstudio",
    technologies: ["React", "Vite", "Tailwind CSS"],
    year: 2025,
    badge: {
      icon: "▲",
      text: "Production Ready",
    },
  },
];
