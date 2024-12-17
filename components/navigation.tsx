"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Importing Sheet components

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Button
          variant="ghost"
          className="font-bold text-xl hover:text-primary font-samarkan transition-colors"
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          GAURAV07C
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="hover:text-primary transition-colors"
              onClick={() => {
                document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.name}
            </Button>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
               <Menu size={24} />
            </button>
          </SheetTrigger>

          {/* Mobile Navigation - Sheet Content */}
          <SheetContent  className="flex flex-col space-y-4 py-4 px-6 bg-background/80 border-l border-t border-b backdrop-blur-lg">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start hover:text-primary transition-colors"
                onClick={() => {
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Button>
            ))}
            <div className="pt-2 border-t">
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
