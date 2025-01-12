import VolunteerExperiences from "../components/volunteer"; 
import TestimonialCarousel from "../components/Testimonials";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <VolunteerExperiences />
      <TestimonialCarousel />
    </div>
  );
};

export default ExperiencePage;