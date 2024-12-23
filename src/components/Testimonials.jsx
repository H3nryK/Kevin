import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "The team exceeded our expectations. Their attention to detail and commitment to quality transformed our business processes.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
      id: 2,
      content: "Outstanding service! They understood our needs perfectly and delivered a solution that was exactly what we were looking for.",
      author: "Michael Chen",
      role: "Director of Operations, InnovateCo",
      rating: 4
    },
    {
      id: 3,
      content: "A game-changer for our organization. The implementation was smooth, and the results were immediate.",
      author: "Emily Rodriguez",
      role: "CTO, FutureTech",
      rating: 5
    }
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-3xl mx-auto relative h-[300px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <Quote className="absolute top-4 right-4 text-blue-100 dark:text-gray-700" size={40} />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div>
                <div className="font-semibold dark:text-white">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex mb-4"
            >
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
              ))}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 relative z-10"
            >
              "{testimonials[currentIndex].content}"
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/3 p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="text-gray-600 dark:text-gray-300" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/3 p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="text-gray-600 dark:text-gray-300" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;