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
      title: "AI-Powered Climate Change Adaptation and Mitigation",
      description: "Designed an AI-powered framework for climate change adaptation and mitigation, enhancing climate impact prediction accuracy by 70%. Published findings at the IEEE ICCPCT conference, highlighting the role of collaboration and innovation in tackling climate challenges.",
      image: "./placeholder.png",
      tags: ["AI", "Climate Change", "Research", "Publication"],
      links: {
        publication: "https://ieeexplore.ieee.org/document/10673384",
        github: "https://github.com/singupurapusaicharan"
      }
    },
    {
      title: "Enhanced Brain Tumor Detection through GAN-based Medical Imaging Analysis",
      description: "Developed a React.js and Flask-based web application integrating GANs and VGG19 for brain tumor detection, achieving real-time analysis of brain scans and reducing diagnosis time by up to 80%, enhancing workflow efficiency for medical professionals.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      tags: ["React.js", "Flask", "GANs", "VGG19", "Medical Imaging", "Research"],
      links: {
        github: "https://github.com/singupurapusaicharan"
      }
    },
    {
      title: "AI Project Management Dashboard",
      description: "Developed a full-stack AI project management dashboard using Next.js, React, TypeScript, and Tailwind CSS, enabling seamless project tracking, secure user management, and real-time analytics. Integrated SQL-based backend for efficient data handling and authentication.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SQL", "Zustand", "Framer Motion"],
      links: {
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