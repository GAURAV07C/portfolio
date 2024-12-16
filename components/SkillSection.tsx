'use client'
import { motion } from "framer-motion";
import { skills } from "@/data/skills"; // Importing the skills data
import Image from "next/image";
import SectionHeading from "./Helper/SectionHeading";

export function SkillSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Skills & Expertise</h3>
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card hover:bg-blue-900 rounded-lg shadow-lg p-6 text-center cursor-pointer"
          >
            {/* Skill Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={skill.image}
                alt={skill.title}
                width={80}
                height={80}
                className="object-cover mx-auto"
              />
            </div>

            {/* Skill Title */}
            <h1 className="text-[18px] mt-4 text-white font-[600]">{skill.title}</h1>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="bg-black rounded-full h-2 w-full opacity-40">
                <motion.div
                  className="bg-gradient-to-r from-primary to-purple-400 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            {/* Percentage Text */}
            <div className="mt-2 text-muted-foreground">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}