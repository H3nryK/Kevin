import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, ChartBar, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Market Expansion",
    description: "Led company expansion into 5 new markets, achieving 200% YoY growth",
    category: "Business Strategy",
    metrics: ["200% Growth", "5 Markets", "$10M Revenue"],
    icon: Globe,
    color: "blue"
  },
  {
    id: 2,
    title: "Digital Transformation",
    description: "Implemented AI-driven solutions, reducing operational costs by 40%",
    category: "Technology",
    metrics: ["40% Cost Reduction", "5 Systems", "98% Automation"],
    icon: Code,
    color: "purple"
  },
  {
    id: 3,
    title: "Revenue Optimization",
    description: "Developed and executed strategic initiatives leading to record profits",
    category: "Finance",
    metrics: ["150% Profit Increase", "30% Margin", "$25M Revenue"],
    icon: ChartBar,
    color: "green"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Key Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-${project.color}-100 dark:bg-${project.color}-900 mb-4`}>
                <project.icon className={`text-${project.color}-600 dark:text-${project.color}-400`} size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                {project.category}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {metric}
                  </motion.div>
                ))}
              </div>
              
              <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium">
                Learn More <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;