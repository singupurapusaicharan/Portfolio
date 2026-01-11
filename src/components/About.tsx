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
            I am a Computer Science undergraduate with a strong academic background and a deep interest in applied Artificial Intelligence and research-driven development. With hands-on experience in medical imaging, document intelligence, and climate analytics, I focus on building AI systems that are both technically sound and practically useful.
          </motion.p>
          
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
                    I turn ambiguous real-world problems into clear technical goals and scalable solutions, using strong computer science fundamentals and data-driven evaluation.
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
                  <h3 className="text-xl font-semibold mb-2">AI & ML Builder</h3>
                  <p className="text-slate-400">
                    I build applied AI systems with real impact, working on medical imaging, LLM-powered applications, and climate analytics using modern AI and ML pipelines.
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
                  <h3 className="text-xl font-semibold mb-2">Research Mindset</h3>
                  <p className="text-slate-400">
                    I enjoy research-driven work—reading papers, running experiments, and validating results—supported by hands-on research experience and published work.
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
                    I constantly improve my foundations, explore new tools, and refine systems to build better, scalable, and real-world-ready solutions.
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