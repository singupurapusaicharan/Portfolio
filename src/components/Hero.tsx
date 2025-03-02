import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

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
                  src="https://media-hosting.imagekit.io//59c276c0bba84c08/C_pic1.jpg?Expires=1835467247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FDp~yZ9l6WgpD97v293FQ30uYol8xO9KbAiz6no7PyJyffHWGQiv9JT1-O-viZBK6QsGPcdgDrsqw-puXo2urxMOMs-rpIyiLFmTvfepEmAYfcCgP5CF6v3Jr3WkaxC~OT-HUbE~1rYlJ9xb1CMNktr0tC9zZwk6K3dflRpqJ9TdqYY49jqZGpmbVR~yka9dShsOP8zcj2LU6ILcWhpKCpVfvl3NGlGl3E7AME7~gza8rdIPn6~adADchuVrfslk9NO9pDkrGZ1R~j5vUl5EkUDIt-CZVfKxp6sbi7diAR1ogBO0LSOIkEhHTNe9YrYxYbBPEc8fZChAyihCke64-Q__" 
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
                Singupurapu Sai Charan
              </span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-slate-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science Undergraduate & Web Developer
            </motion.h2>
            <motion.p 
              className="text-slate-400 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Highly motivated and curious Computer Science student with a passion for tackling challenging problems and developing innovative solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#contact" className="btn-primary relative overflow-hidden group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-white/10 animate-shimmer group-hover:bg-white/20"></span>
              </a>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/singupurapusaicharan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sai-charan-singupurapu-527246259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:singupurapusaicharan@gmail.com"
                className="text-slate-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail size={24} />
              </motion.a>
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
