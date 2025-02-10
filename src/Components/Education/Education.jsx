import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Business Administration',
      university: 'Bangladesh National university',
      dates: '2020 - Present',
      description: 'I am a third-year BBA student, immersed in the world of business principles and practices.  I am exploring various aspects of management, from marketing and finance to operations and strategy, building a strong foundation for my future career.  I am eager to apply my growing knowledge and skills to real-world business challenges.',
    },
    {
      degree: 'Higher Secondary Certificate',
      university: 'Ulipur MS School & Collage',
      dates: '2018 - 2020',
      description: 'I completed my Higher Secondary Certificate (HSC) examinations in 2020.  This milestone marked the end of my secondary education and prepared me for further studies.  I am now pursuing my higher education goals, building upon the foundation I gained during my HSC years.',
    },
    {
      degree: 'Secondary School Certificate',
      university: 'Life Care School & Collage',
      dates: '2017 - 2018',
      description: 'I successfully completed my Secondary School Certificate (SSC) examinations in 2018.  This achievement marked a significant step in my academic journey and provided a solid base for my higher secondary studies.  I am now building upon this foundation as I pursue my further education and career goals.',
    },
    {
      degree: 'Mern-Stack Web Developar',
      university: 'Programming hero',
      dates: '2024-Present',
      description: 'I have completed a comprehensive MERN stack web development program with Programming Hero.  This intensive training has equipped me with the skills to build full-stack web applications using MongoDB, Express.js, React, and Node.js.  I am now eager to apply my newly acquired expertise to real-world projects and contribute to innovative development teams.',
    },
    // Add more education entries as needed
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="shadow-xl rounded-md  p-2 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
              <div className="pl-6">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <p className="text-orange-600 font-medium text-lg">{edu.university}</p>
                {/* <p className="text-gray-600 text-sm mt-1">{edu.dates}</p> */}
                <button  className="text-white text-sm mt-1 bg-amber-500 p-1 font-bold ">{edu.dates}</button>
                {edu.description && (
                  <p className=" mt-2">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;