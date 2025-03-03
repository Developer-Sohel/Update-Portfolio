import React, { useEffect, useRef } from 'react';
import bannar1 from '../../assets/images/bannar1.jpg'
import bannar2 from '../../assets/images/bannar2.jpg'
import bannar3 from '../../assets/images/bannar3.jpg'
import bannar4 from '../../assets/images/bannar4.jpg'
import bannar5 from '../../assets/images/bannar5.jpg'


import 'animate.css'; 

const Expertise = () => {
    const reactRef = useRef(null);
    const nodeRef = useRef(null);
    const mongoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (reactRef.current) {
                        reactRef.current.classList.add('animate__animated', 'animate__fadeInLeft');
                    }
                    if (nodeRef.current) {
                        nodeRef.current.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                    if (mongoRef.current) {
                        mongoRef.current.classList.add('animate__animated', 'animate__fadeInRight');
                    }
                    observer.unobserve(entry.target); // Optional: Stop observing after animation
                }
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );

        if (reactRef.current) {
            observer.observe(reactRef.current);
        }
        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }
        if (mongoRef.current) {
            observer.observe(mongoRef.current);
        }

        return () => {
            if (reactRef.current) {
                observer.unobserve(reactRef.current);
            }
            if (nodeRef.current) {
                observer.unobserve(nodeRef.current);
            }
            if (mongoRef.current) {
                observer.unobserve(mongoRef.current);
            }
        };
    }, []);

    return (
        <div className='container mx-auto lg:px-24 py-16'>
            <div className='items-center justify-center flex flex-col space-y-2 mb-8'>
                <h1 className='text-2xl font-bold text-orange-500 tracking-wider'>MY EXPERTISE</h1>
                <h2 className='text-4xl font-bold tracking-wider'>What I DO</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-3'>
               {/* serves-1 */}
                
                <div className='md:w-96 shadow-md rounded-md'>
                    <img src={bannar1} alt="" />
                    <p className='p-2'>Boost your YouTube video's visibility with targeted promotion strategies to increase views, engagement, and subscribers effectively.</p>
                </div>

               {/* serves-2 */}
                
                <div className='md:w-96 shadow-md rounded-md'>
                    <img src={bannar2} alt="" />
                    <p className='p-2'>Optimize YouTube SEO with keywords, engaging titles, descriptions, tags, and thumbnails to boost visibility, rankings, and organic traffic.</p>
                </div>

               {/* serves-3 */}
                
                <div className='md:w-96 shadow-md rounded-md'>
                    <img src={bannar3} alt="" />
                    <p className='p-2'>Create effective Facebook ads with targeted audiences, compelling visuals, and clear calls-to-action to drive engagement, conversions, and brand awareness.</p>
                </div>

               {/* serves-4 */}
                
                <div className='md:w-96 shadow-md rounded-md'>
                    <img src={bannar4} alt="" />
                    <p className='p-2'>
                    Earn revenue on YouTube through ads, memberships, Super Chat, and merchandise by meeting monetization requirements and creating engaging, advertiser-friendly content.
                    </p>
                </div>
               {/* serves-5 */}
                
                <div className='md:w-96 shadow-md rounded-md'>
                    <img src={bannar5} alt="" />
                    <p className='p-2'>
                    Maximize reach and conversions with Google Ads by targeting specific keywords, audiences, and locations for cost-effective, measurable, and impactful advertising campaigns.
                    </p>
                </div>

          

                
            </div>
        </div>
    );
};

export default Expertise;