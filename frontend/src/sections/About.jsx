import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/Profile.jpg';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className="py-24 bg-white  transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 ">
              I am a passionate Computer Science student at Lovely Professional University.
            </h3>
            <p className="text-slate-600  leading-relaxed text-lg">
              Specializing in full stack web development, I enjoy creating scalable, responsive, and user-centric web applications. 
              With hands-on experience in technologies like React, JavaScript, and backend development, I have built projects that demonstrate end-to-end application development.
            </p>
            <p className="text-slate-600  leading-relaxed text-lg">
              I focus on writing clean, efficient code and building solutions that provide a seamless user experience. 
              I am always eager to learn, take on new challenges, and grow as a developer.
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl relative ring-8 ring-primary-500/20 group bg-white">
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply"
                />
              </div>
              {/* Decorative elements behind the image */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-gradient-to-tr from-primary-600/30 to-blue-400/30 blur-2xl animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
