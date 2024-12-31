import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ContactSection from "../components/Contact";

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Experience />
      <ContactSection />
    </div>
  );
};

export default Main;