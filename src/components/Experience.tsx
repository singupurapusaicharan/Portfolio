import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-slate-900 relative">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Professional Experience
          </motion.h2>
          
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mt-12">
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2 shadow-lg shadow-blue-500/20"></div>
              
              <motion.div 
                className="card mb-12 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.2)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">AI Research Intern</h3>
                    <div className="flex items-center text-blue-400 text-sm mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Aug 2024 - Sep 2024</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Building size={16} className="text-slate-400 mr-2" />
                    <span className="text-slate-300">Indian Institute of Science Campus-National Institute of Advanced Studies</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="text-slate-400 mr-2" />
                    <span className="text-slate-300">Bengaluru</span>
                  </div>
                  
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>
                      Analyzed satellite imagery, remote sensing data to quantify "Assessment of Soil Carbon Using Cloud Computing and Machine Learning across different regions", enhancing the precision of soil health assessments by 70%.
                    </li>
                    <li>
                      Collaborated with a multidisciplinary team to integrate environmental data with machine learning models.
                    </li>
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Machine Learning", "Cloud Computing", "Data Analysis", "Remote Sensing"].map((skill, index) => (
                      <motion.span 
                        key={index}
                        className="skill-badge"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;