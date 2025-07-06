import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About SFLML' },
    { id: 'events', label: 'Event' },
    { id: 'work', label: 'Our Work' },
    { id: 'team', label: 'Meet Our Team' },
  ];

  useEffect(() => {
    let scrollTimeout: number;
    
    // DEBOUNCED scroll handler (150ms as requested)
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 150);
    };

    // LISTEN FOR EXPLOSION EVENT - Show navigation after explosion
    const handleExplosionComplete = () => {
      setTimeout(() => {
        setShowNavigation(true);
      }, 1200); // Show navigation 1.2 seconds after explosion
    };

    // Listen for custom explosion event
    window.addEventListener('explosionComplete', handleExplosionComplete);
    
    // Fallback: Show navigation after 4 seconds regardless
    const fallbackTimer = setTimeout(() => {
      setShowNavigation(true);
    }, 4000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('explosionComplete', handleExplosionComplete);
      clearTimeout(scrollTimeout);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {showNavigation && (
        <motion.nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cursor-none font-spartan touch-optimized ${
            isScrolled 
              ? 'bg-gradient-to-r from-black/95 via-gray-900/30 to-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-600/30' 
              : 'bg-transparent'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'transform, background-color, opacity'
          }}
        >
          <div className="container-max">
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* Logo with hardware acceleration */}
              <motion.div 
                className="flex items-center space-x-3 cursor-none"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ scale: 1.05 }}
                style={{ transform: 'translateZ(0)', willChange: 'transform' }}
              >
                <div className="relative cursor-none">
                  <img 
                    src="public/whitelogo.png" 
                    alt="SFLML Logo" 
                    className="h-14 w-auto filter brightness-110 cursor-none"
                    style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                  />
                  <motion.div 
                    className="absolute -top-1 -right-1 h-2 w-2 rounded-full"
                    style={{ 
                      backgroundColor: '#00053F',
                      transform: 'translateZ(0)',
                      willChange: 'transform, opacity'
                    }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <motion.span 
                  className="text-2xl font-semibold cursor-none"
                  style={{
                    background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  SFLML
                </motion.span>
              </motion.div>

              {/* Desktop Navigation with hardware acceleration */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group cursor-none ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    style={{
                      color: activeSection === item.id ? '#BDC4D4' : '#52677D',
                      transform: 'translateZ(0)',
                      willChange: 'transform, color'
                    }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #BDC4D4, #52677D, #00053F)`,
                          transform: 'translateZ(0)',
                          willChange: 'transform'
                        }}
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Mystical hover effect with hardware acceleration */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, rgba(0, 5, 63, 0.2), rgba(82, 103, 125, 0.1))`,
                        transform: 'translateZ(0)',
                        willChange: 'transform, opacity'
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button with hardware acceleration */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md transition-colors border cursor-none"
                style={{
                  backgroundColor: 'rgba(82, 103, 125, 0.2)',
                  borderColor: 'rgba(189, 196, 212, 0.3)',
                  color: '#BDC4D4',
                  transform: 'translateZ(0)',
                  willChange: 'transform, background-color'
                }}
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(0, 5, 63, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu with hardware acceleration */}
          <motion.div
            className={`lg:hidden absolute top-full left-0 right-0 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
          >
            <div 
              className="backdrop-blur-xl border-t border-b touch-optimized"
              style={{
                background: `linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 5, 63, 0.3), rgba(82, 103, 125, 0.2))`,
                borderColor: 'rgba(189, 196, 212, 0.3)',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 text-lg cursor-none ${
                      activeSection === item.id
                        ? 'border'
                        : ''
                    }`}
                    style={{
                      color: activeSection === item.id ? '#BDC4D4' : '#52677D',
                      backgroundColor: activeSection === item.id 
                        ? 'rgba(0, 5, 63, 0.4)' 
                        : 'transparent',
                      borderColor: activeSection === item.id 
                        ? 'rgba(189, 196, 212, 0.5)' 
                        : 'transparent',
                      transform: 'translateZ(0)',
                      willChange: 'transform, background-color'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      x: 5,
                      backgroundColor: 'rgba(82, 103, 125, 0.2)'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span className="font-spartan">{item.label}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;