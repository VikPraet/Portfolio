import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal'; // Assuming the modal is in the same folder

const projects = [
  {
    id: 1,
    title: 'SlipFights',
    description: 'Unity C#, May 2024',
    image: '/Projects_Images/SlipFights/SlipFights.png',
    featured: true,
    links: {
      itch: 'https://springmarch.itch.io/slip-fights',
    },
    content: [
      { type: 'title', value: 'ABOUT THE GAME' },
      { type: 'text', value: 'SlipFights is a couch-pvp arena shooter in which 4 outlaws duel it out in Cactus Town, the tallest town of the West. But it was hit by a snowstorm the night before! Surely they could figure out a way to not postpone their duel?' },
      { type: 'text', value: 'Slide around and try to shoot the outlaw on your contract. Completing a contract rewards you with increasing rewards!' },
      { type: 'text', value: "Beware not to go off the mountain, you won't survive such a fall!" },  
      
      { type: 'title', value: 'WHAT I DID' },
      { type: 'text', value: 'As the Gameplay/Technical Programmer, I collaborated with another programmer focused on gameplay and UI.' },
      { type: 'text', value: 'I implemented the majority of the contract system, managing player interactions and game objectives. Additionally, I worked on the interaction mechanics for obstacles like cacti when players hit them, as well as contributing to the design and functionality of various weapons to enhance the gameplay.' },
    
      { type: 'link', platform: 'itch' },

      { type: 'video', src: 'https://www.youtube.com/embed/LVsFR6He3k4?si=CXseVVUMV89NmQwF' },
      { type: 'image', src: '/Projects_Images/SlipFights/zNbbvw.png', size: 'large' },
      { type: 'image', src: '/Projects_Images/SlipFights/7NpTyb.png', size: 'medium' },
      { type: 'image', src: '/Projects_Images/SlipFights/9bMFOd.png', size: 'medium' },
      { type: 'image', src: '/Projects_Images/SlipFights/BCFT6q.png', size: 'large' },
      { type: 'image', src: '/Projects_Images/SlipFights/F4Y3qp.png', size: 'medium' },
      { type: 'image', src: '/Projects_Images/SlipFights/fs2Zhq.png', size: 'medium' },
      { type: 'image', src: '/Projects_Images/SlipFights/DvCkN9.png', size: 'large' },
      { type: 'image', src: '/Projects_Images/SlipFights/QHCx8U.png', size: 'medium' },
      { type: 'image', src: '/Projects_Images/SlipFights/JHddaT.png', size: 'medium' },
    ],
  },
  {
    id: 2,
    title: 'Galaga',
    description: 'C++, June 2023',
    image: '/Projects_Images/Galaga/galaga_cover.png',
    featured: true,
    links: {
      github: 'https://github.com/VikPraet/Prog4',
    },
    content: [
      { type: 'title', value: 'ABOUT THE GAME' },
      { type: 'text', value: 'This project is a simple remake of Galaga created using C++. Players control a spaceship positioned at the bottom of the screen, tasked with shooting down waves of enemies that descend from the top.' },

      { type: 'title', value: 'WHAT I DID' },
      { type: 'text', value: 'In this project, I implemented the core gameplay mechanics within my own simple 2D game engine. This included player controls for maneuvering the spaceship, shooting mechanics, and enemy behavior. I developed a component-based architecture that allows for flexible management of game objects, making it easy to create and modify enemy types. Additionally, I worked on the collision detection system to ensure accurate interactions between the player, projectiles, and enemies.' },

      { type: 'link', platform: 'github' },

      { type: 'image', src: '/Projects_Images/Galaga/Galaga1.gif', size: 'medium' },
      { type: 'image', src: '/Projects_Images/Galaga/Galaga2.gif', size: 'medium' },
      { type: 'image', src: '/Projects_Images/Galaga/Galaga3.gif', size: 'large' },
    ],
  },
  {
    id: 3,
    title: 'Featured Project 3',
    description: 'March 2023',
    image: 'https://via.placeholder.com/800x450',
    featured: true,
    content: [],
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
