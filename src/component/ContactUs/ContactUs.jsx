import Logo from '../../assets/eng-log.svg';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  WhatsappC,
} from '../../Utils/assets';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import { apiRequest } from '../../Utils/apiRequest';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Checked from '../../assets/checked.png';
import { AiFillTikTok } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';

const socialLinks = [
  {
    link: 'https://api.whatsapp.com/send?phone=%2B2348039814257',
    icon: WhatsappC,
  },
  { link: 'https://www.instagram.com/solteceng', icon: Instagram },
  {
    link: 'https://www.facebook.com/profile.php?id=61551735897565',
    icon: Facebook,
  },
  {
    link: 'https://www.linkedin.com/company/soltec-engineering-limited/',
    icon: Linkedin,
  },
  { link: 'https://x.com/solteceng', icon: Twitter },
];

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    try {
      await apiRequest('POST', `/contactus/`, values);
      resetForm();
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('An error occurred: ', error);
      toast.error('An error occurred, please try again!', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-200'>
      <Header />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col pt-12 md:pt-16 px-4 pb-20 items-center justify-center'
      >
        <div className='flex flex-col gap-3 items-center justify-center mb-6'>
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className='font-bold text-4xl md:text-5xl text-gray-900 tracking-tight text-center'
          >
            Get In Touch
          </motion.h1>
          <p className="text-gray-500 text-center max-w-md mt-2">
            Have questions  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className='w-16 h-1.5 rounded-full bg-yellow-400 mt-2' />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className='bg-white/70 backdrop-blur-xl shadow-2xl border border-white/50 px-6 py-10 md:p-12 mt-6 w-full max-w-5xl rounded-3xl flex flex-col lg:flex-row gap-12 lg:gap-20'
        >
          {/* Left Panel */}
          <div className='lg:w-1/3 flex flex-col gap-10'>
            <img src={Logo?.src || Logo} alt='Soltec Engineering Logo' className='w-48 object-contain' />
            <div className='flex flex-col gap-8'>
              <div className='group flex flex-col gap-1'>
                <span className='text-sm text-gray-400 font-semibold uppercase tracking-wider'>Phone Number</span>
                <span className='text-lg font-medium text-gray-800 group-hover:text-yellow-600 transition-colors'>+234 803 981 4257</span>
              </div>
              <div className='group flex flex-col gap-1'>
                <span className='text-sm text-gray-400 font-semibold uppercase tracking-wider'>Email Address</span>
                <span className='text-lg font-medium text-gray-800 group-hover:text-yellow-600 transition-colors'>info@solteceng.com</span>
              </div>
              <div className='group flex flex-col gap-1'>
                <span className='text-sm text-gray-400 font-semibold uppercase tracking-wider'>Head Office</span>
                <span className='text-lg font-medium text-gray-800 leading-snug'>
                  #27 Billy Okoye Boulevard, <br />
                  Agu-Awka
                </span>
              </div>
            </div>

            <div className='pt-8 border-t border-gray-200/60'>
              <span className='text-sm text-gray-400 font-semibold uppercase tracking-wider mb-4 block'>Follow Us</span>
              <div className='flex flex-row items-center gap-4'>
                {socialLinks.map((link, i) => (
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    key={i} 
                    href={link.link} 
                    className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all' 
                    target='_blank' rel="noreferrer"
                  >
                    <img src={link.icon?.src || link.icon} className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity' alt='' />
                  </motion.a>
                ))}
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href='https://vm.tiktok.com/ZMr57L225/' 
                  className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all' 
                  target='_blank' rel="noreferrer"
                >
                  <AiFillTikTok className="text-gray-600 hover:text-black transition-colors" size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className='lg:w-2/3 flex flex-col pt-4 lg:pt-0'>
            <Formik
              initialValues={{
                full_name: '',
                email: '',
                message: '',
                tag: 'ENGINEERING',
              }}
              validationSchema={Yup.object({
                full_name: Yup.string().required('Full Name is required'),
                message: Yup.string().required('Message is required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Email is required'),
              })}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ handleChange, handleBlur, errors, touched }) => (
                <Form className='flex flex-col gap-6 w-full'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm text-gray-700 ml-1' htmlFor='full_name'>
                        Full Name
                      </label>
                      <Field
                        type='text'
                        name='full_name'
                        placeholder="John Doe"
                        onChange={handleChange('full_name')}
                        onBlur={handleBlur('full_name')}
                        className='w-full outline-none text-base bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 rounded-xl px-4 py-3.5 transition-all shadow-sm'
                      />
                      <AnimatePresence>
                        {touched.full_name && errors.full_name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className='text-red-500 text-xs font-medium ml-1'
                          >
                            {errors.full_name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label className='font-medium text-sm text-gray-700 ml-1' htmlFor='email'>
                        Email Address
                      </label>
                      <Field
                        type='email'
                        name='email'
                        placeholder="john@example.com"
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        className='w-full outline-none text-base bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 rounded-xl px-4 py-3.5 transition-all shadow-sm'
                      />
                      <AnimatePresence>
                        {touched.email && errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className='text-red-500 text-xs font-medium ml-1'
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='font-medium text-sm text-gray-700 ml-1' htmlFor='message'>
                      Your Message
                    </label>
                    <Field
                      as='textarea'
                      name='message'
                      placeholder="How can we help you today?"
                      style={{ height: '180px', resize: 'none' }}
                      onChange={handleChange('message')}
                      onBlur={handleBlur('message')}
                      className='w-full outline-none text-base bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 rounded-xl px-4 py-3.5 transition-all shadow-sm'
                    />
                    <AnimatePresence>
                      {touched.message && errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className='text-red-500 text-xs font-medium ml-1'
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-4">
                    {!success ? (
                      <>
                        {!loading ? (
                          <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type='submit'
                            className='w-full text-lg text-gray-900 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-bold h-14 flex items-center justify-center transition-colors shadow-lg shadow-yellow-400/30'
                          >
                            Send Message
                          </motion.button>
                        ) : (
                          <div className='w-full flex items-center justify-center h-14 bg-gray-100 rounded-xl'>
                            <ProgressBar visible={true} height='50' width='50' barColor='#4B5563' borderColor='#9CA3AF' />
                          </div>
                        )}
                      </>
                    ) : (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='h-14 w-full bg-green-50 rounded-xl border border-green-200 items-center flex justify-center gap-3'
                      >
                        <img src={Checked?.src || Checked} className='w-6 h-6' alt='Success' />
                        <span className="text-green-700 font-semibold">Message sent successfully!</span>
                      </motion.div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactUs;
