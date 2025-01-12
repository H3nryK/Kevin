import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { useTheme } from '../contexts/theme-context';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkTheme] = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

    // Theme-specific styles
  const themeStyles = {
    background: isDarkTheme 
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      : "bg-gradient-to-br from-white via-gray-50 to-blue-50",
    heading: isDarkTheme
      ? "from-blue-400 to-purple-400"
      : "from-blue-600 to-purple-600",
    text: isDarkTheme
      ? "text-gray-300"
      : "text-gray-600",
    border: isDarkTheme
      ? "border-gray-600"
      : "border-gray-300",
    hoverBg: isDarkTheme
      ? "hover:bg-gray-800/50"
      : "hover:bg-white/50",
    iconColor: isDarkTheme
      ? "text-gray-400"
      : "text-gray-600"
  };

  return (
    <section className={`min-h-screen relative overflow-hidden ${themeStyles.background} pt-24 pb-16 px-4`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-64 h-64 ${isDarkTheme ? 'bg-blue-900/20' : 'bg-blue-200'} rounded-full mix-blend-multiply blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-64 h-64 ${isDarkTheme ? 'bg-purple-900/20' : 'bg-purple-200'} rounded-full mix-blend-multiply blur-3xl animate-pulse delay-700`}></div>
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${isDarkTheme ? 'bg-pink-900/20' : 'bg-pink-200'} rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000`}></div>
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Left Column - Text Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          {/* Name and Title */}
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className={`text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r ${themeStyles.heading} bg-clip-text text-transparent`}>
                Kevin Obote
              </h1>
            </div>
            <p className={`text-sm lg:text-xl ${themeStyles.text} font-light`}>
                Data Scientist | Software Engineer | Product Manager
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/projects" className="group">
              <button className={`group bg-gradient-to-r ${themeStyles.heading} text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-1`}>
                <span className="flex items-center justify-center gap-2">
                  View Projects 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </a>
            <a href="#contact" className="group">
              <button className={`px-8 py-4 rounded-xl border ${themeStyles.border} ${themeStyles.text} ${themeStyles.hoverBg} backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}>
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
            {[
              { Icon: FaLinkedin, color: "hover:text-blue-600", href: "https://www.linkedin.com/in/kevinobote/" },
              { Icon: FaXTwitter, color: "hover:text-blue-400", href: "https://x.com/KevinObote6" },
              { Icon: FaSquareGithub, color: isDarkTheme ? "hover:text-white" : "hover:text-gray-900", href: "https://github.com/Kevinobote" },
              { Icon: BiLogoGmail, color: "hover:text-red-500", href: "mailto:kevinobote49@gmail.com" },
              { Icon: FiInstagram, color: "hover:text-red-300", href: "https://www.instagram.com/kevin_obote_/" },
              { Icon: FaWhatsapp, color: "hover:text-green-600", href: "https://wa.me/+254700885748" },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <social.Icon
                  className={`w-6 h-6 ${themeStyles.iconColor} ${social.color}`}
                />
              </a>
            ))}
          </div>

        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-2">
          <div className="relative group">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
            
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQF7QDk8WRkQyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721806959673?e=1741219200&v=beta&t=GEPHbrJsI6X_15NRsINK-1za2C1L9cFWbwaNzGJRDtE"
                alt="John Executive - CEO & Strategic Innovation Leader"
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/100 dark:from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-gray-800 dark:text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-light">
                  I am an explorer, dreamer, developer, thinker, and more. I am a multifaceted individual who finds joy in activities like swimming, 
                  reading, stargazing, and immersing myself in nature.
                  Fueling my pursuits is an insatiable curiosity for knowledge that drives me to explore new projects, guided by curiosity, and diligence. 
                  I use this space to showcase my current and past work, detail upcoming plans, and make my presence felt in the world. 
                  I’m constantly changing and evolving, so what you see here today might not be here tomorrow!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;