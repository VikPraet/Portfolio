import React, { useEffect, useState } from 'react';
import Prism from 'prismjs'; // For syntax highlighting
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme for Prism

const ProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false); // Track if modal is closing
  const [isVisible, setIsVisible] = useState(false); // Track visibility for enter animation
  const [showBackdrop, setShowBackdrop] = useState(false); // Control backdrop visibility

  // Lock background scroll when the modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    Prism.highlightAll(); // Highlight code snippets

    // Trigger the modal enter animation after mounting
    setTimeout(() => {
      setShowBackdrop(true); // Trigger backdrop visibility with a delay
    }, 10); // Small delay to ensure modal is mounted before animation

    setTimeout(() => {
      setIsVisible(true); // Trigger modal content visibility with animation
    }, 20); // Delay to make sure backdrop fades in first

    // Add event listener to handle "Esc" key close
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

  // Handle closing the modal with reverse animation
  const handleClose = () => {
    setIsClosing(true); // Start closing animation
    setIsVisible(false); // Trigger the exit animation for modal content
    setTimeout(() => {
      setShowBackdrop(false); // Smoothly fade out the backdrop
    }, 200); // Fade out backdrop slightly after content starts closing
    setTimeout(() => {
      onClose(); // Close the modal after both animations complete
    }, 500); // Match the animation duration (500ms)
  };

  return (
    <>
      {/* Modal backdrop with fade-in and fade-out animation */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out
        ${showBackdrop ? 'opacity-75' : 'opacity-0'}`}
        onClick={handleClose} // Close when clicking outside modal
      ></div>

      {/* Modal container with full scrolling behavior */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="flex items-start justify-center min-h-screen pt-12 pb-12"
          onClick={handleClose} // Close when clicking the container outside the modal content
        >
          {/* Modal content with reverse animation for opening */}
          <div
            className={`relative bg-n-7 text-n-1 rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto modal-content
              ${isVisible ? 'modal-enter-active' : 'modal-enter'} 
              ${isClosing ? 'modal-exit-active' : ''}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-n-3 hover:text-color-3 transition-colors duration-300 text-2xl focus:outline-none"
              onClick={handleClose}
            >
              &#10005; {/* X icon */}
            </button>

            {/* Modal header */}
            <h2 className="text-3xl font-bold mb-6 text-color-3">{project.title}</h2>

            {/* Modal content */}
            <div className="space-y-6">
              {project.content &&
                project.content.map((block, index) => {
                  switch (block.type) {
                    case 'text':
                      return (
                        <p key={index} className="text-lg text-gray-300">
                          {block.value}
                        </p>
                      );
                    case 'image':
                      return (
                        <div
                          key={index}
                          className={block.size === 'small'
                            ? 'inline-block w-1/3 p-2'
                            : block.size === 'medium'
                              ? 'inline-block w-1/2 p-2'
                              : 'w-full p-4'}
                        >
                          <img
                            src={block.src}
                            alt="Project visual"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                          />
                        </div>
                      );
                    case 'video':
                      return (
                        <div key={index} className="w-full aspect-w-16 aspect-h-9">
                          <iframe
                            title="Project Video"
                            src={block.src}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow-lg"
                          ></iframe>
                        </div>
                      );
                    case 'code':
                      return (
                        <pre key={index} className="language-js bg-n-9 p-4 rounded-md overflow-auto">
                          <code className="language-js">{block.value}</code>
                        </pre>
                      );
                    default:
                      return null;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
