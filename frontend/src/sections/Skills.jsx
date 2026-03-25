import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skillsData.jsx';

const SkillIcon = ({ name, icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -5 }}
      className="flex flex-col items-center justify-center gap-3 group px-8 min-w-[120px] md:min-w-[150px]"
    >
      <div 
        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white backdrop-blur-sm border border-slate-200 flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 group-hover:border-transparent"
        style={{ 
          color: color,
        }}
        whileHover={{
          boxShadow: `0 0 25px ${color}44`, // 44 is approx 25% opacity
          borderColor: color
        }}
      >
        <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          {icon}
        </div>
      </div>
      <span className="text-sm md:text-base font-medium text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
};



const MarqueeRow = ({ title, skills, speed, reverse = false }) => {
  // Triple the skills to ensure smooth infinite scroll even on large screens
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="py-8">
      <div className="container mx-auto px-6 mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
          {title}
        </h3>
      </div>
      
      <div className="relative overflow-hidden group/marquee">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: reverse ? [0, -100 * skills.length] : [-100 * skills.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <SkillIcon key={`${skill.name}-${index}`} {...skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Technical Stack
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-600 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl">
            A continuous flow of technologies I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {skillCategories.map((category, index) => (
          <MarqueeRow 
            key={category.title}
            title={category.title}
            skills={category.skills}
            speed={category.speed}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;


