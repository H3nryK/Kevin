import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-ping opacity-75"></div>
        </div>
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsVisible(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`
      bg-gray-900 text-gray-300 py-12 mt-20 border-t border-gray-800
      transform transition-all duration-700 ease-in-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
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
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
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
        </div>
      </div>
    </footer>
  );
};

// Main App wrapper to include both components
const AppWrapper = ({ children }) => {
  return (
    <>
      <Preloader />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppWrapper;