"use client";
import { useState } from 'react';
import Link from "next/link";
import { faqsData } from './faqsData';
import { Arrow_Right } from '../../Utils/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <div className='w-full bg-gray-900 py-24 flex flex-col items-center justify-center relative overflow-hidden'>
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className='flex flex-col lg:flex-row px-6 lg:px-24 justify-center gap-16 w-full max-w-7xl relative z-10'>
        
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className='flex flex-col lg:w-1/3 gap-8'
        >
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-white font-bold tracking-wider text-3xl lg:text-4xl uppercase'>
                FAQ
              </h1>
              <div className='w-16 h-1.5 bg-yellow-400 rounded-full' />
            </div>
            <p className='font-light text-base lg:text-lg leading-relaxed text-gray-400'>
              In Engineering, questions are often specific, and some
              answers just spin more questions. If that’s the case, please Contact
              Us, and let’s talk about your specifics. We’re happy to take a minute.
            </p>
          </div>
          <Link
            href={'/contact-us'}
            className='group w-56 h-14 bg-yellow-400 hover:bg-yellow-500 transition-colors gap-3 rounded-xl flex flex-row items-center justify-center text-gray-900 shadow-xl shadow-yellow-400/20'
          >
            <span className='font-bold text-sm tracking-wider'>ASK A QUESTION</span>
            <img src={Arrow_Right?.src || Arrow_Right} className="group-hover:translate-x-1 transition-transform" alt='' />
          </Link>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className='lg:w-2/3 flex flex-col gap-4'
        >
          {faqsData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`flex flex-col border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer transition-colors ${
                 activeIndex === index ? 'bg-white/10' : 'bg-transparent hover:bg-white/5'
              }`}
            >
              <div className='flex flex-row items-center justify-between p-6'>
                <h1 className={`font-semibold text-base lg:text-lg transition-colors ${activeIndex === index ? 'text-yellow-400' : 'text-gray-200'}`}>
                  {faq?.question}
                </h1>
                <div className='ml-4 flex-shrink-0 bg-white/10 p-2 rounded-full hidden sm:block'>
                  {activeIndex === index ? (
                     <FiChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                     <FiChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='px-6 pb-6'
                  >
                    <p className='font-light text-base leading-relaxed text-gray-400 border-t border-gray-700/50 pt-4'>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Faq;
