import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ThreeDProjects from './components/ThreeDProjects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  // Add a class to the body for global styling
  React.useEffect(() => {
    document.body.classList.add('bg-slate-950', 'text-white');
    
    return () => {
      document.body.classList.remove('bg-slate-950', 'text-white');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Global background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Particles />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ThreeDProjects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;