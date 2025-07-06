import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Globe, Award, School, Heart, Target, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ekalRef, ekalInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [studentNgoRef, studentNgoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [fundraiserRef, fundraiserInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8349271/pexels-photo-8349271.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Digital Literacy Workshop',
      impact: '150+ students trained',
      location: 'Rajasthan Villages'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8349066/pexels-photo-8349066.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Teacher Training Program',
      impact: '75 teachers certified',
      location: 'Rural Gujarat'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Student Mentorship',
      impact: '200+ students guided',
      location: 'Madhya Pradesh'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Educational Resource Distribution',
      impact: '5000+ books distributed',
      location: 'Uttar Pradesh'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Engagement',
      impact: '50+ families involved',
      location: 'Bihar Villages'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mobile Learning Units',
      impact: '25 villages reached',
      location: 'Odisha'
    }
  ];

  const achievements = [
    { metric: '30000+', label: 'Students Reached', icon: Users, color: 'from-gray-700 to-gray-800' },
    { metric: '1000+', label: 'Learning Centers', icon: BookOpen, color: 'from-gray-800 to-gray-700' },
    { metric: '20', label: 'States Covered', icon: Globe, color: 'from-gray-600 to-gray-800' },
    { metric: '₹70L+', label: 'Funds Raised', icon: Award, color: 'from-gray-800 to-gray-600' }
  ];

  const ekalPartnership = {
    duration: '1+ Years',
    schoolsImpacted: '1000+',
    studentReach: '30000+',
    achievements: [
      'Digital literacy programs in remote villages',
      'Teacher training and certification',
      'Educational resource distribution',
      'Community engagement initiatives'
    ]
  };

  const studentNgos = [
    { name: 'Musica Universalis', founder: 'Offers free keyboard, vocal, and music theory lessons to underserved youth in India and California, preparing them for Trinity music exams and fostering cross-cultural music appreciation.' },
    { name: 'Headstart', founder: 'A business event teaching Grades 6–8 finance and entrepreneurship through simulations and competitions, donating profits to schools.' },
    { name: 'Toyforever', founder: 'Collects and redistributes toys, books, and stationery to 1,000+ underserved children, promoting sustainability and educational equity through school-led drives.' },
    { name: 'STEM Simplified', founder: 'Simplifies complex STEM topics through articles and workshops. Shares bilingual booklets and aims to build lasting teaching aids for rural classrooms.' },
    { name: 'Unnati', founder: 'Provides career counseling and awareness of scholarships to students in government schools through workshops and NGO partnerships.' },
    { name: 'Tech4Bharat', founder: 'promotes digital literacy in underserved communities via smartphone and internet training' },
    { name: 'DhanSarthi', founder: 'DhanSarthi empowers 20,000+ women across India with financial literacy through workshops, bank account facilitation, and peer educators' },
    { name: 'KahaaniGhar', founder: 'Uses theatre to empower rural students, fostering self-expression and creativity through workshops and performance projects.' },
    { name: 'ResistRx', founder: 'Raises awareness on antibiotic resistance and gut health using culturally relevant community workshops and plans to scale via regional content and practitioners.' },
    { name: 'ElevatED', founder: 'Bridges rural-urban gaps by teaching financial literacy, entrepreneurship, and global awareness through hands-on workshops.' },
    { name: 'StemCast', founder: 'STEM podcast and outreach project featuring expert interviews, Python/Scratch workshops, and DIY STEM kits to inspire young learners.' },
    { name: 'Suraksha', founder: 'Promotes menstrual hygiene across India, distributing 1L+ pads and educating 25,000+ women through awareness workshops and Q&A sessions.' },
    { name: 'The Dezign Cue', founder: 'Offers free design and digital literacy workshops using Canva; organizes school-wide poster contests and donates resources to government schools.' },
    { name: 'Jivam Foundation', founder: 'Transforms education in Kheowali village via STEM, digital literacy, and leadership training. Built the first digital library, educated 500+ children, and promotes girls in STEM.' },
    { name: 'Izhar Foundation', founder: 'Uses art and education to uplift underserved children—educating 17,000+ through creative events, art workshops, and fundraising for medical cases.' },
    { name: 'Write to Rise', founder: 'Aaditri Periwal' },
    { name: 'Kartavya', founder: 'Arjun' },
    { name: 'Uniquest', founder: 'Aashvi Modi & Yashleen Shergill' },
    { name: 'FRC Kaizen #10428', founder: 'Sparsh Ranjan' },
    { name: 'DhanRaksha', founder: 'Aalia Deora' },
    { name: 'Grade 6A', founder: 'Heena Agarwal' },
    { name: 'Individual Contributors', founder: 'Kiara Gwala, Yashasvi Jain, Gauri Maheshwari, Mayank Sacher' }
  ];

  const fundraiserData = {
    current: 125000000,
    target: 300000000,
    percentage: 41.67,
    milestones: [
      { amount: 50000000, label: '50L - Digital Infrastructure', achieved: true },
      { amount: 100000000, label: '1Cr - Teacher Training', achieved: true },
      { amount: 150000000, label: '1.5Cr - Learning Materials', achieved: false },
      { amount: 200000000, label: '2Cr - Technology Integration', achieved: false },
      { amount: 250000000, label: '2.5Cr - Community Centers', achieved: false },
      { amount: 300000000, label: '3Cr - Full Implementation', achieved: false }
    ]
  };

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

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <>
      <section id="work" className="section-padding pt-16 pb-12 relative overflow-hidden cursor-none font-spartan"
        style={{
          background: `linear-gradient(180deg, #00053F, rgba(0, 5, 63, 0.95), rgba(0, 5, 63, 0.9), #00053F)`
        }}
      >
         <motion.h2 
          className="text-4xl lg:text-6xl font-bold text-white mb-8 text-center text-shadow font-spartan cursor-none"
          initial={{ opacity: 0, y: 100, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          data-aos="fade-down"
        >
          Our <span 
            className="bg-clip-text text-transparent inline-block"
            style={{
              background: `linear-gradient(135deg, #3b82f6, #1e40af, #00053F)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Work
          </span>
        </motion.h2>
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 70% 30%, rgba(0, 5, 63, 0.3), transparent 60%), radial-gradient(circle at 30% 70%, rgba(82, 103, 125, 0.2), transparent 60%)`
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 40, repeat: Infinity }}
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
                x: { duration: 4 + Math.random() * 2, ease: "easeOut" },
                y: { duration: 4 + Math.random() * 2, ease: "easeOut" },
                scale: { duration: 6, repeat: Infinity },
                opacity: { duration: 6, repeat: Infinity }
              }}
            />
          ))}

          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-15"
              style={{
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 
                  ? `radial-gradient(circle, rgba(0, 5, 63, 0.3), transparent)`
                  : `radial-gradient(circle, rgba(82, 103, 125, 0.2), transparent)`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container-max relative z-10">
          {/* India Impact Map */}
          <div className="flex justify-center mb-12">
            <img
              src="/impact-india.png"
              alt="Impact in India"
              className="w-full max-w-2xl rounded-3xl shadow-2xl border-4 border-blue-900/40 bg-white/10"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0, 5, 63, 0.25), 0 1.5px 8px 0 rgba(59, 130, 246, 0.10)',
                objectFit: 'contain'
              }}
            />
          </div>
          {/* Key Achievements */}
          <motion.div 
            ref={achievementsRef}
            className="mb-16"
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="relative overflow-hidden border-0 cursor-none"
              style={{
                background: `linear-gradient(135deg, rgba(0, 5, 63, 0.95), rgba(0, 5, 63, 0.8), rgba(82, 103, 125, 0.1))`,
                borderRadius: '3rem',
                clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'
              }}
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(82, 103, 125, 0.4) 50%, transparent 70%)',
                }}
                animate={{
                  x: [-200, 200],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="relative z-10 p-8 lg:p-12">
                <div className="text-center mb-16">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-10 cursor-none">
                    Impact <span 
                      className="bg-clip-text text-transparent"
                      style={{
                        background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >Metrics</span>
                  </h3>
                  <p className="max-w-2xl mx-auto cursor-none" style={{ color: '#BDC4D4' }}>
                    Quantifiable outcomes from our educational interventions and community partnerships.
                  </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group relative cursor-none"
                      variants={{
                        hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                          transition: {
                            duration: 1,
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 100
                          }
                        }
                      }}
                      whileHover={{ scale: 1.1, y: -10 }}
                    >
                      <motion.div 
                        className="w-16 h-16 mx-auto mb-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, #52677D, #00053F)`
                        }}
                      >
                        <achievement.icon className="h-8 w-8 text-white z-10" />
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(90deg, transparent, rgba(189, 196, 212, 0.2), transparent)`
                          }}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                      <motion.div 
                        className="text-3xl lg:text-4xl font-bold mb-6 text-white"
                        animate={achievementsInView ? { scale: [0, 1.2, 1] } : {}}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      >
                        {achievement.metric}
                      </motion.div>
                      <div style={{ color: '#BDC4D4' }}>{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Ekal Vidyalaya Partnership Section */}
          <motion.div 
            id="ekal-partnership"
            ref={ekalRef}
            className="mb-16"
            initial="hidden"
            animate={ekalInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="relative overflow-hidden cursor-none"
              style={{
                background: `linear-gradient(135deg, rgba(0, 5, 63, 0.9), rgba(82, 103, 125, 0.2))`,
                clipPath: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)'
              }}
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)',
                }}
                animate={{
                  x: [-300, 300],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="relative z-10 p-8 lg:p-12">
                <div className="text-center mb-12">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #3b82f6, #1e40af)`
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <School className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-spartan cursor-none">
                    Partnership with <span 
                      className="bg-clip-text text-transparent"
                      style={{
                        background: `linear-gradient(135deg, #3b82f6, #60a5fa)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >Ekal Vidyalaya</span>
                  </h3>
                  <p className="text-xl max-w-3xl mx-auto leading-relaxed font-medium font-spartan cursor-none" 
                     style={{ color: '#BDC4D4' }}>
                    Collaborative educational initiatives transforming rural learning through the Ekal Vidyalaya Foundation network
                  </p>
                  
                  {/* Amount Raised Heading - FIXED SIZE */}
                  <h4 className="text-2xl lg:text-3xl font-bold text-white mt-12 mb-8 font-spartan cursor-none">
                    Funds Raised for Ekal
                  </h4>
                  
                  {/* ₹70 Lakhs+ - Now properly visible */}
                  <div className="flex flex-col items-center justify-center mb-12">
                    <motion.span
                      className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent font-spartan inline-block"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                    >
                      ₹70 Lakhs+
                    </motion.span>
                    <p className="text-lg max-w-2xl mt-6 text-blue-200 text-center font-spartan">
                      Each ₹30,000 raised changes the lives of over 30 children for not just a school year, but their whole lives.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {[
                    { icon: Calendar, label: 'Partnership Duration', value: ekalPartnership.duration },
                    { icon: School, label: 'Schools Impacted', value: ekalPartnership.schoolsImpacted },
                    { icon: Users, label: 'Student Reach', value: ekalPartnership.studentReach },
                    { icon: TrendingUp, label: 'Growth Rate', value: '15% YoY' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-6 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 64, 175, 0.05))`,
                        border: '1px solid rgba(59, 130, 246, 0.3)'
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      variants={itemVariants}
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                      <div className="text-2xl font-bold text-white mb-2 font-spartan">{stat.value}</div>
                      <div className="text-sm font-medium font-spartan" style={{ color: '#BDC4D4' }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {ekalPartnership.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(30, 64, 175, 0.02))`
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={ekalInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#3b82f6' }}
                      />
                      <span className="text-lg font-medium font-spartan leading-relaxed" style={{ color: '#BDC4D4' }}>
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Student NGO Partnerships Section */}
          <motion.div 
            id="student-ngo"
            ref={studentNgoRef}
            className="mb-16"
            initial="hidden"
            animate={studentNgoInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="relative overflow-hidden cursor-none"
              style={{
                background: `linear-gradient(135deg, rgba(0, 5, 63, 0.9), rgba(82, 103, 125, 0.2))`,
                clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)'
              }}
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(16, 185, 129, 0.4) 50%, transparent 70%)',
                }}
                animate={{
                  x: [300, -300],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="relative z-10 p-8 lg:p-12">
                <div className="text-center mb-12">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #10b981, #059669)`
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-spartan cursor-none">
                    Student <span 
                      className="bg-clip-text text-transparent"
                      style={{
                        background: `linear-gradient(135deg, #10b981, #34d399)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >NGO Partnerships</span>
                  </h3>
                  <p className="text-xl max-w-3xl mx-auto leading-relaxed font-medium font-spartan cursor-none" 
                     style={{ color: '#BDC4D4' }}>
                    Collaborative networks with student organizations driving grassroots educational change
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {studentNgos.map((ngo, index) => (
                    <motion.div 
                      key={index}
                      className="group relative overflow-hidden cursor-none"
                      style={{
                        background: `linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))`,
                        borderRadius: '1rem',
                        border: '1px solid rgba(16, 185, 129, 0.2)'
                      }}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -3,
                        borderColor: 'rgba(16, 185, 129, 0.4)'
                      }}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <motion.div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1))`
                            }}
                            whileHover={{ scale: 1.2, rotate: 180 }}
                          >
                            <Heart className="w-4 h-4 text-emerald-400" />
                          </motion.div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-white mb-1 font-spartan cursor-none leading-tight">
                          {ngo.name}
                        </h4>
                        
                        <p className="text-sm font-medium font-spartan cursor-none leading-tight" 
                           style={{ color: '#10b981' }}>
                          {ngo.founder}
                        </p>
                      </div>

                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.05), transparent)`
                        }}
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Gallery */}
          <motion.div 
            ref={galleryRef}
            className="mb-16"
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold text-center text-white mb-8 cursor-none"
              variants={itemVariants}
            >
              Project <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >Portfolio</span>
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div 
                  key={image.id} 
                  className="group relative overflow-hidden cursor-none"
                  style={{
                    borderRadius: index % 3 === 0 ? '2rem 1rem 2rem 1rem' : 
                                index % 3 === 1 ? '1rem 2rem 1rem 2rem' : 
                                '2rem 2rem 1rem 1rem',
                    clipPath: index % 3 === 0 ? 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)' :
                             index % 3 === 1 ? 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' :
                             'polygon(0% 0%, 100% 0%, 100% 90%, 10% 100%)'
                  }}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: index % 2 === 0 ? 5 : -5
                  }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(180deg, rgba(0, 5, 63, 0.9), rgba(0, 5, 63, 0.3), transparent)`
                      }}
                    >
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-bold text-lg mb-4 font-spartan cursor-none">{image.title}</h4>
                        <div className="flex justify-between text-sm">
                          <span className="font-spartan" style={{ color: '#BDC4D4' }}>{image.impact}</span>
                          <span className="font-spartan" style={{ color: '#52677D' }}>{image.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-full h-2 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-900/80" />
    </>
  );
};

export default Work;
