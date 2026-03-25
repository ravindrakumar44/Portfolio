import { 
  FaJava, FaJs, FaHtml5, FaReact, FaNodeJs, FaDatabase, FaCode, 
  FaLightbulb, FaUsers, FaUserGraduate, FaComments, FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql 
} from 'react-icons/si';

export const skillCategories = [
  {
    title: "Frontend",
    speed: 40,
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    ]
  },
  {
    title: "Backend & Databases",
    speed: 50,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#444444" },
      { name: "EJS Templating", icon: <FaCode />, color: "#B4CA65" },
      { name: "REST APIs", icon: <SiExpress />, color: "#444444" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ]
  },
  {
    title: "Languages & Soft Skills",
    speed: 45,
    skills: [
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "Problem-Solving", icon: <FaLightbulb />, color: "#FFD700" },
      { name: "Team Work", icon: <FaUsers />, color: "#4682B4" },
      { name: "Self Learner", icon: <FaUserGraduate />, color: "#2E8B57" },
      { name: "Communication", icon: <FaComments />, color: "#FF69B4" },
    ]
  }
];




