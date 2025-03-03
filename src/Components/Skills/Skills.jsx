import React, { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";







const Skills = () => {
  const skillsData = [
    { name: 'Google Adds', level: 70, icon: <FcGoogle className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'Facebook Adds', level: 70, icon: <FaFacebook className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'YouTube SEO', level: 80, icon: <FaYoutube  className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'YouTube Promotion', level: 70, icon: <FaYoutube  className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'YouTube Monetization', level: 60, icon: <FaYoutube   className="h-5 w-5 text-gray-600 mr-2" /> },
    { name: 'YouTube Monthly Management', level: 60, icon: <FaYoutube   className="h-5 w-5 text-gray-600 mr-2" /> },

    
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