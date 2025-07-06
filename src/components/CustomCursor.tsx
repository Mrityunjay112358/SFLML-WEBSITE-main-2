import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorNode = (
    <div
      className="fixed pointer-events-none z-[9999] w-12 h-12"
      style={{
        left: `${mousePosition.x - 24}px`,
        top: `${mousePosition.y - 24}px`,
        willChange: 'left, top'
      }}
    >
      <motion.img 
        src="/whitelogo.png" 
        alt="Custom Cursor" 
        className="w-full h-full filter brightness-110 drop-shadow-lg"
        style={{
          filter: 'brightness(1.2) drop-shadow(0 0 12px rgba(255, 255, 255, 0.9))',
          willChange: 'transform'
        }}
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );

  return createPortal(cursorNode, document.body);
};

export default CustomCursor; 