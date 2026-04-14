"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiHome, FiShield, FiCode, FiBookOpen, FiSettings } from 'react-icons/fi';

const servicesList = [
  {
    title: "POWER AND ENERGY",
    desc: "Solar installation and all kinds of activities, works and services relating to environmentally sustainable energy.",
    icon: FiCpu,
    color: "text-yellow-400",
    bgFade: "from-yellow-400/10"
  },
  {
    title: "BUILDING & CONSTRUCTION",
    desc: "Includes lab or field testing, analysis and monitoring of structures, and building materials such as foundations.",
    icon: FiHome,
    color: "text-blue-400",
    bgFade: "from-blue-400/10"
  },
  {
    title: "SMART SECURITY",
    desc: "We provide and install a comprehensive security network that gives you complete protection and control - anywhere.",
    icon: FiShield,
    color: "text-green-400",
    bgFade: "from-green-400/10"
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    desc: "Plan, design, develop, integrate, test, manage and evolve software solutions offering end-to-end support.",
    icon: FiCode,
    color: "text-purple-400",
    bgFade: "from-purple-400/10"
  },
  {
    title: "TEACHING COURSES",
    desc: "Front, Back and Fullstack Web Development, Mobile App Development, Product Design, Blockchain.",
    icon: FiBookOpen,
    color: "text-pink-400",
    bgFade: "from-pink-400/10"
  },
  {
    title: "ROBOTICS AND AUTOMATION",
    desc: "Innovative robotics and automation services creating smart ecosystems to eliminate routine human intervention.",
    icon: FiSettings,
    color: "text-cyan-400",
    bgFade: "from-cyan-400/10"
  }
];

const Services = () => {
  return (
    <div className='w-full bg-gray-950 flex flex-col items-center py-32 justify-center relative overflow-hidden'>
       {/* High-end decorative lights */}
       <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-bl from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
       
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 items-center justify-center px-6 relative z-10'
      >
        <h1 className='font-bold tracking-wider text-white text-3xl lg:text-5xl text-center uppercase'>
          Our Services
        </h1>
        <div className='w-20 h-1.5 bg-yellow-400 rounded-full' />
        <p className="mt-4 text-gray-400 text-center max-w-2xl font-light text-lg">
           We span multiple high-tech ecosystems to bring maximum integrated value. Here is where we excel to secure the future.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mx-auto mt-16 lg:mt-24 px-6 relative z-10'>
          {servicesList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.5 }}
                 key={idx} 
                 className={`relative overflow-hidden group bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-colors shadow-2xl shadow-black/50`}
              >
                {/* Background glow gradient */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${srv.bgFade} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className='relative z-10 flex flex-col gap-6 h-full'>
                  <div className={`p-4 bg-gray-950 shadow-inner rounded-2xl w-fit ${srv.color} border border-gray-800`}>
                     <Icon className="w-8 h-8" />
                  </div>
                  <h2 className='text-xl font-bold text-gray-100 tracking-wide'>
                    {srv.title}
                  </h2>
                  <p className='font-light text-base leading-relaxed text-gray-400 flex-grow'>
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
      </div>
    </div>
  );
};

export default Services;
