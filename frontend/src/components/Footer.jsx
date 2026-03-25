import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100  border-t border-slate-200  py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-900  mb-2">Ravindra<span className="text-primary-600">.</span></h3>
          <p className="text-sm text-slate-600 ">
            Building modern web experiences with passion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/ravindrakumar44" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900  transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ravindra-rajpurohit-629bb028b/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5]  transition-colors">
            <FaLinkedin size={24} />
          </a>

          <a href="mailto:ravindrarajpurohit1220@gmail.com" className="text-slate-500 hover:text-red-500  transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-slate-500 ">
        &copy; {currentYear} Ravindra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
