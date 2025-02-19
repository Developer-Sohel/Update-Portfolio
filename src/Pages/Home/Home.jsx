import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import Expertise from '../Expertise/Expertise';
import { About } from '../About/About';
import Project from '../Project/Project';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import { LifeLine } from 'react-loading-indicators';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">

        <LifeLine color="#cc3331" size="large" text="DEVELOPER SOHEL" textColor="" />

        

        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <Expertise />
      <About />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;