import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Font Awesome আইকন ইমপোর্ট করুন

const Project = () => {
  const projectsData = [
    {
      image: 'https://i.ibb.co.com/ch7gsyvP/project1.png',
      name: 'Project 1',
      technologies: ['React', 'Node.js', 'Express.Js', 'MongoDB', 'Firebase', 'Tailwind'],
      liveLink: '/error',
      githubLink: '/error',
    },
    {
      image: 'https://i.ibb.co.com/MxjKWFrP/p3.png', // **REPLACE WITH ACTUAL PATH**
      name: 'Project 2',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://illustrious-chebakia-6d05d7.netlify.app/',
      githubLink: '/error',
    },
    {
      image: 'https://i.ibb.co.com/kVpCZr8G/p4.png', // **REPLACE WITH ACTUAL PATH**
      name: 'Project 2',
      technologies: ['React', 'Node.js', 'Express.Js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://stellar-gingersnap-601372.netlify.app/',
      githubLink: '/error',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[450px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500 text-white rounded-md px-2 py-1 mr-2 mb-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;