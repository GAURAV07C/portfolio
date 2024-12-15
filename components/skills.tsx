import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";  // Ensure correct path
import Image from "next/image";

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, description]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold dark:text-white">{category}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <motion.div
                          className="relative w-12 h-12"
                          whileHover={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            rotate: { duration: 1 },
                          }}
                        >
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            fill
                            className="object-contain dark:invert"
                          />
                        </motion.div>
                        <span className="text-sm font-medium text-center dark:text-white group-hover:text-primary transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
