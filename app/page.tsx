import { Hero } from "@/components/hero";
import { About, Achievement, Marquee, Process, Proof, TechStack, Work } from "@/components/home-sections";
import { CareerExperience, EducationSection } from "@/components/experience-section";
import { HomeMotion } from "@/components/home-motion";

export default function Home() {
  return (
    <main id="main">
      <HomeMotion>
        <Hero />
        <Proof />
        <Work />
        <Marquee />
        <TechStack />
        <Achievement />
        <CareerExperience />
        <EducationSection />
        <Process />
        <About />
      </HomeMotion>
    </main>
  );
}
