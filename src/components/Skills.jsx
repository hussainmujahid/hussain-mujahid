// src/components/Skills.jsx (Updated with proficiency)
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/personalInfo';
import { Code, Database, Server, Wrench, Star, Microscope } from 'lucide-react';

const skillCategories = [
  { icon: Code, title: 'Frontend', skills: personalInfo.skills.frontend, color: 'from-blue-500 to-cyan-500' },
  { icon: Server, title: 'Backend', skills: personalInfo.skills.backend, color: 'from-green-500 to-teal-500' },
  { icon: Database, title: 'Database', skills: personalInfo.skills.database, color: 'from-purple-500 to-pink-500' },
  { icon: Wrench, title: 'Tools & Deployment', skills: personalInfo.skills.tools, color: 'from-orange-500 to-red-500' },
  { icon: Microscope, title: 'AI / Deep Learning', skills: ['PyTorch', 'CNNs', 'GANs', 'Transformers', 'Diffusion Models', 'Rectified Flow', 'Flow Matching', 'NIfTI/DICOM', 'SimpleITK'], color: 'from-indigo-500 to-purple-500' },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.1 + index * 0.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Language Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {personalInfo.languages.map((lang, idx) => (
              <div key={idx} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold">{lang.name}</p>
                <p className="text-sm text-blue-600">{lang.level}</p>
                <p className="text-xs text-gray-500">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}