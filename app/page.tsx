import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
// import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { SkillSection } from "@/components/SkillSection";

import { Experience } from "@/components/Experience";

import Services from "@/components/Services/Services";
import About from "@/components/sections/About";


export default function Home() {
  return (
    < >
      <div className=" mx-auto">
      <Navigation />
      <main className="flex min-h-screen flex-col ">
        <Hero />
        
        <About />
        {/* <Services /> */}
        <Services />
        <Experience />
        <SkillSection />
        <Projects />
        <Contact />
      </main>
      </div>
    </>
  );
}
