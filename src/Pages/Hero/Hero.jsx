import React, { useEffect, useRef } from 'react';
import mamun from '../../assets/images/mamun.jpg';
import TypeAnimated from '../../Components/TypeAnimated/TypeAnimated';
import { GrResume } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import 'animate.css'; 

const Hero = () => {
    const googleDriveLink = '';
    const linkedin = '';

    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const resumeRef = useRef(null);
    const linkedinRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (imageRef.current) {
                        imageRef.current.classList.add('animate__animated', 'animate__fadeIn');
                    }
                    if (titleRef.current) {
                        titleRef.current.classList.add('animate__animated', 'animate__fadeInDown');
                    }
                    if (descriptionRef.current) {
                        descriptionRef.current.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                    if (resumeRef.current) {
                        resumeRef.current.classList.add('animate__animated', 'animate__zoomIn');
                    }
                    if (linkedinRef.current) {
                        linkedinRef.current.classList.add('animate__animated', 'animate__zoomIn');
                    }
                    observer.unobserve(entry.target); 
                }
            },
            { threshold: 0.2 } 
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }
        if (resumeRef.current) {
            observer.observe(resumeRef.current);
        }
        if (linkedinRef.current) {
            observer.observe(linkedinRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
            if (descriptionRef.current) {
                observer.unobserve(descriptionRef.current);
            }
            if (resumeRef.current) {
                observer.unobserve(resumeRef.current);
            }
            if (linkedinRef.current) {
                observer.unobserve(linkedinRef.current);
            }
        };
    }, []);

    return (
        <div>
            <div className="container mx-auto lg:px-24">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <div className="mb-8" ref={imageRef}>
                        <img src={mamun} className="shadow-2xl shadow-red-400 rounded-full w-80 h-80" alt="Sohel Khan" />
                    </div>
                    <div className="space-y-2" ref={titleRef}>
                        <h1 className="text-4xl font-bold tracking-widest leading-6">
                            IT'S ME <span className="text-orange-500">MAMUN</span>
                        </h1>

                        <TypeAnimated />

                        <p className="text-[15px] font-medium tracking-wide leading-relaxed" ref={descriptionRef}>
                        Experienced digital marketer skilled in Google Ads, Facebook Ads, and SEO. Proficient in creating and optimizing paid campaigns to drive traffic and conversions. Adept at improving organic search rankings through strategic keyword research and on-page/off-page optimization.
                        </p>

                        <div className="flex justify-center gap-4 mt-4">
                            <a
                                href={googleDriveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 px-4 py-2 text-white text-[14px] rounded-md font-semibold tracking-widest flex justify-center items-center gap-2" ref={resumeRef}
                            >
                                My Resume <GrResume />
                            </a>

                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 px-4 py-2 text-white text-[14px] rounded-md font-semibold tracking-widest flex justify-center items-center gap-2" ref={linkedinRef}
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