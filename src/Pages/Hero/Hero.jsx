import React from 'react';
import sohel from '../../assets/images/sohel.png';
import TypeAnimated from '../../Components/TypeAnimated/TypeAnimated';
import { GrResume } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";




const Hero = () => {
  
                        
  const googleDriveLink = 'https://drive.google.com/file/d/1b7t2hqocbHJNJvQItsQmFhxNfRHgGYh3/view?usp=sharing'; 

  const linkedin = 'https://bd.linkedin.com/in/md-sohel-rana-web-developer'; 

  return (
    <div>
      <div className="container mx-auto lg:px-24">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <div className="mb-8">
            <img src={sohel} className="bg-amber-700 rounded-full w-80 h-80" alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-widest leading-6">
              IT'S ME <span className="text-orange-500">SOHEL</span>
            </h1>

            <TypeAnimated />

            <p className="text-[15px] font-medium tracking-wide leading-relaxed">
              Skilled MERN-stack developer and adept front-end specialist passionate
              about crafting seamless user experiences. Dedicated to continuous
              learning and leveraging the latest technologies for cutting-edge web
              applications.
            </p>

            <div className="flex justify-center gap-4 mt-4">
              
              
                <a
                  href={googleDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 px-4 py-2 text-white text-[14px] rounded-md font-semibold tracking-widest flex justify-center items-center gap-2"
                >
                  My Resume <GrResume />
 
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 px-4 py-2 text-white text-[14px] rounded-md font-semibold tracking-widest flex justify-center items-center gap-2"
                >
                 Linkedin <FaLinkedin />
                </a>


              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;