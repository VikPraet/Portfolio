import React, { useEffect, useState } from 'react';
import Prism from 'prismjs'; // For syntax highlighting

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
      <div className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out ${showBackdrop ? 'opacity-75' : 'opacity-0'}`} onClick={handleClose}></div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-start justify-center min-h-screen pt-12 pb-12" onClick={handleClose}>
          <div className={`modal-border-wrapper ${isVisible ? 'modal-enter-active' : 'modal-enter'} ${isClosing ? 'modal-exit-active' : ''}`}>
            <div className={`relative bg-n-7 text-n-1 rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto z-10 modal-content ${isVisible ? 'modal-enter-active' : 'modal-enter'} ${isClosing ? 'modal-exit-active' : ''}`} onClick={(e) => e.stopPropagation()} style={{ minHeight: '300px' }}>
              <button className="absolute top-4 right-4 text-n-3 hover:text-color-3 transition-colors duration-300 text-2xl focus:outline-none" onClick={handleClose}>&#10005;</button>
              <h2 className="text-3xl font-bold mb-6 text-color-3">{project.title}</h2>
              <div className="space-y-6">
                {project.content && project.content.map((block, index) => {
                  switch (block.type) {
                    case 'text':
                      return (
                        <div key={index} className="px-3"> {/* Apply padding here */}
                          <p className="text-lg text-gray-300 break-words">{block.value}</p>
                        </div>
                      );
                    case 'title': // New case for title
                      return (
                        <div key={index} className="px-3"> {/* Apply padding here */}
                          <h3 className="text-2xl font-semibold text-gray-300">{block.value}</h3> {/* Style your title here */}
                        </div>
                      );
                    case 'image':
                      return (
                        <div key={index} className={block.size === 'small' ? 'inline-block w-1/3 px-3' : block.size === 'medium' ? 'inline-block w-1/2 px-3' : 'w-full px-3'}>
                          <img src={block.src} alt="Project visual" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                        </div>
                      );
                    case 'video':
                      return (
                        <div key={index} className="px-3"> {/* Apply padding here */}
                          <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9"> {/* Apply aspect ratio here */}
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
                    case 'code':
                      return (
                        <div key={index} className="px-3"> {/* Apply padding here */}
                          <pre className="language-js bg-n-9 p-4 rounded-md overflow-auto">
                            <code className="language-js">{block.value}</code>
                          </pre>
                        </div>
                      );
                    
                    case 'sketchfab':
                      return (
                        <div key={index} className="px-3"> {/* Apply padding here */}
                          <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9"> {/* Aspect ratio for Sketchfab */}
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
