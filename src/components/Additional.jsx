import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Assuming the modal is shared

// Example additional content with featured boolean
const additionalContent = [
  {
    category: 'ART & DESIGN',
    items: [
      {
        id: 1,
        title: 'Mars Base Environment',
        description: 'Unreal Engine 5, January 2024',
        image: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_1.jpg`,
        featured: true,
        content: [
          { type: 'text', value: 'This project showcases a Mars base environment I modeled entirely from scratch.' },
          { type: 'video', src: 'https://www.youtube.com/embed/nUrmIj7-CY8?si=EiGpmRZqsrM6hYMb' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_1.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_1_detail_lighting.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_1_lighting_only.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_2.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_2_detail_lighting.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_2_lighting_only.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_3.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_3_detail_lighting.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_3_lighting_only.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_4.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_4_detail_lighting.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/beautyShot_4_lighting_only.jpg`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/My_Meshes.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Mars_Base_Environment/My_Textures.jpg`, size: 'large' },
        ],
      },
      {
        id: 2,
        title: 'Diorama by the Ocean',
        description: 'Maya, June 2023',
        image: `${import.meta.env.BASE_URL}Projects_Images/Diorama_by_the_Ocean/1GD12E_Praet_Vik_BeautyShot_00.png`,
        featured: true,
        content: [
          { type: 'text', value: 'This diorama is inspired by a house in Miami, Florida, and modeled from scratch.' },
          { type: 'sketchfab', src: 'https://sketchfab.com/models/dff30c20efa14f29bf01899ebe45717a/embed?ui_theme=dark' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Diorama_by_the_Ocean/1GD12E_Praet_Vik_BeautyShot_00.png`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Diorama_by_the_Ocean/1GD12E_Praet_Vik_BeautyShot_01.png`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Diorama_by_the_Ocean/1GD12E_Praet_Vik_BeautyShot_02.png`, size: 'large' },
        ],
      },
      {
        id: 2,
        title: '2D Art',
        description: 'Photoshop, January 2023',
        image: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/04_Characters.jpg`,
        featured: true,
        content: [
          { type: 'text', value: 'A selection of various 2D graphics and game art pieces.' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/01.Styleguide.png`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/02.Assets.png`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/03.ColourVariaton.png`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/04.Example_01.png`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/04.Example_02.png`, size: 'medium' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/04.Example_03.png`, size: 'medium' },
          { type: 'video', src: 'https://www.youtube.com/embed/ZkCbpyv0iR8?si=NbzekaLs2qA1u5fA' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/02_Styleguide.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/04_Characters.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/05_Startscreen.jpg`, size: 'large' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/2D_Art/06_Endscreen.jpg`, size: 'large' },
        ],
      },
      {
        id: 2,
        title: 'Procedural Bridges',
        description: 'Houdini, August 2023',
        image: `${import.meta.env.BASE_URL}Projects_Images/Procedural_Bridges/bridge_render.jpg`,
        featured: true,
        content: [
          { type: 'text', value: 'This project showcases a tool I created in Houdini to generate bridges procedurally.' },
          { type: 'image', src: `${import.meta.env.BASE_URL}Projects_Images/Procedural_Bridges/bridge_render.jpg`, size: 'large' },
          { type: 'video', src: 'https://www.youtube.com/embed/h06odCrmQUA?si=X4o4st9HXY0RZeV9' },
        ],
      },
    ],
  },
];

const AdditionalSection = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State for modal

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="additional" className="py-5 px-4 sm:px-6 lg:px-8 z-1">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-left mb-10">ADDITIONAL</h2>

        {additionalContent.map((category) => (
          <div key={category.category} className="mb-10">
            {/* Smaller Category Title */}
            <h3 className="text-2xl font-semibold text-left mb-6">{category.category}</h3>

            {/* Featured Projects in this category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {category.items
                .filter((item) => item.featured)
                .map((item) => (
                  <div key={item.id} className="border-container" onClick={() => openModal(item)}>
                    {/* Larger card for featured items */}
                    <div className="relative bg-n-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 group">
                      <div className="relative overflow-hidden">
                        {/* Image scales when the card is hovered */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Non-Featured (smaller) Projects in this category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items
                .filter((item) => !item.featured)
                .map((item) => (
                  <div key={item.id} className="border-container" onClick={() => openModal(item)}>
                    {/* Smaller card for non-featured items */}
                    <div className="relative bg-n-6 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 group">
                      <div className="relative overflow-hidden">
                        {/* Image scales when the card is hovered */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto aspect-video object-cover transform transition-transform duration-300 ease-out group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Modal component */}
        {selectedItem && <ProjectModal project={selectedItem} onClose={closeModal} />}
      </div>
    </section>
  );
};

export default AdditionalSection;
