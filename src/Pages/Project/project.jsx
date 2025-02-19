import React, { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import 'animate.css'; // Import Animate.css - VERY IMPORTANT

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
            image: 'https://i.ibb.co.com/MxjKWFrP/p3.png',
            name: 'Project 2',
            technologies: ['React', 'Tailwind CSS', 'Firebase'],
            liveLink: 'https://illustrious-chebakia-6d05d7.netlify.app/',
            githubLink: '/error',
        },
        {
            image: 'https://i.ibb.co.com/kVpCZr8G/p4.png',
            name: 'Project 2',
            technologies: ['React', 'Node.js', 'Express.Js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
            liveLink: 'https://stellar-gingersnap-601372.netlify.app/',
            githubLink: '/error',
        },
    ];

    const projectRefs = useRef([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;
                        if (projectRefs.current[index]) {
                            projectRefs.current[index].classList.add('animate__animated', 'animate__fadeInUp');
                        }
                        observer.unobserve(entry.target); // Optional: Stop observing after animation
                    }
                });
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );

         projectRefs.current = projectsData.map(() => null); // Initialize all refs to null

        projectsData.forEach((_, index) => {
            if (projectRefs.current[index]) {
                observer.observe(projectRefs.current[index]);
            }
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="py-16 shadow-md">
            <div className="container mx-auto px-4 lg:px-24">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                            ref={(el) => (projectRefs.current[index] = el)}
                            data-index={index}
                            onClick={() => openModal(project)}
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

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                        <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex flex-wrap mb-4">
                            {selectedProject.technologies.map((tech, techIndex) => (
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
                                href={selectedProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                            >
                                <FaExternalLinkAlt className="mr-2" /> Live
                            </a>
                            <a
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                            >
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project;