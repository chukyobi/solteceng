"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaGlobe, FaCertificate } from 'react-icons/fa';
import { FiMonitor, FiCpu, FiCoffee } from 'react-icons/fi';
import AcademyLogo from '../../assets/academy-logo.svg';
import Starlink from '../../assets/starlink.png';
import Panel from '../../assets/panel.png';

const AcademyWorkspace = () => {
   return (
      <div className='w-full bg-gray-950 relative py-32 overflow-hidden'>
         {/* Dynamic Bokeh & Gridlines Background Effect */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

         <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-24 gap-16 relative z-10'>

            {/* Left Side: Academy Sub-section */}
            <motion.div
               initial={{ opacity: 0, x: -60 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "0px" }}
               transition={{ duration: 0.8 }}
               className='flex flex-col w-full lg:w-1/2 gap-8'
            >
               <div className='flex flex-col gap-6 items-start'>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-1 bg-yellow-400" />
                     <h1 className='text-yellow-400 font-bold tracking-widest text-lg uppercase'>
                        Soltec Academy
                     </h1>
                  </div>
                  <h2 className='text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight'>
                     Learn Digital Skills <br /> with Experts
                  </h2>
                  <p className='text-lg font-light leading-relaxed text-gray-300'>
                     We offer hybrid bootcamps driving you from beginner to marketable in no time.
                     Guided by experienced tutors in a truly highly conducive learning environment.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-yellow-400/50 transition-colors">
                     <FaLaptopCode className="text-2xl text-yellow-400" />
                     <span className="font-semibold text-gray-200">Fullstack Web</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-blue-400/50 transition-colors">
                     <FaGlobe className="text-2xl text-blue-400" />
                     <span className="font-semibold text-gray-200">Cybersecurity</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-green-400/50 transition-colors">
                     <FaCertificate className="text-2xl text-green-400" />
                     <span className="font-semibold text-gray-200">Product Design</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-purple-400/50 transition-colors">
                     <FaGraduationCap className="text-2xl text-purple-400" />
                     <span className="font-semibold text-gray-200">App Development</span>
                  </div>
               </div>

               <a href="https://soltec-academy-two.vercel.app/" className="mt-4 self-start bg-yellow-400 hover:bg-yellow-500 text-gray-950 px-8 py-3 rounded-full font-bold tracking-wide transition-all shadow-xl shadow-yellow-400/20">
                  Explore Courses
               </a>
            </motion.div>

            {/* Right Side: Workspace Sub-section */}
            <motion.div
               initial={{ opacity: 0, x: 60 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "0px" }}
               transition={{ duration: 0.8 }}
               className='flex flex-col w-full lg:w-1/2 gap-8'
            >
               <div className="relative w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  {/* Dynamic Float Composition */}
                  <div className="absolute inset-0 bg-gray-900" />
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 opacity-40 mix-blend-luminosity" style={{ backgroundImage: `url(${Starlink?.src || Starlink})` }} />

                  {/* Glassmorphic Panel Foreground */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col justify-between p-8 shadow-2xl hover:border-yellow-400/30 transition-all">
                     <div className="flex justify-between items-start">
                        <div className="p-3 bg-yellow-400/20 rounded-xl">
                           <FiCoffee className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div className="p-3 bg-blue-500/20 rounded-xl">
                           <FiMonitor className="w-6 h-6 text-blue-400" />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Our Workspace</h3>
                        <p className="text-sm text-gray-300">Unlimited Starlink Internet & uninterrupted Solar Power mapped out perfectly for deep-work focus.</p>
                     </div>
                  </div>
               </div>

               <a href="https://soltec-academy-two.vercel.app/" className="self-center lg:self-end text-yellow-400 font-bold group flex items-center gap-2 hover:text-yellow-300">
                  BOOK YOUR DESK TODAY
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </a>
            </motion.div>

         </div>
      </div>
   );
};

export default AcademyWorkspace;
