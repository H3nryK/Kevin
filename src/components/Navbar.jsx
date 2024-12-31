import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import PropTypes from 'prop-types';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', text: 'Home' },
    { href: '/volunteer', text: 'Vounteering' },
    { href: '/projects', text: 'Projects' },
    { href: '/experience', text: 'Experience' },
    { 
      href: '/Kevin_Obote.pdf', 
      text: 'Resume',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ];

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
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
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
        <div 
          className={`
            md:hidden fixed top-[${scrolled ? '3.5rem' : '4.5rem'}] left-0 w-full bg-gray-900/95 backdrop-blur-sm
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-100%] opacity-0 invisible'}
          `}
          style={{
            maxHeight: 'calc(100vh - 4rem)',
            overflowY: 'auto'
          }}
        >
          <div className="px-4 py-3 space-y-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel={item.rel}
                onClick={toggleMenu}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Navbar;
