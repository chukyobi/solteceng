"use client";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import { Arrow_Right } from '../../Utils/assets';
import { motion } from 'framer-motion';

const whatWeDo = [
  { title: 'SOLAR PANEL INSTALLATION' },
  { title: 'CCTV INSTALLATION' },
  { title: 'LEARN TECH COURSES' },
  { title: 'SOFTWARE DEVELOPMENT' },
  { title: 'BUILDING AND CONSTRUCTION' },
  { title: 'SMART SECURITY' },
];

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-6 lg:gap-10 px-6 lg:px-20 xl:px-[120px]'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col gap-8 mt-24'
          >
            <div className='flex flex-col gap-4'>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-3"
              >
                  <div className="w-8 h-1 bg-yellow-400"></div>
                  <h1 className='text-yellow-400 font-bold tracking-widest text-sm lg:text-base'>
                    SOLTEC ENGINEERING
                  </h1>
              </motion.div>
              
              <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white'>
                Revolutionizing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Engineering in Africa</span>
              </h1>
            </div>
            <p className='max-w-2xl font-light text-base lg:text-xl leading-relaxed text-gray-300'>
              Our mission is to revolutionize engineering in Africa through timely innovation, and ultra-modern technology by delivering optimal engineering solutions within and across the continent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href={'/get-quote'}
              className='group w-44 h-14 bg-yellow-400 hover:bg-yellow-500 transition-colors gap-3 rounded-xl flex flex-row items-center justify-center text-gray-900 shadow-xl shadow-yellow-400/20'
            >
              <span className='font-bold text-sm tracking-wide'>GET QUOTE</span>
              <img src={Arrow_Right?.src || Arrow_Right} className="group-hover:translate-x-1 transition-transform" alt='arrow' />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 lg:mt-12 backdrop-blur-md bg-white/5 py-6 border-y border-white/10"
        >
          <Marquee speed={55} gradient={false}>
            <div className='flex flex-row pr-6'>
              {whatWeDo.map((item, index) => (
                <div
                  key={index}
                  className='ml-6 group hover:cursor-pointer transition-all duration-300 h-[74px] lg:h-[90px] rounded-2xl px-8 flex items-center justify-center bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-white/20'
                >
                  <span className='text-gray-200 group-hover:text-yellow-400 transition-colors text-sm lg:text-lg font-bold tracking-wide whitespace-nowrap'>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
