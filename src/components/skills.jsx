import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brush, Brain, Rocket, Users, LineChart } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      name: "Development",
      level: 90,
      description: "Full-stack development with modern technologies",
      tags: ["React", "Node.js", "Python", "AWS"],
      color: "blue"
    },
    {
      icon: Brain,
      name: "AI & ML",
      level: 85,
      description: "Machine learning and artificial intelligence solutions",
      tags: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      color: "purple"
    },
    {
      icon: Brush,
      name: "Design",
      level: 88,
      description: "UI/UX design and visual storytelling",
      tags: ["Figma", "Adobe XD", "Responsive", "Motion"],
      color: "pink"
    },
    {
      icon: LineChart,
      name: "Analytics",
      level: 92,
      description: "Data analysis and business intelligence",
      tags: ["Tableau", "Power BI", "SQL", "Data Mining"],
      color: "green"
    },
    {
      icon: Users,
      name: "Team Leadership",
      level: 87,
      description: "Project management and team coordination",
      tags: ["Agile", "Scrum", "Mentoring", "Strategy"],
      color: "orange"
    },
    {
      icon: Rocket,
      name: "Innovation",
      level: 89,
      description: "Creative problem-solving and ideation",
      tags: ["R&D", "Prototyping", "MVP", "Optimization"],
      color: "red"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getColorClass = (color) => {
    const colorMap = {
      blue: "bg-blue-500/10 border-blue-500/50 text-blue-500",
      purple: "bg-purple-500/10 border-purple-500/50 text-purple-500",
      pink: "bg-pink-500/10 border-pink-500/50 text-pink-500",
      green: "bg-green-500/10 border-green-500/50 text-green-500",
      orange: "bg-orange-500/10 border-orange-500/50 text-orange-500",
      red: "bg-red-500/10 border-red-500/50 text-red-500"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">My Expertise</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className={`absolute top-0 right-0 rounded-bl-xl rounded-tr-xl px-3 py-1 text-sm font-medium ${getColorClass(skill.color)}`}>
                {skill.level}%
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(skill.color)}`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>

              <p className="text-gray-400 mb-4">{skill.description}</p>

              <div className="relative h-2 bg-gray-700 rounded-full mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`absolute h-full rounded-full ${getColorClass(skill.color)}`}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;