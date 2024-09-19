import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#projects"); // Default to "Projects"

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scrolling and update active section based on position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#projects", "#about", "#contact", "#additional"];
      sections.forEach((section) => {
        const element = document.querySelector(section);
        const offset = element?.getBoundingClientRect().top;
        if (offset >= 0 && offset < window.innerHeight / 2) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const target = document.querySelector(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center p-6 bg-n-8 text-n-1 fixed top-0 left-0 w-full z-50">
      {/* Left side: Image and Name (Both link to Projects section) */}
      <a
        href="#projects"
        className="flex items-center space-x-4"
        onClick={() => handleNavClick("#projects")}
      >
        <img
          src="./src/assets/vve_t.png" // Replace with the actual image path
          alt="Your Name"
          className="w-12 h-12 object-cover" // No rounding for the image
        />
        <span className="text-2xl font-semibold hover:text-color-3 transition-colors">
          Vik Praet
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8">
        <a
          href="#projects"
          className={`relative text-lg hover:text-color-3 transition-colors duration-300 ${
            activeSection === "#projects" ? "text-color-3" : ""
          }`}
          onClick={() => handleNavClick("#projects")}
        >
          Projects
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-color-3 transition-all duration-300 ${
              activeSection === "#projects" ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
        <a
          href="#about"
          className={`relative text-lg hover:text-color-3 transition-colors duration-300 ${
            activeSection === "#about" ? "text-color-3" : ""
          }`}
          onClick={() => handleNavClick("#about")}
        >
          About
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-color-3 transition-all duration-300 ${
              activeSection === "#about" ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
        <a
          href="#contact"
          className={`relative text-lg hover:text-color-3 transition-colors duration-300 ${
            activeSection === "#contact" ? "text-color-3" : ""
          }`}
          onClick={() => handleNavClick("#contact")}
        >
          Contact
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-color-3 transition-all duration-300 ${
              activeSection === "#contact" ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
        <a
          href="#additional"
          className={`relative text-lg hover:text-color-3 transition-colors duration-300 ${
            activeSection === "#additional" ? "text-color-3" : ""
          }`}
          onClick={() => handleNavClick("#additional")}
        >
          Additional
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-color-3 transition-all duration-300 ${
              activeSection === "#additional" ? "w-full" : "w-0"
            }`}
          ></span>
        </a>
      </nav>

      {/* Hamburger Button for Mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center focus:outline-none relative w-8 h-8"
        aria-label="Toggle menu"
      >
        {/* Hamburger icon lines */}
        <div
          className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ease-in-out ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`h-1 w-8 bg-white rounded-full my-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "transform -rotate-45 w-8 -translate-y-2"
              : "w-6 ml-auto"
          }`}
        />
      </button>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed top-16 left-0 w-full bg-n-8 text-center flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a
              href="#projects"
              className="block text-3xl hover:text-color-3 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-3xl hover:text-color-3 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-3xl hover:text-color-3 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#additional"
              className="block text-3xl hover:text-color-3 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Additional
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
