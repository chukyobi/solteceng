"use client";
import { GoodIcon } from '../../Utils/assets';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className='w-full min-h-[700px] flex flex-col lg:flex-row overflow-hidden bg-gray-950'>
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8 }}
        className='w-full lg:w-1/2 px-6 lg:pl-16 lg:pr-24 xl:px-32 py-16 lg:py-24 flex flex-col justify-center gap-12 relative'
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className='flex flex-col gap-6 relative z-10'>
          <div className="flex items-center gap-3">
             <div className="w-10 h-1 bg-yellow-400" />
             <h1 className='font-bold text-lg lg:text-xl tracking-wider text-yellow-400 uppercase'>
               About Us
             </h1>
          </div>
          <p className='font-light text-base lg:text-lg leading-loose text-gray-300'>
            We’re an engineering firm looking to solve critical problems,
            especially the ones facing developing and under-developed African
            countries through innovative technology and engineering. 
            <br className="hidden md:block"/><br className="hidden md:block" />
            We are constantly improving and are committed to out-thinking and
            out-executing our competitors. We take on what others dismiss as
            impossible and solve the hard problems that others walk away from.
          </p>
        </div>

        <div className='flex flex-col gap-10 relative z-10'>
          <div className='flex flex-col gap-5'>
            {[
              "Registered Company",
              "NSE and COREN certified",
              "24/7 customer support"
            ].map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                key={idx} 
                className='flex flex-row items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors'
              >
                <div className="p-2 bg-yellow-400/20 rounded-lg">
                   <img src={GoodIcon?.src || GoodIcon} alt='check' className="w-5 h-5" />
                </div>
                <span className='font-medium text-base lg:text-lg text-gray-200'>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-6 border-l-4 border-yellow-400 bg-white/5 rounded-r-xl"
          >
            <h2 className='font-medium text-sm lg:text-base leading-relaxed text-gray-300 uppercase'>
              Our firm is duly registered under the Corporate Affairs Commission
              with RC No. <strong className="text-yellow-400">1865563</strong>
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='w-full lg:w-1/2 h-[450px] lg:h-auto aboutR relative'
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-gray-950 pointer-events-none" />
        <div className='h-full flex flex-col justify-end p-8 lg:p-12 relative z-10'>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={() => window.open('https://api.whatsapp.com/send?phone=%2B2348039814257')}
            className='self-start cursor-pointer bg-white/90 backdrop-blur-md shadow-2xl p-6 flex flex-row items-center gap-6 rounded-2xl border border-white/20'
          >
            <div className="bg-green-500 rounded-full p-3 shadow-lg shadow-green-500/30">
              <FaWhatsapp className="w-8 h-8 text-white" />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold text-gray-900 text-lg lg:text-xl tracking-tight'>
                CONTACT US NOW
              </h1>
              <span className='font-medium text-gray-600 text-base lg:text-lg'>
                +234 803 981 4257
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
