import React, { Suspense, useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [logoDrop, setLogoDrop] = useState(false);
  const [logoExpand, setLogoExpand] = useState(false);
  const [logoSpin, setLogoSpin] = useState(false);
  const [explosion, setExplosion] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 120, damping: 25, restDelta: 0.001 };
  
  const splineScale = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.8, 2.5, 3.5]),
    springConfig
  );
  
  const splineOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [1.0, 0.9, 0.6, 0.2, 0]),
    springConfig
  );
  
  const splineRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 360]),
    springConfig
  );
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLogoDrop(true);
      
      setTimeout(() => {
        setLogoExpand(true);
        
        setTimeout(() => {
          setLogoSpin(true);
          
          setTimeout(() => {
            setExplosion(true);
            
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('explosionComplete'));
            }, 800);
            
            setTimeout(() => {
              setIsLoaded(true);
              setTimeout(() => {
                setShowContent(true);
              }, 200);
            }, 800);
          }, 400);
        }, 600);
      }, 500);
    }, 500);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      rotateX: 90,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: i * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    })
  };

  const logoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.3,
      rotateY: 180,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 0.9,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        delay: 2.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="min-h-screen relative overflow-hidden cursor-none font-spartan smooth-scroll touch-optimized"
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15), transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(30, 64, 175, 0.12), transparent 50%),
          radial-gradient(circle at center, rgba(15, 23, 42, 0.8), rgba(0, 5, 63, 0.95), #00053F)
        `,
        transform: 'translateZ(0)',
        willChange: 'transform, scroll-position'
      }}
    >
      {/* Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: explosion ? 3 : 1.1,
            }}
            transition={{ 
              duration: explosion ? 1 : 1.2,
              ease: explosion ? "easeOut" : [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed inset-0 z-50 flex items-center justify-center cursor-none font-spartan"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15), transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(30, 64, 175, 0.12), transparent 50%),
                radial-gradient(circle at center, rgba(15, 23, 42, 0.8), rgba(0, 5, 63, 0.95), #00053F)
              `,
              transform: 'translateZ(0)',
              willChange: 'transform, opacity'
            }}
          >
            {/* Ripple explosion effect */}
            <AnimatePresence>
              {explosion && (
                <>
                  <motion.div
                    className="absolute w-full h-full"
                    style={{
                      background: `radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.6), transparent 50%)`,
                      transform: 'translateZ(0)',
                      willChange: 'transform, opacity'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 4, 6],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut"
                    }}
                  />

                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`ripple-${i}`}
                      className="absolute border-2 rounded-full"
                      style={{
                        borderColor: i % 4 === 0 ? 'rgba(255, 255, 255, 0.8)' : 
                                   i % 4 === 1 ? 'rgba(59, 130, 246, 0.7)' : 
                                   i % 4 === 2 ? 'rgba(30, 64, 175, 0.6)' : 
                                   'rgba(96, 165, 250, 0.5)',
                        borderWidth: i < 4 ? '3px' : i < 8 ? '2px' : '1px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%) translateZ(0)',
                        willChange: 'transform, opacity'
                      }}
                      initial={{ width: 0, height: 0, opacity: 1 }}
                      animate={{
                        width: `${(i + 1) * 180}px`,
                        height: `${(i + 1) * 180}px`,
                        opacity: [1, 0.8, 0.4, 0]
                      }}
                      transition={{
                        duration: 1.5 + i * 0.08,
                        delay: i * 0.04,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Main Loading Animation Container */}
            <motion.div 
              className="relative"
              animate={explosion ? { scale: 0, opacity: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
            >
              {/* Concentric Circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`concentric-${i}`}
                  className="absolute border rounded-full"
                  style={{
                    width: `${300 + i * 90}px`,
                    height: `${300 + i * 90}px`,
                    left: `${-150 - i * 45}px`,
                    top: `${-150 - i * 45}px`,
                    borderColor: i === 0 ? 'rgba(59, 130, 246, 0.6)' : 
                               i === 1 ? 'rgba(30, 64, 175, 0.4)' : 
                               'rgba(15, 23, 42, 0.3)',
                    borderWidth: i === 0 ? '3px' : '2px',
                    transform: 'translateZ(0)',
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    rotate: logoSpin ? [0, 360] : [0, 360],
                    scale: logoSpin ? [1, 1.1, 1] : [1, 1.05, 1],
                    opacity: logoSpin ? [0.6, 1, 0.6] : [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    rotate: { 
                      duration: 5,
                      ease: "easeInOut",
                      repeat: logoSpin ? 1 : Infinity,
                      repeatType: "loop"
                    },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    delay: i * 0.2
                  }}
                />
              ))}

              {/* Central Circle Container */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                style={{
                  width: '300px',
                  height: '300px',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
                animate={logoSpin ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                } : {
                  scale: [1, 1.05, 1]
                }}
                transition={logoSpin ? {
                  rotate: { 
                    duration: 5,
                    ease: "easeInOut",
                    repeat: 1
                  },
                  scale: { duration: 2, ease: "easeInOut" }
                } : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4"
                  style={{
                    borderColor: 'rgba(59, 130, 246, 0.8)',
                    background: `radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(30, 64, 175, 0.1), transparent)`,
                    transform: 'translateZ(0)',
                    willChange: 'transform, border-color, box-shadow'
                  }}
                  animate={{
                    rotate: logoSpin ? [0, 360] : [0, 360],
                    borderColor: logoSpin ? 
                      ['rgba(59, 130, 246, 0.8)', 'rgba(255, 255, 255, 1)', 'rgba(59, 130, 246, 1)'] :
                      'rgba(59, 130, 246, 0.8)',
                    boxShadow: logoSpin ?
                      ['0 0 30px rgba(59, 130, 246, 0.5)', '0 0 80px rgba(255, 255, 255, 1)', '0 0 120px rgba(59, 130, 246, 1)'] :
                      '0 0 30px rgba(59, 130, 246, 0.5)'
                  }}
                  transition={{
                    rotate: logoSpin ? { 
                      duration: 5, 
                      ease: "easeInOut",
                      repeat: 1
                    } : { 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "linear" 
                    },
                    borderColor: logoSpin ? { duration: 5, ease: "easeInOut" } : {},
                    boxShadow: logoSpin ? { duration: 5, ease: "easeInOut" } : {}
                  }}
                />

                <motion.div
                  className="relative z-20 flex items-center justify-center"
                  style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
                  initial={{ y: -400, opacity: 0, scale: 0.2 }}
                  animate={{
                    y: logoDrop && !logoExpand ? [0, 15, -8, 3, 0] : 0,
                    opacity: logoDrop ? 1 : 0,
                    scale: logoSpin ? 
                      1.0 :
                      logoExpand ? 
                      [0.2, 0.4, 0.6, 0.8, 1.0] :
                      logoDrop && !logoExpand ? 
                      [0.2, 0.25, 0.22, 0.24, 0.2] :
                      0.2,
                    rotateZ: logoSpin ? 
                      [0, 360] :
                      logoExpand ? 
                      [0, 90, 180, 270, 360] :
                      0
                  }}
                  transition={{
                    y: logoDrop ? { 
                      duration: 0.8, 
                      ease: "easeOut", 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15 
                    } : {},
                    opacity: { duration: 0.4 },
                    scale: logoSpin ? 
                      {} :
                      logoExpand ? {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        times: [0, 0.25, 0.5, 0.75, 1]
                      } : logoDrop ? {
                        duration: 0.8,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      } : {},
                    rotateZ: logoSpin ? { 
                      duration: 5,
                      ease: "easeInOut",
                      repeat: 1
                    } : logoExpand ? {
                      duration: 0.6,
                      ease: "linear"
                    } : {}
                  }}
                >
                  <img 
                    src="public/whitelogo.png" 
                    alt="SFLML Logo" 
                    className="filter brightness-110 drop-shadow-2xl"
                    style={{ 
                      height: '120px',
                      width: 'auto',
                      transform: 'translateX(-2px) translateY(-1px) translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Loading Text */}
              <motion.div
                className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ transform: 'translateX(-50%) translateZ(0)', willChange: 'transform, opacity' }}
              >
                <motion.h3
                  className="text-4xl font-semibold mb-2 text-white font-spartan"
                  animate={{
                    textShadow: ['0 0 10px rgba(255,255,255,0.5)', '0 0 20px rgba(59,130,246,0.8)', '0 0 10px rgba(255,255,255,0.5)']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  style={{ transform: 'translateZ(0)', willChange: 'text-shadow' }}
                >
                  SFLML
                </motion.h3>
                <motion.p
                  className="text-lg text-blue-200 font-medium font-spartan"
                  animate={{
                    opacity: logoSpin ? [1, 0] : [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: logoSpin ? 0.15 : 1.5,
                    repeat: logoSpin ? 0 : Infinity
                  }}
                  style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
                >
                  {logoSpin ? "Launching Platform..." : 
                   logoExpand ? "Loading Framework..." :
                   logoDrop ? "Connecting Network..." : 
                   "Initializing System..."}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Spline 3D Animation Background */}
      <motion.div 
        style={{ 
          y, 
          scale: splineScale,
          opacity: splineOpacity,
          rotateZ: splineRotate,
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Suspense fallback={null}>
          <motion.div
            style={{
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%) translateZ(0)',
              transformOrigin: 'center center',
              willChange: 'transform',
              position: 'absolute',
              top: '50%',
              left: '50%',
              overflow: 'hidden'
            }}
          >
            <Spline
              scene="https://prod.spline.design/U8YKOCnGNejolkau/scene.splinecode"
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent'
              }}
            />
          </motion.div>
        </Suspense>
        
        {/* Fade overlay to hide artifacts */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            backgroundColor: "#00053F", 
            opacity: 0.2,
            mixBlendMode: "multiply"
          }} 
        />
        
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.3], [0.3, 0.6]),
            background: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.04), transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.03), transparent 40%),
              radial-gradient(circle at center, rgba(15, 23, 42, 0.15), rgba(0, 5, 63, 0.35), rgba(0, 5, 63, 0.45), #00053F)
            `,
            transform: 'translateZ(0)',
            willChange: 'opacity',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            right: '-50%',
            bottom: '-50%',
            width: '200%',
            height: '200%'
          }}
          className="z-20"
        />
      </motion.div>

      {/* Background Safety Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(30, 64, 175, 0.06), transparent 50%),
            radial-gradient(circle at center, rgba(15, 23, 42, 0.4), rgba(0, 5, 63, 0.5), #00053F)
          `,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />

      {/* Minimal floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" style={{ transform: 'translateZ(0)' }}>
        {[...Array(1)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)`,
              borderRadius: '50%',
              transform: 'translateZ(0)',
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 6 - 3, 0],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.02, 0.1, 0.02]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-30 section-padding" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
        <div className="container-max">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            {/* Main Content */}
            <AnimatePresence>
              {showContent && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  className="max-w-5xl mx-auto"
                  style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                >
                  {/* Logo */}
                  <motion.div 
                    className="mb-8 magnetic relative flex justify-center"
                    variants={logoVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      filter: "brightness(1.2) drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))"
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      marginLeft: '1rem',
                      marginTop: '2rem',
                      transform: 'translateZ(0)',
                      willChange: 'transform, filter'
                    }}
                    initial={{ scale: 0, rotateY: 180, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1], 
                      rotateY: [180, 0], 
                      opacity: 1,
                      y: [100, -20, 0]
                    }}
                  >
                    <img 
                      src="public/whitelogo.png" 
                      alt="SFLML Logo" 
                      className="h-52 w-auto filter brightness-110 opacity-95 drop-shadow-2xl"
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    />
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        background: `radial-gradient(circle, 
                          rgba(59, 130, 246, 0.2), 
                          rgba(30, 64, 175, 0.1), 
                          rgba(15, 23, 42, 0.05), 
                          transparent 60%)`,
                        width: '120%',
                        height: '120%',
                        left: '-10%',
                        top: '-10%',
                        transform: 'translateZ(0)',
                        willChange: 'transform, opacity'
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Main heading */}
                  <div className="text-reveal mb-8 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                    <motion.h1 
                      className="text-4xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight text-shadow-lg font-spartan"
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    >
                      {["Students", "For"].map((word, index) => (
                        <motion.span
                          key={index}
                          className="inline-block mr-4"
                          custom={index}
                          variants={textRevealVariants}
                          initial={{ y: 200, opacity: 0, rotateX: 90 }}
                          animate={{ 
                            y: [200, -20, 0], 
                            opacity: 1, 
                            rotateX: 0 
                          }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{
                            scale: 1.05,
                            color: "#60a5fa",
                            textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
                          }}
                          style={{ transform: 'translateZ(0)', willChange: 'transform, color, text-shadow' }}
                        >
                          {word}
                        </motion.span>
                      ))}
                      <motion.span
                        className="block mt-2"
                        custom={2}
                        variants={textRevealVariants}
                        style={{
                          background: `linear-gradient(135deg, #3b82f6, #1e40af, #0f172a)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundSize: '200% 100%',
                          transform: 'translateZ(0)',
                          willChange: 'transform, background-position'
                        }}
                        initial={{ y: 200, opacity: 0, rotateX: 90 }}
                        animate={{ 
                          y: [200, -20, 0], 
                          opacity: 1, 
                          rotateX: 0,
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                          y: { duration: 1.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 100 },
                          opacity: { duration: 1.5, delay: 0.4 },
                          rotateX: { duration: 1.5, delay: 0.4 },
                          backgroundPosition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                        whileHover={{
                          scale: 1.05,
                          filter: "brightness(1.2)"
                        }}
                      >
                        Last-Mile Learning
                      </motion.span>
                    </motion.h1>
                  </div>
                  
                  {/* Subtitle */}
                  <motion.div
                    className="mb-16"
                    variants={subtitleVariants}
                    initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                    animate={{ 
                      y: [100, -10, 0], 
                      opacity: 0.9, 
                      filter: "blur(0px)" 
                    }}
                    transition={{
                      duration: 1.8,
                      delay: 1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    style={{ transform: 'translateZ(0)', willChange: 'transform, opacity, filter' }}
                  >
                    <motion.p 
                      className="text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed opacity-90 text-gray-300 font-medium font-spartan"
                      whileHover={{
                        scale: 1.02,
                        color: "#ffffff"
                      }}
                      style={{ transform: 'translateZ(0)', willChange: 'transform, color' }}
                    >
                      In the corners of rural India, a learning revolution is underway.
We are Students for Last-Mile Learning (SFLML)—a youth-led initiative reimagining education
{" "}
                      <motion.span 
                        className="font-semibold relative text-blue-400 font-spartan"
                        whileHover={{ 
                          scale: 1.05, 
                          color: "#60a5fa",
                          textShadow: "0 0 10px rgba(59, 130, 246, 0.6)"
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ transform: 'translateZ(0)', willChange: 'transform, color, text-shadow' }}
                      >
                        where it's needed most.
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                        />
                      </motion.span>{" "}
                      By leading workshops , fundrasing, and using technology as a bridge, we bring quality learning to communities often left behind.
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced scroll indicator - FIXED CENTER ALIGNMENT */}
            <AnimatePresence>
              {showContent && (
                <motion.div 
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                  style={{ transform: 'translateX(-50%) translateZ(0)', willChange: 'transform, opacity' }}
                >
                  <motion.div 
                    className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center cursor-pointer relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1, 
                      borderColor: "#3b82f6",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                    }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ 
                      y: { duration: 2, repeat: Infinity },
                      hover: { duration: 0.3 }
                    }}
                    onClick={() => {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ transform: 'translateZ(0)', willChange: 'transform, border-color, box-shadow' }}
                  >
                    <motion.div 
                      className="w-1 h-3 bg-blue-500 rounded-full mt-2"
                      animate={{ 
                        height: [12, 6, 12],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ transform: 'translateZ(0)', willChange: 'height, opacity' }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)`,
                        transform: 'translateZ(0)',
                        willChange: 'transform, opacity'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  <motion.p 
                    className="text-base mt-2 tracking-wider text-gray-400 font-medium font-spartan text-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
                  >
                    EXPLORE
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
