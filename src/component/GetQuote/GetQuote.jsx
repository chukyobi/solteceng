import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Media from '../../assets/media-1.svg';
import { ArrowDown, CloudAdd } from '../../Utils/assets';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ProgressBar, RotatingLines } from 'react-loader-spinner';
import { AnimatePresence, motion } from 'framer-motion';
import { BaseURL, apiRequest } from '../../Utils/apiRequest';
import Header from '../common/Header';
import { testimonialDummyData } from '../DummyData/testimonialData';
import Checked from '../../assets/checked.png';

const categories = [
  { name: 'POWER_AND_ENERGY' },
  { name: 'SMART_SECURITY' },
  { name: 'SOFTWARE_DEVELOPMENT' },
  { name: 'TEACHING_COURSES' },
  { name: 'BUILDING_AND_CONSTRUCTION' },
  { name: 'ROBOTICS_AND_AUTOMATION' },
];

const GetQuote = () => {
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [openCategories, setOpenCategories] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedproject_category, setSelectedproject_category] = useState('');
  const [addLoading, setAddLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    getTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const getTestimonials = async () => {
    setPageLoading(true);
    try {
      const response = await apiRequest(
        'GET',
        `/testimonials/?tag=ENGINEERING`,
      );
      setTestimonialsData(response.results);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
      console.log('error', error);
    }
  };

  const handleDrop = (e, setFieldValue, setFieldError) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFileType(droppedFile, setFieldValue, setFieldError);
  };

  const handleFileChange = (event, setFieldValue, setFieldError) => {
    const file = event.target.files[0];
    handleFileType(file, setFieldValue, setFieldError);
  };

  const handleFileType = (file, setFieldValue, setFieldError) => {
    if (file) {
      const type = file.type;
      if (type.startsWith('image/')) {
        setFieldValue('project_document', file);
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setPreview(reader.result);
          };
        }
      } else if (type === 'application/pdf') {
        setFieldValue('project_document', file);
        setFileName(file.name);
      } else if (
        type === 'application/msword' ||
        type ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFieldValue('project_document', file);
        setFileName(file.name);
      } else {
        setFieldError('project_document', 'Invalid file type');
      }
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleSubmit = async (values, resetForm) => {
    let formData = new FormData();
    formData.append(`project_document`, values?.project_document);
    formData.append(`project_description`, values?.project_description);
    formData.append(`project_category`, values?.project_category);
    formData.append(`phone_number`, values?.phone_number);
    formData.append(`email`, values?.email);
    setAddLoading(true);
    try {
      const response = await fetch(`${BaseURL}/get-quota/`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        resetForm();
        setFileName('');
        setPreview('');
        setAddLoading(false);
        setSuccess(true);
      } else {
        console.error('An error occured', response.statusText);
        setAddLoading(false);
      }
    } catch (error) {
      toast.error('An error occured, please try again!', {
        position: 'top-right',
      });
      setAddLoading(false);
    }
  };
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative pb-20'>
      {success && <SuccessModal setSuccess={setSuccess} />}
      <Header />
      
      {!pageLoading ? (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col pt-12 items-center justify-center'
        >
          <div className='flex flex-col gap-3 items-center justify-center mb-10'>
            <h1 className='font-bold text-4xl md:text-5xl text-gray-900 tracking-tight text-center'>
              Request a Quotation
            </h1>
            <p className="text-gray-500 text-center max-w-md mt-2">
              Fill out the form with your project details, and our technical team will review and provide an estimate.
            </p>
            <div className='w-16 h-1.5 rounded-full bg-yellow-400 mt-2' />
          </div>

          <div className='flex flex-col lg:flex-row w-full max-w-6xl mt-8 gap-12 px-6 lg:px-12'>
            {/* Testimonials Side */}
            <div className='hidden lg:flex flex-col w-1/3 gap-8'>
              <h2 className="text-xl font-semibold text-gray-800">What Our Clients Say</h2>
              {testimonialsData && testimonialsData.length > 2 ? (
                <Testimonials testimonialsData={testimonialsData} />
              ) : (
                <Testimonials testimonialsData={testimonialDummyData} />
              )}
            </div>

            {/* Form Side */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='flex flex-col w-full lg:w-2/3 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-10 border border-gray-100'
            >
              <div className='flex items-center justify-center bg-blue-50/50 border border-blue-200 rounded-2xl p-4 mb-8 shadow-sm'>
                <span className='text-center font-medium text-blue-800 text-sm md:text-base'>
                  We typically process and provide comprehensive quotes within <strong className="text-blue-900">three business days</strong>.
                </span>
              </div>

              <Formik
                initialValues={{
                  project_description: '',
                  project_category: '',
                  project_document: '',
                  phone_number: '',
                  email: '',
                }}
                validationSchema={Yup.object({
                  project_description: Yup.string().required('Description is required'),
                  project_category: Yup.string().required('Category is required'),
                  project_document: Yup.string().required('Document is required'),
                  phone_number: Yup.string().required('Phone is required'),
                  email: Yup.string().email('Invalid email address').required('Email is required'),
                })}
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values, resetForm);
                }}
              >
                {({ handleChange, handleBlur, errors, touched, setFieldValue, setFieldError }) => (
                  <Form className='flex flex-col gap-6 w-full'>
                    <div className='flex flex-col gap-2'>
                      <label className='font-semibold text-sm text-gray-700 ml-1' htmlFor='project_category'>
                        Project Category
                      </label>
                      <div className='relative'>
                        <div
                          onClick={() => setOpenCategories(!openCategories)}
                          className='w-full px-4 text-gray-600 hover:cursor-pointer py-3.5 flex flex-row justify-between items-center bg-white border border-gray-200 rounded-xl focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20 transition-all shadow-sm'
                        >
                          <span className={selectedproject_category ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                            {selectedproject_category ? selectedproject_category.replace(/_/g, ' ') : 'Select Project Category'}
                          </span>
                          <img src={ArrowDown?.src || ArrowDown} className={`w-4 transition-transform duration-300 ${openCategories ? 'rotate-180' : ''}`} alt='dropdown' />
                        </div>
                        {openCategories && (
                          <>
                            <div onClick={() => setOpenCategories(false)} className='fixed inset-0 z-10'></div>
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                              className='absolute w-full bg-white z-20 mt-2 rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2'
                            >
                              {categories.map((cat, index) => (
                                <div
                                  key={index}
                                  onClick={() => {
                                    setFieldValue('project_category', cat.name);
                                    setSelectedproject_category(cat.name);
                                    setOpenCategories(false);
                                  }}
                                  className='hover:bg-blue-50 hover:text-blue-700 hover:cursor-pointer transition duration-200 ease-in-out px-4 py-2.5 text-sm font-medium text-gray-700'
                                >
                                  {cat.name.replace(/_/g, ' ')}
                                </div>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </div>
                      <AnimatePresence>
                        {touched.project_category && errors.project_category && (
                          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className='text-red-500 text-xs font-medium ml-1'>
                            {errors.project_category}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label className='font-semibold text-sm text-gray-700 ml-1' htmlFor='project_description'>
                        Project Description
                      </label>
                      <Field
                        as='textarea'
                        name='project_description'
                        placeholder="Provide details about your project logic, scale, and requirements..."
                        style={{ height: '140px', resize: 'none' }}
                        onChange={handleChange('project_description')}
                        onBlur={handleBlur('project_description')}
                        className='w-full outline-none text-base bg-white border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 rounded-xl px-4 py-3.5 transition-all shadow-sm'
                      />
                      <AnimatePresence>
                        {touched.project_description && errors.project_description && (
                          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className='text-red-500 text-xs font-medium ml-1'>
                            {errors.project_description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label className='font-semibold text-sm text-gray-700 ml-1'>
                        Upload Relevant Documents
                      </label>
                      <>
                        {!preview && !fileName && (
                          <div
                            className='w-full h-48 border-2 border-dashed border-gray-300 bg-gray-50/50 hover:bg-blue-50/30 hover:border-blue-300 transition-colors rounded-2xl flex flex-col gap-4 py-6 items-center justify-center cursor-pointer'
                            onDrop={e => handleDrop(e, setFieldValue, setFieldError)}
                            onDragOver={handleDragOver}
                            onClick={() => document.getElementById('fileInput').click()}
                          >
                            <input
                              type='file'
                              id='fileInput'
                              name='project_document'
                              className='hidden'
                              onChange={e => handleFileChange(e, setFieldValue, setFieldError)}
                            />
                            <div className="p-3 bg-white rounded-full shadow-sm">
                               <img src={CloudAdd?.src || CloudAdd} alt='upload' className="w-8 opacity-80" />
                            </div>
                            <div className='flex flex-col gap-1 items-center justify-center'>
                              <h1 className='font-medium text-sm text-gray-800'>Click to upload or drag and drop</h1>
                              <span className='font-normal text-xs text-gray-400'>JPEG, PNG, DOCX or PDF (max. 50MB)</span>
                            </div>
                          </div>
                        )}
                        {preview && (
                          <div className='w-full relative rounded-2xl shadow-sm border border-gray-200 overflow-hidden group'>
                            <button
                              type="button"
                              onClick={() => { setFieldValue('project_document', ''); setPreview(''); }}
                              className='absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 flex items-center justify-center rounded-full shadow-md z-10 transition-transform hover:scale-110'
                            >
                              X
                            </button>
                            <img src={preview?.src || preview} className='object-cover w-full h-48' alt='preview' />
                          </div>
                        )}
                        {fileName && (
                          <div className='w-full h-24 relative rounded-2xl shadow-sm border border-gray-200 bg-blue-50/50 flex items-center justify-center px-8'>
                            <button
                              type="button"
                              onClick={() => { setFieldValue('project_document', ''); setFileName(''); }}
                              className='absolute right-4 bg-white hover:bg-gray-100 text-gray-600 w-8 h-8 flex items-center justify-center rounded-full shadow-sm z-10 transition-colors'
                            >
                              X
                            </button>
                            <span className='text-sm font-medium text-blue-800 truncate max-w-[80%]'>{fileName}</span>
                          </div>
                        )}
                      </>
                      <AnimatePresence>
                        {touched.project_document && errors.project_document && (
                          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className='text-red-500 text-xs font-medium ml-1'>
                            {errors.project_document}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-sm text-gray-700 ml-1' htmlFor='phone_number'>
                          Phone Number
                        </label>
                        <Field
                          type='text'
                          name='phone_number'
                          placeholder="+234 XXX XXX XXXX"
                          onChange={handleChange('phone_number')}
                          onBlur={handleBlur('phone_number')}
                          className='w-full outline-none text-base bg-white border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 rounded-xl px-4 py-3.5 transition-all shadow-sm'
                        />
                        <AnimatePresence>
                          {touched.phone_number && errors.phone_number && (
                            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className='text-red-500 text-xs font-medium ml-1'>
                              {errors.phone_number}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-sm text-gray-700 ml-1' htmlFor='email'>
                          Email Address
                        </label>
                        <Field
                          type='email'
                          name='email'
                          placeholder="you@company.com"
                          onChange={handleChange('email')}
                          onBlur={handleBlur('email')}
                          className='w-full outline-none text-base bg-white border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 rounded-xl px-4 py-3.5 transition-all shadow-sm'
                        />
                        <AnimatePresence>
                          {touched.email && errors.email && (
                            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className='text-red-500 text-xs font-medium ml-1'>
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-4">
                      {!addLoading ? (
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          type='submit'
                          className='w-full text-lg text-gray-900 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-bold h-14 flex items-center justify-center transition-colors shadow-lg shadow-yellow-400/30'
                        >
                          Submit Request
                        </motion.button>
                      ) : (
                        <div className='w-full flex items-center justify-center h-14 bg-gray-100 rounded-xl'>
                          <ProgressBar visible={true} height='50' width='50' barColor='#4B5563' borderColor='#9CA3AF' />
                        </div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <div className='w-full h-[80vh] flex items-center justify-center'>
          <RotatingLines visible={true} height='50' width='50' strokeColor='gray' strokeWidth='3' />
        </div>
      )}
    </div>
  );
};

export default GetQuote;

const Testimonials = ({ testimonialsData }) => {
  return (
    <div className="flex flex-col gap-5">
      {testimonialsData &&
        testimonialsData.slice(0, 3).map((testimony, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            key={index}
            className='flex flex-col relative w-full bg-white shadow-lg border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-shadow'
          >
            <img src={Media?.src || Media} className='absolute top-6 right-6 w-8 opacity-20' alt='quote mark' />
            <div className='flex flex-col gap-4'>
              <p className='text-sm text-gray-600 leading-relaxed italic z-10'>
                "{testimony?.content.length > 150 ? `${testimony?.content.substring(0, 150)}...` : testimony?.content}"
              </p>
              <div className='flex flex-row gap-4 items-center pt-4 border-t border-gray-50'>
                <img src={testimony?.author_image?.src || testimony?.author_image} className='w-12 h-12 rounded-full object-cover border-2 border-yellow-100' alt={testimony?.author} />
                <div className='flex flex-col'>
                  <span className='font-semibold text-gray-900 text-sm'>{testimony?.author}</span>
                  <span className='text-xs font-medium text-yellow-600'>{testimony?.profession}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

const SuccessModal = ({ setSuccess }) => {
  return (
    <div className='fixed z-[100] h-screen w-full top-0 left-0 flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={() => setSuccess(false)}
        className='absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer'
      ></motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
          className='z-10 flex flex-col gap-4 w-full max-w-sm bg-white rounded-3xl p-8 items-center justify-center shadow-2xl relative overflow-hidden'
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-2">
             <img src={Checked?.src || Checked} alt='Success' className="w-10 h-10" />
          </div>
          <span className='font-bold text-2xl text-gray-900 text-center'>Request Received!</span>
          <p className='text-center text-gray-500 text-sm leading-relaxed'>
            You have successfully submitted your project details. Our team will review everything and get back to you with a quotation within 3 business days.
          </p>
          <button 
             onClick={() => setSuccess(false)}
             className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-colors"
          >
             Got it, thanks!
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
