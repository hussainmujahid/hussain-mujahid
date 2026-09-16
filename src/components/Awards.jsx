// src/components/Awards.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Star, Calendar, Users } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Awards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Find Huawei Cup achievement
  const huaweiAward = personalInfo.achievements.find(a => a.title.includes("Huawei"));

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Recognitions for academic excellence and research innovations
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Huawei Cup Award - Featured */}
          {huaweiAward && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-yellow-400 dark:border-yellow-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500 rounded-full">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{huaweiAward.title}</h3>
                  <p className="text-lg font-semibold">{huaweiAward.award}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Project</p>
                  <p className="font-medium">{huaweiAward.project}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificate Number</p>
                  <p className="font-mono text-sm">{huaweiAward.certificateNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Team Members</p>
                  <p className="font-medium">{huaweiAward.team}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Supervisor</p>
                  <p className="font-medium">{huaweiAward.supervisor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{huaweiAward.date}</p>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>SafeAgingAI:</strong> Intelligent Monitoring for Elderly Safety - An AI-powered system for real-time elderly activity monitoring, fall detection, and health parameter tracking.
                </p>
              </div>
            </motion.div>
          )}
          
          {/* Other Awards */}
          <div className="space-y-4">
            {personalInfo.achievements.filter(a => !a.title.includes("Huawei")).map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Medal className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.award}</p>
                  <p className="text-xs text-gray-500">{achievement.institution}</p>
                </div>
                <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
                  <Calendar size={12} />
                  {achievement.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}