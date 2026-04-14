"use client";
import React from 'react';
import { AcademyUrl } from '../../Utils/apiRequest';
import { motion } from 'framer-motion';

import Workspace1 from '../../assets/workspace1.JPG';
import Workspace2 from '../../assets/workspace2.JPG';
import Workspace3 from '../../assets/workspace3.JPG';
import Workspace4 from '../../assets/workspace4.JPG';
import OfficeLocation from '../../assets/locat-work1.JPG';

const Workspace = () => {
  return (
    <div className='w-full bg-gray-900 flex flex-col py-24 relative overflow-hidden'>
       {/* Background Decor */}
       <div className="absolute top-1/3 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className='flex flex-col items-center justify-center w-full px-6 lg:px-24 gap-12 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-4 items-center justify-center'
        >
          <h1 className='text-white font-bold tracking-wider text-3xl lg:text-4xl text-center uppercase'>
            Our Workspace
          </h1>
          <div className='w-16 h-1.5 bg-yellow-400 rounded-full' />
        </motion.div>

        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className='text-base lg:text-lg font-light leading-relaxed text-center text-gray-300 max-w-4xl'
        >
          Have access to our truly conducive workspace featuring unlimited internet powered 
          by Starlink, surrounded by a solar-backed uninterrupted power supply system. 
          Everything designed organically for seamless learning and collaboration.
        </motion.p>
        
        {/* Animated Feature Grid */}
        <div className="w-full max-w-7xl relative py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[600px]">
           {/* Main Spotlight Image */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-7 col-span-1 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10 h-[300px] lg:h-full"
           >
              <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                 style={{ backgroundImage: `url(${Workspace1?.src || Workspace1})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
           </motion.div>

           {/* Stacked Images */}
           <div className="lg:col-span-5 col-span-1 grid grid-cols-2 grid-rows-2 gap-6 h-[500px] lg:h-full">
               <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
               >
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                   style={{ backgroundImage: `url(${OfficeLocation?.src || OfficeLocation})` }}
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
               >
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                   style={{ backgroundImage: `url(${Workspace4?.src || Workspace4})` }}
                 />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.5 }}
                 className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
               >
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                   style={{ backgroundImage: `url(${Workspace3?.src || Workspace3})` }}
                 />
               </motion.div>
           </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8, duration: 0.5 }}
           className="mt-6"
        >
          <a href={`${AcademyUrl}/book-workspace`} target='_self'>
            <div className='group relative px-8 py-4 bg-white hover:bg-yellow-400 text-gray-900 transition-colors duration-300 rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-yellow-300 font-bold tracking-widest text-sm flex items-center gap-3'>
              BOOK DESK NOW
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Workspace;
