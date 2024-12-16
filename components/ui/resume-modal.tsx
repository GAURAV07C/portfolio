"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Eye } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeData: {
    imageUrl: string;
    pdfUrl: string;
  };
}

export function ResumeModal({ isOpen, onClose, resumeData }: ResumeModalProps) {
  const [isViewing, setIsViewing] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeData.pdfUrl;  // Use dynamic PDF URL
    link.download = "gaurav_resume.pdf";  // You can make this dynamic based on your data if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl sm:max-w-2xl p-6 bg-card rounded-lg shadow-lg overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-4">My Resume</h2>

            <div className="flex gap-4 mb-6">
              <Button variant="outline" onClick={() => setIsViewing(true)}>
                <Eye className="w-4 h-4 mr-2" />
                View Resume
              </Button>
              <Button variant="gradient" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>

            {isViewing && (
              <motion.div
                className="relative w-full aspect-[1/1.4] sm:max-h-[70vh] max-h-[50vh] bg-transparent rounded-lg overflow-hidden"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  maxHeight: "70vh", // limit the max height to 70% of the viewport
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Dynamically load the image based on the URL passed */}
                  <Image
                    src={resumeData.imageUrl}  // Use dynamic image URL
                    alt="Resume Preview"
                    width={700}
                    height={900}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
