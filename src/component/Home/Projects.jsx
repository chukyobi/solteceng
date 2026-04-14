"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projectData = [
  {
    id: "power-and-energy",
    title: "POWER AND ENERGY",
    desc: "Solar installation and all kinds of activities, works and services relating to the business of environmentally sustainable energy sources available across Nigeria",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/first_wCcpA3gw7.jpg",
    colSpan: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "building-construction",
    title: "BUILDING & CONSTRUCTION",
    desc: "Includes lab or field testing, analysis and monitoring of structures, and building materials such as foundations.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/second_JPglMp5Pa.jpg",
    colSpan: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "smart-security",
    title: "SMART SECURITY",
    desc: "We provide and install a comprehensive security network that gives you complete protection and control.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/third_rYf7aD5-S.jpg",
    colSpan: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "software-development",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Plan, design, develop, integrate, test, manage and evolve software solutions efficiently.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/fourth_BI_FNOlQF.jpg",
    colSpan: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    id: "teaching-courses",
    title: "TEACHING COURSES",
    desc: "Front, Back and Fullstack Web Development, Mobile App Development, Product Design, Blockchain.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/fifth_QgyOfTbnE.jpg",
    colSpan: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "robotics-automation",
    title: "ROBOTICS AND AUTOMATION",
    desc: "Innovative robotics and automation architectures customized for smart manufacturing and data processing.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/sisth_VwsoB9fQ1.jpg",
    colSpan: "col-span-1 md:col-span-2 row-span-1",
  }
];

const Projects = () => {
  return (
    <div className='w-full bg-gray-950 flex flex-col py-32 relative overflow-visible'>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className='flex flex-col items-center justify-center w-full gap-16 px-6 lg:px-24 xl:px-40 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-4 items-center justify-center'
        >
          <h1 className='text-white font-bold tracking-wider text-3xl lg:text-5xl text-center uppercase'>
            Our Engineering Projects
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
          An immersive reel showing what we’re capable of. Work with us today and join our 
          ever-growing list of delighted clients who have experienced true quality.
        </motion.p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6 w-full max-w-7xl mx-auto'>
          {projectData.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl group ${proj.colSpan} border border-white/10 shadow-lg`}
            >
              {/* Image Base Container - hidden overflow but preserving dimensions */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                 <div 
                   className='absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110'
                   style={{ backgroundImage: `url(${proj.imgSrc})` }} 
                 />
                 <div className='absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-500' />
              </div>

              {/* Title resting on the bottom */}
              <div className='absolute bottom-0 left-0 w-full p-6 lg:p-8 flex justify-between items-end transition-opacity duration-300 group-hover:opacity-0'>
                <h1 className='text-xl lg:text-2xl font-bold text-white tracking-wide shadow-md'>
                  {proj.title}
                </h1>
              </div>
              
              {/* External Pop-out Hover Tooltip */}
              <div className='absolute z-50 invisible opacity-0 group-hover:opacity-100 group-hover:visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] min-h-[110%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl transition-all duration-500 transform scale-95 group-hover:scale-100'>
                 <h2 className='text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4'>{proj.title}</h2>
                 <p className='font-light text-sm lg:text-base leading-relaxed text-gray-200 mb-6'>
                    {proj.desc}
                 </p>
                 <Link href={`/projects/${proj.id}`}>
                   <span className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-transform hover:scale-105 shadow-xl shadow-yellow-400/20">
                     VIEW DETAILS
                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                   </span>
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
