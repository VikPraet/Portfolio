import React, { useEffect } from 'react';


// Data for the Software categories and Other Skills
const softwareSkills = [
  {
    category: 'Game Engines',
    skills: ['Unreal Engine 5', 'Unity 5'],
    icon: (
      <svg className="w-8 h-8 mr-2 text-color-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="currentColor">
        <path d="M 7.3904 46.8061 C 10.0478 46.8061 11.8711 45.8363 13.5005 43.8190 L 17.0114 39.5709 C 17.5158 38.9696 18.0977 38.6787 18.6796 38.6787 L 37.3206 38.6787 C 37.9022 38.6787 38.4842 38.9696 38.9692 39.5709 L 42.4802 43.8190 C 44.1288 45.8363 45.9327 46.8061 48.6098 46.8061 C 53.0321 46.8061 56 43.8577 56 39.3188 C 56 37.3790 55.5344 35.1484 54.7975 32.6461 C 53.6141 28.6697 51.5388 23.2578 49.5406 19.0680 C 47.8920 15.5765 47.0383 13.9859 42.9263 13.0548 C 39.2600 12.2208 34.1974 11.6582 27.9903 11.6582 C 21.7832 11.6582 16.7205 12.2208 13.0738 13.0548 C 8.9615 13.9859 8.1081 15.5765 6.4399 19.0680 C 4.4614 23.2578 2.3859 28.6697 1.2026 32.6461 C .4461 35.1484 0 37.3790 0 39.3188 C 0 43.8577 2.9484 46.8061 7.3904 46.8061 Z M 12.2979 25.3333 C 12.2979 24.3635 12.8798 23.7621 13.9079 23.7621 L 17.3800 23.7621 L 17.3800 20.3676 C 17.3800 19.3783 17.9619 18.7771 18.9318 18.7771 C 19.8823 18.7771 20.4448 19.3783 20.4448 20.3676 L 20.4448 23.7621 L 23.7423 23.7621 C 24.8285 23.7621 25.4687 24.3635 25.4687 25.3333 C 25.4687 26.3420 24.8285 26.9627 23.7423 26.9627 L 20.4448 26.9627 L 20.4448 30.3572 C 20.4448 31.3465 19.8823 31.9672 18.9318 31.9672 C 17.9619 31.9672 17.3800 31.3465 17.3800 30.3572 L 17.3800 26.9627 L 13.9079 26.9627 C 12.8798 26.9627 12.2979 26.3420 12.2979 25.3333 Z M 37.0683 22.3074 C 37.0683 20.7168 38.3098 19.4947 39.8614 19.4947 C 41.4326 19.4947 42.6546 20.7168 42.6546 22.3074 C 42.6546 23.8785 41.4326 25.0812 39.8614 25.0812 C 38.3098 25.0812 37.0683 23.8785 37.0683 22.3074 Z M 31.3654 28.0489 C 31.3654 26.4584 32.5875 25.2363 34.1587 25.2363 C 35.7298 25.2363 36.9325 26.4584 36.9325 28.0489 C 36.9325 29.6201 35.7298 30.8422 34.1587 30.8422 C 32.5875 30.8422 31.3654 29.6201 31.3654 28.0489 Z"></path>
      </svg>
    ),
  },
  {
    category: 'Source Control',
    skills: ['GitHub', 'Perforce'],
    icon: (
      <svg className="w-8 h-8 mr-2 text-color-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
        <path d="M 439.55 236.05 L 244 40.45 a 28.87 28.87 0 0 0 -40.81 0 l -40.66 40.63 l 51.52 51.52 c 27.06 -9.14 52.68 16.77 43.39 43.68 l 49.66 49.66 c 34.23 -11.8 61.18 31 35.47 56.69 c -26.49 26.49 -70.21 -2.87 -56 -37.34 L 240.22 199 v 121.85 c 25.3 12.54 22.26 41.85 9.08 55 a 34.34 34.34 0 0 1 -48.55 0 c -17.57 -17.6 -11.07 -46.91 11.25 -56 v -123 c -20.8 -8.51 -24.6 -30.74 -18.64 -45 L 142.57 101 L 8.45 235.14 a 28.86 28.86 0 0 0 0 40.81 l 195.61 195.6 a 28.86 28.86 0 0 0 40.8 0 l 194.69 -194.69 a 28.86 28.86 0 0 0 0 -40.81 Z"></path>
      </svg>
    ),
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['GLM', 'SDL', 'Vulkan', 'DirectX11', 'Dear ImGui', 'WPF', 'React', 'Tailwind CSS'],
    icon: (
      <svg className="w-8 h-8 mr-2 text-color-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
        <path d="M 239.1 6.3 l -208 78 c -18.7 7 -31.1 25 -31.1 45 v 225.1 c 0 18.2 10.3 34.8 26.5 42.9 l 208 104 c 13.5 6.8 29.4 6.8 42.9 0 l 208 -104 c 16.3 -8.1 26.5 -24.8 26.5 -42.9 V 129.3 c 0 -20 -12.4 -37.9 -31.1 -44.9 l -208 -78 C 262 2.2 250 2.2 239.1 6.3 Z M 256 68.4 l 192 72 v 1.1 l -192 78 l -192 -78 v -1.1 l 192 -72 Z m 32 356 V 275.5 l 160 -65 v 133.9 l -160 80 Z"></path>
      </svg>
    ),
  },
  {
    category: 'Tools',
    skills: ['Maya', 'Figma', 'Photoshop', 'RenderDoc', 'Houdini', 'Substance Painter', 'Premiere Pro'],
    icon: (
      <svg className="w-8 h-8 mr-2 text-color-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
        <path d="M 501.1 395.7 L 384 278.6 c -23.1 -23.1 -57.6 -27.6 -85.4 -13.9 L 192 158.1 V 96 L 64 0 L 0 64 l 96 128 h 62.1 l 106.6 106.6 c -13.6 27.8 -9.2 62.3 13.9 85.4 l 117.1 117.1 c 14.6 14.6 38.2 14.6 52.7 0 l 52.7 -52.7 c 14.5 -14.6 14.5 -38.2 0 -52.7 Z M 331.7 225 c 28.3 0 54.9 11 74.9 31 l 19.4 19.4 c 15.8 -6.9 30.8 -16.5 43.8 -29.5 c 37.1 -37.1 49.7 -89.3 37.9 -136.7 c -2.2 -9 -13.5 -12.1 -20.1 -5.5 l -74.4 74.4 l -67.9 -11.3 L 334 98.9 l 74.4 -74.4 c 6.6 -6.6 3.4 -17.9 -5.7 -20.2 c -47.4 -11.7 -99.6 0.9 -136.6 37.9 c -28.5 28.5 -41.9 66.1 -41.2 103.6 l 82.1 82.1 c 8.1 -1.9 16.5 -2.9 24.7 -2.9 Z m -103.9 82 l -56.7 -56.7 L 18.7 402.8 c -25 25 -25 65.5 0 90.5 s 65.5 25 90.5 0 l 123.6 -123.6 c -7.6 -19.9 -9.9 -41.6 -5 -62.7 Z M 64 472 c -13.2 0 -24 -10.8 -24 -24 c 0 -13.3 10.7 -24 24 -24 s 24 10.7 24 24 c 0 13.2 -10.7 24 -24 24 Z"></path>
      </svg>
    ),
  },
  {
    category: 'IDEs',
    skills: ['Visual Studio', 'Visual Studio Code', 'JetBrains Rider', 'Qt Creator'],
    icon: (
      <svg className="w-8 h-8 mr-2 text-color-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
        <path d="M 255.03 261.65 c 6.25 6.25 16.38 6.25 22.63 0 l 11.31 -11.31 c 6.25 -6.25 6.25 -16.38 0 -22.63 L 253.25 192 l 35.71 -35.72 c 6.25 -6.25 6.25 -16.38 0 -22.63 l -11.31 -11.31 c -6.25 -6.25 -16.38 -6.25 -22.63 0 l -58.34 58.34 c -6.25 6.25 -6.25 16.38 0 22.63 l 58.35 58.34 Z m 96.01 -11.3 l 11.31 11.31 c 6.25 6.25 16.38 6.25 22.63 0 l 58.34 -58.34 c 6.25 -6.25 6.25 -16.38 0 -22.63 l -58.34 -58.34 c -6.25 -6.25 -16.38 -6.25 -22.63 0 l -11.31 11.31 c -6.25 6.25 -6.25 16.38 0 22.63 L 386.75 192 l -35.71 35.72 c -6.25 6.25 -6.25 16.38 0 22.63 Z M 624 416 H 381.54 c -0.74 19.81 -14.71 32 -32.74 32 H 288 c -18.69 0 -33.02 -17.47 -32.77 -32 H 16 c -8.8 0 -16 7.2 -16 16 v 16 c 0 35.2 28.8 64 64 64 h 512 c 35.2 0 64 -28.8 64 -64 v -16 c 0 -8.8 -7.2 -16 -16 -16 Z M 576 48 c 0 -26.4 -21.6 -48 -48 -48 H 112 C 85.6 0 64 21.6 64 48 v 336 h 512 V 48 Z m -64 272 H 128 V 64 h 384 v 256 Z"></path>
      </svg>
    ),
  },
];

const otherSkillsCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', familiarity: 'high' },   // Use familiarity to distinguish between well-known and less familiar skills
      { name: 'C#', familiarity: 'high' },
      { name: 'Python', familiarity: 'medium' },
      { name: 'JavaScript', familiarity: 'medium' },
      { name: 'HTML', familiarity: 'medium' },
      { name: 'CSS', familiarity: 'medium' },
    ],
  },
  {
    category: 'Spoken Languages',
    skills: ['Dutch - Native', 'English - Fluent'],
  },
];

const SkillsSection = () => {
  useEffect(() => {
    const updateCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--y', y);
      console.log(`Cursor Position: ${x}, ${y}`);
    };
  
    document.body.addEventListener('pointermove', updateCursor);
  
    return () => {
      document.body.removeEventListener('pointermove', updateCursor);
    };
  }, []);
  
  return (
    <section id="skills" className="pb-16 px-4 sm:px-6 lg:px-8 bg-n-8 text-white">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-left mb-6">SKILLS</h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Software Card */}
          <div className="lg:w-1/2">
            <div className="bg-n-6 p-6 rounded-lg shadow-md h-full spotlight-card">
              <h3 className="text-3xl font-bold mb-6">Software</h3>
              <div className="space-y-6">
                {softwareSkills.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-4">
                      {category.icon} {/* SVG Icon for the category */}
                      <h4 className="text-2xl font-normal">{category.category}</h4>
                    </div>
                    <ul className="space-y-2 pl-8">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="text-lg text-gray-400">
                          <span className="mr-2">●</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Other Skills */}
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {otherSkillsCategories.map((category, index) => (
                <div key={index} className="bg-n-6 p-6 rounded-lg shadow-md spotlight-card">
                  <h4 className="text-3xl font-semibold mb-4">{category.category}</h4>
                  <ul className="space-y-2 pl-8">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-lg text-gray-400">
                        {typeof skill === 'string' ? (
                          <span className="mr-2">●</span> // Default dot for non-programming skills
                        ) : (
                          <span className="mr-2">
                            {skill.familiarity === 'high' ? '●' : '○'} {/* Full dot for high, hollow dot for medium */}
                          </span>
                        )}
                        {typeof skill === 'string' ? skill : skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
