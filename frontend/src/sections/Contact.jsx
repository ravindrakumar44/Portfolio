import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Failed to send message');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again later.');
      setStatus('error');
    }
    
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white  border-t border-slate-200  transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600  max-w-2xl mx-auto text-lg mb-4">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col items-center gap-2 text-slate-700  font-medium">
            <p>Email: <a href="mailto:ravindrarajpurohit1220@gmail.com" className="text-primary-600 hover:underline">ravindrarajpurohit1220@gmail.com</a></p>
            <p>Mobile: <a href="tel:+919550605669" className="text-primary-600 hover:underline">+91-9550605669</a></p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass p-8 md:p-10 rounded-3xl flex flex-col gap-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 ">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-slate-200  bg-slate-50  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-slate-900 "
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-slate-200  bg-slate-50  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-slate-900 "
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 ">Your Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="px-4 py-3 rounded-xl border border-slate-200  bg-slate-50  focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-slate-900  resize-none"
                placeholder="Hello, I'd like to work with you on a project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-4 flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-primary-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
            
            {status === 'success' && (
              <p className="text-green-600  text-center font-medium mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600  text-center font-medium mt-2">{errorMsg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
