import Hero from "../components/Hero";
import ContactSection from "../components/Contact";
import SkillsSection from "../components/skills";
import CTASection from "../components/CTA";

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <SkillsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Main;