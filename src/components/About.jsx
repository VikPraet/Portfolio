import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-n-8 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-start gap-8">
        
        {/* Smaller Image with square aspect ratio */}
        <div className="flex-shrink-0 lg:w-1/4">
          <img 
            src={`${import.meta.env.BASE_URL}ProfilePic.jpg`} // Corrected image path
            alt="Your Name"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            style={{ aspectRatio: "1 / 1" }} // Ensure the image is always square
          />
          {/* CV Button */}
          <div className="mt-4">
            <a 
              href={`${import.meta.env.BASE_URL}CV.pdf?v=2`} // Corrected PDF link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2.5 text-lg font-medium text-white bg-color-1 hover:bg-color-3 rounded-lg transition duration-300 ease-in-out hover:scale-105"
            >
              {/* Adjusted SVG Icon Size */}
              <svg 
                className="h-7 w-7 mr-3" // Tailwind classes to control size
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path 
                  d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-bold mb-4">
            VIK <span className="text-color-3">PRAET</span> {/* Apply custom color to PRAET */}
          </h2>
          <p className="text-lg mb-6">
            Ever since I was young, video games have fascinated me. What began as a love for playing evolved into a deep curiosity about how games are made and the mechanics that bring them to life. 
            Over the years, this curiosity grew into a passion for understanding the technology behind games, which led me to pursue Game Development.
          </p>
          <p className="text-lg">
            Currently, I'm in my third year of{' '}
            <a
              href="https://www.digitalartsandentertainment.be/page/31/Game+Development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color-3 hover:text-color-1 transition-all duration-200 ease font-bold"
            >
              Game Development at Digital Arts and Entertainment
            </a>{' '}
            at{' '}
            <a
              href="https://www.howest.be/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color-3 hover:text-color-1 transition-all duration-200 ease font-bold"
            >
              Howest University of Applied Sciences
            </a>.{' '}
            My focus is on programming, with a particular interest in C++, where I create complex systems, custom engines, and games from the ground up. While I love working on solo projects, I also thrive in collaborative environments, where I can contribute to larger projects. I’m always eager to take on new challenges and push the boundaries of what’s possible in game development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
