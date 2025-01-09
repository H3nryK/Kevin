import { motion } from 'framer-motion';
import { Code, Brush, Brain, Users, LineChart } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      name: "Product Management",
      level: 90,
      color: "blue",
      companies: [
        { name: "Guild Code", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEL9zsVzL_9CA/company-logo_100_100/company-logo_100_100/0/1711213585807?e=1743638400&v=beta&t=qVGopot9Y2ezJh5ANCaERWf2sbzpqjlDo_rmQQTSq8U", alt: "Guild Code Logo", website: "https://guild-code.com"},
        { name: "eProd", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHFtsDYGZroTg/company-logo_100_100/company-logo_100_100/0/1729694846208/eprod_solutions_limited_logo?e=1743638400&v=beta&t=uL8UrbbU1Ait9759lYp8hRenW8QGedTIZa6uF8VRXm0", alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
        { name: "Alx", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG6KNMnwz5Rug/company-logo_100_100/company-logo_100_100/0/1731438508591/alxafrica_logo?e=1743638400&v=beta&t=c7cPEK3MqIHnCrUUB-mwyCiKi5kgDEVxaB_C6uVByDY", alt: "ALx Logo", website: "https://www.alxafrica.com/" }
      ]
    },
    {
      icon: Brain,
      name: "Machine Learning",
      level: 93,
      color: "purple",
      companies: [
        { name: "Guild Code", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEL9zsVzL_9CA/company-logo_100_100/company-logo_100_100/0/1711213585807?e=1743638400&v=beta&t=qVGopot9Y2ezJh5ANCaERWf2sbzpqjlDo_rmQQTSq8U", alt: "Guild Code Logo", website: "https://guild-code.com" },
        { name: "eProd", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHFtsDYGZroTg/company-logo_100_100/company-logo_100_100/0/1729694846208/eprod_solutions_limited_logo?e=1743638400&v=beta&t=uL8UrbbU1Ait9759lYp8hRenW8QGedTIZa6uF8VRXm0", alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
        { name: "AfroCom", logo: "https://media.licdn.com/dms/image/v2/C560BAQE4eOGEdYluxw/company-logo_100_100/company-logo_100_100/0/1645640307620/afro_community_logo?e=1743638400&v=beta&t=R0DTleQOfe1ZfyUDYiSVWz18nsrFIEiTdmTw3QYtjHc", alt: "AfroCom Logo", website: "" },
        { name: "EploreAI Academy", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHZ-oPtwLCzYQ/company-logo_100_100/company-logo_100_100/0/1685380849925/explore_ai_academy_logo?e=1743638400&v=beta&t=gffhuo5EGm-RzL_UGTjHdZcCvlH2gDNAQv6yoTfriO8", alt: "ExploreAI Academy Logo", website: "" },
        { name: "Strathmore Uni", logo: "https://media.licdn.com/dms/image/v2/C560BAQGI7hayoKIULA/company-logo_100_100/company-logo_100_100/0/1631339833077?e=1743638400&v=beta&t=r5nipjT_uaARZr9hoAOXg4vJxTTtZLBCo0I42XCM3Uo", alt: "Strathmore Uni Logo", website: "https://strathmore.edu/" },
        { name: "Machakos Uni", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEcfcrvhdOgEQ/company-logo_100_100/company-logo_100_100/0/1631322329086?e=1743638400&v=beta&t=uAZq-nDqEUNVpz894ypfA19EGfJmtykuKyZRaPJugU4", alt: "MKSU Logo", website: "https://mksu.ac.ke" }
      ]
    },
    {
      icon: Brush,
      name: "Data Science",
      level: 88,
      color: "pink",
      companies: [
        { name: "iLabAfrica", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHp9yj_NF-M7g/company-logo_100_100-alternative/company-logo_100_100-alternative/0/1630578801524/ilabafrica_logo?e=1743638400&v=beta&t=XDLlhZYsiVzsBeCnII1ys6br2cc4fcE4xrWB1h4dZ5I", alt: "iLabAfrica Logo", website: "https://ilabafrica.strathmore.edu/" },
        { name: "AfroCom", logo: "https://media.licdn.com/dms/image/v2/C560BAQE4eOGEdYluxw/company-logo_100_100/company-logo_100_100/0/1645640307620/afro_community_logo?e=1743638400&v=beta&t=R0DTleQOfe1ZfyUDYiSVWz18nsrFIEiTdmTw3QYtjHc", alt: "AfroCom Logo", website: "" },
        { name: "EploreAI Academy", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHZ-oPtwLCzYQ/company-logo_100_100/company-logo_100_100/0/1685380849925/explore_ai_academy_logo?e=1743638400&v=beta&t=gffhuo5EGm-RzL_UGTjHdZcCvlH2gDNAQv6yoTfriO8", alt: "ExploreAI Academy Logo", website: "" }
      ]
    },
    {
      icon: LineChart,
      name: "Software Testing",
      level: 92,
      color: "green",
      companies: [
        { name: "Guild Code", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEL9zsVzL_9CA/company-logo_100_100/company-logo_100_100/0/1711213585807?e=1743638400&v=beta&t=qVGopot9Y2ezJh5ANCaERWf2sbzpqjlDo_rmQQTSq8U", alt: "Guild Code Logo", website: "https://guild-code.com" },
        { name: "eProd", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHFtsDYGZroTg/company-logo_100_100/company-logo_100_100/0/1729694846208/eprod_solutions_limited_logo?e=1743638400&v=beta&t=uL8UrbbU1Ait9759lYp8hRenW8QGedTIZa6uF8VRXm0", alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
        { name: "Roman Solutions", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHovRESH9fMVQ/company-logo_100_100/company-logo_100_100/0/1670665791318/romansolutions_logo?e=1743638400&v=beta&t=2UylWHyTF3bIJllmg70jI2cbInLYqwNhAI1sQwaa9_Q", alt: "Roman Solutions Logo", website: "" }
      ]
    },
    {
      icon: Users,
      name: "Software Development",
      level: 85,
      color: "orange",
      companies: [
        { name: "Guild Code", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEL9zsVzL_9CA/company-logo_100_100/company-logo_100_100/0/1711213585807?e=1743638400&v=beta&t=qVGopot9Y2ezJh5ANCaERWf2sbzpqjlDo_rmQQTSq8U", alt: "Guild Code Logo", website: "https://guild-code.com" },
        { name: "eProd", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHFtsDYGZroTg/company-logo_100_100/company-logo_100_100/0/1729694846208/eprod_solutions_limited_logo?e=1743638400&v=beta&t=uL8UrbbU1Ait9759lYp8hRenW8QGedTIZa6uF8VRXm0", alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" }
      ]
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
    <div className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-400 transition-all duration-300 mb-4">My Expertise</h2>
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
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`absolute top-0 right-0 rounded-bl-xl rounded-tr-xl px-3 py-1 text-sm font-medium ${getColorClass(skill.color)}`}>
                {skill.level}%
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(skill.color)}`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
  
              <div className="relative h-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`absolute h-full rounded-full ${getColorClass(skill.color)}`}
                />
              </div>
  
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Where I applied the skill:</p>
                <div className="flex flex-wrap gap-4 items-center">
                  {skill.companies.map((company) => (
                    <motion.a
                      key={company.name}
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <img
                        src={company.logo}
                        alt={company.alt}
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 p-1 transition-transform group-hover:scale-105"
                      />
                      <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {company.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;