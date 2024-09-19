// src/components/StartSection.jsx
import React from 'react';
import Typical from 'react-typical'; // Correctly using react-typical

const StartSection = () => {
  return (
    <section
      id="start"
      className="h-auto pt-52 flex items-center justify-center bg-n-8 text-white px-4 sm:px-6 lg:px-8"
    >
      <div className="text-left max-w-full sm:max-w-md md:max-w-screen-md lg:max-w-screen-lg mx-auto">
        {/* Introductory Text */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm {' '}
          <span className="text-color-3">Vik</span> {/* Accent color */}
        </h1>

        {/* Typing Effect with Colored Words */}
        <p className="mt-4 text-lg md:text-xl">
          I'm a{' '}
          <span className="text-color-3"> {/* Accent color for typed words */}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'g', 100, 'ga', 100, 'gam', 100, 'game', 3500, // "game developer"
                's', 85, 'so', 85, 'sof', 85, 'soft', 85, 'softw', 85, 'softwa', 85, 'softwar', 85, 'software', 3500, // "software developer"
              ]}
            />
          </span>{' '}
          developer
        </p>

        {/* Short Introduction to the Portfolio */}
        <p className="mt-4 text-md md:text-lg text-gray-300">
        Welcome! I’m a game developer with a passion for crafting engaging experiences and solving complex problems. I focus on building dynamic gameplay systems that merge creativity and technology. Take a look around to see what I've been working on!
        </p>
      </div>
    </section>
  );
};

export default StartSection;
