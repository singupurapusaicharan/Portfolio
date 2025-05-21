import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Singupurapu Sai Charan
            </h2>
            <p className="text-slate-400 mt-2">Computer Science Undergraduate & Web Developer</p>
          </motion.div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com/singupurapusaicharan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sai-charan-singupurapu-527246259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:singupurapusaicharan@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Singupurapu Sai Charan. All rights reserved.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="Scroll to top"
            whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(14, 165, 233, 0.4)' }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;