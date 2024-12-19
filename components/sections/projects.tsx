"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projectsByCategory, filterData } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsByCategory.flatMap((category) => category.projects)
    : projectsByCategory.flatMap((category) =>
        category.projects.filter((project) =>
          selectedCategory === category.category ||
          project.tags.includes(selectedCategory)
        )
      );

  return (
    <section id="projects" className="py-20 min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filterData.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.title ? "gradient" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.title)}
                className="min-w-[100px]"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground">No projects found for this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
