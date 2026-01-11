import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const encodeFormData = (data: Record<string, string>) =>
    new URLSearchParams(data).toString();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Netlify Forms:
      // - In production on Netlify, this will create a real form submission.
      // - In local dev, Netlify isn't present; we do a safe no-error fallback.
      if (import.meta.env.DEV) {
        await new Promise(resolve => setTimeout(resolve, 600));
      } else {
        const body = encodeFormData({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        });

        if (!res.ok) {
          throw new Error(`Form submission failed: ${res.status}`);
        }
      }
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Get In Touch
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-500/10 rounded-lg mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent animate-shimmer"></div>
                        <Mail className="text-blue-400 relative z-10" size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm text-slate-400 mb-1">Email</h4>
                        <a href="mailto:singupurapusaicharan@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                          singupurapusaicharan@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-purple-500/10 rounded-lg mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent animate-shimmer"></div>
                        <Phone className="text-purple-400 relative z-10" size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm text-slate-400 mb-1">Phone</h4>
                        <a href="tel:+919182266418" className="text-white hover:text-purple-400 transition-colors">
                          +91 9182266418
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-500/10 rounded-lg mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent animate-shimmer"></div>
                        <MapPin className="text-blue-400 relative z-10" size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm text-slate-400 mb-1">Location</h4>
                        <p className="text-white">India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/singupurapusaicharan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors hover:scale-110 transform"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/sai-charan-singupurapu-527246259/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors hover:scale-110 transform"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="card relative overflow-hidden group"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                      <p className="text-green-400">Thank you for your message! I will get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <p className="text-red-400">{submitError}</p>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="mt-6 btn-primary w-full flex items-center justify-center gap-2 relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                 <div className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <span className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></span>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </div>
                    <span className="absolute inset-0 bg-white/10 animate-shimmer"></span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;