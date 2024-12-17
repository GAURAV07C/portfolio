// Define the structure for a project
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string; // Live link or demo
  github: string; // GitHub repository
  featured: boolean;
}

// Define the structure for a project category
export interface ProjectCategory {
  category: string; // e.g., "Full Stack", "Frontend"
  projects: Project[]; // Array of projects in the category
}

// Example projects data organized by category
export const projectsByCategory: ProjectCategory[] = [
  {
    category: "Full Stack",
    projects: [
      {
        title: "Threads Clone",
        description: "A social media platform built with Next.js 13, featuring real-time updates and modern UI.",
        image: "/projects/threads.svg",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Next Auth"],
        link: "https://threads-clone.vercel.app",
        github: "https://github.com/GAURAV07C/Threads_clone",
        featured: true,
      },
    ],
  },
  {
    category: "Frontend",
    projects: [
      {
        title: "Portfolio Website",
        description: "My personal portfolio website built with Next.js and Tailwind CSS.",
        image: "/projects/portfolio.svg",
        tags: ["Next.js", "React", "Tailwind CSS"],
        link: "https://portfolio-gaurav.vercel.app",
        github: "https://github.com/GAURAV07C/portfolio",
        featured: true,
      },
    ],
  },
  // Add more categories and projects as needed
];

export interface FilterData {
  id:number;
  title:string;
}


export const filterData:FilterData[] = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Full Stack",
  },
  {
    id: 3,
    title: "Frontend",
  },
  {
    id: 4,
    title: "Backend",
  },
  
];











