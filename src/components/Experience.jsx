import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Chief Executive Officer",
    company: "Tech Innovations Inc",
    duration: "2020 - Present",
    description: "Led digital transformation initiatives resulting in 300% revenue growth",
    achievements: [
      "Expanded into 7 new markets",
      "Secured $50M in Series B funding",
      "Built team from 20 to 200+ employees"
    ],
    icon: Briefcase
  },
  {
    id: 2,
    role: "Chief Operating Officer",
    company: "Future Dynamics",
    duration: "2015 - 2020",
    description: "Spearheaded operational excellence program across 5 departments",
    achievements: [
      "Reduced operational costs by 40%",
      "Implemented AI-driven solutions",
      "Achieved record-breaking efficiency metrics"
    ],
    icon: Award
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <experience.icon className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
            <span>{experience.company}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {experience.duration}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;