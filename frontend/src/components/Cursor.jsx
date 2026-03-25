import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use a softer color depending on theme, or brand color
  const cursorColor = isDarkMode ? '#22d3ee' : '#0891b2';

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ 
          backgroundColor: cursorColor,
          boxShadow: `0 0 10px ${cursorColor}, 0 0 20px ${cursorColor}`
        }}
        animate={{ 
          x: mousePosition.x - 6, 
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[100]"
        style={{ 
          borderColor: cursorColor,
          boxShadow: `0 0 8px ${cursorColor} inset, 0 0 8px ${cursorColor}`
        }}
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.2)' : 'transparent'
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
    </>
  );
};

export default Cursor;
