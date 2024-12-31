import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TestimonialCarousel from "../components/Testimonials";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Experience />
      <Projects />
      <TestimonialCarousel />
    </div>
  );
};

export default ExperiencePage;