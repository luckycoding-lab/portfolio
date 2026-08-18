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
    title: "Claw Steps",
    description:
      "Clawsteps is a professional, responsive website designed for a local dog walking service.",
    image: clawstepImg,
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
    image: sarthakStudioImg,
    liveUrl: "https://sarthakstudio.vercel.app/",
    githubUrl: "https://github.com/luckycoding-lab/sarthakstudio",
    technologies: ["React", "Vite", "Tailwind CSS"],
    year: 2024,
    badge: { 
      icon: "▲", 
      text: "In Development" 
    },
  },
];