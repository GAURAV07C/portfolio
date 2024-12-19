"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";
import { ResumeModal } from "@/components/ui/resume-modal";
import { FileText, Send } from "lucide-react";

const resumeData = {
  imageUrl: "/images/Gaurav_resume.svg",  // Image URL for the resume preview
  pdfUrl: "/images/Gaurav_Resume.pdf",  // PDF URL for downloading the resume
};

// Profile SVG component
const ProfileSVG = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    style={{
      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
    }}
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "rgb(99, 102, 241)", stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: "rgb(168, 85, 247)", stopOpacity: 0.2 }} />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#gradient)" />
    <circle cx="100" cy="85" r="30" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
    <path
      d="M100 125c-22.091 0-40 12.909-40 35 0 5 35 5 40 5s40 0 40-5c0-22.091-17.909-35-40-35z"
      fill="currentColor"
      className="text-gray-400 dark:text-gray-600"
    />
  </svg>
);

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-sm md:text-base text-primary font-medium">Hi there! 👋</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                I&apos;m <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                {personalInfo.role}
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" variant="gradient" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Send className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsResumeModalOpen(true)}>
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-primary/20">
                <ProfileSVG />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border shadow-lg">
              <p className="text-sm font-medium">@GAURAV07C</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adding a key prop to force remounting when the modal is opened */}
      <ResumeModal 
       resumeData={resumeData}
        key={isResumeModalOpen ? "open" : "closed"}
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
