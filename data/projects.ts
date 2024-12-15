interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Threads Clone",
    description: "A social media platform built with Next.js 13, featuring real-time updates and modern UI",
    image: "/projects/threads.svg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Clerk Auth"],
    link: "https://github.com/GAURAV07C/Threads",
    github: "https://github.com/GAURAV07C/Threads",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.svg",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/GAURAV07C/portfolio",
    github: "https://github.com/GAURAV07C/portfolio",
    featured: true
  },
  {
    title: "Task Manager",
    description: "A full-stack task management application with authentication and real-time updates",
    image: "/projects/task-manager.svg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/GAURAV07C/task-manager",
    github: "https://github.com/GAURAV07C/task-manager",
    featured: false
  },
];

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
]; 