import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techStack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}