import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import Navbar from './Navbar';
import { ThemeProvider } from '../contexts/theme-context';

// Preloader Component
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-gray-900">
      <div className="relative">
        {/* Animated circles */}
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-400 rounded-full animate-spin"></div>
        </div>
        {/* Logo text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
            kevin Obote
          </span>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kevinobote/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/KevinObote6", label: "Twitter" },
    { icon: FaSquareGithub, href: "https://github.com/Kevinobote", label: "GitHub" },
    { icon: BiLogoGmail, href: "mailto:kevinobote49@gmail.com", label: "Email" },
    { icon: FiInstagram, href: "https://www.instagram.com/kevin_obote_/", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/+254700885748", label: "Whatsapp" },
  ];
  
  return (
    <footer className={`
      bg-gray-900 text-gray-300 py-12 mt-20 border-t border-gray-800
      transform transition-all duration-700 ease-in-out
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Kevin Obote
            </h3>
            <p className="text-gray-400 max-w-md">
              Building innovative solutions with cutting-edge technology. 
              Let us create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Home
                </a>
                <a 
                  href="/volunteer"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Volunteering
                </a>
                <a 
                  href="/experience"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Experience
                </a>
                <a 
                  href="/projects"
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kevin Obote. All rights reserved.</p>
          <p className='text-xs mt-4'>Powered by <a href='https://guild-code.com/' target='_blank' rel='noopener noreferrer'>Guild Code</a></p>
        </div>
      </div>
    </footer>
  );
};

// Main App wrapper to include both components
const AppWrapper = ({ children }) => {
  return (
    <ThemeProvider>
      <Preloader />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

import PropTypes from 'prop-types';

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;