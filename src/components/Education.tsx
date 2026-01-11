import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "B V Raju Institute of Technology",
      period: "2022 - Present",
      grade: "CGPA: 9.1/10",
      coursework: ["Operating Systems", "Database Management Systems", "Computer Networks", "OOPS"]
    },
    {
      degree: "Intermediate MPC",
      institution: "Narayana Junior College, KPHB",
      period: "2020 - 2022",
      grade: "Percentage: 97%",
      coursework: []
    },
    {
      degree: "State Board",
      institution: "Sri Chaitanya School",
      period: "2019 - 2020",
      grade: "CGPA: 10/10",
      coursework: []
    }
  ];

  const certifications = [
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "CISCO Networking Academy"
    },
    {
      title: "Responsive Web Designing Foundation Certification",
      issuer: "Infosys Springboard"
    },
    {
      title: "Java Certification",
      issuer: "Infosys Springboard"
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy"
    }
  ];

  const achievements: Array<{ text: string; href?: string }> = [
    {
      text: "Received first prize in TECHSURGE-2K24 ‘Prastuthi’ Idea Pitching event held at BVRIT, Narsapur."
    },
    {
      text: "Selected as the best project of the year at the Prelims of IEEE YESIST12 ‘KAUSHALYA’ open house expo 2024."
    },
    {
      text: "Research got accepted in Scopus-indexed IJECE journal, highlighting GAN-based medical imaging for enhanced brain tumor detection.",
      // Replace this with your exact paper URL if you have it.
      href: "https://ijece.iaescore.com/"
    },
    {
      text: "Published research on AI-based climate adaptation in IEEE ICCPCT (Kerala), highlighting how technology can make climate data analysis faster and more reliable.",
      href: "https://ieeexplore.ieee.org/document/10673384"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-950 relative">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Education & Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2 text-blue-400" size={24} />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="card relative overflow-hidden group"
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.2)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                        <div className="flex items-center text-blue-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-2">{edu.institution}</p>
                      <p className="text-blue-400 font-medium mb-3">{edu.grade}</p>
                      
                      {edu.coursework.length > 0 && (
                        <div>
                          <p className="text-sm text-slate-400 mb-2">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <motion.span 
                                key={courseIndex} 
                                className="skill-badge"
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                {course}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="mr-2 text-purple-400" size={24} />
                  Certifications
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index} 
                      className="card relative overflow-hidden group"
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.2)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <h4 className="text-lg font-semibold mb-1 group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                        <p className="text-slate-400">{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="mr-2 text-blue-400" size={24} />
                  Achievements & Awards
                </h3>
                
                <motion.div 
                  className="card relative overflow-hidden group"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 group-hover:scale-125 transition-transform"></span>
                          <span className="text-slate-300 group-hover:text-white transition-colors">
                            {achievement.text}
                            {achievement.href && (
                              <>
                                {" "}
                                <a
                                  href={achievement.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                                >
                                  (link)
                                </a>
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;