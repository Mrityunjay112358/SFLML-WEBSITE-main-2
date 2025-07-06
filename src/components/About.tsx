import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Spline from '@splinetool/react-spline';
import { BookOpen, Star, Sparkles, Database, Lock, Network, Cpu, Eye, Shield, Compass, ArrowRight, Users, School, Target } from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]), springConfig);

  const [problemRef, problemInView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true,
    rootMargin: "-50px 0px"
  });
  const [heroRef, heroInView] = useInView({ 
    threshold: 0.3, 
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });
  const [knowledgeRef, knowledgeInView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true,
    rootMargin: "-50px 0px"
  });
  const [missionRef, missionInView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true,
    rootMargin: "-50px 0px"
  });
  const [partnershipsRef, partnershipsInView] = useInView({ 
    threshold: 0.2, 
    triggerOnce: true,
    rootMargin: "-50px 0px"
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.7) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const problemStats = [
    { label: 'Educational Access Gaps', value: '78%', color: 'from-gray-700 to-gray-800', icon: Database },
    { label: 'Resource Constraints', value: '65%', color: 'from-gray-800 to-gray-900', icon: Lock },
    { label: 'Limited Connectivity', value: '82%', color: 'from-gray-600 to-gray-700', icon: Network },
    { label: 'Teacher Shortages', value: '71%', color: 'from-gray-700 to-gray-600', icon: Cpu }
  ];

  const missionPillars = [
    {
      icon: Eye,
      title: 'Identify',
      description: 'Mapping educational gaps in underserved communities',
      color: 'from-gray-700 via-gray-800 to-gray-900',
      delay: 0
    },
    {
      icon: Shield,
      title: 'Implement',
      description: 'Deploying sustainable learning solutions',
      color: 'from-gray-800 via-gray-700 to-gray-900',
      delay: 0.2
    },
    {
      icon: Compass,
      title: 'Impact',
      description: 'Measuring and scaling successful interventions',
      color: 'from-gray-600 via-gray-800 to-gray-700',
      delay: 0.4
    }
  ];

  const partnershipLinks = [
    {
      title: 'Partnership with Ekal Vidyalaya',
      description: 'Collaborative educational initiatives with Ekal Vidyalaya Foundation',
      icon: School,
      href: '#ekal-partnership',
      color: 'from-blue-600/20 via-indigo-500/10 to-purple-600/20',
      accentColor: '#3b82f6'
    },
    {
      title: 'Student NGO Partnerships',
      description: 'Collaborative networks with student organizations',
      icon: Users,
      href: '#student-ngo',
      color: 'from-green-600/20 via-emerald-500/10 to-teal-600/20',
      accentColor: '#10b981'
    },
    {
      title: 'Our Flagship Event',
      description: 'Annual gathering showcasing educational innovation',
      icon: Target,
      href: '#events',
      color: 'from-purple-600/20 via-pink-500/10 to-rose-600/20',
      accentColor: '#8b5cf6'
    }
  ];

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggeredChildVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      rotateX: 45,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    })
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-[450vh] overflow-hidden cursor-none font-spartan pt-24 pb-32"
      style={{
        background: `linear-gradient(180deg, #00053F, rgba(0, 5, 63, 0.95), rgba(0, 5, 63, 0.9), #00053F)`
      }}
    >
     <motion.h2 
        className="text-4xl lg:text-6xl font-bold text-white mb-12 text-center mt-24 text-shadow font-spartan cursor-none"
        initial={{ opacity: 0, y: 100, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        data-aos="fade-down"
      >
        About <span 
          className="bg-clip-text text-transparent inline-block"
          style={{
            background: `linear-gradient(135deg, #3b82f6, #1e40af, #00053F)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          SFLML
        </span>
      </motion.h2>
      {/* Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: y1 }}
      >
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 30% 70%, rgba(0, 5, 63, 0.3), rgba(82, 103, 125, 0.2), rgba(189, 196, 212, 0.1), rgba(0, 5, 63, 0.9))`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 60, repeat: Infinity }}
        />
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-15"
            style={{
              backgroundColor: i % 3 === 0 ? '#00053F' : i % 3 === 1 ? '#52677D' : '#BDC4D4',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10">
        
        {/* Problem Section - NOW FIRST */}
        <div className="py-32 flex items-center justify-center px-6">
          <motion.div 
            ref={problemRef}
            className="max-w-6xl mx-auto cursor-none"
            variants={sectionVariants}
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
            style={{ y: y2 }}
          >
            <motion.div
              className="text-center mb-20"
              variants={staggeredChildVariants}
            >
              <motion.h3 
                className="text-4xl lg:text-5xl font-bold text-white mt-20 mb-4 font-spartan cursor-none"
                variants={staggeredChildVariants}
              >
                The <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >Challenge</span>
              </motion.h3>
              <motion.p 
                className="text-xl max-w-3xl mx-auto font-medium font-spartan cursor-none mb-16" 
                style={{ color: '#BDC4D4' }}
                variants={staggeredChildVariants}
              >
                Rural India faces significant educational barriers that require innovative, 
                technology-enabled solutions and collaborative approaches.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={sectionVariants}
            >
              {problemStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-none"
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    borderRadius: index % 2 === 0 ? '2rem 1rem 2rem 1rem' : '1rem 2rem 1rem 2rem'
                  }}
                >
                  <div className="relative p-8 backdrop-blur-xl border overflow-hidden cursor-none"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 5, 63, 0.8), rgba(82, 103, 125, 0.2))`,
                      borderColor: 'rgba(189, 196, 212, 0.3)',
                      borderRadius: 'inherit'
                    }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 180, 270, 360]
                      }}
                      transition={{ duration: 20, repeat: Infinity, delay: index * 0.8 }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={problemInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      >
                        <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: '#52677D' }} />
                      </motion.div>
                      <motion.div 
                        className="text-6xl font-black text-white mb-4 font-spartan"
                        initial={{ scale: 0 }}
                        animate={problemInView ? { scale: [0, 1.2, 1] } : {}}
                        transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                      >
                        {stat.value}
                      </motion.div>
                      <motion.p 
                        className="font-medium leading-tight text-lg font-spartan" 
                        style={{ color: '#BDC4D4' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={problemInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.3 + 0.8 }}
                      >
                        {stat.label}
                      </motion.p>
                    </div>

                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(82, 103, 125, 0.2), transparent)`
                      }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Section - NOW SECOND */}
        <div className="py-32 flex items-center justify-center px-6">
          <motion.div 
            ref={heroRef}
            className="text-center max-w-6xl mx-auto cursor-none"
            variants={sectionVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div
              style={{ y: y1, scale }}
              className="relative"
            >
              <motion.h2 
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-spartan cursor-none"
                variants={staggeredChildVariants}
              >
                <motion.span 
                  className="block text-white cursor-none"
                  variants={staggeredChildVariants}
                >
                  Bridging
                </motion.span>
                <motion.span 
                  className="block bg-clip-text text-transparent my-4 cursor-none"
                  style={{
                    background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 100%'
                  }}
                  variants={staggeredChildVariants}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    backgroundPosition: { duration: 8, repeat: Infinity },
                    ...staggeredChildVariants.visible.transition
                  }}
                >
                  Educational
                </motion.span>
                <motion.span 
                  className="block text-white cursor-none"
                  variants={staggeredChildVariants}
                >
                  Divides
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed opacity-90 text-gray-300 font-medium font-spartan cursor-none mb-12"
                variants={staggeredChildVariants}
              >
               Addressing systemic challenges in rural education through partnership with Ekal Vidyalaya Foundation, 
              Student NGO Partnerships, and our Flagship Event.
              </motion.p>

              <motion.div
                className="absolute -top-20 -left-20 w-20 h-20 rounded-full blur-2xl"
                style={{ backgroundColor: 'rgba(0, 5, 63, 0.2)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 120, 240, 360]
                }}
                transition={{ duration: 25, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* NEW: Dynamic Partnerships Section */}
        <div className="py-32 flex items-center justify-center px-6">
          <motion.div 
            ref={partnershipsRef}
            className="max-w-6xl mx-auto text-center cursor-none"
            variants={sectionVariants}
            initial="hidden"
            animate={partnershipsInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-white mb-8 font-spartan cursor-none"
              variants={staggeredChildVariants}
            >
              Our <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >Partnerships</span>
            </motion.h3>

          

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={sectionVariants}
            >
              {partnershipLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden cursor-none"
                  style={{
                    clipPath: index === 0 ? 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)' :
                             index === 1 ? 'polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%)' :
                             'polygon(0% 0%, 100% 0%, 100% 85%, 15% 100%)'
                  }}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: index % 2 === 0 ? 3 : -3
                  }}
                  onClick={() => scrollToSection(link.href)}
                >
                  <div 
                    className="relative p-8 backdrop-blur-xl border overflow-hidden cursor-none min-h-[300px] flex flex-col justify-between"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 5, 63, 0.9), rgba(82, 103, 125, 0.2))`,
                      borderColor: 'rgba(189, 196, 212, 0.3)'
                    }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-30`}
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
                        background: `linear-gradient(45deg, transparent 30%, ${link.accentColor}40 50%, transparent 70%)`,
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

                    <div className="relative z-10 flex flex-col h-full">
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                        style={{
                          background: `linear-gradient(135deg, ${link.accentColor}40, ${link.accentColor}20)`
                        }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <link.icon className="w-8 h-8" style={{ color: link.accentColor }} />
                      </motion.div>

                      <h4 className="text-2xl font-bold text-white mb-4 font-spartan cursor-none text-center">
                        {link.title}
                      </h4>
                      
                      <p className="text-lg mb-6 leading-relaxed font-medium font-spartan cursor-none text-center flex-grow" 
                         style={{ color: '#BDC4D4' }}>
                        {link.description}
                      </p>

                      <motion.div 
                        className="flex items-center justify-center space-x-2 text-lg font-medium font-spartan cursor-none group-hover:scale-110 transition-transform duration-300"
                        style={{ color: link.accentColor }}
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(189, 196, 212, 0.1), transparent)`
                      }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Knowledge Section with 3D Book - NOW FOURTH */}
        <div className="py-32 flex items-center justify-center px-6 relative">
          <motion.div 
            ref={knowledgeRef}
            className="max-w-6xl mx-auto text-center relative z-10 cursor-none"
            variants={sectionVariants}
            initial="hidden"
            animate={knowledgeInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-5xl lg:text-6xl font-bold text-white mb-8 font-spartan cursor-none"
              variants={staggeredChildVariants}
            >
              Educational <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >Innovation</span>
            </motion.h3>

            <motion.p 
              className="text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium font-spartan cursor-none"
              style={{ color: '#BDC4D4' }}
              variants={staggeredChildVariants}
            >
              Leveraging technology and collaborative partnerships to create sustainable 
              learning ecosystems in underserved communities.
            </motion.p>

            {/* 3D Book Animation Container - ENABLED FOR INTERACTION */}
            <motion.div 
              className="relative w-full h-96 lg:h-[500px] mx-auto mb-12 cursor-none"
              variants={staggeredChildVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{
                pointerEvents: 'auto'
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2), transparent 60%)`
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.05, 0.15, 0.05]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              }>
                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  style={{
                    pointerEvents: 'auto'
                  }}
                >
                  <Spline
                    scene="https://prod.spline.design/0EiB919XJ-ARI0LW/scene.splinecode"
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'transparent',
                      pointerEvents: 'auto'
                    }}
                  />
                </motion.div>
              </Suspense>

              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full opacity-15 pointer-events-none"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#3b82f6' : '#60a5fa',
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.05, 0.2, 0.05],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={sectionVariants}
            >
              {[
                { value: '10,000+', label: 'Learning Resources Distributed', icon: BookOpen },
                { value: '1000+', label: 'Educational Centers', icon: Star },
                { value: '30000+', label: 'Students Reached', icon: Sparkles }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 border cursor-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(0, 5, 63, 0.8), rgba(82, 103, 125, 0.2))`,
                    borderColor: 'rgba(189, 196, 212, 0.3)',
                    borderRadius: index === 1 ? '2rem' : '1rem 2rem 1rem 2rem'
                  }}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={knowledgeInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 1.8 }}
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: '#52677D' }} />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2 font-spartan"
                    initial={{ scale: 0 }}
                    animate={knowledgeInView ? { scale: [0, 1.2, 1] } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-lg font-medium font-spartan" 
                    style={{ color: '#BDC4D4' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={knowledgeInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 2.2 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Section - NOW FIFTH */}
        <div className="py-22 flex items-center justify-center px-6">
          <motion.div 
            ref={missionRef}
            className="max-w-6xl mx-auto text-center cursor-none"
            variants={sectionVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-5xl lg:text-6xl font-bold text-white mb-20 font-spartan cursor-none"
              variants={staggeredChildVariants}
            >
              Our <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >Approach</span>
            </motion.h3>

            <motion.div 
              className="grid md:grid-cols-3 gap-12"
              variants={sectionVariants}
            >
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-none"
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="relative group cursor-none"
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      y: { duration: 4, repeat: Infinity, delay: index * 0.8 }
                    }}
                  >
                    <motion.div 
                      className="w-56 h-56 mx-auto rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border mb-8"
                      style={{
                        background: `linear-gradient(135deg, #52677D, #00053F, #BDC4D4)`,
                        borderColor: 'rgba(189, 196, 212, 0.4)'
                      }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={missionInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 1, 
                        delay: pillar.delay + 0.8,
                        type: "spring",
                        stiffness: 120
                      }}
                    >
                      <div className="w-24 h-24 text-white z-10 relative">
                        <pillar.icon className="w-full h-full" />
                      </div>
                      
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(90deg, transparent, rgba(189, 196, 212, 0.2), transparent)`
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.8 }}
                      />
                      
                      <motion.div
                        className="absolute inset-6 rounded-full"
                        style={{
                          background: `radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%)`
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />

                      <motion.div
                        className="absolute -inset-2 rounded-full"
                        style={{
                          background: `radial-gradient(circle, transparent 60%, rgba(189, 196, 212, 0.2) 70%, transparent 80%)`
                        }}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={missionInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: pillar.delay + 1.2 }}
                    >
                      <h4 className="text-4xl font-bold text-white mb-6 font-spartan cursor-none">{pillar.title}</h4>
                      <p className="text-2xl font-medium font-spartan cursor-none" style={{ color: '#BDC4D4' }}>{pillar.description}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
      <svg className="w-full h-12" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00053F" d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z"/>
      </svg>
    </section>
  );
};

export default About;
