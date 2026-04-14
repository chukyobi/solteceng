"use client";
import React from 'react';
import Link from 'next/link';

// Using the same projectData stub for dynamic simulation
const projectData = [
  {
    id: "power-and-energy",
    title: "POWER AND ENERGY",
    desc: "Solar installation and all kinds of activities, works and services relating to the business of environmentally sustainable energy sources available across Nigeria. We integrate comprehensive grids for private estates, commercial sectors, and industrial complexes.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/first_wCcpA3gw7.jpg",
  },
  {
    id: "building-construction",
    title: "BUILDING & CONSTRUCTION",
    desc: "Includes lab or field testing, analysis and monitoring of structures, and building materials such as foundations. We leverage modern civil engineering techniques to bring breathtaking architectures to reality.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/second_JPglMp5Pa.jpg",
  },
  {
    id: "smart-security",
    title: "SMART SECURITY",
    desc: "We provide and install a comprehensive security network that gives you complete protection and control. Ranging from biometric access flows to motion-tracking AI surveillance.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/third_rYf7aD5-S.jpg",
  },
  {
    id: "software-development",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Plan, design, develop, integrate, test, manage and evolve software solutions efficiently. Our tech studio builds everything from high-performance landing pages to scalable cloud applications.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/fourth_BI_FNOlQF.jpg",
  },
  {
    id: "teaching-courses",
    title: "TEACHING COURSES",
    desc: "Front, Back and Fullstack Web Development, Mobile App Development, Product Design, Blockchain. We run top-end hybrid bootcamps transforming enthusiastic learners into industry experts.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/fifth_QgyOfTbnE.jpg",
  },
  {
    id: "robotics-automation",
    title: "ROBOTICS AND AUTOMATION",
    desc: "Innovative robotics and automation architectures customized for smart manufacturing and data processing. We heavily optimize mechanical pipelines using the latest in embedded systems technology.",
    imgSrc: "https://ik.imagekit.io/nz8zngrxv/amazon-image/sisth_VwsoB9fQ1.jpg",
  }
];

export default function ProjectDetail({ params }) {
  const { id } = params;
  
  // Find project or show fallback
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
         <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
         <Link href="/" className="text-yellow-400 font-medium hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-950">
      {/* Hero Banner Component */}
      <div className="relative w-full h-[50vh] lg:h-[60vh]">
         <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${project.imgSrc})` }}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
         
         <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 lg:pb-24 px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-widest uppercase shadow-2xl mb-4">
              {project.title}
            </h1>
            <div className="w-24 h-1.5 bg-yellow-400 rounded-full" />
         </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mx-auto px-6 py-16 lg:py-24">
         <Link href="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold tracking-wider text-sm mb-12 transition-colors">
            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            BACK TO PROJECTS
         </Link>

         <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 lg:p-16 backdrop-blur-sm shadow-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 border-b border-white/10 pb-6">
              Project Overview
            </h2>
            <p className="text-lg lg:text-xl font-light leading-loose text-gray-300">
               {project.desc}
            </p>
         </div>
      </div>
    </div>
  );
}
