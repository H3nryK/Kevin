import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Sema",
    description: "This project aims to build a comprehensive system capable of transcribing audio into text in multiple languages and conducting sentiment analysis on the transcribed text.",
    link: "https://github.com/Kevinobote/Sema",
    icon: Globe,
    tags: ["International", "Growth", "Strategy"]
  },
  {
    id: 2,
    title: "Wave Energy Farm Optimization",
    description: "Wave energy is a promising renewable energy source that captures the energy from ocean waves to generate electricity.",
    link: "https://github.com/Kevinobote/WEC",
    icon: Globe,
    tags: ["Machine Learning", "Energy", "Optimization"]
  },
  {
    id: 3,
    title: "Predicting House Price",
    description: "Predicting house prices using a combination of Linear Regression and Random Forest models. The approach includes data preprocessing, model training, evaluation, and preparing the final submission.",
    link: "https://github.com/Kevinobote/House-Price/blob/main/README.MD",
    icon: Globe,
    tags: ["Machine Learning", "Energy", "Optimization"]
  },
  {
    id: 4,
    title: "Due-Diligence-Project",
    description: "This project aims to demonstrate various data manipulation and analysis tasks using Python. It involves working with Excel datasets, cleaning and organizing data, web scraping, and performing text analysis tasks such as topic modeling and sentiment analysis. Additionally, it includes automating email tasks and converting image files to Excel format.",
    link: "https://github.com/Kevinobote/Due-Diligence-Project/blob/main/README.md",
    icon: Globe,
    tags: ["Machine Learning", "Energy", "Optimization"]
  },
  {
    id: 5,
    title: "Well-being Index of Galaxies",
    description: "The project aims to determine the demographic and socio-economic determinants of the well-being index of galaxies over a period of time and predict future well-being values using machine learning techniques.",
    link: "https://github.com/Kevinobote/Well-being-index-of-Galaxies",
    icon: Globe,
    tags: ["Machine Learning", "Energy", "Optimization"]
  }
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30">
          <Icon className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        <div className="flex gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
      >
        View Project Details
        <ExternalLink size={16} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;