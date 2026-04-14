/* eslint-disable react/prop-types */
import Profile from '../../assets/profile.jpg';
import Media from '../../assets/media-1.svg';
import Marquee from 'react-fast-marquee';
import { testimonialDummyData } from '../DummyData/testimonialData';
import { motion } from 'framer-motion';

const Testimonial = ({ testimonialsData }) => {
  return (
    <div className='w-full bg-gray-900 flex flex-col items-center py-24 justify-center overflow-hidden'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 items-center justify-center px-6'
      >
        <h1 className='font-bold tracking-wider text-white text-3xl lg:text-4xl text-center uppercase'>
          What Our Clients Are Saying
        </h1>
        <div className='w-16 h-1.5 bg-yellow-400 rounded-full' />
      </motion.div>
      
      <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2, duration: 1 }}
         className='w-full mt-16 lg:mt-24'
      >
        <Marquee speed={55} pauseOnHover gradient={false} className="py-4">
          <div className='flex flex-row pl-6'>
            {testimonialsData && testimonialsData.length >= 1 ? (
              <Testimonies testimonialsData={testimonialsData} />
            ) : (
              <Testimonies testimonialsData={testimonialDummyData} />
            )}
          </div>
        </Marquee>
      </motion.div>
    </div>
  );
};

export default Testimonial;

const Testimonies = ({ testimonialsData }) => {
  return (
    <div className='flex flex-row items-center'>
      {testimonialsData &&
        testimonialsData.map((testimony, index) => (
          <div
            key={index}
            className='mr-8 flex flex-col relative w-[400px] lg:w-[450px] bg-gray-800/50 backdrop-blur-md shadow-2xl border border-gray-700/50 rounded-3xl p-8 hover:border-yellow-400/30 transition-colors group'
          >
            <img src={Media?.src || Media} className='absolute top-8 right-8 w-10 opacity-10 group-hover:opacity-30 transition-opacity' alt='quote' />
            <div className='flex flex-col gap-8'>
              <p className='text-base lg:text-lg font-light text-gray-300 italic leading-relaxed min-h-[100px] z-10'>
                "{testimony?.content}"
              </p>
              <div className='flex flex-row gap-5 items-center pt-6 border-t border-gray-700/50'>
                <img
                  src={testimony?.author_image?.src || testimony?.author_image}
                  className='w-14 h-14 rounded-full object-cover border-2 border-gray-600 group-hover:border-yellow-400 transition-colors'
                  alt={testimony?.author}
                />
                <div className='flex flex-col'>
                  <span className='font-bold text-gray-100 text-base'>
                    {testimony?.author}
                  </span>
                  <span className='font-medium text-yellow-500 text-sm'>
                    {testimony?.profession}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      <StaticTestimonial />
    </div>
  );
};

const StaticTestimonial = () => {
  return (
    <div className='mr-8 flex flex-col relative w-[400px] lg:w-[450px] bg-gray-800/50 backdrop-blur-md shadow-2xl border border-gray-700/50 rounded-3xl p-8 hover:border-yellow-400/30 transition-colors group'>
       <img src={Media?.src || Media} className='absolute top-8 right-8 w-10 opacity-10 group-hover:opacity-30 transition-opacity' alt='quote' />
      <div className='flex flex-col gap-8'>
        <p className='text-base lg:text-lg font-light text-gray-300 italic leading-relaxed min-h-[100px] z-10'>
          "Great job and good professionalism all through. I got my
          surveillance system installed and everything is working perfectly."
        </p>
        <div className='flex flex-row gap-5 items-center pt-6 border-t border-gray-700/50'>
          <img
            src={Profile?.src || Profile}
            className='w-14 h-14 rounded-full object-cover border-2 border-gray-600 group-hover:border-yellow-400 transition-colors'
            alt='Profile'
          />
          <div className='flex flex-col'>
            <span className='font-bold text-gray-100 text-base'>
              James Doe
            </span>
            <span className='font-medium text-yellow-500 text-sm'>
              UI/UX Designer, X Alumni
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
