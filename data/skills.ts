interface Skill {
    id:number;
    title: string;
    image: string;
    level:number;
    
}

export const skills: Skill[] = [
    {
        id: 1,
        title: "React",
        image: "/skills/react.svg",
        level: 90,
      },
      {
        id: 2,
        title: "CSS",
        image: "/skills/css.svg",
        level: 90,
      },
      {
        id: 3,
        title: "JavaScript",
        image: "/skills/js.svg",
        level: 90,
      },
      {
        id: 4,
        title: "TypeScript",
        image: "/skills/ts.svg",
        level: 90,
      },
      {
        id: 5,
        title: "HTML",
        image: "/skills/html.svg",
        level: 90,
      },
      {
        id: 6,
        title: "Node JS",
        image: "/skills/node.svg",
        level: 90,
      },
      {
        id: 7,
        title: "MongoDB",
        image: "/skills/mongo.svg",
        level: 90,
      },
    
];

export const skillCategories = {
    Frontend: "Building beautiful user interfaces",
    Backend: "Creating robust server applications",
    Database: "Managing and optimizing data",
    Tools: "Version control and development tools",
}; 