import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/theme-context';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkTheme, toggleTheme] = useTheme();

    const handleBookTime = () => {
      window.open('https://calendly.com/kevinobote49/15min', '_blank');
    };
  
    const handleDownloadCV = () => {
      window.open('/Kevin_Obote.pdf', '_blank');
    };
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        const nav = document.getElementById('mobile-menu');
        const button = document.getElementById('menu-button');
        if (isMenuOpen && nav && !nav.contains(event.target) && !button.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      if (isMenuOpen) {
        document.addEventListener('click', handleClickOutside);
      }
      return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);
  
    return (
      <nav className={`
        fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'py-2 dark:bg-gray-900/95 bg-white/95 shadow-lg dark:shadow-gray-900/50' 
          : 'py-4 dark:bg-gray-900/80 bg-white/80'
        }
        backdrop-blur-sm dark:border-gray-800 border-gray-200 z-[100]
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-400 transition-all duration-300"
              >
                Kevin Obote
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Volunteer', 'Projects', 'Experience'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="
                    dark:text-gray-300 text-gray-700 
                    dark:hover:text-white hover:text-gray-900 
                    dark:hover:bg-gray-800 hover:bg-gray-100 
                    px-3 py-2 rounded-lg transition-all duration-200
                  "
                >
                  {item}
                </a>
              ))}

              {/* Buttons */}
              <button
                onClick={handleDownloadCV}
                className="
                  px-4 py-2 rounded-lg 
                  bg-green-500 text-white 
                  hover:bg-green-600 
                  transition-all duration-200
                "
              >
                Resume
              </button>
              <button
                onClick={handleBookTime}
                className="
                  px-4 py-2 rounded-lg 
                  bg-blue-500 text-white 
                  hover:bg-blue-600 
                  transition-all duration-200
                "
              >
                Talk to Me
              </button>
              
              {/* Theme Toggle - Desktop */}
              <button
                onClick={toggleTheme}
                className="
                  p-2 rounded-lg 
                  dark:bg-gray-800 bg-gray-100
                  dark:hover:bg-gray-700 hover:bg-gray-200
                  dark:text-gray-300 text-gray-700
                  dark:hover:text-white hover:text-gray-900
                  transition-all duration-200
                  ring-1 ring-gray-200 dark:ring-gray-700
                "
                aria-label="Toggle theme"
              >
                {isDarkTheme ? 
                  <Sun size={20} className="transform hover:rotate-12 transition-transform duration-200" /> :
                  <Moon size={20} className="transform hover:-rotate-12 transition-transform duration-200" />
                }
              </button>
            </div>
  
            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="
                  p-2 rounded-lg 
                  dark:bg-gray-800 bg-gray-100
                  dark:hover:bg-gray-700 hover:bg-gray-200
                  dark:text-gray-300 text-gray-700
                  dark:hover:text-white hover:text-gray-900
                  transition-all duration-200
                  ring-1 ring-gray-200 dark:ring-gray-700
                "
                aria-label="Toggle theme"
              >
                {isDarkTheme ? 
                  <Sun size={20} className="transform hover:rotate-12 transition-transform duration-200" /> :
                  <Moon size={20} className="transform hover:-rotate-12 transition-transform duration-200" />
                }
              </button>
  
              {/* Mobile menu button */}
              <button
                id="menu-button"
                className="
                  p-2 rounded-lg 
                  dark:bg-gray-800 bg-gray-100
                  dark:hover:bg-gray-700 hover:bg-gray-200
                  dark:text-gray-300 text-gray-700
                  dark:hover:text-white hover:text-gray-900
                  transition-all duration-200
                  ring-1 ring-gray-200 dark:ring-gray-700
                "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? 
                  <X size={24} className="transform rotate-0 transition-transform duration-300" /> : 
                  <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
                }
              </button>
            </div>
          </div>
  
          {/* Mobile menu */}
          <div
            id="mobile-menu" 
            className={`
              md:hidden absolute top-full left-0 w-full
              dark:bg-gray-900/95 bg-white/95 
              shadow-lg dark:shadow-gray-900/50
              transform transition-all duration-300 ease-in-out origin-top
              ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
              border-t dark:border-gray-800 border-gray-200
            `}
          >
            <div 
              className={`
                px-4 py-2 space-y-1 transform transition-all duration-300 delay-100
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
              `}
            >
              {['Home', 'Volunteer', 'Projects', 'Experience'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="
                    block dark:text-gray-300 text-gray-700 
                    dark:hover:text-white hover:text-gray-900 
                    dark:hover:bg-gray-800 hover:bg-gray-100 
                    px-4 py-3 rounded-lg transition-all duration-200
                    text-center
                  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Buttons */}
              <button
                className="
                  block w-full px-4 py-3 rounded-lg 
                  bg-green-500 text-white 
                  hover:bg-green-600 
                  transition-all duration-200
                  text-center
                "
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
              >
                Resume
              </button>
              <button
                className="
                  block w-full px-4 py-3 rounded-lg 
                  bg-blue-500 text-white 
                  hover:bg-blue-600 
                  transition-all duration-200
                  text-center
                "
                onClick={() => {
                  handleBookTime();
                  setIsMenuOpen(false);
                }}
              >
                Talk to Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;