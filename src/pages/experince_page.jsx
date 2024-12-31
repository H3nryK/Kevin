import VolunteerExperiences from "../components/volunteer"; 
import TestimonialCarousel from "../components/Testimonials";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <VolunteerExperiences />
      <TestimonialCarousel />
    </div>
  );
};

export default ExperiencePage;