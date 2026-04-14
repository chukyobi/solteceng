/* eslint-disable react/prop-types */
import WorkSpaceImages from './WorkSpaceImages';
import { AcademyLogo } from '../../Utils/assets';
import { AcademyUrl } from '../../Utils/apiRequest';
import Marquee from 'react-fast-marquee';
import Link from "next/link";
import { courseDummyData } from '../DummyData/coursesDummyData';
import { motion } from 'framer-motion';

const Academy = () => {
  return (
    <div className='w-full bg-gray-950 flex flex-col py-24'>
      <div className='flex flex-col items-center justify-center w-full gap-12 px-6 lg:px-24'>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-4 items-center justify-center'
        >
          <h1 className='text-white font-bold tracking-wider text-3xl lg:text-4xl text-center uppercase'>
            Our Academy
          </h1>
          <div className='w-16 h-1.5 bg-yellow-400 rounded-full' />
        </motion.div>

        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className='flex items-center justify-center bg-white h-20 w-20 rounded-full shadow-xl shadow-yellow-400/20 shadow-[0_0_40px_rgba(250,204,21,0.2)]'
        >
          <img src={AcademyLogo?.src || AcademyLogo} alt='Academy Logo' className="w-12 h-12 object-contain" />
        </motion.div>

        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className='text-base lg:text-lg font-light leading-relaxed text-center text-gray-300 max-w-4xl'
        >
          Soltec Academy offers the best tutorial services for those looking to
          learn a digital skill. With super experienced tutors and a conducive 
          learning environment, our hybrid bootcamp brings you from beginner to 
          marketable in no time.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className='flex flex-col w-full items-center gap-12 pt-8'
        >
          <div className='w-full max-w-6xl py-4 overflow-hidden border-y border-white/5'>
            <Marquee speed={40} gradient={false} className="py-2">
              <div className="flex items-center">
                {(courseDummyData || []).map((course, index) => (
                    <span
                      key={index}
                      className='text-gray-400 uppercase pr-16 text-lg lg:text-xl tracking-wider font-semibold'
                    >
                      {course?.title}
                    </span>
                ))}
              </div>
            </Marquee>
          </div>

          <div className="w-full relative opacity-90 hover:opacity-100 transition-opacity">
            <WorkSpaceImages />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.7, duration: 0.5 }}
           className="mt-8"
        >
          <a href={`${AcademyUrl}`} target='_self'>
            <div className='group relative px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition-colors duration-300 rounded-xl overflow-hidden shadow-xl shadow-yellow-400/20'>
              <span className='font-bold text-sm tracking-widest relative z-10'>
                SEE MORE
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Academy;
