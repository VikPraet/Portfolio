import React from 'react';

// Example additional content with featured boolean
const additionalContent = [
  {
    category: '3D Models',
    items: [
      {
        id: 1,
        title: 'Model 1',
        description: 'A 3D model created in Blender.',
        image: 'https://via.placeholder.com/800x450',
        featured: true,
      },
      {
        id: 2,
        title: 'Model 2',
        description: 'Low-poly game asset.',
        image: 'https://via.placeholder.com/800x450',
        featured: true,
      },
    ],
  },
  {
    category: 'Game Jams',
    items: [
      {
        id: 3,
        title: 'Game Jam Project 1',
        description: 'Ludum Dare entry from 2023.',
        image: 'https://via.placeholder.com/800x450',
        featured: true,
      },
      {
        id: 4,
        title: 'Game Jam Project 2',
        description: 'Global Game Jam entry.',
        image: 'https://via.placeholder.com/800x450',
        featured: true,
      },
    ],
  },
  {
    category: 'Other Designs',
    items: [
      {
        id: 5,
        title: 'Graphic Design 1',
        description: 'Poster design for an event.',
        image: 'https://via.placeholder.com/800x450',
        featured: false,
      },
      {
        id: 6,
        title: 'Graphic Design 2',
        description: 'Logo design for a startup.',
        image: 'https://via.placeholder.com/800x450',
        featured: false,
      },
      {
        id: 7,
        title: 'Graphic Design 3',
        description: 'Logo design for a startup.',
        image: 'https://via.placeholder.com/800x450',
        featured: false,
      },
    ],
  },
];

const AdditionalSection = () => {
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
                  <div key={item.id} className="border-container">
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
                  <div key={item.id} className="border-container">
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
      </div>
    </section>
  );
};

export default AdditionalSection;
