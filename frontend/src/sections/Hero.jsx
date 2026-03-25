import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-600  font-bold tracking-widest uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900  mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-primary-600  font-extrabold animate-pulse-slow">Ravindra</span><br />
            <span className="text-4xl md:text-6xl text-slate-700 ">
              I'm a {' '}
              <span className="text-primary-600 ">
                <Typewriter
                  words={['Full Stack Developer', 'MERN Specialist', 'Tech Student']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600  mb-10 max-w-2xl mx-auto"
          >
            Bringing ideas to life through modern, interactive, and beautifully crafted web applications. Seeking internships and new opportunities to build the future.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all shadow-lg hover:shadow-primary-500/30 w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
            <a 
              href="/CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white  text-slate-900  border border-slate-200  hover:border-primary-500  font-semibold transition-all w-full sm:w-auto text-center"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-slate-400 hover:text-primary-500 transition-colors">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
