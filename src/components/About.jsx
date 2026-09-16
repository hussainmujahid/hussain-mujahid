import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Globe, Users, Rocket } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const stats = [
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '20+', label: 'Happy Clients' },
  { icon: Globe, value: '10+', label: 'Countries Served' },
  { icon: Rocket, value: '5+', label: 'Years Experience' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {personalInfo.about}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay ahead in 
              the fast-paced world of web development. I believe in writing clean, 
              maintainable code and creating exceptional user experiences.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">{personalInfo.location}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{personalInfo.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Freelance</p>
                <p className="font-medium text-green-600">Available</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}