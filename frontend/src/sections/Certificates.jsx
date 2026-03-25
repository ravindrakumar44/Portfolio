import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';



const certificatesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Apna College",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80",
    link: "https://drive.google.com/file/d/1OoIfr6QTmTpY_urW-H7pWLa8Z0e0_KKb/view"
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "Apna College",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    link: "https://drive.google.com/file/d/1caGSwtdrwk1uD9NZeYrL0toyp3kCB0CH/view"
  },
  {
    id: 3,
    title: "Hackathon Participation (Webathon)",
    issuer: "Technical Event Organizer",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    link: "#"
  }
];




const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-slate-50  border-t border-slate-200  transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4">Certificates</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform">
                      <FaExternalLinkAlt size={24} className="text-primary-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-800  mb-1 group-hover:text-primary-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary-600  font-semibold">
                    {cert.issuer}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Certificates;

