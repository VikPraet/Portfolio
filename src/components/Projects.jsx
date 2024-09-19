// src/components/ProjectsSection.jsx
import React from 'react';
import useOnScreen from '../hooks/UseOnScreen'; // Import the custom hook

const projects = [
  {
    id: 1,
    title: 'Featured Project 1',
    description: 'January 2023',
    image: 'https://via.placeholder.com/800x450', // Placeholder image for 16:9 aspect ratio
    featured: true,
  },
  {
    id: 2,
    title: 'Featured Project 2',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
  },
  {
    id: 3,
    title: 'Featured Project 3',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
  },
  {
    id: 4,
    title: 'Featured Project 4',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
  },
  {
    id: 5,
    title: 'Small Project 1',
    description: 'June 2022',
    image: 'https://via.placeholder.com/800x450',
    featured: false,
  },
  {
    id: 6,
    title: 'Small Project 2',
    description: 'July 2022',
    image: 'https://via.placeholder.com/800x450',
    featured: false,
  },
  {
    id: 7,
    title: 'Small Project 3',
    description: 'July 2022',
    image: 'https://via.placeholder.com/800x450',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-left mb-10">Projects</h2>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-n-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 relative" // Added hover:translate-y
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out hover:scale-110" // Image scaling
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-n-6 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
