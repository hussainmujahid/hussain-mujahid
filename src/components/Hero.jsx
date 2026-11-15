// src/components/Hero.jsx (Updated with profile image)
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin, Phone, Award } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, color: 'hover:text-gray-700' },
    { icon: Linkedin, href: personalInfo.linkedin, color: 'hover:text-blue-600' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, color: 'hover:text-red-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm mb-4"
            >
              CSC Scholar | AI/CV Researcher | CS Instructor
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} />
                {personalInfo.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award size={16} />
                Silver Medalist
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
            </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${social.color}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Image - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Animated background circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <img src="/assets/profile.png" alt={personalInfo.name} className="w-full h-full object-cover" />

              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MH</span>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-yellow-500 text-white rounded-full px-3 py-1 text-sm font-semibold shadow-lg animate-bounce-slow">
                🏆 Silver Medalist
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}