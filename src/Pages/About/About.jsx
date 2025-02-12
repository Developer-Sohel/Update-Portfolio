import React, { useEffect, useRef } from 'react';
import sohel from '../../assets/images/sohel.png';
import Tabs from '../../Components/Tabs/Tabs';
import 'animate.css'; 

export const About = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (imageRef.current) {
                        imageRef.current.classList.add('animate__animated', 'animate__fadeInLeft');
                    }
                    if (textRef.current) {
                        textRef.current.classList.add('animate__animated', 'animate__fadeInRight');
                    }
                    observer.unobserve(entry.target); 
                }
            },
            { threshold: 0.5 } 
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className='container mx-auto lg:px-24 py-12'>
            <section className="shadow-md">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-28">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" ref={imageRef}>
                        <img src={sohel} className='shadow-2xl rounded-md shadow-red-300' alt="Sohel Khan" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:w-1/2 space-y-2.5 lg:text-left" ref={textRef}>
                        <h1 className='text-2xl font-bold text-orange-500 tracking-wider'>About Us</h1>
                        <h1 className='text-3xl font-bold tracking-wider leading-6'>I'M SOHEL KHAN</h1>
                        <h2 className='text-xl font-semibold text-orange-500'>Mern-Stack Developer | Adept Front-End Developer</h2>
                        <p className='text-[15px] font-medium tracking-wide leading-5.6'>
                            MERN stack developer proficient in building dynamic and responsive web applications.
                            Experienced in front-end development, specializing in creating user-friendly interfaces.
                            Skilled in React.js, JavaScript, HTML, and CSS, ensuring seamless user experiences.
                            Adept at back-end development using Node.js and Express.js for robust server-side logic.
                            Proficient in MongoDB for efficient data storage and retrieval.
                            Passionate about staying up-to-date with the latest technologies and trends in web development.
                            Dedicated to delivering high-quality, scalable, and maintainable code.
                            Eager to collaborate with teams and contribute to innovative projects.
                        </p>
                    </div>
                </div>
            </section>

            <Tabs />
        </div>
    );
};