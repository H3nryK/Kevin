import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChartBar, Globe, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Market Expansion Strategy",
    description: "Spearheaded international market penetration across APAC region, resulting in 200% YoY revenue growth through strategic partnerships and localized marketing initiatives.",
    link: "https://example.com/market-expansion",
    icon: Globe,
    stats: "200% Growth • 5 Markets • $10M Revenue",
    tags: ["International", "Growth", "Strategy"]
  },
  {
    id: 2,
    title: "AI-Powered Digital Transformation",
    description: "Revolutionized operations through implementation of machine learning algorithms and process automation, achieving 40% reduction in operational costs while improving accuracy.",
    link: "https://example.com/digital-transformation",
    icon: Code,
    stats: "40% Cost Reduction • 98% Automation",
    tags: ["AI/ML", "Automation", "Innovation"]
  },
  {
    id: 3,
    title: "Revenue Optimization Program",
    description: "Designed and executed comprehensive revenue optimization strategy, implementing dynamic pricing and customer segmentation to achieve record-breaking profit margins.",
    link: "https://example.com/revenue-optimization",
    icon: ChartBar,
    stats: "150% Profit Increase • $25M Revenue",
    tags: ["Finance", "Analytics", "Growth"]
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

      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {project.stats}
      </div>

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