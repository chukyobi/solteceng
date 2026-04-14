import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../common/Header';
import { apiRequest } from '../../Utils/apiRequest';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import CoreValues from './CoreValues';
import Services from './Services';
import AcademyWorkspace from './AcademyWorkspace';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Ceo from './Ceo';
import Faq from './Faq';
import Footer from '../../component/common/Footer';
import { usePathname } from "next/navigation";

const HomeDashboard = () => {
  const [testimonialsData, setTestimonialsData] = useState(null);

  useEffect(() => {
    getTestimonials();
  }, []);

  const getTestimonials = async () => {
    try {
      const response = await apiRequest('GET', `/testimonials/?tag=ENGINEERING`);
      setTestimonialsData(response.results);
    } catch (error) {
      console.log('Testimonial API error:', error);
    }
  };

  return (
    <div className='flex flex-col bg-gray-950 font-sans min-h-screen overflow-x-hidden'>
      {/* Sleek Hero Full Screen Container */}
      <div className='relative w-full min-h-[90vh] flex flex-col'>
         {/* Premium background using CSS background-image + Tailwind overlays */}
         <div 
           className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed' 
           style={{ backgroundImage: "url('https://ik.imagekit.io/nz8zngrxv/amazon-image/nuno-marques-0GbrjL3vZF4-unsplash%201_DFQq2Pop9.jpg?updatedAt=1711326906965')" }}
         >
           <div className='absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/80 to-gray-950' />
         </div>
         <div className='relative z-10 flex flex-col h-full'>
            <Header headerCol={true} />
            <div className='flex-grow flex items-center pt-10 pb-20'>
               <HeroSection />
            </div>
         </div>
      </div>

      <div id='about-us'>
        <AboutUs />
      </div>

      <div id='core-values'>
        <CoreValues />
      </div>

      <div id='services'>
        <Services />
        <AcademyWorkspace />
        <div className='bg-gray-950'>
          <Projects />
        </div>
        <div className='bg-gray-900'>
          <Testimonial testimonialsData={testimonialsData} />
        </div>
      </div>

      <Ceo />

      <div id='faqs'>
        <div className='bg-gray-950'>
          <Faq />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeDashboard;
