import Hero from "../components/Hero";
import ContactSection from "../components/Contact";
import SkillsSection from "../components/skills";
import CTASection from "../components/CTA";

import { useState } from "react";

const Main = () => {
  const [isDarkTheme] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero isDarkTheme={isDarkTheme} />
      <SkillsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Main;