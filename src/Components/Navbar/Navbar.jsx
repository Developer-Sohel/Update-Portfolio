import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBriefcase, FaCode, FaBlog, FaEnvelope } from 'react-icons/fa'; // Import icons
import ThemeConfig from './ThemeConfig/ThemeConfig';

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <FaHome className="mr-2" /> },
    { path: "/expertise", text: "Expertise", icon: <FaBriefcase className="mr-2" /> },
    { path: "/about", text: "About", icon: <FaInfoCircle className="mr-2" /> },
    { path: "/project", text: "Project", icon: <FaCode className="mr-2" /> },
    { path: "/blog", text: "Blog", icon: <FaBlog className="mr-2" /> },
    { path: "/contact", text: "Contact", icon: <FaEnvelope className="mr-2" /> },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-gray-800 fixed top-0 left-0 right-0 z-50'> {/* Added fixed, top-0, left-0, right-0, and z-50 */}
      <nav className=" p-4 container mx-auto lg:px-24">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">SOHEL <span>KHAN</span></div>
          <div className="hidden md:flex justify-center items-center flex-grow gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-[14px] tracking-widest leading-5 text-amber-50 hover:text-green-500 font-semibold"
              >
                {item.text}
              </NavLink>
            ))}

          </div>

         
          <ThemeConfig />
           {/* login-option */}

           {/* <NavLink to='/login'>  <button className='bg-orange-400 px-6 py-1 rounded-sm tracking-widest leading-8 text-white font-semibold text-[16px]'>Login</button></NavLink> */}

          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-1/2 h-full bg-gray-700 z-50 transition-transform duration-300 ease-in-out" style={{ transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)' }}>
            <div className="p-4 relative">

              <div className="mt-12 flex flex-col space-y-8 px-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="text-[14px] tracking-widest leading-5 text-amber-50 shadow-2xl  hover:text-green-500 font-semibold flex items-center transition duration-300 ease-in-out hover:shadow-lg py-2 px-2 rounded-md hover:bg-gray-600"
                  >
                    {item.icon}
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;