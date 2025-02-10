import React, { useState, useEffect } from 'react';
import {  FaServer,  FaDatabase,FaReact, FaNodeJs, FaHtml5, FaCss3,FaFigma    } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { MdError } from "react-icons/md";





const Skills = () => {
  const skillsData = [
    { name: 'MongoDB', level: 70, icon: <FaDatabase className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Express.js', level: 70, icon: <FaServer className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'React', level: 80, icon: <FaReact  className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Node.js', level: 70, icon: <FaNodeJs  className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Next.Js', level: 60, icon: <RiNextjsFill   className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'TypeScript', level: 60, icon: <SiTypescript   className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'JavaScript', level: 80, icon: <IoLogoJavascript className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Problem Solving', level: 80, icon: <MdError className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Tailwind CSS', level: 95, icon: <RiTailwindCssFill className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'HTML', level: 95, icon: <FaHtml5  className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'CSS', level: 95, icon: <FaCss3  className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Fifma', level: 65, icon: <FaFigma   className="h-5 w-5 text-gray-600 mr-2" /> },
  ];

  const [skillLevels, setSkillLevels] = useState({});

  useEffect(() => {
    const timeouts = {};

    skillsData.forEach((skill, index) => {
      timeouts[skill.name] = setTimeout(() => {
        setSkillLevels((prevLevels) => ({
          ...prevLevels,
          [skill.name]: skill.level,
        }));
      }, 500 + index * 200); // Adjust delay values here
    });

    return () => {
      Object.values(timeouts).forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className=" rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{
                      width: `${skillLevels[skill.name] || 0}%`,
                      transition: 'width 0.5s ease-in-out', // Adjust duration and timing function here
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
                <p className="text-gray-600 text-sm text-center">{skillLevels[skill.name] || 0}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;