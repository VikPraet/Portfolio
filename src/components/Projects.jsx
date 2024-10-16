import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import Tag from './Tag'; // Import the Tag component

const projects = [
  {
    id: 1,
    title: 'Halo Zero',
    description: 'C++, June 2023',
    image: `/Projects_Images/Halo-Zero/Halo-Zero-cover.jpg`,
    featured: true,
    links: {
      github: 'https://github.com/VikPraet/Halo-Zero',
    },
    tags: ['Solo', 'C++', 'OpenGL', 'SDL'],
    content: [
      { type: 'title', value: 'ABOUT THE GAME' },
      { type: 'text', value: 'Halo Zero is a fan-made game set in the Halo universe. It features 2D gameplay where players control Master Chief, navigating levels and engaging in combat against Covenant forces. The game aims to replicate the feel of classic Halo titles while incorporating its own elements.' },

      { type: 'title', value: 'WHAT I DID' },
      { type: 'text', value: "I recreated the first level of Halo Zero, focusing on implementing core gameplay mechanics such as player controls, weapon systems, and enemy behaviors. I utilized a custom framework built with OpenGL and SDL to replicate the feel of the original while ensuring smooth movement and responsive actions." },

      { type: 'link', platform: 'github' },

      { type: 'video', src: `https://www.youtube.com/embed/27FqmTRkNkw?si=B2Yyrr1eIREgZSyw` },

      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-1.jpg`, size: 'small' },
      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-2.jpg`, size: 'small' },
      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-3.jpg`, size: 'small' },

      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-7.jpg`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-6.jpg`, size: 'medium' },

      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-10.jpg`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/Halo-Zero/Halo-Zero-12.jpg`, size: 'medium' },
    ],
  },
  {
    id: 2,
    title: 'Galaga',
    description: 'C++, June 2024',
    image: `/Projects_Images/Galaga/galaga_cover.png`,
    featured: true,
    links: {
      github: 'https://github.com/VikPraet/Prog4',
    },
    tags: ['Solo', 'C++', 'Custom Engine'],
    content: [
      { type: 'title', value: 'ABOUT THE GAME' },
      { type: 'text', value: 'This project is a simple remake of Galaga created using C++. Players control a spaceship positioned at the bottom of the screen, tasked with shooting down waves of enemies that descend from the top.' },

      { type: 'title', value: 'WHAT I DID' },
      { type: 'text', value: 'In this project, I implemented the core gameplay mechanics within my own simple 2D game engine. This included player controls for maneuvering the spaceship, shooting mechanics, and enemy behavior. I developed a component-based architecture that allows for flexible management of game objects, making it easy to create and modify enemy types. Additionally, I worked on the collision detection system to ensure accurate interactions between the player, projectiles, and enemies.' },

      { type: 'link', platform: 'github' },

      { type: 'image', src: `/Projects_Images/Galaga/Galaga1.gif`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/Galaga/Galaga2.gif`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/Galaga/Galaga3.gif`, size: 'large' },
    ],
  },
  {
    id: 3,
    title: 'Instanced Rendering',
    description: 'Vulkan C++, June 2024',
    image: `/Projects_Images/Vulkan/Vulkan-cover.png`,
    featured: true,
    links: {
      github: 'https://github.com/VikPraet/GP2',
    },
    tags: ['Solo', 'C++', 'Vulkan'],
    content: [
      { type: 'title', value: 'ABOUT' },
      { type: 'text', value: "In this project, I implemented instanced rendering using the Vulkan API, following the official Vulkan Tutorial provided by the Khronos Group. The focus was on optimizing the rendering of multiple objects with similar geometry, which led to improved performance and reduced CPU overhead. Key techniques included instance buffer creation and attribute management, demonstrating Vulkan's capabilities in handling complex rendering tasks. Here are the results." },

      { type: 'link', platform: 'github' },

      { type: 'video', src: `https://www.youtube.com/embed/jXWsziNZcIY?si=KknHBw_XjIuAw-Ol` },

      { type: 'gifVideo', src: `/Projects_Images/Vulkan/Vulkan-Video-1.mp4` },
      { type: 'gifVideo', src: `/Projects_Images/Vulkan/Vulkan-Video-2.mp4` },
      { type: 'image', src: `/Projects_Images/Vulkan/Vulkan-1.png`, size: 'large' },

    ],
  },
  {
    id: 4,
    title: 'SlipFights',
    description: 'Unity C#, May 2024',
    image: `/Projects_Images/SlipFights/SlipFights.png`,
    featured: true,
    links: {
      itch: 'https://springmarch.itch.io/slip-fights',
    },
    tags: ['Team', 'Unity', 'C#'],
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
      { type: 'image', src: `/Projects_Images/SlipFights/zNbbvw.png`, size: 'large' },
      { type: 'image', src: `/Projects_Images/SlipFights/7NpTyb.png`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/SlipFights/9bMFOd.png`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/SlipFights/BCFT6q.png`, size: 'large' },
      { type: 'image', src: `/Projects_Images/SlipFights/F4Y3qp.png`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/SlipFights/fs2Zhq.png`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/SlipFights/DvCkN9.png`, size: 'large' },
      { type: 'image', src: `/Projects_Images/SlipFights/QHCx8U.png`, size: 'medium' },
      { type: 'image', src: `/Projects_Images/SlipFights/JHddaT.png`, size: 'medium' },
    ],
  },
  {
    id: 5,
    title: 'DirectX 11',
    description: 'DX11 C++, January 2024',
    image: `/Projects_Images/DX11/DX11-cover.png`,
    featured: false,
    links: {
      github: 'https://github.com/VikPraet/DirectX',
    },
    tags: ['Solo', 'C++', 'DX11'],
    content: [
      { type: 'title', value: 'ABOUT' },
      { type: 'text', value: "In this project, I developed a rendering system using the DirectX 11 API, focusing on key material properties. I implemented diffuse textures for base coloring, specular mapping to simulate shiny surfaces, and normal mapping to add detailed surface texture. Additionally, I used alpha testing to manage opacity, ensuring proper rendering of textures with transparent or cutout areas." },

      { type: 'link', platform: 'github' },
      
      { type: 'gifVideo', src: `/Projects_Images/DX11/DX11-video-1.mp4` },      
      { type: 'image', src: `/Projects_Images/DX11/DX11-cover.png`, size: 'large' },
      { type: 'image', src: `/Projects_Images/DX11/DX11-1.png`, size: 'large' },
    ],
  },
  {
    id: 6,
    title: 'Software Raytracer',
    description: 'C++, November 2023',
    image: `/Projects_Images/SoftwareRaytracer/SoftwareRaytracer-cover.png`,
    featured: false,
    links: {
      github: 'https://github.com/VikPraet/Ray-Tracer',
    },
    tags: ['Solo', 'C++'],
    content: [
      { type: 'title', value: 'ABOUT' },
      { type: 'text', value: "In this project, I developed a basic software raytracer that runs entirely on the CPU, without relying on any graphics APIs. It renders a simple 3D scene, with support for OBJ file loading to include more complex geometry beyond spheres and planes. Although the raytracer runs at non-playable frame rates—expected for a CPU-only implementation—I used multithreading to improve performance by distributing tasks across multiple cores." },

      { type: 'link', platform: 'github' },

      { type: 'image', src: `/Projects_Images/SoftwareRaytracer/Raytracer_REFERENCE.png`, size: 'large' },
      { type: 'image', src: `/Projects_Images/SoftwareRaytracer/Raytracer_BUNNY.png`, size: 'large' },
      { type: 'image', src: `/Projects_Images/SoftwareRaytracer/Raytracer_EXTRA.png`, size: 'large' },
    ],
  },
  {
    id: 7,
    title: 'Trajectory Prediction',
    description: 'Unity C#, January 2024',
    image: `/Projects_Images/trajectory_prediction/projectile_trajectory_image.png`,
    featured: false,
    tags: ['Solo', 'Unity', 'C#'],
    content: [
      { type: 'title', value: 'INTRODUCTION' },
      { type: 'text', value: 'This Unity-based project focuses on simulating and predicting the trajectory of a ball projectile. It combines physics principles with interactive elements, allowing for a dynamic visualization of how different factors, such as bounciness and projectile properties, influence motion.' },
      { type: 'image', src: `/Projects_Images/trajectory_prediction/projectile_trajectory_image.png`, size: 'large' },


      { type: 'title', value: 'DESCRITION OF THE TOPIC' },
      { type: 'subtitle', value: 'Theory Overview' },
      { type: 'text', value: 'Trajectory prediction involves calculating the path of a projectile influenced by forces such as gravity and its interactions with surfaces. This Unity-based simulation enables an interactive exploration of these principles, emphasizing the impact of variables like bounciness and mass on projectile motion.' },

      { type: 'title', value: 'DESIGN / IMPLEMENTATION' },
      { type: 'subtitle', value: 'Technology Stack' },
      { type: 'text', value: '- Unity' },
      { type: 'text', value: '- C# scripting' },
      { type: 'subtitle', value: 'Core Algorithms' },
      { type: 'text', value: 'The key to trajectory prediction in this project lies within the PhysicsBall script, which embodies the core physics formulas and functions:' },
      { type: 'text', value: "1. PhysicsBall Script: This script is the heart of trajectory prediction, containing the algorithms that calculate and simulate the projectile's path based on initial launch parameters like velocity, angle, and mass. It factors in physical laws to predict the projectile's motion through space and time." },
      { type: 'text', value: "2. Cannon Script: This script manages the user's input for setting the initial conditions of the projectile (e.g., launch velocity, angle). It interacts with the PhysicsBall script to initiate the motion based on these inputs." },
      { type: 'text', value: "3. Wall Script: While not directly involved in trajectory prediction, this script influences the projectile's path post-collision by adjusting bounciness, which affects how the projectile rebounds off surfaces." },

      { type: 'subtitle', value: 'Code Snippets' },
      { type: 'text', value: 'predicting the position' },
      { type: 'code',
        language: 'csharp',
        value:
`Vector3 simulatedAcceleration = new Vector3(0, _gravity, 0);
simulatedVelocity += simulatedAcceleration * Time.deltaTime;
simulatedPosition += simulatedVelocity * Time.deltaTime;` 
      },
      { type: 'text', value: 'handeling collisions' },
      {
        type: 'code',
        language: 'csharp',
        value: 
`Plane colliderPlane = new Plane(plane.up, plane.position);
float distance = colliderPlane.GetDistanceToPoint(position);
if (Mathf.Abs(distance) <= _radius)
{
    float bounciness = plane.GetComponent<Wall>()?.bounciness ?? 0.5f;
    Vector3 collisionNormal = colliderPlane.normal;
    velocity = Vector3.Reflect(velocity, collisionNormal);
    float energyLossFactor = bounciness - 0.05f * _mass;
    velocity *= energyLossFactor;
    float penetrationDepth = _radius - Mathf.Abs(distance);
    if (penetrationDepth > 0)
    {
        position += collisionNormal * penetrationDepth;
    }
}`
      },      

      { type: 'subtitle', value: 'Challenges & Solutions' },
      { type: 'text', value: "Implementing accurate trajectory prediction was challenging within Unity's default physics engine. The solution was to create custom physics within the PhysicsBall script, allowing for precise control over the trajectory calculations and a more accurate simulation." },
      
      { type: 'title', value: 'RESULT' },
      { type: 'text', value: 'The project effectively simulates and predicts projectile trajectories, demonstrating the impact of varying parameters. The custom physics implementation enhances the accuracy of the simulation.' },
      { type: 'image', src: `/Projects_Images/trajectory_prediction/projectile_trajectory_2.gif`, size: 'large' },

      { type: 'title', value: 'Conclusion / Future Work' },
      { type: 'text', value: 'This project demonstrates a practical application of custom physics calculations within Unity for trajectory prediction. The implementation of the PhysicsBall script, particularly the UpdateTrajectoryLine and PredictiveCollisionResponse methods, showcases how physics concepts can be translated into a digital simulation. While the approach is straightforward, it effectively models the trajectory of projectiles and their interactions with surfaces, considering factors like bounciness and mass. Future developments could refine the physics model for greater accuracy or expand the simulation to include more complex scenarios.' },
      { type: 'image', src: `/Projects_Images/trajectory_prediction/projectile_trajectory_1.gif`, size: 'large' },
    ],
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
                className="border-container cursor-pointer relative group"
                onClick={() => openModal(project)}
              >
                <div className="relative bg-n-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    {/* Tags Section Positioned Absolutely - Slide Up on Hover */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="absolute bottom-0 left-0 w-full p-3 flex flex-wrap gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        {project.tags.map((tag, index) => (
                          <Tag key={index} label={tag} />
                        ))}
                      </div>
                    )}
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
                className="border-container cursor-pointer relative group"
                onClick={() => openModal(project)}
              >
                <div className="relative bg-n-6 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    {/* Tags Section Positioned Absolutely - Slide Up on Hover */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="absolute bottom-0 left-0 w-full p-3 flex flex-wrap gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        {project.tags.map((tag, index) => (
                          <Tag key={index} label={tag} />
                        ))}
                      </div>
                    )}
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