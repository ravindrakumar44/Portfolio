import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "SigmaGPT",
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    desc: "AI-powered chat application integrated with OpenAI's gpt-4o-mini for real-time conversational responses.",
    github: "https://github.com/ravindrakumar44/SigmaGPT",
    live: "#"
  },
  {
    id: 2,
    title: "Wanderlust",
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    desc: "Property listing platform with secure authentication, image storage via Cloudinary, and review features.",
    github: "https://github.com/ravindrakumar44/Wanderlust",
    live: "#"
  },
  {
    id: 3,
    title: "Spotify Clone",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
    desc: "A responsive Spotify home page clone built using HTML and CSS.",
    github: "https://github.com/ravindrakumar44/CSS-Project",
    live: "#"
  },
  {
    id: 4,
    title: "Simon Says Game",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&h=400&fit=crop",
    desc: "The classic Simon Says memory game built using HTML, CSS, and Vanilla JavaScript.",
    github: "https://github.com/ravindrakumar44/Simon-Says-Game",
    live: "#"
  }
];


const categories = ["All", "Frontend", "Backend", "Fullstack"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-white  border-t border-slate-200  transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md ${
                  activeCategory === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 p-4 rounded-full shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform">
                        <FaGithub size={24} className="text-primary-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary-600  uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900  mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600  text-sm">
                      {project.desc}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
