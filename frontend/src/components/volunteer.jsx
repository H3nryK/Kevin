import { FaDatabase } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { FaMaskFace } from "react-icons/fa6";

const volunteer_experiences = [
  {
    id: 1,
    role: "Data Analyst Path Lead",
    company: "Genesys Tech Hub",
    duration: "March 2024 - Present",
    startDate: "2024",
    achievements: [
      "Prepared Data Analysis Curriculum.",
      "Coordinated with mentors for tutoring.",
      "Mentored data analysis students on data analysis trends and practices.",
    ],
    skills: ["Leadership", "Strategic Planning", "Digital Transformation"],
    icon: FaDatabase,
  },
  { 
    id: 2,
    role: "Web Development Mentor",
    company: "Genesys Tech Hub",
    duration: "March 2022 - October 2023",
    startDate: "2022",
    achievements: [
      "Tutored web development track.",
      "Mentored web development students on web development trends.",
    ],
    skills: ["Operations Management", "Process Optimization", "Team Leadership"],
    icon: GiSpiderWeb,
  },
  {
    id: 3,
    role: "Red Cross Volunteer",
    company: "Red Cross - Kenya",
    duration: "August 2019 - Present",
    startDate: "2019",
    achievements: [
      "Participated in emergency response operations during the COVID-19 pandemic.",
      "Delivered educational mentorship and organized community outreach programs.",
      "Certified in First Aid through the Red Cross Foundation.",
    ],
    skills: ["Operations Management", "Process Optimization", "Team Leadership"],
    icon: FaMaskFace,
  },
].sort((a, b) => parseInt(b.startDate) - parseInt(a.startDate));

const VolunteerExperiences = () => {
    return (
      <section className="pt-24 px-8 bg-gray-50 dark:bg-gray-900 dark:text-white mb-12">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-400 transition-all duration-300">Volunteer Experiences</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {volunteer_experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative bg-gradient-to-r from-gray-200 dark:from-gray-800 via-gray-100 dark:via-gray-700 to-gray-200 dark:to-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
            >
              <div className="absolute -top-10 left-6 bg-indigo-500 text-gray-200  dark:text-gray-900 p-4 rounded-full shadow-lg">
                <experience.icon size={40} />
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{experience.role}</h3>
              <p className="text-indigo-800 dark:text-indigo-300 italic">{experience.company}</p>
              <p className="dark:text-gray-400 text-gray-800 text-sm">{experience.duration}</p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2 dark:text-gray-300">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">Skills:</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-700 text-white dark:text-indigo-200 text-sm rounded-full shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default VolunteerExperiences;
