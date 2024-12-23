import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Twitter, Github, Mail, Calendar, MapPin, Award } from 'lucide-react';
import Profile from '../assets/profile.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Left Column - Text Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          {/* Name and Title */}
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                John Executive
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
              CEO & Strategic Innovation Leader
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 py-6">
            {[
              { icon: Award, label: "Experience", value: "15+ Years" },
              { icon: Calendar, label: "Projects", value: "200+" },
              { icon: MapPin, label: "Global Reach", value: "25+ Countries" }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Driving digital transformation and innovation across industries with a 
              proven track record of building successful organizations. Specialized in 
              AI integration, sustainable growth strategies, and fostering innovative culture.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2">
                View Projects 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
            {[
              { Icon: Linkedin, color: "hover:text-blue-600" },
              { Icon: Twitter, color: "hover:text-blue-400" },
              { Icon: Github, color: "hover:text-gray-900 dark:hover:text-white" },
              { Icon: Mail, color: "hover:text-red-500" }
            ].map((social, index) => (
              <social.Icon 
                key={index}
                className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${social.color} cursor-pointer transition-all duration-300 hover:scale-110`}
              />
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
                src={Profile}
                alt="John Executive - CEO & Strategic Innovation Leader"
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-light">Transforming businesses through innovation</p>
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