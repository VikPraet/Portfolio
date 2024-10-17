import React, { useState, useEffect } from 'react';

const MediaWithLoader = ({ src, alt, type }) => {
  const [loading, setLoading] = useState(true);

  // Ensure loading starts immediately when the component mounts
  useEffect(() => {
    setLoading(true); // Start loading animation immediately when the component mounts or src changes
  }, [src]);

  const handleLoad = () => setLoading(false);

  return (
    <div className="relative rounded-lg overflow-hidden w-full">
      {/* Developer-inspired {< / >} loading animation */}
      {loading && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="developer-loader">
            <span>&#123;</span> {/* Left curly brace */}
            <span>&lt;</span> {/* Left angle bracket */}
            <span>/</span> {/* Slash */}
            <span>&gt;</span> {/* Right angle bracket */}
            <span>&#125;</span> {/* Right curly brace */}
          </div>
        </div>
      )}

      {/* Render image */}
      {type === 'image' && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`transition-opacity duration-500 ease-in-out ${
            loading ? 'opacity-0' : 'opacity-100'
          } w-full h-auto object-cover`}
        />
      )}

      {/* Render video */}
      {type === 'video' && (
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={src}
            title="Video"
            onLoad={handleLoad}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Render GIF-like video */}
      {type === 'gifVideo' && (
        <video
          src={src}
          autoPlay
          loop
          muted
          onLoadedData={handleLoad}
          className={`transition-opacity duration-500 ease-in-out ${
            loading ? 'opacity-0' : 'opacity-100'
          } w-full h-auto`}
        />
      )}

      {/* Render Sketchfab iframe */}
      {type === 'sketchfab' && (
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={src}
            title="Sketchfab Model"
            onLoad={handleLoad}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MediaWithLoader;
