import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Profile from '../assets/profile.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The team exceeded our expectations. Their attention to detail and commitment to quality transformed our business processes.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
      image: Profile
    },
    {
      id: 2,
      content: "Outstanding service! They understood our needs perfectly and delivered a solution that was exactly what we were looking for.",
      author: "Michael Chen",
      role: "Director of Operations, InnovateCo",
      rating: 4,
      image: Profile
    },
    {
      id: 3,
      content: "A game-changer for our organization. The implementation was smooth, and the results were immediate.",
      author: "Emily Rodriguez",
      role: "CTO, FutureTech",
      rating: 5,
      image: Profile
    }
  ];

  return (
    <section id="testimonials" className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-100 dark:text-gray-700" size={40} />
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;