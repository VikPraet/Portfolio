import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-n-8 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-start gap-8">
        
        {/* Smaller Image with square aspect ratio */}
        <div className="flex-shrink-0 lg:w-1/4">
          <img 
            src="./src/assets/Profilepic.jpg" // Replace with your actual image path
            alt="Your Name"
            className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square"
          />
          {/* CV Button */}
          <div className="mt-4 text-center">
            <a 
              href="./src/assets/CV.pdf" // Link to your CV PDF file
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-color-1 hover:bg-color-3 rounded-lg transition duration-300 ease-in-out hover:scale-105"
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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            Hi, I'm Vik Praet, a game and software developer. I have a passion for building digital experiences that merge creativity and technology.
          </p>
          <p className="text-lg">
            From game design to software solutions, I love solving complex problems and creating seamless, enjoyable projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
