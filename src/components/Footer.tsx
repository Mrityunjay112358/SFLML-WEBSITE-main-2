import React from 'react';
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
  const [footerRef, footerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About SFLML', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Our Work', href: '#work' },
    { name: 'Team', href: '#team' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/jpistudents/', color: 'hover:text-pink-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <footer className="relative overflow-hidden cursor-none font-spartan"
      style={{
        background: `linear-gradient(135deg, #00053F, rgba(0, 5, 63, 0.95), rgba(0, 5, 63, 0.9), #00053F)`
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at 30% 70%, rgba(0, 5, 63, 0.3), transparent 60%), radial-gradient(circle at 70% 30%, rgba(82, 103, 125, 0.2), transparent 60%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 40, repeat: Infinity }}
        />

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              backgroundColor: i % 3 === 0 ? '#00053F' : i % 3 === 1 ? '#52677D' : '#BDC4D4',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.3, 0.05],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 12 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <motion.div 
        ref={footerRef}
        className="section-padding relative z-10"
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container-max">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6 cursor-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img 
                    src="/whitelogo.png" 
                    alt="SFLML Logo" 
                    className="h-12 w-auto filter brightness-110"
                  />
                  <motion.div 
                    className="absolute -top-1 -right-1 h-4 w-4 rounded-full"
                    style={{ backgroundColor: '#00053F' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span 
                  className="text-2xl font-bold font-spartan"
                  style={{
                    background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  SFLML
                </span>
              </motion.div>
              
              <motion.p 
                className="mb-6 leading-relaxed font-spartan"
                style={{ color: '#BDC4D4' }}
                variants={itemVariants}
              >
                Students For Last-Mile Learning - Bridging educational gaps through innovative 
                partnerships and technology-enabled solutions for rural communities.
              </motion.p>

              <motion.div 
                className="space-y-3"
                variants={containerVariants}
              >
                {[
                  { icon: Mail, text: 'council@jpischool.com' },
                  { icon: Phone, text: '+91 99824 62685' },
                  { icon: Phone, text: '+91 70086 04074' },
                  { icon: Phone, text: '+91 81070 51902' },
                  { icon: MapPin, text: 'Jaipur, India' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 text-sm group cursor-none"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, #00053F, #52677D)`
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <span className="font-spartan" style={{ color: '#BDC4D4' }}>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white font-spartan">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                  >
                    <motion.a 
                      href={link.href} 
                      className="text-sm flex items-center group transition-colors duration-300 cursor-none"
                      style={{ color: '#BDC4D4' }}
                      whileHover={{ 
                        x: 5,
                        color: '#ffffff'
                      }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-spartan">{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white font-spartan">Connect With Us</h4>
              <motion.div 
                className="flex space-x-3"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:-translate-y-1 ${social.color} border group relative cursor-none`}
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 5, 63, 0.3), rgba(82, 103, 125, 0.3))`,
                      borderColor: 'rgba(189, 196, 212, 0.3)'
                    }}
                    aria-label={social.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      background: `linear-gradient(135deg, rgba(0, 5, 63, 0.6), rgba(82, 103, 125, 0.6))`
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="py-6 relative z-10 border-t"
        style={{ borderColor: 'rgba(189, 196, 212, 0.3)' }}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container-max">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            variants={itemVariants}
          >
            <div className="text-sm font-spartan" style={{ color: '#52677D' }}>
              © {currentYear} Students for Last-Mile Learning. Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="h-4 w-4 inline text-red-400" />
              </motion.span>{' '}
              for educational equity.
            </div>
            <motion.div 
              className="flex space-x-6 text-sm"
              variants={containerVariants}
            >
              {['Privacy', 'Terms', 'Contact'].map((item, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="transition-colors duration-300 cursor-none font-spartan"
                  style={{ color: '#52677D' }}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -2,
                    color: '#BDC4D4'
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;