import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import LinkedInPosts from './components/LinkedInPosts';
import AppWrapper from './components/AppWrapper';
import { motion } from 'framer-motion';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`min-h-screen bg-gray-900 text-white`}>
      <AppWrapper>
        <Navbar 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#about" className="block hover:text-blue-600">About</a>
              <a href="#experience" className="block hover:text-blue-600">Experience</a>
              <a href="#projects" className="block hover:text-blue-600">Projects</a>
              <a href="#posts" className="block hover:text-blue-600">LinkedIn</a>
              <a href="#contact" className="block hover:text-blue-600">Contact</a>
            </div>
          </motion.div>
        )}

        <Hero />
        <Experience />
        <LinkedInPosts />
        <Projects />
      </AppWrapper>
    </div>
  );
};

export default App;