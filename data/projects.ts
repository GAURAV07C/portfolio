// Define the structure for projects
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  featured: boolean;
  category: string; // Category to filter projects
}

// Example projects data
export const projects: Project[] = [
  {
    title: "Threads Clone",
    description: "A social media platform built with Next.js 13, featuring real-time updates and modern UI.",
    image: "/projects/threads.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Next Auth"],
    link: "https://github.com/GAURAV07C/Threads_clone",
    github: "https://github.com/GAURAV07C/Threads_clone",
    featured: true,
    category: "Full Stack", // Category of the project
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.svg",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/GAURAV07C/portfolio",
    github: "https://github.com/GAURAV07C/portfolio",
    featured: true,
    category: "Frontend", // Category of the project
  },
  // Add more projects as needed
];

export const projectCategories = [
  "All", // Option to show all projects
  "Frontend", // Filter for frontend projects
  "Backend", // Filter for backend projects (add more projects if needed)
  "Full Stack", // Filter for full-stack projects
];
