/* eslint-disable react/prop-types */
import Link from "next/link";
import { useState } from 'react';
import { Logo2, LogoE, LogoEng, Menu, Menu2 } from '../../Utils/assets';
import Sidebar from './Sidebar';
import { AcademyUrl } from '../../Utils/apiRequest';
import { usePathname } from 'next/navigation';

const Header = ({ headerCol }) => {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='contaier px-4 lgl:px-[76px] xl:px-[120px] py-4 lg:py-6'>
      <div className={`sidebar ${showSidebar ? 'open z-3' : ''}`}>
        <Sidebar
          showSidebar={showSidebar}
          toggle={() => setShowSidebar(false)}
        />
      </div>
      <div className=''>
        <div className='flex flex-row gap-14 items-center justify-between'>
          <div className='z-5'>
            {headerCol ? (
              <Link href={'/'}>
                <img src={LogoE?.src || LogoE} className='hidden w-[216px] lg:flex' alt='' />
              </Link>
            ) : (
              <Link href={'/'}>
                <img
                  src={LogoEng?.src || LogoEng}
                  className='hidden w-[216px] lg:flex'
                  alt=''
                />
              </Link>
            )}
            <Link href={'/'}>
              <img src={Logo2?.src || Logo2} className='flex lg:hidden' alt='' />
            </Link>
          </div>
          <div className='hidden z-10 lg:flex text-nowrap flex-row lg:gap-4 lgl:gap-7 xxl:gap-10 '>
            <Link
              className={
                pathname === '/' 
                  ? (headerCol ? 'text-white text-sm lgx:text-base nav-lnk font-bold' : 'nav-lik text-sm lgx:text-base text-black font-bold')
                  : (headerCol ? 'unselected text-sm lgx:text-base transition font-medium duration-300 hover:font-bold hover:text-white' : 'unselected text-sm lgx:text-base hover:text-black transition duration-300 hover:font-semibold font-medium')
              }
              href={'/'}
            >
              <h1>HOME</h1>
            </Link>
            <Link
              href='/#about-us'
              className={`font-medium text-sm lgx:text-base hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white' : 'text-black'
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href='/#services'
              className={`font-medium text-sm lgx:text-base hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              OUR SERVICES
            </Link>
            <Link
              href='/#faqs'
              className={`font-medium text-sm lgx:text-base hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              FAQS
            </Link>

            <a
              href={`${AcademyUrl}`}
              target='_self'
              className={`font-medium text-sm lgx:text-base hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white text-sm lgx:text-base ' : 'text-black'
              }`}
            >
              <span>ACADEMY</span>
            </a>

            <Link
              className={
                pathname === '/contact-us' 
                  ? (headerCol ? 'text-white text-sm lgx:text-base nav-lnk font-bold' : 'nav-lik text-sm lgx:text-base text-black font-bold')
                  : (headerCol ? 'unselected text-sm lgx:text-base transition font-medium duration-300 hover:font-bold hover:text-white' : 'unselected text-sm lgx:text-base hover:text-black transition duration-300 hover:font-semibold font-medium')
              }
              href={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </Link>
          </div>

          <Link
            href={'/get-quote'}
            className='font-semibold text-black transition duration-300 ease-in-out hidden w-[141px] h-12 items-center justify-center lg:flex z-5 text-nowrap bg-white hover:bg-[#f0f0f0] rounded-[4px] hover:cursor-pointer border border-[#1c1c1c] p-2.5'
          >
            <span>GET A QUOTE</span>
          </Link>
          <div onClick={toggleSidebar} className='flex lg:hidden z-1'>
            {headerCol ? <img src={Menu2?.src || Menu2} alt='' /> : <img src={Menu?.src || Menu} alt='' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
