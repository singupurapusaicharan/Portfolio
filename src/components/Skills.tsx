import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Layout, Cpu, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["Python", "Java"]
    },
    {
      title: "Web Development",
      icon: <Layout className="text-purple-400" size={24} />,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "UI/UX"]
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-blue-400" size={24} />,
      skills: ["Node.js", "Express", "MongoDB", "SQL", "RESTful API"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-purple-400" size={24} />,
      skills: ["Artificial Intelligence", "Machine Learning", "Data Analysis"]
    },
    {
      title: "Tools & Technologies",
      icon: <Server className="text-blue-400" size={24} />,
      skills: ["Git/Github", "Data Structures and Algorithms", "Cloud Computing"]
    },
    {
      title: "Computer Science",
      icon: <Cpu className="text-purple-400" size={24} />,
      skills: ["Operating Systems", "Database Management Systems", "Computer Networks", "OOPS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Skills & Expertise
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card hover:shadow-lg hover:shadow-blue-500/5 relative overflow-hidden group"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-800 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="skill-badge"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default Skills;