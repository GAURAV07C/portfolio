"use client";

import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="about" className="py-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Journey</h3>
            <div className="border-l-2 border-primary/20 pl-6 space-y-8">
              {[{month:"Dec", year: "2024", title: "DevAurasion Community", description: "Building the DevAurasion Community website to provide resources, guidance, and support for developers." }].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] h-4 w-4 rounded-full bg-primary" />
                  <div className="bg-card hover-card rounded-lg p-6 shadow-md">
                    <span className="text-sm text-primary font-mono">{item.month}-{item.year}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


