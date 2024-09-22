import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal'; // Assuming the modal is in the same folder

const projects = [
  {
    id: 1,
    title: 'Featured Project 1',
    description: 'January 2023',
    image: '/Projects_Images/Mars_Base_Environment/beautyShot_1.jpg',
    featured: true,
    content: [
      { type: 'image', src: 'https://via.placeholder.com/800x450', size: 'small' },
      { type: 'image', src: 'https://via.placeholder.com/800x450', size: 'small' },
      { type: 'image', src: '/Apple_Calendar.png', size: 'small' },
      { type: 'image', src: 'https://via.placeholder.com/800x450', size: 'medium' },
      { type: 'image', src: 'https://via.placeholder.com/800x450', size: 'medium' },
      { type: 'text', value: 'This is an in-depth explanation of the project...' },
      { type: 'image', src: '/Projects_Images/Mars_Base_Environment/beautyShot_1.jpg', size: 'large' },
      { type: 'code', value: 'console.log("Hello World");' },
    ],
  },
  {
    id: 2,
    title: 'Featured Project 2',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
    content: [
      { type: 'image', src: './src/assets/beautyShot_1.jpg', size: 'large' },
      { type: 'sketchfab', src: 'https://sketchfab.com/models/dff30c20efa14f29bf01899ebe45717a/embed?ui_theme=dark' }, // Replace with your Sketchfab model URL
      { type: 'text', value: 'Watch this project demo video and learn more...' },
    ],
  },
  {
    id: 3,
    title: 'Featured Project 3',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
    content: [
      { type: 'text', value: 'This function calculates the factorial of a number recursively.' },
      { 
        type: 'code', 
        value: `function calculateFactorial(n) {
  // Check if the number is less than 0
  if (n < 0) {
    return 'Factorial is not defined for negative numbers';
  }

  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case: n! = n * (n - 1)!
  return n * calculateFactorial(n - 1);
}

// Example usage:
const number = 5;
console.log('Factorial of', number, 'is', calculateFactorial(number));
`    },
    ],
  },
  {
    id: 4,
    title: 'Featured Project 4',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
    content: [],
  },
  {
    id: 5,
    title: 'Small Project 1',
    description: 'June 2022',
    image: 'https://via.placeholder.com/800x450',
    featured: false,
    content: [],
  },
  {
    id: 6,
    title: 'Small Project 2',
    description: 'July 2022',
    image: 'https://via.placeholder.com/800x450',
    featured: false,
    content: [],
  },
  {
    id: 7,
    title: 'Small Project 3',
    description: 'July 2022',
    image: 'https://via.placeholder.com/800x450',
    featured: false,
    content: [],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-5 px-4 sm:px-6 lg:px-8 z-1">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-left mb-10">PROJECTS</h2>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="border-container cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative bg-n-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
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
                className="border-container cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative bg-n-6 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default ProjectsSection;
