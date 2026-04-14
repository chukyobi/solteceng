/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import Link from "next/link";
import { Close } from '../../Utils/assets';
import { AcademyUrl } from '../../Utils/apiRequest';

const Sidebar = ({ toggle, showSidebar }) => {
  return (
    <div className='overflow-hidden static'>
      {showSidebar && (
        <>
          <div className='flex justify-end' onClick={toggle}>
            <img src={Close?.src || Close} alt='' />
          </div>
          <div className='mt-[110px] text-black flex flex-col gap-[48px] ml-[24px]'>
            <Link className='nav-link text-nowrap' onClick={toggle} href={'/'}>
              <h1>HOME</h1>
            </Link>
            <Link
              href='/#about-us'
              onClick={toggle}
              className='nav-link text-nowrap'
            >
              ABOUT US
            </Link>
            <Link
              href='/#services'
              onClick={toggle}
              className='nav-link text-nowrap'
            >
              OUR SERVICES
            </Link>
            <Link
              href='/#faqs'
              onClick={toggle}
              className='nav-link text-nowrap'
            >
              FAQS
            </Link>
            <a
              href={`${AcademyUrl}`}
              target='_self'
              className='nav-link text-nowrap'
            >
              <h1 className='nav-link'>ACADEMY</h1>
            </a>
            <Link
              className='nav-link text-nowrap'
              onClick={toggle}
              href={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </Link>
            <Link
              href={'/get-quote'}
              onClick={toggle}
              className='w-[159px] h-[48px] hover:bg-[#f1f1f1] flex items-center justify-center border border-gray-900 rounded-2xl p-[10px] text-[14px] text-[#000]'
            >
              <h1 className='nav-link'>GET QUOTE</h1>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
