const tagColors = {
    // Game Engines - Yellow tones for cohesion
    Unity: 'bg-yellow-500 text-black',
    'Unreal 5': 'bg-yellow-400 text-black',
    'Custom Engine': 'bg-yellow-300 text-black',

    // Programming Languages - Purple tones
    'C++': 'bg-purple-600 text-white',
    'C#': 'bg-purple-500 text-white',

    // Graphics Libraries and Frameworks - Red and Orange tones
    OpenGL: 'bg-orange-500 text-white',
    SDL: 'bg-orange-600 text-white',
    Vulkan: 'bg-red-600 text-white',
    DX11: 'bg-red-500 text-white',

    // Tools and APIs - Updated Maya and Houdini colors
    Maya: 'bg-teal-400 text-black',
    Houdini: 'bg-pink-600 text-white',

    // Design and UI Tools - Blue for design tools
    Photoshop: 'bg-blue-600 text-white',

    // Miscellaneous categories
    Solo: 'bg-indigo-500 text-white',
    Team: 'bg-orange-300 text-black',
};

const Tag = ({ label }) => {
  const colorClass = tagColors[label] || 'bg-gray-200 text-gray-800'; // Fallback color
    return (
      <span className={`${colorClass} text-xs font-semibold px-3 py-1 rounded-md flex items-center`}>
        {label}
      </span>
    );
  };
  
  export default Tag;
  