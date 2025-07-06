import React, { useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Handshake, Lightbulb, TrendingUp } from 'lucide-react';

const Events: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [mainEventRef, mainEventInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [divisionsRef, divisionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eventSections = [
    {
      id: 1,
      title: 'Rooted In Culture',
      description: 'Celebrating the rich cultural heritage of rural India through traditional performances, art exhibitions, and craft demonstrations that showcase the deep connection between culture and education.',
      icon: Palette,
      color: 'from-amber-600/20 via-orange-500/10 to-red-600/20',
      accentColor: '#f59e0b',
      features: [
        'Traditional Dance & Music Performances',
        'Local Art & Craft Exhibitions', 
        'Cultural Storytelling Sessions',
        'Heritage Preservation Workshops'
      ],
      highlights: 'Live performances by local artists and cultural groups'
    },
    {
      id: 2,
      title: 'Join the Mission',
      description: 'Engaging university students in meaningful volunteer opportunities to support children in Ekal Vidyalaya and government schools through mentorship, teaching assistance, and community outreach programs.',
      icon: Handshake,
      color: 'from-blue-600/20 via-indigo-500/10 to-purple-600/20',
      accentColor: '#3b82f6',
      features: [
        'Student NGO Displays',
        'Mentorship Program Launch',
        'Teaching Assistant Opportunities',
        'Community Outreach Initiatives'
      ],
      highlights: 'Direct partnership with Ekal Vidyalaya and government schools'
    },
    {
      id: 3,
      title: 'The Problem Lab',
      description: 'An interactive showcase featuring real-world educational challenges faced by rural children, with collaborative problem-solving sessions and innovative solution demonstrations.',
      icon: Lightbulb,
      color: 'from-green-600/20 via-emerald-500/10 to-teal-600/20',
      accentColor: '#10b981',
      features: [
        'Interactive Problem-Solving Stations',
        'Real Case Study Presentations',
        'Collaborative Solution Workshops',
        'Innovation Challenge Competitions'
      ],
      highlights: 'Hands-on problem-solving with real rural education challenges'
    },
    {
      id: 4,
      title: 'Showcase of Our Work',
      description: 'A comprehensive portfolio display featuring our educational interventions, impact metrics, success stories, and future initiatives with dynamic visual presentations and interactive demonstrations.',
      icon: TrendingUp,
      color: 'from-purple-600/20 via-pink-500/10 to-rose-600/20',
      accentColor: '#8b5cf6',
      features: [
        'Impact Metrics Dashboard',
        'Success Story Presentations',
        'Interactive Project Displays',
        'Future Initiative Previews'
      ],
      highlights: 'Dynamic transitions and interactive portfolio displays'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="events" className="section-padding relative overflow-hidden cursor-none font-spartan"
      style={{
        background: `linear-gradient(180deg, #00053F, rgba(0, 5, 63, 0.95), rgba(0, 5, 63, 0.9), #00053F)`
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(0, 5, 63, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(82, 103, 125, 0.2), transparent 50%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              backgroundColor: i % 3 === 0 ? '#00053F' : i % 3 === 1 ? '#52677D' : '#BDC4D4',
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 100,
              y: mousePosition.y + (Math.random() - 0.5) * 100,
              scale: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              x: { duration: 6 + Math.random() * 2, ease: "easeOut" },
              y: { duration: 6 + Math.random() * 2, ease: "easeOut" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}

        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              backgroundColor: i % 2 === 0 ? '#52677D' : '#BDC4D4',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
           <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6 text-shadow font-spartan cursor-none"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 100, rotateX: 90 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1]
                }
              }
            }}
            data-aos="fade-down"
          >
            SFLML EVENT <span 
              className="bg-clip-text text-transparent inline-block"
              style={{
                background: `linear-gradient(135deg, #3b82f6, #1e40af, #00053F)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              2025
            </span>
          </motion.h2>
          <motion.p 
            className="text-2xl max-w-3xl mx-auto leading-relaxed font-medium font-spartan cursor-none"
            style={{ color: '#BDC4D4' }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.8
                }
              }
            }}
          >
            August 2nd, 2025
          </motion.p>
        </motion.div>

        {/* Event Sections - INCREASED WIDTH AND HEIGHT */}
        <motion.div 
          ref={divisionsRef}
          initial="hidden"
          animate={divisionsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {eventSections.map((section, index) => (
              <motion.div 
                key={section.id} 
                className="group relative overflow-hidden cursor-none min-h-[700px] flex flex-col"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 5, 63, 0.9), rgba(82, 103, 125, 0.2))`,
                  borderRadius: index % 2 === 0 ? '2rem 4rem 2rem 4rem' : '4rem 2rem 4rem 2rem',
                  clipPath: index % 2 === 0 
                    ? 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)' 
                    : 'polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%)'
                }}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  rotateY: index % 2 === 0 ? 2 : -2
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-30`}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    delay: index * 2
                  }}
                />

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, ${section.accentColor}40 50%, transparent 70%)`,
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="relative z-10 p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${section.accentColor}40, ${section.accentColor}20)`
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <section.icon className="w-10 h-10" style={{ color: section.accentColor }} />
                    </motion.div>

                    {section.highlights && (
                      <motion.div
                        className="px-4 py-3 rounded-full text-base font-medium border max-w-[280px] text-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${section.accentColor}20, ${section.accentColor}10)`,
                          color: section.accentColor,
                          borderColor: `${section.accentColor}60`
                        }}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        ⭐ {section.highlights}
                      </motion.div>
                    )}
                  </div>

                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-spartan cursor-none">
                    {section.title}
                  </h4>
                  
                  <p className="text-xl mb-8 leading-relaxed font-medium font-spartan cursor-none flex-grow" 
                     style={{ color: '#BDC4D4' }}>
                    {section.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    {section.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={divisionsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div 
                          className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: section.accentColor }}
                        />
                        <span className="text-xl font-medium font-spartan leading-relaxed" style={{ color: '#BDC4D4' }}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {[...Array(1)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: section.accentColor,
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: Math.random() * 4
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <svg className="w-full h-12" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00053F" d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z"/>
      </svg>
    </section>
  );
};

export default Events;