import Hero from "../components/Hero";
import ContactSection from "../components/Contact";
import SkillsSection from "../components/skills";
import CTASection from "../components/CTA";

import { useState } from "react";

const Main = () => {
  const [isDarkTheme] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero isDarkTheme={isDarkTheme} />
      <SkillsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Main;