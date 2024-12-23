import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode, isMenuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
      ${scrolled ? 'py-2 bg-gray-900/95 shadow-lg' : 'py-4 bg-gray-900/80'}
      backdrop-blur-sm border-b border-gray-800
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-400 transition-all duration-300">
              Kevin Obote
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Experience', 'Testimonials', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDarkMode ? 
                <Sun size={20} className="hover:rotate-90 transition-transform duration-300" /> : 
                <Moon size={20} className="hover:-rotate-90 transition-transform duration-300" />
              }
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X size={24} className="transform rotate-0 transition-transform duration-300" /> : 
                <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`
          md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}>
          <div className="px-4 py-3 space-y-3">
            {['About', 'Experience', 'Projects', 'LinkedIn', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all duration-200"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;