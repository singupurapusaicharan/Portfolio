import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "GAN-Based Brain Tumor Detection",
      description: "Fine-tuned VGG19 using transfer learning for brain tumor detection, achieving 94% accuracy with robust evaluation metrics and real-time analysis. Applied preprocessing and GAN-based augmentation to handle limited and imbalanced datasets.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
      tags: ["GANs", "VGG19", "Transfer Learning", "Medical Imaging"],
      links: {}
    },
    {
      title: "PDF Quest Hub",
      description: "Developed an LLM-powered app to query and summarize PDFs, reducing manual document analysis time. Integrated LangChain, FAISS, and Mistral for accurate, context-aware answers, with upload/storage, extraction, and embeddings.",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
      tags: ["LLM", "LangChain", "FAISS", "Mistral", "PDF"],
      links: {}
    },
    {
      title: "AI-Powered Climate Change Adaptation and Mitigation",
      description: "Researched AI-driven frameworks for climate adaptation, contributing to models with up to 70% forecast accuracy improvement. Published at IEEE ICCPCT, demonstrating AI’s role in environmental monitoring and forecasting.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      tags: ["AI", "Climate", "Forecasting", "IEEE ICCPCT"],
      links: {
        publication: "https://ieeexplore.ieee.org/document/10673384",
        github: "https://github.com/singupurapusaicharan"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Projects & Publications
          </motion.h2>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="card overflow-hidden group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="skill-badge"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    {project.links.publication && (
                      <a 
                        href={project.links.publication}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full hover:bg-blue-500/20 transition-colors duration-300 hover:scale-110 transform"
                        title="View Publication"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full hover:bg-blue-500/20 transition-colors duration-300 hover:scale-110 transform"
                        title="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;