import VolunteerExperiences from "../components/volunteer";
import Projects from "../components/Projects";
import TestimonialCarousel from "../components/Testimonials";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <VolunteerExperiences />
      <Projects />
      <TestimonialCarousel />
    </div>
  );
};

export default ExperiencePage;