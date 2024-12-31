import { useState } from 'react';
import { Calendar, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { GiArchiveResearch } from "react-icons/gi";
import { FaDatabase, FaUserInjured } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";
import { GiWheelbarrow, GiSpiderWeb } from "react-icons/gi";
import { FaMaskFace } from "react-icons/fa6";

const experiences = [
  {
    id: 1,
    role: "Research Scholar",
    company: "iLabAfrica - Nairobi, Kenya",
    duration: "May 2024 - Present",
    startDate: "2024",
    achievements: [
        "Analyzing data to uncover patterns and insights using statistical techniques and exploratory data analysis (EDA).",
        "Developing machine learning models for predictive analytics and optimizing model performance through feature engineering and tuning.",
        "Conducting research on data science topics, authoring reports, and contributing to industry publications and conferences.",
        "Ensuring ethical AI development by assessing risks and compliance with data privacy and ethical frameworks.",
        "Collaborating with cross-disciplinary teams to align research outcomes with stakeholder needs.",
        "Delivering ndings through technical publications and presentations.",
        "Building an ERP system using Frappe Framework.",
        "Conducted training sessions on web development using Python, Django, SQL, HTML, CSS, and JavaScript.",
        "Preparing technical write ups for integrated APIs like Mpesa for secure payment solutions.",
        "Guided students in Big Data Technologies.",
        "Collaborated with stakeholders to align curriculum development with market needs.",
        "Created engaging course materials to simplify complex technical concepts for learners.",
    ],
    skills: ["Leadership", "Strategic Planning", "Digital Transformation"],
    icon: GiArchiveResearch
  },
  {
    id: 2,
    role: "Data Science & Product Management Consultant",
    company: "Guild Code - Nairobi, kenya",
    duration: "Feb 2024 - Aug 2024",
    startDate: "2024",
    achievements: [
        "Designed training programs for aspiring developers, focusing on practical implementation.",
        "Taught Agile methodologies to improve project management and teamwork in tech environments.",
    ],
    skills: ["Operations Management", "Process Optimization", "Team Leadership"],
    icon: FaDatabase,
  },
  {
    id: 3,
    role: "Client Relations Officer",
    company: "eProd Solutions Limited - Nairobi, kenya",
    duration: "September 2022 - May 2023",
    startDate: "2022",
    achievements: [
        "Conducted software testing and provided customer support for technology solutions.",
        "Conducted in-depth analysis and extraction of clients' data using SQL.",
        "Developed and managed reports and dashboards for clients utilizing Power BI and SQL.",
        "Provided quality assurance and software testing support.",
        "Quality Assurance and Software testing.",
        "Offered client support services.",
        "Trained clients on how to set up, install and operate the eprod Software.",
        
    ],
    skills: ["Operations Management", "Process Optimization", "Team Leadership"],
    icon: FaUserInjured,
  }
].sort((a, b) => parseInt(b.startDate) - parseInt(a.startDate));

const work_experiences = [
    {
      id: 1,
      role: "Associate Product Manager",
      company: "eProd Solutions Limited - Nairobi, Kenya",
      duration: "May 2023 - June 2024",
      startDate: "2023",
      achievements: [
        "Enhanced product functionality to improve user experience.",
        "Supervised interns in SQL and Power BI to enable ecient data access and visualization.",
        "Managed Power BI Gateway and created dashboards for analytics.",
        "Conducted system UAT and Beta testing.",
        "Trained clients on how to use agribusiness software.",
        "Headed product management meetings, created and managed jira issues.",
      ],
      skills: ["Leadership", "Strategic Planning", "Digital Transformation"],
      icon: AiFillProduct
    },
    {
      id: 2,
      role: "Data Analyst & Client Relations Officer",
      company: "eProd Solutions Limited - Nairobi, kenya",
      duration: "September 2022 - May 2023",
      startDate: "2022",
      achievements: [
        "Overseeing product enhancements to improve user experience.",
        "Conducted in-depth analysis and extraction of clients' data using SQL.",
        "Developed and managed reports and dashboards for clients utilizing Power BI and SQL.",
        "Provided quality assurance and software testing support.",
        "Quality Assurance and Software testing.",
        "Offered client support services.",
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: FaDatabase,
    },
    {
      id: 3,
      role: "Client Relations Trainee",
      company: "eProd Solutions Limited - Nairobi, kenya",
      duration: "March 2022 - August 2022",
      startDate: "2022",
      achievements: [
        "Analysed and extracted clients' data using SQL.",
        "Learned using Power BI to connect with data on MySQL server and visualization.",
        "Created reports and dashboards for clients using Power BI.",
        "Client relations and support.",
          
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: FaUserInjured,
    },
    {
      id: 4,
      role: "Software Engineer Intern",
      company: "eProd Solutions Limited - Nairobi, kenya",
      duration: "January 2022 - February 2023",
      startDate: "2022",
      achievements: [
        "Developed API documentation for seamless integrations.",
        "Participated in Agile development cycles and contributed to software testing.",
        "Trained in SQL and Power BI for database management and analytics.",  
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: MdEngineering,
    },
    {
      id: 5,
      role: "Information Technology Intern",
      company: "Swahilipot Hub Foundation - Mombasa, kenya",
      duration: "January 2021 - April 2021",
      startDate: "2021",
      achievements: [
        "Developed the ocial website for the foundation.",
        "Supervised community technology events.",
        "Provided IT support to all the departments.",
         
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: MdEngineering,
    },
    {
      id: 6,
      role: "Supervisor",
      company: "Kazi Mtaani programme - Mombasa, kenya",
      duration: "April 2020 - August 2021",
      startDate: "2020",
      achievements: [
        "Analyzed and prepared Ziwa la ng’ombe ward community payment scheme.",
        "Supervised Ziwa la ng’ombe and Kadzandani ward youths doing community-based activities.",
        "Mentored Ziwa la ng’ombe and Kadzandani youth on entrepreneurship, digital and nancial literacy.",
         
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: GiWheelbarrow,
    }
].sort((a, b) => parseInt(b.startDate) - parseInt(a.startDate));

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="absolute left-0 w-0.5 h-full bg-gray-200 dark:bg-gray-600" />
      <div className="ml-6">
        <div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 hover:shadow-xl transition-all cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="absolute -left-3 p-2 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600">
            <experience.icon className={`text-gray-600 dark:text-gray-400`} size={16} />
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-1">
                <span className="font-medium hover:text-blue-600 cursor-pointer flex items-center gap-1">
                  {experience.company} <ArrowUpRight size={14} />
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {experience.duration}
                </span>
              </div>
            </div>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {isExpanded && (
            <div className="mt-4 space-y-4 animate-fadeIn">
              <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 animate-slideInRight"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gray-600`} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-900 
                    text-gray-600 dark:text-gray-400 animate-fadeIn`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id='experience' className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fadeInUp">
          Trainer Experience
        </h2>
        <div className="relative">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fadeInUp">
          Work Experience
        </h2>
        <div className="relative">
          {work_experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;