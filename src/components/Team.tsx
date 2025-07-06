import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = {
  curators: [
    {
      name: 'Aashi Goyal',
      role: 'Curator',
      image: '/team/aashi.jpg',
    },
    {
      name: 'Aadarsh Tripathy',
      role: 'Curator',
      image: 'public/trip.jpeg',
    }
  ],
  coCurator: [
    {
      name: 'Shresht Mangal',
      role: 'Co-curator',
      image: 'public/mangal.jpeg',
    }
  ],
  finance: [
    {
      name: 'Vithal Agarwal',
      role: 'Head Of Finance',
      image: '/team/vithal.jpg',
    },
    {
      name: 'Siddharth Sharma',
      role: 'Head Of Finance',
      image: 'public/sid.jpeg',
    },
    {
      name: 'Yashvi Singh',
      role: 'Lead Volunteer',
      image: 'public/yash.jpeg',
    }
  ],
  technology: [
    {
      name: 'Mrityunjay Gupta',
      role: 'Head of Technology',
      image: 'public/D9CEBB08-A000-488E-B565-981160623BED_4_5005_c.jpeg',
    }
  ],
  hosts: [
    {
      name: 'Saachi Sood',
      role: 'Host',
      image: '/team/saachi.jpg',
    },
    {
      name: 'Avni Jain',
      role: 'Lead Volunteer',
      image: 'public/ash.jpeg',
    }
  ],
  logistics: [
    {
      name: 'Mridul Agarwal',
      role: 'Head of Logistics',
      image: 'public/mrid.jpeg',
    },
    {
      name: 'Dhruv Punjabi',
      role: 'Head of Logistics',
      image: 'public/punj.jpeg',
    },
    {
      name: 'Ariana Agarwal',
      role: 'Lead Volunteer',
      image: 'public/PHOTO-2025-07-06-08-05-09.jpg',
    }
  ],
  eventDay: [
    {
      name: 'Siya Gupta',
      role: 'Head of Event Day',
      image: 'public/PHOTO-2025-07-06-00-53-38.jpg',
    },
    {
      name: 'Arjun Patel',
      role: 'Head of Event Day',
      image: '/public/arjun.jpeg',
    }
  ],
  synchronisation: [
    {
      name: 'Vandana Choudhary',
      role: 'Head Of Synchronisation',
      image: 'public/vandana.png',
    }
  ],
  storytellers: [
    {
      name: 'Ryna Gattani',
      role: 'Storyteller',
      image: 'public/ryna.jpeg',
    },
    {
      name: 'Ira Malpani',
      role: 'Storyteller',
      image: 'public/ira.jpeg',
    },
    {
      name: 'Dhruvika Singh',
      role: 'Lead Volunteer',
      image: 'public/dhruvika.jpeg',
    },
    {
      name: 'Jhanvi Agarwal',
      role: 'Lead Volunteer',
      image: 'public/ash.jpeg',
    }
  ]
};

const Team: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

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

  const TeamRow = ({ members, sectionTitle }: { members: any[], sectionTitle: string }) => {
    const [sectionRef, sectionInView] = useInView({ threshold: 0.2, triggerOnce: true });
    
    return (
      <motion.div 
        ref={sectionRef}
        className="mb-16"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-2xl lg:text-3xl font-bold text-center mb-8 font-spartan cursor-none"
          style={{
            background: `linear-gradient(135deg, #BDC4D4, #52677D, #00053F)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          variants={itemVariants}
        >
          {sectionTitle}
        </motion.h3>
        
        <div className={`flex flex-wrap items-center justify-center gap-12 lg:gap-16 ${
          members.length === 1 ? 'justify-center' : 
          members.length === 2 ? 'justify-center' : 
          'justify-center'
        }`}>
          {members.map((member) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center gap-6 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="rounded-2xl w-56 h-56 object-cover grayscale group-hover:grayscale-0 shadow-xl ring-2 ring-blue-400 transition duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                  }}
                />
                {/* Blue overlay for grayscale effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none transition duration-300 bg-[#00053F]/60 opacity-80 group-hover:opacity-0" />
                {/* Floating glow effect */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <div className="text-center">
                <motion.h4 
                  className="text-2xl font-bold mb-1 text-white font-spartan cursor-none"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#60a5fa"
                  }}
                >
                  {member.name}
                </motion.h4>
                <motion.p 
                  className="text-blue-300 font-semibold text-lg font-spartan cursor-none"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#93c5fd"
                  }}
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="team" 
      className="relative overflow-hidden cursor-none font-spartan pt-16 pb-12"
      style={{
        background: `linear-gradient(180deg, #00053F, rgba(0, 5, 63, 0.95), rgba(0, 5, 63, 0.9), #00053F)`
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at 40% 60%, rgba(0, 5, 63, 0.3), transparent 60%), radial-gradient(circle at 60% 40%, rgba(82, 103, 125, 0.2), transparent 60%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 35, repeat: Infinity }}
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

      <div className="relative z-10">
        {/* Section Heading */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-8 text-center text-shadow font-spartan cursor-none"
            variants={itemVariants}
          >
            Meet the <span 
              className="bg-clip-text text-transparent inline-block"
              style={{
                background: `linear-gradient(135deg, #3b82f6, #1e40af, #00053F)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Team
            </span>
          </motion.h2>
        </motion.div>

        {/* Team Sections Organized by Role */}
        <div className="max-w-7xl mx-auto px-6">
          <TeamRow members={teamMembers.curators} sectionTitle="Curators" />
          <TeamRow members={teamMembers.coCurator} sectionTitle="Co-Curator" />
          <TeamRow members={teamMembers.finance} sectionTitle="Heads of Finance" />
          <TeamRow members={teamMembers.technology} sectionTitle="Head of Technology" />
          <TeamRow members={teamMembers.hosts} sectionTitle="Hosts" />
          <TeamRow members={teamMembers.logistics} sectionTitle="Heads of Logistics" />
          <TeamRow members={teamMembers.eventDay} sectionTitle="Heads of Event Day" />
          <TeamRow members={teamMembers.synchronisation} sectionTitle="Head of Synchronisation" />
          <TeamRow members={teamMembers.storytellers} sectionTitle="Storytellers" />
        </div>
      </div>
    </section>
  );
};

export default Team;