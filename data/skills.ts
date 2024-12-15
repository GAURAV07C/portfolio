interface Skill {
    name: string;
    image: string;
    category: "Frontend" | "Backend" | "Tools" | "Database";
}

export const skills: Skill[] = [
    {
        name: "React",
        image: "/images/skills/dummy-skill.svg",
        category: "Frontend"
    },
    {
        name: "Next.js",
        image: "/images/skills/dummy-skill.svg",
        category: "Frontend"
    },
    {
        name: "Node.js",
        image: "/images/skills/dummy-skill.svg",
        category: "Backend"
    },
    {
        name: "TypeScript",
        image: "/images/skills/dummy-skill.svg",
        category: "Frontend"
    },
    {
        name: "MongoDB",
        image: "/images/skills/dummy-skill.svg",
        category: "Database"
    },
    {
        name: "Express.js",
        image: "/images/skills/dummy-skill.svg",
        category: "Backend"
    },
    {
        name: "Tailwind CSS",
        image: "/images/skills/dummy-skill.svg",
        category: "Frontend"
    },
    {
        name: "Git",
        image: "/images/skills/dummy-skill.svg",
        category: "Tools"
    }
];

export const skillCategories = {
    Frontend: "Building beautiful user interfaces",
    Backend: "Creating robust server applications",
    Database: "Managing and optimizing data",
    Tools: "Version control and development tools",
}; 