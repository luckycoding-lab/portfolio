export interface LabItem {
  id: string | number;
  name: string;
  category: string;
  description: string;
  url: string; // GitHub repository URL
  liveUrl?: string; // Deployed Vercel / Live URL (Optional)
  stars?: string | number;
  language: string;
  langColor?: string;
}

export const labsData: LabItem[] = [
  {
    id: "nextjs-notebook",
    name: "Claw Steps | Next.js",
    category: "Full-Stack / Auth / Appwrite / DevOps",
    description:
      "Scalable cloud notebook upgraded to Next.js App Router featuring Appwrite BaaS, OAuth authentication, automated Telegram Bot notifications, and Vercel deployment.",
    url: "https://github.com/luckycoding-lab/clawsteps_nextjs",
    liveUrl: "https://clawsteps.com",
    stars: 5,
    language: "Next.js / Appwrite",
    langColor: "bg-white",
  },
  {
    id: 1,
    name: "Multi-Tenant Student Records",
    category: "Render / Google OAuth 2.0",
    description:
      "All CRUD, search, filter, and batch CSV operations are scoped to prevent cross-tenant data leakage.",
    url: "https://github.com/luckycoding-lab/mern-student-records",
    liveUrl: "https://mern-student-records.vercel.app/", // Vercel link here
    stars: 18,
    language: "MERN application",
    langColor: "bg-emerald-500",
  },
  //   {
  //     id: 2,
  //     name: "javascript-playground",
  //     category: "DOM & Web APIs",
  //     description:
  //       "30+ hands-on vanilla JS mini-projects mastering async & event handling.",
  //     url: "https://github.com/your-username/javascript-playground",
  //     // No liveUrl here -> will only display GitHub
  //     stars: 24,
  //     language: "JavaScript",
  //     langColor: "bg-yellow-400",
  //   },
];
