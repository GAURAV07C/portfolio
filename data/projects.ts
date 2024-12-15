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
    tags: ["Next.js", "TypeScript", "postgresql", "Next Auth"],
    link: "https://github.com/GAURAV07C/Threads_clone",
    github: "https://github.com/GAURAV07C/Threads_clone",
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
];

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
]; 