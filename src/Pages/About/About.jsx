import React, { useEffect, useRef } from 'react';
import mamun from '../../assets/images/mamun.jpg';
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
                        <img src={mamun} className='shadow-2xl rounded-md shadow-red-300' alt="Sohel Khan" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:w-1/2 space-y-2.5 lg:text-left" ref={textRef}>
                        <h1 className='text-2xl font-bold text-orange-500 tracking-wider mt-4'>About Us</h1>
                        <h1 className='text-3xl font-bold tracking-wider leading-6'>I'M Mamun Mia</h1>
                        <h2 className='text-xl font-semibold text-orange-500'>Digital Marketer Expert</h2>
                        <p className='text-[15px] font-medium tracking-wide leading-5.6'>
                        Experienced digital marketer with expertise in Google Ads, Facebook Ads, and SEO, dedicated to driving measurable results for businesses. Proficient in designing, launching, and optimizing paid campaigns to maximize ROI and achieve targeted goals. Skilled in keyword research, ad copywriting, and bid management to enhance campaign performance. Adept at improving organic search rankings through strategic on-page and off-page SEO techniques. Experienced in leveraging analytics tools to track performance, analyze data, and refine strategies for continuous improvement. Strong ability to manage budgets, A/B test creatives, and implement retargeting strategies for higher conversions. Passionate about staying updated with industry trends and delivering tailored solutions to meet client objectives. Committed to driving growth, increasing brand visibility, and ensuring long-term success through data-driven marketing strategies.
                        </p>
                    </div>
                </div>
            </section>

            <Tabs />
        </div>
    );
};