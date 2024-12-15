import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
// import Skills from "@/components/skills";

export default function Home() {
  return (
    < >
      <Navigation />
      <main className="flex min-h-screen flex-col ">
        <Hero />
        {/* <Skills /> */}
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
