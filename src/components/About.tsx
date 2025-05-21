import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Lightbulb, BookOpen } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            About Me
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-slate-300 text-lg mb-8 text-center">
            Highly motivated Computer Science student with a passion for 3D graphics, web development, and innovative solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="tech-badge bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300 p-3 rounded-lg">
                <span className="text-blue-400">Three.js</span>
              </div>
              <div className="tech-badge bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300 p-3 rounded-lg">
                <span className="text-purple-400">WebGL</span>
              </div>
              <div className="tech-badge bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300 p-3 rounded-lg">
                <span className="text-blue-400">React.js</span>
              </div>
              <div className="tech-badge bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300 p-3 rounded-lg">
                <span className="text-purple-400">Blender</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500/10 rounded-lg relative overflow-hidden flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent animate-shimmer"></div>
                  <Brain className="text-blue-400 relative z-10" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                  <p className="text-slate-400">
                    My creativity allows me to approach problems from different angles, leading to innovative outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-500/10 rounded-lg relative overflow-hidden flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent animate-shimmer"></div>
                  <Code className="text-purple-400 relative z-10" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                  <p className="text-slate-400">
                    Experienced in building modern web applications using React, Next.js, and other cutting-edge technologies.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500/10 rounded-lg relative overflow-hidden flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent animate-shimmer"></div>
                  <Lightbulb className="text-blue-400 relative z-10" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovative Thinker</h3>
                  <p className="text-slate-400">
                    I'm committed to finding creative solutions to complex problems through innovative thinking.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-500/10 rounded-lg relative overflow-hidden flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent animate-shimmer"></div>
                  <BookOpen className="text-purple-400 relative z-10" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lifelong Learner</h3>
                  <p className="text-slate-400">
                    I'm committed to lifelong learning, attending workshops, reading research papers, and staying informed about industry trends.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a href="#experience" className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">View My Experience</span>
              <span className="absolute inset-0 bg-white/10 animate-shimmer group-hover:bg-white/20"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;