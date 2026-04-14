import In from '../../assets/linke.svg';
import X from '../../assets/twitter.svg';
import CeoImage from '../../assets/ceo.jpg';
import { motion } from 'framer-motion';

const Ceo = () => {
  return (
    <div className='w-full lg:h-[600px] flex flex-col lg:flex-row bg-gray-950 overflow-hidden'>
      <motion.div 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className='w-full lg:w-1/2 h-[400px] lg:h-full relative ceo'
         style={{ backgroundImage: `url(${CeoImage?.src || CeoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* CEO Background is driven by 'ceo' class which contains the image */}
        <div className='absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent lg:bg-gradient-to-l lg:from-gray-950 lg:to-transparent lg:via-gray-950/50' />
        <div className='absolute bottom-0 w-full p-6 lg:p-12 flex justify-end'>
          <div className='bg-white/10 backdrop-blur-lg w-full max-w-sm px-6 py-6 border border-white/20 rounded-2xl flex flex-row items-center justify-between shadow-2xl'>
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold text-white text-lg lg:text-xl tracking-wide'>
                ENGR. OPURUM EMMANUEL
              </h1>
              <span className='font-medium text-yellow-500 text-sm tracking-widest'>
                MD/CEO
              </span>
            </div>
            <div className='flex flex-row gap-4 items-center pl-4 border-l border-white/20'>
              <a href="#" className="hover:scale-110 transition-transform">
                 <img src={In?.src || In} alt='LinkedIn' className="w-5 brightness-0 invert opacity-80 hover:opacity-100" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                 <img src={X?.src || X} alt='Twitter' className="w-5 brightness-0 invert opacity-80 hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className='w-full lg:w-1/2 px-8 py-16 lg:p-20 xl:py-24 xl:px-24 h-full flex flex-col justify-center gap-8 relative'
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3">
           <div className="w-10 h-1 bg-yellow-400" />
           <h1 className='font-bold text-lg lg:text-xl tracking-wider text-yellow-400 uppercase'>
             About Our CEO
           </h1>
        </div>
        
        <p className='text-base md:text-lg font-light leading-relaxed text-gray-300 relative z-10'>
          Engr. Opurum Emmanuel is a Computer and Electronics Engineer, Server
          administrator, software developer, digital marketer and ethical
          hacker. He is also a certified Cisco Network Administrator, robotics
          engineer, blockchain developer and cyber security expert. 
          <br /><br />
          As a creative thinker and innovator, he has been creating solutions to the
          challenges of Nigeria and other developing regions across Africa
          through various innovative technologies.
        </p>
      </motion.div>
    </div>
  );
};

export default Ceo;
