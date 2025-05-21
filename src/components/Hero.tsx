import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - First on mobile, second on desktop */}
          <motion.div
            className="flex justify-center order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-slate-900 border-4 border-slate-800 rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 mix-blend-overlay"></div>
                <img 
                  src="./profile.png" 
                  alt="Sai Charan" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-blue-400 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>
          
          {/* Text Content - Second on mobile, first on desktop */}
          <motion.div
            className="order-last lg:order-first"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-blue-400 font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {['S', 'i', 'n', 'g', 'u', 'p', 'u', 'r', 'a', 'p', 'u', ' ', 'S', 'a', 'i', ' ', 'C', 'h', 'a', 'r', 'a', 'n'].map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p 
              className="text-slate-400 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Highly motivated and curious Computer Science student with a passion for tackling challenging problems. Developing innovative solutions and building scalable web applications. I'm excited to collaborate with like-minded individuals and contribute to projects that make a meaningful impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-white/10 animate-shimmer group-hover:bg-white/20"></span>
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Download Resume
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;