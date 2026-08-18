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
    title: "Claw Steps",
    description:
      "Clawsteps is a professional, responsive website designed for a local dog walking service.",
    image: "/public/clawstep.png",
    liveUrl: "https://clawsteps.com/",
    githubUrl: "https://github.com/luckycoding-lab/clawsteps",
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    year: 2023,
    stars: "5k+ Impression",
    badge: {
      icon: "▲",
      text: "SEO Ready",
    },
    // rankRibbon: '#2 Peerlist',
  },
  {
    id: 2,
    title: "Studio Sarthak",
    description:
      "This is a modern, fully responsive frontend for Studio Sarthak, a wedding choreography service.",
    badge: {
      text: "React Js",
    },
      image:
      "/public/sarthakstudio.png",
    image: "/public/sarthakstudio.png",
    liveUrl: "https://sarthakstudio.vercel.app/",
    githubUrl: "https://github.com/luckycoding-lab/sarthakstudio",
    technologies: ["React", "Vite", "Tailwind CSS"],
    year: 2024,
    badge: { text: "In Development" },
  },
  // ➕ ADD YOUR NEW PROJECTS HERE:
  // {
  //   id: 3,
  //   title: 'My Next App',
  //   description: 'Full-stack MERN application built for high performance.',
  //   image: '/projects/my-app.png',
  //   liveUrl: 'https://myapp.vercel.app',
  //   githubUrl: 'https://github.com/username/myapp',
  // },
];
