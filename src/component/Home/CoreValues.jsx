"use client";
import React from 'react';
import { FiShield, FiAward, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const values = [
  {
    icon: FiCheckCircle,
    title: "Safety",
    desc: "Prioritizing the security and well-being of clients, staff, and our environmental infrastructure ecosystems."
  },
  {
    icon: FiAward,
    title: "Quality",
    desc: "Providing uncompromised excellence in engineering services, products, and operational workflows."
  },
  {
    icon: FiShield,
    title: "Integrity",
    desc: "Upholding complete transparency, honesty, and strictly ethical operations across all channels."
  }
];

const CoreValues = () => {
  return (
    <div className='w-full bg-gray-900 flex flex-col items-center px-6 lg:px-[120px] py-32 justify-center relative overflow-hidden'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 items-center justify-center relative z-10'
      >
        <h1 className='font-bold tracking-wider text-white text-3xl lg:text-5xl text-center uppercase'>
          Core Values
        </h1>
        <div className='w-20 h-1.5 bg-yellow-400 rounded-full' />
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:mt-24 w-full max-w-6xl relative z-10'>
        {values.map((v, idx) => {
          const IconComponent = v.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              transition={{ delay: idx * 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
              key={idx}
              className='group h-full p-10 bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-yellow-400/40 hover:bg-white/[0.04] rounded-[2.5rem] flex flex-col items-center justify-start gap-8 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
            >
              <div className="w-24 h-24 bg-gray-950 rounded-full flex items-center justify-center shadow-inner border border-gray-800 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-shadow duration-500">
                 <IconComponent className="w-10 h-10 text-yellow-400 opacity-90 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className='flex flex-col gap-4 items-center flex-grow text-center'>
                <h1 className='font-bold text-2xl text-gray-100 tracking-wider'>{v.title}</h1>
                <p className='font-light text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors'>
                  {v.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
