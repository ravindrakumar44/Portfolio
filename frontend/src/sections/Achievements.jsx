import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const achievementsData = [
  {
    id: 1,
    title: "GFG Campus Ambassador",
    description: "Selected as Campus Ambassador at GeeksforGeeks, recognizing leadership and technical outreach skills.",
    icon: <FaTrophy className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 2,
    title: "Hackathon Participation",
    description: "Advanced to final round in webathon, demonstrating innovative problem-solving skills and teamwork.",
    icon: <FaMedal className="w-8 h-8 text-primary-600" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-white  border-t border-slate-200  transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4">Achievements</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600  max-w-2xl mx-auto text-lg">
            Milestones and recognitions that highlight my dedication and passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform shadow-lg flex flex-col items-center text-center border border-slate-100 "
            >
              <div className="w-16 h-16 rounded-full bg-slate-50  flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-800  mb-3">{item.title}</h3>
              <p className="text-slate-600  leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
