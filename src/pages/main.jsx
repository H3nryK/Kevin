import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ContactSection from "../components/Contact";
import SkillsSection from "../components/skills";

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <SkillsSection />
      <Experience />
      <ContactSection />
    </div>
  );
};

export default Main;