import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBuilding } from 'react-icons/fa';

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.15",
    duration: "Since Aug 2023",
    icon: <FaGraduationCap className="text-white text-xl" />
  },
  {
    institution: "Sasi Junior College",
    location: "Andhra Pradesh, India",
    degree: "Intermediate",
    score: "Percentage: 93.7%",
    duration: "Aug 2021 - Mar 2023",
    icon: <FaSchool className="text-white text-xl" />
  },
  {
    institution: "Montessori School",
    location: "Andhra Pradesh, India",
    degree: "Matriculation (10th)",
    score: "Percentage: 99%",
    duration: "Apr 2020 - Mar 2021",
    icon: <FaBuilding className="text-white text-xl" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50  transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={edu.institution}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary-500/20"
            >
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                {edu.icon}
              </div>
              <div className="glass p-6 rounded-2xl border border-slate-100  hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold text-slate-800 ">{edu.institution}</h3>
                  <span className="text-sm font-semibold px-3 py-1 bg-primary-100  text-primary-700  rounded-full">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-700  mb-1">{edu.degree}</p>
                <p className="text-slate-600  mb-2">{edu.location}</p>
                <div className="text-primary-600  font-bold">{edu.score}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
