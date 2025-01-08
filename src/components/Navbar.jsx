import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
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
      ${scrolled ? 'py-2 bg-gray-900/95 shadow-lg' : 'py-4 bg-gray-900/80'}
      backdrop-blur-sm border-b border-gray-800
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
          <div className="hidden md:flex space-x-8">
            {['Home', 'Volunteer', 'Projects', 'Experience'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            id="menu-button"
            className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
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

        {/* Mobile menu */}
        <div
          id="mobile-menu" 
          className={`
            md:hidden absolute top-full left-0 w-full bg-gray-900/95 shadow-lg 
            transform transition-all duration-300 ease-in-out origin-top
            ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
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
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
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
