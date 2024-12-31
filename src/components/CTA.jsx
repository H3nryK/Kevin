import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileDown, ChevronUp, ChevronDown } from 'lucide-react';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const handleBookTime = () => {
    // Add your booking link
    window.open('YOUR_BOOKING_LINK', '_blank');
  };

  const handleDownloadCV = () => {
    // Add your CV download link
    window.open('PATH_TO_YOUR_CV', '_blank');
  };

  const items = [
    {
      id: 'booking',
      title: 'Book a Meeting',
      description: 'Schedule a call to discuss opportunities',
      icon: Calendar,
      action: handleBookTime,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'cv',
      title: 'Download CV',
      description: 'Get my detailed experience and skills',
      icon: FileDown,
      action: handleDownloadCV,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        animate={{ height: isExpanded ? 'auto' : '48px' }}
        className="bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800"
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 space-y-3"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  onHoverStart={() => setActiveHover(item.id)}
                  onHoverEnd={() => setActiveHover(null)}
                  onClick={item.action}
                  className="relative cursor-pointer group"
                >
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-r ${item.color} 
                    transform transition-all duration-300 
                    ${activeHover === item.id ? 'scale-[1.02]' : 'scale-100'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Particle effect on hover */}
                    {activeHover === item.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 -z-10 overflow-hidden rounded-xl"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ 
                              x: 0, 
                              y: 0, 
                              opacity: 0.8,
                              scale: 1 
                            }}
                            animate={{ 
                              x: Math.random() * 200 - 100,
                              y: Math.random() * 200 - 100,
                              opacity: 0,
                              scale: 2
                            }}
                            transition={{ 
                              duration: 1,
                              repeat: Infinity,
                              repeatType: "loop",
                              delay: i * 0.2
                            }}
                            className="absolute w-2 h-2 bg-white/20 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between text-white"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Close Menu' : 'Let\'s Connect'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <ChevronDown /> : <ChevronUp />}
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCTA;