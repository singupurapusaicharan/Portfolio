import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  videoLink?: string;
  images?: string[];
}

const ThreeDProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "GAN-Based Brain Tumor Detection",
      description:
        "• Fine-tuned VGG19 using transfer learning for brain tumor detection, achieving 94% accuracy with robust evaluation metrics and real-time analysis of brain scans and reducing diagnosis time.\n" +
        "• Applied data preprocessing techniques and GAN-based augmentation to handle limited and imbalanced datasets.",
      thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
      techStack: ["GANs", "VGG19", "Transfer Learning", "Medical Imaging", "Data Preprocessing"],
      images: [
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      title: "PDF Quest Hub",
      description:
        "• Developed a LLM-powered application enabling users to query and summarize PDFs, reducing manual document analysis time.\n" +
        "• Integrated LangChain, FAISS, Mistral for accurate, context-aware AI responses, improving Q&A precision.\n" +
        "• Engineered PDF upload and storage with text extraction and vector embedding, handling documents and queries in test simulations.",
      thumbnail: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
      techStack: ["LLM", "LangChain", "FAISS", "Mistral", "PDF Processing", "Vector Embeddings"],
      images: [
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      title: "AI-Powered Climate Change Adaptation and Mitigation",
      description:
        "• Researched AI-driven frameworks for climate adaptation, contributing to models with up to 70% forecast accuracy improvement.\n" +
        "• Published research on AI-driven climate change adaptation in IEEE ICCPCT, demonstrating AI’s role in enhancing environmental monitoring and forecasting.",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      techStack: ["AI", "Climate", "Forecasting", "Environmental Monitoring", "IEEE ICCPCT"],
      demoLink: "https://ieeexplore.ieee.org/document/10673384",
      githubLink: "https://github.com/singupurapusaicharan",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
      ],
    }
  ];

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

  const modalVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { y: 0, scale: 1 },
    hover: { y: -10, scale: 1.02 },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      <div className="section-container relative z-10">
        {/* Backwards-compatible anchor (older links/bookmarks) */}
        <div id="3d-projects" className="sr-only" aria-hidden="true" />
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={cardVariants}
                whileHover="hover"
                onClick={() => {
                  setSelectedProject(project);
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-slate-300 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-1 bg-slate-800/50 rounded-full text-sm font-medium"
                    >
                      <span className="text-blue-400">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key={selectedProject.title}
                className="fixed inset-0 bg-black/80 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={modalVariants}
                >
                  <div className="bg-slate-900 p-8 rounded-2xl max-w-4xl w-full relative">
                    <button
                      className="absolute top-4 right-4 text-white hover:text-blue-400"
                      onClick={() => setSelectedProject(null)}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <h2 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed whitespace-pre-line">{selectedProject.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {selectedProject.images?.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                      {selectedProject.videoLink && (
                        <a
                          href={selectedProject.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-colors"
                        >
                          <Play className="w-5 h-5" />
                          <span>Watch Demo</span>
                        </a>
                      )}
                      {selectedProject.demoLink && (
                        <a
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800/50 rounded-full text-sm font-medium"
                        >
                          <span className="text-blue-400">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDProjects;
