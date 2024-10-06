import React, { useEffect, useState } from 'react';
import Prism from 'prismjs'; // For syntax highlighting
import 'prismjs/components/prism-csharp';  // For C#
import Tag from './Tag'; // Import the Tag component

const ProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    Prism.highlightAll();

    setTimeout(() => {
      setShowBackdrop(true);
    }, 10);

    setTimeout(() => {
      setIsVisible(true);
    }, 20);

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      setShowBackdrop(false);
    }, 200);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out ${showBackdrop ? 'opacity-75' : 'opacity-0'}`}
        onClick={handleClose}
      ></div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-start justify-center min-h-screen pt-12 pb-12" onClick={handleClose}>
          {/* Modal Wrapper */}
          <div className={`modal-border-wrapper max-w-[calc(100%-20px)] lg:max-w-5xl ${isVisible ? 'modal-enter-active' : 'modal-enter'} ${isClosing ? 'modal-exit-active' : ''}`}>
            <div
              className={`relative bg-n-7 text-n-1 rounded-lg shadow-lg p-8 w-full mx-auto z-10 modal-content ${isVisible ? 'modal-enter-active' : 'modal-enter'} ${isClosing ? 'modal-exit-active' : ''}`}
              onClick={(e) => e.stopPropagation()}
              style={{ minHeight: '300px' }}
            >
              <button
                className="absolute top-4 right-4 text-n-3 hover:text-color-3 transition-colors duration-300 text-2xl focus:outline-none"
                onClick={handleClose}
              >
                &#10005;
              </button>

              {/* Title */}
              <h2 className="text-3xl px-3 font-bold mb-6 text-color-3">{project.title}</h2>

              {/* Tags Section */}
              {project.tags && (
                <div className="px-3 mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                  ))}
                </div>
              )}

              <div className="space-y-6">
                {project.content &&
                  project.content.map((block, index) => {
                    switch (block.type) {
                      case 'text':
                        return (
                          <div key={index} className="px-3">
                            <p className="text-lg text-gray-300 break-words">{block.value}</p>
                          </div>
                        );
                      case 'title':
                        return (
                          <div key={index} className="px-3 py-2">
                            <h3 className="text-2xl font-semibold text-gray-300">{block.value}</h3>
                          </div>
                        );
                      case 'subtitle':
                        return (
                          <div key={index} className="px-3 py-2">
                            <h4 className="text-xl font-bold text-gray-200">{block.value}</h4>
                          </div>
                        );
                      case 'image':
                        return (
                          <div
                            key={index}
                            className={
                              block.size === 'small'
                                ? 'inline-block w-1/3 px-3'
                                : block.size === 'medium'
                                ? 'inline-block w-1/2 px-3'
                                : 'w-full px-3'
                            }
                          >
                            <img src={block.src} alt="Project visual" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                          </div>
                        );
                      case 'video':
                        return (
                          <div key={index} className="px-3">
                            <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                              <iframe
                                title="Project Video"
                                src={block.src}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              ></iframe>
                            </div>
                          </div>
                        );
                      case 'gifVideo':
                        return (
                          <div key={index} className="px-3">
                            <video
                              src={block.src}
                              autoPlay
                              loop
                              muted
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        );
                      case 'code':
                        return (
                          <div key={index} className="px-3">
                            <pre className={`language-${block.language} bg-n-9 p-4 rounded-md overflow-auto`} style={{ maxWidth: '100%', whiteSpace: 'pre-wrap' }}>
                              <code className={`language-${block.language}`}>{block.value}</code>
                            </pre>
                          </div>
                        );
                      case 'sketchfab':
                        return (
                          <div key={index} className="px-3">
                            <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                              <iframe
                                title="Sketchfab Model"
                                src={block.src}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              ></iframe>
                            </div>
                          </div>
                        );
                      case 'link':
                        return (
                          <div key={index} className="flex justify-center items-center space-x-2 px-3">
                            {block.platform === 'github' && project.links && project.links.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-color-1 text-white px-4 py-2 rounded-md hover:bg-color-3 transition duration-250 ease"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 98 96">
                                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                                </svg>
                                <span>View on GitHub</span>
                              </a>
                            )}
                            {block.platform === 'itch' && project.links && project.links.itch && (
                              <a
                                href={project.links.itch}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-color-1 text-white px-4 py-2 rounded-md hover:bg-color-3 transition duration-250 ease"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 512 512">
                                  <path d="M 71.92 34.77 C 50.2 47.67 7.4 96.84 7 109.73 v 21.34 c 0 27.06 25.29 50.84 48.25 50.84 c 27.57 0 50.54 -22.85 50.54 -50 c 0 27.12 22.18 50 49.76 50 s 49 -22.85 49 -50 c 0 27.12 23.59 50 51.16 50 h 0.5 c 27.57 0 51.16 -22.85 51.16 -50 c 0 27.12 21.47 50 49 50 s 49.76 -22.85 49.76 -50 c 0 27.12 23 50 50.54 50 c 23 0 48.25 -23.78 48.25 -50.84 v -21.34 c -0.4 -12.9 -43.2 -62.07 -64.92 -75 C 372.56 32.4 325.76 32 256 32 S 91.14 33.1 71.92 34.77 Z m 132.32 134.39 c -22 38.4 -77.9 38.71 -99.85 0.25 c -13.17 23.14 -43.17 32.07 -56 27.66 c -3.87 40.15 -13.67 237.13 17.73 269.15 c 80 18.67 302.08 18.12 379.76 0 c 31.65 -32.27 21.32 -232 17.75 -269.15 c -12.92 4.44 -42.88 -4.6 -56 -27.66 c -22 38.52 -77.85 38.1 -99.85 -0.24 c -7.1 12.49 -23.05 28.94 -51.76 28.94 a 57.54 57.54 0 0 1 -51.75 -28.94 Z m -41.58 53.77 c 16.47 0 31.09 0 49.22 19.78 a 436.91 436.91 0 0 1 88.18 0 C 318.22 223 332.85 223 349.31 223 c 52.33 0 65.22 77.53 83.87 144.45 c 17.26 62.15 -5.52 63.67 -33.95 63.73 c -42.15 -1.57 -65.49 -32.18 -65.49 -62.79 c -39.25 6.43 -101.93 8.79 -155.55 0 c 0 30.61 -23.34 61.22 -65.49 62.79 c -28.42 -0.06 -51.2 -1.58 -33.94 -63.73 c 18.67 -67 31.56 -144.45 83.88 -144.45 Z M 256 270.79 s -44.38 40.77 -52.35 55.21 l 29 -1.17 v 25.32 c 0 1.55 21.34 0.16 23.33 0.16 c 11.65 0.54 23.31 1 23.31 -0.16 v -25.28 l 29 1.17 c -8 -14.48 -52.35 -55.24 -52.35 -55.24 Z" />
                                </svg>
                                <span>View on Itch.io</span>
                              </a>
                            )}
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
